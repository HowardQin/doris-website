"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[20002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"ST_Distance_Sphere",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-functions/spatial-functions/st_distance_sphere",id:"version-1.2/sql-manual/sql-functions/spatial-functions/st_distance_sphere",title:"ST_Distance_Sphere",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_distance_sphere.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_distance_sphere",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_distance_sphere",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ST_Distance_Sphere",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_Circle",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_circle"},next:{title:"ST_Angle",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_angle"}},o={},c=[{value:"ST_Distance_Sphere",id:"st_distance_sphere",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"st_distance_sphere"},"ST_Distance_Sphere"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DOUBLE ST_Distance_Sphere(DOUBLE x_lng, DOUBLE x_lat, DOUBLE y_lng, DOUBLE y_lat)")),(0,a.kt)("p",null,"\u8ba1\u7b97\u5730\u7403\u4e24\u70b9\u4e4b\u95f4\u7684\u7403\u9762\u8ddd\u79bb\uff0c\u5355\u4f4d\u4e3a \u7c73\u3002\u4f20\u5165\u7684\u53c2\u6570\u5206\u522b\u4e3aX\u70b9\u7684\u7ecf\u5ea6\uff0cX\u70b9\u7684\u7eac\u5ea6\uff0cY\u70b9\u7684\u7ecf\u5ea6\uff0cY\u70b9\u7684\u7eac\u5ea6\u3002"),(0,a.kt)("p",null,"x_lng \u548c y_lng \u90fd\u662f\u7ecf\u5ea6\u6570\u636e\uff0c\u5408\u7406\u7684\u53d6\u503c\u8303\u56f4\u662f ","[-180, 180]","\u3002\nx_lat \u548c y_lat \u90fd\u662f\u7eac\u5ea6\u6570\u636e\uff0c\u5408\u7406\u7684\u53d6\u503c\u8303\u56f4\u662f ","[-90, 90]","\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n+----------------------------------------------------------------------------+\n| st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+----------------------------------------------------------------------------+\n|                                                         7336.9135549995917 |\n+----------------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ST_DISTANCE_SPHERE,ST,DISTANCE,SPHERE"))}d.isMDXComponent=!0}}]);