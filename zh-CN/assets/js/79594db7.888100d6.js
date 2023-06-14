"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[9364],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"SHOW-FUNCTIONS",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS",id:"sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS",title:"SHOW-FUNCTIONS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-FUNCTIONS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-ENCRYPT-KEY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY"},next:{title:"SHOW-TYPECAST",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST"}},s={},c=[{value:"SHOW-FUNCTIONS",id:"show-functions",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-functions"},"SHOW-FUNCTIONS"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW FUNCTIONS"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u67e5\u770b\u6570\u636e\u5e93\u4e0b\u6240\u6709\u7684\u81ea\u5b9a\u4e49(\u7cfb\u7edf\u63d0\u4f9b)\u7684\u51fd\u6570\u3002\u5982\u679c\u7528\u6237\u6307\u5b9a\u4e86\u6570\u636e\u5e93\uff0c\u90a3\u4e48\u67e5\u770b\u5bf9\u5e94\u6570\u636e\u5e93\u7684\uff0c\u5426\u5219\u76f4\u63a5\u67e5\u8be2\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u9700\u8981\u5bf9\u8fd9\u4e2a\u6570\u636e\u5e93\u62e5\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW")," \u6743\u9650"),(0,a.kt)("p",null,"\u8bed\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [FULL] [BUILTIN] FUNCTIONS [IN|FROM db] [LIKE 'function_pattern']\n")),(0,a.kt)("p",null,"Parameters"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"full"),":\u8868\u793a\u663e\u793a\u51fd\u6570\u7684\u8be6\u7ec6\u4fe1\u606f\n",(0,a.kt)("inlineCode",{parentName:"p"},"builtin"),":\u8868\u793a\u663e\u793a\u7cfb\u7edf\u63d0\u4f9b\u7684\u51fd\u6570\n",(0,a.kt)("inlineCode",{parentName:"p"},"db"),": \u8981\u67e5\u8be2\u7684\u6570\u636e\u5e93\u540d\u5b57\n",(0,a.kt)("inlineCode",{parentName:"p"},"function_pattern"),": \u7528\u6765\u8fc7\u6ee4\u51fd\u6570\u540d\u79f0\u7684\u53c2\u6570")),(0,a.kt)("p",null,"\u8bed\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW GLOBAL [FULL] FUNCTIONS [LIKE 'function_pattern']\n")),(0,a.kt)("p",null,"Parameters"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"global"),":\u8868\u793a\u8981\u5c55\u793a\u7684\u662f\u5168\u5c40\u51fd\u6570\n",(0,a.kt)("inlineCode",{parentName:"p"},"full"),":\u8868\u793a\u663e\u793a\u51fd\u6570\u7684\u8be6\u7ec6\u4fe1\u606f\n",(0,a.kt)("inlineCode",{parentName:"p"},"function_pattern"),": \u7528\u6765\u8fc7\u6ee4\u51fd\u6570\u540d\u79f0\u7684\u53c2\u6570")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'\u6ce8\u610f: "global"\u5173\u952e\u5b57\u5728v2.0\u7248\u672c\u53ca\u4ee5\u540e\u624d\u53ef\u7528')),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show full functions in testDb\\G\n*************************** 1. row ***************************\n        Signature: my_add(INT,INT)\n      Return Type: INT\n    Function Type: Scalar\nIntermediate Type: NULL\n       Properties: {"symbol":"_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_","object_file":"http://host:port/libudfsample.so","md5":"cfe7a362d10f3aaf6c49974ee0f1f878"}\n*************************** 2. row ***************************\n        Signature: my_count(BIGINT)\n      Return Type: BIGINT\n    Function Type: Aggregate\nIntermediate Type: NULL\n       Properties: {"object_file":"http://host:port/libudasample.so","finalize_fn":"_ZN9doris_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE","init_fn":"_ZN9doris_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE","merge_fn":"_ZN9doris_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_","md5":"37d185f80f95569e2676da3d5b5b9d2f","update_fn":"_ZN9doris_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE"}\n*************************** 3. row ***************************\n        Signature: id_masking(BIGINT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"id","origin_function":"concat(left(`id`, 3), `****`, right(`id`, 4))"}\n\n3 rows in set (0.00 sec)\nmysql> show builtin functions in testDb like \'year%\';\n+---------------+\n| Function Name |\n+---------------+\n| year          |\n| years_add     |\n| years_diff    |\n| years_sub     |\n+---------------+\n2 rows in set (0.00 sec)\n    \nmysql> show global full functions\\G;\n*************************** 1. row ***************************\n        Signature: decimal(ALL, INT, INT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"col, precision, scale","origin_function":"CAST(`col` AS decimal(`precision`, `scale`))"}\n*************************** 2. row ***************************\n        Signature: id_masking(BIGINT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"id","origin_function":"concat(left(`id`, 3), `****`, right(`id`, 4))"}\n2 rows in set (0.00 sec)\n    \nmysql> show global functions ;\n+---------------+\n| Function Name |\n+---------------+\n| decimal       |\n| id_masking    |\n+---------------+\n2 rows in set (0.00 sec)\n\n')),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, FUNCTIONS\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);