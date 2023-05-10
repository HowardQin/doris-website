"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[80305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={title:"LDAP",language:"en"},o=void 0,s={unversionedId:"admin-manual/privilege-ldap/ldap",id:"admin-manual/privilege-ldap/ldap",title:"LDAP",description:"\x3c!--",source:"@site/docs/admin-manual/privilege-ldap/ldap.md",sourceDirName:"admin-manual/privilege-ldap",slug:"/admin-manual/privilege-ldap/ldap",permalink:"/docs/dev/admin-manual/privilege-ldap/ldap",draft:!1,tags:[],version:"current",frontMatter:{title:"LDAP",language:"en"},sidebar:"docs",previous:{title:"Authority Management",permalink:"/docs/dev/admin-manual/privilege-ldap/user-privilege"},next:{title:"rowsets",permalink:"/docs/dev/admin-manual/system-table/rowsets"}},l={},u=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Enable LDAP Authentication",id:"enable-ldap-authentication",level:2},{value:"Server-side Configuration",id:"server-side-configuration",level:3},{value:"Configure the fe/conf/ldap.conf file\uff1a",id:"configure-the-feconfldapconf-file",level:4},{value:"Set the LDAP administrator password:",id:"set-the-ldap-administrator-password",level:4},{value:"Client-side configuration",id:"client-side-configuration",level:3},{value:"LDAP authentication detailed explanation",id:"ldap-authentication-detailed-explanation",level:2},{value:"LDAP authentication login details",id:"ldap-authentication-login-details",level:3},{value:"1:Accounts exist in both Doris and LDAP.",id:"1accounts-exist-in-both-doris-and-ldap",level:4},{value:"2:The user exists in LDAP and the corresponding account does not exist in Doris.",id:"2the-user-exists-in-ldap-and-the-corresponding-account-does-not-exist-in-doris",level:4},{value:"3:LDAP does not exist for the user.",id:"3ldap-does-not-exist-for-the-user",level:4},{value:"LDAP group authorization details",id:"ldap-group-authorization-details",level:3},{value:"Limitations of LDAP authentication",id:"limitations-of-ldap-authentication",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ldap"},"LDAP"),(0,i.kt)("p",null,"Access to third-party LDAP services to provide authentication login and group authorization services for Doris."),(0,i.kt)("p",null,"LDAP authentication login complements Doris authentication login by accessing the LDAP service for password authentication; Doris uses LDAP to authenticate the user's password first; if the user does not exist in the LDAP service, it continues to use Doris to authenticate the password; if the LDAP password is correct but there is no corresponding account in Doris, a temporary user is created to log in to Doris."),(0,i.kt)("p",null,"LDAP group authorization, is to map the group in LDAP to the Role in Doris, if the user belongs to multiple user groups in LDAP, after logging into Doris the user will get the permission of all groups corresponding to the Role, requiring the group name to be the same as the Role name."),(0,i.kt)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LDAP: Lightweight directory access protocol that enables centralized management of account passwords."),(0,i.kt)("li",{parentName:"ul"},"Privilege: Permissions act on nodes, databases or tables. Different permissions represent different permission to operate."),(0,i.kt)("li",{parentName:"ul"},"Role: Doris can create custom named roles. A role can be thought of as a collection of permissions.")),(0,i.kt)("h2",{id:"enable-ldap-authentication"},"Enable LDAP Authentication"),(0,i.kt)("h3",{id:"server-side-configuration"},"Server-side Configuration"),(0,i.kt)("p",null,"You need to configure the LDAP basic information in the fe/conf/ldap.conf file, and the LDAP administrator password needs to be set using sql statements."),(0,i.kt)("h4",{id:"configure-the-feconfldapconf-file"},"Configure the fe/conf/ldap.conf file\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ldap_authentication_enabled = false",(0,i.kt)("br",{parentName:"p"}),"\n",'Set the value to "true" to enable LDAP authentication; when the value is "false", LDAP authentication is not enabled and all other configuration items of this profile are invalid.Set the value to "true" to enable LDAP authentication; when the value is "false", LDAP authentication is not enabled and all other configuration items of this profile are invalid.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ldap_host = 127.0.0.1",(0,i.kt)("br",{parentName:"p"}),"\n","LDAP service ip.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ldap_port = 389",(0,i.kt)("br",{parentName:"p"}),"\n","LDAP service port, the default plaintext transfer port is 389, currently Doris' LDAP function only supports plaintext password transfer.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ldap_admin_name = cn=admin,dc=domain,dc=com",(0,i.kt)("br",{parentName:"p"}),"\n",'LDAP administrator account "Distinguished Name". When a user logs into Doris using LDAP authentication, Doris will bind the administrator account to search for user information in LDAP.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ldap_user_basedn = ou=people,dc=domain,dc=com\nDoris base dn when searching for user information in LDAP.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ldap_user_filter = (&(uid={login}))"),(0,i.kt)("p",{parentName:"li"},'For Doris\' filtering criteria when searching for user information in LDAP, the placeholder "{login}" will be replaced with the login username. You must ensure that the user searched by this filter is unique, otherwise Doris will not be able to verify the password through LDAP and the error message "ERROR 5081 (42000): user is not unique in LDAP server." will appear when logging in.'),(0,i.kt)("p",{parentName:"li"},"For example, if you use the LDAP user node uid attribute as the username to log into Doris, you can configure it as:",(0,i.kt)("br",{parentName:"p"}),"\n","ldap_user_filter = (&(uid={login}))\uff1b",(0,i.kt)("br",{parentName:"p"}),"\n","This item can be configured using the LDAP user mailbox prefix as the user name:",(0,i.kt)("br",{parentName:"p"}),"\n","ldap_user_filter = (&(mail={login}@baidu.com))\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ldap_group_basedn = ou=group,dc=domain,dc=com\nbase dn when Doris searches for group information in LDAP. if this item is not configured, LDAP group authorization will not be enabled.  "))),(0,i.kt)("h4",{id:"set-the-ldap-administrator-password"},"Set the LDAP administrator password:"),(0,i.kt)("p",null,"After configuring the ldap.conf file, start fe, log in to Doris with the root or admin account, and execute sql:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"set ldap_admin_password = password('ldap_admin_password');\n")),(0,i.kt)("h3",{id:"client-side-configuration"},"Client-side configuration"),(0,i.kt)("p",null,"Client-side LDAP authentication requires the mysql client-side explicit authentication plugin to be enabled. Logging into Doris using the command line enables the mysql explicit authentication plugin in one of two ways."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the environment variable LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN to value 1.\nFor example, in a linux or max environment you can use the command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1" >> \uff5e/.bash_profile && source \uff5e/.bash_profile\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Add the parameter "--enable-cleartext-plugin" each time you log in to Doris.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -hDORIS_HOST -PDORIS_PORT -u user -p --enable-cleartext-plugin\n\nEnter ldap password\n")))),(0,i.kt)("h2",{id:"ldap-authentication-detailed-explanation"},"LDAP authentication detailed explanation"),(0,i.kt)("p",null,"LDAP password authentication and group authorization are complementary to Doris password authentication and authorization. Enabling LDAP functionality does not completely replace Doris password authentication and authorization, but coexists with Doris password authentication and authorization."),(0,i.kt)("h3",{id:"ldap-authentication-login-details"},"LDAP authentication login details"),(0,i.kt)("p",null,"When LDAP is enabled, users have the following in Doris and DLAP:  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"LDAP User"),(0,i.kt)("th",{parentName:"tr",align:null},"Doris User"),(0,i.kt)("th",{parentName:"tr",align:null},"Password"),(0,i.kt)("th",{parentName:"tr",align:null},"Login Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Login to Doris users"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Existent"),(0,i.kt)("td",{parentName:"tr",align:null},"Existent"),(0,i.kt)("td",{parentName:"tr",align:null},"LDAP Password"),(0,i.kt)("td",{parentName:"tr",align:null},"Login successful"),(0,i.kt)("td",{parentName:"tr",align:null},"Doris User")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Existent"),(0,i.kt)("td",{parentName:"tr",align:null},"Existent"),(0,i.kt)("td",{parentName:"tr",align:null},"Doris Password"),(0,i.kt)("td",{parentName:"tr",align:null},"Login failure"),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Non-Existent"),(0,i.kt)("td",{parentName:"tr",align:null},"Existent"),(0,i.kt)("td",{parentName:"tr",align:null},"Doris Password"),(0,i.kt)("td",{parentName:"tr",align:null},"Login successful"),(0,i.kt)("td",{parentName:"tr",align:null},"Doris User")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Existent"),(0,i.kt)("td",{parentName:"tr",align:null},"Non-Existent"),(0,i.kt)("td",{parentName:"tr",align:null},"LDAP Password"),(0,i.kt)("td",{parentName:"tr",align:null},"Login successful"),(0,i.kt)("td",{parentName:"tr",align:null},"Ldap Temporary user")))),(0,i.kt)("p",null,"After LDAP is enabled, when a user logs in using mysql client, Doris will first verify the user's password through the LDAP service, and if the LDAP user exists and the password is correct, Doris will use the user to log in; at this time, if the corresponding account exists, Doris will directly log in to the account, and if the corresponding account does not exist, it will create a temporary account for the user and log in to the account. The temporary account has the appropriate pair of permissions (see LDAP Group Authorization) and is only valid for the current connection. doris does not create the user and does not generate metadata for creating the user pair.",(0,i.kt)("br",{parentName:"p"}),"\n","If no login user exists in the LDAP service, Doris is used for password authentication."),(0,i.kt)("p",null,"The following assumes that LDAP authentication is enabled, ldap_user_filter = (&(uid={login})) is configured, and all other configuration items are correct, and the client sets the environment variable LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1  "),(0,i.kt)("p",null,"For example:"),(0,i.kt)("h4",{id:"1accounts-exist-in-both-doris-and-ldap"},"1:Accounts exist in both Doris and LDAP."),(0,i.kt)("p",null,"Doris account exists: jack@'172.10.1.10', password: 123456",(0,i.kt)("br",{parentName:"p"}),"\n","LDAP user node presence attribute: uid: jack user password: abcdef",(0,i.kt)("br",{parentName:"p"}),"\n","The jack@'172.10.1.10' account can be logged into by logging into Doris using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n")),(0,i.kt)("p",null,"Login will fail with the following command:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p 123456\n")),(0,i.kt)("h4",{id:"2the-user-exists-in-ldap-and-the-corresponding-account-does-not-exist-in-doris"},"2:The user exists in LDAP and the corresponding account does not exist in Doris."),(0,i.kt)("p",null,"LDAP user node presence attribute: uid: jack User password: abcdef",(0,i.kt)("br",{parentName:"p"}),"\n","Use the following command to create a temporary user and log in to jack@'%', the temporary user has basic privileges DatabasePrivs: Select_priv, Doris will delete the temporary user after the user logs out and logs in:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n")),(0,i.kt)("h4",{id:"3ldap-does-not-exist-for-the-user"},"3:LDAP does not exist for the user."),(0,i.kt)("p",null,"Doris account exists: jack@'172.10.1.10', password: 123456",(0,i.kt)("br",{parentName:"p"}),"\n","Login to the account using the Doris password, successfully:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p 123456\n")),(0,i.kt)("h3",{id:"ldap-group-authorization-details"},"LDAP group authorization details"),(0,i.kt)("p",null,'If a DLAP user dn is the "member" attribute of an LDAP group node, Doris assumes that the user belongs to the group. Doris will revoke the corresponding role privileges after the user logs out. Before using LDAP group authorization, you should create the corresponding role pairs in Doris and authorize the roles.'),(0,i.kt)("p",null,"Login user Privileges are related to Doris user and group Privileges, as shown in the following table:",(0,i.kt)("br",{parentName:"p"}),"\n","|LDAP Users|Doris Users|Login User Privileges|\n|--|--|--|\n|exist|exist|LDAP group Privileges + Doris user Privileges|\n|Does not exist|Exists|Doris user Privileges|\n|exist|non-exist|LDAP group Privileges|"),(0,i.kt)("p",null,"If the logged-in user is a temporary user and no group permission exists, the user has the select_priv permission of the information_schema by default"),(0,i.kt)("p",null,"Example:",(0,i.kt)("br",{parentName:"p"}),"\n",'LDAP user dn is the "member" attribute of the LDAP group node then the user is considered to belong to the group, Doris will intercept the first Rdn of group dn as the group name.',(0,i.kt)("br",{parentName:"p"}),"\n",'For example, if user dn is "uid=jack,ou=aidp,dc=domain,dc=com", the group information is as follows:  '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"dn: cn=doris_rd,ou=group,dc=domain,dc=com  \nobjectClass: groupOfNames  \nmember: uid=jack,ou=aidp,dc=domain,dc=com  \n")),(0,i.kt)("p",null,"Then the group name is doris_rd."),(0,i.kt)("p",null,"If jack also belongs to the LDAP groups doris_qa, doris_pm; Doris exists roles: doris_rd, doris_qa, doris_pm, after logging in using LDAP authentication, the user will not only have the original permissions of the account, but will also get the roles doris_rd, doris_qa and doris _pm privileges."),(0,i.kt)("h2",{id:"limitations-of-ldap-authentication"},"Limitations of LDAP authentication"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The current LDAP feature of Doris only supports plaintext password authentication, that is, when a user logs in, the password is transmitted in plaintext between client and fe and between fe and LDAP service.")))}c.isMDXComponent=!0}}]);