"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[1591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>E});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,E=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(E,o(o({ref:t},c),{},{components:n})):a.createElement(E,o({ref:t},c))}));function E(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"ALTER-USER",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",id:"sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",title:"ALTER-USER",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",permalink:"/docs/dev/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-USER",language:"en"},sidebar:"docs",previous:{title:"SET-PASSWORD",permalink:"/docs/dev/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD"},next:{title:"ALTER-SYSTEM-DROP-FOLLOWER",permalink:"/docs/dev/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER"}},p={},s=[{value:"ALTER USER",id:"alter-user",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"alter-user"},"ALTER USER"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"ALTER USER"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The ALTER USER command is used to modify a user's account attributes, including passwords, and password policies, etc."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that."),(0,r.kt)("p",{parentName:"blockquote"},"This command give over supports modifying user roles from versions 2.0. Please use ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Account-Management-Statements/GRANT"},"GRANT")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Account-Management-Statements/REVOKE"},"REVOKE")," for related operations")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER [IF EXISTS] user_identity [IDENTIFIED BY 'password']\n[password_policy]\n\nuser_identity:\n    'user_name'@'host'\n\npassword_policy:\n\n    1. PASSWORD_HISTORY [n|DEFAULT]\n    2. PASSWORD_EXPIRE [DEFAULT|NEVER|INTERVAL n DAY/HOUR/SECOND]\n    3. FAILED_LOGIN_ATTEMPTS n\n    4. PASSWORD_LOCK_TIME [n DAY/HOUR/SECOND|UNBOUNDED]\n    5. ACCOUNT_UNLOCK\n")),(0,r.kt)("p",null,"About ",(0,r.kt)("inlineCode",{parentName:"p"},"user_identity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password_policy"),", Please refer to ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE USER"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT_UNLOCK")," is used to unlock a locked user."),(0,r.kt)("p",null,"In an ALTER USER command, only one of the following account attributes can be modified at the same time:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Change password"),(0,r.kt)("li",{parentName:"ol"},"Modify ",(0,r.kt)("inlineCode",{parentName:"li"},"PASSWORD_HISTORY")),(0,r.kt)("li",{parentName:"ol"},"Modify ",(0,r.kt)("inlineCode",{parentName:"li"},"PASSWORD_EXPIRE")),(0,r.kt)("li",{parentName:"ol"},"Modify ",(0,r.kt)("inlineCode",{parentName:"li"},"FAILED_LOGIN_ATTEMPTS")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"PASSWORD_LOCK_TIME")),(0,r.kt)("li",{parentName:"ol"},"Unlock users")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the user's password"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'ALTER USER jack@\u2018%\u2019 IDENTIFIED BY "12345";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the user's password policy"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ALTER USER jack@'%' FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unlock a user"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ALTER USER jack@'%' ACCOUNT_UNLOCK\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ALTER, USER\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the password policy"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE")," will reset the timing of password expiration time.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILED_LOGIN_ATTEMPTS")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD_LOCK_TIME")," will unlock the user."))))))}u.isMDXComponent=!0}}]);