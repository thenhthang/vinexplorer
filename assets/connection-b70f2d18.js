import{d as C,x as w,b as r,a8 as y,v as k,r as $,o as c,c as p,e,t as a,n as b,y as u,S as m,F as B,i as x,g as l,D as I,l as S}from"./index-68d6b195.js";import{u as j}from"./connStore-04e341e0.js";const D={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},M={class:"flex flex-wrap gap-4 items-center"},P={class:"card-title py-4"},R={class:"tabs tabs-boxed"},q={class:"flex flex-wrap gap-1 p-4"},F=["onClick"],N={class:"flex flex-wrap gap-1 p-4"},V={class:"join border border-primary"},z={class:"join-item px-2"},E=["max","placeholder"],L={class:"overflow-auto mt-5"},H=C({__name:"connection",props:["chain"],setup(T){const f=w(),s=j(),g=r([]),v=r(new y),d=r({}),i=r("registry");k(()=>{_(1),s.load()});function _(o){v.value.setPage(o),f.rpc.getIBCConnections(v.value).then(t=>{g.value=t.connections,d.value=t.pagination,t.pagination.total&&Number(t.pagination.total)>0&&s.showConnection(0)})}return(o,t)=>{const h=$("router-view");return c(),p("div",null,[e("div",D,[e("div",M,[e("h2",P,a(o.$t("ibc.title")),1),e("div",R,[e("a",{class:b(["tab",{"tab-active":i.value==="registry"}]),onClick:t[0]||(t[0]=n=>i.value="registry")},a(o.$t("ibc.registry")),3),e("a",{class:b(["tab",{"tab-active":i.value==="favorite"}]),onClick:t[1]||(t[1]=n=>i.value="favorite")},a(o.$t("module.favorite")),3)])]),e("div",null,[u(e("div",q,[(c(!0),p(B,null,x(l(s).commonIBCs,n=>(c(),p("span",{class:"btn btn-xs btn-link mr-1",onClick:U=>l(s).fetchConnection(n.path)},a(n.from)+" ⇌ "+a(n.to),9,F))),256))],512),[[m,i.value==="registry"]]),u(e("div",N,[e("div",V,[e("button",z,a(o.$t("ibc.connection_id"))+":",1),u(e("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>l(s).connectionId=n),type:"number",class:"input input-bordered w-40 join-item",min:"0",max:d.value.total||0,placeholder:`0~${d.value.total}`},null,8,E),[[I,l(s).connectionId]]),e("button",{class:"join-item btn btn-primary",onClick:t[3]||(t[3]=n=>l(s).showConnection())},a(o.$t("ibc.btn_apply")),1)])],512),[[m,i.value==="favorite"]])]),e("div",L,[(c(),S(h,{key:o.$route.fullPath}))])])])}}});export{H as default};
