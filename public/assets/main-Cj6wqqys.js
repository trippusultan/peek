import{r as at,j as it,R as pv,c as SM}from"./client-DPVzX2tD.js";const mv=at.createContext({});function su(i){const t=at.useRef(null);return t.current===null&&(t.current=i()),t.current}const fp=at.createContext(null),zu=at.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function MM(i=!0){const t=at.useContext(fp);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,s=at.useId();at.useEffect(()=>{i&&r(s)},[i]);const o=at.useCallback(()=>i&&n&&n(s),[s,n,i]);return!e&&n?[!1,o]:[!0]}const hp=typeof window<"u",dp=hp?at.useLayoutEffect:at.useEffect,_i=i=>i;let gv=_i;function pp(i){let t;return()=>(t===void 0&&(t=i()),t)}const Ks=(i,t,e)=>{const n=t-i;return n===0?1:(e-i)/n},lr=i=>i*1e3,cr=i=>i/1e3,TM={useManualTiming:!1};function EM(i){let t=new Set,e=new Set,n=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),i()),c(o)}const l={schedule:(c,u=!1,h=!1)=>{const d=h&&n?t:e;return u&&s.add(c),d.has(c)||d.add(c),c},cancel:c=>{e.delete(c),s.delete(c)},process:c=>{if(o=c,n){r=!0;return}n=!0,[t,e]=[e,t],t.forEach(a),t.clear(),n=!1,r&&(r=!1,l.process(c))}};return l}const $l=["read","resolveKeyframes","update","preRender","render","postRender"],bM=40;function _v(i,t){let e=!1,n=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>e=!0,o=$l.reduce((m,S)=>(m[S]=EM(s),m),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:h,postRender:f}=o,d=()=>{const m=performance.now();e=!1,r.delta=n?1e3/60:Math.max(Math.min(m-r.timestamp,bM),1),r.timestamp=m,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),h.process(r),f.process(r),r.isProcessing=!1,e&&t&&(n=!1,i(d))},p=()=>{e=!0,n=!0,r.isProcessing||i(d)};return{schedule:$l.reduce((m,S)=>{const y=o[S];return m[S]=(x,M=!1,E=!1)=>(e||p(),y.schedule(x,M,E)),m},{}),cancel:m=>{for(let S=0;S<$l.length;S++)o[$l[S]].cancel(m)},state:r,steps:o}}const{schedule:ke,cancel:Ur,state:Tn,steps:of}=_v(typeof requestAnimationFrame<"u"?requestAnimationFrame:_i,!0),vv=at.createContext({strict:!1}),Vm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ia={};for(const i in Vm)ia[i]={isEnabled:t=>Vm[i].some(e=>!!t[e])};function AM(i){for(const t in i)ia[t]={...ia[t],...i[t]}}const wM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ou(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||wM.has(i)}let xv=i=>!ou(i);function RM(i){i&&(xv=t=>t.startsWith("on")?!ou(t):i(t))}try{RM(require("@emotion/is-prop-valid").default)}catch{}function CM(i,t,e){const n={};for(const r in i)r==="values"&&typeof i.values=="object"||(xv(r)||e===!0&&ou(r)||!t&&!ou(r)||i.draggable&&r.startsWith("onDrag"))&&(n[r]=i[r]);return n}function PM(i){if(typeof Proxy>"u")return i;const t=new Map,e=(...n)=>i(...n);return new Proxy(e,{get:(n,r)=>r==="create"?i:(t.has(r)||t.set(r,i(r)),t.get(r))})}const Gu=at.createContext({});function yl(i){return typeof i=="string"||Array.isArray(i)}function Hu(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}const mp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],gp=["initial",...mp];function Wu(i){return Hu(i.animate)||gp.some(t=>yl(i[t]))}function yv(i){return!!(Wu(i)||i.variants)}function DM(i,t){if(Wu(i)){const{initial:e,animate:n}=i;return{initial:e===!1||yl(e)?e:void 0,animate:yl(n)?n:void 0}}return i.inherit!==!1?t:{}}function LM(i){const{initial:t,animate:e}=DM(i,at.useContext(Gu));return at.useMemo(()=>({initial:t,animate:e}),[km(t),km(e)])}function km(i){return Array.isArray(i)?i.join(" "):i}const IM=Symbol.for("motionComponentSymbol");function Fo(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function NM(i,t,e){return at.useCallback(n=>{n&&i.onMount&&i.onMount(n),t&&(n?t.mount(n):t.unmount()),e&&(typeof e=="function"?e(n):Fo(e)&&(e.current=n))},[t])}const _p=i=>i.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),FM="framerAppearId",Sv="data-"+_p(FM),{schedule:vp}=_v(queueMicrotask,!1),Mv=at.createContext({});function UM(i,t,e,n,r){var s,o;const{visualElement:a}=at.useContext(Gu),l=at.useContext(vv),c=at.useContext(fp),u=at.useContext(zu).reducedMotion,h=at.useRef(null);n=n||l.renderer,!h.current&&n&&(h.current=n(i,{visualState:t,parent:a,props:e,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const f=h.current,d=at.useContext(Mv);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&OM(h.current,e,r,d);const p=at.useRef(!1);at.useInsertionEffect(()=>{f&&p.current&&f.update(e,c)});const _=e[Sv],g=at.useRef(!!_&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,_))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,_)));return dp(()=>{f&&(p.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),vp.render(f.render),g.current&&f.animationState&&f.animationState.animateChanges())}),at.useEffect(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,_)}),g.current=!1))}),f}function OM(i,t,e,n){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;i.projection=new e(i.latestValues,t["data-framer-portal-id"]?void 0:Tv(i.parent)),i.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Fo(a),visualElement:i,animationType:typeof s=="string"?s:"both",initialPromotionConfig:n,layoutScroll:l,layoutRoot:c})}function Tv(i){if(i)return i.options.allowProjection!==!1?i.projection:Tv(i.parent)}function BM({preloadedFeatures:i,createVisualElement:t,useRender:e,useVisualState:n,Component:r}){var s,o;i&&AM(i);function a(c,u){let h;const f={...at.useContext(zu),...c,layoutId:VM(c)},{isStatic:d}=f,p=LM(c),_=n(c,d);if(!d&&hp){kM();const g=zM(f);h=g.MeasureLayout,p.visualElement=UM(r,_,f,t,g.ProjectionNode)}return it.jsxs(Gu.Provider,{value:p,children:[h&&p.visualElement?it.jsx(h,{visualElement:p.visualElement,...f}):null,e(r,c,NM(_,p.visualElement,u),_,d,p.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=at.forwardRef(a);return l[IM]=r,l}function VM({layoutId:i}){const t=at.useContext(mv).id;return t&&i!==void 0?t+"-"+i:i}function kM(i,t){at.useContext(vv).strict}function zM(i){const{drag:t,layout:e}=ia;if(!t&&!e)return{};const n={...t,...e};return{MeasureLayout:t!=null&&t.isEnabled(i)||e!=null&&e.isEnabled(i)?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}const GM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xp(i){return typeof i!="string"||i.includes("-")?!1:!!(GM.indexOf(i)>-1||/[A-Z]/u.test(i))}function zm(i){const t=[{},{}];return i==null||i.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function yp(i,t,e,n){if(typeof t=="function"){const[r,s]=zm(n);t=t(e!==void 0?e:i.custom,r,s)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[r,s]=zm(n);t=t(e!==void 0?e:i.custom,r,s)}return t}const xh=i=>Array.isArray(i),HM=i=>!!(i&&typeof i=="object"&&i.mix&&i.toValue),WM=i=>xh(i)?i[i.length-1]||0:i,rn=i=>!!(i&&i.getVelocity);function kc(i){const t=rn(i)?i.get():i;return HM(t)?t.toValue():t}function XM({scrapeMotionValuesFromProps:i,createRenderState:t,onUpdate:e},n,r,s){const o={latestValues:YM(n,r,s,i),renderState:t()};return e&&(o.onMount=a=>e({props:n,current:a,...o}),o.onUpdate=a=>e(a)),o}const Ev=i=>(t,e)=>{const n=at.useContext(Gu),r=at.useContext(fp),s=()=>XM(i,t,n,r);return e?s():su(s)};function YM(i,t,e,n){const r={},s=n(i,{});for(const f in s)r[f]=kc(s[f]);let{initial:o,animate:a}=i;const l=Wu(i),c=yv(i);t&&c&&!l&&i.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let u=e?e.initial===!1:!1;u=u||o===!1;const h=u?a:o;if(h&&typeof h!="boolean"&&!Hu(h)){const f=Array.isArray(h)?h:[h];for(let d=0;d<f.length;d++){const p=yp(i,f[d]);if(p){const{transitionEnd:_,transition:g,...m}=p;for(const S in m){let y=m[S];if(Array.isArray(y)){const x=u?y.length-1:0;y=y[x]}y!==null&&(r[S]=y)}for(const S in _)r[S]=_[S]}}}return r}const xa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ro=new Set(xa),bv=i=>t=>typeof t=="string"&&t.startsWith(i),Av=bv("--"),qM=bv("var(--"),Sp=i=>qM(i)?$M.test(i.split("/*")[0].trim()):!1,$M=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,wv=(i,t)=>t&&typeof i=="number"?t.transform(i):i,Or=(i,t,e)=>e>t?t:e<i?i:e,ya={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Sl={...ya,transform:i=>Or(0,1,i)},Kl={...ya,default:1},kl=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),Qr=kl("deg"),ur=kl("%"),te=kl("px"),KM=kl("vh"),ZM=kl("vw"),Gm={...ur,parse:i=>ur.parse(i)/100,transform:i=>ur.transform(i*100)},JM={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,radius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,top:te,right:te,bottom:te,left:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,backgroundPositionX:te,backgroundPositionY:te},jM={rotate:Qr,rotateX:Qr,rotateY:Qr,rotateZ:Qr,scale:Kl,scaleX:Kl,scaleY:Kl,scaleZ:Kl,skew:Qr,skewX:Qr,skewY:Qr,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:Sl,originX:Gm,originY:Gm,originZ:te},Hm={...ya,transform:Math.round},Mp={...JM,...jM,zIndex:Hm,size:te,fillOpacity:Sl,strokeOpacity:Sl,numOctaves:Hm},QM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},tT=xa.length;function eT(i,t,e){let n="",r=!0;for(let s=0;s<tT;s++){const o=xa[s],a=i[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||e){const c=wv(a,Mp[o]);if(!l){r=!1;const u=QM[o]||o;n+=`${u}(${c}) `}e&&(t[o]=c)}}return n=n.trim(),e?n=e(t,r?"":n):r&&(n="none"),n}function Tp(i,t,e){const{style:n,vars:r,transformOrigin:s}=i;let o=!1,a=!1;for(const l in t){const c=t[l];if(ro.has(l)){o=!0;continue}else if(Av(l)){r[l]=c;continue}else{const u=wv(c,Mp[l]);l.startsWith("origin")?(a=!0,s[l]=u):n[l]=u}}if(t.transform||(o||e?n.transform=eT(t,i.transform,e):n.transform&&(n.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;n.transformOrigin=`${l} ${c} ${u}`}}const nT={offset:"stroke-dashoffset",array:"stroke-dasharray"},iT={offset:"strokeDashoffset",array:"strokeDasharray"};function rT(i,t,e=1,n=0,r=!0){i.pathLength=1;const s=r?nT:iT;i[s.offset]=te.transform(-n);const o=te.transform(t),a=te.transform(e);i[s.array]=`${o} ${a}`}function Wm(i,t,e){return typeof i=="string"?i:te.transform(t+e*i)}function sT(i,t,e){const n=Wm(t,i.x,i.width),r=Wm(e,i.y,i.height);return`${n} ${r}`}function Ep(i,{attrX:t,attrY:e,attrScale:n,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,h){if(Tp(i,c,h),u){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:f,style:d,dimensions:p}=i;f.transform&&(p&&(d.transform=f.transform),delete f.transform),p&&(r!==void 0||s!==void 0||d.transform)&&(d.transformOrigin=sT(p,r!==void 0?r:.5,s!==void 0?s:.5)),t!==void 0&&(f.x=t),e!==void 0&&(f.y=e),n!==void 0&&(f.scale=n),o!==void 0&&rT(f,o,a,l,!1)}const bp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Rv=()=>({...bp(),attrs:{}}),Ap=i=>typeof i=="string"&&i.toLowerCase()==="svg";function Cv(i,{style:t,vars:e},n,r){Object.assign(i.style,t,r&&r.getProjectionStyles(n));for(const s in e)i.style.setProperty(s,e[s])}const Pv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Dv(i,t,e,n){Cv(i,t,void 0,n);for(const r in t.attrs)i.setAttribute(Pv.has(r)?r:_p(r),t.attrs[r])}const au={};function oT(i){Object.assign(au,i)}function Lv(i,{layout:t,layoutId:e}){return ro.has(i)||i.startsWith("origin")||(t||e!==void 0)&&(!!au[i]||i==="opacity")}function wp(i,t,e){var n;const{style:r}=i,s={};for(const o in r)(rn(r[o])||t.style&&rn(t.style[o])||Lv(o,i)||((n=e==null?void 0:e.getValue(o))===null||n===void 0?void 0:n.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function Iv(i,t,e){const n=wp(i,t,e);for(const r in i)if(rn(i[r])||rn(t[r])){const s=xa.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=i[r]}return n}function aT(i,t){try{t.dimensions=typeof i.getBBox=="function"?i.getBBox():i.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Xm=["x","y","width","height","cx","cy","r"],lT={useVisualState:Ev({scrapeMotionValuesFromProps:Iv,createRenderState:Rv,onUpdate:({props:i,prevProps:t,current:e,renderState:n,latestValues:r})=>{if(!e)return;let s=!!i.drag;if(!s){for(const a in r)if(ro.has(a)){s=!0;break}}if(!s)return;let o=!t;if(t)for(let a=0;a<Xm.length;a++){const l=Xm[a];i[l]!==t[l]&&(o=!0)}o&&ke.read(()=>{aT(e,n),ke.render(()=>{Ep(n,r,Ap(e.tagName),i.transformTemplate),Dv(e,n)})})}})},cT={useVisualState:Ev({scrapeMotionValuesFromProps:wp,createRenderState:bp})};function Nv(i,t,e){for(const n in t)!rn(t[n])&&!Lv(n,e)&&(i[n]=t[n])}function uT({transformTemplate:i},t){return at.useMemo(()=>{const e=bp();return Tp(e,t,i),Object.assign({},e.vars,e.style)},[t])}function fT(i,t){const e=i.style||{},n={};return Nv(n,e,i),Object.assign(n,uT(i,t)),n}function hT(i,t){const e={},n=fT(i,t);return i.drag&&i.dragListener!==!1&&(e.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(e.tabIndex=0),e.style=n,e}function dT(i,t,e,n){const r=at.useMemo(()=>{const s=Rv();return Ep(s,t,Ap(n),i.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(i.style){const s={};Nv(s,i.style,i),r.style={...s,...r.style}}return r}function pT(i=!1){return(e,n,r,{latestValues:s},o)=>{const l=(xp(e)?dT:hT)(n,s,o,e),c=CM(n,typeof e=="string",i),u=e!==at.Fragment?{...c,...l,ref:r}:{},{children:h}=n,f=at.useMemo(()=>rn(h)?h.get():h,[h]);return at.createElement(e,{...u,children:f})}}function mT(i,t){return function(n,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...xp(n)?lT:cT,preloadedFeatures:i,useRender:pT(r),createVisualElement:t,Component:n};return BM(o)}}function Fv(i,t){if(!Array.isArray(t))return!1;const e=t.length;if(e!==i.length)return!1;for(let n=0;n<e;n++)if(t[n]!==i[n])return!1;return!0}function Xu(i,t,e){const n=i.getProps();return yp(n,t,e!==void 0?e:n.custom,i)}const gT=pp(()=>window.ScrollTimeline!==void 0);class _T{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,e){for(let n=0;n<this.animations.length;n++)this.animations[n][t]=e}attachTimeline(t,e){const n=this.animations.map(r=>{if(gT()&&r.attachTimeline)return r.attachTimeline(t);if(typeof e=="function")return e(r)});return()=>{n.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let e=0;e<this.animations.length;e++)t=Math.max(t,this.animations[e].duration);return t}runAll(t){this.animations.forEach(e=>e[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Uv extends _T{then(t,e){return Promise.all(this.animations).then(t).catch(e)}}function Rp(i,t){return i?i[t]||i.default||i:void 0}const lu=2e4;function Cp(i){let t=0;const e=50;let n=i.next(t);for(;!n.done&&t<lu;)t+=e,n=i.next(t);return t>=lu?1/0:t}function vT(i,t=100,e){const n=e({...i,keyframes:[0,t]}),r=Math.min(Cp(n),lu);return{type:"keyframes",ease:s=>n.next(r*s).value/t,duration:cr(r)}}function Yu(i){return typeof i=="function"}function Ym(i,t){i.timeline=t,i.onfinish=null}const Pp=i=>Array.isArray(i)&&typeof i[0]=="number",xT={linearEasing:void 0};function yT(i,t){const e=pp(i);return()=>{var n;return(n=xT[t])!==null&&n!==void 0?n:e()}}const cu=yT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ov=(i,t,e=10)=>{let n="";const r=Math.max(Math.round(t/e),2);for(let s=0;s<r;s++)n+=i(Ks(0,r-1,s))+", ";return`linear(${n.substring(0,n.length-2)})`};function Bv(i){return!!(typeof i=="function"&&cu()||!i||typeof i=="string"&&(i in yh||cu())||Pp(i)||Array.isArray(i)&&i.every(Bv))}const Oa=([i,t,e,n])=>`cubic-bezier(${i}, ${t}, ${e}, ${n})`,yh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Oa([0,.65,.55,1]),circOut:Oa([.55,0,1,.45]),backIn:Oa([.31,.01,.66,-.59]),backOut:Oa([.33,1.53,.69,.99])};function Vv(i,t){if(i)return typeof i=="function"&&cu()?Ov(i,t):Pp(i)?Oa(i):Array.isArray(i)?i.map(e=>Vv(e,t)||yh.easeOut):yh[i]}const Wi={x:!1,y:!1};function kv(){return Wi.x||Wi.y}function zv(i,t,e){var n;if(i instanceof Element)return[i];if(typeof i=="string"){let r=document;t&&(r=t.current);const s=(n=e==null?void 0:e[i])!==null&&n!==void 0?n:r.querySelectorAll(i);return s?Array.from(s):[]}return Array.from(i)}function Gv(i,t){const e=zv(i),n=new AbortController,r={passive:!0,...t,signal:n.signal};return[e,r,()=>n.abort()]}function qm(i){return t=>{t.pointerType==="touch"||kv()||i(t)}}function ST(i,t,e={}){const[n,r,s]=Gv(i,e),o=qm(a=>{const{target:l}=a,c=t(a);if(typeof c!="function"||!l)return;const u=qm(h=>{c(h),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return n.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const Hv=(i,t)=>t?i===t?!0:Hv(i,t.parentElement):!1,Dp=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,MT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function TT(i){return MT.has(i.tagName)||i.tabIndex!==-1}const Ba=new WeakSet;function $m(i){return t=>{t.key==="Enter"&&i(t)}}function af(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const ET=(i,t)=>{const e=i.currentTarget;if(!e)return;const n=$m(()=>{if(Ba.has(e))return;af(e,"down");const r=$m(()=>{af(e,"up")}),s=()=>af(e,"cancel");e.addEventListener("keyup",r,t),e.addEventListener("blur",s,t)});e.addEventListener("keydown",n,t),e.addEventListener("blur",()=>e.removeEventListener("keydown",n),t)};function Km(i){return Dp(i)&&!kv()}function bT(i,t,e={}){const[n,r,s]=Gv(i,e),o=a=>{const l=a.currentTarget;if(!Km(a)||Ba.has(l))return;Ba.add(l);const c=t(a),u=(d,p)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",f),!(!Km(d)||!Ba.has(l))&&(Ba.delete(l),typeof c=="function"&&c(d,{success:p}))},h=d=>{u(d,e.useGlobalTarget||Hv(l,d.target))},f=d=>{u(d,!1)};window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",f,r)};return n.forEach(a=>{!TT(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(e.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>ET(c,r),r)}),s}function AT(i){return i==="x"||i==="y"?Wi[i]?null:(Wi[i]=!0,()=>{Wi[i]=!1}):Wi.x||Wi.y?null:(Wi.x=Wi.y=!0,()=>{Wi.x=Wi.y=!1})}const Wv=new Set(["width","height","top","left","right","bottom",...xa]);let zc;function wT(){zc=void 0}const fr={now:()=>(zc===void 0&&fr.set(Tn.isProcessing||TM.useManualTiming?Tn.timestamp:performance.now()),zc),set:i=>{zc=i,queueMicrotask(wT)}};function Lp(i,t){i.indexOf(t)===-1&&i.push(t)}function qu(i,t){const e=i.indexOf(t);e>-1&&i.splice(e,1)}class Ip{constructor(){this.subscriptions=[]}add(t){return Lp(this.subscriptions,t),()=>qu(this.subscriptions,t)}notify(t,e,n){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,e,n);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(t,e,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Xv(i,t){return t?i*(1e3/t):0}const Zm=30,RT=i=>!isNaN(parseFloat(i));class CT{constructor(t,e={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(n,r=!0)=>{const s=fr.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){this.current=t,this.updatedAt=fr.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=RT(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new Ip);const n=this.events[t].add(e);return t==="change"?()=>{n(),ke.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){!e||!this.passiveEffect?this.updateAndNotify(t,e):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,e,n){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=fr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Zm)return 0;const e=Math.min(this.updatedAt-this.prevUpdatedAt,Zm);return Xv(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ra(i,t){return new CT(i,t)}function PT(i,t,e){i.hasValue(t)?i.getValue(t).set(e):i.addValue(t,ra(e))}function DT(i,t){const e=Xu(i,t);let{transitionEnd:n={},transition:r={},...s}=e||{};s={...s,...n};for(const o in s){const a=WM(s[o]);PT(i,o,a)}}function LT(i){return!!(rn(i)&&i.add)}function Sh(i,t){const e=i.getValue("willChange");if(LT(e))return e.add(t)}function Yv(i){return i.props[Sv]}const qv=(i,t,e)=>(((1-3*e+3*t)*i+(3*e-6*t))*i+3*t)*i,IT=1e-7,NT=12;function FT(i,t,e,n,r){let s,o,a=0;do o=t+(e-t)/2,s=qv(o,n,r)-i,s>0?e=o:t=o;while(Math.abs(s)>IT&&++a<NT);return o}function zl(i,t,e,n){if(i===t&&e===n)return _i;const r=s=>FT(s,0,1,i,e);return s=>s===0||s===1?s:qv(r(s),t,n)}const $v=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,Kv=i=>t=>1-i(1-t),Zv=zl(.33,1.53,.69,.99),Np=Kv(Zv),Jv=$v(Np),jv=i=>(i*=2)<1?.5*Np(i):.5*(2-Math.pow(2,-10*(i-1))),Fp=i=>1-Math.sin(Math.acos(i)),Qv=Kv(Fp),tx=$v(Fp),ex=i=>/^0[^.\s]+$/u.test(i);function UT(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||ex(i):!0}const el=i=>Math.round(i*1e5)/1e5,Up=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function OT(i){return i==null}const BT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Op=(i,t)=>e=>!!(typeof e=="string"&&BT.test(e)&&e.startsWith(i)||t&&!OT(e)&&Object.prototype.hasOwnProperty.call(e,t)),nx=(i,t,e)=>n=>{if(typeof n!="string")return n;const[r,s,o,a]=n.match(Up);return{[i]:parseFloat(r),[t]:parseFloat(s),[e]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},VT=i=>Or(0,255,i),lf={...ya,transform:i=>Math.round(VT(i))},Ns={test:Op("rgb","red"),parse:nx("red","green","blue"),transform:({red:i,green:t,blue:e,alpha:n=1})=>"rgba("+lf.transform(i)+", "+lf.transform(t)+", "+lf.transform(e)+", "+el(Sl.transform(n))+")"};function kT(i){let t="",e="",n="",r="";return i.length>5?(t=i.substring(1,3),e=i.substring(3,5),n=i.substring(5,7),r=i.substring(7,9)):(t=i.substring(1,2),e=i.substring(2,3),n=i.substring(3,4),r=i.substring(4,5),t+=t,e+=e,n+=n,r+=r),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const Mh={test:Op("#"),parse:kT,transform:Ns.transform},Uo={test:Op("hsl","hue"),parse:nx("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:e,alpha:n=1})=>"hsla("+Math.round(i)+", "+ur.transform(el(t))+", "+ur.transform(el(e))+", "+el(Sl.transform(n))+")"},Nn={test:i=>Ns.test(i)||Mh.test(i)||Uo.test(i),parse:i=>Ns.test(i)?Ns.parse(i):Uo.test(i)?Uo.parse(i):Mh.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?Ns.transform(i):Uo.transform(i)},zT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function GT(i){var t,e;return isNaN(i)&&typeof i=="string"&&(((t=i.match(Up))===null||t===void 0?void 0:t.length)||0)+(((e=i.match(zT))===null||e===void 0?void 0:e.length)||0)>0}const ix="number",rx="color",HT="var",WT="var(",Jm="${}",XT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ml(i){const t=i.toString(),e=[],n={color:[],number:[],var:[]},r=[];let s=0;const a=t.replace(XT,l=>(Nn.test(l)?(n.color.push(s),r.push(rx),e.push(Nn.parse(l))):l.startsWith(WT)?(n.var.push(s),r.push(HT),e.push(l)):(n.number.push(s),r.push(ix),e.push(parseFloat(l))),++s,Jm)).split(Jm);return{values:e,split:a,indexes:n,types:r}}function sx(i){return Ml(i).values}function ox(i){const{split:t,types:e}=Ml(i),n=t.length;return r=>{let s="";for(let o=0;o<n;o++)if(s+=t[o],r[o]!==void 0){const a=e[o];a===ix?s+=el(r[o]):a===rx?s+=Nn.transform(r[o]):s+=r[o]}return s}}const YT=i=>typeof i=="number"?0:i;function qT(i){const t=sx(i);return ox(i)(t.map(YT))}const fs={test:GT,parse:sx,createTransformer:ox,getAnimatableNone:qT},$T=new Set(["brightness","contrast","saturate","opacity"]);function KT(i){const[t,e]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[n]=e.match(Up)||[];if(!n)return i;const r=e.replace(n,"");let s=$T.has(t)?1:0;return n!==e&&(s*=100),t+"("+s+r+")"}const ZT=/\b([a-z-]*)\(.*?\)/gu,Th={...fs,getAnimatableNone:i=>{const t=i.match(ZT);return t?t.map(KT).join(" "):i}},JT={...Mp,color:Nn,backgroundColor:Nn,outlineColor:Nn,fill:Nn,stroke:Nn,borderColor:Nn,borderTopColor:Nn,borderRightColor:Nn,borderBottomColor:Nn,borderLeftColor:Nn,filter:Th,WebkitFilter:Th},Bp=i=>JT[i];function ax(i,t){let e=Bp(i);return e!==Th&&(e=fs),e.getAnimatableNone?e.getAnimatableNone(t):void 0}const jT=new Set(["auto","none","0"]);function QT(i,t,e){let n=0,r;for(;n<i.length&&!r;){const s=i[n];typeof s=="string"&&!jT.has(s)&&Ml(s).values.length&&(r=i[n]),n++}if(r&&e)for(const s of t)i[s]=ax(e,r)}const jm=i=>i===ya||i===te,Qm=(i,t)=>parseFloat(i.split(", ")[t]),tg=(i,t)=>(e,{transform:n})=>{if(n==="none"||!n)return 0;const r=n.match(/^matrix3d\((.+)\)$/u);if(r)return Qm(r[1],t);{const s=n.match(/^matrix\((.+)\)$/u);return s?Qm(s[1],i):0}},tE=new Set(["x","y","z"]),eE=xa.filter(i=>!tE.has(i));function nE(i){const t=[];return eE.forEach(e=>{const n=i.getValue(e);n!==void 0&&(t.push([e,n.get()]),n.set(e.startsWith("scale")?1:0))}),t}const sa={width:({x:i},{paddingLeft:t="0",paddingRight:e="0"})=>i.max-i.min-parseFloat(t)-parseFloat(e),height:({y:i},{paddingTop:t="0",paddingBottom:e="0"})=>i.max-i.min-parseFloat(t)-parseFloat(e),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:tg(4,13),y:tg(5,14)};sa.translateX=sa.x;sa.translateY=sa.y;const ks=new Set;let Eh=!1,bh=!1;function lx(){if(bh){const i=Array.from(ks).filter(n=>n.needsMeasurement),t=new Set(i.map(n=>n.element)),e=new Map;t.forEach(n=>{const r=nE(n);r.length&&(e.set(n,r),n.render())}),i.forEach(n=>n.measureInitialState()),t.forEach(n=>{n.render();const r=e.get(n);r&&r.forEach(([s,o])=>{var a;(a=n.getValue(s))===null||a===void 0||a.set(o)})}),i.forEach(n=>n.measureEndState()),i.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}bh=!1,Eh=!1,ks.forEach(i=>i.complete()),ks.clear()}function cx(){ks.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(bh=!0)})}function iE(){cx(),lx()}class Vp{constructor(t,e,n,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=n,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ks.add(this),Eh||(Eh=!0,ke.read(cx),ke.resolveKeyframes(lx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:n,motionValue:r}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(n&&e){const l=n.readValue(e,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),r&&o===void 0&&r.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ks.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ks.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ux=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),rE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function sE(i){const t=rE.exec(i);if(!t)return[,];const[,e,n,r]=t;return[`--${e??n}`,r]}function fx(i,t,e=1){const[n,r]=sE(i);if(!n)return;const s=window.getComputedStyle(t).getPropertyValue(n);if(s){const o=s.trim();return ux(o)?parseFloat(o):o}return Sp(r)?fx(r,t,e+1):r}const hx=i=>t=>t.test(i),oE={test:i=>i==="auto",parse:i=>i},dx=[ya,te,ur,Qr,ZM,KM,oE],eg=i=>dx.find(hx(i));class px extends Vp{constructor(t,e,n,r,s){super(t,e,n,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:n}=this;if(!e||!e.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),Sp(c))){const u=fx(c,e.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Wv.has(n)||t.length!==2)return;const[r,s]=t,o=eg(r),a=eg(s);if(o!==a)if(jm(o)&&jm(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,n=[];for(let r=0;r<t.length;r++)UT(t[r])&&n.push(r);n.length&&QT(t,n,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:n}=this;if(!t||!t.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=sa[n](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;const r=e[e.length-1];r!==void 0&&t.getValue(n,r).jump(r,!1)}measureEndState(){var t;const{element:e,name:n,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const s=e.getValue(n);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=sa[n](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const ng=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(fs.test(i)||i==="0")&&!i.startsWith("url("));function aE(i){const t=i[0];if(i.length===1)return!0;for(let e=0;e<i.length;e++)if(i[e]!==t)return!0}function lE(i,t,e,n){const r=i[0];if(r===null)return!1;if(t==="display"||t==="visibility")return!0;const s=i[i.length-1],o=ng(r,t),a=ng(s,t);return!o||!a?!1:aE(i)||(e==="spring"||Yu(e))&&n}const cE=i=>i!==null;function $u(i,{repeat:t,repeatType:e="loop"},n){const r=i.filter(cE),s=t&&e!=="loop"&&t%2===1?0:r.length-1;return!s||n===void 0?r[s]:n}const uE=40;class mx{constructor({autoplay:t=!0,delay:e=0,type:n="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=fr.now(),this.options={autoplay:t,delay:e,type:n,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>uE?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&iE(),this._resolved}onKeyframesResolved(t,e){this.resolvedAt=fr.now(),this.hasAttemptedResolve=!0;const{name:n,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!lE(t,n,r,s))if(o)this.options.duration=0;else{l&&l($u(t,this.options,e)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,e);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:e,...u},this.onPostResolved())}onPostResolved(){}then(t,e){return this.currentFinishedPromise.then(t,e)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const $e=(i,t,e)=>i+(t-i)*e;function cf(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*(2/3-e)*6:i}function fE({hue:i,saturation:t,lightness:e,alpha:n}){i/=360,t/=100,e/=100;let r=0,s=0,o=0;if(!t)r=s=o=e;else{const a=e<.5?e*(1+t):e+t-e*t,l=2*e-a;r=cf(l,a,i+1/3),s=cf(l,a,i),o=cf(l,a,i-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:n}}function uu(i,t){return e=>e>0?t:i}const uf=(i,t,e)=>{const n=i*i,r=e*(t*t-n)+n;return r<0?0:Math.sqrt(r)},hE=[Mh,Ns,Uo],dE=i=>hE.find(t=>t.test(i));function ig(i){const t=dE(i);if(!t)return!1;let e=t.parse(i);return t===Uo&&(e=fE(e)),e}const rg=(i,t)=>{const e=ig(i),n=ig(t);if(!e||!n)return uu(i,t);const r={...e};return s=>(r.red=uf(e.red,n.red,s),r.green=uf(e.green,n.green,s),r.blue=uf(e.blue,n.blue,s),r.alpha=$e(e.alpha,n.alpha,s),Ns.transform(r))},pE=(i,t)=>e=>t(i(e)),Gl=(...i)=>i.reduce(pE),Ah=new Set(["none","hidden"]);function mE(i,t){return Ah.has(i)?e=>e<=0?i:t:e=>e>=1?t:i}function gE(i,t){return e=>$e(i,t,e)}function kp(i){return typeof i=="number"?gE:typeof i=="string"?Sp(i)?uu:Nn.test(i)?rg:xE:Array.isArray(i)?gx:typeof i=="object"?Nn.test(i)?rg:_E:uu}function gx(i,t){const e=[...i],n=e.length,r=i.map((s,o)=>kp(s)(s,t[o]));return s=>{for(let o=0;o<n;o++)e[o]=r[o](s);return e}}function _E(i,t){const e={...i,...t},n={};for(const r in e)i[r]!==void 0&&t[r]!==void 0&&(n[r]=kp(i[r])(i[r],t[r]));return r=>{for(const s in n)e[s]=n[s](r);return e}}function vE(i,t){var e;const n=[],r={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],a=i.indexes[o][r[o]],l=(e=i.values[a])!==null&&e!==void 0?e:0;n[s]=l,r[o]++}return n}const xE=(i,t)=>{const e=fs.createTransformer(t),n=Ml(i),r=Ml(t);return n.indexes.var.length===r.indexes.var.length&&n.indexes.color.length===r.indexes.color.length&&n.indexes.number.length>=r.indexes.number.length?Ah.has(i)&&!r.values.length||Ah.has(t)&&!n.values.length?mE(i,t):Gl(gx(vE(n,r),r.values),e):uu(i,t)};function _x(i,t,e){return typeof i=="number"&&typeof t=="number"&&typeof e=="number"?$e(i,t,e):kp(i)(i,t)}const yE=5;function vx(i,t,e){const n=Math.max(t-yE,0);return Xv(e-i(n),t-n)}const en={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ff=.001;function SE({duration:i=en.duration,bounce:t=en.bounce,velocity:e=en.velocity,mass:n=en.mass}){let r,s,o=1-t;o=Or(en.minDamping,en.maxDamping,o),i=Or(en.minDuration,en.maxDuration,cr(i)),o<1?(r=c=>{const u=c*o,h=u*i,f=u-e,d=wh(c,o),p=Math.exp(-h);return ff-f/d*p},s=c=>{const h=c*o*i,f=h*e+e,d=Math.pow(o,2)*Math.pow(c,2)*i,p=Math.exp(-h),_=wh(Math.pow(c,2),o);return(-r(c)+ff>0?-1:1)*((f-d)*p)/_}):(r=c=>{const u=Math.exp(-c*i),h=(c-e)*i+1;return-ff+u*h},s=c=>{const u=Math.exp(-c*i),h=(e-c)*(i*i);return u*h});const a=5/i,l=TE(r,s,a);if(i=lr(i),isNaN(l))return{stiffness:en.stiffness,damping:en.damping,duration:i};{const c=Math.pow(l,2)*n;return{stiffness:c,damping:o*2*Math.sqrt(n*c),duration:i}}}const ME=12;function TE(i,t,e){let n=e;for(let r=1;r<ME;r++)n=n-i(n)/t(n);return n}function wh(i,t){return i*Math.sqrt(1-t*t)}const EE=["duration","bounce"],bE=["stiffness","damping","mass"];function sg(i,t){return t.some(e=>i[e]!==void 0)}function AE(i){let t={velocity:en.velocity,stiffness:en.stiffness,damping:en.damping,mass:en.mass,isResolvedFromDuration:!1,...i};if(!sg(i,bE)&&sg(i,EE))if(i.visualDuration){const e=i.visualDuration,n=2*Math.PI/(e*1.2),r=n*n,s=2*Or(.05,1,1-(i.bounce||0))*Math.sqrt(r);t={...t,mass:en.mass,stiffness:r,damping:s}}else{const e=SE(i);t={...t,...e,mass:en.mass},t.isResolvedFromDuration=!0}return t}function zp(i=en.visualDuration,t=en.bounce){const e=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:n,restDelta:r}=e;const s=e.keyframes[0],o=e.keyframes[e.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:h,velocity:f,isResolvedFromDuration:d}=AE({...e,velocity:-cr(e.velocity||0)}),p=f||0,_=c/(2*Math.sqrt(l*u)),g=o-s,m=cr(Math.sqrt(l/u)),S=Math.abs(g)<5;n||(n=S?en.restSpeed.granular:en.restSpeed.default),r||(r=S?en.restDelta.granular:en.restDelta.default);let y;if(_<1){const M=wh(m,_);y=E=>{const A=Math.exp(-_*m*E);return o-A*((p+_*m*g)/M*Math.sin(M*E)+g*Math.cos(M*E))}}else if(_===1)y=M=>o-Math.exp(-m*M)*(g+(p+m*g)*M);else{const M=m*Math.sqrt(_*_-1);y=E=>{const A=Math.exp(-_*m*E),v=Math.min(M*E,300);return o-A*((p+_*m*g)*Math.sinh(v)+M*g*Math.cosh(v))/M}}const x={calculatedDuration:d&&h||null,next:M=>{const E=y(M);if(d)a.done=M>=h;else{let A=0;_<1&&(A=M===0?lr(p):vx(y,M,E));const v=Math.abs(A)<=n,b=Math.abs(o-E)<=r;a.done=v&&b}return a.value=a.done?o:E,a},toString:()=>{const M=Math.min(Cp(x),lu),E=Ov(A=>x.next(M*A).value,M,30);return M+"ms "+E}};return x}function og({keyframes:i,velocity:t=0,power:e=.8,timeConstant:n=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=i[0],f={done:!1,value:h},d=v=>a!==void 0&&v<a||l!==void 0&&v>l,p=v=>a===void 0?l:l===void 0||Math.abs(a-v)<Math.abs(l-v)?a:l;let _=e*t;const g=h+_,m=o===void 0?g:o(g);m!==g&&(_=m-h);const S=v=>-_*Math.exp(-v/n),y=v=>m+S(v),x=v=>{const b=S(v),w=y(v);f.done=Math.abs(b)<=c,f.value=f.done?m:w};let M,E;const A=v=>{d(f.value)&&(M=v,E=zp({keyframes:[f.value,p(f.value)],velocity:vx(y,v,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:v=>{let b=!1;return!E&&M===void 0&&(b=!0,x(v),A(v)),M!==void 0&&v>=M?E.next(v-M):(!b&&x(v),f)}}}const wE=zl(.42,0,1,1),RE=zl(0,0,.58,1),xx=zl(.42,0,.58,1),yx=i=>Array.isArray(i)&&typeof i[0]!="number",CE={linear:_i,easeIn:wE,easeInOut:xx,easeOut:RE,circIn:Fp,circInOut:tx,circOut:Qv,backIn:Np,backInOut:Jv,backOut:Zv,anticipate:jv},Rh=i=>{if(Pp(i)){gv(i.length===4);const[t,e,n,r]=i;return zl(t,e,n,r)}else if(typeof i=="string")return CE[i];return i};function PE(i,t,e){const n=[],r=e||_x,s=i.length-1;for(let o=0;o<s;o++){let a=r(i[o],i[o+1]);if(t){const l=Array.isArray(t)?t[o]||_i:t;a=Gl(l,a)}n.push(a)}return n}function DE(i,t,{clamp:e=!0,ease:n,mixer:r}={}){const s=i.length;if(gv(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=i[0]===i[1];i[0]>i[s-1]&&(i=[...i].reverse(),t=[...t].reverse());const a=PE(t,n,r),l=a.length,c=u=>{if(o&&u<i[0])return t[0];let h=0;if(l>1)for(;h<i.length-2&&!(u<i[h+1]);h++);const f=Ks(i[h],i[h+1],u);return a[h](f)};return e?u=>c(Or(i[0],i[s-1],u)):c}function Sx(i,t){const e=i[i.length-1];for(let n=1;n<=t;n++){const r=Ks(0,t,n);i.push($e(e,1,r))}}function Mx(i){const t=[0];return Sx(t,i.length-1),t}function LE(i,t){return i.map(e=>e*t)}function IE(i,t){return i.map(()=>t||xx).splice(0,i.length-1)}function fu({duration:i=300,keyframes:t,times:e,ease:n="easeInOut"}){const r=yx(n)?n.map(Rh):Rh(n),s={done:!1,value:t[0]},o=LE(e&&e.length===t.length?e:Mx(t),i),a=DE(o,t,{ease:Array.isArray(r)?r:IE(t,r)});return{calculatedDuration:i,next:l=>(s.value=a(l),s.done=l>=i,s)}}const NE=i=>{const t=({timestamp:e})=>i(e);return{start:()=>ke.update(t,!0),stop:()=>Ur(t),now:()=>Tn.isProcessing?Tn.timestamp:fr.now()}},FE={decay:og,inertia:og,tween:fu,keyframes:fu,spring:zp},UE=i=>i/100;class Ku extends mx{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:e,motionValue:n,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Vp,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,e,n,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:e="keyframes",repeat:n=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Yu(e)?e:FE[e]||fu;let l,c;a!==fu&&typeof t[0]!="number"&&(l=Gl(UE,_x(t[0],t[1])),t=[0,100]);const u=a({...this.options,keyframes:t});s==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Cp(u));const{calculatedDuration:h}=u,f=h+r,d=f*(n+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:f,totalDuration:d}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,e=!1){const{resolved:n}=this;if(!n){const{keyframes:v}=this.options;return{done:!0,value:v[v.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:h}=n;if(this.startTime===null)return s.next(0);const{delay:f,repeat:d,repeatType:p,repeatDelay:_,onUpdate:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),e?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-f*(this.speed>=0?1:-1),S=this.speed>=0?m<0:m>u;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let y=this.currentTime,x=s;if(d){const v=Math.min(this.currentTime,u)/h;let b=Math.floor(v),w=v%1;!w&&v>=1&&(w=1),w===1&&b--,b=Math.min(b,d+1),!!(b%2)&&(p==="reverse"?(w=1-w,_&&(w-=_/h)):p==="mirror"&&(x=o)),y=Or(0,1,w)*h}const M=S?{done:!1,value:l[0]}:x.next(y);a&&(M.value=a(M.value));let{done:E}=M;!S&&c!==null&&(E=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return A&&r!==void 0&&(M.value=$u(l,this.options,r)),g&&g(M.value),A&&this.finish(),M}get duration(){const{resolved:t}=this;return t?cr(t.calculatedDuration):0}get time(){return cr(this.currentTime)}set time(t){t=lr(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=cr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=NE,onPlay:e,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),e&&e();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=n??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}function OE(i){return new Ku(i)}const BE=new Set(["opacity","clipPath","filter","transform"]);function VE(i,t,e,{delay:n=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[t]:e};l&&(c.offset=l);const u=Vv(a,r);return Array.isArray(u)&&(c.easing=u),i.animate(c,{delay:n,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const kE=pp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),hu=10,zE=2e4;function GE(i){return Yu(i.type)||i.type==="spring"||!Bv(i.ease)}function HE(i,t){const e=new Ku({...t,keyframes:i,repeat:0,delay:0,isGenerator:!0});let n={done:!1,value:i[0]};const r=[];let s=0;for(;!n.done&&s<zE;)n=e.sample(s),r.push(n.value),s+=hu;return{times:void 0,keyframes:r,duration:s-hu,ease:"linear"}}const Tx={anticipate:jv,backInOut:Jv,circInOut:tx};function WE(i){return i in Tx}class ag extends mx{constructor(t){super(t);const{name:e,motionValue:n,element:r,keyframes:s}=this.options;this.resolver=new px(s,(o,a)=>this.onKeyframesResolved(o,a),e,n,r),this.resolver.scheduleResolve()}initPlayback(t,e){let{duration:n=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&cu()&&WE(s)&&(s=Tx[s]),GE(this.options)){const{onComplete:h,onUpdate:f,motionValue:d,element:p,..._}=this.options,g=HE(t,_);t=g.keyframes,t.length===1&&(t[1]=t[0]),n=g.duration,r=g.times,s=g.ease,o="keyframes"}const u=VE(a.owner.current,l,t,{...this.options,duration:n,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(Ym(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:h}=this.options;a.set($u(t,this.options,e)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:n,times:r,type:o,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:e}=t;return cr(e)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:e}=t;return cr(e.currentTime||0)}set time(t){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.currentTime=lr(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:e}=t;return e.playbackRate}set speed(t){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:e}=t;return e.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:e}=t;return e.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:e}=this;if(!e)return _i;const{animation:n}=e;Ym(n,t)}return _i}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:e}=t;e.playState==="finished"&&this.updateFinishedPromise(),e.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:e}=t;e.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:e,keyframes:n,duration:r,type:s,ease:o,times:a}=t;if(e.playState==="idle"||e.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:h,element:f,...d}=this.options,p=new Ku({...d,keyframes:n,duration:r,type:s,ease:o,times:a,isGenerator:!0}),_=lr(this.time);c.setWithVelocity(p.sample(_-hu).value,p.sample(_).value,hu)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:e,name:n,repeatDelay:r,repeatType:s,damping:o,type:a}=t;if(!e||!e.owner||!(e.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return kE()&&n&&BE.has(n)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const XE={type:"spring",stiffness:500,damping:25,restSpeed:10},YE=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),qE={type:"keyframes",duration:.8},$E={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},KE=(i,{keyframes:t})=>t.length>2?qE:ro.has(i)?i.startsWith("scale")?YE(t[1]):XE:$E;function ZE({when:i,delay:t,delayChildren:e,staggerChildren:n,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Gp=(i,t,e,n={},r,s)=>o=>{const a=Rp(n,i)||{},l=a.delay||n.delay||0;let{elapsed:c=0}=n;c=c-lr(l);let u={keyframes:Array.isArray(e)?e:[null,e],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:i,motionValue:t,element:s?void 0:r};ZE(a)||(u={...u,...KE(i,u)}),u.duration&&(u.duration=lr(u.duration)),u.repeatDelay&&(u.repeatDelay=lr(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(h=!0)),h&&!s&&t.get()!==void 0){const f=$u(u.keyframes,a);if(f!==void 0)return ke.update(()=>{u.onUpdate(f),u.onComplete()}),new Uv([])}return!s&&ag.supports(u)?new ag(u):new Ku(u)};function JE({protectedKeys:i,needsAnimating:t},e){const n=i.hasOwnProperty(e)&&t[e]!==!0;return t[e]=!1,n}function Hp(i,t,{delay:e=0,transitionOverride:n,type:r}={}){var s;let{transition:o=i.getDefaultTransition(),transitionEnd:a,...l}=t;n&&(o=n);const c=[],u=r&&i.animationState&&i.animationState.getState()[r];for(const h in l){const f=i.getValue(h,(s=i.latestValues[h])!==null&&s!==void 0?s:null),d=l[h];if(d===void 0||u&&JE(u,h))continue;const p={delay:e,...Rp(o||{},h)};let _=!1;if(window.MotionHandoffAnimation){const m=Yv(i);if(m){const S=window.MotionHandoffAnimation(m,h,ke);S!==null&&(p.startTime=S,_=!0)}}Sh(i,h),f.start(Gp(h,f,d,i.shouldReduceMotion&&Wv.has(h)?{type:!1}:p,i,_));const g=f.animation;g&&c.push(g)}return a&&Promise.all(c).then(()=>{ke.update(()=>{a&&DT(i,a)})}),c}function Ch(i,t,e={}){var n;const r=Xu(i,t,e.type==="exit"?(n=i.presenceContext)===null||n===void 0?void 0:n.custom:void 0);let{transition:s=i.getDefaultTransition()||{}}=r||{};e.transitionOverride&&(s=e.transitionOverride);const o=r?()=>Promise.all(Hp(i,r,e)):()=>Promise.resolve(),a=i.variantChildren&&i.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:f}=s;return jE(i,t,u+c,h,f,e)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(e.delay)])}function jE(i,t,e=0,n=0,r=1,s){const o=[],a=(i.variantChildren.size-1)*n,l=r===1?(c=0)=>c*n:(c=0)=>a-c*n;return Array.from(i.variantChildren).sort(QE).forEach((c,u)=>{c.notify("AnimationStart",t),o.push(Ch(c,t,{...s,delay:e+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function QE(i,t){return i.sortNodePosition(t)}function tb(i,t,e={}){i.notify("AnimationStart",t);let n;if(Array.isArray(t)){const r=t.map(s=>Ch(i,s,e));n=Promise.all(r)}else if(typeof t=="string")n=Ch(i,t,e);else{const r=typeof t=="function"?Xu(i,t,e.custom):t;n=Promise.all(Hp(i,r,e))}return n.then(()=>{i.notify("AnimationComplete",t)})}const eb=gp.length;function Ex(i){if(!i)return;if(!i.isControllingVariants){const e=i.parent?Ex(i.parent)||{}:{};return i.props.initial!==void 0&&(e.initial=i.props.initial),e}const t={};for(let e=0;e<eb;e++){const n=gp[e],r=i.props[n];(yl(r)||r===!1)&&(t[n]=r)}return t}const nb=[...mp].reverse(),ib=mp.length;function rb(i){return t=>Promise.all(t.map(({animation:e,options:n})=>tb(i,e,n)))}function sb(i){let t=rb(i),e=lg(),n=!0;const r=l=>(c,u)=>{var h;const f=Xu(i,u,l==="exit"?(h=i.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(f){const{transition:d,transitionEnd:p,..._}=f;c={...c,..._,...p}}return c};function s(l){t=l(i)}function o(l){const{props:c}=i,u=Ex(i.parent)||{},h=[],f=new Set;let d={},p=1/0;for(let g=0;g<ib;g++){const m=nb[g],S=e[m],y=c[m]!==void 0?c[m]:u[m],x=yl(y),M=m===l?S.isActive:null;M===!1&&(p=g);let E=y===u[m]&&y!==c[m]&&x;if(E&&n&&i.manuallyAnimateOnMount&&(E=!1),S.protectedKeys={...d},!S.isActive&&M===null||!y&&!S.prevProp||Hu(y)||typeof y=="boolean")continue;const A=ob(S.prevProp,y);let v=A||m===l&&S.isActive&&!E&&x||g>p&&x,b=!1;const w=Array.isArray(y)?y:[y];let C=w.reduce(r(m),{});M===!1&&(C={});const{prevResolvedValues:L={}}=S,V={...L,...C},U=N=>{v=!0,f.has(N)&&(b=!0,f.delete(N)),S.needsAnimating[N]=!0;const O=i.getValue(N);O&&(O.liveStyle=!1)};for(const N in V){const O=C[N],W=L[N];if(d.hasOwnProperty(N))continue;let I=!1;xh(O)&&xh(W)?I=!Fv(O,W):I=O!==W,I?O!=null?U(N):f.add(N):O!==void 0&&f.has(N)?U(N):S.protectedKeys[N]=!0}S.prevProp=y,S.prevResolvedValues=C,S.isActive&&(d={...d,...C}),n&&i.blockInitialAnimation&&(v=!1),v&&(!(E&&A)||b)&&h.push(...w.map(N=>({animation:N,options:{type:m}})))}if(f.size){const g={};f.forEach(m=>{const S=i.getBaseTarget(m),y=i.getValue(m);y&&(y.liveStyle=!0),g[m]=S??null}),h.push({animation:g})}let _=!!h.length;return n&&(c.initial===!1||c.initial===c.animate)&&!i.manuallyAnimateOnMount&&(_=!1),n=!1,_?t(h):Promise.resolve()}function a(l,c){var u;if(e[l].isActive===c)return Promise.resolve();(u=i.variantChildren)===null||u===void 0||u.forEach(f=>{var d;return(d=f.animationState)===null||d===void 0?void 0:d.setActive(l,c)}),e[l].isActive=c;const h=o(l);for(const f in e)e[f].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>e,reset:()=>{e=lg(),n=!0}}}function ob(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!Fv(t,i):!1}function xs(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lg(){return{animate:xs(!0),whileInView:xs(),whileHover:xs(),whileTap:xs(),whileDrag:xs(),whileFocus:xs(),exit:xs()}}class _s{constructor(t){this.isMounted=!1,this.node=t}update(){}}class ab extends _s{constructor(t){super(t),t.animationState||(t.animationState=sb(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Hu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let lb=0;class cb extends _s{constructor(){super(...arguments),this.id=lb++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;const r=this.node.animationState.setActive("exit",!t);e&&!t&&r.then(()=>e(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const ub={animation:{Feature:ab},exit:{Feature:cb}};function Tl(i,t,e,n={passive:!0}){return i.addEventListener(t,e,n),()=>i.removeEventListener(t,e)}function Hl(i){return{point:{x:i.pageX,y:i.pageY}}}const fb=i=>t=>Dp(t)&&i(t,Hl(t));function nl(i,t,e,n){return Tl(i,t,fb(e),n)}const cg=(i,t)=>Math.abs(i-t);function hb(i,t){const e=cg(i.x,t.x),n=cg(i.y,t.y);return Math.sqrt(e**2+n**2)}class bx{constructor(t,e,{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=df(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,d=hb(h.offset,{x:0,y:0})>=3;if(!f&&!d)return;const{point:p}=h,{timestamp:_}=Tn;this.history.push({...p,timestamp:_});const{onStart:g,onMove:m}=this.handlers;f||(g&&g(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,h)},this.handlePointerMove=(h,f)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=hf(f,this.transformPagePoint),ke.update(this.updatePoint,!0)},this.handlePointerUp=(h,f)=>{this.end();const{onEnd:d,onSessionEnd:p,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=df(h.type==="pointercancel"?this.lastMoveEventInfo:hf(f,this.transformPagePoint),this.history);this.startEvent&&d&&d(h,g),p&&p(h,g)},!Dp(t))return;this.dragSnapToOrigin=s,this.handlers=e,this.transformPagePoint=n,this.contextWindow=r||window;const o=Hl(t),a=hf(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Tn;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=e;u&&u(t,df(a,this.history)),this.removeListeners=Gl(nl(this.contextWindow,"pointermove",this.handlePointerMove),nl(this.contextWindow,"pointerup",this.handlePointerUp),nl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ur(this.updatePoint)}}function hf(i,t){return t?{point:t(i.point)}:i}function ug(i,t){return{x:i.x-t.x,y:i.y-t.y}}function df({point:i},t){return{point:i,delta:ug(i,Ax(t)),offset:ug(i,db(t)),velocity:pb(t,.1)}}function db(i){return i[0]}function Ax(i){return i[i.length-1]}function pb(i,t){if(i.length<2)return{x:0,y:0};let e=i.length-1,n=null;const r=Ax(i);for(;e>=0&&(n=i[e],!(r.timestamp-n.timestamp>lr(t)));)e--;if(!n)return{x:0,y:0};const s=cr(r.timestamp-n.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-n.x)/s,y:(r.y-n.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const wx=1e-4,mb=1-wx,gb=1+wx,Rx=.01,_b=0-Rx,vb=0+Rx;function yi(i){return i.max-i.min}function xb(i,t,e){return Math.abs(i-t)<=e}function fg(i,t,e,n=.5){i.origin=n,i.originPoint=$e(t.min,t.max,i.origin),i.scale=yi(e)/yi(t),i.translate=$e(e.min,e.max,i.origin)-i.originPoint,(i.scale>=mb&&i.scale<=gb||isNaN(i.scale))&&(i.scale=1),(i.translate>=_b&&i.translate<=vb||isNaN(i.translate))&&(i.translate=0)}function il(i,t,e,n){fg(i.x,t.x,e.x,n?n.originX:void 0),fg(i.y,t.y,e.y,n?n.originY:void 0)}function hg(i,t,e){i.min=e.min+t.min,i.max=i.min+yi(t)}function yb(i,t,e){hg(i.x,t.x,e.x),hg(i.y,t.y,e.y)}function dg(i,t,e){i.min=t.min-e.min,i.max=i.min+yi(t)}function rl(i,t,e){dg(i.x,t.x,e.x),dg(i.y,t.y,e.y)}function Sb(i,{min:t,max:e},n){return t!==void 0&&i<t?i=n?$e(t,i,n.min):Math.max(i,t):e!==void 0&&i>e&&(i=n?$e(e,i,n.max):Math.min(i,e)),i}function pg(i,t,e){return{min:t!==void 0?i.min+t:void 0,max:e!==void 0?i.max+e-(i.max-i.min):void 0}}function Mb(i,{top:t,left:e,bottom:n,right:r}){return{x:pg(i.x,e,r),y:pg(i.y,t,n)}}function mg(i,t){let e=t.min-i.min,n=t.max-i.max;return t.max-t.min<i.max-i.min&&([e,n]=[n,e]),{min:e,max:n}}function Tb(i,t){return{x:mg(i.x,t.x),y:mg(i.y,t.y)}}function Eb(i,t){let e=.5;const n=yi(i),r=yi(t);return r>n?e=Ks(t.min,t.max-n,i.min):n>r&&(e=Ks(i.min,i.max-r,t.min)),Or(0,1,e)}function bb(i,t){const e={};return t.min!==void 0&&(e.min=t.min-i.min),t.max!==void 0&&(e.max=t.max-i.min),e}const Ph=.35;function Ab(i=Ph){return i===!1?i=0:i===!0&&(i=Ph),{x:gg(i,"left","right"),y:gg(i,"top","bottom")}}function gg(i,t,e){return{min:_g(i,t),max:_g(i,e)}}function _g(i,t){return typeof i=="number"?i:i[t]||0}const vg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oo=()=>({x:vg(),y:vg()}),xg=()=>({min:0,max:0}),tn=()=>({x:xg(),y:xg()});function Ai(i){return[i("x"),i("y")]}function Cx({top:i,left:t,right:e,bottom:n}){return{x:{min:t,max:e},y:{min:i,max:n}}}function wb({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function Rb(i,t){if(!t)return i;const e=t({x:i.left,y:i.top}),n=t({x:i.right,y:i.bottom});return{top:e.y,left:e.x,bottom:n.y,right:n.x}}function pf(i){return i===void 0||i===1}function Dh({scale:i,scaleX:t,scaleY:e}){return!pf(i)||!pf(t)||!pf(e)}function As(i){return Dh(i)||Px(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function Px(i){return yg(i.x)||yg(i.y)}function yg(i){return i&&i!=="0%"}function du(i,t,e){const n=i-e,r=t*n;return e+r}function Sg(i,t,e,n,r){return r!==void 0&&(i=du(i,r,n)),du(i,e,n)+t}function Lh(i,t=0,e=1,n,r){i.min=Sg(i.min,t,e,n,r),i.max=Sg(i.max,t,e,n,r)}function Dx(i,{x:t,y:e}){Lh(i.x,t.translate,t.scale,t.originPoint),Lh(i.y,e.translate,e.scale,e.originPoint)}const Mg=.999999999999,Tg=1.0000000000001;function Cb(i,t,e,n=!1){const r=e.length;if(!r)return;t.x=t.y=1;let s,o;for(let a=0;a<r;a++){s=e[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(n&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Vo(i,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Dx(i,o)),n&&As(s.latestValues)&&Vo(i,s.latestValues))}t.x<Tg&&t.x>Mg&&(t.x=1),t.y<Tg&&t.y>Mg&&(t.y=1)}function Bo(i,t){i.min=i.min+t,i.max=i.max+t}function Eg(i,t,e,n,r=.5){const s=$e(i.min,i.max,r);Lh(i,t,e,s,n)}function Vo(i,t){Eg(i.x,t.x,t.scaleX,t.scale,t.originX),Eg(i.y,t.y,t.scaleY,t.scale,t.originY)}function Lx(i,t){return Cx(Rb(i.getBoundingClientRect(),t))}function Pb(i,t,e){const n=Lx(i,e),{scroll:r}=t;return r&&(Bo(n.x,r.offset.x),Bo(n.y,r.offset.y)),n}const Ix=({current:i})=>i?i.ownerDocument.defaultView:null,Db=new WeakMap;class Lb{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=tn(),this.visualElement=t}start(t,{snapToCursor:e=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor(Hl(u).point)},s=(u,h)=>{const{drag:f,dragPropagation:d,onDragStart:p}=this.getProps();if(f&&!d&&(this.openDragLock&&this.openDragLock(),this.openDragLock=AT(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ai(g=>{let m=this.getAxisMotionValue(g).get()||0;if(ur.test(m)){const{projection:S}=this.visualElement;if(S&&S.layout){const y=S.layout.layoutBox[g];y&&(m=yi(y)*(parseFloat(m)/100))}}this.originPoint[g]=m}),p&&ke.postRender(()=>p(u,h)),Sh(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:f,dragDirectionLock:d,onDirectionLock:p,onDrag:_}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:g}=h;if(d&&this.currentDirection===null){this.currentDirection=Ib(g),this.currentDirection!==null&&p&&p(this.currentDirection);return}this.updateAxis("x",h.point,g),this.updateAxis("y",h.point,g),this.visualElement.render(),_&&_(u,h)},a=(u,h)=>this.stop(u,h),l=()=>Ai(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new bx(t,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Ix(this.visualElement)})}stop(t,e){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=e;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ke.postRender(()=>s(t,e))}cancel(){this.isDragging=!1;const{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,n){const{drag:r}=this.getProps();if(!n||!Zl(t,r,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(o=Sb(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:e,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;e&&Fo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=Mb(r.layoutBox,e):this.constraints=!1,this.elastic=Ab(n),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ai(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=bb(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!Fo(t))return!1;const n=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=Pb(n,r.root,this.visualElement.getTransformPagePoint());let o=Tb(r.layout.layoutBox,s);if(e){const a=e(wb(o));this.hasMutatedConstraints=!!a,a&&(o=Cx(a))}return o}startAnimation(t){const{drag:e,dragMomentum:n,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Ai(u=>{if(!Zl(u,e,this.currentDirection))return;let h=l&&l[u]||{};o&&(h={min:0,max:0});const f=r?200:1e6,d=r?40:1e7,p={type:"inertia",velocity:n?t[u]:0,bounceStiffness:f,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(u,p)});return Promise.all(c).then(a)}startAxisValueAnimation(t,e){const n=this.getAxisMotionValue(t);return Sh(this.visualElement,t),n.start(Gp(t,n,0,e,this.visualElement,!1))}stopAnimation(){Ai(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ai(t=>{var e;return(e=this.getAxisMotionValue(t).animation)===null||e===void 0?void 0:e.pause()})}getAnimationState(t){var e;return(e=this.getAxisMotionValue(t).animation)===null||e===void 0?void 0:e.state}getAxisMotionValue(t){const e=`_drag${t.toUpperCase()}`,n=this.visualElement.getProps(),r=n[e];return r||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){Ai(e=>{const{drag:n}=this.getProps();if(!Zl(e,n,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(e);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[e];s.set(t[e]-$e(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:e}=this.getProps(),{projection:n}=this.visualElement;if(!Fo(e)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ai(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=Eb({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Ai(o=>{if(!Zl(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set($e(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;Db.set(this.visualElement,this);const t=this.visualElement.current,e=nl(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),n=()=>{const{dragConstraints:l}=this.getProps();Fo(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ke.read(n);const o=Tl(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Ai(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),e(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Ph,dragMomentum:a=!0}=t;return{...t,drag:e,dragDirectionLock:n,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Zl(i,t,e){return(t===!0||t===i)&&(e===null||e===i)}function Ib(i,t=10){let e=null;return Math.abs(i.y)>t?e="y":Math.abs(i.x)>t&&(e="x"),e}class Nb extends _s{constructor(t){super(t),this.removeGroupControls=_i,this.removeListeners=_i,this.controls=new Lb(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_i}unmount(){this.removeGroupControls(),this.removeListeners()}}const bg=i=>(t,e)=>{i&&ke.postRender(()=>i(t,e))};class Fb extends _s{constructor(){super(...arguments),this.removePointerDownListener=_i}onPointerDown(t){this.session=new bx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ix(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:bg(t),onStart:bg(e),onMove:n,onEnd:(s,o)=>{delete this.session,r&&ke.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=nl(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Gc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ag(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const Ta={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(te.test(i))i=parseFloat(i);else return i;const e=Ag(i,t.target.x),n=Ag(i,t.target.y);return`${e}% ${n}%`}},Ub={correct:(i,{treeScale:t,projectionDelta:e})=>{const n=i,r=fs.parse(i);if(r.length>5)return n;const s=fs.createTransformer(i),o=typeof r[0]!="number"?1:0,a=e.x.scale*t.x,l=e.y.scale*t.y;r[0+o]/=a,r[1+o]/=l;const c=$e(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class Ob extends at.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n,layoutId:r}=this.props,{projection:s}=t;oT(Bb),s&&(e.group&&e.group.add(s),n&&n.register&&r&&n.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Gc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:n,drag:r,isPresent:s}=this.props,o=n.projection;return o&&(o.isPresent=s,r||t.layoutDependency!==e||e===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||ke.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),vp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n}=this.props,{projection:r}=t;r&&(r.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Nx(i){const[t,e]=MM(),n=at.useContext(mv);return it.jsx(Ob,{...i,layoutGroup:n,switchLayoutGroup:at.useContext(Mv),isPresent:t,safeToRemove:e})}const Bb={borderRadius:{...Ta,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ta,borderTopRightRadius:Ta,borderBottomLeftRadius:Ta,borderBottomRightRadius:Ta,boxShadow:Ub};function Fx(i,t,e){const n=rn(i)?i:ra(i);return n.start(Gp("",n,t,e)),n.animation}function Ux(i){return i instanceof SVGElement&&i.tagName!=="svg"}const Vb=(i,t)=>i.depth-t.depth;class kb{constructor(){this.children=[],this.isDirty=!1}add(t){Lp(this.children,t),this.isDirty=!0}remove(t){qu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Vb),this.isDirty=!1,this.children.forEach(t)}}function zb(i,t){const e=fr.now(),n=({timestamp:r})=>{const s=r-e;s>=t&&(Ur(n),i(s-t))};return ke.read(n,!0),()=>Ur(n)}const Ox=["TopLeft","TopRight","BottomLeft","BottomRight"],Gb=Ox.length,wg=i=>typeof i=="string"?parseFloat(i):i,Rg=i=>typeof i=="number"||te.test(i);function Hb(i,t,e,n,r,s){r?(i.opacity=$e(0,e.opacity!==void 0?e.opacity:1,Wb(n)),i.opacityExit=$e(t.opacity!==void 0?t.opacity:1,0,Xb(n))):s&&(i.opacity=$e(t.opacity!==void 0?t.opacity:1,e.opacity!==void 0?e.opacity:1,n));for(let o=0;o<Gb;o++){const a=`border${Ox[o]}Radius`;let l=Cg(t,a),c=Cg(e,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Rg(l)===Rg(c)?(i[a]=Math.max($e(wg(l),wg(c),n),0),(ur.test(c)||ur.test(l))&&(i[a]+="%")):i[a]=c}(t.rotate||e.rotate)&&(i.rotate=$e(t.rotate||0,e.rotate||0,n))}function Cg(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const Wb=Bx(0,.5,Qv),Xb=Bx(.5,.95,_i);function Bx(i,t,e){return n=>n<i?0:n>t?1:e(Ks(i,t,n))}function Pg(i,t){i.min=t.min,i.max=t.max}function Ei(i,t){Pg(i.x,t.x),Pg(i.y,t.y)}function Dg(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}function Lg(i,t,e,n,r){return i-=t,i=du(i,1/e,n),r!==void 0&&(i=du(i,1/r,n)),i}function Yb(i,t=0,e=1,n=.5,r,s=i,o=i){if(ur.test(t)&&(t=parseFloat(t),t=$e(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=$e(s.min,s.max,n);i===s&&(a-=t),i.min=Lg(i.min,t,e,a,r),i.max=Lg(i.max,t,e,a,r)}function Ig(i,t,[e,n,r],s,o){Yb(i,t[e],t[n],t[r],t.scale,s,o)}const qb=["x","scaleX","originX"],$b=["y","scaleY","originY"];function Ng(i,t,e,n){Ig(i.x,t,qb,e?e.x:void 0,n?n.x:void 0),Ig(i.y,t,$b,e?e.y:void 0,n?n.y:void 0)}function Fg(i){return i.translate===0&&i.scale===1}function Vx(i){return Fg(i.x)&&Fg(i.y)}function Ug(i,t){return i.min===t.min&&i.max===t.max}function Kb(i,t){return Ug(i.x,t.x)&&Ug(i.y,t.y)}function Og(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function kx(i,t){return Og(i.x,t.x)&&Og(i.y,t.y)}function Bg(i){return yi(i.x)/yi(i.y)}function Vg(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}class Zb{constructor(){this.members=[]}add(t){Lp(this.members,t),t.scheduleRender()}remove(t){if(qu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(t){const e=this.members.findIndex(r=>t===r);if(e===0)return!1;let n;for(let r=e;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){n=s;break}}return n?(this.promote(n),!0):!1}promote(t,e){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,e&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:r}=t.options;r===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:e,resumingFrom:n}=t;e.onExitComplete&&e.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Jb(i,t,e){let n="";const r=i.x.translate/t.x,s=i.y.translate/t.y,o=(e==null?void 0:e.z)||0;if((r||s||o)&&(n=`translate3d(${r}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),e){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:f,skewX:d,skewY:p}=e;c&&(n=`perspective(${c}px) ${n}`),u&&(n+=`rotate(${u}deg) `),h&&(n+=`rotateX(${h}deg) `),f&&(n+=`rotateY(${f}deg) `),d&&(n+=`skewX(${d}deg) `),p&&(n+=`skewY(${p}deg) `)}const a=i.x.scale*t.x,l=i.y.scale*t.y;return(a!==1||l!==1)&&(n+=`scale(${a}, ${l})`),n||"none"}const ws={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Va=typeof window<"u"&&window.MotionDebug!==void 0,mf=["","X","Y","Z"],jb={visibility:"hidden"},kg=1e3;let Qb=0;function gf(i,t,e,n){const{latestValues:r}=t;r[i]&&(e[i]=r[i],t.setStaticValue(i,0),n&&(n[i]=0))}function zx(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const e=Yv(t);if(window.MotionHasOptimisedAnimation(e,"transform")){const{layout:r,layoutId:s}=i.options;window.MotionCancelOptimisedAnimation(e,"transform",ke,!(r||s))}const{parent:n}=i;n&&!n.hasCheckedOptimisedAppear&&zx(n)}function Gx({attachResizeListener:i,defaultParent:t,measureScroll:e,checkIsScrollRoot:n,resetTransform:r}){return class{constructor(o={},a=t==null?void 0:t()){this.id=Qb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Va&&(ws.totalNodes=ws.resolvedTargetDeltas=ws.recalculatedProjection=0),this.nodes.forEach(n1),this.nodes.forEach(a1),this.nodes.forEach(l1),this.nodes.forEach(i1),Va&&window.MotionDebug.record(ws)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new kb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Ip),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Ux(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),i){let h;const f=()=>this.root.updateBlockedByResize=!1;i(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=zb(f,250),Gc.hasAnimatedSinceResize&&(Gc.hasAnimatedSinceResize=!1,this.nodes.forEach(Gg))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:d,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||u.getDefaultTransition()||d1,{onLayoutAnimationStart:g,onLayoutAnimationComplete:m}=u.getProps(),S=!this.targetLayout||!kx(this.targetLayout,p)||d,y=!f&&d;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,y);const x={...Rp(_,"layout"),onPlay:g,onComplete:m};(u.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else f||Gg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ur(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(c1),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&zx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(zg);return}this.isUpdating||this.nodes.forEach(s1),this.isUpdating=!1,this.nodes.forEach(o1),this.nodes.forEach(t1),this.nodes.forEach(e1),this.clearAllSnapshots();const a=fr.now();Tn.delta=Or(0,1e3/60,a-Tn.timestamp),Tn.timestamp=a,Tn.isProcessing=!0,of.update.process(Tn),of.preRender.process(Tn),of.render.process(Tn),Tn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,vp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(r1),this.sharedNodes.forEach(u1)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ke.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ke.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=tn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=n(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:e(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Vx(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||As(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),p1(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return tn();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(m1))){const{scroll:u}=this.root;u&&(Bo(l.x,u.offset.x),Bo(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=tn();if(Ei(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:f}=u;u!==this.root&&h&&f.layoutScroll&&(h.wasRoot&&Ei(l,o),Bo(l.x,h.offset.x),Bo(l.y,h.offset.y))}return l}applyTransform(o,a=!1){const l=tn();Ei(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Vo(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),As(u.latestValues)&&Vo(l,u.latestValues)}return As(this.latestValues)&&Vo(l,this.latestValues),l}removeTransform(o){const a=tn();Ei(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!As(c.latestValues))continue;Dh(c.latestValues)&&c.updateSnapshot();const u=tn(),h=c.measurePageBox();Ei(u,h),Ng(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return As(this.latestValues)&&Ng(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Tn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=Tn.timestamp,!this.targetDelta&&!this.relativeTarget){const d=this.getClosestProjectingParent();d&&d.layout&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tn(),this.relativeTargetOrigin=tn(),rl(this.relativeTargetOrigin,this.layout.layoutBox,d.layout.layoutBox),Ei(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=tn(),this.targetWithTransforms=tn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),yb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ei(this.target,this.layout.layoutBox),Dx(this.target,this.targetDelta)):Ei(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const d=this.getClosestProjectingParent();d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tn(),this.relativeTargetOrigin=tn(),rl(this.relativeTargetOrigin,this.target,d.target),Ei(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Va&&ws.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Dh(this.parent.latestValues)||Px(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Tn.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;Ei(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,d=this.treeScale.y;Cb(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=tn());const{target:p}=a;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Dg(this.prevProjectionDelta.x,this.projectionDelta.x),Dg(this.prevProjectionDelta.y,this.projectionDelta.y)),il(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==d||!Vg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Vg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p)),Va&&ws.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oo(),this.projectionDelta=Oo(),this.projectionDeltaWithTransform=Oo()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=Oo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=tn(),d=l?l.source:void 0,p=this.layout?this.layout.source:void 0,_=d!==p,g=this.getStack(),m=!g||g.members.length<=1,S=!!(_&&!m&&this.options.crossfade===!0&&!this.path.some(h1));this.animationProgress=0;let y;this.mixTargetDelta=x=>{const M=x/1e3;Hg(h.x,o.x,M),Hg(h.y,o.y,M),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(rl(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),f1(this.relativeTarget,this.relativeTargetOrigin,f,M),y&&Kb(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=tn()),Ei(y,this.relativeTarget)),_&&(this.animationValues=u,Hb(u,c,this.latestValues,M,S,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ur(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ke.update(()=>{Gc.hasAnimatedSinceResize=!0,this.currentAnimation=Fx(0,kg,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(kg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Hx(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||tn();const h=yi(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const f=yi(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Ei(a,l),Vo(a,u),il(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Zb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&gf("z",o,c,this.animationValues);for(let u=0;u<mf.length;u++)gf(`rotate${mf[u]}`,o,c,this.animationValues),gf(`skew${mf[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return jb;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=kc(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=kc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!As(this.latestValues)&&(_.transform=u?u({},""):"none",this.hasProjected=!1),_}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=Jb(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:d,y:p}=this.projectionDelta;c.transformOrigin=`${d.origin*100}% ${p.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const _ in au){if(f[_]===void 0)continue;const{correct:g,applyTo:m}=au[_],S=c.transform==="none"?f[_]:g(f[_],h);if(m){const y=m.length;for(let x=0;x<y;x++)c[m[x]]=S}else c[_]=S}return this.options.layoutId&&(c.pointerEvents=h===this?kc(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(zg),this.root.sharedNodes.clear()}}}function t1(i){i.updateLayout()}function e1(i){var t;const e=((t=i.resumeFrom)===null||t===void 0?void 0:t.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&e&&i.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=i.layout,{animationType:s}=i.options,o=e.source!==i.layout.source;s==="size"?Ai(h=>{const f=o?e.measuredBox[h]:e.layoutBox[h],d=yi(f);f.min=n[h].min,f.max=f.min+d}):Hx(s,e.layoutBox,n)&&Ai(h=>{const f=o?e.measuredBox[h]:e.layoutBox[h],d=yi(n[h]);f.max=f.min+d,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[h].max=i.relativeTarget[h].min+d)});const a=Oo();il(a,n,e.layoutBox);const l=Oo();o?il(l,i.applyTransform(r,!0),e.measuredBox):il(l,n,e.layoutBox);const c=!Vx(a);let u=!1;if(!i.resumeFrom){const h=i.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:d}=h;if(f&&d){const p=tn();rl(p,e.layoutBox,f.layoutBox);const _=tn();rl(_,n,d.layoutBox),kx(p,_)||(u=!0),h.options.layoutRoot&&(i.relativeTarget=_,i.relativeTargetOrigin=p,i.relativeParent=h)}}}i.notifyListeners("didUpdate",{layout:n,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(i.isLead()){const{onExitComplete:n}=i.options;n&&n()}i.options.transition=void 0}function n1(i){Va&&ws.totalNodes++,i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function i1(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function r1(i){i.clearSnapshot()}function zg(i){i.clearMeasurements()}function s1(i){i.isLayoutDirty=!1}function o1(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function Gg(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function a1(i){i.resolveTargetDelta()}function l1(i){i.calcProjection()}function c1(i){i.resetSkewAndRotation()}function u1(i){i.removeLeadSnapshot()}function Hg(i,t,e){i.translate=$e(t.translate,0,e),i.scale=$e(t.scale,1,e),i.origin=t.origin,i.originPoint=t.originPoint}function Wg(i,t,e,n){i.min=$e(t.min,e.min,n),i.max=$e(t.max,e.max,n)}function f1(i,t,e,n){Wg(i.x,t.x,e.x,n),Wg(i.y,t.y,e.y,n)}function h1(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const d1={duration:.45,ease:[.4,0,.1,1]},Xg=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),Yg=Xg("applewebkit/")&&!Xg("chrome/")?Math.round:_i;function qg(i){i.min=Yg(i.min),i.max=Yg(i.max)}function p1(i){qg(i.x),qg(i.y)}function Hx(i,t,e){return i==="position"||i==="preserve-aspect"&&!xb(Bg(t),Bg(e),.2)}function m1(i){var t;return i!==i.root&&((t=i.scroll)===null||t===void 0?void 0:t.wasRoot)}const g1=Gx({attachResizeListener:(i,t)=>Tl(i,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),_f={current:void 0},Wx=Gx({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!_f.current){const i=new g1({});i.mount(window),i.setOptions({layoutScroll:!0}),_f.current=i}return _f.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),_1={pan:{Feature:Fb},drag:{Feature:Nb,ProjectionNode:Wx,MeasureLayout:Nx}};function $g(i,t,e){const{props:n}=i;i.animationState&&n.whileHover&&i.animationState.setActive("whileHover",e==="Start");const r="onHover"+e,s=n[r];s&&ke.postRender(()=>s(t,Hl(t)))}class v1 extends _s{mount(){const{current:t}=this.node;t&&(this.unmount=ST(t,e=>($g(this.node,e,"Start"),n=>$g(this.node,n,"End"))))}unmount(){}}class x1 extends _s{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Gl(Tl(this.node.current,"focus",()=>this.onFocus()),Tl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Kg(i,t,e){const{props:n}=i;i.animationState&&n.whileTap&&i.animationState.setActive("whileTap",e==="Start");const r="onTap"+(e==="End"?"":e),s=n[r];s&&ke.postRender(()=>s(t,Hl(t)))}class y1 extends _s{mount(){const{current:t}=this.node;t&&(this.unmount=bT(t,e=>(Kg(this.node,e,"Start"),(n,{success:r})=>Kg(this.node,n,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ih=new WeakMap,vf=new WeakMap,S1=i=>{const t=Ih.get(i.target);t&&t(i)},M1=i=>{i.forEach(S1)};function T1({root:i,...t}){const e=i||document;vf.has(e)||vf.set(e,{});const n=vf.get(e),r=JSON.stringify(t);return n[r]||(n[r]=new IntersectionObserver(M1,{root:i,...t})),n[r]}function E1(i,t,e){const n=T1(t);return Ih.set(i,e),n.observe(i),()=>{Ih.delete(i),n.unobserve(i)}}const b1={some:0,all:1};class A1 extends _s{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:e,margin:n,amount:r="some",once:s}=t,o={root:e?e.current:void 0,rootMargin:n,threshold:typeof r=="number"?r:b1[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),f=c?u:h;f&&f(l)};return E1(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(w1(t,e))&&this.startObserver()}unmount(){}}function w1({viewport:i={}},{viewport:t={}}={}){return e=>i[e]!==t[e]}const R1={inView:{Feature:A1},tap:{Feature:y1},focus:{Feature:x1},hover:{Feature:v1}},C1={layout:{ProjectionNode:Wx,MeasureLayout:Nx}},pu={current:null},Wp={current:!1};function Xx(){if(Wp.current=!0,!!hp)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>pu.current=i.matches;i.addListener(t),t()}else pu.current=!1}const P1=[...dx,Nn,fs],D1=i=>P1.find(hx(i)),oa=new WeakMap;function L1(i,t,e){for(const n in t){const r=t[n],s=e[n];if(rn(r))i.addValue(n,r);else if(rn(s))i.addValue(n,ra(r,{owner:i}));else if(s!==r)if(i.hasValue(n)){const o=i.getValue(n);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=i.getStaticValue(n);i.addValue(n,ra(o!==void 0?o:r,{owner:i}))}}for(const n in e)t[n]===void 0&&i.removeValue(n);return t}const Zg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Yx{scrapeMotionValuesFromProps(t,e,n){return{}}constructor({parent:t,props:e,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Vp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=fr.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,ke.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=e.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=e,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Wu(e),this.isVariantNode=yv(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(e,{},this);for(const d in f){const p=f[d];l[d]!==void 0&&rn(p)&&p.set(l[d],!1)}}mount(t){this.current=t,oa.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,n)=>this.bindToMotionValue(n,e)),Wp.current||Xx(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:pu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){oa.delete(this.current),this.projection&&this.projection.unmount(),Ur(this.notifyUpdate),Ur(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}bindToMotionValue(t,e){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const n=ro.has(t),r=e.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&ke.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),s=e.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{r(),s(),o&&o(),e.owner&&e.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ia){const e=ia[t];if(!e)continue;const{isEnabled:n,Feature:r}=e;if(!this.features[t]&&r&&n(this.props)&&(this.features[t]=new r(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):tn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let n=0;n<Zg.length;n++){const r=Zg[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=t[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=L1(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const n=this.values.get(t);e!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&e!==void 0&&(n=ra(e===null?void 0:e,{owner:this}),this.addValue(t,n)),n}readValue(t,e){var n;let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(ux(r)||ex(r))?r=parseFloat(r):!D1(r)&&fs.test(e)&&(r=ax(t,e)),this.setBaseTarget(t,rn(r)?r.get():r)),rn(r)?r.get():r}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=yp(this.props,n,(e=this.presenceContext)===null||e===void 0?void 0:e.custom);o&&(r=o[t])}if(n&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!rn(s)?s:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,e){return this.events[t]||(this.events[t]=new Ip),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class qx extends Yx{constructor(){super(...arguments),this.KeyframeResolver=px}sortInstanceNodePosition(t,e){return t.compareDocumentPosition(e)&2?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:n}){delete e[t],delete n[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;rn(t)&&(this.childSubscription=t.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}function I1(i){return window.getComputedStyle(i)}class $x extends qx{constructor(){super(...arguments),this.type="html",this.renderInstance=Cv}readValueFromInstance(t,e){if(ro.has(e)){const n=Bp(e);return n&&n.default||0}else{const n=I1(t),r=(Av(e)?n.getPropertyValue(e):n[e])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:e}){return Lx(t,e)}build(t,e,n){Tp(t,e,n.transformTemplate)}scrapeMotionValuesFromProps(t,e,n){return wp(t,e,n)}}class Kx extends qx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=tn}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(ro.has(e)){const n=Bp(e);return n&&n.default||0}return e=Pv.has(e)?e:_p(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,n){return Iv(t,e,n)}build(t,e,n){Ep(t,e,this.isSVGTag,n.transformTemplate)}renderInstance(t,e,n,r){Dv(t,e,n,r)}mount(t){this.isSVGTag=Ap(t.tagName),super.mount(t)}}const N1=(i,t)=>xp(i)?new Kx(t):new $x(t,{allowProjection:i!==at.Fragment}),F1=mT({...ub,...R1,..._1,...C1},N1),Yo=PM(F1);function zs(i){const t=su(()=>ra(i)),{isStatic:e}=at.useContext(zu);if(e){const[,n]=at.useState(i);at.useEffect(()=>t.on("change",n),[])}return t}function U1(i,t){const e=zs(t()),n=()=>e.set(t());return n(),dp(()=>{const r=()=>ke.preRender(n,!1,!0),s=i.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),Ur(n)}}),e}function O1(i,...t){const e=i.length;function n(){let r="";for(let s=0;s<e;s++){r+=i[s];const o=t[s];o&&(r+=rn(o)?o.get():o)}return r}return U1(t.filter(rn),n)}function Jg(i){return typeof i=="number"?i:parseFloat(i)}function jg(i,t={}){const{isStatic:e}=at.useContext(zu),n=at.useRef(null),r=zs(rn(i)?Jg(i.get()):i),s=at.useRef(r.get()),o=at.useRef(()=>{}),a=()=>{const c=n.current;c&&c.time===0&&c.sample(Tn.delta),l(),n.current=OE({keyframes:[r.get(),s.current],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:o.current})},l=()=>{n.current&&n.current.stop()};return at.useInsertionEffect(()=>r.attach((c,u)=>e?u(c):(s.current=c,o.current=u,ke.update(a),r.get()),l),[JSON.stringify(t)]),dp(()=>{if(rn(i))return i.on("change",c=>r.set(Jg(c)))},[r]),r}function B1(){!Wp.current&&Xx();const[i]=at.useState(pu.current);return i}function V1(i){return at.useEffect(()=>()=>i(),[])}const k1=(i,t,e)=>{const n=t-i;return((e-i)%n+n)%n+i};function Zx(i,t){return yx(i)?i[k1(0,i.length,t)]:i}function Xp(i){return typeof i=="object"&&!Array.isArray(i)}function Jx(i,t,e,n){return typeof i=="string"&&Xp(t)?zv(i,e,n):i instanceof NodeList?Array.from(i):Array.isArray(i)?i:[i]}function z1(i,t,e){return i*(t+1)}function Qg(i,t,e,n){var r;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,i+parseFloat(t)):t==="<"?e:(r=n.get(t))!==null&&r!==void 0?r:i}function G1(i,t,e){for(let n=0;n<i.length;n++){const r=i[n];r.at>t&&r.at<e&&(qu(i,r),n--)}}function H1(i,t,e,n,r,s){G1(i,r,s);for(let o=0;o<t.length;o++)i.push({value:t[o],at:$e(r,s,n[o]),easing:Zx(e,o)})}function W1(i,t){for(let e=0;e<i.length;e++)i[e]=i[e]/(t+1)}function X1(i,t){return i.at===t.at?i.value===null?1:t.value===null?-1:0:i.at-t.at}const Y1="easeInOut";function q1(i,{defaultTransition:t={},...e}={},n,r){const s=t.duration||.3,o=new Map,a=new Map,l={},c=new Map;let u=0,h=0,f=0;for(let d=0;d<i.length;d++){const p=i[d];if(typeof p=="string"){c.set(p,h);continue}else if(!Array.isArray(p)){c.set(p.name,Qg(h,p.at,u,c));continue}let[_,g,m={}]=p;m.at!==void 0&&(h=Qg(h,m.at,u,c));let S=0;const y=(x,M,E,A=0,v=0)=>{const b=$1(x),{delay:w=0,times:C=Mx(b),type:L="keyframes",repeat:V,repeatType:U,repeatDelay:P=0,...F}=M;let{ease:N=t.ease||"easeOut",duration:O}=M;const W=typeof w=="function"?w(A,v):w,I=b.length,et=Yu(L)?L:r==null?void 0:r[L];if(I<=2&&et){let Tt=100;if(I===2&&J1(b)){const st=b[1]-b[0];Tt=Math.abs(st)}const j={...F};O!==void 0&&(j.duration=lr(O));const tt=vT(j,Tt,et);N=tt.ease,O=tt.duration}O??(O=s);const lt=h+W;C.length===1&&C[0]===0&&(C[1]=1);const Pt=C.length-b.length;if(Pt>0&&Sx(C,Pt),b.length===1&&b.unshift(null),V){O=z1(O,V);const Tt=[...b],j=[...C];N=Array.isArray(N)?[...N]:[N];const tt=[...N];for(let st=0;st<V;st++){b.push(...Tt);for(let ot=0;ot<Tt.length;ot++)C.push(j[ot]+(st+1)),N.push(ot===0?"linear":Zx(tt,ot-1))}W1(C,V)}const Lt=lt+O;H1(E,b,N,C,lt,Lt),S=Math.max(W+O,S),f=Math.max(Lt,f)};if(rn(_)){const x=t0(_,a);y(g,m,e0("default",x))}else{const x=Jx(_,g,n,l),M=x.length;for(let E=0;E<M;E++){g=g,m=m;const A=x[E],v=t0(A,a);for(const b in g)y(g[b],K1(m,b),e0(b,v),E,M)}}u=h,h+=S}return a.forEach((d,p)=>{for(const _ in d){const g=d[_];g.sort(X1);const m=[],S=[],y=[];for(let M=0;M<g.length;M++){const{at:E,value:A,easing:v}=g[M];m.push(A),S.push(Ks(0,f,E)),y.push(v||"easeOut")}S[0]!==0&&(S.unshift(0),m.unshift(m[0]),y.unshift(Y1)),S[S.length-1]!==1&&(S.push(1),m.push(null)),o.has(p)||o.set(p,{keyframes:{},transition:{}});const x=o.get(p);x.keyframes[_]=m,x.transition[_]={...t,duration:f,ease:y,times:S,...e}}}),o}function t0(i,t){return!t.has(i)&&t.set(i,{}),t.get(i)}function e0(i,t){return t[i]||(t[i]=[]),t[i]}function $1(i){return Array.isArray(i)?i:[i]}function K1(i,t){return i&&i[t]?{...i,...i[t]}:{...i}}const Z1=i=>typeof i=="number",J1=i=>i.every(Z1);function j1(i,t){return i in t}class Q1 extends Yx{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,e){if(j1(e,t)){const n=t[e];if(typeof n=="string"||typeof n=="number")return n}}getBaseTargetFromProps(){}removeValueFromRenderState(t,e){delete e.output[t]}measureInstanceViewportBox(){return tn()}build(t,e){Object.assign(t.output,e)}renderInstance(t,{output:e}){Object.assign(t,e)}sortInstanceNodePosition(){return 0}}function tA(i){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},e=Ux(i)?new Kx(t):new $x(t);e.mount(i),oa.set(i,e)}function eA(i){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},e=new Q1(t);e.mount(i),oa.set(i,e)}function nA(i,t){return rn(i)||typeof i=="number"||typeof i=="string"&&!Xp(t)}function jx(i,t,e,n){const r=[];if(nA(i,t))r.push(Fx(i,Xp(t)&&t.default||t,e&&(e.default||e)));else{const s=Jx(i,t,n),o=s.length;for(let a=0;a<o;a++){const l=s[a],c=l instanceof Element?tA:eA;oa.has(l)||c(l);const u=oa.get(l),h={...e};"delay"in h&&typeof h.delay=="function"&&(h.delay=h.delay(a,o)),r.push(...Hp(u,{...t,transition:h},{}))}}return r}function iA(i,t,e){const n=[];return q1(i,t,e,{spring:zp}).forEach(({keyframes:s,transition:o},a)=>{n.push(...jx(a,s,o))}),n}function rA(i){return Array.isArray(i)&&i.some(Array.isArray)}function sA(i){function t(e,n,r){let s=[];rA(e)?s=iA(e,n,i):s=jx(e,n,r,i);const o=new Uv(s);return i&&i.animations.push(o),o}return t}function oA(){const i=su(()=>({current:null,animations:[]})),t=su(()=>sA(i));return V1(()=>{i.animations.forEach(e=>e.stop())}),[i,t]}function aA(i,t){if(i==="first")return 0;{const e=t-1;return i==="last"?e:e/2}}function lA(i=.1,{startDelay:t=0,from:e=0,ease:n}={}){return(r,s)=>{const o=typeof e=="number"?e:aA(e,s),a=Math.abs(o-r);let l=i*a;if(n){const c=s*i;l=Rh(n)(l/c)*c}return t+l}}const cA=["h1","h2","h3","h4","h5","h6","p","div","span"];function uA({text:i="Origami Unfold",font:t={fontFamily:"Inter",fontWeight:700,fontSize:120,lineHeight:"1.5em",letterSpacing:"0em",textAlign:"left"},color:e="#FFFFFF",tag:n="h1",startRotateY:r=-90,startRotateX:s=45,startOpacity:o=0,transformOrigin:a="left center",perspective:l=1200,stagger:c=.03,direction:u="left-to-right",transition:h={type:"tween",ease:"easeOut",duration:.8}}){const[f,d]=oA(),p=at.useCallback(()=>{f.current&&d(".char",{rotateY:r,rotateX:s,opacity:o/100},{duration:0})},[d,r,s,o,f]),_=at.useCallback(()=>{if(!f.current)return;const y={...h,delay:lA(c,{from:u==="right-to-left"?"last":"first"})};d(".char",{rotateY:0,rotateX:0,opacity:1},y)},[d,h,c,u,f]);at.useEffect(()=>{p();const y=setTimeout(_,50);return()=>clearTimeout(y)},[_,p]);const g=cA.includes(n)?n:"h1",m=Yo[g],S=at.useMemo(()=>(i??"").split(""),[i]);return it.jsx("div",{style:{width:"100%",display:"flex",justifyContent:t.textAlign==="right"?"flex-end":t.textAlign==="center"?"center":"flex-start",overflow:"visible"},children:it.jsx(m,{ref:f,"aria-label":i,style:{margin:0,display:"inline-block",whiteSpace:"pre-wrap",...t,color:e,perspective:l},children:S.map((y,x)=>it.jsx(Yo.span,{className:"char","aria-hidden":"true",style:{display:"inline-block",transformOrigin:a,rotateY:r,rotateX:s,opacity:o/100,willChange:"transform, opacity"},children:y===" "?" ":y},x))})})}const fA=18,hA=.5;function dA({label:i="Magnetic Hover",link:t="",newTab:e=!1,font:n={fontFamily:"Inter",fontWeight:400,fontSize:16,lineHeight:"1em",letterSpacing:"-0.01em",textAlign:"left"},fill:r="#FFFFFF",textColor:s="#000000",sweepColor:o="#0000FF",sweepTextColor:a="#FFFFFF",paddingX:l=48,paddingY:c=24,radius:u=100,magnet:h=10,transition:f={type:"tween",stiffness:800,damping:60,mass:1,ease:"easeInOut",duration:.3},border:d=!0,borderOptions:p={color:"#FFFFFF",width:1},style:_}){const g=at.useRef(null),[m,S]=at.useState(!1),[y,x]=at.useState({x:0,y:0,d:0}),M=at.useRef(!1),E=zs(0),A=zs(0),v=jg(E,{stiffness:260,damping:18,mass:.4}),b=jg(A,{stiffness:260,damping:18,mass:.4}),w=(p==null?void 0:p.color)??"#FFFFFF",C=d?(p==null?void 0:p.width)??0:0;return at.useEffect(()=>{const L=g.current;if(!L)return;const V=L,U=h/20*hA,P=h*fA;function F(O){const W=V.getBoundingClientRect(),I=W.left+W.width/2-v.get(),et=W.top+W.height/2-b.get(),lt=O.clientX-I,Pt=O.clientY-et,Lt=O.clientX>=W.left&&O.clientX<=W.right&&O.clientY>=W.top&&O.clientY<=W.bottom,Tt=Math.max(0,Math.abs(lt)-W.width/2),j=Math.max(0,Math.abs(Pt)-W.height/2),tt=Math.hypot(Tt,j);if(Lt!==M.current){const ot=Math.max(0,Math.min(W.width,O.clientX-W.left)),pt=Math.max(0,Math.min(W.height,O.clientY-W.top)),xt=2*Math.hypot(W.width,W.height);x({x:ot,y:pt,d:xt}),M.current=Lt,S(Lt)}if(tt>P){E.set(0),A.set(0);return}const st=P===0?0:1-tt/P;E.set(lt*U*st),A.set(Pt*U*st)}function N(){E.set(0),A.set(0),M.current=!1,S(!1)}return window.addEventListener("pointermove",F),document.addEventListener("pointerleave",N),()=>{window.removeEventListener("pointermove",F),document.removeEventListener("pointerleave",N)}},[h,E,A,v,b]),it.jsxs(Yo.a,{ref:g,href:t||void 0,target:t&&e?"_blank":void 0,rel:t&&e?"noopener noreferrer":void 0,style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",padding:`${c}px ${l}px`,borderRadius:u,background:r,border:C>0?`${C}px solid ${w}`:"none",cursor:"pointer",overflow:"hidden",textDecoration:"none",whiteSpace:"nowrap",x:v,y:b,boxShadow:m?"0 16px 40px rgba(0,0,0,0.22)":"0 8px 22px rgba(0,0,0,0.14)",...n,..._},children:[it.jsx(Yo.span,{"aria-hidden":!0,initial:!1,animate:{scale:m?1:0},transition:f,style:{position:"absolute",top:y.y,left:y.x,width:y.d,height:y.d,marginLeft:-y.d/2,marginTop:-y.d/2,borderRadius:"50%",background:o,transformOrigin:"center",pointerEvents:"none"}}),it.jsx(Yo.span,{initial:!1,animate:{color:m?a:s},transition:f,style:{position:"relative",zIndex:1},children:i})]})}const pA="https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/e4476503-c1e3-4358-3ff6-539deda1f800/w=800",si={fit:"cover",focusY:19,columns:200,ramp:" .:-=+*#%@",invert:!1,contrast:100,colorMode:"mono",inkColor:"#FFFFFF",reveal:!0,revealOptions:{size:80,softness:16}},mA=i=>.5+i/100*2,gA=i=>Math.min(100,Math.max(0,typeof i=="number"?i:50));function _A(i,t,e,n,r,s){const o=r==="contain"?Math.min(e/i,n/t):Math.max(e/i,n/t),a=i*o,l=t*o,c=r==="cover"?gA(s)/100:.5;return{dx:(e-a)/2,dy:(n-l)*c,dw:a,dh:l}}function vA(i){if(i)return typeof i=="string"?i.trim()||void 0:i.src||void 0}function xA(i){const{image:t,fit:e=si.fit,focusY:n=si.focusY,columns:r=si.columns,ramp:s=si.ramp,invert:o=si.invert,contrast:a=si.contrast,colorMode:l=si.colorMode,inkColor:c=si.inkColor,reveal:u=si.reveal,revealOptions:h=si.revealOptions,style:f}=i,d=at.useRef(null),p=at.useRef(null),_=at.useRef(null),g=at.useRef(null),m=at.useRef(null),S=at.useRef(null),y=at.useRef([]),x=at.useRef(!1),M=at.useRef({x:-9999,y:-9999,inside:!1}),E=vA(t)||pA,A=(h==null?void 0:h.size)??si.revealOptions.size,v=(h==null?void 0:h.softness)??si.revealOptions.softness;return at.useEffect(()=>{const b=d.current;if(!b)return;const w=b.getContext("2d");if(!w)return;const C=b,L=w,V=s&&s.length>0?s:si.ramp,U=mA(a);let P=0,F=!0,N={dx:0,dy:0,dw:0,dh:0};const O=5;y.current=Array.from({length:O},()=>({x:0,y:0})),x.current=!1;function W(){const ot=Math.min(window.devicePixelRatio||1,2),pt=C.clientWidth||600,xt=C.clientHeight||600;return{w:pt,h:xt,dpr:ot}}function I(){const ot=g.current;if(!ot)return;const{w:pt,h:xt,dpr:Vt}=W();C.width=Math.max(1,Math.round(pt*Vt)),C.height=Math.max(1,Math.round(xt*Vt));const ht=Math.max(8,Math.round(r)),Ot=pt*Vt/ht,Wt=Ot*1.7,zt=Wt,X=Math.max(1,Math.floor(xt*Vt/zt));let Jt=_.current;Jt||(Jt=document.createElement("canvas"),_.current=Jt),Jt.width=ht,Jt.height=X;const le=Jt.getContext("2d",{willReadFrequently:!0});if(!le)return;const ue=_A(ot.width,ot.height,C.width,C.height,e,n);le.clearRect(0,0,ht,X),le.drawImage(ot,ue.dx/Ot,ue.dy/zt,ue.dw/Ot,ue.dh/zt);let Kt;try{Kt=le.getImageData(0,0,ht,X).data}catch{g.current=null;return}let ae=p.current;ae||(ae=document.createElement("canvas"),p.current=ae),ae.width=C.width,ae.height=C.height;const k=ae.getContext("2d");if(!k)return;k.clearRect(0,0,ae.width,ae.height),k.font=Wt.toFixed(2)+"px ui-monospace, monospace",k.textBaseline="top";const Le=V.length-1;for(let Xt=0;Xt<X;Xt++)for(let D=0;D<ht;D++){const T=(Xt*ht+D)*4,z=Kt[T],Y=Kt[T+1],Q=Kt[T+2];let dt=(.299*z+.587*Y+.114*Q)/255;dt=(dt-.5)*U+.5,o&&(dt=1-dt),dt=dt<0?0:dt>1?1:dt;const rt=V[Math.round(dt*Le)];rt!==" "&&(k.fillStyle=l==="image"?`rgb(${Math.min(255,z+30)}, ${Math.min(255,Y+30)}, ${Math.min(255,Q+30)})`:c,k.fillText(rt,D*Ot,Xt*zt))}N=ue}function et(ot){let pt=ot.current;return pt||(pt=document.createElement("canvas"),ot.current=pt),(pt.width!==C.width||pt.height!==C.height)&&(pt.width=C.width,pt.height=C.height),pt}function lt(){const ot=y.current;if(ot.length===0)return;const{dpr:pt}=W(),xt=M.current.x*pt,Vt=M.current.y*pt;if(!x.current){for(const ht of ot)ht.x=xt,ht.y=Vt;x.current=!0;return}ot[0].x+=(xt-ot[0].x)*.35,ot[0].y+=(Vt-ot[0].y)*.35;for(let ht=1;ht<ot.length;ht++)ot[ht].x+=(ot[ht-1].x-ot[ht].x)*.35,ot[ht].y+=(ot[ht-1].y-ot[ht].y)*.35}function Pt(){const ot=p.current;if(!ot)return;L.clearRect(0,0,C.width,C.height),L.drawImage(ot,0,0);const pt=g.current;if(!u||!M.current.inside||!pt)return;const{dpr:xt}=W(),Vt=y.current,ht=et(m),Ot=ht.getContext("2d"),Wt=et(S),zt=Wt.getContext("2d");if(!(!Ot||!zt)){Ot.globalCompositeOperation="source-over",Ot.clearRect(0,0,ht.width,ht.height),Ot.drawImage(pt,N.dx,N.dy,N.dw,N.dh),zt.clearRect(0,0,Wt.width,Wt.height),zt.save(),zt.filter=`blur(${(v*xt).toFixed(1)}px)`,zt.fillStyle="#FFFFFF";for(let X=0;X<Vt.length;X++){const Jt=Vt.length<=1?0:X/(Vt.length-1),le=A*xt*(1-Jt*.5);zt.beginPath(),zt.arc(Vt[X].x,Vt[X].y,le,0,Math.PI*2),zt.fill()}zt.restore(),Ot.globalCompositeOperation="destination-in",Ot.drawImage(Wt,0,0),Ot.globalCompositeOperation="source-over",L.drawImage(ht,0,0)}}function Lt(){F&&(lt(),Pt(),P=requestAnimationFrame(Lt))}function Tt(ot){const pt=C.getBoundingClientRect(),xt=ot.clientX-pt.left,Vt=ot.clientY-pt.top;M.current.x=xt,M.current.y=Vt,M.current.inside=xt>=0&&Vt>=0&&xt<=pt.width&&Vt<=pt.height}function j(){M.current.inside=!1,x.current=!1}const tt=new Image;tt.crossOrigin="anonymous",tt.onload=()=>{F&&(g.current=tt,I(),Pt(),u&&(P=requestAnimationFrame(Lt)))},tt.src=E;let st=null;return typeof ResizeObserver<"u"&&(st=new ResizeObserver(()=>{I(),Pt()}),st.observe(C)),C.addEventListener("pointermove",Tt),C.addEventListener("pointerleave",j),()=>{F=!1,cancelAnimationFrame(P),st==null||st.disconnect(),C.removeEventListener("pointermove",Tt),C.removeEventListener("pointerleave",j)}},[E,e,n,r,s,o,a,l,c,u,A,v]),it.jsx("canvas",{ref:d,"aria-label":typeof t=="object"?(t==null?void 0:t.alt)??"ASCII art":"ASCII art",style:{...f,display:"block",width:"100%",height:"100%",cursor:u?"crosshair":"default"}})}const vr={shape:"rounded",fill:"solid",strokeWidth:1.5,particleColor:"#FFFFFF",backgroundColor:"#000000",maxSize:36,minSize:12,gap:4,influence:300},n0=(i,t,e)=>i+(t-i)*e,yA=(i,t,e)=>Math.max(t,Math.min(e,i));function SA({shape:i=vr.shape,fill:t=vr.fill,strokeWidth:e=vr.strokeWidth,particleColor:n=vr.particleColor,backgroundColor:r=vr.backgroundColor,maxSize:s=vr.maxSize,minSize:o=vr.minSize,gap:a=vr.gap,influence:l=vr.influence,style:c}){const u=at.useRef(null),h=at.useRef(null),f=at.useRef(null),d=at.useRef(null),p=at.useRef({w:0,h:0,dpr:1}),_=at.useRef({shape:i,fill:t,strokeWidth:e,particleColor:n,backgroundColor:r,maxSize:s,minSize:o,gap:a,influence:l}),g=at.useRef(new Float32Array(0));return at.useEffect(()=>{_.current={shape:i,fill:t,strokeWidth:e,particleColor:n,backgroundColor:r,maxSize:s,minSize:o,gap:a,influence:l}},[i,t,e,n,r,s,o,a,l]),at.useEffect(()=>{const m=u.current,S=h.current;if(!m||!S)return;const y=S.getContext("2d");if(!y)return;const x=()=>{const w=m.clientWidth,C=m.clientHeight,L=Math.max(1,window.devicePixelRatio||1),V=p.current;V.w===w&&V.h===C&&V.dpr===L||(p.current={w,h:C,dpr:L},S.width=Math.round(w*L),S.height=Math.round(C*L),S.style.width=`${w}px`,S.style.height=`${C}px`,y.setTransform(L,0,0,L,0,0))},M=(w,C,L,V)=>{const U=L/2;switch(y.beginPath(),V){case"circle":y.arc(w,C,U,0,Math.PI*2);break;case"rounded":{const P=Math.min(U,L*.28),F=w-U,N=C-U;y.moveTo(F+P,N),y.arcTo(F+L,N,F+L,N+L,P),y.arcTo(F+L,N+L,F,N+L,P),y.arcTo(F,N+L,F,N,P),y.arcTo(F,N,F+L,N,P),y.closePath();break}case"triangle":y.moveTo(w,C-U),y.lineTo(w+U,C+U),y.lineTo(w-U,C+U),y.closePath();break;case"diamond":y.moveTo(w,C-U),y.lineTo(w+U,C),y.lineTo(w,C+U),y.lineTo(w-U,C),y.closePath();break;case"hexagon":for(let P=0;P<6;P++){const F=(-90+60*P)*Math.PI/180,N=w+U*Math.cos(F),O=C+U*Math.sin(F);P===0?y.moveTo(N,O):y.lineTo(N,O)}y.closePath();break;case"star":{const P=U*.5;for(let F=0;F<10;F++){const N=F%2===0?U:P,O=(-90+36*F)*Math.PI/180,W=w+N*Math.cos(O),I=C+N*Math.sin(O);F===0?y.moveTo(W,I):y.lineTo(W,I)}y.closePath();break}default:y.rect(w-U,C-U,L,L)}},E=()=>{x();const w=_.current,{w:C,h:L}=p.current,V=d.current,U=w.fill==="stroke";y.clearRect(0,0,C,L),y.fillStyle=w.backgroundColor,y.fillRect(0,0,C,L);const P=Math.max(1,w.maxSize+w.gap),F=Math.max(1,Math.floor(C/P)),N=Math.max(1,Math.floor(L/P)),O=(C-F*P)/2+P/2,W=(L-N*P)/2+P/2,I=F*N;g.current.length!==I&&(g.current=new Float32Array(I).fill(w.minSize));const et=g.current;y.fillStyle=w.particleColor,y.strokeStyle=w.particleColor,y.lineJoin="round",y.lineWidth=Math.max(.5,w.strokeWidth);const lt=Math.max(1,w.influence);for(let Pt=0;Pt<N;Pt++)for(let Lt=0;Lt<F;Lt++){const Tt=Pt*F+Lt,j=O+Lt*P,tt=W+Pt*P;let st=0;if(V){const xt=V.x-j,Vt=V.y-tt,ht=Math.sqrt(xt*xt+Vt*Vt);st=yA(1-ht/lt,0,1)}const ot=n0(w.minSize,w.maxSize,st),pt=n0(et[Tt]||w.minSize,ot,.2);et[Tt]=pt,!(pt<=.2)&&(M(j,tt,pt,w.shape),U?y.stroke():y.fill())}f.current=requestAnimationFrame(E)},A=w=>{const C=m.getBoundingClientRect();d.current={x:w.clientX-C.left,y:w.clientY-C.top}},v=()=>{d.current=null};x();const b=new ResizeObserver(x);return b.observe(m),m.addEventListener("pointermove",A),m.addEventListener("pointerleave",v),f.current=requestAnimationFrame(E),()=>{b.disconnect(),m.removeEventListener("pointermove",A),m.removeEventListener("pointerleave",v),f.current&&cancelAnimationFrame(f.current)}},[]),it.jsx("div",{ref:u,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",backgroundColor:r,...c},children:it.jsx("canvas",{ref:h,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"block"}})})}function MA(i){i={...TA,...i};const{text:t,speed:e,reversed:n,textFont:r,textColor:s,waveFrequency:o,waveHeight:a,separator:l,gap:c,className:u,width:h,height:f,style:d}=i,p=(rt,K)=>{if(typeof rt=="number")return isFinite(rt)?rt:K;if(typeof rt=="string"){const J=parseFloat(rt);return isFinite(J)?J:K}return K},_=p(r==null?void 0:r.fontSize,17),g=p(r==null?void 0:r.letterSpacing,0),m=`${_}px`,S=`${g}px`,x=(r==null?void 0:r.fontFamily)||'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',M=r==null?void 0:r.fontWeight,E=r==null?void 0:r.fontStyle,A=at.useRef(null),v=at.useRef(null),b=at.useRef(null),w=at.useRef(null),C=!1,[L,V]=at.useState({w:800,h:200});at.useLayoutEffect(()=>{const rt=A.current;if(!rt)return;const K=(Et,mt)=>{const yt=Math.round(Et),vt=Math.round(mt);yt<=0||vt<=0||V(kt=>Math.abs(kt.w-yt)<=1&&Math.abs(kt.h-vt)<=1?kt:{w:yt,h:vt})},J=rt.getBoundingClientRect();if(K(J.width,J.height),typeof ResizeObserver>"u")return;const ft=new ResizeObserver(Et=>{for(const mt of Et)K(mt.contentRect.width,mt.contentRect.height)});return ft.observe(rt),()=>ft.disconnect()},[]);const P=`tp-${at.useId().replace(/[:]/g,"")}-path`,F=L.w>0?L.w:800,N=L.h>0?L.h:200,[O,W]=at.useState(0),I=t&&t.length>0?t:" ",et=" ".repeat(Math.max(0,Math.min(20,Math.round(c??0)))),lt=I+et+(l??"")+et,Pt=Math.max(1,lt.length*_*.6),Lt=O>0?O:Pt,Tt=N/2,tt=Math.max(0,Math.min(a/2,N/2-_))*(4/3),st=Math.max(1,Math.round(o*2)),ot=F/st,pt=Math.max(100,F*.3),xt=Math.ceil(pt/ot),Vt=Math.ceil(pt/ot),ht=st+xt+Vt,Ot=-xt*ot,Wt=xt%2===0?-1:1;let zt=`M ${Ot},${Tt}`;for(let rt=0;rt<ht;rt++){const K=Ot+rt*ot,J=Ot+(rt+1)*ot,ft=Tt+(rt%2===0?Wt*tt:-Wt*tt);zt+=` C ${K+ot/3},${ft} ${J-ot/3},${ft} ${J},${Tt}`}const X=zt,[Jt,le]=at.useState(0);at.useLayoutEffect(()=>{const rt=v.current;if(!rt)return;let K=0;try{K=rt.getTotalLength()}catch{K=0}!isFinite(K)||K<=0||le(J=>J===K?J:K)},[X,F,N]),at.useLayoutEffect(()=>{const rt=b.current,K=w.current;if(!rt||!K)return;let J=0,ft=0;try{J=rt.getComputedTextLength(),ft=K.getComputedTextLength()}catch{J=0,ft=0}const Et=(ft-J)/2;!isFinite(Et)||Et<=0||W(mt=>mt===Et?mt:Et)},[lt,m,S,x,M,E]);const ue=2*Math.hypot(ot/2,tt)*1.15,Kt=ht*Math.max(ot,ue),ae=Math.max(Jt,Kt),k=Math.min(256,Math.max(2,Math.ceil(ae/Lt)+3)),Le=lt.repeat(k),Xt=at.useRef(0),D=at.useRef(null),T=at.useRef(0),z=at.useRef(!1),Y=at.useRef(0),Q=at.useRef(null);T.current=Math.max(0,e??0)*5,z.current=n,Y.current=O>0?O:0,at.useLayoutEffect(()=>{const rt=Q.current;if(!rt)return;D.current=null;let K=0;const J=ft=>{D.current==null&&(D.current=ft);const Et=Math.min((ft-D.current)/1e3,1/30);D.current=ft;const mt=Y.current,yt=T.current;if(mt>0&&yt>0){const vt=z.current?1:-1;let kt=Xt.current+vt*yt*Et;kt-=Math.floor(kt/mt)*mt,Xt.current=kt,rt.setAttribute("startOffset",`${kt}px`)}K=requestAnimationFrame(J)};return K=requestAnimationFrame(J),()=>cancelAnimationFrame(K)},[C]);const dt=(rt,K)=>rt==null?K:typeof rt=="number"?`${rt}px`:rt;return it.jsx("div",{ref:A,className:u,style:{position:"relative",width:dt(h,"100%"),height:dt(f,"100%"),overflow:"hidden",...d},children:it.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${F} ${N}`,width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet",style:{display:"block",width:"100%",height:"100%"},children:[it.jsx("defs",{children:it.jsx("path",{ref:v,id:P,d:X,fill:"none"})}),it.jsx("text",{ref:b,x:0,y:-9999,style:{fontSize:m,letterSpacing:S,fontFamily:x,fontWeight:M,fontStyle:E,visibility:"hidden",pointerEvents:"none"},children:lt.repeat(2)}),it.jsx("text",{ref:w,x:0,y:-9999,style:{fontSize:m,letterSpacing:S,fontFamily:x,fontWeight:M,fontStyle:E,visibility:"hidden",pointerEvents:"none"},children:lt.repeat(4)}),it.jsx("text",{fill:s,style:{fontSize:m,letterSpacing:S,fontFamily:x,fontWeight:M,fontStyle:E},children:it.jsx("textPath",{ref:Q,href:`#${P}`,xlinkHref:`#${P}`,children:Le})})]})})}const TA={text:"TEXT PATH",separator:"   •   ",gap:0,textFont:{fontSize:17,variant:"Regular",letterSpacing:0,lineHeight:1.2},textColor:"#FFFFFF",speed:30,reversed:!0,waveFrequency:3,waveHeight:100,className:"",width:800,height:200};function Jl(i){return Math.sin(i*12.9898)*43758.5453%1}function EA(i,t){const e=Math.floor(i),n=Math.floor(t),r=i-e,s=t-n,o=Jl(e+n*57),a=Jl(e+1+n*57),l=Jl(e+(n+1)*57),c=Jl(e+1+(n+1)*57),u=r*r*(3-2*r),h=s*s*(3-2*s);return o*(1-u)*(1-h)+a*u*(1-h)+l*(1-u)*h+c*u*h}function i0(i,t,e,n,r,s,o,a,l){let c=0,u=r,h=s;for(let f=0;f<t;f++){let d=u;f===0&&(d*=l),c+=d*EA(h*i+a*100,o*h*.3),h*=e,u*=n}return c}function jl(i,t,e,n,r,s){const o=n+s*r;return{x:i+e*Math.cos(o),y:t+e*Math.sin(o)}}function bA(i,t,e,n,r,s){const o=n-2*s,a=r-2*s,l=Math.PI*s/2,c=2*o+2*a+4*l,u=i*c;let h=0;if(u<=h+o){const d=(u-h)/o;return{x:t+s+d*o,y:e}}if(h+=o,u<=h+l){const d=(u-h)/l;return jl(t+n-s,e+s,s,-Math.PI/2,Math.PI/2,d)}if(h+=l,u<=h+a){const d=(u-h)/a;return{x:t+n,y:e+s+d*a}}if(h+=a,u<=h+l){const d=(u-h)/l;return jl(t+n-s,e+r-s,s,0,Math.PI/2,d)}if(h+=l,u<=h+o){const d=(u-h)/o;return{x:t+n-s-d*o,y:e+r}}if(h+=o,u<=h+l){const d=(u-h)/l;return jl(t+s,e+r-s,s,Math.PI/2,Math.PI/2,d)}if(h+=l,u<=h+a){const d=(u-h)/a;return{x:t,y:e+r-s-d*a}}h+=a;const f=(u-h)/l;return jl(t+s,e+s,s,Math.PI,Math.PI/2,f)}function AA({color:i="#C2613F",bgColor:t="transparent",speed:e=1,chaos:n=4,thickness:r=2,borderRadius:s=14,glow:o=!0,glowColor:a="#C2613F",glowIntensity:l=8,className:c,style:u,children:h}){const f=at.useRef(null),d=at.useRef(null),p=at.useRef(null),_=at.useRef(0),g=at.useRef(0);return at.useEffect(()=>{if(typeof window>"u")return;const m=f.current,S=d.current;if(!m||!S)return;const y=m.getContext("2d");if(!y)return;const x=10,M=1.6,E=.7,A=n/20,v=10,b=0,w=40,C=Math.max(1,Math.min(10,l)),L=o?6+C*2:0,V=o?C:0,U=120;let P=0,F=0,N=Math.min(window.devicePixelRatio||1,2);function O(et,lt){const Pt=S.getBoundingClientRect(),Lt=Math.max(1,et??Pt.width),Tt=Math.max(1,lt??Pt.height),j=Lt+U*2,tt=Tt+U*2,st=Math.min(window.devicePixelRatio||1,2);m.width=Math.max(1,Math.floor(j*st)),m.height=Math.max(1,Math.floor(tt*st)),m.style.width=`${j}px`,m.style.height=`${tt}px`,m.style.left=`${-U}px`,m.style.top=`${-U}px`,P=Lt,F=Tt}O();function W(et){const lt=Math.min(window.devicePixelRatio||1,2);lt!==N&&(N=lt,O()),g.current||(g.current=et);const Pt=(et-g.current)/1e3;_.current+=Pt*e,g.current=et,y.setTransform(1,0,0,1,0,0),y.clearRect(0,0,m.width,m.height),y.scale(lt,lt),y.lineCap="round",y.lineJoin="round";const Lt=U,Tt=U,j=P,tt=F,st=Math.min(j,tt)/2,ot=Math.min(s,Math.max(0,st)),pt=2*(j+tt)+2*Math.PI*ot,xt=Math.max(16,Math.floor(pt/2));y.beginPath();for(let Vt=0;Vt<=xt;Vt++){const ht=Vt/xt,Ot=bA(ht,Lt,Tt,j,tt,ot),Wt=i0(ht*8,x,M,E,A,v,_.current,0,b),zt=i0(ht*8,x,M,E,A,v,_.current,1,b),X=Ot.x+Wt*w,Jt=Ot.y+zt*w;Vt===0?y.moveTo(X,Jt):y.lineTo(X,Jt)}if(y.closePath(),L>0){y.lineWidth=1,y.strokeStyle=a,y.shadowColor=a,y.shadowBlur=L;for(let Vt=0;Vt<V;Vt++)y.stroke();y.shadowBlur=0}y.lineWidth=r,y.strokeStyle=i,y.stroke(),p.current=requestAnimationFrame(W)}p.current=requestAnimationFrame(W);const I=typeof ResizeObserver<"u"?new ResizeObserver(et=>{var Pt;const lt=(Pt=et[0])==null?void 0:Pt.contentRect;O(lt==null?void 0:lt.width,lt==null?void 0:lt.height)}):null;return I==null||I.observe(S),()=>{p.current&&cancelAnimationFrame(p.current),I==null||I.disconnect()}},[i,e,n,r,s,o,a,l]),it.jsxs("div",{ref:d,className:c,style:{position:"relative",overflow:"visible",isolation:"isolate",width:"100%",borderRadius:s,background:t,...u},children:[it.jsx("canvas",{ref:f,style:{position:"absolute",display:"block",pointerEvents:"none",zIndex:2}}),it.jsx("div",{style:{position:"relative",zIndex:1},children:h})]})}const wA="cubic-bezier(0.22, 1, 0.36, 1)";function RA({title:i,href:t,fontSize:e=24,fontWeight:n=700,letterSpacing:r="0em",gap:s=6,textColor:o="#EDE6DD",hoverColor:a="#C2613F",duration:l=.32,className:c,style:u,onClick:h}){const f=at.useRef(null),[d,p]=at.useState("none"),_=A=>{const v=f.current;if(!v)return;const b=v.getBoundingClientRect(),w=A.clientY-b.top;p(w<b.height/2?"top":"bottom")},g=()=>p("none"),m=e*.72,S=(s||0)*3,y=m+S,x={none:-y,top:0,bottom:-2*y},M={margin:0,whiteSpace:"pre",lineHeight:1,height:m,display:"flex",alignItems:"center",overflow:"hidden",fontFamily:"Inter, system-ui, sans-serif",fontSize:e,fontWeight:n,letterSpacing:r},E=it.jsx("span",{ref:f,onMouseEnter:_,onMouseLeave:g,onClick:h,className:c,style:{...u,position:"relative",display:"inline-block",overflow:"hidden",height:m,cursor:"pointer",userSelect:"none"},children:it.jsxs("span",{style:{display:"flex",flexDirection:"column",gap:S,transform:`translateY(${x[d]}px)`,transition:`transform ${l}s ${wA}`},children:[it.jsx("span",{style:{...M,color:a},children:i}),it.jsx("span",{style:{...M,color:o},children:i}),it.jsx("span",{style:{...M,color:a},children:i})]})});return t?it.jsx("a",{href:t,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:E}):E}function br(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Qx(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},El={duration:.5,overwrite:!1,delay:0},Yp,Cn,qe,Ni=1e8,Ve=1/Ni,Nh=Math.PI*2,CA=Nh/4,PA=0,ty=Math.sqrt,DA=Math.cos,LA=Math.sin,bn=function(t){return typeof t=="string"},sn=function(t){return typeof t=="function"},Br=function(t){return typeof t=="number"},qp=function(t){return typeof t>"u"},mr=function(t){return typeof t=="object"},jn=function(t){return t!==!1},$p=function(){return typeof window<"u"},Ql=function(t){return sn(t)||bn(t)},ey=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vn=Array.isArray,IA=/random\([^)]+\)/g,NA=/,\s*/g,r0=/(?:-?\.?\d|\.)+/gi,ny=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ko=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,iy=/[+-]=-?[.\d]+/,FA=/[^,'"\[\]\s]+/gi,UA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ze,Qi,Fh,Kp,Si={},mu={},ry,sy=function(t){return(mu=aa(t,Si))&&ii},Zp=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},bl=function(t,e){return!e&&console.warn(t)},oy=function(t,e){return t&&(Si[t]=e)&&mu&&(mu[t]=e)||Si},Al=function(){return 0},OA={suppressEvents:!0,isStart:!0,kill:!1},Hc={suppressEvents:!0,kill:!1},BA={suppressEvents:!0},Jp={},ls=[],Uh={},ay,fi={},yf={},s0=30,Wc=[],jp="",Qp=function(t){var e=t[0],n,r;if(mr(e)||sn(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Wc.length;r--&&!Wc[r].targetTest(e););n=Wc[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Cy(t[r],n)))||t.splice(r,1);return t},Gs=function(t){return t._gsap||Qp(Fi(t))[0]._gsap},ly=function(t,e,n){return(n=t[e])&&sn(n)?t[e]():qp(n)&&t.getAttribute&&t.getAttribute(e)||n},Qn=function(t,e){return(t=t.split(",")).forEach(e)||t},cn=function(t){return Math.round(t*1e5)/1e5||0},Ke=function(t){return Math.round(t*1e7)/1e7||0},qo=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},VA=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},gu=function(){var t=ls.length,e=ls.slice(0),n,r;for(Uh={},ls.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},tm=function(t){return!!(t._initted||t._startAt||t.add)},cy=function(t,e,n,r){ls.length&&!Cn&&gu(),t.render(e,n,!!(Cn&&e<0&&tm(t))),ls.length&&!Cn&&gu()},uy=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(FA).length<2?e:bn(t)?t.trim():t},fy=function(t){return t},Mi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},kA=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},aa=function(t,e){for(var n in e)t[n]=e[n];return t},o0=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=mr(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},_u=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},sl=function(t){var e=t.parent||Ze,n=t.keyframes?kA(Vn(t.keyframes)):Mi;if(jn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},zA=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},hy=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Zu=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},hs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Hs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},GA=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Oh=function(t,e,n,r){return t._startAt&&(Cn?t._startAt.revert(Hc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},HA=function i(t){return!t||t._ts&&i(t.parent)},a0=function(t){return t._repeat?la(t._tTime,t=t.duration()+t._rDelay)*t:0},la=function(t,e){var n=Math.floor(t=Ke(t/e));return t&&n===t?n-1:n},vu=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ju=function(t){return t._end=Ke(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ve)||0))},ju=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ke(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ju(t),n._dirty||Hs(n,t)),t},dy=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=vu(t.rawTime(),e),(!e._dur||Wl(0,e.totalDuration(),n)-e._tTime>Ve)&&e.render(n,!0)),Hs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ve}},nr=function(t,e,n,r){return e.parent&&hs(e),e._start=Ke((Br(n)?n:n||t!==Ze?wi(t,n,e):t._time)+e._delay),e._end=Ke(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),hy(t,e,"_first","_last",t._sort?"_start":0),Bh(e)||(t._recent=e),r||dy(t,e),t._ts<0&&ju(t,t._tTime),t},py=function(t,e){return(Si.ScrollTrigger||Zp("scrollTrigger",e))&&Si.ScrollTrigger.create(e,t)},my=function(t,e,n,r,s){if(nm(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Cn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ay!==di.frame)return ls.push(t),t._lazy=[s,r],1},WA=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Bh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},XA=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&WA(t)&&!(!t._initted&&Bh(t))||(t._ts<0||t._dp._ts<0)&&!Bh(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=Wl(0,t._tDur,e),u=la(l,a),t._yoyo&&u&1&&(o=1-o),u!==la(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Cn||r||t._zTime===Ve||!e&&t._zTime){if(!t._initted&&my(t,e,r,n,l))return;for(h=t._zTime,t._zTime=e||(n?Ve:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Oh(t,e,n,!0),t._onUpdate&&!n&&mi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&mi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&hs(t,1),!n&&!Cn&&(mi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},YA=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},ca=function(t,e,n,r){var s=t._repeat,o=Ke(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ke(o*(s+1)+t._rDelay*s):o,a>0&&!r&&ju(t,t._tTime=t._tDur*a),t.parent&&Ju(t),n||Hs(t.parent,t),t},l0=function(t){return t instanceof Jn?Hs(t):ca(t,t._dur)},qA={_start:0,endTime:Al,totalDuration:Al},wi=function i(t,e,n){var r=t.labels,s=t._recent||qA,o=t.duration()>=Ni?s.endTime(!1):t._dur,a,l,c;return bn(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Vn(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ol=function(t,e,n){var r=Br(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=jn(l.vars.inherit)&&l.parent;o.immediateRender=jn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new mn(e[0],o,e[s+1])},vs=function(t,e){return t||t===0?e(t):e},Wl=function(t,e,n){return n<t?t:n>e?e:n},Un=function(t,e){return!bn(t)||!(e=UA.exec(t))?"":e[1]},$A=function(t,e,n){return vs(n,function(r){return Wl(t,e,r)})},Vh=[].slice,gy=function(t,e){return t&&mr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mr(t[0]))&&!t.nodeType&&t!==Qi},KA=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return bn(r)&&!e||gy(r,1)?(s=n).push.apply(s,Fi(r)):n.push(r)})||n},Fi=function(t,e,n){return qe&&!e&&qe.selector?qe.selector(t):bn(t)&&!n&&(Fh||!ua())?Vh.call((e||Kp).querySelectorAll(t),0):Vn(t)?KA(t,n):gy(t)?Vh.call(t,0):t?[t]:[]},kh=function(t){return t=Fi(t)[0]||bl("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Fi(e,n.querySelectorAll?n:n===t?bl("Invalid scope")||Kp.createElement("div"):t)}},_y=function(t){return t.sort(function(){return .5-Math.random()})},vy=function(t){if(sn(t))return t;var e=mr(t)?t:{each:t},n=Ws(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,h=r;return bn(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,p){var _=(p||e).length,g=o[_],m,S,y,x,M,E,A,v,b;if(!g){if(b=e.grid==="auto"?0:(e.grid||[1,Ni])[1],!b){for(A=-Ni;A<(A=p[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(g=o[_]=[],m=l?Math.min(b,_)*u-.5:r%b,S=b===Ni?0:l?_*h/b-.5:r/b|0,A=0,v=Ni,E=0;E<_;E++)y=E%b-m,x=S-(E/b|0),g[E]=M=c?Math.abs(c==="y"?x:y):ty(y*y+x*x),M>A&&(A=M),M<v&&(v=M);r==="random"&&_y(g),g.max=A-v,g.min=v,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(r==="edges"?-1:1),g.b=_<0?s-_:s,g.u=Un(e.amount||e.each)||0,n=n&&_<0?lw(n):n}return _=(g[f]-g.min)/g.max||0,Ke(g.b+(n?n(_):_)*g.v)+g.u}},zh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Ke(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(Br(n)?0:Un(n))}},xy=function(t,e){var n=Vn(t),r,s;return!n&&mr(t)&&(r=n=t.radius||Ni,t.values?(t=Fi(t.values),(s=!Br(t[0]))&&(r*=r)):t=zh(t.increment)),vs(e,n?sn(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ni,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:o,s||u===o||Br(o)?u:u+Un(o)}:zh(t))},yy=function(t,e,n,r){return vs(Vn(t)?!e:n===!0?!!(n=0):!r,function(){return Vn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},ZA=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},JA=function(t,e){return function(n){return t(parseFloat(n))+(e||Un(n))}},jA=function(t,e,n){return My(t,e,0,1,n)},Sy=function(t,e,n){return vs(n,function(r){return t[~~e(r)]})},QA=function i(t,e,n){var r=e-t;return Vn(t)?Sy(t,i(0,t.length),e):vs(n,function(s){return(r+(s-t)%r)%r+t})},tw=function i(t,e,n){var r=e-t,s=r*2;return Vn(t)?Sy(t,i(0,t.length-1),e):vs(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},wl=function(t){return t.replace(IA,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(NA);return yy(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},My=function(t,e,n,r,s){var o=e-t,a=r-n;return vs(s,function(l){return n+((l-t)/o*a||0)})},ew=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=bn(t),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(Vn(t)&&!Vn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(i(t[c-1],t[c]));h--,s=function(p){p*=h;var _=Math.min(f,~~p);return u[_](p-_)},n=e}else r||(t=aa(Vn(t)?[]:{},t));if(!u){for(l in e)em.call(a,t,l,"get",e[l]);s=function(p){return sm(p,a)||(o?t.p:t)}}}return vs(n,s)},c0=function(t,e,n){var r=t.labels,s=Ni,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},mi=function(t,e,n){var r=t.vars,s=r[e],o=qe,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&ls.length&&gu(),a&&(qe=a),u=l?s.apply(c,l):s.call(c),qe=o,u},ka=function(t){return hs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Cn),t.progress()<1&&mi(t,"onInterrupt"),t},zo,Ty=[],Ey=function(t){if(t)if(t=!t.name&&t.default||t,$p()||t.headless){var e=t.name,n=sn(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Al,render:sm,add:em,kill:vw,modifier:_w,rawVars:0},o={targetTest:0,get:0,getSetter:rm,aliases:{},register:0};if(ua(),t!==r){if(fi[e])return;Mi(r,Mi(_u(t,s),o)),aa(r.prototype,aa(s,_u(t,o))),fi[r.prop=e]=r,t.targetTest&&(Wc.push(r),Jp[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}oy(e,r),t.register&&t.register(ii,r,ti)}else Ty.push(t)},Be=255,za={aqua:[0,Be,Be],lime:[0,Be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Be],navy:[0,0,128],white:[Be,Be,Be],olive:[128,128,0],yellow:[Be,Be,0],orange:[Be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Be,0,0],pink:[Be,192,203],cyan:[0,Be,Be],transparent:[Be,Be,Be,0]},Sf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Be+.5|0},by=function(t,e,n){var r=t?Br(t)?[t>>16,t>>8&Be,t&Be]:0:za.black,s,o,a,l,c,u,h,f,d,p;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),za[t])r=za[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Be,r&Be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Be,t&Be]}else if(t.substr(0,3)==="hsl"){if(r=p=t.match(r0),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Sf(l+1/3,s,o),r[1]=Sf(l,s,o),r[2]=Sf(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(ny),n&&r.length<4&&(r[3]=1),r}else r=t.match(r0)||za.transparent;r=r.map(Number)}return e&&!p&&(s=r[0]/Be,o=r[1]/Be,a=r[2]/Be,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Ay=function(t){var e=[],n=[],r=-1;return t.split(cs).forEach(function(s){var o=s.match(ko)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},u0=function(t,e,n){var r="",s=(t+r).match(cs),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=by(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Ay(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(cs,"1").split(ko),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(cs),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},cs=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in za)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),nw=/hsl[a]?\(/,wy=function(t){var e=t.join(" "),n;if(cs.lastIndex=0,cs.test(e))return n=nw.test(e),t[1]=u0(t[1],n),t[0]=u0(t[0],n,Ay(t[1])),!0},Rl,di=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,p=function _(g){var m=i()-r,S=g===!0,y,x,M,E;if((m>t||m<0)&&(n+=m-e),r+=m,M=r-n,y=M-o,(y>0||S)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=y+(y>=s?4:s-y),x=1),S||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](M,f,E,g)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){ry&&(!Fh&&$p()&&(Qi=Fh=window,Kp=Qi.document||{},Si.gsap=ii,(Qi.gsapVersions||(Qi.gsapVersions=[])).push(ii.version),sy(mu||Qi.GreenSockGlobals||!Qi.gsap&&Qi||{}),Ty.forEach(Ey)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Rl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Rl=0,c=Al},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,m,S){var y=m?function(x,M,E,A){g(x,M,E,A),h.remove(y)}:g;return h.remove(g),a[S?"unshift":"push"](y),ua(),y},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),ua=function(){return!Rl&&di.wake()},Me={},iw=/^[\d.\-M][\d.\-,\s]/,rw=/["']/g,sw=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(rw,"").trim():+c,r=l.substr(a+1).trim();return e},ow=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},aw=function(t){var e=(t+"").split("("),n=Me[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[sw(e[1])]:ow(t).split(",").map(uy)):Me._CE&&iw.test(t)?Me._CE("",t):n},lw=function(t){return function(e){return 1-t(1-e)}},Ws=function(t,e){return t&&(sn(t)?t:Me[t]||aw(t))||e},so=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return Qn(t,function(a){Me[a]=Si[a]=s,Me[o=a.toLowerCase()]=n;for(var l in s)Me[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Me[a+"."+l]=s[l]}),s},Ry=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Mf=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Nh*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*LA((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Ry(a);return s=Nh/s,l.config=function(c,u){return i(t,c,u)},l},Tf=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ry(n);return r.config=function(s){return i(t,s)},r};Qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;so(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Me.Linear.easeNone=Me.none=Me.Linear.easeIn;so("Elastic",Mf("in"),Mf("out"),Mf());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};so("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);so("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});so("Circ",function(i){return-(ty(1-i*i)-1)});so("Sine",function(i){return i===1?1:-DA(i*CA)+1});so("Back",Tf("in"),Tf("out"),Tf());Me.SteppedEase=Me.steps=Si.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-Ve;return function(a){return((r*Wl(0,o,a)|0)+s)*n}}};El.ease=Me["quad.out"];Qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return jp+=i+","+i+"Params,"});var Cy=function(t,e){this.id=PA++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ly,this.set=e?e.getSetter:rm},Cl=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ca(this,+e.duration,1,1),this.data=e.data,qe&&(this._ctx=qe,qe.data.push(this)),Rl||di.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ca(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(ua(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ju(this,n),!s._dp||s.parent||dy(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&nr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ve||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),cy(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+a0(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+a0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?la(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ve?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?vu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ve?0:this._rts,this.totalTime(Wl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Ju(this),GA(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ua(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ve&&(this._tTime-=Ve)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ke(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&nr(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(jn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vu(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=BA);var r=Cn;return Cn=n,tm(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Cn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,l0(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,l0(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(wi(this,n),jn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,jn(r)),this._dur||(this._zTime=-Ve),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ve:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ve,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ve)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=sn(n)?n:fy,l=function(){var u=r.then;r.then=null,s&&s(),sn(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){ka(this)},i}();Mi(Cl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ve,_prom:0,_ps:!1,_rts:1});var Jn=function(i){Qx(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=jn(n.sortChildren),Ze&&nr(n.parent||Ze,br(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&py(br(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return ol(0,arguments,this),this},e.from=function(r,s,o){return ol(1,arguments,this),this},e.fromTo=function(r,s,o,a){return ol(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,sl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new mn(r,s,wi(this,o),1),this},e.call=function(r,s,o){return nr(this,mn.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new mn(r,o,wi(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,sl(o).immediateRender=jn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,sl(a).immediateRender=jn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ke(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,p,_,g,m,S,y,x,M,E,A;if(this!==Ze&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,y=this._ts,m=!y,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(f=Ke(u%g),u===l?(_=this._repeat,f=c):(M=Ke(u/g),_=~~M,_&&_===M&&(f=c,_--),f>c&&(f=c)),M=la(this._tTime,g),!a&&this._tTime&&M!==_&&this._tTime-M*g-this._dur<=0&&(M=_),E&&_&1&&(f=c-f,A=1),_!==M&&!this._lock){var v=E&&M&1,b=v===(E&&_&1);if(_<M&&(v=!v),a=v?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ke(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&mi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=YA(this,Ke(a),Ke(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!M&&(mi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){S=0,p&&(u+=this._zTime=-Ve);break}}d=p}else{d=this._last;for(var w=r<0?r:f;d;){if(p=d._prev,(d._act||w<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,s,o||Cn&&tm(d)),f!==this._time||!this._ts&&!m){S=0,p&&(u+=this._zTime=w?-Ve:Ve);break}}d=p}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-Ve)._zTime=f>=a?1:-1,this._ts))return this._start=x,Ju(this),this.render(r,s,o);this._onUpdate&&!s&&mi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&hs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(mi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Br(s)||(s=wi(this,s,r)),!(r instanceof Cl)){if(Vn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(bn(r))return this.addLabel(r,s);if(sn(r))r=mn.delayedCall(0,r);else return this}return this!==r?nr(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof mn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return bn(r)?this.removeLabel(r):sn(r)?this.killTweensOf(r):(r.parent===this&&Zu(this,r),r===this._recent&&(this._recent=this._last),Hs(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ke(di.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=wi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=mn.delayedCall(0,s||Al,o);return a.data="isPause",this._hasPause=1,nr(this,a,wi(this,r))},e.removePause=function(r){var s=this._first;for(r=wi(this,r);s;)s._start===r&&s.data==="isPause"&&hs(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ns!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Fi(r),l=this._first,c=Br(s),u;l;)l instanceof mn?VA(l._targets,a)&&(c?(!ns||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=wi(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,p=mn.to(o,Mi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ve,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==g&&ca(p,g,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,h||[])}},s));return f?p.render(0):p},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,Mi({startAt:{time:wi(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),c0(this,wi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),c0(this,wi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ve)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Ke(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Hs(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Hs(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ni,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,nr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ke(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ca(o,o===Ze&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Ze._ts&&(cy(Ze,vu(r,Ze)),ay=di.frame),di.frame>=s0){s0+=vi.autoSleep||120;var s=Ze._first;if((!s||!s._ts)&&vi.autoSleep&&di._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||di.sleep()}}},t}(Cl);Mi(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var cw=function(t,e,n,r,s,o,a){var l=new ti(this._pt,t,e,0,1,Fy,null,s),c=0,u=0,h,f,d,p,_,g,m,S;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=wl(r)),o&&(S=[n,r],o(S,t,e),n=S[0],r=S[1]),f=n.match(xf)||[];h=xf.exec(r);)p=h[0],_=r.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:p.charAt(1)==="="?qo(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},c=xf.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(iy.test(r)||m)&&(l.e=0),this._pt=l,l},em=function(t,e,n,r,s,o,a,l,c,u){sn(r)&&(r=r(s||0,t,o));var h=t[e],f=n!=="get"?n:sn(h)?c?t[e.indexOf("set")||!sn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=sn(h)?c?pw:Iy:im,p;if(bn(r)&&(~r.indexOf("random(")&&(r=wl(r)),r.charAt(1)==="="&&(p=qo(f,r)+(Un(f)||0),(p||p===0)&&(r=p))),!u||f!==r||Gh)return!isNaN(f*r)&&r!==""?(p=new ti(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?gw:Ny,0,d),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!h&&!(e in t)&&Zp(e,r),cw.call(this,t,e,f,r,d,l||vi.stringFilter,c))},uw=function(t,e,n,r,s){if(sn(t)&&(t=al(t,s,e,n,r)),!mr(t)||t.style&&t.nodeType||Vn(t)||ey(t))return bn(t)?al(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=al(t[a],s,e,n,r);return o},Py=function(t,e,n,r,s,o){var a,l,c,u;if(fi[t]&&(a=new fi[t]).init(s,a.rawVars?e[t]:uw(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new ti(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==zo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ns,Gh,nm=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,p=t._dur,_=t._startAt,g=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:g,y=t._overwrite==="auto"&&!Yp,x=t.timeline,M=r.easeReverse||h,E,A,v,b,w,C,L,V,U,P,F,N,O;if(x&&(!f||!s)&&(s="none"),t._ease=Ws(s,El.ease),t._rEase=M&&(Ws(M)||t._ease),t._from=!x&&!!r.runBackwards,t._from&&(t.ratio=1),!x||f&&!r.stagger){if(V=g[0]?Gs(g[0]).harness:0,N=V&&r[V.prop],E=_u(r,Jp),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&p?Hc:OA),_._lazy=0),o){if(hs(t._startAt=mn.set(g,Mi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&jn(l),startAt:null,delay:0,onUpdate:c&&function(){return mi(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Cn||!a&&!d)&&t._startAt.revert(Hc),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&p&&!_){if(e&&(a=!1),v=Mi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&jn(l),immediateRender:a,stagger:0,parent:m},E),N&&(v[V.prop]=N),hs(t._startAt=mn.set(g,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Cn?t._startAt.revert(Hc):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,Ve,Ve);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&jn(l)||l&&!p,A=0;A<g.length;A++){if(w=g[A],L=w._gsap||Qp(g)[A]._gsap,t._ptLookup[A]=P={},Uh[L.id]&&ls.length&&gu(),F=S===g?A:S.indexOf(w),V&&(U=new V).init(w,N||E,t,F,S)!==!1&&(t._pt=b=new ti(t._pt,w,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(W){P[W]=b}),U.priority&&(C=1)),!V||N)for(v in E)fi[v]&&(U=Py(v,E,t,F,w,S))?U.priority&&(C=1):P[v]=b=em.call(t,w,v,"get",E[v],F,S,0,r.stringFilter);t._op&&t._op[A]&&t.kill(w,t._op[A]),y&&t._pt&&(ns=t,Ze.killTweensOf(w,P,t.globalTime(e)),O=!t.parent,ns=0),t._pt&&l&&(Uh[L.id]=1)}C&&Uy(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!O,f&&e<=0&&x.render(Ni,!0,!0)},fw=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Gh=1,t.vars[e]="+=0",nm(t,a),Gh=0,l?bl(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=cn(n)+Un(h.e)),h.b&&(h.b=u.s+Un(h.b))},hw=function(t,e){var n=t[0]?Gs(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=aa({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},dw=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(Vn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},al=function(t,e,n,r,s){return sn(t)?t.call(e,n,r,s):bn(t)&&~t.indexOf("random(")?wl(t):t},Dy=jp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ly={};Qn(Dy+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Ly[i]=1});var mn=function(i){Qx(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:sl(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=r.parent||Ze,S=(Vn(n)||ey(n)?Br(n[0]):"length"in r)?[n]:Fi(n),y,x,M,E,A,v,b,w;if(a._targets=S.length?Qp(S):bl("GSAP target "+n+" not found. https://gsap.com",!vi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||Ql(c)||Ql(u)){r=a.vars;var C=r.easeReverse||r.yoyoEase;if(y=a.timeline=new Jn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:S}),y.kill(),y.parent=y._dp=br(a),y._start=0,f||Ql(c)||Ql(u)){if(E=S.length,b=f&&vy(f),mr(f))for(A in f)~Dy.indexOf(A)&&(w||(w={}),w[A]=f[A]);for(x=0;x<E;x++)M=_u(r,Ly),M.stagger=0,C&&(M.easeReverse=C),w&&aa(M,w),v=S[x],M.duration=+al(c,br(a),x,v,S),M.delay=(+al(u,br(a),x,v,S)||0)-a._delay,!f&&E===1&&M.delay&&(a._delay=u=M.delay,a._start+=u,M.delay=0),y.to(v,M,b?b(x,v,S):0),y._ease=Me.none;y.duration()?c=u=0:a.timeline=0}else if(p){sl(Mi(y.vars.defaults,{ease:"none"})),y._ease=Ws(p.ease||r.ease||"none");var L=0,V,U,P;if(Vn(p))p.forEach(function(F){return y.to(S,F,">")}),y.duration();else{M={};for(A in p)A==="ease"||A==="easeEach"||dw(A,p[A],M,p.easeEach);for(A in M)for(V=M[A].sort(function(F,N){return F.t-N.t}),L=0,x=0;x<V.length;x++)U=V[x],P={ease:U.e,duration:(U.t-(x?V[x-1].t:0))/100*c},P[A]=U.v,y.to(S,P,L),L+=P.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!Yp&&(ns=br(a),Ze.killTweensOf(S),ns=0),nr(m,br(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!p&&a._start===Ke(m._time)&&jn(h)&&HA(br(a))&&m.data!=="nested")&&(a._tTime=-Ve,a.render(Math.max(0,-u)||0)),g&&py(br(a),g),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Ve&&!u?l:r<Ve?0:r,f,d,p,_,g,m,S,y;if(!c)XA(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=Ke(h%_),h===l?(p=this._repeat,f=c):(g=Ke(h/_),p=~~g,p&&p===g?(f=c,p--):f>c&&(f=c)),m=this._yoyo&&p&1,m&&(f=c-f),g=la(this._tTime,_),f===a&&!o&&this._initted&&p===g)return this._tTime=h,this;p!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ke(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(my(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var M=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!g&&(mi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Oh(this,r,s,o),mi(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&mi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Oh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&hs(this,1),!s&&!(u&&!a)&&(h||a||m)&&(mi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Rl||di.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nm(this,c),u=this._ease(c/this._dur),fw(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(ju(this,0),this.parent||hy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ka(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ns&&ns.vars.overwrite!==!0)._first||ka(this),this.parent&&o!==this.timeline.totalDuration()&&ca(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Fi(r):a,c=this._ptLookup,u=this._pt,h,f,d,p,_,g,m;if((!s||s==="all")&&zA(a,l))return s==="all"&&(this._pt=0),ka(this);for(h=this._op=this._op||[],s!=="all"&&(bn(s)&&(_={},Qn(s,function(S){return _[S]=1}),s=_),s=hw(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,p=f,d={}):(d=h[m]=h[m]||{},p=s);for(_ in p)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Zu(this,g,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ka(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return ol(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return ol(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Ze.killTweensOf(r,s,o)},t}(Cl);Mi(mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qn("staggerTo,staggerFrom,staggerFromTo",function(i){mn[i]=function(){var t=new Jn,e=Vh.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var im=function(t,e,n){return t[e]=n},Iy=function(t,e,n){return t[e](n)},pw=function(t,e,n,r){return t[e](r.fp,n)},mw=function(t,e,n){return t.setAttribute(e,n)},rm=function(t,e){return sn(t[e])?Iy:qp(t[e])&&t.setAttribute?mw:im},Ny=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},gw=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Fy=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},sm=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},_w=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},vw=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Zu(this,e,"_pt"):e.dep||(n=1),e=r;return!n},xw=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Uy=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},ti=function(){function i(e,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Ny,this.d=l||this,this.set=c||im,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=xw,this.m=n,this.mt=s,this.tween=r},i}();Qn(jp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Jp[i]=1});Si.TweenMax=Si.TweenLite=mn;Si.TimelineLite=Si.TimelineMax=Jn;Ze=new Jn({sortChildren:!1,defaults:El,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vi.stringFilter=wy;var Xs=[],Xc={},yw=[],f0=0,Sw=0,Ef=function(t){return(Xc[t]||yw).map(function(e){return e()})},Hh=function(){var t=Date.now(),e=[];t-f0>2&&(Ef("matchMediaInit"),Xs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Qi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Ef("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),f0=t,Ef("matchMedia"))},Oy=function(){function i(e,n){this.selector=n&&kh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Sw++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){sn(n)&&(s=r,r=n,n=sn);var o=this,a=function(){var c=qe,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=kh(s)),qe=o,h=r.apply(o,arguments),sn(h)&&o._r.push(h),qe=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===sn?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=qe;qe=null,n(this),qe=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof mn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Jn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof mn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Xs.length;o--;)Xs[o].id===this.id&&Xs.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),Mw=function(){function i(e){this.contexts=[],this.scope=e,qe&&qe.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){mr(n)||(n={matches:n});var o=new Oy(0,s||this.scope),a=o.conditions={},l,c,u;qe&&!o.selector&&(o.selector=qe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Qi.matchMedia(n[c]),l&&(Xs.indexOf(o)<0&&Xs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Hh):l.addEventListener("change",Hh)));return u&&r(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),xu={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Ey(r)})},timeline:function(t){return new Jn(t)},getTweensOf:function(t,e){return Ze.getTweensOf(t,e)},getProperty:function(t,e,n,r){bn(t)&&(t=Fi(t)[0]);var s=Gs(t||{}).get,o=n?fy:uy;return n==="native"&&(n=""),t&&(e?o((fi[e]&&fi[e].get||s)(t,e,n,r)):function(a,l,c){return o((fi[a]&&fi[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Fi(t),t.length>1){var r=t.map(function(u){return ii.quickSetter(u,e,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var o=fi[e],a=Gs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;zo._pt=0,h.init(t,n?u+n:u,zo,0,[t]),h.render(1,h),zo._pt&&sm(1,zo)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=ii.to(t,Mi((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ze.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ws(t.ease,El.ease)),o0(El,t||{})},config:function(t){return o0(vi,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!fi[a]&&!Si[a]&&bl(e+" effect requires "+a+" plugin.")}),yf[e]=function(a,l,c){return n(Fi(a),Mi(l||{},s),c)},o&&(Jn.prototype[e]=function(a,l,c){return this.add(yf[e](a,mr(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Me[t]=Ws(e)},parseEase:function(t,e){return arguments.length?Ws(t,e):Me},getById:function(t){return Ze.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Jn(t),r,s;for(n.smoothChildTiming=jn(t.smoothChildTiming),Ze.remove(n),n._dp=0,n._time=n._tTime=Ze._time,r=Ze._first;r;)s=r._next,(e||!(!r._dur&&r instanceof mn&&r.vars.onComplete===r._targets[0]))&&nr(n,r,r._start-r._delay),r=s;return nr(Ze,n,0),n},context:function(t,e){return t?new Oy(t,e):qe},matchMedia:function(t){return new Mw(t)},matchMediaRefresh:function(){return Xs.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Hh()},addEventListener:function(t,e){var n=Xc[t]||(Xc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Xc[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:QA,wrapYoyo:tw,distribute:vy,random:yy,snap:xy,normalize:jA,getUnit:Un,clamp:$A,splitColor:by,toArray:Fi,selector:kh,mapRange:My,pipe:ZA,unitize:JA,interpolate:ew,shuffle:_y},install:sy,effects:yf,ticker:di,updateRoot:Jn.updateRoot,plugins:fi,globalTimeline:Ze,core:{PropTween:ti,globals:oy,Tween:mn,Timeline:Jn,Animation:Cl,getCache:Gs,_removeLinkedListItem:Zu,reverting:function(){return Cn},context:function(t){return t&&qe&&(qe.data.push(t),t._ctx=qe),qe},suppressOverwrites:function(t){return Yp=t}}};Qn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return xu[i]=mn[i]});di.add(Jn.updateRoot);zo=xu.to({},{duration:0});var Tw=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Ew=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Tw(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},bf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(bn(s)&&(l={},Qn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Ew(a,s)}}}},ii=xu.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Cn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},bf("roundProps",zh),bf("modifiers"),bf("snap",xy))||xu;mn.version=Jn.version=ii.version="3.15.0";ry=1;$p()&&ua();Me.Power0;Me.Power1;Me.Power2;Me.Power3;Me.Power4;Me.Linear;Me.Quad;Me.Cubic;Me.Quart;Me.Quint;Me.Strong;Me.Elastic;Me.Back;Me.SteppedEase;Me.Bounce;Me.Sine;Me.Expo;Me.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var h0,is,$o,om,Fs,d0,am,bw=function(){return typeof window<"u"},Vr={},Rs=180/Math.PI,Ko=Math.PI/180,fo=Math.atan2,p0=1e8,lm=/([A-Z])/g,Aw=/(left|right|width|margin|padding|x)/i,ww=/[\s,\(]\S/,sr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rw=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cw=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pw=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Dw=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},By=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Vy=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Lw=function(t,e,n){return t.style[e]=n},Iw=function(t,e,n){return t.style.setProperty(e,n)},Nw=function(t,e,n){return t._gsap[e]=n},Fw=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Uw=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ow=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Je="transform",ei=Je+"Origin",Bw=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in Vr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=sr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=wr(r,a)}):this.tfm[t]=o.x?o[t]:wr(r,t),t===ei&&(this.tfm.zOrigin=o.zOrigin);else return sr.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(Je)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ei,e,"")),t=Je}(s||e)&&this.props.push(t,e,s[t])},ky=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Vw=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(lm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=am(),(!s||!s.isStart)&&!n[Je]&&(ky(n),r.zOrigin&&n[ei]&&(n[ei]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},zy=function(t,e){var n={target:t,props:[],revert:Vw,save:Bw};return t._gsap||ii.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},Gy,Xh=function(t,e){var n=is.createElementNS?is.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):is.createElement(t);return n&&n.style?n:is.createElement(t)},gi=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(lm,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,fa(e)||e,1)||""},m0="O,Moz,ms,Ms,Webkit".split(","),fa=function(t,e,n){var r=e||Fs,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(m0[o]+t in s););return o<0?null:(o===3?"ms":o>=0?m0[o]:"")+t},Yh=function(){bw()&&window.document&&(h0=window,is=h0.document,$o=is.documentElement,Fs=Xh("div")||{style:{}},Xh("div"),Je=fa(Je),ei=Je+"Origin",Fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gy=!!fa("perspective"),am=ii.core.reverting,om=1)},g0=function(t){var e=t.ownerSVGElement,n=Xh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),$o.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),$o.removeChild(n),s},_0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Hy=function(t){var e,n;try{e=t.getBBox()}catch{e=g0(t),n=1}return e&&(e.width||e.height)||n||(e=g0(t)),e&&!e.width&&!e.x&&!e.y?{x:+_0(t,["x","cx","x1"])||0,y:+_0(t,["y","cy","y1"])||0,width:0,height:0}:e},Wy=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Hy(t))},ds=function(t,e){if(e){var n=t.style,r;e in Vr&&e!==ei&&(e=Je),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(lm,"-$1").toLowerCase())):n.removeAttribute(e)}},rs=function(t,e,n,r,s,o){var a=new ti(t._pt,e,n,0,1,o?Vy:By);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},v0={deg:1,rad:1,turn:1},kw={grid:1,flex:1},ps=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Fs.style,l=Aw.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",p,_,g,m;if(r===o||!s||v0[r]||v0[o])return s;if(o!=="px"&&!f&&(s=i(t,e,n,"px")),m=t.getCTM&&Wy(t),(d||o==="%")&&(Vr[e]||~e.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[u],cn(d?s/p*h:s/100*p);if(a[l?"width":"height"]=h+(f?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===is||!_.appendChild)&&(_=is.body),g=_._gsap,g&&d&&g.width&&l&&g.time===di.time&&!g.uncache)return cn(s/g.width*h);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=h+r,p=t[u],S?t.style[e]=S:ds(t,e)}else(d||o==="%")&&!kw[gi(_,"display")]&&(a.position=gi(t,"position")),_===t&&(a.position="static"),_.appendChild(Fs),p=Fs[u],_.removeChild(Fs),a.position="absolute";return l&&d&&(g=Gs(_),g.time=di.time,g.width=_[u]),cn(f?p*s/h:p&&s?h/p*s:0)},wr=function(t,e,n,r){var s;return om||Yh(),e in sr&&e!=="transform"&&(e=sr[e],~e.indexOf(",")&&(e=e.split(",")[0])),Vr[e]&&e!=="transform"?(s=Dl(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Su(gi(t,ei))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=yu[e]&&yu[e](t,e,n)||gi(t,e)||ly(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ps(t,e,s,n)+n:s},zw=function(t,e,n,r){if(!n||n==="none"){var s=fa(e,t,1),o=s&&gi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=gi(t,"borderTopColor"))}var a=new ti(this._pt,t.style,e,0,1,Fy),l=0,c=0,u,h,f,d,p,_,g,m,S,y,x,M;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=gi(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=gi(t,e)||r,_?t.style[e]=_:ds(t,e)),u=[n,r],wy(u),n=u[0],r=u[1],f=n.match(ko)||[],M=r.match(ko)||[],M.length){for(;h=ko.exec(r);)g=h[0],S=r.substring(l,h.index),p?p=(p+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(p=1),g!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),g.charAt(1)==="="&&(g=qo(d,g)+x),m=parseFloat(g),y=g.substr((m+"").length),l=ko.lastIndex-y.length,y||(y=y||vi.units[e]||x,l===r.length&&(r+=y,a.e+=y)),x!==y&&(d=ps(t,e,_,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:m-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?Vy:By;return iy.test(r)&&(a.e=0),this._pt=a,a},x0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gw=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=x0[n]||n,e[1]=x0[r]||r,e.join(" ")},Hw=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Vr[a]&&(l=1,a=a==="transformOrigin"?ei:Je),ds(n,a);l&&(ds(n,Je),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Dl(n,1),o.uncache=1,ky(r)))}},yu={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new ti(t._pt,e,n,0,0,Hw);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},Pl=[1,0,0,1,0,0],Xy={},Yy=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},y0=function(t){var e=gi(t,Je);return Yy(e)?Pl:e.substr(7).match(ny).map(cn)},cm=function(t,e){var n=t._gsap||Gs(t),r=t.style,s=y0(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Pl:s):(s===Pl&&!t.offsetParent&&t!==$o&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,$o.appendChild(t)),s=y0(t),l?r.display=l:ds(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):$o.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},qh=function(t,e,n,r,s,o){var a=t._gsap,l=s||cm(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],_=l[2],g=l[3],m=l[4],S=l[5],y=e.split(" "),x=parseFloat(y[0])||0,M=parseFloat(y[1])||0,E,A,v,b;n?l!==Pl&&(A=d*g-p*_)&&(v=x*(g/A)+M*(-_/A)+(_*S-g*m)/A,b=x*(-p/A)+M*(d/A)-(d*S-p*m)/A,x=v,M=b):(E=Hy(t),x=E.x+(~y[0].indexOf("%")?x/100*E.width:x),M=E.y+(~(y[1]||y[0]).indexOf("%")?M/100*E.height:M)),r||r!==!1&&a.smooth?(m=x-c,S=M-u,a.xOffset=h+(m*d+S*_)-m,a.yOffset=f+(m*p+S*g)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[ei]="0px 0px",o&&(rs(o,a,"xOrigin",c,x),rs(o,a,"yOrigin",u,M),rs(o,a,"xOffset",h,a.xOffset),rs(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+M)},Dl=function(t,e){var n=t._gsap||new Cy(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=gi(t,ei)||"0",u,h,f,d,p,_,g,m,S,y,x,M,E,A,v,b,w,C,L,V,U,P,F,N,O,W,I,et,lt,Pt,Lt,Tt;return u=h=f=_=g=m=S=y=x=0,d=p=1,n.svg=!!(t.getCTM&&Wy(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Je]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Je]!=="none"?l[Je]:"")),r.scale=r.rotate=r.translate="none"),A=cm(t,n.svg),n.svg&&(n.uncache?(O=t.getBBox(),c=n.xOrigin-O.x+"px "+(n.yOrigin-O.y)+"px",N=""):N=!e&&t.getAttribute("data-svg-origin"),qh(t,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==Pl&&(C=A[0],L=A[1],V=A[2],U=A[3],u=P=A[4],h=F=A[5],A.length===6?(d=Math.sqrt(C*C+L*L),p=Math.sqrt(U*U+V*V),_=C||L?fo(L,C)*Rs:0,S=V||U?fo(V,U)*Rs+_:0,S&&(p*=Math.abs(Math.cos(S*Ko))),n.svg&&(u-=M-(M*C+E*V),h-=E-(M*L+E*U))):(Tt=A[6],Pt=A[7],I=A[8],et=A[9],lt=A[10],Lt=A[11],u=A[12],h=A[13],f=A[14],v=fo(Tt,lt),g=v*Rs,v&&(b=Math.cos(-v),w=Math.sin(-v),N=P*b+I*w,O=F*b+et*w,W=Tt*b+lt*w,I=P*-w+I*b,et=F*-w+et*b,lt=Tt*-w+lt*b,Lt=Pt*-w+Lt*b,P=N,F=O,Tt=W),v=fo(-V,lt),m=v*Rs,v&&(b=Math.cos(-v),w=Math.sin(-v),N=C*b-I*w,O=L*b-et*w,W=V*b-lt*w,Lt=U*w+Lt*b,C=N,L=O,V=W),v=fo(L,C),_=v*Rs,v&&(b=Math.cos(v),w=Math.sin(v),N=C*b+L*w,O=P*b+F*w,L=L*b-C*w,F=F*b-P*w,C=N,P=O),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),d=cn(Math.sqrt(C*C+L*L+V*V)),p=cn(Math.sqrt(F*F+Tt*Tt)),v=fo(P,F),S=Math.abs(v)>2e-4?v*Rs:0,x=Lt?1/(Lt<0?-Lt:Lt):0),n.svg&&(N=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Yy(gi(t,Je)),N&&t.setAttribute("transform",N))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=cn(d),n.scaleY=cn(p),n.rotation=cn(_)+a,n.rotationX=cn(g)+a,n.rotationY=cn(m)+a,n.skewX=S+a,n.skewY=y+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[ei]=Su(c)),n.xOffset=n.yOffset=0,n.force3D=vi.force3D,n.renderTransform=n.svg?Xw:Gy?qy:Ww,n.uncache=0,n},Su=function(t){return(t=t.split(" "))[0]+" "+t[1]},Af=function(t,e,n){var r=Un(e);return cn(parseFloat(e)+parseFloat(ps(t,"x",n+"px",r)))+r},Ww=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,qy(t,e)},ys="0deg",Ea="0px",Ss=") ",qy=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,S=n.target,y=n.zOrigin,x="",M=m==="auto"&&t&&t!==1||m===!0;if(y&&(h!==ys||u!==ys)){var E=parseFloat(u)*Ko,A=Math.sin(E),v=Math.cos(E),b;E=parseFloat(h)*Ko,b=Math.cos(E),o=Af(S,o,A*b*-y),a=Af(S,a,-Math.sin(E)*-y),l=Af(S,l,v*b*-y+y)}g!==Ea&&(x+="perspective("+g+Ss),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(M||o!==Ea||a!==Ea||l!==Ea)&&(x+=l!==Ea||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ss),c!==ys&&(x+="rotate("+c+Ss),u!==ys&&(x+="rotateY("+u+Ss),h!==ys&&(x+="rotateX("+h+Ss),(f!==ys||d!==ys)&&(x+="skew("+f+", "+d+Ss),(p!==1||_!==1)&&(x+="scale("+p+", "+_+Ss),S.style[Je]=x||"translate(0, 0)"},Xw=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,S=n.forceCSS,y=parseFloat(o),x=parseFloat(a),M,E,A,v,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ko,c*=Ko,M=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=Ko,b=Math.tan(c-u),b=Math.sqrt(1+b*b),A*=b,v*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),M*=b,E*=b)),M=cn(M),E=cn(E),A=cn(A),v=cn(v)):(M=h,v=f,E=A=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=ps(d,"x",o,"px"),x=ps(d,"y",a,"px")),(p||_||g||m)&&(y=cn(y+p-(p*M+_*A)+g),x=cn(x+_-(p*E+_*v)+m)),(r||s)&&(b=d.getBBox(),y=cn(y+r/100*b.width),x=cn(x+s/100*b.height)),b="matrix("+M+","+E+","+A+","+v+","+y+","+x+")",d.setAttribute("transform",b),S&&(d.style[Je]=b)},Yw=function(t,e,n,r,s){var o=360,a=bn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Rs:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*p0)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*p0)%o-~~(c/o)*o)),t._pt=f=new ti(t._pt,e,n,r,c,Rw),f.e=u,f.u="deg",t._props.push(n),f},S0=function(t,e){for(var n in e)t[n]=e[n];return t},qw=function(t,e,n){var r=S0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,p;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Je]=e,a=Dl(n,1),ds(n,Je),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Je],o[Je]=e,a=Dl(n,1),o[Je]=c);for(l in Vr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Un(c),p=Un(u),h=d!==p?ps(n,l,c,p):parseFloat(c),f=parseFloat(u),t._pt=new ti(t._pt,a,l,h,f-h,Wh),t._pt.u=p||0,t._props.push(l));S0(a,r)};Qn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});yu[t>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(p){return wr(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var $y={name:"css",register:Yh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,p,_,g,m,S,y,x,M,E,A,v,b;om||Yh(),this.styles=this.styles||zy(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(fi[_]&&Py(_,e,n,r,t,s)))){if(d=typeof u,p=yu[_],d==="function"&&(u=u.call(n,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=wl(u)),p)p(this,t,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",cs.lastIndex=0,cs.test(c)||(g=Un(c),m=Un(u),m?g!==m&&(c=ps(t,_,c,m)+m):g&&(u+=g)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],bn(c)&&~c.indexOf("random(")&&(c=wl(c)),Un(c+"")||c==="auto"||(c+=vi.units[_]||Un(wr(t,_))||""),(c+"").charAt(1)==="="&&(c=wr(t,_))):c=wr(t,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in sr&&(_==="autoAlpha"&&(f===1&&wr(t,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),rs(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=sr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Vr,y){if(this.styles.save(_),b=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=gi(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var w=t.style.perspective;t.style.perspective=u,u=gi(t,"perspective"),w?t.style.perspective=w:ds(t,"perspective")}h=parseFloat(u)}if(x||(M=t._gsap,M.renderTransform&&!e.parseTransform||Dl(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,x=this._pt=new ti(this._pt,a,Je,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new ti(this._pt,M,"scaleY",M.scaleY,(S?qo(M.scaleY,S+h):h)-M.scaleY||0,Wh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(ei,0,a[ei]),u=Gw(u),M.svg?qh(t,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==M.zOrigin&&rs(this,M,"zOrigin",M.zOrigin,m),rs(this,a,_,Su(c),Su(u)));continue}else if(_==="svgOrigin"){qh(t,u,1,E,0,this);continue}else if(_ in Xy){Yw(this,M,_,f,S?qo(f,S+u):u);continue}else if(_==="smoothOrigin"){rs(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){qw(this,u,t);continue}}else _ in a||(_=fa(_)||_);if(y||(h||h===0)&&(f||f===0)&&!ww.test(u)&&_ in a)g=(c+"").substr((f+"").length),h||(h=0),m=Un(u)||(_ in vi.units?vi.units[_]:g),g!==m&&(f=ps(t,_,c,m)),this._pt=new ti(this._pt,y?M:a,_,f,(S?qo(f,S+h):h)-f,!y&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?Dw:Wh),this._pt.u=m||0,y&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=Pw):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Cw);else if(_ in a)zw.call(this,t,_,c,S?S+u:u);else if(_ in t)this.add(t,_,c||t[_],S?S+u:u,r,s);else if(_!=="parseTransform"){Zp(_,u);continue}y||(_ in a?v.push(_,0,a[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),o.push(_)}}A&&Uy(this)},render:function(t,e){if(e.tween._time||!am())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:wr,aliases:sr,getSetter:function(t,e,n){var r=sr[e];return r&&r.indexOf(",")<0&&(e=r),e in Vr&&e!==ei&&(t._gsap.x||wr(t,"x"))?n&&d0===n?e==="scale"?Fw:Nw:(d0=n||{})&&(e==="scale"?Uw:Ow):t.style&&!qp(t.style[e])?Lw:~e.indexOf("-")?Iw:rm(t,e)},core:{_removeProperty:ds,_getMatrix:cm}};ii.utils.checkPrefix=fa;ii.core.getStyleSaver=zy;(function(i,t,e,n){var r=Qn(i+","+t+","+e,function(s){Vr[s]=1});Qn(t,function(s){vi.units[s]="deg",Xy[s]=1}),sr[r[13]]=i+","+t,Qn(n,function(s){var o=s.split(":");sr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){vi.units[i]="px"});ii.registerPlugin($y);var ll=ii.registerPlugin($y)||ii;ll.core.Tween;function $w(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Kw(i,t,e){return t&&$w(i.prototype,t),i}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wn,Yc,pi,ss,os,Zo,Ky,Cs,Jo,Zy,Dr,Hi,Jy,jy=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},Qy=1,Go=[],_e=[],hr=[],cl=Date.now,$h=function(t,e){return e},Zw=function(){var t=Jo.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,_e),r.push.apply(r,hr),_e=n,hr=r,$h=function(o,a){return e[o](a)}},us=function(t,e){return~hr.indexOf(t)&&hr[hr.indexOf(t)+1][e]},ul=function(t){return!!~Zy.indexOf(t)},Gn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:r!==!1,capture:!!s})},zn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},tc="scrollLeft",ec="scrollTop",Kh=function(){return Dr&&Dr.isPressed||_e.cache++},Mu=function(t,e){var n=function r(s){if(s||s===0){Qy&&(pi.history.scrollRestoration="manual");var o=Dr&&Dr.isPressed;s=r.v=Math.round(s)||(Dr&&Dr.iOS?1:0),t(s),r.cacheID=_e.cache,o&&$h("ss",s)}else(e||_e.cache!==r.cacheID||$h("ref"))&&(r.cacheID=_e.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},qn={s:tc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Mu(function(i){return arguments.length?pi.scrollTo(i,_n.sc()):pi.pageXOffset||ss[tc]||os[tc]||Zo[tc]||0})},_n={s:ec,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:qn,sc:Mu(function(i){return arguments.length?pi.scrollTo(qn.sc(),i):pi.pageYOffset||ss[ec]||os[ec]||Zo[ec]||0})},Zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||wn.utils.toArray)(t)[0]||(typeof t=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Jw=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},ms=function(t,e){var n=e.s,r=e.sc;ul(t)&&(t=ss.scrollingElement||os);var s=_e.indexOf(t),o=r===_n.sc?1:2;!~s&&(s=_e.push(t)-1),_e[s+o]||Gn(t,"scroll",Kh);var a=_e[s+o],l=a||(_e[s+o]=Mu(us(t,n),!0)||(ul(t)?r:Mu(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=wn.getProperty(t,"scrollBehavior")==="smooth"),l},Zh=function(t,e,n){var r=t,s=t,o=cl(),a=o,l=e||50,c=Math.max(500,l*3),u=function(p,_){var g=cl();_||g-o>l?(s=r,r=p,a=o,o=g):n?r+=p:r=s+(p-s)/(g-a)*(o-a)},h=function(){s=r=n?0:r,a=o=0},f=function(p){var _=a,g=s,m=cl();return(p||p===0)&&p!==r&&u(p),o===a||m-a>c?0:(r+(n?g:-g))/((n?m:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},ba=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},M0=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},tS=function(){Jo=wn.core.globals().ScrollTrigger,Jo&&Jo.core&&Zw()},eS=function(t){return wn=t||jy(),!Yc&&wn&&typeof document<"u"&&document.body&&(pi=window,ss=document,os=ss.documentElement,Zo=ss.body,Zy=[pi,ss,os,Zo],wn.utils.clamp,Jy=wn.core.context||function(){},Cs="onpointerenter"in Zo?"pointer":"mouse",Ky=hn.isTouch=pi.matchMedia&&pi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in pi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Hi=hn.eventTypes=("ontouchstart"in os?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in os?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Qy=0},500),Yc=1),Jo||tS(),Yc};qn.op=_n;_e.cache=0;var hn=function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){Yc||eS(wn)||console.warn("Please gsap.registerPlugin(Observer)"),Jo||tS();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,S=n.onDrag,y=n.onPress,x=n.onRelease,M=n.onRight,E=n.onLeft,A=n.onUp,v=n.onDown,b=n.onChangeX,w=n.onChangeY,C=n.onChange,L=n.onToggleX,V=n.onToggleY,U=n.onHover,P=n.onHoverEnd,F=n.onMove,N=n.ignoreCheck,O=n.isNormalizer,W=n.onGestureStart,I=n.onGestureEnd,et=n.onWheel,lt=n.onEnable,Pt=n.onDisable,Lt=n.onClick,Tt=n.scrollSpeed,j=n.capture,tt=n.allowClicks,st=n.lockAxis,ot=n.onLockAxis;this.target=a=Zn(a)||os,this.vars=n,d&&(d=wn.utils.toArray(d)),r=r||1e-9,s=s||0,p=p||1,Tt=Tt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(pi.getComputedStyle(Zo).lineHeight)||22);var pt,xt,Vt,ht,Ot,Wt,zt,X=this,Jt=0,le=0,ue=n.passive||!u&&n.passive!==!1,Kt=ms(a,qn),ae=ms(a,_n),k=Kt(),Le=ae(),Xt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Hi[0]==="pointerdown",D=ul(a),T=a.ownerDocument||ss,z=[0,0,0],Y=[0,0,0],Q=0,dt=function(){return Q=cl()},rt=function(ct,Zt){return(X.event=ct)&&d&&Jw(ct.target,d)||Zt&&Xt&&ct.pointerType!=="touch"||N&&N(ct,Zt)},K=function(){X._vx.reset(),X._vy.reset(),xt.pause(),h&&h(X)},J=function(){var ct=X.deltaX=M0(z),Zt=X.deltaY=M0(Y),_t=Math.abs(ct)>=r,Rt=Math.abs(Zt)>=r;C&&(_t||Rt)&&C(X,ct,Zt,z,Y),_t&&(M&&X.deltaX>0&&M(X),E&&X.deltaX<0&&E(X),b&&b(X),L&&X.deltaX<0!=Jt<0&&L(X),Jt=X.deltaX,z[0]=z[1]=z[2]=0),Rt&&(v&&X.deltaY>0&&v(X),A&&X.deltaY<0&&A(X),w&&w(X),V&&X.deltaY<0!=le<0&&V(X),le=X.deltaY,Y[0]=Y[1]=Y[2]=0),(ht||Vt)&&(F&&F(X),Vt&&(g&&Vt===1&&g(X),S&&S(X),Vt=0),ht=!1),Wt&&!(Wt=!1)&&ot&&ot(X),Ot&&(et(X),Ot=!1),pt=0},ft=function(ct,Zt,_t){z[_t]+=ct,Y[_t]+=Zt,X._vx.update(ct),X._vy.update(Zt),c?pt||(pt=requestAnimationFrame(J)):J()},Et=function(ct,Zt){st&&!zt&&(X.axis=zt=Math.abs(ct)>Math.abs(Zt)?"x":"y",Wt=!0),zt!=="y"&&(z[2]+=ct,X._vx.update(ct,!0)),zt!=="x"&&(Y[2]+=Zt,X._vy.update(Zt,!0)),c?pt||(pt=requestAnimationFrame(J)):J()},mt=function(ct){if(!rt(ct,1)){ct=ba(ct,u);var Zt=ct.clientX,_t=ct.clientY,Rt=Zt-X.x,Mt=_t-X.y,Nt=X.isDragging;X.x=Zt,X.y=_t,(Nt||(Rt||Mt)&&(Math.abs(X.startX-Zt)>=s||Math.abs(X.startY-_t)>=s))&&(Vt||(Vt=Nt?2:1),Nt||(X.isDragging=!0),Et(Rt,Mt))}},yt=X.onPress=function(gt){rt(gt,1)||gt&&gt.button||(X.axis=zt=null,xt.pause(),X.isPressed=!0,gt=ba(gt),Jt=le=0,X.startX=X.x=gt.clientX,X.startY=X.y=gt.clientY,X._vx.reset(),X._vy.reset(),Gn(O?a:T,Hi[1],mt,ue,!0),X.deltaX=X.deltaY=0,y&&y(X))},vt=X.onRelease=function(gt){if(!rt(gt,1)){zn(O?a:T,Hi[1],mt,!0);var ct=!isNaN(X.y-X.startY),Zt=X.isDragging,_t=Zt&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),Rt=ba(gt);!_t&&ct&&(X._vx.reset(),X._vy.reset(),u&&tt&&wn.delayedCall(.08,function(){if(cl()-Q>300&&!gt.defaultPrevented){if(gt.target.click)gt.target.click();else if(T.createEvent){var Mt=T.createEvent("MouseEvents");Mt.initMouseEvent("click",!0,!0,pi,1,Rt.screenX,Rt.screenY,Rt.clientX,Rt.clientY,!1,!1,!1,!1,0,null),gt.target.dispatchEvent(Mt)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,h&&Zt&&!O&&xt.restart(!0),Vt&&J(),m&&Zt&&m(X),x&&x(X,_t)}},kt=function(ct){return ct.touches&&ct.touches.length>1&&(X.isGesturing=!0)&&W(ct,X.isDragging)},Yt=function(){return(X.isGesturing=!1)||I(X)},B=function(ct){if(!rt(ct)){var Zt=Kt(),_t=ae();ft((Zt-k)*Tt,(_t-Le)*Tt,1),k=Zt,Le=_t,h&&xt.restart(!0)}},St=function(ct){if(!rt(ct)){ct=ba(ct,u),et&&(Ot=!0);var Zt=(ct.deltaMode===1?l:ct.deltaMode===2?pi.innerHeight:1)*p;ft(ct.deltaX*Zt,ct.deltaY*Zt,0),h&&!O&&xt.restart(!0)}},nt=function(ct){if(!rt(ct)){var Zt=ct.clientX,_t=ct.clientY,Rt=Zt-X.x,Mt=_t-X.y;X.x=Zt,X.y=_t,ht=!0,h&&xt.restart(!0),(Rt||Mt)&&Et(Rt,Mt)}},bt=function(ct){X.event=ct,U(X)},wt=function(ct){X.event=ct,P(X)},ut=function(ct){return rt(ct)||ba(ct,u)&&Lt(X)};xt=X._dc=wn.delayedCall(f||.25,K).pause(),X.deltaX=X.deltaY=0,X._vx=Zh(0,50,!0),X._vy=Zh(0,50,!0),X.scrollX=Kt,X.scrollY=ae,X.isDragging=X.isGesturing=X.isPressed=!1,Jy(this),X.enable=function(gt){return X.isEnabled||(Gn(D?T:a,"scroll",Kh),o.indexOf("scroll")>=0&&Gn(D?T:a,"scroll",B,ue,j),o.indexOf("wheel")>=0&&Gn(a,"wheel",St,ue,j),(o.indexOf("touch")>=0&&Ky||o.indexOf("pointer")>=0)&&(Gn(a,Hi[0],yt,ue,j),Gn(T,Hi[2],vt),Gn(T,Hi[3],vt),tt&&Gn(a,"click",dt,!0,!0),Lt&&Gn(a,"click",ut),W&&Gn(T,"gesturestart",kt),I&&Gn(T,"gestureend",Yt),U&&Gn(a,Cs+"enter",bt),P&&Gn(a,Cs+"leave",wt),F&&Gn(a,Cs+"move",nt)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=ht=Vt=!1,X._vx.reset(),X._vy.reset(),k=Kt(),Le=ae(),gt&&gt.type&&yt(gt),lt&&lt(X)),X},X.disable=function(){X.isEnabled&&(Go.filter(function(gt){return gt!==X&&ul(gt.target)}).length||zn(D?T:a,"scroll",Kh),X.isPressed&&(X._vx.reset(),X._vy.reset(),zn(O?a:T,Hi[1],mt,!0)),zn(D?T:a,"scroll",B,j),zn(a,"wheel",St,j),zn(a,Hi[0],yt,j),zn(T,Hi[2],vt),zn(T,Hi[3],vt),zn(a,"click",dt,!0),zn(a,"click",ut),zn(T,"gesturestart",kt),zn(T,"gestureend",Yt),zn(a,Cs+"enter",bt),zn(a,Cs+"leave",wt),zn(a,Cs+"move",nt),X.isEnabled=X.isPressed=X.isDragging=!1,Pt&&Pt(X))},X.kill=X.revert=function(){X.disable();var gt=Go.indexOf(X);gt>=0&&Go.splice(gt,1),Dr===X&&(Dr=0)},Go.push(X),O&&ul(a)&&(Dr=X),X.enable(_)},Kw(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();hn.version="3.15.0";hn.create=function(i){return new hn(i)};hn.register=eS;hn.getAll=function(){return Go.slice()};hn.getById=function(i){return Go.filter(function(t){return t.vars.id===i})[0]};jy()&&wn.registerPlugin(hn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ht,Lo,ge,Pe,hi,Ce,um,Tu,Ll,fl,Ga,nc,In,Qu,Jh,Xn,T0,E0,Io,nS,wf,iS,Wn,jh,rS,sS,ts,Qh,fm,jo,hm,hl,td,Rf,ic=1,Fn=Date.now,Cf=Fn(),Bi=0,Ha=0,b0=function(t,e,n){var r=ui(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},A0=function(t,e){return e&&(!ui(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},jw=function i(){return Ha&&requestAnimationFrame(i)},w0=function(){return Qu=1},R0=function(){return Qu=0},tr=function(t){return t},Wa=function(t){return Math.round(t*1e5)/1e5||0},oS=function(){return typeof window<"u"},aS=function(){return Ht||oS()&&(Ht=window.gsap)&&Ht.registerPlugin&&Ht},Zs=function(t){return!!~um.indexOf(t)},lS=function(t){return(t==="Height"?hm:ge["inner"+t])||hi["client"+t]||Ce["client"+t]},cS=function(t){return us(t,"getBoundingClientRect")||(Zs(t)?function(){return Jc.width=ge.innerWidth,Jc.height=hm,Jc}:function(){return Rr(t)})},Qw=function(t,e,n){var r=n.d,s=n.d2,o=n.a;return(o=us(t,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(e?lS(s):t["client"+s])||0}},tR=function(t,e){return!e||~hr.indexOf(t)?cS(t):function(){return Jc}},or=function(t,e){var n=e.s,r=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+r)&&(o=us(t,n))?o()-cS(t)()[s]:Zs(t)?(hi[n]||Ce[n])-lS(r):t[n]-t["offset"+r])},rc=function(t,e){for(var n=0;n<Io.length;n+=3)(!e||~e.indexOf(Io[n+1]))&&t(Io[n],Io[n+1],Io[n+2])},ui=function(t){return typeof t=="string"},On=function(t){return typeof t=="function"},Xa=function(t){return typeof t=="number"},Ps=function(t){return typeof t=="object"},Aa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ho=function(t,e,n){if(t.enabled){var r=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);r&&r.totalTime&&(t.callbackAnimation=r)}},po=Math.abs,uS="left",fS="top",dm="right",pm="bottom",Ys="width",qs="height",dl="Right",pl="Left",ml="Top",gl="Bottom",pn="padding",Ci="margin",ha="Width",mm="Height",gn="px",Pi=function(t){return ge.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},eR=function(t){var e=Pi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},C0=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Rr=function(t,e){var n=e&&Pi(t)[Jh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ht.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Eu=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},hS=function(t){var e=[],n=t.labels,r=t.duration(),s;for(s in n)e.push(n[s]/r);return e},nR=function(t){return function(e){return Ht.utils.snap(hS(t),e)}},gm=function(t){var e=Ht.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return e(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=e(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:e(s<0?r-t:r+t)}},iR=function(t){return function(e,n){return gm(hS(t))(e,n.direction)}},sc=function(t,e,n,r){return n.split(",").forEach(function(s){return t(e,s,r)})},Mn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},Sn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},oc=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},P0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ac={toggleActions:"play",anticipatePin:0},bu={top:0,left:0,center:.5,bottom:1,right:1},qc=function(t,e){if(ui(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in bu?bu[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},lc=function(t,e,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,p=Pe.createElement("div"),_=Zs(n)||us(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,m=_?Ce:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,y=S?c:u,x="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(x+=(r===_n?dm:pm)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=S,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=x,p.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+r.op.d2],$c(p,0,r,S),p},$c=function(t,e,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];t._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+ha]=1,s["border"+a+ha]=0,s[n.p]=e+"px",Ht.set(t,s)},me=[],ed={},Il,D0=function(){return Fn()-Bi>34&&(Il||(Il=requestAnimationFrame(Ir)))},mo=function(){(!Wn||!Wn.isPressed||Wn.startX>Ce.clientWidth)&&(_e.cache++,Wn?Il||(Il=requestAnimationFrame(Ir)):Ir(),Bi||js("scrollStart"),Bi=Fn())},Pf=function(){sS=ge.innerWidth,rS=ge.innerHeight},Ya=function(t){_e.cache++,(t===!0||!In&&!iS&&!Pe.fullscreenElement&&!Pe.webkitFullscreenElement&&(!jh||sS!==ge.innerWidth||Math.abs(ge.innerHeight-rS)>ge.innerHeight*.25))&&Tu.restart(!0)},Js={},rR=[],dS=function i(){return Sn(xe,"scrollEnd",i)||Us(!0)},js=function(t){return Js[t]&&Js[t].map(function(e){return e()})||rR},li=[],pS=function(t){for(var e=0;e<li.length;e+=5)(!t||li[e+4]&&li[e+4].query===t)&&(li[e].style.cssText=li[e+1],li[e].getBBox&&li[e].setAttribute("transform",li[e+2]||""),li[e+3].uncache=1)},mS=function(){return _e.forEach(function(t){return On(t)&&++t.cacheID&&(t.rec=t())})},_m=function(t,e){var n;for(Xn=0;Xn<me.length;Xn++)n=me[Xn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));hl=!0,e&&pS(e),e||js("revert")},gS=function(t,e){_e.cache++,(e||!Yn)&&_e.forEach(function(n){return On(n)&&n.cacheID++&&(n.rec=0)}),ui(t)&&(ge.history.scrollRestoration=fm=t)},Yn,$s=0,L0,sR=function(){if(L0!==$s){var t=L0=$s;requestAnimationFrame(function(){return t===$s&&Us(!0)})}},_S=function(){Ce.appendChild(jo),hm=!Wn&&jo.offsetHeight||ge.innerHeight,Ce.removeChild(jo)},I0=function(t){return Ll(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Us=function(t,e){if(hi=Pe.documentElement,Ce=Pe.body,um=[ge,Pe,hi,Ce],Bi&&!t&&!hl){Mn(xe,"scrollEnd",dS);return}_S(),Yn=xe.isRefreshing=!0,hl||mS();var n=js("refreshInit");nS&&xe.sort(),e||_m(),_e.forEach(function(r){On(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),me.slice(0).forEach(function(r){return r.refresh()}),hl=!1,me.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),td=1,I0(!0),me.forEach(function(r){var s=or(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),I0(!1),td=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),_e.forEach(function(r){On(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),gS(fm,1),Tu.pause(),$s++,Yn=2,Ir(2),me.forEach(function(r){return On(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Yn=xe.isRefreshing=!1,js("refresh")},nd=0,Kc=1,_l,Ir=function(t){if(t===2||!Yn&&!hl){xe.isUpdating=!0,_l&&_l.update(0);var e=me.length,n=Fn(),r=n-Cf>=50,s=e&&me[0].scroll();if(Kc=nd>s?-1:1,Yn||(nd=s),r&&(Bi&&!Qu&&n-Bi>200&&(Bi=0,js("scrollEnd")),Ga=Cf,Cf=n),Kc<0){for(Xn=e;Xn-- >0;)me[Xn]&&me[Xn].update(0,r);Kc=1}else for(Xn=0;Xn<e;Xn++)me[Xn]&&me[Xn].update(0,r);xe.isUpdating=!1}Il=0},id=[uS,fS,pm,dm,Ci+gl,Ci+dl,Ci+ml,Ci+pl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Zc=id.concat([Ys,qs,"boxSizing","max"+ha,"max"+mm,"position",Ci,pn,pn+ml,pn+dl,pn+gl,pn+pl]),oR=function(t,e,n){Qo(n);var r=t._gsap;if(r.spacerIsNative)Qo(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Df=function(t,e,n,r){if(!t._gsap.swappedIn){for(var s=id.length,o=e.style,a=t.style,l;s--;)l=id[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[pm]=a[dm]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ys]=Eu(t,qn)+gn,o[qs]=Eu(t,_n)+gn,o[pn]=a[Ci]=a[fS]=a[uS]="0",Qo(r),a[Ys]=a["max"+ha]=n[Ys],a[qs]=a["max"+mm]=n[qs],a[pn]=n[pn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},aR=/([A-Z])/g,Qo=function(t){if(t){var e=t.t.style,n=t.length,r=0,s,o;for((t.t._gsap||Ht.core.getCache(t.t)).uncache=1;r<n;r+=2)o=t[r+1],s=t[r],o?e[s]=o:e[s]&&e.removeProperty(s.replace(aR,"-$1").toLowerCase())}},cc=function(t){for(var e=Zc.length,n=t.style,r=[],s=0;s<e;s++)r.push(Zc[s],n[Zc[s]]);return r.t=t,r},lR=function(t,e,n){for(var r=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],r.push(a,a in e?e[a]:t[o+1]);return r.t=t.t,r},Jc={left:0,top:0},N0=function(t,e,n,r,s,o,a,l,c,u,h,f,d,p){On(t)&&(t=t(l)),ui(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?qc("0"+t.substr(3),n):0));var _=d?d.time():0,g,m,S;if(d&&d.seek(0),isNaN(t)||(t=+t),Xa(t))d&&(t=Ht.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&$c(a,n,r,!0);else{On(e)&&(e=e(l));var y=(t||"0").split(" "),x,M,E,A;S=Zn(e,l)||Ce,x=Rr(S)||{},(!x||!x.left&&!x.top)&&Pi(S).display==="none"&&(A=S.style.display,S.style.display="block",x=Rr(S),A?S.style.display=A:S.style.removeProperty("display")),M=qc(y[0],x[r.d]),E=qc(y[1]||"0",n),t=x[r.p]-c[r.p]-u+M+s-E,a&&$c(a,E,r,n-E<20||a._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var v=t+n,b=o._isStart;g="scroll"+r.d2,$c(o,v,r,b&&v>20||!b&&(h?Math.max(Ce[g],hi[g]):o.parentNode[g])<=v+1),h&&(c=Rr(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+gn))}return d&&S&&(g=Rr(S),d.seek(f),m=Rr(S),d._caScrollDist=g[r.p]-m[r.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},cR=/(webkit|moz|length|cssText|inset)/i,F0=function(t,e,n,r){if(t.parentNode!==e){var s=t.style,o,a;if(e===Ce){t._stOrig=s.cssText,a=Pi(t);for(o in a)!+o&&!cR.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=t._stOrig;Ht.core.getCache(t).uncache=1,e.appendChild(t)}},vS=function(t,e,n){var r=e,s=r;return function(o){var a=Math.round(t());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},uc=function(t,e,n){var r={};r[e.p]="+="+n,Ht.set(t,r)},U0=function(t,e){var n=ms(t,e),r="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,p={};c=c||n();var _=vS(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=p,p[r]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){_e.cache++,o.tween&&Ir()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ht.to(t,l),f};return t[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Mn(t,"wheel",n.wheelHandler),xe.isTouch&&Mn(t,"touchmove",n.wheelHandler),s},xe=function(){function i(e,n){Lo||i.register(Ht)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Qh(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ha){this.update=this.refresh=this.kill=tr;return}n=C0(ui(n)||Xa(n)||n.nodeType?{trigger:n}:n,ac);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,y=s.once,x=s.snap,M=s.pinReparent,E=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,b=s.preventOverlaps,w=n.horizontal||n.containerAnimation&&n.horizontal!==!1?qn:_n,C=!h&&h!==0,L=Zn(n.scroller||ge),V=Ht.core.getCache(L),U=Zs(L),P=("pinType"in n?n.pinType:us(L,"pinType")||U&&"fixed")==="fixed",F=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],N=C&&n.toggleActions.split(" "),O="markers"in n?n.markers:ac.markers,W=U?0:parseFloat(Pi(L)["border"+w.p2+ha])||0,I=this,et=n.onRefreshInit&&function(){return n.onRefreshInit(I)},lt=Qw(L,U,w),Pt=tR(L,U),Lt=0,Tt=0,j=0,tt=ms(L,w),st,ot,pt,xt,Vt,ht,Ot,Wt,zt,X,Jt,le,ue,Kt,ae,k,Le,Xt,D,T,z,Y,Q,dt,rt,K,J,ft,Et,mt,yt,vt,kt,Yt,B,St,nt,bt,wt;if(I._startClamp=I._endClamp=!1,I._dir=w,g*=45,I.scroller=L,I.scroll=A?A.time.bind(A):tt,xt=tt(),I.vars=n,r=r||n.animation,"refreshPriority"in n&&(nS=1,n.refreshPriority===-9999&&(_l=I)),V.tweenScroll=V.tweenScroll||{top:U0(L,_n),left:U0(L,qn)},I.tweenTo=st=V.tweenScroll[w.p],I.scrubDuration=function(_t){kt=Xa(_t)&&_t,kt?vt?vt.duration(_t):vt=Ht.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:kt,paused:!0,onComplete:function(){return m&&m(I)}}):(vt&&vt.progress(1).kill(),vt=0)},r&&(r.vars.lazy=!1,r._initted&&!I.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),I.animation=r.pause(),r.scrollTrigger=I,I.scrubDuration(h),mt=0,l||(l=r.vars.id)),x&&((!Ps(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Ce.style&&Ht.set(U?[Ce,hi]:L,{scrollBehavior:"auto"}),_e.forEach(function(_t){return On(_t)&&_t.target===(U?Pe.scrollingElement||hi:L)&&(_t.smooth=!1)}),pt=On(x.snapTo)?x.snapTo:x.snapTo==="labels"?nR(r):x.snapTo==="labelsDirectional"?iR(r):x.directional!==!1?function(_t,Rt){return gm(x.snapTo)(_t,Fn()-Tt<500?0:Rt.direction)}:Ht.utils.snap(x.snapTo),Yt=x.duration||{min:.1,max:2},Yt=Ps(Yt)?fl(Yt.min,Yt.max):fl(Yt,Yt),B=Ht.delayedCall(x.delay||kt/2||.1,function(){var _t=tt(),Rt=Fn()-Tt<500,Mt=st.tween;if((Rt||Math.abs(I.getVelocity())<10)&&!Mt&&!Qu&&Lt!==_t){var Nt=(_t-ht)/Kt,$t=r&&!C?r.totalProgress():Nt,It=Rt?0:($t-yt)/(Fn()-Ga)*1e3||0,ne=Ht.utils.clamp(-Nt,1-Nt,po(It/2)*It/.185),jt=Nt+(x.inertia===!1?0:ne),Qt,fe,ce=x,Xe=ce.onStart,pe=ce.onInterrupt,Ye=ce.onComplete;if(Qt=pt(jt,I),Xa(Qt)||(Qt=jt),fe=Math.max(0,Math.round(ht+Qt*Kt)),_t<=Ot&&_t>=ht&&fe!==_t){if(Mt&&!Mt._initted&&Mt.data<=po(fe-_t))return;x.inertia===!1&&(ne=Qt-Nt),st(fe,{duration:Yt(po(Math.max(po(jt-$t),po(Qt-$t))*.185/It/.05||0)),ease:x.ease||"power3",data:po(fe-_t),onInterrupt:function(){return B.restart(!0)&&pe&&ho(I,pe)},onComplete:function(){I.update(),Lt=tt(),r&&!C&&(vt?vt.resetTo("totalProgress",Qt,r._tTime/r._tDur):r.progress(Qt)),mt=yt=r&&!C?r.totalProgress():I.progress,S&&S(I),Ye&&ho(I,Ye)}},_t,ne*Kt,fe-_t-ne*Kt),Xe&&ho(I,Xe,st.tween)}}else I.isActive&&Lt!==_t&&B.restart(!0)}).pause()),l&&(ed[l]=I),f=I.trigger=Zn(f||d!==!0&&d),wt=f&&f._gsap&&f._gsap.stRevert,wt&&(wt=wt(I)),d=d===!0?f:Zn(d),ui(a)&&(a={targets:f,className:a}),d&&(p===!1||p===Ci||(p=!p&&d.parentNode&&d.parentNode.style&&Pi(d.parentNode).display==="flex"?!1:pn),I.pin=d,ot=Ht.core.getCache(d),ot.spacer?ae=ot.pinState:(E&&(E=Zn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),ot.spacerIsNative=!!E,E&&(ot.spacerState=cc(E))),ot.spacer=Xt=E||Pe.createElement("div"),Xt.classList.add("pin-spacer"),l&&Xt.classList.add("pin-spacer-"+l),ot.pinState=ae=cc(d)),n.force3D!==!1&&Ht.set(d,{force3D:!0}),I.spacer=Xt=ot.spacer,Et=Pi(d),dt=Et[p+w.os2],T=Ht.getProperty(d),z=Ht.quickSetter(d,w.a,gn),Df(d,Xt,Et),Le=cc(d)),O){le=Ps(O)?C0(O,P0):P0,X=lc("scroller-start",l,L,w,le,0),Jt=lc("scroller-end",l,L,w,le,0,X),D=X["offset"+w.op.d2];var ut=Zn(us(L,"content")||L);Wt=this.markerStart=lc("start",l,ut,w,le,D,0,A),zt=this.markerEnd=lc("end",l,ut,w,le,D,0,A),A&&(bt=Ht.quickSetter([Wt,zt],w.a,gn)),!P&&!(hr.length&&us(L,"fixedMarkers")===!0)&&(eR(U?Ce:L),Ht.set([X,Jt],{force3D:!0}),K=Ht.quickSetter(X,w.a,gn),ft=Ht.quickSetter(Jt,w.a,gn))}if(A){var gt=A.vars.onUpdate,ct=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){I.update(0,0,1),gt&&gt.apply(A,ct||[])})}if(I.previous=function(){return me[me.indexOf(I)-1]},I.next=function(){return me[me.indexOf(I)+1]},I.revert=function(_t,Rt){if(!Rt)return I.kill(!0);var Mt=_t!==!1||!I.enabled,Nt=In;Mt!==I.isReverted&&(Mt&&(St=Math.max(tt(),I.scroll.rec||0),j=I.progress,nt=r&&r.progress()),Wt&&[Wt,zt,X,Jt].forEach(function($t){return $t.style.display=Mt?"none":"block"}),Mt&&(In=I,I.update(Mt)),d&&(!M||!I.isActive)&&(Mt?oR(d,Xt,ae):Df(d,Xt,Pi(d),rt)),Mt||I.update(Mt),In=Nt,I.isReverted=Mt)},I.refresh=function(_t,Rt,Mt,Nt){if(!((In||!I.enabled)&&!Rt)){if(d&&_t&&Bi){Mn(i,"scrollEnd",dS);return}!Yn&&et&&et(I),In=I,st.tween&&!Mt&&(st.tween.kill(),st.tween=0),vt&&vt.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Dt){return Dt.vars.immediateRender&&Dt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var $t=lt(),It=Pt(),ne=A?A.duration():or(L,w),jt=Kt<=.01||!Kt,Qt=0,fe=Nt||0,ce=Ps(Mt)?Mt.end:n.end,Xe=n.endTrigger||f,pe=Ps(Mt)?Mt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Ye=I.pinnedContainer=n.pinnedContainer&&Zn(n.pinnedContainer,I),we=f&&Math.max(0,me.indexOf(I))||0,Re=we,Te,ye,Fe,An,ze,Ie,on,R,G,Z,q,$,At;for(O&&Ps(Mt)&&($=Ht.getProperty(X,w.p),At=Ht.getProperty(Jt,w.p));Re-- >0;)Ie=me[Re],Ie.end||Ie.refresh(0,1)||(In=I),on=Ie.pin,on&&(on===f||on===d||on===Ye)&&!Ie.isReverted&&(Z||(Z=[]),Z.unshift(Ie),Ie.revert(!0,!0)),Ie!==me[Re]&&(we--,Re--);for(On(pe)&&(pe=pe(I)),pe=b0(pe,"start",I),ht=N0(pe,f,$t,w,tt(),Wt,X,I,It,W,P,ne,A,I._startClamp&&"_startClamp")||(d?-.001:0),On(ce)&&(ce=ce(I)),ui(ce)&&!ce.indexOf("+=")&&(~ce.indexOf(" ")?ce=(ui(pe)?pe.split(" ")[0]:"")+ce:(Qt=qc(ce.substr(2),$t),ce=ui(pe)?pe:(A?Ht.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,ht):ht)+Qt,Xe=f)),ce=b0(ce,"end",I),Ot=Math.max(ht,N0(ce||(Xe?"100% 0":ne),Xe,$t,w,tt()+Qt,zt,Jt,I,It,W,P,ne,A,I._endClamp&&"_endClamp"))||-.001,Qt=0,Re=we;Re--;)Ie=me[Re]||{},on=Ie.pin,on&&Ie.start-Ie._pinPush<=ht&&!A&&Ie.end>0&&(Te=Ie.end-(I._startClamp?Math.max(0,Ie.start):Ie.start),(on===f&&Ie.start-Ie._pinPush<ht||on===Ye)&&isNaN(pe)&&(Qt+=Te*(1-Ie.progress)),on===d&&(fe+=Te));if(ht+=Qt,Ot+=Qt,I._startClamp&&(I._startClamp+=Qt),I._endClamp&&!Yn&&(I._endClamp=Ot||-.001,Ot=Math.min(Ot,or(L,w))),Kt=Ot-ht||(ht-=.01)&&.001,jt&&(j=Ht.utils.clamp(0,1,Ht.utils.normalize(ht,Ot,St))),I._pinPush=fe,Wt&&Qt&&(Te={},Te[w.a]="+="+Qt,Ye&&(Te[w.p]="-="+tt()),Ht.set([Wt,zt],Te)),d&&!(td&&I.end>=or(L,w)))Te=Pi(d),An=w===_n,Fe=tt(),Y=parseFloat(T(w.a))+fe,!ne&&Ot>1&&(q=(U?Pe.scrollingElement||hi:L).style,q={style:q,value:q["overflow"+w.a.toUpperCase()]},U&&Pi(Ce)["overflow"+w.a.toUpperCase()]!=="scroll"&&(q.style["overflow"+w.a.toUpperCase()]="scroll")),Df(d,Xt,Te),Le=cc(d),ye=Rr(d,!0),R=P&&ms(L,An?qn:_n)(),p?(rt=[p+w.os2,Kt+fe+gn],rt.t=Xt,Re=p===pn?Eu(d,w)+Kt+fe:0,Re&&(rt.push(w.d,Re+gn),Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Re+gn)),Qo(rt),Ye&&me.forEach(function(Dt){Dt.pin===Ye&&Dt.vars.pinSpacing!==!1&&(Dt._subPinOffset=!0)}),P&&tt(St)):(Re=Eu(d,w),Re&&Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Re+gn)),P&&(ze={top:ye.top+(An?Fe-ht:R)+gn,left:ye.left+(An?R:Fe-ht)+gn,boxSizing:"border-box",position:"fixed"},ze[Ys]=ze["max"+ha]=Math.ceil(ye.width)+gn,ze[qs]=ze["max"+mm]=Math.ceil(ye.height)+gn,ze[Ci]=ze[Ci+ml]=ze[Ci+dl]=ze[Ci+gl]=ze[Ci+pl]="0",ze[pn]=Te[pn],ze[pn+ml]=Te[pn+ml],ze[pn+dl]=Te[pn+dl],ze[pn+gl]=Te[pn+gl],ze[pn+pl]=Te[pn+pl],k=lR(ae,ze,M),Yn&&tt(0)),r?(G=r._initted,wf(1),r.render(r.duration(),!0,!0),Q=T(w.a)-Y+Kt+fe,J=Math.abs(Kt-Q)>1,P&&J&&k.splice(k.length-2,2),r.render(0,!0,!0),G||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),wf(0)):Q=Kt,q&&(q.value?q.style["overflow"+w.a.toUpperCase()]=q.value:q.style.removeProperty("overflow-"+w.a));else if(f&&tt()&&!A)for(ye=f.parentNode;ye&&ye!==Ce;)ye._pinOffset&&(ht-=ye._pinOffset,Ot-=ye._pinOffset),ye=ye.parentNode;Z&&Z.forEach(function(Dt){return Dt.revert(!1,!0)}),I.start=ht,I.end=Ot,xt=Vt=Yn?St:tt(),!A&&!Yn&&(xt<St&&tt(St),I.scroll.rec=0),I.revert(!1,!0),Tt=Fn(),B&&(Lt=-1,B.restart(!0)),In=0,r&&C&&(r._initted||nt)&&r.progress()!==nt&&r.progress(nt||0,!0).render(r.time(),!0,!0),(jt||j!==I.progress||A||_||r&&!r._initted)&&(r&&!C&&(r._initted||j||r.vars.immediateRender!==!1)&&r.totalProgress(A&&ht<-.001&&!j?Ht.utils.normalize(ht,Ot,0):j,!0),I.progress=jt||(xt-ht)/Kt===j?0:j),d&&p&&(Xt._pinOffset=Math.round(I.progress*Q)),vt&&vt.invalidate(),isNaN($)||($-=Ht.getProperty(X,w.p),At-=Ht.getProperty(Jt,w.p),uc(X,w,$),uc(Wt,w,$-(Nt||0)),uc(Jt,w,At),uc(zt,w,At-(Nt||0))),jt&&!Yn&&I.update(),u&&!Yn&&!ue&&(ue=!0,u(I),ue=!1)}},I.getVelocity=function(){return(tt()-Vt)/(Fn()-Ga)*1e3||0},I.endAnimation=function(){Aa(I.callbackAnimation),r&&(vt?vt.progress(1):r.paused()?C||Aa(r,I.direction<0,1):Aa(r,r.reversed()))},I.labelToScroll=function(_t){return r&&r.labels&&(ht||I.refresh()||ht)+r.labels[_t]/r.duration()*Kt||0},I.getTrailing=function(_t){var Rt=me.indexOf(I),Mt=I.direction>0?me.slice(0,Rt).reverse():me.slice(Rt+1);return(ui(_t)?Mt.filter(function(Nt){return Nt.vars.preventOverlaps===_t}):Mt).filter(function(Nt){return I.direction>0?Nt.end<=ht:Nt.start>=Ot})},I.update=function(_t,Rt,Mt){if(!(A&&!Mt&&!_t)){var Nt=Yn===!0?St:I.scroll(),$t=_t?0:(Nt-ht)/Kt,It=$t<0?0:$t>1?1:$t||0,ne=I.progress,jt,Qt,fe,ce,Xe,pe,Ye,we;if(Rt&&(Vt=xt,xt=A?tt():Nt,x&&(yt=mt,mt=r&&!C?r.totalProgress():It)),g&&d&&!In&&!ic&&Bi&&(!It&&ht<Nt+(Nt-Vt)/(Fn()-Ga)*g?It=1e-4:It===1&&Ot>Nt+(Nt-Vt)/(Fn()-Ga)*g&&(It=.9999)),It!==ne&&I.enabled){if(jt=I.isActive=!!It&&It<1,Qt=!!ne&&ne<1,pe=jt!==Qt,Xe=pe||!!It!=!!ne,I.direction=It>ne?1:-1,I.progress=It,Xe&&!In&&(fe=It&&!ne?0:It===1?1:ne===1?2:3,C&&(ce=!pe&&N[fe+1]!=="none"&&N[fe+1]||N[fe],we=r&&(ce==="complete"||ce==="reset"||ce in r))),b&&(pe||we)&&(we||h||!r)&&(On(b)?b(I):I.getTrailing(b).forEach(function(Fe){return Fe.endAnimation()})),C||(vt&&!In&&!ic?(vt._dp._time-vt._start!==vt._time&&vt.render(vt._dp._time-vt._start),vt.resetTo?vt.resetTo("totalProgress",It,r._tTime/r._tDur):(vt.vars.totalProgress=It,vt.invalidate().restart())):r&&r.totalProgress(It,!!(In&&(Tt||_t)))),d){if(_t&&p&&(Xt.style[p+w.os2]=dt),!P)z(Wa(Y+Q*It));else if(Xe){if(Ye=!_t&&It>ne&&Ot+1>Nt&&Nt+1>=or(L,w),M)if(!_t&&(jt||Ye)){var Re=Rr(d,!0),Te=Nt-ht;F0(d,Ce,Re.top+(w===_n?Te:0)+gn,Re.left+(w===_n?0:Te)+gn)}else F0(d,Xt);Qo(jt||Ye?k:Le),J&&It<1&&jt||z(Y+(It===1&&!Ye?Q:0))}}x&&!st.tween&&!In&&!ic&&B.restart(!0),a&&(pe||y&&It&&(It<1||!Rf))&&Ll(a.targets).forEach(function(Fe){return Fe.classList[jt||y?"add":"remove"](a.className)}),o&&!C&&!_t&&o(I),Xe&&!In?(C&&(we&&(ce==="complete"?r.pause().totalProgress(1):ce==="reset"?r.restart(!0).pause():ce==="restart"?r.restart(!0):r[ce]()),o&&o(I)),(pe||!Rf)&&(c&&pe&&ho(I,c),F[fe]&&ho(I,F[fe]),y&&(It===1?I.kill(!1,1):F[fe]=0),pe||(fe=It===1?1:3,F[fe]&&ho(I,F[fe]))),v&&!jt&&Math.abs(I.getVelocity())>(Xa(v)?v:2500)&&(Aa(I.callbackAnimation),vt?vt.progress(1):Aa(r,ce==="reverse"?1:!It,1))):C&&o&&!In&&o(I)}if(ft){var ye=A?Nt/A.duration()*(A._caScrollDist||0):Nt;K(ye+(X._isFlipped?1:0)),ft(ye)}bt&&bt(-Nt/A.duration()*(A._caScrollDist||0))}},I.enable=function(_t,Rt){I.enabled||(I.enabled=!0,Mn(L,"resize",Ya),U||Mn(L,"scroll",mo),et&&Mn(i,"refreshInit",et),_t!==!1&&(I.progress=j=0,xt=Vt=Lt=tt()),Rt!==!1&&I.refresh())},I.getTween=function(_t){return _t&&st?st.tween:vt},I.setPositions=function(_t,Rt,Mt,Nt){if(A){var $t=A.scrollTrigger,It=A.duration(),ne=$t.end-$t.start;_t=$t.start+ne*_t/It,Rt=$t.start+ne*Rt/It}I.refresh(!1,!1,{start:A0(_t,Mt&&!!I._startClamp),end:A0(Rt,Mt&&!!I._endClamp)},Nt),I.update()},I.adjustPinSpacing=function(_t){if(rt&&_t){var Rt=rt.indexOf(w.d)+1;rt[Rt]=parseFloat(rt[Rt])+_t+gn,rt[1]=parseFloat(rt[1])+_t+gn,Qo(rt)}},I.disable=function(_t,Rt){if(_t!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Rt||vt&&vt.pause(),St=0,ot&&(ot.uncache=1),et&&Sn(i,"refreshInit",et),B&&(B.pause(),st.tween&&st.tween.kill()&&(st.tween=0)),!U)){for(var Mt=me.length;Mt--;)if(me[Mt].scroller===L&&me[Mt]!==I)return;Sn(L,"resize",Ya),U||Sn(L,"scroll",mo)}},I.kill=function(_t,Rt){I.disable(_t,Rt),vt&&!Rt&&vt.kill(),l&&delete ed[l];var Mt=me.indexOf(I);Mt>=0&&me.splice(Mt,1),Mt===Xn&&Kc>0&&Xn--,Mt=0,me.forEach(function(Nt){return Nt.scroller===I.scroller&&(Mt=1)}),Mt||Yn||(I.scroll.rec=0),r&&(r.scrollTrigger=null,_t&&r.revert({kill:!1}),Rt||r.kill()),Wt&&[Wt,zt,X,Jt].forEach(function(Nt){return Nt.parentNode&&Nt.parentNode.removeChild(Nt)}),_l===I&&(_l=0),d&&(ot&&(ot.uncache=1),Mt=0,me.forEach(function(Nt){return Nt.pin===d&&Mt++}),Mt||(ot.spacer=0)),n.onKill&&n.onKill(I)},me.push(I),I.enable(!1,!1),wt&&wt(I),r&&r.add&&!Kt){var Zt=I.update;I.update=function(){I.update=Zt,_e.cache++,ht||Ot||I.refresh()},Ht.delayedCall(.01,I.update),Kt=.01,ht=Ot=0}else I.refresh();d&&sR()},i.register=function(n){return Lo||(Ht=n||aS(),oS()&&window.document&&i.enable(),Lo=Ha),Lo},i.defaults=function(n){if(n)for(var r in n)ac[r]=n[r];return ac},i.disable=function(n,r){Ha=0,me.forEach(function(o){return o[r?"kill":"disable"](n)}),Sn(ge,"wheel",mo),Sn(Pe,"scroll",mo),clearInterval(nc),Sn(Pe,"touchcancel",tr),Sn(Ce,"touchstart",tr),sc(Sn,Pe,"pointerdown,touchstart,mousedown",w0),sc(Sn,Pe,"pointerup,touchend,mouseup",R0),Tu.kill(),rc(Sn);for(var s=0;s<_e.length;s+=3)oc(Sn,_e[s],_e[s+1]),oc(Sn,_e[s],_e[s+2])},i.enable=function(){if(ge=window,Pe=document,hi=Pe.documentElement,Ce=Pe.body,Ht){if(Ll=Ht.utils.toArray,fl=Ht.utils.clamp,Qh=Ht.core.context||tr,wf=Ht.core.suppressOverwrites||tr,fm=ge.history.scrollRestoration||"auto",nd=ge.pageYOffset||0,Ht.core.globals("ScrollTrigger",i),Ce){Ha=1,jo=document.createElement("div"),jo.style.height="100vh",jo.style.position="absolute",_S(),jw(),hn.register(Ht),i.isTouch=hn.isTouch,ts=hn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),jh=hn.isTouch===1,Mn(ge,"wheel",mo),um=[ge,Pe,hi,Ce],Ht.matchMedia?(i.matchMedia=function(u){var h=Ht.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ht.addEventListener("matchMediaInit",function(){mS(),_m()}),Ht.addEventListener("matchMediaRevert",function(){return pS()}),Ht.addEventListener("matchMedia",function(){Us(0,1),js("matchMedia")}),Ht.matchMedia().add("(orientation: portrait)",function(){return Pf(),Pf})):console.warn("Requires GSAP 3.11.0 or later"),Pf(),Mn(Pe,"scroll",mo);var n=Ce.hasAttribute("style"),r=Ce.style,s=r.borderTopStyle,o=Ht.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Rr(Ce),_n.m=Math.round(a.top+_n.sc())||0,qn.m=Math.round(a.left+qn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(Ce.setAttribute("style",""),Ce.removeAttribute("style")),nc=setInterval(D0,250),Ht.delayedCall(.5,function(){return ic=0}),Mn(Pe,"touchcancel",tr),Mn(Ce,"touchstart",tr),sc(Mn,Pe,"pointerdown,touchstart,mousedown",w0),sc(Mn,Pe,"pointerup,touchend,mouseup",R0),Jh=Ht.utils.checkPrefix("transform"),Zc.push(Jh),Lo=Fn(),Tu=Ht.delayedCall(.2,Us).pause(),Io=[Pe,"visibilitychange",function(){var u=ge.innerWidth,h=ge.innerHeight;Pe.hidden?(T0=u,E0=h):(T0!==u||E0!==h)&&Ya()},Pe,"DOMContentLoaded",Us,ge,"load",Us,ge,"resize",Ya],rc(Mn),me.forEach(function(u){return u.enable(0,1)}),l=0;l<_e.length;l+=3)oc(Sn,_e[l],_e[l+1]),oc(Sn,_e[l],_e[l+2])}else if(Pe){var c=function u(){i.enable(),Pe.removeEventListener("DOMContentLoaded",u)};Pe.addEventListener("DOMContentLoaded",c)}}},i.config=function(n){"limitCallbacks"in n&&(Rf=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(nc)||(nc=r)&&setInterval(D0,r),"ignoreMobileResize"in n&&(jh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(rc(Sn)||rc(Mn,n.autoRefreshEvents||"none"),iS=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Zn(n),o=_e.indexOf(s),a=Zs(s);~o&&_e.splice(o,a?6:2),r&&(a?hr.unshift(ge,r,Ce,r,hi,r):hr.unshift(s,r))},i.clearMatchMedia=function(n){me.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(ui(n)?Zn(n):n).getBoundingClientRect(),a=o[s?Ys:qs]*r||0;return s?o.right-a>0&&o.left+a<ge.innerWidth:o.bottom-a>0&&o.top+a<ge.innerHeight},i.positionInViewport=function(n,r,s){ui(n)&&(n=Zn(n));var o=n.getBoundingClientRect(),a=o[s?Ys:qs],l=r==null?a/2:r in bu?bu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ge.innerWidth:(o.top+l)/ge.innerHeight},i.killAll=function(n){if(me.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Js.killAll||[];Js={},r.forEach(function(s){return s()})}},i}();xe.version="3.15.0";xe.saveStyles=function(i){return i?Ll(i).forEach(function(t){if(t&&t.style){var e=li.indexOf(t);e>=0&&li.splice(e,5),li.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ht.core.getCache(t),Qh())}}):li};xe.revert=function(i,t){return _m(!i,t)};xe.create=function(i,t){return new xe(i,t)};xe.refresh=function(i){return i?Ya(!0):(Lo||xe.register())&&Us(!0)};xe.update=function(i){return++_e.cache&&Ir(i===!0?2:0)};xe.clearScrollMemory=gS;xe.maxScroll=function(i,t){return or(i,t?qn:_n)};xe.getScrollFunc=function(i,t){return ms(Zn(i),t?qn:_n)};xe.getById=function(i){return ed[i]};xe.getAll=function(){return me.filter(function(i){return i.vars.id!=="ScrollSmoother"})};xe.isScrolling=function(){return!!Bi};xe.snapDirectional=gm;xe.addEventListener=function(i,t){var e=Js[i]||(Js[i]=[]);~e.indexOf(t)||e.push(t)};xe.removeEventListener=function(i,t){var e=Js[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};xe.batch=function(i,t){var e=[],n={},r=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ht.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(p){h.length||d.restart(!0),h.push(p.trigger),f.push(p),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&On(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return On(s)&&(s=s(),Mn(xe,"refresh",function(){return s=t.batchMax()})),Ll(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(xe.create(c))}),e};var O0=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},Lf=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(hn.isTouch?" pinch-zoom":""):"none",t===hi&&i(Ce,e)},fc={auto:1,scroll:1},uR=function(t){var e=t.event,n=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ht.core.getCache(s),a=Fn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ce&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(fc[(l=Pi(s)).overflowY]||fc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Zs(s)&&(fc[(l=Pi(s)).overflowY]||fc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},xS=function(t,e,n,r){return hn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&uR,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Mn(Pe,hn.eventTypes[0],V0,!1,!0)},onDisable:function(){return Sn(Pe,hn.eventTypes[0],V0,!0)}})},fR=/(input|label|select|textarea)/i,B0,V0=function(t){var e=fR.test(t.target.tagName);(e||B0)&&(t._gsapAllow=!0,B0=e)},hR=function(t){Ps(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Zn(t.target)||hi,u=Ht.core.globals().ScrollSmoother,h=u&&u.get(),f=ts&&(t.content&&Zn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=ms(c,_n),p=ms(c,qn),_=1,g=(hn.isTouch&&ge.visualViewport?ge.visualViewport.scale*ge.visualViewport.width:ge.outerWidth)/ge.innerWidth,m=0,S=On(r)?function(){return r(a)}:function(){return r||2.8},y,x,M=xS(c,t.type,!0,s),E=function(){return x=!1},A=tr,v=tr,b=function(){l=or(c,_n),v=fl(ts?1:0,l),n&&(A=fl(0,or(c,qn))),y=$s},w=function(){f._gsap.y=Wa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(x){requestAnimationFrame(E);var O=Wa(a.deltaY/2),W=v(d.v-O);if(f&&W!==d.v+d.offset){d.offset=W-d.v;var I=Wa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=_e.cache,Ir()}return!0}d.offset&&w(),x=!0},L,V,U,P,F=function(){b(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&Ht.set(f,{y:"+=0"}),t.ignoreCheck=function(N){return ts&&N.type==="touchmove"&&C()||_>1.05&&N.type!=="touchstart"||a.isGesturing||N.touches&&N.touches.length>1},t.onPress=function(){x=!1;var N=_;_=Wa((ge.visualViewport&&ge.visualViewport.scale||1)/g),L.pause(),N!==_&&Lf(c,_>1.01?!0:n?!1:"x"),V=p(),U=d(),b(),y=$s},t.onRelease=t.onGestureStart=function(N,O){if(d.offset&&w(),!O)P.restart(!0);else{_e.cache++;var W=S(),I,et;n&&(I=p(),et=I+W*.05*-N.velocityX/.227,W*=O0(p,I,et,or(c,qn)),L.vars.scrollX=A(et)),I=d(),et=I+W*.05*-N.velocityY/.227,W*=O0(d,I,et,or(c,_n)),L.vars.scrollY=v(et),L.invalidate().duration(W).play(.01),(ts&&L.vars.scrollY>=l||I>=l-1)&&Ht.to({},{onUpdate:F,duration:W})}o&&o(N)},t.onWheel=function(){L._ts&&L.pause(),Fn()-m>1e3&&(y=0,m=Fn())},t.onChange=function(N,O,W,I,et){if($s!==y&&b(),O&&n&&p(A(I[2]===O?V+(N.startX-N.x):p()+O-I[1])),W){d.offset&&w();var lt=et[2]===W,Pt=lt?U+N.startY-N.y:d()+W-et[1],Lt=v(Pt);lt&&Pt!==Lt&&(U+=Lt-Pt),d(Lt)}(W||O)&&Ir()},t.onEnable=function(){Lf(c,n?!1:"x"),xe.addEventListener("refresh",F),Mn(ge,"resize",F),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),M.enable()},t.onDisable=function(){Lf(c,!0),Sn(ge,"resize",F),xe.removeEventListener("refresh",F),M.kill()},t.lockAxis=t.lockAxis!==!1,a=new hn(t),a.iOS=ts,ts&&!d()&&d(1),ts&&Ht.ticker.add(tr),P=a._dc,L=Ht.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:vS(d,d(),function(){return L.pause()})},onUpdate:Ir,onComplete:P.vars.onComplete}),a};xe.sort=function(i){if(On(i))return me.sort(i);var t=ge.pageYOffset||0;return xe.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ge.innerHeight}),me.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};xe.observe=function(i){return new hn(i)};xe.normalizeScroll=function(i){if(typeof i>"u")return Wn;if(i===!0&&Wn)return Wn.enable();if(i===!1){Wn&&Wn.kill(),Wn=i;return}var t=i instanceof hn?i:hR(i);return Wn&&Wn.target===t.target&&Wn.kill(),Zs(t.target)&&(Wn=t),t};xe.core={_getVelocityProp:Zh,_inputObserver:xS,_scrollers:_e,_proxies:hr,bridge:{ss:function(){Bi||js("scrollStart"),Bi=Fn()},ref:function(){return In}}};aS()&&Ht.registerPlugin(xe);ll.registerPlugin(xe);const dR=.03,pR=.1;function mR({text:i="Every word in this paragraph will light up as you scroll through it.",font:t={fontFamily:"Inter, system-ui, sans-serif",fontSize:"60px",fontWeight:600,letterSpacing:"-0.025em",lineHeight:"1.1em",textAlign:"left"},dimColor:e="rgba(255, 255, 255, 0.15)",highlightColor:n="#FFFFFF",splitBy:r="words",scrollStart:s="top center",scrollEnd:o="bottom center",scrub:a=!0}){const l=at.useRef(null),c=i.trim().split(/\s+/).filter(Boolean),u=Array.from(i),h=r==="characters"?dR:pR;return at.useEffect(()=>{const f=l.current;if(!f)return;const d=f.querySelectorAll(r==="characters"?".char":".word"),p=ll.context(()=>{ll.set(d,{color:e}),ll.to(d,{color:n,stagger:h,scrollTrigger:{trigger:f,start:s,end:o,scrub:a}})},f);return()=>p.revert()},[i,e,n,r,h,s,o,a]),it.jsx("div",{style:{paddingTop:"100dvh",paddingBottom:"100dvh"},children:it.jsx("p",{ref:l,style:{margin:0,display:"inline-block",whiteSpace:"pre-wrap",color:e,...t},children:r==="characters"?u.map((f,d)=>it.jsx("span",{className:"char",style:{display:"inline-block",color:e},children:f===" "?" ":f},`${f}-${d}`)):c.map((f,d)=>it.jsxs(at.Fragment,{children:[it.jsx("span",{className:"word",style:{display:"inline-block",color:e},children:f}),d<c.length-1?" ":null]},`${f}-${d}`))})})}const gR="storyforge-shiny-pill-keyframes";function _R({text:i,link:t,textColor:e="#EDE6DD",shineColor:n="#C2613F",speed:r=2,className:s,style:o}){const a=(o==null?void 0:o.width)==="100%",l={...o,position:"relative",display:"inline-flex",alignItems:"center",boxSizing:"border-box",...a?{}:{minWidth:"max-content",width:"auto"},whiteSpace:"nowrap"},c={position:"absolute",inset:0,display:"flex",alignItems:"center",whiteSpace:"nowrap",color:n,pointerEvents:"none",WebkitMaskImage:"linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",maskImage:"linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",WebkitMaskSize:"150% auto",maskSize:"150% auto",animation:`storyforgeShinySweep ${r}s ease-in-out infinite`},u=it.jsxs("span",{style:l,className:s,children:[it.jsx("style",{id:gR,dangerouslySetInnerHTML:{__html:`@keyframes storyforgeShinySweep {
            0% { -webkit-mask-position: 200%; mask-position: 200%; }
            100% { -webkit-mask-position: -100%; mask-position: -100%; }
          }`}}),it.jsx("span",{style:{color:e},children:i}),it.jsx("span",{style:c,"aria-hidden":"true",children:i})]});return t?it.jsx("a",{href:t,style:{textDecoration:"none",display:"inline-flex"},children:u}):u}function vR({text:i,brightColor:t="#FFFFFF",dimColor:e="rgba(237, 230, 221, 0.22)",maskSize:n=150,intensity:r=10,className:s,style:o}){const l=!B1(),c=at.useRef(null),u=at.useRef(null),h=zs(0),f=zs(0),d=zs(0),p=Math.max(10,Math.min(100,r)),_=O1`radial-gradient(circle ${d}px at ${h}px ${f}px, black, black ${p}%, transparent 100%)`;at.useEffect(()=>{if(!l)return;const S=c.current;if(!S)return;const y=E=>{const A=(u.current??S).getBoundingClientRect();h.set(E.clientX-A.left),f.set(E.clientY-A.top)},x=()=>{d.set(n)},M=()=>{d.set(0)};return S.addEventListener("pointermove",y),S.addEventListener("pointerenter",x),S.addEventListener("pointerleave",M),()=>{S.removeEventListener("pointermove",y),S.removeEventListener("pointerenter",x),S.removeEventListener("pointerleave",M)}},[l,n,h,f,d]),at.useEffect(()=>{if(l)return;const S=u.current,y=(S==null?void 0:S.clientWidth)??720,x=(S==null?void 0:S.clientHeight)??240;h.set(y/2),f.set(x/2),d.set(n)},[l,n,h,f,d]);const g={margin:0,boxSizing:"border-box",width:"100%",fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',whiteSpace:"pre-wrap",wordBreak:"break-word",userSelect:"none"},m={...o,position:"relative",boxSizing:"border-box",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",cursor:l?"none":void 0};return it.jsx("div",{ref:c,style:m,className:s,children:it.jsxs("div",{ref:u,style:{position:"relative",width:"100%"},children:[it.jsx("div",{"aria-label":i,style:{...g,position:"relative",color:e},children:i}),it.jsx(Yo.div,{"aria-hidden":!0,style:{...g,position:"absolute",top:0,left:0,color:t,pointerEvents:"none",WebkitMaskImage:_,maskImage:_,WebkitMaskSize:"100%",maskSize:"100%",WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat"},children:i})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vm="185",xR=0,k0=1,yR=2,jc=1,SR=2,qa=3,gs=0,ni=1,Cr=2,Nr=0,ta=1,z0=2,G0=3,H0=4,MR=5,Ls=100,TR=101,ER=102,bR=103,AR=104,wR=200,RR=201,CR=202,PR=203,rd=204,sd=205,DR=206,LR=207,IR=208,NR=209,FR=210,UR=211,OR=212,BR=213,VR=214,od=0,ad=1,ld=2,da=3,cd=4,ud=5,fd=6,hd=7,yS=0,kR=1,zR=2,dr=0,SS=1,MS=2,TS=3,ES=4,bS=5,AS=6,wS=7,RS=300,Qs=301,pa=302,If=303,Nf=304,tf=306,dd=1e3,Lr=1001,pd=1002,Rn=1003,GR=1004,hc=1005,Bn=1006,Ff=1007,Os=1008,Li=1009,CS=1010,PS=1011,Nl=1012,xm=1013,gr=1014,Yi=1015,kr=1016,ym=1017,Sm=1018,Fl=1020,DS=35902,LS=35899,IS=1021,NS=1022,qi=1023,zr=1026,Bs=1027,Mm=1028,Tm=1029,to=1030,Em=1031,bm=1033,Qc=33776,tu=33777,eu=33778,nu=33779,md=35840,gd=35841,_d=35842,vd=35843,xd=36196,yd=37492,Sd=37496,Md=37488,Td=37489,Au=37490,Ed=37491,bd=37808,Ad=37809,wd=37810,Rd=37811,Cd=37812,Pd=37813,Dd=37814,Ld=37815,Id=37816,Nd=37817,Fd=37818,Ud=37819,Od=37820,Bd=37821,Vd=36492,kd=36494,zd=36495,Gd=36283,Hd=36284,wu=36285,Wd=36286,HR=3200,W0=0,WR=1,es="",Ri="srgb",Ru="srgb-linear",Cu="linear",De="srgb",go=7680,X0=519,XR=512,YR=513,qR=514,Am=515,$R=516,KR=517,wm=518,ZR=519,Y0=35044,q0="300 es",ar=2e3,Pu=2001;function JR(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Du(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jR(){const i=Du("canvas");return i.style.display="block",i}const $0={};function K0(...i){const t="THREE."+i.shift();console.log(t,...i)}function FS(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ie(...i){i=FS(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ee(...i){i=FS(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ea(...i){const t=i.join(" ");t in $0||($0[t]=!0,ie(...i))}function QR(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const tC={[od]:ad,[ld]:fd,[cd]:hd,[da]:ud,[ad]:od,[fd]:ld,[hd]:cd,[ud]:da};class oo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=Math.PI/180,Xd=180/Math.PI;function Xl(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[e&63|128]+Dn[e>>8&255]+"-"+Dn[e>>16&255]+Dn[e>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function eC(i,t){return(i%t+t)%t}function Of(i,t,e){return(1-e)*i+e*t}function wa(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Im=class Im{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Im.prototype.isVector2=!0;let ee=Im;class Sa{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(h!==_||l!==f||c!==d||u!==p){let g=l*f+c*d+u*p+h*_;g<0&&(f=-f,d=-d,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){const S=Math.acos(g),y=Math.sin(S);m=Math.sin(m*S)/y,a=Math.sin(a*S)/y,l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+_*a}else{l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+_*a;const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nm=class Nm{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Z0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Z0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bf.copy(this).projectOnVector(t),this.sub(Bf)}reflect(t){return this.sub(Bf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nm.prototype.isVector3=!0;let H=Nm;const Bf=new H,Z0=new Sa,Fm=class Fm{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=r[0],g=r[3],m=r[6],S=r[1],y=r[4],x=r[7],M=r[2],E=r[5],A=r[8];return s[0]=o*_+a*S+l*M,s[3]=o*g+a*y+l*E,s[6]=o*m+a*x+l*A,s[1]=c*_+u*S+h*M,s[4]=c*g+u*y+h*E,s[7]=c*m+u*x+h*A,s[2]=f*_+d*S+p*M,s[5]=f*g+d*y+p*E,s[8]=f*m+d*x+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,p=e*h+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=h*_,t[1]=(r*c-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ea("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vf.makeScale(t,e)),this}rotate(t){return ea("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vf.makeRotation(-t)),this}translate(t,e){return ea("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Fm.prototype.isMatrix3=!0;let oe=Fm;const Vf=new oe,J0=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),j0=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nC(){const i={enabled:!0,workingColorSpace:Ru,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===De&&(r.r=Fr(r.r),r.g=Fr(r.g),r.b=Fr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===De&&(r.r=na(r.r),r.g=na(r.g),r.b=na(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===es?Cu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ea("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ea("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ru]:{primaries:t,whitePoint:n,transfer:Cu,toXYZ:J0,fromXYZ:j0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:t,whitePoint:n,transfer:De,toXYZ:J0,fromXYZ:j0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),i}const Se=nC();function Fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function na(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _o;class iC{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_o===void 0&&(_o=Du("canvas")),_o.width=t.width,_o.height=t.height;const r=_o.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=_o}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Du("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fr(e[n]/255)*255):e[n]=Fr(e[n]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rC=0;class Rm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=Xl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kf(r[o].image)):s.push(kf(r[o]))}else s=kf(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function kf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iC.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let sC=0;const zf=new H;class kn extends oo{constructor(t=kn.DEFAULT_IMAGE,e=kn.DEFAULT_MAPPING,n=Lr,r=Lr,s=Bn,o=Os,a=qi,l=Li,c=kn.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sC++}),this.uuid=Xl(),this.name="",this.source=new Rm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zf).x}get height(){return this.source.getSize(zf).y}get depth(){return this.source.getSize(zf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==RS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dd:t.x=t.x-Math.floor(t.x);break;case Lr:t.x=t.x<0?0:1;break;case pd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dd:t.y=t.y-Math.floor(t.y);break;case Lr:t.y=t.y<0?0:1;break;case pd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=RS;kn.DEFAULT_ANISOTROPY=1;const Um=class Um{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(d+1)/2,M=(m+1)/2,E=(u+f)/4,A=(h+_)/4,v=(p+g)/4;return y>x&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=E/n,s=A/n):x>M?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=E/r,s=v/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=v/s),this.set(n,r,s,e),this}let S=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Um.prototype.isVector4=!0;let nn=Um;class oC extends oo{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new nn(0,0,t,e),this.scissorTest=!1,this.viewport=new nn(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new kn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Rm(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends oC{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class US extends kn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class aC extends kn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ku=class ku{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,_,g)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ku().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,r=1/vo.setFromMatrixColumn(t,0).length(),s=1/vo.setFromMatrixColumn(t,1).length(),o=1/vo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,p=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,p=c*u,_=c*h;e[0]=f+_*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,p=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,p=a*u,_=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lC,t,cC)}lookAt(t,e,n){const r=this.elements;return oi.subVectors(t,e),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),qr.crossVectors(n,oi),qr.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),qr.crossVectors(n,oi)),qr.normalize(),dc.crossVectors(oi,qr),r[0]=qr.x,r[4]=dc.x,r[8]=oi.x,r[1]=qr.y,r[5]=dc.y,r[9]=oi.y,r[2]=qr.z,r[6]=dc.z,r[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],S=n[3],y=n[7],x=n[11],M=n[15],E=r[0],A=r[4],v=r[8],b=r[12],w=r[1],C=r[5],L=r[9],V=r[13],U=r[2],P=r[6],F=r[10],N=r[14],O=r[3],W=r[7],I=r[11],et=r[15];return s[0]=o*E+a*w+l*U+c*O,s[4]=o*A+a*C+l*P+c*W,s[8]=o*v+a*L+l*F+c*I,s[12]=o*b+a*V+l*N+c*et,s[1]=u*E+h*w+f*U+d*O,s[5]=u*A+h*C+f*P+d*W,s[9]=u*v+h*L+f*F+d*I,s[13]=u*b+h*V+f*N+d*et,s[2]=p*E+_*w+g*U+m*O,s[6]=p*A+_*C+g*P+m*W,s[10]=p*v+_*L+g*F+m*I,s[14]=p*b+_*V+g*N+m*et,s[3]=S*E+y*w+x*U+M*O,s[7]=S*A+y*C+x*P+M*W,s[11]=S*v+y*L+x*F+M*I,s[15]=S*b+y*V+x*N+M*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15],S=l*d-c*f,y=a*d-c*h,x=a*f-l*h,M=o*d-c*u,E=o*f-l*u,A=o*h-a*u;return e*(_*S-g*y+m*x)-n*(p*S-g*M+m*E)+r*(p*y-_*M+m*A)-s*(p*x-_*E+g*A)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],S=e*a-n*o,y=e*l-r*o,x=e*c-s*o,M=n*l-r*a,E=n*c-s*a,A=r*c-s*l,v=u*_-h*p,b=u*g-f*p,w=u*m-d*p,C=h*g-f*_,L=h*m-d*_,V=f*m-d*g,U=S*V-y*L+x*C+M*w-E*b+A*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/U;return t[0]=(a*V-l*L+c*C)*P,t[1]=(r*L-n*V-s*C)*P,t[2]=(_*A-g*E+m*M)*P,t[3]=(f*E-h*A-d*M)*P,t[4]=(l*w-o*V-c*b)*P,t[5]=(e*V-r*w+s*b)*P,t[6]=(g*x-p*A-m*y)*P,t[7]=(u*A-f*x+d*y)*P,t[8]=(o*L-a*w+c*v)*P,t[9]=(n*w-e*L-s*v)*P,t[10]=(p*E-_*x+m*S)*P,t[11]=(h*x-u*E-d*S)*P,t[12]=(a*b-o*C-l*v)*P,t[13]=(e*C-n*b+r*v)*P,t[14]=(_*y-p*M-g*S)*P,t[15]=(u*M-h*y+f*S)*P,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,p=s*h,_=o*u,g=o*h,m=a*h,S=l*c,y=l*u,x=l*h,M=n.x,E=n.y,A=n.z;return r[0]=(1-(_+m))*M,r[1]=(d+x)*M,r[2]=(p-y)*M,r[3]=0,r[4]=(d-x)*E,r[5]=(1-(f+m))*E,r[6]=(g+S)*E,r[7]=0,r[8]=(p+y)*A,r[9]=(g-S)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=vo.set(r[0],r[1],r[2]).length();const a=vo.set(r[4],r[5],r[6]).length(),l=vo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ki.copy(this);const c=1/o,u=1/a,h=1/l;return ki.elements[0]*=c,ki.elements[1]*=c,ki.elements[2]*=c,ki.elements[4]*=u,ki.elements[5]*=u,ki.elements[6]*=u,ki.elements[8]*=h,ki.elements[9]*=h,ki.elements[10]*=h,e.setFromRotationMatrix(ki),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=ar,l=!1){const c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===ar)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Pu)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=ar,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r);let p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===ar)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Pu)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ku.prototype.isMatrix4=!0;let We=ku;const vo=new H,ki=new We,lC=new H(0,0,0),cC=new H(1,1,1),qr=new H,dc=new H,oi=new H,Q0=new We,t_=new Sa;class eo{constructor(t=0,e=0,n=0,r=eo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Q0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Q0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return t_.setFromEuler(this),this.setFromQuaternion(t_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}eo.DEFAULT_ORDER="XYZ";class Cm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uC=0;const e_=new H,xo=new Sa,xr=new We,pc=new H,Ra=new H,fC=new H,hC=new Sa,n_=new H(1,0,0),i_=new H(0,1,0),r_=new H(0,0,1),s_={type:"added"},dC={type:"removed"},yo={type:"childadded",child:null},Gf={type:"childremoved",child:null};class xi extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uC++}),this.uuid=Xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xi.DEFAULT_UP.clone();const t=new H,e=new eo,n=new Sa,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new oe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=xi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xo.setFromAxisAngle(t,e),this.quaternion.multiply(xo),this}rotateOnWorldAxis(t,e){return xo.setFromAxisAngle(t,e),this.quaternion.premultiply(xo),this}rotateX(t){return this.rotateOnAxis(n_,t)}rotateY(t){return this.rotateOnAxis(i_,t)}rotateZ(t){return this.rotateOnAxis(r_,t)}translateOnAxis(t,e){return e_.copy(t).applyQuaternion(this.quaternion),this.position.add(e_.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(n_,t)}translateY(t){return this.translateOnAxis(i_,t)}translateZ(t){return this.translateOnAxis(r_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pc.copy(t):pc.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Ra,pc,this.up):xr.lookAt(pc,Ra,this.up),this.quaternion.setFromRotationMatrix(xr),r&&(xr.extractRotation(r.matrixWorld),xo.setFromRotationMatrix(xr),this.quaternion.premultiply(xo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s_),yo.child=t,this.dispatchEvent(yo),yo.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dC),Gf.child=t,this.dispatchEvent(Gf),Gf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xr.multiply(t.parent.matrixWorld)),t.applyMatrix4(xr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s_),yo.child=t,this.dispatchEvent(yo),yo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,t,fC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,hC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}xi.DEFAULT_UP=new H(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vs extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pC={type:"move"};class Hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const OS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Wf(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class de{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Se.workingColorSpace){if(t=eC(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Wf(o,s,t+1/3),this.g=Wf(o,s,t),this.b=Wf(o,s,t-1/3)}return Se.colorSpaceToWorking(this,r),this}setStyle(t,e=Ri){function n(s){s!==void 0&&parseFloat(s)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ri){const n=OS[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}copyLinearToSRGB(t){return this.r=na(t.r),this.g=na(t.g),this.b=na(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ri){return Se.workingToColorSpace(Ln.copy(this),t),Math.round(ve(Ln.r*255,0,255))*65536+Math.round(ve(Ln.g*255,0,255))*256+Math.round(ve(Ln.b*255,0,255))}getHexString(t=Ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(Ln.copy(this),e);const n=Ln.r,r=Ln.g,s=Ln.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=Ri){Se.workingToColorSpace(Ln.copy(this),t);const e=Ln.r,n=Ln.g,r=Ln.b;return t!==Ri?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL($r),this.setHSL($r.h+t,$r.s+e,$r.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($r),t.getHSL(mc);const n=Of($r.h,mc.h,e),r=Of($r.s,mc.s,e),s=Of($r.l,mc.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new de;de.NAMES=OS;class mC extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new eo,this.environmentIntensity=1,this.environmentRotation=new eo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const zi=new H,yr=new H,Xf=new H,Sr=new H,So=new H,Mo=new H,o_=new H,Yf=new H,qf=new H,$f=new H,Kf=new nn,Zf=new nn,Jf=new nn;class Xi{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),zi.subVectors(t,e),r.cross(zi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){zi.subVectors(r,e),yr.subVectors(n,e),Xf.subVectors(t,e);const o=zi.dot(zi),a=zi.dot(yr),l=zi.dot(Xf),c=yr.dot(yr),u=yr.dot(Xf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sr.x),l.addScaledVector(o,Sr.y),l.addScaledVector(a,Sr.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Kf.setScalar(0),Zf.setScalar(0),Jf.setScalar(0),Kf.fromBufferAttribute(t,e),Zf.fromBufferAttribute(t,n),Jf.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Kf,s.x),o.addScaledVector(Zf,s.y),o.addScaledVector(Jf,s.z),o}static isFrontFacing(t,e,n,r){return zi.subVectors(n,e),yr.subVectors(t,e),zi.cross(yr).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),zi.cross(yr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Xi.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;So.subVectors(r,n),Mo.subVectors(s,n),Yf.subVectors(t,n);const l=So.dot(Yf),c=Mo.dot(Yf);if(l<=0&&c<=0)return e.copy(n);qf.subVectors(t,r);const u=So.dot(qf),h=Mo.dot(qf);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(So,o);$f.subVectors(t,s);const d=So.dot($f),p=Mo.dot($f);if(p>=0&&d<=p)return e.copy(s);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Mo,a);const g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return o_.subVectors(s,r),a=(h-u)/(h-u+(d-p)),e.copy(r).addScaledVector(o_,a);const m=1/(g+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(So,o).addScaledVector(Mo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ao{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gi):Gi.fromBufferAttribute(s,o),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gc.copy(n.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ca),_c.subVectors(this.max,Ca),To.subVectors(t.a,Ca),Eo.subVectors(t.b,Ca),bo.subVectors(t.c,Ca),Kr.subVectors(Eo,To),Zr.subVectors(bo,Eo),Ms.subVectors(To,bo);let e=[0,-Kr.z,Kr.y,0,-Zr.z,Zr.y,0,-Ms.z,Ms.y,Kr.z,0,-Kr.x,Zr.z,0,-Zr.x,Ms.z,0,-Ms.x,-Kr.y,Kr.x,0,-Zr.y,Zr.x,0,-Ms.y,Ms.x,0];return!jf(e,To,Eo,bo,_c)||(e=[1,0,0,0,1,0,0,0,1],!jf(e,To,Eo,bo,_c))?!1:(vc.crossVectors(Kr,Zr),e=[vc.x,vc.y,vc.z],jf(e,To,Eo,bo,_c))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mr=[new H,new H,new H,new H,new H,new H,new H,new H],Gi=new H,gc=new ao,To=new H,Eo=new H,bo=new H,Kr=new H,Zr=new H,Ms=new H,Ca=new H,_c=new H,vc=new H,Ts=new H;function jf(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ts.fromArray(i,s);const a=r.x*Math.abs(Ts.x)+r.y*Math.abs(Ts.y)+r.z*Math.abs(Ts.z),l=t.dot(Ts),c=e.dot(Ts),u=n.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dn=new H,xc=new ee;let gC=0;class $i extends oo{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gC++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Y0,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xc.fromBufferAttribute(this,e),xc.applyMatrix3(t),this.setXY(e,xc.x,xc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wa(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wa(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wa(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wa(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array),r=Kn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array),r=Kn(r,this.array),s=Kn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Y0&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class BS extends $i{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class VS extends $i{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $n extends $i{constructor(t,e,n){super(new Float32Array(t),e,n)}}const _C=new ao,Pa=new H,Qf=new H;class Yl{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_C.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pa.subVectors(t,this.center);const e=Pa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Pa,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pa.copy(t.center).add(Qf)),this.expandByPoint(Pa.copy(t.center).sub(Qf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let vC=0;const bi=new We,th=new xi,Ao=new H,ai=new ao,Da=new ao,yn=new H;class Ki extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vC++}),this.uuid=Xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(JR(t)?VS:BS)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new oe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,e,n){return bi.makeTranslation(t,e,n),this.applyMatrix4(bi),this}scale(t,e,n){return bi.makeScale(t,e,n),this.applyMatrix4(bi),this}lookAt(t){return th.lookAt(t),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $n(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Da.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(ai.min,Da.min),ai.expandByPoint(yn),yn.addVectors(ai.max,Da.max),ai.expandByPoint(yn)):(ai.expandByPoint(Da.min),ai.expandByPoint(Da.max))}ai.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)yn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(yn));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yn.fromBufferAttribute(a,c),l&&(Ao.fromBufferAttribute(t,c),yn.add(Ao)),r=Math.max(r,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new $i(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new H,l[v]=new H;const c=new H,u=new H,h=new H,f=new ee,d=new ee,p=new ee,_=new H,g=new H;function m(v,b,w){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),f.fromBufferAttribute(s,v),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,w),u.sub(c),h.sub(c),d.sub(f),p.sub(f);const C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(C),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(C),a[v].add(_),a[b].add(_),a[w].add(_),l[v].add(g),l[b].add(g),l[w].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,b=S.length;v<b;++v){const w=S[v],C=w.start,L=w.count;for(let V=C,U=C+L;V<U;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const y=new H,x=new H,M=new H,E=new H;function A(v){M.fromBufferAttribute(r,v),E.copy(M);const b=a[v];y.copy(b),y.sub(M.multiplyScalar(M.dot(b))).normalize(),x.crossVectors(E,b);const C=x.dot(l[v])<0?-1:1;o.setXYZW(v,y.x,y.y,y.z,C)}for(let v=0,b=S.length;v<b;++v){const w=S[v],C=w.start,L=w.count;for(let V=C,U=C+L;V<U;V+=3)A(t.getX(V+0)),A(t.getX(V+1)),A(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $i(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)yn.fromBufferAttribute(t,e),yn.normalize(),t.setXYZ(e,yn.x,yn.y,yn.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new $i(f,u,h)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ki,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let xC=0;class ef extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xC++}),this.uuid=Xl(),this.name="",this.type="Material",this.blending=ta,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(n.blending=this.blending),this.side!==gs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rd&&(n.blendSrc=this.blendSrc),this.blendDst!==sd&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==da&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(n.stencilFail=this.stencilFail),this.stencilZFail!==go&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ee().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Tr=new H,eh=new H,yc=new H,Jr=new H,nh=new H,Sc=new H,ih=new H;class kS{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tr.copy(this.origin).addScaledVector(this.direction,e),Tr.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){eh.copy(t).add(e).multiplyScalar(.5),yc.copy(e).sub(t).normalize(),Jr.copy(this.origin).sub(eh);const s=t.distanceTo(e)*.5,o=-this.direction.dot(yc),a=Jr.dot(this.direction),l=-Jr.dot(yc),c=Jr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(eh).addScaledVector(yc,f),d}intersectSphere(t,e){Tr.subVectors(t.center,this.origin);const n=Tr.dot(this.direction),r=Tr.dot(Tr)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Tr)!==null}intersectTriangle(t,e,n,r,s){nh.subVectors(e,t),Sc.subVectors(n,t),ih.crossVectors(nh,Sc);let o=this.direction.dot(ih),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jr.subVectors(this.origin,t);const l=a*this.direction.dot(Sc.crossVectors(Jr,Sc));if(l<0)return null;const c=a*this.direction.dot(nh.cross(Jr));if(c<0||l+c>o)return null;const u=-a*Jr.dot(ih);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ar extends ef{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new eo,this.combine=yS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const a_=new We,Es=new kS,Mc=new Yl,l_=new H,Tc=new H,Ec=new H,bc=new H,rh=new H,Ac=new H,c_=new H,wc=new H;class En extends xi{constructor(t=new Ki,e=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ac.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(rh.fromBufferAttribute(h,t),o?Ac.addScaledVector(rh,u):Ac.addScaledVector(rh.sub(e),u))}e.add(Ac)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mc.copy(n.boundingSphere),Mc.applyMatrix4(s),Es.copy(t.ray).recast(t.near),!(Mc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Mc,l_)===null||Es.origin.distanceToSquared(l_)>(t.far-t.near)**2))&&(a_.copy(s).invert(),Es.copy(t.ray).applyMatrix4(a_),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,M=y;x<M;x+=3){const E=a.getX(x),A=a.getX(x+1),v=a.getX(x+2);r=Rc(this,m,t,n,c,u,h,E,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const S=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);r=Rc(this,o,t,n,c,u,h,S,y,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,M=y;x<M;x+=3){const E=x,A=x+1,v=x+2;r=Rc(this,m,t,n,c,u,h,E,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const S=g,y=g+1,x=g+2;r=Rc(this,o,t,n,c,u,h,S,y,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function yC(i,t,e,n,r,s,o,a){let l;if(t.side===ni?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===gs,a),l===null)return null;wc.copy(a),wc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(wc);return c<e.near||c>e.far?null:{distance:c,point:wc.clone(),object:i}}function Rc(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Tc),i.getVertexPosition(l,Ec),i.getVertexPosition(c,bc);const u=yC(i,t,e,n,Tc,Ec,bc,c_);if(u){const h=new H;Xi.getBarycoord(c_,Tc,Ec,bc,h),r&&(u.uv=Xi.getInterpolatedAttribute(r,a,l,c,h,new ee)),s&&(u.uv1=Xi.getInterpolatedAttribute(s,a,l,c,h,new ee)),o&&(u.normal=Xi.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};Xi.getNormal(Tc,Ec,bc,f.normal),u.face=f,u.barycoord=h}return u}class zS extends kn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Rn,u=Rn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class u_ extends $i{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wo=new We,f_=new We,Cc=[],h_=new ao,SC=new We,La=new En,Ia=new Yl;class MC extends En{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new u_(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,SC)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ao),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wo),h_.copy(t.boundingBox).applyMatrix4(wo),this.boundingBox.union(h_)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wo),Ia.copy(t.boundingSphere).applyMatrix4(wo),this.boundingSphere.union(Ia)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(n),t.ray.intersectsSphere(Ia)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,wo),f_.multiplyMatrices(n,wo),La.matrixWorld=f_,La.raycast(t,Cc);for(let o=0,a=Cc.length;o<a;o++){const l=Cc[o];l.instanceId=s,l.object=this,e.push(l)}Cc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new u_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new zS(new Float32Array(r*this.count),r,this.count,Mm,Yi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sh=new H,TC=new H,EC=new oe;class Ds{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=sh.subVectors(n,e).cross(TC.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const r=t.delta(sh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||EC.getNormalMatrix(t),r=this.coplanarPoint(sh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Yl,bC=new ee(.5,.5),Pc=new H;class GS{constructor(t=new Ds,e=new Ds,n=new Ds,r=new Ds,s=new Ds,o=new Ds){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ar,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],S=s[12],y=s[13],x=s[14],M=s[15];if(r[0].setComponents(c-o,d-u,m-p,M-S).normalize(),r[1].setComponents(c+o,d+u,m+p,M+S).normalize(),r[2].setComponents(c+a,d+h,m+_,M+y).normalize(),r[3].setComponents(c-a,d-h,m-_,M-y).normalize(),n)r[4].setComponents(l,f,g,x).normalize(),r[5].setComponents(c-l,d-f,m-g,M-x).normalize();else if(r[4].setComponents(c-l,d-f,m-g,M-x).normalize(),e===ar)r[5].setComponents(c+l,d+f,m+g,M+x).normalize();else if(e===Pu)r[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);const e=bC.distanceTo(t.center);return bs.radius=.7071067811865476+e,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Pc.x=r.normal.x>0?t.max.x:t.min.x,Pc.y=r.normal.y>0?t.max.y:t.min.y,Pc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class HS extends kn{constructor(t=[],e=Qs,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class AC extends kn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ma extends kn{constructor(t,e,n=gr,r,s,o,a=Rn,l=Rn,c,u=zr,h=1){if(u!==zr&&u!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wC extends ma{constructor(t,e=gr,n=Qs,r,s,o=Rn,a=Rn,l,c=zr){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class WS extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ql extends Ki{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new $n(c,3)),this.setAttribute("normal",new $n(u,3)),this.setAttribute("uv",new $n(h,2));function p(_,g,m,S,y,x,M,E,A,v,b){const w=x/A,C=M/v,L=x/2,V=M/2,U=E/2,P=A+1,F=v+1;let N=0,O=0;const W=new H;for(let I=0;I<F;I++){const et=I*C-V;for(let lt=0;lt<P;lt++){const Pt=lt*w-L;W[_]=Pt*S,W[g]=et*y,W[m]=U,c.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[m]=E>0?1:-1,u.push(W.x,W.y,W.z),h.push(lt/A),h.push(1-I/v),N+=1}}for(let I=0;I<v;I++)for(let et=0;et<A;et++){const lt=f+et+P*I,Pt=f+et+P*(I+1),Lt=f+(et+1)+P*(I+1),Tt=f+(et+1)+P*I;l.push(lt,Pt,Tt),l.push(Pt,Lt,Tt),O+=6}a.addGroup(d,O,b),d+=O,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ql(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Hr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ie("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ee:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new H,r=[],s=[],o=[],a=new H,l=new We;for(let d=0;d<=t;d++){const p=d/t;r[d]=this.getTangentAt(p,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ve(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(ve(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],d*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class XS extends Hr{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ee){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class RC extends XS{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pm(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const d_=new H,p_=new H,oh=new Pm,ah=new Pm,lh=new Pm;class $a extends Hr{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new H){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(p_.subVectors(r[0],r[1]).add(r[0]),c=p_);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(d_.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=d_),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),oh.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,_,g),ah.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,_,g),lh.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(oh.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ah.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),lh.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(oh.calc(l),ah.calc(l),lh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new H().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function m_(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function CC(i,t){const e=1-i;return e*e*t}function PC(i,t){return 2*(1-i)*i*t}function DC(i,t){return i*i*t}function vl(i,t,e,n){return CC(i,t)+PC(i,e)+DC(i,n)}function LC(i,t){const e=1-i;return e*e*e*t}function IC(i,t){const e=1-i;return 3*e*e*i*t}function NC(i,t){return 3*(1-i)*i*i*t}function FC(i,t){return i*i*i*t}function xl(i,t,e,n,r){return LC(i,t)+IC(i,e)+NC(i,n)+FC(i,r)}class UC extends Hr{constructor(t=new ee,e=new ee,n=new ee,r=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ee){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xl(t,r.x,s.x,o.x,a.x),xl(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class OC extends Hr{constructor(t=new H,e=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new H){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xl(t,r.x,s.x,o.x,a.x),xl(t,r.y,s.y,o.y,a.y),xl(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class BC extends Hr{constructor(t=new ee,e=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ee){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ee){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class VC extends Hr{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kC extends Hr{constructor(t=new ee,e=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ee){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(vl(t,r.x,s.x,o.x),vl(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class YS extends Hr{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(vl(t,r.x,s.x,o.x),vl(t,r.y,s.y,o.y),vl(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zC extends Hr{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ee){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(m_(a,l.x,c.x,u.x,h.x),m_(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ee().fromArray(r))}return this}}var GC=Object.freeze({__proto__:null,ArcCurve:RC,CatmullRomCurve3:$a,CubicBezierCurve:UC,CubicBezierCurve3:OC,EllipseCurve:XS,LineCurve:BC,LineCurve3:VC,QuadraticBezierCurve:kC,QuadraticBezierCurve3:YS,SplineCurve:zC});class nf extends Ki{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const S=m*f-o;for(let y=0;y<c;y++){const x=y*h-s;p.push(x,-S,0),_.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const y=S+c*m,x=S+c*(m+1),M=S+1+c*(m+1),E=S+1+c*m;d.push(y,x,E),d.push(x,M,E)}this.setIndex(d),this.setAttribute("position",new $n(p,3)),this.setAttribute("normal",new $n(_,3)),this.setAttribute("uv",new $n(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nf(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ho extends Ki{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new H,f=new H,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const S=[],y=m/n,x=o+y*a,M=t*Math.cos(x),E=Math.sqrt(t*t-M*M);let A=0;m===0&&o===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){const b=v/e,w=r+b*s;h.x=-E*Math.cos(w),h.y=M,h.z=E*Math.sin(w),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(b+A,1-y),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const y=u[m][S+1],x=u[m][S],M=u[m+1][S],E=u[m+1][S+1];(m!==0||o>0)&&d.push(y,x,E),(m!==n-1||l<Math.PI)&&d.push(x,M,E)}this.setIndex(d),this.setAttribute("position",new $n(p,3)),this.setAttribute("normal",new $n(_,3)),this.setAttribute("uv",new $n(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wo extends Ki{constructor(t=new YS(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new H,l=new H,c=new ee;let u=new H;const h=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new $n(h,3)),this.setAttribute("normal",new $n(f,3)),this.setAttribute("uv",new $n(d,2));function _(){for(let y=0;y<e;y++)g(y);g(s===!1?e:0),S(),m()}function g(y){u=t.getPointAt(y/e,u);const x=o.normals[y],M=o.binormals[y];for(let E=0;E<=r;E++){const A=E/r*Math.PI*2,v=Math.sin(A),b=-Math.cos(A);l.x=b*x.x+v*M.x,l.y=b*x.y+v*M.y,l.z=b*x.z+v*M.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let x=1;x<=r;x++){const M=(r+1)*(y-1)+(x-1),E=(r+1)*y+(x-1),A=(r+1)*y+x,v=(r+1)*(y-1)+x;p.push(M,E,v),p.push(E,A,v)}}function S(){for(let y=0;y<=e;y++)for(let x=0;x<=r;x++)c.x=y/e,c.y=x/r,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Wo(new GC[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ga(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];if(g_(r))r.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(g_(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function Hn(i){const t={};for(let e=0;e<i.length;e++){const n=ga(i[e]);for(const r in n)t[r]=n[r]}return t}function g_(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function HC(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qS(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const WC={clone:ga,merge:Hn};var XC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends ef{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XC,this.fragmentShader=YC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ga(t.uniforms),this.uniformsGroups=HC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(r.value);break;case"v2":this.uniforms[n].value=new ee().fromArray(r.value);break;case"v3":this.uniforms[n].value=new H().fromArray(r.value);break;case"v4":this.uniforms[n].value=new nn().fromArray(r.value);break;case"m3":this.uniforms[n].value=new oe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new We().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class qC extends _r{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $C extends ef{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class KC extends ef{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dc=new H,Lc=new Sa,Ji=new H;class $S extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ar,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Dc,Lc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Lc,Ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Dc,Lc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Lc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jr=new H,__=new ee,v_=new ee;class Di extends $S{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xd*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(Uf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jr.x,jr.y).multiplyScalar(-t/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jr.x,jr.y).multiplyScalar(-t/jr.z)}getViewSize(t,e){return this.getViewBounds(t,__,v_),e.subVectors(v_,__)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Uf*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class KS extends $S{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ro=-90,Co=1;class ZC extends xi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Di(Ro,Co,t,e);r.layers=this.layers,this.add(r);const s=new Di(Ro,Co,t,e);s.layers=this.layers,this.add(s);const o=new Di(Ro,Co,t,e);o.layers=this.layers,this.add(o);const a=new Di(Ro,Co,t,e);a.layers=this.layers,this.add(a);const l=new Di(Ro,Co,t,e);l.layers=this.layers,this.add(l);const c=new Di(Ro,Co,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===ar)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pu)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class JC extends Di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const x_=new We;class jC{constructor(t,e,n=0,r=1/0){this.ray=new kS(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Cm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return x_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(x_),this}intersectObject(t,e=!0,n=[]){return Yd(t,this,n,e),n.sort(y_),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Yd(t[r],this,n,e);return n.sort(y_),n}}function y_(i,t){return i.distance-t.distance}function Yd(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Yd(s[o],t,e,!0)}}const Om=class Om{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Om.prototype.isMatrix2=!0;let S_=Om;function M_(i,t,e,n){const r=QC(n);switch(e){case IS:return i*t;case Mm:return i*t/r.components*r.byteLength;case Tm:return i*t/r.components*r.byteLength;case to:return i*t*2/r.components*r.byteLength;case Em:return i*t*2/r.components*r.byteLength;case NS:return i*t*3/r.components*r.byteLength;case qi:return i*t*4/r.components*r.byteLength;case bm:return i*t*4/r.components*r.byteLength;case Qc:case tu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case eu:case nu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gd:case vd:return Math.max(i,16)*Math.max(t,8)/4;case md:case _d:return Math.max(i,8)*Math.max(t,8)/2;case xd:case yd:case Md:case Td:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sd:case Au:case Ed:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Od:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vd:case kd:case zd:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gd:case Hd:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wu:case Wd:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function QC(i){switch(i){case Li:case CS:return{byteLength:1,components:1};case Nl:case PS:case kr:return{byteLength:2,components:1};case ym:case Sm:return{byteLength:2,components:4};case gr:case xm:case Yi:return{byteLength:4,components:1};case DS:case LS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vm}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ZS(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function tP(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){const p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var eP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_P=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,SP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,MP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,EP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DP="gl_FragColor = linearToOutputTexel( gl_FragColor );",LP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,NP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,FP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$P=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iD=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_D=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ED=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,DD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ID=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ND=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$D=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,t2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,f2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:eP,alphahash_pars_fragment:nP,alphamap_fragment:iP,alphamap_pars_fragment:rP,alphatest_fragment:sP,alphatest_pars_fragment:oP,aomap_fragment:aP,aomap_pars_fragment:lP,batching_pars_vertex:cP,batching_vertex:uP,begin_vertex:fP,beginnormal_vertex:hP,bsdfs:dP,iridescence_fragment:pP,bumpmap_pars_fragment:mP,clipping_planes_fragment:gP,clipping_planes_pars_fragment:_P,clipping_planes_pars_vertex:vP,clipping_planes_vertex:xP,color_fragment:yP,color_pars_fragment:SP,color_pars_vertex:MP,color_vertex:TP,common:EP,cube_uv_reflection_fragment:bP,defaultnormal_vertex:AP,displacementmap_pars_vertex:wP,displacementmap_vertex:RP,emissivemap_fragment:CP,emissivemap_pars_fragment:PP,colorspace_fragment:DP,colorspace_pars_fragment:LP,envmap_fragment:IP,envmap_common_pars_fragment:NP,envmap_pars_fragment:FP,envmap_pars_vertex:UP,envmap_physical_pars_fragment:qP,envmap_vertex:OP,fog_vertex:BP,fog_pars_vertex:VP,fog_fragment:kP,fog_pars_fragment:zP,gradientmap_pars_fragment:GP,lightmap_pars_fragment:HP,lights_lambert_fragment:WP,lights_lambert_pars_fragment:XP,lights_pars_begin:YP,lights_toon_fragment:$P,lights_toon_pars_fragment:KP,lights_phong_fragment:ZP,lights_phong_pars_fragment:JP,lights_physical_fragment:jP,lights_physical_pars_fragment:QP,lights_fragment_begin:tD,lights_fragment_maps:eD,lights_fragment_end:nD,lightprobes_pars_fragment:iD,logdepthbuf_fragment:rD,logdepthbuf_pars_fragment:sD,logdepthbuf_pars_vertex:oD,logdepthbuf_vertex:aD,map_fragment:lD,map_pars_fragment:cD,map_particle_fragment:uD,map_particle_pars_fragment:fD,metalnessmap_fragment:hD,metalnessmap_pars_fragment:dD,morphinstance_vertex:pD,morphcolor_vertex:mD,morphnormal_vertex:gD,morphtarget_pars_vertex:_D,morphtarget_vertex:vD,normal_fragment_begin:xD,normal_fragment_maps:yD,normal_pars_fragment:SD,normal_pars_vertex:MD,normal_vertex:TD,normalmap_pars_fragment:ED,clearcoat_normal_fragment_begin:bD,clearcoat_normal_fragment_maps:AD,clearcoat_pars_fragment:wD,iridescence_pars_fragment:RD,opaque_fragment:CD,packing:PD,premultiplied_alpha_fragment:DD,project_vertex:LD,dithering_fragment:ID,dithering_pars_fragment:ND,roughnessmap_fragment:FD,roughnessmap_pars_fragment:UD,shadowmap_pars_fragment:OD,shadowmap_pars_vertex:BD,shadowmap_vertex:VD,shadowmask_pars_fragment:kD,skinbase_vertex:zD,skinning_pars_vertex:GD,skinning_vertex:HD,skinnormal_vertex:WD,specularmap_fragment:XD,specularmap_pars_fragment:YD,tonemapping_fragment:qD,tonemapping_pars_fragment:$D,transmission_fragment:KD,transmission_pars_fragment:ZD,uv_pars_fragment:JD,uv_pars_vertex:jD,uv_vertex:QD,worldpos_vertex:t2,background_vert:e2,background_frag:n2,backgroundCube_vert:i2,backgroundCube_frag:r2,cube_vert:s2,cube_frag:o2,depth_vert:a2,depth_frag:l2,distance_vert:c2,distance_frag:u2,equirect_vert:f2,equirect_frag:h2,linedashed_vert:d2,linedashed_frag:p2,meshbasic_vert:m2,meshbasic_frag:g2,meshlambert_vert:_2,meshlambert_frag:v2,meshmatcap_vert:x2,meshmatcap_frag:y2,meshnormal_vert:S2,meshnormal_frag:M2,meshphong_vert:T2,meshphong_frag:E2,meshphysical_vert:b2,meshphysical_frag:A2,meshtoon_vert:w2,meshtoon_frag:R2,points_vert:C2,points_frag:P2,shadow_vert:D2,shadow_frag:L2,sprite_vert:I2,sprite_frag:N2},Ut={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},er={basic:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Hn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Hn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new de(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Hn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Hn([Ut.points,Ut.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Hn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Hn([Ut.common,Ut.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Hn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Hn([Ut.sprite,Ut.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Hn([Ut.common,Ut.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Hn([Ut.lights,Ut.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};er.physical={uniforms:Hn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Ic={r:0,b:0,g:0},F2=new We,JS=new oe;JS.set(-1,0,0,0,1,0,0,0,1);function U2(i,t,e,n,r,s){const o=new de(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(S){let y=S.isScene===!0?S.background:null;if(y&&y.isTexture){const x=S.backgroundBlurriness>0;y=t.get(y,x)}return y}function p(S){let y=!1;const x=d(S);x===null?g(o,a):x&&x.isColor&&(g(x,1),y=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,y){const x=d(y);x&&(x.isCubeTexture||x.mapping===tf)?(c===void 0&&(c=new En(new ql(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:ga(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(F2.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(JS),c.material.toneMapped=Se.getTransfer(x.colorSpace)!==De,(u!==x||h!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new En(new nf(2,2),new _r({name:"BackgroundMaterial",uniforms:ga(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Se.getTransfer(x.colorSpace)!==De,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,y){S.getRGB(Ic,qS(i)),e.buffers.color.setClear(Ic.r,Ic.g,Ic.b,y,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:p,addToRenderList:_,dispose:m}}function O2(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(C,L,V,U,P){let F=!1;const N=h(C,U,V,L);s!==N&&(s=N,c(s.object)),F=d(C,U,V,P),F&&p(C,U,V,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,x(C,L,V,U),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function h(C,L,V,U){const P=U.wireframe===!0;let F=n[L.id];F===void 0&&(F={},n[L.id]=F);const N=C.isInstancedMesh===!0?C.id:0;let O=F[N];O===void 0&&(O={},F[N]=O);let W=O[V.id];W===void 0&&(W={},O[V.id]=W);let I=W[P];return I===void 0&&(I=f(l()),W[P]=I),I}function f(C){const L=[],V=[],U=[];for(let P=0;P<e;P++)L[P]=0,V[P]=0,U[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:U,object:C,attributes:{},index:null}}function d(C,L,V,U){const P=s.attributes,F=L.attributes;let N=0;const O=V.getAttributes();for(const W in O)if(O[W].location>=0){const et=P[W];let lt=F[W];if(lt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(lt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(lt=C.instanceColor)),et===void 0||et.attribute!==lt||lt&&et.data!==lt.data)return!0;N++}return s.attributesNum!==N||s.index!==U}function p(C,L,V,U){const P={},F=L.attributes;let N=0;const O=V.getAttributes();for(const W in O)if(O[W].location>=0){let et=F[W];et===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(et=C.instanceColor));const lt={};lt.attribute=et,et&&et.data&&(lt.data=et.data),P[W]=lt,N++}s.attributes=P,s.attributesNum=N,s.index=U}function _(){const C=s.newAttributes;for(let L=0,V=C.length;L<V;L++)C[L]=0}function g(C){m(C,0)}function m(C,L){const V=s.newAttributes,U=s.enabledAttributes,P=s.attributeDivisors;V[C]=1,U[C]===0&&(i.enableVertexAttribArray(C),U[C]=1),P[C]!==L&&(i.vertexAttribDivisor(C,L),P[C]=L)}function S(){const C=s.newAttributes,L=s.enabledAttributes;for(let V=0,U=L.length;V<U;V++)L[V]!==C[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function y(C,L,V,U,P,F,N){N===!0?i.vertexAttribIPointer(C,L,V,P,F):i.vertexAttribPointer(C,L,V,U,P,F)}function x(C,L,V,U){_();const P=U.attributes,F=V.getAttributes(),N=L.defaultAttributeValues;for(const O in F){const W=F[O];if(W.location>=0){let I=P[O];if(I===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),I!==void 0){const et=I.normalized,lt=I.itemSize,Pt=t.get(I);if(Pt===void 0)continue;const Lt=Pt.buffer,Tt=Pt.type,j=Pt.bytesPerElement,tt=Tt===i.INT||Tt===i.UNSIGNED_INT||I.gpuType===xm;if(I.isInterleavedBufferAttribute){const st=I.data,ot=st.stride,pt=I.offset;if(st.isInstancedInterleavedBuffer){for(let xt=0;xt<W.locationSize;xt++)m(W.location+xt,st.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let xt=0;xt<W.locationSize;xt++)g(W.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let xt=0;xt<W.locationSize;xt++)y(W.location+xt,lt/W.locationSize,Tt,et,ot*j,(pt+lt/W.locationSize*xt)*j,tt)}else{if(I.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)m(W.location+st,I.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let st=0;st<W.locationSize;st++)g(W.location+st);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let st=0;st<W.locationSize;st++)y(W.location+st,lt/W.locationSize,Tt,et,lt*j,lt/W.locationSize*st*j,tt)}}else if(N!==void 0){const et=N[O];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(W.location,et);break;case 3:i.vertexAttrib3fv(W.location,et);break;case 4:i.vertexAttrib4fv(W.location,et);break;default:i.vertexAttrib1fv(W.location,et)}}}}S()}function M(){b();for(const C in n){const L=n[C];for(const V in L){const U=L[V];for(const P in U){const F=U[P];for(const N in F)u(F[N].object),delete F[N];delete U[P]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const L=n[C.id];for(const V in L){const U=L[V];for(const P in U){const F=U[P];for(const N in F)u(F[N].object),delete F[N];delete U[P]}}delete n[C.id]}function A(C){for(const L in n){const V=n[L];for(const U in V){const P=V[U];if(P[C.id]===void 0)continue;const F=P[C.id];for(const N in F)u(F[N].object),delete F[N];delete P[C.id]}}}function v(C){for(const L in n){const V=n[L],U=C.isInstancedMesh===!0?C.id:0,P=V[U];if(P!==void 0){for(const F in P){const N=P[F];for(const O in N)u(N[O].object),delete N[O];delete P[F]}delete V[U],Object.keys(V).length===0&&delete n[L]}}}function b(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function B2(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function V2(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==qi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const v=A===kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Li&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Yi&&!v)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,maxSamples:M,samples:E}}function k2(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Ds,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{const S=s?0:n,y=S*4;let x=m.clippingState||null;l.value=x,x=u(p,f,y,d);for(let M=0;M!==y;++M)x[M]=e[M];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const as=4,T_=[.125,.215,.35,.446,.526,.582],Is=20,z2=256,Na=new KS,E_=new de;let ch=null,uh=0,fh=0,hh=!1;const G2=new H;class b_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=G2}=s;ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ch,uh,fh),this._renderer.xr.enabled=hh,t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===pa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:kr,format:qi,colorSpace:Ru,depthBuffer:!1},r=A_(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A_(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=H2(s)),this._blurMaterial=X2(s,t,e),this._ggxMaterial=W2(s,t,e)}return r}_compileMaterial(t){const e=new En(new Ki,t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,n,r,s){const l=new Di(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(E_),h.toneMapping=dr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new ql,new Ar({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,m=!0):(g.color.copy(E_),m=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const M=this._cubeSize;Po(r,x*M,y>2?M:0,M,M),h.setRenderTarget(r),m&&h.render(_,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Qs||t.mapping===pa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=R_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Po(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Na)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-as?n-p+as:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Po(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(a,Na),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Po(t,g,m,3*_,2*_),r.setRenderTarget(t),r.render(a,Na)}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ee("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Is-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):Is;g>Is&&ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Is}`);const m=[];let S=0;for(let A=0;A<Is;++A){const v=A/_,b=Math.exp(-v*v/2);m.push(b),A===0?S+=b:A<g&&(S+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/S;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;const x=this._sizeLods[r],M=3*x*(r>y-as?r-y+as:0),E=4*(this._cubeSize-x);Po(e,M,E,3*x,2*x),l.setRenderTarget(e),l.render(h,Na)}}function H2(i){const t=[],e=[],n=[];let r=i;const s=i-as+1+T_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-as?l=T_[o-i+as-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,_=3,g=2,m=1,S=new Float32Array(_*p*d),y=new Float32Array(g*p*d),x=new Float32Array(m*p*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,v=E>2?0:-1,b=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];S.set(b,_*p*E),y.set(f,g*p*E);const w=[E,E,E,E,E,E];x.set(w,m*p*E)}const M=new Ki;M.setAttribute("position",new $i(S,_)),M.setAttribute("uv",new $i(y,g)),M.setAttribute("faceIndex",new $i(x,m)),n.push(new En(M,null)),r>as&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function A_(i,t,e){const n=new pr(i,t,e);return n.texture.mapping=tf,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function W2(i,t,e){return new _r({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function X2(i,t,e){const n=new Float32Array(Is),r=new H(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function w_(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function R_(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class jS extends pr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new HS(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ql(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:ga(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ni,blending:Nr});s.uniforms.tEquirect.value=e;const o=new En(r,s),a=e.minFilter;return e.minFilter===Os&&(e.minFilter=Bn),new ZC(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}function Y2(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===If||d===Nf)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const _=new jS(p.height);return _.fromEquirectangularTexture(i,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,p=d===If||d===Nf,_=d===Qs||d===pa;if(p||_){let g=e.get(f);const m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new b_(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new b_(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===If?f.mapping=Qs:d===Nf&&(f.mapping=pa),f}function l(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){const d=f.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function q2(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ea("WebGLRenderer: "+n+" extension not supported."),r}}}function $2(i,t,e,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,p=h.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const S=d.array;_=d.version;for(let y=0,x=S.length;y<x;y+=3){const M=S[y+0],E=S[y+1],A=S[y+2];f.push(M,E,E,A,A,M)}}else{const S=p.array;_=p.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const M=y+0,E=y+1,A=y+2;f.push(M,E,E,A,A,M)}}const g=new(p.count>=65535?VS:BS)(f,1);g.version=_;const m=s.get(h);m&&t.remove(m),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function K2(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let _=0;for(let g=0;g<d;g++)_+=f[g];e.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Z2(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Ee("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function J2(i,t,e){const n=new WeakMap,r=new nn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const E=new Float32Array(x*M*4*h),A=new US(E,x,M,h);A.type=Yi,A.needsUpdate=!0;const v=y*4;for(let w=0;w<h;w++){const C=g[w],L=m[w],V=S[w],U=x*M*4*w;for(let P=0;P<C.count;P++){const F=P*v;d===!0&&(r.fromBufferAttribute(C,P),E[U+F+0]=r.x,E[U+F+1]=r.y,E[U+F+2]=r.z,E[U+F+3]=0),p===!0&&(r.fromBufferAttribute(L,P),E[U+F+4]=r.x,E[U+F+5]=r.y,E[U+F+6]=r.z,E[U+F+7]=0),_===!0&&(r.fromBufferAttribute(V,P),E[U+F+8]=r.x,E[U+F+9]=r.y,E[U+F+10]=r.z,E[U+F+11]=V.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new ee(x,M)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function j2(i,t,e,n,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const Q2={[SS]:"LINEAR_TONE_MAPPING",[MS]:"REINHARD_TONE_MAPPING",[TS]:"CINEON_TONE_MAPPING",[ES]:"ACES_FILMIC_TONE_MAPPING",[AS]:"AGX_TONE_MAPPING",[wS]:"NEUTRAL_TONE_MAPPING",[bS]:"CUSTOM_TONE_MAPPING"};function tL(i,t,e,n,r,s){const o=new pr(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new ma(t,e):void 0}),a=new pr(t,e,{type:kr,depthBuffer:!1,stencilBuffer:!1}),l=new Ki;l.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $n([0,2,0,0,2,0],2));const c=new qC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new En(l,c),h=new KS(-1,1,1,-1,0,1);let f=null,d=null,p=!1,_,g=null,m=[],S=!1;this.setSize=function(y,x){o.setSize(y,x),a.setSize(y,x);for(let M=0;M<m.length;M++){const E=m[M];E.setSize&&E.setSize(y,x)}},this.setEffects=function(y){m=y,S=m.length>0&&m[0].isRenderPass===!0;const x=o.width,M=o.height;for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(x,M)}},this.begin=function(y,x){if(p||y.toneMapping===dr&&m.length===0)return!1;if(g=x,x!==null){const M=x.width,E=x.height;(o.width!==M||o.height!==E)&&this.setSize(M,E)}return S===!1&&y.setRenderTarget(o),_=y.toneMapping,y.toneMapping=dr,!0},this.hasRenderPass=function(){return S},this.end=function(y,x){y.toneMapping=_,p=!0;let M=o,E=a;for(let A=0;A<m.length;A++){const v=m[A];if(v.enabled!==!1&&(v.render(y,E,M,x),v.needsSwap!==!1)){const b=M;M=E,E=b}}if(f!==y.outputColorSpace||d!==y.toneMapping){f=y.outputColorSpace,d=y.toneMapping,c.defines={},Se.getTransfer(f)===De&&(c.defines.SRGB_TRANSFER="");const A=Q2[d];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(g),y.render(u,h),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const QS=new kn,qd=new ma(1,1),tM=new US,eM=new aC,nM=new HS,C_=[],P_=[],D_=new Float32Array(16),L_=new Float32Array(9),I_=new Float32Array(4);function Ma(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=C_[r];if(s===void 0&&(s=new Float32Array(r),C_[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function vn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sf(i,t){let e=P_[t];e===void 0&&(e=new Int32Array(t),P_[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function eL(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function nL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2fv(this.addr,t),xn(e,t)}}function iL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vn(e,t))return;i.uniform3fv(this.addr,t),xn(e,t)}}function rL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4fv(this.addr,t),xn(e,t)}}function sL(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xn(e,t)}else{if(vn(e,n))return;I_.set(n),i.uniformMatrix2fv(this.addr,!1,I_),xn(e,n)}}function oL(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xn(e,t)}else{if(vn(e,n))return;L_.set(n),i.uniformMatrix3fv(this.addr,!1,L_),xn(e,n)}}function aL(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xn(e,t)}else{if(vn(e,n))return;D_.set(n),i.uniformMatrix4fv(this.addr,!1,D_),xn(e,n)}}function lL(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2iv(this.addr,t),xn(e,t)}}function uL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3iv(this.addr,t),xn(e,t)}}function fL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4iv(this.addr,t),xn(e,t)}}function hL(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2uiv(this.addr,t),xn(e,t)}}function pL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3uiv(this.addr,t),xn(e,t)}}function mL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4uiv(this.addr,t),xn(e,t)}}function gL(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(qd.compareFunction=e.isReversedDepthBuffer()?wm:Am,s=qd):s=QS,e.setTexture2D(t||s,r)}function _L(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||eM,r)}function vL(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||nM,r)}function xL(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||tM,r)}function yL(i){switch(i){case 5126:return eL;case 35664:return nL;case 35665:return iL;case 35666:return rL;case 35674:return sL;case 35675:return oL;case 35676:return aL;case 5124:case 35670:return lL;case 35667:case 35671:return cL;case 35668:case 35672:return uL;case 35669:case 35673:return fL;case 5125:return hL;case 36294:return dL;case 36295:return pL;case 36296:return mL;case 35678:case 36198:case 36298:case 36306:case 35682:return gL;case 35679:case 36299:case 36307:return _L;case 35680:case 36300:case 36308:case 36293:return vL;case 36289:case 36303:case 36311:case 36292:return xL}}function SL(i,t){i.uniform1fv(this.addr,t)}function ML(i,t){const e=Ma(t,this.size,2);i.uniform2fv(this.addr,e)}function TL(i,t){const e=Ma(t,this.size,3);i.uniform3fv(this.addr,e)}function EL(i,t){const e=Ma(t,this.size,4);i.uniform4fv(this.addr,e)}function bL(i,t){const e=Ma(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function AL(i,t){const e=Ma(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wL(i,t){const e=Ma(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function RL(i,t){i.uniform1iv(this.addr,t)}function CL(i,t){i.uniform2iv(this.addr,t)}function PL(i,t){i.uniform3iv(this.addr,t)}function DL(i,t){i.uniform4iv(this.addr,t)}function LL(i,t){i.uniform1uiv(this.addr,t)}function IL(i,t){i.uniform2uiv(this.addr,t)}function NL(i,t){i.uniform3uiv(this.addr,t)}function FL(i,t){i.uniform4uiv(this.addr,t)}function UL(i,t,e){const n=this.cache,r=t.length,s=sf(e,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=qd:o=QS;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function OL(i,t,e){const n=this.cache,r=t.length,s=sf(e,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||eM,s[o])}function BL(i,t,e){const n=this.cache,r=t.length,s=sf(e,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||nM,s[o])}function VL(i,t,e){const n=this.cache,r=t.length,s=sf(e,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||tM,s[o])}function kL(i){switch(i){case 5126:return SL;case 35664:return ML;case 35665:return TL;case 35666:return EL;case 35674:return bL;case 35675:return AL;case 35676:return wL;case 5124:case 35670:return RL;case 35667:case 35671:return CL;case 35668:case 35672:return PL;case 35669:case 35673:return DL;case 5125:return LL;case 36294:return IL;case 36295:return NL;case 36296:return FL;case 35678:case 36198:case 36298:case 36306:case 35682:return UL;case 35679:case 36299:case 36307:return OL;case 35680:case 36300:case 36308:case 36293:return BL;case 36289:case 36303:case 36311:case 36292:return VL}}class zL{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yL(e.type)}}class GL{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kL(e.type)}}class HL{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const dh=/(\w+)(\])?(\[|\.)?/g;function N_(i,t){i.seq.push(t),i.map[t.id]=t}function WL(i,t,e){const n=i.name,r=n.length;for(dh.lastIndex=0;;){const s=dh.exec(n),o=dh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){N_(e,c===void 0?new zL(a,i,t):new GL(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new HL(a),N_(e,h)),e=h}}}class iu{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);WL(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function F_(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const XL=37297;let YL=0;function qL(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const U_=new oe;function $L(i){Se._getMatrix(U_,Se.workingColorSpace,i);const t=`mat3( ${U_.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case Cu:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function O_(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+qL(i.getShaderSource(t),a)}else return s}function KL(i,t){const e=$L(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ZL={[SS]:"Linear",[MS]:"Reinhard",[TS]:"Cineon",[ES]:"ACESFilmic",[AS]:"AgX",[wS]:"Neutral",[bS]:"Custom"};function JL(i,t){const e=ZL[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nc=new H;function jL(){Se.getLuminanceCoefficients(Nc);const i=Nc.x.toFixed(4),t=Nc.y.toFixed(4),e=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QL(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function t3(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e3(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ka(i){return i!==""}function B_(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function V_(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n3=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(i){return i.replace(n3,r3)}const i3=new Map;function r3(i,t){let e=he[t];if(e===void 0){const n=i3.get(t);if(n!==void 0)e=he[n],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $d(e)}const s3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k_(i){return i.replace(s3,o3)}function o3(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function z_(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const a3={[jc]:"SHADOWMAP_TYPE_PCF",[qa]:"SHADOWMAP_TYPE_VSM"};function l3(i){return a3[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const c3={[Qs]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE",[tf]:"ENVMAP_TYPE_CUBE_UV"};function u3(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":c3[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const f3={[pa]:"ENVMAP_MODE_REFRACTION"};function h3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":f3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d3={[yS]:"ENVMAP_BLENDING_MULTIPLY",[kR]:"ENVMAP_BLENDING_MIX",[zR]:"ENVMAP_BLENDING_ADD"};function p3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":d3[i.combine]||"ENVMAP_BLENDING_NONE"}function m3(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function g3(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=l3(e),c=u3(e),u=h3(e),h=p3(e),f=m3(e),d=QL(e),p=t3(s),_=r.createProgram();let g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ka).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ka).join(`
`),m.length>0&&(m+=`
`)):(g=[z_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),m=[z_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dr?"#define TONE_MAPPING":"",e.toneMapping!==dr?he.tonemapping_pars_fragment:"",e.toneMapping!==dr?JL("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,KL("linearToOutputTexel",e.outputColorSpace),jL(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ka).join(`
`)),o=$d(o),o=B_(o,e),o=V_(o,e),a=$d(a),a=B_(a,e),a=V_(a,e),o=k_(o),a=k_(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+g+o,x=S+m+a,M=F_(r,r.VERTEX_SHADER,y),E=F_(r,r.FRAGMENT_SHADER,x);r.attachShader(_,M),r.attachShader(_,E),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(M)||"",U=r.getShaderInfoLog(E)||"",P=L.trim(),F=V.trim(),N=U.trim();let O=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,E);else{const I=O_(r,M,"vertex"),et=O_(r,E,"fragment");Ee("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+I+`
`+et)}else P!==""?ie("WebGLProgram: Program Info Log:",P):(F===""||N==="")&&(W=!1);W&&(C.diagnostics={runnable:O,programLog:P,vertexShader:{log:F,prefix:g},fragmentShader:{log:N,prefix:m}})}r.deleteShader(M),r.deleteShader(E),v=new iu(r,_),b=e3(r,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,XL)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=YL++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let _3=0;class v3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new x3(t),e.set(t,n)),n}}class x3{constructor(t){this.id=_3++,this.code=t,this.usedTimes=0}}function y3(i){return i===to||i===Au||i===wu}function S3(i,t,e,n,r,s){const o=new Cm,a=new v3,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,b,w,C,L,V){const U=C.fog,P=L.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=t.get(v.envMap||F,N),W=O&&O.mapping===tf?O.image.height:null,I=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&ie("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const et=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,lt=et!==void 0?et.length:0;let Pt=0;P.morphAttributes.position!==void 0&&(Pt=1),P.morphAttributes.normal!==void 0&&(Pt=2),P.morphAttributes.color!==void 0&&(Pt=3);let Lt,Tt,j,tt;if(I){const ct=er[I];Lt=ct.vertexShader,Tt=ct.fragmentShader}else{Lt=v.vertexShader,Tt=v.fragmentShader;const ct=a.getVertexShaderStage(v),Zt=a.getFragmentShaderStage(v);a.update(v,ct,Zt),j=ct.id,tt=Zt.id}const st=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),pt=L.isInstancedMesh===!0,xt=L.isBatchedMesh===!0,Vt=!!v.map,ht=!!v.matcap,Ot=!!O,Wt=!!v.aoMap,zt=!!v.lightMap,X=!!v.bumpMap&&v.wireframe===!1,Jt=!!v.normalMap,le=!!v.displacementMap,ue=!!v.emissiveMap,Kt=!!v.metalnessMap,ae=!!v.roughnessMap,k=v.anisotropy>0,Le=v.clearcoat>0,Xt=v.dispersion>0,D=v.iridescence>0,T=v.sheen>0,z=v.transmission>0,Y=k&&!!v.anisotropyMap,Q=Le&&!!v.clearcoatMap,dt=Le&&!!v.clearcoatNormalMap,rt=Le&&!!v.clearcoatRoughnessMap,K=D&&!!v.iridescenceMap,J=D&&!!v.iridescenceThicknessMap,ft=T&&!!v.sheenColorMap,Et=T&&!!v.sheenRoughnessMap,mt=!!v.specularMap,yt=!!v.specularColorMap,vt=!!v.specularIntensityMap,kt=z&&!!v.transmissionMap,Yt=z&&!!v.thicknessMap,B=!!v.gradientMap,St=!!v.alphaMap,nt=v.alphaTest>0,bt=!!v.alphaHash,wt=!!v.extensions;let ut=dr;v.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ut=i.toneMapping);const gt={shaderID:I,shaderType:v.type,shaderName:v.name,vertexShader:Lt,fragmentShader:Tt,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:tt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:xt,batchingColor:xt&&L._colorsTexture!==null,instancing:pt,instancingColor:pt&&L.instanceColor!==null,instancingMorph:pt&&L.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:ht,envMap:Ot,envMapMode:Ot&&O.mapping,envMapCubeUVHeight:W,aoMap:Wt,lightMap:zt,bumpMap:X,normalMap:Jt,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:Jt&&v.normalMapType===WR,normalMapTangentSpace:Jt&&v.normalMapType===W0,packedNormalMap:Jt&&v.normalMapType===W0&&y3(v.normalMap.format),metalnessMap:Kt,roughnessMap:ae,anisotropy:k,anisotropyMap:Y,clearcoat:Le,clearcoatMap:Q,clearcoatNormalMap:dt,clearcoatRoughnessMap:rt,dispersion:Xt,iridescence:D,iridescenceMap:K,iridescenceThicknessMap:J,sheen:T,sheenColorMap:ft,sheenRoughnessMap:Et,specularMap:mt,specularColorMap:yt,specularIntensityMap:vt,transmission:z,transmissionMap:kt,thicknessMap:Yt,gradientMap:B,opaque:v.transparent===!1&&v.blending===ta&&v.alphaToCoverage===!1,alphaMap:St,alphaTest:nt,alphaHash:bt,combine:v.combine,mapUv:Vt&&p(v.map.channel),aoMapUv:Wt&&p(v.aoMap.channel),lightMapUv:zt&&p(v.lightMap.channel),bumpMapUv:X&&p(v.bumpMap.channel),normalMapUv:Jt&&p(v.normalMap.channel),displacementMapUv:le&&p(v.displacementMap.channel),emissiveMapUv:ue&&p(v.emissiveMap.channel),metalnessMapUv:Kt&&p(v.metalnessMap.channel),roughnessMapUv:ae&&p(v.roughnessMap.channel),anisotropyMapUv:Y&&p(v.anisotropyMap.channel),clearcoatMapUv:Q&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:J&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Et&&p(v.sheenRoughnessMap.channel),specularMapUv:mt&&p(v.specularMap.channel),specularColorMapUv:yt&&p(v.specularColorMap.channel),specularIntensityMapUv:vt&&p(v.specularIntensityMap.channel),transmissionMapUv:kt&&p(v.transmissionMap.channel),thicknessMapUv:Yt&&p(v.thicknessMap.channel),alphaMapUv:St&&p(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Jt||k),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(Vt||St),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&Jt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ot,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&Se.getTransfer(v.map.colorSpace)===De,decodeVideoTextureEmissive:ue&&v.emissiveMap.isVideoTexture===!0&&Se.getTransfer(v.emissiveMap.colorSpace)===De,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Cr,flipSided:v.side===ni,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:wt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&v.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function g(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)b.push(w),b.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(m(b,v),S(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function S(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){const b=d[v.type];let w;if(b){const C=er[b];w=WC.clone(C.uniforms)}else w=v.uniforms;return w}function x(v,b){let w=u.get(b);return w!==void 0?++w.usedTimes:(w=new g3(i,b,v,r),c.push(w),u.set(b,w)),w}function M(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){a.remove(v)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:y,acquireProgram:x,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:A}}function M3(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function T3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function G_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function H_(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,g,m){let S=i[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},i[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=p,S.materialVariant=o(f),S.groupOrder=_,S.renderOrder=f.renderOrder,S.z=g,S.group=m),t++,S}function l(f,d,p,_,g,m){const S=a(f,d,p,_,g,m);p.transmission>0?n.push(S):p.transparent===!0?r.push(S):e.push(S)}function c(f,d,p,_,g,m){const S=a(f,d,p,_,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?r.unshift(S):e.unshift(S)}function u(f,d,p){e.length>1&&e.sort(f||T3),n.length>1&&n.sort(d||G_),r.length>1&&r.sort(d||G_),p&&(e.reverse(),n.reverse(),r.reverse())}function h(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function E3(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new H_,i.set(n,[o])):r>=s.length?(o=new H_,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function b3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new de};break;case"SpotLight":e={position:new H,direction:new H,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function A3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let w3=0;function R3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function C3(i){const t=new b3,e=A3(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const r=new H,s=new We,o=new We;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,S=0,y=0,x=0,M=0,E=0,A=0;c.sort(R3);for(let b=0,w=c.length;b<w;b++){const C=c[b],L=C.color,V=C.intensity,U=C.distance;let P=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===to?P=C.shadow.map.texture:P=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=L.r*V,h+=L.g*V,f+=L.b*V;else if(C.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(C.sh.coefficients[F],V);A++}else if(C.isDirectionalLight){const F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,O=e.get(C);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=P,n.directionalShadowMatrix[d]=C.shadow.matrix,S++}n.directional[d]=F,d++}else if(C.isSpotLight){const F=t.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(L).multiplyScalar(V),F.distance=U,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,n.spot[_]=F;const N=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,N.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[_]=N.matrix,C.castShadow){const O=e.get(C);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=P,x++}_++}else if(C.isRectAreaLight){const F=t.get(C);F.color.copy(L).multiplyScalar(V),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=F,g++}else if(C.isPointLight){const F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const N=C.shadow,O=e.get(C);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,O.shadowCameraNear=N.camera.near,O.shadowCameraFar=N.camera.far,n.pointShadow[p]=O,n.pointShadowMap[p]=P,n.pointShadowMatrix[p]=C.shadow.matrix,y++}n.point[p]=F,p++}else if(C.isHemisphereLight){const F=t.get(C);F.skyColor.copy(C.color).multiplyScalar(V),F.groundColor.copy(C.groundColor).multiplyScalar(V),n.hemi[m]=F,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==d||v.pointLength!==p||v.spotLength!==_||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==S||v.numPointShadows!==y||v.numSpotShadows!==x||v.numSpotMaps!==M||v.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,v.directionalLength=d,v.pointLength=p,v.spotLength=_,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=S,v.numPointShadows=y,v.numSpotShadows=x,v.numSpotMaps=M,v.numLightProbes=A,n.version=w3++)}function l(c,u){let h=0,f=0,d=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const y=c[m];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),h++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function W_(i){const t=new C3(i),e=[],n=[],r=[];function s(f){h.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function P3(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new W_(i),t.set(r,[a])):s>=o.length?(a=new W_(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const D3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,I3=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],N3=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],X_=new We,Fa=new H,ph=new H;function F3(i,t,e){let n=new GS;const r=new ee,s=new ee,o=new nn,a=new $C,l=new KC,c={},u=e.maxTextureSize,h={[gs]:ni,[ni]:gs,[Cr]:Cr},f=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:D3,fragmentShader:L3}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Ki;p.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new En(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let m=this.type;this.render=function(E,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===SR&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jc);const b=i.getRenderTarget(),w=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Nr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const V=m!==this.type;V&&A.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(P=>P.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,P=E.length;U<P;U++){const F=E[U],N=F.shadow;if(N===void 0){ie("WebGLShadowMap:",F,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const O=N.getFrameExtents();r.multiply(O),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,N.mapSize.y=s.y));const W=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=W,N.map===null||V===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===qa){if(F.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new pr(r.x,r.y,{format:to,type:kr,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),N.map.texture.name=F.name+".shadowMap",N.map.depthTexture=new ma(r.x,r.y,Yi),N.map.depthTexture.name=F.name+".shadowMapDepth",N.map.depthTexture.format=zr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Rn,N.map.depthTexture.magFilter=Rn}else F.isPointLight?(N.map=new jS(r.x),N.map.depthTexture=new wC(r.x,gr)):(N.map=new pr(r.x,r.y),N.map.depthTexture=new ma(r.x,r.y,gr)),N.map.depthTexture.name=F.name+".shadowMap",N.map.depthTexture.format=zr,this.type===jc?(N.map.depthTexture.compareFunction=W?wm:Am,N.map.depthTexture.minFilter=Bn,N.map.depthTexture.magFilter=Bn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Rn,N.map.depthTexture.magFilter=Rn);N.camera.updateProjectionMatrix()}const I=N.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<I;et++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,et),i.clear();else{et===0&&(i.setRenderTarget(N.map),i.clear());const lt=N.getViewport(et);o.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),L.viewport(o)}if(F.isPointLight){const lt=N.camera,Pt=N.matrix,Lt=F.distance||lt.far;Lt!==lt.far&&(lt.far=Lt,lt.updateProjectionMatrix()),Fa.setFromMatrixPosition(F.matrixWorld),lt.position.copy(Fa),ph.copy(lt.position),ph.add(I3[et]),lt.up.copy(N3[et]),lt.lookAt(ph),lt.updateMatrixWorld(),Pt.makeTranslation(-Fa.x,-Fa.y,-Fa.z),X_.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),N._frustum.setFromProjectionMatrix(X_,lt.coordinateSystem,lt.reversedDepth)}else N.updateMatrices(F);n=N.getFrustum(),x(A,v,N.camera,F,this.type)}N.isPointLightShadow!==!0&&this.type===qa&&S(N,v),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,w,C)};function S(E,A){const v=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pr(r.x,r.y,{format:to,type:kr})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,v,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,v,d,_,null)}function y(E,A,v,b){let w=null;const C=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)w=C;else if(w=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=w.uuid,V=A.uuid;let U=c[L];U===void 0&&(U={},c[L]=U);let P=U[V];P===void 0&&(P=w.clone(),U[V]=P,A.addEventListener("dispose",M)),w=P}if(w.visible=A.visible,w.wireframe=A.wireframe,b===qa?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:h[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const L=i.properties.get(w);L.light=v}return w}function x(E,A,v,b,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===qa)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const V=t.update(E),U=E.material;if(Array.isArray(U)){const P=V.groups;for(let F=0,N=P.length;F<N;F++){const O=P[F],W=U[O.materialIndex];if(W&&W.visible){const I=y(E,W,b,w);E.onBeforeShadow(i,E,A,v,V,I,O),i.renderBufferDirect(v,null,V,I,E,O),E.onAfterShadow(i,E,A,v,V,I,O)}}}else if(U.visible){const P=y(E,U,b,w);E.onBeforeShadow(i,E,A,v,V,P,null),i.renderBufferDirect(v,null,V,P,E,null),E.onAfterShadow(i,E,A,v,V,P,null)}}const L=E.children;for(let V=0,U=L.length;V<U;V++)x(L[V],A,v,b,w)}function M(E){E.target.removeEventListener("dispose",M);for(const v in c){const b=c[v],w=E.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function U3(i,t){function e(){let B=!1;const St=new nn;let nt=null;const bt=new nn(0,0,0,0);return{setMask:function(wt){nt!==wt&&!B&&(i.colorMask(wt,wt,wt,wt),nt=wt)},setLocked:function(wt){B=wt},setClear:function(wt,ut,gt,ct,Zt){Zt===!0&&(wt*=ct,ut*=ct,gt*=ct),St.set(wt,ut,gt,ct),bt.equals(St)===!1&&(i.clearColor(wt,ut,gt,ct),bt.copy(St))},reset:function(){B=!1,nt=null,bt.set(-1,0,0,0)}}}function n(){let B=!1,St=!1,nt=null,bt=null,wt=null;return{setReversed:function(ut){if(St!==ut){const gt=t.get("EXT_clip_control");ut?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),St=ut;const ct=wt;wt=null,this.setClear(ct)}},getReversed:function(){return St},setTest:function(ut){ut?st(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(ut){nt!==ut&&!B&&(i.depthMask(ut),nt=ut)},setFunc:function(ut){if(St&&(ut=tC[ut]),bt!==ut){switch(ut){case od:i.depthFunc(i.NEVER);break;case ad:i.depthFunc(i.ALWAYS);break;case ld:i.depthFunc(i.LESS);break;case da:i.depthFunc(i.LEQUAL);break;case cd:i.depthFunc(i.EQUAL);break;case ud:i.depthFunc(i.GEQUAL);break;case fd:i.depthFunc(i.GREATER);break;case hd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=ut}},setLocked:function(ut){B=ut},setClear:function(ut){wt!==ut&&(wt=ut,St&&(ut=1-ut),i.clearDepth(ut))},reset:function(){B=!1,nt=null,bt=null,wt=null,St=!1}}}function r(){let B=!1,St=null,nt=null,bt=null,wt=null,ut=null,gt=null,ct=null,Zt=null;return{setTest:function(_t){B||(_t?st(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(_t){St!==_t&&!B&&(i.stencilMask(_t),St=_t)},setFunc:function(_t,Rt,Mt){(nt!==_t||bt!==Rt||wt!==Mt)&&(i.stencilFunc(_t,Rt,Mt),nt=_t,bt=Rt,wt=Mt)},setOp:function(_t,Rt,Mt){(ut!==_t||gt!==Rt||ct!==Mt)&&(i.stencilOp(_t,Rt,Mt),ut=_t,gt=Rt,ct=Mt)},setLocked:function(_t){B=_t},setClear:function(_t){Zt!==_t&&(i.clearStencil(_t),Zt=_t)},reset:function(){B=!1,St=null,nt=null,bt=null,wt=null,ut=null,gt=null,ct=null,Zt=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f={},d=new WeakMap,p=[],_=null,g=!1,m=null,S=null,y=null,x=null,M=null,E=null,A=null,v=new de(0,0,0),b=0,w=!1,C=null,L=null,V=null,U=null,P=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=O>=1):W.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=O>=2);let I=null,et={};const lt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Lt=new nn().fromArray(lt),Tt=new nn().fromArray(Pt);function j(B,St,nt,bt){const wt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(B,ut),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<nt;gt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(St+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return ut}const tt={};tt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(da),X(!1),Jt(k0),st(i.CULL_FACE),Wt(Nr);function st(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function ot(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function pt(B,St){return f[B]!==St?(i.bindFramebuffer(B,St),f[B]=St,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=St),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=St),!0):!1}function xt(B,St){let nt=p,bt=!1;if(B){nt=d.get(St),nt===void 0&&(nt=[],d.set(St,nt));const wt=B.textures;if(nt.length!==wt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,gt=wt.length;ut<gt;ut++)nt[ut]=i.COLOR_ATTACHMENT0+ut;nt.length=wt.length,bt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(nt)}function Vt(B){return _!==B?(i.useProgram(B),_=B,!0):!1}const ht={[Ls]:i.FUNC_ADD,[TR]:i.FUNC_SUBTRACT,[ER]:i.FUNC_REVERSE_SUBTRACT};ht[bR]=i.MIN,ht[AR]=i.MAX;const Ot={[wR]:i.ZERO,[RR]:i.ONE,[CR]:i.SRC_COLOR,[rd]:i.SRC_ALPHA,[FR]:i.SRC_ALPHA_SATURATE,[IR]:i.DST_COLOR,[DR]:i.DST_ALPHA,[PR]:i.ONE_MINUS_SRC_COLOR,[sd]:i.ONE_MINUS_SRC_ALPHA,[NR]:i.ONE_MINUS_DST_COLOR,[LR]:i.ONE_MINUS_DST_ALPHA,[UR]:i.CONSTANT_COLOR,[OR]:i.ONE_MINUS_CONSTANT_COLOR,[BR]:i.CONSTANT_ALPHA,[VR]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(B,St,nt,bt,wt,ut,gt,ct,Zt,_t){if(B===Nr){g===!0&&(ot(i.BLEND),g=!1);return}if(g===!1&&(st(i.BLEND),g=!0),B!==MR){if(B!==m||_t!==w){if((S!==Ls||M!==Ls)&&(i.blendEquation(i.FUNC_ADD),S=Ls,M=Ls),_t)switch(B){case ta:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case z0:i.blendFunc(i.ONE,i.ONE);break;case G0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case H0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ee("WebGLState: Invalid blending: ",B);break}else switch(B){case ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case z0:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case G0:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case H0:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",B);break}y=null,x=null,E=null,A=null,v.set(0,0,0),b=0,m=B,w=_t}return}wt=wt||St,ut=ut||nt,gt=gt||bt,(St!==S||wt!==M)&&(i.blendEquationSeparate(ht[St],ht[wt]),S=St,M=wt),(nt!==y||bt!==x||ut!==E||gt!==A)&&(i.blendFuncSeparate(Ot[nt],Ot[bt],Ot[ut],Ot[gt]),y=nt,x=bt,E=ut,A=gt),(ct.equals(v)===!1||Zt!==b)&&(i.blendColor(ct.r,ct.g,ct.b,Zt),v.copy(ct),b=Zt),m=B,w=!1}function zt(B,St){B.side===Cr?ot(i.CULL_FACE):st(i.CULL_FACE);let nt=B.side===ni;St&&(nt=!nt),X(nt),B.blending===ta&&B.transparent===!1?Wt(Nr):Wt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const bt=B.stencilWrite;a.setTest(bt),bt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(B){C!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),C=B)}function Jt(B){B!==xR?(st(i.CULL_FACE),B!==L&&(B===k0?i.cullFace(i.BACK):B===yR?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),L=B}function le(B){B!==V&&(N&&i.lineWidth(B),V=B)}function ue(B,St,nt){B?(st(i.POLYGON_OFFSET_FILL),(U!==St||P!==nt)&&(U=St,P=nt,o.getReversed()&&(St=-St),i.polygonOffset(St,nt))):ot(i.POLYGON_OFFSET_FILL)}function Kt(B){B?st(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function ae(B){B===void 0&&(B=i.TEXTURE0+F-1),I!==B&&(i.activeTexture(B),I=B)}function k(B,St,nt){nt===void 0&&(I===null?nt=i.TEXTURE0+F-1:nt=I);let bt=et[nt];bt===void 0&&(bt={type:void 0,texture:void 0},et[nt]=bt),(bt.type!==B||bt.texture!==St)&&(I!==nt&&(i.activeTexture(nt),I=nt),i.bindTexture(B,St||tt[B]),bt.type=B,bt.texture=St)}function Le(){const B=et[I];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Xt(){try{i.compressedTexImage2D(...arguments)}catch(B){Ee("WebGLState:",B)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(B){Ee("WebGLState:",B)}}function T(){try{i.texSubImage2D(...arguments)}catch(B){Ee("WebGLState:",B)}}function z(){try{i.texSubImage3D(...arguments)}catch(B){Ee("WebGLState:",B)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Ee("WebGLState:",B)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Ee("WebGLState:",B)}}function dt(){try{i.texStorage2D(...arguments)}catch(B){Ee("WebGLState:",B)}}function rt(){try{i.texStorage3D(...arguments)}catch(B){Ee("WebGLState:",B)}}function K(){try{i.texImage2D(...arguments)}catch(B){Ee("WebGLState:",B)}}function J(){try{i.texImage3D(...arguments)}catch(B){Ee("WebGLState:",B)}}function ft(B){return h[B]!==void 0?h[B]:i.getParameter(B)}function Et(B,St){h[B]!==St&&(i.pixelStorei(B,St),h[B]=St)}function mt(B){Lt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Lt.copy(B))}function yt(B){Tt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Tt.copy(B))}function vt(B,St){let nt=c.get(St);nt===void 0&&(nt=new WeakMap,c.set(St,nt));let bt=nt.get(B);bt===void 0&&(bt=i.getUniformBlockIndex(St,B.name),nt.set(B,bt))}function kt(B,St){const bt=c.get(St).get(B);l.get(St)!==bt&&(i.uniformBlockBinding(St,bt,B.__bindingPointIndex),l.set(St,bt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},I=null,et={},f={},d=new WeakMap,p=[],_=null,g=!1,m=null,S=null,y=null,x=null,M=null,E=null,A=null,v=new de(0,0,0),b=0,w=!1,C=null,L=null,V=null,U=null,P=null,Lt.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:ot,bindFramebuffer:pt,drawBuffers:xt,useProgram:Vt,setBlending:Wt,setMaterial:zt,setFlipSided:X,setCullFace:Jt,setLineWidth:le,setPolygonOffset:ue,setScissorTest:Kt,activeTexture:ae,bindTexture:k,unbindTexture:Le,compressedTexImage2D:Xt,compressedTexImage3D:D,texImage2D:K,texImage3D:J,pixelStorei:Et,getParameter:ft,updateUBOMapping:vt,uniformBlockBinding:kt,texStorage2D:dt,texStorage3D:rt,texSubImage2D:T,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:mt,viewport:yt,reset:Yt}}function O3(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,T){return p?new OffscreenCanvas(D,T):Du("canvas")}function g(D,T,z){let Y=1;const Q=Xt(D);if((Q.width>z||Q.height>z)&&(Y=z/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const dt=Math.floor(Y*Q.width),rt=Math.floor(Y*Q.height);f===void 0&&(f=_(dt,rt));const K=T?_(dt,rt):f;return K.width=dt,K.height=rt,K.getContext("2d").drawImage(D,0,0,dt,rt),ie("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+dt+"x"+rt+")."),K}else return"data"in D&&ie("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function m(D){return D.generateMipmaps}function S(D){i.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(D,T,z,Y,Q,dt=!1){if(D!==null){if(i[D]!==void 0)return i[D];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let rt;Y&&(rt=t.get("EXT_texture_norm16"),rt||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=T;if(T===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8),z===i.UNSIGNED_SHORT&&rt&&(K=rt.R16_EXT),z===i.SHORT&&rt&&(K=rt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),T===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8),z===i.UNSIGNED_SHORT&&rt&&(K=rt.RG16_EXT),z===i.SHORT&&rt&&(K=rt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),T===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),T===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),T===i.RGB&&(z===i.UNSIGNED_SHORT&&rt&&(K=rt.RGB16_EXT),z===i.SHORT&&rt&&(K=rt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),T===i.RGBA){const J=dt?Cu:Se.getTransfer(Q);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=J===De?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&rt&&(K=rt.RGBA16_EXT),z===i.SHORT&&rt&&(K=rt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(D,T){let z;return D?T===null||T===gr||T===Fl?z=i.DEPTH24_STENCIL8:T===Yi?z=i.DEPTH32F_STENCIL8:T===Nl&&(z=i.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gr||T===Fl?z=i.DEPTH_COMPONENT24:T===Yi?z=i.DEPTH_COMPONENT32F:T===Nl&&(z=i.DEPTH_COMPONENT16),z}function E(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==Bn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function A(D){const T=D.target;T.removeEventListener("dispose",A),b(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&h.delete(T)}function v(D){const T=D.target;T.removeEventListener("dispose",v),C(T)}function b(D){const T=n.get(D);if(T.__webglInit===void 0)return;const z=D.source,Y=d.get(z);if(Y){const Q=Y[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(D),Object.keys(Y).length===0&&d.delete(z)}n.remove(D)}function w(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const z=D.source,Y=d.get(z);delete Y[T.__cacheKey],o.memory.textures--}function C(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let Q=0;Q<T.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)i.deleteFramebuffer(T.__webglFramebuffer[Y]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const z=D.textures;for(let Y=0,Q=z.length;Y<Q;Y++){const dt=n.get(z[Y]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(D)}let L=0;function V(){L=0}function U(){return L}function P(D){L=D}function F(){const D=L;return D>=r.maxTextures&&ie("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),L+=1,D}function N(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function O(D,T){const z=n.get(D);if(D.isVideoTexture&&k(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&z.__version!==D.version){const Y=D.image;if(Y===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(z,D,T);return}}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+T)}function W(D,T){const z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){ot(z,D,T);return}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+T)}function I(D,T){const z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){ot(z,D,T);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+T)}function et(D,T){const z=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&z.__version!==D.version){pt(z,D,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+T)}const lt={[dd]:i.REPEAT,[Lr]:i.CLAMP_TO_EDGE,[pd]:i.MIRRORED_REPEAT},Pt={[Rn]:i.NEAREST,[GR]:i.NEAREST_MIPMAP_NEAREST,[hc]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[Ff]:i.LINEAR_MIPMAP_NEAREST,[Os]:i.LINEAR_MIPMAP_LINEAR},Lt={[XR]:i.NEVER,[ZR]:i.ALWAYS,[YR]:i.LESS,[Am]:i.LEQUAL,[qR]:i.EQUAL,[wm]:i.GEQUAL,[$R]:i.GREATER,[KR]:i.NOTEQUAL};function Tt(D,T){if(T.type===Yi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Bn||T.magFilter===Ff||T.magFilter===hc||T.magFilter===Os||T.minFilter===Bn||T.minFilter===Ff||T.minFilter===hc||T.minFilter===Os)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,lt[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,lt[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,lt[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Pt[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Pt[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Lt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Rn||T.minFilter!==hc&&T.minFilter!==Os||T.type===Yi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function j(D,T){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",A));const Y=T.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const dt=N(T);if(dt!==D.__cacheKey){Q[dt]===void 0&&(Q[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[dt].usedTimes++;const rt=Q[D.__cacheKey];rt!==void 0&&(Q[D.__cacheKey].usedTimes--,rt.usedTimes===0&&w(T)),D.__cacheKey=dt,D.__webglTexture=Q[dt].texture}return z}function tt(D,T,z){return Math.floor(Math.floor(D/z)/T)}function st(D,T,z,Y){const dt=D.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,z,Y,T.data);else{dt.sort((Et,mt)=>Et.start-mt.start);let rt=0;for(let Et=1;Et<dt.length;Et++){const mt=dt[rt],yt=dt[Et],vt=mt.start+mt.count,kt=tt(yt.start,T.width,4),Yt=tt(mt.start,T.width,4);yt.start<=vt+1&&kt===Yt&&tt(yt.start+yt.count-1,T.width,4)===kt?mt.count=Math.max(mt.count,yt.start+yt.count-mt.start):(++rt,dt[rt]=yt)}dt.length=rt+1;const K=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Et=0,mt=dt.length;Et<mt;Et++){const yt=dt[Et],vt=Math.floor(yt.start/4),kt=Math.ceil(yt.count/4),Yt=vt%T.width,B=Math.floor(vt/T.width),St=kt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,Yt,B,St,nt,z,Y,T.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function ot(D,T,z){let Y=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=j(D,T),dt=T.source;e.bindTexture(Y,D.__webglTexture,i.TEXTURE0+z);const rt=n.get(dt);if(dt.version!==rt.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const nt=Se.getPrimaries(Se.workingColorSpace),bt=T.colorSpace===es?null:Se.getPrimaries(T.colorSpace),wt=T.colorSpace===es||nt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let J=g(T.image,!1,r.maxTextureSize);J=Le(T,J);const ft=s.convert(T.format,T.colorSpace),Et=s.convert(T.type);let mt=x(T.internalFormat,ft,Et,T.normalized,T.colorSpace,T.isVideoTexture);Tt(Y,T);let yt;const vt=T.mipmaps,kt=T.isVideoTexture!==!0,Yt=rt.__version===void 0||Q===!0,B=dt.dataReady,St=E(T,J);if(T.isDepthTexture)mt=M(T.format===Bs,T.type),Yt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,mt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,mt,J.width,J.height,0,ft,Et,null));else if(T.isDataTexture)if(vt.length>0){kt&&Yt&&e.texStorage2D(i.TEXTURE_2D,St,mt,vt[0].width,vt[0].height);for(let nt=0,bt=vt.length;nt<bt;nt++)yt=vt[nt],kt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,ft,Et,yt.data):e.texImage2D(i.TEXTURE_2D,nt,mt,yt.width,yt.height,0,ft,Et,yt.data);T.generateMipmaps=!1}else kt?(Yt&&e.texStorage2D(i.TEXTURE_2D,St,mt,J.width,J.height),B&&st(T,J,ft,Et)):e.texImage2D(i.TEXTURE_2D,0,mt,J.width,J.height,0,ft,Et,J.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){kt&&Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,mt,vt[0].width,vt[0].height,J.depth);for(let nt=0,bt=vt.length;nt<bt;nt++)if(yt=vt[nt],T.format!==qi)if(ft!==null)if(kt){if(B)if(T.layerUpdates.size>0){const wt=M_(yt.width,yt.height,T.format,T.type);for(const ut of T.layerUpdates){const gt=yt.data.subarray(ut*wt/yt.data.BYTES_PER_ELEMENT,(ut+1)*wt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,ut,yt.width,yt.height,1,ft,gt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,J.depth,ft,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,mt,yt.width,yt.height,J.depth,0,yt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,J.depth,ft,Et,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,mt,yt.width,yt.height,J.depth,0,ft,Et,yt.data)}else{kt&&Yt&&e.texStorage2D(i.TEXTURE_2D,St,mt,vt[0].width,vt[0].height);for(let nt=0,bt=vt.length;nt<bt;nt++)yt=vt[nt],T.format!==qi?ft!==null?kt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,ft,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,mt,yt.width,yt.height,0,yt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,ft,Et,yt.data):e.texImage2D(i.TEXTURE_2D,nt,mt,yt.width,yt.height,0,ft,Et,yt.data)}else if(T.isDataArrayTexture)if(kt){if(Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,mt,J.width,J.height,J.depth),B)if(T.layerUpdates.size>0){const nt=M_(J.width,J.height,T.format,T.type);for(const bt of T.layerUpdates){const wt=J.data.subarray(bt*nt/J.data.BYTES_PER_ELEMENT,(bt+1)*nt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,J.width,J.height,1,ft,Et,wt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,Et,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,J.width,J.height,J.depth,0,ft,Et,J.data);else if(T.isData3DTexture)kt?(Yt&&e.texStorage3D(i.TEXTURE_3D,St,mt,J.width,J.height,J.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,Et,J.data)):e.texImage3D(i.TEXTURE_3D,0,mt,J.width,J.height,J.depth,0,ft,Et,J.data);else if(T.isFramebufferTexture){if(Yt)if(kt)e.texStorage2D(i.TEXTURE_2D,St,mt,J.width,J.height);else{let nt=J.width,bt=J.height;for(let wt=0;wt<St;wt++)e.texImage2D(i.TEXTURE_2D,wt,mt,nt,bt,0,ft,Et,null),nt>>=1,bt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),J.parentNode!==nt){nt.appendChild(J),h.add(T),nt.onpaint=bt=>{const wt=bt.changedElements;for(const ut of h)wt.includes(ut.image)&&(ut.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const wt=i.RGBA,ut=i.RGBA,gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,ut,gt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(vt.length>0){if(kt&&Yt){const nt=Xt(vt[0]);e.texStorage2D(i.TEXTURE_2D,St,mt,nt.width,nt.height)}for(let nt=0,bt=vt.length;nt<bt;nt++)yt=vt[nt],kt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ft,Et,yt):e.texImage2D(i.TEXTURE_2D,nt,mt,ft,Et,yt);T.generateMipmaps=!1}else if(kt){if(Yt){const nt=Xt(J);e.texStorage2D(i.TEXTURE_2D,St,mt,nt.width,nt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Et,J)}else e.texImage2D(i.TEXTURE_2D,0,mt,ft,Et,J);m(T)&&S(Y),rt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function pt(D,T,z){if(T.image.length!==6)return;const Y=j(D,T),Q=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+z);const dt=n.get(Q);if(Q.version!==dt.__version||Y===!0){e.activeTexture(i.TEXTURE0+z);const rt=Se.getPrimaries(Se.workingColorSpace),K=T.colorSpace===es?null:Se.getPrimaries(T.colorSpace),J=T.colorSpace===es||rt===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ft=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,mt=[];for(let ut=0;ut<6;ut++)!ft&&!Et?mt[ut]=g(T.image[ut],!0,r.maxCubemapSize):mt[ut]=Et?T.image[ut].image:T.image[ut],mt[ut]=Le(T,mt[ut]);const yt=mt[0],vt=s.convert(T.format,T.colorSpace),kt=s.convert(T.type),Yt=x(T.internalFormat,vt,kt,T.normalized,T.colorSpace),B=T.isVideoTexture!==!0,St=dt.__version===void 0||Y===!0,nt=Q.dataReady;let bt=E(T,yt);Tt(i.TEXTURE_CUBE_MAP,T);let wt;if(ft){B&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Yt,yt.width,yt.height);for(let ut=0;ut<6;ut++){wt=mt[ut].mipmaps;for(let gt=0;gt<wt.length;gt++){const ct=wt[gt];T.format!==qi?vt!==null?B?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt,0,0,ct.width,ct.height,vt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt,Yt,ct.width,ct.height,0,ct.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt,0,0,ct.width,ct.height,vt,kt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt,Yt,ct.width,ct.height,0,vt,kt,ct.data)}}}else{if(wt=T.mipmaps,B&&St){wt.length>0&&bt++;const ut=Xt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Yt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Et){B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,mt[ut].width,mt[ut].height,vt,kt,mt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Yt,mt[ut].width,mt[ut].height,0,vt,kt,mt[ut].data);for(let gt=0;gt<wt.length;gt++){const Zt=wt[gt].image[ut].image;B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt+1,0,0,Zt.width,Zt.height,vt,kt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt+1,Yt,Zt.width,Zt.height,0,vt,kt,Zt.data)}}else{B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,vt,kt,mt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Yt,vt,kt,mt[ut]);for(let gt=0;gt<wt.length;gt++){const ct=wt[gt];B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt+1,0,0,vt,kt,ct.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt+1,Yt,vt,kt,ct.image[ut])}}}m(T)&&S(i.TEXTURE_CUBE_MAP),dt.__version=Q.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function xt(D,T,z,Y,Q,dt){const rt=s.convert(z.format,z.colorSpace),K=s.convert(z.type),J=x(z.internalFormat,rt,K,z.normalized,z.colorSpace),ft=n.get(T),Et=n.get(z);if(Et.__renderTarget=T,!ft.__hasExternalTextures){const mt=Math.max(1,T.width>>dt),yt=Math.max(1,T.height>>dt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,dt,J,mt,yt,T.depth,0,rt,K,null):e.texImage2D(Q,dt,J,mt,yt,0,rt,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),ae(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,Et.__webglTexture,0,Kt(T)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,Et.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(D,T,z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const Y=T.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,dt=M(T.stencilBuffer,Q),rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ae(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(T),dt,T.width,T.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(T),dt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,dt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,D)}else{const Y=T.textures;for(let Q=0;Q<Y.length;Q++){const dt=Y[Q],rt=s.convert(dt.format,dt.colorSpace),K=s.convert(dt.type),J=x(dt.internalFormat,rt,K,dt.normalized,dt.colorSpace);ae(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(T),J,T.width,T.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(T),J,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,J,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(D,T,z){const Y=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(T.depthTexture);if(Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,T.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,T.depthTexture);const ft=s.convert(T.depthTexture.format),Et=s.convert(T.depthTexture.type);let mt;T.depthTexture.format===zr?mt=i.DEPTH_COMPONENT24:T.depthTexture.format===Bs&&(mt=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,mt,T.width,T.height,0,ft,Et,null)}}else O(T.depthTexture,0);const dt=Q.__webglTexture,rt=Kt(T),K=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,J=T.depthTexture.format===Bs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===zr)ae(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,dt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,J,K,dt,0);else if(T.depthTexture.format===Bs)ae(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,dt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,J,K,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(D){const T=n.get(D),z=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const Y=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=Y}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)ht(T.__webglFramebuffer[Y],D,Y);else{const Y=D.texture.mipmaps;Y&&Y.length>0?ht(T.__webglFramebuffer[0],D,0):ht(T.__webglFramebuffer,D,0)}else if(z){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=i.createRenderbuffer(),Vt(T.__webglDepthbuffer[Y],D,!1);else{const Q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,dt)}}else{const Y=D.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Vt(T.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(D,T,z){const Y=n.get(D);T!==void 0&&xt(Y.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ot(D)}function zt(D){const T=D.texture,z=n.get(D),Y=n.get(T);D.addEventListener("dispose",v);const Q=D.textures,dt=D.isWebGLCubeRenderTarget===!0,rt=Q.length>1;if(rt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=T.version,o.memory.textures++),dt){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let J=0;J<T.mipmaps.length;J++)z.__webglFramebuffer[K][J]=i.createFramebuffer()}else z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<T.mipmaps.length;K++)z.__webglFramebuffer[K]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(rt)for(let K=0,J=Q.length;K<J;K++){const ft=n.get(Q[K]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ae(D)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<Q.length;K++){const J=Q[K];z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);const ft=s.convert(J.format,J.colorSpace),Et=s.convert(J.type),mt=x(J.internalFormat,ft,Et,J.normalized,J.colorSpace,D.isXRRenderTarget===!0),yt=Kt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,mt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(z.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,T);for(let K=0;K<6;K++)if(T.mipmaps&&T.mipmaps.length>0)for(let J=0;J<T.mipmaps.length;J++)xt(z.__webglFramebuffer[K][J],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else xt(z.__webglFramebuffer[K],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(T)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let K=0,J=Q.length;K<J;K++){const ft=Q[K],Et=n.get(ft);let mt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(mt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Et.__webglTexture),Tt(mt,ft),xt(z.__webglFramebuffer,D,ft,i.COLOR_ATTACHMENT0+K,mt,0),m(ft)&&S(mt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(K=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,Y.__webglTexture),Tt(K,T),T.mipmaps&&T.mipmaps.length>0)for(let J=0;J<T.mipmaps.length;J++)xt(z.__webglFramebuffer[J],D,T,i.COLOR_ATTACHMENT0,K,J);else xt(z.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,K,0);m(T)&&S(K),e.unbindTexture()}D.depthBuffer&&Ot(D)}function X(D){const T=D.textures;for(let z=0,Y=T.length;z<Y;z++){const Q=T[z];if(m(Q)){const dt=y(D),rt=n.get(Q).__webglTexture;e.bindTexture(dt,rt),S(dt),e.unbindTexture()}}}const Jt=[],le=[];function ue(D){if(D.samples>0){if(ae(D)===!1){const T=D.textures,z=D.width,Y=D.height;let Q=i.COLOR_BUFFER_BIT;const dt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(D),K=T.length>1;if(K)for(let ft=0;ft<T.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);const J=D.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ft=0;ft<T.length;ft++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ft]);const Et=n.get(T[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,Q,i.NEAREST),l===!0&&(Jt.length=0,le.length=0,Jt.push(i.COLOR_ATTACHMENT0+ft),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Jt.push(dt),le.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ft=0;ft<T.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ft]);const Et=n.get(T[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Kt(D){return Math.min(r.maxSamples,D.samples)}function ae(D){const T=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function k(D){const T=o.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function Le(D,T){const z=D.colorSpace,Y=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==Ru&&z!==es&&(Se.getTransfer(z)===De?(Y!==qi||Q!==Li)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",z)),T}function Xt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.getTextureUnits=U,this.setTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=W,this.setTexture3D=I,this.setTextureCube=et,this.rebindTextures=Wt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function B3(i,t){function e(n,r=es){let s;const o=Se.getTransfer(r);if(n===Li)return i.UNSIGNED_BYTE;if(n===ym)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sm)return i.UNSIGNED_SHORT_5_5_5_1;if(n===DS)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===LS)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===CS)return i.BYTE;if(n===PS)return i.SHORT;if(n===Nl)return i.UNSIGNED_SHORT;if(n===xm)return i.INT;if(n===gr)return i.UNSIGNED_INT;if(n===Yi)return i.FLOAT;if(n===kr)return i.HALF_FLOAT;if(n===IS)return i.ALPHA;if(n===NS)return i.RGB;if(n===qi)return i.RGBA;if(n===zr)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===Mm)return i.RED;if(n===Tm)return i.RED_INTEGER;if(n===to)return i.RG;if(n===Em)return i.RG_INTEGER;if(n===bm)return i.RGBA_INTEGER;if(n===Qc||n===tu||n===eu||n===nu)if(o===De)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===md||n===gd||n===_d||n===vd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===md)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_d)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xd||n===yd||n===Sd||n===Md||n===Td||n===Au||n===Ed)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xd||n===yd)return o===De?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sd)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Md)return s.COMPRESSED_R11_EAC;if(n===Td)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Au)return s.COMPRESSED_RG11_EAC;if(n===Ed)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bd||n===Ad||n===wd||n===Rd||n===Cd||n===Pd||n===Dd||n===Ld||n===Id||n===Nd||n===Fd||n===Ud||n===Od||n===Bd)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bd)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ad)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wd)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rd)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cd)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pd)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dd)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ld)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Id)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nd)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fd)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ud)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Od)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bd)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vd||n===kd||n===zd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Vd)return o===De?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gd||n===Hd||n===wu||n===Wd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Gd)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fl?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const V3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class z3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new WS(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _r({vertexShader:V3,fragmentShader:k3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new En(new nf(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G3 extends oo{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",g=new z3,m={},S=e.getContextAttributes();let y=null,x=null;const M=[],E=[],A=new ee;let v=null;const b=new Di;b.viewport=new nn;const w=new Di;w.viewport=new nn;const C=[b,w],L=new JC;let V=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let tt=M[j];return tt===void 0&&(tt=new Hf,M[j]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(j){let tt=M[j];return tt===void 0&&(tt=new Hf,M[j]=tt),tt.getGripSpace()},this.getHand=function(j){let tt=M[j];return tt===void 0&&(tt=new Hf,M[j]=tt),tt.getHandSpace()};function P(j){const tt=E.indexOf(j.inputSource);if(tt===-1)return;const st=M[tt];st!==void 0&&(st.update(j.inputSource,j.frame,c||o),st.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",N);for(let j=0;j<M.length;j++){const tt=E[j];tt!==null&&(E[j]=null,M[j].disconnect(tt))}V=null,U=null,g.reset();for(const j in m)delete m[j];t.setRenderTarget(y),d=null,f=null,h=null,r=null,x=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",F),r.addEventListener("inputsourceschange",N),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,ot=null,pt=null;S.depth&&(pt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=S.stencil?Bs:zr,ot=S.stencil?Fl:gr);const xt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(xt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new pr(f.textureWidth,f.textureHeight,{format:qi,type:Li,depthTexture:new ma(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const st={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new pr(d.framebufferWidth,d.framebufferHeight,{format:qi,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Tt.setContext(r),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(j){for(let tt=0;tt<j.removed.length;tt++){const st=j.removed[tt],ot=E.indexOf(st);ot>=0&&(E[ot]=null,M[ot].disconnect(st))}for(let tt=0;tt<j.added.length;tt++){const st=j.added[tt];let ot=E.indexOf(st);if(ot===-1){for(let xt=0;xt<M.length;xt++)if(xt>=E.length){E.push(st),ot=xt;break}else if(E[xt]===null){E[xt]=st,ot=xt;break}if(ot===-1)break}const pt=M[ot];pt&&pt.connect(st)}}const O=new H,W=new H;function I(j,tt,st){O.setFromMatrixPosition(tt.matrixWorld),W.setFromMatrixPosition(st.matrixWorld);const ot=O.distanceTo(W),pt=tt.projectionMatrix.elements,xt=st.projectionMatrix.elements,Vt=pt[14]/(pt[10]-1),ht=pt[14]/(pt[10]+1),Ot=(pt[9]+1)/pt[5],Wt=(pt[9]-1)/pt[5],zt=(pt[8]-1)/pt[0],X=(xt[8]+1)/xt[0],Jt=Vt*zt,le=Vt*X,ue=ot/(-zt+X),Kt=ue*-zt;if(tt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Kt),j.translateZ(ue),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),pt[10]===-1)j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const ae=Vt+ue,k=ht+ue,Le=Jt-Kt,Xt=le+(ot-Kt),D=Ot*ht/k*ae,T=Wt*ht/k*ae;j.projectionMatrix.makePerspective(Le,Xt,D,T,ae,k),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function et(j,tt){tt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(tt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let tt=j.near,st=j.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(st=g.depthFar)),L.near=w.near=b.near=tt,L.far=w.far=b.far=st,(V!==L.near||U!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),V=L.near,U=L.far),L.layers.mask=j.layers.mask|6,b.layers.mask=L.layers.mask&-5,w.layers.mask=L.layers.mask&-3;const ot=j.parent,pt=L.cameras;et(L,ot);for(let xt=0;xt<pt.length;xt++)et(pt[xt],ot);pt.length===2?I(L,b,w):L.projectionMatrix.copy(b.projectionMatrix),lt(j,L,ot)};function lt(j,tt,st){st===null?j.matrix.copy(tt.matrixWorld):(j.matrix.copy(st.matrixWorld),j.matrix.invert(),j.matrix.multiply(tt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(j){return m[j]};let Pt=null;function Lt(j,tt){if(u=tt.getViewerPose(c||o),p=tt,u!==null){const st=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ot=!1;st.length!==L.cameras.length&&(L.cameras.length=0,ot=!0);for(let ht=0;ht<st.length;ht++){const Ot=st[ht];let Wt=null;if(d!==null)Wt=d.getViewport(Ot);else{const X=h.getViewSubImage(f,Ot);Wt=X.viewport,ht===0&&(t.setRenderTargetTextures(x,X.colorTexture,X.depthStencilTexture),t.setRenderTarget(x))}let zt=C[ht];zt===void 0&&(zt=new Di,zt.layers.enable(ht),zt.viewport=new nn,C[ht]=zt),zt.matrix.fromArray(Ot.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Ot.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),ht===0&&(L.matrix.copy(zt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ot===!0&&L.cameras.push(zt)}const pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const ht=h.getDepthInformation(st[0]);ht&&ht.isValid&&ht.texture&&g.init(ht,r.renderState)}if(pt&&pt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let ht=0;ht<st.length;ht++){const Ot=st[ht].camera;if(Ot){let Wt=m[Ot];Wt||(Wt=new WS,m[Ot]=Wt);const zt=h.getCameraImage(Ot);Wt.sourceTexture=zt}}}}for(let st=0;st<M.length;st++){const ot=E[st],pt=M[st];ot!==null&&pt!==void 0&&pt.update(ot,tt,c||o)}Pt&&Pt(j,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}const Tt=new ZS;Tt.setAnimationLoop(Lt),this.setAnimationLoop=function(j){Pt=j},this.dispose=function(){}}}const H3=new We,iM=new oe;iM.set(-1,0,0,0,1,0,0,0,1);function W3(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,qS(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,S,y,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,S,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ni&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ni&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=t.get(m),y=S.envMap,x=S.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(H3.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(iM),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ni&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function X3(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const E=M.program;n.uniformBlockBinding(x,E)}function c(x,M){let E=r[x.id];E===void 0&&(g(x),E=u(x),r[x.id]=E,x.addEventListener("dispose",S));const A=M.program;n.updateUBOMapping(x,A);const v=t.render.frame;s[x.id]!==v&&(f(x),s[x.id]=v)}function u(x){const M=h();x.__bindingPointIndex=M;const E=i.createBuffer(),A=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=r[x.id],E=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,b=E.length;v<b;v++){const w=E[v];if(Array.isArray(w))for(let C=0,L=w.length;C<L;C++)d(w[C],v,C,A);else d(w,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,M,E,A){if(_(x,M,E,A)===!0){const v=x.__offset,b=x.value;if(Array.isArray(b)){let w=0;for(let C=0;C<b.length;C++){const L=b[C],V=m(L);p(L,x.__data,w),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(w+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function p(x,M,E){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,E)}function _(x,M,E,A){const v=x.value,b=M+"_"+E;if(A[b]===void 0)return typeof v=="number"||typeof v=="boolean"?A[b]=v:ArrayBuffer.isView(v)?A[b]=v.slice():A[b]=v.clone(),!0;{const w=A[b];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return A[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function g(x){const M=x.uniforms;let E=0;const A=16;for(let b=0,w=M.length;b<w;b++){const C=Array.isArray(M[b])?M[b]:[M[b]];for(let L=0,V=C.length;L<V;L++){const U=C[L],P=Array.isArray(U.value)?U.value:[U.value];for(let F=0,N=P.length;F<N;F++){const O=P[F],W=m(O),I=E%A,et=I%W.boundary,lt=I+et;E+=et,lt!==0&&A-lt<W.storage&&(E+=A-lt),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=W.storage}}}const v=E%A;return v>0&&(E+=A-v),x.__size=E,x.__cache={},this}function m(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",x),M}function S(x){const M=x.target;M.removeEventListener("dispose",S);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function y(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}const Y3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function q3(){return ji===null&&(ji=new zS(Y3,16,16,to,kr),ji.name="DFG_LUT",ji.minFilter=Bn,ji.magFilter=Bn,ji.wrapS=Lr,ji.wrapT=Lr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class $3{constructor(t={}){const{canvas:e=jR(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Li}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=d,g=new Set([bm,Em,Tm]),m=new Set([Li,gr,Nl,Fl,ym,Sm]),S=new Uint32Array(4),y=new Int32Array(4),x=new H;let M=null,E=null;const A=[],v=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1,L=null,V=null,U=null,P=null;this._outputColorSpace=Ri;let F=0,N=0,O=null,W=-1,I=null;const et=new nn,lt=new nn;let Pt=null;const Lt=new de(0);let Tt=0,j=e.width,tt=e.height,st=1,ot=null,pt=null;const xt=new nn(0,0,j,tt),Vt=new nn(0,0,j,tt);let ht=!1;const Ot=new GS;let Wt=!1,zt=!1;const X=new We,Jt=new H,le=new nn,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function ae(){return O===null?st:1}let k=n;function Le(R,G){return e.getContext(R,G)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vm}`),e.addEventListener("webglcontextlost",Zt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),k===null){const G="webgl2";if(k=Le(G,R),k===null)throw Le(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Ee("WebGLRenderer: "+R.message),R}let Xt,D,T,z,Y,Q,dt,rt,K,J,ft,Et,mt,yt,vt,kt,Yt,B,St,nt,bt,wt,ut;function gt(){Xt=new q2(k),Xt.init(),bt=new B3(k,Xt),D=new V2(k,Xt,t,bt),T=new U3(k,Xt),D.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),V=k.createFramebuffer(),U=k.createFramebuffer(),P=k.createFramebuffer(),z=new Z2(k),Y=new M3,Q=new O3(k,Xt,T,Y,D,bt,z),dt=new Y2(w),rt=new tP(k),wt=new O2(k,rt),K=new $2(k,rt,z,wt),J=new j2(k,K,rt,wt,z),B=new J2(k,D,Q),vt=new k2(Y),ft=new S3(w,dt,Xt,D,wt,vt),Et=new W3(w,Y),mt=new E3,yt=new P3(Xt),Yt=new U2(w,dt,T,J,p,l),kt=new F3(w,J,D),ut=new X3(k,z,D,T),St=new B2(k,Xt,z),nt=new K2(k,Xt,z),z.programs=ft.programs,w.capabilities=D,w.extensions=Xt,w.properties=Y,w.renderLists=mt,w.shadowMap=kt,w.state=T,w.info=z}gt(),_!==Li&&(b=new tL(_,e.width,e.height,a,r,s));const ct=new G3(w,k);this.xr=ct,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(R){R!==void 0&&(st=R,this.setSize(j,tt,!1))},this.getSize=function(R){return R.set(j,tt)},this.setSize=function(R,G,Z=!0){if(ct.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,tt=G,e.width=Math.floor(R*st),e.height=Math.floor(G*st),Z===!0&&(e.style.width=R+"px",e.style.height=G+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(j*st,tt*st).floor()},this.setDrawingBufferSize=function(R,G,Z){j=R,tt=G,st=Z,e.width=Math.floor(R*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(_===Li){Ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(et)},this.getViewport=function(R){return R.copy(xt)},this.setViewport=function(R,G,Z,q){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,G,Z,q),T.viewport(et.copy(xt).multiplyScalar(st).round())},this.getScissor=function(R){return R.copy(Vt)},this.setScissor=function(R,G,Z,q){R.isVector4?Vt.set(R.x,R.y,R.z,R.w):Vt.set(R,G,Z,q),T.scissor(lt.copy(Vt).multiplyScalar(st).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){T.setScissorTest(ht=R)},this.setOpaqueSort=function(R){ot=R},this.setTransparentSort=function(R){pt=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,Z=!0){let q=0;if(R){let $=!1;if(O!==null){const At=O.texture.format;$=g.has(At)}if($){const At=O.texture.type,Dt=m.has(At),Ct=Yt.getClearColor(),Ft=Yt.getClearAlpha(),Bt=Ct.r,re=Ct.g,se=Ct.b;Dt?(S[0]=Bt,S[1]=re,S[2]=se,S[3]=Ft,k.clearBufferuiv(k.COLOR,0,S)):(y[0]=Bt,y[1]=re,y[2]=se,y[3]=Ft,k.clearBufferiv(k.COLOR,0,y))}else q|=k.COLOR_BUFFER_BIT}G&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Yt.dispose(),mt.dispose(),yt.dispose(),Y.dispose(),dt.dispose(),J.dispose(),wt.dispose(),ut.dispose(),ft.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Qt),ct.removeEventListener("sessionend",fe),ce.stop()};function Zt(R){R.preventDefault(),K0("WebGLRenderer: Context Lost."),C=!0}function _t(){K0("WebGLRenderer: Context Restored."),C=!1;const R=z.autoReset,G=kt.enabled,Z=kt.autoUpdate,q=kt.needsUpdate,$=kt.type;gt(),z.autoReset=R,kt.enabled=G,kt.autoUpdate=Z,kt.needsUpdate=q,kt.type=$}function Rt(R){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Mt(R){const G=R.target;G.removeEventListener("dispose",Mt),Nt(G)}function Nt(R){$t(R),Y.remove(R)}function $t(R){const G=Y.get(R).programs;G!==void 0&&(G.forEach(function(Z){ft.releaseProgram(Z)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,Z,q,$,At){G===null&&(G=ue);const Dt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ct=ze(R,G,Z,q,$);T.setMaterial(q,Dt);let Ft=Z.index,Bt=1;if(q.wireframe===!0){if(Ft=K.getWireframeAttribute(Z),Ft===void 0)return;Bt=2}const re=Z.drawRange,se=Z.attributes.position;let qt=re.start*Bt,Ne=(re.start+re.count)*Bt;At!==null&&(qt=Math.max(qt,At.start*Bt),Ne=Math.min(Ne,(At.start+At.count)*Bt)),Ft!==null?(qt=Math.max(qt,0),Ne=Math.min(Ne,Ft.count)):se!=null&&(qt=Math.max(qt,0),Ne=Math.min(Ne,se.count));const an=Ne-qt;if(an<0||an===1/0)return;wt.setup($,q,Ct,Z,Ft);let Qe,Ue=St;if(Ft!==null&&(Qe=rt.get(Ft),Ue=nt,Ue.setIndex(Qe)),$.isMesh)q.wireframe===!0?(T.setLineWidth(q.wireframeLinewidth*ae()),Ue.setMode(k.LINES)):Ue.setMode(k.TRIANGLES);else if($.isLine){let Pn=q.linewidth;Pn===void 0&&(Pn=1),T.setLineWidth(Pn*ae()),$.isLineSegments?Ue.setMode(k.LINES):$.isLineLoop?Ue.setMode(k.LINE_LOOP):Ue.setMode(k.LINE_STRIP)}else $.isPoints?Ue.setMode(k.POINTS):$.isSprite&&Ue.setMode(k.TRIANGLES);if($.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))Ue.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Pn=$._multiDrawStarts,Gt=$._multiDrawCounts,ri=$._multiDrawCount,be=Ft?rt.get(Ft).bytesPerElement:1,Ti=Y.get(q).currentProgram.getUniforms();for(let Zi=0;Zi<ri;Zi++)Ti.setValue(k,"_gl_DrawID",Zi),Ue.render(Pn[Zi]/be,Gt[Zi])}else if($.isInstancedMesh)Ue.renderInstances(qt,an,$.count);else if(Z.isInstancedBufferGeometry){const Pn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Gt=Math.min(Z.instanceCount,Pn);Ue.renderInstances(qt,an,Gt)}else Ue.render(qt,an)};function It(R,G,Z){R.transparent===!0&&R.side===Cr&&R.forceSinglePass===!1?(R.side=ni,R.needsUpdate=!0,Te(R,G,Z),R.side=gs,R.needsUpdate=!0,Te(R,G,Z),R.side=Cr):Te(R,G,Z)}this.compile=function(R,G,Z=null){Z===null&&(Z=R),E=yt.get(Z),E.init(G),v.push(E),Z.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),R!==Z&&R.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights();const q=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const At=$.material;if(At)if(Array.isArray(At))for(let Dt=0;Dt<At.length;Dt++){const Ct=At[Dt];It(Ct,Z,$),q.add(Ct)}else It(At,Z,$),q.add(At)}),E=v.pop(),q},this.compileAsync=function(R,G,Z=null){const q=this.compile(R,G,Z);return new Promise($=>{function At(){if(q.forEach(function(Dt){Y.get(Dt).currentProgram.isReady()&&q.delete(Dt)}),q.size===0){$(R);return}setTimeout(At,10)}Xt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ne=null;function jt(R){ne&&ne(R)}function Qt(){ce.stop()}function fe(){ce.start()}const ce=new ZS;ce.setAnimationLoop(jt),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(R){ne=R,ct.setAnimationLoop(R),R===null?ce.stop():ce.start()},ct.addEventListener("sessionstart",Qt),ct.addEventListener("sessionend",fe),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(R,G);const Z=ct.enabled===!0&&ct.isPresenting===!0,q=b!==null&&(O===null||Z)&&b.begin(w,O);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(G),G=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,G,O),E=yt.get(R,v.length),E.init(G),E.state.textureUnits=Q.getTextureUnits(),v.push(E),X.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ot.setFromProjectionMatrix(X,ar,G.reversedDepth),zt=this.localClippingEnabled,Wt=vt.init(this.clippingPlanes,zt),M=mt.get(R,A.length),M.init(),A.push(M),ct.enabled===!0&&ct.isPresenting===!0){const Dt=w.xr.getDepthSensingMesh();Dt!==null&&Xe(Dt,G,-1/0,w.sortObjects)}Xe(R,G,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(ot,pt,G.reversedDepth),Kt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Kt&&Yt.addToRenderList(M,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&vt.beginShadows();const $=E.state.shadowsArray;if(kt.render($,R,G),Wt===!0&&vt.endShadows(),(q&&b.hasRenderPass())===!1){const Dt=M.opaque,Ct=M.transmissive;if(E.setupLights(),G.isArrayCamera){const Ft=G.cameras;if(Ct.length>0)for(let Bt=0,re=Ft.length;Bt<re;Bt++){const se=Ft[Bt];Ye(Dt,Ct,R,se)}Kt&&Yt.render(R);for(let Bt=0,re=Ft.length;Bt<re;Bt++){const se=Ft[Bt];pe(M,R,se,se.viewport)}}else Ct.length>0&&Ye(Dt,Ct,R,G),Kt&&Yt.render(R),pe(M,R,G)}O!==null&&N===0&&(Q.updateMultisampleRenderTarget(O),Q.updateRenderTargetMipmap(O)),q&&b.end(w),R.isScene===!0&&R.onAfterRender(w,R,G),wt.resetDefaultState(),W=-1,I=null,v.pop(),v.length>0?(E=v[v.length-1],Q.setTextureUnits(E.state.textureUnits),Wt===!0&&vt.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,L!==null&&L.renderEnd()};function Xe(R,G,Z,q){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLightProbeGrid)E.pushLightProbeGrid(R);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ot.intersectsSprite(R)){q&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(X);const Dt=J.update(R),Ct=R.material;Ct.visible&&M.push(R,Dt,Ct,Z,le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ot.intersectsObject(R))){const Dt=J.update(R),Ct=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),le.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),le.copy(Dt.boundingSphere.center)),le.applyMatrix4(R.matrixWorld).applyMatrix4(X)),Array.isArray(Ct)){const Ft=Dt.groups;for(let Bt=0,re=Ft.length;Bt<re;Bt++){const se=Ft[Bt],qt=Ct[se.materialIndex];qt&&qt.visible&&M.push(R,Dt,qt,Z,le.z,se)}}else Ct.visible&&M.push(R,Dt,Ct,Z,le.z,null)}}const At=R.children;for(let Dt=0,Ct=At.length;Dt<Ct;Dt++)Xe(At[Dt],G,Z,q)}function pe(R,G,Z,q){const{opaque:$,transmissive:At,transparent:Dt}=R;E.setupLightsView(Z),Wt===!0&&vt.setGlobalState(w.clippingPlanes,Z),q&&T.viewport(et.copy(q)),$.length>0&&we($,G,Z),At.length>0&&we(At,G,Z),Dt.length>0&&we(Dt,G,Z),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Ye(R,G,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){const qt=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new pr(1,1,{generateMipmaps:!0,type:qt?kr:Li,minFilter:Os,samples:Math.max(4,D.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace})}const At=E.state.transmissionRenderTarget[q.id],Dt=q.viewport||et;At.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);const Ct=w.getRenderTarget(),Ft=w.getActiveCubeFace(),Bt=w.getActiveMipmapLevel();w.setRenderTarget(At),w.getClearColor(Lt),Tt=w.getClearAlpha(),Tt<1&&w.setClearColor(16777215,.5),w.clear(),Kt&&Yt.render(Z);const re=w.toneMapping;w.toneMapping=dr;const se=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),Wt===!0&&vt.setGlobalState(w.clippingPlanes,q),we(R,Z,q),Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ne=0,an=G.length;Ne<an;Ne++){const Qe=G[Ne],{object:Ue,geometry:Pn,material:Gt,group:ri}=Qe;if(Gt.side===Cr&&Ue.layers.test(q.layers)){const be=Gt.side;Gt.side=ni,Gt.needsUpdate=!0,Re(Ue,Z,q,Pn,Gt,ri),Gt.side=be,Gt.needsUpdate=!0,qt=!0}}qt===!0&&(Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At))}w.setRenderTarget(Ct,Ft,Bt),w.setClearColor(Lt,Tt),se!==void 0&&(q.viewport=se),w.toneMapping=re}function we(R,G,Z){const q=G.isScene===!0?G.overrideMaterial:null;for(let $=0,At=R.length;$<At;$++){const Dt=R[$],{object:Ct,geometry:Ft,group:Bt}=Dt;let re=Dt.material;re.allowOverride===!0&&q!==null&&(re=q),Ct.layers.test(Z.layers)&&Re(Ct,G,Z,Ft,re,Bt)}}function Re(R,G,Z,q,$,At){R.onBeforeRender(w,G,Z,q,$,At),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(w,G,Z,q,R,At),$.transparent===!0&&$.side===Cr&&$.forceSinglePass===!1?($.side=ni,$.needsUpdate=!0,w.renderBufferDirect(Z,G,q,$,R,At),$.side=gs,$.needsUpdate=!0,w.renderBufferDirect(Z,G,q,$,R,At),$.side=Cr):w.renderBufferDirect(Z,G,q,$,R,At),R.onAfterRender(w,G,Z,q,$,At)}function Te(R,G,Z){G.isScene!==!0&&(G=ue);const q=Y.get(R),$=E.state.lights,At=E.state.shadowsArray,Dt=$.state.version,Ct=ft.getParameters(R,$.state,At,G,Z,E.state.lightProbeGridArray),Ft=ft.getProgramCacheKey(Ct);let Bt=q.programs;q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,q.fog=G.fog;const re=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;q.envMap=dt.get(R.envMap||q.environment,re),q.envMapRotation=q.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Bt===void 0&&(R.addEventListener("dispose",Mt),Bt=new Map,q.programs=Bt);let se=Bt.get(Ft);if(se!==void 0){if(q.currentProgram===se&&q.lightsStateVersion===Dt)return Fe(R,Ct),se}else Ct.uniforms=ft.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,Z,Ct),R.onBeforeCompile(Ct,w),se=ft.acquireProgram(Ct,Ft),Bt.set(Ft,se),q.uniforms=Ct.uniforms;const qt=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=vt.uniform),Fe(R,Ct),q.needsLights=on(R),q.lightsStateVersion=Dt,q.needsLights&&(qt.ambientLightColor.value=$.state.ambient,qt.lightProbe.value=$.state.probe,qt.directionalLights.value=$.state.directional,qt.directionalLightShadows.value=$.state.directionalShadow,qt.spotLights.value=$.state.spot,qt.spotLightShadows.value=$.state.spotShadow,qt.rectAreaLights.value=$.state.rectArea,qt.ltc_1.value=$.state.rectAreaLTC1,qt.ltc_2.value=$.state.rectAreaLTC2,qt.pointLights.value=$.state.point,qt.pointLightShadows.value=$.state.pointShadow,qt.hemisphereLights.value=$.state.hemi,qt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qt.spotLightMatrix.value=$.state.spotLightMatrix,qt.spotLightMap.value=$.state.spotLightMap,qt.pointShadowMatrix.value=$.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=se,q.uniformsList=null,se}function ye(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=iu.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Fe(R,G){const Z=Y.get(R);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function An(R,G){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(G.matrixWorld);for(let Z=0,q=R.length;Z<q;Z++){const $=R[Z];if($.texture!==null&&$.boundingBox.containsPoint(x))return $}return null}function ze(R,G,Z,q,$){G.isScene!==!0&&(G=ue),Q.resetTextureUnits();const At=G.fog,Dt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?G.environment:null,Ct=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Se.workingColorSpace,Ft=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Bt=dt.get(q.envMap||Dt,Ft),re=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,se=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),qt=!!Z.morphAttributes.position,Ne=!!Z.morphAttributes.normal,an=!!Z.morphAttributes.color;let Qe=dr;q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Qe=w.toneMapping);const Ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pn=Ue!==void 0?Ue.length:0,Gt=Y.get(q),ri=E.state.lights;if(Wt===!0&&(zt===!0||R!==I)){const Ge=R===I&&q.id===W;vt.setState(q,R,Ge)}let be=!1;q.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==ri.state.version||Gt.outputColorSpace!==Ct||$.isBatchedMesh&&Gt.batching===!1||!$.isBatchedMesh&&Gt.batching===!0||$.isBatchedMesh&&Gt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Gt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Gt.instancing===!1||!$.isInstancedMesh&&Gt.instancing===!0||$.isSkinnedMesh&&Gt.skinning===!1||!$.isSkinnedMesh&&Gt.skinning===!0||$.isInstancedMesh&&Gt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Gt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Gt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Gt.instancingMorph===!1&&$.morphTexture!==null||Gt.envMap!==Bt||q.fog===!0&&Gt.fog!==At||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==vt.numPlanes||Gt.numIntersection!==vt.numIntersection)||Gt.vertexAlphas!==re||Gt.vertexTangents!==se||Gt.morphTargets!==qt||Gt.morphNormals!==Ne||Gt.morphColors!==an||Gt.toneMapping!==Qe||Gt.morphTargetsCount!==Pn||!!Gt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,Gt.__version=q.version);let Ti=Gt.currentProgram;be===!0&&(Ti=Te(q,G,$),L&&q.isNodeMaterial&&L.onUpdateProgram(q,Ti,Gt));let Zi=!1,Wr=!1,co=!1;const Oe=Ti.getUniforms(),ln=Gt.uniforms;if(T.useProgram(Ti.program)&&(Zi=!0,Wr=!0,co=!0),q.id!==W&&(W=q.id,Wr=!0),Gt.needsLights){const Ge=An(E.state.lightProbeGridArray,$);Gt.lightProbeGrid!==Ge&&(Gt.lightProbeGrid=Ge,Wr=!0)}if(Zi||I!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Oe.setValue(k,"projectionMatrix",R.projectionMatrix),Oe.setValue(k,"viewMatrix",R.matrixWorldInverse);const Yr=Oe.map.cameraPosition;Yr!==void 0&&Yr.setValue(k,Jt.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&Oe.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Oe.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),I!==R&&(I=R,Wr=!0,co=!0)}if(Gt.needsLights&&(ri.state.directionalShadowMap.length>0&&Oe.setValue(k,"directionalShadowMap",ri.state.directionalShadowMap,Q),ri.state.spotShadowMap.length>0&&Oe.setValue(k,"spotShadowMap",ri.state.spotShadowMap,Q),ri.state.pointShadowMap.length>0&&Oe.setValue(k,"pointShadowMap",ri.state.pointShadowMap,Q)),$.isSkinnedMesh){Oe.setOptional(k,$,"bindMatrix"),Oe.setOptional(k,$,"bindMatrixInverse");const Ge=$.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Oe.setValue(k,"boneTexture",Ge.boneTexture,Q))}$.isBatchedMesh&&(Oe.setOptional(k,$,"batchingTexture"),Oe.setValue(k,"batchingTexture",$._matricesTexture,Q),Oe.setOptional(k,$,"batchingIdTexture"),Oe.setValue(k,"batchingIdTexture",$._indirectTexture,Q),Oe.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Oe.setValue(k,"batchingColorTexture",$._colorsTexture,Q));const Xr=Z.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0)&&B.update($,Z,Ti),(Wr||Gt.receiveShadow!==$.receiveShadow)&&(Gt.receiveShadow=$.receiveShadow,Oe.setValue(k,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&G.environment!==null&&(ln.envMapIntensity.value=G.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=q3()),Wr){if(Oe.setValue(k,"toneMappingExposure",w.toneMappingExposure),Gt.needsLights&&Ie(ln,co),At&&q.fog===!0&&Et.refreshFogUniforms(ln,At),Et.refreshMaterialUniforms(ln,q,st,tt,E.state.transmissionRenderTarget[R.id]),Gt.needsLights&&Gt.lightProbeGrid){const Ge=Gt.lightProbeGrid;ln.probesSH.value=Ge.texture,ln.probesMin.value.copy(Ge.boundingBox.min),ln.probesMax.value.copy(Ge.boundingBox.max),ln.probesResolution.value.copy(Ge.resolution)}iu.upload(k,ye(Gt),ln,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(iu.upload(k,ye(Gt),ln,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Oe.setValue(k,"center",$.center),Oe.setValue(k,"modelViewMatrix",$.modelViewMatrix),Oe.setValue(k,"normalMatrix",$.normalMatrix),Oe.setValue(k,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){const Ge=q.uniformsGroups;for(let Yr=0,uo=Ge.length;Yr<uo;Yr++){const Bm=Ge[Yr];ut.update(Bm,Ti),ut.bind(Bm,Ti)}}return Ti}function Ie(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function on(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,G,Z){const q=Y.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Y.get(R.texture).__webglTexture=G,Y.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const Z=Y.get(R);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,Z=0){O=R,F=G,N=Z;let q=null,$=!1,At=!1;if(R){const Ct=Y.get(R);if(Ct.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(k.FRAMEBUFFER,Ct.__webglFramebuffer),et.copy(R.viewport),lt.copy(R.scissor),Pt=R.scissorTest,T.viewport(et),T.scissor(lt),T.setScissorTest(Pt),W=-1;return}else if(Ct.__webglFramebuffer===void 0)Q.setupRenderTarget(R);else if(Ct.__hasExternalTextures)Q.rebindTextures(R,Y.get(R.texture).__webglTexture,Y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const re=R.depthTexture;if(Ct.__boundDepthTexture!==re){if(re!==null&&Y.has(re)&&(R.width!==re.image.width||R.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(R)}}const Ft=R.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(At=!0);const Bt=Y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Bt[G])?q=Bt[G][Z]:q=Bt[G],$=!0):R.samples>0&&Q.useMultisampledRTT(R)===!1?q=Y.get(R).__webglMultisampledFramebuffer:Array.isArray(Bt)?q=Bt[Z]:q=Bt,et.copy(R.viewport),lt.copy(R.scissor),Pt=R.scissorTest}else et.copy(xt).multiplyScalar(st).floor(),lt.copy(Vt).multiplyScalar(st).floor(),Pt=ht;if(Z!==0&&(q=V),T.bindFramebuffer(k.FRAMEBUFFER,q)&&T.drawBuffers(R,q),T.viewport(et),T.scissor(lt),T.setScissorTest(Pt),$){const Ct=Y.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ct.__webglTexture,Z)}else if(At){const Ct=G;for(let Ft=0;Ft<R.textures.length;Ft++){const Bt=Y.get(R.textures[Ft]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ft,Bt.__webglTexture,Z,Ct)}}else if(R!==null&&Z!==0){const Ct=Y.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ct.__webglTexture,Z)}W=-1},this.readRenderTargetPixels=function(R,G,Z,q,$,At,Dt,Ct=0){if(!(R&&R.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft){T.bindFramebuffer(k.FRAMEBUFFER,Ft);try{const Bt=R.textures[Ct],re=Bt.format,se=Bt.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ct),!D.textureFormatReadable(re)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(se)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-q&&Z>=0&&Z<=R.height-$&&k.readPixels(G,Z,q,$,bt.convert(re),bt.convert(se),At)}finally{const Bt=O!==null?Y.get(O).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(R,G,Z,q,$,At,Dt,Ct=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft)if(G>=0&&G<=R.width-q&&Z>=0&&Z<=R.height-$){T.bindFramebuffer(k.FRAMEBUFFER,Ft);const Bt=R.textures[Ct],re=Bt.format,se=Bt.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ct),!D.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,qt),k.bufferData(k.PIXEL_PACK_BUFFER,At.byteLength,k.STREAM_READ),k.readPixels(G,Z,q,$,bt.convert(re),bt.convert(se),0);const Ne=O!==null?Y.get(O).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,Ne);const an=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await QR(k,an,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,qt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,At),k.deleteBuffer(qt),k.deleteSync(an),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,Z=0){const q=Math.pow(2,-Z),$=Math.floor(R.image.width*q),At=Math.floor(R.image.height*q),Dt=G!==null?G.x:0,Ct=G!==null?G.y:0;Q.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,Dt,Ct,$,At),T.unbindTexture()},this.copyTextureToTexture=function(R,G,Z=null,q=null,$=0,At=0){let Dt,Ct,Ft,Bt,re,se,qt,Ne,an;const Qe=R.isCompressedTexture?R.mipmaps[At]:R.image;if(Z!==null)Dt=Z.max.x-Z.min.x,Ct=Z.max.y-Z.min.y,Ft=Z.isBox3?Z.max.z-Z.min.z:1,Bt=Z.min.x,re=Z.min.y,se=Z.isBox3?Z.min.z:0;else{const ln=Math.pow(2,-$);Dt=Math.floor(Qe.width*ln),Ct=Math.floor(Qe.height*ln),R.isDataArrayTexture?Ft=Qe.depth:R.isData3DTexture?Ft=Math.floor(Qe.depth*ln):Ft=1,Bt=0,re=0,se=0}q!==null?(qt=q.x,Ne=q.y,an=q.z):(qt=0,Ne=0,an=0);const Ue=bt.convert(G.format),Pn=bt.convert(G.type);let Gt;G.isData3DTexture?(Q.setTexture3D(G,0),Gt=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Q.setTexture2DArray(G,0),Gt=k.TEXTURE_2D_ARRAY):(Q.setTexture2D(G,0),Gt=k.TEXTURE_2D),T.activeTexture(k.TEXTURE0),T.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const ri=T.getParameter(k.UNPACK_ROW_LENGTH),be=T.getParameter(k.UNPACK_IMAGE_HEIGHT),Ti=T.getParameter(k.UNPACK_SKIP_PIXELS),Zi=T.getParameter(k.UNPACK_SKIP_ROWS),Wr=T.getParameter(k.UNPACK_SKIP_IMAGES);T.pixelStorei(k.UNPACK_ROW_LENGTH,Qe.width),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Qe.height),T.pixelStorei(k.UNPACK_SKIP_PIXELS,Bt),T.pixelStorei(k.UNPACK_SKIP_ROWS,re),T.pixelStorei(k.UNPACK_SKIP_IMAGES,se);const co=R.isDataArrayTexture||R.isData3DTexture,Oe=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const ln=Y.get(R),Xr=Y.get(G),Ge=Y.get(ln.__renderTarget),Yr=Y.get(Xr.__renderTarget);T.bindFramebuffer(k.READ_FRAMEBUFFER,Ge.__webglFramebuffer),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let uo=0;uo<Ft;uo++)co&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(R).__webglTexture,$,se+uo),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(G).__webglTexture,At,an+uo)),k.blitFramebuffer(Bt,re,Dt,Ct,qt,Ne,Dt,Ct,k.DEPTH_BUFFER_BIT,k.NEAREST);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||Y.has(R)){const ln=Y.get(R),Xr=Y.get(G);T.bindFramebuffer(k.READ_FRAMEBUFFER,U),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,P);for(let Ge=0;Ge<Ft;Ge++)co?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,$,se+Ge):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,$),Oe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xr.__webglTexture,At,an+Ge):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Xr.__webglTexture,At),$!==0?k.blitFramebuffer(Bt,re,Dt,Ct,qt,Ne,Dt,Ct,k.COLOR_BUFFER_BIT,k.NEAREST):Oe?k.copyTexSubImage3D(Gt,At,qt,Ne,an+Ge,Bt,re,Dt,Ct):k.copyTexSubImage2D(Gt,At,qt,Ne,Bt,re,Dt,Ct);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Oe?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Gt,At,qt,Ne,an,Dt,Ct,Ft,Ue,Pn,Qe.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(Gt,At,qt,Ne,an,Dt,Ct,Ft,Ue,Qe.data):k.texSubImage3D(Gt,At,qt,Ne,an,Dt,Ct,Ft,Ue,Pn,Qe):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,At,qt,Ne,Dt,Ct,Ue,Pn,Qe.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,At,qt,Ne,Qe.width,Qe.height,Ue,Qe.data):k.texSubImage2D(k.TEXTURE_2D,At,qt,Ne,Dt,Ct,Ue,Pn,Qe);T.pixelStorei(k.UNPACK_ROW_LENGTH,ri),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,be),T.pixelStorei(k.UNPACK_SKIP_PIXELS,Ti),T.pixelStorei(k.UNPACK_SKIP_ROWS,Zi),T.pixelStorei(k.UNPACK_SKIP_IMAGES,Wr),At===0&&G.generateMipmaps&&k.generateMipmap(Gt),T.unbindTexture()},this.initRenderTarget=function(R){Y.get(R).__webglFramebuffer===void 0&&Q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Q.setTextureCube(R,0):R.isData3DTexture?Q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Q.setTexture2DArray(R,0):Q.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){F=0,N=0,O=null,T.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}class no{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let n=0;for(let r=0;r<this._n&&r<32;r++){const s=e[r],o=t+s,a=Math.abs(t)<Math.abs(s)?t-(o-s):s-(o-t);a&&(e[n++]=a),t=o}return e[n]=t,this._n=n+1,this}valueOf(){const t=this._partials;let e=this._n,n,r,s,o=0;if(e>0){for(o=t[--e];e>0&&(n=o,r=t[--e],o=n+r,s=r-(o-n),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(r=s*2,n=o+r,r==n-o&&(o=n))}return o}}function*K3(i){for(const t of i)yield*t}function rM(i){return Array.from(K3(i))}var He=1e-6,Ae=Math.PI,Ui=Ae/2,Y_=Ae/4,Vi=Ae*2,Er=180/Ae,ci=Ae/180,je=Math.abs,Z3=Math.atan,Ul=Math.atan2,un=Math.cos,fn=Math.sin,J3=Math.sign||function(i){return i>0?1:i<0?-1:0},lo=Math.sqrt;function j3(i){return i>1?0:i<-1?Ae:Math.acos(i)}function Ol(i){return i>1?Ui:i<-1?-Ui:Math.asin(i)}function Oi(){}function Lu(i,t){i&&$_.hasOwnProperty(i.type)&&$_[i.type](i,t)}var q_={Feature:function(i,t){Lu(i.geometry,t)},FeatureCollection:function(i,t){for(var e=i.features,n=-1,r=e.length;++n<r;)Lu(e[n].geometry,t)}},$_={Sphere:function(i,t){t.sphere()},Point:function(i,t){i=i.coordinates,t.point(i[0],i[1],i[2])},MultiPoint:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)i=e[n],t.point(i[0],i[1],i[2])},LineString:function(i,t){Kd(i.coordinates,t,0)},MultiLineString:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)Kd(e[n],t,0)},Polygon:function(i,t){K_(i.coordinates,t)},MultiPolygon:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)K_(e[n],t)},GeometryCollection:function(i,t){for(var e=i.geometries,n=-1,r=e.length;++n<r;)Lu(e[n],t)}};function Kd(i,t,e){var n=-1,r=i.length-e,s;for(t.lineStart();++n<r;)s=i[n],t.point(s[0],s[1],s[2]);t.lineEnd()}function K_(i,t){var e=-1,n=i.length;for(t.polygonStart();++e<n;)Kd(i[e],t,1);t.polygonEnd()}function No(i,t){i&&q_.hasOwnProperty(i.type)?q_[i.type](i,t):Lu(i,t)}function Zd(i){return[Ul(i[1],i[0]),Ol(i[2])]}function _a(i){var t=i[0],e=i[1],n=un(e);return[n*un(t),n*fn(t),fn(e)]}function Fc(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function Iu(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function mh(i,t){i[0]+=t[0],i[1]+=t[1],i[2]+=t[2]}function Uc(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Jd(i){var t=lo(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]/=t,i[1]/=t,i[2]/=t}function jd(i,t){function e(n,r){return n=i(n,r),t(n[0],n[1])}return i.invert&&t.invert&&(e.invert=function(n,r){return n=t.invert(n,r),n&&i.invert(n[0],n[1])}),e}function Qd(i,t){return je(i)>Ae&&(i-=Math.round(i/Vi)*Vi),[i,t]}Qd.invert=Qd;function Q3(i,t,e){return(i%=Vi)?t||e?jd(J_(i),j_(t,e)):J_(i):t||e?j_(t,e):Qd}function Z_(i){return function(t,e){return t+=i,je(t)>Ae&&(t-=Math.round(t/Vi)*Vi),[t,e]}}function J_(i){var t=Z_(i);return t.invert=Z_(-i),t}function j_(i,t){var e=un(i),n=fn(i),r=un(t),s=fn(t);function o(a,l){var c=un(l),u=un(a)*c,h=fn(a)*c,f=fn(l),d=f*e+u*n;return[Ul(h*r-d*s,u*e-f*n),Ol(d*r+h*s)]}return o.invert=function(a,l){var c=un(l),u=un(a)*c,h=fn(a)*c,f=fn(l),d=f*r-h*s;return[Ul(h*r+f*s,u*e+d*n),Ol(d*e-u*n)]},o}function tI(i,t,e,n,r,s){if(e){var o=un(t),a=fn(t),l=n*e;r==null?(r=t+n*Vi,s=t-l/2):(r=Q_(o,r),s=Q_(o,s),(n>0?r<s:r>s)&&(r+=n*Vi));for(var c,u=r;n>0?u>s:u<s;u-=l)c=Zd([o,-a*un(u),-a*fn(u)]),i.point(c[0],c[1])}}function Q_(i,t){t=_a(t),t[0]-=i,Jd(t);var e=j3(-t[1]);return((-t[2]<0?-e:e)+Vi-He)%Vi}function sM(){var i=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){i.push(t=[])},lineEnd:Oi,rejoin:function(){i.length>1&&i.push(i.pop().concat(i.shift()))},result:function(){var e=i;return i=[],t=null,e}}}function ru(i,t){return je(i[0]-t[0])<He&&je(i[1]-t[1])<He}function Oc(i,t,e,n){this.x=i,this.z=t,this.o=e,this.e=n,this.v=!1,this.n=this.p=null}function oM(i,t,e,n,r){var s=[],o=[],a,l;if(i.forEach(function(p){if(!((_=p.length-1)<=0)){var _,g=p[0],m=p[_],S;if(ru(g,m)){if(!g[2]&&!m[2]){for(r.lineStart(),a=0;a<_;++a)r.point((g=p[a])[0],g[1]);r.lineEnd();return}m[0]+=2*He}s.push(S=new Oc(g,p,null,!0)),o.push(S.o=new Oc(g,null,S,!1)),s.push(S=new Oc(m,p,null,!1)),o.push(S.o=new Oc(m,null,S,!0))}}),!!s.length){for(o.sort(t),tv(s),tv(o),a=0,l=o.length;a<l;++a)o[a].e=e=!e;for(var c=s[0],u,h;;){for(var f=c,d=!0;f.v;)if((f=f.n)===c)return;u=f.z,r.lineStart();do{if(f.v=f.o.v=!0,f.e){if(d)for(a=0,l=u.length;a<l;++a)r.point((h=u[a])[0],h[1]);else n(f.x,f.n.x,1,r);f=f.n}else{if(d)for(u=f.p.z,a=u.length-1;a>=0;--a)r.point((h=u[a])[0],h[1]);else n(f.x,f.p.x,-1,r);f=f.p}f=f.o,u=f.z,d=!d}while(!f.v);r.lineEnd()}}}function tv(i){if(t=i.length){for(var t,e=0,n=i[0],r;++e<t;)n.n=r=i[e],r.p=n,n=r;n.n=r=i[0],r.p=n}}function gh(i){return je(i[0])<=Ae?i[0]:J3(i[0])*((je(i[0])+Ae)%Vi-Ae)}function eI(i,t){var e=gh(t),n=t[1],r=fn(n),s=[fn(e),-un(e),0],o=0,a=0,l=new no;r===1?n=Ui+He:r===-1&&(n=-Ui-He);for(var c=0,u=i.length;c<u;++c)if(f=(h=i[c]).length)for(var h,f,d=h[f-1],p=gh(d),_=d[1]/2+Y_,g=fn(_),m=un(_),S=0;S<f;++S,p=x,g=E,m=A,d=y){var y=h[S],x=gh(y),M=y[1]/2+Y_,E=fn(M),A=un(M),v=x-p,b=v>=0?1:-1,w=b*v,C=w>Ae,L=g*E;if(l.add(Ul(L*b*fn(w),m*A+L*un(w))),o+=C?v+b*Vi:v,C^p>=e^x>=e){var V=Iu(_a(d),_a(y));Jd(V);var U=Iu(s,V);Jd(U);var P=(C^v>=0?-1:1)*Ol(U[2]);(n>P||n===P&&(V[0]||V[1]))&&(a+=C^v>=0?1:-1)}}return(o<-He||o<He&&l<-1e-12)^a&1}function aM(i,t,e,n){return function(r){var s=t(r),o=sM(),a=t(o),l=!1,c,u,h,f={point:d,lineStart:_,lineEnd:g,polygonStart:function(){f.point=m,f.lineStart=S,f.lineEnd=y,u=[],c=[]},polygonEnd:function(){f.point=d,f.lineStart=_,f.lineEnd=g,u=rM(u);var x=eI(c,n);u.length?(l||(r.polygonStart(),l=!0),oM(u,iI,x,e,r)):x&&(l||(r.polygonStart(),l=!0),r.lineStart(),e(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),u=c=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(x,M){i(x,M)&&r.point(x,M)}function p(x,M){s.point(x,M)}function _(){f.point=p,s.lineStart()}function g(){f.point=d,s.lineEnd()}function m(x,M){h.push([x,M]),a.point(x,M)}function S(){a.lineStart(),h=[]}function y(){m(h[0][0],h[0][1]),a.lineEnd();var x=a.clean(),M=o.result(),E,A=M.length,v,b,w;if(h.pop(),c.push(h),h=null,!!A){if(x&1){if(b=M[0],(v=b.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),E=0;E<v;++E)r.point((w=b[E])[0],w[1]);r.lineEnd()}return}A>1&&x&2&&M.push(M.pop().concat(M.shift())),u.push(M.filter(nI))}}return f}}function nI(i){return i.length>1}function iI(i,t){return((i=i.x)[0]<0?i[1]-Ui-He:Ui-i[1])-((t=t.x)[0]<0?t[1]-Ui-He:Ui-t[1])}const ev=aM(function(){return!0},rI,oI,[-Ae,-Ui]);function rI(i){var t=NaN,e=NaN,n=NaN,r;return{lineStart:function(){i.lineStart(),r=1},point:function(s,o){var a=s>0?Ae:-Ae,l=je(s-t);je(l-Ae)<He?(i.point(t,e=(e+o)/2>0?Ui:-Ui),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(a,e),i.point(s,e),r=0):n!==a&&l>=Ae&&(je(t-n)<He&&(t-=n*He),je(s-a)<He&&(s-=a*He),e=sI(t,e,s,o),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(a,e),r=0),i.point(t=s,e=o),n=a},lineEnd:function(){i.lineEnd(),t=e=NaN},clean:function(){return 2-r}}}function sI(i,t,e,n){var r,s,o=fn(i-e);return je(o)>He?Z3((fn(t)*(s=un(n))*fn(e)-fn(n)*(r=un(t))*fn(i))/(r*s*o)):(t+n)/2}function oI(i,t,e,n){var r;if(i==null)r=e*Ui,n.point(-Ae,r),n.point(0,r),n.point(Ae,r),n.point(Ae,0),n.point(Ae,-r),n.point(0,-r),n.point(-Ae,-r),n.point(-Ae,0),n.point(-Ae,r);else if(je(i[0]-t[0])>He){var s=i[0]<t[0]?Ae:-Ae;r=e*s/2,n.point(-s,r),n.point(0,r),n.point(s,r)}else n.point(t[0],t[1])}function aI(i){var t=un(i),e=2*ci,n=t>0,r=je(t)>He;function s(u,h,f,d){tI(d,i,e,f,u,h)}function o(u,h){return un(u)*un(h)>t}function a(u){var h,f,d,p,_;return{lineStart:function(){p=d=!1,_=1},point:function(g,m){var S=[g,m],y,x=o(g,m),M=n?x?0:c(g,m):x?c(g+(g<0?Ae:-Ae),m):0;if(!h&&(p=d=x)&&u.lineStart(),x!==d&&(y=l(h,S),(!y||ru(h,y)||ru(S,y))&&(S[2]=1)),x!==d)_=0,x?(u.lineStart(),y=l(S,h),u.point(y[0],y[1])):(y=l(h,S),u.point(y[0],y[1],2),u.lineEnd()),h=y;else if(r&&h&&n^x){var E;!(M&f)&&(E=l(S,h,!0))&&(_=0,n?(u.lineStart(),u.point(E[0][0],E[0][1]),u.point(E[1][0],E[1][1]),u.lineEnd()):(u.point(E[1][0],E[1][1]),u.lineEnd(),u.lineStart(),u.point(E[0][0],E[0][1],3)))}x&&(!h||!ru(h,S))&&u.point(S[0],S[1]),h=S,d=x,f=M},lineEnd:function(){d&&u.lineEnd(),h=null},clean:function(){return _|(p&&d)<<1}}}function l(u,h,f){var d=_a(u),p=_a(h),_=[1,0,0],g=Iu(d,p),m=Fc(g,g),S=g[0],y=m-S*S;if(!y)return!f&&u;var x=t*m/y,M=-t*S/y,E=Iu(_,g),A=Uc(_,x),v=Uc(g,M);mh(A,v);var b=E,w=Fc(A,b),C=Fc(b,b),L=w*w-C*(Fc(A,A)-1);if(!(L<0)){var V=lo(L),U=Uc(b,(-w-V)/C);if(mh(U,A),U=Zd(U),!f)return U;var P=u[0],F=h[0],N=u[1],O=h[1],W;F<P&&(W=P,P=F,F=W);var I=F-P,et=je(I-Ae)<He,lt=et||I<He;if(!et&&O<N&&(W=N,N=O,O=W),lt?et?N+O>0^U[1]<(je(U[0]-P)<He?N:O):N<=U[1]&&U[1]<=O:I>Ae^(P<=U[0]&&U[0]<=F)){var Pt=Uc(b,(-w+V)/C);return mh(Pt,A),[U,Zd(Pt)]}}}function c(u,h){var f=n?i:Ae-i,d=0;return u<-f?d|=1:u>f&&(d|=2),h<-f?d|=4:h>f&&(d|=8),d}return aM(o,a,s,n?[0,-i]:[-Ae,i-Ae])}function lI(i,t,e,n,r,s){var o=i[0],a=i[1],l=t[0],c=t[1],u=0,h=1,f=l-o,d=c-a,p;if(p=e-o,!(!f&&p>0)){if(p/=f,f<0){if(p<u)return;p<h&&(h=p)}else if(f>0){if(p>h)return;p>u&&(u=p)}if(p=r-o,!(!f&&p<0)){if(p/=f,f<0){if(p>h)return;p>u&&(u=p)}else if(f>0){if(p<u)return;p<h&&(h=p)}if(p=n-a,!(!d&&p>0)){if(p/=d,d<0){if(p<u)return;p<h&&(h=p)}else if(d>0){if(p>h)return;p>u&&(u=p)}if(p=s-a,!(!d&&p<0)){if(p/=d,d<0){if(p>h)return;p>u&&(u=p)}else if(d>0){if(p<u)return;p<h&&(h=p)}return u>0&&(i[0]=o+u*f,i[1]=a+u*d),h<1&&(t[0]=o+h*f,t[1]=a+h*d),!0}}}}}var Za=1e9,Bc=-Za;function cI(i,t,e,n){function r(c,u){return i<=c&&c<=e&&t<=u&&u<=n}function s(c,u,h,f){var d=0,p=0;if(c==null||(d=o(c,h))!==(p=o(u,h))||l(c,u)<0^h>0)do f.point(d===0||d===3?i:e,d>1?n:t);while((d=(d+h+4)%4)!==p);else f.point(u[0],u[1])}function o(c,u){return je(c[0]-i)<He?u>0?0:3:je(c[0]-e)<He?u>0?2:1:je(c[1]-t)<He?u>0?1:0:u>0?3:2}function a(c,u){return l(c.x,u.x)}function l(c,u){var h=o(c,1),f=o(u,1);return h!==f?h-f:h===0?u[1]-c[1]:h===1?c[0]-u[0]:h===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,h=sM(),f,d,p,_,g,m,S,y,x,M,E,A={point:v,lineStart:L,lineEnd:V,polygonStart:w,polygonEnd:C};function v(P,F){r(P,F)&&u.point(P,F)}function b(){for(var P=0,F=0,N=d.length;F<N;++F)for(var O=d[F],W=1,I=O.length,et=O[0],lt,Pt,Lt=et[0],Tt=et[1];W<I;++W)lt=Lt,Pt=Tt,et=O[W],Lt=et[0],Tt=et[1],Pt<=n?Tt>n&&(Lt-lt)*(n-Pt)>(Tt-Pt)*(i-lt)&&++P:Tt<=n&&(Lt-lt)*(n-Pt)<(Tt-Pt)*(i-lt)&&--P;return P}function w(){u=h,f=[],d=[],E=!0}function C(){var P=b(),F=E&&P,N=(f=rM(f)).length;(F||N)&&(c.polygonStart(),F&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),N&&oM(f,a,P,s,c),c.polygonEnd()),u=c,f=d=p=null}function L(){A.point=U,d&&d.push(p=[]),M=!0,x=!1,S=y=NaN}function V(){f&&(U(_,g),m&&x&&h.rejoin(),f.push(h.result())),A.point=v,x&&u.lineEnd()}function U(P,F){var N=r(P,F);if(d&&p.push([P,F]),M)_=P,g=F,m=N,M=!1,N&&(u.lineStart(),u.point(P,F));else if(N&&x)u.point(P,F);else{var O=[S=Math.max(Bc,Math.min(Za,S)),y=Math.max(Bc,Math.min(Za,y))],W=[P=Math.max(Bc,Math.min(Za,P)),F=Math.max(Bc,Math.min(Za,F))];lI(O,W,i,t,e,n)?(x||(u.lineStart(),u.point(O[0],O[1])),u.point(W[0],W[1]),N||u.lineEnd(),E=!1):N&&(u.lineStart(),u.point(P,F),E=!1)}S=P,y=F,x=N}return A}}const tp=i=>i;var _h=new no,ep=new no,lM,cM,np,ip,Pr={point:Oi,lineStart:Oi,lineEnd:Oi,polygonStart:function(){Pr.lineStart=uI,Pr.lineEnd=hI},polygonEnd:function(){Pr.lineStart=Pr.lineEnd=Pr.point=Oi,_h.add(je(ep)),ep=new no},result:function(){var i=_h/2;return _h=new no,i}};function uI(){Pr.point=fI}function fI(i,t){Pr.point=uM,lM=np=i,cM=ip=t}function uM(i,t){ep.add(ip*i-np*t),np=i,ip=t}function hI(){uM(lM,cM)}var va=1/0,Nu=va,Bl=-va,Fu=Bl,Uu={point:dI,lineStart:Oi,lineEnd:Oi,polygonStart:Oi,polygonEnd:Oi,result:function(){var i=[[va,Nu],[Bl,Fu]];return Bl=Fu=-(Nu=va=1/0),i}};function dI(i,t){i<va&&(va=i),i>Bl&&(Bl=i),t<Nu&&(Nu=t),t>Fu&&(Fu=t)}var rp=0,sp=0,Ja=0,Ou=0,Bu=0,Xo=0,op=0,ap=0,ja=0,fM,hM,ir,rr,Ii={point:io,lineStart:nv,lineEnd:iv,polygonStart:function(){Ii.lineStart=gI,Ii.lineEnd=_I},polygonEnd:function(){Ii.point=io,Ii.lineStart=nv,Ii.lineEnd=iv},result:function(){var i=ja?[op/ja,ap/ja]:Xo?[Ou/Xo,Bu/Xo]:Ja?[rp/Ja,sp/Ja]:[NaN,NaN];return rp=sp=Ja=Ou=Bu=Xo=op=ap=ja=0,i}};function io(i,t){rp+=i,sp+=t,++Ja}function nv(){Ii.point=pI}function pI(i,t){Ii.point=mI,io(ir=i,rr=t)}function mI(i,t){var e=i-ir,n=t-rr,r=lo(e*e+n*n);Ou+=r*(ir+i)/2,Bu+=r*(rr+t)/2,Xo+=r,io(ir=i,rr=t)}function iv(){Ii.point=io}function gI(){Ii.point=vI}function _I(){dM(fM,hM)}function vI(i,t){Ii.point=dM,io(fM=ir=i,hM=rr=t)}function dM(i,t){var e=i-ir,n=t-rr,r=lo(e*e+n*n);Ou+=r*(ir+i)/2,Bu+=r*(rr+t)/2,Xo+=r,r=rr*i-ir*t,op+=r*(ir+i),ap+=r*(rr+t),ja+=r*3,io(ir=i,rr=t)}function pM(i){this._context=i}pM.prototype={_radius:4.5,pointRadius:function(i){return this._radius=i,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(i,t){switch(this._point){case 0:{this._context.moveTo(i,t),this._point=1;break}case 1:{this._context.lineTo(i,t);break}default:{this._context.moveTo(i+this._radius,t),this._context.arc(i,t,this._radius,0,Vi);break}}},result:Oi};var lp=new no,vh,mM,gM,Qa,tl,Vl={point:Oi,lineStart:function(){Vl.point=xI},lineEnd:function(){vh&&_M(mM,gM),Vl.point=Oi},polygonStart:function(){vh=!0},polygonEnd:function(){vh=null},result:function(){var i=+lp;return lp=new no,i}};function xI(i,t){Vl.point=_M,mM=Qa=i,gM=tl=t}function _M(i,t){Qa-=i,tl-=t,lp.add(lo(Qa*Qa+tl*tl)),Qa=i,tl=t}let rv,Vu,sv,ov;class av{constructor(t){this._append=t==null?vM:yI(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==sv||this._append!==Vu){const n=this._radius,r=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,sv=n,Vu=this._append,ov=this._,this._=r}this._+=ov;break}}}result(){const t=this._;return this._="",t.length?t:null}}function vM(i){let t=1;this._+=i[0];for(const e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function yI(i){const t=Math.floor(i);if(!(t>=0))throw new RangeError(`invalid digits: ${i}`);if(t>15)return vM;if(t!==rv){const e=10**t;rv=t,Vu=function(r){let s=1;this._+=r[0];for(const o=r.length;s<o;++s)this._+=Math.round(arguments[s]*e)/e+r[s]}}return Vu}function lv(i,t){let e=3,n=4.5,r,s;function o(a){return a&&(typeof n=="function"&&s.pointRadius(+n.apply(this,arguments)),No(a,r(s))),s.result()}return o.area=function(a){return No(a,r(Pr)),Pr.result()},o.measure=function(a){return No(a,r(Vl)),Vl.result()},o.bounds=function(a){return No(a,r(Uu)),Uu.result()},o.centroid=function(a){return No(a,r(Ii)),Ii.result()},o.projection=function(a){return arguments.length?(r=a==null?(i=null,tp):(i=a).stream,o):i},o.context=function(a){return arguments.length?(s=a==null?(t=null,new av(e)):new pM(t=a),typeof n!="function"&&s.pointRadius(n),o):t},o.pointRadius=function(a){return arguments.length?(n=typeof a=="function"?a:(s.pointRadius(+a),+a),o):n},o.digits=function(a){if(!arguments.length)return e;if(a==null)e=null;else{const l=Math.floor(a);if(!(l>=0))throw new RangeError(`invalid digits: ${a}`);e=l}return t===null&&(s=new av(e)),o},o.projection(i).digits(e).context(t)}function Dm(i){return function(t){var e=new cp;for(var n in i)e[n]=i[n];return e.stream=t,e}}function cp(){}cp.prototype={constructor:cp,point:function(i,t){this.stream.point(i,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Lm(i,t,e){var n=i.clipExtent&&i.clipExtent();return i.scale(150).translate([0,0]),n!=null&&i.clipExtent(null),No(e,i.stream(Uu)),t(Uu.result()),n!=null&&i.clipExtent(n),i}function xM(i,t,e){return Lm(i,function(n){var r=t[1][0]-t[0][0],s=t[1][1]-t[0][1],o=Math.min(r/(n[1][0]-n[0][0]),s/(n[1][1]-n[0][1])),a=+t[0][0]+(r-o*(n[1][0]+n[0][0]))/2,l=+t[0][1]+(s-o*(n[1][1]+n[0][1]))/2;i.scale(150*o).translate([a,l])},e)}function SI(i,t,e){return xM(i,[[0,0],t],e)}function MI(i,t,e){return Lm(i,function(n){var r=+t,s=r/(n[1][0]-n[0][0]),o=(r-s*(n[1][0]+n[0][0]))/2,a=-s*n[0][1];i.scale(150*s).translate([o,a])},e)}function TI(i,t,e){return Lm(i,function(n){var r=+t,s=r/(n[1][1]-n[0][1]),o=-s*n[0][0],a=(r-s*(n[1][1]+n[0][1]))/2;i.scale(150*s).translate([o,a])},e)}var cv=16,EI=un(30*ci);function uv(i,t){return+t?AI(i,t):bI(i)}function bI(i){return Dm({point:function(t,e){t=i(t,e),this.stream.point(t[0],t[1])}})}function AI(i,t){function e(n,r,s,o,a,l,c,u,h,f,d,p,_,g){var m=c-n,S=u-r,y=m*m+S*S;if(y>4*t&&_--){var x=o+f,M=a+d,E=l+p,A=lo(x*x+M*M+E*E),v=Ol(E/=A),b=je(je(E)-1)<He||je(s-h)<He?(s+h)/2:Ul(M,x),w=i(b,v),C=w[0],L=w[1],V=C-n,U=L-r,P=S*V-m*U;(P*P/y>t||je((m*V+S*U)/y-.5)>.3||o*f+a*d+l*p<EI)&&(e(n,r,s,o,a,l,C,L,b,x/=A,M/=A,E,_,g),g.point(C,L),e(C,L,b,x,M,E,c,u,h,f,d,p,_,g))}}return function(n){var r,s,o,a,l,c,u,h,f,d,p,_,g={point:m,lineStart:S,lineEnd:x,polygonStart:function(){n.polygonStart(),g.lineStart=M},polygonEnd:function(){n.polygonEnd(),g.lineStart=S}};function m(v,b){v=i(v,b),n.point(v[0],v[1])}function S(){h=NaN,g.point=y,n.lineStart()}function y(v,b){var w=_a([v,b]),C=i(v,b);e(h,f,u,d,p,_,h=C[0],f=C[1],u=v,d=w[0],p=w[1],_=w[2],cv,n),n.point(h,f)}function x(){g.point=m,n.lineEnd()}function M(){S(),g.point=E,g.lineEnd=A}function E(v,b){y(r=v,b),s=h,o=f,a=d,l=p,c=_,g.point=y}function A(){e(h,f,u,d,p,_,s,o,r,a,l,c,cv,n),g.lineEnd=x,x()}return g}}var wI=Dm({point:function(i,t){this.stream.point(i*ci,t*ci)}});function RI(i){return Dm({point:function(t,e){var n=i(t,e);return this.stream.point(n[0],n[1])}})}function CI(i,t,e,n,r){function s(o,a){return o*=n,a*=r,[t+i*o,e-i*a]}return s.invert=function(o,a){return[(o-t)/i*n,(e-a)/i*r]},s}function fv(i,t,e,n,r,s){if(!s)return CI(i,t,e,n,r);var o=un(s),a=fn(s),l=o*i,c=a*i,u=o/i,h=a/i,f=(a*e-o*t)/i,d=(a*t+o*e)/i;function p(_,g){return _*=n,g*=r,[l*_-c*g+t,e-c*_-l*g]}return p.invert=function(_,g){return[n*(u*_-h*g+f),r*(d-h*_-u*g)]},p}function PI(i){return DI(function(){return i})()}function DI(i){var t,e=150,n=480,r=250,s=0,o=0,a=0,l=0,c=0,u,h=0,f=1,d=1,p=null,_=ev,g=null,m,S,y,x=tp,M=.5,E,A,v,b,w;function C(P){return v(P[0]*ci,P[1]*ci)}function L(P){return P=v.invert(P[0],P[1]),P&&[P[0]*Er,P[1]*Er]}C.stream=function(P){return b&&w===P?b:b=wI(RI(u)(_(E(x(w=P)))))},C.preclip=function(P){return arguments.length?(_=P,p=void 0,U()):_},C.postclip=function(P){return arguments.length?(x=P,g=m=S=y=null,U()):x},C.clipAngle=function(P){return arguments.length?(_=+P?aI(p=P*ci):(p=null,ev),U()):p*Er},C.clipExtent=function(P){return arguments.length?(x=P==null?(g=m=S=y=null,tp):cI(g=+P[0][0],m=+P[0][1],S=+P[1][0],y=+P[1][1]),U()):g==null?null:[[g,m],[S,y]]},C.scale=function(P){return arguments.length?(e=+P,V()):e},C.translate=function(P){return arguments.length?(n=+P[0],r=+P[1],V()):[n,r]},C.center=function(P){return arguments.length?(s=P[0]%360*ci,o=P[1]%360*ci,V()):[s*Er,o*Er]},C.rotate=function(P){return arguments.length?(a=P[0]%360*ci,l=P[1]%360*ci,c=P.length>2?P[2]%360*ci:0,V()):[a*Er,l*Er,c*Er]},C.angle=function(P){return arguments.length?(h=P%360*ci,V()):h*Er},C.reflectX=function(P){return arguments.length?(f=P?-1:1,V()):f<0},C.reflectY=function(P){return arguments.length?(d=P?-1:1,V()):d<0},C.precision=function(P){return arguments.length?(E=uv(A,M=P*P),U()):lo(M)},C.fitExtent=function(P,F){return xM(C,P,F)},C.fitSize=function(P,F){return SI(C,P,F)},C.fitWidth=function(P,F){return MI(C,P,F)},C.fitHeight=function(P,F){return TI(C,P,F)};function V(){var P=fv(e,0,0,f,d,h).apply(null,t(s,o)),F=fv(e,n-P[0],r-P[1],f,d,h);return u=Q3(a,l,c),A=jd(t,F),v=jd(u,A),E=uv(A,M),U()}function U(){return b=w=null,C}return function(){return t=i.apply(this,arguments),C.invert=t.invert&&L,V()}}function up(i,t){return[i,t]}up.invert=up;function hv(){return PI(up).scale(152.63)}function Do(i){if(!i||i.trim()==="")return{r:0,g:0,b:0,a:0};const t=i.trim(),e=t.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i);if(e){const r=Math.max(0,Math.min(255,parseFloat(e[1])))/255,s=Math.max(0,Math.min(255,parseFloat(e[2])))/255,o=Math.max(0,Math.min(255,parseFloat(e[3])))/255,a=e[4]!==void 0?Math.max(0,Math.min(1,parseFloat(e[4]))):1;return{r,g:s,b:o,a}}const n=t.replace(/^#/,"");return n.length===8?{r:parseInt(n.slice(0,2),16)/255,g:parseInt(n.slice(2,4),16)/255,b:parseInt(n.slice(4,6),16)/255,a:parseInt(n.slice(6,8),16)/255}:n.length===6?{r:parseInt(n.slice(0,2),16)/255,g:parseInt(n.slice(2,4),16)/255,b:parseInt(n.slice(4,6),16)/255,a:1}:n.length===4?{r:parseInt(n[0]+n[0],16)/255,g:parseInt(n[1]+n[1],16)/255,b:parseInt(n[2]+n[2],16)/255,a:parseInt(n[3]+n[3],16)/255}:n.length===3?{r:parseInt(n[0]+n[0],16)/255,g:parseInt(n[1]+n[1],16)/255,b:parseInt(n[2]+n[2],16)/255,a:1}:{r:0,g:0,b:0,a:1}}function Gr(i,t,e,n,r){if(e===t)return n;const s=(i-t)/(e-t);return n+s*(r-n)}function LI(i){if(i===0)return 0;const t=Math.max(0,Math.min(10,i));return Gr(t,0,10,0,.9)}function II(i){const t=Math.max(1,Math.min(10,i));return Gr(t,1,10,24,8)}function NI(i){const t=Math.max(1,Math.min(20,i));return Gr(t,1,20,.2,2)}function FI(i){const t=Math.max(1,Math.min(10,i));return Gr(t,1,10,.1,.5)}function UI(i){const t=Math.max(0,Math.min(100,i));return Gr(t,0,100,.1,2.5)}function OI(i){return Math.max(0,Math.min(1,i/10))}function BI(i){return Gr(Math.max(0,Math.min(10,i)),0,10,.001,.02)}function VI(i){const t=Math.max(1,Math.min(10,i));return Gr(t,1,10,10,1)}function kI(i,t){if(i.length<2||t>=10)return i;const e=Math.max(1,Math.floor(VI(t))),n=[];n.push(i[0]);for(let a=e;a<i.length-1;a+=e){const l=Math.min(a,i.length-1);n.push(i[l])}const r=i[i.length-1],s=i[0];return Math.abs(r[0]-s[0])<1e-4&&Math.abs(r[1]-s[1])<1e-4||n.push(r),n.length>=2?n:i}function Ua(i,t){const e=i*(Math.PI/180),n=t*(Math.PI/180),r=Math.cos(e)*Math.sin(n),s=Math.sin(e),o=Math.cos(e)*Math.cos(n);return{x:r,y:s,z:o}}function zI({speed:i=2,smoothing:t=8,dots:e={color:"#ffffff",size:5,density:8,allDots:!1},fill:n="dots",fillColor:r="#ffffff",scale:s=8,stopOnHover:o=!0,markerConfig:a={markers:[],color:"#00f7ff",size:40},direction:l="left",initialLatitude:c=23,initialLongitude:u=-23,oceanColor:h="#000000",outlineColor:f="#ffffff",showOutline:d=!0,graticuleColor:p="#D4D4D4",showGrid:_=!0,outlineWidth:g=1,dragSpeed:m=5,detail:S=5,style:y}){const x=at.useRef(null),[,M]=at.useState(!0),[E,A]=at.useState(null),v=e.color,b=e.size,w=e.density,C=e.allDots,L=1,V=OI(t),U=LI(i),P=l==="left"?-U:U,F=II(w),N=FI(b),O=UI(a.size),W=NI(s);at.useEffect(()=>{if(!x.current)return;const et=x.current,lt=et.clientWidth||et.offsetWidth||800,Pt=et.clientHeight||et.offsetHeight||600,Lt=new mC,Tt=new Di(50,lt/Pt,.1,1e3),tt=1*W,st=2.5/W;Tt.position.set(0,0,st),Tt.lookAt(0,0,0);const ot=new $3({antialias:!0,alpha:!0});ot.setSize(lt,Pt),ot.setPixelRatio(Math.min(window.devicePixelRatio,2)),ot.outputColorSpace="srgb";const pt=ot.domElement;pt.style.position="absolute",pt.style.inset="0",pt.style.width="100%",pt.style.height="100%",pt.style.display="block",pt.style.opacity="0",pt.style.visibility="hidden",et.appendChild(pt);const xt=h,Vt=f,ht=v,Ot=a.color,Wt=p,zt=r,X=Do(xt),Jt=Do(Vt),le=Do(ht);Do(Ot);const ue=Do(Wt),Kt=Do(zt),ae=new Ho(tt,64,64),k=xt?new de(xt):new de(0,0,0),Le=new Ar({color:k,transparent:X.a<1||X.a===0,opacity:X.a}),Xt=new En(ae,Le);if(Lt.add(Xt),d&&f&&Jt.a>0){const Rt=[];for(let $t=0;$t<=128;$t++){const It=$t/128*Math.PI*2,ne=Math.cos(It)*tt,jt=Math.sin(It)*tt;Rt.push(ne,jt,0)}const Nt=[];for(let $t=0;$t<Rt.length;$t+=3)Nt.push(new H(Rt[$t],Rt[$t+1],Rt[$t+2]));if(Nt.length>=2){Nt.push(Nt[0].clone());const $t=new de(Vt),It=new Ar({color:$t,transparent:Jt.a<1,opacity:Jt.a}),ne=new $a(Nt),jt=g/10*.01,Qt=new Wo(ne,Nt.length*2,jt,8,!1);new En(Qt,It)}}const D=new Vs,T=new Vs;if(_&&Wt&&ue.a>0){const Rt=Wt?new de(Wt):new de(1,1,1),Mt=new Ar({color:Rt,transparent:ue.a<1||ue.a===0,opacity:ue.a}),Nt=15;for(let $t=-90;$t<=90;$t+=Nt){const It=[];for(let jt=0;jt<=64;jt++){const Qt=jt/64*360-180,fe=Ua($t,Qt);It.push(fe.x*tt,fe.y*tt,fe.z*tt)}if(It&&It.length>=6){const jt=[];for(let Qt=0;Qt<It.length;Qt+=3)jt.push(new H(It[Qt],It[Qt+1],It[Qt+2]));if(jt.length>=2){const Qt=new $a(jt),fe=L/10*.01,ce=new Wo(Qt,jt.length*2,fe,8,!1),Xe=new En(ce,Mt);Xe.renderOrder=0,T.add(Xe)}}}for(let $t=-180;$t<180;$t+=Nt){const It=[];for(let jt=0;jt<=64;jt++){const Qt=jt/64*180-90,fe=Ua(Qt,$t);It.push(fe.x*tt,fe.y*tt,fe.z*tt)}if(It&&It.length>=6){const jt=[];for(let Qt=0;Qt<It.length;Qt+=3)jt.push(new H(It[Qt],It[Qt+1],It[Qt+2]));if(jt.length>=2){const Qt=new $a(jt),fe=L/10*.01,ce=new Wo(Qt,jt.length*2,fe,8,!1),Xe=new En(ce,Mt);Xe.renderOrder=0,T.add(Xe)}}}}let z=null,Y=[];const Q=async()=>{try{M(!0);const Rt=await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/50m/physical/ne_50m_land.json");if(!Rt.ok)throw new Error("Failed to load land data");const Mt=await Rt.json();for(;D.children.length>0;)D.remove(D.children[0]);if(d&&f&&Jt.a>0){const pe=new de(Vt),Ye=new Ar({color:pe,transparent:Jt.a<1,opacity:Jt.a,depthTest:!0,depthWrite:!0}),we=hv(),Re=lv().projection(we);let Te=0,ye=0;Mt.features.forEach(Fe=>{var Z,q,$;const An=((Z=Fe.properties)==null?void 0:Z.featurecla)||((q=Fe.properties)==null?void 0:q.type)||"",ze=(($=Fe.properties)==null?void 0:$.name)||"";if(An.toLowerCase().includes("graticule")||An.toLowerCase().includes("grid")||An.toLowerCase().includes("line")||ze.toLowerCase().includes("graticule")||ze.toLowerCase().includes("grid")||ze.toLowerCase().includes("line")){ye++;return}Te++;const Ie=Re(Fe);if(!Ie||(Ie.match(/[ML][^MLZ]*/g)||[]).length===0)return;const R=Fe.geometry;if(!R||!R.coordinates)return;const G=At=>{if(At.length<2)return;const Dt=kI(At,S),Ct=[];if(Dt.forEach(Ft=>{const[Bt,re]=Ft,se=Ua(re,Bt);Ct.push(se.x*tt,se.y*tt,se.z*tt)}),Ct&&Ct.length>=6){const Ft=[];for(let Bt=0;Bt<Ct.length;Bt+=3)Ft.push(new H(Ct[Bt],Ct[Bt+1],Ct[Bt+2]));if(Ft.length>0&&Ft[0].distanceTo(Ft[Ft.length-1])>.001&&Ft.push(Ft[0].clone()),Ft.length>=2){const Bt=new $a(Ft),re=g/10*.01,se=new Wo(Bt,Ft.length*2,re,8,!1),qt=new En(se,Ye);qt.renderOrder=0,D.add(qt)}}};R.type==="Polygon"&&R.coordinates.length>0?G(R.coordinates[0]):R.type==="MultiPolygon"&&R.coordinates.forEach(At=>{At.length>0&&G(At[0])})}),console.log(`[Globe] Processed ${Te} land features, skipped ${ye} grid features`)}const Nt=2048,$t=1024,It=document.createElement("canvas");It.width=Nt,It.height=$t;const ne=It.getContext("2d",{willReadFrequently:!0});if(!ne)throw new Error("Canvas not supported");const jt=hv().fitSize([Nt,$t],{type:"Sphere"}),Qt=lv().projection(jt).context(ne);ne.fillStyle="#000",ne.fillRect(0,0,Nt,$t),ne.fillStyle="#fff",ne.beginPath(),Mt.features.forEach(pe=>{Qt(pe)}),ne.fill();const ce=ne.getImageData(0,0,Nt,$t).data,Xe=(pe,Ye)=>{const we=Math.round((pe+180)/360*Nt)%Nt,Re=Math.round((90-Ye)/180*$t),ye=(Math.max(0,Math.min($t-1,Re))*Nt+we)*4;return ce[ye]>128};if(n==="solid"){const we=document.createElement("canvas");we.width=1024,we.height=512;const Re=we.getContext("2d"),Te=Re.createImageData(1024,512),ye=Te.data,Fe=Math.round(Kt.r*255),An=Math.round(Kt.g*255),ze=Math.round(Kt.b*255),Ie=Math.round((Kt.a||1)*255);for(let Z=0;Z<512;Z++)for(let q=0;q<1024;q++){const $=q/1024,At=Z/512;let Dt=($-.25)*360;Dt=((Dt+180)%360+360)%360-180;const Ct=(At-.5)*180,Ft=C||Xe(Dt,Ct),Bt=(Z*1024+q)*4;Ft?(ye[Bt]=Fe,ye[Bt+1]=An,ye[Bt+2]=ze,ye[Bt+3]=Ie):ye[Bt+3]=0}Re.putImageData(Te,0,0);const on=new AC(we);on.flipY=!1,on.needsUpdate=!0;const R=new Ho(tt*1.002,64,64),G=new Ar({map:on,transparent:!0});z=new En(R,G),nt.add(z)}else{const pe=[],Ye=F*.08;for(let we=-90;we<=90;we+=Ye){const Re=Math.abs(we)*Math.PI/180,Te=Math.cos(Re),ye=Te>.01?Ye/Math.max(.3,Te):360;for(let Fe=-180;Fe<180;Fe+=ye)(C||Xe(Fe,we))&&pe.push([Fe,we])}if(pe.length>0){const we=new Ho(.01*N,4,4),Re=ht?new de(ht):new de(.6,.6,.6),Te=new Ar({color:Re,transparent:le.a<1||le.a===0,opacity:le.a}),ye=new MC(we,Te,pe.length),Fe=new We;for(let An=0;An<pe.length;An++){const[ze,Ie]=pe[An],on=Ua(Ie,ze);Fe.makeScale(1,1,1),Fe.setPosition(on.x*tt,on.y*tt,on.z*tt),ye.setMatrixAt(An,Fe)}ye.instanceMatrix.needsUpdate=!0,z=ye,nt.add(z)}}dt(),ot.render(Lt,Tt),pt.style.opacity="1",pt.style.visibility="visible",M(!1)}catch{A("Failed to load land map data"),M(!1)}},dt=()=>{if(Y.forEach(Rt=>nt.remove(Rt)),Y=[],a.markers&&a.markers.length>0){const Rt=.01*O,Mt=new Ho(Rt,16,16),Nt=Ot?new de(Ot):new de(1,1,1),$t=new Ar({color:Nt});a.markers.forEach(It=>{if(!It||typeof It.lat!="number"||typeof It.lng!="number")return;const ne=Ua(It.lat,It.lng),jt=new En(Mt,$t.clone());jt.position.set(ne.x*tt,ne.y*tt,ne.z*tt),nt.add(jt),Y.push(jt)})}},rt=u*Math.PI/180,K=c*Math.PI/180,J={x:rt,y:K},ft={x:rt,y:K},Et={x:0,y:0};let mt=!1,yt=!1,vt=0,kt=0,Yt=null;const B=V===0?1:Gr(V,0,1,.4,.03),St=Gr(V,0,1,.7,.96),nt=new Vs;nt.rotation.y=rt,nt.rotation.x=K,Lt.add(nt),nt.add(Xt),_&&p&&ue.a>0&&nt.add(T),nt.add(D),Y.forEach(Rt=>nt.add(Rt));const bt=()=>{let Rt=!1;const Mt=.01;!mt&&P!==0&&(!o||!yt)&&(ft.x+=P*.01),!mt&&V>0&&(Math.abs(Et.x)>Mt||Math.abs(Et.y)>Mt?(ft.x+=Et.x,ft.y+=Et.y,ft.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,ft.y)),Et.x*=St,Et.y*=St):(Et.x=0,Et.y=0));const Nt=ft.x-J.x,$t=ft.y-J.y;(Math.abs(Nt)>Mt||Math.abs($t)>Mt||P!==0||mt)&&(J.x+=Nt*B,J.y+=$t*B,J.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,J.y)),Rt=!0),(Rt||P!==0||mt)&&(nt.rotation.y=J.x,nt.rotation.x=J.y,ot.render(Lt,Tt));const It=Math.abs(Et.x)>Mt||Math.abs(Et.y)>Mt,ne=Math.abs(Nt)>Mt||Math.abs($t)>Mt;mt||P!==0||It||ne?Yt=requestAnimationFrame(bt):Yt=null},wt=()=>{Yt===null&&(Yt=requestAnimationFrame(bt))};P!==0&&wt();const ut=Rt=>{mt=!0,Et.x=0,Et.y=0,vt=Rt.clientX,kt=Rt.clientY,wt();const Mt=$t=>{const It=BI(m),ne=$t.clientX-vt,jt=$t.clientY-kt;ft.x+=ne*It,ft.y+=jt*It,ft.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,ft.y)),Et.x=ne*It*.3,Et.y=jt*It*.3,vt=$t.clientX,kt=$t.clientY},Nt=()=>{document.removeEventListener("mousemove",Mt),document.removeEventListener("mouseup",Nt),mt=!1};document.addEventListener("mousemove",Mt),document.addEventListener("mouseup",Nt)};pt.addEventListener("mousedown",ut);const gt=new jC,ct=new ee,Zt=Rt=>{if(!o)return;const Mt=pt.getBoundingClientRect();ct.x=(Rt.clientX-Mt.left)/Mt.width*2-1,ct.y=-((Rt.clientY-Mt.top)/Mt.height)*2+1,gt.setFromCamera(ct,Tt),yt=gt.intersectObject(Xt).length>0};pt.addEventListener("mousemove",Zt);const _t=new ResizeObserver(()=>{const Rt=et.clientWidth||et.offsetWidth||800,Mt=et.clientHeight||et.offsetHeight||600;Tt.aspect=Rt/Mt,Tt.updateProjectionMatrix(),ot.setSize(Rt,Mt);const Nt=2.5/W;Tt.position.set(0,0,Nt),Tt.lookAt(0,0,0),ot.render(Lt,Tt)});return _t.observe(et),Q(),()=>{Yt!==null&&cancelAnimationFrame(Yt),pt.removeEventListener("mousedown",ut),pt.removeEventListener("mousemove",Zt),_t.disconnect(),ot.dispose(),et.removeChild(pt)}},[i,t,e,n,r,C,w,b,v,s,o,a,l,c,u,h,f,d,p,_,g,m,S,P,F,N,O,W]);const I={...y,position:"relative",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return E?it.jsx("div",{style:I,children:it.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minWidth:0,minHeight:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#ffffff",textAlign:"center",padding:"16px",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},children:[it.jsx("div",{style:{fontSize:"16px",fontWeight:600},children:"Error loading Earth visualization"}),it.jsx("div",{style:{fontSize:"13px",opacity:.7,marginTop:"4px"},children:E})]})}):it.jsx("div",{ref:x,style:I})}const yM=i=>i.toLocaleString("en-US"),dv='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';function GI(){const[i,t]=at.useState(null),[e,n]=at.useState("0");return at.useEffect(()=>{let r=!0;const s=()=>fetch("/api/stats").then(a=>a.ok?a.json():null).then(a=>{a&&r&&t(a)}).catch(()=>{});fetch("/api/live").then(a=>a.ok?a.json():null).then(a=>{a&&r&&n(a.n)}).catch(()=>{}),s();const o=setInterval(s,3e4);return()=>{r=!1,clearInterval(o)}},[]),{stats:i,live:e}}function HI({to:i,dec:t=0,suffix:e=""}){const[n,r]=at.useState(0),s=pv.useRef(null);at.useEffect(()=>{const a=s.current;if(!a||i==null)return;if(matchMedia("(prefers-reduced-motion: reduce)").matches){r(i);return}const l=new IntersectionObserver(c=>{if(!c[0].isIntersecting)return;l.disconnect();const u=performance.now(),h=900;(function f(d){const p=Math.min(1,(d-u)/h);r(i*(1-Math.pow(1-p,3))),p<1&&requestAnimationFrame(f)})(u)},{threshold:.3});return l.observe(a),()=>l.disconnect()},[i]);const o=t?n.toFixed(t):yM(Math.round(n));return it.jsxs("span",{ref:s,children:[o,e]})}function Vc({label:i,value:t,dec:e=0,suffix:n=""}){return it.jsxs("div",{className:"stat",children:[it.jsx("span",{className:"sl",children:i}),it.jsx("span",{className:"sv",children:it.jsx(HI,{to:t,dec:e,suffix:n})})]})}const WI=[{h:"Cookieless by design",p:"Visitor identity is a daily-rotating hash of IP and user agent, kept entirely server-side. No cookies, no consent banners, no fingerprinting.",mono:"identity = hash(ip + ua + salt) / rotates daily"},{h:"353 B snippet",p:"One line of JavaScript loaded from your own domain. It never touches a third-party server, ever.",mono:"one line of JS / gzipped / server-relative"},{h:"One process",p:"Express, geoip-lite and SQLite in a single Node server. Nothing to orchestrate, no queue, no warehouse.",mono:"node server.js / SQLite on disk"},{h:"Realtime",p:"The live counter and the daily chart update on every request. No batch jobs, no polling, no stale numbers.",mono:"current visitors / updates per request"}],XI=[{n:"1",h:"Add the snippet",p:"Paste one script tag into any page. It beacons back to wherever it was loaded from."},{n:"2",h:"Visit your site",p:"Each request is counted as a real visit. No JavaScript is needed on the visitor side."},{n:"3",h:"Watch it live",p:"The dashboard updates with current visitors, sources, pages and devices."}];function YI(){const{stats:i,live:t}=GI(),[e,n]=at.useState(null);at.useEffect(()=>{let s=!0;return fetch("/api/countries").then(o=>o.ok?o.json():null).then(o=>{o&&s&&n(o.filter(a=>a.lat!=null))}).catch(()=>{}),()=>{s=!1}},[]);const r=(e||[]).map(s=>({lat:s.lat,lng:s.lng}));return it.jsxs("div",{className:"page",children:[it.jsx("nav",{children:it.jsxs("div",{className:"nav-inner",children:[it.jsxs("a",{className:"brand",href:"/",children:[it.jsx("i",{}),"peek"]}),it.jsxs("div",{className:"nav-links",children:[it.jsxs("span",{className:"chip",title:"Visitors on the dashboard right now",children:[it.jsx("i",{}),it.jsx("b",{children:t})," live"]}),it.jsx("a",{href:"https://github.com/trippusultan/peek",children:"GitHub"}),it.jsx("a",{href:"/dashboard",children:"Dashboard"})]})]})}),it.jsxs("header",{className:"hero",children:[it.jsx("div",{className:"hero-bg","aria-hidden":"true",children:it.jsx(SA,{particleColor:"rgba(245,245,245,0.5)",backgroundColor:"#0a0a0a",maxSize:22,minSize:8,gap:6,influence:240})}),it.jsxs("div",{className:"hero-copy",children:[it.jsx("p",{className:"eyebrow",children:it.jsx(vR,{text:"COOKIELESS WEB ANALYTICS",brightColor:"#f5f5f5",dimColor:"rgba(245,245,245,0.28)",maskSize:120})}),it.jsx(uA,{tag:"h1",text:"Website analytics without the cookies.",color:"#f5f5f5",font:{fontFamily:dv,fontWeight:800,fontSize:72,lineHeight:"1.02em",letterSpacing:"-0.045em",textAlign:"left"},stagger:.022,startRotateY:-90,startOpacity:0,perspective:1400}),it.jsx("p",{className:"sub",children:"One process, one snippet, zero tracking scripts. Real visitors, private by default."}),it.jsxs("div",{className:"hero-ctas",children:[it.jsx(dA,{label:"View dashboard",link:"/dashboard",fill:"#f5f5f5",textColor:"#0a0a0a",sweepColor:"#e8e8e8",sweepTextColor:"#0a0a0a",paddingX:26,paddingY:14,radius:8,border:!1,font:{fontFamily:dv,fontWeight:650,fontSize:15,lineHeight:"1em",letterSpacing:"-0.01em",textAlign:"left"}}),it.jsx("a",{className:"btn btn-ghost",href:"https://github.com/trippusultan/peek",children:"GitHub"})]})]}),it.jsx("div",{className:"hero-art","aria-label":"The peek dashboard rendered as live ASCII art; move the cursor to reveal the real screenshot",children:it.jsx(xA,{image:"/peek-dashboard.png",columns:130,invert:!1,contrast:1.1,inkColor:"#f5f5f5",reveal:!0,revealOptions:{size:190,softness:24},style:{width:"100%",height:"100%",borderRadius:16}})})]}),it.jsx("section",{className:"marquee","aria-hidden":"true",children:it.jsx(MA,{text:"COOKIELESS WEB ANALYTICS",separator:"  /  ",textColor:"rgba(245,245,245,0.16)",speed:1.4,reversed:!1,waveFrequency:.035,waveHeight:26,width:"100%",height:110,className:"mq"})}),it.jsxs("section",{className:"product container",children:[it.jsx(AA,{color:"#3a3a3a",glowColor:"rgba(245,245,245,0.55)",glowIntensity:3,chaos:2.5,thickness:1.5,speed:.8,borderRadius:18,children:it.jsxs("div",{className:"browser",children:[it.jsxs("div",{className:"b-bar",children:[it.jsx("span",{className:"b-dot"}),it.jsx("span",{className:"b-dot"}),it.jsx("span",{className:"b-dot"}),it.jsx("span",{className:"b-url",children:"peek-a6sg.onrender.com/dashboard"})]}),it.jsx("img",{src:"/peek-dashboard.png",alt:"The peek dashboard: visitor trend chart, four KPI cards and a traffic table",width:"1440",height:"900",fetchpriority:"high"})]})}),it.jsx("p",{className:"pcap",children:"The live dashboard. Same screen behind the auth gate."})]}),it.jsx("section",{className:"stats",children:it.jsxs("div",{className:"stats-inner",children:[it.jsx(Vc,{label:"Current visitors",value:i?i.live:0}),it.jsx(Vc,{label:"Pageviews (7d)",value:i?i.pv:0}),it.jsx(Vc,{label:"Visitors (7d)",value:i?i.uv:0}),it.jsx(Vc,{label:"Bounce rate (7d)",value:i?i.bounce:0,dec:1,suffix:"%"})]})}),it.jsxs("section",{className:"features container",children:[it.jsx("h2",{children:"Built to ask for nothing."}),it.jsx("div",{className:"fgrid",children:WI.map((s,o)=>it.jsxs("div",{className:"fcell",children:[it.jsx(RA,{title:s.h,textColor:"#f5f5f5",hoverColor:"#f5f5f5",fontSize:19,fontWeight:700,duration:.3}),it.jsx("p",{children:s.p}),it.jsx("div",{className:"mono",children:s.mono})]},s.h))})]}),it.jsxs("section",{className:"how container",children:[it.jsx("h2",{children:"Live in three steps."}),it.jsx("div",{className:"steps",children:XI.map(s=>it.jsxs("div",{className:"step",children:[it.jsx("span",{className:"n",children:s.n}),it.jsxs("div",{children:[it.jsx("h3",{children:s.h}),it.jsx("p",{children:s.p}),s.n==="1"&&it.jsx("pre",{className:"code",children:it.jsx("code",{children:'<script defer data-site="your-site-name" src="https://YOUR-RENDER-URL/s.js"><\/script>'})})]})]},s.n))})]}),it.jsxs("section",{className:"globe-section container",children:[it.jsx("h2",{children:"Traffic around the world."}),it.jsxs("div",{className:"globe-wrap",children:[it.jsx("div",{className:"globe","aria-label":"3D globe with markers at the countries your visitors came from",children:it.jsx(zI,{speed:1.6,dots:{color:"#3a3a3a",size:5,density:7,allDots:!1},fill:"dots",fillColor:"#f5f5f5",oceanColor:"#0a0a0a",outlineColor:"#2a2a2a",showOutline:!0,graticuleColor:"#2e2e2e",showGrid:!0,markerConfig:{markers:r,color:"#f5f5f5",size:34},initialLatitude:20,initialLongitude:-10,stopOnHover:!0})}),it.jsxs("div",{className:"country-list",children:[(e||[]).slice(0,8).map((s,o)=>it.jsxs("div",{className:"crow",children:[it.jsx("span",{className:"cn",children:String(o+1).padStart(2,"0")}),it.jsx("span",{className:"nm2",children:s.name}),it.jsx("span",{className:"cv",children:yM(s.pv)})]},s.code)),(!e||e.length===0)&&it.jsx("p",{className:"empty",children:"No traffic yet. Visit the landing page to light up your first marker."})]})]})]}),it.jsx("section",{className:"white",children:it.jsxs("div",{className:"w-inner",children:[it.jsx("h2",{children:"Your data stays yours."}),it.jsx("p",{className:"w-statement",children:it.jsx(mR,{text:"No account, no cloud, no cookies, no third-party scripts. Every record lives in a SQLite file on your own server.",dimColor:"rgba(10,10,10,0.38)",highlightColor:"#0a0a0a",splitBy:"word",scrub:!0})}),it.jsx("div",{className:"w-cta",children:it.jsx(_R,{text:"View dashboard",link:"/dashboard",textColor:"#f5f5f5",shineColor:"#0a0a0a",speed:1.8,style:{background:"#0a0a0a",padding:"14px 30px",borderRadius:8,fontSize:16,fontWeight:650}})}),it.jsx("figure",{className:"w-phone",children:it.jsx("img",{src:"/peek-mobile.png",alt:"The peek dashboard on a phone",width:"390",height:"844",loading:"lazy"})})]})}),it.jsx("footer",{children:it.jsxs("div",{className:"foot",children:[it.jsx("span",{children:"peek - privacy-first analytics"}),it.jsxs("span",{children:["built by ",it.jsx("a",{href:"https://github.com/trippusultan",children:"trippusultan"})]})]})})]})}SM(document.getElementById("root")).render(it.jsx(pv.StrictMode,{children:it.jsx(YI,{})}));
