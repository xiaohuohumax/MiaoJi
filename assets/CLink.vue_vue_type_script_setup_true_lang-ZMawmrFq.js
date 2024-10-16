import{i as ie,p as Re,d as z,b as ae,P as se,v as D,e as Y,J as Ie,t as Fe,r as R,n as _e,k as m,z as v,bF as He,bK as le,y as x,x as u,A as oe,I as Ee,B as de,u as je,C as De,bL as Ne,D as Oe,H as r,bM as E,F as Ke,ae as Ve,K as Me,G as Ge,ai as ce,aj as ue,ak as Ae,l as We,m as qe,bN as Le}from"./index-8Nduy9rO.js";import{i as N}from"./Space-DmT7jGdB.js";import{h as re,r as te,i as Qe,c as Ye}from"./_plugin-vue_export-helper-NmBTaXtx.js";const ne=se("n-form-item");function Je(e,{defaultSize:d="medium",mergedSize:f,mergedDisabled:c}={}){const n=ie(ne,null);Re(ne,null);const O=z(f?()=>f(n):()=>{const{size:p}=e;if(p)return p;if(n){const{mergedSize:I}=n;if(I.value!==void 0)return I.value}return d}),k=z(c?()=>c(n):()=>{const{disabled:p}=e;return p!==void 0?p:n?n.disabled.value:!1}),P=z(()=>{const{status:p}=e;return p||(n==null?void 0:n.mergedValidationStatus.value)});return ae(()=>{n&&n.restoreValidation()}),{mergedSizeRef:O,mergedDisabledRef:k,mergedStatusRef:P,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const Ue=D("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Xe=Y({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Ie("-base-wave",Ue,Fe(e,"clsPrefix"));const d=R(null),f=R(!1);let c=null;return ae(()=>{c!==null&&window.clearTimeout(c)}),{active:f,selfRef:d,play(){c!==null&&(window.clearTimeout(c),f.value=!1,c=null),_e(()=>{var n;(n=d.value)===null||n===void 0||n.offsetHeight,f.value=!0,c=window.setTimeout(()=>{f.value=!1,c=null},1e3)})}}},render(){const{clsPrefix:e}=this;return m("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:w}=He;function Ze({duration:e=".2s",delay:d=".1s"}={}){return[v("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),v("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),v("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${w},
 max-width ${e} ${w} ${d},
 margin-left ${e} ${w} ${d},
 margin-right ${e} ${w} ${d};
 `),v("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${w} ${d},
 max-width ${e} ${w},
 margin-left ${e} ${w},
 margin-right ${e} ${w};
 `)]}const eo=N&&"chrome"in window;N&&navigator.userAgent.includes("Firefox");const oo=N&&navigator.userAgent.includes("Safari")&&!eo;function S(e){return le(e,[255,255,255,.16])}function j(e){return le(e,[0,0,0,.12])}const ro=se("n-button-group"),to=v([D("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("color",[u("border",{borderColor:"var(--n-border-color)"}),x("disabled",[u("border",{borderColor:"var(--n-border-color-disabled)"})]),oe("disabled",[v("&:focus",[u("state-border",{borderColor:"var(--n-border-color-focus)"})]),v("&:hover",[u("state-border",{borderColor:"var(--n-border-color-hover)"})]),v("&:active",[u("state-border",{borderColor:"var(--n-border-color-pressed)"})]),x("pressed",[u("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),x("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[u("border",{border:"var(--n-border-disabled)"})]),oe("disabled",[v("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[u("state-border",{border:"var(--n-border-focus)"})]),v("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[u("state-border",{border:"var(--n-border-hover)"})]),v("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[u("state-border",{border:"var(--n-border-pressed)"})]),x("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[u("state-border",{border:"var(--n-border-pressed)"})])]),x("loading","cursor: wait;"),D("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[x("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),N&&"MozBoxSizing"in document.createElement("div").style?v("&::moz-focus-inner",{border:0}):null,u("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),u("border",{border:"var(--n-border)"}),u("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),u("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[D("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Ee({top:"50%",originalTransform:"translateY(-50%)"})]),Ze()]),u("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[v("~",[u("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),x("block",`
 display: flex;
 width: 100%;
 `),x("dashed",[u("border, state-border",{borderStyle:"dashed !important"})]),x("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),v("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),v("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),no=Object.assign(Object.assign({},de.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!oo}}),uo=Y({name:"Button",props:no,setup(e){const d=R(null),f=R(null),c=R(!1),n=je(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),O=ie(ro,{}),{mergedSizeRef:k}=Je({},{defaultSize:"medium",mergedSize:t=>{const{size:b}=e;if(b)return b;const{size:y}=O;if(y)return y;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),P=z(()=>e.focusable&&!e.disabled),p=t=>{var b;P.value||t.preventDefault(),!e.nativeFocusBehavior&&(t.preventDefault(),!e.disabled&&P.value&&((b=d.value)===null||b===void 0||b.focus({preventScroll:!0})))},I=t=>{var b;if(!e.disabled&&!e.loading){const{onClick:y}=e;y&&Ye(y,t),e.text||(b=f.value)===null||b===void 0||b.play()}},be=t=>{switch(t.key){case"Enter":if(!e.keyboard)return;c.value=!1}},fe=t=>{switch(t.key){case"Enter":if(!e.keyboard||e.loading){t.preventDefault();return}c.value=!0}},he=()=>{c.value=!1},{inlineThemeDisabled:J,mergedClsPrefixRef:K,mergedRtlRef:ve}=De(e),me=de("Button","-button",to,Ne,e,K),pe=Oe("Button",ve,K),U=z(()=>{const t=me.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:y},self:o}=t,{rippleDuration:V,opacityDisabled:F,fontWeight:M,fontWeightStrong:G}=o,g=k.value,{dashed:A,type:$,ghost:W,text:C,color:a,round:X,circle:q,textColor:B,secondary:ge,tertiary:Z,quaternary:xe,strong:ye}=e,Ce={"font-weight":ye?G:M};let s={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const _=$==="tertiary",ee=$==="default",i=_?"default":$;if(C){const l=B||a;s={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":l||o[r("textColorText",i)],"--n-text-color-hover":l?S(l):o[r("textColorTextHover",i)],"--n-text-color-pressed":l?j(l):o[r("textColorTextPressed",i)],"--n-text-color-focus":l?S(l):o[r("textColorTextHover",i)],"--n-text-color-disabled":l||o[r("textColorTextDisabled",i)]}}else if(W||A){const l=B||a;s={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":a||o[r("rippleColor",i)],"--n-text-color":l||o[r("textColorGhost",i)],"--n-text-color-hover":l?S(l):o[r("textColorGhostHover",i)],"--n-text-color-pressed":l?j(l):o[r("textColorGhostPressed",i)],"--n-text-color-focus":l?S(l):o[r("textColorGhostHover",i)],"--n-text-color-disabled":l||o[r("textColorGhostDisabled",i)]}}else if(ge){const l=ee?o.textColor:_?o.textColorTertiary:o[r("color",i)],h=a||l,H=$!=="default"&&$!=="tertiary";s={"--n-color":H?E(h,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":H?E(h,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":H?E(h,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":H?E(h,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":h,"--n-text-color-hover":h,"--n-text-color-pressed":h,"--n-text-color-focus":h,"--n-text-color-disabled":h}}else if(Z||xe){const l=ee?o.textColor:_?o.textColorTertiary:o[r("color",i)],h=a||l;Z?(s["--n-color"]=o.colorTertiary,s["--n-color-hover"]=o.colorTertiaryHover,s["--n-color-pressed"]=o.colorTertiaryPressed,s["--n-color-focus"]=o.colorSecondaryHover,s["--n-color-disabled"]=o.colorTertiary):(s["--n-color"]=o.colorQuaternary,s["--n-color-hover"]=o.colorQuaternaryHover,s["--n-color-pressed"]=o.colorQuaternaryPressed,s["--n-color-focus"]=o.colorQuaternaryHover,s["--n-color-disabled"]=o.colorQuaternary),s["--n-ripple-color"]="#0000",s["--n-text-color"]=h,s["--n-text-color-hover"]=h,s["--n-text-color-pressed"]=h,s["--n-text-color-focus"]=h,s["--n-text-color-disabled"]=h}else s={"--n-color":a||o[r("color",i)],"--n-color-hover":a?S(a):o[r("colorHover",i)],"--n-color-pressed":a?j(a):o[r("colorPressed",i)],"--n-color-focus":a?S(a):o[r("colorFocus",i)],"--n-color-disabled":a||o[r("colorDisabled",i)],"--n-ripple-color":a||o[r("rippleColor",i)],"--n-text-color":B||(a?o.textColorPrimary:_?o.textColorTertiary:o[r("textColor",i)]),"--n-text-color-hover":B||(a?o.textColorHoverPrimary:o[r("textColorHover",i)]),"--n-text-color-pressed":B||(a?o.textColorPressedPrimary:o[r("textColorPressed",i)]),"--n-text-color-focus":B||(a?o.textColorFocusPrimary:o[r("textColorFocus",i)]),"--n-text-color-disabled":B||(a?o.textColorDisabledPrimary:o[r("textColorDisabled",i)])};let L={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};C?L={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:L={"--n-border":o[r("border",i)],"--n-border-hover":o[r("borderHover",i)],"--n-border-pressed":o[r("borderPressed",i)],"--n-border-focus":o[r("borderFocus",i)],"--n-border-disabled":o[r("borderDisabled",i)]};const{[r("height",g)]:Q,[r("fontSize",g)]:we,[r("padding",g)]:ze,[r("paddingRound",g)]:$e,[r("iconSize",g)]:Be,[r("borderRadius",g)]:Se,[r("iconMargin",g)]:Te,waveOpacity:ke}=o,Pe={"--n-width":q&&!C?Q:"initial","--n-height":C?"initial":Q,"--n-font-size":we,"--n-padding":q||C?"initial":X?$e:ze,"--n-icon-size":Be,"--n-icon-margin":Te,"--n-border-radius":C?"initial":q||X?Q:Se};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":y,"--n-ripple-duration":V,"--n-opacity-disabled":F,"--n-wave-opacity":ke},Ce),s),L),Pe)}),T=J?Ke("button",z(()=>{let t="";const{dashed:b,type:y,ghost:o,text:V,color:F,round:M,circle:G,textColor:g,secondary:A,tertiary:$,quaternary:W,strong:C}=e;b&&(t+="a"),o&&(t+="b"),V&&(t+="c"),M&&(t+="d"),G&&(t+="e"),A&&(t+="f"),$&&(t+="g"),W&&(t+="h"),C&&(t+="i"),F&&(t+=`j${re(F)}`),g&&(t+=`k${re(g)}`);const{value:a}=k;return t+=`l${a[0]}`,t+=`m${y[0]}`,t}),U,e):void 0;return{selfElRef:d,waveElRef:f,mergedClsPrefix:K,mergedFocusable:P,mergedSize:k,showBorder:n,enterPressed:c,rtlEnabled:pe,handleMousedown:p,handleKeydown:fe,handleBlur:he,handleKeyup:be,handleClick:I,customColorCssVars:z(()=>{const{color:t}=e;if(!t)return null;const b=S(t);return{"--n-border-color":t,"--n-border-color-hover":b,"--n-border-color-pressed":j(t),"--n-border-color-focus":b,"--n-border-color-disabled":t}}),cssVars:J?void 0:U,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:d,onRender:f}=this;f==null||f();const c=te(this.$slots.default,n=>n&&m("span",{class:`${e}-button__content`},n));return m(d,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&c,m(Ve,{width:!0},{default:()=>te(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&m("span",{class:`${e}-button__icon`,style:{margin:Qe(this.$slots.default)?"0":""}},m(Me,null,{default:()=>this.loading?m(Ge,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):m("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&c,this.text?null:m(Xe,{ref:"waveElRef",clsPrefix:e}),this.showBorder?m("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?m("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),io={xmlns:"http://www.w3.org/2000/svg",width:"28",fill:"currentColor",viewBox:"-2 -2 24 24"};function ao(e,d){return ce(),ue("svg",io,d[0]||(d[0]=[Ae("path",{d:"m8.164 11.107 1.817 1.049 1.87-1.08V9.01L9.96 7.92 8.164 9.042zm-2-1.155V2.978a8.02 8.02 0 0 0-3.839 4.758zm-4.163-.094L2 10a7.97 7.97 0 0 0 2.19 5.499l3.79-2.189zm6.163-3.174 5.808-3.63A7.96 7.96 0 0 0 10 2q-.95.002-1.836.212zm7.503-2.33-3.786 2.365 6.115 3.531a7.98 7.98 0 0 0-2.329-5.897zm-1.816 5.812v6.848a8.02 8.02 0 0 0 3.796-4.656zm-7.993 6.68A7.96 7.96 0 0 0 10 18c.637 0 1.257-.074 1.85-.215v-4.4l-5.992 3.46zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10"},null,-1)]))}const bo={render:ao},fo=Y({__name:"CLink",setup(e){const d=z(()=>Le());return(f,c)=>(ce(),ue("a",qe(d.value,{class:"hover:text-orange-500 dark:hover:text-green-300 cursor-pointer"}),[We(f.$slots,"default")],16))}});export{uo as B,bo as I,fo as _,oo as i,Je as u};
