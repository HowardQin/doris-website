"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[15936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,u=c["".concat(p,".").concat(d)]||c[d]||k[d]||l;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"ALTER-ROUTINE-LOAD",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",title:"ALTER-ROUTINE-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ALTER-ROUTINE-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"CLEAN-LABEL",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL"},next:{title:"CANCEL-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD"}},p={},m=[{value:"ALTER-ROUTINE-LOAD",id:"alter-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:m},c="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"alter-routine-load"},"ALTER-ROUTINE-LOAD"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"ALTER ROUTINE LOAD"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u6cd5\u7528\u4e8e\u4fee\u6539\u5df2\u7ecf\u521b\u5efa\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.kt)("p",null,"\u53ea\u80fd\u4fee\u6539\u5904\u4e8e PAUSED \u72b6\u6001\u7684\u4f5c\u4e1a\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER ROUTINE LOAD FOR [db.]job_name\n[job_properties]\nFROM data_source\n[data_source_properties]\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[db.]job_name")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u8981\u4fee\u6539\u7684\u4f5c\u4e1a\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tbl_name")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u9700\u8981\u5bfc\u5165\u7684\u8868\u7684\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"job_properties")),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u9700\u8981\u4fee\u6539\u7684\u4f5c\u4e1a\u53c2\u6570\u3002\u76ee\u524d\u4ec5\u652f\u6301\u5982\u4e0b\u53c2\u6570\u7684\u4fee\u6539\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"desired_concurrent_number")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"max_error_number")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"max_batch_interval")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"max_batch_rows")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"max_batch_size")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"jsonpaths")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"json_root")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"strip_outer_array")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"strict_mode")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"timezone")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"num_as_string")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"fuzzy_parse"))))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data_source")),(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u6e90\u7684\u7c7b\u578b\u3002\u5f53\u524d\u652f\u6301\uff1a"),(0,r.kt)("p",{parentName:"li"},"KAFKA")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data_source_properties")),(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u6e90\u7684\u76f8\u5173\u5c5e\u6027\u3002\u76ee\u524d\u4ec5\u652f\u6301\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_partitions")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_offsets")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_broker_list")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_topic")),(0,r.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49 property\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"property.group.id"))),(0,r.kt)("p",{parentName:"li"},"\u6ce8\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka_partitions")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka_offsets")," \u7528\u4e8e\u4fee\u6539\u5f85\u6d88\u8d39\u7684 kafka partition \u7684offset\uff0c\u4ec5\u80fd\u4fee\u6539\u5f53\u524d\u5df2\u7ecf\u6d88\u8d39\u7684 partition\u3002\u4e0d\u80fd\u65b0\u589e partition\u3002")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"desired_concurrent_number")," \u4fee\u6539\u4e3a 1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "1"\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"desired_concurrent_number")," \u4fee\u6539\u4e3a 10\uff0c\u4fee\u6539 partition \u7684offset\uff0c\u4fee\u6539 group id\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "10"\n)\nFROM kafka\n(\n    "kafka_partitions" = "0, 1, 2",\n    "kafka_offsets" = "100, 200, 100",\n    "property.group.id" = "new_group"\n);\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ALTER, ROUTINE, LOAD\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}k.isMDXComponent=!0}}]);