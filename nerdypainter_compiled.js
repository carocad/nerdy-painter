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
lt.plugins.nerdy_painter.image = (function image(src){var e__6275__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("data:image/png;base64,"),cljs.core.str(src)].join('')], null)], null));var seq__6466_6484 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__6467_6485 = null;var count__6468_6486 = 0;var i__6469_6487 = 0;while(true){
if((i__6469_6487 < count__6468_6486))
{var vec__6470_6488 = cljs.core._nth.call(null,chunk__6467_6485,i__6469_6487);var ev__6276__auto___6489 = cljs.core.nth.call(null,vec__6470_6488,0,null);var func__6277__auto___6490 = cljs.core.nth.call(null,vec__6470_6488,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6489,func__6277__auto___6490);
{
var G__6491 = seq__6466_6484;
var G__6492 = chunk__6467_6485;
var G__6493 = count__6468_6486;
var G__6494 = (i__6469_6487 + 1);
seq__6466_6484 = G__6491;
chunk__6467_6485 = G__6492;
count__6468_6486 = G__6493;
i__6469_6487 = G__6494;
continue;
}
} else
{var temp__4092__auto___6495 = cljs.core.seq.call(null,seq__6466_6484);if(temp__4092__auto___6495)
{var seq__6466_6496__$1 = temp__4092__auto___6495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6466_6496__$1))
{var c__5632__auto___6497 = cljs.core.chunk_first.call(null,seq__6466_6496__$1);{
var G__6498 = cljs.core.chunk_rest.call(null,seq__6466_6496__$1);
var G__6499 = c__5632__auto___6497;
var G__6500 = cljs.core.count.call(null,c__5632__auto___6497);
var G__6501 = 0;
seq__6466_6484 = G__6498;
chunk__6467_6485 = G__6499;
count__6468_6486 = G__6500;
i__6469_6487 = G__6501;
continue;
}
} else
{var vec__6471_6502 = cljs.core.first.call(null,seq__6466_6496__$1);var ev__6276__auto___6503 = cljs.core.nth.call(null,vec__6471_6502,0,null);var func__6277__auto___6504 = cljs.core.nth.call(null,vec__6471_6502,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6503,func__6277__auto___6504);
{
var G__6505 = cljs.core.next.call(null,seq__6466_6496__$1);
var G__6506 = null;
var G__6507 = 0;
var G__6508 = 0;
seq__6466_6484 = G__6505;
chunk__6467_6485 = G__6506;
count__6468_6486 = G__6507;
i__6469_6487 = G__6508;
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
lt.plugins.nerdy_painter.__BEH__clj_result__DOT__inline = (function __BEH__clj_result__DOT__inline(obj,res){var seq__6478 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res));var chunk__6480 = null;var count__6481 = 0;var i__6482 = 0;while(true){
if((i__6482 < count__6481))
{var result = cljs.core._nth.call(null,chunk__6480,i__6482);var meta_6509 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_6510 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_6509) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_6509),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_6509) - 1)], null);var src_6511 = lt.plugins.nerdy_painter.base64_QMARK_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),result,new cljs.core.Keyword(null,"passed","passed",4313490402));
} else
{if(!((src_6511 == null)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),lt.plugins.nerdy_painter.image.call(null,src_6511),loc_6510);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),loc_6510);
} else
{}
}
}
{
var G__6512 = seq__6478;
var G__6513 = chunk__6480;
var G__6514 = count__6481;
var G__6515 = (i__6482 + 1);
seq__6478 = G__6512;
chunk__6480 = G__6513;
count__6481 = G__6514;
i__6482 = G__6515;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6478);if(temp__4092__auto__)
{var seq__6478__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6478__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6478__$1);{
var G__6516 = cljs.core.chunk_rest.call(null,seq__6478__$1);
var G__6517 = c__5632__auto__;
var G__6518 = cljs.core.count.call(null,c__5632__auto__);
var G__6519 = 0;
seq__6478 = G__6516;
chunk__6480 = G__6517;
count__6481 = G__6518;
i__6482 = G__6519;
continue;
}
} else
{var result = cljs.core.first.call(null,seq__6478__$1);var meta_6520 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_6521 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_6520) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_6520),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_6520) - 1)], null);var src_6522 = lt.plugins.nerdy_painter.base64_QMARK_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),result,new cljs.core.Keyword(null,"passed","passed",4313490402));
} else
{if(!((src_6522 == null)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),lt.plugins.nerdy_painter.image.call(null,src_6522),loc_6521);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),loc_6521);
} else
{}
}
}
{
var G__6523 = cljs.core.next.call(null,seq__6478__$1);
var G__6524 = null;
var G__6525 = 0;
var G__6526 = 0;
seq__6478 = G__6523;
chunk__6480 = G__6524;
count__6481 = G__6525;
i__6482 = G__6526;
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