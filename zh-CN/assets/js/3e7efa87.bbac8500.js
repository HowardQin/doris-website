"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[58313],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=l,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(87462),l=(t(67294),t(3905));const i={title:"field",language:"zh-CN"},a=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/field",id:"version-1.2/sql-manual/sql-functions/string-functions/field",title:"field",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/field.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/field",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/field",draft:!1,tags:[],version:"1.2",frontMatter:{title:"field",language:"zh-CN"},sidebar:"docs",previous:{title:"locate",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/locate"},next:{title:"find_in_set",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/find_in_set"}},s={},c=[{value:"field",id:"field",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"field"},"field"),(0,l.kt)("version",{since:"dev"},(0,l.kt)("p",null,"field")),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"field(Expr e, param1, param2, param3,.....)")),(0,l.kt)("p",null,"\u5728order by\u5b50\u53e5\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u6392\u5e8f\uff0c\u53ef\u4ee5\u5c06expr\u4e2d\u7684\u6570\u636e\u6309\u7167\u6307\u5b9a\u7684param1\uff0c2\uff0c3\u987a\u5e8f\u6392\u5217\u3002\n\u4e0d\u5728param\u53c2\u6570\u4e2d\u7684\u6570\u636e\u4e0d\u4f1a\u53c2\u4e0e\u6392\u5e8f,\u5c06\u4f1a\u653e\u5728\u6700\u524d\u9762,\u53ef\u4ee5\u4f7f\u7528asc,desc\u63a7\u5236\u6574\u4f53\u987a\u5e8f\u3002\n\u5982\u679c\u6709NULL\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528nulls first,nulls last\u63a7\u5236null\u7684\u987a\u5e8f"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nmysql> select k1,k7 from baseall where k1 in (1,2,3) order by field(k1,2,1,3);\n+------+------------+\n| k1   | k7         |\n+------+------------+\n|    2 | wangyu14   |\n|    1 | wangjing04 |\n|    3 | yuanyuan06 |\n+------+------------+\n3 rows in set (0.02 sec)\n\nmysql> select class_name from class_test order by field(class_name,'Suzi','Ben','Henry');\n+------------+\n| class_name |\n+------------+\n| Suzi       |\n| Suzi       |\n| Ben        |\n| Ben        |\n| Henry      |\n| Henry      |\n+------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"field\n")))}f.isMDXComponent=!0}}]);