"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[63349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const a={title:"AES",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/aes",id:"version-1.2/sql-manual/sql-functions/encrypt-digest-functions/aes",title:"AES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/encrypt-digest-functions/aes.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/aes",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/encrypt-digest-functions/aes",draft:!1,tags:[],version:"1.2",frontMatter:{title:"AES",language:"zh-CN"},sidebar:"docs",previous:{title:"mod",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/mod"},next:{title:"MD5",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/encrypt-digest-functions/md5"}},p={},s=[{value:"AES_ENCRYPT",id:"aes_encrypt",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Compatibility",id:"compatibility",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return Type",id:"return-type",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"AES_DECRYPT",id:"aes_decrypt",level:2},{value:"Name",id:"name-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"Return Type",id:"return-type-1",level:4},{value:"Example",id:"example-1",level:3},{value:"Keywords",id:"keywords-1",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"aes_encrypt"},"AES_ENCRYPT"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"AES_ENCRYPT"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"Aes \u52a0\u5bc6\u51fd\u6570\u3002\u8be5\u51fd\u6570\u4e0e MySQL \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"AES_ENCRYPT")," \u51fd\u6570\u884c\u4e3a\u4e00\u81f4\u3002\u9ed8\u8ba4\u91c7\u7528 AES_128_ECB \u7b97\u6cd5\uff0cpadding \u6a21\u5f0f\u4e3a PKCS7\u3002\u5e95\u5c42\u4f7f\u7528 OpenSSL \u5e93\u8fdb\u884c\u52a0\u5bc6\u3002\nReference: ",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt"},"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt")),(0,l.kt)("h3",{id:"compatibility"},"Compatibility"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"aes_decrypt/aes_encrypt/sm4_decrypt/sm4_encrypt \u5f53\u6ca1\u6709\u63d0\u4f9b\u521d\u59cb\u5411\u91cf\u65f6\uff0cblock_encryption_mode \u4e0d\u751f\u6548\uff0c\u6700\u7ec8\u90fd\u4f1a\u4f7f\u7528 AES_128_ECB \u52a0\u89e3\u5bc6\uff0c\u8fd9\u548c MySQL \u7684\u884c\u4e3a\u4e0d\u4e00\u81f4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u589e\u52a0 aes_decrypt_v2/aes_encrypt_v2/sm4_decrypt_v2/sm4_encrypt_v2 \u51fd\u6570\u652f\u6301\u6b63\u786e\u7684\u884c\u4e3a\uff0c\u6ca1\u6709\u63d0\u4f9b\u521d\u59cb\u5411\u91cf\u65f6\uff0cblock_encryption_mode \u53ef\u4ee5\u751f\u6548\uff0caes-192-ecb \u548c aes-256-ecb \u5c06\u6b63\u786e\u52a0\u89e3\u5bc6\uff0c\u5176\u4ed6\u5757\u52a0\u5bc6\u6a21\u5f0f\u5c06\u62a5\u9519\u3002\u5982\u679c\u65e0\u9700\u517c\u5bb9\u65e7\u6570\u636e\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528v2\u51fd\u6570\u3002")),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AES_ENCRYPT(str, key_str[, init_vector])")),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str"),": \u5f85\u52a0\u5bc6\u7684\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key_str"),": \u5bc6\u94a5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"init_vector"),": \u521d\u59cb\u5411\u91cf\u3002block_encryption_mode \u9ed8\u8ba4\u503c\u4e3a aes-128-ecb\uff0c\u5b83\u4e0d\u9700\u8981\u521d\u59cb\u5411\u91cf\uff0c\u53ef\u9009\u7684\u5757\u52a0\u5bc6\u6a21\u5f0f CBC\u3001CFB1\u3001CFB8\u3001CFB128 \u548c OFB \u90fd\u9700\u8981\u4e00\u4e2a\u521d\u59cb\u5411\u91cf\u3002")),(0,l.kt)("h4",{id:"return-type"},"Return Type"),(0,l.kt)("p",null,"VARCHAR(*)"),(0,l.kt)("h4",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"AES_ENCRYPT \u51fd\u6570\u5bf9\u4e8e\u4f20\u5165\u7684\u5bc6\u94a5\uff0c\u5e76\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528\uff0c\u800c\u662f\u4f1a\u8fdb\u4e00\u6b65\u505a\u5904\u7406\uff0c\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6839\u636e\u4f7f\u7528\u7684\u52a0\u5bc6\u7b97\u6cd5\uff0c\u786e\u5b9a\u5bc6\u94a5\u7684\u5b57\u8282\u6570\uff0c\u6bd4\u5982\u4f7f\u7528 AES_128_ECB \u7b97\u6cd5\uff0c\u5219\u5bc6\u94a5\u5b57\u8282\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"128 / 8 = 16"),"\uff08\u5982\u679c\u4f7f\u7528 AES_256_ECB \u7b97\u6cd5\uff0c\u5219\u5bc6\u94a5\u5b57\u8282\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"128 / 8 = 32"),"\uff09\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u7136\u540e\u9488\u5bf9\u7528\u6237\u8f93\u5165\u7684\u5bc6\u94a5\uff0c\u7b2c ",(0,l.kt)("inlineCode",{parentName:"li"},"i")," \u4f4d\u548c\u7b2c ",(0,l.kt)("inlineCode",{parentName:"li"},"16*k+i")," \u4f4d\u8fdb\u884c\u5f02\u6216\uff0c\u5982\u679c\u7528\u6237\u8f93\u5165\u7684\u5bc6\u94a5\u4e0d\u8db3 16 \u4f4d\uff0c\u5219\u540e\u9762\u8865 0\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6700\u540e\uff0c\u518d\u4f7f\u7528\u65b0\u751f\u6210\u7684\u5bc6\u94a5\u8fdb\u884c\u52a0\u5bc6\uff1b")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3'));\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u4e0e\u5728 MySQL \u4e2d\u6267\u884c\u7684\u7ed3\u679c\u4e00\u81f4\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+--------------------------------+\n| to_base64(aes_encrypt('text')) |\n+--------------------------------+\n| wr2JEDVXzL9+2XtRhgIloA==       |\n+--------------------------------+\n1 row in set (0.01 sec)\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u66f4\u6362\u5176\u4ed6\u52a0\u5bc6\u7b97\u6cd5\uff0c\u53ef\u4ee5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set block_encryption_mode=\"AES_256_CBC\";\nselect to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+-----------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '0123456789')) |\n+-----------------------------------------------------+\n| tsmK1HzbpnEdR2//WhO+MA==                            |\n+-----------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,l.kt)("p",null,"\u5173\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"block_encryption_mode")," \u53ef\u9009\u7684\u503c\u53ef\u4ee5\u53c2\u89c1\uff1a",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/advanced/variables"},"\u53d8\u91cf\u7ae0\u8282"),"\u3002"),(0,l.kt)("h3",{id:"keywords"},"Keywords"),(0,l.kt)("p",null,"AES_ENCRYPT"),(0,l.kt)("h2",{id:"aes_decrypt"},"AES_DECRYPT"),(0,l.kt)("h3",{id:"name-1"},"Name"),(0,l.kt)("p",null,"AES_DECRYPT"),(0,l.kt)("h3",{id:"description-1"},"Description"),(0,l.kt)("p",null,"Aes \u89e3\u5bc6\u51fd\u6570\u3002\u8be5\u51fd\u6570\u4e0e MySQL \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"AES_DECRYPT")," \u51fd\u6570\u884c\u4e3a\u4e00\u81f4\u3002\u9ed8\u8ba4\u91c7\u7528 AES_128_ECB \u7b97\u6cd5\uff0cpadding \u6a21\u5f0f\u4e3a PKCS7\u3002\u5e95\u5c42\u4f7f\u7528 OpenSSL \u5e93\u8fdb\u884c\u52a0\u5bc6\u3002"),(0,l.kt)("h4",{id:"syntax-1"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AES_DECRYPT(str,key_str[,init_vector])\n")),(0,l.kt)("h4",{id:"arguments-1"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str"),": \u5df2\u52a0\u5bc6\u7684\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key_str"),": \u5bc6\u94a5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"init_vector"),": \u521d\u59cb\u5411\u91cf")),(0,l.kt)("h4",{id:"return-type-1"},"Return Type"),(0,l.kt)("p",null,"VARCHAR(*)"),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA=='),'F3229A0B371ED2D9441B830D21A390C3');\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u4e0e\u5728 MySQL \u4e2d\u6267\u884c\u7684\u7ed3\u679c\u4e00\u81f4\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+------------------------------------------------------+\n| aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u66f4\u6362\u5176\u4ed6\u52a0\u5bc6\u7b97\u6cd5\uff0c\u53ef\u4ee5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set block_encryption_mode=\"AES_256_CBC\";\nselect AES_DECRYPT(FROM_BASE64('tsmK1HzbpnEdR2//WhO+MA=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+---------------------------------------------------------------------------+\n| aes_decrypt(from_base64('tsmK1HzbpnEdR2//WhO+MA=='), '***', '0123456789') |\n+---------------------------------------------------------------------------+\n| text                                                                      |\n+---------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,l.kt)("p",null,"\u5173\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"block_encryption_mode")," \u53ef\u9009\u7684\u503c\u53ef\u4ee5\u53c2\u89c1\uff1a",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/advanced/variables"},"\u53d8\u91cf\u7ae0\u8282"),"\u3002"),(0,l.kt)("h3",{id:"keywords-1"},"Keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AES_DECRYPT\n")))}d.isMDXComponent=!0}}]);