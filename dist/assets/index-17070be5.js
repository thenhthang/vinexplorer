import{d as X,L as Z,x as ss,Y as ts,b as a,v as es,ac as os,s as M,ad as O,o as r,c as u,e as s,y as ns,z as as,g as i,a4 as ls,F as T,i as j,t as o,K as V,n as is,ae as ds}from"./index-008b341e.js";import{b as U}from"./route-block-83d24a4e.js";const cs={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},rs={class:"form-control"},us={class:"input-group input-group-md w-full flex"},_s={key:0,class:"text-error mt-1"},hs={key:0,class:"mt-4"},ps={class:"grid grid-cols-1 md:!grid-cols-4 auto-cols-auto gap-4 pb-4"},vs={class:"bg-base-100 px-4 py-3 rounded shadow flex justify-between items-center"},xs={class:"text-sm mb-1 flex flex-col truncate"},fs={class:"text-lg font-semibold text-main"},ms={class:"text-md"},bs={class:"avatar placeholder"},gs={class:"bg-rose-100 text-neutral-content rounded-full w-12 h-12"},ws={class:"text-2xl text-error font-semibold"},ys={class:"bg-base-100 px-4 py-3 rounded shadow flex justify-between items-center"},$s={class:"text-sm mb-1 flex flex-col truncate"},ks={class:"text-lg font-semibold text-main"},Ts={class:"text-md"},js={class:"avatar placeholder"},Vs={class:"bg-green-100 text-neutral-content rounded-full w-12 h-12"},Ds={class:"text-2xl text-success font-semibold"},Ss={class:"bg-base-100 px-4 py-3 rounded shadow flex justify-between items-center"},Cs={class:"text-sm mb-1 flex flex-col truncate"},Bs={class:"text-lg font-semibold text-main"},Es={class:"text-md"},Fs={class:"avatar placeholder"},Ns={class:"bg-violet-100 text-neutral-content rounded-full w-12 h-12"},zs={class:"text-2xl text-primary font-semibold"},Is={class:"bg-base-100 px-4 py-3 rounded shadow flex justify-between items-center"},Ls={class:"text-sm mb-1 flex flex-col truncate"},Ps={class:"text-lg font-semibold text-main"},As={class:"text-md"},Hs={class:"avatar placeholder"},Ms={class:"bg-blue-100 text-neutral-content rounded-full w-12 h-12"},Os={class:"text-2xl text-info font-semibold"},Us={key:1,class:"bg-base-100 p-4 rounded shadow"},Ks={class:"flex flex-1 flex-col truncate"},Rs={class:"text-sm card-title text-error mb-6"},Ws={class:"text-xs mb-1"},Ys={class:"text-xs break-words"},qs={class:"flex flex-wrap py-6"},Gs=s("div",{class:"divider"},null,-1),Js={class:"flex flex-col md:!flex-row"},Qs={class:"flex mr-1 mb-1"},Xs=s("div",{class:"px-4 w-[34px] h-6 rounded-lg bg-primary"},null,-1),Zs={class:"mx-1"},st={class:"flex mr-1 mb-1"},tt=s("div",{class:"px-4 w-[34px] h-6 rounded-lg bg-warning"},null,-1),et={class:"mx-1"},ot={class:"flex mr-1 mb-1"},nt=s("div",{class:"px-4 w-[34px] h-6 rounded-lg bg-success"},null,-1),at={class:"mx-1"},lt={class:"flex mr-1 mb-1"},it=s("div",{class:"px-4 w-[34px] h-6 rounded-lg bg-gray-700"},null,-1),dt={class:"mx-1"},ct={class:"text-[#00cfe8] bg-[rgba(0,207,232,0.12)] rounded shadow mt-4 alert-info"},rt={class:"drop-shadow-md px-4 pt-2 pb-2",style:{"box-shadow":"rgba(0, 207, 232, 0.4) 0px 6px 15px -7px"}},ut={class:"text-base font-semibold"},_t={class:"px-4 py-4"},ht={style:{"list-style-type":"disc"},class:"pl-8"},pt=X({__name:"index",setup(vt){var I,L;const K=Z(),R=ss(),D=ts(),S=a(((L=(I=R.current)==null?void 0:I.endpoints)==null?void 0:L.rpc)||[{address:"",provider:""}]);let h=a("");const W=a(D.validators);let _=a(200),v=a(""),d=a({}),y=a(""),C=a(""),B=a(""),E=a(""),b=null,F=a(new Date),$=a([]),N=a([]);es(async()=>{N.value=await D.fetchAcitveValdiators(),h.value=S.value[0].address+"/consensus_state",await z(),g(),k(),b=setInterval(()=>{g()},6e3)}),os(()=>{k()});function k(){clearInterval(b),b=null}const Y=M(()=>K.toDay(F.value,"time")),q=M(()=>N.value.map(t=>{const e=t;return e.hex=ds(t.consensus_pubkey),e}));function G(t,e){var x,f,m,P;if(e==="nil-Vote"){if((f=(x=$.value)==null?void 0:x[t])!=null&&f.address){const p=q.value.find(w=>{var A,H;return w.hex===((H=(A=$.value)==null?void 0:A[t])==null?void 0:H.address)});return((m=p==null?void 0:p.description)==null?void 0:m.moniker)||t}return t}const n=e.substring(e.indexOf(":")+1,e.indexOf(" ")),l=e.split(" "),c=W.value.find(p=>{var w;return(w=p==null?void 0:p.hex)==null?void 0:w.startsWith(n)});return`${((P=c==null?void 0:c.description)==null?void 0:P.moniker)||n} - ${l[2]}`}function J(t,e){var n,l;return t===((l=(n=d.value)==null?void 0:n.proposer)==null?void 0:l.index)?e==="nil-Vote"?"warning":"primary":e==="nil-Vote"?"gray-700":"success"}async function Q(){_.value=200,v.value="",d.value={},k(),await z(),g(),b=setInterval(()=>{g()},6e3)}async function z(){let t=h.value.replace("consensus_state","dump_consensus_state");try{const e=await O(t);if(!e.ok)throw new Error(`HTTP error: ${e.status}`);_.value=e.status,v.value=e.statusText;const n=await e.json();$.value=n.result.round_state.validators.validators}catch(e){_.value=(e==null?void 0:e.status)||500,v.value=(e==null?void 0:e.message)||"Error"}}async function g(){y.value="0%",F.value=new Date,_.value===200&&O(h.value).then(t=>(_.value=t.status,v.value=t.statusText,t.json())).then(t=>{var n,l,c,x;d.value=t.result.round_state;const e=(l=(n=d==null?void 0:d.value)==null?void 0:n["height/round/step"])==null?void 0:l.split("/");C.value=e[0],B.value=e[1],E.value=e[2],(x=(c=d.value)==null?void 0:c.height_vote_set)==null||x.forEach(f=>{const m=Number(f.prevotes_bit_array.substring(f.prevotes_bit_array.length-4));m>0&&(y.value=`${(m*100).toFixed()}%`)})}).catch(t=>{_.value=500,v.value=t})}return(t,e)=>(r(),u("div",null,[s("div",cs,[s("div",rs,[s("label",us,[ns(s("select",{"onUpdate:modelValue":e[0]||(e[0]=n=>ls(h)?h.value=n:h=n),class:"select select-bordered w-full flex-1"},[(r(!0),u(T,null,j(S.value,(n,l)=>(r(),u("option",{key:l},o(n==null?void 0:n.address)+"/consensus_state ",1))),128))],512),[[as,i(h)]]),s("button",{class:"btn btn-primary",onClick:Q},o(t.$t("consensus.monitor")),1)])]),i(_)!==200?(r(),u("div",_s,o(i(_))+": "+o(i(v)),1)):V("",!0)]),i(d)["height/round/step"]?(r(),u("div",hs,[s("div",ps,[s("div",vs,[s("div",xs,[s("h4",fs,o(i(y)),1),s("span",ms,o(t.$t("consensus.onboard_rate")),1)]),s("div",bs,[s("div",gs,[s("span",ws,o(t.$t("consensus.o")),1)])])]),s("div",ys,[s("div",$s,[s("h4",ks,o(i(C)),1),s("span",Ts,o(t.$t("account.height")),1)]),s("div",js,[s("div",Vs,[s("span",Ds,o(t.$t("consensus.h")),1)])])]),s("div",Ss,[s("div",Cs,[s("h4",Bs,o(i(B)),1),s("span",Es,o(t.$t("consensus.round")),1)]),s("div",Fs,[s("div",Ns,[s("span",zs,o(t.$t("consensus.r")),1)])])]),s("div",Is,[s("div",Ls,[s("h4",Ps,o(i(E)),1),s("span",As,o(t.$t("consensus.step")),1)]),s("div",Hs,[s("div",Ms,[s("span",Os,o(t.$t("consensus.s")),1)])])])])])):V("",!0),i(d)["height/round/step"]?(r(),u("div",Us,[s("div",Ks,[s("h2",Rs,o(t.$t("consensus.updated_at"))+" "+o(Y.value||""),1),(r(!0),u(T,null,j(i(d).height_vote_set,n=>(r(),u("div",{key:n.round},[s("div",Ws,o(t.$t("consensus.round"))+": "+o(n.round),1),s("div",Ys,o(n.prevotes_bit_array),1),s("div",qs,[(r(!0),u(T,null,j(n.prevotes,(l,c)=>(r(),u("div",{class:is(["inline-flex items-center justify-center w-fit rounded-3xl h-5 text-sm px-2 text-slate-200 leading-5",[`bg-${J(c,l)}`]]),key:c,size:"sm",style:{margin:"2px"}},[s("span",null,o(G(c,l)),1)],2))),128))])]))),128))]),Gs,s("div",Js,[s("div",Qs,[Xs,s("span",Zs,o(t.$t("consensus.proposer_sign")),1)]),s("div",st,[tt,s("span",et,o(t.$t("consensus.proposer_not_sign")),1)]),s("div",ot,[nt,s("span",at,o(t.$t("consensus.sign")),1)]),s("div",lt,[it,s("span",dt,o(t.$t("consensus.not_sign")),1)])])])):V("",!0),s("div",ct,[s("div",rt,[s("h2",ut,o(t.$t("consensus.tips")),1)]),s("div",_t,[s("ul",ht,[s("li",null,o(t.$t("consensus.tips_description_1")),1),s("li",null,o(t.$t("consensus.tips_description_2")),1)])])])]))}});typeof U=="function"&&U(pt);export{pt as default};
