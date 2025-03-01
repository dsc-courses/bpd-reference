"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[4594],{7442:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=t(4848),n=t(8453),a=(t(8597),t(8205)),o=t(8951);const i={sidebar_position:13},d=void 0,c={id:"documentation/series-methods/ser.str.title()",title:"ser.str.title()",description:"ser.str.title()",source:"@site/docs/documentation/series-methods/ser.str.title().md",sourceDirName:"documentation/series-methods",slug:"/documentation/series-methods/ser.str.title()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.title()",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"docsSidebar",previous:{title:"ser.str.capitalize()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.capitalize()"},next:{title:"ser.str.replace()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.replace()"}},l={},h=[];function m(e){const s={code:"code",hr:"hr",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("code",{children:"ser.str.title()"}),"\n",(0,r.jsxs)("div",{className:"base",children:[(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Converts strings in the Series to title case. Each beginning letter of a continuous string of letters will be uppercased."})}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{className:"term",children:"Returns:"}),(0,r.jsx)("dd",{children:"Returns a Series with each element in title case."}),(0,r.jsx)("dt",{className:"term",children:"Return Type:"}),(0,r.jsx)("dd",{children:"Series"})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"comment_ser = pets.get('Owner_Comment')\ncomment_ser\n"})}),"\n",(0,r.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"comment_ser.str.title()\n"})}),"\n",(0,r.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There Are No Bad Dogs, Only Bad Owners.","My Best Birthday Present Ever!!!","****All You Need Is Love And A Cat.****","Love Is A Wet Nose And A Wagging Tail.","Be The Person Your Dog Thinks You Are.","No, Thank You!","No, Thank You!","No, Thank You!"]}'}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(o.A,{})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8597:(e,s,t)=>{t.d(s,{A:()=>n});t(6540);var r=t(4848);const n=e=>{let{data:s}=e,t=[],n=[],a="",o=[];if(s){const e=JSON.parse(s);t=e.columns||[],n=e.data||[],a=e.indexName||"Index",o=e.index||[]}return(0,r.jsx)("div",{className:"dataframe-container",children:(0,r.jsxs)("table",{className:"dataframe-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:a}),t.map(((e,s)=>(0,r.jsx)("th",{children:e},s)))]})}),(0,r.jsx)("tbody",{children:n.map(((e,s)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"index-value",children:o[s]}),e.map(((e,s)=>{return(0,r.jsx)("td",{children:(t=e,"boolean"==typeof t?t.toString().charAt(0).toUpperCase()+t.toString().slice(1):t)},s);var t}))]},s)))})]})})}},8205:(e,s,t)=>{t.d(s,{A:()=>n});t(6540);var r=t(4848);const n=e=>{let{data:s}=e,t=[],n=[],a="",o="";if(s)try{const e=JSON.parse(s);a=e.name||"",o=e.dtype||"Unknown type",t=e.index||[],n=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const i=n.map((e=>JSON.stringify(e)));return(0,r.jsxs)("div",{className:"series-container",children:[(0,r.jsx)("ul",{className:"series-list",children:i.map(((e,s)=>(0,r.jsxs)("li",{className:"series-item",children:[(0,r.jsx)("span",{className:"series-index",children:t[s]}),(0,r.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,r.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",o]})]})}},8951:(e,s,t)=>{t.d(s,{A:()=>n});t(6540);var r=t(4848);const n=()=>(0,r.jsxs)("p",{style:{fontSize:"1.2rem"},children:["Problems or suggestions about this page?","  ",(0,r.jsx)("a",{href:"https://forms.gle/cPdGGZ17j3XeQ6PE8",target:"_blank",rel:"noopener noreferrer",children:"Fill out our feedback form."})]})},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var r=t(6540);const n={},a=r.createContext(n);function o(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);