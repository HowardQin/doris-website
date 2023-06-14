"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14769],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},11204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={title:"conv",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/conv",id:"sql-manual/sql-functions/math-functions/conv",title:"conv",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/math-functions/conv.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/conv",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/conv",draft:!1,tags:[],version:"current",frontMatter:{title:"conv",language:"en"},sidebar:"docs",previous:{title:"HLL_HASH",permalink:"/docs/dev/sql-manual/sql-functions/hll-functions/hll_hash"},next:{title:"bin",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/bin"}},c={},s=[{value:"conv",id:"conv",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"conv"},"conv"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"VARCHAR CONV(VARCHAR input, TINYINT from_base, TINYINT to_base)\nVARCHAR CONV(BIGINT input, TINYINT from_base, TINYINT to_base)\n")),(0,o.kt)("p",null,"Convert the input number to the target base. The input base range should be within ",(0,o.kt)("inlineCode",{parentName:"p"},"[2,36]"),". "),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL [test]> SELECT CONV(15,10,2);\n+-----------------+\n| conv(15, 10, 2) |\n+-----------------+\n| 1111            |\n+-----------------+\n\nMySQL [test]> SELECT CONV('ff',16,10);\n+--------------------+\n| conv('ff', 16, 10) |\n+--------------------+\n| 255                |\n+--------------------+\n\nMySQL [test]> SELECT CONV(230,10,16);\n+-------------------+\n| conv(230, 10, 16) |\n+-------------------+\n| E6                |\n+-------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CONV\n")))}f.isMDXComponent=!0}}]);