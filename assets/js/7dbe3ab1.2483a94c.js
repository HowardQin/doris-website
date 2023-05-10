"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[35784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=s,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const o={title:"jsonb_exists_path",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/jsonb_exists_path",id:"sql-manual/sql-functions/json-functions/jsonb_exists_path",title:"jsonb_exists_path",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/json-functions/jsonb_exists_path.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/jsonb_exists_path",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/jsonb_exists_path",draft:!1,tags:[],version:"current",frontMatter:{title:"jsonb_exists_path",language:"en"},sidebar:"docs",previous:{title:"jsonb_extract",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/jsonb_extract"},next:{title:"jsonb_type",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/jsonb_type"}},l={},c=[{value:"jsonb_exists_path",id:"jsonb_exists_path",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"jsonb_exists_path"},"jsonb_exists_path"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("p",null,"It is used to judge whether the field specified by json_path exists in the JSONB data. If it exists, it returns TRUE, and if it does not exist, it returns FALSE"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"BOOLEAN jsonb_exists_path(JSONB j, VARCHAR json_path)\n")),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("p",null,"Refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Types/JSONB"},"jsonb tutorial")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("p",null,"jsonb_exists_path"))}f.isMDXComponent=!0}}]);