(()=>{"use strict";var e,a,f,c,d,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var f=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,t),f.loaded=!0,f.exports}t.m=b,t.c=r,e=[],t.O=(a,f,c,d)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],d=e[i][2];for(var r=!0,o=0;o<f.length;o++)(!1&d||b>=d)&&Object.keys(t.O).every((e=>t.O[e](f[o])))?f.splice(o--,1):(r=!1,d<b&&(b=d));if(r){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,c,d]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);t.r(d);var b={};a=a||[null,f({}),f([]),f(f)];for(var r=2&c&&e;"object"==typeof r&&!~a.indexOf(r);r=f(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(d,b),d},t.d=(e,a)=>{for(var f in a)t.o(a,f)&&!t.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,f)=>(t.f[f](e,a),a)),[])),t.u=e=>"assets/js/"+({28:"f095f4cd",94:"81322b72",121:"33e11bf9",514:"807a8ce9",614:"f2b0891e",675:"82ff9878",719:"9ac7dbcc",957:"c141421f",972:"f03ae67e",1235:"a7456010",1271:"67aac9b9",1316:"62552850",1417:"83b8ee67",1429:"8d72dfa8",1515:"67b0249f",1634:"22fe7a91",1746:"a278cdf6",1779:"9a265863",1903:"acecf23e",1944:"b0c30e46",1972:"73664a40",1979:"b69909d7",2087:"f0fd5c00",2105:"dd3b6db1",2138:"1a4e3797",2284:"6e05dac9",2302:"499d47b2",2334:"65beeb93",2441:"9e1896f0",2456:"36d89dbe",2491:"acb40918",2540:"79080f49",2563:"cd67c8da",2621:"ca8a4f49",2634:"c4f5d8e4",2646:"0c6397b1",2711:"9e4087bc",2720:"10f7d562",2917:"dfefbedb",3110:"a98da3ba",3113:"d9ae1e76",3233:"be5f280b",3237:"2be9118b",3249:"ccc49370",3250:"1f418535",3279:"1fc0ff79",3342:"f9684ee2",3343:"f3b65525",3362:"f39390d7",3484:"c94468d5",3490:"abde3fc7",3508:"202baea0",3637:"f4f34a3a",3694:"8717b14a",3717:"099c0b96",3782:"6e7a31fd",3799:"8f78c48f",3870:"37002ad4",3887:"0784c833",3958:"00323010",4049:"83aa63f8",4266:"8ded1294",4279:"df203c0f",4469:"6a26c916",4534:"97247bb2",4540:"f8d80a2f",4551:"907d0c45",4567:"655190df",4594:"62efbc4a",4638:"9746c0ef",4760:"80c054da",4787:"3720c009",4812:"739bf370",4813:"6875c492",4833:"d4f68316",4887:"af454fdb",4929:"b78139e1",4932:"6b67e948",5007:"e06ba05c",5119:"d28047a2",5125:"10297ef4",5259:"60263bc8",5296:"14acb028",5375:"3afe2ed8",5557:"d9f32620",5579:"46ccc97a",5614:"68a78d6e",5622:"5d6a2894",5742:"aba21aa0",5745:"8d40581b",5848:"8b4ce11c",5980:"6e2ca103",6061:"1f391b9e",6077:"ffbcff43",6090:"3f791b14",6137:"61546123",6142:"60c4aef6",6264:"187e374f",6280:"5ddb68ca",6363:"2141c98b",6397:"e17bd472",6690:"920988e2",6730:"b7ff327f",6747:"f4434bba",6969:"14eb3368",7069:"2efbf384",7098:"a7bd4aaa",7174:"a4805c9a",7214:"dcbe5aac",7233:"f4c1c84a",7326:"03f8d3d3",7330:"a5d86b03",7338:"9a1a2feb",7354:"541bd1cc",7380:"e6a51af0",7472:"814f3328",7643:"a6aa9e1f",7661:"26533384",7680:"cdae2dcc",7795:"f3976560",8065:"80770d40",8104:"d3196d0d",8189:"b2bdf99d",8209:"01a85c17",8241:"de98ccb0",8328:"5ad2bf6e",8401:"17896441",8449:"29759c23",8593:"ce5ff83d",8609:"925b3f96",8737:"7661071f",8743:"80c4c602",8830:"ab942b58",8852:"ac5712c7",8857:"0708938a",9048:"a94703ab",9108:"d16c2311",9322:"5f431c61",9325:"59362658",9328:"e273c56f",9448:"1774e1e3",9488:"ce9b9f25",9572:"8c496670",9595:"fb17983f",9600:"eaaf288f",9647:"5e95c892",9826:"d01a85b0",9858:"36994c47",9894:"9f1843d8",9930:"ffd9fdf4",9938:"3eb51302"}[e]||e)+"."+{28:"bbc09096",94:"e794decf",121:"6dfd184e",416:"2da58a29",514:"db71d3f2",614:"91ba62b9",675:"39d9a097",719:"92ee1c29",957:"eb77f58b",972:"4c8faf24",1235:"e3f68dab",1271:"6dc49a09",1316:"125baa57",1417:"807360d3",1429:"c6550015",1515:"d9491223",1634:"a9490682",1746:"fcb227de",1779:"f2e9b109",1903:"978cac9e",1944:"23ec6666",1972:"6864c464",1979:"b57a9ad8",2087:"70f60474",2105:"3fd18a19",2138:"cc431c8c",2237:"6895c75e",2284:"0dd7b08a",2302:"f7a125dd",2334:"1a7c268f",2441:"16fab3c9",2456:"6d0e8703",2491:"7fccbcf2",2540:"9a0341a0",2563:"eaf73a42",2621:"924264c1",2634:"8c6997a5",2646:"bedeca28",2667:"1d2d8cb8",2711:"1233637c",2720:"039e988d",2917:"6910059b",3110:"b670659f",3113:"9da90fe2",3233:"69c559f2",3237:"aaf76fdb",3242:"42f3e555",3249:"ede845d6",3250:"601bc26c",3279:"46455fe7",3342:"cb4a7bd5",3343:"583da5e3",3362:"c25f9348",3484:"e99e15a3",3490:"b4dcf340",3508:"90b517bc",3637:"b17e442f",3694:"5454028b",3717:"a78e334e",3782:"68033c6d",3799:"2ea7102f",3870:"0555e533",3887:"c75cf449",3958:"f145f853",4049:"e3a12dc4",4266:"9975d049",4279:"eaa01a0c",4469:"3bb49c77",4534:"053344ba",4540:"aa0a0b71",4551:"98cfc663",4567:"aeaea5f1",4594:"30183c56",4638:"84a238e3",4760:"2a7e65e2",4787:"9b65805f",4812:"f82b093c",4813:"170acbab",4833:"9c4390b8",4887:"ee61cfb6",4929:"8e35d301",4932:"20b22187",5007:"00a059a6",5119:"bd47e696",5125:"8a8a871d",5259:"384a56f8",5296:"c5ad0d79",5375:"9896f284",5557:"988cabd7",5579:"3f1c261a",5614:"a19c9b0b",5622:"82d0ff53",5742:"6cc8becd",5745:"c98b85ac",5848:"2d545e07",5980:"3af3b112",6061:"724c4e8c",6077:"98e68c95",6090:"4f2bacab",6137:"426fdbc6",6142:"11823593",6264:"f3bbdbeb",6280:"2a67837e",6363:"7ab8869e",6397:"d34cbb00",6690:"7d1a6798",6730:"006e5a69",6747:"3bbec481",6969:"66f25eb3",7069:"3f97325a",7098:"7f57ba47",7174:"2434c5b7",7214:"12d39123",7233:"04cf6ee7",7326:"163d04af",7330:"a79feeeb",7338:"a1bfeb61",7354:"7439de24",7380:"610f9b02",7472:"2a71da77",7643:"e66b5d79",7661:"63c8240e",7680:"905b30d8",7795:"e6a51183",8065:"3f121662",8104:"890dada5",8189:"abb923e7",8209:"325e5c9a",8241:"2568c62d",8328:"3e7a07f1",8401:"9d8dda81",8449:"08a60880",8593:"5fdc399b",8609:"cba4ee15",8737:"6848e9e8",8743:"78a5f73f",8830:"5831ef8b",8852:"1cc6e45c",8857:"3f073057",8913:"a03b371c",9048:"be35ee30",9108:"d056fef5",9322:"aa5d73be",9325:"777bc4c6",9328:"f95f7890",9448:"dd0bc361",9462:"c36291a8",9488:"b68bf0b7",9572:"8fa87326",9595:"5f982e26",9600:"1ef252ba",9647:"185788dc",9826:"55df3a3d",9858:"61b8e5f6",9894:"689effda",9930:"487ad059",9938:"9c7eef6a"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="bpd-reference:",t.l=(e,a,f,b)=>{if(c[e])c[e].push(a);else{var r,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",d+f),r.src=e),c[e]=[a];var l=(a,f)=>{r.onerror=r.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],r.parentNode&&r.parentNode.removeChild(r),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/bpd-reference/",t.gca=function(e){return e={17896441:"8401",26533384:"7661",59362658:"9325",61546123:"6137",62552850:"1316",f095f4cd:"28","81322b72":"94","33e11bf9":"121","807a8ce9":"514",f2b0891e:"614","82ff9878":"675","9ac7dbcc":"719",c141421f:"957",f03ae67e:"972",a7456010:"1235","67aac9b9":"1271","83b8ee67":"1417","8d72dfa8":"1429","67b0249f":"1515","22fe7a91":"1634",a278cdf6:"1746","9a265863":"1779",acecf23e:"1903",b0c30e46:"1944","73664a40":"1972",b69909d7:"1979",f0fd5c00:"2087",dd3b6db1:"2105","1a4e3797":"2138","6e05dac9":"2284","499d47b2":"2302","65beeb93":"2334","9e1896f0":"2441","36d89dbe":"2456",acb40918:"2491","79080f49":"2540",cd67c8da:"2563",ca8a4f49:"2621",c4f5d8e4:"2634","0c6397b1":"2646","9e4087bc":"2711","10f7d562":"2720",dfefbedb:"2917",a98da3ba:"3110",d9ae1e76:"3113",be5f280b:"3233","2be9118b":"3237",ccc49370:"3249","1f418535":"3250","1fc0ff79":"3279",f9684ee2:"3342",f3b65525:"3343",f39390d7:"3362",c94468d5:"3484",abde3fc7:"3490","202baea0":"3508",f4f34a3a:"3637","8717b14a":"3694","099c0b96":"3717","6e7a31fd":"3782","8f78c48f":"3799","37002ad4":"3870","0784c833":"3887","00323010":"3958","83aa63f8":"4049","8ded1294":"4266",df203c0f:"4279","6a26c916":"4469","97247bb2":"4534",f8d80a2f:"4540","907d0c45":"4551","655190df":"4567","62efbc4a":"4594","9746c0ef":"4638","80c054da":"4760","3720c009":"4787","739bf370":"4812","6875c492":"4813",d4f68316:"4833",af454fdb:"4887",b78139e1:"4929","6b67e948":"4932",e06ba05c:"5007",d28047a2:"5119","10297ef4":"5125","60263bc8":"5259","14acb028":"5296","3afe2ed8":"5375",d9f32620:"5557","46ccc97a":"5579","68a78d6e":"5614","5d6a2894":"5622",aba21aa0:"5742","8d40581b":"5745","8b4ce11c":"5848","6e2ca103":"5980","1f391b9e":"6061",ffbcff43:"6077","3f791b14":"6090","60c4aef6":"6142","187e374f":"6264","5ddb68ca":"6280","2141c98b":"6363",e17bd472:"6397","920988e2":"6690",b7ff327f:"6730",f4434bba:"6747","14eb3368":"6969","2efbf384":"7069",a7bd4aaa:"7098",a4805c9a:"7174",dcbe5aac:"7214",f4c1c84a:"7233","03f8d3d3":"7326",a5d86b03:"7330","9a1a2feb":"7338","541bd1cc":"7354",e6a51af0:"7380","814f3328":"7472",a6aa9e1f:"7643",cdae2dcc:"7680",f3976560:"7795","80770d40":"8065",d3196d0d:"8104",b2bdf99d:"8189","01a85c17":"8209",de98ccb0:"8241","5ad2bf6e":"8328","29759c23":"8449",ce5ff83d:"8593","925b3f96":"8609","7661071f":"8737","80c4c602":"8743",ab942b58:"8830",ac5712c7:"8852","0708938a":"8857",a94703ab:"9048",d16c2311:"9108","5f431c61":"9322",e273c56f:"9328","1774e1e3":"9448",ce9b9f25:"9488","8c496670":"9572",fb17983f:"9595",eaaf288f:"9600","5e95c892":"9647",d01a85b0:"9826","36994c47":"9858","9f1843d8":"9894",ffd9fdf4:"9930","3eb51302":"9938"}[e]||e,t.p+t.u(e)},(()=>{var e={5354:0,1869:0};t.f.j=(a,f)=>{var c=t.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>c=e[a]=[f,d]));f.push(c[2]=d);var b=t.p+t.u(a),r=new Error;t.l(b,(f=>{if(t.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;r.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",r.name="ChunkLoadError",r.type=d,r.request=b,c[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,f)=>{var c,d,b=f[0],r=f[1],o=f[2],n=0;if(b.some((a=>0!==e[a]))){for(c in r)t.o(r,c)&&(t.m[c]=r[c]);if(o)var i=o(t)}for(a&&a(f);n<b.length;n++)d=b[n],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(i)},f=self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();