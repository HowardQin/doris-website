"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[57859],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>f});var o=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,o,r=function(e,t){if(null==e)return{};var l,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)l=n[o],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)l=n[o],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var m=o.createContext({}),s=function(e){var t=o.useContext(m),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=s(e.components);return o.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,m=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=s(l),d=r,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||n;return l?o.createElement(f,i(i({ref:t},p),{},{components:l})):o.createElement(f,i({ref:t},p))}));function f(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,i=new Array(n);i[0]=d;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a[c]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<n;s++)i[s]=l[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,l)}d.displayName="MDXCreateElement"},56822:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>s});var o=l(87462),r=(l(67294),l(3905));const n={title:"BloomFilter\u7d22\u5f15",language:"zh-CN"},i=void 0,a={unversionedId:"data-table/index/bloomfilter",id:"version-1.2/data-table/index/bloomfilter",title:"BloomFilter\u7d22\u5f15",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/data-table/index/bloomfilter.md",sourceDirName:"data-table/index",slug:"/data-table/index/bloomfilter",permalink:"/zh-CN/docs/1.2/data-table/index/bloomfilter",draft:!1,tags:[],version:"1.2",frontMatter:{title:"BloomFilter\u7d22\u5f15",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5012\u6392\u7d22\u5f15",permalink:"/zh-CN/docs/1.2/data-table/index/inverted-index"},next:{title:"NGram BloomFilter\u7d22\u5f15",permalink:"/zh-CN/docs/1.2/data-table/index/ngram-bloomfilter-index"}},m={},s=[{value:"Doris BloomFilter\u7d22\u5f15\u53ca\u4f7f\u7528\u4f7f\u7528\u573a\u666f",id:"doris-bloomfilter\u7d22\u5f15\u53ca\u4f7f\u7528\u4f7f\u7528\u573a\u666f",level:2},{value:"\u521b\u5efaBloomFilter\u7d22\u5f15",id:"\u521b\u5efabloomfilter\u7d22\u5f15",level:2},{value:"\u67e5\u770bBloomFilter\u7d22\u5f15",id:"\u67e5\u770bbloomfilter\u7d22\u5f15",level:2},{value:"\u5220\u9664BloomFilter\u7d22\u5f15",id:"\u5220\u9664bloomfilter\u7d22\u5f15",level:2},{value:"\u4fee\u6539BloomFilter\u7d22\u5f15",id:"\u4fee\u6539bloomfilter\u7d22\u5f15",level:2},{value:"<strong>Doris BloomFilter\u4f7f\u7528\u573a\u666f</strong>",id:"doris-bloomfilter\u4f7f\u7528\u573a\u666f",level:2},{value:"<strong>Doris BloomFilter\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879</strong>",id:"doris-bloomfilter\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879",level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bloomfilter\u7d22\u5f15"},"BloomFilter\u7d22\u5f15"),(0,r.kt)("p",null,"BloomFilter\u662f\u7531Bloom\u57281970\u5e74\u63d0\u51fa\u7684\u4e00\u79cd\u591a\u54c8\u5e0c\u51fd\u6570\u6620\u5c04\u7684\u5feb\u901f\u67e5\u627e\u7b97\u6cd5\u3002\u901a\u5e38\u5e94\u7528\u5728\u4e00\u4e9b\u9700\u8981\u5feb\u901f\u5224\u65ad\u67d0\u4e2a\u5143\u7d20\u662f\u5426\u5c5e\u4e8e\u96c6\u5408\uff0c\u4f46\u662f\u5e76\u4e0d\u4e25\u683c\u8981\u6c42100%\u6b63\u786e\u7684\u573a\u5408\uff0cBloomFilter\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u6548\u7387\u9ad8\u7684\u6982\u7387\u578b\u6570\u636e\u7ed3\u6784\uff0c\u7528\u6765\u68c0\u67e5\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u5728\u4e00\u4e2a\u96c6\u5408\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e00\u4e2a\u5143\u7d20\u68c0\u6d4b\u662f\u5426\u5b58\u5728\u7684\u8c03\u7528\uff0cBloomFilter\u4f1a\u544a\u8bc9\u8c03\u7528\u8005\u4e24\u4e2a\u7ed3\u679c\u4e4b\u4e00\uff1a\u53ef\u80fd\u5b58\u5728\u6216\u8005\u4e00\u5b9a\u4e0d\u5b58\u5728\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\u662f\u5b58\u5728\u8bef\u5224\uff0c\u544a\u8bc9\u4f60\u53ef\u80fd\u5b58\u5728\uff0c\u4e0d\u4e00\u5b9a\u771f\u5b9e\u5b58\u5728\u3002")),(0,r.kt)("p",null,"\u5e03\u9686\u8fc7\u6ee4\u5668\u5b9e\u9645\u4e0a\u662f\u7531\u4e00\u4e2a\u8d85\u957f\u7684\u4e8c\u8fdb\u5236\u4f4d\u6570\u7ec4\u548c\u4e00\u7cfb\u5217\u7684\u54c8\u5e0c\u51fd\u6570\u7ec4\u6210\u3002\u4e8c\u8fdb\u5236\u4f4d\u6570\u7ec4\u521d\u59cb\u5168\u90e8\u4e3a0\uff0c\u5f53\u7ed9\u5b9a\u4e00\u4e2a\u5f85\u67e5\u8be2\u7684\u5143\u7d20\u65f6\uff0c\u8fd9\u4e2a\u5143\u7d20\u4f1a\u88ab\u4e00\u7cfb\u5217\u54c8\u5e0c\u51fd\u6570\u8ba1\u7b97\u6620\u5c04\u51fa\u4e00\u7cfb\u5217\u7684\u503c\uff0c\u6240\u6709\u7684\u503c\u5728\u4f4d\u6570\u7ec4\u7684\u504f\u79fb\u91cf\u5904\u7f6e\u4e3a1\u3002"),(0,r.kt)("p",null,"\u4e0b\u56fe\u6240\u793a\u51fa\u4e00\u4e2a m=18, k=3 \uff08m\u662f\u8be5Bit\u6570\u7ec4\u7684\u5927\u5c0f\uff0ck\u662fHash\u51fd\u6570\u7684\u4e2a\u6570\uff09\u7684Bloom Filter\u793a\u4f8b\u3002\u96c6\u5408\u4e2d\u7684 x\u3001y\u3001z \u4e09\u4e2a\u5143\u7d20\u901a\u8fc7 3 \u4e2a\u4e0d\u540c\u7684\u54c8\u5e0c\u51fd\u6570\u6563\u5217\u5230\u4f4d\u6570\u7ec4\u4e2d\u3002\u5f53\u67e5\u8be2\u5143\u7d20w\u65f6\uff0c\u901a\u8fc7Hash\u51fd\u6570\u8ba1\u7b97\u4e4b\u540e\u56e0\u4e3a\u6709\u4e00\u4e2a\u6bd4\u7279\u4e3a0\uff0c\u56e0\u6b64w\u4e0d\u5728\u8be5\u96c6\u5408\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://doris.apache.org/images/Bloom_filter.svg.png",alt:"Bloom_filter.svg"})),(0,r.kt)("p",null,"\u90a3\u4e48\u600e\u4e48\u5224\u65ad\u67d0\u4e2a\u5143\u7d20\u662f\u5426\u5728\u96c6\u5408\u4e2d\u5462\uff1f\u540c\u6837\u662f\u8fd9\u4e2a\u5143\u7d20\u7ecf\u8fc7\u54c8\u5e0c\u51fd\u6570\u8ba1\u7b97\u540e\u5f97\u5230\u6240\u6709\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u82e5\u8fd9\u4e9b\u4f4d\u7f6e\u5168\u90fd\u4e3a1\uff0c\u5219\u5224\u65ad\u8fd9\u4e2a\u5143\u7d20\u5728\u8fd9\u4e2a\u96c6\u5408\u4e2d\uff0c\u82e5\u6709\u4e00\u4e2a\u4e0d\u4e3a1\uff0c\u5219\u5224\u65ad\u8fd9\u4e2a\u5143\u7d20\u4e0d\u5728\u8fd9\u4e2a\u96c6\u5408\u4e2d\u3002\u5c31\u662f\u8fd9\u4e48\u7b80\u5355\uff01"),(0,r.kt)("h2",{id:"doris-bloomfilter\u7d22\u5f15\u53ca\u4f7f\u7528\u4f7f\u7528\u573a\u666f"},"Doris BloomFilter\u7d22\u5f15\u53ca\u4f7f\u7528\u4f7f\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a\u5982\u679c\u8981\u67e5\u627e\u4e00\u4e2a\u5360\u7528100\u5b57\u8282\u5b58\u50a8\u7a7a\u95f4\u5927\u5c0f\u7684\u77ed\u884c\uff0c\u4e00\u4e2a64KB\u7684HFile\u6570\u636e\u5757\u5e94\u8be5\u5305\u542b(64 * 1024)/100 = 655.53 = ~700\u884c\uff0c\u5982\u679c\u4ec5\u80fd\u5728\u6574\u4e2a\u6570\u636e\u5757\u7684\u8d77\u59cb\u884c\u952e\u4e0a\u5efa\u7acb\u7d22\u5f15\uff0c\u90a3\u4e48\u5b83\u662f\u65e0\u6cd5\u7ed9\u4f60\u63d0\u4f9b\u7ec6\u7c92\u5ea6\u7684\u7d22\u5f15\u4fe1\u606f\u7684\u3002\u56e0\u4e3a\u8981\u67e5\u627e\u7684\u884c\u6570\u636e\u53ef\u80fd\u4f1a\u843d\u5728\u8be5\u6570\u636e\u5757\u7684\u884c\u533a\u95f4\u4e0a\uff0c\u4e5f\u53ef\u80fd\u884c\u6570\u636e\u6ca1\u5728\u8be5\u6570\u636e\u5757\u4e0a\uff0c\u4e5f\u53ef\u80fd\u662f\u8868\u4e2d\u6839\u672c\u5c31\u4e0d\u5b58\u5728\u8be5\u884c\u6570\u636e\uff0c\u4e5f\u6216\u8005\u662f\u884c\u6570\u636e\u5728\u53e6\u4e00\u4e2aHFile\u91cc\uff0c\u751a\u81f3\u5728MemStore\u91cc\u3002\u4ee5\u4e0a\u8fd9\u51e0\u79cd\u60c5\u51b5\uff0c\u90fd\u4f1a\u5bfc\u81f4\u4ece\u78c1\u76d8\u8bfb\u53d6\u6570\u636e\u5757\u65f6\u5e26\u6765\u989d\u5916\u7684IO\u5f00\u9500\uff0c\u4e5f\u4f1a\u6ee5\u7528\u6570\u636e\u5757\u7684\u7f13\u5b58\uff0c\u5f53\u9762\u5bf9\u4e00\u4e2a\u5de8\u5927\u7684\u6570\u636e\u96c6\u4e14\u5904\u4e8e\u9ad8\u5e76\u53d1\u8bfb\u65f6\uff0c\u4f1a\u4e25\u91cd\u5f71\u54cd\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0cHBase\u63d0\u4f9b\u4e86\u5e03\u9686\u8fc7\u6ee4\u5668\uff0c\u5b83\u5141\u8bb8\u4f60\u5bf9\u5b58\u50a8\u5728\u6bcf\u4e2a\u6570\u636e\u5757\u7684\u6570\u636e\u505a\u4e00\u4e2a\u53cd\u5411\u6d4b\u8bd5\u3002\u5f53\u67d0\u884c\u88ab\u8bf7\u6c42\u65f6\uff0c\u901a\u8fc7\u5e03\u9686\u8fc7\u6ee4\u5668\u5148\u68c0\u67e5\u8be5\u884c\u662f\u5426\u4e0d\u5728\u8fd9\u4e2a\u6570\u636e\u5757\uff0c\u5e03\u9686\u8fc7\u6ee4\u5668\u8981\u4e48\u786e\u5b9a\u56de\u7b54\u8be5\u884c\u4e0d\u5728\uff0c\u8981\u4e48\u56de\u7b54\u5b83\u4e0d\u77e5\u9053\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u6211\u4eec\u79f0\u5b83\u662f\u53cd\u5411\u6d4b\u8bd5\u3002\u5e03\u9686\u8fc7\u6ee4\u5668\u540c\u6837\u4e5f\u53ef\u4ee5\u5e94\u7528\u5230\u884c\u91cc\u7684\u5355\u5143\u4e0a\uff0c\u5f53\u8bbf\u95ee\u67d0\u5217\u6807\u8bc6\u7b26\u65f6\u53ef\u4ee5\u5148\u4f7f\u7528\u540c\u6837\u7684\u53cd\u5411\u6d4b\u8bd5\u3002"),(0,r.kt)("p",null,"\u4f46\u5e03\u9686\u8fc7\u6ee4\u5668\u4e5f\u4e0d\u662f\u6ca1\u6709\u4ee3\u4ef7\u3002\u5b58\u50a8\u8fd9\u4e2a\u989d\u5916\u7684\u7d22\u5f15\u5c42\u6b21\u4f1a\u5360\u7528\u989d\u5916\u7684\u7a7a\u95f4\u3002\u5e03\u9686\u8fc7\u6ee4\u5668\u968f\u7740\u5b83\u4eec\u7684\u7d22\u5f15\u5bf9\u8c61\u6570\u636e\u589e\u957f\u800c\u589e\u957f\uff0c\u6240\u4ee5\u884c\u7ea7\u5e03\u9686\u8fc7\u6ee4\u5668\u6bd4\u5217\u6807\u8bc6\u7b26\u7ea7\u5e03\u9686\u8fc7\u6ee4\u5668\u5360\u7528\u7a7a\u95f4\u8981\u5c11\u3002\u5f53\u7a7a\u95f4\u4e0d\u662f\u95ee\u9898\u65f6\uff0c\u5b83\u4eec\u53ef\u4ee5\u5e2e\u52a9\u4f60\u69a8\u5e72\u7cfb\u7edf\u7684\u6027\u80fd\u6f5c\u529b\u3002\nDoris\u7684BloomFilter\u7d22\u5f15\u53ef\u4ee5\u901a\u8fc7\u5efa\u8868\u7684\u65f6\u5019\u6307\u5b9a\uff0c\u6216\u8005\u901a\u8fc7\u8868\u7684ALTER\u64cd\u4f5c\u6765\u5b8c\u6210\u3002Bloom Filter\u672c\u8d28\u4e0a\u662f\u4e00\u79cd\u4f4d\u56fe\u7ed3\u6784\uff0c\u7528\u4e8e\u5feb\u901f\u7684\u5224\u65ad\u4e00\u4e2a\u7ed9\u5b9a\u7684\u503c\u662f\u5426\u5728\u4e00\u4e2a\u96c6\u5408\u4e2d\u3002\u8fd9\u79cd\u5224\u65ad\u4f1a\u4ea7\u751f\u5c0f\u6982\u7387\u7684\u8bef\u5224\u3002\u5373\u5982\u679c\u8fd4\u56defalse\uff0c\u5219\u4e00\u5b9a\u4e0d\u5728\u8fd9\u4e2a\u96c6\u5408\u5185\u3002\u800c\u5982\u679c\u8303\u56f4true\uff0c\u5219\u6709\u53ef\u80fd\u5728\u8fd9\u4e2a\u96c6\u5408\u5185\u3002"),(0,r.kt)("p",null,"BloomFilter\u7d22\u5f15\u4e5f\u662f\u4ee5Block\u4e3a\u7c92\u5ea6\u521b\u5efa\u7684\u3002\u6bcf\u4e2aBlock\u4e2d\uff0c\u6307\u5b9a\u5217\u7684\u503c\u4f5c\u4e3a\u4e00\u4e2a\u96c6\u5408\u751f\u6210\u4e00\u4e2aBloomFilter\u7d22\u5f15\u6761\u76ee\uff0c\u7528\u4e8e\u5728\u67e5\u8be2\u662f\u5feb\u901f\u8fc7\u6ee4\u4e0d\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u5b9e\u4f8b\u6765\u770b\u770bDoris\u600e\u4e48\u521b\u5efaBloomFilter\u7d22\u5f15\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efabloomfilter\u7d22\u5f15"},"\u521b\u5efaBloomFilter\u7d22\u5f15"),(0,r.kt)("p",null,'Doris BloomFilter\u7d22\u5f15\u7684\u521b\u5efa\u662f\u901a\u8fc7\u5728\u5efa\u8868\u8bed\u53e5\u7684PROPERTIES\u91cc\u52a0\u4e0a"bloom_filter_columns"="k1,k2,k3",\u8fd9\u4e2a\u5c5e\u6027\uff0ck1,k2,k3\u662f\u4f60\u8981\u521b\u5efa\u7684BloomFilter\u7d22\u5f15\u7684Key\u5217\u540d\u79f0\uff0c\u4f8b\u5982\u4e0b\u9762\u6211\u4eec\u5bf9\u8868\u91cc\u7684saler_id,category_id\u521b\u5efa\u4e86BloomFilter\u7d22\u5f15\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS sale_detail_bloom  (\n    sale_date date NOT NULL COMMENT "\u9500\u552e\u65f6\u95f4",\n    customer_id int NOT NULL COMMENT "\u5ba2\u6237\u7f16\u53f7",\n    saler_id int NOT NULL COMMENT "\u9500\u552e\u5458",\n    sku_id int NOT NULL COMMENT "\u5546\u54c1\u7f16\u53f7",\n    category_id int NOT NULL COMMENT "\u5546\u54c1\u5206\u7c7b",\n    sale_count int NOT NULL COMMENT "\u9500\u552e\u6570\u91cf",\n    sale_price DECIMAL(12,2) NOT NULL COMMENT "\u5355\u4ef7",\n    sale_amt DECIMAL(20,2)  COMMENT "\u9500\u552e\u603b\u91d1\u989d"\n)\nDuplicate  KEY(sale_date, customer_id,saler_id,sku_id,category_id)\nPARTITION BY RANGE(sale_date)\n(\nPARTITION P_202111 VALUES [(\'2021-11-01\'), (\'2021-12-01\'))\n)\nDISTRIBUTED BY HASH(saler_id) BUCKETS 10\nPROPERTIES (\n"replication_num" = "3",\n"bloom_filter_columns"="saler_id,category_id",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "MONTH",\n"dynamic_partition.time_zone" = "Asia/Shanghai",\n"dynamic_partition.start" = "-2147483648",\n"dynamic_partition.end" = "2",\n"dynamic_partition.prefix" = "P_",\n"dynamic_partition.replication_num" = "3",\n"dynamic_partition.buckets" = "3"\n);\n')),(0,r.kt)("h2",{id:"\u67e5\u770bbloomfilter\u7d22\u5f15"},"\u67e5\u770bBloomFilter\u7d22\u5f15"),(0,r.kt)("p",null,"\u67e5\u770b\u6211\u4eec\u5728\u8868\u4e0a\u5efa\u7acb\u7684BloomFilter\u7d22\u5f15\u662f\u4f7f\u7528:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE <table_name>;\n")),(0,r.kt)("h2",{id:"\u5220\u9664bloomfilter\u7d22\u5f15"},"\u5220\u9664BloomFilter\u7d22\u5f15"),(0,r.kt)("p",null,"\u5220\u9664\u7d22\u5f15\u5373\u4e3a\u5c06\u7d22\u5f15\u5217\u4ecebloom_filter_columns\u5c5e\u6027\u4e2d\u79fb\u9664\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE <db.table_name> SET ("bloom_filter_columns" = "");\n')),(0,r.kt)("h2",{id:"\u4fee\u6539bloomfilter\u7d22\u5f15"},"\u4fee\u6539BloomFilter\u7d22\u5f15"),(0,r.kt)("p",null,"\u4fee\u6539\u7d22\u5f15\u5373\u4e3a\u4fee\u6539\u8868\u7684bloom_filter_columns\u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE <db.table_name> SET ("bloom_filter_columns" = "k1,k3");\n')),(0,r.kt)("h2",{id:"doris-bloomfilter\u4f7f\u7528\u573a\u666f"},(0,r.kt)("strong",{parentName:"h2"},"Doris BloomFilter\u4f7f\u7528\u573a\u666f")),(0,r.kt)("p",null,"\u6ee1\u8db3\u4ee5\u4e0b\u51e0\u4e2a\u6761\u4ef6\u65f6\u53ef\u4ee5\u8003\u8651\u5bf9\u67d0\u5217\u5efa\u7acbBloom Filter \u7d22\u5f15\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148BloomFilter\u9002\u7528\u4e8e\u975e\u524d\u7f00\u8fc7\u6ee4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u4f1a\u6839\u636e\u8be5\u5217\u9ad8\u9891\u8fc7\u6ee4\uff0c\u800c\u4e14\u67e5\u8be2\u6761\u4ef6\u5927\u591a\u662f in \u548c = \u8fc7\u6ee4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u540c\u4e8eBitmap, BloomFilter\u9002\u7528\u4e8e\u9ad8\u57fa\u6570\u5217\u3002\u6bd4\u5982UserID\u3002\u56e0\u4e3a\u5982\u679c\u521b\u5efa\u5728\u4f4e\u57fa\u6570\u7684\u5217\u4e0a\uff0c\u6bd4\u5982 \u201c\u6027\u522b\u201d \u5217\uff0c\u5219\u6bcf\u4e2aBlock\u51e0\u4e4e\u90fd\u4f1a\u5305\u542b\u6240\u6709\u53d6\u503c\uff0c\u5bfc\u81f4BloomFilter\u7d22\u5f15\u5931\u53bb\u610f\u4e49\u3002")),(0,r.kt)("h2",{id:"doris-bloomfilter\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879"},(0,r.kt)("strong",{parentName:"h2"},"Doris BloomFilter\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u5bf9Tinyint\u3001Float\u3001Double \u7c7b\u578b\u7684\u5217\u5efaBloom Filter\u7d22\u5f15\u3002"),(0,r.kt)("li",{parentName:"ol"},"Bloom Filter\u7d22\u5f15\u53ea\u5bf9 in \u548c = \u8fc7\u6ee4\u67e5\u8be2\u6709\u52a0\u901f\u6548\u679c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u8981\u67e5\u770b\u67d0\u4e2a\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u4e86Bloom Filter\u7d22\u5f15\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2\u7684Profile\u4fe1\u606f\u67e5\u770b\u3002")))}u.isMDXComponent=!0}}]);