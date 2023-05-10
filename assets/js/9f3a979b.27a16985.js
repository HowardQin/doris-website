"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[15926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,f=u["".concat(c,".").concat(s)]||u[s]||m[s]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},23949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"C++ Format Code",language:"en"},i=void 0,l={unversionedId:"developer-guide/cpp-format-code",id:"developer-guide/cpp-format-code",title:"C++ Format Code",description:"\x3c!--",source:"@site/community/developer-guide/cpp-format-code.md",sourceDirName:"developer-guide",slug:"/developer-guide/cpp-format-code",permalink:"/community/developer-guide/cpp-format-code",draft:!1,tags:[],version:"current",frontMatter:{title:"C++ Format Code",language:"en"},sidebar:"community",previous:{title:"Java Format Code",permalink:"/community/developer-guide/java-format-code"},next:{title:"C++ Code Diagnostic",permalink:"/community/developer-guide/cpp-diagnostic-code"}},c={},d=[{value:"Code style customization",id:"code-style-customization",level:2},{value:"Environmental preparation",id:"environmental-preparation",level:2},{value:"Download and install clang-format",id:"download-and-install-clang-format",level:3},{value:"clang-format plugin",id:"clang-format-plugin",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"Command line operation",id:"command-line-operation",level:3},{value:"Use clang-format in IDE or Editor",id:"use-clang-format-in-ide-or-editor",level:3},{value:"Clion",id:"clion",level:4},{value:"VS Code",id:"vs-code",level:4}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"c-code-formatting"},"C++ code formatting"),(0,r.kt)("p",null,"Doris uses clang-format for code formatting, and provides a package script in the build-support directory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"clang-format.sh"),"."),(0,r.kt)("p",{parentName:"li"},"  Format the C/C++ code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"be/src")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"be/test")," directories.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"check-format.sh"),"."),(0,r.kt)("p",{parentName:"li"},"  Check the C/C++ code format in the ",(0,r.kt)("inlineCode",{parentName:"p"},"be/src")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"be/test")," directories, and output diff, but the content of the file will not be modified."))),(0,r.kt)("h2",{id:"code-style-customization"},"Code style customization"),(0,r.kt)("p",null,"The code style of Doris is slightly modified on the basis of Google Style and is customized as a ",(0,r.kt)("inlineCode",{parentName:"p"},".clang-format")," file located in the root directory of Doris."),(0,r.kt)("p",null,"Currently, the ",(0,r.kt)("inlineCode",{parentName:"p"},".clang-format")," configuration file is adapted to versions above clang-format-16.0.0."),(0,r.kt)("p",null,"The code that you do not want to be formatted is recorded in the ",(0,r.kt)("inlineCode",{parentName:"p"},".clang-format-ignore")," file. These codes usually come from third-party code bases, and it is recommended to keep the original code style."),(0,r.kt)("h2",{id:"environmental-preparation"},"Environmental preparation"),(0,r.kt)("p",null,"You need to download and install clang-format, or you can use the clang-format plug-in provided by IDE or Editor, as described below."),(0,r.kt)("h3",{id:"download-and-install-clang-format"},"Download and install clang-format"),(0,r.kt)("p",null,"The current doris uses clang-format 16 for code formatting (different versions of clang-format may produce different code formats)."),(0,r.kt)("p",null,"Linux: You can use the LDB toolchain directly, which already comes with a corresponding version of clang-format. Or install or compile the binary by yourself in other ways."),(0,r.kt)("p",null,"Mac: ",(0,r.kt)("inlineCode",{parentName:"p"},"brew install clang-format@16")),(0,r.kt)("p",null,"LDB toolchain:"),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("a",{parentName:"p",href:"/docs/install/source-install/compilation-with-ldb-toolchain"},"LDB toolchain"),",\nthe latest version (>= v0.17) of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen/releases"},"LDB toolchain")," has already included clang-format with 16.0.0 version."),(0,r.kt)("h3",{id:"clang-format-plugin"},"clang-format plugin"),(0,r.kt)("p",null,'Clion IDE can use the plug-in "ClangFormat", search and download in ',(0,r.kt)("inlineCode",{parentName:"p"},"File->Setting->Plugins"),". However, you need to confirm whether the clang-format version is 16."),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("h3",{id:"command-line-operation"},"Command line operation"),(0,r.kt)("p",null,"cd to the root directory of Doris, and then execute the following command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"build-support/clang-format.sh")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The ",(0,r.kt)("inlineCode",{parentName:"p"},"clang-format.sh")," script requires python 3 to be installed on your machine")),(0,r.kt)("h3",{id:"use-clang-format-in-ide-or-editor"},"Use clang-format in IDE or Editor"),(0,r.kt)("h4",{id:"clion"},"Clion"),(0,r.kt)("p",null,"If Clion uses a plug-in, just click ",(0,r.kt)("inlineCode",{parentName:"p"},"Reformat Code"),"."),(0,r.kt)("h4",{id:"vs-code"},"VS Code"),(0,r.kt)("p",null,"VS Code needs to install the extension Clang-Format, but you need to provide the location of the clang-format execution program."),(0,r.kt)("p",null,'Open the VS Code configuration page, directly search for "clang_format", and fill in'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"clang_format_path": "$clang-format path$",\n"clang_format_style": "file"\n')),(0,r.kt)("p",null,"Then, right-click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Format Document"),"."))}m.isMDXComponent=!0}}]);