import{az as It,aA as Tt,a7 as nt,G as $t,x as Dt,ab as Vt,K as Et,d as W,s as xe,a as D,aB as At,i as _,aC as Mt,g as m,c as ot,b as at,l as Bt,p as d,q as L,C as v,E as Lt,R as jt,aD as Ot,w as he,t as st,A as Xt,Y as Ft,Z as Yt,T as Ht,aE as Kt,n as He,aF as Ut,ar as lt,ao as y,af as X,ai as ne,ah as j,ad as $,ag as oe,av as De,S as Ve,al as Zt,aq as qt,as as Wt,e as Gt,aG as Jt,ae as Qt,am as en,ap as ze,an as Ne,aw as tn,ax as nn,aH as on}from"./index-ea45d735.js";import{w as an,N as Ke,_ as sn}from"./loading-59d95cef.js";import{_ as ln}from"./COver.vue_vue_type_script_setup_true_lang-53854857.js";import{C as rn}from"./CMarkdown-bffc9b3c.js";import{_ as un}from"./CLabel.vue_vue_type_script_setup_true_lang-e84e849e.js";import{N as cn,_ as dn}from"./CReactions.vue_vue_type_script_setup_true_lang-fa6d89cc.js";import{a as fn}from"../app.config.js";import{c as vn,N as pn}from"./Image-2f0d3fff.js";import{q as Ue,u as hn,m as mn,o as ee,a as te}from"./Popover-e766224a.js";import{j as gn,b as Ze,N as rt,h as Ie}from"./Space-7d047fb2.js";import{V as qe}from"./VResizeObserver-c8c4cc7d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-locale-79721acc.js";function xn(e){return It(Tt(e).toLowerCase())}var bn=vn(function(e,o,a){return o=o.toLowerCase(),e+(a?xn(o):o)});const We=bn;function wn(e){const{length:o}=e;return o>1&&(e.push(Ge(e[0],0,"append")),e.unshift(Ge(e[o-1],o-1,"prepend"))),e}function Ge(e,o,a){return nt(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Je(e,o,a){return a?e===0?o-3:e===o-1?0:e-1:e}function Te(e,o){return o?e+1:e}function yn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function Sn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function Cn(e,o){return o&&e>3?e-2:e}function Qe(e){return window.TouchEvent&&e instanceof window.TouchEvent}function et(e,o){let{offsetWidth:a,offsetHeight:r}=e;if(o){const u=getComputedStyle(e);a=a-parseFloat(u.getPropertyValue("padding-left"))-parseFloat(u.getPropertyValue("padding-right")),r=r-parseFloat(u.getPropertyValue("padding-top"))-parseFloat(u.getPropertyValue("padding-bottom"))}return{width:a,height:r}}function me(e,o,a){return e<o?o:e>a?a:e}function _n(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,r,,u="ms"]=a;return Number(r)*(u==="ms"?1:1e3)}return 0}const it=Et("n-carousel-methods"),Rn=e=>{$t(it,e)},Ee=(e="unknown",o="component")=>{const a=Dt(it);return a||Vt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a},kn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Pn=W({name:"CarouselDots",props:kn,setup(e){const{mergedClsPrefixRef:o}=xe(e),a=D([]),r=Ee();function u(x,f){switch(x.key){case"Enter":case" ":x.preventDefault(),r.to(f);return}e.keyboard&&R(x)}function S(x){e.trigger==="hover"&&r.to(x)}function k(x){e.trigger==="click"&&r.to(x)}function R(x){var f;if(x.shiftKey||x.altKey||x.ctrlKey||x.metaKey)return;const p=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(p==="input"||p==="textarea")return;const{code:N}=x,O=N==="PageUp"||N==="ArrowUp",V=N==="PageDown"||N==="ArrowDown",z=N==="PageUp"||N==="ArrowRight",h=N==="PageDown"||N==="ArrowLeft",b=r.isVertical(),I=b?O:z,w=b?V:h;!I&&!w||(x.preventDefault(),I&&!r.isNextDisabled()?(r.next(),P(r.currentIndexRef.value)):w&&!r.isPrevDisabled()&&(r.prev(),P(r.currentIndexRef.value)))}function P(x){var f;(f=a.value[x])===null||f===void 0||f.focus()}return At(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:u,handleMouseenter:S,handleClick:k}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Mt(this.total,a=>{const r=a===this.currentIndex;return _("div",{"aria-selected":r,ref:u=>o.push(u),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:u=>{this.handleKeydown(u,a)}})}))}}),zn=_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Nn=_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),In=W({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=xe(e),{isVertical:a,isPrevDisabled:r,isNextDisabled:u,prev:S,next:k}=Ee();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:r,isNextDisabled:u,prev:S,next:k}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},zn),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Nn))}}),ge="CarouselItem",Tn=e=>{var o;return((o=e.type)===null||o===void 0?void 0:o.name)===ge},$n=W({name:ge,setup(e){const{mergedClsPrefixRef:o}=xe(e),a=Ee(We(ge),`n-${We(ge)}`),r=D(),u=m(()=>{const{value:f}=r;return f?a.getSlideIndex(f):-1}),S=m(()=>a.isPrev(u.value)),k=m(()=>a.isNext(u.value)),R=m(()=>a.isActive(u.value)),P=m(()=>a.getSlideStyle(u.value));ot(()=>{a.addSlide(r.value)}),at(()=>{a.removeSlide(r.value)});function x(f){const{value:p}=u;p!==void 0&&(a==null||a.onCarouselItemClick(p,f))}return{mergedClsPrefix:o,selfElRef:r,isPrev:S,isNext:k,isActive:R,index:u,style:P,handleClick:x}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:r,isNext:u,isActive:S,index:k,style:R}=this,P=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:S,[`${a}-carousel__slide--prev`]:r,[`${a}-carousel__slide--next`]:u}];return _("div",{ref:"selfElRef",class:P,role:"option",tabindex:"-1","data-index":k,"aria-hidden":!S,style:R,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:r,isNext:u,isActive:S,index:k}))}}),Dn=Bt("carousel",`
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
 `,[L("&:focus",`
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
 `,[L("&:focus",`
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
 `,[L("svg",`
 height: 1em;
 width: 1em;
 `),L("&:hover",`
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
 `)])])]),v("usercontrol",[d("slides",[L(">",[L("div",`
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
 `,[L("> *:first-child",`
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
 `,[L("> *:first-child",`
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
 `,[L("> *:first-child",`
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
 `,[L("> *:first-child",`
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
 `)])])]),Vn=["transitionDuration","transitionTimingFunction"],En=Object.assign(Object.assign({},st.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let $e=!1;const An=W({name:"Carousel",props:En,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=xe(e),r=D(null),u=D(null),S=D([]),k={value:[]},R=m(()=>e.direction==="vertical"),P=m(()=>R.value?"height":"width"),x=m(()=>R.value?"bottom":"right"),f=m(()=>e.effect==="slide"),p=m(()=>e.loop&&e.slidesPerView===1&&f.value),N=m(()=>e.effect==="custom"),O=m(()=>!f.value||e.centeredSlides?1:e.slidesPerView),V=m(()=>N.value?1:e.slidesPerView),z=m(()=>O.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),h=D({width:0,height:0}),b=m(()=>{const{value:t}=S;if(!t.length)return[];const{value:n}=z;if(n)return t.map(C=>et(C));const{value:s}=V,{value:i}=h,{value:c}=P;let l=i[c];if(s!=="auto"){const{spaceBetween:C}=e,T=l-(s-1)*C,pe=1/Math.max(1,s);l=T*pe}const g=Object.assign(Object.assign({},i),{[c]:l});return t.map(()=>g)}),I=m(()=>{const{value:t}=b;if(!t.length)return[];const{centeredSlides:n,spaceBetween:s}=e,{value:i}=P,{[i]:c}=h.value;let l=0;return t.map(({[i]:g})=>{let C=l;return n&&(C+=(g-c)/2),l+=g+s,C})}),w=D(!1),Y=m(()=>{const{transitionStyle:t}=e;return t?Ue(t,Vn):{}}),ae=m(()=>N.value?0:_n(Y.value.transitionDuration)),Ae=m(()=>{const{value:t}=S;if(!t.length)return[];const n=!(z.value||V.value===1),s=g=>{if(n){const{value:C}=P;return{[C]:`${b.value[g][C]}px`}}};if(N.value)return t.map((g,C)=>s(C));const{effect:i,spaceBetween:c}=e,{value:l}=x;return t.reduce((g,C,T)=>{const pe=Object.assign(Object.assign({},s(T)),{[`margin-${l}`]:`${c}px`});return g.push(pe),w.value&&(i==="fade"||i==="card")&&Object.assign(pe,Y.value),g},[])}),E=m(()=>{const{value:t}=O,{length:n}=S.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:s}=b,{length:i}=s;if(!i)return n;const{value:c}=I,{value:l}=P,g=h.value[l];let C=s[s.length-1][l],T=i;for(;T>1&&C<g;)T--,C+=c[T]-c[T-1];return me(T+1,1,i)}}),se=m(()=>Cn(E.value,p.value)),ut=Te(e.defaultIndex,p.value),be=D(Je(ut,E.value,p.value)),A=hn(Lt(e,"currentIndex"),be),M=m(()=>Te(A.value,p.value));function G(t){var n,s;t=me(t,0,E.value-1);const i=Je(t,E.value,p.value),{value:c}=A;i!==A.value&&(be.value=i,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,i,c),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,i,c))}function le(t=M.value){return yn(t,E.value,e.loop)}function re(t=M.value){return Sn(t,E.value,e.loop)}function ct(t){const n=K(t);return n!==null&&le()===n}function dt(t){const n=K(t);return n!==null&&re()===n}function Me(t){return M.value===K(t)}function ft(t){return A.value===t}function Be(){return le()===null}function Le(){return re()===null}function we(t){const n=me(Te(t,p.value),0,E.value);(t!==A.value||n!==M.value)&&G(n)}function ye(){const t=le();t!==null&&G(t)}function ie(){const t=re();t!==null&&G(t)}function vt(){(!B||!p.value)&&ye()}function pt(){(!B||!p.value)&&ie()}let B=!1,H=0;const Se=D({});function ue(t,n=0){Se.value=Object.assign({},Y.value,{transform:R.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function J(t=0){f.value?Ce(M.value,t):H!==0&&(!B&&t>0&&(B=!0),ue(H=0,t))}function Ce(t,n){const s=je(t);s!==H&&n>0&&(B=!0),H=je(M.value),ue(s,n)}function je(t){let n;return t>=E.value-1?n=Oe():n=I.value[t]||0,n}function Oe(){if(O.value==="auto"){const{value:t}=P,{[t]:n}=h.value,{value:s}=I,i=s[s.length-1];let c;if(i===void 0)c=n;else{const{value:l}=b;c=i+l[l.length-1][t]}return c-n}else{const{value:t}=I;return t[E.value-1]||0}}const Q={currentIndexRef:A,to:we,prev:vt,next:pt,isVertical:()=>R.value,isHorizontal:()=>!R.value,isPrev:ct,isNext:dt,isActive:Me,isPrevDisabled:Be,isNextDisabled:Le,getSlideIndex:K,getSlideStyle:gt,addSlide:ht,removeSlide:mt,onCarouselItemClick:xt};Rn(Q);function ht(t){t&&S.value.push(t)}function mt(t){if(!t)return;const n=K(t);n!==-1&&S.value.splice(n,1)}function K(t){return typeof t=="number"?t:t?S.value.indexOf(t):-1}function gt(t){const n=K(t);if(n!==-1){const s=[Ae.value[n]],i=Q.isPrev(n),c=Q.isNext(n);return i&&s.push(e.prevSlideStyle||""),c&&s.push(e.nextSlideStyle||""),Kt(s)}}function xt(t,n){let s=!B&&!fe&&!Pe;e.effect==="card"&&s&&!Me(t)&&(we(t),s=!1),s||(n.preventDefault(),n.stopPropagation())}let ce=null;function de(){ce&&(clearInterval(ce),ce=null)}function U(){de(),!e.autoplay||se.value<2||(ce=window.setInterval(ie,e.interval))}let _e=0,Re=0,F=0,ke=0,fe=!1,Pe=!1;function Xe(t){var n;if($e||!(!((n=u.value)===null||n===void 0)&&n.contains(mn(t))))return;$e=!0,fe=!0,Pe=!1,ke=Date.now(),de(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=Qe(t)?t.touches[0]:t;R.value?Re=s.clientY:_e=s.clientX,e.touchable&&(ee("touchmove",document,ve),ee("touchend",document,Z),ee("touchcancel",document,Z)),e.draggable&&(ee("mousemove",document,ve),ee("mouseup",document,Z))}function ve(t){const{value:n}=R,{value:s}=P,i=Qe(t)?t.touches[0]:t,c=n?i.clientY-Re:i.clientX-_e,l=h.value[s];F=me(c,-l,l),t.cancelable&&t.preventDefault(),f.value&&ue(H-F,0)}function Z(){const{value:t}=M;let n=t;if(!B&&F!==0&&f.value){const s=H-F,i=[...I.value.slice(0,E.value-1),Oe()];let c=null;for(let l=0;l<i.length;l++){const g=Math.abs(i[l]-s);if(c!==null&&c<g)break;c=g,n=l}}if(n===t){const s=Date.now()-ke,{value:i}=P,c=h.value[i];F>c/2||F/s>.4?n=le(t):(F<-c/2||F/s<-.4)&&(n=re(t))}n!==null&&n!==t?(Pe=!0,G(n),He(()=>{(!p.value||be.value!==A.value)&&J(ae.value)})):J(ae.value),Fe(),U()}function Fe(){fe&&($e=!1),fe=!1,_e=0,Re=0,F=0,ke=0,te("touchmove",document,ve),te("touchend",document,Z),te("touchcancel",document,Z),te("mousemove",document,ve),te("mouseup",document,Z)}function bt(){if(f.value&&B){const{value:t}=M;Ce(t,0)}else U();f.value&&(Se.value.transitionDuration="0ms"),B=!1}function wt(t){if(t.preventDefault(),B)return;let{deltaX:n,deltaY:s}=t;t.shiftKey&&!n&&(n=s);const i=-1,c=1,l=(n||s)>0?c:i;let g=0,C=0;R.value?C=l:g=l;const T=10;(C*s>=T||g*n>=T)&&(l===c&&!Le()?ie():l===i&&!Be()&&ye())}function yt(){h.value=et(r.value,!0),U()}function St(){var t,n;z.value&&((n=(t=b.effect).scheduler)===null||n===void 0||n.call(t),b.effect.run())}function Ct(){e.autoplay&&de()}function _t(){e.autoplay&&U()}ot(()=>{jt(U),requestAnimationFrame(()=>w.value=!0)}),at(()=>{Fe(),de()}),Ot(()=>{const{value:t}=S,{value:n}=k,s=new Map,i=l=>s.has(l)?s.get(l):-1;let c=!1;for(let l=0;l<t.length;l++){const g=n.findIndex(C=>C.el===t[l]);g!==l&&(c=!0),s.set(t[l],g)}c&&t.sort((l,g)=>i(l)-i(g))}),he(M,(t,n)=>{if(t!==n)if(U(),f.value){if(p.value&&se.value>2){const{value:s}=E;t===s-2&&n===1?t=0:t===1&&n===s-2&&(t=s-1)}Ce(t,ae.value)}else J()},{immediate:!0}),he([p,O],()=>void He(()=>{G(M.value)})),he(I,()=>{f.value&&J()},{deep:!0}),he(f,t=>{t?J():(B=!1,ue(H=0))});const Rt=m(()=>({onTouchstartPassive:e.touchable?Xe:void 0,onMousedown:e.draggable?Xe:void 0,onWheel:e.mousewheel?wt:void 0})),kt=m(()=>Object.assign(Object.assign({},Ue(Q,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:se.value,currentIndex:A.value})),Pt=m(()=>({total:se.value,currentIndex:A.value,to:Q.to})),zt={getCurrentIndex:()=>A.value,to:we,prev:ye,next:ie},Nt=st("Carousel","-carousel",Dn,Ut,e,o),Ye=m(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:s,dotColorActive:i,dotColorFocus:c,dotLineWidth:l,dotLineWidthActive:g,arrowColor:C}}=Nt.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":c,"--n-dot-color-active":i,"--n-dot-size":n,"--n-dot-line-width":l,"--n-dot-line-width-active":g,"--n-arrow-color":C}}),q=a?Xt("carousel",void 0,Ye,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:r,slidesElRef:u,slideVNodes:k,duplicatedable:p,userWantsControl:N,autoSlideSize:z,displayIndex:A,realIndex:M,slideStyles:Ae,translateStyle:Se,slidesControlListeners:Rt,handleTransitionEnd:bt,handleResize:yt,handleSlideResize:St,handleMouseenter:Ct,handleMouseleave:_t,isActive:ft,arrowSlotProps:kt,dotSlotProps:Pt},zt),{cssVars:a?void 0:Ye,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:r,slideStyles:u,dotType:S,dotPlacement:k,slidesControlListeners:R,transitionProps:P={},arrowSlotProps:x,dotSlotProps:f,$slots:{default:p,dots:N,arrow:O}}=this,V=p&&gn(p())||[];let z=Mn(V);return z.length||(z=V.map(h=>_($n,null,{default:()=>nt(h)}))),this.duplicatedable&&(z=wn(z)),this.slideVNodes.value=z,this.autoSlideSize&&(z=z.map(h=>_(qe,{onResize:this.handleSlideResize},{default:()=>h}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${k}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,r&&`${o}-carousel--usercontrol`],style:this.cssVars},R,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(qe,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?z.map((h,b)=>_("div",{style:u[b],key:b},Ft(_(Ht,Object.assign({},P),{default:()=>h}),[[Yt,this.isActive(b)]]))):z)}),this.showDots&&f.total>1&&Ze(N,f,()=>[_(Pn,{key:S+k,total:f.total,currentIndex:f.currentIndex,dotType:S,trigger:this.trigger,keyboard:this.keyboard})]),a&&Ze(O,x,()=>[_(In,null)]))}});function Mn(e){return e.reduce((o,a)=>(Tn(a)&&o.push(a),o),[])}const Bn=W({__name:"CBanner",setup(e){const o=lt();return(a,r)=>y(o).banners.length>0?(X(),ne(y(rt),{key:0,size:"small",bordered:!1},{default:j(()=>[$(y(An),{autoplay:""},{default:j(()=>[(X(!0),oe(Ve,null,De(y(o).banners,u=>(X(),oe("div",{class:"border border-transparent h-48 md:h-56 lg:h-64 xl:h-72 w-full inline-block rounded-md overflow-hidden",key:u.src},[$(y(pn),{"object-fit":"cover",width:"100%",height:"100%",class:"w-full h-full",src:u.src,alt:u.alt},null,8,["src","alt"])]))),128))]),_:1})]),_:1})):Zt("",!0)}}),Ln={class:"text-center"},jn={key:1,class:"text-center"},tt=20,On=100,to=W({__name:"PHome",props:{label:{default:""}},setup(e){const{t:o}=qt(),a=lt(),r=e,u=D([]),S=D(r.label),k=an({state:"loading",fail:()=>o("component.cLoading.fail",{name:o("page.home.subtitle")})}),R=D(!1);let P=1;async function x(h,b){k.value="loading";const[I,w]=await tn(nn.qIssuePage({state:"all",page:h.toString(),labels:fn.label.docLabel+","+b,per_page:tt.toString()}));if(I){k.value="fail";return}(w.data.length==0||w.data.length<tt)&&(R.value=!0),u.value.push(...w.data),k.value="success"}let f;function p(h){f&&clearTimeout(f);function b(){x(P+h,S.value).then(()=>{P+=h})}f=setTimeout(b,500)}p(0);const N=Wt();function O(h){N.push({path:"/",query:{label:h.name}})}let V=0;function z(){const h=document.documentElement.scrollTop,b=document.documentElement.clientHeight,I=document.documentElement.scrollHeight,w=h+b+On;V<h&&w>=I&&!R.value&&p(1)}return Gt(()=>{window.scrollTo(0,V),window.addEventListener("scroll",z)}),Jt(()=>{V=document.documentElement.scrollTop,window.removeEventListener("scroll",z)}),(h,b)=>{const I=Qt("RouterLink");return X(),ne(y(Ie),{vertical:""},{default:j(()=>[$(Bn),(X(!0),oe(Ve,null,De(u.value,w=>(X(),ne(y(rt),{key:w.number,size:"small",bordered:!1},{default:j(()=>[$(y(Ie),{vertical:"",size:"small"},{default:j(()=>[$(I,{to:`/doc/${w.number}`,class:"text-2xl font-bold dark:text-green-300 text-orange-500"},{default:j(()=>[ze(Ne(w.title),1)]),_:2},1032,["to"]),$(y(Ie),{align:"center",size:"small"},{default:j(()=>[$(y(cn),{time:new Date(w.updated_at),type:"relative"},null,8,["time"]),(X(!0),oe(Ve,null,De(y(on)(w.labels),Y=>(X(),ne(un,{key:Y.id,"hidden-des":!0,label:Y,onClick:ae=>O(Y)},null,8,["label","onClick"]))),128)),$(dn,{reactions:w.reactions},null,8,["reactions"])]),_:2},1024)]),_:2},1024),$(y(rn),{onMoreClick:Y=>y(N).push({path:`/doc/${w.number}`}),"use-more":!0,"more-btn-text":y(o)("comment.button.more"),text:w.body,id:w.number,theme:y(a).theme.markdown},null,8,["onMoreClick","more-btn-text","text","id","theme"])]),_:2},1024))),128)),$(y(sn),{state:y(k)},{fail:j(()=>[en("div",Ln,[$(y(Ke),{onClick:b[0]||(b[0]=w=>p(0)),class:"mx-auto"},{default:j(()=>[ze(Ne(y(o)("comment.button.retry")),1)]),_:1})])]),default:j(()=>[R.value?(X(),ne(y(ln),{key:0,context:y(o)("component.cOver.context")},null,8,["context"])):(X(),oe("div",jn,[$(y(Ke),{onClick:b[1]||(b[1]=w=>p(1)),class:"mx-auto"},{default:j(()=>[ze(Ne(y(o)("comment.button.more")),1)]),_:1})]))]),_:1},8,["state"])]),_:1})}}});export{to as default};
