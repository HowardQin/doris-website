"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[37665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,y=u["".concat(i,".").concat(f)]||u[f]||d[f]||l;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"DATE",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Data-Types/DATE",id:"sql-manual/sql-reference/Data-Types/DATE",title:"DATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Types/DATE.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/DATE",draft:!1,tags:[],version:"current",frontMatter:{title:"DATE",language:"zh-CN"},sidebar:"docs",previous:{title:"DECIMALV3",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/DECIMALV3"},next:{title:"DATETIME",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/DATETIME"}},i={},p=[{value:"DATE",id:"date",level:2},{value:"description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"date"},"DATE"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DATE\u51fd\u6570\n    Syntax:\n        DATE(expr) \n    \u5c06\u8f93\u5165\u7684\u7c7b\u578b\u8f6c\u5316\u4e3aDATE\u7c7b\u578b\nDATE\u7c7b\u578b\n    \u65e5\u671f\u7c7b\u578b\uff0c\u76ee\u524d\u7684\u53d6\u503c\u8303\u56f4\u662f['0000-01-01', '9999-12-31'], \u9ed8\u8ba4\u7684\u6253\u5370\u5f62\u5f0f\u662f'yyyy-MM-dd'\n")),(0,a.kt)("h3",{id:"note"},"note"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5982\u679c\u60a8\u4f7f\u75281.2\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u5f3a\u70c8\u63a8\u8350\u60a8\u4f7f\u7528DATEV2\u7c7b\u578b\u66ff\u4ee3DATE\u7c7b\u578b\u3002\u76f8\u6bd4DATE\u7c7b\u578b\uff0cDATEV2\u66f4\u52a0\u9ad8\u6548\u3002\n\u6211\u4eec\u6253\u7b97\u57282024\u5e74\u5220\u9664\u8fd9\u4e2a\u7c7b\u578b\uff0c\u76ee\u524d\u9636\u6bb5\uff0cDoris\u9ed8\u8ba4\u7981\u6b62\u521b\u5efa\u542b\u6709DATE\u7c7b\u578b\u7684\u8868\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u9700\u8981\u5728FE\u7684config\u4e2d\u6dfb\u52a0`disable_datev1 = false`\uff0c\u5e76\u91cd\u542fFE\u3002\n")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT DATE('2003-12-31 01:02:03');\n    -> '2003-12-31'\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DATE\n")))}d.isMDXComponent=!0}}]);