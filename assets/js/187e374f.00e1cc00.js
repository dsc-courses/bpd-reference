"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[6264],{340:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=a(4848),r=a(8453);a(8597),a(8205);const t={sidebar_position:3,sidebar_label:"Random Multinomial",title:"Random Multinomial"},i=void 0,l={id:"statistical-inference/random sampling/np.random.multinomial()",title:"Random Multinomial",description:"np.random.multinomial(n, [p0, p1, p_2, ...])",source:"@site/docs/statistical-inference/random sampling/np.random.multinomial().md",sourceDirName:"statistical-inference/random sampling",slug:"/statistical-inference/random sampling/np.random.multinomial()",permalink:"/bpd-reference/docs/statistical-inference/random sampling/np.random.multinomial()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/statistical-inference/random sampling/np.random.multinomial().md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Random Multinomial",title:"Random Multinomial"},sidebar:"statsSidebar",previous:{title:"Random Choice",permalink:"/bpd-reference/docs/statistical-inference/random sampling/np.random.choice()"},next:{title:"Random Permutation",permalink:"/bpd-reference/docs/statistical-inference/random sampling/np.random.permutation()"}},c={},o=[];function d(e){const n={code:"code",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:"np.random.multinomial(n, [p_0, p_1, p_2, ...])"}),"\n",(0,s.jsxs)("div",{className:"base",children:[(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Determines the number of times each outcome occurs based on the given probabilities."})}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{className:"term",children:"Input:"}),(0,s.jsxs)("dd",{className:"parameter",children:["n : ",(0,s.jsx)("em",{children:"integer"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"Number of random samples to draw."}),(0,s.jsxs)("dd",{className:"parameter",children:["[p_0, p_1, p_2, ...] : ",(0,s.jsx)("em",{children:"list or array of floats"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"Probabilities for each outcome."}),(0,s.jsx)("dt",{className:"term",children:"Returns:"}),(0,s.jsx)("dd",{children:"Number of times each outcome is drawn"}),(0,s.jsx)("dt",{className:"term",children:"Return Type:"}),(0,s.jsx)("dd",{children:"array of integers"}),(0,s.jsx)("dt",{className:"term",children:"Note:"}),(0,s.jsx)("dd",{children:(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["Each element in ",(0,s.jsx)(n.code,{children:"[p_0, p_1, p_2, ...]"})," must be between 0 and 1. The elements in ",(0,s.jsx)(n.code,{children:"[p_0, p_1, p_2, ...]"})," must sum to 1."]})})})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"np.random.multinomial(100, [0.2, 0.5, 0.3])\n"})}),"\n",(0,s.jsx)(n.p,{children:"array([19, 54, 27])"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"np.random.multinomial(100, [0.1, 0.1, 0.8]) \n"})}),"\n",(0,s.jsx)(n.p,{children:"array([12,  8, 80])"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"#use np.random.choice to achieve the function of np.random.multinomial\ndef manual_multinomial(n, p):\n    values = np.arange(len(p))\n    choices = np.random.choice(values, size=n, replace=True, p=p)\n    value_counts = np.array([])\n    for value in values:\n        value_count = np.count_nonzero(choices == value)\n        value_counts = np.append(value_counts, value_count)\n    return value_counts.astype(int)\n\nmanual_multinomial(100, [0.1, 0.1, 0.8])\n"})}),"\n",(0,s.jsx)(n.p,{children:"array([10, 16, 74])"})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8597:(e,n,a)=>{a.d(n,{A:()=>r});a(6540);var s=a(4848);const r=e=>{let{data:n}=e,a=[],r=[],t="",i=[];if(n){const e=JSON.parse(n);a=e.columns||[],r=e.data||[],t=e.indexName||"Index",i=e.index||[]}return(0,s.jsx)("div",{className:"dataframe-container",children:(0,s.jsxs)("table",{className:"dataframe-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:t}),a.map(((e,n)=>(0,s.jsx)("th",{children:e},n)))]})}),(0,s.jsx)("tbody",{children:r.map(((e,n)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"index-value",children:i[n]}),e.map(((e,n)=>{return(0,s.jsx)("td",{children:(a=e,"boolean"==typeof a?a.toString().charAt(0).toUpperCase()+a.toString().slice(1):a)},n);var a}))]},n)))})]})})}},8205:(e,n,a)=>{a.d(n,{A:()=>r});a(6540);var s=a(4848);const r=e=>{let{data:n}=e,a=[],r=[],t="",i="";if(n)try{const e=JSON.parse(n);t=e.name||"",i=e.dtype||"Unknown type",a=e.index||[],r=e.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const l=r.map((e=>JSON.stringify(e)));return(0,s.jsxs)("div",{className:"series-container",children:[(0,s.jsx)("ul",{className:"series-list",children:l.map(((e,n)=>(0,s.jsxs)("li",{className:"series-item",children:[(0,s.jsx)("span",{className:"series-index",children:a[n]}),(0,s.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},n)))}),(0,s.jsxs)("div",{className:"series-footer",children:["Name: ",t,", dtype: ",i]})]})}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var s=a(6540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);