import{ap as Tt,aq as Dt,Y as ot,B as $t,n as Vt,a2 as Et,m as At,d as q,v as xe,a as $,ar as Bt,h as _,as as Mt,p as m,c as at,b as lt,f as jt,i as d,g as j,q as v,t as Lt,A as Ot,at as Xt,w as he,x as st,E as Ft,Z as Yt,_ as Ht,T as Kt,au as Ut,H as He,av as Zt,ai as rt,af as C,a6 as X,a9 as ne,a8 as L,a4 as D,a7 as oe,al as $e,F as Ve,ac as Wt,ah as qt,aj as Gt,aw as Ke,ax as Jt,a5 as Qt,ad as en,ag as ze,ae as Ne,am as tn,an as nn,ay as on}from"./index-bab370b4.js";import{w as an,N as Ue,_ as ln}from"./loading-aba46111.js";import{_ as sn}from"./COver.vue_vue_type_script_setup_true_lang-ad340878.js";import{C as rn}from"./CMarkdown-50e9d5bf.js";import{_ as un}from"./CLabel.vue_vue_type_script_setup_true_lang-b2f7a038.js";import{N as cn,_ as dn}from"./CReactions.vue_vue_type_script_setup_true_lang-b9f92b05.js";import{a as fn}from"../app.config.js";import{c as vn,N as pn}from"./Image-48bcdf89.js";import{k as Ze,u as hn,e as mn,o as ee,a as te}from"./Popover-c0b01e0b.js";import{f as gn,a as We,N as it,j as Ie}from"./Space-7508ea39.js";import{V as qe}from"./VResizeObserver-454e0fde.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-locale-80627af6.js";function xn(e){return Tt(Dt(e).toLowerCase())}var wn=vn(function(e,o,a){return o=o.toLowerCase(),e+(a?xn(o):o)});const Ge=wn;function bn(e){const{length:o}=e;return o>1&&(e.push(Je(e[0],0,"append")),e.unshift(Je(e[o-1],o-1,"prepend"))),e}function Je(e,o,a){return ot(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Qe(e,o,a){return a?e===0?o-3:e===o-1?0:e-1:e}function Te(e,o){return o?e+1:e}function yn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function Sn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function Cn(e,o){return o&&e>3?e-2:e}function et(e){return window.TouchEvent&&e instanceof window.TouchEvent}function tt(e,o){let{offsetWidth:a,offsetHeight:r}=e;if(o){const u=getComputedStyle(e);a=a-parseFloat(u.getPropertyValue("padding-left"))-parseFloat(u.getPropertyValue("padding-right")),r=r-parseFloat(u.getPropertyValue("padding-top"))-parseFloat(u.getPropertyValue("padding-bottom"))}return{width:a,height:r}}function me(e,o,a){return e<o?o:e>a?a:e}function _n(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,r,,u="ms"]=a;return Number(r)*(u==="ms"?1:1e3)}return 0}const ut=At("n-carousel-methods"),Rn=e=>{$t(ut,e)},Ee=(e="unknown",o="component")=>{const a=Vt(ut);return a||Et(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a},Pn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},kn=q({name:"CarouselDots",props:Pn,setup(e){const{mergedClsPrefixRef:o}=xe(e),a=$([]),r=Ee();function u(x,f){switch(x.key){case"Enter":case" ":x.preventDefault(),r.to(f);return}e.keyboard&&R(x)}function b(x){e.trigger==="hover"&&r.to(x)}function P(x){e.trigger==="click"&&r.to(x)}function R(x){var f;if(x.shiftKey||x.altKey||x.ctrlKey||x.metaKey)return;const p=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(p==="input"||p==="textarea")return;const{code:N}=x,O=N==="PageUp"||N==="ArrowUp",V=N==="PageDown"||N==="ArrowDown",z=N==="PageUp"||N==="ArrowRight",h=N==="PageDown"||N==="ArrowLeft",w=r.isVertical(),I=w?O:z,y=w?V:h;!I&&!y||(x.preventDefault(),I&&!r.isNextDisabled()?(r.next(),k(r.currentIndexRef.value)):y&&!r.isPrevDisabled()&&(r.prev(),k(r.currentIndexRef.value)))}function k(x){var f;(f=a.value[x])===null||f===void 0||f.focus()}return Bt(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:u,handleMouseenter:b,handleClick:P}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Mt(this.total,a=>{const r=a===this.currentIndex;return _("div",{"aria-selected":r,ref:u=>o.push(u),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:u=>{this.handleKeydown(u,a)}})}))}}),zn=_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Nn=_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),In=q({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=xe(e),{isVertical:a,isPrevDisabled:r,isNextDisabled:u,prev:b,next:P}=Ee();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:r,isNextDisabled:u,prev:b,next:P}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},zn),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Nn))}}),ge="CarouselItem",Tn=e=>{var o;return((o=e.type)===null||o===void 0?void 0:o.name)===ge},Dn=q({name:ge,setup(e){const{mergedClsPrefixRef:o}=xe(e),a=Ee(Ge(ge),`n-${Ge(ge)}`),r=$(),u=m(()=>{const{value:f}=r;return f?a.getSlideIndex(f):-1}),b=m(()=>a.isPrev(u.value)),P=m(()=>a.isNext(u.value)),R=m(()=>a.isActive(u.value)),k=m(()=>a.getSlideStyle(u.value));at(()=>{a.addSlide(r.value)}),lt(()=>{a.removeSlide(r.value)});function x(f){const{value:p}=u;p!==void 0&&(a==null||a.onCarouselItemClick(p,f))}return{mergedClsPrefix:o,selfElRef:r,isPrev:b,isNext:P,isActive:R,index:u,style:k,handleClick:x}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:r,isNext:u,isActive:b,index:P,style:R}=this,k=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:b,[`${a}-carousel__slide--prev`]:r,[`${a}-carousel__slide--next`]:u}];return _("div",{ref:"selfElRef",class:k,role:"option",tabindex:"-1","data-index":P,"aria-hidden":!b,style:R,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:r,isNext:u,isActive:b,index:P}))}}),$n=jt("carousel",`
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
 `,[j("> img",`
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
 `,[j("&:focus",`
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
 `,[j("&:focus",`
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
 `,[j("svg",`
 height: 1em;
 width: 1em;
 `),j("&:hover",`
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
 `)])])]),v("usercontrol",[d("slides",[j(">",[j("div",`
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
 `,[j("> *:first-child",`
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
 `,[j("> *:first-child",`
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
 `,[j("> *:first-child",`
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
 `,[j("> *:first-child",`
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
 `)])])]),Vn=["transitionDuration","transitionTimingFunction"],En=Object.assign(Object.assign({},st.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let De=!1;const An=q({name:"Carousel",props:En,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=xe(e),r=$(null),u=$(null),b=$([]),P={value:[]},R=m(()=>e.direction==="vertical"),k=m(()=>R.value?"height":"width"),x=m(()=>R.value?"bottom":"right"),f=m(()=>e.effect==="slide"),p=m(()=>e.loop&&e.slidesPerView===1&&f.value),N=m(()=>e.effect==="custom"),O=m(()=>!f.value||e.centeredSlides?1:e.slidesPerView),V=m(()=>N.value?1:e.slidesPerView),z=m(()=>O.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),h=$({width:0,height:0}),w=m(()=>{const{value:t}=b;if(!t.length)return[];const{value:n}=z;if(n)return t.map(S=>tt(S));const{value:l}=V,{value:i}=h,{value:c}=k;let s=i[c];if(l!=="auto"){const{spaceBetween:S}=e,T=s-(l-1)*S,pe=1/Math.max(1,l);s=T*pe}const g=Object.assign(Object.assign({},i),{[c]:s});return t.map(()=>g)}),I=m(()=>{const{value:t}=w;if(!t.length)return[];const{centeredSlides:n,spaceBetween:l}=e,{value:i}=k,{[i]:c}=h.value;let s=0;return t.map(({[i]:g})=>{let S=s;return n&&(S+=(g-c)/2),s+=g+l,S})}),y=$(!1),Y=m(()=>{const{transitionStyle:t}=e;return t?Ze(t,Vn):{}}),ae=m(()=>N.value?0:_n(Y.value.transitionDuration)),Ae=m(()=>{const{value:t}=b;if(!t.length)return[];const n=!(z.value||V.value===1),l=g=>{if(n){const{value:S}=k;return{[S]:`${w.value[g][S]}px`}}};if(N.value)return t.map((g,S)=>l(S));const{effect:i,spaceBetween:c}=e,{value:s}=x;return t.reduce((g,S,T)=>{const pe=Object.assign(Object.assign({},l(T)),{[`margin-${s}`]:`${c}px`});return g.push(pe),y.value&&(i==="fade"||i==="card")&&Object.assign(pe,Y.value),g},[])}),E=m(()=>{const{value:t}=O,{length:n}=b.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:l}=w,{length:i}=l;if(!i)return n;const{value:c}=I,{value:s}=k,g=h.value[s];let S=l[l.length-1][s],T=i;for(;T>1&&S<g;)T--,S+=c[T]-c[T-1];return me(T+1,1,i)}}),le=m(()=>Cn(E.value,p.value)),ct=Te(e.defaultIndex,p.value),we=$(Qe(ct,E.value,p.value)),A=hn(Lt(e,"currentIndex"),we),B=m(()=>Te(A.value,p.value));function G(t){var n,l;t=me(t,0,E.value-1);const i=Qe(t,E.value,p.value),{value:c}=A;i!==A.value&&(we.value=i,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,i,c),(l=e.onUpdateCurrentIndex)===null||l===void 0||l.call(e,i,c))}function se(t=B.value){return yn(t,E.value,e.loop)}function re(t=B.value){return Sn(t,E.value,e.loop)}function dt(t){const n=K(t);return n!==null&&se()===n}function ft(t){const n=K(t);return n!==null&&re()===n}function Be(t){return B.value===K(t)}function vt(t){return A.value===t}function Me(){return se()===null}function je(){return re()===null}function be(t){const n=me(Te(t,p.value),0,E.value);(t!==A.value||n!==B.value)&&G(n)}function ye(){const t=se();t!==null&&G(t)}function ie(){const t=re();t!==null&&G(t)}function pt(){(!M||!p.value)&&ye()}function ht(){(!M||!p.value)&&ie()}let M=!1,H=0;const Se=$({});function ue(t,n=0){Se.value=Object.assign({},Y.value,{transform:R.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function J(t=0){f.value?Ce(B.value,t):H!==0&&(!M&&t>0&&(M=!0),ue(H=0,t))}function Ce(t,n){const l=Le(t);l!==H&&n>0&&(M=!0),H=Le(B.value),ue(l,n)}function Le(t){let n;return t>=E.value-1?n=Oe():n=I.value[t]||0,n}function Oe(){if(O.value==="auto"){const{value:t}=k,{[t]:n}=h.value,{value:l}=I,i=l[l.length-1];let c;if(i===void 0)c=n;else{const{value:s}=w;c=i+s[s.length-1][t]}return c-n}else{const{value:t}=I;return t[E.value-1]||0}}const Q={currentIndexRef:A,to:be,prev:pt,next:ht,isVertical:()=>R.value,isHorizontal:()=>!R.value,isPrev:dt,isNext:ft,isActive:Be,isPrevDisabled:Me,isNextDisabled:je,getSlideIndex:K,getSlideStyle:xt,addSlide:mt,removeSlide:gt,onCarouselItemClick:wt};Rn(Q);function mt(t){t&&b.value.push(t)}function gt(t){if(!t)return;const n=K(t);n!==-1&&b.value.splice(n,1)}function K(t){return typeof t=="number"?t:t?b.value.indexOf(t):-1}function xt(t){const n=K(t);if(n!==-1){const l=[Ae.value[n]],i=Q.isPrev(n),c=Q.isNext(n);return i&&l.push(e.prevSlideStyle||""),c&&l.push(e.nextSlideStyle||""),Ut(l)}}function wt(t,n){let l=!M&&!fe&&!ke;e.effect==="card"&&l&&!Be(t)&&(be(t),l=!1),l||(n.preventDefault(),n.stopPropagation())}let ce=null;function de(){ce&&(clearInterval(ce),ce=null)}function U(){de(),!e.autoplay||le.value<2||(ce=window.setInterval(ie,e.interval))}let _e=0,Re=0,F=0,Pe=0,fe=!1,ke=!1;function Xe(t){var n;if(De||!(!((n=u.value)===null||n===void 0)&&n.contains(mn(t))))return;De=!0,fe=!0,ke=!1,Pe=Date.now(),de(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const l=et(t)?t.touches[0]:t;R.value?Re=l.clientY:_e=l.clientX,e.touchable&&(ee("touchmove",document,ve),ee("touchend",document,Z),ee("touchcancel",document,Z)),e.draggable&&(ee("mousemove",document,ve),ee("mouseup",document,Z))}function ve(t){const{value:n}=R,{value:l}=k,i=et(t)?t.touches[0]:t,c=n?i.clientY-Re:i.clientX-_e,s=h.value[l];F=me(c,-s,s),t.cancelable&&t.preventDefault(),f.value&&ue(H-F,0)}function Z(){const{value:t}=B;let n=t;if(!M&&F!==0&&f.value){const l=H-F,i=[...I.value.slice(0,E.value-1),Oe()];let c=null;for(let s=0;s<i.length;s++){const g=Math.abs(i[s]-l);if(c!==null&&c<g)break;c=g,n=s}}if(n===t){const l=Date.now()-Pe,{value:i}=k,c=h.value[i];F>c/2||F/l>.4?n=se(t):(F<-c/2||F/l<-.4)&&(n=re(t))}n!==null&&n!==t?(ke=!0,G(n),He(()=>{(!p.value||we.value!==A.value)&&J(ae.value)})):J(ae.value),Fe(),U()}function Fe(){fe&&(De=!1),fe=!1,_e=0,Re=0,F=0,Pe=0,te("touchmove",document,ve),te("touchend",document,Z),te("touchcancel",document,Z),te("mousemove",document,ve),te("mouseup",document,Z)}function bt(){if(f.value&&M){const{value:t}=B;Ce(t,0)}else U();f.value&&(Se.value.transitionDuration="0ms"),M=!1}function yt(t){if(t.preventDefault(),M)return;let{deltaX:n,deltaY:l}=t;t.shiftKey&&!n&&(n=l);const i=-1,c=1,s=(n||l)>0?c:i;let g=0,S=0;R.value?S=s:g=s;const T=10;(S*l>=T||g*n>=T)&&(s===c&&!je()?ie():s===i&&!Me()&&ye())}function St(){h.value=tt(r.value,!0),U()}function Ct(){var t,n;z.value&&((n=(t=w.effect).scheduler)===null||n===void 0||n.call(t),w.effect.run())}function _t(){e.autoplay&&de()}function Rt(){e.autoplay&&U()}at(()=>{Ot(U),requestAnimationFrame(()=>y.value=!0)}),lt(()=>{Fe(),de()}),Xt(()=>{const{value:t}=b,{value:n}=P,l=new Map,i=s=>l.has(s)?l.get(s):-1;let c=!1;for(let s=0;s<t.length;s++){const g=n.findIndex(S=>S.el===t[s]);g!==s&&(c=!0),l.set(t[s],g)}c&&t.sort((s,g)=>i(s)-i(g))}),he(B,(t,n)=>{if(t!==n)if(U(),f.value){if(p.value&&le.value>2){const{value:l}=E;t===l-2&&n===1?t=0:t===1&&n===l-2&&(t=l-1)}Ce(t,ae.value)}else J()},{immediate:!0}),he([p,O],()=>void He(()=>{G(B.value)})),he(I,()=>{f.value&&J()},{deep:!0}),he(f,t=>{t?J():(M=!1,ue(H=0))});const Pt=m(()=>({onTouchstartPassive:e.touchable?Xe:void 0,onMousedown:e.draggable?Xe:void 0,onWheel:e.mousewheel?yt:void 0})),kt=m(()=>Object.assign(Object.assign({},Ze(Q,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:le.value,currentIndex:A.value})),zt=m(()=>({total:le.value,currentIndex:A.value,to:Q.to})),Nt={getCurrentIndex:()=>A.value,to:be,prev:ye,next:ie},It=st("Carousel","-carousel",$n,Zt,e,o),Ye=m(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:l,dotColorActive:i,dotColorFocus:c,dotLineWidth:s,dotLineWidthActive:g,arrowColor:S}}=It.value;return{"--n-bezier":t,"--n-dot-color":l,"--n-dot-color-focus":c,"--n-dot-color-active":i,"--n-dot-size":n,"--n-dot-line-width":s,"--n-dot-line-width-active":g,"--n-arrow-color":S}}),W=a?Ft("carousel",void 0,Ye,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:r,slidesElRef:u,slideVNodes:P,duplicatedable:p,userWantsControl:N,autoSlideSize:z,displayIndex:A,realIndex:B,slideStyles:Ae,translateStyle:Se,slidesControlListeners:Pt,handleTransitionEnd:bt,handleResize:St,handleSlideResize:Ct,handleMouseenter:_t,handleMouseleave:Rt,isActive:vt,arrowSlotProps:kt,dotSlotProps:zt},Nt),{cssVars:a?void 0:Ye,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:r,slideStyles:u,dotType:b,dotPlacement:P,slidesControlListeners:R,transitionProps:k={},arrowSlotProps:x,dotSlotProps:f,$slots:{default:p,dots:N,arrow:O}}=this,V=p&&gn(p())||[];let z=Bn(V);return z.length||(z=V.map(h=>_(Dn,null,{default:()=>ot(h)}))),this.duplicatedable&&(z=bn(z)),this.slideVNodes.value=z,this.autoSlideSize&&(z=z.map(h=>_(qe,{onResize:this.handleSlideResize},{default:()=>h}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${P}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,r&&`${o}-carousel--usercontrol`],style:this.cssVars},R,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(qe,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?z.map((h,w)=>_("div",{style:u[w],key:w},Yt(_(Kt,Object.assign({},k),{default:()=>h}),[[Ht,this.isActive(w)]]))):z)}),this.showDots&&f.total>1&&We(N,f,()=>[_(kn,{key:b+P,total:f.total,currentIndex:f.currentIndex,dotType:b,trigger:this.trigger,keyboard:this.keyboard})]),a&&We(O,x,()=>[_(In,null)]))}});function Bn(e){return e.reduce((o,a)=>(Tn(a)&&o.push(a),o),[])}const Mn=q({__name:"CBanner",setup(e){const o=rt();return(a,r)=>C(o).banners.length>0?(X(),ne(C(it),{key:0,size:"small",bordered:!1},{default:L(()=>[D(C(An),{autoplay:""},{default:L(()=>[(X(!0),oe(Ve,null,$e(C(o).banners,u=>(X(),oe("div",{class:"h-48 md:h-56 lg:h-64 xl:h-72 w-full inline-block rounded-md overflow-hidden",key:u.src},[D(C(pn),{"object-fit":"cover",width:"100%",height:"100%",class:"w-full h-full",src:u.src,alt:u.alt},null,8,["src","alt"])]))),128))]),_:1})]),_:1})):Wt("",!0)}}),jn={class:"text-center"},Ln={key:1,class:"text-center"},nt=20,On=100,to=q({__name:"PHome",props:{label:{default:""}},setup(e){const{t:o}=qt(),a=rt(),r=e,u=$([]),b=$(r.label),P=an({state:"loading",fail:()=>o("component.cLoading.fail",{name:o("page.home.subtitle")})}),R=$(!1);let k=1;async function x(h,w){P.value="loading";const[I,y]=await tn(nn.qIssuePage({state:"all",page:h.toString(),labels:fn.label.docLabel+","+w,per_page:nt.toString()}));if(I){P.value="fail";return}(y.data.length==0||y.data.length<nt)&&(R.value=!0),u.value.push(...y.data),P.value="success"}let f;function p(h){f&&clearTimeout(f);function w(){x(k+h,b.value).then(()=>{k+=h})}f=setTimeout(w,500)}p(0);const N=Gt();function O(h){N.push({path:"/",query:{label:h.name}})}let V=0;function z(){const h=document.documentElement.scrollTop,w=document.documentElement.clientHeight,I=document.documentElement.scrollHeight,y=h+w+On;V<h&&y>=I&&!R.value&&p(1)}return Ke(()=>{V=document.documentElement.scrollTop}),Jt(()=>{window.scrollTo(0,V),window.addEventListener("scroll",z)}),Ke(()=>{window.removeEventListener("scroll",z)}),(h,w)=>{const I=Qt("RouterLink");return X(),ne(C(Ie),{vertical:""},{default:L(()=>[D(Mn),(X(!0),oe(Ve,null,$e(u.value,y=>(X(),ne(C(it),{key:y.number,size:"small",bordered:!1},{default:L(()=>[D(C(Ie),{vertical:"",size:"small"},{default:L(()=>[D(I,{to:`/doc/${y.number}`,class:"text-2xl font-bold hover:text-green-300"},{default:L(()=>[ze(Ne(y.title),1)]),_:2},1032,["to"]),D(C(Ie),{align:"center",size:"small"},{default:L(()=>[D(C(cn),{time:new Date(y.updated_at),type:"relative"},null,8,["time"]),(X(!0),oe(Ve,null,$e(C(on)(y.labels),Y=>(X(),ne(un,{key:Y.id,"hidden-des":!0,label:Y,onClick:ae=>O(Y)},null,8,["label","onClick"]))),128)),D(dn,{reactions:y.reactions},null,8,["reactions"])]),_:2},1024)]),_:2},1024),D(C(rn),{text:y.body,id:y.number,theme:C(a).theme.markdown},null,8,["text","id","theme"])]),_:2},1024))),128)),D(C(ln),{state:C(P)},{fail:L(()=>[en("div",jn,[D(C(Ue),{onClick:w[0]||(w[0]=y=>p(0)),class:"mx-auto"},{default:L(()=>[ze(Ne(C(o)("comment.button.retry")),1)]),_:1})])]),default:L(()=>[R.value?(X(),ne(C(sn),{key:0,context:C(o)("component.cOver.context")},null,8,["context"])):(X(),oe("div",Ln,[D(C(Ue),{onClick:w[1]||(w[1]=y=>p(1)),class:"mx-auto"},{default:L(()=>[ze(Ne(C(o)("comment.button.more")),1)]),_:1})]))]),_:1},8,["state"])]),_:1})}}});export{to as default};
