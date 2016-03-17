(ns lt.plugins.nerdy-painter
  (:require [lt.object :as object]
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn- wrapped-string?
  "check if text is an encoded string and if so returns its content"
  [text]
  (second (re-find #"\"(.*)\"" text)))

(defn- base64?
  "check if the value passed is a lighttable string value with a base64 encoded
  image inside. If so return the encoded image"
  [result]
  (when-let [inner-text (wrapped-string? result)]
    (when (and (= 0 (mod (count inner-text) 4))
               (re-find #"^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$" inner-text))
      inner-text)))

; create an img HTML tag with a base64 content
(defui image [src]
  [:img {:src (str "data:image/png;base64," src)}])

; modify the behavior of the clojure editor to first check if the
; passed result is a base64 encoded image\; if so then show it
; otherwise show the passed result value)
(behavior ::clj-result.inline
          :triggers #{:editor.eval.clj.result.inline}
          :reaction
  (fn [obj res]
    (doseq [result (-> res :results)
            :let [meta (:meta result)
                  loc {:line (dec (:end-line meta))
                       :ch (:end-column meta)
                       :start-line (dec (:line meta))}
                  src (base64? (:result result))]]
      (cond
        (:stack result)  (object/raise obj :editor.eval.clj.exception result :passed)
        (not (nil? src)) (object/raise obj :editor.result.underline (image src) loc)
        :default         (object/raise obj :editor.result (:result result) loc)))))
