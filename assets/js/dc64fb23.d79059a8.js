"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,y=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return n?i.createElement(y,a(a({ref:t},c),{},{components:n})):i.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const r={title:"Audit log plugin",language:"en"},a=void 0,l={unversionedId:"ecosystem/audit-plugin",id:"ecosystem/audit-plugin",title:"Audit log plugin",description:"\x3c!--",source:"@site/docs/ecosystem/audit-plugin.md",sourceDirName:"ecosystem",slug:"/ecosystem/audit-plugin",permalink:"/docs/dev/ecosystem/audit-plugin",draft:!1,tags:[],version:"current",frontMatter:{title:"Audit log plugin",language:"en"},sidebar:"docs",previous:{title:"Plugin Development Manual",permalink:"/docs/dev/ecosystem/plugin-development-manual"},next:{title:"CloudCanal Data Import",permalink:"/docs/dev/ecosystem/cloudcanal"}},s={},u=[{value:"Compile, Configure and Deploy",id:"compile-configure-and-deploy",level:2},{value:"FE Configuration",id:"fe-configuration",level:3},{value:"AuditLoader Configuration",id:"auditloader-configuration",level:3},{value:"Compile",id:"compile",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Installation",id:"installation",level:3}],c={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"audit-log-plugin"},"Audit log plugin"),(0,o.kt)("p",null,"Doris's audit log plugin was developed based on FE's plugin framework. Is an optional plugin. Users can install or uninstall this plugin at runtime."),(0,o.kt)("p",null,"This plugin can periodically import the FE audit log into the specified Doris cluster, so that users can easily view and analyze the audit log through SQL."),(0,o.kt)("h2",{id:"compile-configure-and-deploy"},"Compile, Configure and Deploy"),(0,o.kt)("h3",{id:"fe-configuration"},"FE Configuration"),(0,o.kt)("p",null,"FE's plugin framework is an experimental feature, which is closed by default. In the FE configuration file, add ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin_enable = true")," to enable the plugin framework."),(0,o.kt)("h3",{id:"auditloader-configuration"},"AuditLoader Configuration"),(0,o.kt)("p",null,"The configuration of the auditloader plugin is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"$ {DORIS}/fe_plugins/auditloader/src/main/assembly/"),"."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin.conf")," for configuration. See the comments of the configuration items."),(0,o.kt)("version",{since:"1.2.0"}),"Audit log plugin supports importing slow query logs into a separate slow table since version 1.2, `doris_slow_log_tbl__`,  which is closed by default. In the plugin configuration file, add `enable_slow_log = true` to enable the function. And you could modify 'qe_slow_log_ms' item in FE configuration file to change slow query threshold.",(0,o.kt)("h3",{id:"compile"},"Compile"),(0,o.kt)("p",null,"After executing ",(0,o.kt)("inlineCode",{parentName:"p"},"sh build_plugin.sh")," in the Doris code directory, you will get the ",(0,o.kt)("inlineCode",{parentName:"p"},"auditloader.zip")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"fe_plugins/output")," directory."),(0,o.kt)("h3",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"You can place this file on an http download server or copy(or unzip) it to the specified directory of all FEs. Here we use the latter."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"After deployment is complete, and before installing the plugin, you need to create the audit log database and tables previously specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin.conf"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"enable_slow_log")," is set true, the slow table ",(0,o.kt)("inlineCode",{parentName:"p"},"doris_slow_log_tbl__")," needs to be created, with the same schema as ",(0,o.kt)("inlineCode",{parentName:"p"},"doris_audit_log_tbl__"),". The database and table creation statement is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'create database doris_audit_db__;\n\ncreate table doris_audit_db__.doris_audit_log_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    `time` datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    error_code int comment "Error code of failing query.",\n    error_message string comment "Error message of failing query.",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(48) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest for this query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G "\n) engine=OLAP\nduplicate key(query_id, `time`, client_ip)\npartition by range(`time`) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n\ncreate table doris_audit_db__.doris_slow_log_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    `time` datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    error_code int comment "Error code of failing query.",\n    error_message string comment "Error message of failing query.",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(48) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest for this query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G"\n) engine=OLAP\nduplicate key(query_id, `time`, client_ip)\npartition by range(`time`) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Notice")),(0,o.kt)("p",{parentName:"blockquote"},"In the above table structure: stmt string, this can only be used in 0.15 and later versions, in previous versions, the field type used varchar")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamic_partition")," attribute selects the number of days to keep the audit log based on your needs."),(0,o.kt)("p",null,"After that, connect to Doris and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTALL PLUGIN")," command to complete the installation. After successful installation, you can see the installed plug-ins through ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW PLUGINS"),", and the status is ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTALLED"),"."),(0,o.kt)("p",null,"Upon completion, the plug-in will continuously import audit date into this table at specified intervals."))}d.isMDXComponent=!0}}]);