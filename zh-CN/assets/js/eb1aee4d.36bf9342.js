"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(n),d=l,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:l,a[1]=c;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(87462),l=(n(67294),n(3905));const o={title:"\u94fe\u8def\u8ffd\u8e2a",language:"zh-CN"},a=void 0,c={unversionedId:"admin-manual/tracing",id:"admin-manual/tracing",title:"\u94fe\u8def\u8ffd\u8e2a",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/tracing.md",sourceDirName:"admin-manual",slug:"/admin-manual/tracing",permalink:"/zh-CN/docs/dev/admin-manual/tracing",draft:!1,tags:[],version:"current",frontMatter:{title:"\u94fe\u8def\u8ffd\u8e2a",language:"zh-CN"},sidebar:"docs",previous:{title:"\u67e5\u8be2\u5206\u6790",permalink:"/zh-CN/docs/dev/admin-manual/query-profile"},next:{title:"SSL\u5bc6\u94a5\u8bc1\u4e66\u914d\u7f6e",permalink:"/zh-CN/docs/dev/admin-manual/certificate"}},p={},i=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u5feb\u901f\u642d\u5efa",id:"\u5feb\u901f\u642d\u5efa",level:2},{value:"\u90e8\u7f72 zipkin",id:"\u90e8\u7f72-zipkin",level:3},{value:"\u914d\u7f6e\u53ca\u542f\u52a8Doris",id:"\u914d\u7f6e\u53ca\u542f\u52a8doris",level:3},{value:"\u6dfb\u52a0\u914d\u7f6e\u5230fe.conf",id:"\u6dfb\u52a0\u914d\u7f6e\u5230feconf",level:4},{value:"\u6dfb\u52a0\u914d\u7f6e\u5230be.conf",id:"\u6dfb\u52a0\u914d\u7f6e\u5230beconf",level:4},{value:"\u542f\u52a8fe\u548cbe",id:"\u542f\u52a8fe\u548cbe",level:4},{value:"\u6267\u884c\u67e5\u8be2",id:"\u6267\u884c\u67e5\u8be2",level:3},{value:"\u67e5\u770bzipkin UI",id:"\u67e5\u770bzipkin-ui",level:3},{value:"\u4f7f\u7528opentelemetry collector",id:"\u4f7f\u7528opentelemetry-collector",level:2},{value:"\u90e8\u7f72 opentelemetry collector",id:"\u90e8\u7f72-opentelemetry-collector",level:3},{value:"\u4e0b\u8f7d collector",id:"\u4e0b\u8f7d-collector",level:4},{value:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6",id:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6",level:4},{value:"\u542f\u52a8 collector",id:"\u542f\u52a8-collector",level:4},{value:"\u914d\u7f6e\u53ca\u542f\u52a8Doris",id:"\u914d\u7f6e\u53ca\u542f\u52a8doris-1",level:3},{value:"\u6dfb\u52a0\u914d\u7f6e\u5230fe.conf",id:"\u6dfb\u52a0\u914d\u7f6e\u5230feconf-1",level:4},{value:"\u6dfb\u52a0\u914d\u7f6e\u5230be.conf",id:"\u6dfb\u52a0\u914d\u7f6e\u5230beconf-1",level:4},{value:"\u542f\u52a8fe\u548cbe",id:"\u542f\u52a8fe\u548cbe-1",level:4},{value:"\u6267\u884c\u67e5\u8be2",id:"\u6267\u884c\u67e5\u8be2-1",level:3},{value:"\u67e5\u770btraces",id:"\u67e5\u770btraces",level:3}],s={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u94fe\u8def\u8ffd\u8e2a"},"\u94fe\u8def\u8ffd\u8e2a"),(0,l.kt)("p",null,"\u94fe\u8def\u8ffd\u8e2a\uff08tracing\uff09\u8bb0\u5f55\u4e86\u4e00\u6b21\u8bf7\u6c42\u5728\u7cfb\u7edf\u4e2d\u7684\u6267\u884c\u7684\u751f\u547d\u5468\u671f\uff0c\u5305\u62ec\u8bf7\u6c42\u53ca\u5176\u5b50\u8fc7\u7a0b\u8c03\u7528\u94fe\u8def\u3001\u6267\u884c\u65f6\u95f4\u53ca\u7edf\u8ba1\u4fe1\u606f\uff0c\u53ef\u7528\u4e8e\u6162\u67e5\u8be2\u5b9a\u4f4d\u3001\u6027\u80fd\u74f6\u9888\u5206\u6790\u7b49\u3002"),(0,l.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,l.kt)("p",null,"doris\u8d1f\u8d23\u6536\u96c6traces\uff0c\u5e76\u5bfc\u51fa\u5230\u7b2c\u4e09\u65b9\u94fe\u8def\u5206\u6790\u7cfb\u7edf\uff0c\u7531\u94fe\u8def\u5206\u6790\u7cfb\u7edf\u8d1f\u8d23traces\u7684\u5c55\u793a\u548c\u5b58\u50a8\u3002"),(0,l.kt)("h2",{id:"\u5feb\u901f\u642d\u5efa"},"\u5feb\u901f\u642d\u5efa"),(0,l.kt)("p",null,"doris\u76ee\u524d\u652f\u6301\u76f4\u63a5\u5c06traces\u5bfc\u51fa\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://zipkin.io/"},"zipkin")," \u4e2d\u3002"),(0,l.kt)("h3",{id:"\u90e8\u7f72-zipkin"},"\u90e8\u7f72 zipkin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -sSL https://zipkin.io/quickstart.sh | bash -s\njava -jar zipkin.jar\n")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u53ca\u542f\u52a8doris"},"\u914d\u7f6e\u53ca\u542f\u52a8Doris"),(0,l.kt)("h4",{id:"\u6dfb\u52a0\u914d\u7f6e\u5230feconf"},"\u6dfb\u52a0\u914d\u7f6e\u5230fe.conf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u5f00\u542f\u94fe\u8def\u8ffd\u8e2a\nenable_tracing = true\n\n# \u914d\u7f6etraces\u5bfc\u51fa\u5230zipkin\ntrace_export_url = http://127.0.0.1:9411/api/v2/spans\n")),(0,l.kt)("h4",{id:"\u6dfb\u52a0\u914d\u7f6e\u5230beconf"},"\u6dfb\u52a0\u914d\u7f6e\u5230be.conf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u5f00\u542f\u94fe\u8def\u8ffd\u8e2a\u3002\nenable_tracing = true\n\n# \u914d\u7f6etraces\u5bfc\u51fa\u5230zipkin\u3002\ntrace_export_url = http://127.0.0.1:9411/api/v2/spans\n\n# \u53ef\u9009\u3002\u7f13\u5b58span\u7684\u961f\u5217\u5927\u5c0f\u3002span\u6570\u91cf\u8fbe\u5230\u961f\u5217\u5bb9\u91cf\u4e00\u534a\u65f6\u5c06\u89e6\u53d1\u4e00\u6b21span\u5bfc\u51fa\uff0c\u961f\u5217\u6ee1\u540e\u5230\u8fbe\u961f\u5217\u7684span\u5c06\u88ab\u4e22\u5f03\u3002\nmax_span_queue_size=2048\n\n# \u53ef\u9009\u3002\u5355\u6b21\u5bfc\u51faspan\u7684\u6700\u5927\u6570\u91cf\u3002\nmax_span_export_batch_size=512\n\n# \u53ef\u9009\u3002\u5bfc\u51faspan\u7684\u6700\u5927\u95f4\u9694\u65f6\u95f4\u3002\nexport_span_schedule_delay_millis=500\n")),(0,l.kt)("h4",{id:"\u542f\u52a8fe\u548cbe"},"\u542f\u52a8fe\u548cbe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sh fe/bin/start_fe.sh --daemon\nsh be/bin/start_be.sh --daemon\n")),(0,l.kt)("h3",{id:"\u6267\u884c\u67e5\u8be2"},"\u6267\u884c\u67e5\u8be2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"...\n")),(0,l.kt)("h3",{id:"\u67e5\u770bzipkin-ui"},"\u67e5\u770bzipkin UI"),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9411/zipkin/")," \u53ef\u67e5\u770b\u67e5\u8be2\u94fe\u8def\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528opentelemetry-collector"},"\u4f7f\u7528opentelemetry collector"),(0,l.kt)("p",null,"\u4f7f\u7528opentelemetry collector \u53ef\u5c06traces\u5bfc\u51fa\u5230\u5176\u4ed6\u7cfb\u7edf\u4f8b\u5982zipkin\u3001jaeger\u3001skywalking\uff0c\u6216\u8005\u6570\u636e\u5e93\u7cfb\u7edf\u548c\u6587\u4ef6\u4e2d\u3002 \u8be6\u60c5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter"},"collector exporter")," \u3002"),(0,l.kt)("p",null,"\u540c\u65f6 opentelemetry collector \u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u7b97\u5b50\u7528\u6765\u5904\u7406traces\u3002\u4f8b\u5982",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/filterprocessor"},"\u8fc7\u6ee4 spans")," \u3001",(0,l.kt)("a",{parentName:"p",href:"hhttps://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/tailsamplingprocessor"},"\u5c3e\u91c7\u6837"),"\u3002\u8be6\u60c5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor"},"collector processor"),"\u3002"),(0,l.kt)("p",null,"traces\u5bfc\u51fa\u7684\u8def\u5f84\uff1adoris -> collector -> zipkin\u7b49\u3002"),(0,l.kt)("h3",{id:"\u90e8\u7f72-opentelemetry-collector"},"\u90e8\u7f72 opentelemetry collector"),(0,l.kt)("p",null,"opentelemetry \u53d1\u5e03\u4e86collector ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector"},"core")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib"},"contrib"),", contrib\u63d0\u4f9b\u4e86\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\uff0c\u8fd9\u91cc\u4ee5contrib\u7248\u4e3e\u4f8b\u3002"),(0,l.kt)("h4",{id:"\u4e0b\u8f7d-collector"},"\u4e0b\u8f7d collector"),(0,l.kt)("p",null,"\u4e0b\u8f7d otelcol-contrib\uff0c \u53ef\u5728\u5b98\u7f51\u4e0b\u8f7d",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector-releases/releases"},"\u66f4\u591a\u5e73\u53f0\u9884\u7f16\u8bd1\u7248")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.55.0/otelcol-contrib_0.55.0_linux_amd64.tar.gz\n\ntar -zxvf otelcol-contrib_0.55.0_linux_amd64.tar.gz\n")),(0,l.kt)("h4",{id:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6"},"\u751f\u6210\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"collector \u914d\u7f6e\u6587\u4ef6\u5206\u4e3a5\u90e8\u5206\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"receivers"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"processors"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"exporters"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"extensions"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"service"),"\u3002\u5176\u4e2dreceivers\u3001processors\u3001exporters\u5206\u522b\u5b9a\u4e49\u4e86\u63a5\u6536\u3001\u5904\u7406\u3001\u5bfc\u51fa\u6570\u636e\u7684\u65b9\u5f0f\uff1bextensions\u662f\u53ef\u9009\u7684\uff0c\u7528\u4e8e\u6269\u5c55\u4e3b\u8981\u7528\u4e8e\u4e0d\u6d89\u53ca\u5904\u7406\u9065\u6d4b\u6570\u636e\u7684\u4efb\u52a1\uff1bservice\u6307\u5b9a\u5728collector\u4e2d\u4f7f\u7528\u54ea\u4e9b\u7ec4\u4ef6\u3002\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/collector/deployment/"},"collector configuration"),"\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u914d\u7f6e\u6587\u4ef6\u4f7f\u7528otlp(OpenTelemetry Protocol)\u534f\u8bae\u63a5\u6536traces\u6570\u636e\uff0c\u8fdb\u884c\u6279\u5904\u7406\u5e76\u8fc7\u6ee4\u6389\u65f6\u95f4\u8d85\u8fc750ms\u7684traces, \u6700\u7ec8\u5bfc\u51fa\u5230zipkin\u548c\u6587\u4ef6\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'cat > otel-collector-config.yaml << EOF\nreceivers:\n  otlp:\n    protocols:\n      http:\n\nexporters:\n  zipkin:\n    endpoint: "http://10.81.85.90:8791/api/v2/spans"\n  file:\n    path: ./filename.json\n\nprocessors:\n  batch:\n  tail_sampling:\n    policies:\n      {\n        name: duration_policy,\n        type: latency,\n        latency: {threshold_ms: 50}\n      }\n\nextensions:\n\nservice:\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch, tail_sampling]\n      exporters: [zipkin, file]\nEOF\n')),(0,l.kt)("h4",{id:"\u542f\u52a8-collector"},"\u542f\u52a8 collector"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nohup ./otelcol-contrib --config=otel-collector-config.yaml &\n")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u53ca\u542f\u52a8doris-1"},"\u914d\u7f6e\u53ca\u542f\u52a8Doris"),(0,l.kt)("h4",{id:"\u6dfb\u52a0\u914d\u7f6e\u5230feconf-1"},"\u6dfb\u52a0\u914d\u7f6e\u5230fe.conf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u5f00\u542f\u94fe\u8def\u8ffd\u8e2a\nenable_tracing = true\n\n# \u542f\u7528opentelemetry collector\u3002\ntrace_exporter = collector\n\n# \u914d\u7f6etraces\u5bfc\u51fa\u5230collector\uff0c4318\u4e3acollector otlp http\u9ed8\u8ba4\u7aef\u53e3\u3002\ntrace_export_url = http://127.0.0.1:4318/v1/traces\n")),(0,l.kt)("h4",{id:"\u6dfb\u52a0\u914d\u7f6e\u5230beconf-1"},"\u6dfb\u52a0\u914d\u7f6e\u5230be.conf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u5f00\u542f\u94fe\u8def\u8ffd\u8e2a\u3002\nenable_tracing = true\n\n# \u542f\u7528opentelemetry collector\u3002\ntrace_exporter = collector\n\n# \u914d\u7f6etraces\u5bfc\u51fa\u5230collector\uff0c4318\u4e3acollector otlp http\u9ed8\u8ba4\u7aef\u53e3\u3002\ntrace_export_url = http://127.0.0.1:4318/v1/traces\n\n# \u53ef\u9009\u3002\u7f13\u5b58span\u7684\u961f\u5217\u5927\u5c0f\u3002span\u6570\u91cf\u8fbe\u5230\u961f\u5217\u5bb9\u91cf\u4e00\u534a\u65f6\u5c06\u89e6\u53d1\u4e00\u6b21span\u5bfc\u51fa\uff0c\u961f\u5217\u6ee1\u540e\u5230\u8fbe\u961f\u5217\u7684span\u5c06\u88ab\u4e22\u5f03\u3002\nmax_span_queue_size=2048\n\n# \u53ef\u9009\u3002\u5355\u6b21\u5bfc\u51faspan\u7684\u6700\u5927\u6570\u91cf\u3002\nmax_span_export_batch_size=512\n\n# \u53ef\u9009\u3002\u5bfc\u51faspan\u7684\u6700\u5927\u95f4\u9694\u65f6\u95f4\u3002\nexport_span_schedule_delay_millis=500\n")),(0,l.kt)("h4",{id:"\u542f\u52a8fe\u548cbe-1"},"\u542f\u52a8fe\u548cbe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sh fe/bin/start_fe.sh --daemon\nsh be/bin/start_be.sh --daemon\n")),(0,l.kt)("h3",{id:"\u6267\u884c\u67e5\u8be2-1"},"\u6267\u884c\u67e5\u8be2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"...\n")),(0,l.kt)("h3",{id:"\u67e5\u770btraces"},"\u67e5\u770btraces"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"...\n")))}m.isMDXComponent=!0}}]);