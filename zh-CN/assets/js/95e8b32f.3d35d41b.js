"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[91106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},S=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),S=a,d=u["".concat(i,".").concat(S)]||u[S]||m[S]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=S;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}S.displayName="MDXCreateElement"},59185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"SET-PASSWORD",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD",id:"version-1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD",title:"SET-PASSWORD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SET-PASSWORD",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-USER",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/DROP-USER"},next:{title:"ALTER-USER",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER"}},i={},s=[{value:"SET-PASSWORD",id:"set-password",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"set-password"},"SET-PASSWORD"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SET PASSWORD"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"SET PASSWORD \u547d\u4ee4\u53ef\u4ee5\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u7528\u6237\u7684\u767b\u5f55\u5bc6\u7801\u3002\u5982\u679c ","[FOR user_identity]"," \u5b57\u6bb5\u4e0d\u5b58\u5728\uff0c\u90a3\u4e48\u4fee\u6539\u5f53\u524d\u7528\u6237\u7684\u5bc6\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET PASSWORD [FOR user_identity] =\n    [PASSWORD('plain password')]|['hashed password']\n")),(0,a.kt)("p",null,"\u6ce8\u610f\u8fd9\u91cc\u7684 user_identity \u5fc5\u987b\u5b8c\u5168\u5339\u914d\u5728\u4f7f\u7528 CREATE USER \u521b\u5efa\u7528\u6237\u65f6\u6307\u5b9a\u7684 user_identity\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u7528\u6237\u4e0d\u5b58\u5728\u3002\u5982\u679c\u4e0d\u6307\u5b9a user_identity\uff0c\u5219\u5f53\u524d\u7528\u6237\u4e3a 'username'@'ip'\uff0c\u8fd9\u4e2a\u5f53\u524d\u7528\u6237\uff0c\u53ef\u80fd\u65e0\u6cd5\u5339\u914d\u4efb\u4f55 user_identity\u3002\u53ef\u4ee5\u901a\u8fc7 SHOW GRANTS \u67e5\u770b\u5f53\u524d\u7528\u6237\u3002"),(0,a.kt)("p",null,"PASSWORD() \u65b9\u5f0f\u8f93\u5165\u7684\u662f\u660e\u6587\u5bc6\u7801; \u800c\u76f4\u63a5\u4f7f\u7528\u5b57\u7b26\u4e32\uff0c\u9700\u8981\u4f20\u9012\u7684\u662f\u5df2\u52a0\u5bc6\u7684\u5bc6\u7801\u3002\n\u5982\u679c\u4fee\u6539\u5176\u4ed6\u7528\u6237\u7684\u5bc6\u7801\uff0c\u9700\u8981\u5177\u6709\u7ba1\u7406\u5458\u6743\u9650\u3002"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539\u5f53\u524d\u7528\u6237\u7684\u5bc6\u7801"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET PASSWORD = PASSWORD('123456')\nSET PASSWORD = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539\u6307\u5b9a\u7528\u6237\u5bc6\u7801"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET PASSWORD FOR 'jack'@'192.%' = PASSWORD('123456')\nSET PASSWORD FOR 'jack'@['domain'] = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SET, PASSWORD\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);