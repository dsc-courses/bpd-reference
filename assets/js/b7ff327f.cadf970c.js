"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[6730],{8039:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=s(4848),t=s(8453),o=s(8597);s(8205);const r={sidebar_position:4},d=void 0,i={id:"documentation/building-organizing/df.drop()",title:"df.drop()",description:"df.drop(columns=columnname or [col1name, ..., colk_name])",source:"@site/docs/documentation/building-organizing/df.drop().md",sourceDirName:"documentation/building-organizing",slug:"/documentation/building-organizing/df.drop()",permalink:"/bpd-reference/docs/documentation/building-organizing/df.drop()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/building-organizing/df.drop().md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"df.assign()",permalink:"/bpd-reference/docs/documentation/building-organizing/df.assign()"},next:{title:"df.set_index()",permalink:"/bpd-reference/docs/documentation/building-organizing/df.set_index()"}},c={},l=[];function m(e){const n={code:"code",hr:"hr",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("code",{children:"df.drop(columns=column_name or [col_1_name, ..., col_k_name])"}),"\n",(0,a.jsxs)("div",{className:"base",children:[(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"Drops a single column, or every column in a list of column names."})}),(0,a.jsxs)("dl",{children:[(0,a.jsx)("dt",{className:"term",children:"Input:"}),(0,a.jsxs)("dd",{className:"parameter",children:["columns : ",(0,a.jsx)("em",{children:"string or list"})]}),(0,a.jsx)("dd",{className:"parameter-description",children:"Column name(s) to drop."}),(0,a.jsx)("dt",{className:"term",children:"Returns:"}),(0,a.jsx)("dd",{children:"df_without_cols - A new DataFrame without the column(s) specified in the method"}),(0,a.jsx)("dt",{className:"term",children:"Return Type:"}),(0,a.jsx)("dd",{children:"DataFrame"})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"pets = pets.assign(New_column_1=['this', 'is', 'a', 'new', 'column', 'I', 'assigned'], \r\n                  New_column_2=['this', 'is', 'another', 'new', 'column', 'I', 'assigned'])\r\npets\n"})}),"\n",(0,a.jsx)(o.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment","New_column_1","New_column_2"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners.","this","this"],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!","is","is"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****","a","another"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail.","new","new"],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are.","column","column"],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!","I","I"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!","assigned","assigned"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!",".","."]]}'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python3",children:"pets = pets.drop(columns=['New_column_1', 'New_column_2'])\r\npets\n"})}),"\n",(0,a.jsx)(o.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},8597:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var a=s(4848);const t=e=>{let{data:n}=e,s=[],t=[],o="",r=[];if(n){const e=JSON.parse(n);s=e.columns||[],t=e.data||[],o=e.indexName||"Index",r=e.index||[]}return(0,a.jsx)("div",{className:"dataframe-container",children:(0,a.jsxs)("table",{className:"dataframe-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:o}),s.map(((e,n)=>(0,a.jsx)("th",{children:e},n)))]})}),(0,a.jsx)("tbody",{children:t.map(((e,n)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"index-value",children:r[n]}),e.map(((e,n)=>{return(0,a.jsx)("td",{children:(s=e,"boolean"==typeof s?s.toString().charAt(0).toUpperCase()+s.toString().slice(1):s)},n);var s}))]},n)))})]})})}},8205:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var a=s(4848);const t=e=>{let{data:n}=e,s=[],t=[],o="",r="";if(n)try{const e=JSON.parse(n);o=e.name||"",r=e.dtype||"Unknown type",s=e.index||[],t=e.data||[]}catch(i){console.error("Error parsing data prop in SeriesComponent:",i)}const d=t.map((e=>JSON.stringify(e)));return(0,a.jsxs)("div",{className:"series-container",children:[(0,a.jsx)("ul",{className:"series-list",children:d.map(((e,n)=>(0,a.jsxs)("li",{className:"series-item",children:[(0,a.jsx)("span",{className:"series-index",children:s[n]}),(0,a.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},n)))}),(0,a.jsxs)("div",{className:"series-footer",children:["Name: ",o,", dtype: ",r]})]})}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var a=s(6540);const t={},o=a.createContext(t);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);