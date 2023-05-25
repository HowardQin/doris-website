"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[54075],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={title:"truncate",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/truncate",id:"sql-manual/sql-functions/math-functions/truncate",title:"truncate",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/math-functions/truncate.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/truncate",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/truncate",draft:!1,tags:[],version:"current",frontMatter:{title:"truncate",language:"zh-CN"},sidebar:"docs",previous:{title:"round_bankers",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/round_bankers"},next:{title:"abs",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/abs"}},c={},u=[{value:"truncate",id:"truncate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"truncate"},"truncate"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DOUBLE truncate(DOUBLE x, INT d)"),"\n\u6309\u7167\u4fdd\u7559\u5c0f\u6570\u7684\u4f4d\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"d"),"\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u8fdb\u884c\u6570\u503c\u622a\u53d6\u3002"),(0,a.kt)("p",null,"\u89c4\u5219\u5982\u4e0b\uff1a\n\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"d > 0"),"\u65f6\uff1a\u4fdd\u7559",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"d"),"\u4f4d\u5c0f\u6570\n\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"d = 0"),"\u65f6\uff1a\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u5c0f\u6570\u90e8\u5206\u53bb\u9664\uff0c\u53ea\u4fdd\u7559\u6574\u6570\u90e8\u5206\n\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"d < 0"),"\u65f6\uff1a\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u5c0f\u6570\u90e8\u5206\u53bb\u9664\uff0c\u6574\u6570\u90e8\u5206\u6309\u7167 ",(0,a.kt)("inlineCode",{parentName:"p"},"d"),"\u6240\u6307\u5b9a\u7684\u4f4d\u6570\uff0c\u91c7\u7528\u6570\u5b57",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u8fdb\u884c\u66ff\u6362"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select truncate(124.3867, 2);\n+-----------------------+\n| truncate(124.3867, 2) |\n+-----------------------+\n|                124.38 |\n+-----------------------+\nmysql> select truncate(124.3867, 0);\n+-----------------------+\n| truncate(124.3867, 0) |\n+-----------------------+\n|                   124 |\n+-----------------------+\nmysql> select truncate(-124.3867, -2);\n+-------------------------+\n| truncate(-124.3867, -2) |\n+-------------------------+\n|                    -100 |\n+-------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TRUNCATE\n")))}d.isMDXComponent=!0}}]);