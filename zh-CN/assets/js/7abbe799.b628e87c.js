"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"CAST",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/cast",id:"version-1.2/sql-manual/sql-functions/cast",title:"CAST",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/cast.md",sourceDirName:"sql-manual/sql-functions",slug:"/sql-manual/sql-functions/cast",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/cast",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CAST",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-WINDOW-FUNNEL",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL"},next:{title:"DIGITAL-MASKING",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/digital-masking"}},i={},c=[{value:"CAST",id:"cast",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cast"},"CAST"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"T cast (input as Type)")),(0,a.kt)("p",null,"\u5c06 input \u8f6c\u6210 \u6307\u5b9a\u7684 Type\u7c7b\u578b"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5e38\u91cf\uff0c\u6216\u8868\u4e2d\u67d0\u5217")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select cast (1 as BIGINT);\n+-------------------+\n| CAST(1 AS BIGINT) |\n+-------------------+\n|                 1 |\n+-------------------+\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5bfc\u5165\u7684\u539f\u59cb\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(tmp_k1 as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u6ce8\uff1a\u5728\u5bfc\u5165\u4e2d\uff0c\u7531\u4e8e\u539f\u59cb\u7c7b\u578b\u5747\u4e3aString\uff0c\u5c06\u503c\u4e3a\u6d6e\u70b9\u7684\u539f\u59cb\u6570\u636e\u505a cast\u7684\u65f6\u5019\u6570\u636e\u4f1a\u88ab\u8f6c\u6362\u6210 NULL \uff0c\u6bd4\u5982 12.0 \u3002Doris\u76ee\u524d\u4e0d\u4f1a\u5bf9\u539f\u59cb\u6570\u636e\u505a\u622a\u65ad\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u5f3a\u5236\u5c06\u8fd9\u79cd\u7c7b\u578b\u7684\u539f\u59cb\u6570\u636e cast to int \u7684\u8bdd\u3002\u8bf7\u770b\u4e0b\u9762\u5199\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(cast(tmp_k1 as DOUBLE) as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n\nmysql> select cast(cast ("11.2" as double) as bigint);\n+----------------------------------------+\n| CAST(CAST(\'11.2\' AS DOUBLE) AS BIGINT) |\n+----------------------------------------+\n|                                     11 |\n+----------------------------------------+\n1 row in set (0.00 sec)\n')),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"CAST"))}d.isMDXComponent=!0}}]);