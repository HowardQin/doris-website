"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84452],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"\u6587\u6863\u8d21\u732e",language:"zh-CN"},o=void 0,s={unversionedId:"how-to-contribute/contribute-doc",id:"how-to-contribute/contribute-doc",title:"\u6587\u6863\u8d21\u732e",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/how-to-contribute/contribute-doc.md",sourceDirName:"how-to-contribute",slug:"/how-to-contribute/contribute-doc",permalink:"/zh-CN/community/how-to-contribute/contribute-doc",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6587\u6863\u8d21\u732e",language:"zh-CN"},sidebar:"community",previous:{title:"\u4ee3\u7801\u63d0\u4ea4\u6307\u5357",permalink:"/zh-CN/community/how-to-contribute/pull-request"},next:{title:"\u53d1\u7248\u51c6\u5907",permalink:"/zh-CN/community/release-and-verify/release-prepare"}},l={},p=[{value:"Doris Website \u76ee\u5f55\u7ed3\u6784",id:"doris-website-\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u5982\u4f55\u7f16\u5199\u547d\u4ee4\u5e2e\u52a9\u624b\u518c",id:"\u5982\u4f55\u7f16\u5199\u547d\u4ee4\u5e2e\u52a9\u624b\u518c",level:2},{value:"\u6587\u6863\u591a\u7248\u672c",id:"\u6587\u6863\u591a\u7248\u672c",level:2},{value:"\u53c2\u6570\u4ecb\u7ecd",id:"\u53c2\u6570\u4ecb\u7ecd",level:3},{value:"\u5355\u6807\u7b7e",id:"\u5355\u6807\u7b7e",level:3},{value:"\u591a\u6807\u7b7e",id:"\u591a\u6807\u7b7e",level:3},{value:"\u5305\u542b\u6ce8\u91ca",id:"\u5305\u542b\u6ce8\u91ca",level:3},{value:"\u884c\u5185\u6807\u7b7e",id:"\u884c\u5185\u6807\u7b7e",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"doris-\u6587\u6863\u8d21\u732e"},"Doris \u6587\u6863\u8d21\u732e"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4e3b\u8981\u4ecb\u7ecd Doris \u7684\u6587\u6863\u600e\u4e48\u4fee\u6539\u548c\u8d21\u732e\uff0c"),(0,r.kt)("p",null,"\u600e\u4e48\u53bb\u63d0\u4ea4\u4f60\u7684\u6587\u6863\u4fee\u6539\uff0c\u8bf7\u53c2\u7167"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./"},"\u4e3a Doris \u505a\u8d21\u732e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-CN/community/how-to-contribute/pull-request"},"\u4ee3\u7801\u63d0\u4ea4\u6307\u5357")),(0,r.kt)("p",null,"\u5386\u53f2\u7248\u672c\u7684\u6587\u6863\uff0c\u76f4\u63a5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris-website"},"apache/doris-website")," \u4e0a\u63d0\u4ea4 PR \u5373\u53ef\uff0c\u5982\u679c\u662f\u6700\u65b0\u7248\u672c\u7684\uff0c\u9700\u8981\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris-website"},"apache/doris-website"),"  \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris"},"apache/doris"),"  \u4ee3\u7801\u5e93\u4e0a\u540c\u65f6\u63d0\u4ea4\u4fee\u6539\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u4ecb\u7ecd Doris Website\u7ad9\u70b9\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u4ee5\u65b9\u4fbf\u7528\u6237\u4fee\u6539\u63d0\u4ea4\u6587\u6863"),(0,r.kt)("h2",{id:"doris-website-\u76ee\u5f55\u7ed3\u6784"},"Doris Website \u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 babel.config.js\n\u251c\u2500\u2500 blog\n\u2502\xa0\xa0 \u251c\u2500\u2500 1.1 Release.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 Annoucing.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 jd.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 meituan.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 release-note-0.15.0.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 release-note-1.0.0.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 xiaomi.md\n\u251c\u2500\u2500 build.sh\n\u251c\u2500\u2500 community\n\u2502\xa0\xa0 \u251c\u2500\u2500 design\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Flink-doris-connector-Design.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 doris_storage_optimization.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 grouping_sets_design.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 metadata-design.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 ......\n\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u251c\u2500\u2500 admin-manual\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 cluster-management\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 data-admin\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 http-actions\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 maint-monitor\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 multi-tenant.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 optimization.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 privilege-ldap\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 query-profile.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 sql-interception.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 ......\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 i18n\n\u2502\xa0\xa0 \u2514\u2500\u2500 zh-CN\n\u2502\xa0\xa0     \u251c\u2500\u2500 code.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 docusaurus-plugin-content-blog\n\u2502\xa0\xa0     \u251c\u2500\u2500 docusaurus-plugin-content-docs\n\u2502\xa0\xa0     \u251c\u2500\u2500 docusaurus-plugin-content-docs-community\n\u2502\xa0\xa0     \u2514\u2500\u2500 docusaurus-theme-classic\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 sidebars.json\n\u251c\u2500\u2500 sidebarsCommunity.json\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Icons\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 More\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 PageBanner\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 PageColumn\n\u2502\xa0\xa0 \u251c\u2500\u2500 ......\n\u251c\u2500\u2500 static\n\u2502\xa0\xa0 \u251c\u2500\u2500 images\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Bloom_filter.svg.png\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 .....\n\u2502\xa0\xa0 \u2514\u2500\u2500 js\n\u2502\xa0\xa0     \u2514\u2500\u2500 redirect.js\n\u251c\u2500\u2500 tree.out\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 versioned_docs\n\u2502\xa0\xa0 \u251c\u2500\u2500 version-0.15\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 administrator-guide\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 best-practices\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 extending-doris\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 getting-started\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 installing\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 internal\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 sql-reference\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 sql-reference-v2\n\u2502\xa0\xa0 \u2514\u2500\u2500 version-1.0\n\u2502\xa0\xa0     \u251c\u2500\u2500 administrator-guide\n\u2502\xa0\xa0     \u251c\u2500\u2500 benchmark\n\u2502\xa0\xa0     \u251c\u2500\u2500 extending-doris\n\u2502\xa0\xa0     \u251c\u2500\u2500 faq\n\u2502\xa0\xa0     \u251c\u2500\u2500 getting-started\n\u2502\xa0\xa0     \u251c\u2500\u2500 installing\n\u2502\xa0\xa0     \u251c\u2500\u2500 internal\n\u2502\xa0\xa0     \u251c\u2500\u2500 sql-reference\n\u2502\xa0\xa0     \u2514\u2500\u2500 sql-reference-v2\n\u251c\u2500\u2500 versioned_sidebars\n\u2502\xa0\xa0 \u251c\u2500\u2500 version-0.15-sidebars.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 version-1.0-sidebars.json\n\u251c\u2500\u2500 versions.json\n\n")),(0,r.kt)("p",null,"\u76ee\u5f55\u7ed3\u6784\u8bf4\u660e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u535a\u5ba2\u76ee\u5f55"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u82f1\u6587\u535a\u5ba2\u76ee\u5f55\u5728\u6839\u76ee\u5f55\u4e0b\u7684blog\u4e0b\u9762\uff0c\u6240\u6709\u535a\u5ba2\u7684\u82f1\u6587\u6587\u4ef6\u653e\u5230\u8fd9\u4e2a\u76ee\u5f55\u4e0b"),(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u6587\u535a\u5ba2\u7684\u76ee\u5f55\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"i18n/zh-CN/docusaurus-plugin-content-blog")," \u76ee\u5f55\u4e0b\uff0c\u6240\u6709\u4e2d\u6587\u535a\u5ba2\u6587\u4ef6\u653e\u5230\u8fd9\u4e2a\u4e0b\u9762"),(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u82f1\u6587\u535a\u5ba2\u7684\u6587\u4ef6\u540d\u79f0\u8981\u4e00\u81f4"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6587\u6863\u5185\u5bb9\u76ee\u5f55"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6700\u65b0\u7248\u672c\u7684\u82f1\u6587\u6587\u6863\u5185\u5bb9\u5728\u6839\u76ee\u5f55\u4e0b\u7684docs\u4e0b\u9762")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u82f1\u6587\u6587\u6863\u7684\u7248\u672c\u5728\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs/")," \u4e0b\u9762"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u76ee\u5f55\u53ea\u653e\u5386\u53f2\u7248\u672c\u7684\u6587\u6863"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 version-0.15\n\u2502\xa0\xa0 \u251c\u2500\u2500 administrator-guide\n\u2502\xa0\xa0 \u251c\u2500\u2500 best-practices\n\u2502\xa0\xa0 \u251c\u2500\u2500 extending-doris\n\u2502\xa0\xa0 \u251c\u2500\u2500 getting-started\n\u2502\xa0\xa0 \u251c\u2500\u2500 installing\n\u2502\xa0\xa0 \u251c\u2500\u2500 internal\n\u2502\xa0\xa0 \u251c\u2500\u2500 sql-reference\n\u2502\xa0\xa0 \u2514\u2500\u2500 sql-reference-v2\n\u2514\u2500\u2500 version-1.0\n    \u251c\u2500\u2500 administrator-guide\n    \u251c\u2500\u2500 benchmark\n    \u251c\u2500\u2500 extending-doris\n    \u251c\u2500\u2500 faq\n    \u251c\u2500\u2500 getting-started\n    \u251c\u2500\u2500 installing\n    \u251c\u2500\u2500 internal\n    \u251c\u2500\u2500 sql-reference\n    \u2514\u2500\u2500 sql-reference-v2\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u82f1\u6587\u6587\u6863\u7684\u7248\u672c\u63a7\u5236\u5728\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_sidebars")," \u4e0b\u9762"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 version-0.15-sidebars.json\n\u2514\u2500\u2500 version-1.0-sidebars.json\n")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u7684 json \u6587\u4ef6\u6309\u7167\u5bf9\u5e94\u7248\u672c\u7684\u76ee\u5f55\u7ed3\u6784\u8fdb\u884c\u7f16\u5199")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e2d\u6587\u6587\u6863\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/zh-CN/docusaurus-plugin-content-docs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u8fd9\u4e2a\u4e0b\u9762\u5bf9\u5e94\u4e0d\u540c\u7684\u7248\u672c\u76ee\u5f55\u53ca\u7248\u672c\u5bf9\u5e94\u7684 json \u6587\u4ef6 \uff0c\u5982\u4e0b\u6548\u679c"),(0,r.kt)("p",{parentName:"li"},"current\u662f\u5f53\u524d\u6700\u65b0\u7248\u672c\u7684\u6587\u6863\uff0c\u793a\u4f8b\u4e2d\u5bf9\u5e94\u7684\u662f 1.1 \u7248\u672c\uff0c\u4fee\u6539\u7684\u65f6\u5019\uff0c\u6839\u636e\u8981\u4fee\u6539\u7684\u6587\u6863\u7248\u672c\uff0c\u5728\u5bf9\u5e94\u76ee\u5f55\u4e0b\u627e\u5230\u76f8\u5e94\u7684\u6587\u4ef6\u4fee\u6539\uff0c\u63d0\u4ea4\u5373\u53ef\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 current\n\u2502\xa0\xa0 \u251c\u2500\u2500 admin-manual\n\u2502\xa0\xa0 \u251c\u2500\u2500 advanced\n\u2502\xa0\xa0 \u251c\u2500\u2500 benchmark\n\u2502\xa0\xa0 \u251c\u2500\u2500 data-operate\n\u2502\xa0\xa0 \u251c\u2500\u2500 data-table\n\u2502\xa0\xa0 \u251c\u2500\u2500 ecosystem\n\u2502\xa0\xa0 \u251c\u2500\u2500 faq\n\u2502\xa0\xa0 \u251c\u2500\u2500 get-starting\n\u2502\xa0\xa0 \u251c\u2500\u2500 install\n\u2502\xa0\xa0 \u251c\u2500\u2500 sql-manual\n\u2502\xa0\xa0 \u2514\u2500\u2500 summary\n\u251c\u2500\u2500 current.json\n\u251c\u2500\u2500 version-0.15\n\u2502\xa0\xa0 \u251c\u2500\u2500 administrator-guide\n\u2502\xa0\xa0 \u251c\u2500\u2500 best-practices\n\u2502\xa0\xa0 \u251c\u2500\u2500 extending-doris\n\u2502\xa0\xa0 \u251c\u2500\u2500 getting-started\n\u2502\xa0\xa0 \u251c\u2500\u2500 installing\n\u2502\xa0\xa0 \u251c\u2500\u2500 internal\n\u2502\xa0\xa0 \u251c\u2500\u2500 sql-reference\n\u2502\xa0\xa0 \u2514\u2500\u2500 sql-reference-v2\n\u251c\u2500\u2500 version-0.15.json\n\u251c\u2500\u2500 version-1.0\n\u2502\xa0\xa0 \u251c\u2500\u2500 administrator-guide\n\u2502\xa0\xa0 \u251c\u2500\u2500 benchmark\n\u2502\xa0\xa0 \u251c\u2500\u2500 extending-doris\n\u2502\xa0\xa0 \u251c\u2500\u2500 faq\n\u2502\xa0\xa0 \u251c\u2500\u2500 getting-started\n\u2502\xa0\xa0 \u251c\u2500\u2500 installing\n\u2502\xa0\xa0 \u251c\u2500\u2500 internal\n\u2502\xa0\xa0 \u251c\u2500\u2500 sql-reference\n\u2502\xa0\xa0 \u2514\u2500\u2500 sql-reference-v2\n\u2514\u2500\u2500 version-1.0.json\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Version Json \u6587\u4ef6"),(0,r.kt)("p",{parentName:"li"},"Current.json \u5bf9\u5e94\u7684\u662f\u6700\u65b0\u7248\u672c\u6587\u6863\u7684\u4e2d\u6587\u7ffb\u8bd1\u5185\u5bb9\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "version.label": {\n    "message": "1.1",\n    "description": "The label for version current"\n  },\n  "sidebar.docs.category.Getting Started": {\n    "message": "\u5feb\u901f\u5f00\u59cb",\n    "description": "The label for category Getting Started in sidebar docs"\n  }\n  .....\n}\n')),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar.docs.category.Getting Started")," \u548c\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.json"),"  \u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," \u5bf9\u5e94"),(0,r.kt)("p",{parentName:"li"},"\u4f8b\u5982\u521a\u624d\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar.docs.category.Getting Started")," \uff0c\u662f\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar")," \u524d\u7f00\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.json")," \u91cc\u9762\u7684\u7ed3\u6784\u5bf9\u5e94\u7684"),(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},'sidebar + "." + docs +  ".\'" + [ type ] + [ label ] ')," \u7ec4\u6210."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "docs": [\n        {\n            "type": "category",\n            "label": "Getting Started",\n            "items": [\n                "get-starting/get-starting"\n            ]\n        },\n        {\n            "type": "category",\n            "label": "Doris Introduction",\n            "items": [\n                "summary/basic-summary"\n            ]\n        }\n      .....\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u4e2d\u6587\u7684 version json \u6587\u4ef6\u4e2d\u652f\u6301 label \u7684\u7ffb\u8bd1\uff0c\u4e0d\u9700\u8981\u63cf\u8ff0\u6587\u6863\u5c42\u7ea7\u5173\u7cfb\uff0c\u6587\u6863\u5c42\u7ea7\u5173\u7cfb\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar.json")," \u6587\u4ef6\u91cc\u63cf\u8ff0\u7684")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6240\u6709\u7684\u6587\u6863\u5fc5\u987b\u6709\u82f1\u6587\u7684\uff0c\u4e2d\u6587\u624d\u80fd\u663e\u793a\uff0c\u5982\u679c\u82f1\u6587\u6ca1\u5199\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u7a7a\u6587\u4ef6\uff0c\u4e0d\u7136\u4e2d\u6587\u6587\u6863\u4e5f\u663e\u793a\u4e0d\u51fa\u6765\uff0c\u8fd9\u4e2a\u9002\u7528\u4e8e\u6240\u6709\u535a\u5ba2\u3001\u6587\u6863\u3001\u793e\u533a\u5185\u5bb9")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793e\u533a\u6587\u6863"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u5757\u7684\u6587\u6863\u4e0d\u533a\u5206\u7248\u672c\uff0c\u662f\u901a\u7528\u7684"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u82f1\u6587\u6587\u6863\u5728\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"community/")," \u76ee\u5f55\u4e0b\u9762\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e2d\u6587\u6587\u6863\u5728  ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/zh-CN/docusaurus-plugin-content-docs-community/")," \u76ee\u5f55\u4e0b\u9762\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u793e\u533a\u6587\u6863\u7684\u76ee\u5f55\u7ed3\u6784\u63a7\u5236\u5728\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebarsCommunity.json")," \u6587\u4ef6\u4e2d\uff0c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u793e\u533a\u6587\u6863\u76ee\u5f55\u7ed3\u6784\u5bf9\u5e94\u7684\u4e2d\u6587\u7ffb\u8bd1\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/zh-CN/docusaurus-plugin-content-docs-community/current.json")," \u6587\u4ef6\u4e2d"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version.label": {\n    "message": "Next",\n    "description": "The label for version current"\n  },\n  "sidebar.community.category.How to Contribute": {\n    "message": "\u8d21\u732e\u6307\u5357",\n    "description": "The label for category How to Contribute in sidebar community"\n  },\n  "sidebar.community.category.Release Process & Verification": {\n    "message": "\u7248\u672c\u53d1\u5e03\u4e0e\u6821\u9a8c",\n    "description": "The label for category Release Process & Verification in sidebar community"\n  },\n  "sidebar.community.category.Design Documents": {\n    "message": "\u8bbe\u8ba1\u6587\u6863",\n    "description": "The label for category Design Documents in sidebar community"\n  },\n  "sidebar.community.category.Developer Guide": {\n    "message": "\u5f00\u53d1\u8005\u624b\u518c",\n    "description": "The label for category Developer Guide in sidebar community"\n  }\n}\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u56fe\u7247"),(0,r.kt)("p",{parentName:"li"},"\u6240\u6709\u56fe\u7247\u90fd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"static/images "),"\u76ee\u5f55\u4e0b\u9762"))),(0,r.kt)("h2",{id:"\u5982\u4f55\u7f16\u5199\u547d\u4ee4\u5e2e\u52a9\u624b\u518c"},"\u5982\u4f55\u7f16\u5199\u547d\u4ee4\u5e2e\u52a9\u624b\u518c"),(0,r.kt)("p",null,"\u547d\u4ee4\u5e2e\u52a9\u624b\u518c\u6587\u6863\uff0c\u662f\u6307\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/sql-manual")," \u4e0b\u7684\u6587\u6863\u3002\u8fd9\u4e9b\u6587\u6863\u7528\u4e8e\u4e24\u4e2a\u5730\u65b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b98\u7f51\u6587\u6863\u5c55\u793a\u3002"),(0,r.kt)("li",{parentName:"ol"},"HELP \u547d\u4ee4\u7684\u8f93\u51fa\u3002")),(0,r.kt)("p",null,"\u4e3a\u4e86\u652f\u6301 HELP \u547d\u4ee4\u8f93\u51fa\uff0c\u8fd9\u4e9b\u6587\u6863\u9700\u8981\u4e25\u683c\u6309\u7167\u4ee5\u4e0b\u683c\u5f0f\u6392\u7248\u7f16\u5199\uff0c\u5426\u5219\u65e0\u6cd5\u901a\u8fc7\u51c6\u5165\u68c0\u67e5\u3002"),(0,r.kt)("p",null,"\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW ALTER")," \u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'---\n{\n    "title": "SHOW-ALTER",\n    "language": "zh-CN"\n}\n---\n\n\x3c!--\nLicensed to the Apache Software Foundation (ASF) under one\nor more contributor license agreements.  See the NOTICE file\ndistributed with this work for additional information\nregarding copyright ownership.  The ASF licenses this file\nto you under the Apache License, Version 2.0 (the\n"License"); you may not use this file except in compliance\nwith the License.  You may obtain a copy of the License at\n\n  http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing,\nsoftware distributed under the License is distributed on an\n"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, either express or implied.  See the License for the\nspecific language governing permissions and limitations\nunder the License.\n--\x3e\n\n## SHOW-ALTER\n\n### Name\n\nSHOW ALTER\n\n### Description\n\n\uff08\u63cf\u8ff0\u547d\u4ee4\u8bed\u6cd5\u3002\uff09\n\n### Example\n\n\uff08\u63d0\u4f9b\u547d\u4ee4\u793a\u4f8b\u3002\uff09\n\n### Keywords\n\nSHOW, ALTER\n\n### Best Practice\n\n\uff08\u6700\u4f73\u5b9e\u8df5\uff08\u5982\u6709\uff09\uff09\n\n')),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u4e0d\u8bba\u4e2d\u6587\u8fd8\u662f\u82f1\u6587\u6587\u6863\uff0c\u4ee5\u4e0a\u6807\u9898\u90fd\u662f\u7528\u82f1\u6587\uff0c\u5e76\u4e14\u6ce8\u610f\u6807\u9898\u7684\u5c42\u7ea7\u3002"),(0,r.kt)("h2",{id:"\u6587\u6863\u591a\u7248\u672c"},"\u6587\u6863\u591a\u7248\u672c"),(0,r.kt)("p",null,"\u7f51\u7ad9\u6587\u6863\u652f\u6301\u901a\u8fc7 html \u6807\u7b7e\u6807\u8bb0\u7248\u672c\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"<version>")," \u6807\u7b7e\u6807\u8bb0\u6587\u6863\u4e2d\u7684\u67d0\u6bb5\u5185\u5bb9\u662f\u4ece\u54ea\u4e2a\u7248\u672c\u5f00\u59cb\u7684\uff0c\u6216\u8005\u4ece\u54ea\u4e2a\u7248\u672c\u79fb\u9664\u3002"),(0,r.kt)("h3",{id:"\u53c2\u6570\u4ecb\u7ecd"},"\u53c2\u6570\u4ecb\u7ecd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"since"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u8be5\u7248\u672c\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7248\u672c\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deprecated"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u8be5\u7248\u672c\u79fb\u9664"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7248\u672c\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"comment"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ce8\u91ca"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6709\u9ed8\u8ba4\u548c\u884c\u5185\u4e24\u79cd\u6837\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u4f20\u503c\u8868\u793a\u9ed8\u8ba4\u6837\u5f0f\uff0c\u4f20inline\u8868\u793a\u884c\u5185\u6837\u5f0f")))),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"<version>")," \u6807\u7b7e\u524d\u540e\u8981\u6709\u7a7a\u884c\uff0c\u907f\u514d\u6837\u5f0f\u6e32\u67d3\u5f02\u5e38\u3002"),(0,r.kt)("h3",{id:"\u5355\u6807\u7b7e"},"\u5355\u6807\u7b7e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n<version since="1.1">\n\nApache Doris was first born as Palo project for Baidu\'s ad reporting business,\n officially open-sourced in 2017, donated by Baidu to the Apache Foundation \n for incubation in July 2018, and then incubated and operated by members of \n the incubator project management committee under the guidance of \n Apache mentors. Currently, the Apache Doris community has gathered \n more than 300 contributors from nearly 100 companies in different \n industries, and the number of active contributors is close to 100 per month. \n Apache Doris has graduated from Apache incubator successfully and \n become a Top-Level Project in June 2022.\n\n</version>\n\n')),(0,r.kt)("p",null,"\u6e32\u67d3\u6837\u5f0f\uff1a"),(0,r.kt)("version",{since:"1.1"},(0,r.kt)("p",null,"Apache Doris was first born as Palo project for Baidu's ad reporting business,\nofficially open-sourced in 2017, donated by Baidu to the Apache Foundation\nfor incubation in July 2018, and then incubated and operated by members of\nthe incubator project management committee under the guidance of\nApache mentors. Currently, the Apache Doris community has gathered\nmore than 300 contributors from nearly 100 companies in different\nindustries, and the number of active contributors is close to 100 per month.\nApache Doris has graduated from Apache incubator successfully and\nbecome a Top-Level Project in June 2022.")),(0,r.kt)("h3",{id:"\u591a\u6807\u7b7e"},"\u591a\u6807\u7b7e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n<version since="1.2" deprecated="1.5">\n\n# Usage Scenarios\n\nAs shown in the figure below, after various data integration and processing, the data sources are usually stored in the real-time data warehouse Doris and the offline data lake or data warehouse (in Apache Hive, Apache Iceberg or Apache Hudi).\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sekvbs5ih5rb16wz6n9k.png)\n\nApache Doris is widely used in the following scenarios:\n\n</version>\n\n')),(0,r.kt)("p",null,"\u6e32\u67d3\u6837\u5f0f\uff1a"),(0,r.kt)("version",{since:"1.2",deprecated:"1.5"},(0,r.kt)("h1",{id:"usage-scenarios"},"Usage Scenarios"),(0,r.kt)("p",null,"As shown in the figure below, after various data integration and processing, the data sources are usually stored in the real-time data warehouse Doris and the offline data lake or data warehouse (in Apache Hive, Apache Iceberg or Apache Hudi).\n",(0,r.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sekvbs5ih5rb16wz6n9k.png",alt:"Image description"})),(0,r.kt)("p",null,"Apache Doris is widely used in the following scenarios:")),(0,r.kt)("h3",{id:"\u5305\u542b\u6ce8\u91ca"},"\u5305\u542b\u6ce8\u91ca"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n<version since="1.3" comment="This is comment, Both types of processes are horizontally scalable, and a single cluster can support up to hundreds of machines and tens of petabytes of storage capacity. ">\n\n-   Frontend\uff08FE\uff09: It is mainly responsible for user request access, query parsing and planning, management of metadata, and node management-related work.\n-   Backend\uff08BE\uff09: It is mainly responsible for data storage and query plan execution.\n\nBoth types of processes are horizontally scalable, and a single cluster can support up to hundreds of machines and tens of petabytes of storage capacity. And these two types of processes guarantee high availability of services and high reliability of data through consistency protocols. This highly integrated architecture design greatly reduces the operation and maintenance cost of a distributed system.\n\n</version>\n\n')),(0,r.kt)("p",null,"\u6e32\u67d3\u6837\u5f0f\uff1a"),(0,r.kt)("version",{since:"1.3",comment:"This is comment, Both types of processes are horizontally scalable, and a single cluster can support up to hundreds of machines and tens of petabytes of storage capacity. "},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Frontend\uff08FE\uff09: It is mainly responsible for user request access, query parsing and planning, management of metadata, and node management-related work."),(0,r.kt)("li",{parentName:"ul"},"Backend\uff08BE\uff09: It is mainly responsible for data storage and query plan execution.")),(0,r.kt)("p",null,"Both types of processes are horizontally scalable, and a single cluster can support up to hundreds of machines and tens of petabytes of storage capacity. And these two types of processes guarantee high availability of services and high reliability of data through consistency protocols. This highly integrated architecture design greatly reduces the operation and maintenance cost of a distributed system.")),(0,r.kt)("h3",{id:"\u884c\u5185\u6807\u7b7e"},"\u884c\u5185\u6807\u7b7e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'In terms of the storage engine, Doris uses columnar storage to encode and compress and read data by column, <version since="1.0" type="inline" > enabling a very high compression ratio while reducing a large number of scans of non-relevant data,</version> thus making more efficient use of IO and CPU resources.\n')),(0,r.kt)("p",null,"\u6e32\u67d3\u6837\u5f0f\uff1a"),(0,r.kt)("p",null,"In terms of the storage engine, Doris uses columnar storage to encode and compress and read data by column, ",(0,r.kt)("version",{since:"1.0",type:"inline"}," enabling a very high compression ratio while reducing a large number of scans of non-relevant data,")," thus making more efficient use of IO and CPU resources."))}u.isMDXComponent=!0}}]);