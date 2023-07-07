"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW-BACKENDS",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS",id:"sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS",title:"SHOW-BACKENDS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-BACKENDS",language:"en"},sidebar:"docs",previous:{title:"SHOW-BACKUP",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP"},next:{title:"SHOW-BROKER",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-BROKER"}},l={},c=[{value:"SHOW-BACKENDS",id:"show-backends",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-backends"},"SHOW-BACKENDS"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW BACKENDS"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to view the BE nodes in the cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," SHOW BACKENDS;\n")),(0,a.kt)("p",null,"illustrate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    1. LastStartTime indicates the last BE start time.\n    2. LastHeartbeat indicates the last heartbeat.\n    3. Alive indicates whether the node is alive or not.\n    4. If SystemDecommissioned is true, it means that the node is being safely decommissioned.\n    5. If ClusterDecommissioned is true, it means that the node is going offline in the current cluster.\n    6. TabletNum represents the number of shards on the node.\n    7. DataUsedCapacity Indicates the space occupied by the actual user data.\n    8. AvailCapacity Indicates the available space on the disk.\n    9. TotalCapacity represents the total disk space. TotalCapacity = AvailCapacity + DataUsedCapacity + other non-user data files occupy space.\n   10. UsedPct Indicates the percentage of disk used.\n   11. ErrMsg is used to display the error message when the heartbeat fails.\n   12. Status is used to display some status information of BE in JSON format, including the time information of the last time BE reported its tablet.\n   13. HeartbeatFailureCounter: The current number of heartbeats that have failed consecutively. If the number exceeds the `max_backend_heartbeat_failure_tolerance_count` configuration, the isAlive will be set to false.\n   14. NodeRole is used to display the role of Backend node. Now there are two roles: mix and computation. Mix node represent the origin Backend node and computation Node represent the compute only node.\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, BACKENDS\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);