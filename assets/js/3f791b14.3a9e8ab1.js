"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[6090],{9016:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var t=s(4848),i=s(8453),o=s(8597),r=(s(8205),s(8951));const a={sidebar_position:1,description:"Conditionally execute code. The elif and else blocks are optional."},c=void 0,d={id:"documentation/if-statements/if-elif-else",title:"if-elif-else",description:"Conditionally execute code. The elif and else blocks are optional.",source:"@site/docs/documentation/if-statements/if-elif-else.md",sourceDirName:"documentation/if-statements",slug:"/documentation/if-statements/if-elif-else",permalink:"/bpd-reference/docs/documentation/if-statements/if-elif-else",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Conditionally execute code. The elif and else blocks are optional."},sidebar:"docsSidebar",previous:{title:"if-statements",permalink:"/bpd-reference/docs/category/if-statements"},next:{title:"in  \u2044 not in",permalink:"/bpd-reference/docs/documentation/if-statements/in  \u2044 not in"}},l={},p=[];function h(e){const n={code:"code",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsxs)("code",{children:["if <condition>: ",(0,t.jsx)("br",{})," "]}),"\n\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,t.jsxs)("code",{children:[" <if body> ",(0,t.jsx)("br",{})," "]}),"\n",(0,t.jsxs)("code",{children:[" elif <second_condition>: ",(0,t.jsx)("br",{})," "]}),"\n\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,t.jsxs)("code",{children:[" <elif body> ",(0,t.jsx)("br",{})," "]}),"\n",(0,t.jsxs)("code",{children:[" elif <third_condition>: ",(0,t.jsx)("br",{})," "]}),"\n\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,t.jsxs)("code",{children:[" <elif body> ",(0,t.jsx)("br",{})," "]}),"\n",(0,t.jsxs)("code",{children:[" ... ",(0,t.jsx)("br",{})," "]}),"\n",(0,t.jsxs)("code",{children:[" else: ",(0,t.jsx)("br",{})," "]}),"\n\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,t.jsx)("code",{children:" <else body> "})]}),"\n",(0,t.jsxs)("div",{className:"base",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Conditionally execute code. The elif and else blocks are optional."})}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{className:"term",children:"Components:"}),(0,t.jsx)("dd",{className:"parameter",children:"if <condition>:"}),(0,t.jsx)("dd",{className:"parameter-description",children:"If the condition is True, the body of the if statement is executed. Condition will be checked even if\nanother if condition is fulfilled. "}),(0,t.jsx)("dd",{className:"parameter",children:"elif <condition>:"}),(0,t.jsx)("dd",{className:"parameter-description",children:"If the if condition is False, code moves onto the elif statement and checks the condition. If an if statement was executed, the elif conditions will not be checked."}),(0,t.jsx)("dd",{className:"parameter",children:"else <condition>:"}),(0,t.jsx)("dd",{className:"parameter-description",children:"If none of the if and elif conditions are met, the else body will execute. "})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pets = bpd.read_csv('pets.csv')\npets\n"})}),"\n",(0,t.jsx)(o.A,{data:'{"columns":["ID","Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0],["cat_001","cat","golden",1.5,0.2],["cat_002","cat","black",15.0,9.0],["dog_002","dog","white",80.0,2.0],["dog_003","dog","black",25.0,0.5],["ham_001","hamster","black",1.0,3.0],["ham_002","hamster","golden",0.25,0.2],["cat_003","cat","black",10.0,0.0]]}'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def more_descriptive_name(id_str, species, color, weight, age):\n    return id_str + ': This ' + color + ' ' + species + ' weighs ' + weight + ' lbs and is ' + age + ' years old'\n    \ndef cat_and_dog_info(pet_id):\n    id_arr = np.array(pets.get('ID'))\n    if pet_id not in id_arr:\n        return 'This pet is not in our record'\n    pets_info = pets[pets.get('ID') == pet_id]\n    age = pets_info.get('Age').iloc[0]\n    weight = pets_info.get('Weight').iloc[0]\n    species = pets_info.get('Species').iloc[0]\n    color = pets_info.get('Color').iloc[0]\n    if (species == 'dog') and (age < 1.5):\n        return pet_id + ': This is a puppy \ud83d\udc36'\n    elif (species == 'cat') and (age < 1):\n        return pet_id + ': This is a kitten \ud83d\udc31'\n    elif (species == 'dog') or (species == 'cat'):\n        weight = str(weight)\n        age = str(age)\n        return more_descriptive_name(pet_id, species, color, weight, age)\n        \n    else:\n        return pet_id + ': This pet is not a dog or a cat'\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"cat_and_dog_info('dog_001')\n"})}),"\n",(0,t.jsx)(n.p,{children:"'dog_001: This black dog weighs 40.0 lbs and is 5.0 years old'"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"cat_and_dog_info('cat_001')\n"})}),"\n",(0,t.jsx)(n.p,{children:"'cat_001: This is a kitten \ud83d\udc31'"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"cat_and_dog_info('cat_009')\n"})}),"\n",(0,t.jsx)(n.p,{children:"'This pet is not in our record'"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(r.A,{})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8597:(e,n,s)=>{s.d(n,{A:()=>i});s(6540);var t=s(4848);const i=e=>{let{data:n}=e,s=[],i=[],o="",r=[];if(n){const e=JSON.parse(n);s=e.columns||[],i=e.data||[],o=e.indexName||"Index",r=e.index||[]}return(0,t.jsx)("div",{className:"dataframe-container",children:(0,t.jsxs)("table",{className:"dataframe-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:o}),s.map(((e,n)=>(0,t.jsx)("th",{children:e},n)))]})}),(0,t.jsx)("tbody",{children:i.map(((e,n)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"index-value",children:r[n]}),e.map(((e,n)=>{return(0,t.jsx)("td",{children:(s=e,"boolean"==typeof s?s.toString().charAt(0).toUpperCase()+s.toString().slice(1):s)},n);var s}))]},n)))})]})})}},8205:(e,n,s)=>{s.d(n,{A:()=>i});s(6540);var t=s(4848);const i=e=>{let{data:n}=e,s=[],i=[],o="",r="";if(n)try{const e=JSON.parse(n);o=e.name||"",r=e.dtype||"Unknown type",s=e.index||[],i=e.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const a=i.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:a.map(((e,n)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:s[n]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},n)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",o,", dtype: ",r]})]})}},8951:(e,n,s)=>{s.d(n,{A:()=>i});s(6540);var t=s(4848);const i=()=>(0,t.jsxs)("p",{style:{fontSize:"1.2rem"},children:["Problems or suggestions about this page?","  ",(0,t.jsx)("a",{href:"https://forms.gle/cPdGGZ17j3XeQ6PE8",target:"_blank",rel:"noopener noreferrer",children:"Fill out our feedback form."})]})},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);