"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5489],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),b=a,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},c="Backup",l={unversionedId:"backup",id:"backup",title:"Backup",description:"Full backup",source:"@site/docs/backup.md",sourceDirName:".",slug:"/backup",permalink:"/docs/backup",draft:!1,editUrl:"https://github.com/apache/kvrocks-website/tree/main/docs/backup.md",tags:[],version:"current",lastUpdatedBy:"Twice",lastUpdatedAt:1694660705,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Operation",permalink:"/docs/category/operation"},next:{title:"Kvrocks Exporter",permalink:"/docs/kvrocks-exporter"}},i={},p=[{value:"Full backup",id:"full-backup",level:2},{value:"Incremental backup",id:"incremental-backup",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backup"},"Backup"),(0,a.kt)("h2",{id:"full-backup"},"Full backup"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"bgsave")," command to trigger Kvrocks to generate a backup, and use ",(0,a.kt)("inlineCode",{parentName:"p"},"rsync")," tool to copy all files of backup to remote server."),(0,a.kt)("h2",{id:"incremental-backup"},"Incremental backup"),(0,a.kt)("p",null,"You can try incremental backup if your Kvrocks database doesn't change quickly, this way could use less network bandwidth. This solution is similar with Kvrocks resuming broken transfer based files on full synchronization."),(0,a.kt)("p",null,"Firstly, you should get old remote backup files list, and current new backup files list (by ",(0,a.kt)("inlineCode",{parentName:"p"},"bgsave")," command and read ",(0,a.kt)("inlineCode",{parentName:"p"},"backup")," directory)."),(0,a.kt)("p",null,"Secondly, by comparing them, figure out invalid files of old remote backup, and delete them. Please notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"CURRENT")," file may be invalid, but you should always fetch it."),(0,a.kt)("p",null,"Finally, copy only the files that old remote backup doesn't have but new backup has, and store into remote server."))}d.isMDXComponent=!0}}]);