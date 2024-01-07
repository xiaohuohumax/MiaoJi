import{f as X,w as Y,N,_ as Z}from"./loading-59b51ff0.js";import{_ as ee}from"./COver.vue_vue_type_script_setup_true_lang-e5cb7dd1.js";import{_ as te}from"./CSubTitle.vue_vue_type_script_setup_true_lang-da02394c.js";import{C as ie}from"./CMarkdown-6b7555ed.js";import{f as a,q as x,g as b,i as s,d as T,v as H,x as O,B as ne,h as p,m as oe,aC as ae,n as re,a2 as le,p as B,D as _,E as se,ag as ce,ah as me,a as R,a9 as S,a8 as m,ae as i,am as de,an as ue,a6 as v,a4 as d,a7 as I,ak as pe,F as fe,al as ge,ac as C,af as w,ad as y}from"./index-efee6842.js";import{_ as he,N as L}from"./CReactions.vue_vue_type_script_setup_true_lang-78fd347e.js";import{a as k}from"../app.config.js";import{i as ve,b as V,r as j,N as ze,j as P}from"./Space-6bdbf578.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-locale-73f1eb57.js";let F=!1;function xe(){if(ve&&window.CSS&&!F&&(F=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const D=1.25,be=a("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${D};
`,[x("horizontal",`
 flex-direction: row;
 `,[b(">",[a("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[x("dashed-line-type",[b(">",[a("timeline-item-timeline",[s("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),b(">",[a("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[b(">",[s("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),a("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[s("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),x("right-placement",[a("timeline-item",[a("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),a("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),x("left-placement",[a("timeline-item",[a("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),a("timeline-item-timeline",`
 left: 0;
 `)])]),a("timeline-item",`
 position: relative;
 `,[b("&:last-child",[a("timeline-item-timeline",[s("line",`
 display: none;
 `)]),a("timeline-item-content",[s("meta",`
 margin-bottom: 0;
 `)])]),a("timeline-item-content",[s("title",`
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
 `)]),x("dashed-line-type",[a("timeline-item-timeline",[s("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),a("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${D} / 2 - var(--n-icon-size) / 2);
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
 `)])])]),_e=Object.assign(Object.assign({},O.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),A=oe("n-timeline"),ye=T({name:"Timeline",props:_e,setup(e,{slots:n}){const{mergedClsPrefixRef:l}=H(e),r=O("Timeline","-timeline",be,ae,e,l);return ne(A,{props:e,mergedThemeRef:r,mergedClsPrefixRef:l}),()=>{const{value:t}=l;return p("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},n)}}}),Se={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},Ce=T({name:"TimelineItem",props:Se,setup(e){const n=re(A);n||le("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),xe();const{inlineThemeDisabled:l}=H(),r=B(()=>{const{props:{size:c,iconSize:g},mergedThemeRef:h}=n,{type:z}=e,{self:{titleTextColor:$,contentTextColor:f,metaTextColor:u,lineColor:o,titleFontWeight:M,contentFontSize:q,[_("iconSize",c)]:K,[_("titleMargin",c)]:W,[_("titleFontSize",c)]:G,[_("circleBorder",z)]:J,[_("iconColor",z)]:Q},common:{cubicBezierEaseInOut:U}}=h.value;return{"--n-bezier":U,"--n-circle-border":J,"--n-icon-color":Q,"--n-content-font-size":q,"--n-content-text-color":f,"--n-line-color":o,"--n-meta-text-color":u,"--n-title-font-size":G,"--n-title-font-weight":M,"--n-title-margin":W,"--n-title-text-color":$,"--n-icon-size":X(g)||K}}),t=l?se("timeline-item",B(()=>{const{props:{size:c,iconSize:g}}=n,{type:h}=e;return`${c[0]}${g||"a"}${h[0]}`}),r,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:l?void 0:r,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:l,$slots:r}=this;return l==null||l(),p("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},p("div",{class:`${e}-timeline-item-timeline`},p("div",{class:`${e}-timeline-item-timeline__line`}),V(r.icon,t=>t?p("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},t):p("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),p("div",{class:`${e}-timeline-item-content`},V(r.header,t=>t||this.title?p("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),p("div",{class:`${e}-timeline-item-content__content`},j(r.default,()=>[this.content])),p("div",{class:`${e}-timeline-item-content__meta`},j(r.footer,()=>[this.time]))))}}),we={class:"text-xl"},$e={class:"text-center"},ke={key:1,class:"text-center"},E=10,De=T({__name:"PHistory",setup(e){const{t:n}=ce(),l=me();let r=1;const t=R([]),c=Y({state:"loading",fail:()=>n("component.cLoading.fail",{name:n("page.history.subtitle")})}),g=R(!1);async function h(f){c.value="loading";const[u,o]=await de(ue.qIssuePage({labels:k.label.historyLabel,state:"all",page:f.toString(),per_page:E.toString()}));if(u){c.value="fail";return}(o.data.length==0||o.data.length<E)&&(g.value=!0),t.value.push(...o.data),c.value="success"}h(r);function z(){const f=t.value.length,u=r+1;h(u).then(()=>{f!=t.value.length&&(r+=u)})}function $({labels:f}){const u=f.find(({name:o})=>o.startsWith(k.label.historyLabel)&&o.length>k.label.historyLabel.length);return u!=null?"#"+u.color:"default"}return(f,u)=>(v(),S(i(P),{vertical:""},{default:m(()=>[d(i(te),{context:i(n)("page.history.subtitle")},null,8,["context"]),t.value.length>0?(v(),S(i(ze),{key:0,size:"small",bordered:!1},{default:m(()=>[d(i(ye),null,{default:m(()=>[(v(!0),I(fe,null,pe(t.value,o=>(v(),S(i(Ce),{key:o.number,color:$(o)},{header:m(()=>[C("div",we,y(o.title),1)]),footer:m(()=>[d(i(P),{vertical:"",size:"small"},{default:m(()=>[d(he,{reactions:o.reactions},null,8,["reactions"]),d(i(P),null,{default:m(()=>[C("span",null,[w(y(i(n)("comment.span.createAt"))+": ",1),d(i(L),{time:new Date(o.created_at)},null,8,["time"])]),C("span",null,[w(y(i(n)("comment.span.updateAt"))+": ",1),d(i(L),{time:new Date(o.updated_at),type:"relative"},null,8,["time"])])]),_:2},1024),d(i(ie),{text:o.body,id:o.number,theme:i(l).theme.markdown},null,8,["text","id","theme"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:1})]),_:1})):ge("",!0),d(i(Z),{state:i(c)},{fail:m(()=>[C("div",$e,[d(i(N),{onClick:z},{default:m(()=>[w(y(i(n)("comment.button.retry")),1)]),_:1})])]),default:m(()=>[g.value?(v(),S(i(ee),{key:0,context:i(n)("component.cOver.context")},null,8,["context"])):(v(),I("div",ke,[d(i(N),{onClick:z},{default:m(()=>[w(y(i(n)("comment.button.more")),1)]),_:1})]))]),_:1},8,["state"])]),_:1}))}});export{De as default};