"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"date_format",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/date_format",id:"version-1.2/sql-manual/sql-functions/date-time-functions/date_format",title:"date_format",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/date_format.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date_format",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/date_format",draft:!1,tags:[],version:"1.2",frontMatter:{title:"date_format",language:"en"},sidebar:"docs",previous:{title:"date_trunc",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/date_trunc"},next:{title:"datediff",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/datediff"}},s={},u=[{value:"date_format",id:"date_format",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"date_format"},"date_format"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VARCHAR DATE' FORMAT (DATETIME DATE, VARCHAR Format)")),(0,r.kt)("p",null,"Convert the date type to a bit string according to the format type.\nCurrently supports a string with a maximum 128 bytes and returns NULL if the length of the return value exceeds 128"),(0,r.kt)("p",null,"The date parameter is the valid date. Format specifies the date/time output format."),(0,r.kt)("p",null,"The formats available are:"),(0,r.kt)("p",null,"% a | Abbreviation for Sunday Name"),(0,r.kt)("p",null,"% B | Abbreviated Monthly Name"),(0,r.kt)("p",null,"% C | Month, numerical value"),(0,r.kt)("p",null,"% D | Sky in the Moon with English Prefix"),(0,r.kt)("p",null,"% d | Monthly day, numerical value (00-31)"),(0,r.kt)("p",null,"% e | Monthly day, numerical value (0-31)"),(0,r.kt)("p",null,"% f | microseconds"),(0,r.kt)("p",null,"% H | Hours (00-23)"),(0,r.kt)("p",null,"% h | hour (01-12)"),(0,r.kt)("p",null,"% I | Hours (01-12)"),(0,r.kt)("p",null,"% I | min, numerical value (00-59)"),(0,r.kt)("p",null,"% J | Days of Year (001-366)"),(0,r.kt)("p",null,"% k | hours (0-23)"),(0,r.kt)("p",null,"% L | Hours (1-12)"),(0,r.kt)("p",null,"% M | Moon Name"),(0,r.kt)("p",null,"% m | month, numerical value (00-12)"),(0,r.kt)("p",null,"%p | AM or PM"),(0,r.kt)("p",null,"% R | Time, 12 - hour (hh: mm: SS AM or PM)"),(0,r.kt)("p",null,"% S | seconds (00-59)"),(0,r.kt)("p",null,"% s | seconds (00-59)"),(0,r.kt)("p",null,"% T | Time, 24 - hour (hh: mm: ss)"),(0,r.kt)("p",null,"% U | Week (00-53) Sunday is the first day of the week"),(0,r.kt)("p",null,"% U | Week (00 - 53) Monday is the first day of the week"),(0,r.kt)("p",null,"% V | Week (01-53) Sunday is the first day of the week, and% X is used."),(0,r.kt)("p",null,"% v | Week (01 - 53) Monday is the first day of the week, and% x is used"),(0,r.kt)("p",null,"% W | Sunday"),(0,r.kt)("p",null,"% w | Weekly day (0 = Sunday, 6 = Saturday)"),(0,r.kt)("p",null,"% X | Year, where Sunday is the first day of the week, 4 places, and% V use"),(0,r.kt)("p",null,"% X | year, of which Monday is the first day of the week, 4 places, and% V"),(0,r.kt)("p",null,"% Y | Year, 4"),(0,r.kt)("p",null,"% Y | Year, 2"),(0,r.kt)("p",null,"%%  | Represent %"),(0,r.kt)("p",null,"Also support 3 formats:"),(0,r.kt)("p",null,"yyyyMMdd"),(0,r.kt)("p",null,"yyyy-MM-dd"),(0,r.kt)("p",null,"yyyy-MM-dd HH:mm:ss"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nmysql> select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nmysql> select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nmysql> select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nmysql> select date_format('1999-01-01 00:00:00', '%X %V'); \n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DATE_FORMAT,DATE,FORMAT\n")))}c.isMDXComponent=!0}}]);