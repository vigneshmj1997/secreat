(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,a){},38:function(e,t,a){e.exports=a(67)},46:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},67:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(22),c=a.n(l),s=a(17),o=(a(43),a(44),a(27),a(8)),i=a(9),m=a(10),u=a(11),h=a(14),p=a(5),d=Object(p.a)(),f=a(35),b=a(20),v=(a(46),a(28));v.initializeApp({apiKey:"AIzaSyANigdLn55o1muDBCR5r5fYQX2o03JZmJY",authDomain:"secret-msg-faf8d.firebaseapp.com",databaseURL:"https://secret-msg-faf8d.firebaseio.com",projectId:"secret-msg-faf8d",storageBucket:"secret-msg-faf8d.appspot.com",messagingSenderId:"869327284003",appId:"1:869327284003:web:91aa1d3a035f791f3bce96",measurementId:"G-FLV3PVKZMQ"});var E=v,g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).Copy=function(t){window.location.href,e.props.name;document.execCommand("copy")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"this link can be uses to see messeges you got"),r.a.createElement("h1",null,r.a.createElement("label",null,"window.location.href/",this.props.name,"/",this.props.pass))),r.a.createElement("div",null,r.a.createElement("label",null," this link can be shared to your friends"),r.a.createElement("h1",null,r.a.createElement("label",null,"window.location.href/",this.props.name))),r.a.createElement("button",{className:"btn btn-primary",onClick:this.Copy},"Click here to copy your link"))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).Change=function(){e.setState({change:!0})},e.state={currentItem:"",username:"",change:!1},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){console.log(window.location.href),e.preventDefault();var t=E.database().ref("items"),a={title:this.state.currentItem,user:this.state.username};t.push(a),this.setState({currentItem:"",username:""})}},{key:"componentDidMount",value:function(){var e=this;E.database().ref("items").on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push({id:r,title:a[r].title,user:a[r].user});e.setState({items:n})}))}},{key:"removeItem",value:function(e){E.database().ref("/items/".concat(e)).remove()}},{key:"render",value:function(){var e=null;return this.state.change&&(e=r.a.createElement(g,{name:this.state.username,pass:this.state.currentItem})),r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,r.a.createElement("u",null,"Message Sent")),r.a.createElement("p",null),r.a.createElement("p",null),r.a.createElement("p",null),r.a.createElement("p",null),r.a.createElement("h2",null,"To create your link enter the details below "))),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"add-item"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Enter Name"),r.a.createElement("input",{className:"form-control form-control-lg",type:"text",name:"username",onChange:this.handleChange,value:this.state.username})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Enter a password"),r.a.createElement("input",{className:"form-control form-control-lg",type:"text",name:"currentItem",onChange:this.handleChange,value:this.state.currentItem})),r.a.createElement(s.b,{onClick:this.Change,className:"btn btn-primary"},"Click here"),e)))}}]),a}(n.Component),$=(a(61),a(28),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={loop:[]},e.message=function(){var t,a=window.location.href.split("/").splice(-1),n=E.database().ref(a+"/Message"),l=[];n.on("value",(function(e){t=e.val();var a=0;for(var n in t)0==a?(l.push(r.a.createElement("div",{class:"carousel-item active"},r.a.createElement("h1",null,t[n]))),a=1):l.push(r.a.createElement("div",{class:"carousel-item"},r.a.createElement("h1",null,t[n])))}),(function(e){console.log("The read failed: "+e.code)})),e.setState({loop:l}),console.log(t),console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:this.message},"Click here to see msg"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"carouselExampleSlidesOnly",class:"carousel slide","data-ride":"carousel"},this.state.loop)))}}]),a}(n.Component)),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={message:""},e.Send=function(){var t=window.location.href.split("/").splice(-1);E.database().ref(t+"/Message").push(e.state.message)},e.Change=function(t){e.setState({message:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"add-item"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Enter the message here"),r.a.createElement("input",{className:"form-control form-control-lg",type:"text",name:"username",onChange:this.Change,value:this.state.message}))),r.a.createElement(s.b,{to:"/Login",onClick:this.Send,className:"btn btn-primary"},"Click here"))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.b,{history:d},r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/Send/*",exact:!0,component:C}),r.a.createElement(h.a,{path:"/Login/*",exact:!0,component:y}),r.a.createElement(h.a,{path:"/About/*",exact:!0,component:$})))}}]),a}(n.Component);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};c.a.render(r.a.createElement(s.a,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.b4d100c6.chunk.js.map