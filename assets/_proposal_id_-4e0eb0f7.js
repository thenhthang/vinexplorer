import{d as X,b as T,L as tt,Z as et,a2 as st,Y as ot,ag as at,a1 as c,a8 as lt,o as d,c as _,e,t as a,n as N,g as i,f as S,K as $,F as C,i as U,ah as nt,B as it,R as D,O as rt}from"./index-a1c1611d.js";import{b as ut,W as ct}from"./index-8461be46.js";import{_ as W}from"./Countdown.vue_vue_type_style_index_0_lang-b53855a6.js";import{_ as dt}from"./PaginationBar.vue_vue_type_script_setup_true_lang-d4bae8b0.js";import"./index-0bdb0d1c.js";const _t={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},vt={class:"card-title flex flex-col md:!justify-between md:!flex-row"},mt={class:"truncate w-full"},pt={class:""},ht={key:0},bt={class:"gap-4 mb-4 grid lg:!!grid-cols-3 auto-rows-max"},ft={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},gt={class:"card-title mb-1"},yt={class:"block text-sm mb-1"},xt={class:"h-5 w-full relative"},wt={class:"absolute inset-x-0 inset-y-0 text-center text-sm text-[#666] dark:text-[#eee] flex items-center justify-center"},Tt={class:"mt-6 grid grid-cols-2"},St={class:"bg-base-100 px-4 pt-3 pb-5 rounded shadow lg:!!col-span-2"},Ot={class:"card-title"},Pt={class:"px-1"},Nt={class:"flex items-center mb-4 mt-2"},$t=e("div",{class:"w-2 h-2 rounded-full bg-error mr-3"},null,-1),Dt={class:"text-base flex-1 text-main"},kt={class:"text-sm"},At={class:"flex items-center mb-4"},Et=e("div",{class:"w-2 h-2 rounded-full bg-primary mr-3"},null,-1),Vt={class:"text-base flex-1 text-main"},It={class:"text-sm"},Lt={class:"mb-4"},Rt={class:"flex items-center"},Bt=e("div",{class:"w-2 h-2 rounded-full bg-yes mr-3"},null,-1),Ct={class:"text-base flex-1 text-main"},Ut={class:"text-sm"},Wt={class:"pl-5 text-sm mt-2"},jt={class:"flex items-center mb-1"},zt=e("div",{class:"w-2 h-2 rounded-full bg-success mr-3"},null,-1),Ft={class:"text-base flex-1 text-main"},Yt={class:"text-sm"},qt={class:"pl-5 text-sm"},Gt={key:0,class:"mt-4"},Ht={class:"flex items-center"},Jt=e("div",{class:"w-2 h-2 rounded-full bg-warning mr-3"},null,-1),Kt={class:"text-base flex-1 text-main"},Zt={key:0},Mt={key:1},Qt={class:"text-sm"},Xt={class:"pl-5 text-sm mt-2"},te={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},ee={class:"card-title"},se={class:"overflow-x-auto"},oe={class:"table w-full table-zebra"},ae={class:"py-2 text-sm"},le={key:1,class:"py-2 text-sm"},de=X({__name:"[proposal_id]",props:["proposal_id","chain"],setup(O){const p=O,s=T({}),r=tt(),h=et(),I=st(),L=ot();h.fetchProposal(p.proposal_id).then(t=>{var n;const o=at(t.proposal);((n=t.proposal)==null?void 0:n.status)==="PROPOSAL_STATUS_VOTING_PERIOD"&&h.fetchTally(p.proposal_id).then(u=>{o.final_tally_result=u==null?void 0:u.tally}),s.value=o});const R=c(()=>s.value.status==="PROPOSAL_STATUS_PASSED"?"success":s.value.status==="PROPOSAL_STATUS_REJECTED"?"error":""),j=c(()=>s.value.status?s.value.status.replace("PROPOSAL_STATUS_",""):""),z=T({});h.fetchProposalDeposits(p.proposal_id).then(t=>z.value=t);const k=T({}),A=T(new lt),E=T({});h.fetchProposalVotes(p.proposal_id).then(t=>{k.value=t.votes,E.value=t.pagination});function b(t){return t?r.toDay(t,"from"):""}const F=c(()=>{const t=new Date;return new Date(s.value.voting_end_time).getTime()-t.getTime()}),Y=c(()=>{var u,m,f,g,y,x,w;const t=Number(((m=(u=s.value.content)==null?void 0:u.plan)==null?void 0:m.height)||0);if(t>0){const P=rt(),l=Number(((y=(g=(f=P.latest)==null?void 0:f.block)==null?void 0:g.header)==null?void 0:y.height)||0);return(t-l)*6*1e3}const o=new Date;return new Date(((w=(x=s.value.content)==null?void 0:x.plan)==null?void 0:w.time)||"").getTime()-o.getTime()}),v=c(()=>{const t=s.value.final_tally_result;let o=0;return t&&(o+=Number(t.abstain||0),o+=Number(t.yes||0),o+=Number(t.no||0),o+=Number(t.no_with_veto||0)),o}),q=c(()=>{var t;if(v.value>0){const o=((t=L.pool)==null?void 0:t.bonded_tokens)||"1";return r.percent(v.value/Number(o))}return 0}),G=c(()=>{var t,o;if(v.value>0){const n=((o=(t=s.value)==null?void 0:t.final_tally_result)==null?void 0:o.yes)||0;return r.percent(Number(n)/v.value)}return 0}),H=c(()=>{var t,o;if(v.value>0){const n=((o=(t=s.value)==null?void 0:t.final_tally_result)==null?void 0:o.no)||0;return r.percent(Number(n)/v.value)}return 0}),J=c(()=>{var t,o;if(v.value>0){const n=((o=(t=s.value)==null?void 0:t.final_tally_result)==null?void 0:o.no_with_veto)||0;return r.percent(Number(n)/v.value)}return 0}),K=c(()=>{var t,o;if(v.value>0){const n=((o=(t=s.value)==null?void 0:t.final_tally_result)==null?void 0:o.abstain)||0;return r.percent(Number(n)/v.value)}return 0}),Z=c(()=>[{name:"Turnout",value:q.value,class:"bg-info"},{name:"Yes",value:G.value,class:"bg-success"},{name:"No",value:H.value,class:"bg-error"},{name:"No With Veto",value:J.value,class:"bg-red-800"},{name:"Abstain",value:K.value,class:"bg-warning"}]);function M(t){const{data:o}=D.fromBech32(t),n=D.toHex(o),u=L.validators.find(m=>D.toHex(D.fromBech32(m.operator_address).data)===n);return u?u.description.moniker:t}function Q(t){A.value.setPage(t),h.fetchProposalVotes(p.proposal_id,A.value).then(o=>{k.value=o.votes,E.value=o.pagination})}return(t,o)=>{var n,u,m,f,g,y,x,w,P;return d(),_("div",null,[e("div",_t,[e("h2",vt,[e("p",mt,a(O.proposal_id)+". "+a(s.value.title||((n=s.value.content)==null?void 0:n.title)),1),e("div",{class:N(["badge badge-ghost",i(R)==="success"?"text-yes":i(R)==="error"?"text-no":"text-info"])},a(i(j)),3)]),e("div",pt,[S(ut,{value:s.value.content},null,8,["value"])]),s.value.summary&&!((u=s.value.content)!=null&&u.description)?(d(),_("div",ht,[S(i(ct),{"model-value":i(r).multiLine(s.value.summary),previewOnly:"",class:"md-editor-recover"},null,8,["model-value"])])):$("",!0)]),e("div",bt,[e("div",ft,[e("h2",gt,a(t.$t("gov.tally")),1),(d(!0),_(C,null,U(i(Z),(l,V)=>(d(),_("div",{class:"mb-1",key:V},[e("label",yt,a(l.name),1),e("div",xt,[e("div",{class:N(["absolute inset-x-0 inset-y-0 w-full opacity-10 rounded-sm",`${l.class}`])},null,2),e("div",{class:N(["absolute inset-x-0 inset-y-0 rounded-sm",`${l.class}`]),style:nt(`width: ${l.value==="-"||l.value==="NaN%"?"0%":l.value}`)},null,6),e("p",wt,a(l.value),1)])]))),128)),e("div",Tt,[e("label",{for:"vote",class:"btn btn-primary float-right btn-sm mx-1",onClick:o[0]||(o[0]=l=>i(I).open("vote",{proposal_id:O.proposal_id}))},a(t.$t("gov.btn_vote")),1),e("label",{for:"deposit",class:"btn btn-primary float-right btn-sm mx-1",onClick:o[1]||(o[1]=l=>i(I).open("deposit",{proposal_id:O.proposal_id}))},a(t.$t("gov.btn_deposit")),1)])]),e("div",St,[e("h2",Ot,a(t.$t("gov.timeline")),1),e("div",Pt,[e("div",Nt,[$t,e("div",Dt,a(t.$t("gov.submit_at"))+": "+a(i(r).toDay(s.value.submit_time)),1),e("div",kt,a(b(s.value.submit_time)),1)]),e("div",At,[Et,e("div",Vt,a(t.$t("gov.deposited_at"))+": "+a(i(r).toDay(s.value.status==="PROPOSAL_STATUS_DEPOSIT_PERIOD"?s.value.deposit_end_time:s.value.voting_start_time)),1),e("div",It,a(b(s.value.status==="PROPOSAL_STATUS_DEPOSIT_PERIOD"?s.value.deposit_end_time:s.value.voting_start_time)),1)]),e("div",Lt,[e("div",Rt,[Bt,e("div",Ct,a(t.$t("gov.vote_start_from"))+" "+a(i(r).toDay(s.value.voting_start_time)),1),e("div",Ut,a(b(s.value.voting_start_time)),1)]),e("div",Wt,[S(W,{time:i(F)},null,8,["time"])])]),e("div",null,[e("div",jt,[zt,e("div",Ft,a(t.$t("gov.vote_end"))+" "+a(i(r).toDay(s.value.voting_end_time)),1),e("div",Yt,a(b(s.value.voting_end_time)),1)]),e("div",qt,a(t.$t("gov.current_status"))+": "+a(t.$t(`gov.proposal_statuses.${s.value.status}`)),1)]),(g=(f=(m=s.value)==null?void 0:m.content)==null?void 0:f["@type"])!=null&&g.endsWith("SoftwareUpgradeProposal")?(d(),_("div",Gt,[e("div",Ht,[Jt,e("div",Kt,[it(a(t.$t("gov.upgrade_plan"))+": ",1),Number(((x=(y=s.value.content)==null?void 0:y.plan)==null?void 0:x.height)||"0")>0?(d(),_("span",Zt," (EST)")):(d(),_("span",Mt,a(i(r).toDay((P=(w=s.value.content)==null?void 0:w.plan)==null?void 0:P.time)),1))]),e("div",Qt,a(b(s.value.voting_end_time)),1)]),e("div",Xt,[S(W,{time:i(Y)},null,8,["time"])])])):$("",!0)])])]),e("div",te,[e("h2",ee,a(t.$t("gov.votes")),1),e("div",se,[e("table",oe,[e("tbody",null,[(d(!0),_(C,null,U(k.value,(l,V)=>(d(),_("tr",{key:V},[e("td",ae,a(M(l.voter)),1),l.option?(d(),_("td",{key:0,class:N(["py-2 text-sm",{"text-yes":l.option==="VOTE_OPTION_YES","text-gray-400":l.option==="VOTE_OPTION_ABSTAIN"}])},a(String(l.option).replace("VOTE_OPTION_","")),3)):$("",!0),l.options?(d(),_("td",le,a(l.options.map(B=>`${B.option.replace("VOTE_OPTION_","")}:${i(r).percent(B.weight)}`).join(", ")),1)):$("",!0)]))),128))])]),S(dt,{limit:A.value.limit,total:E.value.total,callback:Q},null,8,["limit","total"])])])])}}});export{de as default};
