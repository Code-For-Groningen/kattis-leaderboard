(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{77739:(e,r,t)=>{Promise.resolve().then(t.bind(t,74455))},74455:(e,r,t)=>{"use strict";t.d(r,{LeaderboardTemplate:()=>E});var a=t(95155),s=t(88629);let l=()=>{let e=["Alice","Bob","Charlie","David","Eve"],r=[],t=Array.from({length:10},(e,r)=>new Date().getTime()-864e5*r);for(let a=0;a<5;a++){let s=t.map(e=>({date:e,score:Math.floor(100*Math.random())}));r.push({playerName:e[a],scoreHistory:s,currentScore:s[s.length-1].score})}return{universityName:"University of Groningen",universityRank:Math.floor(100*Math.random()),universityScore:Math.floor(100*Math.random()),players:r}},i=()=>(0,s.I)({queryKey:["useUniversityDataQuery"],queryFn:async()=>l(),refetchInterval:1e4}),n=()=>{let e=i();return{universityData:e.data,isLoading:e.isLoading,isError:e.isError}};var d=t(12115),o=t(31027),c=t(43463),u=t(69795);function v(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,u.QP)((0,c.$)(r))}let f=(0,o.F)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),x=d.forwardRef((e,r)=>{let{className:t,variant:s,...l}=e;return(0,a.jsx)("div",{ref:r,role:"alert",className:v(f({variant:s}),t),...l})});x.displayName="Alert",d.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("h5",{ref:r,className:v("mb-1 font-medium leading-none tracking-tight",t),...s})}).displayName="AlertTitle",d.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:v("text-sm [&_p]:leading-relaxed",t),...s})}).displayName="AlertDescription";let h=()=>(0,a.jsx)(x,{variant:"destructive",children:(0,a.jsx)("p",{children:"There was an error loading the leaderboard. Please try again later."})});var m=t(58627);let y=()=>(0,a.jsx)("div",{className:"w-full flex justify-center",children:(0,a.jsx)(m.A,{className:"w-10 h-10 text-blue-500 animate-spin"})});var p=t(4569),g=t(12800),j=t(66963),N=t(15255),b=t(16161);let w=e=>{let r={};return e.forEach(e=>{e.scoreHistory.forEach(t=>{t.date in r||(r[t.date]={date:t.date}),r[t.date][e.playerName]=t.score})}),Object.values(r)},k=e=>{let{data:r}=e,t=r.players.slice(0,5).map(e=>e.playerName);return(0,a.jsxs)("div",{className:"flex flex-col gap-4 items-center",children:[(0,a.jsxs)("h2",{className:"w-full text-2xl font-bold",children:[r.universityName," (",r.universityRank,")"]}),(0,a.jsxs)("p",{className:"w-full text-2xl font-bold",children:["Score: ",r.universityScore]}),(0,a.jsxs)(p.b,{width:800,height:400,data:w(r.players),children:[(0,a.jsx)(g.W,{dataKey:"date"}),(0,a.jsx)(j.h,{}),(0,a.jsx)(N.d,{stroke:"#eee",strokeDasharray:"5 5"}),t.map(e=>(0,a.jsx)(b.N,{type:"monotone",dataKey:e},e)),(0,a.jsx)(j.h,{})]})]})},E=()=>{let{universityData:e,isLoading:r,isError:t}=n();return(0,a.jsxs)("div",{className:"p-4 flex gap-4 flex-col",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold",children:"Leaderboard"}),t&&(0,a.jsx)(h,{}),r&&(0,a.jsx)(y,{}),e&&(0,a.jsx)(k,{data:e})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[527,113,441,517,358],()=>r(77739)),_N_E=e.O()}]);