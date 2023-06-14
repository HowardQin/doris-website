"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[43723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"HELP",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Utility-Statements/HELP",id:"sql-manual/sql-reference/Utility-Statements/HELP",title:"HELP",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Utility-Statements/HELP.md",sourceDirName:"sql-manual/sql-reference/Utility-Statements",slug:"/sql-manual/sql-reference/Utility-Statements/HELP",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/HELP",draft:!1,tags:[],version:"current",frontMatter:{title:"HELP",language:"en"},sidebar:"docs",previous:{title:"IN",permalink:"/docs/dev/sql-manual/sql-reference/Operators/in"},next:{title:"USE",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/USE"}},s={},c=[{value:"HELP",id:"help",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"help"},"HELP"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"HELP"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The directory of help can be queried by changing the command"),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"HELP <item>\n")),(0,a.kt)("p",null,"All Doris commands can be listed with ",(0,a.kt)("inlineCode",{parentName:"p"},"help")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"List of all MySQL commands:\nNote that all text commands must be first on line and end with ';'\n? (\\?) Synonym for `help'.\nclear (\\c) Clear the current input statement.\nconnect (\\r) Reconnect to the server. Optional arguments are db and host.\ndelimiter (\\d) Set statement delimiter.\nedit (\\e) Edit command with $EDITOR.\nego (\\G) Send command to mysql server, display result vertically.\nexit (\\q) Exit mysql. Same as quit.\ngo (\\g) Send command to mysql server.\nhelp (\\h) Display this help.\nnopager (\\n) Disable pager, print to stdout.\nnote (\\t) Don't write into outfile.\npager (\\P) Set PAGER [to_pager]. Print the query results via PAGER.\nprint (\\p) Print current command.\nprompt (\\R) Change your mysql prompt.\nquit (\\q) Quit mysql.\nrehash (\\#) Rebuild completion hash.\nsource (\\.) Execute an SQL script file. Takes a file name as an argument.\nstatus (\\s) Get status information from the server.\nsystem (\\!) Execute a system shell command.\ntee (\\T) Set outfile [to_outfile]. Append everything into given outfile.\nuse (\\u) Use another database. Takes database name as argument.\ncharset (\\C) Switch to another charset. Might be needed for processing binlog with multi-byte charsets.\nwarnings (\\W) Show warnings after every statement.\nnowarning (\\w) Don't show warnings after every statement.\nresetconnection(\\x) Clean session context.\n\nFor server side help, type 'help contents'\n")),(0,a.kt)("p",null,"Get the Doris SQL help contents via ",(0,a.kt)("inlineCode",{parentName:"p"},"help contents")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"Many help items for your request exist.\nTo make a more specific request, please type 'help <item>',\nwhere <item> is one of the following\ncategories:\n   sql-functions\n   sql-statements\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"List all SQL help contents of Doris"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"help contents\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The command to list all function directories of the Doris cluster"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"help sql-functions\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"List all functions under the date function"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"help date-time-functions\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HELP\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);