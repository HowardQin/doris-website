"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[47839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),E=a,d=m["".concat(s,".").concat(E)]||m[E]||u[E]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=E;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},44002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"CREATE-VIEW",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW",title:"CREATE-VIEW",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-VIEW",language:"en"},sidebar:"docs",previous:{title:"CREATE-POLICY",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY"},next:{title:"CREATE-DATABASE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE"}},s={},c=[{value:"CREATE-VIEW",id:"create-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-view"},"CREATE-VIEW"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"CREATE VIEW"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to create a logical view\ngrammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW [IF NOT EXISTS]\n [db_name.]view_name\n (column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n')),(0,a.kt)("p",null,"illustrate:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Views are logical views and have no physical storage. All queries on the view are equivalent to the sub-queries corresponding to the view."),(0,a.kt)("li",{parentName:"ul"},"query_stmt is any supported SQL")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create the view example_view on example_db"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW example_db.example_view (k1, k2, k3, v1)\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a view with a comment"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW example_db.example_view\n(\n    k1 COMMENT "first key",\n    k2 COMMENT "second key",\n    k3 COMMENT "third key",\n    v1 COMMENT "first value"\n)\nCOMMENT "my first view"\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE, VIEW\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);