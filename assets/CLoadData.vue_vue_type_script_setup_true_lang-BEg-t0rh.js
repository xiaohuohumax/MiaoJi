import{e as m,aT as y,au as v,aU as N,r as k,ah as _,an as g,am as r,l as n,aq as B,ar as t,aV as D,aj as C,al as u,as as V,at as h}from"./index-CxY8spwR.js";import{I as q,B as w}from"./CLink.vue_vue_type_script_setup_true_lang-CNdXO93o.js";import{N as I}from"./Space-mIpbSOwT.js";import{N as x}from"./_plugin-vue_export-helper-nDMbTP-M.js";const M={class:"text-center p-2"},T=m({__name:"CLoadData",props:y({autoQuery:{type:Boolean,default:!0},queryDataFunc:{}},{data:{},dataModifiers:{}}),emits:["update:data"],setup(l,{expose:d}){const c=l,{t:p}=v(),s=N(l,"data"),a=k("init");async function o(){a.value="loading";const[e,i]=await D(c.queryDataFunc());if(e){a.value="error";return}s.value=i,a.value="success"}c.autoQuery&&o();function f(){a.value="init",s.value=void 0}return d({init:f,queryData:o}),(e,i)=>(_(),g(t(I),{vertical:!0},{default:r(()=>[a.value==="loading"?n(e.$slots,"loading",{key:0},()=>[C("div",M,[u(t(x),{size:30},{default:r(()=>[u(t(q),{class:"animate-spin inline-block"})]),_:1})])]):a.value==="error"?n(e.$slots,"error",{key:1},()=>[u(t(w),{class:"w-full",secondary:"",type:"warning",onClick:o},{default:r(()=>[V(h(t(p)("component.loadData.retry")),1)]),_:1})]):a.value==="success"?n(e.$slots,"success",{key:2,data:s.value}):B("",!0)]),_:3}))}});export{T as _};
