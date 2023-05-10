"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[23278],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"DATEV2",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/DATEV2",id:"sql-manual/sql-reference/Data-Types/DATEV2",title:"DATEV2",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Types/DATEV2.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATEV2",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DATEV2",draft:!1,tags:[],version:"current",frontMatter:{title:"DATEV2",language:"en"},sidebar:"docs",previous:{title:"DATETIME",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DATETIME"},next:{title:"DATETIMEV2",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DATETIMEV2"}},c={},s=[{value:"DATEV2",id:"datev2",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"note",id:"note",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"datev2"},"DATEV2"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"DATEV2")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"datev2\nDateV2 type, the current range of values is ","['0000-01-01','9999-12-31']",", and the default print form is 'yyyy-MM-dd'."),(0,a.kt)("h3",{id:"note"},"note"),(0,a.kt)("p",null,"DATEV2 type is more efficient than DATE type. During calculation, DATEV2 can save half of the memory usage compared with DATE."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT CAST('2003-12-31 01:02:03' as DATEV2);\n+---------------------------------------+\n| CAST('2003-12-31 01:02:03' AS DATEV2) |\n+---------------------------------------+\n| 2003-12-31                            |\n+---------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"DATE"))}d.isMDXComponent=!0}}]);