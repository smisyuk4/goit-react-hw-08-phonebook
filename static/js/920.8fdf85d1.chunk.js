"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[920],{9920:function(e,r,n){n.r(r),n.d(r,{default:function(){return R}});var o,i,t,l,u,a=n(1413),s=n(5861),c=n(9439),d=n(4687),m=n.n(d),p=n(2791),b=n(5048),x=n(3541),f=n(5578),M=n(5264),h=n(5705),Z=n(6727),v=n(3746),j=n(165),y=n(1889),I=n(1614),L=n(168),g=n(6934),k=n(3400),w=n(4518),C=n(971),P=n(1087),F=(0,g.ZP)(C.n)(o||(o=(0,L.Z)(["\n/* MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-dbcl7b-MuiFormControl-root-MuiTextField-root */\n\n\n/* MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-error Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root */\n  /* & label.Mui-focused {\n    color: black;\n  }  */\n\n  /* MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary Mui-error MuiInputBase-fullWidth MuiInputBase-formControl css-md26zr-MuiInputBase-root-MuiOutlinedInput-root{\n    border-color: green;   \n  } */\n\n  /* &.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused{\n    border-color: skyblue;  \n  }    \n       */\n  /* &.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-error {      \n    border-color: green;        \n  } */\n"]))),q=(0,g.ZP)(y.ZP)(i||(i=(0,L.Z)(["\n  position: relative;\n"]))),z=(0,g.ZP)(k.Z)(t||(t=(0,L.Z)(["\n  position: absolute;\n  top: 23px;\n  right: 10px;\n"]))),S=(0,g.ZP)(w.Z)(l||(l=(0,L.Z)(["\n    padding: 6px 6px;\n    background-color: skyblue;\n\n    &:hover, &:focus{\n        background-color: black;\n    }\n"]))),W=(0,g.ZP)(P.rU)(u||(u=(0,L.Z)(["\n    color: inherit;\n"]))),_=n(3329),B={name:"",email:"",password:""},N=Z.Ry().shape({name:Z.Z_().min(4,"Too Short! Min 4 symbols").max(50,"Too Long! Max 50 symbols").required("Required"),email:Z.Z_().email("Invalid email").required("Required"),password:Z.Z_().min(8,"Too Short! Min 8 symbols!").required("Required")}),T=function(){var e=(0,f.Bl)(),r=(0,c.Z)(e,1)[0],n=(0,p.useState)(!1),o=(0,c.Z)(n,2),i=o[0],t=o[1],l=(0,b.I0)(),u=function(){return t((function(e){return!e}))},d=function(){var e=(0,s.Z)(m().mark((function e(n,o){var i,t,u,s,c,d,p,b;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.name,t=n.email,u=n.password,s=o.resetForm,c={name:i,email:t,password:u},e.prev=3,e.next=6,r(c);case 6:if(null===(b=e.sent)||void 0===b||!b.data){e.next=11;break}return l((0,x.Dj)((0,a.Z)({},b))),s(),e.abrupt("return");case 11:400===(null===b||void 0===b||null===(d=b.error)||void 0===d?void 0:d.status)&&M.Notify.failure("User creation error",{position:"center-top"}),500===(null===b||void 0===b||null===(p=b.error)||void 0===p?void 0:p.status)&&M.Notify.failure("Server error",{position:"center-top"}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(r,n){return e.apply(this,arguments)}}();return(0,_.jsx)(I.Z,{component:"main",maxWidth:"xs",children:(0,_.jsx)(h.J9,{initialValues:B,validationSchema:N,onSubmit:d,children:function(e){var r=e.isValid,n=e.dirty;return(0,_.jsxs)(h.l0,{autoComplete:"off",children:[(0,_.jsxs)(y.ZP,{container:!0,spacing:2,sx:{mt:3},children:[(0,_.jsx)(y.ZP,{item:!0,xs:12,children:(0,_.jsx)(h.gN,{component:F,name:"name",type:"text",fullWidth:!0,title:"min 4 symbols",label:"User Name",required:!0})}),(0,_.jsx)(y.ZP,{item:!0,xs:12,children:(0,_.jsx)(h.gN,{component:F,fullWidth:!0,label:"Email",name:"email",type:"email",required:!0})}),(0,_.jsxs)(q,{item:!0,xs:12,children:[(0,_.jsx)(h.gN,{component:F,fullWidth:!0,label:"Password",name:"password",type:i?"text":"password",title:"min 8 symbols",required:!0}),(0,_.jsx)(z,{"aria-label":"toggle password visibility",onClick:u,children:i?(0,_.jsx)(j.Z,{}):(0,_.jsx)(v.Z,{})})]})]}),(0,_.jsx)(S,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},type:"submit",disabled:!(r&&n),children:"Sign Up"}),(0,_.jsx)(y.ZP,{container:!0,justifyContent:"center",children:(0,_.jsx)(y.ZP,{item:!0,children:(0,_.jsx)(W,{to:"/login",children:"Already have an account? Login"})})})]})}})})},R=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(T,{})})}},3746:function(e,r,n){var o=n(4836);r.Z=void 0;var i=o(n(5649)),t=n(3329),l=(0,i.default)((0,t.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");r.Z=l},165:function(e,r,n){var o=n(4836);r.Z=void 0;var i=o(n(5649)),t=n(3329),l=(0,i.default)((0,t.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");r.Z=l}}]);
//# sourceMappingURL=920.8fdf85d1.chunk.js.map