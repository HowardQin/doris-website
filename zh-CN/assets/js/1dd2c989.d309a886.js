"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[44325],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},N=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),N=o,f=p["".concat(c,".").concat(N)]||p[N]||d[N]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=N;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}N.displayName="MDXCreateElement"},22917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={title:"WINDOW-FUNCTION-RANK",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-RANK",id:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-RANK",title:"WINDOW-FUNCTION-RANK",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-RANK.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-RANK",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-RANK",draft:!1,tags:[],version:"current",frontMatter:{title:"WINDOW-FUNCTION-RANK",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7a97\u53e3\u51fd\u6570",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION"},next:{title:"WINDOW-FUNCTION-DENSE_RANK",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-DENSE-RANK"}},c={},s=[{value:"WINDOW FUNCTION RANK",id:"window-function-rank",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"window-function-rank"},"WINDOW FUNCTION RANK"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"RANK() \u51fd\u6570\u7528\u6765\u8868\u793a\u6392\u540d\uff0c\u4e0e DENSE_RANK() \u4e0d\u540c\u7684\u662f\uff0cRANK() \u4f1a\u51fa\u73b0\u7a7a\u7f3a\u6570\u5b57\u3002\u6bd4\u5982\uff0c\u5982\u679c\u51fa\u73b0\u4e86\u4e24\u4e2a\u5e76\u5217\u76841\uff0c RANK() \u7684\u7b2c\u4e09\u4e2a\u6570\u5c31\u662f3\uff0c\u800c\u4e0d\u662f2\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"RANK() OVER(partition_by_clause order_by_clause)\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("p",null,"\u6839\u636e x \u8fdb\u884c\u6392\u540d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select x, y, rank() over(partition by x order by y) as rank from int_t;\n\n| x  | y    | rank     |\n|----|------|----------|\n| 1  | 1    | 1        |\n| 1  | 2    | 2        |\n| 1  | 2    | 2        |\n| 2  | 1    | 1        |\n| 2  | 2    | 2        |\n| 2  | 3    | 3        |\n| 3  | 1    | 1        |\n| 3  | 1    | 1        |\n| 3  | 2    | 3        |\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WINDOW,FUNCTION,RANK\n")))}d.isMDXComponent=!0}}]);