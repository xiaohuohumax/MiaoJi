import{C as f}from"./CSubTitle-DB9RCy18.js";import{e as c,aw as _,r as d,ap as g,ao as t,at as r,ai as C,an as a,au as v,av as w,aC as b}from"./index-8Nduy9rO.js";import{a as y}from"../app.config.DbvFL-si.js";import{C as N}from"./CMarkdown-duaaFRoc.js";import{_ as x}from"./CReactions.vue_vue_type_script_setup_true_lang-xL5WY4lk.js";import{_ as h}from"./CComment.vue_vue_type_script_setup_true_lang-CTaGAJL-.js";import{_ as k}from"./CLoadData.vue_vue_type_script_setup_true_lang-lUYVh-4z.js";import{u as M}from"./use-message-CcGvLmxE.js";import{e as u}from"./_plugin-vue_export-helper-NmBTaXtx.js";import{N as m}from"./Space-DmT7jGdB.js";import"./CLink.vue_vue_type_script_setup_true_lang-ZMawmrFq.js";import"./CPreIcon.vue_vue_type_script_setup_true_lang-BGuuwGKN.js";import"./CRelativeTime.vue_vue_type_script_setup_true_lang-CreIa-b_.js";import"./Empty-Bvz1bHPu.js";import"./label-FT08EvGY.js";import"./CLoadPages.vue_vue_type_script_setup_true_lang-D7ZHO-pn.js";import"./Thing-D4eo5_FA.js";import"./Image-BVRwZqqM.js";import"./Tooltip-7tclQiV3.js";const P=c({__name:"VMessage",setup(S){const{t:i}=_(),p=M(),s=d();async function l(){const o=await b.page({page:1,per_page:1,labels:y.funcLabels.message});if(o.length===0)throw p.error(i("api.error.notFound")),new Error("not found");return o[0]}return(o,n)=>(C(),g(r(m),{vertical:!0},{default:t(()=>[a(r(m),{vertical:!0},{default:t(()=>[a(r(u),{size:"small"},{default:t(()=>[a(f,null,{default:t(()=>[v(w(r(i)("page.message.title")),1)]),_:1})]),_:1}),a(r(u),{size:"small"},{default:t(()=>[a(k,{data:s.value,"onUpdate:data":n[0]||(n[0]=e=>s.value=e),"query-data-func":l},{success:t(({data:e})=>[a(N,{id:e.number,content:e.body},null,8,["id","content"]),a(x,{reaction:e.reactions,"issue-url":e.html_url},null,8,["reaction","issue-url"])]),_:1},8,["data"])]),_:1})]),_:1}),a(h,{issue:s.value},null,8,["issue"])]),_:1}))}});export{P as default};
