"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[171],{763:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(683),c=n(87),a={findedItem:"MovieGalleryItem_findedItem__e5UcN",findedItemLink:"MovieGalleryItem_findedItemLink__ST38U",titleMovie:"MovieGalleryItem_titleMovie__dvxTU",imgPoster:"MovieGalleryItem_imgPoster__P0dTD"},o=n(184);function i(e){var t=e.poster_path,n=e.title,r=e.location,i=e.id;return(0,o.jsx)("li",{className:a.findedItem,children:(0,o.jsxs)(c.rU,{to:"/movies/".concat(i),state:{from:r},className:a.findedItemLink,children:[(0,o.jsx)("div",{className:a.imgThumb,children:(0,o.jsx)("img",{className:a.imgPoster,src:t?"https://image.tmdb.org/t/p/w500/".concat(t):"https://brinkys.gr/media/products//Image-Not-Available.png",alt:n,"max-width":"270","max-height":"405"})}),(0,o.jsx)("h2",{className:a.titleMovie,children:n})]},i)},i)}var u="MovieGallery_trendingGallery__jZjCI",s=n(791);function l(e){var t=e.movies,n=e.location;return(0,o.jsx)("ul",{className:u,children:t.map((function(e){return(0,s.createElement)(i,(0,r.Z)((0,r.Z)({},e),{},{key:e.id,link:e.id,location:n}))}))})}},210:function(e,t,n){n.d(t,{Hx:function(){return m},LI:function(){return l},fP:function(){return p},uV:function(){return f},wr:function(){return s}});var r=n(861),c=n(757),a=n.n(c),o=n(243),i="8664a2b6db354b584ef037e248f4b600",u="https://api.themoviedb.org/3/",s=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"trending/movie/week?api_key=").concat(i));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},171:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),c=n(439),a=n(757),o=n.n(a),i="Home_headerTitle__hCUy6",u=n(791),s=n(210),l=n(763),p=n(184);function f(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),n=t[0],a=t[1];return(0,u.useEffect)((function(){try{var e=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.wr)();case 2:t=e.sent,n=t.data.results,r=n.map((function(e){return{id:e.id,poster_path:e.poster_path,title:e.title}})),a(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{className:i,children:"Trending movies"}),n&&(0,p.jsx)(l.Z,{movies:n,link:"movies/"})]})}},683:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=171.79c9e5f0.chunk.js.map