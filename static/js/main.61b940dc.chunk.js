(this["webpackJsonprusagro-test"]=this["webpackJsonprusagro-test"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var i=a(1),s=a(8),c=a.n(s),o=(a(13),a(2)),n=(a(14),a(15),a.p+"static/media/bell.a02481de.svg"),l=a.p+"static/media/bell_blue.81130b3f.svg",d=a(0);var r=function(t){var e=t.shown,a=t.handleShown,s=t.counter,c=t.siteMode,r=Object(i.useState)(!1),u=Object(o.a)(r,2),j=u[0],p=u[1],x=function(){p(!j)},m=s>99?"99":s,f="person"===c?"Notification Notification_type_person":"Notification Notification_type_company";return Object(d.jsxs)("div",{className:j||e?f:"Notification",onClick:a,onPointerOver:x,onPointerOut:x,children:[Object(d.jsx)("img",{className:"Notification__icon",src:"person"===c?n:l,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435"}),s?Object(d.jsx)("div",{className:"Notification__counter-wrap",children:Object(d.jsx)("span",{className:"Notification__counter",children:m})}):null]})},u=a(3),j=(a(17),a.p+"static/media/bell_empty.81bfbbca.svg"),p=a.p+"static/media/close.5238edd6.svg",x=a(7);a(18),a(19);var m=function(t){var e=t.text,a=t.handler,i=t.coords,s=i?{top:"".concat(i.y-47,"px"),left:"".concat(i.x-17,"px")}:{};return Object(d.jsx)("button",{className:i?"NotificationButton NotificationButton_type_read":"NotificationButton NotificationButton_type_more",style:s,onClick:function(t){return a(t)},children:e})};var f=function(t){var e=t.data,a=t.setData,s=Object(i.useState)(null),c=Object(o.a)(s,2),n=c[0],l=c[1],r=Object(i.useState)(""),j=Object(o.a)(r,2),p=j[0],f=j[1],b=Object(i.useState)(10),N=Object(o.a)(b,2),_=N[0],O=N[1],h=e.slice(0,_),g=e.length===h.length,y=function(){setTimeout(l,700,null)},v=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,s=e.find((function(t){return i===t.id})),c=e.findIndex((function(t){return i===t.id})),o=Object(u.a)(Object(u.a)({},s),{},{closed:!0});a([].concat(Object(x.a)(e.slice(0,c)),[o],Object(x.a)(e.slice(c+1))))},D=h.map((function(t){return Object(d.jsx)("li",{className:"Notifications__item",onClick:function(e){return v(e,t.id)},children:Object(d.jsxs)("a",{className:"Notifications__item-link",href:"#s",children:[Object(d.jsxs)("header",{className:"Notifications__item-header",children:[!t.closed&&Object(d.jsx)("div",{className:"Notifications__item-indicator-wrap",children:Object(d.jsx)("div",{className:"Notifications__item-indicator",onPointerOver:function(e){return function(t,e){l(t.target.getBoundingClientRect()),f(e)}(e,t.id)},onPointerOut:y})}),Object(d.jsxs)("h3",{className:"Notifications__item-title",children:[Object(d.jsx)("span",{className:"Notifications__item-order",children:t.title.order}),t.title.text]})]}),Object(d.jsxs)("p",{className:"Notifications__item-text",children:[t.message.text,t.message.payDate&&Object(d.jsx)("span",{className:"Notifications__item-paydate",children:t.message.payDate})]}),Object(d.jsx)("p",{className:"Notifications__item-date",children:t.date})]})},t.id)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("ul",{className:"Notifications",children:[D,n&&Object(d.jsx)(m,{text:"\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043e",handler:v,coords:n})]}),Object(d.jsx)("div",{className:"Notifications__button-wrap",children:!g&&Object(d.jsx)(m,{text:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451",handler:function(t){O(_+10)}})})]})};var b=function(t){var e=t.data,a=t.setData,i=t.handleShown;return Object(d.jsxs)("div",{className:e?"NotificationPopup":"NotificationPopup NotificationPopup_empty",children:[Object(d.jsxs)("header",{className:"NotificationPopup__header",children:[Object(d.jsxs)("div",{className:"NotificationPopup__header-content",children:[Object(d.jsx)("h2",{className:"NotificationPopup__title",children:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"}),e&&Object(d.jsx)("button",{className:"NotificationPopup__button",onClick:function(){var t=e.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{closed:!0})}));a(t)},children:"\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0432\u0441\u0435"})]}),Object(d.jsx)("img",{className:"NotificationPopup__closeIcon",src:p,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:i})]}),Object(d.jsx)("div",{className:"NotificationPopup__content",children:e?Object(d.jsx)(f,{data:e,setData:a}):Object(d.jsxs)("div",{className:"NotificationPopup__empty-plug",children:[Object(d.jsx)("img",{className:"NotificationPopup__empty-plug-icon",src:j,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u043a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430"}),Object(d.jsx)("p",{className:"NotificationPopup__text",children:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0443\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043f\u043e \u0432\u0430\u0448\u0438\u043c \u0437\u0430\u043a\u0430\u0437\u0430\u043c, \u0430\u043a\u0446\u0438\u044f\u043c."})]})}),Object(d.jsx)("div",{className:"NotificationPopup__overlay"})]})},N="person",_=[{id:1,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 1",text:"\u043e\u043f\u043b\u0430\u0447\u0435\u043d \u0438 \u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438"},message:{text:"\u0417\u0430\u043a\u0430\u0437 \u0433\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435. \u041c\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u043c, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",payDate:"21 \u043c\u0430\u0440\u0442\u0430"},date:"1 \u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434"},{id:2,closed:!0,title:{order:"\u0417\u0430\u043a\u0430\u0437 2",text:"\u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u043f\u043b\u0430\u0442\u044b 20 \u043c\u0430\u0440\u0442\u0430 - 18:00"},message:{text:"\u041f\u0435\u0440\u0435\u0434 \u043e\u043f\u043b\u0430\u0442\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0432\u0430\u0440\u0430, \u043e\u043d\u043e \u043c\u043e\u0433\u043b\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c\u0441\u044f \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430\u043c\u0438.",payDate:null},date:"3 \u0447\u0430\u0441\u0430 \u043d\u0430\u0437\u0430\u0434"},{id:3,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 3",text:"\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d"},message:{text:"\u041e\u0436\u0438\u0434\u0430\u0439\u0442\u0435, \u043f\u043e\u043a\u0430 \u0432\u0441\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u044f\u0442 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u044c \u0438 \u0443\u0442\u043e\u0447\u043d\u044f\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0432\u0430\u0440\u0430.",payDate:null},date:"1 \u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434"},{id:4,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 4",text:"\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d"},message:{text:"\u041e\u0436\u0438\u0434\u0430\u0439\u0442\u0435, \u043f\u043e\u043a\u0430 \u0432\u0441\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u044f\u0442 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u044c \u0438 \u0443\u0442\u043e\u0447\u043d\u044f\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0432\u0430\u0440\u0430.",payDate:null},date:"1 \u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434"},{id:5,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 5",text:"\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d"},message:{text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0431\u044b\u043b\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044e.",payDate:null},date:"20 \u0444\u0435\u0432\u0440\u0430\u043b\u044f"},{id:6,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 6",text:"\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d"},message:{text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0431\u044b\u043b\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044e.",payDate:null},date:"21 \u0444\u0435\u0432\u0440\u0430\u043b\u044f"},{id:7,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 7",text:"\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d"},message:{text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0431\u044b\u043b\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044e.",payDate:null},date:"22 \u0444\u0435\u0432\u0440\u0430\u043b\u044f"},{id:8,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 8",text:"\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d"},message:{text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0431\u044b\u043b\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044e.",payDate:null},date:"28 \u0444\u0435\u0432\u0440\u0430\u043b\u044f"},{id:9,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 9",text:"\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d"},message:{text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0431\u044b\u043b\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044e.",payDate:null},date:"23 \u0444\u0435\u0432\u0440\u0430\u043b\u044f"},{id:10,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 10",text:"\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d"},message:{text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0431\u044b\u043b\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044e.",payDate:null},date:"01 \u043c\u0430\u044f"},{id:11,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 11",text:"\u043d\u0435 \u0431\u044b\u043b \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d"},message:{text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0438\u0441\u0447\u0435\u0437\u043b\u0438.",payDate:null},date:"31 \u043c\u0430\u0440\u0442\u043e\u0431\u0440\u044f"},{id:12,closed:!0,title:{order:"\u0417\u0430\u043a\u0430\u0437 12",text:"\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d"},message:{text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0431\u044b\u043b\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044e.",payDate:null},date:"09 \u043c\u0430\u044f"},{id:13,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 13",text:"\u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u043f\u043b\u0430\u0442\u044b"},message:{text:"\u0417\u0430\u043a\u0430\u0437 \u0433\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435. \u041c\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u043c, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",payDate:"12 \u043c\u0430\u044f"},date:"09 \u043c\u0430\u044f"},{id:14,closed:!0,title:{order:"\u0417\u0430\u043a\u0430\u0437 14",text:"\u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u043f\u043b\u0430\u0442\u044b"},message:{text:"\u0417\u0430\u043a\u0430\u0437 \u0433\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435. \u041c\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u043c, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",payDate:"13 \u043c\u0430\u044f"},date:"13 \u043c\u0430\u044f"},{id:15,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 15",text:"\u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u043f\u043b\u0430\u0442\u044b"},message:{text:"\u0417\u0430\u043a\u0430\u0437 \u0433\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435. \u041c\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u043c, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",payDate:"12 \u043c\u0430\u044f"},date:"14 \u043c\u0430\u044f"},{id:16,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 16",text:"\u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u043f\u043b\u0430\u0442\u044b"},message:{text:"\u0417\u0430\u043a\u0430\u0437 \u0433\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435. \u041c\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u043c, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",payDate:"12 \u043c\u0430\u044f"},date:"14 \u043c\u0430\u044f"},{id:17,closed:!0,title:{order:"\u0417\u0430\u043a\u0430\u0437 17",text:"\u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u043f\u043b\u0430\u0442\u044b"},message:{text:"\u0417\u0430\u043a\u0430\u0437 \u0433\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435. \u041c\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u043c, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",payDate:"12 \u043c\u0430\u044f"},date:"14 \u043c\u0430\u044f"},{id:18,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 18",text:"\u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u043f\u043b\u0430\u0442\u044b"},message:{text:"\u0417\u0430\u043a\u0430\u0437 \u0433\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435. \u041c\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u043c, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",payDate:"12 \u043c\u0430\u044f"},date:"14 \u043c\u0430\u044f"},{id:19,closed:!0,title:{order:"\u0417\u0430\u043a\u0430\u0437 19",text:"\u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u043f\u043b\u0430\u0442\u044b"},message:{text:"\u0417\u0430\u043a\u0430\u0437 \u0433\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435. \u041c\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u043c, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",payDate:"12 \u043c\u0430\u044f"},date:"14 \u043c\u0430\u044f"},{id:20,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 20",text:"\u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u043f\u043b\u0430\u0442\u044b"},message:{text:"\u0417\u0430\u043a\u0430\u0437 \u0433\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435. \u041c\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u043c, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",payDate:"12 \u043c\u0430\u044f"},date:"14 \u043c\u0430\u044f"},{id:21,closed:!1,title:{order:"\u0417\u0430\u043a\u0430\u0437 21",text:"\u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u043f\u043b\u0430\u0442\u044b"},message:{text:"\u0417\u0430\u043a\u0430\u0437 \u0433\u043e\u0442\u043e\u0432 \u043a \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435. \u041c\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u043c, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",payDate:"12 \u043c\u0430\u044f"},date:"14 \u043c\u0430\u044f"}];var O=function(){var t=Object(i.useState)(!1),e=Object(o.a)(t,2),a=e[0],s=e[1],c=Object(i.useState)(_),n=Object(o.a)(c,2),l=n[0],u=n[1],j=l.filter((function(t){return!1===t.closed})),p=function(){s(!a)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(r,{shown:a,handleShown:p,counter:j.length,siteMode:N}),a&&Object(d.jsx)(b,{data:l,setData:u,handleShown:p}),a&&Object(d.jsx)("div",{className:"App__underlay"})]})};c.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.61b940dc.chunk.js.map