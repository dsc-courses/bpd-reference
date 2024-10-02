"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[7326],{6890:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(4848),r=n(8453),o=(n(8597),n(8205));const a={sidebar_position:1},i=void 0,c={id:"documentation/series-methods/ser.count()",title:"ser.count()",description:"ser.count()",source:"@site/docs/documentation/series-methods/ser.count().md",sourceDirName:"documentation/series-methods",slug:"/documentation/series-methods/ser.count()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.count()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/series-methods/ser.count().md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Series Methods",permalink:"/bpd-reference/docs/documentation/series-methods/"},next:{title:"ser.max()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.max()"}},d={},l=[];function h(e){const s={code:"code",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:"ser.count()"}),"\n",(0,t.jsx)("div",{className:"base",children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Returns the number of non-NA/null observations in the Series. Essentially the length of a Series, assuming that every row has an observation."})})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"weight_ser = pets.get('Weight')\r\nweight_ser\n"})}),"\n",(0,t.jsx)(o.A,{data:'{"name":"Weight","dtype":"float64", "index":[0,1,2,3,4,5,6,7],"data":[40.0,1.5,15.0,80.0,25.0,1.0,0.25,10.0]}'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"weight_ser.count()\n"})}),"\n",(0,t.jsx)(s.p,{children:"8"})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8597:(e,s,n)=>{n.d(s,{A:()=>r});n(6540);var t=n(4848);const r=e=>{let{data:s}=e,n=[],r=[],o="",a=[];if(s){const e=JSON.parse(s);n=e.columns||[],r=e.data||[],o=e.indexName||"Index",a=e.index||[]}return(0,t.jsx)("div",{className:"dataframe-container",children:(0,t.jsxs)("table",{className:"dataframe-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:o}),n.map(((e,s)=>(0,t.jsx)("th",{children:e},s)))]})}),(0,t.jsx)("tbody",{children:r.map(((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"index-value",children:a[s]}),e.map(((e,s)=>{return(0,t.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},s);var n}))]},s)))})]})})}},8205:(e,s,n)=>{n.d(s,{A:()=>r});n(6540);var t=n(4848);const r=e=>{let{data:s}=e,n=[],r=[],o="",a="";if(s)try{const e=JSON.parse(s);o=e.name||"",a=e.dtype||"Unknown type",n=e.index||[],r=e.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const i=r.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:i.map(((e,s)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:n[s]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",o,", dtype: ",a]})]})}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var t=n(6540);const r={},o=t.createContext(r);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);