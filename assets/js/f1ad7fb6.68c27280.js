"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"Elastic scaling",language:"en"},l=void 0,i={unversionedId:"admin-manual/cluster-management/elastic-expansion",id:"version-1.2/admin-manual/cluster-management/elastic-expansion",title:"Elastic scaling",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/cluster-management/elastic-expansion.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/elastic-expansion",permalink:"/docs/1.2/admin-manual/cluster-management/elastic-expansion",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Elastic scaling",language:"en"},sidebar:"docs",previous:{title:"Cluster upgrade",permalink:"/docs/1.2/admin-manual/cluster-management/upgrade"},next:{title:"load balancing",permalink:"/docs/1.2/admin-manual/cluster-management/load-balancing"}},s={},d=[{value:"FE Scaling",id:"fe-scaling",level:2},{value:"Adding FE nodes",id:"adding-fe-nodes",level:3},{value:"Configure and start Follower or Observer.",id:"configure-and-start-follower-or-observer",level:4},{value:"Add Follower or Observer to the cluster",id:"add-follower-or-observer-to-the-cluster",level:4},{value:"Delete FE nodes",id:"delete-fe-nodes",level:3},{value:"BE Scaling",id:"be-scaling",level:2},{value:"Add BE nodes",id:"add-be-nodes",level:3},{value:"Delete BE nodes",id:"delete-be-nodes",level:3},{value:"Broker Scaling",id:"broker-scaling",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"elastic-scaling"},"Elastic scaling"),(0,a.kt)("p",null,"Doris can easily expand and shrink FE, BE, Broker instances."),(0,a.kt)("h2",{id:"fe-scaling"},"FE Scaling"),(0,a.kt)("p",null,"High availability of FE can be achieved by expanding FE to three top-one nodes."),(0,a.kt)("p",null,"Users can login to Master FE through MySQL client. By:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SHOW PROC '/frontends';")),(0,a.kt)("p",null,"To view the current FE node situation."),(0,a.kt)("p",null,"You can also view the FE node through the front-end page connection: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/frontend")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/system?Path=//frontends"),"."),(0,a.kt)("p",null,"All of the above methods require Doris's root user rights."),(0,a.kt)("p",null,"The process of FE node expansion and contraction does not affect the current system operation."),(0,a.kt)("h3",{id:"adding-fe-nodes"},"Adding FE nodes"),(0,a.kt)("p",null,"FE is divided into two roles: Follower and Observer. The Follower role will elect a Follower node as the Master. By default, a cluster can only have one Follower role in the Master state, and there can be multiple Followers and Observers. At the same time, it is necessary to ensure that there are an odd number of Follower roles. All Follower roles form an election group. If the Follower in the Master state goes down, the remaining Followers will automatically elect a new Master to ensure high write availability. Observer synchronizes the data of Master, but does not participate in the election. If only one FE is deployed, the FE is the Master by default."),(0,a.kt)("p",null,"The first FE to start automatically becomes Master. On this basis, several Followers and Observers can be added."),(0,a.kt)("h4",{id:"configure-and-start-follower-or-observer"},"Configure and start Follower or Observer."),(0,a.kt)("p",null," Follower and Observer are configured with Master. The following commands need to be executed at the first startup:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bin/start_fe.sh --helper host:edit_log_port --daemon")),(0,a.kt)("p",null,"The host is the node IP of Master, and the edit","_","log","_","port in Lead's configuration file fe.conf. The --helper is only required when follower/observer is first startup."),(0,a.kt)("h4",{id:"add-follower-or-observer-to-the-cluster"},"Add Follower or Observer to the cluster"),(0,a.kt)("p",null,"Add Follower or Observer. Connect to the started FE using mysql-client and execute:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD FOLLOWER "follower_host:edit_log_port";')),(0,a.kt)("p",null,"or"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD OBSERVER "observer_host:edit_log_port";')),(0,a.kt)("p",null,"The follower","_","host and observer","_","host is the node IP of Follower or Observer, and the edit","_","log","_","port in its configuration file fe.conf."),(0,a.kt)("p",null,"View the status of Follower or Observer. Connect to any booted FE using mysql-client and execute:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SHOW PROC '/frontends';")),(0,a.kt)("p",null,"You can view the FE currently joined the cluster and its corresponding roles."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notes for FE expansion:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"The number of Follower FEs (including Masters) must be odd. It is recommended that a maximum of three constituent high availability (HA) modes be deployed."),(0,a.kt)("li",{parentName:"ol"},"When FE is in a highly available deployment (1 Master, 2 Follower), we recommend that the reading service capability of FE be extended by adding Observer FE. Of course, you can continue to add Follower FE, but it's almost unnecessary."),(0,a.kt)("li",{parentName:"ol"},"Usually a FE node can handle 10-20 BE nodes. It is suggested that the total number of FE nodes should be less than 10. Usually three can meet most of the needs."),(0,a.kt)("li",{parentName:"ol"},"The helper cannot point to the FE itself, it must point to one or more existing running Master/Follower FEs."))),(0,a.kt)("h3",{id:"delete-fe-nodes"},"Delete FE nodes"),(0,a.kt)("p",null,"Delete the corresponding FE node using the following command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DROP FOLLOWER[OBSERVER] "fe_host:edit_log_port";')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notes for FE contraction:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"When deleting Follower FE, make sure that the remaining Follower (including Master) nodes are odd."))),(0,a.kt)("h2",{id:"be-scaling"},"BE Scaling"),(0,a.kt)("p",null,"Users can login to Master FE through mysql-client. By:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SHOW PROC '/backends';")),(0,a.kt)("p",null,"To see the current BE node situation."),(0,a.kt)("p",null,"You can also view the BE node through the front-end page connection: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/backend")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/system?Path=//backends"),"."),(0,a.kt)("p",null,"All of the above methods require Doris's root user rights."),(0,a.kt)("p",null,"The expansion and scaling process of BE nodes does not affect the current system operation and the tasks being performed, and does not affect the performance of the current system. Data balancing is done automatically. Depending on the amount of data available in the cluster, the cluster will be restored to load balancing in a few hours to a day. For cluster load, see the ",(0,a.kt)("a",{parentName:"p",href:"../maint-monitor/tablet-repair-and-balance.md"},"Tablet Load Balancing Document"),"."),(0,a.kt)("h3",{id:"add-be-nodes"},"Add BE nodes"),(0,a.kt)("p",null,"The BE node is added in the same way as in the ",(0,a.kt)("strong",{parentName:"p"},"BE deployment")," section. The BE node is added by the ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER SYSTEM ADD BACKEND")," command."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notes for BE expansion:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"After BE expansion, Doris will automatically balance the data according to the load, without affecting the use during the period."))),(0,a.kt)("h3",{id:"delete-be-nodes"},"Delete BE nodes"),(0,a.kt)("p",null,"There are two ways to delete BE nodes: DROP and DECOMMISSION"),(0,a.kt)("p",null,"The DROP statement is as follows:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DROP BACKEND "be_host:be_heartbeat_service_port";')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: DROP BACKEND will delete the BE directly and the data on it will not be recovered!!! So we strongly do not recommend DROP BACKEND to delete BE nodes. When you use this statement, there will be corresponding error-proof operation hints.")),(0,a.kt)("p",null,"DECOMMISSION clause:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"DECOMMISSION notes:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"This command is used to safely delete BE nodes. After the command is issued, Doris attempts to migrate the data on the BE to other BE nodes, and when all data is migrated, Doris automatically deletes the node."),(0,a.kt)("li",{parentName:"ol"},"The command is an asynchronous operation. After execution, you can see that the BE node's ",(0,a.kt)("inlineCode",{parentName:"li"},"SystemDecommissioned")," status is true through `",(0,a.kt)("inlineCode",{parentName:"li"},"SHOW PROC '/backends';")," Indicates that the node is offline."),(0,a.kt)("li",{parentName:"ol"},"The order ",(0,a.kt)("strong",{parentName:"li"},"does not necessarily carry out successfully"),". For example, when the remaining BE storage space is insufficient to accommodate the data on the offline BE, or when the number of remaining machines does not meet the minimum number of replicas, the command cannot be completed, and the BE will always be in the state of ",(0,a.kt)("inlineCode",{parentName:"li"},"SystemDecommissioned")," as true."),(0,a.kt)("li",{parentName:"ol"},"The progress of DECOMMISSION can be viewed through ",(0,a.kt)("inlineCode",{parentName:"li"},"SHOW PROC '/backends';")," Tablet Num, and if it is in progress, Tablet Num will continue to decrease."),(0,a.kt)("li",{parentName:"ol"},"The operation can be carried out by:\n",(0,a.kt)("inlineCode",{parentName:"li"},'CANCEL ALTER SYSTEM DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";'),"\nThe order was cancelled. When cancelled, the data on the BE will maintain the current amount of data remaining. Follow-up Doris re-load balancing"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For expansion and scaling of BE nodes in multi-tenant deployment environments, please refer to the ",(0,a.kt)("a",{parentName:"strong",href:"../multi-tenant.md"},"Multi-tenant Design Document"),".")),(0,a.kt)("h2",{id:"broker-scaling"},"Broker Scaling"),(0,a.kt)("p",null,"There is no rigid requirement for the number of Broker instances. Usually one physical machine is deployed. Broker addition and deletion can be accomplished by following commands:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BROKER broker_name "broker_host:broker_ipc_port";'),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DROP BROKER broker_name "broker_host:broker_ipc_port";'),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER SYSTEM DROP ALL BROKER broker_name;")),(0,a.kt)("p",null,"Broker is a stateless process that can be started or stopped at will. Of course, when it stops, the job running on it will fail. Just try again."))}u.isMDXComponent=!0}}]);