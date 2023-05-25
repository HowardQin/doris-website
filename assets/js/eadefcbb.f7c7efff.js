"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[45760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"DECIMAL",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/DECIMAL",id:"version-1.2/sql-manual/sql-reference/Data-Types/DECIMAL",title:"DECIMAL",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Types/DECIMAL.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DECIMAL",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/DECIMAL",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DECIMAL",language:"en"},sidebar:"docs",previous:{title:"DOUBLE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/DOUBLE"},next:{title:"DECIMALV3",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/DECIMALV3"}},s={},c=[{value:"DECIMAL",id:"decimal",level:2},{value:"Description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"decimal"},"DECIMAL"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"DECIMAL (M ","[,D]",")"),(0,a.kt)("p",null,"High-precision fixed-point, M stands for the total number of significant numbers (precision), D stands for the maximum number of decimal points (scale).\nThe range of M is ","[1, 27]",", the range of D is ","[0, 9]",", the integer part is ","[1, 18]","."),(0,a.kt)("p",null,"in addition, M must be greater than or equal to the value of D. "),(0,a.kt)("p",null,"The default value is DECIMAL(9, 0)."),(0,a.kt)("h3",{id:"note"},"note"),(0,a.kt)("p",null,"We intend to delete this type in 2024. At this stage, Doris prohibits creating tables containing the ",(0,a.kt)("inlineCode",{parentName:"p"},"DECIMAL")," type by default. If you need to use it, you need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"disable_decimalv2 = false")," in the FE's config and restart the FE."),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"DECIMAL"))}d.isMDXComponent=!0}}]);