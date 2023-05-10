"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[58832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>S});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,S=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(S,l(l({ref:t},c),{},{components:n})):a.createElement(S,l({ref:t},c))}));function S(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"S3 Load",language:"en"},l=void 0,i={unversionedId:"data-operate/import/import-way/s3-load-manual",id:"data-operate/import/import-way/s3-load-manual",title:"S3 Load",description:"\x3c!--",source:"@site/docs/data-operate/import/import-way/s3-load-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/s3-load-manual",permalink:"/docs/dev/data-operate/import/import-way/s3-load-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"S3 Load",language:"en"},sidebar:"docs",previous:{title:"MySql load",permalink:"/docs/dev/data-operate/import/import-way/mysql-load-manual"},next:{title:"Insert Into",permalink:"/docs/dev/data-operate/import/import-way/insert-into-manual"}},s={},p=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Preparing",id:"preparing",level:2},{value:"Start Loading",id:"start-loading",level:2},{value:"FAQ",id:"faq",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3-load"},"S3 Load"),(0,r.kt)("p",null,"Starting from version 0.14, Doris supports the direct import of data from online storage systems that support the S3 protocol through the S3 protocol."),(0,r.kt)("p",null,"This document mainly introduces how to import data stored in AWS S3. It also supports the import of other object storage systems that support the S3 protocol, such as Baidu Cloud\u2019s BOS, Alibaba Cloud\u2019s OSS and Tencent Cloud\u2019s COS, etc."),(0,r.kt)("h2",{id:"applicable-scenarios"},"Applicable scenarios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source data in S3 protocol accessible storage systems, such as S3, BOS."),(0,r.kt)("li",{parentName:"ul"},"Data volumes range from tens to hundreds of GB.")),(0,r.kt)("h2",{id:"preparing"},"Preparing"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Standard AK and SK First, you need to find or regenerate AWS ",(0,r.kt)("inlineCode",{parentName:"li"},"Access keys"),", you can find the generation method in ",(0,r.kt)("inlineCode",{parentName:"li"},"My Security Credentials")," of AWS console, as shown in the following figure: ",(0,r.kt)("a",{parentName:"li",href:"https://doris.apache.org/images/aws_ak_sk.png"},"AK_SK")," Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Create New Access Key")," and pay attention to save and generate AK and SK."),(0,r.kt)("li",{parentName:"ol"},"Prepare REGION and ENDPOINT REGION can be selected when creating the bucket or can be viewed in the bucket list. ENDPOINT can be found through REGION on the following page ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region"},"AWS Documentation"))),(0,r.kt)("p",null,"Other cloud storage systems can find relevant information compatible with S3 in corresponding documents"),(0,r.kt)("h2",{id:"start-loading"},"Start Loading"),(0,r.kt)("p",null,"Like Broker Load just replace ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH BROKER broker_name ()")," with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n')),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'    LOAD LABEL example_db.exmpale_label_1\n    (\n        DATA INFILE("s3://your_bucket_name/your_file.txt")\n        INTO TABLE load_test\n        COLUMNS TERMINATED BY ","\n    )\n    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n    PROPERTIES\n    (\n        "timeout" = "3600"\n    );\n')),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"S3 SDK uses virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the ",(0,r.kt)("inlineCode",{parentName:"li"},"use_path_style")," parameter to force the use of path style:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'   WITH S3\n   (\n         "AWS_ENDPOINT" = "AWS_ENDPOINT",\n         "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n         "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n         "AWS_REGION" = "AWS_REGION",\n         "use_path_style" = "true"\n   )\n')),(0,r.kt)("version",{since:"1.2"},(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Support using temporary security credentials to access object stores that support the S3 protocol:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  WITH S3\n  (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_TEMP_ACCESS_KEY",\n        "AWS_SECRET_KEY" = "AWS_TEMP_SECRET_KEY",\n        "AWS_TOKEN" = "AWS_TEMP_TOKEN",\n        "AWS_REGION" = "AWS_REGION"\n  )\n'))))}d.isMDXComponent=!0}}]);