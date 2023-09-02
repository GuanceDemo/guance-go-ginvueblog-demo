import{a2 as b,a5 as m,a6 as c,a7 as z,aZ as u,d as S,S as C,a4 as h,l as p,ad as x,Q as r,d3 as k,ah as $,P as T,d4 as w}from"./index.6f29a4b3.js";import{u as _}from"./AppFooter.ffaf2bc6.js";const R=i=>{const{opacityDisabled:a,heightTiny:e,heightSmall:s,heightMedium:l,heightLarge:t,heightHuge:n,primaryColor:o,fontSize:d}=i;return{fontSize:d,textColor:o,sizeTiny:e,sizeSmall:s,sizeMedium:l,sizeLarge:t,sizeHuge:n,color:o,opacitySpinning:a}},B={name:"Spin",common:b,self:R},L=B,P=m([m("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",{position:"relative"},[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[z()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[u("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[u("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),V={small:20,medium:18,large:16},W=Object.assign(Object.assign({},h.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),O=S({name:"Spin",props:W,setup(i){const{mergedClsPrefixRef:a,inlineThemeDisabled:e}=C(i),s=h("Spin","-spin",P,L,i,a),l=p(()=>{const{size:n}=i,{common:{cubicBezierEaseInOut:o},self:d}=s.value,{opacitySpinning:f,color:g,textColor:y}=d,v=typeof n=="number"?T(n):d[w("size",n)];return{"--n-bezier":o,"--n-opacity-spinning":f,"--n-size":v,"--n-color":g,"--n-text-color":y}}),t=e?x("spin",p(()=>{const{size:n}=i;return typeof n=="number"?String(n):n[0]}),l,i):void 0;return{mergedClsPrefix:a,compitableShow:_(i,["spinning","show"]),mergedStrokeWidth:p(()=>{const{strokeWidth:n}=i;if(n!==void 0)return n;const{size:o}=i;return V[typeof o=="number"?"medium":o]}),cssVars:e?void 0:l,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var i,a;const{$slots:e,mergedClsPrefix:s,description:l}=this,t=e.icon&&this.rotate,n=(l||e.description)&&r("div",{class:`${s}-spin-description`},l||((i=e.description)===null||i===void 0?void 0:i.call(e))),o=e.icon?r("div",{class:[`${s}-spin-body`,this.themeClass]},r("div",{class:[`${s}-spin`,t&&`${s}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),n):r("div",{class:[`${s}-spin-body`,this.themeClass]},r(k,{clsPrefix:s,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),n);return(a=this.onRender)===null||a===void 0||a.call(this),e.default?r("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},r("div",{class:[`${s}-spin-content`,this.compitableShow&&`${s}-spin-content--spinning`]},e),r($,{name:"fade-in-transition"},{default:()=>this.compitableShow?o:null})):o}});export{O as _};
