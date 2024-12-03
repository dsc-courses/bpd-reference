"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[1779],{2878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=t(4848),i=t(8453);t(8597),t(5158);const a={sidebar_position:9,sidebar_label:"The Standard Normal Distribution",title:"The Standard Normal Distribution",tags:["normal distributions","standard units"]},s=void 0,d={id:"statistical-inference/standard_normal_distribution",title:"The Standard Normal Distribution",description:"Concept",source:"@site/docs/statistical-inference/standard_normal_distribution.md",sourceDirName:"statistical-inference",slug:"/statistical-inference/standard_normal_distribution",permalink:"/bpd-reference/docs/statistical-inference/standard_normal_distribution",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/statistical-inference/standard_normal_distribution.md",tags:[{label:"normal distributions",permalink:"/bpd-reference/docs/tags/normal-distributions"},{label:"standard units",permalink:"/bpd-reference/docs/tags/standard-units"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"The Standard Normal Distribution",title:"The Standard Normal Distribution",tags:["normal distributions","standard units"]},sidebar:"statsSidebar",previous:{title:"Standard Units, Correlation, Regression",permalink:"/bpd-reference/docs/statistical-inference/standard_units"},next:{title:"The Central Limit Theorem",permalink:"/bpd-reference/docs/statistical-inference/central_limit_theorem"}},o={},l=[{value:"Concept",id:"concept",level:2},{value:"Inflection Points Visualized",id:"inflection-points-visualized",level:4},{value:"Finding Areas Under the Standard Normal Curve",id:"finding-areas-under-the-standard-normal-curve",level:2},{value:"Find the area under the standard normal curve from -\u221e to <em>z</em>.",id:"find-the-area-under-the-standard-normal-curve-from---to-z",level:4},{value:"Find the area under the standard normal curve from <em>z_1</em> to <em>z_2</em>.",id:"find-the-area-under-the-standard-normal-curve-from-z_1-to-z_2",level:4},{value:"Examples in Python:",id:"examples-in-python",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"concept",children:"Concept"}),"\n",(0,r.jsx)(n.admonition,{title:"Key Idea",type:"tip",children:(0,r.jsxs)(n.p,{children:["The standard normal distribution is a normal distribution with mean 0, standard deviation 1, and\r\ninflection points at \xb11. The shape of the the standard normal distribution is called the\r\n",(0,r.jsx)(n.strong,{children:"standard normal curve"})," or ",(0,r.jsx)(n.strong,{children:"bell curve"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Curve",src:t(9391).A+"",width:"835",height:"489"})}),"\n",(0,r.jsx)(n.p,{children:"This is what the standard normal distribution curve looks like. Don't worry about the formula\r\nat the top."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The area under the standard normal curve is always equal to 1."}),"\n",(0,r.jsxs)(n.li,{children:["The area between any values ",(0,r.jsx)(n.em,{children:"a"})," and ",(0,r.jsx)(n.em,{children:"b"})," is the ",(0,r.jsx)(n.strong,{children:"proportion of values"})," between ",(0,r.jsx)(n.em,{children:"a"})," and ",(0,r.jsx)(n.em,{children:"b"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The x-axis in a plot of the standard normal distribution is in ",(0,r.jsx)(n.strong,{children:"standard units"}),"."]}),"\n"]})}),"\n",(0,r.jsxs)(n.admonition,{title:"Terminology",type:"info",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Cumulative Density Function (CDF)"}),": a function that takes in a value ",(0,r.jsx)(n.em,{children:"z"})," and returns the proportion of values in the distribution that are less than or equal to ",(0,r.jsx)(n.em,{children:"z"}),"."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Also known as the ",(0,r.jsx)(n.strong,{children:"area under the curve"})," to the left of ",(0,r.jsx)(n.em,{children:"z"}),"."]}),"\n"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Inflection Point"}),': where a curve goes from "opening down" \ud83d\ude41 to "opening up" \ud83d\ude42.']}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The standard normal curve has inflections points at 1 and -1."}),"\n"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"68\u201395\u201399.7 rule"}),": states that 68% of the data under the standard normal distribution falls within 1 standard deviation above and below the mean,\r\n95% within 2 standard deviations, and 99.7% within 3 standard deviations."]})]}),"\n",(0,r.jsx)(n.h4,{id:"inflection-points-visualized",children:"Inflection Points Visualized"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Curve",src:t(7547).A+"",width:"835",height:"452"})}),"\n",(0,r.jsx)(n.p,{children:"As you can see, the inflection points on a bell curve occur at 1 and -1."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"finding-areas-under-the-standard-normal-curve",children:"Finding Areas Under the Standard Normal Curve"}),"\n",(0,r.jsxs)(n.h4,{id:"find-the-area-under-the-standard-normal-curve-from---to-z",children:["Find the area under the standard normal curve from -\u221e to ",(0,r.jsx)(n.em,{children:"z"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"scipy.stats.norm.cdf(z)"})}),"\n",(0,r.jsxs)(n.h4,{id:"find-the-area-under-the-standard-normal-curve-from-z_1-to-z_2",children:["Find the area under the standard normal curve from ",(0,r.jsx)(n.em,{children:"z_1"})," to ",(0,r.jsx)(n.em,{children:"z_2"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"scipy.stats.norm.cdf(z_2) - scipy.stats.norm.cdf(z_1)"})}),"\n",(0,r.jsx)(n.h3,{id:"examples-in-python",children:"Examples in Python:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'print("Area from -inf to -1:", scipy.stats.norm.cdf(-1))\n'})}),"\n",(0,r.jsx)(n.p,{children:"Area from -inf to -1: 0.15865525393145707"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"This means that 15.865% of the data in a standard normal curve\r\nfalls to the left of 1 standard deviation below the mean."})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'print("Area from -inf to 0:", scipy.stats.norm.cdf(0))\n'})}),"\n",(0,r.jsx)(n.p,{children:"Area from -inf to 0: 0.5"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"This means that 50% of the data in a standard normal curve\r\nfalls to the left of the mean."})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'print("Area from -1 to 1:", scipy.stats.norm.cdf(1) - scipy.stats.norm.cdf(-1))\n'})}),"\n",(0,r.jsx)(n.p,{children:"Area from -1 to 1: 0.6826894921370859"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"This means that 68.27% of the data in a standard normal curve\r\nfalls between 1 standard deviation above and below the mean, as stated\r\nin the 68-95-99.7 rule."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8597:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var r=t(4848);const i=e=>{let{data:n}=e,t=[],i=[],a="",s=[];if(n){const e=JSON.parse(n);t=e.columns||[],i=e.data||[],a=e.indexName||"Index",s=e.index||[]}return(0,r.jsx)("div",{className:"dataframe-container",children:(0,r.jsxs)("table",{className:"dataframe-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:a}),t.map(((e,n)=>(0,r.jsx)("th",{children:e},n)))]})}),(0,r.jsx)("tbody",{children:i.map(((e,n)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"index-value",children:s[n]}),e.map(((e,n)=>{return(0,r.jsx)("td",{children:(t=e,"boolean"==typeof t?t.toString().charAt(0).toUpperCase()+t.toString().slice(1):t)},n);var t}))]},n)))})]})})}},5158:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(6540),i=t(4848);const a=function(e){let{src:n,sourceLink:t,aspectRatio:a=16/9}=e;const[s,d]=(0,r.useState)(0),[o,l]=(0,r.useState)(0),c=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=()=>{if(c.current){const e=c.current.offsetWidth;l(e/a)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[a]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:c,style:{width:"100%",position:"relative",maxWidth:"100%",backgroundColor:"white"},children:(0,i.jsx)("iframe",{src:n,style:{width:"100%",height:`${o}px`,border:"0",allowFullScreen:!0}},s)}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:(0,i.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:"(Source)"})}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,i.jsx)("button",{onClick:()=>{d((e=>e+1))},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",outline:"none",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",transition:"background-color 0.3s"},onMouseOver:e=>e.currentTarget.style.backgroundColor="#45a049",onMouseOut:e=>e.currentTarget.style.backgroundColor="#4CAF50",children:"Restart Diagram"})})]})}},9391:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/bell-curve-c4a482525c2e17750bb95647297d25f3.png"},7547:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/inflection-points-6b128ab39b34eba0a4180b9238445c5f.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var r=t(6540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);