"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75120],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Multi-tenancy(Deprecated)",language:"en"},s=void 0,l={unversionedId:"admin-manual/maint-monitor/multi-tenant",id:"admin-manual/maint-monitor/multi-tenant",title:"Multi-tenancy(Deprecated)",description:"\x3c!--",source:"@site/docs/admin-manual/maint-monitor/multi-tenant.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/multi-tenant",permalink:"/docs/dev/admin-manual/maint-monitor/multi-tenant",draft:!1,tags:[],version:"current",frontMatter:{title:"Multi-tenancy(Deprecated)",language:"en"}},o={},c=[{value:"Background",id:"background",level:2},{value:"Design Principles",id:"design-principles",level:2},{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Main Ideas",id:"main-ideas",level:2},{value:"Design scheme",id:"design-scheme",level:2},{value:"SQL interface",id:"sql-interface",level:2},{value:"Detailed design",id:"detailed-design",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multi-tenancydeprecated"},"Multi-tenancy(Deprecated)"),(0,r.kt)("p",null,"This function is deprecated. Please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/admin-manual/multi-tenant"},"Multi-Tenant"),"."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Doris, as a PB-level online report and multi-dimensional analysis database, provides cloud-based database services through open cloud, and deploys a physical cluster for each client in the cloud. Internally, a physical cluster deploys multiple services, and separately builds clusters for services with high isolation requirements. In view of the above problems:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deployment of multiple physical cluster maintenance costs a lot (upgrade, functionality on-line, bug repair)."),(0,r.kt)("li",{parentName:"ul"},"A user's query or a bug caused by a query often affects other users."),(0,r.kt)("li",{parentName:"ul"},"In the actual production environment, only one BE process can be deployed on a single machine. Multiple BEs can better solve the problem of fat nodes. And for join, aggregation operations can provide higher concurrency.")),(0,r.kt)("p",null,"Together with the above three points, Doris needs a new multi-tenant scheme, which not only can achieve better resource isolation and fault isolation, but also can reduce the cost of maintenance to meet the needs of common and private clouds."),(0,r.kt)("h2",{id:"design-principles"},"Design Principles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Easy to use"),(0,r.kt)("li",{parentName:"ul"},"Low Development Cost"),(0,r.kt)("li",{parentName:"ul"},"Convenient migration of existing clusters")),(0,r.kt)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FE: Frontend, the module for metadata management or query planning in Doris."),(0,r.kt)("li",{parentName:"ul"},"BE: Backend, the module used to store and query data in Doris."),(0,r.kt)("li",{parentName:"ul"},"Master: A role for FE. A Doris cluster has only one Master and the other FE is Observer or Follower."),(0,r.kt)("li",{parentName:"ul"},"instance: A BE process is an instance in time."),(0,r.kt)("li",{parentName:"ul"},"host: a single physical machine"),(0,r.kt)("li",{parentName:"ul"},"Cluster: A cluster consisting of multiple instances."),(0,r.kt)("li",{parentName:"ul"},"Tenant: A cluster belongs to a tenant. Cluster is a one-to-one relationship with tenants."),(0,r.kt)("li",{parentName:"ul"},"database: A user-created database")),(0,r.kt)("h2",{id:"main-ideas"},"Main Ideas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy instances of multiple BEs on a host to isolate resources at the process level."),(0,r.kt)("li",{parentName:"ul"},"Multiple instances form a cluster, and a cluster is assigned to a business-independent tenant."),(0,r.kt)("li",{parentName:"ul"},"FE adds cluster level and is responsible for cluster management."),(0,r.kt)("li",{parentName:"ul"},"CPU, IO, memory and other resources are segregated by cgroup.")),(0,r.kt)("h2",{id:"design-scheme"},"Design scheme"),(0,r.kt)("p",null,"In order to achieve isolation, the concept of ",(0,r.kt)("strong",{parentName:"p"},"virtual cluster")," is introduced."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cluster represents a virtual cluster consisting of instances of multiple BEs. Multiple clusters share FE."),(0,r.kt)("li",{parentName:"ol"},"Multiple instances can be started on a host. When a cluster is created, an arbitrary number of instances are selected to form a cluster."),(0,r.kt)("li",{parentName:"ol"},"While creating a cluster, an account named superuser is created, which belongs to the cluster. Super user can manage clusters, create databases, assign privileges, and so on."),(0,r.kt)("li",{parentName:"ol"},"After Doris starts, the sink creates a default cluster: default_cluster. If the user does not want to use the function of multi-cluster, the default cluster is provided and other operational details of multi-cluster are hidden.")),(0,r.kt)("p",null,"The concrete structure is as follows:\n",(0,r.kt)("img",{src:a(39736).Z,width:"814",height:"484"})),(0,r.kt)("h2",{id:"sql-interface"},"SQL interface"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Login"),(0,r.kt)("p",{parentName:"li"},"Default cluster login name: user_name@default_cluster or user_name"),(0,r.kt)("p",{parentName:"li"},"Custom cluster login name: user_name@cluster_name"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mysqlclient -h host -P port -u user_name@cluster_name -p password"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add, delete, decommission and cancel BE"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BACKEND "host:port"'),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DROP BACKEND "host:port"'),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM DECOMMISSION BACKEND "host:port"'),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'CANCEL DECOMMISSION BACKEND "host:port"')),(0,r.kt)("p",{parentName:"li"},"It is strongly recommended to use DECOMMISSION instead of DROP to delete BACKEND. The DECOMMISSION operation will first need to copy data from the offline node to other instances in the cluster. After that, they will be offline.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a cluster and specify the password for the superuser account"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'CREATE CLUSTER cluster_name PROPERTIES ("instance_num" = "10") identified by "password"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter a cluster"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ENTER cluster name"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cluster Expansion and Shrinkage"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'ALTER CLUSTER cluster_name PROPERTIES ("instance_num" = "10")')),(0,r.kt)("p",{parentName:"li"},"When the number of instances specified is more than the number of existing be in cluster, it is expanded and if less than it is condensed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Link, migrate DB"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"LINK DATABASE src_cluster_name.db_name dest_cluster_name.db_name")),(0,r.kt)("p",{parentName:"li"},"Soft-chain dB of one cluster to dB of another cluster can be used by users who need temporary access to dB of other clusters but do not need actual data migration."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MIGRATE DATABASE src_cluster_name.db_name dest_cluster_name.db_name")),(0,r.kt)("p",{parentName:"li"},"If you need to migrate dB across clusters, after linking, migrate the actual migration of data."),(0,r.kt)("p",{parentName:"li"},"Migration does not affect the query, import and other operations of the current two dbs. This is an asynchronous operation. You can see the progress of migration through ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW MIGRATIONS"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Delete clusters"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DROP CLUSTER cluster_name")),(0,r.kt)("p",{parentName:"li"},"Deleting a cluster requires that all databases in the cluster be deleted manually first.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Others"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SHOW CLUSTERS")),(0,r.kt)("p",{parentName:"li"},"Show clusters that have been created in the system. Only root users have this permission."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SHOW BACKENDS")),(0,r.kt)("p",{parentName:"li"},"View the BE instance in the cluster."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SHOW MIGRATIONS")),(0,r.kt)("p",{parentName:"li"},"Show current DB migration tasks. After the migration of DB is completed, you can view the progress of the migration through this command."))),(0,r.kt)("h2",{id:"detailed-design"},"Detailed design"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Namespace isolation"),(0,r.kt)("p",{parentName:"li"},"In order to introduce multi-tenant, the namespaces between clusters in the system need to be isolated."),(0,r.kt)("p",{parentName:"li"},"Doris's existing metadata is image + Journal (metadata is designed in related documents). Doris records operations involving metadata as a journal, and then regularly writes images in the form of ",(0,r.kt)("strong",{parentName:"p"},"Fig. 1")," and reads them in the order in which they are written when loaded. But this brings a problem that the format that has been written is not easy to modify. For example, the metadata format for recording data distribution is: database + table + tablet + replica nesting. If we want to isolate the namespace between clusters in the past way, we need to add a layer of cluster on the database and the level of internal metadata. Change to cluster + database + table + tablet + replica, as shown in ",(0,r.kt)("strong",{parentName:"p"},"Figure 2"),". But the problems brought about by adding one layer are as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The change of metadata brought by adding one layer is incompatible. It needs to be written in cluster+db+table+tablet+replica level in the way of Figure 2. This changes the way of metadata organization in the past. The upgrading of the old version will be more troublesome. The ideal way is to write cluster in the order of Figure 3 in the form of existing metadata. Metadata.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All the DB and user used in the code need to add a layer of cluster. There are many workload changes and deep levels. Most of the code acquires db. The existing functions almost need to be changed, and a layer of cluster locks need to be nested on the basis of DB locks."))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(85989).Z,width:"584",height:"402"})),(0,r.kt)("p",{parentName:"li"},"To sum up, we adopt a prefix to DB and user names to isolate the internal problems caused by the conflict of DB and user names between clusters."),(0,r.kt)("p",{parentName:"li"},"As follows, all SQL input involves db name and user name, and all SQL input needs to spell the full name of DB and user according to their cluster."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(83454).Z,width:"681",height:"205"})),(0,r.kt)("p",{parentName:"li"},"In this way, the above two problems no longer exist. Metadata is also organized in a relatively simple way. That is to say, use ",(0,r.kt)("strong",{parentName:"p"}," Figure 3 ")," to record db, user and nodes belonging to their own cluster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"BE \u8282\u70b9\u7ba1\u7406"),(0,r.kt)("p",{parentName:"li"},"Each cluster has its own set of instances, which can be viewed through ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW BACKENDS"),". In order to distinguish which cluster the instance belongs to and how it is used, BE introduces several states:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Free: When a BE node is added to the system, be is idle when it does not belong to any cluster."),(0,r.kt)("li",{parentName:"ul"},"Use: When creating a cluster or expanding capacity is selected into a cluster, it is in use."),(0,r.kt)("li",{parentName:"ul"},"Cluster decommission: If a shrinkage is performed, the be that is executing the shrinkage is in this state. After that, the be state becomes free."),(0,r.kt)("li",{parentName:"ul"},"System decommission: be is offline. When the offline is completed, the be will be permanently deleted.")),(0,r.kt)("p",{parentName:"li"},"Only root users can check whether all be in the cluster is used through the cluster item in ",(0,r.kt)("inlineCode",{parentName:"p"},'SHOW PROC "/backends"'),". To be free is to be idle, otherwise to be in use. ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW BACKENDS "),"can only see the nodes in the cluster. The following is a schematic diagram of the state changes of be nodes."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(84062).Z,width:"699",height:"272"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Creating Clusters"),(0,r.kt)("p",{parentName:"li"},"Only root users can create a cluster and specify any number of BE instances."),(0,r.kt)("p",{parentName:"li"},"Supports selecting multiple instances on the same machine. The general principle of selecting instance is to select be on different machines as much as possible and to make the number of be used on all machines as uniform as possible."),(0,r.kt)("p",{parentName:"li"},"For use, each user and DB belongs to a cluster (except root). To create user and db, you first need to enter a cluster. When a cluster is created, the system defaults to the manager of the cluster, the superuser account. Superuser has the right to create db, user, and view the number of be nodes in the cluster to which it belongs. All non-root user logins must specify a cluster, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name@cluster_name"),"."),(0,r.kt)("p",{parentName:"li"},"Only root users can view all clusters in the system through `SHOW CLUSTER', and can enter different clusters through @ different cluster names. User clusters are invisible except root."),(0,r.kt)("p",{parentName:"li"},"In order to be compatible with the old version of Doris, a cluster named default_cluster was built in, which could not be used when creating the cluster."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(99618).Z,width:"440",height:"255"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cluster Expansion"),(0,r.kt)("p",{parentName:"li"},"The process of cluster expansion is the same as that of cluster creation. BE instance on hosts that are not outside the cluster is preferred. The selected principles are the same as creating clusters.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cluster and Shrinkage CLUSTER DECOMMISSION"),(0,r.kt)("p",{parentName:"li"},"Users can scale clusters by setting instance num of clusters."),(0,r.kt)("p",{parentName:"li"},"Cluster shrinkage takes precedence over Shrinking instances on hosts with the largest number of BE instances."),(0,r.kt)("p",{parentName:"li"},"Users can also directly use ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER CLUSTER DECOMMISSION BACKEND")," to specify BE for cluster scaling."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(70113).Z,width:"545",height:"365"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create table"),(0,r.kt)("p",{parentName:"li"},"To ensure high availability, each fragmented copy must be on a different machine. So when building a table, the strategy of choosing the be where the replica is located is to randomly select a be on each host. Then, the number of be copies needed is randomly selected from these be. On the whole, it can distribute patches evenly on each machine."),(0,r.kt)("p",{parentName:"li"},"Therefore, adding a fragment that needs to create a 3-copy fragment, even if the cluster contains three or more instances, but only two or less hosts, still cannot create the fragment.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Load Balancing"),(0,r.kt)("p",{parentName:"li"},"The granularity of load balancing is cluster level, and there is no load balancing between clusters. However, the computing load is carried out at the host level, and there may be BE instances of different clusters on a host. In the cluster, the load is calculated by the number of fragments on each host and the utilization of storage, and then the fragments on the machine with high load are copied to the machine with low load (see the load balancing documents for details).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"LINK DATABASE (Soft Chain)"),(0,r.kt)("p",{parentName:"li"},"Multiple clusters can access each other's data through a soft chain. The link level is dB for different clusters."),(0,r.kt)("p",{parentName:"li"},"DB in other clusters is accessed by adding DB information of other clusters that need to be accessed in one cluster."),(0,r.kt)("p",{parentName:"li"},"When querying the linked db, the computing and storage resources used are those of the cluster where the source DB is located."),(0,r.kt)("p",{parentName:"li"},"DB that is soft-chained cannot be deleted in the source cluster. Only when the linked DB is deleted can the source DB be deleted. Deleting link DB will not delete source db.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"MIGRATE DATABASE"),(0,r.kt)("p",{parentName:"li"},"DB can be physically migrated between clusters."),(0,r.kt)("p",{parentName:"li"},"To migrate db, you must first link db. After migration, the data will migrate to the cluster where the linked DB is located, and after migration, the source DB will be deleted and the link will be disconnected."),(0,r.kt)("p",{parentName:"li"},"Data migration reuses the process of replicating data in load balancing and replica recovery (see load balancing related documents for details). Specifically, after executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"MIRAGTE")," command, Doris will modify the cluster of all copies of the source DB to the destination cluster in the metadata."),(0,r.kt)("p",{parentName:"li"},"Doris regularly checks whether machines in the cluster are balanced, replicas are complete, and redundant replicas are available. The migration of DB borrows this process, checking whether the be where the replica is located belongs to the cluster while checking the replica is complete, and if not, it is recorded in the replica to be restored. And when the duplicate is redundant to be deleted, it will first delete the duplicate outside the cluster, and then choose according to the existing strategy: the duplicate of the downtime be -> the duplicate of clone -> the duplicate of the backward version - > the duplicate on the host with high load, until the duplicate is not redundant."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(78602).Z,width:"471",height:"570"})),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"BE process isolation"),(0,r.kt)("p",{parentName:"li"},"In order to isolate the actual cpu, IO and memory between be processes, we need to rely on the deployment of be. When deploying, you need to configure the CGroup on the periphery and write all the processes of be to be deployed to the cgroup. If the physical isolation of IO between the data storage paths of each be configuration requires different disks, there is no much introduction here."))))}u.isMDXComponent=!0},84062:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backend_state-70be6d189e9e31c1838dd997aac9b963.png"},78602:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cluster_link_and_migrate_db-f4f66f983d55aa6aa357f05b25546b46.png"},83454:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cluster_namaspace-892975a5c361629c77d703b859f4ad30.png"},39736:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/multi_tenant_arch-23ef8b3498a5c6d604fa431bcdf7b99d.png"},85989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/palo_meta-f45c6f04b5899346d6e00a4c1e72797e.png"},70113:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/replica_recover-c0efccae5bab03992423dce5f56d8714.png"},99618:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/user_authority-ab753b5c6fc288427a300d1ebe41c398.png"}}]);