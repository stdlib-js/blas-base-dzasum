"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=n(function(C,f){
var m=require('@stdlib/math-base-special-abs/dist'),l=require('@stdlib/strided-base-reinterpret-complex128/dist');function R(e,r,a,u){var s,i,t,d,v;if(i=0,e<=0)return i;for(s=l(r,0),d=a*2,t=u*2,v=0;v<e;v++)i+=m(s[t])+m(s[t+1]),t+=d;return i}f.exports=R
});var x=n(function(D,p){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=o();function w(e,r,a){var u=_(e,a);return b(e,r,a,u)}p.exports=w
});var z=n(function(F,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=x(),O=o();E(c,"ndarray",O);y.exports=c
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),A=z(),q,j=h(g(__dirname,"./native.js"));k(j)?q=A:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
