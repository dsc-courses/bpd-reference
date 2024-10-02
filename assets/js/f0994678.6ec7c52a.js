"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[2808],{1478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=r(4848),n=r(8453);r(8597),r(8205);const a={sidebar_position:2},i=void 0,c={id:"documentation/data format conversion/list()",title:"list()",description:"list(arr)",source:"@site/docs/documentation/data format conversion/list().md",sourceDirName:"documentation/data format conversion",slug:"/documentation/data format conversion/list()",permalink:"/bpd-reference/docs/documentation/data format conversion/list()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/data format conversion/list().md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"np.array()",permalink:"/bpd-reference/docs/documentation/data format conversion/np.array()"},next:{title:"Querying",permalink:"/bpd-reference/docs/category/querying"}},o={},d=[];function l(e){const t={code:"code",hr:"hr",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:"list(arr)"}),"\n",(0,s.jsxs)("div",{className:"base",children:[(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Casts an array into a list."})}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{className:"term",children:"Input:"}),(0,s.jsxs)("dd",{className:"parameter",children:["arr : ",(0,s.jsx)("em",{children:"array"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"Array that you want to cast into a list."}),(0,s.jsx)("dt",{className:"term",children:"Returns:"}),(0,s.jsx)("dd",{children:"new_list - A new list that contains every element from the array, in list form."}),(0,s.jsx)("dt",{className:"term",children:"Return Type:"}),(0,s.jsx)("dd",{children:"List"})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'pets_arr = np.array(["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"])\r\npet_arr\n'})}),"\n",(0,s.jsx)(t.p,{children:'array(["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"])'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"pet_list = list(pet_arr)\r\npet_list\n"})}),"\n",(0,s.jsx)(t.p,{children:'["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"]'})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8597:(e,t,r)=>{r.d(t,{A:()=>n});r(6540);var s=r(4848);const n=e=>{let{data:t}=e,r=[],n=[],a="",i=[];if(t){const e=JSON.parse(t);r=e.columns||[],n=e.data||[],a=e.indexName||"Index",i=e.index||[]}return(0,s.jsx)("div",{className:"dataframe-container",children:(0,s.jsxs)("table",{className:"dataframe-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:a}),r.map(((e,t)=>(0,s.jsx)("th",{children:e},t)))]})}),(0,s.jsx)("tbody",{children:n.map(((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"index-value",children:i[t]}),e.map(((e,t)=>{return(0,s.jsx)("td",{children:(r=e,"boolean"==typeof r?r.toString().charAt(0).toUpperCase()+r.toString().slice(1):r)},t);var r}))]},t)))})]})})}},8205:(e,t,r)=>{r.d(t,{A:()=>n});r(6540);var s=r(4848);const n=e=>{let{data:t}=e,r=[],n=[],a="",i="";if(t)try{const e=JSON.parse(t);a=e.name||"",i=e.dtype||"Unknown type",r=e.index||[],n=e.data||[]}catch(o){console.error("Error parsing data prop in SeriesComponent:",o)}const c=n.map((e=>JSON.stringify(e)));return(0,s.jsxs)("div",{className:"series-container",children:[(0,s.jsx)("ul",{className:"series-list",children:c.map(((e,t)=>(0,s.jsxs)("li",{className:"series-item",children:[(0,s.jsx)("span",{className:"series-index",children:r[t]}),(0,s.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},t)))}),(0,s.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",i]})]})}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var s=r(6540);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);