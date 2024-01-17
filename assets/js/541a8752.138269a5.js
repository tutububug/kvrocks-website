"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return n?o.createElement(d,r(r({ref:t},u),{},{components:n})):o.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var o=n(7462),a=(n(7294),n(3905)),i=n(4866),r=n(5162);const s={id:"vote-a-core-developer",title:"Vote a new committer or PMC member"},l=void 0,c={unversionedId:"vote-a-core-developer",id:"vote-a-core-developer",title:"Vote a new committer or PMC member",description:"Apache Kvrocks\u2122 PMC member should be responsible for assessing the contributions of candidates.",source:"@site/community/vote-a-core-developer.md",sourceDirName:".",slug:"/vote-a-core-developer",permalink:"/community/vote-a-core-developer",draft:!1,editUrl:"https://github.com/apache/kvrocks-website/tree/main/community/vote-a-core-developer.md",tags:[],version:"current",frontMatter:{id:"vote-a-core-developer",title:"Vote a new committer or PMC member"},sidebar:"community",previous:{title:"Committers",permalink:"/community/category/committers"},next:{title:"Security",permalink:"/community/security"}},u={},m=[{value:"Nominate new committer",id:"nominate-new-committer",level:2},{value:"Initiate discussion in the community private mailing group",id:"initiate-discussion-in-the-community-private-mailing-group",level:2},{value:"Initiate vote in the community private mailing group",id:"initiate-vote-in-the-community-private-mailing-group",level:2},{value:"Feedback on voting results",id:"feedback-on-voting-results",level:2},{value:"Newly added PMC member notification email",id:"newly-added-pmc-member-notification-email",level:2},{value:"Initiate invitation email",id:"initiate-invitation-email",level:2},{value:"Processing after accepting the invitation",id:"processing-after-accepting-the-invitation",level:2},{value:"ANNOUNCE to the community",id:"announce-to-the-community",level:2}],p={toc:m},h="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache Kvrocks\u2122 PMC member should be responsible for assessing the contributions of candidates."),(0,a.kt)("p",null,"Like many Apache projects, Kvrocks welcome all contributions, including code contributions, documentation improvement, blog entries, guides for new users, public speeches, and enhancement of the project in various ways."),(0,a.kt)("h2",{id:"nominate-new-committer"},"Nominate new committer"),(0,a.kt)("p",null,"New committer nomination could only be officially started by existing PMC members. If a new committer feels that he/she is qualified, he/she should contact any existing PMC member and discuss.\nIf this is agreed among some members of the PMC, the process will kick off."),(0,a.kt)("h2",{id:"initiate-discussion-in-the-community-private-mailing-group"},"Initiate discussion in the community private mailing group"),(0,a.kt)("p",null,"Any Kvrocks PMC member can initiate a voting discussion."),(0,a.kt)("p",null,"After PMC finds any valuable contributions from community contributors and obtains the consent of the candidate, they can initiate a discussion on Kvrocks' private mailing list."),(0,a.kt)("p",null,"In the discussion email, the proposer should clearly state the candidate's contributions and give the address for reviewing the corresponding contributions, so that everyone can discuss and analyze it. The discussion email is sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"private@kvrocks.apache.org"),". The discussion will last at least 72 hours. PMC members will fully express their views on the proposed email."),(0,a.kt)("p",null,"The following is a sample discussion email:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[DISCUSS] XXXXXX for Kvrocks [committer|PMC member]\n\nI nominate XXXXXX as an Kvrocks [committer|PMC member]\n\nJudging from the contributions in recent months, XXXXXX has submitted many\nimplementations[1][2] to the project and improved the management module for\nthe project.\n\nDuring the optimization and improvement period of the project, it is hoped that\nmore people will participate in the actual project optimization and improvement,\nto let the project more perfect and easier to use.\n\nSo I nominated XXXXXX as a [committer|PMC member] of the Kvrocks project.\n\n[1] https://github.com/apache/kvrocks/issues/created_by/XXXXXX\n[2] https://github.com/apache/kvrocks/commits?author=XXXXXX\n")),(0,a.kt)("h2",{id:"initiate-vote-in-the-community-private-mailing-group"},"Initiate vote in the community private mailing group"),(0,a.kt)("p",null,"If the discussion email does not receive the disagreement information within the specified time, the poll initiator needs to initiate a Committer or PMC election vote on Kvrocks' private mailing list."),(0,a.kt)("p",null,"The voting email is sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"private@kvrocks.apache.org")," for at least 72 hours, and at least 3 votes +1 passed; if less than 3 votes or 1 veto (-1 vote), the vote will fail; if a veto is initiated, the voter needs to EXPLAIN the reason for the veto clearly so that everyone can understand and know. A veto without explanation does not count."),(0,a.kt)("p",null,"The following is a sample poll email:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[VOTE] XXXXXX as a Kvrocks [Committer|PMC member]\n\nJudging from contributions in recent months, XXXXXX has submitted many\nimplementations[1][2] to the project and improved the management module for\nthe project.\n\nDuring the optimization and improvement period of the project, it is hoped that\nmore people will participate in the actual project optimization and improvement,\nto let the project more perfect and easier to use.\n\nI think making him/her a [committer|PMC member] will be a recognition of his/her\noutstanding work for Kvrocks. So, I am happy to call VOTE to accept XXXXXX as a\nKvrocks [committer|PMC member]\n\nVoting will continue for at least 72 hours or until the required number of votes is reached.\n\nPlease vote accordingly:\n\n [ ] +1 approve\n [ ] +0 no opinion\n [ ] -1 disapprove with the reason\n\nHere are some links to his/her contributions to Kvrocks:\n\n[1] Issues: https://github.com/apache/kvrocks/issues/created_by/XXXXXX\n[2] PRs   : https://github.com/apache/kvrocks/pulls/created_by/XXXXXX\n")),(0,a.kt)("h2",{id:"feedback-on-voting-results"},"Feedback on voting results"),(0,a.kt)("p",null,"After the voting email is over, the initiator of the vote needs to remind the voting end in the second ","[VOTE]"," email; at the same time, the initiator of the vote needs to initiate a vote summary email, and the summary email is sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"private@kvrocks.apache.org"),"."),(0,a.kt)("p",null,"The following is a sample vote summary email:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[RESULTS][VOTE] XXXXXX as a Kvrocks[committer|PMC member]\n\nHi everyone,\n\nThe vote for \"XXXXXX as a Kvrocks [committer/PMC member]\" has PASSED and closed now.\n\nThe result is as follows:\n\n3 PMC members +1 Votes\n- aaa\n- bbb\n- ccc\n\nVote thread: https://lists.apache.org/thread/aaaaaxxxx\n\nThen I'm going to invite XXXXXX to join us.\n\nThanks for everyone's support!\n")),(0,a.kt)("p",null,'Note: If it is not passed, the result is "The vote for "XXXXXX as a Kvrocks ',"[committer|PMC member]",'" has FAILED and closed now."'),(0,a.kt)("h2",{id:"newly-added-pmc-member-notification-email"},"Newly added PMC member notification email"),(0,a.kt)("p",null,"This step is only processed for the PMC member that passed the vote. If the election is Committer, this step is skipped and not executed."),(0,a.kt)("p",null,"Voting initiators need to send notification emails to Board's mailing group and wait at least 72 hours; email owners send ",(0,a.kt)("inlineCode",{parentName:"p"},"board@apache.org")," and CC ",(0,a.kt)("inlineCode",{parentName:"p"},"private@kvrocks.apache.org"),"; Board will analyze compliance Until there is no doubt."),(0,a.kt)("p",null,"The following is an example of a new PMC notification email:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[NOTICE] XXXXXX for Apache Kvrocks PMC member\n\nHi everyone,\n\nApache Kvrocks proposes to invite XXXXXX to join the PMC.\n\nThe vote result is available here: https://lists.apache.org/...\n\nThanks!\n")),(0,a.kt)("h2",{id:"initiate-invitation-email"},"Initiate invitation email"),(0,a.kt)("p",null,"After the result summary email is sent, the poll initiator must send an invitation email to the candidates."),(0,a.kt)("p",null,"The invitation email is sent to the invitee with a CC to ",(0,a.kt)("inlineCode",{parentName:"p"},"private@kvrocks.apache.org"),"; the invited candidate must reply to accept or decline the invitation through the specified email address."),(0,a.kt)("p",null,"The following is an example of an email inviting candidates:"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"committer",label:"Committer",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Subject: Invitation to become Kvrocks committer: [invitee name]\n\nHi [invitee name],\n\nThe Kvrocks Project Management Committee (PMC)\n\nHereby, we offer you committer privileges to the project.\nThese privileges are offered on the understanding that you'll use them\nreasonably and with common sense. We like to work on trust\nrather than unnecessary constraints.\n\nBeing a committer enables you to more easily make\nchanges without needing to go through the patch\nsubmission process.\n\nBeing a committer does not require you to\nparticipate any more than you already do. It does\ntend to make one even more committed.  You will\nprobably find that you spend more time here.\n\nOf course, you can decline and instead remain as a\ncontributor, participating as you do now.\n\nThis personal invitation is a chance for you to accept or decline in private.\nPlease let us know in reply to this message whether you accept or decline.\n\nIf you accept, you will need an Apache account (ID) with privileges.\nPlease follow these instructions.\n\nA. If you already have an ICLA on file:\n\n    1. If you already have an Apache account, let us know your ID, and we\nwill grant you privileges on the project repositories.\n\n    2. If you have previously sent an ICLA, let us know the email address\nand public name used on the ICLA and your preferred Apache ID, and\nwe will request your account.\n\n    3. If the email address on the previously submitted ICLA is no longer\nvalid, let us know the email address and public name used on the new ICLA,\nand your preferred Apache ID. Continue to step B below and file your new ICLA.\n\nLook to see if your preferred ID is already taken at\nhttps://people.apache.org/committer-index.html\n\nB. If there is not already an ICLA on file, you need to submit an ICLA:\n\n    1. Details of the ICLA and the forms are found\n    through this link: https://www.apache.org/licenses/#clas\n\n    2. Instructions for its completion and return to\n    the Secretary of the ASF are found at\n    https://www.apache.org/licenses/contributor-agreements.html#submitting\n\n    Do not copy the project or any other individual on your message\n    to Secretary, as the form contains Personally Identifiable Information\n    that should be kept private.\n\n    3. When you complete the ICLA form, be sure to include in the form\n    the Apache Kvrocks project and choose a\n    unique Apache ID. Look to see if your preferred\n    ID is already taken at\n    https://people.apache.org/committer-index.html\n    This will allow the Secretary to notify the PMC\n    when your ICLA has been recorded.\n\nWhen recording of your ICLA is noted, you will\nreceive a follow-up message with the next steps for\nestablishing you as a committer.\n"))),(0,a.kt)(r.Z,{value:"pmc-member",label:"PMC Member",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Subject: Invitation to become Kvrocks PMC member: [invitee name]\n\nHi [invitee name],\n\nThe Kvrocks Project Management Committee (PMC)\n\nHereby, we offer you membership in the PMC, and committer privileges\nto the project if you do not have already.\n\nThese privileges are offered on the understanding that you'll use them\nreasonably and with common sense. We like to work on trust\nrather than unnecessary constraints.\n\nBeing a PMC member enables you to guide\nthe direction of the project.\n\nBeing a committer enables you to more easily make\nchanges without needing to go through the patch\nsubmission process. \n\nBeing a PMC member does not require you to\nparticipate any more than you already do. It does\ntend to make one even more committed.  You will\nprobably find that you spend more time here.\n\nOf course, you can decline and instead remain as a\ncontributor, participating as you do now.\n\nThis personal invitation is a chance for you to accept or decline in private.\nPlease let us know in reply to this message whether you accept or decline.\n\nIf you accept, you will need an Apache account (ID) with privileges.\nPlease follow these instructions.\n\nA. If you already have an ICLA on file:\n\n    1. If you already have an Apache account, let us know your ID, and we\nwill grant you privileges on the project repositories.\n\n    2. If you have previously sent an ICLA, let us know the email address\nand public name used on the ICLA and your preferred Apache ID, and\nwe will request your account.\n\n    3. If the email address on the previously submitted ICLA is no longer\nvalid, let us know the email address and public name used on the new ICLA,\nand your preferred Apache ID. Continue to step B below and file your new ICLA.\n\nLook to see if your preferred ID is already taken at\nhttps://people.apache.org/committer-index.html\n\nB. If there is not already an ICLA on file, you need to submit an ICLA:\n\n    1. Details of the ICLA and the forms are found\n    through this link: https://www.apache.org/licenses/#clas\n\n    2. Instructions for its completion and return to\n    the Secretary of the ASF are found at\n    https://www.apache.org/licenses/contributor-agreements.html#submitting\n\n    Do not copy the project or any other individual on your message\n    to Secretary, as the form contains Personally Identifiable Information\n    that should be kept private.\n\n    3. When you complete the ICLA form, be sure to include in the form\n    the Apache Kvrocks project and choose a\n    unique Apache ID. Look to see if your preferred\n    ID is already taken at\n    https://people.apache.org/committer-index.html\n    This will allow the Secretary to notify the PMC\n    when your ICLA has been recorded.\n\nWhen recording of your ICLA is noted, you will\nreceive a follow-up message with the next steps for\nestablishing you as a committer.\n")))),(0,a.kt)("h2",{id:"processing-after-accepting-the-invitation"},"Processing after accepting the invitation"),(0,a.kt)("p",null,"Create an Apache account and add the candidate account to the project. After the candidate accepts the invitation, if the candidate does not have an apache email account, the voting initiator needs to assist the candidate to create an Apache account according to the guidelines."),(0,a.kt)("p",null,'When signing the ICLA, the candidate needs to write the project name of "Apache Kvrocks" in the "notify project:" column, so that the candidate account will be added to the list of corresponding project personnel by Apache.'),(0,a.kt)("p",null,"The voting initiator needs to add project team members, open a permission account for the Apache project, and confirm that the candidate's Apache account has been added to the project address: ",(0,a.kt)("a",{parentName:"p",href:"http://people.apache.org/phonebook.html?podling=kvrocks"},"http://people.apache.org/phonebook.html?podling=kvrocks"),"."),(0,a.kt)("h2",{id:"announce-to-the-community"},"ANNOUNCE to the community"),(0,a.kt)("p",null,"After the above steps are completed, the vote initiator must send a notification email to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev@kvrocks.apache.org")," mail group. The following is a sample notification email:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[ANNOUNCE] New [committer|PMC member]: XXXXXX\n\nHi everyone,\n\nThe Project Management Committee(PMC) for Apache Kvrocks has invited XXXXXX to become a [committer|PMC member] and we are pleased to announce that he/she has accepted.\n\nXXXXXX is being active in the Kvrocks community, and we are glad to see his/her more interactions with the community in the future.\n\nWelcome XXXXXX, and please enjoy your journey.:)\n\nThanks!\n")),(0,a.kt)("p",null,"At this point, the entire process is completed, and the candidate officially becomes a Committer or PMC member of the project."))}d.isMDXComponent=!0},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),a=n(6010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(7462),a=n(7294),i=n(6010),r=n(2466),s=n(6550),l=n(1980),c=n(7392),u=n(12);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,i=p(e),[r,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:i}))),[l,c]=d({queryString:n,groupId:o}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,u.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),v=(()=>{const e=l??m;return h({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var v=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),o=c[n].value;o!==s&&(m(t),l(o))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:p},r,{className:(0,i.Z)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},a.createElement(b,(0,o.Z)({},e,t)),a.createElement(g,(0,o.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(k,(0,o.Z)({key:String(t)},e))}}}]);