(this["webpackJsonpregistration-app"]=this["webpackJsonpregistration-app"]||[]).push([[0],{100:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),s=a.n(r),i=a(10),c=a.n(i),l=a(8),o=a(71),u=a(20),h=a(21),j=a(25),d=a(24),b=a(32),m=a(12),O=a(144),C=a(157),g=a(57),x=a(143),p=(a(89),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).targetRef=s.a.createRef(),e.duration=e.props.duration||300,e.defaultStyle={transition:"all ".concat(e.duration,"ms ease-in-out"),opacity:0},e.transitionStyles={entering:{opacity:0,marginLeft:-360},entered:{opacity:1,marginLeft:0},exiting:{opacity:0,marginLeft:-360},exited:{opacity:1,marginLeft:0}},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(x.a,{children:Object(n.jsx)(O.a,{onClickAway:this.props.handleClose,children:Object(n.jsx)(C.a,{in:this.props.open,timeout:this.duration,mountOnEnter:!0,unmountOnExit:!0,onEntering:function(){return Object(g.a)(e.targetRef.current)},onExiting:function(){return Object(g.b)(e.targetRef.current)},children:function(t){return Object(n.jsx)("div",{className:"Menu",ref:e.targetRef,style:Object(l.a)(Object(l.a)({},e.defaultStyle),e.transitionStyles[t]),children:Object(n.jsx)("nav",{className:"Menu-Navigation",children:Object(n.jsxs)("ul",{className:"Menu-NavList",children:[Object(n.jsx)("li",{className:"Menu-NavItem",children:Object(n.jsx)(b.b,{to:"/add-user",className:"Menu-NavLink",onClick:e.props.handleClose,children:"Registration"})}),Object(n.jsx)("li",{className:"Menu-NavItem",children:Object(n.jsx)(b.b,{to:"/user-list",className:"Menu-NavLink",onClick:e.props.handleClose,children:"Users list"})}),Object(n.jsx)("li",{className:"Menu-NavItem",children:Object(n.jsx)(b.b,{to:"/about-me",className:"Menu-NavLink",onClick:e.props.handleClose,children:"About author"})})]})})})}})})})}}]),a}(r.Component)),f=(a(95),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).duration=e.props.duration||300,e.defaultStyle={transition:"all ".concat(e.duration,"ms ease-in-out"),opacity:0},e.transitionStyles={entering:{opacity:0},entered:{opacity:.5},exiting:{opacity:0},exited:{opacity:.5}},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(x.a,{children:Object(n.jsx)(C.a,{in:this.props.open,timeout:this.duration,mountOnEnter:!0,unmountOnExit:!0,children:function(t){return Object(n.jsx)("div",{className:"Blackout",ref:e.targetRef,style:Object(l.a)(Object(l.a)({},e.defaultStyle),e.transitionStyles[t])})}})})}}]),a}(r.Component)),v=(a(96),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e.handleMenuButtonClick=function(){e.setState((function(e){return{open:!e.open}}))},e.handleClose=function(){e.setState({open:!1})},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("div",{className:"Hamburger",children:Object(n.jsxs)("button",{className:"Hamburger-Button ".concat(this.state.open?"Hamburger-Button_open":""),onClick:this.handleMenuButtonClick,children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]})}),Object(n.jsx)(p,{open:this.state.open,handleClose:this.handleClose,duration:300}),Object(n.jsx)(f,{open:this.state.open,duration:300})]})}}]),a}(r.Component)),E=(a(97),function(){return Object(n.jsx)("div",{className:"Header",children:Object(n.jsx)("div",{className:"Header-Wrapper",children:Object(n.jsx)(v,{})})})}),w=a(27),N=a(145),y=a(112),R=a(158),I=a(109),A=a(111),B=a(153),T=a(110),L=a(154),U=a(151),S=a(68),H=a.n(S),Y=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(H.a,Object(l.a)(Object(l.a)({},this.props),{},{mask:"9999 9999 9999 9999",maskChar:" "}))}}]),a}(s.a.Component),J=a(156),k=a(152),F=(a(99),function(e){return!!new RegExp("^[0-9]{16}$").test(e)&&Q(e)}),Q=function(e){for(var t=0,a=0;a<e.length;a++){var n=parseInt(e.substr(a,1));a%2===0&&(n*=2)>9&&(n=1+n%10),t+=n}return t%10===0},G={user:{userName:"",userGender:"",userCreditCard:"",withLoyaltyProgram:!1,userCoupon:"",timeStamp:""},errors:{userName:"",userGender:"",userCreditCard:""},validated:{userName:!1,userGender:!1,userCreditCard:!1}},P=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state=Object(l.a)(Object(l.a)({},G),{},{showSuccessMessage:!1}),e.inputTransitionDuration=300,e.inputDefaultStyle={transition:"all ".concat(e.inputTransitionDuration,"ms ease-in-out")},e.inputTransitionStyles={entering:{opacity:0,height:0,marginBottom:0},entered:{opacity:1,height:56,marginBottom:32},exiting:{opacity:0,height:0,marginBottom:0},exited:{opacity:1,height:56,marginBottom:32}},e.handleChange=function(t){var a=t.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;e.setState((function(e){return{user:Object(l.a)(Object(l.a)({},e.user),{},Object(w.a)({},r,n))}}))},e.validateField=function(t){var a,n=t.target,r="checkbox"===n.type?n.checked:n.value,s=n.name;if(!r.length)return e.setState((function(e){return{errors:Object(l.a)(Object(l.a)({},e.errors),{},Object(w.a)({},s,"This field cannot be empty")),validated:Object(l.a)(Object(l.a)({},e.validated),{},Object(w.a)({},s,!1))}}));var i="";switch(s){case"userName":(a=r.match(/^[A-Za-z ]*$/i))||(i="The user name can only contain letters and spaces");break;case"userGender":(a=["Male","Female","Non-binary"].includes(r))||(i="".concat(r," it's not valid gender"));break;case"userCreditCard":(a=F(r.replace(/\s+/g,"")))||(i="This card is not valid")}e.setState((function(e){return{validated:Object(l.a)(Object(l.a)({},e.validated),{},Object(w.a)({},s,a)),errors:Object(l.a)(Object(l.a)({},e.errors),{},Object(w.a)({},s,i))}}))},e.clearError=function(t){var a=t.target.name;e.setState((function(e){return{errors:Object(l.a)(Object(l.a)({},e.errors),{},Object(w.a)({},a,""))}}))},e.handleSubmit=function(){var t=!0,a=function(a){e.state.validated[a]||(t=!1,e.state.errors[a].length||e.setState((function(e){return{errors:Object(l.a)(Object(l.a)({},e.errors),{},Object(w.a)({},a,"This field cannot be empty"))}})))};for(var n in e.state.validated)a(n);t&&e.setState((function(e){return{user:Object(l.a)(Object(l.a)({},e.user),{},{timeStamp:new Date})}}),(function(){e.props.addUser(e.state.user),e.setState((function(e){return Object(l.a)(Object(l.a)(Object(l.a)({},e),G),{},{showSuccessMessage:!0})}))}))},e.handleMessageClose=function(t,a){console.log(a),"clickaway"!==a&&e.setState({showSuccessMessage:!1})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"Registration",children:[Object(n.jsx)("h1",{className:"Registration-Heading",children:"Registration"}),Object(n.jsxs)("form",{className:"Registration-Form",children:[Object(n.jsx)(N.a,{className:"Registration-TextField",name:"userName",value:this.state.user.userName,onFocus:this.clearError,onChange:this.handleChange,onBlur:this.validateField,label:"User name",variant:"outlined",error:!!this.state.errors.userName.length,helperText:this.state.errors.userName}),Object(n.jsxs)(I.a,{className:"Registration-TextField",variant:"outlined",error:!!this.state.errors.userGender.length,children:[Object(n.jsx)(y.a,{id:"userGenderLabel",children:"Gender"}),Object(n.jsxs)(A.a,{labelId:"userGenderLabel",id:"userGender",name:"userGender",value:this.state.user.userGender,onFocus:this.clearError,onChange:this.handleChange,onBlur:this.validateField,label:"Gender",children:[Object(n.jsx)(R.a,{value:"Male",children:"Male"}),Object(n.jsx)(R.a,{value:"Female",children:"Female"}),Object(n.jsx)(R.a,{value:"Non-binary",children:"Non-binary"})]}),Object(n.jsx)(T.a,{children:this.state.errors.userGender})]}),Object(n.jsx)(N.a,{className:"Registration-TextField",name:"userCreditCard",value:this.state.user.userCreditCard,onFocus:this.clearError,onChange:this.handleChange,onBlur:this.validateField,label:"Credit Card",variant:"outlined",InputProps:{inputComponent:Y},helperText:this.state.errors.userCreditCard,error:!!this.state.errors.userCreditCard.length}),Object(n.jsx)(B.a,{className:"Registration-Switch",control:Object(n.jsx)(L.a,{checked:this.state.user.withLoyaltyProgram,onChange:this.handleChange,name:"withLoyaltyProgram"}),label:"Loyalty Program",labelPlacement:"end"}),Object(n.jsx)(C.a,{in:this.state.user.withLoyaltyProgram,timeout:this.inputTransitionDuration,mountOnEnter:!0,unmountOnExit:!0,children:function(t){return Object(n.jsx)(N.a,{className:"Registration-TextField",name:"userCoupon",value:e.state.user.userCoupon,onChange:e.handleChange,label:"Coupon",variant:"outlined",style:Object(l.a)(Object(l.a)({},e.inputDefaultStyle),e.inputTransitionStyles[t])})}}),Object(n.jsx)(U.a,{className:"Registration-Button",onClick:this.handleSubmit,variant:"contained",children:"Create user"})]}),Object(n.jsx)(J.a,{open:this.state.showSuccessMessage,onClose:this.handleMessageClose,message:"I love snacks",children:Object(n.jsx)(k.a,{onClose:this.handleMessageClose,severity:"success",elevation:6,variant:"filled",children:"User created successfully!"})})]})}}]),a}(r.Component),D=a(70),X=a.n(D),W=(a(100),{year:"numeric",month:"long",day:"numeric",timezone:"UTC",hour:"numeric",minute:"numeric",second:"numeric"});var V=function(e){var t=e.users;return Object(n.jsxs)("div",{className:"ClientList",children:[Object(n.jsx)("h1",{className:"ClientList-Heading",children:"User list"}),t&&t.length?Object(n.jsx)("div",{className:"ClientList-TableWrapper",children:Object(n.jsxs)("table",{className:"ClientList-Table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:"ClientList-TableRow ClientList-TableRow_HeaderRow",children:[Object(n.jsx)("th",{className:"ClientList-TableHeader",children:"User name"}),Object(n.jsx)("th",{className:"ClientList-TableHeader",children:"Gender"}),Object(n.jsx)("th",{className:"ClientList-TableHeader",children:"Date"}),Object(n.jsx)("th",{className:"ClientList-TableHeader",children:"Loyalty program"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{className:"ClientList-TableRow",children:[Object(n.jsx)("td",{className:"ClientList-TableData",children:e.userName}),Object(n.jsx)("td",{className:"ClientList-TableData",children:e.userGender}),Object(n.jsx)("td",{className:"ClientList-TableData",children:e.timeStamp.toLocaleString("en-US",W)}),Object(n.jsx)("td",{className:"ClientList-TableData",children:e.withLoyaltyProgram?Object(n.jsx)(X.a,{className:"ClientList-CheckIcon"}):null})]},e.timeStamp.toString())}))})]})}):Object(n.jsxs)("div",{className:"ClientList-Empty",children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"ClientList-EmptyImage"}),Object(n.jsx)("p",{className:"ClientList-EmptyMessage",children:"Oops, the user list is empty!"}),Object(n.jsx)(b.b,{to:"/add-user",className:"ClientList-EmptyLink",children:"Click here to go to the registration page"})]})]})};a(103);var M=function(){return Object(n.jsx)("h1",{className:"AboutMe-Heading",children:"Will be soon..."})},Z=(a(104),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e.addUser=function(t){e.setState((function(e){return{users:[].concat(Object(o.a)(e.users),[Object(l.a)({},t)])}}))},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(b.a,{children:[Object(n.jsx)(E,{}),Object(n.jsx)("div",{className:"App-ContentWrapper",children:Object(n.jsxs)(m.d,{children:[Object(n.jsx)(m.b,{path:"/add-user",children:Object(n.jsx)(P,{addUser:this.addUser})}),Object(n.jsx)(m.b,{path:"/user-list",children:Object(n.jsx)(V,{users:this.state.users})}),Object(n.jsx)(m.b,{path:"/about-me",children:Object(n.jsx)(M,{})}),Object(n.jsx)(m.b,{path:"/",children:Object(n.jsx)(m.a,{to:"/user-list"})})]})})]})}}]),a}(r.Component));a(105);c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(Z,{})}),document.getElementById("root"))},89:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.f96a5ea3.chunk.js.map