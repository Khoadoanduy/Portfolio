(()=>{var e={};e.id=409,e.ids=[409],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55315:e=>{"use strict";e.exports=require("path")},72543:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(47891),n=r(40412),a=r(50831),o=r.n(a),i=r(62628),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,67214,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,89925)),"/Users/doankhoa/Documents/Portfolio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,67214,23)),"next/dist/client/components/not-found-error"]}],c=[],h={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},41623:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,7368,23)),Promise.resolve().then(r.t.bind(r,50773,23)),Promise.resolve().then(r.t.bind(r,77766,23)),Promise.resolve().then(r.t.bind(r,67886,23)),Promise.resolve().then(r.t.bind(r,86668,23)),Promise.resolve().then(r.t.bind(r,96150,23)),Promise.resolve().then(r.t.bind(r,46490,23))},40106:(e,t,r)=>{Promise.resolve().then(r.bind(r,94779))},94779:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Footer:()=>u,Layout:()=>f,Navbar:()=>x,ProjectCard:()=>g,ResumeItem:()=>v,SkillCard:()=>b});var s=r(66987),n=r(46985),a=r.n(n),o=r(21836),i=r(37306),l=r(9735),d=r(50228),c=r(70293);let h=[{name:"Home",icon:i.Z,href:"/"},{name:"Contact",icon:l.Z,href:"/contact"}];function m({children:e,href:t}){return(0,s.jsx)("li",{children:(0,s.jsx)(o.default,{href:t||"",passHref:!0,legacyBehavior:!0,children:(0,s.jsx)("p",{className:"flex items-center gap-2 font-medium text-gray-900 cursor-pointer transition-colors duration-300 hover:bg-black hover:text-white px-3 py-2 rounded-md",children:e})})})}function x(){let[e,t]=a().useState(!1);return(0,s.jsxs)("nav",{className:"border-0 sticky top-0 z-50 bg-white w-full shadow-md",children:[(0,s.jsxs)("div",{className:"container mx-auto flex items-center justify-between py-4",children:[(0,s.jsx)("h1",{className:"text-lg font-bold text-blue-gray-900",children:"Kevin Doan"}),(0,s.jsx)("ul",{className:"ml-10 hidden items-center gap-8 lg:flex",children:h.map(({name:e,icon:t,href:r})=>(0,s.jsxs)(m,{href:r,children:[(0,s.jsx)(t,{className:"h-5 w-5"}),e]},e))}),(0,s.jsx)("button",{onClick:()=>t(e=>!e),className:"ml-auto inline-block lg:hidden text-gray-900 focus:outline-none",children:e?(0,s.jsx)(d.Z,{strokeWidth:2,className:"h-6 w-6"}):(0,s.jsx)(c.Z,{strokeWidth:2,className:"h-6 w-6"})})]}),e&&(0,s.jsx)("div",{className:"container mx-auto mt-3 border-t border-gray-200 px-2 pt-4 lg:hidden",children:(0,s.jsx)("ul",{className:"flex flex-col gap-4",children:h.map(({name:e,icon:t,href:r})=>(0,s.jsxs)(m,{href:r,children:[(0,s.jsx)(t,{className:"h-5 w-5"}),e]},e))})})]})}function u(){return(0,s.jsx)("footer",{className:"mt-10 px-8 pt-20"})}var p=r(78305);function f({children:e}){return(0,s.jsx)(p.ThemeProvider,{children:e})}var j=r(51938);function g({img:e,title:t,desc:r}){return(0,s.jsxs)("div",{className:"bg-transparent shadow-none",children:[(0,s.jsx)("div",{className:"mx-0 mt-0 mb-6 h-48 overflow-hidden rounded-md",children:(0,s.jsx)(j.default,{src:e,alt:t,width:768,height:768,className:"h-full w-full object-cover"})}),(0,s.jsxs)("div",{className:"p-0",children:[(0,s.jsx)("a",{href:"#",className:"text-blue-gray-900 text-xl font-semibold transition-colors hover:text-gray-800 mb-2 block",children:t}),(0,s.jsx)("p",{className:"mb-6 text-gray-500 font-normal",children:r}),(0,s.jsx)("button",{className:"bg-gray-500 text-white text-sm py-2 px-4 rounded hover:bg-gray-700",children:"See Details"})]})]})}function v({icon:e,children:t}){return(0,s.jsxs)("div",{className:"flex items-start gap-4",children:[(0,s.jsx)("div",{className:"bg-gray-500 h-12 w-12 flex items-center justify-center rounded-lg shrink-0",children:(0,s.jsx)(e,{className:"h-6 w-6 text-white",strokeWidth:2})}),(0,s.jsx)("p",{className:"w-full text-gray-500 font-normal",children:t})]})}function b({icon:e,title:t,children:r}){return(0,s.jsx)("div",{className:"bg-transparent shadow-none",children:(0,s.jsxs)("div",{className:"grid justify-center text-center p-4",children:[(0,s.jsx)("div",{className:"mx-auto mb-6 h-12 w-12 flex items-center justify-center rounded-full bg-gray-900 p-2.5 text-white shadow",children:(0,s.jsx)(e,{className:"h-6 w-6",strokeWidth:2})}),(0,s.jsx)("h5",{className:"text-xl font-semibold text-blue-gray-800 mb-2",children:t}),(0,s.jsx)("p",{className:"px-8 text-gray-500 font-normal",children:r})]})})}},90626:(e,t,r)=>{let{createProxy:s}=r(60407);e.exports=s("/Users/doankhoa/Documents/Portfolio/src/app/components/index.ts")},89925:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>i});var s=r(65757),n=r(48282),a=r.n(n);r(41869);var o=r(90626);let i={title:"Kevin Doan's portfolio",description:"Kevin's in the game"};function l({children:e}){return(0,s.jsxs)("html",{lang:"en",children:[(0,s.jsxs)("head",{children:[(0,s.jsx)("script",{defer:!0,"data-site":"YOUR_DOMAIN_HERE",src:"https://api.nepcha.com/js/nepcha-analytics.js"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon.png",type:"image/png"})]}),(0,s.jsx)("body",{className:a().className,children:(0,s.jsx)(o.Layout,{children:e})})]})}},41869:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[927,268],()=>r(72543));module.exports=s})();