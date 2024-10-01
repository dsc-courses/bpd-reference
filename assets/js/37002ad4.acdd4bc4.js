"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[3870],{7147:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=s(4848),t=s(8453),a=s(8597);s(8205);const o={sidebar_position:7},c=void 0,i={id:"documentation/Grouping/groupby",title:"groupby",description:"df.groupby(columnname)ordf.groupby([columnnames])",source:"@site/docs/documentation/Grouping/groupby.md",sourceDirName:"documentation/Grouping",slug:"/documentation/Grouping/groupby",permalink:"/bpd-reference/docs/documentation/Grouping/groupby",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/Grouping/groupby.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Applying Functions",permalink:"/bpd-reference/docs/documentation/Functions/Applying Functions"},next:{title:"count()",permalink:"/bpd-reference/docs/documentation/Grouping/aggregation/count()"}},d={},l=[];function m(e){const n={a:"a",code:"code",hr:"hr",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("code",{children:"df.groupby(column_name)"}),"\n",(0,r.jsx)("strong",{children:"or"}),"\n",(0,r.jsx)("code",{children:"df.groupby([column_names])"}),"\n",(0,r.jsxs)("div",{className:"base",children:[(0,r.jsxs)("p",{children:[(0,r.jsxs)("strong",{children:["Groups all DataFrame rows with the same value in ",(0,r.jsx)("em",{children:"column_name"})," or list of ",(0,r.jsx)("em",{children:"column_names"})]}),"."]}),(0,r.jsx)("p",{children:"A groupby operation groups large amounts of data based on the column name(s)."}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{className:"term",children:"Input:"}),(0,r.jsxs)("dd",{className:"parameter",children:["column_name : ",(0,r.jsx)("em",{children:"string"})]}),(0,r.jsx)("dd",{className:"parameter-description",children:"Groups by the column specified. The column becomes the index."}),(0,r.jsxs)("dd",{className:"parameter",children:["column_names : ",(0,r.jsx)("em",{children:"list"})," (of strings)"]}),(0,r.jsx)("dd",{className:"parameter-description",children:"Groups by all listed columns, starting with the first one in the list. The columns become the indices."}),(0,r.jsx)("dt",{className:"term",children:"Returns:"}),(0,r.jsx)("dd",{children:"A new DataFrame with the parameter column(s) as the index and all other columns grouped."}),(0,r.jsx)("dt",{className:"term",children:"Return Type:"}),(0,r.jsx)("dd",{children:"DataFrame"}),(0,r.jsx)("dt",{className:"term",children:"Note:"}),(0,r.jsxs)("dd",{children:["A ",(0,r.jsx)(n.code,{children:"groupby()"})," is usually followed by an ",(0,r.jsx)("strong",{children:"aggregate method"}),". A ",(0,r.jsx)(n.code,{children:"groupby()"})," ",(0,r.jsx)("strong",{children:"without"})," an aggregate method will return a ",(0,r.jsx)("strong",{children:"DataFrameGroupBy object"})," rather than a DataFrame."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)("small-title",{children:(0,r.jsx)("strong",{children:"Aggregate Methods"})}),(0,r.jsx)("br",{}),"\r\n",(0,r.jsx)(n.a,{href:"aggregation/mean()",children:(0,r.jsx)("code",{children:".mean()"})})," \xa0 ",(0,r.jsx)(n.a,{href:"aggregation/median()",children:(0,r.jsx)("code",{children:".median()"})})," \xa0 ",(0,r.jsx)(n.a,{href:"aggregation/count()",children:(0,r.jsx)("code",{children:".count()"})})," \xa0 ",(0,r.jsx)(n.a,{href:"aggregation/max()",children:(0,r.jsx)("code",{children:".max()"})})," \xa0 ",(0,r.jsx)(n.a,{href:"aggregation/min()",children:(0,r.jsx)("code",{children:".min()"})})," \xa0 ",(0,r.jsx)(n.a,{href:"aggregation/sum()",children:(0,r.jsx)("code",{children:".sum()"})})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"pets\n"})}),"\n",(0,r.jsx)(a.A,{data:'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'}),"\n",(0,r.jsx)("p",{}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("code",{children:".groupby()"}),(0,r.jsx)("strong",{children:" with one column"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"pets.groupby('Species').count()\n"})}),"\n",(0,r.jsx)(a.A,{data:'{"columns":["ID","Color","Weight","Age"],"index":["cat","dog","hamster"],"data":[[2,2,2,2],[3,3,3,3],[2,2,2,2]]}'}),"\n",(0,r.jsx)("p",{}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("code",{children:".groupby()"}),(0,r.jsx)("strong",{children:" with multiple columns"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"pets.groupby(['Species', 'Color']).count().reset_index()\n"})}),"\n",(0,r.jsx)(a.A,{data:'{"columns":["Species","Color","ID","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5],"data":[["cat","black",2,2,2,2,2],["cat","golden",1,1,1,1,1],["dog","black",2,2,2,2,2],["dog","white",1,1,1,1,1],["hamster","black",1,1,1,1,1],["hamster","golden",1,1,1,1,1]]}'})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8597:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var r=s(4848);const t=e=>{let{data:n}=e,s=[],t=[],a="",o=[];if(n){const e=JSON.parse(n);s=e.columns||[],t=e.data||[],a=e.indexName||"Index",o=e.index||[]}return(0,r.jsx)("div",{className:"dataframe-container",children:(0,r.jsxs)("table",{className:"dataframe-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:a}),s.map(((e,n)=>(0,r.jsx)("th",{children:e},n)))]})}),(0,r.jsx)("tbody",{children:t.map(((e,n)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"index-value",children:o[n]}),e.map(((e,n)=>{return(0,r.jsx)("td",{children:(s=e,"boolean"==typeof s?s.toString().charAt(0).toUpperCase()+s.toString().slice(1):s)},n);var s}))]},n)))})]})})}},8205:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var r=s(4848);const t=e=>{let{data:n}=e,s=[],t=[],a="",o="";if(n)try{const e=JSON.parse(n);a=e.name||"",o=e.dtype||"Unknown type",s=e.index||[],t=e.data||[]}catch(i){console.error("Error parsing data prop in SeriesComponent:",i)}const c=t.map((e=>JSON.stringify(e)));return(0,r.jsxs)("div",{className:"series-container",children:[(0,r.jsx)("ul",{className:"series-list",children:c.map(((e,n)=>(0,r.jsxs)("li",{className:"series-item",children:[(0,r.jsx)("span",{className:"series-index",children:s[n]}),(0,r.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},n)))}),(0,r.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",o]})]})}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(6540);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);