import{h as P,aj as I,al as B,am as T,u as y,y as z,q as A,C as j,z as O,$ as q,g as S,Z as w,an as K,af as x,i as D,c as V,d as C,o as L,G as U,r as F,m as G}from"./index-597d749a.js";var N;const g=typeof window<"u",pe=e=>typeof e=="string",me=()=>{},ve=g&&((N=window==null?void 0:window.navigator)==null?void 0:N.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function J(e){return typeof e=="function"?e():y(e)}function ye(e){return e}function M(e){return B()?(T(e),!0):!1}function ge(e,s=!0){z()?A(e):s?e():j(e)}function $e(e,s,t={}){const{immediate:o=!0}=t,a=P(!1);let r=null;function u(){r&&(clearTimeout(r),r=null)}function v(){a.value=!1,u()}function d(...p){u(),a.value=!0,r=setTimeout(()=>{a.value=!1,r=null,e(...p)},J(s))}return o&&(a.value=!0,g&&d()),M(v),{isPending:I(a),start:d,stop:v}}function k(e){for(var s=-1,t=e==null?0:e.length,o={};++s<t;){var a=e[s];o[a[0]]=a[1]}return o}const Z=e=>e===void 0,_e=e=>typeof e=="boolean",H=e=>typeof e=="number",we=e=>typeof Element>"u"?!1:e instanceof Element,Q=e=>O(e)?!Number.isNaN(Number(e)):!1,b=(e="")=>e.split(" ").filter(s=>!!s.trim()),Ne=(e,s)=>{if(!e||!s)return!1;if(s.includes(" "))throw new Error("className should not contain space.");return e.classList.contains(s)},he=(e,s)=>{!e||!s.trim()||e.classList.add(...b(s))},Pe=(e,s)=>{!e||!s.trim()||e.classList.remove(...b(s))},Oe=(e,s)=>{var t;if(!g||!e||!s)return"";let o=q(s);o==="float"&&(o="cssFloat");try{const a=e.style[o];if(a)return a;const r=(t=document.defaultView)==null?void 0:t.getComputedStyle(e,"");return r?r[o]:""}catch{return e.style[o]}};function R(e,s="px"){if(!e)return"";if(H(e)||Q(e))return`${e}${s}`;if(O(e))return e}const E="__epPropKey",W=e=>e,X=e=>S(e)&&!!e[E],Y=(e,s)=>{if(!S(e)||X(e))return e;const{values:t,required:o,default:a,type:r,validator:u}=e,d={type:r,required:!!o,validator:t||u?p=>{let l=!1,m=[];if(t&&(m=Array.from(t),w(e,"default")&&m.push(a),l||(l=m.includes(p))),u&&(l||(l=u(p))),!l&&m.length>0){const $=[...new Set(m)].map(_=>JSON.stringify(_)).join(", ");K(`Invalid prop: validation failed${s?` for prop "${s}"`:""}. Expected one of [${$}], got value ${JSON.stringify(p)}.`)}return l}:void 0,[E]:!0};return w(e,"default")&&(d.default=a),d},ee=e=>k(Object.entries(e).map(([s,t])=>[s,Y(t,s)])),se=(e,s)=>{if(e.install=t=>{for(const o of[e,...Object.values(s??{})])t.component(o.name,o)},s)for(const[t,o]of Object.entries(s))e[t]=o;return e},Se=e=>(e.install=x,e),h="el",te="is-",f=(e,s,t,o,a)=>{let r=`${e}-${s}`;return t&&(r+=`-${t}`),o&&(r+=`__${o}`),a&&(r+=`--${a}`),r},ne=Symbol("namespaceContextKey"),ae=e=>{const s=e||D(ne,P(h));return V(()=>y(s)||h)},oe=(e,s)=>{const t=ae(s);return{namespace:t,b:(n="")=>f(t.value,e,n,"",""),e:n=>n?f(t.value,e,"",n,""):"",m:n=>n?f(t.value,e,"","",n):"",be:(n,i)=>n&&i?f(t.value,e,n,i,""):"",em:(n,i)=>n&&i?f(t.value,e,"",n,i):"",bm:(n,i)=>n&&i?f(t.value,e,n,"",i):"",bem:(n,i,c)=>n&&i&&c?f(t.value,e,n,i,c):"",is:(n,...i)=>{const c=i.length>=1?i[0]:!0;return n&&c?`${te}${n}`:""},cssVar:n=>{const i={};for(const c in n)n[c]&&(i[`--${t.value}-${c}`]=n[c]);return i},cssVarName:n=>`--${t.value}-${n}`,cssVarBlock:n=>{const i={};for(const c in n)n[c]&&(i[`--${t.value}-${e}-${c}`]=n[c]);return i},cssVarBlockName:n=>`--${t.value}-${e}-${n}`}};var re=(e,s)=>{const t=e.__vccOpts||e;for(const[o,a]of s)t[o]=a;return t};const ie=ee({size:{type:W([Number,String])},color:{type:String}}),ce=C({name:"ElIcon",inheritAttrs:!1}),ue=C({...ce,props:ie,setup(e){const s=e,t=oe("icon"),o=V(()=>{const{size:a,color:r}=s;return!a&&!r?{}:{fontSize:Z(a)?void 0:R(a),"--color":r}});return(a,r)=>(L(),U("i",G({class:y(t).b(),style:y(o)},a.$attrs),[F(a.$slots,"default")],16))}});var le=re(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const Ve=se(le);export{Ve as E,re as _,he as a,ee as b,$e as c,W as d,Se as e,R as f,g,Ne as h,H as i,we as j,_e as k,Z as l,Oe as m,pe as n,me as o,J as p,ge as q,Pe as r,ye as s,M as t,oe as u,ve as v,se as w,Y as x,k as y,ae as z};
