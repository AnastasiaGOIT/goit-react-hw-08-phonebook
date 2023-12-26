"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[764],{764:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(439),a=t(791),o=t(420),i=t(553),s=function(e){return e.contacts.items},c=function(e){return e.filter},u=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},m=(0,i.P1)([s,c],(function(e,n){console.log(n);var t=n.toLowerCase();return e.filter((function(e){return e.name&&"string"===typeof e.name&&e.name.toLowerCase().includes(t)}))})),f=t(208),d="ContactForm_container__qpJ1N",_="ContactForm_form__btn__WXQ4e",h="ContactForm_form__input__VGD4-",p=t(184),v=function(){var e=(0,o.I0)(),n=(0,a.useState)(""),t=(0,r.Z)(n,2),i=t[0],c=t[1],u=(0,a.useState)(""),l=(0,r.Z)(u,2),m=l[0],v=l[1],b=(0,o.v9)(s),x=function(e){var n=e.target;"name"===n.name?c(n.value):"number"===n.name&&v(n.value)};return(0,p.jsxs)("form",{className:d,onSubmit:function(n){n.preventDefault();var t=b.some((function(e){return e.name&&"string"===typeof e.name&&e.name.toLowerCase()===i.toLowerCase()})),r=b.some((function(e){return e.number&&"string"===typeof e.number&&e.number===m}));t?alert("".concat(i," is already in contacts.")):r?alert("".concat(m," is already in contacts.")):(e((0,f.uK)({name:i,number:m})),c(""),v(""))},children:[(0,p.jsx)("label",{htmlFor:"name",children:"Name"}),(0,p.jsx)("input",{className:h,type:"text",name:"name",value:i,required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:x}),(0,p.jsx)("label",{htmlFor:"phone",children:"Number"}),(0,p.jsx)("input",{className:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",required:!0,value:m,onChange:x}),(0,p.jsx)("button",{className:_,type:"submit",children:"Add contact"})]})},b=t(413),x=(0,t(855).oM)({name:"filter",initialState:{filter:""},reducers:{onInputChangeAction:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{filter:n.payload})}}}),j=x.actions.onInputChangeAction,C=(x.reducer,"filter_form__input__lPF1M"),g="filter_container__8MH92",y=function(){var e=(0,o.v9)(c),n=(0,o.I0)();return(0,p.jsxs)("div",{className:g,children:[(0,p.jsx)("label",{children:"Find contacts by name"}),(0,p.jsx)("input",{className:C,type:"text",name:"filter",value:e,onChange:function(e){var t=e.target;n(j(t.value))}})]})},N="ContactList_form__delete__iYOsF",F="ContactList_listItem__SptUx",k=function(){var e=(0,o.I0)(),n=(0,o.v9)(m);return console.log(n),(0,p.jsx)("ul",{children:n.map((function(n){return(0,p.jsxs)("li",{className:F,children:[n.name,": ",n.number,(0,p.jsx)("button",{className:N,type:"text",onClick:function(){return t=n.id,e((0,f.GK)(t));var t},children:"Delete"})]},n.id)}))})},w=function(){var e=(0,o.I0)(),n=(0,o.v9)(u),t=(0,o.v9)(l);return(0,a.useEffect)((function(){e((0,f.yF)())}),[e]),(0,p.jsxs)("div",{children:[" ",(0,p.jsx)("h1",{children:"Phonebook"}),(0,p.jsx)(v,{}),(0,p.jsx)("h3",{children:"Contacts"}),(0,p.jsx)(y,{}),n&&!t&&(0,p.jsx)("b",{children:"Request in progress..."}),(0,p.jsx)(k,{})]})}}}]);
//# sourceMappingURL=764.d2f344ec.chunk.js.map