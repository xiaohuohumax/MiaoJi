import{d as g,aq as x,ar as v,as as k,ai as u,ah as t,ao as e,af as r,ad as s,Y as L,Z as N,ag as w,av as C,S,am as m,ap as d,an as f,aw as y}from"./index-64af288b.js";import{w as B,N as _,_ as $}from"./loading-1effc8e2.js";import{_ as F}from"./CSubTitle.vue_vue_type_script_setup_true_lang-da400e25.js";import{_ as V}from"./CLabel.vue_vue_type_script_setup_true_lang-4a716e96.js";import{h as p,N as q}from"./Space-65dedc3e.js";import"../app.config.dacfcbaa.js";const D={class:"text-center"},z={class:"text-center hidden"},j=g({__name:"PLabel",setup(A){const{t:a}=x(),o=v(),h=k(),c=B({state:"success",fail:()=>a("component.cLoading.fail",{name:a("page.label.subtitle")}),success:()=>a("component.cLoading.success",{name:a("page.label.subtitle")})});async function i(){c.value="loading";const[n]=await y(o.loadLabels(1));c.value=n?"fail":"success"}function b(n){h.push({path:"/",query:{label:n.name}})}return(n,E)=>(r(),u(e(p),{vertical:""},{default:t(()=>[s(e(F),{context:e(a)("page.label.subtitle")},null,8,["context"]),L(s(e(q),{size:"small",bordered:!1},{default:t(()=>[s(e(p),null,{default:t(()=>[(r(!0),w(S,null,C(e(o).notFuncLabels,l=>(r(),u(V,{class:"truncate",label:l,"hidden-des":!1,key:l.name,onClick:H=>b(l)},null,8,["label","onClick"]))),128))]),_:1})]),_:1},512),[[N,e(o).notFuncLabels.length>0]]),s(e($),{state:e(c)},{fail:t(()=>[m("div",D,[s(e(_),{onClick:i,class:"mx-auto"},{default:t(()=>[d(f(e(a)("comment.button.retry")),1)]),_:1})])]),default:t(()=>[m("div",z,[s(e(_),{onClick:i,class:"mx-auto"},{default:t(()=>[d(f(e(a)("comment.button.refresh")),1)]),_:1})])]),_:1},8,["state"])]),_:1}))}});export{j as default};
