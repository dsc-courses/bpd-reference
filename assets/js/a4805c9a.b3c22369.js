"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[7174],{1617:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var s=n(4848),t=n(8453),r=n(8597),o=(n(8205),n(8951));const d={sidebar_position:7},c=void 0,i={id:"documentation/accessing-data/df.take()",title:"df.take()",description:"df.take(indices)",source:"@site/docs/documentation/accessing-data/df.take().md",sourceDirName:"documentation/accessing-data",slug:"/documentation/accessing-data/df.take()",permalink:"/bpd-reference/docs/documentation/accessing-data/df.take()",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"df.columns",permalink:"/bpd-reference/docs/documentation/accessing-data/df.columns"},next:{title:"Series Methods",permalink:"/bpd-reference/docs/documentation/series-methods/"}},l={},h=[];function m(e){const a={code:"code",hr:"hr",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:"df.take(indices)"}),"\n",(0,s.jsxs)("div",{className:"base",children:[(0,s.jsx)("p",{children:(0,s.jsxs)("strong",{children:["Return the elements in the given ",(0,s.jsx)("em",{children:"positional"})," indices."]})}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{className:"term",children:"Input:"}),(0,s.jsxs)("dd",{className:"parameter",children:["indices : ",(0,s.jsx)("em",{children:"array"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"An array of ints indicating which positions to take."}),(0,s.jsx)("dt",{className:"term",children:"Returns:"}),(0,s.jsx)("dd",{children:"A DataFrame with only the indices specified."}),(0,s.jsx)("dt",{className:"term",children:"Return Type:"}),(0,s.jsx)("dd",{children:"DataFrame"})]})]}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"pets\n"})}),"\n",(0,s.jsx)(r.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"# take the top 5 rows of the DataFrame. (indices 0, 1, 2, 3, 4)\npets.take(np.arange(5))\n"})}),"\n",(0,s.jsx)(r.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."]]}'}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"# 0, 2, 4 indices.\npets.take(np.arange(0, 6, 2))\n"})}),"\n",(0,s.jsx)(r.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,2,4],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."]]}'}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(o.A,{})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8597:(e,a,n)=>{n.d(a,{A:()=>t});n(6540);var s=n(4848);const t=e=>{let{data:a}=e,n=[],t=[],r="",o=[];if(a){const e=JSON.parse(a);n=e.columns||[],t=e.data||[],r=e.indexName||"Index",o=e.index||[]}return(0,s.jsx)("div",{className:"dataframe-container",children:(0,s.jsxs)("table",{className:"dataframe-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:r}),n.map(((e,a)=>(0,s.jsx)("th",{children:e},a)))]})}),(0,s.jsx)("tbody",{children:t.map(((e,a)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"index-value",children:o[a]}),e.map(((e,a)=>{return(0,s.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},a);var n}))]},a)))})]})})}},8205:(e,a,n)=>{n.d(a,{A:()=>t});n(6540);var s=n(4848);const t=e=>{let{data:a}=e,n=[],t=[],r="",o="";if(a)try{const e=JSON.parse(a);r=e.name||"",o=e.dtype||"Unknown type",n=e.index||[],t=e.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const d=t.map((e=>JSON.stringify(e)));return(0,s.jsxs)("div",{className:"series-container",children:[(0,s.jsx)("ul",{className:"series-list",children:d.map(((e,a)=>(0,s.jsxs)("li",{className:"series-item",children:[(0,s.jsx)("span",{className:"series-index",children:n[a]}),(0,s.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},a)))}),(0,s.jsxs)("div",{className:"series-footer",children:["Name: ",r,", dtype: ",o]})]})}},8951:(e,a,n)=>{n.d(a,{A:()=>t});n(6540);var s=n(4848);const t=()=>(0,s.jsxs)("p",{style:{fontSize:"1.2rem"},children:["Problems or suggestions about this page?","  ",(0,s.jsx)("a",{href:"https://forms.gle/cPdGGZ17j3XeQ6PE8",target:"_blank",rel:"noopener noreferrer",children:"Fill out our feedback form."})]})},8453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>d});var s=n(6540);const t={},r=s.createContext(t);function o(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);