(()=>{var e={};e.id=327,e.ids=[327],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55315:e=>{"use strict";e.exports=require("path")},94412:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>n.a,__next_app__:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c});var r=t(47891),s=t(40412),l=t(50831),n=t.n(l),o=t(62628),i={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);t.d(a,i);let c=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,76173)),"/Users/doankhoa/Documents/Portfolio/src/app/contact/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,89925)),"/Users/doankhoa/Documents/Portfolio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,67214,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/doankhoa/Documents/Portfolio/src/app/contact/page.jsx"],m={require:t,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},41623:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,7368,23)),Promise.resolve().then(t.t.bind(t,50773,23)),Promise.resolve().then(t.t.bind(t,77766,23)),Promise.resolve().then(t.t.bind(t,67886,23)),Promise.resolve().then(t.t.bind(t,86668,23)),Promise.resolve().then(t.t.bind(t,96150,23)),Promise.resolve().then(t.t.bind(t,46490,23))},40106:(e,a,t)=>{Promise.resolve().then(t.bind(t,94779))},25705:(e,a,t)=>{Promise.resolve().then(t.bind(t,85967))},94779:(e,a,t)=>{"use strict";t.r(a),t.d(a,{Footer:()=>u,Layout:()=>g,Navbar:()=>x,ProjectCard:()=>v,ResumeItem:()=>j,SkillCard:()=>b});var r=t(66987),s=t(46985),l=t.n(s),n=t(21836),o=t(37306),i=t(9735),c=t(50228),d=t(70293);let m=[{name:"Home",icon:o.Z,href:"/"},{name:"Contact",icon:i.Z,href:"/contact"}];function h({children:e,href:a}){return(0,r.jsx)("li",{children:(0,r.jsx)(n.default,{href:a||"",passHref:!0,legacyBehavior:!0,children:(0,r.jsx)("p",{className:"flex items-center gap-2 font-medium text-gray-900 cursor-pointer transition-colors duration-300 hover:bg-black hover:text-white px-3 py-2 rounded-md",children:e})})})}function x(){let[e,a]=l().useState(!1);return(0,r.jsxs)("nav",{className:"border-0 sticky top-0 z-50 bg-white w-full shadow-md",children:[(0,r.jsxs)("div",{className:"container mx-auto flex items-center justify-between py-4",children:[(0,r.jsx)("h1",{className:"text-lg font-bold text-blue-gray-900",children:"Kevin Doan"}),(0,r.jsx)("ul",{className:"ml-10 hidden items-center gap-8 lg:flex",children:m.map(({name:e,icon:a,href:t})=>(0,r.jsxs)(h,{href:t,children:[(0,r.jsx)(a,{className:"h-5 w-5"}),e]},e))}),(0,r.jsx)("button",{onClick:()=>a(e=>!e),className:"ml-auto inline-block lg:hidden text-gray-900 focus:outline-none",children:e?(0,r.jsx)(c.Z,{strokeWidth:2,className:"h-6 w-6"}):(0,r.jsx)(d.Z,{strokeWidth:2,className:"h-6 w-6"})})]}),e&&(0,r.jsx)("div",{className:"container mx-auto mt-3 border-t border-gray-200 px-2 pt-4 lg:hidden",children:(0,r.jsx)("ul",{className:"flex flex-col gap-4",children:m.map(({name:e,icon:a,href:t})=>(0,r.jsxs)(h,{href:t,children:[(0,r.jsx)(a,{className:"h-5 w-5"}),e]},e))})})]})}function u(){return(0,r.jsx)("footer",{className:"mt-10 px-8 pt-20"})}var p=t(78305);function g({children:e}){return(0,r.jsx)(p.ThemeProvider,{children:e})}var f=t(51938);function v({img:e,title:a,desc:t}){return(0,r.jsxs)("div",{className:"bg-transparent shadow-none",children:[(0,r.jsx)("div",{className:"mx-0 mt-0 mb-6 h-48 overflow-hidden rounded-md",children:(0,r.jsx)(f.default,{src:e,alt:a,width:768,height:768,className:"h-full w-full object-cover"})}),(0,r.jsxs)("div",{className:"p-0",children:[(0,r.jsx)("a",{href:"#",className:"text-blue-gray-900 text-xl font-semibold transition-colors hover:text-gray-800 mb-2 block",children:a}),(0,r.jsx)("p",{className:"mb-6 text-gray-500 font-normal",children:t}),(0,r.jsx)("button",{className:"bg-gray-500 text-white text-sm py-2 px-4 rounded hover:bg-gray-700",children:"See Details"})]})]})}function j({icon:e,children:a}){return(0,r.jsxs)("div",{className:"flex items-start gap-4",children:[(0,r.jsx)("div",{className:"bg-gray-500 h-12 w-12 flex items-center justify-center rounded-lg shrink-0",children:(0,r.jsx)(e,{className:"h-6 w-6 text-white",strokeWidth:2})}),(0,r.jsx)("p",{className:"w-full text-gray-500 font-normal",children:a})]})}function b({icon:e,title:a,children:t}){return(0,r.jsx)("div",{className:"bg-transparent shadow-none",children:(0,r.jsxs)("div",{className:"grid justify-center text-center p-4",children:[(0,r.jsx)("div",{className:"mx-auto mb-6 h-12 w-12 flex items-center justify-center rounded-full bg-gray-900 p-2.5 text-white shadow",children:(0,r.jsx)(e,{className:"h-6 w-6",strokeWidth:2})}),(0,r.jsx)("h5",{className:"text-xl font-semibold text-blue-gray-800 mb-2",children:a}),(0,r.jsx)("p",{className:"px-8 text-gray-500 font-normal",children:t})]})})}},85967:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var r=t(66987),s=t(78305),l=t(46985);let n=l.forwardRef(function({title:e,titleId:a,...t},r){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{fillRule:"evenodd",d:"M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",clipRule:"evenodd"}))}),o=l.forwardRef(function({title:e,titleId:a,...t},r){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{d:"M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"}),l.createElement("path",{d:"M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"}))}),i=l.forwardRef(function({title:e,titleId:a,...t},r){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{fillRule:"evenodd",d:"M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z",clipRule:"evenodd"}))});function c(){return(0,r.jsxs)("section",{className:"px-8 py-16",children:[(0,r.jsxs)("div",{className:"container mx-auto mb-20 text-center",children:[(0,r.jsx)(s.Typography,{variant:"h1",color:"blue-gray",className:"mb-4",children:"Contact Us"}),(0,r.jsx)(s.Typography,{variant:"lead",className:"mx-auto w-full lg:w-5/12 !text-gray-500",children:"Ready to get started? Feel free to reach out through the contact form, and let's embark on a journey of innovation and success."})]}),(0,r.jsx)("div",{children:(0,r.jsx)(s.Card,{shadow:!0,className:"container mx-auto border border-gray/50",children:(0,r.jsxs)(s.CardBody,{className:"grid grid-cols-1 lg:grid-cols-7 md:gap-10",children:[(0,r.jsxs)("div",{className:"w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900",children:[(0,r.jsx)(s.Typography,{variant:"h4",color:"white",className:"mb-2",children:"Contact Information"}),(0,r.jsx)(s.Typography,{variant:"lead",className:"mx-auto mb-8 text-base !text-gray-500",children:"Fill up the form and our Team will get back to you within 24 hours."}),(0,r.jsxs)("div",{className:"flex gap-5",children:[(0,r.jsx)(n,{className:"h-6 w-6 text-white"}),(0,r.jsx)(s.Typography,{variant:"h6",color:"white",className:"mb-2",children:"+1(424) 535 3523"})]}),(0,r.jsxs)("div",{className:"flex my-2 gap-5",children:[(0,r.jsx)(o,{className:"h-6 w-6 text-white"}),(0,r.jsx)(s.Typography,{variant:"h6",color:"white",className:"mb-2",children:"hello@mail.com"})]}),(0,r.jsxs)("div",{className:"flex mb-10 gap-5",children:[(0,r.jsx)(i,{className:"h-6 w-6 text-white"}),(0,r.jsx)(s.Typography,{variant:"h6",color:"white",className:"mb-2",children:"Open Support Ticket"})]}),(0,r.jsxs)("div",{className:"flex items-center gap-5",children:[(0,r.jsx)(s.IconButton,{variant:"text",color:"white",children:(0,r.jsx)("i",{className:"fa-brands fa-facebook text-lg"})}),(0,r.jsx)(s.IconButton,{variant:"text",color:"white",children:(0,r.jsx)("i",{className:"fa-brands fa-instagram text-lg"})}),(0,r.jsx)(s.IconButton,{variant:"text",color:"white",children:(0,r.jsx)("i",{className:"fa-brands fa-github text-lg"})})]})]}),(0,r.jsx)("div",{className:"w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5",children:(0,r.jsxs)("form",{action:"#",children:[(0,r.jsxs)("div",{className:"mb-8 grid gap-4 lg:grid-cols-2",children:[(0,r.jsx)(s.Input,{color:"gray",size:"lg",variant:"static",label:"First Name",name:"first-name",placeholder:"eg. Lucas",containerProps:{className:"!min-w-full mb-3 md:mb-0"}}),(0,r.jsx)(s.Input,{color:"gray",size:"lg",variant:"static",label:"Last Name",name:"last-name",placeholder:"eg. Jones",containerProps:{className:"!min-w-full"}})]}),(0,r.jsx)(s.Input,{color:"gray",size:"lg",variant:"static",label:"Email",name:"first-name",placeholder:"eg. lucas@mail.com",containerProps:{className:"!min-w-full mb-8"}}),(0,r.jsx)(s.Typography,{variant:"lead",className:"!text-blue-gray-500 text-sm mb-2",children:"What are you interested in?"}),(0,r.jsxs)("div",{className:"-ml-3 mb-14 ",children:[(0,r.jsx)(s.Radio,{color:"gray",name:"type",label:"Design",defaultChecked:!0}),(0,r.jsx)(s.Radio,{color:"gray",name:"type",label:"Development"}),(0,r.jsx)(s.Radio,{color:"gray",name:"type",label:"Support"}),(0,r.jsx)(s.Radio,{color:"gray",name:"type",label:"Other"})]}),(0,r.jsx)(s.Textarea,{color:"gray",size:"lg",variant:"static",label:"Your Message",name:"first-name",containerProps:{className:"!min-w-full mb-8"}}),(0,r.jsx)("div",{className:"w-full flex justify-end",children:(0,r.jsx)(s.Button,{className:"w-full md:w-fit",color:"gray",size:"md",children:"Send message"})})]})})]})})})]})}},90626:(e,a,t)=>{let{createProxy:r}=t(60407);e.exports=r("/Users/doankhoa/Documents/Portfolio/src/app/components/index.ts")},76173:(e,a,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.r(a),t.d(a,{default:()=>e});var s=t(60407);let e=(await (0,s.createProxy)(String.raw`/Users/doankhoa/Documents/Portfolio/src/app/contact/page.jsx`)).default;r()}catch(e){r(e)}},1)},89925:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>i,metadata:()=>o});var r=t(65757),s=t(48282),l=t.n(s);t(41869);var n=t(90626);let o={title:"Kevin Doan's portfolio",description:"Kevin's in the game"};function i({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("script",{defer:!0,"data-site":"YOUR_DOMAIN_HERE",src:"https://api.nepcha.com/js/nepcha-analytics.js"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.png",type:"image/png"})]}),(0,r.jsx)("body",{className:l().className,children:(0,r.jsx)(n.Layout,{children:e})})]})}},41869:()=>{}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[927,268],()=>t(94412));module.exports=r})();