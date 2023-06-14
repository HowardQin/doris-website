"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[7476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},O=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),O=a,d=u["".concat(s,".").concat(O)]||u[O]||m[O]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}O.displayName="MDXCreateElement"},65185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"SHOW-CATALOGS",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",id:"sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",title:"SHOW-CATALOGS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CATALOGS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-BROKER",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-BROKER"},next:{title:"SHOW-CREATE-TABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE"}},s={},c=[{value:"SHOW-CATALOGS",id:"show-catalogs",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-catalogs"},"SHOW-CATALOGS"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("version",{since:"1.2"},(0,a.kt)("p",null,"SHOW CATALOGS")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u663e\u793a\u5df2\u5b58\u5728\u662f\u6570\u636e\u76ee\u5f55\uff08catalog\uff09"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CATALOGS [LIKE]\n")),(0,a.kt)("p",null,"\u8bf4\u660e:"),(0,a.kt)("p",null,"LIKE\uff1a\u53ef\u6309\u7167CATALOG\u540d\u8fdb\u884c\u6a21\u7cca\u67e5\u8be2"),(0,a.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CatalogId\uff1a\u6570\u636e\u76ee\u5f55\u552f\u4e00ID"),(0,a.kt)("li",{parentName:"ul"},"CatalogName\uff1a\u6570\u636e\u76ee\u5f55\u540d\u79f0\u3002\u5176\u4e2d internal \u662f\u9ed8\u8ba4\u5185\u7f6e\u7684 catalog\uff0c\u4e0d\u53ef\u4fee\u6539\u3002"),(0,a.kt)("li",{parentName:"ul"},"Type\uff1a\u6570\u636e\u76ee\u5f55\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"IsCurrent: \u662f\u5426\u4e3a\u5f53\u524d\u6b63\u5728\u4f7f\u7528\u7684\u6570\u636e\u76ee\u5f55\u3002")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u5df2\u521b\u5efa\u7684\u6570\u636e\u76ee\u5f55"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CATALOGS;\n +-----------+-------------+----------+-----------+\n | CatalogId | CatalogName | Type     | IsCurrent |\n +-----------+-------------+----------+-----------+\n |    130100 | hive        | hms      |           |\n |         0 | internal    | internal | yes       |\n +-----------+-------------+----------+-----------+\n    ```\n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6309\u7167\u76ee\u5f55\u540d\u8fdb\u884c\u6a21\u7cca\u641c\u7d22"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CATALOGS LIKE 'hi%';\n +-----------+-------------+----------+-----------+\n | CatalogId | CatalogName | Type     | IsCurrent |\n +-----------+-------------+----------+-----------+\n |    130100 | hive        | hms      |           |\n +-----------+-------------+----------+-----------+\n    ```\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("p",null,"SHOW, CATALOG, CATALOGS"),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);