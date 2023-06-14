"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=a,b=p["".concat(o,".").concat(y)]||p[y]||d[y]||i;return n?r.createElement(b,u(u({ref:t},s),{},{components:n})):r.createElement(b,u({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=y;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},40694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Kyuubi",language:"zh-CN"},u=void 0,l={unversionedId:"ecosystem/kyuubi",id:"version-1.2/ecosystem/kyuubi",title:"Kyuubi",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/ecosystem/kyuubi.md",sourceDirName:"ecosystem",slug:"/ecosystem/kyuubi",permalink:"/zh-CN/docs/1.2/ecosystem/kyuubi",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Kyuubi",language:"zh-CN"},sidebar:"docs",previous:{title:"Seatunnel Doris Sink",permalink:"/zh-CN/docs/1.2/ecosystem/seatunnel"},next:{title:"Mysql to Doris",permalink:"/zh-CN/docs/1.2/ecosystem/mysql-to-doris"}},o={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u4e0b\u8f7d Apache Kyuubi",id:"\u4e0b\u8f7d-apache-kyuubi",level:2},{value:"\u914d\u7f6e\u65b9\u6cd5",id:"\u914d\u7f6e\u65b9\u6cd5",level:2},{value:"\u4e0b\u8f7d Apache Kyuubi",id:"\u4e0b\u8f7d-apache-kyuubi-1",level:3},{value:"\u914d\u7f6eDoris\u4f5c\u4e3aKyuubi\u6570\u636e\u6e90",id:"\u914d\u7f6edoris\u4f5c\u4e3akyuubi\u6570\u636e\u6e90",level:3},{value:"\u6dfb\u52a0MySQL\u9a71\u52a8",id:"\u6dfb\u52a0mysql\u9a71\u52a8",level:3},{value:"\u542f\u52a8 Kyuubi \u670d\u52a1",id:"\u542f\u52a8-kyuubi-\u670d\u52a1",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5efa\u7acb\u8fde\u63a5",id:"\u5efa\u7acb\u8fde\u63a5",level:3},{value:"\u6267\u884c\u67e5\u8be2",id:"\u6267\u884c\u67e5\u8be2",level:3}],s={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u901a\u8fc7-kyuubi-\u8fde\u63a5-doris"},"\u901a\u8fc7 Kyuubi \u8fde\u63a5 Doris"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kyuubi.apache.org/"},"Apache Kyuubi")," \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u548c\u591a\u79df\u6237\u7f51\u5173\uff0c\u7528\u4e8e\u5728 Lakehouse \u4e0a\u63d0\u4f9b Serverless\nSQL\uff0c\u53ef\u8fde\u63a5\u5305\u62ecSpark\u3001Flink\u3001Hive\u3001JDBC\u7b49\u5f15\u64ce\uff0c\u5e76\u5bf9\u5916\u63d0\u4f9bThrift\u3001Trino\u7b49\u63a5\u53e3\u534f\u8bae\u4f9b\u7075\u6d3b\u5bf9\u63a5\u3002\n\u5176\u4e2dApache Kyuubi\u5b9e\u73b0\u4e86JDBC Engine\u5e76\u652f\u6301Doris\u65b9\u8a00\uff0c\u5e76\u53ef\u7528\u4e8e\u5bf9\u63a5Doris\u4f5c\u4e3a\u6570\u636e\u6e90\u3002\nApache Kyuubi\u53ef\u63d0\u4f9b\u9ad8\u53ef\u7528\u3001\u670d\u52a1\u53d1\u73b0\u3001\u79df\u6237\u9694\u79bb\u3001\u7edf\u4e00\u8ba4\u8bc1\u3001\u751f\u547d\u5468\u671f\u7ba1\u7406\u7b49\u4e00\u7cfb\u5217\u7279\u6027\u3002"),(0,a.kt)("h2",{id:"\u4e0b\u8f7d-apache-kyuubi"},"\u4e0b\u8f7d Apache Kyuubi"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u65b9\u6cd5"},"\u914d\u7f6e\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u4e0b\u8f7d-apache-kyuubi-1"},"\u4e0b\u8f7d Apache Kyuubi"),(0,a.kt)("p",null,"\u4ece\u5b98\u7f51\u4e0b\u8f7dApache Kyuubi 1.6.0\u6216\u4ee5\u4e0a\u7248\u672c\u7684\u5b89\u88c5\u5305\u540e\u89e3\u538b\u3002"),(0,a.kt)("p",null,"Apache Kyuubi \u4e0b\u8f7d\u5730\u5740\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://kyuubi.apache.org/zh/releases.html"},"https://kyuubi.apache.org/zh/releases.html")),(0,a.kt)("h3",{id:"\u914d\u7f6edoris\u4f5c\u4e3akyuubi\u6570\u636e\u6e90"},"\u914d\u7f6eDoris\u4f5c\u4e3aKyuubi\u6570\u636e\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"$KYUUBI_HOME/conf/kyuubi-defaults.conf"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"kyuubi.engine.type=jdbc\nkyuubi.engine.jdbc.type=doris\nkyuubi.engine.jdbc.driver.class=com.mysql.cj.jdbc.Driver\nkyuubi.engine.jdbc.connection.url=jdbc:mysql://xxx:xxx\nkyuubi.engine.jdbc.connection.user=***\nkyuubi.engine.jdbc.connection.password=***\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kyuubi.engine.type"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u7c7b\u578b\u3002\u8bf7\u4f7f\u7528jdbc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.type"),(0,a.kt)("td",{parentName:"tr",align:null},"JDBC \u670d\u52a1\u7c7b\u578b\u3002\u8fd9\u91cc\u8bf7\u6307\u5b9a\u4e3adoris")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.driver.class"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5 JDBC \u670d\u52a1\u4f7f\u7528\u7684\u9a71\u52a8\u7c7b\u540d\u3002\u8bf7\u4f7f\u7528com.mysql.cj.jdbc.Driver")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.connection.url"),(0,a.kt)("td",{parentName:"tr",align:null},"JDBC \u670d\u52a1\u8fde\u63a5\u3002\u8fd9\u91cc\u8bf7\u6307\u5b9a Doris FE \u4e0a\u7684 mysql server \u8fde\u63a5\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.connection.user"),(0,a.kt)("td",{parentName:"tr",align:null},"JDBC \u670d\u52a1\u7528\u6237\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.connection.password"),(0,a.kt)("td",{parentName:"tr",align:null},"JDBC \u670d\u52a1\u5bc6\u7801")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u76f8\u5173\u914d\u7f6e\u53c2\u8003 ",(0,a.kt)("a",{parentName:"li",href:"https://kyuubi.readthedocs.io/en/master/deployment/settings.html"},"Apache Kyuubi\u914d\u7f6e\u8bf4\u660e")," \u3002")),(0,a.kt)("h3",{id:"\u6dfb\u52a0mysql\u9a71\u52a8"},"\u6dfb\u52a0MySQL\u9a71\u52a8"),(0,a.kt)("p",null,"\u6dfb\u52a0 Mysql JDB C\u9a71\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql-connector-j-8.X.X.jar")," \u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"$KYUUBI_HOME/externals/engines/jdbc")," \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h3",{id:"\u542f\u52a8-kyuubi-\u670d\u52a1"},"\u542f\u52a8 Kyuubi \u670d\u52a1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$KYUUBI_HOME/bin/kyuubi start"),"\n\u542f\u52a8\u540e\uff0cKyuubi\u9ed8\u8ba4\u76d1\u542c10009\u7aef\u53e3\u63d0\u4f9bThrift\u534f\u8bae\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4f8b\u5b50\u5c55\u793a\u901a\u8fc7Apache Kyuubi\u7684beeline\u5de5\u5177\u7ecfThrift\u534f\u8bae\u67e5\u8be2Doris\u3002"),(0,a.kt)("h3",{id:"\u5efa\u7acb\u8fde\u63a5"},"\u5efa\u7acb\u8fde\u63a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ $KYUUBI_HOME/bin/beeline -u "jdbc:hive2://xxxx:10009/"\n')),(0,a.kt)("h3",{id:"\u6267\u884c\u67e5\u8be2"},"\u6267\u884c\u67e5\u8be2"),(0,a.kt)("p",null,"\u6267\u884c\u67e5\u8be2\u8bed\u53e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"select * from demo.expamle_tbl;")," \u5e76\u5f97\u5230\u7ed3\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"0: jdbc:hive2://xxxx:10009/> select * from demo.example_tbl;\n\n2023-03-07 09:29:14.771 INFO org.apache.kyuubi.operation.ExecuteStatement: Processing anonymous's query[bdc59dd0-ceea-4c02-8c3a-23424323f5db]: PENDING_STATE -> RUNNING_STATE, statement:\nselect * from demo.example_tbl\n2023-03-07 09:29:14.786 INFO org.apache.kyuubi.operation.ExecuteStatement: Query[bdc59dd0-ceea-4c02-8c3a-23424323f5db] in FINISHED_STATE\n2023-03-07 09:29:14.787 INFO org.apache.kyuubi.operation.ExecuteStatement: Processing anonymous's query[bdc59dd0-ceea-4c02-8c3a-23424323f5db]: RUNNING_STATE -> FINISHED_STATE, time taken: 0.015 seconds\n+----------+-------------+-------+------+------+------------------------+-------+-----------------+-----------------+\n| user_id  |    date     | city  | age  | sex  |    last_visit_date     | cost  | max_dwell_time  | min_dwell_time  |\n+----------+-------------+-------+------+------+------------------------+-------+-----------------+-----------------+\n| 10000    | 2017-10-01  | \u5317\u4eac   | 20   | 0    | 2017-10-01 07:00:00.0  | 70    | 10              | 2               |\n| 10001    | 2017-10-01  | \u5317\u4eac   | 30   | 1    | 2017-10-01 17:05:45.0  | 4     | 22              | 22              |\n| 10002    | 2017-10-02  | \u4e0a\u6d77   | 20   | 1    | 2017-10-02 12:59:12.0  | 400   | 5               | 5               |\n| 10003    | 2017-10-02  | \u5e7f\u5dde   | 32   | 0    | 2017-10-02 11:20:00.0  | 60    | 11              | 11              |\n| 10004    | 2017-10-01  | \u6df1\u5733   | 35   | 0    | 2017-10-01 10:00:15.0  | 200   | 3               | 3               |\n| 10004    | 2017-10-03  | \u6df1\u5733   | 35   | 0    | 2017-10-03 10:20:22.0  | 22    | 6               | 6               |\n+----------+-------------+-------+------+------+------------------------+-------+-----------------+-----------------+\n6 rows selected (0.068 seconds)\n")))}d.isMDXComponent=!0}}]);