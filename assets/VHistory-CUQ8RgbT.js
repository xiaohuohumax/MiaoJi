import{_ as D}from"./CRelativeTime.vue_vue_type_script_setup_true_lang-CreIa-b_.js";import{C as A}from"./CSubTitle-DB9RCy18.js";import{v as i,y as f,z as g,x as l,e as x,C as B,B as N,p as G,k as m,aR as J,P as Q,i as U,ac as X,d as y,H as h,F as Y,aw as Z,ap as _,ao as d,at as u,ai as v,an as p,au as ee,av as C,aj as te,aB as ie,O as ne,aC as oe,ak as re}from"./index-8Nduy9rO.js";import{a as z}from"../app.config.DbvFL-si.js";import{C as ae}from"./CMarkdown-duaaFRoc.js";import{_ as le}from"./CLoadPages.vue_vue_type_script_setup_true_lang-D7ZHO-pn.js";import{_ as se}from"./CReactions.vue_vue_type_script_setup_true_lang-xL5WY4lk.js";import{f as ce,r as S,a as $,e as w}from"./_plugin-vue_export-helper-NmBTaXtx.js";import{i as me,N as T}from"./Space-DmT7jGdB.js";import"./CPreIcon.vue_vue_type_script_setup_true_lang-BGuuwGKN.js";import"./Empty-Bvz1bHPu.js";import"./CLink.vue_vue_type_script_setup_true_lang-ZMawmrFq.js";let k=!1;function de(){if(me&&window.CSS&&!k&&(k=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const P=1.25,pe=i("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${P};
`,[f("horizontal",`
 flex-direction: row;
 `,[g(">",[i("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[f("dashed-line-type",[g(">",[i("timeline-item-timeline",[l("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),g(">",[i("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[g(">",[l("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),i("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[l("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),f("right-placement",[i("timeline-item",[i("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),i("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),f("left-placement",[i("timeline-item",[i("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),i("timeline-item-timeline",`
 left: 0;
 `)])]),i("timeline-item",`
 position: relative;
 `,[g("&:last-child",[i("timeline-item-timeline",[l("line",`
 display: none;
 `)]),i("timeline-item-content",[l("meta",`
 margin-bottom: 0;
 `)])]),i("timeline-item-content",[l("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),l("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),l("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),f("dashed-line-type",[i("timeline-item-timeline",[l("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),i("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${P} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[l("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),l("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),l("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ue=Object.assign(Object.assign({},N.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),R=Q("n-timeline"),fe=x({name:"Timeline",props:ue,setup(e,{slots:o}){const{mergedClsPrefixRef:r}=B(e),s=N("Timeline","-timeline",pe,J,e,r);return G(R,{props:e,mergedThemeRef:s,mergedClsPrefixRef:r}),()=>{const{value:t}=r;return m("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},o)}}}),ge={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},he=x({name:"TimelineItem",props:ge,setup(e){const o=U(R);o||X("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),de();const{inlineThemeDisabled:r}=B(),s=y(()=>{const{props:{size:n,iconSize:c},mergedThemeRef:a}=o,{type:b}=e,{self:{titleTextColor:V,contentTextColor:j,metaTextColor:F,lineColor:I,titleFontWeight:H,contentFontSize:L,[h("iconSize",n)]:E,[h("titleMargin",n)]:M,[h("titleFontSize",n)]:O,[h("circleBorder",b)]:K,[h("iconColor",b)]:W},common:{cubicBezierEaseInOut:q}}=a.value;return{"--n-bezier":q,"--n-circle-border":K,"--n-icon-color":W,"--n-content-font-size":L,"--n-content-text-color":j,"--n-line-color":I,"--n-meta-text-color":F,"--n-title-font-size":O,"--n-title-font-weight":H,"--n-title-margin":M,"--n-title-text-color":V,"--n-icon-size":ce(c)||E}}),t=r?Y("timeline-item",y(()=>{const{props:{size:n,iconSize:c}}=o,{type:a}=e;return`${n[0]}${c||"a"}${a[0]}`}),s,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:r?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:o,onRender:r,$slots:s}=this;return r==null||r(),m("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},m("div",{class:`${e}-timeline-item-timeline`},m("div",{class:`${e}-timeline-item-timeline__line`}),S(s.icon,t=>t?m("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:o}},t):m("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:o}}))),m("div",{class:`${e}-timeline-item-content`},S(s.header,t=>t||this.title?m("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),m("div",{class:`${e}-timeline-item-content__content`},$(s.default,()=>[this.content])),m("div",{class:`${e}-timeline-item-content__meta`},$(s.footer,()=>[this.time]))))}}),ve={class:"text-xl"},Be=x({__name:"VHistory",setup(e){const{t:o}=Z();async function r(t,n){const c=await oe.page({page:t,per_page:n,labels:z.funcLabels.history});return{datas:c,hasNext:c.length===n}}function s(t){for(const{name:n,color:c}of t.labels)if(n.startsWith(z.funcLabels.history)&&n!==z.funcLabels.history)return`#${c}`}return(t,n)=>(v(),_(u(T),{vertical:!0},{default:d(()=>[p(u(w),{size:"small"},{default:d(()=>[p(A,null,{default:d(()=>[ee(C(u(o)("page.history.title")),1)]),_:1})]),_:1}),p(u(w),{size:"small"},{default:d(()=>[p(le,{"query-pages-func":r},{default:d(({datas:c})=>[p(u(fe),null,{default:d(()=>[(v(!0),te(ne,null,ie(c,a=>(v(),_(u(he),{key:a.number,color:s(a)},{header:d(()=>[re("div",ve,C(a.title),1)]),footer:d(()=>[p(u(T),{vertical:"",size:"small"},{default:d(()=>[p(se,{reaction:a.reactions,"issue-url":a.html_url},null,8,["reaction","issue-url"]),p(D,{"updated-at":a.created_at},null,8,["updated-at"]),p(ae,{id:a.number,content:a.body},null,8,["id","content"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:2},1024)]),_:1})]),_:1})]),_:1}))}});export{Be as default};
