"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[51940],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||l;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=b;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[p]="string"==typeof t?t:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},45157:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"MULTI-LOAD",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD",title:"MULTI-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"MULTI-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"PAUSE-ROUTINE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD"},next:{title:"RESUME-SYNC-JOB",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB"}},i={},u=[{value:"MULTI-LOAD",id:"multi-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"multi-load"},"MULTI-LOAD"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"MULTI LOAD"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u7528\u6237\u901a\u8fc7 HTTP \u534f\u8bae\u63d0\u4ea4\u591a\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u3002Multi Load \u53ef\u4ee5\u4fdd\u8bc1\u591a\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u7684\u539f\u5b50\u751f\u6548"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Syntax:\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_start?label=xxx\n    curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table1}/_load?label=xxx\\&sub_label=yyy\n    curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table2}/_load?label=xxx\\&sub_label=zzz\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_commit?label=xxx\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_desc?label=xxx\n\n'MULTI LOAD'\u5728'MINI LOAD'\u7684\u57fa\u7840\u4e0a\uff0c\u53ef\u4ee5\u652f\u6301\u7528\u6237\u540c\u65f6\u5411\u591a\u4e2a\u8868\u8fdb\u884c\u5bfc\u5165\uff0c\u5177\u4f53\u7684\u547d\u4ee4\u5982\u4e0a\u9762\u6240\u793a\n'/api/{db}/_multi_start'    \u5f00\u59cb\u4e00\u4e2a\u591a\u8868\u5bfc\u5165\u4efb\u52a1\n'/api/{db}/{table}/_load'   \u5411\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u6dfb\u52a0\u4e00\u4e2a\u8981\u5bfc\u5165\u7684\u8868\uff0c\u4e0e'MINI LOAD'\u7684\u4e3b\u8981\u533a\u522b\u662f\uff0c\u9700\u8981\u4f20\u5165'sub_label'\u53c2\u6570\n'/api/{db}/_multi_commit'   \u63d0\u4ea4\u6574\u4e2a\u591a\u8868\u5bfc\u5165\u4efb\u52a1\uff0c\u540e\u53f0\u5f00\u59cb\u8fdb\u884c\u5904\u7406\n'/api/{db}/_multi_abort'    \u653e\u5f03\u4e00\u4e2a\u591a\u8868\u5bfc\u5165\u4efb\u52a1\n'/api/{db}/_multi_desc'     \u53ef\u4ee5\u5c55\u793a\u67d0\u4e2a\u591a\u8868\u5bfc\u5165\u4efb\u52a1\u5df2\u7ecf\u63d0\u4ea4\u7684\u4f5c\u4e1a\u6570\n\nHTTP\u534f\u8bae\u76f8\u5173\u8bf4\u660e\n    \u6743\u9650\u8ba4\u8bc1            \u5f53\u524d Doris \u4f7f\u7528http\u7684Basic\u65b9\u5f0f\u6743\u9650\u8ba4\u8bc1\u3002\u6240\u4ee5\u5728\u5bfc\u5165\u7684\u65f6\u5019\u9700\u8981\u6307\u5b9a\u7528\u6237\u540d\u5bc6\u7801\n                        \u8fd9\u79cd\u65b9\u5f0f\u662f\u660e\u6587\u4f20\u9012\u5bc6\u7801\u7684\uff0c\u9274\u4e8e\u6211\u4eec\u5f53\u524d\u90fd\u662f\u5185\u7f51\u73af\u5883\u3002\u3002\u3002\n\n    Expect              Doris \u9700\u8981\u53d1\u9001\u8fc7\u6765\u7684http\u8bf7\u6c42\uff0c\u9700\u8981\u6709'Expect'\u5934\u90e8\u4fe1\u606f\uff0c\u5185\u5bb9\u4e3a'100-continue'\n                        \u4e3a\u4ec0\u4e48\u5462\uff1f\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u5c06\u8bf7\u6c42\u8fdb\u884credirect\uff0c\u90a3\u4e48\u5fc5\u987b\u5728\u4f20\u8f93\u6570\u636e\u5185\u5bb9\u4e4b\u524d\uff0c\n                        \u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u9020\u6210\u6570\u636e\u7684\u591a\u6b21\u4f20\u8f93\uff0c\u4ece\u800c\u63d0\u9ad8\u6548\u7387\u3002\n\n    Content-Length      Doris \u9700\u8981\u5728\u53d1\u9001\u8bf7\u6c42\u662f\u5e26\u6709'Content-Length'\u8fd9\u4e2a\u5934\u90e8\u4fe1\u606f\u3002\u5982\u679c\u53d1\u9001\u7684\u5185\u5bb9\u6bd4\n                        'Content-Length'\u8981\u5c11\uff0c\u90a3\u4e48Palo\u8ba4\u4e3a\u4f20\u8f93\u51fa\u73b0\u95ee\u9898\uff0c\u5219\u63d0\u4ea4\u6b64\u6b21\u4efb\u52a1\u5931\u8d25\u3002\n                        NOTE: \u5982\u679c\uff0c\u53d1\u9001\u7684\u6570\u636e\u6bd4'Content-Length'\u8981\u591a\uff0c\u90a3\u4e48 Doris \u53ea\u8bfb\u53d6'Content-Length'\n                        \u957f\u5ea6\u7684\u5185\u5bb9\uff0c\u5e76\u8fdb\u884c\u5bfc\u5165\n\n\u53c2\u6570\u8bf4\u660e\uff1a\n    user:               \u7528\u6237\u5982\u679c\u662f\u5728default_cluster\u4e2d\u7684\uff0cuser\u5373\u4e3auser_name\u3002\u5426\u5219\u4e3auser_name@cluster_name\u3002\n\n    label:              \u7528\u4e8e\u6307\u5b9a\u8fd9\u4e00\u6279\u6b21\u5bfc\u5165\u7684label\u53f7\uff0c\u7528\u4e8e\u540e\u671f\u8fdb\u884c\u4f5c\u4e1a\u72b6\u6001\u67e5\u8be2\u7b49\u3002\n                        \u8fd9\u4e2a\u53c2\u6570\u662f\u5fc5\u987b\u4f20\u5165\u7684\u3002\n\n    sub_label:          \u7528\u4e8e\u6307\u5b9a\u4e00\u4e2a\u591a\u8868\u5bfc\u5165\u4efb\u52a1\u5185\u90e8\u7684\u5b50\u7248\u672c\u53f7\u3002\u5bf9\u4e8e\u591a\u8868\u5bfc\u5165\u7684load\uff0c \u8fd9\u4e2a\u53c2\u6570\u662f\u5fc5\u987b\u4f20\u5165\u7684\u3002\n\n    columns:            \u7528\u4e8e\u63cf\u8ff0\u5bfc\u5165\u6587\u4ef6\u4e2d\u5bf9\u5e94\u7684\u5217\u540d\u5b57\u3002\n                        \u5982\u679c\u4e0d\u4f20\u5165\uff0c\u90a3\u4e48\u8ba4\u4e3a\u6587\u4ef6\u4e2d\u7684\u5217\u987a\u5e8f\u4e0e\u5efa\u8868\u7684\u987a\u5e8f\u4e00\u81f4\uff0c\n                        \u6307\u5b9a\u7684\u65b9\u5f0f\u4e3a\u9017\u53f7\u5206\u9694\uff0c\u4f8b\u5982\uff1acolumns=k1,k2,k3,k4\n\n    column_separator:   \u7528\u4e8e\u6307\u5b9a\u5217\u4e0e\u5217\u4e4b\u95f4\u7684\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u7684\u4e3a'\\t'\n                        NOTE: \u9700\u8981\u8fdb\u884curl\u7f16\u7801\uff0c\u8b6c\u5982\u9700\u8981\u6307\u5b9a'\\t'\u4e3a\u5206\u9694\u7b26\uff0c\n                        \u90a3\u4e48\u5e94\u8be5\u4f20\u5165'column_separator=%09'\n\n    max_filter_ratio:   \u7528\u4e8e\u6307\u5b9a\u5141\u8bb8\u8fc7\u6ee4\u4e0d\u89c4\u8303\u6570\u636e\u7684\u6700\u5927\u6bd4\u4f8b\uff0c\u9ed8\u8ba4\u662f0\uff0c\u4e0d\u5141\u8bb8\u8fc7\u6ee4\n                        \u81ea\u5b9a\u4e49\u6307\u5b9a\u5e94\u8be5\u5982\u4e0b\uff1a'max_filter_ratio=0.2'\uff0c\u542b\u4e49\u662f\u5141\u8bb820%\u7684\u9519\u8bef\u7387\n                        \u5728'_multi_start'\u65f6\u4f20\u5165\u6709\u6548\u679c\n\nNOTE: \n    1. \u6b64\u79cd\u5bfc\u5165\u65b9\u5f0f\u5f53\u524d\u662f\u5728\u4e00\u53f0\u673a\u5668\u4e0a\u5b8c\u6210\u5bfc\u5165\u5de5\u4f5c\uff0c\u56e0\u800c\u4e0d\u5b9c\u8fdb\u884c\u6570\u636e\u91cf\u8f83\u5927\u7684\u5bfc\u5165\u5de5\u4f5c\u3002\n    \u5efa\u8bae\u5bfc\u5165\u6570\u636e\u91cf\u4e0d\u8981\u8d85\u8fc71GB\n\n    2. \u5f53\u524d\u65e0\u6cd5\u4f7f\u7528`curl -T \"{file1, file2}\"`\u8fd9\u6837\u7684\u65b9\u5f0f\u63d0\u4ea4\u591a\u4e2a\u6587\u4ef6\uff0c\u56e0\u4e3acurl\u662f\u5c06\u5176\u62c6\u6210\u591a\u4e2a\n    \u8bf7\u6c42\u53d1\u9001\u7684\uff0c\u591a\u4e2a\u8bf7\u6c42\u4e0d\u80fd\u5171\u7528\u4e00\u4e2alabel\u53f7\uff0c\u6240\u4ee5\u65e0\u6cd5\u4f7f\u7528\n\n    3. \u652f\u6301\u7c7b\u4f3cstreaming\u7684\u65b9\u5f0f\u4f7f\u7528curl\u6765\u5411 Doris \u4e2d\u5bfc\u5165\u6570\u636e\uff0c\u4f46\u662f\uff0c\u53ea\u6709\u7b49\u8fd9\u4e2astreaming\u7ed3\u675f\u540e Doris\n    \u624d\u4f1a\u53d1\u751f\u771f\u5b9e\u7684\u5bfc\u5165\u884c\u4e3a\uff0c\u8fd9\u4e2d\u65b9\u5f0f\u6570\u636e\u91cf\u4e5f\u4e0d\u80fd\u8fc7\u5927\u3002\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. \u5c06\u672c\u5730\u6587\u4ef6'testData1'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl1'\u7684\u8868\uff0c\u5e76\u4e14\n\u628a'testData2'\u7684\u6570\u636e\u5bfc\u5165\u5230'testDb'\u4e2d\u7684\u8868'testTbl2'(\u7528\u6237\u662fdefalut_cluster\u4e2d\u7684)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -T testData2 http://host:port/api/testDb/testTbl2/_load?label=123\\&sub_label=2\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_commit?label=123\n\n2. \u591a\u8868\u5bfc\u5165\u4e2d\u9014\u653e\u5f03(\u7528\u6237\u662fdefalut_cluster\u4e2d\u7684)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_abort?label=123\n\n3. \u591a\u8868\u5bfc\u5165\u67e5\u770b\u5df2\u7ecf\u63d0\u4ea4\u591a\u5c11\u5185\u5bb9(\u7528\u6237\u662fdefalut_cluster\u4e2d\u7684)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_desc?label=123\n")),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MULTI, MINI, LOAD\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);