"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13466],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(t),s=a,d=u["".concat(p,".").concat(s)]||u[s]||k[s]||o;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=t(87462),a=(t(67294),t(3905));const o={title:"Doris BE\u5b58\u50a8\u5c42Benchmark\u5de5\u5177",language:"zh-CN"},l=void 0,i={unversionedId:"developer-guide/benchmark-tool",id:"developer-guide/benchmark-tool",title:"Doris BE\u5b58\u50a8\u5c42Benchmark\u5de5\u5177",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/benchmark-tool.md",sourceDirName:"developer-guide",slug:"/developer-guide/benchmark-tool",permalink:"/zh-CN/community/developer-guide/benchmark-tool",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris BE\u5b58\u50a8\u5c42Benchmark\u5de5\u5177",language:"zh-CN"},sidebar:"community",previous:{title:"Doris Docker \u5feb\u901f\u642d\u5efa\u5f00\u53d1\u73af\u5883",permalink:"/zh-CN/community/developer-guide/docker-dev"},next:{title:"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa - Eclipse",permalink:"/zh-CN/community/developer-guide/fe-eclipse-dev"}},p={},m=[{value:"\u7528\u9014",id:"\u7528\u9014",level:2},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cSegment\u8bfb\u53d6\u6d4b\u8bd5",id:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884csegment\u8bfb\u53d6\u6d4b\u8bd5",level:4},{value:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cSegment\u5199\u5165\u6d4b\u8bd5",id:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884csegment\u5199\u5165\u6d4b\u8bd5",level:4},{value:"\u4f7f\u7528\u4ece\u6587\u4ef6\u5bfc\u5165\u7684\u6570\u636e\u96c6\u8fdb\u884cSegment\u8bfb\u53d6\u6d4b\u8bd5",id:"\u4f7f\u7528\u4ece\u6587\u4ef6\u5bfc\u5165\u7684\u6570\u636e\u96c6\u8fdb\u884csegment\u8bfb\u53d6\u6d4b\u8bd5",level:4},{value:"\u4f7f\u7528\u4ece\u6587\u4ef6\u5bfc\u5165\u7684\u6570\u636e\u96c6\u8fdb\u884cSegment\u5199\u5165\u6d4b\u8bd5",id:"\u4f7f\u7528\u4ece\u6587\u4ef6\u5bfc\u5165\u7684\u6570\u636e\u96c6\u8fdb\u884csegment\u5199\u5165\u6d4b\u8bd5",level:4},{value:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cpage\u5b57\u5178\u7f16\u7801\u6d4b\u8bd5",id:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cpage\u5b57\u5178\u7f16\u7801\u6d4b\u8bd5",level:4},{value:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cpage\u5b57\u5178\u89e3\u7801\u6d4b\u8bd5",id:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cpage\u5b57\u5178\u89e3\u7801\u6d4b\u8bd5",level:4},{value:"Custom\u6d4b\u8bd5",id:"custom\u6d4b\u8bd5",level:2}],c={toc:m},u="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"doris-be\u5b58\u50a8\u5c42benchmark\u5de5\u5177"},"Doris BE\u5b58\u50a8\u5c42Benchmark\u5de5\u5177"),(0,a.kt)("h2",{id:"\u7528\u9014"},"\u7528\u9014"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u53ef\u4ee5\u7528\u6765\u6d4b\u8bd5BE\u5b58\u50a8\u5c42\u7684\u4e00\u4e9b\u90e8\u5206(\u4f8b\u5982segment\u3001page)\u7684\u6027\u80fd\u3002\u6839\u636e\u8f93\u5165\u6570\u636e\u6784\u9020\u51fa\u6307\u5b9a\u5bf9\u8c61,\u5229\u7528google benchmark\u8fdb\u884c\u6027\u80fd\u6d4b\u8bd5\u3002\n")),(0,a.kt)("h2",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u786e\u4fdd\u73af\u5883\u5df2\u7ecf\u80fd\u987a\u5229\u7f16\u8bd1Doris\u672c\u4f53,\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/install/source-install/compilation"},"\u7f16\u8bd1\u4e0e\u90e8\u7f72"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c\u76ee\u5f55\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"run-be-ut.sh"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u51fa\u7684\u53ef\u6267\u884c\u6587\u4ef6\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"./be/ut_build_ASAN/test/tools/benchmark_tool")))),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("h4",{id:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884csegment\u8bfb\u53d6\u6d4b\u8bd5"},"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cSegment\u8bfb\u53d6\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u4f1a\u5148\u5229\u7528\u6570\u636e\u96c6\u5199\u5165\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"segment"),"\u6587\u4ef6,\u7136\u540e\u5bf9scan\u6574\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"segment"),"\u7684\u8017\u65f6\u8fdb\u884c\u7edf\u8ba1\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"./benchmark_tool --operation=SegmentScan --column_type=int,varchar --rows_number=10000 --iterations=0")),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"column_type"),"\u53ef\u4ee5\u8bbe\u7f6e\u8868\u7ed3\u6784,",(0,a.kt)("inlineCode",{parentName:"p"},"segment"),"\u5c42\u7684\u8868\u7ed3\u6784\u7c7b\u578b\u76ee\u524d\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"int\u3001char\u3001varchar\u3001string"),",",(0,a.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u7684\u957f\u5ea6\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"8"),",",(0,a.kt)("inlineCode",{parentName:"p"},"varchar"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\u7c7b\u578b\u957f\u5ea6\u9650\u5236\u90fd\u4e3a\u6700\u5927\u503c\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"int,varchar"),"\u3002"),(0,a.kt)("p",null,"\u6570\u636e\u96c6\u6309\u4ee5\u4e0b\u89c4\u5219\u751f\u6210\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"int: \u5728","[1,1000000]","\u5185\u968f\u673a\u3002")),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u6570\u636e\u5b57\u7b26\u96c6\u4e3a\u5927\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd,\u957f\u5ea6\u6839\u636e\u7c7b\u578b\u4e0d\u540c\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"char: \u957f\u5ea6\u5728","[1,8]","\u5185\u968f\u673a\u3002\nvarchar: \u957f\u5ea6\u5728","[1,128]","\u5185\u968f\u673a\u3002\nstring: \u957f\u5ea6\u5728","[1,100000]","\u5185\u968f\u673a\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rows_number"),"\u8868\u793a\u6570\u636e\u7684\u884c\u6570,\u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"10000"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"iterations"),"\u8868\u793a\u8fed\u4ee3\u6b21\u6570,benchmark\u4f1a\u91cd\u590d\u8fdb\u884c\u6d4b\u8bd5,\u7136\u540e\u8ba1\u7b97\u5e73\u5747\u8017\u65f6\u3002\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"iterations"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u5219\u8868\u793a\u7531benchmark\u81ea\u52a8\u9009\u62e9\u8fed\u4ee3\u6b21\u6570\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"10"),"\u3002"),(0,a.kt)("h4",{id:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884csegment\u5199\u5165\u6d4b\u8bd5"},"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cSegment\u5199\u5165\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u5bf9\u5c06\u6570\u636e\u96c6\u6dfb\u52a0\u8fdbsegment\u5e76\u5199\u5165\u78c1\u76d8\u7684\u6d41\u7a0b\u8fdb\u884c\u8017\u65f6\u7edf\u8ba1\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"./benchmark_tool --operation=SegmentWrite")),(0,a.kt)("h4",{id:"\u4f7f\u7528\u4ece\u6587\u4ef6\u5bfc\u5165\u7684\u6570\u636e\u96c6\u8fdb\u884csegment\u8bfb\u53d6\u6d4b\u8bd5"},"\u4f7f\u7528\u4ece\u6587\u4ef6\u5bfc\u5165\u7684\u6570\u636e\u96c6\u8fdb\u884cSegment\u8bfb\u53d6\u6d4b\u8bd5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"./benchmark_tool --operation=SegmentScanByFile --input_file=./sample.dat")),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"input_file"),"\u4e3a\u5bfc\u5165\u7684\u6570\u636e\u96c6\u6587\u4ef6\u3002\n\u6570\u636e\u96c6\u6587\u4ef6\u7b2c\u4e00\u884c\u4e3a\u8868\u7ed3\u6784\u5b9a\u4e49,\u4e4b\u540e\u6bcf\u884c\u5206\u522b\u5bf9\u5e94\u4e00\u884c\u6570\u636e,\u6bcf\u4e2a\u6570\u636e\u7528",(0,a.kt)("inlineCode",{parentName:"p"},","),"\u9694\u5f00\u3002"),(0,a.kt)("p",null,"\u4e3e\u4f8b: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int,char,varchar\n123,hello,world\n321,good,bye\n")),(0,a.kt)("p",null,"\u7c7b\u578b\u652f\u6301\u540c\u6837\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"int"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"char"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"varchar"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"string"),",\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u6570\u636e\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc78\u3002"),(0,a.kt)("h4",{id:"\u4f7f\u7528\u4ece\u6587\u4ef6\u5bfc\u5165\u7684\u6570\u636e\u96c6\u8fdb\u884csegment\u5199\u5165\u6d4b\u8bd5"},"\u4f7f\u7528\u4ece\u6587\u4ef6\u5bfc\u5165\u7684\u6570\u636e\u96c6\u8fdb\u884cSegment\u5199\u5165\u6d4b\u8bd5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"./benchmark_tool --operation=SegmentWriteByFile --input_file=./sample.dat")),(0,a.kt)("h4",{id:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cpage\u5b57\u5178\u7f16\u7801\u6d4b\u8bd5"},"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cpage\u5b57\u5178\u7f16\u7801\u6d4b\u8bd5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"./benchmark_tool --operation=BinaryDictPageEncode --rows_number=10000 --iterations=0")),(0,a.kt)("p",null,"\u4f1a\u968f\u673a\u751f\u6210\u957f\u5ea6\u5728","[1,8]","\u4e4b\u95f4\u7684varchar,\u5e76\u5bf9\u7f16\u7801\u8fdb\u884c\u8017\u65f6\u7edf\u8ba1\u3002"),(0,a.kt)("h4",{id:"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cpage\u5b57\u5178\u89e3\u7801\u6d4b\u8bd5"},"\u4f7f\u7528\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u96c6\u8fdb\u884cpage\u5b57\u5178\u89e3\u7801\u6d4b\u8bd5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"./benchmark_tool --operation=BinaryDictPageDecode")),(0,a.kt)("p",null,"\u4f1a\u968f\u673a\u751f\u6210\u957f\u5ea6\u5728","[1,8]","\u4e4b\u95f4\u7684varchar\u5e76\u7f16\u7801,\u5e76\u5bf9\u89e3\u7801\u8fdb\u884c\u8017\u65f6\u7edf\u8ba1\u3002"),(0,a.kt)("h2",{id:"custom\u6d4b\u8bd5"},"Custom\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u8fd9\u91cc\u652f\u6301\u7528\u6237\u4f7f\u7528\u81ea\u5df1\u7f16\u5199\u7684\u51fd\u6570\u8fdb\u884c\u6027\u80fd\u6d4b\u8bd5,\u5177\u4f53\u53ef\u4ee5\u5b9e\u73b0\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"/be/test/tools/benchmark_tool.cpp"),"\u3002\n\u4f8b\u5982\u5b9e\u73b0\u6709\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void custom_run_plus() {\n    int p = 100000;\n    int q = 0;\n    while (p--) {\n        q++;\n        if (UNLIKELY(q == 1024)) q = 0;\n    }\n}\nvoid custom_run_mod() {\n    int p = 100000;\n    int q = 0;\n    while (p--) {\n        q++;\n        if (q %= 1024) q = 0;\n    }\n}\n")),(0,a.kt)("p",null,"\u5219\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c",(0,a.kt)("inlineCode",{parentName:"p"},"CustomBenchmark"),"\u6765\u52a0\u5165\u6d4b\u8bd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'benchmarks.emplace_back(\n                    new doris::CustomBenchmark("custom_run_plus", 0,\n                        custom_init, custom_run_plus));\nbenchmarks.emplace_back(\n                    new doris::CustomBenchmark("custom_run_mod", 0,\n                        custom_init, custom_run_mod));\n')),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u4e3a\u6bcf\u8f6e\u6d4b\u8bd5\u7684\u521d\u59cb\u5316\u6b65\u9aa4(\u4e0d\u4f1a\u8ba1\u5165\u8017\u65f6),\u5982\u679c\u7528\u6237\u6709\u9700\u8981\u521d\u59cb\u5316\u7684\u5bf9\u8c61\u5219\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"CustomBenchmark"),"\u7684\u6d3e\u751f\u7c7b\u6765\u5b9e\u73b0\u3002\n\u8fd0\u884c\u540e\u6709\u5982\u4e0b\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2021-08-30T10:29:35+08:00\nRunning ./benchmark_tool\nRun on (96 X 3100.75 MHz CPU s)\nCPU Caches:\n  L1 Data 32 KiB (x48)\n  L1 Instruction 32 KiB (x48)\n  L2 Unified 1024 KiB (x48)\n  L3 Unified 33792 KiB (x2)\nLoad Average: 0.55, 0.53, 0.39\n----------------------------------------------------------\nBenchmark                Time             CPU   Iterations\n----------------------------------------------------------\ncustom_run_plus      0.812 ms        0.812 ms          861\ncustom_run_mod        1.30 ms         1.30 ms          539\n")))}k.isMDXComponent=!0}}]);