"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82456],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=u(n),m=a,f=y["".concat(s,".").concat(m)]||y[m]||p[m]||l;return n?t.createElement(f,o(o({ref:r},c),{},{components:n})):t.createElement(f,o({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[y]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72043:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=n(87462),a=(n(67294),n(3905));const l={title:"array_enumerate",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array_enumerate",id:"version-1.2/sql-manual/sql-functions/array-functions/array_enumerate",title:"array_enumerate",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_enumerate.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_enumerate",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_enumerate",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_enumerate",language:"en"},sidebar:"docs",previous:{title:"array_with_constant",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_with_constant"},next:{title:"array_enumerate_uniq",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_enumerate_uniq"}},s={},u=[{value:"array_enumerate",id:"array_enumerate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},y="wrapper";function p(e){let{components:r,...n}=e;return(0,a.kt)(y,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_enumerate"},"array_enumerate"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"array_enumerate")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_enumerate(ARRAY<T> arr)")),(0,a.kt)("p",null,"Returns array sub item indexes eg. ","[1, 2, 3, \u2026, length (arr) ]"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'mysql> create table array_type_table(k1 INT, k2 Array<STRING>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties(\'replication_num\' = \'1\');\nmysql> insert into array_type_table values (0, []), ("1", [NULL]), ("2", ["1", "2", "3"]), ("3", ["1", NULL, "3"]), ("4", NULL);\nmysql> set enable_vectorized_engine = true;    # enable vectorized engine\nmysql> select k2, array_enumerate(k2) from array_type_table;\n+------------------+-----------------------+\n| k2               | array_enumerate(`k2`) |\n+------------------+-----------------------+\n| []               | []                    |\n| [NULL]           | [1]                   |\n| [\'1\', \'2\', \'3\']  | [1, 2, 3]             |\n| [\'1\', NULL, \'3\'] | [1, 2, 3]             |\n| NULL             | NULL                  |\n+------------------+-----------------------+\n5 rows in set (0.01 sec)\n')),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,ENUMERATE,ARRAY_ENUMERATE"))}p.isMDXComponent=!0}}]);