"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[34998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"FQDN",language:"en"},l=void 0,i={unversionedId:"admin-manual/cluster-management/fqdn",id:"admin-manual/cluster-management/fqdn",title:"FQDN",description:"\x3c!--",source:"@site/docs/admin-manual/cluster-management/fqdn.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/fqdn",permalink:"/docs/dev/admin-manual/cluster-management/fqdn",draft:!1,tags:[],version:"current",frontMatter:{title:"FQDN",language:"en"},sidebar:"docs",previous:{title:"load balancing",permalink:"/docs/dev/admin-manual/cluster-management/load-balancing"},next:{title:"Data Backup",permalink:"/docs/dev/admin-manual/data-admin/backup"}},s={},d=[{value:"Concept Introduction",id:"concept-introduction",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Deployment of Doris for K8S",id:"deployment-of-doris-for-k8s",level:3},{value:"Server switching network card",id:"server-switching-network-card",level:3},{value:"Legacy Cluster Enable FQDN",id:"legacy-cluster-enable-fqdn",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fqdn"},"FQDN"),(0,r.kt)("h2",{id:"concept-introduction"},"Concept Introduction"),(0,r.kt)("version",{since:"dev"}),(0,r.kt)("p",null,"A fully qualified domain name (FQDN) is the full domain name of a specific computer or host on the Internet."),(0,r.kt)("p",null,"After Doris supports FQDN, you can directly specify the domain name when adding various types of nodes. For example, the command to add a be node is ",(0,r.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BACKEND "be_host:heartbeat_service_port'),","),(0,r.kt)("p",null,'"Be',(0,r.kt)("em",{parentName:"p"},'host" was previously the IP address of the be node. After starting the FQDN, be')," The host should specify the domain name of the be node."),(0,r.kt)("h2",{id:"preconditions"},"Preconditions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"fe.conf file set ",(0,r.kt)("inlineCode",{parentName:"li"},"enable_fqdn_mode = true")),(0,r.kt)("li",{parentName:"ol"},"The fe node can resolve the domain names of all nodes in Doris")),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("h3",{id:"deployment-of-doris-for-k8s"},"Deployment of Doris for K8S"),(0,r.kt)("p",null,"After an accidental restart of a pod, the K8S cannot ensure that the pod's IP address does not change, but it can ensure that the domain name remains unchanged. Based on this feature, when Doris starts fqdn, it can ensure that the pod can still provide services normally after an accidental restart.\nFor the method of deploying Doris on the K8S, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/install/k8s-deploy"},"K8s Deployment Doris")),(0,r.kt)("h3",{id:"server-switching-network-card"},"Server switching network card"),(0,r.kt)("p",null,"For example, a server with a be node has two network cards with corresponding IPs of 192.192.192.2 and 10.10.10.3. Currently, the network card corresponding to 192.192.192.2 is used, and the following steps can be followed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a line '192.192.192.2 be1' to the 'etc/hosts' file of the machine where fe is located_ fqdn`"),(0,r.kt)("li",{parentName:"ol"},"Change be.conf File ",(0,r.kt)("inlineCode",{parentName:"li"},"priority_ Networks=192.192.192.2")," and start be"),(0,r.kt)("li",{parentName:"ol"},"Connect and execute the sql command ",(0,r.kt)("inlineCode",{parentName:"li"},' ALTER SYSTEM ADD BACKEND "be1_fqdn: 9050'))),(0,r.kt)("p",null,"When switching to the network card corresponding to 10.10.10.3 in the future, the following steps can be followed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure '192.192.192.2 be1' for 'etc/hosts'",(0,r.kt)("em",{parentName:"li"}," Fqdn 'is changed to' 10.10.10.3 be1")," fqdn`")),(0,r.kt)("h3",{id:"legacy-cluster-enable-fqdn"},"Legacy Cluster Enable FQDN"),(0,r.kt)("p",null,'Prerequisite: The current program supports the \'ALTER SYSTEM MODIFY FRONT "<fe_ip>:<edit_log_port>" HOSTNAME "<fe_hostname>" syntax,\nIf not, you need to upgrade to a version that supports this syntax'),(0,r.kt)("p",null,"Next, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Perform the following operations on the follower and observer nodes one by one (finally, operate the master node):"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Stop the node"),(0,r.kt)("li",{parentName:"ol"},"Check if the node is stopped. Execute 'show frontends' on the MySQL client to view the Alive status of the FE node until it becomes false"),(0,r.kt)("li",{parentName:"ol"},"Set FQDN for node: ",(0,r.kt)("inlineCode",{parentName:"li"},'ALTER SYSTEM MODIFY FRONTEND "<fe_ip>:<edit_log_port>" HOSTNAME "<fe_hostname>"')),(0,r.kt)("li",{parentName:"ol"},"Modify the node configuration. Modify the 'conf/fe. conf' file in the FE root directory and add the configuration: 'enable'",(0,r.kt)("em",{parentName:"li"}," fqdn")," mode = true`"),(0,r.kt)("li",{parentName:"ol"},"Start the node."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To enable FQDN for a BE node, you only need to execute the following commands through MYSQL, and there is no need to restart the BE."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM MODIFY BACKEND "<backend_ip>:<backend_port>" HOSTNAME "<be_hostname>"')))))}u.isMDXComponent=!0}}]);