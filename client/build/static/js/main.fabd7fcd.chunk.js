(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},59:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(31),r=a.n(s),c=(a(38),a(13)),i=a(4),o=a(5),l=a(7),h=a(6),j=(a.p,a(39),a(2)),u=a(15),d=a(14),b=a.n(d),m=function(e,t,a,n,s,r){return b.a.post("/api/auth/signup",{username:e,password:t,firstName:a,lastName:n,email:s,role:r}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},p=function(e,t){return b.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},O=a(0),x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",message:"",firstName:"",lastName:"",email:"",role:""},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(u.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,s=a.password,r=a.firstName,c=a.lastName,i=a.email,o=a.role;console.log("role",o,"username",n),m(n,s,r,c,i,o).then((function(t){t.message?e.setState({message:t.message,username:"",password:"",firstName:"",lastName:"",email:""}):(e.props.setUser(t),e.props.history.push("/"))}))},e.cancel=function(t){e.setState({role:""}),e.props.history.push("/")},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.role?Object(O.jsxs)("div",{className:"auth-container",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("h2",{children:"Welcome"}),Object(O.jsx)("h4",{children:"Sign up to get that Coinnn"}),Object(O.jsxs)("h4",{children:[this.state.role.charAt(0).toUpperCase()+this.state.role.slice(1)," login"]})]}),Object(O.jsx)("div",{className:"form",children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field",type:"text",id:"username",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Username",required:!0})}),Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field",type:"password",id:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password",required:!0})}),this.state.message&&Object(O.jsx)("p",{children:this.state.message}),Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field",type:"text",id:"firstName",name:"firstName",value:this.state.firstName,onChange:this.handleChange,placeholder:"First Name"})}),Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field",type:"text",id:"lastName",name:"lastName",value:this.state.lastName,onChange:this.handleChange,placeholder:"Last Name"})}),Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field",type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email"})}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",children:"Sign Up"}),Object(O.jsx)("button",{onClick:this.cancel,children:"Cancel"})]})})]}),Object(O.jsx)("div",{className:"right"})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Sign up with Classroom Economy as"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"student",children:"Student"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"teacher",children:"Teacher"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"school-leader",children:"School Leader"})]})})}}]),a}(n.Component),f=(a(59),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",role:""},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(u.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,s=a.password;p(n,s).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/"))}))},e.cancel=function(t){e.setState({role:""}),e.props.history.push("/")},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.role?Object(O.jsxs)("div",{className:"auth-container",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("h2",{className:"animation a1",children:"Welcome Back"}),Object(O.jsxs)("h4",{className:"animation a2",children:[this.state.role.charAt(0).toUpperCase()+this.state.role.slice(1)," login"]})]}),Object(O.jsx)("div",{className:"form",children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field animation a3",type:"text",id:"username",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Username",required:!0})}),Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field animation a4",type:"password",id:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password",required:!0})}),this.state.message&&Object(O.jsx)("p",{children:this.state.message}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"button-dark animation a6",type:"submit",children:"Log In"}),Object(O.jsx)("button",{onClick:this.cancel,children:"Cancel"})]})})]}),Object(O.jsx)("div",{className:"right"})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login with Classroom Economy as"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"student",children:"Student"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"teacher",children:"Teacher"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"school-leader",children:"School Leader"})]})})}}]),a}(n.Component)),g=a(9);function v(e){var t=function(e){console.log("logout"),b.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)})),console.log("logout successful")};return Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)(g.b,{className:"link",to:"/",children:"Home"})}),e.user?Object(O.jsxs)("div",{className:"links",children:[Object(O.jsx)(g.b,{className:"link",to:"/bank-account",children:"Bank Account"}),Object(O.jsx)(g.b,{className:"link",to:"/job-board",children:"Job Board"}),Object(O.jsx)(g.b,{className:"link",to:"/profile",children:"Profile"}),Object(O.jsx)(g.b,{className:"link",to:"/login",onClick:function(){return t(e)},children:"Log Out"})]}):Object(O.jsxs)("div",{className:"links",children:[Object(O.jsx)(g.b,{className:"link",to:"/signup",children:"Sign Up"}),Object(O.jsx)(g.b,{className:"link",to:"/login",children:"Log In"})]})]})}var C=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.user?Object(O.jsxs)("h1",{children:["Super Great Job ",this.props.user.username," ",Object(O.jsx)("br",{}),"You're Logged in"]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"WELCOME TO ClassEconomy or ClassCoin OR WHATEVER WE'RE CALLING IT!"}),Object(O.jsx)("p",{children:"signup or login to continue "})]}),Object(O.jsx)("img",{src:"../../images/KatieAbby.png",alt:"not working"})]})}}]),a}(n.Component),N=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{children:"This is where the profile will be"})}}]),a}(n.Component),y=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{children:"This is where the job board will be"})}}]),a}(n.Component),w=a(22),k=a.n(w),S=a(33),U=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={amount:"",category:"",newBalance:"",user:e.props.user,transactionID:"",operation:""},e.resetState=function(){e.setState({title:"",amount:"",reason:"",user:e.props.user,transactionID:""})},e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(u.a)({},a,n))},e.handleSubmit=function(){var t=Object(S.a)(k.a.mark((function t(a){var n,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.state.button),a.preventDefault(),n=e.state.user._id,t.prev=3,t.next=6,b.a.post("/api/transactions",{title:e.state.title,amount:e.state.amount,category:e.state.category,operation:e.state.operation});case 6:return s=t.sent,e.props.user.transactions.unshift({_id:s.data._id}),e.setState({user:e.props.user}),t.next=12,b.a.put("/api/users/".concat(n),{transactions:e.state.user.transactions});case 12:t.sent,e.props.history.push("/bank-account"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({user:this.props.user})}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("h1",{children:"Create a Transaction"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"Date: "}),Object(O.jsx)("input",{type:"date",id:"date",name:"date",onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"Type: "}),Object(O.jsxs)("select",{id:"operation",name:"operation",value:this.state.operation,onChange:this.handleChange,children:[Object(O.jsx)("option",{value:"deposit",children:"Deposit"}),Object(O.jsx)("option",{value:"withdraw",children:"Withdraw"})]})]}),Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"Amount: "}),Object(O.jsx)("input",{type:"amount",id:"amount",name:"amount",onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"Reason:"}),Object(O.jsxs)("select",{id:"category",name:"category",value:this.state.category,onChange:this.handleChange,children:[Object(O.jsx)("option",{value:"rent",children:"Rent"}),Object(O.jsx)("option",{value:"paycheck",children:"Paycheck"}),Object(O.jsx)("option",{value:"fine",children:"Fine"}),Object(O.jsx)("option",{value:"bonus",children:"Bonus"}),Object(O.jsx)("option",{value:"other",children:"Other"})]})]}),Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"New Balance: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"newBalance",id:"newBalance",name:"newBalance",onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"How much do you want to put towards savings?"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"savings",id:"savings",name:"savings",onChange:this.handleChange})]})]}),Object(O.jsx)("div",{className:"create-transaction-buttons",children:Object(O.jsx)("button",{type:"submit",className:"button-light",form:"create-transaction-form",children:"Submit"})})]})})})}}]),a}(n.Component),A=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.b,{to:"/transaction/create",children:"Add Transaction"}),Object(O.jsx)("div",{children:"This is where the bank account will be"})]})}}]),a}(n.Component),L=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v,{user:this.state.user,setUser:this.setUser}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/signup",render:function(t){return Object(O.jsx)(x,Object(c.a)({setUser:e.setUser},t))}}),Object(O.jsx)(j.a,{exact:!0,path:"/login",render:function(t){return Object(O.jsx)(f,Object(c.a)({setUser:e.setUser},t))}}),Object(O.jsx)(j.a,{exact:!0,path:"/profile",render:function(t){return Object(O.jsx)(N,Object(c.a)(Object(c.a)({setUser:e.setUser},t),{},{user:e.state.user}))}}),Object(O.jsx)(j.a,{exact:!0,path:"/job-board",render:function(t){return Object(O.jsx)(y,Object(c.a)(Object(c.a)({setUser:e.setUser},t),{},{user:e.state.user}))}}),Object(O.jsx)(j.a,{exact:!0,path:"/transaction/create",render:function(t){return Object(O.jsx)(U,Object(c.a)(Object(c.a)({setUser:e.setUser},t),{},{user:e.state.user}))}}),Object(O.jsx)(j.a,{exact:!0,path:"/bank-account",render:function(t){return Object(O.jsx)(A,Object(c.a)(Object(c.a)({setUser:e.setUser},t),{},{user:e.state.user}))}}),Object(O.jsx)(j.a,{exact:!0,path:"/",render:function(t){return Object(O.jsx)(C,Object(c.a)({setUser:e.setUser,user:e.state.user},t))}})]})]})}}]),a}(n.Component),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};b.a.get("api/auth/loggedin").then((function(e){var t=e.data;r.a.render(Object(O.jsx)(g.a,{children:Object(O.jsx)(L,{user:t})}),document.getElementById("root"))})),T()}},[[69,1,2]]]);
//# sourceMappingURL=main.fabd7fcd.chunk.js.map