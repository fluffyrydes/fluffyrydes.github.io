(function(t){function e(e){for(var a,i,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s=[];function i(t){return r.p+"js/"+({apply:"apply",faq:"faq",investors:"investors",unicorns:"unicorns"}[t]||t)+"."+{apply:"99dfc32b",faq:"47534d81",investors:"068470e5",unicorns:"63877a5e"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(t);var c=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",c.name="ChunkLoadError",c.type=a,c.request=s,n[1](c)}o[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"076e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"site-footer"},[n("div",{staticClass:"row column"},[n("nav",{staticClass:"footer-nav"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"unicorns"}},[t._v("Meet the Unicorns")])],1),n("li",[n("router-link",{attrs:{to:"investors"}},[t._v("Investors & Board of Directors")])],1),n("li",[n("router-link",{attrs:{to:"faq"}},[t._v("FAQ")])],1),n("li",[n("router-link",{attrs:{to:"apply"}},[t._v("Apply")])],1)])])]),t._m(0)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row column"},[n("div",{staticClass:"footer-legal"},[t._v("\n      ©FluffyRydes Inc"),n("br"),t._v("\n      All Rights Reserved\n    ")])])}],s=n("2877"),i={},r=Object(s["a"])(i,a,o,!1,null,null,null);e["a"]=r.exports},1385:function(t,e,n){"use strict";n("1948")},1948:function(t,e,n){},2251:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[t.extraHeader?n("div",[n("div",{staticClass:"site-logo"},[t._v("Fluffy Rydes  ")]),n("div",{staticClass:"row column medium-8 large-6 xlarge-5 xxlarge-4"},[n("h1",{},[t._v(t._s(t.title))]),n("p",{staticClass:"content"},[t._v("\n            "+t._s(t.content)+"\n        ")])])]):t._e(),n("h1",{directives:[{name:"show",rawName:"v-show",value:t.showTitle,expression:"showTitle"}],staticClass:"title"},[t._v("Fluffy Rydes")]),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"site-nav",attrs:{id:"nav"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/unicorns"}},[t._v("Meet the Unicorns")])],1),n("li",[n("router-link",{attrs:{to:"/investors"}},[t._v("Investors & Board of Directors")])],1),n("li",[n("router-link",{attrs:{to:"/faq"}},[t._v("FAQ")])],1),n("li",[n("router-link",{attrs:{to:"/apply"}},[t._v("Apply")])],1)])]),n("div",{class:t.menuStatus},[n("button",{staticClass:"btn-menu",attrs:{type:"button"},on:{click:function(e){return t.toggle()}}},[n("span",[t._v("Menu")])])]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.showTitle,expression:"showTitle"}],staticClass:"home-button",on:{click:function(e){t.showModal=!0}}},[t._v("Giddy Up!")]),t.showModal?n("modal",{on:{close:function(e){t.showModal=!1}},scopedSlots:t._u([{key:"header",fn:function(){return[n("h3",[t._v("🎉 Congratulations 🎉")])]},proxy:!0},{key:"body",fn:function(){return[t._v("\n        You found a meeting ID! Make sure to enter it into the right input to retrieve a link to your meeting:\n        "),n("span",{staticStyle:{color:"deeppink"}},[t._v(t._s(t.meetings[0].id))])]},proxy:!0}],null,!1,1118835830)}):t._e()],1)},o=[],s=n("2f62"),i=n("aff5"),r={name:"menu",components:{Modal:i["a"]},props:["showTitle","extraHeader","title","content","logoColor"],data:function(){return{isOpen:!1,menuStatus:"",showModal:!1}},computed:Object(s["b"])(["meetings"]),methods:{toggle:function(){this.isOpen=!this.isOpen,this.menuStatus?this.menuStatus="":this.menuStatus="menu-opened"}}},l=r,c=n("2877"),u=Object(c["a"])(l,a,o,!1,null,null,null);e["a"]=u.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={name:"app",components:{},created:function(){console.log("ALL THE MEETING INFO: ",this.$store.state.meetings)}},r=i,l=n("2877"),c=Object(l["a"])(r,o,s,!1,null,null,null),u=c.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("menus",{staticClass:"site-header",attrs:{showTitle:"true"}}),n("section",{staticClass:"home-about"},[n("div",{staticClass:"row column medium-8 large-8 xlarge-7 xxlarge-7"},[n("h2",{staticClass:"section-title"},[t._v("Departures near you")]),n("itinerary")],1),t._m(0),t._m(1)]),t._m(2),n("section",{staticClass:"home-sign-up"},[t.showModal?n("modal",{on:{close:function(e){t.showModal=!1}},scopedSlots:t._u([{key:"header",fn:function(){return[n("h3",[t._v("🎉 Nice! 🎉")])]},proxy:!0},{key:"body",fn:function(){return[t._v("\n            Another lost meeting ID found! Make sure to enter it into the right input to retrieve a link to your meeting:\n            "),n("span",{staticStyle:{color:"deeppink"}},[t._v(t._s(t.meetings[2].id))])]},proxy:!0}],null,!1,2160283404)}):t._e(),n("div",{staticClass:"row column"},[n("img",{staticClass:"icon-w",attrs:{src:"images/wr-home-f.png"}}),n("form",{attrs:{onsubmit:"showModal = true;"}},[n("input",{attrs:{type:"email",placeholder:"Enter your email address"}}),n("button",{attrs:{type:"button"},on:{click:function(e){t.showModal=!0}}},[t._v("Submit")])]),n("h2",{staticClass:"section-title"},[t._v("Sign Up")]),n("p",{staticClass:"content"},[t._v("Fluffy news are coming soon! Enter your email to be the first to know about new features")]),t._m(3)])],1),t._m(4),t._m(5),n("footers")],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row column medium-8 large-8 xlarge-7 xxlarge-7"},[n("h2",{staticClass:"section-title"},[t._v("How Does This Work?")]),n("p",{staticClass:"content"},[t._v("\n      In today’s fast paced world, you’ve got places you need to be but not enough time in your jam packed schedule.\n      Wouldn’t it be nice if there were a transportation service that changed the way you get around daily?\n      Introducing Fluffy Rydes, an innovative transportation service that helps people get to their destination faster and hassle-free.\n      "),n("span",{staticStyle:{color:"deepskyblue","font-weight":"bold"}},[t._v("\n        Getting started is as easy as entering a meeting ID into one of the departure inputs above.\n        If your ID is correct a link to unlock your unicorn will magically appear.\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row medium-up-3 large-up-3"},[n("div",{staticClass:"column"},[n("div",{staticClass:"home-about-block"},[n("h3",{staticClass:"title icon-unicorn"},[t._v("Request A Unicorn")]),n("p",{staticClass:"content"},[t._v("We can get you there. Simply request a ryde on the app and we'll connect you with a unicorn immediately.")])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"home-about-block"},[n("h3",{staticClass:"title icon-price"},[t._v("Pick A Price")]),n("p",{staticClass:"content"},[t._v("Pick the valuation you're willing to pay and your ryde is set up. The only surge is the acceleration you get when taking off.")])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"home-about-block"},[n("h3",{staticClass:"title icon-success"},[t._v("Ride Off To Success!")]),n("p",{staticClass:"content"},[t._v("After matching with your unicorn and agreeing to its terms, you’ll be all set. Your unicorn will arrive shortly to pick you up.")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home-story"},[n("div",{staticClass:"row column large-9 xlarge-6 xxlarge-4"},[n("h2",{staticClass:"section-title"},[t._v("Our Story")]),n("p",{staticClass:"content"},[t._v("\n      Fluffy Rydes was started by a former hedge fund analyst and a software developer. The two long-time friends happened upon the Fluffy Rydes idea after attending a silent yoga retreat in Nevada. After gazing upon the majestic herds of unicorns prancing across a surreal Nevada sunset, they witnessed firsthand the poverty and unemployment endemic to that once proud race. Whether it was modern society’s reliance on science over magic or not, we’ll never know the cause of their Ozymandian downfall and fade to obscurity. Moved by empathy, romance, and free enterprise, they saw an opportunity to marry society’s demand for faster, more flexible transportation to underutilized beasts of labor through an on-demand market making transportation app. Using the founders’ respective expertise in animal husbandry and software engineering, Fluffy Rydes was formed and has since raised untold amounts of venture capital. Today, Fluffy Rydes has thousands of unicorns in its network fulfilling hundreds of rydes each day.\n    ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social"},[n("a",{staticClass:"icon-fb",attrs:{href:""}},[t._v("Facebook")]),n("a",{staticClass:"icon-tw",attrs:{href:""}},[t._v("Twitter")]),n("a",{staticClass:"icon-ig",attrs:{href:""}},[t._v("Instagram")]),n("a",{staticClass:"icon-wc",attrs:{href:""}},[t._v("Wechat")]),n("a",{staticClass:"icon-wb",attrs:{href:""}},[t._v("Weibo")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home-quote"},[n("div",{staticClass:"row column medium-8 xxlarge-6"},[n("div",{staticClass:"quote-wrap"},[n("div",{staticClass:"quote"},[t._v("\n        “I was almost late to my ultimate frisbee tournament in DOLORES park. But Fluffy Rydes Got me there from the marina in under five minutes.”\n      ")]),n("div",{staticClass:"quoter"},[t._v("- Satisfied Fluffy Rydes User")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"kraken-callout"},[n("div",{staticClass:"row"},[n("div",{staticClass:"columns medium-6 xxlarge-4 xxlarge-offset-2"},[n("img",{attrs:{src:"images/wr-home-kraken.png"}})]),n("div",{staticClass:"columns medium-6 xlarge-5 xxlarge-4"},[n("h4",{staticClass:"title"},[t._v("Coming Soon")]),n("p",{staticClass:"content"},[t._v("\n        Kraken 3xplorer and Dragon Flyght. We’re looking to provide you a full service package from air, land, and to sea.\n      ")])])])])}],p=n("076e"),h=n("2251"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(t){t.preventDefault()}}},t._l(t.meetings,(function(t){return n("meeting-form",{key:t.id,staticClass:"row",attrs:{meeting:t}})})),1)},g=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("span",{staticClass:"destination blink"},[t._v(t._s(t.meeting.label))]),t.isCorrect?n("button",{staticClass:"meeting meeting-button",on:{click:t.openMeeting}},[n("span",[t._v("🏁 Take me there 🏁")])]):n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.meeting.input,expression:"meeting.input",modifiers:{trim:!0}}],staticClass:"meeting",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.meeting.input},on:{input:function(e){e.target.composing||t.$set(t.meeting,"input",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])},b=[],_=(n("14b9"),{name:"meeting-form",props:["meeting"],computed:{teamsLink:function(){return"https://teams.microsoft.com/l/meetup-join/19%3ameeting_"+this.meeting.id+"m%40thread.v2/0?context="+this.meeting.context},isCorrect:function(){return this.meeting.input===this.meeting.id},placeholder:function(){return"Meeting ID: "+this.meeting.id.slice(0,8)+"🦄".repeat(this.meeting.id.length-8)}},methods:{openMeeting:function(){console.log(this.teamsLink),window.open(this.teamsLink)}}}),w=_,C=(n("1385"),Object(l["a"])(w,y,b,!1,null,"406454a6",null)),k=C.exports,x=n("2f62"),O={name:"itinerary",components:{MeetingForm:k},computed:Object(x["b"])(["meetings"])},M=O,T=(n("ed9a"),Object(l["a"])(M,v,g,!1,null,"a40662aa",null)),j=T.exports,S=n("aff5"),E={name:"home",components:{footers:p["a"],menus:h["a"],itinerary:j,Modal:S["a"]},data:function(){return{showModal:!1}},computed:Object(x["b"])(["meetings"])},R=E,D=Object(l["a"])(R,m,f,!1,null,null,null),$=D.exports;a["a"].use(d["a"]);var F=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:$},{path:"/unicorns",name:"unicorns",component:function(){return n.e("unicorns").then(n.bind(null,"9296"))}},{path:"/investors",name:"investors",component:function(){return n.e("investors").then(n.bind(null,"400a"))}},{path:"/faq",name:"faq",component:function(){return n.e("faq").then(n.bind(null,"10c2"))}},{path:"/apply",name:"apply",component:function(){return n.e("apply").then(n.bind(null,"1533"))}}]}),I=F;a["a"].use(x["a"]);var N=new x["a"].Store({state:{meetings:[{label:"Ryde to more professional charisma",id:"ZTFjNzA3ZTgtOWVjYy00NDY0LTk3ZDItM2IwMWQ3ZDNmZDg5",input:"",time:"17.45",context:"%7b%22Tid%22%3a%22d4110288-bf1e-4337-97ab-a5c51371dcea%22%2c%22Oid%22%3a%22ad8d2181-178b-4c75-8928-1099003cc557%22%7d"},{label:"Ryde to your next assignment",id:"YmVhZTlhZTQtZmYwOS00MjRhLWE0MDYtOTlkOTI4ZThkNDky",input:"",time:"18.15",context:"%7b%22Tid%22%3a%22d4110288-bf1e-4337-97ab-a5c51371dcea%22%2c%22Oid%22%3a%22ad8d2181-178b-4c75-8928-1099003cc557%22%7d"},{label:"Ryde to feedback land",id:"ZjViMWJhOGYtZjJiMS00M2E4LTk1NzMtMGNlNmRhMGM3ZDcw",input:"",time:"19.00",context:"%7b%22Tid%22%3a%22d4110288-bf1e-4337-97ab-a5c51371dcea%22%2c%22Oid%22%3a%22ad8d2181-178b-4c75-8928-1099003cc557%22%7d"}]},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:I,store:N,render:function(t){return t(u)}}).$mount("#app")},"8ade":function(t,e,n){},aff5:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n            default header\n          ")])],2),n("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n            default body\n          ")])],2),n("div",{staticClass:"modal-footer"},[t._t("footer",[n("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v("\n              OK\n            ")])])],2)])])])])},o=[],s={name:"modal"},i=s,r=(n("d125"),n("2877")),l=Object(r["a"])(i,a,o,!1,null,"0050ad4f",null);e["a"]=l.exports},b1f0:function(t,e,n){},d125:function(t,e,n){"use strict";n("b1f0")},ed9a:function(t,e,n){"use strict";n("8ade")}});
//# sourceMappingURL=app.354e0403.js.map