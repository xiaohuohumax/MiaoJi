import{w as P,B as b,_ as S}from"./loading-B7CF2kwk.js";import{_ as w}from"./COver.vue_vue_type_script_setup_true_lang-C4dpfn6V.js";import{_ as B}from"./CSubTitle.vue_vue_type_script_setup_true_lang-xn7Zziks.js";import{d as $,aq as I,a as k,ai as d,ah as a,ao as e,aw as L,ax as V,aM as q,af as n,ad as s,ag as N,av as z,S as A,al as D,am as p,ap as g,an as f}from"./index-BTjIPu72.js";import{N as G,_ as O}from"./CReactions.vue_vue_type_script_setup_true_lang-CbpDxAGq.js";import{a as T}from"../app.config.BqbS9028.js";import{N as j,a as E}from"./Grid-CLM2hPih.js";import{h as y,N as F}from"./Space-Dwyrx8eU.js";import"./use-locale-CmRwvaf0.js";import"./VResizeObserver-BC1hRH5P.js";const M=["src","alt"],H={class:"text-lg mt-2 hover:text-orange-500 dark:hover:text-green-300"},J={class:"text-center"},K={key:1,class:"text-center"},C=10,oe=$({__name:"PPhoto",setup(Q){let _=1;const{t:o}=I(),r=k([]),u=P({state:"loading",fail:()=>o("component.cLoading.fail",{name:o("page.photo.subtitle")})}),v=k(!1);async function h(l){u.value="loading";const[i,t]=await L(V.qIssuePage({labels:T.label.photoLabel,state:"all",page:l.toString(),per_page:C.toString()}));if(i){u.value="fail";return}(t.data.length==0||t.data.length<C)&&(v.value=!0);const c=t.data.map(m=>({...m,images:q(m.body)}));r.value.push(...c),u.value="success"}h(_);function x(){const l=r.value.length,i=_+1;h(i).then(()=>{l!=r.value.length&&(_+=i)})}return(l,i)=>(n(),d(e(y),{vertical:""},{default:a(()=>[s(e(B),{context:e(o)("page.photo.subtitle")},null,8,["context"]),r.value.length>0?(n(),d(e(j),{key:0,cols:"1 s:2 m:3 l:4 xl:5 2xl:6",responsive:"screen","x-gap":8,"y-gap":8},{default:a(()=>[(n(!0),N(A,null,z(r.value,t=>(n(),d(e(E),{class:"group cursor-pointer",key:t.number,onClick:c=>l.$router.push("/photo/"+t.number)},{default:a(()=>[s(e(F),{size:"small",bordered:!1},{default:a(()=>{var c,m;return[p("img",{class:"object-cover rounded-md",src:(c=t.images[0])==null?void 0:c.src,alt:(m=t.images[0])==null?void 0:m.alt},null,8,M),s(e(y),{vertical:""},{default:a(()=>[p("div",H,f(t.title),1),p("div",null,[g(f(e(o)("comment.span.createAt"))+": ",1),s(e(G),{time:new Date(t.updated_at),type:"relative"},null,8,["time"])]),s(O,{reactions:t.reactions},null,8,["reactions"])]),_:2},1024)]}),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})):D("",!0),s(e(S),{state:e(u)},{fail:a(()=>[p("div",J,[s(e(b),{onClick:x},{default:a(()=>[g(f(e(o)("comment.button.retry")),1)]),_:1})])]),default:a(()=>[v.value?(n(),d(e(w),{key:0,context:e(o)("component.cOver.context")},null,8,["context"])):(n(),N("div",K,[s(e(b),{onClick:x},{default:a(()=>[g(f(e(o)("comment.button.more")),1)]),_:1})]))]),_:1},8,["state"])]),_:1}))}});export{oe as default};