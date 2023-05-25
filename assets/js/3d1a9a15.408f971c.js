"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[35759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=c(n),_=a,d=y["".concat(s,".").concat(_)]||y[_]||p[_]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=_;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},64197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"array_with_constant",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array_with_constant",id:"sql-manual/sql-functions/array-functions/array_with_constant",title:"array_with_constant",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/array-functions/array_with_constant.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_with_constant",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_with_constant",draft:!1,tags:[],version:"current",frontMatter:{title:"array_with_constant",language:"en"},sidebar:"docs",previous:{title:"array_join",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_join"},next:{title:"array_enumerate",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_enumerate"}},s={},c=[{value:"array_with_constant",id:"array_with_constant",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_with_constant"},"array_with_constant"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"array_with_constant")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_with_constant(n, T)\nARRAY<T> array_repeat(T, n)\n")),(0,a.kt)("p",null,"get array of constants with n length, array_repeat has the same function as array_with_constant and is used to be compatible with the hive syntax format"),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select array_with_constant(2, \"hello\"), array_repeat(\"hello\", 2);\n+---------------------------------+--------------------------+\n| array_with_constant(2, 'hello') | array_repeat('hello', 2) |\n+---------------------------------+--------------------------+\n| ['hello', 'hello']              | ['hello', 'hello']       |\n+---------------------------------+--------------------------+\n1 row in set (0.04 sec)\n\nmysql> select array_with_constant(3, 12345), array_repeat(12345, 3);\n+-------------------------------+------------------------+\n| array_with_constant(3, 12345) | array_repeat(12345, 3) | \n+-------------------------------+------------------------+\n| [12345, 12345, 12345]         | [12345, 12345, 12345]  |\n+-------------------------------+------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_with_constant(3, null), array_repeat(null, 3);\n+------------------------------+-----------------------+\n| array_with_constant(3, NULL) | array_repeat(NULL, 3) |\n+------------------------------+-----------------------+\n| [NULL, NULL, NULL]           |  [NULL, NULL, NULL]   |\n+------------------------------+-----------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_with_constant(null, 3), array_repeat(3, null);\n+------------------------------+-----------------------+\n| array_with_constant(NULL, 3) | array_repeat(3, NULL) |\n+------------------------------+-----------------------+\n| []                           | []                    |\n+------------------------------+-----------------------+\n1 row in set (0.01 sec)\n\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,WITH_CONSTANT,ARRAY_WITH_CONSTANT,ARRAY_REPEAT"))}p.isMDXComponent=!0}}]);