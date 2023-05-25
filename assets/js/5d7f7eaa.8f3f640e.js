"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[16207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,p=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(p,a(a({ref:t},f),{},{components:n})):r.createElement(p,a({ref:t},f))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={title:"Config Dir",language:"en"},a=void 0,l={unversionedId:"admin-manual/config/config-dir",id:"admin-manual/config/config-dir",title:"Config Dir",description:"\x3c!--",source:"@site/docs/admin-manual/config/config-dir.md",sourceDirName:"admin-manual/config",slug:"/admin-manual/config/config-dir",permalink:"/docs/dev/admin-manual/config/config-dir",draft:!1,tags:[],version:"current",frontMatter:{title:"Config Dir",language:"en"},sidebar:"docs",previous:{title:"BE OOM Analysis",permalink:"/docs/dev/admin-manual/maint-monitor/memory-management/be-oom-analysis"},next:{title:"FE Configuration",permalink:"/docs/dev/admin-manual/config/fe-config"}},c={},s=[{value:"hdfs-site.xml and hive-site.xml",id:"hdfs-sitexml-and-hive-sitexml",level:2}],f={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"config-dir"},"Config Dir"),(0,i.kt)("p",null,"The configuration file directory for FE and BE is ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/"),". In addition to storing the default fe.conf, be.conf and other files, this directory is also used for the common configuration file storage directory."),(0,i.kt)("p",null,"Users can store some configuration files in it, and the system will automatically read them."),(0,i.kt)("version",{since:"1.2.0"},(0,i.kt)("h2",{id:"hdfs-sitexml-and-hive-sitexml"},"hdfs-site.xml and hive-site.xml"),(0,i.kt)("p",null,"In some functions of Doris, you need to access data on HDFS, or access Hive metastore."),(0,i.kt)("p",null,"We can manually fill in various HDFS/Hive parameters in the corresponding statement of the function."),(0,i.kt)("p",null,"But these parameters are very many, if all are filled in manually, it is very troublesome."),(0,i.kt)("p",null,"Therefore, users can place the HDFS or Hive configuration file hdfs-site.xml/hive-site.xml directly in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/")," directory. Doris will automatically read these configuration files."),(0,i.kt)("p",null,"The configuration that the user fills in the command will overwrite the configuration items in the configuration file."),(0,i.kt)("p",null,"In this way, users only need to fill in a small amount of configuration to complete the access to HDFS/Hive.")))}m.isMDXComponent=!0}}]);