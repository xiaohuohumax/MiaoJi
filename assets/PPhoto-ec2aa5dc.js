import{w as P,N,_ as S}from"./loading-59b51ff0.js";import{_ as $}from"./COver.vue_vue_type_script_setup_true_lang-e5cb7dd1.js";import{_ as w}from"./CSubTitle.vue_vue_type_script_setup_true_lang-da02394c.js";import{d as B,ag as I,a as k,a9 as d,a8 as a,ae as e,am as L,an as V,aD as D,a6 as n,a4 as s,a7 as b,ak as j,F as q,al as z,ac as p,af as g,ad as f}from"./index-efee6842.js";import{N as A,_ as F}from"./CReactions.vue_vue_type_script_setup_true_lang-78fd347e.js";import{a as G}from"../app.config.js";import{N as O,a as T}from"./Grid-0ec06826.js";import{j as y,N as E}from"./Space-6bdbf578.js";import"./use-locale-73f1eb57.js";import"./VResizeObserver-8dca25ba.js";const H=["src","alt"],J={class:"text-lg mt-2 hover:text-orange-500 dark:hover:text-green-300"},K={class:"text-center"},M={key:1,class:"text-center"},C=10,oe=B({__name:"PPhoto",setup(Q){let _=1;const{t:o}=I(),r=k([]),u=P({state:"loading",fail:()=>o("component.cLoading.fail",{name:o("page.photo.subtitle")})}),v=k(!1);async function h(l){u.value="loading";const[c,t]=await L(V.qIssuePage({labels:G.label.photoLabel,state:"all",page:l.toString(),per_page:C.toString()}));if(c){u.value="fail";return}(t.data.length==0||t.data.length<C)&&(v.value=!0);const i=t.data.map(m=>({...m,images:D(m.body)}));r.value.push(...i),u.value="success"}h(_);function x(){const l=r.value.length,c=_+1;h(c).then(()=>{l!=r.value.length&&(_+=c)})}return(l,c)=>(n(),d(e(y),{vertical:""},{default:a(()=>[s(e(w),{context:e(o)("page.photo.subtitle")},null,8,["context"]),r.value.length>0?(n(),d(e(O),{key:0,cols:"1 s:2 m:3 l:4 xl:5 2xl:6",responsive:"screen","x-gap":8,"y-gap":8},{default:a(()=>[(n(!0),b(q,null,j(r.value,t=>(n(),d(e(T),{class:"group cursor-pointer",key:t.number,onClick:i=>l.$router.push("/photo/"+t.number)},{default:a(()=>[s(e(E),{size:"small",bordered:!1},{default:a(()=>{var i,m;return[p("img",{class:"object-cover rounded-md",src:(i=t.images[0])==null?void 0:i.src,alt:(m=t.images[0])==null?void 0:m.alt},null,8,H),s(e(y),{vertical:""},{default:a(()=>[p("div",J,f(t.title),1),p("div",null,[g(f(e(o)("comment.span.createAt"))+": ",1),s(e(A),{time:new Date(t.updated_at),type:"relative"},null,8,["time"])]),s(F,{reactions:t.reactions},null,8,["reactions"])]),_:2},1024)]}),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})):z("",!0),s(e(S),{state:e(u)},{fail:a(()=>[p("div",K,[s(e(N),{onClick:x},{default:a(()=>[g(f(e(o)("comment.button.retry")),1)]),_:1})])]),default:a(()=>[v.value?(n(),d(e($),{key:0,context:e(o)("component.cOver.context")},null,8,["context"])):(n(),b("div",M,[s(e(N),{onClick:x},{default:a(()=>[g(f(e(o)("comment.button.more")),1)]),_:1})]))]),_:1},8,["state"])]),_:1}))}});export{oe as default};