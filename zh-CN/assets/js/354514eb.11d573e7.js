"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70270],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>h});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},k=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,h=u["".concat(c,".").concat(k)]||u[k]||d[k]||o;return n?t.createElement(h,s(s({ref:r},l),{},{components:n})):t.createElement(h,s({ref:r},l))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=k;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},12746:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const o={title:"\u53d1\u5e03 Doris Connectors",language:"zh-CN"},s=void 0,i={unversionedId:"release-and-verify/release-doris-connectors",id:"release-and-verify/release-doris-connectors",title:"\u53d1\u5e03 Doris Connectors",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/release-and-verify/release-doris-connectors.md",sourceDirName:"release-and-verify",slug:"/release-and-verify/release-doris-connectors",permalink:"/zh-CN/community/release-and-verify/release-doris-connectors",draft:!1,tags:[],version:"current",frontMatter:{title:"\u53d1\u5e03 Doris Connectors",language:"zh-CN"},sidebar:"community",previous:{title:"\u53d1\u5e03 Doris \u4e3b\u4ee3\u7801",permalink:"/zh-CN/community/release-and-verify/release-doris-core"},next:{title:"\u53d1\u5e03 Doris Manager",permalink:"/zh-CN/community/release-and-verify/release-doris-manager"}},c={},p=[{value:"\u51c6\u5907\u53d1\u5e03",id:"\u51c6\u5907\u53d1\u5e03",level:2},{value:"\u53d1\u5e03\u5230 Maven",id:"\u53d1\u5e03\u5230-maven",level:2},{value:"1. \u51c6\u5907\u5206\u652f",id:"1-\u51c6\u5907\u5206\u652f",level:3},{value:"2. \u53d1\u5e03\u5230 Maven staging",id:"2-\u53d1\u5e03\u5230-maven-staging",level:3},{value:"3. \u51c6\u5907 svn",id:"3-\u51c6\u5907-svn",level:3},{value:"4. \u6295\u7968",id:"4-\u6295\u7968",level:3},{value:"\u5b8c\u6210\u53d1\u5e03",id:"\u5b8c\u6210\u53d1\u5e03",level:2},{value:"\u9644\u5f55\uff1a\u53d1\u5e03\u5230 SNAPSHOT",id:"\u9644\u5f55\u53d1\u5e03\u5230-snapshot",level:2}],l={toc:p},u="wrapper";function d(e){let{components:r,...o}=e;return(0,a.kt)(u,(0,t.Z)({},l,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53d1\u5e03-doris-connectors"},"\u53d1\u5e03 Doris Connectors"),(0,a.kt)("p",null,"Doris Connectors \u76ee\u524d\u5305\u542b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Doris Flink Connector"),(0,a.kt)("li",{parentName:"ul"},"Doris Spark Connector\u3002")),(0,a.kt)("p",null,"\u5176\u4ee3\u7801\u5e93\u72ec\u7acb\u4e8e Doris \u4e3b\u4ee3\u7801\u5e93\uff0c\u5206\u522b\u4f4d\u4e8e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/doris-flink-connector"},"https://github.com/apache/doris-flink-connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/doris-spark-connector"},"https://github.com/apache/doris-spark-connector"))),(0,a.kt)("h2",{id:"\u51c6\u5907\u53d1\u5e03"},"\u51c6\u5907\u53d1\u5e03"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/community/release-and-verify/release-prepare"},"\u53d1\u7248\u51c6\u5907")," \u6587\u6863\u8fdb\u884c\u53d1\u7248\u51c6\u5907\u3002"),(0,a.kt)("h2",{id:"\u53d1\u5e03\u5230-maven"},"\u53d1\u5e03\u5230 Maven"),(0,a.kt)("p",null,"\u6211\u4eec\u4ee5\u53d1\u5e03 Spark Connector 1.2.0 \u4e3a\u4f8b\u3002"),(0,a.kt)("h3",{id:"1-\u51c6\u5907\u5206\u652f"},"1. \u51c6\u5907\u5206\u652f"),(0,a.kt)("p",null,"\u5728\u4ee3\u7801\u5e93\u4e2d\u521b\u5efa\u5206\u652f\uff1arelease-1.2.0\uff0c\u5e76 checkout \u5230\u8be5\u5206\u652f\u3002"),(0,a.kt)("h3",{id:"2-\u53d1\u5e03\u5230-maven-staging"},"2. \u53d1\u5e03\u5230 Maven staging"),(0,a.kt)("p",null,"\u56e0\u4e3a Spark Connector \u9488\u5bf9\u4e0d\u540c Spark \u7248\u672c\uff08\u5982 2.3, 3.1, 3.2\uff09\u53d1\u5e03\u4e0d\u540c\u7684 Release, \u56e0\u6b64\u6211\u4eec\u9700\u8981\u9488\u5bf9\u6bcf\u4e00\u4e2a\u7248\u672c\u5355\u72ec\u5728\u7f16\u8bd1\u65f6\u8fdb\u884c\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u4ee5 Spark \u7248\u672c 2.3\uff0cscala \u7248\u672c 2.11 \u4e3a\u4f8b\u8bf4\u660e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn clean install \\\n-Dspark.version=2.3.0 \\\n-Dscala.version=2.11 \\\n-Dspark.major.version=2.3 \\\n-Drevision=1.2.0 \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u76f8\u5173\u53c2\u6570\u53ef\u4ee5\u53c2\u8003build.sh\u811a\u672c\u4e2d\u7684\u7f16\u8bd1\u547d\u4ee4\uff0crevision\u4e3a\u672c\u6b21\u8981\u53d1\u5e03\u7684\u7248\u672c\u53f7\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn deploy \\\n-Papache-release \\\n-Dspark.version=2.3.0 \\\n-Dscala.version=2.11 \\\n-Dspark.major.version=2.3 \\\n-Drevision=1.2.0\n")),(0,a.kt)("p",null,"\u6267\u884c\u6210\u529f\u540e\uff0c\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories")," \u91cc\u9762\u53ef\u4ee5\u627e\u5230\u521a\u521a\u53d1\u5e03\u7684\u7248\u672c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(45398).Z,width:"1057",height:"955"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u9700\u8981\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"strong"},".asc")," \u7b7e\u540d\u6587\u4ef6\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u64cd\u4f5c\u6709\u8bef\uff0c\u9700\u8981\u5c06 staging drop \u6389\u3002\u7136\u540e\u91cd\u65b0\u6267\u884c\u4e0a\u8ff0\u6b65\u9aa4\u3002"),(0,a.kt)("p",null,"\u68c0\u67e5\u5b8c\u6bd5\u540e\uff0c\u70b9\u51fb\u56fe\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," \u6309\u94ae\u5b8c\u6210 staging \u53d1\u5e03\u3002"),(0,a.kt)("h3",{id:"3-\u51c6\u5907-svn"},"3. \u51c6\u5907 svn"),(0,a.kt)("p",null,"\u68c0\u51fa svn \u4ed3\u5e93\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"svn co https://dist.apache.org/repos/dist/dev/doris/\n")),(0,a.kt)("p",null,"\u6253\u5305 tag \u6e90\u7801\uff0c\u5e76\u751f\u6210\u7b7e\u540d\u6587\u4ef6\u548csha256\u6821\u9a8c\u6587\u4ef6\u3002\u8fd9\u91cc\u6211\u4eec\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"1.14_2.12-1.0.0")," \u4e3a\u4f8b\u3002\u5176\u4ed6 tag \u64cd\u4f5c\u76f8\u540c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git archive --format=tar release-1.2.0 --prefix=apache-doris-spark-connector-1.2.0-src/ | gzip > apache-doris-spark-connector-1.2.0-src.tar.gz\n\ngpg -u xxx@apache.org --armor --output apache-doris-spark-connector-1.2.0-src.tar.gz.asc  --detach-sign apache-doris-spark-connector-1.2.0-src.tar.gz\nsha512sum apache-doris-spark-connector-1.2.0-src.tar.gz > apache-doris-spark-connector-1.2.0-src.tar.gz.sha512\n\nMac:\nshasum -a 512 apache-doris-spark-connector-1.2.0-src.tar.gz > apache-doris-spark-connector-1.2.0-src.tar.gz.sha512\n")),(0,a.kt)("p",null,"\u6700\u7ec8\u5f97\u5230\u4e09\u4e2a\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apache-doris-spark-connector-1.2.0-src.tar.gz\napache-doris-spark-connector-1.2.0-src.tar.gz.asc\napache-doris-spark-connector-1.2.0-src.tar.gz.sha512\n")),(0,a.kt)("p",null,"\u5c06\u8fd9\u4e09\u4e2a\u6587\u4ef6\u79fb\u52a8\u5230 svn \u76ee\u5f55\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"doris/spark-connector/1.2.0/\n")),(0,a.kt)("p",null,"\u6700\u7ec8 svn \u76ee\u5f55\u7ed3\u6784\u7c7b\u4f3c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|____0.15\n| |____0.15.0-rc04\n| | |____apache-doris-0.15.0-incubating-src.tar.gz.sha512\n| | |____apache-doris-0.15.0-incubating-src.tar.gz.asc\n| | |____apache-doris-0.15.0-incubating-src.tar.gz\n|____KEYS\n|____spark-connector\n| |____1.2.0\n| | |____apache-doris-spark-connector-1.2.0-src.tar.gz\n| | |____apache-doris-spark-connector-1.2.0-src.tar.gz.asc\n| | |____apache-doris-spark-connector-1.2.0-src.tar.gz.sha512\n")),(0,a.kt)("p",null,"\u5176\u4e2d 0.15 \u662f Doris \u4e3b\u4ee3\u7801\u7684\u76ee\u5f55\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"spark-connector/1.2.0")," \u4e0b\u5c31\u662f\u672c\u6b21\u53d1\u5e03\u7684\u5185\u5bb9\u4e86\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0cKEYS \u6587\u4ef6\u7684\u51c6\u5907\uff0c\u53ef\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/community/release-and-verify/release-prepare"},"\u53d1\u7248\u51c6\u5907")," \u4e2d\u7684\u4ecb\u7ecd\u3002"),(0,a.kt)("h3",{id:"4-\u6295\u7968"},"4. \u6295\u7968"),(0,a.kt)("p",null,"\u5728 dev@doris \u90ae\u4ef6\u7ec4\u53d1\u8d77\u6295\u7968\uff0c\u6a21\u677f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hi all,\n\nThis is a call for the vote to release Apache Doris Spark Connector 1.2.0\n\nThe git tag for the release:\nhttps://github.com/apache/doris-spark-connector/releases/tag/1.2.0\n\nRelease Notes are here:\nhttps://github.com/apache/doris-spark-connector/issues/109\n\nThanks to everyone who has contributed to this release.\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/doris/spark-connector/1.2.0/\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/orgapachedoris-1031\n\n\nKEYS file is available here:\nhttps://downloads.apache.org/doris/KEYS\n\nTo verify and build, you can refer to following link:\nhttps://doris.apache.org/community/release-and-verify/release-verify\n\nThe vote will be open for at least 72 hours.\n\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because \u2026\n")),(0,a.kt)("h2",{id:"\u5b8c\u6210\u53d1\u5e03"},"\u5b8c\u6210\u53d1\u5e03"),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/community/release-and-verify/release-complete"},"\u5b8c\u6210\u53d1\u5e03")," \u6587\u6863\u5b8c\u6210\u6240\u6709\u53d1\u5e03\u6d41\u7a0b\u3002"),(0,a.kt)("h2",{id:"\u9644\u5f55\u53d1\u5e03\u5230-snapshot"},"\u9644\u5f55\uff1a\u53d1\u5e03\u5230 SNAPSHOT"),(0,a.kt)("p",null,"Snapshot \u5e76\u975e Apache Release \u7248\u672c\uff0c\u4ec5\u7528\u4e8e\u53d1\u7248\u524d\u7684\u9884\u89c8\u3002\u5728\u7ecf\u8fc7 PMC \u8ba8\u8bba\u901a\u8fc7\u540e\uff0c\u53ef\u4ee5\u53d1\u5e03 Snapshot \u7248\u672c"),(0,a.kt)("p",null,"\u5207\u6362\u5230 spark connector \u76ee\u5f55\uff0c \u6211\u4eec\u4ee5 spark \u7248\u672c 2.3\uff0cscala 2.11 \u4e3a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd spark-doris-connector\nmvn deploy \\\n-Dspark.version=2.3.0 \\\n-Dscala.version=2.11 \\\n-Dspark.major.version=2.3 \\\n")),(0,a.kt)("p",null,"\u4e4b\u540e\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u770b\u5230 snapshot \u7248\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://repository.apache.org/content/repositories/snapshots/org/apache/doris/doris-spark-connector/\n")))}d.isMDXComponent=!0},45398:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/staging-repositories-4c394e1094a6aa8ac05d6bfea6b48627.png"}}]);