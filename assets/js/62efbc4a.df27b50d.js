"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[4594],{7442:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=t(4848),r=t(8453),a=(t(8597),t(8205));const o={sidebar_position:13},i=void 0,d={id:"documentation/series-methods/ser.str.title()",title:"ser.str.title()",description:"ser.str.title()",source:"@site/docs/documentation/series-methods/ser.str.title().md",sourceDirName:"documentation/series-methods",slug:"/documentation/series-methods/ser.str.title()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.title()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/series-methods/ser.str.title().md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"docsSidebar",previous:{title:"ser.str.capitalize()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.capitalize()"},next:{title:"ser.str.replace()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.replace()"}},c={},l=[];function m(e){const s={code:"code",hr:"hr",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("code",{children:"ser.str.title()"}),"\n",(0,n.jsxs)("div",{className:"base",children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Converts strings in the Series to title case. Each beginning letter of a continuous string of letters will be uppercased."})}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{className:"term",children:"Returns:"}),(0,n.jsx)("dd",{children:"Returns a Series with each element in title case."}),(0,n.jsx)("dt",{className:"term",children:"Return Type:"}),(0,n.jsx)("dd",{children:"Series"})]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"comment_ser = pets.get('Owner_Comment')\r\ncomment_ser\n"})}),"\n",(0,n.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"comment_ser.str.title()\n"})}),"\n",(0,n.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There Are No Bad Dogs, Only Bad Owners.","My Best Birthday Present Ever!!!","****All You Need Is Love And A Cat.****","Love Is A Wet Nose And A Wagging Tail.","Be The Person Your Dog Thinks You Are.","No, Thank You!","No, Thank You!","No, Thank You!"]}'})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8597:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(4848);const r=e=>{let{data:s}=e,t=[],r=[],a="",o=[];if(s){const e=JSON.parse(s);t=e.columns||[],r=e.data||[],a=e.indexName||"Index",o=e.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:a}),t.map(((e,s)=>(0,n.jsx)("th",{children:e},s)))]})}),(0,n.jsx)("tbody",{children:r.map(((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:o[s]}),e.map(((e,s)=>{return(0,n.jsx)("td",{children:(t=e,"boolean"==typeof t?t.toString().charAt(0).toUpperCase()+t.toString().slice(1):t)},s);var t}))]},s)))})]})})}},8205:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(4848);const r=e=>{let{data:s}=e,t=[],r=[],a="",o="";if(s)try{const e=JSON.parse(s);a=e.name||"",o=e.dtype||"Unknown type",t=e.index||[],r=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const i=r.map((e=>JSON.stringify(e)));return(0,n.jsxs)("div",{className:"series-container",children:[(0,n.jsx)("ul",{className:"series-list",children:i.map(((e,s)=>(0,n.jsxs)("li",{className:"series-item",children:[(0,n.jsx)("span",{className:"series-index",children:t[s]}),(0,n.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,n.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",o]})]})}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(6540);const r={},a=n.createContext(r);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);