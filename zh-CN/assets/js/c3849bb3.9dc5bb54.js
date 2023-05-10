"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[27209],{3905:(e,t,a)=>{a.d(t,{Zo:()=>N,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},N=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,N=p(e,["components","mdxType","originalType","parentName"]),k=o(a),s=r,c=k["".concat(m,".").concat(s)]||k[s]||u[s]||l;return a?n.createElement(c,i(i({ref:t},N),{},{components:a})):n.createElement(c,i({ref:t},N))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},85340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u6743\u9650\u7ba1\u7406",language:"zh-CN"},i=void 0,p={unversionedId:"admin-manual/privilege-ldap/user-privilege",id:"version-1.2/admin-manual/privilege-ldap/user-privilege",title:"\u6743\u9650\u7ba1\u7406",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/privilege-ldap/user-privilege.md",sourceDirName:"admin-manual/privilege-ldap",slug:"/admin-manual/privilege-ldap/user-privilege",permalink:"/zh-CN/docs/1.2/admin-manual/privilege-ldap/user-privilege",draft:!1,tags:[],version:"1.2",frontMatter:{title:"\u6743\u9650\u7ba1\u7406",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7528\u6237\u914d\u7f6e\u9879",permalink:"/zh-CN/docs/1.2/admin-manual/config/user-property"},next:{title:"LDAP",permalink:"/zh-CN/docs/1.2/admin-manual/privilege-ldap/ldap"}},m={},o=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u6743\u9650\u6846\u67b6",id:"\u6743\u9650\u6846\u67b6",level:2},{value:"\u652f\u6301\u7684\u64cd\u4f5c",id:"\u652f\u6301\u7684\u64cd\u4f5c",level:2},{value:"\u6743\u9650\u7c7b\u578b",id:"\u6743\u9650\u7c7b\u578b",level:2},{value:"\u6743\u9650\u5c42\u7ea7",id:"\u6743\u9650\u5c42\u7ea7",level:2},{value:"ADMIN/GRANT \u6743\u9650\u8bf4\u660e",id:"admingrant-\u6743\u9650\u8bf4\u660e",level:2},{value:"\u4e00\u4e9b\u8bf4\u660e",id:"\u4e00\u4e9b\u8bf4\u660e",level:2},{value:"\u884c\u7ea7\u6743\u9650",id:"\u884c\u7ea7\u6743\u9650",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],N={toc:o},k="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6743\u9650\u7ba1\u7406"},"\u6743\u9650\u7ba1\u7406"),(0,r.kt)("p",null,"Doris \u65b0\u7684\u6743\u9650\u7ba1\u7406\u7cfb\u7edf\u53c2\u7167\u4e86 Mysql \u7684\u6743\u9650\u7ba1\u7406\u673a\u5236\uff0c\u505a\u5230\u4e86\u884c\u7ea7\u522b\u7ec6\u7c92\u5ea6\u7684\u6743\u9650\u63a7\u5236\uff0c\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u8bbf\u95ee\u63a7\u5236\uff0c\u5e76\u4e14\u652f\u6301\u767d\u540d\u5355\u673a\u5236\u3002"),(0,r.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u6807\u8bc6 user_identity"),(0,r.kt)("p",{parentName:"li"},"\u5728\u6743\u9650\u7cfb\u7edf\u4e2d\uff0c\u4e00\u4e2a\u7528\u6237\u88ab\u8bc6\u522b\u4e3a\u4e00\u4e2a User Identity\uff08\u7528\u6237\u6807\u8bc6\uff09\u3002\u7528\u6237\u6807\u8bc6\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1ausername \u548c userhost\u3002\u5176\u4e2d username \u4e3a\u7528\u6237\u540d\uff0c\u7531\u82f1\u6587\u5927\u5c0f\u5199\u7ec4\u6210\u3002userhost \u8868\u793a\u8be5\u7528\u6237\u94fe\u63a5\u6765\u81ea\u7684 IP\u3002user_identity \u4ee5 username@'userhost' \u7684\u65b9\u5f0f\u5448\u73b0\uff0c\u8868\u793a\u6765\u81ea userhost \u7684 username\u3002"),(0,r.kt)("p",{parentName:"li"},"user_identity \u7684\u53e6\u4e00\u79cd\u8868\u73b0\u65b9\u5f0f\u4e3a username@","['domain']","\uff0c\u5176\u4e2d domain \u4e3a\u57df\u540d\uff0c\u53ef\u4ee5\u901a\u8fc7 DNS \u6216 BNS\uff08\u767e\u5ea6\u540d\u5b57\u670d\u52a1\uff09\u89e3\u6790\u4e3a\u4e00\u7ec4 ip\u3002\u6700\u7ec8\u8868\u73b0\u4e3a\u4e00\u7ec4 username@'userhost'\uff0c\u6240\u4ee5\u540e\u9762\u6211\u4eec\u7edf\u4e00\u4f7f\u7528 username@'userhost' \u6765\u8868\u793a\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6743\u9650 Privilege"),(0,r.kt)("p",{parentName:"li"},"\u6743\u9650\u4f5c\u7528\u7684\u5bf9\u8c61\u662f\u8282\u70b9\u3001\u6570\u636e\u76ee\u5f55\u3001\u6570\u636e\u5e93\u6216\u8868\u3002\u4e0d\u540c\u7684\u6743\u9650\u4ee3\u8868\u4e0d\u540c\u7684\u64cd\u4f5c\u8bb8\u53ef\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u89d2\u8272 Role"),(0,r.kt)("p",{parentName:"li"},"Doris\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u547d\u540d\u7684\u89d2\u8272\u3002\u89d2\u8272\u53ef\u4ee5\u88ab\u770b\u505a\u662f\u4e00\u7ec4\u6743\u9650\u7684\u96c6\u5408\u3002\u65b0\u521b\u5efa\u7684\u7528\u6237\u53ef\u4ee5\u88ab\u8d4b\u4e88\u67d0\u4e00\u89d2\u8272\uff0c\u5219\u81ea\u52a8\u88ab\u8d4b\u4e88\u8be5\u89d2\u8272\u6240\u62e5\u6709\u7684\u6743\u9650\u3002\u540e\u7eed\u5bf9\u89d2\u8272\u7684\u6743\u9650\u53d8\u66f4\uff0c\u4e5f\u4f1a\u4f53\u73b0\u5728\u6240\u6709\u5c5e\u4e8e\u8be5\u89d2\u8272\u7684\u7528\u6237\u6743\u9650\u4e0a\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u5c5e\u6027 user_property"),(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u5c5e\u6027\u76f4\u63a5\u9644\u5c5e\u4e8e\u67d0\u4e00\u7528\u6237\uff0c\u800c\u4e0d\u662f\u7528\u6237\u6807\u8bc6\u3002\u5373 cmy@'192.%' \u548c cmy@","['domain']"," \u90fd\u62e5\u6709\u540c\u4e00\u7ec4\u7528\u6237\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u5c5e\u4e8e\u7528\u6237 cmy\uff0c\u800c\u4e0d\u662f cmy@'192.%' \u6216 cmy@","['domain']","\u3002"),(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u5c5e\u6027\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a \u7528\u6237\u6700\u5927\u8fde\u63a5\u6570\u3001\u5bfc\u5165\u96c6\u7fa4\u914d\u7f6e\u7b49\u7b49\u3002"))),(0,r.kt)("h2",{id:"\u6743\u9650\u6846\u67b6"},"\u6743\u9650\u6846\u67b6"),(0,r.kt)("p",null,"Doris\u6743\u9650\u8bbe\u8ba1\u57fa\u4e8eRBAC(Role-Based Access Control)\u7684\u6743\u9650\u7ba1\u7406\u6a21\u578b,\u7528\u6237\u548c\u89d2\u8272\u5173\u8054\uff0c\u89d2\u8272\u548c\u6743\u9650\u5173\u8054\uff0c\u7528\u6237\u901a\u8fc7\u89d2\u8272\u95f4\u63a5\u548c\u6743\u9650\u5173\u8054\u3002"),(0,r.kt)("p",null,"\u5f53\u89d2\u8272\u88ab\u5220\u9664\u65f6\uff0c\u7528\u6237\u81ea\u52a8\u5931\u53bb\u8be5\u89d2\u8272\u7684\u6240\u6709\u6743\u9650\u3002"),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u548c\u89d2\u8272\u53d6\u6d88\u5173\u8054\uff0c\u7528\u6237\u81ea\u52a8\u5931\u53bb\u89d2\u8272\u7684\u6240\u6709\u6743\u9650\u3002"),(0,r.kt)("p",null,"\u5f53\u89d2\u8272\u7684\u6743\u9650\u88ab\u589e\u52a0\u6216\u5220\u9664\uff0c\u7528\u6237\u7684\u6743\u9650\u4e5f\u4f1a\u968f\u4e4b\u53d8\u66f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  user1 \u251c\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u25ba  role1 \u251c\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u25ba  priv1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n              \u2502                 \u2502\n              \u2502                 \u2502\n              \u2502   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502\n              \u2502   \u2502  role2 \u251c\u2500\u2500\u2500\u2500\u2524\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  user2 \u251c\u2500\u2500\u2500\u2500\u2518                 \u2502  \u250c\u2500\u25ba  priv2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                      \u2502  \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502  \u2502\n           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u25ba  role3 \u251c\u2500\u2500\u2500\u2500\u2518  \u2502\n           \u2502      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518       \u2502\n           \u2502                       \u2502\n           \u2502                       \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  userN \u251c\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u25ba  roleN \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u25ba  privN \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,"user1\u548cuser2\u90fd\u662f\u901a\u8fc7role1\u62e5\u6709\u4e86priv1\u7684\u6743\u9650\u3002"),(0,r.kt)("p",null,"userN\u901a\u8fc7role3\u62e5\u6709\u4e86priv1\u7684\u6743\u9650\uff0c\u901a\u8fc7roleN\u62e5\u6709\u4e86priv2\u548cprivN\u7684\u6743\u9650\uff0c\u56e0\u6b64userN\u540c\u65f6\u62e5\u6709priv1\uff0cpriv2\u548cprivN\u7684\u6743\u9650\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u64cd\u4f5c\uff0c\u662f\u53ef\u4ee5\u76f4\u63a5\u7ed9\u7528\u6237\u6388\u6743\u7684\uff0c\u5e95\u5c42\u5b9e\u73b0\u4e0a\uff0c\u662f\u4e3a\u6bcf\u4e2a\u7528\u6237\u521b\u5efa\u4e86\u4e00\u4e2a\u4e13\u5c5e\u4e8e\u8be5\u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272\uff0c\u5f53\u7ed9\u7528\u6237\u6388\u6743\u65f6\uff0c\u5b9e\u9645\u4e0a\u662f\u5728\u7ed9\u8be5\u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272\u6388\u6743\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u89d2\u8272\u4e0d\u80fd\u88ab\u5220\u9664\uff0c\u4e0d\u80fd\u88ab\u5206\u914d\u7ed9\u5176\u4ed6\u4eba\uff0c\u5220\u9664\u7528\u6237\u65f6\uff0c\u9ed8\u8ba4\u89d2\u8272\u4e5f\u81ea\u52a8\u5220\u9664\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u64cd\u4f5c"},"\u652f\u6301\u7684\u64cd\u4f5c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u7528\u6237\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER"},"CREATE USER")),(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u7528\u6237\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER"},"ALTER USER")),(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664\u7528\u6237\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/DROP-USER"},"DROP USER")),(0,r.kt)("li",{parentName:"ol"},"\u6388\u6743/\u5206\u914d\u89d2\u8272\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/GRANT"},"GRANT")),(0,r.kt)("li",{parentName:"ol"},"\u64a4\u6743/\u64a4\u9500\u89d2\u8272\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/REVOKE"},"REVOKE")),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u89d2\u8272\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE"},"CREATE ROLE")),(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664\u89d2\u8272\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE"},"DROP ROLE")),(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5f53\u524d\u7528\u6237\u6743\u9650\u548c\u89d2\u8272\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-GRANTS"},"SHOW GRANTS")),(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u6240\u6709\u7528\u6237\u6743\u9650\u548c\u89d2\u8272\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-GRANTS"},"SHOW ALL GRANTS")),(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5df2\u521b\u5efa\u7684\u89d2\u8272\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ROLES"},"SHOW ROLES")),(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u7528\u6237\u5c5e\u6027: ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY"},"SET PROPERTY")),(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u7528\u6237\u5c5e\u6027\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-PROPERTY"},"SHOW PROPERTY")),(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5bc6\u7801\uff1a",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD"},"SET PASSWORD"))),(0,r.kt)("p",null,"\u5173\u4e8e\u4ee5\u4e0a\u547d\u4ee4\u7684\u8be6\u7ec6\u5e2e\u52a9\uff0c\u53ef\u4ee5\u901a\u8fc7 mysql \u5ba2\u6237\u7aef\u8fde\u63a5 Doris \u540e\uff0c\u4f7f\u7528 help + command \u83b7\u53d6\u5e2e\u52a9\u3002\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"HELP CREATE USER"),"\u3002"),(0,r.kt)("h2",{id:"\u6743\u9650\u7c7b\u578b"},"\u6743\u9650\u7c7b\u578b"),(0,r.kt)("p",null,"Doris \u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u51e0\u79cd\u6743\u9650"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Node_priv"),(0,r.kt)("p",{parentName:"li"},"\u8282\u70b9\u53d8\u66f4\u6743\u9650\u3002\u5305\u62ec FE\u3001BE\u3001BROKER \u8282\u70b9\u7684\u6dfb\u52a0\u3001\u5220\u9664\u3001\u4e0b\u7ebf\u7b49\u64cd\u4f5c\u3002"),(0,r.kt)("p",{parentName:"li"},"Root \u7528\u6237\u9ed8\u8ba4\u62e5\u6709\u8be5\u6743\u9650\u3002\u540c\u65f6\u62e5\u6709 Grant_priv \u548c Node_priv \u7684\u7528\u6237\uff0c\u53ef\u4ee5\u5c06\u8be5\u6743\u9650\u8d4b\u4e88\u5176\u4ed6\u7528\u6237\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8be5\u6743\u9650\u53ea\u80fd\u8d4b\u4e88 Global \u7ea7\u522b\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant_priv"),(0,r.kt)("p",{parentName:"li"},"\u6743\u9650\u53d8\u66f4\u6743\u9650\u3002\u5141\u8bb8\u6267\u884c\u5305\u62ec\u6388\u6743\u3001\u64a4\u6743\u3001\u6dfb\u52a0/\u5220\u9664/\u53d8\u66f4 \u7528\u6237/\u89d2\u8272 \u7b49\u64cd\u4f5c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4f46\u62e5\u6709\u8be5\u6743\u9650\u7684\u7528\u6237\u80fd\u4e0d\u8d4b\u4e88\u5176\u4ed6\u7528\u6237 node_priv \u6743\u9650\uff0c\u9664\u975e\u7528\u6237\u672c\u8eab\u62e5\u6709 node_priv \u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select_priv"),(0,r.kt)("p",{parentName:"li"},"\u5bf9\u6570\u636e\u5e93\u3001\u8868\u7684\u53ea\u8bfb\u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Load_priv"),(0,r.kt)("p",{parentName:"li"},"\u5bf9\u6570\u636e\u5e93\u3001\u8868\u7684\u5199\u6743\u9650\u3002\u5305\u62ec Load\u3001Insert\u3001Delete \u7b49\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Alter_priv"),(0,r.kt)("p",{parentName:"li"},"\u5bf9\u6570\u636e\u5e93\u3001\u8868\u7684\u66f4\u6539\u6743\u9650\u3002\u5305\u62ec\u91cd\u547d\u540d \u5e93/\u8868\u3001\u6dfb\u52a0/\u5220\u9664/\u53d8\u66f4 \u5217\u3001\u6dfb\u52a0/\u5220\u9664 \u5206\u533a\u7b49\u64cd\u4f5c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create_priv"),(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u6570\u636e\u5e93\u3001\u8868\u3001\u89c6\u56fe\u7684\u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Drop_priv"),(0,r.kt)("p",{parentName:"li"},"\u5220\u9664\u6570\u636e\u5e93\u3001\u8868\u3001\u89c6\u56fe\u7684\u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Usage_priv"),(0,r.kt)("p",{parentName:"li"},"\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u3002"))),(0,r.kt)("h2",{id:"\u6743\u9650\u5c42\u7ea7"},"\u6743\u9650\u5c42\u7ea7"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u6839\u636e\u6743\u9650\u9002\u7528\u8303\u56f4\u7684\u4e0d\u540c\uff0c\u6211\u4eec\u5c06\u5e93\u8868\u7684\u6743\u9650\u5206\u4e3a\u4ee5\u4e0b\u56db\u4e2a\u5c42\u7ea7\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"GLOBAL LEVEL\uff1a\u5168\u5c40\u6743\u9650\u3002\u5373\u901a\u8fc7 GRANT \u8bed\u53e5\u6388\u4e88\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"*.*.*")," \u4e0a\u7684\u6743\u9650\u3002\u88ab\u6388\u4e88\u7684\u6743\u9650\u9002\u7528\u4e8e\u4efb\u610f\u6570\u636e\u5e93\u4e2d\u7684\u4efb\u610f\u8868\u3002"),(0,r.kt)("li",{parentName:"ol"},"CATALOG LEVEL\uff1a\u6570\u636e\u76ee\u5f55\uff08Catalog\uff09\u7ea7\u6743\u9650\u3002\u5373\u901a\u8fc7 GRANT \u8bed\u53e5\u6388\u4e88\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"ctl.*.*")," \u4e0a\u7684\u6743\u9650\u3002\u88ab\u6388\u4e88\u7684\u6743\u9650\u9002\u7528\u4e8e\u6307\u5b9aCatalog\u4e2d\u7684\u4efb\u610f\u5e93\u8868\u3002"),(0,r.kt)("li",{parentName:"ol"},"DATABASE LEVEL\uff1a\u6570\u636e\u5e93\u7ea7\u6743\u9650\u3002\u5373\u901a\u8fc7 GRANT \u8bed\u53e5\u6388\u4e88\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"ctl.db.*")," \u4e0a\u7684\u6743\u9650\u3002\u88ab\u6388\u4e88\u7684\u6743\u9650\u9002\u7528\u4e8e\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u4efb\u610f\u8868\u3002"),(0,r.kt)("li",{parentName:"ol"},"TABLE LEVEL\uff1a\u8868\u7ea7\u6743\u9650\u3002\u5373\u901a\u8fc7 GRANT \u8bed\u53e5\u6388\u4e88\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"ctl.db.tbl")," \u4e0a\u7684\u6743\u9650\u3002\u88ab\u6388\u4e88\u7684\u6743\u9650\u9002\u7528\u4e8e\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u6307\u5b9a\u8868\u3002")),(0,r.kt)("p",null,"\u5c06\u8d44\u6e90\u7684\u6743\u9650\u5206\u4e3a\u4ee5\u4e0b\u4e24\u4e2a\u5c42\u7ea7\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"GLOBAL LEVEL\uff1a\u5168\u5c40\u6743\u9650\u3002\u5373\u901a\u8fc7 GRANT \u8bed\u53e5\u6388\u4e88\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"*")," \u4e0a\u7684\u6743\u9650\u3002\u88ab\u6388\u4e88\u7684\u6743\u9650\u9002\u7528\u4e8e\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ol"},"RESOURCE LEVEL: \u8d44\u6e90\u7ea7\u6743\u9650\u3002\u5373\u901a\u8fc7 GRANT \u8bed\u53e5\u6388\u4e88\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"resource_name")," \u4e0a\u7684\u6743\u9650\u3002\u88ab\u6388\u4e88\u7684\u6743\u9650\u9002\u7528\u4e8e\u6307\u5b9a\u8d44\u6e90\u3002")),(0,r.kt)("h2",{id:"admingrant-\u6743\u9650\u8bf4\u660e"},"ADMIN/GRANT \u6743\u9650\u8bf4\u660e"),(0,r.kt)("p",null,"ADMIN_PRIV \u548c GRANT_PRIV \u6743\u9650\u540c\u65f6\u62e5\u6709",(0,r.kt)("strong",{parentName:"p"},"\u6388\u4e88\u6743\u9650"),"\u7684\u6743\u9650\uff0c\u8f83\u4e3a\u7279\u6b8a\u3002\u8fd9\u91cc\u5bf9\u548c\u8fd9\u4e24\u4e2a\u6743\u9650\u76f8\u5173\u7684\u64cd\u4f5c\u9010\u4e00\u8bf4\u660e\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"CREATE USER",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u62e5\u6709 ADMIN \u6743\u9650\uff0c\u6216 GLOBAL \u548c DATABASE \u5c42\u7ea7\u7684 GRANT \u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u65b0\u7528\u6237\u3002"))),(0,r.kt)("li",{parentName:"ol"},"DROP USER",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u62e5\u6709 ADMIN \u6743\u9650\u6216\u5168\u5c40\u5c42\u7ea7\u7684 GRANT \u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u5220\u9664\u7528\u6237\u3002"))),(0,r.kt)("li",{parentName:"ol"},"CREATE/DROP ROLE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u62e5\u6709 ADMIN \u6743\u9650\u6216\u5168\u5c40\u5c42\u7ea7\u7684 GRANT \u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u89d2\u8272\u3002"))),(0,r.kt)("li",{parentName:"ol"},"GRANT/REVOKE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u62e5\u6709 ADMIN \u6743\u9650\uff0c\u6216\u8005 GLOBAL \u5c42\u7ea7 GRANT \u6743\u9650\u7684\u7528\u6237\uff0c\u53ef\u4ee5\u6388\u4e88\u6216\u64a4\u9500\u4efb\u610f\u7528\u6237\u7684\u6743\u9650\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u62e5\u6709 CATALOG \u5c42\u7ea7 GRANT \u6743\u9650\u7684\u7528\u6237\uff0c\u53ef\u4ee5\u6388\u4e88\u6216\u64a4\u9500\u4efb\u610f\u7528\u6237\u5bf9\u6307\u5b9aCATALOG\u7684\u6743\u9650\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u62e5\u6709 DATABASE \u5c42\u7ea7 GRANT \u6743\u9650\u7684\u7528\u6237\uff0c\u53ef\u4ee5\u6388\u4e88\u6216\u64a4\u9500\u4efb\u610f\u7528\u6237\u5bf9\u6307\u5b9a\u6570\u636e\u5e93\u7684\u6743\u9650\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u62e5\u6709 TABLE \u5c42\u7ea7 GRANT \u6743\u9650\u7684\u7528\u6237\uff0c\u53ef\u4ee5\u6388\u4e88\u6216\u64a4\u9500\u4efb\u610f\u7528\u6237\u5bf9\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u6307\u5b9a\u8868\u7684\u6743\u9650\u3002"))),(0,r.kt)("li",{parentName:"ol"},"SET PASSWORD",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u62e5\u6709 ADMIN \u6743\u9650\uff0c\u6216\u8005 GLOBAL \u5c42\u7ea7 GRANT \u6743\u9650\u7684\u7528\u6237\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4efb\u610f\u7528\u6237\u7684\u5bc6\u7801\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u666e\u901a\u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u81ea\u5df1\u5bf9\u5e94\u7684 UserIdentity \u7684\u5bc6\u7801\u3002\u81ea\u5df1\u5bf9\u5e94\u7684 UserIdentity \u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT CURRENT_USER();")," \u547d\u4ee4\u67e5\u770b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u62e5\u6709\u975e GLOBAL \u5c42\u7ea7 GRANT \u6743\u9650\u7684\u7528\u6237\uff0c\u4e0d\u53ef\u4ee5\u8bbe\u7f6e\u5df2\u5b58\u5728\u7528\u6237\u7684\u5bc6\u7801\uff0c\u4ec5\u80fd\u5728\u521b\u5efa\u7528\u6237\u65f6\u6307\u5b9a\u5bc6\u7801\u3002")))),(0,r.kt)("h2",{id:"\u4e00\u4e9b\u8bf4\u660e"},"\u4e00\u4e9b\u8bf4\u660e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Doris \u521d\u59cb\u5316\u65f6\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u5982\u4e0b\u7528\u6237\u548c\u89d2\u8272\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"operator \u89d2\u8272\uff1a\u8be5\u89d2\u8272\u62e5\u6709 Node_priv \u548c Admin_priv\uff0c\u5373\u5bf9Doris\u7684\u6240\u6709\u6743\u9650\u3002"),(0,r.kt)("li",{parentName:"ol"},"admin \u89d2\u8272\uff1a\u8be5\u89d2\u8272\u62e5\u6709 Admin_priv\uff0c\u5373\u9664\u8282\u70b9\u53d8\u66f4\u4ee5\u5916\u7684\u6240\u6709\u6743\u9650\u3002"),(0,r.kt)("li",{parentName:"ol"},"root@'%'\uff1aroot \u7528\u6237\uff0c\u5141\u8bb8\u4ece\u4efb\u610f\u8282\u70b9\u767b\u9646\uff0c\u89d2\u8272\u4e3a operator\u3002"),(0,r.kt)("li",{parentName:"ol"},"admin@'%'\uff1aadmin \u7528\u6237\uff0c\u5141\u8bb8\u4ece\u4efb\u610f\u8282\u70b9\u767b\u9646\uff0c\u89d2\u8272\u4e3a admin\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301\u5220\u9664\u6216\u66f4\u6539\u9ed8\u8ba4\u521b\u5efa\u7684\u89d2\u8272\u6216\u7528\u6237\u7684\u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"operator \u89d2\u8272\u7684\u7528\u6237\u6709\u4e14\u53ea\u6709\u4e00\u4e2a\uff0c\u5373 Root\u3002admin \u89d2\u8272\u7684\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e00\u4e9b\u53ef\u80fd\u4ea7\u751f\u51b2\u7a81\u7684\u64cd\u4f5c\u8bf4\u660e"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u57df\u540d\u4e0eip\u51b2\u7a81\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u5047\u8bbe\u521b\u5efa\u4e86\u5982\u4e0b\u7528\u6237\uff1a"),(0,r.kt)("p",{parentName:"li"},"CREATE USER cmy@","['domain']",";"),(0,r.kt)("p",{parentName:"li"},"\u5e76\u4e14\u6388\u6743\uff1a"),(0,r.kt)("p",{parentName:"li"},"GRANT SELECT_PRIV ON ",(0,r.kt)("em",{parentName:"p"},".")," TO cmy@","['domain']"),(0,r.kt)("p",{parentName:"li"},"\u8be5 domain \u88ab\u89e3\u6790\u4e3a\u4e24\u4e2a ip\uff1aip1 \u548c ip2"),(0,r.kt)("p",{parentName:"li"},"\u5047\u8bbe\u4e4b\u540e\uff0c\u6211\u4eec\u5bf9 cmy@'ip1' \u8fdb\u884c\u4e00\u6b21\u5355\u72ec\u6388\u6743\uff1a"),(0,r.kt)("p",{parentName:"li"},"GRANT ALTER_PRIV ON ",(0,r.kt)("em",{parentName:"p"},".")," TO cmy@'ip1';"),(0,r.kt)("p",{parentName:"li"},"\u5219 cmy@'ip1' \u7684\u6743\u9650\u4f1a\u88ab\u4fee\u6539\u4e3a SELECT_PRIV, ALTER_PRIV\u3002\u5e76\u4e14\u5f53\u6211\u4eec\u518d\u6b21\u53d8\u66f4 cmy@","['domain']"," \u7684\u6743\u9650\u65f6\uff0ccmy@'ip1' \u4e5f\u4e0d\u4f1a\u8ddf\u968f\u6539\u53d8\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u91cd\u590dip\u51b2\u7a81\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u5047\u8bbe\u521b\u5efa\u4e86\u5982\u4e0b\u7528\u6237\uff1a"),(0,r.kt)("p",{parentName:"li"},"CREATE USER cmy@'%' IDENTIFIED BY \"12345\";"),(0,r.kt)("p",{parentName:"li"},"CREATE USER cmy@'192.%' IDENTIFIED BY \"abcde\";"),(0,r.kt)("p",{parentName:"li"},"\u5728\u4f18\u5148\u7ea7\u4e0a\uff0c'192.%' \u4f18\u5148\u4e8e '%'\uff0c\u56e0\u6b64\uff0c\u5f53\u7528\u6237 cmy \u4ece 192.168.1.1 \u8fd9\u53f0\u673a\u5668\u5c1d\u8bd5\u4f7f\u7528\u5bc6\u7801 '12345' \u767b\u9646 Doris \u4f1a\u88ab\u62d2\u7edd\u3002")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5fd8\u8bb0\u5bc6\u7801"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5fd8\u8bb0\u4e86\u5bc6\u7801\u65e0\u6cd5\u767b\u9646 Doris\uff0c\u53ef\u4ee5\u5728 FE \u7684 config \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"skip_localhost_auth_check")," \u53c2\u6570\uff0c\u5e76\u4e14\u91cd\u542fFE\uff0c\u4ece\u800c\u65e0\u5bc6\u7801\u5728\u672c\u673a\u901a\u8fc7localhost\u767b\u9646 Doris\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"skip_localhost_auth_check = true")),(0,r.kt)("p",{parentName:"li"},"\u767b\u9646\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 SET PASSWORD \u547d\u4ee4\u91cd\u7f6e\u5bc6\u7801\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4efb\u4f55\u7528\u6237\u90fd\u4e0d\u80fd\u91cd\u7f6e root \u7528\u6237\u7684\u5bc6\u7801\uff0c\u9664\u4e86 root \u7528\u6237\u81ea\u5df1\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ADMIN_PRIV \u6743\u9650\u53ea\u80fd\u5728 GLOBAL \u5c42\u7ea7\u6388\u4e88\u6216\u64a4\u9500\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u62e5\u6709 GLOBAL \u5c42\u7ea7 GRANT_PRIV \u5176\u5b9e\u7b49\u540c\u4e8e\u62e5\u6709 ADMIN_PRIV\uff0c\u56e0\u4e3a\u8be5\u5c42\u7ea7\u7684 GRANT_PRIV \u6709\u6388\u4e88\u4efb\u610f\u6743\u9650\u7684\u6743\u9650\uff0c\u8bf7\u8c28\u614e\u4f7f\u7528\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"current_user()")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"user()")),(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT current_user();")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT user();")," \u5206\u522b\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},"current_user")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"\u3002\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"current_user")," \u8868\u793a\u5f53\u524d\u7528\u6237\u662f\u4ee5\u54ea\u79cd\u8eab\u4efd\u901a\u8fc7\u8ba4\u8bc1\u7cfb\u7edf\u7684\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," \u5219\u662f\u7528\u6237\u5f53\u524d\u5b9e\u9645\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"user_identity"),"\u3002\u4e3e\u4f8b\u8bf4\u660e\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u5047\u8bbe\u521b\u5efa\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"user1@'192.%'")," \u8fd9\u4e2a\u7528\u6237\uff0c\u7136\u540e\u4ee5\u4e3a\u6765\u81ea 192.168.10.1 \u7684\u7528\u6237 user1 \u767b\u9646\u4e86\u7cfb\u7edf\uff0c\u5219\u6b64\u65f6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"current_user")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"user1@'192.%'"),"\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"user1@'192.168.10.1'"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6240\u6709\u7684\u6743\u9650\u90fd\u662f\u8d4b\u4e88\u67d0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"current_user")," \u7684\uff0c\u771f\u5b9e\u7528\u6237\u62e5\u6709\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"current_user")," \u7684\u6240\u6709\u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bc6\u7801\u5f3a\u5ea6"),(0,r.kt)("p",{parentName:"li"},"\u5728 1.2 \u7248\u672c\u4e2d\uff0c\u65b0\u589e\u4e86\u5bf9\u7528\u6237\u5bc6\u7801\u5f3a\u5ea6\u7684\u6821\u9a8c\u529f\u80fd\u3002\u8be5\u529f\u80fd\u7531\u5168\u5c40\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_password_policy")," \u63a7\u5236\u3002\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"NONE/0"),"\uff0c\u5373\u4e0d\u68c0\u67e5\u5bc6\u7801\u5f3a\u5ea6\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"STRONG/2"),"\uff0c\u5219\u5bc6\u7801\u5fc5\u987b\u5305\u542b\u201c\u5927\u5199\u5b57\u6bcd\u201d\uff0c\u201c\u5c0f\u5199\u5b57\u6bcd\u201d\uff0c\u201c\u6570\u5b57\u201d\u548c\u201c\u7279\u6b8a\u5b57\u7b26\u201d\u4e2d\u76843\u9879\uff0c\u5e76\u4e14\u957f\u5ea6\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e8\u3002"))),(0,r.kt)("h2",{id:"\u884c\u7ea7\u6743\u9650"},"\u884c\u7ea7\u6743\u9650"),(0,r.kt)("p",null,"\u4ece1.2\u7248\u672c\u5f00\u59cb\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY"},"CREATE ROW POLICY")," \u547d\u4ee4\u521b\u5efa\u884c\u7ea7\u6743\u9650\u3002"),(0,r.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4e3e\u4f8b\u4e00\u4e9b Doris \u6743\u9650\u7cfb\u7edf\u7684\u4f7f\u7528\u573a\u666f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u573a\u666f\u4e00"),(0,r.kt)("p",{parentName:"li"},"Doris \u96c6\u7fa4\u7684\u4f7f\u7528\u8005\u5206\u4e3a\u7ba1\u7406\u5458\uff08Admin\uff09\u3001\u5f00\u53d1\u5de5\u7a0b\u5e08\uff08RD\uff09\u548c\u7528\u6237\uff08Client\uff09\u3002\u5176\u4e2d\u7ba1\u7406\u5458\u62e5\u6709\u6574\u4e2a\u96c6\u7fa4\u7684\u6240\u6709\u6743\u9650\uff0c\u4e3b\u8981\u8d1f\u8d23\u96c6\u7fa4\u7684\u642d\u5efa\u3001\u8282\u70b9\u7ba1\u7406\u7b49\u3002\u5f00\u53d1\u5de5\u7a0b\u5e08\u8d1f\u8d23\u4e1a\u52a1\u5efa\u6a21\uff0c\u5305\u62ec\u5efa\u5e93\u5efa\u8868\u3001\u6570\u636e\u7684\u5bfc\u5165\u548c\u4fee\u6539\u7b49\u3002\u7528\u6237\u8bbf\u95ee\u4e0d\u540c\u7684\u6570\u636e\u5e93\u548c\u8868\u6765\u83b7\u53d6\u6570\u636e\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\uff0c\u53ef\u4ee5\u4e3a\u7ba1\u7406\u5458\u8d4b\u4e88 ADMIN \u6743\u9650\u6216 GRANT \u6743\u9650\u3002\u5bf9 RD \u8d4b\u4e88\u5bf9\u4efb\u610f\u6216\u6307\u5b9a\u6570\u636e\u5e93\u8868\u7684 CREATE\u3001DROP\u3001ALTER\u3001LOAD\u3001SELECT \u6743\u9650\u3002\u5bf9 Client \u8d4b\u4e88\u5bf9\u4efb\u610f\u6216\u6307\u5b9a\u6570\u636e\u5e93\u8868 SELECT \u6743\u9650\u3002\u540c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e0d\u540c\u7684\u89d2\u8272\uff0c\u6765\u7b80\u5316\u5bf9\u591a\u4e2a\u7528\u6237\u7684\u6388\u6743\u64cd\u4f5c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u573a\u666f\u4e8c"),(0,r.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u96c6\u7fa4\u5185\u6709\u591a\u4e2a\u4e1a\u52a1\uff0c\u6bcf\u4e2a\u4e1a\u52a1\u53ef\u80fd\u4f7f\u7528\u4e00\u4e2a\u6216\u591a\u4e2a\u6570\u636e\u3002\u6bcf\u4e2a\u4e1a\u52a1\u9700\u8981\u7ba1\u7406\u81ea\u5df1\u7684\u7528\u6237\u3002\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\u3002\u7ba1\u7406\u5458\u7528\u6237\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u6570\u636e\u5e93\u521b\u5efa\u4e00\u4e2a\u62e5\u6709 DATABASE \u5c42\u7ea7 GRANT \u6743\u9650\u7684\u7528\u6237\u3002\u8be5\u7528\u6237\u4ec5\u53ef\u4ee5\u5bf9\u7528\u6237\u8fdb\u884c\u6307\u5b9a\u7684\u6570\u636e\u5e93\u7684\u6388\u6743\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9ed1\u540d\u5355"),(0,r.kt)("p",{parentName:"li"},"Doris \u672c\u8eab\u4e0d\u652f\u6301\u9ed1\u540d\u5355\uff0c\u53ea\u6709\u767d\u540d\u5355\u529f\u80fd\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u67d0\u4e9b\u65b9\u5f0f\u6765\u6a21\u62df\u9ed1\u540d\u5355\u3002\u5047\u8bbe\u5148\u521b\u5efa\u4e86\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"user@'192.%'")," \u7684\u7528\u6237\uff0c\u8868\u793a\u5141\u8bb8\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"192.*")," \u7684\u7528\u6237\u767b\u5f55\u3002\u6b64\u65f6\u5982\u679c\u60f3\u7981\u6b62\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.10.1")," \u7684\u7528\u6237\u767b\u5f55\u3002\u5219\u53ef\u4ee5\u518d\u521b\u5efa\u4e00\u4e2a\u7528\u6237 ",(0,r.kt)("inlineCode",{parentName:"p"},"cmy@'192.168.10.1'")," \u7684\u7528\u6237\uff0c\u5e76\u8bbe\u7f6e\u4e00\u4e2a\u65b0\u7684\u5bc6\u7801\u3002\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.10.1")," \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"192.%"),"\uff0c\u6240\u4ee5\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.10.1")," \u5c06\u4e0d\u80fd\u518d\u4f7f\u7528\u65e7\u5bc6\u7801\u8fdb\u884c\u767b\u5f55\u3002"))),(0,r.kt)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,r.kt)("p",null," \u5173\u4e8e \u6743\u9650\u7ba1\u7406 \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/GRANT"},"GRANTS")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"HELP GRANTS")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"))}u.isMDXComponent=!0}}]);