"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[91520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),E=a,d=m["".concat(i,".").concat(E)]||m[E]||u[E]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=E;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},52045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"ALTER-USER",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",id:"sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",title:"ALTER-USER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-USER",language:"zh-CN"},sidebar:"docs",previous:{title:"SET-PASSWORD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD"},next:{title:"ALTER-SYSTEM-DROP-FOLLOWER",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER"}},i={},c=[{value:"ALTER USER",id:"alter-user",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"alter-user"},"ALTER USER"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"ALTER USER"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"ALTER USER \u547d\u4ee4\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u7528\u6237\u7684\u8d26\u6237\u5c5e\u6027\uff0c\u5305\u62ec\u5bc6\u7801\u3001\u548c\u5bc6\u7801\u7b56\u7565\u7b49"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},"\u4ece2.0\u7248\u672c\u5f00\u59cb\uff0c\u6b64\u547d\u4ee4\u4e0d\u518d\u652f\u6301\u4fee\u6539\u7528\u6237\u89d2\u8272,\u76f8\u5173\u64cd\u4f5c\u8bf7\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/GRANT"},"GRANT"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/REVOKE"},"REVOKE"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER [IF EXISTS] user_identity [IDENTIFIED BY 'password']\n[password_policy]\n\nuser_identity:\n    'user_name'@'host'\n\npassword_policy:\n\n    1. PASSWORD_HISTORY [n|DEFAULT]\n    2. PASSWORD_EXPIRE [DEFAULT|NEVER|INTERVAL n DAY/HOUR/SECOND]\n    3. FAILED_LOGIN_ATTEMPTS n\n    4. PASSWORD_LOCK_TIME [n DAY/HOUR/SECOND|UNBOUNDED]\n    5. ACCOUNT_UNLOCK\n")),(0,a.kt)("p",null,"\u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"user_identity"),", \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"password_policy")," \u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE USER")," \u547d\u4ee4\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ACCOUNT_UNLOCK")," \u547d\u4ee4\u7528\u4e8e\u89e3\u9501\u4e00\u4e2a\u88ab\u9501\u5b9a\u7684\u7528\u6237\u3002"),(0,a.kt)("p",null,"\u5728\u4e00\u4e2a ALTER USER \u547d\u4ee4\u4e2d\uff0c\u53ea\u80fd\u540c\u65f6\u5bf9\u4ee5\u4e0b\u8d26\u6237\u5c5e\u6027\u4e2d\u7684\u4e00\u9879\u8fdb\u884c\u4fee\u6539\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"PASSWORD_HISTORY")),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"PASSWORD_EXPIRE")),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"FAILED_LOGIN_ATTEMPTS")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"PASSWORD_LOCK_TIME")),(0,a.kt)("li",{parentName:"ol"},"\u89e3\u9501\u7528\u6237")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237\u7684\u5bc6\u7801"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'ALTER USER jack@\u2018%\u2019 IDENTIFIED BY "12345";\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237\u7684\u5bc6\u7801\u7b56\u7565"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"ALTER USER jack@'%' FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u9501\u4e00\u4e2a\u7528\u6237"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"ALTER USER jack@'%' ACCOUNT_UNLOCK\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ALTER, USER\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539\u5bc6\u7801\u7b56\u7565"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE")," \u4f1a\u91cd\u7f6e\u5bc6\u7801\u8fc7\u671f\u65f6\u95f4\u7684\u8ba1\u65f6\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILED_LOGIN_ATTEMPTS")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"PASSWORD_LOCK_TIME"),"\uff0c\u4f1a\u89e3\u9501\u7528\u6237\u3002"))))))}u.isMDXComponent=!0}}]);