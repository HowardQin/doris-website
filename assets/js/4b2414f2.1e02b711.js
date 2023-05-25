"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[15474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=l.createContext({}),p=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return l.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?l.createElement(f,a(a({ref:n},c),{},{components:t})):l.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},24751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var l=t(87462),r=(t(67294),t(3905));const o={title:"explode",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/explode",id:"sql-manual/sql-functions/table-functions/explode",title:"explode",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/table-functions/explode.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode",draft:!1,tags:[],version:"current",frontMatter:{title:"explode",language:"en"},sidebar:"docs",previous:{title:"explode_json_array",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-json-array"},next:{title:"explode_split",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-split"}},i={},p=[{value:"explode",id:"explode",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"explode"},"explode"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"Table functions must be used in conjunction with Lateral View."),(0,r.kt)("p",null,"explode array column to rows. ",(0,r.kt)("inlineCode",{parentName:"p"},"explode_outer")," will return NULL, while ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," is NULL or empty.\n",(0,r.kt)("inlineCode",{parentName:"p"},"explode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"explode_outer")," both keep the nested NULL elements of array."),(0,r.kt)("h4",{id:"syntax"},"syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"explode(expr)\nexplode_outer(expr)\n")),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine = true\n\nmysql> select e1 from (select 1 k1) as t lateral view explode([1,2,3]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n|    1 |\n|    2 |\n|    3 |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_outer(null) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode([]) tmp1 as e1;\nEmpty set (0.010 sec)\n\nmysql> select e1 from (select 1 k1) as t lateral view explode([null,1,null]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n|    1 |\n| NULL |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_outer([null,1,null]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n|    1 |\n| NULL |\n+------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"EXPLODE,EXPLODE_OUTER,ARRAY"))}d.isMDXComponent=!0}}]);