import{U as m,x as d,cq as r,cr as n,R as o,a8 as e}from"./index-00960749.js";const _={cosmwasm_code:{url:"/cosmwasm/wasm/v1/code",adapter:r},cosmwasm_code_id:{url:"/cosmwasm/wasm/v1/code/{code_id}",adapter:r},cosmwasm_code_id_contracts:{url:"/cosmwasm/wasm/v1/code/{code_id}/contracts",adapter:r},cosmwasm_param:{url:"/cosmwasm/wasm/v1/codes/params",adapter:r},cosmwasm_contract_address:{url:"/cosmwasm/wasm/v1/contract/{address}",adapter:r},cosmwasm_contract_address_history:{url:"/cosmwasm/wasm/v1/contract/{address}/history",adapter:r},cosmwasm_contract_address_raw_query_data:{url:"/cosmwasm/wasm/v1/contract/{address}/raw/{query_data}",adapter:r},cosmwasm_contract_address_smart_query_data:{url:"/cosmwasm/wasm/v1/contract/{address}/smart/{query_data}",adapter:r},cosmwasm_contract_address_state:{url:"/cosmwasm/wasm/v1/contract/{address}/state",adapter:r},cosmwasm_wasm_contracts_creator:{url:"/cosmwasm/wasm/v1/contracts/creator/{creator_address}",adapter:r}};class i extends n{getWasmCodeList(s){s||(s=new e);const t=`?${s.toQueryString()}`;return this.request(this.registry.cosmwasm_code,{},t)}getWasmCodeById(s){return this.request(this.registry.cosmwasm_code,{code_id:s})}getWasmCodeContracts(s,t){t||(t=new e);const a=`?${t.toQueryString()}`;return this.request(this.registry.cosmwasm_code_id_contracts,{code_id:s},a)}getWasmParams(){return this.request(this.registry.cosmwasm_param,{})}getWasmContracts(s){return this.request(this.registry.cosmwasm_contract_address,{address:s})}getWasmContractsByCreator(s,t){t||(t=new e);const a=`?${t.toQueryString()}`;return this.request(this.registry.cosmwasm_wasm_contracts_creator,{creator_address:s},a)}getWasmContractHistory(s){return this.request(this.registry.cosmwasm_contract_address_history,{address:s})}getWasmContractRawQuery(s,t){const a=o.toBase64(new TextEncoder().encode(t));return this.request(this.registry.cosmwasm_contract_address_raw_query_data,{address:s,query_data:a})}getWasmContractSmartQuery(s,t){const a=o.toBase64(new TextEncoder().encode(t));return this.request(this.registry.cosmwasm_contract_address_smart_query_data,{address:s,query_data:a})}getWasmContractStates(s,t){t||(t=new e);const a=`?${t.toQueryString()}`;return this.request(this.registry.cosmwasm_contract_address_state,{address:s},a)}}const w=m("module-wasm",{state:()=>({}),getters:{wasmClient(){const c=d();return new i(c.endpoint.address,_)}}});export{w as u};
