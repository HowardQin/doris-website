"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[33269],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(f,r(r({ref:t},s),{},{components:a})):n.createElement(f,r({ref:t},s))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const l={title:"Alibaba Cloud DLF",language:"en"},r=void 0,i={unversionedId:"lakehouse/multi-catalog/dlf",id:"version-1.2/lakehouse/multi-catalog/dlf",title:"Alibaba Cloud DLF",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/lakehouse/multi-catalog/dlf.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/dlf",permalink:"/docs/1.2/lakehouse/multi-catalog/dlf",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Alibaba Cloud DLF",language:"en"},sidebar:"docs",previous:{title:"JDBC",permalink:"/docs/1.2/lakehouse/multi-catalog/jdbc"},next:{title:"FAQ",permalink:"/docs/1.2/lakehouse/multi-catalog/faq"}},c={},p=[{value:"Connect to DLF",id:"connect-to-dlf",level:2},{value:"The First Way, Create a Hive Catalog.",id:"the-first-way-create-a-hive-catalog",level:3},{value:"The Second Way, Configure the Hive Conf",id:"the-second-way-configure-the-hive-conf",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"alibaba-cloud-dlf"},"Alibaba Cloud DLF"),(0,o.kt)("p",null,"Data Lake Formation (DLF) is the unified metadata management service of Alibaba Cloud. It is compatible with the Hive Metastore protocol."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/product/datalake-formation"},"What is DLF"))),(0,o.kt)("p",null,"Doris can access DLF the same way as it accesses Hive Metastore."),(0,o.kt)("h2",{id:"connect-to-dlf"},"Connect to DLF"),(0,o.kt)("h3",{id:"the-first-way-create-a-hive-catalog"},"The First Way, Create a Hive Catalog."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive_with_dlf PROPERTIES (\n   "type"="hms",\n   "dlf.catalog.proxyMode" = "DLF_ONLY",\n   "hive.metastore.type" = "dlf",\n   "dlf.catalog.endpoint" = "dlf.cn-beijing.aliyuncs.com",\n   "dlf.catalog.region" = "cn-beijing",\n   "dlf.catalog.uid" = "uid",\n   "dlf.catalog.accessKeyId" = "ak",\n   "dlf.catalog.accessKeySecret" = "sk"\n);\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"type")," should always be ",(0,o.kt)("inlineCode",{parentName:"p"},"hms"),". If you need to access Alibaba Cloud OSS on the public network, can add ",(0,o.kt)("inlineCode",{parentName:"p"},'"dlf.catalog.accessPublic"="true"'),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dlf.catalog.endpoint"),": DLF Endpoint. See ",(0,o.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/data-lake-formation/latest/regions-and-endpoints"},"Regions and Endpoints of DLF"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dlf.catalog.region"),": DLF Region. See ",(0,o.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/data-lake-formation/latest/regions-and-endpoints"},"Regions and Endpoints of DLF"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dlf.catalog.uid"),': Alibaba Cloud account. You can find the "Account ID" in the upper right corner on the Alibaba Cloud console.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dlf.catalog.accessKeyId"),"\uff1aAccessKey, which you can create and manage on the ",(0,o.kt)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"Alibaba Cloud console"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dlf.catalog.accessKeySecret"),"\uff1aSecretKey, which you can create and manage on the ",(0,o.kt)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"Alibaba Cloud console"),".")),(0,o.kt)("p",null,"Other configuration items are fixed and require no modifications."),(0,o.kt)("p",null,"After the above steps, you can access metadata in DLF the same way as you access Hive MetaStore."),(0,o.kt)("p",null,"Doris supports accessing Hive/Iceberg/Hudi metadata in DLF."),(0,o.kt)("h3",{id:"the-second-way-configure-the-hive-conf"},"The Second Way, Configure the Hive Conf"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create the ",(0,o.kt)("inlineCode",{parentName:"li"},"hive-site.xml")," file, and put it in the ",(0,o.kt)("inlineCode",{parentName:"li"},"fe/conf"),"  directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<?xml version="1.0"?>\n<configuration>\n    \x3c!--Set to use dlf client--\x3e\n    <property>\n        <name>hive.metastore.type</name>\n        <value>dlf</value>\n    </property>\n    <property>\n        <name>dlf.catalog.endpoint</name>\n        <value>dlf-vpc.cn-beijing.aliyuncs.com</value>\n    </property>\n    <property>\n        <name>dlf.catalog.region</name>\n        <value>cn-beijing</value>\n    </property>\n    <property>\n        <name>dlf.catalog.proxyMode</name>\n        <value>DLF_ONLY</value>\n    </property>\n    <property>\n        <name>dlf.catalog.uid</name>\n        <value>20000000000000000</value>\n    </property>\n    <property>\n        <name>dlf.catalog.accessKeyId</name>\n        <value>XXXXXXXXXXXXXXX</value>\n    </property>\n    <property>\n        <name>dlf.catalog.accessKeySecret</name>\n        <value>XXXXXXXXXXXXXXXXX</value>\n    </property>\n</configuration>\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Restart FE, Doris will read and parse ",(0,o.kt)("inlineCode",{parentName:"li"},"fe/conf/hive-site.xml"),". And then Create Catalog via the ",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE CATALOG")," statement.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive_with_dlf PROPERTIES (\n    "type"="hms",\n    "hive.metastore.uris" = "thrift://127.0.0.1:9083"\n)\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"type")," should always be ",(0,o.kt)("inlineCode",{parentName:"p"},"hms"),"; while ",(0,o.kt)("inlineCode",{parentName:"p"},"hive.metastore.uris")," can be arbitary since it is not used in real practice, but it should follow the format of Hive Metastore Thrift URI."))}d.isMDXComponent=!0}}]);