"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[768],{3768:function(e,t,o){o.r(t),o.d(t,{default:function(){return q}});var n=o(9439),r=o(2791),a=o(4420),i=o(3553),l=function(e){return e.contacts.items},c=function(e){return e.filter.filter},s=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},u=(0,i.P1)([l,c],(function(e,t){var o="string"===typeof t?t.toLowerCase():"";return e.filter((function(e){return e.name&&"string"===typeof e.name&&"string"===typeof o&&e.name.toLowerCase().includes(o)}))})),v=o(208),p="ContactForm_container__qpJ1N",m="ContactForm_form__btn__WXQ4e",f="ContactForm_form__input__VGD4-",h=o(4942),g=(o(3366),o(7462)),x=(o(3733),o(4419),o(2065)),Z=o(4923),b=(o(1046),o(4036)),S=o(5527),y=o(5878);o(7225);var C=(0,y.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),_=o(2982);var z=(0,y.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),w=o(184),A=((0,Z.ZP)(_.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,"default"!==o.color&&t["color".concat((0,b.Z)(o.color))],o.edge&&t["edge".concat((0,b.Z)(o.edge))],t["size".concat((0,b.Z)(o.size))]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,g.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,x.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})}),(function(e){var t,o=e.theme,n=e.ownerState,r=null==(t=(o.vars||o).palette)?void 0:t[n.color];return(0,g.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,g.Z)({color:null==r?void 0:r.main},!n.disableRipple&&{"&:hover":(0,g.Z)({},r&&{backgroundColor:o.vars?"rgba(".concat(r.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,x.Fq)(r.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===n.size&&{padding:5,fontSize:o.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:o.typography.pxToRem(28)},(0,h.Z)({},"&.".concat(z.disabled),{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}))})),o(6189)),M=((0,A.Z)((0,w.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),(0,A.Z)((0,w.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),(0,A.Z)((0,w.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),(0,A.Z)((0,w.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),(0,A.Z)((0,w.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),(0,Z.ZP)(S.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,b.Z)(o.color||o.severity))]]}})((function(e){var t=e.theme,o=e.ownerState,n="light"===t.palette.mode?x._j:x.$n,r="light"===t.palette.mode?x.$n:x._j,a=o.color||o.severity;return(0,g.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===o.variant&&(0,h.Z)({color:t.vars?t.vars.palette.Alert["".concat(a,"Color")]:n(t.palette[a].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(a,"StandardBg")]:r(t.palette[a].light,.9)},"& .".concat(C.icon),t.vars?{color:t.vars.palette.Alert["".concat(a,"IconColor")]}:{color:t.palette[a].main}),a&&"outlined"===o.variant&&(0,h.Z)({color:t.vars?t.vars.palette.Alert["".concat(a,"Color")]:n(t.palette[a].light,.6),border:"1px solid ".concat((t.vars||t).palette[a].light)},"& .".concat(C.icon),t.vars?{color:t.vars.palette.Alert["".concat(a,"IconColor")]}:{color:t.palette[a].main}),a&&"filled"===o.variant&&(0,g.Z)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(a,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(a,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[a].dark:t.palette[a].main,color:t.palette.getContrastText(t.palette[a].main)}))})),(0,Z.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),(0,Z.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),(0,Z.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),function(){var e=(0,a.I0)(),t=(0,r.useState)(""),o=(0,n.Z)(t,2),i=o[0],c=o[1],s=(0,r.useState)(""),d=(0,n.Z)(s,2),u=d[0],h=d[1],g=(0,a.v9)(l),x=function(e){var t=e.target;"name"===t.name?c(t.value):"number"===t.name&&h(t.value)};return(0,w.jsxs)("form",{className:p,onSubmit:function(t){t.preventDefault();var o=g.some((function(e){return e.name&&"string"===typeof e.name&&e.name.toLowerCase()===i.toLowerCase()})),n=g.some((function(e){return e.number&&"string"===typeof e.number&&e.number===u}));o?alert("".concat(i," is already in contacts.")):n?alert("".concat(u," is already in contacts.")):(e((0,v.uK)({name:i,number:u})),c(""),h(""))},children:[(0,w.jsx)("label",{htmlFor:"name",children:"Name"}),(0,w.jsx)("input",{className:f,type:"text",name:"name",value:i,required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:x}),(0,w.jsx)("label",{htmlFor:"phone",children:"Number"}),(0,w.jsx)("input",{className:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",required:!0,value:u,onChange:x}),(0,w.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})}),j=o(1634),R="filter_form__input__lPF1M",k="filter_container__8MH92",I=function(){var e=(0,a.v9)(c),t=(0,a.I0)();return(0,w.jsxs)("div",{className:k,children:[(0,w.jsx)("label",{children:"Find contacts by name"}),(0,w.jsx)("input",{className:R,type:"text",name:"filter",value:e,onChange:function(e){var o=e.target;t((0,j.h)(o.value))}})]})},L="ContactList_form__delete__iYOsF",N="ContactList_listItem__SptUx",F=function(){var e=(0,a.I0)(),t=(0,a.v9)(u);return(0,w.jsx)("ul",{children:t.map((function(t){return(0,w.jsxs)("li",{className:N,children:[t.name,": ",t.number,(0,w.jsx)("button",{className:L,type:"text",onClick:function(){return o=t.id,e((0,v.GK)(o));var o},children:"Delete"})]},t.id)}))})},P="Contacts_container__TJkHA",q=function(){var e=(0,a.I0)(),t=(0,a.v9)(s),o=(0,a.v9)(d);return(0,r.useEffect)((function(){e((0,v.yF)())}),[e]),(0,w.jsxs)("div",{className:P,children:[" ",(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(M,{}),(0,w.jsx)("h3",{children:"Contacts"}),(0,w.jsx)(I,{}),t&&!o&&(0,w.jsx)("b",{children:"Request in progress..."}),(0,w.jsx)(F,{})]})}},5527:function(e,t,o){o.d(t,{Z:function(){return x}});var n=o(3366),r=o(7462),a=o(2791),i=o(3733),l=o(4419),c=o(2065),s=o(4923),d=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},u=o(1046),v=o(5878),p=o(7225);function m(e){return(0,p.Z)("MuiPaper",e)}(0,v.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=o(184),h=["className","component","elevation","square","variant"],g=(0,s.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],!o.square&&t.rounded,"elevation"===o.variant&&t["elevation".concat(o.elevation)]]}})((function(e){var t,o=e.theme,n=e.ownerState;return(0,r.Z)({backgroundColor:(o.vars||o).palette.background.paper,color:(o.vars||o).palette.text.primary,transition:o.transitions.create("box-shadow")},!n.square&&{borderRadius:o.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat((o.vars||o).palette.divider)},"elevation"===n.variant&&(0,r.Z)({boxShadow:(o.vars||o).shadows[n.elevation]},!o.vars&&"dark"===o.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,c.Fq)("#fff",d(n.elevation)),", ").concat((0,c.Fq)("#fff",d(n.elevation)),")")},o.vars&&{backgroundImage:null==(t=o.vars.overlays)?void 0:t[n.elevation]}))})),x=a.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiPaper"}),a=o.className,c=o.component,s=void 0===c?"div":c,d=o.elevation,v=void 0===d?1:d,p=o.square,x=void 0!==p&&p,Z=o.variant,b=void 0===Z?"elevation":Z,S=(0,n.Z)(o,h),y=(0,r.Z)({},o,{component:s,elevation:v,square:x,variant:b}),C=function(e){var t=e.square,o=e.elevation,n=e.variant,r=e.classes,a={root:["root",n,!t&&"rounded","elevation"===n&&"elevation".concat(o)]};return(0,l.Z)(a,m,r)}(y);return(0,f.jsx)(g,(0,r.Z)({as:s,ownerState:y,className:(0,i.Z)(C.root,a),ref:t},S))}))},6189:function(e,t,o){o.d(t,{Z:function(){return Z}});var n=o(7462),r=o(2791),a=o(3366),i=o(3733),l=o(4419),c=o(4036),s=o(1046),d=o(4923),u=o(5878),v=o(7225);function p(e){return(0,v.Z)("MuiSvgIcon",e)}(0,u.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=o(184),f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,"inherit"!==o.color&&t["color".concat((0,c.Z)(o.color))],t["fontSize".concat((0,c.Z)(o.fontSize))]]}})((function(e){var t,o,n,r,a,i,l,c,s,d,u,v,p,m=e.theme,f=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:f.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(t=m.transitions)||null==(o=t.create)?void 0:o.call(t,"fill",{duration:null==(n=m.transitions)||null==(n=n.duration)?void 0:n.shorter}),fontSize:{inherit:"inherit",small:(null==(r=m.typography)||null==(a=r.pxToRem)?void 0:a.call(r,20))||"1.25rem",medium:(null==(i=m.typography)||null==(l=i.pxToRem)?void 0:l.call(i,24))||"1.5rem",large:(null==(c=m.typography)||null==(s=c.pxToRem)?void 0:s.call(c,35))||"2.1875rem"}[f.fontSize],color:null!=(d=null==(u=(m.vars||m).palette)||null==(u=u[f.color])?void 0:u.main)?d:{action:null==(v=(m.vars||m).palette)||null==(v=v.action)?void 0:v.active,disabled:null==(p=(m.vars||m).palette)||null==(p=p.action)?void 0:p.disabled,inherit:void 0}[f.color]}})),g=r.forwardRef((function(e,t){var o=(0,s.Z)({props:e,name:"MuiSvgIcon"}),d=o.children,u=o.className,v=o.color,g=void 0===v?"inherit":v,x=o.component,Z=void 0===x?"svg":x,b=o.fontSize,S=void 0===b?"medium":b,y=o.htmlColor,C=o.inheritViewBox,_=void 0!==C&&C,z=o.titleAccess,w=o.viewBox,A=void 0===w?"0 0 24 24":w,M=(0,a.Z)(o,f),j=r.isValidElement(d)&&"svg"===d.type,R=(0,n.Z)({},o,{color:g,component:Z,fontSize:S,instanceFontSize:e.fontSize,inheritViewBox:_,viewBox:A,hasSvgAsChild:j}),k={};_||(k.viewBox=A);var I=function(e){var t=e.color,o=e.fontSize,n=e.classes,r={root:["root","inherit"!==t&&"color".concat((0,c.Z)(t)),"fontSize".concat((0,c.Z)(o))]};return(0,l.Z)(r,p,n)}(R);return(0,m.jsxs)(h,(0,n.Z)({as:Z,className:(0,i.Z)(I.root,u),focusable:"false",color:y,"aria-hidden":!z||void 0,role:z?"img":void 0,ref:t},k,M,j&&d.props,{ownerState:R,children:[j?d.props.children:d,z?(0,m.jsx)("title",{children:z}):null]}))}));g.muiName="SvgIcon";var x=g;function Z(e,t){function o(o,r){return(0,m.jsx)(x,(0,n.Z)({"data-testid":"".concat(t,"Icon"),ref:r},o,{children:e}))}return o.muiName=x.muiName,r.memo(r.forwardRef(o))}}}]);
//# sourceMappingURL=768.3196fe77.chunk.js.map