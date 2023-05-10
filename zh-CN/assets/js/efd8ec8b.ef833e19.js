"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[56724],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>d});var r=t(67294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,s=function(n,e){if(null==n)return{};var t,r,s={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var l=r.createContext({}),c=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(l.Provider,{value:e},n.children)},m="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,s=n.mdxType,a=n.originalType,l=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),m=c(t),p=s,d=m["".concat(l,".").concat(p)]||m[p]||f[p]||a;return t?r.createElement(d,i(i({ref:e},u),{},{components:t})):r.createElement(d,i({ref:e},u))}));function d(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var a=t.length,i=new Array(a);i[0]=p;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o[m]="string"==typeof n?n:s,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},55080:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const a={title:"mask_first_n",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/mask/mask_first_n",id:"version-1.2/sql-manual/sql-functions/string-functions/mask/mask_first_n",title:"mask_first_n",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/mask/mask_first_n.md",sourceDirName:"sql-manual/sql-functions/string-functions/mask",slug:"/sql-manual/sql-functions/string-functions/mask/mask_first_n",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/mask/mask_first_n",draft:!1,tags:[],version:"1.2",frontMatter:{title:"mask_first_n",language:"zh-CN"},sidebar:"docs",previous:{title:"mask",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/mask/"},next:{title:"mask_last_n",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/mask/mask_last_n"}},l={},c=[{value:"mask_first_n",id:"mask_first_n",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},m="wrapper";function f(n){let{components:e,...t}=n;return(0,s.kt)(m,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"mask_first_n"},"mask_first_n"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("h4",{id:"syntax"},"syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"VARCHAR mask_first_n(VARCHAR str[, INT n])")),(0,s.kt)("p",null,'\u8fd4\u56de\u5e26\u6709\u63a9\u7801\u7684\u524d n \u4e2a\u503c\u7684 str \u7684\u63a9\u7801\u7248\u672c\u3002 \u5927\u5199\u5b57\u6bcd\u8f6c\u6362\u4e3a\u201cX\u201d\uff0c\u5c0f\u5199\u5b57\u6bcd\u8f6c\u6362\u4e3a\u201cx\u201d\uff0c\u6570\u5b57\u8f6c\u6362\u4e3a\u201cn\u201d\u3002 \u4f8b\u5982\uff0cmask_first_n("1234-5678-8765-4321", 4) \u7ed3\u679c\u4e3a nnnn-5678-8765-4321\u3002'),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"// table test\n+-----------+\n| name      |\n+-----------+\n| abc123EFG |\n| NULL      |\n| 456AbCdEf |\n+-----------+\n\nmysql> select mask_first_n(name, 5) from test;\n+-------------------------+\n| mask_first_n(`name`, 5) |\n+-------------------------+\n| xxxnn3EFG               |\n| NULL                    |\n| nnnXxCdEf               |\n+-------------------------+\n")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mask_first_n\n")))}f.isMDXComponent=!0}}]);