"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1552],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8092:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},c="Kvrocks Exporter",s={unversionedId:"kvrocks-exporter",id:"kvrocks-exporter",title:"Kvrocks Exporter",description:"Like the Redis metrics monitor, Kvrocks also exports the internal metrics to INFO commands.",source:"@site/docs/kvrocks-exporter.md",sourceDirName:".",slug:"/kvrocks-exporter",permalink:"/docs/kvrocks-exporter",draft:!1,editUrl:"https://github.com/apache/kvrocks-website/tree/main/docs/kvrocks-exporter.md",tags:[],version:"current",lastUpdatedBy:"ColinChamber",lastUpdatedAt:1690752806,formattedLastUpdatedAt:"Jul 30, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Backup",permalink:"/docs/backup"},next:{title:"References",permalink:"/docs/category/references"}},i={},p=[],l={toc:p},u="wrapper";function m(e){let{components:r,...a}=e;return(0,o.kt)(u,(0,n.Z)({},l,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kvrocks-exporter"},"Kvrocks Exporter"),(0,o.kt)("p",null,"Like the Redis metrics monitor, Kvrocks also exports the internal metrics to INFO commands."),(0,o.kt)("p",null,"Users can collect and store those metrics, we also provide ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KvrocksLabs/kvrocks_exporter"},"the Kvrocks exporter")," for Prometheus metrics since it's widely used now."),(0,o.kt)("p",null,"Kvrocks Grafana dashboard template is available on Grafana.com. You can import the Dashboard with ID 15286 or downloads the JSON file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://grafana.com/api/dashboards/15286 -O kvrocks-dashboard.json\n")),(0,o.kt)("p",null,"Example Grafana screenshots:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Grafana Example",src:t(6313).Z,width:"1547",height:"1698"})))}m.isMDXComponent=!0},6313:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/grafana-exporter-9b24b9a87885854f23b04af3c5cc08f4.jpeg"}}]);