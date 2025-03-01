"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[2456],{6221:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=n(4848),a=n(8453),s=(n(8597),n(8205),n(8951));n(5158);const i={sidebar_position:4,sidebar_label:"Random Permutation",title:"Random Permutation"},o=void 0,d={id:"statistical-inference/random sampling/np.random.permutation()",title:"Random Permutation",description:"np.random.permutation(arr)",source:"@site/docs/statistical-inference/random sampling/np.random.permutation().md",sourceDirName:"statistical-inference/random sampling",slug:"/statistical-inference/random sampling/np.random.permutation()",permalink:"/bpd-reference/docs/statistical-inference/random sampling/np.random.permutation()",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Random Permutation",title:"Random Permutation"},sidebar:"statsSidebar",previous:{title:"Random Multinomial",permalink:"/bpd-reference/docs/statistical-inference/random sampling/np.random.multinomial()"},next:{title:"Sample",permalink:"/bpd-reference/docs/statistical-inference/random sampling/df.sample()"}},l={},c=[];function m(e){const r={code:"code",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:"np.random.permutation(arr)"}),"\n",(0,t.jsxs)("div",{className:"base",children:[(0,t.jsx)("p",{children:(0,t.jsxs)("strong",{children:["Randomly shuffles/reorders ",(0,t.jsx)(r.code,{children:"arr"}),"."]})}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{className:"term",children:"Input:"}),(0,t.jsxs)("dd",{className:"parameter",children:["arr : ",(0,t.jsx)("em",{children:"array, list, or integer"})]}),(0,t.jsxs)("dd",{className:"parameter-description",children:["If array or list, randomly reorder array or list. If integer (e.g. 5), randomly reorder ",(0,t.jsx)(r.code,{children:"np.arange(5)"})," (aka ",(0,t.jsx)(r.code,{children:"np.array([0, 1, 2, 3, 4])"}),")."]}),(0,t.jsx)("dt",{className:"term",children:"Returns:"}),(0,t.jsx)("dd",{children:"Shuffled/reordered array"}),(0,t.jsx)("dt",{className:"term",children:"Return Type:"}),(0,t.jsx)("dd",{children:"array"})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"example_array = np.array([1, 2, 3, 4, 5])\nexample_array\n"})}),"\n",(0,t.jsx)(r.p,{children:"array([1, 2, 3, 4, 5])"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"for i in range(5):\n    print(f'{i + 1}st random permutation:')\n    print(np.random.permutation(example_array), end='\\n\\n')\n"})}),"\n",(0,t.jsx)(r.p,{children:"1st random permutation:\n[3 5 4 2 1]"}),"\n",(0,t.jsx)(r.p,{children:"2st random permutation:\n[5 4 1 2 3]"}),"\n",(0,t.jsx)(r.p,{children:"3st random permutation:\n[3 5 4 1 2]"}),"\n",(0,t.jsx)(r.p,{children:"4st random permutation:\n[5 1 2 4 3]"}),"\n",(0,t.jsx)(r.p,{children:"5st random permutation:\n[2 4 1 3 5]"}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(s.A,{})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8597:(e,r,n)=>{n.d(r,{A:()=>a});n(6540);var t=n(4848);const a=e=>{let{data:r}=e,n=[],a=[],s="",i=[];if(r){const e=JSON.parse(r);n=e.columns||[],a=e.data||[],s=e.indexName||"Index",i=e.index||[]}return(0,t.jsx)("div",{className:"dataframe-container",children:(0,t.jsxs)("table",{className:"dataframe-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:s}),n.map(((e,r)=>(0,t.jsx)("th",{children:e},r)))]})}),(0,t.jsx)("tbody",{children:a.map(((e,r)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"index-value",children:i[r]}),e.map(((e,r)=>{return(0,t.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},r);var n}))]},r)))})]})})}},5158:(e,r,n)=>{n.d(r,{A:()=>s});var t=n(6540),a=n(4848);const s=function(e){let{src:r,sourceLink:n,aspectRatio:s=16/9}=e;const[i,o]=(0,t.useState)(0),[d,l]=(0,t.useState)(0),c=(0,t.useRef)(null);return(0,t.useEffect)((()=>{const e=()=>{if(c.current){const e=c.current.offsetWidth;l(e/s)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[s]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{ref:c,style:{width:"100%",position:"relative",maxWidth:"100%",backgroundColor:"white"},children:(0,a.jsx)("iframe",{src:r,style:{width:"100%",height:`${d}px`,border:"0",allowFullScreen:!0}},i)}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:(0,a.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:"(Source)"})}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,a.jsx)("button",{onClick:()=>{o((e=>e+1))},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",outline:"none",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",transition:"background-color 0.3s"},onMouseOver:e=>e.currentTarget.style.backgroundColor="#45a049",onMouseOut:e=>e.currentTarget.style.backgroundColor="#4CAF50",children:"Restart Diagram"})})]})}},8205:(e,r,n)=>{n.d(r,{A:()=>a});n(6540);var t=n(4848);const a=e=>{let{data:r}=e,n=[],a=[],s="",i="";if(r)try{const e=JSON.parse(r);s=e.name||"",i=e.dtype||"Unknown type",n=e.index||[],a=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const o=a.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:o.map(((e,r)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:n[r]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},r)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",s,", dtype: ",i]})]})}},8951:(e,r,n)=>{n.d(r,{A:()=>a});n(6540);var t=n(4848);const a=()=>(0,t.jsxs)("p",{style:{fontSize:"1.2rem"},children:["Problems or suggestions about this page?","  ",(0,t.jsx)("a",{href:"https://forms.gle/cPdGGZ17j3XeQ6PE8",target:"_blank",rel:"noopener noreferrer",children:"Fill out our feedback form."})]})},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(6540);const a={},s=t.createContext(a);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);