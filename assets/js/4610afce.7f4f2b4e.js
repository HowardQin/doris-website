"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[59655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Index Overview",language:"en"},l=void 0,d={unversionedId:"data-table/index/prefix-index",id:"data-table/index/prefix-index",title:"Index Overview",description:"\x3c!--",source:"@site/docs/data-table/index/prefix-index.md",sourceDirName:"data-table/index",slug:"/data-table/index/prefix-index",permalink:"/docs/dev/data-table/index/prefix-index",draft:!1,tags:[],version:"current",frontMatter:{title:"Index Overview",language:"en"},sidebar:"docs",previous:{title:"Dynamic schema table",permalink:"/docs/dev/data-table/dynamic-schema-table"},next:{title:"Inverted index",permalink:"/docs/dev/data-table/index/inverted-index"}},o={},p=[{value:"Prefix Index",id:"prefix-index",level:2},{value:"Example",id:"example",level:2},{value:"Adjust prefix index by ROLLUP",id:"adjust-prefix-index-by-rollup",level:2}],s={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"index-overview"},"Index Overview"),(0,r.kt)("p",null,"Indexes are used to help quickly filter or find data."),(0,r.kt)("p",null,"Doris currently supports two main types of indexes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"built-in smart indexes, including prefix indexes and ZoneMap indexes."),(0,r.kt)("li",{parentName:"ol"},"User-created secondary indexes, including the ",(0,r.kt)("a",{parentName:"li",href:"/docs/dev/data-table/index/inverted-index"},"inverted index"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/dev/data-table/index/bloomfilter"},"bloomfilter index"),"\u3001",(0,r.kt)("a",{parentName:"li",href:"/docs/dev/data-table/index/ngram-bloomfilter-index"},"ngram bloomfilter index")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/dev/data-table/index/bitmap-index"},"bitmap index"),".")),(0,r.kt)("p",null,"The ZoneMap index is the index information automatically maintained for each column in the column storage format, including Min/Max, the number of Null values, and so on. This index is transparent to the user."),(0,r.kt)("h2",{id:"prefix-index"},"Prefix Index"),(0,r.kt)("p",null,"Unlike traditional database designs, Doris does not support creating indexes on arbitrary columns. an OLAP database with an MPP architecture like Doris is typically designed to handle large amounts of data by increasing concurrency."),(0,r.kt)("p",null,"Essentially, Doris data is stored in a data structure similar to an SSTable (Sorted String Table). This structure is an ordered data structure that can be stored sorted by specified columns. On this data structure, it will be very efficient to perform lookups with sorted columns as a condition."),(0,r.kt)("p",null,"In the Aggregate, Unique and Duplicate data models. The underlying data storage is sorted and stored according to the columns specified in the respective table building statements, AGGREGATE KEY, UNIQUE KEY and DUPLICATE KEY."),(0,r.kt)("p",null,"The prefix index, which is based on sorting, is an indexing method to query data quickly based on a given prefix column."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"We use the first 36 bytes of a row of data as the prefix index of this row of data. Prefix indexes are simply truncated when a VARCHAR type is encountered. We give an example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The prefix index of the following table structure is user_id(8 Bytes) + age(4 Bytes) + message(prefix 20 Bytes)."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_id"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"age"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR(100)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_dwell_time"),(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min_dwell_time"),(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The prefix index of the following table structure is user_name(20 Bytes). Even if it does not reach 36 bytes, because VARCHAR is encountered, it is directly truncated and will not continue further."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_name"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR(20)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"age"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR(100)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_dwell_time"),(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min_dwell_time"),(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME")))))),(0,r.kt)("p",null,"When our query condition is the prefix of the prefix index, the query speed can be greatly accelerated. For example, in the first example, we execute the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE user_id=1829239 and age=20\uff1b\n")),(0,r.kt)("p",null,"This query will be much more efficient than the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE age=20\uff1b\n")),(0,r.kt)("p",null,"Therefore, when building a table, choosing the correct column order can greatly improve query efficiency."),(0,r.kt)("h2",{id:"adjust-prefix-index-by-rollup"},"Adjust prefix index by ROLLUP"),(0,r.kt)("p",null,"Because the column order has been specified when the table is created, there is only one prefix index for a table. This may not be efficient for queries that use other columns that cannot hit the prefix index as conditions. Therefore, we can artificially adjust the column order by creating a ROLLUP. For details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/data-table/hit-the-rollup"},"ROLLUP"),"."))}c.isMDXComponent=!0}}]);