(function(e){function t(t){for(var o,c,i=t[0],s=t[1],l=t[2],b=0,d=[];b<i.length;b++)c=i[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"165c":function(e,t,n){},1807:function(e,t,n){},"9b19":function(e,t,n){"use strict";n("e66e")},a766:function(e,t,n){},b5c5:function(e,t,n){"use strict";n("165c")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={class:"font-sans bg-purple-lightest"};function r(e,t,n,r,c,i){var s=Object(o["t"])("MainPage");return Object(o["o"])(),Object(o["f"])("div",a,[Object(o["i"])(s)])}function c(e,t,n,a,r,c){var i=Object(o["t"])("NavigationBar"),s=Object(o["t"])("Home"),l=Object(o["t"])("About"),u=Object(o["t"])("Skills"),b=Object(o["t"])("Experience"),d=Object(o["t"])("Projects"),p=Object(o["t"])("Testimonies"),f=Object(o["t"])("Footer");return Object(o["o"])(),Object(o["f"])(o["a"],null,[Object(o["i"])(i,{current:e.current},null,8,["current"]),Object(o["i"])(s,{ref:function(t){return e.sections.home=t}},null,512),Object(o["i"])(l,{ref:function(t){return e.sections.about=t}},null,512),Object(o["i"])(u),Object(o["i"])(b,{ref:function(t){return e.sections.work=t}},null,512),Object(o["i"])(d),Object(o["i"])(p,{ref:function(t){return e.sections.testimonies=t}},null,512),Object(o["i"])(f)],64)}var i=n("3835"),s=(n("4fad"),n("a4d3"),n("e01a"),{class:"h-[8vh] rounded-t-3xl bg-white w-5/6 mx-auto text-center"}),l=["href"],u=Object(o["g"])("img",{src:"/assets/bx_bxs-down-arrow.svg",class:"m-auto animate-bounce w-8 pt-8 cursor-pointer"},null,-1),b=[u],d=["id"],p={class:"py-28 bg-white flex items-center"},f={class:"text-right flex-1 pr-3"},h={class:"ml-40 text-purple-darkest text-4xl"},j={class:"ml-40 text-magenta text-5xl"},g={class:"flex-1 pl-3"},O={class:"pr-40 text-lg text-blue-dark"};function v(e,t,n,a,r,c){var i=Object(o["t"])("Header");return Object(o["o"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",s,[Object(o["g"])("a",{href:"#"+e.about,class:"inline-block"},b,8,l)]),Object(o["g"])("div",{class:"w-full h-[72px] bg-white",id:e.about,ref:"root"},null,8,d),Object(o["i"])(i,{header:e.header,class:"bg-white pt-6"},null,8,["header"]),Object(o["g"])("div",p,[Object(o["g"])("div",f,[Object(o["g"])("p",h,Object(o["u"])(e.quote),1),Object(o["g"])("p",j,Object(o["u"])(e.tagline),1)]),Object(o["g"])("div",g,[Object(o["g"])("p",O,Object(o["u"])(e.description),1)])])],64)}var m=n("5530"),x=(n("18a5"),{class:"w-full pl-28"}),y={class:"text-3xl"};function w(e,t,n,a,r,c){return Object(o["o"])(),Object(o["f"])("div",x,[Object(o["g"])("p",y,Object(o["u"])(e.header.plain),1),Object(o["g"])("p",{class:Object(o["k"])(["text-4xl font-bold","text-".concat(e.color)])},Object(o["u"])(e.header.emphasis),3),Object(o["g"])("div",{class:Object(o["k"])(["h-1 rounded-3xl","bg-".concat(e.color)]),style:Object(o["l"])({width:"".concat(e.header.emphasis.length+3,"em")})},null,6)])}var k=Object(o["j"])({name:"Header",props:{header:{type:Object,required:!0},color:{type:String,default:"purple-darkest"}}});k.render=w;var H=k,I=(n("159b"),{home:{anchor:"home",display:"HOME"},about:{anchor:"about",display:"ABOUT"},work:{anchor:"work",display:"WORK"},testimonies:{anchor:"testimonies",display:"TESTIMONIES"}}),S=[{logoPath:"/assets/social-media/devpost.svg",link:"https://devpost.com/shari09"},{logoPath:"/assets/social-media/email.svg",link:"mailto:sun.shari09@gmail.com"},{logoPath:"/assets/social-media/github.svg",link:"https://github.com/shari09"},{logoPath:"/assets/social-media/linkedin.svg",link:"https://www.linkedin.com/in/shari-sun-536477182/"}],E={tag:"HELLO! MY NAME IS",name:"SHARI SUN",options:["Full Stack Developer","University of Waterloo","Systems Design Engineering","Looking for Winter 2022 co-op","Food Lover"],logoPath:"/assets/logo.png"},M={header:{plain:"What kind of person",emphasis:"Am I"},quote:"Engineering is the process of breaking down complex problems and solve them in the cleanest way possible",tagline:"Design, Create, Test",description:"\n    I mainly do things related to web dev (no matter if it's frontend or backend), since web apps\n    are so prevalent right now. Aside from that, I also do UI/UX design (I designed this site)\n    but I haven't read upon any actual design guides (I may be violating a lot of design architecture). \n    Everything was made with intuition.\n    If I ever have time, I'll try to get into cybersecurity because hacking sounds cool.\n    There are lots of things I like aside from programming.\n    In fact, I don't touch the computer at all outside my dedicated \"learning hours\".\n    I like digital drawing (though I haven't drawn in a while), painting, gaming (if it's non-competitive),\n    going out with friends (poor wallet though), photography, and photo/video editing (that's the one skill I wish I have).\n    If you ever see me in real life, just know that buying me food will always make me happy :)\n  "},P={header:{plain:"What are my",emphasis:"Skills"},logos:[{name:"Bootstrap",path:"bootstrap"},{name:"C++",path:"cpp"},{name:"CSS 3",path:"css3"},{name:"SQL",path:"db"},{name:"Django",path:"django"},{name:"Firebase",path:"firebase"},{name:"Google Cloud",path:"google-cloud"},{name:"HTML 5",path:"html5"},{name:"Java",path:"java"},{name:"JavaScript",path:"js"},{name:"MongoDB",path:"mongodb"},{name:"NodeJS",path:"nodejs"},{name:"Python",path:"python"},{name:"React",path:"reactjs"},{name:"TypeScript",path:"ts"},{name:"Vue",path:"vue"}]};P.logos.forEach((function(e,t){var n=e.path;P.logos[t].path="/assets/skills/".concat(n,".svg")}));var A={header:{plain:"Some positions I've held",emphasis:"Recently"},positions:[{company:"EQWorks [CVE: EQ]",role:"Full Stack Developer Intern",description:"Added powerful features to the core app using React and Express that was demoed in various company-wide Tech Connects.",duration:"July - Sep 2021"},{company:"ULHacks",role:"Head of Outreach | General Advisor",description:["Organized the first iteration of ULHacks, a hackathon without any organization \n        backing such as schools or companies but we had an astonishing number of 250+ participants.","Negotiate with 10+ companies and organizations for sponsorship or partnership."],duration:"June - Sep 2021"},{company:"Hatch Coding",role:"Coding Instructor",description:"Mentored students from 7-18 regarding various programming concepts such as game\n        developing, competitive programming, design patterns, or unit testing.",duration:"2019 - 2021"},{company:"YRHacks",role:"Lead Organizer",description:"Organized the first school board (YRDSB) hackathon with 300+ participants.",duration:"2020 - 2021"}]},L={header:{plain:"Collection of my recent",emphasis:"Projects"},photoCards:[{name:"RHHS Website",description:"A website informing all Richmond Hill High School students of the latest updates\n        and school information such as clubs, events, gallery, etc.",photoPath:"/assets/projects/stuco.png",link:"https://rhhsstuco.ca"},{name:"Duber Judge",description:"An online judge made without using any frameworks/libraries \n        (with the exception of SQLite Java SDK) where one can practice and sharpen their coding/algorithm \n        knowledge alongside everyone else in the community. ",photoPath:"/assets/projects/stuco.png",link:"https://github.com/beepboop271/duber-judge/tree/ics4ue-submission"}],wordCards:[{name:"ShiftBoard",languages:["Django","SQLite","React","Python","TypeScript"],description:["Allows a user to create boards for other, anonymous users to put messages and pictures \n        related to the theme of the board. Anyone can contribute to the board as long \n        as they have a link so no need for annoying sign-ups.","Backend is built around Django (unit tests, routing, database connection).","Dedicated to my grandpa who passed away this year."],link:"https://github.com/shift-board"},{name:"Mongo-Tsapp",languages:["React Native","TypeScript","MongoDB","Firebase"],description:["A user friendly mobile version of teach assist (a tool YRDSB uses for student markings).","Used MongoDB atlas for data storage and Stitch (BAAS) for serverless functions (polling on the official site)","Firebase is used for push notifications for mark updates."],link:"https://github.com/shari09/mongo-tsapp"},{name:"Minute Aid",languages:["Firebase","React","Chrome extension","Azure"],description:["The extension allows users to transcribe Google Meets and store the transcript in the web app.","Azure Cognitive Services is used for automatically detecting keywords said in the meeting.","Web app hosted on Firebase.","Made for Hack The North 2020++."],link:"https://devpost.com/software/minute-aid"}]},T={header:{plain:"How am I like to",emphasis:"Others"},testimonies:[{quote:"is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements ",author:"EmeraldEntities"},{quote:"is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements",author:"EmeraldEntities"},{quote:"is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements ",author:"EmeraldEntities"},{quote:"is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements ",author:"EmeraldEntities"}]},C=Object(o["j"])({name:"About",components:{Header:H},setup:function(){var e=Object(o["r"])(null);return Object(m["a"])(Object(m["a"])({about:I.about.anchor},M),{},{root:e})}});C.render=v;var q=C,W=(n("b0c0"),["id"]),B={class:"w-full md:w-1/4 ml-auto text-purple-darkest"},D={class:"text-lg"},_={class:"text-5xl font-bold"},R={class:"w-full md:w-1/2"},N=["src"];function F(e,t,n,a,r,c){var i=Object(o["t"])("Typing");return Object(o["o"])(),Object(o["f"])("div",{id:e.anchor,class:"bg-purple-lightest h-[90vh] flex flex-col md:flex-row items-center justify-center",ref:"root"},[Object(o["g"])("div",B,[Object(o["g"])("p",D,Object(o["u"])(e.tag),1),Object(o["g"])("p",_,Object(o["u"])(e.name),1),Object(o["i"])(i,{class:"text-2xl mt-1",words:e.options},null,8,["words"])]),Object(o["g"])("div",R,[Object(o["g"])("img",{alt:"Profile photo",src:e.logoPath,class:"w-3/5 md:w-1/2 md:max-w-[400px] mx-auto"},null,8,N)])],8,W)}function z(e,t,n,a,r,c){return Object(o["o"])(),Object(o["f"])("p",null,Object(o["u"])(e.chars),1)}n("99af");var J=Object(o["j"])({name:"Typing",props:{words:{type:Array,required:!0}},setup:function(e){var t=Object(o["r"])("|"),n=Object(o["r"])(0),a=Object(o["r"])(e.words[n.value]),r=100,c=500,i=50,s=0,l=0,u=0,b=function(){clearInterval(u),s=setInterval((function(){var e=t.value.length;e-1===a.value.length?d():t.value="".concat(t.value.substring(0,e-1)).concat(a.value[e-1],"|")}),r)},d=function(){clearInterval(s),l=setTimeout((function(){return p()}),c)},p=function(){clearInterval(l),u=setInterval((function(){var o=t.value.length;o-1===0?(n.value=n.value===e.words.length-1?0:n.value+1,b()):t.value="".concat(t.value.substring(0,o-2),"|")}),i)};return Object(o["v"])(n,(function(t,n){a.value=e.words[n]})),Object(o["m"])((function(){return b()})),Object(o["n"])((function(){return[s,l,u].forEach((function(e){return clearInterval(e)}))})),{chars:t}}});J.render=z;var U=J,Q=Object(o["j"])({name:"Home",components:{Typing:U},setup:function(){var e=I.home.anchor,t=Object(o["r"])(null);return Object(m["a"])(Object(m["a"])({anchor:e},E),{},{root:t})}});Q.render=F;var G=Q,V=(n("07ac"),n("9911"),{class:"fixed top-0 flex flex-col md:flex-row w-full bg-white h-[72px] items-center px-3 z-50"}),Y={class:"ml-auto"},K=["href"],X=["src"];function $(e,t,n,a,r,c){var i=Object(o["t"])("NavIcon");return Object(o["o"])(),Object(o["f"])("ul",V,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(Object.values(e.navLinks),(function(n){return Object(o["o"])(),Object(o["d"])(i,{text:n.display,href:"#"+n.anchor,key:n.anchor,isHovering:e.isHovering,current:e.current===n.anchor,onMouseenter:t[0]||(t[0]=function(t){return e.setIsHovering(!0)}),onMouseleave:t[1]||(t[1]=function(t){return e.setIsHovering(!1)})},null,8,["text","href","isHovering","current"])})),128)),Object(o["g"])("div",Y,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.socialMedia,(function(e){return Object(o["o"])(),Object(o["f"])("a",{key:"nav"+e.logoPath,href:e.link},[Object(o["g"])("img",{src:e.logoPath,class:"px-4 h-auto w-16 inline-block opacity-80 hover:opacity-100 fade"},null,8,X)],8,K)})),128))])])}var Z={class:"mb-auto"};function ee(e,t,n,a,r,c){return Object(o["o"])(),Object(o["f"])("a",{class:"px-3 flex h-full flex-col",onMouseenter:t[0]||(t[0]=function(t){return e.setActive(!0)}),onMouseleave:t[1]||(t[1]=function(t){return e.setActive(!1)})},[Object(o["g"])("span",{class:Object(o["k"])(["mt-auto text-lg fade",[e.isActive()?"text-purple-darkest":"text-purple opacity-90"]])},Object(o["u"])(e.text),3),Object(o["g"])("div",Z,[Object(o["g"])("div",{class:Object(o["k"])(["h-1 bg-purple-dark rounded-3xl mb-auto fade",[!e.isActive()&&"bg-opacity-0"]])},null,2)])],32)}var te=Object(o["j"])({name:"NavIcon",props:{text:{type:String,required:!0},isHovering:{type:Boolean,default:!1},current:{type:Boolean,default:!1}},setup:function(e){var t=Object(o["r"])(!1),n=function(e){t.value=e},a=function(){return t.value||!e.isHovering&&e.current};return{isActive:a,setActive:n}}});te.render=ee;var ne=te,oe=Object(o["j"])({name:"NavigationBar",components:{NavIcon:ne},props:{current:{type:String,default:I.home.anchor}},setup:function(){var e=Object(o["r"])(!1),t=function(t){e.value=t};return{isHovering:e,setIsHovering:t,navLinks:I,socialMedia:S}}});oe.render=$;var ae=oe,re=Object(o["g"])("div",{class:"h-[72px]"},null,-1),ce={class:"flex flex-wrap flex-row bg-purple w-5/6 mx-auto mt-10 mb-32 p-[5%] rounded-3xl justify-between"},ie=["src"],se={class:"text-white text-center"};function le(e,t,n,a,r,c){var i=Object(o["t"])("Header");return Object(o["o"])(),Object(o["f"])(o["a"],null,[re,Object(o["i"])(i,{header:e.header},null,8,["header"]),Object(o["g"])("div",ce,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.logos,(function(e){return Object(o["o"])(),Object(o["f"])("div",{key:e.path,class:"m-6 w-18"},[Object(o["g"])("img",{src:e.path,class:"mx-auto"},null,8,ie),Object(o["g"])("div",se,Object(o["u"])(e.name),1)])})),128))])],64)}var ue=Object(o["j"])({name:"Skills",components:{Header:H},setup:function(){return Object(m["a"])({},P)}});ue.render=le;var be=ue;Object(o["q"])("data-v-2ef8b401");var de=["id"],pe={class:"pt-20 pb-32 bg-white"},fe=["onMouseenter"],he={key:0,class:"font-bold text-white text-2xl text-center"},je={key:0},ge={class:"ml-auto pl-6 flex-shrink-0 font-bold"};function Oe(e,t,n,a,r,c){var i=Object(o["t"])("Header");return Object(o["o"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",{class:"h-[72px] bg-white",id:e.navLinks.work.anchor,ref:"root"},null,8,de),Object(o["g"])("div",pe,[Object(o["i"])(i,{header:e.header,color:"blue-dark",class:"mb-20"},null,8,["header"]),(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.positions,(function(n,a){return Object(o["o"])(),Object(o["f"])("div",{class:"bg-blue w-5/6 mx-auto my-2 rounded-xl py-8",key:n+a,onMouseenter:function(t){return e.curHover=a},onMouseleave:t[0]||(t[0]=function(t){return e.curHover=-1})},[Object(o["i"])(o["b"],{name:"fade",mode:"out-in"},{default:Object(o["w"])((function(){return[e.curHover!==a?(Object(o["o"])(),Object(o["f"])("div",he,Object(o["u"])("".concat(n.company," — ").concat(n.role)),1)):(Object(o["o"])(),Object(o["f"])("div",{key:1,class:"text-gray-100 text-xl px-6 flex flex-nowrap",ref:e.cards[a]},[Array.isArray(n.description)?(Object(o["o"])(!0),Object(o["f"])(o["a"],{key:1},Object(o["s"])(n.description,(function(e,t){return Object(o["o"])(),Object(o["f"])("p",{key:"".concat(n+a,"-").concat(t)},Object(o["u"])(e),1)})),128)):(Object(o["o"])(),Object(o["f"])("p",je,Object(o["u"])(n.description),1)),Object(o["g"])("p",ge,Object(o["u"])(n.duration),1)],512))]})),_:2},1024)],40,fe)})),128))])],64)}Object(o["p"])();n("d81d");var ve=Object(o["j"])({name:"Experience",components:{Header:H},setup:function(){var e=Object(o["r"])(-1),t=Object(o["r"])(null),n=A.positions.map((function(){return Object(o["r"])(null)}));return Object(o["v"])(e,(function(e,t){var o,a,r;-1!==e&&(console.log(null===(o=n[e].value)||void 0===o?void 0:o.clientHeight),console.log(null===(a=n[t])||void 0===a||null===(r=a.value)||void 0===r?void 0:r.clientHeight))})),Object(m["a"])(Object(m["a"])({},A),{},{navLinks:I,curHover:e,cards:n,root:t})}});n("9b19");ve.render=Oe,ve.__scopeId="data-v-2ef8b401";var me=ve,xe={class:"pt-32"},ye={class:"flex flex-row w-5/6 mx-auto mt-20 flex-wrap"},we=Object(o["g"])("div",{class:"mx-auto text-2xl text-center mt-14 text-gray-900"},[Object(o["h"])(" And... much more on "),Object(o["g"])("a",{href:"https://github.com/shari09",class:"text-purple-dark hover:text-purple-darkest font-bold"},"GitHub!")],-1);function ke(e,t,n,a,r,c){var i=Object(o["t"])("Header"),s=Object(o["t"])("PhotoCard"),l=Object(o["t"])("WordCard");return Object(o["o"])(),Object(o["f"])("div",xe,[Object(o["i"])(i,{header:e.header},null,8,["header"]),Object(o["g"])("div",ye,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.photoCards,(function(e,t){return Object(o["o"])(),Object(o["d"])(s,{key:e.name+t,info:e},null,8,["info"])})),128)),(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.wordCards,(function(e,t){return Object(o["o"])(),Object(o["d"])(l,{key:e.name+t,info:e,class:"mt-3"},null,8,["info"])})),128))]),we])}Object(o["q"])("data-v-fb7e20a4");var He=["src"],Ie={key:0,class:"absolute inset-0 w-full h-full px-2"},Se={class:"bg-white bg-opacity-90 w-full h-full rounded-xl flex flex-col justify-center "},Ee={class:"text-black text-2xl text-center m-2"},Me={class:"px-32 text-gray-900 font-light text-lg text-center my-8"},Pe=["href"];function Ae(e,t,n,a,r,c){return Object(o["o"])(),Object(o["f"])("div",{class:"px-2 relative w-full md:w-1/2 h-[26em]",onMouseenter:t[0]||(t[0]=function(t){return e.hover=!0}),onMouseleave:t[1]||(t[1]=function(t){return e.hover=!1})},[Object(o["g"])("img",{src:e.info.photoPath,class:"object-cover rounded-xl w-full h-full"},null,8,He),Object(o["i"])(o["b"],{name:"fade",mode:"out-in"},{default:Object(o["w"])((function(){return[e.hover?(Object(o["o"])(),Object(o["f"])("div",Ie,[Object(o["g"])("div",Se,[Object(o["g"])("div",Ee,Object(o["u"])(e.info.name),1),Object(o["g"])("div",Me,Object(o["u"])(e.info.description),1),Object(o["g"])("a",{class:"\n              text-xl text-center transition duration-500 ease-in-out\n              py-2 px-8 inline-block rounded-xl mx-auto bg-gray-700 text-white hover:scale-110",href:e.info.link}," VIEW ",8,Pe)])])):Object(o["e"])("",!0)]})),_:1})],32)}Object(o["p"])();var Le=Object(o["j"])({name:"PhotoCard",props:{info:{type:Object,required:!0}},setup:function(){var e=Object(o["r"])(!1);return{hover:e}}});n("d6ce");Le.render=Ae,Le.__scopeId="data-v-fb7e20a4";var Te=Le,Ce={class:"px-2 w-full md:w-1/3 h-[30em]"},qe={class:"bg-white rounded-xl w-full h-full p-10 pb-6 flex flex-col"},We={class:"text-3xl text-gray-900"},Be={class:"font-thin text-sm text-gray-800"},De={class:"list-inside overflow-y-auto list-disc my-6 font-thin text-gray-800"},_e=["href"];function Re(e,t,n,a,r,c){return Object(o["o"])(),Object(o["f"])("div",Ce,[Object(o["g"])("div",qe,[Object(o["g"])("div",We,Object(o["u"])(e.info.name),1),Object(o["g"])("div",Be,Object(o["u"])(e.languages),1),Object(o["g"])("ul",De,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.info.description,(function(t,n){return Object(o["o"])(),Object(o["f"])("li",{key:e.info.name+n},Object(o["u"])(t),1)})),128))]),Object(o["g"])("a",{class:"text-gray-700 text-xl text-center border border-gray-700 transition duration-500 ease-in-out\n          py-1 px-10 inline-block rounded-lg mr-auto hover:bg-gray-700 hover:text-white hover:scale-110 mt-auto",href:e.info.link}," VIEW ",8,_e)])])}var Ne=Object(o["j"])({name:"WordCard",props:{info:{type:Object,required:!0}},setup:function(e){var t=e.info.languages.reduce((function(e,t,n){return 0===n?"".concat(e," ").concat(t):"".concat(e," · ").concat(t," ")}),"");return{languages:t}}});Ne.render=Re;var Fe=Ne,ze=Object(o["j"])({name:"Projects",components:{Header:H,PhotoCard:Te,WordCard:Fe},setup:function(){return Object(m["a"])({},L)}});ze.render=ke;var Je=ze;Object(o["q"])("data-v-651a4496");var Ue=["id"],Qe={class:"flex flex-row mb-12"},Ge={ref:"wrapper",class:"w-5/6 mx-auto flex flex-row flex-nowrap overflow-x-auto items-center justify-between no-scrollbar"};function Ve(e,t,n,a,r,c){var i=Object(o["t"])("Header"),s=Object(o["t"])("Testimony");return Object(o["o"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",{class:"h-[72px] pt-32",id:e.navLinks.testimonies.anchor,ref:"root"},null,8,Ue),Object(o["i"])(i,{header:e.header,class:"my-14"},null,8,["header"]),Object(o["g"])("div",Qe,[e.overflow?(Object(o["o"])(),Object(o["f"])("img",{key:0,src:"/assets/left-arrow.svg",class:"ml-auto hover:cursor-pointer",onClick:t[0]||(t[0]=function(t){return e.scroll(-e.quoteWidth)})})):Object(o["e"])("",!0),Object(o["g"])("div",Ge,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.testimonies,(function(e,t){return Object(o["o"])(),Object(o["d"])(s,{class:"m-10",testimony:e,key:"testimonies"+t,ref:"block"},null,8,["testimony"])})),128))],512),e.overflow?(Object(o["o"])(),Object(o["f"])("img",{key:1,src:"/assets/right-arrow.svg",class:"mr-auto hover:cursor-pointer",onClick:t[1]||(t[1]=function(t){return e.scroll(e.quoteWidth)})})):Object(o["e"])("",!0)])],64)}Object(o["p"])();var Ye={class:"bg-purple-dark text-white p-10 rounded-full flex flex-col align-center text-center flex-shrink-0 w-96"},Ke={class:"my-4"},Xe={class:"font-bold"};function $e(e,t,n,a,r,c){return Object(o["o"])(),Object(o["f"])("div",Ye,[Object(o["g"])("div",Ke,Object(o["u"])(e.testimony.quote),1),Object(o["g"])("div",Xe,Object(o["u"])(e.testimony.author),1)])}var Ze=Object(o["j"])({name:"Quote",props:{testimony:{type:Object,required:!0}}});Ze.render=$e;var et=Ze,tt=Object(o["j"])({name:"Testimonies",components:{Header:H,Testimony:et},setup:function(){var e=Object(o["r"])(null),t=Object(o["r"])(null),n=Object(o["r"])(0),a=Object(o["r"])(!1),r=Object(o["r"])(null),c=function(t){e.value&&e.value.scrollTo({left:e.value.scrollLeft+t,behavior:"smooth"})};return Object(o["m"])((function(){var t=function(){if(null!==e.value){var t=e.value.scrollWidth,n=e.value.clientWidth;t>n&&!a.value&&(a.value=!0,e.value.scrollTo({left:e.value.scrollLeft+(t-n)/2,behavior:"smooth"})),t<=n&&a.value&&(a.value=!1)}};t(),window.addEventListener("resize",t)})),Object(o["v"])(t,(function(e){e&&(n.value=e.$el.clientWidth)})),Object(m["a"])(Object(m["a"])({navLinks:I},T),{},{wrapper:e,scroll:c,block:t,quoteWidth:n,overflow:a,root:r})}});n("b5c5");tt.render=Ve,tt.__scopeId="data-v-651a4496";var nt=tt,ot={class:"bg-black h-72 mt-32 bg-opacity-[85%]"},at={class:"w-5/6 mx-auto h-full text-gray-300 flex flex-row items-center"},rt={class:"mr-auto"},ct=["href"],it=["src"],st={class:"ml-auto text-xl"},lt=["href"];function ut(e,t,n,a,r,c){return Object(o["o"])(),Object(o["f"])("div",ot,[Object(o["g"])("div",at,[Object(o["g"])("div",rt,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.socialMedia,(function(e){return Object(o["o"])(),Object(o["f"])("a",{key:"footer"+e.logoPath,href:e.link},[Object(o["g"])("img",{src:e.logoPath,class:"px-4 h-auto w-22 inline-block brightness-0 invert-[0.7] hover:invert"},null,8,it)],8,ct)})),128))]),Object(o["g"])("div",st,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.navLinks,(function(e,t){return Object(o["o"])(),Object(o["f"])("a",{key:"footer"+e.anchor,href:"#"+e.anchor,class:"hover:text-white"},Object(o["u"])("home"===t?e.display:" · ".concat(e.display)),9,lt)})),128))])])])}var bt=Object(o["j"])({name:"Footer",setup:function(){return{navLinks:I,socialMedia:S}}});bt.render=ut;var dt=bt,pt=Object(o["j"])({name:"MainPage",components:{Home:G,About:q,NavigationBar:ae,Skills:be,Experience:me,Projects:Je,Testimonies:nt,Footer:dt},setup:function(){var e=Object(o["r"])({}),t=Object(o["r"])("home");return Object(o["m"])((function(){document.addEventListener("scroll",(function(){if(!Object.entries(e.value).some((function(e){var t=Object(i["a"])(e,2),n=t[1];return!n}))){var n=Object.entries(e.value).reduce((function(e,t){var n=Object(i["a"])(t,2),o=n[0],a=n[1].root,r=a.getBoundingClientRect().top;return r<=2&&r>=e.value?{section:o,value:r}:e}),{section:"home",value:-1e4}),o=n.section;t.value=o}}))})),{current:t,sections:e}}});pt.render=c;var ft=pt,ht=Object(o["j"])({name:"App",components:{MainPage:ft}});ht.render=r;var jt=ht;n("a766");Object(o["c"])(jt).mount("#app")},d6ce:function(e,t,n){"use strict";n("1807")},e66e:function(e,t,n){}});
//# sourceMappingURL=app.888891f2.js.map