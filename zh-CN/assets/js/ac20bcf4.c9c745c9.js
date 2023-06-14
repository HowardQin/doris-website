"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),E=a,f=m["".concat(c,".").concat(E)]||m[E]||u[E]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=E;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},20155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"CREATE-VIEW",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW",title:"CREATE-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-POLICY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY"},next:{title:"CREATE-DATABASE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE"}},c={},s=[{value:"CREATE-VIEW",id:"create-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-view"},"CREATE-VIEW"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"CREATE VIEW"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u903b\u8f91\u89c6\u56fe\n\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW [IF NOT EXISTS]\n [db_name.]view_name\n (column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n')),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u89c6\u56fe\u4e3a\u903b\u8f91\u89c6\u56fe\uff0c\u6ca1\u6709\u7269\u7406\u5b58\u50a8\u3002\u6240\u6709\u5728\u89c6\u56fe\u4e0a\u7684\u67e5\u8be2\u76f8\u5f53\u4e8e\u5728\u89c6\u56fe\u5bf9\u5e94\u7684\u5b50\u67e5\u8be2\u4e0a\u8fdb\u884c\u3002"),(0,a.kt)("li",{parentName:"ul"},"query_stmt \u4e3a\u4efb\u610f\u652f\u6301\u7684 SQL")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 example_db \u4e0a\u521b\u5efa\u89c6\u56fe example_view"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW example_db.example_view (k1, k2, k3, v1)\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5305\u542b comment \u7684 view"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW example_db.example_view\n(\n    k1 COMMENT "first key",\n    k2 COMMENT "second key",\n    k3 COMMENT "third key",\n    v1 COMMENT "first value"\n)\nCOMMENT "my first view"\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE, VIEW\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);