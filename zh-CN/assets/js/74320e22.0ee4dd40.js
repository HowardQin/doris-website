"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[90987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"SHOW-BACKUP",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",id:"sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",title:"SHOW-BACKUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-BACKUP",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-ALTER",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER"},next:{title:"SHOW-BACKENDS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS"}},c={},s=[{value:"SHOW-BACKUP",id:"show-backup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-backup"},"SHOW-BACKUP"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW BACKUP"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b BACKUP \u4efb\u52a1"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," SHOW BACKUP [FROM db_name]\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    1. Doris \u4e2d\u4ec5\u4fdd\u5b58\u6700\u8fd1\u4e00\u6b21 BACKUP \u4efb\u52a1\u3002\n    2. \u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a\n        JobId\uff1a                  \u552f\u4e00\u4f5c\u4e1aid\n        SnapshotName\uff1a           \u5907\u4efd\u7684\u540d\u79f0\n        DbName\uff1a                 \u6240\u5c5e\u6570\u636e\u5e93\n        State\uff1a                  \u5f53\u524d\u9636\u6bb5\n            PENDING\uff1a        \u63d0\u4ea4\u4f5c\u4e1a\u540e\u7684\u521d\u59cb\u72b6\u6001\n            SNAPSHOTING\uff1a    \u6267\u884c\u5feb\u7167\u4e2d\n            UPLOAD_SNAPSHOT\uff1a\u5feb\u7167\u5b8c\u6210\uff0c\u51c6\u5907\u4e0a\u4f20\n            UPLOADING\uff1a      \u5feb\u7167\u4e0a\u4f20\u4e2d\n            SAVE_META\uff1a      \u5c06\u4f5c\u4e1a\u5143\u4fe1\u606f\u4fdd\u5b58\u4e3a\u672c\u5730\u6587\u4ef6\n            UPLOAD_INFO\uff1a    \u4e0a\u4f20\u4f5c\u4e1a\u5143\u4fe1\u606f\n            FINISHED\uff1a       \u4f5c\u4e1a\u6210\u529f\n            CANCELLED\uff1a      \u4f5c\u4e1a\u5931\u8d25\n        BackupObjs\uff1a             \u5907\u4efd\u7684\u8868\u548c\u5206\u533a\n        CreateTime\uff1a             \u4efb\u52a1\u63d0\u4ea4\u65f6\u95f4\n        SnapshotFinishedTime\uff1a   \u5feb\u7167\u5b8c\u6210\u65f6\u95f4\n        UploadFinishedTime\uff1a     \u5feb\u7167\u4e0a\u4f20\u5b8c\u6210\u65f6\u95f4\n        FinishedTime\uff1a           \u4f5c\u4e1a\u7ed3\u675f\u65f6\u95f4\n        UnfinishedTasks\uff1a        \u5728 SNAPSHOTING \u548c UPLOADING \u9636\u6bb5\u4f1a\u663e\u793a\u8fd8\u672a\u5b8c\u6210\u7684\u5b50\u4efb\u52a1id\n        Status\uff1a                 \u5982\u679c\u4f5c\u4e1a\u5931\u8d25\uff0c\u663e\u793a\u5931\u8d25\u4fe1\u606f\n        Timeout\uff1a                \u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b example_db \u4e0b\u6700\u540e\u4e00\u6b21 BACKUP \u4efb\u52a1\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," SHOW BACKUP FROM example_db;\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, BACKUP\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);