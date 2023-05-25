"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[16033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||l;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"PERCENTILE_ARRAY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/percentile_array",id:"sql-manual/sql-functions/aggregate-functions/percentile_array",title:"PERCENTILE_ARRAY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/percentile_array.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/percentile_array",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile_array",draft:!1,tags:[],version:"current",frontMatter:{title:"PERCENTILE_ARRAY",language:"zh-CN"},sidebar:"docs",previous:{title:"PERCENTILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile"},next:{title:"HLL_UNION_AGG",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/hll_union_agg"}},c={},s=[{value:"PERCENTILE_ARRAY",id:"percentile_array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"percentile_array"},"PERCENTILE_ARRAY"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY_DOUBLE PERCENTILE_ARRAY(BIGINT, ARRAY_DOUBLE p)")),(0,a.kt)("p",null,"\u8ba1\u7b97\u7cbe\u786e\u7684\u767e\u5206\u4f4d\u6570\uff0c\u9002\u7528\u4e8e\u5c0f\u6570\u636e\u91cf\u3002\u5148\u5bf9\u6307\u5b9a\u5217\u964d\u5e8f\u6392\u5217\uff0c\u7136\u540e\u53d6\u7cbe\u786e\u7684\u7b2c p \u4f4d\u767e\u5206\u6570\u3002\n\u8fd4\u56de\u503c\u4e3a\u4f9d\u6b21\u53d6\u6570\u7ec4p\u4e2d\u6307\u5b9a\u7684\u767e\u5206\u6570\u7ec4\u6210\u7684\u7ed3\u679c\u3002\n\u53c2\u6570\u8bf4\u660e:\nexpr: \u5fc5\u586b\u3002\u503c\u4e3a\u6574\u6570\uff08\u6700\u5927\u4e3abigint\uff09 \u7c7b\u578b\u7684\u5217\u3002\np: \u9700\u8981\u7cbe\u786e\u7684\u767e\u5206\u4f4d\u6570, \u7531\u5e38\u91cf\u7ec4\u6210\u7684\u6570\u7ec4, \u53d6\u503c\u4e3a ","[0.0,1.0]","\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select percentile_array(k1,[0.3,0.5,0.9]) from baseall;\n+----------------------------------------------+\n| percentile_array(`k1`, ARRAY(0.3, 0.5, 0.9)) |\n+----------------------------------------------+\n| [5.2, 8, 13.6]                               |\n+----------------------------------------------+\n1 row in set (0.02 sec)\n\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"PERCENTILE_ARRAY"))}f.isMDXComponent=!0}}]);