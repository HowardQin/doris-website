"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3407],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"TOPN_ARRAY",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/topn_array",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/topn_array",title:"TOPN_ARRAY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/aggregate-functions/topn_array.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/topn_array",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/topn_array",draft:!1,tags:[],version:"1.2",frontMatter:{title:"TOPN_ARRAY",language:"zh-CN"},sidebar:"docs",previous:{title:"TOPN",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/topn"},next:{title:"TOPN_WEIGHTED",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/topn_weighted"}},s={},p=[{value:"TOPN_ARRAY",id:"topn_array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"topn_array"},"TOPN_ARRAY"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> topn_array(expr, INT top_num[, INT space_expand_rate])")),(0,a.kt)("p",null,"\u8be5topn_array\u51fd\u6570\u4f7f\u7528Space-Saving\u7b97\u6cd5\u8ba1\u7b97expr\u4e2d\u7684top_num\u4e2a\u9891\u7e41\u9879\uff0c\u8fd4\u56de\u7531\u524dtop_num\u4e2a\u7ec4\u6210\u7684\u6570\u7ec4\uff0c\u8be5\u7ed3\u679c\u4e3a\u8fd1\u4f3c\u503c"),(0,a.kt)("p",null,"space_expand_rate\u53c2\u6570\u662f\u53ef\u9009\u9879\uff0c\u8be5\u503c\u7528\u6765\u8bbe\u7f6eSpace-Saving\u7b97\u6cd5\u4e2d\u4f7f\u7528\u7684counter\u4e2a\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"counter numbers = top_num * space_expand_rate\n")),(0,a.kt)("p",null,"space_expand_rate\u7684\u503c\u8d8a\u5927\uff0c\u7ed3\u679c\u8d8a\u51c6\u786e\uff0c\u9ed8\u8ba4\u503c\u4e3a50"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select topn_array(k3,3) from baseall;\n+--------------------------+\n| topn_array(`k3`, 3)      |\n+--------------------------+\n| [3021, 2147483647, 5014] |\n+--------------------------+\n1 row in set (0.02 sec)\n\nmysql> select topn_array(k3,3,100) from baseall;\n+--------------------------+\n| topn_array(`k3`, 3, 100) |\n+--------------------------+\n| [3021, 2147483647, 5014] |\n+--------------------------+\n1 row in set (0.02 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"TOPN, TOPN_ARRAY"))}f.isMDXComponent=!0}}]);