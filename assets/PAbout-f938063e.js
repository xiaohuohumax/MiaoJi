import{w as b,N as x,_ as g}from"./loading-1effc8e2.js";import{_ as N}from"./COver.vue_vue_type_script_setup_true_lang-649c7464.js";import{_ as h}from"./CSubTitle.vue_vue_type_script_setup_true_lang-da400e25.js";import{C as w}from"./CMarkdown-5c84e946.js";import{d as y,aq as k,ar as C,a as A,ai as l,ah as o,ao as a,aw as S,ax as $,af as i,am as r,ad as e,ap as u,an as m}from"./index-64af288b.js";import{N as d,_ as B}from"./CReactions.vue_vue_type_script_setup_true_lang-710c4c59.js";import{a as T}from"../app.config.dacfcbaa.js";import{_ as q}from"./CComments.vue_vue_type_script_setup_true_lang-2fb8579b.js";import{h as c,N as D}from"./Space-65dedc3e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-locale-5f666cc0.js";const I={class:"text-center"},O=y({__name:"PAbout",setup(L){const{t:s}=k(),v=C(),t=A(null),n=b({state:"loading",fail:()=>s("component.cLoading.fail",{name:""})});async function p(){n.value="loading";const[f,_]=await S($.qIssuePage({labels:T.label.aboutLabel,per_page:"1",state:"all"}));if(f){n.value="fail";return}t.value=_.data[0],n.value="success"}return p(),(f,_)=>(i(),l(a(g),{state:a(n)},{fail:o(()=>[r("div",I,[e(a(x),{onClick:p,class:"mx-auto"},{default:o(()=>[u(m(a(s)("comment.button.retry")),1)]),_:1})])]),default:o(()=>[t.value?(i(),l(a(c),{key:1,vertical:""},{default:o(()=>[e(a(h),{context:a(s)("page.about.subtitle")},null,8,["context"]),e(a(D),{size:"small",bordered:!1},{default:o(()=>[e(a(c),{vertical:""},{default:o(()=>[e(a(w),{text:t.value.body,id:t.value.number,theme:a(v).theme.markdown},null,8,["text","id","theme"]),e(a(c),null,{default:o(()=>[r("span",null,[u(m(a(s)("comment.span.createAt"))+": ",1),e(a(d),{time:new Date(t.value.created_at)},null,8,["time"])]),r("span",null,[u(m(a(s)("comment.span.updateAt"))+": ",1),e(a(d),{time:new Date(t.value.updated_at),type:"relative"},null,8,["time"])]),e(B,{reactions:t.value.reactions},null,8,["reactions"])]),_:1})]),_:1})]),_:1}),e(q,{issue:t.value,title:a(s)("page.about.commentsTitle")},null,8,["issue","title"])]),_:1})):(i(),l(a(N),{key:0,context:a(s)("page.about.noPageTip")},null,8,["context"]))]),_:1},8,["state"]))}});export{O as default};
