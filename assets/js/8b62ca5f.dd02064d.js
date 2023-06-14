"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=l,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42321:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(87462),l=(t(67294),t(3905));const i={title:"nullif",language:"en"},o=void 0,a={unversionedId:"sql-manual/sql-functions/conditional-functions/nullif",id:"version-1.2/sql-manual/sql-functions/conditional-functions/nullif",title:"nullif",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/conditional-functions/nullif.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/nullif",permalink:"/docs/1.2/sql-manual/sql-functions/conditional-functions/nullif",draft:!1,tags:[],version:"1.2",frontMatter:{title:"nullif",language:"en"},sidebar:"docs",previous:{title:"nvl",permalink:"/docs/1.2/sql-manual/sql-functions/conditional-functions/nvl"},next:{title:"jsonb_parse",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_parse"}},s={},u=[{value:"nullif",id:"nullif",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"nullif"},"nullif"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nullif(expr1, expr2)")),(0,l.kt)("p",null,"If the two parameters are equal, null is returned. Otherwise, the value of the first parameter is returned. It has the same effect as the following ",(0,l.kt)("inlineCode",{parentName:"p"},"case when")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CASE\n     WHEN expr1 = expr2 THEN NULL\n     ELSE expr1\nEND\n")),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select nullif(1,1);\n+--------------+\n| nullif(1, 1) |\n+--------------+\n|         NULL |\n+--------------+\n\nmysql> select nullif(1,0);\n+--------------+\n| nullif(1, 0) |\n+--------------+\n|            1 |\n+--------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"NULLIF"))}f.isMDXComponent=!0}}]);