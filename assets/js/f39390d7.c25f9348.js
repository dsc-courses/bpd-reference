"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[3362],{3541:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(4848),s=t(8453),r=t(8597);t(8205);const i={sidebar_position:2},d=void 0,o={id:"documentation/building-organizing/bpd.read_csv()",title:"bpd.read_csv()",description:"bpd.read_csv(filepath)",source:"@site/docs/documentation/building-organizing/bpd.read_csv().md",sourceDirName:"documentation/building-organizing",slug:"/documentation/building-organizing/bpd.read_csv()",permalink:"/bpd-reference/docs/documentation/building-organizing/bpd.read_csv()",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"bpd.DataFrame()",permalink:"/bpd-reference/docs/documentation/building-organizing/bpd.DataFrame()"},next:{title:"df.assign()",permalink:"/bpd-reference/docs/documentation/building-organizing/df.assign()"}},c={},l=[];function p(e){const a={code:"code",hr:"hr",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("code",{children:"bpd.read_csv(filepath)"}),"\n",(0,n.jsxs)("div",{className:"base",children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Reads a CSV (comma-separated values) file into a DataFrame."})}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{className:"term",children:"Input:"}),(0,n.jsxs)("dd",{className:"parameter",children:["filepath : ",(0,n.jsx)("em",{children:"string, path object, file-like object."})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"This should be a path to a CSV, relative to the location of the notebook, or a URL that points to a CSV file. This must be a string, so don't forget to use quotes."}),(0,n.jsx)("dt",{className:"term",children:"Returns:"}),(0,n.jsx)("dd",{children:"A new DataFrame with the contents of the CSV file."}),(0,n.jsx)("dt",{className:"term",children:"Return Type:"}),(0,n.jsx)("dd",{children:"DataFrame"})]})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"pets = bpd.read_csv('pets.csv')\npets\n"})}),"\n",(0,n.jsx)(r.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8597:(e,a,t)=>{t.d(a,{A:()=>s});t(6540);var n=t(4848);const s=e=>{let{data:a}=e,t=[],s=[],r="",i=[];if(a){const e=JSON.parse(a);t=e.columns||[],s=e.data||[],r=e.indexName||"Index",i=e.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:r}),t.map(((e,a)=>(0,n.jsx)("th",{children:e},a)))]})}),(0,n.jsx)("tbody",{children:s.map(((e,a)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:i[a]}),e.map(((e,a)=>{return(0,n.jsx)("td",{children:(t=e,"boolean"==typeof t?t.toString().charAt(0).toUpperCase()+t.toString().slice(1):t)},a);var t}))]},a)))})]})})}},8205:(e,a,t)=>{t.d(a,{A:()=>s});t(6540);var n=t(4848);const s=e=>{let{data:a}=e,t=[],s=[],r="",i="";if(a)try{const e=JSON.parse(a);r=e.name||"",i=e.dtype||"Unknown type",t=e.index||[],s=e.data||[]}catch(o){console.error("Error parsing data prop in SeriesComponent:",o)}const d=s.map((e=>JSON.stringify(e)));return(0,n.jsxs)("div",{className:"series-container",children:[(0,n.jsx)("ul",{className:"series-list",children:d.map(((e,a)=>(0,n.jsxs)("li",{className:"series-item",children:[(0,n.jsx)("span",{className:"series-index",children:t[a]}),(0,n.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},a)))}),(0,n.jsxs)("div",{className:"series-footer",children:["Name: ",r,", dtype: ",i]})]})}},8453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>d});var n=t(6540);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);