import{d as o,a6 as n,a7 as r,ac as l,bf as s,au as t,ad as a}from"./index-efee6842.js";const d={class:"p-1 text-left text-wrap max-w-full cursor-pointer hover:text-orange-500 dark:hover:text-green-300 font-bold flex items-center"},u=o({__name:"CLabel",props:{label:{},hiddenDes:{type:Boolean}},setup(i){return(e,p)=>(n(),r("div",d,[l("div",null,[s(e.$slots,"default",{},()=>[l("span",{class:"inline-block p-1 rounded-full shadow-md mr-1",style:t({backgroundColor:"#"+e.label.color})},null,4)])]),l("div",null,a(e.label.name)+a(e.hiddenDes||e.label.description==""?"":`(${e.label.description})`),1)]))}});export{u as _};