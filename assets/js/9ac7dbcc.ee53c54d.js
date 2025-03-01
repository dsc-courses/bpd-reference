"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[719],{7574:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var r=n(4848),t=n(8453),a=(n(8597),n(8205)),i=n(8951);const o={sidebar_position:4},c=void 0,d={id:"documentation/series-methods/ser.sum()",title:"ser.sum()",description:"ser.sum()",source:"@site/docs/documentation/series-methods/ser.sum().md",sourceDirName:"documentation/series-methods",slug:"/documentation/series-methods/ser.sum()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.sum()",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"ser.min()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.min()"},next:{title:"ser.mean()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.mean()"}},l={},m=[];function h(e){const s={code:"code",hr:"hr",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("code",{children:"ser.sum()"}),"\n",(0,r.jsx)("div",{className:"base",children:(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Returns the sum of the values in the Series."})})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"weight_ser = pets.get('Weight')\nweight_ser\n"})}),"\n",(0,r.jsx)(a.A,{data:'{"name":"Weight","dtype":"float64", "index":[0,1,2,3,4,5,6,7],"data":[40.0,1.5,15.0,80.0,25.0,1.0,0.25,10.0]}'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"weight_ser.sum()\n"})}),"\n",(0,r.jsx)(s.p,{children:"172.75"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(i.A,{})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8597:(e,s,n)=>{n.d(s,{A:()=>t});n(6540);var r=n(4848);const t=e=>{let{data:s}=e,n=[],t=[],a="",i=[];if(s){const e=JSON.parse(s);n=e.columns||[],t=e.data||[],a=e.indexName||"Index",i=e.index||[]}return(0,r.jsx)("div",{className:"dataframe-container",children:(0,r.jsxs)("table",{className:"dataframe-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:a}),n.map(((e,s)=>(0,r.jsx)("th",{children:e},s)))]})}),(0,r.jsx)("tbody",{children:t.map(((e,s)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"index-value",children:i[s]}),e.map(((e,s)=>{return(0,r.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},s);var n}))]},s)))})]})})}},8205:(e,s,n)=>{n.d(s,{A:()=>t});n(6540);var r=n(4848);const t=e=>{let{data:s}=e,n=[],t=[],a="",i="";if(s)try{const e=JSON.parse(s);a=e.name||"",i=e.dtype||"Unknown type",n=e.index||[],t=e.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const o=t.map((e=>JSON.stringify(e)));return(0,r.jsxs)("div",{className:"series-container",children:[(0,r.jsx)("ul",{className:"series-list",children:o.map(((e,s)=>(0,r.jsxs)("li",{className:"series-item",children:[(0,r.jsx)("span",{className:"series-index",children:n[s]}),(0,r.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,r.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",i]})]})}},8951:(e,s,n)=>{n.d(s,{A:()=>t});n(6540);var r=n(4848);const t=()=>(0,r.jsxs)("p",{style:{fontSize:"1.2rem"},children:["Problems or suggestions about this page?","  ",(0,r.jsx)("a",{href:"https://forms.gle/cPdGGZ17j3XeQ6PE8",target:"_blank",rel:"noopener noreferrer",children:"Fill out our feedback form."})]})},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var r=n(6540);const t={},a=r.createContext(t);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);