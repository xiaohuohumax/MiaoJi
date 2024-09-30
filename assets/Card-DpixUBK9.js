import{bO as X,b6 as Y,O as ee,z as a,v,_ as oe,y as i,x as d,Z as re,a9 as ne,B as S,e as te,C as ae,D as de,d as y,F as se,k as b,bP as ie,H as z,a0 as le}from"./index-CyJLi7hy.js";import{g as ce}from"./Space-8dEtra5P.js";function k(e,...n){if(Array.isArray(e))e.forEach(c=>k(c,...n));else return e(...n)}function be(e){return Object.keys(e)}function l(e){return e.some(n=>X(n)?!(n.type===Y||n.type===ee&&!l(n.children)):!0)?e:null}function ue(e,n){return e&&l(e())||n()}function me(e,n,c){return e&&l(e(n))||c(n)}function h(e,n){const c=e&&l(e());return n(c||null)}function pe(e){return!(e&&l(e()))}function Ce(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const ge=a([v("card",`
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
 `,[oe({background:"var(--n-color-modal)"}),i("hoverable",[a("&:hover","box-shadow: var(--n-box-shadow);")]),i("content-segmented",[a(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),i("content-soft-segmented",[a(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),i("footer-segmented",[a(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),i("footer-soft-segmented",[a(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),a(">",[v("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[a("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),v("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[a("img",`
 display: block;
 width: 100%;
 `)]),i("bordered",`
 border: 1px solid var(--n-border-color);
 `,[a("&:target","border-color: var(--n-color-target);")]),i("action-segmented",[a(">",[d("action",[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("content-segmented, content-soft-segmented",[a(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("footer-segmented, footer-soft-segmented",[a(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("embedded",`
 background-color: var(--n-color-embedded);
 `)]),re(v("card",`
 background: var(--n-color-modal);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ne(v("card",`
 background: var(--n-color-popover);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),$={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},xe=be($),fe=Object.assign(Object.assign({},S.props),$),ze=te({name:"Card",props:fe,setup(e){const n=()=>{const{onClose:t}=e;t&&k(t)},{inlineThemeDisabled:c,mergedClsPrefixRef:o,mergedRtlRef:p}=ae(e),f=S("Card","-card",ge,ie,e,o),C=de("Card",p,o),u=y(()=>{const{size:t}=e,{self:{color:r,colorModal:g,colorTarget:x,textColor:m,titleTextColor:w,titleFontWeight:E,borderColor:P,actionColor:_,borderRadius:B,lineHeight:T,closeIconColor:F,closeIconColorHover:O,closeIconColorPressed:R,closeColorHover:j,closeColorPressed:M,closeBorderRadius:V,closeIconSize:H,closeSize:I,boxShadow:N,colorPopover:A,colorEmbedded:W,colorEmbeddedModal:D,colorEmbeddedPopover:K,[z("padding",t)]:L,[z("fontSize",t)]:Z,[z("titleFontSize",t)]:q},common:{cubicBezierEaseInOut:G}}=f.value,{top:J,left:Q,bottom:U}=ce(L);return{"--n-bezier":G,"--n-border-radius":B,"--n-color":r,"--n-color-modal":g,"--n-color-popover":A,"--n-color-embedded":W,"--n-color-embedded-modal":D,"--n-color-embedded-popover":K,"--n-color-target":x,"--n-text-color":m,"--n-line-height":T,"--n-action-color":_,"--n-title-text-color":w,"--n-title-font-weight":E,"--n-close-icon-color":F,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":R,"--n-close-color-hover":j,"--n-close-color-pressed":M,"--n-border-color":P,"--n-box-shadow":N,"--n-padding-top":J,"--n-padding-bottom":U,"--n-padding-left":Q,"--n-font-size":Z,"--n-title-font-size":q,"--n-close-size":I,"--n-close-icon-size":H,"--n-close-border-radius":V}}),s=c?se("card",y(()=>e.size[0]),u,e):void 0;return{rtlEnabled:C,mergedClsPrefix:o,mergedTheme:f,handleCloseClick:n,cssVars:c?void 0:u,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){const{segmented:e,bordered:n,hoverable:c,mergedClsPrefix:o,rtlEnabled:p,onRender:f,embedded:C,tag:u,$slots:s}=this;return f==null||f(),b(u,{class:[`${o}-card`,this.themeClass,C&&`${o}-card--embedded`,{[`${o}-card--rtl`]:p,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:n,[`${o}-card--hoverable`]:c}],style:this.cssVars,role:this.role},h(s.cover,t=>{const r=this.cover?l([this.cover()]):t;return r&&b("div",{class:`${o}-card-cover`,role:"none"},r)}),h(s.header,t=>{const{title:r}=this,g=r?l(typeof r=="function"?[r()]:[r]):t;return g||this.closable?b("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},b("div",{class:`${o}-card-header__main`,role:"heading"},g),h(s["header-extra"],x=>{const m=this.headerExtra?l([this.headerExtra()]):x;return m&&b("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},m)}),this.closable&&b(le,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),h(s.default,t=>{const{content:r}=this,g=r?l(typeof r=="function"?[r()]:[r]):t;return g&&b("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},g)}),h(s.footer,t=>{const r=this.footer?l([this.footer()]):t;return r&&b("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),h(s.action,t=>{const r=this.action?l([this.action()]):t;return r&&b("div",{class:`${o}-card__action`,role:"none"},r)}))}});export{ze as N,ue as a,me as b,k as c,$ as d,xe as e,Ce as f,pe as i,be as k,h as r};
