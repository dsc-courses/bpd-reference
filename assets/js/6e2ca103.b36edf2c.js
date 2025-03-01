"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[5980],{3433:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var n=t(4848),r=t(8453),a=(t(8597),t(8205),t(8951)),i=t(5158);const d={sidebar_position:1},o=void 0,c={id:"documentation/plotting/Histogram",title:"Histogram",description:"df.plot(kind='hist', y=datacol, bins=thebins, density=True, ec='w')",source:"@site/docs/documentation/plotting/Histogram.md",sourceDirName:"documentation/plotting",slug:"/documentation/plotting/Histogram",permalink:"/bpd-reference/docs/documentation/plotting/Histogram",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Plotting",permalink:"/bpd-reference/docs/documentation/plotting/"},next:{title:"Scatter Plot",permalink:"/bpd-reference/docs/documentation/plotting/Scatter Plot"}},l={},p=[];function h(e){const s={a:"a",code:"code",hr:"hr",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("code",{children:"df.plot(kind='hist', y=data_col, bins=the_bins, density=True, ec='w')"}),"\n",(0,n.jsxs)("div",{className:"base",children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Creates a histogram using a DataFrame."})}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{className:"term",children:"Input:"}),(0,n.jsxs)("dd",{className:"parameter",children:["kind : ",(0,n.jsx)("em",{children:"string"})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"To create a histogram, use kind='hist'"}),(0,n.jsxs)("dd",{className:"parameter",children:["y : ",(0,n.jsx)("em",{children:"label"})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"Column to calculate frequency/probability density."}),(0,n.jsxs)("dd",{className:"parameter",children:["bins : ",(0,n.jsx)("em",{children:"integer or array, default None"})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"If integer, number of bins to use."}),(0,n.jsx)("dd",{className:"parameter-description",children:"If array, specifies the bin edges. "}),(0,n.jsx)("dd",{className:"parameter-description",children:"If not specified, matplotlib tries to calculate the optimal number of bins.  "}),(0,n.jsxs)("dd",{className:"parameter",children:["density : ",(0,n.jsx)("em",{children:"boolean, default False"})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"If False, y-axis plots the number of observations."}),(0,n.jsx)("dd",{className:"parameter-description",children:"If True, y-axis plots the probability density."}),(0,n.jsxs)("dd",{className:"parameter",children:["ec : ",(0,n.jsx)("em",{children:"string"})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"Color for histogram bin outlines, use ec='w' for a white outline."}),(0,n.jsx)("dt",{className:"term",children:"Returns:"}),(0,n.jsxs)("dd",{children:["Matplotlib plot created using ",(0,n.jsx)(s.a,{href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html",children:"parameters"}),"."]}),(0,n.jsx)("dt",{className:"term",children:"Return Type:"}),(0,n.jsx)("dd",{children:"Matplotlib plot"}),(0,n.jsx)("dt",{className:"term",children:"Note:"}),(0,n.jsx)("dd",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"In a histogram, only the last bin is inclusive of the right endpoint! [left, right)"}),(0,n.jsx)("li",{children:"The bins you specify don't have to include all data values; data values not in any bin won't be shown in the histogram."})]})})]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:["The diagram below provides a visualization of how histograms are formed. For additional helpful visual guides, please visit the ",(0,n.jsx)(s.a,{href:"https://dsc10.com/diagrams/",children:"Diagrams"})," site."]}),"\n",(0,n.jsx)(i.A,{src:"https://docs.google.com/presentation/d/e/2PACX-1vTnRGwEnKP2V-Z82DlxW1b1nMb2F0zWyrXIzFSpQx_8Wd3MFaf56y2_u3JrLwZ5SjWmfapL5BJLfsDG/embed?start=true&loop=false&delayms=3000&rm=minimal",sourceLink:"https://docs.google.com/presentation/d/1D4YhRuCjRivWVbjluXtxx_GgsdcMDBdesnwDtCEfDXY/edit?usp=sharing"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"pets.plot(kind='hist', y='Age', bins=np.arange(0, 15, 3), density=True, ec='w')\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Histogram example 1",src:t(7344).A+"",width:"585",height:"413"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"pets.plot(kind='hist', y='Weight', bins=5, density=True, ec='w')\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Histogram example 2",src:t(2747).A+"",width:"585",height:"413"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"# DataFrame with weights of only cats and dogs.\ncats_dogs = bpd.DataFrame().assign(\n    cats=np.array(pets[pets.get('Species') == 'cat'].get('Weight')),\n    dogs=np.array(pets[pets.get('Species') == 'dog'].get('Weight')),\n)\n\n# Overlaid histogram.\nbins = np.arange(0, 40, 15)\ncats_dogs.plot(kind='hist', alpha=0.65, density=True, ec='w', bins=bins)\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Histogram example 3",src:t(9090).A+"",width:"576",height:"418"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"# Without the `bins` parameter.\npets.plot(kind='hist', y='Weight', density=True, ec='w')\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Histogram example 4",src:t(1885).A+"",width:"576",height:"413"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(a.A,{})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8597:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(4848);const r=e=>{let{data:s}=e,t=[],r=[],a="",i=[];if(s){const e=JSON.parse(s);t=e.columns||[],r=e.data||[],a=e.indexName||"Index",i=e.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:a}),t.map(((e,s)=>(0,n.jsx)("th",{children:e},s)))]})}),(0,n.jsx)("tbody",{children:r.map(((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:i[s]}),e.map(((e,s)=>{return(0,n.jsx)("td",{children:(t=e,"boolean"==typeof t?t.toString().charAt(0).toUpperCase()+t.toString().slice(1):t)},s);var t}))]},s)))})]})})}},5158:(e,s,t)=>{t.d(s,{A:()=>a});var n=t(6540),r=t(4848);const a=function(e){let{src:s,sourceLink:t,aspectRatio:a=16/9}=e;const[i,d]=(0,n.useState)(0),[o,c]=(0,n.useState)(0),l=(0,n.useRef)(null);return(0,n.useEffect)((()=>{const e=()=>{if(l.current){const e=l.current.offsetWidth;c(e/a)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[a]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:l,style:{width:"100%",position:"relative",maxWidth:"100%",backgroundColor:"white"},children:(0,r.jsx)("iframe",{src:s,style:{width:"100%",height:`${o}px`,border:"0",allowFullScreen:!0}},i)}),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:(0,r.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:"(Source)"})}),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,r.jsx)("button",{onClick:()=>{d((e=>e+1))},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",outline:"none",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",transition:"background-color 0.3s"},onMouseOver:e=>e.currentTarget.style.backgroundColor="#45a049",onMouseOut:e=>e.currentTarget.style.backgroundColor="#4CAF50",children:"Restart Diagram"})})]})}},8205:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(4848);const r=e=>{let{data:s}=e,t=[],r=[],a="",i="";if(s)try{const e=JSON.parse(s);a=e.name||"",i=e.dtype||"Unknown type",t=e.index||[],r=e.data||[]}catch(o){console.error("Error parsing data prop in SeriesComponent:",o)}const d=r.map((e=>JSON.stringify(e)));return(0,n.jsxs)("div",{className:"series-container",children:[(0,n.jsx)("ul",{className:"series-list",children:d.map(((e,s)=>(0,n.jsxs)("li",{className:"series-item",children:[(0,n.jsx)("span",{className:"series-index",children:t[s]}),(0,n.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,n.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",i]})]})}},8951:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(4848);const r=()=>(0,n.jsxs)("p",{style:{fontSize:"1.2rem"},children:["Problems or suggestions about this page?","  ",(0,n.jsx)("a",{href:"https://forms.gle/cPdGGZ17j3XeQ6PE8",target:"_blank",rel:"noopener noreferrer",children:"Fill out our feedback form."})]})},7344:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/histex1-ca89deede07f4121aaf1ffcdc41ca947.png"},2747:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/histex2-5b2bc1d1349c29bf183a61e69dbe6c3a.png"},9090:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/histex3-48dc5c40cb3bf5281d80af0c4877ed82.png"},1885:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/histex4-bc72986eb46b0b82dbdb0509f4c712e5.png"},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>d});var n=t(6540);const r={},a=n.createContext(r);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);