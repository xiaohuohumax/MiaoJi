import{bB as Y,aD as Z,F as ee,g as d,f as p,O as oe,q as l,i,M as re,bC as te,d as ne,v as ae,x as k,C as de,p as S,D as se,h as b,R as ie,bD as le,H as z}from"./index-f2d47f63.js";function pe(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function ue(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function ce(e,r){const o=e.trim().split(/\s+/g),t={top:o[0]};switch(o.length){case 1:t.right=o[0],t.bottom=o[0],t.left=o[0];break;case 2:t.right=o[1],t.left=o[1],t.bottom=o[0];break;case 3:t.right=o[1],t.bottom=o[2],t.left=o[1];break;case 4:t.right=o[1],t.bottom=o[2],t.left=o[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return r===void 0?t:t[r]}function ve(e,r){const[o,t]=e.split(" ");return r?r==="row"?o:t:{row:o,col:t||o}}function w(e,...r){if(Array.isArray(e))e.forEach(o=>w(o,...r));else return e(...r)}function be(e){return Object.keys(e)}function u(e){return e.some(r=>Y(r)?!(r.type===Z||r.type===ee&&!u(r.children)):!0)?e:null}function he(e,r){return e&&u(e())||r()}function xe(e,r,o){return e&&u(e(r))||o(r)}function m(e,r){const o=e&&u(e());return r(o||null)}function Ce(e){return!(e&&u(e()))}const fe=d([p("card",`
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
 `,[oe({background:"var(--n-color-modal)"}),l("hoverable",[d("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[d(">",[i("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[d(">",[i("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[d(">",[i("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[d(">",[i("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),d(">",[p("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[i("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),i("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),i("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),i("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),i("content","flex: 1; min-width: 0;"),i("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[d("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),i("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),p("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[d("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[d("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[d(">",[i("action",[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[d(">",[i("content",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[d(">",[i("footer",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("embedded",`
 background-color: var(--n-color-embedded);
 `)]),re(p("card",`
 background: var(--n-color-modal);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),te(p("card",`
 background: var(--n-color-popover);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),$={title:String,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},ye=be($),ge=Object.assign(Object.assign({},k.props),$),ze=ne({name:"Card",props:ge,setup(e){const r=()=>{const{onClose:c}=e;c&&w(c)},{inlineThemeDisabled:o,mergedClsPrefixRef:t,mergedRtlRef:s}=ae(e),v=k("Card","-card",fe,le,e,t),x=de("Card",s,t),n=S(()=>{const{size:c}=e,{self:{color:C,colorModal:y,colorTarget:g,textColor:a,titleTextColor:h,titleFontWeight:E,borderColor:B,actionColor:P,borderRadius:R,lineHeight:T,closeIconColor:_,closeIconColorHover:O,closeIconColorPressed:j,closeColorHover:M,closeColorPressed:N,closeBorderRadius:F,closeIconSize:V,closeSize:H,boxShadow:I,colorPopover:W,colorEmbedded:D,colorEmbeddedModal:A,colorEmbeddedPopover:G,[z("padding",c)]:K,[z("fontSize",c)]:L,[z("titleFontSize",c)]:q},common:{cubicBezierEaseInOut:J}}=v.value,{top:Q,left:U,bottom:X}=ce(K);return{"--n-bezier":J,"--n-border-radius":R,"--n-color":C,"--n-color-modal":y,"--n-color-popover":W,"--n-color-embedded":D,"--n-color-embedded-modal":A,"--n-color-embedded-popover":G,"--n-color-target":g,"--n-text-color":a,"--n-line-height":T,"--n-action-color":P,"--n-title-text-color":h,"--n-title-font-weight":E,"--n-close-icon-color":_,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":j,"--n-close-color-hover":M,"--n-close-color-pressed":N,"--n-border-color":B,"--n-box-shadow":I,"--n-padding-top":Q,"--n-padding-bottom":X,"--n-padding-left":U,"--n-font-size":L,"--n-title-font-size":q,"--n-close-size":H,"--n-close-icon-size":V,"--n-close-border-radius":F}}),f=o?se("card",S(()=>e.size[0]),n,e):void 0;return{rtlEnabled:x,mergedClsPrefix:t,mergedTheme:v,handleCloseClick:r,cssVars:o?void 0:n,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{footerStyle:e,headerExtraClass:r,headerClass:o,contentClass:t,segmented:s,bordered:v,hoverable:x,mergedClsPrefix:n,rtlEnabled:f,onRender:c,embedded:C,tag:y,$slots:g}=this;return c==null||c(),b(y,{class:[`${n}-card`,this.themeClass,C&&`${n}-card--embedded`,{[`${n}-card--rtl`]:f,[`${n}-card--content${typeof s!="boolean"&&s.content==="soft"?"-soft":""}-segmented`]:s===!0||s!==!1&&s.content,[`${n}-card--footer${typeof s!="boolean"&&s.footer==="soft"?"-soft":""}-segmented`]:s===!0||s!==!1&&s.footer,[`${n}-card--action-segmented`]:s===!0||s!==!1&&s.action,[`${n}-card--bordered`]:v,[`${n}-card--hoverable`]:x}],style:this.cssVars,role:this.role},m(g.cover,a=>a&&b("div",{class:`${n}-card-cover`,role:"none"},a)),m(g.header,a=>a||this.title||this.closable?b("div",{class:[`${n}-card-header`,o],style:this.headerStyle},b("div",{class:`${n}-card-header__main`,role:"heading"},a||this.title),m(g["header-extra"],h=>h&&b("div",{class:[`${n}-card-header__extra`,r],style:this.headerExtraStyle},h)),this.closable?b(ie,{clsPrefix:n,class:`${n}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),m(g.default,a=>a&&b("div",{class:[`${n}-card__content`,t],style:this.contentStyle,role:"none"},a)),m(g.footer,a=>a&&[b("div",{class:[`${n}-card__footer`,e],style:this.footerStyle,role:"none"},a)]),m(g.action,a=>a&&b("div",{class:`${n}-card__action`,role:"none"},a)))}});export{ze as N,xe as a,m as b,w as c,$ as d,ye as e,ve as f,ce as g,pe as h,Ce as i,be as k,ue as p,he as r};
