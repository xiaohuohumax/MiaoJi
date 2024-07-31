import{ap as ie,S as G,aP as _,bF as se,q as l,l as E,a0 as de,C as g,p as c,$ as le,bG as ce,d as M,s as I,t as P,E as V,g as F,z as R,A as fe,i as u,bH as pe,J as ge,bI as ue}from"./index-BTjIPu72.js";function A(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function $e(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function be(e,t){const o=e.trim().split(/\s+/g),r={top:o[0]};switch(o.length){case 1:r.right=o[0],r.bottom=o[0],r.left=o[0];break;case 2:r.right=o[1],r.left=o[1],r.bottom=o[0];break;case 3:r.right=o[1],r.bottom=o[2],r.left=o[1];break;case 4:r.right=o[1],r.bottom=o[2],r.left=o[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return t===void 0?r:r[t]}function me(e,t){const[o,r]=e.split(" ");return{row:o,col:r||o}}function he(e,t="default",o=[]){const i=e.$slots[t];return i===void 0?o:i()}function O(e,t=!0,o=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&o.push(ie(String(r)));return}if(Array.isArray(r)){O(r,t,o);return}if(r.type===G){if(r.children===null)return;Array.isArray(r.children)&&O(r.children,t,o)}else{if(r.type===_&&t)return;o.push(r)}}}),o}function W(e,...t){if(Array.isArray(e))e.forEach(o=>W(o,...t));else return e(...t)}function ve(e){return Object.keys(e)}function b(e){return e.some(t=>se(t)?!(t.type===_||t.type===G&&!b(t.children)):!0)?e:null}function ke(e,t){return e&&b(e())||t()}function Ee(e,t,o){return e&&b(e(t))||o(t)}function w(e,t){const o=e&&b(e());return t(o||null)}function Be(e){return!(e&&b(e()))}const ye=typeof document<"u"&&typeof window<"u",xe=l([E("card",`
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
 `,[de({background:"var(--n-color-modal)"}),g("hoverable",[l("&:hover","box-shadow: var(--n-box-shadow);")]),g("content-segmented",[l(">",[c("content",{paddingTop:"var(--n-padding-bottom)"})])]),g("content-soft-segmented",[l(">",[c("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),g("footer-segmented",[l(">",[c("footer",{paddingTop:"var(--n-padding-bottom)"})])]),g("footer-soft-segmented",[l(">",[c("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),l(">",[E("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[c("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),c("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),c("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),c("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),c("content","flex: 1; min-width: 0;"),c("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[l("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),c("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),E("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[l("img",`
 display: block;
 width: 100%;
 `)]),g("bordered",`
 border: 1px solid var(--n-border-color);
 `,[l("&:target","border-color: var(--n-color-target);")]),g("action-segmented",[l(">",[c("action",[l("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),g("content-segmented, content-soft-segmented",[l(">",[c("content",{transition:"border-color 0.3s var(--n-bezier)"},[l("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),g("footer-segmented, footer-soft-segmented",[l(">",[c("footer",{transition:"border-color 0.3s var(--n-bezier)"},[l("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),g("embedded",`
 background-color: var(--n-color-embedded);
 `)]),le(E("card",`
 background: var(--n-color-modal);
 `,[g("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ce(E("card",`
 background: var(--n-color-popover);
 `,[g("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),H={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},Re=ve(H),Ce=Object.assign(Object.assign({},P.props),H),Pe=M({name:"Card",props:Ce,setup(e){const t=()=>{const{onClose:a}=e;a&&W(a)},{inlineThemeDisabled:o,mergedClsPrefixRef:r,mergedRtlRef:i}=I(e),d=P("Card","-card",xe,pe,e,r),v=V("Card",i,r),f=F(()=>{const{size:a}=e,{self:{color:n,colorModal:p,colorTarget:$,textColor:x,titleTextColor:C,titleFontWeight:B,borderColor:z,actionColor:T,borderRadius:h,lineHeight:y,closeIconColor:S,closeIconColorHover:k,closeIconColorPressed:m,closeColorHover:L,closeColorPressed:D,closeBorderRadius:J,closeIconSize:K,closeSize:U,boxShadow:q,colorPopover:Q,colorEmbedded:X,colorEmbeddedModal:Y,colorEmbeddedPopover:Z,[R("padding",a)]:N,[R("fontSize",a)]:ee,[R("titleFontSize",a)]:re},common:{cubicBezierEaseInOut:oe}}=d.value,{top:te,left:ne,bottom:ae}=be(N);return{"--n-bezier":oe,"--n-border-radius":h,"--n-color":n,"--n-color-modal":p,"--n-color-popover":Q,"--n-color-embedded":X,"--n-color-embedded-modal":Y,"--n-color-embedded-popover":Z,"--n-color-target":$,"--n-text-color":x,"--n-line-height":y,"--n-action-color":T,"--n-title-text-color":C,"--n-title-font-weight":B,"--n-close-icon-color":S,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":m,"--n-close-color-hover":L,"--n-close-color-pressed":D,"--n-border-color":z,"--n-box-shadow":q,"--n-padding-top":te,"--n-padding-bottom":ae,"--n-padding-left":ne,"--n-font-size":ee,"--n-title-font-size":re,"--n-close-size":U,"--n-close-icon-size":K,"--n-close-border-radius":J}}),s=o?fe("card",F(()=>e.size[0]),f,e):void 0;return{rtlEnabled:v,mergedClsPrefix:r,mergedTheme:d,handleCloseClick:t,cssVars:o?void 0:f,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){const{segmented:e,bordered:t,hoverable:o,mergedClsPrefix:r,rtlEnabled:i,onRender:d,embedded:v,tag:f,$slots:s}=this;return d==null||d(),u(f,{class:[`${r}-card`,this.themeClass,v&&`${r}-card--embedded`,{[`${r}-card--rtl`]:i,[`${r}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:t,[`${r}-card--hoverable`]:o}],style:this.cssVars,role:this.role},w(s.cover,a=>{const n=this.cover?b([this.cover()]):a;return n&&u("div",{class:`${r}-card-cover`,role:"none"},n)}),w(s.header,a=>{const{title:n}=this,p=n?b(typeof n=="function"?[n()]:[n]):a;return p||this.closable?u("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},u("div",{class:`${r}-card-header__main`,role:"heading"},p),w(s["header-extra"],$=>{const x=this.headerExtra?b([this.headerExtra()]):$;return x&&u("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},x)}),this.closable&&u(ge,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),w(s.default,a=>{const{content:n}=this,p=n?b(typeof n=="function"?[n()]:[n]):a;return p&&u("div",{class:[`${r}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},p)}),w(s.footer,a=>{const n=this.footer?b([this.footer()]):a;return n&&u("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},n)}),w(s.action,a=>{const n=this.action?b([this.action()]):a;return n&&u("div",{class:`${r}-card__action`,role:"none"},n)}))}});let j;function ze(){if(!ye)return!0;if(j===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),j=t}return j}const Se=Object.assign(Object.assign({},P.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Te=M({name:"Space",props:Se,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=I(e),r=P("Space","-space",void 0,ue,e,t),i=V("Space",o,t);return{useGap:ze(),rtlEnabled:i,mergedClsPrefix:t,margin:F(()=>{const{size:d}=e;if(Array.isArray(d))return{horizontal:d[0],vertical:d[1]};if(typeof d=="number")return{horizontal:d,vertical:d};const{self:{[R("gap",d)]:v}}=r.value,{row:f,col:s}=me(v);return{horizontal:A(s),vertical:A(f)}})}},render(){const{vertical:e,reverse:t,align:o,inline:r,justify:i,itemClass:d,itemStyle:v,margin:f,wrap:s,mergedClsPrefix:a,rtlEnabled:n,useGap:p,wrapItem:$,internalUseGap:x}=this,C=O(he(this),!1);if(!C.length)return null;const B=`${f.horizontal}px`,z=`${f.horizontal/2}px`,T=`${f.vertical}px`,h=`${f.vertical/2}px`,y=C.length-1,S=i.startsWith("space-");return u("div",{role:"none",class:[`${a}-space`,n&&`${a}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:["start","end"].includes(i)?`flex-${i}`:i,flexWrap:!s||e?"nowrap":"wrap",marginTop:p||e?"":`-${h}`,marginBottom:p||e?"":`-${h}`,alignItems:o,gap:p?`${f.vertical}px ${f.horizontal}px`:""}},!$&&(p||x)?C:C.map((k,m)=>k.type===_?k:u("div",{role:"none",class:d,style:[v,{maxWidth:"100%"},p?"":e?{marginBottom:m!==y?T:""}:n?{marginLeft:S?i==="space-between"&&m===y?"":z:m!==y?B:"",marginRight:S?i==="space-between"&&m===0?"":z:"",paddingTop:h,paddingBottom:h}:{marginRight:S?i==="space-between"&&m===y?"":z:m!==y?B:"",marginLeft:S?i==="space-between"&&m===0?"":z:"",paddingTop:h,paddingBottom:h}]},k)))}});export{Pe as N,ke as a,Ee as b,W as c,A as d,H as e,Re as f,be as g,Te as h,ye as i,O as j,ve as k,Be as l,he as m,$e as p,w as r};
