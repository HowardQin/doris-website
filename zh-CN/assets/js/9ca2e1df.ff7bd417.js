"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53993],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>N});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),g=r,N=d["".concat(p,".").concat(g)]||d[g]||m[g]||i;return t?a.createElement(N,l(l({ref:n},u),{},{components:t})):a.createElement(N,l({ref:n},u))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},90122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"GROUPING_ID",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/aggregate-functions/grouping_id",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/grouping_id",title:"GROUPING_ID",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/aggregate-functions/grouping_id.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/grouping_id",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/grouping_id",draft:!1,tags:[],version:"1.2",frontMatter:{title:"GROUPING_ID",language:"zh-CN"},sidebar:"docs",previous:{title:"GROUPING",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/grouping"},next:{title:"to_bitmap",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/to_bitmap"}},p={},s=[{value:"GROUPING_ID",id:"grouping_id",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return Type",id:"return-type",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Comparing GROUPING_ID() to GROUPING()",id:"comparing-grouping_id-to-grouping",level:4},{value:"Technical Definition of GROUPING_ID()",id:"technical-definition-of-grouping_id",level:4},{value:"GROUPING_ID() Equivalents",id:"grouping_id-equivalents",level:4},{value:"Example",id:"example",level:3},{value:"A. Using GROUPING_ID to identify grouping levels",id:"a-using-grouping_id-to-identify-grouping-levels",level:4},{value:"B. Using GROUPING_ID to filter a result set",id:"b-using-grouping_id-to-filter-a-result-set",level:4},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"grouping_id"},"GROUPING_ID"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"GROUPING_ID"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7528\u6765\u8ba1\u7b97\u5206\u7ec4\u7ea7\u522b\u7684\u51fd\u6570\u3002\u5f53 SQL \u8bed\u53e5\u4e2d\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u5b50\u53e5\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPING_ID")," \u51fd\u6570\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT <select> list"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"HAVING")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u5b50\u53e5\u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GROUPING_ID ( <column_expression>[ ,...n ] )\n")),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<column_expression>")),(0,r.kt)("p",null,"\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u5b50\u53e5\u4e2d\u5305\u542b\u7684\u5217\u6216\u8868\u8fbe\u5f0f\u3002"),(0,r.kt)("h4",{id:"return-type"},"Return Type"),(0,r.kt)("p",null,"BIGINT"),(0,r.kt)("h4",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"GROUPING_ID \u51fd\u6570\u7684\u5165\u53c2 ",(0,r.kt)("inlineCode",{parentName:"p"},"<column_expression>")," \u5fc5\u987b\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u5b50\u53e5\u7684\u8868\u8fbe\u5f0f\u4e00\u81f4\u3002\u6bd4\u5982\u8bf4\uff0c\u5982\u679c\u4f60\u6309 ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id")," \u8fdb\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"\uff0c\u90a3\u4e48\u4f60\u7684 GROUPING_ID \u51fd\u6570\u5e94\u8be5\u8fd9\u4e48\u5199\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPING_ID (user_id)"),"\u3002\u518d\u6bd4\u5982\u8bf4\uff0c\u4f60\u6309 ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u8fdb\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"\uff0c\u90a3\u4e48\u51fd\u6570\u5e94\u8be5\u8fd9\u4e48\u5199\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPING_ID (name)"),"\u3002"),(0,r.kt)("h4",{id:"comparing-grouping_id-to-grouping"},"Comparing GROUPING_ID() to GROUPING()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GROUPING_ID(<column_expression> [ ,...n ])")," \u7684\u8ba1\u7b97\u89c4\u5219\u4e3a\uff0c\u5bf9\u4e8e\u8f93\u5165\u7684\u5b57\u6bb5\uff08\u6216\u8868\u8fbe\u5f0f\uff09\u5217\u8868\uff0c\u5206\u522b\u5bf9\u6bcf\u4e2a\u5b57\u6bb5\uff08\u6216\u8868\u8fbe\u5f0f\uff09\u8fdb\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPING(<column_expression>)")," \u8fd0\u7b97\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u7ec4\u6210\u4e00\u4e2a 01 \u4e32\u3002\u8fd9\u4e2a 01 \u4e32\u5b9e\u9645\u4e0a\u662f\u4e8c\u8fdb\u5236\u6570\uff0cGROUPING_ID \u51fd\u6570\u4f1a\u5c06\u5176\u8f6c\u5316\u4e3a\u5341\u8fdb\u5236\u6570\u8fd4\u56de\u3002\u6bd4\u5982\u8bf4\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT a, b, c, SUM(d), GROUPING_ID(a,b,c) FROM T GROUP BY <group by list>")," \u8bed\u53e5\u4e3a\u4f8b\uff0c\u4e0b\u9762\u5c55\u793a\u4e86 GROUPING_ID() \u51fd\u6570\u7684\u8f93\u5165\u548c\u8f93\u51fa\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Columns aggregated"),(0,r.kt)("th",{parentName:"tr",align:null},"GROUPING_ID (a, b, c) input = GROUPING(a) + GROUPING(b) + GROUPING(c)"),(0,r.kt)("th",{parentName:"tr",align:null},"GROUPING_ID () output"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"b")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"010")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"001")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ab")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"110")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"6"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ac")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"101")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bc")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"011")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"abc")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"111")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"7"))))),(0,r.kt)("h4",{id:"technical-definition-of-grouping_id"},"Technical Definition of GROUPING_ID()"),(0,r.kt)("p",null,"GROUPING_ID \u51fd\u6570\u7684\u5165\u53c2\u5fc5\u987b\u662f GROUP BY \u5b50\u53e5\u4e2d\u7684\u5b57\u6bb5\uff08\u6216\u5b57\u6bb5\u8868\u8fbe\u5f0f\uff09\u3002GROUPING_ID() \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u4f4d\u56fe\uff0c\u4f4d\u56fe\u4e2d\u7684\u6bcf\u4e00\u4f4d\u5747\u4e0e GROUP BY \u5b50\u53e5\u4e2d\u7684\u5b57\u6bb5\uff08\u6216\u5b57\u6bb5\u8868\u8fbe\u5f0f\uff09\u4e00\u4e00\u5bf9\u5e94\uff0c\u4f4d\u56fe\u4e2d\u7684\u6700\u4f4e\u4f4d\u4ee3\u8868\u7b2c N \u4e2a\u53c2\u6570\uff0c\u7b2c\u4e8c\u4f4e\u4f4d\u4ee3\u8868\u7b2c N-1 \u4e2a\u53c2\u6570\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\u5f53\u67d0\u4e00\u4f4d\u88ab\u7f6e\u4e3a 1 \u65f6\uff0c\u8868\u793a\u5176\u5bf9\u5e94\u7684\u5217\u4e0d\u53c2\u4e0e\u5206\u7ec4\u805a\u5408\u3002"),(0,r.kt)("h4",{id:"grouping_id-equivalents"},"GROUPING_ID() Equivalents"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u591a\u4e2a\u5b57\u6bb5\uff08\u6216\u5b57\u6bb5\u8868\u8fbe\u5f0f\uff09\u8fdb\u884c\u5206\u7ec4\u67e5\u8be2\u65f6\uff0c\u4ee5\u4e0b\u4e24\u4e2a\u58f0\u660e\u662f\u7b49\u4ef7\u7684\uff1a"),(0,r.kt)("p",null,"\u58f0\u660e A\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT GROUPING_ID(A,B)  \nFROM T   \nGROUP BY CUBE(A,B)\n")),(0,r.kt)("p",null,"\u58f0\u660e B\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 3 FROM T GROUP BY ()  \nUNION ALL  \nSELECT 1 FROM T GROUP BY A  \nUNION ALL  \nSELECT 2 FROM T GROUP BY B  \nUNION ALL  \nSELECT 0 FROM T GROUP BY A,B\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u53ea\u5bf9\u4e00\u4e2a\u5b57\u6bb5\uff08\u6216\u5b57\u6bb5\u8868\u8fbe\u5f0f\uff09\u8fdb\u884c\u5206\u7ec4\u67e5\u8be2\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPING (<column_expression>)")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPING_ID(<column_expression>)")," \u662f\u7b49\u4ef7\u5bf9\u3002"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"\u5728\u5f00\u59cb\u6211\u4eec\u7684\u4f8b\u5b50\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u51c6\u5907\u597d\u4ee5\u4e0b\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE employee (\n  uid        INT,\n  name       VARCHAR(32),\n  level      VARCHAR(32),\n  title      VARCHAR(32),\n  department VARCHAR(32),\n  hiredate   DATE\n)\nUNIQUE KEY(uid)\nDISTRIBUTED BY HASH(uid) BUCKETS 1\nPROPERTIES (\n  \"replication_num\" = \"1\"\n);\n\nINSERT INTO employee VALUES\n  (1, 'Abby', 'Senior', 'President', 'Board of Directors', '1999-11-13'),\n  (2, 'Bob', 'Senior', 'Vice-President', 'Board of Directors', '1999-11-13'),\n  (3, 'Candy', 'Senior', 'System Engineer', 'Technology', '2005-3-7'),\n  (4, 'Devere', 'Senior', 'Hardware Engineer', 'Technology', '2006-7-9'),\n  (5, 'Emilie', 'Senior', 'System Analyst', 'Technology', '2003-8-28'),\n  (6, 'Fredrick', 'Senior', 'Sales Manager', 'Sales', '2004-9-7'),\n  (7, 'Gitel', 'Assistant', 'Business Executive', 'Sales', '2003-3-19'),\n  (8, 'Haden', 'Trainee', 'Sales Assistant', 'Sales', '2007-6-30'),\n  (9, 'Irene', 'Assistant', 'Business Executive', 'Sales', '2005-10-20'),\n  (10, 'Jankin', 'Senior', 'Marketing Supervisor', 'Marketing', '2001-4-13'),\n  (11, 'Louis', 'Trainee', 'Marketing Assistant', 'Marketing', '2007-8-2'),\n  (12, 'Martin', 'Trainee', 'Marketing Assistant', 'Marketing', '2007-7-1'),\n  (13, 'Nasir', 'Assistant', 'Marketing Executive', 'Marketing', '2004-9-3');\n")),(0,r.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+------+----------+-----------+----------------------+--------------------+------------+\n| uid  | name     | level     | title                | department         | hiredate   |\n+------+----------+-----------+----------------------+--------------------+------------+\n|    1 | Abby     | Senior    | President            | Board of Directors | 1999-11-13 |\n|    2 | Bob      | Senior    | Vice-President       | Board of Directors | 1999-11-13 |\n|    3 | Candy    | Senior    | System Engineer      | Technology         | 2005-03-07 |\n|    4 | Devere   | Senior    | Hardware Engineer    | Technology         | 2006-07-09 |\n|    5 | Emilie   | Senior    | System Analyst       | Technology         | 2003-08-28 |\n|    6 | Fredrick | Senior    | Sales Manager        | Sales              | 2004-09-07 |\n|    7 | Gitel    | Assistant | Business Executive   | Sales              | 2003-03-19 |\n|    8 | Haden    | Trainee   | Sales Assistant      | Sales              | 2007-06-30 |\n|    9 | Irene    | Assistant | Business Executive   | Sales              | 2005-10-20 |\n|   10 | Jankin   | Senior    | Marketing Supervisor | Marketing          | 2001-04-13 |\n|   11 | Louis    | Trainee   | Marketing Assistant  | Marketing          | 2007-08-02 |\n|   12 | Martin   | Trainee   | Marketing Assistant  | Marketing          | 2007-07-01 |\n|   13 | Nasir    | Assistant | Marketing Executive  | Marketing          | 2004-09-03 |\n+------+----------+-----------+----------------------+--------------------+------------+\n13 rows in set (0.01 sec)\n")),(0,r.kt)("h4",{id:"a-using-grouping_id-to-identify-grouping-levels"},"A. Using GROUPING_ID to identify grouping levels"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u6309\u90e8\u95e8\u548c\u804c\u7ea7\u7edf\u8ba1\u96c7\u5458\u7684\u4eba\u6570\u3002GROUPING_ID() \u51fd\u6570\u88ab\u7528\u6765\u8ba1\u7b97\u6bcf\u4e00\u884c\u7684\u805a\u5408\u7a0b\u5ea6\uff0c\u5176\u7ed3\u679c\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Job Title")," \u8fd9\u4e00\u5217\u4e0a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  department,\n  CASE \n    WHEN GROUPING_ID(department, level) = 0 THEN level\n    WHEN GROUPING_ID(department, level) = 1 THEN CONCAT('Total: ', department)\n    WHEN GROUPING_ID(department, level) = 3 THEN 'Total: Company'\n    ELSE 'Unknown'\n  END AS 'Job Title',\n  COUNT(uid) AS 'Employee Count'\nFROM employee \nGROUP BY ROLLUP(department, level)\nORDER BY GROUPING_ID(department, level) ASC;\n")),(0,r.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+--------------------+---------------------------+----------------+\n| department         | Job Title                 | Employee Count |\n+--------------------+---------------------------+----------------+\n| Board of Directors | Senior                    |              2 |\n| Technology         | Senior                    |              3 |\n| Sales              | Senior                    |              1 |\n| Sales              | Assistant                 |              2 |\n| Sales              | Trainee                   |              1 |\n| Marketing          | Senior                    |              1 |\n| Marketing          | Trainee                   |              2 |\n| Marketing          | Assistant                 |              1 |\n| Board of Directors | Total: Board of Directors |              2 |\n| Technology         | Total: Technology         |              3 |\n| Sales              | Total: Sales              |              4 |\n| Marketing          | Total: Marketing          |              4 |\n| NULL               | Total: Company            |             13 |\n+--------------------+---------------------------+----------------+\n13 rows in set (0.01 sec)\n")),(0,r.kt)("h4",{id:"b-using-grouping_id-to-filter-a-result-set"},"B. Using GROUPING_ID to filter a result set"),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u5c06\u8fd4\u56de\u90e8\u95e8\u4e2d\u7684\u9ad8\u7ea7\u4eba\u5458\u7684\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  department,\n  CASE \n    WHEN GROUPING_ID(department, level) = 0 THEN level\n    WHEN GROUPING_ID(department, level) = 1 THEN CONCAT('Total: ', department)\n    WHEN GROUPING_ID(department, level) = 3 THEN 'Total: Company'\n    ELSE 'Unknown'\n  END AS 'Job Title',\n  COUNT(uid)\nFROM employee \nGROUP BY ROLLUP(department, level)\nHAVING `Job Title` IN ('Senior');\n")),(0,r.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+--------------------+-----------+--------------+\n| department         | Job Title | count(`uid`) |\n+--------------------+-----------+--------------+\n| Board of Directors | Senior    |            2 |\n| Technology         | Senior    |            3 |\n| Sales              | Senior    |            1 |\n| Marketing          | Senior    |            1 |\n+--------------------+-----------+--------------+\n5 rows in set (0.01 sec)\n")),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("p",null,"GROUPING_ID"),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/grouping"},"GROUPING"))))}m.isMDXComponent=!0}}]);