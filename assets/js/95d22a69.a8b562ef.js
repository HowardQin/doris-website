"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[15131],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||s;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const s={title:"find_in_set",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/find_in_set",id:"version-1.2/sql-manual/sql-functions/string-functions/find_in_set",title:"find_in_set",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/find_in_set.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/find_in_set",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/find_in_set",draft:!1,tags:[],version:"1.2",frontMatter:{title:"find_in_set",language:"en"},sidebar:"docs",previous:{title:"field",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/field"},next:{title:"replace",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/replace"}},a={},c=[{value:"find_in_set",id:"find_in_set",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"find_in_set"},"find_in_set"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"INT find_in_set(VARCHAR str, VARCHAR strlist)")),(0,i.kt)("p",null,'"NOT found in set (VARCHAR str., VARCHAR strlist)"'),(0,i.kt)("p",null,"Return to the location where the str first appears in strlist (counting from 1). Strlist is a comma-separated string. If not, return 0. Any parameter is NULL, returning NULL."),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select find_in_set(\"b\", \"a,b,c\");\n+---------------------------+\n| find_in_set('b', 'a,b,c') |\n+---------------------------+\n|                         2 |\n+---------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FIND_IN_SET,FIND,IN,SET\n")))}f.isMDXComponent=!0}}]);