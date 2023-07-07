"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57761],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),y=a,m=p["".concat(i,".").concat(y)]||p[y]||d[y]||c;return n?t.createElement(m,o(o({ref:r},s),{},{components:n})):t.createElement(m,o({ref:r},s))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=y;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},34248:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var t=n(87462),a=(n(67294),n(3905));const c={title:"array_compact",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array_compact",id:"version-1.2/sql-manual/sql-functions/array-functions/array_compact",title:"array_compact",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_compact.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_compact",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_compact",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_compact",language:"zh-CN"},sidebar:"docs",previous:{title:"array_pushfront",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_pushfront"},next:{title:"array_concat",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_concat"}},i={},u=[{value:"array_compact",id:"array_compact",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function d(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_compact"},"array_compact"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"array_compact")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u8fde\u7eed\u7684\u91cd\u590d\u5143\u7d20,\u7ed3\u679c\u503c\u7684\u987a\u5e8f\u7531\u6e90\u6570\u7ec4\u4e2d\u7684\u987a\u5e8f\u51b3\u5b9a\u3002"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array<T> array_compact(arr)")),(0,a.kt)("h4",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"arr")," \u2014 \u9700\u8981\u5904\u7406\u7684\u6570\u7ec4."),(0,a.kt)("h4",{id:"returned-value"},"Returned value"),(0,a.kt)("p",null,"\u4e0d\u5b58\u5728\u8fde\u7eed\u91cd\u590d\u5143\u7d20\u7684\u6570\u7ec4."),(0,a.kt)("p",null,"Type: Array."),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u53ea\u652f\u6301\u5728\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528\u3002")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select array_compact([1, 2, 3, 3, null, null, 4, 4]);\n\n+----------------------------------------------------+\n| array_compact(ARRAY(1, 2, 3, 3, NULL, NULL, 4, 4)) |\n+----------------------------------------------------+\n| [1, 2, 3, NULL, 4]                                 |\n+----------------------------------------------------+\n\nselect array_compact(['aaa','aaa','bbb','ccc','ccccc',null, null,'dddd']);\n\n+-------------------------------------------------------------------------------+\n| array_compact(ARRAY('aaa', 'aaa', 'bbb', 'ccc', 'ccccc', NULL, NULL, 'dddd')) |\n+-------------------------------------------------------------------------------+\n| ['aaa', 'bbb', 'ccc', 'ccccc', NULL, 'dddd']                                  |\n+-------------------------------------------------------------------------------+\n\nselect array_compact(['2015-03-13','2015-03-13']);\n\n+--------------------------------------------------+\n| array_compact(ARRAY('2015-03-13', '2015-03-13')) |\n+--------------------------------------------------+\n| ['2015-03-13']                                   |\n+--------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,COMPACT,ARRAY_COMPACT"))}d.isMDXComponent=!0}}]);