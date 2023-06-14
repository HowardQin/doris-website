"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[69502],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),y=l,f=p["".concat(a,".").concat(y)]||p[y]||m[y]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},58:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(87462),l=(t(67294),t(3905));const o={title:"null_or_empty",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/null_or_empty",id:"version-1.2/sql-manual/sql-functions/string-functions/null_or_empty",title:"null_or_empty",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/null_or_empty.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/null_or_empty",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/null_or_empty",draft:!1,tags:[],version:"1.2",frontMatter:{title:"null_or_empty",language:"en"},sidebar:"docs",previous:{title:"rtrim",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/rtrim"},next:{title:"not_null_or_empty",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/not_null_or_empty"}},a={},u=[{value:"null_or_empty",id:"null_or_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"null_or_empty"},"null_or_empty"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BOOLEAN NULL_OR_EMPTY (VARCHAR str)")),(0,l.kt)("p",null,"It returns true if the string is an empty string or NULL. Otherwise it returns false."),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MySQL [(none)]> select null_or_empty(null);\n+---------------------+\n| null_or_empty(NULL) |\n+---------------------+\n|                   1 |\n+---------------------+\n\nMySQL [(none)]> select null_or_empty(\"\");\n+-------------------+\n| null_or_empty('') |\n+-------------------+\n|                 1 |\n+-------------------+\n\nMySQL [(none)]> select null_or_empty(\"a\");\n+--------------------+\n| null_or_empty('a') |\n+--------------------+\n|                  0 |\n+--------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NULL_OR_EMPTY\n")))}m.isMDXComponent=!0}}]);