(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(31),r=n.n(s),c=(n(38),n(14)),i=n(4),o=n(5),l=n(7),j=n(6),h=(n.p,n(39),n(2)),u=n(15),d=n(12),b=n.n(d),m=function(e,t,n,a,s,r){return b.a.post("/api/auth/signup",{username:e,password:t,firstName:n,lastName:a,email:s,role:r}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},p=function(e,t){return b.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},O=n(0),x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",message:"",firstName:"",lastName:"",email:"",role:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(u.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password,r=n.firstName,c=n.lastName,i=n.email,o=n.role;console.log("role",o,"username",a),m(a,s,r,c,i,o).then((function(t){t.message?e.setState({message:t.message,username:"",password:"",firstName:"",lastName:"",email:""}):(e.props.setUser(t),e.props.history.push("/"))}))},e.cancel=function(t){e.setState({role:""}),e.props.history.push("/")},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.role?Object(O.jsxs)("div",{className:"auth-container",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("h2",{children:"Welcome"}),Object(O.jsx)("h4",{children:"Sign up to get that Coinnn"}),Object(O.jsxs)("h4",{children:[this.state.role.charAt(0).toUpperCase()+this.state.role.slice(1)," login"]})]}),Object(O.jsx)("div",{className:"form",children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field",type:"text",id:"username",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Username",required:!0})}),Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field",type:"password",id:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password",required:!0})}),this.state.message&&Object(O.jsx)("p",{children:this.state.message}),Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field",type:"text",id:"firstName",name:"firstName",value:this.state.firstName,onChange:this.handleChange,placeholder:"First Name"})}),Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field",type:"text",id:"lastName",name:"lastName",value:this.state.lastName,onChange:this.handleChange,placeholder:"Last Name"})}),Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field",type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email"})}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",children:"Sign Up"}),Object(O.jsx)("button",{onClick:this.cancel,children:"Cancel"})]})})]}),Object(O.jsx)("div",{className:"right"})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Sign up with Classroom Economy as"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"student",children:"Student"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"teacher",children:"Teacher"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"school-leader",children:"School Leader"})]})})}}]),n}(a.Component),f=(n(59),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",role:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(u.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password;p(a,s).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/"))}))},e.cancel=function(t){e.setState({role:""}),e.props.history.push("/")},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.role?Object(O.jsxs)("div",{className:"auth-container",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("h2",{className:"animation a1",children:"Welcome Back"}),Object(O.jsxs)("h4",{className:"animation a2",children:[this.state.role.charAt(0).toUpperCase()+this.state.role.slice(1)," login"]})]}),Object(O.jsx)("div",{className:"form",children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field animation a3",type:"text",id:"username",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Username",required:!0})}),Object(O.jsx)("div",{className:"form-field-box",children:Object(O.jsx)("input",{className:"form-field animation a4",type:"password",id:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password",required:!0})}),this.state.message&&Object(O.jsx)("p",{children:this.state.message}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"button-dark animation a6",type:"submit",children:"Log In"}),Object(O.jsx)("button",{onClick:this.cancel,children:"Cancel"})]})})]}),Object(O.jsx)("div",{className:"right"})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login with Classroom Economy as"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"student",children:"Student"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"teacher",children:"Teacher"}),Object(O.jsx)("button",{name:"role",onClick:this.handleChange,value:"school-leader",children:"School Leader"})]})})}}]),n}(a.Component)),g=n(8);n(60);function v(e){var t=function(e){console.log("logout"),b.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)})),console.log("logout successful")};return Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)(g.b,{className:"link",to:"/",children:Object(O.jsx)("img",{src:"../../images/logo.png",alt:"logo",className:"logo"})})}),e.user?Object(O.jsxs)("div",{className:"links",children:[Object(O.jsx)(g.b,{className:"link",to:"/bank-account",children:"Bank Account"}),Object(O.jsx)(g.b,{className:"link",to:"/job-board",children:"Job Board"}),Object(O.jsx)(g.b,{className:"link",to:"/profile",children:"Profile"}),Object(O.jsx)(g.b,{className:"link",to:"/login",onClick:function(){return t(e)},children:"Log Out"})]}):Object(O.jsxs)("div",{className:"links",children:[Object(O.jsx)(g.b,{className:"link",children:"Learn More"}),Object(O.jsx)(g.b,{className:"link",children:"Schools"}),Object(O.jsx)(g.b,{className:"link",children:"Resources"}),Object(O.jsx)(g.b,{className:"link loginlink",to:"/login",children:"Log In"}),Object(O.jsx)(g.b,{className:"link signuplink",to:"/signup",children:"Sign Up"})]})]})}var C=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.user?Object(O.jsxs)("h1",{children:["Super Great Job ",this.props.user.username," ",Object(O.jsx)("br",{}),"You're Logged in"]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"WELCOME TO ClassEconomy or ClassCoin OR WHATEVER WE'RE CALLING IT!"}),Object(O.jsx)("p",{children:"signup or login to continue "})]}),Object(O.jsx)("img",{src:"../../images/KatieAbby.png",alt:"katie abby pic"})]})}}]),n}(a.Component),N=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:"This is where the profile will be"})}}]),n}(a.Component),y=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:"This is where the job board will be"})}}]),n}(a.Component),k=n(22),w=n.n(k),S=n(33),U=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={description:"",amount:"",category:"rent",newBalance:"",user:e.props.user,transactionID:"",operation:"deposit"},e.resetState=function(){e.setState({amount:"",reason:"",user:e.props.user,transactionID:""})},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(u.a)({},n,a))},e.handleSubmit=function(){var t=Object(S.a)(w.a.mark((function t(n){var a,s,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state.user._id,t.prev=2,t.next=5,b.a.post("/api/transactions",{amount:e.state.amount,category:e.state.category,operation:e.state.operation,description:e.state.description});case 5:return s=t.sent,r=e.props.user,console.log("user",r),r.transactions.unshift({_id:s.data._id}),e.setState({user:e.props.user}),t.next=12,b.a.put("/api/users/".concat(a),{transactions:e.state.user.transactions});case 12:t.sent,e.props.history.push("/bank-account"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[2,16]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({user:this.props.user})}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("h1",{children:"Create a Transaction"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"Date: "}),Object(O.jsx)("input",{type:"date",id:"date",name:"date",onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"Type: "}),Object(O.jsxs)("select",{id:"operation",name:"operation",value:this.state.operation,onChange:this.handleChange,children:[Object(O.jsx)("option",{value:"deposit",children:"Deposit"}),Object(O.jsx)("option",{value:"withdraw",children:"Withdraw"})]})]}),Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"Amount: "}),Object(O.jsx)("input",{type:"amount",id:"amount",name:"amount",onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"Category:"}),Object(O.jsxs)("select",{id:"category",name:"category",value:this.state.category,onChange:this.handleChange,children:[Object(O.jsx)("option",{value:"rent",children:"Rent"}),Object(O.jsx)("option",{value:"paycheck",children:"Paycheck"}),Object(O.jsx)("option",{value:"fine",children:"Fine"}),Object(O.jsx)("option",{value:"bonus",children:"Bonus"}),Object(O.jsx)("option",{value:"other",children:"Other"})]})]}),Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"Description: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"description",id:"description",name:"description",onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"New Balance: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"newBalance",id:"newBalance",name:"newBalance",onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"create-transaction-form-item",children:[Object(O.jsx)("label",{children:"How much do you want to put towards savings?"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"savings",id:"savings",name:"savings",onChange:this.handleChange})]})]}),Object(O.jsx)("div",{className:"create-transaction-buttons",children:Object(O.jsx)("button",{type:"submit",children:"Submit"})})]})})})}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:this.props.transaction.amount}),Object(O.jsx)("td",{children:this.props.transaction.operation}),Object(O.jsx)("td",{children:this.props.transaction.category}),Object(O.jsx)("td",{children:this.props.transaction.description})]},this.props.transaction._id)}}]),n}(a.Component),L=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={transactions:[]},e.getTransactions=function(){b.a.get("/api/transactions").then((function(t){e.setState({transactions:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getTransactions()}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.b,{to:"/transaction/create",children:"Add Transaction"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("table",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Amount"}),Object(O.jsx)("th",{children:"Deposit/Withdraw"}),Object(O.jsx)("th",{children:"Category"}),Object(O.jsx)("th",{children:"Description"})]}),this.state.transactions.map((function(e){return Object(O.jsx)(A,{transaction:e},e.id)}))]}),Object(O.jsx)("div",{})]})}}]),n}(a.Component),T=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v,{user:this.state.user,setUser:this.setUser}),Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/signup",render:function(t){return Object(O.jsx)(x,Object(c.a)({setUser:e.setUser},t))}}),Object(O.jsx)(h.a,{exact:!0,path:"/login",render:function(t){return Object(O.jsx)(f,Object(c.a)({setUser:e.setUser},t))}}),Object(O.jsx)(h.a,{exact:!0,path:"/profile",render:function(t){return Object(O.jsx)(N,Object(c.a)(Object(c.a)({setUser:e.setUser},t),{},{user:e.state.user}))}}),Object(O.jsx)(h.a,{exact:!0,path:"/job-board",render:function(t){return Object(O.jsx)(y,Object(c.a)(Object(c.a)({setUser:e.setUser},t),{},{user:e.state.user}))}}),Object(O.jsx)(h.a,{exact:!0,path:"/transaction/create",render:function(t){return Object(O.jsx)(U,Object(c.a)(Object(c.a)({setUser:e.setUser},t),{},{user:e.state.user}))}}),Object(O.jsx)(h.a,{exact:!0,path:"/bank-account",render:function(t){return Object(O.jsx)(L,Object(c.a)(Object(c.a)({setUser:e.setUser},t),{},{user:e.state.user}))}}),Object(O.jsx)(h.a,{exact:!0,path:"/",render:function(t){return Object(O.jsx)(C,Object(c.a)({setUser:e.setUser,user:e.state.user},t))}})]})]})}}]),n}(a.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};b.a.get("api/auth/loggedin").then((function(e){var t=e.data;r.a.render(Object(O.jsx)(g.a,{children:Object(O.jsx)(T,{user:t})}),document.getElementById("root"))})),D()}},[[70,1,2]]]);
//# sourceMappingURL=main.fb317f56.chunk.js.map