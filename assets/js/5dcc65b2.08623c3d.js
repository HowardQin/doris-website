"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(a),c=i,h=s["".concat(p,".").concat(c)]||s[c]||u[c]||r;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},86188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={title:"Minidump",language:"en"},o=void 0,l={unversionedId:"developer-guide/minidump",id:"developer-guide/minidump",title:"Minidump",description:"\x3c!--",source:"@site/community/developer-guide/minidump.md",sourceDirName:"developer-guide",slug:"/developer-guide/minidump",permalink:"/community/developer-guide/minidump",draft:!1,tags:[],version:"current",frontMatter:{title:"Minidump",language:"en"}},p={},d=[{value:"How to enable Minidump",id:"how-to-enable-minidump",level:2},{value:"How to generate Minidump",id:"how-to-generate-minidump",level:2},{value:"How to analyze Minidump",id:"how-to-analyze-minidump",level:2},{value:"Get the breakpad tool",id:"get-the-breakpad-tool",level:3},{value:"Analyze Minidump",id:"analyze-minidump",level:3}],m={toc:d},s="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"minidumpremoved"},"Minidump(removed)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Minidump has been removed, it's useless in real online environment and instead introduces additional bugs")),(0,i.kt)("p",null,"Minidump is a file format defined by Microsoft for reporting errors after program crashes. It includes thread information, register information, call stack information, etc. at the time of the crash, which helps developers quickly locate the problem."),(0,i.kt)("p",null,"Unlike ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Core_dump"},"Coredump"),", Minidump files are smaller and easier to report and network transmission. Coredump file will contain a complete memory image, so the volume may be dozens or hundreds of GB. The Minidump file only contains the call stack and register information of the key thread, so the size is usually only MB level."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/breakpad"},"Breakpad")," is a cross-platform crash dump and analysis framework and tool collection. Users can use Breakpad to conduct self-service analysis of Minidump files. You can also collect Minidump files and report them to Doris cluster operation and maintenance or developers."),(0,i.kt)("h2",{id:"how-to-enable-minidump"},"How to enable Minidump"),(0,i.kt)("p",null,"Minidump function is a function introduced in Doris 0.15.0 or later. This function is controlled by the following configuration files of BE:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"disable_minidump")),(0,i.kt)("p",{parentName:"li"},"  Whether to enable Minidump function. The default is false, which means it is turned on.\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"minidump_dir")),(0,i.kt)("p",{parentName:"li"},"  The storage directory of the Minidump file. The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"${DORIS_HOME}/Minidump/"),"\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_minidump_file_size_mb")),(0,i.kt)("p",{parentName:"li"},"  Minidump file size limit. The default is 200MB. If the size exceeds the threshold, breakpad will try to reduce the information recorded in the file, such as the number of threads and the number of registers to introduce the Minidump file size. But this is only an expected value, and the actual file size may be larger than the set value.\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_minidump_file_number")),(0,i.kt)("p",{parentName:"li"},"  The maximum number of Minidump files to keep. The default is 10, which means that the most recent 10 files are kept.\n"))),(0,i.kt)("h2",{id:"how-to-generate-minidump"},"How to generate Minidump"),(0,i.kt)("p",null,"There are two ways to generate Minidump:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The program crashes"),(0,i.kt)("p",{parentName:"li"},"When the program encounters a problem and crashes, it will automatically generate a Minidump file. The following information will appear in be.out at this time:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'Minidump created at: /doris/be/Minidump/4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp\n*** Aborted at 1636970042 (unix time) try "date -d @1636970042" if you are using GNU date ***\nPC: @ 0x1b184e4 doris::OlapScanNode::scanner_thread()\n*** SIGSEGV (@0x0) received by PID 71567 (TID 0x7f173a5df700) from PID 0; stack trace: ***\n@ 0x220c992 google::(anonymous namespace)::FailureSignalHandler()\n@ 0x7f174fb5e1d0 (unknown)\n@ 0x1b184e4 doris::OlapScanNode::scanner_thread()\n@ 0x15a19af doris::PriorityThreadPool::work_thread()\n@ 0x21d9107 thread_proxy\n@ 0x7f174fb53f84 start_thread\n@ 0x7f174f943ddf __GI___clone\n@ 0x0 (unknown)\n')),(0,i.kt)("p",{parentName:"li"},"Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"/doris/be/Minidump/4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp")," is the Minidump file. And the following stack is the call stack information where the program crashed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Manual trigger"),(0,i.kt)("p",{parentName:"li"},"The user can actively send the SIGUSR1 signal to the BE process to trigger Minidump. For example, use the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kill -s SIGUSR1 71567\n")),(0,i.kt)("p",{parentName:"li"},"71567 is the process id (pid) of BE. After that, the following information will appear in be.out:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Receive signal: SIGUSR1\nMinidump created at: /doris/be/Minidump/1af8fe8f-3d5b-40ea-6b76ad8f-0cf6756f.dmp\n")),(0,i.kt)("p",{parentName:"li"},"Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"Receive signal: SIGUSR1")," means that this is a Minidump operation triggered by the user. Following is the location of the Minidump file."),(0,i.kt)("p",{parentName:"li"},"The Minidump operation manually triggered by the user will not kill the BE process and will not generate an error stack in be.out."))),(0,i.kt)("h2",{id:"how-to-analyze-minidump"},"How to analyze Minidump"),(0,i.kt)("p",null,"We can use various tools provided by breakpad to analyze Minidump to see the cause of the error."),(0,i.kt)("h3",{id:"get-the-breakpad-tool"},"Get the breakpad tool"),(0,i.kt)("p",null,"Users can go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/breakpad"},"Breakpad")," code base to download and compile breakpad. For the compilation method, please refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"build_breakpad()")," method in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/blob/master/thirdparty/vars.sh"},"thirdparty/vars.sh")," in the Doris source code library."),(0,i.kt)("p",null,"You can also find various tools compiled by breakpad from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/local/thirdparty/installed/bin")," directory of the image container in the version 1.4.2 and above of the Docker compiled image provided by Doris."),(0,i.kt)("h3",{id:"analyze-minidump"},"Analyze Minidump"),(0,i.kt)("p",null,"We can use the following two methods to analyze Minidump files."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dump into coredump file"),(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"minidump-2-core")," tool provided by breakpad to dump the Minidump file into a coredump file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"./minidump-2-core /doris/be/Minidump/1af8fe8f-3d5b-40ea-6b76ad8f-0cf6756f.dmp> 1.coredump\n")),(0,i.kt)("p",{parentName:"li"},"Then we can use the gdb tool to analyze the coredump file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"gdb lib/doris_be -c 1.coredump\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate a readable call stack"),(0,i.kt)("p",{parentName:"li"},"The Minidump file only contains the address of the call stack, and we need to map these addresses to the actual function file location. Therefore, we first need to generate the symbol table ",(0,i.kt)("inlineCode",{parentName:"p"},"doris_be.sym")," of the BE binary file through ",(0,i.kt)("inlineCode",{parentName:"p"},"dump_syms"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"./dump_syms ./lib/doris_be> doris_be.sym\n")),(0,i.kt)("p",{parentName:"li"},"Next, we need the information in the first row of the symbol table to build a corresponding symbol table directory."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"head -n1 doris_be.sym\n")),(0,i.kt)("p",{parentName:"li"},"The above command will print the first line of doris_be.sym as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"MODULE Linux x86_64 137706CC745F5EC3EABBF730D4B229370 doris_be\n")),(0,i.kt)("p",{parentName:"li"},"Then we create a directory structure:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"mkdir -p ./symbols/doris_be/137706CC745F5EC3EABBF730D4B229370\n")),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"doris_be")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"137706CC745F5EC3EABBF730D4B229370")," in the directory path must be consistent with the first line of the doris_be.sym file. Then we move the doris_be.sym file to this directory:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cp doris_be.sym ./symbols/doris_be/137706CC745F5EC3EABBF730D4B229370\n")),(0,i.kt)("p",{parentName:"li"},"Finally, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"minidump_stackwalk")," to produce readable call stack information:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"minidump_stackwalk 4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp ./symbols/> readable.stack\n")),(0,i.kt)("p",{parentName:"li"},"Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp")," is a minidump file. ",(0,i.kt)("inlineCode",{parentName:"p"},"./symbols/")," is the previously created directory containing doris_be.sym. ",(0,i.kt)("inlineCode",{parentName:"p"},"readable.stack")," redirects the generated results to this file. At the same time, when this command is executed, some program running logs will be flashed on the screen, so you can ignore it."),(0,i.kt)("p",{parentName:"li"},"At this point, we have obtained a readable thread call stack file: readable.stack. It contains the call stack information of all threads when the BE program is writing the Minidump file, and the corresponding register information. Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"Crash reason")," explains why the program crashed. If it is ",(0,i.kt)("inlineCode",{parentName:"p"},"DUMP_REQUESTED"),", it means that this is a Minidump triggered by the user."),(0,i.kt)("p",{parentName:"li"}," We can filter out the register information with the following command to get a clear view of the call stack:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'grep -v = readable.stack |grep -v "Found by" |vi-\n')),(0,i.kt)("p",{parentName:"li"}," The result is similar to the thread call stack information obtained through the pstack command."))))}u.isMDXComponent=!0}}]);