"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[72304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"RESUME-SYNC-JOB",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB",title:"RESUME-SYNC-JOB",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB",draft:!1,tags:[],version:"current",frontMatter:{title:"RESUME-SYNC-JOB",language:"en"},sidebar:"docs",previous:{title:"MULTI-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD"},next:{title:"CREATE-ROUTINE-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"}},s={},c=[{value:"RESUME-SYNC-JOB",id:"resume-sync-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"resume-sync-job"},"RESUME-SYNC-JOB"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"RESUME SYNC JOB"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Resume a resident data synchronization job whose current database has been suspended by ",(0,r.kt)("inlineCode",{parentName:"p"},"job_name"),", and the job will continue to synchronize data from the latest position before the last suspension."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RESUME SYNC JOB [db.]job_name\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Resume the data synchronization job named ",(0,r.kt)("inlineCode",{parentName:"p"},"job_name")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RESUME SYNC JOB `job_name`;\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"RESUME, SYNC, LOAD\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);