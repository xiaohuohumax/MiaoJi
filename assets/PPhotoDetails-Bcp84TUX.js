import{d as C,aq as I,as as D,a as L,e as $,ai as p,ah as l,ao as a,aw as B,ax as P,aI as q,aM as A,aJ as v,af as i,ad as t,am as n,an as u,ap as h,ag as g,av as b,aH as F,S as N}from"./index-BTjIPu72.js";import{w as S,_ as T}from"./loading-B7CF2kwk.js";import{_ as V}from"./CLabel.vue_vue_type_script_setup_true_lang-D6hhP7DD.js";import{N as x,_ as z}from"./CReactions.vue_vue_type_script_setup_true_lang-CbpDxAGq.js";import{a as G}from"../app.config.BqbS9028.js";import{_ as E}from"./CComments.vue_vue_type_script_setup_true_lang-TtqSYaSZ.js";import{N as y,h as d}from"./Space-Dwyrx8eU.js";import{N as H,a as J}from"./Grid-CLM2hPih.js";import{N as M}from"./Image-CjDbuVIh.js";import"./use-locale-CmRwvaf0.js";import"./COver.vue_vue_type_script_setup_true_lang-C4dpfn6V.js";import"./CMarkdown-CJUxR0mz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VResizeObserver-BC1hRH5P.js";import"./Popover-DkLbEVrp.js";const R={class:"text-2xl font-bold align-middle"},j=["href"],ia=C({__name:"PPhotoDetails",props:{id:{}},setup(k){const{t:o}=I(),f=D(),w=k,e=L(null),m=S({state:"loading",fail:()=>o("component.cLoading.fail",{name:o("page.photoDetails.subtitle")})});async function _(){var s;m.value="loading";const[r,c]=await B(P.qIssueById(w.id));if(r){if(((s=r==null?void 0:r.response)==null?void 0:s.status)==404){f.replace({name:"PNotFound"});return}m.value="fail";return}if(!q(c.data.labels,G.label.photoLabel)){f.replace({name:"PNotFound"});return}e.value={...c.data,images:A(c.data.body)},m.value="success",v({after:e.value.title})}return _(),$(()=>{e.value&&v({after:e.value.title})}),(r,c)=>(i(),p(a(T),{state:a(m)},{fail:l(()=>[t(a(y),{size:"small",bordered:!1},{default:l(()=>[n("button",{class:"p-2 w-full font-bold",onClick:_},u(a(o)("comment.button.retry")),1)]),_:1})]),default:l(()=>[t(a(d),{vertical:""},{default:l(()=>[t(a(y),{size:"small",bordered:!1},{default:l(()=>[t(a(d),{class:"text-sm relative",vertical:""},{default:l(()=>[n("p",R,u(e.value.title),1),t(a(d),null,{default:l(()=>[n("a",{target:"_blank",href:e.value.user.html_url},[n("span",null,u(e.value.user.login),1)],8,j),n("span",null,[h(u(a(o)("comment.span.createAt"))+": ",1),t(a(x),{time:new Date(e.value.created_at)},null,8,["time"])]),n("span",null,[h(u(a(o)("comment.span.updateAt"))+": ",1),t(a(x),{time:new Date(e.value.updated_at),type:"relative"},null,8,["time"])])]),_:1}),t(a(d),{align:"center"},{default:l(()=>[(i(!0),g(N,null,b(a(F)(e.value.labels),s=>(i(),p(V,{key:s.id,"hidden-des":!0,onClick:K=>r.$router.push({path:"/",query:{label:s.name}}),label:s,class:"font-bold"},null,8,["onClick","label"]))),128)),t(z,{reactions:e.value.reactions},null,8,["reactions"])]),_:1}),t(a(H),{cols:"1 s:2 m:3 l:4 xl:5 2xl:6",responsive:"screen","x-gap":8},{default:l(()=>[(i(!0),g(N,null,b(e.value.images,s=>(i(),p(a(J),{key:s.src},{default:l(()=>[t(a(M),{class:"rounded-md",src:s.src,alt:s.alt},null,8,["src","alt"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(E,{issue:e.value,title:a(o)("page.photoDetails.commentsTitle")},null,8,["issue","title"])]),_:1})]),_:1},8,["state"]))}});export{ia as default};