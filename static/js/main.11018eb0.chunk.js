(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[2],{117:function(e,t,a){e.exports=a(198)},122:function(e,t,a){},124:function(e,t,a){},176:function(e,t,a){var n={"./2019/day_1/part_1":[113,0],"./2019/day_1/part_1.js":[113,0],"./2019/day_1/part_2":[114,1],"./2019/day_1/part_2.js":[114,1],"./solutions":[29],"./solutions.ts":[29]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=176,e.exports=r},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),i=(a(122),a(51)),c=a(80),s=a.n(c),u=a(83),d=a(201),p=a(204),m=a(203),f=a(202),y=a(30),h=a(205),b=(a(124),a(29)),E=d.a.Header,v=d.a.Content,g=d.a.Footer,k=p.a.Search,w=function(){var e,t=Object(n.useState)({year:"2019",day:null,part:null}),o=Object(u.a)(t,2),l=o[0],c=o[1],p=Object(n.useState)(""),w=Object(u.a)(p,2),O=w[0],_=w[1],j=function(e){_(""),c(Object(i.a)({},l,{day:null,part:null}))};return r.a.createElement(d.a,{className:"layout"},r.a.createElement(E,null,r.a.createElement(m.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:Object.keys(b.default).splice(-1,1),style:{lineHeight:"64px"}},Object.keys(b.default).map((function(e){return r.a.createElement(m.a.Item,{key:e,onClick:function(){return c(Object(i.a)({},l,{year:e}))},disabled:Boolean(!b.default[e].solutions)},e)})))),r.a.createElement(v,{style:{padding:"10px 20px"}},r.a.createElement("div",{style:{background:"#fff",padding:24}},r.a.createElement(f.a,{itemLayout:"vertical",dataSource:b.default[l.year].solutions,renderItem:function(e,t){return r.a.createElement(f.a.Item,{actions:[r.a.createElement(y.a,{onClick:function(){return c(Object(i.a)({},l,{day:t,part:"part_1"}))},type:"dashed"},"Part 1"),r.a.createElement(y.a,{onClick:function(){return c(Object(i.a)({},l,{day:t,part:"part_2"}))},type:"dashed"},"Part 2")]},r.a.createElement(f.a.Item.Meta,{title:r.a.createElement("a",{href:"https://ant.design"},e.title),description:e.description}))}}))),r.a.createElement(h.a,{title:"".concat(null===(e=b.default[l.year].solutions)||void 0===e?void 0:e[l.day||0].title," - ").concat(l.part?"part_1"===l.part?"Part 1":"Part 2":""),visible:Boolean(l.part),onOk:j,onCancel:j,footer:null},l.part&&r.a.createElement("div",null,r.a.createElement(k,{placeholder:"Paste input text",enterButton:"Im a Cheater",size:"large",onSearch:function(e){return function(e){var t,n,r;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=e.year,n=e.day,r=e.part,!t||null===n||!r){o.next=5;break}return o.next=4,s.a.awrap(a(176)("./".concat(t,"/day_").concat(n+1,"/").concat(r)));case 4:return o.abrupt("return",o.sent);case 5:return o.abrupt("return",(function(){return console.log("Solution Not available",t,n,r)}));case 6:case"end":return o.stop()}}))}(l).then((function(t){return t.default&&_(t.default(e.toString()))}))}}),r.a.createElement("p",{style:{padding:20}},r.a.createElement("b",null,"Answer:")," ",O))),r.a.createElement(g,{style:{textAlign:"center"}},"Made with"," ",r.a.createElement("span",{"aria-label":"heart",role:"img"},"\u2665\ufe0f")," ","and"," ",r.a.createElement("span",{"aria-label":"coffee",role:"img"},"\u2615\ufe0f")," ","by 50W"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},29:function(e,t,a){"use strict";a.r(t),t.default={2017:{},2018:{},2019:{title:"2019",solutions:[{title:"Day 1: The Tyranny of the Rocket Equation",description:"Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.",part_1:{difficulty:"easy"}}]}}}},[[117,3,4]]]);
//# sourceMappingURL=main.11018eb0.chunk.js.map