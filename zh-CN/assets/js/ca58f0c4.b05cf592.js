"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),g=o,f=c["".concat(l,".").concat(g)]||c[g]||m[g]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},85217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"group_bitmap_xor",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-functions/aggregate-functions/group_bitmap_xor",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor",title:"group_bitmap_xor",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor",draft:!1,tags:[],version:"1.2",frontMatter:{title:"group_bitmap_xor",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_UNION",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/bitmap_union"},next:{title:"group_bit_and",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bit_and"}},l={},u=[{value:"group_bitmap_xor",id:"group_bitmap_xor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"group_bitmap_xor"},"group_bitmap_xor"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BITMAP GROUP_BITMAP_XOR(expr)")),(0,o.kt)("p",null,"\u5bf9expr\u8fdb\u884c xor \u8ba1\u7b97, \u8fd4\u56de\u65b0\u7684bitmap\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql>  select page, bitmap_to_string(user_id) from pv_bitmap;\n+------+-----------------------------+\n| page | bitmap_to_string(`user_id`) |\n+------+-----------------------------+\n| m    | 4,7,8                       |\n| m    | 1,3,6,15                    |\n| m    | 4,7                         |\n+------+-----------------------------+\n\nmysql> select page, bitmap_to_string(group_bitmap_xor(user_id)) from pv_bitmap group by page;\n+------+-----------------------------------------------+\n| page | bitmap_to_string(group_bitmap_xor(`user_id`)) |\n+------+-----------------------------------------------+\n| m    | 1,3,6,8,15                                    |\n+------+-----------------------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GROUP_BITMAP_XOR,BITMAP\n")))}m.isMDXComponent=!0}}]);