import{w as P,N,_ as S}from"./loading-aba46111.js";import{_ as $}from"./COver.vue_vue_type_script_setup_true_lang-ad340878.js";import{_ as w}from"./CSubTitle.vue_vue_type_script_setup_true_lang-dbae11c4.js";import{d as B,ah as I,a as b,a9 as d,a8 as a,af as e,am as L,an as V,aD as D,a6 as n,a4 as s,a7 as k,al as j,F as q,ac as z,ad as p,ag as g,ae as f}from"./index-bab370b4.js";import{N as A,_ as F}from"./CReactions.vue_vue_type_script_setup_true_lang-b9f92b05.js";import{a as G}from"../app.config.js";import{N as O,a as T}from"./Grid-4bce3c75.js";import{j as y,N as E}from"./Space-7508ea39.js";import"./use-locale-80627af6.js";import"./VResizeObserver-454e0fde.js";const H=["src","alt"],J={class:"text-lg mt-2 group-hover:text-green-300"},K={class:"text-center"},M={key:1,class:"text-center"},C=10,oe=B({__name:"PPhoto",setup(Q){let _=1;const{t:o}=I(),r=b([]),m=P({state:"loading",fail:()=>o("component.cLoading.fail",{name:o("page.photo.subtitle")})}),v=b(!1);async function h(l){m.value="loading";const[c,t]=await L(V.qIssuePage({labels:G.label.photoLabel,state:"all",page:l.toString(),per_page:C.toString()}));if(c){m.value="fail";return}(t.data.length==0||t.data.length<C)&&(v.value=!0);const i=t.data.map(u=>({...u,images:D(u.body)}));r.value.push(...i),m.value="success"}h(_);function x(){const l=r.value.length,c=_+1;h(c).then(()=>{l!=r.value.length&&(_+=c)})}return(l,c)=>(n(),d(e(y),{vertical:""},{default:a(()=>[s(e(w),{context:e(o)("page.photo.subtitle")},null,8,["context"]),r.value.length>0?(n(),d(e(O),{key:0,cols:"1 s:2 m:3 l:4 xl:5 2xl:6",responsive:"screen","x-gap":8,"y-gap":8},{default:a(()=>[(n(!0),k(q,null,j(r.value,t=>(n(),d(e(T),{class:"group cursor-pointer",key:t.number,onClick:i=>l.$router.push("/photo/"+t.number)},{default:a(()=>[s(e(E),{size:"small",bordered:!1},{default:a(()=>{var i,u;return[p("img",{class:"object-cover rounded-md",src:(i=t.images[0])==null?void 0:i.src,alt:(u=t.images[0])==null?void 0:u.alt},null,8,H),s(e(y),{vertical:""},{default:a(()=>[p("div",J,f(t.title),1),p("div",null,[g(f(e(o)("comment.span.createAt"))+": ",1),s(e(A),{time:new Date(t.updated_at),type:"relative"},null,8,["time"])]),s(F,{reactions:t.reactions},null,8,["reactions"])]),_:2},1024)]}),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})):z("",!0),s(e(S),{state:e(m)},{fail:a(()=>[p("div",K,[s(e(N),{onClick:x},{default:a(()=>[g(f(e(o)("comment.button.retry")),1)]),_:1})])]),default:a(()=>[v.value?(n(),d(e($),{key:0,context:e(o)("component.cOver.context")},null,8,["context"])):(n(),k("div",M,[s(e(N),{onClick:x},{default:a(()=>[g(f(e(o)("comment.button.more")),1)]),_:1})]))]),_:1},8,["state"])]),_:1}))}});export{oe as default};
