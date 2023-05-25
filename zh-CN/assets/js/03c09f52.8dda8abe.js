"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[82193],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},E="mdxType",O={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),E=c(t),u=a,m=E["".concat(p,".").concat(u)]||E[u]||O[u]||o;return t?r.createElement(m,s(s({ref:n},i),{},{components:t})):r.createElement(m,s({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[E]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},23355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>O,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"CREATE-REPOSITORY",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",id:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",title:"CREATE-REPOSITORY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-REPOSITORY",language:"zh-CN"},sidebar:"docs",previous:{title:"CANCEL-BACKUP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP"},next:{title:"CREATE-ENCRYPT-KEY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY"}},p={},c=[{value:"CREATE-REPOSITORY",id:"create-repository",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],i={toc:c},E="wrapper";function O(e){let{components:n,...t}=e;return(0,a.kt)(E,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-repository"},"CREATE-REPOSITORY"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"CREATE REPOSITORY"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4ed3\u5e93\u3002\u4ed3\u5e93\u7528\u4e8e\u5c5e\u4e8e\u5907\u4efd\u6216\u6062\u590d\u3002\u4ec5 root \u6216 superuser \u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4ed3\u5e93\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE [READ ONLY] REPOSITORY `repo_name`\nWITH [BROKER `broker_name`|S3|hdfs]\nON LOCATION `repo_location`\nPROPERTIES ("key"="value", ...);\n')),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\u7684\u521b\u5efa\uff0c\u4f9d\u8d56\u4e8e\u5df2\u5b58\u5728\u7684 broker \u6216\u8005\u76f4\u63a5\u901a\u8fc7AWS s3 \u534f\u8bae\u8bbf\u95ee\u4e91\u5b58\u50a8\uff0c\u6216\u8005\u76f4\u63a5\u8bbf\u95eeHDFS"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u53ea\u8bfb\u4ed3\u5e93\uff0c\u5219\u53ea\u80fd\u5728\u4ed3\u5e93\u4e0a\u8fdb\u884c\u6062\u590d\u3002\u5982\u679c\u4e0d\u662f\uff0c\u5219\u53ef\u4ee5\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e broker \u6216\u8005S3\u3001hdfs\u7684\u4e0d\u540c\u7c7b\u578b\uff0cPROPERTIES \u6709\u6240\u4e0d\u540c\uff0c\u5177\u4f53\u89c1\u793a\u4f8b\u3002"),(0,a.kt)("li",{parentName:"ul"},"ON LOCATION ,\u5982\u679c\u662f S3 , \u8fd9\u91cc\u540e\u9762\u8ddf\u7684\u662f Bucket Name\u3002")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'\u521b\u5efa\u540d\u4e3a bos_repo \u7684\u4ed3\u5e93\uff0c\u4f9d\u8d56 BOS broker "bos_broker"\uff0c\u6570\u636e\u6839\u76ee\u5f55\u4e3a\uff1abos://palo_backup')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `bos_repo`\nWITH BROKER `bos_broker`\nON LOCATION "bos://palo_backup"\nPROPERTIES\n(\n    "bos_endpoint" = "http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_secret_accesskey"\n);\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u548c\u793a\u4f8b 1 \u76f8\u540c\u7684\u4ed3\u5e93\uff0c\u4f46\u5c5e\u6027\u4e3a\u53ea\u8bfb\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE READ ONLY REPOSITORY `bos_repo`\nWITH BROKER `bos_broker`\nON LOCATION "bos://palo_backup"\nPROPERTIES\n(\n    "bos_endpoint" = "http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_accesskey"\n);\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'\u521b\u5efa\u540d\u4e3a hdfs_repo \u7684\u4ed3\u5e93\uff0c\u4f9d\u8d56 Baidu hdfs broker "hdfs_broker"\uff0c\u6570\u636e\u6839\u76ee\u5f55\u4e3a\uff1ahdfs://hadoop-name-node:54310/path/to/repo/')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `hdfs_repo`\nWITH BROKER `hdfs_broker`\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n    "username" = "user",\n    "password" = "password"\n);\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u4e3a s3_repo \u7684\u4ed3\u5e93\uff0c\u76f4\u63a5\u94fe\u63a5\u4e91\u5b58\u50a8\uff0c\u800c\u4e0d\u901a\u8fc7broker.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://s3-repo"\nPROPERTIES\n(\n    "s3.endpoint" = "http://s3-REGION.amazonaws.com",\n    "s3.access_key" = "AWS_ACCESS_KEY",\n    "s3.secret_key"="AWS_SECRET_KEY",\n    "s3.region" = "REGION"\n);\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u4e3a hdfs_repo \u7684\u4ed3\u5e93\uff0c\u76f4\u63a5\u94fe\u63a5HDFS\uff0c\u800c\u4e0d\u901a\u8fc7broker.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `hdfs_repo`\nWITH hdfs\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n    "fs.defaultFS"="hdfs://hadoop-name-node:54310",\n    "hadoop.username"="user"\n);\n')),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u4e3a minio_repo \u7684\u4ed3\u5e93\uff0c\u76f4\u63a5\u901a\u8fc7 s3 \u534f\u8bae\u94fe\u63a5 minio.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `minio_repo`\nWITH S3\nON LOCATION "s3://minio_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "http://minio.com",\n    "s3.access_key" = "MINIO_USER",\n    "s3.secret_key"="MINIO_PASSWORD",\n    "s3.region" = "REGION"\n    "use_path_style" = "true"\n);\n')),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e34\u65f6\u79d8\u94a5\u521b\u5efa\u540d\u4e3a minio_repo \u7684\u4ed3\u5e93")),(0,a.kt)("version",{since:"1.2"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CREATE REPOSITORY `minio_repo`\nWITH S3\nON LOCATION "s3://minio_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "AWS_ENDPOINT",\n    "s3.access_key" = "AWS_TEMP_ACCESS_KEY",\n    "s3.secret_key" = "AWS_TEMP_SECRET_KEY",\n    "s3.session_token" = "AWS_TEMP_TOKEN",\n    "s3.region" = "AWS_REGION"\n)\n')),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u817e\u8baf\u4e91 COS \u521b\u5efa\u4ed3\u5e93")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CREATE REPOSITORY `cos_repo`\nWITH S3\nON LOCATION "s3://backet1/"\nPROPERTIES\n(\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint" = "http://cos.ap-beijing.myqcloud.com",\n    "s3.region" = "ap-beijing"\n);\n')),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE, REPOSITORY\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u96c6\u7fa4\u53ef\u4ee5\u521b\u5efa\u8fc7\u591a\u4e2a\u4ed3\u5e93\u3002\u53ea\u6709\u62e5\u6709 ADMIN \u6743\u9650\u7684\u7528\u6237\u624d\u80fd\u521b\u5efa\u4ed3\u5e93\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4efb\u4f55\u7528\u6237\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES"},"SHOW REPOSITORIES")," \u547d\u4ee4\u67e5\u770b\u5df2\u7ecf\u521b\u5efa\u7684\u4ed3\u5e93\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u505a\u6570\u636e\u8fc1\u79fb\u64cd\u4f5c\u65f6\uff0c\u9700\u8981\u5728\u6e90\u96c6\u7fa4\u548c\u76ee\u7684\u96c6\u7fa4\u521b\u5efa\u5b8c\u5168\u76f8\u540c\u7684\u4ed3\u5e93\uff0c\u4ee5\u4fbf\u76ee\u7684\u96c6\u7fa4\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u4ed3\u5e93\uff0c\u67e5\u770b\u5230\u6e90\u96c6\u7fa4\u5907\u4efd\u7684\u6570\u636e\u5feb\u7167\u3002")))}O.isMDXComponent=!0}}]);