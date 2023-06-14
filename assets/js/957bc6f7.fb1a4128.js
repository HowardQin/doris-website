"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87182],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,f=u["".concat(s,".").concat(m)]||u[m]||h[m]||n;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={title:"Apache Doris announced the official release of version 1.1.5",summary:"Dear community, we are pleased to announce that we have officially released Apache Doris 1.1.5 on December 19, 2022",date:"2022-12-19",author:"Apache Doris",tags:["Release Notes"]},i=void 0,l={permalink:"/blog/release-1.1.5",source:"@site/blog/release-1.1.5.md",title:"Apache Doris announced the official release of version 1.1.5",description:"\x3c!--",date:"2022-12-19T00:00:00.000Z",formattedDate:"December 19, 2022",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.1.5",summary:"Dear community, we are pleased to announce that we have officially released Apache Doris 1.1.5 on December 19, 2022",date:"2022-12-19",author:"Apache Doris",tags:["Release Notes"]},prevItem:{title:"Best Practice: The Efficiency of the Data Warehouse Greatly Improved in LY Digital",permalink:"/blog/LY"},nextItem:{title:"Best Practice in Kwai: Apache Doris on Elasticsearch",permalink:"/blog/BestPractice_Kwai"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this release, Doris Team has fixed about 36 issues or performance improvement since 1.1.4. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."),(0,o.kt)("h1",{id:"behavior-changes"},"Behavior Changes"),(0,o.kt)("p",null,"When alias name is same as the original column name like \"select year(birthday) as birthday\" and use it in group by, order by , having clause, doris's behavior is different from MySQL in the past. In this release, we make it follow MySQL's behavior. Group by and having clause will use original column at first and order by will use alias first. It maybe a litter confuse here so there is a simple advice here, you'd better not use an alias the same as original column name."),(0,o.kt)("h1",{id:"features"},"Features"),(0,o.kt)("p",null,"Add support of murmur_hash3_64. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14636"},"#14636")),(0,o.kt)("h1",{id:"improvements"},"Improvements"),(0,o.kt)("p",null,"Add timezone cache for convert_tz to improve performance. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14616"},"#14616")),(0,o.kt)("p",null,"Sort result by tablename when call show clause. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14492"},"#14492")),(0,o.kt)("h1",{id:"bug-fix"},"Bug Fix"),(0,o.kt)("p",null,"Fix coredump when there is a if constant expr in select clause.  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14858"},"#14858")),(0,o.kt)("p",null,"ColumnVector::insert_date_column may crashed. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14839"},"#14839")),(0,o.kt)("p",null,"Update high_priority_flush_thread_num_per_store default value to 6 and it will improve the load performance. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14775"},"#14775")),(0,o.kt)("p",null,"Fix quick compaction core.  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14731"},"#14731")),(0,o.kt)("p",null,"Partition column is not duplicate key, spark load will throw IndexOutOfBounds error. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14661"},"#14661")),(0,o.kt)("p",null,"Fix a memory leak problem in VCollectorIterator. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14549"},"#14549")),(0,o.kt)("p",null,"Fix create table like when having sequence column. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14511"},"#14511")),(0,o.kt)("p",null,"Using avg rowset to calculate batch size instead of using total_bytes since it costs a lot of cpu. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14273"},"#14273")),(0,o.kt)("p",null,"Fix right outer join core with conjunct. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14821"},"#14821")),(0,o.kt)("p",null,"Optimize policy of tcmalloc gc.  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14777"},"#14777")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14738"},"#14738")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14374"},"#14374")))}h.isMDXComponent=!0}}]);