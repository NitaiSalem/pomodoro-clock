(this["webpackJsonp25-clock"]=this["webpackJsonp25-clock"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(9),o=n.n(i),r=(n(14),n(15),n(5)),a=n(3),j=n(4),b=n(0),l=function(e){var t=e.handleBreakDecrement,n=e.handleBreakIncrement,c=e.breakLength,s=e.handleSessionDecrement,i=e.handleSessionIncrement,o=e.sessionLength;return Object(b.jsxs)("div",{className:"timer-controls-container",children:[Object(b.jsxs)("div",{className:"break-container",children:[Object(b.jsx)("p",{id:"break-label",children:"Break Length"}),Object(b.jsxs)("div",{className:"timer-controls",children:[Object(b.jsxs)("button",{id:"break-decrement",onClick:t,children:[" ",Object(b.jsx)(a.a,{icon:j.a,size:"2x"})]}),Object(b.jsx)("p",{id:"break-length",children:c}),Object(b.jsx)("button",{id:"break-increment",onClick:n,children:Object(b.jsx)(a.a,{icon:j.b,size:"2x"})})]})]}),Object(b.jsxs)("div",{className:"session-container",children:[Object(b.jsx)("p",{id:"session-label",children:"Session Length"}),Object(b.jsxs)("div",{className:"timer-controls",children:[Object(b.jsx)("button",{id:"session-decrement",onClick:s,children:Object(b.jsx)(a.a,{icon:j.a,size:"2x"})}),Object(b.jsx)("p",{id:"session-length",children:o}),Object(b.jsx)("button",{id:"session-increment",onClick:i,children:Object(b.jsx)(a.a,{icon:j.b,size:"2x"})})]})]})]})},d=function(){var e=Object(c.useState)(25),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(5),o=Object(r.a)(i,2),d=o[0],u=o[1],O=Object(c.useState)(!1),h=Object(r.a)(O,2),m=h[0],x=h[1],f=Object(c.useState)(n),k=Object(r.a)(f,2),p=k[0],g=k[1],S=Object(c.useState)(0),v=Object(r.a)(S,2),C=v[0],N=v[1],T=Object(c.useState)("Session"),B=Object(r.a)(T,2),L=B[0],I=B[1],D=Object(c.useRef)(),F=function(){m&&(0===p&&0===C?(N(0),g((function(){return"Session"===L?d:n})),I((function(e){return"Session"===e?"Break":"Session"}))):0===C?(N(59),g((function(e){return e-1}))):N((function(e){return e-1})))};Object(c.useEffect)((function(){0===p&&0===C&&(D.current.play(),setTimeout((function(){return D.current.pause()}),3e3),setTimeout((function(){return D.current.currentTime=0}),3e3));var e=setTimeout(F,1e3);return function(){clearTimeout(e)}}));return Object(b.jsxs)("div",{id:"pomodoro-container",className:"pomodoro-container",children:[Object(b.jsx)("h2",{className:"title",children:"Pomodoro Clock"}),Object(b.jsx)(l,{handleBreakDecrement:function(){d>1&&!m&&(u(d-1),N(0))},handleBreakIncrement:function(){d<60&&!m&&(u(d+1),N(0))},breakLength:d,handleSessionDecrement:function(){n>1&&p>1&&!m&&(s(n-1),g(p-1),N(0))},handleSessionIncrement:function(){n<60&&p<60&&!m&&(s(n+1),g(p+1),N(0))},sessionLength:n}),Object(b.jsxs)("div",{className:"tomato",children:[Object(b.jsx)("div",{id:"tomatoTop"})," ",Object(b.jsx)("div",{id:"tomatoFill"}),Object(b.jsxs)("h2",{id:"timer-label",children:[" ",L]}),Object(b.jsxs)("p",{id:"time-left",children:[p<10?"0".concat(p,":"):"".concat(p,":"),Object(b.jsxs)("span",{children:[C<10?"0".concat(C):"".concat(C)," "]})]})]}),Object(b.jsxs)("div",{className:"bottom-buttons-container",children:[Object(b.jsxs)("button",{id:"start_stop",onClick:function(){x((function(e){return!e}))},children:[Object(b.jsx)(a.a,{icon:j.d}),Object(b.jsx)(a.a,{icon:j.c})]}),Object(b.jsx)("button",{id:"reset",onClick:function(){s(25),u(5),g(25),N(0),x(!1),I("Session"),D.current.pause(),D.current.currentTime=0},children:Object(b.jsx)(a.a,{icon:j.e})})]}),Object(b.jsx)("audio",{id:"beep",ref:D,src:"https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg",type:"audio"})]})};var u=function(){return Object(b.jsx)(d,{})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),O()}},[[22,1,2]]]);
//# sourceMappingURL=main.35d2e3fc.chunk.js.map