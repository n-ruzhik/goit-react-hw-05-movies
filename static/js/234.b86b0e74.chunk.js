"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[234],{234:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),c=n(439),a=n(757),u=n.n(a),s=n(791),o=n(689),i=n(210),p={reviewList:"Reviews_reviewList__uMBar",message:"Reviews_message__u2VJu"},l=n(184);function f(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],a=t[1],f=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Hx)(f);case 3:return t=e.sent,r=t.data.results,a(r.map((function(e){return{id:e.id,content:e.content}}))),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[n,f]),(0,l.jsx)("ul",{className:p.reviewList,children:0===n.length?(0,l.jsx)("p",{className:p.message,children:"Sorry, there are no reviews yet"}):n.map((function(e){var t=e.id,n=e.content;return(0,l.jsx)("li",{className:p.reviewItem,children:(0,l.jsx)("p",{children:n})},t)}))})}},210:function(e,t,n){n.d(t,{Hx:function(){return v},LI:function(){return p},fP:function(){return l},uV:function(){return f},wr:function(){return i}});var r=n(861),c=n(757),a=n.n(c),u=n(243),s="8664a2b6db354b584ef037e248f4b600",o="https://api.themoviedb.org/3/",i=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"trending/movie/week?api_key=").concat(s));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(t,"&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=234.b86b0e74.chunk.js.map