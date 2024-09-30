import{i as f,d as l,bK as h,bL as _,bM as E,e as g,k as s,v as I,x as u,z as w,C as H,B as x,F as P,N as V,bN as B,H as p}from"./index-Bd9XDiFr.js";function D(e){const{mergedLocaleRef:t,mergedDateLocaleRef:r}=f(h,null)||{},v=l(()=>{var n,a;return(a=(n=t==null?void 0:t.value)===null||n===void 0?void 0:n[e])!==null&&a!==void 0?a:_[e]});return{dateLocaleRef:l(()=>{var n;return(n=r==null?void 0:r.value)!==null&&n!==void 0?n:E}),localeRef:v}}const S=g({name:"Empty",render(){return s("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),s("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),N=I("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[u("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[w("+",[u("description",`
 margin-top: 8px;
 `)])]),u("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),u("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),M=Object.assign(Object.assign({},x.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),j=g({name:"Empty",props:M,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=H(e),v=x("Empty","-empty",N,B,e,t),{localeRef:m}=D("Empty"),n=f(h,null),a=l(()=>{var o,i,d;return(o=e.description)!==null&&o!==void 0?o:(d=(i=n==null?void 0:n.mergedComponentPropsRef.value)===null||i===void 0?void 0:i.Empty)===null||d===void 0?void 0:d.description}),y=l(()=>{var o,i;return((i=(o=n==null?void 0:n.mergedComponentPropsRef.value)===null||o===void 0?void 0:o.Empty)===null||i===void 0?void 0:i.renderIcon)||(()=>s(S,null))}),C=l(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:i},self:{[p("iconSize",o)]:d,[p("fontSize",o)]:z,textColor:L,iconColor:R,extraTextColor:b}}=v.value;return{"--n-icon-size":d,"--n-font-size":z,"--n-bezier":i,"--n-text-color":L,"--n-icon-color":R,"--n-extra-text-color":b}}),c=r?P("empty",l(()=>{let o="";const{size:i}=e;return o+=i[0],o}),C,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:y,localizedDescription:l(()=>a.value||m.value.description),cssVars:r?void 0:C,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:r}=this;return r==null||r(),s("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?s("div",{class:`${t}-empty__icon`},e.icon?e.icon():s(V,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?s("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?s("div",{class:`${t}-empty__extra`},e.extra()):null)}});export{j as N,D as u};
