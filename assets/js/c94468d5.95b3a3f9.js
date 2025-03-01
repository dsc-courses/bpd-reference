"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[3484],{7486:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var s=n(4848),r=n(8453),t=n(8597),o=(n(8205),n(5158)),i=n(8951);const d={sidebar_position:8},l=void 0,c={id:"documentation/building-organizing/df.merge()",title:"df.merge()",description:"df.merge(right, on=column, lefton=leftcolumn, righton=rightcolumn, leftindex=False, rightindex=False)",source:"@site/docs/documentation/building-organizing/df.merge().md",sourceDirName:"documentation/building-organizing",slug:"/documentation/building-organizing/df.merge()",permalink:"/bpd-reference/docs/documentation/building-organizing/df.merge()",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"df.sort_values()",permalink:"/bpd-reference/docs/documentation/building-organizing/df.sort_values()"},next:{title:"Accessing Data",permalink:"/bpd-reference/docs/documentation/accessing-data/"}},h={},m=[];function u(e){const a={a:"a",code:"code",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:"df.merge(right, on=column, left_on=left_column, right_on=right_column, left_index=False, right_index=False)"}),"\n",(0,s.jsxs)("div",{className:"base",children:[(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Merges two DataFrames by specified columns or indexes."})}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{className:"term",children:"Input:"}),(0,s.jsxs)("dd",{className:"parameter",children:["right : ",(0,s.jsx)("em",{children:"DataFrame"})]}),(0,s.jsxs)("dd",{className:"parameter-description",children:["DataFrame to merge ",(0,s.jsx)(a.code,{children:"df"})," with."]}),(0,s.jsxs)("dd",{className:"parameter",children:["on : ",(0,s.jsx)("em",{children:"label or list"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"Column or index names to join on."}),(0,s.jsxs)("dd",{className:"parameter",children:["left_on : ",(0,s.jsx)("em",{children:"label, list, or array-like"})]}),(0,s.jsxs)("dd",{className:"parameter-description",children:["Column or index names to join on in ",(0,s.jsx)(a.code,{children:"df"}),"."]}),(0,s.jsxs)("dd",{className:"parameter",children:["right_on : ",(0,s.jsx)("em",{children:"label, list, or array-like"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"Column or index names to join on in the right DataFrame."}),(0,s.jsxs)("dd",{className:"parameter",children:["left_index : ",(0,s.jsx)("em",{children:"boolean, default False"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"Use index from left DataFrame as join key(s)."}),(0,s.jsxs)("dd",{className:"parameter",children:["right_index : ",(0,s.jsx)("em",{children:"boolean, default False"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"Use index from right DataFrame as join key(s)."}),(0,s.jsx)("dt",{className:"term",children:"Returns:"}),(0,s.jsx)("dd",{children:"A new DataFrame with the two DataFrames merged on the specified input combinations."}),(0,s.jsx)("dt",{className:"term",children:"Return Type:"}),(0,s.jsx)("dd",{children:"DataFrame"}),(0,s.jsx)("dt",{className:"term",children:"Note:"}),(0,s.jsx)("dd",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"The number of columns merged on the left and right DataFrames must be the same."}),(0,s.jsxs)("li",{children:[(0,s.jsx)("em",{children:"left_on"})," and ",(0,s.jsx)("em",{children:"left_index"})," cannot happen at the same time. Same as ",(0,s.jsx)("em",{children:"right_on"})," and ",(0,s.jsx)("em",{children:"right_index"}),"."]})]})})]})]}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.p,{children:["The diagrams below are two visualizations of how merge works albeit with different datasets from the main one we use here on bpd reference. For additional helpful visual guides, please visit the ",(0,s.jsx)(a.a,{href:"https://dsc10.com/diagrams/",children:"Diagrams"})," site."]}),"\n",(0,s.jsx)(o.A,{src:"https://docs.google.com/presentation/d/e/2PACX-1vQ8NBJswhPdgN73JKS6a7uK9S5MH0y_qhnhMv1wSusMJXwBcI1CTj2T20zJ5vVH45lVPt06gH1oTr7H/embed?start=true&loop=false&delayms=3000&rm=minimal",sourceLink:"https://docs.google.com/presentation/d/1d3NNWbMx-6oWawPmVHjdclX-ybqy5I8k4mCcqSW-Whw/edit?usp=sharing"}),"\n",(0,s.jsx)(o.A,{src:"https://docs.google.com/presentation/d/e/2PACX-1vTF-cjLbCZleyguK3MpX5xSnaSU4ICPeClvhuha8G8lHjT5XAd9RoSF4BDj-5Eao0CStO-5TOXhseaS/embed?start=true&loop=false&delayms=3000&rm=minimal",sourceLink:"https://docs.google.com/presentation/d/1sDTa08hqZnI5Mejs5b1C-aq2nToT6K3BRetldpAdBWc/edit?usp=sharing"}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"pets_info = bpd.DataFrame().assign(\n    Pet_ID=['dog_001', 'cat_001', 'cat_002', 'dog_002', 'dog_003', 'ham_001'],\n    Breed=['Labrador', 'Sphinx', 'Siamese', 'Chihuahua', 'Labrador', 'Roborovski'],\n    Owner=['Jason', 'Lauren', 'Cassidy', 'Bobby', 'Dhruv', 'Cassidy']\n)\npets_info\n"})}),"\n",(0,s.jsx)(t.A,{data:'{"columns":["Pet_ID","Breed","Owner"],"index":[0,1,2,3,4,5],"data":[["dog_001","Labrador","Jason"],["cat_001","Sphinx","Lauren"],["cat_002","Siamese","Cassidy"],["dog_002","Chihuahua","Bobby"],["dog_003","Labrador","Dhruv"],["ham_001","Roborovski","Cassidy"]]}'}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"pets.merge(pets_info, left_on='ID', right_on='Pet_ID')\n"})}),"\n",(0,s.jsx)(t.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment","Pet_ID","Breed","Owner"],"index":[0,1,2,3,4,5],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners.","dog_001","Labrador","Jason"],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!","cat_001","Sphinx","Lauren"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****","cat_002","Siamese","Cassidy"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail.","dog_002","Chihuahua","Bobby"],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are.","dog_003","Labrador","Dhruv"],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!","ham_001","Roborovski","Cassidy"]]}'}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"pets_info = pets_info.set_index('Pet_ID')\npets.merge(pets_info, left_on='ID', right_index=True)\n"})}),"\n",(0,s.jsx)(t.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment","Breed","Owner"],"index":[0,1,2,3,4,5],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners.","Labrador","Jason"],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!","Sphinx","Lauren"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****","Siamese","Cassidy"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail.","Chihuahua","Bobby"],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are.","Labrador","Dhruv"],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!","Roborovski","Cassidy"]]}'}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"pets_info2 = pets_info.assign(ID = pets_info.index)\npets.merge(pets_info2, on='ID')\n"})}),"\n",(0,s.jsx)(t.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment","Breed","Owner"],"index":[0,1,2,3,4,5],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners.","Labrador","Jason"],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!","Sphinx","Lauren"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****","Siamese","Cassidy"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail.","Chihuahua","Bobby"],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are.","Labrador","Dhruv"],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!","Roborovski","Cassidy"]]}'}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(i.A,{})]})}function g(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8597:(e,a,n)=>{n.d(a,{A:()=>r});n(6540);var s=n(4848);const r=e=>{let{data:a}=e,n=[],r=[],t="",o=[];if(a){const e=JSON.parse(a);n=e.columns||[],r=e.data||[],t=e.indexName||"Index",o=e.index||[]}return(0,s.jsx)("div",{className:"dataframe-container",children:(0,s.jsxs)("table",{className:"dataframe-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:t}),n.map(((e,a)=>(0,s.jsx)("th",{children:e},a)))]})}),(0,s.jsx)("tbody",{children:r.map(((e,a)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"index-value",children:o[a]}),e.map(((e,a)=>{return(0,s.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},a);var n}))]},a)))})]})})}},5158:(e,a,n)=>{n.d(a,{A:()=>t});var s=n(6540),r=n(4848);const t=function(e){let{src:a,sourceLink:n,aspectRatio:t=16/9}=e;const[o,i]=(0,s.useState)(0),[d,l]=(0,s.useState)(0),c=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=()=>{if(c.current){const e=c.current.offsetWidth;l(e/t)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:c,style:{width:"100%",position:"relative",maxWidth:"100%",backgroundColor:"white"},children:(0,r.jsx)("iframe",{src:a,style:{width:"100%",height:`${d}px`,border:"0",allowFullScreen:!0}},o)}),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:(0,r.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:"(Source)"})}),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,r.jsx)("button",{onClick:()=>{i((e=>e+1))},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",outline:"none",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",transition:"background-color 0.3s"},onMouseOver:e=>e.currentTarget.style.backgroundColor="#45a049",onMouseOut:e=>e.currentTarget.style.backgroundColor="#4CAF50",children:"Restart Diagram"})})]})}},8205:(e,a,n)=>{n.d(a,{A:()=>r});n(6540);var s=n(4848);const r=e=>{let{data:a}=e,n=[],r=[],t="",o="";if(a)try{const e=JSON.parse(a);t=e.name||"",o=e.dtype||"Unknown type",n=e.index||[],r=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const i=r.map((e=>JSON.stringify(e)));return(0,s.jsxs)("div",{className:"series-container",children:[(0,s.jsx)("ul",{className:"series-list",children:i.map(((e,a)=>(0,s.jsxs)("li",{className:"series-item",children:[(0,s.jsx)("span",{className:"series-index",children:n[a]}),(0,s.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},a)))}),(0,s.jsxs)("div",{className:"series-footer",children:["Name: ",t,", dtype: ",o]})]})}},8951:(e,a,n)=>{n.d(a,{A:()=>r});n(6540);var s=n(4848);const r=()=>(0,s.jsxs)("p",{style:{fontSize:"1.2rem"},children:["Problems or suggestions about this page?","  ",(0,s.jsx)("a",{href:"https://forms.gle/cPdGGZ17j3XeQ6PE8",target:"_blank",rel:"noopener noreferrer",children:"Fill out our feedback form."})]})},8453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var s=n(6540);const r={},t=s.createContext(r);function o(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);