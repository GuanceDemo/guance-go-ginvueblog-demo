import{I as N,an as h,J as T,K as k,M as v,bE as S,Q as b,aF as R,R as V,bA as I,v as m,z as U,r as O,B as D,o as f,Z as x,a as g,w as p,n as F,c as P,u as i,d as y,bF as E,b as K}from"./index-f53dfd2d.js";import{a as M,N as j}from"./Upload-33df3990.js";const A=N("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[h("strong",`
 font-weight: var(--n-font-weight-strong);
 `),h("italic",{fontStyle:"italic"}),h("underline",{textDecoration:"underline"}),h("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),J=Object.assign(Object.assign({},v.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),H=T({name:"Text",props:J,setup(t){const{mergedClsPrefixRef:a,inlineThemeDisabled:s}=k(t),o=v("Typography","-text",A,S,t,a),r=b(()=>{const{depth:d,type:c}=t,n=c==="default"?d===void 0?"textColor":`textColor${d}Depth`:R("textColor",c),{common:{fontWeightStrong:u,fontFamilyMono:l,cubicBezierEaseInOut:C},self:{codeTextColor:_,codeBorderRadius:B,codeColor:w,codeBorder:$,[n]:z}}=o.value;return{"--n-bezier":C,"--n-text-color":z,"--n-font-weight-strong":u,"--n-font-famliy-mono":l,"--n-code-border-radius":B,"--n-code-text-color":_,"--n-code-color":w,"--n-code-border":$}}),e=s?V("text",b(()=>`${t.type[0]}${t.depth||""}`),r,t):void 0;return{mergedClsPrefix:a,compitableTag:I(t,["as","tag"]),cssVars:s?void 0:r,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var t,a,s;const{mergedClsPrefix:o}=this;(t=this.onRender)===null||t===void 0||t.call(this);const r=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],e=(s=(a=this.$slots).default)===null||s===void 0?void 0:s.call(a);return this.code?m("code",{class:r,style:this.cssVars},this.delete?m("del",null,e):e):this.delete?m("del",{class:r,style:this.cssVars},e):m(this.compitableTag||"span",{class:r,style:this.cssVars},e)}}),L=["src"],Q={class:"mb-12"},W=y("span",{class:"i-mdi:upload"},null,-1),G={__name:"UploadOne",props:{preview:{type:String,default:""},width:{type:Number,default:120}},emits:["update:preview"],setup(t,{expose:a,emit:s}){const o=t,r=U(),e=O(o.preview);function d({event:n}){const u=(n==null?void 0:n.target).response,l=JSON.parse(u);if(l.code!==0){$message==null||$message.error(l.message);return}e.value=l.data,s("update:preview",e.value)}const c=b(()=>D(e.value));return a({previewImg:e}),(n,u)=>(f(),x("div",null,[g(i(j),{action:"/api/upload",headers:{Authorization:`Bearer ${i(r)}`},"show-file-list":!1,onFinish:d},{default:p(()=>[e.value?(f(),x("img",{key:0,"border-color":"#d9d9d9",class:"cursor-pointer border-2 rounded-2rem border-dashed hover:border-color-lightblue",style:F({width:`${o.width}px`}),src:c.value,alt:"文章封面"},null,12,L)):(f(),P(i(M),{key:1},{default:p(()=>[y("div",Q,[g(i(E),{size:"58",depth:3},{default:p(()=>[W]),_:1})]),g(i(H),{class:"text-14"},{default:p(()=>[K(" 点击或者拖动文件到该区域来上传 ")]),_:1})]),_:1}))]),_:1},8,["headers"])]))}};export{G as _};
