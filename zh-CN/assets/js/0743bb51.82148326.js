"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22297],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(n),f=i,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return n?r.createElement(d,l(l({ref:e},p),{},{components:n})):r.createElement(d,l({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50186:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={title:"ST_Azimuth",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/spatial-functions/st_azimuth",id:"version-1.2/sql-manual/sql-functions/spatial-functions/st_azimuth",title:"ST_Azimuth",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_azimuth.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_azimuth",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_azimuth",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ST_Azimuth",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_Angle",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_angle"},next:{title:"ST_Angle_Sphere",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_angle_sphere"}},s={},u=[{value:"ST_Azimuth",id:"st_azimuth",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function m(t){let{components:e,...n}=t;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"st_azimuth"},"ST_Azimuth"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DOUBLE ST_Azimuth(GEOPOINT point1, GEOPOINT point2)")),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"\u8f93\u5165\u4e24\u4e2a\u70b9\uff0c\u5e76\u8fd4\u56de\u7531\u70b9 1 \u548c\u70b9 2 \u5f62\u6210\u7684\u7ebf\u6bb5\u7684\u65b9\u4f4d\u89d2\u3002\u65b9\u4f4d\u89d2\u662f\u70b9 1 \u7684\u771f\u5317\u65b9\u5411\u7ebf\u4e0e\u70b9 1 \u548c\u70b9 2 \u5f62\u6210\u7684\u7ebf\u6bb5\u4e4b\u95f4\u7684\u89d2\u7684\u5f27\u5ea6\u3002"),(0,i.kt)("p",null,"\u6b63\u89d2\u5728\u7403\u9762\u4e0a\u6309\u987a\u65f6\u9488\u65b9\u5411\u6d4b\u91cf\u3002 \u4f8b\u5982\uff0c\u7ebf\u6bb5\u7684\u65b9\u4f4d\u89d2\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6307\u5317\u662f 0"),(0,i.kt)("li",{parentName:"ul"},"\u6307\u4e1c\u662f PI/2"),(0,i.kt)("li",{parentName:"ul"},"\u6307\u5357\u662f PI"),(0,i.kt)("li",{parentName:"ul"},"\u6307\u897f\u662f 3PI/2")),(0,i.kt)("p",null,"ST_Azimuth \u5b58\u5728\u4ee5\u4e0b\u8fb9\u7f18\u60c5\u51b5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e24\u4e2a\u8f93\u5165\u70b9\u76f8\u540c\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e24\u4e2a\u8f93\u5165\u70b9\u662f\u5b8c\u5168\u5bf9\u6620\u70b9\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4efb\u4e00\u8f93\u5165\u5730\u7406\u4f4d\u7f6e\u4e0d\u662f\u5355\u70b9\u6216\u4e3a\u7a7a\u5730\u7406\u4f4d\u7f6e\uff0c\u5219\u4f1a\u629b\u51fa\u9519\u8bef\u3002")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> SELECT st_azimuth(ST_Point(1, 0),ST_Point(0, 0));\n+----------------------------------------------------+\n| st_azimuth(st_point(1.0, 0.0), st_point(0.0, 0.0)) |\n+----------------------------------------------------+\n|                                   4.71238898038469 |\n+----------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> SELECT st_azimuth(ST_Point(0, 0),ST_Point(1, 0));\n+----------------------------------------------------+\n| st_azimuth(st_point(0.0, 0.0), st_point(1.0, 0.0)) |\n+----------------------------------------------------+\n|                                 1.5707963267948966 |\n+----------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT st_azimuth(ST_Point(0, 0),ST_Point(0, 1));\n+----------------------------------------------------+\n| st_azimuth(st_point(0.0, 0.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------+\n|                                                  0 |\n+----------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT st_azimuth(ST_Point(-30, 0),ST_Point(150, 0));\n+--------------------------------------------------------+\n| st_azimuth(st_point(-30.0, 0.0), st_point(150.0, 0.0)) |\n+--------------------------------------------------------+\n|                                                   NULL |\n+--------------------------------------------------------+\n1 row in set (0.02 sec)\n\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"ST_AZIMUTH,ST,AZIMUTH"))}m.isMDXComponent=!0}}]);