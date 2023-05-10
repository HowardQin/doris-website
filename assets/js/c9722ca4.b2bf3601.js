"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[88470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),h=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=h(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=h(a),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var h=2;h<l;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var n=a(87462),r=(a(67294),a(3905));const l={title:"File Cache",language:"en"},i=void 0,o={unversionedId:"lakehouse/filecache",id:"version-1.2/lakehouse/filecache",title:"File Cache",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/lakehouse/filecache.md",sourceDirName:"lakehouse",slug:"/lakehouse/filecache",permalink:"/docs/1.2/lakehouse/filecache",draft:!1,tags:[],version:"1.2",frontMatter:{title:"File Cache",language:"en"},sidebar:"docs",previous:{title:"File Analysis",permalink:"/docs/1.2/lakehouse/file"},next:{title:"Spark Doris Connector",permalink:"/docs/1.2/ecosystem/spark-doris-connector"}},c={},h=[{value:"How it works",id:"how-it-works",level:2},{value:"Usage",id:"usage",level:2},{value:"Configurations for FE",id:"configurations-for-fe",level:3},{value:"Configurations for BE",id:"configurations-for-be",level:3},{value:"Check whether a query hits cache",id:"check-whether-a-query-hits-cache",level:2}],s={toc:h},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-cache"},"File Cache"),(0,r.kt)("version",{since:"dev"},(0,r.kt)("p",null,"File Cache accelerates queries that read the same data by caching the data files of recently accessed from remote storage system (HDFS or Object Storage). In Ad Hoc scenarios where the same data is frequently accessed, File Cache can avoid repeated remote data access costs and improve the query analysis performance and stability of hot data.")),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"File Cache caches the accessed remote data in the local BE node. The original data file will be divided into blocks according to the read IO size, and the block will be stored in file ",(0,r.kt)("inlineCode",{parentName:"p"},"cache_path/hash(filepath).substr(0, 3)/hash(filepath)/offset"),", and save the block meta information in the BE node. When accessing the same remote file, doris will check whether the cached data of the file exists in the local cache, and according to the offset and size of the block, confirm which data is read from the local block, which data is pulled from the remote, and cache the new data pulled from the remote. When the BE node restarts, scan ",(0,r.kt)("inlineCode",{parentName:"p"},"cache_path")," directory, recover the meta information of the block. When the cache size reaches the upper threshold, the blocks that have not been accessed for a long time shall be cleaned according to the LRU principle."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"File Cache is disabled by default. You need to set the relevant configuration in FE and BE to enable it."),(0,r.kt)("h3",{id:"configurations-for-fe"},"Configurations for FE"),(0,r.kt)("p",null,"Enable File Cache for a given session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SET enable_file_cache = true;\n")),(0,r.kt)("p",null,"Enable File Cache globally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SET GLOBAL enable_file_cache = true;\n")),(0,r.kt)("h3",{id:"configurations-for-be"},"Configurations for BE"),(0,r.kt)("p",null,"Add settings to the BE node's configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/be.conf"),", and restart the BE node for the configuration to take effect."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enable_file_cache")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable File Cache, default false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"file_cache_max_file_segment_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Max size of a single cached block, default 4MB, should greater than 4096")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"file_cache_path")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters about cache path, json format, for exmaple: ",(0,r.kt)("inlineCode",{parentName:"td"},'[{"path": "/path/to/file_cache1", "total_size":53687091200,"query_limit": "10737418240"},{"path": "/path/to/file_cache2", "total_size":53687091200,"query_limit": "10737418240"},{"path": "/path/to/file_cache3", "total_size":53687091200,"query_limit": "10737418240"}]'),". ",(0,r.kt)("inlineCode",{parentName:"td"},"path")," is the path to save cached data; ",(0,r.kt)("inlineCode",{parentName:"td"},"total_size")," is the max size of cached data; ",(0,r.kt)("inlineCode",{parentName:"td"},"query_limit")," is the max size of cached data for a single query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enable_file_cache_query_limit")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to limit the cache size used by a single query, default false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clear_file_cache")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to delete the previous cache data when the BE restarts, default false")))),(0,r.kt)("h2",{id:"check-whether-a-query-hits-cache"},"Check whether a query hits cache"),(0,r.kt)("p",null,"Execute ",(0,r.kt)("inlineCode",{parentName:"p"},"set enable_profile = true")," to enable the session variable, and you can view the query profile in the Queris tab of FE's web page. The metrics related to File Cache are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-  FileCache:\n  -  IOHitCacheNum:  552\n  -  IOTotalNum:  835\n  -  ReadFromFileCacheBytes:  19.98  MB\n  -  ReadFromWriteCacheBytes:  0.00  \n  -  ReadTotalBytes:  29.52  MB\n  -  WriteInFileCacheBytes:  915.77  MB\n  -  WriteInFileCacheNum:  283 \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IOTotalNum"),":  Number of remote access"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IOHitCacheNum"),": Number of cache hits"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReadFromFileCacheBytes"),": Amount of data read from cache file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReadTotalBytes"),": Total amount of data read"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SkipCacheBytes"),": Failed to create the cache file, or the cache file was deleted. The amount of data that needs to be read from the remote again"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WriteInFileCacheBytes"),": Amount of data saved to cache file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WriteInFileCacheNum"),": The number of blocks saved, so 'WriteInFileCacheBytes'/' WriteInFileCacheBytes' is the average size of blocks")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IOHitCacheNum")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"IOTotalNum")," Equal to 1, indicating that read data only from file cache"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReadFromFileCacheBytes")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadTotalBytes")," Equal to 1, indicating that read data only from file cache"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReadFromFileCacheBytes")," The smaller the better, the smaller the amount of data read from remote"))}p.isMDXComponent=!0}}]);