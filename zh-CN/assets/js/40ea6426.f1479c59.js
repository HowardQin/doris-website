"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68435],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(t),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||l;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var i=2;i<l;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},80903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=t(87462),o=(t(67294),t(3905));const l={title:"workload_groups",language:"zh-CN"},a=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/workload-group",id:"sql-manual/sql-functions/table-functions/workload-group",title:"workload_groups",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/workload-group.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/workload-group",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/workload-group",draft:!1,tags:[],version:"current",frontMatter:{title:"workload_groups",language:"zh-CN"},sidebar:"docs",previous:{title:"backends",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/backends"},next:{title:"WINDOW-FUNCTION-LAG",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG"}},u={},i=[{value:"<code>workload_groups</code>",id:"workload_groups",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"workload_groups"},(0,o.kt)("inlineCode",{parentName:"h2"},"workload_groups")),(0,o.kt)("h3",{id:"name"},"Name"),(0,o.kt)("version",{since:"dev"},(0,o.kt)("p",null,"workload_groups")),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210 workload_groups \u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u8d44\u6e90\u7ec4\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8efrom\u5b50\u53e5\u4e2d\u3002"),(0,o.kt)("h4",{id:"syntax"},"syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"workload_groups()")),(0,o.kt)("p",null,"workload_groups()\u8868\u7ed3\u6784\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> desc function workload_groups();\n+-------+-------------+------+-------+---------+-------+\n| Field | Type        | Null | Key   | Default | Extra |\n+-------+-------------+------+-------+---------+-------+\n| Id    | BIGINT      | No   | false | NULL    | NONE  |\n| Name  | STRING      | No   | false | NULL    | NONE  |\n| Item  | STRING      | No   | false | NULL    | NONE  |\n| Value | STRING      | No   | false | NULL    | NONE  |\n+-------+-------------+------+-------+---------+-------+\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select * from workload_groups()\\G\n+-------+--------+--------------+-------+\n| Id    | Name   | Item         | Value |\n+-------+--------+--------------+-------+\n| 11001 | normal | memory_limit | 100%  |\n| 11001 | normal | cpu_share    | 10    |\n+-------+--------+--------------+-------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"workload_groups\n")))}d.isMDXComponent=!0}}]);