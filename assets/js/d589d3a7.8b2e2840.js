"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>x,default:()=>S,frontMatter:()=>T,metadata:()=>I,toc:()=>D});var r=n(7462),a=n(7294),l=n(3905),o=n(6010),s=n(2466),u=n(6550),i=n(1980),c=n(7392),d=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,i]=f({queryString:n,groupId:r}),[c,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),k=(()=>{const e=u??c;return b({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),p(e)}),[i,p,l]),tabValues:l}}var h=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==l&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}const O={tabItem:"tabItem_Ymn6"};function E(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(O.tabItem,r),hidden:n},t)}const T={},x="Getting started",I={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"Run Kvrocks with Docker",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/apache/kvrocks-website/tree/main/docs/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Binbin",lastUpdatedAt:1691571230,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{},sidebar:"docs",next:{title:"Namespace",permalink:"/docs/namespace"}},C={},D=[{value:"Run Kvrocks with Docker",id:"run-kvrocks-with-docker",level:2},{value:"Build and run Kvrocks from source",id:"build-and-run-kvrocks-from-source",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Compile Kvrocks from source",id:"compile-kvrocks-from-source",level:3}],V={toc:D},j="wrapper";function S(e){let{components:t,...n}=e;return(0,l.kt)(j,(0,r.Z)({},V,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started"},"Getting started"),(0,l.kt)("h2",{id:"run-kvrocks-with-docker"},"Run Kvrocks with Docker"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Follow Docker's ",(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/installation/"},"installation instructions")," to install Docker."),(0,l.kt)("li",{parentName:"ol"},"Pull the latest image and start a container:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it -p 6666:6666 apache/kvrocks\n")),(0,l.kt)("p",null,"Now you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"redis-cli")," to run the kvrocks server as Redis on port ",(0,l.kt)("inlineCode",{parentName:"p"},"6666"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"redis-cli -p 6666\n")),(0,l.kt)("h2",{id:"build-and-run-kvrocks-from-source"},"Build and run Kvrocks from source"),(0,l.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,l.kt)(N,{mdxType:"Tabs"},(0,l.kt)(E,{value:"debian",label:"Ubuntu/Debian",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt update\nsudo apt install -y git build-essential cmake libtool python3 libssl-dev\n"))),(0,l.kt)(E,{value:"centos",label:"CentOS/RedHat",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y centos-release-scl-rh\nsudo yum install -y git devtoolset-11 autoconf automake libtool libstdc++-static python3 openssl-devel\n# download and install cmake via https://cmake.org/download\nwget https://github.com/Kitware/CMake/releases/download/v3.26.4/cmake-3.26.4-linux-x86_64.sh -O cmake.sh\nsudo bash cmake.sh --skip-license --prefix=/usr\n# enable gcc and make in devtoolset-11\nsource /opt/rh/devtoolset-11/enable\n"))),(0,l.kt)(E,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install git cmake autoconf automake libtool openssl\n# please link openssl by force if it still cannot be found after installing\nbrew link --force openssl\n")))),(0,l.kt)("h3",{id:"compile-kvrocks-from-source"},"Compile Kvrocks from source"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/kvrocks.git\ncd kvrocks\n./x.py build # `./x.py build -h` to check more options;\n             # especially, `./x.py build --ghproxy` will fetch dependencies via ghproxy.com.\n")),(0,l.kt)("p",null,"The binary file ",(0,l.kt)("inlineCode",{parentName:"p"},"kvrocks")," will be generated at ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," dir if everything goes well."),(0,l.kt)("p",null,"Run the Kvrocks server by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./build/kvrocks\n")),(0,l.kt)("p",null,"Now you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"redis-cli")," to run the kvrocks server as Redis on port ",(0,l.kt)("inlineCode",{parentName:"p"},"6666"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"redis-cli -p 6666\n")))}S.isMDXComponent=!0}}]);