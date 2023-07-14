"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[16917],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"\u963f\u91cc\u4e91 Max Compute",language:"zh-CN"},l=void 0,c={unversionedId:"lakehouse/multi-catalog/max_compute",id:"lakehouse/multi-catalog/max_compute",title:"\u963f\u91cc\u4e91 Max Compute",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/multi-catalog/max_compute.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/max_compute",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/max_compute",draft:!1,tags:[],version:"current",frontMatter:{title:"\u963f\u91cc\u4e91 Max Compute",language:"zh-CN"},sidebar:"docs",previous:{title:"\u963f\u91cc\u4e91 DLF",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/dlf"},next:{title:"Elasticsearch",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/es"}},i={},u=[{value:"\u8fde\u63a5 Max Compute",id:"\u8fde\u63a5-max-compute",level:2},{value:"\u9650\u989d",id:"\u9650\u989d",level:2},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2}],p={toc:u},m="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u963f\u91cc\u4e91-maxcompute"},"\u963f\u91cc\u4e91 MaxCompute"),(0,r.kt)("p",null,"MaxCompute\u662f\u963f\u91cc\u4e91\u4e0a\u7684\u4f01\u4e1a\u7ea7SaaS\uff08Software as a Service\uff09\u6a21\u5f0f\u4e91\u6570\u636e\u4ed3\u5e93\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://help.aliyun.com/zh/maxcompute/product-overview/what-is-maxcompute?spm=a2c4g.11174283.0.i1"},"\u4ec0\u4e48\u662f MaxCompute"))),(0,r.kt)("h2",{id:"\u8fde\u63a5-max-compute"},"\u8fde\u63a5 Max Compute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG mc PROPERTIES (\n  "type" = "max_compute",\n  "mc.region" = "cn-beijing",\n  "mc.default.project" = "your-project",\n  "mc.access_key" = "ak",\n  "mc.secret_key" = "sk"\n);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mc.region"),"\uff1aMaxCompute\u5f00\u901a\u7684\u5730\u57df\u3002\u53ef\u4ee5\u4eceEndpoint\u4e2d\u627e\u5230\u5bf9\u5e94\u7684Region\uff0c\u53c2\u9605",(0,r.kt)("a",{parentName:"li",href:"https://help.aliyun.com/zh/maxcompute/user-guide/endpoints?spm=a2c4g.11186623.0.0"},"Endpoints"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mc.default.project"),"\uff1aMaxCompute\u9879\u76ee\u3002\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"li",href:"https://maxcompute.console.aliyun.com/cn-beijing/project-list"},"MaxCompute\u9879\u76ee\u5217\u8868"),"\u4e2d\u521b\u5efa\u548c\u7ba1\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mc.access_key"),"\uff1aAccessKey\u3002\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"\u963f\u91cc\u4e91\u63a7\u5236\u53f0")," \u4e2d\u521b\u5efa\u548c\u7ba1\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mc.secret_key"),"\uff1aSecretKey\u3002\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"\u963f\u91cc\u4e91\u63a7\u5236\u53f0")," \u4e2d\u521b\u5efa\u548c\u7ba1\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mc.public_access"),": \u5f53\u914d\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},'"mc.public_access"="true"'),"\uff0c\u53ef\u4ee5\u5f00\u542f\u516c\u7f51\u8bbf\u95ee\uff0c\u5efa\u8bae\u6d4b\u8bd5\u65f6\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"\u9650\u989d"},"\u9650\u989d"),(0,r.kt)("p",null,"\u8fde\u63a5MaxCompute\u65f6\uff0c\u6309\u91cf\u4ed8\u8d39\u7684Quota\u67e5\u8be2\u5e76\u53d1\u548c\u4f7f\u7528\u91cf\u6709\u9650\uff0c\u5982\u9700\u589e\u52a0\u8d44\u6e90\uff0c\u8bf7\u53c2\u7167MaxCompute\u6587\u6863\u3002\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://help.aliyun.com/zh/maxcompute/user-guide/manage-quotas-in-the-new-maxcompute-console"},"\u914d\u989d\u7ba1\u7406"),"."),(0,r.kt)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("p",null,"\u548c Hive Catalog \u4e00\u81f4\uff0c\u53ef\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/lakehouse/multi-catalog/hive"},"Hive Catalog")," \u4e2d ",(0,r.kt)("strong",{parentName:"p"},"\u5217\u7c7b\u578b\u6620\u5c04")," \u4e00\u8282\u3002"))}s.isMDXComponent=!0}}]);