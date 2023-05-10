"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[20980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(i,".").concat(d)]||c[d]||f[d]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const l={title:"jsonb_type",language:"zh-CN"},a=void 0,s={unversionedId:"sql-manual/sql-functions/json-functions/jsonb_type",id:"version-1.2/sql-manual/sql-functions/json-functions/jsonb_type",title:"jsonb_type",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/json-functions/jsonb_type.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/jsonb_type",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_type",draft:!1,tags:[],version:"1.2",frontMatter:{title:"jsonb_type",language:"zh-CN"},sidebar:"docs",previous:{title:"jsonb_exists_path",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_exists_path"},next:{title:"get_json_double",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/get_json_double"}},i={},u=[{value:"jsonb_type",id:"jsonb_type",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"jsonb_type"},"jsonb_type"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"\u7528\u6765\u5224\u65adjson_path\u6307\u5b9a\u7684\u5b57\u6bb5\u5728JSONB\u6570\u636e\u4e2d\u7684\u7c7b\u578b\uff0c\u5982\u679c\u5b57\u6bb5\u4e0d\u5b58\u5728\u8fd4\u56deNULL\uff0c\u5982\u679c\u5b58\u5728\u8fd4\u56de\u4e0b\u9762\u7684\u7c7b\u578b\u4e4b\u4e00"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"object"),(0,o.kt)("li",{parentName:"ul"},"array"),(0,o.kt)("li",{parentName:"ul"},"null"),(0,o.kt)("li",{parentName:"ul"},"bool"),(0,o.kt)("li",{parentName:"ul"},"int"),(0,o.kt)("li",{parentName:"ul"},"bigint"),(0,o.kt)("li",{parentName:"ul"},"double"),(0,o.kt)("li",{parentName:"ul"},"string")),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"STRING jsonb_type(JSONB j, VARCHAR json_path)\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("p",null,"\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/JSONB"},"jsonb tutorial")," \u4e2d\u7684\u793a\u4f8b"),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"jsonb_type"))}f.isMDXComponent=!0}}]);