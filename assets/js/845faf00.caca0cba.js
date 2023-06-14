"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[21952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,b=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"bitmap_has_all",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_has_all",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_all",title:"bitmap_has_all",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_all.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_has_all",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_all",draft:!1,tags:[],version:"1.2",frontMatter:{title:"bitmap_has_all",language:"en"},sidebar:"docs",previous:{title:"bitmap_contains",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_contains"},next:{title:"bitmap_has_any",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_any"}},s={},p=[{value:"bitmap_has_all",id:"bitmap_has_all",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bitmap_has_all"},"bitmap_has_all"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BOOLEAN BITMAP_HAS_ALL(BITMAP lhs, BITMAP rhs)")),(0,r.kt)("p",null,"Returns true if the first bitmap contains all the elements of the second bitmap.\nReturns true if the second bitmap contains an empty element."),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> select bitmap_has_all(bitmap_from_string("0, 1, 2"), bitmap_from_string("1, 2")) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nmysql> select bitmap_has_all(bitmap_empty(), bitmap_from_string("1, 2")) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n')),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BITMAP_HAS_ALL,BITMAP\n")))}u.isMDXComponent=!0}}]);