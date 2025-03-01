"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[719],{7574:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(4848),r=n(8453),a=(n(8597),n(8205));const i={sidebar_position:4},o=void 0,c={id:"documentation/series-methods/ser.sum()",title:"ser.sum()",description:"ser.sum()",source:"@site/docs/documentation/series-methods/ser.sum().md",sourceDirName:"documentation/series-methods",slug:"/documentation/series-methods/ser.sum()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.sum()",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"ser.min()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.min()"},next:{title:"ser.mean()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.mean()"}},d={},l=[];function m(e){const s={code:"code",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:"ser.sum()"}),"\n",(0,t.jsx)("div",{className:"base",children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Returns the sum of the values in the Series."})})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"weight_ser = pets.get('Weight')\nweight_ser\n"})}),"\n",(0,t.jsx)(a.A,{data:'{"name":"Weight","dtype":"float64", "index":[0,1,2,3,4,5,6,7],"data":[40.0,1.5,15.0,80.0,25.0,1.0,0.25,10.0]}'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"weight_ser.sum()\n"})}),"\n",(0,t.jsx)(s.p,{children:"172.75"})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8597:(e,s,n)=>{n.d(s,{A:()=>r});n(6540);var t=n(4848);const r=e=>{let{data:s}=e,n=[],r=[],a="",i=[];if(s){const e=JSON.parse(s);n=e.columns||[],r=e.data||[],a=e.indexName||"Index",i=e.index||[]}return(0,t.jsx)("div",{className:"dataframe-container",children:(0,t.jsxs)("table",{className:"dataframe-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:a}),n.map(((e,s)=>(0,t.jsx)("th",{children:e},s)))]})}),(0,t.jsx)("tbody",{children:r.map(((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"index-value",children:i[s]}),e.map(((e,s)=>{return(0,t.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},s);var n}))]},s)))})]})})}},8205:(e,s,n)=>{n.d(s,{A:()=>r});n(6540);var t=n(4848);const r=e=>{let{data:s}=e,n=[],r=[],a="",i="";if(s)try{const e=JSON.parse(s);a=e.name||"",i=e.dtype||"Unknown type",n=e.index||[],r=e.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const o=r.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:o.map(((e,s)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:n[s]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",i]})]})}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var t=n(6540);const r={},a=t.createContext(r);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);