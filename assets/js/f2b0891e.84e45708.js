"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[614],{9358:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var t=a(4848),s=a(8453),r=a(8597);a(8205);const d={sidebar_position:6},o=void 0,i={id:"documentation/building-organizing/df.reset_index()",title:"df.reset_index()",description:"df.reset_index(drop=False)",source:"@site/docs/documentation/building-organizing/df.reset_index().md",sourceDirName:"documentation/building-organizing",slug:"/documentation/building-organizing/df.reset_index()",permalink:"/bpd-reference/docs/documentation/building-organizing/df.reset_index()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/building-organizing/df.reset_index().md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"df.set_index()",permalink:"/bpd-reference/docs/documentation/building-organizing/df.set_index()"},next:{title:"df.sort_values()",permalink:"/bpd-reference/docs/documentation/building-organizing/df.sort_values()"}},c={},l=[];function h(e){const n={code:"code",hr:"hr",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:"df.reset_index(drop=False)"}),"\n",(0,t.jsxs)("div",{className:"base",children:[(0,t.jsx)("p",{children:(0,t.jsxs)("strong",{children:["Resets the index of ",(0,t.jsx)(n.code,{children:"df"})," to the default one."]})}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{className:"term",children:"Input:"}),(0,t.jsxs)("dd",{className:"parameter",children:["drop : ",(0,t.jsx)("em",{children:"boolean, default False"})]}),(0,t.jsx)("dd",{className:"parameter-description",children:"If False, adds index as a column to the DataFrame. If True, doesn't add index as a column into the DataFrame."}),(0,t.jsx)("dt",{className:"term",children:"Returns:"}),(0,t.jsx)("dd",{children:"A new DataFrame with or without the column set as the index"}),(0,t.jsx)("dt",{className:"term",children:"Return Type:"}),(0,t.jsx)("dd",{children:"DataFrame"})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pets = pets.set_index('ID')\r\npets\n"})}),"\n",(0,t.jsx)(r.A,{data:'{"columns":["Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":["dog_001","cat_001","cat_002","dog_002","dog_003","ham_001","ham_002","cat_003"],"data":[["dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["hamster","black",1.0,3.0,false,"No, thank you!"],["hamster","golden",0.25,0.2,false,"No, thank you!"],["cat","black",10.0,0.0,true,"No, thank you!"]]}'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pets.reset_index()\n"})}),"\n",(0,t.jsx)(r.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("br",{})," ",(0,t.jsxs)(n.strong,{children:["Note that when ",(0,t.jsx)(n.code,{children:"drop=True"}),", the previous index will be dropped instead of becoming a new column in the DataFrame."]})," "]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pets.reset_index(drop=True)\n"})}),"\n",(0,t.jsx)(r.A,{data:'{"columns":["Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["hamster","black",1.0,3.0,false,"No, thank you!"],["hamster","golden",0.25,0.2,false,"No, thank you!"],["cat","black",10.0,0.0,true,"No, thank you!"]]}'})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8597:(e,n,a)=>{a.d(n,{A:()=>s});a(6540);var t=a(4848);const s=e=>{let{data:n}=e,a=[],s=[],r="",d=[];if(n){const e=JSON.parse(n);a=e.columns||[],s=e.data||[],r=e.indexName||"Index",d=e.index||[]}return(0,t.jsx)("div",{className:"dataframe-container",children:(0,t.jsxs)("table",{className:"dataframe-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:r}),a.map(((e,n)=>(0,t.jsx)("th",{children:e},n)))]})}),(0,t.jsx)("tbody",{children:s.map(((e,n)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"index-value",children:d[n]}),e.map(((e,n)=>{return(0,t.jsx)("td",{children:(a=e,"boolean"==typeof a?a.toString().charAt(0).toUpperCase()+a.toString().slice(1):a)},n);var a}))]},n)))})]})})}},8205:(e,n,a)=>{a.d(n,{A:()=>s});a(6540);var t=a(4848);const s=e=>{let{data:n}=e,a=[],s=[],r="",d="";if(n)try{const e=JSON.parse(n);r=e.name||"",d=e.dtype||"Unknown type",a=e.index||[],s=e.data||[]}catch(i){console.error("Error parsing data prop in SeriesComponent:",i)}const o=s.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:o.map(((e,n)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:a[n]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},n)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",r,", dtype: ",d]})]})}},8453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>o});var t=a(6540);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);