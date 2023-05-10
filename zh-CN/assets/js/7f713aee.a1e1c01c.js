"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[40111],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),i=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return o.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=i(t),k=r,y=p["".concat(u,".").concat(k)]||p[k]||d[k]||l;return t?o.createElement(y,s(s({ref:n},c),{},{components:t})):o.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=k;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var i=2;i<l;i++)s[i]=t[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},44868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var o=t(87462),r=(t(67294),t(3905));const l={title:"get_json_double",language:"zh-CN"},s=void 0,a={unversionedId:"sql-manual/sql-functions/json-functions/get_json_double",id:"version-1.2/sql-manual/sql-functions/json-functions/get_json_double",title:"get_json_double",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/json-functions/get_json_double.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/get_json_double",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/get_json_double",draft:!1,tags:[],version:"1.2",frontMatter:{title:"get_json_double",language:"zh-CN"},sidebar:"docs",previous:{title:"jsonb_type",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_type"},next:{title:"get_json_int",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/get_json_int"}},u={},i=[{value:"get_json_double",id:"get_json_double",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get_json_double"},"get_json_double"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DOUBLE get_json_double(VARCHAR json_str, VARCHAR json_path)")),(0,r.kt)("p",null,"\u89e3\u6790\u5e76\u83b7\u53d6 json \u5b57\u7b26\u4e32\u5185\u6307\u5b9a\u8def\u5f84\u7684\u6d6e\u70b9\u578b\u5185\u5bb9\u3002\n\u5176\u4e2d json_path \u5fc5\u987b\u4ee5 $ \u7b26\u53f7\u4f5c\u4e3a\u5f00\u5934\uff0c\u4f7f\u7528 . \u4f5c\u4e3a\u8def\u5f84\u5206\u5272\u7b26\u3002\u5982\u679c\u8def\u5f84\u4e2d\u5305\u542b . \uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u53cc\u5f15\u53f7\u5305\u56f4\u3002\n\u4f7f\u7528 ","[ ]",' \u8868\u793a\u6570\u7ec4\u4e0b\u6807\uff0c\u4ece 0 \u5f00\u59cb\u3002\npath \u7684\u5185\u5bb9\u4e0d\u80fd\u5305\u542b ", ',"[ \u548c ]","\u3002\n\u5982\u679c json_string \u683c\u5f0f\u4e0d\u5bf9\uff0c\u6216 json_path \u683c\u5f0f\u4e0d\u5bf9\uff0c\u6216\u65e0\u6cd5\u627e\u5230\u5339\u914d\u9879\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u63a8\u8350\u4f7f\u7528jsonb\u7c7b\u578b\u548cjsonb_extract_XXX\u51fd\u6570\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\u83b7\u53d6 key \u4e3a "k1" \u7684 value')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_double(\'{"k1":1.3, "k2":"2"}\', "$.k1");\n+-------------------------------------------------+\n| get_json_double(\'{"k1":1.3, "k2":"2"}\', \'$.k1\') |\n+-------------------------------------------------+\n|                                             1.3 |\n+-------------------------------------------------+\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'\u83b7\u53d6 key \u4e3a "my.key" \u7684\u6570\u7ec4\u4e2d\u7b2c\u4e8c\u4e2a\u5143\u7d20')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\');\n+---------------------------------------------------------------------------+\n| get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\') |\n+---------------------------------------------------------------------------+\n|                                                                       2.2 |\n+---------------------------------------------------------------------------+\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u4e8c\u7ea7\u8def\u5f84\u4e3a k1.key -> k2 \u7684\u6570\u7ec4\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u5143\u7d20")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\');\n+---------------------------------------------------------------------+\n| get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\') |\n+---------------------------------------------------------------------+\n|                                                                 1.1 |\n+---------------------------------------------------------------------+\n')),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"GET_JSON_DOUBLE,GET,JSON,DOUBLE"))}d.isMDXComponent=!0}}]);