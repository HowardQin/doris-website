"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),b=l,d=p["".concat(s,".").concat(b)]||p[b]||f[b]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={title:"elt",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/elt",id:"version-1.2/sql-manual/sql-functions/string-functions/elt",title:"elt",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/elt.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/elt",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/elt",draft:!1,tags:[],version:"1.2",frontMatter:{title:"elt",language:"zh-CN"},sidebar:"docs",previous:{title:"unhex",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/unhex"},next:{title:"instr",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/instr"}},s={},c=[{value:"elt",id:"elt",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"elt"},"elt"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR elt(INT, VARCHAR,...)")),(0,l.kt)("p",null,"\u5728\u6307\u5b9a\u7684\u7d22\u5f15\u5904\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u5982\u679c\u6307\u5b9a\u7684\u7d22\u5f15\u5904\u6ca1\u6709\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56deNULL\u3002"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select elt(1, 'aaa', 'bbb');\n+----------------------+\n| elt(1, 'aaa', 'bbb') |\n+----------------------+\n| aaa                  |\n+----------------------+\nmysql> select elt(2, 'aaa', 'bbb');\n+-----------------------+\n| elt(2, 'aaa', 'bbb')  |\n+-----------------------+\n| bbb                   |\n+-----------------------+\nmysql> select elt(0, 'aaa', 'bbb');\n+----------------------+\n| elt(0, 'aaa', 'bbb') |\n+----------------------+\n| NULL                 |\n+----------------------+\nmysql> select elt(2, 'aaa', 'bbb');\n+-----------------------+\n| elt(3, 'aaa', 'bbb')  |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ELT\n")))}f.isMDXComponent=!0}}]);