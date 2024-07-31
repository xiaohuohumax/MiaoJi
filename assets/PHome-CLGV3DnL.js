import{az as Tt,aA as It,a7 as nt,H as Dt,x as $t,ab as Vt,K as Et,d as q,s as xe,a as $,aB as At,i as _,aC as Bt,g as m,c as ot,b as at,l as Mt,p as d,q as M,C as v,F as Lt,R as jt,aD as Ot,w as he,t as lt,A as Xt,Y as Ft,Z as Ht,T as Yt,aE as Kt,n as Ye,aF as Ut,ar as st,ao as y,af as X,ai as ne,ah as L,ad as D,ag as oe,av as $e,S as Ve,al as Zt,aq as Wt,as as qt,e as Gt,aG as Jt,ae as Qt,am as en,ap as ze,an as Ne,aw as tn,ax as nn,aH as on}from"./index-BTjIPu72.js";import{w as an,B as Ke,_ as ln}from"./loading-B7CF2kwk.js";import{_ as sn}from"./COver.vue_vue_type_script_setup_true_lang-C4dpfn6V.js";import{C as rn}from"./CMarkdown-CJUxR0mz.js";import{_ as un}from"./CLabel.vue_vue_type_script_setup_true_lang-D6hhP7DD.js";import{N as cn,_ as dn}from"./CReactions.vue_vue_type_script_setup_true_lang-CbpDxAGq.js";import{a as fn}from"../app.config.BqbS9028.js";import{c as vn,N as pn}from"./Image-CjDbuVIh.js";import{n as Ue,u as hn,k as mn,o as ee,a as te}from"./Popover-DkLbEVrp.js";import{j as gn,b as Ze,N as rt,h as Te}from"./Space-Dwyrx8eU.js";import{V as We}from"./VResizeObserver-BC1hRH5P.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-locale-CmRwvaf0.js";function xn(e){return Tt(It(e).toLowerCase())}var qe=vn(function(e,o,a){return o=o.toLowerCase(),e+(a?xn(o):o)});function bn(e){const{length:o}=e;return o>1&&(e.push(Ge(e[0],0,"append")),e.unshift(Ge(e[o-1],o-1,"prepend"))),e}function Ge(e,o,a){return nt(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Je(e,o,a){return o===1?0:a?e===0?o-3:e===o-1?0:e-1:e}function Ie(e,o){return o?e+1:e}function wn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function yn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function Sn(e,o){return o&&e>3?e-2:e}function Qe(e){return window.TouchEvent&&e instanceof window.TouchEvent}function et(e,o){let{offsetWidth:a,offsetHeight:r}=e;if(o){const u=getComputedStyle(e);a=a-Number.parseFloat(u.getPropertyValue("padding-left"))-Number.parseFloat(u.getPropertyValue("padding-right")),r=r-Number.parseFloat(u.getPropertyValue("padding-top"))-Number.parseFloat(u.getPropertyValue("padding-bottom"))}return{width:a,height:r}}function me(e,o,a){return e<o?o:e>a?a:e}function Cn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,r,,u="ms"]=a;return Number(r)*(u==="ms"?1:1e3)}return 0}const it=Et("n-carousel-methods");function _n(e){Dt(it,e)}function Ee(e="unknown",o="component"){const a=$t(it);return a||Vt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a}const Rn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},kn=q({name:"CarouselDots",props:Rn,setup(e){const{mergedClsPrefixRef:o}=xe(e),a=$([]),r=Ee();function u(x,f){switch(x.key){case"Enter":case" ":x.preventDefault(),r.to(f);return}e.keyboard&&R(x)}function S(x){e.trigger==="hover"&&r.to(x)}function k(x){e.trigger==="click"&&r.to(x)}function R(x){var f;if(x.shiftKey||x.altKey||x.ctrlKey||x.metaKey)return;const p=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(p==="input"||p==="textarea")return;const{code:N}=x,j=N==="PageUp"||N==="ArrowUp",V=N==="PageDown"||N==="ArrowDown",z=N==="PageUp"||N==="ArrowRight",h=N==="PageDown"||N==="ArrowLeft",b=r.isVertical(),T=b?j:z,w=b?V:h;!T&&!w||(x.preventDefault(),T&&!r.isNextDisabled()?(r.next(),P(r.currentIndexRef.value)):w&&!r.isPrevDisabled()&&(r.prev(),P(r.currentIndexRef.value)))}function P(x){var f;(f=a.value[x])===null||f===void 0||f.focus()}return At(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:u,handleMouseenter:S,handleClick:k}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Bt(this.total,a=>{const r=a===this.currentIndex;return _("div",{"aria-selected":r,ref:u=>o.push(u),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:u=>{this.handleKeydown(u,a)}})}))}}),Pn=_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),zn=_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Nn=q({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=xe(e),{isVertical:a,isPrevDisabled:r,isNextDisabled:u,prev:S,next:k}=Ee();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:r,isNextDisabled:u,prev:S,next:k}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Pn),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},zn))}}),ge="CarouselItem";function Tn(e){var o;return((o=e.type)===null||o===void 0?void 0:o.name)===ge}const In=q({name:ge,setup(e){const{mergedClsPrefixRef:o}=xe(e),a=Ee(qe(ge),`n-${qe(ge)}`),r=$(),u=m(()=>{const{value:f}=r;return f?a.getSlideIndex(f):-1}),S=m(()=>a.isPrev(u.value)),k=m(()=>a.isNext(u.value)),R=m(()=>a.isActive(u.value)),P=m(()=>a.getSlideStyle(u.value));ot(()=>{a.addSlide(r.value)}),at(()=>{a.removeSlide(r.value)});function x(f){const{value:p}=u;p!==void 0&&(a==null||a.onCarouselItemClick(p,f))}return{mergedClsPrefix:o,selfElRef:r,isPrev:S,isNext:k,isActive:R,index:u,style:P,handleClick:x}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:r,isNext:u,isActive:S,index:k,style:R}=this,P=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:S,[`${a}-carousel__slide--prev`]:r,[`${a}-carousel__slide--next`]:u}];return _("div",{ref:"selfElRef",class:P,role:"option",tabindex:"-1","data-index":k,"aria-hidden":!S,style:R,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:r,isNext:u,isActive:S,index:k}))}}),Dn=Mt("carousel",`
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
 `,[M("> img",`
 display: block;
 `)])]),d("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[v("dot",[d("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[M("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
 background-color: var(--n-dot-color-active);
 `)])]),v("line",[d("dot",`
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
 `,[M("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
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
 `,[M("svg",`
 height: 1em;
 width: 1em;
 `),M("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),v("vertical",`
 touch-action: pan-x;
 `,[d("slides",`
 flex-direction: column;
 `),v("fade",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),v("card",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[v("current",`
 transform: translateY(-50%) translateZ(0);
 `),v("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),v("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),v("usercontrol",[d("slides",[M(">",[M("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),v("left",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[v("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[v("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `)]),d("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),v("vertical",[d("arrow",`
 transform: rotate(90deg);
 `)]),v("show-arrow",[v("bottom",[d("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),v("top",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("left",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("right",[d("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),v("left",[d("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[M("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("right",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[v("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[v("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[M("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("top",[d("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[v("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 top: 12px;
 right: 12px;
 `,[M("> *:first-child",`
 margin-right: 12px;
 `)])]),v("bottom",[d("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[v("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[M("> *:first-child",`
 margin-right: 12px;
 `)])]),v("fade",[d("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[v("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),v("card",[d("slides",`
 perspective: 1000px;
 `),d("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[v("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),v("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),v("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),$n=["transitionDuration","transitionTimingFunction"],Vn=Object.assign(Object.assign({},lt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let De=!1;const En=q({name:"Carousel",props:Vn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=xe(e),r=$(null),u=$(null),S=$([]),k={value:[]},R=m(()=>e.direction==="vertical"),P=m(()=>R.value?"height":"width"),x=m(()=>R.value?"bottom":"right"),f=m(()=>e.effect==="slide"),p=m(()=>e.loop&&e.slidesPerView===1&&f.value),N=m(()=>e.effect==="custom"),j=m(()=>!f.value||e.centeredSlides?1:e.slidesPerView),V=m(()=>N.value?1:e.slidesPerView),z=m(()=>j.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),h=$({width:0,height:0}),b=m(()=>{const{value:t}=S;if(!t.length)return[];const{value:n}=z;if(n)return t.map(C=>et(C));const{value:l}=V,{value:i}=h,{value:c}=P;let s=i[c];if(l!=="auto"){const{spaceBetween:C}=e,I=s-(l-1)*C,pe=1/Math.max(1,l);s=I*pe}const g=Object.assign(Object.assign({},i),{[c]:s});return t.map(()=>g)}),T=m(()=>{const{value:t}=b;if(!t.length)return[];const{centeredSlides:n,spaceBetween:l}=e,{value:i}=P,{[i]:c}=h.value;let s=0;return t.map(({[i]:g})=>{let C=s;return n&&(C+=(g-c)/2),s+=g+l,C})}),w=$(!1),H=m(()=>{const{transitionStyle:t}=e;return t?Ue(t,$n):{}}),ae=m(()=>N.value?0:Cn(H.value.transitionDuration)),Ae=m(()=>{const{value:t}=S;if(!t.length)return[];const n=!(z.value||V.value===1),l=g=>{if(n){const{value:C}=P;return{[C]:`${b.value[g][C]}px`}}};if(N.value)return t.map((g,C)=>l(C));const{effect:i,spaceBetween:c}=e,{value:s}=x;return t.reduce((g,C,I)=>{const pe=Object.assign(Object.assign({},l(I)),{[`margin-${s}`]:`${c}px`});return g.push(pe),w.value&&(i==="fade"||i==="card")&&Object.assign(pe,H.value),g},[])}),E=m(()=>{const{value:t}=j,{length:n}=S.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:l}=b,{length:i}=l;if(!i)return n;const{value:c}=T,{value:s}=P,g=h.value[s];let C=l[l.length-1][s],I=i;for(;I>1&&C<g;)I--,C+=c[I]-c[I-1];return me(I+1,1,i)}}),le=m(()=>Sn(E.value,p.value)),ut=Ie(e.defaultIndex,p.value),be=$(Je(ut,E.value,p.value)),O=hn(Lt(e,"currentIndex"),be),A=m(()=>Ie(O.value,p.value));function G(t){var n,l;t=me(t,0,E.value-1);const i=Je(t,E.value,p.value),{value:c}=O;i!==O.value&&(be.value=i,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,i,c),(l=e.onUpdateCurrentIndex)===null||l===void 0||l.call(e,i,c))}function se(t=A.value){return wn(t,E.value,e.loop)}function re(t=A.value){return yn(t,E.value,e.loop)}function ct(t){const n=K(t);return n!==null&&se()===n}function dt(t){const n=K(t);return n!==null&&re()===n}function Be(t){return A.value===K(t)}function ft(t){return O.value===t}function Me(){return se()===null}function Le(){return re()===null}function we(t){const n=me(Ie(t,p.value),0,E.value);(t!==O.value||n!==A.value)&&G(n)}function ye(){const t=se();t!==null&&G(t)}function ie(){const t=re();t!==null&&G(t)}let B=!1;function vt(){(!B||!p.value)&&ye()}function pt(){(!B||!p.value)&&ie()}let Y=0;const Se=$({});function ue(t,n=0){Se.value=Object.assign({},H.value,{transform:R.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function J(t=0){f.value?Ce(A.value,t):Y!==0&&(!B&&t>0&&(B=!0),ue(Y=0,t))}function Ce(t,n){const l=je(t);l!==Y&&n>0&&(B=!0),Y=je(A.value),ue(l,n)}function je(t){let n;return t>=E.value-1?n=Oe():n=T.value[t]||0,n}function Oe(){if(j.value==="auto"){const{value:t}=P,{[t]:n}=h.value,{value:l}=T,i=l[l.length-1];let c;if(i===void 0)c=n;else{const{value:s}=b;c=i+s[s.length-1][t]}return c-n}else{const{value:t}=T;return t[E.value-1]||0}}const Q={currentIndexRef:O,to:we,prev:vt,next:pt,isVertical:()=>R.value,isHorizontal:()=>!R.value,isPrev:ct,isNext:dt,isActive:Be,isPrevDisabled:Me,isNextDisabled:Le,getSlideIndex:K,getSlideStyle:gt,addSlide:ht,removeSlide:mt,onCarouselItemClick:xt};_n(Q);function ht(t){t&&S.value.push(t)}function mt(t){if(!t)return;const n=K(t);n!==-1&&S.value.splice(n,1)}function K(t){return typeof t=="number"?t:t?S.value.indexOf(t):-1}function gt(t){const n=K(t);if(n!==-1){const l=[Ae.value[n]],i=Q.isPrev(n),c=Q.isNext(n);return i&&l.push(e.prevSlideStyle||""),c&&l.push(e.nextSlideStyle||""),Kt(l)}}let _e=0,Re=0,F=0,ke=0,ce=!1,Pe=!1;function xt(t,n){let l=!B&&!ce&&!Pe;e.effect==="card"&&l&&!Be(t)&&(we(t),l=!1),l||(n.preventDefault(),n.stopPropagation())}let de=null;function fe(){de&&(clearInterval(de),de=null)}function U(){fe(),!e.autoplay||le.value<2||(de=window.setInterval(ie,e.interval))}function Xe(t){var n;if(De||!(!((n=u.value)===null||n===void 0)&&n.contains(mn(t))))return;De=!0,ce=!0,Pe=!1,ke=Date.now(),fe(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const l=Qe(t)?t.touches[0]:t;R.value?Re=l.clientY:_e=l.clientX,e.touchable&&(ee("touchmove",document,ve),ee("touchend",document,Z),ee("touchcancel",document,Z)),e.draggable&&(ee("mousemove",document,ve),ee("mouseup",document,Z))}function ve(t){const{value:n}=R,{value:l}=P,i=Qe(t)?t.touches[0]:t,c=n?i.clientY-Re:i.clientX-_e,s=h.value[l];F=me(c,-s,s),t.cancelable&&t.preventDefault(),f.value&&ue(Y-F,0)}function Z(){const{value:t}=A;let n=t;if(!B&&F!==0&&f.value){const l=Y-F,i=[...T.value.slice(0,E.value-1),Oe()];let c=null;for(let s=0;s<i.length;s++){const g=Math.abs(i[s]-l);if(c!==null&&c<g)break;c=g,n=s}}if(n===t){const l=Date.now()-ke,{value:i}=P,c=h.value[i];F>c/2||F/l>.4?n=se(t):(F<-c/2||F/l<-.4)&&(n=re(t))}n!==null&&n!==t?(Pe=!0,G(n),Ye(()=>{(!p.value||be.value!==O.value)&&J(ae.value)})):J(ae.value),Fe(),U()}function Fe(){ce&&(De=!1),ce=!1,_e=0,Re=0,F=0,ke=0,te("touchmove",document,ve),te("touchend",document,Z),te("touchcancel",document,Z),te("mousemove",document,ve),te("mouseup",document,Z)}function bt(){if(f.value&&B){const{value:t}=A;Ce(t,0)}else U();f.value&&(Se.value.transitionDuration="0ms"),B=!1}function wt(t){if(t.preventDefault(),B)return;let{deltaX:n,deltaY:l}=t;t.shiftKey&&!n&&(n=l);const i=-1,c=1,s=(n||l)>0?c:i;let g=0,C=0;R.value?C=s:g=s;const I=10;(C*l>=I||g*n>=I)&&(s===c&&!Le()?ie():s===i&&!Me()&&ye())}function yt(){h.value=et(r.value,!0),U()}function St(){var t,n;z.value&&((n=(t=b.effect).scheduler)===null||n===void 0||n.call(t),b.effect.run())}function Ct(){e.autoplay&&fe()}function _t(){e.autoplay&&U()}ot(()=>{jt(U),requestAnimationFrame(()=>w.value=!0)}),at(()=>{Fe(),fe()}),Ot(()=>{const{value:t}=S,{value:n}=k,l=new Map,i=s=>l.has(s)?l.get(s):-1;let c=!1;for(let s=0;s<t.length;s++){const g=n.findIndex(C=>C.el===t[s]);g!==s&&(c=!0),l.set(t[s],g)}c&&t.sort((s,g)=>i(s)-i(g))}),he(A,(t,n)=>{if(t!==n)if(U(),f.value){if(p.value){const{value:l}=E;le.value>2&&t===l-2&&n===1?t=0:t===1&&n===l-2&&(t=l-1)}Ce(t,ae.value)}else J()},{immediate:!0}),he([p,j],()=>void Ye(()=>{G(A.value)})),he(T,()=>{f.value&&J()},{deep:!0}),he(f,t=>{t?J():(B=!1,ue(Y=0))});const Rt=m(()=>({onTouchstartPassive:e.touchable?Xe:void 0,onMousedown:e.draggable?Xe:void 0,onWheel:e.mousewheel?wt:void 0})),kt=m(()=>Object.assign(Object.assign({},Ue(Q,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:le.value,currentIndex:O.value})),Pt=m(()=>({total:le.value,currentIndex:O.value,to:Q.to})),zt={getCurrentIndex:()=>O.value,to:we,prev:ye,next:ie},Nt=lt("Carousel","-carousel",Dn,Ut,e,o),He=m(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:l,dotColorActive:i,dotColorFocus:c,dotLineWidth:s,dotLineWidthActive:g,arrowColor:C}}=Nt.value;return{"--n-bezier":t,"--n-dot-color":l,"--n-dot-color-focus":c,"--n-dot-color-active":i,"--n-dot-size":n,"--n-dot-line-width":s,"--n-dot-line-width-active":g,"--n-arrow-color":C}}),W=a?Xt("carousel",void 0,He,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:r,slidesElRef:u,slideVNodes:k,duplicatedable:p,userWantsControl:N,autoSlideSize:z,realIndex:A,slideStyles:Ae,translateStyle:Se,slidesControlListeners:Rt,handleTransitionEnd:bt,handleResize:yt,handleSlideResize:St,handleMouseenter:Ct,handleMouseleave:_t,isActive:ft,arrowSlotProps:kt,dotSlotProps:Pt},zt),{cssVars:a?void 0:He,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:r,slideStyles:u,dotType:S,dotPlacement:k,slidesControlListeners:R,transitionProps:P={},arrowSlotProps:x,dotSlotProps:f,$slots:{default:p,dots:N,arrow:j}}=this,V=p&&gn(p())||[];let z=An(V);return z.length||(z=V.map(h=>_(In,null,{default:()=>nt(h)}))),this.duplicatedable&&(z=bn(z)),this.slideVNodes.value=z,this.autoSlideSize&&(z=z.map(h=>_(We,{onResize:this.handleSlideResize},{default:()=>h}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${k}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,r&&`${o}-carousel--usercontrol`],style:this.cssVars},R,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(We,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?z.map((h,b)=>_("div",{style:u[b],key:b},Ft(_(Yt,Object.assign({},P),{default:()=>h}),[[Ht,this.isActive(b)]]))):z)}),this.showDots&&f.total>1&&Ze(N,f,()=>[_(kn,{key:S+k,total:f.total,currentIndex:f.currentIndex,dotType:S,trigger:this.trigger,keyboard:this.keyboard})]),a&&Ze(j,x,()=>[_(Nn,null)]))}});function An(e){return e.reduce((o,a)=>(Tn(a)&&o.push(a),o),[])}const Bn=q({__name:"CBanner",setup(e){const o=st();return(a,r)=>y(o).banners.length>0?(X(),ne(y(rt),{key:0,size:"small",bordered:!1},{default:L(()=>[D(y(En),{autoplay:""},{default:L(()=>[(X(!0),oe(Ve,null,$e(y(o).banners,u=>(X(),oe("div",{class:"border border-transparent h-48 md:h-56 lg:h-64 xl:h-72 w-full inline-block rounded-md overflow-hidden",key:u.src},[D(y(pn),{"object-fit":"cover",width:"100%",height:"100%",class:"w-full h-full",src:u.src,alt:u.alt},null,8,["src","alt"])]))),128))]),_:1})]),_:1})):Zt("",!0)}}),Mn={class:"text-center"},Ln={key:1,class:"text-center"},tt=20,jn=100,eo=q({__name:"PHome",props:{label:{default:""}},setup(e){const{t:o}=Wt(),a=st(),r=e,u=$([]),S=$(r.label),k=an({state:"loading",fail:()=>o("component.cLoading.fail",{name:o("page.home.subtitle")})}),R=$(!1);let P=1;async function x(h,b){k.value="loading";const[T,w]=await tn(nn.qIssuePage({state:"all",page:h.toString(),labels:fn.label.docLabel+","+b,per_page:tt.toString()}));if(T){k.value="fail";return}(w.data.length==0||w.data.length<tt)&&(R.value=!0),u.value.push(...w.data),k.value="success"}let f;function p(h){f&&clearTimeout(f);function b(){x(P+h,S.value).then(()=>{P+=h})}f=setTimeout(b,500)}p(0);const N=qt();function j(h){N.push({path:"/",query:{label:h.name}})}let V=0;function z(){const h=document.documentElement.scrollTop,b=document.documentElement.clientHeight,T=document.documentElement.scrollHeight,w=h+b+jn;V<h&&w>=T&&!R.value&&p(1)}return Gt(()=>{window.scrollTo(0,V),window.addEventListener("scroll",z)}),Jt(()=>{V=document.documentElement.scrollTop,window.removeEventListener("scroll",z)}),(h,b)=>{const T=Qt("RouterLink");return X(),ne(y(Te),{vertical:""},{default:L(()=>[D(Bn),(X(!0),oe(Ve,null,$e(u.value,w=>(X(),ne(y(rt),{key:w.number,size:"small",bordered:!1},{default:L(()=>[D(y(Te),{vertical:"",size:"small"},{default:L(()=>[D(T,{to:`/doc/${w.number}`,class:"text-2xl font-bold dark:text-green-300 text-orange-500"},{default:L(()=>[ze(Ne(w.title),1)]),_:2},1032,["to"]),D(y(Te),{align:"center",size:"small"},{default:L(()=>[D(y(cn),{time:new Date(w.updated_at),type:"relative"},null,8,["time"]),(X(!0),oe(Ve,null,$e(y(on)(w.labels),H=>(X(),ne(un,{key:H.id,"hidden-des":!0,label:H,onClick:ae=>j(H)},null,8,["label","onClick"]))),128)),D(dn,{reactions:w.reactions},null,8,["reactions"])]),_:2},1024)]),_:2},1024),D(y(rn),{onMoreClick:H=>y(N).push({path:`/doc/${w.number}`}),"use-more":!0,"more-btn-text":y(o)("comment.button.more"),text:w.body,id:w.number,theme:y(a).theme.markdown},null,8,["onMoreClick","more-btn-text","text","id","theme"])]),_:2},1024))),128)),D(y(ln),{state:y(k)},{fail:L(()=>[en("div",Mn,[D(y(Ke),{onClick:b[0]||(b[0]=w=>p(0)),class:"mx-auto"},{default:L(()=>[ze(Ne(y(o)("comment.button.retry")),1)]),_:1})])]),default:L(()=>[R.value?(X(),ne(y(sn),{key:0,context:y(o)("component.cOver.context")},null,8,["context"])):(X(),oe("div",Ln,[D(y(Ke),{onClick:b[1]||(b[1]=w=>p(1)),class:"mx-auto"},{default:L(()=>[ze(Ne(y(o)("comment.button.more")),1)]),_:1})]))]),_:1},8,["state"])]),_:1})}}});export{eo as default};
