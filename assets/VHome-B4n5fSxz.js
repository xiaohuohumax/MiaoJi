import{bx as It,b0 as Dt,a6 as Je,p as Tt,i as Vt,ac as $t,P as Et,e as H,C as xe,r as M,by as At,k as C,bz as Bt,d as h,g as Qe,b as et,v as Mt,x as d,z as $,y as f,t as Lt,M as jt,bA as Ot,w as de,B as tt,F as Xt,V as Ft,W as Ht,T as Yt,n as Xe,bB as Kt,bo as Ut,bC as Wt,am as Zt,ai as O,ap as me,ao as L,an as z,at as k,as as nt,ak as ot,av as qt,aD as Gt,ax as Jt,aj as ve,O as at,aB as st,az as Qt,h as en,bD as tn,aC as Fe}from"./index-D0bB0mJU.js";import{a as pe}from"../app.config.DWCuxb8o.js";import{h as rt}from"./label-CLkH5TLJ.js";import{_ as nn}from"./CAuthor.vue_vue_type_script_setup_true_lang-BFYREMNs.js";import{_ as on}from"./CRelativeTime.vue_vue_type_script_setup_true_lang-lT9YbSEe.js";import{_ as an}from"./CTags.vue_vue_type_script_setup_true_lang-PjSY_0c2.js";import{I as sn}from"./hashtag-CmbUfPhw.js";import{C as rn}from"./CMarkdown-Anol8zB4.js";import{_ as ln}from"./CReactions.vue_vue_type_script_setup_true_lang-CVZrDMOx.js";import{b as He,e as lt,N as un,_ as cn}from"./_plugin-vue_export-helper-Bn8exm5W.js";import{f as dn,N as ge}from"./Space-DUG0ZluM.js";import{c as fn,N as vn}from"./Image-DYtfZ6cM.js";import{u as pn,V as Ye,w as Ke,a as Q,p as hn,o as ee}from"./Tooltip-Qn_w74GV.js";import{_ as mn}from"./CLoadPages.vue_vue_type_script_setup_true_lang-ChsiIwN8.js";import"./CLink.vue_vue_type_script_setup_true_lang-DD58yVlP.js";import"./CPreIcon.vue_vue_type_script_setup_true_lang-0rK5ircS.js";import"./Empty-B76LzXT7.js";function gn(e){return It(Dt(e).toLowerCase())}var Ue=fn(function(e,o,a){return o=o.toLowerCase(),e+(a?gn(o):o)});function xn(e){const{length:o}=e;return o>1&&(e.push(We(e[0],0,"append")),e.unshift(We(e[o-1],o-1,"prepend"))),e}function We(e,o,a){return Je(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Ze(e,o,a){return o===1?0:a?e===0?o-3:e===o-1?0:e-1:e}function Ie(e,o){return o?e+1:e}function bn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function wn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function yn(e,o){return o&&e>3?e-2:e}function qe(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Ge(e,o){let{offsetWidth:a,offsetHeight:l}=e;if(o){const r=getComputedStyle(e);a=a-Number.parseFloat(r.getPropertyValue("padding-left"))-Number.parseFloat(r.getPropertyValue("padding-right")),l=l-Number.parseFloat(r.getPropertyValue("padding-top"))-Number.parseFloat(r.getPropertyValue("padding-bottom"))}return{width:a,height:l}}function fe(e,o,a){return e<o?o:e>a?a:e}function Sn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,l,,r="ms"]=a;return Number(l)*(r==="ms"?1:1e3)}return 0}const it=Et("n-carousel-methods");function Cn(e){Tt(it,e)}function Te(e="unknown",o="component"){const a=Vt(it);return a||$t(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a}const _n={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Rn=H({name:"CarouselDots",props:_n,setup(e){const{mergedClsPrefixRef:o}=xe(e),a=M([]),l=Te();function r(p,v){switch(p.key){case"Enter":case" ":p.preventDefault(),l.to(v);return}e.keyboard&&b(p)}function x(p){e.trigger==="hover"&&l.to(p)}function y(p){e.trigger==="click"&&l.to(p)}function b(p){var v;if(p.shiftKey||p.altKey||p.ctrlKey||p.metaKey)return;const m=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(m==="input"||m==="textarea")return;const{code:_}=p,j=_==="PageUp"||_==="ArrowUp",X=_==="PageDown"||_==="ArrowDown",R=_==="PageUp"||_==="ArrowRight",P=_==="PageDown"||_==="ArrowLeft",N=l.isVertical(),A=N?j:R,Z=N?X:P;!A&&!Z||(p.preventDefault(),A&&!l.isNextDisabled()?(l.next(),w(l.currentIndexRef.value)):Z&&!l.isPrevDisabled()&&(l.prev(),w(l.currentIndexRef.value)))}function w(p){var v;(v=a.value[p])===null||v===void 0||v.focus()}return At(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:r,handleMouseenter:x,handleClick:y}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return C("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Bt(this.total,a=>{const l=a===this.currentIndex;return C("div",{"aria-selected":l,ref:r=>o.push(r),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:r=>{this.handleKeydown(r,a)}})}))}}),Pn=C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},C("g",{fill:"none"},C("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),zn=C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},C("g",{fill:"none"},C("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),kn=H({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=xe(e),{isVertical:a,isPrevDisabled:l,isNextDisabled:r,prev:x,next:y}=Te();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:l,isNextDisabled:r,prev:x,next:y}},render(){const{mergedClsPrefix:e}=this;return C("div",{class:`${e}-carousel__arrow-group`},C("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Pn),C("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},zn))}}),he="CarouselItem";function Nn(e){var o;return((o=e.type)===null||o===void 0?void 0:o.name)===he}const In=H({name:he,setup(e){const{mergedClsPrefixRef:o}=xe(e),a=Te(Ue(he),`n-${Ue(he)}`),l=M(),r=h(()=>{const{value:v}=l;return v?a.getSlideIndex(v):-1}),x=h(()=>a.isPrev(r.value)),y=h(()=>a.isNext(r.value)),b=h(()=>a.isActive(r.value)),w=h(()=>a.getSlideStyle(r.value));Qe(()=>{a.addSlide(l.value)}),et(()=>{a.removeSlide(l.value)});function p(v){const{value:m}=r;m!==void 0&&(a==null||a.onCarouselItemClick(m,v))}return{mergedClsPrefix:o,selfElRef:l,isPrev:x,isNext:y,isActive:b,index:r,style:w,handleClick:p}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:l,isNext:r,isActive:x,index:y,style:b}=this,w=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:x,[`${a}-carousel__slide--prev`]:l,[`${a}-carousel__slide--next`]:r}];return C("div",{ref:"selfElRef",class:w,role:"option",tabindex:"-1","data-index":y,"aria-hidden":!x,style:b,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:l,isNext:r,isActive:x,index:y}))}}),Dn=Mt("carousel",`
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
 `)])])]),Tn=["transitionDuration","transitionTimingFunction"],Vn=Object.assign(Object.assign({},tt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let De=!1;const $n=H({name:"Carousel",props:Vn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=xe(e),l=M(null),r=M(null),x=M([]),y={value:[]},b=h(()=>e.direction==="vertical"),w=h(()=>b.value?"height":"width"),p=h(()=>b.value?"bottom":"right"),v=h(()=>e.effect==="slide"),m=h(()=>e.loop&&e.slidesPerView===1&&v.value),_=h(()=>e.effect==="custom"),j=h(()=>!v.value||e.centeredSlides?1:e.slidesPerView),X=h(()=>_.value?1:e.slidesPerView),R=h(()=>j.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),P=M({width:0,height:0}),N=h(()=>{const{value:t}=x;if(!t.length)return[];const{value:n}=R;if(n)return t.map(S=>Ge(S));const{value:s}=X,{value:u}=P,{value:c}=w;let i=u[c];if(s!=="auto"){const{spaceBetween:S}=e,I=i-(s-1)*S,ce=1/Math.max(1,s);i=I*ce}const g=Object.assign(Object.assign({},u),{[c]:i});return t.map(()=>g)}),A=h(()=>{const{value:t}=N;if(!t.length)return[];const{centeredSlides:n,spaceBetween:s}=e,{value:u}=w,{[u]:c}=P.value;let i=0;return t.map(({[u]:g})=>{let S=i;return n&&(S+=(g-c)/2),i+=g+s,S})}),Z=M(!1),be=h(()=>{const{transitionStyle:t}=e;return t?Ke(t,Tn):{}}),we=h(()=>_.value?0:Sn(be.value.transitionDuration)),Ve=h(()=>{const{value:t}=x;if(!t.length)return[];const n=!(R.value||X.value===1),s=g=>{if(n){const{value:S}=w;return{[S]:`${N.value[g][S]}px`}}};if(_.value)return t.map((g,S)=>s(S));const{effect:u,spaceBetween:c}=e,{value:i}=p;return t.reduce((g,S,I)=>{const ce=Object.assign(Object.assign({},s(I)),{[`margin-${i}`]:`${c}px`});return g.push(ce),Z.value&&(u==="fade"||u==="card")&&Object.assign(ce,be.value),g},[])}),D=h(()=>{const{value:t}=j,{length:n}=x.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:s}=N,{length:u}=s;if(!u)return n;const{value:c}=A,{value:i}=w,g=P.value[i];let S=s[s.length-1][i],I=u;for(;I>1&&S<g;)I--,S+=c[I]-c[I-1];return fe(I+1,1,u)}}),te=h(()=>yn(D.value,m.value)),ut=Ie(e.defaultIndex,m.value),ye=M(Ze(ut,D.value,m.value)),E=pn(Lt(e,"currentIndex"),ye),T=h(()=>Ie(E.value,m.value));function q(t){var n,s;t=fe(t,0,D.value-1);const u=Ze(t,D.value,m.value),{value:c}=E;u!==E.value&&(ye.value=u,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,u,c),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,u,c))}function ne(t=T.value){return bn(t,D.value,e.loop)}function oe(t=T.value){return wn(t,D.value,e.loop)}function ct(t){const n=Y(t);return n!==null&&ne()===n}function dt(t){const n=Y(t);return n!==null&&oe()===n}function $e(t){return T.value===Y(t)}function ft(t){return E.value===t}function Ee(){return ne()===null}function Ae(){return oe()===null}function Se(t){const n=fe(Ie(t,m.value),0,D.value);(t!==E.value||n!==T.value)&&q(n)}function Ce(){const t=ne();t!==null&&q(t)}function ae(){const t=oe();t!==null&&q(t)}let V=!1;function vt(){(!V||!m.value)&&Ce()}function pt(){(!V||!m.value)&&ae()}let F=0;const _e=M({});function se(t,n=0){_e.value=Object.assign({},be.value,{transform:b.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function G(t=0){v.value?Re(T.value,t):F!==0&&(!V&&t>0&&(V=!0),se(F=0,t))}function Re(t,n){const s=Be(t);s!==F&&n>0&&(V=!0),F=Be(T.value),se(s,n)}function Be(t){let n;return t>=D.value-1?n=Me():n=A.value[t]||0,n}function Me(){if(j.value==="auto"){const{value:t}=w,{[t]:n}=P.value,{value:s}=A,u=s[s.length-1];let c;if(u===void 0)c=n;else{const{value:i}=N;c=u+i[i.length-1][t]}return c-n}else{const{value:t}=A;return t[D.value-1]||0}}const J={currentIndexRef:E,to:Se,prev:vt,next:pt,isVertical:()=>b.value,isHorizontal:()=>!b.value,isPrev:ct,isNext:dt,isActive:$e,isPrevDisabled:Ee,isNextDisabled:Ae,getSlideIndex:Y,getSlideStyle:gt,addSlide:ht,removeSlide:mt,onCarouselItemClick:xt};Cn(J);function ht(t){t&&x.value.push(t)}function mt(t){if(!t)return;const n=Y(t);n!==-1&&x.value.splice(n,1)}function Y(t){return typeof t=="number"?t:t?x.value.indexOf(t):-1}function gt(t){const n=Y(t);if(n!==-1){const s=[Ve.value[n]],u=J.isPrev(n),c=J.isNext(n);return u&&s.push(e.prevSlideStyle||""),c&&s.push(e.nextSlideStyle||""),Ut(s)}}let Pe=0,ze=0,B=0,ke=0,re=!1,Ne=!1;function xt(t,n){let s=!V&&!re&&!Ne;e.effect==="card"&&s&&!$e(t)&&(Se(t),s=!1),s||(n.preventDefault(),n.stopPropagation())}let le=null;function ie(){le&&(clearInterval(le),le=null)}function K(){ie(),!e.autoplay||te.value<2||(le=window.setInterval(ae,e.interval))}function Le(t){var n;if(De||!(!((n=r.value)===null||n===void 0)&&n.contains(hn(t))))return;De=!0,re=!0,Ne=!1,ke=Date.now(),ie(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=qe(t)?t.touches[0]:t;b.value?ze=s.clientY:Pe=s.clientX,e.touchable&&(ee("touchmove",document,ue),ee("touchend",document,U),ee("touchcancel",document,U)),e.draggable&&(ee("mousemove",document,ue),ee("mouseup",document,U))}function ue(t){const{value:n}=b,{value:s}=w,u=qe(t)?t.touches[0]:t,c=n?u.clientY-ze:u.clientX-Pe,i=P.value[s];B=fe(c,-i,i),t.cancelable&&t.preventDefault(),v.value&&se(F-B,0)}function U(){const{value:t}=T;let n=t;if(!V&&B!==0&&v.value){const s=F-B,u=[...A.value.slice(0,D.value-1),Me()];let c=null;for(let i=0;i<u.length;i++){const g=Math.abs(u[i]-s);if(c!==null&&c<g)break;c=g,n=i}}if(n===t){const s=Date.now()-ke,{value:u}=w,c=P.value[u];B>c/2||B/s>.4?n=ne(t):(B<-c/2||B/s<-.4)&&(n=oe(t))}n!==null&&n!==t?(Ne=!0,q(n),Xe(()=>{(!m.value||ye.value!==E.value)&&G(we.value)})):G(we.value),je(),K()}function je(){re&&(De=!1),re=!1,Pe=0,ze=0,B=0,ke=0,Q("touchmove",document,ue),Q("touchend",document,U),Q("touchcancel",document,U),Q("mousemove",document,ue),Q("mouseup",document,U)}function bt(){if(v.value&&V){const{value:t}=T;Re(t,0)}else K();v.value&&(_e.value.transitionDuration="0ms"),V=!1}function wt(t){if(t.preventDefault(),V)return;let{deltaX:n,deltaY:s}=t;t.shiftKey&&!n&&(n=s);const u=-1,c=1,i=(n||s)>0?c:u;let g=0,S=0;b.value?S=i:g=i;const I=10;(S*s>=I||g*n>=I)&&(i===c&&!Ae()?ae():i===u&&!Ee()&&Ce())}function yt(){P.value=Ge(l.value,!0),K()}function St(){var t,n;R.value&&((n=(t=N.effect).scheduler)===null||n===void 0||n.call(t),N.effect.run())}function Ct(){e.autoplay&&ie()}function _t(){e.autoplay&&K()}Qe(()=>{jt(K),requestAnimationFrame(()=>Z.value=!0)}),et(()=>{je(),ie()}),Ot(()=>{const{value:t}=x,{value:n}=y,s=new Map,u=i=>s.has(i)?s.get(i):-1;let c=!1;for(let i=0;i<t.length;i++){const g=n.findIndex(S=>S.el===t[i]);g!==i&&(c=!0),s.set(t[i],g)}c&&t.sort((i,g)=>u(i)-u(g))}),de(T,(t,n)=>{if(t!==n)if(K(),v.value){if(m.value){const{value:s}=D;te.value>2&&t===s-2&&n===1?t=0:t===1&&n===s-2&&(t=s-1)}Re(t,we.value)}else G()},{immediate:!0}),de([m,j],()=>void Xe(()=>{q(T.value)})),de(A,()=>{v.value&&G()},{deep:!0}),de(v,t=>{t?G():(V=!1,se(F=0))});const Rt=h(()=>({onTouchstartPassive:e.touchable?Le:void 0,onMousedown:e.draggable?Le:void 0,onWheel:e.mousewheel?wt:void 0})),Pt=h(()=>Object.assign(Object.assign({},Ke(J,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:te.value,currentIndex:E.value})),zt=h(()=>({total:te.value,currentIndex:E.value,to:J.to})),kt={getCurrentIndex:()=>E.value,to:Se,prev:Ce,next:ae},Nt=tt("Carousel","-carousel",Dn,Kt,e,o),Oe=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:s,dotColorActive:u,dotColorFocus:c,dotLineWidth:i,dotLineWidthActive:g,arrowColor:S}}=Nt.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":c,"--n-dot-color-active":u,"--n-dot-size":n,"--n-dot-line-width":i,"--n-dot-line-width-active":g,"--n-arrow-color":S}}),W=a?Xt("carousel",void 0,Oe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:l,slidesElRef:r,slideVNodes:y,duplicatedable:m,userWantsControl:_,autoSlideSize:R,realIndex:T,slideStyles:Ve,translateStyle:_e,slidesControlListeners:Rt,handleTransitionEnd:bt,handleResize:yt,handleSlideResize:St,handleMouseenter:Ct,handleMouseleave:_t,isActive:ft,arrowSlotProps:Pt,dotSlotProps:zt},kt),{cssVars:a?void 0:Oe,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:l,slideStyles:r,dotType:x,dotPlacement:y,slidesControlListeners:b,transitionProps:w={},arrowSlotProps:p,dotSlotProps:v,$slots:{default:m,dots:_,arrow:j}}=this,X=m&&dn(m())||[];let R=En(X);return R.length||(R=X.map(P=>C(In,null,{default:()=>Je(P)}))),this.duplicatedable&&(R=xn(R)),this.slideVNodes.value=R,this.autoSlideSize&&(R=R.map(P=>C(Ye,{onResize:this.handleSlideResize},{default:()=>P}))),(e=this.onRender)===null||e===void 0||e.call(this),C("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${y}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,l&&`${o}-carousel--usercontrol`],style:this.cssVars},b,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),C(Ye,{onResize:this.handleResize},{default:()=>C("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?R.map((P,N)=>C("div",{style:r[N],key:N},Ft(C(Yt,Object.assign({},w),{default:()=>P}),[[Ht,this.isActive(N)]]))):R)}),this.showDots&&v.total>1&&He(_,v,()=>[C(Rn,{key:x+y,total:v.total,currentIndex:v.currentIndex,dotType:x,trigger:this.trigger,keyboard:this.keyboard})]),a&&He(j,p,()=>[C(kn,null)]))}});function En(e){return e.reduce((o,a)=>(Nn(a)&&o.push(a),o),[])}const An={class:"text-xl dark:text-green-300 text-orange-500"},Bn=H({__name:"CArticleCard",props:{issue:{}},setup(e){const o=e,a=Wt.parseConfig(o.issue.body||""),l=h(()=>rt(o.issue.labels,pe.funcLabels.pin));return(r,x)=>{const y=Zt("RouterLink");return O(),me(y,{to:{name:k(Gt).Article,params:{id:r.issue.number}}},{default:L(()=>[z(k(lt),{size:"small",class:"relative hover:scale-[1.02] transition-transform duration-200 ease-in-out"},{default:L(()=>[l.value?(O(),me(k(un),{key:0,class:"absolute top-0 right-0 z-30 font-bold dark:text-green-300 text-orange-500",size:24},{default:L(()=>[z(k(sn))]),_:1})):nt("",!0),z(k(ge),{vertical:!0},{default:L(()=>[ot("h1",An,qt(r.issue.title),1),z(k(ge),{align:"center"},{default:L(()=>[z(nn,{user:r.issue.user},null,8,["user"]),z(on,{"updated-at":r.issue.updated_at},null,8,["updated-at"]),z(an,{labels:r.issue.labels},null,8,["labels"]),z(ln,{reaction:r.issue.reactions,"issue-url":r.issue.html_url},null,8,["reaction","issue-url"])]),_:1}),z(rn,{id:r.issue.number,content:k(a).excerpt},null,8,["id","content"])]),_:1})]),_:1})]),_:1},8,["to"])}}}),Mn={key:0,class:"relative rounded-md overflow-hidden"},Ln=H({__name:"CBanner",setup(e){const o=Jt();return(a,l)=>k(o).banners.length>0?(O(),ve("div",Mn,[z(k($n),{autoplay:""},{default:L(()=>[(O(!0),ve(at,null,st(k(o).banners,r=>(O(),ve("div",{key:r.src,class:"h-48 md:h-56 lg:h-64 xl:h-72 w-full inline-block"},[z(k(vn),{"object-fit":"cover",width:"100%",height:"100%",class:"w-full h-full",src:r.src,alt:r.alt},null,8,["src","alt"])]))),128))]),_:1}),z(k(lt),{class:"absolute w-full h-full top-0 left-0 -z-10",bordered:!1})])):nt("",!0)}}),jn=cn(Ln,[["__scopeId","data-v-8a0f1140"]]),On=100,so=H({__name:"VHome",props:{label:{}},setup(e){const o=e,a=Qt("loadPagesRef");async function l(y,b){const w=[pe.funcLabels.article],p=[];if(o.label&&w.push(o.label),y===1){const m=w.concat(pe.funcLabels.pin),_=await Fe.all({labels:m.join(",")});p.push(..._)}const v=await Fe.page({page:y,per_page:b,labels:w.join(",")});for(const m of v)rt(m.labels,pe.funcLabels.pin)||p.push(m);return{datas:p,hasNext:v.length===b}}let r=0;function x(){const y=document.documentElement.scrollTop,b=document.documentElement.clientHeight,w=document.documentElement.scrollHeight,p=y+b+On;r<y&&p>=w&&a.value.queryPages(1)}return en(()=>{window.scrollTo(0,r),window.addEventListener("scroll",x)}),tn(()=>{r=document.documentElement.scrollTop,window.removeEventListener("scroll",x)}),(y,b)=>(O(),me(k(ge),{vertical:!0},{default:L(()=>[z(jn),z(mn,{ref_key:"loadPagesRef",ref:a,"query-pages-func":l},{default:L(({datas:w})=>[z(k(ge),{vertical:!0},{default:L(()=>[(O(!0),ve(at,null,st(w,p=>(O(),me(Bn,{key:p.number,issue:p},null,8,["issue"]))),128)),b[0]||(b[0]=ot("div",{class:"mt-4"},null,-1))]),_:2},1024)]),_:1},512)]),_:1}))}});export{so as default};
