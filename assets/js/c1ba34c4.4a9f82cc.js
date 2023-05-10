"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[65451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,u[1]=l;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"TOPN",language:"en"},u=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/histogram",id:"sql-manual/sql-functions/aggregate-functions/histogram",title:"TOPN",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/aggregate-functions/histogram.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/histogram",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/histogram",draft:!1,tags:[],version:"current",frontMatter:{title:"TOPN",language:"en"}},i={},s=[{value:"HISTOGRAM",id:"histogram",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"histogram"},"HISTOGRAM"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"histogram(expr[, INT num_buckets])")),(0,o.kt)("p",null,'The histogram function is used to describe the distribution of the data. It uses an "equal height" bucking strategy, and divides the data into buckets according to the value of the data. It describes each bucket with some simple data, such as the number of values that fall in the bucket. It is mainly used by the optimizer to estimate the range query.'),(0,o.kt)("p",null,"The result of the function returns an empty or Json string."),(0,o.kt)("p",null,"Parameter description\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"num_buckets\uff1aOptional. Limit the number of histogram buckets. The default value is 128.")),(0,o.kt)("p",null,"Alias function: ",(0,o.kt)("inlineCode",{parentName:"p"},"hist(expr[, INT num_buckets])")),(0,o.kt)("h3",{id:"notice"},"notice"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only supported in vectorized engine")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'MySQL [test]> SELECT histogram(c_float) FROM histogram_test;\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| histogram(`c_float`)                                                                                                                |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| {"num_buckets":3,"buckets":[{"lower":"0.1","upper":"0.1","count":1,"pre_sum":0,"ndv":1},...]} |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n\nMySQL [test]> SELECT histogram(c_string, 2) FROM histogram_test;\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| histogram(`c_string`)                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| {"num_buckets":2,"buckets":[{"lower":"str1","upper":"str7","count":4,"pre_sum":0,"ndv":3},...]} |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n')),(0,o.kt)("p",null,"Query result description\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "num_buckets": 3, \n    "buckets": [\n        {\n            "lower": "0.1", \n            "upper": "0.2", \n            "count": 2, \n            "pre_sum": 0, \n            "ndv": 2\n        }, \n        {\n            "lower": "0.8", \n            "upper": "0.9", \n            "count": 2, \n            "pre_sum": 2, \n            "ndv": 2\n        }, \n        {\n            "lower": "1.0", \n            "upper": "1.0", \n            "count": 2, \n            "pre_sum": 4, \n            "ndv": 1\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"Field description\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"num_buckets\uff1aThe number of buckets"),(0,o.kt)("li",{parentName:"ul"},"buckets\uff1aAll buckets",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"lower\uff1aUpper bound of the bucket"),(0,o.kt)("li",{parentName:"ul"},"upper\uff1aLower bound of the bucket"),(0,o.kt)("li",{parentName:"ul"},"count\uff1aThe number of elements contained in the bucket"),(0,o.kt)("li",{parentName:"ul"},"pre_sum\uff1aThe total number of elements in the front bucket"),(0,o.kt)("li",{parentName:"ul"},"ndv\uff1aThe number of different values in the bucket")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Total number of histogram elements = number of elements in the last bucket(count) + total number of elements in the previous bucket(pre_sum).")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"HISTOGRAM, HIST"))}m.isMDXComponent=!0}}]);