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
lt.plugins.nerdy_painter.image = (function image(src){var e__6275__auto__ = crate.core.html.call(null,((cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.seq.call(null,src)),"P"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("data:image/svg+xml;base64,"),cljs.core.str(src)].join('')], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("data:image/png;base64,"),cljs.core.str(src)].join('')], null)], null)));var seq__8958_8976 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8959_8977 = null;var count__8960_8978 = 0;var i__8961_8979 = 0;while(true){
if((i__8961_8979 < count__8960_8978))
{var vec__8962_8980 = cljs.core._nth.call(null,chunk__8959_8977,i__8961_8979);var ev__6276__auto___8981 = cljs.core.nth.call(null,vec__8962_8980,0,null);var func__6277__auto___8982 = cljs.core.nth.call(null,vec__8962_8980,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___8981,func__6277__auto___8982);
{
var G__8983 = seq__8958_8976;
var G__8984 = chunk__8959_8977;
var G__8985 = count__8960_8978;
var G__8986 = (i__8961_8979 + 1);
seq__8958_8976 = G__8983;
chunk__8959_8977 = G__8984;
count__8960_8978 = G__8985;
i__8961_8979 = G__8986;
continue;
}
} else
{var temp__4092__auto___8987 = cljs.core.seq.call(null,seq__8958_8976);if(temp__4092__auto___8987)
{var seq__8958_8988__$1 = temp__4092__auto___8987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8958_8988__$1))
{var c__5632__auto___8989 = cljs.core.chunk_first.call(null,seq__8958_8988__$1);{
var G__8990 = cljs.core.chunk_rest.call(null,seq__8958_8988__$1);
var G__8991 = c__5632__auto___8989;
var G__8992 = cljs.core.count.call(null,c__5632__auto___8989);
var G__8993 = 0;
seq__8958_8976 = G__8990;
chunk__8959_8977 = G__8991;
count__8960_8978 = G__8992;
i__8961_8979 = G__8993;
continue;
}
} else
{var vec__8963_8994 = cljs.core.first.call(null,seq__8958_8988__$1);var ev__6276__auto___8995 = cljs.core.nth.call(null,vec__8963_8994,0,null);var func__6277__auto___8996 = cljs.core.nth.call(null,vec__8963_8994,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___8995,func__6277__auto___8996);
{
var G__8997 = cljs.core.next.call(null,seq__8958_8988__$1);
var G__8998 = null;
var G__8999 = 0;
var G__9000 = 0;
seq__8958_8976 = G__8997;
chunk__8959_8977 = G__8998;
count__8960_8978 = G__8999;
i__8961_8979 = G__9000;
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
lt.plugins.nerdy_painter.__BEH__clj_result__DOT__inline = (function __BEH__clj_result__DOT__inline(obj,res){var seq__8970 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res));var chunk__8972 = null;var count__8973 = 0;var i__8974 = 0;while(true){
if((i__8974 < count__8973))
{var result = cljs.core._nth.call(null,chunk__8972,i__8974);var meta_9001 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_9002 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_9001) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_9001),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_9001) - 1)], null);var src_9003 = lt.plugins.nerdy_painter.base64_QMARK_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),result,new cljs.core.Keyword(null,"passed","passed",4313490402));
} else
{if(!((src_9003 == null)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.plugins.nerdy_painter.image.call(null,src_9003),loc_9002);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),loc_9002);
} else
{}
}
}
{
var G__9004 = seq__8970;
var G__9005 = chunk__8972;
var G__9006 = count__8973;
var G__9007 = (i__8974 + 1);
seq__8970 = G__9004;
chunk__8972 = G__9005;
count__8973 = G__9006;
i__8974 = G__9007;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8970);if(temp__4092__auto__)
{var seq__8970__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8970__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__8970__$1);{
var G__9008 = cljs.core.chunk_rest.call(null,seq__8970__$1);
var G__9009 = c__5632__auto__;
var G__9010 = cljs.core.count.call(null,c__5632__auto__);
var G__9011 = 0;
seq__8970 = G__9008;
chunk__8972 = G__9009;
count__8973 = G__9010;
i__8974 = G__9011;
continue;
}
} else
{var result = cljs.core.first.call(null,seq__8970__$1);var meta_9012 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_9013 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_9012) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_9012),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_9012) - 1)], null);var src_9014 = lt.plugins.nerdy_painter.base64_QMARK_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),result,new cljs.core.Keyword(null,"passed","passed",4313490402));
} else
{if(!((src_9014 == null)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.plugins.nerdy_painter.image.call(null,src_9014),loc_9013);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),loc_9013);
} else
{}
}
}
{
var G__9015 = cljs.core.next.call(null,seq__8970__$1);
var G__9016 = null;
var G__9017 = 0;
var G__9018 = 0;
seq__8970 = G__9015;
chunk__8972 = G__9016;
count__8973 = G__9017;
i__8974 = G__9018;
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