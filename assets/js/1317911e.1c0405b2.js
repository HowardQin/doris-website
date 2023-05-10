"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[12064],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,d=u["".concat(i,".").concat(f)]||u[f]||y[f]||o;return t?n.createElement(d,l(l({ref:r},s),{},{components:t})):n.createElement(d,l({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},15056:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={title:"array_popback",language:"en"},l=void 0,c={unversionedId:"sql-manual/sql-functions/array-functions/array_popback",id:"sql-manual/sql-functions/array-functions/array_popback",title:"array_popback",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/array-functions/array_popback.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_popback",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_popback",draft:!1,tags:[],version:"current",frontMatter:{title:"array_popback",language:"en"},sidebar:"docs",previous:{title:"array_enumerate_uniq",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_enumerate_uniq"},next:{title:"array_popfront",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_popfront"}},i={},p=[{value:"array_popback",id:"array_popback",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_popback"},"array_popback"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"array_popback")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_popback(ARRAY<T> arr)")),(0,a.kt)("p",null,"Remove the last element from array."),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select array_popback(['test', NULL, 'value']);\n+-----------------------------------------------------+\n| array_popback(ARRAY('test', NULL, 'value'))         |\n+-----------------------------------------------------+\n| [test, NULL]                                        |\n+-----------------------------------------------------+\n\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,POPBACK,ARRAY_POPBACK"))}y.isMDXComponent=!0}}]);