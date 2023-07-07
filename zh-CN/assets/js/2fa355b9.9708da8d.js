"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55447],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>E});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,E=u["".concat(c,".").concat(m)]||u[m]||O[m]||l;return r?n.createElement(E,o(o({ref:t},p),{},{components:r})):n.createElement(E,o({ref:t},p))}));function E(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>O,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-CREATE-REPOSITORY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-REPOSITORY",id:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-REPOSITORY",title:"SHOW-CREATE-REPOSITORY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-REPOSITORY.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-REPOSITORY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-REPOSITORY",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CREATE-REPOSITORY",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-CREATE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-LOAD"},next:{title:"SHOW-CREATE-ROUTINE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-ROUTINE-LOAD"}},c={},s=[{value:"SHOW-CREATE-REPOSITORY",id:"show-create-repository",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function O(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-create-repository"},"SHOW-CREATE-REPOSITORY"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW CREATE REPOSITORY"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u4ed3\u5e93\u7684\u521b\u5efa\u8bed\u53e5."),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE REPOSITORY for repository_name;\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repository_name"),": \u4ed3\u5e93\u540d\u79f0")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9a\u4ed3\u5e93\u7684\u521b\u5efa\u8bed\u53e5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE REPOSITORY for test_repository\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, CREATE, REPOSITORY\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}O.isMDXComponent=!0}}]);