"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28647],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),E=n,d=u["".concat(s,".").concat(E)]||u[E]||m[E]||l;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=E;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}E.displayName="MDXCreateElement"},80094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"ALTER-SYSTEM-MODIFY-BACKEND",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",id:"version-1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",title:"ALTER-SYSTEM-MODIFY-BACKEND",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND.md",sourceDirName:"sql-manual/sql-reference/Cluster-Management-Statements",slug:"/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",permalink:"/docs/1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ALTER-SYSTEM-MODIFY-BACKEND",language:"en"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-ADD-OBSERVER",permalink:"/docs/1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-OBSERVER"},next:{title:"ALTER-SYSTEM-ADD-FOLLOWER",permalink:"/docs/1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-FOLLOWER"}},s={},p=[{value:"ALTER-SYSTEM-MODIFY-BACKEND",id:"alter-system-modify-backend",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"alter-system-modify-backend"},"ALTER-SYSTEM-MODIFY-BACKEND"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"ALTER SYSTEM MKDIFY BACKEND"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"Modify BE node properties (administrator only!)"),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host:heartbeat_port" SET ("key" = "value"[, ...]);\n')),(0,n.kt)("p",null,"  illustrate:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"host can be a hostname or an ip address"),(0,n.kt)("li",{parentName:"ol"},"heartbeat_port is the heartbeat port of the node"),(0,n.kt)("li",{parentName:"ol"},"Modify BE node properties The following properties are currently supported:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"tag.xxxx: resource tag"),(0,n.kt)("li",{parentName:"ul"},"disable_query: query disable attribute"),(0,n.kt)("li",{parentName:"ul"},"disable_load: import disable attribute")),(0,n.kt)("p",null,"Note:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'A backend can be set multi resource tags. But must contain "tag.location" type.')),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Modify the resource tag of BE"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a");\nALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a", "tag.compute" = "c1");\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Modify the query disable property of BE"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_query" = "true");\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Modify the import disable property of BE"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_load" = "true");\n')))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ALTER, SYSTEM, ADD, BACKEND, ALTER SYSTEM\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);