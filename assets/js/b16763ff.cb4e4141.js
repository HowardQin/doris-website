"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"CREATE-FUNCTION",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",title:"CREATE-FUNCTION",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-FUNCTION",language:"en"},sidebar:"docs",previous:{title:"CREATE-SQL-BLOCK-RULE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"},next:{title:"CREATE-CATALOG",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG"}},p={},s=[{value:"CREATE-FUNCTION",id:"create-function",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-function"},"CREATE-FUNCTION"),(0,i.kt)("h3",{id:"name"},"Name"),(0,i.kt)("p",null,"CREATE FUNCTION"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"This statement creates a custom function. Executing this command requires the user to have ",(0,i.kt)("inlineCode",{parentName:"p"},"ADMIN")," privileges."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"function_name")," contains the database name, then the custom function will be created in the corresponding database, otherwise the function will be created in the database where the current session is located. The name and parameters of the new function cannot be the same as the existing functions in the current namespace, otherwise the creation will fail. But only with the same name and different parameters can be created successfully."),(0,i.kt)("p",null,"grammar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE [GLOBAL] [AGGREGATE] [ALIAS] FUNCTION function_name\n    (arg_type [, ...])\n    [RETURNS ret_type]\n    [INTERMEDIATE inter_type]\n    [WITH PARAMETER(param [,...]) AS origin_function]\n    [PROPERTIES ("key" = "value" [, ...]) ]\n')),(0,i.kt)("p",null,"Parameter Description:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GLOBAL"),": If there is this item, it means that the created function is a global function.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AGGREGATE"),": If there is this item, it means that the created function is an aggregate function."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ALIAS"),": If there is this item, it means that the created function is an alias function.")),(0,i.kt)("p",null," If the above two items are absent, it means that the created function is a scalar function"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function_name"),": The name of the function to be created, which can include the name of the database. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"db1.my_func"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"arg_type"),": The parameter type of the function, which is the same as the type defined when creating the table. Variable-length parameters can be represented by ",(0,i.kt)("inlineCode",{parentName:"p"},", ..."),". If it is a variable-length type, the type of the variable-length parameter is the same as that of the last non-variable-length parameter."),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("strong",{parentName:"p"},"NOTE"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ALIAS FUNCTION")," does not support variable-length arguments and must have at least one argument.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ret_type"),": Required for creating new functions. If you are aliasing an existing function, you do not need to fill in this parameter."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inter_type"),": The data type used to represent the intermediate stage of the aggregation function.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"param"),": used to represent the parameter of the alias function, including at least one.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"origin_function"),": used to represent the original function corresponding to the alias function.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"properties"),": Used to set properties related to aggregate functions and scalar functions. The properties that can be set include:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"object_file"),": The URL path of the custom function dynamic library. Currently, only HTTP/HTTPS protocol is supported. This path needs to remain valid for the entire life cycle of the function. This option is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"symbol"),": The function signature of the scalar function, which is used to find the function entry from the dynamic library. This option is required for scalar functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"init_fn"),": The initialization function signature of the aggregate function. Required for aggregate functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"update_fn"),": update function signature of aggregate function. Required for aggregate functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"merge_fn"),": Merge function signature of aggregate function. Required for aggregate functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"serialize_fn"),": Serialize function signature of aggregate function. Optional for aggregate functions, if not specified, the default serialization function will be used")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"finalize_fn"),": The function signature of the aggregate function to get the final result. Optional for aggregate functions, if not specified, the default get-result function will be used")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"md5"),": The MD5 value of the function dynamic link library, which is used to verify whether the downloaded content is correct. This option is optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"prepare_fn"),": The function signature of the prepare function of the custom function, which is used to find the prepare function entry from the dynamic library. This option is optional for custom functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"close_fn"),": The function signature of the close function of the custom function, which is used to find the close function entry from the dynamic library. This option is optional for custom functions"))))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a custom scalar function"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n"symbol" = "_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n"object_file" = "http://host:port/libmyadd.so"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a custom scalar function with prepare/close functions"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n"symbol" = "_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n"prepare_fn" = "_ZN9doris_udf14AddUdf_prepareEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n"close_fn" = "_ZN9doris_udf12AddUdf_closeEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n"object_file" = "http://host:port/libmyadd.so"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a custom aggregate function"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE AGGREGATE FUNCTION my_count (BIGINT) RETURNS BIGINT PROPERTIES (\n        "init_fn"="_ZN9doris_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE",\n        "update_fn"="_ZN9doris_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE",\n        "merge_fn"="_ZN9doris_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_",\n        "finalize_fn"="_ZN9doris_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE",\n        "object_file"="http://host:port/libudasample.so"\n);\n')))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a scalar function with variable length arguments"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION strconcat(varchar, ...) RETURNS varchar properties (\n"symbol" = "_ZN9doris_udf6StrConcatUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n"object_file" = "http://host:port/libmyStrConcat.so"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a custom alias function"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ALIAS FUNCTION id_masking(INT) WITH PARAMETER(id) AS CONCAT(LEFT(id, 3), '****', RIGHT(id, 4));\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a global custom scalar function"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE GLOBAL FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n"symbol" = "_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n"object_file" = "http://host:port/libmyadd.so"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a global custom alias function"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE GLOBAL ALIAS FUNCTION id_masking(INT) WITH PARAMETER(id) AS CONCAT(LEFT(id, 3), '****', RIGHT(id, 4));\n")))),(0,i.kt)("h3",{id:"keywords"},"Keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE, FUNCTION\n")),(0,i.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);