(this["webpackJsonpayenda-test"]=this["webpackJsonpayenda-test"]||[]).push([[4],{125:function(e,t,n){"use strict";var r=n(0),a=n(24),l=n(43);function c(e,t){return e===t}function u(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function o(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var i=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var l=0,c=r.pop(),u=o(r),i=e.apply(void 0,[function(){return l++,c.apply(null,arguments)}].concat(n)),s=e((function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return i.apply(null,e)}));return s.resultFunc=c,s.dependencies=u,s.recomputations=function(){return l},s.resetRecomputations=function(){return l=0},s}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,n=null,r=null;return function(){return u(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var s=n(35),f=n.n(s);n.d(t,"a",(function(){return m}));var m=function(e){var t=Object(a.b)(),n=Object(a.c)(function(e){return i((function(e){return e.endpoints}),(function(t){return t[e]||{}}))}(e));return Object(r.useEffect)((function(){f()(n)&&Object(l.c)(t)(e)}),[n,t,e]),n}},126:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(111),c=n(23);n(127);t.a=function(e){var t=e.id,n=e.image,r=e.name,u=e.isAlbum,o=void 0!==u&&u,i="/artists/".concat(t,"/albums"),s="cover-valign";o&&(i="/albums/".concat(t,"/songs"),s="");var f=a.a.createElement("span",{className:"cover-name"},r);return a.a.createElement(l.a,{sm:"3",className:"p-2 text-center align-middle cover-container"},a.a.createElement(c.b,{to:i,className:"text-white text-bold"},a.a.createElement("div",{className:"cover-image ".concat(s),style:{backgroundImage:'url("'.concat(n,'")')}},o||f)),o&&f)}},127:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(110),c=n(111),u=n(122),o=n(20),i=n(126),s=n(125);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createElement("path",{d:"M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40 c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20 c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"}),g=a.a.createElement("g",null),v=a.a.createElement("g",null),E=a.a.createElement("g",null),d=a.a.createElement("g",null),y=a.a.createElement("g",null),b=a.a.createElement("g",null),h=a.a.createElement("g",null),O=a.a.createElement("g",null),j=a.a.createElement("g",null),x=a.a.createElement("g",null),w=a.a.createElement("g",null),k=a.a.createElement("g",null),R=a.a.createElement("g",null),S=a.a.createElement("g",null),A=a.a.createElement("g",null),N=function(e){var t=e.svgRef,n=e.title,r=m(e,["svgRef","title"]);return a.a.createElement("svg",f({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 41.999 41.999",style:{enableBackground:"new 0 0 41.999 41.999"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,p,g,v,E,d,y,b,h,O,j,x,w,k,R,S,A)},C=a.a.forwardRef((function(e,t){return a.a.createElement(N,f({svgRef:t},e))})),M=(n.p,n(43)),P=n(24);t.default=function(){var e=Object(P.b)(),t=Object(s.a)("artists"),n=Object(s.a)("genres");return!t.data||t.loading?a.a.createElement(o.a,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,null,a.a.createElement(c.a,{xs:"2"},a.a.createElement(u.a,{onClick:function(){var t=n.data[Math.floor(Math.random()*n.data.length)];Object(M.a)(e)(t)}},a.a.createElement(C,{style:{width:"16px",marginRight:"6px"}}),"Random Song"))),a.a.createElement(l.a,{className:"justify-content-center mt-2"},t.data.map((function(e,t){return a.a.createElement(i.a,Object.assign({key:"cover-".concat(t)},e))}))))}}}]);
//# sourceMappingURL=4.5f5ee95f.chunk.js.map