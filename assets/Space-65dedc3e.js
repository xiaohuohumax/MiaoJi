import{ap as ie,S as A,aP as G,bG as se,q as s,l as $,a0 as de,C as g,p as l,$ as le,bH as ce,d as I,s as M,t as E,I as V,g as j,z as B,A as fe,i as b,bI as pe,J as ge,bJ as be}from"./index-64af288b.js";function _(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function $e(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function ue(e,t){const o=e.trim().split(/\s+/g),r={top:o[0]};switch(o.length){case 1:r.right=o[0],r.bottom=o[0],r.left=o[0];break;case 2:r.right=o[1],r.left=o[1],r.bottom=o[0];break;case 3:r.right=o[1],r.bottom=o[2],r.left=o[1];break;case 4:r.right=o[1],r.bottom=o[2],r.left=o[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return t===void 0?r:r[t]}function me(e,t){const[o,r]=e.split(" ");return t?t==="row"?o:r:{row:o,col:r||o}}function he(e,t="default",o=[]){const a=e.$slots[t];return a===void 0?o:a()}function O(e,t=!0,o=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&o.push(ie(String(r)));return}if(Array.isArray(r)){O(r,t,o);return}if(r.type===A){if(r.children===null)return;Array.isArray(r.children)&&O(r.children,t,o)}else r.type!==G&&o.push(r)}}),o}function W(e,...t){if(Array.isArray(e))e.forEach(o=>W(o,...t));else return e(...t)}function ve(e){return Object.keys(e)}function k(e){return e.some(t=>se(t)?!(t.type===G||t.type===A&&!k(t.children)):!0)?e:null}function ke(e,t){return e&&k(e())||t()}function Be(e,t,o){return e&&k(e(t))||o(t)}function S(e,t){const o=e&&k(e());return t(o||null)}function Ee(e){return!(e&&k(e()))}const ye=typeof document<"u"&&typeof window<"u",xe=s([$("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[de({background:"var(--n-color-modal)"}),g("hoverable",[s("&:hover","box-shadow: var(--n-box-shadow);")]),g("content-segmented",[s(">",[l("content",{paddingTop:"var(--n-padding-bottom)"})])]),g("content-soft-segmented",[s(">",[l("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),g("footer-segmented",[s(">",[l("footer",{paddingTop:"var(--n-padding-bottom)"})])]),g("footer-soft-segmented",[s(">",[l("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),s(">",[$("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[l("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),l("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),l("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),l("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),l("content","flex: 1; min-width: 0;"),l("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[s("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),l("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),$("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[s("img",`
 display: block;
 width: 100%;
 `)]),g("bordered",`
 border: 1px solid var(--n-border-color);
 `,[s("&:target","border-color: var(--n-color-target);")]),g("action-segmented",[s(">",[l("action",[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),g("content-segmented, content-soft-segmented",[s(">",[l("content",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),g("footer-segmented, footer-soft-segmented",[s(">",[l("footer",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),g("embedded",`
 background-color: var(--n-color-embedded);
 `)]),le($("card",`
 background: var(--n-color-modal);
 `,[g("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ce($("card",`
 background: var(--n-color-popover);
 `,[g("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),F={title:String,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Re=ve(F),ze=Object.assign(Object.assign({},E.props),F),Pe=I({name:"Card",props:ze,setup(e){const t=()=>{const{onClose:f}=e;f&&W(f)},{inlineThemeDisabled:o,mergedClsPrefixRef:r,mergedRtlRef:a}=M(e),d=E("Card","-card",xe,pe,e,r),p=V("Card",a,r),n=j(()=>{const{size:f}=e,{self:{color:m,colorModal:w,colorTarget:u,textColor:i,titleTextColor:y,titleFontWeight:z,borderColor:R,actionColor:v,borderRadius:x,lineHeight:C,closeIconColor:P,closeIconColorHover:h,closeIconColorPressed:H,closeColorHover:L,closeColorPressed:D,closeBorderRadius:J,closeIconSize:K,closeSize:U,boxShadow:q,colorPopover:Q,colorEmbedded:X,colorEmbeddedModal:Y,colorEmbeddedPopover:Z,[B("padding",f)]:N,[B("fontSize",f)]:ee,[B("titleFontSize",f)]:re},common:{cubicBezierEaseInOut:oe}}=d.value,{top:te,left:ne,bottom:ae}=ue(N);return{"--n-bezier":oe,"--n-border-radius":x,"--n-color":m,"--n-color-modal":w,"--n-color-popover":Q,"--n-color-embedded":X,"--n-color-embedded-modal":Y,"--n-color-embedded-popover":Z,"--n-color-target":u,"--n-text-color":i,"--n-line-height":C,"--n-action-color":v,"--n-title-text-color":y,"--n-title-font-weight":z,"--n-close-icon-color":P,"--n-close-icon-color-hover":h,"--n-close-icon-color-pressed":H,"--n-close-color-hover":L,"--n-close-color-pressed":D,"--n-border-color":R,"--n-box-shadow":q,"--n-padding-top":te,"--n-padding-bottom":ae,"--n-padding-left":ne,"--n-font-size":ee,"--n-title-font-size":re,"--n-close-size":U,"--n-close-icon-size":K,"--n-close-border-radius":J}}),c=o?fe("card",j(()=>e.size[0]),n,e):void 0;return{rtlEnabled:p,mergedClsPrefix:r,mergedTheme:d,handleCloseClick:t,cssVars:o?void 0:n,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{footerStyle:e,headerExtraClass:t,headerClass:o,contentClass:r,segmented:a,bordered:d,hoverable:p,mergedClsPrefix:n,rtlEnabled:c,onRender:f,embedded:m,tag:w,$slots:u}=this;return f==null||f(),b(w,{class:[`${n}-card`,this.themeClass,m&&`${n}-card--embedded`,{[`${n}-card--rtl`]:c,[`${n}-card--content${typeof a!="boolean"&&a.content==="soft"?"-soft":""}-segmented`]:a===!0||a!==!1&&a.content,[`${n}-card--footer${typeof a!="boolean"&&a.footer==="soft"?"-soft":""}-segmented`]:a===!0||a!==!1&&a.footer,[`${n}-card--action-segmented`]:a===!0||a!==!1&&a.action,[`${n}-card--bordered`]:d,[`${n}-card--hoverable`]:p}],style:this.cssVars,role:this.role},S(u.cover,i=>i&&b("div",{class:`${n}-card-cover`,role:"none"},i)),S(u.header,i=>i||this.title||this.closable?b("div",{class:[`${n}-card-header`,o],style:this.headerStyle},b("div",{class:`${n}-card-header__main`,role:"heading"},i||this.title),S(u["header-extra"],y=>y&&b("div",{class:[`${n}-card-header__extra`,t],style:this.headerExtraStyle},y)),this.closable?b(ge,{clsPrefix:n,class:`${n}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),S(u.default,i=>i&&b("div",{class:[`${n}-card__content`,r],style:this.contentStyle,role:"none"},i)),S(u.footer,i=>i&&[b("div",{class:[`${n}-card__footer`,e],style:this.footerStyle,role:"none"},i)]),S(u.action,i=>i&&b("div",{class:`${n}-card__action`,role:"none"},i)))}});let T;const Ce=()=>{if(!ye)return!0;if(T===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),T=t}return T},Se=Object.assign(Object.assign({},E.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Te=I({name:"Space",props:Se,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=M(e),r=E("Space","-space",void 0,be,e,t),a=V("Space",o,t);return{useGap:Ce(),rtlEnabled:a,mergedClsPrefix:t,margin:j(()=>{const{size:d}=e;if(Array.isArray(d))return{horizontal:d[0],vertical:d[1]};if(typeof d=="number")return{horizontal:d,vertical:d};const{self:{[B("gap",d)]:p}}=r.value,{row:n,col:c}=me(p);return{horizontal:_(c),vertical:_(n)}})}},render(){const{vertical:e,align:t,inline:o,justify:r,itemClass:a,itemStyle:d,margin:p,wrap:n,mergedClsPrefix:c,rtlEnabled:f,useGap:m,wrapItem:w,internalUseGap:u}=this,i=O(he(this));if(!i.length)return null;const y=`${p.horizontal}px`,z=`${p.horizontal/2}px`,R=`${p.vertical}px`,v=`${p.vertical/2}px`,x=i.length-1,C=r.startsWith("space-");return b("div",{role:"none",class:[`${c}-space`,f&&`${c}-space--rtl`],style:{display:o?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!n||e?"nowrap":"wrap",marginTop:m||e?"":`-${v}`,marginBottom:m||e?"":`-${v}`,alignItems:t,gap:m?`${p.vertical}px ${p.horizontal}px`:""}},!w&&(m||u)?i:i.map((P,h)=>b("div",{role:"none",class:a,style:[d,{maxWidth:"100%"},m?"":e?{marginBottom:h!==x?R:""}:f?{marginLeft:C?r==="space-between"&&h===x?"":z:h!==x?y:"",marginRight:C?r==="space-between"&&h===0?"":z:"",paddingTop:v,paddingBottom:v}:{marginRight:C?r==="space-between"&&h===x?"":z:h!==x?y:"",marginLeft:C?r==="space-between"&&h===0?"":z:"",paddingTop:v,paddingBottom:v}]},P)))}});export{Pe as N,ke as a,Be as b,W as c,_ as d,F as e,Re as f,ue as g,Te as h,ye as i,O as j,ve as k,Ee as l,he as m,$e as p,S as r};
