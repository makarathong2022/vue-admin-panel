import{A as be,g as Pe,n as j,a as $,s as q,b,c as D,r as k,d as Le,e as z,f as we,h as ie,_ as re,G as A,i as Y,M as ne,L as Se,T as ue,R as Ce,j as ke,k as De,Z as Me,l as xe,m as je,o as w,p as Oe,B as _e,q as N,C as Te,t as le,u as Ve,v as Be}from"./Animated.1c1eeba3.js";import{c as ze,m as se,_ as Ne,d as Re,r as Ge,I as S,H as oe,J as Ae,o as Ee,K as Ue,G as Fe,L as Ze,b as He,i as Ye}from"./index.e9346418.js";var J,W,R,G,O={sphere:j,point:j,lineStart:Ke,lineEnd:j,polygonStart:j,polygonEnd:j};function Ke(){O.point=qe,O.lineEnd=$e}function $e(){O.point=O.lineEnd=j}function qe(t,a){t*=k,a*=k,W=t,R=b(a),G=D(a),O.point=Je}function Je(t,a){t*=k,a*=k;var e=b(a),i=D(a),o=Le(t-W),l=D(o),u=b(o),r=i*u,s=G*e-R*i*l,d=R*e+G*i*l;J.add($(q(r*r+s*s),d)),W=t,R=e,G=i}function ce(t){return J=new be,Pe(t,O),+J}var Q=[null,null],We={type:"LineString",coordinates:Q};function Qe(t,a){return Q[0]=t,Q[1]=a,ce(We)}function Xe(t,a){var e=t[0]*k,i=t[1]*k,o=a[0]*k,l=a[1]*k,u=D(i),r=b(i),s=D(l),d=b(l),p=u*D(e),v=u*b(e),P=s*D(o),h=s*b(o),f=2*we(q(ie(l-i)+u*s*ie(o-e))),m=b(f),y=f?function(L){var M=b(L*=f)/m,C=b(f-L)/m,x=C*p+M*P,_=C*v+M*h,T=C*r+M*d;return[$(_,x)*z,$(T,q(x*x+_*_))*z]}:function(){return[e*z,i*z]};return y.distance=f,y}var Ie=function(t){re(a,t);function a(){var e=t!==null&&t.apply(this,arguments)||this;return Object.defineProperty(e,"_projectionDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),e}return Object.defineProperty(a.prototype,"_beforeChanged",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this;if(t.prototype._beforeChanged.call(this),this._projectionDirty||this.isDirty("geometry")||this.isDirty("precision")){var i=this.get("geometry");if(i){var o=this.getPrivate("series");if(o){var l=o.chart;if(l){var u=l.get("projection"),r=null;u&&(r=u.clipAngle(),u.precision(this.get("precision",.5)));var s=l.getPrivate("geoPath");s&&(this._clear=!0,this.set("draw",function(d){u&&o.get("clipBack")===!1&&u.clipAngle(180),s.context(e._display),s(i),s.context(null),u&&u.clipAngle(r)}))}}}}}}),Object.defineProperty(a.prototype,"markDirtyProjection",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.markDirty(),this._projectionDirty=!0}}),Object.defineProperty(a.prototype,"_clearDirty",{enumerable:!1,configurable:!0,writable:!0,value:function(){t.prototype._clearDirty.call(this),this._projectionDirty=!1}}),Object.defineProperty(a.prototype,"positionToGeoPoint",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var i=this.get("geometry");if(i){var o=ce(i),l=0,u=void 0,r=0,s=0,d=void 0,p=void 0,v=i.coordinates;if(v){var P=void 0;i.type=="LineString"?P=[v]:i.type=="MultiLineString"&&(P=v);for(var h=0;h<P.length;h++){var f=P[h];if(f.length>1){for(var m=1;m<f.length;m++)if(d=f[m-1],p=f[m],r=l/o,u=Qe(d,p),l+=u,s=l/o,r<=e&&s>e){h=P.length;break}}else f.length==1&&(d=f[0],p=f[0],r=0,s=1)}if(d&&p){var y=(e-r)/(s-r),L=Xe(d,p)(y);return{longitude:L[0],latitude:L[1]}}}}return{longitude:0,latitude:0}}}),Object.defineProperty(a,"className",{enumerable:!0,configurable:!0,writable:!0,value:"MapLine"}),Object.defineProperty(a,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:A.classNames.concat([a.className])}),a}(A),et=function(t){re(a,t);function a(){var e=t!==null&&t.apply(this,arguments)||this;return Object.defineProperty(e,"mapLines",{enumerable:!0,configurable:!0,writable:!0,value:new Se(ue.new({}),function(){return Ie._new(e._root,{},[e.mapLines.template])})}),Object.defineProperty(e,"_types",{enumerable:!0,configurable:!0,writable:!0,value:["LineString","MultiLineString"]}),e}return Object.defineProperty(a.prototype,"makeMapLine",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var i=this.children.push(this.mapLines.make());return i._setDataItem(e),this.mapLines.push(i),i}}),Object.defineProperty(a.prototype,"markDirtyProjection",{enumerable:!1,configurable:!0,writable:!0,value:function(){Y(this.dataItems,function(e){var i=e.get("mapLine");i&&i.markDirtyProjection()})}}),Object.defineProperty(a.prototype,"_prepareChildren",{enumerable:!1,configurable:!0,writable:!0,value:function(){t.prototype._prepareChildren.call(this),this.isDirty("stroke")&&this.mapLines.template.set("stroke",this.get("stroke"))}}),Object.defineProperty(a.prototype,"processDataItem",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var i=this;t.prototype.processDataItem.call(this,e);var o=e.get("mapLine");o||(o=this.makeMapLine(e)),this._handlePointsToConnect(e),e.on("pointsToConnect",function(){i._handlePointsToConnect(e)}),e.set("mapLine",o),o.setPrivate("series",this)}}),Object.defineProperty(a.prototype,"_handlePointsToConnect",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var i=this,o=e.get("pointsToConnect");o&&(Y(o,function(l){l.on("geometry",function(){i.markDirtyValues(e)}),l.on("longitude",function(){i.markDirtyValues(e)}),l.on("latitude",function(){i.markDirtyValues(e)})}),this.markDirtyValues(e))}}),Object.defineProperty(a.prototype,"markDirtyValues",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(t.prototype.markDirtyValues.call(this),e){var i=e.get("mapLine");if(i){var o=e.get("pointsToConnect");if(o){var l=[];Y(o,function(r){var s=r.get("longitude"),d=r.get("latitude");if(s!=null&&d!=null)l.push([s,d]);else{var p=r.get("geometry");if(p){var v=p.coordinates;v&&l.push([v[0],v[1]])}}});var u={type:"LineString",coordinates:l};e.setRaw("geometry",u),i.set("geometry",u)}else i.set("geometry",e.get("geometry"))}}}}),Object.defineProperty(a.prototype,"disposeDataItem",{enumerable:!1,configurable:!0,writable:!0,value:function(e){t.prototype.disposeDataItem.call(this,e);var i=e.get("mapLine");i&&(this.mapLines.removeValue(i),i.dispose())}}),Object.defineProperty(a,"className",{enumerable:!0,configurable:!0,writable:!0,value:"MapLineSeries"}),Object.defineProperty(a,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ne.classNames.concat([a.className])}),a}(ne);const c="M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",tt="M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z",X={id:"london",color:"info",svgPath:c,title:"London",country:"United Kingdom",latitude:51.5002,longitude:-.1262,flights:[{latitude:50.4422,longitude:30.5367},{latitude:46.948,longitude:7.4481},{latitude:59.3328,longitude:18.0645},{latitude:40.4167,longitude:-3.7033},{latitude:46.0514,longitude:14.506},{latitude:48.2116,longitude:17.1547},{latitude:44.8048,longitude:20.4781},{latitude:55.7558,longitude:37.6176},{latitude:38.7072,longitude:-9.1355},{latitude:54.6896,longitude:25.2799},{latitude:64.1353,longitude:-21.8952},{latitude:40.43,longitude:-74}]},at={id:"vilnius",color:"info",svgPath:c,title:"Vilnius",country:"Lithuania",latitude:54.6896,longitude:25.2799,flights:[{latitude:50.8371,longitude:4.3676},{latitude:59.9138,longitude:10.7387},{latitude:40.4167,longitude:-3.7033},{latitude:50.0878,longitude:14.4205},{latitude:48.2116,longitude:17.1547},{latitude:44.8048,longitude:20.4781},{latitude:55.7558,longitude:37.6176},{latitude:37.9792,longitude:23.7166},{latitude:51.5002,longitude:-.1262},{latitude:53.3441,longitude:-6.2675}]},it=[X,at,{svgPath:c,color:"info",title:"Brussels",country:"Belgium",latitude:50.8371,longitude:4.3676},{svgPath:c,color:"info",title:"Prague",country:"Czech Republic",latitude:50.0878,longitude:14.4205},{svgPath:c,color:"info",title:"Athens",country:"Greece",latitude:37.9792,longitude:23.7166},{svgPath:c,color:"info",title:"Reykjavik",country:"Iceland",latitude:64.1353,longitude:-21.8952},{svgPath:c,color:"info",title:"Dublin",country:"Ireland",latitude:53.3441,longitude:-6.2675},{svgPath:c,color:"info",title:"Oslo",country:"Norway",latitude:59.9138,longitude:10.7387},{svgPath:c,color:"info",title:"Lisbon",country:"Portugal",latitude:38.7072,longitude:-9.1355},{svgPath:c,color:"info",title:"Moscow",country:"Russia",latitude:55.7558,longitude:37.6176},{svgPath:c,color:"info",title:"Belgrade",country:"Serbia",latitude:44.8048,longitude:20.4781},{svgPath:c,color:"info",title:"Bratislava",country:"Slovakia",latitude:48.2116,longitude:17.1547},{svgPath:c,color:"info",title:"Ljubljana",country:"Slovenia",latitude:46.0514,longitude:14.506},{svgPath:c,color:"info",title:"Madrid",country:"Spain",latitude:40.4167,longitude:-3.7033},{svgPath:c,color:"info",title:"Stockholm",country:"Sweden",latitude:59.3328,longitude:18.0645},{svgPath:c,color:"info",title:"Bern",country:"Switzerland",latitude:46.948,longitude:7.4481},{svgPath:c,color:"info",title:"Kiev",country:"Ukraine",latitude:50.4422,longitude:30.5367},{svgPath:c,color:"info",title:"Paris",country:"France",latitude:48.8567,longitude:2.351},{svgPath:c,color:"info",title:"New York",country:"United States of America",latitude:40.43,longitude:-74}],dt={cities:it,mainCity:X.title,homeCity:X.title},nt=t=>{const{getColor:a}=se();return ze(()=>t.value.map(e=>({...e,color:a(e.color)})))},lt=t=>{if(!t||!t.flights||!t.flights.length)return;const a=[...t.flights.map(({latitude:i})=>i),t.latitude],e=[...t.flights.map(({longitude:i})=>i),t.longitude];return{bottom:Math.min(...a),left:Math.min(...e),right:Math.max(...e),top:Math.max(...a)}},ot=t=>{if(!(!t||!t.flights||!t.flights.length))return t.flights.map(a=>({geometry:{type:"LineString",coordinates:[[t.longitude,t.latitude],[a.longitude,a.latitude]]}}))},K=(t,a)=>t.toLowerCase()===a.toLowerCase();const rt=Re({__name:"LineMap",props:{mapData:null,homeCity:{default:"New York"},modelValue:{default:"New York"}},emits:["update:modelValue"],setup(t,{emit:a}){const e=t,i=n=>n?`Flights from ${n}`:"",o=n=>`Show flights from ${n}`,{colors:l}=se(),u=Ge(),r=S(),s=S(),d=S(),p=S(),v=S(),P=S(),h=S(),f=S(),m=S(),y=oe({get(){return e.modelValue},set(n){a("update:modelValue",n)}}),L=nt(Ae(e,"mapData")),M=oe(()=>{const n=C();return ot(n)}),C=()=>L.value.find(({title:n})=>K(n,y.value)),x=()=>{const n=C(),g=lt(n);g&&s.value.zoomToGeoBounds(g)},_=()=>{var te;const n=Ce.new(u.value);n.setThemes([ke.new(n)]);const g=n.container.children.push(De.new(n,{minZoomLevel:1,maxZoomLevel:10})),V=g.set("zoomControl",Me.new(n,{})),E=g.series.push(xe.new(n,{geoJSON:je,exclude:["AQ"]}));E.mapPolygons.template.setAll({fill:w(l.secondary),fillOpacity:.4,strokeWidth:.5}),E.events.on("datavalidated",x);const U=g.series.push(Oe.new(n,{latitudeField:"latitude",longitudeField:"longitude"})),I=ue.new({});I.events.on("click",B=>{y.value=B.target._dataItem.dataContext.title}),U.bullets.push((B,ut,ye)=>{const H=ye.dataContext,ae=K(H.title,y.value);return _e.new(B,{sprite:A.new(B,{svgPath:H.svgPath,x:N(50),y:N(50),centerX:N(50),centerY:N(50),fill:w(ae?l.primary:H.color),scale:ae?1.5:1,tooltipText:"{title}"},I)})});const F=g.series.push(et.new(n,{}));F.mapLines.template.setAll({stroke:w(l.primary),strokeWidth:2,strokeOpacity:.5}),U.data.setAll(L.value),F.data.setAll(M.value);const ee=g.children.push(Te.new(n,{x:15,y:15,layout:n.horizontalLayout})),he=ee.children.push(A.new(n,{svgPath:tt,fill:w(l.info)})),me=ee.children.push(le.new(n,{text:i((te=C())==null?void 0:te.title),fill:w(l.info),fontSize:22,lineHeight:Ve})),Z=g.children.push(Be.new(n,{x:15,y:45,label:le.new(n,{text:o(e.homeCity),paddingTop:0,marginRight:0,paddingBottom:0,marginLeft:0}),visible:!1}));Z.events.on("click",()=>{y.value=e.homeCity,Z.hide()}),r.value=n,s.value=g,P.value=V,p.value=U,v.value=F,d.value=E,f.value=he,h.value=me,m.value=Z},T=()=>{p.value.data.setAll(L.value)},de=()=>{var n;v.value.data.setAll((n=M.value)!=null?n:[])},fe=()=>{var n,g,V;h.value.set("text",i((n=C())==null?void 0:n.title)),(V=(g=m.value)[K(e.homeCity,y.value)?"hide":"show"])==null||V.call(g)},ge=()=>{r.value&&(d.value.mapPolygons.template.setAll({fill:w(l.secondary)}),v.value.mapLines.template.setAll({stroke:w(l.primary)}),h.value.set("fill",w(l.info)),f.value.set("fill",w(l.info)),T())},pe=()=>{r.value&&(T(),de(),fe(),x())},ve=()=>{r.value&&r.value.dispose()};return Ee(_),Ue(pe),Fe(l,ge),Ze(ve),(n,g)=>(He(),Ye("div",{ref_key:"mapRef",ref:u,class:"line-map"},null,512))}});var ft=Ne(rt,[["__scopeId","data-v-1f320e65"]]);export{ft as L,K as c,dt as l};