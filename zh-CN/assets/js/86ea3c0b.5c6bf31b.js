"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[56803],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},26922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"\u9a8c\u8bc1 Apache \u53d1\u5e03\u7248\u672c",language:"zh-CN"},l=void 0,c={unversionedId:"release-and-verify/release-verify",id:"release-and-verify/release-verify",title:"\u9a8c\u8bc1 Apache \u53d1\u5e03\u7248\u672c",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/release-and-verify/release-verify.md",sourceDirName:"release-and-verify",slug:"/release-and-verify/release-verify",permalink:"/zh-CN/community/release-and-verify/release-verify",draft:!1,tags:[],version:"current",frontMatter:{title:"\u9a8c\u8bc1 Apache \u53d1\u5e03\u7248\u672c",language:"zh-CN"},sidebar:"community",previous:{title:"\u5b8c\u6210\u53d1\u5e03",permalink:"/zh-CN/community/release-and-verify/release-complete"},next:{title:"\u5b89\u5168",permalink:"/zh-CN/community/security"}},o={},s=[{value:"1. \u4e0b\u8f7d\u6e90\u7801\u5305\u3001\u7b7e\u540d\u6587\u4ef6\u3001\u6821\u9a8c\u503c\u6587\u4ef6\u548c KEYS",id:"1-\u4e0b\u8f7d\u6e90\u7801\u5305\u7b7e\u540d\u6587\u4ef6\u6821\u9a8c\u503c\u6587\u4ef6\u548c-keys",level:2},{value:"2. \u68c0\u67e5\u7b7e\u540d\u548c\u6821\u9a8c\u503c",id:"2-\u68c0\u67e5\u7b7e\u540d\u548c\u6821\u9a8c\u503c",level:2},{value:"3. \u9a8c\u8bc1\u6e90\u7801\u534f\u8bae\u5934",id:"3-\u9a8c\u8bc1\u6e90\u7801\u534f\u8bae\u5934",level:2},{value:"4. \u9a8c\u8bc1\u7f16\u8bd1",id:"4-\u9a8c\u8bc1\u7f16\u8bd1",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9a8c\u8bc1-apache-\u53d1\u5e03\u7248\u672c"},"\u9a8c\u8bc1 Apache \u53d1\u5e03\u7248\u672c"),(0,r.kt)("p",null,"\u8be5\u9a8c\u8bc1\u6b65\u9aa4\u53ef\u7528\u4e8e\u53d1\u7248\u6295\u7968\u65f6\u7684\u9a8c\u8bc1\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u5bf9\u5df2\u53d1\u5e03\u7248\u672c\u7684\u9a8c\u8bc1\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u9a8c\u8bc1\uff1a"),(0,r.kt)("ol",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ol",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u4e0b\u8f7d\u94fe\u63a5\u5408\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ol",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u6821\u9a8c\u503c\u548c PGP \u7b7e\u540d\u5408\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ol",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u4ee3\u7801\u548c\u5f53\u524d\u53d1\u5e03\u7248\u672c\u76f8\u5339\u914d\u3002"),(0,r.kt)("li",{parentName:"ol",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","LICENSE \u548c NOTICE \u6587\u4ef6\u6b63\u786e\u3002"),(0,r.kt)("li",{parentName:"ol",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u6240\u6709\u6587\u4ef6\u90fd\u643a\u5e26\u5fc5\u8981\u7684\u534f\u8bae\u8bf4\u660e\u3002"),(0,r.kt)("li",{parentName:"ol",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5728\u6e90\u7801\u5305\u4e2d\u4e0d\u5305\u542b\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684\u5185\u5bb9\u3002"),(0,r.kt)("li",{parentName:"ol",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u7f16\u8bd1\u80fd\u591f\u987a\u5229\u6267\u884c\u3002")),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4ee5 Doris Core \u7248\u672c\u7684\u9a8c\u8bc1\u4e3a\u4f8b\u3002\u5176\u4ed6\u7ec4\u4ef6\u6ce8\u610f\u4fee\u6539\u5bf9\u5e94\u540d\u79f0\u3002"),(0,r.kt)("h2",{id:"1-\u4e0b\u8f7d\u6e90\u7801\u5305\u7b7e\u540d\u6587\u4ef6\u6821\u9a8c\u503c\u6587\u4ef6\u548c-keys"},"1. \u4e0b\u8f7d\u6e90\u7801\u5305\u3001\u7b7e\u540d\u6587\u4ef6\u3001\u6821\u9a8c\u503c\u6587\u4ef6\u548c KEYS"),(0,r.kt)("p",null,"\u4e0b\u8f7d\u6240\u6709\u76f8\u5173\u6587\u4ef6, \u4ee5 a.b.c-incubating \u4e3a\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz\n\nwget https://www.apache.org/dist/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz.sha512\n\nwget https://www.apache.org/dist/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz.asc\n\nwget https://downloads.apache.org/incubator/doris/KEYS\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u662f\u6295\u7968\u9a8c\u8bc1\uff0c\u5219\u9700\u4ece\u90ae\u4ef6\u4e2d\u63d0\u4f9b\u7684 svn \u5730\u5740\u83b7\u53d6\u76f8\u5173\u6587\u4ef6\u3002")),(0,r.kt)("h2",{id:"2-\u68c0\u67e5\u7b7e\u540d\u548c\u6821\u9a8c\u503c"},"2. \u68c0\u67e5\u7b7e\u540d\u548c\u6821\u9a8c\u503c"),(0,r.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 GunPG\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"CentOS: yum install gnupg\nUbuntu: apt-get install gnupg\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u4ee5 Doris \u4e3b\u4ee3\u7801 release \u4e3a\u4f8b\u3002\u5176\u4ed6 release \u7c7b\u4f3c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --import KEYS\ngpg --verify apache-doris-a.b.c-incubating-src.tar.gz.asc apache-doris-a.b.c-incubating-src.tar.gz\nsha512sum --check apache-doris-a.b.c-incubating-src.tar.gz.sha512\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a gpg --import \u5982\u679c\u62a5\u9519 ",(0,r.kt)("strong",{parentName:"p"},"no valid user IDs"),", \u6b64\u65f6\u53ef\u80fd\u662fgpg\u7248\u672c\u4e0d\u5339\u914d\uff0c\u53ef\u5347\u7ea7\u7248\u672c\u81f32.2.x\u6216\u4ee5\u4e0a")),(0,r.kt)("h2",{id:"3-\u9a8c\u8bc1\u6e90\u7801\u534f\u8bae\u5934"},"3. \u9a8c\u8bc1\u6e90\u7801\u534f\u8bae\u5934"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking-eyes"},"skywalking-eyes")," \u8fdb\u884c\u534f\u8bae\u9a8c\u8bc1\u3002"),(0,r.kt)("p",null,"\u8fdb\u5165\u6e90\u7801\u6839\u76ee\u5f55\u5e76\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo docker run -it --rm -v $(pwd):/github/workspace apache/skywalking-eyes header check\n")),(0,r.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INFO GITHUB_TOKEN is not set, license-eye won't comment on the pull request\nINFO Loading configuraftion from file: .licenserc.yaml\nINFO Totally checked 5611 files, valid: 3926, invalid: 0, ignored: 1685, fixed: 0\n")),(0,r.kt)("p",null,"\u5982\u679c invalid \u4e3a 0\uff0c\u5219\u8868\u793a\u9a8c\u8bc1\u901a\u8fc7\u3002"),(0,r.kt)("h2",{id:"4-\u9a8c\u8bc1\u7f16\u8bd1"},"4. \u9a8c\u8bc1\u7f16\u8bd1"),(0,r.kt)("p",null,"\u8bf7\u53c2\u9605\u5404\u7ec4\u4ef6\u7684\u7f16\u8bd1\u6587\u6863\u9a8c\u8bc1\u7f16\u8bd1\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Doris \u4e3b\u4ee3\u7801\u7f16\u8bd1\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"/docs/install/source-install/compilation"},"\u7f16\u8bd1\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},"Flink Doris Connector \u7f16\u8bd1\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"/docs/ecosystem/flink-doris-connector"},"\u7f16\u8bd1\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},"Spark Doris Connector \u7f16\u8bd1\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"/docs/ecosystem/spark-doris-connector"},"\u7f16\u8bd1\u6587\u6863"))))}m.isMDXComponent=!0}}]);