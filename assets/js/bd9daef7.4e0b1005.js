"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[55489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Doris Docker quick build development environment",language:"en"},l=void 0,i={unversionedId:"developer-guide/docker-dev",id:"developer-guide/docker-dev",title:"Doris Docker quick build development environment",description:"\x3c!--",source:"@site/community/developer-guide/docker-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/docker-dev",permalink:"/community/developer-guide/docker-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris Docker quick build development environment",language:"en"},sidebar:"community",previous:{title:"Debug Tool",permalink:"/community/developer-guide/debug-tool"},next:{title:"Doris BE Storage Layer Benchmark Tool",permalink:"/community/developer-guide/benchmark-tool"}},u={},s=[{value:"Related detailed document navigation",id:"related-detailed-document-navigation",level:2},{value:"Environment preparation",id:"environment-preparation",level:2},{value:"Build image",id:"build-image",level:2},{value:"Compile",id:"compile",level:2},{value:"Run",id:"run",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"doris-docker-quick-build-development-environment"},"Doris Docker quick build development environment"),(0,o.kt)("h2",{id:"related-detailed-document-navigation"},"Related detailed document navigation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/install/source-install/compilation"},"Developing mirror compilation using Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/install/install-deploy"},"Deploying Doris")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/community/developer-guide/be-vscode-dev"},"VSCode Be Development Debugging"))),(0,o.kt)("h2",{id:"environment-preparation"},"Environment preparation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Docker"),(0,o.kt)("li",{parentName:"ul"},"VSCode",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Remote plugin")))),(0,o.kt)("h2",{id:"build-image"},"Build image"),(0,o.kt)("p",null,"create dockerfile"),(0,o.kt)("p",null,"VSCode replace all by using Ctrl-d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"<!!! your user !!!>"),(0,o.kt)("li",{parentName:"ul"},"<!!! your user password !!!>"),(0,o.kt)("li",{parentName:"ul"},"<!!! root password !!!>"),(0,o.kt)("li",{parentName:"ul"},"<!!! your git email !!!>"),(0,o.kt)("li",{parentName:"ul"},"<!!! your git username !!!>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM apache/incubator-doris:build-env-latest\n\nUSER root\nWORKDIR /root\nRUN echo \'<!!! root password !!!>\' | passwd root --stdin\n\nRUN yum install -y vim net-tools man wget git mysql lsof bash-completion \\\n        && cp /var/local/thirdparty/installed/bin/thrift /usr/bin\n\n# safer usage, create new user instead of using root\nRUN yum install -y sudo \\\n        && useradd -ms /bin/bash <!!! your user !!!> && echo <!!! your user password !!!> | passwd <!!! your user !!!> --stdin \\\n        && usermod -a -G wheel <!!! your user !!!>\n\nUSER <!!! your user !!!>\nWORKDIR /home/<!!! your user !!!>\nRUN git config --global color.ui true \\\n        && git config --global user.email "<!!! your git email !!!>" \\\n        && git config --global user.name "<!!! your git username !!!>"\n\n# install zsh and oh my zsh, easier to use on, you can remove it if you don\'t need it\nUSER root\nRUN yum install -y zsh \\\n        && chsh -s /bin/zsh <!!! your user !!!>\nUSER <!!! your user !!!>\nRUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh \\\n        && git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions \\\n        && git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting\n')),(0,o.kt)("p",null,"run build command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t doris .\n")),(0,o.kt)("p",null,"run image"),(0,o.kt)("p",null,"note! ",(0,o.kt)("a",{parentName:"p",href:"../../docs/install/source-install/compilation-general.md"},"problems with mounting")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See the link above: It is recommended to run the image by mounting the local Doris source code directory as a volume .....")),(0,o.kt)("p",null,"if you are developing on windows, mounting may cause cross-filesystem access problems, please consider setting it manually"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--cap-add SYS_PTRACE")," parameter allows dockers to use ptrace, making it easier for us to use ptrace and gdb remote debugging functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --cap-add SYS_PTRACE doris:latest /bin/bash\n")),(0,o.kt)("p",null,"if you installed zsh, replace plugins in ~/.zshrc after running the container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"plugins=(git zsh-autosuggestions zsh-syntax-highlighting)\n")),(0,o.kt)("p",null,"create directory and download doris"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su <your user>\nmkdir code && cd code\ngit clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n")),(0,o.kt)("h2",{id:"compile"},"Compile"),(0,o.kt)("p",null,"Note:"),(0,o.kt)("p",null,"use the following command first time compiling"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sh build.sh --clean --be --fe --ui\n")),(0,o.kt)("p",null,"it is because build-env-for-0.15.0 version image upgraded thrift(0.9 -> 0.13), so you need to use --clean command to force use new version of thrift to generate code files, otherwise it will cause incompatibilities."),(0,o.kt)("p",null,"compile Doris"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sh build.sh\n")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"manually create ",(0,o.kt)("inlineCode",{parentName:"p"},"meta_dir")," metadata storage location, default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"${DORIS_HOME}/doris-meta")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir meta_dir\n")),(0,o.kt)("p",null,"launch FE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd output/fe\nsh bin/start_fe.sh --daemon\n")),(0,o.kt)("p",null,"launch BE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd output/be\nsh bin/start_be.sh --daemon\n")),(0,o.kt)("p",null,"mysql-client connect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -h 127.0.0.1 -P 9030 -u root\n")))}d.isMDXComponent=!0}}]);