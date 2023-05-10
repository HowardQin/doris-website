"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"DECIMAL",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-reference/Data-Types/DECIMAL",id:"version-1.2/sql-manual/sql-reference/Data-Types/DECIMAL",title:"DECIMAL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Types/DECIMAL.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DECIMAL",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DECIMAL",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DECIMAL",language:"zh-CN"},sidebar:"docs",previous:{title:"DOUBLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DOUBLE"},next:{title:"DECIMALV3",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DECIMALV3"}},i={},s=[{value:"DECIMAL",id:"decimal",level:2},{value:"description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"decimal"},"DECIMAL"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DECIMAL(M[,D])\n\u9ad8\u7cbe\u5ea6\u5b9a\u70b9\u6570\uff0cM \u4ee3\u8868\u4e00\u5171\u6709\u591a\u5c11\u4e2a\u6709\u6548\u6570\u5b57(precision)\uff0cD \u4ee3\u8868\u5c0f\u6570\u4f4d\u6709\u591a\u5c11\u6570\u5b57(scale)\uff0c\n\u6709\u6548\u6570\u5b57 M \u7684\u8303\u56f4\u662f [1, 27]\uff0c\u5c0f\u6570\u4f4d\u6570\u5b57\u6570\u91cf D \u7684\u8303\u56f4\u662f [0, 9]\uff0c\u6574\u6570\u4f4d\u6570\u5b57\u6570\u91cf\u7684\u8303\u56f4\u662f [1, 18]\uff0c\n\u53e6\u5916\uff0cM \u5fc5\u987b\u8981\u5927\u4e8e\u7b49\u4e8e D \u7684\u53d6\u503c\u3002\n\n\u9ed8\u8ba4\u503c\u4e3a DECIMAL(9, 0)\u3002\n")),(0,a.kt)("h3",{id:"note"},"note"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u6211\u4eec\u6253\u7b97\u57282024\u5e74\u5220\u9664\u8fd9\u4e2a\u7c7b\u578b\uff0c\u76ee\u524d\u9636\u6bb5\uff0cDoris\u9ed8\u8ba4\u7981\u6b62\u521b\u5efa\u542b\u6709DECIMAL\u7c7b\u578b\u7684\u8868\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u9700\u8981\u5728FE\u7684config\u4e2d\u6dfb\u52a0`disable_decimalv2 = false`\uff0c\u5e76\u91cd\u542fFE\u3002\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DECIMAL\n")))}d.isMDXComponent=!0}}]);