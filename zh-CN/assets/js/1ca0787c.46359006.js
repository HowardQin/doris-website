"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[28116],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=l,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},80595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),l=(t(67294),t(3905));const a={title:"lpad",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/lpad",id:"version-1.2/sql-manual/sql-functions/string-functions/lpad",title:"lpad",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/lpad.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/lpad",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/lpad",draft:!1,tags:[],version:"1.2",frontMatter:{title:"lpad",language:"zh-CN"},sidebar:"docs",previous:{title:"char_length",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/char_length"},next:{title:"rpad",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/rpad"}},s={},c=[{value:"lpad",id:"lpad",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"lpad"},"lpad"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR lpad(VARCHAR str, INT len, VARCHAR pad)")),(0,l.kt)("p",null,"\u8fd4\u56de str \u4e2d\u957f\u5ea6\u4e3a len\uff08\u4ece\u9996\u5b57\u6bcd\u5f00\u59cb\u7b97\u8d77\uff09\u7684\u5b57\u7b26\u4e32\u3002\u5982\u679c len \u5927\u4e8e str \u7684\u957f\u5ea6\uff0c\u5219\u5728 str \u7684\u524d\u9762\u4e0d\u65ad\u8865\u5145 pad \u5b57\u7b26\uff0c\u76f4\u5230\u8be5\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u8fbe\u5230 len \u4e3a\u6b62\u3002\u5982\u679c len \u5c0f\u4e8e str \u7684\u957f\u5ea6\uff0c\u8be5\u51fd\u6570\u76f8\u5f53\u4e8e\u622a\u65ad str \u5b57\u7b26\u4e32\uff0c\u53ea\u8fd4\u56de\u957f\u5ea6\u4e3a len \u7684\u5b57\u7b26\u4e32\u3002len \u6307\u7684\u662f\u5b57\u7b26\u957f\u5ea6\u800c\u4e0d\u662f\u5b57\u8282\u957f\u5ea6\u3002"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> SELECT lpad(\"hi\", 5, \"xy\");\n+---------------------+\n| lpad('hi', 5, 'xy') |\n+---------------------+\n| xyxhi               |\n+---------------------+\n\nmysql> SELECT lpad(\"hi\", 1, \"xy\");\n+---------------------+\n| lpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"LPAD\n")))}d.isMDXComponent=!0}}]);