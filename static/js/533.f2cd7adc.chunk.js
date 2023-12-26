"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[533],{533:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var n=r(9439),o=r(2791),a=r(4420),i=r(3553),l=function(e){return e.contacts.items},c=function(e){return e.filter.filter},s=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},u=(0,i.P1)([l,c],(function(e,t){var r="string"===typeof t?t.toLowerCase():"";return e.filter((function(e){return e.name&&"string"===typeof e.name&&"string"===typeof r&&e.name.toLowerCase().includes(r)}))})),p=r(208),m="ContactForm_container__qpJ1N",v="ContactForm_form__btn__WXQ4e",h="ContactForm_form__input__VGD4-",f=r(4942),g=(r(3366),r(7462)),b=(r(3733),r(4419),r(2065)),x=r(4923),C=(r(1046),r(4036)),_=r(5527),y=r(5878);r(7225);var Z=(0,y.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),A=r(637);var j=(0,y.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),z=r(184),M=((0,x.ZP)(A.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,"default"!==r.color&&t["color".concat((0,C.Z)(r.color))],r.edge&&t["edge".concat((0,C.Z)(r.edge))],t["size".concat((0,C.Z)(r.size))]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,g.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,b.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})}),(function(e){var t,r=e.theme,n=e.ownerState,o=null==(t=(r.vars||r).palette)?void 0:t[n.color];return(0,g.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,g.Z)({color:null==o?void 0:o.main},!n.disableRipple&&{"&:hover":(0,g.Z)({},o&&{backgroundColor:r.vars?"rgba(".concat(o.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,b.Fq)(o.main,r.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===n.size&&{padding:5,fontSize:r.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:r.typography.pxToRem(28)},(0,f.Z)({},"&.".concat(j.disabled),{backgroundColor:"transparent",color:(r.vars||r).palette.action.disabled}))})),r(6189)),S=((0,M.Z)((0,z.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),(0,M.Z)((0,z.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),(0,M.Z)((0,z.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),(0,M.Z)((0,z.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),(0,M.Z)((0,z.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),(0,x.ZP)(_.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],t["".concat(r.variant).concat((0,C.Z)(r.color||r.severity))]]}})((function(e){var t=e.theme,r=e.ownerState,n="light"===t.palette.mode?b._j:b.$n,o="light"===t.palette.mode?b.$n:b._j,a=r.color||r.severity;return(0,g.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===r.variant&&(0,f.Z)({color:t.vars?t.vars.palette.Alert["".concat(a,"Color")]:n(t.palette[a].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(a,"StandardBg")]:o(t.palette[a].light,.9)},"& .".concat(Z.icon),t.vars?{color:t.vars.palette.Alert["".concat(a,"IconColor")]}:{color:t.palette[a].main}),a&&"outlined"===r.variant&&(0,f.Z)({color:t.vars?t.vars.palette.Alert["".concat(a,"Color")]:n(t.palette[a].light,.6),border:"1px solid ".concat((t.vars||t).palette[a].light)},"& .".concat(Z.icon),t.vars?{color:t.vars.palette.Alert["".concat(a,"IconColor")]}:{color:t.palette[a].main}),a&&"filled"===r.variant&&(0,g.Z)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(a,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(a,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[a].dark:t.palette[a].main,color:t.palette.getContrastText(t.palette[a].main)}))})),(0,x.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),(0,x.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),(0,x.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),function(){var e=(0,a.I0)(),t=(0,o.useState)(""),r=(0,n.Z)(t,2),i=r[0],c=r[1],s=(0,o.useState)(""),d=(0,n.Z)(s,2),u=d[0],f=d[1],g=(0,a.v9)(l),b=function(e){var t=e.target;"name"===t.name?c(t.value):"number"===t.name&&f(t.value)};return(0,z.jsxs)("form",{className:m,onSubmit:function(t){t.preventDefault();var r=g.some((function(e){return e.name&&"string"===typeof e.name&&e.name.toLowerCase()===i.toLowerCase()})),n=g.some((function(e){return e.number&&"string"===typeof e.number&&e.number===u}));r?alert("".concat(i," is already in contacts.")):n?alert("".concat(u," is already in contacts.")):(e((0,p.uK)({name:i,number:u})),c(""),f(""))},children:[(0,z.jsx)("label",{htmlFor:"name",children:"Name"}),(0,z.jsx)("input",{className:h,type:"text",name:"name",value:i,required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:b}),(0,z.jsx)("label",{htmlFor:"phone",children:"Number"}),(0,z.jsx)("input",{className:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",required:!0,value:u,onChange:b}),(0,z.jsx)("button",{className:v,type:"submit",children:"Add contact"})]})}),L=r(1634),k="filter_form__input__lPF1M",R="filter_container__8MH92",I=function(){var e=(0,a.v9)(c),t=(0,a.I0)();return(0,z.jsxs)("div",{className:R,children:[(0,z.jsx)("label",{children:"Find contacts by name"}),(0,z.jsx)("input",{className:k,type:"text",name:"filter",value:e,onChange:function(e){var r=e.target;t((0,L.h)(r.value))}})]})},w="ContactList_form__delete__iYOsF",F="ContactList_listItem__SptUx",N=function(){var e=(0,a.I0)(),t=(0,a.v9)(u);return(0,z.jsx)("ul",{children:t.map((function(t){return(0,z.jsxs)("li",{className:F,children:[t.name,": ",t.number,(0,z.jsx)("button",{className:w,type:"text",onClick:function(){return r=t.id,e((0,p.GK)(r));var r},children:"Delete"})]},t.id)}))})},P=function(){var e=(0,a.I0)(),t=(0,a.v9)(s),r=(0,a.v9)(d);return(0,o.useEffect)((function(){e((0,p.yF)())}),[e]),(0,z.jsxs)("div",{children:[" ",(0,z.jsx)("h1",{children:"Phonebook"}),(0,z.jsx)(S,{}),(0,z.jsx)("h3",{children:"Contacts"}),(0,z.jsx)(I,{}),t&&!r&&(0,z.jsx)("b",{children:"Request in progress..."}),(0,z.jsx)(N,{})]})}}}]);
//# sourceMappingURL=533.f2cd7adc.chunk.js.map