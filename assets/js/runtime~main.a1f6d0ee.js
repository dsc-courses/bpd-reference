(()=>{"use strict";var e,f,a,c,d,b={},r={};function t(e){var f=r[e];if(void 0!==f)return f.exports;var a=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=b,t.c=r,e=[],t.O=(f,a,c,d)=>{if(!a){var b=1/0;for(i=0;i<e.length;i++){a=e[i][0],c=e[i][1],d=e[i][2];for(var r=!0,o=0;o<a.length;o++)(!1&d||b>=d)&&Object.keys(t.O).every((e=>t.O[e](a[o])))?a.splice(o--,1):(r=!1,d<b&&(b=d));if(r){e.splice(i--,1);var n=c();void 0!==n&&(f=n)}}return f}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[a,c,d]},t.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return t.d(f,{a:f}),f},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);t.r(d);var b={};f=f||[null,a({}),a([]),a(a)];for(var r=2&c&&e;"object"==typeof r&&!~f.indexOf(r);r=a(r))Object.getOwnPropertyNames(r).forEach((f=>b[f]=()=>e[f]));return b.default=()=>e,t.d(d,b),d},t.d=(e,f)=>{for(var a in f)t.o(f,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((f,a)=>(t.f[a](e,f),f)),[])),t.u=e=>"assets/js/"+({28:"f095f4cd",94:"81322b72",514:"807a8ce9",614:"f2b0891e",675:"82ff9878",719:"9ac7dbcc",957:"c141421f",972:"f03ae67e",1235:"a7456010",1316:"62552850",1417:"83b8ee67",1429:"8d72dfa8",1746:"a278cdf6",1779:"9a265863",1903:"acecf23e",1944:"b0c30e46",1972:"73664a40",1979:"b69909d7",2087:"f0fd5c00",2105:"dd3b6db1",2138:"1a4e3797",2284:"6e05dac9",2302:"499d47b2",2334:"65beeb93",2441:"9e1896f0",2456:"36d89dbe",2491:"acb40918",2540:"79080f49",2563:"cd67c8da",2621:"ca8a4f49",2634:"c4f5d8e4",2646:"0c6397b1",2711:"9e4087bc",2720:"10f7d562",2808:"f0994678",2917:"dfefbedb",3110:"a98da3ba",3113:"d9ae1e76",3233:"be5f280b",3237:"2be9118b",3249:"ccc49370",3250:"1f418535",3279:"1fc0ff79",3342:"f9684ee2",3343:"f3b65525",3362:"f39390d7",3484:"c94468d5",3490:"abde3fc7",3508:"202baea0",3555:"d3ef55ca",3637:"f4f34a3a",3694:"8717b14a",3717:"099c0b96",3782:"6e7a31fd",3870:"37002ad4",3887:"0784c833",4049:"83aa63f8",4266:"8ded1294",4279:"df203c0f",4469:"6a26c916",4534:"97247bb2",4540:"f8d80a2f",4551:"907d0c45",4567:"655190df",4594:"62efbc4a",4638:"9746c0ef",4787:"3720c009",4812:"739bf370",4813:"6875c492",4833:"d4f68316",4929:"b78139e1",4932:"6b67e948",5007:"e06ba05c",5119:"d28047a2",5125:"10297ef4",5296:"14acb028",5557:"d9f32620",5579:"46ccc97a",5622:"5d6a2894",5742:"aba21aa0",5745:"8d40581b",5848:"8b4ce11c",5980:"6e2ca103",6061:"1f391b9e",6077:"ffbcff43",6090:"3f791b14",6137:"61546123",6142:"60c4aef6",6264:"187e374f",6280:"5ddb68ca",6363:"2141c98b",6690:"920988e2",6730:"b7ff327f",6747:"f4434bba",6969:"14eb3368",7069:"2efbf384",7098:"a7bd4aaa",7174:"a4805c9a",7214:"dcbe5aac",7233:"f4c1c84a",7326:"03f8d3d3",7330:"a5d86b03",7338:"9a1a2feb",7354:"541bd1cc",7380:"e6a51af0",7472:"814f3328",7489:"fe41946a",7643:"a6aa9e1f",7661:"26533384",7680:"cdae2dcc",7795:"f3976560",8065:"80770d40",8104:"d3196d0d",8189:"b2bdf99d",8209:"01a85c17",8241:"de98ccb0",8328:"5ad2bf6e",8401:"17896441",8449:"29759c23",8593:"ce5ff83d",8609:"925b3f96",8737:"7661071f",8743:"80c4c602",8852:"ac5712c7",8857:"0708938a",9048:"a94703ab",9108:"d16c2311",9325:"59362658",9328:"e273c56f",9448:"1774e1e3",9488:"ce9b9f25",9572:"8c496670",9595:"fb17983f",9600:"eaaf288f",9647:"5e95c892",9826:"d01a85b0",9858:"36994c47",9894:"9f1843d8",9930:"ffd9fdf4",9938:"3eb51302"}[e]||e)+"."+{28:"32321c37",94:"65633f64",416:"2da58a29",514:"db71d3f2",614:"84e45708",675:"b348d60a",719:"29890201",724:"b40f7e36",957:"eb77f58b",972:"29f38469",1235:"e3f68dab",1316:"611cdd05",1417:"1feae5ee",1429:"c6550015",1746:"f2e85f73",1779:"c79182d8",1903:"978cac9e",1944:"b4ca6cce",1972:"6864c464",1979:"cf14dce4",2087:"785562a7",2105:"befa0697",2138:"cc431c8c",2237:"6895c75e",2284:"794051db",2302:"d2522afc",2334:"0cea168a",2441:"8eba7a80",2456:"de5987ca",2491:"33fe453e",2540:"9a0341a0",2563:"eaf73a42",2621:"924264c1",2634:"8c6997a5",2646:"4c026ca7",2711:"1233637c",2720:"9b0bb4fc",2808:"6ec7c52a",2917:"df2ccdca",3110:"b670659f",3113:"e7ed22dc",3233:"69c559f2",3237:"d875830f",3242:"7073af4e",3249:"6bd4d0ac",3250:"861ded06",3279:"fa736358",3342:"afdc4063",3343:"5e8d7112",3362:"92119755",3484:"2beba803",3490:"b4dcf340",3508:"cc8071ce",3555:"2308a0a5",3637:"b17e442f",3694:"5454028b",3717:"cd0ce1aa",3782:"f2c56f5f",3870:"acdd4bc4",3887:"c75cf449",4049:"e3a12dc4",4266:"d075716b",4279:"eaa01a0c",4469:"d7db71df",4534:"84f8af6a",4540:"d56b6f04",4551:"7e422b8d",4567:"cff71572",4594:"df27b50d",4638:"971bfc0e",4787:"9b65805f",4812:"926979de",4813:"170acbab",4833:"7ff7b207",4929:"2e1731e5",4932:"8054ba9a",5007:"368bbaf3",5119:"40e4d113",5125:"8f93c5d4",5296:"d858fe86",5557:"932c5f37",5579:"8eb8150e",5622:"703c77c4",5742:"6cc8becd",5745:"0f3d989b",5848:"2d545e07",5980:"25b793cd",6061:"50a4ba87",6077:"6d81049f",6090:"1dbf70e4",6137:"aa0b9096",6142:"19e4e86c",6264:"6bd2e740",6280:"bed8642d",6363:"68bccc98",6690:"194657cf",6730:"6db93a5d",6747:"0479fbaa",6969:"66f25eb3",7069:"c39421b9",7098:"7f57ba47",7174:"ee859eea",7214:"ce3fa403",7233:"6d6b448a",7326:"7b99b749",7330:"a79feeeb",7338:"a1bfeb61",7354:"7439de24",7380:"610f9b02",7472:"2a71da77",7489:"15b16019",7643:"e66b5d79",7661:"be4db69a",7680:"d2af19ec",7795:"e6a51183",8065:"0519ff36",8104:"bb1c62ac",8189:"abb923e7",8209:"325e5c9a",8241:"f43dadcf",8328:"3e7a07f1",8401:"ef0790a9",8449:"08a60880",8593:"5fdc399b",8609:"cba4ee15",8737:"e81fafbc",8743:"78a5f73f",8852:"1cc6e45c",8857:"9e0ad3d4",8913:"a03b371c",9048:"be35ee30",9108:"d056fef5",9325:"777bc4c6",9328:"f95f7890",9448:"31a80d1b",9462:"c36291a8",9488:"b68bf0b7",9572:"dc29cff5",9595:"d5f88d2e",9600:"80006e89",9647:"185788dc",9826:"71d737ed",9858:"61b8e5f6",9894:"8224833f",9930:"487ad059",9938:"ade32d2c"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),c={},d="bpd-reference:",t.l=(e,f,a,b)=>{if(c[e])c[e].push(f);else{var r,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+a){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",d+a),r.src=e),c[e]=[f];var l=(f,a)=>{r.onerror=r.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],r.parentNode&&r.parentNode.removeChild(r),d&&d.forEach((e=>e(a))),f)return f(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/bpd-reference/",t.gca=function(e){return e={17896441:"8401",26533384:"7661",59362658:"9325",61546123:"6137",62552850:"1316",f095f4cd:"28","81322b72":"94","807a8ce9":"514",f2b0891e:"614","82ff9878":"675","9ac7dbcc":"719",c141421f:"957",f03ae67e:"972",a7456010:"1235","83b8ee67":"1417","8d72dfa8":"1429",a278cdf6:"1746","9a265863":"1779",acecf23e:"1903",b0c30e46:"1944","73664a40":"1972",b69909d7:"1979",f0fd5c00:"2087",dd3b6db1:"2105","1a4e3797":"2138","6e05dac9":"2284","499d47b2":"2302","65beeb93":"2334","9e1896f0":"2441","36d89dbe":"2456",acb40918:"2491","79080f49":"2540",cd67c8da:"2563",ca8a4f49:"2621",c4f5d8e4:"2634","0c6397b1":"2646","9e4087bc":"2711","10f7d562":"2720",f0994678:"2808",dfefbedb:"2917",a98da3ba:"3110",d9ae1e76:"3113",be5f280b:"3233","2be9118b":"3237",ccc49370:"3249","1f418535":"3250","1fc0ff79":"3279",f9684ee2:"3342",f3b65525:"3343",f39390d7:"3362",c94468d5:"3484",abde3fc7:"3490","202baea0":"3508",d3ef55ca:"3555",f4f34a3a:"3637","8717b14a":"3694","099c0b96":"3717","6e7a31fd":"3782","37002ad4":"3870","0784c833":"3887","83aa63f8":"4049","8ded1294":"4266",df203c0f:"4279","6a26c916":"4469","97247bb2":"4534",f8d80a2f:"4540","907d0c45":"4551","655190df":"4567","62efbc4a":"4594","9746c0ef":"4638","3720c009":"4787","739bf370":"4812","6875c492":"4813",d4f68316:"4833",b78139e1:"4929","6b67e948":"4932",e06ba05c:"5007",d28047a2:"5119","10297ef4":"5125","14acb028":"5296",d9f32620:"5557","46ccc97a":"5579","5d6a2894":"5622",aba21aa0:"5742","8d40581b":"5745","8b4ce11c":"5848","6e2ca103":"5980","1f391b9e":"6061",ffbcff43:"6077","3f791b14":"6090","60c4aef6":"6142","187e374f":"6264","5ddb68ca":"6280","2141c98b":"6363","920988e2":"6690",b7ff327f:"6730",f4434bba:"6747","14eb3368":"6969","2efbf384":"7069",a7bd4aaa:"7098",a4805c9a:"7174",dcbe5aac:"7214",f4c1c84a:"7233","03f8d3d3":"7326",a5d86b03:"7330","9a1a2feb":"7338","541bd1cc":"7354",e6a51af0:"7380","814f3328":"7472",fe41946a:"7489",a6aa9e1f:"7643",cdae2dcc:"7680",f3976560:"7795","80770d40":"8065",d3196d0d:"8104",b2bdf99d:"8189","01a85c17":"8209",de98ccb0:"8241","5ad2bf6e":"8328","29759c23":"8449",ce5ff83d:"8593","925b3f96":"8609","7661071f":"8737","80c4c602":"8743",ac5712c7:"8852","0708938a":"8857",a94703ab:"9048",d16c2311:"9108",e273c56f:"9328","1774e1e3":"9448",ce9b9f25:"9488","8c496670":"9572",fb17983f:"9595",eaaf288f:"9600","5e95c892":"9647",d01a85b0:"9826","36994c47":"9858","9f1843d8":"9894",ffd9fdf4:"9930","3eb51302":"9938"}[e]||e,t.p+t.u(e)},(()=>{var e={5354:0,1869:0};t.f.j=(f,a)=>{var c=t.o(e,f)?e[f]:void 0;if(0!==c)if(c)a.push(c[2]);else if(/^(1869|5354)$/.test(f))e[f]=0;else{var d=new Promise(((a,d)=>c=e[f]=[a,d]));a.push(c[2]=d);var b=t.p+t.u(f),r=new Error;t.l(b,(a=>{if(t.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var d=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;r.message="Loading chunk "+f+" failed.\n("+d+": "+b+")",r.name="ChunkLoadError",r.type=d,r.request=b,c[1](r)}}),"chunk-"+f,f)}},t.O.j=f=>0===e[f];var f=(f,a)=>{var c,d,b=a[0],r=a[1],o=a[2],n=0;if(b.some((f=>0!==e[f]))){for(c in r)t.o(r,c)&&(t.m[c]=r[c]);if(o)var i=o(t)}for(f&&f(a);n<b.length;n++)d=b[n],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(i)},a=self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))})()})();