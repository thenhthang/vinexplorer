import{d as N,h as _,b as I,o as m,l as T,P as M,e as n,t as e,n as r,B as f,f as C,c as p,ai as D,g as V,K as w}from"./index-fb04f637.js";/*! vue-countdown v2.1.2 | (c) 2018-present Chen Fengyuan | MIT */const h=1e3,u=60*h,d=60*u,y=24*d,E="abort",g="end",S="progress",b="start",v="visibilitychange";var x=N({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:t=>t>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:t=>t>=0},transform:{type:Function,default:t=>t}},emits:[E,g,S,b],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/y)},hours(){return Math.floor(this.totalMilliseconds%y/d)},minutes(){return Math.floor(this.totalMilliseconds%d/u)},seconds(){return Math.floor(this.totalMilliseconds%u/h)},milliseconds(){return Math.floor(this.totalMilliseconds%h)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/d)},totalMinutes(){return Math.floor(this.totalMilliseconds/u)},totalSeconds(){return Math.floor(this.totalMilliseconds/h)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(v,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(v,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.autoStart||(this.totalMilliseconds=this.time,this.endTime=this.now()+this.time),this.emitEvents&&this.$emit(b),document.visibilityState==="visible"&&this.continue())},continue(){if(!this.counting)return;const t=Math.min(this.totalMilliseconds,this.interval);if(t>0){let o,i;const a=s=>{o||(o=s),i||(i=s);const l=s-o;l>=t||l+(s-i)/2>=t?this.progress():this.requestId=requestAnimationFrame(a),i=s};this.requestId=requestAnimationFrame(a)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.update(),this.emitEvents&&this.totalMilliseconds>0&&this.$emit(S,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(E))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(g))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},restart(){this.pause(),this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.counting=!1,this.start()},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return _(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}});const L={key:0,class:"countdown"},B={key:1,class:"countdown"},k=n("span",{class:"ml-10"},"seconds",-1),A=N({__name:"Countdown",props:{time:{type:Number},css:{type:String}},setup(t){return I(0),(o,i)=>t.time?(m(),T(V(x),{key:0,time:t.time>0?t.time:0,class:"countdown-container justify-items-center"},{default:M(({days:a,hours:s,minutes:l,seconds:c})=>[n("span",{class:r(["text-primary font-bold",t.css])},e(a),3),f(" days "),n("span",{class:r(["text-primary font-bold",t.css])},e(s),3),f(" hours "),n("span",{class:r(["text-primary font-bold",t.css])},e(l),3),f(" minutes "),n("span",{class:r(["text-primary font-bold w-40",t.css])},[C(D,{name:"slide-up"},{default:M(()=>[c%2===0?(m(),p("span",L,e(c),1)):(m(),p("span",B,e(c),1))]),_:2},1024)],2),k]),_:1},8,["time"])):w("",!0)}});export{A as _};
