"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[81088],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-VARIABLES",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",title:"SHOW-VARIABLES",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-VARIABLES",language:"en"},sidebar:"docs",previous:{title:"SHOW-TABLET",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-TABLET"},next:{title:"SHOW-PLUGINS",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-PLUGINS"}},s={},c=[{value:"SHOW-VARIABLES",id:"show-variables",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-variables"},"SHOW-VARIABLES"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW VARIABLES"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to display Doris system variables, which can be queried by conditions"),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [GLOBAL | SESSION] VARIABLES\n     [LIKE 'pattern' | WHERE expr]\n")),(0,a.kt)("p",null,"illustrate:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"show variables is mainly used to view the values of system variables."),(0,a.kt)("li",{parentName:"ul"},"Executing the SHOW VARIABLES command does not require any privileges, it only requires being able to connect to the server."),(0,a.kt)("li",{parentName:"ul"},"Use the like statement to match with variable_name."),(0,a.kt)("li",{parentName:"ul"},"The % percent wildcard can be used anywhere in the matching pattern")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The default here is to match the Variable_name, here is the exact match"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"show variables like 'max_connections';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Matching through the percent sign (%) wildcard can match multiple items"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"show variables like '%connec%';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the Where clause for matching queries"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"show variables where variable_name = 'version';\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, VARIABLES\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);