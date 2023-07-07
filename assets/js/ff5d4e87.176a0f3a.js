"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[34801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),p=o,f=u["".concat(l,".").concat(p)]||u[p]||y[p]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var m=2;m<s;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const s={title:"ST_GeometryFromWKB,ST_GeomFromWKB",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/spatial-functions/st_geometryfromwkb",id:"version-1.2/sql-manual/sql-functions/spatial-functions/st_geometryfromwkb",title:"ST_GeometryFromWKB,ST_GeomFromWKB",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_geometryfromwkb.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_geometryfromwkb",permalink:"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_geometryfromwkb",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ST_GeometryFromWKB,ST_GeomFromWKB",language:"en"},sidebar:"docs",previous:{title:"ST_AsBinary",permalink:"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_asbinary"},next:{title:"to_base64",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/to_base64"}},l={},m=[{value:"ST_GeometryFromWKB,ST_GeomFromWKB",id:"st_geometryfromwkbst_geomfromwkb",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:m},u="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"st_geometryfromwkbst_geomfromwkb"},"ST_GeometryFromWKB,ST_GeomFromWKB"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GEOMETRY ST_GeometryFromWKB(VARCHAR WKB)")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"Converting a standard WKB (Well-known binary) into a corresponding memory geometry"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select ST_AsText(ST_GeometryFromWKB(ST_AsBinary(ST_Point(24.7, 56.7))));\n+------------------------------------------------------------------+\n| st_astext(st_geometryfromwkb(st_asbinary(st_point(24.7, 56.7)))) |\n+------------------------------------------------------------------+\n| POINT (24.7 56.7)                                                |\n+------------------------------------------------------------------+\n1 row in set (0.05 sec)\n\nmysql> select ST_AsText(ST_GeomFromWKB(ST_AsBinary(ST_Point(24.7, 56.7))));\n+--------------------------------------------------------------+\n| st_astext(st_geomfromwkb(st_asbinary(st_point(24.7, 56.7)))) |\n+--------------------------------------------------------------+\n| POINT (24.7 56.7)                                            |\n+--------------------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> select ST_AsText(ST_GeometryFromWKB(ST_AsBinary(ST_GeometryFromText(\"LINESTRING (1 1, 2 2)\"))));\n+------------------------------------------------------------------------------------------+\n| st_astext(st_geometryfromwkb(st_asbinary(st_geometryfromtext('LINESTRING (1 1, 2 2)')))) |\n+------------------------------------------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                                                    |\n+------------------------------------------------------------------------------------------+\n1 row in set (0.06 sec)\n\nmysql> select ST_AsText(ST_GeometryFromWKB(ST_AsBinary(ST_Polygon(\"POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))\"))));\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| st_astext(st_geometryfromwkb(st_asbinary(st_polygon('POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))')))) |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| POLYGON ((114.104486 22.547119, 114.093758 22.547753, 114.096504 22.532057, 114.104229 22.539826, 114.106203 22.54268, 114.104486 22.547119))                                                       |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> select ST_AsText(ST_GeomFromWKB(ST_AsBinary(ST_Polygon(\"POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))\"))));\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| st_astext(st_geomfromwkb(st_asbinary(st_polygon('POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))')))) |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| POLYGON ((114.104486 22.547119, 114.093758 22.547753, 114.096504 22.532057, 114.104229 22.539826, 114.106203 22.54268, 114.104486 22.547119))                                                   |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.03 sec)\n\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"ST_GEOMETRYFROMWKB,ST_GEOMFROMWKB,ST,GEOMETRYFROMWKB,GEOMFROMWKB,WKB"))}y.isMDXComponent=!0}}]);