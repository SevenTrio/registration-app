(this["webpackJsonpregistration-app"]=this["webpackJsonpregistration-app"]||[]).push([[0],{100:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),s=a.n(r),i=a(10),c=a.n(i),l=a(8),o=a(71),u=a(20),d=a(21),j=a(25),h=a(24),b=a(32),m=a(12),O=a(144),p=a(158),g=a(57),x=a(143),f=(a(89),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).targetRef=s.a.createRef(),e.duration=e.props.duration||300,e.defaultStyle={transition:"all ".concat(e.duration,"ms ease-in-out"),opacity:0},e.transitionStyles={entering:{opacity:0,marginLeft:-360},entered:{opacity:1,marginLeft:0},exiting:{opacity:0,marginLeft:-360},exited:{opacity:1,marginLeft:0}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(x.a,{children:Object(n.jsx)(O.a,{onClickAway:this.props.handleClose,children:Object(n.jsx)(p.a,{in:this.props.open,timeout:this.duration,mountOnEnter:!0,unmountOnExit:!0,onEntering:function(){return Object(g.a)(e.targetRef.current)},onExiting:function(){return Object(g.b)(e.targetRef.current)},children:function(t){return Object(n.jsx)("div",{className:"Menu",ref:e.targetRef,style:Object(l.a)(Object(l.a)({},e.defaultStyle),e.transitionStyles[t]),children:Object(n.jsx)("nav",{className:"Menu-Navigation",children:Object(n.jsxs)("ul",{className:"Menu-NavList",children:[Object(n.jsx)("li",{className:"Menu-NavItem",children:Object(n.jsx)(b.b,{to:"/add-user",className:"Menu-NavLink",onClick:e.props.handleClose,children:"Registration"})}),Object(n.jsx)("li",{className:"Menu-NavItem",children:Object(n.jsx)(b.b,{to:"/user-list",className:"Menu-NavLink",onClick:e.props.handleClose,children:"Users list"})}),Object(n.jsx)("li",{className:"Menu-NavItem",children:Object(n.jsx)(b.b,{to:"/about-me",className:"Menu-NavLink",onClick:e.props.handleClose,children:"About author"})})]})})})}})})})}}]),a}(r.Component)),v=(a(95),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).duration=e.props.duration||300,e.defaultStyle={transition:"all ".concat(e.duration,"ms ease-in-out"),opacity:0},e.transitionStyles={entering:{opacity:0},entered:{opacity:.5},exiting:{opacity:0},exited:{opacity:.5}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(x.a,{children:Object(n.jsx)(p.a,{in:this.props.open,timeout:this.duration,mountOnEnter:!0,unmountOnExit:!0,children:function(t){return Object(n.jsx)("div",{className:"Blackout",ref:e.targetRef,style:Object(l.a)(Object(l.a)({},e.defaultStyle),e.transitionStyles[t])})}})})}}]),a}(r.Component)),C=(a(96),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e.handleMenuButtonClick=function(){e.setState((function(e){return{open:!e.open}}))},e.handleClose=function(){e.setState({open:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("div",{className:"Hamburger",children:Object(n.jsxs)("button",{className:"Hamburger-Button ".concat(this.state.open?"Hamburger-Button_open":""),onClick:this.handleMenuButtonClick,children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]})}),Object(n.jsx)(f,{open:this.state.open,handleClose:this.handleClose,duration:300}),Object(n.jsx)(v,{open:this.state.open,duration:300})]})}}]),a}(r.Component)),y=(a(97),function(){return Object(n.jsx)("div",{className:"Header",children:Object(n.jsx)("div",{className:"Header-Wrapper",children:Object(n.jsx)(C,{})})})}),N=a(27),L=a(145),S=a(112),k=a(154),T=a(109),w=a(111),M=a(157),R=a(110),E=a(155),F=a(151),G=a(68),B=a.n(G),H=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)(B.a,Object(l.a)(Object(l.a)({},this.props),{},{mask:"9999 9999 9999 9999",maskChar:" "}))}}]),a}(s.a.Component),D=a(156),U=a(152),A=(a(99),function(e){return!!new RegExp("^[0-9]{16}$").test(e)&&I(e)}),I=function(e){for(var t=0,a=0;a<e.length;a++){var n=parseInt(e.substr(a,1));a%2===0&&(n*=2)>9&&(n=1+n%10),t+=n}return t%10===0},P={user:{userName:"",userGender:"",userCreditCard:"",withLoyaltyProgram:!1,userCoupon:"",timeStamp:""},errors:{userName:"",userGender:"",userCreditCard:""},validated:{userName:!1,userGender:!1,userCreditCard:!1}},W=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state=Object(l.a)(Object(l.a)({},P),{},{showSuccessMessage:!1}),e.inputTransitionDuration=300,e.inputDefaultStyle={transition:"all ".concat(e.inputTransitionDuration,"ms ease-in-out")},e.inputTransitionStyles={entering:{opacity:0,height:0,marginBottom:0},entered:{opacity:1,height:56,marginBottom:32},exiting:{opacity:0,height:0,marginBottom:0},exited:{opacity:1,height:56,marginBottom:32}},e.handleChange=function(t){var a=t.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;e.setState((function(e){return{user:Object(l.a)(Object(l.a)({},e.user),{},Object(N.a)({},r,n))}}))},e.validateField=function(t){var a,n=t.target,r="checkbox"===n.type?n.checked:n.value,s=n.name;if(!r.length)return e.setState((function(e){return{errors:Object(l.a)(Object(l.a)({},e.errors),{},Object(N.a)({},s,"This field cannot be empty")),validated:Object(l.a)(Object(l.a)({},e.validated),{},Object(N.a)({},s,!1))}}));var i="";switch(s){case"userName":a=r.match(/^[A-Za-z ]*$/i),i="The user name can only contain letters and spaces";break;case"userGender":a=["Male","Female","Non-binary"].includes(r),i="".concat(r," it's not valid gender");break;case"userCreditCard":a=A(r.replace(/\s+/g,"")),i="This card is not valid"}e.setState((function(e){return{validated:Object(l.a)(Object(l.a)({},e.validated),{},Object(N.a)({},s,a)),errors:Object(l.a)(Object(l.a)({},e.errors),{},Object(N.a)({},s,i))}}))},e.clearError=function(t){var a=t.target.name;e.setState((function(e){return{errors:Object(l.a)(Object(l.a)({},e.errors),{},Object(N.a)({},a,""))}}))},e.handleSubmit=function(){var t=!0,a=function(a){e.state.validated[a]||(t=!1,e.state.errors[a].length||e.setState((function(e){return{errors:Object(l.a)(Object(l.a)({},e.errors),{},Object(N.a)({},a,"This field cannot be empty"))}})))};for(var n in e.state.validated)a(n);t&&e.setState((function(e){return{user:Object(l.a)(Object(l.a)({},e.user),{},{timeStamp:new Date})}}),(function(){e.props.addUser(e.state.user),e.setState((function(e){return Object(l.a)(Object(l.a)(Object(l.a)({},e),P),{},{showSuccessMessage:!0})}))}))},e.handleMessageClose=function(t,a){console.log(a),"clickaway"!==a&&e.setState({showSuccessMessage:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"Registration",children:[Object(n.jsx)("h1",{className:"Registration-Heading",children:"Registration"}),Object(n.jsxs)("form",{className:"Registration-Form",children:[Object(n.jsx)(L.a,{className:"Registration-TextField",name:"userName",value:this.state.user.userName,onFocus:this.clearError,onChange:this.handleChange,onBlur:this.validateField,label:"User name",variant:"outlined",error:!!this.state.errors.userName.length,helperText:this.state.errors.userName}),Object(n.jsxs)(T.a,{className:"Registration-TextField",variant:"outlined",error:!!this.state.errors.userGender.length,children:[Object(n.jsx)(S.a,{id:"userGenderLabel",children:"Gender"}),Object(n.jsxs)(w.a,{labelId:"userGenderLabel",id:"userGender",name:"userGender",value:this.state.user.userGender,onFocus:this.clearError,onChange:this.handleChange,onBlur:this.validateField,label:"Gender",children:[Object(n.jsx)(k.a,{value:"Male",children:"Male"}),Object(n.jsx)(k.a,{value:"Female",children:"Female"}),Object(n.jsx)(k.a,{value:"Non-binary",children:"Non-binary"})]}),Object(n.jsx)(R.a,{children:this.state.errors.userGender})]}),Object(n.jsx)(L.a,{className:"Registration-TextField",name:"userCreditCard",value:this.state.user.userCreditCard,onFocus:this.clearError,onChange:this.handleChange,onBlur:this.validateField,label:"Credit Card",variant:"outlined",InputProps:{inputComponent:H},helperText:this.state.errors.userCreditCard,error:!!this.state.errors.userCreditCard.length}),Object(n.jsx)(M.a,{className:"Registration-Switch",control:Object(n.jsx)(E.a,{checked:this.state.user.withLoyaltyProgram,onChange:this.handleChange,name:"withLoyaltyProgram"}),label:"Loyalty Program",labelPlacement:"end"}),Object(n.jsx)(p.a,{in:this.state.user.withLoyaltyProgram,timeout:this.inputTransitionDuration,mountOnEnter:!0,unmountOnExit:!0,children:function(t){return Object(n.jsx)(L.a,{className:"Registration-TextField",name:"userCoupon",value:e.state.user.userCoupon,onChange:e.handleChange,label:"Coupon",variant:"outlined",style:Object(l.a)(Object(l.a)({},e.inputDefaultStyle),e.inputTransitionStyles[t])})}}),Object(n.jsx)(F.a,{className:"Registration-Button",onClick:this.handleSubmit,variant:"contained",children:"Create user"})]}),Object(n.jsx)(D.a,{open:this.state.showSuccessMessage,onClose:this.handleMessageClose,message:"I love snacks",children:Object(n.jsx)(U.a,{onClose:this.handleMessageClose,severity:"success",elevation:6,variant:"filled",children:"User created successfully!"})})]})}}]),a}(r.Component),z=a(70),J=a.n(z),$=(a(100),{year:"numeric",month:"long",day:"numeric",timezone:"UTC",hour:"numeric",minute:"numeric",second:"numeric"});var _=function(e){var t=e.users;return Object(n.jsxs)("div",{className:"ClientList",children:[Object(n.jsx)("h1",{className:"ClientList-Heading",children:"User list"}),t&&t.length?Object(n.jsx)("div",{className:"ClientList-TableWrapper",children:Object(n.jsxs)("table",{className:"ClientList-Table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:"ClientList-TableRow ClientList-TableRow_HeaderRow",children:[Object(n.jsx)("th",{className:"ClientList-TableHeader",children:"User name"}),Object(n.jsx)("th",{className:"ClientList-TableHeader",children:"Gender"}),Object(n.jsx)("th",{className:"ClientList-TableHeader",children:"Date"}),Object(n.jsx)("th",{className:"ClientList-TableHeader",children:"Loyalty program"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{className:"ClientList-TableRow",children:[Object(n.jsx)("td",{className:"ClientList-TableData",children:e.userName}),Object(n.jsx)("td",{className:"ClientList-TableData",children:e.userGender}),Object(n.jsx)("td",{className:"ClientList-TableData",children:e.timeStamp.toLocaleString("en-US",$)}),Object(n.jsx)("td",{className:"ClientList-TableData",children:e.withLoyaltyProgram?Object(n.jsx)(J.a,{className:"ClientList-CheckIcon"}):null})]},e.timeStamp.toString())}))})]})}):Object(n.jsxs)("div",{className:"ClientList-Empty",children:[Object(n.jsx)("img",{src:"/images/empty.png",alt:"",className:"ClientList-EmptyImage"}),Object(n.jsx)("p",{className:"ClientList-EmptyMessage",children:"Oops, the user list is empty!"}),Object(n.jsx)(b.b,{to:"/add-user",className:"ClientList-EmptyLink",children:"Click here to go to the registration page"})]})]})};a(103);var Z=function(){return Object(n.jsx)("h1",{className:"AboutMe-Heading",children:"Will be soon..."})},q=(a(104),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e.addUser=function(t){e.setState((function(e){return{users:[].concat(Object(o.a)(e.users),[Object(l.a)({},t)])}}))},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(b.a,{children:[Object(n.jsx)(y,{}),Object(n.jsx)("div",{className:"App-ContentWrapper",children:Object(n.jsxs)(m.d,{children:[Object(n.jsx)(m.b,{path:"/add-user",children:Object(n.jsx)(W,{addUser:this.addUser})}),Object(n.jsx)(m.b,{path:"/user-list",children:Object(n.jsx)(_,{users:this.state.users})}),Object(n.jsx)(m.b,{path:"/about-me",children:Object(n.jsx)(Z,{})}),Object(n.jsx)(m.b,{path:"/",children:Object(n.jsx)(m.a,{to:"/user-list"})})]})})]})}}]),a}(r.Component));a(105);c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root"))},89:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.c2917a86.chunk.js.map