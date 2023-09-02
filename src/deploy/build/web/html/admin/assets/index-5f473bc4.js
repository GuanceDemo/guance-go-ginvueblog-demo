import{ae as G,Q as C,aY as Q,E as Z,a0 as N,I as A,an as B,ap as X,J as ee,K as te,r as T,p as F,Y as z,O as E,M as H,R as le,v as _,k as O,o as ne,c as oe,w as u,a as s,b as v,u as l,N as k,j as re,t as w,C as I,q as ae,d as se,x as ie,y as R,aZ as ue}from"./index-f53dfd2d.js";import{_ as de}from"./CommonPage-328ed173.js";import{_ as ce}from"./QueryBarItem-a7adc33b.js";import{_ as me}from"./CrudModal-8441a1a6.js";import{_ as he}from"./CrudTable-e7ebf5b4.js";import{u as fe}from"./useCRUD-6648f9c7.js";import{N as pe}from"./Input-d1b207b8.js";import{N as ge,a as g}from"./FormItem-9890d329.js";import{N as _e}from"./Popconfirm-7d90b5a9.js";import"./AppPage-64321f57.js";import"./Space-fc8792cb.js";import"./RadioGroup-373382a0.js";import"./get-slot-1efb97e5.js";import"./Checkbox-23248bff.js";import"./Forward-fc22679e.js";function be(n,e){const a=G(Q,null);return C(()=>n.hljs||(a==null?void 0:a.mergedHljsRef.value))}const ve=n=>{const{textColor2:e,fontSize:a,fontWeightStrong:m,textColor3:h}=n;return{textColor:e,fontSize:a,fontWeightStrong:m,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:h}},ye={name:"Code",common:Z,self:ve},$e=ye,je=N([A("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[B("show-line-numbers",`
 display: flex;
 `),X("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),B("word-wrap",[N("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),N("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),N("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:n})=>{const e=`${n.bPrefix}code`;return[`${e} .hljs-comment,
 ${e} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${e} .hljs-doctag,
 ${e} .hljs-keyword,
 ${e} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${e} .hljs-section,
 ${e} .hljs-name,
 ${e} .hljs-selector-tag,
 ${e} .hljs-deletion,
 ${e} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${e} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${e} .hljs-string,
 ${e} .hljs-regexp,
 ${e} .hljs-addition,
 ${e} .hljs-attribute,
 ${e} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${e} .hljs-built_in,
 ${e} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${e} .hljs-attr,
 ${e} .hljs-variable,
 ${e} .hljs-template-variable,
 ${e} .hljs-type,
 ${e} .hljs-selector-class,
 ${e} .hljs-selector-attr,
 ${e} .hljs-selector-pseudo,
 ${e} .hljs-number {
 color: var(--n-hue-6);
 }`,`${e} .hljs-symbol,
 ${e} .hljs-bullet,
 ${e} .hljs-link,
 ${e} .hljs-meta,
 ${e} .hljs-selector-id,
 ${e} .hljs-title {
 color: var(--n-hue-2);
 }`,`${e} .hljs-emphasis {
 font-style: italic;
 }`,`${e} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${e} .hljs-link {
 text-decoration: underline;
 }`]}]),we=Object.assign(Object.assign({},H.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),L=ee({name:"Code",props:we,setup(n,{slots:e}){const{internalNoHighlight:a}=n,{mergedClsPrefixRef:m,inlineThemeDisabled:h}=te(),p=T(null),y=a?{value:void 0}:be(n),d=(t,r,i)=>{const{value:c}=y;return!c||!(t&&c.getLanguage(t))?null:c.highlight(i?r.trim():r,{language:t}).value},S=C(()=>n.inline||n.wordWrap?!1:n.showLineNumbers),b=()=>{if(e.default)return;const{value:t}=p;if(!t)return;const{language:r}=n,i=n.uri?window.decodeURIComponent(n.code):n.code;if(r){const f=d(r,i,n.trim);if(f!==null){if(n.inline)t.innerHTML=f;else{const x=t.querySelector(".__code__");x&&t.removeChild(x);const j=document.createElement("pre");j.className="__code__",j.innerHTML=f,t.appendChild(j)}return}}if(n.inline){t.textContent=i;return}const c=t.querySelector(".__code__");if(c)c.textContent=i;else{const f=document.createElement("pre");f.className="__code__",f.textContent=i,t.innerHTML="",t.appendChild(f)}};F(b),z(E(n,"language"),b),z(E(n,"code"),b),a||z(y,b);const q=H("Code","-code",je,$e,n,m),$=C(()=>{const{common:{cubicBezierEaseInOut:t,fontFamilyMono:r},self:{textColor:i,fontSize:c,fontWeightStrong:f,lineNumberTextColor:x,"mono-3":j,"hue-1":V,"hue-2":D,"hue-3":M,"hue-4":U,"hue-5":W,"hue-5-2":J,"hue-6":K,"hue-6-2":Y}}=q.value,{internalFontSize:P}=n;return{"--n-font-size":P?`${P}px`:c,"--n-font-family":r,"--n-font-weight-strong":f,"--n-bezier":t,"--n-text-color":i,"--n-mono-3":j,"--n-hue-1":V,"--n-hue-2":D,"--n-hue-3":M,"--n-hue-4":U,"--n-hue-5":W,"--n-hue-5-2":J,"--n-hue-6":K,"--n-hue-6-2":Y,"--n-line-number-text-color":x}}),o=h?le("code",C(()=>`${n.internalFontSize||"a"}`),$,n):void 0;return{mergedClsPrefix:m,codeRef:p,mergedShowLineNumbers:S,lineNumbers:C(()=>{let t=1;const r=[];let i=!1;for(const c of n.code)c===`
`?(i=!0,r.push(t++)):i=!1;return i||r.push(t++),r.join(`
`)}),cssVars:h?void 0:$,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n,e;const{mergedClsPrefix:a,wordWrap:m,mergedShowLineNumbers:h,onRender:p}=this;return p==null||p(),_("code",{class:[`${a}-code`,this.themeClass,m&&`${a}-code--word-wrap`,h&&`${a}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},h?_("pre",{class:`${a}-code__line-numbers`},this.lineNumbers):null,(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))}}),Ce=se("span",{class:"i-material-symbols:playlist-remove mr-5 text-18"},null,-1),He=Object.assign({name:"操作日志"},{__name:"index",setup(n){function e(o){switch(o){case"GET":return"info";case"POST":return"success";case"PUT":return"warning";case"DELETE":return"error";default:return"info"}}const a=T(null),m=T({}),{modalVisible:h,modalLoading:p,handleDelete:y,modalForm:d,modalFormRef:S,handleView:b}=fe({name:"日志",doDelete:O.deleteOperationLogs,refresh:()=>{var o;return(o=a.value)==null?void 0:o.handleSearch()}});F(()=>{var o;(o=a.value)==null||o.handleSearch()});const q=[{type:"selection",width:20,fixed:"left"},{title:"系统模块",key:"opt_module",width:70,align:"center",ellipsis:{tooltip:!0}},{title:"操作类型",key:"opt_type",width:70,align:"center",ellipsis:{tooltip:!0}},{title:"请求方法",key:"request_method",width:80,align:"center",ellipsis:{tooltip:!0},render(o){return _(I,{type:e(o.request_method)},{default:()=>o.request_method})}},{title:"操作人员",key:"nickname",width:80,align:"center",ellipsis:{tooltip:!0}},{title:"登录IP",key:"ip_address",width:80,align:"center",ellipsis:{tooltip:!0}},{title:"登录地址",key:"ip_source",width:80,align:"center",ellipsis:{tooltip:!0}},{title:"发布时间",key:"created_at",align:"center",width:80,render(o){return _(k,{size:"small",type:"text",ghost:!0},{default:()=>ie(o.created_at),icon:R("mdi:update",{size:18})})}},{title:"操作",key:"actions",width:120,align:"center",fixed:"right",render(o){return[_(k,{size:"small",quaternary:!0,type:"info",onClick:()=>b(o)},{default:()=>"查看",icon:R("ic:outline-remove-red-eye",{size:16})}),_(_e,{onPositiveClick:()=>y([o.id],!1)},{trigger:()=>_(k,{size:"small",quaternary:!0,type:"error",style:"margin-left: 15px;"},{default:()=>"删除",icon:R("material-symbols:delete-outline",{size:16})}),default:()=>_("div",{},"确定删除该日志吗?")})]}}];function $(o){const{copy:t}=ue();t(JSON.stringify(JSON.parse(o),null,2)),$message.success("内容已复制到剪切板!")}return(o,t)=>(ne(),oe(de,{title:"操作日志"},{action:u(()=>{var r;return[s(l(k),{type:"error",disabled:!((r=a.value)!=null&&r.selections.length),onClick:t[0]||(t[0]=i=>{var c;return l(y)((c=a.value)==null?void 0:c.selections)})},{default:u(()=>[Ce,v(" 批量删除 ")]),_:1},8,["disabled"])]}),default:u(()=>[s(he,{ref_key:"$table",ref:a,"query-items":m.value,"onUpdate:queryItems":t[3]||(t[3]=r=>m.value=r),columns:q,"get-data":l(O).getOperationLogs},{queryBar:u(()=>[s(ce,{label:"模块名","label-width":50},{default:u(()=>[s(l(pe),{value:m.value.keyword,"onUpdate:value":t[1]||(t[1]=r=>m.value.keyword=r),clearable:"",type:"text",placeholder:"请输入模块名或描述",onKeydown:t[2]||(t[2]=re(r=>{var i;return(i=a.value)==null?void 0:i.handleSearch()},["enter"]))},null,8,["value"])]),_:1})]),_:1},8,["query-items","get-data"]),s(me,{visible:l(h),"onUpdate:visible":t[6]||(t[6]=r=>ae(h)?h.value=r:null),title:"日志详情","show-footer":!1,loading:l(p)},{default:u(()=>[s(l(ge),{ref_key:"modalFormRef",ref:S,"label-placement":"left","label-align":"left","label-width":90,model:l(d)},{default:u(()=>[s(l(g),{label:"操作模块: ",path:"opt_module"},{default:u(()=>[v(w(l(d).opt_module),1)]),_:1}),s(l(g),{label:"请求地址: ",path:"opt_url"},{default:u(()=>[v(w(l(d).opt_url),1)]),_:1}),s(l(g),{label:"请求方法: ",path:"request_method"},{default:u(()=>[s(l(I),{type:e(l(d).request_method)},{default:u(()=>[v(w(l(d).request_method),1)]),_:1},8,["type"])]),_:1}),s(l(g),{label:"操作类型: ",path:"opt_type"},{default:u(()=>[v(w(l(d).opt_type),1)]),_:1}),s(l(g),{label:"操作方法: ",path:"opt_method"},{default:u(()=>[s(l(L),{code:l(d).opt_method,"code-wrap":"",language:"json"},null,8,["code"])]),_:1}),s(l(g),{label:"操作人员: ",path:"nickname"},{default:u(()=>[v(w(l(d).nickname),1)]),_:1}),s(l(g),{label:"请求参数: ",path:"request_param"},{default:u(()=>[s(l(L),{class:"word-wrap cursor-pointer p-7",code:l(d).request_param,language:"json",onClick:t[4]||(t[4]=r=>$(l(d).request_param))},null,8,["code"])]),_:1}),s(l(g),{label:"返回数据: ",path:"response_data"},{default:u(()=>[s(l(L),{class:"cursor-pointer p-7",code:JSON.stringify(JSON.parse(l(d).response_data),null,2),language:"json",onClick:t[5]||(t[5]=r=>$(l(d).response_data))},null,8,["code"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","loading"])]),_:1}))}});export{He as default};
