"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[74856],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var l=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,l,n=function(e,r){if(null==e)return{};var t,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=l.createContext({}),c=function(e){var r=l.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=c(e.components);return l.createElement(m.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return l.createElement(l.Fragment,{},r)}},u=l.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=n,f=d["".concat(m,".").concat(u)]||d[u]||p[u]||a;return t?l.createElement(f,o(o({ref:r},s),{},{components:t})):l.createElement(f,o({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var m in r)hasOwnProperty.call(r,m)&&(i[m]=r[m]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40013:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=t(87462),n=(t(67294),t(3905));const a={title:"NGram BloomFilter\u7d22\u5f15",language:"zh-CN"},o=void 0,i={unversionedId:"data-table/index/ngram-bloomfilter-index",id:"version-1.2/data-table/index/ngram-bloomfilter-index",title:"NGram BloomFilter\u7d22\u5f15",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/data-table/index/ngram-bloomfilter-index.md",sourceDirName:"data-table/index",slug:"/data-table/index/ngram-bloomfilter-index",permalink:"/zh-CN/docs/1.2/data-table/index/ngram-bloomfilter-index",draft:!1,tags:[],version:"1.2",frontMatter:{title:"NGram BloomFilter\u7d22\u5f15",language:"zh-CN"},sidebar:"docs",previous:{title:"BloomFilter\u7d22\u5f15",permalink:"/zh-CN/docs/1.2/data-table/index/bloomfilter"},next:{title:"Bitmap \u7d22\u5f15",permalink:"/zh-CN/docs/1.2/data-table/index/bitmap-index"}},m={},c=[{value:"NGram BloomFilter\u521b\u5efa",id:"ngram-bloomfilter\u521b\u5efa",level:2},{value:"\u67e5\u770bNGram BloomFilter\u7d22\u5f15",id:"\u67e5\u770bngram-bloomfilter\u7d22\u5f15",level:2},{value:"\u5220\u9664NGram BloomFilter\u7d22\u5f15",id:"\u5220\u9664ngram-bloomfilter\u7d22\u5f15",level:2},{value:"\u4fee\u6539NGram BloomFilter\u7d22\u5f15",id:"\u4fee\u6539ngram-bloomfilter\u7d22\u5f15",level:2},{value:"<strong>Doris NGram BloomFilter\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879</strong>",id:"doris-ngram-bloomfilter\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879",level:2}],s={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,l.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"experimental-ngram-bloomfilter\u7d22\u5f15\u53ca\u4f7f\u7528\u4f7f\u7528\u573a\u666f"},"[Experimental]"," NGram BloomFilter\u7d22\u5f15\u53ca\u4f7f\u7528\u4f7f\u7528\u573a\u666f"),(0,n.kt)("version",{since:"2.0.0"}),(0,n.kt)("p",null,"\u4e3a\u4e86\u63d0\u5347like\u7684\u67e5\u8be2\u6027\u80fd\uff0c\u589e\u52a0\u4e86NGram BloomFilter\u7d22\u5f15\uff0c\u5176\u5b9e\u73b0\u4e3b\u8981\u53c2\u7167\u4e86ClickHouse\u7684ngrambf\u3002"),(0,n.kt)("h2",{id:"ngram-bloomfilter\u521b\u5efa"},"NGram BloomFilter\u521b\u5efa"),(0,n.kt)("p",null,"\u8868\u521b\u5efa\u65f6\u6307\u5b9a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `table3` (\n  `siteid` int(11) NULL DEFAULT "10" COMMENT "",\n  `citycode` smallint(6) NULL COMMENT "",\n  `username` varchar(32) NULL DEFAULT "" COMMENT "",\n  INDEX idx_ngrambf (`username`) USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="256") COMMENT \'username ngram_bf index\'\n) ENGINE=OLAP\nAGGREGATE KEY(`siteid`, `citycode`, `username`) COMMENT "OLAP"\nDISTRIBUTED BY HASH(`siteid`) BUCKETS 10\nPROPERTIES (\n"replication_num" = "1"\n);\n\n-- PROPERTIES("gram_size"="3", "bf_size"="256")\uff0c\u5206\u522b\u8868\u793agram\u7684\u4e2a\u6570\u548cbloom filter\u7684\u5b57\u8282\u6570\u3002\n-- gram\u7684\u4e2a\u6570\u8ddf\u5b9e\u9645\u67e5\u8be2\u573a\u666f\u76f8\u5173\uff0c\u901a\u5e38\u8bbe\u7f6e\u4e3a\u5927\u90e8\u5206\u67e5\u8be2\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\uff0cbloom filter\u5b57\u8282\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7\u6d4b\u8bd5\u5f97\u51fa\uff0c\u901a\u5e38\u8d8a\u5927\u8fc7\u6ee4\u6548\u679c\u8d8a\u597d\uff0c\u53ef\u4ee5\u4ece256\u5f00\u59cb\u8fdb\u884c\u9a8c\u8bc1\u6d4b\u8bd5\u770b\u770b\u6548\u679c\u3002\u5f53\u7136\u5b57\u8282\u6570\u8d8a\u5927\u4e5f\u4f1a\u5e26\u6765\u7d22\u5f15\u5b58\u50a8\u3001\u5185\u5b58cost\u4e0a\u5347\u3002\n-- \u5982\u679c\u6570\u636e\u57fa\u6570\u6bd4\u8f83\u9ad8\uff0c\u5b57\u8282\u6570\u53ef\u4ee5\u4e0d\u7528\u8bbe\u7f6e\u8fc7\u5927\uff0c\u5982\u679c\u57fa\u6570\u4e0d\u662f\u5f88\u9ad8\uff0c\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u5b57\u8282\u6570\u6765\u63d0\u5347\u8fc7\u6ee4\u6548\u679c\u3002\n')),(0,n.kt)("h2",{id:"\u67e5\u770bngram-bloomfilter\u7d22\u5f15"},"\u67e5\u770bNGram BloomFilter\u7d22\u5f15"),(0,n.kt)("p",null,"\u67e5\u770b\u6211\u4eec\u5728\u8868\u4e0a\u5efa\u7acb\u7684NGram BloomFilter\u7d22\u5f15\u662f\u4f7f\u7528:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"show index from example_db.table3;\n")),(0,n.kt)("h2",{id:"\u5220\u9664ngram-bloomfilter\u7d22\u5f15"},"\u5220\u9664NGram BloomFilter\u7d22\u5f15"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"alter table example_db.table3 drop index idx_ngrambf;\n")),(0,n.kt)("h2",{id:"\u4fee\u6539ngram-bloomfilter\u7d22\u5f15"},"\u4fee\u6539NGram BloomFilter\u7d22\u5f15"),(0,n.kt)("p",null,"\u4e3a\u5df2\u6709\u5217\u65b0\u589eNGram BloomFilter\u7d22\u5f15\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'alter table example_db.table3 add index idx_ngrambf(username) using NGRAM_BF PROPERTIES("gram_size"="2", "bf_size"="512")comment \'username ngram_bf index\' \n')),(0,n.kt)("h2",{id:"doris-ngram-bloomfilter\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879"},(0,n.kt)("strong",{parentName:"h2"},"Doris NGram BloomFilter\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"NGram BloomFilter\u53ea\u652f\u6301\u5b57\u7b26\u4e32\u5217"),(0,n.kt)("li",{parentName:"ol"},"NGram BloomFilter\u7d22\u5f15\u548cBloomFilter\u7d22\u5f15\u4e3a\u4e92\u65a5\u5173\u7cfb\uff0c\u5373\u540c\u4e00\u4e2a\u5217\u53ea\u80fd\u8bbe\u7f6e\u4e24\u8005\u4e2d\u7684\u4e00\u4e2a"),(0,n.kt)("li",{parentName:"ol"},"NGram\u5927\u5c0f\u548cBloomFilter\u7684\u5b57\u8282\u6570\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u4f18\uff0c\u5982\u679cNGram\u6bd4\u8f83\u5c0f\uff0c\u53ef\u4ee5\u9002\u5f53\u589e\u52a0BloomFilter\u5927\u5c0f"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u8981\u67e5\u770b\u67d0\u4e2a\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u4e86NGram Bloom Filter\u7d22\u5f15\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2\u7684Profile\u4fe1\u606f\u67e5\u770b")))}p.isMDXComponent=!0}}]);