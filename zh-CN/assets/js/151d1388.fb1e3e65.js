"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66319],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(f,l(l({ref:n},c),{},{components:r})):t.createElement(f,l({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92693:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=r(87462),a=(r(67294),r(3905));const o={title:"round_bankers",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/math-functions/round_bankers",id:"version-1.2/sql-manual/sql-functions/math-functions/round_bankers",title:"round_bankers",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/math-functions/round_bankers.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/round_bankers",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/round_bankers",draft:!1,tags:[],version:"1.2",frontMatter:{title:"round_bankers",language:"zh-CN"},sidebar:"docs",previous:{title:"round",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/round"},next:{title:"truncate",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/truncate"}},i={},u=[{value:"round_bankers",id:"round_bankers",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},d="wrapper";function p(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"round_bankers"},"round_bankers"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"T round_bankers(T x[, d])"),"\n\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u4f7f\u7528\u94f6\u884c\u5bb6\u820d\u5165\u6cd5\u540e\uff0c\u4fdd\u7559d\u4f4d\u5c0f\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"d"),"\u9ed8\u8ba4\u4e3a0\u3002\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"d"),"\u4e3a\u8d1f\u6570\uff0c\u5219\u5c0f\u6570\u70b9\u5de6\u8fb9",(0,a.kt)("inlineCode",{parentName:"p"},"d"),"\u4f4d\u4e3a0\u3002\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"d"),"\u4e3anull\uff0c\u8fd4\u56denull\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u820d\u5165\u6570\u4ecb\u4e8e\u4e24\u4e2a\u6570\u5b57\u4e4b\u95f4\uff0c\u5219\u8be5\u51fd\u6570\u4f7f\u7528\u94f6\u884c\u5bb6\u7684\u820d\u5165"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u8be5\u51fd\u6570\u5c06\u6570\u5b57\u56db\u820d\u4e94\u5165\u5230\u6700\u63a5\u8fd1\u7684\u6574\u6570\u3002")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select round_bankers(0.4);\n+--------------------+\n| round_bankers(0.4) |\n+--------------------+\n|                  0 |\n+--------------------+\nmysql> select round_bankers(-3.5);\n+---------------------+\n| round_bankers(-3.5) |\n+---------------------+\n|                  -4 |\n+---------------------+\nmysql> select round_bankers(-3.4);\n+---------------------+\n| round_bankers(-3.4) |\n+---------------------+\n|                  -3 |\n+---------------------+\nmysql> select round_bankers(10.755, 2);\n+--------------------------+\n| round_bankers(10.755, 2) |\n+--------------------------+\n|                    10.76 |\n+--------------------------+\nmysql> select round_bankers(1667.2725, 2);\n+-----------------------------+\n| round_bankers(1667.2725, 2) |\n+-----------------------------+\n|                     1667.27 |\n+-----------------------------+\nmysql> select round_bankers(1667.2725, -2);\n+------------------------------+\n| round_bankers(1667.2725, -2) |\n+------------------------------+\n|                         1700 |\n+------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"round_bankers\n")))}p.isMDXComponent=!0}}]);