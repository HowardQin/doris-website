"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,b=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"bitmap_has_any",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_has_any",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_any",title:"bitmap_has_any",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_any.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_has_any",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_any",draft:!1,tags:[],version:"1.2",frontMatter:{title:"bitmap_has_any",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_has_all",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_all"},next:{title:"bitmap_max",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_max"}},s={},p=[{value:"bitmap_has_any",id:"bitmap_has_any",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bitmap_has_any"},"bitmap_has_any"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BOOLEAN BITMAP_HAS_ANY(BITMAP lhs, BITMAP rhs)")),(0,r.kt)("p",null,"\u8ba1\u7b97\u4e24\u4e2aBitmap\u5217\u662f\u5426\u5b58\u5728\u76f8\u4ea4\u5143\u7d20\uff0c\u8fd4\u56de\u503c\u662fBoolean\u503c. "),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select bitmap_has_any(to_bitmap(1),to_bitmap(2)) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nmysql> select bitmap_has_any(to_bitmap(1),to_bitmap(1)) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BITMAP_HAS_ANY,BITMAP\n")))}m.isMDXComponent=!0}}]);