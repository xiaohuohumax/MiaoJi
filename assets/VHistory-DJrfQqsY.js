import{_ as A}from"./CRelativeTime.vue_vue_type_script_setup_true_lang-CzfZbqOX.js";import{C as D}from"./CSubTitle-CmgzOeZW.js";import{v as i,y as f,z as g,x as a,e as x,C as N,B,p as G,k as m,aP as J,P as Q,i as U,ab as X,d as y,H as h,F as Y,au as Z,an as _,am as d,ar as p,ah as v,al as u,as as ee,at as C,ai as te,az as ie,O as ne,aA as oe,aj as re}from"./index-CxY8spwR.js";import{a as z}from"../app.config.D_pCpokF.js";import{C as le}from"./CMarkdown-5E5ZYdfx.js";import{_ as ae}from"./CLoadPages.vue_vue_type_script_setup_true_lang-CvwEzbuG.js";import{_ as se}from"./CReactions.vue_vue_type_script_setup_true_lang-DPnrl9Yh.js";import{g as ce,r as S,a as $,e as w}from"./_plugin-vue_export-helper-nDMbTP-M.js";import{i as me,N as T}from"./Space-mIpbSOwT.js";import"./CPreIcon.vue_vue_type_script_setup_true_lang-DNigZjxb.js";import"./Empty-YkuNE07o.js";import"./CLink.vue_vue_type_script_setup_true_lang-CNdXO93o.js";let P=!1;function de(){if(me&&window.CSS&&!P&&(P=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const k=1.25,ue=i("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${k};
`,[f("horizontal",`
 flex-direction: row;
 `,[g(">",[i("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[f("dashed-line-type",[g(">",[i("timeline-item-timeline",[a("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),g(">",[i("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[g(">",[a("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),i("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[a("line",`
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
 `,[g("&:last-child",[i("timeline-item-timeline",[a("line",`
 display: none;
 `)]),i("timeline-item-content",[a("meta",`
 margin-bottom: 0;
 `)])]),i("timeline-item-content",[a("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),a("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),a("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),f("dashed-line-type",[i("timeline-item-timeline",[a("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),i("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${k} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[a("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),a("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),a("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),pe=Object.assign(Object.assign({},B.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),R=Q("n-timeline"),fe=x({name:"Timeline",props:pe,setup(e,{slots:o}){const{mergedClsPrefixRef:r}=N(e),s=B("Timeline","-timeline",ue,J,e,r);return G(R,{props:e,mergedThemeRef:s,mergedClsPrefixRef:r}),()=>{const{value:t}=r;return m("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},o)}}}),ge={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},he=x({name:"TimelineItem",props:ge,setup(e){const o=U(R);o||X("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),de();const{inlineThemeDisabled:r}=N(),s=y(()=>{const{props:{size:n,iconSize:c},mergedThemeRef:l}=o,{type:b}=e,{self:{titleTextColor:V,contentTextColor:j,metaTextColor:F,lineColor:I,titleFontWeight:H,contentFontSize:L,[h("iconSize",n)]:E,[h("titleMargin",n)]:M,[h("titleFontSize",n)]:O,[h("circleBorder",b)]:K,[h("iconColor",b)]:W},common:{cubicBezierEaseInOut:q}}=l.value;return{"--n-bezier":q,"--n-circle-border":K,"--n-icon-color":W,"--n-content-font-size":L,"--n-content-text-color":j,"--n-line-color":I,"--n-meta-text-color":F,"--n-title-font-size":O,"--n-title-font-weight":H,"--n-title-margin":M,"--n-title-text-color":V,"--n-icon-size":ce(c)||E}}),t=r?Y("timeline-item",y(()=>{const{props:{size:n,iconSize:c}}=o,{type:l}=e;return`${n[0]}${c||"a"}${l[0]}`}),s,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:r?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:o,onRender:r,$slots:s}=this;return r==null||r(),m("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},m("div",{class:`${e}-timeline-item-timeline`},m("div",{class:`${e}-timeline-item-timeline__line`}),S(s.icon,t=>t?m("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:o}},t):m("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:o}}))),m("div",{class:`${e}-timeline-item-content`},S(s.header,t=>t||this.title?m("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),m("div",{class:`${e}-timeline-item-content__content`},$(s.default,()=>[this.content])),m("div",{class:`${e}-timeline-item-content__meta`},$(s.footer,()=>[this.time]))))}}),ve={class:"text-xl"},Ne=x({__name:"VHistory",setup(e){const{t:o}=Z();async function r(t,n){const c=await oe.page({page:t,per_page:n,labels:z.funcLabels.history});return{datas:c,hasNext:c.length===n}}function s(t){for(const{name:n,color:c}of t.labels)if(n.startsWith(z.funcLabels.history)&&n!==z.funcLabels.history)return`#${c}`}return(t,n)=>(v(),_(p(T),{vertical:!0},{default:d(()=>[u(p(w),{size:"small"},{default:d(()=>[u(D,null,{default:d(()=>[ee(C(p(o)("page.history.title")),1)]),_:1})]),_:1}),u(p(w),{size:"small"},{default:d(()=>[u(ae,{"query-pages-func":r},{default:d(({datas:c})=>[u(p(fe),null,{default:d(()=>[(v(!0),te(ne,null,ie(c,l=>(v(),_(p(he),{key:l.number,color:s(l)},{header:d(()=>[re("div",ve,C(l.title),1)]),footer:d(()=>[u(p(T),{vertical:"",size:"small"},{default:d(()=>[u(se,{reaction:l.reactions,"issue-url":l.html_url},null,8,["reaction","issue-url"]),u(A,{"updated-at":l.created_at},null,8,["updated-at"]),u(le,{id:l.number,content:l.body},null,8,["id","content"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:2},1024)]),_:1})]),_:1})]),_:1}))}});export{Ne as default};
