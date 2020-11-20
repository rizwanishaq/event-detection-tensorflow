(this["webpackJsonpevent-detection"]=this["webpackJsonpevent-detection"]||[]).push([[0],{307:function(e,t,n){e.exports=n(340)},312:function(e,t,n){},319:function(e,t){},320:function(e,t){},328:function(e,t){},331:function(e,t){},332:function(e,t){},340:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n.n(a),c=n(150),o=n.n(c),l=(n(312),n(313),n(199)),u=n(4),i=n.n(u),s=n(20),m=n(12),f=n(6),d=n(209),p=function(e,t,n){if(n===t)return e;if(n>t)throw new Error("Target sample rate must be lower than recorded sample rate");for(var a=t/n,r=Math.round(e.length/a),c=new Float32Array(r),o=0,l=0;o<c.length;){for(var u=Math.round((o+1)*a),i=0,s=0,m=l;m<u&&m<e.length;m++)i+=e[m],s++;c[o]=i/s,o++,l=u}return c},b=n(79),v=n(215),E=Object(a.createContext)(),h=function(){return Object(a.useContext)(E)},j=function(e){var t=e.children,n=Object(a.useState)({}),c=Object(f.a)(n,2),o=c[0],l=c[1],u=Object(a.useState)(null),s=Object(f.a)(u,2),p=s[0],h=s[1],j=Object(a.useState)(!1),O=Object(f.a)(j,2),g=O[0],k=O[1],w=Object(a.useState)([]),S=Object(f.a)(w,2),x=S[0],y=S[1];return Object(a.useEffect)((function(){fetch("https://raw.githubusercontent.com/rizwanishaq/event-detection-tensorflow/main/src/yamnet_class_map.csv").then((function(e){return e.text()})).then((function(e){e.split("\n").map((function(e){var t=e.split(",");"index"!==t[0]&&void 0!==t&&l((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(b.a)({},t[0],t[2]))}))}))}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a("https://tfhub.dev/google/tfjs-model/yamnet/tfjs/1",{fromTFHub:!0});case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(E.Provider,{value:{labels:o,model:p,start:g,setStart:k,top5:x,setTop5:y}},t)},O=n(342),g=n(346),k=n(348),w=n(349),S=function(){var e=h(),t=e.labels,n=e.model,c=e.top5,o=e.setTop5,l=Object(a.useState)(""),u=Object(f.a)(l,2),b=u[0],v=u[1],E=[],j=Object(a.useRef)(null),S=function(e){j.current=new AudioContext({latencyHint:"playback"});var a=j.current.createMediaStreamSource(e),r=j.current.createScriptProcessor(1024,1,1);r.channelInterpretation="speakers",r.channelCount=1,a.connect(r),r.connect(j.current.destination),r.onaudioprocess=function(){var e=Object(m.a)(i.a.mark((function e(a){var r,c,l,u,m,b,v,h,O,g,k;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.inputBuffer.getChannelData(0),c=p(r,j.current.sampleRate,16e3),E.push(c),16!==E.length){e.next=16;break}return l=E.reduce((function(e,t){return Float32Array.from([].concat(Object(s.a)(e),Object(s.a)(t)))})),u=d.b(l),m=n.predict(u),b=Object(f.a)(m,3),v=b[0],b[1],b[2],E=[],e.next=10,v.mean(0).topk(5);case 10:h=e.sent,h.values,O=h.indices,g=O.toString().split("\n")[1],k=g.replace("[","").replace("]","").split(",").map((function(e){return t[Number(e)]})),o(k);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(e){v(e)};return Object(a.useEffect)((function(){return navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(S).catch(x),function(){j.current&&j.current.close(),o([]),console.log("Component unmounted")}}),[]),r.a.createElement(O.a,null,b&&r.a.createElement(g.a,{variant:"danger"},b),r.a.createElement(k.a,null,r.a.createElement(k.a.Header,null,"Detected Events"),r.a.createElement(w.a,null,c.map((function(e,t){return r.a.createElement(w.a.Item,{key:t,variant:0===t?"success":""},e)})))))},x=n(284),y=n(345),C=n(347),N=n(343),T=n(344),B=function(){var e=h(),t=e.start,n=e.setStart,a=e.model;return r.a.createElement("header",null,r.a.createElement(y.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0},r.a.createElement(O.a,null,r.a.createElement(x.LinkContainer,{to:"/"},r.a.createElement(y.a.Brand,null,r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(y.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a,{className:"ml-auto"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a.Link,{onClick:function(e){n(!0)},disabled:t},r.a.createElement("i",{className:"fas fa-play"}),"Start"),r.a.createElement(C.a.Link,{onClick:function(e){n(!1)},disabled:!t},r.a.createElement("i",{className:"fas fa-stop-circle"}),"Stop")," "):r.a.createElement(N.a,{variant:"primary",disabled:!0},r.a.createElement(T.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"model loading..."))))))};var F=function(){var e=h(),t=e.model,n=e.start;return r.a.createElement(l.BrowserRouter,null,r.a.createElement(B,null),r.a.createElement(O.a,null,t&&n&&r.a.createElement(S,null)))};o.a.render(r.a.createElement(j,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[307,1,2]]]);
//# sourceMappingURL=main.e908f86a.chunk.js.map