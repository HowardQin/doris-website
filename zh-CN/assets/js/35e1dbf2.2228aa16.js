"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[90766],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=c(t),_=a,d=y["".concat(s,".").concat(_)]||y[_]||p[_]||o;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=_;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[y]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}_.displayName="MDXCreateElement"},99085:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"array_with_constant",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array_with_constant",id:"sql-manual/sql-functions/array-functions/array_with_constant",title:"array_with_constant",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array_with_constant.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_with_constant",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_with_constant",draft:!1,tags:[],version:"current",frontMatter:{title:"array_with_constant",language:"zh-CN"},sidebar:"docs",previous:{title:"array_join",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_join"},next:{title:"array_enumerate",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_enumerate"}},s={},c=[{value:"array_with_constant",id:"array_with_constant",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(y,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_with_constant"},"array_with_constant"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"array_with_constant\narray_repeat")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_with_constant(n, T)\nARRAY<T> array_repeat(T, n)\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4, \u5305\u542bn\u4e2a\u91cd\u590d\u7684T\u5e38\u91cf\u3002array_repeat\u4e0earray_with_constant\u529f\u80fd\u76f8\u540c\uff0c\u7528\u6765\u517c\u5bb9hive\u8bed\u6cd5\u683c\u5f0f\u3002"),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select array_with_constant(2, \"hello\"), array_repeat(\"hello\", 2);\n+---------------------------------+--------------------------+\n| array_with_constant(2, 'hello') | array_repeat('hello', 2) |\n+---------------------------------+--------------------------+\n| ['hello', 'hello']              | ['hello', 'hello']       |\n+---------------------------------+--------------------------+\n1 row in set (0.04 sec)\n\nmysql> select array_with_constant(3, 12345), array_repeat(12345, 3);\n+-------------------------------+------------------------+\n| array_with_constant(3, 12345) | array_repeat(12345, 3) | \n+-------------------------------+------------------------+\n| [12345, 12345, 12345]         | [12345, 12345, 12345]  |\n+-------------------------------+------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_with_constant(3, null), array_repeat(null, 3);\n+------------------------------+-----------------------+\n| array_with_constant(3, NULL) | array_repeat(NULL, 3) |\n+------------------------------+-----------------------+\n| [NULL, NULL, NULL]           |  [NULL, NULL, NULL]   |\n+------------------------------+-----------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_with_constant(null, 3), array_repeat(3, null);\n+------------------------------+-----------------------+\n| array_with_constant(NULL, 3) | array_repeat(3, NULL) |\n+------------------------------+-----------------------+\n| []                           | []                    |\n+------------------------------+-----------------------+\n1 row in set (0.01 sec)\n\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,WITH_CONSTANT,ARRAY_WITH_CONSTANT,ARRAY_REPEAT"))}p.isMDXComponent=!0}}]);