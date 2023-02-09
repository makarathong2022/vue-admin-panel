import{d as b,u as k,r as v,a as i,b as x,i as m,g as o,F as T,j as I,f as t,w as e,k as n,t as s,h as a}from"./index.e9346418.js";const B={class:"cards"},N={class:"cards-container row d-flex wrap align--start"},S={class:"flex xs12 sm6 md6 xl6"},V={class:"flex xs12 sm6 md6 xl6"},j={class:"flex xs12 sm6 md6 xl6"},z={class:"flex xs12 sm6 md6 xl6"},F={class:"flex xs12 sm6 md3 xl3 lg3 xl3"},H={class:"flex xs12 sm6 md3 xl3 lg3 xl3"},M={class:"flex xs12 sm6 md3 xl3 lg3 xl3"},O={class:"flex xs12 sm6 md3 xl3 lg3 xl3"},D={class:"flex xs12 sm6 md3 xl3 lg3 xl3"},E={class:"flex xs12 sm6 md3 xl3 lg3 xl3"},$={class:"flex xs12 sm6 md3 xl3 lg3 xl3"},q={class:"flex xs12 sm6 md3 xl3 lg3 xl3"},K=b({__name:"Cards",setup(A){const{t:l}=k(),p=v(1),f=v(!1);function w(){f.value=!0,setTimeout(()=>{f.value=!1,++p.value},1e3)}return(G,g)=>{const _=i("va-card-title"),c=i("va-card-content"),d=i("va-card"),y=i("va-spacer"),r=i("va-button"),L=i("va-icon"),u=i("va-image"),C=i("va-inner-loading");return x(),m("div",B,[o("div",N,[(x(!0),m(T,null,I(p.value,h=>(x(),m(T,{key:h+"-0"},[o("div",S,[t(d,null,{default:e(()=>[t(_,null,{default:e(()=>[n(s(a(l)("cards.title.default")),1)]),_:1}),t(c,null,{default:e(()=>[n(s(a(l)("cards.contentTextLong")),1)]),_:1})]),_:1})]),o("div",V,[t(d,null,{default:e(()=>[t(_,null,{default:e(()=>[n(s(a(l)("cards.title.withControls"))+" ",1),t(y),t(r,{class:"mr-1",size:"small",icon:"refresh"}),t(r,{size:"small",icon:"gear"})]),_:1}),t(c,null,{default:e(()=>[n(s(a(l)("cards.contentTextLong")),1)]),_:1})]),_:1})]),o("div",j,[t(d,null,{default:e(()=>[t(_,null,{default:e(()=>[t(L,{class:"mr-3",name:"cogs"}),n(" "+s(a(l)("cards.title.customHeader")),1)]),_:1}),t(c,null,{default:e(()=>[n(s(a(l)("cards.contentTextLong")),1)]),_:1})]),_:1})]),o("div",z,[t(d,null,{default:e(()=>[t(c,null,{default:e(()=>[o("p",null,s(a(l)("cards.title.withoutHeader")),1),n(" "+s(a(l)("cards.contentTextLong")),1)]),_:1})]),_:1})]),o("div",F,[t(d,null,{default:e(()=>[t(u,{src:"https://picsum.photos/300/200/?image=1043",style:{height:"200px"}}),t(_,null,{default:e(()=>[n(s(a(l)("cards.title.withImage")),1)]),_:1}),t(c,null,{default:e(()=>[n(s(a(l)("cards.contentText")),1)]),_:1})]),_:1})]),o("div",H,[t(d,null,{default:e(()=>[t(u,{src:"https://picsum.photos/300/200/?image=898",style:{height:"200px"}},{default:e(()=>[t(_,{"text-color":"#fff"},{default:e(()=>[n(s(a(l)("cards.title.withTitleOnImage")),1)]),_:1})]),_:1}),t(c,null,{default:e(()=>[n(s(a(l)("cards.contentText")),1)]),_:1})]),_:1})]),o("div",M,[t(d,null,{default:e(()=>[t(u,{src:"https://picsum.photos/300/200/?image=898",style:{height:"200px"}},{default:e(()=>[t(r,{class:"ma-0"},{default:e(()=>[n(s(a(l)("cards.button.readMore")),1)]),_:1})]),_:1})]),_:1})]),o("div",O,[t(d,{stripe:"","stripe-color":"danger"},{default:e(()=>[t(_,null,{default:e(()=>[n(s(a(l)("cards.title.withStripe")),1)]),_:1}),t(c,null,{default:e(()=>[n(s(a(l)("cards.contentTextLong")),1)]),_:1})]),_:1})]),o("div",D,[t(d,{color:"success"},{default:e(()=>[t(c,null,{default:e(()=>[n(s(a(l)("cards.contentTextLong")),1)]),_:1})]),_:1})]),o("div",E,[t(d,{color:"danger"},{default:e(()=>[t(c,null,{default:e(()=>[n(s(a(l)("cards.contentTextLong")),1)]),_:1})]),_:1})]),o("div",$,[t(d,{stripe:"","stripe-color":"info"},{default:e(()=>[t(_,null,{default:e(()=>[n(s(a(l)("cards.title.withStripe")),1)]),_:1}),t(c,null,{default:e(()=>[n(s(a(l)("cards.contentTextLong")),1)]),_:1})]),_:1})]),o("div",q,[t(d,null,{default:e(()=>[t(u,{src:"https://picsum.photos/300/200/?image=1067",style:{height:"200px"}},{default:e(()=>[t(_,{"text-color":"#fff"},{default:e(()=>[n(s(a(l)("cards.title.withTitleOnImage")),1)]),_:1})]),_:1}),t(c,null,{default:e(()=>[n(s(a(l)("cards.contentText")),1)]),_:1})]),_:1})])],64))),128))]),t(C,{class:"justify-center py-3",style:{width:"100%"},loading:f.value},{default:e(()=>[t(r,{onClick:g[0]||(g[0]=h=>w())},{default:e(()=>[n(s(a(l)("cards.button.showMore")),1)]),_:1})]),_:1},8,["loading"])])}}});export{K as default};