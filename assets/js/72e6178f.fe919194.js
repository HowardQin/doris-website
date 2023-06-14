"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[92051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={title:"Orthogonal BITMAP calculation",language:"en"},r=void 0,l={unversionedId:"advanced/orthogonal-bitmap-manual",id:"advanced/orthogonal-bitmap-manual",title:"Orthogonal BITMAP calculation",description:"\x3c!--",source:"@site/docs/advanced/orthogonal-bitmap-manual.md",sourceDirName:"advanced",slug:"/advanced/orthogonal-bitmap-manual",permalink:"/docs/dev/advanced/orthogonal-bitmap-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"Orthogonal BITMAP calculation",language:"en"},sidebar:"docs",previous:{title:"Resource management",permalink:"/docs/dev/advanced/resource"},next:{title:"Approximate deduplication using HLL",permalink:"/docs/dev/advanced/using-hll"}},s={},u=[{value:"Background",id:"background",level:2},{value:"User guide",id:"user-guide",level:2},{value:"Create table",id:"create-table",level:3},{value:"Data Load",id:"data-load",level:3},{value:"orthogonal_bitmap_intersect",id:"orthogonal_bitmap_intersect",level:4},{value:"orthogonal_bitmap_intersect_count",id:"orthogonal_bitmap_intersect_count",level:4},{value:"orthogonal_bitmap_union_count",id:"orthogonal_bitmap_union_count",level:4},{value:"orthogonal_bitmap_expr_calculate",id:"orthogonal_bitmap_expr_calculate",level:4},{value:"orthogonal_bitmap_expr_calculate_count",id:"orthogonal_bitmap_expr_calculate_count",level:4},{value:"Suitable for the scene",id:"suitable-for-the-scene",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"orthogonal-bitmap-calculation"},"Orthogonal BITMAP calculation"),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"The original bitmap aggregate function designed by Doris is more general, but it has poor performance for the intersection and union of bitmap large cardinality above 100 million level. There are two main reasons for checking the bitmap aggregate function logic of the back-end be. First, when the bitmap cardinality is large, if the bitmap data size exceeds 1g, the network / disk IO processing time is relatively long; second, after the scan data, all the back-end be instances are transmitted to the top-level node for intersection and union operation, which brings pressure on the top-level single node and becomes the processing bottleneck."),(0,i.kt)("p",null,"The solution is to divide the bitmap column values according to the range, and the values of different ranges are stored in different buckets, so as to ensure that the bitmap values of different buckets are orthogonal and the data distribution is more uniform. In the case of query, the orthogonal bitmap in different buckets is firstly aggregated and calculated, and then the top-level node directly combines and summarizes the aggregated calculated values and outputs them. This will greatly improve the computing efficiency and solve the bottleneck problem of the top single node computing."),(0,i.kt)("h2",{id:"user-guide"},"User guide"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a table and add hid column to represent bitmap column value ID range as hash bucket column"),(0,i.kt)("li",{parentName:"ol"},"Usage scenarios")),(0,i.kt)("h3",{id:"create-table"},"Create table"),(0,i.kt)("p",null,"We need to use the aggregation model when building tables. The data type is bitmap, and the aggregation function is bitmap_ union"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CREATE TABLE `user_tag_bitmap` (\n  `tag` bigint(20) NULL COMMENT "user tag",\n  `hid` smallint(6) NULL COMMENT "Bucket ID",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`tag`, `hid`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`hid`) BUCKETS 3\n')),(0,i.kt)("p",null,"The HID column is added to the table schema to indicate the ID range as a hash bucket column."),(0,i.kt)("p",null,"Note: the HID number and buckets should be set reasonably, and the HID number should be set at least 5 times of buckets, so as to make the data hash bucket division as balanced as possible"),(0,i.kt)("h3",{id:"data-load"},"Data Load"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LOAD LABEL user_tag_bitmap_test\n(\nDATA INFILE('hdfs://abc')\nINTO TABLE user_tag_bitmap\nCOLUMNS TERMINATED BY ','\n(tmp_tag, tmp_user_id)\nSET (\ntag = tmp_tag,\nhid = ceil(tmp_user_id/5000000),\nuser_id = to_bitmap(tmp_user_id)\n)\n)\n...\n")),(0,i.kt)("p",null,"Data format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"11111111,1\n11111112,2\n11111113,3\n11111114,4\n...\n")),(0,i.kt)("p",null,"Note: the first column represents the user tags, which have been converted from Chinese into numbers"),(0,i.kt)("p",null,"When loading data, vertically cut the bitmap value range of the user. For example, the hid value of the user ID in the range of 1-5000000 is the same, and the row with the same HID value will be allocated into a sub-bucket, so that the bitmap value in each sub-bucket is orthogonal. On the UDAF implementation of bitmap, the orthogonal feature of bitmap value in the bucket can be used to perform intersection union calculation, and the calculation results will be shuffled to the top node for aggregation."),(0,i.kt)("p",null,"Note: The orthogonal bitmap function cannot be used in the partitioned table. Because the partitions of the partitioned table are orthogonal, the data between partitions cannot be guaranteed to be orthogonal, so the calculation result cannot be estimated."),(0,i.kt)("h4",{id:"orthogonal_bitmap_intersect"},"orthogonal_bitmap_intersect"),(0,i.kt)("p",null,"The bitmap intersection function"),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("p",null,"orthogonal_bitmap_intersect(bitmap_column, column_to_filter, filter_values)"),(0,i.kt)("p",null,"Parameters:"),(0,i.kt)("p",null,"the first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column"),(0,i.kt)("p",null,"Explain:"),(0,i.kt)("p",null,"on the basis of this table schema, this function has two levels of aggregation in query planning. In the first layer, be nodes (update and serialize) first press filter_ Values are used to hash aggregate the keys, and then the bitmaps of all keys are intersected. The results are serialized and sent to the second level be nodes (merge and finalize). In the second level be nodes, all the bitmap values from the first level nodes are combined circularly"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select BITMAP_COUNT(orthogonal_bitmap_intersect(user_id, tag, 13080800, 11110200)) from user_tag_bitmap  where tag in (13080800, 11110200);\n\n")),(0,i.kt)("h4",{id:"orthogonal_bitmap_intersect_count"},"orthogonal_bitmap_intersect_count"),(0,i.kt)("p",null,"To calculate the bitmap intersection count function, the syntax is the same as the original Intersect_Count, but the implementation is different"),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("p",null,"orthogonal_bitmap_intersect_count(bitmap_column, column_to_filter, filter_values)"),(0,i.kt)("p",null,"Parameters:"),(0,i.kt)("p",null,"The first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column"),(0,i.kt)("p",null,"Explain:"),(0,i.kt)("p",null,"on the basis of this table schema, the query planning aggregation is divided into two layers. In the first layer, be nodes (update and serialize) first press filter_ Values are used to hash aggregate the keys, and then the intersection of bitmaps of all keys is performed, and then the intersection results are counted. The count values are serialized and sent to the second level be nodes (merge and finalize). In the second level be nodes, the sum of all the count values from the first level nodes is calculated circularly"),(0,i.kt)("h4",{id:"orthogonal_bitmap_union_count"},"orthogonal_bitmap_union_count"),(0,i.kt)("p",null,"Figure out the bitmap union count function, syntax with the original bitmap_union_count, but the implementation is different."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("p",null,"orthogonal_bitmap_union_count(bitmap_column)"),(0,i.kt)("p",null,"Explain:"),(0,i.kt)("p",null,"on the basis of this table schema, this function is divided into two layers. In the first layer, be nodes (update and serialize) merge all the bitmaps, and then count the resulting bitmaps. The count values are serialized and sent to the second level be nodes (merge and finalize). In the second layer, the be nodes are used to calculate the sum of all the count values from the first level nodes"),(0,i.kt)("h4",{id:"orthogonal_bitmap_expr_calculate"},"orthogonal_bitmap_expr_calculate"),(0,i.kt)("p",null,"Compute the function by computing the intersection, union and difference set of the expression bitmap."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("p",null,"orthogonal_bitmap_expr_calculate(bitmap_column, filter_column, input_string)"),(0,i.kt)("p",null,"Parameters:"),(0,i.kt)("p",null,"the first parameter is the Bitmap column, the second parameter is the dimension column used for filtering, that is, the calculated key column, and the third parameter is the calculation expression string, which means that the bitmap intersection and union difference expression is calculated according to the key column"),(0,i.kt)("p",null,"the calculators supported by the expression: & represents intersection calculation, | represents union calculation, - represents difference calculation, ^ represents XOR calculation, and \\ represents escape characters"),(0,i.kt)("p",null,"Explain:"),(0,i.kt)("p",null,"the aggregation of query planning is divided into two layers. The first layer of be aggregation node calculation includes init, update, and serialize steps. The second layer of be aggregation node calculation includes merge and finalize steps. In the first layer of be node, the input string is parsed in the init phase, which is converted into a suffix expression (inverse Polish), parses the calculated key value, and initializes it in the map<key, bitmap>structure; In the update phase, the underlying kernel scan dimension column (filter_column) calls back the update function, and then aggregates the bitmap in the map structure of the previous step in the unit of computing key; In the serialize stage, the bitmap of the key column is parsed according to the suffix expression, and the bitmap intersection, merge and difference set is calculated using the first in, last out principle of the stack structure. Then the final bitmap is serialized and sent to the aggregation be node in the second layer. Aggregates be nodes in the second layer, finds the union set of all bitmap values from the first layer nodes, and returns the final bitmap results"),(0,i.kt)("h4",{id:"orthogonal_bitmap_expr_calculate_count"},"orthogonal_bitmap_expr_calculate_count"),(0,i.kt)("p",null,"Compute the count function by computing the intersection, union and difference set of the expression bitmap. The syntax and parameters is the same as orthogonal_bitmap_expr_calculate"),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("p",null,"orthogonal_bitmap_expr_calculate_count(bitmap_column, filter_column, input_string)"),(0,i.kt)("p",null,"Explain:"),(0,i.kt)("p",null,"the aggregation of query planning is divided into two layers. The first layer of be aggregation node calculation includes init, update, and serialize steps. The second layer of be aggregation node calculation includes merge and finalize steps. In the first layer of be node, the input string is parsed in the init phase, converted to suffix expression Formula (inverse Polish formula), parse the calculated key value and initialize it in the map<key, bitmap>structure; In the update phase, the underlying kernel scan dimension column (filter_column) calls back the update function, and then aggregates the bitmap in the map structure of the previous step in the unit of computing key; In the serialize stage, the bitmap of the key column is parsed according to the suffix expression, and the bitmap intersection, merge and difference set is calculated using the first in, last out principle of the stack structure. Then the count value of the final bitmap is serialized and sent to the aggregation be node in the second layer.> Aggregates be nodes in the second layer, adds and sums all count values from the first layer nodes, and returns the final count result."),(0,i.kt)("h3",{id:"suitable-for-the-scene"},"Suitable for the scene"),(0,i.kt)("p",null,"It is consistent with the scenario of orthogonal calculation of bitmap, such as calculation retention, funnel, user portrait, etc."),(0,i.kt)("p",null,"Crowd selection:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select orthogonal_bitmap_intersect_count(user_id, tag, 13080800, 11110200) from user_tag_bitmap where tag in (13080800, 11110200);\n\nNote: 13080800 and 11110200 represent user labels\n")),(0,i.kt)("p",null,"Calculate the deduplication value for user_id:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select orthogonal_bitmap_union_count(user_id) from user_tag_bitmap where tag in (13080800, 11110200);\n")),(0,i.kt)("p",null,"Bitmap cross merge difference set hybrid computing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select orthogonal_bitmap_expr_calculate_count(user_id, tag, '(833736|999777)&(1308083|231207)&(1000|20000-30000)') from user_tag_bitmap where tag in (833736,999777,130808,231207,1000,20000,30000);\nNote: 1000, 20000, 30000 plastic tags represent different labels of users\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select orthogonal_bitmap_expr_calculate_count(user_id, tag, '(A:a/b|B:2\\\\-4)&(C:1-D:12)&E:23') from user_str_tag_bitmap where tag in ('A:a/b', 'B:2-4', 'C:1', 'D:12', 'E:23');\nNote: 'A:a/b', 'B:2-4', etc. are string types tag, representing different labels of users, where 'B:2-4' needs to be escaped as'B:2\\\\-4'\n")))}d.isMDXComponent=!0}}]);