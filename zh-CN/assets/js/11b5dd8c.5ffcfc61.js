"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[9633],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>s});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",_={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=u(a),b=l,s=m["".concat(p,".").concat(b)]||m[b]||_[b]||r;return a?n.createElement(s,i(i({ref:e},c),{},{components:a})):n.createElement(s,i({ref:e},c))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=b;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},58553:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>_,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={title:"BITMAP\u7cbe\u51c6\u53bb\u91cd",language:"zh-CN"},i=void 0,o={unversionedId:"advanced/orthogonal-bitmap-manual",id:"advanced/orthogonal-bitmap-manual",title:"BITMAP\u7cbe\u51c6\u53bb\u91cd",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/orthogonal-bitmap-manual.md",sourceDirName:"advanced",slug:"/advanced/orthogonal-bitmap-manual",permalink:"/zh-CN/docs/dev/advanced/orthogonal-bitmap-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP\u7cbe\u51c6\u53bb\u91cd",language:"zh-CN"},sidebar:"docs",previous:{title:"\u8d44\u6e90\u7ba1\u7406",permalink:"/zh-CN/docs/dev/advanced/resource"},next:{title:"\u4f7f\u7528HLL\u8fd1\u4f3c\u53bb\u91cd",permalink:"/zh-CN/docs/dev/advanced/using-hll"}},p={},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u4f7f\u7528\u6307\u5357",id:"\u4f7f\u7528\u6307\u5357",level:2},{value:"Create table",id:"create-table",level:3},{value:"Data Load",id:"data-load",level:3},{value:"bitmap_orthogonal_intersect",id:"bitmap_orthogonal_intersect",level:4},{value:"orthogonal_bitmap_intersect_count",id:"orthogonal_bitmap_intersect_count",level:4},{value:"orthogonal_bitmap_union_count",id:"orthogonal_bitmap_union_count",level:4},{value:"orthogonal_bitmap_expr_calculate",id:"orthogonal_bitmap_expr_calculate",level:4},{value:"orthogonal_bitmap_expr_calculate_count",id:"orthogonal_bitmap_expr_calculate_count",level:4},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3}],c={toc:u},m="wrapper";function _(t){let{components:e,...a}=t;return(0,l.kt)(m,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bitmap\u7cbe\u51c6\u53bb\u91cd"},"BITMAP\u7cbe\u51c6\u53bb\u91cd"),(0,l.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("p",null,"Doris\u539f\u6709\u7684Bitmap\u805a\u5408\u51fd\u6570\u8bbe\u8ba1\u6bd4\u8f83\u901a\u7528\uff0c\u4f46\u5bf9\u4ebf\u7ea7\u522b\u4ee5\u4e0abitmap\u5927\u57fa\u6570\u7684\u4ea4\u5e76\u96c6\u8ba1\u7b97\u6027\u80fd\u8f83\u5dee\u3002\u6392\u67e5\u540e\u7aefbe\u7684bitmap\u805a\u5408\u51fd\u6570\u903b\u8f91\uff0c\u53d1\u73b0\u4e3b\u8981\u6709\u4e24\u4e2a\u539f\u56e0\u3002\u4e00\u662f\u5f53bitmap\u57fa\u6570\u8f83\u5927\u65f6\uff0c\u5982bitmap\u5927\u5c0f\u8d85\u8fc71g\uff0c\u7f51\u7edc/\u78c1\u76d8IO\u5904\u7406\u65f6\u95f4\u6bd4\u8f83\u957f\uff1b\u4e8c\u662f\u540e\u7aefbe\u5b9e\u4f8b\u5728scan\u6570\u636e\u540e\u5168\u90e8\u4f20\u8f93\u5230\u9876\u5c42\u8282\u70b9\u8fdb\u884c\u6c42\u4ea4\u548c\u5e76\u8fd0\u7b97\uff0c\u7ed9\u9876\u5c42\u5355\u8282\u70b9\u5e26\u6765\u538b\u529b\uff0c\u6210\u4e3a\u5904\u7406\u74f6\u9888\u3002"),(0,l.kt)("p",null,"\u89e3\u51b3\u601d\u8def\u662f\u5c06bitmap\u5217\u7684\u503c\u6309\u7167range\u5212\u5206\uff0c\u4e0d\u540crange\u7684\u503c\u5b58\u50a8\u5728\u4e0d\u540c\u7684\u5206\u6876\u4e2d\uff0c\u4fdd\u8bc1\u4e86\u4e0d\u540c\u5206\u6876\u7684bitmap\u503c\u662f\u6b63\u4ea4\u7684\u3002\u5f53\u67e5\u8be2\u65f6\uff0c\u5148\u5206\u522b\u5bf9\u4e0d\u540c\u5206\u6876\u4e2d\u7684\u6b63\u4ea4bitmap\u8fdb\u884c\u805a\u5408\u8ba1\u7b97\uff0c\u7136\u540e\u9876\u5c42\u8282\u70b9\u76f4\u63a5\u5c06\u805a\u5408\u8ba1\u7b97\u540e\u7684\u503c\u5408\u5e76\u6c47\u603b\uff0c\u5e76\u8f93\u51fa\u3002\u5982\u6b64\u4f1a\u5927\u5927\u63d0\u9ad8\u8ba1\u7b97\u6548\u7387\uff0c\u89e3\u51b3\u4e86\u9876\u5c42\u5355\u8282\u70b9\u8ba1\u7b97\u74f6\u9888\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u6307\u5357"},"\u4f7f\u7528\u6307\u5357"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5efa\u8868\uff0c\u589e\u52a0hid\u5217\uff0c\u8868\u793abitmap\u5217\u503cid\u8303\u56f4, \u4f5c\u4e3ahash\u5206\u6876\u5217"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u573a\u666f")),(0,l.kt)("h3",{id:"create-table"},"Create table"),(0,l.kt)("p",null,"\u5efa\u8868\u65f6\u9700\u8981\u4f7f\u7528\u805a\u5408\u6a21\u578b\uff0c\u6570\u636e\u7c7b\u578b\u662f bitmap , \u805a\u5408\u51fd\u6570\u662f bitmap_union"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `user_tag_bitmap` (\n  `tag` bigint(20) NULL COMMENT "\u7528\u6237\u6807\u7b7e",\n  `hid` smallint(6) NULL COMMENT "\u5206\u6876id",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`tag`, `hid`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`hid`) BUCKETS 3\n')),(0,l.kt)("p",null,"\u8868schema\u589e\u52a0hid\u5217\uff0c\u8868\u793aid\u8303\u56f4, \u4f5c\u4e3ahash\u5206\u6876\u5217\u3002"),(0,l.kt)("p",null,"\u6ce8\uff1ahid\u6570\u548cBUCKETS\u8981\u8bbe\u7f6e\u5408\u7406\uff0chid\u6570\u8bbe\u7f6e\u81f3\u5c11\u662fBUCKETS\u76845\u500d\u4ee5\u4e0a\uff0c\u4ee5\u4f7f\u6570\u636ehash\u5206\u6876\u5c3d\u91cf\u5747\u8861"),(0,l.kt)("h3",{id:"data-load"},"Data Load"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LOAD LABEL user_tag_bitmap_test\n(\nDATA INFILE('hdfs://abc')\nINTO TABLE user_tag_bitmap\nCOLUMNS TERMINATED BY ','\n(tmp_tag, tmp_user_id)\nSET (\ntag = tmp_tag,\nhid = ceil(tmp_user_id/5000000),\nuser_id = to_bitmap(tmp_user_id)\n)\n)\n\u6ce8\u610f\uff1a5000000\u8fd9\u4e2a\u6570\u4e0d\u56fa\u5b9a\uff0c\u53ef\u6309\u9700\u8c03\u6574\n...\n")),(0,l.kt)("p",null,"\u6570\u636e\u683c\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"11111111,1\n11111112,2\n11111113,3\n11111114,4\n...\n")),(0,l.kt)("p",null,"\u6ce8\uff1a\u7b2c\u4e00\u5217\u4ee3\u8868\u7528\u6237\u6807\u7b7e\uff0c\u7531\u4e2d\u6587\u8f6c\u6362\u6210\u6570\u5b57"),(0,l.kt)("p",null,"load\u6570\u636e\u65f6\uff0c\u5bf9\u7528\u6237bitmap\u503crange\u8303\u56f4\u7eb5\u5411\u5207\u5272\uff0c\u4f8b\u5982\uff0c\u7528\u6237id\u57281-5000000\u8303\u56f4\u5185\u7684hid\u503c\u76f8\u540c\uff0chid\u503c\u76f8\u540c\u7684\u884c\u4f1a\u5206\u914d\u5230\u4e00\u4e2a\u5206\u6876\u5185\uff0c\u5982\u6b64\u6bcf\u4e2a\u5206\u6876\u5185\u5230\u7684bitmap\u90fd\u662f\u6b63\u4ea4\u7684\u3002\u53ef\u4ee5\u5229\u7528\u6876\u5185bitmap\u503c\u6b63\u4ea4\u7279\u6027\uff0c\u8fdb\u884c\u4ea4\u5e76\u96c6\u8ba1\u7b97\uff0c\u8ba1\u7b97\u7ed3\u679c\u4f1a\u88abshuffle\u81f3top\u8282\u70b9\u805a\u5408\u3002"),(0,l.kt)("p",null,"\u6ce8\uff1a\u6b63\u4ea4bitmap\u51fd\u6570\u4e0d\u80fd\u7528\u5728\u5206\u533a\u8868\uff0c\u56e0\u4e3a\u5206\u533a\u8868\u5206\u533a\u5185\u6b63\u4ea4\uff0c\u5206\u533a\u4e4b\u95f4\u7684\u6570\u636e\u662f\u65e0\u6cd5\u4fdd\u8bc1\u6b63\u4ea4\u7684\uff0c\u5219\u8ba1\u7b97\u7ed3\u679c\u4e5f\u662f\u65e0\u6cd5\u9884\u4f30\u7684\u3002"),(0,l.kt)("h4",{id:"bitmap_orthogonal_intersect"},"bitmap_orthogonal_intersect"),(0,l.kt)("p",null,"\u6c42bitmap\u4ea4\u96c6\u51fd\u6570"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("p",null,"orthogonal_bitmap_intersect(bitmap_column, column_to_filter, filter_values)"),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662fBitmap\u5217\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u7528\u6765\u8fc7\u6ee4\u7684\u7ef4\u5ea6\u5217\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u53d8\u957f\u53c2\u6570\uff0c\u542b\u4e49\u662f\u8fc7\u6ee4\u7ef4\u5ea6\u5217\u7684\u4e0d\u540c\u53d6\u503c"),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u67e5\u8be2\u89c4\u5212\u4e0a\u805a\u5408\u52062\u5c42\uff0c\u5728\u7b2c\u4e00\u5c42be\u8282\u70b9\uff08update\u3001serialize\uff09\u5148\u6309filter_values\u4e3akey\u8fdb\u884chash\u805a\u5408\uff0c\u7136\u540e\u5bf9\u6240\u6709key\u7684bitmap\u6c42\u4ea4\u96c6\uff0c\u7ed3\u679c\u5e8f\u5217\u5316\u540e\u53d1\u9001\u81f3\u7b2c\u4e8c\u5c42be\u8282\u70b9(merge\u3001finalize)\uff0c\u5728\u7b2c\u4e8c\u5c42be\u8282\u70b9\u5bf9\u6240\u6709\u6765\u6e90\u4e8e\u7b2c\u4e00\u5c42\u8282\u70b9\u7684bitmap\u503c\u5faa\u73af\u6c42\u5e76\u96c6"),(0,l.kt)("p",null,"\u6837\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select BITMAP_COUNT(orthogonal_bitmap_intersect(user_id, tag, 13080800, 11110200)) from user_tag_bitmap  where tag in (13080800, 11110200);\n")),(0,l.kt)("h4",{id:"orthogonal_bitmap_intersect_count"},"orthogonal_bitmap_intersect_count"),(0,l.kt)("p",null,"\u6c42bitmap\u4ea4\u96c6count\u51fd\u6570,\u8bed\u6cd5\u540c\u539f\u7248intersect_count\uff0c\u4f46\u5b9e\u73b0\u4e0d\u540c"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("p",null,"orthogonal_bitmap_intersect_count(bitmap_column, column_to_filter, filter_values)"),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662fBitmap\u5217\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u7528\u6765\u8fc7\u6ee4\u7684\u7ef4\u5ea6\u5217\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u5f00\u59cb\u662f\u53d8\u957f\u53c2\u6570\uff0c\u542b\u4e49\u662f\u8fc7\u6ee4\u7ef4\u5ea6\u5217\u7684\u4e0d\u540c\u53d6\u503c"),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u67e5\u8be2\u89c4\u5212\u805a\u5408\u4e0a\u52062\u5c42\uff0c\u5728\u7b2c\u4e00\u5c42be\u8282\u70b9\uff08update\u3001serialize\uff09\u5148\u6309filter_values\u4e3akey\u8fdb\u884chash\u805a\u5408\uff0c\u7136\u540e\u5bf9\u6240\u6709key\u7684bitmap\u6c42\u4ea4\u96c6\uff0c\u518d\u5bf9\u4ea4\u96c6\u7ed3\u679c\u6c42count\uff0ccount\u503c\u5e8f\u5217\u5316\u540e\u53d1\u9001\u81f3\u7b2c\u4e8c\u5c42be\u8282\u70b9\uff08merge\u3001finalize\uff09\uff0c\u5728\u7b2c\u4e8c\u5c42be\u8282\u70b9\u5bf9\u6240\u6709\u6765\u6e90\u4e8e\u7b2c\u4e00\u5c42\u8282\u70b9\u7684count\u503c\u5faa\u73af\u6c42sum"),(0,l.kt)("h4",{id:"orthogonal_bitmap_union_count"},"orthogonal_bitmap_union_count"),(0,l.kt)("p",null,"\u6c42bitmap\u5e76\u96c6count\u51fd\u6570\uff0c\u8bed\u6cd5\u540c\u539f\u7248bitmap_union_count\uff0c\u4f46\u5b9e\u73b0\u4e0d\u540c\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("p",null,"orthogonal_bitmap_union_count(bitmap_column)"),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("p",null,"\u53c2\u6570\u7c7b\u578b\u662fbitmap\uff0c\u662f\u5f85\u6c42\u5e76\u96c6count\u7684\u5217"),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u67e5\u8be2\u89c4\u5212\u4e0a\u52062\u5c42\uff0c\u5728\u7b2c\u4e00\u5c42be\u8282\u70b9\uff08update\u3001serialize\uff09\u5bf9\u6240\u6709bitmap\u6c42\u5e76\u96c6\uff0c\u518d\u5bf9\u5e76\u96c6\u7684\u7ed3\u679cbitmap\u6c42count\uff0ccount\u503c\u5e8f\u5217\u5316\u540e\u53d1\u9001\u81f3\u7b2c\u4e8c\u5c42be\u8282\u70b9\uff08merge\u3001finalize\uff09\uff0c\u5728\u7b2c\u4e8c\u5c42be\u8282\u70b9\u5bf9\u6240\u6709\u6765\u6e90\u4e8e\u7b2c\u4e00\u5c42\u8282\u70b9\u7684count\u503c\u5faa\u73af\u6c42sum"),(0,l.kt)("h4",{id:"orthogonal_bitmap_expr_calculate"},"orthogonal_bitmap_expr_calculate"),(0,l.kt)("p",null,"\u6c42\u8868\u8fbe\u5f0fbitmap\u4ea4\u5e76\u5dee\u96c6\u5408\u8ba1\u7b97\u51fd\u6570\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("p",null,"orthogonal_bitmap_expr_calculate(bitmap_column, filter_column, input_string)"),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662fBitmap\u5217\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u7528\u6765\u8fc7\u6ee4\u7684\u7ef4\u5ea6\u5217\uff0c\u5373\u8ba1\u7b97\u7684key\u5217\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u8ba1\u7b97\u8868\u8fbe\u5f0f\u5b57\u7b26\u4e32\uff0c\u542b\u4e49\u662f\u4f9d\u636ekey\u5217\u8fdb\u884cbitmap\u4ea4\u5e76\u5dee\u96c6\u8868\u8fbe\u5f0f\u8ba1\u7b97"),(0,l.kt)("p",null,"\u8868\u8fbe\u5f0f\u652f\u6301\u7684\u8ba1\u7b97\u7b26\uff1a& \u4ee3\u8868\u4ea4\u96c6\u8ba1\u7b97\uff0c| \u4ee3\u8868\u5e76\u96c6\u8ba1\u7b97\uff0c- \u4ee3\u8868\u5dee\u96c6\u8ba1\u7b97, ^ \u4ee3\u8868\u5f02\u6216\u8ba1\u7b97\uff0c\\ \u4ee3\u8868\u8f6c\u4e49\u5b57\u7b26"),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u67e5\u8be2\u89c4\u5212\u4e0a\u805a\u5408\u52062\u5c42\uff0c\u7b2c\u4e00\u5c42be\u805a\u5408\u8282\u70b9\u8ba1\u7b97\u5305\u62ecinit\u3001update\u3001serialize\u6b65\u9aa4\uff0c\u7b2c\u4e8c\u5c42be\u805a\u5408\u8282\u70b9\u8ba1\u7b97\u5305\u62ecmerge\u3001finalize\u6b65\u9aa4\u3002\u5728\u7b2c\u4e00\u5c42be\u8282\u70b9\uff0cinit\u9636\u6bb5\u89e3\u6790input_string\u5b57\u7b26\u4e32\uff0c\u8f6c\u6362\u4e3a\u540e\u7f00\u8868\u8fbe\u5f0f\uff08\u9006\u6ce2\u5170\u5f0f\uff09\uff0c\u89e3\u6790\u51fa\u8ba1\u7b97key\u503c\uff0c\u5e76\u5728map<key, bitmap>\u7ed3\u6784\u4e2d\u521d\u59cb\u5316\uff1bupdate\u9636\u6bb5\uff0c\u5e95\u5c42\u5185\u6838scan\u7ef4\u5ea6\u5217\uff08filter_column\uff09\u6570\u636e\u540e\u56de\u8c03update\u51fd\u6570\uff0c\u7136\u540e\u4ee5\u8ba1\u7b97key\u4e3a\u5355\u4f4d\u5bf9\u4e0a\u4e00\u6b65\u7684map\u7ed3\u6784\u4e2d\u7684bitmap\u8fdb\u884c\u805a\u5408\uff1bserialize\u9636\u6bb5\uff0c\u6839\u636e\u540e\u7f00\u8868\u8fbe\u5f0f\uff0c\u89e3\u6790\u51fa\u8ba1\u7b97key\u5217\u7684bitmap\uff0c\u5229\u7528\u6808\u7ed3\u6784\u5148\u8fdb\u540e\u51fa\u539f\u5219\uff0c\u8fdb\u884cbitmap\u4ea4\u5e76\u5dee\u96c6\u5408\u8ba1\u7b97\uff0c\u7136\u540e\u5bf9\u6700\u7ec8\u7684\u7ed3\u679cbitmap\u5e8f\u5217\u5316\u540e\u53d1\u9001\u81f3\u7b2c\u4e8c\u5c42\u805a\u5408be\u8282\u70b9\u3002\u5728\u7b2c\u4e8c\u5c42\u805a\u5408be\u8282\u70b9\uff0c\u5bf9\u6240\u6709\u6765\u6e90\u4e8e\u7b2c\u4e00\u5c42\u8282\u70b9\u7684bitmap\u503c\u6c42\u5e76\u96c6\uff0c\u5e76\u8fd4\u56de\u6700\u7ec8bitmap\u7ed3\u679c"),(0,l.kt)("h4",{id:"orthogonal_bitmap_expr_calculate_count"},"orthogonal_bitmap_expr_calculate_count"),(0,l.kt)("p",null,"\u6c42\u8868\u8fbe\u5f0fbitmap\u4ea4\u5e76\u5dee\u96c6\u5408\u8ba1\u7b97count\u51fd\u6570, \u8bed\u6cd5\u548c\u53c2\u6570\u540corthogonal_bitmap_expr_calculate\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("p",null,"orthogonal_bitmap_expr_calculate_count(bitmap_column, filter_column, input_string)"),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u67e5\u8be2\u89c4\u5212\u4e0a\u805a\u5408\u52062\u5c42\uff0c\u7b2c\u4e00\u5c42be\u805a\u5408\u8282\u70b9\u8ba1\u7b97\u5305\u62ecinit\u3001update\u3001serialize\u6b65\u9aa4\uff0c\u7b2c\u4e8c\u5c42be\u805a\u5408\u8282\u70b9\u8ba1\u7b97\u5305\u62ecmerge\u3001finalize\u6b65\u9aa4\u3002\u5728\u7b2c\u4e00\u5c42be\u8282\u70b9\uff0cinit\u9636\u6bb5\u89e3\u6790input_string\u5b57\u7b26\u4e32\uff0c\u8f6c\u6362\u4e3a\u540e\u7f00\u8868\u8fbe\u5f0f\uff08\u9006\u6ce2\u5170\u5f0f\uff09\uff0c\u89e3\u6790\u51fa\u8ba1\u7b97key\u503c\uff0c\u5e76\u5728map<key, bitmap>\u7ed3\u6784\u4e2d\u521d\u59cb\u5316\uff1bupdate\u9636\u6bb5\uff0c\u5e95\u5c42\u5185\u6838scan\u7ef4\u5ea6\u5217\uff08filter_column\uff09\u6570\u636e\u540e\u56de\u8c03update\u51fd\u6570\uff0c\u7136\u540e\u4ee5\u8ba1\u7b97key\u4e3a\u5355\u4f4d\u5bf9\u4e0a\u4e00\u6b65\u7684map\u7ed3\u6784\u4e2d\u7684bitmap\u8fdb\u884c\u805a\u5408\uff1bserialize\u9636\u6bb5\uff0c\u6839\u636e\u540e\u7f00\u8868\u8fbe\u5f0f\uff0c\u89e3\u6790\u51fa\u8ba1\u7b97key\u5217\u7684bitmap\uff0c\u5229\u7528\u6808\u7ed3\u6784\u5148\u8fdb\u540e\u51fa\u539f\u5219\uff0c\u8fdb\u884cbitmap\u4ea4\u5e76\u5dee\u96c6\u5408\u8ba1\u7b97\uff0c\u7136\u540e\u5bf9\u6700\u7ec8\u7684\u7ed3\u679cbitmap\u7684count\u503c\u5e8f\u5217\u5316\u540e\u53d1\u9001\u81f3\u7b2c\u4e8c\u5c42\u805a\u5408be\u8282\u70b9\u3002\u5728\u7b2c\u4e8c\u5c42\u805a\u5408be\u8282\u70b9\uff0c\u5bf9\u6240\u6709\u6765\u6e90\u4e8e\u7b2c\u4e00\u5c42\u8282\u70b9\u7684count\u503c\u6c42\u52a0\u548c\uff0c\u5e76\u8fd4\u56de\u6700\u7ec8count\u7ed3\u679c\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u7b26\u5408\u5bf9bitmap\u8fdb\u884c\u6b63\u4ea4\u8ba1\u7b97\u7684\u573a\u666f\uff0c\u5982\u5728\u7528\u6237\u884c\u4e3a\u5206\u6790\u4e2d\uff0c\u8ba1\u7b97\u7559\u5b58\uff0c\u6f0f\u6597\uff0c\u7528\u6237\u753b\u50cf\u7b49\u3002"),(0,l.kt)("p",null,"\u4eba\u7fa4\u5708\u9009\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"}," select orthogonal_bitmap_intersect_count(user_id, tag, 13080800, 11110200) from user_tag_bitmap where tag in (13080800, 11110200);\n \u6ce8\uff1a13080800\u300111110200\u4ee3\u8868\u7528\u6237\u6807\u7b7e\n")),(0,l.kt)("p",null,"\u8ba1\u7b97user_id\u7684\u53bb\u91cd\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select orthogonal_bitmap_union_count(user_id) from user_tag_bitmap where tag in (13080800, 11110200);\n")),(0,l.kt)("p",null,"bitmap\u4ea4\u5e76\u5dee\u96c6\u5408\u6df7\u5408\u8ba1\u7b97\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select orthogonal_bitmap_expr_calculate_count(user_id, tag, '(833736|999777)&(1308083|231207)&(1000|20000-30000)') from user_tag_bitmap where tag in (833736,999777,130808,231207,1000,20000,30000);\n\u6ce8\uff1a1000\u300120000\u300130000\u7b49\u6574\u5f62tag\uff0c\u4ee3\u8868\u7528\u6237\u4e0d\u540c\u6807\u7b7e\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select orthogonal_bitmap_expr_calculate_count(user_id, tag, '(A:a/b|B:2\\\\-4)&(C:1-D:12)&E:23') from user_str_tag_bitmap where tag in ('A:a/b', 'B:2-4', 'C:1', 'D:12', 'E:23');\n \u6ce8\uff1a'A:a/b', 'B:2-4'\u7b49\u662f\u5b57\u7b26\u4e32\u7c7b\u578btag\uff0c\u4ee3\u8868\u7528\u6237\u4e0d\u540c\u6807\u7b7e, \u5176\u4e2d'B:2-4'\u9700\u8981\u8f6c\u4e49\u6210'B:2\\\\-4'\n")))}_.isMDXComponent=!0}}]);