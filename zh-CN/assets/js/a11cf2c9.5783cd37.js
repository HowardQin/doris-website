"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[17049],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(t),m=l,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:l,a[1]=s;for(var i=2;i<o;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=t(87462),l=(t(67294),t(3905));const o={title:"explode_numbers",language:"zh-CN"},a=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/explode-numbers",id:"sql-manual/sql-functions/table-functions/explode-numbers",title:"explode_numbers",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/explode-numbers.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode-numbers",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers",draft:!1,tags:[],version:"current",frontMatter:{title:"explode_numbers",language:"zh-CN"},sidebar:"docs",previous:{title:"numbers",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/numbers"},next:{title:"s3",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/s3"}},u={},i=[{value:"explode_numbers",id:"explode_numbers",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"explode_numbers"},"explode_numbers"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("p",null,"\u8868\u51fd\u6570\uff0c\u9700\u914d\u5408 Lateral View \u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u83b7\u5f97\u4e00\u4e2a[0,n)\u7684\u5e8f\u5217\u3002"),(0,l.kt)("h4",{id:"syntax"},"syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"explode_numbers(n)")),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select e1 from (select 1 k1) as t lateral view explode_numbers(5) tmp1 as e1;\n+------+\n| e1   |\n+------+\n|    0 |\n|    1 |\n|    2 |\n|    3 |\n|    4 |\n+------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"explode,numbers,explode_numbers"))}d.isMDXComponent=!0}}]);