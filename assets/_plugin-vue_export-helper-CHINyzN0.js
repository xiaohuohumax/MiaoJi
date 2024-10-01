import{bO as X,b6 as Y,O as ee,z as a,v as u,_ as oe,y as l,x as d,Z as re,a9 as te,B as S,e as ne,C as ae,D as de,d as y,F as se,k as b,bP as ie,H as z,a0 as le}from"./index-Bwq5MEXp.js";import{g as ce}from"./Space-BVa_0GKn.js";function k(e,...r){if(Array.isArray(e))e.forEach(s=>k(s,...r));else return e(...r)}function be(e){return Object.keys(e)}function c(e){return e.some(r=>X(r)?!(r.type===Y||r.type===ee&&!c(r.children)):!0)?e:null}function ue(e,r){return e&&c(e())||r()}function me(e,r,s){return e&&c(e(r))||s(r)}function v(e,r){const s=e&&c(e());return r(s||null)}function pe(e){return!(e&&c(e()))}function xe(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const ge=a([u("card",`
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
 `,[oe({background:"var(--n-color-modal)"}),l("hoverable",[a("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[a(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[a(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[a(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[a(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),a(">",[u("card-header",`
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
 `)]),u("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[a("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[a("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[a(">",[d("action",[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[a(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[a(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("embedded",`
 background-color: var(--n-color-embedded);
 `)]),re(u("card",`
 background: var(--n-color-modal);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),te(u("card",`
 background: var(--n-color-popover);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),_={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},Ce=be(_),fe=Object.assign(Object.assign({},S.props),_),ze=ne({name:"Card",props:fe,setup(e){const r=()=>{const{onClose:n}=e;n&&k(n)},{inlineThemeDisabled:s,mergedClsPrefixRef:o,mergedRtlRef:h}=ae(e),f=S("Card","-card",ge,ie,e,o),x=de("Card",h,o),m=y(()=>{const{size:n}=e,{self:{color:t,colorModal:g,colorTarget:C,textColor:p,titleTextColor:$,titleFontWeight:w,borderColor:E,actionColor:P,borderRadius:B,lineHeight:O,closeIconColor:T,closeIconColorHover:F,closeIconColorPressed:R,closeColorHover:j,closeColorPressed:M,closeBorderRadius:V,closeIconSize:H,closeSize:I,boxShadow:N,colorPopover:A,colorEmbedded:W,colorEmbeddedModal:D,colorEmbeddedPopover:K,[z("padding",n)]:L,[z("fontSize",n)]:Z,[z("titleFontSize",n)]:q},common:{cubicBezierEaseInOut:G}}=f.value,{top:J,left:Q,bottom:U}=ce(L);return{"--n-bezier":G,"--n-border-radius":B,"--n-color":t,"--n-color-modal":g,"--n-color-popover":A,"--n-color-embedded":W,"--n-color-embedded-modal":D,"--n-color-embedded-popover":K,"--n-color-target":C,"--n-text-color":p,"--n-line-height":O,"--n-action-color":P,"--n-title-text-color":$,"--n-title-font-weight":w,"--n-close-icon-color":T,"--n-close-icon-color-hover":F,"--n-close-icon-color-pressed":R,"--n-close-color-hover":j,"--n-close-color-pressed":M,"--n-border-color":E,"--n-box-shadow":N,"--n-padding-top":J,"--n-padding-bottom":U,"--n-padding-left":Q,"--n-font-size":Z,"--n-title-font-size":q,"--n-close-size":I,"--n-close-icon-size":H,"--n-close-border-radius":V}}),i=s?se("card",y(()=>e.size[0]),m,e):void 0;return{rtlEnabled:x,mergedClsPrefix:o,mergedTheme:f,handleCloseClick:r,cssVars:s?void 0:m,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{segmented:e,bordered:r,hoverable:s,mergedClsPrefix:o,rtlEnabled:h,onRender:f,embedded:x,tag:m,$slots:i}=this;return f==null||f(),b(m,{class:[`${o}-card`,this.themeClass,x&&`${o}-card--embedded`,{[`${o}-card--rtl`]:h,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:r,[`${o}-card--hoverable`]:s}],style:this.cssVars,role:this.role},v(i.cover,n=>{const t=this.cover?c([this.cover()]):n;return t&&b("div",{class:`${o}-card-cover`,role:"none"},t)}),v(i.header,n=>{const{title:t}=this,g=t?c(typeof t=="function"?[t()]:[t]):n;return g||this.closable?b("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},b("div",{class:`${o}-card-header__main`,role:"heading"},g),v(i["header-extra"],C=>{const p=this.headerExtra?c([this.headerExtra()]):C;return p&&b("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},p)}),this.closable&&b(le,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),v(i.default,n=>{const{content:t}=this,g=t?c(typeof t=="function"?[t()]:[t]):n;return g&&b("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},g)}),v(i.footer,n=>{const t=this.footer?c([this.footer()]):n;return t&&b("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},t)}),v(i.action,n=>{const t=this.action?c([this.action()]):n;return t&&b("div",{class:`${o}-card__action`,role:"none"},t)}))}}),ye=(e,r)=>{const s=e.__vccOpts||e;for(const[o,h]of r)s[o]=h;return s};export{ze as N,ye as _,ue as a,me as b,k as c,_ as d,Ce as e,xe as f,pe as i,be as k,v as r};
