"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[74930],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>_});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),y=l,_=p["".concat(s,".").concat(y)]||p[y]||m[y]||o;return t?r.createElement(_,a(a({ref:n},c),{},{components:t})):r.createElement(_,a({ref:n},c))}));function _(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},15696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(87462),l=(t(67294),t(3905));const o={title:"not_null_or_empty",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/not_null_or_empty",id:"sql-manual/sql-functions/string-functions/not_null_or_empty",title:"not_null_or_empty",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/not_null_or_empty.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/not_null_or_empty",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/not_null_or_empty",draft:!1,tags:[],version:"current",frontMatter:{title:"not_null_or_empty",language:"en"},sidebar:"docs",previous:{title:"null_or_empty",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/null_or_empty"},next:{title:"hex",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/hex"}},s={},u=[{value:"not_null_or_empty",id:"not_null_or_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"not_null_or_empty"},"not_null_or_empty"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BOOLEAN NOT_NULL_OR_EMPTY (VARCHAR str)")),(0,l.kt)("p",null,"It returns false if the string is an empty string or NULL. Otherwise it returns true."),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MySQL [(none)]> select not_null_or_empty(null);\n+-------------------------+\n| not_null_or_empty(NULL) |\n+-------------------------+\n|                       0 |\n+-------------------------+\n\nMySQL [(none)]> select not_null_or_empty(\"\");\n+-----------------------+\n| not_null_or_empty('') |\n+-----------------------+\n|                     0 |\n+-----------------------+\n\nMySQL [(none)]> select not_null_or_empty(\"a\");\n+------------------------+\n| not_null_or_empty('a') |\n+------------------------+\n|                      1 |\n+------------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NOT_NULL_OR_EMPTY\n")))}m.isMDXComponent=!0}}]);