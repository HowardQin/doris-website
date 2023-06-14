"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66736],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>j});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),b=r,j=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.createElement(j,s(s({ref:e},p),{},{components:n})):a.createElement(j,s({ref:e},p))}));function j(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=b;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[u]="string"==typeof t?t:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},29605:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"jsonb_extract",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/jsonb_extract",id:"version-1.2/sql-manual/sql-functions/json-functions/jsonb_extract",title:"jsonb_extract",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/json-functions/jsonb_extract.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/jsonb_extract",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_extract",draft:!1,tags:[],version:"1.2",frontMatter:{title:"jsonb_extract",language:"en"},sidebar:"docs",previous:{title:"jsonb_parse",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_parse"},next:{title:"jsonb_exists_path",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_exists_path"}},i={},c=[{value:"jsonb_extract",id:"jsonb_extract",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"jsonb_exists_path and jsonb_type",id:"jsonb_exists_path-and-jsonb_type",level:2},{value:"description",id:"description-1",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"jsonb_extract"},"jsonb_extract"),(0,r.kt)("version",{since:"1.2.0"},(0,r.kt)("p",null,"jsonb_extract")),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"JSONB jsonb_extract(JSONB j, VARCHAR json_path)\nBOOLEAN jsonb_extract_isnull(JSONB j, VARCHAR json_path)\nBOOLEAN jsonb_extract_bool(JSONB j, VARCHAR json_path)\nINT jsonb_extract_int(JSONB j, VARCHAR json_path)\nBIGINT jsonb_extract_bigint(JSONB j, VARCHAR json_path)\nDOUBLE jsonb_extract_double(JSONB j, VARCHAR json_path)\nSTRING jsonb_extract_string(JSONB j, VARCHAR json_path)\n")),(0,r.kt)("p",null,"jsonb_extract functions extract field specified by json_path from JSONB. A series of functions are provided for different datatype."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jsonb_extract extract and return JSONB datatype"),(0,r.kt)("li",{parentName:"ul"},"jsonb_extract_isnull check if the field is json null and return BOOLEAN datatype"),(0,r.kt)("li",{parentName:"ul"},"jsonb_extract_bool extract and return BOOLEAN datatype"),(0,r.kt)("li",{parentName:"ul"},"jsonb_extract_int extract and return INT datatype"),(0,r.kt)("li",{parentName:"ul"},"jsonb_extract_bigint extract and return BIGINT datatype"),(0,r.kt)("li",{parentName:"ul"},"jsonb_extract_double extract and return DOUBLE datatype"),(0,r.kt)("li",{parentName:"ul"},"jsonb_extract_STRING extract and return STRING datatype")),(0,r.kt)("p",null,"Exception handling is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if the field specified by json_path does not exist, return NULL"),(0,r.kt)("li",{parentName:"ul"},"if datatype of the field specified by json_path is not the same with type of jsonb_extract_t, return t if it can be cast to t else NULL")),(0,r.kt)("h2",{id:"jsonb_exists_path-and-jsonb_type"},"jsonb_exists_path and jsonb_type"),(0,r.kt)("h3",{id:"description-1"},"description"),(0,r.kt)("h4",{id:"syntax-1"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"BOOLEAN jsonb_exists_path(JSONB j, VARCHAR json_path)\nSTRING jsonb_type(JSONB j, VARCHAR json_path)\n")),(0,r.kt)("p",null,"There are two extra functions to check field existence and type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jsonb_exists_path check the existence of the field specified by json_path, return TRUE or FALS"),(0,r.kt)("li",{parentName:"ul"},"jsonb_exists_path get the type as follows of the field specified by json_path, return NULL if it does not exist",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"object"),(0,r.kt)("li",{parentName:"ul"},"array"),(0,r.kt)("li",{parentName:"ul"},"null"),(0,r.kt)("li",{parentName:"ul"},"bool"),(0,r.kt)("li",{parentName:"ul"},"int"),(0,r.kt)("li",{parentName:"ul"},"bigint"),(0,r.kt)("li",{parentName:"ul"},"double"),(0,r.kt)("li",{parentName:"ul"},"string")))),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("p",null,"refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Types/JSONB"},"jsonb tutorial")," for more."),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"JSONB, JSON, jsonb_extract, jsonb_extract_isnull, jsonb_extract_bool, jsonb_extract_int, jsonb_extract_bigint, jsonb_extract_double, jsonb_extract_string, jsonb_exists_path, jsonb_type"))}d.isMDXComponent=!0}}]);