import{d as b,b as p,s as d,o as i,c as o,F as y,i as g,n as k,t as h,K as f}from"./index-68d6b195.js";const v={class:"my-5 text-center"},_={key:0,class:"btn-group"},x=["onClick"],l=3,B=b({__name:"PaginationBar",props:{total:{type:String},limit:{type:Number},callback:{type:Function,required:!0}},setup(s){const e=s,r=p(1),c=d(()=>{const n=[],a=Number(e.total||0);if(a>0&&e.limit&&a>e.limit){let t=0;for(;!(t*e.limit>=a);)t+=1,!(a/e.limit>10&&t>l&&t<a/e.limit-l+1&&!(t>=r.value-1&&t<=r.value+1))&&n.push({color:t===r.value?"btn-primary":"",page:t})}return n});function u(n){r.value=n,e.callback(n)}return(n,a)=>(i(),o("div",v,[s.total&&s.limit?(i(),o("div",_,[(i(!0),o(y,null,g(c.value,({page:t,color:m})=>(i(),o("button",{key:t,class:k(["btn bg-gray-100 text-gray-500 hover:text-white border-none dark:bg-gray-800 dark:text-white",{"!btn-primary":m==="btn-primary"}]),onClick:C=>u(t)},h(t),11,x))),128))])):f("",!0)]))}});export{B as _};
