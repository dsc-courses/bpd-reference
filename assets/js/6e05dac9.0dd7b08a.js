"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[2284],{6802:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=s(4848),a=s(8453),r=s(8597);s(8205);const o={sidebar_position:6},c=void 0,d={id:"documentation/accessing-data/df.columns",title:"df.columns",description:"df.columns",source:"@site/docs/documentation/accessing-data/df.columns.md",sourceDirName:"documentation/accessing-data",slug:"/documentation/accessing-data/df.columns",permalink:"/bpd-reference/docs/documentation/accessing-data/df.columns",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"df.index",permalink:"/bpd-reference/docs/documentation/accessing-data/df.index"},next:{title:"df.take()",permalink:"/bpd-reference/docs/documentation/accessing-data/df.take()"}},i={},l=[];function p(e){const n={a:"a",code:"code",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:"df.columns"}),"\n",(0,t.jsxs)("div",{className:"base",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Returns the column labels of the DataFrame."})}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{className:"term",children:"Note:"}),(0,t.jsx)("dd",{children:(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:["The return type is bpd.Index. Use ",(0,t.jsx)(n.code,{children:"np.array()"})," to convert it to a numpy array."]})})})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pets\n"})}),"\n",(0,t.jsx)(r.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pets_cols = pets.columns\npets_cols\n"})}),"\n",(0,t.jsx)(n.p,{children:"Index(['ID', 'Species', 'Color', 'Weight', 'Age', 'Is_Cat', 'Owner_Comment'], dtype='object')"}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("br",{})," ",(0,t.jsxs)(n.strong,{children:["Convert index to a numpy array. Learn more about this in the ",(0,t.jsx)(n.a,{href:"https://dsc-courses.github.io/bpd-reference/docs/documentation/data%20format%20conversion/np.array()",children:"Data Format Conversion"})," section."]})," "]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"col_arr = np.array(col_lst)\ncol_arr\n"})}),"\n",(0,t.jsx)(n.p,{children:"array(['ID', 'Species', 'Color', 'Weight', 'Age', 'Is_Cat',\n'Owner_Comment'], dtype=object)"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8597:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var t=s(4848);const a=e=>{let{data:n}=e,s=[],a=[],r="",o=[];if(n){const e=JSON.parse(n);s=e.columns||[],a=e.data||[],r=e.indexName||"Index",o=e.index||[]}return(0,t.jsx)("div",{className:"dataframe-container",children:(0,t.jsxs)("table",{className:"dataframe-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:r}),s.map(((e,n)=>(0,t.jsx)("th",{children:e},n)))]})}),(0,t.jsx)("tbody",{children:a.map(((e,n)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"index-value",children:o[n]}),e.map(((e,n)=>{return(0,t.jsx)("td",{children:(s=e,"boolean"==typeof s?s.toString().charAt(0).toUpperCase()+s.toString().slice(1):s)},n);var s}))]},n)))})]})})}},8205:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var t=s(4848);const a=e=>{let{data:n}=e,s=[],a=[],r="",o="";if(n)try{const e=JSON.parse(n);r=e.name||"",o=e.dtype||"Unknown type",s=e.index||[],a=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const c=a.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:c.map(((e,n)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:s[n]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},n)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",r,", dtype: ",o]})]})}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(6540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);