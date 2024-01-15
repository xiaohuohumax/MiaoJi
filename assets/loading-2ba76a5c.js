import{x as re,G as Me,g as z,b as ve,K as me,l as E,d as V,O as Oe,E as De,a as j,n as Le,i as g,q as h,bi as Ve,bA as ge,C,p as f,D as le,M as We,t as W,h as Ke,s as pe,bB as Ge,I as Ae,z as n,bC as O,A as ye,bD as qe,P as Qe,H as Ue,bE as Ye,a6 as Ze,m as Je,bF as Xe,ab as eo,ac as xe,ad as p,af as oo,ag as ro,j as oe,al as to,ah as D,ao as N,w as no}from"./index-5d7083a6.js";import{i as K,r as ce,l as io,c as so,N as de}from"./Space-0bf71941.js";const ao=/^(\d|\.)+$/,ue=/(\d|\.)+/;function lo(e,{c:t=1,offset:s=0,attachPx:l=!0}={}){if(typeof e=="number"){const r=(e+s)*t;return r===0?"0":`${r}px`}else if(typeof e=="string")if(ao.test(e)){const r=(Number(e)+s)*t;return l?r===0?"0":`${r}px`:`${r}`}else{const r=ue.exec(e);return r?e.replace(ue,String((Number(r[0])+s)*t)):e}return e}function fe(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const be=me("n-form-item");function co(e,{defaultSize:t="medium",mergedSize:s,mergedDisabled:l}={}){const r=re(be,null);Me(be,null);const m=z(s?()=>s(r):()=>{const{size:x}=e;if(x)return x;if(r){const{mergedSize:_}=r;if(_.value!==void 0)return _.value}return t}),y=z(l?()=>l(r):()=>{const{disabled:x}=e;return x!==void 0?x:r?r.disabled.value:!1}),w=z(()=>{const{status:x}=e;return x||(r==null?void 0:r.mergedValidationStatus.value)});return ve(()=>{r&&r.restoreValidation()}),{mergedSizeRef:m,mergedDisabledRef:y,mergedStatusRef:w,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}const uo=E("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),fo=V({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Oe("-base-wave",uo,De(e,"clsPrefix"));const t=j(null),s=j(!1);let l=null;return ve(()=>{l!==null&&window.clearTimeout(l)}),{active:s,selfRef:t,play(){l!==null&&(window.clearTimeout(l),s.value=!1,l=null),Le(()=>{var r;(r=t.value)===null||r===void 0||r.offsetHeight,s.value=!0,l=window.setTimeout(()=>{s.value=!1,l=null},1e3)})}}},render(){const{clsPrefix:e}=this;return g("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:B}=Ve;function bo({duration:e=".2s",delay:t=".1s"}={}){return[h("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),h("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),h("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${B},
 max-width ${e} ${B} ${t},
 margin-left ${e} ${B} ${t},
 margin-right ${e} ${B} ${t};
 `),h("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${B} ${t},
 max-width ${e} ${B},
 margin-left ${e} ${B},
 margin-right ${e} ${B};
 `)]}const ho=K&&"chrome"in window;K&&navigator.userAgent.includes("Firefox");const vo=K&&navigator.userAgent.includes("Safari")&&!ho;function R(e){return ge(e,[255,255,255,.16])}function L(e){return ge(e,[0,0,0,.12])}const mo=me("n-button-group"),go=h([E("button",`
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
 `,[C("color",[f("border",{borderColor:"var(--n-border-color)"}),C("disabled",[f("border",{borderColor:"var(--n-border-color-disabled)"})]),le("disabled",[h("&:focus",[f("state-border",{borderColor:"var(--n-border-color-focus)"})]),h("&:hover",[f("state-border",{borderColor:"var(--n-border-color-hover)"})]),h("&:active",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})]),C("pressed",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),C("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[f("border",{border:"var(--n-border-disabled)"})]),le("disabled",[h("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[f("state-border",{border:"var(--n-border-focus)"})]),h("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[f("state-border",{border:"var(--n-border-hover)"})]),h("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})]),C("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})])]),C("loading","cursor: wait;"),E("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[C("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),K&&"MozBoxSizing"in document.createElement("div").style?h("&::moz-focus-inner",{border:0}):null,f("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),f("border",{border:"var(--n-border)"}),f("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),f("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[E("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[We({top:"50%",originalTransform:"translateY(-50%)"})]),bo()]),f("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[h("~",[f("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),C("block",`
 display: flex;
 width: 100%;
 `),C("dashed",[f("border, state-border",{borderStyle:"dashed !important"})]),C("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),h("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),h("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),po=Object.assign(Object.assign({},W.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!vo}}),yo=V({name:"Button",props:po,setup(e){const t=j(null),s=j(null),l=j(!1),r=Ke(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),m=re(mo,{}),{mergedSizeRef:y}=co({},{defaultSize:"medium",mergedSize:i=>{const{size:b}=e;if(b)return b;const{size:$}=m;if($)return $;const{mergedSize:o}=i||{};return o?o.value:"medium"}}),w=z(()=>e.focusable&&!e.disabled),x=i=>{var b;w.value||i.preventDefault(),!e.nativeFocusBehavior&&(i.preventDefault(),!e.disabled&&w.value&&((b=t.value)===null||b===void 0||b.focus({preventScroll:!0})))},_=i=>{var b;if(!e.disabled&&!e.loading){const{onClick:$}=e;$&&so($,i),e.text||(b=s.value)===null||b===void 0||b.play()}},G=i=>{switch(i.key){case"Enter":if(!e.keyboard)return;l.value=!1}},Ce=i=>{switch(i.key){case"Enter":if(!e.keyboard||e.loading){i.preventDefault();return}l.value=!0}},we=()=>{l.value=!1},{inlineThemeDisabled:te,mergedClsPrefixRef:A,mergedRtlRef:ke}=pe(e),ze=W("Button","-button",go,Ge,e,A),$e=Ae("Button",ke,A),ne=z(()=>{const i=ze.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:$},self:o}=i,{rippleDuration:q,opacityDisabled:F,fontWeight:Q,fontWeightStrong:U}=o,k=y.value,{dashed:Y,type:P,ghost:Z,text:S,color:c,round:ie,circle:J,textColor:T,secondary:Se,tertiary:se,quaternary:Be,strong:Pe}=e,Te={"font-weight":Pe?U:Q};let d={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const H=P==="tertiary",ae=P==="default",a=H?"default":P;if(S){const u=T||c;d={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":u||o[n("textColorText",a)],"--n-text-color-hover":u?R(u):o[n("textColorTextHover",a)],"--n-text-color-pressed":u?L(u):o[n("textColorTextPressed",a)],"--n-text-color-focus":u?R(u):o[n("textColorTextHover",a)],"--n-text-color-disabled":u||o[n("textColorTextDisabled",a)]}}else if(Z||Y){const u=T||c;d={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":c||o[n("rippleColor",a)],"--n-text-color":u||o[n("textColorGhost",a)],"--n-text-color-hover":u?R(u):o[n("textColorGhostHover",a)],"--n-text-color-pressed":u?L(u):o[n("textColorGhostPressed",a)],"--n-text-color-focus":u?R(u):o[n("textColorGhostHover",a)],"--n-text-color-disabled":u||o[n("textColorGhostDisabled",a)]}}else if(Se){const u=ae?o.textColor:H?o.textColorTertiary:o[n("color",a)],v=c||u,M=P!=="default"&&P!=="tertiary";d={"--n-color":M?O(v,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":M?O(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":M?O(v,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":M?O(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":v,"--n-text-color-hover":v,"--n-text-color-pressed":v,"--n-text-color-focus":v,"--n-text-color-disabled":v}}else if(se||Be){const u=ae?o.textColor:H?o.textColorTertiary:o[n("color",a)],v=c||u;se?(d["--n-color"]=o.colorTertiary,d["--n-color-hover"]=o.colorTertiaryHover,d["--n-color-pressed"]=o.colorTertiaryPressed,d["--n-color-focus"]=o.colorSecondaryHover,d["--n-color-disabled"]=o.colorTertiary):(d["--n-color"]=o.colorQuaternary,d["--n-color-hover"]=o.colorQuaternaryHover,d["--n-color-pressed"]=o.colorQuaternaryPressed,d["--n-color-focus"]=o.colorQuaternaryHover,d["--n-color-disabled"]=o.colorQuaternary),d["--n-ripple-color"]="#0000",d["--n-text-color"]=v,d["--n-text-color-hover"]=v,d["--n-text-color-pressed"]=v,d["--n-text-color-focus"]=v,d["--n-text-color-disabled"]=v}else d={"--n-color":c||o[n("color",a)],"--n-color-hover":c?R(c):o[n("colorHover",a)],"--n-color-pressed":c?L(c):o[n("colorPressed",a)],"--n-color-focus":c?R(c):o[n("colorFocus",a)],"--n-color-disabled":c||o[n("colorDisabled",a)],"--n-ripple-color":c||o[n("rippleColor",a)],"--n-text-color":T||(c?o.textColorPrimary:H?o.textColorTertiary:o[n("textColor",a)]),"--n-text-color-hover":T||(c?o.textColorHoverPrimary:o[n("textColorHover",a)]),"--n-text-color-pressed":T||(c?o.textColorPressedPrimary:o[n("textColorPressed",a)]),"--n-text-color-focus":T||(c?o.textColorFocusPrimary:o[n("textColorFocus",a)]),"--n-text-color-disabled":T||(c?o.textColorDisabledPrimary:o[n("textColorDisabled",a)])};let X={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};S?X={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:X={"--n-border":o[n("border",a)],"--n-border-hover":o[n("borderHover",a)],"--n-border-pressed":o[n("borderPressed",a)],"--n-border-focus":o[n("borderFocus",a)],"--n-border-disabled":o[n("borderDisabled",a)]};const{[n("height",k)]:ee,[n("fontSize",k)]:Re,[n("padding",k)]:_e,[n("paddingRound",k)]:Ie,[n("iconSize",k)]:Ne,[n("borderRadius",k)]:je,[n("iconMargin",k)]:Ee,waveOpacity:Fe}=o,He={"--n-width":J&&!S?ee:"initial","--n-height":S?"initial":ee,"--n-font-size":Re,"--n-padding":J||S?"initial":ie?Ie:_e,"--n-icon-size":Ne,"--n-icon-margin":Ee,"--n-border-radius":S?"initial":J||ie?ee:je};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":$,"--n-ripple-duration":q,"--n-opacity-disabled":F,"--n-wave-opacity":Fe},Te),d),X),He)}),I=te?ye("button",z(()=>{let i="";const{dashed:b,type:$,ghost:o,text:q,color:F,round:Q,circle:U,textColor:k,secondary:Y,tertiary:P,quaternary:Z,strong:S}=e;b&&(i+="a"),o&&(i+="b"),q&&(i+="c"),Q&&(i+="d"),U&&(i+="e"),Y&&(i+="f"),P&&(i+="g"),Z&&(i+="h"),S&&(i+="i"),F&&(i+="j"+fe(F)),k&&(i+="k"+fe(k));const{value:c}=y;return i+="l"+c[0],i+="m"+$[0],i}),ne,e):void 0;return{selfElRef:t,waveElRef:s,mergedClsPrefix:A,mergedFocusable:w,mergedSize:y,showBorder:r,enterPressed:l,rtlEnabled:$e,handleMousedown:x,handleKeydown:Ce,handleBlur:we,handleKeyup:G,handleClick:_,customColorCssVars:z(()=>{const{color:i}=e;if(!i)return null;const b=R(i);return{"--n-border-color":i,"--n-border-color-hover":b,"--n-border-color-pressed":L(i),"--n-border-color-focus":b,"--n-border-color-disabled":i}}),cssVars:te?void 0:ne,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){const{mergedClsPrefix:e,tag:t,onRender:s}=this;s==null||s();const l=ce(this.$slots.default,r=>r&&g("span",{class:`${e}-button__content`},r));return g(t,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&l,g(qe,{width:!0},{default:()=>ce(this.$slots.icon,r=>(this.loading||this.renderIcon||r)&&g("span",{class:`${e}-button__icon`,style:{margin:io(this.$slots.default)?"0":""}},g(Qe,null,{default:()=>this.loading?g(Ue,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):g("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)})))}),this.iconPlacement==="left"&&l,this.text?null:g(fo,{ref:"waveElRef",clsPrefix:e}),this.showBorder?g("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?g("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),Po=yo,xo=E("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[C("color-transition",{transition:"color .3s var(--n-bezier)"}),C("depth",{color:"var(--n-color)"},[h("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),h("svg",{height:"1em",width:"1em"})]),Co=Object.assign(Object.assign({},W.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),he=V({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Co,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=pe(e),l=W("Icon","-icon",xo,Ye,e,t),r=z(()=>{const{depth:y}=e,{common:{cubicBezierEaseInOut:w},self:x}=l.value;if(y!==void 0){const{color:_,[`opacity${y}Depth`]:G}=x;return{"--n-bezier":w,"--n-color":_,"--n-opacity":G}}return{"--n-bezier":w,"--n-color":"","--n-opacity":""}}),m=s?ye("icon",z(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:z(()=>{const{size:y,color:w}=e;return{fontSize:lo(y),color:w}}),cssVars:s?void 0:r,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var e;const{$parent:t,depth:s,mergedClsPrefix:l,component:r,onRender:m,themeClass:y}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&Ze("icon","don't wrap `n-icon` inside `n-icon`"),m==null||m(),g("i",Je(this.$attrs,{role:"img",class:[`${l}-icon`,y,{[`${l}-icon--depth`]:s,[`${l}-icon--color-transition`]:s!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?g(r):this.$slots)}});function wo(){const e=re(Xe,null);return e===null&&eo("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const ko=xe("caution",!1,function(e){return p("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[p("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 5L2 43H46L24 5Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),p("path",{d:"M24 35V36",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null),p("path",{d:"M24 19.0005L24.0083 29",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null)])}),zo=xe("loading",!0,function(e){return p("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[p("path",{d:"M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),p("path",{d:"M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),To=V({__name:"CLoading",props:{state:{}},setup(e){return(t,s)=>(oo(),ro("div",null,[t.state=="loading"?oe(t.$slots,"loading",{key:0},()=>[p(N(de),{size:"small",bordered:!1,class:"text-center"},{default:D(()=>[p(N(he),{size:"30"},{default:D(()=>[p(N(zo),{class:"animate-spin inline-block"})]),_:1})]),_:1})]):t.state=="fail"?oe(t.$slots,"fail",{key:1},()=>[p(N(de),{size:"small",bordered:!1,class:"text-center"},{default:D(()=>[p(N(he),{size:"30"},{default:D(()=>[p(N(ko),{class:"inline-block"})]),_:1})]),_:1})]):t.state=="success"?oe(t.$slots,"default",{key:2}):to("",!0)]))}});const $o=2e3;function Ro(e){const t=wo(),s=j(e.state),l={loading:t.info,success:t.success,fail:t.error,init:()=>{}};return no(()=>s.value,()=>{const r=e[s.value];r&&l[s.value](typeof r=="function"?r():r,{duration:e.duration||$o})}),s}export{Po as N,To as _,he as a,wo as b,fe as c,lo as f,vo as i,co as u,Ro as w};
