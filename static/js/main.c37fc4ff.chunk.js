(this.webpackJsonpdonatecartask=this.webpackJsonpdonatecartask||[]).push([[0],{17:function(e,t,a){e.exports=a(34)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=(a(22),a(23),a(4)),s=a(5),l=a(8),u=a(7),m=(a(24),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("ul",{className:"ul_header"},r.a.createElement("li",null,"Shopping Cart")))}}]),a}(n.Component)),p=(a(25),a(26),a(6)),d=a(2),h=a.n(d),f=a(12),E=[{image:"https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",name:"Adidas",price:100},{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApu_nFlRM64aXFCtCEVhg7eRgGVVitMGtLfemn9VomtNvPBtEFQ&s",name:"Nike",price:500},{image:"https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",name:"Puma",price:1e3},{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApu_nFlRM64aXFCtCEVhg7eRgGVVitMGtLfemn9VomtNvPBtEFQ&s",name:"Nike",price:500}],y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.proData(),this.props.currencyToProps("INR")}},{key:"render",value:function(){var e=this,t=this.props.dataFromReducer,a=this.props.currncyFromReducer;return r.a.createElement("section",{className:"product_box"},r.a.createElement("article",{className:"product_display"},r.a.createElement("div",{className:"row"},""!==t?t.map((function(e,t){return r.a.createElement("div",{key:t,className:"col-lg-4 col-md-6 col-sm-6 col-xs-12 animated fadeIn"},r.a.createElement("div",{className:"cart"},r.a.createElement("img",{src:e.image,alt:"hi"}),r.a.createElement("h6",null,e.name),r.a.createElement("h6",null,"INR"===a[0]?r.a.createElement("span",null," ",r.a.createElement("i",{className:"fa fa-inr","aria-hidden":"true"})," ",(e.price/parseInt(a[1])).toFixed(2)," "):"$ "+(e.price/parseInt(a[1])).toFixed(2))))})):"Loading...")),r.a.createElement("article",{className:"currency_display"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},"Currency"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("select",{className:"custom-select",id:"inputGroupSelect01",onChange:function(t){return e.props.currencyToProps(t.target.value)}},r.a.createElement("option",{value:"INR"},"INR"),r.a.createElement("option",{value:"USD"},"USD"))))))}}]),a}(n.Component),v=Object(p.b)((function(e){return{dataFromReducer:e.data,currncyFromReducer:e.currncy}}),(function(e){return{proData:function(){e(function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_DATA",payload:E});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},currencyToProps:function(t){e(function(e){return function(){var t=Object(f.a)(h.a.mark((function t(a){var n,r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.exchangeratesapi.io/latest?base=".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,c=r.rates.INR,a({type:"GET_CURR",payload:[e,c]});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(y);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(1),N=a(16),R=a(13),j={data:"",currncy:1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA":return Object(R.a)({},e,{data:t.payload});case"GET_CURR":return Object(R.a)({},e,{currncy:t.payload})}return e},O=Object(g.c)(w,Object(g.a)(N.a));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:O},r.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.c37fc4ff.chunk.js.map