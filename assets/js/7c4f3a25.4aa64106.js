"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[79934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"User Property",language:"en"},o=void 0,l={unversionedId:"admin-manual/config/user-property",id:"admin-manual/config/user-property",title:"User Property",description:"\x3c!--",source:"@site/docs/admin-manual/config/user-property.md",sourceDirName:"admin-manual/config",slug:"/admin-manual/config/user-property",permalink:"/docs/dev/admin-manual/config/user-property",draft:!1,tags:[],version:"current",frontMatter:{title:"User Property",language:"en"},sidebar:"docs",previous:{title:"BE Configuration",permalink:"/docs/dev/admin-manual/config/be-config"},next:{title:"Authority Management",permalink:"/docs/dev/admin-manual/privilege-ldap/user-privilege"}},u={},s=[{value:"View configuration items",id:"view-configuration-items",level:2},{value:"Set configuration items",id:"set-configuration-items",level:2},{value:"Application examples",id:"application-examples",level:2},{value:"Configuration item list",id:"configuration-item-list",level:2},{value:"max_user_connections",id:"max_user_connections",level:3},{value:"max_query_instances",id:"max_query_instances",level:3},{value:"resource",id:"resource",level:3},{value:"quota",id:"quota",level:3},{value:"default_load_cluster",id:"default_load_cluster",level:3},{value:"load_cluster",id:"load_cluster",level:3}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"user-configuration-item"},"User configuration item"),(0,i.kt)("p",null,"This document mainly introduces related configuration items at the User level. The configuration of the User level is mainly effective for a single user. Each user can set their own User property. Does not affect each other."),(0,i.kt)("h2",{id:"view-configuration-items"},"View configuration items"),(0,i.kt)("p",null,"After the FE is started, on the MySQL client, use the following command to view the User configuration items:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SHOW PROPERTY [FOR user] [LIKE key pattern]")),(0,i.kt)("p",null,"The specific syntax can be queried through the command: ",(0,i.kt)("inlineCode",{parentName:"p"},"help show property;"),"."),(0,i.kt)("h2",{id:"set-configuration-items"},"Set configuration items"),(0,i.kt)("p",null,"After FE is started, on the MySQL client, modify the User configuration items with the following command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SET PROPERTY [FOR'user'] 'key' = 'value' [,'key' ='value']")),(0,i.kt)("p",null,"The specific syntax can be queried through the command: ",(0,i.kt)("inlineCode",{parentName:"p"},"help set property;"),"."),(0,i.kt)("p",null,"User-level configuration items will only take effect for the specified users, and will not affect the configuration of other users."),(0,i.kt)("h2",{id:"application-examples"},"Application examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify the max_user_connections of user Billie"),(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW PROPERTY FOR 'Billie' LIKE '%max_user_connections%';")," to check that the current maximum number of links for Billie users is 100."),(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"SET PROPERTY FOR 'Billie' 'max_user_connections' = '200';")," to modify the current maximum number of connections for Billie users to 200."))),(0,i.kt)("h2",{id:"configuration-item-list"},"Configuration item list"),(0,i.kt)("h3",{id:"max_user_connections"},"max_user_connections"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The maximum number of user connections, the default value is 100 In general, this parameter does not need to be changed unless the number of concurrent queries exceeds the default value.\n")),(0,i.kt)("h3",{id:"max_query_instances"},"max_query_instances"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The maximum number of instances that the user can use at a certain point in time, The default value is -1, negative number means use default_max_query_instances config.\n")),(0,i.kt)("h3",{id:"resource"},"resource"),(0,i.kt)("h3",{id:"quota"},"quota"),(0,i.kt)("h3",{id:"default_load_cluster"},"default_load_cluster"),(0,i.kt)("h3",{id:"load_cluster"},"load_cluster"))}m.isMDXComponent=!0}}]);