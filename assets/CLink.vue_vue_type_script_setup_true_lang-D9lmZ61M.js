import{i as le,p as He,d as C,b as ce,P as de,v as _,e as D,J as Ne,t as Ee,r as F,n as Oe,k as p,z as h,bA as je,bF as ue,y,x as b,A as te,I as De,B as V,u as Ve,C as be,bG as Ke,D as Ae,H as t,bH as O,F as fe,ac as Ge,K as Me,G as Le,bI as We,X as qe,m as he,ag as ve,ah as me,ai as Qe,l as Je,bJ as Ye}from"./index-Bwq5MEXp.js";import{i as K}from"./Space-BVa_0GKn.js";import{f as ne,r as ie,i as Ue,c as Xe}from"./_plugin-vue_export-helper-CHINyzN0.js";const Ze=/^(\d|\.)+$/,se=/(\d|\.)+/;function eo(e,{c:i=1,offset:l=0,attachPx:a=!0}={}){if(typeof e=="number"){const r=(e+l)*i;return r===0?"0":`${r}px`}else if(typeof e=="string")if(Ze.test(e)){const r=(Number(e)+l)*i;return a?r===0?"0":`${r}px`:`${r}`}else{const r=se.exec(e);return r?e.replace(se,String((Number(r[0])+l)*i)):e}return e}const ae=de("n-form-item");function oo(e,{defaultSize:i="medium",mergedSize:l,mergedDisabled:a}={}){const r=le(ae,null);He(ae,null);const m=C(l?()=>l(r):()=>{const{size:x}=e;if(x)return x;if(r){const{mergedSize:k}=r;if(k.value!==void 0)return k.value}return i}),g=C(a?()=>a(r):()=>{const{disabled:x}=e;return x!==void 0?x:r?r.disabled.value:!1}),w=C(()=>{const{status:x}=e;return x||(r==null?void 0:r.mergedValidationStatus.value)});return ce(()=>{r&&r.restoreValidation()}),{mergedSizeRef:m,mergedDisabledRef:g,mergedStatusRef:w,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}const ro=_("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),to=D({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Ne("-base-wave",ro,Ee(e,"clsPrefix"));const i=F(null),l=F(!1);let a=null;return ce(()=>{a!==null&&window.clearTimeout(a)}),{active:l,selfRef:i,play(){a!==null&&(window.clearTimeout(a),l.value=!1,a=null),Oe(()=>{var r;(r=i.value)===null||r===void 0||r.offsetHeight,l.value=!0,a=window.setTimeout(()=>{l.value=!1,a=null},1e3)})}}},render(){const{clsPrefix:e}=this;return p("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:B}=je;function no({duration:e=".2s",delay:i=".1s"}={}){return[h("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),h("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),h("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${B},
 max-width ${e} ${B} ${i},
 margin-left ${e} ${B} ${i},
 margin-right ${e} ${B} ${i};
 `),h("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${B} ${i},
 max-width ${e} ${B},
 margin-left ${e} ${B},
 margin-right ${e} ${B};
 `)]}const io=K&&"chrome"in window;K&&navigator.userAgent.includes("Firefox");const so=K&&navigator.userAgent.includes("Safari")&&!io;function R(e){return ue(e,[255,255,255,.16])}function j(e){return ue(e,[0,0,0,.12])}const ao=de("n-button-group"),lo=h([_("button",`
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
 `,[y("color",[b("border",{borderColor:"var(--n-border-color)"}),y("disabled",[b("border",{borderColor:"var(--n-border-color-disabled)"})]),te("disabled",[h("&:focus",[b("state-border",{borderColor:"var(--n-border-color-focus)"})]),h("&:hover",[b("state-border",{borderColor:"var(--n-border-color-hover)"})]),h("&:active",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})]),y("pressed",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),y("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[b("border",{border:"var(--n-border-disabled)"})]),te("disabled",[h("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[b("state-border",{border:"var(--n-border-focus)"})]),h("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[b("state-border",{border:"var(--n-border-hover)"})]),h("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})]),y("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})])]),y("loading","cursor: wait;"),_("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[y("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),K&&"MozBoxSizing"in document.createElement("div").style?h("&::moz-focus-inner",{border:0}):null,b("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),b("border",{border:"var(--n-border)"}),b("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),b("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[_("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[De({top:"50%",originalTransform:"translateY(-50%)"})]),no()]),b("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[h("~",[b("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),y("block",`
 display: flex;
 width: 100%;
 `),y("dashed",[b("border, state-border",{borderStyle:"dashed !important"})]),y("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),h("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),h("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),co=Object.assign(Object.assign({},V.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!so}}),go=D({name:"Button",props:co,setup(e){const i=F(null),l=F(null),a=F(!1),r=Ve(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),m=le(ao,{}),{mergedSizeRef:g}=oo({},{defaultSize:"medium",mergedSize:n=>{const{size:f}=e;if(f)return f;const{size:$}=m;if($)return $;const{mergedSize:o}=n||{};return o?o.value:"medium"}}),w=C(()=>e.focusable&&!e.disabled),x=n=>{var f;w.value||n.preventDefault(),!e.nativeFocusBehavior&&(n.preventDefault(),!e.disabled&&w.value&&((f=i.value)===null||f===void 0||f.focus({preventScroll:!0})))},k=n=>{var f;if(!e.disabled&&!e.loading){const{onClick:$}=e;$&&Xe($,n),e.text||(f=l.value)===null||f===void 0||f.play()}},A=n=>{switch(n.key){case"Enter":if(!e.keyboard)return;a.value=!1}},pe=n=>{switch(n.key){case"Enter":if(!e.keyboard||e.loading){n.preventDefault();return}a.value=!0}},ge=()=>{a.value=!1},{inlineThemeDisabled:X,mergedClsPrefixRef:G,mergedRtlRef:xe}=be(e),ye=V("Button","-button",lo,Ke,e,G),Ce=Ae("Button",xe,G),Z=C(()=>{const n=ye.value,{common:{cubicBezierEaseInOut:f,cubicBezierEaseOut:$},self:o}=n,{rippleDuration:M,opacityDisabled:H,fontWeight:L,fontWeightStrong:W}=o,z=g.value,{dashed:q,type:P,ghost:Q,text:S,color:c,round:ee,circle:J,textColor:T,secondary:we,tertiary:oe,quaternary:ze,strong:$e}=e,Se={"font-weight":$e?W:L};let d={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const N=P==="tertiary",re=P==="default",s=N?"default":P;if(S){const u=T||c;d={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":u||o[t("textColorText",s)],"--n-text-color-hover":u?R(u):o[t("textColorTextHover",s)],"--n-text-color-pressed":u?j(u):o[t("textColorTextPressed",s)],"--n-text-color-focus":u?R(u):o[t("textColorTextHover",s)],"--n-text-color-disabled":u||o[t("textColorTextDisabled",s)]}}else if(Q||q){const u=T||c;d={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":c||o[t("rippleColor",s)],"--n-text-color":u||o[t("textColorGhost",s)],"--n-text-color-hover":u?R(u):o[t("textColorGhostHover",s)],"--n-text-color-pressed":u?j(u):o[t("textColorGhostPressed",s)],"--n-text-color-focus":u?R(u):o[t("textColorGhostHover",s)],"--n-text-color-disabled":u||o[t("textColorGhostDisabled",s)]}}else if(we){const u=re?o.textColor:N?o.textColorTertiary:o[t("color",s)],v=c||u,E=P!=="default"&&P!=="tertiary";d={"--n-color":E?O(v,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":E?O(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":E?O(v,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":E?O(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":v,"--n-text-color-hover":v,"--n-text-color-pressed":v,"--n-text-color-focus":v,"--n-text-color-disabled":v}}else if(oe||ze){const u=re?o.textColor:N?o.textColorTertiary:o[t("color",s)],v=c||u;oe?(d["--n-color"]=o.colorTertiary,d["--n-color-hover"]=o.colorTertiaryHover,d["--n-color-pressed"]=o.colorTertiaryPressed,d["--n-color-focus"]=o.colorSecondaryHover,d["--n-color-disabled"]=o.colorTertiary):(d["--n-color"]=o.colorQuaternary,d["--n-color-hover"]=o.colorQuaternaryHover,d["--n-color-pressed"]=o.colorQuaternaryPressed,d["--n-color-focus"]=o.colorQuaternaryHover,d["--n-color-disabled"]=o.colorQuaternary),d["--n-ripple-color"]="#0000",d["--n-text-color"]=v,d["--n-text-color-hover"]=v,d["--n-text-color-pressed"]=v,d["--n-text-color-focus"]=v,d["--n-text-color-disabled"]=v}else d={"--n-color":c||o[t("color",s)],"--n-color-hover":c?R(c):o[t("colorHover",s)],"--n-color-pressed":c?j(c):o[t("colorPressed",s)],"--n-color-focus":c?R(c):o[t("colorFocus",s)],"--n-color-disabled":c||o[t("colorDisabled",s)],"--n-ripple-color":c||o[t("rippleColor",s)],"--n-text-color":T||(c?o.textColorPrimary:N?o.textColorTertiary:o[t("textColor",s)]),"--n-text-color-hover":T||(c?o.textColorHoverPrimary:o[t("textColorHover",s)]),"--n-text-color-pressed":T||(c?o.textColorPressedPrimary:o[t("textColorPressed",s)]),"--n-text-color-focus":T||(c?o.textColorFocusPrimary:o[t("textColorFocus",s)]),"--n-text-color-disabled":T||(c?o.textColorDisabledPrimary:o[t("textColorDisabled",s)])};let Y={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};S?Y={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Y={"--n-border":o[t("border",s)],"--n-border-hover":o[t("borderHover",s)],"--n-border-pressed":o[t("borderPressed",s)],"--n-border-focus":o[t("borderFocus",s)],"--n-border-disabled":o[t("borderDisabled",s)]};const{[t("height",z)]:U,[t("fontSize",z)]:Be,[t("padding",z)]:Pe,[t("paddingRound",z)]:Te,[t("iconSize",z)]:Re,[t("borderRadius",z)]:ke,[t("iconMargin",z)]:Ie,waveOpacity:_e}=o,Fe={"--n-width":J&&!S?U:"initial","--n-height":S?"initial":U,"--n-font-size":Be,"--n-padding":J||S?"initial":ee?Te:Pe,"--n-icon-size":Re,"--n-icon-margin":Ie,"--n-border-radius":S?"initial":J||ee?U:ke};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":f,"--n-bezier-ease-out":$,"--n-ripple-duration":M,"--n-opacity-disabled":H,"--n-wave-opacity":_e},Se),d),Y),Fe)}),I=X?fe("button",C(()=>{let n="";const{dashed:f,type:$,ghost:o,text:M,color:H,round:L,circle:W,textColor:z,secondary:q,tertiary:P,quaternary:Q,strong:S}=e;f&&(n+="a"),o&&(n+="b"),M&&(n+="c"),L&&(n+="d"),W&&(n+="e"),q&&(n+="f"),P&&(n+="g"),Q&&(n+="h"),S&&(n+="i"),H&&(n+=`j${ne(H)}`),z&&(n+=`k${ne(z)}`);const{value:c}=g;return n+=`l${c[0]}`,n+=`m${$[0]}`,n}),Z,e):void 0;return{selfElRef:i,waveElRef:l,mergedClsPrefix:G,mergedFocusable:w,mergedSize:g,showBorder:r,enterPressed:a,rtlEnabled:Ce,handleMousedown:x,handleKeydown:pe,handleBlur:ge,handleKeyup:A,handleClick:k,customColorCssVars:C(()=>{const{color:n}=e;if(!n)return null;const f=R(n);return{"--n-border-color":n,"--n-border-color-hover":f,"--n-border-color-pressed":j(n),"--n-border-color-focus":f,"--n-border-color-disabled":n}}),cssVars:X?void 0:Z,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){const{mergedClsPrefix:e,tag:i,onRender:l}=this;l==null||l();const a=ie(this.$slots.default,r=>r&&p("span",{class:`${e}-button__content`},r));return p(i,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&a,p(Ge,{width:!0},{default:()=>ie(this.$slots.icon,r=>(this.loading||this.renderIcon||r)&&p("span",{class:`${e}-button__icon`,style:{margin:Ue(this.$slots.default)?"0":""}},p(Me,null,{default:()=>this.loading?p(Le,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):p("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)})))}),this.iconPlacement==="left"&&a,this.text?null:p(to,{ref:"waveElRef",clsPrefix:e}),this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),uo=_("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[y("color-transition",{transition:"color .3s var(--n-bezier)"}),y("depth",{color:"var(--n-color)"},[h("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),h("svg",{height:"1em",width:"1em"})]),bo=Object.assign(Object.assign({},V.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),xo=D({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:bo,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:l}=be(e),a=V("Icon","-icon",uo,We,e,i),r=C(()=>{const{depth:g}=e,{common:{cubicBezierEaseInOut:w},self:x}=a.value;if(g!==void 0){const{color:k,[`opacity${g}Depth`]:A}=x;return{"--n-bezier":w,"--n-color":k,"--n-opacity":A}}return{"--n-bezier":w,"--n-color":"","--n-opacity":""}}),m=l?fe("icon",C(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:i,mergedStyle:C(()=>{const{size:g,color:w}=e;return{fontSize:eo(g),color:w}}),cssVars:l?void 0:r,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var e;const{$parent:i,depth:l,mergedClsPrefix:a,component:r,onRender:m,themeClass:g}=this;return!((e=i==null?void 0:i.$options)===null||e===void 0)&&e._n_icon__&&qe("icon","don't wrap `n-icon` inside `n-icon`"),m==null||m(),p("i",he(this.$attrs,{role:"img",class:[`${a}-icon`,g,{[`${a}-icon--depth`]:l,[`${a}-icon--color-transition`]:l!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?p(r):this.$slots)}}),fo={xmlns:"http://www.w3.org/2000/svg",width:"28",fill:"currentColor",viewBox:"-2 -2 24 24"};function ho(e,i){return ve(),me("svg",fo,i[0]||(i[0]=[Qe("path",{d:"m8.164 11.107 1.817 1.049 1.87-1.08V9.01L9.96 7.92 8.164 9.042zm-2-1.155V2.978a8.02 8.02 0 0 0-3.839 4.758zm-4.163-.094L2 10a7.97 7.97 0 0 0 2.19 5.499l3.79-2.189zm6.163-3.174 5.808-3.63A7.96 7.96 0 0 0 10 2q-.95.002-1.836.212zm7.503-2.33-3.786 2.365 6.115 3.531a7.98 7.98 0 0 0-2.329-5.897zm-1.816 5.812v6.848a8.02 8.02 0 0 0 3.796-4.656zm-7.993 6.68A7.96 7.96 0 0 0 10 18c.637 0 1.257-.074 1.85-.215v-4.4l-5.992 3.46zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10"},null,-1)]))}const yo={render:ho},Co=D({__name:"CLink",setup(e){const i=C(()=>Ye());return(l,a)=>(ve(),me("a",he(i.value,{class:"hover:text-orange-500 dark:hover:text-green-300 cursor-pointer"}),[Je(l.$slots,"default")],16))}});export{go as B,yo as I,xo as N,Co as _,eo as f,so as i,oo as u};
