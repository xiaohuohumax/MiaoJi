import{_ as G}from"./CSubTitle.vue_vue_type_script_setup_true_lang-Bfe9hjA7.js";import{v as i,y as f,z as g,x as a,e as _,C as R,B as V,p as J,k as p,aN as Q,P as U,i as X,ab as Y,d as S,H as h,F as Z,at as ee,am as $,al as u,aq as c,ag as v,ak as d,ah as te,ay as ie,O as ne,az as oe,ai as z,as as x,ar as w}from"./index-CyJLi7hy.js";import{a as b}from"../app.config.CCV9L8va.js";import{C as re}from"./CMarkdown-Bco7ZwAR.js";import{_ as le}from"./CLoadPages.vue_vue_type_script_setup_true_lang-BmI7j7VO.js";import{_ as ae}from"./CReactions.vue_vue_type_script_setup_true_lang-CO2R58ig.js";import{f as se}from"./CLink.vue_vue_type_script_setup_true_lang-HMvswr-0.js";import{r as T,a as k,N as ce}from"./Card-DpixUBK9.js";import{i as me,N as y}from"./Space-8dEtra5P.js";import{N}from"./Time-CdjuNrZF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Empty-BrxlxCHx.js";import"./Tag-Rmm5-vlX.js";let P=!1;function de(){if(me&&window.CSS&&!P&&(P=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const B=1.25,pe=i("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${B};
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
 top: calc(var(--n-title-font-size) * ${B} / 2 - var(--n-icon-size) / 2);
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
 `)])])]),ue=Object.assign(Object.assign({},V.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),F=U("n-timeline"),fe=_({name:"Timeline",props:ue,setup(e,{slots:n}){const{mergedClsPrefixRef:l}=R(e),s=V("Timeline","-timeline",pe,Q,e,l);return J(F,{props:e,mergedThemeRef:s,mergedClsPrefixRef:l}),()=>{const{value:t}=l;return p("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},n)}}}),ge={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},he=_({name:"TimelineItem",props:ge,setup(e){const n=X(F);n||Y("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),de();const{inlineThemeDisabled:l}=R(),s=S(()=>{const{props:{size:o,iconSize:m},mergedThemeRef:r}=n,{type:C}=e,{self:{titleTextColor:I,contentTextColor:j,metaTextColor:H,lineColor:L,titleFontWeight:D,contentFontSize:E,[h("iconSize",o)]:M,[h("titleMargin",o)]:O,[h("titleFontSize",o)]:q,[h("circleBorder",C)]:A,[h("iconColor",C)]:K},common:{cubicBezierEaseInOut:W}}=r.value;return{"--n-bezier":W,"--n-circle-border":A,"--n-icon-color":K,"--n-content-font-size":E,"--n-content-text-color":j,"--n-line-color":L,"--n-meta-text-color":H,"--n-title-font-size":q,"--n-title-font-weight":D,"--n-title-margin":O,"--n-title-text-color":I,"--n-icon-size":se(m)||M}}),t=l?Z("timeline-item",S(()=>{const{props:{size:o,iconSize:m}}=n,{type:r}=e;return`${o[0]}${m||"a"}${r[0]}`}),s,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:l?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:l,$slots:s}=this;return l==null||l(),p("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},p("div",{class:`${e}-timeline-item-timeline`},p("div",{class:`${e}-timeline-item-timeline__line`}),T(s.icon,t=>t?p("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},t):p("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),p("div",{class:`${e}-timeline-item-content`},T(s.header,t=>t||this.title?p("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),p("div",{class:`${e}-timeline-item-content__content`},k(s.default,()=>[this.content])),p("div",{class:`${e}-timeline-item-content__meta`},k(s.footer,()=>[this.time]))))}}),ve={class:"text-xl"},Be=_({__name:"VHistory",setup(e){const{t:n}=ee();async function l(t,o){const m=await oe.page({page:t,per_page:o,labels:b.funcLabels.history});return{datas:m,hasNext:m.length===o}}function s(t){for(const{name:o,color:m}of t.labels)if(o.startsWith(b.funcLabels.history)&&o!==b.funcLabels.history)return`#${m}`}return(t,o)=>(v(),$(c(ce),{bordered:!1},{default:u(()=>[d(c(y),{vertical:!0},{default:u(()=>[d(G,{title:c(n)("page.history.title")},null,8,["title"]),d(le,{"query-pages-func":l},{default:u(({datas:m})=>[d(c(fe),null,{default:u(()=>[(v(!0),te(ne,null,ie(m,r=>(v(),$(c(he),{key:r.number,color:s(r)},{header:u(()=>[z("div",ve,x(r.title),1)]),footer:u(()=>[d(c(y),{vertical:"",size:"small"},{default:u(()=>[d(ae,{reaction:r.reactions,"issue-url":r.html_url},null,8,["reaction","issue-url"]),d(c(y),null,{default:u(()=>[z("span",null,[w(x(c(n)("common.createdAt"))+" ",1),d(c(N),{time:new Date(r.created_at)},null,8,["time"])]),z("span",null,[w(x(c(n)("common.updatedAt"))+" ",1),d(c(N),{time:new Date(r.updated_at),type:"relative"},null,8,["time"])])]),_:2},1024),d(re,{id:r.number,content:r.body},null,8,["id","content"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:2},1024)]),_:1})]),_:1})]),_:1}))}});export{Be as default};
