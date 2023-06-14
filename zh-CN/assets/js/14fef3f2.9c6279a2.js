"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),u=n,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={title:"\u5b8c\u6210\u53d1\u5e03",language:"zh-CN"},l=void 0,s={unversionedId:"release-and-verify/release-complete",id:"release-and-verify/release-complete",title:"\u5b8c\u6210\u53d1\u5e03",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/release-and-verify/release-complete.md",sourceDirName:"release-and-verify",slug:"/release-and-verify/release-complete",permalink:"/zh-CN/community/release-and-verify/release-complete",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5b8c\u6210\u53d1\u5e03",language:"zh-CN"},sidebar:"community",previous:{title:"\u53d1\u5e03 Doris SDK",permalink:"/zh-CN/community/release-and-verify/release-doris-sdk"},next:{title:"\u9a8c\u8bc1 Apache \u53d1\u5e03\u7248\u672c",permalink:"/zh-CN/community/release-and-verify/release-verify"}},p={},i=[{value:"\u4e0a\u4f20 package \u5230 release",id:"\u4e0a\u4f20-package-\u5230-release",level:2},{value:"\u5728 Doris \u5b98\u7f51\u548c github \u53d1\u5e03\u94fe\u63a5",id:"\u5728-doris-\u5b98\u7f51\u548c-github-\u53d1\u5e03\u94fe\u63a5",level:2},{value:"\u521b\u5efa\u4e0b\u8f7d\u94fe\u63a5",id:"\u521b\u5efa\u4e0b\u8f7d\u94fe\u63a5",level:3},{value:"Maven",id:"maven",level:3},{value:"\u51c6\u5907 release note",id:"\u51c6\u5907-release-note",level:3},{value:"svn \u4e0a\u6e05\u7406\u65e7\u7248\u672c\u7684\u5305",id:"svn-\u4e0a\u6e05\u7406\u65e7\u7248\u672c\u7684\u5305",level:3},{value:"Announce \u90ae\u4ef6",id:"announce-\u90ae\u4ef6",level:2}],c={toc:i},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5b8c\u6210\u53d1\u5e03"},"\u5b8c\u6210\u53d1\u5e03"),(0,n.kt)("p",null,"\u672c\u6587\u6863\u4e2d\u7684\u6b65\u9aa4\uff0c\u662f\u5728\u5b8c\u6210 dev@doris \u90ae\u4ef6\u7ec4\u4e2d\u7684\u53d1\u7248\u6295\u7968\u5e76\u901a\u8fc7\u540e\uff0c\u8fdb\u884c\u7684\u540e\u7eed\u6b65\u9aa4\u3002"),(0,n.kt)("h2",{id:"\u4e0a\u4f20-package-\u5230-release"},"\u4e0a\u4f20 package \u5230 release"),(0,n.kt)("p",null,"\u5f53\u6b63\u5f0f\u53d1\u5e03\u6295\u7968\u6210\u529f\u540e\uff0c\u5148\u53d1","[Result]","\u90ae\u4ef6\uff0c\u7136\u540e\u5c31\u51c6\u5907 release package\u3002\n\u5c06\u4e4b\u524d\u5728dev\u4e0b\u53d1\u5e03\u7684\u5bf9\u5e94\u6587\u4ef6\u5939\u4e0b\u7684\u6e90\u7801\u5305\u3001\u7b7e\u540d\u6587\u4ef6\u548chash\u6587\u4ef6\u62f7\u8d1d\u5230\u53e6\u4e00\u4e2a\u76ee\u5f55 1.1.0\uff0c\u6ce8\u610f\u6587\u4ef6\u540d\u5b57\u4e2d\u4e0d\u8981rcxx (\u53ef\u4ee5rename\uff0c\u4f46\u4e0d\u8981\u91cd\u65b0\u8ba1\u7b97\u7b7e\u540d\uff0chash\u53ef\u4ee5\u91cd\u65b0\u8ba1\u7b97\uff0c\u7ed3\u679c\u4e0d\u4f1a\u53d8)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e00\u6b65\u4ec5PMC\u6210\u5458\u6709\u6743\u9650\u64cd\u4f5c\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'From:\nhttps://dist.apache.org/repos/dist/dev/doris/\n\nTo:\nhttps://dist.apache.org/repos/dist/release/doris/\n\nEg:\nsvn mv -m "move doris 1.1.0-rc05 to release" https://dist.apache.org/repos/dist/dev/doris/1.1 https://dist.apache.org/repos/dist/release/doris/1.1\n')),(0,n.kt)("p",null,"\u7b2c\u4e00\u6b21\u53d1\u5e03\u7684\u8bdd KEYS \u6587\u4ef6\u4e5f\u9700\u8981\u62f7\u8d1d\u8fc7\u6765\u3002\u7136\u540eadd\u5230svn release \u4e0b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"add \u6210\u529f\u540e\u5c31\u53ef\u4ee5\u5728\u4e0b\u9762\u7f51\u5740\u4e0a\u770b\u5230\u4f60\u53d1\u5e03\u7684\u6587\u4ef6\nhttps://dist.apache.org/repos/dist/release/doris/1.xx/\n\n\u7a0d\u7b49\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u80fd\u5728 apache \u5b98\u7f51\u770b\u5230\uff1a\nhttp://www.apache.org/dist/doris/1.xx/\n")),(0,n.kt)("h2",{id:"\u5728-doris-\u5b98\u7f51\u548c-github-\u53d1\u5e03\u94fe\u63a5"},"\u5728 Doris \u5b98\u7f51\u548c github \u53d1\u5e03\u94fe\u63a5"),(0,n.kt)("p",null,"\u6211\u4eec\u4ee5 Doris Core \u4e3a\u4f8b\u3002\u5176\u4ed6\u7ec4\u4ef6\u6ce8\u610f\u66ff\u6362\u5bf9\u5e94\u7684\u540d\u79f0\u3002"),(0,n.kt)("h3",{id:"\u521b\u5efa\u4e0b\u8f7d\u94fe\u63a5"},"\u521b\u5efa\u4e0b\u8f7d\u94fe\u63a5"),(0,n.kt)("p",null,"\u4e0b\u8f7d\u94fe\u63a5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'http://www.apache.org/dyn/closer.cgi?filename=doris/1.xx/apache-doris-1.xx-src.tar.gz&action=download\n\nwget --trust-server-names "https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=doris/1.xx/apache-doris-1.xx-src.tar.gz"\n')),(0,n.kt)("p",null,"\u539f\u59cb\u4f4d\u7f6e:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://www.apache.org/dist/doris/1.xx/\n\nhttp://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n")),(0,n.kt)("p",null,"\u6e90\u7801\u5305\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"http://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n\nASC:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.asc\n\nsha512:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.sha512\n")),(0,n.kt)("p",null,"KEYS:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"http://archive.apache.org/dist/doris/KEYS\n")),(0,n.kt)("p",null,"refer to: ",(0,n.kt)("a",{parentName:"p",href:"http://www.apache.org/dev/release-download-pages#closer"},"http://www.apache.org/dev/release-download-pages#closer")),(0,n.kt)("h3",{id:"maven"},"Maven"),(0,n.kt)("p",null,"\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories")," \u4e2d\u627e\u5230\u5bf9\u5e94\u7684 Staging Repo, \u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"p"},"Release")," \u8fdb\u884c\u6b63\u5f0f\u53d1\u5e03\u3002"),(0,n.kt)("h3",{id:"\u51c6\u5907-release-note"},"\u51c6\u5907 release note"),(0,n.kt)("p",null,"\u9700\u8981\u4fee\u6539\u5982\u4e0b\u4e24\u4e2a\u5730\u65b9\uff1a"),(0,n.kt)("p",null,"1\u3001Github \u7684 release \u9875\u9762"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://github.com/apache/doris/releases/tag/0.9.0-rc01\n")),(0,n.kt)("p",null,"2\u3001Doris \u5b98\u7f51\u4e0b\u8f7d\u9875\u9762"),(0,n.kt)("p",null,"\u4e0b\u8f7d\u9875\u9762\u662f\u4e00\u4e2a markdown \u6587\u4ef6\uff0c\u5730\u5740\u5982\u4e0b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docs/zh-CN/downloads/downloads.md\ndocs/en/downloads/downloads.md\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9700\u8981\u5c06\u4e0a\u4e00\u6b21\u53d1\u5e03\u7248\u672c\u7684\u4e0b\u8f7d\u5305\u5730\u5740\u6539\u4e3a apache \u7684\u5f52\u6863\u5730\u5740\uff08\u89c1\u540e\uff09\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u589e\u52a0\u65b0\u7248\u672c\u7684\u4e0b\u8f7d\u4fe1\u606f\u3002")),(0,n.kt)("h3",{id:"svn-\u4e0a\u6e05\u7406\u65e7\u7248\u672c\u7684\u5305"},"svn \u4e0a\u6e05\u7406\u65e7\u7248\u672c\u7684\u5305"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"svn \u4e0a\u5220\u9664\u65e7\u7248\u672c\u7684\u5305")),(0,n.kt)("p",null,"\u7531\u4e8e svn \u53ea\u9700\u8981\u4fdd\u5b58\u6700\u65b0\u7248\u672c\u7684\u5305\uff0c\u6240\u4ee5\u5f53\u6709\u65b0\u7248\u672c\u53d1\u5e03\u7684\u65f6\u5019\uff0c\u65e7\u7248\u672c\u7684\u5305\u5c31\u5e94\u8be5\u4ece svn \u4e0a\u6e05\u7406\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://dist.apache.org/repos/dist/release/doris/\nhttps://dist.apache.org/repos/dist/dev/doris/\n")),(0,n.kt)("p",null,"\u4fdd\u6301\u8fd9\u4e24\u4e2a\u5730\u5740\u4e2d\uff0c\u53ea\u6709\u6700\u65b0\u7248\u672c\u7684\u5305\u5373\u53ef\u3002"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u5c06 Doris \u5b98\u7f51\u7684\u4e0b\u8f7d\u9875\u9762\u4e2d\uff0c\u65e7\u7248\u672c\u5305\u7684\u4e0b\u8f7d\u5730\u5740\u6539\u4e3a\u5f52\u6863\u9875\u9762\u7684\u5730\u5740 ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u4e0b\u8f7d\u9875\u9762: http://doris.apache.org/downloads.html\n\u5f52\u6863\u9875\u9762: http://archive.apache.org/dist/doris\n")),(0,n.kt)("p",null,"Apache \u4f1a\u6709\u540c\u6b65\u673a\u5236\u53bb\u5c06\u5386\u53f2\u7684\u53d1\u5e03\u7248\u672c\u8fdb\u884c\u4e00\u4e2a\u5f52\u6863\uff0c\u5177\u4f53\u64cd\u4f5c\u89c1\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://www.apache.org/legal/release-policy.html#how-to-archive"},"how to archive"),"\n\u6240\u4ee5\u5373\u4f7f\u65e7\u7684\u5305\u4ece svn \u4e0a\u6e05\u9664\uff0c\u8fd8\u662f\u53ef\u4ee5\u5728\u5f52\u6863\u9875\u9762\u4e2d\u627e\u5230\u3002"),(0,n.kt)("h2",{id:"announce-\u90ae\u4ef6"},"Announce \u90ae\u4ef6"),(0,n.kt)("p",null,"Title:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[ANNOUNCE] Apache Doris 1.xx release\n")),(0,n.kt)("p",null,"\u53d1\u9001\u90ae\u4ef6\u7ec4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"dev@doris.apache.org\n")),(0,n.kt)("p",null,"\u90ae\u4ef6\u6b63\u6587\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Hi All,\n\nWe are pleased to announce the release of Apache Doris 1.xx.\n\nApache Doris is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe release is available at:\nhttp://doris.apache.org/master/zh-CN/downloads/downloads.html\n\nThanks to everyone who has contributed to this release, and the release note can be found here:\nhttps://github.com/apache/doris/releases\n\nBest Regards,\n\nOn behalf of the Doris team,\nxxx\n")))}h.isMDXComponent=!0}}]);