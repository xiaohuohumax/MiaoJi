import{an as Nt,ao as Tt,Y as ot,B as It,m as Dt,n as $t,a1 as Vt,d as W,v as me,a as $,ap as Et,h as C,aq as At,p as g,c as at,b as lt,f as Bt,i as d,g as L,q as f,t as Mt,A as Lt,ar as jt,w as ve,x as st,D as Ot,Z as Xt,_ as Ft,T as Yt,E as Ye,as as Ht,at as Kt,ah as Ut,af as N,a6 as O,a9 as te,a8 as j,a7 as ne,ak as De,F as $e,ac as Zt,a4 as D,au as He,av as Wt,ai as qt,a5 as Gt,ad as Jt,ag as ze,al as Qt,am as en,ae as tn,aw as nn}from"./index-e356217c.js";import{b as on,w as an,N as Ke,d as ln,c as Ne}from"./loading-fb142471.js";import{C as sn}from"./COver-5801d771.js";import{_ as rn}from"./CLabel.vue_vue_type_script_setup_true_lang-2883f630.js";import{C as un}from"./CMarkdown-ae279578.js";import{N as cn,_ as dn}from"./CReactions.vue_vue_type_script_setup_true_lang-bcd65140.js";import{a as fn}from"../app.config.js";import{c as vn,N as pn}from"./Image-dbc5675c.js";import{u as hn,a as Q,k as Ue,e as mn,o as ee}from"./Popover-7ddbe0d2.js";import{V as Ze}from"./VResizeObserver-47dafdf5.js";import{a as We,N as qe}from"./Card-5655ee7b.js";import"./use-locale-4b393f32.js";function gn(e){return Nt(Tt(e).toLowerCase())}var xn=vn(function(e,o,a){return o=o.toLowerCase(),e+(a?gn(o):o)});const Ge=xn;function wn(e){const{length:o}=e;return o>1&&(e.push(Je(e[0],0,"append")),e.unshift(Je(e[o-1],o-1,"prepend"))),e}function Je(e,o,a){return ot(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Qe(e,o,a){return a?e===0?o-3:e===o-1?0:e-1:e}function Te(e,o){return o?e+1:e}function bn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function yn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function Sn(e,o){return o&&e>3?e-2:e}function et(e){return window.TouchEvent&&e instanceof window.TouchEvent}function tt(e,o){let{offsetWidth:a,offsetHeight:r}=e;if(o){const i=getComputedStyle(e);a=a-parseFloat(i.getPropertyValue("padding-left"))-parseFloat(i.getPropertyValue("padding-right")),r=r-parseFloat(i.getPropertyValue("padding-top"))-parseFloat(i.getPropertyValue("padding-bottom"))}return{width:a,height:r}}function pe(e,o,a){return e<o?o:e>a?a:e}function Cn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,r,,i="ms"]=a;return Number(r)*(i==="ms"?1:1e3)}return 0}const rt=Dt("n-carousel-methods"),_n=e=>{It(rt,e)},Ve=(e="unknown",o="component")=>{const a=$t(rt);return a||Vt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a},Rn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Pn=W({name:"CarouselDots",props:Rn,setup(e){const{mergedClsPrefixRef:o}=me(e),a=$([]),r=Ve();function i(h,v){switch(h.key){case"Enter":case" ":h.preventDefault(),r.to(v);return}e.keyboard&&P(h)}function w(h){e.trigger==="hover"&&r.to(h)}function z(h){e.trigger==="click"&&r.to(h)}function P(h){var v;if(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)return;const b=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(b==="input"||b==="textarea")return;const{code:R}=h,V=R==="PageUp"||R==="ArrowUp",k=R==="PageDown"||R==="ArrowDown",m=R==="PageUp"||R==="ArrowRight",S=R==="PageDown"||R==="ArrowLeft",p=r.isVertical(),T=p?V:m,Y=p?k:S;!T&&!Y||(h.preventDefault(),T&&!r.isNextDisabled()?(r.next(),_(r.currentIndexRef.value)):Y&&!r.isPrevDisabled()&&(r.prev(),_(r.currentIndexRef.value)))}function _(h){var v;(v=a.value[h])===null||v===void 0||v.focus()}return Et(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:i,handleMouseenter:w,handleClick:z}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return C("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},At(this.total,a=>{const r=a===this.currentIndex;return C("div",{"aria-selected":r,ref:i=>o.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:i=>{this.handleKeydown(i,a)}})}))}}),kn=C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},C("g",{fill:"none"},C("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),zn=C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},C("g",{fill:"none"},C("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Nn=W({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=me(e),{isVertical:a,isPrevDisabled:r,isNextDisabled:i,prev:w,next:z}=Ve();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:r,isNextDisabled:i,prev:w,next:z}},render(){const{mergedClsPrefix:e}=this;return C("div",{class:`${e}-carousel__arrow-group`},C("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},kn),C("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},zn))}}),he="CarouselItem",Tn=e=>{var o;return((o=e.type)===null||o===void 0?void 0:o.name)===he},In=W({name:he,setup(e){const{mergedClsPrefixRef:o}=me(e),a=Ve(Ge(he),`n-${Ge(he)}`),r=$(),i=g(()=>{const{value:v}=r;return v?a.getSlideIndex(v):-1}),w=g(()=>a.isPrev(i.value)),z=g(()=>a.isNext(i.value)),P=g(()=>a.isActive(i.value)),_=g(()=>a.getSlideStyle(i.value));at(()=>{a.addSlide(r.value)}),lt(()=>{a.removeSlide(r.value)});function h(v){const{value:b}=i;b!==void 0&&(a==null||a.onCarouselItemClick(b,v))}return{mergedClsPrefix:o,selfElRef:r,isPrev:w,isNext:z,isActive:P,index:i,style:_,handleClick:h}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:r,isNext:i,isActive:w,index:z,style:P}=this,_=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:w,[`${a}-carousel__slide--prev`]:r,[`${a}-carousel__slide--next`]:i}];return C("div",{ref:"selfElRef",class:_,role:"option",tabindex:"-1","data-index":z,"aria-hidden":!w,style:P,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:r,isNext:i,isActive:w,index:z}))}}),Dn=Bt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[d("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[d("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[L("> img",`
 display: block;
 `)])]),d("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[d("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[L("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[d("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[L("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),d("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[L("svg",`
 height: 1em;
 width: 1em;
 `),L("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",`
 touch-action: pan-x;
 `,[d("slides",`
 flex-direction: column;
 `),f("fade",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[d("slides",[L(">",[L("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `)]),d("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[d("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[d("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[d("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[d("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[L("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[L("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[d("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 top: 12px;
 right: 12px;
 `,[L("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[d("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[L("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[d("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[d("slides",`
 perspective: 1000px;
 `),d("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),$n=["transitionDuration","transitionTimingFunction"],Vn=Object.assign(Object.assign({},st.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ie=!1;const En=W({name:"Carousel",props:Vn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=me(e),r=$(null),i=$(null),w=$([]),z={value:[]},P=g(()=>e.direction==="vertical"),_=g(()=>P.value?"height":"width"),h=g(()=>P.value?"bottom":"right"),v=g(()=>e.effect==="slide"),b=g(()=>e.loop&&e.slidesPerView===1&&v.value),R=g(()=>e.effect==="custom"),V=g(()=>!v.value||e.centeredSlides?1:e.slidesPerView),k=g(()=>R.value?1:e.slidesPerView),m=g(()=>V.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),S=$({width:0,height:0}),p=g(()=>{const{value:t}=w;if(!t.length)return[];const{value:n}=m;if(n)return t.map(y=>tt(y));const{value:l}=k,{value:u}=S,{value:c}=_;let s=u[c];if(l!=="auto"){const{spaceBetween:y}=e,I=s-(l-1)*y,fe=1/Math.max(1,l);s=I*fe}const x=Object.assign(Object.assign({},u),{[c]:s});return t.map(()=>x)}),T=g(()=>{const{value:t}=p;if(!t.length)return[];const{centeredSlides:n,spaceBetween:l}=e,{value:u}=_,{[u]:c}=S.value;let s=0;return t.map(({[u]:x})=>{let y=s;return n&&(y+=(x-c)/2),s+=x+l,y})}),Y=$(!1),ge=g(()=>{const{transitionStyle:t}=e;return t?Ue(t,$n):{}}),xe=g(()=>R.value?0:Cn(ge.value.transitionDuration)),Ee=g(()=>{const{value:t}=w;if(!t.length)return[];const n=!(m.value||k.value===1),l=x=>{if(n){const{value:y}=_;return{[y]:`${p.value[x][y]}px`}}};if(R.value)return t.map((x,y)=>l(y));const{effect:u,spaceBetween:c}=e,{value:s}=h;return t.reduce((x,y,I)=>{const fe=Object.assign(Object.assign({},l(I)),{[`margin-${s}`]:`${c}px`});return x.push(fe),Y.value&&(u==="fade"||u==="card")&&Object.assign(fe,ge.value),x},[])}),E=g(()=>{const{value:t}=V,{length:n}=w.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:l}=p,{length:u}=l;if(!u)return n;const{value:c}=T,{value:s}=_,x=S.value[s];let y=l[l.length-1][s],I=u;for(;I>1&&y<x;)I--,y+=c[I]-c[I-1];return pe(I+1,1,u)}}),oe=g(()=>Sn(E.value,b.value)),it=Te(e.defaultIndex,b.value),we=$(Qe(it,E.value,b.value)),A=hn(Mt(e,"currentIndex"),we),B=g(()=>Te(A.value,b.value));function q(t){var n,l;t=pe(t,0,E.value-1);const u=Qe(t,E.value,b.value),{value:c}=A;u!==A.value&&(we.value=u,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,u,c),(l=e.onUpdateCurrentIndex)===null||l===void 0||l.call(e,u,c))}function ae(t=B.value){return bn(t,E.value,e.loop)}function le(t=B.value){return yn(t,E.value,e.loop)}function ut(t){const n=H(t);return n!==null&&ae()===n}function ct(t){const n=H(t);return n!==null&&le()===n}function Ae(t){return B.value===H(t)}function dt(t){return A.value===t}function Be(){return ae()===null}function Me(){return le()===null}function be(t){const n=pe(Te(t,b.value),0,E.value);(t!==A.value||n!==B.value)&&q(n)}function ye(){const t=ae();t!==null&&q(t)}function se(){const t=le();t!==null&&q(t)}function ft(){(!M||!b.value)&&ye()}function vt(){(!M||!b.value)&&se()}let M=!1,F=0;const Se=$({});function re(t,n=0){Se.value=Object.assign({},ge.value,{transform:P.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function G(t=0){v.value?Ce(B.value,t):F!==0&&(!M&&t>0&&(M=!0),re(F=0,t))}function Ce(t,n){const l=Le(t);l!==F&&n>0&&(M=!0),F=Le(B.value),re(l,n)}function Le(t){let n;return t>=E.value-1?n=je():n=T.value[t]||0,n}function je(){if(V.value==="auto"){const{value:t}=_,{[t]:n}=S.value,{value:l}=T,u=l[l.length-1];let c;if(u===void 0)c=n;else{const{value:s}=p;c=u+s[s.length-1][t]}return c-n}else{const{value:t}=T;return t[E.value-1]||0}}const J={currentIndexRef:A,to:be,prev:ft,next:vt,isVertical:()=>P.value,isHorizontal:()=>!P.value,isPrev:ut,isNext:ct,isActive:Ae,isPrevDisabled:Be,isNextDisabled:Me,getSlideIndex:H,getSlideStyle:mt,addSlide:pt,removeSlide:ht,onCarouselItemClick:gt};_n(J);function pt(t){t&&w.value.push(t)}function ht(t){if(!t)return;const n=H(t);n!==-1&&w.value.splice(n,1)}function H(t){return typeof t=="number"?t:t?w.value.indexOf(t):-1}function mt(t){const n=H(t);if(n!==-1){const l=[Ee.value[n]],u=J.isPrev(n),c=J.isNext(n);return u&&l.push(e.prevSlideStyle||""),c&&l.push(e.nextSlideStyle||""),Ht(l)}}function gt(t,n){let l=!M&&!ce&&!ke;e.effect==="card"&&l&&!Ae(t)&&(be(t),l=!1),l||(n.preventDefault(),n.stopPropagation())}let ie=null;function ue(){ie&&(clearInterval(ie),ie=null)}function K(){ue(),!e.autoplay||oe.value<2||(ie=window.setInterval(se,e.interval))}let _e=0,Re=0,X=0,Pe=0,ce=!1,ke=!1;function Oe(t){var n;if(Ie||!(!((n=i.value)===null||n===void 0)&&n.contains(mn(t))))return;Ie=!0,ce=!0,ke=!1,Pe=Date.now(),ue(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const l=et(t)?t.touches[0]:t;P.value?Re=l.clientY:_e=l.clientX,e.touchable&&(ee("touchmove",document,de),ee("touchend",document,U),ee("touchcancel",document,U)),e.draggable&&(ee("mousemove",document,de),ee("mouseup",document,U))}function de(t){const{value:n}=P,{value:l}=_,u=et(t)?t.touches[0]:t,c=n?u.clientY-Re:u.clientX-_e,s=S.value[l];X=pe(c,-s,s),t.cancelable&&t.preventDefault(),v.value&&re(F-X,0)}function U(){const{value:t}=B;let n=t;if(!M&&X!==0&&v.value){const l=F-X,u=[...T.value.slice(0,E.value-1),je()];let c=null;for(let s=0;s<u.length;s++){const x=Math.abs(u[s]-l);if(c!==null&&c<x)break;c=x,n=s}}if(n===t){const l=Date.now()-Pe,{value:u}=_,c=S.value[u];X>c/2||X/l>.4?n=ae(t):(X<-c/2||X/l<-.4)&&(n=le(t))}n!==null&&n!==t?(ke=!0,q(n),Ye(()=>{(!b.value||we.value!==A.value)&&G(xe.value)})):G(xe.value),Xe(),K()}function Xe(){ce&&(Ie=!1),ce=!1,_e=0,Re=0,X=0,Pe=0,Q("touchmove",document,de),Q("touchend",document,U),Q("touchcancel",document,U),Q("mousemove",document,de),Q("mouseup",document,U)}function xt(){if(v.value&&M){const{value:t}=B;Ce(t,0)}else K();v.value&&(Se.value.transitionDuration="0ms"),M=!1}function wt(t){if(t.preventDefault(),M)return;let{deltaX:n,deltaY:l}=t;t.shiftKey&&!n&&(n=l);const u=-1,c=1,s=(n||l)>0?c:u;let x=0,y=0;P.value?y=s:x=s;const I=10;(y*l>=I||x*n>=I)&&(s===c&&!Me()?se():s===u&&!Be()&&ye())}function bt(){S.value=tt(r.value,!0),K()}function yt(){var t,n;m.value&&((n=(t=p.effect).scheduler)===null||n===void 0||n.call(t),p.effect.run())}function St(){e.autoplay&&ue()}function Ct(){e.autoplay&&K()}at(()=>{Lt(K),requestAnimationFrame(()=>Y.value=!0)}),lt(()=>{Xe(),ue()}),jt(()=>{const{value:t}=w,{value:n}=z,l=new Map,u=s=>l.has(s)?l.get(s):-1;let c=!1;for(let s=0;s<t.length;s++){const x=n.findIndex(y=>y.el===t[s]);x!==s&&(c=!0),l.set(t[s],x)}c&&t.sort((s,x)=>u(s)-u(x))}),ve(B,(t,n)=>{if(t!==n)if(K(),v.value){if(b.value&&oe.value>2){const{value:l}=E;t===l-2&&n===1?t=0:t===1&&n===l-2&&(t=l-1)}Ce(t,xe.value)}else G()},{immediate:!0}),ve([b,V],()=>void Ye(()=>{q(B.value)})),ve(T,()=>{v.value&&G()},{deep:!0}),ve(v,t=>{t?G():(M=!1,re(F=0))});const _t=g(()=>({onTouchstartPassive:e.touchable?Oe:void 0,onMousedown:e.draggable?Oe:void 0,onWheel:e.mousewheel?wt:void 0})),Rt=g(()=>Object.assign(Object.assign({},Ue(J,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:oe.value,currentIndex:A.value})),Pt=g(()=>({total:oe.value,currentIndex:A.value,to:J.to})),kt={getCurrentIndex:()=>A.value,to:be,prev:ye,next:se},zt=st("Carousel","-carousel",Dn,Kt,e,o),Fe=g(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:l,dotColorActive:u,dotColorFocus:c,dotLineWidth:s,dotLineWidthActive:x,arrowColor:y}}=zt.value;return{"--n-bezier":t,"--n-dot-color":l,"--n-dot-color-focus":c,"--n-dot-color-active":u,"--n-dot-size":n,"--n-dot-line-width":s,"--n-dot-line-width-active":x,"--n-arrow-color":y}}),Z=a?Ot("carousel",void 0,Fe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:r,slidesElRef:i,slideVNodes:z,duplicatedable:b,userWantsControl:R,autoSlideSize:m,displayIndex:A,realIndex:B,slideStyles:Ee,translateStyle:Se,slidesControlListeners:_t,handleTransitionEnd:xt,handleResize:bt,handleSlideResize:yt,handleMouseenter:St,handleMouseleave:Ct,isActive:dt,arrowSlotProps:Rt,dotSlotProps:Pt},kt),{cssVars:a?void 0:Fe,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:r,slideStyles:i,dotType:w,dotPlacement:z,slidesControlListeners:P,transitionProps:_={},arrowSlotProps:h,dotSlotProps:v,$slots:{default:b,dots:R,arrow:V}}=this,k=b&&on(b())||[];let m=An(k);return m.length||(m=k.map(S=>C(In,null,{default:()=>ot(S)}))),this.duplicatedable&&(m=wn(m)),this.slideVNodes.value=m,this.autoSlideSize&&(m=m.map(S=>C(Ze,{onResize:this.handleSlideResize},{default:()=>S}))),(e=this.onRender)===null||e===void 0||e.call(this),C("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${z}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,r&&`${o}-carousel--usercontrol`],style:this.cssVars},P,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),C(Ze,{onResize:this.handleResize},{default:()=>C("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?m.map((S,p)=>C("div",{style:i[p],key:p},Xt(C(Yt,Object.assign({},_),{default:()=>S}),[[Ft,this.isActive(p)]]))):m)}),this.showDots&&v.total>1&&We(R,v,()=>[C(Pn,{key:w+z,total:v.total,currentIndex:v.currentIndex,dotType:w,trigger:this.trigger,keyboard:this.keyboard})]),a&&We(V,h,()=>[C(Nn,null)]))}});function An(e){return e.reduce((o,a)=>(Tn(a)&&o.push(a),o),[])}const Bn=W({__name:"CBanner",setup(e){const o=Ut();return(a,r)=>N(o).banners.length>0?(O(),te(N(En),{key:0,autoplay:""},{default:j(()=>[(O(!0),ne($e,null,De(N(o).banners,i=>(O(),ne("div",{class:"h-48 md:h-56 lg:h-64 xl:h-72 w-full inline-block rounded-md overflow-hidden",key:i.src},[D(N(pn),{"object-fit":"cover",width:"100%",height:"100%",class:"w-full h-full",src:i.src,alt:i.alt},null,8,["src","alt"])]))),128))]),_:1})):Zt("",!0)}}),Mn={class:"text-center"},Ln={key:1,class:"text-center"},nt=20,jn=100,Qn=W({__name:"PHome",props:{label:{default:""}},setup(e){const o=e,a=$([]),r=$(o.label),i=an({state:"loading",fail:"文章查询失败!"}),w=$(!1);let z=1;async function P(k,m){i.value="loading";const[S,p]=await Qt(en.qIssuePage({state:"all",page:k.toString(),labels:fn.label.docLabel+","+m,per_page:nt.toString()}));if(S){i.value="fail";return}(p.length==0||p.length<nt)&&(w.value=!0),a.value.push(...p),i.value="success"}let _;function h(k){_&&clearTimeout(_);function m(){P(z+k,r.value).then(()=>{z+=k})}_=setTimeout(m,500)}h(0);const v=qt();function b(k){v.push({path:"/",query:{label:k.name}})}let R=0;function V(){const k=document.documentElement.scrollTop,m=document.documentElement.clientHeight,S=document.documentElement.scrollHeight,p=k+m+jn;R<k&&p>=S&&!w.value&&h(1)}return He(()=>{R=document.documentElement.scrollTop}),Wt(()=>{window.scrollTo(0,R),window.addEventListener("scroll",V)}),He(()=>{window.removeEventListener("scroll",V)}),(k,m)=>{const S=Gt("RouterLink");return O(),te(N(Ne),{vertical:""},{default:j(()=>[D(N(qe),{size:"small",bordered:!1},{default:j(()=>[D(Bn)]),_:1}),(O(!0),ne($e,null,De(a.value,p=>(O(),te(N(qe),{key:p.number,size:"small",bordered:!1},{default:j(()=>[D(N(Ne),{vertical:"",size:"small"},{default:j(()=>[D(S,{to:`/doc/${p.number}`,class:"text-2xl"},{default:j(()=>[ze(tn(p.title),1)]),_:2},1032,["to"]),D(N(Ne),{align:"center",size:"small"},{default:j(()=>[D(N(cn),{time:new Date(p.updated_at),type:"relative"},null,8,["time"]),(O(!0),ne($e,null,De(N(nn)(p.labels),T=>(O(),te(rn,{key:T.id,"hidden-des":!0,label:T,onClick:Y=>b(T)},null,8,["label","onClick"]))),128)),D(dn,{reactions:p.reactions},null,8,["reactions"])]),_:2},1024)]),_:2},1024),D(un,{text:p.body,id:p.number},null,8,["text","id"])]),_:2},1024))),128)),D(N(ln),{state:N(i)},{fail:j(()=>[Jt("div",Mn,[D(N(Ke),{onClick:m[0]||(m[0]=p=>h(0)),class:"mx-auto"},{default:j(()=>[ze(" 重试 ")]),_:1})])]),default:j(()=>[w.value?(O(),te(N(sn),{key:0})):(O(),ne("div",Ln,[D(N(Ke),{onClick:m[1]||(m[1]=p=>h(1)),class:"mx-auto"},{default:j(()=>[ze(" 更多 ")]),_:1})]))]),_:1},8,["state"])]),_:1})}}});export{Qn as default};
