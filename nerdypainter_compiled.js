if(!lt.util.load.provided_QMARK_('lt.plugins.nerdy-painter')) {
goog.provide('lt.plugins.nerdy_painter');
goog.require('cljs.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.object');
goog.require('lt.object');
/**
* check if text is an encoded string and if so returns its content
*/
lt.plugins.nerdy_painter.wrapped_string_QMARK_ = (function wrapped_string_QMARK_(text){return cljs.core.second.call(null,cljs.core.re_find.call(null,/\"(.*)\"/,text));
});
/**
* check if the value passed is a lighttable string value with a base64 encoded
* image inside. If so return the encoded image
*/
lt.plugins.nerdy_painter.base64_QMARK_ = (function base64_QMARK_(result){var temp__4092__auto__ = lt.plugins.nerdy_painter.wrapped_string_QMARK_.call(null,result);if(cljs.core.truth_(temp__4092__auto__))
{var inner_text = temp__4092__auto__;if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,0,cljs.core.mod.call(null,cljs.core.count.call(null,inner_text),4));if(and__4872__auto__)
{var and__4872__auto____$1 = (cljs.core.count.call(null,inner_text) >= 92);if(and__4872__auto____$1)
{return cljs.core.re_find.call(null,/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/,inner_text);
} else
{return and__4872__auto____$1;
}
} else
{return and__4872__auto__;
}
})()))
{return inner_text;
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.nerdy_painter.image = (function image(src){var e__6275__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("data:image/png;base64,"),cljs.core.str(src)].join('')], null)], null));var seq__7246_7264 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7247_7265 = null;var count__7248_7266 = 0;var i__7249_7267 = 0;while(true){
if((i__7249_7267 < count__7248_7266))
{var vec__7250_7268 = cljs.core._nth.call(null,chunk__7247_7265,i__7249_7267);var ev__6276__auto___7269 = cljs.core.nth.call(null,vec__7250_7268,0,null);var func__6277__auto___7270 = cljs.core.nth.call(null,vec__7250_7268,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___7269,func__6277__auto___7270);
{
var G__7271 = seq__7246_7264;
var G__7272 = chunk__7247_7265;
var G__7273 = count__7248_7266;
var G__7274 = (i__7249_7267 + 1);
seq__7246_7264 = G__7271;
chunk__7247_7265 = G__7272;
count__7248_7266 = G__7273;
i__7249_7267 = G__7274;
continue;
}
} else
{var temp__4092__auto___7275 = cljs.core.seq.call(null,seq__7246_7264);if(temp__4092__auto___7275)
{var seq__7246_7276__$1 = temp__4092__auto___7275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7246_7276__$1))
{var c__5632__auto___7277 = cljs.core.chunk_first.call(null,seq__7246_7276__$1);{
var G__7278 = cljs.core.chunk_rest.call(null,seq__7246_7276__$1);
var G__7279 = c__5632__auto___7277;
var G__7280 = cljs.core.count.call(null,c__5632__auto___7277);
var G__7281 = 0;
seq__7246_7264 = G__7278;
chunk__7247_7265 = G__7279;
count__7248_7266 = G__7280;
i__7249_7267 = G__7281;
continue;
}
} else
{var vec__7251_7282 = cljs.core.first.call(null,seq__7246_7276__$1);var ev__6276__auto___7283 = cljs.core.nth.call(null,vec__7251_7282,0,null);var func__6277__auto___7284 = cljs.core.nth.call(null,vec__7251_7282,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___7283,func__6277__auto___7284);
{
var G__7285 = cljs.core.next.call(null,seq__7246_7276__$1);
var G__7286 = null;
var G__7287 = 0;
var G__7288 = 0;
seq__7246_7264 = G__7285;
chunk__7247_7265 = G__7286;
count__7248_7266 = G__7287;
i__7249_7267 = G__7288;
continue;
}
}
} else
{}
}
break;
}
return e__6275__auto__;
});
lt.plugins.nerdy_painter.__BEH__clj_result__DOT__inline = (function __BEH__clj_result__DOT__inline(obj,res){var seq__7258 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res));var chunk__7260 = null;var count__7261 = 0;var i__7262 = 0;while(true){
if((i__7262 < count__7261))
{var result = cljs.core._nth.call(null,chunk__7260,i__7262);var meta_7289 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_7290 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_7289) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_7289),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_7289) - 1)], null);var src_7291 = lt.plugins.nerdy_painter.base64_QMARK_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),result,new cljs.core.Keyword(null,"passed","passed",4313490402));
} else
{if(!((src_7291 == null)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.plugins.nerdy_painter.image.call(null,src_7291),loc_7290);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),loc_7290);
} else
{}
}
}
{
var G__7292 = seq__7258;
var G__7293 = chunk__7260;
var G__7294 = count__7261;
var G__7295 = (i__7262 + 1);
seq__7258 = G__7292;
chunk__7260 = G__7293;
count__7261 = G__7294;
i__7262 = G__7295;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7258);if(temp__4092__auto__)
{var seq__7258__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7258__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__7258__$1);{
var G__7296 = cljs.core.chunk_rest.call(null,seq__7258__$1);
var G__7297 = c__5632__auto__;
var G__7298 = cljs.core.count.call(null,c__5632__auto__);
var G__7299 = 0;
seq__7258 = G__7296;
chunk__7260 = G__7297;
count__7261 = G__7298;
i__7262 = G__7299;
continue;
}
} else
{var result = cljs.core.first.call(null,seq__7258__$1);var meta_7300 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_7301 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_7300) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_7300),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_7300) - 1)], null);var src_7302 = lt.plugins.nerdy_painter.base64_QMARK_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),result,new cljs.core.Keyword(null,"passed","passed",4313490402));
} else
{if(!((src_7302 == null)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.plugins.nerdy_painter.image.call(null,src_7302),loc_7301);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),loc_7301);
} else
{}
}
}
{
var G__7303 = cljs.core.next.call(null,seq__7258__$1);
var G__7304 = null;
var G__7305 = 0;
var G__7306 = 0;
seq__7258 = G__7303;
chunk__7260 = G__7304;
count__7261 = G__7305;
i__7262 = G__7306;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.nerdy-painter","clj-result.inline","lt.plugins.nerdy-painter/clj-result.inline",4501491080),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.nerdy_painter.__BEH__clj_result__DOT__inline,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.inline","editor.eval.clj.result.inline",1424832446),null], null), null));
}

//# sourceMappingURL=nerdypainter_compiled.js.map