"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[49497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),E=a,d=u["".concat(s,".").concat(E)]||u[E]||m[E]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=E;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},14798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"ALTER-RESOURCE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",title:"ALTER-RESOURCE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-RESOURCE",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-TABLE-COLUMN",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"},next:{title:"CANCEL-ALTER-TABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE"}},s={},p=[{value:"ALTER-RESOURCE",id:"alter-resource",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"alter-resource"},"ALTER-RESOURCE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"ALTER RESOURCE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u5df2\u6709\u7684\u8d44\u6e90\u3002\u4ec5 root \u6216 admin \u7528\u6237\u53ef\u4ee5\u4fee\u6539\u8d44\u6e90\u3002\n\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER RESOURCE \'resource_name\'\nPROPERTIES ("key"="value", ...);\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff1aresource type \u4e0d\u652f\u6301\u4fee\u6539\u3002"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u540d\u4e3a spark0 \u7684 Spark \u8d44\u6e90\u7684\u5de5\u4f5c\u76ee\u5f55\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER RESOURCE \'spark0\' PROPERTIES ("working_dir" = "hdfs://127.0.0.1:10000/tmp/doris_new");\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u540d\u4e3a remote_s3 \u7684 S3 \u8d44\u6e90\u7684\u6700\u5927\u8fde\u63a5\u6570\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER RESOURCE \'remote_s3\' PROPERTIES ("AWS_MAX_CONNECTIONS" = "100");\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u51b7\u70ed\u5206\u79bbS3\u8d44\u6e90\u76f8\u5173\u4fe1\u606f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4fee\u6539\u9879",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AWS_MAX_CONNECTIONS")," s3\u6700\u5927\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba450"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AWS_CONNECTION_TIMEOUT_MS")," s3\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba41000ms"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_KEY")," s3\u7684sk\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY")," s3\u7684ak\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AWS_REQUEST_TIMEOUT_MS")," s3\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba43000ms"))),(0,a.kt)("li",{parentName:"ul"},"\u7981\u6b62\u4fee\u6539\u9879",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AWS_REGION")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AWS_BUCKET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AWS_ROOT_PATH")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AWS_ENDPOINT"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'  ALTER RESOURCE "showPolicy_1_resource" PROPERTIES("AWS_MAX_CONNECTIONS" = "1111");\n')),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER, RESOURCE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);