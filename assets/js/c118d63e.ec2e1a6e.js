"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[56232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),A=a,m=d["".concat(o,".").concat(A)]||d[A]||u[A]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=A;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}A.displayName="MDXCreateElement"},50690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"ADMIN-CANCEL-REBALANCE-DISK",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",id:"version-1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",title:"ADMIN-CANCEL-REBALANCE-DISK",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",permalink:"/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ADMIN-CANCEL-REBALANCE-DISK",language:"en"},sidebar:"docs",previous:{title:"ADMIN-REBALANCE-DISK",permalink:"/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK"},next:{title:"SHOW ALTER TABLE MATERIALIZED VIEW",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW"}},o={},c=[{value:"ADMIN-CANCEL-REBALANCE-DISK",id:"admin-cancel-rebalance-disk",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"admin-cancel-rebalance-disk"},"ADMIN-CANCEL-REBALANCE-DISK"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"ADMIN CANCEL REBALANCE DISK"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to cancel rebalancing disks of specified backends with high priority"),(0,a.kt)("p",null,"Grammar:"),(0,a.kt)("p",null,"ADMIN CANCEL REBALANCE DISK ",'[ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)]',";"),(0,a.kt)("p",null,"Explain:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"This statement only indicates that the system no longer rebalance disks of specified backends with high priority. The system will still rebalance disks by default scheduling.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cancel High Priority Disk Rebalance of all of backends of the cluster")),(0,a.kt)("p",null,"ADMIN CANCEL REBALANCE DISK;"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Cancel High Priority Disk Rebalance of specified backends")),(0,a.kt)("p",null,'ADMIN CANCEL REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");'),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("p",null,"ADMIN,CANCEL,REBALANCE DISK"),(0,a.kt)("h3",{id:"best-practice"},"Best Practice")))}u.isMDXComponent=!0}}]);