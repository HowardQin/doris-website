"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[11933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Time zone",language:"en"},o=void 0,l={unversionedId:"advanced/time-zone",id:"advanced/time-zone",title:"Time zone",description:"\x3c!--",source:"@site/docs/advanced/time-zone.md",sourceDirName:"advanced",slug:"/advanced/time-zone",permalink:"/docs/dev/advanced/time-zone",draft:!1,tags:[],version:"current",frontMatter:{title:"Time zone",language:"en"},sidebar:"docs",previous:{title:"Variable",permalink:"/docs/dev/advanced/variables"},next:{title:"File Manager",permalink:"/docs/dev/advanced/small-file-mgr"}},p={},s=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Specific operations",id:"specific-operations",level:2},{value:"Impact of time zone",id:"impact-of-time-zone",level:3},{value:"Restrictions",id:"restrictions",level:2},{value:"Time zone format list",id:"time-zone-format-list",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"time-zone"},"Time zone"),(0,i.kt)("p",null,"Doris supports multiple time zone settings"),(0,i.kt)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access."),(0,i.kt)("li",{parentName:"ul"},"BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")),(0,i.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,i.kt)("p",null,"There are multiple time zone related parameters in Doris"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"system_time_zone"),":")),(0,i.kt)("p",null,"When the server starts, it will be set automatically according to the time zone set by the machine, which cannot be modified after setting."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time_zone"),":")),(0,i.kt)("p",null,"Server current time zone, set it at session level or global level."),(0,i.kt)("h2",{id:"specific-operations"},"Specific operations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SHOW VARIABLES LIKE '% time_zone%'")),(0,i.kt)("p",{parentName:"li"},"View the current time zone related configuration")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SET time_zone = 'Asia/Shanghai'")),(0,i.kt)("p",{parentName:"li"},"This command can set the session level time zone, which will fail after disconnection.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SET global time_zone = 'Asia/Shanghai'")),(0,i.kt)("p",{parentName:"li"},"This command can set time zone parameters at the global level. The FE will persist the parameters and will not fail when the connection is disconnected."))),(0,i.kt)("h3",{id:"impact-of-time-zone"},"Impact of time zone"),(0,i.kt)("p",null,"Time zone setting affects the display and storage of time zone sensitive values."),(0,i.kt)("p",null,"It includes the values displayed by time functions such as ",(0,i.kt)("inlineCode",{parentName:"p"},"NOW()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"CURTIME()"),", as well as the time values in ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW LOAD")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW BACKENDS")," statements."),(0,i.kt)("p",null,"However, it does not affect the ",(0,i.kt)("inlineCode",{parentName:"p"},"LESS THAN VALUE")," of the time-type partition column in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement, nor does it affect the display of values stored as ",(0,i.kt)("inlineCode",{parentName:"p"},"DATE/DATETIME")," type."),(0,i.kt)("p",null,"Functions affected by time zone:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FROM_UNIXTIME"),": Given a UTC timestamp, return the date and time of the specified time zone, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM_UNIXTIME(0)"),", return the CST time zone: ",(0,i.kt)("inlineCode",{parentName:"p"},"1970-01-08:00"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"UNIX_TIMESTAMP"),": Given a specified time zone date and time, return UTC timestamp, such as CST time zone ",(0,i.kt)("inlineCode",{parentName:"p"},"UNIX_TIMESTAMP('1970-01 08:00:00')"),", return ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CURTIME"),": Returns the datetime of specified time zone.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NOW"),": Returns the specified date and time of specified time zone.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CONVERT_TZ"),": Converts a date and time from one specified time zone to another."))),(0,i.kt)("h2",{id:"restrictions"},"Restrictions"),(0,i.kt)("p",null,"Time zone values can be given in several formats, case-insensitive:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A string representing UTC offset, such as '+10:00' or '-6:00'.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Standard time zone formats, such as "Asia/Shanghai", "America/Los_Angeles"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Abbreviated time zone formats such as MET and CTT are not supported. Because the abbreviated time zone is ambiguous in different scenarios, it is not recommended to use it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'In order to be compatible with Doris and support CST abbreviated time zone, CST will be internally transferred to "Asia/Shanghai", which is Chinese standard time zone.'))),(0,i.kt)("h2",{id:"time-zone-format-list"},"Time zone format list"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"List of TZ database time zones")))}d.isMDXComponent=!0}}]);