"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5960],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),u=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=u(a),m=n,d=k["".concat(o,".").concat(m)]||k[m]||c[m]||r;return a?l.createElement(d,i(i({ref:t},s),{},{components:a})):l.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15248:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=a(87462),n=(a(67294),a(3905));const r={title:"Release 1.2.2",language:"zh-CN"},i=void 0,p={unversionedId:"releasenotes/release-1.2.2",id:"version-1.2/releasenotes/release-1.2.2",title:"Release 1.2.2",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/releasenotes/release-1.2.2.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.2.2",permalink:"/zh-CN/docs/1.2/releasenotes/release-1.2.2",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Release 1.2.2",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 1.2.3",permalink:"/zh-CN/docs/1.2/releasenotes/release-1.2.3"},next:{title:"Release 1.2.1",permalink:"/zh-CN/docs/1.2/releasenotes/release-1.2.1"}},o={},u=[{value:"\u6570\u636e\u6e56\u5206\u6790",id:"\u6570\u636e\u6e56\u5206\u6790",level:3},{value:"\u81ea\u52a8\u5206\u6876\u63a8\u7b97",id:"\u81ea\u52a8\u5206\u6876\u63a8\u7b97",level:3},{value:"\u65b0\u589e\u51fd\u6570",id:"\u65b0\u589e\u51fd\u6570",level:3},{value:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7981\u7528 BE \u7684 Page Cache",id:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7981\u7528-be-\u7684-page-cache",level:3},{value:"\u589e\u52a0\u65b0 Session \u53d8\u91cf <code>group_by_and_having_use_alias_first</code>",id:"\u589e\u52a0\u65b0-session-\u53d8\u91cf-group_by_and_having_use_alias_first",level:3},{value:"Compaction \u4f18\u5316",id:"compaction-\u4f18\u5316",level:3},{value:"\u6570\u636e\u6e56\u5206\u6790",id:"\u6570\u636e\u6e56\u5206\u6790-1",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3}],s={toc:u},k="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728 1.2.2 \u7248\u672c\u4e2d\uff0cDoris \u56e2\u961f\u5df2\u7ecf\u4fee\u590d\u4e86\u81ea 1.2.1 \u7248\u672c\u53d1\u5e03\u4ee5\u6765\u8d85\u8fc7 200 \u4e2a\u95ee\u9898\u6216\u6027\u80fd\u6539\u8fdb\u9879\u3002\u540c\u65f6\uff0c1.2.2 \u7248\u672c\u4e5f\u4f5c\u4e3a 1.2.1 \u7684\u8fed\u4ee3\u7248\u672c\uff0c\u5177\u5907\u66f4\u9ad8\u7684\u7a33\u5b9a\u6027\uff0c\u5efa\u8bae\u6240\u6709\u7528\u6237\u5347\u7ea7\u5230\u8fd9\u4e2a\u7248\u672c\u3002"),(0,n.kt)("h1",{id:"new-feature"},"New Feature"),(0,n.kt)("h3",{id:"\u6570\u636e\u6e56\u5206\u6790"},"\u6570\u636e\u6e56\u5206\u6790"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u652f\u6301\u81ea\u52a8\u540c\u6b65 Hive Metastore \u5143\u6570\u636e\u4fe1\u606f\u3002")," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5916\u90e8\u6570\u636e\u6e90\u7684\u5143\u6570\u636e\u53d8\u66f4\uff0c\u5982\u521b\u5efa\u6216\u5220\u9664\u8868\u3001\u52a0\u51cf\u5217\u7b49\u64cd\u4f5c\u4e0d\u4f1a\u540c\u6b65\u7ed9 Doris\uff0c\u7528\u6237\u9700\u8981\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"REFRESH CATALOG")," \u547d\u4ee4\u624b\u52a8\u5237\u65b0\u5143\u6570\u636e\u3002\u5728 1.2.2 \u7248\u672c\u4e2d\u652f\u6301\u81ea\u52a8\u5237\u65b0 Hive Metastore \u5143\u6570\u636e\u4fe1\u606f\uff0c\u901a\u8fc7\u8ba9 FE \u8282\u70b9\u5b9a\u65f6\u8bfb\u53d6 HMS \u7684 notification event \u6765\u611f\u77e5 Hive \u8868\u5143\u6570\u636e\u7684\u53d8\u66f4\u60c5\u51b5\u3002")),(0,n.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u652f\u6301\u8bfb\u53d6 Iceberg Snapshot \u4ee5\u53ca\u67e5\u8be2 Snapshot \u5386\u53f2\u3002"),"  \u5728\u6267\u884c Iceberg \u6570\u636e\u5199\u5165\u65f6\uff0c\u6bcf\u4e00\u6b21\u5199\u64cd\u4f5c\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u5feb\u7167\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u901a\u8fc7 Apache Doris \u8bfb\u53d6 Iceberg \u8868\u4ec5\u4f1a\u8bfb\u53d6\u6700\u65b0\u7248\u672c\u7684\u5feb\u7167\u3002\u5728 1.2.2 \u7248\u672c\u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"FOR TIME AS OF")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"FOR VERSION AS OF")," \u8bed\u53e5\uff0c\u6839\u636e\u5feb\u7167 ID \u6216\u8005\u5feb\u7167\u4ea7\u751f\u7684\u65f6\u95f4\u8bfb\u53d6\u5386\u53f2\u7248\u672c\u7684\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 iceberg_meta \u8868\u51fd\u6570\u67e5\u8be2\u6307\u5b9a\u8868\u7684\u5feb\u7167\u4fe1\u606f\u3002")),(0,n.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/iceberg"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/iceberg")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"JDBC Catalog \u652f\u6301 PostgreSQL\u3001Clickhouse\u3001Oracle\u3001SQLServer\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"JDBC Catalog \u652f\u6301 insert into \u64cd\u4f5c\u3002")," \u5728 Doris \u4e2d\u5efa\u7acb JDBC Catalog \u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 insert into \u8bed\u53e5\u76f4\u63a5\u5199\u5165\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u5c06 Doris \u6267\u884c\u5b8c\u67e5\u8be2\u4e4b\u540e\u7684\u7ed3\u679c\u5199\u5165 JDBC Catalog\uff0c\u6216\u8005\u662f\u4ece\u4e00\u4e2a JDBC \u5916\u8868\u5c06\u6570\u636e\u5bfc\u5165\u53e6\u4e00\u4e2a JDBC \u5916\u8868\u3002"))),(0,n.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/")),(0,n.kt)("h3",{id:"\u81ea\u52a8\u5206\u6876\u63a8\u7b97"},"\u81ea\u52a8\u5206\u6876\u63a8\u7b97"),(0,n.kt)("p",null,"\u652f\u6301\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"DISTRIBUTED BY HASH(\u2026\u2026) BUCKETS AUTO")," \u8bed\u53e5\u8bbe\u7f6e\u81ea\u52a8\u5206\u6876\uff0c\u7cfb\u7edf\u5e2e\u52a9\u7528\u6237\u8bbe\u5b9a\u4ee5\u53ca\u4f38\u7f29\u4e0d\u540c\u5206\u533a\u7684\u5206\u6876\u6570\uff0c\u4f7f\u5206\u6876\u6570\u4fdd\u6301\u5728\u4e00\u4e2a\u76f8\u5bf9\u5408\u9002\u7684\u8303\u56f4\u5185\u3002"),(0,n.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/DSyZGJtjQZUYUsvfK0IcCg"},"https://mp.weixin.qq.com/s/DSyZGJtjQZUYUsvfK0IcCg")),(0,n.kt)("h3",{id:"\u65b0\u589e\u51fd\u6570"},"\u65b0\u589e\u51fd\u6570"),(0,n.kt)("p",null,"\u589e\u52a0\u5f52\u7c7b\u5206\u6790\u51fd\u6570 ",(0,n.kt)("inlineCode",{parentName:"p"},"width_bucket")," \u3002"),(0,n.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/sql-manual/sql-functions/width-bucket/#description"},"https://doris.apache.org/zh-CN/docs/dev/sql-manual/sql-functions/width-bucket/#description")),(0,n.kt)("h1",{id:"behavior-changes"},"Behavior Changes"),(0,n.kt)("h3",{id:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7981\u7528-be-\u7684-page-cache"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7981\u7528 BE \u7684 Page Cache"),(0,n.kt)("p",null,"\u5173\u95ed\u6b64\u914d\u7f6e\u4ee5\u4f18\u5316\u5185\u5b58\u4f7f\u7528\u5e76\u964d\u4f4e\u5185\u5b58 OOM \u7684\u98ce\u9669\uff0c\u4f46\u6709\u53ef\u80fd\u589e\u52a0\u4e00\u4e9b\u5c0f\u67e5\u8be2\u7684\u67e5\u8be2\u5ef6\u8fdf\u3002\u5982\u679c\u60a8\u5bf9\u67e5\u8be2\u5ef6\u8fdf\u654f\u611f\uff0c\u6216\u8005\u5177\u6709\u9ad8\u5e76\u53d1\u5c0f\u67e5\u8be2\u573a\u666f\uff0c\u53ef\u4ee5\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"disable_storage_page_cache=false")," \u4ee5\u518d\u6b21\u542f\u7528 Page Cache\u3002"),(0,n.kt)("h3",{id:"\u589e\u52a0\u65b0-session-\u53d8\u91cf-group_by_and_having_use_alias_first"},"\u589e\u52a0\u65b0 Session \u53d8\u91cf ",(0,n.kt)("inlineCode",{parentName:"h3"},"group_by_and_having_use_alias_first")),(0,n.kt)("p",null,"\u7528\u4e8e\u63a7\u5236 group by \u548c having \u8bed\u53e5\u662f\u5426\u4f18\u5148\u4f7f\u7528\u5217\u7684\u522b\u540d\uff0c\u800c\u975e\u4ece From \u8bed\u53e5\u91cc\u5bfb\u627e\u5217\u7684\u540d\u5b57\uff0c\u9ed8\u8ba4\u4e3afalse\u3002"),(0,n.kt)("h1",{id:"improvement"},"Improvement"),(0,n.kt)("h3",{id:"compaction-\u4f18\u5316"},"Compaction \u4f18\u5316"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u652f\u6301 Vetical Compaction"),"\u3002\u5728\u8fc7\u53bb\u7248\u672c\u4e2d\uff0c\u5bbd\u5217\u573a\u666f Compaction \u5f80\u5f80\u4f1a\u5e26\u6765\u5927\u91cf\u7684\u5185\u5b58\u5f00\u9500\u3002\u5728 1.2.2 \u7248\u672c\u4e2d\uff0cVertical Compaction \u91c7\u7528\u4e86\u6309\u5217\u7ec4\u7684\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u5408\u5e76\uff0c\u5355\u6b21\u5408\u5e76\u53ea\u9700\u8981\u52a0\u8f7d\u90e8\u5206\u5217\u7684\u6570\u636e\uff0c\u80fd\u591f\u6781\u5927\u51cf\u5c11\u5408\u5e76\u8fc7\u7a0b\u4e2d\u7684\u5185\u5b58\u5360\u7528\u3002\u5728\u5b9e\u9645\u6d4b\u8bd5\u4e2d\uff0cVertical compaction \u4f7f\u7528\u5185\u5b58\u4ec5\u4e3a\u539f\u6709 compaction \u7b97\u6cd5\u7684 1/10\uff0c\u540c\u65f6 Compaction \u901f\u7387\u63d0\u534715%\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u652f\u6301 ",(0,n.kt)("strong",{parentName:"p"},"Segment Compaction"),"\u3002\u5728\u8fc7\u53bb\u7248\u672c\u4e2d\uff0c\u5f53\u7528\u6237\u5927\u6570\u636e\u91cf\u9ad8\u9891\u5bfc\u5165\u65f6\u53ef\u80fd\u4f1a\u9047\u5230 -238 \u4ee5\u53ca -235 \u95ee\u9898\uff0cSegment Compaction \u5141\u8bb8\u5728\u5bfc\u5165\u6570\u636e\u7684\u540c\u65f6\u8fdb\u884c\u6570\u636e\u7684\u5408\u5e76\uff0c\u4ee5\u6709\u6548\u63a7\u5236 Segment \u6587\u4ef6\u7684\u6570\u91cf\uff0c\u63d0\u5347\u9ad8\u9891\u5bfc\u5165\u7684\u7cfb\u7edf\u7a33\u5b9a\u6027\u3002"))),(0,n.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/advanced/best-practice/compaction"},"https://doris.apache.org/docs/dev/advanced/best-practice/compaction")),(0,n.kt)("h3",{id:"\u6570\u636e\u6e56\u5206\u6790-1"},"\u6570\u636e\u6e56\u5206\u6790"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hive Catalog \u652f\u6301\u8bbf\u95ee Hive 1/2/3 \u7248\u672c\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hive Catalog \u53ef\u4ee5\u4f7f\u7528 Broker \u8bbf\u95ee\u6570\u636e\u5b58\u50a8\u5728 JuiceFS \u7684 Hive\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Iceberg Catalog \u652f\u6301 Hive Metastore \u548c Rest \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ES Catalog \u652f\u6301 \u5143\u6570\u636e\u5b57\u6bb5 _id \u5217\u6620\u5c04\u3002"))),(0,n.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/hive"},"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/hive")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f18\u5316 Iceberg V2 \u8868\u6709\u5927\u91cf\u5220\u9664\u884c\u8bd7\u65f6\u7684\u8bfb\u53d6\u6027\u80fd\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u652f\u6301\u8bfb\u53d6 Schema Evolution \u540e Iceberg \u8868\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Parquet Reader \u6b63\u786e\u5904\u7406\u5217\u540d\u5927\u5c0f\u5199\u3002"))),(0,n.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u652f\u6301\u8bbf\u95ee Hadoop KMS \u52a0\u5bc6\u7684 HDFS \u3002 ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u652f\u6301\u53d6\u6d88\u6b63\u5728\u6267\u884c\u7684\u5bfc\u51fa\u4efb\u52a1\u3002"))),(0,n.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"},"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c06",(0,n.kt)("inlineCode",{parentName:"p"},"explode_split")," \u51fd\u6570\u6267\u884c\u6548\u7387\u4f18\u5316 1 \u500d\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c06 nullable \u5217\u7684\u8bfb\u53d6\u6027\u80fd\u4f18\u5316 3 \u500d\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f18\u5316 Memtracker \u7684\u90e8\u5206\u95ee\u9898\uff0c\u63d0\u9ad8\u5185\u5b58\u7ba1\u7406\u7cbe\u5ea6\uff0c\u4f18\u5316\u5185\u5b58\u5e94\u7528\u3002"))),(0,n.kt)("h1",{id:"bugfix"},"BugFix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u4f7f\u7528 Doris-Flink-Connector \u5bfc\u5165\u6570\u636e\u65f6\u7684\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898\uff1b",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/16430"},"#16430"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86 BE \u53ef\u80fd\u7684\u7ebf\u7a0b\u8c03\u5ea6\u95ee\u9898\uff0c\u5e76\u51cf\u5c11\u4e86 BE \u7ebf\u7a0b\u8017\u5c3d\u5bfc\u81f4\u7684 Fragment_sent_timeout\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86 datetimev2/decivalv3 \u7684\u90e8\u5206\u6b63\u786e\u6027\u548c\u7cbe\u5ea6\u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86 Light Schema Change \u529f\u80fd\u7684\u5404\u79cd\u5df2\u77e5\u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86 bitmap \u7c7b\u578b Runtime Filter \u7684\u5404\u79cd\u6570\u636e\u6b63\u786e\u6027\u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86 1.2.1 \u7248\u672c\u4e2d\u5f15\u5165\u7684 CSV \u8bfb\u53d6\u6027\u80fd\u5dee\u7684\u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86 Spark Load \u6570\u636e\u4e0b\u8f7d\u9636\u6bb5\u5bfc\u81f4\u7684 BE OOM \u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u4ece 1.1.x \u7248\u5347\u7ea7\u5230 1.2.x \u7248\u65f6\u53ef\u80fd\u51fa\u73b0\u7684\u5143\u6570\u636e\u517c\u5bb9\u6027\u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u521b\u5efa JDBC Catalog \u65f6\u7684\u5143\u6570\u636e\u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u7531\u4e8e\u5bfc\u5165\u64cd\u4f5c\u5bfc\u81f4\u7684 CPU \u4f7f\u7528\u7387\u9ad8\u7684\u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u5927\u91cf\u5931\u8d25 Broker Load \u4f5c\u4e1a\u5bfc\u81f4\u7684 FE OOM \u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u52a0\u8f7d\u6d6e\u70b9\u7c7b\u578b\u65f6\u7cbe\u5ea6\u4e22\u5931\u7684\u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4e86 Stream Load \u4f7f\u7528\u4e24\u9636\u6bb5\u63d0\u4ea4\u65f6\u51fa\u73b0\u7684\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898\u3002"))),(0,n.kt)("h1",{id:"\u5176\u4ed6-1"},"\u5176\u4ed6"),(0,n.kt)("p",null,"\u6dfb\u52a0\u6307\u6807\u4ee5\u67e5\u770b BE \u4e0a\u7684 Rowset \u548c Segment \u603b\u6570\u5b57 ",(0,n.kt)("inlineCode",{parentName:"p"},"doris_be_all_rowsets_num")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"doris_be_all_segments_num")),(0,n.kt)("h1",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,n.kt)("p",null,"\u6709 53 \u4f4d\u8d21\u732e\u8005\u53c2\u4e0e\u5230 1.2.2 \u7248\u672c\u7684\u5f00\u53d1\u4e0e\u5b8c\u5584\u4e2d\uff0c\u611f\u8c22\u4ed6\u4eec\u7684\u4ed8\u51fa\uff0c\u4ed6\u4eec\u5206\u522b\u662f\uff1a"),(0,n.kt)("p",null,"@adonis0147"),(0,n.kt)("p",null,"@AshinGau"),(0,n.kt)("p",null,"@BePPPower"),(0,n.kt)("p",null,"@BiteTheDDDDt"),(0,n.kt)("p",null,"@ByteYue"),(0,n.kt)("p",null,"@caiconghui"),(0,n.kt)("p",null,"@cambyzju"),(0,n.kt)("p",null,"@chenlinzhong"),(0,n.kt)("p",null,"@DarvenDuan"),(0,n.kt)("p",null,"@dataroaring"),(0,n.kt)("p",null,"@Doris-Extras"),(0,n.kt)("p",null,"@dutyu"),(0,n.kt)("p",null,"@englefly"),(0,n.kt)("p",null,"@freemandealer"),(0,n.kt)("p",null,"@Gabriel39"),(0,n.kt)("p",null,"@HappenLee"),(0,n.kt)("p",null,"@Henry2SS"),(0,n.kt)("p",null,"@htyoung"),(0,n.kt)("p",null,"@isHuangXin"),(0,n.kt)("p",null,"@JackDrogon"),(0,n.kt)("p",null,"@jacktengg"),(0,n.kt)("p",null,"@Jibing-Li"),(0,n.kt)("p",null,"@kaka11chen"),(0,n.kt)("p",null,"@Kikyou1997"),(0,n.kt)("p",null,"@Lchangliang"),(0,n.kt)("p",null,"@LemonLiTree"),(0,n.kt)("p",null,"@liaoxin01"),(0,n.kt)("p",null,"@liqing-coder"),(0,n.kt)("p",null,"@luozenglin"),(0,n.kt)("p",null,"@morningman"),(0,n.kt)("p",null,"@morrySnow"),(0,n.kt)("p",null,"@mrhhsg"),(0,n.kt)("p",null,"@nextdreamblue"),(0,n.kt)("p",null,"@qidaye"),(0,n.kt)("p",null,"@qzsee"),(0,n.kt)("p",null,"@spaces-X"),(0,n.kt)("p",null,"@stalary"),(0,n.kt)("p",null,"@starocean999"),(0,n.kt)("p",null,"@weizuo93"),(0,n.kt)("p",null,"@wsjz"),(0,n.kt)("p",null,"@xiaokang"),(0,n.kt)("p",null,"@xinyiZzz"),(0,n.kt)("p",null,"@xy720"),(0,n.kt)("p",null,"@yangzhg"),(0,n.kt)("p",null,"@yiguolei"),(0,n.kt)("p",null,"@yixiutt"),(0,n.kt)("p",null,"@Yukang-Lian"),(0,n.kt)("p",null,"@Yulei-Yang"),(0,n.kt)("p",null,"@zclllyybb"),(0,n.kt)("p",null,"@zddr"),(0,n.kt)("p",null,"@zhangstar333"),(0,n.kt)("p",null,"@zhannngchen"),(0,n.kt)("p",null,"@zy-kkk"))}c.isMDXComponent=!0}}]);