import{aC as Pt,aD as kt,a5 as qe,p as zt,i as Nt,ab as It,P as Tt,e as H,C as ge,r as M,aE as Dt,k as S,aF as Vt,d as h,g as Ge,b as Je,v as $t,x as d,z as $,y as f,t as Et,M as At,aG as Bt,w as de,B as Qe,F as Mt,U as jt,V as Lt,T as Ot,n as Oe,aH as Xt,aI as Ft,aJ as Ht,aj as Kt,ag as L,am as he,al as O,ak as I,aq as z,ai as et,as as Yt,aA as Ut,au as Wt,ah as ve,O as tt,ay as nt,ap as Zt,aw as qt,h as Gt,aK as Jt,az as Qt}from"./index-Bwq5MEXp.js";import{a as en}from"../app.config.aGxtwYiP.js";import{_ as tn}from"./CTags.vue_vue_type_script_setup_true_lang-BKXpx5Ux.js";import{C as nn}from"./CMarkdown-DJ-dkTLU.js";import{_ as on}from"./CReactions.vue_vue_type_script_setup_true_lang-Cj22IlZ8.js";import{N as an}from"./Time-CKwwyGyZ.js";import{b as Xe,N as ot,_ as sn}from"./_plugin-vue_export-helper-CHINyzN0.js";import{f as rn,N as me}from"./Space-BVa_0GKn.js";import{c as ln,N as un}from"./Image-B4hZPXIT.js";import{u as cn,V as Fe,w as He,a as Q,p as dn,o as ee}from"./Tooltip-Doll0b94.js";import{_ as fn}from"./CLoadPages.vue_vue_type_script_setup_true_lang-DlIbzpFG.js";import"./label-DieEFeFB.js";import"./Tag-CaA0DMet.js";import"./CLink.vue_vue_type_script_setup_true_lang-D9lmZ61M.js";import"./Empty-DNsO3Sga.js";function vn(e){return Pt(kt(e).toLowerCase())}var Ke=ln(function(e,o,a){return o=o.toLowerCase(),e+(a?vn(o):o)});function pn(e){const{length:o}=e;return o>1&&(e.push(Ye(e[0],0,"append")),e.unshift(Ye(e[o-1],o-1,"prepend"))),e}function Ye(e,o,a){return qe(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Ue(e,o,a){return o===1?0:a?e===0?o-3:e===o-1?0:e-1:e}function Ne(e,o){return o?e+1:e}function hn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function mn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function gn(e,o){return o&&e>3?e-2:e}function We(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Ze(e,o){let{offsetWidth:a,offsetHeight:r}=e;if(o){const i=getComputedStyle(e);a=a-Number.parseFloat(i.getPropertyValue("padding-left"))-Number.parseFloat(i.getPropertyValue("padding-right")),r=r-Number.parseFloat(i.getPropertyValue("padding-top"))-Number.parseFloat(i.getPropertyValue("padding-bottom"))}return{width:a,height:r}}function fe(e,o,a){return e<o?o:e>a?a:e}function xn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,r,,i="ms"]=a;return Number(r)*(i==="ms"?1:1e3)}return 0}const at=Tt("n-carousel-methods");function bn(e){zt(at,e)}function Te(e="unknown",o="component"){const a=Nt(at);return a||It(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a}const wn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},yn=H({name:"CarouselDots",props:wn,setup(e){const{mergedClsPrefixRef:o}=ge(e),a=M([]),r=Te();function i(v,p){switch(v.key){case"Enter":case" ":v.preventDefault(),r.to(p);return}e.keyboard&&x(v)}function m(v){e.trigger==="hover"&&r.to(v)}function C(v){e.trigger==="click"&&r.to(v)}function x(v){var p;if(v.shiftKey||v.altKey||v.ctrlKey||v.metaKey)return;const y=(p=document.activeElement)===null||p===void 0?void 0:p.nodeName.toLowerCase();if(y==="input"||y==="textarea")return;const{code:R}=v,j=R==="PageUp"||R==="ArrowUp",X=R==="PageDown"||R==="ArrowDown",_=R==="PageUp"||R==="ArrowRight",P=R==="PageDown"||R==="ArrowLeft",k=r.isVertical(),A=k?j:_,Z=k?X:P;!A&&!Z||(v.preventDefault(),A&&!r.isNextDisabled()?(r.next(),b(r.currentIndexRef.value)):Z&&!r.isPrevDisabled()&&(r.prev(),b(r.currentIndexRef.value)))}function b(v){var p;(p=a.value[v])===null||p===void 0||p.focus()}return Dt(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:i,handleMouseenter:m,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return S("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Vt(this.total,a=>{const r=a===this.currentIndex;return S("div",{"aria-selected":r,ref:i=>o.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:i=>{this.handleKeydown(i,a)}})}))}}),Sn=S("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},S("g",{fill:"none"},S("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Cn=S("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},S("g",{fill:"none"},S("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),_n=H({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=ge(e),{isVertical:a,isPrevDisabled:r,isNextDisabled:i,prev:m,next:C}=Te();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:r,isNextDisabled:i,prev:m,next:C}},render(){const{mergedClsPrefix:e}=this;return S("div",{class:`${e}-carousel__arrow-group`},S("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Sn),S("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Cn))}}),pe="CarouselItem";function Rn(e){var o;return((o=e.type)===null||o===void 0?void 0:o.name)===pe}const Pn=H({name:pe,setup(e){const{mergedClsPrefixRef:o}=ge(e),a=Te(Ke(pe),`n-${Ke(pe)}`),r=M(),i=h(()=>{const{value:p}=r;return p?a.getSlideIndex(p):-1}),m=h(()=>a.isPrev(i.value)),C=h(()=>a.isNext(i.value)),x=h(()=>a.isActive(i.value)),b=h(()=>a.getSlideStyle(i.value));Ge(()=>{a.addSlide(r.value)}),Je(()=>{a.removeSlide(r.value)});function v(p){const{value:y}=i;y!==void 0&&(a==null||a.onCarouselItemClick(y,p))}return{mergedClsPrefix:o,selfElRef:r,isPrev:m,isNext:C,isActive:x,index:i,style:b,handleClick:v}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:r,isNext:i,isActive:m,index:C,style:x}=this,b=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:m,[`${a}-carousel__slide--prev`]:r,[`${a}-carousel__slide--next`]:i}];return S("div",{ref:"selfElRef",class:b,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!m,style:x,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:r,isNext:i,isActive:m,index:C}))}}),kn=$t("carousel",`
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
 `,[$("> img",`
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
 `,[$("&:focus",`
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
 `,[$("&:focus",`
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
 `,[$("svg",`
 height: 1em;
 width: 1em;
 `),$("&:hover",`
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
 `)])])]),f("usercontrol",[d("slides",[$(">",[$("div",`
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
 `,[$("> *:first-child",`
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
 `,[$("> *:first-child",`
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
 `,[$("> *:first-child",`
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
 `,[$("> *:first-child",`
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
 `)])])]),zn=["transitionDuration","transitionTimingFunction"],Nn=Object.assign(Object.assign({},Qe.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ie=!1;const In=H({name:"Carousel",props:Nn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=ge(e),r=M(null),i=M(null),m=M([]),C={value:[]},x=h(()=>e.direction==="vertical"),b=h(()=>x.value?"height":"width"),v=h(()=>x.value?"bottom":"right"),p=h(()=>e.effect==="slide"),y=h(()=>e.loop&&e.slidesPerView===1&&p.value),R=h(()=>e.effect==="custom"),j=h(()=>!p.value||e.centeredSlides?1:e.slidesPerView),X=h(()=>R.value?1:e.slidesPerView),_=h(()=>j.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),P=M({width:0,height:0}),k=h(()=>{const{value:t}=m;if(!t.length)return[];const{value:n}=_;if(n)return t.map(w=>Ze(w));const{value:s}=X,{value:u}=P,{value:c}=b;let l=u[c];if(s!=="auto"){const{spaceBetween:w}=e,N=l-(s-1)*w,ce=1/Math.max(1,s);l=N*ce}const g=Object.assign(Object.assign({},u),{[c]:l});return t.map(()=>g)}),A=h(()=>{const{value:t}=k;if(!t.length)return[];const{centeredSlides:n,spaceBetween:s}=e,{value:u}=b,{[u]:c}=P.value;let l=0;return t.map(({[u]:g})=>{let w=l;return n&&(w+=(g-c)/2),l+=g+s,w})}),Z=M(!1),xe=h(()=>{const{transitionStyle:t}=e;return t?He(t,zn):{}}),be=h(()=>R.value?0:xn(xe.value.transitionDuration)),De=h(()=>{const{value:t}=m;if(!t.length)return[];const n=!(_.value||X.value===1),s=g=>{if(n){const{value:w}=b;return{[w]:`${k.value[g][w]}px`}}};if(R.value)return t.map((g,w)=>s(w));const{effect:u,spaceBetween:c}=e,{value:l}=v;return t.reduce((g,w,N)=>{const ce=Object.assign(Object.assign({},s(N)),{[`margin-${l}`]:`${c}px`});return g.push(ce),Z.value&&(u==="fade"||u==="card")&&Object.assign(ce,xe.value),g},[])}),T=h(()=>{const{value:t}=j,{length:n}=m.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:s}=k,{length:u}=s;if(!u)return n;const{value:c}=A,{value:l}=b,g=P.value[l];let w=s[s.length-1][l],N=u;for(;N>1&&w<g;)N--,w+=c[N]-c[N-1];return fe(N+1,1,u)}}),te=h(()=>gn(T.value,y.value)),st=Ne(e.defaultIndex,y.value),we=M(Ue(st,T.value,y.value)),E=cn(Et(e,"currentIndex"),we),D=h(()=>Ne(E.value,y.value));function q(t){var n,s;t=fe(t,0,T.value-1);const u=Ue(t,T.value,y.value),{value:c}=E;u!==E.value&&(we.value=u,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,u,c),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,u,c))}function ne(t=D.value){return hn(t,T.value,e.loop)}function oe(t=D.value){return mn(t,T.value,e.loop)}function rt(t){const n=K(t);return n!==null&&ne()===n}function lt(t){const n=K(t);return n!==null&&oe()===n}function Ve(t){return D.value===K(t)}function it(t){return E.value===t}function $e(){return ne()===null}function Ee(){return oe()===null}function ye(t){const n=fe(Ne(t,y.value),0,T.value);(t!==E.value||n!==D.value)&&q(n)}function Se(){const t=ne();t!==null&&q(t)}function ae(){const t=oe();t!==null&&q(t)}let V=!1;function ut(){(!V||!y.value)&&Se()}function ct(){(!V||!y.value)&&ae()}let F=0;const Ce=M({});function se(t,n=0){Ce.value=Object.assign({},xe.value,{transform:x.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function G(t=0){p.value?_e(D.value,t):F!==0&&(!V&&t>0&&(V=!0),se(F=0,t))}function _e(t,n){const s=Ae(t);s!==F&&n>0&&(V=!0),F=Ae(D.value),se(s,n)}function Ae(t){let n;return t>=T.value-1?n=Be():n=A.value[t]||0,n}function Be(){if(j.value==="auto"){const{value:t}=b,{[t]:n}=P.value,{value:s}=A,u=s[s.length-1];let c;if(u===void 0)c=n;else{const{value:l}=k;c=u+l[l.length-1][t]}return c-n}else{const{value:t}=A;return t[T.value-1]||0}}const J={currentIndexRef:E,to:ye,prev:ut,next:ct,isVertical:()=>x.value,isHorizontal:()=>!x.value,isPrev:rt,isNext:lt,isActive:Ve,isPrevDisabled:$e,isNextDisabled:Ee,getSlideIndex:K,getSlideStyle:vt,addSlide:dt,removeSlide:ft,onCarouselItemClick:pt};bn(J);function dt(t){t&&m.value.push(t)}function ft(t){if(!t)return;const n=K(t);n!==-1&&m.value.splice(n,1)}function K(t){return typeof t=="number"?t:t?m.value.indexOf(t):-1}function vt(t){const n=K(t);if(n!==-1){const s=[De.value[n]],u=J.isPrev(n),c=J.isNext(n);return u&&s.push(e.prevSlideStyle||""),c&&s.push(e.nextSlideStyle||""),Ft(s)}}let Re=0,Pe=0,B=0,ke=0,re=!1,ze=!1;function pt(t,n){let s=!V&&!re&&!ze;e.effect==="card"&&s&&!Ve(t)&&(ye(t),s=!1),s||(n.preventDefault(),n.stopPropagation())}let le=null;function ie(){le&&(clearInterval(le),le=null)}function Y(){ie(),!e.autoplay||te.value<2||(le=window.setInterval(ae,e.interval))}function Me(t){var n;if(Ie||!(!((n=i.value)===null||n===void 0)&&n.contains(dn(t))))return;Ie=!0,re=!0,ze=!1,ke=Date.now(),ie(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=We(t)?t.touches[0]:t;x.value?Pe=s.clientY:Re=s.clientX,e.touchable&&(ee("touchmove",document,ue),ee("touchend",document,U),ee("touchcancel",document,U)),e.draggable&&(ee("mousemove",document,ue),ee("mouseup",document,U))}function ue(t){const{value:n}=x,{value:s}=b,u=We(t)?t.touches[0]:t,c=n?u.clientY-Pe:u.clientX-Re,l=P.value[s];B=fe(c,-l,l),t.cancelable&&t.preventDefault(),p.value&&se(F-B,0)}function U(){const{value:t}=D;let n=t;if(!V&&B!==0&&p.value){const s=F-B,u=[...A.value.slice(0,T.value-1),Be()];let c=null;for(let l=0;l<u.length;l++){const g=Math.abs(u[l]-s);if(c!==null&&c<g)break;c=g,n=l}}if(n===t){const s=Date.now()-ke,{value:u}=b,c=P.value[u];B>c/2||B/s>.4?n=ne(t):(B<-c/2||B/s<-.4)&&(n=oe(t))}n!==null&&n!==t?(ze=!0,q(n),Oe(()=>{(!y.value||we.value!==E.value)&&G(be.value)})):G(be.value),je(),Y()}function je(){re&&(Ie=!1),re=!1,Re=0,Pe=0,B=0,ke=0,Q("touchmove",document,ue),Q("touchend",document,U),Q("touchcancel",document,U),Q("mousemove",document,ue),Q("mouseup",document,U)}function ht(){if(p.value&&V){const{value:t}=D;_e(t,0)}else Y();p.value&&(Ce.value.transitionDuration="0ms"),V=!1}function mt(t){if(t.preventDefault(),V)return;let{deltaX:n,deltaY:s}=t;t.shiftKey&&!n&&(n=s);const u=-1,c=1,l=(n||s)>0?c:u;let g=0,w=0;x.value?w=l:g=l;const N=10;(w*s>=N||g*n>=N)&&(l===c&&!Ee()?ae():l===u&&!$e()&&Se())}function gt(){P.value=Ze(r.value,!0),Y()}function xt(){var t,n;_.value&&((n=(t=k.effect).scheduler)===null||n===void 0||n.call(t),k.effect.run())}function bt(){e.autoplay&&ie()}function wt(){e.autoplay&&Y()}Ge(()=>{At(Y),requestAnimationFrame(()=>Z.value=!0)}),Je(()=>{je(),ie()}),Bt(()=>{const{value:t}=m,{value:n}=C,s=new Map,u=l=>s.has(l)?s.get(l):-1;let c=!1;for(let l=0;l<t.length;l++){const g=n.findIndex(w=>w.el===t[l]);g!==l&&(c=!0),s.set(t[l],g)}c&&t.sort((l,g)=>u(l)-u(g))}),de(D,(t,n)=>{if(t!==n)if(Y(),p.value){if(y.value){const{value:s}=T;te.value>2&&t===s-2&&n===1?t=0:t===1&&n===s-2&&(t=s-1)}_e(t,be.value)}else G()},{immediate:!0}),de([y,j],()=>void Oe(()=>{q(D.value)})),de(A,()=>{p.value&&G()},{deep:!0}),de(p,t=>{t?G():(V=!1,se(F=0))});const yt=h(()=>({onTouchstartPassive:e.touchable?Me:void 0,onMousedown:e.draggable?Me:void 0,onWheel:e.mousewheel?mt:void 0})),St=h(()=>Object.assign(Object.assign({},He(J,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:te.value,currentIndex:E.value})),Ct=h(()=>({total:te.value,currentIndex:E.value,to:J.to})),_t={getCurrentIndex:()=>E.value,to:ye,prev:Se,next:ae},Rt=Qe("Carousel","-carousel",kn,Xt,e,o),Le=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:s,dotColorActive:u,dotColorFocus:c,dotLineWidth:l,dotLineWidthActive:g,arrowColor:w}}=Rt.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":c,"--n-dot-color-active":u,"--n-dot-size":n,"--n-dot-line-width":l,"--n-dot-line-width-active":g,"--n-arrow-color":w}}),W=a?Mt("carousel",void 0,Le,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:r,slidesElRef:i,slideVNodes:C,duplicatedable:y,userWantsControl:R,autoSlideSize:_,realIndex:D,slideStyles:De,translateStyle:Ce,slidesControlListeners:yt,handleTransitionEnd:ht,handleResize:gt,handleSlideResize:xt,handleMouseenter:bt,handleMouseleave:wt,isActive:it,arrowSlotProps:St,dotSlotProps:Ct},_t),{cssVars:a?void 0:Le,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:r,slideStyles:i,dotType:m,dotPlacement:C,slidesControlListeners:x,transitionProps:b={},arrowSlotProps:v,dotSlotProps:p,$slots:{default:y,dots:R,arrow:j}}=this,X=y&&rn(y())||[];let _=Tn(X);return _.length||(_=X.map(P=>S(Pn,null,{default:()=>qe(P)}))),this.duplicatedable&&(_=pn(_)),this.slideVNodes.value=_,this.autoSlideSize&&(_=_.map(P=>S(Fe,{onResize:this.handleSlideResize},{default:()=>P}))),(e=this.onRender)===null||e===void 0||e.call(this),S("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${C}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,r&&`${o}-carousel--usercontrol`],style:this.cssVars},x,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),S(Fe,{onResize:this.handleResize},{default:()=>S("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?_.map((P,k)=>S("div",{style:i[k],key:k},jt(S(Ot,Object.assign({},b),{default:()=>P}),[[Lt,this.isActive(k)]]))):_)}),this.showDots&&p.total>1&&Xe(R,p,()=>[S(yn,{key:m+C,total:p.total,currentIndex:p.currentIndex,dotType:m,trigger:this.trigger,keyboard:this.keyboard})]),a&&Xe(j,v,()=>[S(_n,null)]))}});function Tn(e){return e.reduce((o,a)=>(Rn(a)&&o.push(a),o),[])}const Dn={class:"text-xl dark:text-green-300 text-orange-500"},Vn=H({__name:"CArticleCard",props:{issue:{}},setup(e){const o=e,a=Ht.parseConfig(o.issue.body||"");return(r,i)=>{const m=Kt("RouterLink");return L(),he(m,{to:{name:z(Ut).Article,params:{id:r.issue.number}}},{default:O(()=>[I(z(ot),{bordered:!1},{default:O(()=>[I(z(me),{vertical:!0},{default:O(()=>[et("h1",Dn,Yt(r.issue.title),1),I(z(me),{align:"center"},{default:O(()=>[I(z(an),{time:new Date(r.issue.updated_at),type:"relative"},null,8,["time"]),I(tn,{labels:r.issue.labels},null,8,["labels"]),I(on,{reaction:r.issue.reactions,"issue-url":r.issue.html_url},null,8,["reaction","issue-url"])]),_:1}),I(nn,{id:r.issue.number,content:z(a).excerpt},null,8,["id","content"])]),_:1})]),_:1})]),_:1},8,["to"])}}}),$n={class:"relative"},En=H({__name:"CBanner",setup(e){const o=Wt();return(a,r)=>(L(),ve("div",$n,[z(o).banners.length>0?(L(),he(z(In),{key:0,autoplay:""},{default:O(()=>[(L(!0),ve(tt,null,nt(z(o).banners,i=>(L(),ve("div",{key:i.src,class:"border border-transparent h-48 md:h-56 lg:h-64 xl:h-72 w-full inline-block rounded-md overflow-hidden"},[I(z(un),{"object-fit":"cover",width:"100%",height:"100%",class:"w-full h-full",src:i.src,alt:i.alt},null,8,["src","alt"])]))),128))]),_:1})):Zt("",!0),I(z(ot),{bordered:!1,class:"absolute w-full h-full top-0 left-0 -z-10"})]))}}),An=sn(En,[["__scopeId","data-v-2b0916c8"]]),Bn=100,Qn=H({__name:"VHome",props:{label:{}},setup(e){const o=e,a=qt("loadPagesRef");async function r(C,x){const b=[en.funcLabels.article];o.label&&b.push(o.label);const v=await Qt.page({page:C,per_page:x,labels:b.join(",")});return{datas:v,hasNext:v.length===x}}let i=0;function m(){const C=document.documentElement.scrollTop,x=document.documentElement.clientHeight,b=document.documentElement.scrollHeight,v=C+x+Bn;i<C&&v>=b&&a.value.queryPages(1)}return Gt(()=>{window.scrollTo(0,i),window.addEventListener("scroll",m)}),Jt(()=>{i=document.documentElement.scrollTop,window.removeEventListener("scroll",m)}),(C,x)=>(L(),he(z(me),{vertical:!0},{default:O(()=>[I(An),I(fn,{ref_key:"loadPagesRef",ref:a,"query-pages-func":r},{default:O(({datas:b})=>[I(z(me),{vertical:!0},{default:O(()=>[(L(!0),ve(tt,null,nt(b,v=>(L(),he(Vn,{key:v.number,issue:v},null,8,["issue"]))),128)),x[0]||(x[0]=et("div",{class:"mt-4"},null,-1))]),_:2},1024)]),_:1},512)]),_:1}))}});export{Qn as default};
