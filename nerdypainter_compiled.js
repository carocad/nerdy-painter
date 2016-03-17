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
{return cljs.core.re_find.call(null,/^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/,inner_text);
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
lt.plugins.nerdy_painter.image = (function image(src){var e__6275__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("data:image/png;base64,"),cljs.core.str(src)].join('')], null)], null));var seq__9926_9944 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9927_9945 = null;var count__9928_9946 = 0;var i__9929_9947 = 0;while(true){
if((i__9929_9947 < count__9928_9946))
{var vec__9930_9948 = cljs.core._nth.call(null,chunk__9927_9945,i__9929_9947);var ev__6276__auto___9949 = cljs.core.nth.call(null,vec__9930_9948,0,null);var func__6277__auto___9950 = cljs.core.nth.call(null,vec__9930_9948,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___9949,func__6277__auto___9950);
{
var G__9951 = seq__9926_9944;
var G__9952 = chunk__9927_9945;
var G__9953 = count__9928_9946;
var G__9954 = (i__9929_9947 + 1);
seq__9926_9944 = G__9951;
chunk__9927_9945 = G__9952;
count__9928_9946 = G__9953;
i__9929_9947 = G__9954;
continue;
}
} else
{var temp__4092__auto___9955 = cljs.core.seq.call(null,seq__9926_9944);if(temp__4092__auto___9955)
{var seq__9926_9956__$1 = temp__4092__auto___9955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9926_9956__$1))
{var c__5632__auto___9957 = cljs.core.chunk_first.call(null,seq__9926_9956__$1);{
var G__9958 = cljs.core.chunk_rest.call(null,seq__9926_9956__$1);
var G__9959 = c__5632__auto___9957;
var G__9960 = cljs.core.count.call(null,c__5632__auto___9957);
var G__9961 = 0;
seq__9926_9944 = G__9958;
chunk__9927_9945 = G__9959;
count__9928_9946 = G__9960;
i__9929_9947 = G__9961;
continue;
}
} else
{var vec__9931_9962 = cljs.core.first.call(null,seq__9926_9956__$1);var ev__6276__auto___9963 = cljs.core.nth.call(null,vec__9931_9962,0,null);var func__6277__auto___9964 = cljs.core.nth.call(null,vec__9931_9962,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___9963,func__6277__auto___9964);
{
var G__9965 = cljs.core.next.call(null,seq__9926_9956__$1);
var G__9966 = null;
var G__9967 = 0;
var G__9968 = 0;
seq__9926_9944 = G__9965;
chunk__9927_9945 = G__9966;
count__9928_9946 = G__9967;
i__9929_9947 = G__9968;
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
lt.plugins.nerdy_painter.__BEH__clj_result__DOT__inline = (function __BEH__clj_result__DOT__inline(obj,res){var seq__9938 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res));var chunk__9940 = null;var count__9941 = 0;var i__9942 = 0;while(true){
if((i__9942 < count__9941))
{var result = cljs.core._nth.call(null,chunk__9940,i__9942);var meta_9969 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_9970 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_9969) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_9969),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_9969) - 1)], null);var src_9971 = lt.plugins.nerdy_painter.base64_QMARK_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),result,new cljs.core.Keyword(null,"passed","passed",4313490402));
} else
{if(!((src_9971 == null)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.plugins.nerdy_painter.image.call(null,src_9971),loc_9970);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),loc_9970);
} else
{}
}
}
{
var G__9972 = seq__9938;
var G__9973 = chunk__9940;
var G__9974 = count__9941;
var G__9975 = (i__9942 + 1);
seq__9938 = G__9972;
chunk__9940 = G__9973;
count__9941 = G__9974;
i__9942 = G__9975;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9938);if(temp__4092__auto__)
{var seq__9938__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9938__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__9938__$1);{
var G__9976 = cljs.core.chunk_rest.call(null,seq__9938__$1);
var G__9977 = c__5632__auto__;
var G__9978 = cljs.core.count.call(null,c__5632__auto__);
var G__9979 = 0;
seq__9938 = G__9976;
chunk__9940 = G__9977;
count__9941 = G__9978;
i__9942 = G__9979;
continue;
}
} else
{var result = cljs.core.first.call(null,seq__9938__$1);var meta_9980 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_9981 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_9980) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_9980),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_9980) - 1)], null);var src_9982 = lt.plugins.nerdy_painter.base64_QMARK_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),result,new cljs.core.Keyword(null,"passed","passed",4313490402));
} else
{if(!((src_9982 == null)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.plugins.nerdy_painter.image.call(null,src_9982),loc_9981);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),loc_9981);
} else
{}
}
}
{
var G__9983 = cljs.core.next.call(null,seq__9938__$1);
var G__9984 = null;
var G__9985 = 0;
var G__9986 = 0;
seq__9938 = G__9983;
chunk__9940 = G__9984;
count__9941 = G__9985;
i__9942 = G__9986;
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