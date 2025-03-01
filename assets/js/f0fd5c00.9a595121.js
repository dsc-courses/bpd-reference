"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[2087],{476:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(4848),a=r(8453),t=(r(8597),r(8205),r(8951));const o={sidebar_position:1},c=void 0,i={id:"documentation/arrays-and-numpy/np.count_nonzero()",title:"np.count_nonzero()",description:"np.count_nonzero(arr)",source:"@site/docs/documentation/arrays-and-numpy/np.count_nonzero().md",sourceDirName:"documentation/arrays-and-numpy",slug:"/documentation/arrays-and-numpy/np.count_nonzero()",permalink:"/bpd-reference/docs/documentation/arrays-and-numpy/np.count_nonzero()",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"np.arange()",permalink:"/bpd-reference/docs/documentation/arrays-and-numpy/np.arange()"},next:{title:"np.percentile()",permalink:"/bpd-reference/docs/documentation/arrays-and-numpy/np.percentile()"}},d={},l=[];function p(e){const n={code:"code",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:"np.count_nonzero(arr)"}),"\n",(0,s.jsxs)("div",{className:"base",children:[(0,s.jsx)("p",{children:(0,s.jsxs)("strong",{children:["Returns the number of non-zero entries in ",(0,s.jsx)(n.code,{children:"arr"}),". True counts as 1, False counts as 0."]})}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{className:"term",children:"Input:"}),(0,s.jsxs)("dd",{className:"parameter",children:["arr : ",(0,s.jsx)("em",{children:"numpy array"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"The array to count non-zero entries in."}),(0,s.jsx)("dt",{className:"term",children:"Returns:"}),(0,s.jsx)("dd",{children:"The number of non-zero entries in the array."}),(0,s.jsx)("dt",{className:"term",children:"Return Type:"}),(0,s.jsx)("dd",{children:"integer"})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"is_cat_arr = np.array(pets.get('Is_Cat'))\nis_cat_arr\n"})}),"\n",(0,s.jsx)(n.p,{children:"array([False,  True,  True, False, False, False, False,  True])"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"np.count_nonzero(is_cat_arr)\n"})}),"\n",(0,s.jsx)(n.p,{children:"3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"age_arr = np.array(pets.get('Age'))\nage_arr\n"})}),"\n",(0,s.jsx)(n.p,{children:"array([5. , 0.2, 9. , 2. , 0.5, 3. , 0.2, 0. ])"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"np.count_nonzero(age_arr)\n"})}),"\n",(0,s.jsx)(n.p,{children:"7"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(t.A,{})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8597:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var s=r(4848);const a=e=>{let{data:n}=e,r=[],a=[],t="",o=[];if(n){const e=JSON.parse(n);r=e.columns||[],a=e.data||[],t=e.indexName||"Index",o=e.index||[]}return(0,s.jsx)("div",{className:"dataframe-container",children:(0,s.jsxs)("table",{className:"dataframe-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:t}),r.map(((e,n)=>(0,s.jsx)("th",{children:e},n)))]})}),(0,s.jsx)("tbody",{children:a.map(((e,n)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"index-value",children:o[n]}),e.map(((e,n)=>{return(0,s.jsx)("td",{children:(r=e,"boolean"==typeof r?r.toString().charAt(0).toUpperCase()+r.toString().slice(1):r)},n);var r}))]},n)))})]})})}},8205:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var s=r(4848);const a=e=>{let{data:n}=e,r=[],a=[],t="",o="";if(n)try{const e=JSON.parse(n);t=e.name||"",o=e.dtype||"Unknown type",r=e.index||[],a=e.data||[]}catch(i){console.error("Error parsing data prop in SeriesComponent:",i)}const c=a.map((e=>JSON.stringify(e)));return(0,s.jsxs)("div",{className:"series-container",children:[(0,s.jsx)("ul",{className:"series-list",children:c.map(((e,n)=>(0,s.jsxs)("li",{className:"series-item",children:[(0,s.jsx)("span",{className:"series-index",children:r[n]}),(0,s.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},n)))}),(0,s.jsxs)("div",{className:"series-footer",children:["Name: ",t,", dtype: ",o]})]})}},8951:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var s=r(4848);const a=()=>(0,s.jsxs)("p",{style:{fontSize:"1.2rem"},children:["Problems or suggestions about this page?","  ",(0,s.jsx)("a",{href:"https://forms.gle/cPdGGZ17j3XeQ6PE8",target:"_blank",rel:"noopener noreferrer",children:"Fill out our feedback form."})]})},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(6540);const a={},t=s.createContext(a);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);