"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12064],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||y[f]||o;return n?t.createElement(d,l(l({ref:r},s),{},{components:n})):t.createElement(d,l({ref:r},s))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15056:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const o={title:"array_popback",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array_popback",id:"sql-manual/sql-functions/array-functions/array_popback",title:"array_popback",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/array-functions/array_popback.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_popback",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_popback",draft:!1,tags:[],version:"current",frontMatter:{title:"array_popback",language:"en"},sidebar:"docs",previous:{title:"array_enumerate_uniq",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_enumerate_uniq"},next:{title:"array_popfront",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_popfront"}},c={},p=[{value:"array_popback",id:"array_popback",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p},u="wrapper";function y(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_popback"},"array_popback"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"array_popback")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_popback(ARRAY<T> arr)")),(0,a.kt)("p",null,"Remove the last element from array."),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select array_popback(['test', NULL, 'value']);\n+-----------------------------------------------------+\n| array_popback(ARRAY('test', NULL, 'value'))         |\n+-----------------------------------------------------+\n| [test, NULL]                                        |\n+-----------------------------------------------------+\n\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,POPBACK,ARRAY_POPBACK"))}y.isMDXComponent=!0}}]);