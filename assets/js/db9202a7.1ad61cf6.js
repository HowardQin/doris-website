"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[90957],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},S=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),S=n,d=m["".concat(s,".").concat(S)]||m[S]||u[S]||l;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=S;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}S.displayName="MDXCreateElement"},92716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"SHOW-SNAPSHOT",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT",title:"SHOW-SNAPSHOT",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-SNAPSHOT",language:"en"},sidebar:"docs",previous:{title:"SHOW-PARTITION-ID",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-PARTITION-ID"},next:{title:"SHOW-SQL-BLOCK-RULE",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE"}},s={},p=[{value:"SHOW-SNAPSHOT",id:"show-snapshot",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"show-snapshot"},"SHOW-SNAPSHOT"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"SHOW SNAPSHOT"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"This statement is used to view backups that already exist in the repository."),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW SNAPSHOT ON `repo_name`\n[WHERE SNAPSHOT = "snapshot" [AND TIMESTAMP = "backup_timestamp"]];\n')),(0,n.kt)("p",null,"illustrate:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The meanings of the columns are as follows:\nSnapshot: The name of the backup\nTimestamp: corresponds to the time version of the backup\nStatus: If the backup is normal, it will display OK, otherwise it will display an error message"),(0,n.kt)("li",{parentName:"ol"},"If TIMESTAMP is specified, the following additional information is displayed:\nDatabase: The name of the database to which the backup data originally belonged\nDetails: In the form of Json, the data directory and file structure of the entire backup are displayed")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"View the existing backups in the repository example_repo"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW SNAPSHOT ON example_repo;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"View only the backup named backup1 in the repository example_repo:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW SNAPSHOT ON example_repo WHERE SNAPSHOT = "backup1";\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'View the details of the backup named backup1 in the warehouse example_repo with the time version "2018-05-05-15-34-26":'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW SNAPSHOT ON example_repo\nWHERE SNAPSHOT = "backup1" AND TIMESTAMP = "2018-05-05-15-34-26";\n')))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SHOW, SNAPSHOT\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);