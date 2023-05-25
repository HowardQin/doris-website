"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[22216],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"char",language:"zh-CN"},c=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/char",id:"sql-manual/sql-functions/string-functions/char",title:"char",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/char.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/char",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/char",draft:!1,tags:[],version:"current",frontMatter:{title:"char",language:"zh-CN"},sidebar:"docs",previous:{title:"reverse",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/reverse"},next:{title:"concat",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/concat"}},i={},s=[{value:"function char",id:"function-char",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("version",{since:"1.2"},(0,a.kt)("h2",{id:"function-char"},"function char"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR char(INT,..., [USING charset_name])")),(0,a.kt)("p",null,"\u5c06\u6bcf\u4e2a\u53c2\u6570\u89e3\u91ca\u4e3a\u6574\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8be5\u5b57\u7b26\u4e32\u7531\u8fd9\u4e9b\u6574\u6570\u7684\u4ee3\u7801\u503c\u7ed9\u51fa\u7684\u5b57\u7b26\u7ec4\u6210\u3002\u5ffd\u7565",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u7ed3\u679c\u5b57\u7b26\u4e32\u5bf9\u4e8e\u7ed9\u5b9a\u5b57\u7b26\u96c6\u662f\u975e\u6cd5\u7684\uff0c\u76f8\u5e94\u7684\u8f6c\u6362\u7ed3\u679c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.kt)("p",null,"\u5927\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"255")," \u7684\u53c2\u6570\u5c06\u8f6c\u6362\u4e3a\u591a\u4e2a\u7ed3\u679c\u5b57\u8282\u3002\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"char(15049882)"),"\u7b49\u4ef7\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"char(229, 164, 154)"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"charset_name"),"\u76ee\u524d\u53ea\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"utf8"),"\u3002")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select char(68, 111, 114, 105, 115);\n+--------------------------------------+\n| char('utf8', 68, 111, 114, 105, 115) |\n+--------------------------------------+\n| Doris                                |\n+--------------------------------------+\n\nmysql> select char(15049882, 15179199, 14989469);\n+--------------------------------------------+\n| char('utf8', 15049882, 15179199, 14989469) |\n+--------------------------------------------+\n| \u591a\u777f\u4e1d                                     |\n+--------------------------------------------+\n\nmysql> select char(255);\n+-------------------+\n| char('utf8', 255) |\n+-------------------+\n| NULL              |\n+-------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CHAR\n")))}f.isMDXComponent=!0}}]);