"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[2917],{2760:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(4848),r=t(8453),a=t(8597),i=(t(8205),t(8951));const o={sidebar_position:8},d=void 0,c={id:"documentation/for-loops/for-loops",title:"for-loops",description:"for \\ in \\:",source:"@site/docs/documentation/for-loops/for-loops.md",sourceDirName:"documentation/for-loops",slug:"/documentation/for-loops/",permalink:"/bpd-reference/docs/documentation/for-loops/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Line Plot",permalink:"/bpd-reference/docs/documentation/plotting/Line Plot"},next:{title:"if-statements",permalink:"/bpd-reference/docs/category/if-statements"}},l={},p=[];function h(e){const s={code:"code",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsxs)("code",{children:["for <loop variable> in <sequence>: ",(0,n.jsx)("br",{})," "]}),"\n\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,n.jsx)("code",{children:" <loop body> "})]}),"\n",(0,n.jsxs)("div",{className:"base",children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Performs the loop body for every element of the sequence."})}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{className:"term",children:"Components:"}),(0,n.jsxs)("dd",{className:"parameter",children:["loop variable : ",(0,n.jsx)("em",{children:"variable"})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"Variable that will take on the value of every element in the\nsequence at some point in the loop. Any valid variable is acceptable."}),(0,n.jsxs)("dd",{className:"parameter",children:["sequence : ",(0,n.jsx)("em",{children:"iterable object"})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"e.g. Arrays, Lists, Strings"}),(0,n.jsxs)("dd",{className:"parameter",children:["loop body : ",(0,n.jsx)("em",{})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"Code to be executed for every element in sequence. "}),(0,n.jsx)("dt",{className:"term",children:"Results:"}),(0,n.jsx)("dd",{children:"Output of loop body"})]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"pets\n"})}),"\n",(0,n.jsx)(a.A,{data:'{"columns":["ID","Species","Age","Weight"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog",5.0,40.0],["cat_001","cat",0.2,1.5],["cat_002","cat",9.0,15.0],["dog_002","dog",2.0,80.0],["dog_003","dog",0.5,25.0],["ham_001","hamster",3.0,1.0],["ham_002","hamster",0.2,0.25],["cat_003","cat",0.0,10.0]]}'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"for i in np.arange(pets.shape[0]):\n    chosen_pet = pets.iloc[i]\n    pet_id = chosen_pet.get('ID')\n    species = chosen_pet.get('Species')\n    age = chosen_pet.get('Age')\n    weight = chosen_pet.get('Weight')\n    print(\"This is a \" + species + \" with pet id \" + str(pet_id) +', age ' + str(age) +', and weight '+str(weight))\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This is a dog with pet id dog_001, age 5.0, and weight 40.0 ",(0,n.jsx)("br",{}),"\nThis is a cat with pet id cat_001, age 0.2, and weight 1.5 ",(0,n.jsx)("br",{}),"\nThis is a cat with pet id cat_002, age 9.0, and weight 15.0 ",(0,n.jsx)("br",{}),"\nThis is a dog with pet id dog_002, age 2.0, and weight 80.0 ",(0,n.jsx)("br",{}),"\nThis is a dog with pet id dog_003, age 0.5, and weight 25.0 ",(0,n.jsx)("br",{}),"\nThis is a hamster with pet id ham_001, age 3.0, and weight 1.0 ",(0,n.jsx)("br",{}),"\nThis is a hamster with pet id ham_002, age 0.2, and weight 0.25 ",(0,n.jsx)("br",{}),"\nThis is a cat with pet id cat_003, age 0.0, and weight 10.0"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(i.A,{})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8597:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(4848);const r=e=>{let{data:s}=e,t=[],r=[],a="",i=[];if(s){const e=JSON.parse(s);t=e.columns||[],r=e.data||[],a=e.indexName||"Index",i=e.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:a}),t.map(((e,s)=>(0,n.jsx)("th",{children:e},s)))]})}),(0,n.jsx)("tbody",{children:r.map(((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:i[s]}),e.map(((e,s)=>{return(0,n.jsx)("td",{children:(t=e,"boolean"==typeof t?t.toString().charAt(0).toUpperCase()+t.toString().slice(1):t)},s);var t}))]},s)))})]})})}},8205:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(4848);const r=e=>{let{data:s}=e,t=[],r=[],a="",i="";if(s)try{const e=JSON.parse(s);a=e.name||"",i=e.dtype||"Unknown type",t=e.index||[],r=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const o=r.map((e=>JSON.stringify(e)));return(0,n.jsxs)("div",{className:"series-container",children:[(0,n.jsx)("ul",{className:"series-list",children:o.map(((e,s)=>(0,n.jsxs)("li",{className:"series-item",children:[(0,n.jsx)("span",{className:"series-index",children:t[s]}),(0,n.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,n.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",i]})]})}},8951:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(4848);const r=()=>(0,n.jsxs)("p",{style:{fontSize:"1.2rem"},children:["Problems or suggestions about this page?","  ",(0,n.jsx)("a",{href:"https://forms.gle/cPdGGZ17j3XeQ6PE8",target:"_blank",rel:"noopener noreferrer",children:"Fill out our feedback form."})]})},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var n=t(6540);const r={},a=n.createContext(r);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);