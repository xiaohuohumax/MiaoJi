import{w as f,B as _,_ as d}from"./loading-B7CF2kwk.js";import{_ as x}from"./COver.vue_vue_type_script_setup_true_lang-C4dpfn6V.js";import{_ as g}from"./CSubTitle.vue_vue_type_script_setup_true_lang-xn7Zziks.js";import{C as v}from"./CMarkdown-CJUxR0mz.js";import{d as b,aq as h,ar as C,a as k,ai as i,ah as s,ao as a,aw as w,ax as y,af as c,am as N,ad as t,ap as B,an as S}from"./index-BTjIPu72.js";import{_ as $}from"./CReactions.vue_vue_type_script_setup_true_lang-CbpDxAGq.js";import{a as q}from"../app.config.BqbS9028.js";import{_ as L}from"./CComments.vue_vue_type_script_setup_true_lang-TtqSYaSZ.js";import{h as u,N as P}from"./Space-Dwyrx8eU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-locale-CmRwvaf0.js";const V={class:"text-center"},K=b({__name:"PCommunication",setup(z){const{t:e}=h(),p=C(),o=k(null),n=f({state:"init",fail:()=>e("component.cLoading.fail",{name:e("page.communication.subtitle")})});async function l(){n.value="loading";const[m,r]=await w(y.qIssuePage({labels:q.label.communicationLabel,per_page:"1",state:"all"}));if(m){n.value="fail";return}o.value=r.data[0],n.value="success"}return l(),(m,r)=>(c(),i(a(d),{state:a(n)},{fail:s(()=>[N("div",V,[t(a(_),{onClick:l,class:"mx-auto"},{default:s(()=>[B(S(a(e)("comment.button.retry")),1)]),_:1})])]),default:s(()=>[o.value?(c(),i(a(u),{key:1,vertical:""},{default:s(()=>[t(a(g),{context:a(e)("page.communication.subtitle")},null,8,["context"]),t(a(P),{bordered:!1,size:"small"},{default:s(()=>[t(a(u),{vertical:"",size:"small"},{default:s(()=>[t(a(v),{text:o.value.body,id:o.value.number,theme:a(p).theme.markdown},null,8,["text","id","theme"]),t($,{reactions:o.value.reactions},null,8,["reactions"])]),_:1})]),_:1}),t(L,{issue:o.value,title:a(e)("page.communication.subtitle")},null,8,["issue","title"])]),_:1})):(c(),i(a(x),{key:0,context:a(e)("page.communication.noPageTip")},null,8,["context"]))]),_:1},8,["state"]))}});export{K as default};