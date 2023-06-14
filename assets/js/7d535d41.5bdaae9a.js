"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,b=u["".concat(o,".").concat(g)]||u[g]||d[g]||s;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=g;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},71085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const s={title:"split_by_string",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/split_by_string",id:"version-1.2/sql-manual/sql-functions/string-functions/split_by_string",title:"split_by_string",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/split_by_string.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/split_by_string",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/split_by_string",draft:!1,tags:[],version:"1.2",frontMatter:{title:"split_by_string",language:"en"},sidebar:"docs",previous:{title:"split_part",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/split_part"},next:{title:"substring_index",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/substring_index"}},o={},p=[{value:"split_by_string",id:"split_by_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value(s)",id:"returned-values",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"split_by_string"},"split_by_string"),(0,i.kt)("version",{since:"1.2.2"}),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY<STRING> split_by_string(STRING s, STRING separator)")),(0,i.kt)("p",null,"Splits a string into substrings separated by a string. It uses a constant string separator of multiple characters as the separator. If the string separator is empty, it will split the string s into an array of single characters."),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"separator")," \u2014 The separator. Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"s")," \u2014 The string to split. Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("h4",{id:"returned-values"},"Returned value(s)"),(0,i.kt)("p",null,"Returns an array of selected substrings. Empty substrings may be selected when:"),(0,i.kt)("p",null,"A non-empty separator occurs at the beginning or end of the string;"),(0,i.kt)("p",null,"There are multiple consecutive separators;"),(0,i.kt)("p",null,"The original string s is empty."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Array(String)")),(0,i.kt)("h3",{id:"notice"},"notice"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT split_by_string('1, 2 3, 4,5, abcde', ', ');\nselect split_by_string('a1b1c1d','1');\n+---------------------------------+\n| split_by_string('a1b1c1d', '1') |\n+---------------------------------+\n| ['a', 'b', 'c', 'd']            |\n+---------------------------------+\n\nselect split_by_string(',,a,b,c,',',');\n+----------------------------------+\n| split_by_string(',,a,b,c,', ',') |\n+----------------------------------+\n| ['', '', 'a', 'b', 'c', '']      |\n+----------------------------------+\n\nSELECT split_by_string(NULL,',');\n+----------------------------+\n| split_by_string(NULL, ',') |\n+----------------------------+\n| NULL                       |\n+----------------------------+\n\nselect split_by_string('a,b,c,abcde',',');\n+-------------------------------------+\n| split_by_string('a,b,c,abcde', ',') |\n+-------------------------------------+\n| ['a', 'b', 'c', 'abcde']            |\n+-------------------------------------+\n\nselect split_by_string('1,,2,3,,4,5,,abcde', ',,');\n+---------------------------------------------+\n| split_by_string('1,,2,3,,4,5,,abcde', ',,') |\n+---------------------------------------------+\n| ['1', '2,3', '4,5', 'abcde']                |\n+---------------------------------------------+\n\nselect split_by_string(',,,,',',,');\n+-------------------------------+\n| split_by_string(',,,,', ',,') |\n+-------------------------------+\n| ['', '', '']                  |\n+-------------------------------+\n\nselect split_by_string(',,a,,b,,c,,',',,');\n+--------------------------------------+\n| split_by_string(',,a,,b,,c,,', ',,') |\n+--------------------------------------+\n| ['', 'a', 'b', 'c', '']              |\n+--------------------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"SPLIT_BY_STRING,SPLIT"))}d.isMDXComponent=!0}}]);