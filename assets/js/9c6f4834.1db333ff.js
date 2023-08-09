"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),k=o,f=u["".concat(c,".").concat(k)]||u[k]||p[k]||a;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},s=void 0,i={unversionedId:"kvrocks2redis",id:"kvrocks2redis",title:"kvrocks2redis",description:"kvrocks2redis",source:"@site/docs/kvrocks2redis.md",sourceDirName:".",slug:"/kvrocks2redis",permalink:"/docs/kvrocks2redis",draft:!1,editUrl:"https://github.com/apache/kvrocks-website/tree/main/docs/kvrocks2redis.md",tags:[],version:"current",lastUpdatedBy:"Binbin",lastUpdatedAt:1691571230,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Kvrocks Exporter",permalink:"/docs/kvrocks-exporter"},next:{title:"References",permalink:"/docs/category/references"}},c={},l=[{value:"kvrocks2redis",id:"kvrocks2redis",level:2},{value:"How to build",id:"how-to-build",level:2},{value:"How to run",id:"how-to-run",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kvrocks2redis"},"kvrocks2redis"),(0,o.kt)("p",null,"kvrocks2redis is used to migrate the data from Kvrocks to Redis(as well as Kvrocks itself). It will read and parse data from the local dir first and then use the psync command to read the remain change streams from the target host."),(0,o.kt)("h2",{id:"how-to-build"},"How to build"),(0,o.kt)("p",null,"Please refer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/kvrocks#build"},"Kvrocks#build"),", this step will build ",(0,o.kt)("inlineCode",{parentName:"p"},"kvrocks2redis")," in the build dir as well."),(0,o.kt)("h2",{id:"how-to-run"},"How to run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/kvrocks2redis -c kvrocks2redis.conf\n")),(0,o.kt)("p",null,"For the configurations in ",(0,o.kt)("inlineCode",{parentName:"p"},"kvrocks2redis.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"# The value should be INFO, WARNING, ERROR, FATAL\nlog-level INFO\n\n# Determine whether to run on the daemonize mode or not\n# Default: no\ndaemonize no\n\n# Where to read and parse the local DB, it should be same as the `dir` in kvrocks.conf\n# Default: ./data\ndata-dir ./data\n\n# Where to store the output like the sync sequence and AOF file\n# Default: ./\noutput-dir ./\n\n# The source host:port to sync change streams after parsing the local DB\n# kvrocks <kvrocks_ip> <kvrocks_port> [<kvrocks_auth>]\nkvrocks 127.0.0.1 6666\n\n# If the source Kvrocks enabled the cluster mode, should enable it here as well.\n# Default: no\ncluster-enable no\n\n# Synchronize the specified namespace data to the specified Redis DB.\n# Warning: It will flush the target redis DB data first before syncing the data.\n#\n# namespace.{namespace} <redis_ip> <redis_port> [<redis_auth> <redis_db_number>]\n# Default redis_db_number is 0\nnamespace.__namespace 127.0.0.1 6379\n")),(0,o.kt)("p",null,"To be noticed, the ",(0,o.kt)("inlineCode",{parentName:"p"},"kvrocks2redis")," must be deployed on the same machine as the Kvrocks instance since it needs to read the data from the local DB dir."))}p.isMDXComponent=!0}}]);