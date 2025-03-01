"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[6280],{5408:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=r(4848),n=r(8453),a=(r(8597),r(8205));const o={sidebar_position:11},i=void 0,d={id:"documentation/series-methods/ser.str.upper()",title:"ser.str.upper()",description:"ser.str.upper()",source:"@site/docs/documentation/series-methods/ser.str.upper().md",sourceDirName:"documentation/series-methods",slug:"/documentation/series-methods/ser.str.upper()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.upper()",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docsSidebar",previous:{title:"ser.str.lower()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.lower()"},next:{title:"ser.str.capitalize()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.capitalize()"}},c={},l=[];function p(e){const s={code:"code",hr:"hr",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:"ser.str.upper()"}),"\n",(0,t.jsxs)("div",{className:"base",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Converts strings in the Series to uppercase."})}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{className:"term",children:"Returns:"}),(0,t.jsx)("dd",{children:"Returns a Series with each element in uppercase."}),(0,t.jsx)("dt",{className:"term",children:"Return Type:"}),(0,t.jsx)("dd",{children:"Series"})]})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"comment_ser = pets.get('Owner_Comment')\ncomment_ser\n"})}),"\n",(0,t.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"comment_ser.str.upper()\n"})}),"\n",(0,t.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      THERE ARE NO BAD DOGS, ONLY BAD OWNERS.","MY BEST BIRTHDAY PRESENT EVER!!!","****ALL YOU NEED IS LOVE AND A CAT.****","LOVE IS A WET NOSE AND A WAGGING TAIL.","BE THE PERSON YOUR DOG THINKS YOU ARE.","NO, THANK YOU!","NO, THANK YOU!","NO, THANK YOU!"]}'})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8597:(e,s,r)=>{r.d(s,{A:()=>n});r(6540);var t=r(4848);const n=e=>{let{data:s}=e,r=[],n=[],a="",o=[];if(s){const e=JSON.parse(s);r=e.columns||[],n=e.data||[],a=e.indexName||"Index",o=e.index||[]}return(0,t.jsx)("div",{className:"dataframe-container",children:(0,t.jsxs)("table",{className:"dataframe-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:a}),r.map(((e,s)=>(0,t.jsx)("th",{children:e},s)))]})}),(0,t.jsx)("tbody",{children:n.map(((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"index-value",children:o[s]}),e.map(((e,s)=>{return(0,t.jsx)("td",{children:(r=e,"boolean"==typeof r?r.toString().charAt(0).toUpperCase()+r.toString().slice(1):r)},s);var r}))]},s)))})]})})}},8205:(e,s,r)=>{r.d(s,{A:()=>n});r(6540);var t=r(4848);const n=e=>{let{data:s}=e,r=[],n=[],a="",o="";if(s)try{const e=JSON.parse(s);a=e.name||"",o=e.dtype||"Unknown type",r=e.index||[],n=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const i=n.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:i.map(((e,s)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:r[s]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",o]})]})}},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>i});var t=r(6540);const n={},a=t.createContext(n);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);