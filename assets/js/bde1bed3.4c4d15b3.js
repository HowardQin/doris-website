"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[27387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"bitmap_union",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_union",id:"sql-manual/sql-functions/bitmap-functions/bitmap_union",title:"bitmap_union",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitmap-functions/bitmap_union.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_union",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_union",draft:!1,tags:[],version:"current",frontMatter:{title:"bitmap_union",language:"en"},sidebar:"docs",previous:{title:"bitmap_and",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_and"},next:{title:"bitmap_xor",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_xor"}},u={},p=[{value:"bitmap_union function",id:"bitmap_union-function",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bitmap_union-function"},"bitmap_union function"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"Aggregate function, used to calculate the grouped bitmap union. Common usage scenarios such as: calculating PV, UV."),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_UNION(BITMAP value)")),(0,i.kt)("p",null,"Enter a set of bitmap values, find the union of this set of bitmap values, and return."),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select page_id, bitmap_union(user_id) from table group by page_id;\n")),(0,i.kt)("p",null,"Combined with the bitmap_count function, the PV data of the web page can be obtained"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select page_id, bitmap_count(bitmap_union(user_id)) from table group by page_id;\n")),(0,i.kt)("p",null,"When the user_id field is int, the above query semantics is equivalent to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select page_id, count(distinct user_id) from table group by page_id;\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BITMAP_UNION, BITMAP\n")))}m.isMDXComponent=!0}}]);