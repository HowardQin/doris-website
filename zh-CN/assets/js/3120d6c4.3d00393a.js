"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[32791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},78893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u9ad8\u5e76\u53d1\u70b9\u67e5",language:"zh-CN"},i=void 0,o={unversionedId:"query-acceleration/hight-concurrent-point-query",id:"version-1.2/query-acceleration/hight-concurrent-point-query",title:"\u9ad8\u5e76\u53d1\u70b9\u67e5",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/query-acceleration/hight-concurrent-point-query.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/hight-concurrent-point-query",permalink:"/zh-CN/docs/1.2/query-acceleration/hight-concurrent-point-query",draft:!1,tags:[],version:"1.2",frontMatter:{title:"\u9ad8\u5e76\u53d1\u70b9\u67e5",language:"zh-CN"},sidebar:"docs",previous:{title:"Nereids \u5168\u65b0\u4f18\u5316\u5668",permalink:"/zh-CN/docs/1.2/query-acceleration/nereids"},next:{title:"\u7269\u5316\u89c6\u56fe",permalink:"/zh-CN/docs/1.2/query-acceleration/materialized-view"}},c={},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u884c\u5b58",id:"\u884c\u5b58",level:2},{value:"\u5728 Unique \u6a21\u578b\u4e0b\u7684\u70b9\u67e5\u4f18\u5316",id:"\u5728-unique-\u6a21\u578b\u4e0b\u7684\u70b9\u67e5\u4f18\u5316",level:2},{value:"\u4f7f\u7528 <code>PreparedStatement</code>",id:"\u4f7f\u7528-preparedstatement",level:2},{value:"\u5f00\u542f\u884c\u7f13\u5b58",id:"\u5f00\u542f\u884c\u7f13\u5b58",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9ad8\u5e76\u53d1\u70b9\u67e5"},"\u9ad8\u5e76\u53d1\u70b9\u67e5"),(0,a.kt)("version",{since:"2.0.0"}),(0,a.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,"Doris \u57fa\u4e8e\u5217\u5b58\u683c\u5f0f\u5f15\u64ce\u6784\u5efa\uff0c\u5728\u9ad8\u5e76\u53d1\u670d\u52a1\u573a\u666f\u4e2d\uff0c\u7528\u6237\u603b\u662f\u5e0c\u671b\u4ece\u7cfb\u7edf\u4e2d\u83b7\u53d6\u6574\u884c\u6570\u636e\u3002\u4f46\u662f\uff0c\u5f53\u8868\u5bbd\u65f6\uff0c\u5217\u5b58\u683c\u5f0f\u5c06\u5927\u5927\u653e\u5927\u968f\u673a\u8bfb\u53d6 IO\u3002Doris \u67e5\u8be2\u5f15\u64ce\u548c\u8ba1\u5212\u5bf9\u4e8e\u67d0\u4e9b\u7b80\u5355\u7684\u67e5\u8be2\uff08\u5982\u70b9\u67e5\u8be2\uff09\u6765\u8bf4\u592a\u91cd\u4e86\u3002\u9700\u8981\u4e00\u4e2a\u5728 FE \u7684\u67e5\u8be2\u89c4\u5212\u4e2d\u89c4\u5212\u77ed\u8def\u5f84\u6765\u5904\u7406\u8fd9\u6837\u7684\u67e5\u8be2\u3002FE \u662f SQL \u67e5\u8be2\u7684\u8bbf\u95ee\u5c42\u670d\u52a1\uff0c\u4f7f\u7528 Java \u7f16\u5199\uff0c\u5206\u6790\u548c\u89e3\u6790 SQL \u4e5f\u4f1a\u5bfc\u81f4\u9ad8\u5e76\u53d1\u67e5\u8be2\u7684\u9ad8 CPU \u5f00\u9500\u3002\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u6211\u4eec\u5728 Doris \u4e2d\u5f15\u5165\u4e86\u884c\u5b58\u3001\u77ed\u67e5\u8be2\u8def\u5f84\u3001PreparedStatement \u6765\u89e3\u51b3\u4e0a\u8bc9\u95ee\u9898\uff0c\u4e0b\u9762\u662f\u5f00\u542f\u8fd9\u4e9b\u4f18\u5316\u7684\u6307\u5357\u3002"),(0,a.kt)("h2",{id:"\u884c\u5b58"},"\u884c\u5b58"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728 Olap \u8868\u4e2d\u5f00\u542f\u884c\u5b58\u6a21\u5f0f\uff0c\u4f46\u662f\u9700\u8981\u989d\u5916\u7684\u7a7a\u95f4\u6765\u5b58\u50a8\u884c\u5b58\u3002\u76ee\u524d\u7684\u884c\u5b58\u5b9e\u73b0\u662f\u5c06\u884c\u5b58\u7f16\u7801\u540e\u5b58\u5728\u5355\u72ec\u7684\u4e00\u5217\u4e2d\uff0c\u8fd9\u6837\u505a\u662f\u7528\u4e8e\u7b80\u5316\u884c\u5b58\u7684\u5b9e\u73b0\u3002\u884c\u5b58\u6a21\u5f0f\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u5982\u679c\u60a8\u60f3\u5f00\u542f\u5219\u53ef\u4ee5\u5728\u5efa\u8868\u8bed\u53e5\u7684 property \u4e2d\u6307\u5b9a\u5982\u4e0b\u5c5e\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"store_row_column" = "true"\n')),(0,a.kt)("h2",{id:"\u5728-unique-\u6a21\u578b\u4e0b\u7684\u70b9\u67e5\u4f18\u5316"},"\u5728 Unique \u6a21\u578b\u4e0b\u7684\u70b9\u67e5\u4f18\u5316"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684\u884c\u5b58\u7528\u4e8e\u5728 Unique \u6a21\u578b\u4e0b\u5f00\u542f Merge-On-Write \u7b56\u7565\u662f\u51cf\u5c11\u70b9\u67e5\u65f6\u7684 IO \u5f00\u9500\u3002\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"enable_unique_key_merge_on_write"),"\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"store_row_column"),"\u5728\u521b\u5efa Unique \u8868\u5f00\u542f\u65f6\uff0c\u5bf9\u4e8e\u4e3b\u952e\u7684\u70b9\u67e5\u4f1a\u8d70\u77ed\u8def\u5f84\u6765\u5bf9 SQL \u6267\u884c\u8fdb\u884c\u4f18\u5316\uff0c\u4ec5\u9700\u8981\u6267\u884c\u4e00\u6b21 RPC \u5373\u53ef\u6267\u884c\u5b8c\u6210\u67e5\u8be2\u3002\u4e0b\u9762\u662f\u70b9\u67e5\u7ed3\u5408\u884c\u5b58\u5728 \u5728 Unique \u6a21\u578b\u4e0b\u5f00\u542f Merge-On-Write \u7b56\u7565\u7684\u4e00\u4e2a\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `tbl_point_query` (\n    `key` int(11) NULL,\n    `v1` decimal(27, 9) NULL,\n    `v2` varchar(30) NULL,\n    `v3` varchar(30) NULL,\n    `v4` date NULL,\n    `v5` datetime NULL,\n    `v6` float NULL,\n    `v7` datev2 NULL\n) ENGINE=OLAP\nUNIQUE KEY(`key`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`key`) BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1",\n    "enable_unique_key_merge_on_write" = "true",\n    "light_schema_change" = "true",\n    "store_row_column" = "true"\n);\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"enable_unique_key_merge_on_write"),"\u5e94\u8be5\u88ab\u5f00\u542f\uff0c \u5b58\u50a8\u5f15\u64ce\u9700\u8981\u6839\u636e\u4e3b\u952e\u6765\u5feb\u901f\u70b9\u67e5"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u6761\u4ef6\u53ea\u5305\u542b\u4e3b\u952e\u65f6\uff0c\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"select * from tbl_point_query where key = 123"),"\uff0c\u7c7b\u4f3c\u7684\u67e5\u8be2\u4f1a\u8d70\u77ed\u8def\u5f84\u6765\u4f18\u5316\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"light_schema_change"),"\u5e94\u8be5\u88ab\u5f00\u542f\uff0c \u56e0\u4e3a\u4e3b\u952e\u70b9\u67e5\u7684\u4f18\u5316\u4f9d\u8d56\u4e86\u8f7b\u91cf\u7ea7 Schema Change \u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"column unique id"),"\u6765\u5b9a\u4f4d\u5217")),(0,a.kt)("h2",{id:"\u4f7f\u7528-preparedstatement"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"PreparedStatement")),(0,a.kt)("p",null,"\u4e3a\u4e86\u51cf\u5c11 SQL \u89e3\u6790\u548c\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7684\u5f00\u9500\uff0c \u6211\u4eec\u5728 FE \u7aef\u63d0\u4f9b\u4e86\u4e0e MySQL \u534f\u8bae\u5b8c\u5168\u517c\u5bb9\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"PreparedStatement"),"\u7279\u6027\uff08\u76ee\u524d\u53ea\u652f\u6301\u4e3b\u952e\u70b9\u67e5\uff09\u3002\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"PreparedStatement"),"\u5728 FE \u5f00\u542f\uff0cSQL \u548c\u5176\u8868\u8fbe\u5f0f\u5c06\u88ab\u63d0\u524d\u8ba1\u7b97\u5e76\u7f13\u5b58\u5230 Session \u7ea7\u522b\u7684\u5185\u5b58\u7f13\u5b58\u4e2d\uff0c\u540e\u7eed\u7684\u67e5\u8be2\u76f4\u63a5\u4f7f\u7528\u7f13\u5b58\u5bf9\u8c61\u5373\u53ef\u3002\u5f53 CPU \u6210\u4e3a\u4e3b\u952e\u70b9\u67e5\u7684\u74f6\u9888\uff0c \u5728\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"PreparedStatement")," \u540e\uff0c\u5c06\u4f1a\u6709 4 \u500d+\u7684\u6027\u80fd\u63d0\u5347\u3002\u4e0b\u9762\u662f\u5728 JDBC \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"PreparedStatement")," \u7684\u4f8b\u5b50"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e JDBC url \u5e76\u5728 Server \u7aef\u5f00\u542f prepared statement")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"url = jdbc:mysql://127.0.0.1:9030/ycsb?useServerPrepStmts=true\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"PreparedStatement"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// use `?` for placement holders, readStatement should be reused\nPreparedStatement readStatement = conn.prepareStatement("select * from tbl_point_query where key = ?");\n...\nreadStatement.setInt(1234);\nResultSet resultSet = readStatement.executeQuery();\n...\nreadStatement.setInt(1235);\nresultSet = readStatement.executeQuery();\n...\n')),(0,a.kt)("h2",{id:"\u5f00\u542f\u884c\u7f13\u5b58"},"\u5f00\u542f\u884c\u7f13\u5b58"),(0,a.kt)("p",null,"Doris \u4e2d\u6709\u9488\u5bf9 Page \u7ea7\u522b\u7684 Cache\uff0c\u6bcf\u4e2a Page \u4e2d\u5b58\u7684\u662f\u67d0\u4e00\u5217\u7684\u6570\u636e, \u6240\u4ee5 Page cache \u662f\u9488\u5bf9\u5217\u7684\u7f13\u5b58\uff0c\u5bf9\u4e8e\u524d\u9762\u63d0\u5230\u7684\u884c\u5b58\uff0c\u4e00\u884c\u91cc\u5305\u62ec\u4e86\u591a\u5217\u6570\u636e\uff0c\u7f13\u5b58\u53ef\u80fd\u88ab\u5927\u67e5\u8be2\u7ed9\u5237\u6389\uff0c\u4e3a\u4e86\u589e\u52a0\u884c\u7f13\u5b58\u547d\u4e2d\u7387\uff0c\u5355\u72ec\u5f15\u5165\u4e86\u884c\u5b58\u7f13\u5b58\uff0c\u884c\u7f13\u5b58\u590d\u7528\u4e86 Doris \u4e2d\u7684 LRU Cache \u673a\u5236\u6765\u4fdd\u969c\u5185\u5b58\u7684\u4f7f\u7528\uff0c\u901a\u8fc7\u6307\u5b9a\u4e0b\u9762\u7684\u7684BE\u914d\u7f6e\u6765\u5f00\u542f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"disable_storage_row_cache"),"\u662f\u5426\u5f00\u542f\u884c\u7f13\u5b58\uff0c \u9ed8\u8ba4\u4e0d\u5f00\u542f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"row_cache_mem_limit"),"\u6307\u5b9a Row cache \u5360\u7528\u5185\u5b58\u7684\u767e\u5206\u6bd4\uff0c \u9ed8\u8ba4 20% \u5185\u5b58")))}d.isMDXComponent=!0}}]);