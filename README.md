# nerdy-painter
Lighttable plugin for inline image displaying in Clojure's plugin

nerdy-painter modifies your Clojure's eval behavior to allow images in base64 format to be displayed as inline results.

##usage
This plugin is mainly meant to be used as a middleware between Lighttable and a plotting/charting/image library.
If you want to display an images in Lighttable, simply create it, encode it as a base64 string and return it; the encoding will be automatically recognized and wrapped in an HTML img tag.

Examples:
- Images created at runtime

```Clojure
(def bus "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")

bus ; displays the image below
```
![bus](https://raw.githubusercontent.com/carocad/nerdy-painter/master/resources/indice.gif)

- read an image's file:

```Clojure
;; (:require [clojure.data.codec.base64 :as b64])

(with-open [in (clojure.java.io/input-stream "https://raw.githubusercontent.com/carocad/nerdy-painter/master/resources/latex-eq-preso.jpg")
            out (java.io.ByteArrayOutputStream.)]
  (clojure.java.io/copy in out)
  (apply str (map char (b64/encode (.toByteArray out)))))

;; displays the image below
```
![equation](https://raw.githubusercontent.com/carocad/nerdy-painter/master/resources/latex-eq-preso.jpg)

- dynamic images with SVG:

```Clojure
;; (:require [clojure.data.codec.base64 :as b64])

(apply str (map char (b64/encode (.getBytes (slurp "https://raw.githubusercontent.com/carocad/nerdy-painter/master/resources/sprout-chart.svg")))))

;; displays the image below
```
![sprouts](https://sarasoueidan.com/images/svg-vs-gif--sprout-chart.svg)

### with Incanter
If you are using the popular incanter and you want to take advantage of the great dynamicity of Lighttable then this plugin can help you accomplish that.

we need to convert the JFreecharts objects into base64-encoded strings. You will need to have the following dependencies in your project.clj

```Clojure
[incanter/incanter-charts "1.5.5"] ; to create the chart objects
[org.clojure/data.codec "0.1.0"] ; to encode the chart objects in base 64
```

Now you need to create a plotting function. To isolate it from the rest of your code I will put it in a special namespace

```Clojure
(ns example.magic-plot
  (:import  [org.jfree.chart ChartUtilities]) ; Incanter dependency, don't worry
  (:require [clojure.data.codec.base64 :as b64]))

(defn plot
  [chart & options]
  (let [opts      (when options (apply assoc {} options))
        width     (or (:width opts) 400)
        height    (or (:height opts) 300)
        ; byte array with binary PNG data
        image-buf (ChartUtilities/encodeAsPNG (.createBufferedImage chart width height))]
     (clojure.string/join (map char (b64/encode image-buf)))))
```

That's it !!
Now anytime that you create a chart, you don't need to call `view` but `plot`. For example:
```
(ns example.core
  (:require [example.magic-plot :refer [plot]]
            [incanter.charts :as chart]))

(plot (chart/scatter-plot [1 2 3 4] [1 2 3 4]))
```
You should see the following:
![screenshot](https://raw.githubusercontent.com/carocad/nerdy-painter/master/resources/screenshot.png)

Enjoy :)

## License

Copyright © 2015 Camilo Roca

Distributed under the LGPL v3.

### Notes
- Some strings comply with the base64 format but are not. In some cases nerdy-painter will still recognize them as base64 and try to display them. This is a corner case !. I have not been able to create a full workaround; the current workaround only works for short strings, less than 92 chars, which is the size of a 1x1 white [pixel](http://proger.i-forge.net/%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80/[20121112]%20The%20smallest%20transparent%20pixel.html).
If you know a better way, by all means let me know.

- For developers: Remember that images formats are usually binary (png, jpg, etc) whereas SVG files are simply text files. Choose the proper way to read the images based on the image format.

