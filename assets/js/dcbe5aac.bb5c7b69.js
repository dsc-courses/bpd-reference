"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[7214],{4433:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(4848),r=n(8453),i=(n(8597),n(8205));const o={sidebar_position:3},a=void 0,c={id:"documentation/series-methods/ser.min()",title:"ser.min()",description:"ser.min()",source:"@site/docs/documentation/series-methods/ser.min().md",sourceDirName:"documentation/series-methods",slug:"/documentation/series-methods/ser.min()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.min()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/series-methods/ser.min().md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"ser.max()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.max()"},next:{title:"ser.sum()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.sum()"}},d={},l=[];function m(e){const s={code:"code",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:"ser.min()"}),"\n",(0,t.jsxs)("div",{className:"base",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Returns the minimum of the values in the Series."})}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{className:"term",children:"Note:"}),(0,t.jsxs)("dd",{children:[" Not to be confused with python's own ",(0,t.jsx)(s.code,{children:"min"})," function. Learn more about it ",(0,t.jsx)("a",{href:"https://docs.python.org/3/library/functions.html#min",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]})]})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"weight_ser = pets.get('Weight')\nweight_ser\n"})}),"\n",(0,t.jsx)(i.A,{data:'{"name":"Weight","dtype":"float64", "index":[0,1,2,3,4,5,6,7],"data":[40.0,1.5,15.0,80.0,25.0,1.0,0.25,10.0]}'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"weight_ser.min()\n"})}),"\n",(0,t.jsx)(s.p,{children:"0.25"})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8597:(e,s,n)=>{n.d(s,{A:()=>r});n(6540);var t=n(4848);const r=e=>{let{data:s}=e,n=[],r=[],i="",o=[];if(s){const e=JSON.parse(s);n=e.columns||[],r=e.data||[],i=e.indexName||"Index",o=e.index||[]}return(0,t.jsx)("div",{className:"dataframe-container",children:(0,t.jsxs)("table",{className:"dataframe-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:i}),n.map(((e,s)=>(0,t.jsx)("th",{children:e},s)))]})}),(0,t.jsx)("tbody",{children:r.map(((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"index-value",children:o[s]}),e.map(((e,s)=>{return(0,t.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},s);var n}))]},s)))})]})})}},8205:(e,s,n)=>{n.d(s,{A:()=>r});n(6540);var t=n(4848);const r=e=>{let{data:s}=e,n=[],r=[],i="",o="";if(s)try{const e=JSON.parse(s);i=e.name||"",o=e.dtype||"Unknown type",n=e.index||[],r=e.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const a=r.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:a.map(((e,s)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:n[s]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",i,", dtype: ",o]})]})}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(6540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);