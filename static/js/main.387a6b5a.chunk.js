(this["webpackJsonpexpense-calc"]=this["webpackJsonpexpense-calc"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={container:"Container_container__B7nPC"}},function(e,t,n){e.exports={form:"Form_form__NQWSz"}},function(e,t,n){e.exports={input:"Input_input__1EIxL",primary:"Input_primary__3eWg6",secondary:"Input_secondary__C_szy",right:"Input_right__r6IS2"}},function(e,t,n){e.exports={button:"Button_button__YN33C",green:"Button_green__88J52",red:"Button_red__2GoZs"}},function(e,t,n){e.exports={element:"List_element__2f4iq",list:"List_list__3Oe1o",form:"List_form__wISjk",priceContainer:"List_priceContainer__3FtdI",currency:"List_currency__92pIn"}},function(e,t,n){e.exports={app:"App_app__b6Byz",container:"App_container__2cJ9g",title:"App_title__2ErfU"}},function(e,t,n){e.exports={container:"Result_container__2zj3c",text:"Result_text__3nLzr"}},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(8),i=n.n(r),o=n(4),s=n(5),l=n(2),u=n.n(l),j=n(9),b=new function e(){Object(j.a)(this,e),this.saveToLocalStorage=function(e,t){return localStorage.setItem("".concat(e),JSON.stringify(t))},this.getFromLocalStorage=function(e){var t=localStorage.getItem(e);return null!==t&&JSON.parse(t)},this.clearLocalStorage=function(e){return e.forEach((function(e){return localStorage.removeItem(e)}))}},d=n(10),m=n.n(d),h=n(0),p=u.a.bind(m.a),O=function(e){var t=e.children;return Object(h.jsx)("div",{className:p("container"),children:t})},f=n(11),_=n.n(f),g=n(1),v=n(6),x=n(12),C=n.n(x),S=["view","placeholder","name","value","align","onChange"],y=u.a.bind(C.a),L=function(e){var t=e.view,n=void 0===t?"primary":t,a=e.placeholder,c=e.name,r=e.value,i=void 0===r?"":r,o=e.align,s=void 0===o?"left":o,l=e.onChange,u=Object(v.a)(e,S);return Object(h.jsx)("input",Object(g.a)(Object(g.a)({className:y("input",n,s),placeholder:a,name:c},u),{},{minLength:2,maxLength:31,value:i,onChange:l}))},N=n(13),I=n.n(N),F=["children","type","color"],k=u.a.bind(I.a),E=function(e){var t=e.children,n=e.type,a=void 0===n?"button":n,c=e.color,r=Object(v.a)(e,F);return Object(h.jsx)("button",Object(g.a)(Object(g.a)({className:k("button",c),type:a},r),{},{children:t}))},w="\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044f";function P(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),i=Object(s.a)(r,2),l=i[0],u=i[1],j=Object(a.useState)({}),b=Object(s.a)(j,2),d=b[0],m=b[1],h=Object(a.useState)(!1),p=Object(s.a)(h,2),O=p[0],f=p[1],_=new RegExp(/[\u0430-\u044f\u0451a-z-\s]/gi),v=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];c(e),u(t),f(a),m(n)}),[c,u,f,m]);return{values:n,handleChange:function(e){var t=e.target,a=t.name,r=t.value;c(Object(g.a)(Object(g.a)({},n),{},Object(o.a)({},a,r))),u(Object(g.a)(Object(g.a)({},l),{},Object(o.a)({},a,t.validationMessage)));var i=t.closest("form");f(null!==i&&i.checkValidity());var s=r.includes(".")?r.split(".")[1].length:0;"productPrice"!==a||t.validationMessage||s<3||(u(Object(g.a)(Object(g.a)({},l),{},Object(o.a)({},a,w))),f(!1)),"productName"!==a||r.match(_)||(u(Object(g.a)(Object(g.a)({},l),{},Object(o.a)({},a,w))),f(!1))},errors:l,isValid:O,resetForm:v,handleBlur:function(e){var t=e.target.name;m(Object(g.a)(Object(g.a)({},d),{},Object(o.a)({},t,!0)))},isValidationStarted:d}}var B=u.a.bind(_.a),z=function(e){var t=e.handleSubmit,n=P();return Object(h.jsxs)("form",{className:B("form"),onSubmit:function(e){e.preventDefault(),t(n.values),n.resetForm()},children:[Object(h.jsx)(L,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",name:"itemName",type:"text",onChange:n.handleChange,value:n.values.itemName||"",required:!0}),Object(h.jsx)(L,{placeholder:"\u0426\u0435\u043d\u0430 \u0442\u043e\u0432\u0430\u0440\u0430",name:"itemPrice",type:"number",onChange:n.handleChange,value:n.values.itemPrice||"",required:!0,step:"0.01"}),Object(h.jsx)(E,{type:"submit",color:"green",disabled:!n.isValid,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},J=n(14),D=n.n(J),T=u.a.bind(D.a),V=function(e){var t=e.itemsList,n=e.onChangeList,a=e.onItemDelete,c=P(),r=function(e){e.preventDefault();var t=[];Object.keys(c.values).forEach((function(e,n){t[n]={index:e.split("_")[1],prop:e.split("_")[0],name:c.values[e]}})),n(t),c.resetForm()};return Object(h.jsx)("ul",{className:T("list"),children:t.map((function(e,t){return Object(h.jsx)("li",{className:T("element"),children:Object(h.jsxs)("form",{className:T("form"),onSubmit:r,children:[Object(h.jsx)(L,{placeholder:Object.keys(e).toString(),value:c.values["itemName_".concat(t)]||"",name:"itemName_".concat(t),view:"secondary",onChange:c.handleChange}),Object(h.jsxs)("div",{className:T("priceContainer"),children:[Object(h.jsx)(L,{placeholder:Object.values(e).toString(),value:c.values["itemPrice_".concat(t)]||"",name:"itemPrice_".concat(t),align:"right",onChange:c.handleChange,view:"secondary"}),Object(h.jsx)("span",{className:T("currency"),children:"\u0440."})]}),Object(h.jsx)(E,{color:"green",type:"submit",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(h.jsx)(E,{color:"red",type:"button",onClick:function(){return function(e){a(e)}(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},t)}))})},q=n(15),A=n.n(q),M=n(16),R=n.n(M),W=u.a.bind(R.a),G=function(e){var t=e.total,n=e.handleClearList;return Object(h.jsxs)("div",{className:W("container"),children:[Object(h.jsxs)("p",{className:W("text"),children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430: ",t," \u0440."]}),Object(h.jsx)(E,{color:"red",onClick:n,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"})]})},Q=u.a.bind(A.a),U=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){c(b.getFromLocalStorage("itemList"))}),[]);return Object(a.useEffect)((function(){b.saveToLocalStorage("itemList",n)}),[n]),Object(h.jsx)("div",{className:Q("app"),children:Object(h.jsxs)("div",{className:Q("container"),children:[Object(h.jsx)("h1",{className:Q("title"),children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432"}),Object(h.jsx)(O,{children:Object(h.jsx)(z,{handleSubmit:function(e){}})}),n.length>0&&Object(h.jsx)(O,{children:Object(h.jsx)(V,{itemsList:n,onChangeList:function(e){e.forEach((function(e){c((function(t){return t.map((function(t,n){return parseInt(e.index)===n&&"itemName"===e.prop?Object(o.a)({},e.name,Object.values(t)[0]):parseInt(e.index)===n&&"itemPrice"===e.prop?Object(o.a)({},Object.keys(t)[0],e.name):t}))}))}))},onItemDelete:function(e){c((function(t){return t.filter((function(t,n){return e!==n}))}))}})}),n.length>0&&Object(h.jsx)(O,{children:Object(h.jsx)(G,{total:function(){var e=0;return n.forEach((function(t){e+=parseFloat(Object.values(t).toString())})),e.toFixed(2)}(),handleClearList:function(){c([])}})})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};n(22),n(23);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root")),Y()}],[[24,1,2]]]);
//# sourceMappingURL=main.387a6b5a.chunk.js.map