"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[46626],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,f=c["".concat(a,".").concat(m)]||c[m]||p[m]||l;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<l;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const l={title:"substring_index",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/substring_index",id:"version-1.2/sql-manual/sql-functions/string-functions/substring_index",title:"substring_index",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/substring_index.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/substring_index",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/substring_index",draft:!1,tags:[],version:"1.2",frontMatter:{title:"substring_index",language:"en"},sidebar:"docs",previous:{title:"split_by_string",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/split_by_string"},next:{title:"money_format",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/money_format"}},a={},u=[{value:"substring_index",id:"substring_index",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"substring_index"},"substring_index"),(0,i.kt)("h3",{id:"name"},"Name"),(0,i.kt)("version",{since:"1.2"},(0,i.kt)("p",null,"SUBSTRING_INDEX")),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR substring_index(VARCHAR content, VARCHAR delimiter, INT field)")),(0,i.kt)("p",null,"Split ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," to two parts at position where the ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),"s of ",(0,i.kt)("inlineCode",{parentName:"p"},"delimiter")," stays, return one of them according to below rules:\nif ",(0,i.kt)("inlineCode",{parentName:"p"},"field")," is positive, return the left part;\nelse if ",(0,i.kt)("inlineCode",{parentName:"p"},"field")," is negative, return the right part;\nif ",(0,i.kt)("inlineCode",{parentName:"p"},"field")," is zero, return an empty string when ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," is not null, else will return null."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delimiter")," is case sensitive and multi-byte safe."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delimiter")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"field")," parameter should be constant.")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mysql> select substring_index("hello world", " ", 1);\n+----------------------------------------+\n| substring_index("hello world", " ", 1) |\n+----------------------------------------+\n| hello                                  |\n+----------------------------------------+\nmysql> select substring_index("hello world", " ", 2);\n+----------------------------------------+\n| substring_index("hello world", " ", 2) |\n+----------------------------------------+\n| hello world                            |\n+----------------------------------------+\nmysql> select substring_index("hello world", " ", -1);\n+-----------------------------------------+\n| substring_index("hello world", " ", -1) |\n+-----------------------------------------+\n| world                                   |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", -2);\n+-----------------------------------------+\n| substring_index("hello world", " ", -2) |\n+-----------------------------------------+\n| hello world                             |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", -3);\n+-----------------------------------------+\n| substring_index("hello world", " ", -3) |\n+-----------------------------------------+\n| hello world                             |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", 0);\n+----------------------------------------+\n| substring_index("hello world", " ", 0) |\n+----------------------------------------+\n|                                        |\n+----------------------------------------+\n')),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SUBSTRING_INDEX, SUBSTRING\n")))}p.isMDXComponent=!0}}]);