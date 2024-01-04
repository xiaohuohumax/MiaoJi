import{i as U,f as X,w as Y,N as k,d as Z,c as S}from"./loading-fb142471.js";import{C as ee}from"./COver-5801d771.js";import{_ as te}from"./CSubTitle.vue_vue_type_script_setup_true_lang-a2d65008.js";import{f as n,q as z,g as x,i as s,d as $,v as F,x as H,B as ie,h as u,m as ne,az as oe,n as re,a1 as le,p as P,D as ae,H as b,a as T,a9 as _,a8 as c,af as a,al as se,am as ce,a6 as v,a4 as m,a7 as N,ak as me,F as de,ac as ue,ad as y,ag as C,ae as fe}from"./index-e356217c.js";import{C as ge}from"./CMarkdown-ae279578.js";import{_ as pe,N as B}from"./CReactions.vue_vue_type_script_setup_true_lang-bcd65140.js";import{a as w}from"../app.config.js";import{b as R,r as V,N as ve}from"./Card-5655ee7b.js";import"./use-locale-4b393f32.js";let I=!1;function he(){if(U&&window.CSS&&!I&&(I=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const L=1.25,ze=n("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${L};
`,[z("horizontal",`
 flex-direction: row;
 `,[x(">",[n("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[z("dashed-line-type",[x(">",[n("timeline-item-timeline",[s("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),x(">",[n("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[x(">",[s("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),n("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[s("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),z("right-placement",[n("timeline-item",[n("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),n("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),z("left-placement",[n("timeline-item",[n("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),n("timeline-item-timeline",`
 left: 0;
 `)])]),n("timeline-item",`
 position: relative;
 `,[x("&:last-child",[n("timeline-item-timeline",[s("line",`
 display: none;
 `)]),n("timeline-item-content",[s("meta",`
 margin-bottom: 0;
 `)])]),n("timeline-item-content",[s("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),s("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),s("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),z("dashed-line-type",[n("timeline-item-timeline",[s("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),n("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${L} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[s("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),s("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),s("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),xe=Object.assign(Object.assign({},H.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),D=ne("n-timeline"),be=$({name:"Timeline",props:xe,setup(e,{slots:r}){const{mergedClsPrefixRef:o}=F(e),l=H("Timeline","-timeline",ze,oe,e,o);return ie(D,{props:e,mergedThemeRef:l,mergedClsPrefixRef:o}),()=>{const{value:t}=o;return u("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},r)}}}),_e={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},ye=$({name:"TimelineItem",props:_e,setup(e){const r=re(D);r||le("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),he();const{inlineThemeDisabled:o}=F(),l=P(()=>{const{props:{size:f,iconSize:p},mergedThemeRef:h}=r,{type:g}=e,{self:{titleTextColor:d,contentTextColor:i,metaTextColor:O,lineColor:E,titleFontWeight:M,contentFontSize:q,[b("iconSize",f)]:K,[b("titleMargin",f)]:W,[b("titleFontSize",f)]:A,[b("circleBorder",g)]:G,[b("iconColor",g)]:J},common:{cubicBezierEaseInOut:Q}}=h.value;return{"--n-bezier":Q,"--n-circle-border":G,"--n-icon-color":J,"--n-content-font-size":q,"--n-content-text-color":i,"--n-line-color":E,"--n-meta-text-color":O,"--n-title-font-size":A,"--n-title-font-weight":M,"--n-title-margin":W,"--n-title-text-color":d,"--n-icon-size":X(p)||K}}),t=o?ae("timeline-item",P(()=>{const{props:{size:f,iconSize:p}}=r,{type:h}=e;return`${f[0]}${p||"a"}${h[0]}`}),l,r.props):void 0;return{mergedClsPrefix:r.mergedClsPrefixRef,cssVars:o?void 0:l,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:r,onRender:o,$slots:l}=this;return o==null||o(),u("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},u("div",{class:`${e}-timeline-item-timeline`},u("div",{class:`${e}-timeline-item-timeline__line`}),R(l.icon,t=>t?u("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:r}},t):u("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:r}}))),u("div",{class:`${e}-timeline-item-content`},R(l.header,t=>t||this.title?u("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),u("div",{class:`${e}-timeline-item-content__content`},V(l.default,()=>[this.content])),u("div",{class:`${e}-timeline-item-content__meta`},V(l.footer,()=>[this.time]))))}}),Ce={class:"text-xl"},Se={class:"text-center"},we={key:1,class:"text-center"},j=10,Le=$({__name:"PHistory",setup(e){let r=1;const o=T([]),l=Y({state:"loading",fail:"历史查询失败!"}),t=T(!1);async function f(g){l.value="loading";const[d,i]=await se(ce.qIssuePage({labels:w.label.historyLabel,state:"all",page:g.toString(),per_page:j.toString()}));if(d){l.value="fail";return}(i.length==0||i.length<j)&&(t.value=!0),o.value.push(...i),l.value="success"}f(r);function p(){const g=o.value.length,d=r+1;f(d).then(()=>{g!=o.value.length&&(r+=d)})}function h({labels:g}){const d=g.find(({name:i})=>i.startsWith(w.label.historyLabel)&&i.length>w.label.historyLabel.length);return d!=null?"#"+d.color:"default"}return(g,d)=>(v(),_(a(S),{vertical:""},{default:c(()=>[m(a(te),{context:"历史"}),o.value.length>0?(v(),_(a(ve),{key:0,size:"small",bordered:!1},{default:c(()=>[m(a(be),null,{default:c(()=>[(v(!0),N(de,null,me(o.value,i=>(v(),_(a(ye),{key:i.number,color:h(i)},{header:c(()=>[y("div",Ce,fe(i.title),1)]),footer:c(()=>[m(a(S),{vertical:"",size:"small"},{default:c(()=>[m(pe,{reactions:i.reactions},null,8,["reactions"]),m(a(S),null,{default:c(()=>[y("span",null,[C(" 创建于: "),m(a(B),{time:new Date(i.created_at)},null,8,["time"])]),y("span",null,[C(" 更新于: "),m(a(B),{time:new Date(i.updated_at),type:"relative"},null,8,["time"])])]),_:2},1024),m(ge,{text:i.body,id:i.number},null,8,["text","id"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:1})]),_:1})):ue("",!0),m(a(Z),{state:a(l)},{fail:c(()=>[y("div",Se,[m(a(k),{onClick:p},{default:c(()=>[C(" 重试 ")]),_:1})])]),default:c(()=>[t.value?(v(),_(a(ee),{key:0})):(v(),N("div",we,[m(a(k),{onClick:p},{default:c(()=>[C(" 更多 ")]),_:1})]))]),_:1},8,["state"])]),_:1}))}});export{Le as default};
