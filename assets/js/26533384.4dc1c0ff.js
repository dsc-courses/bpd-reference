"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[7661],{5825:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=r(4848),t=r(8453),o=(r(8597),r(8205)),a=r(8951);const i={sidebar_position:10},d=void 0,c={id:"documentation/series-methods/ser.str.lower()",title:"ser.str.lower()",description:"ser.str.lower()",source:"@site/docs/documentation/series-methods/ser.str.lower().md",sourceDirName:"documentation/series-methods",slug:"/documentation/series-methods/ser.str.lower()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.lower()",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"ser.str.strip()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.strip()"},next:{title:"ser.str.upper()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.upper()"}},l={},m=[];function h(e){const s={code:"code",hr:"hr",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("code",{children:"ser.str.lower()"}),"\n",(0,n.jsxs)("div",{className:"base",children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Converts strings in the Series to lowercase."})}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{className:"term",children:"Returns:"}),(0,n.jsx)("dd",{children:"Returns a Series with each element in lowercase."}),(0,n.jsx)("dt",{className:"term",children:"Return Type:"}),(0,n.jsx)("dd",{children:"Series"})]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"comment_ser = pets.get('Owner_Comment')\ncomment_ser\n"})}),"\n",(0,n.jsx)(o.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"comment_ser.str.lower()\n"})}),"\n",(0,n.jsx)(o.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      there are no bad dogs, only bad owners.","my best birthday present ever!!!","****all you need is love and a cat.****","love is a wet nose and a wagging tail.","be the person your dog thinks you are.","no, thank you!","no, thank you!","no, thank you!"]}'}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(a.A,{})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8597:(e,s,r)=>{r.d(s,{A:()=>t});r(6540);var n=r(4848);const t=e=>{let{data:s}=e,r=[],t=[],o="",a=[];if(s){const e=JSON.parse(s);r=e.columns||[],t=e.data||[],o=e.indexName||"Index",a=e.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:o}),r.map(((e,s)=>(0,n.jsx)("th",{children:e},s)))]})}),(0,n.jsx)("tbody",{children:t.map(((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:a[s]}),e.map(((e,s)=>{return(0,n.jsx)("td",{children:(r=e,"boolean"==typeof r?r.toString().charAt(0).toUpperCase()+r.toString().slice(1):r)},s);var r}))]},s)))})]})})}},8205:(e,s,r)=>{r.d(s,{A:()=>t});r(6540);var n=r(4848);const t=e=>{let{data:s}=e,r=[],t=[],o="",a="";if(s)try{const e=JSON.parse(s);o=e.name||"",a=e.dtype||"Unknown type",r=e.index||[],t=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const i=t.map((e=>JSON.stringify(e)));return(0,n.jsxs)("div",{className:"series-container",children:[(0,n.jsx)("ul",{className:"series-list",children:i.map(((e,s)=>(0,n.jsxs)("li",{className:"series-item",children:[(0,n.jsx)("span",{className:"series-index",children:r[s]}),(0,n.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,n.jsxs)("div",{className:"series-footer",children:["Name: ",o,", dtype: ",a]})]})}},8951:(e,s,r)=>{r.d(s,{A:()=>t});r(6540);var n=r(4848);const t=()=>(0,n.jsxs)("p",{style:{fontSize:"1.2rem"},children:["Problems or suggestions about this page?","  ",(0,n.jsx)("a",{href:"https://forms.gle/cPdGGZ17j3XeQ6PE8",target:"_blank",rel:"noopener noreferrer",children:"Fill out our feedback form."})]})},8453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>i});var n=r(6540);const t={},o=n.createContext(t);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);