"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[49309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),p=i,y=u["".concat(s,".").concat(p)]||u[p]||d[p]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(87462),i=(n(67294),n(3905));const a={title:"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6",language:"zh-CN"},o=void 0,l={unversionedId:"ecosystem/audit-plugin",id:"ecosystem/audit-plugin",title:"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/audit-plugin.md",sourceDirName:"ecosystem",slug:"/ecosystem/audit-plugin",permalink:"/zh-CN/docs/dev/ecosystem/audit-plugin",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6",language:"zh-CN"},sidebar:"docs",previous:{title:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",permalink:"/zh-CN/docs/dev/ecosystem/plugin-development-manual"},next:{title:"CloudCanal \u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/dev/ecosystem/cloudcanal"}},s={},m=[{value:"\u7f16\u8bd1\u3001\u914d\u7f6e\u548c\u90e8\u7f72",id:"\u7f16\u8bd1\u914d\u7f6e\u548c\u90e8\u7f72",level:2},{value:"FE \u914d\u7f6e",id:"fe-\u914d\u7f6e",level:3},{value:"AuditLoader \u914d\u7f6e",id:"auditloader-\u914d\u7f6e",level:3},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3}],c={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6"},"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6"),(0,i.kt)("p",null,"Doris \u7684\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6\u662f\u5728 FE \u7684\u63d2\u4ef6\u6846\u67b6\u57fa\u7840\u4e0a\u5f00\u53d1\u7684\u3002\u662f\u4e00\u4e2a\u53ef\u9009\u63d2\u4ef6\u3002\u7528\u6237\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u5b89\u88c5\u6216\u5378\u8f7d\u8fd9\u4e2a\u63d2\u4ef6\u3002"),(0,i.kt)("p",null,"\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5c06 FE \u7684\u5ba1\u8ba1\u65e5\u5fd7\u5b9a\u671f\u7684\u5bfc\u5165\u5230\u6307\u5b9a Doris \u96c6\u7fa4\u4e2d\uff0c\u4ee5\u65b9\u4fbf\u7528\u6237\u901a\u8fc7 SQL \u5bf9\u5ba1\u8ba1\u65e5\u5fd7\u8fdb\u884c\u67e5\u770b\u548c\u5206\u6790\u3002"),(0,i.kt)("h2",{id:"\u7f16\u8bd1\u914d\u7f6e\u548c\u90e8\u7f72"},"\u7f16\u8bd1\u3001\u914d\u7f6e\u548c\u90e8\u7f72"),(0,i.kt)("h3",{id:"fe-\u914d\u7f6e"},"FE \u914d\u7f6e"),(0,i.kt)("p",null,"FE\u7684\u63d2\u4ef6\u6846\u67b6\u5f53\u524d\u662f\u5b9e\u9a8c\u6027\u529f\u80fd\uff0cDoris\u4e2d\u9ed8\u8ba4\u5173\u95ed\uff0c\u5728FE\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u589e\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_enable = true"),"\u542f\u7528plugin\u6846\u67b6"),(0,i.kt)("h3",{id:"auditloader-\u914d\u7f6e"},"AuditLoader \u914d\u7f6e"),(0,i.kt)("p",null,"auditloader plugin\u7684\u914d\u7f6e\u4f4d\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"${DORIS}/fe_plugins/auditloader/src/main/assembly/"),"."),(0,i.kt)("p",null,"\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.conf")," \u8fdb\u884c\u914d\u7f6e\u3002\u914d\u7f6e\u9879\u8bf4\u660e\u53c2\u89c1\u6ce8\u91ca\u3002"),(0,i.kt)("version",{since:"1.2.0"}),"\u4ece 1.2 \u7248\u672c\u5f00\u59cb\uff0c\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6\u652f\u6301\u5c06\u6162\u67e5\u8be2\u65e5\u5fd7\u5bfc\u5165\u5230\u5355\u72ec\u7684\u6162\u8868 `doris_slow_log_tbl__` \u4e2d\uff0cDoris \u4e2d\u9ed8\u8ba4\u5173\u95ed\uff0c\u5728\u5ba1\u8ba1\u65e5\u5fd7\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u589e\u52a0 `enable_slow_log = true`\uff0c\u5f00\u542f\u8be5\u529f\u80fd\u3002\u5e76\u4e14\u53ef\u4ee5\u5728 FE \u914d\u7f6e\u6587\u4ef6\u4e2d\u4fee\u6539 `qe_slow_log_ms` \u9879\u6765\u4fee\u6539\u6162\u67e5\u8be2\u9608\u503c\u3002",(0,i.kt)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,i.kt)("p",null,"\u5728 Doris \u4ee3\u7801\u76ee\u5f55\u4e0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"sh build_plugin.sh")," \u540e\uff0c\u4f1a\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"fe_plugins/output")," \u76ee\u5f55\u4e0b\u5f97\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"auditloader.zip")," \u6587\u4ef6\u3002"),(0,i.kt)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u6587\u4ef6\u653e\u7f6e\u5728\u4e00\u4e2a http \u670d\u52a1\u5668\u4e0a\uff0c\u6216\u8005\u62f7\u8d1d",(0,i.kt)("inlineCode",{parentName:"p"},"auditloader.zip"),"(\u6216\u8005\u89e3\u538b",(0,i.kt)("inlineCode",{parentName:"p"},"auditloader.zip"),")\u5230\u6240\u6709 FE \u7684\u6307\u5b9a\u76ee\u5f55\u4e0b\u3002\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u540e\u8005\u3002"),(0,i.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u5b89\u88c5\u63d2\u4ef6\u524d\uff0c\u9700\u8981\u521b\u5efa\u4e4b\u524d\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.conf")," \u4e2d\u6307\u5b9a\u7684\u5ba1\u8ba1\u6570\u636e\u5e93\u548c\u8868\u3002\u82e5\u5f00\u542f\u4e86\u6162\u67e5\u8be2\u65e5\u5fd7\u5bfc\u5165\u529f\u80fd\uff0c\u9700\u8981\u521b\u5efa\u6162\u8868 ",(0,i.kt)("inlineCode",{parentName:"p"},"doris_slow_log_tbl__"),"\uff0c\u5176\u8868\u7ed3\u6784\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"doris_audit_log_tbl__")," \u4e00\u81f4\u3002\u5176\u4e2d\u5efa\u5e93\u4e0e\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'create database doris_audit_db__;\n\ncreate table doris_audit_db__.doris_audit_log_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    `time` datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    error_code int comment "Error code of failing query.",\n    error_message string comment "Error message of failing query.",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(48) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest for this query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G"\n) engine=OLAP\nduplicate key(query_id, `time`, client_ip)\npartition by range(`time`) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n\ncreate table doris_audit_db__.doris_slow_log_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    `time` datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    error_code int comment "Error code of failing query.",\n    error_message string comment "Error message of failing query.",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(48) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest for this query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G "\n) engine=OLAP\nduplicate key(query_id, `time`, client_ip)\npartition by range(`time`) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,i.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u8868\u7ed3\u6784\u4e2d\uff1astmt string \uff0c\u8fd9\u4e2a\u53ea\u80fd\u57280.15\u53ca\u4e4b\u540e\u7248\u672c\u4e2d\u4f7f\u7528\uff0c\u4e4b\u524d\u7248\u672c\uff0c\u5b57\u6bb5\u7c7b\u578b\u4f7f\u7528varchar")),(0,i.kt)("p",null,"\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition")," \u5c5e\u6027\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\uff0c\u9009\u62e9\u5ba1\u8ba1\u65e5\u5fd7\u4fdd\u7559\u7684\u5929\u6570\u3002"),(0,i.kt)("p",null,"\u4e4b\u540e\uff0c\u8fde\u63a5\u5230 Doris \u540e\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALL PLUGIN")," \u547d\u4ee4\u5b8c\u6210\u5b89\u88c5\u3002\u5b89\u88c5\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW PLUGINS")," \u770b\u5230\u5df2\u7ecf\u5b89\u88c5\u7684\u63d2\u4ef6\uff0c\u5e76\u4e14\u72b6\u6001\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALLED"),"\u3002"),(0,i.kt)("p",null,"\u5b8c\u6210\u540e\uff0c\u63d2\u4ef6\u4f1a\u4e0d\u65ad\u7684\u4ee5\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5c06\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u5165\u5230\u8fd9\u4e2a\u8868\u4e2d\u3002"))}d.isMDXComponent=!0}}]);