(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,a,s){},37:function(e,a,s){},57:function(e,a,s){},66:function(e,a,s){"use strict";s.r(a);var t=s(1),n=s.n(t),i=s(30),r=s.n(i),c=(s(36),s(19)),l=s(11),o=s(12),m=s(14),d=s(13),h=(s.p,s(37),s(8)),j=s(2),u=s(10),b=s(16),p=s.n(b),f=function(e,a,s,t,n){return p.a.post("/auth/signup",{username:e,password:a,firstName:s,lastName:t,email:n}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},O=function(e,a){return p.a.post("/auth/login",{username:e,password:a}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},x=s(0),g=function(e){Object(m.a)(s,e);var a=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={username:"",password:"",message:"",firstName:"",lastName:"",email:""},e.handleChange=function(a){var s=a.target,t=s.name,n=s.value;e.setState(Object(u.a)({},t,n))},e.handleSubmit=function(a){a.preventDefault();var s=e.state,t=s.username,n=s.password,i=s.firstName,r=s.lastName,c=s.email;f(t,n,i,r,c).then((function(a){a.message?e.setState({message:a.message,username:"",password:"",firstName:"",lastName:"",email:""}):(e.props.setUser(a),e.props.history.push("/"))}))},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"auth-container",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("h2",{className:"animation a1",children:"Welcome"}),Object(x.jsx)("h4",{className:"animation a2",children:"Sign up to get that Coinnn"})]}),Object(x.jsx)("div",{className:"form",children:Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsx)("div",{className:"form-field-box",children:Object(x.jsx)("input",{className:"form-field animation a3",type:"text",id:"username",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Username"})}),Object(x.jsx)("div",{className:"form-field-box",children:Object(x.jsx)("input",{className:"form-field animation a4",type:"password",id:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"})}),this.state.message&&Object(x.jsx)("p",{children:this.state.message}),Object(x.jsx)("div",{className:"form-field-box",children:Object(x.jsx)("input",{className:"form-field animation a3",type:"text",id:"firstName",name:"firstName",value:this.state.firstName,onChange:this.handleChange,placeholder:"First Name"})}),Object(x.jsx)("div",{className:"form-field-box",children:Object(x.jsx)("input",{className:"form-field animation a4",type:"text",id:"lastName",name:"lastName",value:this.state.lastName,onChange:this.handleChange,placeholder:"Last Name"})}),Object(x.jsx)("div",{className:"form-field-box",children:Object(x.jsx)("input",{className:"form-field animation a3",type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email"})}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"button-dark animation a6",type:"submit",children:"Sign Up"})]})})]}),Object(x.jsx)("div",{className:"right"})]})}}]),s}(t.Component),N=(s(57),function(e){Object(m.a)(s,e);var a=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={username:"",password:"",message:""},e.handleChange=function(a){var s=a.target,t=s.name,n=s.value;e.setState(Object(u.a)({},t,n))},e.handleSubmit=function(a){a.preventDefault();var s=e.state,t=s.username,n=s.password;O(t,n).then((function(a){a.message?e.setState({message:a.message,username:"",password:""}):(e.props.setUser(a),e.props.history.push("/"))}))},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"auth-container",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("h2",{className:"animation a1",children:"Welcome Back"}),Object(x.jsx)("h4",{className:"animation a2",children:"Log in to your account using username and password"})]}),Object(x.jsx)("div",{className:"form",children:Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsx)("div",{className:"form-field-box",children:Object(x.jsx)("input",{className:"form-field animation a3",type:"text",id:"username",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Username"})}),Object(x.jsx)("div",{className:"form-field-box",children:Object(x.jsx)("input",{className:"form-field animation a4",type:"password",id:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"})}),this.state.message&&Object(x.jsx)("p",{children:this.state.message}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"button-dark animation a6",type:"submit",children:"Log In"})]})})]}),Object(x.jsx)("div",{className:"right"})]})}}]),s}(t.Component));function v(e){return Object(x.jsxs)("nav",{className:"navbar",children:[Object(x.jsx)("div",{className:"logo",children:Object(x.jsx)(h.b,{className:"link",to:"/"})}),e.user?Object(x.jsxs)("div",{className:"links",children:[Object(x.jsx)(h.b,{className:"link",to:"/challenges",children:"Challenges"}),Object(x.jsx)(h.b,{className:"link",to:"/rewards",children:"Rewards"}),Object(x.jsx)(h.b,{className:"link",to:"/profile",children:"Profile"})]}):Object(x.jsxs)("div",{className:"links",children:[Object(x.jsx)(h.b,{className:"link",to:"/signup",children:"Sign Up"}),Object(x.jsx)(h.b,{className:"link",to:"/login",children:"Log In"})]})]})}var C=s.p+"static/media/KatieAbby.48ec5c6b.png",w=function(e){Object(m.a)(s,e);var a=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={user:e.props.user},e.setUser=function(a){e.setState({user:a})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)(h.a,{children:[Object(x.jsx)(v,{user:this.state.user,setUser:this.setUser}),Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/signup",render:function(a){return Object(x.jsx)(g,Object(c.a)({setUser:e.setUser},a))}}),Object(x.jsx)(j.a,{exact:!0,path:"/login",render:function(a){return Object(x.jsx)(N,Object(c.a)({setUser:e.setUser},a))}})]})]}),Object(x.jsx)("h1",{children:"WELCOME TO ClassEconomy or ClassCoin OR WHATEVER WE'RE CALLING IT!"}),Object(x.jsx)("img",{src:C,alt:"not working"})]})}}]),s}(t.Component),y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,67)).then((function(a){var s=a.getCLS,t=a.getFID,n=a.getFCP,i=a.getLCP,r=a.getTTFB;s(e),t(e),n(e),i(e),r(e)}))};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),y()}},[[66,1,2]]]);
//# sourceMappingURL=main.ae2ba41a.chunk.js.map