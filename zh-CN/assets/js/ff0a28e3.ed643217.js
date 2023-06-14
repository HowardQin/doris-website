"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2304],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>E});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(t),s=i,E=m["".concat(p,".").concat(s)]||m[s]||c[s]||a;return t?r.createElement(E,l(l({ref:n},d),{},{components:t})):r.createElement(E,l({ref:n},d))}));function E(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},50427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const a={title:"time_round",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/time_round",id:"sql-manual/sql-functions/date-time-functions/time_round",title:"time_round",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/time_round.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/time_round",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/time_round",draft:!1,tags:[],version:"current",frontMatter:{title:"time_round",language:"zh-CN"},sidebar:"docs",previous:{title:"str_to_date",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/str_to_date"},next:{title:"timediff",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/timediff"}},p={},u=[{value:"time_round",id:"time_round",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:u},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"time_round"},"time_round"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DATETIME TIME_ROUND(DATETIME expr)\nDATETIME TIME_ROUND(DATETIME expr, INT period)\nDATETIME TIME_ROUND(DATETIME expr, DATETIME origin)\nDATETIME TIME_ROUND(DATETIME expr, INT period, DATETIME origin)\n")),(0,i.kt)("p",null,"\u51fd\u6570\u540d ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME_ROUND")," \u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff0c\u6bcf\u90e8\u5206\u7531\u4ee5\u4e0b\u53ef\u9009\u503c\u7ec4\u6210"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TIME"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SECOND"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MINUTE"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"HOUR"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DAY"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"WEEK"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MONTH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"YEAR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ROUND"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"FLOOR"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"CEIL"))),(0,i.kt)("p",null,"\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," \u7684\u4e0a/\u4e0b\u754c\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"period")," \u6307\u5b9a\u6bcf\u4e2a\u5468\u671f\u6709\u591a\u5c11\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"TIME")," \u5355\u4f4d\u7ec4\u6210\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin")," \u6307\u5b9a\u5468\u671f\u7684\u5f00\u59cb\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"1970-01-01T00:00:00"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"WEEK")," \u7684\u9ed8\u8ba4\u5f00\u59cb\u65f6\u95f4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"1970-01-04T00:00:00"),"\uff0c\u5373\u5468\u65e5\u3002\u53ef\u4ee5\u6bd4 ",(0,i.kt)("inlineCode",{parentName:"li"},"expr")," \u5927\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u5c3d\u91cf\u9009\u62e9\u5e38\u89c1 ",(0,i.kt)("inlineCode",{parentName:"li"},"period"),"\uff0c\u5982 3 ",(0,i.kt)("inlineCode",{parentName:"li"},"MONTH"),"\uff0c90 ",(0,i.kt)("inlineCode",{parentName:"li"},"MINUTE")," \u7b49\uff0c\u5982\u8bbe\u7f6e\u4e86\u975e\u5e38\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"period"),"\uff0c\u8bf7\u540c\u65f6\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"li"},"origin"),"\u3002")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nMySQL> SELECT YEAR_FLOOR('20200202000000');\n+------------------------------+\n| year_floor('20200202000000') |\n+------------------------------+\n| 2020-01-01 00:00:00          |\n+------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3); --quarter\n+--------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3) |\n+--------------------------------------------------------+\n| 2020-04-01 00:00:00                                    |\n+--------------------------------------------------------+\n\n\nMySQL> SELECT WEEK_CEIL('2020-02-02 13:09:20', '2020-01-06'); --monday\n+---------------------------------------------------------+\n| week_ceil('2020-02-02 13:09:20', '2020-01-06 00:00:00') |\n+---------------------------------------------------------+\n| 2020-02-03 00:00:00                                     |\n+---------------------------------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)); --next rent day\n+-------------------------------------------------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)) |\n+-------------------------------------------------------------------------------------------------+\n| 2020-04-09 00:00:00                                                                             |\n+-------------------------------------------------------------------------------------------------+\n\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TIME_ROUND\n")))}c.isMDXComponent=!0}}]);