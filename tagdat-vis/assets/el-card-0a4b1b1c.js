import{b as n,d as p,u as c,_ as i,w as u}from"./base-8d93c2cd.js";import{d as l,o,G as t,n as r,u as s,r as d,S as m,H as y,e as f,I as h,J as v}from"./index-87eaa9f5.js";const S=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),w=l({name:"ElCard"}),_=l({...w,props:S,setup(C){const a=c("card");return(e,g)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[d(e.$slots,"header",{},()=>[h(v(e.header),1)])],2)):m("v-if",!0),y("div",{class:r(s(a).e("body")),style:f(e.bodyStyle)},[d(e.$slots,"default")],6)],2))}});var b=i(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const N=u(b);export{N as E};