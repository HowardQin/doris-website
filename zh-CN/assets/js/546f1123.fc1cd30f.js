"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[39467],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},N="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),N=c(t),d=o,f=N["".concat(u,".").concat(d)]||N[d]||p[d]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[N]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"WINDOW-FUNCTION-WINDOW-FUNNEL",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL",id:"version-1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL",title:"WINDOW-FUNCTION-WINDOW-FUNNEL",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL",draft:!1,tags:[],version:"1.2",frontMatter:{title:"WINDOW-FUNCTION-WINDOW-FUNNEL",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-NTILE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE"},next:{title:"CAST",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/cast"}},u={},c=[{value:"WINDOW FUNCTION WINDOW_FUNNEL",id:"window-function-window_funnel",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c},N="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(N,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"window-function-window_funnel"},"WINDOW FUNCTION WINDOW_FUNNEL"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"\u6f0f\u6597\u5206\u6790\u51fd\u6570\u641c\u7d22\u6ed1\u52a8\u65f6\u95f4\u7a97\u53e3\u5185\u6700\u5927\u7684\u53d1\u751f\u7684\u6700\u5927\u4e8b\u4ef6\u5e8f\u5217\u957f\u5ea6\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"window \uff1a\u6ed1\u52a8\u65f6\u95f4\u7a97\u53e3\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002"),(0,o.kt)("li",{parentName:"ul"},"mode \uff1a\u4fdd\u7559\uff0c\u76ee\u524d\u53ea\u652f\u6301default\u3002"),(0,o.kt)("li",{parentName:"ul"},"timestamp_column \uff1a\u6307\u5b9a\u65f6\u95f4\u5217\uff0c\u7c7b\u578b\u4e3aDATETIME, \u6ed1\u52a8\u7a97\u53e3\u6cbf\u7740\u6b64\u5217\u5de5\u4f5c\u3002"),(0,o.kt)("li",{parentName:"ul"},"eventN \uff1a\u8868\u793a\u4e8b\u4ef6\u7684\u5e03\u5c14\u8868\u8fbe\u5f0f\u3002")),(0,o.kt)("p",null,"\u6f0f\u6597\u5206\u6790\u51fd\u6570\u6309\u7167\u5982\u4e0b\u7b97\u6cd5\u5de5\u4f5c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u641c\u7d22\u5230\u6ee1\u8db3\u6ee1\u8db3\u6761\u4ef6\u7684\u7b2c\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u8bbe\u7f6e\u4e8b\u4ef6\u957f\u5ea6\u4e3a1\uff0c\u6b64\u65f6\u5f00\u59cb\u6ed1\u52a8\u65f6\u95f4\u7a97\u53e3\u8ba1\u65f6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e8b\u4ef6\u5728\u65f6\u95f4\u7a97\u53e3\u5185\u6309\u7167\u6307\u5b9a\u7684\u987a\u5e8f\u53d1\u751f\uff0c\u65f6\u95f4\u957f\u5ea6\u7d2f\u8ba1\u589e\u52a0\u3002\u5982\u679c\u4e8b\u4ef6\u6ca1\u6709\u6309\u7167\u6307\u5b9a\u7684\u987a\u5e8f\u53d1\u751f\uff0c\u65f6\u95f4\u957f\u5ea6\u4e0d\u589e\u52a0\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u641c\u7d22\u5230\u591a\u4e2a\u4e8b\u4ef6\u94fe\uff0c\u6f0f\u6597\u5206\u6790\u51fd\u6570\u8fd4\u56de\u6700\u5927\u7684\u957f\u5ea6\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"window_funnel(window, mode, timestamp_column, event1, event2, ... , eventN)\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE windowfunnel_test (\n                `xwho` varchar(50) NULL COMMENT 'xwho',\n                `xwhen` datetime COMMENT 'xwhen',\n                `xwhat` int NULL COMMENT 'xwhat'\n                )\nDUPLICATE KEY(xwho)\nDISTRIBUTED BY HASH(xwho) BUCKETS 3\nPROPERTIES (\n    \"replication_num\" = \"1\"\n);\n\nINSERT into windowfunnel_test (xwho, xwhen, xwhat) values ('1', '2022-03-12 10:41:00', 1),\n                                                   ('1', '2022-03-12 13:28:02', 2),\n                                                   ('1', '2022-03-12 16:15:01', 3),\n                                                   ('1', '2022-03-12 19:05:04', 4);\n\nselect window_funnel(3600 * 3, 'default', t.xwhen, t.xwhat = 1, t.xwhat = 2 ) AS level from windowfunnel_test t;\n\n| level |\n|---|\n| 2 |\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WINDOW,FUNCTION,WINDOW_FUNNEL\n")))}p.isMDXComponent=!0}}]);