import{_ as b}from"./CLink.vue_vue_type_script_setup_true_lang-D9lmZ61M.js";import{_ as N}from"./CTags.vue_vue_type_script_setup_true_lang-BKXpx5Ux.js";import{C as g}from"./CTitle-BtS1Quxn.js";import{e as h,at as k,ag as n,am as l,al as r,ar as m,as as p,aq as a,au as y,r as v,ak as t,ap as $,az as A,aM as S}from"./index-Bwq5MEXp.js";import{C as w}from"./CMarkdown-DJ-dkTLU.js";import{_ as x}from"./CReactions.vue_vue_type_script_setup_true_lang-Cj22IlZ8.js";import{_ as I}from"./CComment.vue_vue_type_script_setup_true_lang-Dosmxp7C.js";import{_ as T}from"./CLoadData.vue_vue_type_script_setup_true_lang-Dfj50Dpt.js";import{N as u}from"./Space-BVa_0GKn.js";import{N as V}from"./Time-CKwwyGyZ.js";import{N as q}from"./_plugin-vue_export-helper-CHINyzN0.js";import"./label-DieEFeFB.js";import"../app.config.aGxtwYiP.js";import"./Tag-CaA0DMet.js";import"./CSubTitle-DcicpHZ0.js";import"./CLoadPages.vue_vue_type_script_setup_true_lang-DlIbzpFG.js";import"./Empty-DNsO3Sga.js";import"./Thing-BAqXHXx8.js";import"./Image-B4hZPXIT.js";import"./Tooltip-Doll0b94.js";const D=h({__name:"CEditAtGithub",props:{url:{}},setup(c){const{t:s}=k();return(_,f)=>(n(),l(b,{href:_.url,target:"_blank"},{default:r(()=>[m(p(a(s)("component.editAtGithub")),1)]),_:1},8,["href"]))}}),ee=h({__name:"VArticle",props:{id:{}},setup(c){const s=c,f=y().getIssueCache(Number.parseInt(s.id)),o=v();async function C(){const i=f||await A.get(Number.parseInt(s.id));return S.setTitle(i.title),i}return(i,d)=>(n(),l(a(u),{vertical:!0},{default:r(()=>[t(a(q),{bordered:!1},{default:r(()=>[t(T,{data:o.value,"onUpdate:data":d[0]||(d[0]=e=>o.value=e),"query-data-func":C},{success:r(({data:e})=>[t(a(u),{vertical:!0},{default:r(()=>[t(g,null,{default:r(()=>[m(p(e.title),1)]),_:2},1024),t(a(u),{align:"center"},{default:r(()=>[e.user?(n(),l(b,{key:0,href:e.user.html_url,target:"_blank"},{default:r(()=>[m(p(e.user.login),1)]),_:2},1032,["href"])):$("",!0),t(a(V),{time:new Date(e.updated_at),type:"relative"},null,8,["time"]),t(N,{labels:e.labels},null,8,["labels"]),t(x,{reaction:e.reactions,"issue-url":e.html_url},null,8,["reaction","issue-url"]),t(D,{url:e.html_url},null,8,["url"])]),_:2},1024),t(w,{id:e.number,content:e.body},null,8,["id","content"])]),_:2},1024)]),_:1},8,["data"])]),_:1}),t(I,{issue:o.value},null,8,["issue"])]),_:1}))}});export{ee as default};