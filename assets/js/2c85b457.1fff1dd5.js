"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68257],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>A});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,A=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(A,l(l({ref:t},c),{},{components:r})):a.createElement(A,l({ref:t},c))}));function A(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"ADMIN-REPAIR-TABLE",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",id:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",title:"ADMIN-REPAIR-TABLE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",draft:!1,tags:[],version:"current",frontMatter:{title:"ADMIN-REPAIR-TABLE",language:"en"},sidebar:"docs",previous:{title:"INSTALL-PLUGIN",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN"},next:{title:"ADMIN-CANCEL-REPAIR",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR"}},s={},p=[{value:"ADMIN-REPAIR-TABLE",id:"admin-repair-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"admin-repair-table"},"ADMIN-REPAIR-TABLE"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"ADMIN REPAIR TABLE"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"statement used to attempt to preferentially repair the specified table or partition"),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ADMIN REPAIR TABLE table_name[ PARTITION (p1,...)]\n")),(0,n.kt)("p",null,"illustrate:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"This statement only means to let the system try to repair the shard copy of the specified table or partition with high priority, and does not guarantee that the repair can be successful. Users can view the repair status through the ADMIN SHOW REPLICA STATUS command."),(0,n.kt)("li",{parentName:"ol"},"The default timeout is 14400 seconds (4 hours). A timeout means that the system will no longer repair shard copies of the specified table or partition with high priority. Need to re-use this command to set")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Attempt to repair the specified table"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"ADMIN REPAIR TABLE tbl1;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Try to repair the specified partition"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n")))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ADMIN, REPAIR, TABLE\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);