import{_ as N}from"./CSubTitle.vue_vue_type_script_setup_true_lang-CY6Av4X5.js";import{e as f,aj as b,ag as l,am as u,al as s,ak as e,aq as a,ai as c,as as h,aA as k,at as y,ah as v,ay as A,O as C,az as I,aJ as x,aO as w,m as z}from"./index-Bd9XDiFr.js";import{a as B}from"../app.config.CCV9L8va.js";import{N as L,I as $}from"./CLink.vue_vue_type_script_setup_true_lang-2oReW03z.js";import{_ as q}from"./CReactions.vue_vue_type_script_setup_true_lang-C59SkrJa.js";import{N as _}from"./Card-tnICAY0t.js";import{N as F}from"./Image-BjfGiQvY.js";import{N as d}from"./Space-BMzkxCai.js";import{_ as R}from"./CLoadPages.vue_vue_type_script_setup_true_lang-BiUOAw7t.js";import{N as V,a as D}from"./Grid-DLtdPS9M.js";import"./Tag-DlqbVjj0.js";import"./Tooltip-DF9QUa1u.js";import"./Empty-xH7HBGFS.js";const G={class:"text-center p-2"},O={class:"text-lg mt-2 hover:text-orange-500 dark:hover:text-green-300"},S=f({__name:"CAlbumCard",props:{images:{},issue:{}},setup(g){return(t,m)=>{const i=b("RouterLink");return l(),u(i,{to:{name:a(k).AlbumDetail,params:{id:t.issue.number}}},{default:s(()=>[e(a(_),{size:"small",bordered:!1},{default:s(()=>[e(a(F),{src:t.images[0].src,alt:t.images[0].alt,"preview-disabled":!0,lazy:""},{placeholder:s(()=>[c("div",G,[e(a(L),{size:"30"},{default:s(()=>[e(a($),{class:"animate-spin inline-block"})]),_:1})])]),_:1},8,["src","alt"]),e(a(d),{vertical:""},{default:s(()=>[c("div",O,h(t.issue.title),1),e(q,{reaction:t.issue.reactions,"issue-url":t.issue.html_url},null,8,["reaction","issue-url"])]),_:1})]),_:1})]),_:1},8,["to"])}}}),Z=f({__name:"VAlbum",setup(g){const{t}=y();async function m(n,r){const o=await I.page({page:n,per_page:r,labels:B.funcLabels.album});return{datas:o,hasNext:o.length===r}}function i(n){return n.map(r=>{if(!r.body)return null;const o=x.parseImages(r.body);return o.length===0?null:{images:o,issue:r}}).filter(w.filterNullFunc)}return(n,r)=>(l(),u(a(_),{bordered:!1},{default:s(()=>[e(a(d),{vertical:!0},{default:s(()=>[e(N,{title:a(t)("page.album.title")},null,8,["title"]),e(R,{"query-pages-func":m},{default:s(({datas:o})=>[e(a(V),{cols:"1 s:2 m:3 l:3 xl:4",responsive:"screen","x-gap":12,"y-gap":12},{default:s(()=>[(l(!0),v(C,null,A(i(o),p=>(l(),u(a(D),{key:p.issue.number},{default:s(()=>[e(S,z({ref_for:!0},p),null,16)]),_:2},1024))),128))]),_:2},1024)]),_:1})]),_:1})]),_:1}))}});export{Z as default};