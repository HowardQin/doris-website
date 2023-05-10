"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[81970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>L});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,L=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(L,o(o({ref:t},c),{},{components:a})):n.createElement(L,o({ref:t},c))}));function L(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"CANCEL-LOAD",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",title:"CANCEL-LOAD",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CANCEL-LOAD",language:"en"},sidebar:"docs",previous:{title:"ALTER-ROUTINE-LOAD",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD"},next:{title:"RESUME-ROUTINE-LOAD",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD"}},s={},p=[{value:"CANCEL-LOAD",id:"cancel-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cancel-load"},"CANCEL-LOAD"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CANCEL LOAD"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to undo an import job for the specified label. Or batch undo import jobs via fuzzy matching"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\n[FROM db_name]\nWHERE [LABEL = "load_label" | LABEL like "label_pattern" | STATE = "PENDING/ETL/LOADING"]\n')),(0,r.kt)("p",null,"Notice: Cancel by State is supported since 1.2.0."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cancel the import job whose label is ",(0,r.kt)("inlineCode",{parentName:"p"},"example_db_test_load_label")," on the database example_db"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE LABEL = "example_db_test_load_label";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cancel all import jobs containing example",(0,r.kt)("em",{parentName:"p"}," on the database example"),"db."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE LABEL like "example_";\n')))),(0,r.kt)("version",{since:"1.2.0"},(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Cancel all import jobs which state are "LOADING"'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE STATE = "loading";\n'))))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," CANCEL, LOAD\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Only pending import jobs in PENDING, ETL, LOADING state can be canceled."),(0,r.kt)("li",{parentName:"ol"},"When performing batch undo, Doris does not guarantee the atomic undo of all corresponding import jobs. That is, it is possible that only some of the import jobs were successfully undone. The user can view the job status through the SHOW LOAD statement and try to execute the CANCEL LOAD statement repeatedly.")))}u.isMDXComponent=!0}}]);