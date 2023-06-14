"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[76365],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||y[m]||u;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=n.length,i=new Array(u);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<u;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65684:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>u,metadata:()=>o,toc:()=>s});var t=n(87462),a=(n(67294),n(3905));const u={title:"array_enumerate_uniq",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_enumerate_uniq",id:"sql-manual/sql-functions/array-functions/array_enumerate_uniq",title:"array_enumerate_uniq",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array_enumerate_uniq.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_enumerate_uniq",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_enumerate_uniq",draft:!1,tags:[],version:"current",frontMatter:{title:"array_enumerate_uniq",language:"zh-CN"},sidebar:"docs",previous:{title:"array_enumerate",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_enumerate"},next:{title:"array_popback",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_popback"}},l={},s=[{value:"array_enumerate_uniq",id:"array_enumerate_uniq",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function y(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_enumerate_uniq"},"array_enumerate_uniq"),(0,a.kt)("version",{since:"1.2.3"},(0,a.kt)("p",null,"array_enumerate_uniq")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_enumerate_uniq(ARRAY<T> arr)")),(0,a.kt)("p",null,"\u8fd4\u56de\u4e0e\u6e90\u6570\u7ec4\u5927\u5c0f\u76f8\u540c\u7684\u6570\u7ec4\uff0c\u6307\u793a\u6bcf\u4e2a\u5143\u7d20\u5728\u5177\u6709\u76f8\u540c\u503c\u7684\u5143\u7d20\u4e2d\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982 array_enumerate_uniq(","[1, 2, 1, 4]",") = ","[1, 1, 2, 1]","\n\u8be5\u51fd\u6570\u4e5f\u53ef\u63a5\u53d7\u591a\u4e2a\u5927\u5c0f\u76f8\u540c\u7684\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8fd4\u56de\u7684\u662f\u6570\u7ec4\u4e2d\u76f8\u540c\u4f4d\u7f6e\u7684\u5143\u7d20\u7ec4\u6210\u7684\u5143\u7ec4\u5728\u5177\u6709\u76f8\u540c\u503c\u7684\u5143\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u3002\u4f8b\u5982 array_enumerate_uniq(","[1, 2, 1, 1, 2]",", ","[2, 1, 2, 2, 1]",") = ","[1, 1, 2, 3, 2]"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> select k2, array_enumerate_uniq([1, 2, 3, 1, 2, 3]);\n+-----------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 2, 3, 1, 2, 3))       |\n+-----------------------------------------------------+\n| [1, 1, 1, 2, 2, 2]                                  |\n+-----------------------------------------------------+\nmysql> select array_enumerate_uniq([1, 1, 1, 1, 1], [2, 1, 2, 1, 2], [3, 1, 3, 1, 3]);\n+----------------------------------------------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 1, 1, 1, 1), ARRAY(2, 1, 2, 1, 2), ARRAY(3, 1, 3, 1, 3)) |\n+----------------------------------------------------------------------------------------+\n| [1, 1, 2, 1, 3]                                                                        |\n+----------------------------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,ENUMERATE_UNIQ,ARRAY_ENUMERATE_UNIQ"))}y.isMDXComponent=!0}}]);