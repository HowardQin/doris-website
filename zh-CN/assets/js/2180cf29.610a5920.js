"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[20959],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(t),d=i,g=s["".concat(o,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:i,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const a={title:"Pipeline \u6267\u884c\u5f15\u64ce",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},l=void 0,p={unversionedId:"query-acceleration/pipeline-execution-engine",id:"query-acceleration/pipeline-execution-engine",title:"Pipeline \u6267\u884c\u5f15\u64ce",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/pipeline-execution-engine.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/pipeline-execution-engine",permalink:"/zh-CN/docs/dev/query-acceleration/pipeline-execution-engine",draft:!1,tags:[],version:"current",frontMatter:{title:"Pipeline \u6267\u884c\u5f15\u64ce",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"\u884c\u8f6c\u5217",permalink:"/zh-CN/docs/dev/advanced/lateral-view"},next:{title:"Nereids \u5168\u65b0\u4f18\u5316\u5668",permalink:"/zh-CN/docs/dev/query-acceleration/nereids"}},o={},c=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u8bbe\u7f6eSession\u53d8\u91cf",id:"\u8bbe\u7f6esession\u53d8\u91cf",level:3},{value:"enable_pipeline_engine",id:"enable_pipeline_engine",level:4},{value:"parallel_fragment_exec_instance_num",id:"parallel_fragment_exec_instance_num",level:4}],u={toc:c},s="wrapper";function m(e){let{components:n,...a}=e;return(0,i.kt)(s,(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pipeline-\u6267\u884c\u5f15\u64ce"},"Pipeline \u6267\u884c\u5f15\u64ce"),(0,i.kt)("version",{since:"2.0.0"}),(0,i.kt)("p",null,"Pipeline \u6267\u884c\u5f15\u64ce \u662f Doris \u5728 2.0 \u7248\u672c\u52a0\u5165\u7684\u5b9e\u9a8c\u6027\u529f\u80fd\u3002\u76ee\u6807\u662f\u4e3a\u4e86\u66ff\u6362\u5f53\u524d Doris \u7684\u706b\u5c71\u6a21\u578b\u7684\u6267\u884c\u5f15\u64ce\uff0c\u5145\u5206\u91ca\u653e\u591a\u6838 CPU \u7684\u8ba1\u7b97\u80fd\u529b\uff0c\u5e76\u5bf9 Doris \u7684\u67e5\u8be2\u7ebf\u7a0b\u7684\u6570\u76ee\u8fdb\u884c\u9650\u5236\uff0c\u89e3\u51b3 Doris \u7684\u6267\u884c\u7ebf\u7a0b\u81a8\u80c0\u7684\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u5b83\u7684\u5177\u4f53\u8bbe\u8ba1\u3001\u5b9e\u73b0\u548c\u6548\u679c\u53ef\u4ee5\u53c2\u9605 ","[DSIP-027]","(",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/DORIS/DSIP-027%3A+Support+Pipeline+Exec+Engine"},"DSIP-027: Support Pipeline Exec Engine - DORIS - Apache Software Foundation"),")\u3002"),(0,i.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,i.kt)("p",null,"\u5f53\u524d\u7684Doris\u7684SQL\u6267\u884c\u5f15\u64ce\u662f\u57fa\u4e8e\u4f20\u7edf\u7684\u706b\u5c71\u6a21\u578b\u8fdb\u884c\u8bbe\u8ba1\uff0c\u5728\u5355\u673a\u591a\u6838\u7684\u573a\u666f\u4e0b\u5b58\u5728\u4e0b\u9762\u7684\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u5145\u5206\u5229\u7528\u591a\u6838\u8ba1\u7b97\u80fd\u529b\uff0c\u63d0\u5347\u67e5\u8be2\u6027\u80fd\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u591a\u6570\u573a\u666f\u4e0b\u8fdb\u884c\u6027\u80fd\u8c03\u4f18\u65f6\u9700\u8981\u624b\u52a8\u8bbe\u7f6e\u5e76\u884c\u5ea6"),"\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u51e0\u4e4e\u5f88\u96be\u8fdb\u884c\u8bbe\u5b9a\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5355\u673a\u67e5\u8be2\u7684\u6bcf\u4e2a Instance \u5bf9\u5e94\u7ebf\u7a0b\u6c60\u7684\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u8fd9\u4f1a\u5e26\u6765\u989d\u5916\u7684\u4e24\u4e2a\u95ee\u9898\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6c60\u4e00\u65e6\u6253\u6ee1\u3002",(0,i.kt)("strong",{parentName:"li"},"Doris\u7684\u67e5\u8be2\u5f15\u64ce\u4f1a\u8fdb\u5165\u5047\u6027\u6b7b\u9501"),"\uff0c\u5bf9\u540e\u7eed\u7684\u67e5\u8be2\u65e0\u6cd5\u54cd\u5e94\u3002",(0,i.kt)("strong",{parentName:"li"},"\u540c\u65f6\u6709\u4e00\u5b9a\u6982\u7387\u8fdb\u5165\u903b\u8f91\u6b7b\u9501"),"\u7684\u60c5\u51b5\uff1a\u6bd4\u5982\u6240\u6709\u7684\u7ebf\u7a0b\u90fd\u5728\u6267\u884c\u4e00\u4e2a Instance \u7684 Probe \u4efb\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u963b\u585e\u7684\u7b97\u5b50\u4f1a\u5360\u7528\u7ebf\u7a0b\u8d44\u6e90\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u800c\u963b\u585e\u7684\u7ebf\u7a0b\u8d44\u6e90\u65e0\u6cd5\u8ba9\u6e21\u7ed9\u80fd\u591f\u8c03\u5ea6\u7684 Instance"),"\uff0c\u6574\u4f53\u8d44\u6e90\u5229\u7528\u7387\u4e0a\u4e0d\u53bb\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u963b\u585e\u7b97\u5b50\u4f9d\u8d56\u64cd\u4f5c\u7cfb\u7edf\u7684\u7ebf\u7a0b\u8c03\u5ea6\u673a\u5236\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b\u5207\u6362\u5f00\u9500\u8f83\u5927\uff08\u5c24\u5176\u5728\u7cfb\u7edf\u6df7\u5e03\u7684\u573a\u666f\u4e2d\uff09")))),(0,i.kt)("p",null,"\u7531\u6b64\u5e26\u6765\u7684\u4e00\u7cfb\u5217\u95ee\u9898\u9a71\u52a8 Doris \u9700\u8981\u5b9e\u73b0\u9002\u5e94\u73b0\u4ee3\u591a\u6838 CPU \u7684\u4f53\u7cfb\u7ed3\u6784\u7684\u6267\u884c\u5f15\u64ce\u3002"),(0,i.kt)("p",null,"\u800c\u5982\u4e0b\u56fe\u6240\u793a\uff08\u5f15\u7528\u81ea","[Push versus pull-based loop fusion in query engines]","(",(0,i.kt)("a",{parentName:"p",href:"https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D67AE4899E87F4B5102F859B0FC02045/S0956796818000102a.pdf/div-class-title-push-versus-pull-based-loop-fusion-in-query-engines-div.pdf"},"jfp_1800010a (cambridge.org)"),")\uff09\uff0cPipeline\u6267\u884c\u5f15\u64ce\u57fa\u4e8e\u591a\u6838CPU\u7684\u7279\u70b9\uff0c\u91cd\u65b0\u8bbe\u8ba1\u7531\u6570\u636e\u9a71\u52a8\u7684\u6267\u884c\u5f15\u64ce\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image.png",src:t(32879).Z,width:"854",height:"302"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5c06\u4f20\u7edf Pull \u62c9\u53d6\u7684\u903b\u8f91\u9a71\u52a8\u7684\u6267\u884c\u6d41\u7a0b\u6539\u9020\u4e3a Push \u6a21\u578b\u7684\u6570\u636e\u9a71\u52a8\u7684\u6267\u884c\u5f15\u64ce"),(0,i.kt)("li",{parentName:"ol"},"\u963b\u585e\u64cd\u4f5c\u5f02\u6b65\u5316\uff0c\u51cf\u5c11\u4e86\u7ebf\u7a0b\u5207\u6362\uff0c\u7ebf\u7a0b\u963b\u585e\u5bfc\u81f4\u7684\u6267\u884c\u5f00\u9500\uff0c\u5bf9\u4e8e CPU \u7684\u5229\u7528\u66f4\u4e3a\u9ad8\u6548"),(0,i.kt)("li",{parentName:"ol"},"\u63a7\u5236\u4e86\u6267\u884c\u7ebf\u7a0b\u7684\u6570\u76ee\uff0c\u901a\u8fc7\u65f6\u95f4\u7247\u7684\u5207\u6362\u7684\u63a7\u5236\uff0c\u5728\u6df7\u5408\u8d1f\u8f7d\u7684\u573a\u666f\u4e2d\uff0c\u51cf\u5c11\u5927\u67e5\u8be2\u5bf9\u4e8e\u5c0f\u67e5\u8be2\u7684\u8d44\u6e90\u6324\u5360\u95ee\u9898")),(0,i.kt)("p",null,"\u4ece\u800c\u63d0\u9ad8\u4e86 CPU \u5728\u6df7\u5408\u8d1f\u8f7d SQL \u4e0a\u6267\u884c\u65f6\u7684\u6548\u7387\uff0c\u63d0\u5347\u4e86 SQL \u67e5\u8be2\u7684\u6027\u80fd\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("h3",{id:"\u8bbe\u7f6esession\u53d8\u91cf"},"\u8bbe\u7f6eSession\u53d8\u91cf"),(0,i.kt)("h4",{id:"enable_pipeline_engine"},"enable_pipeline_engine"),(0,i.kt)("p",null,"\u5c06session\u53d8\u91cf",(0,i.kt)("inlineCode",{parentName:"p"},"enable_pipeline_engine "),"\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219 BE \u5728\u8fdb\u884c\u67e5\u8be2\u6267\u884c\u65f6\u5c31\u4f1a\u9ed8\u8ba4\u5c06 SQL \u7684\u6267\u884c\u6a21\u578b\u8f6c\u53d8 Pipeline \u7684\u6267\u884c\u65b9\u5f0f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"set enable_pipeline_engine = true;\n")),(0,i.kt)("h4",{id:"parallel_fragment_exec_instance_num"},"parallel_fragment_exec_instance_num"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"parallel_fragment_exec_instance_num"),"\u4ee3\u8868\u4e86 SQL \u67e5\u8be2\u8fdb\u884c\u67e5\u8be2\u5e76\u53d1\u7684 Instance \u6570\u76ee\u3002Doris\u9ed8\u8ba4\u7684\u914d\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"1"),",\u8fd9\u4e2a\u914d\u7f6e\u4f1a\u5f71\u54cd\u975e Pipeline \u6267\u884c\u5f15\u64ce\u7684\u67e5\u8be2\u7ebf\u7a0b\u6570\u76ee\uff0c\u800c\u5728 Pipeline \u6267\u884c\u5f15\u64ce\u4e2d\u4e0d\u4f1a\u6709\u7ebf\u7a0b\u6570\u76ee\u81a8\u80c0\u7684\u95ee\u9898\u3002\u8fd9\u91cc\u63a8\u8350\u914d\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"16"),"\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u5b9e\u9645\u6839\u636e\u81ea\u5df1\u7684\u67e5\u8be2\u60c5\u51b5\u8fdb\u884c\u8c03\u6574\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"set parallel_fragment_exec_instance_num = 16;\n")),(0,i.kt)("p",null,"\u7279\u522b\u7684\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a0\uff0c \u5219\u5728Pipeline \u6267\u884c\u5f15\u64ce\u4e2d\u7684\u5e76\u53d1\u6570\u4f1a\u81ea\u52a8\u7684\u8bbe\u7f6e\u4e3acpu\u6838\u5fc3\u6570\u76ee\u7684\u4e00\u534a\u3002\u5e76\u4e14parallel_fragment_exec_instance_num\u4e0d\u80fd\u8bbe\u7f6e\u8d85\u8fc7fe.conf\u4e2d\u7684max_instance_num(\u9ed8\u8ba4128)"))}m.isMDXComponent=!0},32879:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/pipeline-execution-engine-2067b3a862de84a561eabefd41d48a56.png"}}]);