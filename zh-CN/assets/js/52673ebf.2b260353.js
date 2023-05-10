"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[80508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),s=r,k=c["".concat(p,".").concat(s)]||c[s]||f[s]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"week",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/week",id:"sql-manual/sql-functions/date-time-functions/week",title:"week",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/week.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/week",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/week",draft:!1,tags:[],version:"current",frontMatter:{title:"week",language:"zh-CN"},sidebar:"docs",previous:{title:"dayofweek",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/dayofweek"},next:{title:"weekday",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/weekday"}},p={},d=[{value:"week",id:"week",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:d},c="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"week"},"week"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INT WEEK(DATE date[, INT mode])")),(0,r.kt)("p",null,"\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u7684\u661f\u671f\u6570\u3002mode\u7684\u503c\u9ed8\u8ba4\u4e3a0\u3002\n\u53c2\u6570mode\u7684\u4f5c\u7528\u53c2\u89c1\u4e0b\u9762\u7684\u8868\u683c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u661f\u671f\u7684\u7b2c\u4e00\u5929"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u661f\u671f\u6570\u7684\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7b2c\u4e00\u4e2a\u661f\u671f\u7684\u5b9a\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u65e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u65e5\u6240\u5728\u7684\u661f\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u4e00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u65e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u65e5\u6240\u5728\u7684\u661f\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u4e00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u65e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u4e00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u4e00\u6240\u5728\u7684\u661f\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u65e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u4e00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u4e00\u6240\u5728\u7684\u661f\u671f")))),(0,r.kt)("p",null,"\u53c2\u6570\u4e3aDate\u6216\u8005Datetime\u7c7b\u578b"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select week('2020-1-1');\n+------------------+\n| week('2020-1-1') |\n+------------------+\n|                0 |\n+------------------+\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select week('2020-7-1',1);\n+---------------------+\n| week('2020-7-1', 1) |\n+---------------------+\n|                  27 |\n+---------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"WEEK\n")))}f.isMDXComponent=!0}}]);