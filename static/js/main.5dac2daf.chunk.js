(this["webpackJsonpdemo-box"]=this["webpackJsonpdemo-box"]||[]).push([[8],{108:function(e,t,a){var n={"./CardChessPassGobang":[54,9,0,6],"./CardChessPassGobang/":[54,9,0,6],"./CardChessPassGobang/index":[54,9,0,6],"./CardChessPassGobang/index.tsx":[54,9,0,6],"./CardChessPassOthello":[55,9,0,7],"./CardChessPassOthello/":[55,9,0,7],"./CardChessPassOthello/index":[55,9,0,7],"./CardChessPassOthello/index.tsx":[55,9,0,7],"./GettingStarted":[56,9,1],"./GettingStarted/":[56,9,1],"./GettingStarted/README.md":[113,7,11],"./GettingStarted/index":[56,9,1],"./GettingStarted/index.tsx":[56,9,1],"./ReactComponentCallback":[57,9,2],"./ReactComponentCallback/":[57,9,2],"./ReactComponentCallback/README.md":[114,7,12],"./ReactComponentCallback/index":[57,9,2],"./ReactComponentCallback/index.tsx":[57,9,2],"./ReactStateManagement":[58,9,3],"./ReactStateManagement/":[58,9,3],"./ReactStateManagement/README.md":[115,7,13],"./ReactStateManagement/index":[58,9,3],"./ReactStateManagement/index.tsx":[58,9,3],"./SampleDemo":[59,9,4,5],"./SampleDemo/":[59,9,4,5],"./SampleDemo/README.md":[116,7,14],"./SampleDemo/index":[59,9,4,5],"./SampleDemo/index.tsx":[59,9,4,5]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(2).map(a.e)).then((function(){return a.t(r,t[1])}))}r.keys=function(){return Object.keys(n)},r.id=108,e.exports=r},109:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),o=a(34),c=a(39),l=a(40),i=a(63),s=a(87),d=a(85),u=a(0),m=a(12),p=a(24),g=a(10),b=a(50),v=a(14),f=a(77),h=a(35),E=a(149),C=a(146),S=a(147),x=a(84),O=a(148),y=a(86),D=a(141),j=a(142),R=a(143),w=a(110),k=a(144),M=a(150),F=a(145),N=a(139),T=a(18),I=function(e){return{type:"storeLocalStorageInput",payload:e}},G=a(78),P=a.n(G),U=a(151),L=a(154),A=a(153),W=a(155),_=a(140),z=a(152),B=a(83),J=a.n(B),H=a(41),V=a.n(H),Y=a(47),Z=a.n(Y),$=a(82),q=a.n($),K=[{uuid:"2137b0c2-37a1-4abf-9f7d-ea70be74fdb8",name:"Sample Tag"},{uuid:"d032b66b-2c62-405b-b7ce-118792078edf",name:"Sample Icon Tag",avatarIcon:u.createElement(V.a,null)},{uuid:"6d9dcfba-56c3-424c-8fc0-0ea3506159f2",name:"Sample String Tag",avatarStr:"S"},{uuid:"544d314e-aec3-4199-be78-df4f8f3fe1a9",name:"React.js",mergeName:["react","reactjs"],avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"},{uuid:"06495384-b011-466e-8852-de062d66add5",name:"README",avatarIcon:u.createElement(Z.a,null)}],Q=[{title:"GettingStarted",type:"blog",tags:["readme"],stars:5,updateDate:new Date("2020/07/12"),singleMd:!1},{title:"SampleDemo",type:"demo",tags:["readme","Sample String Tag","sample tag","sample icon tag"],stars:4,updateDate:new Date("2020/07/11"),singleMd:!1},{title:"ReactComponentCallback",type:"blog",tags:["react","callback","component design","design","event"],stars:5,updateDate:new Date("2020/08/03"),singleMd:!0},{title:"ReactStateManagement",type:"blog",tags:["react","state management","component design","design","redux"],stars:4,updateDate:new Date("2020/08/07"),singleMd:!0},{title:"CardChessPassOthello",type:"demo",tags:["react","game","othello","card chess"],stars:4,updateDate:new Date("2020/08/31"),singleMd:!1},{title:"CardChessPassGobang",type:"demo",tags:["react","game","gobang","card chess"],stars:4,updateDate:new Date("2020/08/31"),singleMd:!1}],X=function(){var e,t=Object(N.a)((function(e){return{rightSidebarRoot:{"& .MuiStepConnector-lineVertical":{height:80},"& .MuiStepConnector-vertical":{padding:0}},rightSidebarContent:{paddingLeft:30,height:0,"& #content":{height:80,paddingLeft:5,paddingTop:10}},stars:{"& .dv-star-rating":{transform:"scale(2)",transformOrigin:"0 0"}},tags:{display:"flex",flexWrap:"wrap","& .MuiChip-root":{margin:3,backgroundColor:"#EEEEEE"}}}}))(),a=Object(p.c)((function(e){return e.localStorage})).currentName,n=Q.find((function(e){return e.title.toUpperCase()===(null===a||void 0===a?void 0:a.toUpperCase())})),r=[{id:"1",label:"Content Type",icon:u.createElement(V.a,null),content:u.createElement(w.a,null,null===n||void 0===n?void 0:n.type)},{id:"2",label:"Updated Date",icon:u.createElement(q.a,null),content:u.createElement(w.a,null,function(){var e=null===n||void 0===n?void 0:n.updateDate;if(e){var t=e.getTimezoneOffset();return new Date(e.getTime()-60*t*1e3).toISOString().split("T")[0]}return"No date record."}())},{id:"3",label:"Rating",attr:"stars",icon:u.createElement(Z.a,null),content:u.createElement("div",{className:t.stars},u.createElement(P.a,{name:"stars",value:null!==(e=null===n||void 0===n?void 0:n.stars)&&void 0!==e?e:0,starCount:5,starColor:"#FF8E53",emptyStarColor:"#DDDDDD",editing:!1}))},{id:"4",label:"Related Tags",attr:"tags",icon:u.createElement(J.a,null),content:u.createElement("div",{className:t.tags},null===n||void 0===n?void 0:n.tags.map((function(e){var t,a,n=K.find((function(t){var a;return t.name.toUpperCase()===e.toUpperCase()||(null===t||void 0===t||null===(a=t.mergeName)||void 0===a?void 0:a.some((function(t){return t.toUpperCase()===e.toUpperCase()})))})),r={label:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:e,key:null!==(a=null===n||void 0===n?void 0:n.uuid)&&void 0!==a?a:Object(U.a)(),avatar:(null===n||void 0===n?void 0:n.avatarIcon)||(null===n||void 0===n?void 0:n.avatarStr)?u.createElement(L.a,null,(null===n||void 0===n?void 0:n.avatarIcon)||(null===n||void 0===n?void 0:n.avatarStr)):(null===n||void 0===n?void 0:n.avatarUrl)?u.createElement(L.a,{src:null===n||void 0===n?void 0:n.avatarUrl}):void 0};return u.createElement(A.a,r)})))}];return new Array(7).fill(0).forEach((function(e){var t={id:"",label:"",attr:"",icon:u.createElement(u.Fragment,null," "),content:u.createElement(u.Fragment,null," ")};r.push(t)})),u.createElement("div",{className:t.rightSidebarRoot},u.createElement(W.a,{activeStep:3,orientation:"vertical"},r.map((function(e){return u.createElement(_.a,{key:e.id},u.createElement(z.a,{icon:e.icon},e.label),u.createElement("div",{className:t.rightSidebarContent},u.createElement("div",{id:"content"},e.content)))}))))},ee=function(e){return Object(N.a)((function(e){return{gridRoot:{"& .MuiGrid-item":{padding:0}},headerRoot:{background:"linear-gradient(45deg, #F50057 30%, #FF8E53 90%)","& .MuiToolbar-root":{display:"block",height:48,minHeight:0}},headerTitle:{fontSize:"21px",color:"#FFFFFF",display:"flex",height:"100%",float:"left",alignItems:"center"},headerIcon:{float:"right",color:"#FFFFFF"},tabRoot:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex",height:"calc(100vh - 75px)","& .MuiTab-root":{minWidth:0,maxWidth:"100%"},"& .MuiTab-wrapper":{textTransform:"none",alignItems:"flex-end",whiteSpace:"nowrap"},"& .MuiTouchRipple-root":{color:"#FF80AC"}},tabs:{width:"40%",borderRight:"1px solid ".concat(e.palette.divider)}}}))},te=function(e){var t=e.moduleNameList,a=Object(y.a)(e,["moduleNameList"]),n=ee()();return u.createElement(D.a,Object.assign({container:!0,spacing:2,className:n.gridRoot},a),u.createElement(D.a,{item:!0,xs:12},u.createElement(ae,null)),u.createElement(D.a,{item:!0,xs:10},u.createElement(ne,{child:a.children,moduleNameList:t})),u.createElement(D.a,{item:!0,xs:2},u.createElement(X,null)))},ae=function(e){var t=ee()(),a=Object(T.a)(u.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"github");return u.createElement(j.a,{position:"static",className:t.headerRoot},u.createElement(R.a,null,u.createElement(w.a,{variant:"h6",className:t.headerTitle},"Demo Box"),u.createElement(k.a,{"aria-label":"github",className:t.headerIcon,onClick:function(){window.open("https://github.com/ibarapascal/demo-box","_blank","noopener,noreferrer")}},u.createElement(a,null))))},ne=function(e){var t=e.child,a=e.moduleNameList,n=ee()(),l=Object(p.b)(),i=u.useState(0),s=Object(c.a)(i,2),d=s[0],m=s[1];u.useEffect((function(){var e=window.location.href.split("/").pop();(function(){var t=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=l,t.next=3,I({item:"currentName",value:e});case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()();var t=a.findIndex((function(t){return t===e}));-1!==t&&t!==d&&m(t)}),[l,d,a]);return u.createElement("div",{className:n.tabRoot},u.createElement(M.a,{orientation:"vertical",variant:"scrollable",value:d,onChange:function(e,t){m(t)},className:n.tabs},a.map((function(e,t){return u.createElement(F.a,Object.assign({label:e.replace(/([A-Z])/g," $1").trim(),component:b.b,to:"/".concat(e),key:t},{id:"vertical-tab-".concat(a=t),"aria-controls":"vertical-tabpanel-".concat(a)}));var a}))),t)},re=a(51),oe=a(67),ce=a(68),le=function e(){Object(l.a)(this,e),this.currentName=void 0,this.currentName="GettingStarted"},ie=Object(ce.a)({},{catchErrorMessage:function(e,t){return t.payload}}),se=Object(ce.a)(new le,{storeLocalStorageInput:function(e,t){return Object(oe.a)(Object(oe.a)({},e),{},Object(re.a)({},t.payload.item,t.payload.value))},clearLocalStorageInput:function(){return new le}}),de=Object(v.combineReducers)({errorMessage:ie,localStorage:se}),ue=Object(x.a)({}),me=Object(v.createStore)(de,{},Object(f.composeWithDevTools)(Object(v.applyMiddleware)(h.a))),pe=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).ContentRender=function(){var e=Object(p.c)((function(e){return e.errorMessage})),t=Object.entries(e),n=Object(p.b)(),l=u.useState([]),i=Object(c.a)(l,2),s=i[0],d=i[1];return u.useEffect((function(){(function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,Promise.all(Q.map(function(){var e=Object(o.a)(r.a.mark((function e(n){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(108)("./".concat(n.title));case 2:o=e.sent,t.push({m:o.default,name:n.title});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Import failed");case 9:d(t);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}})()()}),[]),u.createElement(u.Fragment,null,u.createElement(te,{moduleNameList:s.map((function(e){return e.name}))},u.createElement(g.d,null,s.map((function(e){return u.createElement(g.b,{exact:!0,path:"/".concat(e.name),component:e.m,key:e.name})})),0!==s.length&&u.createElement(g.a,{to:"/GettingStarted"}))),u.createElement(E.a,{open:0!==t.length,onClose:function(){n({type:"catchErrorMessage",payload:{}})}},u.createElement(C.a,null,"Error occurred"),u.createElement(S.a,{dividers:!0},t.map((function(e,t){return u.createElement("div",{key:t},"".concat(e[0],": ").concat(e[1]),u.createElement("hr",null))})))))},i.state={},i}return Object(i.a)(n,null,[{key:"getDerivedStateFromError",value:function(){}}]),Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return u.createElement(p.a,{store:me},u.createElement(O.a,{theme:ue},u.createElement(b.a,null,u.createElement(this.ContentRender,null))))}}]),n}(u.Component);document.body.style.overflowY="hidden";var ge=document.getElementById("root");Object(m.render)(u.createElement(pe,null),ge)},95:function(e,t,a){e.exports=a(109)}},[[95,9,10]]]);
//# sourceMappingURL=main.5dac2daf.chunk.js.map