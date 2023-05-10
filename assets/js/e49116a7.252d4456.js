"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[68910],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},73781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"WINDOW-FUNCTION-SUM",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM",id:"version-1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM",title:"WINDOW-FUNCTION-SUM",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM",permalink:"/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM",draft:!1,tags:[],version:"1.2",frontMatter:{title:"WINDOW-FUNCTION-SUM",language:"en"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-LAG",permalink:"/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG"},next:{title:"WINDOW-FUNCTION-LAST_VALUE",permalink:"/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAST-VALUE"}},s={},c=[{value:"WINDOW FUNCTION SUM",id:"window-function-sum",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"window-function-sum"},"WINDOW FUNCTION SUM"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"Calculate the sum of the data in the window"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SUM([DISTINCT | ALL] expression) [OVER (analytic_clause)]\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("p",null,"Group by property, and calculate the sum of the x columns of the current row and the previous row within the group."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select x, property,   \nsum(x) over    \n(   \npartition by property   \norder by x   \nrows between 1 preceding and 1 following    \n) as 'moving total'    \nfrom int_t where property in ('odd','even');\n\n| x  | property | moving total |\n|----|----------|--------------|\n| 2  | even     | 6            |\n| 4  | even     | 12           |\n| 6  | even     | 18           |\n| 8  | even     | 24           |\n| 10 | even     | 18           |\n| 1  | odd      | 4            |\n| 3  | odd      | 9            |\n| 5  | odd      | 15           |\n| 7  | odd      | 21           |\n| 9  | odd      | 16           |\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WINDOW,FUNCTION,SUM\n")))}d.isMDXComponent=!0}}]);