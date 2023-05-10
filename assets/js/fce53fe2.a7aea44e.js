"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[41798],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||s;return t?o.createElement(f,a(a({ref:n},d),{},{components:t})):o.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},99028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const s={title:"load balancing",language:"en"},a=void 0,i={unversionedId:"admin-manual/cluster-management/load-balancing",id:"admin-manual/cluster-management/load-balancing",title:"load balancing",description:"\x3c!--",source:"@site/docs/admin-manual/cluster-management/load-balancing.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/load-balancing",permalink:"/docs/dev/admin-manual/cluster-management/load-balancing",draft:!1,tags:[],version:"current",frontMatter:{title:"load balancing",language:"en"},sidebar:"docs",previous:{title:"Elastic scaling",permalink:"/docs/dev/admin-manual/cluster-management/elastic-expansion"},next:{title:"FQDN",permalink:"/docs/dev/admin-manual/cluster-management/fqdn"}},l={},c=[{value:"Code method",id:"code-method",level:2},{value:"JDBC Connector",id:"jdbc-connector",level:2},{value:"ProxySQL method",id:"proxysql-method",level:2},{value:"Install ProxySQL (yum way)",id:"install-proxysql-yum-way",level:3},{value:"ProxySQL Config",id:"proxysql-config",level:3},{value:"View and modify configuration files",id:"view-and-modify-configuration-files",level:4},{value:"Connect to the ProxySQL management port test",id:"connect-to-the-proxysql-management-port-test",level:4},{value:"ProxySQL configuration backend Doris FE",id:"proxysql-configuration-backend-doris-fe",level:4},{value:"Monitor Doris FE node configuration",id:"monitor-doris-fe-node-configuration",level:4},{value:"Configure Doris users",id:"configure-doris-users",level:4},{value:"Connect to Doris through ProxySQL for testing",id:"connect-to-doris-through-proxysql-for-testing",level:4},{value:"Nginx TCP reverse proxy method",id:"nginx-tcp-reverse-proxy-method",level:2},{value:"Overview",id:"overview",level:3},{value:"Environmental preparation",id:"environmental-preparation",level:3},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Install Nginx",id:"install-nginx",level:3},{value:"Configure reverse proxy",id:"configure-reverse-proxy",level:3},{value:"Start Nginx",id:"start-nginx",level:3},{value:"verify",id:"verify",level:3}],d={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"load-balancing"},"load balancing"),(0,r.kt)("p",null,"When deploying multiple FE nodes, users can deploy a load balancing layer on top of multiple FEs to achieve high availability of Doris."),(0,r.kt)("h2",{id:"code-method"},"Code method"),(0,r.kt)("p",null,"Retry and load balance yourself in the application layer code. For example, if a connection is found to be down, it will automatically retry on other connections. Application layer code retry requires the application to configure multiple doris front-end node addresses."),(0,r.kt)("h2",{id:"jdbc-connector"},"JDBC Connector"),(0,r.kt)("p",null,"If you use mysql jdbc connector to connect to Doris, you can use jdbc's automatic retry mechanism:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"jdbc:mysql:loadbalance://[host:port],[host:port].../[database][?propertyName1][=propertyValue1][&propertyName2][=propertyValue\n")),(0,r.kt)("p",null,"For details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/connector-j/5.1/en/connector-j-usagenotes-j2ee-concepts-managing-load-balanced-connections.html"},"Mysql official website document")),(0,r.kt)("h2",{id:"proxysql-method"},"ProxySQL method"),(0,r.kt)("p",null,"ProxySQL is a flexible and powerful MySQL proxy layer. It is a MySQL middleware that can be actually used in a production environment. It can realize read-write separation, support Query routing function, support dynamic designation of a certain SQL for cache, support dynamic loading configuration, failure Switching and some SQL filtering functions."),(0,r.kt)("p",null,"Doris's FE process is responsible for receiving user connections and query requests. It itself is horizontally scalable and highly available, but it requires users to set up a proxy on multiple FEs to achieve automatic connection load balancing."),(0,r.kt)("h3",{id:"install-proxysql-yum-way"},"Install ProxySQL (yum way)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," Configure yum source\n# vim /etc/yum.repos.d/proxysql.repo\n[proxysql_repo]\nname= ProxySQL YUM repository\nbaseurl=http://repo.proxysql.com/ProxySQL/proxysql-1.4.x/centos/\\$releasever\ngpgcheck=1\ngpgkey=http://repo.proxysql.com/ProxySQL/repo_pub_key\n \nPerform installation\n# yum clean all\n# yum makecache\n# yum -y install proxysql\nView version  \n# proxysql --version\nProxySQL version 1.4.13-15-g69d4207, codename Truls\nSet up auto start\n# systemctl enable proxysql\n# systemctl start proxysql      \n# systemctl status proxysql\nAfter startup, it will listen to two ports, the default is 6032 and 6033. Port 6032 is the management port of ProxySQL, and 6033 is the port for ProxySQL to provide external services (that is, the forwarding port connected to the real database of the forwarding backend).\n# netstat -tunlp\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name  \ntcp        0      0 0.0.0.0:6032            0.0.0.0:*               LISTEN      23940/proxysql    \ntcp        0      0 0.0.0.0:6033            0.0.0.0:*               LISTEN\n")),(0,r.kt)("h3",{id:"proxysql-config"},"ProxySQL Config"),(0,r.kt)("p",null,"ProxySQL has a configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/proxysql.cnf")," and a configuration database file ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/proxysql/proxysql.db"),". ",(0,r.kt)("strong",{parentName:"p"},"Special attention is needed here"),": If there is a ",(0,r.kt)("inlineCode",{parentName:"p"},'"proxysql.db"')," file (under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/proxysql")," directory), the ProxySQL service will only be read when it is started for the first time The ",(0,r.kt)("inlineCode",{parentName:"p"},"proxysql.cnf file")," and parse it; after startup, the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxysql.cnf")," file will not be read! If you want the configuration in the proxysql.cnf file to take effect after restarting the proxysql service (that is, you want proxysql to read and parse the proxysql.cnf configuration file when it restarts), you need to delete ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/proxysql/proxysql first. db"),"database file, and then restart the proxysql service. This is equivalent to initializing the proxysql service, and a pure proxysql.db database file will be produced again (if proxysql related routing rules, etc. are configured before, it will be erased)"),(0,r.kt)("h4",{id:"view-and-modify-configuration-files"},"View and modify configuration files"),(0,r.kt)("p",null,"Here are mainly a few parameters, which have been commented out below, and you can modify them according to your needs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'# egrep -v "^#|^$" /etc/proxysql.cnf\ndatadir="/var/lib/proxysql"         #data dir\nadmin_variables=\n{\n        admin_credentials="admin:admin"  #User name and password for connecting to the management terminal\n        mysql_ifaces="0.0.0.0:6032"    #Management port, used to connect to proxysql management database\n}\nmysql_variables=\n{\n        threads=4      #Specify the number of threads opened for the forwarding port\n        max_connections=2048\n        default_query_delay=0\n        default_query_timeout=36000000\n        have_compress=true\n        poll_timeout=2000\n        interfaces="0.0.0.0:6033"    #Specify the forwarding port, used to connect to the back-end mysql database, which is equivalent to acting as a proxy\n        default_schema="information_schema"\n        stacksize=1048576\n        server_version="5.5.30"        #Specify the version of the backend mysql\n        connect_timeout_server=3000\n        monitor_username="monitor"\n        monitor_password="monitor"\n        monitor_history=600000\n        monitor_connect_interval=60000\n        monitor_ping_interval=10000\n        monitor_read_only_interval=1500\n        monitor_read_only_timeout=500\n        ping_interval_server_msec=120000\n        ping_timeout_server=500\n        commands_stats=true\n        sessions_sort=true\n        connect_retries_on_failure=10\n}\nmysql_servers =\n(\n)\nmysql_users:\n(\n)\nmysql_query_rules:\n(\n)\nscheduler=\n(\n)\nmysql_replication_hostgroups=\n(\n)\n')),(0,r.kt)("h4",{id:"connect-to-the-proxysql-management-port-test"},"Connect to the ProxySQL management port test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"# mysql -uadmin -padmin -P6032 -hdoris01\nView the global_variables table information of the main library (it is in this library after login by default)\nMySQL [(none)]> show databases;\n+-----+---------------+-------------------------------------+\n| seq | name          | file                                |\n+-----+---------------+-------------------------------------+\n| 0   | main          |                                     |\n| 2   | disk          | /var/lib/proxysql/proxysql.db       |\n| 3   | stats         |                                     |\n| 4   | monitor       |                                     |\n| 5   | stats_history | /var/lib/proxysql/proxysql_stats.db |\n+-----+---------------+-------------------------------------+\n5 rows in set (0.000 sec)\nMySQL [(none)]> use main;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n \nDatabase changed\nMySQL [main]> show tables;\n+--------------------------------------------+\n| tables                                     |\n+--------------------------------------------+\n| global_variables                           |\n| mysql_collations                           |\n| mysql_group_replication_hostgroups         |\n| mysql_query_rules                          |\n| mysql_query_rules_fast_routing             |\n| mysql_replication_hostgroups               |\n| mysql_servers                              |\n| mysql_users                                |\n| proxysql_servers                           |\n| runtime_checksums_values                   |\n| runtime_global_variables                   |\n| runtime_mysql_group_replication_hostgroups |\n| runtime_mysql_query_rules                  |\n| runtime_mysql_query_rules_fast_routing     |\n| runtime_mysql_replication_hostgroups       |\n| runtime_mysql_servers                      |\n| runtime_mysql_users                        |\n| runtime_proxysql_servers                   |\n| runtime_scheduler                          |\n| scheduler                                  |\n+--------------------------------------------+\n20 rows in set (0.000 sec)\n")),(0,r.kt)("h4",{id:"proxysql-configuration-backend-doris-fe"},"ProxySQL configuration backend Doris FE"),(0,r.kt)("p",null,"Use the insert statement to add the host to the mysql_servers table, where: hostgroup_id is 10 for the write group, and 20 for the read group. We don't need to read and write the license here, and it doesn't matter which one can be set randomly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"[root@mysql-proxy ~]# mysql -uadmin -padmin -P6032 -h127.0.0.1\n............\nMySQL [(none)]> insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.9.211',9030);\nQuery OK, 1 row affected (0.000 sec)\n  \nMySQL [(none)]> insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.9.212',9030);\nQuery OK, 1 row affected (0.000 sec)\n  \nMySQL [(none)]> insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.9.213',9030);\nQuery OK, 1 row affected (0.000 sec)\n \nIf an error occurs during the insertion process:\nERROR 1045 (#2800): UNIQUE constraint failed: mysql_servers.hostgroup_id, mysql_servers.hostname, mysql_servers.port\n \nIt means that other configurations may have been defined before, you can clear this table or delete the configuration of the corresponding host\nMySQL [(none)]> select * from mysql_servers;\nMySQL [(none)]> delete from mysql_servers;\nQuery OK, 6 rows affected (0.000 sec)\n\nCheck whether these 3 nodes are inserted successfully and their status.\nMySQL [(none)]> select * from mysql_servers\\G;\n*************************** 1. row ***************************\n       hostgroup_id: 10\n           hostname: 192.168.9.211\n               port: 9030\n             status: ONLINE\n             weight: 1\n        compression: 0\n    max_connections: 1000\nmax_replication_lag: 0\n            use_ssl: 0\n     max_latency_ms: 0\n            comment:\n*************************** 2. row ***************************\n       hostgroup_id: 10\n           hostname: 192.168.9.212\n               port: 9030\n             status: ONLINE\n             weight: 1\n        compression: 0\n    max_connections: 1000\nmax_replication_lag: 0\n            use_ssl: 0\n     max_latency_ms: 0\n            comment:\n*************************** 3. row ***************************\n       hostgroup_id: 10\n           hostname: 192.168.9.213\n               port: 9030\n             status: ONLINE\n             weight: 1\n        compression: 0\n    max_connections: 1000\nmax_replication_lag: 0\n            use_ssl: 0\n     max_latency_ms: 0\n            comment:\n6 rows in set (0.000 sec)\n  \nERROR: No query specified\n  \nAfter the above modification, load it to RUNTIME and save it to disk. The following two steps are very important, otherwise your configuration information will be gone after you exit and must be saved\nMySQL [(none)]> load mysql servers to runtime;\nQuery OK, 0 rows affected (0.006 sec)\n  \nMySQL [(none)]> save mysql servers to disk;\nQuery OK, 0 rows affected (0.348 sec)\n")),(0,r.kt)("h4",{id:"monitor-doris-fe-node-configuration"},"Monitor Doris FE node configuration"),(0,r.kt)("p",null,"After adding doris fe nodes, you also need to monitor these back-end nodes. For multiple FE high-availability load balancing environments on the backend, this is necessary because ProxySQL needs to be automatically adjusted by the read_only value of each node"),(0,r.kt)("p",null,"Whether they belong to the read group or the write group."),(0,r.kt)("p",null,"First create a user name for monitoring on the back-end master main data node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Execute on the node of the doris fe master master database:\n# mysql -P9030 -uroot -p \nmysql> create user monitor@'192.168.9.%' identified by 'P@ssword1!';\nQuery OK, 0 rows affected (0.03 sec)\nmysql> grant ADMIN_PRIV on *.* to monitor@'192.168.9.%';\nQuery OK, 0 rows affected (0.02 sec)\n \nThen go back to the mysql-proxy proxy layer node to configure monitoring\n# mysql -uadmin -padmin -P6032 -h127.0.0.1\nMySQL [(none)]> set mysql-monitor_username='monitor';\nQuery OK, 1 row affected (0.000 sec)\n \nMySQL [(none)]> set mysql-monitor_password='P@ssword1!';\nQuery OK, 1 row affected (0.000 sec)\n \nAfter modification, load to RUNTIME and save to disk\nMySQL [(none)]> load mysql variables to runtime;\nQuery OK, 0 rows affected (0.001 sec)\n \nMySQL [(none)]> save mysql variables to disk;\nQuery OK, 94 rows affected (0.079 sec)\n \nVerify the monitoring results: The indicators of the ProxySQL monitoring module are stored in the log table of the monitor library.\nThe following is the monitoring of whether the connection is normal (monitoring of connect indicators):\nNote: There may be many connect_errors, this is because there is an error when the monitoring information is not configured. After the configuration, if the result of connect_error is NULL, it means normal\u3002\nMySQL [(none)]> select * from mysql_server_connect_log;\n+---------------+------+------------------+-------------------------+---------------+\n| hostname      | port | time_start_us    | connect_success_time_us | connect_error |\n+---------------+------+------------------+-------------------------+---------------+\n| 192.168.9.211 | 9030 | 1548665195883957 | 762                     | NULL          |\n| 192.168.9.212 | 9030 | 1548665195894099 | 399                     | NULL          |\n| 192.168.9.213 | 9030 | 1548665195904266 | 483                     | NULL          |\n| 192.168.9.211 | 9030 | 1548665255883715 | 824                     | NULL          |\n| 192.168.9.212 | 9030 | 1548665255893942 | 656                     | NULL          |\n| 192.168.9.211 | 9030 | 1548665495884125 | 615                     | NULL          |\n| 192.168.9.212 | 9030  | 1548665495894254 | 441                     | NULL          |\n| 192.168.9.213 | 9030 | 1548665495904479 | 638                     | NULL          |\n| 192.168.9.211 | 9030 | 1548665512917846 | 487                     | NULL          |\n| 192.168.9.212 | 9030 | 1548665512928071 | 994                     | NULL          |\n| 192.168.9.213 | 9030 | 1548665512938268 | 613                     | NULL          |\n+---------------+------+------------------+-------------------------+---------------+\n20 rows in set (0.000 sec)\nThe following is the monitoring of heartbeat information (monitoring of ping indicators)\nMySQL [(none)]> select * from mysql_server_ping_log;\n+---------------+------+------------------+----------------------+------------+\n| hostname      | port | time_start_us    | ping_success_time_us | ping_error |\n+---------------+------+------------------+----------------------+------------+\n| 192.168.9.211 | 9030 | 1548665195883407 | 98                   | NULL       |\n| 192.168.9.212 | 9030 | 1548665195885128 | 119                  | NULL       |\n...........\n| 192.168.9.213 | 9030 | 1548665415889362 | 106                  | NULL       |\n| 192.168.9.213 | 9030 | 1548665562898295 | 97                   | NULL       |\n+---------------+------+------------------+----------------------+------------+\n110 rows in set (0.001 sec)\n \nThe read_only log is also empty at this time (normally, when the new environment is configured, this read-only log is empty)\nMySQL [(none)]> select * from mysql_server_read_only_log;\nEmpty set (0.000 sec)\n\nAll 3 nodes are in the group with hostgroup_id=10.\nNow, load the modification of the mysql_replication_hostgroups table just now to RUNTIME to take effect\u3002\nMySQL [(none)]> load mysql servers to runtime;\nQuery OK, 0 rows affected (0.003 sec)\n \nMySQL [(none)]> save mysql servers to disk;\nQuery OK, 0 rows affected (0.361 sec)\n\n\nMySQL [(none)]> select hostgroup_id,hostname,port,status,weight from mysql_servers;\n+--------------+---------------+------+--------+--------+\n| hostgroup_id | hostname      | port | status | weight |\n+--------------+---------------+------+--------+--------+\n| 10           | 192.168.9.211 | 9030 | ONLINE | 1      |\n| 20           | 192.168.9.212 | 9030 | ONLINE | 1      |\n| 20           | 192.168.9.213 | 9030 | ONLINE | 1      |\n+--------------+---------------+------+--------+--------+\n3 rows in set (0.000 sec)\n")),(0,r.kt)("h4",{id:"configure-doris-users"},"Configure Doris users"),(0,r.kt)("p",null,"All the above configurations are about the back-end Doris FE node. Now you can configure the SQL statements, including: the user who sends the SQL statement, the routing rules of the SQL statement, the cache of the SQL query, the rewriting of the SQL statement, and so on."),(0,r.kt)("p",null,"This section is the user configuration used by the SQL request, such as the root user. This requires that we need to add relevant users to the back-end Doris FE node first. Here are examples of two user names root and doris."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"First, execute on the Doris FE master master database node:\n# mysql -P9030 -uroot -p\n.........\n\nmysql> create user doris@'%' identified by 'P@ssword1!';\nQuery OK, 0 rows affected, 1 warning (0.04 sec)\n \nmysql> grant ADMIN_PRIV on *.* to doris@'%';\nQuery OK, 0 rows affected, 1 warning (0.03 sec)\n \n \nThen go back to the mysql-proxy proxy layer node, configure the mysql_users table, and add the two users just now to the table.\nadmin> insert into mysql_users(username,password,default_hostgroup) values('root','',10);\nQuery OK, 1 row affected (0.001 sec)\n  \nadmin> insert into mysql_users(username,password,default_hostgroup) values('doris','P@ssword1!',10);\nQuery OK, 1 row affected (0.000 sec)\n  \nadmin> load mysql users to runtime;\nQuery OK, 0 rows affected (0.001 sec)\n  \nadmin> save mysql users to disk;\nQuery OK, 0 rows affected (0.108 sec)\n  \nThe mysql_users table has many fields. The three main fields are username, password, and default_hostgroup:\n      -username: The username used by the front-end to connect to ProxySQL and ProxySQL to route SQL statements to MySQL.\n      -password: the password corresponding to the user name. It can be a plain text password or a hash password. If you want to use the hash password, you can execute it on a MySQL node first  select password(PASSWORD), and then copy the encryption result to this field.\n      -default_hostgroup: The default routing destination of the username. For example, when the field value of the specified root user is 10, the SQL statement sent by the root user is used by default\n    In this case, it will be routed to a node in the hostgroup_id=10 group.\n \nadmin> select * from mysql_users\\G\n*************************** 1. row ***************************\n              username: root\n              password: \n                active: 1\n               use_ssl: 0\n     default_hostgroup: 10\n        default_schema: NULL\n         schema_locked: 0\ntransaction_persistent: 1\n          fast_forward: 0\n               backend: 1\n              frontend: 1\n       max_connections: 10000\n*************************** 2. row ***************************\n              username: doris\n              password: P@ssword1!\n                active: 1\n               use_ssl: 0\n     default_hostgroup: 10\n        default_schema: NULL\n         schema_locked: 0\ntransaction_persistent: 1\n          fast_forward: 0\n               backend: 1\n              frontend: 1\n       max_connections: 10000\n2 rows in set (0.000 sec)\n  \nAlthough the mysql_users table is not described in detail here, only users with active=1 are valid users, and the default active is 1.\n\nMySQL [(none)]> load mysql users to runtime;\nQuery OK, 0 rows affected (0.001 sec)\n \nMySQL [(none)]> save mysql users to disk;\nQuery OK, 0 rows affected (0.123 sec)\n\nIn this way, you can use the doris username and password to connect to ProxySQL through the sql client\n")),(0,r.kt)("h4",{id:"connect-to-doris-through-proxysql-for-testing"},"Connect to Doris through ProxySQL for testing"),(0,r.kt)("p",null,"Next, use the root user and doris user to test whether they can be routed to the default hostgroup_id=10 (it is a write group) to read data. The following is connected through the forwarding port 6033, the connection is forwarded to the real back-end database!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#mysql -uroot -p -P6033 -hdoris01 -e \"show databases;\"\nEnter password: \nERROR 9001 (HY000) at line 1: Max connect timeout reached while reaching hostgroup 10 after 10000ms\nAt this time, an error was found, and it was not forwarded to the real doris fe on the backend.\nThrough the log, you can see that there is set autocommit=0 to open the transaction\nCheck the configuration found:\n\nmysql-forward_autocommit=false\nmysql-autocommit_false_is_transaction=false\n\nWe don\u2019t need to read and write separation here, just turn these two parameters into true directly through the following statement.\nmysql> UPDATE global_variables SET variable_value='true' WHERE variable_name='mysql-forward_autocommit';\nQuery OK, 1 row affected (0.00 sec)\n\nmysql> UPDATE global_variables SET variable_value='true' WHERE variable_name='mysql-autocommit_false_is_transaction';\nQuery OK, 1 row affected (0.01 sec)\n\nmysql>  LOAD MYSQL VARIABLES TO RUNTIME;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SAVE MYSQL VARIABLES TO DISK;\nQuery OK, 98 rows affected (0.12 sec)\n\nThen we try again and it shows success\n[root@doris01 ~]# mysql -udoris -pP@ssword1! -P6033 -h192.168.9.211  -e \"show databases;\"\nWarning: Using a password on the command line interface can be insecure.\n+--------------------+\n| Database           |\n+--------------------+\n| doris_audit_db     |\n| information_schema |\n| retail             |\n+--------------------+\n")),(0,r.kt)("p",null,"OK, that's the end, you can use Mysql client, JDBC, etc. to connect to ProxySQL to operate your doris."),(0,r.kt)("h2",{id:"nginx-tcp-reverse-proxy-method"},"Nginx TCP reverse proxy method"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Nginx can implement load balancing of HTTP and HTTPS protocols, as well as load balancing of TCP protocol. So, the question is, can the load balancing of the Apache Doris database be achieved through Nginx? The answer is: yes. Next, let's discuss how to use Nginx to achieve load balancing of Apache Doris."),(0,r.kt)("h3",{id:"environmental-preparation"},"Environmental preparation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Using Nginx to achieve load balancing of Apache Doris database, the premise is to build an Apache Doris environment. The IP and port of Apache Doris FE are as follows. Here I use one FE to demonstrate, multiple FEs only You need to add multiple FE IP addresses and ports in the configuration")),(0,r.kt)("p",null,"The Apache Doris and port to access MySQL through Nginx are shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"IP: 172.31.7.119 \n\u7aef\u53e3: 9030\n")),(0,r.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install build-essential\nsudo apt-get install libpcre3 libpcre3-dev \nsudo apt-get install zlib1g-dev\nsudo apt-get install openssl libssl-dev\n")),(0,r.kt)("h3",{id:"install-nginx"},"Install Nginx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget http://nginx.org/download/nginx-1.18.0.tar.gz\nsudo tar zxvf nginx-1.18.0.tar.gz\ncd nginx-1.18.0\nsudo ./configure --prefix=/usr/local/nginx --with-stream --with-http_ssl_module --with-http_gzip_static_module --with-http_stub_status_module\nsudo make && make install\n")),(0,r.kt)("h3",{id:"configure-reverse-proxy"},"Configure reverse proxy"),(0,r.kt)("p",null,"Here is a new configuration file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vim /usr/local/nginx/conf/default.conf\n")),(0,r.kt)("p",null,"Then add the following in it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"events {\nworker_connections 1024;\n}\nstream {\n  upstream mysqld {\n      hash $remote_addr consistent;\n      server 172.31.7.119:9030 weight=1 max_fails=2 fail_timeout=60s;\n      ##\u6ce8\u610f\u8fd9\u91cc\u5982\u679c\u662f\u591a\u4e2aFE\uff0c\u52a0\u8f7d\u8fd9\u91cc\u5c31\u884c\u4e86\n  }\n  ###\u8fd9\u91cc\u662f\u914d\u7f6e\u4ee3\u7406\u7684\u7aef\u53e3\uff0c\u8d85\u65f6\u65f6\u95f4\u7b49\n  server {\n      listen 6030;\n      proxy_connect_timeout 300s;\n      proxy_timeout 300s;\n      proxy_pass mysqld;\n  }\n}\n")),(0,r.kt)("h3",{id:"start-nginx"},"Start Nginx"),(0,r.kt)("p",null,"Start the specified configuration file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/local/nginx\n/usr/local/nginx/sbin/nginx -c conf.d/default.conf\n")),(0,r.kt)("h3",{id:"verify"},"verify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql -uroot -P6030 -h172.31.7.119\n")),(0,r.kt)("p",null,"Parameter explanation: -u specifies the Doris username -p specifies the Doris password, my password here is empty, so there is no -h specifies the Nginx proxy server IP-P specifies the port"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -uroot -P6030 -h172.31.7.119\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 13\nServer version: 5.1.0 Doris version 0.15.1-rc09-Unknown\n\nCopyright (c) 2000, 2022, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| test               |\n+--------------------+\n2 rows in set (0.00 sec)\n\nmysql> use test;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\nmysql> show tables;\n+------------------+\n| Tables_in_test   |\n+------------------+\n| dwd_product_live |\n+------------------+\n1 row in set (0.00 sec)\nmysql> desc dwd_product_live;\n+-----------------+---------------+------+-------+---------+---------+\n| Field           | Type          | Null | Key   | Default | Extra   |\n+-----------------+---------------+------+-------+---------+---------+\n| dt              | DATE          | Yes  | true  | NULL    |         |\n| proId           | BIGINT        | Yes  | true  | NULL    |         |\n| authorId        | BIGINT        | Yes  | true  | NULL    |         |\n| roomId          | BIGINT        | Yes  | true  | NULL    |         |\n| proTitle        | VARCHAR(1024) | Yes  | false | NULL    | REPLACE |\n| proLogo         | VARCHAR(1024) | Yes  | false | NULL    | REPLACE |\n| shopId          | BIGINT        | Yes  | false | NULL    | REPLACE |\n| shopTitle       | VARCHAR(1024) | Yes  | false | NULL    | REPLACE |\n| profrom         | INT           | Yes  | false | NULL    | REPLACE |\n| proCategory     | BIGINT        | Yes  | false | NULL    | REPLACE |\n| proPrice        | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| couponPrice     | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| livePrice       | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| volume          | BIGINT        | Yes  | false | NULL    | REPLACE |\n| addedTime       | BIGINT        | Yes  | false | NULL    | REPLACE |\n| offTimeUnix     | BIGINT        | Yes  | false | NULL    | REPLACE |\n| offTime         | BIGINT        | Yes  | false | NULL    | REPLACE |\n| createTime      | BIGINT        | Yes  | false | NULL    | REPLACE |\n| createTimeUnix  | BIGINT        | Yes  | false | NULL    | REPLACE |\n| amount          | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| views           | BIGINT        | Yes  | false | NULL    | REPLACE |\n| commissionPrice | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| proCostPrice    | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| proCode         | VARCHAR(1024) | Yes  | false | NULL    | REPLACE |\n| proStatus       | INT           | Yes  | false | NULL    | REPLACE |\n| status          | INT           | Yes  | false | NULL    | REPLACE |\n| maxPrice        | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| liveView        | BIGINT        | Yes  | false | NULL    | REPLACE |\n| firstCategory   | BIGINT        | Yes  | false | NULL    | REPLACE |\n| secondCategory  | BIGINT        | Yes  | false | NULL    | REPLACE |\n| thirdCategory   | BIGINT        | Yes  | false | NULL    | REPLACE |\n| fourCategory    | BIGINT        | Yes  | false | NULL    | REPLACE |\n| minPrice        | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| liveVolume      | BIGINT        | Yes  | false | NULL    | REPLACE |\n| liveClick       | BIGINT        | Yes  | false | NULL    | REPLACE |\n| extensionId     | VARCHAR(128)  | Yes  | false | NULL    | REPLACE |\n| beginTime       | BIGINT        | Yes  | false | NULL    | REPLACE |\n| roomTitle       | TEXT          | Yes  | false | NULL    | REPLACE |\n| beginTimeUnix   | BIGINT        | Yes  | false | NULL    | REPLACE |\n| nickname        | TEXT          | Yes  | false | NULL    | REPLACE |\n+-----------------+---------------+------+-------+---------+---------+\n40 rows in set (0.06 sec)\n")))}m.isMDXComponent=!0}}]);