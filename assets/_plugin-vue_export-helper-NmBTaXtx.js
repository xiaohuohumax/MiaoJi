import{bS as re,bb as ne,O as te,z as s,v as p,$ as ie,y as b,x as l,_ as ae,aa as se,e as _,C as k,B as y,D as de,d as x,F as w,k as f,bT as ce,H as S,a1 as le,bU as be,Y as fe,m as ge}from"./index-8Nduy9rO.js";import{g as ue}from"./Space-DmT7jGdB.js";function R(e,...o){if(Array.isArray(e))e.forEach(n=>R(n,...o));else return e(...o)}function me(e){return Object.keys(e)}function g(e){return e.some(o=>re(o)?!(o.type===ne||o.type===te&&!g(o.children)):!0)?e:null}function $e(e,o){return e&&g(e())||o()}function _e(e,o,n){return e&&g(e(o))||n(o)}function v(e,o){const n=e&&g(e());return o(n||null)}function ke(e){return!(e&&g(e()))}const he=/^(\d|\.)+$/,$=/(\d|\.)+/;function ve(e,{c:o=1,offset:n=0,attachPx:r=!0}={}){if(typeof e=="number"){const i=(e+n)*o;return i===0?"0":`${i}px`}else if(typeof e=="string")if(he.test(e)){const i=(Number(e)+n)*o;return r?i===0?"0":`${i}px`:`${i}`}else{const i=$.exec(e);return i?e.replace($,String((Number(i[0])+n)*o)):e}return e}function we(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const pe=s([p("card",`
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
 `,[ie({background:"var(--n-color-modal)"}),b("hoverable",[s("&:hover","box-shadow: var(--n-box-shadow);")]),b("content-segmented",[s(">",[l("content",{paddingTop:"var(--n-padding-bottom)"})])]),b("content-soft-segmented",[s(">",[l("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),b("footer-segmented",[s(">",[l("footer",{paddingTop:"var(--n-padding-bottom)"})])]),b("footer-soft-segmented",[s(">",[l("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),s(">",[p("card-header",`
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
 `)]),p("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[s("img",`
 display: block;
 width: 100%;
 `)]),b("bordered",`
 border: 1px solid var(--n-border-color);
 `,[s("&:target","border-color: var(--n-color-target);")]),b("action-segmented",[s(">",[l("action",[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("content-segmented, content-soft-segmented",[s(">",[l("content",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("footer-segmented, footer-soft-segmented",[s(">",[l("footer",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("embedded",`
 background-color: var(--n-color-embedded);
 `)]),ae(p("card",`
 background: var(--n-color-modal);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),se(p("card",`
 background: var(--n-color-popover);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),E={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},Re=me(E),xe=Object.assign(Object.assign({},y.props),E),Ee=_({name:"Card",props:xe,setup(e){const o=()=>{const{onClose:a}=e;a&&R(a)},{inlineThemeDisabled:n,mergedClsPrefixRef:r,mergedRtlRef:i}=k(e),d=y("Card","-card",pe,ce,e,r),u=de("Card",i,r),m=x(()=>{const{size:a}=e,{self:{color:t,colorModal:h,colorTarget:z,textColor:C,titleTextColor:P,titleFontWeight:O,borderColor:T,actionColor:B,borderRadius:F,lineHeight:j,closeIconColor:N,closeIconColorHover:I,closeIconColorPressed:V,closeColorHover:H,closeColorPressed:M,closeBorderRadius:A,closeIconSize:D,closeSize:L,boxShadow:W,colorPopover:K,colorEmbedded:U,colorEmbeddedModal:Y,colorEmbeddedPopover:Z,[S("padding",a)]:q,[S("fontSize",a)]:G,[S("titleFontSize",a)]:J},common:{cubicBezierEaseInOut:Q}}=d.value,{top:X,left:ee,bottom:oe}=ue(q);return{"--n-bezier":Q,"--n-border-radius":F,"--n-color":t,"--n-color-modal":h,"--n-color-popover":K,"--n-color-embedded":U,"--n-color-embedded-modal":Y,"--n-color-embedded-popover":Z,"--n-color-target":z,"--n-text-color":C,"--n-line-height":j,"--n-action-color":B,"--n-title-text-color":P,"--n-title-font-weight":O,"--n-close-icon-color":N,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":V,"--n-close-color-hover":H,"--n-close-color-pressed":M,"--n-border-color":T,"--n-box-shadow":W,"--n-padding-top":X,"--n-padding-bottom":oe,"--n-padding-left":ee,"--n-font-size":G,"--n-title-font-size":J,"--n-close-size":L,"--n-close-icon-size":D,"--n-close-border-radius":A}}),c=n?w("card",x(()=>e.size[0]),m,e):void 0;return{rtlEnabled:u,mergedClsPrefix:r,mergedTheme:d,handleCloseClick:o,cssVars:n?void 0:m,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{segmented:e,bordered:o,hoverable:n,mergedClsPrefix:r,rtlEnabled:i,onRender:d,embedded:u,tag:m,$slots:c}=this;return d==null||d(),f(m,{class:[`${r}-card`,this.themeClass,u&&`${r}-card--embedded`,{[`${r}-card--rtl`]:i,[`${r}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:o,[`${r}-card--hoverable`]:n}],style:this.cssVars,role:this.role},v(c.cover,a=>{const t=this.cover?g([this.cover()]):a;return t&&f("div",{class:`${r}-card-cover`,role:"none"},t)}),v(c.header,a=>{const{title:t}=this,h=t?g(typeof t=="function"?[t()]:[t]):a;return h||this.closable?f("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},f("div",{class:`${r}-card-header__main`,role:"heading"},h),v(c["header-extra"],z=>{const C=this.headerExtra?g([this.headerExtra()]):z;return C&&f("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},C)}),this.closable&&f(le,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),v(c.default,a=>{const{content:t}=this,h=t?g(typeof t=="function"?[t()]:[t]):a;return h&&f("div",{class:[`${r}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},h)}),v(c.footer,a=>{const t=this.footer?g([this.footer()]):a;return t&&f("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},t)}),v(c.action,a=>{const t=this.action?g([this.action()]):a;return t&&f("div",{class:`${r}-card__action`,role:"none"},t)}))}}),Ce=p("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[b("color-transition",{transition:"color .3s var(--n-bezier)"}),b("depth",{color:"var(--n-color)"},[s("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),s("svg",{height:"1em",width:"1em"})]),ye=Object.assign(Object.assign({},y.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),Pe=_({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:ye,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=k(e),r=y("Icon","-icon",Ce,be,e,o),i=x(()=>{const{depth:u}=e,{common:{cubicBezierEaseInOut:m},self:c}=r.value;if(u!==void 0){const{color:a,[`opacity${u}Depth`]:t}=c;return{"--n-bezier":m,"--n-color":a,"--n-opacity":t}}return{"--n-bezier":m,"--n-color":"","--n-opacity":""}}),d=n?w("icon",x(()=>`${e.depth||"d"}`),i,e):void 0;return{mergedClsPrefix:o,mergedStyle:x(()=>{const{size:u,color:m}=e;return{fontSize:ve(u),color:m}}),cssVars:n?void 0:i,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{$parent:o,depth:n,mergedClsPrefix:r,component:i,onRender:d,themeClass:u}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&fe("icon","don't wrap `n-icon` inside `n-icon`"),d==null||d(),f("i",ge(this.$attrs,{role:"img",class:[`${r}-icon`,u,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?f(i):this.$slots)}}),Oe=(e,o)=>{const n=e.__vccOpts||e;for(const[r,i]of o)n[r]=i;return n};export{Pe as N,Oe as _,$e as a,_e as b,R as c,E as d,Ee as e,ve as f,Re as g,we as h,ke as i,me as k,v as r};
