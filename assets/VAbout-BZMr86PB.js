import{C as p}from"./CSubTitle-CmgzOeZW.js";import{e as c,au as f,r as _,an as d,am as t,ar as r,ah as g,al as e,as as b,at as C,aA as w}from"./index-CxY8spwR.js";import{a as y}from"../app.config.D_pCpokF.js";import{C as N}from"./CMarkdown-5E5ZYdfx.js";import{_ as h}from"./CReactions.vue_vue_type_script_setup_true_lang-DPnrl9Yh.js";import{_ as x}from"./CLoadData.vue_vue_type_script_setup_true_lang-BEg-t0rh.js";import{u as k}from"./use-message-McSwIFcp.js";import{e as i}from"./_plugin-vue_export-helper-nDMbTP-M.js";import{N as v}from"./Space-mIpbSOwT.js";import"./CLink.vue_vue_type_script_setup_true_lang-CNdXO93o.js";import"./CPreIcon.vue_vue_type_script_setup_true_lang-DNigZjxb.js";const I=c({__name:"VAbout",setup(A){const{t:o}=f(),l=k(),n=_();async function m(){const s=await w.page({page:1,per_page:1,labels:y.funcLabels.about});if(s.length===0)throw l.error(o("api.error.notFound")),new Error("not found");return s[0]}return(s,u)=>(g(),d(r(v),{vertical:!0},{default:t(()=>[e(r(i),{size:"small"},{default:t(()=>[e(p,null,{default:t(()=>[b(C(r(o)("page.about.title")),1)]),_:1})]),_:1}),e(r(i),{size:"small"},{default:t(()=>[e(x,{data:n.value,"onUpdate:data":u[0]||(u[0]=a=>n.value=a),"query-data-func":m},{success:t(({data:a})=>[e(N,{id:a.number,content:a.body},null,8,["id","content"]),e(h,{reaction:a.reactions,"issue-url":a.html_url},null,8,["reaction","issue-url"])]),_:1},8,["data"])]),_:1})]),_:1}))}});export{I as default};
