(function(e){function t(t){for(var o,c,i=t[0],s=t[1],l=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},3774:function(e,t,n){},4614:function(e,t,n){},"5be3":function(e,t,n){},"8f59":function(e,t,n){"use strict";n("3774")},a766:function(e,t,n){},a7dd:function(e,t,n){"use strict";n("5be3")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"font-sans bg-purple-lightest"};function a(e,t,n,a,c,i){var s=Object(o["t"])("MainPage");return Object(o["o"])(),Object(o["f"])("div",r,[Object(o["i"])(s)])}function c(e,t,n,r,a,c){var i=Object(o["t"])("NavigationBar"),s=Object(o["t"])("Home"),l=Object(o["t"])("About"),u=Object(o["t"])("Skills"),d=Object(o["t"])("Experience"),b=Object(o["t"])("Projects"),p=Object(o["t"])("Testimonies"),f=Object(o["t"])("Footer");return Object(o["o"])(),Object(o["f"])(o["a"],null,[Object(o["i"])(i,{current:e.current},null,8,["current"]),Object(o["i"])(s,{ref:function(t){return e.sections.home=t}},null,512),Object(o["i"])(l,{ref:function(t){return e.sections.about=t}},null,512),Object(o["i"])(u),Object(o["i"])(d,{ref:function(t){return e.sections.work=t}},null,512),Object(o["i"])(b),Object(o["i"])(p,{ref:function(t){return e.sections.testimonies=t}},null,512),Object(o["i"])(f)],64)}var i=n("3835"),s=(n("4fad"),n("a4d3"),n("e01a"),{class:"h-[8vh] rounded-t-3xl bg-white w-5/6 mx-auto text-center"}),l=["href"],u=Object(o["g"])("img",{src:"/assets/bx_bxs-down-arrow.svg",class:"m-auto animate-bounce w-8 pt-8 cursor-pointer"},null,-1),d=[u],b=["id"],p={class:"py-14 md:py-28 bg-white items-center flex flex-col md:flex-row"},f={class:"ml-2 md:ml-0 text-center md:text-right flex-1 pr-3"},h={class:"md:ml-40 text-purple-darkest text-4xl"},j={class:"md:ml-40 text-magenta text-5xl"},m={class:"mt-10 md:mt-0 flex-1 pl-3"},O={class:"md:pr-40 text-lg text-blue-dark"};function g(e,t,n,r,a,c){var i=Object(o["t"])("Header");return Object(o["o"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",s,[Object(o["g"])("a",{href:"#"+e.about,class:"inline-block"},d,8,l)]),Object(o["g"])("div",{class:"w-full h-[72px] bg-white",id:e.about,ref:"root"},null,8,b),Object(o["i"])(i,{header:e.header,class:"bg-white pt-6"},null,8,["header"]),Object(o["g"])("div",p,[Object(o["g"])("div",f,[Object(o["g"])("p",h,Object(o["u"])(e.quote),1),Object(o["g"])("p",j,Object(o["u"])(e.tagline),1)]),Object(o["g"])("div",m,[Object(o["g"])("p",O,Object(o["u"])(e.description),1)])])],64)}var v=n("5530"),x=(n("18a5"),{class:"w-full pl-4 md:pl-28"}),y={class:"text-3xl"};function w(e,t,n,r,a,c){return Object(o["o"])(),Object(o["f"])("div",x,[Object(o["g"])("p",y,Object(o["u"])(e.header.plain),1),Object(o["g"])("p",{class:Object(o["k"])(["text-4xl font-bold","text-".concat(e.color)])},Object(o["u"])(e.header.emphasis),3),Object(o["g"])("div",{class:Object(o["k"])(["h-1 rounded-3xl","bg-".concat(e.color)]),style:Object(o["l"])({width:"".concat(e.header.emphasis.length+3,"em")})},null,6)])}var k=Object(o["j"])({name:"Header",props:{header:{type:Object,required:!0},color:{type:String,default:"purple-darkest"}}});k.render=w;var H=k,S=(n("159b"),{home:{anchor:"home",display:"HOME"},about:{anchor:"about",display:"ABOUT"},work:{anchor:"work",display:"WORK"},testimonies:{anchor:"testimonies",display:"TESTIMONIES"}}),I=[{logoPath:"/assets/social-media/devpost.svg",link:"https://devpost.com/shari09"},{logoPath:"/assets/social-media/email.svg",link:"mailto:sun.shari09@gmail.com"},{logoPath:"/assets/social-media/github.svg",link:"https://github.com/shari09"},{logoPath:"/assets/social-media/linkedin.svg",link:"https://www.linkedin.com/in/shari-sun-536477182/"}],M={tag:"HELLO! MY NAME IS",name:"SHARI SUN",options:["Full Stack Developer","University of Waterloo","Systems Design Engineering","Looking for Winter 2022 co-op","Food Lover"],logoPath:"/assets/logo.png"},P={header:{plain:"What kind of person",emphasis:"Am I"},quote:"Engineering is the process of breaking down complex problems and solve them in the cleanest way possible",tagline:"Design, Create, Test",description:"\n    I mainly do things related to web dev (no matter if it's frontend or backend), since web apps\n    are so prevalent right now. Aside from that, I also do UI/UX design (I designed this site)\n    but I haven't read upon any actual design guides (I may be violating a lot of design architecture). \n    Everything was made with intuition.\n    If I ever have time, I'll try to get into cybersecurity because hacking sounds cool.\n    There are lots of things I like aside from programming.\n    In fact, I don't touch the computer at all outside my dedicated \"learning hours\".\n    I like digital drawing (though I haven't drawn in a while), painting, gaming (if it's non-competitive),\n    going out with friends (poor wallet though), photography, and photo/video editing (that's the one skill I wish I have).\n    If you ever see me in real life, just know that buying me food will always make me happy :)\n  "},A={header:{plain:"What are my",emphasis:"Skills"},logos:[{name:"Bootstrap",path:"bootstrap"},{name:"C++",path:"cpp"},{name:"CSS 3",path:"css3"},{name:"SQL",path:"db"},{name:"Django",path:"django"},{name:"Firebase",path:"firebase"},{name:"Google Cloud",path:"google-cloud"},{name:"HTML 5",path:"html5"},{name:"Java",path:"java"},{name:"JavaScript",path:"js"},{name:"MongoDB",path:"mongodb"},{name:"NodeJS",path:"nodejs"},{name:"Python",path:"python"},{name:"React",path:"reactjs"},{name:"TypeScript",path:"ts"},{name:"Vue",path:"vue"}]};A.logos.forEach((function(e,t){var n=e.path;A.logos[t].path="/assets/skills/".concat(n,".svg")}));var E={header:{plain:"Some positions I've held",emphasis:"Recently"},positions:[{company:"EQWorks [CVE: EQ]",role:"Full Stack Developer Intern",description:"Added powerful features to the core app using React and Express that was demoed in various company-wide Tech Connects.",duration:"July - Sep 2021"},{company:"ULHacks",role:"Head of Outreach | General Advisor",description:["Organized the first iteration of ULHacks, a hackathon without any organization \n        backing such as schools or companies but we had an astonishing number of 250+ participants.","Negotiate with 10+ companies and organizations for sponsorship or partnership."],duration:"June - Sep 2021"},{company:"Hatch Coding",role:"Coding Instructor",description:"Developed curriculum for students from 7-18 regarding various programming concepts such as game\n        developing, competitive programming, design patterns, or unit testing and personally mentored them.",duration:"2019 - 2021"},{company:"YRHacks",role:"Lead Organizer",description:"Organized the first school board (YRDSB) hackathon with 300+ participants.",duration:"2020 - 2021"}]},L={header:{plain:"Collection of my recent",emphasis:"Projects"},photoCards:[{name:"RHHS Website",description:"A website informing all Richmond Hill High School students of the latest updates\n        and school information such as clubs, events, gallery, etc.",photoPath:"/assets/projects/stuco.png",link:"https://rhhsstuco.ca"},{name:"Duber Judge",description:"An online judge made without using any frameworks/libraries \n        (with the exception of SQLite Java SDK) where one can practice and sharpen their coding/algorithm \n        knowledge alongside everyone else in the community. ",photoPath:"/assets/projects/dubj.png",link:"https://github.com/beepboop271/duber-judge"}],wordCards:[{name:"ShiftBoard",languages:["Django","SQLite","React","Python","TypeScript"],description:["Allows a user to create boards for other, anonymous users to put messages and pictures \n        related to the theme of the board. Anyone can contribute to the board as long \n        as they have a link so no need for annoying sign-ups.","Backend is built around Django (unit tests, routing, database connection)."],link:"https://github.com/shift-board"},{name:"Mongo-Tsapp",languages:["React Native","TypeScript","MongoDB","Firebase"],description:["A user friendly mobile version of teach assist (a tool YRDSB uses for student markings).","Used MongoDB atlas for data storage and Stitch (BAAS) for serverless functions (polling on the official site)","Firebase is used for push notifications for mark updates."],link:"https://github.com/shari09/mongo-tsapp"},{name:"Minute Aid",languages:["Firebase","React","Chrome extension","Azure"],description:["The extension allows users to transcribe Google Meets and store the transcript in the web app.","Azure Cognitive Services is used for automatically detecting keywords said in the meeting.","Web app hosted on Firebase.","Made for Hack The North 2020++."],link:"https://devpost.com/software/minute-aid"}]},C={header:{plain:"How am I like to",emphasis:"Others"},testimonies:[{quote:"is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements ",author:"EmeraldEntities"},{quote:"is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements",author:"EmeraldEntities"},{quote:"Shari is a charismatic senpai with wonderful leadership skills that also doubles as an arson target",author:"Vivian (watch out)"},{quote:"Shari has an excellent eye for design and front end programming",author:"Kenzo"}]},T=Object(o["j"])({name:"About",components:{Header:H},setup:function(){var e=Object(o["r"])(null);return Object(v["a"])(Object(v["a"])({about:S.about.anchor},P),{},{root:e})}});T.render=g;var q=T,W=(n("b0c0"),["id"]),B={class:"md:w-1/4 mr-auto ml-10 mt-16 md:ml-auto text-purple-darkest"},D={class:"text-lg"},_={class:"text-5xl font-bold"},R={class:"md:w-1/2"},N=["src"];function z(e,t,n,r,a,c){var i=Object(o["t"])("Typing");return Object(o["o"])(),Object(o["f"])("div",{id:e.anchor,class:"bg-purple-lightest h-[70vh] md:h-[90vh] flex flex-col flex-col-reverse md:flex-row items-center justify-center",ref:"root"},[Object(o["g"])("div",B,[Object(o["g"])("p",D,Object(o["u"])(e.tag),1),Object(o["g"])("p",_,Object(o["u"])(e.name),1),Object(o["i"])(i,{class:"text-2xl mt-1",words:e.options},null,8,["words"])]),Object(o["g"])("div",R,[Object(o["g"])("img",{alt:"Profile photo",src:e.logoPath,class:"w-2/3 md:w-1/2 md:max-w-[400px] mx-auto"},null,8,N)])],8,W)}function F(e,t,n,r,a,c){return Object(o["o"])(),Object(o["f"])("p",null,Object(o["u"])(e.chars),1)}n("99af");var J=Object(o["j"])({name:"Typing",props:{words:{type:Array,required:!0}},setup:function(e){var t=Object(o["r"])("|"),n=Object(o["r"])(0),r=Object(o["r"])(e.words[n.value]),a=100,c=500,i=50,s=0,l=0,u=0,d=function(){clearInterval(u),s=setInterval((function(){var e=t.value.length;e-1===r.value.length?b():t.value="".concat(t.value.substring(0,e-1)).concat(r.value[e-1],"|")}),a)},b=function(){clearInterval(s),l=setTimeout((function(){return p()}),c)},p=function(){clearInterval(l),u=setInterval((function(){var o=t.value.length;o-1===0?(n.value=n.value===e.words.length-1?0:n.value+1,d()):t.value="".concat(t.value.substring(0,o-2),"|")}),i)};return Object(o["v"])(n,(function(t,n){r.value=e.words[n]})),Object(o["m"])((function(){return d()})),Object(o["n"])((function(){return[s,l,u].forEach((function(e){return clearInterval(e)}))})),{chars:t}}});J.render=F;var U=J,G=Object(o["j"])({name:"Home",components:{Typing:U},setup:function(){var e=S.home.anchor,t=Object(o["r"])(null);return Object(v["a"])(Object(v["a"])({anchor:e},M),{},{root:t})}});G.render=z;var Q=G,V=(n("07ac"),n("9911"),{class:"md:fixed top-0 flex flex-row w-full bg-white h-16 md:h-[72px] items-center px-3 z-50"}),Y={class:"ml-auto "},K=["href"],X=["src"];function $(e,t,n,r,a,c){var i=Object(o["t"])("NavIcon");return Object(o["o"])(),Object(o["f"])("ul",V,[Object(o["g"])("img",{src:"/assets/menu.svg",class:"h-auto w-8 mr-auto my-auto md:hidden",onClick:t[0]||(t[0]=function(t){return e.open=!0})}),Object(o["g"])("div",{class:Object(o["k"])(["absolute md:hidden h-screen w-screen top-0 left-0 z-40 bg-black opacity-70",[!e.open&&"hidden"]]),onClick:t[1]||(t[1]=function(t){return e.open=!1})},null,2),Object(o["g"])("div",{class:Object(o["k"])(["md:h-full md:flex md:flex-row",[e.open?"flex flex-col absolute bg-white top-0 left-0 z-50 h-full pt-12 w-4/5 pl-6 justify-start":"hidden"]])},[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(Object.values(e.navLinks),(function(n){return Object(o["o"])(),Object(o["d"])(i,{text:n.display,href:"#"+n.anchor,key:n.anchor,isHovering:e.isHovering,current:e.current===n.anchor,onMouseenter:t[2]||(t[2]=function(t){return e.setIsHovering(!0)}),onMouseleave:t[3]||(t[3]=function(t){return e.setIsHovering(!1)}),class:Object(o["k"])(["md:flex",[e.open?"flex mr-auto h-auto my-2":"hidden"]]),onClick:t[4]||(t[4]=function(t){return e.open=!1})},null,8,["text","href","isHovering","current","class"])})),128))],2),Object(o["g"])("div",Y,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.socialMedia,(function(e){return Object(o["o"])(),Object(o["f"])("a",{key:"nav"+e.logoPath,href:e.link},[Object(o["g"])("img",{src:e.logoPath,class:"px-2 md:px-4 h-auto w-12 md:w-16 inline-block opacity-80 hover:opacity-100 fade"},null,8,X)],8,K)})),128))])])}var Z={class:"mb-auto"};function ee(e,t,n,r,a,c){return Object(o["o"])(),Object(o["f"])("a",{class:"px-3 flex h-full flex-col",onMouseenter:t[0]||(t[0]=function(t){return e.setActive(!0)}),onMouseleave:t[1]||(t[1]=function(t){return e.setActive(!1)})},[Object(o["g"])("span",{class:Object(o["k"])(["mt-auto text-lg fade text-purple opacity-90",[e.isActive()&&"md:text-purple-darkest"]])},Object(o["u"])(e.text),3),Object(o["g"])("div",Z,[Object(o["g"])("div",{class:Object(o["k"])(["hidden md:block h-1 bg-purple-dark rounded-3xl mb-auto fade",[!e.isActive()&&"bg-opacity-0"]])},null,2)])],32)}var te=Object(o["j"])({name:"NavIcon",props:{text:{type:String,required:!0},isHovering:{type:Boolean,default:!1},current:{type:Boolean,default:!1}},setup:function(e){var t=Object(o["r"])(!1),n=function(e){t.value=e},r=function(){return t.value||!e.isHovering&&e.current};return{isActive:r,setActive:n}}});te.render=ee;var ne=te,oe=Object(o["j"])({name:"NavigationBar",components:{NavIcon:ne},props:{current:{type:String,default:S.home.anchor}},setup:function(){var e=Object(o["r"])(!1),t=function(t){e.value=t},n=Object(o["r"])(!1);return Object(o["v"])(n,(function(e){e?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")})),{isHovering:e,setIsHovering:t,navLinks:S,socialMedia:I,open:n}}});oe.render=$;var re=oe,ae=Object(o["g"])("div",{class:"h-[72px]"},null,-1),ce={class:"flex flex-col bg-purple mx-2 md:w-5/6 md:mx-auto mt-10 mb-32 p-[5%] rounded-3xl "},ie=["src"],se={class:"text-white text-center"};function le(e,t,n,r,a,c){var i=Object(o["t"])("Header");return Object(o["o"])(),Object(o["f"])(o["a"],null,[ae,Object(o["i"])(i,{header:e.header},null,8,["header"]),Object(o["g"])("div",ce,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.logoGroups,(function(e,t){return Object(o["o"])(),Object(o["f"])("div",{class:"justify-between flex flex-wrap md:flex-nowrap flex-row ",key:"logogroup"+t},[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e,(function(e){return Object(o["o"])(),Object(o["f"])("div",{key:e.path,class:"m-6 w-16 w-18 md:flex-shrink-0"},[Object(o["g"])("img",{src:e.path,class:"mx-auto h-auto"},null,8,ie),Object(o["g"])("div",se,Object(o["u"])(e.name),1)])})),128))])})),128))])],64)}n("fb6a");var ue=Object(o["j"])({name:"Skills",components:{Header:H},setup:function(){for(var e=Object(o["r"])(8),t=[],n=0;n<Math.ceil(A.logos.length/e.value);n++)t.push(A.logos.slice(n*e.value,n*e.value+e.value));return{header:A.header,logoGroups:t}}});ue.render=le;var de=ue;Object(o["q"])("data-v-142f3892");var be=["id"],pe={class:"pt-20 pb-32 bg-white"},fe=["onMouseenter"],he={key:0,class:"font-bold text-white text-2xl text-center"},je={key:0},me={key:0,class:"md:hidden"},Oe={key:1,class:"md:hidden"},ge={class:"ml-auto pl-6 flex-shrink-0 font-bold"};function ve(e,t,n,r,a,c){var i=Object(o["t"])("Header");return Object(o["o"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",{class:"h-[72px] bg-white",id:e.navLinks.work.anchor,ref:"root"},null,8,be),Object(o["g"])("div",pe,[Object(o["i"])(i,{header:e.header,color:"blue-dark",class:"mb-20"},null,8,["header"]),(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.positions,(function(n,r){return Object(o["o"])(),Object(o["f"])("div",{class:"bg-blue md:w-5/6 mx-auto my-2 md:rounded-xl py-8",key:n+r,onMouseenter:function(t){return e.curHover=r},onMouseleave:t[0]||(t[0]=function(t){return e.curHover=-1})},[Object(o["i"])(o["b"],{name:"fade",mode:"out-in"},{default:Object(o["w"])((function(){return[e.curHover!==r?(Object(o["o"])(),Object(o["f"])("div",he,Object(o["u"])("".concat(n.company," — ").concat(n.role)),1)):(Object(o["o"])(),Object(o["f"])("div",{key:1,class:"text-gray-100 text-xl px-2 md:px-6 flex flex-nowrap flex-col md:flex-row",ref:e.cards[r]},[Array.isArray(n.description)?(Object(o["o"])(!0),Object(o["f"])(o["a"],{key:1},Object(o["s"])(n.description,(function(e,t){return Object(o["o"])(),Object(o["f"])("p",{key:"".concat(n+r,"-").concat(t),class:"md:mx-2"},[Object(o["h"])(Object(o["u"])(e)+" ",1),t!==n.description.length-1?(Object(o["o"])(),Object(o["f"])("br",me)):Object(o["e"])("",!0),t!==n.description.length-1?(Object(o["o"])(),Object(o["f"])("br",Oe)):Object(o["e"])("",!0)])})),128)):(Object(o["o"])(),Object(o["f"])("p",je,Object(o["u"])(n.description),1)),Object(o["g"])("p",ge,Object(o["u"])(n.duration),1)],512))]})),_:2},1024)],40,fe)})),128))])],64)}Object(o["p"])();n("d81d");var xe=Object(o["j"])({name:"Experience",components:{Header:H},setup:function(){var e=Object(o["r"])(-1),t=Object(o["r"])(null),n=E.positions.map((function(){return Object(o["r"])(null)}));return Object(o["v"])(e,(function(e,t){var o,r,a;-1!==e&&(console.log(null===(o=n[e].value)||void 0===o?void 0:o.clientHeight),console.log(null===(r=n[t])||void 0===r||null===(a=r.value)||void 0===a?void 0:a.clientHeight))})),Object(v["a"])(Object(v["a"])({},E),{},{navLinks:S,curHover:e,cards:n,root:t})}});n("8f59");xe.render=ve,xe.__scopeId="data-v-142f3892";var ye=xe,we={class:"pt-32"},ke={class:"flex flex-row md:w-5/6 mx-auto mt-20 flex-wrap"},He=Object(o["g"])("div",{class:"mx-auto text-2xl text-center mt-14 text-gray-900"},[Object(o["h"])(" And... much more on "),Object(o["g"])("a",{href:"https://github.com/shari09",class:"text-purple-dark hover:text-purple-darkest font-bold"},"GitHub!")],-1);function Se(e,t,n,r,a,c){var i=Object(o["t"])("Header"),s=Object(o["t"])("PhotoCard"),l=Object(o["t"])("WordCard");return Object(o["o"])(),Object(o["f"])("div",we,[Object(o["i"])(i,{header:e.header},null,8,["header"]),Object(o["g"])("div",ke,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.photoCards,(function(e,t){return Object(o["o"])(),Object(o["d"])(s,{key:e.name+t,info:e},null,8,["info"])})),128)),(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.wordCards,(function(e,t){return Object(o["o"])(),Object(o["d"])(l,{key:e.name+t,info:e,class:"mt-3"},null,8,["info"])})),128))]),He])}Object(o["q"])("data-v-242dc374");var Ie=["src"],Me={key:0,class:"absolute inset-0 w-full h-full px-2"},Pe={class:"bg-white bg-opacity-90 w-full h-full rounded-xl flex flex-col justify-center "},Ae={class:"text-black text-2xl text-center m-2"},Ee={class:"md:px-32 text-gray-900 font-light text-lg text-center my-8"},Le=["href"];function Ce(e,t,n,r,a,c){return Object(o["o"])(),Object(o["f"])("div",{class:"px-2 relative w-full md:w-1/2 h-[30em]",onMouseenter:t[0]||(t[0]=function(t){return e.hover=!0}),onMouseleave:t[1]||(t[1]=function(t){return e.hover=!1})},[Object(o["g"])("img",{src:e.info.photoPath,class:"object-cover rounded-xl w-full h-full"},null,8,Ie),Object(o["i"])(o["b"],{name:"fade",mode:"out-in"},{default:Object(o["w"])((function(){return[e.hover?(Object(o["o"])(),Object(o["f"])("div",Me,[Object(o["g"])("div",Pe,[Object(o["g"])("div",Ae,Object(o["u"])(e.info.name),1),Object(o["g"])("div",Ee,Object(o["u"])(e.info.description),1),Object(o["g"])("a",{class:"\n              text-xl text-center transition duration-500 ease-in-out\n              py-2 px-8 inline-block rounded-xl mx-auto bg-gray-700 text-white hover:scale-110",href:e.info.link}," VIEW ",8,Le)])])):Object(o["e"])("",!0)]})),_:1})],32)}Object(o["p"])();var Te=Object(o["j"])({name:"PhotoCard",props:{info:{type:Object,required:!0}},setup:function(){var e=Object(o["r"])(!1);return{hover:e}}});n("f461");Te.render=Ce,Te.__scopeId="data-v-242dc374";var qe=Te,We={class:"px-2 w-full md:w-1/3 h-full md:h-[30em]"},Be={class:"bg-white rounded-xl w-full h-full p-10 pb-6 flex flex-col"},De={class:"text-3xl text-gray-900"},_e={class:"font-thin text-sm text-gray-800"},Re={class:"list-inside overflow-y-auto list-disc mt-6 mb-10 font-thin text-gray-800"},Ne=["href"];function ze(e,t,n,r,a,c){return Object(o["o"])(),Object(o["f"])("div",We,[Object(o["g"])("div",Be,[Object(o["g"])("div",De,Object(o["u"])(e.info.name),1),Object(o["g"])("div",_e,Object(o["u"])(e.languages),1),Object(o["g"])("ul",Re,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.info.description,(function(t,n){return Object(o["o"])(),Object(o["f"])("li",{key:e.info.name+n},Object(o["u"])(t),1)})),128))]),Object(o["g"])("a",{class:"text-gray-700 text-xl text-center border border-gray-700 transition duration-500 ease-in-out\n          py-1 px-10 inline-block rounded-lg mr-auto hover:bg-gray-700 hover:text-white hover:scale-110 mt-auto",href:e.info.link}," VIEW ",8,Ne)])])}var Fe=Object(o["j"])({name:"WordCard",props:{info:{type:Object,required:!0}},setup:function(e){var t=e.info.languages.reduce((function(e,t,n){return 0===n?"".concat(e," ").concat(t):"".concat(e," · ").concat(t," ")}),"");return{languages:t}}});Fe.render=ze;var Je=Fe,Ue=Object(o["j"])({name:"Projects",components:{Header:H,PhotoCard:qe,WordCard:Je},setup:function(){return Object(v["a"])({},L)}});Ue.render=Se;var Ge=Ue;Object(o["q"])("data-v-0c69b9ca");var Qe=["id"],Ve={class:"flex flex-row mb-12"},Ye={ref:"wrapper",class:"mx-2 md:w-5/6 md:mx-auto flex flex-col md:flex-row flex-nowrap md:overflow-x-auto items-center justify-between no-scrollbar"};function Ke(e,t,n,r,a,c){var i=Object(o["t"])("Header"),s=Object(o["t"])("Testimony");return Object(o["o"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",{class:"h-[72px] pt-32",id:e.navLinks.testimonies.anchor,ref:"root"},null,8,Qe),Object(o["i"])(i,{header:e.header,class:"my-14"},null,8,["header"]),Object(o["g"])("div",Ve,[e.overflow?(Object(o["o"])(),Object(o["f"])("img",{key:0,src:"/assets/left-arrow.svg",class:"hidden md:block ml-auto hover:cursor-pointer",onClick:t[0]||(t[0]=function(t){return e.scroll(-e.quoteWidth)})})):Object(o["e"])("",!0),Object(o["g"])("div",Ye,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.testimonies,(function(e,t){return Object(o["o"])(),Object(o["d"])(s,{class:"m-4 md:m-10",testimony:e,key:"testimonies"+t,ref:"block"},null,8,["testimony"])})),128))],512),e.overflow?(Object(o["o"])(),Object(o["f"])("img",{key:1,src:"/assets/right-arrow.svg",class:"hidden md:block mr-auto hover:cursor-pointer",onClick:t[1]||(t[1]=function(t){return e.scroll(e.quoteWidth)})})):Object(o["e"])("",!0)])],64)}Object(o["p"])();var Xe={class:"bg-purple-dark text-white p-10 rounded-full flex flex-col align-center text-center flex-shrink-0 w-full md:w-96"},$e={class:"my-4"},Ze={class:"font-bold"};function et(e,t,n,r,a,c){return Object(o["o"])(),Object(o["f"])("div",Xe,[Object(o["g"])("div",$e,Object(o["u"])(e.testimony.quote),1),Object(o["g"])("div",Ze,Object(o["u"])(e.testimony.author),1)])}var tt=Object(o["j"])({name:"Quote",props:{testimony:{type:Object,required:!0}}});tt.render=et;var nt=tt,ot=Object(o["j"])({name:"Testimonies",components:{Header:H,Testimony:nt},setup:function(){var e=Object(o["r"])(null),t=Object(o["r"])(null),n=Object(o["r"])(0),r=Object(o["r"])(!1),a=Object(o["r"])(null),c=function(t){e.value&&e.value.scrollTo({left:e.value.scrollLeft+t,behavior:"smooth"})};return Object(o["m"])((function(){var t=function(){if(null!==e.value){var t=e.value.scrollWidth,n=e.value.clientWidth;t>n&&!r.value&&(r.value=!0,e.value.scrollTo({left:e.value.scrollLeft+(t-n)/2,behavior:"smooth"})),t<=n&&r.value&&(r.value=!1)}};t(),window.addEventListener("resize",t)})),Object(o["v"])(t,(function(e){e&&(n.value=e.$el.clientWidth)})),Object(v["a"])(Object(v["a"])({navLinks:S},C),{},{wrapper:e,scroll:c,block:t,quoteWidth:n,overflow:r,root:a})}});n("a7dd");ot.render=Ke,ot.__scopeId="data-v-0c69b9ca";var rt=ot,at={class:"bg-black h-72 mt-32 bg-opacity-[85%]"},ct={class:"w-5/6 mx-auto h-full text-gray-200 md:text-gray-300 flex flex-row items-center"},it={class:"mr-auto"},st=["href"],lt=["src"],ut={class:"ml-auto text-xl flex flex-col md:flex-row"},dt=["href"],bt={key:0,class:"hidden md:inline mx-2"},pt={class:"inline"};function ft(e,t,n,r,a,c){return Object(o["o"])(),Object(o["f"])("div",at,[Object(o["g"])("div",ct,[Object(o["g"])("div",it,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.socialMedia,(function(e){return Object(o["o"])(),Object(o["f"])("a",{key:"footer"+e.logoPath,href:e.link},[Object(o["g"])("img",{src:e.logoPath,class:"text-center px-auto px-4 h-auto w-22 inline-block \n            brightness-0 invert-[0.8] md:invert-[0.7] md:hover:invert"},null,8,lt)],8,st)})),128))]),Object(o["g"])("div",ut,[(Object(o["o"])(!0),Object(o["f"])(o["a"],null,Object(o["s"])(e.navLinks,(function(e,t){return Object(o["o"])(),Object(o["f"])("a",{key:"footer"+e.anchor,href:"#"+e.anchor,class:"md:hover:text-white"},["home"!==t?(Object(o["o"])(),Object(o["f"])("p",bt,"·")):Object(o["e"])("",!0),Object(o["g"])("p",pt,Object(o["u"])(e.display),1)],8,dt)})),128))])])])}var ht=Object(o["j"])({name:"Footer",setup:function(){return{navLinks:S,socialMedia:I}}});ht.render=ft;var jt=ht,mt=Object(o["j"])({name:"MainPage",components:{Home:Q,About:q,NavigationBar:re,Skills:de,Experience:ye,Projects:Ge,Testimonies:rt,Footer:jt},setup:function(){var e=Object(o["r"])({}),t=Object(o["r"])("home");return Object(o["m"])((function(){document.addEventListener("scroll",(function(){if(!Object.entries(e.value).some((function(e){var t=Object(i["a"])(e,2),n=t[1];return!n}))){var n=Object.entries(e.value).reduce((function(e,t){var n=Object(i["a"])(t,2),o=n[0],r=n[1].root,a=r.getBoundingClientRect().top;return a<=2&&a>=e.value?{section:o,value:a}:e}),{section:"home",value:-1e4}),o=n.section;t.value=o}}))})),{current:t,sections:e}}});mt.render=c;var Ot=mt,gt=Object(o["j"])({name:"App",components:{MainPage:Ot}});gt.render=a;var vt=gt;n("a766");Object(o["c"])(vt).mount("#app")},f461:function(e,t,n){"use strict";n("4614")}});
//# sourceMappingURL=app.5573eb79.js.map