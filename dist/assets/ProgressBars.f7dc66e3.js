import{d as g,u as $,r as h,a as t,b as i,e as B,w as a,f as s,k as _,t as p,h as y,g as e,o as C,i as b,j as w,F as k,_ as z}from"./index.e9346418.js";const T={class:"flex md4 xs12"},j={class:"flex md4 xs12"},I={class:"flex md4 xs12"},N=g({__name:"HorizontalBars",setup(u){const{t:v}=$(),o=h(0),l=h(66),d=h(100);return(V,x)=>{const c=t("va-card-title"),r=t("va-progress-bar"),f=t("va-card-content"),m=t("va-card");return i(),B(m,{class:"horizontal-bars"},{default:a(()=>[s(c,null,{default:a(()=>[_(p(y(v)("progressBars.horizontal")),1)]),_:1}),s(f,{class:"row"},{default:a(()=>[e("div",T,[s(r,{"model-value":o.value/3},null,8,["model-value"])]),e("div",j,[s(r,{"model-value":l.value},null,8,["model-value"])]),e("div",I,[s(r,{"model-value":d.value},null,8,["model-value"])])]),_:1})]),_:1})}}}),S={class:"d-flex justify-center"},D={class:"flex xs4 sm2 lg1"},F={class:"d-flex justify-center"},L=g({__name:"CircleBars",setup(u){const{t:v}=$(),o=h(0);C(l);function l(){setTimeout(()=>{o.value=100})}return(d,V)=>{const x=t("va-card-title"),c=t("va-progress-circle"),r=t("va-card-content"),f=t("va-card");return i(),B(f,{class:"circle-bars"},{default:a(()=>[s(x,null,{default:a(()=>[_(p(y(v)("progressBars.circle")),1)]),_:1}),s(r,{class:"row"},{default:a(()=>[(i(),b(k,null,w(10,m=>e("div",{key:m,class:"flex xs4 sm2 lg1"},[e("div",S,[e("div",null,[s(c,{"model-value":o.value*m/10},{default:a(()=>[_(p(o.value*m/10)+"%",1)]),_:2},1032,["model-value"])])])])),64)),e("div",D,[e("div",F,[e("div",null,[s(c,{indeterminate:""})])])])]),_:1})]),_:1})}}}),E={name:"BarsState",setup(){const{t:u}=$();return{t:u}},data(){return{value2:66,bufferValues:{value:0,buffer:0}}},mounted(){this.animateValue(),this.animateBufferValues()},methods:{animateValue(){setTimeout(()=>{this.value=100})},animateBufferValues(){const u=setInterval(()=>{this.bufferValues.value+=2+Math.floor(Math.random()*2),this.bufferValues.buffer+=2+Math.floor(Math.random()*4),this.bufferValues.value>=100&&clearInterval(u)},400)}}},H={class:"flex md4 xs12"},P=_("66%"),q={class:"flex md4 xs12"},A=_("Buffering "),G={class:"flex md4 xs12"},J=_("Loading");function K(u,v,o,l,d,V){const x=t("va-card-title"),c=t("va-progress-bar"),r=t("va-card-content"),f=t("va-card");return i(),B(f,{class:"bars-state"},{default:a(()=>[s(x,null,{default:a(()=>[_(p(l.t("progressBars.state")),1)]),_:1}),s(r,{class:"row"},{default:a(()=>[e("div",H,[s(c,{"model-value":d.value2},{default:a(()=>[P]),_:1},8,["model-value"])]),e("div",q,[s(c,{"model-value":d.bufferValues.value,buffer:d.bufferValues.buffer},{default:a(()=>[A]),_:1},8,["model-value","buffer"])]),e("div",G,[s(c,{indeterminate:""},{default:a(()=>[J]),_:1})])]),_:1})]),_:1})}var O=z(E,[["render",K]]);const Q={style:{"font-size":"0.625rem"}},R=g({__name:"ColorfulBars",setup(u){const{t:v}=$(),o=h(0),l=h(["danger","success","info","secondary","warning","textDark"]);C(d);function d(){setTimeout(()=>o.value=100)}return(V,x)=>{const c=t("va-card-title"),r=t("va-progress-bar"),f=t("va-progress-circle"),m=t("va-card-content"),M=t("va-card");return i(),B(M,{class:"colorful-bars progress-bar-widget"},{default:a(()=>[s(c,null,{default:a(()=>[_(p(y(v)("progressBars.colors")),1)]),_:1}),s(m,{class:"row"},{default:a(()=>[(i(),b(k,null,w(6,n=>e("div",{key:`pb-${n}`,class:"flex md4 xs12"},[s(r,{"model-value":o.value*n/6,color:l.value[n-1]},{default:a(()=>[_(p(l.value[n-1]),1)]),_:2},1032,["model-value","color"])])),64)),(i(),b(k,null,w(6,n=>e("div",{key:`pc-${n}`,class:"flex md2 xs6"},[s(f,{class:"ma-auto","model-value":o.value*n/6,color:l.value[n-1]},{default:a(()=>[e("span",Q,p(l.value[n-1]),1)]),_:2},1032,["model-value","color"])])),64))]),_:1})]),_:1})}}}),U={class:"progress-bars"},W={class:"row mb-4"},X={class:"flex xs12 mb-12"},Y={class:"row mb-4"},Z={class:"flex xs12"},ee={class:"row mb-4"},se={class:"flex xs12"},ae={class:"row"},te={class:"flex xs12"},le=g({__name:"ProgressBars",setup(u){return(v,o)=>(i(),b("div",U,[e("div",W,[e("div",X,[s(N)])]),e("div",Y,[e("div",Z,[s(O)])]),e("div",ee,[e("div",se,[s(L)])]),e("div",ae,[e("div",te,[s(R)])])]))}});export{le as default};
