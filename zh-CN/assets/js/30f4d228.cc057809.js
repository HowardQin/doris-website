"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[15159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>R});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(n),N=a,R=u["".concat(c,".").concat(N)]||u[N]||m[N]||l;return n?r.createElement(R,o(o({ref:t},s),{},{components:n})):r.createElement(R,o({ref:t},s))}));function R(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=N;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},23789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={title:"GRANT",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/GRANT",id:"version-1.2/sql-manual/sql-reference/Account-Management-Statements/GRANT",title:"GRANT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Account-Management-Statements/GRANT.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/GRANT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/GRANT",draft:!1,tags:[],version:"1.2",frontMatter:{title:"GRANT",language:"zh-CN"},sidebar:"docs",previous:{title:"REVOKE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/REVOKE"},next:{title:"LDAP",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/LDAP"}},c={},i=[{value:"GRANT",id:"grant",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"grant"},"GRANT"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"GRANT"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"GRANT \u547d\u4ee4\u6709\u5982\u4e0b\u529f\u80fd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c06\u6307\u5b9a\u7684\u6743\u9650\u6388\u4e88\u67d0\u7528\u6237\u6216\u89d2\u8272\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u6307\u5b9a\u89d2\u8272\u6388\u4e88\u67d0\u7528\u6237\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},'2.0\u53ca\u4e4b\u540e\u7248\u672c\u652f\u6301"\u5c06\u6307\u5b9a\u89d2\u8272\u6388\u4e88\u7528\u6237"')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT privilege_list ON priv_level TO user_identity [ROLE role_name]\n\nGRANT privilege_list ON RESOURCE resource_name TO user_identity [ROLE role_name]\n\nGRANT role_list TO user_identity\n")),(0,a.kt)("p",null,"privilege_list \u662f\u9700\u8981\u8d4b\u4e88\u7684\u6743\u9650\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002\u5f53\u524d Doris \u652f\u6301\u5982\u4e0b\u6743\u9650\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NODE_PRIV\uff1a\u96c6\u7fa4\u8282\u70b9\u64cd\u4f5c\u6743\u9650\uff0c\u5305\u62ec\u8282\u70b9\u4e0a\u4e0b\u7ebf\u7b49\u64cd\u4f5c\uff0c\u53ea\u6709 root \u7528\u6237\u6709\u8be5\u6743\u9650\uff0c\u4e0d\u53ef\u8d4b\u4e88\u5176\u4ed6\u7528\u6237\u3002\nADMIN_PRIV\uff1a\u9664 NODE_PRIV \u4ee5\u5916\u7684\u6240\u6709\u6743\u9650\u3002\nGRANT_PRIV: \u64cd\u4f5c\u6743\u9650\u7684\u6743\u9650\u3002\u5305\u62ec\u521b\u5efa\u5220\u9664\u7528\u6237\u3001\u89d2\u8272\uff0c\u6388\u6743\u548c\u64a4\u6743\uff0c\u8bbe\u7f6e\u5bc6\u7801\u7b49\u3002\nSELECT_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u8bfb\u53d6\u6743\u9650\nLOAD_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u5bfc\u5165\u6743\u9650\nALTER_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684schema\u53d8\u66f4\u6743\u9650\nCREATE_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u521b\u5efa\u6743\u9650\nDROP_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u5220\u9664\u6743\u9650\nUSAGE_PRIV: \u5bf9\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\n\n\u65e7\u7248\u6743\u9650\u4e2d\u7684 ALL \u548c READ_WRITE \u4f1a\u88ab\u8f6c\u6362\u6210\uff1aSELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV\uff1b\nREAD_ONLY \u4f1a\u88ab\u8f6c\u6362\u4e3a SELECT_PRIV\u3002\n")),(0,a.kt)("p",null,"\u6743\u9650\u5206\u7c7b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u8282\u70b9\u6743\u9650\uff1aNODE_PRIV\n2. \u5e93\u8868\u6743\u9650\uff1aSELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV\n3. \u8d44\u6e90\u6743\u9650\uff1aUSAGE_PRIV\n")),(0,a.kt)("p",null,"priv_level \u652f\u6301\u4ee5\u4e0b\u56db\u79cd\u5f62\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. *.*.* \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6240\u6709catalog\u53ca\u5176\u4e2d\u7684\u6240\u6709\u5e93\u8868\n2. ctl.*.* \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9acatalog\u4e2d\u7684\u6240\u6709\u5e93\u8868\n3. ctl.db.* \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a\u5e93\u4e0b\u7684\u6240\u6709\u8868\n4. ctl.db.tbl \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a\u5e93\u4e0b\u7684\u6307\u5b9a\u8868\n\n\u8fd9\u91cc\u6307\u5b9a\u7684ctl\u6216\u5e93\u6216\u8868\u53ef\u4ee5\u662f\u4e0d\u5b58\u5728\u7684\u5e93\u548c\u8868\u3002\n")),(0,a.kt)("p",null,"resource_name \u652f\u6301\u4ee5\u4e0b\u4e24\u79cd\u5f62\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. * \u6743\u9650\u5e94\u7528\u4e8e\u6240\u6709\u8d44\u6e90\n2. resource \u6743\u9650\u5e94\u7528\u4e8e\u6307\u5b9a\u8d44\u6e90\n\n\u8fd9\u91cc\u6307\u5b9a\u7684\u8d44\u6e90\u53ef\u4ee5\u662f\u4e0d\u5b58\u5728\u7684\u8d44\u6e90\u3002\n")),(0,a.kt)("p",null,"user_identity\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8fd9\u91cc\u7684 user_identity \u8bed\u6cd5\u540c CREATE USER\u3002\u4e14\u5fc5\u987b\u4e3a\u4f7f\u7528 CREATE USER \u521b\u5efa\u8fc7\u7684 user_identity\u3002user_identity \u4e2d\u7684host\u53ef\u4ee5\u662f\u57df\u540d\uff0c\u5982\u679c\u662f\u57df\u540d\u7684\u8bdd\uff0c\u6743\u9650\u7684\u751f\u6548\u65f6\u95f4\u53ef\u80fd\u4f1a\u67091\u5206\u949f\u5de6\u53f3\u7684\u5ef6\u8fdf\u3002\n\n\u4e5f\u53ef\u4ee5\u5c06\u6743\u9650\u8d4b\u4e88\u6307\u5b9a\u7684 ROLE\uff0c\u5982\u679c\u6307\u5b9a\u7684 ROLE \u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u3002\n")),(0,a.kt)("p",null,"role_list \u662f\u9700\u8981\u8d4b\u4e88\u7684\u89d2\u8272\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\uff0c\u6307\u5b9a\u7684\u89d2\u8272\u5fc5\u987b\u5b58\u5728\u3002"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6388\u4e88\u6240\u6709catalog\u548c\u5e93\u8868\u7684\u6743\u9650\u7ed9\u7528\u6237"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT_PRIV ON *.*.* TO 'jack'@'%';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u5e93\u8868\u7684\u6743\u9650\u7ed9\u7528\u6237"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON ctl1.db1.tbl1 TO 'jack'@'192.8.%';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u5e93\u8868\u7684\u6743\u9650\u7ed9\u89d2\u8272"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT LOAD_PRIV ON ctl1.db1.* TO ROLE 'my_role';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6388\u4e88\u6240\u6709\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u7528\u6237"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u7528\u6237"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u89d2\u8272"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u6307\u5b9a\u89d2\u8272\u6388\u4e88\u67d0\u7528\u6237"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT 'role1','role2' TO 'jack'@'%';\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GRANT\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);