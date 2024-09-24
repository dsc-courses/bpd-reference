"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[3362],{3541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(4848),s=n(8453),r=n(8597);n(8205);const i={sidebar_position:2},d=void 0,o={id:"documentation/building-organizing/bpd.read_csv()",title:"bpd.read_csv()",description:"bpd.read_csv(filepath)",source:"@site/docs/documentation/building-organizing/bpd.read_csv().md",sourceDirName:"documentation/building-organizing",slug:"/documentation/building-organizing/bpd.read_csv()",permalink:"/bpd-reference/docs/documentation/building-organizing/bpd.read_csv()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/building-organizing/bpd.read_csv().md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"bpd.DataFrame()",permalink:"/bpd-reference/docs/documentation/building-organizing/bpd.DataFrame()"},next:{title:"df.assign()",permalink:"/bpd-reference/docs/documentation/building-organizing/df.assign()"}},c={},l=[];function p(e){const t={code:"code",hr:"hr",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("code",{children:"bpd.read_csv(filepath)"}),"\n",(0,a.jsxs)("div",{className:"base",children:[(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"Reads a CSV (comma-separated values) file into a DataFrame."})}),(0,a.jsxs)("dl",{children:[(0,a.jsx)("dt",{className:"term",children:"Input:"}),(0,a.jsxs)("dd",{className:"parameter",children:["filepath : ",(0,a.jsx)("em",{children:"string, path object, file-like object."})]}),(0,a.jsx)("dd",{className:"parameter-description",children:"This should give a path to the CSV relative to the location of the notebook, or a URL that points to a CSV file. This must be a string, so don't forget to use quotes."}),(0,a.jsx)("dt",{className:"term",children:"Returns:"}),(0,a.jsx)("dd",{children:"df - DataFrame with the contents of the CSV file."}),(0,a.jsx)("dt",{className:"term",children:"Return Type:"}),(0,a.jsx)("dd",{children:"DataFrame"})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"pets = bpd.read_csv('pets.csv')\npets\n"})}),"\n",(0,a.jsx)(r.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8597:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4848);const s=e=>{let{data:t}=e,n=[],s=[],r="",i=[];if(t){const e=JSON.parse(t);n=e.columns||[],s=e.data||[],r=e.indexName||"Index",i=e.index||[]}return(0,a.jsx)("div",{className:"dataframe-container",children:(0,a.jsxs)("table",{className:"dataframe-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:r}),n.map(((e,t)=>(0,a.jsx)("th",{children:e},t)))]})}),(0,a.jsx)("tbody",{children:s.map(((e,t)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"index-value",children:i[t]}),e.map(((e,t)=>{return(0,a.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},t);var n}))]},t)))})]})})}},8205:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4848);const s=e=>{let{data:t}=e,n=[],s=[],r="",i="";if(t)try{const e=JSON.parse(t);r=e.name||"",i=e.dtype||"Unknown type",n=e.index||[],s=e.data||[]}catch(o){console.error("Error parsing data prop in SeriesComponent:",o)}const d=s.map((e=>JSON.stringify(e)));return(0,a.jsxs)("div",{className:"series-container",children:[(0,a.jsx)("ul",{className:"series-list",children:d.map(((e,t)=>(0,a.jsxs)("li",{className:"series-item",children:[(0,a.jsx)("span",{className:"series-index",children:n[t]}),(0,a.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},t)))}),(0,a.jsxs)("div",{className:"series-footer",children:["Name: ",r,", dtype: ",i]})]})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var a=n(6540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);