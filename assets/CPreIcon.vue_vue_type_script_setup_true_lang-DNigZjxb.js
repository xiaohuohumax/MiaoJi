import{v as se,y as l,x as h,A as z,z as y,e as w,r as ie,C as de,B as N,p as he,t as ge,D as be,d as P,F as ve,k as g,a0 as ue,P as ke,b7 as Ce,H as c,ah as fe,an as pe,am as R,al as me,l as I,ar as M}from"./index-CxY8spwR.js";import{r as S,c as xe,h as T,N as ze}from"./_plugin-vue_export-helper-nDMbTP-M.js";import{g as ye,N as Be}from"./Space-mIpbSOwT.js";const _e={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},$e=se("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[l("strong",`
 font-weight: var(--n-font-weight-strong);
 `),h("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),h("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),h("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),h("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),l("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[h("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),h("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),l("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),l("icon, avatar",[l("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),l("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),l("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[z("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[z("checked","color: var(--n-text-color-pressed-checkable);")])]),l("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Pe=Object.assign(Object.assign(Object.assign({},N.props),_e),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Re=ke("n-tag"),Te=w({name:"Tag",props:Pe,setup(r){const n=ie(null),{mergedBorderedRef:o,mergedClsPrefixRef:b,inlineThemeDisabled:v,mergedRtlRef:B}=de(r),k=N("Tag","-tag",$e,Ce,r,b);he(Re,{roundRef:ge(r,"round")});function u(){if(!r.disabled&&r.checkable){const{checked:e,onCheckedChange:a,onUpdateChecked:d,"onUpdate:checked":s}=r;d&&d(!e),s&&s(!e),a&&a(!e)}}function C(e){if(r.triggerClickOnClose||e.stopPropagation(),!r.disabled){const{onClose:a}=r;a&&xe(a,e)}}const f={setTextContent(e){const{value:a}=n;a&&(a.textContent=e)}},p=be("Tag",B,b),t=P(()=>{const{type:e,size:a,color:{color:d,textColor:s}={}}=r,{common:{cubicBezierEaseInOut:m},self:{padding:j,closeMargin:F,borderRadius:H,opacityDisabled:O,textColorCheckable:E,textColorHoverCheckable:U,textColorPressedCheckable:D,textColorChecked:V,colorCheckable:K,colorHoverCheckable:A,colorPressedCheckable:W,colorChecked:L,colorCheckedHover:q,colorCheckedPressed:G,closeBorderRadius:J,fontWeightStrong:Q,[c("colorBordered",e)]:X,[c("closeSize",a)]:Y,[c("closeIconSize",a)]:Z,[c("fontSize",a)]:ee,[c("height",a)]:_,[c("color",e)]:oe,[c("textColor",e)]:re,[c("border",e)]:ae,[c("closeIconColor",e)]:$,[c("closeIconColorHover",e)]:ce,[c("closeIconColorPressed",e)]:ne,[c("closeColorHover",e)]:te,[c("closeColorPressed",e)]:le}}=k.value,x=ye(F);return{"--n-font-weight-strong":Q,"--n-avatar-size-override":`calc(${_} - 8px)`,"--n-bezier":m,"--n-border-radius":H,"--n-border":ae,"--n-close-icon-size":Z,"--n-close-color-pressed":le,"--n-close-color-hover":te,"--n-close-border-radius":J,"--n-close-icon-color":$,"--n-close-icon-color-hover":ce,"--n-close-icon-color-pressed":ne,"--n-close-icon-color-disabled":$,"--n-close-margin-top":x.top,"--n-close-margin-right":x.right,"--n-close-margin-bottom":x.bottom,"--n-close-margin-left":x.left,"--n-close-size":Y,"--n-color":d||(o.value?X:oe),"--n-color-checkable":K,"--n-color-checked":L,"--n-color-checked-hover":q,"--n-color-checked-pressed":G,"--n-color-hover-checkable":A,"--n-color-pressed-checkable":W,"--n-font-size":ee,"--n-height":_,"--n-opacity-disabled":O,"--n-padding":j,"--n-text-color":s||re,"--n-text-color-checkable":E,"--n-text-color-checked":V,"--n-text-color-hover-checkable":U,"--n-text-color-pressed-checkable":D}}),i=v?ve("tag",P(()=>{let e="";const{type:a,size:d,color:{color:s,textColor:m}={}}=r;return e+=a[0],e+=d[0],s&&(e+=`a${T(s)}`),m&&(e+=`b${T(m)}`),o.value&&(e+="c"),e}),t,r):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:p,mergedClsPrefix:b,contentRef:n,mergedBordered:o,handleClick:u,handleCloseClick:C,cssVars:v?void 0:t,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender})},render(){var r,n;const{mergedClsPrefix:o,rtlEnabled:b,closable:v,color:{borderColor:B}={},round:k,onRender:u,$slots:C}=this;u==null||u();const f=S(C.avatar,t=>t&&g("div",{class:`${o}-tag__avatar`},t)),p=S(C.icon,t=>t&&g("div",{class:`${o}-tag__icon`},t));return g("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:b,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:k,[`${o}-tag--avatar`]:f,[`${o}-tag--icon`]:p,[`${o}-tag--closable`]:v}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},p||f,g("span",{class:`${o}-tag__content`,ref:"contentRef"},(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)),!this.checkable&&v?g(ue,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:k,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${o}-tag__border`,style:{borderColor:B}}):null)}}),we=w({__name:"CPreIcon",setup(r){return(n,o)=>(fe(),pe(M(Be),{size:2,align:"center",justify:"start"},{default:R(()=>[me(M(ze),null,{default:R(()=>[I(n.$slots,"icon")]),_:3}),I(n.$slots,"default")]),_:3}))}});export{Te as N,we as _};
