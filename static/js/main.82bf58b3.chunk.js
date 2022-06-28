(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{213:function(e,t,n){},215:function(e,t,n){},349:function(e,t,n){},367:function(e,t,n){},370:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(34),c=n.n(o),i=(n(213),n(31)),s=n.n(i),l=n(58),u=n(22),d=n(27),h=n(28),p=n(29),f=(n(215),n(2)),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.collapsed,t=this.props.event;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h1",{className:"event-summary",children:t.summary}),Object(f.jsx)("p",{className:"start-date",children:t.start.dateTime}),Object(f.jsx)("p",{className:"location",children:t.location}),Object(f.jsx)("button",{className:"details-btn",onClick:this.handleClick,children:"Show Details"}),Object(f.jsxs)("div",{className:"details ".concat(e?"hidden":"visible"),children:[Object(f.jsx)("h3",{children:"About the event: "}),Object(f.jsx)("p",{className:"event-description",children:t.description})]})]})}}]),n}(a.Component),g=v,b=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(g,{event:e})},e.id)}))})}}]),n}(a.Component),m=b,j=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStlye=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStlye(),children:this.props.text})})}}]),n}(a.Component),A=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(j),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(j),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,placeholder:"Enter a city",onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsxs)("li",{onClick:function(){return e.handleItemClicked("all")},children:[Object(f.jsx)("b",{children:"See all cities"}),Object(f.jsx)(A,{text:this.state.infoText})]},"all")]})]})}}]),n}(a.Component),x=O,y=n(19),k=n(373),S=n(382),B=n(189),C=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(y.a)(n,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){c((function(){return["React","JavaScript","Node","jQuery","AngularJS","Angular"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}})).filter((function(e){return e.value>0}))}))}),[t]),Object(f.jsx)(k.a,{height:400,children:Object(f.jsx)(S.a,{width:400,height:400,children:Object(f.jsx)(B.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})})})},T=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>32?e.setState({numberOfEvents:"",errorText:"Please enter a number between 1 and 32"}):e.setState({numberOfEvents:n,errorText:""}),e.props.updateEventCount(n)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"number-of-events",children:[Object(f.jsx)("input",{type:"number",className:"events-input",value:this.props.numberOfEvents,onChange:this.handleInputChanged}),Object(f.jsx)(w,{text:this.state.errorText})]})}}]),n}(a.Component),W=T;n(349);var I=function(e){return e.showWelcomeScreen?Object(f.jsxs)("div",{className:"WelcomeScreen",children:[Object(f.jsx)("h1",{children:"Welcome to meet"}),Object(f.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(f.jsx)("div",{className:"button_cont",align:"center",children:Object(f.jsxs)("div",{class:"google-btn",children:[Object(f.jsx)("div",{class:"google-icon-wrapper",children:Object(f.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\no.svg",alt:"Google sign-in"})}),Object(f.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(f.jsx)("b",{children:"Sign in with google"})})]})}),Object(f.jsx)("a",{href:"https://jgtorres95.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},E=n(380),R=n(377),N=n(107),Z=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],L=n(130),U=n.n(L),J=n(84),q=n.n(J),Y=(n(367),function(e){var t=e.map((function(e){return e.location}));return Object(N.a)(new Set(t))}),D=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},M=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://nw4q8s4ig6.execute-api.us-west-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return q.a.done(),e.abrupt("return",Z);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),q.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,G();case 11:if(!(n=e.sent)){e.next=21;break}return Q(),a="https://nw4q8s4ig6.execute-api.us-west-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,U.a.get(a);case 17:return(r=e.sent).data&&(o=Y(r.data.events),localStorage.setItem("last events",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),q.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,D(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,U.a.get("https://nw4q8s4ig6.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&M(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=n(378),V=n(379),P=n(198),z=n(199),X=n(85),H=n(202),_=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:32,offlineText:"",showWelcomeScreen:void 0},e.updateEvents=function(t){F().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a.slice(0,e.state.numberOfEvents),currentLocation:t})}))},e.updateEventCount=function(t){e.setState({numberOfEvents:t}),e.updateEvents(e.state.currentLocation)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,o=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,D(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&F().then((function(e){o.mounted&&o.setState({events:e,locations:Y(e)})})),navigator.onLine?this.setState({offlineText:""}):this.setState({offlineText:"You are currently offline"});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.showWelcomeScreen;return void 0===this.state.showWelcomeScreen?Object(f.jsx)("div",{className:"App"}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(E.a,{className:"details ".concat(e?"hidden":"visible"),sticky:"top",bg:"dark",variant:"dark",expand:"md",children:Object(f.jsxs)(R.a,{children:[Object(f.jsxs)(E.a.Brand,{onClick:function(){window.location.reload()},style:{cursor:"pointer"},children:[Object(f.jsx)("img",{src:"data:image/png;base64,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",width:"30",height:"30",className:"d-inline-block align-top",alt:""}),"  "," meet"]}),Object(f.jsx)(E.a.Text,{children:"Search for events in your nearest city"})]})}),Object(f.jsx)(A,{text:this.state.offlineText}),Object(f.jsx)(x,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)("p",{children:"Number of events:"}),Object(f.jsx)(W,{updateEventCount:this.updateEventCount,numberOfEvents:this.state.numberOfEvents}),Object(f.jsxs)("div",{className:"data-vis-wrapper",children:[Object(f.jsx)(C,{events:this.state.events}),Object(f.jsx)(k.a,{height:400,children:Object(f.jsxs)(K.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(f.jsx)(V.a,{}),Object(f.jsx)(P.a,{type:"category",dataKey:"city",name:"city"}),Object(f.jsx)(z.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(f.jsx)(X.a,{cursor:{strokeDasharray:"3 3"}}),Object(f.jsx)(H.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(f.jsx)(m,{events:this.state.events}),Object(f.jsx)(I,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){G()}})]})}}]),n}(a.Component),$=_,ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,383)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};n(200).config("117b18d251074bd096ee6a9ddae60f8d").install(),c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)($,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):te(t,e)}))}}(),ne()}},[[370,1,2]]]);
//# sourceMappingURL=main.82bf58b3.chunk.js.map