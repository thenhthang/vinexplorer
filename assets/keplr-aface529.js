import{d as B,b as i,q as M,v as T,x as I,C as V,o as r,c as l,e as n,y,z as $,F,i as K,t as C,g as O,D as E}from"./index-6a4d1c9f.js";const G={class:"bg-base-100 p-4 rounded text-center"},L={class:"flex"},J=["value"],U={class:"text-main mt-5"},j=n("div",{class:"mt-4 mb-4"}," If the chain is not offically support on Keplr, you can submit these parameters to enable Keplr. ",-1),R=B({__name:"keplr",setup(q){const D=i(""),o=i(""),d=M(),t=i({});T(()=>{const e=I();t.value=e.current||Object.values(d.chains)[0],u()});async function u(){var p,h,m,f,x,v,k,g,_,P,w;const e=t.value;if(!((h=(p=e.endpoints)==null?void 0:p.rest)!=null&&h.at(0)))throw new Error("Endpoint does not set");const S=(await V.newDefault(((f=(m=e.endpoints.rest)==null?void 0:m.at(0))==null?void 0:f.address)||"").getBaseBlockLatest()).block.header.chain_id,b=e.keplrPriceStep||{low:.01,average:.025,high:.03},c=((x=e.assets[0].denom_units.find(A=>A.denom===e.assets[0].symbol.toLowerCase()))==null?void 0:x.exponent)||6;o.value=JSON.stringify({chainId:S,chainName:e.chainName,rpc:(g=(k=(v=e.endpoints)==null?void 0:v.rpc)==null?void 0:k.at(0))==null?void 0:g.address,rest:(w=(P=(_=e.endpoints)==null?void 0:_.rest)==null?void 0:P.at(0))==null?void 0:w.address,bip44:{coinType:Number(e.coinType)},coinType:Number(e.coinType),bech32Config:{bech32PrefixAccAddr:e.bech32Prefix,bech32PrefixAccPub:`${e.bech32Prefix}pub`,bech32PrefixValAddr:`${e.bech32Prefix}valoper`,bech32PrefixValPub:`${e.bech32Prefix}valoperpub`,bech32PrefixConsAddr:`${e.bech32Prefix}valcons`,bech32PrefixConsPub:`${e.bech32Prefix}valconspub`},currencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:c,coinGeckoId:e.assets[0].coingecko_id||"unknown"}],feeCurrencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:c,coinGeckoId:e.assets[0].coingecko_id||"unknown",gasPriceStep:b}],gasPriceStep:b,stakeCurrency:{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:c,coinGeckoId:e.assets[0].coingecko_id||"unknown"},features:e.keplrFeatures||[]},null,"	")}function N(){window.keplr&&window.keplr.experimentalSuggestChain(JSON.parse(o.value)).catch(e=>{D.value=e})}return(e,a)=>(r(),l("div",G,[n("div",L,[y(n("select",{"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),class:"select select-bordered mx-5",onChange:u},[(r(!0),l(F,null,K(O(d).chains,s=>(r(),l("option",{value:s},C(s.chainName),9,J))),256))],544),[[$,t.value]]),n("button",{class:"btn !bg-yes !border-yes text-white px-10",onClick:N},"Add "+C(t.value.chainName)+" TO Keplr Wallet",1)]),n("div",U,[y(n("textarea",{"onUpdate:modelValue":a[1]||(a[1]=s=>o.value=s),class:"textarea textarea-bordered w-full",rows:"15"},null,512),[[E,o.value]])]),j]))}});export{R as default};
