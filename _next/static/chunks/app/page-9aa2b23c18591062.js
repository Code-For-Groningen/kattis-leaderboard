(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{77739:(e,r,t)=>{Promise.resolve().then(t.bind(t,66763))},66763:(e,r,t)=>{"use strict";t.d(r,{LeaderboardTemplate:()=>D});var a=t(95155),s=t(88629);let l=()=>{let e=["Alice","Bob","Charlie","David","Eve"],r=[],t=Array.from({length:10},(e,r)=>new Date().getTime()-864e5*r);for(let a=0;a<5;a++){let s=t.map(e=>({date:e,score:Math.floor(100*Math.random())}));r.push({playerName:e[a],profilePictureUrl:"",scoreHistory:s,currentScore:s[s.length-1].score})}return{universityName:"University of Groningen",universityRank:Math.floor(100*Math.random()),universityScore:Math.floor(100*Math.random()),players:r}},i=()=>(0,s.I)({queryKey:["useUniversityDataQuery"],queryFn:async()=>l(),refetchInterval:1e4}),n=()=>{let e=i();return{universityData:e.data,isLoading:e.isLoading,isError:e.isError}};var o=t(12115),g=t(31027),d=t(43463),b=t(69795);function c(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,b.QP)((0,d.$)(r))}let u=(0,g.F)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),f=o.forwardRef((e,r)=>{let{className:t,variant:s,...l}=e;return(0,a.jsx)("div",{ref:r,role:"alert",className:c(u({variant:s}),t),...l})});f.displayName="Alert",o.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("h5",{ref:r,className:c("mb-1 font-medium leading-none tracking-tight",t),...s})}).displayName="AlertTitle",o.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:c("text-sm [&_p]:leading-relaxed",t),...s})}).displayName="AlertDescription";let h=()=>(0,a.jsx)(f,{variant:"destructive",children:(0,a.jsx)("p",{children:"There was an error loading the leaderboard. Please try again later."})});var v=t(58627);let x=()=>(0,a.jsx)("div",{className:"w-full flex justify-center",children:(0,a.jsx)(v.A,{className:"w-10 h-10 text-blue-500 animate-spin"})}),m=["rgb(255, 87, 34)","rgb(255, 140, 0)","rgb(255, 193, 7)","rgb(255, 235, 59)","rgb(255, 152, 0)","rgb(255, 87, 34)","rgb(255, 193, 7)","rgb(255, 235, 59)","rgb(255, 152, 0)","rgb(255, 87, 34)","rgb(255, 140, 0)","rgb(255, 193, 7)","rgb(255, 235, 59)","rgb(255, 152, 0)","rgb(255, 87, 34)","rgb(255, 140, 0)","rgb(255, 193, 7)","rgb(255, 235, 59)","rgb(255, 152, 0)","rgb(255, 87, 34)","rgb(255, 140, 0)","rgb(255, 193, 7)","rgb(255, 235, 59)","rgb(255, 152, 0)","rgb(255, 87, 34)","rgb(255, 140, 0)","rgb(255, 193, 7)","rgb(255, 235, 59)","rgb(255, 152, 0)","rgb(255, 87, 34)","rgb(255, 140, 0)","rgb(255, 193, 7)","rgb(255, 235, 59)","rgb(255, 152, 0)","rgb(255, 87, 34)","rgb(255, 140, 0)","rgb(255, 193, 7)","rgb(255, 235, 59)","rgb(255, 152, 0)","rgb(255, 87, 34)","rgb(255, 152, 0)]","rgb(255, 193, 7)","rgb(255, 235, 59)","rgb(255, 152, 0)","rgb(255, 87, 34)","rgb(255, 140, 0)","rgb(255, 193, 7)","rgb(255, 235, 59)","rgb(255, 152, 0)"];var y=t(4569),p=t(12800),N=t(66963),j=t(15255),w=t(16161),k=t(40654);let _=e=>{let r={};return e.forEach(e=>{e.scoreHistory.forEach((t,a)=>{t.date in r||(r[t.date]={date:t.date}),r[t.date][e.playerName]=t.score,a===e.scoreHistory.length-1&&(r[t.date][e.playerName+"_"]=e.playerName)})}),Object.values(r)},A=e=>m[function(e,r){let t=0;for(let r=0;r<e.length;r++)t+=e.charCodeAt(r);return t%r}(e,m.length)],E=e=>{let{data:r}=e,t=r.players.slice(0,5).map(e=>e.playerName),s=_(r.players);return s[s.length-1].date,(0,a.jsxs)("div",{className:"flex flex-col gap-4 items-center",children:[(0,a.jsxs)("h2",{className:"w-full text-2xl font-bold",children:[r.universityName," (",r.universityRank,")"]}),(0,a.jsxs)("p",{className:"w-full text-2xl font-bold",children:["Score: ",r.universityScore]}),(0,a.jsxs)(y.b,{width:800,height:400,data:s,margin:{top:5,right:50,bottom:5,left:0},children:[(0,a.jsx)(p.W,{dataKey:"date"}),(0,a.jsx)(N.h,{}),(0,a.jsx)(j.d,{stroke:"#eee",strokeDasharray:"5 5"}),t.map(e=>(0,a.jsx)(w.N,{type:"monotone",dataKey:e,stroke:A(e),children:(0,a.jsx)(k.Z,{dataKey:e+"_",id:e,position:"top",offset:10})},e))]})]})},D=()=>{let{universityData:e,isLoading:r,isError:t}=n();return(0,a.jsxs)("div",{className:"p-4 flex gap-4 flex-col",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold",children:"Leaderboard"}),t&&(0,a.jsx)(h,{}),r&&(0,a.jsx)(x,{}),e&&(0,a.jsx)(E,{data:e})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[527,113,441,517,358],()=>r(77739)),_N_E=e.O()}]);