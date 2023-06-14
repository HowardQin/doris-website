"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[43967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),c=l,d=u["".concat(o,".").concat(c)]||u[c]||k[c]||r;return n?a.createElement(d,p(p({ref:t},m),{},{components:n})):a.createElement(d,p({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={title:"EXPORT",language:"zh-CN"},p=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",title:"EXPORT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",draft:!1,tags:[],version:"current",frontMatter:{title:"EXPORT",language:"zh-CN"},sidebar:"docs",previous:{title:"UPDATE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE"},next:{title:"CANCEL-EXPORT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"}},o={},s=[{value:"EXPORT",id:"export",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"export\u6570\u636e\u5230\u672c\u5730",id:"export\u6570\u636e\u5230\u672c\u5730",level:4},{value:"export with S3",id:"export-with-s3",level:4},{value:"export with HDFS",id:"export-with-hdfs",level:4},{value:"export with Broker",id:"export-with-broker",level:4},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3},{value:"\u5b50\u4efb\u52a1\u7684\u62c6\u5206",id:"\u5b50\u4efb\u52a1\u7684\u62c6\u5206",level:4},{value:"\u5185\u5b58\u9650\u5236",id:"\u5185\u5b58\u9650\u5236",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:4}],m={toc:s},u="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"export"},"EXPORT"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"EXPORT"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c06\u6307\u5b9a\u8868\u7684\u6570\u636e\u5bfc\u51fa\u5230\u6307\u5b9a\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\uff0c\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\u5219\u8fd4\u56de\u3002\u6267\u884c\u540e\u53ef\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},"SHOW EXPORT")," \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPORT TABLE table_name\n[PARTITION (p1[,p2])]\n[WHERE]\nTO export_path\n[opt_properties]\nWITH BROKER/S3/HDFS\n[broker_properties];\n")),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"table_name")),(0,l.kt)("p",{parentName:"li"},"\u5f53\u524d\u8981\u5bfc\u51fa\u7684\u8868\u7684\u8868\u540d\u3002\u4ec5\u652f\u6301 Doris \u672c\u5730\u8868\u6570\u636e\u7684\u5bfc\u51fa\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"partition")),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u53ea\u5bfc\u51fa\u6307\u5b9a\u8868\u7684\u67d0\u4e9b\u6307\u5b9a\u5206\u533a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"export_path")),(0,l.kt)("p",{parentName:"li"},"\u5bfc\u51fa\u7684\u6587\u4ef6\u8def\u5f84\u3002\u53ef\u4ee5\u662f\u76ee\u5f55\uff0c\u4e5f\u53ef\u4ee5\u662f\u6587\u4ef6\u76ee\u5f55\u52a0\u6587\u4ef6\u524d\u7f00\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs://path/to/my_file_"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"opt_properties")),(0,l.kt)("p",{parentName:"li"},"\u7528\u4e8e\u6307\u5b9a\u4e00\u4e9b\u5bfc\u51fa\u53c2\u6570\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'[PROPERTIES ("key"="value", ...)]\n')),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u6307\u5b9a\u5982\u4e0b\u53c2\u6570\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"label"),": \u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a\u6b64\u6b21Export\u4efb\u52a1\u7684label,\u5f53\u4e0d\u6307\u5b9a\u65f6\u7cfb\u7edf\u4f1a\u968f\u673a\u7ed9\u4e00\u4e2alabel\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"column_separator"),"\uff1a\u6307\u5b9a\u5bfc\u51fa\u7684\u5217\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u4e3a\\t\u3002\u4ec5\u652f\u6301\u5355\u5b57\u8282\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"line_delimiter"),"\uff1a\u6307\u5b9a\u5bfc\u51fa\u7684\u884c\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u4e3a\\n\u3002\u4ec5\u652f\u6301\u5355\u5b57\u8282\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"columns"),"\uff1a\u6307\u5b9a\u5bfc\u51fa\u4f5c\u4e1a\u8868\u7684\u67d0\u4e9b\u5217\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a2\u5c0f\u65f6\uff0c\u5355\u4f4d\u662f\u79d2\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format"),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u6587\u4ef6\u683c\u5f0f\uff0c\u652f\u6301\uff1aparquet, orc, csv, csv_with_names\u3001csv_with_names_and_types\u3002 \u9ed8\u8ba4\u4e3acsv\u683c\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_file_size"),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9650\u5236\uff0c\u5982\u679c\u7ed3\u679c\u8d85\u8fc7\u8fd9\u4e2a\u503c\uff0c\u5c06\u5207\u5272\u6210\u591a\u4e2a\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delete_existing_files"),": \u9ed8\u8ba4\u4e3afalse\uff0c\u82e5\u6307\u5b9a\u4e3atrue,\u5219\u4f1a\u5148\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"li"},"export_path"),'\u6240\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u7136\u540e\u5bfc\u51fa\u6570\u636e\u5230\u8be5\u76ee\u5f55\u4e0b\u3002\u4f8b\u5982\uff1a"export_path" = "/user/tmp", \u5219\u4f1a\u5220\u9664"/user/"\u4e0b\u6240\u6709\u6587\u4ef6\u53ca\u76ee\u5f55\uff1b"file_path" = "/user/tmp/", \u5219\u4f1a\u5220\u9664"/user/tmp/"\u4e0b\u6240\u6709\u6587\u4ef6\u53ca\u76ee\u5f55\u3002')),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8981\u4f7f\u7528delete_existing_files\u53c2\u6570\uff0c\u8fd8\u9700\u8981\u5728fe.conf\u4e2d\u6dfb\u52a0\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"enable_delete_existing_files = true"),"\u5e76\u91cd\u542ffe\uff0c\u6b64\u65f6delete_existing_files\u624d\u4f1a\u751f\u6548\u3002delete_existing_files = true \u662f\u4e00\u4e2a\u5371\u9669\u7684\u64cd\u4f5c\uff0c\u5efa\u8bae\u53ea\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u4f7f\u7528\u3002")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"WITH BROKER")),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7 Broker \u8fdb\u7a0b\u5199\u6570\u636e\u5230\u8fdc\u7aef\u5b58\u50a8\u4e0a\u3002\u8fd9\u91cc\u9700\u8981\u5b9a\u4e49\u76f8\u5173\u7684\u8fde\u63a5\u4fe1\u606f\u4f9b Broker \u4f7f\u7528\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'\u8bed\u6cd5\uff1a\nWITH BROKER "broker_name"\n("key"="value"[,...])\n\nBroker\u76f8\u5173\u5c5e\u6027\uff1a\n  username: \u7528\u6237\u540d\n  password: \u5bc6\u7801\n  hadoop.security.authentication: \u6307\u5b9a\u8ba4\u8bc1\u65b9\u5f0f\u4e3a kerberos\n  kerberos_principal: \u6307\u5b9a kerberos \u7684 principal\n  kerberos_keytab: \u6307\u5b9a kerberos \u7684 keytab \u6587\u4ef6\u8def\u5f84\u3002\u8be5\u6587\u4ef6\u5fc5\u987b\u4e3a Broker \u8fdb\u7a0b\u6240\u5728\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u3002\u5e76\u4e14\u53ef\u4ee5\u88ab Broker \u8fdb\u7a0b\u8bbf\u95ee\n')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"WITH HDFS")),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u76f4\u63a5\u5c06\u6570\u636e\u5199\u5230\u8fdc\u7aefHDFS\u4e0a\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'\u8bed\u6cd5\uff1a\nWITH HDFS ("key"="value"[,...])\n\nHDFS \u76f8\u5173\u5c5e\u6027:\n  fs.defaultFS: namenode \u5730\u5740\u548c\u7aef\u53e3\n  hadoop.username: hdfs \u7528\u6237\u540d\n  dfs.nameservices: name service\u540d\u79f0\uff0c\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4\n  dfs.ha.namenodes.[nameservice ID]: namenode\u7684id\u5217\u8868,\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4\n  dfs.namenode.rpc-address.[nameservice ID].[name node ID]: Name node\u7684rpc\u5730\u5740\uff0c\u6570\u91cf\u4e0enamenode\u6570\u91cf\u76f8\u540c\uff0c\u4e0ehdfs-site.xml\u4fdd\n\n  \u5bf9\u4e8e\u5f00\u542fkerberos\u8ba4\u8bc1\u7684Hadoop \u96c6\u7fa4\uff0c\u8fd8\u9700\u8981\u989d\u5916\u8bbe\u7f6e\u5982\u4e0b PROPERTIES \u5c5e\u6027:\n  dfs.namenode.kerberos.principal: HDFS namenode \u670d\u52a1\u7684 principal \u540d\u79f0\n  hadoop.security.authentication: \u8ba4\u8bc1\u65b9\u5f0f\u8bbe\u7f6e\u4e3a kerberos\n  hadoop.kerberos.principal: \u8bbe\u7f6e Doris \u8fde\u63a5 HDFS \u65f6\u4f7f\u7528\u7684 Kerberos \u4e3b\u4f53\n  hadoop.kerberos.keytab: \u8bbe\u7f6e keytab \u672c\u5730\u6587\u4ef6\u8def\u5f84\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"WITH S3")),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u76f4\u63a5\u5c06\u6570\u636e\u5199\u5230\u8fdc\u7aefS3\u5bf9\u8c61\u5b58\u50a8\u4e0a\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'\u8bed\u6cd5\uff1a\nWITH S3 ("key"="value"[,...])\n\nS3 \u76f8\u5173\u5c5e\u6027:\n  AWS_ENDPOINT\n  AWS_ACCESS_KEY\n  AWS_SECRET_KEY\n  AWS_REGION\n  use_path_stype: (\u9009\u586b) \u9ed8\u8ba4\u4e3afalse \u3002S3 SDK \u9ed8\u8ba4\u4f7f\u7528 virtual-hosted style \u65b9\u5f0f\u3002\u4f46\u67d0\u4e9b\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u53ef\u80fd\u6ca1\u5f00\u542f\u6216\u4e0d\u652f\u6301virtual-hosted style \u65b9\u5f0f\u7684\u8bbf\u95ee\uff0c\u6b64\u65f6\u53ef\u4ee5\u6dfb\u52a0 use_path_style \u53c2\u6570\u6765\u5f3a\u5236\u4f7f\u7528 path style \u8bbf\u95ee\u65b9\u5f0f\u3002\n')))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("h4",{id:"export\u6570\u636e\u5230\u672c\u5730"},"export\u6570\u636e\u5230\u672c\u5730"),(0,l.kt)("p",null,"export\u6570\u636e\u5230\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\uff0c\u9700\u8981\u5728fe.conf\u4e2d\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"enable_outfile_to_local=true"),"\u5e76\u4e14\u91cd\u542fFE\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06test\u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230\u672c\u5730\u5b58\u50a8, \u9ed8\u8ba4\u5bfc\u51facsv\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp/";\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5c06test\u8868\u4e2d\u7684k1,k2\u5217\u5bfc\u51fa\u5230\u672c\u5730\u5b58\u50a8, \u9ed8\u8ba4\u5bfc\u51facsv\u6587\u4ef6\u683c\u5f0f\uff0c\u5e76\u8bbe\u7f6elabel")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "label" = "label1",\n  "columns" = "k1,k2"\n);\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5c06test\u8868\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"k1 < 50")," \u7684\u884c\u5bfc\u51fa\u5230\u672c\u5730\u5b58\u50a8, \u9ed8\u8ba4\u5bfc\u51facsv\u683c\u5f0f\u6587\u4ef6\uff0c\u5e76\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},","),"\u4f5c\u4e3a\u5217\u5206\u5272\u7b26")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test WHERE k1 < 50 TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "column_separator"=","\n);\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u5c06 test \u8868\u4e2d\u7684\u5206\u533ap1,p2\u5bfc\u51fa\u5230\u672c\u5730\u5b58\u50a8, \u9ed8\u8ba4\u5bfc\u51facsv\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test PARTITION (p1,p2) TO "file:///home/user/tmp/" \nPROPERTIES ("columns" = "k1,k2");\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u5c06test\u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230\u672c\u5730\u5b58\u50a8,\u5bfc\u51fa\u5176\u4ed6\u683c\u5f0f\u7684\u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'// parquet\u683c\u5f0f\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "format" = "parquet"\n);\n\n// orc\u683c\u5f0f\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "format" = "orc"\n);\n\n// csv_with_names\u683c\u5f0f, \u4ee5\u2019AA\u2018\u4e3a\u5217\u5206\u5272\u7b26\uff0c\u2018zz\u2019\u4e3a\u884c\u5206\u5272\u7b26\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "csv_with_names",\n  "column_separator"="AA",\n  "line_delimiter" = "zz"\n);\n\n// csv_with_names_and_types\u683c\u5f0f\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "csv_with_names_and_types"\n);\n')),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6emax_file_sizes\u5c5e\u6027")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB"\n);\n')),(0,l.kt)("p",null,"\u5f53\u5bfc\u51fa\u6587\u4ef6\u5927\u4e8e5MB\u65f6\uff0c\u5c06\u5207\u5272\u6570\u636e\u4e3a\u591a\u4e2a\u6587\u4ef6\uff0c\u6bcf\u4e2a\u6587\u4ef6\u6700\u5927\u4e3a5MB\u3002"),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6edelete_existing_files\u5c5e\u6027")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB",\n  "delete_existing_files" = "true"\n);\n')),(0,l.kt)("p",null,"Export\u5bfc\u51fa\u6570\u636e\u65f6\u4f1a\u5148\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"/home/user/"),"\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u53ca\u76ee\u5f55\u5220\u9664\uff0c\u7136\u540e\u5bfc\u51fa\u6570\u636e\u5230\u8be5\u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("h4",{id:"export-with-s3"},"export with S3"),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},'\u5c06 s3_test \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 s3 \u4e0a\uff0c\u4ee5\u4e0d\u53ef\u89c1\u5b57\u7b26 "\\x07" \u4f5c\u4e3a\u5217\u6216\u8005\u884c\u5206\u9694\u7b26\u3002\u5982\u679c\u9700\u8981\u5c06\u6570\u636e\u5bfc\u51fa\u5230minio\uff0c\u8fd8\u9700\u8981\u6307\u5b9ause_path_style=true\u3002')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE s3_test TO "s3://bucket/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) WITH s3 (\n  "AWS_ENDPOINT" = "xxxxx",\n  "AWS_ACCESS_KEY" = "xxxxx",\n  "AWS_SECRET_KEY"="xxxx",\n  "AWS_REGION" = "xxxxx"\n)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE minio_test TO "s3://bucket/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) WITH s3 (\n  "AWS_ENDPOINT" = "xxxxx",\n  "AWS_ACCESS_KEY" = "xxxxx",\n  "AWS_SECRET_KEY"="xxxx",\n  "AWS_REGION" = "xxxxx",\n  "use_path_style" = "true"\n)\n')),(0,l.kt)("h4",{id:"export-with-hdfs"},"export with HDFS"),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"\u5c06 test \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 HDFS \u4e0a\uff0c\u5bfc\u51fa\u6587\u4ef6\u683c\u5f0f\u4e3aparquet\uff0c\u5bfc\u51fa\u4f5c\u4e1a\u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9650\u5236\u4e3a1024MB\uff0c\u4fdd\u7559\u6240\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "hdfs://hdfs_host:port/a/b/c/" \nPROPERTIES(\n    "format" = "parquet",\n    "max_file_size" = "1024MB",\n    "delete_existing_files" = "false"\n)\nwith HDFS (\n"fs.defaultFS"="hdfs://hdfs_host:port",\n"hadoop.username" = "hadoop"\n);\n')),(0,l.kt)("h4",{id:"export-with-broker"},"export with Broker"),(0,l.kt)("p",null,"\u9700\u8981\u5148\u542f\u52a8broker\u8fdb\u7a0b\uff0c\u5e76\u5728FE\u4e2d\u6dfb\u52a0\u8be5broker\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06 test \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 hdfs \u4e0a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "hdfs://hdfs_host:port/a/b/c" \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},'\u5c06 testTbl \u8868\u4e2d\u7684\u5206\u533ap1,p2\u5bfc\u51fa\u5230 hdfs \u4e0a\uff0c\u4ee5","\u4f5c\u4e3a\u5217\u5206\u9694\u7b26\uff0c\u5e76\u6307\u5b9alabel')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl PARTITION (p1,p2) TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "label" = "mylabel",\n  "column_separator"=","\n) \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},'\u5c06 testTbl \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 hdfs \u4e0a\uff0c\u4ee5\u4e0d\u53ef\u89c1\u5b57\u7b26 "\\x07" \u4f5c\u4e3a\u5217\u6216\u8005\u884c\u5206\u9694\u7b26\u3002')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) \nWITH BROKER "broker_name" \n(\n  "username"="xxx", \n  "password"="yyy"\n)\n')),(0,l.kt)("h3",{id:"keywords"},"Keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"EXPORT\n")),(0,l.kt)("h3",{id:"best-practice"},"Best Practice"),(0,l.kt)("h4",{id:"\u5b50\u4efb\u52a1\u7684\u62c6\u5206"},"\u5b50\u4efb\u52a1\u7684\u62c6\u5206"),(0,l.kt)("p",null,"\u4e00\u4e2a Export \u4f5c\u4e1a\u4f1a\u62c6\u5206\u6210\u591a\u4e2a\u5b50\u4efb\u52a1\uff08\u6267\u884c\u8ba1\u5212\uff09\u53bb\u6267\u884c\u3002\u6709\u591a\u5c11\u67e5\u8be2\u8ba1\u5212\u9700\u8981\u6267\u884c\uff0c\u53d6\u51b3\u4e8e\u603b\u5171\u6709\u591a\u5c11 Tablet\uff0c\u4ee5\u53ca\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u6700\u591a\u53ef\u4ee5\u5206\u914d\u591a\u5c11\u4e2a Tablet\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u591a\u4e2a\u67e5\u8be2\u8ba1\u5212\u662f\u4e32\u884c\u6267\u884c\u7684\uff0c\u6240\u4ee5\u5982\u679c\u8ba9\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u5904\u7406\u66f4\u591a\u7684\u5206\u7247\uff0c\u5219\u53ef\u4ee5\u51cf\u5c11\u4f5c\u4e1a\u7684\u6267\u884c\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u4f46\u5982\u679c\u67e5\u8be2\u8ba1\u5212\u51fa\u9519\uff08\u6bd4\u5982\u8c03\u7528 Broker \u7684 RPC \u5931\u8d25\uff0c\u8fdc\u7aef\u5b58\u50a8\u51fa\u73b0\u6296\u52a8\u7b49\uff09\uff0c\u8fc7\u591a\u7684 Tablet \u4f1a\u5bfc\u81f4\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u7684\u91cd\u8bd5\u6210\u672c\u53d8\u9ad8\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u9700\u8981\u5408\u7406\u5b89\u6392\u67e5\u8be2\u8ba1\u5212\u7684\u4e2a\u6570\u4ee5\u53ca\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u6240\u9700\u8981\u626b\u63cf\u7684\u5206\u7247\u6570\uff0c\u5728\u6267\u884c\u65f6\u95f4\u548c\u6267\u884c\u6210\u529f\u7387\u4e4b\u95f4\u505a\u51fa\u5e73\u8861\u3002"),(0,l.kt)("p",null,"\u4e00\u822c\u5efa\u8bae\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u626b\u63cf\u7684\u6570\u636e\u91cf\u5728 3-5 GB\u5185\u3002"),(0,l.kt)("h4",{id:"\u5185\u5b58\u9650\u5236"},"\u5185\u5b58\u9650\u5236"),(0,l.kt)("p",null,"\u901a\u5e38\u4e00\u4e2a Export \u4f5c\u4e1a\u7684\u67e5\u8be2\u8ba1\u5212\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u626b\u63cf-\u5bfc\u51fa")," \u4e24\u90e8\u5206\uff0c\u4e0d\u6d89\u53ca\u9700\u8981\u592a\u591a\u5185\u5b58\u7684\u8ba1\u7b97\u903b\u8f91\u3002\u6240\u4ee5\u901a\u5e38 2GB \u7684\u9ed8\u8ba4\u5185\u5b58\u9650\u5236\u53ef\u4ee5\u6ee1\u8db3\u9700\u6c42\u3002"),(0,l.kt)("p",null,"\u4f46\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u6bd4\u5982\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u5728\u540c\u4e00\u4e2a BE \u4e0a\u9700\u8981\u626b\u63cf\u7684 Tablet \u8fc7\u591a\uff0c\u6216\u8005 Tablet \u7684\u6570\u636e\u7248\u672c\u8fc7\u591a\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u4e0d\u8db3\u3002\u6b64\u65f6\u9700\u8981\u901a\u8fc7\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"exec_mem_limit")," \u53c2\u6570\u8bbe\u7f6e\u66f4\u5927\u7684\u5185\u5b58\uff0c\u6bd4\u5982 4GB\u30018GB \u7b49\u3002"),(0,l.kt)("h4",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u4e00\u6b21\u6027\u5bfc\u51fa\u5927\u91cf\u6570\u636e\u3002\u4e00\u4e2a Export \u4f5c\u4e1a\u5efa\u8bae\u7684\u5bfc\u51fa\u6570\u636e\u91cf\u6700\u5927\u5728\u51e0\u5341 GB\u3002\u8fc7\u5927\u7684\u5bfc\u51fa\u4f1a\u5bfc\u81f4\u66f4\u591a\u7684\u5783\u573e\u6587\u4ef6\u548c\u66f4\u9ad8\u7684\u91cd\u8bd5\u6210\u672c\u3002\u5982\u679c\u8868\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u5efa\u8bae\u6309\u7167\u5206\u533a\u5bfc\u51fa\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c Export \u4f5c\u4e1a\u8fd0\u884c\u5931\u8d25\uff0c\u5728\u8fdc\u7aef\u5b58\u50a8\u4e2d\u4ea7\u751f\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"__doris_export_tmp_xxx")," \u4e34\u65f6\u76ee\u5f55\uff0c\u4ee5\u53ca\u5df2\u7ecf\u751f\u6210\u7684\u6587\u4ef6\u4e0d\u4f1a\u88ab\u5220\u9664\uff0c\u9700\u8981\u7528\u6237\u624b\u52a8\u5220\u9664\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c Export \u4f5c\u4e1a\u8fd0\u884c\u6210\u529f\uff0c\u5728\u8fdc\u7aef\u5b58\u50a8\u4e2d\u4ea7\u751f\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"__doris_export_tmp_xxx")," \u76ee\u5f55\uff0c\u6839\u636e\u8fdc\u7aef\u5b58\u50a8\u7684\u6587\u4ef6\u7cfb\u7edf\u8bed\u4e49\uff0c\u53ef\u80fd\u4f1a\u4fdd\u7559\uff0c\u4e5f\u53ef\u80fd\u4f1a\u88ab\u6e05\u9664\u3002\u6bd4\u5982\u5728S3\u5bf9\u8c61\u5b58\u50a8\u4e2d\uff0c\u901a\u8fc7 rename \u64cd\u4f5c\u5c06\u4e00\u4e2a\u76ee\u5f55\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u6587\u4ef6\u79fb\u8d70\u540e\uff0c\u8be5\u76ee\u5f55\u4e5f\u4f1a\u88ab\u5220\u9664\u3002\u5982\u679c\u8be5\u76ee\u5f55\u6ca1\u6709\u88ab\u6e05\u9664\uff0c\u7528\u6237\u53ef\u4ee5\u624b\u52a8\u6e05\u9664\u3002"),(0,l.kt)("li",{parentName:"ul"},"Export \u4f5c\u4e1a\u53ea\u4f1a\u5bfc\u51fa Base \u8868\u7684\u6570\u636e\uff0c\u4e0d\u4f1a\u5bfc\u51fa\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"Export \u4f5c\u4e1a\u4f1a\u626b\u63cf\u6570\u636e\uff0c\u5360\u7528 IO \u8d44\u6e90\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u7cfb\u7edf\u7684\u67e5\u8be2\u5ef6\u8fdf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u96c6\u7fa4\u5185\u540c\u65f6\u8fd0\u884c\u7684 Export \u4f5c\u4e1a\u6700\u5927\u4e2a\u6570\u4e3a 5\u3002\u4e4b\u540e\u63d0\u4ea4\u7684\u4f5c\u4e1a\u5c06\u4f1a\u6392\u961f\u3002")))}k.isMDXComponent=!0}}]);