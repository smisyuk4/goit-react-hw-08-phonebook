"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[399],{5195:function(n,e,t){t.d(e,{h:function(){return r}});var r={name:/^([a-zA-Z\u0410-\u0429\u042c\u042e\u042f\u0490\u0404\u0406\u0407\u0430-\u0449\u044c\u044e\u044f\u0491\u0454\u0456\u0457]+['`\u2019" -])*((['`\u2019" -][a-zA-Z\u0410-\u0429\u042c\u042e\u042f\u0490\u0404\u0406\u0407\u0430-\u0449\u044c\u044e\u044f\u0491\u0454\u0456\u0457])?[a-zA-Z\u0410-\u0429\u042c\u042e\u042f\u0490\u0404\u0406\u0407\u0430-\u0449\u044c\u044e\u044f\u0491\u0454\u0456\u0457]*)*$/,email:/^[^\s,\\\\/\\|@][a-zA-Z\d\\-]*@[^\s,\\\\/\\|\\.@][a-zA-Z\d\\-]*\.[a-zA-Z]{2,}$/,password:/^[^\s.][a-zA-Z\d-]{7,}$/,number:/^[+]?\d{2,7}[(\- .\s]?\d{2,7}([)\- .\s]?\d{2,7})*$/}},8399:function(n,e,t){t.r(e),t.d(e,{default:function(){return Nn}});var r,o,a,i,s,c,l,u,d,m,p,h,x,b,f=t(5048),Z=t(6351),v=t(1538),g=t(5861),k=t(9439),y=t(4687),j=t.n(y),w=t(5578),C=t(5299),P=t(5264),N=t(5705),M=t(6727),z=t(5195),q=t(1889),A=t(1614),I=t(168),T=t(6934),S=t(4518),W=t(971),_=(0,T.ZP)(W.n)(r||(r=(0,I.Z)(["\n  /* & label.Mui-focused {\n    color: black;\n  } \n\n  & .MuiOutlinedInput-root {\n    &.Mui-focused fieldset {\n      border-color: skyblue;\n    }\n  } */\n"]))),L=(0,T.ZP)(S.Z)(o||(o=(0,I.Z)(["\n    background-color: skyblue;\n\n    &:hover, &:focus{\n        background-color: black;\n    }\n"]))),V=function(n,e){var t=n.toLowerCase();return e.find((function(n){return n.name.toLowerCase()===t}))},$=t(3329),F={name:"",number:""},O=M.Ry().shape({name:M.Z_().trim().min(4,"Too Short! Min 4 symbols").max(50,"Too Long! Max 50 symbols").matches(z.h.name,"Name may contain only Eng or Ua letters, apostrophe, spaces and dash").required(),number:M.Z_().trim().matches(z.h.number,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),R=function(){var n=(0,w.sC)(),e=(0,k.Z)(n,1)[0],t=(0,w.wY)().data,r=(0,f.I0)(),o=function(){var n=(0,g.Z)(j().mark((function n(o,a){var i,s,c,l,u,d,m;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=o.name,s=o.number,c=a.resetForm,!V((l={name:i,number:s}).name,t)){n.next=6;break}return C.Report.warning("Sorry","Not a unique contact - write a new one!","Okay"),n.abrupt("return");case 6:return n.prev=6,n.next=9,e(l);case 9:if(null===(m=n.sent)||void 0===m||!m.data){n.next=15;break}return P.Notify.success("The contact has been sent to storage",{position:"center-top"}),r((0,v.V8)(!1)),c(),n.abrupt("return");case 15:400===(null===m||void 0===m||null===(u=m.error)||void 0===u?void 0:u.status)&&P.Notify.failure("Error creating contact",{position:"center-top"}),401===(null===m||void 0===m||null===(d=m.error)||void 0===d?void 0:d.status)&&P.Notify.failure("Missing header with authorization token",{position:"center-top"}),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(6),console.log(n.t0);case 22:case"end":return n.stop()}}),n,null,[[6,19]])})));return function(e,t){return n.apply(this,arguments)}}();return(0,$.jsx)(A.Z,{component:"main",maxWidth:"xs",children:(0,$.jsx)(N.J9,{initialValues:F,validationSchema:O,onSubmit:o,children:function(n){var e=n.isValid,t=n.dirty;return(0,$.jsxs)(N.l0,{autoComplete:"off",children:[(0,$.jsxs)(q.ZP,{container:!0,spacing:2,sx:{mt:3},children:[(0,$.jsx)(q.ZP,{item:!0,xs:12,children:(0,$.jsx)(N.gN,{component:_,name:"name",type:"text",fullWidth:!0,title:"min 2 symbols",label:"Name",required:!0})}),(0,$.jsx)(q.ZP,{item:!0,xs:12,children:(0,$.jsx)(N.gN,{component:_,name:"number",type:"text",fullWidth:!0,title:"Example: 050-4838779; +972-50-4838779; +38(050)48 38 779",label:"Phone number",required:!0})})]}),(0,$.jsx)(L,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:!(e&&t),children:"Create"})]})}})})},E=(0,T.ZP)(W.n)(a||(a=(0,I.Z)(["\n  /* & label.Mui-focused {\n    color: black;\n  } \n\n  & .MuiOutlinedInput-root {\n    &.Mui-focused fieldset {\n      border-color: skyblue;\n    }\n  } */\n"]))),Y=(0,T.ZP)(S.Z)(i||(i=(0,I.Z)(["\n    background-color: skyblue;\n\n    &:hover, &:focus{\n        background-color: black;\n    }\n"]))),J=M.Ry().shape({name:M.Z_().min(2,"Too Short! Min 2 symbols").max(20,"Too Long! Max 20 symbols").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces").required(),number:M.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),Q=function(){var n=(0,w.a6)(),e=(0,k.Z)(n,1)[0],t=(0,w.wY)().data,r=(0,f.v9)(Z.fq),o=r.id,a=r.name,i=r.number,s=(0,f.I0)(),c=function(){var n=(0,g.Z)(j().mark((function n(r,a){var i,c,l,u,d,m,p;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=r.name,c=r.number,l=a.resetForm,!V((u={id:o,name:i,number:c}).name,t)){n.next=6;break}return C.Report.warning("Attention","Not a unique contact - write a new name!","Okay"),n.abrupt("return");case 6:return n.prev=6,n.next=9,e(u);case 9:if(null===(p=n.sent)||void 0===p||!p.data){n.next=15;break}return P.Notify.success("The contact has been change in storage",{position:"center-top"}),s((0,v.Nt)()),l(),n.abrupt("return");case 15:400===(null===p||void 0===p||null===(d=p.error)||void 0===d?void 0:d.status)&&P.Notify.failure("Contact update failed",{position:"center-top"}),401===(null===p||void 0===p||null===(m=p.error)||void 0===m?void 0:m.status)&&P.Notify.failure("Missing header with authorization token",{position:"center-top"}),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(6),console.log(n.t0);case 22:case"end":return n.stop()}}),n,null,[[6,19]])})));return function(e,t){return n.apply(this,arguments)}}();return(0,$.jsx)(A.Z,{component:"main",maxWidth:"xs",children:(0,$.jsx)(N.J9,{initialValues:{name:a,number:i},validationSchema:J,onSubmit:c,children:function(n){var e=n.isValid,t=n.dirty;return(0,$.jsxs)(N.l0,{autoComplete:"off",children:[(0,$.jsxs)(q.ZP,{container:!0,spacing:2,sx:{mt:3},children:[(0,$.jsx)(q.ZP,{item:!0,xs:12,children:(0,$.jsx)(N.gN,{component:E,name:"name",type:"text",fullWidth:!0,title:"min 2 symbols",label:"Name",required:!0})}),(0,$.jsx)(q.ZP,{item:!0,xs:12,children:(0,$.jsx)(N.gN,{component:E,name:"number",type:"text",fullWidth:!0,title:"must be digits and can contain spaces...",label:"Phone number",required:!0})})]}),(0,$.jsx)(Y,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:!(e&&t),children:"Change"})]})}})})},D=t(225),U=t(4741),X=D.Z.div(s||(s=(0,I.Z)(["\n    position: sticky;\n    display: inline-block;\n    top: 70px;\n    transform: translateX(-47px);\n    z-index: 1000;\n    margin-bottom: 10px;\n    border-radius: 5px;\n    background-color: white;\n"]))),B=(0,T.ZP)(U.Z)(c||(c=(0,I.Z)(["\n  & label.Mui-focused {\n    color: black;\n  } \n\n  & .MuiOutlinedInput-root {\n    &.Mui-focused fieldset {\n      border-color: skyblue;\n    }\n  }\n"]))),G=function(){var n=(0,f.I0)();return(0,$.jsx)(X,{children:(0,$.jsx)(B,{name:"find",type:"text",label:"Find contacts by name",autoComplete:"off",onChange:function(e){var t=e.currentTarget;n((0,v.Tv)(t.value))}})})},H=t(2199),K=t(7247),nn=t(1286),en=t(4022),tn=D.Z.li(l||(l=(0,I.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0;    \n"]))),rn=D.Z.div(u||(u=(0,I.Z)(["\n    display: flex;\n    align-items: center;\n"]))),on=(0,T.ZP)(en.Z)(d||(d=(0,I.Z)(["\n    margin-right: 5px;\n"]))),an=(0,T.ZP)(S.Z)(m||(m=(0,I.Z)(["\n    padding: 6px 6px;\n    background-color: skyblue;\n\n    &:hover, &:focus{\n        background-color: black;\n    }\n"]))),sn=function(n){var e=n.contact,t=e.id,r=e.name,o=e.number,a=(0,w.Qr)(),i=(0,k.Z)(a,1)[0],s=(0,f.I0)(),c=function(){var n=(0,g.Z)(j().mark((function n(){return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i(t);case 3:P.Notify.success("The contact has been remove from storage",{position:"center-top"}),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,g.Z)(j().mark((function n(){return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s((0,v.$Z)(e));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,$.jsxs)(tn,{children:[(0,$.jsxs)(rn,{children:[(0,$.jsx)(on,{}),r,": ",o]}),(0,$.jsxs)(H.Z,{variant:"contained","aria-label":"outlined primary button group",children:[(0,$.jsx)(an,{"aria-label":"delete",onClick:c,children:(0,$.jsx)(K.Z,{})}),(0,$.jsx)(an,{"aria-label":"change",onClick:l,children:(0,$.jsx)(nn.Z,{})})]})]})},cn=t(7750),ln=t(3400),un=D.Z.ul(p||(p=(0,I.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n"]))),dn=(0,T.ZP)(ln.Z)(h||(h=(0,I.Z)(["\n    position: sticky;\n    top: 75px;\n    left: 500px;\n    z-index: 1000;\n\n    color: white;\n    background-color: skyblue;\n\n    &:hover, &:focus{\n        color: green;\n        background-color: black;\n    }\n\n    @media screen and (min-width: 500px) {  \n        left: 50%;\n    }\n"]))),mn=function(){var n=(0,w.wY)(),e=n.data,t=n.isLoading,r=n.error,o=n.isSuccess,a=(0,f.v9)(Z.AD),i=(0,f.I0)();if(t&&!r)return(0,$.jsx)("b",{children:"Request in progress..."});if(r)return P.Notify.failure(r,{position:"center-top"}),(0,$.jsx)($.Fragment,{children:!t&&(0,$.jsx)("b",{children:"Error"})});if(o){var s=a.toLowerCase(),c=e.filter((function(n){return n.name.toLowerCase().includes(s)})).sort((function(n,e){return n.name.localeCompare(e.name)}));return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(dn,{"aria-label":"add",size:"large",onClick:function(){i((0,v.V8)(!0))},children:(0,$.jsx)(cn.Z,{})}),(0,$.jsx)(G,{}),(0,$.jsx)(un,{children:0!==c.length&&c.map((function(n){return(0,$.jsx)(sn,{contact:n},n.id)}))})]})}},pn=t(5671),hn=t(3144),xn=t(136),bn=t(7277),fn=t(2791),Zn=t(4164),vn=t(890),gn=t(9823),kn=t(5326),yn=t(4554),jn=(0,T.ZP)(yn.Z)(x||(x=(0,I.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \n    padding: 10px;\n    min-width: 320px;\n    background-color: white;\n    border: 2px solid #000;\n    box-shadow: 24px;\n    border-radius: 5px;\n"]))),wn=(0,T.ZP)(S.Z)(b||(b=(0,I.Z)(["\n    position: absolute;\n    right: 10px;\n    padding: 6px 6px;\n    min-width: auto;\n    background-color: skyblue;\n\n    &:hover, &:focus{\n        color: red;\n        background-color: black;\n    }\n"]))),Cn=document.querySelector("#modal-root"),Pn=function(n){(0,xn.Z)(t,n);var e=(0,bn.Z)(t);function t(){return(0,pn.Z)(this,t),e.apply(this,arguments)}return(0,hn.Z)(t,[{key:"render",value:function(){var n=this.props,e=n.title,t=n.children,r=n.closeModel;return(0,Zn.createPortal)((0,$.jsx)(kn.Z,{open:!0,onClose:r,children:(0,$.jsxs)(jn,{children:[(0,$.jsx)(wn,{"aria-label":"close",onClick:r,children:(0,$.jsx)(gn.Z,{})}),(0,$.jsx)(vn.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:e}),t]})}),Cn)}}]),t}(fn.Component),Nn=function(){var n=(0,f.v9)(Z.QY),e=(0,f.v9)(Z.IT),t=(0,f.I0)(),r=function(){t((0,v.Nt)()),t((0,v.V8)(!1))};return(0,$.jsxs)("div",{children:[e&&(0,$.jsx)(Pn,{title:"Add contact",children:(0,$.jsx)(R,{}),closeModel:r}),n&&(0,$.jsx)(Pn,{title:"Change contact",children:(0,$.jsx)(Q,{}),closeModel:r}),(0,$.jsx)(mn,{})]})}}}]);
//# sourceMappingURL=399.10d6305a.chunk.js.map