(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{201:function(e,t,n){},202:function(e,t,n){},354:function(e,t,n){},355:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(65),s=n.n(o),c=(n(201),n(25)),i=n(30),u=n(26),l=n(27),d=(n(202),n(6)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.collapsed,t=this.props.event;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h1",{className:"event-summary",children:t.summary}),Object(d.jsx)("p",{className:"start-date",children:t.start.dateTime}),Object(d.jsx)("p",{className:"location",children:t.location}),Object(d.jsx)("button",{className:"details-btn",onClick:this.handleClick,children:"Show Details"}),Object(d.jsxs)("div",{className:"details ".concat(e?"hidden":"visible"),children:[Object(d.jsx)("h3",{children:"About the event: "}),Object(d.jsx)("a",{children:"See Details on Google Calendar"}),Object(d.jsx)("p",{className:"event-description",children:t.description})]})]})}}]),n}(a.Component),f=h,p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(f,{event:e})},e.id)}))})}}]),n}(a.Component),v=p,m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStlye=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Alert",children:Object(d.jsx)("p",{style:this.getStlye(),children:this.props.text})})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(m),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(m),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsxs)("li",{onClick:function(){return e.handleItemClicked("all")},children:[Object(d.jsx)("b",{children:"See all cities"}),Object(d.jsx)(b,{text:this.state.infoText})]},"all")]})]})}}]),n}(a.Component),w=g,O=n(18),y=n(356),x=n(363),k=n(181),S=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(O.a)(n,2),o=r[0],s=r[1];return Object(a.useEffect)((function(){s((function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))}))}),[t]),Object(d.jsx)(y.a,{height:400,children:Object(d.jsx)(x.a,{width:400,height:400,children:Object(d.jsx)(k.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})})})},T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberofEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>32?e.setState({numberOfEvents:"",errorText:"Please enter a number between 1 and 32"}):e.setState({numberOfEvents:n,errorText:""}),e.props.updateEventCount(n)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"number-of-events",children:[Object(d.jsx)("input",{type:"number",className:"events-input",value:this.props.numberOfEvents,onChange:this.handleInputChanged}),Object(d.jsx)(j,{text:this.state.errorText})]})}}]),n}(a.Component),C=T,E=n(33),N=n.n(E),Z=n(76),W=n(190),A=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],I=n(121),q=n.n(I),D=n(77),J=n.n(D),M=(n(354),function(e){var t=e.map((function(e){return e.location}));return Object(W.a)(new Set(t))}),L=function(){var e=Object(Z.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},B=function(){var e=Object(Z.a)(N.a.mark((function e(t){var n,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://nw4q8s4ig6.execute-api.us-west-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(Z.a)(N.a.mark((function e(){var t,n,a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return J.a.done(),e.abrupt("return",A);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),J.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,F();case 11:if(!(n=e.sent)){e.next=21;break}return R(),a="https://nw4q8s4ig6.execute-api.us-west-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,q.a.get(a);case 17:return(r=e.sent).data&&(o=M(r.data.events),localStorage.setItem("last events",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),J.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(Z.a)(N.a.mark((function e(){var t,n,a,r,o,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,q.a.get("https://nw4q8s4ig6.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&B(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=n(360),H=n(361),P=n(186),_=n(187),Y=n(78),G=n(191),K=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32},e.updateEvents=function(t,n){U().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a.slice(0,e.state.numberOfEvents)})}))},e.updateEventCount=function(t){e.setState({numberOfEvents:t})},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,U().then((function(t){e.mounted&&e.setState({events:t,locations:M(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.numberOfEvents,a=e.events;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Meet App"}),Object(d.jsx)("h4",{children:"Search for events in your nearest city"}),Object(d.jsx)(w,{locations:t,updateEvents:this.updateEvents}),Object(d.jsx)(C,{updateEventCount:this.updateEventCount,numberOfEvents:n}),Object(d.jsxs)("div",{className:"data-vis-wrapper",children:[Object(d.jsx)(S,{events:a}),Object(d.jsx)(y.a,{height:400,children:Object(d.jsxs)(z.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(d.jsx)(H.a,{}),Object(d.jsx)(P.a,{type:"category",dataKey:"city",name:"city"}),Object(d.jsx)(_.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(d.jsx)(Y.a,{cursor:{strokeDasharray:"3 3"}}),Object(d.jsx)(G.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(d.jsx)(v,{events:this.state.events})]})}}]),n}(a.Component),V=K,X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var $=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,364)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(188).config("117b18d251074bd096ee6a9ddae60f8d").install(),s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(V,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");X?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Q(t,e)}))}}(),$()}},[[355,1,2]]]);
//# sourceMappingURL=main.51e9326a.chunk.js.map