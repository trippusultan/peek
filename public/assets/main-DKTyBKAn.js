import{r as et,j,R as Od,c as Eg}from"./client-DPVzX2tD.js";const Bd=et.createContext({});function Uo(n){const t=et.useRef(null);return t.current===null&&(t.current=n()),t.current}const kc=et.createContext(null),oa=et.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Tg(n=!0){const t=et.useContext(kc);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:i,register:s}=t,r=et.useId();et.useEffect(()=>{n&&s(r)},[n]);const o=et.useCallback(()=>n&&i&&i(r),[r,i,n]);return!e&&i?[!1,o]:[!0]}const Gc=typeof window<"u",Hc=Gc?et.useLayoutEffect:et.useEffect,dn=n=>n;let Vd=dn;function Wc(n){let t;return()=>(t===void 0&&(t=n()),t)}const Qi=(n,t,e)=>{const i=t-n;return i===0?1:(e-n)/i},Yn=n=>n*1e3,$n=n=>n/1e3,bg={useManualTiming:!1};function Ag(n){let t=new Set,e=new Set,i=!1,s=!1;const r=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){r.has(c)&&(l.schedule(c),n()),c(o)}const l={schedule:(c,u=!1,f=!1)=>{const d=f&&i?t:e;return u&&r.add(c),d.has(c)||d.add(c),c},cancel:c=>{e.delete(c),r.delete(c)},process:c=>{if(o=c,i){s=!0;return}i=!0,[t,e]=[e,t],t.forEach(a),t.clear(),i=!1,s&&(s=!1,l.process(c))}};return l}const Xr=["read","resolveKeyframes","update","preRender","render","postRender"],wg=40;function zd(n,t){let e=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>e=!0,o=Xr.reduce((p,S)=>(p[S]=Ag(r),p),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:f,postRender:h}=o,d=()=>{const p=performance.now();e=!1,s.delta=i?1e3/60:Math.max(Math.min(p-s.timestamp,wg),1),s.timestamp=p,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),u.process(s),f.process(s),h.process(s),s.isProcessing=!1,e&&t&&(i=!1,n(d))},g=()=>{e=!0,i=!0,s.isProcessing||n(d)};return{schedule:Xr.reduce((p,S)=>{const M=o[S];return p[S]=(_,b=!1,T=!1)=>(e||g(),M.schedule(_,b,T)),p},{}),cancel:p=>{for(let S=0;S<Xr.length;S++)o[Xr[S]].cancel(p)},state:s,steps:o}}const{schedule:_e,cancel:mi,state:He,steps:ya}=zd(typeof requestAnimationFrame<"u"?requestAnimationFrame:dn,!0),kd=et.createContext({strict:!1}),Hu={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},zs={};for(const n in Hu)zs[n]={isEnabled:t=>Hu[n].some(e=>!!t[e])};function Rg(n){for(const t in n)zs[t]={...zs[t],...n[t]}}const Cg=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Fo(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Cg.has(n)}let Gd=n=>!Fo(n);function Pg(n){n&&(Gd=t=>t.startsWith("on")?!Fo(t):n(t))}try{Pg(require("@emotion/is-prop-valid").default)}catch{}function Dg(n,t,e){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(Gd(s)||e===!0&&Fo(s)||!t&&!Fo(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}function Lg(n){if(typeof Proxy>"u")return n;const t=new Map,e=(...i)=>n(...i);return new Proxy(e,{get:(i,s)=>s==="create"?n:(t.has(s)||t.set(s,n(s)),t.get(s))})}const aa=et.createContext({});function Rr(n){return typeof n=="string"||Array.isArray(n)}function la(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Xc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qc=["initial",...Xc];function ca(n){return la(n.animate)||qc.some(t=>Rr(n[t]))}function Hd(n){return!!(ca(n)||n.variants)}function Ig(n,t){if(ca(n)){const{initial:e,animate:i}=n;return{initial:e===!1||Rr(e)?e:void 0,animate:Rr(i)?i:void 0}}return n.inherit!==!1?t:{}}function Ng(n){const{initial:t,animate:e}=Ig(n,et.useContext(aa));return et.useMemo(()=>({initial:t,animate:e}),[Wu(t),Wu(e)])}function Wu(n){return Array.isArray(n)?n.join(" "):n}const Ug=Symbol.for("motionComponentSymbol");function Rs(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Fg(n,t,e){return et.useCallback(i=>{i&&n.onMount&&n.onMount(i),t&&(i?t.mount(i):t.unmount()),e&&(typeof e=="function"?e(i):Rs(e)&&(e.current=i))},[t])}const Yc=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Og="framerAppearId",Wd="data-"+Yc(Og),{schedule:$c}=zd(queueMicrotask,!1),Xd=et.createContext({});function Bg(n,t,e,i,s){var r,o;const{visualElement:a}=et.useContext(aa),l=et.useContext(kd),c=et.useContext(kc),u=et.useContext(oa).reducedMotion,f=et.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(n,{visualState:t,parent:a,props:e,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const h=f.current,d=et.useContext(Xd);h&&!h.projection&&s&&(h.type==="html"||h.type==="svg")&&Vg(f.current,e,s,d);const g=et.useRef(!1);et.useInsertionEffect(()=>{h&&g.current&&h.update(e,c)});const y=e[Wd],m=et.useRef(!!y&&!(!((r=window.MotionHandoffIsComplete)===null||r===void 0)&&r.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return Hc(()=>{h&&(g.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),$c.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())}),et.useEffect(()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,y)}),m.current=!1))}),h}function Vg(n,t,e,i){const{layoutId:s,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;n.projection=new e(n.latestValues,t["data-framer-portal-id"]?void 0:qd(n.parent)),n.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!o||a&&Rs(a),visualElement:n,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function qd(n){if(n)return n.options.allowProjection!==!1?n.projection:qd(n.parent)}function zg({preloadedFeatures:n,createVisualElement:t,useRender:e,useVisualState:i,Component:s}){var r,o;n&&Rg(n);function a(c,u){let f;const h={...et.useContext(oa),...c,layoutId:kg(c)},{isStatic:d}=h,g=Ng(c),y=i(c,d);if(!d&&Gc){Gg();const m=Hg(h);f=m.MeasureLayout,g.visualElement=Bg(s,y,h,t,m.ProjectionNode)}return j.jsxs(aa.Provider,{value:g,children:[f&&g.visualElement?j.jsx(f,{visualElement:g.visualElement,...h}):null,e(s,c,Fg(y,g.visualElement,u),y,d,g.visualElement)]})}a.displayName=`motion.${typeof s=="string"?s:`create(${(o=(r=s.displayName)!==null&&r!==void 0?r:s.name)!==null&&o!==void 0?o:""})`}`;const l=et.forwardRef(a);return l[Ug]=s,l}function kg({layoutId:n}){const t=et.useContext(Bd).id;return t&&n!==void 0?t+"-"+n:n}function Gg(n,t){et.useContext(kd).strict}function Hg(n){const{drag:t,layout:e}=zs;if(!t&&!e)return{};const i={...t,...e};return{MeasureLayout:t!=null&&t.isEnabled(n)||e!=null&&e.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Wg=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kc(n){return typeof n!="string"||n.includes("-")?!1:!!(Wg.indexOf(n)>-1||/[A-Z]/u.test(n))}function Xu(n){const t=[{},{}];return n==null||n.values.forEach((e,i)=>{t[0][i]=e.get(),t[1][i]=e.getVelocity()}),t}function Zc(n,t,e,i){if(typeof t=="function"){const[s,r]=Xu(i);t=t(e!==void 0?e:n.custom,s,r)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[s,r]=Xu(i);t=t(e!==void 0?e:n.custom,s,r)}return t}const _l=n=>Array.isArray(n),Xg=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),qg=n=>_l(n)?n[n.length-1]||0:n,Pe=n=>!!(n&&n.getVelocity);function bo(n){const t=Pe(n)?n.get():n;return Xg(t)?t.toValue():t}function Yg({scrapeMotionValuesFromProps:n,createRenderState:t,onUpdate:e},i,s,r){const o={latestValues:$g(i,s,r,n),renderState:t()};return e&&(o.onMount=a=>e({props:i,current:a,...o}),o.onUpdate=a=>e(a)),o}const Yd=n=>(t,e)=>{const i=et.useContext(aa),s=et.useContext(kc),r=()=>Yg(n,t,i,s);return e?r():Uo(r)};function $g(n,t,e,i){const s={},r=i(n,{});for(const h in r)s[h]=bo(r[h]);let{initial:o,animate:a}=n;const l=ca(n),c=Hd(n);t&&c&&!l&&n.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let u=e?e.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!la(f)){const h=Array.isArray(f)?f:[f];for(let d=0;d<h.length;d++){const g=Zc(n,h[d]);if(g){const{transitionEnd:y,transition:m,...p}=g;for(const S in p){let M=p[S];if(Array.isArray(M)){const _=u?M.length-1:0;M=M[_]}M!==null&&(s[S]=M)}for(const S in y)s[S]=y[S]}}}return s}const Zs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],rs=new Set(Zs),$d=n=>t=>typeof t=="string"&&t.startsWith(n),Kd=$d("--"),Kg=$d("var(--"),Jc=n=>Kg(n)?Zg.test(n.split("/*")[0].trim()):!1,Zg=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Zd=(n,t)=>t&&typeof n=="number"?t.transform(n):n,gi=(n,t,e)=>e>t?t:e<n?n:e,Js={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Cr={...Js,transform:n=>gi(0,1,n)},qr={...Js,default:1},Br=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Di=Br("deg"),Kn=Br("%"),Bt=Br("px"),Jg=Br("vh"),jg=Br("vw"),qu={...Kn,parse:n=>Kn.parse(n)/100,transform:n=>Kn.transform(n*100)},Qg={borderWidth:Bt,borderTopWidth:Bt,borderRightWidth:Bt,borderBottomWidth:Bt,borderLeftWidth:Bt,borderRadius:Bt,radius:Bt,borderTopLeftRadius:Bt,borderTopRightRadius:Bt,borderBottomRightRadius:Bt,borderBottomLeftRadius:Bt,width:Bt,maxWidth:Bt,height:Bt,maxHeight:Bt,top:Bt,right:Bt,bottom:Bt,left:Bt,padding:Bt,paddingTop:Bt,paddingRight:Bt,paddingBottom:Bt,paddingLeft:Bt,margin:Bt,marginTop:Bt,marginRight:Bt,marginBottom:Bt,marginLeft:Bt,backgroundPositionX:Bt,backgroundPositionY:Bt},t0={rotate:Di,rotateX:Di,rotateY:Di,rotateZ:Di,scale:qr,scaleX:qr,scaleY:qr,scaleZ:qr,skew:Di,skewX:Di,skewY:Di,distance:Bt,translateX:Bt,translateY:Bt,translateZ:Bt,x:Bt,y:Bt,z:Bt,perspective:Bt,transformPerspective:Bt,opacity:Cr,originX:qu,originY:qu,originZ:Bt},Yu={...Js,transform:Math.round},jc={...Qg,...t0,zIndex:Yu,size:Bt,fillOpacity:Cr,strokeOpacity:Cr,numOctaves:Yu},e0={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},n0=Zs.length;function i0(n,t,e){let i="",s=!0;for(let r=0;r<n0;r++){const o=Zs[r],a=n[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||e){const c=Zd(a,jc[o]);if(!l){s=!1;const u=e0[o]||o;i+=`${u}(${c}) `}e&&(t[o]=c)}}return i=i.trim(),e?i=e(t,s?"":i):s&&(i="none"),i}function Qc(n,t,e){const{style:i,vars:s,transformOrigin:r}=n;let o=!1,a=!1;for(const l in t){const c=t[l];if(rs.has(l)){o=!0;continue}else if(Kd(l)){s[l]=c;continue}else{const u=Zd(c,jc[l]);l.startsWith("origin")?(a=!0,r[l]=u):i[l]=u}}if(t.transform||(o||e?i.transform=i0(t,n.transform,e):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;i.transformOrigin=`${l} ${c} ${u}`}}const s0={offset:"stroke-dashoffset",array:"stroke-dasharray"},r0={offset:"strokeDashoffset",array:"strokeDasharray"};function o0(n,t,e=1,i=0,s=!0){n.pathLength=1;const r=s?s0:r0;n[r.offset]=Bt.transform(-i);const o=Bt.transform(t),a=Bt.transform(e);n[r.array]=`${o} ${a}`}function $u(n,t,e){return typeof n=="string"?n:Bt.transform(t+e*n)}function a0(n,t,e){const i=$u(t,n.x,n.width),s=$u(e,n.y,n.height);return`${i} ${s}`}function tu(n,{attrX:t,attrY:e,attrScale:i,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f){if(Qc(n,c,f),u){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:h,style:d,dimensions:g}=n;h.transform&&(g&&(d.transform=h.transform),delete h.transform),g&&(s!==void 0||r!==void 0||d.transform)&&(d.transformOrigin=a0(g,s!==void 0?s:.5,r!==void 0?r:.5)),t!==void 0&&(h.x=t),e!==void 0&&(h.y=e),i!==void 0&&(h.scale=i),o!==void 0&&o0(h,o,a,l,!1)}const eu=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Jd=()=>({...eu(),attrs:{}}),nu=n=>typeof n=="string"&&n.toLowerCase()==="svg";function jd(n,{style:t,vars:e},i,s){Object.assign(n.style,t,s&&s.getProjectionStyles(i));for(const r in e)n.style.setProperty(r,e[r])}const Qd=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function tp(n,t,e,i){jd(n,t,void 0,i);for(const s in t.attrs)n.setAttribute(Qd.has(s)?s:Yc(s),t.attrs[s])}const Oo={};function l0(n){Object.assign(Oo,n)}function ep(n,{layout:t,layoutId:e}){return rs.has(n)||n.startsWith("origin")||(t||e!==void 0)&&(!!Oo[n]||n==="opacity")}function iu(n,t,e){var i;const{style:s}=n,r={};for(const o in s)(Pe(s[o])||t.style&&Pe(t.style[o])||ep(o,n)||((i=e==null?void 0:e.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(r[o]=s[o]);return r}function np(n,t,e){const i=iu(n,t,e);for(const s in n)if(Pe(n[s])||Pe(t[s])){const r=Zs.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=n[s]}return i}function c0(n,t){try{t.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Ku=["x","y","width","height","cx","cy","r"],u0={useVisualState:Yd({scrapeMotionValuesFromProps:np,createRenderState:Jd,onUpdate:({props:n,prevProps:t,current:e,renderState:i,latestValues:s})=>{if(!e)return;let r=!!n.drag;if(!r){for(const a in s)if(rs.has(a)){r=!0;break}}if(!r)return;let o=!t;if(t)for(let a=0;a<Ku.length;a++){const l=Ku[a];n[l]!==t[l]&&(o=!0)}o&&_e.read(()=>{c0(e,i),_e.render(()=>{tu(i,s,nu(e.tagName),n.transformTemplate),tp(e,i)})})}})},h0={useVisualState:Yd({scrapeMotionValuesFromProps:iu,createRenderState:eu})};function ip(n,t,e){for(const i in t)!Pe(t[i])&&!ep(i,e)&&(n[i]=t[i])}function f0({transformTemplate:n},t){return et.useMemo(()=>{const e=eu();return Qc(e,t,n),Object.assign({},e.vars,e.style)},[t])}function d0(n,t){const e=n.style||{},i={};return ip(i,e,n),Object.assign(i,f0(n,t)),i}function p0(n,t){const e={},i=d0(n,t);return n.drag&&n.dragListener!==!1&&(e.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(e.tabIndex=0),e.style=i,e}function m0(n,t,e,i){const s=et.useMemo(()=>{const r=Jd();return tu(r,t,nu(i),n.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(n.style){const r={};ip(r,n.style,n),s.style={...r,...s.style}}return s}function g0(n=!1){return(e,i,s,{latestValues:r},o)=>{const l=(Kc(e)?m0:p0)(i,r,o,e),c=Dg(i,typeof e=="string",n),u=e!==et.Fragment?{...c,...l,ref:s}:{},{children:f}=i,h=et.useMemo(()=>Pe(f)?f.get():f,[f]);return et.createElement(e,{...u,children:h})}}function v0(n,t){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const o={...Kc(i)?u0:h0,preloadedFeatures:n,useRender:g0(s),createVisualElement:t,Component:i};return zg(o)}}function sp(n,t){if(!Array.isArray(t))return!1;const e=t.length;if(e!==n.length)return!1;for(let i=0;i<e;i++)if(t[i]!==n[i])return!1;return!0}function ua(n,t,e){const i=n.getProps();return Zc(i,t,e!==void 0?e:i.custom,n)}const x0=Wc(()=>window.ScrollTimeline!==void 0);class _0{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,e){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=e}attachTimeline(t,e){const i=this.animations.map(s=>{if(x0()&&s.attachTimeline)return s.attachTimeline(t);if(typeof e=="function")return e(s)});return()=>{i.forEach((s,r)=>{s&&s(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let e=0;e<this.animations.length;e++)t=Math.max(t,this.animations[e].duration);return t}runAll(t){this.animations.forEach(e=>e[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class rp extends _0{then(t,e){return Promise.all(this.animations).then(t).catch(e)}}function su(n,t){return n?n[t]||n.default||n:void 0}const Bo=2e4;function ru(n){let t=0;const e=50;let i=n.next(t);for(;!i.done&&t<Bo;)t+=e,i=n.next(t);return t>=Bo?1/0:t}function y0(n,t=100,e){const i=e({...n,keyframes:[0,t]}),s=Math.min(ru(i),Bo);return{type:"keyframes",ease:r=>i.next(s*r).value/t,duration:$n(s)}}function ha(n){return typeof n=="function"}function Zu(n,t){n.timeline=t,n.onfinish=null}const ou=n=>Array.isArray(n)&&typeof n[0]=="number",M0={linearEasing:void 0};function S0(n,t){const e=Wc(n);return()=>{var i;return(i=M0[t])!==null&&i!==void 0?i:e()}}const Vo=S0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),op=(n,t,e=10)=>{let i="";const s=Math.max(Math.round(t/e),2);for(let r=0;r<s;r++)i+=n(Qi(0,s-1,r))+", ";return`linear(${i.substring(0,i.length-2)})`};function ap(n){return!!(typeof n=="function"&&Vo()||!n||typeof n=="string"&&(n in yl||Vo())||ou(n)||Array.isArray(n)&&n.every(ap))}const hr=([n,t,e,i])=>`cubic-bezier(${n}, ${t}, ${e}, ${i})`,yl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hr([0,.65,.55,1]),circOut:hr([.55,0,1,.45]),backIn:hr([.31,.01,.66,-.59]),backOut:hr([.33,1.53,.69,.99])};function lp(n,t){if(n)return typeof n=="function"&&Vo()?op(n,t):ou(n)?hr(n):Array.isArray(n)?n.map(e=>lp(e,t)||yl.easeOut):yl[n]}const Ln={x:!1,y:!1};function cp(){return Ln.x||Ln.y}function up(n,t,e){var i;if(n instanceof Element)return[n];if(typeof n=="string"){let s=document;t&&(s=t.current);const r=(i=e==null?void 0:e[n])!==null&&i!==void 0?i:s.querySelectorAll(n);return r?Array.from(r):[]}return Array.from(n)}function hp(n,t){const e=up(n),i=new AbortController,s={passive:!0,...t,signal:i.signal};return[e,s,()=>i.abort()]}function Ju(n){return t=>{t.pointerType==="touch"||cp()||n(t)}}function E0(n,t,e={}){const[i,s,r]=hp(n,e),o=Ju(a=>{const{target:l}=a,c=t(a);if(typeof c!="function"||!l)return;const u=Ju(f=>{c(f),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,s)});return i.forEach(a=>{a.addEventListener("pointerenter",o,s)}),r}const fp=(n,t)=>t?n===t?!0:fp(n,t.parentElement):!1,au=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,T0=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function b0(n){return T0.has(n.tagName)||n.tabIndex!==-1}const fr=new WeakSet;function ju(n){return t=>{t.key==="Enter"&&n(t)}}function Ma(n,t){n.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const A0=(n,t)=>{const e=n.currentTarget;if(!e)return;const i=ju(()=>{if(fr.has(e))return;Ma(e,"down");const s=ju(()=>{Ma(e,"up")}),r=()=>Ma(e,"cancel");e.addEventListener("keyup",s,t),e.addEventListener("blur",r,t)});e.addEventListener("keydown",i,t),e.addEventListener("blur",()=>e.removeEventListener("keydown",i),t)};function Qu(n){return au(n)&&!cp()}function w0(n,t,e={}){const[i,s,r]=hp(n,e),o=a=>{const l=a.currentTarget;if(!Qu(a)||fr.has(l))return;fr.add(l);const c=t(a),u=(d,g)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),!(!Qu(d)||!fr.has(l))&&(fr.delete(l),typeof c=="function"&&c(d,{success:g}))},f=d=>{u(d,e.useGlobalTarget||fp(l,d.target))},h=d=>{u(d,!1)};window.addEventListener("pointerup",f,s),window.addEventListener("pointercancel",h,s)};return i.forEach(a=>{!b0(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(e.useGlobalTarget?window:a).addEventListener("pointerdown",o,s),a.addEventListener("focus",c=>A0(c,s),s)}),r}function R0(n){return n==="x"||n==="y"?Ln[n]?null:(Ln[n]=!0,()=>{Ln[n]=!1}):Ln.x||Ln.y?null:(Ln.x=Ln.y=!0,()=>{Ln.x=Ln.y=!1})}const dp=new Set(["width","height","top","left","right","bottom",...Zs]);let Ao;function C0(){Ao=void 0}const Zn={now:()=>(Ao===void 0&&Zn.set(He.isProcessing||bg.useManualTiming?He.timestamp:performance.now()),Ao),set:n=>{Ao=n,queueMicrotask(C0)}};function lu(n,t){n.indexOf(t)===-1&&n.push(t)}function fa(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}class cu{constructor(){this.subscriptions=[]}add(t){return lu(this.subscriptions,t),()=>fa(this.subscriptions,t)}notify(t,e,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,e,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(t,e,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function pp(n,t){return t?n*(1e3/t):0}const th=30,P0=n=>!isNaN(parseFloat(n));class D0{constructor(t,e={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=Zn.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){this.current=t,this.updatedAt=Zn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=P0(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new cu);const i=this.events[t].add(e);return t==="change"?()=>{i(),_e.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){!e||!this.passiveEffect?this.updateAndNotify(t,e):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,e,i){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Zn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>th)return 0;const e=Math.min(this.updatedAt-this.prevUpdatedAt,th);return pp(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ks(n,t){return new D0(n,t)}function L0(n,t,e){n.hasValue(t)?n.getValue(t).set(e):n.addValue(t,ks(e))}function I0(n,t){const e=ua(n,t);let{transitionEnd:i={},transition:s={},...r}=e||{};r={...r,...i};for(const o in r){const a=qg(r[o]);L0(n,o,a)}}function N0(n){return!!(Pe(n)&&n.add)}function Ml(n,t){const e=n.getValue("willChange");if(N0(e))return e.add(t)}function mp(n){return n.props[Wd]}const gp=(n,t,e)=>(((1-3*e+3*t)*n+(3*e-6*t))*n+3*t)*n,U0=1e-7,F0=12;function O0(n,t,e,i,s){let r,o,a=0;do o=t+(e-t)/2,r=gp(o,i,s)-n,r>0?e=o:t=o;while(Math.abs(r)>U0&&++a<F0);return o}function Vr(n,t,e,i){if(n===t&&e===i)return dn;const s=r=>O0(r,0,1,n,e);return r=>r===0||r===1?r:gp(s(r),t,i)}const vp=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,xp=n=>t=>1-n(1-t),_p=Vr(.33,1.53,.69,.99),uu=xp(_p),yp=vp(uu),Mp=n=>(n*=2)<1?.5*uu(n):.5*(2-Math.pow(2,-10*(n-1))),hu=n=>1-Math.sin(Math.acos(n)),Sp=xp(hu),Ep=vp(hu),Tp=n=>/^0[^.\s]+$/u.test(n);function B0(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Tp(n):!0}const Sr=n=>Math.round(n*1e5)/1e5,fu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function V0(n){return n==null}const z0=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,du=(n,t)=>e=>!!(typeof e=="string"&&z0.test(e)&&e.startsWith(n)||t&&!V0(e)&&Object.prototype.hasOwnProperty.call(e,t)),bp=(n,t,e)=>i=>{if(typeof i!="string")return i;const[s,r,o,a]=i.match(fu);return{[n]:parseFloat(s),[t]:parseFloat(r),[e]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},k0=n=>gi(0,255,n),Sa={...Js,transform:n=>Math.round(k0(n))},Yi={test:du("rgb","red"),parse:bp("red","green","blue"),transform:({red:n,green:t,blue:e,alpha:i=1})=>"rgba("+Sa.transform(n)+", "+Sa.transform(t)+", "+Sa.transform(e)+", "+Sr(Cr.transform(i))+")"};function G0(n){let t="",e="",i="",s="";return n.length>5?(t=n.substring(1,3),e=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(t=n.substring(1,2),e=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),t+=t,e+=e,i+=i,s+=s),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Sl={test:du("#"),parse:G0,transform:Yi.transform},Cs={test:du("hsl","hue"),parse:bp("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:e,alpha:i=1})=>"hsla("+Math.round(n)+", "+Kn.transform(Sr(t))+", "+Kn.transform(Sr(e))+", "+Sr(Cr.transform(i))+")"},Ze={test:n=>Yi.test(n)||Sl.test(n)||Cs.test(n),parse:n=>Yi.test(n)?Yi.parse(n):Cs.test(n)?Cs.parse(n):Sl.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Yi.transform(n):Cs.transform(n)},H0=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function W0(n){var t,e;return isNaN(n)&&typeof n=="string"&&(((t=n.match(fu))===null||t===void 0?void 0:t.length)||0)+(((e=n.match(H0))===null||e===void 0?void 0:e.length)||0)>0}const Ap="number",wp="color",X0="var",q0="var(",eh="${}",Y0=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Pr(n){const t=n.toString(),e=[],i={color:[],number:[],var:[]},s=[];let r=0;const a=t.replace(Y0,l=>(Ze.test(l)?(i.color.push(r),s.push(wp),e.push(Ze.parse(l))):l.startsWith(q0)?(i.var.push(r),s.push(X0),e.push(l)):(i.number.push(r),s.push(Ap),e.push(parseFloat(l))),++r,eh)).split(eh);return{values:e,split:a,indexes:i,types:s}}function Rp(n){return Pr(n).values}function Cp(n){const{split:t,types:e}=Pr(n),i=t.length;return s=>{let r="";for(let o=0;o<i;o++)if(r+=t[o],s[o]!==void 0){const a=e[o];a===Ap?r+=Sr(s[o]):a===wp?r+=Ze.transform(s[o]):r+=s[o]}return r}}const $0=n=>typeof n=="number"?0:n;function K0(n){const t=Rp(n);return Cp(n)(t.map($0))}const Ni={test:W0,parse:Rp,createTransformer:Cp,getAnimatableNone:K0},Z0=new Set(["brightness","contrast","saturate","opacity"]);function J0(n){const[t,e]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[i]=e.match(fu)||[];if(!i)return n;const s=e.replace(i,"");let r=Z0.has(t)?1:0;return i!==e&&(r*=100),t+"("+r+s+")"}const j0=/\b([a-z-]*)\(.*?\)/gu,El={...Ni,getAnimatableNone:n=>{const t=n.match(j0);return t?t.map(J0).join(" "):n}},Q0={...jc,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:El,WebkitFilter:El},pu=n=>Q0[n];function Pp(n,t){let e=pu(n);return e!==El&&(e=Ni),e.getAnimatableNone?e.getAnimatableNone(t):void 0}const tv=new Set(["auto","none","0"]);function ev(n,t,e){let i=0,s;for(;i<n.length&&!s;){const r=n[i];typeof r=="string"&&!tv.has(r)&&Pr(r).values.length&&(s=n[i]),i++}if(s&&e)for(const r of t)n[r]=Pp(e,s)}const nh=n=>n===Js||n===Bt,ih=(n,t)=>parseFloat(n.split(", ")[t]),sh=(n,t)=>(e,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return ih(s[1],t);{const r=i.match(/^matrix\((.+)\)$/u);return r?ih(r[1],n):0}},nv=new Set(["x","y","z"]),iv=Zs.filter(n=>!nv.has(n));function sv(n){const t=[];return iv.forEach(e=>{const i=n.getValue(e);i!==void 0&&(t.push([e,i.get()]),i.set(e.startsWith("scale")?1:0))}),t}const Gs={width:({x:n},{paddingLeft:t="0",paddingRight:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),height:({y:n},{paddingTop:t="0",paddingBottom:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:sh(4,13),y:sh(5,14)};Gs.translateX=Gs.x;Gs.translateY=Gs.y;const Ji=new Set;let Tl=!1,bl=!1;function Dp(){if(bl){const n=Array.from(Ji).filter(i=>i.needsMeasurement),t=new Set(n.map(i=>i.element)),e=new Map;t.forEach(i=>{const s=sv(i);s.length&&(e.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const s=e.get(i);s&&s.forEach(([r,o])=>{var a;(a=i.getValue(r))===null||a===void 0||a.set(o)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}bl=!1,Tl=!1,Ji.forEach(n=>n.complete()),Ji.clear()}function Lp(){Ji.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(bl=!0)})}function rv(){Lp(),Dp()}class mu{constructor(t,e,i,s,r,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=i,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ji.add(this),Tl||(Tl=!0,_e.read(Lp),_e.resolveKeyframes(Dp))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:i,motionValue:s}=this;for(let r=0;r<t.length;r++)if(t[r]===null)if(r===0){const o=s==null?void 0:s.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(i&&e){const l=i.readValue(e,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),s&&o===void 0&&s.set(t[0])}else t[r]=t[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ji.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ji.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ip=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),ov=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function av(n){const t=ov.exec(n);if(!t)return[,];const[,e,i,s]=t;return[`--${e??i}`,s]}function Np(n,t,e=1){const[i,s]=av(n);if(!i)return;const r=window.getComputedStyle(t).getPropertyValue(i);if(r){const o=r.trim();return Ip(o)?parseFloat(o):o}return Jc(s)?Np(s,t,e+1):s}const Up=n=>t=>t.test(n),lv={test:n=>n==="auto",parse:n=>n},Fp=[Js,Bt,Kn,Di,jg,Jg,lv],rh=n=>Fp.find(Up(n));class Op extends mu{constructor(t,e,i,s,r){super(t,e,i,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:i}=this;if(!e||!e.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),Jc(c))){const u=Np(c,e.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!dp.has(i)||t.length!==2)return;const[s,r]=t,o=rh(s),a=rh(r);if(o!==a)if(nh(o)&&nh(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,i=[];for(let s=0;s<t.length;s++)B0(t[s])&&i.push(s);i.length&&ev(t,i,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Gs[i](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;const s=e[e.length-1];s!==void 0&&t.getValue(i,s).jump(s,!1)}measureEndState(){var t;const{element:e,name:i,unresolvedKeyframes:s}=this;if(!e||!e.current)return;const r=e.getValue(i);r&&r.jump(this.measuredOrigin,!1);const o=s.length-1,a=s[o];s[o]=Gs[i](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const oh=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ni.test(n)||n==="0")&&!n.startsWith("url("));function cv(n){const t=n[0];if(n.length===1)return!0;for(let e=0;e<n.length;e++)if(n[e]!==t)return!0}function uv(n,t,e,i){const s=n[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const r=n[n.length-1],o=oh(s,t),a=oh(r,t);return!o||!a?!1:cv(n)||(e==="spring"||ha(e))&&i}const hv=n=>n!==null;function da(n,{repeat:t,repeatType:e="loop"},i){const s=n.filter(hv),r=t&&e!=="loop"&&t%2===1?0:s.length-1;return!r||i===void 0?s[r]:i}const fv=40;class Bp{constructor({autoplay:t=!0,delay:e=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Zn.now(),this.options={autoplay:t,delay:e,type:i,repeat:s,repeatDelay:r,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>fv?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&rv(),this._resolved}onKeyframesResolved(t,e){this.resolvedAt=Zn.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:r,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!uv(t,i,s,r))if(o)this.options.duration=0;else{l&&l(da(t,this.options,e)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,e);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:e,...u},this.onPostResolved())}onPostResolved(){}then(t,e){return this.currentFinishedPromise.then(t,e)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Te=(n,t,e)=>n+(t-n)*e;function Ea(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n}function dv({hue:n,saturation:t,lightness:e,alpha:i}){n/=360,t/=100,e/=100;let s=0,r=0,o=0;if(!t)s=r=o=e;else{const a=e<.5?e*(1+t):e+t-e*t,l=2*e-a;s=Ea(l,a,n+1/3),r=Ea(l,a,n),o=Ea(l,a,n-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}function zo(n,t){return e=>e>0?t:n}const Ta=(n,t,e)=>{const i=n*n,s=e*(t*t-i)+i;return s<0?0:Math.sqrt(s)},pv=[Sl,Yi,Cs],mv=n=>pv.find(t=>t.test(n));function ah(n){const t=mv(n);if(!t)return!1;let e=t.parse(n);return t===Cs&&(e=dv(e)),e}const lh=(n,t)=>{const e=ah(n),i=ah(t);if(!e||!i)return zo(n,t);const s={...e};return r=>(s.red=Ta(e.red,i.red,r),s.green=Ta(e.green,i.green,r),s.blue=Ta(e.blue,i.blue,r),s.alpha=Te(e.alpha,i.alpha,r),Yi.transform(s))},gv=(n,t)=>e=>t(n(e)),zr=(...n)=>n.reduce(gv),Al=new Set(["none","hidden"]);function vv(n,t){return Al.has(n)?e=>e<=0?n:t:e=>e>=1?t:n}function xv(n,t){return e=>Te(n,t,e)}function gu(n){return typeof n=="number"?xv:typeof n=="string"?Jc(n)?zo:Ze.test(n)?lh:Mv:Array.isArray(n)?Vp:typeof n=="object"?Ze.test(n)?lh:_v:zo}function Vp(n,t){const e=[...n],i=e.length,s=n.map((r,o)=>gu(r)(r,t[o]));return r=>{for(let o=0;o<i;o++)e[o]=s[o](r);return e}}function _v(n,t){const e={...n,...t},i={};for(const s in e)n[s]!==void 0&&t[s]!==void 0&&(i[s]=gu(n[s])(n[s],t[s]));return s=>{for(const r in i)e[r]=i[r](s);return e}}function yv(n,t){var e;const i=[],s={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const o=t.types[r],a=n.indexes[o][s[o]],l=(e=n.values[a])!==null&&e!==void 0?e:0;i[r]=l,s[o]++}return i}const Mv=(n,t)=>{const e=Ni.createTransformer(t),i=Pr(n),s=Pr(t);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Al.has(n)&&!s.values.length||Al.has(t)&&!i.values.length?vv(n,t):zr(Vp(yv(i,s),s.values),e):zo(n,t)};function zp(n,t,e){return typeof n=="number"&&typeof t=="number"&&typeof e=="number"?Te(n,t,e):gu(n)(n,t)}const Sv=5;function kp(n,t,e){const i=Math.max(t-Sv,0);return pp(e-n(i),t-i)}const Re={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ba=.001;function Ev({duration:n=Re.duration,bounce:t=Re.bounce,velocity:e=Re.velocity,mass:i=Re.mass}){let s,r,o=1-t;o=gi(Re.minDamping,Re.maxDamping,o),n=gi(Re.minDuration,Re.maxDuration,$n(n)),o<1?(s=c=>{const u=c*o,f=u*n,h=u-e,d=wl(c,o),g=Math.exp(-f);return ba-h/d*g},r=c=>{const f=c*o*n,h=f*e+e,d=Math.pow(o,2)*Math.pow(c,2)*n,g=Math.exp(-f),y=wl(Math.pow(c,2),o);return(-s(c)+ba>0?-1:1)*((h-d)*g)/y}):(s=c=>{const u=Math.exp(-c*n),f=(c-e)*n+1;return-ba+u*f},r=c=>{const u=Math.exp(-c*n),f=(e-c)*(n*n);return u*f});const a=5/n,l=bv(s,r,a);if(n=Yn(n),isNaN(l))return{stiffness:Re.stiffness,damping:Re.damping,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:n}}}const Tv=12;function bv(n,t,e){let i=e;for(let s=1;s<Tv;s++)i=i-n(i)/t(i);return i}function wl(n,t){return n*Math.sqrt(1-t*t)}const Av=["duration","bounce"],wv=["stiffness","damping","mass"];function ch(n,t){return t.some(e=>n[e]!==void 0)}function Rv(n){let t={velocity:Re.velocity,stiffness:Re.stiffness,damping:Re.damping,mass:Re.mass,isResolvedFromDuration:!1,...n};if(!ch(n,wv)&&ch(n,Av))if(n.visualDuration){const e=n.visualDuration,i=2*Math.PI/(e*1.2),s=i*i,r=2*gi(.05,1,1-(n.bounce||0))*Math.sqrt(s);t={...t,mass:Re.mass,stiffness:s,damping:r}}else{const e=Ev(n);t={...t,...e,mass:Re.mass},t.isResolvedFromDuration=!0}return t}function vu(n=Re.visualDuration,t=Re.bounce){const e=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:t}:n;let{restSpeed:i,restDelta:s}=e;const r=e.keyframes[0],o=e.keyframes[e.keyframes.length-1],a={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:f,velocity:h,isResolvedFromDuration:d}=Rv({...e,velocity:-$n(e.velocity||0)}),g=h||0,y=c/(2*Math.sqrt(l*u)),m=o-r,p=$n(Math.sqrt(l/u)),S=Math.abs(m)<5;i||(i=S?Re.restSpeed.granular:Re.restSpeed.default),s||(s=S?Re.restDelta.granular:Re.restDelta.default);let M;if(y<1){const b=wl(p,y);M=T=>{const P=Math.exp(-y*p*T);return o-P*((g+y*p*m)/b*Math.sin(b*T)+m*Math.cos(b*T))}}else if(y===1)M=b=>o-Math.exp(-p*b)*(m+(g+p*m)*b);else{const b=p*Math.sqrt(y*y-1);M=T=>{const P=Math.exp(-y*p*T),v=Math.min(b*T,300);return o-P*((g+y*p*m)*Math.sinh(v)+b*m*Math.cosh(v))/b}}const _={calculatedDuration:d&&f||null,next:b=>{const T=M(b);if(d)a.done=b>=f;else{let P=0;y<1&&(P=b===0?Yn(g):kp(M,b,T));const v=Math.abs(P)<=i,A=Math.abs(o-T)<=s;a.done=v&&A}return a.value=a.done?o:T,a},toString:()=>{const b=Math.min(ru(_),Bo),T=op(P=>_.next(b*P).value,b,30);return b+"ms "+T}};return _}function uh({keyframes:n,velocity:t=0,power:e=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=n[0],h={done:!1,value:f},d=v=>a!==void 0&&v<a||l!==void 0&&v>l,g=v=>a===void 0?l:l===void 0||Math.abs(a-v)<Math.abs(l-v)?a:l;let y=e*t;const m=f+y,p=o===void 0?m:o(m);p!==m&&(y=p-f);const S=v=>-y*Math.exp(-v/i),M=v=>p+S(v),_=v=>{const A=S(v),D=M(v);h.done=Math.abs(A)<=c,h.value=h.done?p:D};let b,T;const P=v=>{d(h.value)&&(b=v,T=vu({keyframes:[h.value,g(h.value)],velocity:kp(M,v,h.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return P(0),{calculatedDuration:null,next:v=>{let A=!1;return!T&&b===void 0&&(A=!0,_(v),P(v)),b!==void 0&&v>=b?T.next(v-b):(!A&&_(v),h)}}}const Cv=Vr(.42,0,1,1),Pv=Vr(0,0,.58,1),Gp=Vr(.42,0,.58,1),Hp=n=>Array.isArray(n)&&typeof n[0]!="number",Dv={linear:dn,easeIn:Cv,easeInOut:Gp,easeOut:Pv,circIn:hu,circInOut:Ep,circOut:Sp,backIn:uu,backInOut:yp,backOut:_p,anticipate:Mp},Rl=n=>{if(ou(n)){Vd(n.length===4);const[t,e,i,s]=n;return Vr(t,e,i,s)}else if(typeof n=="string")return Dv[n];return n};function Lv(n,t,e){const i=[],s=e||zp,r=n.length-1;for(let o=0;o<r;o++){let a=s(n[o],n[o+1]);if(t){const l=Array.isArray(t)?t[o]||dn:t;a=zr(l,a)}i.push(a)}return i}function Iv(n,t,{clamp:e=!0,ease:i,mixer:s}={}){const r=n.length;if(Vd(r===t.length),r===1)return()=>t[0];if(r===2&&t[0]===t[1])return()=>t[1];const o=n[0]===n[1];n[0]>n[r-1]&&(n=[...n].reverse(),t=[...t].reverse());const a=Lv(t,i,s),l=a.length,c=u=>{if(o&&u<n[0])return t[0];let f=0;if(l>1)for(;f<n.length-2&&!(u<n[f+1]);f++);const h=Qi(n[f],n[f+1],u);return a[f](h)};return e?u=>c(gi(n[0],n[r-1],u)):c}function Wp(n,t){const e=n[n.length-1];for(let i=1;i<=t;i++){const s=Qi(0,t,i);n.push(Te(e,1,s))}}function Xp(n){const t=[0];return Wp(t,n.length-1),t}function Nv(n,t){return n.map(e=>e*t)}function Uv(n,t){return n.map(()=>t||Gp).splice(0,n.length-1)}function ko({duration:n=300,keyframes:t,times:e,ease:i="easeInOut"}){const s=Hp(i)?i.map(Rl):Rl(i),r={done:!1,value:t[0]},o=Nv(e&&e.length===t.length?e:Xp(t),n),a=Iv(o,t,{ease:Array.isArray(s)?s:Uv(t,s)});return{calculatedDuration:n,next:l=>(r.value=a(l),r.done=l>=n,r)}}const Fv=n=>{const t=({timestamp:e})=>n(e);return{start:()=>_e.update(t,!0),stop:()=>mi(t),now:()=>He.isProcessing?He.timestamp:Zn.now()}},Ov={decay:uh,inertia:uh,tween:ko,keyframes:ko,spring:vu},Bv=n=>n/100;class pa extends Bp{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:e,motionValue:i,element:s,keyframes:r}=this.options,o=(s==null?void 0:s.KeyframeResolver)||mu,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(r,a,e,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:e="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=this.options,a=ha(e)?e:Ov[e]||ko;let l,c;a!==ko&&typeof t[0]!="number"&&(l=zr(Bv,zp(t[0],t[1])),t=[0,100]);const u=a({...this.options,keyframes:t});r==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=ru(u));const{calculatedDuration:f}=u,h=f+s,d=h*(i+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:h,totalDuration:d}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,e=!1){const{resolved:i}=this;if(!i){const{keyframes:v}=this.options;return{done:!0,value:v[v.length-1]}}const{finalKeyframe:s,generator:r,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=i;if(this.startTime===null)return r.next(0);const{delay:h,repeat:d,repeatType:g,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),e?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const p=this.currentTime-h*(this.speed>=0?1:-1),S=this.speed>=0?p<0:p>u;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let M=this.currentTime,_=r;if(d){const v=Math.min(this.currentTime,u)/f;let A=Math.floor(v),D=v%1;!D&&v>=1&&(D=1),D===1&&A--,A=Math.min(A,d+1),!!(A%2)&&(g==="reverse"?(D=1-D,y&&(D-=y/f)):g==="mirror"&&(_=o)),M=gi(0,1,D)*f}const b=S?{done:!1,value:l[0]}:_.next(M);a&&(b.value=a(b.value));let{done:T}=b;!S&&c!==null&&(T=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return P&&s!==void 0&&(b.value=da(l,this.options,s)),m&&m(b.value),P&&this.finish(),b}get duration(){const{resolved:t}=this;return t?$n(t.calculatedDuration):0}get time(){return $n(this.currentTime)}set time(t){t=Yn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=$n(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Fv,onPlay:e,startTime:i}=this.options;this.driver||(this.driver=t(r=>this.tick(r))),e&&e();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}function Vv(n){return new pa(n)}const zv=new Set(["opacity","clipPath","filter","transform"]);function kv(n,t,e,{delay:i=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[t]:e};l&&(c.offset=l);const u=lp(a,s);return Array.isArray(u)&&(c.easing=u),n.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}const Gv=Wc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Go=10,Hv=2e4;function Wv(n){return ha(n.type)||n.type==="spring"||!ap(n.ease)}function Xv(n,t){const e=new pa({...t,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const s=[];let r=0;for(;!i.done&&r<Hv;)i=e.sample(r),s.push(i.value),r+=Go;return{times:void 0,keyframes:s,duration:r-Go,ease:"linear"}}const qp={anticipate:Mp,backInOut:yp,circInOut:Ep};function qv(n){return n in qp}class hh extends Bp{constructor(t){super(t);const{name:e,motionValue:i,element:s,keyframes:r}=this.options;this.resolver=new Op(r,(o,a)=>this.onKeyframesResolved(o,a),e,i,s),this.resolver.scheduleResolve()}initPlayback(t,e){let{duration:i=300,times:s,ease:r,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof r=="string"&&Vo()&&qv(r)&&(r=qp[r]),Wv(this.options)){const{onComplete:f,onUpdate:h,motionValue:d,element:g,...y}=this.options,m=Xv(t,y);t=m.keyframes,t.length===1&&(t[1]=t[0]),i=m.duration,s=m.times,r=m.ease,o="keyframes"}const u=kv(a.owner.current,l,t,{...this.options,duration:i,times:s,ease:r});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(Zu(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:f}=this.options;a.set(da(t,this.options,e)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:s,type:o,ease:r,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:e}=t;return $n(e)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:e}=t;return $n(e.currentTime||0)}set time(t){const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.currentTime=Yn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:e}=t;return e.playbackRate}set speed(t){const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:e}=t;return e.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:e}=t;return e.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:e}=this;if(!e)return dn;const{animation:i}=e;Zu(i,t)}return dn}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:e}=t;e.playState==="finished"&&this.updateFinishedPromise(),e.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:e}=t;e.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:e,keyframes:i,duration:s,type:r,ease:o,times:a}=t;if(e.playState==="idle"||e.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:f,element:h,...d}=this.options,g=new pa({...d,keyframes:i,duration:s,type:r,ease:o,times:a,isGenerator:!0}),y=Yn(this.time);c.setWithVelocity(g.sample(y-Go).value,g.sample(y).value,Go)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:e,name:i,repeatDelay:s,repeatType:r,damping:o,type:a}=t;if(!e||!e.owner||!(e.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return Gv()&&i&&zv.has(i)&&!l&&!c&&!s&&r!=="mirror"&&o!==0&&a!=="inertia"}}const Yv={type:"spring",stiffness:500,damping:25,restSpeed:10},$v=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Kv={type:"keyframes",duration:.8},Zv={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Jv=(n,{keyframes:t})=>t.length>2?Kv:rs.has(n)?n.startsWith("scale")?$v(t[1]):Yv:Zv;function jv({when:n,delay:t,delayChildren:e,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const xu=(n,t,e,i={},s,r)=>o=>{const a=su(i,n)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Yn(l);let u={keyframes:Array.isArray(e)?e:[null,e],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:n,motionValue:t,element:r?void 0:s};jv(a)||(u={...u,...Jv(n,u)}),u.duration&&(u.duration=Yn(u.duration)),u.repeatDelay&&(u.repeatDelay=Yn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!r&&t.get()!==void 0){const h=da(u.keyframes,a);if(h!==void 0)return _e.update(()=>{u.onUpdate(h),u.onComplete()}),new rp([])}return!r&&hh.supports(u)?new hh(u):new pa(u)};function Qv({protectedKeys:n,needsAnimating:t},e){const i=n.hasOwnProperty(e)&&t[e]!==!0;return t[e]=!1,i}function _u(n,t,{delay:e=0,transitionOverride:i,type:s}={}){var r;let{transition:o=n.getDefaultTransition(),transitionEnd:a,...l}=t;i&&(o=i);const c=[],u=s&&n.animationState&&n.animationState.getState()[s];for(const f in l){const h=n.getValue(f,(r=n.latestValues[f])!==null&&r!==void 0?r:null),d=l[f];if(d===void 0||u&&Qv(u,f))continue;const g={delay:e,...su(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const p=mp(n);if(p){const S=window.MotionHandoffAnimation(p,f,_e);S!==null&&(g.startTime=S,y=!0)}}Ml(n,f),h.start(xu(f,h,d,n.shouldReduceMotion&&dp.has(f)?{type:!1}:g,n,y));const m=h.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{_e.update(()=>{a&&I0(n,a)})}),c}function Cl(n,t,e={}){var i;const s=ua(n,t,e.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:r=n.getDefaultTransition()||{}}=s||{};e.transitionOverride&&(r=e.transitionOverride);const o=s?()=>Promise.all(_u(n,s,e)):()=>Promise.resolve(),a=n.variantChildren&&n.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:h}=r;return tx(n,t,u+c,f,h,e)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(e.delay)])}function tx(n,t,e=0,i=0,s=1,r){const o=[],a=(n.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(n.variantChildren).sort(ex).forEach((c,u)=>{c.notify("AnimationStart",t),o.push(Cl(c,t,{...r,delay:e+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function ex(n,t){return n.sortNodePosition(t)}function nx(n,t,e={}){n.notify("AnimationStart",t);let i;if(Array.isArray(t)){const s=t.map(r=>Cl(n,r,e));i=Promise.all(s)}else if(typeof t=="string")i=Cl(n,t,e);else{const s=typeof t=="function"?ua(n,t,e.custom):t;i=Promise.all(_u(n,s,e))}return i.then(()=>{n.notify("AnimationComplete",t)})}const ix=qc.length;function Yp(n){if(!n)return;if(!n.isControllingVariants){const e=n.parent?Yp(n.parent)||{}:{};return n.props.initial!==void 0&&(e.initial=n.props.initial),e}const t={};for(let e=0;e<ix;e++){const i=qc[e],s=n.props[i];(Rr(s)||s===!1)&&(t[i]=s)}return t}const sx=[...Xc].reverse(),rx=Xc.length;function ox(n){return t=>Promise.all(t.map(({animation:e,options:i})=>nx(n,e,i)))}function ax(n){let t=ox(n),e=fh(),i=!0;const s=l=>(c,u)=>{var f;const h=ua(n,u,l==="exit"?(f=n.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(h){const{transition:d,transitionEnd:g,...y}=h;c={...c,...y,...g}}return c};function r(l){t=l(n)}function o(l){const{props:c}=n,u=Yp(n.parent)||{},f=[],h=new Set;let d={},g=1/0;for(let m=0;m<rx;m++){const p=sx[m],S=e[p],M=c[p]!==void 0?c[p]:u[p],_=Rr(M),b=p===l?S.isActive:null;b===!1&&(g=m);let T=M===u[p]&&M!==c[p]&&_;if(T&&i&&n.manuallyAnimateOnMount&&(T=!1),S.protectedKeys={...d},!S.isActive&&b===null||!M&&!S.prevProp||la(M)||typeof M=="boolean")continue;const P=lx(S.prevProp,M);let v=P||p===l&&S.isActive&&!T&&_||m>g&&_,A=!1;const D=Array.isArray(M)?M:[M];let w=D.reduce(s(p),{});b===!1&&(w={});const{prevResolvedValues:L={}}=S,G={...L,...w},B=I=>{v=!0,h.has(I)&&(A=!0,h.delete(I)),S.needsAnimating[I]=!0;const k=n.getValue(I);k&&(k.liveStyle=!1)};for(const I in G){const k=w[I],$=L[I];if(d.hasOwnProperty(I))continue;let rt=!1;_l(k)&&_l($)?rt=!sp(k,$):rt=k!==$,rt?k!=null?B(I):h.add(I):k!==void 0&&h.has(I)?B(I):S.protectedKeys[I]=!0}S.prevProp=M,S.prevResolvedValues=w,S.isActive&&(d={...d,...w}),i&&n.blockInitialAnimation&&(v=!1),v&&(!(T&&P)||A)&&f.push(...D.map(I=>({animation:I,options:{type:p}})))}if(h.size){const m={};h.forEach(p=>{const S=n.getBaseTarget(p),M=n.getValue(p);M&&(M.liveStyle=!0),m[p]=S??null}),f.push({animation:m})}let y=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!n.manuallyAnimateOnMount&&(y=!1),i=!1,y?t(f):Promise.resolve()}function a(l,c){var u;if(e[l].isActive===c)return Promise.resolve();(u=n.variantChildren)===null||u===void 0||u.forEach(h=>{var d;return(d=h.animationState)===null||d===void 0?void 0:d.setActive(l,c)}),e[l].isActive=c;const f=o(l);for(const h in e)e[h].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>e,reset:()=>{e=fh(),i=!0}}}function lx(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!sp(t,n):!1}function Oi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function fh(){return{animate:Oi(!0),whileInView:Oi(),whileHover:Oi(),whileTap:Oi(),whileDrag:Oi(),whileFocus:Oi(),exit:Oi()}}class Fi{constructor(t){this.isMounted=!1,this.node=t}update(){}}class cx extends Fi{constructor(t){super(t),t.animationState||(t.animationState=ax(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();la(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let ux=0;class hx extends Fi{constructor(){super(...arguments),this.id=ux++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t);e&&!t&&s.then(()=>e(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const fx={animation:{Feature:cx},exit:{Feature:hx}};function Dr(n,t,e,i={passive:!0}){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e)}function kr(n){return{point:{x:n.pageX,y:n.pageY}}}const dx=n=>t=>au(t)&&n(t,kr(t));function Er(n,t,e,i){return Dr(n,t,dx(e),i)}const dh=(n,t)=>Math.abs(n-t);function px(n,t){const e=dh(n.x,t.x),i=dh(n.y,t.y);return Math.sqrt(e**2+i**2)}class $p{constructor(t,e,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=wa(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,d=px(f.offset,{x:0,y:0})>=3;if(!h&&!d)return;const{point:g}=f,{timestamp:y}=He;this.history.push({...g,timestamp:y});const{onStart:m,onMove:p}=this.handlers;h||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Aa(h,this.transformPagePoint),_e.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:d,onSessionEnd:g,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=wa(f.type==="pointercancel"?this.lastMoveEventInfo:Aa(h,this.transformPagePoint),this.history);this.startEvent&&d&&d(f,m),g&&g(f,m)},!au(t))return;this.dragSnapToOrigin=r,this.handlers=e,this.transformPagePoint=i,this.contextWindow=s||window;const o=kr(t),a=Aa(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=He;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=e;u&&u(t,wa(a,this.history)),this.removeListeners=zr(Er(this.contextWindow,"pointermove",this.handlePointerMove),Er(this.contextWindow,"pointerup",this.handlePointerUp),Er(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),mi(this.updatePoint)}}function Aa(n,t){return t?{point:t(n.point)}:n}function ph(n,t){return{x:n.x-t.x,y:n.y-t.y}}function wa({point:n},t){return{point:n,delta:ph(n,Kp(t)),offset:ph(n,mx(t)),velocity:gx(t,.1)}}function mx(n){return n[0]}function Kp(n){return n[n.length-1]}function gx(n,t){if(n.length<2)return{x:0,y:0};let e=n.length-1,i=null;const s=Kp(n);for(;e>=0&&(i=n[e],!(s.timestamp-i.timestamp>Yn(t)));)e--;if(!i)return{x:0,y:0};const r=$n(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Zp=1e-4,vx=1-Zp,xx=1+Zp,Jp=.01,_x=0-Jp,yx=0+Jp;function mn(n){return n.max-n.min}function Mx(n,t,e){return Math.abs(n-t)<=e}function mh(n,t,e,i=.5){n.origin=i,n.originPoint=Te(t.min,t.max,n.origin),n.scale=mn(e)/mn(t),n.translate=Te(e.min,e.max,n.origin)-n.originPoint,(n.scale>=vx&&n.scale<=xx||isNaN(n.scale))&&(n.scale=1),(n.translate>=_x&&n.translate<=yx||isNaN(n.translate))&&(n.translate=0)}function Tr(n,t,e,i){mh(n.x,t.x,e.x,i?i.originX:void 0),mh(n.y,t.y,e.y,i?i.originY:void 0)}function gh(n,t,e){n.min=e.min+t.min,n.max=n.min+mn(t)}function Sx(n,t,e){gh(n.x,t.x,e.x),gh(n.y,t.y,e.y)}function vh(n,t,e){n.min=t.min-e.min,n.max=n.min+mn(t)}function br(n,t,e){vh(n.x,t.x,e.x),vh(n.y,t.y,e.y)}function Ex(n,{min:t,max:e},i){return t!==void 0&&n<t?n=i?Te(t,n,i.min):Math.max(n,t):e!==void 0&&n>e&&(n=i?Te(e,n,i.max):Math.min(n,e)),n}function xh(n,t,e){return{min:t!==void 0?n.min+t:void 0,max:e!==void 0?n.max+e-(n.max-n.min):void 0}}function Tx(n,{top:t,left:e,bottom:i,right:s}){return{x:xh(n.x,e,s),y:xh(n.y,t,i)}}function _h(n,t){let e=t.min-n.min,i=t.max-n.max;return t.max-t.min<n.max-n.min&&([e,i]=[i,e]),{min:e,max:i}}function bx(n,t){return{x:_h(n.x,t.x),y:_h(n.y,t.y)}}function Ax(n,t){let e=.5;const i=mn(n),s=mn(t);return s>i?e=Qi(t.min,t.max-i,n.min):i>s&&(e=Qi(n.min,n.max-s,t.min)),gi(0,1,e)}function wx(n,t){const e={};return t.min!==void 0&&(e.min=t.min-n.min),t.max!==void 0&&(e.max=t.max-n.min),e}const Pl=.35;function Rx(n=Pl){return n===!1?n=0:n===!0&&(n=Pl),{x:yh(n,"left","right"),y:yh(n,"top","bottom")}}function yh(n,t,e){return{min:Mh(n,t),max:Mh(n,e)}}function Mh(n,t){return typeof n=="number"?n:n[t]||0}const Sh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ps=()=>({x:Sh(),y:Sh()}),Eh=()=>({min:0,max:0}),we=()=>({x:Eh(),y:Eh()});function Mn(n){return[n("x"),n("y")]}function jp({top:n,left:t,right:e,bottom:i}){return{x:{min:t,max:e},y:{min:n,max:i}}}function Cx({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function Px(n,t){if(!t)return n;const e=t({x:n.left,y:n.top}),i=t({x:n.right,y:n.bottom});return{top:e.y,left:e.x,bottom:i.y,right:i.x}}function Ra(n){return n===void 0||n===1}function Dl({scale:n,scaleX:t,scaleY:e}){return!Ra(n)||!Ra(t)||!Ra(e)}function Gi(n){return Dl(n)||Qp(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Qp(n){return Th(n.x)||Th(n.y)}function Th(n){return n&&n!=="0%"}function Ho(n,t,e){const i=n-e,s=t*i;return e+s}function bh(n,t,e,i,s){return s!==void 0&&(n=Ho(n,s,i)),Ho(n,e,i)+t}function Ll(n,t=0,e=1,i,s){n.min=bh(n.min,t,e,i,s),n.max=bh(n.max,t,e,i,s)}function tm(n,{x:t,y:e}){Ll(n.x,t.translate,t.scale,t.originPoint),Ll(n.y,e.translate,e.scale,e.originPoint)}const Ah=.999999999999,wh=1.0000000000001;function Dx(n,t,e,i=!1){const s=e.length;if(!s)return;t.x=t.y=1;let r,o;for(let a=0;a<s;a++){r=e[a],o=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Ls(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,tm(n,o)),i&&Gi(r.latestValues)&&Ls(n,r.latestValues))}t.x<wh&&t.x>Ah&&(t.x=1),t.y<wh&&t.y>Ah&&(t.y=1)}function Ds(n,t){n.min=n.min+t,n.max=n.max+t}function Rh(n,t,e,i,s=.5){const r=Te(n.min,n.max,s);Ll(n,t,e,r,i)}function Ls(n,t){Rh(n.x,t.x,t.scaleX,t.scale,t.originX),Rh(n.y,t.y,t.scaleY,t.scale,t.originY)}function em(n,t){return jp(Px(n.getBoundingClientRect(),t))}function Lx(n,t,e){const i=em(n,e),{scroll:s}=t;return s&&(Ds(i.x,s.offset.x),Ds(i.y,s.offset.y)),i}const nm=({current:n})=>n?n.ownerDocument.defaultView:null,Ix=new WeakMap;class Nx{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=we(),this.visualElement=t}start(t,{snapToCursor:e=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor(kr(u).point)},r=(u,f)=>{const{drag:h,dragPropagation:d,onDragStart:g}=this.getProps();if(h&&!d&&(this.openDragLock&&this.openDragLock(),this.openDragLock=R0(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Mn(m=>{let p=this.getAxisMotionValue(m).get()||0;if(Kn.test(p)){const{projection:S}=this.visualElement;if(S&&S.layout){const M=S.layout.layoutBox[m];M&&(p=mn(M)*(parseFloat(p)/100))}}this.originPoint[m]=p}),g&&_e.postRender(()=>g(u,f)),Ml(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:h,dragDirectionLock:d,onDirectionLock:g,onDrag:y}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=f;if(d&&this.currentDirection===null){this.currentDirection=Ux(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),y&&y(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Mn(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new $p(t,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:nm(this.visualElement)})}stop(t,e){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=e;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&_e.postRender(()=>r(t,e))}cancel(){this.isDragging=!1;const{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,i){const{drag:s}=this.getProps();if(!i||!Yr(t,s,this.currentDirection))return;const r=this.getAxisMotionValue(t);let o=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(o=Ex(o,this.constraints[t],this.elastic[t])),r.set(o)}resolveConstraints(){var t;const{dragConstraints:e,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,r=this.constraints;e&&Rs(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&s?this.constraints=Tx(s.layoutBox,e):this.constraints=!1,this.elastic=Rx(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Mn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=wx(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!Rs(t))return!1;const i=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=Lx(i,s.root,this.visualElement.getTransformPagePoint());let o=bx(s.layout.layoutBox,r);if(e){const a=e(Cx(o));this.hasMutatedConstraints=!!a,a&&(o=jp(a))}return o}startAnimation(t){const{drag:e,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Mn(u=>{if(!Yr(u,e,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const h=s?200:1e6,d=s?40:1e7,g={type:"inertia",velocity:i?t[u]:0,bounceStiffness:h,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...r,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(t,e){const i=this.getAxisMotionValue(t);return Ml(this.visualElement,t),i.start(xu(t,i,0,e,this.visualElement,!1))}stopAnimation(){Mn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Mn(t=>{var e;return(e=this.getAxisMotionValue(t).animation)===null||e===void 0?void 0:e.pause()})}getAnimationState(t){var e;return(e=this.getAxisMotionValue(t).animation)===null||e===void 0?void 0:e.state}getAxisMotionValue(t){const e=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),s=i[e];return s||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){Mn(e=>{const{drag:i}=this.getProps();if(!Yr(e,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(e);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[e];r.set(t[e]-Te(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:e}=this.getProps(),{projection:i}=this.visualElement;if(!Rs(e)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Mn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();s[o]=Ax({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Mn(o=>{if(!Yr(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Te(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;Ix.set(this.visualElement,this);const t=this.visualElement.current,e=Er(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Rs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),_e.read(i);const o=Dr(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Mn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),e(),r(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=Pl,dragMomentum:a=!0}=t;return{...t,drag:e,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function Yr(n,t,e){return(t===!0||t===n)&&(e===null||e===n)}function Ux(n,t=10){let e=null;return Math.abs(n.y)>t?e="y":Math.abs(n.x)>t&&(e="x"),e}class Fx extends Fi{constructor(t){super(t),this.removeGroupControls=dn,this.removeListeners=dn,this.controls=new Nx(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||dn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ch=n=>(t,e)=>{n&&_e.postRender(()=>n(t,e))};class Ox extends Fi{constructor(){super(...arguments),this.removePointerDownListener=dn}onPointerDown(t){this.session=new $p(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:nm(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:Ch(t),onStart:Ch(e),onMove:i,onEnd:(r,o)=>{delete this.session,s&&_e.postRender(()=>s(r,o))}}}mount(){this.removePointerDownListener=Er(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const wo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ph(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const tr={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(Bt.test(n))n=parseFloat(n);else return n;const e=Ph(n,t.target.x),i=Ph(n,t.target.y);return`${e}% ${i}%`}},Bx={correct:(n,{treeScale:t,projectionDelta:e})=>{const i=n,s=Ni.parse(n);if(s.length>5)return i;const r=Ni.createTransformer(n),o=typeof s[0]!="number"?1:0,a=e.x.scale*t.x,l=e.y.scale*t.y;s[0+o]/=a,s[1+o]/=l;const c=Te(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}};class Vx extends et.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=t;l0(zx),r&&(e.group&&e.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),wo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||t.layoutDependency!==e||e===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?o.promote():o.relegate()||_e.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),$c.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function im(n){const[t,e]=Tg(),i=et.useContext(Bd);return j.jsx(Vx,{...n,layoutGroup:i,switchLayoutGroup:et.useContext(Xd),isPresent:t,safeToRemove:e})}const zx={borderRadius:{...tr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:tr,borderTopRightRadius:tr,borderBottomLeftRadius:tr,borderBottomRightRadius:tr,boxShadow:Bx};function sm(n,t,e){const i=Pe(n)?n:ks(n);return i.start(xu("",i,t,e)),i.animation}function rm(n){return n instanceof SVGElement&&n.tagName!=="svg"}const kx=(n,t)=>n.depth-t.depth;class Gx{constructor(){this.children=[],this.isDirty=!1}add(t){lu(this.children,t),this.isDirty=!0}remove(t){fa(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(kx),this.isDirty=!1,this.children.forEach(t)}}function Hx(n,t){const e=Zn.now(),i=({timestamp:s})=>{const r=s-e;r>=t&&(mi(i),n(r-t))};return _e.read(i,!0),()=>mi(i)}const om=["TopLeft","TopRight","BottomLeft","BottomRight"],Wx=om.length,Dh=n=>typeof n=="string"?parseFloat(n):n,Lh=n=>typeof n=="number"||Bt.test(n);function Xx(n,t,e,i,s,r){s?(n.opacity=Te(0,e.opacity!==void 0?e.opacity:1,qx(i)),n.opacityExit=Te(t.opacity!==void 0?t.opacity:1,0,Yx(i))):r&&(n.opacity=Te(t.opacity!==void 0?t.opacity:1,e.opacity!==void 0?e.opacity:1,i));for(let o=0;o<Wx;o++){const a=`border${om[o]}Radius`;let l=Ih(t,a),c=Ih(e,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Lh(l)===Lh(c)?(n[a]=Math.max(Te(Dh(l),Dh(c),i),0),(Kn.test(c)||Kn.test(l))&&(n[a]+="%")):n[a]=c}(t.rotate||e.rotate)&&(n.rotate=Te(t.rotate||0,e.rotate||0,i))}function Ih(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const qx=am(0,.5,Sp),Yx=am(.5,.95,dn);function am(n,t,e){return i=>i<n?0:i>t?1:e(Qi(n,t,i))}function Nh(n,t){n.min=t.min,n.max=t.max}function _n(n,t){Nh(n.x,t.x),Nh(n.y,t.y)}function Uh(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}function Fh(n,t,e,i,s){return n-=t,n=Ho(n,1/e,i),s!==void 0&&(n=Ho(n,1/s,i)),n}function $x(n,t=0,e=1,i=.5,s,r=n,o=n){if(Kn.test(t)&&(t=parseFloat(t),t=Te(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=Te(r.min,r.max,i);n===r&&(a-=t),n.min=Fh(n.min,t,e,a,s),n.max=Fh(n.max,t,e,a,s)}function Oh(n,t,[e,i,s],r,o){$x(n,t[e],t[i],t[s],t.scale,r,o)}const Kx=["x","scaleX","originX"],Zx=["y","scaleY","originY"];function Bh(n,t,e,i){Oh(n.x,t,Kx,e?e.x:void 0,i?i.x:void 0),Oh(n.y,t,Zx,e?e.y:void 0,i?i.y:void 0)}function Vh(n){return n.translate===0&&n.scale===1}function lm(n){return Vh(n.x)&&Vh(n.y)}function zh(n,t){return n.min===t.min&&n.max===t.max}function Jx(n,t){return zh(n.x,t.x)&&zh(n.y,t.y)}function kh(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function cm(n,t){return kh(n.x,t.x)&&kh(n.y,t.y)}function Gh(n){return mn(n.x)/mn(n.y)}function Hh(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}class jx{constructor(){this.members=[]}add(t){lu(this.members,t),t.scheduleRender()}remove(t){if(fa(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(t){const e=this.members.findIndex(s=>t===s);if(e===0)return!1;let i;for(let s=e;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(t,e){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,e&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:e,resumingFrom:i}=t;e.onExitComplete&&e.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Qx(n,t,e){let i="";const s=n.x.translate/t.x,r=n.y.translate/t.y,o=(e==null?void 0:e.z)||0;if((s||r||o)&&(i=`translate3d(${s}px, ${r}px, ${o}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),e){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:h,skewX:d,skewY:g}=e;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),h&&(i+=`rotateY(${h}deg) `),d&&(i+=`skewX(${d}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=n.x.scale*t.x,l=n.y.scale*t.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Hi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},dr=typeof window<"u"&&window.MotionDebug!==void 0,Ca=["","X","Y","Z"],t_={visibility:"hidden"},Wh=1e3;let e_=0;function Pa(n,t,e,i){const{latestValues:s}=t;s[n]&&(e[n]=s[n],t.setStaticValue(n,0),i&&(i[n]=0))}function um(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const e=mp(t);if(window.MotionHasOptimisedAnimation(e,"transform")){const{layout:s,layoutId:r}=n.options;window.MotionCancelOptimisedAnimation(e,"transform",_e,!(s||r))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&um(i)}function hm({attachResizeListener:n,defaultParent:t,measureScroll:e,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=t==null?void 0:t()){this.id=e_++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,dr&&(Hi.totalNodes=Hi.resolvedTargetDeltas=Hi.recalculatedProjection=0),this.nodes.forEach(s_),this.nodes.forEach(c_),this.nodes.forEach(u_),this.nodes.forEach(r_),dr&&window.MotionDebug.record(Hi)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Gx)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new cu),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=rm(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),n){let f;const h=()=>this.root.updateBlockedByResize=!1;n(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Hx(h,250),wo.hasAnimatedSinceResize&&(wo.hasAnimatedSinceResize=!1,this.nodes.forEach(qh))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:d,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||m_,{onLayoutAnimationStart:m,onLayoutAnimationComplete:p}=u.getProps(),S=!this.targetLayout||!cm(this.targetLayout,g)||d,M=!h&&d;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||M||h&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,M);const _={...su(y,"layout"),onPlay:m,onComplete:p};(u.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_)}else h||qh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,mi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(h_),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&um(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Xh);return}this.isUpdating||this.nodes.forEach(a_),this.isUpdating=!1,this.nodes.forEach(l_),this.nodes.forEach(n_),this.nodes.forEach(i_),this.clearAllSnapshots();const a=Zn.now();He.delta=gi(0,1e3/60,a-He.timestamp),He.timestamp=a,He.isProcessing=!0,ya.update.process(He),ya.preRender.process(He),ya.render.process(He),He.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$c.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(o_),this.sharedNodes.forEach(f_)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=we(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:e(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!lm(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Gi(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),g_(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return we();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(v_))){const{scroll:u}=this.root;u&&(Ds(l.x,u.offset.x),Ds(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=we();if(_n(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:h}=u;u!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&_n(l,o),Ds(l.x,f.offset.x),Ds(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=we();_n(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ls(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Gi(u.latestValues)&&Ls(l,u.latestValues)}return Gi(this.latestValues)&&Ls(l,this.latestValues),l}removeTransform(o){const a=we();_n(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Gi(c.latestValues))continue;Dl(c.latestValues)&&c.updateSnapshot();const u=we(),f=c.measurePageBox();_n(u,f),Bh(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Gi(this.latestValues)&&Bh(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==He.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=He.timestamp,!this.targetDelta&&!this.relativeTarget){const d=this.getClosestProjectingParent();d&&d.layout&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),br(this.relativeTargetOrigin,this.layout.layoutBox,d.layout.layoutBox),_n(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=we(),this.targetWithTransforms=we()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Sx(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):_n(this.target,this.layout.layoutBox),tm(this.target,this.targetDelta)):_n(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const d=this.getClosestProjectingParent();d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),br(this.relativeTargetOrigin,this.target,d.target),_n(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}dr&&Hi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Dl(this.parent.latestValues)||Qp(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===He.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;_n(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,d=this.treeScale.y;Dx(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=we());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Uh(this.prevProjectionDelta.x,this.projectionDelta.x),Uh(this.prevProjectionDelta.y,this.projectionDelta.y)),Tr(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==d||!Hh(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),dr&&Hi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ps(),this.projectionDelta=Ps(),this.projectionDeltaWithTransform=Ps()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Ps();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=we(),d=l?l.source:void 0,g=this.layout?this.layout.source:void 0,y=d!==g,m=this.getStack(),p=!m||m.members.length<=1,S=!!(y&&!p&&this.options.crossfade===!0&&!this.path.some(p_));this.animationProgress=0;let M;this.mixTargetDelta=_=>{const b=_/1e3;Yh(f.x,o.x,b),Yh(f.y,o.y,b),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(br(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),d_(this.relativeTarget,this.relativeTargetOrigin,h,b),M&&Jx(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=we()),_n(M,this.relativeTarget)),y&&(this.animationValues=u,Xx(u,c,this.latestValues,b,S,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(mi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_e.update(()=>{wo.hasAnimatedSinceResize=!0,this.currentAnimation=sm(0,Wh,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Wh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&fm(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||we();const f=mn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=mn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}_n(a,l),Ls(a,u),Tr(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new jx),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Pa("z",o,c,this.animationValues);for(let u=0;u<Ca.length;u++)Pa(`rotate${Ca[u]}`,o,c,this.animationValues),Pa(`skew${Ca[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return t_;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=bo(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=bo(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Gi(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=Qx(this.projectionDeltaWithTransform,this.treeScale,h),u&&(c.transform=u(h,c.transform));const{x:d,y:g}=this.projectionDelta;c.transformOrigin=`${d.origin*100}% ${g.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const y in Oo){if(h[y]===void 0)continue;const{correct:m,applyTo:p}=Oo[y],S=c.transform==="none"?h[y]:m(h[y],f);if(p){const M=p.length;for(let _=0;_<M;_++)c[p[_]]=S}else c[y]=S}return this.options.layoutId&&(c.pointerEvents=f===this?bo(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Xh),this.root.sharedNodes.clear()}}}function n_(n){n.updateLayout()}function i_(n){var t;const e=((t=n.resumeFrom)===null||t===void 0?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=n.layout,{animationType:r}=n.options,o=e.source!==n.layout.source;r==="size"?Mn(f=>{const h=o?e.measuredBox[f]:e.layoutBox[f],d=mn(h);h.min=i[f].min,h.max=h.min+d}):fm(r,e.layoutBox,i)&&Mn(f=>{const h=o?e.measuredBox[f]:e.layoutBox[f],d=mn(i[f]);h.max=h.min+d,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[f].max=n.relativeTarget[f].min+d)});const a=Ps();Tr(a,i,e.layoutBox);const l=Ps();o?Tr(l,n.applyTransform(s,!0),e.measuredBox):Tr(l,i,e.layoutBox);const c=!lm(a);let u=!1;if(!n.resumeFrom){const f=n.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:d}=f;if(h&&d){const g=we();br(g,e.layoutBox,h.layoutBox);const y=we();br(y,i,d.layoutBox),cm(g,y)||(u=!0),f.options.layoutRoot&&(n.relativeTarget=y,n.relativeTargetOrigin=g,n.relativeParent=f)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function s_(n){dr&&Hi.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function r_(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function o_(n){n.clearSnapshot()}function Xh(n){n.clearMeasurements()}function a_(n){n.isLayoutDirty=!1}function l_(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function qh(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function c_(n){n.resolveTargetDelta()}function u_(n){n.calcProjection()}function h_(n){n.resetSkewAndRotation()}function f_(n){n.removeLeadSnapshot()}function Yh(n,t,e){n.translate=Te(t.translate,0,e),n.scale=Te(t.scale,1,e),n.origin=t.origin,n.originPoint=t.originPoint}function $h(n,t,e,i){n.min=Te(t.min,e.min,i),n.max=Te(t.max,e.max,i)}function d_(n,t,e,i){$h(n.x,t.x,e.x,i),$h(n.y,t.y,e.y,i)}function p_(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const m_={duration:.45,ease:[.4,0,.1,1]},Kh=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Zh=Kh("applewebkit/")&&!Kh("chrome/")?Math.round:dn;function Jh(n){n.min=Zh(n.min),n.max=Zh(n.max)}function g_(n){Jh(n.x),Jh(n.y)}function fm(n,t,e){return n==="position"||n==="preserve-aspect"&&!Mx(Gh(t),Gh(e),.2)}function v_(n){var t;return n!==n.root&&((t=n.scroll)===null||t===void 0?void 0:t.wasRoot)}const x_=hm({attachResizeListener:(n,t)=>Dr(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Da={current:void 0},dm=hm({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Da.current){const n=new x_({});n.mount(window),n.setOptions({layoutScroll:!0}),Da.current=n}return Da.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),__={pan:{Feature:Ox},drag:{Feature:Fx,ProjectionNode:dm,MeasureLayout:im}};function jh(n,t,e){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",e==="Start");const s="onHover"+e,r=i[s];r&&_e.postRender(()=>r(t,kr(t)))}class y_ extends Fi{mount(){const{current:t}=this.node;t&&(this.unmount=E0(t,e=>(jh(this.node,e,"Start"),i=>jh(this.node,i,"End"))))}unmount(){}}class M_ extends Fi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=zr(Dr(this.node.current,"focus",()=>this.onFocus()),Dr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qh(n,t,e){const{props:i}=n;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",e==="Start");const s="onTap"+(e==="End"?"":e),r=i[s];r&&_e.postRender(()=>r(t,kr(t)))}class S_ extends Fi{mount(){const{current:t}=this.node;t&&(this.unmount=w0(t,e=>(Qh(this.node,e,"Start"),(i,{success:s})=>Qh(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Il=new WeakMap,La=new WeakMap,E_=n=>{const t=Il.get(n.target);t&&t(n)},T_=n=>{n.forEach(E_)};function b_({root:n,...t}){const e=n||document;La.has(e)||La.set(e,{});const i=La.get(e),s=JSON.stringify(t);return i[s]||(i[s]=new IntersectionObserver(T_,{root:n,...t})),i[s]}function A_(n,t,e){const i=b_(t);return Il.set(n,e),i.observe(n),()=>{Il.delete(n),i.unobserve(n)}}const w_={some:0,all:1};class R_ extends Fi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:e,margin:i,amount:s="some",once:r}=t,o={root:e?e.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:w_[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),h=c?u:f;h&&h(l)};return A_(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(C_(t,e))&&this.startObserver()}unmount(){}}function C_({viewport:n={}},{viewport:t={}}={}){return e=>n[e]!==t[e]}const P_={inView:{Feature:R_},tap:{Feature:S_},focus:{Feature:M_},hover:{Feature:y_}},D_={layout:{ProjectionNode:dm,MeasureLayout:im}},Wo={current:null},yu={current:!1};function pm(){if(yu.current=!0,!!Gc)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>Wo.current=n.matches;n.addListener(t),t()}else Wo.current=!1}const L_=[...Fp,Ze,Ni],I_=n=>L_.find(Up(n)),Hs=new WeakMap;function N_(n,t,e){for(const i in t){const s=t[i],r=e[i];if(Pe(s))n.addValue(i,s);else if(Pe(r))n.addValue(i,ks(s,{owner:n}));else if(r!==s)if(n.hasValue(i)){const o=n.getValue(i);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=n.getStaticValue(i);n.addValue(i,ks(o!==void 0?o:s,{owner:n}))}}for(const i in e)t[i]===void 0&&n.removeValue(i);return t}const tf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class mm{scrapeMotionValuesFromProps(t,e,i){return{}}constructor({parent:t,props:e,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=mu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=Zn.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,_e.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=e.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=e,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!r,this.isControllingVariants=ca(e),this.isVariantNode=Hd(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(e,{},this);for(const d in h){const g=h[d];l[d]!==void 0&&Pe(g)&&g.set(l[d],!1)}}mount(t){this.current=t,Hs.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,i)=>this.bindToMotionValue(i,e)),yu.current||pm(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Wo.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Hs.delete(this.current),this.projection&&this.projection.unmount(),mi(this.notifyUpdate),mi(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}bindToMotionValue(t,e){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=rs.has(t),s=e.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&_e.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=e.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{s(),r(),o&&o(),e.owner&&e.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in zs){const e=zs[t];if(!e)continue;const{isEnabled:i,Feature:s}=e;if(!this.features[t]&&s&&i(this.props)&&(this.features[t]=new s(this)),this.features[t]){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):we()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let i=0;i<tf.length;i++){const s=tf[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,o=t[r];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=N_(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const i=this.values.get(t);e!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&e!==void 0&&(i=ks(e===null?void 0:e,{owner:this}),this.addValue(t,i)),i}readValue(t,e){var i;let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(i=this.getBaseTargetFromProps(this.props,t))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(Ip(s)||Tp(s))?s=parseFloat(s):!I_(s)&&Ni.test(e)&&(s=Pp(t,e)),this.setBaseTarget(t,Pe(s)?s.get():s)),Pe(s)?s.get():s}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const o=Zc(this.props,i,(e=this.presenceContext)===null||e===void 0?void 0:e.custom);o&&(s=o[t])}if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,t);return r!==void 0&&!Pe(r)?r:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,e){return this.events[t]||(this.events[t]=new cu),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class gm extends mm{constructor(){super(...arguments),this.KeyframeResolver=Op}sortInstanceNodePosition(t,e){return t.compareDocumentPosition(e)&2?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:i}){delete e[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Pe(t)&&(this.childSubscription=t.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}function U_(n){return window.getComputedStyle(n)}class vm extends gm{constructor(){super(...arguments),this.type="html",this.renderInstance=jd}readValueFromInstance(t,e){if(rs.has(e)){const i=pu(e);return i&&i.default||0}else{const i=U_(t),s=(Kd(e)?i.getPropertyValue(e):i[e])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:e}){return em(t,e)}build(t,e,i){Qc(t,e,i.transformTemplate)}scrapeMotionValuesFromProps(t,e,i){return iu(t,e,i)}}class xm extends gm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=we}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(rs.has(e)){const i=pu(e);return i&&i.default||0}return e=Qd.has(e)?e:Yc(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,i){return np(t,e,i)}build(t,e,i){tu(t,e,this.isSVGTag,i.transformTemplate)}renderInstance(t,e,i,s){tp(t,e,i,s)}mount(t){this.isSVGTag=nu(t.tagName),super.mount(t)}}const F_=(n,t)=>Kc(n)?new xm(t):new vm(t,{allowProjection:n!==et.Fragment}),O_=v0({...fx,...P_,...__,...D_},F_),Fs=Lg(O_);function ji(n){const t=Uo(()=>ks(n)),{isStatic:e}=et.useContext(oa);if(e){const[,i]=et.useState(n);et.useEffect(()=>t.on("change",i),[])}return t}function B_(n,t){const e=ji(t()),i=()=>e.set(t());return i(),Hc(()=>{const s=()=>_e.preRender(i,!1,!0),r=n.map(o=>o.on("change",s));return()=>{r.forEach(o=>o()),mi(i)}}),e}function V_(n,...t){const e=n.length;function i(){let s="";for(let r=0;r<e;r++){s+=n[r];const o=t[r];o&&(s+=Pe(o)?o.get():o)}return s}return B_(t.filter(Pe),i)}function ef(n){return typeof n=="number"?n:parseFloat(n)}function nf(n,t={}){const{isStatic:e}=et.useContext(oa),i=et.useRef(null),s=ji(Pe(n)?ef(n.get()):n),r=et.useRef(s.get()),o=et.useRef(()=>{}),a=()=>{const c=i.current;c&&c.time===0&&c.sample(He.delta),l(),i.current=Vv({keyframes:[s.get(),r.current],velocity:s.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:o.current})},l=()=>{i.current&&i.current.stop()};return et.useInsertionEffect(()=>s.attach((c,u)=>e?u(c):(r.current=c,o.current=u,_e.update(a),s.get()),l),[JSON.stringify(t)]),Hc(()=>{if(Pe(n))return n.on("change",c=>s.set(ef(c)))},[s]),s}function z_(){!yu.current&&pm();const[n]=et.useState(Wo.current);return n}function k_(n){return et.useEffect(()=>()=>n(),[])}const G_=(n,t,e)=>{const i=t-n;return((e-n)%i+i)%i+n};function _m(n,t){return Hp(n)?n[G_(0,n.length,t)]:n}function Mu(n){return typeof n=="object"&&!Array.isArray(n)}function ym(n,t,e,i){return typeof n=="string"&&Mu(t)?up(n,e,i):n instanceof NodeList?Array.from(n):Array.isArray(n)?n:[n]}function H_(n,t,e){return n*(t+1)}function sf(n,t,e,i){var s;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,n+parseFloat(t)):t==="<"?e:(s=i.get(t))!==null&&s!==void 0?s:n}function W_(n,t,e){for(let i=0;i<n.length;i++){const s=n[i];s.at>t&&s.at<e&&(fa(n,s),i--)}}function X_(n,t,e,i,s,r){W_(n,s,r);for(let o=0;o<t.length;o++)n.push({value:t[o],at:Te(s,r,i[o]),easing:_m(e,o)})}function q_(n,t){for(let e=0;e<n.length;e++)n[e]=n[e]/(t+1)}function Y_(n,t){return n.at===t.at?n.value===null?1:t.value===null?-1:0:n.at-t.at}const $_="easeInOut";function K_(n,{defaultTransition:t={},...e}={},i,s){const r=t.duration||.3,o=new Map,a=new Map,l={},c=new Map;let u=0,f=0,h=0;for(let d=0;d<n.length;d++){const g=n[d];if(typeof g=="string"){c.set(g,f);continue}else if(!Array.isArray(g)){c.set(g.name,sf(f,g.at,u,c));continue}let[y,m,p={}]=g;p.at!==void 0&&(f=sf(f,p.at,u,c));let S=0;const M=(_,b,T,P=0,v=0)=>{const A=Z_(_),{delay:D=0,times:w=Xp(A),type:L="keyframes",repeat:G,repeatType:B,repeatDelay:R=0,...N}=b;let{ease:I=t.ease||"easeOut",duration:k}=b;const $=typeof D=="function"?D(P,v):D,rt=A.length,it=ha(L)?L:s==null?void 0:s[L];if(rt<=2&&it){let bt=100;if(rt===2&&Q_(A)){const nt=A[1]-A[0];bt=Math.abs(nt)}const Z={...N};k!==void 0&&(Z.duration=Yn(k));const tt=y0(Z,bt,it);I=tt.ease,k=tt.duration}k??(k=r);const lt=f+$;w.length===1&&w[0]===0&&(w[1]=1);const wt=w.length-A.length;if(wt>0&&Wp(w,wt),A.length===1&&A.unshift(null),G){k=H_(k,G);const bt=[...A],Z=[...w];I=Array.isArray(I)?[...I]:[I];const tt=[...I];for(let nt=0;nt<G;nt++){A.push(...bt);for(let ot=0;ot<bt.length;ot++)w.push(Z[ot]+(nt+1)),I.push(ot===0?"linear":_m(tt,ot-1))}q_(w,G)}const Ut=lt+k;X_(T,A,I,w,lt,Ut),S=Math.max($+k,S),h=Math.max(Ut,h)};if(Pe(y)){const _=rf(y,a);M(m,p,of("default",_))}else{const _=ym(y,m,i,l),b=_.length;for(let T=0;T<b;T++){m=m,p=p;const P=_[T],v=rf(P,a);for(const A in m)M(m[A],J_(p,A),of(A,v),T,b)}}u=f,f+=S}return a.forEach((d,g)=>{for(const y in d){const m=d[y];m.sort(Y_);const p=[],S=[],M=[];for(let b=0;b<m.length;b++){const{at:T,value:P,easing:v}=m[b];p.push(P),S.push(Qi(0,h,T)),M.push(v||"easeOut")}S[0]!==0&&(S.unshift(0),p.unshift(p[0]),M.unshift($_)),S[S.length-1]!==1&&(S.push(1),p.push(null)),o.has(g)||o.set(g,{keyframes:{},transition:{}});const _=o.get(g);_.keyframes[y]=p,_.transition[y]={...t,duration:h,ease:M,times:S,...e}}}),o}function rf(n,t){return!t.has(n)&&t.set(n,{}),t.get(n)}function of(n,t){return t[n]||(t[n]=[]),t[n]}function Z_(n){return Array.isArray(n)?n:[n]}function J_(n,t){return n&&n[t]?{...n,...n[t]}:{...n}}const j_=n=>typeof n=="number",Q_=n=>n.every(j_);function ty(n,t){return n in t}class ey extends mm{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,e){if(ty(e,t)){const i=t[e];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(t,e){delete e.output[t]}measureInstanceViewportBox(){return we()}build(t,e){Object.assign(t.output,e)}renderInstance(t,{output:e}){Object.assign(t,e)}sortInstanceNodePosition(){return 0}}function ny(n){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},e=rm(n)?new xm(t):new vm(t);e.mount(n),Hs.set(n,e)}function iy(n){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},e=new ey(t);e.mount(n),Hs.set(n,e)}function sy(n,t){return Pe(n)||typeof n=="number"||typeof n=="string"&&!Mu(t)}function Mm(n,t,e,i){const s=[];if(sy(n,t))s.push(sm(n,Mu(t)&&t.default||t,e&&(e.default||e)));else{const r=ym(n,t,i),o=r.length;for(let a=0;a<o;a++){const l=r[a],c=l instanceof Element?ny:iy;Hs.has(l)||c(l);const u=Hs.get(l),f={...e};"delay"in f&&typeof f.delay=="function"&&(f.delay=f.delay(a,o)),s.push(..._u(u,{...t,transition:f},{}))}}return s}function ry(n,t,e){const i=[];return K_(n,t,e,{spring:vu}).forEach(({keyframes:r,transition:o},a)=>{i.push(...Mm(a,r,o))}),i}function oy(n){return Array.isArray(n)&&n.some(Array.isArray)}function ay(n){function t(e,i,s){let r=[];oy(e)?r=ry(e,i,n):r=Mm(e,i,s,n);const o=new rp(r);return n&&n.animations.push(o),o}return t}function ly(){const n=Uo(()=>({current:null,animations:[]})),t=Uo(()=>ay(n));return k_(()=>{n.animations.forEach(e=>e.stop())}),[n,t]}function cy(n,t){if(n==="first")return 0;{const e=t-1;return n==="last"?e:e/2}}function uy(n=.1,{startDelay:t=0,from:e=0,ease:i}={}){return(s,r)=>{const o=typeof e=="number"?e:cy(e,r),a=Math.abs(o-s);let l=n*a;if(i){const c=r*n;l=Rl(i)(l/c)*c}return t+l}}const hy=["h1","h2","h3","h4","h5","h6","p","div","span"];function fy({text:n="Origami Unfold",font:t={fontFamily:"Inter",fontWeight:700,fontSize:120,lineHeight:"1.5em",letterSpacing:"0em",textAlign:"left"},color:e="#FFFFFF",tag:i="h1",startRotateY:s=-90,startRotateX:r=45,startOpacity:o=0,transformOrigin:a="left center",perspective:l=1200,stagger:c=.03,direction:u="left-to-right",transition:f={type:"tween",ease:"easeOut",duration:.8}}){const[h,d]=ly(),g=et.useCallback(()=>{h.current&&d(".char",{rotateY:s,rotateX:r,opacity:o/100},{duration:0})},[d,s,r,o,h]),y=et.useCallback(()=>{if(!h.current)return;const M={...f,delay:uy(c,{from:u==="right-to-left"?"last":"first"})};d(".char",{rotateY:0,rotateX:0,opacity:1},M)},[d,f,c,u,h]);et.useEffect(()=>{g();const M=setTimeout(y,50);return()=>clearTimeout(M)},[y,g]);const m=hy.includes(i)?i:"h1",p=Fs[m],S=et.useMemo(()=>(n??"").split(""),[n]);return j.jsx("div",{style:{width:"100%",display:"flex",justifyContent:t.textAlign==="right"?"flex-end":t.textAlign==="center"?"center":"flex-start",overflow:"visible"},children:j.jsx(p,{ref:h,"aria-label":n,style:{margin:0,display:"inline-block",whiteSpace:"pre-wrap",...t,color:e,perspective:l},children:S.map((M,_)=>j.jsx(Fs.span,{className:"char","aria-hidden":"true",style:{display:"inline-block",transformOrigin:a,rotateY:s,rotateX:r,opacity:o/100,willChange:"transform, opacity"},children:M===" "?" ":M},_))})})}const dy=18,py=.5;function my({label:n="Magnetic Hover",link:t="",newTab:e=!1,font:i={fontFamily:"Inter",fontWeight:400,fontSize:16,lineHeight:"1em",letterSpacing:"-0.01em",textAlign:"left"},fill:s="#FFFFFF",textColor:r="#000000",sweepColor:o="#0000FF",sweepTextColor:a="#FFFFFF",paddingX:l=48,paddingY:c=24,radius:u=100,magnet:f=10,transition:h={type:"tween",stiffness:800,damping:60,mass:1,ease:"easeInOut",duration:.3},border:d=!0,borderOptions:g={color:"#FFFFFF",width:1},style:y}){const m=et.useRef(null),[p,S]=et.useState(!1),[M,_]=et.useState({x:0,y:0,d:0}),b=et.useRef(!1),T=ji(0),P=ji(0),v=nf(T,{stiffness:260,damping:18,mass:.4}),A=nf(P,{stiffness:260,damping:18,mass:.4}),D=(g==null?void 0:g.color)??"#FFFFFF",w=d?(g==null?void 0:g.width)??0:0;return et.useEffect(()=>{const L=m.current;if(!L)return;const G=L,B=f/20*py,R=f*dy;function N(k){const $=G.getBoundingClientRect(),rt=$.left+$.width/2-v.get(),it=$.top+$.height/2-A.get(),lt=k.clientX-rt,wt=k.clientY-it,Ut=k.clientX>=$.left&&k.clientX<=$.right&&k.clientY>=$.top&&k.clientY<=$.bottom,bt=Math.max(0,Math.abs(lt)-$.width/2),Z=Math.max(0,Math.abs(wt)-$.height/2),tt=Math.hypot(bt,Z);if(Ut!==b.current){const ot=Math.max(0,Math.min($.width,k.clientX-$.left)),ht=Math.max(0,Math.min($.height,k.clientY-$.top)),vt=2*Math.hypot($.width,$.height);_({x:ot,y:ht,d:vt}),b.current=Ut,S(Ut)}if(tt>R){T.set(0),P.set(0);return}const nt=R===0?0:1-tt/R;T.set(lt*B*nt),P.set(wt*B*nt)}function I(){T.set(0),P.set(0),b.current=!1,S(!1)}return window.addEventListener("pointermove",N),document.addEventListener("pointerleave",I),()=>{window.removeEventListener("pointermove",N),document.removeEventListener("pointerleave",I)}},[f,T,P,v,A]),j.jsxs(Fs.a,{ref:m,href:t||void 0,target:t&&e?"_blank":void 0,rel:t&&e?"noopener noreferrer":void 0,style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",padding:`${c}px ${l}px`,borderRadius:u,background:s,border:w>0?`${w}px solid ${D}`:"none",cursor:"pointer",overflow:"hidden",textDecoration:"none",whiteSpace:"nowrap",x:v,y:A,boxShadow:p?"0 16px 40px rgba(0,0,0,0.22)":"0 8px 22px rgba(0,0,0,0.14)",...i,...y},children:[j.jsx(Fs.span,{"aria-hidden":!0,initial:!1,animate:{scale:p?1:0},transition:h,style:{position:"absolute",top:M.y,left:M.x,width:M.d,height:M.d,marginLeft:-M.d/2,marginTop:-M.d/2,borderRadius:"50%",background:o,transformOrigin:"center",pointerEvents:"none"}}),j.jsx(Fs.span,{initial:!1,animate:{color:p?a:r},transition:h,style:{position:"relative",zIndex:1},children:n})]})}const gy="https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/e4476503-c1e3-4358-3ff6-539deda1f800/w=800",cn={fit:"cover",focusY:19,columns:200,ramp:" .:-=+*#%@",invert:!1,contrast:100,colorMode:"mono",inkColor:"#FFFFFF",reveal:!0,revealOptions:{size:80,softness:16}},vy=n=>.5+n/100*2,xy=n=>Math.min(100,Math.max(0,typeof n=="number"?n:50));function _y(n,t,e,i,s,r){const o=s==="contain"?Math.min(e/n,i/t):Math.max(e/n,i/t),a=n*o,l=t*o,c=s==="cover"?xy(r)/100:.5;return{dx:(e-a)/2,dy:(i-l)*c,dw:a,dh:l}}function yy(n){if(n)return typeof n=="string"?n.trim()||void 0:n.src||void 0}function My(n){const{image:t,fit:e=cn.fit,focusY:i=cn.focusY,columns:s=cn.columns,ramp:r=cn.ramp,invert:o=cn.invert,contrast:a=cn.contrast,colorMode:l=cn.colorMode,inkColor:c=cn.inkColor,reveal:u=cn.reveal,revealOptions:f=cn.revealOptions,style:h}=n,d=et.useRef(null),g=et.useRef(null),y=et.useRef(null),m=et.useRef(null),p=et.useRef(null),S=et.useRef(null),M=et.useRef([]),_=et.useRef(!1),b=et.useRef({x:-9999,y:-9999,inside:!1}),T=yy(t)||gy,P=(f==null?void 0:f.size)??cn.revealOptions.size,v=(f==null?void 0:f.softness)??cn.revealOptions.softness;return et.useEffect(()=>{const A=d.current;if(!A)return;const D=A.getContext("2d");if(!D)return;const w=A,L=D,G=r&&r.length>0?r:cn.ramp,B=vy(a);let R=0,N=!0,I={dx:0,dy:0,dw:0,dh:0};const k=5;M.current=Array.from({length:k},()=>({x:0,y:0})),_.current=!1;function $(){const ot=Math.min(window.devicePixelRatio||1,2),ht=w.clientWidth||600,vt=w.clientHeight||600;return{w:ht,h:vt,dpr:ot}}function rt(){const ot=m.current;if(!ot)return;const{w:ht,h:vt,dpr:Nt}=$();w.width=Math.max(1,Math.round(ht*Nt)),w.height=Math.max(1,Math.round(vt*Nt));const Et=Math.max(8,Math.round(s)),Ot=ht*Nt/Et,zt=Ot*1.7,Ft=zt,Yt=Math.max(1,Math.floor(vt*Nt/Ft));let $t=y.current;$t||($t=document.createElement("canvas"),y.current=$t),$t.width=Et,$t.height=Yt;const ce=$t.getContext("2d",{willReadFrequently:!0});if(!ce)return;const ue=_y(ot.width,ot.height,w.width,w.height,e,i);ce.clearRect(0,0,Et,Yt),ce.drawImage(ot,ue.dx/Ot,ue.dy/Ft,ue.dw/Ot,ue.dh/Ft);let ie;try{ie=ce.getImageData(0,0,Et,Yt).data}catch{m.current=null;return}let re=g.current;re||(re=document.createElement("canvas"),g.current=re),re.width=w.width,re.height=w.height;const U=re.getContext("2d");if(!U)return;U.clearRect(0,0,re.width,re.height),U.font=zt.toFixed(2)+"px ui-monospace, monospace",U.textBaseline="top";const Fe=G.length-1;for(let qt=0;qt<Yt;qt++)for(let C=0;C<Et;C++){const x=(qt*Et+C)*4,z=ie[x],W=ie[x+1],J=ie[x+2];let ut=(.299*z+.587*W+.114*J)/255;ut=(ut-.5)*B+.5,o&&(ut=1-ut),ut=ut<0?0:ut>1?1:ut;const st=G[Math.round(ut*Fe)];st!==" "&&(U.fillStyle=l==="image"?`rgb(${Math.min(255,z+30)}, ${Math.min(255,W+30)}, ${Math.min(255,J+30)})`:c,U.fillText(st,C*Ot,qt*Ft))}I=ue}function it(ot){let ht=ot.current;return ht||(ht=document.createElement("canvas"),ot.current=ht),(ht.width!==w.width||ht.height!==w.height)&&(ht.width=w.width,ht.height=w.height),ht}function lt(){const ot=M.current;if(ot.length===0)return;const{dpr:ht}=$(),vt=b.current.x*ht,Nt=b.current.y*ht;if(!_.current){for(const Et of ot)Et.x=vt,Et.y=Nt;_.current=!0;return}ot[0].x+=(vt-ot[0].x)*.35,ot[0].y+=(Nt-ot[0].y)*.35;for(let Et=1;Et<ot.length;Et++)ot[Et].x+=(ot[Et-1].x-ot[Et].x)*.35,ot[Et].y+=(ot[Et-1].y-ot[Et].y)*.35}function wt(){const ot=g.current;if(!ot)return;L.clearRect(0,0,w.width,w.height),L.drawImage(ot,0,0);const ht=m.current;if(!u||!b.current.inside||!ht)return;const{dpr:vt}=$(),Nt=M.current,Et=it(p),Ot=Et.getContext("2d"),zt=it(S),Ft=zt.getContext("2d");if(!(!Ot||!Ft)){Ot.globalCompositeOperation="source-over",Ot.clearRect(0,0,Et.width,Et.height),Ot.drawImage(ht,I.dx,I.dy,I.dw,I.dh),Ft.clearRect(0,0,zt.width,zt.height),Ft.save(),Ft.filter=`blur(${(v*vt).toFixed(1)}px)`,Ft.fillStyle="#FFFFFF";for(let Yt=0;Yt<Nt.length;Yt++){const $t=Nt.length<=1?0:Yt/(Nt.length-1),ce=P*vt*(1-$t*.5);Ft.beginPath(),Ft.arc(Nt[Yt].x,Nt[Yt].y,ce,0,Math.PI*2),Ft.fill()}Ft.restore(),Ot.globalCompositeOperation="destination-in",Ot.drawImage(zt,0,0),Ot.globalCompositeOperation="source-over",L.drawImage(Et,0,0)}}function Ut(){N&&(lt(),wt(),R=requestAnimationFrame(Ut))}function bt(ot){const ht=w.getBoundingClientRect(),vt=ot.clientX-ht.left,Nt=ot.clientY-ht.top;b.current.x=vt,b.current.y=Nt,b.current.inside=vt>=0&&Nt>=0&&vt<=ht.width&&Nt<=ht.height}function Z(){b.current.inside=!1,_.current=!1}const tt=new Image;tt.crossOrigin="anonymous",tt.onload=()=>{N&&(m.current=tt,rt(),wt(),u&&(R=requestAnimationFrame(Ut)))},tt.src=T;let nt=null;return typeof ResizeObserver<"u"&&(nt=new ResizeObserver(()=>{rt(),wt()}),nt.observe(w)),w.addEventListener("pointermove",bt),w.addEventListener("pointerleave",Z),()=>{N=!1,cancelAnimationFrame(R),nt==null||nt.disconnect(),w.removeEventListener("pointermove",bt),w.removeEventListener("pointerleave",Z)}},[T,e,i,s,r,o,a,l,c,u,P,v]),j.jsx("canvas",{ref:d,"aria-label":typeof t=="object"?(t==null?void 0:t.alt)??"ASCII art":"ASCII art",style:{...h,display:"block",width:"100%",height:"100%",cursor:u?"crosshair":"default"}})}const ni={shape:"rounded",fill:"solid",strokeWidth:1.5,particleColor:"#FFFFFF",backgroundColor:"#000000",maxSize:36,minSize:12,gap:4,influence:300},af=(n,t,e)=>n+(t-n)*e,Sy=(n,t,e)=>Math.max(t,Math.min(e,n));function Ey({shape:n=ni.shape,fill:t=ni.fill,strokeWidth:e=ni.strokeWidth,particleColor:i=ni.particleColor,backgroundColor:s=ni.backgroundColor,maxSize:r=ni.maxSize,minSize:o=ni.minSize,gap:a=ni.gap,influence:l=ni.influence,style:c}){const u=et.useRef(null),f=et.useRef(null),h=et.useRef(null),d=et.useRef(null),g=et.useRef({w:0,h:0,dpr:1}),y=et.useRef({shape:n,fill:t,strokeWidth:e,particleColor:i,backgroundColor:s,maxSize:r,minSize:o,gap:a,influence:l}),m=et.useRef(new Float32Array(0));return et.useEffect(()=>{y.current={shape:n,fill:t,strokeWidth:e,particleColor:i,backgroundColor:s,maxSize:r,minSize:o,gap:a,influence:l}},[n,t,e,i,s,r,o,a,l]),et.useEffect(()=>{const p=u.current,S=f.current;if(!p||!S)return;const M=S.getContext("2d");if(!M)return;const _=()=>{const D=p.clientWidth,w=p.clientHeight,L=Math.max(1,window.devicePixelRatio||1),G=g.current;G.w===D&&G.h===w&&G.dpr===L||(g.current={w:D,h:w,dpr:L},S.width=Math.round(D*L),S.height=Math.round(w*L),S.style.width=`${D}px`,S.style.height=`${w}px`,M.setTransform(L,0,0,L,0,0))},b=(D,w,L,G)=>{const B=L/2;switch(M.beginPath(),G){case"circle":M.arc(D,w,B,0,Math.PI*2);break;case"rounded":{const R=Math.min(B,L*.28),N=D-B,I=w-B;M.moveTo(N+R,I),M.arcTo(N+L,I,N+L,I+L,R),M.arcTo(N+L,I+L,N,I+L,R),M.arcTo(N,I+L,N,I,R),M.arcTo(N,I,N+L,I,R),M.closePath();break}case"triangle":M.moveTo(D,w-B),M.lineTo(D+B,w+B),M.lineTo(D-B,w+B),M.closePath();break;case"diamond":M.moveTo(D,w-B),M.lineTo(D+B,w),M.lineTo(D,w+B),M.lineTo(D-B,w),M.closePath();break;case"hexagon":for(let R=0;R<6;R++){const N=(-90+60*R)*Math.PI/180,I=D+B*Math.cos(N),k=w+B*Math.sin(N);R===0?M.moveTo(I,k):M.lineTo(I,k)}M.closePath();break;case"star":{const R=B*.5;for(let N=0;N<10;N++){const I=N%2===0?B:R,k=(-90+36*N)*Math.PI/180,$=D+I*Math.cos(k),rt=w+I*Math.sin(k);N===0?M.moveTo($,rt):M.lineTo($,rt)}M.closePath();break}default:M.rect(D-B,w-B,L,L)}},T=()=>{_();const D=y.current,{w,h:L}=g.current,G=d.current,B=D.fill==="stroke";M.clearRect(0,0,w,L),M.fillStyle=D.backgroundColor,M.fillRect(0,0,w,L);const R=Math.max(1,D.maxSize+D.gap),N=Math.max(1,Math.floor(w/R)),I=Math.max(1,Math.floor(L/R)),k=(w-N*R)/2+R/2,$=(L-I*R)/2+R/2,rt=N*I;m.current.length!==rt&&(m.current=new Float32Array(rt).fill(D.minSize));const it=m.current;M.fillStyle=D.particleColor,M.strokeStyle=D.particleColor,M.lineJoin="round",M.lineWidth=Math.max(.5,D.strokeWidth);const lt=Math.max(1,D.influence);for(let wt=0;wt<I;wt++)for(let Ut=0;Ut<N;Ut++){const bt=wt*N+Ut,Z=k+Ut*R,tt=$+wt*R;let nt=0;if(G){const vt=G.x-Z,Nt=G.y-tt,Et=Math.sqrt(vt*vt+Nt*Nt);nt=Sy(1-Et/lt,0,1)}const ot=af(D.minSize,D.maxSize,nt),ht=af(it[bt]||D.minSize,ot,.2);it[bt]=ht,!(ht<=.2)&&(b(Z,tt,ht,D.shape),B?M.stroke():M.fill())}h.current=requestAnimationFrame(T)},P=D=>{const w=p.getBoundingClientRect();d.current={x:D.clientX-w.left,y:D.clientY-w.top}},v=()=>{d.current=null};_();const A=new ResizeObserver(_);return A.observe(p),p.addEventListener("pointermove",P),p.addEventListener("pointerleave",v),h.current=requestAnimationFrame(T),()=>{A.disconnect(),p.removeEventListener("pointermove",P),p.removeEventListener("pointerleave",v),h.current&&cancelAnimationFrame(h.current)}},[]),j.jsx("div",{ref:u,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",backgroundColor:s,...c},children:j.jsx("canvas",{ref:f,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"block"}})})}function Ty(n){n={...by,...n};const{text:t,speed:e,reversed:i,textFont:s,textColor:r,waveFrequency:o,waveHeight:a,separator:l,gap:c,className:u,width:f,height:h,style:d}=n,g=(st,q)=>{if(typeof st=="number")return isFinite(st)?st:q;if(typeof st=="string"){const K=parseFloat(st);return isFinite(K)?K:q}return q},y=g(s==null?void 0:s.fontSize,17),m=g(s==null?void 0:s.letterSpacing,0),p=`${y}px`,S=`${m}px`,_=(s==null?void 0:s.fontFamily)||'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',b=s==null?void 0:s.fontWeight,T=s==null?void 0:s.fontStyle,P=et.useRef(null),v=et.useRef(null),A=et.useRef(null),D=et.useRef(null),w=!1,[L,G]=et.useState({w:800,h:200});et.useLayoutEffect(()=>{const st=P.current;if(!st)return;const q=(mt,ft)=>{const dt=Math.round(mt),Pt=Math.round(ft);dt<=0||Pt<=0||G(Dt=>Math.abs(Dt.w-dt)<=1&&Math.abs(Dt.h-Pt)<=1?Dt:{w:dt,h:Pt})},K=st.getBoundingClientRect();if(q(K.width,K.height),typeof ResizeObserver>"u")return;const ct=new ResizeObserver(mt=>{for(const ft of mt)q(ft.contentRect.width,ft.contentRect.height)});return ct.observe(st),()=>ct.disconnect()},[]);const R=`tp-${et.useId().replace(/[:]/g,"")}-path`,N=L.w>0?L.w:800,I=L.h>0?L.h:200,[k,$]=et.useState(0),rt=t&&t.length>0?t:" ",it=" ".repeat(Math.max(0,Math.min(20,Math.round(c??0)))),lt=rt+it+(l??"")+it,wt=Math.max(1,lt.length*y*.6),Ut=k>0?k:wt,bt=I/2,tt=Math.max(0,Math.min(a/2,I/2-y))*(4/3),nt=Math.max(1,Math.round(o*2)),ot=N/nt,ht=Math.max(100,N*.3),vt=Math.ceil(ht/ot),Nt=Math.ceil(ht/ot),Et=nt+vt+Nt,Ot=-vt*ot,zt=vt%2===0?-1:1;let Ft=`M ${Ot},${bt}`;for(let st=0;st<Et;st++){const q=Ot+st*ot,K=Ot+(st+1)*ot,ct=bt+(st%2===0?zt*tt:-zt*tt);Ft+=` C ${q+ot/3},${ct} ${K-ot/3},${ct} ${K},${bt}`}const Yt=Ft,[$t,ce]=et.useState(0);et.useLayoutEffect(()=>{const st=v.current;if(!st)return;let q=0;try{q=st.getTotalLength()}catch{q=0}!isFinite(q)||q<=0||ce(K=>K===q?K:q)},[Yt,N,I]),et.useLayoutEffect(()=>{const st=A.current,q=D.current;if(!st||!q)return;let K=0,ct=0;try{K=st.getComputedTextLength(),ct=q.getComputedTextLength()}catch{K=0,ct=0}const mt=(ct-K)/2;!isFinite(mt)||mt<=0||$(ft=>ft===mt?ft:mt)},[lt,p,S,_,b,T]);const ue=2*Math.hypot(ot/2,tt)*1.15,ie=Et*Math.max(ot,ue),re=Math.max($t,ie),U=Math.min(256,Math.max(2,Math.ceil(re/Ut)+3)),Fe=lt.repeat(U),qt=et.useRef(0),C=et.useRef(null),x=et.useRef(0),z=et.useRef(!1),W=et.useRef(0),J=et.useRef(null);x.current=Math.max(0,e??0)*5,z.current=i,W.current=k>0?k:0,et.useLayoutEffect(()=>{const st=J.current;if(!st)return;C.current=null;let q=0;const K=ct=>{C.current==null&&(C.current=ct);const mt=Math.min((ct-C.current)/1e3,1/30);C.current=ct;const ft=W.current,dt=x.current;if(ft>0&&dt>0){const Pt=z.current?1:-1;let Dt=qt.current+Pt*dt*mt;Dt-=Math.floor(Dt/ft)*ft,qt.current=Dt,st.setAttribute("startOffset",`${Dt}px`)}q=requestAnimationFrame(K)};return q=requestAnimationFrame(K),()=>cancelAnimationFrame(q)},[w]);const ut=(st,q)=>st==null?q:typeof st=="number"?`${st}px`:st;return j.jsx("div",{ref:P,className:u,style:{position:"relative",width:ut(f,"100%"),height:ut(h,"100%"),overflow:"hidden",...d},children:j.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${N} ${I}`,width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet",style:{display:"block",width:"100%",height:"100%"},children:[j.jsx("defs",{children:j.jsx("path",{ref:v,id:R,d:Yt,fill:"none"})}),j.jsx("text",{ref:A,x:0,y:-9999,style:{fontSize:p,letterSpacing:S,fontFamily:_,fontWeight:b,fontStyle:T,visibility:"hidden",pointerEvents:"none"},children:lt.repeat(2)}),j.jsx("text",{ref:D,x:0,y:-9999,style:{fontSize:p,letterSpacing:S,fontFamily:_,fontWeight:b,fontStyle:T,visibility:"hidden",pointerEvents:"none"},children:lt.repeat(4)}),j.jsx("text",{fill:r,style:{fontSize:p,letterSpacing:S,fontFamily:_,fontWeight:b,fontStyle:T},children:j.jsx("textPath",{ref:J,href:`#${R}`,xlinkHref:`#${R}`,children:Fe})})]})})}const by={text:"TEXT PATH",separator:"   •   ",gap:0,textFont:{fontSize:17,variant:"Regular",letterSpacing:0,lineHeight:1.2},textColor:"#FFFFFF",speed:30,reversed:!0,waveFrequency:3,waveHeight:100,className:"",width:800,height:200};function $r(n){return Math.sin(n*12.9898)*43758.5453%1}function Ay(n,t){const e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,o=$r(e+i*57),a=$r(e+1+i*57),l=$r(e+(i+1)*57),c=$r(e+1+(i+1)*57),u=s*s*(3-2*s),f=r*r*(3-2*r);return o*(1-u)*(1-f)+a*u*(1-f)+l*(1-u)*f+c*u*f}function lf(n,t,e,i,s,r,o,a,l){let c=0,u=s,f=r;for(let h=0;h<t;h++){let d=u;h===0&&(d*=l),c+=d*Ay(f*n+a*100,o*f*.3),f*=e,u*=i}return c}function Kr(n,t,e,i,s,r){const o=i+r*s;return{x:n+e*Math.cos(o),y:t+e*Math.sin(o)}}function wy(n,t,e,i,s,r){const o=i-2*r,a=s-2*r,l=Math.PI*r/2,c=2*o+2*a+4*l,u=n*c;let f=0;if(u<=f+o){const d=(u-f)/o;return{x:t+r+d*o,y:e}}if(f+=o,u<=f+l){const d=(u-f)/l;return Kr(t+i-r,e+r,r,-Math.PI/2,Math.PI/2,d)}if(f+=l,u<=f+a){const d=(u-f)/a;return{x:t+i,y:e+r+d*a}}if(f+=a,u<=f+l){const d=(u-f)/l;return Kr(t+i-r,e+s-r,r,0,Math.PI/2,d)}if(f+=l,u<=f+o){const d=(u-f)/o;return{x:t+i-r-d*o,y:e+s}}if(f+=o,u<=f+l){const d=(u-f)/l;return Kr(t+r,e+s-r,r,Math.PI/2,Math.PI/2,d)}if(f+=l,u<=f+a){const d=(u-f)/a;return{x:t,y:e+s-r-d*a}}f+=a;const h=(u-f)/l;return Kr(t+r,e+r,r,Math.PI,Math.PI/2,h)}function Ry({color:n="#C2613F",bgColor:t="transparent",speed:e=1,chaos:i=4,thickness:s=2,borderRadius:r=14,glow:o=!0,glowColor:a="#C2613F",glowIntensity:l=8,className:c,style:u,children:f}){const h=et.useRef(null),d=et.useRef(null),g=et.useRef(null),y=et.useRef(0),m=et.useRef(0);return et.useEffect(()=>{if(typeof window>"u")return;const p=h.current,S=d.current;if(!p||!S)return;const M=p.getContext("2d");if(!M)return;const _=10,b=1.6,T=.7,P=i/20,v=10,A=0,D=40,w=Math.max(1,Math.min(10,l)),L=o?6+w*2:0,G=o?w:0,B=120;let R=0,N=0,I=Math.min(window.devicePixelRatio||1,2);function k(it,lt){const wt=S.getBoundingClientRect(),Ut=Math.max(1,it??wt.width),bt=Math.max(1,lt??wt.height),Z=Ut+B*2,tt=bt+B*2,nt=Math.min(window.devicePixelRatio||1,2);p.width=Math.max(1,Math.floor(Z*nt)),p.height=Math.max(1,Math.floor(tt*nt)),p.style.width=`${Z}px`,p.style.height=`${tt}px`,p.style.left=`${-B}px`,p.style.top=`${-B}px`,R=Ut,N=bt}k();function $(it){const lt=Math.min(window.devicePixelRatio||1,2);lt!==I&&(I=lt,k()),m.current||(m.current=it);const wt=(it-m.current)/1e3;y.current+=wt*e,m.current=it,M.setTransform(1,0,0,1,0,0),M.clearRect(0,0,p.width,p.height),M.scale(lt,lt),M.lineCap="round",M.lineJoin="round";const Ut=B,bt=B,Z=R,tt=N,nt=Math.min(Z,tt)/2,ot=Math.min(r,Math.max(0,nt)),ht=2*(Z+tt)+2*Math.PI*ot,vt=Math.max(16,Math.floor(ht/2));M.beginPath();for(let Nt=0;Nt<=vt;Nt++){const Et=Nt/vt,Ot=wy(Et,Ut,bt,Z,tt,ot),zt=lf(Et*8,_,b,T,P,v,y.current,0,A),Ft=lf(Et*8,_,b,T,P,v,y.current,1,A),Yt=Ot.x+zt*D,$t=Ot.y+Ft*D;Nt===0?M.moveTo(Yt,$t):M.lineTo(Yt,$t)}if(M.closePath(),L>0){M.lineWidth=1,M.strokeStyle=a,M.shadowColor=a,M.shadowBlur=L;for(let Nt=0;Nt<G;Nt++)M.stroke();M.shadowBlur=0}M.lineWidth=s,M.strokeStyle=n,M.stroke(),g.current=requestAnimationFrame($)}g.current=requestAnimationFrame($);const rt=typeof ResizeObserver<"u"?new ResizeObserver(it=>{var wt;const lt=(wt=it[0])==null?void 0:wt.contentRect;k(lt==null?void 0:lt.width,lt==null?void 0:lt.height)}):null;return rt==null||rt.observe(S),()=>{g.current&&cancelAnimationFrame(g.current),rt==null||rt.disconnect()}},[n,e,i,s,r,o,a,l]),j.jsxs("div",{ref:d,className:c,style:{position:"relative",overflow:"visible",isolation:"isolate",width:"100%",borderRadius:r,background:t,...u},children:[j.jsx("canvas",{ref:h,style:{position:"absolute",display:"block",pointerEvents:"none",zIndex:2}}),j.jsx("div",{style:{position:"relative",zIndex:1},children:f})]})}const Cy="cubic-bezier(0.22, 1, 0.36, 1)";function Py({title:n,href:t,fontSize:e=24,fontWeight:i=700,letterSpacing:s="0em",gap:r=6,textColor:o="#EDE6DD",hoverColor:a="#C2613F",duration:l=.32,className:c,style:u,onClick:f}){const h=et.useRef(null),[d,g]=et.useState("none"),y=P=>{const v=h.current;if(!v)return;const A=v.getBoundingClientRect(),D=P.clientY-A.top;g(D<A.height/2?"top":"bottom")},m=()=>g("none"),p=e*.72,S=(r||0)*3,M=p+S,_={none:-M,top:0,bottom:-2*M},b={margin:0,whiteSpace:"pre",lineHeight:1,height:p,display:"flex",alignItems:"center",overflow:"hidden",fontFamily:"Inter, system-ui, sans-serif",fontSize:e,fontWeight:i,letterSpacing:s},T=j.jsx("span",{ref:h,onMouseEnter:y,onMouseLeave:m,onClick:f,className:c,style:{...u,position:"relative",display:"inline-block",overflow:"hidden",height:p,cursor:"pointer",userSelect:"none"},children:j.jsxs("span",{style:{display:"flex",flexDirection:"column",gap:S,transform:`translateY(${_[d]}px)`,transition:`transform ${l}s ${Cy}`},children:[j.jsx("span",{style:{...b,color:a},children:n}),j.jsx("span",{style:{...b,color:o},children:n}),j.jsx("span",{style:{...b,color:a},children:n})]})});return t?j.jsx("a",{href:t,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:T}):T}const Dy="storyforge-shiny-pill-keyframes";function Ly({text:n,link:t,textColor:e="#EDE6DD",shineColor:i="#C2613F",speed:s=2,className:r,style:o}){const a=(o==null?void 0:o.width)==="100%",l={...o,position:"relative",display:"inline-flex",alignItems:"center",boxSizing:"border-box",...a?{}:{minWidth:"max-content",width:"auto"},whiteSpace:"nowrap"},c={position:"absolute",inset:0,display:"flex",alignItems:"center",whiteSpace:"nowrap",color:i,pointerEvents:"none",WebkitMaskImage:"linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",maskImage:"linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",WebkitMaskSize:"150% auto",maskSize:"150% auto",animation:`storyforgeShinySweep ${s}s ease-in-out infinite`},u=j.jsxs("span",{style:l,className:r,children:[j.jsx("style",{id:Dy,dangerouslySetInnerHTML:{__html:`@keyframes storyforgeShinySweep {
            0% { -webkit-mask-position: 200%; mask-position: 200%; }
            100% { -webkit-mask-position: -100%; mask-position: -100%; }
          }`}}),j.jsx("span",{style:{color:e},children:n}),j.jsx("span",{style:c,"aria-hidden":"true",children:n})]});return t?j.jsx("a",{href:t,style:{textDecoration:"none",display:"inline-flex"},children:u}):u}function Iy({text:n,brightColor:t="#FFFFFF",dimColor:e="rgba(237, 230, 221, 0.22)",maskSize:i=150,intensity:s=10,className:r,style:o}){const l=!z_(),c=et.useRef(null),u=et.useRef(null),f=ji(0),h=ji(0),d=ji(0),g=Math.max(10,Math.min(100,s)),y=V_`radial-gradient(circle ${d}px at ${f}px ${h}px, black, black ${g}%, transparent 100%)`;et.useEffect(()=>{if(!l)return;const S=c.current;if(!S)return;const M=T=>{const P=(u.current??S).getBoundingClientRect();f.set(T.clientX-P.left),h.set(T.clientY-P.top)},_=()=>{d.set(i)},b=()=>{d.set(0)};return S.addEventListener("pointermove",M),S.addEventListener("pointerenter",_),S.addEventListener("pointerleave",b),()=>{S.removeEventListener("pointermove",M),S.removeEventListener("pointerenter",_),S.removeEventListener("pointerleave",b)}},[l,i,f,h,d]),et.useEffect(()=>{if(l)return;const S=u.current,M=(S==null?void 0:S.clientWidth)??720,_=(S==null?void 0:S.clientHeight)??240;f.set(M/2),h.set(_/2),d.set(i)},[l,i,f,h,d]);const m={margin:0,boxSizing:"border-box",width:"100%",fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',whiteSpace:"pre-wrap",wordBreak:"break-word",userSelect:"none"},p={...o,position:"relative",boxSizing:"border-box",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",cursor:l?"none":void 0};return j.jsx("div",{ref:c,style:p,className:r,children:j.jsxs("div",{ref:u,style:{position:"relative",width:"100%"},children:[j.jsx("div",{"aria-label":n,style:{...m,position:"relative",color:e},children:n}),j.jsx(Fs.div,{"aria-hidden":!0,style:{...m,position:"absolute",top:0,left:0,color:t,pointerEvents:"none",WebkitMaskImage:y,maskImage:y,WebkitMaskSize:"100%",maskSize:"100%",WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat"},children:n})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Su="185",Ny=0,cf=1,Uy=2,Ro=1,Fy=2,pr=3,Ui=0,rn=1,ui=2,di=0,Os=1,uf=2,hf=3,ff=4,Oy=5,Xi=100,By=101,Vy=102,zy=103,ky=104,Gy=200,Hy=201,Wy=202,Xy=203,Nl=204,Ul=205,qy=206,Yy=207,$y=208,Ky=209,Zy=210,Jy=211,jy=212,Qy=213,tM=214,Fl=0,Ol=1,Bl=2,Ws=3,Vl=4,zl=5,kl=6,Gl=7,Sm=0,eM=1,nM=2,Jn=0,Em=1,Tm=2,bm=3,Am=4,wm=5,Rm=6,Cm=7,Pm=300,ts=301,Xs=302,Ia=303,Na=304,ma=306,Hl=1e3,fi=1001,Wl=1002,Xe=1003,iM=1004,Zr=1005,Je=1006,Ua=1007,$i=1008,Tn=1009,Dm=1010,Lm=1011,Lr=1012,Eu=1013,Qn=1014,Nn=1015,vi=1016,Tu=1017,bu=1018,Ir=1020,Im=35902,Nm=35899,Um=1021,Fm=1022,Un=1023,xi=1026,Ki=1027,Au=1028,wu=1029,es=1030,Ru=1031,Cu=1033,Co=33776,Po=33777,Do=33778,Lo=33779,Xl=35840,ql=35841,Yl=35842,$l=35843,Kl=36196,Zl=37492,Jl=37496,jl=37488,Ql=37489,Xo=37490,tc=37491,ec=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,uc=37817,hc=37818,fc=37819,dc=37820,pc=37821,mc=36492,gc=36494,vc=36495,xc=36283,_c=36284,qo=36285,yc=36286,sM=3200,df=0,rM=1,Li="",Sn="srgb",Yo="srgb-linear",$o="linear",de="srgb",hs=7680,pf=519,oM=512,aM=513,lM=514,Pu=515,cM=516,uM=517,Du=518,hM=519,mf=35044,gf="300 es",qn=2e3,Ko=2001;function fM(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dM(){const n=Zo("canvas");return n.style.display="block",n}const vf={};function xf(...n){const t="THREE."+n.shift();console.log(t,...n)}function Om(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Gt(...n){n=Om(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function se(...n){n=Om(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Bs(...n){const t=n.join(" ");t in vf||(vf[t]=!0,Gt(...n))}function pM(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const mM={[Fl]:Ol,[Bl]:kl,[Vl]:Gl,[Ws]:zl,[Ol]:Fl,[kl]:Bl,[Gl]:Vl,[zl]:Ws};class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fa=Math.PI/180,Mc=180/Math.PI;function Gr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function gM(n,t){return(n%t+t)%t}function Oa(n,t,e){return(1-e)*n+e*t}function er(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ou=class Ou{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ou.prototype.isVector2=!0;let Vt=Ou;class js{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(f!==y||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*y;m<0&&(h=-h,d=-d,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){const S=Math.acos(m),M=Math.sin(S);p=Math.sin(p*S)/M,a=Math.sin(a*S)/M,l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+y*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+y*a;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bu=class Bu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_f.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_f.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ba.copy(this).projectOnVector(t),this.sub(Ba)}reflect(t){return this.sub(Ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bu.prototype.isVector3=!0;let V=Bu;const Ba=new V,_f=new js,Vu=class Vu{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],y=s[0],m=s[3],p=s[6],S=s[1],M=s[4],_=s[7],b=s[2],T=s[5],P=s[8];return r[0]=o*y+a*S+l*b,r[3]=o*m+a*M+l*T,r[6]=o*p+a*_+l*P,r[1]=c*y+u*S+f*b,r[4]=c*m+u*M+f*T,r[7]=c*p+u*_+f*P,r[2]=h*y+d*S+g*b,r[5]=h*m+d*M+g*T,r[8]=h*p+d*_+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=f*y,t[1]=(s*c-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Va.makeScale(t,e)),this}rotate(t){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Vu.prototype.isMatrix3=!0;let Xt=Vu;const Va=new Xt,yf=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mf=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vM(){const n={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?$o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yo]:{primaries:t,whitePoint:i,transfer:$o,toXYZ:yf,fromXYZ:Mf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:i,transfer:de,toXYZ:yf,fromXYZ:Mf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),n}const ne=vM();function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fs;class xM{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fs===void 0&&(fs=Zo("canvas")),fs.width=t.width,fs.height=t.height;const s=fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=fs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(pi(e[i]/255)*255):e[i]=pi(e[i]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _M=0;class Lu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Gr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(za(s[o].image)):r.push(za(s[o]))}else r=za(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let yM=0;const ka=new V;class je extends os{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,i=fi,s=fi,r=Je,o=$i,a=Un,l=Tn,c=je.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Gr(),this.name="",this.source=new Lu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ka).x}get height(){return this.source.getSize(ka).y}get depth(){return this.source.getSize(ka).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hl:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hl:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Pm;je.DEFAULT_ANISOTROPY=1;const zu=class zu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(d+1)/2,b=(p+1)/2,T=(u+h)/4,P=(f+y)/4,v=(g+m)/4;return M>_&&M>b?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=P/i):_>b?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=v/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=P/r,s=v/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-y)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zu.prototype.isVector4=!0;let Ce=zu;class MM extends os{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new je(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Lu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends MM{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bm extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class SM extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ra=class ra{constructor(t,e,i,s,r,o,a,l,c,u,f,h,d,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,f,h,d,g,y,m)}set(t,e,i,s,r,o,a,l,c,u,f,h,d,g,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ra().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,y=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-y*c,e[9]=-a*l,e[2]=y-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,y=c*f;e[0]=h+y*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=y+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,y=c*f;e[0]=h-y*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,y=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+y,e[1]=l*f,e[5]=y*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=y-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-y*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+y,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(EM,t,TM)}lookAt(t,e,i){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),bi.crossVectors(i,un),bi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),bi.crossVectors(i,un)),bi.normalize(),Jr.crossVectors(un,bi),s[0]=bi.x,s[4]=Jr.x,s[8]=un.x,s[1]=bi.y,s[5]=Jr.y,s[9]=un.y,s[2]=bi.z,s[6]=Jr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],y=i[6],m=i[10],p=i[14],S=i[3],M=i[7],_=i[11],b=i[15],T=s[0],P=s[4],v=s[8],A=s[12],D=s[1],w=s[5],L=s[9],G=s[13],B=s[2],R=s[6],N=s[10],I=s[14],k=s[3],$=s[7],rt=s[11],it=s[15];return r[0]=o*T+a*D+l*B+c*k,r[4]=o*P+a*w+l*R+c*$,r[8]=o*v+a*L+l*N+c*rt,r[12]=o*A+a*G+l*I+c*it,r[1]=u*T+f*D+h*B+d*k,r[5]=u*P+f*w+h*R+d*$,r[9]=u*v+f*L+h*N+d*rt,r[13]=u*A+f*G+h*I+d*it,r[2]=g*T+y*D+m*B+p*k,r[6]=g*P+y*w+m*R+p*$,r[10]=g*v+y*L+m*N+p*rt,r[14]=g*A+y*G+m*I+p*it,r[3]=S*T+M*D+_*B+b*k,r[7]=S*P+M*w+_*R+b*$,r[11]=S*v+M*L+_*N+b*rt,r[15]=S*A+M*G+_*I+b*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15],S=l*d-c*h,M=a*d-c*f,_=a*h-l*f,b=o*d-c*u,T=o*h-l*u,P=o*f-a*u;return e*(y*S-m*M+p*_)-i*(g*S-m*b+p*T)+s*(g*M-y*b+p*P)-r*(g*_-y*T+m*P)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],S=e*a-i*o,M=e*l-s*o,_=e*c-r*o,b=i*l-s*a,T=i*c-r*a,P=s*c-r*l,v=u*y-f*g,A=u*m-h*g,D=u*p-d*g,w=f*m-h*y,L=f*p-d*y,G=h*p-d*m,B=S*G-M*L+_*w+b*D-T*A+P*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/B;return t[0]=(a*G-l*L+c*w)*R,t[1]=(s*L-i*G-r*w)*R,t[2]=(y*P-m*T+p*b)*R,t[3]=(h*T-f*P-d*b)*R,t[4]=(l*D-o*G-c*A)*R,t[5]=(e*G-s*D+r*A)*R,t[6]=(m*_-g*P-p*M)*R,t[7]=(u*P-h*_+d*M)*R,t[8]=(o*L-a*D+c*v)*R,t[9]=(i*D-e*L-r*v)*R,t[10]=(g*T-y*_+p*S)*R,t[11]=(f*_-u*T-d*S)*R,t[12]=(a*A-o*w-l*v)*R,t[13]=(e*w-i*A+s*v)*R,t[14]=(y*M-g*b-m*S)*R,t[15]=(u*b-f*M+h*S)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,y=o*u,m=o*f,p=a*f,S=l*c,M=l*u,_=l*f,b=i.x,T=i.y,P=i.z;return s[0]=(1-(y+p))*b,s[1]=(d+_)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(h+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+M)*P,s[9]=(m-S)*P,s[10]=(1-(h+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ds.set(s[0],s[1],s[2]).length();const a=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Cn.copy(this);const c=1/o,u=1/a,f=1/l;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,e.setFromRotationMatrix(Cn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=qn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ko)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=qn,l=!1){const c=this.elements,u=2/(e-t),f=2/(i-s),h=-(e+t)/(e-t),d=-(i+s)/(i-s);let g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===qn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ko)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ra.prototype.isMatrix4=!0;let Se=ra;const ds=new V,Cn=new Se,EM=new V(0,0,0),TM=new V(1,1,1),bi=new V,Jr=new V,un=new V,Sf=new Se,Ef=new js;class ns{constructor(t=0,e=0,i=0,s=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Sf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class Iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bM=0;const Tf=new V,ps=new js,ii=new Se,jr=new V,nr=new V,AM=new V,wM=new js,bf=new V(1,0,0),Af=new V(0,1,0),wf=new V(0,0,1),Rf={type:"added"},RM={type:"removed"},ms={type:"childadded",child:null},Ga={type:"childremoved",child:null};class pn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new V,e=new ns,i=new js,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Xt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(bf,t)}rotateY(t){return this.rotateOnAxis(Af,t)}rotateZ(t){return this.rotateOnAxis(wf,t)}translateOnAxis(t,e){return Tf.copy(t).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bf,t)}translateY(t){return this.translateOnAxis(Af,t)}translateZ(t){return this.translateOnAxis(wf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?jr.copy(t):jr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(nr,jr,this.up):ii.lookAt(jr,nr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(ii),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rf),ms.child=t,this.dispatchEvent(ms),ms.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(RM),Ga.child=t,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rf),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,AM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,wM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}pn.DEFAULT_UP=new V(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zi extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Wa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=gM(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Sn){function i(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const i=Vm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return ne.workingToColorSpace(Ke.copy(this),t),Math.round(ee(Ke.r*255,0,255))*65536+Math.round(ee(Ke.g*255,0,255))*256+Math.round(ee(Ke.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ke.copy(this),e);const i=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Sn){ne.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,i=Ke.g,s=Ke.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Qr);const i=Oa(Ai.h,Qr.h,e),s=Oa(Ai.s,Qr.s,e),r=Oa(Ai.l,Qr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new jt;jt.NAMES=Vm;class PM extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Pn=new V,si=new V,Xa=new V,ri=new V,gs=new V,vs=new V,Cf=new V,qa=new V,Ya=new V,$a=new V,Ka=new Ce,Za=new Ce,Ja=new Ce;class In{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Pn.subVectors(t,e),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Pn.subVectors(s,e),si.subVectors(i,e),Xa.subVectors(t,e);const o=Pn.dot(Pn),a=Pn.dot(si),l=Pn.dot(Xa),c=si.dot(si),u=si.dot(Xa),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(t,e),Za.fromBufferAttribute(t,i),Ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector(Za,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(t,e,i,s){return Pn.subVectors(i,e),si.subVectors(t,e),Pn.cross(si).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Pn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return In.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return In.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return In.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return In.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return In.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,i),vs.subVectors(r,i),qa.subVectors(t,i);const l=gs.dot(qa),c=vs.dot(qa);if(l<=0&&c<=0)return e.copy(i);Ya.subVectors(t,s);const u=gs.dot(Ya),f=vs.dot(Ya);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(gs,o);$a.subVectors(t,r);const d=gs.dot($a),g=vs.dot($a);if(g>=0&&d<=g)return e.copy(r);const y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(vs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Cf.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Cf,a);const p=1/(m+y+h);return o=y*p,a=h*p,e.copy(i).addScaledVector(gs,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class as{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),eo.subVectors(this.max,ir),xs.subVectors(t.a,ir),_s.subVectors(t.b,ir),ys.subVectors(t.c,ir),wi.subVectors(_s,xs),Ri.subVectors(ys,_s),Bi.subVectors(xs,ys);let e=[0,-wi.z,wi.y,0,-Ri.z,Ri.y,0,-Bi.z,Bi.y,wi.z,0,-wi.x,Ri.z,0,-Ri.x,Bi.z,0,-Bi.x,-wi.y,wi.x,0,-Ri.y,Ri.x,0,-Bi.y,Bi.x,0];return!ja(e,xs,_s,ys,eo)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,xs,_s,ys,eo))?!1:(no.crossVectors(wi,Ri),e=[no.x,no.y,no.z],ja(e,xs,_s,ys,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oi=[new V,new V,new V,new V,new V,new V,new V,new V],Dn=new V,to=new as,xs=new V,_s=new V,ys=new V,wi=new V,Ri=new V,Bi=new V,ir=new V,eo=new V,no=new V,Vi=new V;function ja(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Vi.fromArray(n,r);const a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),u=i.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Oe=new V,io=new Vt;let DM=0;class Fn extends os{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mf,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=er(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mf&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class zm extends Fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class km extends Fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class nn extends Fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const LM=new as,sr=new V,Qa=new V;class Hr{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):LM.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Qa)),this.expandByPoint(sr.copy(t.center).sub(Qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let IM=0;const yn=new Se,tl=new pn,Ms=new V,hn=new as,rr=new as,Ge=new V;class On extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fM(t)?km:zm)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,i){return yn.makeTranslation(t,e,i),this.applyMatrix4(yn),this}scale(t,e,i){return yn.makeScale(t,e,i),this.applyMatrix4(yn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nn(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(hn.min,rr.min),hn.expandByPoint(Ge),Ge.addVectors(hn.max,rr.max),hn.expandByPoint(Ge)):(hn.expandByPoint(rr.min),hn.expandByPoint(rr.max))}hn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),Ge.add(Ms)),s=Math.max(s,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new V,l[v]=new V;const c=new V,u=new V,f=new V,h=new Vt,d=new Vt,g=new Vt,y=new V,m=new V;function p(v,A,D){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,D),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,D),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(w),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(w),a[v].add(y),a[A].add(y),a[D].add(y),l[v].add(m),l[A].add(m),l[D].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,A=S.length;v<A;++v){const D=S[v],w=D.start,L=D.count;for(let G=w,B=w+L;G<B;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const M=new V,_=new V,b=new V,T=new V;function P(v){b.fromBufferAttribute(s,v),T.copy(b);const A=a[v];M.copy(A),M.sub(b.multiplyScalar(b.dot(A))).normalize(),_.crossVectors(T,A);const w=_.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,w)}for(let v=0,A=S.length;v<A;++v){const D=S[v],w=D.start,L=D.count;for(let G=w,B=w+L;G<B;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Fn(h,u,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new On,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let NM=0;class ga extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=Os,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ul,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ul&&(i.blendDst=this.blendDst),this.blendEquation!==Xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Vt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ai=new V,el=new V,so=new V,Ci=new V,nl=new V,ro=new V,il=new V;class Gm{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){el.copy(t).add(e).multiplyScalar(.5),so.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(el);const r=t.distanceTo(e)*.5,o=-this.direction.dot(so),a=Ci.dot(this.direction),l=-Ci.dot(so),c=Ci.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const y=1/u;f*=y,h*=y,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(el).addScaledVector(so,h),d}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,s,r){nl.subVectors(e,t),ro.subVectors(i,t),il.crossVectors(nl,ro);let o=this.direction.dot(il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const l=a*this.direction.dot(ro.crossVectors(Ci,ro));if(l<0)return null;const c=a*this.direction.dot(nl.cross(Ci));if(c<0||l+c>o)return null;const u=-a*Ci.dot(il);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ci extends ga{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Sm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pf=new Se,zi=new Gm,oo=new Hr,Df=new V,ao=new V,lo=new V,co=new V,sl=new V,uo=new V,Lf=new V,ho=new V;class We extends pn{constructor(t=new On,e=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(sl.fromBufferAttribute(f,t),o?uo.addScaledVector(sl,u):uo.addScaledVector(sl.sub(e),u))}e.add(uo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(oo.containsPoint(zi.origin)===!1&&(zi.intersectSphere(oo,Df)===null||zi.origin.distanceToSquared(Df)>(t.far-t.near)**2))&&(Pf.copy(r).invert(),zi.copy(t.ray).applyMatrix4(Pf),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,b=M;_<b;_+=3){const T=a.getX(_),P=a.getX(_+1),v=a.getX(_+2);s=fo(this,p,t,i,c,u,f,T,P,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const S=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=fo(this,o,t,i,c,u,f,S,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,b=M;_<b;_+=3){const T=_,P=_+1,v=_+2;s=fo(this,p,t,i,c,u,f,T,P,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const S=m,M=m+1,_=m+2;s=fo(this,o,t,i,c,u,f,S,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function UM(n,t,e,i,s,r,o,a){let l;if(t.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ui,a),l===null)return null;ho.copy(a),ho.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ho);return c<e.near||c>e.far?null:{distance:c,point:ho.clone(),object:n}}function fo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ao),n.getVertexPosition(l,lo),n.getVertexPosition(c,co);const u=UM(n,t,e,i,ao,lo,co,Lf);if(u){const f=new V;In.getBarycoord(Lf,ao,lo,co,f),s&&(u.uv=In.getInterpolatedAttribute(s,a,l,c,f,new Vt)),r&&(u.uv1=In.getInterpolatedAttribute(r,a,l,c,f,new Vt)),o&&(u.normal=In.getInterpolatedAttribute(o,a,l,c,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new V,materialIndex:0};In.getNormal(ao,lo,co,h.normal),u.face=h,u.barycoord=f}return u}class Hm extends je{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Xe,u=Xe,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class If extends Fn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ss=new Se,Nf=new Se,po=[],Uf=new as,FM=new Se,or=new We,ar=new Hr;class OM extends We{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new If(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,FM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new as),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ss),Uf.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Uf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ss),ar.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(i),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),Nf.multiplyMatrices(i,Ss),or.matrixWorld=Nf,or.raycast(t,po);for(let o=0,a=po.length;o<a;o++){const l=po[o];l.instanceId=r,l.object=this,e.push(l)}po.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new If(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hm(new Float32Array(s*this.count),s,this.count,Au,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rl=new V,BM=new V,VM=new Xt;class Wi{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=rl.subVectors(i,e).cross(BM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(rl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||VM.getNormalMatrix(t),s=this.coplanarPoint(rl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Hr,zM=new Vt(.5,.5),mo=new V;class Wm{constructor(t=new Wi,e=new Wi,i=new Wi,s=new Wi,r=new Wi,o=new Wi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=qn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],M=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,d-u,p-g,b-S).normalize(),s[1].setComponents(c+o,d+u,p+g,b+S).normalize(),s[2].setComponents(c+a,d+f,p+y,b+M).normalize(),s[3].setComponents(c-a,d-f,p-y,b-M).normalize(),i)s[4].setComponents(l,h,m,_).normalize(),s[5].setComponents(c-l,d-h,p-m,b-_).normalize();else if(s[4].setComponents(c-l,d-h,p-m,b-_).normalize(),e===qn)s[5].setComponents(c+l,d+h,p+m,b+_).normalize();else if(e===Ko)s[5].setComponents(l,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);const e=zM.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(mo.x=s.normal.x>0?t.max.x:t.min.x,mo.y=s.normal.y>0?t.max.y:t.min.y,mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xm extends je{constructor(t=[],e=ts,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kM extends je{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qs extends je{constructor(t,e,i=Qn,s,r,o,a=Xe,l=Xe,c,u=xi,f=1){if(u!==xi&&u!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class GM extends qs{constructor(t,e=Qn,i=ts,s,r,o=Xe,a=Xe,l,c=xi){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class qm extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wr extends On{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(f,2));function g(y,m,p,S,M,_,b,T,P,v,A){const D=_/P,w=b/v,L=_/2,G=b/2,B=T/2,R=P+1,N=v+1;let I=0,k=0;const $=new V;for(let rt=0;rt<N;rt++){const it=rt*w-G;for(let lt=0;lt<R;lt++){const wt=lt*D-L;$[y]=wt*S,$[m]=it*M,$[p]=B,c.push($.x,$.y,$.z),$[y]=0,$[m]=0,$[p]=T>0?1:-1,u.push($.x,$.y,$.z),f.push(lt/P),f.push(1-rt/v),I+=1}}for(let rt=0;rt<v;rt++)for(let it=0;it<P;it++){const lt=h+it+R*rt,wt=h+it+R*(rt+1),Ut=h+(it+1)+R*(rt+1),bt=h+(it+1)+R*rt;l.push(lt,wt,bt),l.push(wt,Ut,bt),k+=6}a.addGroup(d,k,A),d+=k,h+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Vt:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new V,s=[],r=[],o=[],a=new V,l=new Se;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ee(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ee(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ym extends yi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Vt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class HM extends Ym{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Ff=new V,Of=new V,ol=new Nu,al=new Nu,ll=new Nu;class mr extends yi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new V){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Of.subVectors(s[0],s[1]).add(s[0]),c=Of);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ff.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ff),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ol.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,y,m),al.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,y,m),ll.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),al.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),ll.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(ol.calc(l),al.calc(l),ll.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bf(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function WM(n,t){const e=1-n;return e*e*t}function XM(n,t){return 2*(1-n)*n*t}function qM(n,t){return n*n*t}function Ar(n,t,e,i){return WM(n,t)+XM(n,e)+qM(n,i)}function YM(n,t){const e=1-n;return e*e*e*t}function $M(n,t){const e=1-n;return 3*e*e*n*t}function KM(n,t){return 3*(1-n)*n*n*t}function ZM(n,t){return n*n*n*t}function wr(n,t,e,i,s){return YM(n,t)+$M(n,e)+KM(n,i)+ZM(n,s)}class JM extends yi{constructor(t=new Vt,e=new Vt,i=new Vt,s=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Vt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(t,s.x,r.x,o.x,a.x),wr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jM extends yi{constructor(t=new V,e=new V,i=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new V){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(t,s.x,r.x,o.x,a.x),wr(t,s.y,r.y,o.y,a.y),wr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class QM extends yi{constructor(t=new Vt,e=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Vt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tS extends yi{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eS extends yi{constructor(t=new Vt,e=new Vt,i=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Vt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ar(t,s.x,r.x,o.x),Ar(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $m extends yi{constructor(t=new V,e=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new V){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ar(t,s.x,r.x,o.x),Ar(t,s.y,r.y,o.y),Ar(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nS extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Vt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Bf(a,l.x,c.x,u.x,f.x),Bf(a,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Vt().fromArray(s))}return this}}var iS=Object.freeze({__proto__:null,ArcCurve:HM,CatmullRomCurve3:mr,CubicBezierCurve:JM,CubicBezierCurve3:jM,EllipseCurve:Ym,LineCurve:QM,LineCurve3:tS,QuadraticBezierCurve:eS,QuadraticBezierCurve3:$m,SplineCurve:nS});class va extends On{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let M=0;M<c;M++){const _=M*f-r;g.push(_,-S,0),y.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const M=S+c*p,_=S+c*(p+1),b=S+1+c*(p+1),T=S+1+c*p;d.push(M,_,T),d.push(_,b,T)}this.setIndex(d),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(y,3)),this.setAttribute("uv",new nn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.width,t.height,t.widthSegments,t.heightSegments)}}class Is extends On{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new V,h=new V,d=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){const S=[],M=p/i,_=o+M*a,b=t*Math.cos(_),T=Math.sqrt(t*t-b*b);let P=0;p===0&&o===0?P=.5/e:p===i&&l===Math.PI&&(P=-.5/e);for(let v=0;v<=e;v++){const A=v/e,D=s+A*r;f.x=-T*Math.cos(D),f.y=b,f.z=T*Math.sin(D),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(A+P,1-M),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const M=u[p][S+1],_=u[p][S],b=u[p+1][S],T=u[p+1][S+1];(p!==0||o>0)&&d.push(M,_,T),(p!==i-1||l<Math.PI)&&d.push(_,b,T)}this.setIndex(d),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(y,3)),this.setAttribute("uv",new nn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ns extends On{constructor(t=new $m(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new V,l=new V,c=new Vt;let u=new V;const f=[],h=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new nn(f,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(d,2));function y(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),S(),p()}function m(M){u=t.getPointAt(M/e,u);const _=o.normals[M],b=o.binormals[M];for(let T=0;T<=s;T++){const P=T/s*Math.PI*2,v=Math.sin(P),A=-Math.cos(P);l.x=A*_.x+v*b.x,l.y=A*_.y+v*b.y,l.z=A*_.z+v*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){const b=(s+1)*(M-1)+(_-1),T=(s+1)*M+(_-1),P=(s+1)*M+_,v=(s+1)*(M-1)+_;g.push(b,T,v),g.push(T,P,v)}}function S(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)c.x=M/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ns(new iS[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Ys(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Vf(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Vf(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function en(n){const t={};for(let e=0;e<n.length;e++){const i=Ys(n[e]);for(const s in i)t[s]=i[s]}return t}function Vf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sS(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Km(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const rS={clone:Ys,merge:en};var oS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends ga{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oS,this.fragmentShader=aS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=sS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Vt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Se().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class lS extends ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cS extends ga{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uS extends ga{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const go=new V,vo=new js,kn=new V;class Zm extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(go,vo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,vo,kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(go,vo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,vo,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new V,zf=new Vt,kf=new Vt;class En extends Zm{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mc*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,zf,kf),e.subVectors(kf,zf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Jm extends Zm{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Es=-90,Ts=1;class hS extends pn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Es,Ts,t,e);s.layers=this.layers,this.add(s);const r=new En(Es,Ts,t,e);r.layers=this.layers,this.add(r);const o=new En(Es,Ts,t,e);o.layers=this.layers,this.add(o);const a=new En(Es,Ts,t,e);a.layers=this.layers,this.add(a);const l=new En(Es,Ts,t,e);l.layers=this.layers,this.add(l);const c=new En(Es,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fS extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Gf=new Se;class dS{constructor(t,e,i=0,s=1/0){this.ray=new Gm(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Iu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gf),this}intersectObject(t,e=!0,i=[]){return Sc(t,this,i,e),i.sort(Hf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Sc(t[s],this,i,e);return i.sort(Hf),i}}function Hf(n,t){return n.distance-t.distance}function Sc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Sc(r[o],t,e,!0)}}const ku=class ku{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};ku.prototype.isMatrix2=!0;let Wf=ku;function Xf(n,t,e,i){const s=pS(i);switch(e){case Um:return n*t;case Au:return n*t/s.components*s.byteLength;case wu:return n*t/s.components*s.byteLength;case es:return n*t*2/s.components*s.byteLength;case Ru:return n*t*2/s.components*s.byteLength;case Fm:return n*t*3/s.components*s.byteLength;case Un:return n*t*4/s.components*s.byteLength;case Cu:return n*t*4/s.components*s.byteLength;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:case $l:return Math.max(n,16)*Math.max(t,8)/4;case Xl:case Yl:return Math.max(n,8)*Math.max(t,8)/2;case Kl:case Zl:case jl:case Ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Jl:case Xo:case tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case mc:case gc:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case xc:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*8;case qo:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pS(n){switch(n){case Tn:case Dm:return{byteLength:1,components:1};case Lr:case Lm:case vi:return{byteLength:2,components:1};case Tu:case bu:return{byteLength:2,components:4};case Qn:case Eu:case Nn:return{byteLength:4,components:1};case Im:case Nm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function mS(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const y=f[d];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var gS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vS=`#ifdef USE_ALPHAHASH
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
#endif`,xS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SS=`#ifdef USE_AOMAP
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
#endif`,ES=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TS=`#ifdef USE_BATCHING
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
#endif`,bS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CS=`#ifdef USE_IRIDESCENCE
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
#endif`,PS=`#ifdef USE_BUMPMAP
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
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,US=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,FS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,BS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,VS=`#define PI 3.141592653589793
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
} // validated`,zS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kS=`vec3 transformedNormal = objectNormal;
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
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",YS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$S=`#ifdef USE_ENVMAP
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
#endif`,KS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
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
#endif`,JS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
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
#endif`,QS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iE=`#ifdef USE_GRADIENTMAP
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
}`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dE=`PhysicalMaterial material;
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
#endif`,pE=`uniform sampler2D dfgLUT;
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
}`,mE=`
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
#endif`,gE=`#if defined( RE_IndirectDiffuse )
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AE=`#if defined( USE_POINTS_UV )
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
#endif`,wE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
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
#endif`,IE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
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
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eT=`float getShadowMask() {
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
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,sT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rT=`#ifdef USE_SKINNING
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
#endif`,oT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uT=`#ifdef USE_TRANSMISSION
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
#endif`,hT=`#ifdef USE_TRANSMISSION
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`#include <common>
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
}`,ET=`#if DEPTH_PACKING == 3200
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
}`,TT=`#define DISTANCE
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
}`,bT=`#define DISTANCE
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`uniform float scale;
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
}`,CT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,DT=`uniform vec3 diffuse;
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
}`,LT=`#define LAMBERT
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
}`,IT=`#define LAMBERT
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
}`,NT=`#define MATCAP
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
}`,UT=`#define MATCAP
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
}`,FT=`#define NORMAL
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
}`,OT=`#define NORMAL
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
}`,BT=`#define PHONG
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
}`,VT=`#define PHONG
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
}`,zT=`#define STANDARD
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
}`,kT=`#define STANDARD
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
}`,GT=`#define TOON
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
}`,HT=`#define TOON
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
}`,WT=`uniform float size;
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
}`,XT=`uniform vec3 diffuse;
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
}`,qT=`#include <common>
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
}`,YT=`uniform vec3 color;
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
}`,$T=`uniform float rotation;
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
}`,KT=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:gS,alphahash_pars_fragment:vS,alphamap_fragment:xS,alphamap_pars_fragment:_S,alphatest_fragment:yS,alphatest_pars_fragment:MS,aomap_fragment:SS,aomap_pars_fragment:ES,batching_pars_vertex:TS,batching_vertex:bS,begin_vertex:AS,beginnormal_vertex:wS,bsdfs:RS,iridescence_fragment:CS,bumpmap_pars_fragment:PS,clipping_planes_fragment:DS,clipping_planes_pars_fragment:LS,clipping_planes_pars_vertex:IS,clipping_planes_vertex:NS,color_fragment:US,color_pars_fragment:FS,color_pars_vertex:OS,color_vertex:BS,common:VS,cube_uv_reflection_fragment:zS,defaultnormal_vertex:kS,displacementmap_pars_vertex:GS,displacementmap_vertex:HS,emissivemap_fragment:WS,emissivemap_pars_fragment:XS,colorspace_fragment:qS,colorspace_pars_fragment:YS,envmap_fragment:$S,envmap_common_pars_fragment:KS,envmap_pars_fragment:ZS,envmap_pars_vertex:JS,envmap_physical_pars_fragment:lE,envmap_vertex:jS,fog_vertex:QS,fog_pars_vertex:tE,fog_fragment:eE,fog_pars_fragment:nE,gradientmap_pars_fragment:iE,lightmap_pars_fragment:sE,lights_lambert_fragment:rE,lights_lambert_pars_fragment:oE,lights_pars_begin:aE,lights_toon_fragment:cE,lights_toon_pars_fragment:uE,lights_phong_fragment:hE,lights_phong_pars_fragment:fE,lights_physical_fragment:dE,lights_physical_pars_fragment:pE,lights_fragment_begin:mE,lights_fragment_maps:gE,lights_fragment_end:vE,lightprobes_pars_fragment:xE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:yE,logdepthbuf_pars_vertex:ME,logdepthbuf_vertex:SE,map_fragment:EE,map_pars_fragment:TE,map_particle_fragment:bE,map_particle_pars_fragment:AE,metalnessmap_fragment:wE,metalnessmap_pars_fragment:RE,morphinstance_vertex:CE,morphcolor_vertex:PE,morphnormal_vertex:DE,morphtarget_pars_vertex:LE,morphtarget_vertex:IE,normal_fragment_begin:NE,normal_fragment_maps:UE,normal_pars_fragment:FE,normal_pars_vertex:OE,normal_vertex:BE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:kE,clearcoat_pars_fragment:GE,iridescence_pars_fragment:HE,opaque_fragment:WE,packing:XE,premultiplied_alpha_fragment:qE,project_vertex:YE,dithering_fragment:$E,dithering_pars_fragment:KE,roughnessmap_fragment:ZE,roughnessmap_pars_fragment:JE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:QE,shadowmap_vertex:tT,shadowmask_pars_fragment:eT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:sT,skinnormal_vertex:rT,specularmap_fragment:oT,specularmap_pars_fragment:aT,tonemapping_fragment:lT,tonemapping_pars_fragment:cT,transmission_fragment:uT,transmission_pars_fragment:hT,uv_pars_fragment:fT,uv_pars_vertex:dT,uv_vertex:pT,worldpos_vertex:mT,background_vert:gT,background_frag:vT,backgroundCube_vert:xT,backgroundCube_frag:_T,cube_vert:yT,cube_frag:MT,depth_vert:ST,depth_frag:ET,distance_vert:TT,distance_frag:bT,equirect_vert:AT,equirect_frag:wT,linedashed_vert:RT,linedashed_frag:CT,meshbasic_vert:PT,meshbasic_frag:DT,meshlambert_vert:LT,meshlambert_frag:IT,meshmatcap_vert:NT,meshmatcap_frag:UT,meshnormal_vert:FT,meshnormal_frag:OT,meshphong_vert:BT,meshphong_frag:VT,meshphysical_vert:zT,meshphysical_frag:kT,meshtoon_vert:GT,meshtoon_frag:HT,points_vert:WT,points_frag:XT,shadow_vert:qT,shadow_frag:YT,sprite_vert:$T,sprite_frag:KT},St={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Hn={basic:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:en([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:en([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new jt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:en([St.points,St.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:en([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:en([St.common,St.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:en([St.sprite,St.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:en([St.common,St.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:en([St.lights,St.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Hn.physical={uniforms:en([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const xo={r:0,b:0,g:0},ZT=new Se,Qm=new Xt;Qm.set(-1,0,0,0,1,0,0,0,1);function JT(n,t,e,i,s,r){const o=new jt(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){const _=S.backgroundBlurriness>0;M=t.get(M,_)}return M}function g(S){let M=!1;const _=d(S);_===null?m(o,a):_&&_.isColor&&(m(_,1),M=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,M){const _=d(M);_&&(_.isCubeTexture||_.mapping===ma)?(c===void 0&&(c=new We(new Wr(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Ys(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qm),c.material.toneMapped=ne.getTransfer(_.colorSpace)!==de,(u!==_||f!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new We(new va(2,2),new ti({name:"BackgroundMaterial",uniforms:Ys(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ne.getTransfer(_.colorSpace)!==de,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,M){S.getRGB(xo,Km(n)),e.buffers.color.setClear(xo.r,xo.g,xo.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:y,dispose:p}}function jT(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(w,L,G,B,R){let N=!1;const I=f(w,B,G,L);r!==I&&(r=I,c(r.object)),N=d(w,B,G,R),N&&g(w,B,G,R),R!==null&&t.update(R,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,_(w,L,G,B),R!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function f(w,L,G,B){const R=B.wireframe===!0;let N=i[L.id];N===void 0&&(N={},i[L.id]=N);const I=w.isInstancedMesh===!0?w.id:0;let k=N[I];k===void 0&&(k={},N[I]=k);let $=k[G.id];$===void 0&&($={},k[G.id]=$);let rt=$[R];return rt===void 0&&(rt=h(l()),$[R]=rt),rt}function h(w){const L=[],G=[],B=[];for(let R=0;R<e;R++)L[R]=0,G[R]=0,B[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:B,object:w,attributes:{},index:null}}function d(w,L,G,B){const R=r.attributes,N=L.attributes;let I=0;const k=G.getAttributes();for(const $ in k)if(k[$].location>=0){const it=R[$];let lt=N[$];if(lt===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(lt=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(lt=w.instanceColor)),it===void 0||it.attribute!==lt||lt&&it.data!==lt.data)return!0;I++}return r.attributesNum!==I||r.index!==B}function g(w,L,G,B){const R={},N=L.attributes;let I=0;const k=G.getAttributes();for(const $ in k)if(k[$].location>=0){let it=N[$];it===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(it=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(it=w.instanceColor));const lt={};lt.attribute=it,it&&it.data&&(lt.data=it.data),R[$]=lt,I++}r.attributes=R,r.attributesNum=I,r.index=B}function y(){const w=r.newAttributes;for(let L=0,G=w.length;L<G;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const G=r.newAttributes,B=r.enabledAttributes,R=r.attributeDivisors;G[w]=1,B[w]===0&&(n.enableVertexAttribArray(w),B[w]=1),R[w]!==L&&(n.vertexAttribDivisor(w,L),R[w]=L)}function S(){const w=r.newAttributes,L=r.enabledAttributes;for(let G=0,B=L.length;G<B;G++)L[G]!==w[G]&&(n.disableVertexAttribArray(G),L[G]=0)}function M(w,L,G,B,R,N,I){I===!0?n.vertexAttribIPointer(w,L,G,R,N):n.vertexAttribPointer(w,L,G,B,R,N)}function _(w,L,G,B){y();const R=B.attributes,N=G.getAttributes(),I=L.defaultAttributeValues;for(const k in N){const $=N[k];if($.location>=0){let rt=R[k];if(rt===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(rt=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(rt=w.instanceColor)),rt!==void 0){const it=rt.normalized,lt=rt.itemSize,wt=t.get(rt);if(wt===void 0)continue;const Ut=wt.buffer,bt=wt.type,Z=wt.bytesPerElement,tt=bt===n.INT||bt===n.UNSIGNED_INT||rt.gpuType===Eu;if(rt.isInterleavedBufferAttribute){const nt=rt.data,ot=nt.stride,ht=rt.offset;if(nt.isInstancedInterleavedBuffer){for(let vt=0;vt<$.locationSize;vt++)p($.location+vt,nt.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let vt=0;vt<$.locationSize;vt++)m($.location+vt);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let vt=0;vt<$.locationSize;vt++)M($.location+vt,lt/$.locationSize,bt,it,ot*Z,(ht+lt/$.locationSize*vt)*Z,tt)}else{if(rt.isInstancedBufferAttribute){for(let nt=0;nt<$.locationSize;nt++)p($.location+nt,rt.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let nt=0;nt<$.locationSize;nt++)m($.location+nt);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let nt=0;nt<$.locationSize;nt++)M($.location+nt,lt/$.locationSize,bt,it,lt*Z,lt/$.locationSize*nt*Z,tt)}}else if(I!==void 0){const it=I[k];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv($.location,it);break;case 3:n.vertexAttrib3fv($.location,it);break;case 4:n.vertexAttrib4fv($.location,it);break;default:n.vertexAttrib1fv($.location,it)}}}}S()}function b(){A();for(const w in i){const L=i[w];for(const G in L){const B=L[G];for(const R in B){const N=B[R];for(const I in N)u(N[I].object),delete N[I];delete B[R]}}delete i[w]}}function T(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const G in L){const B=L[G];for(const R in B){const N=B[R];for(const I in N)u(N[I].object),delete N[I];delete B[R]}}delete i[w.id]}function P(w){for(const L in i){const G=i[L];for(const B in G){const R=G[B];if(R[w.id]===void 0)continue;const N=R[w.id];for(const I in N)u(N[I].object),delete N[I];delete R[w.id]}}}function v(w){for(const L in i){const G=i[L],B=w.isInstancedMesh===!0?w.id:0,R=G[B];if(R!==void 0){for(const N in R){const I=R[N];for(const k in I)u(I[k].object),delete I[k];delete R[N]}delete G[B],Object.keys(G).length===0&&delete i[L]}}}function A(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function QT(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function tb(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Un&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const v=P===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Tn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Nn&&!v)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Gt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:_,maxSamples:b,samples:T}}function eb(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Wi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,M=S*4;let _=p.clippingState||null;l.value=_,_=u(g,h,M,d);for(let b=0;b!==M;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=d+y*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=d;M!==y;++M,_+=4)o.copy(f[M]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const Ii=4,qf=[.125,.215,.35,.446,.526,.582],qi=20,nb=256,lr=new Jm,Yf=new jt;let cl=null,ul=0,hl=0,fl=!1;const ib=new V;class $f{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=ib}=r;cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cl,ul,hl),this._renderer.xr.enabled=fl,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:vi,format:Un,colorSpace:Yo,depthBuffer:!1},s=Kf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sb(r)),this._blurMaterial=ob(r,t,e),this._ggxMaterial=rb(r,t,e)}return s}_compileMaterial(t){const e=new We(new On,t);this._renderer.compile(e,lr)}_sceneToCubeUV(t,e,i,s,r){const l=new En(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Yf),f.toneMapping=Jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new Wr,new ci({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(Yf),p=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const b=this._cubeSize;bs(s,_*b,M>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(y,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ts||t.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,lr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Ii?i-g+Ii:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,bs(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,lr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,bs(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(a,lr)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&se("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*qi-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):qi;m>qi&&Gt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const p=[];let S=0;for(let P=0;P<qi;++P){const v=P/y,A=Math.exp(-v*v/2);p.push(A),P===0?S+=A:P<m&&(S+=2*A)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const _=this._sizeLods[s],b=3*_*(s>M-Ii?s-M+Ii:0),T=4*(this._cubeSize-_);bs(e,b,T,3*_,2*_),l.setRenderTarget(e),l.render(f,lr)}}function sb(n){const t=[],e=[],i=[];let s=n;const r=n-Ii+1+qf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ii?l=qf[o-n+Ii-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,y=3,m=2,p=1,S=new Float32Array(y*g*d),M=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let T=0;T<d;T++){const P=T%3*2/3-1,v=T>2?0:-1,A=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];S.set(A,y*g*T),M.set(h,m*g*T);const D=[T,T,T,T,T,T];_.set(D,p*g*T)}const b=new On;b.setAttribute("position",new Fn(S,y)),b.setAttribute("uv",new Fn(M,m)),b.setAttribute("faceIndex",new Fn(_,p)),i.push(new We(b,null)),s>Ii&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Kf(n,t,e){const i=new jn(n,t,e);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function rb(n,t,e){return new ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ob(n,t,e){const i=new Float32Array(qi),s=new V(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xa(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Zf(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Jf(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}class tg extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Xm(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wr(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:di});r.uniforms.tEquirect.value=e;const o=new We(s,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=Je),new hS(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function ab(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ia||d===Na)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const y=new tg(g.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,g=d===Ia||d===Na,y=d===ts||d===Xs;if(g||y){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new $f(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new $f(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Ia?h.mapping=ts:d===Na&&(h.mapping=Xs),h}function l(h){let d=0;const g=6;for(let y=0;y<g;y++)h[y]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function lb(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Bs("WebGLRenderer: "+i+" extension not supported."),s}}}function cb(n,t,e,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let y=0;if(g===void 0)return;if(d!==null){const S=d.array;y=d.version;for(let M=0,_=S.length;M<_;M+=3){const b=S[M+0],T=S[M+1],P=S[M+2];h.push(b,T,T,P,P,b)}}else{const S=g.array;y=g.version;for(let M=0,_=S.length/3-1;M<_;M+=3){const b=M+0,T=M+1,P=M+2;h.push(b,T,T,P,P,b)}}const m=new(g.count>=65535?km:zm)(h,1);m.version=y;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ub(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),e.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*o,d),e.update(h,i,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let y=0;for(let m=0;m<d;m++)y+=h[m];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function hb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function fb(n,t,e){const i=new WeakMap,s=new Ce;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let A=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let _=a.attributes.position.count*M,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const T=new Float32Array(_*b*4*f),P=new Bm(T,_,b,f);P.type=Nn,P.needsUpdate=!0;const v=M*4;for(let D=0;D<f;D++){const w=m[D],L=p[D],G=S[D],B=_*b*4*D;for(let R=0;R<w.count;R++){const N=R*v;d===!0&&(s.fromBufferAttribute(w,R),T[B+N+0]=s.x,T[B+N+1]=s.y,T[B+N+2]=s.z,T[B+N+3]=0),g===!0&&(s.fromBufferAttribute(L,R),T[B+N+4]=s.x,T[B+N+5]=s.y,T[B+N+6]=s.z,T[B+N+7]=0),y===!0&&(s.fromBufferAttribute(G,R),T[B+N+8]=s.x,T[B+N+9]=s.y,T[B+N+10]=s.z,T[B+N+11]=G.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new Vt(_,b)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function db(n,t,e,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const pb={[Em]:"LINEAR_TONE_MAPPING",[Tm]:"REINHARD_TONE_MAPPING",[bm]:"CINEON_TONE_MAPPING",[Am]:"ACES_FILMIC_TONE_MAPPING",[Rm]:"AGX_TONE_MAPPING",[Cm]:"NEUTRAL_TONE_MAPPING",[wm]:"CUSTOM_TONE_MAPPING"};function mb(n,t,e,i,s,r){const o=new jn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new qs(t,e):void 0}),a=new jn(t,e,{type:vi,depthBuffer:!1,stencilBuffer:!1}),l=new On;l.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new nn([0,2,0,0,2,0],2));const c=new lS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new We(l,c),f=new Jm(-1,1,1,-1,0,1);let h=null,d=null,g=!1,y,m=null,p=[],S=!1;this.setSize=function(M,_){o.setSize(M,_),a.setSize(M,_);for(let b=0;b<p.length;b++){const T=p[b];T.setSize&&T.setSize(M,_)}},this.setEffects=function(M){p=M,S=p.length>0&&p[0].isRenderPass===!0;const _=o.width,b=o.height;for(let T=0;T<p.length;T++){const P=p[T];P.setSize&&P.setSize(_,b)}},this.begin=function(M,_){if(g||M.toneMapping===Jn&&p.length===0)return!1;if(m=_,_!==null){const b=_.width,T=_.height;(o.width!==b||o.height!==T)&&this.setSize(b,T)}return S===!1&&M.setRenderTarget(o),y=M.toneMapping,M.toneMapping=Jn,!0},this.hasRenderPass=function(){return S},this.end=function(M,_){M.toneMapping=y,g=!0;let b=o,T=a;for(let P=0;P<p.length;P++){const v=p[P];if(v.enabled!==!1&&(v.render(M,T,b,_),v.needsSwap!==!1)){const A=b;b=T,T=A}}if(h!==M.outputColorSpace||d!==M.toneMapping){h=M.outputColorSpace,d=M.toneMapping,c.defines={},ne.getTransfer(h)===de&&(c.defines.SRGB_TRANSFER="");const P=pb[d];P&&(c.defines[P]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(m),M.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const eg=new je,Ec=new qs(1,1),ng=new Bm,ig=new SM,sg=new Xm,jf=[],Qf=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function Qs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=jf[s];if(r===void 0&&(r=new Float32Array(s),jf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _a(n,t){let e=Qf[t];e===void 0&&(e=new Int32Array(t),Qf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function gb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function vb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function xb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function _b(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function yb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;nd.set(i),n.uniformMatrix2fv(this.addr,!1,nd),ke(e,i)}}function Mb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;ed.set(i),n.uniformMatrix3fv(this.addr,!1,ed),ke(e,i)}}function Sb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;td.set(i),n.uniformMatrix4fv(this.addr,!1,td),ke(e,i)}}function Eb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Tb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function bb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function Ab(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function wb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Rb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function Cb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function Pb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function Db(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ec.compareFunction=e.isReversedDepthBuffer()?Du:Pu,r=Ec):r=eg,e.setTexture2D(t||r,s)}function Lb(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ig,s)}function Ib(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||sg,s)}function Nb(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ng,s)}function Ub(n){switch(n){case 5126:return gb;case 35664:return vb;case 35665:return xb;case 35666:return _b;case 35674:return yb;case 35675:return Mb;case 35676:return Sb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return bb;case 35669:case 35673:return Ab;case 5125:return wb;case 36294:return Rb;case 36295:return Cb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Nb}}function Fb(n,t){n.uniform1fv(this.addr,t)}function Ob(n,t){const e=Qs(t,this.size,2);n.uniform2fv(this.addr,e)}function Bb(n,t){const e=Qs(t,this.size,3);n.uniform3fv(this.addr,e)}function Vb(n,t){const e=Qs(t,this.size,4);n.uniform4fv(this.addr,e)}function zb(n,t){const e=Qs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function kb(n,t){const e=Qs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Gb(n,t){const e=Qs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Hb(n,t){n.uniform1iv(this.addr,t)}function Wb(n,t){n.uniform2iv(this.addr,t)}function Xb(n,t){n.uniform3iv(this.addr,t)}function qb(n,t){n.uniform4iv(this.addr,t)}function Yb(n,t){n.uniform1uiv(this.addr,t)}function $b(n,t){n.uniform2uiv(this.addr,t)}function Kb(n,t){n.uniform3uiv(this.addr,t)}function Zb(n,t){n.uniform4uiv(this.addr,t)}function Jb(n,t,e){const i=this.cache,s=t.length,r=_a(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ec:o=eg;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function jb(n,t,e){const i=this.cache,s=t.length,r=_a(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ig,r[o])}function Qb(n,t,e){const i=this.cache,s=t.length,r=_a(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sg,r[o])}function tA(n,t,e){const i=this.cache,s=t.length,r=_a(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ng,r[o])}function eA(n){switch(n){case 5126:return Fb;case 35664:return Ob;case 35665:return Bb;case 35666:return Vb;case 35674:return zb;case 35675:return kb;case 35676:return Gb;case 5124:case 35670:return Hb;case 35667:case 35671:return Wb;case 35668:case 35672:return Xb;case 35669:case 35673:return qb;case 5125:return Yb;case 36294:return $b;case 36295:return Kb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return jb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return tA}}class nA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ub(e.type)}}class iA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eA(e.type)}}class sA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function id(n,t){n.seq.push(t),n.map[t.id]=t}function rA(n,t,e){const i=n.name,s=i.length;for(dl.lastIndex=0;;){const r=dl.exec(i),o=dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){id(e,c===void 0?new nA(a,n,t):new iA(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new sA(a),id(e,f)),e=f}}}class Io{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);rA(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function sd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const oA=37297;let aA=0;function lA(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const rd=new Xt;function cA(n){ne._getMatrix(rd,ne.workingColorSpace,n);const t=`mat3( ${rd.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case $o:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function od(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+lA(n.getShaderSource(t),a)}else return r}function uA(n,t){const e=cA(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const hA={[Em]:"Linear",[Tm]:"Reinhard",[bm]:"Cineon",[Am]:"ACESFilmic",[Rm]:"AgX",[Cm]:"Neutral",[wm]:"Custom"};function fA(n,t){const e=hA[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _o=new V;function dA(){ne.getLuminanceCoefficients(_o);const n=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function mA(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gA(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function gr(n){return n!==""}function ad(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ld(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(n){return n.replace(vA,_A)}const xA=new Map;function _A(n,t){let e=Jt[t];if(e===void 0){const i=xA.get(t);if(i!==void 0)e=Jt[i],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Tc(e)}const yA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(n){return n.replace(yA,MA)}function MA(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const SA={[Ro]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function EA(n){return SA[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TA={[ts]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function bA(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":TA[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const AA={[Xs]:"ENVMAP_MODE_REFRACTION"};function wA(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":AA[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RA={[Sm]:"ENVMAP_BLENDING_MULTIPLY",[eM]:"ENVMAP_BLENDING_MIX",[nM]:"ENVMAP_BLENDING_ADD"};function CA(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":RA[n.combine]||"ENVMAP_BLENDING_NONE"}function PA(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function DA(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=EA(e),c=bA(e),u=wA(e),f=CA(e),h=PA(e),d=pA(e),g=mA(r),y=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),p.length>0&&(p+=`
`)):(m=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),p=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?fA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,uA("linearToOutputTexel",e.outputColorSpace),dA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),o=Tc(o),o=ad(o,e),o=ld(o,e),a=Tc(a),a=ad(a,e),a=ld(a,e),o=cd(o),a=cd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+o,_=S+p+a,b=sd(s,s.VERTEX_SHADER,M),T=sd(s,s.FRAGMENT_SHADER,_);s.attachShader(y,b),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(w){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(b)||"",B=s.getShaderInfoLog(T)||"",R=L.trim(),N=G.trim(),I=B.trim();let k=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,b,T);else{const rt=od(s,b,"vertex"),it=od(s,T,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+R+`
`+rt+`
`+it)}else R!==""?Gt("WebGLProgram: Program Info Log:",R):(N===""||I==="")&&($=!1);$&&(w.diagnostics={runnable:k,programLog:R,vertexShader:{log:N,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(b),s.deleteShader(T),v=new Io(s,y),A=gA(s,y)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,oA)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=aA++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=T,this}let LA=0;class IA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new NA(t),e.set(t,i)),i}}class NA{constructor(t){this.id=LA++,this.code=t,this.usedTimes=0}}function UA(n){return n===es||n===Xo||n===qo}function FA(n,t,e,i,s,r){const o=new Iu,a=new IA,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,A,D,w,L,G){const B=w.fog,R=L.geometry,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,I=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=t.get(v.envMap||N,I),$=k&&k.mapping===ma?k.image.height:null,rt=d[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Gt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const it=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,lt=it!==void 0?it.length:0;let wt=0;R.morphAttributes.position!==void 0&&(wt=1),R.morphAttributes.normal!==void 0&&(wt=2),R.morphAttributes.color!==void 0&&(wt=3);let Ut,bt,Z,tt;if(rt){const Ct=Hn[rt];Ut=Ct.vertexShader,bt=Ct.fragmentShader}else{Ut=v.vertexShader,bt=v.fragmentShader;const Ct=a.getVertexShaderStage(v),Ee=a.getFragmentShaderStage(v);a.update(v,Ct,Ee),Z=Ct.id,tt=Ee.id}const nt=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),ht=L.isInstancedMesh===!0,vt=L.isBatchedMesh===!0,Nt=!!v.map,Et=!!v.matcap,Ot=!!k,zt=!!v.aoMap,Ft=!!v.lightMap,Yt=!!v.bumpMap&&v.wireframe===!1,$t=!!v.normalMap,ce=!!v.displacementMap,ue=!!v.emissiveMap,ie=!!v.metalnessMap,re=!!v.roughnessMap,U=v.anisotropy>0,Fe=v.clearcoat>0,qt=v.dispersion>0,C=v.iridescence>0,x=v.sheen>0,z=v.transmission>0,W=U&&!!v.anisotropyMap,J=Fe&&!!v.clearcoatMap,ut=Fe&&!!v.clearcoatNormalMap,st=Fe&&!!v.clearcoatRoughnessMap,q=C&&!!v.iridescenceMap,K=C&&!!v.iridescenceThicknessMap,ct=x&&!!v.sheenColorMap,mt=x&&!!v.sheenRoughnessMap,ft=!!v.specularMap,dt=!!v.specularColorMap,Pt=!!v.specularIntensityMap,Dt=z&&!!v.transmissionMap,kt=z&&!!v.thicknessMap,F=!!v.gradientMap,gt=!!v.alphaMap,Q=v.alphaTest>0,_t=!!v.alphaHash,yt=!!v.extensions;let at=Jn;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(at=n.toneMapping);const Lt={shaderID:rt,shaderType:v.type,shaderName:v.name,vertexShader:Ut,fragmentShader:bt,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:tt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:vt,batchingColor:vt&&L._colorsTexture!==null,instancing:ht,instancingColor:ht&&L.instanceColor!==null,instancingMorph:ht&&L.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Nt,matcap:Et,envMap:Ot,envMapMode:Ot&&k.mapping,envMapCubeUVHeight:$,aoMap:zt,lightMap:Ft,bumpMap:Yt,normalMap:$t,displacementMap:ce,emissiveMap:ue,normalMapObjectSpace:$t&&v.normalMapType===rM,normalMapTangentSpace:$t&&v.normalMapType===df,packedNormalMap:$t&&v.normalMapType===df&&UA(v.normalMap.format),metalnessMap:ie,roughnessMap:re,anisotropy:U,anisotropyMap:W,clearcoat:Fe,clearcoatMap:J,clearcoatNormalMap:ut,clearcoatRoughnessMap:st,dispersion:qt,iridescence:C,iridescenceMap:q,iridescenceThicknessMap:K,sheen:x,sheenColorMap:ct,sheenRoughnessMap:mt,specularMap:ft,specularColorMap:dt,specularIntensityMap:Pt,transmission:z,transmissionMap:Dt,thicknessMap:kt,gradientMap:F,opaque:v.transparent===!1&&v.blending===Os&&v.alphaToCoverage===!1,alphaMap:gt,alphaTest:Q,alphaHash:_t,combine:v.combine,mapUv:Nt&&g(v.map.channel),aoMapUv:zt&&g(v.aoMap.channel),lightMapUv:Ft&&g(v.lightMap.channel),bumpMapUv:Yt&&g(v.bumpMap.channel),normalMapUv:$t&&g(v.normalMap.channel),displacementMapUv:ce&&g(v.displacementMap.channel),emissiveMapUv:ue&&g(v.emissiveMap.channel),metalnessMapUv:ie&&g(v.metalnessMap.channel),roughnessMapUv:re&&g(v.roughnessMap.channel),anisotropyMapUv:W&&g(v.anisotropyMap.channel),clearcoatMapUv:J&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(v.sheenRoughnessMap.channel),specularMapUv:ft&&g(v.specularMap.channel),specularColorMapUv:dt&&g(v.specularColorMap.channel),specularIntensityMapUv:Pt&&g(v.specularIntensityMap.channel),transmissionMapUv:Dt&&g(v.transmissionMap.channel),thicknessMapUv:kt&&g(v.thicknessMap.channel),alphaMapUv:gt&&g(v.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&($t||U),vertexNormals:!!R.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(Nt||gt),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||R.attributes.normal===void 0&&$t===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ot,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:wt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:Nt&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===de,decodeVideoTextureEmissive:ue&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===de,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ui,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)A.push(D),A.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(p(A,v),S(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function S(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){const A=d[v.type];let D;if(A){const w=Hn[A];D=rS.clone(w.uniforms)}else D=v.uniforms;return D}function _(v,A){let D=u.get(A);return D!==void 0?++D.usedTimes:(D=new DA(n,A,v,s),c.push(D),u.set(A,D)),D}function b(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function P(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:_,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:P}}function OA(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function BA(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function hd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function fd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,y,m,p){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[t]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=o(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function l(h,d,g,y,m,p){const S=a(h,d,g,y,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):e.push(S)}function c(h,d,g,y,m,p){const S=a(h,d,g,y,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,d,g){e.length>1&&e.sort(h||BA),i.length>1&&i.sort(d||hd),s.length>1&&s.sort(d||hd),g&&(e.reverse(),i.reverse(),s.reverse())}function f(){for(let h=t,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function VA(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new fd,n.set(i,[o])):s>=r.length?(o=new fd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function zA(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new jt};break;case"SpotLight":e={position:new V,direction:new V,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function kA(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let GA=0;function HA(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function WA(n){const t=new zA,e=kA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new Se,o=new Se;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,S=0,M=0,_=0,b=0,T=0,P=0;c.sort(HA);for(let A=0,D=c.length;A<D;A++){const w=c[A],L=w.color,G=w.intensity,B=w.distance;let R=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===es?R=w.shadow.map.texture:R=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=L.r*G,f+=L.g*G,h+=L.b*G;else if(w.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(w.sh.coefficients[N],G);P++}else if(w.isDirectionalLight){const N=t.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const I=w.shadow,k=e.get(w);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=R,i.directionalShadowMatrix[d]=w.shadow.matrix,S++}i.directional[d]=N,d++}else if(w.isSpotLight){const N=t.get(w);N.position.setFromMatrixPosition(w.matrixWorld),N.color.copy(L).multiplyScalar(G),N.distance=B,N.coneCos=Math.cos(w.angle),N.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),N.decay=w.decay,i.spot[y]=N;const I=w.shadow;if(w.map&&(i.spotLightMap[b]=w.map,b++,I.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[y]=I.matrix,w.castShadow){const k=e.get(w);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,i.spotShadow[y]=k,i.spotShadowMap[y]=R,_++}y++}else if(w.isRectAreaLight){const N=t.get(w);N.color.copy(L).multiplyScalar(G),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=N,m++}else if(w.isPointLight){const N=t.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),N.distance=w.distance,N.decay=w.decay,w.castShadow){const I=w.shadow,k=e.get(w);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,k.shadowCameraNear=I.camera.near,k.shadowCameraFar=I.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=R,i.pointShadowMatrix[g]=w.shadow.matrix,M++}i.point[g]=N,g++}else if(w.isHemisphereLight){const N=t.get(w);N.skyColor.copy(w.color).multiplyScalar(G),N.groundColor.copy(w.groundColor).multiplyScalar(G),i.hemi[p]=N,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==d||v.pointLength!==g||v.spotLength!==y||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==S||v.numPointShadows!==M||v.numSpotShadows!==_||v.numSpotMaps!==b||v.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,v.directionalLength=d,v.pointLength=g,v.spotLength=y,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=S,v.numPointShadows=M,v.numSpotShadows=_,v.numSpotMaps=b,v.numLightProbes=P,i.version=GA++)}function l(c,u){let f=0,h=0,d=0,g=0,y=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const M=c[p];if(M.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const _=i.hemi[y];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function dd(n){const t=new WA(n),e=[],i=[],s=[];function r(h){f.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function XA(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new dd(n),t.set(s,[a])):r>=o.length?(a=new dd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const qA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YA=`uniform sampler2D shadow_pass;
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
}`,$A=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],KA=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],pd=new Se,cr=new V,pl=new V;function ZA(n,t,e){let i=new Wm;const s=new Vt,r=new Vt,o=new Ce,a=new cS,l=new uS,c={},u=e.maxTextureSize,f={[Ui]:rn,[rn]:Ui,[ui]:ui},h=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:qA,fragmentShader:YA}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new On;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new We(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let p=this.type;this.render=function(T,P,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Fy&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ro);const A=n.getRenderTarget(),D=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),L=n.state;L.setBlending(di),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const G=p!==this.type;G&&P.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(R=>R.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,R=T.length;B<R;B++){const N=T[B],I=N.shadow;if(I===void 0){Gt("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const k=I.getFrameExtents();s.multiply(k),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,I.mapSize.y=r.y));const $=n.state.buffers.depth.getReversed();if(I.camera._reversedDepth=$,I.map===null||G===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===pr){if(N.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new jn(s.x,s.y,{format:es,type:vi,minFilter:Je,magFilter:Je,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new qs(s.x,s.y,Nn),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=xi,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Xe,I.map.depthTexture.magFilter=Xe}else N.isPointLight?(I.map=new tg(s.x),I.map.depthTexture=new GM(s.x,Qn)):(I.map=new jn(s.x,s.y),I.map.depthTexture=new qs(s.x,s.y,Qn)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=xi,this.type===Ro?(I.map.depthTexture.compareFunction=$?Du:Pu,I.map.depthTexture.minFilter=Je,I.map.depthTexture.magFilter=Je):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Xe,I.map.depthTexture.magFilter=Xe);I.camera.updateProjectionMatrix()}const rt=I.map.isWebGLCubeRenderTarget?6:1;for(let it=0;it<rt;it++){if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,it),n.clear();else{it===0&&(n.setRenderTarget(I.map),n.clear());const lt=I.getViewport(it);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),L.viewport(o)}if(N.isPointLight){const lt=I.camera,wt=I.matrix,Ut=N.distance||lt.far;Ut!==lt.far&&(lt.far=Ut,lt.updateProjectionMatrix()),cr.setFromMatrixPosition(N.matrixWorld),lt.position.copy(cr),pl.copy(lt.position),pl.add($A[it]),lt.up.copy(KA[it]),lt.lookAt(pl),lt.updateMatrixWorld(),wt.makeTranslation(-cr.x,-cr.y,-cr.z),pd.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),I._frustum.setFromProjectionMatrix(pd,lt.coordinateSystem,lt.reversedDepth)}else I.updateMatrices(N);i=I.getFrustum(),_(P,v,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===pr&&S(I,v),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,D,w)};function S(T,P){const v=t.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jn(s.x,s.y,{format:es,type:vi})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,v,h,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,v,d,y,null)}function M(T,P,v,A){let D=null;const w=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)D=w;else if(D=v.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const L=D.uuid,G=P.uuid;let B=c[L];B===void 0&&(B={},c[L]=B);let R=B[G];R===void 0&&(R=D.clone(),B[G]=R,P.addEventListener("dispose",b)),D=R}if(D.visible=P.visible,D.wireframe=P.wireframe,A===pr?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:f[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const L=n.properties.get(D);L.light=v}return D}function _(T,P,v,A,D){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===pr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const G=t.update(T),B=T.material;if(Array.isArray(B)){const R=G.groups;for(let N=0,I=R.length;N<I;N++){const k=R[N],$=B[k.materialIndex];if($&&$.visible){const rt=M(T,$,A,D);T.onBeforeShadow(n,T,P,v,G,rt,k),n.renderBufferDirect(v,null,G,rt,T,k),T.onAfterShadow(n,T,P,v,G,rt,k)}}}else if(B.visible){const R=M(T,B,A,D);T.onBeforeShadow(n,T,P,v,G,R,null),n.renderBufferDirect(v,null,G,R,T,null),T.onAfterShadow(n,T,P,v,G,R,null)}}const L=T.children;for(let G=0,B=L.length;G<B;G++)_(L[G],P,v,A,D)}function b(T){T.target.removeEventListener("dispose",b);for(const v in c){const A=c[v],D=T.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function JA(n,t){function e(){let F=!1;const gt=new Ce;let Q=null;const _t=new Ce(0,0,0,0);return{setMask:function(yt){Q!==yt&&!F&&(n.colorMask(yt,yt,yt,yt),Q=yt)},setLocked:function(yt){F=yt},setClear:function(yt,at,Lt,Ct,Ee){Ee===!0&&(yt*=Ct,at*=Ct,Lt*=Ct),gt.set(yt,at,Lt,Ct),_t.equals(gt)===!1&&(n.clearColor(yt,at,Lt,Ct),_t.copy(gt))},reset:function(){F=!1,Q=null,_t.set(-1,0,0,0)}}}function i(){let F=!1,gt=!1,Q=null,_t=null,yt=null;return{setReversed:function(at){if(gt!==at){const Lt=t.get("EXT_clip_control");at?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),gt=at;const Ct=yt;yt=null,this.setClear(Ct)}},getReversed:function(){return gt},setTest:function(at){at?nt(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(at){Q!==at&&!F&&(n.depthMask(at),Q=at)},setFunc:function(at){if(gt&&(at=mM[at]),_t!==at){switch(at){case Fl:n.depthFunc(n.NEVER);break;case Ol:n.depthFunc(n.ALWAYS);break;case Bl:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Vl:n.depthFunc(n.EQUAL);break;case zl:n.depthFunc(n.GEQUAL);break;case kl:n.depthFunc(n.GREATER);break;case Gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=at}},setLocked:function(at){F=at},setClear:function(at){yt!==at&&(yt=at,gt&&(at=1-at),n.clearDepth(at))},reset:function(){F=!1,Q=null,_t=null,yt=null,gt=!1}}}function s(){let F=!1,gt=null,Q=null,_t=null,yt=null,at=null,Lt=null,Ct=null,Ee=null;return{setTest:function(fe){F||(fe?nt(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(fe){gt!==fe&&!F&&(n.stencilMask(fe),gt=fe)},setFunc:function(fe,Kt,Qt){(Q!==fe||_t!==Kt||yt!==Qt)&&(n.stencilFunc(fe,Kt,Qt),Q=fe,_t=Kt,yt=Qt)},setOp:function(fe,Kt,Qt){(at!==fe||Lt!==Kt||Ct!==Qt)&&(n.stencilOp(fe,Kt,Qt),at=fe,Lt=Kt,Ct=Qt)},setLocked:function(fe){F=fe},setClear:function(fe){Ee!==fe&&(n.clearStencil(fe),Ee=fe)},reset:function(){F=!1,gt=null,Q=null,_t=null,yt=null,at=null,Lt=null,Ct=null,Ee=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],y=null,m=!1,p=null,S=null,M=null,_=null,b=null,T=null,P=null,v=new jt(0,0,0),A=0,D=!1,w=null,L=null,G=null,B=null,R=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,k=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),I=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),I=k>=2);let rt=null,it={};const lt=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),Ut=new Ce().fromArray(lt),bt=new Ce().fromArray(wt);function Z(F,gt,Q,_t){const yt=new Uint8Array(4),at=n.createTexture();n.bindTexture(F,at),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<Q;Lt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(gt+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return at}const tt={};tt[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),tt[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),tt[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(n.DEPTH_TEST),o.setFunc(Ws),Yt(!1),$t(cf),nt(n.CULL_FACE),zt(di);function nt(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ot(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function ht(F,gt){return h[F]!==gt?(n.bindFramebuffer(F,gt),h[F]=gt,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function vt(F,gt){let Q=g,_t=!1;if(F){Q=d.get(gt),Q===void 0&&(Q=[],d.set(gt,Q));const yt=F.textures;if(Q.length!==yt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let at=0,Lt=yt.length;at<Lt;at++)Q[at]=n.COLOR_ATTACHMENT0+at;Q.length=yt.length,_t=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,_t=!0);_t&&n.drawBuffers(Q)}function Nt(F){return y!==F?(n.useProgram(F),y=F,!0):!1}const Et={[Xi]:n.FUNC_ADD,[By]:n.FUNC_SUBTRACT,[Vy]:n.FUNC_REVERSE_SUBTRACT};Et[zy]=n.MIN,Et[ky]=n.MAX;const Ot={[Gy]:n.ZERO,[Hy]:n.ONE,[Wy]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[Zy]:n.SRC_ALPHA_SATURATE,[$y]:n.DST_COLOR,[qy]:n.DST_ALPHA,[Xy]:n.ONE_MINUS_SRC_COLOR,[Ul]:n.ONE_MINUS_SRC_ALPHA,[Ky]:n.ONE_MINUS_DST_COLOR,[Yy]:n.ONE_MINUS_DST_ALPHA,[Jy]:n.CONSTANT_COLOR,[jy]:n.ONE_MINUS_CONSTANT_COLOR,[Qy]:n.CONSTANT_ALPHA,[tM]:n.ONE_MINUS_CONSTANT_ALPHA};function zt(F,gt,Q,_t,yt,at,Lt,Ct,Ee,fe){if(F===di){m===!0&&(ot(n.BLEND),m=!1);return}if(m===!1&&(nt(n.BLEND),m=!0),F!==Oy){if(F!==p||fe!==D){if((S!==Xi||b!==Xi)&&(n.blendEquation(n.FUNC_ADD),S=Xi,b=Xi),fe)switch(F){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uf:n.blendFunc(n.ONE,n.ONE);break;case hf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ff:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:se("WebGLState: Invalid blending: ",F);break}else switch(F){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hf:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ff:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",F);break}M=null,_=null,T=null,P=null,v.set(0,0,0),A=0,p=F,D=fe}return}yt=yt||gt,at=at||Q,Lt=Lt||_t,(gt!==S||yt!==b)&&(n.blendEquationSeparate(Et[gt],Et[yt]),S=gt,b=yt),(Q!==M||_t!==_||at!==T||Lt!==P)&&(n.blendFuncSeparate(Ot[Q],Ot[_t],Ot[at],Ot[Lt]),M=Q,_=_t,T=at,P=Lt),(Ct.equals(v)===!1||Ee!==A)&&(n.blendColor(Ct.r,Ct.g,Ct.b,Ee),v.copy(Ct),A=Ee),p=F,D=!1}function Ft(F,gt){F.side===ui?ot(n.CULL_FACE):nt(n.CULL_FACE);let Q=F.side===rn;gt&&(Q=!Q),Yt(Q),F.blending===Os&&F.transparent===!1?zt(di):zt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const _t=F.stencilWrite;a.setTest(_t),_t&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(F){w!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),w=F)}function $t(F){F!==Ny?(nt(n.CULL_FACE),F!==L&&(F===cf?n.cullFace(n.BACK):F===Uy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),L=F}function ce(F){F!==G&&(I&&n.lineWidth(F),G=F)}function ue(F,gt,Q){F?(nt(n.POLYGON_OFFSET_FILL),(B!==gt||R!==Q)&&(B=gt,R=Q,o.getReversed()&&(gt=-gt),n.polygonOffset(gt,Q))):ot(n.POLYGON_OFFSET_FILL)}function ie(F){F?nt(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function re(F){F===void 0&&(F=n.TEXTURE0+N-1),rt!==F&&(n.activeTexture(F),rt=F)}function U(F,gt,Q){Q===void 0&&(rt===null?Q=n.TEXTURE0+N-1:Q=rt);let _t=it[Q];_t===void 0&&(_t={type:void 0,texture:void 0},it[Q]=_t),(_t.type!==F||_t.texture!==gt)&&(rt!==Q&&(n.activeTexture(Q),rt=Q),n.bindTexture(F,gt||tt[F]),_t.type=F,_t.texture=gt)}function Fe(){const F=it[rt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function qt(){try{n.compressedTexImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function x(){try{n.texSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function z(){try{n.texSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function ut(){try{n.texStorage2D(...arguments)}catch(F){se("WebGLState:",F)}}function st(){try{n.texStorage3D(...arguments)}catch(F){se("WebGLState:",F)}}function q(){try{n.texImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function K(){try{n.texImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function ct(F){return f[F]!==void 0?f[F]:n.getParameter(F)}function mt(F,gt){f[F]!==gt&&(n.pixelStorei(F,gt),f[F]=gt)}function ft(F){Ut.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ut.copy(F))}function dt(F){bt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),bt.copy(F))}function Pt(F,gt){let Q=c.get(gt);Q===void 0&&(Q=new WeakMap,c.set(gt,Q));let _t=Q.get(F);_t===void 0&&(_t=n.getUniformBlockIndex(gt,F.name),Q.set(F,_t))}function Dt(F,gt){const _t=c.get(gt).get(F);l.get(gt)!==_t&&(n.uniformBlockBinding(gt,_t,F.__bindingPointIndex),l.set(gt,_t))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},rt=null,it={},h={},d=new WeakMap,g=[],y=null,m=!1,p=null,S=null,M=null,_=null,b=null,T=null,P=null,v=new jt(0,0,0),A=0,D=!1,w=null,L=null,G=null,B=null,R=null,Ut.set(0,0,n.canvas.width,n.canvas.height),bt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:ot,bindFramebuffer:ht,drawBuffers:vt,useProgram:Nt,setBlending:zt,setMaterial:Ft,setFlipSided:Yt,setCullFace:$t,setLineWidth:ce,setPolygonOffset:ue,setScissorTest:ie,activeTexture:re,bindTexture:U,unbindTexture:Fe,compressedTexImage2D:qt,compressedTexImage3D:C,texImage2D:q,texImage3D:K,pixelStorei:mt,getParameter:ct,updateUBOMapping:Pt,uniformBlockBinding:Dt,texStorage2D:ut,texStorage3D:st,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:ft,viewport:dt,reset:kt}}function jA(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,x){return g?new OffscreenCanvas(C,x):Zo("canvas")}function m(C,x,z){let W=1;const J=qt(C);if((J.width>z||J.height>z)&&(W=z/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ut=Math.floor(W*J.width),st=Math.floor(W*J.height);h===void 0&&(h=y(ut,st));const q=x?y(ut,st):h;return q.width=ut,q.height=st,q.getContext("2d").drawImage(C,0,0,ut,st),Gt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ut+"x"+st+")."),q}else return"data"in C&&Gt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){n.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,x,z,W,J,ut=!1){if(C!==null){if(n[C]!==void 0)return n[C];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let st;W&&(st=t.get("EXT_texture_norm16"),st||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===n.RED&&(z===n.FLOAT&&(q=n.R32F),z===n.HALF_FLOAT&&(q=n.R16F),z===n.UNSIGNED_BYTE&&(q=n.R8),z===n.UNSIGNED_SHORT&&st&&(q=st.R16_EXT),z===n.SHORT&&st&&(q=st.R16_SNORM_EXT)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.R8UI),z===n.UNSIGNED_SHORT&&(q=n.R16UI),z===n.UNSIGNED_INT&&(q=n.R32UI),z===n.BYTE&&(q=n.R8I),z===n.SHORT&&(q=n.R16I),z===n.INT&&(q=n.R32I)),x===n.RG&&(z===n.FLOAT&&(q=n.RG32F),z===n.HALF_FLOAT&&(q=n.RG16F),z===n.UNSIGNED_BYTE&&(q=n.RG8),z===n.UNSIGNED_SHORT&&st&&(q=st.RG16_EXT),z===n.SHORT&&st&&(q=st.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RG8UI),z===n.UNSIGNED_SHORT&&(q=n.RG16UI),z===n.UNSIGNED_INT&&(q=n.RG32UI),z===n.BYTE&&(q=n.RG8I),z===n.SHORT&&(q=n.RG16I),z===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(q=n.RGB16UI),z===n.UNSIGNED_INT&&(q=n.RGB32UI),z===n.BYTE&&(q=n.RGB8I),z===n.SHORT&&(q=n.RGB16I),z===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),z===n.UNSIGNED_INT&&(q=n.RGBA32UI),z===n.BYTE&&(q=n.RGBA8I),z===n.SHORT&&(q=n.RGBA16I),z===n.INT&&(q=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_SHORT&&st&&(q=st.RGB16_EXT),z===n.SHORT&&st&&(q=st.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),x===n.RGBA){const K=ut?$o:ne.getTransfer(J);z===n.FLOAT&&(q=n.RGBA32F),z===n.HALF_FLOAT&&(q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(q=K===de?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&st&&(q=st.RGBA16_EXT),z===n.SHORT&&st&&(q=st.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function b(C,x){let z;return C?x===null||x===Qn||x===Ir?z=n.DEPTH24_STENCIL8:x===Nn?z=n.DEPTH32F_STENCIL8:x===Lr&&(z=n.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Qn||x===Ir?z=n.DEPTH_COMPONENT24:x===Nn?z=n.DEPTH_COMPONENT32F:x===Lr&&(z=n.DEPTH_COMPONENT16),z}function T(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xe&&C.minFilter!==Je?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function P(C){const x=C.target;x.removeEventListener("dispose",P),A(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function v(C){const x=C.target;x.removeEventListener("dispose",v),w(x)}function A(C){const x=i.get(C);if(x.__webglInit===void 0)return;const z=C.source,W=d.get(z);if(W){const J=W[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(C),Object.keys(W).length===0&&d.delete(z)}i.remove(C)}function D(C){const x=i.get(C);n.deleteTexture(x.__webglTexture);const z=C.source,W=d.get(z);delete W[x.__cacheKey],o.memory.textures--}function w(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let J=0;J<x.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[W][J]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=C.textures;for(let W=0,J=z.length;W<J;W++){const ut=i.get(z[W]);ut.__webglTexture&&(n.deleteTexture(ut.__webglTexture),o.memory.textures--),i.remove(z[W])}i.remove(C)}let L=0;function G(){L=0}function B(){return L}function R(C){L=C}function N(){const C=L;return C>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function I(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function k(C,x){const z=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const W=C.image;if(W===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(z,C,x);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function $(C,x){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ot(z,C,x);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function rt(C,x){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ot(z,C,x);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function it(C,x){const z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){ht(z,C,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}const lt={[Hl]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Wl]:n.MIRRORED_REPEAT},wt={[Xe]:n.NEAREST,[iM]:n.NEAREST_MIPMAP_NEAREST,[Zr]:n.NEAREST_MIPMAP_LINEAR,[Je]:n.LINEAR,[Ua]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},Ut={[oM]:n.NEVER,[hM]:n.ALWAYS,[aM]:n.LESS,[Pu]:n.LEQUAL,[lM]:n.EQUAL,[Du]:n.GEQUAL,[cM]:n.GREATER,[uM]:n.NOTEQUAL};function bt(C,x){if(x.type===Nn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Je||x.magFilter===Ua||x.magFilter===Zr||x.magFilter===$i||x.minFilter===Je||x.minFilter===Ua||x.minFilter===Zr||x.minFilter===$i)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,lt[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,lt[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,lt[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,wt[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,wt[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ut[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xe||x.minFilter!==Zr&&x.minFilter!==$i||x.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Z(C,x){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",P));const W=x.source;let J=d.get(W);J===void 0&&(J={},d.set(W,J));const ut=I(x);if(ut!==C.__cacheKey){J[ut]===void 0&&(J[ut]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[ut].usedTimes++;const st=J[C.__cacheKey];st!==void 0&&(J[C.__cacheKey].usedTimes--,st.usedTimes===0&&D(x)),C.__cacheKey=ut,C.__webglTexture=J[ut].texture}return z}function tt(C,x,z){return Math.floor(Math.floor(C/z)/x)}function nt(C,x,z,W){const ut=C.updateRanges;if(ut.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,W,x.data);else{ut.sort((mt,ft)=>mt.start-ft.start);let st=0;for(let mt=1;mt<ut.length;mt++){const ft=ut[st],dt=ut[mt],Pt=ft.start+ft.count,Dt=tt(dt.start,x.width,4),kt=tt(ft.start,x.width,4);dt.start<=Pt+1&&Dt===kt&&tt(dt.start+dt.count-1,x.width,4)===Dt?ft.count=Math.max(ft.count,dt.start+dt.count-ft.start):(++st,ut[st]=dt)}ut.length=st+1;const q=e.getParameter(n.UNPACK_ROW_LENGTH),K=e.getParameter(n.UNPACK_SKIP_PIXELS),ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let mt=0,ft=ut.length;mt<ft;mt++){const dt=ut[mt],Pt=Math.floor(dt.start/4),Dt=Math.ceil(dt.count/4),kt=Pt%x.width,F=Math.floor(Pt/x.width),gt=Dt,Q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,kt,F,gt,Q,z,W,x.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,K),e.pixelStorei(n.UNPACK_SKIP_ROWS,ct)}}function ot(C,x,z){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);const J=Z(C,x),ut=x.source;e.bindTexture(W,C.__webglTexture,n.TEXTURE0+z);const st=i.get(ut);if(ut.version!==st.__version||J===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Q=ne.getPrimaries(ne.workingColorSpace),_t=x.colorSpace===Li?null:ne.getPrimaries(x.colorSpace),yt=x.colorSpace===Li||Q===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let K=m(x.image,!1,s.maxTextureSize);K=Fe(x,K);const ct=r.convert(x.format,x.colorSpace),mt=r.convert(x.type);let ft=_(x.internalFormat,ct,mt,x.normalized,x.colorSpace,x.isVideoTexture);bt(W,x);let dt;const Pt=x.mipmaps,Dt=x.isVideoTexture!==!0,kt=st.__version===void 0||J===!0,F=ut.dataReady,gt=T(x,K);if(x.isDepthTexture)ft=b(x.format===Ki,x.type),kt&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,ft,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,ft,K.width,K.height,0,ct,mt,null));else if(x.isDataTexture)if(Pt.length>0){Dt&&kt&&e.texStorage2D(n.TEXTURE_2D,gt,ft,Pt[0].width,Pt[0].height);for(let Q=0,_t=Pt.length;Q<_t;Q++)dt=Pt[Q],Dt?F&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,dt.width,dt.height,ct,mt,dt.data):e.texImage2D(n.TEXTURE_2D,Q,ft,dt.width,dt.height,0,ct,mt,dt.data);x.generateMipmaps=!1}else Dt?(kt&&e.texStorage2D(n.TEXTURE_2D,gt,ft,K.width,K.height),F&&nt(x,K,ct,mt)):e.texImage2D(n.TEXTURE_2D,0,ft,K.width,K.height,0,ct,mt,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,ft,Pt[0].width,Pt[0].height,K.depth);for(let Q=0,_t=Pt.length;Q<_t;Q++)if(dt=Pt[Q],x.format!==Un)if(ct!==null)if(Dt){if(F)if(x.layerUpdates.size>0){const yt=Xf(dt.width,dt.height,x.format,x.type);for(const at of x.layerUpdates){const Lt=dt.data.subarray(at*yt/dt.data.BYTES_PER_ELEMENT,(at+1)*yt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,at,dt.width,dt.height,1,ct,Lt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,K.depth,ct,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,ft,dt.width,dt.height,K.depth,0,dt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,K.depth,ct,mt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,ft,dt.width,dt.height,K.depth,0,ct,mt,dt.data)}else{Dt&&kt&&e.texStorage2D(n.TEXTURE_2D,gt,ft,Pt[0].width,Pt[0].height);for(let Q=0,_t=Pt.length;Q<_t;Q++)dt=Pt[Q],x.format!==Un?ct!==null?Dt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,dt.width,dt.height,ct,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,ft,dt.width,dt.height,0,dt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?F&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,dt.width,dt.height,ct,mt,dt.data):e.texImage2D(n.TEXTURE_2D,Q,ft,dt.width,dt.height,0,ct,mt,dt.data)}else if(x.isDataArrayTexture)if(Dt){if(kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,ft,K.width,K.height,K.depth),F)if(x.layerUpdates.size>0){const Q=Xf(K.width,K.height,x.format,x.type);for(const _t of x.layerUpdates){const yt=K.data.subarray(_t*Q/K.data.BYTES_PER_ELEMENT,(_t+1)*Q/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,K.width,K.height,1,ct,mt,yt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ct,mt,K.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ft,K.width,K.height,K.depth,0,ct,mt,K.data);else if(x.isData3DTexture)Dt?(kt&&e.texStorage3D(n.TEXTURE_3D,gt,ft,K.width,K.height,K.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ct,mt,K.data)):e.texImage3D(n.TEXTURE_3D,0,ft,K.width,K.height,K.depth,0,ct,mt,K.data);else if(x.isFramebufferTexture){if(kt)if(Dt)e.texStorage2D(n.TEXTURE_2D,gt,ft,K.width,K.height);else{let Q=K.width,_t=K.height;for(let yt=0;yt<gt;yt++)e.texImage2D(n.TEXTURE_2D,yt,ft,Q,_t,0,ct,mt,null),Q>>=1,_t>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),K.parentNode!==Q){Q.appendChild(K),f.add(x),Q.onpaint=_t=>{const yt=_t.changedElements;for(const at of f)yt.includes(at.image)&&(at.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{const yt=n.RGBA,at=n.RGBA,Lt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,yt,at,Lt,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Dt&&kt){const Q=qt(Pt[0]);e.texStorage2D(n.TEXTURE_2D,gt,ft,Q.width,Q.height)}for(let Q=0,_t=Pt.length;Q<_t;Q++)dt=Pt[Q],Dt?F&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ct,mt,dt):e.texImage2D(n.TEXTURE_2D,Q,ft,ct,mt,dt);x.generateMipmaps=!1}else if(Dt){if(kt){const Q=qt(K);e.texStorage2D(n.TEXTURE_2D,gt,ft,Q.width,Q.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,mt,K)}else e.texImage2D(n.TEXTURE_2D,0,ft,ct,mt,K);p(x)&&S(W),st.__version=ut.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ht(C,x,z){if(x.image.length!==6)return;const W=Z(C,x),J=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);const ut=i.get(J);if(J.version!==ut.__version||W===!0){e.activeTexture(n.TEXTURE0+z);const st=ne.getPrimaries(ne.workingColorSpace),q=x.colorSpace===Li?null:ne.getPrimaries(x.colorSpace),K=x.colorSpace===Li||st===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ct=x.isCompressedTexture||x.image[0].isCompressedTexture,mt=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let at=0;at<6;at++)!ct&&!mt?ft[at]=m(x.image[at],!0,s.maxCubemapSize):ft[at]=mt?x.image[at].image:x.image[at],ft[at]=Fe(x,ft[at]);const dt=ft[0],Pt=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type),kt=_(x.internalFormat,Pt,Dt,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,gt=ut.__version===void 0||W===!0,Q=J.dataReady;let _t=T(x,dt);bt(n.TEXTURE_CUBE_MAP,x);let yt;if(ct){F&&gt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,kt,dt.width,dt.height);for(let at=0;at<6;at++){yt=ft[at].mipmaps;for(let Lt=0;Lt<yt.length;Lt++){const Ct=yt[Lt];x.format!==Un?Pt!==null?F?Q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt,0,0,Ct.width,Ct.height,Pt,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt,kt,Ct.width,Ct.height,0,Ct.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt,0,0,Ct.width,Ct.height,Pt,Dt,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt,kt,Ct.width,Ct.height,0,Pt,Dt,Ct.data)}}}else{if(yt=x.mipmaps,F&&gt){yt.length>0&&_t++;const at=qt(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,kt,at.width,at.height)}for(let at=0;at<6;at++)if(mt){F?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,ft[at].width,ft[at].height,Pt,Dt,ft[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,kt,ft[at].width,ft[at].height,0,Pt,Dt,ft[at].data);for(let Lt=0;Lt<yt.length;Lt++){const Ee=yt[Lt].image[at].image;F?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt+1,0,0,Ee.width,Ee.height,Pt,Dt,Ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt+1,kt,Ee.width,Ee.height,0,Pt,Dt,Ee.data)}}else{F?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Pt,Dt,ft[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,kt,Pt,Dt,ft[at]);for(let Lt=0;Lt<yt.length;Lt++){const Ct=yt[Lt];F?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt+1,0,0,Pt,Dt,Ct.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt+1,kt,Pt,Dt,Ct.image[at])}}}p(x)&&S(n.TEXTURE_CUBE_MAP),ut.__version=J.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function vt(C,x,z,W,J,ut){const st=r.convert(z.format,z.colorSpace),q=r.convert(z.type),K=_(z.internalFormat,st,q,z.normalized,z.colorSpace),ct=i.get(x),mt=i.get(z);if(mt.__renderTarget=x,!ct.__hasExternalTextures){const ft=Math.max(1,x.width>>ut),dt=Math.max(1,x.height>>ut);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,ut,K,ft,dt,x.depth,0,st,q,null):e.texImage2D(J,ut,K,ft,dt,0,st,q,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),re(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,mt.__webglTexture,0,ie(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,mt.__webglTexture,ut),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(C,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){const W=x.depthTexture,J=W&&W.isDepthTexture?W.type:null,ut=b(x.stencilBuffer,J),st=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;re(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(x),ut,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(x),ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,C)}else{const W=x.textures;for(let J=0;J<W.length;J++){const ut=W[J],st=r.convert(ut.format,ut.colorSpace),q=r.convert(ut.type),K=_(ut.internalFormat,st,q,ut.normalized,ut.colorSpace);re(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(x),K,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(x),K,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(C,x,z){const W=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),bt(n.TEXTURE_CUBE_MAP,x.depthTexture);const ct=r.convert(x.depthTexture.format),mt=r.convert(x.depthTexture.type);let ft;x.depthTexture.format===xi?ft=n.DEPTH_COMPONENT24:x.depthTexture.format===Ki&&(ft=n.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ft,x.width,x.height,0,ct,mt,null)}}else k(x.depthTexture,0);const ut=J.__webglTexture,st=ie(x),q=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,K=x.depthTexture.format===Ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===xi)re(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,q,ut,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,K,q,ut,0);else if(x.depthTexture.format===Ki)re(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,q,ut,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,K,q,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(C){const x=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=W}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Et(x.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?Et(x.__webglFramebuffer[0],C,0):Et(x.__webglFramebuffer,C,0)}else if(z){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=n.createRenderbuffer(),Nt(x.__webglDepthbuffer[W],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ut)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Nt(x.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ut)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(C,x,z){const W=i.get(C);x!==void 0&&vt(W.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ot(C)}function Ft(C){const x=C.texture,z=i.get(C),W=i.get(x);C.addEventListener("dispose",v);const J=C.textures,ut=C.isWebGLCubeRenderTarget===!0,st=J.length>1;if(st||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,o.memory.textures++),ut){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let K=0;K<x.mipmaps.length;K++)z.__webglFramebuffer[q][K]=n.createFramebuffer()}else z.__webglFramebuffer[q]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)z.__webglFramebuffer[q]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(st)for(let q=0,K=J.length;q<K;q++){const ct=i.get(J[q]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&re(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<J.length;q++){const K=J[q];z.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[q]);const ct=r.convert(K.format,K.colorSpace),mt=r.convert(K.type),ft=_(K.internalFormat,ct,mt,K.normalized,K.colorSpace,C.isXRRenderTarget===!0),dt=ie(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,ft,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,z.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ut){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),bt(n.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)vt(z.__webglFramebuffer[q][K],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else vt(z.__webglFramebuffer[q],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(x)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let q=0,K=J.length;q<K;q++){const ct=J[q],mt=i.get(ct);let ft=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ft=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,mt.__webglTexture),bt(ft,ct),vt(z.__webglFramebuffer,C,ct,n.COLOR_ATTACHMENT0+q,ft,0),p(ct)&&S(ft)}e.unbindTexture()}else{let q=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(q,W.__webglTexture),bt(q,x),x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)vt(z.__webglFramebuffer[K],C,x,n.COLOR_ATTACHMENT0,q,K);else vt(z.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,q,0);p(x)&&S(q),e.unbindTexture()}C.depthBuffer&&Ot(C)}function Yt(C){const x=C.textures;for(let z=0,W=x.length;z<W;z++){const J=x[z];if(p(J)){const ut=M(C),st=i.get(J).__webglTexture;e.bindTexture(ut,st),S(ut),e.unbindTexture()}}}const $t=[],ce=[];function ue(C){if(C.samples>0){if(re(C)===!1){const x=C.textures,z=C.width,W=C.height;let J=n.COLOR_BUFFER_BIT;const ut=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=i.get(C),q=x.length>1;if(q)for(let ct=0;ct<x.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);const K=C.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,st.__webglColorRenderbuffer[ct]);const mt=i.get(x[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,mt,0)}n.blitFramebuffer(0,0,z,W,0,0,z,W,J,n.NEAREST),l===!0&&($t.length=0,ce.length=0,$t.push(n.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.resolveDepthBuffer===!1&&($t.push(ut),ce.push(ut),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let ct=0;ct<x.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,st.__webglColorRenderbuffer[ct]);const mt=i.get(x[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,mt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ie(C){return Math.min(s.maxSamples,C.samples)}function re(C){const x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(C){const x=o.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function Fe(C,x){const z=C.colorSpace,W=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Yo&&z!==Li&&(ne.getTransfer(z)===de?(W!==Un||J!==Tn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",z)),x}function qt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=G,this.getTextureUnits=B,this.setTextureUnits=R,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=rt,this.setTextureCube=it,this.rebindTextures=zt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function QA(n,t){function e(i,s=Li){let r;const o=ne.getTransfer(s);if(i===Tn)return n.UNSIGNED_BYTE;if(i===Tu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Im)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dm)return n.BYTE;if(i===Lm)return n.SHORT;if(i===Lr)return n.UNSIGNED_SHORT;if(i===Eu)return n.INT;if(i===Qn)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===vi)return n.HALF_FLOAT;if(i===Um)return n.ALPHA;if(i===Fm)return n.RGB;if(i===Un)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===Au)return n.RED;if(i===wu)return n.RED_INTEGER;if(i===es)return n.RG;if(i===Ru)return n.RG_INTEGER;if(i===Cu)return n.RGBA_INTEGER;if(i===Co||i===Po||i===Do||i===Lo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xl||i===ql||i===Yl||i===$l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kl||i===Zl||i===Jl||i===jl||i===Ql||i===Xo||i===tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kl||i===Zl)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===jl)return r.COMPRESSED_R11_EAC;if(i===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Xo)return r.COMPRESSED_RG11_EAC;if(i===tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===fc||i===dc||i===pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===gc||i===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===mc)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xc||i===_c||i===qo||i===yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e1=`
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

}`;class n1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new qm(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ti({vertexShader:t1,fragmentShader:e1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new We(new va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i1 extends os{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const y=typeof XRWebGLBinding<"u",m=new n1,p={},S=e.getContextAttributes();let M=null,_=null;const b=[],T=[],P=new Vt;let v=null;const A=new En;A.viewport=new Ce;const D=new En;D.viewport=new Ce;const w=[A,D],L=new fS;let G=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let tt=b[Z];return tt===void 0&&(tt=new Ha,b[Z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Z){let tt=b[Z];return tt===void 0&&(tt=new Ha,b[Z]=tt),tt.getGripSpace()},this.getHand=function(Z){let tt=b[Z];return tt===void 0&&(tt=new Ha,b[Z]=tt),tt.getHandSpace()};function R(Z){const tt=T.indexOf(Z.inputSource);if(tt===-1)return;const nt=b[tt];nt!==void 0&&(nt.update(Z.inputSource,Z.frame,c||o),nt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",I);for(let Z=0;Z<b.length;Z++){const tt=T[Z];tt!==null&&(T[Z]=null,b[Z].disconnect(tt))}G=null,B=null,m.reset();for(const Z in p)delete p[Z];t.setRenderTarget(M),d=null,h=null,f=null,s=null,_=null,bt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",N),s.addEventListener("inputsourceschange",I),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ot=null,ht=null;S.depth&&(ht=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=S.stencil?Ki:xi,ot=S.stencil?Ir:Qn);const vt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new jn(h.textureWidth,h.textureHeight,{format:Un,type:Tn,depthTexture:new qs(h.textureWidth,h.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new jn(d.framebufferWidth,d.framebufferHeight,{format:Un,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(Z){for(let tt=0;tt<Z.removed.length;tt++){const nt=Z.removed[tt],ot=T.indexOf(nt);ot>=0&&(T[ot]=null,b[ot].disconnect(nt))}for(let tt=0;tt<Z.added.length;tt++){const nt=Z.added[tt];let ot=T.indexOf(nt);if(ot===-1){for(let vt=0;vt<b.length;vt++)if(vt>=T.length){T.push(nt),ot=vt;break}else if(T[vt]===null){T[vt]=nt,ot=vt;break}if(ot===-1)break}const ht=b[ot];ht&&ht.connect(nt)}}const k=new V,$=new V;function rt(Z,tt,nt){k.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(nt.matrixWorld);const ot=k.distanceTo($),ht=tt.projectionMatrix.elements,vt=nt.projectionMatrix.elements,Nt=ht[14]/(ht[10]-1),Et=ht[14]/(ht[10]+1),Ot=(ht[9]+1)/ht[5],zt=(ht[9]-1)/ht[5],Ft=(ht[8]-1)/ht[0],Yt=(vt[8]+1)/vt[0],$t=Nt*Ft,ce=Nt*Yt,ue=ot/(-Ft+Yt),ie=ue*-Ft;if(tt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ie),Z.translateZ(ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ht[10]===-1)Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const re=Nt+ue,U=Et+ue,Fe=$t-ie,qt=ce+(ot-ie),C=Ot*Et/U*re,x=zt*Et/U*re;Z.projectionMatrix.makePerspective(Fe,qt,C,x,re,U),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function it(Z,tt){tt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(tt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let tt=Z.near,nt=Z.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),L.near=D.near=A.near=tt,L.far=D.far=A.far=nt,(G!==L.near||B!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),G=L.near,B=L.far),L.layers.mask=Z.layers.mask|6,A.layers.mask=L.layers.mask&-5,D.layers.mask=L.layers.mask&-3;const ot=Z.parent,ht=L.cameras;it(L,ot);for(let vt=0;vt<ht.length;vt++)it(ht[vt],ot);ht.length===2?rt(L,A,D):L.projectionMatrix.copy(A.projectionMatrix),lt(Z,L,ot)};function lt(Z,tt,nt){nt===null?Z.matrix.copy(tt.matrixWorld):(Z.matrix.copy(nt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(tt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Mc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Z){return p[Z]};let wt=null;function Ut(Z,tt){if(u=tt.getViewerPose(c||o),g=tt,u!==null){const nt=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ot=!1;nt.length!==L.cameras.length&&(L.cameras.length=0,ot=!0);for(let Et=0;Et<nt.length;Et++){const Ot=nt[Et];let zt=null;if(d!==null)zt=d.getViewport(Ot);else{const Yt=f.getViewSubImage(h,Ot);zt=Yt.viewport,Et===0&&(t.setRenderTargetTextures(_,Yt.colorTexture,Yt.depthStencilTexture),t.setRenderTarget(_))}let Ft=w[Et];Ft===void 0&&(Ft=new En,Ft.layers.enable(Et),Ft.viewport=new Ce,w[Et]=Ft),Ft.matrix.fromArray(Ot.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Ot.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(zt.x,zt.y,zt.width,zt.height),Et===0&&(L.matrix.copy(Ft.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ot===!0&&L.cameras.push(Ft)}const ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const Et=f.getDepthInformation(nt[0]);Et&&Et.isValid&&Et.texture&&m.init(Et,s.renderState)}if(ht&&ht.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let Et=0;Et<nt.length;Et++){const Ot=nt[Et].camera;if(Ot){let zt=p[Ot];zt||(zt=new qm,p[Ot]=zt);const Ft=f.getCameraImage(Ot);zt.sourceTexture=Ft}}}}for(let nt=0;nt<b.length;nt++){const ot=T[nt],ht=b[nt];ot!==null&&ht!==void 0&&ht.update(ot,tt,c||o)}wt&&wt(Z,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const bt=new jm;bt.setAnimationLoop(Ut),this.setAnimationLoop=function(Z){wt=Z},this.dispose=function(){}}}const s1=new Se,rg=new Xt;rg.set(-1,0,0,0,1,0,0,0,1);function r1(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Km(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),M=S.envMap,_=S.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rg),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function o1(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){const T=b.program;i.uniformBlockBinding(_,T)}function c(_,b){let T=s[_.id];T===void 0&&(m(_),T=u(_),s[_.id]=T,_.addEventListener("dispose",S));const P=b.program;i.updateUBOMapping(_,P);const v=t.render.frame;r[_.id]!==v&&(h(_),r[_.id]=v)}function u(_){const b=f();_.__bindingPointIndex=b;const T=n.createBuffer(),P=_.__size,v=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,P,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,T),T}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const b=s[_.id],T=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let v=0,A=T.length;v<A;v++){const D=T[v];if(Array.isArray(D))for(let w=0,L=D.length;w<L;w++)d(D[w],v,w,P);else d(D,v,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,b,T,P){if(y(_,b,T,P)===!0){const v=_.__offset,A=_.value;if(Array.isArray(A)){let D=0;for(let w=0;w<A.length;w++){const L=A[w],G=p(L);g(L,_.__data,D),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(D+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,_.__data)}}function g(_,b,T){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,T)}function y(_,b,T,P){const v=_.value,A=b+"_"+T;if(P[A]===void 0)return typeof v=="number"||typeof v=="boolean"?P[A]=v:ArrayBuffer.isView(v)?P[A]=v.slice():P[A]=v.clone(),!0;{const D=P[A];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return P[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function m(_){const b=_.uniforms;let T=0;const P=16;for(let A=0,D=b.length;A<D;A++){const w=Array.isArray(b[A])?b[A]:[b[A]];for(let L=0,G=w.length;L<G;L++){const B=w[L],R=Array.isArray(B.value)?B.value:[B.value];for(let N=0,I=R.length;N<I;N++){const k=R[N],$=p(k),rt=T%P,it=rt%$.boundary,lt=rt+it;T+=it,lt!==0&&P-lt<$.storage&&(T+=P-lt),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=$.storage}}}const v=T%P;return v>0&&(T+=P-v),_.__size=T,_.__cache={},this}function p(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",_),b}function S(_){const b=_.target;b.removeEventListener("dispose",S);const T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function M(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:M}}const a1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gn=null;function l1(){return Gn===null&&(Gn=new Hm(a1,16,16,es,vi),Gn.name="DFG_LUT",Gn.minFilter=Je,Gn.magFilter=Je,Gn.wrapS=fi,Gn.wrapT=fi,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class c1{constructor(t={}){const{canvas:e=dM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Tn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=d,m=new Set([Cu,Ru,wu]),p=new Set([Tn,Qn,Lr,Ir,Tu,bu]),S=new Uint32Array(4),M=new Int32Array(4),_=new V;let b=null,T=null;const P=[],v=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let w=!1,L=null,G=null,B=null,R=null;this._outputColorSpace=Sn;let N=0,I=0,k=null,$=-1,rt=null;const it=new Ce,lt=new Ce;let wt=null;const Ut=new jt(0);let bt=0,Z=e.width,tt=e.height,nt=1,ot=null,ht=null;const vt=new Ce(0,0,Z,tt),Nt=new Ce(0,0,Z,tt);let Et=!1;const Ot=new Wm;let zt=!1,Ft=!1;const Yt=new Se,$t=new V,ce=new Ce,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function re(){return k===null?nt:1}let U=i;function Fe(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Su}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Kt,!1),U===null){const O="webgl2";if(U=Fe(O,E),U===null)throw Fe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw se("WebGLRenderer: "+E.message),E}let qt,C,x,z,W,J,ut,st,q,K,ct,mt,ft,dt,Pt,Dt,kt,F,gt,Q,_t,yt,at;function Lt(){qt=new lb(U),qt.init(),_t=new QA(U,qt),C=new tb(U,qt,t,_t),x=new JA(U,qt),C.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),G=U.createFramebuffer(),B=U.createFramebuffer(),R=U.createFramebuffer(),z=new hb(U),W=new OA,J=new jA(U,qt,x,W,C,_t,z),ut=new ab(D),st=new mS(U),yt=new jT(U,st),q=new cb(U,st,z,yt),K=new db(U,q,st,yt,z),F=new fb(U,C,J),Pt=new eb(W),ct=new FA(D,ut,qt,C,yt,Pt),mt=new r1(D,W),ft=new VA,dt=new XA(qt),kt=new JT(D,ut,x,K,g,l),Dt=new ZA(D,K,C),at=new o1(U,z,C,x),gt=new QT(U,qt,z),Q=new ub(U,qt,z),z.programs=ct.programs,D.capabilities=C,D.extensions=qt,D.properties=W,D.renderLists=ft,D.shadowMap=Dt,D.state=x,D.info=z}Lt(),y!==Tn&&(A=new mb(y,e.width,e.height,a,s,r));const Ct=new i1(D,U);this.xr=Ct,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(Z,tt,!1))},this.getSize=function(E){return E.set(Z,tt)},this.setSize=function(E,O,Y=!0){if(Ct.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,tt=O,e.width=Math.floor(E*nt),e.height=Math.floor(O*nt),Y===!0&&(e.style.width=E+"px",e.style.height=O+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Z*nt,tt*nt).floor()},this.setDrawingBufferSize=function(E,O,Y){Z=E,tt=O,nt=Y,e.width=Math.floor(E*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(y===Tn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(it)},this.getViewport=function(E){return E.copy(vt)},this.setViewport=function(E,O,Y,H){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,O,Y,H),x.viewport(it.copy(vt).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy(Nt)},this.setScissor=function(E,O,Y,H){E.isVector4?Nt.set(E.x,E.y,E.z,E.w):Nt.set(E,O,Y,H),x.scissor(lt.copy(Nt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(E){x.setScissorTest(Et=E)},this.setOpaqueSort=function(E){ot=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Y=!0){let H=0;if(E){let X=!1;if(k!==null){const xt=k.texture.format;X=m.has(xt)}if(X){const xt=k.texture.type,At=p.has(xt),pt=kt.getClearColor(),Mt=kt.getClearAlpha(),Tt=pt.r,Ht=pt.g,Wt=pt.b;At?(S[0]=Tt,S[1]=Ht,S[2]=Wt,S[3]=Mt,U.clearBufferuiv(U.COLOR,0,S)):(M[0]=Tt,M[1]=Ht,M[2]=Wt,M[3]=Mt,U.clearBufferiv(U.COLOR,0,M))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),kt.dispose(),ft.dispose(),dt.dispose(),W.dispose(),ut.dispose(),K.dispose(),yt.dispose(),at.dispose(),ct.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ge),Ct.removeEventListener("sessionend",Qe),on.stop()};function Ee(E){E.preventDefault(),xf("WebGLRenderer: Context Lost."),w=!0}function fe(){xf("WebGLRenderer: Context Restored."),w=!1;const E=z.autoReset,O=Dt.enabled,Y=Dt.autoUpdate,H=Dt.needsUpdate,X=Dt.type;Lt(),z.autoReset=E,Dt.enabled=O,Dt.autoUpdate=Y,Dt.needsUpdate=H,Dt.type=X}function Kt(E){se("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Qt(E){const O=E.target;O.removeEventListener("dispose",Qt),he(O)}function he(E){te(E),W.remove(E)}function te(E){const O=W.get(E).programs;O!==void 0&&(O.forEach(function(Y){ct.releaseProgram(Y)}),E.isShaderMaterial&&ct.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Y,H,X,xt){O===null&&(O=ue);const At=X.isMesh&&X.matrixWorld.determinantAffine()<0,pt=ei(E,O,Y,H,X);x.setMaterial(H,At);let Mt=Y.index,Tt=1;if(H.wireframe===!0){if(Mt=q.getWireframeAttribute(Y),Mt===void 0)return;Tt=2}const Ht=Y.drawRange,Wt=Y.attributes.position;let It=Ht.start*Tt,pe=(Ht.start+Ht.count)*Tt;xt!==null&&(It=Math.max(It,xt.start*Tt),pe=Math.min(pe,(xt.start+xt.count)*Tt)),Mt!==null?(It=Math.max(It,0),pe=Math.min(pe,Mt.count)):Wt!=null&&(It=Math.max(It,0),pe=Math.min(pe,Wt.count));const Le=pe-It;if(Le<0||Le===1/0)return;yt.setup(X,H,pt,Y,Mt);let Ae,ve=gt;if(Mt!==null&&(Ae=st.get(Mt),ve=Q,ve.setIndex(Ae)),X.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*re()),ve.setMode(U.LINES)):ve.setMode(U.TRIANGLES);else if(X.isLine){let Ye=H.linewidth;Ye===void 0&&(Ye=1),x.setLineWidth(Ye*re()),X.isLineSegments?ve.setMode(U.LINES):X.isLineLoop?ve.setMode(U.LINE_LOOP):ve.setMode(U.LINE_STRIP)}else X.isPoints?ve.setMode(U.POINTS):X.isSprite&&ve.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))ve.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ye=X._multiDrawStarts,Rt=X._multiDrawCounts,ln=X._multiDrawCount,ae=Mt?st.get(Mt).bytesPerElement:1,xn=W.get(H).currentProgram.getUniforms();for(let zn=0;zn<ln;zn++)xn.setValue(U,"_gl_DrawID",zn),ve.render(Ye[zn]/ae,Rt[zn])}else if(X.isInstancedMesh)ve.renderInstances(It,Le,X.count);else if(Y.isInstancedBufferGeometry){const Ye=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Rt=Math.min(Y.instanceCount,Ye);ve.renderInstances(It,Le,Rt)}else ve.render(It,Le)};function Zt(E,O,Y){E.transparent===!0&&E.side===ui&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,qe(E,O,Y),E.side=Ui,E.needsUpdate=!0,qe(E,O,Y),E.side=ui):qe(E,O,Y)}this.compile=function(E,O,Y=null){Y===null&&(Y=E),T=dt.get(Y),T.init(O),v.push(T),Y.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),E!==Y&&E.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights();const H=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xt=X.material;if(xt)if(Array.isArray(xt))for(let At=0;At<xt.length;At++){const pt=xt[At];Zt(pt,Y,X),H.add(pt)}else Zt(xt,Y,X),H.add(xt)}),T=v.pop(),H},this.compileAsync=function(E,O,Y=null){const H=this.compile(E,O,Y);return new Promise(X=>{function xt(){if(H.forEach(function(At){W.get(At).currentProgram.isReady()&&H.delete(At)}),H.size===0){X(E);return}setTimeout(xt,10)}qt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let me=null;function oe(E){me&&me(E)}function ge(){on.stop()}function Qe(){on.start()}const on=new jm;on.setAnimationLoop(oe),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(E){me=E,Ct.setAnimationLoop(E),E===null?on.stop():on.start()},Ct.addEventListener("sessionstart",ge),Ct.addEventListener("sessionend",Qe),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;L!==null&&L.renderStart(E,O);const Y=Ct.enabled===!0&&Ct.isPresenting===!0,H=A!==null&&(k===null||Y)&&A.begin(D,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(O),O=Ct.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,O,k),T=dt.get(E,v.length),T.init(O),T.state.textureUnits=J.getTextureUnits(),v.push(T),Yt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ot.setFromProjectionMatrix(Yt,qn,O.reversedDepth),Ft=this.localClippingEnabled,zt=Pt.init(this.clippingPlanes,Ft),b=ft.get(E,P.length),b.init(),P.push(b),Ct.enabled===!0&&Ct.isPresenting===!0){const At=D.xr.getDepthSensingMesh();At!==null&&gn(At,O,-1/0,D.sortObjects)}gn(E,O,0,D.sortObjects),b.finish(),D.sortObjects===!0&&b.sort(ot,ht,O.reversedDepth),ie=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ie&&kt.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&Pt.beginShadows();const X=T.state.shadowsArray;if(Dt.render(X,E,O),zt===!0&&Pt.endShadows(),(H&&A.hasRenderPass())===!1){const At=b.opaque,pt=b.transmissive;if(T.setupLights(),O.isArrayCamera){const Mt=O.cameras;if(pt.length>0)for(let Tt=0,Ht=Mt.length;Tt<Ht;Tt++){const Wt=Mt[Tt];Bn(At,pt,E,Wt)}ie&&kt.render(E);for(let Tt=0,Ht=Mt.length;Tt<Ht;Tt++){const Wt=Mt[Tt];tn(b,E,Wt,Wt.viewport)}}else pt.length>0&&Bn(At,pt,E,O),ie&&kt.render(E),tn(b,E,O)}k!==null&&I===0&&(J.updateMultisampleRenderTarget(k),J.updateRenderTargetMipmap(k)),H&&A.end(D),E.isScene===!0&&E.onAfterRender(D,E,O),yt.resetDefaultState(),$=-1,rt=null,v.pop(),v.length>0?(T=v[v.length-1],J.setTextureUnits(T.state.textureUnits),zt===!0&&Pt.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,L!==null&&L.renderEnd()};function gn(E,O,Y,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ot.intersectsSprite(E)){H&&ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Yt);const At=K.update(E),pt=E.material;pt.visible&&b.push(E,At,pt,Y,ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ot.intersectsObject(E))){const At=K.update(E),pt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ce.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),ce.copy(At.boundingSphere.center)),ce.applyMatrix4(E.matrixWorld).applyMatrix4(Yt)),Array.isArray(pt)){const Mt=At.groups;for(let Tt=0,Ht=Mt.length;Tt<Ht;Tt++){const Wt=Mt[Tt],It=pt[Wt.materialIndex];It&&It.visible&&b.push(E,At,It,Y,ce.z,Wt)}}else pt.visible&&b.push(E,At,pt,Y,ce.z,null)}}const xt=E.children;for(let At=0,pt=xt.length;At<pt;At++)gn(xt[At],O,Y,H)}function tn(E,O,Y,H){const{opaque:X,transmissive:xt,transparent:At}=E;T.setupLightsView(Y),zt===!0&&Pt.setGlobalState(D.clippingPlanes,Y),H&&x.viewport(it.copy(H)),X.length>0&&De(X,O,Y),xt.length>0&&De(xt,O,Y),At.length>0&&De(At,O,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Bn(E,O,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const It=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new jn(1,1,{generateMipmaps:!0,type:It?vi:Tn,minFilter:$i,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const xt=T.state.transmissionRenderTarget[H.id],At=H.viewport||it;xt.setSize(At.z*D.transmissionResolutionScale,At.w*D.transmissionResolutionScale);const pt=D.getRenderTarget(),Mt=D.getActiveCubeFace(),Tt=D.getActiveMipmapLevel();D.setRenderTarget(xt),D.getClearColor(Ut),bt=D.getClearAlpha(),bt<1&&D.setClearColor(16777215,.5),D.clear(),ie&&kt.render(Y);const Ht=D.toneMapping;D.toneMapping=Jn;const Wt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),zt===!0&&Pt.setGlobalState(D.clippingPlanes,H),De(E,Y,H),J.updateMultisampleRenderTarget(xt),J.updateRenderTargetMipmap(xt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let pe=0,Le=O.length;pe<Le;pe++){const Ae=O[pe],{object:ve,geometry:Ye,material:Rt,group:ln}=Ae;if(Rt.side===ui&&ve.layers.test(H.layers)){const ae=Rt.side;Rt.side=rn,Rt.needsUpdate=!0,an(ve,Y,H,Ye,Rt,ln),Rt.side=ae,Rt.needsUpdate=!0,It=!0}}It===!0&&(J.updateMultisampleRenderTarget(xt),J.updateRenderTargetMipmap(xt))}D.setRenderTarget(pt,Mt,Tt),D.setClearColor(Ut,bt),Wt!==void 0&&(H.viewport=Wt),D.toneMapping=Ht}function De(E,O,Y){const H=O.isScene===!0?O.overrideMaterial:null;for(let X=0,xt=E.length;X<xt;X++){const At=E[X],{object:pt,geometry:Mt,group:Tt}=At;let Ht=At.material;Ht.allowOverride===!0&&H!==null&&(Ht=H),pt.layers.test(Y.layers)&&an(pt,O,Y,Mt,Ht,Tt)}}function an(E,O,Y,H,X,xt){E.onBeforeRender(D,O,Y,H,X,xt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(D,O,Y,H,E,xt),X.transparent===!0&&X.side===ui&&X.forceSinglePass===!1?(X.side=rn,X.needsUpdate=!0,D.renderBufferDirect(Y,O,H,X,E,xt),X.side=Ui,X.needsUpdate=!0,D.renderBufferDirect(Y,O,H,X,E,xt),X.side=ui):D.renderBufferDirect(Y,O,H,X,E,xt),E.onAfterRender(D,O,Y,H,X,xt)}function qe(E,O,Y){O.isScene!==!0&&(O=ue);const H=W.get(E),X=T.state.lights,xt=T.state.shadowsArray,At=X.state.version,pt=ct.getParameters(E,X.state,xt,O,Y,T.state.lightProbeGridArray),Mt=ct.getProgramCacheKey(pt);let Tt=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Ht=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=ut.get(E.envMap||H.environment,Ht),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Tt===void 0&&(E.addEventListener("dispose",Qt),Tt=new Map,H.programs=Tt);let Wt=Tt.get(Mt);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===At)return Ve(E,pt),Wt}else pt.uniforms=ct.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,Y,pt),E.onBeforeCompile(pt,D),Wt=ct.acquireProgram(pt,Mt),Tt.set(Mt,Wt),H.uniforms=pt.uniforms;const It=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=Pt.uniform),Ve(E,pt),H.needsLights=Vn(E),H.lightsStateVersion=At,H.needsLights&&(It.ambientLightColor.value=X.state.ambient,It.lightProbe.value=X.state.probe,It.directionalLights.value=X.state.directional,It.directionalLightShadows.value=X.state.directionalShadow,It.spotLights.value=X.state.spot,It.spotLightShadows.value=X.state.spotShadow,It.rectAreaLights.value=X.state.rectArea,It.ltc_1.value=X.state.rectAreaLTC1,It.ltc_2.value=X.state.rectAreaLTC2,It.pointLights.value=X.state.point,It.pointLightShadows.value=X.state.pointShadow,It.hemisphereLights.value=X.state.hemi,It.directionalShadowMatrix.value=X.state.directionalShadowMatrix,It.spotLightMatrix.value=X.state.spotLightMatrix,It.spotLightMap.value=X.state.spotLightMap,It.pointShadowMatrix.value=X.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=Wt,H.uniformsList=null,Wt}function Be(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Io.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Ve(E,O){const Y=W.get(E);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function vn(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let Y=0,H=E.length;Y<H;Y++){const X=E[Y];if(X.texture!==null&&X.boundingBox.containsPoint(_))return X}return null}function ei(E,O,Y,H,X){O.isScene!==!0&&(O=ue),J.resetTextureUnits();const xt=O.fog,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,pt=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ne.workingColorSpace,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Tt=ut.get(H.envMap||At,Mt),Ht=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),It=!!Y.morphAttributes.position,pe=!!Y.morphAttributes.normal,Le=!!Y.morphAttributes.color;let Ae=Jn;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ae=D.toneMapping);const ve=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ye=ve!==void 0?ve.length:0,Rt=W.get(H),ln=T.state.lights;if(zt===!0&&(Ft===!0||E!==rt)){const ye=E===rt&&H.id===$;Pt.setState(H,E,ye)}let ae=!1;H.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ln.state.version||Rt.outputColorSpace!==pt||X.isBatchedMesh&&Rt.batching===!1||!X.isBatchedMesh&&Rt.batching===!0||X.isBatchedMesh&&Rt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Rt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Rt.instancing===!1||!X.isInstancedMesh&&Rt.instancing===!0||X.isSkinnedMesh&&Rt.skinning===!1||!X.isSkinnedMesh&&Rt.skinning===!0||X.isInstancedMesh&&Rt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Rt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Rt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Rt.instancingMorph===!1&&X.morphTexture!==null||Rt.envMap!==Tt||H.fog===!0&&Rt.fog!==xt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Pt.numPlanes||Rt.numIntersection!==Pt.numIntersection)||Rt.vertexAlphas!==Ht||Rt.vertexTangents!==Wt||Rt.morphTargets!==It||Rt.morphNormals!==pe||Rt.morphColors!==Le||Rt.toneMapping!==Ae||Rt.morphTargetsCount!==Ye||!!Rt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,Rt.__version=H.version);let xn=Rt.currentProgram;ae===!0&&(xn=qe(H,O,X),L&&H.isNodeMaterial&&L.onUpdateProgram(H,xn,Rt));let zn=!1,Si=!1,cs=!1;const xe=xn.getUniforms(),Ie=Rt.uniforms;if(x.useProgram(xn.program)&&(zn=!0,Si=!0,cs=!0),H.id!==$&&($=H.id,Si=!0),Rt.needsLights){const ye=vn(T.state.lightProbeGridArray,X);Rt.lightProbeGrid!==ye&&(Rt.lightProbeGrid=ye,Si=!0)}if(zn||rt!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xe.setValue(U,"projectionMatrix",E.projectionMatrix),xe.setValue(U,"viewMatrix",E.matrixWorldInverse);const Ti=xe.map.cameraPosition;Ti!==void 0&&Ti.setValue(U,$t.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&xe.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xe.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),rt!==E&&(rt=E,Si=!0,cs=!0)}if(Rt.needsLights&&(ln.state.directionalShadowMap.length>0&&xe.setValue(U,"directionalShadowMap",ln.state.directionalShadowMap,J),ln.state.spotShadowMap.length>0&&xe.setValue(U,"spotShadowMap",ln.state.spotShadowMap,J),ln.state.pointShadowMap.length>0&&xe.setValue(U,"pointShadowMap",ln.state.pointShadowMap,J)),X.isSkinnedMesh){xe.setOptional(U,X,"bindMatrix"),xe.setOptional(U,X,"bindMatrixInverse");const ye=X.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),xe.setValue(U,"boneTexture",ye.boneTexture,J))}X.isBatchedMesh&&(xe.setOptional(U,X,"batchingTexture"),xe.setValue(U,"batchingTexture",X._matricesTexture,J),xe.setOptional(U,X,"batchingIdTexture"),xe.setValue(U,"batchingIdTexture",X._indirectTexture,J),xe.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&xe.setValue(U,"batchingColorTexture",X._colorsTexture,J));const Ei=Y.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&F.update(X,Y,xn),(Si||Rt.receiveShadow!==X.receiveShadow)&&(Rt.receiveShadow=X.receiveShadow,xe.setValue(U,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Ie.envMapIntensity.value=O.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=l1()),Si){if(xe.setValue(U,"toneMappingExposure",D.toneMappingExposure),Rt.needsLights&&Mi(Ie,cs),xt&&H.fog===!0&&mt.refreshFogUniforms(Ie,xt),mt.refreshMaterialUniforms(Ie,H,nt,tt,T.state.transmissionRenderTarget[E.id]),Rt.needsLights&&Rt.lightProbeGrid){const ye=Rt.lightProbeGrid;Ie.probesSH.value=ye.texture,Ie.probesMin.value.copy(ye.boundingBox.min),Ie.probesMax.value.copy(ye.boundingBox.max),Ie.probesResolution.value.copy(ye.resolution)}Io.upload(U,Be(Rt),Ie,J)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Io.upload(U,Be(Rt),Ie,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xe.setValue(U,"center",X.center),xe.setValue(U,"modelViewMatrix",X.modelViewMatrix),xe.setValue(U,"normalMatrix",X.normalMatrix),xe.setValue(U,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){const ye=H.uniformsGroups;for(let Ti=0,us=ye.length;Ti<us;Ti++){const Gu=ye[Ti];at.update(Gu,xn),at.bind(Gu,xn)}}return xn}function Mi(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Vn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,O,Y){const H=W.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=O,W.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const Y=W.get(E);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,Y=0){k=E,N=O,I=Y;let H=null,X=!1,xt=!1;if(E){const pt=W.get(E);if(pt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,pt.__webglFramebuffer),it.copy(E.viewport),lt.copy(E.scissor),wt=E.scissorTest,x.viewport(it),x.scissor(lt),x.setScissorTest(wt),$=-1;return}else if(pt.__webglFramebuffer===void 0)J.setupRenderTarget(E);else if(pt.__hasExternalTextures)J.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ht=E.depthTexture;if(pt.__boundDepthTexture!==Ht){if(Ht!==null&&W.has(Ht)&&(E.width!==Ht.image.width||E.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(E)}}const Mt=E.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(xt=!0);const Tt=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Tt[O])?H=Tt[O][Y]:H=Tt[O],X=!0):E.samples>0&&J.useMultisampledRTT(E)===!1?H=W.get(E).__webglMultisampledFramebuffer:Array.isArray(Tt)?H=Tt[Y]:H=Tt,it.copy(E.viewport),lt.copy(E.scissor),wt=E.scissorTest}else it.copy(vt).multiplyScalar(nt).floor(),lt.copy(Nt).multiplyScalar(nt).floor(),wt=Et;if(Y!==0&&(H=G),x.bindFramebuffer(U.FRAMEBUFFER,H)&&x.drawBuffers(E,H),x.viewport(it),x.scissor(lt),x.setScissorTest(wt),X){const pt=W.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,pt.__webglTexture,Y)}else if(xt){const pt=O;for(let Mt=0;Mt<E.textures.length;Mt++){const Tt=W.get(E.textures[Mt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Mt,Tt.__webglTexture,Y,pt)}}else if(E!==null&&Y!==0){const pt=W.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pt.__webglTexture,Y)}$=-1},this.readRenderTargetPixels=function(E,O,Y,H,X,xt,At,pt=0){if(!(E&&E.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Mt=Mt[At]),Mt){x.bindFramebuffer(U.FRAMEBUFFER,Mt);try{const Tt=E.textures[pt],Ht=Tt.format,Wt=Tt.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt),!C.textureFormatReadable(Ht)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Wt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&Y>=0&&Y<=E.height-X&&U.readPixels(O,Y,H,X,_t.convert(Ht),_t.convert(Wt),xt)}finally{const Tt=k!==null?W.get(k).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,O,Y,H,X,xt,At,pt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Mt=Mt[At]),Mt)if(O>=0&&O<=E.width-H&&Y>=0&&Y<=E.height-X){x.bindFramebuffer(U.FRAMEBUFFER,Mt);const Tt=E.textures[pt],Ht=Tt.format,Wt=Tt.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt),!C.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const It=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,It),U.bufferData(U.PIXEL_PACK_BUFFER,xt.byteLength,U.STREAM_READ),U.readPixels(O,Y,H,X,_t.convert(Ht),_t.convert(Wt),0);const pe=k!==null?W.get(k).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,pe);const Le=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await pM(U,Le,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,It),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xt),U.deleteBuffer(It),U.deleteSync(Le),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Y=0){const H=Math.pow(2,-Y),X=Math.floor(E.image.width*H),xt=Math.floor(E.image.height*H),At=O!==null?O.x:0,pt=O!==null?O.y:0;J.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,At,pt,X,xt),x.unbindTexture()},this.copyTextureToTexture=function(E,O,Y=null,H=null,X=0,xt=0){let At,pt,Mt,Tt,Ht,Wt,It,pe,Le;const Ae=E.isCompressedTexture?E.mipmaps[xt]:E.image;if(Y!==null)At=Y.max.x-Y.min.x,pt=Y.max.y-Y.min.y,Mt=Y.isBox3?Y.max.z-Y.min.z:1,Tt=Y.min.x,Ht=Y.min.y,Wt=Y.isBox3?Y.min.z:0;else{const Ie=Math.pow(2,-X);At=Math.floor(Ae.width*Ie),pt=Math.floor(Ae.height*Ie),E.isDataArrayTexture?Mt=Ae.depth:E.isData3DTexture?Mt=Math.floor(Ae.depth*Ie):Mt=1,Tt=0,Ht=0,Wt=0}H!==null?(It=H.x,pe=H.y,Le=H.z):(It=0,pe=0,Le=0);const ve=_t.convert(O.format),Ye=_t.convert(O.type);let Rt;O.isData3DTexture?(J.setTexture3D(O,0),Rt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(J.setTexture2DArray(O,0),Rt=U.TEXTURE_2D_ARRAY):(J.setTexture2D(O,0),Rt=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const ln=x.getParameter(U.UNPACK_ROW_LENGTH),ae=x.getParameter(U.UNPACK_IMAGE_HEIGHT),xn=x.getParameter(U.UNPACK_SKIP_PIXELS),zn=x.getParameter(U.UNPACK_SKIP_ROWS),Si=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,Ae.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ae.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),x.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Wt);const cs=E.isDataArrayTexture||E.isData3DTexture,xe=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Ie=W.get(E),Ei=W.get(O),ye=W.get(Ie.__renderTarget),Ti=W.get(Ei.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,ye.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let us=0;us<Mt;us++)cs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(E).__webglTexture,X,Wt+us),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(O).__webglTexture,xt,Le+us)),U.blitFramebuffer(Tt,Ht,At,pt,It,pe,At,pt,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||W.has(E)){const Ie=W.get(E),Ei=W.get(O);x.bindFramebuffer(U.READ_FRAMEBUFFER,B),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,R);for(let ye=0;ye<Mt;ye++)cs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.__webglTexture,X,Wt+ye):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,X),xe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ei.__webglTexture,xt,Le+ye):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ei.__webglTexture,xt),X!==0?U.blitFramebuffer(Tt,Ht,At,pt,It,pe,At,pt,U.COLOR_BUFFER_BIT,U.NEAREST):xe?U.copyTexSubImage3D(Rt,xt,It,pe,Le+ye,Tt,Ht,At,pt):U.copyTexSubImage2D(Rt,xt,It,pe,Tt,Ht,At,pt);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xe?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Rt,xt,It,pe,Le,At,pt,Mt,ve,Ye,Ae.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,xt,It,pe,Le,At,pt,Mt,ve,Ae.data):U.texSubImage3D(Rt,xt,It,pe,Le,At,pt,Mt,ve,Ye,Ae):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,xt,It,pe,At,pt,ve,Ye,Ae.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,xt,It,pe,Ae.width,Ae.height,ve,Ae.data):U.texSubImage2D(U.TEXTURE_2D,xt,It,pe,At,pt,ve,Ye,Ae);x.pixelStorei(U.UNPACK_ROW_LENGTH,ln),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),x.pixelStorei(U.UNPACK_SKIP_PIXELS,xn),x.pixelStorei(U.UNPACK_SKIP_ROWS,zn),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Si),xt===0&&O.generateMipmaps&&U.generateMipmap(Rt),x.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&J.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){N=0,I=0,k=null,x.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class is{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let i=0;for(let s=0;s<this._n&&s<32;s++){const r=e[s],o=t+r,a=Math.abs(t)<Math.abs(r)?t-(o-r):r-(o-t);a&&(e[i++]=a),t=o}return e[i]=t,this._n=i+1,this}valueOf(){const t=this._partials;let e=this._n,i,s,r,o=0;if(e>0){for(o=t[--e];e>0&&(i=o,s=t[--e],o=i+s,r=s-(o-i),!r););e>0&&(r<0&&t[e-1]<0||r>0&&t[e-1]>0)&&(s=r*2,i=o+s,s==i-o&&(o=i))}return o}}function*u1(n){for(const t of n)yield*t}function og(n){return Array.from(u1(n))}var Me=1e-6,le=Math.PI,An=le/2,md=le/4,Rn=le*2,li=180/le,fn=le/180,be=Math.abs,h1=Math.atan,Nr=Math.atan2,Ne=Math.cos,Ue=Math.sin,f1=Math.sign||function(n){return n>0?1:n<0?-1:0},ls=Math.sqrt;function d1(n){return n>1?0:n<-1?le:Math.acos(n)}function Ur(n){return n>1?An:n<-1?-An:Math.asin(n)}function wn(){}function Jo(n,t){n&&vd.hasOwnProperty(n.type)&&vd[n.type](n,t)}var gd={Feature:function(n,t){Jo(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,i=-1,s=e.length;++i<s;)Jo(e[i].geometry,t)}},vd={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)n=e[i],t.point(n[0],n[1],n[2])},LineString:function(n,t){bc(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)bc(e[i],t,0)},Polygon:function(n,t){xd(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)xd(e[i],t)},GeometryCollection:function(n,t){for(var e=n.geometries,i=-1,s=e.length;++i<s;)Jo(e[i],t)}};function bc(n,t,e){var i=-1,s=n.length-e,r;for(t.lineStart();++i<s;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function xd(n,t){var e=-1,i=n.length;for(t.polygonStart();++e<i;)bc(n[e],t,1);t.polygonEnd()}function ws(n,t){n&&gd.hasOwnProperty(n.type)?gd[n.type](n,t):Jo(n,t)}function Ac(n){return[Nr(n[1],n[0]),Ur(n[2])]}function $s(n){var t=n[0],e=n[1],i=Ne(e);return[i*Ne(t),i*Ue(t),Ue(e)]}function yo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function jo(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function ml(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Mo(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function wc(n){var t=ls(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Rc(n,t){function e(i,s){return i=n(i,s),t(i[0],i[1])}return n.invert&&t.invert&&(e.invert=function(i,s){return i=t.invert(i,s),i&&n.invert(i[0],i[1])}),e}function Cc(n,t){return be(n)>le&&(n-=Math.round(n/Rn)*Rn),[n,t]}Cc.invert=Cc;function p1(n,t,e){return(n%=Rn)?t||e?Rc(yd(n),Md(t,e)):yd(n):t||e?Md(t,e):Cc}function _d(n){return function(t,e){return t+=n,be(t)>le&&(t-=Math.round(t/Rn)*Rn),[t,e]}}function yd(n){var t=_d(n);return t.invert=_d(-n),t}function Md(n,t){var e=Ne(n),i=Ue(n),s=Ne(t),r=Ue(t);function o(a,l){var c=Ne(l),u=Ne(a)*c,f=Ue(a)*c,h=Ue(l),d=h*e+u*i;return[Nr(f*s-d*r,u*e-h*i),Ur(d*s+f*r)]}return o.invert=function(a,l){var c=Ne(l),u=Ne(a)*c,f=Ue(a)*c,h=Ue(l),d=h*s-f*r;return[Nr(f*s+h*r,u*e+d*i),Ur(d*e-u*i)]},o}function m1(n,t,e,i,s,r){if(e){var o=Ne(t),a=Ue(t),l=i*e;s==null?(s=t+i*Rn,r=t-l/2):(s=Sd(o,s),r=Sd(o,r),(i>0?s<r:s>r)&&(s+=i*Rn));for(var c,u=s;i>0?u>r:u<r;u-=l)c=Ac([o,-a*Ne(u),-a*Ue(u)]),n.point(c[0],c[1])}}function Sd(n,t){t=$s(t),t[0]-=n,wc(t);var e=d1(-t[1]);return((-t[2]<0?-e:e)+Rn-Me)%Rn}function ag(){var n=[],t;return{point:function(e,i,s){t.push([e,i,s])},lineStart:function(){n.push(t=[])},lineEnd:wn,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function No(n,t){return be(n[0]-t[0])<Me&&be(n[1]-t[1])<Me}function So(n,t,e,i){this.x=n,this.z=t,this.o=e,this.e=i,this.v=!1,this.n=this.p=null}function lg(n,t,e,i,s){var r=[],o=[],a,l;if(n.forEach(function(g){if(!((y=g.length-1)<=0)){var y,m=g[0],p=g[y],S;if(No(m,p)){if(!m[2]&&!p[2]){for(s.lineStart(),a=0;a<y;++a)s.point((m=g[a])[0],m[1]);s.lineEnd();return}p[0]+=2*Me}r.push(S=new So(m,g,null,!0)),o.push(S.o=new So(m,null,S,!1)),r.push(S=new So(p,g,null,!1)),o.push(S.o=new So(p,null,S,!0))}}),!!r.length){for(o.sort(t),Ed(r),Ed(o),a=0,l=o.length;a<l;++a)o[a].e=e=!e;for(var c=r[0],u,f;;){for(var h=c,d=!0;h.v;)if((h=h.n)===c)return;u=h.z,s.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(a=0,l=u.length;a<l;++a)s.point((f=u[a])[0],f[1]);else i(h.x,h.n.x,1,s);h=h.n}else{if(d)for(u=h.p.z,a=u.length-1;a>=0;--a)s.point((f=u[a])[0],f[1]);else i(h.x,h.p.x,-1,s);h=h.p}h=h.o,u=h.z,d=!d}while(!h.v);s.lineEnd()}}}function Ed(n){if(t=n.length){for(var t,e=0,i=n[0],s;++e<t;)i.n=s=n[e],s.p=i,i=s;i.n=s=n[0],s.p=i}}function gl(n){return be(n[0])<=le?n[0]:f1(n[0])*((be(n[0])+le)%Rn-le)}function g1(n,t){var e=gl(t),i=t[1],s=Ue(i),r=[Ue(e),-Ne(e),0],o=0,a=0,l=new is;s===1?i=An+Me:s===-1&&(i=-An-Me);for(var c=0,u=n.length;c<u;++c)if(h=(f=n[c]).length)for(var f,h,d=f[h-1],g=gl(d),y=d[1]/2+md,m=Ue(y),p=Ne(y),S=0;S<h;++S,g=_,m=T,p=P,d=M){var M=f[S],_=gl(M),b=M[1]/2+md,T=Ue(b),P=Ne(b),v=_-g,A=v>=0?1:-1,D=A*v,w=D>le,L=m*T;if(l.add(Nr(L*A*Ue(D),p*P+L*Ne(D))),o+=w?v+A*Rn:v,w^g>=e^_>=e){var G=jo($s(d),$s(M));wc(G);var B=jo(r,G);wc(B);var R=(w^v>=0?-1:1)*Ur(B[2]);(i>R||i===R&&(G[0]||G[1]))&&(a+=w^v>=0?1:-1)}}return(o<-Me||o<Me&&l<-1e-12)^a&1}function cg(n,t,e,i){return function(s){var r=t(s),o=ag(),a=t(o),l=!1,c,u,f,h={point:d,lineStart:y,lineEnd:m,polygonStart:function(){h.point=p,h.lineStart=S,h.lineEnd=M,u=[],c=[]},polygonEnd:function(){h.point=d,h.lineStart=y,h.lineEnd=m,u=og(u);var _=g1(c,i);u.length?(l||(s.polygonStart(),l=!0),lg(u,x1,_,e,s)):_&&(l||(s.polygonStart(),l=!0),s.lineStart(),e(null,null,1,s),s.lineEnd()),l&&(s.polygonEnd(),l=!1),u=c=null},sphere:function(){s.polygonStart(),s.lineStart(),e(null,null,1,s),s.lineEnd(),s.polygonEnd()}};function d(_,b){n(_,b)&&s.point(_,b)}function g(_,b){r.point(_,b)}function y(){h.point=g,r.lineStart()}function m(){h.point=d,r.lineEnd()}function p(_,b){f.push([_,b]),a.point(_,b)}function S(){a.lineStart(),f=[]}function M(){p(f[0][0],f[0][1]),a.lineEnd();var _=a.clean(),b=o.result(),T,P=b.length,v,A,D;if(f.pop(),c.push(f),f=null,!!P){if(_&1){if(A=b[0],(v=A.length-1)>0){for(l||(s.polygonStart(),l=!0),s.lineStart(),T=0;T<v;++T)s.point((D=A[T])[0],D[1]);s.lineEnd()}return}P>1&&_&2&&b.push(b.pop().concat(b.shift())),u.push(b.filter(v1))}}return h}}function v1(n){return n.length>1}function x1(n,t){return((n=n.x)[0]<0?n[1]-An-Me:An-n[1])-((t=t.x)[0]<0?t[1]-An-Me:An-t[1])}const Td=cg(function(){return!0},_1,M1,[-le,-An]);function _1(n){var t=NaN,e=NaN,i=NaN,s;return{lineStart:function(){n.lineStart(),s=1},point:function(r,o){var a=r>0?le:-le,l=be(r-t);be(l-le)<Me?(n.point(t,e=(e+o)/2>0?An:-An),n.point(i,e),n.lineEnd(),n.lineStart(),n.point(a,e),n.point(r,e),s=0):i!==a&&l>=le&&(be(t-i)<Me&&(t-=i*Me),be(r-a)<Me&&(r-=a*Me),e=y1(t,e,r,o),n.point(i,e),n.lineEnd(),n.lineStart(),n.point(a,e),s=0),n.point(t=r,e=o),i=a},lineEnd:function(){n.lineEnd(),t=e=NaN},clean:function(){return 2-s}}}function y1(n,t,e,i){var s,r,o=Ue(n-e);return be(o)>Me?h1((Ue(t)*(r=Ne(i))*Ue(e)-Ue(i)*(s=Ne(t))*Ue(n))/(s*r*o)):(t+i)/2}function M1(n,t,e,i){var s;if(n==null)s=e*An,i.point(-le,s),i.point(0,s),i.point(le,s),i.point(le,0),i.point(le,-s),i.point(0,-s),i.point(-le,-s),i.point(-le,0),i.point(-le,s);else if(be(n[0]-t[0])>Me){var r=n[0]<t[0]?le:-le;s=e*r/2,i.point(-r,s),i.point(0,s),i.point(r,s)}else i.point(t[0],t[1])}function S1(n){var t=Ne(n),e=2*fn,i=t>0,s=be(t)>Me;function r(u,f,h,d){m1(d,n,e,h,u,f)}function o(u,f){return Ne(u)*Ne(f)>t}function a(u){var f,h,d,g,y;return{lineStart:function(){g=d=!1,y=1},point:function(m,p){var S=[m,p],M,_=o(m,p),b=i?_?0:c(m,p):_?c(m+(m<0?le:-le),p):0;if(!f&&(g=d=_)&&u.lineStart(),_!==d&&(M=l(f,S),(!M||No(f,M)||No(S,M))&&(S[2]=1)),_!==d)y=0,_?(u.lineStart(),M=l(S,f),u.point(M[0],M[1])):(M=l(f,S),u.point(M[0],M[1],2),u.lineEnd()),f=M;else if(s&&f&&i^_){var T;!(b&h)&&(T=l(S,f,!0))&&(y=0,i?(u.lineStart(),u.point(T[0][0],T[0][1]),u.point(T[1][0],T[1][1]),u.lineEnd()):(u.point(T[1][0],T[1][1]),u.lineEnd(),u.lineStart(),u.point(T[0][0],T[0][1],3)))}_&&(!f||!No(f,S))&&u.point(S[0],S[1]),f=S,d=_,h=b},lineEnd:function(){d&&u.lineEnd(),f=null},clean:function(){return y|(g&&d)<<1}}}function l(u,f,h){var d=$s(u),g=$s(f),y=[1,0,0],m=jo(d,g),p=yo(m,m),S=m[0],M=p-S*S;if(!M)return!h&&u;var _=t*p/M,b=-t*S/M,T=jo(y,m),P=Mo(y,_),v=Mo(m,b);ml(P,v);var A=T,D=yo(P,A),w=yo(A,A),L=D*D-w*(yo(P,P)-1);if(!(L<0)){var G=ls(L),B=Mo(A,(-D-G)/w);if(ml(B,P),B=Ac(B),!h)return B;var R=u[0],N=f[0],I=u[1],k=f[1],$;N<R&&($=R,R=N,N=$);var rt=N-R,it=be(rt-le)<Me,lt=it||rt<Me;if(!it&&k<I&&($=I,I=k,k=$),lt?it?I+k>0^B[1]<(be(B[0]-R)<Me?I:k):I<=B[1]&&B[1]<=k:rt>le^(R<=B[0]&&B[0]<=N)){var wt=Mo(A,(-D+G)/w);return ml(wt,P),[B,Ac(wt)]}}}function c(u,f){var h=i?n:le-n,d=0;return u<-h?d|=1:u>h&&(d|=2),f<-h?d|=4:f>h&&(d|=8),d}return cg(o,a,r,i?[0,-n]:[-le,n-le])}function E1(n,t,e,i,s,r){var o=n[0],a=n[1],l=t[0],c=t[1],u=0,f=1,h=l-o,d=c-a,g;if(g=e-o,!(!h&&g>0)){if(g/=h,h<0){if(g<u)return;g<f&&(f=g)}else if(h>0){if(g>f)return;g>u&&(u=g)}if(g=s-o,!(!h&&g<0)){if(g/=h,h<0){if(g>f)return;g>u&&(u=g)}else if(h>0){if(g<u)return;g<f&&(f=g)}if(g=i-a,!(!d&&g>0)){if(g/=d,d<0){if(g<u)return;g<f&&(f=g)}else if(d>0){if(g>f)return;g>u&&(u=g)}if(g=r-a,!(!d&&g<0)){if(g/=d,d<0){if(g>f)return;g>u&&(u=g)}else if(d>0){if(g<u)return;g<f&&(f=g)}return u>0&&(n[0]=o+u*h,n[1]=a+u*d),f<1&&(t[0]=o+f*h,t[1]=a+f*d),!0}}}}}var vr=1e9,Eo=-vr;function T1(n,t,e,i){function s(c,u){return n<=c&&c<=e&&t<=u&&u<=i}function r(c,u,f,h){var d=0,g=0;if(c==null||(d=o(c,f))!==(g=o(u,f))||l(c,u)<0^f>0)do h.point(d===0||d===3?n:e,d>1?i:t);while((d=(d+f+4)%4)!==g);else h.point(u[0],u[1])}function o(c,u){return be(c[0]-n)<Me?u>0?0:3:be(c[0]-e)<Me?u>0?2:1:be(c[1]-t)<Me?u>0?1:0:u>0?3:2}function a(c,u){return l(c.x,u.x)}function l(c,u){var f=o(c,1),h=o(u,1);return f!==h?f-h:f===0?u[1]-c[1]:f===1?c[0]-u[0]:f===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,f=ag(),h,d,g,y,m,p,S,M,_,b,T,P={point:v,lineStart:L,lineEnd:G,polygonStart:D,polygonEnd:w};function v(R,N){s(R,N)&&u.point(R,N)}function A(){for(var R=0,N=0,I=d.length;N<I;++N)for(var k=d[N],$=1,rt=k.length,it=k[0],lt,wt,Ut=it[0],bt=it[1];$<rt;++$)lt=Ut,wt=bt,it=k[$],Ut=it[0],bt=it[1],wt<=i?bt>i&&(Ut-lt)*(i-wt)>(bt-wt)*(n-lt)&&++R:bt<=i&&(Ut-lt)*(i-wt)<(bt-wt)*(n-lt)&&--R;return R}function D(){u=f,h=[],d=[],T=!0}function w(){var R=A(),N=T&&R,I=(h=og(h)).length;(N||I)&&(c.polygonStart(),N&&(c.lineStart(),r(null,null,1,c),c.lineEnd()),I&&lg(h,a,R,r,c),c.polygonEnd()),u=c,h=d=g=null}function L(){P.point=B,d&&d.push(g=[]),b=!0,_=!1,S=M=NaN}function G(){h&&(B(y,m),p&&_&&f.rejoin(),h.push(f.result())),P.point=v,_&&u.lineEnd()}function B(R,N){var I=s(R,N);if(d&&g.push([R,N]),b)y=R,m=N,p=I,b=!1,I&&(u.lineStart(),u.point(R,N));else if(I&&_)u.point(R,N);else{var k=[S=Math.max(Eo,Math.min(vr,S)),M=Math.max(Eo,Math.min(vr,M))],$=[R=Math.max(Eo,Math.min(vr,R)),N=Math.max(Eo,Math.min(vr,N))];E1(k,$,n,t,e,i)?(_||(u.lineStart(),u.point(k[0],k[1])),u.point($[0],$[1]),I||u.lineEnd(),T=!1):I&&(u.lineStart(),u.point(R,N),T=!1)}S=R,M=N,_=I}return P}}const Pc=n=>n;var vl=new is,Dc=new is,ug,hg,Lc,Ic,hi={point:wn,lineStart:wn,lineEnd:wn,polygonStart:function(){hi.lineStart=b1,hi.lineEnd=w1},polygonEnd:function(){hi.lineStart=hi.lineEnd=hi.point=wn,vl.add(be(Dc)),Dc=new is},result:function(){var n=vl/2;return vl=new is,n}};function b1(){hi.point=A1}function A1(n,t){hi.point=fg,ug=Lc=n,hg=Ic=t}function fg(n,t){Dc.add(Ic*n-Lc*t),Lc=n,Ic=t}function w1(){fg(ug,hg)}var Ks=1/0,Qo=Ks,Fr=-Ks,ta=Fr,ea={point:R1,lineStart:wn,lineEnd:wn,polygonStart:wn,polygonEnd:wn,result:function(){var n=[[Ks,Qo],[Fr,ta]];return Fr=ta=-(Qo=Ks=1/0),n}};function R1(n,t){n<Ks&&(Ks=n),n>Fr&&(Fr=n),t<Qo&&(Qo=t),t>ta&&(ta=t)}var Nc=0,Uc=0,xr=0,na=0,ia=0,Us=0,Fc=0,Oc=0,_r=0,dg,pg,Wn,Xn,bn={point:ss,lineStart:bd,lineEnd:Ad,polygonStart:function(){bn.lineStart=D1,bn.lineEnd=L1},polygonEnd:function(){bn.point=ss,bn.lineStart=bd,bn.lineEnd=Ad},result:function(){var n=_r?[Fc/_r,Oc/_r]:Us?[na/Us,ia/Us]:xr?[Nc/xr,Uc/xr]:[NaN,NaN];return Nc=Uc=xr=na=ia=Us=Fc=Oc=_r=0,n}};function ss(n,t){Nc+=n,Uc+=t,++xr}function bd(){bn.point=C1}function C1(n,t){bn.point=P1,ss(Wn=n,Xn=t)}function P1(n,t){var e=n-Wn,i=t-Xn,s=ls(e*e+i*i);na+=s*(Wn+n)/2,ia+=s*(Xn+t)/2,Us+=s,ss(Wn=n,Xn=t)}function Ad(){bn.point=ss}function D1(){bn.point=I1}function L1(){mg(dg,pg)}function I1(n,t){bn.point=mg,ss(dg=Wn=n,pg=Xn=t)}function mg(n,t){var e=n-Wn,i=t-Xn,s=ls(e*e+i*i);na+=s*(Wn+n)/2,ia+=s*(Xn+t)/2,Us+=s,s=Xn*n-Wn*t,Fc+=s*(Wn+n),Oc+=s*(Xn+t),_r+=s*3,ss(Wn=n,Xn=t)}function gg(n){this._context=n}gg.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._context.moveTo(n,t),this._point=1;break}case 1:{this._context.lineTo(n,t);break}default:{this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,Rn);break}}},result:wn};var Bc=new is,xl,vg,xg,yr,Mr,Or={point:wn,lineStart:function(){Or.point=N1},lineEnd:function(){xl&&_g(vg,xg),Or.point=wn},polygonStart:function(){xl=!0},polygonEnd:function(){xl=null},result:function(){var n=+Bc;return Bc=new is,n}};function N1(n,t){Or.point=_g,vg=yr=n,xg=Mr=t}function _g(n,t){yr-=n,Mr-=t,Bc.add(ls(yr*yr+Mr*Mr)),yr=n,Mr=t}let wd,sa,Rd,Cd;class Pd{constructor(t){this._append=t==null?yg:U1(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==Rd||this._append!==sa){const i=this._radius,s=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,Rd=i,sa=this._append,Cd=this._,this._=s}this._+=Cd;break}}}result(){const t=this._;return this._="",t.length?t:null}}function yg(n){let t=1;this._+=n[0];for(const e=n.length;t<e;++t)this._+=arguments[t]+n[t]}function U1(n){const t=Math.floor(n);if(!(t>=0))throw new RangeError(`invalid digits: ${n}`);if(t>15)return yg;if(t!==wd){const e=10**t;wd=t,sa=function(s){let r=1;this._+=s[0];for(const o=s.length;r<o;++r)this._+=Math.round(arguments[r]*e)/e+s[r]}}return sa}function Dd(n,t){let e=3,i=4.5,s,r;function o(a){return a&&(typeof i=="function"&&r.pointRadius(+i.apply(this,arguments)),ws(a,s(r))),r.result()}return o.area=function(a){return ws(a,s(hi)),hi.result()},o.measure=function(a){return ws(a,s(Or)),Or.result()},o.bounds=function(a){return ws(a,s(ea)),ea.result()},o.centroid=function(a){return ws(a,s(bn)),bn.result()},o.projection=function(a){return arguments.length?(s=a==null?(n=null,Pc):(n=a).stream,o):n},o.context=function(a){return arguments.length?(r=a==null?(t=null,new Pd(e)):new gg(t=a),typeof i!="function"&&r.pointRadius(i),o):t},o.pointRadius=function(a){return arguments.length?(i=typeof a=="function"?a:(r.pointRadius(+a),+a),o):i},o.digits=function(a){if(!arguments.length)return e;if(a==null)e=null;else{const l=Math.floor(a);if(!(l>=0))throw new RangeError(`invalid digits: ${a}`);e=l}return t===null&&(r=new Pd(e)),o},o.projection(n).digits(e).context(t)}function Uu(n){return function(t){var e=new Vc;for(var i in n)e[i]=n[i];return e.stream=t,e}}function Vc(){}Vc.prototype={constructor:Vc,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Fu(n,t,e){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),ws(e,n.stream(ea)),t(ea.result()),i!=null&&n.clipExtent(i),n}function Mg(n,t,e){return Fu(n,function(i){var s=t[1][0]-t[0][0],r=t[1][1]-t[0][1],o=Math.min(s/(i[1][0]-i[0][0]),r/(i[1][1]-i[0][1])),a=+t[0][0]+(s-o*(i[1][0]+i[0][0]))/2,l=+t[0][1]+(r-o*(i[1][1]+i[0][1]))/2;n.scale(150*o).translate([a,l])},e)}function F1(n,t,e){return Mg(n,[[0,0],t],e)}function O1(n,t,e){return Fu(n,function(i){var s=+t,r=s/(i[1][0]-i[0][0]),o=(s-r*(i[1][0]+i[0][0]))/2,a=-r*i[0][1];n.scale(150*r).translate([o,a])},e)}function B1(n,t,e){return Fu(n,function(i){var s=+t,r=s/(i[1][1]-i[0][1]),o=-r*i[0][0],a=(s-r*(i[1][1]+i[0][1]))/2;n.scale(150*r).translate([o,a])},e)}var Ld=16,V1=Ne(30*fn);function Id(n,t){return+t?k1(n,t):z1(n)}function z1(n){return Uu({point:function(t,e){t=n(t,e),this.stream.point(t[0],t[1])}})}function k1(n,t){function e(i,s,r,o,a,l,c,u,f,h,d,g,y,m){var p=c-i,S=u-s,M=p*p+S*S;if(M>4*t&&y--){var _=o+h,b=a+d,T=l+g,P=ls(_*_+b*b+T*T),v=Ur(T/=P),A=be(be(T)-1)<Me||be(r-f)<Me?(r+f)/2:Nr(b,_),D=n(A,v),w=D[0],L=D[1],G=w-i,B=L-s,R=S*G-p*B;(R*R/M>t||be((p*G+S*B)/M-.5)>.3||o*h+a*d+l*g<V1)&&(e(i,s,r,o,a,l,w,L,A,_/=P,b/=P,T,y,m),m.point(w,L),e(w,L,A,_,b,T,c,u,f,h,d,g,y,m))}}return function(i){var s,r,o,a,l,c,u,f,h,d,g,y,m={point:p,lineStart:S,lineEnd:_,polygonStart:function(){i.polygonStart(),m.lineStart=b},polygonEnd:function(){i.polygonEnd(),m.lineStart=S}};function p(v,A){v=n(v,A),i.point(v[0],v[1])}function S(){f=NaN,m.point=M,i.lineStart()}function M(v,A){var D=$s([v,A]),w=n(v,A);e(f,h,u,d,g,y,f=w[0],h=w[1],u=v,d=D[0],g=D[1],y=D[2],Ld,i),i.point(f,h)}function _(){m.point=p,i.lineEnd()}function b(){S(),m.point=T,m.lineEnd=P}function T(v,A){M(s=v,A),r=f,o=h,a=d,l=g,c=y,m.point=M}function P(){e(f,h,u,d,g,y,r,o,s,a,l,c,Ld,i),m.lineEnd=_,_()}return m}}var G1=Uu({point:function(n,t){this.stream.point(n*fn,t*fn)}});function H1(n){return Uu({point:function(t,e){var i=n(t,e);return this.stream.point(i[0],i[1])}})}function W1(n,t,e,i,s){function r(o,a){return o*=i,a*=s,[t+n*o,e-n*a]}return r.invert=function(o,a){return[(o-t)/n*i,(e-a)/n*s]},r}function Nd(n,t,e,i,s,r){if(!r)return W1(n,t,e,i,s);var o=Ne(r),a=Ue(r),l=o*n,c=a*n,u=o/n,f=a/n,h=(a*e-o*t)/n,d=(a*t+o*e)/n;function g(y,m){return y*=i,m*=s,[l*y-c*m+t,e-c*y-l*m]}return g.invert=function(y,m){return[i*(u*y-f*m+h),s*(d-f*y-u*m)]},g}function X1(n){return q1(function(){return n})()}function q1(n){var t,e=150,i=480,s=250,r=0,o=0,a=0,l=0,c=0,u,f=0,h=1,d=1,g=null,y=Td,m=null,p,S,M,_=Pc,b=.5,T,P,v,A,D;function w(R){return v(R[0]*fn,R[1]*fn)}function L(R){return R=v.invert(R[0],R[1]),R&&[R[0]*li,R[1]*li]}w.stream=function(R){return A&&D===R?A:A=G1(H1(u)(y(T(_(D=R)))))},w.preclip=function(R){return arguments.length?(y=R,g=void 0,B()):y},w.postclip=function(R){return arguments.length?(_=R,m=p=S=M=null,B()):_},w.clipAngle=function(R){return arguments.length?(y=+R?S1(g=R*fn):(g=null,Td),B()):g*li},w.clipExtent=function(R){return arguments.length?(_=R==null?(m=p=S=M=null,Pc):T1(m=+R[0][0],p=+R[0][1],S=+R[1][0],M=+R[1][1]),B()):m==null?null:[[m,p],[S,M]]},w.scale=function(R){return arguments.length?(e=+R,G()):e},w.translate=function(R){return arguments.length?(i=+R[0],s=+R[1],G()):[i,s]},w.center=function(R){return arguments.length?(r=R[0]%360*fn,o=R[1]%360*fn,G()):[r*li,o*li]},w.rotate=function(R){return arguments.length?(a=R[0]%360*fn,l=R[1]%360*fn,c=R.length>2?R[2]%360*fn:0,G()):[a*li,l*li,c*li]},w.angle=function(R){return arguments.length?(f=R%360*fn,G()):f*li},w.reflectX=function(R){return arguments.length?(h=R?-1:1,G()):h<0},w.reflectY=function(R){return arguments.length?(d=R?-1:1,G()):d<0},w.precision=function(R){return arguments.length?(T=Id(P,b=R*R),B()):ls(b)},w.fitExtent=function(R,N){return Mg(w,R,N)},w.fitSize=function(R,N){return F1(w,R,N)},w.fitWidth=function(R,N){return O1(w,R,N)},w.fitHeight=function(R,N){return B1(w,R,N)};function G(){var R=Nd(e,0,0,h,d,f).apply(null,t(r,o)),N=Nd(e,i-R[0],s-R[1],h,d,f);return u=p1(a,l,c),P=Rc(t,N),v=Rc(u,P),T=Id(P,b),B()}function B(){return A=D=null,w}return function(){return t=n.apply(this,arguments),w.invert=t.invert&&L,G()}}function zc(n,t){return[n,t]}zc.invert=zc;function Ud(){return X1(zc).scale(152.63)}function As(n){if(!n||n.trim()==="")return{r:0,g:0,b:0,a:0};const t=n.trim(),e=t.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i);if(e){const s=Math.max(0,Math.min(255,parseFloat(e[1])))/255,r=Math.max(0,Math.min(255,parseFloat(e[2])))/255,o=Math.max(0,Math.min(255,parseFloat(e[3])))/255,a=e[4]!==void 0?Math.max(0,Math.min(1,parseFloat(e[4]))):1;return{r:s,g:r,b:o,a}}const i=t.replace(/^#/,"");return i.length===8?{r:parseInt(i.slice(0,2),16)/255,g:parseInt(i.slice(2,4),16)/255,b:parseInt(i.slice(4,6),16)/255,a:parseInt(i.slice(6,8),16)/255}:i.length===6?{r:parseInt(i.slice(0,2),16)/255,g:parseInt(i.slice(2,4),16)/255,b:parseInt(i.slice(4,6),16)/255,a:1}:i.length===4?{r:parseInt(i[0]+i[0],16)/255,g:parseInt(i[1]+i[1],16)/255,b:parseInt(i[2]+i[2],16)/255,a:parseInt(i[3]+i[3],16)/255}:i.length===3?{r:parseInt(i[0]+i[0],16)/255,g:parseInt(i[1]+i[1],16)/255,b:parseInt(i[2]+i[2],16)/255,a:1}:{r:0,g:0,b:0,a:1}}function _i(n,t,e,i,s){if(e===t)return i;const r=(n-t)/(e-t);return i+r*(s-i)}function Y1(n){if(n===0)return 0;const t=Math.max(0,Math.min(10,n));return _i(t,0,10,0,.9)}function $1(n){const t=Math.max(1,Math.min(10,n));return _i(t,1,10,24,8)}function K1(n){const t=Math.max(1,Math.min(20,n));return _i(t,1,20,.2,2)}function Z1(n){const t=Math.max(1,Math.min(10,n));return _i(t,1,10,.1,.5)}function J1(n){const t=Math.max(0,Math.min(100,n));return _i(t,0,100,.1,2.5)}function j1(n){return Math.max(0,Math.min(1,n/10))}function Q1(n){return _i(Math.max(0,Math.min(10,n)),0,10,.001,.02)}function tw(n){const t=Math.max(1,Math.min(10,n));return _i(t,1,10,10,1)}function ew(n,t){if(n.length<2||t>=10)return n;const e=Math.max(1,Math.floor(tw(t))),i=[];i.push(n[0]);for(let a=e;a<n.length-1;a+=e){const l=Math.min(a,n.length-1);i.push(n[l])}const s=n[n.length-1],r=n[0];return Math.abs(s[0]-r[0])<1e-4&&Math.abs(s[1]-r[1])<1e-4||i.push(s),i.length>=2?i:n}function ur(n,t){const e=n*(Math.PI/180),i=t*(Math.PI/180),s=Math.cos(e)*Math.sin(i),r=Math.sin(e),o=Math.cos(e)*Math.cos(i);return{x:s,y:r,z:o}}function nw({speed:n=2,smoothing:t=8,dots:e={color:"#ffffff",size:5,density:8,allDots:!1},fill:i="dots",fillColor:s="#ffffff",scale:r=8,stopOnHover:o=!0,markerConfig:a={markers:[],color:"#00f7ff",size:40},direction:l="left",initialLatitude:c=23,initialLongitude:u=-23,oceanColor:f="#000000",outlineColor:h="#ffffff",showOutline:d=!0,graticuleColor:g="#D4D4D4",showGrid:y=!0,outlineWidth:m=1,dragSpeed:p=5,detail:S=5,style:M}){const _=et.useRef(null),[,b]=et.useState(!0),[T,P]=et.useState(null),v=e.color,A=e.size,D=e.density,w=e.allDots,L=1,G=j1(t),B=Y1(n),R=l==="left"?-B:B,N=$1(D),I=Z1(A),k=J1(a.size),$=K1(r);et.useEffect(()=>{if(!_.current)return;const it=_.current,lt=it.clientWidth||it.offsetWidth||800,wt=it.clientHeight||it.offsetHeight||600,Ut=new PM,bt=new En(50,lt/wt,.1,1e3),tt=1*$,nt=2.5/$;bt.position.set(0,0,nt),bt.lookAt(0,0,0);const ot=new c1({antialias:!0,alpha:!0});ot.setSize(lt,wt),ot.setPixelRatio(Math.min(window.devicePixelRatio,2)),ot.outputColorSpace="srgb";const ht=ot.domElement;ht.style.position="absolute",ht.style.inset="0",ht.style.width="100%",ht.style.height="100%",ht.style.display="block",ht.style.opacity="0",ht.style.visibility="hidden",it.appendChild(ht);const vt=f,Nt=h,Et=v,Ot=a.color,zt=g,Ft=s,Yt=As(vt),$t=As(Nt),ce=As(Et);As(Ot);const ue=As(zt),ie=As(Ft),re=new Is(tt,64,64),U=vt?new jt(vt):new jt(0,0,0),Fe=new ci({color:U,transparent:Yt.a<1||Yt.a===0,opacity:Yt.a}),qt=new We(re,Fe);if(Ut.add(qt),d&&h&&$t.a>0){const Kt=[];for(let te=0;te<=128;te++){const Zt=te/128*Math.PI*2,me=Math.cos(Zt)*tt,oe=Math.sin(Zt)*tt;Kt.push(me,oe,0)}const he=[];for(let te=0;te<Kt.length;te+=3)he.push(new V(Kt[te],Kt[te+1],Kt[te+2]));if(he.length>=2){he.push(he[0].clone());const te=new jt(Nt),Zt=new ci({color:te,transparent:$t.a<1,opacity:$t.a}),me=new mr(he),oe=m/10*.01,ge=new Ns(me,he.length*2,oe,8,!1);new We(ge,Zt)}}const C=new Zi,x=new Zi;if(y&&zt&&ue.a>0){const Kt=zt?new jt(zt):new jt(1,1,1),Qt=new ci({color:Kt,transparent:ue.a<1||ue.a===0,opacity:ue.a}),he=15;for(let te=-90;te<=90;te+=he){const Zt=[];for(let oe=0;oe<=64;oe++){const ge=oe/64*360-180,Qe=ur(te,ge);Zt.push(Qe.x*tt,Qe.y*tt,Qe.z*tt)}if(Zt&&Zt.length>=6){const oe=[];for(let ge=0;ge<Zt.length;ge+=3)oe.push(new V(Zt[ge],Zt[ge+1],Zt[ge+2]));if(oe.length>=2){const ge=new mr(oe),Qe=L/10*.01,on=new Ns(ge,oe.length*2,Qe,8,!1),gn=new We(on,Qt);gn.renderOrder=0,x.add(gn)}}}for(let te=-180;te<180;te+=he){const Zt=[];for(let oe=0;oe<=64;oe++){const ge=oe/64*180-90,Qe=ur(ge,te);Zt.push(Qe.x*tt,Qe.y*tt,Qe.z*tt)}if(Zt&&Zt.length>=6){const oe=[];for(let ge=0;ge<Zt.length;ge+=3)oe.push(new V(Zt[ge],Zt[ge+1],Zt[ge+2]));if(oe.length>=2){const ge=new mr(oe),Qe=L/10*.01,on=new Ns(ge,oe.length*2,Qe,8,!1),gn=new We(on,Qt);gn.renderOrder=0,x.add(gn)}}}}let z=null,W=[];const J=async()=>{try{b(!0);const Kt=await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/50m/physical/ne_50m_land.json");if(!Kt.ok)throw new Error("Failed to load land data");const Qt=await Kt.json();for(;C.children.length>0;)C.remove(C.children[0]);if(d&&h&&$t.a>0){const tn=new jt(Nt),Bn=new ci({color:tn,transparent:$t.a<1,opacity:$t.a,depthTest:!0,depthWrite:!0}),De=Ud(),an=Dd().projection(De);let qe=0,Be=0;Qt.features.forEach(Ve=>{var Y,H,X;const vn=((Y=Ve.properties)==null?void 0:Y.featurecla)||((H=Ve.properties)==null?void 0:H.type)||"",ei=((X=Ve.properties)==null?void 0:X.name)||"";if(vn.toLowerCase().includes("graticule")||vn.toLowerCase().includes("grid")||vn.toLowerCase().includes("line")||ei.toLowerCase().includes("graticule")||ei.toLowerCase().includes("grid")||ei.toLowerCase().includes("line")){Be++;return}qe++;const Mi=an(Ve);if(!Mi||(Mi.match(/[ML][^MLZ]*/g)||[]).length===0)return;const E=Ve.geometry;if(!E||!E.coordinates)return;const O=xt=>{if(xt.length<2)return;const At=ew(xt,S),pt=[];if(At.forEach(Mt=>{const[Tt,Ht]=Mt,Wt=ur(Ht,Tt);pt.push(Wt.x*tt,Wt.y*tt,Wt.z*tt)}),pt&&pt.length>=6){const Mt=[];for(let Tt=0;Tt<pt.length;Tt+=3)Mt.push(new V(pt[Tt],pt[Tt+1],pt[Tt+2]));if(Mt.length>0&&Mt[0].distanceTo(Mt[Mt.length-1])>.001&&Mt.push(Mt[0].clone()),Mt.length>=2){const Tt=new mr(Mt),Ht=m/10*.01,Wt=new Ns(Tt,Mt.length*2,Ht,8,!1),It=new We(Wt,Bn);It.renderOrder=0,C.add(It)}}};E.type==="Polygon"&&E.coordinates.length>0?O(E.coordinates[0]):E.type==="MultiPolygon"&&E.coordinates.forEach(xt=>{xt.length>0&&O(xt[0])})}),console.log(`[Globe] Processed ${qe} land features, skipped ${Be} grid features`)}const he=2048,te=1024,Zt=document.createElement("canvas");Zt.width=he,Zt.height=te;const me=Zt.getContext("2d",{willReadFrequently:!0});if(!me)throw new Error("Canvas not supported");const oe=Ud().fitSize([he,te],{type:"Sphere"}),ge=Dd().projection(oe).context(me);me.fillStyle="#000",me.fillRect(0,0,he,te),me.fillStyle="#fff",me.beginPath(),Qt.features.forEach(tn=>{ge(tn)}),me.fill();const on=me.getImageData(0,0,he,te).data,gn=(tn,Bn)=>{const De=Math.round((tn+180)/360*he)%he,an=Math.round((90-Bn)/180*te),Be=(Math.max(0,Math.min(te-1,an))*he+De)*4;return on[Be]>128};if(i==="solid"){const De=document.createElement("canvas");De.width=1024,De.height=512;const an=De.getContext("2d"),qe=an.createImageData(1024,512),Be=qe.data,Ve=Math.round(ie.r*255),vn=Math.round(ie.g*255),ei=Math.round(ie.b*255),Mi=Math.round((ie.a||1)*255);for(let Y=0;Y<512;Y++)for(let H=0;H<1024;H++){const X=H/1024,xt=Y/512;let At=(X-.25)*360;At=((At+180)%360+360)%360-180;const pt=(xt-.5)*180,Mt=w||gn(At,pt),Tt=(Y*1024+H)*4;Mt?(Be[Tt]=Ve,Be[Tt+1]=vn,Be[Tt+2]=ei,Be[Tt+3]=Mi):Be[Tt+3]=0}an.putImageData(qe,0,0);const Vn=new kM(De);Vn.flipY=!1,Vn.needsUpdate=!0;const E=new Is(tt*1.002,64,64),O=new ci({map:Vn,transparent:!0});z=new We(E,O),Q.add(z)}else{const tn=[],Bn=N*.08;for(let De=-90;De<=90;De+=Bn){const an=Math.abs(De)*Math.PI/180,qe=Math.cos(an),Be=qe>.01?Bn/Math.max(.3,qe):360;for(let Ve=-180;Ve<180;Ve+=Be)(w||gn(Ve,De))&&tn.push([Ve,De])}if(tn.length>0){const De=new Is(.01*I,4,4),an=Et?new jt(Et):new jt(.6,.6,.6),qe=new ci({color:an,transparent:ce.a<1||ce.a===0,opacity:ce.a}),Be=new OM(De,qe,tn.length),Ve=new Se;for(let vn=0;vn<tn.length;vn++){const[ei,Mi]=tn[vn],Vn=ur(Mi,ei);Ve.makeScale(1,1,1),Ve.setPosition(Vn.x*tt,Vn.y*tt,Vn.z*tt),Be.setMatrixAt(vn,Ve)}Be.instanceMatrix.needsUpdate=!0,z=Be,Q.add(z)}}ut(),ot.render(Ut,bt),ht.style.opacity="1",ht.style.visibility="visible",b(!1)}catch{P("Failed to load land map data"),b(!1)}},ut=()=>{if(W.forEach(Kt=>Q.remove(Kt)),W=[],a.markers&&a.markers.length>0){const Kt=.01*k,Qt=new Is(Kt,16,16),he=Ot?new jt(Ot):new jt(1,1,1),te=new ci({color:he});a.markers.forEach(Zt=>{if(!Zt||typeof Zt.lat!="number"||typeof Zt.lng!="number")return;const me=ur(Zt.lat,Zt.lng),oe=new We(Qt,te.clone());oe.position.set(me.x*tt,me.y*tt,me.z*tt),Q.add(oe),W.push(oe)})}},st=u*Math.PI/180,q=c*Math.PI/180,K={x:st,y:q},ct={x:st,y:q},mt={x:0,y:0};let ft=!1,dt=!1,Pt=0,Dt=0,kt=null;const F=G===0?1:_i(G,0,1,.4,.03),gt=_i(G,0,1,.7,.96),Q=new Zi;Q.rotation.y=st,Q.rotation.x=q,Ut.add(Q),Q.add(qt),y&&g&&ue.a>0&&Q.add(x),Q.add(C),W.forEach(Kt=>Q.add(Kt));const _t=()=>{let Kt=!1;const Qt=.01;!ft&&R!==0&&(!o||!dt)&&(ct.x+=R*.01),!ft&&G>0&&(Math.abs(mt.x)>Qt||Math.abs(mt.y)>Qt?(ct.x+=mt.x,ct.y+=mt.y,ct.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,ct.y)),mt.x*=gt,mt.y*=gt):(mt.x=0,mt.y=0));const he=ct.x-K.x,te=ct.y-K.y;(Math.abs(he)>Qt||Math.abs(te)>Qt||R!==0||ft)&&(K.x+=he*F,K.y+=te*F,K.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,K.y)),Kt=!0),(Kt||R!==0||ft)&&(Q.rotation.y=K.x,Q.rotation.x=K.y,ot.render(Ut,bt));const Zt=Math.abs(mt.x)>Qt||Math.abs(mt.y)>Qt,me=Math.abs(he)>Qt||Math.abs(te)>Qt;ft||R!==0||Zt||me?kt=requestAnimationFrame(_t):kt=null},yt=()=>{kt===null&&(kt=requestAnimationFrame(_t))};R!==0&&yt();const at=Kt=>{ft=!0,mt.x=0,mt.y=0,Pt=Kt.clientX,Dt=Kt.clientY,yt();const Qt=te=>{const Zt=Q1(p),me=te.clientX-Pt,oe=te.clientY-Dt;ct.x+=me*Zt,ct.y+=oe*Zt,ct.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,ct.y)),mt.x=me*Zt*.3,mt.y=oe*Zt*.3,Pt=te.clientX,Dt=te.clientY},he=()=>{document.removeEventListener("mousemove",Qt),document.removeEventListener("mouseup",he),ft=!1};document.addEventListener("mousemove",Qt),document.addEventListener("mouseup",he)};ht.addEventListener("mousedown",at);const Lt=new dS,Ct=new Vt,Ee=Kt=>{if(!o)return;const Qt=ht.getBoundingClientRect();Ct.x=(Kt.clientX-Qt.left)/Qt.width*2-1,Ct.y=-((Kt.clientY-Qt.top)/Qt.height)*2+1,Lt.setFromCamera(Ct,bt),dt=Lt.intersectObject(qt).length>0};ht.addEventListener("mousemove",Ee);const fe=new ResizeObserver(()=>{const Kt=it.clientWidth||it.offsetWidth||800,Qt=it.clientHeight||it.offsetHeight||600;bt.aspect=Kt/Qt,bt.updateProjectionMatrix(),ot.setSize(Kt,Qt);const he=2.5/$;bt.position.set(0,0,he),bt.lookAt(0,0,0),ot.render(Ut,bt)});return fe.observe(it),J(),()=>{kt!==null&&cancelAnimationFrame(kt),ht.removeEventListener("mousedown",at),ht.removeEventListener("mousemove",Ee),fe.disconnect(),ot.dispose(),it.removeChild(ht)}},[n,t,e,i,s,w,D,A,v,r,o,a,l,c,u,f,h,d,g,y,m,p,S,R,N,I,k,$]);const rt={...M,position:"relative",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return T?j.jsx("div",{style:rt,children:j.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minWidth:0,minHeight:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#ffffff",textAlign:"center",padding:"16px",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},children:[j.jsx("div",{style:{fontSize:"16px",fontWeight:600},children:"Error loading Earth visualization"}),j.jsx("div",{style:{fontSize:"13px",opacity:.7,marginTop:"4px"},children:T})]})}):j.jsx("div",{ref:_,style:rt})}const Sg=n=>n.toLocaleString("en-US"),Fd='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';function iw(){const[n,t]=et.useState(null),[e,i]=et.useState("0");return et.useEffect(()=>{let s=!0;const r=()=>fetch("/api/stats").then(a=>a.ok?a.json():null).then(a=>{a&&s&&t(a)}).catch(()=>{});fetch("/api/live").then(a=>a.ok?a.json():null).then(a=>{a&&s&&i(a.n)}).catch(()=>{}),r();const o=setInterval(r,3e4);return()=>{s=!1,clearInterval(o)}},[]),{stats:n,live:e}}function sw({to:n,dec:t=0,suffix:e=""}){const[i,s]=et.useState(0),r=Od.useRef(null);et.useEffect(()=>{const a=r.current;if(!a||n==null)return;if(matchMedia("(prefers-reduced-motion: reduce)").matches){s(n);return}const l=new IntersectionObserver(c=>{if(!c[0].isIntersecting)return;l.disconnect();const u=performance.now(),f=900;(function h(d){const g=Math.min(1,(d-u)/f);s(n*(1-Math.pow(1-g,3))),g<1&&requestAnimationFrame(h)})(u)},{threshold:.3});return l.observe(a),()=>l.disconnect()},[n]);const o=t?i.toFixed(t):Sg(Math.round(i));return j.jsxs("span",{ref:r,children:[o,e]})}function To({label:n,value:t,dec:e=0,suffix:i=""}){return j.jsxs("div",{className:"stat",children:[j.jsx("span",{className:"sl",children:n}),j.jsx("span",{className:"sv",children:j.jsx(sw,{to:t,dec:e,suffix:i})})]})}const rw=[{h:"Cookieless by design",p:"Visitor identity is a daily-rotating hash of IP and user agent, kept entirely server-side. No cookies, no consent banners, no fingerprinting.",mono:"identity = hash(ip + ua + salt) / rotates daily"},{h:"353 B snippet",p:"One line of JavaScript loaded from your own domain. It never touches a third-party server, ever.",mono:"one line of JS / gzipped / server-relative"},{h:"One process",p:"Express, geoip-lite and SQLite in a single Node server. Nothing to orchestrate, no queue, no warehouse.",mono:"node server.js / SQLite on disk"},{h:"Realtime",p:"The live counter and the daily chart update on every request. No batch jobs, no polling, no stale numbers.",mono:"current visitors / updates per request"}],ow=[{n:"1",h:"Add the snippet",p:"Paste one script tag into any page. It beacons back to wherever it was loaded from."},{n:"2",h:"Visit your site",p:"Each request is counted as a real visit. No JavaScript is needed on the visitor side."},{n:"3",h:"Watch it live",p:"The dashboard updates with current visitors, sources, pages and devices."}];function aw(){const{stats:n,live:t}=iw(),[e,i]=et.useState(null);et.useEffect(()=>{let r=!0;return fetch("/api/countries").then(o=>o.ok?o.json():null).then(o=>{o&&r&&i(o.filter(a=>a.lat!=null))}).catch(()=>{}),()=>{r=!1}},[]);const s=(e||[]).map(r=>({lat:r.lat,lng:r.lng}));return j.jsxs("div",{className:"page",children:[j.jsx("nav",{children:j.jsxs("div",{className:"nav-inner",children:[j.jsxs("a",{className:"brand",href:"/",children:[j.jsx("i",{}),"peek"]}),j.jsxs("div",{className:"nav-links",children:[j.jsxs("span",{className:"chip",title:"Visitors on the dashboard right now",children:[j.jsx("i",{}),j.jsx("b",{children:t})," live"]}),j.jsx("a",{href:"https://github.com/trippusultan/peek",children:"GitHub"}),j.jsx("a",{href:"/dashboard",children:"Dashboard"})]})]})}),j.jsxs("header",{className:"hero",children:[j.jsx("div",{className:"hero-bg","aria-hidden":"true",children:j.jsx(Ey,{particleColor:"rgba(245,245,245,0.5)",backgroundColor:"#0a0a0a",maxSize:22,minSize:8,gap:6,influence:240})}),j.jsxs("div",{className:"hero-copy",children:[j.jsx("p",{className:"eyebrow",children:j.jsx(Iy,{text:"COOKIELESS WEB ANALYTICS",brightColor:"#f5f5f5",dimColor:"rgba(245,245,245,0.28)",maskSize:120})}),j.jsx(fy,{tag:"h1",text:"Website analytics without the cookies.",color:"#f5f5f5",font:{fontFamily:Fd,fontWeight:800,fontSize:"clamp(40px, 5vw, 64px)",lineHeight:"1.04em",letterSpacing:"-0.045em",textAlign:"left"},stagger:.02,startRotateY:-90,startOpacity:0,perspective:1400}),j.jsx("p",{className:"sub",children:"One process, one snippet, zero tracking scripts. Real visitors, private by default."}),j.jsxs("div",{className:"hero-ctas",children:[j.jsx(my,{label:"View dashboard",link:"/dashboard",fill:"#f5f5f5",textColor:"#0a0a0a",sweepColor:"#e8e8e8",sweepTextColor:"#0a0a0a",paddingX:26,paddingY:14,radius:8,border:!1,font:{fontFamily:Fd,fontWeight:650,fontSize:15,lineHeight:"1em",letterSpacing:"-0.01em",textAlign:"left"}}),j.jsx("a",{className:"btn btn-ghost",href:"https://github.com/trippusultan/peek",children:"GitHub"})]})]}),j.jsx("div",{className:"hero-art","aria-label":"The peek dashboard rendered as live ASCII art; move the cursor to reveal the real screenshot",children:j.jsx(My,{image:"/peek-dashboard.png",columns:130,invert:!1,contrast:1.1,inkColor:"#f5f5f5",reveal:!0,revealOptions:{size:190,softness:24},style:{width:"100%",height:"100%",borderRadius:16}})})]}),j.jsx("section",{className:"marquee","aria-hidden":"true",children:j.jsx(Ty,{text:"COOKIELESS WEB ANALYTICS",separator:"  /  ",textColor:"rgba(245,245,245,0.14)",speed:1.1,reversed:!1,waveFrequency:.02,waveHeight:9,width:"100%",height:84,className:"mq"})}),j.jsxs("section",{className:"product container",children:[j.jsx(Ry,{color:"#3a3a3a",glowColor:"rgba(245,245,245,0.55)",glowIntensity:3,chaos:2.5,thickness:1.5,speed:.8,borderRadius:18,children:j.jsxs("div",{className:"browser",children:[j.jsxs("div",{className:"b-bar",children:[j.jsx("span",{className:"b-dot"}),j.jsx("span",{className:"b-dot"}),j.jsx("span",{className:"b-dot"}),j.jsx("span",{className:"b-url",children:"peek-a6sg.onrender.com/dashboard"})]}),j.jsx("img",{src:"/peek-dashboard.png",alt:"The peek dashboard: visitor trend chart, four KPI cards and a traffic table",width:"1440",height:"900",fetchpriority:"high"})]})}),j.jsx("p",{className:"pcap",children:"The live dashboard. Same screen behind the auth gate."})]}),j.jsx("section",{className:"stats",children:j.jsxs("div",{className:"stats-inner",children:[j.jsx(To,{label:"Current visitors",value:n?n.live:0}),j.jsx(To,{label:"Pageviews (7d)",value:n?n.pv:0}),j.jsx(To,{label:"Visitors (7d)",value:n?n.uv:0}),j.jsx(To,{label:"Bounce rate (7d)",value:n?n.bounce:0,dec:1,suffix:"%"})]})}),j.jsxs("section",{className:"features container",children:[j.jsx("h2",{children:"Built to ask for nothing."}),j.jsx("div",{className:"fgrid",children:rw.map((r,o)=>j.jsxs("div",{className:"fcell",children:[j.jsx(Py,{title:r.h,textColor:"#f5f5f5",hoverColor:"#f5f5f5",fontSize:19,fontWeight:700,duration:.3}),j.jsx("p",{children:r.p}),j.jsx("div",{className:"mono",children:r.mono})]},r.h))})]}),j.jsxs("section",{className:"how container",children:[j.jsx("h2",{children:"Live in three steps."}),j.jsx("div",{className:"steps",children:ow.map(r=>j.jsxs("div",{className:"step",children:[j.jsx("span",{className:"n",children:r.n}),j.jsxs("div",{children:[j.jsx("h3",{children:r.h}),j.jsx("p",{children:r.p}),r.n==="1"&&j.jsx("pre",{className:"code",children:j.jsx("code",{children:'<script defer data-site="your-site-name" src="https://YOUR-RENDER-URL/s.js"><\/script>'})})]})]},r.n))})]}),j.jsxs("section",{className:"globe-section container",children:[j.jsx("h2",{children:"Traffic around the world."}),j.jsxs("div",{className:"globe-wrap",children:[j.jsx("div",{className:"globe","aria-label":"3D globe with markers at the countries your visitors came from",children:j.jsx(nw,{speed:1.6,dots:{color:"#3a3a3a",size:5,density:7,allDots:!1},fill:"dots",fillColor:"#f5f5f5",oceanColor:"#0a0a0a",outlineColor:"#2a2a2a",showOutline:!0,graticuleColor:"#2e2e2e",showGrid:!0,markerConfig:{markers:s,color:"#f5f5f5",size:34},initialLatitude:20,initialLongitude:-10,stopOnHover:!0})}),j.jsxs("div",{className:"country-list",children:[(e||[]).slice(0,8).map((r,o)=>j.jsxs("div",{className:"crow",children:[j.jsx("span",{className:"cn",children:String(o+1).padStart(2,"0")}),j.jsx("span",{className:"nm2",children:r.name}),j.jsx("span",{className:"cv",children:Sg(r.pv)})]},r.code)),(!e||e.length===0)&&j.jsx("p",{className:"empty",children:"No traffic yet. Visit the landing page to light up your first marker."})]})]})]}),j.jsx("section",{className:"white",children:j.jsxs("div",{className:"w-inner",children:[j.jsx("h2",{children:"Your data stays yours."}),j.jsx("p",{className:"w-statement",children:"No account, no cloud, no cookies, no third-party scripts. Every record lives in a SQLite file on your own server."}),j.jsx("div",{className:"w-cta",children:j.jsx(Ly,{text:"View dashboard",link:"/dashboard",textColor:"#f5f5f5",shineColor:"#0a0a0a",speed:1.8,style:{background:"#0a0a0a",padding:"14px 30px",borderRadius:8,fontSize:16,fontWeight:650}})}),j.jsx("figure",{className:"w-phone",children:j.jsx("img",{src:"/peek-mobile.png",alt:"The peek dashboard on a phone",width:"390",height:"844",loading:"lazy"})})]})}),j.jsx("footer",{children:j.jsxs("div",{className:"foot",children:[j.jsx("span",{children:"peek - privacy-first analytics"}),j.jsxs("span",{children:["built by ",j.jsx("a",{href:"https://github.com/trippusultan",children:"trippusultan"})]})]})})]})}Eg(document.getElementById("root")).render(j.jsx(Od.StrictMode,{children:j.jsx(aw,{})}));
