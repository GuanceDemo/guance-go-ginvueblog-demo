import{J as te,bs as jn,r as k,bt as Wn,bu as Hn,p as Ne,T as tn,v as r,bp as Kn,c7 as an,aC as vn,I as T,ap as I,a0 as J,K as on,M as ne,c8 as Un,ae as ln,aY as Gn,Q as B,aF as ee,R as Le,U as pn,c9 as rn,a1 as Ge,ah as xe,bk as gn,an as G,aq as Xe,bc as bn,O as H,ca as qn,au as Zn,Y as Ce,bL as en,aw as qe,av as sn,a4 as Yn,ag as Jn,bb as Qn,a6 as Xn,ak as Ae,cb as et,cc as nt,at as tt,C as Ze,ac as ot,aa as it,cd as lt,P as dn,as as rt,bA as at,L as st,bf as dt,bg as nn,bh as ct,bi as ut,bj as ft,bl as ht,aA as vt,bm as cn,ce as pt,bo as gt,bn as bt,V as X,cf as mt,ai as wt,a2 as yt,cg as xt,aN as Ct}from"./index-f53dfd2d.js";import{u as mn,a as St}from"./Input-d1b207b8.js";import{V as Ot,F as Rt}from"./RadioGroup-373382a0.js";import{g as Ft}from"./get-slot-1efb97e5.js";function Xt(e){switch(e){case"tiny":return"mini";case"small":return"tiny";case"medium":return"small";case"large":return"medium";case"huge":return"large"}throw Error(`${e} has no smaller size.`)}function Mt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Ye(e){const t=e.filter(o=>o!==void 0);if(t.length!==0)return t.length===1?t[0]:o=>{e.forEach(s=>{s&&s(o)})}}const ve="v-hidden",zt=jn("[v-hidden]",{display:"none!important"}),un=te({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const o=k(null),s=k(null);function f(){const{value:v}=o,{getCounter:a,getTail:S}=e;let b;if(a!==void 0?b=a():b=s.value,!v||!b)return;b.hasAttribute(ve)&&b.removeAttribute(ve);const{children:g}=v,x=v.offsetWidth,C=[],P=t.tail?S==null?void 0:S():null;let p=P?P.offsetWidth:0,F=!1;const _=v.children.length-(t.tail?1:0);for(let w=0;w<_-1;++w){if(w<0)continue;const N=g[w];if(F){N.hasAttribute(ve)||N.setAttribute(ve,"");continue}else N.hasAttribute(ve)&&N.removeAttribute(ve);const $=N.offsetWidth;if(p+=$,C[w]=$,p>x){const{updateCounter:W}=e;for(let A=w;A>=0;--A){const j=_-1-A;W!==void 0?W(j):b.textContent=`${j}`;const K=b.offsetWidth;if(p-=C[A],p+K<=x||A===0){F=!0,w=A-1,P&&(w===-1?(P.style.maxWidth=`${x-K}px`,P.style.boxSizing="border-box"):P.style.maxWidth="");break}}}}const{onUpdateOverflow:m}=e;F?m!==void 0&&m(!0):(m!==void 0&&m(!1),b.setAttribute(ve,""))}const u=Wn();return zt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Hn,ssr:u}),Ne(f),{selfRef:o,counterRef:s,sync:f}},render(){const{$slots:e}=this;return tn(this.sync),r("div",{class:"v-overflow",ref:"selfRef"},[Kn(e,"default"),e.counter?e.counter():r("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function wn(e,t){t&&(Ne(()=>{const{value:o}=e;o&&an.registerHandler(o,t)}),vn(()=>{const{value:o}=e;o&&an.unregisterHandler(o)}))}const Tt=te({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Pt=te({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),kt=T("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[I("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[J("+",[I("description",`
 margin-top: 8px;
 `)])]),I("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),I("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Bt=Object.assign(Object.assign({},ne.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),_t=te({name:"Empty",props:Bt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=on(e),s=ne("Empty","-empty",kt,Un,e,t),{localeRef:f}=mn("Empty"),u=ln(Gn,null),v=B(()=>{var g,x,C;return(g=e.description)!==null&&g!==void 0?g:(C=(x=u==null?void 0:u.mergedComponentPropsRef.value)===null||x===void 0?void 0:x.Empty)===null||C===void 0?void 0:C.description}),a=B(()=>{var g,x;return((x=(g=u==null?void 0:u.mergedComponentPropsRef.value)===null||g===void 0?void 0:g.Empty)===null||x===void 0?void 0:x.renderIcon)||(()=>r(Pt,null))}),S=B(()=>{const{size:g}=e,{common:{cubicBezierEaseInOut:x},self:{[ee("iconSize",g)]:C,[ee("fontSize",g)]:P,textColor:p,iconColor:F,extraTextColor:_}}=s.value;return{"--n-icon-size":C,"--n-font-size":P,"--n-bezier":x,"--n-text-color":p,"--n-icon-color":F,"--n-extra-text-color":_}}),b=o?Le("empty",B(()=>{let g="";const{size:x}=e;return g+=x[0],g}),S,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:a,localizedDescription:B(()=>v.value||f.value.description),cssVars:o?void 0:S,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),r("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${t}-empty__icon`},e.icon?e.icon():r(pn,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?r("div",{class:`${t}-empty__extra`},e.extra()):null)}});function It(e,t){return r(gn,{name:"fade-in-scale-up-transition"},{default:()=>e?r(pn,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>r(Tt)}):null})}const fn=te({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:o,multipleRef:s,valueSetRef:f,renderLabelRef:u,renderOptionRef:v,labelFieldRef:a,valueFieldRef:S,showCheckmarkRef:b,nodePropsRef:g,handleOptionClick:x,handleOptionMouseEnter:C}=ln(rn),P=Ge(()=>{const{value:m}=o;return m?e.tmNode.key===m.key:!1});function p(m){const{tmNode:w}=e;w.disabled||x(m,w)}function F(m){const{tmNode:w}=e;w.disabled||C(m,w)}function _(m){const{tmNode:w}=e,{value:N}=P;w.disabled||N||C(m,w)}return{multiple:s,isGrouped:Ge(()=>{const{tmNode:m}=e,{parent:w}=m;return w&&w.rawNode.type==="group"}),showCheckmark:b,nodeProps:g,isPending:P,isSelected:Ge(()=>{const{value:m}=t,{value:w}=s;if(m===null)return!1;const N=e.tmNode.rawNode[S.value];if(w){const{value:$}=f;return $.has(N)}else return m===N}),labelField:a,renderLabel:u,renderOption:v,handleMouseMove:_,handleMouseEnter:F,handleClick:p}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:o,isPending:s,isGrouped:f,showCheckmark:u,nodeProps:v,renderOption:a,renderLabel:S,handleClick:b,handleMouseEnter:g,handleMouseMove:x}=this,C=It(o,e),P=S?[S(t,o),u&&C]:[xe(t[this.labelField],t,o),u&&C],p=v==null?void 0:v(t),F=r("div",Object.assign({},p,{class:[`${e}-base-select-option`,t.class,p==null?void 0:p.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:f,[`${e}-base-select-option--pending`]:s,[`${e}-base-select-option--show-checkmark`]:u}],style:[(p==null?void 0:p.style)||"",t.style||""],onClick:Ye([b,p==null?void 0:p.onClick]),onMouseenter:Ye([g,p==null?void 0:p.onMouseenter]),onMousemove:Ye([x,p==null?void 0:p.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},P));return t.render?t.render({node:F,option:t,selected:o}):a?a({node:F,option:t,selected:o}):F}}),hn=te({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:o,nodePropsRef:s}=ln(rn);return{labelField:o,nodeProps:s,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:o,nodeProps:s,tmNode:{rawNode:f}}=this,u=s==null?void 0:s(f),v=t?t(f,!1):xe(f[this.labelField],f,!1),a=r("div",Object.assign({},u,{class:[`${e}-base-select-group-header`,u==null?void 0:u.class]}),v);return f.render?f.render({node:a,option:f}):o?o({node:a,option:f,selected:!1}):a}}),$t=T("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[T("scrollbar",`
 max-height: var(--n-height);
 `),T("virtual-list",`
 max-height: var(--n-height);
 `),T("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[I("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),T("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),T("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),I("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),I("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),I("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),T("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),T("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[G("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),J("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),J("&:active",`
 color: var(--n-option-text-color-pressed);
 `),G("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),G("pending",[J("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),G("selected",`
 color: var(--n-option-text-color-active);
 `,[J("&::before",`
 background-color: var(--n-option-color-active);
 `),G("pending",[J("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),G("disabled",`
 cursor: not-allowed;
 `,[Xe("selected",`
 color: var(--n-option-text-color-disabled);
 `),G("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),I("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[bn({enterScale:"0.5"})])])]),At=te({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ne.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=ne("InternalSelectMenu","-internal-select-menu",$t,qn,e,H(e,"clsPrefix")),o=k(null),s=k(null),f=k(null),u=B(()=>e.treeMate.getFlattenedNodes()),v=B(()=>Zn(u.value)),a=k(null);function S(){const{treeMate:l}=e;let c=null;const{value:L}=e;L===null?c=l.getFirstAvailableNode():(e.multiple?c=l.getNode((L||[])[(L||[]).length-1]):c=l.getNode(L),(!c||c.disabled)&&(c=l.getFirstAvailableNode())),q(c||null)}function b(){const{value:l}=a;l&&!e.treeMate.getNode(l.key)&&(a.value=null)}let g;Ce(()=>e.show,l=>{l?g=Ce(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?S():b(),tn(D)):b()},{immediate:!0}):g==null||g()},{immediate:!0}),vn(()=>{g==null||g()});const x=B(()=>en(t.value.self[ee("optionHeight",e.size)])),C=B(()=>qe(t.value.self[ee("padding",e.size)])),P=B(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),p=B(()=>{const l=u.value;return l&&l.length===0});function F(l){const{onToggle:c}=e;c&&c(l)}function _(l){const{onScroll:c}=e;c&&c(l)}function m(l){var c;(c=f.value)===null||c===void 0||c.sync(),_(l)}function w(){var l;(l=f.value)===null||l===void 0||l.sync()}function N(){const{value:l}=a;return l||null}function $(l,c){c.disabled||q(c,!1)}function W(l,c){c.disabled||F(c)}function A(l){var c;Ae(l,"action")||(c=e.onKeyup)===null||c===void 0||c.call(e,l)}function j(l){var c;Ae(l,"action")||(c=e.onKeydown)===null||c===void 0||c.call(e,l)}function K(l){var c;(c=e.onMousedown)===null||c===void 0||c.call(e,l),!e.focusable&&l.preventDefault()}function de(){const{value:l}=a;l&&q(l.getNext({loop:!0}),!0)}function Q(){const{value:l}=a;l&&q(l.getPrev({loop:!0}),!0)}function q(l,c=!1){a.value=l,c&&D()}function D(){var l,c;const L=a.value;if(!L)return;const ie=v.value(L.key);ie!==null&&(e.virtualScroll?(l=s.value)===null||l===void 0||l.scrollTo({index:ie}):(c=f.value)===null||c===void 0||c.scrollTo({index:ie,elSize:x.value}))}function ce(l){var c,L;!((c=o.value)===null||c===void 0)&&c.contains(l.target)&&((L=e.onFocus)===null||L===void 0||L.call(e,l))}function pe(l){var c,L;!((c=o.value)===null||c===void 0)&&c.contains(l.relatedTarget)||(L=e.onBlur)===null||L===void 0||L.call(e,l)}sn(rn,{handleOptionMouseEnter:$,handleOptionClick:W,valueSetRef:P,pendingTmNodeRef:a,nodePropsRef:H(e,"nodeProps"),showCheckmarkRef:H(e,"showCheckmark"),multipleRef:H(e,"multiple"),valueRef:H(e,"value"),renderLabelRef:H(e,"renderLabel"),renderOptionRef:H(e,"renderOption"),labelFieldRef:H(e,"labelField"),valueFieldRef:H(e,"valueField")}),sn(et,o),Ne(()=>{const{value:l}=f;l&&l.sync()});const ue=B(()=>{const{size:l}=e,{common:{cubicBezierEaseInOut:c},self:{height:L,borderRadius:ie,color:Se,groupHeaderTextColor:Oe,actionDividerColor:Re,optionTextColorPressed:ge,optionTextColor:be,optionTextColorDisabled:le,optionTextColorActive:U,optionOpacityDisabled:me,optionCheckColor:ae,actionTextColor:Fe,optionColorPending:fe,optionColorActive:he,loadingColor:Me,loadingSize:ze,optionColorActivePending:Te,[ee("optionFontSize",l)]:we,[ee("optionHeight",l)]:ye,[ee("optionPadding",l)]:Z}}=t.value;return{"--n-height":L,"--n-action-divider-color":Re,"--n-action-text-color":Fe,"--n-bezier":c,"--n-border-radius":ie,"--n-color":Se,"--n-option-font-size":we,"--n-group-header-text-color":Oe,"--n-option-check-color":ae,"--n-option-color-pending":fe,"--n-option-color-active":he,"--n-option-color-active-pending":Te,"--n-option-height":ye,"--n-option-opacity-disabled":me,"--n-option-text-color":be,"--n-option-text-color-active":U,"--n-option-text-color-disabled":le,"--n-option-text-color-pressed":ge,"--n-option-padding":Z,"--n-option-padding-left":qe(Z,"left"),"--n-option-padding-right":qe(Z,"right"),"--n-loading-color":Me,"--n-loading-size":ze}}),{inlineThemeDisabled:oe}=e,Y=oe?Le("internal-select-menu",B(()=>e.size[0]),ue,e):void 0,re={selfRef:o,next:de,prev:Q,getPendingTmNode:N};return wn(o,e.onResize),Object.assign({mergedTheme:t,virtualListRef:s,scrollbarRef:f,itemSize:x,padding:C,flattenedNodes:u,empty:p,virtualListContainer(){const{value:l}=s;return l==null?void 0:l.listElRef},virtualListContent(){const{value:l}=s;return l==null?void 0:l.itemsElRef},doScroll:_,handleFocusin:ce,handleFocusout:pe,handleKeyUp:A,handleKeyDown:j,handleMouseDown:K,handleVirtualListResize:w,handleVirtualListScroll:m,cssVars:oe?void 0:ue,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender},re)},render(){const{$slots:e,virtualScroll:t,clsPrefix:o,mergedTheme:s,themeClass:f,onRender:u}=this;return u==null||u(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,f,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?r("div",{class:`${o}-base-select-menu__loading`},r(Jn,{clsPrefix:o,strokeWidth:20})):this.empty?r("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},Xn(e.empty,()=>[r(_t,{theme:s.peers.Empty,themeOverrides:s.peerOverrides.Empty})])):r(Qn,{ref:"scrollbarRef",theme:s.peers.Scrollbar,themeOverrides:s.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?r(Ot,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:v})=>v.isGroup?r(hn,{key:v.key,clsPrefix:o,tmNode:v}):v.ignored?null:r(fn,{clsPrefix:o,key:v.key,tmNode:v})}):r("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(v=>v.isGroup?r(hn,{key:v.key,clsPrefix:o,tmNode:v}):r(fn,{clsPrefix:o,key:v.key,tmNode:v})))}),Yn(e.action,v=>v&&[r("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},v),r(Rt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Et=J([T("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[T("base-loading",`
 color: var(--n-loading-color);
 `),T("base-selection-tags","min-height: var(--n-height);"),I("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),I("state-border",`
 z-index: 1;
 border-color: #0000;
 `),T("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[I("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),T("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[I("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),T("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[I("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),T("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),T("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[T("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[I("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),I("render-label",`
 color: var(--n-text-color);
 `)]),Xe("disabled",[J("&:hover",[I("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),G("focus",[I("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),G("active",[I("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),T("base-selection-label","background-color: var(--n-color-active);"),T("base-selection-tags","background-color: var(--n-color-active);")])]),G("disabled","cursor: not-allowed;",[I("arrow",`
 color: var(--n-arrow-color-disabled);
 `),T("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[T("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),I("render-label",`
 color: var(--n-text-color-disabled);
 `)]),T("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),T("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),T("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[I("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),I("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>G(`${e}-status`,[I("state-border",`border: var(--n-border-${e});`),Xe("disabled",[J("&:hover",[I("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),G("active",[I("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),T("base-selection-label",`background-color: var(--n-color-active-${e});`),T("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),G("focus",[I("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),T("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),T("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[J("&:last-child","padding-right: 0;"),T("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[I("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Nt=te({name:"InternalSelection",props:Object.assign(Object.assign({},ne.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const t=k(null),o=k(null),s=k(null),f=k(null),u=k(null),v=k(null),a=k(null),S=k(null),b=k(null),g=k(null),x=k(!1),C=k(!1),P=k(!1),p=ne("InternalSelection","-internal-selection",Et,nt,e,H(e,"clsPrefix")),F=B(()=>e.clearable&&!e.disabled&&(P.value||e.active)),_=B(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):xe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),m=B(()=>{const i=e.selectedOption;if(i)return i[e.labelField]}),w=B(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function N(){var i;const{value:h}=t;if(h){const{value:E}=o;E&&(E.style.width=`${h.offsetWidth}px`,e.maxTagCount!=="responsive"&&((i=b.value)===null||i===void 0||i.sync()))}}function $(){const{value:i}=g;i&&(i.style.display="none")}function W(){const{value:i}=g;i&&(i.style.display="inline-block")}Ce(H(e,"active"),i=>{i||$()}),Ce(H(e,"pattern"),()=>{e.multiple&&tn(N)});function A(i){const{onFocus:h}=e;h&&h(i)}function j(i){const{onBlur:h}=e;h&&h(i)}function K(i){const{onDeleteOption:h}=e;h&&h(i)}function de(i){const{onClear:h}=e;h&&h(i)}function Q(i){const{onPatternInput:h}=e;h&&h(i)}function q(i){var h;(!i.relatedTarget||!(!((h=s.value)===null||h===void 0)&&h.contains(i.relatedTarget)))&&A(i)}function D(i){var h;!((h=s.value)===null||h===void 0)&&h.contains(i.relatedTarget)||j(i)}function ce(i){de(i)}function pe(){P.value=!0}function ue(){P.value=!1}function oe(i){!e.active||!e.filterable||i.target!==o.value&&i.preventDefault()}function Y(i){K(i)}function re(i){if(i.key==="Backspace"&&!l.value&&!e.pattern.length){const{selectedOptions:h}=e;h!=null&&h.length&&Y(h[h.length-1])}}const l=k(!1);let c=null;function L(i){const{value:h}=t;if(h){const E=i.target.value;h.textContent=E,N()}e.ignoreComposition&&l.value?c=i:Q(i)}function ie(){l.value=!0}function Se(){l.value=!1,e.ignoreComposition&&Q(c),c=null}function Oe(i){var h;C.value=!0,(h=e.onPatternFocus)===null||h===void 0||h.call(e,i)}function Re(i){var h;C.value=!1,(h=e.onPatternBlur)===null||h===void 0||h.call(e,i)}function ge(){var i,h;if(e.filterable)C.value=!1,(i=v.value)===null||i===void 0||i.blur(),(h=o.value)===null||h===void 0||h.blur();else if(e.multiple){const{value:E}=f;E==null||E.blur()}else{const{value:E}=u;E==null||E.blur()}}function be(){var i,h,E;e.filterable?(C.value=!1,(i=v.value)===null||i===void 0||i.focus()):e.multiple?(h=f.value)===null||h===void 0||h.focus():(E=u.value)===null||E===void 0||E.focus()}function le(){const{value:i}=o;i&&(W(),i.focus())}function U(){const{value:i}=o;i&&i.blur()}function me(i){const{value:h}=a;h&&h.setTextContent(`+${i}`)}function ae(){const{value:i}=S;return i}function Fe(){return o.value}let fe=null;function he(){fe!==null&&window.clearTimeout(fe)}function Me(){e.disabled||e.active||(he(),fe=window.setTimeout(()=>{w.value&&(x.value=!0)},100))}function ze(){he()}function Te(i){i||(he(),x.value=!1)}Ce(w,i=>{i||(x.value=!1)}),Ne(()=>{tt(()=>{const i=v.value;i&&(i.tabIndex=e.disabled||C.value?-1:0)})}),wn(s,e.onResize);const{inlineThemeDisabled:we}=e,ye=B(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:h},self:{borderRadius:E,color:Pe,placeholderColor:De,textColor:Ve,paddingSingle:je,paddingMultiple:We,caretColor:ke,colorDisabled:Be,textColorDisabled:_e,placeholderColorDisabled:He,colorActive:Ke,boxShadowFocus:Ie,boxShadowActive:se,boxShadowHover:n,border:d,borderFocus:y,borderHover:z,borderActive:O,arrowColor:M,arrowColorDisabled:R,loadingColor:V,colorActiveWarning:$e,boxShadowFocusWarning:Ue,boxShadowActiveWarning:xn,boxShadowHoverWarning:Cn,borderWarning:Sn,borderFocusWarning:On,borderHoverWarning:Rn,borderActiveWarning:Fn,colorActiveError:Mn,boxShadowFocusError:zn,boxShadowActiveError:Tn,boxShadowHoverError:Pn,borderError:kn,borderFocusError:Bn,borderHoverError:_n,borderActiveError:In,clearColor:$n,clearColorHover:An,clearColorPressed:En,clearSize:Nn,arrowSize:Ln,[ee("height",i)]:Dn,[ee("fontSize",i)]:Vn}}=p.value;return{"--n-bezier":h,"--n-border":d,"--n-border-active":O,"--n-border-focus":y,"--n-border-hover":z,"--n-border-radius":E,"--n-box-shadow-active":se,"--n-box-shadow-focus":Ie,"--n-box-shadow-hover":n,"--n-caret-color":ke,"--n-color":Pe,"--n-color-active":Ke,"--n-color-disabled":Be,"--n-font-size":Vn,"--n-height":Dn,"--n-padding-single":je,"--n-padding-multiple":We,"--n-placeholder-color":De,"--n-placeholder-color-disabled":He,"--n-text-color":Ve,"--n-text-color-disabled":_e,"--n-arrow-color":M,"--n-arrow-color-disabled":R,"--n-loading-color":V,"--n-color-active-warning":$e,"--n-box-shadow-focus-warning":Ue,"--n-box-shadow-active-warning":xn,"--n-box-shadow-hover-warning":Cn,"--n-border-warning":Sn,"--n-border-focus-warning":On,"--n-border-hover-warning":Rn,"--n-border-active-warning":Fn,"--n-color-active-error":Mn,"--n-box-shadow-focus-error":zn,"--n-box-shadow-active-error":Tn,"--n-box-shadow-hover-error":Pn,"--n-border-error":kn,"--n-border-focus-error":Bn,"--n-border-hover-error":_n,"--n-border-active-error":In,"--n-clear-size":Nn,"--n-clear-color":$n,"--n-clear-color-hover":An,"--n-clear-color-pressed":En,"--n-arrow-size":Ln}}),Z=we?Le("internal-selection",B(()=>e.size[0]),ye,e):void 0;return{mergedTheme:p,mergedClearable:F,patternInputFocused:C,filterablePlaceholder:_,label:m,selected:w,showTagsPanel:x,isComposing:l,counterRef:a,counterWrapperRef:S,patternInputMirrorRef:t,patternInputRef:o,selfRef:s,multipleElRef:f,singleElRef:u,patternInputWrapperRef:v,overflowRef:b,inputTagElRef:g,handleMouseDown:oe,handleFocusin:q,handleClear:ce,handleMouseEnter:pe,handleMouseLeave:ue,handleDeleteOption:Y,handlePatternKeyDown:re,handlePatternInputInput:L,handlePatternInputBlur:Re,handlePatternInputFocus:Oe,handleMouseEnterCounter:Me,handleMouseLeaveCounter:ze,handleFocusout:D,handleCompositionEnd:Se,handleCompositionStart:ie,onPopoverUpdateShow:Te,focus:be,focusInput:le,blur:ge,blurInput:U,updateCounter:me,getCounter:ae,getTail:Fe,renderLabel:e.renderLabel,cssVars:we?void 0:ye,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender}},render(){const{status:e,multiple:t,size:o,disabled:s,filterable:f,maxTagCount:u,bordered:v,clsPrefix:a,onRender:S,renderTag:b,renderLabel:g}=this;S==null||S();const x=u==="responsive",C=typeof u=="number",P=x||C,p=r(lt,null,{default:()=>r(St,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var _,m;return(m=(_=this.$slots).arrow)===null||m===void 0?void 0:m.call(_)}})});let F;if(t){const{labelField:_}=this,m=D=>r("div",{class:`${a}-base-selection-tag-wrapper`,key:D.value},b?b({option:D,handleClose:()=>{this.handleDeleteOption(D)}}):r(Ze,{size:o,closable:!D.disabled,disabled:s,onClose:()=>{this.handleDeleteOption(D)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>g?g(D,!0):xe(D[_],D,!0)})),w=()=>(C?this.selectedOptions.slice(0,u):this.selectedOptions).map(m),N=f?r("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:s,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,$=x?()=>r("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(Ze,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:s})):void 0;let W;if(C){const D=this.selectedOptions.length-u;D>0&&(W=r("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},r(Ze,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:s},{default:()=>`+${D}`})))}const A=x?f?r(un,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:w,counter:$,tail:()=>N}):r(un,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:w,counter:$}):C?w().concat(W):w(),j=P?()=>r("div",{class:`${a}-base-selection-popover`},x?w():this.selectedOptions.map(m)):void 0,K=P?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,Q=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,q=f?r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},A,x?null:N,p):r("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:s?void 0:0},A,p);F=r(it,null,P?r(ot,Object.assign({},K,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>q,default:j}):q,Q)}else if(f){const _=this.pattern||this.isComposing,m=this.active?!_:!this.selected,w=this.active?!1:this.selected;F=r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:s,disabled:s,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),w?r("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},r("div",{class:`${a}-base-selection-overlay__wrapper`},b?b({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):xe(this.label,this.selectedOption,!0))):null,m?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,p)}else F=r("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${a}-base-selection-input`,title:Mt(this.label),key:"input"},r("div",{class:`${a}-base-selection-input__content`},b?b({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):xe(this.label,this.selectedOption,!0))):r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),p);return r("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},F,v?r("div",{class:`${a}-base-selection__border`}):null,v?r("div",{class:`${a}-base-selection__state-border`}):null)}});function Ee(e){return e.type==="group"}function yn(e){return e.type==="ignored"}function Je(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch(o){return!1}}function Lt(e,t){return{getIsGroup:Ee,getIgnored:yn,getKey(s){return Ee(s)?s.name||s.key||"key-required":s[e]},getChildren(s){return s[t]}}}function Dt(e,t,o,s){if(!t)return e;function f(u){if(!Array.isArray(u))return[];const v=[];for(const a of u)if(Ee(a)){const S=f(a[s]);S.length&&v.push(Object.assign({},a,{[s]:S}))}else{if(yn(a))continue;t(o,a)&&v.push(a)}return v}return f(e)}function Vt(e,t,o){const s=new Map;return e.forEach(f=>{Ee(f)?f[o].forEach(u=>{s.set(u[t],u)}):s.set(f[t],f)}),s}const jt=J([T("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),T("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[bn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Wt=Object.assign(Object.assign({},ne.props),{to:nn.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),eo=te({name:"Select",props:Wt,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:o,namespaceRef:s,inlineThemeDisabled:f}=on(e),u=ne("Select","-select",jt,pt,e,t),v=k(e.defaultValue),a=H(e,"value"),S=dn(a,v),b=k(!1),g=k(""),x=B(()=>{const{valueField:n,childrenField:d}=e,y=Lt(n,d);return rt(D.value,y)}),C=B(()=>Vt(Q.value,e.valueField,e.childrenField)),P=k(!1),p=dn(H(e,"show"),P),F=k(null),_=k(null),m=k(null),{localeRef:w}=mn("Select"),N=B(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:w.value.placeholder}),$=at(e,["items","options"]),W=[],A=k([]),j=k([]),K=k(new Map),de=B(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:d,valueField:y}=e;return z=>({[d]:String(z),[y]:z})}return n===!1?!1:d=>Object.assign(n(d),{value:d})}),Q=B(()=>j.value.concat(A.value).concat($.value)),q=B(()=>{const{filter:n}=e;if(n)return n;const{labelField:d,valueField:y}=e;return(z,O)=>{if(!O)return!1;const M=O[d];if(typeof M=="string")return Je(z,M);const R=O[y];return typeof R=="string"?Je(z,R):typeof R=="number"?Je(z,String(R)):!1}}),D=B(()=>{if(e.remote)return $.value;{const{value:n}=Q,{value:d}=g;return!d.length||!e.filterable?n:Dt(n,q.value,d,e.childrenField)}});function ce(n){const d=e.remote,{value:y}=K,{value:z}=C,{value:O}=de,M=[];return n.forEach(R=>{if(z.has(R))M.push(z.get(R));else if(d&&y.has(R))M.push(y.get(R));else if(O){const V=O(R);V&&M.push(V)}}),M}const pe=B(()=>{if(e.multiple){const{value:n}=S;return Array.isArray(n)?ce(n):[]}return null}),ue=B(()=>{const{value:n}=S;return!e.multiple&&!Array.isArray(n)?n===null?null:ce([n])[0]||null:null}),oe=st(e),{mergedSizeRef:Y,mergedDisabledRef:re,mergedStatusRef:l}=oe;function c(n,d){const{onChange:y,"onUpdate:value":z,onUpdateValue:O}=e,{nTriggerFormChange:M,nTriggerFormInput:R}=oe;y&&X(y,n,d),O&&X(O,n,d),z&&X(z,n,d),v.value=n,M(),R()}function L(n){const{onBlur:d}=e,{nTriggerFormBlur:y}=oe;d&&X(d,n),y()}function ie(){const{onClear:n}=e;n&&X(n)}function Se(n){const{onFocus:d,showOnFocus:y}=e,{nTriggerFormFocus:z}=oe;d&&X(d,n),z(),y&&le()}function Oe(n){const{onSearch:d}=e;d&&X(d,n)}function Re(n){const{onScroll:d}=e;d&&X(d,n)}function ge(){var n;const{remote:d,multiple:y}=e;if(d){const{value:z}=K;if(y){const{valueField:O}=e;(n=pe.value)===null||n===void 0||n.forEach(M=>{z.set(M[O],M)})}else{const O=ue.value;O&&z.set(O[e.valueField],O)}}}function be(n){const{onUpdateShow:d,"onUpdate:show":y}=e;d&&X(d,n),y&&X(y,n),P.value=n}function le(){re.value||(be(!0),P.value=!0,e.filterable&&_e())}function U(){be(!1)}function me(){g.value="",j.value=W}const ae=k(!1);function Fe(){e.filterable&&(ae.value=!0)}function fe(){e.filterable&&(ae.value=!1,p.value||me())}function he(){re.value||(p.value?e.filterable?_e():U():le())}function Me(n){var d,y;!((y=(d=m.value)===null||d===void 0?void 0:d.selfRef)===null||y===void 0)&&y.contains(n.relatedTarget)||(b.value=!1,L(n),U())}function ze(n){Se(n),b.value=!0}function Te(n){b.value=!0}function we(n){var d;!((d=F.value)===null||d===void 0)&&d.$el.contains(n.relatedTarget)||(b.value=!1,L(n),U())}function ye(){var n;(n=F.value)===null||n===void 0||n.focus(),U()}function Z(n){var d;p.value&&(!((d=F.value)===null||d===void 0)&&d.$el.contains(gt(n))||U())}function i(n){if(!Array.isArray(n))return[];if(de.value)return Array.from(n);{const{remote:d}=e,{value:y}=C;if(d){const{value:z}=K;return n.filter(O=>y.has(O)||z.has(O))}else return n.filter(z=>y.has(z))}}function h(n){E(n.rawNode)}function E(n){if(re.value)return;const{tag:d,remote:y,clearFilterAfterSelect:z,valueField:O}=e;if(d&&!y){const{value:M}=j,R=M[0]||null;if(R){const V=A.value;V.length?V.push(R):A.value=[R],j.value=W}}if(y&&K.value.set(n[O],n),e.multiple){const M=i(S.value),R=M.findIndex(V=>V===n[O]);if(~R){if(M.splice(R,1),d&&!y){const V=Pe(n[O]);~V&&(A.value.splice(V,1),z&&(g.value=""))}}else M.push(n[O]),z&&(g.value="");c(M,ce(M))}else{if(d&&!y){const M=Pe(n[O]);~M?A.value=[A.value[M]]:A.value=W}Be(),U(),c(n[O],n)}}function Pe(n){return A.value.findIndex(y=>y[e.valueField]===n)}function De(n){p.value||le();const{value:d}=n.target;g.value=d;const{tag:y,remote:z}=e;if(Oe(d),y&&!z){if(!d){j.value=W;return}const{onCreate:O}=e,M=O?O(d):{[e.labelField]:d,[e.valueField]:d},{valueField:R}=e;$.value.some(V=>V[R]===M[R])||A.value.some(V=>V[R]===M[R])?j.value=W:j.value=[M]}}function Ve(n){n.stopPropagation();const{multiple:d}=e;!d&&e.filterable&&U(),ie(),d?c([],[]):c(null,null)}function je(n){!Ae(n,"action")&&!Ae(n,"empty")&&n.preventDefault()}function We(n){Re(n)}function ke(n){var d,y,z,O,M;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((d=F.value)===null||d===void 0)&&d.isComposing)){if(p.value){const R=(y=m.value)===null||y===void 0?void 0:y.getPendingTmNode();R?h(R):e.filterable||(U(),Be())}else if(le(),e.tag&&ae.value){const R=j.value[0];if(R){const V=R[e.valueField],{value:$e}=S;e.multiple&&Array.isArray($e)&&$e.some(Ue=>Ue===V)||E(R)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;p.value&&((z=m.value)===null||z===void 0||z.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;p.value?(O=m.value)===null||O===void 0||O.next():le();break;case"Escape":p.value&&(bt(n),U()),(M=F.value)===null||M===void 0||M.focus();break}}function Be(){var n;(n=F.value)===null||n===void 0||n.focus()}function _e(){var n;(n=F.value)===null||n===void 0||n.focusInput()}function He(){var n;p.value&&((n=_.value)===null||n===void 0||n.syncPosition())}ge(),Ce(H(e,"options"),ge);const Ke={focus:()=>{var n;(n=F.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=F.value)===null||n===void 0||n.blur()}},Ie=B(()=>{const{self:{menuBoxShadow:n}}=u.value;return{"--n-menu-box-shadow":n}}),se=f?Le("select",void 0,Ie,e):void 0;return Object.assign(Object.assign({},Ke),{mergedStatus:l,mergedClsPrefix:t,mergedBordered:o,namespace:s,treeMate:x,isMounted:dt(),triggerRef:F,menuRef:m,pattern:g,uncontrolledShow:P,mergedShow:p,adjustedTo:nn(e),uncontrolledValue:v,mergedValue:S,followerRef:_,localizedPlaceholder:N,selectedOption:ue,selectedOptions:pe,mergedSize:Y,mergedDisabled:re,focused:b,activeWithoutMenuOpen:ae,inlineThemeDisabled:f,onTriggerInputFocus:Fe,onTriggerInputBlur:fe,handleTriggerOrMenuResize:He,handleMenuFocus:Te,handleMenuBlur:we,handleMenuTabOut:ye,handleTriggerClick:he,handleToggle:h,handleDeleteOption:E,handlePatternInput:De,handleClear:Ve,handleTriggerBlur:Me,handleTriggerFocus:ze,handleKeydown:ke,handleMenuAfterLeave:me,handleMenuClickOutside:Z,handleMenuScroll:We,handleMenuKeydown:ke,handleMenuMousedown:je,mergedTheme:u,cssVars:f?void 0:Ie,themeClass:se==null?void 0:se.themeClass,onRender:se==null?void 0:se.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(ct,null,{default:()=>[r(ut,null,{default:()=>r(Nt,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),r(ft,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===nn.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(gn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),ht(r(At,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var s,f;return[(f=(s=this.$slots).empty)===null||f===void 0?void 0:f.call(s)]},action:()=>{var s,f;return[(f=(s=this.$slots).action)===null||f===void 0?void 0:f.call(s)]}}),this.displayDirective==="show"?[[vt,this.mergedShow],[cn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[cn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ht=()=>mt,Kt={name:"Space",self:Ht},Ut=Kt;let Qe;const Gt=()=>{if(!wt)return!0;if(Qe===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),Qe=t}return Qe},qt=Object.assign(Object.assign({},ne.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),no=te({name:"Space",props:qt,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=on(e),s=ne("Space","-space",void 0,Ut,e,t),f=yt("Space",o,t);return{useGap:Gt(),rtlEnabled:f,mergedClsPrefix:t,margin:B(()=>{const{size:u}=e;if(Array.isArray(u))return{horizontal:u[0],vertical:u[1]};if(typeof u=="number")return{horizontal:u,vertical:u};const{self:{[ee("gap",u)]:v}}=s.value,{row:a,col:S}=xt(v);return{horizontal:en(S),vertical:en(a)}})}},render(){const{vertical:e,align:t,inline:o,justify:s,itemStyle:f,margin:u,wrap:v,mergedClsPrefix:a,rtlEnabled:S,useGap:b,wrapItem:g,internalUseGap:x}=this,C=Ct(Ft(this));if(!C.length)return null;const P=`${u.horizontal}px`,p=`${u.horizontal/2}px`,F=`${u.vertical}px`,_=`${u.vertical/2}px`,m=C.length-1,w=s.startsWith("space-");return r("div",{role:"none",class:[`${a}-space`,S&&`${a}-space--rtl`],style:{display:o?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(s)?"flex-"+s:s,flexWrap:!v||e?"nowrap":"wrap",marginTop:b||e?"":`-${_}`,marginBottom:b||e?"":`-${_}`,alignItems:t,gap:b?`${u.vertical}px ${u.horizontal}px`:""}},!g&&(b||x)?C:C.map((N,$)=>r("div",{role:"none",style:[f,{maxWidth:"100%"},b?"":e?{marginBottom:$!==m?F:""}:S?{marginLeft:w?s==="space-between"&&$===m?"":p:$!==m?P:"",marginRight:w?s==="space-between"&&$===0?"":p:"",paddingTop:_,paddingBottom:_}:{marginRight:w?s==="space-between"&&$===m?"":p:$!==m?P:"",marginLeft:w?s==="space-between"&&$===0?"":p:"",paddingTop:_,paddingBottom:_}]},N)))}});export{eo as N,Xt as a,no as b,_t as c,Lt as d,At as e,Ye as m,Ut as s};
