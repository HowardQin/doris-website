"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,O=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(O,o(o({ref:t},u),{},{components:n})):r.createElement(O,o({ref:t},u))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"SHOW-CATALOGS",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",id:"sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",title:"SHOW-CATALOGS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CATALOGS",language:"en"},sidebar:"docs",previous:{title:"SHOW-BROKER",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-BROKER"},next:{title:"SHOW-CREATE-TABLE",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE"}},c={},s=[{value:"SHOW-CATALOGS",id:"show-catalogs",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-catalogs"},"SHOW-CATALOGS"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW CATALOGS"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used for view created catalogs"),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CATALOGS [LIKE]\n")),(0,a.kt)("p",null,"illustrate:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"LIKE: Fuzzy query can be performed according to the catalog name")),(0,a.kt)("p",null,"Return result:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CatalogId: Unique ID of the catalog"),(0,a.kt)("li",{parentName:"ul"},'CatalogName: Catalog name. where "internal" is the default built-in catalog, which cannot be modified.'),(0,a.kt)("li",{parentName:"ul"},"Type: Catalog type."),(0,a.kt)("li",{parentName:"ul"},"IsCurrent: Show yes on the line of current using catalog.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"View the data catalogs that have been created currently"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CATALOGS;\n +-----------+-------------+----------+-----------+\n | CatalogId | CatalogName | Type     | IsCurrent |\n +-----------+-------------+----------+-----------+\n |    130100 | hive        | hms      |           |\n |         0 | internal    | internal | yes       |\n +-----------+-------------+----------+-----------+\n    ```\n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fuzzy query by catalog name"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CATALOGS LIKE 'hi%';\n +-----------+-------------+----------+-----------+\n | CatalogId | CatalogName | Type     | IsCurrent |\n +-----------+-------------+----------+-----------+\n |    130100 | hive        | hms      |           |\n +-----------+-------------+----------+-----------+\n    ```\n\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("p",null,"SHOW, CATALOG, CATALOGS"),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);