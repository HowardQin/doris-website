"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[34864],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=m(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(k,o(o({ref:e},s),{},{components:a})):n.createElement(k,o({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},66283:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"import strict mode",language:"en"},o=void 0,i={unversionedId:"data-operate/import/import-scenes/load-strict-mode",id:"version-1.2/data-operate/import/import-scenes/load-strict-mode",title:"import strict mode",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/data-operate/import/import-scenes/load-strict-mode.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/load-strict-mode",permalink:"/docs/1.2/data-operate/import/import-scenes/load-strict-mode",draft:!1,tags:[],version:"1.2",frontMatter:{title:"import strict mode",language:"en"},sidebar:"docs",previous:{title:"Data transformation, column mapping and filtering",permalink:"/docs/1.2/data-operate/import/import-scenes/load-data-convert"},next:{title:"Binlog Load",permalink:"/docs/1.2/data-operate/import/import-way/binlog-load-manual"}},p={},m=[{value:"How to set",id:"how-to-set",level:2},{value:"The role of strict mode",id:"the-role-of-strict-mode",level:2}],s={toc:m},d="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"import-strict-mode"},"import strict mode"),(0,r.kt)("p",null,"Strict mode (strict_mode) is configured as a parameter in the import operation. This parameter affects the import behavior of certain values and the final imported data."),(0,r.kt)("p",null,"This document mainly explains how to set strict mode, and the impact of strict mode."),(0,r.kt)("h2",{id:"how-to-set"},"How to set"),(0,r.kt)("p",null,"Strict mode is all False by default, i.e. off."),(0,r.kt)("p",null,"Different import methods set strict mode in different ways."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"BROKER LOAD")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label1\n(\n    DATA INFILE("bos://my_bucket/input/file.txt")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY ","\n)\nWITH BROKER bos\n(\n    "bos_endpoint" = "http://bj.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey"="yyyyyyyyyyyyyyyyyyyyyyyy"\n)\nPROPERTIES\n(\n    "strict_mode" = "true"\n)\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"STREAM LOAD")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd \\\n-H "strict_mode: true" \\\n-T 1.txt \\\nhttp://host:port/api/example_db/my_table/_stream_load\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test_job ON my_table\nPROPERTIES\n(\n    "strict_mode" = "true"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic"\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"},"INSERT")),(0,r.kt)("p",{parentName:"li"},"Set via ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/advanced/variables"},"session variables"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET enable_insert_strict = true;\nINSERT INTO my_table ...;\n")))),(0,r.kt)("h2",{id:"the-role-of-strict-mode"},"The role of strict mode"),(0,r.kt)("p",null,"Strict mode means strict filtering of column type conversions during import."),(0,r.kt)("p",null,"The strict filtering strategy is as follows:"),(0,r.kt)("p",null,"For column type conversion, if strict mode is turned on, the wrong data will be filtered. The wrong data here refers to: the original data is not ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", but the result is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," after column type conversion."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"column type conversion")," mentioned here does not include the ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value calculated by the function."),(0,r.kt)("p",null,"For an imported column type that contains range restrictions, if the original data can pass the type conversion normally, but cannot pass the range restrictions, strict mode will not affect it. For example: if the type is ",(0,r.kt)("inlineCode",{parentName:"p"},"decimal(1,0)")," and the original data is 10, it belongs to the range that can be converted by type but is not within the scope of the column declaration. This kind of data strict has no effect on it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Take the column type as TinyInt as an example:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Primitive data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Primitive data example"),(0,r.kt)("th",{parentName:"tr",align:null},"Converted value to TinyInt"),(0,r.kt)("th",{parentName:"tr",align:null},"Strict mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"\\N"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"ON or OFF"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Non-null value"),(0,r.kt)("td",{parentName:"tr",align:null},'"abc" or 2000'),(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"On"),(0,r.kt)("td",{parentName:"tr",align:null},"Illegal value (filtered)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"non-null value"),(0,r.kt)("td",{parentName:"tr",align:null},'"abc"'),(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"off"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"non-null value"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"on or off"),(0,r.kt)("td",{parentName:"tr",align:null},"import correctly")))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Description:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Columns in the table allow to import null values"),(0,r.kt)("li",{parentName:"ol"},"After ",(0,r.kt)("inlineCode",{parentName:"li"},"abc")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"2000")," are converted to TinyInt, they will become NULL due to type or precision issues. When strict mode is on, this data will be filtered. And if it is closed, ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," will be imported.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Take the column type as Decimal(1,0) as an example"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Primitive Data Types"),(0,r.kt)("th",{parentName:"tr",align:null},"Examples of Primitive Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Converted to Decimal"),(0,r.kt)("th",{parentName:"tr",align:null},"Strict Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Null"),(0,r.kt)("td",{parentName:"tr",align:null},"\\N"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"On or Off"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"non-null value"),(0,r.kt)("td",{parentName:"tr",align:null},"aaa"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"on"),(0,r.kt)("td",{parentName:"tr",align:null},"illegal value (filtered)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"non-null value"),(0,r.kt)("td",{parentName:"tr",align:null},"aaa"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"off"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"non-null value"),(0,r.kt)("td",{parentName:"tr",align:null},"1 or 10"),(0,r.kt)("td",{parentName:"tr",align:null},"1 or 10"),(0,r.kt)("td",{parentName:"tr",align:null},"on or off"),(0,r.kt)("td",{parentName:"tr",align:null},"import correctly")))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Description:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Columns in the table allow to import null values"),(0,r.kt)("li",{parentName:"ol"},"After ",(0,r.kt)("inlineCode",{parentName:"li"},"abc")," is converted to Decimal, it will become NULL due to type problem. When strict mode is on, this data will be filtered. And if it is closed, ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," will be imported."),(0,r.kt)("li",{parentName:"ol"},"Although ",(0,r.kt)("inlineCode",{parentName:"li"},"10")," is an out-of-range value, because its type conforms to the requirements of decimal, strict mode does not affect it. ",(0,r.kt)("inlineCode",{parentName:"li"},"10")," will eventually be filtered in other import processing flows. But not filtered by strict mode."))))))}c.isMDXComponent=!0}}]);