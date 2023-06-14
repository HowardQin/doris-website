"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[83653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[f]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"TLS certificate",language:"en"},c=void 0,o={unversionedId:"admin-manual/certificate",id:"admin-manual/certificate",title:"TLS certificate",description:"\x3c!--",source:"@site/docs/admin-manual/certificate.md",sourceDirName:"admin-manual",slug:"/admin-manual/certificate",permalink:"/docs/dev/admin-manual/certificate",draft:!1,tags:[],version:"current",frontMatter:{title:"TLS certificate",language:"en"},sidebar:"docs",previous:{title:"tracing",permalink:"/docs/dev/admin-manual/tracing"},next:{title:"FE SSL certificate",permalink:"/docs/dev/admin-manual/fe-certificate"}},l={},s=[{value:"Custom key certificate file",id:"custom-key-certificate-file",level:2}],p={toc:s},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"key-certificate-configuration"},"Key Certificate Configuration"),(0,a.kt)("p",null,"Enabling SSL functionality in Doris requires configuring both a CA key certificate and a server-side key certificate. To enable mutual authentication, a client-side key certificate must also be generated:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The default CA key certificate file is located at ",(0,a.kt)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/ca_certificate.p12"),", with a default password of ",(0,a.kt)("inlineCode",{parentName:"li"},"doris"),". You can modify the FE configuration file ",(0,a.kt)("inlineCode",{parentName:"li"},"conf/fe.conf")," to add ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql_ssl_default_ca_certificate = /path/to/your/certificate")," to change the CA key certificate file. You can also add ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql_ssl_default_ca_certificate_password = your_password")," to specify the password for your custom key certificate file."),(0,a.kt)("li",{parentName:"ul"},"The default server-side key certificate file is located at ",(0,a.kt)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/server_certificate.p12"),", with a default password of ",(0,a.kt)("inlineCode",{parentName:"li"},"doris"),". You can modify the FE configuration file ",(0,a.kt)("inlineCode",{parentName:"li"},"conf/fe.conf")," to add ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql_ssl_default_server_certificate = /path/to/your/certificate")," to change the server-side key certificate file. You can also add ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql_ssl_default_server_certificate_password = your_password")," to specify the password for your custom key certificate file."),(0,a.kt)("li",{parentName:"ul"},"By default, a client-side key certificate is also generated and stored in ",(0,a.kt)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/client-key.pem")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/client_certificate/"),".")),(0,a.kt)("h2",{id:"custom-key-certificate-file"},"Custom key certificate file"),(0,a.kt)("p",null,"In addition to the Doris default certificate file, you can also generate a custom certificate file through ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl"),". Here are the steps (refer to ",(0,a.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/creating-ssl-files-using-openssl.html"},"Creating SSL Certificates and Keys Using OpenSSL"),"):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate the CA, server-side, and client-side keys and certificates:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate the CA certificate\nopenssl genrsa 2048 > ca-key.pem\nopenssl req -new -x509 -nodes -days 3600 \\\n        -key ca-key.pem -out ca.pem\n\n# Generate the server certificate and sign it with the above CA\n# server-cert.pem = public key, server-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout server-key.pem -out server-req.pem\nopenssl rsa -in server-key.pem -out server-key.pem\nopenssl x509 -req -in server-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out server-cert.pem\n\n# Generate the client certificate and sign it with the above CA\n# client-cert.pem = public key, client-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout client-key.pem -out client-req.pem\nopenssl rsa -in client-key.pem -out client-key.pem\nopenssl x509 -req -in client-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out client-cert.pem\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Verify the created certificates:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl verify -CAfile ca.pem server-cert.pem client-cert.pem\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Combine your key and certificate in a PKCS#12 (P12) bundle.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Package the CA key and certificate\nopenssl pkcs12 -inkey ca-key.pem -in ca.pem -export -out ca_certificate.p12\n\n# Package the server-side key and certificate\nopenssl pkcs12 -inkey server-key.pem -in server.pem -export -out server_certificate.p12\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/api-connect/2018.x?topic=overview-generating-self-signed-certificate-using-openssl"},"reference documents"))))}u.isMDXComponent=!0}}]);