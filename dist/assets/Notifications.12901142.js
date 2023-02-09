import{_ as B,d as T,m as S,H as q,b as U,i as $,g as e,W as g,p as x,h as a,u as z,r as V,a as p,f as t,w as l,k as c,t as u}from"./index.e9346418.js";import{u as D}from"./useToast.80ad58db.js";const I={class:"toast-position-picker mr-4"},L={class:"position-boxes-row d-flex"},A={class:"position-boxes-row d-flex"},E=T({__name:"ToastPositionPicker",props:{modelValue:{default:"bottom-center"}},emits:["update:modelValue"],setup(k,{emit:s}){const P=k,{colors:n}=S(),r=q(()=>({backgroundColor:n.primary}));function m(_){s("update:modelValue",_)}function v(_){return P.modelValue===_}return(_,d)=>(U(),$("div",I,[e("div",L,[e("div",{class:g(["position-box",{selected:v("top-left")}]),style:x(a(r)),onClick:d[0]||(d[0]=o=>m("top-left"))},null,6),e("div",{class:g(["position-box",{selected:v("top-right")}]),style:x(a(r)),onClick:d[1]||(d[1]=o=>m("top-right"))},null,6)]),e("div",A,[e("div",{class:g(["position-box",{selected:v("bottom-left")}]),style:x(a(r)),onClick:d[2]||(d[2]=o=>m("bottom-left"))},null,6),e("div",{class:g(["position-box",{selected:v("bottom-right")}]),style:x(a(r)),onClick:d[3]||(d[3]=o=>m("bottom-right"))},null,6)])]))}});var H=B(E,[["__scopeId","data-v-09ab1d42"]]);const W={class:"notifications"},j={class:"row"},F={class:"flex xs12"},G={class:"mb-3"},J={class:"mb-3"},K={class:"mb-3"},O={class:"mb-3"},Q={class:"mb-3"},R={class:"mb-3"},X={class:"mb-3"},Y={class:"row"},Z={class:"flex xs12"},oo={class:"flex xs12 md6"},to={class:"flex xs12 md6"},eo={class:"row"},ao={class:"flex xs12"},so={class:"flex xs12"},no=T({__name:"Notifications",setup(k){const{t:s}=z(),{init:P}=D(),n=V(!0),r=V("This toast is awesome!"),m=V(2500),v=V("bottom-right");function _(){P({message:r.value,position:v.value,duration:Number(m.value)})}return(d,o)=>{const w=p("va-card-title"),M=p("va-checkbox"),f=p("va-badge"),b=p("va-alert"),y=p("va-card-content"),h=p("va-card"),C=p("va-input"),N=p("va-button");return U(),$("div",W,[e("div",j,[e("div",F,[t(h,null,{default:l(()=>[t(w,null,{default:l(()=>[c(u(a(s)("notificationsPage.notifications.title")),1)]),_:1}),t(y,null,{default:l(()=>[e("div",G,[t(M,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=i=>n.value=i),label:"Toggle visibility"},null,8,["modelValue"])]),e("div",J,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=i=>n.value=i),closeable:""},{icon:l(()=>[t(f,{text:a(s)("notificationsPage.notifications.success")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.successMessage")),1)]),_:1},8,["modelValue"])]),e("div",K,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=i=>n.value=i),color:"info",closeable:""},{icon:l(()=>[t(f,{color:"info",text:a(s)("notificationsPage.notifications.info")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.infoMessage")),1)]),_:1},8,["modelValue"])]),e("div",O,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=i=>n.value=i),color:"warning",closeable:""},{icon:l(()=>[t(f,{color:"warning",text:a(s)("notificationsPage.notifications.warning")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.warningMessage")),1)]),_:1},8,["modelValue"])]),e("div",Q,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[4]||(o[4]=i=>n.value=i),color:"danger",closeable:""},{icon:l(()=>[t(f,{color:"danger",text:a(s)("notificationsPage.notifications.danger")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.dangerMessage")),1)]),_:1},8,["modelValue"])]),e("div",R,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[5]||(o[5]=i=>n.value=i),color:"gray",closeable:""},{icon:l(()=>[t(f,{color:"gray",text:a(s)("notificationsPage.notifications.gray")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.warningMessage")),1)]),_:1},8,["modelValue"])]),e("div",X,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[6]||(o[6]=i=>n.value=i),color:"dark",closeable:""},{icon:l(()=>[t(f,{color:"dark",text:a(s)("notificationsPage.notifications.dark")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.dangerMessage")),1)]),_:1},8,["modelValue"])])]),_:1})]),_:1})])]),e("div",Y,[e("div",Z,[t(h,null,{default:l(()=>[t(w,null,{default:l(()=>[c(u(a(s)("notificationsPage.toasts.title")),1)]),_:1}),t(y,{class:"row"},{default:l(()=>[e("div",oo,[t(C,{modelValue:r.value,"onUpdate:modelValue":o[7]||(o[7]=i=>r.value=i),label:a(s)("notificationsPage.toasts.textLabel"),class:"control-input mb-3",required:""},null,8,["modelValue","label"]),t(C,{modelValue:m.value,"onUpdate:modelValue":o[8]||(o[8]=i=>m.value=i),type:"number",label:a(s)("notificationsPage.toasts.durationLabel"),class:"control-input mb-3",required:""},null,8,["modelValue","label"])]),e("div",to,[e("div",eo,[e("div",ao,[t(H,{modelValue:v.value,"onUpdate:modelValue":o[9]||(o[9]=i=>v.value=i)},null,8,["modelValue"])])])]),e("div",so,[t(N,{class:"ma-0",color:"primary",onClick:_},{default:l(()=>[c(u(a(s)("notificationsPage.toasts.launchToast")),1)]),_:1})])]),_:1})]),_:1})])])])}}});export{no as default};