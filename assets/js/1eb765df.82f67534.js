"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71104],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),c=r,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},45242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(87462),r=(t(67294),t(3905));const a={title:"time_round",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/time_round",id:"version-1.2/sql-manual/sql-functions/date-time-functions/time_round",title:"time_round",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/time_round.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/time_round",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/time_round",draft:!1,tags:[],version:"1.2",frontMatter:{title:"time_round",language:"en"},sidebar:"docs",previous:{title:"str_to_date",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/str_to_date"},next:{title:"timediff",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/timediff"}},p={},s=[{value:"time_round",id:"time_round",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"time_round"},"time_round"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DATETIME TIME_ROUND(DATETIME expr)\nDATETIME TIME_ROUND(DATETIME expr, INT period)\nDATETIME TIME_ROUND(DATETIME expr, DATETIME origin)\nDATETIME TIME_ROUND(DATETIME expr, INT period, DATETIME origin)\n")),(0,r.kt)("p",null,"The function name ",(0,r.kt)("inlineCode",{parentName:"p"},"TIME_ROUND")," consists of two parts, Each part consists of the following optional values."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TIME"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"SECOND"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MINUTE"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HOUR"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DAY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"WEEK"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MONTH"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"YEAR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ROUND"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"FLOOR"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CEIL"))),(0,r.kt)("p",null,"Returns the upper/lower bound of ",(0,r.kt)("inlineCode",{parentName:"p"},"expr"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"period")," specifies how many ",(0,r.kt)("inlineCode",{parentName:"li"},"TIME")," units, the default is ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin")," specifies the start time of the period, the default is ",(0,r.kt)("inlineCode",{parentName:"li"},"1970-01-01T00:00:00"),", the start time of ",(0,r.kt)("inlineCode",{parentName:"li"},"WEEK")," is Sunday, which is ",(0,r.kt)("inlineCode",{parentName:"li"},"1970-01-04T00:00:00"),". Could be larger than ",(0,r.kt)("inlineCode",{parentName:"li"},"expr"),"."),(0,r.kt)("li",{parentName:"ul"},"Please try to choose common ",(0,r.kt)("inlineCode",{parentName:"li"},"period"),", such as 3 ",(0,r.kt)("inlineCode",{parentName:"li"},"MONTH"),", 90 ",(0,r.kt)("inlineCode",{parentName:"li"},"MINUTE"),". If you set a uncommon ",(0,r.kt)("inlineCode",{parentName:"li"},"period"),", please also specify ",(0,r.kt)("inlineCode",{parentName:"li"},"origin"),".")),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nMySQL> SELECT YEAR_FLOOR('20200202000000');\n+------------------------------+\n| year_floor('20200202000000') |\n+------------------------------+\n| 2020-01-01 00:00:00          |\n+------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3); --quarter\n+--------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3) |\n+--------------------------------------------------------+\n| 2020-04-01 00:00:00                                    |\n+--------------------------------------------------------+\n\n\nMySQL> SELECT WEEK_CEIL('2020-02-02 13:09:20', '2020-01-06'); --monday\n+---------------------------------------------------------+\n| week_ceil('2020-02-02 13:09:20', '2020-01-06 00:00:00') |\n+---------------------------------------------------------+\n| 2020-02-03 00:00:00                                     |\n+---------------------------------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)); --next rent day\n+-------------------------------------------------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)) |\n+-------------------------------------------------------------------------------------------------+\n| 2020-04-09 00:00:00                                                                             |\n+-------------------------------------------------------------------------------------------------+\n\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TIME_ROUND\n")))}m.isMDXComponent=!0}}]);