import{r as ut,j as J,R as Bp,c as C0}from"./client-DPVzX2tD.js";const Vp=ut.createContext({});function sa(n){const t=ut.useRef(null);return t.current===null&&(t.current=n()),t.current}const Ru=ut.createContext(null),Ia=ut.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function P0(n=!0){const t=ut.useContext(Ru);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:i,register:s}=t,r=ut.useId();ut.useEffect(()=>{n&&s(r)},[n]);const o=ut.useCallback(()=>n&&i&&i(r),[r,i,n]);return!e&&i?[!1,o]:[!0]}const Cu=typeof window<"u",Pu=Cu?ut.useLayoutEffect:ut.useEffect,_n=n=>n;let zp=_n;function Du(n){let t;return()=>(t===void 0&&(t=n()),t)}const ns=(n,t,e)=>{const i=t-n;return i===0?1:(e-n)/i},Zn=n=>n*1e3,jn=n=>n/1e3,D0={useManualTiming:!1};function L0(n){let t=new Set,e=new Set,i=!1,s=!1;const r=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){r.has(c)&&(l.schedule(c),n()),c(o)}const l={schedule:(c,u=!1,f=!1)=>{const d=f&&i?t:e;return u&&r.add(c),d.has(c)||d.add(c),c},cancel:c=>{e.delete(c),r.delete(c)},process:c=>{if(o=c,i){s=!0;return}i=!0,[t,e]=[e,t],t.forEach(a),t.clear(),i=!1,s&&(s=!1,l.process(c))}};return l}const lo=["read","resolveKeyframes","update","preRender","render","postRender"],I0=40;function kp(n,t){let e=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>e=!0,o=lo.reduce((p,M)=>(p[M]=L0(r),p),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:f,postRender:h}=o,d=()=>{const p=performance.now();e=!1,s.delta=i?1e3/60:Math.max(Math.min(p-s.timestamp,I0),1),s.timestamp=p,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),u.process(s),f.process(s),h.process(s),s.isProcessing=!1,e&&t&&(i=!1,n(d))},g=()=>{e=!0,i=!0,s.isProcessing||n(d)};return{schedule:lo.reduce((p,M)=>{const S=o[M];return p[M]=(y,b=!1,E=!1)=>(e||g(),S.schedule(y,b,E)),p},{}),cancel:p=>{for(let M=0;M<lo.length;M++)o[lo[M]].cancel(p)},state:s,steps:o}}const{schedule:Se,cancel:gi,state:Xe,steps:Xa}=kp(typeof requestAnimationFrame<"u"?requestAnimationFrame:_n,!0),Gp=ut.createContext({strict:!1}),Lh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},js={};for(const n in Lh)js[n]={isEnabled:t=>Lh[n].some(e=>!!t[e])};function N0(n){for(const t in n)js[t]={...js[t],...n[t]}}const U0=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ra(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||U0.has(n)}let Hp=n=>!ra(n);function F0(n){n&&(Hp=t=>t.startsWith("on")?!ra(t):n(t))}try{F0(require("@emotion/is-prop-valid").default)}catch{}function O0(n,t,e){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(Hp(s)||e===!0&&ra(s)||!t&&!ra(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}function B0(n){if(typeof Proxy>"u")return n;const t=new Map,e=(...i)=>n(...i);return new Proxy(e,{get:(i,s)=>s==="create"?n:(t.has(s)||t.set(s,n(s)),t.get(s))})}const Na=ut.createContext({});function qr(n){return typeof n=="string"||Array.isArray(n)}function Ua(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Lu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Iu=["initial",...Lu];function Fa(n){return Ua(n.animate)||Iu.some(t=>qr(n[t]))}function Wp(n){return!!(Fa(n)||n.variants)}function V0(n,t){if(Fa(n)){const{initial:e,animate:i}=n;return{initial:e===!1||qr(e)?e:void 0,animate:qr(i)?i:void 0}}return n.inherit!==!1?t:{}}function z0(n){const{initial:t,animate:e}=V0(n,ut.useContext(Na));return ut.useMemo(()=>({initial:t,animate:e}),[Ih(t),Ih(e)])}function Ih(n){return Array.isArray(n)?n.join(" "):n}const k0=Symbol.for("motionComponentSymbol");function Bs(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function G0(n,t,e){return ut.useCallback(i=>{i&&n.onMount&&n.onMount(i),t&&(i?t.mount(i):t.unmount()),e&&(typeof e=="function"?e(i):Bs(e)&&(e.current=i))},[t])}const Nu=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),H0="framerAppearId",Xp="data-"+Nu(H0),{schedule:Uu}=kp(queueMicrotask,!1),qp=ut.createContext({});function W0(n,t,e,i,s){var r,o;const{visualElement:a}=ut.useContext(Na),l=ut.useContext(Gp),c=ut.useContext(Ru),u=ut.useContext(Ia).reducedMotion,f=ut.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(n,{visualState:t,parent:a,props:e,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const h=f.current,d=ut.useContext(qp);h&&!h.projection&&s&&(h.type==="html"||h.type==="svg")&&X0(f.current,e,s,d);const g=ut.useRef(!1);ut.useInsertionEffect(()=>{h&&g.current&&h.update(e,c)});const x=e[Xp],m=ut.useRef(!!x&&!(!((r=window.MotionHandoffIsComplete)===null||r===void 0)&&r.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return Pu(()=>{h&&(g.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),Uu.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())}),ut.useEffect(()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,x)}),m.current=!1))}),h}function X0(n,t,e,i){const{layoutId:s,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;n.projection=new e(n.latestValues,t["data-framer-portal-id"]?void 0:Yp(n.parent)),n.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!o||a&&Bs(a),visualElement:n,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Yp(n){if(n)return n.options.allowProjection!==!1?n.projection:Yp(n.parent)}function q0({preloadedFeatures:n,createVisualElement:t,useRender:e,useVisualState:i,Component:s}){var r,o;n&&N0(n);function a(c,u){let f;const h={...ut.useContext(Ia),...c,layoutId:Y0(c)},{isStatic:d}=h,g=z0(c),x=i(c,d);if(!d&&Cu){$0();const m=K0(h);f=m.MeasureLayout,g.visualElement=W0(s,x,h,t,m.ProjectionNode)}return J.jsxs(Na.Provider,{value:g,children:[f&&g.visualElement?J.jsx(f,{visualElement:g.visualElement,...h}):null,e(s,c,G0(x,g.visualElement,u),x,d,g.visualElement)]})}a.displayName=`motion.${typeof s=="string"?s:`create(${(o=(r=s.displayName)!==null&&r!==void 0?r:s.name)!==null&&o!==void 0?o:""})`}`;const l=ut.forwardRef(a);return l[k0]=s,l}function Y0({layoutId:n}){const t=ut.useContext(Vp).id;return t&&n!==void 0?t+"-"+n:n}function $0(n,t){ut.useContext(Gp).strict}function K0(n){const{drag:t,layout:e}=js;if(!t&&!e)return{};const i={...t,...e};return{MeasureLayout:t!=null&&t.isEnabled(n)||e!=null&&e.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Z0=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fu(n){return typeof n!="string"||n.includes("-")?!1:!!(Z0.indexOf(n)>-1||/[A-Z]/u.test(n))}function Nh(n){const t=[{},{}];return n==null||n.values.forEach((e,i)=>{t[0][i]=e.get(),t[1][i]=e.getVelocity()}),t}function Ou(n,t,e,i){if(typeof t=="function"){const[s,r]=Nh(i);t=t(e!==void 0?e:n.custom,s,r)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[s,r]=Nh(i);t=t(e!==void 0?e:n.custom,s,r)}return t}const ic=n=>Array.isArray(n),j0=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),J0=n=>ic(n)?n[n.length-1]||0:n,De=n=>!!(n&&n.getVelocity);function $o(n){const t=De(n)?n.get():n;return j0(t)?t.toValue():t}function Q0({scrapeMotionValuesFromProps:n,createRenderState:t,onUpdate:e},i,s,r){const o={latestValues:tv(i,s,r,n),renderState:t()};return e&&(o.onMount=a=>e({props:i,current:a,...o}),o.onUpdate=a=>e(a)),o}const $p=n=>(t,e)=>{const i=ut.useContext(Na),s=ut.useContext(Ru),r=()=>Q0(n,t,i,s);return e?r():sa(r)};function tv(n,t,e,i){const s={},r=i(n,{});for(const h in r)s[h]=$o(r[h]);let{initial:o,animate:a}=n;const l=Fa(n),c=Wp(n);t&&c&&!l&&n.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let u=e?e.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!Ua(f)){const h=Array.isArray(f)?f:[f];for(let d=0;d<h.length;d++){const g=Ou(n,h[d]);if(g){const{transitionEnd:x,transition:m,...p}=g;for(const M in p){let S=p[M];if(Array.isArray(S)){const y=u?S.length-1:0;S=S[y]}S!==null&&(s[M]=S)}for(const M in x)s[M]=x[M]}}}return s}const ar=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ls=new Set(ar),Kp=n=>t=>typeof t=="string"&&t.startsWith(n),Zp=Kp("--"),ev=Kp("var(--"),Bu=n=>ev(n)?nv.test(n.split("/*")[0].trim()):!1,nv=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,jp=(n,t)=>t&&typeof n=="number"?t.transform(n):n,vi=(n,t,e)=>e>t?t:e<n?n:e,lr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Yr={...lr,transform:n=>vi(0,1,n)},co={...lr,default:1},no=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Li=no("deg"),Jn=no("%"),Ut=no("px"),iv=no("vh"),sv=no("vw"),Uh={...Jn,parse:n=>Jn.parse(n)/100,transform:n=>Jn.transform(n*100)},rv={borderWidth:Ut,borderTopWidth:Ut,borderRightWidth:Ut,borderBottomWidth:Ut,borderLeftWidth:Ut,borderRadius:Ut,radius:Ut,borderTopLeftRadius:Ut,borderTopRightRadius:Ut,borderBottomRightRadius:Ut,borderBottomLeftRadius:Ut,width:Ut,maxWidth:Ut,height:Ut,maxHeight:Ut,top:Ut,right:Ut,bottom:Ut,left:Ut,padding:Ut,paddingTop:Ut,paddingRight:Ut,paddingBottom:Ut,paddingLeft:Ut,margin:Ut,marginTop:Ut,marginRight:Ut,marginBottom:Ut,marginLeft:Ut,backgroundPositionX:Ut,backgroundPositionY:Ut},ov={rotate:Li,rotateX:Li,rotateY:Li,rotateZ:Li,scale:co,scaleX:co,scaleY:co,scaleZ:co,skew:Li,skewX:Li,skewY:Li,distance:Ut,translateX:Ut,translateY:Ut,translateZ:Ut,x:Ut,y:Ut,z:Ut,perspective:Ut,transformPerspective:Ut,opacity:Yr,originX:Uh,originY:Uh,originZ:Ut},Fh={...lr,transform:Math.round},Vu={...rv,...ov,zIndex:Fh,size:Ut,fillOpacity:Yr,strokeOpacity:Yr,numOctaves:Fh},av={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lv=ar.length;function cv(n,t,e){let i="",s=!0;for(let r=0;r<lv;r++){const o=ar[r],a=n[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||e){const c=jp(a,Vu[o]);if(!l){s=!1;const u=av[o]||o;i+=`${u}(${c}) `}e&&(t[o]=c)}}return i=i.trim(),e?i=e(t,s?"":i):s&&(i="none"),i}function zu(n,t,e){const{style:i,vars:s,transformOrigin:r}=n;let o=!1,a=!1;for(const l in t){const c=t[l];if(ls.has(l)){o=!0;continue}else if(Zp(l)){s[l]=c;continue}else{const u=jp(c,Vu[l]);l.startsWith("origin")?(a=!0,r[l]=u):i[l]=u}}if(t.transform||(o||e?i.transform=cv(t,n.transform,e):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;i.transformOrigin=`${l} ${c} ${u}`}}const uv={offset:"stroke-dashoffset",array:"stroke-dasharray"},hv={offset:"strokeDashoffset",array:"strokeDasharray"};function fv(n,t,e=1,i=0,s=!0){n.pathLength=1;const r=s?uv:hv;n[r.offset]=Ut.transform(-i);const o=Ut.transform(t),a=Ut.transform(e);n[r.array]=`${o} ${a}`}function Oh(n,t,e){return typeof n=="string"?n:Ut.transform(t+e*n)}function dv(n,t,e){const i=Oh(t,n.x,n.width),s=Oh(e,n.y,n.height);return`${i} ${s}`}function ku(n,{attrX:t,attrY:e,attrScale:i,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f){if(zu(n,c,f),u){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:h,style:d,dimensions:g}=n;h.transform&&(g&&(d.transform=h.transform),delete h.transform),g&&(s!==void 0||r!==void 0||d.transform)&&(d.transformOrigin=dv(g,s!==void 0?s:.5,r!==void 0?r:.5)),t!==void 0&&(h.x=t),e!==void 0&&(h.y=e),i!==void 0&&(h.scale=i),o!==void 0&&fv(h,o,a,l,!1)}const Gu=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Jp=()=>({...Gu(),attrs:{}}),Hu=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Qp(n,{style:t,vars:e},i,s){Object.assign(n.style,t,s&&s.getProjectionStyles(i));for(const r in e)n.style.setProperty(r,e[r])}const tm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function em(n,t,e,i){Qp(n,t,void 0,i);for(const s in t.attrs)n.setAttribute(tm.has(s)?s:Nu(s),t.attrs[s])}const oa={};function pv(n){Object.assign(oa,n)}function nm(n,{layout:t,layoutId:e}){return ls.has(n)||n.startsWith("origin")||(t||e!==void 0)&&(!!oa[n]||n==="opacity")}function Wu(n,t,e){var i;const{style:s}=n,r={};for(const o in s)(De(s[o])||t.style&&De(t.style[o])||nm(o,n)||((i=e==null?void 0:e.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(r[o]=s[o]);return r}function im(n,t,e){const i=Wu(n,t,e);for(const s in n)if(De(n[s])||De(t[s])){const r=ar.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=n[s]}return i}function mv(n,t){try{t.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Bh=["x","y","width","height","cx","cy","r"],gv={useVisualState:$p({scrapeMotionValuesFromProps:im,createRenderState:Jp,onUpdate:({props:n,prevProps:t,current:e,renderState:i,latestValues:s})=>{if(!e)return;let r=!!n.drag;if(!r){for(const a in s)if(ls.has(a)){r=!0;break}}if(!r)return;let o=!t;if(t)for(let a=0;a<Bh.length;a++){const l=Bh[a];n[l]!==t[l]&&(o=!0)}o&&Se.read(()=>{mv(e,i),Se.render(()=>{ku(i,s,Hu(e.tagName),n.transformTemplate),em(e,i)})})}})},vv={useVisualState:$p({scrapeMotionValuesFromProps:Wu,createRenderState:Gu})};function sm(n,t,e){for(const i in t)!De(t[i])&&!nm(i,e)&&(n[i]=t[i])}function _v({transformTemplate:n},t){return ut.useMemo(()=>{const e=Gu();return zu(e,t,n),Object.assign({},e.vars,e.style)},[t])}function xv(n,t){const e=n.style||{},i={};return sm(i,e,n),Object.assign(i,_v(n,t)),i}function yv(n,t){const e={},i=xv(n,t);return n.drag&&n.dragListener!==!1&&(e.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(e.tabIndex=0),e.style=i,e}function Mv(n,t,e,i){const s=ut.useMemo(()=>{const r=Jp();return ku(r,t,Hu(i),n.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(n.style){const r={};sm(r,n.style,n),s.style={...r,...s.style}}return s}function Sv(n=!1){return(e,i,s,{latestValues:r},o)=>{const l=(Fu(e)?Mv:yv)(i,r,o,e),c=O0(i,typeof e=="string",n),u=e!==ut.Fragment?{...c,...l,ref:s}:{},{children:f}=i,h=ut.useMemo(()=>De(f)?f.get():f,[f]);return ut.createElement(e,{...u,children:h})}}function Ev(n,t){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const o={...Fu(i)?gv:vv,preloadedFeatures:n,useRender:Sv(s),createVisualElement:t,Component:i};return q0(o)}}function rm(n,t){if(!Array.isArray(t))return!1;const e=t.length;if(e!==n.length)return!1;for(let i=0;i<e;i++)if(t[i]!==n[i])return!1;return!0}function Oa(n,t,e){const i=n.getProps();return Ou(i,t,e!==void 0?e:i.custom,n)}const bv=Du(()=>window.ScrollTimeline!==void 0);class Tv{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,e){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=e}attachTimeline(t,e){const i=this.animations.map(s=>{if(bv()&&s.attachTimeline)return s.attachTimeline(t);if(typeof e=="function")return e(s)});return()=>{i.forEach((s,r)=>{s&&s(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let e=0;e<this.animations.length;e++)t=Math.max(t,this.animations[e].duration);return t}runAll(t){this.animations.forEach(e=>e[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class om extends Tv{then(t,e){return Promise.all(this.animations).then(t).catch(e)}}function Xu(n,t){return n?n[t]||n.default||n:void 0}const aa=2e4;function qu(n){let t=0;const e=50;let i=n.next(t);for(;!i.done&&t<aa;)t+=e,i=n.next(t);return t>=aa?1/0:t}function Av(n,t=100,e){const i=e({...n,keyframes:[0,t]}),s=Math.min(qu(i),aa);return{type:"keyframes",ease:r=>i.next(s*r).value/t,duration:jn(s)}}function Ba(n){return typeof n=="function"}function Vh(n,t){n.timeline=t,n.onfinish=null}const Yu=n=>Array.isArray(n)&&typeof n[0]=="number",wv={linearEasing:void 0};function Rv(n,t){const e=Du(n);return()=>{var i;return(i=wv[t])!==null&&i!==void 0?i:e()}}const la=Rv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),am=(n,t,e=10)=>{let i="";const s=Math.max(Math.round(t/e),2);for(let r=0;r<s;r++)i+=n(ns(0,s-1,r))+", ";return`linear(${i.substring(0,i.length-2)})`};function lm(n){return!!(typeof n=="function"&&la()||!n||typeof n=="string"&&(n in sc||la())||Yu(n)||Array.isArray(n)&&n.every(lm))}const wr=([n,t,e,i])=>`cubic-bezier(${n}, ${t}, ${e}, ${i})`,sc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:wr([0,.65,.55,1]),circOut:wr([.55,0,1,.45]),backIn:wr([.31,.01,.66,-.59]),backOut:wr([.33,1.53,.69,.99])};function cm(n,t){if(n)return typeof n=="function"&&la()?am(n,t):Yu(n)?wr(n):Array.isArray(n)?n.map(e=>cm(e,t)||sc.easeOut):sc[n]}const Fn={x:!1,y:!1};function um(){return Fn.x||Fn.y}function hm(n,t,e){var i;if(n instanceof Element)return[n];if(typeof n=="string"){let s=document;t&&(s=t.current);const r=(i=e==null?void 0:e[n])!==null&&i!==void 0?i:s.querySelectorAll(n);return r?Array.from(r):[]}return Array.from(n)}function fm(n,t){const e=hm(n),i=new AbortController,s={passive:!0,...t,signal:i.signal};return[e,s,()=>i.abort()]}function zh(n){return t=>{t.pointerType==="touch"||um()||n(t)}}function Cv(n,t,e={}){const[i,s,r]=fm(n,e),o=zh(a=>{const{target:l}=a,c=t(a);if(typeof c!="function"||!l)return;const u=zh(f=>{c(f),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,s)});return i.forEach(a=>{a.addEventListener("pointerenter",o,s)}),r}const dm=(n,t)=>t?n===t?!0:dm(n,t.parentElement):!1,$u=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,Pv=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Dv(n){return Pv.has(n.tagName)||n.tabIndex!==-1}const Rr=new WeakSet;function kh(n){return t=>{t.key==="Enter"&&n(t)}}function qa(n,t){n.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Lv=(n,t)=>{const e=n.currentTarget;if(!e)return;const i=kh(()=>{if(Rr.has(e))return;qa(e,"down");const s=kh(()=>{qa(e,"up")}),r=()=>qa(e,"cancel");e.addEventListener("keyup",s,t),e.addEventListener("blur",r,t)});e.addEventListener("keydown",i,t),e.addEventListener("blur",()=>e.removeEventListener("keydown",i),t)};function Gh(n){return $u(n)&&!um()}function Iv(n,t,e={}){const[i,s,r]=fm(n,e),o=a=>{const l=a.currentTarget;if(!Gh(a)||Rr.has(l))return;Rr.add(l);const c=t(a),u=(d,g)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),!(!Gh(d)||!Rr.has(l))&&(Rr.delete(l),typeof c=="function"&&c(d,{success:g}))},f=d=>{u(d,e.useGlobalTarget||dm(l,d.target))},h=d=>{u(d,!1)};window.addEventListener("pointerup",f,s),window.addEventListener("pointercancel",h,s)};return i.forEach(a=>{!Dv(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(e.useGlobalTarget?window:a).addEventListener("pointerdown",o,s),a.addEventListener("focus",c=>Lv(c,s),s)}),r}function Nv(n){return n==="x"||n==="y"?Fn[n]?null:(Fn[n]=!0,()=>{Fn[n]=!1}):Fn.x||Fn.y?null:(Fn.x=Fn.y=!0,()=>{Fn.x=Fn.y=!1})}const pm=new Set(["width","height","top","left","right","bottom",...ar]);let Ko;function Uv(){Ko=void 0}const Qn={now:()=>(Ko===void 0&&Qn.set(Xe.isProcessing||D0.useManualTiming?Xe.timestamp:performance.now()),Ko),set:n=>{Ko=n,queueMicrotask(Uv)}};function Ku(n,t){n.indexOf(t)===-1&&n.push(t)}function Va(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}class Zu{constructor(){this.subscriptions=[]}add(t){return Ku(this.subscriptions,t),()=>Va(this.subscriptions,t)}notify(t,e,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,e,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(t,e,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function mm(n,t){return t?n*(1e3/t):0}const Hh=30,Fv=n=>!isNaN(parseFloat(n));class Ov{constructor(t,e={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=Qn.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){this.current=t,this.updatedAt=Qn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Fv(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new Zu);const i=this.events[t].add(e);return t==="change"?()=>{i(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){!e||!this.passiveEffect?this.updateAndNotify(t,e):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,e,i){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Qn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Hh)return 0;const e=Math.min(this.updatedAt-this.prevUpdatedAt,Hh);return mm(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Js(n,t){return new Ov(n,t)}function Bv(n,t,e){n.hasValue(t)?n.getValue(t).set(e):n.addValue(t,Js(e))}function Vv(n,t){const e=Oa(n,t);let{transitionEnd:i={},transition:s={},...r}=e||{};r={...r,...i};for(const o in r){const a=J0(r[o]);Bv(n,o,a)}}function zv(n){return!!(De(n)&&n.add)}function rc(n,t){const e=n.getValue("willChange");if(zv(e))return e.add(t)}function gm(n){return n.props[Xp]}const vm=(n,t,e)=>(((1-3*e+3*t)*n+(3*e-6*t))*n+3*t)*n,kv=1e-7,Gv=12;function Hv(n,t,e,i,s){let r,o,a=0;do o=t+(e-t)/2,r=vm(o,i,s)-n,r>0?e=o:t=o;while(Math.abs(r)>kv&&++a<Gv);return o}function io(n,t,e,i){if(n===t&&e===i)return _n;const s=r=>Hv(r,0,1,n,e);return r=>r===0||r===1?r:vm(s(r),t,i)}const _m=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,xm=n=>t=>1-n(1-t),ym=io(.33,1.53,.69,.99),ju=xm(ym),Mm=_m(ju),Sm=n=>(n*=2)<1?.5*ju(n):.5*(2-Math.pow(2,-10*(n-1))),Ju=n=>1-Math.sin(Math.acos(n)),Em=xm(Ju),bm=_m(Ju),Tm=n=>/^0[^.\s]+$/u.test(n);function Wv(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Tm(n):!0}const Br=n=>Math.round(n*1e5)/1e5,Qu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Xv(n){return n==null}const qv=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,th=(n,t)=>e=>!!(typeof e=="string"&&qv.test(e)&&e.startsWith(n)||t&&!Xv(e)&&Object.prototype.hasOwnProperty.call(e,t)),Am=(n,t,e)=>i=>{if(typeof i!="string")return i;const[s,r,o,a]=i.match(Qu);return{[n]:parseFloat(s),[t]:parseFloat(r),[e]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Yv=n=>vi(0,255,n),Ya={...lr,transform:n=>Math.round(Yv(n))},ji={test:th("rgb","red"),parse:Am("red","green","blue"),transform:({red:n,green:t,blue:e,alpha:i=1})=>"rgba("+Ya.transform(n)+", "+Ya.transform(t)+", "+Ya.transform(e)+", "+Br(Yr.transform(i))+")"};function $v(n){let t="",e="",i="",s="";return n.length>5?(t=n.substring(1,3),e=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(t=n.substring(1,2),e=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),t+=t,e+=e,i+=i,s+=s),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const oc={test:th("#"),parse:$v,transform:ji.transform},Vs={test:th("hsl","hue"),parse:Am("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:e,alpha:i=1})=>"hsla("+Math.round(n)+", "+Jn.transform(Br(t))+", "+Jn.transform(Br(e))+", "+Br(Yr.transform(i))+")"},tn={test:n=>ji.test(n)||oc.test(n)||Vs.test(n),parse:n=>ji.test(n)?ji.parse(n):Vs.test(n)?Vs.parse(n):oc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ji.transform(n):Vs.transform(n)},Kv=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Zv(n){var t,e;return isNaN(n)&&typeof n=="string"&&(((t=n.match(Qu))===null||t===void 0?void 0:t.length)||0)+(((e=n.match(Kv))===null||e===void 0?void 0:e.length)||0)>0}const wm="number",Rm="color",jv="var",Jv="var(",Wh="${}",Qv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $r(n){const t=n.toString(),e=[],i={color:[],number:[],var:[]},s=[];let r=0;const a=t.replace(Qv,l=>(tn.test(l)?(i.color.push(r),s.push(Rm),e.push(tn.parse(l))):l.startsWith(Jv)?(i.var.push(r),s.push(jv),e.push(l)):(i.number.push(r),s.push(wm),e.push(parseFloat(l))),++r,Wh)).split(Wh);return{values:e,split:a,indexes:i,types:s}}function Cm(n){return $r(n).values}function Pm(n){const{split:t,types:e}=$r(n),i=t.length;return s=>{let r="";for(let o=0;o<i;o++)if(r+=t[o],s[o]!==void 0){const a=e[o];a===wm?r+=Br(s[o]):a===Rm?r+=tn.transform(s[o]):r+=s[o]}return r}}const t_=n=>typeof n=="number"?0:n;function e_(n){const t=Cm(n);return Pm(n)(t.map(t_))}const Bi={test:Zv,parse:Cm,createTransformer:Pm,getAnimatableNone:e_},n_=new Set(["brightness","contrast","saturate","opacity"]);function i_(n){const[t,e]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[i]=e.match(Qu)||[];if(!i)return n;const s=e.replace(i,"");let r=n_.has(t)?1:0;return i!==e&&(r*=100),t+"("+r+s+")"}const s_=/\b([a-z-]*)\(.*?\)/gu,ac={...Bi,getAnimatableNone:n=>{const t=n.match(s_);return t?t.map(i_).join(" "):n}},r_={...Vu,color:tn,backgroundColor:tn,outlineColor:tn,fill:tn,stroke:tn,borderColor:tn,borderTopColor:tn,borderRightColor:tn,borderBottomColor:tn,borderLeftColor:tn,filter:ac,WebkitFilter:ac},eh=n=>r_[n];function Dm(n,t){let e=eh(n);return e!==ac&&(e=Bi),e.getAnimatableNone?e.getAnimatableNone(t):void 0}const o_=new Set(["auto","none","0"]);function a_(n,t,e){let i=0,s;for(;i<n.length&&!s;){const r=n[i];typeof r=="string"&&!o_.has(r)&&$r(r).values.length&&(s=n[i]),i++}if(s&&e)for(const r of t)n[r]=Dm(e,s)}const Xh=n=>n===lr||n===Ut,qh=(n,t)=>parseFloat(n.split(", ")[t]),Yh=(n,t)=>(e,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return qh(s[1],t);{const r=i.match(/^matrix\((.+)\)$/u);return r?qh(r[1],n):0}},l_=new Set(["x","y","z"]),c_=ar.filter(n=>!l_.has(n));function u_(n){const t=[];return c_.forEach(e=>{const i=n.getValue(e);i!==void 0&&(t.push([e,i.get()]),i.set(e.startsWith("scale")?1:0))}),t}const Qs={width:({x:n},{paddingLeft:t="0",paddingRight:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),height:({y:n},{paddingTop:t="0",paddingBottom:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:Yh(4,13),y:Yh(5,14)};Qs.translateX=Qs.x;Qs.translateY=Qs.y;const ts=new Set;let lc=!1,cc=!1;function Lm(){if(cc){const n=Array.from(ts).filter(i=>i.needsMeasurement),t=new Set(n.map(i=>i.element)),e=new Map;t.forEach(i=>{const s=u_(i);s.length&&(e.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const s=e.get(i);s&&s.forEach(([r,o])=>{var a;(a=i.getValue(r))===null||a===void 0||a.set(o)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}cc=!1,lc=!1,ts.forEach(n=>n.complete()),ts.clear()}function Im(){ts.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(cc=!0)})}function h_(){Im(),Lm()}class nh{constructor(t,e,i,s,r,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=i,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ts.add(this),lc||(lc=!0,Se.read(Im),Se.resolveKeyframes(Lm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:i,motionValue:s}=this;for(let r=0;r<t.length;r++)if(t[r]===null)if(r===0){const o=s==null?void 0:s.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(i&&e){const l=i.readValue(e,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),s&&o===void 0&&s.set(t[0])}else t[r]=t[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ts.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ts.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Nm=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),f_=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function d_(n){const t=f_.exec(n);if(!t)return[,];const[,e,i,s]=t;return[`--${e??i}`,s]}function Um(n,t,e=1){const[i,s]=d_(n);if(!i)return;const r=window.getComputedStyle(t).getPropertyValue(i);if(r){const o=r.trim();return Nm(o)?parseFloat(o):o}return Bu(s)?Um(s,t,e+1):s}const Fm=n=>t=>t.test(n),p_={test:n=>n==="auto",parse:n=>n},Om=[lr,Ut,Jn,Li,sv,iv,p_],$h=n=>Om.find(Fm(n));class Bm extends nh{constructor(t,e,i,s,r){super(t,e,i,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:i}=this;if(!e||!e.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),Bu(c))){const u=Um(c,e.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!pm.has(i)||t.length!==2)return;const[s,r]=t,o=$h(s),a=$h(r);if(o!==a)if(Xh(o)&&Xh(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,i=[];for(let s=0;s<t.length;s++)Wv(t[s])&&i.push(s);i.length&&a_(t,i,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qs[i](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;const s=e[e.length-1];s!==void 0&&t.getValue(i,s).jump(s,!1)}measureEndState(){var t;const{element:e,name:i,unresolvedKeyframes:s}=this;if(!e||!e.current)return;const r=e.getValue(i);r&&r.jump(this.measuredOrigin,!1);const o=s.length-1,a=s[o];s[o]=Qs[i](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Kh=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Bi.test(n)||n==="0")&&!n.startsWith("url("));function m_(n){const t=n[0];if(n.length===1)return!0;for(let e=0;e<n.length;e++)if(n[e]!==t)return!0}function g_(n,t,e,i){const s=n[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const r=n[n.length-1],o=Kh(s,t),a=Kh(r,t);return!o||!a?!1:m_(n)||(e==="spring"||Ba(e))&&i}const v_=n=>n!==null;function za(n,{repeat:t,repeatType:e="loop"},i){const s=n.filter(v_),r=t&&e!=="loop"&&t%2===1?0:s.length-1;return!r||i===void 0?s[r]:i}const __=40;class Vm{constructor({autoplay:t=!0,delay:e=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Qn.now(),this.options={autoplay:t,delay:e,type:i,repeat:s,repeatDelay:r,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>__?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&h_(),this._resolved}onKeyframesResolved(t,e){this.resolvedAt=Qn.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:r,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!g_(t,i,s,r))if(o)this.options.duration=0;else{l&&l(za(t,this.options,e)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,e);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:e,...u},this.onPostResolved())}onPostResolved(){}then(t,e){return this.currentFinishedPromise.then(t,e)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Te=(n,t,e)=>n+(t-n)*e;function $a(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n}function x_({hue:n,saturation:t,lightness:e,alpha:i}){n/=360,t/=100,e/=100;let s=0,r=0,o=0;if(!t)s=r=o=e;else{const a=e<.5?e*(1+t):e+t-e*t,l=2*e-a;s=$a(l,a,n+1/3),r=$a(l,a,n),o=$a(l,a,n-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}function ca(n,t){return e=>e>0?t:n}const Ka=(n,t,e)=>{const i=n*n,s=e*(t*t-i)+i;return s<0?0:Math.sqrt(s)},y_=[oc,ji,Vs],M_=n=>y_.find(t=>t.test(n));function Zh(n){const t=M_(n);if(!t)return!1;let e=t.parse(n);return t===Vs&&(e=x_(e)),e}const jh=(n,t)=>{const e=Zh(n),i=Zh(t);if(!e||!i)return ca(n,t);const s={...e};return r=>(s.red=Ka(e.red,i.red,r),s.green=Ka(e.green,i.green,r),s.blue=Ka(e.blue,i.blue,r),s.alpha=Te(e.alpha,i.alpha,r),ji.transform(s))},S_=(n,t)=>e=>t(n(e)),so=(...n)=>n.reduce(S_),uc=new Set(["none","hidden"]);function E_(n,t){return uc.has(n)?e=>e<=0?n:t:e=>e>=1?t:n}function b_(n,t){return e=>Te(n,t,e)}function ih(n){return typeof n=="number"?b_:typeof n=="string"?Bu(n)?ca:tn.test(n)?jh:w_:Array.isArray(n)?zm:typeof n=="object"?tn.test(n)?jh:T_:ca}function zm(n,t){const e=[...n],i=e.length,s=n.map((r,o)=>ih(r)(r,t[o]));return r=>{for(let o=0;o<i;o++)e[o]=s[o](r);return e}}function T_(n,t){const e={...n,...t},i={};for(const s in e)n[s]!==void 0&&t[s]!==void 0&&(i[s]=ih(n[s])(n[s],t[s]));return s=>{for(const r in i)e[r]=i[r](s);return e}}function A_(n,t){var e;const i=[],s={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const o=t.types[r],a=n.indexes[o][s[o]],l=(e=n.values[a])!==null&&e!==void 0?e:0;i[r]=l,s[o]++}return i}const w_=(n,t)=>{const e=Bi.createTransformer(t),i=$r(n),s=$r(t);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?uc.has(n)&&!s.values.length||uc.has(t)&&!i.values.length?E_(n,t):so(zm(A_(i,s),s.values),e):ca(n,t)};function km(n,t,e){return typeof n=="number"&&typeof t=="number"&&typeof e=="number"?Te(n,t,e):ih(n)(n,t)}const R_=5;function Gm(n,t,e){const i=Math.max(t-R_,0);return mm(e-n(i),t-i)}const Ce={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Za=.001;function C_({duration:n=Ce.duration,bounce:t=Ce.bounce,velocity:e=Ce.velocity,mass:i=Ce.mass}){let s,r,o=1-t;o=vi(Ce.minDamping,Ce.maxDamping,o),n=vi(Ce.minDuration,Ce.maxDuration,jn(n)),o<1?(s=c=>{const u=c*o,f=u*n,h=u-e,d=hc(c,o),g=Math.exp(-f);return Za-h/d*g},r=c=>{const f=c*o*n,h=f*e+e,d=Math.pow(o,2)*Math.pow(c,2)*n,g=Math.exp(-f),x=hc(Math.pow(c,2),o);return(-s(c)+Za>0?-1:1)*((h-d)*g)/x}):(s=c=>{const u=Math.exp(-c*n),f=(c-e)*n+1;return-Za+u*f},r=c=>{const u=Math.exp(-c*n),f=(e-c)*(n*n);return u*f});const a=5/n,l=D_(s,r,a);if(n=Zn(n),isNaN(l))return{stiffness:Ce.stiffness,damping:Ce.damping,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:n}}}const P_=12;function D_(n,t,e){let i=e;for(let s=1;s<P_;s++)i=i-n(i)/t(i);return i}function hc(n,t){return n*Math.sqrt(1-t*t)}const L_=["duration","bounce"],I_=["stiffness","damping","mass"];function Jh(n,t){return t.some(e=>n[e]!==void 0)}function N_(n){let t={velocity:Ce.velocity,stiffness:Ce.stiffness,damping:Ce.damping,mass:Ce.mass,isResolvedFromDuration:!1,...n};if(!Jh(n,I_)&&Jh(n,L_))if(n.visualDuration){const e=n.visualDuration,i=2*Math.PI/(e*1.2),s=i*i,r=2*vi(.05,1,1-(n.bounce||0))*Math.sqrt(s);t={...t,mass:Ce.mass,stiffness:s,damping:r}}else{const e=C_(n);t={...t,...e,mass:Ce.mass},t.isResolvedFromDuration=!0}return t}function sh(n=Ce.visualDuration,t=Ce.bounce){const e=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:t}:n;let{restSpeed:i,restDelta:s}=e;const r=e.keyframes[0],o=e.keyframes[e.keyframes.length-1],a={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:f,velocity:h,isResolvedFromDuration:d}=N_({...e,velocity:-jn(e.velocity||0)}),g=h||0,x=c/(2*Math.sqrt(l*u)),m=o-r,p=jn(Math.sqrt(l/u)),M=Math.abs(m)<5;i||(i=M?Ce.restSpeed.granular:Ce.restSpeed.default),s||(s=M?Ce.restDelta.granular:Ce.restDelta.default);let S;if(x<1){const b=hc(p,x);S=E=>{const R=Math.exp(-x*p*E);return o-R*((g+x*p*m)/b*Math.sin(b*E)+m*Math.cos(b*E))}}else if(x===1)S=b=>o-Math.exp(-p*b)*(m+(g+p*m)*b);else{const b=p*Math.sqrt(x*x-1);S=E=>{const R=Math.exp(-x*p*E),v=Math.min(b*E,300);return o-R*((g+x*p*m)*Math.sinh(v)+b*m*Math.cosh(v))/b}}const y={calculatedDuration:d&&f||null,next:b=>{const E=S(b);if(d)a.done=b>=f;else{let R=0;x<1&&(R=b===0?Zn(g):Gm(S,b,E));const v=Math.abs(R)<=i,A=Math.abs(o-E)<=s;a.done=v&&A}return a.value=a.done?o:E,a},toString:()=>{const b=Math.min(qu(y),aa),E=am(R=>y.next(b*R).value,b,30);return b+"ms "+E}};return y}function Qh({keyframes:n,velocity:t=0,power:e=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=n[0],h={done:!1,value:f},d=v=>a!==void 0&&v<a||l!==void 0&&v>l,g=v=>a===void 0?l:l===void 0||Math.abs(a-v)<Math.abs(l-v)?a:l;let x=e*t;const m=f+x,p=o===void 0?m:o(m);p!==m&&(x=p-f);const M=v=>-x*Math.exp(-v/i),S=v=>p+M(v),y=v=>{const A=M(v),L=S(v);h.done=Math.abs(A)<=c,h.value=h.done?p:L};let b,E;const R=v=>{d(h.value)&&(b=v,E=sh({keyframes:[h.value,g(h.value)],velocity:Gm(S,v,h.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return R(0),{calculatedDuration:null,next:v=>{let A=!1;return!E&&b===void 0&&(A=!0,y(v),R(v)),b!==void 0&&v>=b?E.next(v-b):(!A&&y(v),h)}}}const U_=io(.42,0,1,1),F_=io(0,0,.58,1),Hm=io(.42,0,.58,1),Wm=n=>Array.isArray(n)&&typeof n[0]!="number",O_={linear:_n,easeIn:U_,easeInOut:Hm,easeOut:F_,circIn:Ju,circInOut:bm,circOut:Em,backIn:ju,backInOut:Mm,backOut:ym,anticipate:Sm},fc=n=>{if(Yu(n)){zp(n.length===4);const[t,e,i,s]=n;return io(t,e,i,s)}else if(typeof n=="string")return O_[n];return n};function B_(n,t,e){const i=[],s=e||km,r=n.length-1;for(let o=0;o<r;o++){let a=s(n[o],n[o+1]);if(t){const l=Array.isArray(t)?t[o]||_n:t;a=so(l,a)}i.push(a)}return i}function V_(n,t,{clamp:e=!0,ease:i,mixer:s}={}){const r=n.length;if(zp(r===t.length),r===1)return()=>t[0];if(r===2&&t[0]===t[1])return()=>t[1];const o=n[0]===n[1];n[0]>n[r-1]&&(n=[...n].reverse(),t=[...t].reverse());const a=B_(t,i,s),l=a.length,c=u=>{if(o&&u<n[0])return t[0];let f=0;if(l>1)for(;f<n.length-2&&!(u<n[f+1]);f++);const h=ns(n[f],n[f+1],u);return a[f](h)};return e?u=>c(vi(n[0],n[r-1],u)):c}function Xm(n,t){const e=n[n.length-1];for(let i=1;i<=t;i++){const s=ns(0,t,i);n.push(Te(e,1,s))}}function qm(n){const t=[0];return Xm(t,n.length-1),t}function z_(n,t){return n.map(e=>e*t)}function k_(n,t){return n.map(()=>t||Hm).splice(0,n.length-1)}function ua({duration:n=300,keyframes:t,times:e,ease:i="easeInOut"}){const s=Wm(i)?i.map(fc):fc(i),r={done:!1,value:t[0]},o=z_(e&&e.length===t.length?e:qm(t),n),a=V_(o,t,{ease:Array.isArray(s)?s:k_(t,s)});return{calculatedDuration:n,next:l=>(r.value=a(l),r.done=l>=n,r)}}const G_=n=>{const t=({timestamp:e})=>n(e);return{start:()=>Se.update(t,!0),stop:()=>gi(t),now:()=>Xe.isProcessing?Xe.timestamp:Qn.now()}},H_={decay:Qh,inertia:Qh,tween:ua,keyframes:ua,spring:sh},W_=n=>n/100;class ka extends Vm{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:e,motionValue:i,element:s,keyframes:r}=this.options,o=(s==null?void 0:s.KeyframeResolver)||nh,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(r,a,e,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:e="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=this.options,a=Ba(e)?e:H_[e]||ua;let l,c;a!==ua&&typeof t[0]!="number"&&(l=so(W_,km(t[0],t[1])),t=[0,100]);const u=a({...this.options,keyframes:t});r==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=qu(u));const{calculatedDuration:f}=u,h=f+s,d=h*(i+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:h,totalDuration:d}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,e=!1){const{resolved:i}=this;if(!i){const{keyframes:v}=this.options;return{done:!0,value:v[v.length-1]}}const{finalKeyframe:s,generator:r,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=i;if(this.startTime===null)return r.next(0);const{delay:h,repeat:d,repeatType:g,repeatDelay:x,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),e?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const p=this.currentTime-h*(this.speed>=0?1:-1),M=this.speed>=0?p<0:p>u;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let S=this.currentTime,y=r;if(d){const v=Math.min(this.currentTime,u)/f;let A=Math.floor(v),L=v%1;!L&&v>=1&&(L=1),L===1&&A--,A=Math.min(A,d+1),!!(A%2)&&(g==="reverse"?(L=1-L,x&&(L-=x/f)):g==="mirror"&&(y=o)),S=vi(0,1,L)*f}const b=M?{done:!1,value:l[0]}:y.next(S);a&&(b.value=a(b.value));let{done:E}=b;!M&&c!==null&&(E=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const R=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return R&&s!==void 0&&(b.value=za(l,this.options,s)),m&&m(b.value),R&&this.finish(),b}get duration(){const{resolved:t}=this;return t?jn(t.calculatedDuration):0}get time(){return jn(this.currentTime)}set time(t){t=Zn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=jn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=G_,onPlay:e,startTime:i}=this.options;this.driver||(this.driver=t(r=>this.tick(r))),e&&e();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}function X_(n){return new ka(n)}const q_=new Set(["opacity","clipPath","filter","transform"]);function Y_(n,t,e,{delay:i=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[t]:e};l&&(c.offset=l);const u=cm(a,s);return Array.isArray(u)&&(c.easing=u),n.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}const $_=Du(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ha=10,K_=2e4;function Z_(n){return Ba(n.type)||n.type==="spring"||!lm(n.ease)}function j_(n,t){const e=new ka({...t,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const s=[];let r=0;for(;!i.done&&r<K_;)i=e.sample(r),s.push(i.value),r+=ha;return{times:void 0,keyframes:s,duration:r-ha,ease:"linear"}}const Ym={anticipate:Sm,backInOut:Mm,circInOut:bm};function J_(n){return n in Ym}class tf extends Vm{constructor(t){super(t);const{name:e,motionValue:i,element:s,keyframes:r}=this.options;this.resolver=new Bm(r,(o,a)=>this.onKeyframesResolved(o,a),e,i,s),this.resolver.scheduleResolve()}initPlayback(t,e){let{duration:i=300,times:s,ease:r,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof r=="string"&&la()&&J_(r)&&(r=Ym[r]),Z_(this.options)){const{onComplete:f,onUpdate:h,motionValue:d,element:g,...x}=this.options,m=j_(t,x);t=m.keyframes,t.length===1&&(t[1]=t[0]),i=m.duration,s=m.times,r=m.ease,o="keyframes"}const u=Y_(a.owner.current,l,t,{...this.options,duration:i,times:s,ease:r});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(Vh(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:f}=this.options;a.set(za(t,this.options,e)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:s,type:o,ease:r,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:e}=t;return jn(e)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:e}=t;return jn(e.currentTime||0)}set time(t){const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.currentTime=Zn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:e}=t;return e.playbackRate}set speed(t){const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:e}=t;return e.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:e}=t;return e.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:e}=this;if(!e)return _n;const{animation:i}=e;Vh(i,t)}return _n}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:e}=t;e.playState==="finished"&&this.updateFinishedPromise(),e.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:e}=t;e.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:e,keyframes:i,duration:s,type:r,ease:o,times:a}=t;if(e.playState==="idle"||e.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:f,element:h,...d}=this.options,g=new ka({...d,keyframes:i,duration:s,type:r,ease:o,times:a,isGenerator:!0}),x=Zn(this.time);c.setWithVelocity(g.sample(x-ha).value,g.sample(x).value,ha)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:e,name:i,repeatDelay:s,repeatType:r,damping:o,type:a}=t;if(!e||!e.owner||!(e.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return $_()&&i&&q_.has(i)&&!l&&!c&&!s&&r!=="mirror"&&o!==0&&a!=="inertia"}}const Q_={type:"spring",stiffness:500,damping:25,restSpeed:10},tx=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),ex={type:"keyframes",duration:.8},nx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ix=(n,{keyframes:t})=>t.length>2?ex:ls.has(n)?n.startsWith("scale")?tx(t[1]):Q_:nx;function sx({when:n,delay:t,delayChildren:e,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const rh=(n,t,e,i={},s,r)=>o=>{const a=Xu(i,n)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Zn(l);let u={keyframes:Array.isArray(e)?e:[null,e],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:n,motionValue:t,element:r?void 0:s};sx(a)||(u={...u,...ix(n,u)}),u.duration&&(u.duration=Zn(u.duration)),u.repeatDelay&&(u.repeatDelay=Zn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!r&&t.get()!==void 0){const h=za(u.keyframes,a);if(h!==void 0)return Se.update(()=>{u.onUpdate(h),u.onComplete()}),new om([])}return!r&&tf.supports(u)?new tf(u):new ka(u)};function rx({protectedKeys:n,needsAnimating:t},e){const i=n.hasOwnProperty(e)&&t[e]!==!0;return t[e]=!1,i}function oh(n,t,{delay:e=0,transitionOverride:i,type:s}={}){var r;let{transition:o=n.getDefaultTransition(),transitionEnd:a,...l}=t;i&&(o=i);const c=[],u=s&&n.animationState&&n.animationState.getState()[s];for(const f in l){const h=n.getValue(f,(r=n.latestValues[f])!==null&&r!==void 0?r:null),d=l[f];if(d===void 0||u&&rx(u,f))continue;const g={delay:e,...Xu(o||{},f)};let x=!1;if(window.MotionHandoffAnimation){const p=gm(n);if(p){const M=window.MotionHandoffAnimation(p,f,Se);M!==null&&(g.startTime=M,x=!0)}}rc(n,f),h.start(rh(f,h,d,n.shouldReduceMotion&&pm.has(f)?{type:!1}:g,n,x));const m=h.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{Se.update(()=>{a&&Vv(n,a)})}),c}function dc(n,t,e={}){var i;const s=Oa(n,t,e.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:r=n.getDefaultTransition()||{}}=s||{};e.transitionOverride&&(r=e.transitionOverride);const o=s?()=>Promise.all(oh(n,s,e)):()=>Promise.resolve(),a=n.variantChildren&&n.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:h}=r;return ox(n,t,u+c,f,h,e)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(e.delay)])}function ox(n,t,e=0,i=0,s=1,r){const o=[],a=(n.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(n.variantChildren).sort(ax).forEach((c,u)=>{c.notify("AnimationStart",t),o.push(dc(c,t,{...r,delay:e+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function ax(n,t){return n.sortNodePosition(t)}function lx(n,t,e={}){n.notify("AnimationStart",t);let i;if(Array.isArray(t)){const s=t.map(r=>dc(n,r,e));i=Promise.all(s)}else if(typeof t=="string")i=dc(n,t,e);else{const s=typeof t=="function"?Oa(n,t,e.custom):t;i=Promise.all(oh(n,s,e))}return i.then(()=>{n.notify("AnimationComplete",t)})}const cx=Iu.length;function $m(n){if(!n)return;if(!n.isControllingVariants){const e=n.parent?$m(n.parent)||{}:{};return n.props.initial!==void 0&&(e.initial=n.props.initial),e}const t={};for(let e=0;e<cx;e++){const i=Iu[e],s=n.props[i];(qr(s)||s===!1)&&(t[i]=s)}return t}const ux=[...Lu].reverse(),hx=Lu.length;function fx(n){return t=>Promise.all(t.map(({animation:e,options:i})=>lx(n,e,i)))}function dx(n){let t=fx(n),e=ef(),i=!0;const s=l=>(c,u)=>{var f;const h=Oa(n,u,l==="exit"?(f=n.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(h){const{transition:d,transitionEnd:g,...x}=h;c={...c,...x,...g}}return c};function r(l){t=l(n)}function o(l){const{props:c}=n,u=$m(n.parent)||{},f=[],h=new Set;let d={},g=1/0;for(let m=0;m<hx;m++){const p=ux[m],M=e[p],S=c[p]!==void 0?c[p]:u[p],y=qr(S),b=p===l?M.isActive:null;b===!1&&(g=m);let E=S===u[p]&&S!==c[p]&&y;if(E&&i&&n.manuallyAnimateOnMount&&(E=!1),M.protectedKeys={...d},!M.isActive&&b===null||!S&&!M.prevProp||Ua(S)||typeof S=="boolean")continue;const R=px(M.prevProp,S);let v=R||p===l&&M.isActive&&!E&&y||m>g&&y,A=!1;const L=Array.isArray(S)?S:[S];let D=L.reduce(s(p),{});b===!1&&(D={});const{prevResolvedValues:O={}}=M,X={...O,...D},q=U=>{v=!0,h.has(U)&&(A=!0,h.delete(U)),M.needsAnimating[U]=!0;const G=n.getValue(U);G&&(G.liveStyle=!1)};for(const U in X){const G=D[U],Q=O[U];if(d.hasOwnProperty(U))continue;let ft=!1;ic(G)&&ic(Q)?ft=!rm(G,Q):ft=G!==Q,ft?G!=null?q(U):h.add(U):G!==void 0&&h.has(U)?q(U):M.protectedKeys[U]=!0}M.prevProp=S,M.prevResolvedValues=D,M.isActive&&(d={...d,...D}),i&&n.blockInitialAnimation&&(v=!1),v&&(!(E&&R)||A)&&f.push(...L.map(U=>({animation:U,options:{type:p}})))}if(h.size){const m={};h.forEach(p=>{const M=n.getBaseTarget(p),S=n.getValue(p);S&&(S.liveStyle=!0),m[p]=M??null}),f.push({animation:m})}let x=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!n.manuallyAnimateOnMount&&(x=!1),i=!1,x?t(f):Promise.resolve()}function a(l,c){var u;if(e[l].isActive===c)return Promise.resolve();(u=n.variantChildren)===null||u===void 0||u.forEach(h=>{var d;return(d=h.animationState)===null||d===void 0?void 0:d.setActive(l,c)}),e[l].isActive=c;const f=o(l);for(const h in e)e[h].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>e,reset:()=>{e=ef(),i=!0}}}function px(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!rm(t,n):!1}function ki(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ef(){return{animate:ki(!0),whileInView:ki(),whileHover:ki(),whileTap:ki(),whileDrag:ki(),whileFocus:ki(),exit:ki()}}class zi{constructor(t){this.isMounted=!1,this.node=t}update(){}}class mx extends zi{constructor(t){super(t),t.animationState||(t.animationState=dx(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ua(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let gx=0;class vx extends zi{constructor(){super(...arguments),this.id=gx++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t);e&&!t&&s.then(()=>e(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const _x={animation:{Feature:mx},exit:{Feature:vx}};function Kr(n,t,e,i={passive:!0}){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e)}function ro(n){return{point:{x:n.pageX,y:n.pageY}}}const xx=n=>t=>$u(t)&&n(t,ro(t));function Vr(n,t,e,i){return Kr(n,t,xx(e),i)}const nf=(n,t)=>Math.abs(n-t);function yx(n,t){const e=nf(n.x,t.x),i=nf(n.y,t.y);return Math.sqrt(e**2+i**2)}class Km{constructor(t,e,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Ja(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,d=yx(f.offset,{x:0,y:0})>=3;if(!h&&!d)return;const{point:g}=f,{timestamp:x}=Xe;this.history.push({...g,timestamp:x});const{onStart:m,onMove:p}=this.handlers;h||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ja(h,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:d,onSessionEnd:g,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Ja(f.type==="pointercancel"?this.lastMoveEventInfo:ja(h,this.transformPagePoint),this.history);this.startEvent&&d&&d(f,m),g&&g(f,m)},!$u(t))return;this.dragSnapToOrigin=r,this.handlers=e,this.transformPagePoint=i,this.contextWindow=s||window;const o=ro(t),a=ja(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Xe;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=e;u&&u(t,Ja(a,this.history)),this.removeListeners=so(Vr(this.contextWindow,"pointermove",this.handlePointerMove),Vr(this.contextWindow,"pointerup",this.handlePointerUp),Vr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),gi(this.updatePoint)}}function ja(n,t){return t?{point:t(n.point)}:n}function sf(n,t){return{x:n.x-t.x,y:n.y-t.y}}function Ja({point:n},t){return{point:n,delta:sf(n,Zm(t)),offset:sf(n,Mx(t)),velocity:Sx(t,.1)}}function Mx(n){return n[0]}function Zm(n){return n[n.length-1]}function Sx(n,t){if(n.length<2)return{x:0,y:0};let e=n.length-1,i=null;const s=Zm(n);for(;e>=0&&(i=n[e],!(s.timestamp-i.timestamp>Zn(t)));)e--;if(!i)return{x:0,y:0};const r=jn(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const jm=1e-4,Ex=1-jm,bx=1+jm,Jm=.01,Tx=0-Jm,Ax=0+Jm;function xn(n){return n.max-n.min}function wx(n,t,e){return Math.abs(n-t)<=e}function rf(n,t,e,i=.5){n.origin=i,n.originPoint=Te(t.min,t.max,n.origin),n.scale=xn(e)/xn(t),n.translate=Te(e.min,e.max,n.origin)-n.originPoint,(n.scale>=Ex&&n.scale<=bx||isNaN(n.scale))&&(n.scale=1),(n.translate>=Tx&&n.translate<=Ax||isNaN(n.translate))&&(n.translate=0)}function zr(n,t,e,i){rf(n.x,t.x,e.x,i?i.originX:void 0),rf(n.y,t.y,e.y,i?i.originY:void 0)}function of(n,t,e){n.min=e.min+t.min,n.max=n.min+xn(t)}function Rx(n,t,e){of(n.x,t.x,e.x),of(n.y,t.y,e.y)}function af(n,t,e){n.min=t.min-e.min,n.max=n.min+xn(t)}function kr(n,t,e){af(n.x,t.x,e.x),af(n.y,t.y,e.y)}function Cx(n,{min:t,max:e},i){return t!==void 0&&n<t?n=i?Te(t,n,i.min):Math.max(n,t):e!==void 0&&n>e&&(n=i?Te(e,n,i.max):Math.min(n,e)),n}function lf(n,t,e){return{min:t!==void 0?n.min+t:void 0,max:e!==void 0?n.max+e-(n.max-n.min):void 0}}function Px(n,{top:t,left:e,bottom:i,right:s}){return{x:lf(n.x,e,s),y:lf(n.y,t,i)}}function cf(n,t){let e=t.min-n.min,i=t.max-n.max;return t.max-t.min<n.max-n.min&&([e,i]=[i,e]),{min:e,max:i}}function Dx(n,t){return{x:cf(n.x,t.x),y:cf(n.y,t.y)}}function Lx(n,t){let e=.5;const i=xn(n),s=xn(t);return s>i?e=ns(t.min,t.max-i,n.min):i>s&&(e=ns(n.min,n.max-s,t.min)),vi(0,1,e)}function Ix(n,t){const e={};return t.min!==void 0&&(e.min=t.min-n.min),t.max!==void 0&&(e.max=t.max-n.min),e}const pc=.35;function Nx(n=pc){return n===!1?n=0:n===!0&&(n=pc),{x:uf(n,"left","right"),y:uf(n,"top","bottom")}}function uf(n,t,e){return{min:hf(n,t),max:hf(n,e)}}function hf(n,t){return typeof n=="number"?n:n[t]||0}const ff=()=>({translate:0,scale:1,origin:0,originPoint:0}),zs=()=>({x:ff(),y:ff()}),df=()=>({min:0,max:0}),Re=()=>({x:df(),y:df()});function Tn(n){return[n("x"),n("y")]}function Qm({top:n,left:t,right:e,bottom:i}){return{x:{min:t,max:e},y:{min:n,max:i}}}function Ux({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function Fx(n,t){if(!t)return n;const e=t({x:n.left,y:n.top}),i=t({x:n.right,y:n.bottom});return{top:e.y,left:e.x,bottom:i.y,right:i.x}}function Qa(n){return n===void 0||n===1}function mc({scale:n,scaleX:t,scaleY:e}){return!Qa(n)||!Qa(t)||!Qa(e)}function qi(n){return mc(n)||tg(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function tg(n){return pf(n.x)||pf(n.y)}function pf(n){return n&&n!=="0%"}function fa(n,t,e){const i=n-e,s=t*i;return e+s}function mf(n,t,e,i,s){return s!==void 0&&(n=fa(n,s,i)),fa(n,e,i)+t}function gc(n,t=0,e=1,i,s){n.min=mf(n.min,t,e,i,s),n.max=mf(n.max,t,e,i,s)}function eg(n,{x:t,y:e}){gc(n.x,t.translate,t.scale,t.originPoint),gc(n.y,e.translate,e.scale,e.originPoint)}const gf=.999999999999,vf=1.0000000000001;function Ox(n,t,e,i=!1){const s=e.length;if(!s)return;t.x=t.y=1;let r,o;for(let a=0;a<s;a++){r=e[a],o=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Gs(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,eg(n,o)),i&&qi(r.latestValues)&&Gs(n,r.latestValues))}t.x<vf&&t.x>gf&&(t.x=1),t.y<vf&&t.y>gf&&(t.y=1)}function ks(n,t){n.min=n.min+t,n.max=n.max+t}function _f(n,t,e,i,s=.5){const r=Te(n.min,n.max,s);gc(n,t,e,r,i)}function Gs(n,t){_f(n.x,t.x,t.scaleX,t.scale,t.originX),_f(n.y,t.y,t.scaleY,t.scale,t.originY)}function ng(n,t){return Qm(Fx(n.getBoundingClientRect(),t))}function Bx(n,t,e){const i=ng(n,e),{scroll:s}=t;return s&&(ks(i.x,s.offset.x),ks(i.y,s.offset.y)),i}const ig=({current:n})=>n?n.ownerDocument.defaultView:null,Vx=new WeakMap;class zx{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Re(),this.visualElement=t}start(t,{snapToCursor:e=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor(ro(u).point)},r=(u,f)=>{const{drag:h,dragPropagation:d,onDragStart:g}=this.getProps();if(h&&!d&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Nv(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Tn(m=>{let p=this.getAxisMotionValue(m).get()||0;if(Jn.test(p)){const{projection:M}=this.visualElement;if(M&&M.layout){const S=M.layout.layoutBox[m];S&&(p=xn(S)*(parseFloat(p)/100))}}this.originPoint[m]=p}),g&&Se.postRender(()=>g(u,f)),rc(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:h,dragDirectionLock:d,onDirectionLock:g,onDrag:x}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=f;if(d&&this.currentDirection===null){this.currentDirection=kx(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),x&&x(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Tn(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Km(t,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:ig(this.visualElement)})}stop(t,e){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=e;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&Se.postRender(()=>r(t,e))}cancel(){this.isDragging=!1;const{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,i){const{drag:s}=this.getProps();if(!i||!uo(t,s,this.currentDirection))return;const r=this.getAxisMotionValue(t);let o=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(o=Cx(o,this.constraints[t],this.elastic[t])),r.set(o)}resolveConstraints(){var t;const{dragConstraints:e,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,r=this.constraints;e&&Bs(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&s?this.constraints=Px(s.layoutBox,e):this.constraints=!1,this.elastic=Nx(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Tn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Ix(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!Bs(t))return!1;const i=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=Bx(i,s.root,this.visualElement.getTransformPagePoint());let o=Dx(s.layout.layoutBox,r);if(e){const a=e(Ux(o));this.hasMutatedConstraints=!!a,a&&(o=Qm(a))}return o}startAnimation(t){const{drag:e,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Tn(u=>{if(!uo(u,e,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const h=s?200:1e6,d=s?40:1e7,g={type:"inertia",velocity:i?t[u]:0,bounceStiffness:h,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...r,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(t,e){const i=this.getAxisMotionValue(t);return rc(this.visualElement,t),i.start(rh(t,i,0,e,this.visualElement,!1))}stopAnimation(){Tn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Tn(t=>{var e;return(e=this.getAxisMotionValue(t).animation)===null||e===void 0?void 0:e.pause()})}getAnimationState(t){var e;return(e=this.getAxisMotionValue(t).animation)===null||e===void 0?void 0:e.state}getAxisMotionValue(t){const e=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),s=i[e];return s||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){Tn(e=>{const{drag:i}=this.getProps();if(!uo(e,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(e);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[e];r.set(t[e]-Te(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:e}=this.getProps(),{projection:i}=this.visualElement;if(!Bs(e)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Tn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();s[o]=Lx({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Tn(o=>{if(!uo(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Te(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;Vx.set(this.visualElement,this);const t=this.visualElement.current,e=Vr(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Bs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Se.read(i);const o=Kr(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Tn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),e(),r(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=pc,dragMomentum:a=!0}=t;return{...t,drag:e,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function uo(n,t,e){return(t===!0||t===n)&&(e===null||e===n)}function kx(n,t=10){let e=null;return Math.abs(n.y)>t?e="y":Math.abs(n.x)>t&&(e="x"),e}class Gx extends zi{constructor(t){super(t),this.removeGroupControls=_n,this.removeListeners=_n,this.controls=new zx(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_n}unmount(){this.removeGroupControls(),this.removeListeners()}}const xf=n=>(t,e)=>{n&&Se.postRender(()=>n(t,e))};class Hx extends zi{constructor(){super(...arguments),this.removePointerDownListener=_n}onPointerDown(t){this.session=new Km(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ig(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:xf(t),onStart:xf(e),onMove:i,onEnd:(r,o)=>{delete this.session,s&&Se.postRender(()=>s(r,o))}}}mount(){this.removePointerDownListener=Vr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Zo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function yf(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const dr={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(Ut.test(n))n=parseFloat(n);else return n;const e=yf(n,t.target.x),i=yf(n,t.target.y);return`${e}% ${i}%`}},Wx={correct:(n,{treeScale:t,projectionDelta:e})=>{const i=n,s=Bi.parse(n);if(s.length>5)return i;const r=Bi.createTransformer(n),o=typeof s[0]!="number"?1:0,a=e.x.scale*t.x,l=e.y.scale*t.y;s[0+o]/=a,s[1+o]/=l;const c=Te(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}};class Xx extends ut.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=t;pv(qx),r&&(e.group&&e.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Zo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||t.layoutDependency!==e||e===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?o.promote():o.relegate()||Se.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Uu.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function sg(n){const[t,e]=P0(),i=ut.useContext(Vp);return J.jsx(Xx,{...n,layoutGroup:i,switchLayoutGroup:ut.useContext(qp),isPresent:t,safeToRemove:e})}const qx={borderRadius:{...dr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:dr,borderTopRightRadius:dr,borderBottomLeftRadius:dr,borderBottomRightRadius:dr,boxShadow:Wx};function rg(n,t,e){const i=De(n)?n:Js(n);return i.start(rh("",i,t,e)),i.animation}function og(n){return n instanceof SVGElement&&n.tagName!=="svg"}const Yx=(n,t)=>n.depth-t.depth;class $x{constructor(){this.children=[],this.isDirty=!1}add(t){Ku(this.children,t),this.isDirty=!0}remove(t){Va(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Yx),this.isDirty=!1,this.children.forEach(t)}}function Kx(n,t){const e=Qn.now(),i=({timestamp:s})=>{const r=s-e;r>=t&&(gi(i),n(r-t))};return Se.read(i,!0),()=>gi(i)}const ag=["TopLeft","TopRight","BottomLeft","BottomRight"],Zx=ag.length,Mf=n=>typeof n=="string"?parseFloat(n):n,Sf=n=>typeof n=="number"||Ut.test(n);function jx(n,t,e,i,s,r){s?(n.opacity=Te(0,e.opacity!==void 0?e.opacity:1,Jx(i)),n.opacityExit=Te(t.opacity!==void 0?t.opacity:1,0,Qx(i))):r&&(n.opacity=Te(t.opacity!==void 0?t.opacity:1,e.opacity!==void 0?e.opacity:1,i));for(let o=0;o<Zx;o++){const a=`border${ag[o]}Radius`;let l=Ef(t,a),c=Ef(e,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Sf(l)===Sf(c)?(n[a]=Math.max(Te(Mf(l),Mf(c),i),0),(Jn.test(c)||Jn.test(l))&&(n[a]+="%")):n[a]=c}(t.rotate||e.rotate)&&(n.rotate=Te(t.rotate||0,e.rotate||0,i))}function Ef(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const Jx=lg(0,.5,Em),Qx=lg(.5,.95,_n);function lg(n,t,e){return i=>i<n?0:i>t?1:e(ns(n,t,i))}function bf(n,t){n.min=t.min,n.max=t.max}function En(n,t){bf(n.x,t.x),bf(n.y,t.y)}function Tf(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}function Af(n,t,e,i,s){return n-=t,n=fa(n,1/e,i),s!==void 0&&(n=fa(n,1/s,i)),n}function ty(n,t=0,e=1,i=.5,s,r=n,o=n){if(Jn.test(t)&&(t=parseFloat(t),t=Te(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=Te(r.min,r.max,i);n===r&&(a-=t),n.min=Af(n.min,t,e,a,s),n.max=Af(n.max,t,e,a,s)}function wf(n,t,[e,i,s],r,o){ty(n,t[e],t[i],t[s],t.scale,r,o)}const ey=["x","scaleX","originX"],ny=["y","scaleY","originY"];function Rf(n,t,e,i){wf(n.x,t,ey,e?e.x:void 0,i?i.x:void 0),wf(n.y,t,ny,e?e.y:void 0,i?i.y:void 0)}function Cf(n){return n.translate===0&&n.scale===1}function cg(n){return Cf(n.x)&&Cf(n.y)}function Pf(n,t){return n.min===t.min&&n.max===t.max}function iy(n,t){return Pf(n.x,t.x)&&Pf(n.y,t.y)}function Df(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function ug(n,t){return Df(n.x,t.x)&&Df(n.y,t.y)}function Lf(n){return xn(n.x)/xn(n.y)}function If(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}class sy{constructor(){this.members=[]}add(t){Ku(this.members,t),t.scheduleRender()}remove(t){if(Va(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(t){const e=this.members.findIndex(s=>t===s);if(e===0)return!1;let i;for(let s=e;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(t,e){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,e&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:e,resumingFrom:i}=t;e.onExitComplete&&e.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ry(n,t,e){let i="";const s=n.x.translate/t.x,r=n.y.translate/t.y,o=(e==null?void 0:e.z)||0;if((s||r||o)&&(i=`translate3d(${s}px, ${r}px, ${o}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),e){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:h,skewX:d,skewY:g}=e;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),h&&(i+=`rotateY(${h}deg) `),d&&(i+=`skewX(${d}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=n.x.scale*t.x,l=n.y.scale*t.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Yi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Cr=typeof window<"u"&&window.MotionDebug!==void 0,tl=["","X","Y","Z"],oy={visibility:"hidden"},Nf=1e3;let ay=0;function el(n,t,e,i){const{latestValues:s}=t;s[n]&&(e[n]=s[n],t.setStaticValue(n,0),i&&(i[n]=0))}function hg(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const e=gm(t);if(window.MotionHasOptimisedAnimation(e,"transform")){const{layout:s,layoutId:r}=n.options;window.MotionCancelOptimisedAnimation(e,"transform",Se,!(s||r))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&hg(i)}function fg({attachResizeListener:n,defaultParent:t,measureScroll:e,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=t==null?void 0:t()){this.id=ay++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Cr&&(Yi.totalNodes=Yi.resolvedTargetDeltas=Yi.recalculatedProjection=0),this.nodes.forEach(uy),this.nodes.forEach(my),this.nodes.forEach(gy),this.nodes.forEach(hy),Cr&&window.MotionDebug.record(Yi)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new $x)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Zu),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=og(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),n){let f;const h=()=>this.root.updateBlockedByResize=!1;n(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Kx(h,250),Zo.hasAnimatedSinceResize&&(Zo.hasAnimatedSinceResize=!1,this.nodes.forEach(Ff))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:d,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||My,{onLayoutAnimationStart:m,onLayoutAnimationComplete:p}=u.getProps(),M=!this.targetLayout||!ug(this.targetLayout,g)||d,S=!h&&d;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||S||h&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,S);const y={...Xu(x,"layout"),onPlay:m,onComplete:p};(u.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y)}else h||Ff(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,gi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(vy),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&hg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Uf);return}this.isUpdating||this.nodes.forEach(dy),this.isUpdating=!1,this.nodes.forEach(py),this.nodes.forEach(ly),this.nodes.forEach(cy),this.clearAllSnapshots();const a=Qn.now();Xe.delta=vi(0,1e3/60,a-Xe.timestamp),Xe.timestamp=a,Xe.isProcessing=!0,Xa.update.process(Xe),Xa.preRender.process(Xe),Xa.render.process(Xe),Xe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Uu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(fy),this.sharedNodes.forEach(_y)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Re(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:e(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!cg(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||qi(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Sy(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Re();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Ey))){const{scroll:u}=this.root;u&&(ks(l.x,u.offset.x),ks(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=Re();if(En(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:h}=u;u!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&En(l,o),ks(l.x,f.offset.x),ks(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=Re();En(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Gs(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),qi(u.latestValues)&&Gs(l,u.latestValues)}return qi(this.latestValues)&&Gs(l,this.latestValues),l}removeTransform(o){const a=Re();En(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!qi(c.latestValues))continue;mc(c.latestValues)&&c.updateSnapshot();const u=Re(),f=c.measurePageBox();En(u,f),Rf(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return qi(this.latestValues)&&Rf(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Xe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=Xe.timestamp,!this.targetDelta&&!this.relativeTarget){const d=this.getClosestProjectingParent();d&&d.layout&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),kr(this.relativeTargetOrigin,this.layout.layoutBox,d.layout.layoutBox),En(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Re(),this.targetWithTransforms=Re()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Rx(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):En(this.target,this.layout.layoutBox),eg(this.target,this.targetDelta)):En(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const d=this.getClosestProjectingParent();d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),kr(this.relativeTargetOrigin,this.target,d.target),En(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Cr&&Yi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||mc(this.parent.latestValues)||tg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Xe.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;En(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,d=this.treeScale.y;Ox(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Re());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Tf(this.prevProjectionDelta.x,this.projectionDelta.x),Tf(this.prevProjectionDelta.y,this.projectionDelta.y)),zr(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==d||!If(this.projectionDelta.x,this.prevProjectionDelta.x)||!If(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Cr&&Yi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=zs(),this.projectionDelta=zs(),this.projectionDeltaWithTransform=zs()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=zs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Re(),d=l?l.source:void 0,g=this.layout?this.layout.source:void 0,x=d!==g,m=this.getStack(),p=!m||m.members.length<=1,M=!!(x&&!p&&this.options.crossfade===!0&&!this.path.some(yy));this.animationProgress=0;let S;this.mixTargetDelta=y=>{const b=y/1e3;Of(f.x,o.x,b),Of(f.y,o.y,b),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(kr(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),xy(this.relativeTarget,this.relativeTargetOrigin,h,b),S&&iy(this.relativeTarget,S)&&(this.isProjectionDirty=!1),S||(S=Re()),En(S,this.relativeTarget)),x&&(this.animationValues=u,jx(u,c,this.latestValues,b,M,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(gi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{Zo.hasAnimatedSinceResize=!0,this.currentAnimation=rg(0,Nf,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Nf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&dg(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Re();const f=xn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=xn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}En(a,l),Gs(a,u),zr(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new sy),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&el("z",o,c,this.animationValues);for(let u=0;u<tl.length;u++)el(`rotate${tl[u]}`,o,c,this.animationValues),el(`skew${tl[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return oy;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=$o(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=$o(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!qi(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=ry(this.projectionDeltaWithTransform,this.treeScale,h),u&&(c.transform=u(h,c.transform));const{x:d,y:g}=this.projectionDelta;c.transformOrigin=`${d.origin*100}% ${g.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const x in oa){if(h[x]===void 0)continue;const{correct:m,applyTo:p}=oa[x],M=c.transform==="none"?h[x]:m(h[x],f);if(p){const S=p.length;for(let y=0;y<S;y++)c[p[y]]=M}else c[x]=M}return this.options.layoutId&&(c.pointerEvents=f===this?$o(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Uf),this.root.sharedNodes.clear()}}}function ly(n){n.updateLayout()}function cy(n){var t;const e=((t=n.resumeFrom)===null||t===void 0?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=n.layout,{animationType:r}=n.options,o=e.source!==n.layout.source;r==="size"?Tn(f=>{const h=o?e.measuredBox[f]:e.layoutBox[f],d=xn(h);h.min=i[f].min,h.max=h.min+d}):dg(r,e.layoutBox,i)&&Tn(f=>{const h=o?e.measuredBox[f]:e.layoutBox[f],d=xn(i[f]);h.max=h.min+d,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[f].max=n.relativeTarget[f].min+d)});const a=zs();zr(a,i,e.layoutBox);const l=zs();o?zr(l,n.applyTransform(s,!0),e.measuredBox):zr(l,i,e.layoutBox);const c=!cg(a);let u=!1;if(!n.resumeFrom){const f=n.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:d}=f;if(h&&d){const g=Re();kr(g,e.layoutBox,h.layoutBox);const x=Re();kr(x,i,d.layoutBox),ug(g,x)||(u=!0),f.options.layoutRoot&&(n.relativeTarget=x,n.relativeTargetOrigin=g,n.relativeParent=f)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function uy(n){Cr&&Yi.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function hy(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function fy(n){n.clearSnapshot()}function Uf(n){n.clearMeasurements()}function dy(n){n.isLayoutDirty=!1}function py(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function Ff(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function my(n){n.resolveTargetDelta()}function gy(n){n.calcProjection()}function vy(n){n.resetSkewAndRotation()}function _y(n){n.removeLeadSnapshot()}function Of(n,t,e){n.translate=Te(t.translate,0,e),n.scale=Te(t.scale,1,e),n.origin=t.origin,n.originPoint=t.originPoint}function Bf(n,t,e,i){n.min=Te(t.min,e.min,i),n.max=Te(t.max,e.max,i)}function xy(n,t,e,i){Bf(n.x,t.x,e.x,i),Bf(n.y,t.y,e.y,i)}function yy(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const My={duration:.45,ease:[.4,0,.1,1]},Vf=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),zf=Vf("applewebkit/")&&!Vf("chrome/")?Math.round:_n;function kf(n){n.min=zf(n.min),n.max=zf(n.max)}function Sy(n){kf(n.x),kf(n.y)}function dg(n,t,e){return n==="position"||n==="preserve-aspect"&&!wx(Lf(t),Lf(e),.2)}function Ey(n){var t;return n!==n.root&&((t=n.scroll)===null||t===void 0?void 0:t.wasRoot)}const by=fg({attachResizeListener:(n,t)=>Kr(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),nl={current:void 0},pg=fg({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!nl.current){const n=new by({});n.mount(window),n.setOptions({layoutScroll:!0}),nl.current=n}return nl.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Ty={pan:{Feature:Hx},drag:{Feature:Gx,ProjectionNode:pg,MeasureLayout:sg}};function Gf(n,t,e){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",e==="Start");const s="onHover"+e,r=i[s];r&&Se.postRender(()=>r(t,ro(t)))}class Ay extends zi{mount(){const{current:t}=this.node;t&&(this.unmount=Cv(t,e=>(Gf(this.node,e,"Start"),i=>Gf(this.node,i,"End"))))}unmount(){}}class wy extends zi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=so(Kr(this.node.current,"focus",()=>this.onFocus()),Kr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Hf(n,t,e){const{props:i}=n;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",e==="Start");const s="onTap"+(e==="End"?"":e),r=i[s];r&&Se.postRender(()=>r(t,ro(t)))}class Ry extends zi{mount(){const{current:t}=this.node;t&&(this.unmount=Iv(t,e=>(Hf(this.node,e,"Start"),(i,{success:s})=>Hf(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const vc=new WeakMap,il=new WeakMap,Cy=n=>{const t=vc.get(n.target);t&&t(n)},Py=n=>{n.forEach(Cy)};function Dy({root:n,...t}){const e=n||document;il.has(e)||il.set(e,{});const i=il.get(e),s=JSON.stringify(t);return i[s]||(i[s]=new IntersectionObserver(Py,{root:n,...t})),i[s]}function Ly(n,t,e){const i=Dy(t);return vc.set(n,e),i.observe(n),()=>{vc.delete(n),i.unobserve(n)}}const Iy={some:0,all:1};class Ny extends zi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:e,margin:i,amount:s="some",once:r}=t,o={root:e?e.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:Iy[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),h=c?u:f;h&&h(l)};return Ly(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(Uy(t,e))&&this.startObserver()}unmount(){}}function Uy({viewport:n={}},{viewport:t={}}={}){return e=>n[e]!==t[e]}const Fy={inView:{Feature:Ny},tap:{Feature:Ry},focus:{Feature:wy},hover:{Feature:Ay}},Oy={layout:{ProjectionNode:pg,MeasureLayout:sg}},da={current:null},ah={current:!1};function mg(){if(ah.current=!0,!!Cu)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>da.current=n.matches;n.addListener(t),t()}else da.current=!1}const By=[...Om,tn,Bi],Vy=n=>By.find(Fm(n)),tr=new WeakMap;function zy(n,t,e){for(const i in t){const s=t[i],r=e[i];if(De(s))n.addValue(i,s);else if(De(r))n.addValue(i,Js(s,{owner:n}));else if(r!==s)if(n.hasValue(i)){const o=n.getValue(i);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=n.getStaticValue(i);n.addValue(i,Js(o!==void 0?o:s,{owner:n}))}}for(const i in e)t[i]===void 0&&n.removeValue(i);return t}const Wf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class gg{scrapeMotionValuesFromProps(t,e,i){return{}}constructor({parent:t,props:e,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=nh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=Qn.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,Se.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=e.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=e,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!r,this.isControllingVariants=Fa(e),this.isVariantNode=Wp(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(e,{},this);for(const d in h){const g=h[d];l[d]!==void 0&&De(g)&&g.set(l[d],!1)}}mount(t){this.current=t,tr.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,i)=>this.bindToMotionValue(i,e)),ah.current||mg(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:da.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){tr.delete(this.current),this.projection&&this.projection.unmount(),gi(this.notifyUpdate),gi(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}bindToMotionValue(t,e){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=ls.has(t),s=e.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&Se.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=e.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{s(),r(),o&&o(),e.owner&&e.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in js){const e=js[t];if(!e)continue;const{isEnabled:i,Feature:s}=e;if(!this.features[t]&&s&&i(this.props)&&(this.features[t]=new s(this)),this.features[t]){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Re()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let i=0;i<Wf.length;i++){const s=Wf[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,o=t[r];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=zy(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const i=this.values.get(t);e!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&e!==void 0&&(i=Js(e===null?void 0:e,{owner:this}),this.addValue(t,i)),i}readValue(t,e){var i;let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(i=this.getBaseTargetFromProps(this.props,t))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(Nm(s)||Tm(s))?s=parseFloat(s):!Vy(s)&&Bi.test(e)&&(s=Dm(t,e)),this.setBaseTarget(t,De(s)?s.get():s)),De(s)?s.get():s}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const o=Ou(this.props,i,(e=this.presenceContext)===null||e===void 0?void 0:e.custom);o&&(s=o[t])}if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,t);return r!==void 0&&!De(r)?r:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,e){return this.events[t]||(this.events[t]=new Zu),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class vg extends gg{constructor(){super(...arguments),this.KeyframeResolver=Bm}sortInstanceNodePosition(t,e){return t.compareDocumentPosition(e)&2?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:i}){delete e[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;De(t)&&(this.childSubscription=t.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}function ky(n){return window.getComputedStyle(n)}class _g extends vg{constructor(){super(...arguments),this.type="html",this.renderInstance=Qp}readValueFromInstance(t,e){if(ls.has(e)){const i=eh(e);return i&&i.default||0}else{const i=ky(t),s=(Zp(e)?i.getPropertyValue(e):i[e])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:e}){return ng(t,e)}build(t,e,i){zu(t,e,i.transformTemplate)}scrapeMotionValuesFromProps(t,e,i){return Wu(t,e,i)}}class xg extends vg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Re}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(ls.has(e)){const i=eh(e);return i&&i.default||0}return e=tm.has(e)?e:Nu(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,i){return im(t,e,i)}build(t,e,i){ku(t,e,this.isSVGTag,i.transformTemplate)}renderInstance(t,e,i,s){em(t,e,i,s)}mount(t){this.isSVGTag=Hu(t.tagName),super.mount(t)}}const Gy=(n,t)=>Fu(n)?new xg(t):new _g(t,{allowProjection:n!==ut.Fragment}),Hy=Ev({..._x,...Fy,...Ty,...Oy},Gy),Ys=B0(Hy);function es(n){const t=sa(()=>Js(n)),{isStatic:e}=ut.useContext(Ia);if(e){const[,i]=ut.useState(n);ut.useEffect(()=>t.on("change",i),[])}return t}function Wy(n,t){const e=es(t()),i=()=>e.set(t());return i(),Pu(()=>{const s=()=>Se.preRender(i,!1,!0),r=n.map(o=>o.on("change",s));return()=>{r.forEach(o=>o()),gi(i)}}),e}function Xy(n,...t){const e=n.length;function i(){let s="";for(let r=0;r<e;r++){s+=n[r];const o=t[r];o&&(s+=De(o)?o.get():o)}return s}return Wy(t.filter(De),i)}function Xf(n){return typeof n=="number"?n:parseFloat(n)}function qf(n,t={}){const{isStatic:e}=ut.useContext(Ia),i=ut.useRef(null),s=es(De(n)?Xf(n.get()):n),r=ut.useRef(s.get()),o=ut.useRef(()=>{}),a=()=>{const c=i.current;c&&c.time===0&&c.sample(Xe.delta),l(),i.current=X_({keyframes:[s.get(),r.current],velocity:s.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:o.current})},l=()=>{i.current&&i.current.stop()};return ut.useInsertionEffect(()=>s.attach((c,u)=>e?u(c):(r.current=c,o.current=u,Se.update(a),s.get()),l),[JSON.stringify(t)]),Pu(()=>{if(De(n))return n.on("change",c=>s.set(Xf(c)))},[s]),s}function qy(){!ah.current&&mg();const[n]=ut.useState(da.current);return n}function Yy(n){return ut.useEffect(()=>()=>n(),[])}const $y=(n,t,e)=>{const i=t-n;return((e-n)%i+i)%i+n};function yg(n,t){return Wm(n)?n[$y(0,n.length,t)]:n}function lh(n){return typeof n=="object"&&!Array.isArray(n)}function Mg(n,t,e,i){return typeof n=="string"&&lh(t)?hm(n,e,i):n instanceof NodeList?Array.from(n):Array.isArray(n)?n:[n]}function Ky(n,t,e){return n*(t+1)}function Yf(n,t,e,i){var s;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,n+parseFloat(t)):t==="<"?e:(s=i.get(t))!==null&&s!==void 0?s:n}function Zy(n,t,e){for(let i=0;i<n.length;i++){const s=n[i];s.at>t&&s.at<e&&(Va(n,s),i--)}}function jy(n,t,e,i,s,r){Zy(n,s,r);for(let o=0;o<t.length;o++)n.push({value:t[o],at:Te(s,r,i[o]),easing:yg(e,o)})}function Jy(n,t){for(let e=0;e<n.length;e++)n[e]=n[e]/(t+1)}function Qy(n,t){return n.at===t.at?n.value===null?1:t.value===null?-1:0:n.at-t.at}const tM="easeInOut";function eM(n,{defaultTransition:t={},...e}={},i,s){const r=t.duration||.3,o=new Map,a=new Map,l={},c=new Map;let u=0,f=0,h=0;for(let d=0;d<n.length;d++){const g=n[d];if(typeof g=="string"){c.set(g,f);continue}else if(!Array.isArray(g)){c.set(g.name,Yf(f,g.at,u,c));continue}let[x,m,p={}]=g;p.at!==void 0&&(f=Yf(f,p.at,u,c));let M=0;const S=(y,b,E,R=0,v=0)=>{const A=nM(y),{delay:L=0,times:D=qm(A),type:O="keyframes",repeat:X,repeatType:q,repeatDelay:P=0,...H}=b;let{ease:U=t.ease||"easeOut",duration:G}=b;const Q=typeof L=="function"?L(R,v):L,ft=A.length,ct=Ba(O)?O:s==null?void 0:s[O];if(ft<=2&&ct){let Rt=100;if(ft===2&&rM(A)){const lt=A[1]-A[0];Rt=Math.abs(lt)}const st={...H};G!==void 0&&(st.duration=Zn(G));const ot=Av(st,Rt,ct);U=ot.ease,G=ot.duration}G??(G=r);const dt=f+Q;D.length===1&&D[0]===0&&(D[1]=1);const Lt=D.length-A.length;if(Lt>0&&Xm(D,Lt),A.length===1&&A.unshift(null),X){G=Ky(G,X);const Rt=[...A],st=[...D];U=Array.isArray(U)?[...U]:[U];const ot=[...U];for(let lt=0;lt<X;lt++){A.push(...Rt);for(let xt=0;xt<Rt.length;xt++)D.push(st[xt]+(lt+1)),U.push(xt===0?"linear":yg(ot,xt-1))}Jy(D,X)}const Ot=dt+G;jy(E,A,U,D,dt,Ot),M=Math.max(Q+G,M),h=Math.max(Ot,h)};if(De(x)){const y=$f(x,a);S(m,p,Kf("default",y))}else{const y=Mg(x,m,i,l),b=y.length;for(let E=0;E<b;E++){m=m,p=p;const R=y[E],v=$f(R,a);for(const A in m)S(m[A],iM(p,A),Kf(A,v),E,b)}}u=f,f+=M}return a.forEach((d,g)=>{for(const x in d){const m=d[x];m.sort(Qy);const p=[],M=[],S=[];for(let b=0;b<m.length;b++){const{at:E,value:R,easing:v}=m[b];p.push(R),M.push(ns(0,h,E)),S.push(v||"easeOut")}M[0]!==0&&(M.unshift(0),p.unshift(p[0]),S.unshift(tM)),M[M.length-1]!==1&&(M.push(1),p.push(null)),o.has(g)||o.set(g,{keyframes:{},transition:{}});const y=o.get(g);y.keyframes[x]=p,y.transition[x]={...t,duration:h,ease:S,times:M,...e}}}),o}function $f(n,t){return!t.has(n)&&t.set(n,{}),t.get(n)}function Kf(n,t){return t[n]||(t[n]=[]),t[n]}function nM(n){return Array.isArray(n)?n:[n]}function iM(n,t){return n&&n[t]?{...n,...n[t]}:{...n}}const sM=n=>typeof n=="number",rM=n=>n.every(sM);function oM(n,t){return n in t}class aM extends gg{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,e){if(oM(e,t)){const i=t[e];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(t,e){delete e.output[t]}measureInstanceViewportBox(){return Re()}build(t,e){Object.assign(t.output,e)}renderInstance(t,{output:e}){Object.assign(t,e)}sortInstanceNodePosition(){return 0}}function lM(n){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},e=og(n)?new xg(t):new _g(t);e.mount(n),tr.set(n,e)}function cM(n){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},e=new aM(t);e.mount(n),tr.set(n,e)}function uM(n,t){return De(n)||typeof n=="number"||typeof n=="string"&&!lh(t)}function Sg(n,t,e,i){const s=[];if(uM(n,t))s.push(rg(n,lh(t)&&t.default||t,e&&(e.default||e)));else{const r=Mg(n,t,i),o=r.length;for(let a=0;a<o;a++){const l=r[a],c=l instanceof Element?lM:cM;tr.has(l)||c(l);const u=tr.get(l),f={...e};"delay"in f&&typeof f.delay=="function"&&(f.delay=f.delay(a,o)),s.push(...oh(u,{...t,transition:f},{}))}}return s}function hM(n,t,e){const i=[];return eM(n,t,e,{spring:sh}).forEach(({keyframes:r,transition:o},a)=>{i.push(...Sg(a,r,o))}),i}function fM(n){return Array.isArray(n)&&n.some(Array.isArray)}function dM(n){function t(e,i,s){let r=[];fM(e)?r=hM(e,i,n):r=Sg(e,i,s,n);const o=new om(r);return n&&n.animations.push(o),o}return t}function pM(){const n=sa(()=>({current:null,animations:[]})),t=sa(()=>dM(n));return Yy(()=>{n.animations.forEach(e=>e.stop())}),[n,t]}function mM(n,t){if(n==="first")return 0;{const e=t-1;return n==="last"?e:e/2}}function gM(n=.1,{startDelay:t=0,from:e=0,ease:i}={}){return(s,r)=>{const o=typeof e=="number"?e:mM(e,r),a=Math.abs(o-s);let l=n*a;if(i){const c=r*n;l=fc(i)(l/c)*c}return t+l}}const vM=["h1","h2","h3","h4","h5","h6","p","div","span"];function _M({text:n="Origami Unfold",font:t={fontFamily:"Inter",fontWeight:700,fontSize:120,lineHeight:"1.5em",letterSpacing:"0em",textAlign:"left"},color:e="#FFFFFF",tag:i="h1",startRotateY:s=-90,startRotateX:r=45,startOpacity:o=0,transformOrigin:a="left center",perspective:l=1200,stagger:c=.03,direction:u="left-to-right",transition:f={type:"tween",ease:"easeOut",duration:.8}}){const[h,d]=pM(),g=ut.useCallback(()=>{h.current&&d(".char",{rotateY:s,rotateX:r,opacity:o/100},{duration:0})},[d,s,r,o,h]),x=ut.useCallback(()=>{if(!h.current)return;const S={...f,delay:gM(c,{from:u==="right-to-left"?"last":"first"})};d(".char",{rotateY:0,rotateX:0,opacity:1},S)},[d,f,c,u,h]);ut.useEffect(()=>{g();const S=setTimeout(x,50);return()=>clearTimeout(S)},[x,g]);const m=vM.includes(i)?i:"h1",p=Ys[m],M=ut.useMemo(()=>(n??"").split(""),[n]);return J.jsx("div",{style:{width:"100%",display:"flex",justifyContent:t.textAlign==="right"?"flex-end":t.textAlign==="center"?"center":"flex-start",overflow:"visible"},children:J.jsx(p,{ref:h,"aria-label":n,style:{margin:0,display:"inline-block",whiteSpace:"pre-wrap",...t,color:e,perspective:l},children:M.map((S,y)=>J.jsx(Ys.span,{className:"char","aria-hidden":"true",style:{display:"inline-block",transformOrigin:a,rotateY:s,rotateX:r,opacity:o/100,willChange:"transform, opacity"},children:S===" "?" ":S},y))})})}const xM=18,yM=.5;function MM({label:n="Magnetic Hover",link:t="",newTab:e=!1,font:i={fontFamily:"Inter",fontWeight:400,fontSize:16,lineHeight:"1em",letterSpacing:"-0.01em",textAlign:"left"},fill:s="#FFFFFF",textColor:r="#000000",sweepColor:o="#0000FF",sweepTextColor:a="#FFFFFF",paddingX:l=48,paddingY:c=24,radius:u=100,magnet:f=10,transition:h={type:"tween",stiffness:800,damping:60,mass:1,ease:"easeInOut",duration:.3},border:d=!0,borderOptions:g={color:"#FFFFFF",width:1},style:x}){const m=ut.useRef(null),[p,M]=ut.useState(!1),[S,y]=ut.useState({x:0,y:0,d:0}),b=ut.useRef(!1),E=es(0),R=es(0),v=qf(E,{stiffness:260,damping:18,mass:.4}),A=qf(R,{stiffness:260,damping:18,mass:.4}),L=(g==null?void 0:g.color)??"#FFFFFF",D=d?(g==null?void 0:g.width)??0:0;return ut.useEffect(()=>{const O=m.current;if(!O)return;const X=O,q=f/20*yM,P=f*xM;function H(G){const Q=X.getBoundingClientRect(),ft=Q.left+Q.width/2-v.get(),ct=Q.top+Q.height/2-A.get(),dt=G.clientX-ft,Lt=G.clientY-ct,Ot=G.clientX>=Q.left&&G.clientX<=Q.right&&G.clientY>=Q.top&&G.clientY<=Q.bottom,Rt=Math.max(0,Math.abs(dt)-Q.width/2),st=Math.max(0,Math.abs(Lt)-Q.height/2),ot=Math.hypot(Rt,st);if(Ot!==b.current){const xt=Math.max(0,Math.min(Q.width,G.clientX-Q.left)),Ct=Math.max(0,Math.min(Q.height,G.clientY-Q.top)),Pt=2*Math.hypot(Q.width,Q.height);y({x:xt,y:Ct,d:Pt}),b.current=Ot,M(Ot)}if(ot>P){E.set(0),R.set(0);return}const lt=P===0?0:1-ot/P;E.set(dt*q*lt),R.set(Lt*q*lt)}function U(){E.set(0),R.set(0),b.current=!1,M(!1)}return window.addEventListener("pointermove",H),document.addEventListener("pointerleave",U),()=>{window.removeEventListener("pointermove",H),document.removeEventListener("pointerleave",U)}},[f,E,R,v,A]),J.jsxs(Ys.a,{ref:m,href:t||void 0,target:t&&e?"_blank":void 0,rel:t&&e?"noopener noreferrer":void 0,style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",padding:`${c}px ${l}px`,borderRadius:u,background:s,border:D>0?`${D}px solid ${L}`:"none",cursor:"pointer",overflow:"hidden",textDecoration:"none",whiteSpace:"nowrap",x:v,y:A,boxShadow:p?"0 16px 40px rgba(0,0,0,0.22)":"0 8px 22px rgba(0,0,0,0.14)",...i,...x},children:[J.jsx(Ys.span,{"aria-hidden":!0,initial:!1,animate:{scale:p?1:0},transition:h,style:{position:"absolute",top:S.y,left:S.x,width:S.d,height:S.d,marginLeft:-S.d/2,marginTop:-S.d/2,borderRadius:"50%",background:o,transformOrigin:"center",pointerEvents:"none"}}),J.jsx(Ys.span,{initial:!1,animate:{color:p?a:r},transition:h,style:{position:"relative",zIndex:1},children:n})]})}function SM(n){n={...EM,...n};const{text:t,speed:e,reversed:i,textFont:s,textColor:r,waveFrequency:o,waveHeight:a,separator:l,gap:c,className:u,width:f,height:h,style:d}=n,g=(j,z)=>{if(typeof j=="number")return isFinite(j)?j:z;if(typeof j=="string"){const W=parseFloat(j);return isFinite(W)?W:z}return z},x=g(s==null?void 0:s.fontSize,17),m=g(s==null?void 0:s.letterSpacing,0),p=`${x}px`,M=`${m}px`,y=(s==null?void 0:s.fontFamily)||'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',b=s==null?void 0:s.fontWeight,E=s==null?void 0:s.fontStyle,R=ut.useRef(null),v=ut.useRef(null),A=ut.useRef(null),L=ut.useRef(null),D=!1,[O,X]=ut.useState({w:800,h:200});ut.useLayoutEffect(()=>{const j=R.current;if(!j)return;const z=(tt,rt)=>{const it=Math.round(tt),pt=Math.round(rt);it<=0||pt<=0||X(mt=>Math.abs(mt.w-it)<=1&&Math.abs(mt.h-pt)<=1?mt:{w:it,h:pt})},W=j.getBoundingClientRect();if(z(W.width,W.height),typeof ResizeObserver>"u")return;const nt=new ResizeObserver(tt=>{for(const rt of tt)z(rt.contentRect.width,rt.contentRect.height)});return nt.observe(j),()=>nt.disconnect()},[]);const P=`tp-${ut.useId().replace(/[:]/g,"")}-path`,H=O.w>0?O.w:800,U=O.h>0?O.h:200,[G,Q]=ut.useState(0),ft=t&&t.length>0?t:" ",ct=" ".repeat(Math.max(0,Math.min(20,Math.round(c??0)))),dt=ft+ct+(l??"")+ct,Lt=Math.max(1,dt.length*x*.6),Ot=G>0?G:Lt,Rt=U/2,ot=Math.max(0,Math.min(a/2,U/2-x))*(4/3),lt=Math.max(1,Math.round(o*2)),xt=H/lt,Ct=Math.max(100,H*.3),Pt=Math.ceil(Ct/xt),Jt=Math.ceil(Ct/xt),Bt=lt+Pt+Jt,Xt=-Pt*xt,Wt=Pt%2===0?-1:1;let Gt=`M ${Xt},${Rt}`;for(let j=0;j<Bt;j++){const z=Xt+j*xt,W=Xt+(j+1)*xt,nt=Rt+(j%2===0?Wt*ot:-Wt*ot);Gt+=` C ${z+xt/3},${nt} ${W-xt/3},${nt} ${W},${Rt}`}const te=Gt,[ie,ce]=ut.useState(0);ut.useLayoutEffect(()=>{const j=v.current;if(!j)return;let z=0;try{z=j.getTotalLength()}catch{z=0}!isFinite(z)||z<=0||ce(W=>W===z?W:z)},[te,H,U]),ut.useLayoutEffect(()=>{const j=A.current,z=L.current;if(!j||!z)return;let W=0,nt=0;try{W=j.getComputedTextLength(),nt=z.getComputedTextLength()}catch{W=0,nt=0}const tt=(nt-W)/2;!isFinite(tt)||tt<=0||Q(rt=>rt===tt?rt:tt)},[dt,p,M,y,b,E]);const ue=2*Math.hypot(xt/2,ot)*1.15,se=Bt*Math.max(xt,ue),ve=Math.max(ie,se),V=Math.min(256,Math.max(2,Math.ceil(ve/Ot)+3)),Oe=dt.repeat(V),jt=ut.useRef(0),C=ut.useRef(null),_=ut.useRef(0),w=ut.useRef(!1),N=ut.useRef(0),B=ut.useRef(null);_.current=Math.max(0,e??0)*5,w.current=i,N.current=G>0?G:0,ut.useLayoutEffect(()=>{const j=B.current;if(!j)return;C.current=null;let z=0;const W=nt=>{C.current==null&&(C.current=nt);const tt=Math.min((nt-C.current)/1e3,1/30);C.current=nt;const rt=N.current,it=_.current;if(rt>0&&it>0){const pt=w.current?1:-1;let mt=jt.current+pt*it*tt;mt-=Math.floor(mt/rt)*rt,jt.current=mt,j.setAttribute("startOffset",`${mt}px`)}z=requestAnimationFrame(W)};return z=requestAnimationFrame(W),()=>cancelAnimationFrame(z)},[D]);const et=(j,z)=>j==null?z:typeof j=="number"?`${j}px`:j;return J.jsx("div",{ref:R,className:u,style:{position:"relative",width:et(f,"100%"),height:et(h,"100%"),overflow:"hidden",...d},children:J.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${H} ${U}`,width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet",style:{display:"block",width:"100%",height:"100%"},children:[J.jsx("defs",{children:J.jsx("path",{ref:v,id:P,d:te,fill:"none"})}),J.jsx("text",{ref:A,x:0,y:-9999,style:{fontSize:p,letterSpacing:M,fontFamily:y,fontWeight:b,fontStyle:E,visibility:"hidden",pointerEvents:"none"},children:dt.repeat(2)}),J.jsx("text",{ref:L,x:0,y:-9999,style:{fontSize:p,letterSpacing:M,fontFamily:y,fontWeight:b,fontStyle:E,visibility:"hidden",pointerEvents:"none"},children:dt.repeat(4)}),J.jsx("text",{fill:r,style:{fontSize:p,letterSpacing:M,fontFamily:y,fontWeight:b,fontStyle:E},children:J.jsx("textPath",{ref:B,href:`#${P}`,xlinkHref:`#${P}`,children:Oe})})]})})}const EM={text:"TEXT PATH",separator:"   •   ",gap:0,textFont:{fontSize:17,variant:"Regular",letterSpacing:0,lineHeight:1.2},textColor:"#FFFFFF",speed:30,reversed:!0,waveFrequency:3,waveHeight:100,className:"",width:800,height:200};function ho(n){return Math.sin(n*12.9898)*43758.5453%1}function bM(n,t){const e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,o=ho(e+i*57),a=ho(e+1+i*57),l=ho(e+(i+1)*57),c=ho(e+1+(i+1)*57),u=s*s*(3-2*s),f=r*r*(3-2*r);return o*(1-u)*(1-f)+a*u*(1-f)+l*(1-u)*f+c*u*f}function Zf(n,t,e,i,s,r,o,a,l){let c=0,u=s,f=r;for(let h=0;h<t;h++){let d=u;h===0&&(d*=l),c+=d*bM(f*n+a*100,o*f*.3),f*=e,u*=i}return c}function fo(n,t,e,i,s,r){const o=i+r*s;return{x:n+e*Math.cos(o),y:t+e*Math.sin(o)}}function TM(n,t,e,i,s,r){const o=i-2*r,a=s-2*r,l=Math.PI*r/2,c=2*o+2*a+4*l,u=n*c;let f=0;if(u<=f+o){const d=(u-f)/o;return{x:t+r+d*o,y:e}}if(f+=o,u<=f+l){const d=(u-f)/l;return fo(t+i-r,e+r,r,-Math.PI/2,Math.PI/2,d)}if(f+=l,u<=f+a){const d=(u-f)/a;return{x:t+i,y:e+r+d*a}}if(f+=a,u<=f+l){const d=(u-f)/l;return fo(t+i-r,e+s-r,r,0,Math.PI/2,d)}if(f+=l,u<=f+o){const d=(u-f)/o;return{x:t+i-r-d*o,y:e+s}}if(f+=o,u<=f+l){const d=(u-f)/l;return fo(t+r,e+s-r,r,Math.PI/2,Math.PI/2,d)}if(f+=l,u<=f+a){const d=(u-f)/a;return{x:t,y:e+s-r-d*a}}f+=a;const h=(u-f)/l;return fo(t+r,e+r,r,Math.PI,Math.PI/2,h)}function AM({color:n="#C2613F",bgColor:t="transparent",speed:e=1,chaos:i=4,thickness:s=2,borderRadius:r=14,glow:o=!0,glowColor:a="#C2613F",glowIntensity:l=8,className:c,style:u,children:f}){const h=ut.useRef(null),d=ut.useRef(null),g=ut.useRef(null),x=ut.useRef(0),m=ut.useRef(0);return ut.useEffect(()=>{if(typeof window>"u")return;const p=h.current,M=d.current;if(!p||!M)return;const S=p.getContext("2d");if(!S)return;const y=10,b=1.6,E=.7,R=i/20,v=10,A=0,L=40,D=Math.max(1,Math.min(10,l)),O=o?6+D*2:0,X=o?D:0,q=120;let P=0,H=0,U=Math.min(window.devicePixelRatio||1,2);function G(ct,dt){const Lt=M.getBoundingClientRect(),Ot=Math.max(1,ct??Lt.width),Rt=Math.max(1,dt??Lt.height),st=Ot+q*2,ot=Rt+q*2,lt=Math.min(window.devicePixelRatio||1,2);p.width=Math.max(1,Math.floor(st*lt)),p.height=Math.max(1,Math.floor(ot*lt)),p.style.width=`${st}px`,p.style.height=`${ot}px`,p.style.left=`${-q}px`,p.style.top=`${-q}px`,P=Ot,H=Rt}G();function Q(ct){const dt=Math.min(window.devicePixelRatio||1,2);dt!==U&&(U=dt,G()),m.current||(m.current=ct);const Lt=(ct-m.current)/1e3;x.current+=Lt*e,m.current=ct,S.setTransform(1,0,0,1,0,0),S.clearRect(0,0,p.width,p.height),S.scale(dt,dt),S.lineCap="round",S.lineJoin="round";const Ot=q,Rt=q,st=P,ot=H,lt=Math.min(st,ot)/2,xt=Math.min(r,Math.max(0,lt)),Ct=2*(st+ot)+2*Math.PI*xt,Pt=Math.max(16,Math.floor(Ct/2));S.beginPath();for(let Jt=0;Jt<=Pt;Jt++){const Bt=Jt/Pt,Xt=TM(Bt,Ot,Rt,st,ot,xt),Wt=Zf(Bt*8,y,b,E,R,v,x.current,0,A),Gt=Zf(Bt*8,y,b,E,R,v,x.current,1,A),te=Xt.x+Wt*L,ie=Xt.y+Gt*L;Jt===0?S.moveTo(te,ie):S.lineTo(te,ie)}if(S.closePath(),O>0){S.lineWidth=1,S.strokeStyle=a,S.shadowColor=a,S.shadowBlur=O;for(let Jt=0;Jt<X;Jt++)S.stroke();S.shadowBlur=0}S.lineWidth=s,S.strokeStyle=n,S.stroke(),g.current=requestAnimationFrame(Q)}g.current=requestAnimationFrame(Q);const ft=typeof ResizeObserver<"u"?new ResizeObserver(ct=>{var Lt;const dt=(Lt=ct[0])==null?void 0:Lt.contentRect;G(dt==null?void 0:dt.width,dt==null?void 0:dt.height)}):null;return ft==null||ft.observe(M),()=>{g.current&&cancelAnimationFrame(g.current),ft==null||ft.disconnect()}},[n,e,i,s,r,o,a,l]),J.jsxs("div",{ref:d,className:c,style:{position:"relative",overflow:"visible",isolation:"isolate",width:"100%",borderRadius:r,background:t,...u},children:[J.jsx("canvas",{ref:h,style:{position:"absolute",display:"block",pointerEvents:"none",zIndex:2}}),J.jsx("div",{style:{position:"relative",zIndex:1},children:f})]})}const wM="cubic-bezier(0.22, 1, 0.36, 1)";function RM({title:n,href:t,fontSize:e=24,fontWeight:i=700,letterSpacing:s="0em",gap:r=6,textColor:o="#EDE6DD",hoverColor:a="#C2613F",duration:l=.32,className:c,style:u,onClick:f}){const h=ut.useRef(null),[d,g]=ut.useState("none"),x=R=>{const v=h.current;if(!v)return;const A=v.getBoundingClientRect(),L=R.clientY-A.top;g(L<A.height/2?"top":"bottom")},m=()=>g("none"),p=e*.72,M=(r||0)*3,S=p+M,y={none:-S,top:0,bottom:-2*S},b={margin:0,whiteSpace:"pre",lineHeight:1,height:p,display:"flex",alignItems:"center",overflow:"hidden",fontFamily:"Inter, system-ui, sans-serif",fontSize:e,fontWeight:i,letterSpacing:s},E=J.jsx("span",{ref:h,onMouseEnter:x,onMouseLeave:m,onClick:f,className:c,style:{...u,position:"relative",display:"inline-block",overflow:"hidden",height:p,cursor:"pointer",userSelect:"none"},children:J.jsxs("span",{style:{display:"flex",flexDirection:"column",gap:M,transform:`translateY(${y[d]}px)`,transition:`transform ${l}s ${wM}`},children:[J.jsx("span",{style:{...b,color:a},children:n}),J.jsx("span",{style:{...b,color:o},children:n}),J.jsx("span",{style:{...b,color:a},children:n})]})});return t?J.jsx("a",{href:t,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:E}):E}const CM="storyforge-shiny-pill-keyframes";function PM({text:n,link:t,textColor:e="#EDE6DD",shineColor:i="#C2613F",speed:s=2,className:r,style:o}){const a=(o==null?void 0:o.width)==="100%",l={...o,position:"relative",display:"inline-flex",alignItems:"center",boxSizing:"border-box",...a?{}:{minWidth:"max-content",width:"auto"},whiteSpace:"nowrap"},c={position:"absolute",inset:0,display:"flex",alignItems:"center",whiteSpace:"nowrap",color:i,pointerEvents:"none",WebkitMaskImage:"linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",maskImage:"linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",WebkitMaskSize:"150% auto",maskSize:"150% auto",animation:`storyforgeShinySweep ${s}s ease-in-out infinite`},u=J.jsxs("span",{style:l,className:r,children:[J.jsx("style",{id:CM,dangerouslySetInnerHTML:{__html:`@keyframes storyforgeShinySweep {
            0% { -webkit-mask-position: 200%; mask-position: 200%; }
            100% { -webkit-mask-position: -100%; mask-position: -100%; }
          }`}}),J.jsx("span",{style:{color:e},children:n}),J.jsx("span",{style:c,"aria-hidden":"true",children:n})]});return t?J.jsx("a",{href:t,style:{textDecoration:"none",display:"inline-flex"},children:u}):u}function DM({text:n,brightColor:t="#FFFFFF",dimColor:e="rgba(237, 230, 221, 0.22)",maskSize:i=150,intensity:s=10,className:r,style:o}){const l=!qy(),c=ut.useRef(null),u=ut.useRef(null),f=es(0),h=es(0),d=es(0),g=Math.max(10,Math.min(100,s)),x=Xy`radial-gradient(circle ${d}px at ${f}px ${h}px, black, black ${g}%, transparent 100%)`;ut.useEffect(()=>{if(!l)return;const M=c.current;if(!M)return;const S=E=>{const R=(u.current??M).getBoundingClientRect();f.set(E.clientX-R.left),h.set(E.clientY-R.top)},y=()=>{d.set(i)},b=()=>{d.set(0)};return M.addEventListener("pointermove",S),M.addEventListener("pointerenter",y),M.addEventListener("pointerleave",b),()=>{M.removeEventListener("pointermove",S),M.removeEventListener("pointerenter",y),M.removeEventListener("pointerleave",b)}},[l,i,f,h,d]),ut.useEffect(()=>{if(l)return;const M=u.current,S=(M==null?void 0:M.clientWidth)??720,y=(M==null?void 0:M.clientHeight)??240;f.set(S/2),h.set(y/2),d.set(i)},[l,i,f,h,d]);const m={margin:0,boxSizing:"border-box",width:"100%",fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',whiteSpace:"pre-wrap",wordBreak:"break-word",userSelect:"none"},p={...o,position:"relative",boxSizing:"border-box",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",cursor:l?"none":void 0};return J.jsx("div",{ref:c,style:p,className:r,children:J.jsxs("div",{ref:u,style:{position:"relative",width:"100%"},children:[J.jsx("div",{"aria-label":n,style:{...m,position:"relative",color:e},children:n}),J.jsx(Ys.div,{"aria-hidden":!0,style:{...m,position:"absolute",top:0,left:0,color:t,pointerEvents:"none",WebkitMaskImage:x,maskImage:x,WebkitMaskSize:"100%",maskSize:"100%",WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat"},children:n})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ch="185",LM=0,jf=1,IM=2,jo=1,NM=2,Pr=3,Vi=0,un=1,hi=2,pi=0,$s=1,Hs=2,Jf=3,Qf=4,UM=5,Ki=100,FM=101,OM=102,BM=103,VM=104,zM=200,kM=201,GM=202,HM=203,_c=204,xc=205,WM=206,XM=207,qM=208,YM=209,$M=210,KM=211,ZM=212,jM=213,JM=214,yc=0,Mc=1,Sc=2,er=3,Ec=4,bc=5,Tc=6,Ac=7,Eg=0,QM=1,tS=2,ti=0,bg=1,uh=2,Tg=3,Ag=4,wg=5,Rg=6,Cg=7,Pg=300,is=301,nr=302,sl=303,rl=304,Ga=306,wc=1e3,di=1001,Rc=1002,Ye=1003,eS=1004,po=1005,en=1006,ol=1007,Ji=1008,wn=1009,Dg=1010,Lg=1011,Zr=1012,hh=1013,ni=1014,On=1015,_i=1016,fh=1017,dh=1018,jr=1020,Ig=35902,Ng=35899,Ug=1021,Fg=1022,Bn=1023,xi=1026,Qi=1027,ph=1028,mh=1029,ss=1030,gh=1031,vh=1033,Jo=33776,Qo=33777,ta=33778,ea=33779,Cc=35840,Pc=35841,Dc=35842,Lc=35843,Ic=36196,Nc=37492,Uc=37496,Fc=37488,Oc=37489,pa=37490,Bc=37491,Vc=37808,zc=37809,kc=37810,Gc=37811,Hc=37812,Wc=37813,Xc=37814,qc=37815,Yc=37816,$c=37817,Kc=37818,Zc=37819,jc=37820,Jc=37821,Qc=36492,tu=36494,eu=36495,nu=36283,iu=36284,ma=36285,su=36286,nS=3200,td=0,iS=1,Ni="",An="srgb",ga="srgb-linear",va="linear",de="srgb",ps=7680,ed=519,sS=512,rS=513,oS=514,_h=515,aS=516,lS=517,xh=518,cS=519,ru=35044,ms=35048,nd="300 es",Kn=2e3,_a=2001;function uS(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hS(){const n=xa("canvas");return n.style.display="block",n}const id={};function ya(...n){const t="THREE."+n.shift();console.log(t,...n)}function Og(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ft(...n){n=Og(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ee(...n){n=Og(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ks(...n){const t=n.join(" ");t in id||(id[t]=!0,Ft(...n))}function fS(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const dS={[yc]:Mc,[Sc]:Tc,[Ec]:Ac,[er]:bc,[Mc]:yc,[Tc]:Sc,[Ac]:Ec,[bc]:er};class cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],al=Math.PI/180,ou=180/Math.PI;function Oi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function Qt(n,t,e){return Math.max(t,Math.min(e,n))}function pS(n,t){return(n%t+t)%t}function ll(n,t,e){return(1-e)*n+e*t}function qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ah=class Ah{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ah.prototype.isVector2=!0;let Nt=Ah;class cr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),S=Math.sin(M);p=Math.sin(p*M)/S,a=Math.sin(a*M)/S,l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+x*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+x*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wh=class wh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cl.copy(this).projectOnVector(t),this.sub(cl)}reflect(t){return this.sub(cl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wh.prototype.isVector3=!0;let F=wh;const cl=new F,sd=new cr,Rh=class Rh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],M=s[1],S=s[4],y=s[7],b=s[2],E=s[5],R=s[8];return r[0]=o*x+a*M+l*b,r[3]=o*m+a*S+l*E,r[6]=o*p+a*y+l*R,r[1]=c*x+u*M+f*b,r[4]=c*m+u*S+f*E,r[7]=c*p+u*y+f*R,r[2]=h*x+d*M+g*b,r[5]=h*m+d*S+g*E,r[8]=h*p+d*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*c-u*i)*x,t[2]=(a*i-s*o)*x,t[3]=h*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ul.makeScale(t,e)),this}rotate(t){return Ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ul.makeRotation(-t)),this}translate(t,e){return Ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Rh.prototype.isMatrix3=!0;let Ht=Rh;const ul=new Ht,rd=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),od=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mS(){const n={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ga]:{primaries:t,whitePoint:i,transfer:va,toXYZ:rd,fromXYZ:od,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:i,transfer:de,toXYZ:rd,fromXYZ:od,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}const ne=mS();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gs;class gS{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{gs===void 0&&(gs=xa("canvas")),gs.width=t.width,gs.height=t.height;const s=gs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=gs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mi(e[i]/255)*255):e[i]=mi(e[i]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vS=0;class yh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hl(s[o].image)):r.push(hl(s[o]))}else r=hl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let _S=0;const fl=new F;class $e extends cs{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,i=di,s=di,r=en,o=Ji,a=Bn,l=wn,c=$e.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Oi(),this.name="",this.source=new yh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wc:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wc:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Pg;$e.DEFAULT_ANISOTROPY=1;const Ch=class Ch{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,y=(d+1)/2,b=(p+1)/2,E=(u+h)/4,R=(f+x)/4,v=(g+m)/4;return S>y&&S>b?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=E/i,r=R/i):y>b?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=v/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=R/r,s=v/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ch.prototype.isVector4=!0;let Pe=Ch;class xS extends cs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new $e(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new yh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends xS{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bg extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yS extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const La=class La{constructor(t,e,i,s,r,o,a,l,c,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,f,h,d,g,x,m)}set(t,e,i,s,r,o,a,l,c,u,f,h,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new La().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,x=c*f;e[0]=h+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,x=c*f;e[0]=h-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+x,e[1]=l*f,e[5]=x*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MS,t,SS)}lookAt(t,e,i){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ai.crossVectors(i,pn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ai.crossVectors(i,pn)),Ai.normalize(),mo.crossVectors(pn,Ai),s[0]=Ai.x,s[4]=mo.x,s[8]=pn.x,s[1]=Ai.y,s[5]=mo.y,s[9]=pn.y,s[2]=Ai.z,s[6]=mo.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],S=i[7],y=i[11],b=i[15],E=s[0],R=s[4],v=s[8],A=s[12],L=s[1],D=s[5],O=s[9],X=s[13],q=s[2],P=s[6],H=s[10],U=s[14],G=s[3],Q=s[7],ft=s[11],ct=s[15];return r[0]=o*E+a*L+l*q+c*G,r[4]=o*R+a*D+l*P+c*Q,r[8]=o*v+a*O+l*H+c*ft,r[12]=o*A+a*X+l*U+c*ct,r[1]=u*E+f*L+h*q+d*G,r[5]=u*R+f*D+h*P+d*Q,r[9]=u*v+f*O+h*H+d*ft,r[13]=u*A+f*X+h*U+d*ct,r[2]=g*E+x*L+m*q+p*G,r[6]=g*R+x*D+m*P+p*Q,r[10]=g*v+x*O+m*H+p*ft,r[14]=g*A+x*X+m*U+p*ct,r[3]=M*E+S*L+y*q+b*G,r[7]=M*R+S*D+y*P+b*Q,r[11]=M*v+S*O+y*H+b*ft,r[15]=M*A+S*X+y*U+b*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],M=l*d-c*h,S=a*d-c*f,y=a*h-l*f,b=o*d-c*u,E=o*h-l*u,R=o*f-a*u;return e*(x*M-m*S+p*y)-i*(g*M-m*b+p*E)+s*(g*S-x*b+p*R)-r*(g*y-x*E+m*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=e*a-i*o,S=e*l-s*o,y=e*c-r*o,b=i*l-s*a,E=i*c-r*a,R=s*c-r*l,v=u*x-f*g,A=u*m-h*g,L=u*p-d*g,D=f*m-h*x,O=f*p-d*x,X=h*p-d*m,q=M*X-S*O+y*D+b*L-E*A+R*v;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/q;return t[0]=(a*X-l*O+c*D)*P,t[1]=(s*O-i*X-r*D)*P,t[2]=(x*R-m*E+p*b)*P,t[3]=(h*E-f*R-d*b)*P,t[4]=(l*L-o*X-c*A)*P,t[5]=(e*X-s*L+r*A)*P,t[6]=(m*y-g*R-p*S)*P,t[7]=(u*R-h*y+d*S)*P,t[8]=(o*O-a*L+c*v)*P,t[9]=(i*L-e*O-r*v)*P,t[10]=(g*E-x*y+p*M)*P,t[11]=(f*y-u*E-d*M)*P,t[12]=(a*A-o*D-l*v)*P,t[13]=(e*D-i*A+s*v)*P,t[14]=(x*S-g*b-m*M)*P,t[15]=(u*b-f*S+h*M)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,x=o*u,m=o*f,p=a*f,M=l*c,S=l*u,y=l*f,b=i.x,E=i.y,R=i.z;return s[0]=(1-(x+p))*b,s[1]=(d+y)*b,s[2]=(g-S)*b,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(h+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+S)*R,s[9]=(m-M)*R,s[10]=(1-(h+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=vs.set(s[0],s[1],s[2]).length();const a=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),In.copy(this);const c=1/o,u=1/a,f=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,e.setFromRotationMatrix(In),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Kn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Kn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===_a)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Kn,l=!1){const c=this.elements,u=2/(e-t),f=2/(i-s),h=-(e+t)/(e-t),d=-(i+s)/(i-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Kn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===_a)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};La.prototype.isMatrix4=!0;let pe=La;const vs=new F,In=new pe,MS=new F(0,0,0),SS=new F(1,1,1),Ai=new F,mo=new F,pn=new F,ad=new pe,ld=new cr;class rs{constructor(t=0,e=0,i=0,s=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ad.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ad,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ld.setFromEuler(this),this.setFromQuaternion(ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class Mh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ES=0;const cd=new F,_s=new cr,ri=new pe,go=new F,pr=new F,bS=new F,TS=new cr,ud=new F(1,0,0),hd=new F(0,1,0),fd=new F(0,0,1),dd={type:"added"},AS={type:"removed"},xs={type:"childadded",child:null},dl={type:"childremoved",child:null};class ln extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new F,e=new rs,i=new cr,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Ht}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(ud,t)}rotateY(t){return this.rotateOnAxis(hd,t)}rotateZ(t){return this.rotateOnAxis(fd,t)}translateOnAxis(t,e){return cd.copy(t).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ud,t)}translateY(t){return this.translateOnAxis(hd,t)}translateZ(t){return this.translateOnAxis(fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?go.copy(t):go.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(pr,go,this.up):ri.lookAt(go,pr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ri),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dd),xs.child=t,this.dispatchEvent(xs),xs.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(AS),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dd),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,bS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,TS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ln.DEFAULT_UP=new F(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ui extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wS={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ui;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},vo={h:0,s:0,l:0};function ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=pS(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ml(o,r,t+1/3),this.g=ml(o,r,t),this.b=ml(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=An){function i(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const i=Vg[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return ne.workingToColorSpace(Qe.copy(this),t),Math.round(Qt(Qe.r*255,0,255))*65536+Math.round(Qt(Qe.g*255,0,255))*256+Math.round(Qt(Qe.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Qe.copy(this),e);const i=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=An){ne.workingToColorSpace(Qe.copy(this),t);const e=Qe.r,i=Qe.g,s=Qe.b;return t!==An?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(vo);const i=ll(wi.h,vo.h,e),s=ll(wi.s,vo.s,e),r=ll(wi.l,vo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new zt;zt.NAMES=Vg;class zg extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Nn=new F,oi=new F,gl=new F,ai=new F,ys=new F,Ms=new F,pd=new F,vl=new F,_l=new F,xl=new F,yl=new Pe,Ml=new Pe,Sl=new Pe;class Rn{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Nn.subVectors(s,e),oi.subVectors(i,e),gl.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(oi),l=Nn.dot(gl),c=oi.dot(oi),u=oi.dot(gl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return yl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),yl.fromBufferAttribute(t,e),Ml.fromBufferAttribute(t,i),Sl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yl,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(Sl,r.z),o}static isFrontFacing(t,e,i,s){return Nn.subVectors(i,e),oi.subVectors(t,e),Nn.cross(oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Nn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ys.subVectors(s,i),Ms.subVectors(r,i),vl.subVectors(t,i);const l=ys.dot(vl),c=Ms.dot(vl);if(l<=0&&c<=0)return e.copy(i);_l.subVectors(t,s);const u=ys.dot(_l),f=Ms.dot(_l);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ys,o);xl.subVectors(t,r);const d=ys.dot(xl),g=Ms.dot(xl);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ms,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return pd.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(pd,a);const p=1/(m+x+h);return o=x*p,a=h*p,e.copy(i).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class us{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_o.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(t.matrixWorld),this.union(_o)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),xo.subVectors(this.max,mr),Ss.subVectors(t.a,mr),Es.subVectors(t.b,mr),bs.subVectors(t.c,mr),Ri.subVectors(Es,Ss),Ci.subVectors(bs,Es),Gi.subVectors(Ss,bs);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Gi.z,Gi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Gi.z,0,-Gi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Gi.y,Gi.x,0];return!El(e,Ss,Es,bs,xo)||(e=[1,0,0,0,1,0,0,0,1],!El(e,Ss,Es,bs,xo))?!1:(yo.crossVectors(Ri,Ci),e=[yo.x,yo.y,yo.z],El(e,Ss,Es,bs,xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const li=[new F,new F,new F,new F,new F,new F,new F,new F],Un=new F,_o=new us,Ss=new F,Es=new F,bs=new F,Ri=new F,Ci=new F,Gi=new F,mr=new F,xo=new F,yo=new F,Hi=new F;function El(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hi.fromArray(n,r);const a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Be=new F,Mo=new Nt;let RS=0;class nn extends cs{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ru,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ru&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class kg extends nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Gg extends nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ke extends nn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const CS=new us,gr=new F,bl=new F;class ur{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):CS.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(gr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(bl)),this.expandByPoint(gr.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let PS=0;const bn=new pe,Tl=new ln,Ts=new F,mn=new us,vr=new us,We=new F;class cn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uS(t)?Gg:kg)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,i){return bn.makeTranslation(t,e,i),this.applyMatrix4(bn),this}scale(t,e,i){return bn.makeScale(t,e,i),this.applyMatrix4(bn),this}lookAt(t){return Tl.lookAt(t),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(mn.min,vr.min),mn.expandByPoint(We),We.addVectors(mn.max,vr.max),mn.expandByPoint(We)):(mn.expandByPoint(vr.min),mn.expandByPoint(vr.max))}mn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)We.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),We.add(Ts)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new nn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new F,l[v]=new F;const c=new F,u=new F,f=new F,h=new Nt,d=new Nt,g=new Nt,x=new F,m=new F;function p(v,A,L){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,L),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,L),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[v].add(x),a[A].add(x),a[L].add(x),l[v].add(m),l[A].add(m),l[L].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,A=M.length;v<A;++v){const L=M[v],D=L.start,O=L.count;for(let X=D,q=D+O;X<q;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const S=new F,y=new F,b=new F,E=new F;function R(v){b.fromBufferAttribute(s,v),E.copy(b);const A=a[v];S.copy(A),S.sub(b.multiplyScalar(b.dot(A))).normalize(),y.crossVectors(E,A);const D=y.dot(l[v])<0?-1:1;o.setXYZW(v,S.x,S.y,S.z,D)}for(let v=0,A=M.length;v<A;++v){const L=M[v],D=L.start,O=L.count;for(let X=D,q=D+O;X<q;X+=3)R(t.getX(X+0)),R(t.getX(X+1)),R(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new nn(h,u,f)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new cn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DS{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new F;class Ma{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ma(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let LS=0;class hr extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=$s,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=xc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_c&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ed&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Nt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hg extends hr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let As;const _r=new F,ws=new F,Rs=new F,Cs=new Nt,xr=new Nt,Wg=new pe,So=new F,yr=new F,Eo=new F,md=new Nt,Al=new Nt,gd=new Nt;class IS extends ln{constructor(t=new Hg){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new cn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new DS(e,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Ma(i,3,0,!1)),As.setAttribute("uv",new Ma(i,2,3,!1))}this.geometry=As,this.material=t,this.center=new Nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Wg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Rs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;bo(So.set(-.5,-.5,0),Rs,o,ws,s,r),bo(yr.set(.5,-.5,0),Rs,o,ws,s,r),bo(Eo.set(.5,.5,0),Rs,o,ws,s,r),md.set(0,0),Al.set(1,0),gd.set(1,1);let a=t.ray.intersectTriangle(So,yr,Eo,!1,_r);if(a===null&&(bo(yr.set(-.5,.5,0),Rs,o,ws,s,r),Al.set(0,1),a=t.ray.intersectTriangle(So,Eo,yr,!1,_r),a===null))return;const l=t.ray.origin.distanceTo(_r);l<t.near||l>t.far||e.push({distance:l,point:_r.clone(),uv:Rn.getInterpolation(_r,So,yr,Eo,md,Al,gd,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function bo(n,t,e,i,s,r){Cs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(xr.x=r*Cs.x-s*Cs.y,xr.y=s*Cs.x+r*Cs.y):xr.copy(Cs),n.copy(t),n.x+=xr.x,n.y+=xr.y,n.applyMatrix4(Wg)}const ci=new F,wl=new F,To=new F,Pi=new F,Rl=new F,Ao=new F,Cl=new F;class Sh{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){wl.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(wl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(To),a=Pi.dot(this.direction),l=-Pi.dot(To),c=Pi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(wl).addScaledVector(To,h),d}intersectSphere(t,e){ci.subVectors(t.center,this.origin);const i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,i,s,r){Rl.subVectors(e,t),Ao.subVectors(i,t),Cl.crossVectors(Rl,Ao);let o=this.direction.dot(Cl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,t);const l=a*this.direction.dot(Ao.crossVectors(Pi,Ao));if(l<0)return null;const c=a*this.direction.dot(Rl.cross(Pi));if(c<0||l+c>o)return null;const u=-a*Pi.dot(Cl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wn extends hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=Eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vd=new pe,Wi=new Sh,wo=new ur,_d=new F,Ro=new F,Co=new F,Po=new F,Pl=new F,Do=new F,xd=new F,Lo=new F;class qe extends ln{constructor(t=new cn,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Pl.fromBufferAttribute(f,t),o?Do.addScaledVector(Pl,u):Do.addScaledVector(Pl.sub(e),u))}e.add(Do)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(wo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(wo,_d)===null||Wi.origin.distanceToSquared(_d)>(t.far-t.near)**2))&&(vd.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(vd),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,b=S;y<b;y+=3){const E=a.getX(y),R=a.getX(y+1),v=a.getX(y+2);s=Io(this,p,t,i,c,u,f,E,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);s=Io(this,o,t,i,c,u,f,M,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,b=S;y<b;y+=3){const E=y,R=y+1,v=y+2;s=Io(this,p,t,i,c,u,f,E,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const M=m,S=m+1,y=m+2;s=Io(this,o,t,i,c,u,f,M,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function NS(n,t,e,i,s,r,o,a){let l;if(t.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Vi,a),l===null)return null;Lo.copy(a),Lo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Lo);return c<e.near||c>e.far?null:{distance:c,point:Lo.clone(),object:n}}function Io(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ro),n.getVertexPosition(l,Co),n.getVertexPosition(c,Po);const u=NS(n,t,e,i,Ro,Co,Po,xd);if(u){const f=new F;Rn.getBarycoord(xd,Ro,Co,Po,f),s&&(u.uv=Rn.getInterpolatedAttribute(s,a,l,c,f,new Nt)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,a,l,c,f,new Nt)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,l,c,f,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Rn.getNormal(Ro,Co,Po,h.normal),u.face=h,u.barycoord=f}return u}class Xg extends $e{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Ye,u=Ye,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class au extends nn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ps=new pe,yd=new pe,No=[],Md=new us,US=new pe,Mr=new qe,Sr=new ur;class qg extends qe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new au(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,US)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new us),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ps),Md.copy(t.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Md)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ur),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ps),Sr.copy(t.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(Sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(i),t.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),yd.multiplyMatrices(i,Ps),Mr.matrixWorld=yd,Mr.raycast(t,No);for(let o=0,a=No.length;o<a;o++){const l=No[o];l.instanceId=r,l.object=this,e.push(l)}No.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new au(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xg(new Float32Array(s*this.count),s,this.count,ph,On));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dl=new F,FS=new F,OS=new Ht;class $i{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Dl.subVectors(i,e).cross(FS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Dl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||OS.getNormalMatrix(t),s=this.coplanarPoint(Dl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new ur,BS=new Nt(.5,.5),Uo=new F;class Yg{constructor(t=new $i,e=new $i,i=new $i,s=new $i,r=new $i,o=new $i){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Kn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],S=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-o,d-u,p-g,b-M).normalize(),s[1].setComponents(c+o,d+u,p+g,b+M).normalize(),s[2].setComponents(c+a,d+f,p+x,b+S).normalize(),s[3].setComponents(c-a,d-f,p-x,b-S).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,d-h,p-m,b-y).normalize();else if(s[4].setComponents(c-l,d-h,p-m,b-y).normalize(),e===Kn)s[5].setComponents(c+l,d+h,p+m,b+y).normalize();else if(e===_a)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);const e=BS.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Uo.x=s.normal.x>0?t.max.x:t.min.x,Uo.y=s.normal.y>0?t.max.y:t.min.y,Uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lu extends hr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sa=new F,Ea=new F,Sd=new pe,Er=new Sh,Fo=new ur,Ll=new F,Ed=new F;class $g extends ln{constructor(t=new cn,e=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Sa.fromBufferAttribute(e,s-1),Ea.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Sa.distanceTo(Ea);t.setAttribute("lineDistance",new Ke(i,1))}else Ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,t.ray.intersectsSphere(Fo)===!1)return;Sd.copy(s).invert(),Er.copy(t.ray).applyMatrix4(Sd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=u.getX(x),M=u.getX(x+1),S=Oo(this,t,Er,l,p,M,x);S&&e.push(S)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(d),p=Oo(this,t,Er,l,x,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=Oo(this,t,Er,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){const x=Oo(this,t,Er,l,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oo(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(Sa.fromBufferAttribute(a,s),Ea.fromBufferAttribute(a,r),e.distanceSqToSegment(Sa,Ea,Ll,Ed)>i)return;Ll.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ll);if(!(c<t.near||c>t.far))return{distance:c,point:Ed.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const bd=new F,Td=new F;class VS extends $g{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)bd.fromBufferAttribute(e,s),Td.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bd.distanceTo(Td);t.setAttribute("lineDistance",new Ke(i,1))}else Ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kg extends $e{constructor(t=[],e=is,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zS extends $e{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ir extends $e{constructor(t,e,i=ni,s,r,o,a=Ye,l=Ye,c,u=xi,f=1){if(u!==xi&&u!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class kS extends ir{constructor(t,e=ni,i=is,s,r,o=Ye,a=Ye,l,c=xi){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Zg extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class oo extends cn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function g(x,m,p,M,S,y,b,E,R,v,A){const L=y/R,D=b/v,O=y/2,X=b/2,q=E/2,P=R+1,H=v+1;let U=0,G=0;const Q=new F;for(let ft=0;ft<H;ft++){const ct=ft*D-X;for(let dt=0;dt<P;dt++){const Lt=dt*L-O;Q[x]=Lt*M,Q[m]=ct*S,Q[p]=q,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(dt/R),f.push(1-ft/v),U+=1}}for(let ft=0;ft<v;ft++)for(let ct=0;ct<R;ct++){const dt=h+ct+P*ft,Lt=h+ct+P*(ft+1),Ot=h+(ct+1)+P*(ft+1),Rt=h+(ct+1)+P*ft;l.push(dt,Lt,Rt),l.push(Lt,Ot,Rt),G+=6}a.addGroup(d,G,A),d+=G,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ft("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Nt:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new F,s=[],r=[],o=[],a=new F,l=new pe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class jg extends Mi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Nt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class GS extends jg{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Eh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Ad=new F,wd=new F,Il=new Eh,Nl=new Eh,Ul=new Eh;class Dr extends Mi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(wd.subVectors(s[0],s[1]).add(s[0]),c=wd);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ad.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ad),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Il.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,x,m),Nl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,x,m),Ul.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Nl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ul.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Il.calc(l),Nl.calc(l),Ul.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rd(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function HS(n,t){const e=1-n;return e*e*t}function WS(n,t){return 2*(1-n)*n*t}function XS(n,t){return n*n*t}function Gr(n,t,e,i){return HS(n,t)+WS(n,e)+XS(n,i)}function qS(n,t){const e=1-n;return e*e*e*t}function YS(n,t){const e=1-n;return 3*e*e*n*t}function $S(n,t){return 3*(1-n)*n*n*t}function KS(n,t){return n*n*n*t}function Hr(n,t,e,i,s){return qS(n,t)+YS(n,e)+$S(n,i)+KS(n,s)}class ZS extends Mi{constructor(t=new Nt,e=new Nt,i=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Nt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hr(t,s.x,r.x,o.x,a.x),Hr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jS extends Mi{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hr(t,s.x,r.x,o.x,a.x),Hr(t,s.y,r.y,o.y,a.y),Hr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class JS extends Mi{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class QS extends Mi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tE extends Mi{constructor(t=new Nt,e=new Nt,i=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Nt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Gr(t,s.x,r.x,o.x),Gr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jg extends Mi{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Gr(t,s.x,r.x,o.x),Gr(t,s.y,r.y,o.y),Gr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eE extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Rd(a,l.x,c.x,u.x,f.x),Rd(a,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}}var nE=Object.freeze({__proto__:null,ArcCurve:GS,CatmullRomCurve3:Dr,CubicBezierCurve:ZS,CubicBezierCurve3:jS,EllipseCurve:jg,LineCurve:JS,LineCurve3:QS,QuadraticBezierCurve:tE,QuadraticBezierCurve3:Jg,SplineCurve:eE});class ao extends cn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let S=0;S<c;S++){const y=S*f-r;g.push(y,-M,0),x.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,y=M+c*(p+1),b=M+1+c*(p+1),E=M+1+c*p;d.push(S,y,E),d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ws extends cn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new F,h=new F,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const M=[],S=p/i,y=o+S*a,b=t*Math.cos(y),E=Math.sqrt(t*t-b*b);let R=0;p===0&&o===0?R=.5/e:p===i&&l===Math.PI&&(R=-.5/e);for(let v=0;v<=e;v++){const A=v/e,L=s+A*r;f.x=-E*Math.cos(L),f.y=b,f.z=E*Math.sin(L),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(A+R,1-S),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const S=u[p][M+1],y=u[p][M],b=u[p+1][M],E=u[p+1][M+1];(p!==0||o>0)&&d.push(S,y,E),(p!==i-1||l<Math.PI)&&d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xs extends cn{constructor(t=new Jg(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new F,l=new F,c=new Nt;let u=new F;const f=[],h=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ke(f,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2));function x(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),M(),p()}function m(S){u=t.getPointAt(S/e,u);const y=o.normals[S],b=o.binormals[S];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,v=Math.sin(R),A=-Math.cos(R);l.x=A*y.x+v*b.x,l.y=A*y.y+v*b.y,l.z=A*y.z+v*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let y=1;y<=s;y++){const b=(s+1)*(S-1)+(y-1),E=(s+1)*S+(y-1),R=(s+1)*S+y,v=(s+1)*(S-1)+y;g.push(b,E,v),g.push(E,R,v)}}function M(){for(let S=0;S<=e;S++)for(let y=0;y<=s;y++)c.x=S/e,c.y=y/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Xs(new nE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function sr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Cd(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Cd(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function an(n){const t={};for(let e=0;e<n.length;e++){const i=sr(n[e]);for(const s in i)t[s]=i[s]}return t}function Cd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function iE(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qg(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const sE={clone:sr,merge:an};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=oE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=iE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class aE extends ii{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lE extends hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cE extends hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bo=new F,Vo=new cr,Gn=new F;class t0 extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bo,Vo,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Vo,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Bo,Vo,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Vo,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Di=new F,Pd=new Nt,Dd=new Nt;class vn extends t0{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ou*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ou*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Pd,Dd),e.subVectors(Dd,Pd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(al*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class e0 extends t0{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ds=-90,Ls=1;class uE extends ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Ds,Ls,t,e);s.layers=this.layers,this.add(s);const r=new vn(Ds,Ls,t,e);r.layers=this.layers,this.add(r);const o=new vn(Ds,Ls,t,e);o.layers=this.layers,this.add(o);const a=new vn(Ds,Ls,t,e);a.layers=this.layers,this.add(a);const l=new vn(Ds,Ls,t,e);l.layers=this.layers,this.add(l);const c=new vn(Ds,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hE extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ld=new pe;class fE{constructor(t,e,i=0,s=1/0){this.ray=new Sh(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Mh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ld.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ld),this}intersectObject(t,e=!0,i=[]){return cu(t,this,i,e),i.sort(Id),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)cu(t[s],this,i,e);return i.sort(Id),i}}function Id(n,t){return n.distance-t.distance}function cu(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)cu(r[o],t,e,!0)}}const Ph=class Ph{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ph.prototype.isMatrix2=!0;let Nd=Ph;function Ud(n,t,e,i){const s=dE(i);switch(e){case Ug:return n*t;case ph:return n*t/s.components*s.byteLength;case mh:return n*t/s.components*s.byteLength;case ss:return n*t*2/s.components*s.byteLength;case gh:return n*t*2/s.components*s.byteLength;case Fg:return n*t*3/s.components*s.byteLength;case Bn:return n*t*4/s.components*s.byteLength;case vh:return n*t*4/s.components*s.byteLength;case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pc:case Lc:return Math.max(n,16)*Math.max(t,8)/4;case Cc:case Dc:return Math.max(n,8)*Math.max(t,8)/2;case Ic:case Nc:case Fc:case Oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Uc:case pa:case Bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case $c:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qc:case tu:case eu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case nu:case iu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ma:case su:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dE(n){switch(n){case wn:case Dg:return{byteLength:1,components:1};case Zr:case Lg:case _i:return{byteLength:2,components:1};case fh:case dh:return{byteLength:2,components:4};case ni:case hh:case On:return{byteLength:4,components:1};case Ig:case Ng:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function n0(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function pE(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const x=f[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var mE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gE=`#ifdef USE_ALPHAHASH
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
#endif`,vE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ME=`#ifdef USE_AOMAP
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
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EE=`#ifdef USE_BATCHING
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
#endif`,bE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RE=`#ifdef USE_IRIDESCENCE
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
#endif`,CE=`#ifdef USE_BUMPMAP
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
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,BE=`#define PI 3.141592653589793
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
} // validated`,VE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zE=`vec3 transformedNormal = objectNormal;
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
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XE="gl_FragColor = linearToOutputTexel( gl_FragColor );",qE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nb=`#ifdef USE_GRADIENTMAP
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
}`,ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ob=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ab=`#ifdef USE_ENVMAP
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
#endif`,lb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fb=`PhysicalMaterial material;
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
#endif`,db=`uniform sampler2D dfgLUT;
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
}`,pb=`
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
#endif`,mb=`#if defined( RE_IndirectDiffuse )
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
#endif`,gb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tb=`#if defined( USE_POINTS_UV )
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
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`#ifdef USE_MORPHTARGETS
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
#endif`,Lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bb=`#ifdef USE_NORMALMAP
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
#endif`,Vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tT=`float getShadowMask() {
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
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nT=`#ifdef USE_SKINNING
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
#endif`,iT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cT=`#ifdef USE_TRANSMISSION
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
#endif`,uT=`#ifdef USE_TRANSMISSION
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gT=`uniform sampler2D t2D;
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
}`,vT=`varying vec3 vWorldDirection;
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`#include <common>
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
}`,ST=`#if DEPTH_PACKING == 3200
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
}`,ET=`#define DISTANCE
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`uniform float scale;
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
}`,RT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,PT=`uniform vec3 diffuse;
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
}`,DT=`#define LAMBERT
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
}`,LT=`#define LAMBERT
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
}`,IT=`#define MATCAP
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
}`,NT=`#define MATCAP
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
}`,UT=`#define NORMAL
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
}`,FT=`#define NORMAL
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
}`,OT=`#define PHONG
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
}`,BT=`#define PHONG
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
}`,VT=`#define STANDARD
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
}`,zT=`#define STANDARD
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
}`,kT=`#define TOON
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
}`,GT=`#define TOON
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
}`,HT=`uniform float size;
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
}`,WT=`uniform vec3 diffuse;
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
}`,XT=`#include <common>
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
}`,qT=`uniform vec3 color;
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
}`,YT=`uniform float rotation;
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
}`,$T=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:mE,alphahash_pars_fragment:gE,alphamap_fragment:vE,alphamap_pars_fragment:_E,alphatest_fragment:xE,alphatest_pars_fragment:yE,aomap_fragment:ME,aomap_pars_fragment:SE,batching_pars_vertex:EE,batching_vertex:bE,begin_vertex:TE,beginnormal_vertex:AE,bsdfs:wE,iridescence_fragment:RE,bumpmap_pars_fragment:CE,clipping_planes_fragment:PE,clipping_planes_pars_fragment:DE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:IE,color_fragment:NE,color_pars_fragment:UE,color_pars_vertex:FE,color_vertex:OE,common:BE,cube_uv_reflection_fragment:VE,defaultnormal_vertex:zE,displacementmap_pars_vertex:kE,displacementmap_vertex:GE,emissivemap_fragment:HE,emissivemap_pars_fragment:WE,colorspace_fragment:XE,colorspace_pars_fragment:qE,envmap_fragment:YE,envmap_common_pars_fragment:$E,envmap_pars_fragment:KE,envmap_pars_vertex:ZE,envmap_physical_pars_fragment:ab,envmap_vertex:jE,fog_vertex:JE,fog_pars_vertex:QE,fog_fragment:tb,fog_pars_fragment:eb,gradientmap_pars_fragment:nb,lightmap_pars_fragment:ib,lights_lambert_fragment:sb,lights_lambert_pars_fragment:rb,lights_pars_begin:ob,lights_toon_fragment:lb,lights_toon_pars_fragment:cb,lights_phong_fragment:ub,lights_phong_pars_fragment:hb,lights_physical_fragment:fb,lights_physical_pars_fragment:db,lights_fragment_begin:pb,lights_fragment_maps:mb,lights_fragment_end:gb,lightprobes_pars_fragment:vb,logdepthbuf_fragment:_b,logdepthbuf_pars_fragment:xb,logdepthbuf_pars_vertex:yb,logdepthbuf_vertex:Mb,map_fragment:Sb,map_pars_fragment:Eb,map_particle_fragment:bb,map_particle_pars_fragment:Tb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:wb,morphinstance_vertex:Rb,morphcolor_vertex:Cb,morphnormal_vertex:Pb,morphtarget_pars_vertex:Db,morphtarget_vertex:Lb,normal_fragment_begin:Ib,normal_fragment_maps:Nb,normal_pars_fragment:Ub,normal_pars_vertex:Fb,normal_vertex:Ob,normalmap_pars_fragment:Bb,clearcoat_normal_fragment_begin:Vb,clearcoat_normal_fragment_maps:zb,clearcoat_pars_fragment:kb,iridescence_pars_fragment:Gb,opaque_fragment:Hb,packing:Wb,premultiplied_alpha_fragment:Xb,project_vertex:qb,dithering_fragment:Yb,dithering_pars_fragment:$b,roughnessmap_fragment:Kb,roughnessmap_pars_fragment:Zb,shadowmap_pars_fragment:jb,shadowmap_pars_vertex:Jb,shadowmap_vertex:Qb,shadowmask_pars_fragment:tT,skinbase_vertex:eT,skinning_pars_vertex:nT,skinning_vertex:iT,skinnormal_vertex:sT,specularmap_fragment:rT,specularmap_pars_fragment:oT,tonemapping_fragment:aT,tonemapping_pars_fragment:lT,transmission_fragment:cT,transmission_pars_fragment:uT,uv_pars_fragment:hT,uv_pars_vertex:fT,uv_vertex:dT,worldpos_vertex:pT,background_vert:mT,background_frag:gT,backgroundCube_vert:vT,backgroundCube_frag:_T,cube_vert:xT,cube_frag:yT,depth_vert:MT,depth_frag:ST,distance_vert:ET,distance_frag:bT,equirect_vert:TT,equirect_frag:AT,linedashed_vert:wT,linedashed_frag:RT,meshbasic_vert:CT,meshbasic_frag:PT,meshlambert_vert:DT,meshlambert_frag:LT,meshmatcap_vert:IT,meshmatcap_frag:NT,meshnormal_vert:UT,meshnormal_frag:FT,meshphong_vert:OT,meshphong_frag:BT,meshphysical_vert:VT,meshphysical_frag:zT,meshtoon_vert:kT,meshtoon_frag:GT,points_vert:HT,points_frag:WT,shadow_vert:XT,shadow_frag:qT,sprite_vert:YT,sprite_frag:$T},bt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Xn={basic:{uniforms:an([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:an([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:an([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:an([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:an([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new zt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:an([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:an([bt.points,bt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:an([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:an([bt.common,bt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:an([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:an([bt.sprite,bt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:an([bt.common,bt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:an([bt.lights,bt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Xn.physical={uniforms:an([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const zo={r:0,b:0,g:0},KT=new pe,i0=new Ht;i0.set(-1,0,0,0,1,0,0,0,1);function ZT(n,t,e,i,s,r){const o=new zt(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){const y=M.backgroundBlurriness>0;S=t.get(S,y)}return S}function g(M){let S=!1;const y=d(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),S=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,S){const y=d(S);y&&(y.isCubeTexture||y.mapping===Ga)?(c===void 0&&(c=new qe(new oo(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:sr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(KT.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(i0),c.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new qe(new ao(2,2),new ii({name:"BackgroundMaterial",uniforms:sr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,S){M.getRGB(zo,Qg(n)),e.buffers.color.setClear(zo.r,zo.g,zo.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:x,dispose:p}}function jT(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(D,O,X,q,P){let H=!1;const U=f(D,q,X,O);r!==U&&(r=U,c(r.object)),H=d(D,q,X,P),H&&g(D,q,X,P),P!==null&&t.update(P,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(D,O,X,q),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function f(D,O,X,q){const P=q.wireframe===!0;let H=i[O.id];H===void 0&&(H={},i[O.id]=H);const U=D.isInstancedMesh===!0?D.id:0;let G=H[U];G===void 0&&(G={},H[U]=G);let Q=G[X.id];Q===void 0&&(Q={},G[X.id]=Q);let ft=Q[P];return ft===void 0&&(ft=h(l()),Q[P]=ft),ft}function h(D){const O=[],X=[],q=[];for(let P=0;P<e;P++)O[P]=0,X[P]=0,q[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:q,object:D,attributes:{},index:null}}function d(D,O,X,q){const P=r.attributes,H=O.attributes;let U=0;const G=X.getAttributes();for(const Q in G)if(G[Q].location>=0){const ct=P[Q];let dt=H[Q];if(dt===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(dt=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(dt=D.instanceColor)),ct===void 0||ct.attribute!==dt||dt&&ct.data!==dt.data)return!0;U++}return r.attributesNum!==U||r.index!==q}function g(D,O,X,q){const P={},H=O.attributes;let U=0;const G=X.getAttributes();for(const Q in G)if(G[Q].location>=0){let ct=H[Q];ct===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor));const dt={};dt.attribute=ct,ct&&ct.data&&(dt.data=ct.data),P[Q]=dt,U++}r.attributes=P,r.attributesNum=U,r.index=q}function x(){const D=r.newAttributes;for(let O=0,X=D.length;O<X;O++)D[O]=0}function m(D){p(D,0)}function p(D,O){const X=r.newAttributes,q=r.enabledAttributes,P=r.attributeDivisors;X[D]=1,q[D]===0&&(n.enableVertexAttribArray(D),q[D]=1),P[D]!==O&&(n.vertexAttribDivisor(D,O),P[D]=O)}function M(){const D=r.newAttributes,O=r.enabledAttributes;for(let X=0,q=O.length;X<q;X++)O[X]!==D[X]&&(n.disableVertexAttribArray(X),O[X]=0)}function S(D,O,X,q,P,H,U){U===!0?n.vertexAttribIPointer(D,O,X,P,H):n.vertexAttribPointer(D,O,X,q,P,H)}function y(D,O,X,q){x();const P=q.attributes,H=X.getAttributes(),U=O.defaultAttributeValues;for(const G in H){const Q=H[G];if(Q.location>=0){let ft=P[G];if(ft===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor)),ft!==void 0){const ct=ft.normalized,dt=ft.itemSize,Lt=t.get(ft);if(Lt===void 0)continue;const Ot=Lt.buffer,Rt=Lt.type,st=Lt.bytesPerElement,ot=Rt===n.INT||Rt===n.UNSIGNED_INT||ft.gpuType===hh;if(ft.isInterleavedBufferAttribute){const lt=ft.data,xt=lt.stride,Ct=ft.offset;if(lt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Q.locationSize;Pt++)p(Q.location+Pt,lt.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Pt=0;Pt<Q.locationSize;Pt++)m(Q.location+Pt);n.bindBuffer(n.ARRAY_BUFFER,Ot);for(let Pt=0;Pt<Q.locationSize;Pt++)S(Q.location+Pt,dt/Q.locationSize,Rt,ct,xt*st,(Ct+dt/Q.locationSize*Pt)*st,ot)}else{if(ft.isInstancedBufferAttribute){for(let lt=0;lt<Q.locationSize;lt++)p(Q.location+lt,ft.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let lt=0;lt<Q.locationSize;lt++)m(Q.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Ot);for(let lt=0;lt<Q.locationSize;lt++)S(Q.location+lt,dt/Q.locationSize,Rt,ct,dt*st,dt/Q.locationSize*lt*st,ot)}}else if(U!==void 0){const ct=U[G];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(Q.location,ct);break;case 3:n.vertexAttrib3fv(Q.location,ct);break;case 4:n.vertexAttrib4fv(Q.location,ct);break;default:n.vertexAttrib1fv(Q.location,ct)}}}}M()}function b(){A();for(const D in i){const O=i[D];for(const X in O){const q=O[X];for(const P in q){const H=q[P];for(const U in H)u(H[U].object),delete H[U];delete q[P]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const X in O){const q=O[X];for(const P in q){const H=q[P];for(const U in H)u(H[U].object),delete H[U];delete q[P]}}delete i[D.id]}function R(D){for(const O in i){const X=i[O];for(const q in X){const P=X[q];if(P[D.id]===void 0)continue;const H=P[D.id];for(const U in H)u(H[U].object),delete H[U];delete P[D.id]}}}function v(D){for(const O in i){const X=i[O],q=D.isInstancedMesh===!0?D.id:0,P=X[q];if(P!==void 0){for(const H in P){const U=P[H];for(const G in U)u(U[G].object),delete U[G];delete P[H]}delete X[q],Object.keys(X).length===0&&delete i[O]}}}function A(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function JT(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function QT(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Bn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const v=R===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==On&&!v)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Ft("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,maxSamples:b,samples:E}}function tA(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new $i,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,S=M*4;let y=p.clippingState||null;l.value=y,y=u(g,h,S,d);for(let b=0;b!==S;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=d;S!==x;++S,y+=4)o.copy(f[S]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const Fi=4,Fd=[.125,.215,.35,.446,.526,.582],Zi=20,eA=256,br=new e0,Od=new zt;let Fl=null,Ol=0,Bl=0,Vl=!1;const nA=new F;class Bd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=nA}=r;Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fl,Ol,Bl),this._renderer.xr.enabled=Vl,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:_i,format:Bn,colorSpace:ga,depthBuffer:!1},s=Vd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vd(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iA(r)),this._blurMaterial=rA(r,t,e),this._ggxMaterial=sA(r,t,e)}return s}_compileMaterial(t){const e=new qe(new cn,t);this._renderer.compile(e,br)}_sceneToCubeUV(t,e,i,s,r){const l=new vn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Od),f.toneMapping=ti,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new oo,new Wn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Od),p=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const b=this._cubeSize;Is(s,y*b,S>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===is||t.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Is(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,br)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Fi?i-g+Fi:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Is(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Is(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,br)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ee("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Zi;m>Zi&&Ft(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const p=[];let M=0;for(let R=0;R<Zi;++R){const v=R/x,A=Math.exp(-v*v/2);p.push(A),R===0?M+=A:R<m&&(M+=2*A)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const y=this._sizeLods[s],b=3*y*(s>S-Fi?s-S+Fi:0),E=4*(this._cubeSize-y);Is(e,b,E,3*y,2*y),l.setRenderTarget(e),l.render(f,br)}}function iA(n){const t=[],e=[],i=[];let s=n;const r=n-Fi+1+Fd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Fi?l=Fd[o-n+Fi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*d),S=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let E=0;E<d;E++){const R=E%3*2/3-1,v=E>2?0:-1,A=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];M.set(A,x*g*E),S.set(h,m*g*E);const L=[E,E,E,E,E,E];y.set(L,p*g*E)}const b=new cn;b.setAttribute("position",new nn(M,x)),b.setAttribute("uv",new nn(S,m)),b.setAttribute("faceIndex",new nn(y,p)),i.push(new qe(b,null)),s>Fi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Vd(n,t,e){const i=new ei(n,t,e);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function sA(n,t,e){return new ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function rA(n,t,e){const i=new Float32Array(Zi),s=new F(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function zd(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function kd(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ha(){return`

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
	`}class s0 extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Kg(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oo(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:pi});r.uniforms.tEquirect.value=e;const o=new qe(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=en),new uE(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function oA(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===sl||d===rl)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const x=new s0(g.height);return x.fromEquirectangularTexture(n,h),t.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,g=d===sl||d===rl,x=d===is||d===nr;if(g||x){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Bd(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new Bd(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===sl?h.mapping=is:d===rl&&(h.mapping=nr),h}function l(h){let d=0;const g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function aA(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ks("WebGLRenderer: "+i+" extension not supported."),s}}}function lA(n,t,e,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(d!==null){const M=d.array;x=d.version;for(let S=0,y=M.length;S<y;S+=3){const b=M[S+0],E=M[S+1],R=M[S+2];h.push(b,E,E,R,R,b)}}else{const M=g.array;x=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const b=S+0,E=S+1,R=S+2;h.push(b,E,E,R,R,b)}}const m=new(g.count>=65535?Gg:kg)(h,1);m.version=x;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function cA(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),e.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*o,d),e.update(h,i,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function uA(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function hA(n,t,e){const i=new WeakMap,s=new Pe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let A=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let y=a.attributes.position.count*S,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const E=new Float32Array(y*b*4*f),R=new Bg(E,y,b,f);R.type=On,R.needsUpdate=!0;const v=S*4;for(let L=0;L<f;L++){const D=m[L],O=p[L],X=M[L],q=y*b*4*L;for(let P=0;P<D.count;P++){const H=P*v;d===!0&&(s.fromBufferAttribute(D,P),E[q+H+0]=s.x,E[q+H+1]=s.y,E[q+H+2]=s.z,E[q+H+3]=0),g===!0&&(s.fromBufferAttribute(O,P),E[q+H+4]=s.x,E[q+H+5]=s.y,E[q+H+6]=s.z,E[q+H+7]=0),x===!0&&(s.fromBufferAttribute(X,P),E[q+H+8]=s.x,E[q+H+9]=s.y,E[q+H+10]=s.z,E[q+H+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:R,size:new Nt(y,b)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function fA(n,t,e,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const dA={[bg]:"LINEAR_TONE_MAPPING",[uh]:"REINHARD_TONE_MAPPING",[Tg]:"CINEON_TONE_MAPPING",[Ag]:"ACES_FILMIC_TONE_MAPPING",[Rg]:"AGX_TONE_MAPPING",[Cg]:"NEUTRAL_TONE_MAPPING",[wg]:"CUSTOM_TONE_MAPPING"};function pA(n,t,e,i,s,r){const o=new ei(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new ir(t,e):void 0}),a=new ei(t,e,{type:_i,depthBuffer:!1,stencilBuffer:!1}),l=new cn;l.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ke([0,2,0,0,2,0],2));const c=new aE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new qe(l,c),f=new e0(-1,1,1,-1,0,1);let h=null,d=null,g=!1,x,m=null,p=[],M=!1;this.setSize=function(S,y){o.setSize(S,y),a.setSize(S,y);for(let b=0;b<p.length;b++){const E=p[b];E.setSize&&E.setSize(S,y)}},this.setEffects=function(S){p=S,M=p.length>0&&p[0].isRenderPass===!0;const y=o.width,b=o.height;for(let E=0;E<p.length;E++){const R=p[E];R.setSize&&R.setSize(y,b)}},this.begin=function(S,y){if(g||S.toneMapping===ti&&p.length===0)return!1;if(m=y,y!==null){const b=y.width,E=y.height;(o.width!==b||o.height!==E)&&this.setSize(b,E)}return M===!1&&S.setRenderTarget(o),x=S.toneMapping,S.toneMapping=ti,!0},this.hasRenderPass=function(){return M},this.end=function(S,y){S.toneMapping=x,g=!0;let b=o,E=a;for(let R=0;R<p.length;R++){const v=p[R];if(v.enabled!==!1&&(v.render(S,E,b,y),v.needsSwap!==!1)){const A=b;b=E,E=A}}if(h!==S.outputColorSpace||d!==S.toneMapping){h=S.outputColorSpace,d=S.toneMapping,c.defines={},ne.getTransfer(h)===de&&(c.defines.SRGB_TRANSFER="");const R=dA[d];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(m),S.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const r0=new $e,uu=new ir(1,1),o0=new Bg,a0=new yS,l0=new Kg,Gd=[],Hd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),qd=new Float32Array(4);function fr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Gd[s];if(r===void 0&&(r=new Float32Array(s),Gd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function He(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Wa(n,t){let e=Hd[t];e===void 0&&(e=new Int32Array(t),Hd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function mA(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function gA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2fv(this.addr,t),He(e,t)}}function vA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;n.uniform3fv(this.addr,t),He(e,t)}}function _A(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4fv(this.addr,t),He(e,t)}}function xA(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,i))return;qd.set(i),n.uniformMatrix2fv(this.addr,!1,qd),He(e,i)}}function yA(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,i))return;Xd.set(i),n.uniformMatrix3fv(this.addr,!1,Xd),He(e,i)}}function MA(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,i))return;Wd.set(i),n.uniformMatrix4fv(this.addr,!1,Wd),He(e,i)}}function SA(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function EA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2iv(this.addr,t),He(e,t)}}function bA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3iv(this.addr,t),He(e,t)}}function TA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4iv(this.addr,t),He(e,t)}}function AA(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2uiv(this.addr,t),He(e,t)}}function RA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3uiv(this.addr,t),He(e,t)}}function CA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4uiv(this.addr,t),He(e,t)}}function PA(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(uu.compareFunction=e.isReversedDepthBuffer()?xh:_h,r=uu):r=r0,e.setTexture2D(t||r,s)}function DA(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||a0,s)}function LA(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||l0,s)}function IA(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||o0,s)}function NA(n){switch(n){case 5126:return mA;case 35664:return gA;case 35665:return vA;case 35666:return _A;case 35674:return xA;case 35675:return yA;case 35676:return MA;case 5124:case 35670:return SA;case 35667:case 35671:return EA;case 35668:case 35672:return bA;case 35669:case 35673:return TA;case 5125:return AA;case 36294:return wA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return PA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return IA}}function UA(n,t){n.uniform1fv(this.addr,t)}function FA(n,t){const e=fr(t,this.size,2);n.uniform2fv(this.addr,e)}function OA(n,t){const e=fr(t,this.size,3);n.uniform3fv(this.addr,e)}function BA(n,t){const e=fr(t,this.size,4);n.uniform4fv(this.addr,e)}function VA(n,t){const e=fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zA(n,t){const e=fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function kA(n,t){const e=fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function GA(n,t){n.uniform1iv(this.addr,t)}function HA(n,t){n.uniform2iv(this.addr,t)}function WA(n,t){n.uniform3iv(this.addr,t)}function XA(n,t){n.uniform4iv(this.addr,t)}function qA(n,t){n.uniform1uiv(this.addr,t)}function YA(n,t){n.uniform2uiv(this.addr,t)}function $A(n,t){n.uniform3uiv(this.addr,t)}function KA(n,t){n.uniform4uiv(this.addr,t)}function ZA(n,t,e){const i=this.cache,s=t.length,r=Wa(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),He(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=uu:o=r0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function jA(n,t,e){const i=this.cache,s=t.length,r=Wa(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||a0,r[o])}function JA(n,t,e){const i=this.cache,s=t.length,r=Wa(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||l0,r[o])}function QA(n,t,e){const i=this.cache,s=t.length,r=Wa(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||o0,r[o])}function t1(n){switch(n){case 5126:return UA;case 35664:return FA;case 35665:return OA;case 35666:return BA;case 35674:return VA;case 35675:return zA;case 35676:return kA;case 5124:case 35670:return GA;case 35667:case 35671:return HA;case 35668:case 35672:return WA;case 35669:case 35673:return XA;case 5125:return qA;case 36294:return YA;case 36295:return $A;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return QA}}class e1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=NA(e.type)}}class n1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t1(e.type)}}class i1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const zl=/(\w+)(\])?(\[|\.)?/g;function Yd(n,t){n.seq.push(t),n.map[t.id]=t}function s1(n,t,e){const i=n.name,s=i.length;for(zl.lastIndex=0;;){const r=zl.exec(i),o=zl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yd(e,c===void 0?new e1(a,n,t):new n1(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new i1(a),Yd(e,f)),e=f}}}class na{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);s1(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function $d(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const r1=37297;let o1=0;function a1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Kd=new Ht;function l1(n){ne._getMatrix(Kd,ne.workingColorSpace,n);const t=`mat3( ${Kd.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case va:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+a1(n.getShaderSource(t),a)}else return r}function c1(n,t){const e=l1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const u1={[bg]:"Linear",[uh]:"Reinhard",[Tg]:"Cineon",[Ag]:"ACESFilmic",[Rg]:"AgX",[Cg]:"Neutral",[wg]:"Custom"};function h1(n,t){const e=u1[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ko=new F;function f1(){ne.getLuminanceCoefficients(ko);const n=ko.x.toFixed(4),t=ko.y.toFixed(4),e=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function p1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function m1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Lr(n){return n!==""}function jd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const g1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(n){return n.replace(g1,_1)}const v1=new Map;function _1(n,t){let e=$t[t];if(e===void 0){const i=v1.get(t);if(i!==void 0)e=$t[i],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return hu(e)}const x1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(n){return n.replace(x1,y1)}function y1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const M1={[jo]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function S1(n){return M1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const E1={[is]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE",[Ga]:"ENVMAP_TYPE_CUBE_UV"};function b1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":E1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const T1={[nr]:"ENVMAP_MODE_REFRACTION"};function A1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":T1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const w1={[Eg]:"ENVMAP_BLENDING_MULTIPLY",[QM]:"ENVMAP_BLENDING_MIX",[tS]:"ENVMAP_BLENDING_ADD"};function R1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":w1[n.combine]||"ENVMAP_BLENDING_NONE"}function C1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function P1(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=S1(e),c=b1(e),u=A1(e),f=R1(e),h=C1(e),d=d1(e),g=p1(r),x=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?$t.tonemapping_pars_fragment:"",e.toneMapping!==ti?h1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,c1("linearToOutputTexel",e.outputColorSpace),f1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=hu(o),o=jd(o,e),o=Jd(o,e),a=hu(a),a=jd(a,e),a=Jd(a,e),o=Qd(o),a=Qd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,y=M+p+a,b=$d(s,s.VERTEX_SHADER,S),E=$d(s,s.FRAGMENT_SHADER,y);s.attachShader(x,b),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(b)||"",q=s.getShaderInfoLog(E)||"",P=O.trim(),H=X.trim(),U=q.trim();let G=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,b,E);else{const ft=Zd(s,b,"vertex"),ct=Zd(s,E,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+ft+`
`+ct)}else P!==""?Ft("WebGLProgram: Program Info Log:",P):(H===""||U==="")&&(Q=!1);Q&&(D.diagnostics={runnable:G,programLog:P,vertexShader:{log:H,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(b),s.deleteShader(E),v=new na(s,x),A=m1(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,r1)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}let D1=0;class L1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new I1(t),e.set(t,i)),i}}class I1{constructor(t){this.id=D1++,this.code=t,this.usedTimes=0}}function N1(n){return n===ss||n===pa||n===ma}function U1(n,t,e,i,s,r){const o=new Mh,a=new L1,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,A,L,D,O,X){const q=D.fog,P=O.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=t.get(v.envMap||H,U),Q=G&&G.mapping===Ga?G.image.height:null,ft=d[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Ft("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ct=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,dt=ct!==void 0?ct.length:0;let Lt=0;P.morphAttributes.position!==void 0&&(Lt=1),P.morphAttributes.normal!==void 0&&(Lt=2),P.morphAttributes.color!==void 0&&(Lt=3);let Ot,Rt,st,ot;if(ft){const St=Xn[ft];Ot=St.vertexShader,Rt=St.fragmentShader}else{Ot=v.vertexShader,Rt=v.fragmentShader;const St=a.getVertexShaderStage(v),he=a.getFragmentShaderStage(v);a.update(v,St,he),st=St.id,ot=he.id}const lt=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),Ct=O.isInstancedMesh===!0,Pt=O.isBatchedMesh===!0,Jt=!!v.map,Bt=!!v.matcap,Xt=!!G,Wt=!!v.aoMap,Gt=!!v.lightMap,te=!!v.bumpMap&&v.wireframe===!1,ie=!!v.normalMap,ce=!!v.displacementMap,ue=!!v.emissiveMap,se=!!v.metalnessMap,ve=!!v.roughnessMap,V=v.anisotropy>0,Oe=v.clearcoat>0,jt=v.dispersion>0,C=v.iridescence>0,_=v.sheen>0,w=v.transmission>0,N=V&&!!v.anisotropyMap,B=Oe&&!!v.clearcoatMap,et=Oe&&!!v.clearcoatNormalMap,j=Oe&&!!v.clearcoatRoughnessMap,z=C&&!!v.iridescenceMap,W=C&&!!v.iridescenceThicknessMap,nt=_&&!!v.sheenColorMap,tt=_&&!!v.sheenRoughnessMap,rt=!!v.specularMap,it=!!v.specularColorMap,pt=!!v.specularIntensityMap,mt=w&&!!v.transmissionMap,Mt=w&&!!v.thicknessMap,I=!!v.gradientMap,ht=!!v.alphaMap,K=v.alphaTest>0,gt=!!v.alphaHash,vt=!!v.extensions;let at=ti;v.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(at=n.toneMapping);const Tt={shaderID:ft,shaderType:v.type,shaderName:v.name,vertexShader:Ot,fragmentShader:Rt,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Pt,batchingColor:Pt&&O._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&O.instanceColor!==null,instancingMorph:Ct&&O.morphTexture!==null,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Jt,matcap:Bt,envMap:Xt,envMapMode:Xt&&G.mapping,envMapCubeUVHeight:Q,aoMap:Wt,lightMap:Gt,bumpMap:te,normalMap:ie,displacementMap:ce,emissiveMap:ue,normalMapObjectSpace:ie&&v.normalMapType===iS,normalMapTangentSpace:ie&&v.normalMapType===td,packedNormalMap:ie&&v.normalMapType===td&&N1(v.normalMap.format),metalnessMap:se,roughnessMap:ve,anisotropy:V,anisotropyMap:N,clearcoat:Oe,clearcoatMap:B,clearcoatNormalMap:et,clearcoatRoughnessMap:j,dispersion:jt,iridescence:C,iridescenceMap:z,iridescenceThicknessMap:W,sheen:_,sheenColorMap:nt,sheenRoughnessMap:tt,specularMap:rt,specularColorMap:it,specularIntensityMap:pt,transmission:w,transmissionMap:mt,thicknessMap:Mt,gradientMap:I,opaque:v.transparent===!1&&v.blending===$s&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:K,alphaHash:gt,combine:v.combine,mapUv:Jt&&g(v.map.channel),aoMapUv:Wt&&g(v.aoMap.channel),lightMapUv:Gt&&g(v.lightMap.channel),bumpMapUv:te&&g(v.bumpMap.channel),normalMapUv:ie&&g(v.normalMap.channel),displacementMapUv:ce&&g(v.displacementMap.channel),emissiveMapUv:ue&&g(v.emissiveMap.channel),metalnessMapUv:se&&g(v.metalnessMap.channel),roughnessMapUv:ve&&g(v.roughnessMap.channel),anisotropyMapUv:N&&g(v.anisotropyMap.channel),clearcoatMapUv:B&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:W&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:tt&&g(v.sheenRoughnessMap.channel),specularMapUv:rt&&g(v.specularMap.channel),specularColorMapUv:it&&g(v.specularColorMap.channel),specularIntensityMapUv:pt&&g(v.specularIntensityMap.channel),transmissionMapUv:mt&&g(v.transmissionMap.channel),thicknessMapUv:Mt&&g(v.thicknessMap.channel),alphaMapUv:ht&&g(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ie||V),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!P.attributes.uv&&(Jt||ht),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&ie===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Lt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:Jt&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===de,decodeVideoTextureEmissive:ue&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===de,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===hi,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:vt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&v.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)A.push(L),A.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(p(A,v),M(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function S(v){const A=d[v.type];let L;if(A){const D=Xn[A];L=sE.clone(D.uniforms)}else L=v.uniforms;return L}function y(v,A){let L=u.get(A);return L!==void 0?++L.usedTimes:(L=new P1(n,A,v,s),c.push(L),u.set(A,L)),L}function b(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){a.remove(v)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:R}}function F1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function O1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function ep(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function np(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,x,m,p){let M=n[t];return M===void 0?(M={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},n[t]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=g,M.materialVariant=o(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=m,M.group=p),t++,M}function l(h,d,g,x,m,p){const M=a(h,d,g,x,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):e.push(M)}function c(h,d,g,x,m,p){const M=a(h,d,g,x,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,d,g){e.length>1&&e.sort(h||O1),i.length>1&&i.sort(d||ep),s.length>1&&s.sort(d||ep),g&&(e.reverse(),i.reverse(),s.reverse())}function f(){for(let h=t,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function B1(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new np,n.set(i,[o])):s>=r.length?(o=new np,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function V1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new zt};break;case"SpotLight":e={position:new F,direction:new F,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function z1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let k1=0;function G1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function H1(n){const t=new V1,e=z1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new pe,o=new pe;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,M=0,S=0,y=0,b=0,E=0,R=0;c.sort(G1);for(let A=0,L=c.length;A<L;A++){const D=c[A],O=D.color,X=D.intensity,q=D.distance;let P=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ss?P=D.shadow.map.texture:P=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=O.r*X,f+=O.g*X,h+=O.b*X;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],X);R++}else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const U=D.shadow,G=e.get(D);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=P,i.directionalShadowMatrix[d]=D.shadow.matrix,M++}i.directional[d]=H,d++}else if(D.isSpotLight){const H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(O).multiplyScalar(X),H.distance=q,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[x]=H;const U=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,U.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[x]=U.matrix,D.castShadow){const G=e.get(D);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=P,y++}x++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(O).multiplyScalar(X),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=H,m++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const U=D.shadow,G=e.get(D);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,G.shadowCameraNear=U.camera.near,G.shadowCameraFar=U.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=P,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=H,g++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(X),H.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==d||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==M||v.numPointShadows!==S||v.numSpotShadows!==y||v.numSpotMaps!==b||v.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,v.directionalLength=d,v.pointLength=g,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=M,v.numPointShadows=S,v.numSpotShadows=y,v.numSpotMaps=b,v.numLightProbes=R,i.version=k1++)}function l(c,u){let f=0,h=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(S.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function ip(n){const t=new H1(n),e=[],i=[],s=[];function r(h){f.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function W1(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ip(n),t.set(s,[a])):r>=o.length?(a=new ip(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const X1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q1=`uniform sampler2D shadow_pass;
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
}`,Y1=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],$1=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],sp=new pe,Tr=new F,kl=new F;function K1(n,t,e){let i=new Yg;const s=new Nt,r=new Nt,o=new Pe,a=new lE,l=new cE,c={},u=e.maxTextureSize,f={[Vi]:un,[un]:Vi,[hi]:hi},h=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:X1,fragmentShader:q1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let p=this.type;this.render=function(E,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===NM&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jo);const A=n.getRenderTarget(),L=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(pi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const X=p!==this.type;X&&R.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(P=>P.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,P=E.length;q<P;q++){const H=E[q],U=H.shadow;if(U===void 0){Ft("WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const G=U.getFrameExtents();s.multiply(G),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,U.mapSize.y=r.y));const Q=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=Q,U.map===null||X===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Pr){if(H.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ei(s.x,s.y,{format:ss,type:_i,minFilter:en,magFilter:en,generateMipmaps:!1}),U.map.texture.name=H.name+".shadowMap",U.map.depthTexture=new ir(s.x,s.y,On),U.map.depthTexture.name=H.name+".shadowMapDepth",U.map.depthTexture.format=xi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ye,U.map.depthTexture.magFilter=Ye}else H.isPointLight?(U.map=new s0(s.x),U.map.depthTexture=new kS(s.x,ni)):(U.map=new ei(s.x,s.y),U.map.depthTexture=new ir(s.x,s.y,ni)),U.map.depthTexture.name=H.name+".shadowMap",U.map.depthTexture.format=xi,this.type===jo?(U.map.depthTexture.compareFunction=Q?xh:_h,U.map.depthTexture.minFilter=en,U.map.depthTexture.magFilter=en):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ye,U.map.depthTexture.magFilter=Ye);U.camera.updateProjectionMatrix()}const ft=U.map.isWebGLCubeRenderTarget?6:1;for(let ct=0;ct<ft;ct++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,ct),n.clear();else{ct===0&&(n.setRenderTarget(U.map),n.clear());const dt=U.getViewport(ct);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),O.viewport(o)}if(H.isPointLight){const dt=U.camera,Lt=U.matrix,Ot=H.distance||dt.far;Ot!==dt.far&&(dt.far=Ot,dt.updateProjectionMatrix()),Tr.setFromMatrixPosition(H.matrixWorld),dt.position.copy(Tr),kl.copy(dt.position),kl.add(Y1[ct]),dt.up.copy($1[ct]),dt.lookAt(kl),dt.updateMatrixWorld(),Lt.makeTranslation(-Tr.x,-Tr.y,-Tr.z),sp.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),U._frustum.setFromProjectionMatrix(sp,dt.coordinateSystem,dt.reversedDepth)}else U.updateMatrices(H);i=U.getFrustum(),y(R,v,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Pr&&M(U,v),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,L,D)};function M(E,R){const v=t.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ei(s.x,s.y,{format:ss,type:_i})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,v,h,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,v,d,x,null)}function S(E,R,v,A){let L=null;const D=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)L=D;else if(L=v.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=L.uuid,X=R.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let P=q[X];P===void 0&&(P=L.clone(),q[X]=P,R.addEventListener("dispose",b)),L=P}if(L.visible=R.visible,L.wireframe=R.wireframe,A===Pr?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:f[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const O=n.properties.get(L);O.light=v}return L}function y(E,R,v,A,L){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Pr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const X=t.update(E),q=E.material;if(Array.isArray(q)){const P=X.groups;for(let H=0,U=P.length;H<U;H++){const G=P[H],Q=q[G.materialIndex];if(Q&&Q.visible){const ft=S(E,Q,A,L);E.onBeforeShadow(n,E,R,v,X,ft,G),n.renderBufferDirect(v,null,X,ft,E,G),E.onAfterShadow(n,E,R,v,X,ft,G)}}}else if(q.visible){const P=S(E,q,A,L);E.onBeforeShadow(n,E,R,v,X,P,null),n.renderBufferDirect(v,null,X,P,E,null),E.onAfterShadow(n,E,R,v,X,P,null)}}const O=E.children;for(let X=0,q=O.length;X<q;X++)y(O[X],R,v,A,L)}function b(E){E.target.removeEventListener("dispose",b);for(const v in c){const A=c[v],L=E.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function Z1(n,t){function e(){let I=!1;const ht=new Pe;let K=null;const gt=new Pe(0,0,0,0);return{setMask:function(vt){K!==vt&&!I&&(n.colorMask(vt,vt,vt,vt),K=vt)},setLocked:function(vt){I=vt},setClear:function(vt,at,Tt,St,he){he===!0&&(vt*=St,at*=St,Tt*=St),ht.set(vt,at,Tt,St),gt.equals(ht)===!1&&(n.clearColor(vt,at,Tt,St),gt.copy(ht))},reset:function(){I=!1,K=null,gt.set(-1,0,0,0)}}}function i(){let I=!1,ht=!1,K=null,gt=null,vt=null;return{setReversed:function(at){if(ht!==at){const Tt=t.get("EXT_clip_control");at?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),ht=at;const St=vt;vt=null,this.setClear(St)}},getReversed:function(){return ht},setTest:function(at){at?lt(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(at){K!==at&&!I&&(n.depthMask(at),K=at)},setFunc:function(at){if(ht&&(at=dS[at]),gt!==at){switch(at){case yc:n.depthFunc(n.NEVER);break;case Mc:n.depthFunc(n.ALWAYS);break;case Sc:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case Ec:n.depthFunc(n.EQUAL);break;case bc:n.depthFunc(n.GEQUAL);break;case Tc:n.depthFunc(n.GREATER);break;case Ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=at}},setLocked:function(at){I=at},setClear:function(at){vt!==at&&(vt=at,ht&&(at=1-at),n.clearDepth(at))},reset:function(){I=!1,K=null,gt=null,vt=null,ht=!1}}}function s(){let I=!1,ht=null,K=null,gt=null,vt=null,at=null,Tt=null,St=null,he=null;return{setTest:function(fe){I||(fe?lt(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(fe){ht!==fe&&!I&&(n.stencilMask(fe),ht=fe)},setFunc:function(fe,qt,Kt){(K!==fe||gt!==qt||vt!==Kt)&&(n.stencilFunc(fe,qt,Kt),K=fe,gt=qt,vt=Kt)},setOp:function(fe,qt,Kt){(at!==fe||Tt!==qt||St!==Kt)&&(n.stencilOp(fe,qt,Kt),at=fe,Tt=qt,St=Kt)},setLocked:function(fe){I=fe},setClear:function(fe){he!==fe&&(n.clearStencil(fe),he=fe)},reset:function(){I=!1,ht=null,K=null,gt=null,vt=null,at=null,Tt=null,St=null,he=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,S=null,y=null,b=null,E=null,R=null,v=new zt(0,0,0),A=0,L=!1,D=null,O=null,X=null,q=null,P=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,G=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),U=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),U=G>=2);let ft=null,ct={};const dt=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),Ot=new Pe().fromArray(dt),Rt=new Pe().fromArray(Lt);function st(I,ht,K,gt){const vt=new Uint8Array(4),at=n.createTexture();n.bindTexture(I,at),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Tt=0;Tt<K;Tt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(ht+Tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return at}const ot={};ot[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),ot[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ot[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(er),te(!1),ie(jf),lt(n.CULL_FACE),Wt(pi);function lt(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function xt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ct(I,ht){return h[I]!==ht?(n.bindFramebuffer(I,ht),h[I]=ht,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ht),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function Pt(I,ht){let K=g,gt=!1;if(I){K=d.get(ht),K===void 0&&(K=[],d.set(ht,K));const vt=I.textures;if(K.length!==vt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let at=0,Tt=vt.length;at<Tt;at++)K[at]=n.COLOR_ATTACHMENT0+at;K.length=vt.length,gt=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,gt=!0);gt&&n.drawBuffers(K)}function Jt(I){return x!==I?(n.useProgram(I),x=I,!0):!1}const Bt={[Ki]:n.FUNC_ADD,[FM]:n.FUNC_SUBTRACT,[OM]:n.FUNC_REVERSE_SUBTRACT};Bt[BM]=n.MIN,Bt[VM]=n.MAX;const Xt={[zM]:n.ZERO,[kM]:n.ONE,[GM]:n.SRC_COLOR,[_c]:n.SRC_ALPHA,[$M]:n.SRC_ALPHA_SATURATE,[qM]:n.DST_COLOR,[WM]:n.DST_ALPHA,[HM]:n.ONE_MINUS_SRC_COLOR,[xc]:n.ONE_MINUS_SRC_ALPHA,[YM]:n.ONE_MINUS_DST_COLOR,[XM]:n.ONE_MINUS_DST_ALPHA,[KM]:n.CONSTANT_COLOR,[ZM]:n.ONE_MINUS_CONSTANT_COLOR,[jM]:n.CONSTANT_ALPHA,[JM]:n.ONE_MINUS_CONSTANT_ALPHA};function Wt(I,ht,K,gt,vt,at,Tt,St,he,fe){if(I===pi){m===!0&&(xt(n.BLEND),m=!1);return}if(m===!1&&(lt(n.BLEND),m=!0),I!==UM){if(I!==p||fe!==L){if((M!==Ki||b!==Ki)&&(n.blendEquation(n.FUNC_ADD),M=Ki,b=Ki),fe)switch(I){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hs:n.blendFunc(n.ONE,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ee("WebGLState: Invalid blending: ",I);break}else switch(I){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jf:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qf:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",I);break}S=null,y=null,E=null,R=null,v.set(0,0,0),A=0,p=I,L=fe}return}vt=vt||ht,at=at||K,Tt=Tt||gt,(ht!==M||vt!==b)&&(n.blendEquationSeparate(Bt[ht],Bt[vt]),M=ht,b=vt),(K!==S||gt!==y||at!==E||Tt!==R)&&(n.blendFuncSeparate(Xt[K],Xt[gt],Xt[at],Xt[Tt]),S=K,y=gt,E=at,R=Tt),(St.equals(v)===!1||he!==A)&&(n.blendColor(St.r,St.g,St.b,he),v.copy(St),A=he),p=I,L=!1}function Gt(I,ht){I.side===hi?xt(n.CULL_FACE):lt(n.CULL_FACE);let K=I.side===un;ht&&(K=!K),te(K),I.blending===$s&&I.transparent===!1?Wt(pi):Wt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const gt=I.stencilWrite;a.setTest(gt),gt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ue(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function ie(I){I!==LM?(lt(n.CULL_FACE),I!==O&&(I===jf?n.cullFace(n.BACK):I===IM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),O=I}function ce(I){I!==X&&(U&&n.lineWidth(I),X=I)}function ue(I,ht,K){I?(lt(n.POLYGON_OFFSET_FILL),(q!==ht||P!==K)&&(q=ht,P=K,o.getReversed()&&(ht=-ht),n.polygonOffset(ht,K))):xt(n.POLYGON_OFFSET_FILL)}function se(I){I?lt(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function ve(I){I===void 0&&(I=n.TEXTURE0+H-1),ft!==I&&(n.activeTexture(I),ft=I)}function V(I,ht,K){K===void 0&&(ft===null?K=n.TEXTURE0+H-1:K=ft);let gt=ct[K];gt===void 0&&(gt={type:void 0,texture:void 0},ct[K]=gt),(gt.type!==I||gt.texture!==ht)&&(ft!==K&&(n.activeTexture(K),ft=K),n.bindTexture(I,ht||ot[I]),gt.type=I,gt.texture=ht)}function Oe(){const I=ct[ft];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function jt(){try{n.compressedTexImage2D(...arguments)}catch(I){ee("WebGLState:",I)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(I){ee("WebGLState:",I)}}function _(){try{n.texSubImage2D(...arguments)}catch(I){ee("WebGLState:",I)}}function w(){try{n.texSubImage3D(...arguments)}catch(I){ee("WebGLState:",I)}}function N(){try{n.compressedTexSubImage2D(...arguments)}catch(I){ee("WebGLState:",I)}}function B(){try{n.compressedTexSubImage3D(...arguments)}catch(I){ee("WebGLState:",I)}}function et(){try{n.texStorage2D(...arguments)}catch(I){ee("WebGLState:",I)}}function j(){try{n.texStorage3D(...arguments)}catch(I){ee("WebGLState:",I)}}function z(){try{n.texImage2D(...arguments)}catch(I){ee("WebGLState:",I)}}function W(){try{n.texImage3D(...arguments)}catch(I){ee("WebGLState:",I)}}function nt(I){return f[I]!==void 0?f[I]:n.getParameter(I)}function tt(I,ht){f[I]!==ht&&(n.pixelStorei(I,ht),f[I]=ht)}function rt(I){Ot.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ot.copy(I))}function it(I){Rt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Rt.copy(I))}function pt(I,ht){let K=c.get(ht);K===void 0&&(K=new WeakMap,c.set(ht,K));let gt=K.get(I);gt===void 0&&(gt=n.getUniformBlockIndex(ht,I.name),K.set(I,gt))}function mt(I,ht){const gt=c.get(ht).get(I);l.get(ht)!==gt&&(n.uniformBlockBinding(ht,gt,I.__bindingPointIndex),l.set(ht,gt))}function Mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ft=null,ct={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,S=null,y=null,b=null,E=null,R=null,v=new zt(0,0,0),A=0,L=!1,D=null,O=null,X=null,q=null,P=null,Ot.set(0,0,n.canvas.width,n.canvas.height),Rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:xt,bindFramebuffer:Ct,drawBuffers:Pt,useProgram:Jt,setBlending:Wt,setMaterial:Gt,setFlipSided:te,setCullFace:ie,setLineWidth:ce,setPolygonOffset:ue,setScissorTest:se,activeTexture:ve,bindTexture:V,unbindTexture:Oe,compressedTexImage2D:jt,compressedTexImage3D:C,texImage2D:z,texImage3D:W,pixelStorei:tt,getParameter:nt,updateUBOMapping:pt,uniformBlockBinding:mt,texStorage2D:et,texStorage3D:j,texSubImage2D:_,texSubImage3D:w,compressedTexSubImage2D:N,compressedTexSubImage3D:B,scissor:rt,viewport:it,reset:Mt}}function j1(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,_){return g?new OffscreenCanvas(C,_):xa("canvas")}function m(C,_,w){let N=1;const B=jt(C);if((B.width>w||B.height>w)&&(N=w/Math.max(B.width,B.height)),N<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const et=Math.floor(N*B.width),j=Math.floor(N*B.height);h===void 0&&(h=x(et,j));const z=_?x(et,j):h;return z.width=et,z.height=j,z.getContext("2d").drawImage(C,0,0,et,j),Ft("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+et+"x"+j+")."),z}else return"data"in C&&Ft("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,_,w,N,B,et=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j;N&&(j=t.get("EXT_texture_norm16"),j||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=_;if(_===n.RED&&(w===n.FLOAT&&(z=n.R32F),w===n.HALF_FLOAT&&(z=n.R16F),w===n.UNSIGNED_BYTE&&(z=n.R8),w===n.UNSIGNED_SHORT&&j&&(z=j.R16_EXT),w===n.SHORT&&j&&(z=j.R16_SNORM_EXT)),_===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(z=n.R8UI),w===n.UNSIGNED_SHORT&&(z=n.R16UI),w===n.UNSIGNED_INT&&(z=n.R32UI),w===n.BYTE&&(z=n.R8I),w===n.SHORT&&(z=n.R16I),w===n.INT&&(z=n.R32I)),_===n.RG&&(w===n.FLOAT&&(z=n.RG32F),w===n.HALF_FLOAT&&(z=n.RG16F),w===n.UNSIGNED_BYTE&&(z=n.RG8),w===n.UNSIGNED_SHORT&&j&&(z=j.RG16_EXT),w===n.SHORT&&j&&(z=j.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(w===n.UNSIGNED_BYTE&&(z=n.RG8UI),w===n.UNSIGNED_SHORT&&(z=n.RG16UI),w===n.UNSIGNED_INT&&(z=n.RG32UI),w===n.BYTE&&(z=n.RG8I),w===n.SHORT&&(z=n.RG16I),w===n.INT&&(z=n.RG32I)),_===n.RGB_INTEGER&&(w===n.UNSIGNED_BYTE&&(z=n.RGB8UI),w===n.UNSIGNED_SHORT&&(z=n.RGB16UI),w===n.UNSIGNED_INT&&(z=n.RGB32UI),w===n.BYTE&&(z=n.RGB8I),w===n.SHORT&&(z=n.RGB16I),w===n.INT&&(z=n.RGB32I)),_===n.RGBA_INTEGER&&(w===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),w===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),w===n.UNSIGNED_INT&&(z=n.RGBA32UI),w===n.BYTE&&(z=n.RGBA8I),w===n.SHORT&&(z=n.RGBA16I),w===n.INT&&(z=n.RGBA32I)),_===n.RGB&&(w===n.UNSIGNED_SHORT&&j&&(z=j.RGB16_EXT),w===n.SHORT&&j&&(z=j.RGB16_SNORM_EXT),w===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),w===n.UNSIGNED_INT_10F_11F_11F_REV&&(z=n.R11F_G11F_B10F)),_===n.RGBA){const W=et?va:ne.getTransfer(B);w===n.FLOAT&&(z=n.RGBA32F),w===n.HALF_FLOAT&&(z=n.RGBA16F),w===n.UNSIGNED_BYTE&&(z=W===de?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT&&j&&(z=j.RGBA16_EXT),w===n.SHORT&&j&&(z=j.RGBA16_SNORM_EXT),w===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function b(C,_){let w;return C?_===null||_===ni||_===jr?w=n.DEPTH24_STENCIL8:_===On?w=n.DEPTH32F_STENCIL8:_===Zr&&(w=n.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ni||_===jr?w=n.DEPTH_COMPONENT24:_===On?w=n.DEPTH_COMPONENT32F:_===Zr&&(w=n.DEPTH_COMPONENT16),w}function E(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ye&&C.minFilter!==en?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function R(C){const _=C.target;_.removeEventListener("dispose",R),A(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function v(C){const _=C.target;_.removeEventListener("dispose",v),D(_)}function A(C){const _=i.get(C);if(_.__webglInit===void 0)return;const w=C.source,N=d.get(w);if(N){const B=N[_.__cacheKey];B.usedTimes--,B.usedTimes===0&&L(C),Object.keys(N).length===0&&d.delete(w)}i.remove(C)}function L(C){const _=i.get(C);n.deleteTexture(_.__webglTexture);const w=C.source,N=d.get(w);delete N[_.__cacheKey],o.memory.textures--}function D(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(_.__webglFramebuffer[N]))for(let B=0;B<_.__webglFramebuffer[N].length;B++)n.deleteFramebuffer(_.__webglFramebuffer[N][B]);else n.deleteFramebuffer(_.__webglFramebuffer[N]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[N])}else{if(Array.isArray(_.__webglFramebuffer))for(let N=0;N<_.__webglFramebuffer.length;N++)n.deleteFramebuffer(_.__webglFramebuffer[N]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let N=0;N<_.__webglColorRenderbuffer.length;N++)_.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[N]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const w=C.textures;for(let N=0,B=w.length;N<B;N++){const et=i.get(w[N]);et.__webglTexture&&(n.deleteTexture(et.__webglTexture),o.memory.textures--),i.remove(w[N])}i.remove(C)}let O=0;function X(){O=0}function q(){return O}function P(C){O=C}function H(){const C=O;return C>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function U(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function G(C,_){const w=i.get(C);if(C.isVideoTexture&&V(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&w.__version!==C.version){const N=C.image;if(N===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(w,C,_);return}}else C.isExternalTexture&&(w.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+_)}function Q(C,_){const w=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&w.__version!==C.version){xt(w,C,_);return}else C.isExternalTexture&&(w.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+_)}function ft(C,_){const w=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&w.__version!==C.version){xt(w,C,_);return}e.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+_)}function ct(C,_){const w=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&w.__version!==C.version){Ct(w,C,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+_)}const dt={[wc]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Rc]:n.MIRRORED_REPEAT},Lt={[Ye]:n.NEAREST,[eS]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[ol]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},Ot={[sS]:n.NEVER,[cS]:n.ALWAYS,[rS]:n.LESS,[_h]:n.LEQUAL,[oS]:n.EQUAL,[xh]:n.GEQUAL,[aS]:n.GREATER,[lS]:n.NOTEQUAL};function Rt(C,_){if(_.type===On&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===en||_.magFilter===ol||_.magFilter===po||_.magFilter===Ji||_.minFilter===en||_.minFilter===ol||_.minFilter===po||_.minFilter===Ji)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,dt[_.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,dt[_.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,dt[_.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Lt[_.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Lt[_.minFilter]),_.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ot[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ye||_.minFilter!==po&&_.minFilter!==Ji||_.type===On&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const w=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function st(C,_){let w=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",R));const N=_.source;let B=d.get(N);B===void 0&&(B={},d.set(N,B));const et=U(_);if(et!==C.__cacheKey){B[et]===void 0&&(B[et]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,w=!0),B[et].usedTimes++;const j=B[C.__cacheKey];j!==void 0&&(B[C.__cacheKey].usedTimes--,j.usedTimes===0&&L(_)),C.__cacheKey=et,C.__webglTexture=B[et].texture}return w}function ot(C,_,w){return Math.floor(Math.floor(C/w)/_)}function lt(C,_,w,N){const et=C.updateRanges;if(et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,w,N,_.data);else{et.sort((tt,rt)=>tt.start-rt.start);let j=0;for(let tt=1;tt<et.length;tt++){const rt=et[j],it=et[tt],pt=rt.start+rt.count,mt=ot(it.start,_.width,4),Mt=ot(rt.start,_.width,4);it.start<=pt+1&&mt===Mt&&ot(it.start+it.count-1,_.width,4)===mt?rt.count=Math.max(rt.count,it.start+it.count-rt.start):(++j,et[j]=it)}et.length=j+1;const z=e.getParameter(n.UNPACK_ROW_LENGTH),W=e.getParameter(n.UNPACK_SKIP_PIXELS),nt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let tt=0,rt=et.length;tt<rt;tt++){const it=et[tt],pt=Math.floor(it.start/4),mt=Math.ceil(it.count/4),Mt=pt%_.width,I=Math.floor(pt/_.width),ht=mt,K=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Mt,I,ht,K,w,N,_.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,W),e.pixelStorei(n.UNPACK_SKIP_ROWS,nt)}}function xt(C,_,w){let N=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(N=n.TEXTURE_3D);const B=st(C,_),et=_.source;e.bindTexture(N,C.__webglTexture,n.TEXTURE0+w);const j=i.get(et);if(et.version!==j.__version||B===!0){if(e.activeTexture(n.TEXTURE0+w),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const K=ne.getPrimaries(ne.workingColorSpace),gt=_.colorSpace===Ni?null:ne.getPrimaries(_.colorSpace),vt=_.colorSpace===Ni||K===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let W=m(_.image,!1,s.maxTextureSize);W=Oe(_,W);const nt=r.convert(_.format,_.colorSpace),tt=r.convert(_.type);let rt=y(_.internalFormat,nt,tt,_.normalized,_.colorSpace,_.isVideoTexture);Rt(N,_);let it;const pt=_.mipmaps,mt=_.isVideoTexture!==!0,Mt=j.__version===void 0||B===!0,I=et.dataReady,ht=E(_,W);if(_.isDepthTexture)rt=b(_.format===Qi,_.type),Mt&&(mt?e.texStorage2D(n.TEXTURE_2D,1,rt,W.width,W.height):e.texImage2D(n.TEXTURE_2D,0,rt,W.width,W.height,0,nt,tt,null));else if(_.isDataTexture)if(pt.length>0){mt&&Mt&&e.texStorage2D(n.TEXTURE_2D,ht,rt,pt[0].width,pt[0].height);for(let K=0,gt=pt.length;K<gt;K++)it=pt[K],mt?I&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,it.width,it.height,nt,tt,it.data):e.texImage2D(n.TEXTURE_2D,K,rt,it.width,it.height,0,nt,tt,it.data);_.generateMipmaps=!1}else mt?(Mt&&e.texStorage2D(n.TEXTURE_2D,ht,rt,W.width,W.height),I&&lt(_,W,nt,tt)):e.texImage2D(n.TEXTURE_2D,0,rt,W.width,W.height,0,nt,tt,W.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){mt&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,rt,pt[0].width,pt[0].height,W.depth);for(let K=0,gt=pt.length;K<gt;K++)if(it=pt[K],_.format!==Bn)if(nt!==null)if(mt){if(I)if(_.layerUpdates.size>0){const vt=Ud(it.width,it.height,_.format,_.type);for(const at of _.layerUpdates){const Tt=it.data.subarray(at*vt/it.data.BYTES_PER_ELEMENT,(at+1)*vt/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,at,it.width,it.height,1,nt,Tt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,it.width,it.height,W.depth,nt,it.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,rt,it.width,it.height,W.depth,0,it.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,it.width,it.height,W.depth,nt,tt,it.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,rt,it.width,it.height,W.depth,0,nt,tt,it.data)}else{mt&&Mt&&e.texStorage2D(n.TEXTURE_2D,ht,rt,pt[0].width,pt[0].height);for(let K=0,gt=pt.length;K<gt;K++)it=pt[K],_.format!==Bn?nt!==null?mt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,it.width,it.height,nt,it.data):e.compressedTexImage2D(n.TEXTURE_2D,K,rt,it.width,it.height,0,it.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?I&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,it.width,it.height,nt,tt,it.data):e.texImage2D(n.TEXTURE_2D,K,rt,it.width,it.height,0,nt,tt,it.data)}else if(_.isDataArrayTexture)if(mt){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,rt,W.width,W.height,W.depth),I)if(_.layerUpdates.size>0){const K=Ud(W.width,W.height,_.format,_.type);for(const gt of _.layerUpdates){const vt=W.data.subarray(gt*K/W.data.BYTES_PER_ELEMENT,(gt+1)*K/W.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,gt,W.width,W.height,1,nt,tt,vt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,nt,tt,W.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,W.width,W.height,W.depth,0,nt,tt,W.data);else if(_.isData3DTexture)mt?(Mt&&e.texStorage3D(n.TEXTURE_3D,ht,rt,W.width,W.height,W.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,nt,tt,W.data)):e.texImage3D(n.TEXTURE_3D,0,rt,W.width,W.height,W.depth,0,nt,tt,W.data);else if(_.isFramebufferTexture){if(Mt)if(mt)e.texStorage2D(n.TEXTURE_2D,ht,rt,W.width,W.height);else{let K=W.width,gt=W.height;for(let vt=0;vt<ht;vt++)e.texImage2D(n.TEXTURE_2D,vt,rt,K,gt,0,nt,tt,null),K>>=1,gt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),W.parentNode!==K){K.appendChild(W),f.add(_),K.onpaint=gt=>{const vt=gt.changedElements;for(const at of f)vt.includes(at.image)&&(at.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,W);else{const vt=n.RGBA,at=n.RGBA,Tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,vt,at,Tt,W)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pt.length>0){if(mt&&Mt){const K=jt(pt[0]);e.texStorage2D(n.TEXTURE_2D,ht,rt,K.width,K.height)}for(let K=0,gt=pt.length;K<gt;K++)it=pt[K],mt?I&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,nt,tt,it):e.texImage2D(n.TEXTURE_2D,K,rt,nt,tt,it);_.generateMipmaps=!1}else if(mt){if(Mt){const K=jt(W);e.texStorage2D(n.TEXTURE_2D,ht,rt,K.width,K.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt,tt,W)}else e.texImage2D(n.TEXTURE_2D,0,rt,nt,tt,W);p(_)&&M(N),j.__version=et.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ct(C,_,w){if(_.image.length!==6)return;const N=st(C,_),B=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+w);const et=i.get(B);if(B.version!==et.__version||N===!0){e.activeTexture(n.TEXTURE0+w);const j=ne.getPrimaries(ne.workingColorSpace),z=_.colorSpace===Ni?null:ne.getPrimaries(_.colorSpace),W=_.colorSpace===Ni||j===z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);const nt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,rt=[];for(let at=0;at<6;at++)!nt&&!tt?rt[at]=m(_.image[at],!0,s.maxCubemapSize):rt[at]=tt?_.image[at].image:_.image[at],rt[at]=Oe(_,rt[at]);const it=rt[0],pt=r.convert(_.format,_.colorSpace),mt=r.convert(_.type),Mt=y(_.internalFormat,pt,mt,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,ht=et.__version===void 0||N===!0,K=B.dataReady;let gt=E(_,it);Rt(n.TEXTURE_CUBE_MAP,_);let vt;if(nt){I&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Mt,it.width,it.height);for(let at=0;at<6;at++){vt=rt[at].mipmaps;for(let Tt=0;Tt<vt.length;Tt++){const St=vt[Tt];_.format!==Bn?pt!==null?I?K&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt,0,0,St.width,St.height,pt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt,Mt,St.width,St.height,0,St.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt,0,0,St.width,St.height,pt,mt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt,Mt,St.width,St.height,0,pt,mt,St.data)}}}else{if(vt=_.mipmaps,I&&ht){vt.length>0&&gt++;const at=jt(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Mt,at.width,at.height)}for(let at=0;at<6;at++)if(tt){I?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,rt[at].width,rt[at].height,pt,mt,rt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Mt,rt[at].width,rt[at].height,0,pt,mt,rt[at].data);for(let Tt=0;Tt<vt.length;Tt++){const he=vt[Tt].image[at].image;I?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt+1,0,0,he.width,he.height,pt,mt,he.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt+1,Mt,he.width,he.height,0,pt,mt,he.data)}}else{I?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,pt,mt,rt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Mt,pt,mt,rt[at]);for(let Tt=0;Tt<vt.length;Tt++){const St=vt[Tt];I?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt+1,0,0,pt,mt,St.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt+1,Mt,pt,mt,St.image[at])}}}p(_)&&M(n.TEXTURE_CUBE_MAP),et.__version=B.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Pt(C,_,w,N,B,et){const j=r.convert(w.format,w.colorSpace),z=r.convert(w.type),W=y(w.internalFormat,j,z,w.normalized,w.colorSpace),nt=i.get(_),tt=i.get(w);if(tt.__renderTarget=_,!nt.__hasExternalTextures){const rt=Math.max(1,_.width>>et),it=Math.max(1,_.height>>et);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?e.texImage3D(B,et,W,rt,it,_.depth,0,j,z,null):e.texImage2D(B,et,W,rt,it,0,j,z,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),ve(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,B,tt.__webglTexture,0,se(_)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,B,tt.__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(C,_,w){if(n.bindRenderbuffer(n.RENDERBUFFER,C),_.depthBuffer){const N=_.depthTexture,B=N&&N.isDepthTexture?N.type:null,et=b(_.stencilBuffer,B),j=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se(_),et,_.width,_.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,se(_),et,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,et,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,C)}else{const N=_.textures;for(let B=0;B<N.length;B++){const et=N[B],j=r.convert(et.format,et.colorSpace),z=r.convert(et.type),W=y(et.internalFormat,j,z,et.normalized,et.colorSpace);ve(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se(_),W,_.width,_.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,se(_),W,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,W,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(C,_,w){const N=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const B=i.get(_.depthTexture);if(B.__renderTarget=_,(!B.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),N){if(B.__webglInit===void 0&&(B.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),B.__webglTexture===void 0){B.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),Rt(n.TEXTURE_CUBE_MAP,_.depthTexture);const nt=r.convert(_.depthTexture.format),tt=r.convert(_.depthTexture.type);let rt;_.depthTexture.format===xi?rt=n.DEPTH_COMPONENT24:_.depthTexture.format===Qi&&(rt=n.DEPTH24_STENCIL8);for(let it=0;it<6;it++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,rt,_.width,_.height,0,nt,tt,null)}}else G(_.depthTexture,0);const et=B.__webglTexture,j=se(_),z=N?n.TEXTURE_CUBE_MAP_POSITIVE_X+w:n.TEXTURE_2D,W=_.depthTexture.format===Qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===xi)ve(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,z,et,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,W,z,et,0);else if(_.depthTexture.format===Qi)ve(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,z,et,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,W,z,et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(C){const _=i.get(C),w=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const N=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),N){const B=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,N.removeEventListener("dispose",B)};N.addEventListener("dispose",B),_.__depthDisposeCallback=B}_.__boundDepthTexture=N}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(w)for(let N=0;N<6;N++)Bt(_.__webglFramebuffer[N],C,N);else{const N=C.texture.mipmaps;N&&N.length>0?Bt(_.__webglFramebuffer[0],C,0):Bt(_.__webglFramebuffer,C,0)}else if(w){_.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[N]),_.__webglDepthbuffer[N]===void 0)_.__webglDepthbuffer[N]=n.createRenderbuffer(),Jt(_.__webglDepthbuffer[N],C,!1);else{const B=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,et)}}else{const N=C.texture.mipmaps;if(N&&N.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Jt(_.__webglDepthbuffer,C,!1);else{const B=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(C,_,w){const N=i.get(C);_!==void 0&&Pt(N.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&Xt(C)}function Gt(C){const _=C.texture,w=i.get(C),N=i.get(_);C.addEventListener("dispose",v);const B=C.textures,et=C.isWebGLCubeRenderTarget===!0,j=B.length>1;if(j||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=_.version,o.memory.textures++),et){w.__webglFramebuffer=[];for(let z=0;z<6;z++)if(_.mipmaps&&_.mipmaps.length>0){w.__webglFramebuffer[z]=[];for(let W=0;W<_.mipmaps.length;W++)w.__webglFramebuffer[z][W]=n.createFramebuffer()}else w.__webglFramebuffer[z]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){w.__webglFramebuffer=[];for(let z=0;z<_.mipmaps.length;z++)w.__webglFramebuffer[z]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(j)for(let z=0,W=B.length;z<W;z++){const nt=i.get(B[z]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ve(C)===!1){w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let z=0;z<B.length;z++){const W=B[z];w.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[z]);const nt=r.convert(W.format,W.colorSpace),tt=r.convert(W.type),rt=y(W.internalFormat,nt,tt,W.normalized,W.colorSpace,C.isXRRenderTarget===!0),it=se(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,it,rt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.RENDERBUFFER,w.__webglColorRenderbuffer[z])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),Jt(w.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),Rt(n.TEXTURE_CUBE_MAP,_);for(let z=0;z<6;z++)if(_.mipmaps&&_.mipmaps.length>0)for(let W=0;W<_.mipmaps.length;W++)Pt(w.__webglFramebuffer[z][W],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,W);else Pt(w.__webglFramebuffer[z],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);p(_)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){for(let z=0,W=B.length;z<W;z++){const nt=B[z],tt=i.get(nt);let rt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,tt.__webglTexture),Rt(rt,nt),Pt(w.__webglFramebuffer,C,nt,n.COLOR_ATTACHMENT0+z,rt,0),p(nt)&&M(rt)}e.unbindTexture()}else{let z=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(z=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(z,N.__webglTexture),Rt(z,_),_.mipmaps&&_.mipmaps.length>0)for(let W=0;W<_.mipmaps.length;W++)Pt(w.__webglFramebuffer[W],C,_,n.COLOR_ATTACHMENT0,z,W);else Pt(w.__webglFramebuffer,C,_,n.COLOR_ATTACHMENT0,z,0);p(_)&&M(z),e.unbindTexture()}C.depthBuffer&&Xt(C)}function te(C){const _=C.textures;for(let w=0,N=_.length;w<N;w++){const B=_[w];if(p(B)){const et=S(C),j=i.get(B).__webglTexture;e.bindTexture(et,j),M(et),e.unbindTexture()}}}const ie=[],ce=[];function ue(C){if(C.samples>0){if(ve(C)===!1){const _=C.textures,w=C.width,N=C.height;let B=n.COLOR_BUFFER_BIT;const et=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=i.get(C),z=_.length>1;if(z)for(let nt=0;nt<_.length;nt++)e.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer);const W=C.texture.mipmaps;W&&W.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let nt=0;nt<_.length;nt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(B|=n.STENCIL_BUFFER_BIT)),z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,j.__webglColorRenderbuffer[nt]);const tt=i.get(_[nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,w,N,0,0,w,N,B,n.NEAREST),l===!0&&(ie.length=0,ce.length=0,ie.push(n.COLOR_ATTACHMENT0+nt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ie.push(et),ce.push(et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),z)for(let nt=0;nt<_.length;nt++){e.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,j.__webglColorRenderbuffer[nt]);const tt=i.get(_[nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const _=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function se(C){return Math.min(s.maxSamples,C.samples)}function ve(C){const _=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function V(C){const _=o.render.frame;u.get(C)!==_&&(u.set(C,_),C.update())}function Oe(C,_){const w=C.colorSpace,N=C.format,B=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||w!==ga&&w!==Ni&&(ne.getTransfer(w)===de?(N!==Bn||B!==wn)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",w)),_}function jt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=Q,this.setTexture3D=ft,this.setTextureCube=ct,this.rebindTextures=Wt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function J1(n,t){function e(i,s=Ni){let r;const o=ne.getTransfer(s);if(i===wn)return n.UNSIGNED_BYTE;if(i===fh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ig)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ng)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dg)return n.BYTE;if(i===Lg)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===hh)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===Ug)return n.ALPHA;if(i===Fg)return n.RGB;if(i===Bn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===ph)return n.RED;if(i===mh)return n.RED_INTEGER;if(i===ss)return n.RG;if(i===gh)return n.RG_INTEGER;if(i===vh)return n.RGBA_INTEGER;if(i===Jo||i===Qo||i===ta||i===ea)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cc||i===Pc||i===Dc||i===Lc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Nc||i===Uc||i===Fc||i===Oc||i===pa||i===Bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ic||i===Nc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Uc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fc)return r.COMPRESSED_R11_EAC;if(i===Oc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pa)return r.COMPRESSED_RG11_EAC;if(i===Bc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vc||i===zc||i===kc||i===Gc||i===Hc||i===Wc||i===Xc||i===qc||i===Yc||i===$c||i===Kc||i===Zc||i===jc||i===Jc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$c)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qc||i===tu||i===eu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Qc)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nu||i===iu||i===ma||i===su)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===nu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===iu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===su)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tw=`
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

}`;class ew{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Zg(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ii({vertexShader:Q1,fragmentShader:tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qe(new ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nw extends cs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new ew,p={},M=e.getContextAttributes();let S=null,y=null;const b=[],E=[],R=new Nt;let v=null;const A=new vn;A.viewport=new Pe;const L=new vn;L.viewport=new Pe;const D=[A,L],O=new hE;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ot=b[st];return ot===void 0&&(ot=new pl,b[st]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(st){let ot=b[st];return ot===void 0&&(ot=new pl,b[st]=ot),ot.getGripSpace()},this.getHand=function(st){let ot=b[st];return ot===void 0&&(ot=new pl,b[st]=ot),ot.getHandSpace()};function P(st){const ot=E.indexOf(st.inputSource);if(ot===-1)return;const lt=b[ot];lt!==void 0&&(lt.update(st.inputSource,st.frame,c||o),lt.dispatchEvent({type:st.type,data:st.inputSource}))}function H(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",U);for(let st=0;st<b.length;st++){const ot=E[st];ot!==null&&(E[st]=null,b[st].disconnect(ot))}X=null,q=null,m.reset();for(const st in p)delete p[st];t.setRenderTarget(S),d=null,h=null,f=null,s=null,y=null,Rt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",H),s.addEventListener("inputsourceschange",U),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,xt=null,Ct=null;M.depth&&(Ct=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=M.stencil?Qi:xi,xt=M.stencil?jr:ni);const Pt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new ei(h.textureWidth,h.textureHeight,{format:Bn,type:wn,depthTexture:new ir(h.textureWidth,h.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const lt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ei(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(st){for(let ot=0;ot<st.removed.length;ot++){const lt=st.removed[ot],xt=E.indexOf(lt);xt>=0&&(E[xt]=null,b[xt].disconnect(lt))}for(let ot=0;ot<st.added.length;ot++){const lt=st.added[ot];let xt=E.indexOf(lt);if(xt===-1){for(let Pt=0;Pt<b.length;Pt++)if(Pt>=E.length){E.push(lt),xt=Pt;break}else if(E[Pt]===null){E[Pt]=lt,xt=Pt;break}if(xt===-1)break}const Ct=b[xt];Ct&&Ct.connect(lt)}}const G=new F,Q=new F;function ft(st,ot,lt){G.setFromMatrixPosition(ot.matrixWorld),Q.setFromMatrixPosition(lt.matrixWorld);const xt=G.distanceTo(Q),Ct=ot.projectionMatrix.elements,Pt=lt.projectionMatrix.elements,Jt=Ct[14]/(Ct[10]-1),Bt=Ct[14]/(Ct[10]+1),Xt=(Ct[9]+1)/Ct[5],Wt=(Ct[9]-1)/Ct[5],Gt=(Ct[8]-1)/Ct[0],te=(Pt[8]+1)/Pt[0],ie=Jt*Gt,ce=Jt*te,ue=xt/(-Gt+te),se=ue*-Gt;if(ot.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(se),st.translateZ(ue),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Ct[10]===-1)st.projectionMatrix.copy(ot.projectionMatrix),st.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const ve=Jt+ue,V=Bt+ue,Oe=ie-se,jt=ce+(xt-se),C=Xt*Bt/V*ve,_=Wt*Bt/V*ve;st.projectionMatrix.makePerspective(Oe,jt,C,_,ve,V),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function ct(st,ot){ot===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ot.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ot=st.near,lt=st.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),O.near=L.near=A.near=ot,O.far=L.far=A.far=lt,(X!==O.near||q!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),X=O.near,q=O.far),O.layers.mask=st.layers.mask|6,A.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const xt=st.parent,Ct=O.cameras;ct(O,xt);for(let Pt=0;Pt<Ct.length;Pt++)ct(Ct[Pt],xt);Ct.length===2?ft(O,A,L):O.projectionMatrix.copy(A.projectionMatrix),dt(st,O,xt)};function dt(st,ot,lt){lt===null?st.matrix.copy(ot.matrixWorld):(st.matrix.copy(lt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ot.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ot.projectionMatrix),st.projectionMatrixInverse.copy(ot.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=ou*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(st){l=st,h!==null&&(h.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(st){return p[st]};let Lt=null;function Ot(st,ot){if(u=ot.getViewerPose(c||o),g=ot,u!==null){const lt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let xt=!1;lt.length!==O.cameras.length&&(O.cameras.length=0,xt=!0);for(let Bt=0;Bt<lt.length;Bt++){const Xt=lt[Bt];let Wt=null;if(d!==null)Wt=d.getViewport(Xt);else{const te=f.getViewSubImage(h,Xt);Wt=te.viewport,Bt===0&&(t.setRenderTargetTextures(y,te.colorTexture,te.depthStencilTexture),t.setRenderTarget(y))}let Gt=D[Bt];Gt===void 0&&(Gt=new vn,Gt.layers.enable(Bt),Gt.viewport=new Pe,D[Bt]=Gt),Gt.matrix.fromArray(Xt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Xt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Bt===0&&(O.matrix.copy(Gt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),xt===!0&&O.cameras.push(Gt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const Bt=f.getDepthInformation(lt[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(Ct&&Ct.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let Bt=0;Bt<lt.length;Bt++){const Xt=lt[Bt].camera;if(Xt){let Wt=p[Xt];Wt||(Wt=new Zg,p[Xt]=Wt);const Gt=f.getCameraImage(Xt);Wt.sourceTexture=Gt}}}}for(let lt=0;lt<b.length;lt++){const xt=E[lt],Ct=b[lt];xt!==null&&Ct!==void 0&&Ct.update(xt,ot,c||o)}Lt&&Lt(st,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const Rt=new n0;Rt.setAnimationLoop(Ot),this.setAnimationLoop=function(st){Lt=st},this.dispose=function(){}}}const iw=new pe,c0=new Ht;c0.set(-1,0,0,0,1,0,0,0,1);function sw(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,S,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(iw.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(c0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const E=b.program;i.uniformBlockBinding(y,E)}function c(y,b){let E=s[y.id];E===void 0&&(m(y),E=u(y),s[y.id]=E,y.addEventListener("dispose",M));const R=b.program;i.updateUBOMapping(y,R);const v=t.render.frame;r[y.id]!==v&&(h(y),r[y.id]=v)}function u(y){const b=f();y.__bindingPointIndex=b;const E=n.createBuffer(),R=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=s[y.id],E=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let v=0,A=E.length;v<A;v++){const L=E[v];if(Array.isArray(L))for(let D=0,O=L.length;D<O;D++)d(L[D],v,D,R);else d(L,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,b,E,R){if(x(y,b,E,R)===!0){const v=y.__offset,A=y.value;if(Array.isArray(A)){let L=0;for(let D=0;D<A.length;D++){const O=A[D],X=p(O);g(O,y.__data,L),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,y.__data)}}function g(y,b,E){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,E)}function x(y,b,E,R){const v=y.value,A=b+"_"+E;if(R[A]===void 0)return typeof v=="number"||typeof v=="boolean"?R[A]=v:ArrayBuffer.isView(v)?R[A]=v.slice():R[A]=v.clone(),!0;{const L=R[A];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return R[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function m(y){const b=y.uniforms;let E=0;const R=16;for(let A=0,L=b.length;A<L;A++){const D=Array.isArray(b[A])?b[A]:[b[A]];for(let O=0,X=D.length;O<X;O++){const q=D[O],P=Array.isArray(q.value)?q.value:[q.value];for(let H=0,U=P.length;H<U;H++){const G=P[H],Q=p(G),ft=E%R,ct=ft%Q.boundary,dt=ft+ct;E+=ct,dt!==0&&R-dt<Q.storage&&(E+=R-dt),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=Q.storage}}}const v=E%R;return v>0&&(E+=R-v),y.__size=E,y.__cache={},this}function p(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",y),b}function M(y){const b=y.target;b.removeEventListener("dispose",M);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function S(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}const ow=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function aw(){return Hn===null&&(Hn=new Xg(ow,16,16,ss,_i),Hn.name="DFG_LUT",Hn.minFilter=en,Hn.magFilter=en,Hn.wrapS=di,Hn.wrapT=di,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class u0{constructor(t={}){const{canvas:e=hS(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=wn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=d,m=new Set([vh,gh,mh]),p=new Set([wn,ni,Zr,jr,fh,dh]),M=new Uint32Array(4),S=new Int32Array(4),y=new F;let b=null,E=null;const R=[],v=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,O=null,X=null,q=null,P=null;this._outputColorSpace=An;let H=0,U=0,G=null,Q=-1,ft=null;const ct=new Pe,dt=new Pe;let Lt=null;const Ot=new zt(0);let Rt=0,st=e.width,ot=e.height,lt=1,xt=null,Ct=null;const Pt=new Pe(0,0,st,ot),Jt=new Pe(0,0,st,ot);let Bt=!1;const Xt=new Yg;let Wt=!1,Gt=!1;const te=new pe,ie=new F,ce=new Pe,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function ve(){return G===null?lt:1}let V=i;function Oe(T,k){return e.getContext(T,k)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ch}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",qt,!1),V===null){const k="webgl2";if(V=Oe(k,T),V===null)throw Oe(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw ee("WebGLRenderer: "+T.message),T}let jt,C,_,w,N,B,et,j,z,W,nt,tt,rt,it,pt,mt,Mt,I,ht,K,gt,vt,at;function Tt(){jt=new aA(V),jt.init(),gt=new J1(V,jt),C=new QT(V,jt,t,gt),_=new Z1(V,jt),C.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),X=V.createFramebuffer(),q=V.createFramebuffer(),P=V.createFramebuffer(),w=new uA(V),N=new F1,B=new j1(V,jt,_,N,C,gt,w),et=new oA(L),j=new pE(V),vt=new jT(V,j),z=new lA(V,j,w,vt),W=new fA(V,z,j,vt,w),I=new hA(V,C,B),pt=new tA(N),nt=new U1(L,et,jt,C,vt,pt),tt=new sw(L,N),rt=new B1,it=new W1(jt),Mt=new ZT(L,et,_,W,g,l),mt=new K1(L,W,C),at=new rw(V,w,C,_),ht=new JT(V,jt,w),K=new cA(V,jt,w),w.programs=nt.programs,L.capabilities=C,L.extensions=jt,L.properties=N,L.renderLists=rt,L.shadowMap=mt,L.state=_,L.info=w}Tt(),x!==wn&&(A=new pA(x,e.width,e.height,a,s,r));const St=new nw(L,V);this.xr=St,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(T){T!==void 0&&(lt=T,this.setSize(st,ot,!1))},this.getSize=function(T){return T.set(st,ot)},this.setSize=function(T,k,Z=!0){if(St.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}st=T,ot=k,e.width=Math.floor(T*lt),e.height=Math.floor(k*lt),Z===!0&&(e.style.width=T+"px",e.style.height=k+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(st*lt,ot*lt).floor()},this.setDrawingBufferSize=function(T,k,Z){st=T,ot=k,lt=Z,e.width=Math.floor(T*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(x===wn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ct)},this.getViewport=function(T){return T.copy(Pt)},this.setViewport=function(T,k,Z,Y){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,k,Z,Y),_.viewport(ct.copy(Pt).multiplyScalar(lt).round())},this.getScissor=function(T){return T.copy(Jt)},this.setScissor=function(T,k,Z,Y){T.isVector4?Jt.set(T.x,T.y,T.z,T.w):Jt.set(T,k,Z,Y),_.scissor(dt.copy(Jt).multiplyScalar(lt).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(T){_.setScissorTest(Bt=T)},this.setOpaqueSort=function(T){xt=T},this.setTransparentSort=function(T){Ct=T},this.getClearColor=function(T){return T.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,Z=!0){let Y=0;if(T){let $=!1;if(G!==null){const yt=G.texture.format;$=m.has(yt)}if($){const yt=G.texture.type,wt=p.has(yt),_t=Mt.getClearColor(),Et=Mt.getClearAlpha(),At=_t.r,Vt=_t.g,kt=_t.b;wt?(M[0]=At,M[1]=Vt,M[2]=kt,M[3]=Et,V.clearBufferuiv(V.COLOR,0,M)):(S[0]=At,S[1]=Vt,S[2]=kt,S[3]=Et,V.clearBufferiv(V.COLOR,0,S))}else Y|=V.COLOR_BUFFER_BIT}k&&(Y|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",qt,!1),Mt.dispose(),rt.dispose(),it.dispose(),N.dispose(),et.dispose(),W.dispose(),vt.dispose(),at.dispose(),nt.dispose(),St.dispose(),St.removeEventListener("sessionstart",xe),St.removeEventListener("sessionend",sn),hn.stop()};function he(T){T.preventDefault(),ya("WebGLRenderer: Context Lost."),D=!0}function fe(){ya("WebGLRenderer: Context Restored."),D=!1;const T=w.autoReset,k=mt.enabled,Z=mt.autoUpdate,Y=mt.needsUpdate,$=mt.type;Tt(),w.autoReset=T,mt.enabled=k,mt.autoUpdate=Z,mt.needsUpdate=Y,mt.type=$}function qt(T){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Kt(T){const k=T.target;k.removeEventListener("dispose",Kt),le(k)}function le(T){Zt(T),N.remove(T)}function Zt(T){const k=N.get(T).programs;k!==void 0&&(k.forEach(function(Z){nt.releaseProgram(Z)}),T.isShaderMaterial&&nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Z,Y,$,yt){k===null&&(k=ue);const wt=$.isMesh&&$.matrixWorld.determinantAffine()<0,_t=si(T,k,Z,Y,$);_.setMaterial(Y,wt);let Et=Z.index,At=1;if(Y.wireframe===!0){if(Et=z.getWireframeAttribute(Z),Et===void 0)return;At=2}const Vt=Z.drawRange,kt=Z.attributes.position;let It=Vt.start*At,me=(Vt.start+Vt.count)*At;yt!==null&&(It=Math.max(It,yt.start*At),me=Math.min(me,(yt.start+yt.count)*At)),Et!==null?(It=Math.max(It,0),me=Math.min(me,Et.count)):kt!=null&&(It=Math.max(It,0),me=Math.min(me,kt.count));const Ie=me-It;if(Ie<0||Ie===1/0)return;vt.setup($,Y,_t,Z,Et);let we,ye=ht;if(Et!==null&&(we=j.get(Et),ye=K,ye.setIndex(we)),$.isMesh)Y.wireframe===!0?(_.setLineWidth(Y.wireframeLinewidth*ve()),ye.setMode(V.LINES)):ye.setMode(V.TRIANGLES);else if($.isLine){let je=Y.linewidth;je===void 0&&(je=1),_.setLineWidth(je*ve()),$.isLineSegments?ye.setMode(V.LINES):$.isLineLoop?ye.setMode(V.LINE_LOOP):ye.setMode(V.LINE_STRIP)}else $.isPoints?ye.setMode(V.POINTS):$.isSprite&&ye.setMode(V.TRIANGLES);if($.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))ye.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const je=$._multiDrawStarts,Dt=$._multiDrawCounts,dn=$._multiDrawCount,oe=Et?j.get(Et).bytesPerElement:1,Sn=N.get(Y).currentProgram.getUniforms();for(let kn=0;kn<dn;kn++)Sn.setValue(V,"_gl_DrawID",kn),ye.render(je[kn]/oe,Dt[kn])}else if($.isInstancedMesh)ye.renderInstances(It,Ie,$.count);else if(Z.isInstancedBufferGeometry){const je=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Dt=Math.min(Z.instanceCount,je);ye.renderInstances(It,Ie,Dt)}else ye.render(It,Ie)};function Yt(T,k,Z){T.transparent===!0&&T.side===hi&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,Ze(T,k,Z),T.side=Vi,T.needsUpdate=!0,Ze(T,k,Z),T.side=hi):Ze(T,k,Z)}this.compile=function(T,k,Z=null){Z===null&&(Z=T),E=it.get(Z),E.init(k),v.push(E),Z.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),T!==Z&&T.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights();const Y=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const yt=$.material;if(yt)if(Array.isArray(yt))for(let wt=0;wt<yt.length;wt++){const _t=yt[wt];Yt(_t,Z,$),Y.add(_t)}else Yt(yt,Z,$),Y.add(yt)}),E=v.pop(),Y},this.compileAsync=function(T,k,Z=null){const Y=this.compile(T,k,Z);return new Promise($=>{function yt(){if(Y.forEach(function(wt){N.get(wt).currentProgram.isReady()&&Y.delete(wt)}),Y.size===0){$(T);return}setTimeout(yt,10)}jt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let _e=null;function re(T){_e&&_e(T)}function xe(){hn.stop()}function sn(){hn.start()}const hn=new n0;hn.setAnimationLoop(re),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(T){_e=T,St.setAnimationLoop(T),T===null?hn.stop():hn.start()},St.addEventListener("sessionstart",xe),St.addEventListener("sessionend",sn),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(T,k);const Z=St.enabled===!0&&St.isPresenting===!0,Y=A!==null&&(G===null||Z)&&A.begin(L,G);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(k),k=St.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,k,G),E=it.get(T,v.length),E.init(k),E.state.textureUnits=B.getTextureUnits(),v.push(E),te.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Xt.setFromProjectionMatrix(te,Kn,k.reversedDepth),Gt=this.localClippingEnabled,Wt=pt.init(this.clippingPlanes,Gt),b=rt.get(T,R.length),b.init(),R.push(b),St.enabled===!0&&St.isPresenting===!0){const wt=L.xr.getDepthSensingMesh();wt!==null&&yn(wt,k,-1/0,L.sortObjects)}yn(T,k,0,L.sortObjects),b.finish(),L.sortObjects===!0&&b.sort(xt,Ct,k.reversedDepth),se=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,se&&Mt.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&pt.beginShadows();const $=E.state.shadowsArray;if(mt.render($,T,k),Wt===!0&&pt.endShadows(),(Y&&A.hasRenderPass())===!1){const wt=b.opaque,_t=b.transmissive;if(E.setupLights(),k.isArrayCamera){const Et=k.cameras;if(_t.length>0)for(let At=0,Vt=Et.length;At<Vt;At++){const kt=Et[At];Vn(wt,_t,T,kt)}se&&Mt.render(T);for(let At=0,Vt=Et.length;At<Vt;At++){const kt=Et[At];rn(b,T,kt,kt.viewport)}}else _t.length>0&&Vn(wt,_t,T,k),se&&Mt.render(T),rn(b,T,k)}G!==null&&U===0&&(B.updateMultisampleRenderTarget(G),B.updateRenderTargetMipmap(G)),Y&&A.end(L),T.isScene===!0&&T.onAfterRender(L,T,k),vt.resetDefaultState(),Q=-1,ft=null,v.pop(),v.length>0?(E=v[v.length-1],B.setTextureUnits(E.state.textureUnits),Wt===!0&&pt.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,O!==null&&O.renderEnd()};function yn(T,k,Z,Y){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Xt.intersectsSprite(T)){Y&&ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);const wt=W.update(T),_t=T.material;_t.visible&&b.push(T,wt,_t,Z,ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Xt.intersectsObject(T))){const wt=W.update(T),_t=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ce.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ce.copy(wt.boundingSphere.center)),ce.applyMatrix4(T.matrixWorld).applyMatrix4(te)),Array.isArray(_t)){const Et=wt.groups;for(let At=0,Vt=Et.length;At<Vt;At++){const kt=Et[At],It=_t[kt.materialIndex];It&&It.visible&&b.push(T,wt,It,Z,ce.z,kt)}}else _t.visible&&b.push(T,wt,_t,Z,ce.z,null)}}const yt=T.children;for(let wt=0,_t=yt.length;wt<_t;wt++)yn(yt[wt],k,Z,Y)}function rn(T,k,Z,Y){const{opaque:$,transmissive:yt,transparent:wt}=T;E.setupLightsView(Z),Wt===!0&&pt.setGlobalState(L.clippingPlanes,Z),Y&&_.viewport(ct.copy(Y)),$.length>0&&Le($,k,Z),yt.length>0&&Le(yt,k,Z),wt.length>0&&Le(wt,k,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Vn(T,k,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){const It=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new ei(1,1,{generateMipmaps:!0,type:It?_i:wn,minFilter:Ji,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const yt=E.state.transmissionRenderTarget[Y.id],wt=Y.viewport||ct;yt.setSize(wt.z*L.transmissionResolutionScale,wt.w*L.transmissionResolutionScale);const _t=L.getRenderTarget(),Et=L.getActiveCubeFace(),At=L.getActiveMipmapLevel();L.setRenderTarget(yt),L.getClearColor(Ot),Rt=L.getClearAlpha(),Rt<1&&L.setClearColor(16777215,.5),L.clear(),se&&Mt.render(Z);const Vt=L.toneMapping;L.toneMapping=ti;const kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),Wt===!0&&pt.setGlobalState(L.clippingPlanes,Y),Le(T,Z,Y),B.updateMultisampleRenderTarget(yt),B.updateRenderTargetMipmap(yt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let me=0,Ie=k.length;me<Ie;me++){const we=k[me],{object:ye,geometry:je,material:Dt,group:dn}=we;if(Dt.side===hi&&ye.layers.test(Y.layers)){const oe=Dt.side;Dt.side=un,Dt.needsUpdate=!0,fn(ye,Z,Y,je,Dt,dn),Dt.side=oe,Dt.needsUpdate=!0,It=!0}}It===!0&&(B.updateMultisampleRenderTarget(yt),B.updateRenderTargetMipmap(yt))}L.setRenderTarget(_t,Et,At),L.setClearColor(Ot,Rt),kt!==void 0&&(Y.viewport=kt),L.toneMapping=Vt}function Le(T,k,Z){const Y=k.isScene===!0?k.overrideMaterial:null;for(let $=0,yt=T.length;$<yt;$++){const wt=T[$],{object:_t,geometry:Et,group:At}=wt;let Vt=wt.material;Vt.allowOverride===!0&&Y!==null&&(Vt=Y),_t.layers.test(Z.layers)&&fn(_t,k,Z,Et,Vt,At)}}function fn(T,k,Z,Y,$,yt){T.onBeforeRender(L,k,Z,Y,$,yt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(L,k,Z,Y,T,yt),$.transparent===!0&&$.side===hi&&$.forceSinglePass===!1?($.side=un,$.needsUpdate=!0,L.renderBufferDirect(Z,k,Y,$,T,yt),$.side=Vi,$.needsUpdate=!0,L.renderBufferDirect(Z,k,Y,$,T,yt),$.side=hi):L.renderBufferDirect(Z,k,Y,$,T,yt),T.onAfterRender(L,k,Z,Y,$,yt)}function Ze(T,k,Z){k.isScene!==!0&&(k=ue);const Y=N.get(T),$=E.state.lights,yt=E.state.shadowsArray,wt=$.state.version,_t=nt.getParameters(T,$.state,yt,k,Z,E.state.lightProbeGridArray),Et=nt.getProgramCacheKey(_t);let At=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;const Vt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=et.get(T.envMap||Y.environment,Vt),Y.envMapRotation=Y.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,At===void 0&&(T.addEventListener("dispose",Kt),At=new Map,Y.programs=At);let kt=At.get(Et);if(kt!==void 0){if(Y.currentProgram===kt&&Y.lightsStateVersion===wt)return ke(T,_t),kt}else _t.uniforms=nt.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,Z,_t),T.onBeforeCompile(_t,L),kt=nt.acquireProgram(_t,Et),At.set(Et,kt),Y.uniforms=_t.uniforms;const It=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=pt.uniform),ke(T,_t),Y.needsLights=zn(T),Y.lightsStateVersion=wt,Y.needsLights&&(It.ambientLightColor.value=$.state.ambient,It.lightProbe.value=$.state.probe,It.directionalLights.value=$.state.directional,It.directionalLightShadows.value=$.state.directionalShadow,It.spotLights.value=$.state.spot,It.spotLightShadows.value=$.state.spotShadow,It.rectAreaLights.value=$.state.rectArea,It.ltc_1.value=$.state.rectAreaLTC1,It.ltc_2.value=$.state.rectAreaLTC2,It.pointLights.value=$.state.point,It.pointLightShadows.value=$.state.pointShadow,It.hemisphereLights.value=$.state.hemi,It.directionalShadowMatrix.value=$.state.directionalShadowMatrix,It.spotLightMatrix.value=$.state.spotLightMatrix,It.spotLightMap.value=$.state.spotLightMap,It.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=kt,Y.uniformsList=null,kt}function ze(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=na.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function ke(T,k){const Z=N.get(T);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Mn(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(k.matrixWorld);for(let Z=0,Y=T.length;Z<Y;Z++){const $=T[Z];if($.texture!==null&&$.boundingBox.containsPoint(y))return $}return null}function si(T,k,Z,Y,$){k.isScene!==!0&&(k=ue),B.resetTextureUnits();const yt=k.fog,wt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,_t=G===null?L.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ne.workingColorSpace,Et=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,At=et.get(Y.envMap||wt,Et),Vt=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,kt=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!Z.morphAttributes.position,me=!!Z.morphAttributes.normal,Ie=!!Z.morphAttributes.color;let we=ti;Y.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(we=L.toneMapping);const ye=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,je=ye!==void 0?ye.length:0,Dt=N.get(Y),dn=E.state.lights;if(Wt===!0&&(Gt===!0||T!==ft)){const Ee=T===ft&&Y.id===Q;pt.setState(Y,T,Ee)}let oe=!1;Y.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==dn.state.version||Dt.outputColorSpace!==_t||$.isBatchedMesh&&Dt.batching===!1||!$.isBatchedMesh&&Dt.batching===!0||$.isBatchedMesh&&Dt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Dt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Dt.instancing===!1||!$.isInstancedMesh&&Dt.instancing===!0||$.isSkinnedMesh&&Dt.skinning===!1||!$.isSkinnedMesh&&Dt.skinning===!0||$.isInstancedMesh&&Dt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Dt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Dt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Dt.instancingMorph===!1&&$.morphTexture!==null||Dt.envMap!==At||Y.fog===!0&&Dt.fog!==yt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==pt.numPlanes||Dt.numIntersection!==pt.numIntersection)||Dt.vertexAlphas!==Vt||Dt.vertexTangents!==kt||Dt.morphTargets!==It||Dt.morphNormals!==me||Dt.morphColors!==Ie||Dt.toneMapping!==we||Dt.morphTargetsCount!==je||!!Dt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Dt.__version=Y.version);let Sn=Dt.currentProgram;oe===!0&&(Sn=Ze(Y,k,$),O&&Y.isNodeMaterial&&O.onUpdateProgram(Y,Sn,Dt));let kn=!1,Ei=!1,fs=!1;const Me=Sn.getUniforms(),Ne=Dt.uniforms;if(_.useProgram(Sn.program)&&(kn=!0,Ei=!0,fs=!0),Y.id!==Q&&(Q=Y.id,Ei=!0),Dt.needsLights){const Ee=Mn(E.state.lightProbeGridArray,$);Dt.lightProbeGrid!==Ee&&(Dt.lightProbeGrid=Ee,Ei=!0)}if(kn||ft!==T){_.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Me.setValue(V,"projectionMatrix",T.projectionMatrix),Me.setValue(V,"viewMatrix",T.matrixWorldInverse);const Ti=Me.map.cameraPosition;Ti!==void 0&&Ti.setValue(V,ie.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&Me.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Me.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),ft!==T&&(ft=T,Ei=!0,fs=!0)}if(Dt.needsLights&&(dn.state.directionalShadowMap.length>0&&Me.setValue(V,"directionalShadowMap",dn.state.directionalShadowMap,B),dn.state.spotShadowMap.length>0&&Me.setValue(V,"spotShadowMap",dn.state.spotShadowMap,B),dn.state.pointShadowMap.length>0&&Me.setValue(V,"pointShadowMap",dn.state.pointShadowMap,B)),$.isSkinnedMesh){Me.setOptional(V,$,"bindMatrix"),Me.setOptional(V,$,"bindMatrixInverse");const Ee=$.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),Me.setValue(V,"boneTexture",Ee.boneTexture,B))}$.isBatchedMesh&&(Me.setOptional(V,$,"batchingTexture"),Me.setValue(V,"batchingTexture",$._matricesTexture,B),Me.setOptional(V,$,"batchingIdTexture"),Me.setValue(V,"batchingIdTexture",$._indirectTexture,B),Me.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Me.setValue(V,"batchingColorTexture",$._colorsTexture,B));const bi=Z.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&I.update($,Z,Sn),(Ei||Dt.receiveShadow!==$.receiveShadow)&&(Dt.receiveShadow=$.receiveShadow,Me.setValue(V,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Ne.envMapIntensity.value=k.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=aw()),Ei){if(Me.setValue(V,"toneMappingExposure",L.toneMappingExposure),Dt.needsLights&&Si(Ne,fs),yt&&Y.fog===!0&&tt.refreshFogUniforms(Ne,yt),tt.refreshMaterialUniforms(Ne,Y,lt,ot,E.state.transmissionRenderTarget[T.id]),Dt.needsLights&&Dt.lightProbeGrid){const Ee=Dt.lightProbeGrid;Ne.probesSH.value=Ee.texture,Ne.probesMin.value.copy(Ee.boundingBox.min),Ne.probesMax.value.copy(Ee.boundingBox.max),Ne.probesResolution.value.copy(Ee.resolution)}na.upload(V,ze(Dt),Ne,B)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(na.upload(V,ze(Dt),Ne,B),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Me.setValue(V,"center",$.center),Me.setValue(V,"modelViewMatrix",$.modelViewMatrix),Me.setValue(V,"normalMatrix",$.normalMatrix),Me.setValue(V,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){const Ee=Y.uniformsGroups;for(let Ti=0,ds=Ee.length;Ti<ds;Ti++){const Dh=Ee[Ti];at.update(Dh,Sn),at.bind(Dh,Sn)}}return Sn}function Si(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function zn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(T,k,Z){const Y=N.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),N.get(T.texture).__webglTexture=k,N.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const Z=N.get(T);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,Z=0){G=T,H=k,U=Z;let Y=null,$=!1,yt=!1;if(T){const _t=N.get(T);if(_t.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(V.FRAMEBUFFER,_t.__webglFramebuffer),ct.copy(T.viewport),dt.copy(T.scissor),Lt=T.scissorTest,_.viewport(ct),_.scissor(dt),_.setScissorTest(Lt),Q=-1;return}else if(_t.__webglFramebuffer===void 0)B.setupRenderTarget(T);else if(_t.__hasExternalTextures)B.rebindTextures(T,N.get(T.texture).__webglTexture,N.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Vt=T.depthTexture;if(_t.__boundDepthTexture!==Vt){if(Vt!==null&&N.has(Vt)&&(T.width!==Vt.image.width||T.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(T)}}const Et=T.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(yt=!0);const At=N.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(At[k])?Y=At[k][Z]:Y=At[k],$=!0):T.samples>0&&B.useMultisampledRTT(T)===!1?Y=N.get(T).__webglMultisampledFramebuffer:Array.isArray(At)?Y=At[Z]:Y=At,ct.copy(T.viewport),dt.copy(T.scissor),Lt=T.scissorTest}else ct.copy(Pt).multiplyScalar(lt).floor(),dt.copy(Jt).multiplyScalar(lt).floor(),Lt=Bt;if(Z!==0&&(Y=X),_.bindFramebuffer(V.FRAMEBUFFER,Y)&&_.drawBuffers(T,Y),_.viewport(ct),_.scissor(dt),_.setScissorTest(Lt),$){const _t=N.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,_t.__webglTexture,Z)}else if(yt){const _t=k;for(let Et=0;Et<T.textures.length;Et++){const At=N.get(T.textures[Et]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Et,At.__webglTexture,Z,_t)}}else if(T!==null&&Z!==0){const _t=N.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,_t.__webglTexture,Z)}Q=-1},this.readRenderTargetPixels=function(T,k,Z,Y,$,yt,wt,_t=0){if(!(T&&T.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=N.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Et=Et[wt]),Et){_.bindFramebuffer(V.FRAMEBUFFER,Et);try{const At=T.textures[_t],Vt=At.format,kt=At.type;if(T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+_t),!C.textureFormatReadable(Vt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(kt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-Y&&Z>=0&&Z<=T.height-$&&V.readPixels(k,Z,Y,$,gt.convert(Vt),gt.convert(kt),yt)}finally{const At=G!==null?N.get(G).__webglFramebuffer:null;_.bindFramebuffer(V.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(T,k,Z,Y,$,yt,wt,_t=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=N.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Et=Et[wt]),Et)if(k>=0&&k<=T.width-Y&&Z>=0&&Z<=T.height-$){_.bindFramebuffer(V.FRAMEBUFFER,Et);const At=T.textures[_t],Vt=At.format,kt=At.type;if(T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+_t),!C.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const It=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,It),V.bufferData(V.PIXEL_PACK_BUFFER,yt.byteLength,V.STREAM_READ),V.readPixels(k,Z,Y,$,gt.convert(Vt),gt.convert(kt),0);const me=G!==null?N.get(G).__webglFramebuffer:null;_.bindFramebuffer(V.FRAMEBUFFER,me);const Ie=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await fS(V,Ie,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,It),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,yt),V.deleteBuffer(It),V.deleteSync(Ie),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,Z=0){const Y=Math.pow(2,-Z),$=Math.floor(T.image.width*Y),yt=Math.floor(T.image.height*Y),wt=k!==null?k.x:0,_t=k!==null?k.y:0;B.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,Z,0,0,wt,_t,$,yt),_.unbindTexture()},this.copyTextureToTexture=function(T,k,Z=null,Y=null,$=0,yt=0){let wt,_t,Et,At,Vt,kt,It,me,Ie;const we=T.isCompressedTexture?T.mipmaps[yt]:T.image;if(Z!==null)wt=Z.max.x-Z.min.x,_t=Z.max.y-Z.min.y,Et=Z.isBox3?Z.max.z-Z.min.z:1,At=Z.min.x,Vt=Z.min.y,kt=Z.isBox3?Z.min.z:0;else{const Ne=Math.pow(2,-$);wt=Math.floor(we.width*Ne),_t=Math.floor(we.height*Ne),T.isDataArrayTexture?Et=we.depth:T.isData3DTexture?Et=Math.floor(we.depth*Ne):Et=1,At=0,Vt=0,kt=0}Y!==null?(It=Y.x,me=Y.y,Ie=Y.z):(It=0,me=0,Ie=0);const ye=gt.convert(k.format),je=gt.convert(k.type);let Dt;k.isData3DTexture?(B.setTexture3D(k,0),Dt=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(B.setTexture2DArray(k,0),Dt=V.TEXTURE_2D_ARRAY):(B.setTexture2D(k,0),Dt=V.TEXTURE_2D),_.activeTexture(V.TEXTURE0),_.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);const dn=_.getParameter(V.UNPACK_ROW_LENGTH),oe=_.getParameter(V.UNPACK_IMAGE_HEIGHT),Sn=_.getParameter(V.UNPACK_SKIP_PIXELS),kn=_.getParameter(V.UNPACK_SKIP_ROWS),Ei=_.getParameter(V.UNPACK_SKIP_IMAGES);_.pixelStorei(V.UNPACK_ROW_LENGTH,we.width),_.pixelStorei(V.UNPACK_IMAGE_HEIGHT,we.height),_.pixelStorei(V.UNPACK_SKIP_PIXELS,At),_.pixelStorei(V.UNPACK_SKIP_ROWS,Vt),_.pixelStorei(V.UNPACK_SKIP_IMAGES,kt);const fs=T.isDataArrayTexture||T.isData3DTexture,Me=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const Ne=N.get(T),bi=N.get(k),Ee=N.get(Ne.__renderTarget),Ti=N.get(bi.__renderTarget);_.bindFramebuffer(V.READ_FRAMEBUFFER,Ee.__webglFramebuffer),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ds=0;ds<Et;ds++)fs&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,N.get(T).__webglTexture,$,kt+ds),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,N.get(k).__webglTexture,yt,Ie+ds)),V.blitFramebuffer(At,Vt,wt,_t,It,me,wt,_t,V.DEPTH_BUFFER_BIT,V.NEAREST);_.bindFramebuffer(V.READ_FRAMEBUFFER,null),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||N.has(T)){const Ne=N.get(T),bi=N.get(k);_.bindFramebuffer(V.READ_FRAMEBUFFER,q),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,P);for(let Ee=0;Ee<Et;Ee++)fs?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ne.__webglTexture,$,kt+Ee):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ne.__webglTexture,$),Me?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bi.__webglTexture,yt,Ie+Ee):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bi.__webglTexture,yt),$!==0?V.blitFramebuffer(At,Vt,wt,_t,It,me,wt,_t,V.COLOR_BUFFER_BIT,V.NEAREST):Me?V.copyTexSubImage3D(Dt,yt,It,me,Ie+Ee,At,Vt,wt,_t):V.copyTexSubImage2D(Dt,yt,It,me,At,Vt,wt,_t);_.bindFramebuffer(V.READ_FRAMEBUFFER,null),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Me?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Dt,yt,It,me,Ie,wt,_t,Et,ye,je,we.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(Dt,yt,It,me,Ie,wt,_t,Et,ye,we.data):V.texSubImage3D(Dt,yt,It,me,Ie,wt,_t,Et,ye,je,we):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,yt,It,me,wt,_t,ye,je,we.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,yt,It,me,we.width,we.height,ye,we.data):V.texSubImage2D(V.TEXTURE_2D,yt,It,me,wt,_t,ye,je,we);_.pixelStorei(V.UNPACK_ROW_LENGTH,dn),_.pixelStorei(V.UNPACK_IMAGE_HEIGHT,oe),_.pixelStorei(V.UNPACK_SKIP_PIXELS,Sn),_.pixelStorei(V.UNPACK_SKIP_ROWS,kn),_.pixelStorei(V.UNPACK_SKIP_IMAGES,Ei),yt===0&&k.generateMipmaps&&V.generateMipmap(Dt),_.unbindTexture()},this.initRenderTarget=function(T){N.get(T).__webglFramebuffer===void 0&&B.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?B.setTextureCube(T,0):T.isData3DTexture?B.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?B.setTexture2DArray(T,0):B.setTexture2D(T,0),_.unbindTexture()},this.resetState=function(){H=0,U=0,G=null,_.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class os{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let i=0;for(let s=0;s<this._n&&s<32;s++){const r=e[s],o=t+r,a=Math.abs(t)<Math.abs(r)?t-(o-r):r-(o-t);a&&(e[i++]=a),t=o}return e[i]=t,this._n=i+1,this}valueOf(){const t=this._partials;let e=this._n,i,s,r,o=0;if(e>0){for(o=t[--e];e>0&&(i=o,s=t[--e],o=i+s,r=s-(o-i),!r););e>0&&(r<0&&t[e-1]<0||r>0&&t[e-1]>0)&&(s=r*2,i=o+s,s==i-o&&(o=i))}return o}}function*lw(n){for(const t of n)yield*t}function h0(n){return Array.from(lw(n))}var be=1e-6,ae=Math.PI,Pn=ae/2,rp=ae/4,Ln=ae*2,ui=180/ae,gn=ae/180,Ae=Math.abs,cw=Math.atan,Jr=Math.atan2,Ue=Math.cos,Fe=Math.sin,uw=Math.sign||function(n){return n>0?1:n<0?-1:0},hs=Math.sqrt;function hw(n){return n>1?0:n<-1?ae:Math.acos(n)}function Qr(n){return n>1?Pn:n<-1?-Pn:Math.asin(n)}function Dn(){}function ba(n,t){n&&ap.hasOwnProperty(n.type)&&ap[n.type](n,t)}var op={Feature:function(n,t){ba(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,i=-1,s=e.length;++i<s;)ba(e[i].geometry,t)}},ap={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)n=e[i],t.point(n[0],n[1],n[2])},LineString:function(n,t){fu(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)fu(e[i],t,0)},Polygon:function(n,t){lp(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)lp(e[i],t)},GeometryCollection:function(n,t){for(var e=n.geometries,i=-1,s=e.length;++i<s;)ba(e[i],t)}};function fu(n,t,e){var i=-1,s=n.length-e,r;for(t.lineStart();++i<s;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function lp(n,t){var e=-1,i=n.length;for(t.polygonStart();++e<i;)fu(n[e],t,1);t.polygonEnd()}function Os(n,t){n&&op.hasOwnProperty(n.type)?op[n.type](n,t):ba(n,t)}function du(n){return[Jr(n[1],n[0]),Qr(n[2])]}function rr(n){var t=n[0],e=n[1],i=Ue(e);return[i*Ue(t),i*Fe(t),Fe(e)]}function Go(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function Ta(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Gl(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Ho(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function pu(n){var t=hs(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function mu(n,t){function e(i,s){return i=n(i,s),t(i[0],i[1])}return n.invert&&t.invert&&(e.invert=function(i,s){return i=t.invert(i,s),i&&n.invert(i[0],i[1])}),e}function gu(n,t){return Ae(n)>ae&&(n-=Math.round(n/Ln)*Ln),[n,t]}gu.invert=gu;function fw(n,t,e){return(n%=Ln)?t||e?mu(up(n),hp(t,e)):up(n):t||e?hp(t,e):gu}function cp(n){return function(t,e){return t+=n,Ae(t)>ae&&(t-=Math.round(t/Ln)*Ln),[t,e]}}function up(n){var t=cp(n);return t.invert=cp(-n),t}function hp(n,t){var e=Ue(n),i=Fe(n),s=Ue(t),r=Fe(t);function o(a,l){var c=Ue(l),u=Ue(a)*c,f=Fe(a)*c,h=Fe(l),d=h*e+u*i;return[Jr(f*s-d*r,u*e-h*i),Qr(d*s+f*r)]}return o.invert=function(a,l){var c=Ue(l),u=Ue(a)*c,f=Fe(a)*c,h=Fe(l),d=h*s-f*r;return[Jr(f*s+h*r,u*e+d*i),Qr(d*e-u*i)]},o}function dw(n,t,e,i,s,r){if(e){var o=Ue(t),a=Fe(t),l=i*e;s==null?(s=t+i*Ln,r=t-l/2):(s=fp(o,s),r=fp(o,r),(i>0?s<r:s>r)&&(s+=i*Ln));for(var c,u=s;i>0?u>r:u<r;u-=l)c=du([o,-a*Ue(u),-a*Fe(u)]),n.point(c[0],c[1])}}function fp(n,t){t=rr(t),t[0]-=n,pu(t);var e=hw(-t[1]);return((-t[2]<0?-e:e)+Ln-be)%Ln}function f0(){var n=[],t;return{point:function(e,i,s){t.push([e,i,s])},lineStart:function(){n.push(t=[])},lineEnd:Dn,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function ia(n,t){return Ae(n[0]-t[0])<be&&Ae(n[1]-t[1])<be}function Wo(n,t,e,i){this.x=n,this.z=t,this.o=e,this.e=i,this.v=!1,this.n=this.p=null}function d0(n,t,e,i,s){var r=[],o=[],a,l;if(n.forEach(function(g){if(!((x=g.length-1)<=0)){var x,m=g[0],p=g[x],M;if(ia(m,p)){if(!m[2]&&!p[2]){for(s.lineStart(),a=0;a<x;++a)s.point((m=g[a])[0],m[1]);s.lineEnd();return}p[0]+=2*be}r.push(M=new Wo(m,g,null,!0)),o.push(M.o=new Wo(m,null,M,!1)),r.push(M=new Wo(p,g,null,!1)),o.push(M.o=new Wo(p,null,M,!0))}}),!!r.length){for(o.sort(t),dp(r),dp(o),a=0,l=o.length;a<l;++a)o[a].e=e=!e;for(var c=r[0],u,f;;){for(var h=c,d=!0;h.v;)if((h=h.n)===c)return;u=h.z,s.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(a=0,l=u.length;a<l;++a)s.point((f=u[a])[0],f[1]);else i(h.x,h.n.x,1,s);h=h.n}else{if(d)for(u=h.p.z,a=u.length-1;a>=0;--a)s.point((f=u[a])[0],f[1]);else i(h.x,h.p.x,-1,s);h=h.p}h=h.o,u=h.z,d=!d}while(!h.v);s.lineEnd()}}}function dp(n){if(t=n.length){for(var t,e=0,i=n[0],s;++e<t;)i.n=s=n[e],s.p=i,i=s;i.n=s=n[0],s.p=i}}function Hl(n){return Ae(n[0])<=ae?n[0]:uw(n[0])*((Ae(n[0])+ae)%Ln-ae)}function pw(n,t){var e=Hl(t),i=t[1],s=Fe(i),r=[Fe(e),-Ue(e),0],o=0,a=0,l=new os;s===1?i=Pn+be:s===-1&&(i=-Pn-be);for(var c=0,u=n.length;c<u;++c)if(h=(f=n[c]).length)for(var f,h,d=f[h-1],g=Hl(d),x=d[1]/2+rp,m=Fe(x),p=Ue(x),M=0;M<h;++M,g=y,m=E,p=R,d=S){var S=f[M],y=Hl(S),b=S[1]/2+rp,E=Fe(b),R=Ue(b),v=y-g,A=v>=0?1:-1,L=A*v,D=L>ae,O=m*E;if(l.add(Jr(O*A*Fe(L),p*R+O*Ue(L))),o+=D?v+A*Ln:v,D^g>=e^y>=e){var X=Ta(rr(d),rr(S));pu(X);var q=Ta(r,X);pu(q);var P=(D^v>=0?-1:1)*Qr(q[2]);(i>P||i===P&&(X[0]||X[1]))&&(a+=D^v>=0?1:-1)}}return(o<-be||o<be&&l<-1e-12)^a&1}function p0(n,t,e,i){return function(s){var r=t(s),o=f0(),a=t(o),l=!1,c,u,f,h={point:d,lineStart:x,lineEnd:m,polygonStart:function(){h.point=p,h.lineStart=M,h.lineEnd=S,u=[],c=[]},polygonEnd:function(){h.point=d,h.lineStart=x,h.lineEnd=m,u=h0(u);var y=pw(c,i);u.length?(l||(s.polygonStart(),l=!0),d0(u,gw,y,e,s)):y&&(l||(s.polygonStart(),l=!0),s.lineStart(),e(null,null,1,s),s.lineEnd()),l&&(s.polygonEnd(),l=!1),u=c=null},sphere:function(){s.polygonStart(),s.lineStart(),e(null,null,1,s),s.lineEnd(),s.polygonEnd()}};function d(y,b){n(y,b)&&s.point(y,b)}function g(y,b){r.point(y,b)}function x(){h.point=g,r.lineStart()}function m(){h.point=d,r.lineEnd()}function p(y,b){f.push([y,b]),a.point(y,b)}function M(){a.lineStart(),f=[]}function S(){p(f[0][0],f[0][1]),a.lineEnd();var y=a.clean(),b=o.result(),E,R=b.length,v,A,L;if(f.pop(),c.push(f),f=null,!!R){if(y&1){if(A=b[0],(v=A.length-1)>0){for(l||(s.polygonStart(),l=!0),s.lineStart(),E=0;E<v;++E)s.point((L=A[E])[0],L[1]);s.lineEnd()}return}R>1&&y&2&&b.push(b.pop().concat(b.shift())),u.push(b.filter(mw))}}return h}}function mw(n){return n.length>1}function gw(n,t){return((n=n.x)[0]<0?n[1]-Pn-be:Pn-n[1])-((t=t.x)[0]<0?t[1]-Pn-be:Pn-t[1])}const pp=p0(function(){return!0},vw,xw,[-ae,-Pn]);function vw(n){var t=NaN,e=NaN,i=NaN,s;return{lineStart:function(){n.lineStart(),s=1},point:function(r,o){var a=r>0?ae:-ae,l=Ae(r-t);Ae(l-ae)<be?(n.point(t,e=(e+o)/2>0?Pn:-Pn),n.point(i,e),n.lineEnd(),n.lineStart(),n.point(a,e),n.point(r,e),s=0):i!==a&&l>=ae&&(Ae(t-i)<be&&(t-=i*be),Ae(r-a)<be&&(r-=a*be),e=_w(t,e,r,o),n.point(i,e),n.lineEnd(),n.lineStart(),n.point(a,e),s=0),n.point(t=r,e=o),i=a},lineEnd:function(){n.lineEnd(),t=e=NaN},clean:function(){return 2-s}}}function _w(n,t,e,i){var s,r,o=Fe(n-e);return Ae(o)>be?cw((Fe(t)*(r=Ue(i))*Fe(e)-Fe(i)*(s=Ue(t))*Fe(n))/(s*r*o)):(t+i)/2}function xw(n,t,e,i){var s;if(n==null)s=e*Pn,i.point(-ae,s),i.point(0,s),i.point(ae,s),i.point(ae,0),i.point(ae,-s),i.point(0,-s),i.point(-ae,-s),i.point(-ae,0),i.point(-ae,s);else if(Ae(n[0]-t[0])>be){var r=n[0]<t[0]?ae:-ae;s=e*r/2,i.point(-r,s),i.point(0,s),i.point(r,s)}else i.point(t[0],t[1])}function yw(n){var t=Ue(n),e=2*gn,i=t>0,s=Ae(t)>be;function r(u,f,h,d){dw(d,n,e,h,u,f)}function o(u,f){return Ue(u)*Ue(f)>t}function a(u){var f,h,d,g,x;return{lineStart:function(){g=d=!1,x=1},point:function(m,p){var M=[m,p],S,y=o(m,p),b=i?y?0:c(m,p):y?c(m+(m<0?ae:-ae),p):0;if(!f&&(g=d=y)&&u.lineStart(),y!==d&&(S=l(f,M),(!S||ia(f,S)||ia(M,S))&&(M[2]=1)),y!==d)x=0,y?(u.lineStart(),S=l(M,f),u.point(S[0],S[1])):(S=l(f,M),u.point(S[0],S[1],2),u.lineEnd()),f=S;else if(s&&f&&i^y){var E;!(b&h)&&(E=l(M,f,!0))&&(x=0,i?(u.lineStart(),u.point(E[0][0],E[0][1]),u.point(E[1][0],E[1][1]),u.lineEnd()):(u.point(E[1][0],E[1][1]),u.lineEnd(),u.lineStart(),u.point(E[0][0],E[0][1],3)))}y&&(!f||!ia(f,M))&&u.point(M[0],M[1]),f=M,d=y,h=b},lineEnd:function(){d&&u.lineEnd(),f=null},clean:function(){return x|(g&&d)<<1}}}function l(u,f,h){var d=rr(u),g=rr(f),x=[1,0,0],m=Ta(d,g),p=Go(m,m),M=m[0],S=p-M*M;if(!S)return!h&&u;var y=t*p/S,b=-t*M/S,E=Ta(x,m),R=Ho(x,y),v=Ho(m,b);Gl(R,v);var A=E,L=Go(R,A),D=Go(A,A),O=L*L-D*(Go(R,R)-1);if(!(O<0)){var X=hs(O),q=Ho(A,(-L-X)/D);if(Gl(q,R),q=du(q),!h)return q;var P=u[0],H=f[0],U=u[1],G=f[1],Q;H<P&&(Q=P,P=H,H=Q);var ft=H-P,ct=Ae(ft-ae)<be,dt=ct||ft<be;if(!ct&&G<U&&(Q=U,U=G,G=Q),dt?ct?U+G>0^q[1]<(Ae(q[0]-P)<be?U:G):U<=q[1]&&q[1]<=G:ft>ae^(P<=q[0]&&q[0]<=H)){var Lt=Ho(A,(-L+X)/D);return Gl(Lt,R),[q,du(Lt)]}}}function c(u,f){var h=i?n:ae-n,d=0;return u<-h?d|=1:u>h&&(d|=2),f<-h?d|=4:f>h&&(d|=8),d}return p0(o,a,r,i?[0,-n]:[-ae,n-ae])}function Mw(n,t,e,i,s,r){var o=n[0],a=n[1],l=t[0],c=t[1],u=0,f=1,h=l-o,d=c-a,g;if(g=e-o,!(!h&&g>0)){if(g/=h,h<0){if(g<u)return;g<f&&(f=g)}else if(h>0){if(g>f)return;g>u&&(u=g)}if(g=s-o,!(!h&&g<0)){if(g/=h,h<0){if(g>f)return;g>u&&(u=g)}else if(h>0){if(g<u)return;g<f&&(f=g)}if(g=i-a,!(!d&&g>0)){if(g/=d,d<0){if(g<u)return;g<f&&(f=g)}else if(d>0){if(g>f)return;g>u&&(u=g)}if(g=r-a,!(!d&&g<0)){if(g/=d,d<0){if(g>f)return;g>u&&(u=g)}else if(d>0){if(g<u)return;g<f&&(f=g)}return u>0&&(n[0]=o+u*h,n[1]=a+u*d),f<1&&(t[0]=o+f*h,t[1]=a+f*d),!0}}}}}var Ir=1e9,Xo=-Ir;function Sw(n,t,e,i){function s(c,u){return n<=c&&c<=e&&t<=u&&u<=i}function r(c,u,f,h){var d=0,g=0;if(c==null||(d=o(c,f))!==(g=o(u,f))||l(c,u)<0^f>0)do h.point(d===0||d===3?n:e,d>1?i:t);while((d=(d+f+4)%4)!==g);else h.point(u[0],u[1])}function o(c,u){return Ae(c[0]-n)<be?u>0?0:3:Ae(c[0]-e)<be?u>0?2:1:Ae(c[1]-t)<be?u>0?1:0:u>0?3:2}function a(c,u){return l(c.x,u.x)}function l(c,u){var f=o(c,1),h=o(u,1);return f!==h?f-h:f===0?u[1]-c[1]:f===1?c[0]-u[0]:f===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,f=f0(),h,d,g,x,m,p,M,S,y,b,E,R={point:v,lineStart:O,lineEnd:X,polygonStart:L,polygonEnd:D};function v(P,H){s(P,H)&&u.point(P,H)}function A(){for(var P=0,H=0,U=d.length;H<U;++H)for(var G=d[H],Q=1,ft=G.length,ct=G[0],dt,Lt,Ot=ct[0],Rt=ct[1];Q<ft;++Q)dt=Ot,Lt=Rt,ct=G[Q],Ot=ct[0],Rt=ct[1],Lt<=i?Rt>i&&(Ot-dt)*(i-Lt)>(Rt-Lt)*(n-dt)&&++P:Rt<=i&&(Ot-dt)*(i-Lt)<(Rt-Lt)*(n-dt)&&--P;return P}function L(){u=f,h=[],d=[],E=!0}function D(){var P=A(),H=E&&P,U=(h=h0(h)).length;(H||U)&&(c.polygonStart(),H&&(c.lineStart(),r(null,null,1,c),c.lineEnd()),U&&d0(h,a,P,r,c),c.polygonEnd()),u=c,h=d=g=null}function O(){R.point=q,d&&d.push(g=[]),b=!0,y=!1,M=S=NaN}function X(){h&&(q(x,m),p&&y&&f.rejoin(),h.push(f.result())),R.point=v,y&&u.lineEnd()}function q(P,H){var U=s(P,H);if(d&&g.push([P,H]),b)x=P,m=H,p=U,b=!1,U&&(u.lineStart(),u.point(P,H));else if(U&&y)u.point(P,H);else{var G=[M=Math.max(Xo,Math.min(Ir,M)),S=Math.max(Xo,Math.min(Ir,S))],Q=[P=Math.max(Xo,Math.min(Ir,P)),H=Math.max(Xo,Math.min(Ir,H))];Mw(G,Q,n,t,e,i)?(y||(u.lineStart(),u.point(G[0],G[1])),u.point(Q[0],Q[1]),U||u.lineEnd(),E=!1):U&&(u.lineStart(),u.point(P,H),E=!1)}M=P,S=H,y=U}return R}}const vu=n=>n;var Wl=new os,_u=new os,m0,g0,xu,yu,fi={point:Dn,lineStart:Dn,lineEnd:Dn,polygonStart:function(){fi.lineStart=Ew,fi.lineEnd=Tw},polygonEnd:function(){fi.lineStart=fi.lineEnd=fi.point=Dn,Wl.add(Ae(_u)),_u=new os},result:function(){var n=Wl/2;return Wl=new os,n}};function Ew(){fi.point=bw}function bw(n,t){fi.point=v0,m0=xu=n,g0=yu=t}function v0(n,t){_u.add(yu*n-xu*t),xu=n,yu=t}function Tw(){v0(m0,g0)}var or=1/0,Aa=or,to=-or,wa=to,Ra={point:Aw,lineStart:Dn,lineEnd:Dn,polygonStart:Dn,polygonEnd:Dn,result:function(){var n=[[or,Aa],[to,wa]];return to=wa=-(Aa=or=1/0),n}};function Aw(n,t){n<or&&(or=n),n>to&&(to=n),t<Aa&&(Aa=t),t>wa&&(wa=t)}var Mu=0,Su=0,Nr=0,Ca=0,Pa=0,qs=0,Eu=0,bu=0,Ur=0,_0,x0,Yn,$n,Cn={point:as,lineStart:mp,lineEnd:gp,polygonStart:function(){Cn.lineStart=Cw,Cn.lineEnd=Pw},polygonEnd:function(){Cn.point=as,Cn.lineStart=mp,Cn.lineEnd=gp},result:function(){var n=Ur?[Eu/Ur,bu/Ur]:qs?[Ca/qs,Pa/qs]:Nr?[Mu/Nr,Su/Nr]:[NaN,NaN];return Mu=Su=Nr=Ca=Pa=qs=Eu=bu=Ur=0,n}};function as(n,t){Mu+=n,Su+=t,++Nr}function mp(){Cn.point=ww}function ww(n,t){Cn.point=Rw,as(Yn=n,$n=t)}function Rw(n,t){var e=n-Yn,i=t-$n,s=hs(e*e+i*i);Ca+=s*(Yn+n)/2,Pa+=s*($n+t)/2,qs+=s,as(Yn=n,$n=t)}function gp(){Cn.point=as}function Cw(){Cn.point=Dw}function Pw(){y0(_0,x0)}function Dw(n,t){Cn.point=y0,as(_0=Yn=n,x0=$n=t)}function y0(n,t){var e=n-Yn,i=t-$n,s=hs(e*e+i*i);Ca+=s*(Yn+n)/2,Pa+=s*($n+t)/2,qs+=s,s=$n*n-Yn*t,Eu+=s*(Yn+n),bu+=s*($n+t),Ur+=s*3,as(Yn=n,$n=t)}function M0(n){this._context=n}M0.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._context.moveTo(n,t),this._point=1;break}case 1:{this._context.lineTo(n,t);break}default:{this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,Ln);break}}},result:Dn};var Tu=new os,Xl,S0,E0,Fr,Or,eo={point:Dn,lineStart:function(){eo.point=Lw},lineEnd:function(){Xl&&b0(S0,E0),eo.point=Dn},polygonStart:function(){Xl=!0},polygonEnd:function(){Xl=null},result:function(){var n=+Tu;return Tu=new os,n}};function Lw(n,t){eo.point=b0,S0=Fr=n,E0=Or=t}function b0(n,t){Fr-=n,Or-=t,Tu.add(hs(Fr*Fr+Or*Or)),Fr=n,Or=t}let vp,Da,_p,xp;class yp{constructor(t){this._append=t==null?T0:Iw(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==_p||this._append!==Da){const i=this._radius,s=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,_p=i,Da=this._append,xp=this._,this._=s}this._+=xp;break}}}result(){const t=this._;return this._="",t.length?t:null}}function T0(n){let t=1;this._+=n[0];for(const e=n.length;t<e;++t)this._+=arguments[t]+n[t]}function Iw(n){const t=Math.floor(n);if(!(t>=0))throw new RangeError(`invalid digits: ${n}`);if(t>15)return T0;if(t!==vp){const e=10**t;vp=t,Da=function(s){let r=1;this._+=s[0];for(const o=s.length;r<o;++r)this._+=Math.round(arguments[r]*e)/e+s[r]}}return Da}function Mp(n,t){let e=3,i=4.5,s,r;function o(a){return a&&(typeof i=="function"&&r.pointRadius(+i.apply(this,arguments)),Os(a,s(r))),r.result()}return o.area=function(a){return Os(a,s(fi)),fi.result()},o.measure=function(a){return Os(a,s(eo)),eo.result()},o.bounds=function(a){return Os(a,s(Ra)),Ra.result()},o.centroid=function(a){return Os(a,s(Cn)),Cn.result()},o.projection=function(a){return arguments.length?(s=a==null?(n=null,vu):(n=a).stream,o):n},o.context=function(a){return arguments.length?(r=a==null?(t=null,new yp(e)):new M0(t=a),typeof i!="function"&&r.pointRadius(i),o):t},o.pointRadius=function(a){return arguments.length?(i=typeof a=="function"?a:(r.pointRadius(+a),+a),o):i},o.digits=function(a){if(!arguments.length)return e;if(a==null)e=null;else{const l=Math.floor(a);if(!(l>=0))throw new RangeError(`invalid digits: ${a}`);e=l}return t===null&&(r=new yp(e)),o},o.projection(n).digits(e).context(t)}function bh(n){return function(t){var e=new Au;for(var i in n)e[i]=n[i];return e.stream=t,e}}function Au(){}Au.prototype={constructor:Au,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Th(n,t,e){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),Os(e,n.stream(Ra)),t(Ra.result()),i!=null&&n.clipExtent(i),n}function A0(n,t,e){return Th(n,function(i){var s=t[1][0]-t[0][0],r=t[1][1]-t[0][1],o=Math.min(s/(i[1][0]-i[0][0]),r/(i[1][1]-i[0][1])),a=+t[0][0]+(s-o*(i[1][0]+i[0][0]))/2,l=+t[0][1]+(r-o*(i[1][1]+i[0][1]))/2;n.scale(150*o).translate([a,l])},e)}function Nw(n,t,e){return A0(n,[[0,0],t],e)}function Uw(n,t,e){return Th(n,function(i){var s=+t,r=s/(i[1][0]-i[0][0]),o=(s-r*(i[1][0]+i[0][0]))/2,a=-r*i[0][1];n.scale(150*r).translate([o,a])},e)}function Fw(n,t,e){return Th(n,function(i){var s=+t,r=s/(i[1][1]-i[0][1]),o=-r*i[0][0],a=(s-r*(i[1][1]+i[0][1]))/2;n.scale(150*r).translate([o,a])},e)}var Sp=16,Ow=Ue(30*gn);function Ep(n,t){return+t?Vw(n,t):Bw(n)}function Bw(n){return bh({point:function(t,e){t=n(t,e),this.stream.point(t[0],t[1])}})}function Vw(n,t){function e(i,s,r,o,a,l,c,u,f,h,d,g,x,m){var p=c-i,M=u-s,S=p*p+M*M;if(S>4*t&&x--){var y=o+h,b=a+d,E=l+g,R=hs(y*y+b*b+E*E),v=Qr(E/=R),A=Ae(Ae(E)-1)<be||Ae(r-f)<be?(r+f)/2:Jr(b,y),L=n(A,v),D=L[0],O=L[1],X=D-i,q=O-s,P=M*X-p*q;(P*P/S>t||Ae((p*X+M*q)/S-.5)>.3||o*h+a*d+l*g<Ow)&&(e(i,s,r,o,a,l,D,O,A,y/=R,b/=R,E,x,m),m.point(D,O),e(D,O,A,y,b,E,c,u,f,h,d,g,x,m))}}return function(i){var s,r,o,a,l,c,u,f,h,d,g,x,m={point:p,lineStart:M,lineEnd:y,polygonStart:function(){i.polygonStart(),m.lineStart=b},polygonEnd:function(){i.polygonEnd(),m.lineStart=M}};function p(v,A){v=n(v,A),i.point(v[0],v[1])}function M(){f=NaN,m.point=S,i.lineStart()}function S(v,A){var L=rr([v,A]),D=n(v,A);e(f,h,u,d,g,x,f=D[0],h=D[1],u=v,d=L[0],g=L[1],x=L[2],Sp,i),i.point(f,h)}function y(){m.point=p,i.lineEnd()}function b(){M(),m.point=E,m.lineEnd=R}function E(v,A){S(s=v,A),r=f,o=h,a=d,l=g,c=x,m.point=S}function R(){e(f,h,u,d,g,x,r,o,s,a,l,c,Sp,i),m.lineEnd=y,y()}return m}}var zw=bh({point:function(n,t){this.stream.point(n*gn,t*gn)}});function kw(n){return bh({point:function(t,e){var i=n(t,e);return this.stream.point(i[0],i[1])}})}function Gw(n,t,e,i,s){function r(o,a){return o*=i,a*=s,[t+n*o,e-n*a]}return r.invert=function(o,a){return[(o-t)/n*i,(e-a)/n*s]},r}function bp(n,t,e,i,s,r){if(!r)return Gw(n,t,e,i,s);var o=Ue(r),a=Fe(r),l=o*n,c=a*n,u=o/n,f=a/n,h=(a*e-o*t)/n,d=(a*t+o*e)/n;function g(x,m){return x*=i,m*=s,[l*x-c*m+t,e-c*x-l*m]}return g.invert=function(x,m){return[i*(u*x-f*m+h),s*(d-f*x-u*m)]},g}function Hw(n){return Ww(function(){return n})()}function Ww(n){var t,e=150,i=480,s=250,r=0,o=0,a=0,l=0,c=0,u,f=0,h=1,d=1,g=null,x=pp,m=null,p,M,S,y=vu,b=.5,E,R,v,A,L;function D(P){return v(P[0]*gn,P[1]*gn)}function O(P){return P=v.invert(P[0],P[1]),P&&[P[0]*ui,P[1]*ui]}D.stream=function(P){return A&&L===P?A:A=zw(kw(u)(x(E(y(L=P)))))},D.preclip=function(P){return arguments.length?(x=P,g=void 0,q()):x},D.postclip=function(P){return arguments.length?(y=P,m=p=M=S=null,q()):y},D.clipAngle=function(P){return arguments.length?(x=+P?yw(g=P*gn):(g=null,pp),q()):g*ui},D.clipExtent=function(P){return arguments.length?(y=P==null?(m=p=M=S=null,vu):Sw(m=+P[0][0],p=+P[0][1],M=+P[1][0],S=+P[1][1]),q()):m==null?null:[[m,p],[M,S]]},D.scale=function(P){return arguments.length?(e=+P,X()):e},D.translate=function(P){return arguments.length?(i=+P[0],s=+P[1],X()):[i,s]},D.center=function(P){return arguments.length?(r=P[0]%360*gn,o=P[1]%360*gn,X()):[r*ui,o*ui]},D.rotate=function(P){return arguments.length?(a=P[0]%360*gn,l=P[1]%360*gn,c=P.length>2?P[2]%360*gn:0,X()):[a*ui,l*ui,c*ui]},D.angle=function(P){return arguments.length?(f=P%360*gn,X()):f*ui},D.reflectX=function(P){return arguments.length?(h=P?-1:1,X()):h<0},D.reflectY=function(P){return arguments.length?(d=P?-1:1,X()):d<0},D.precision=function(P){return arguments.length?(E=Ep(R,b=P*P),q()):hs(b)},D.fitExtent=function(P,H){return A0(D,P,H)},D.fitSize=function(P,H){return Nw(D,P,H)},D.fitWidth=function(P,H){return Uw(D,P,H)},D.fitHeight=function(P,H){return Fw(D,P,H)};function X(){var P=bp(e,0,0,h,d,f).apply(null,t(r,o)),H=bp(e,i-P[0],s-P[1],h,d,f);return u=fw(a,l,c),R=mu(t,H),v=mu(u,R),E=Ep(R,b),q()}function q(){return A=L=null,D}return function(){return t=n.apply(this,arguments),D.invert=t.invert&&O,X()}}function wu(n,t){return[n,t]}wu.invert=wu;function Tp(){return Hw(wu).scale(152.63)}function Ns(n){if(!n||n.trim()==="")return{r:0,g:0,b:0,a:0};const t=n.trim(),e=t.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i);if(e){const s=Math.max(0,Math.min(255,parseFloat(e[1])))/255,r=Math.max(0,Math.min(255,parseFloat(e[2])))/255,o=Math.max(0,Math.min(255,parseFloat(e[3])))/255,a=e[4]!==void 0?Math.max(0,Math.min(1,parseFloat(e[4]))):1;return{r:s,g:r,b:o,a}}const i=t.replace(/^#/,"");return i.length===8?{r:parseInt(i.slice(0,2),16)/255,g:parseInt(i.slice(2,4),16)/255,b:parseInt(i.slice(4,6),16)/255,a:parseInt(i.slice(6,8),16)/255}:i.length===6?{r:parseInt(i.slice(0,2),16)/255,g:parseInt(i.slice(2,4),16)/255,b:parseInt(i.slice(4,6),16)/255,a:1}:i.length===4?{r:parseInt(i[0]+i[0],16)/255,g:parseInt(i[1]+i[1],16)/255,b:parseInt(i[2]+i[2],16)/255,a:parseInt(i[3]+i[3],16)/255}:i.length===3?{r:parseInt(i[0]+i[0],16)/255,g:parseInt(i[1]+i[1],16)/255,b:parseInt(i[2]+i[2],16)/255,a:1}:{r:0,g:0,b:0,a:1}}function yi(n,t,e,i,s){if(e===t)return i;const r=(n-t)/(e-t);return i+r*(s-i)}function Xw(n){if(n===0)return 0;const t=Math.max(0,Math.min(10,n));return yi(t,0,10,0,.9)}function qw(n){const t=Math.max(1,Math.min(10,n));return yi(t,1,10,24,8)}function Yw(n){const t=Math.max(1,Math.min(20,n));return yi(t,1,20,.2,2)}function $w(n){const t=Math.max(1,Math.min(10,n));return yi(t,1,10,.1,.5)}function Kw(n){const t=Math.max(0,Math.min(100,n));return yi(t,0,100,.1,2.5)}function Zw(n){return Math.max(0,Math.min(1,n/10))}function jw(n){return yi(Math.max(0,Math.min(10,n)),0,10,.001,.02)}function Jw(n){const t=Math.max(1,Math.min(10,n));return yi(t,1,10,10,1)}function Qw(n,t){if(n.length<2||t>=10)return n;const e=Math.max(1,Math.floor(Jw(t))),i=[];i.push(n[0]);for(let a=e;a<n.length-1;a+=e){const l=Math.min(a,n.length-1);i.push(n[l])}const s=n[n.length-1],r=n[0];return Math.abs(s[0]-r[0])<1e-4&&Math.abs(s[1]-r[1])<1e-4||i.push(s),i.length>=2?i:n}function Ar(n,t){const e=n*(Math.PI/180),i=t*(Math.PI/180),s=Math.cos(e)*Math.sin(i),r=Math.sin(e),o=Math.cos(e)*Math.cos(i);return{x:s,y:r,z:o}}function tR({speed:n=2,smoothing:t=8,dots:e={color:"#ffffff",size:5,density:8,allDots:!1},fill:i="dots",fillColor:s="#ffffff",scale:r=8,stopOnHover:o=!0,markerConfig:a={markers:[],color:"#00f7ff",size:40},direction:l="left",initialLatitude:c=23,initialLongitude:u=-23,oceanColor:f="#000000",outlineColor:h="#ffffff",showOutline:d=!0,graticuleColor:g="#D4D4D4",showGrid:x=!0,outlineWidth:m=1,dragSpeed:p=5,detail:M=5,style:S}){const y=ut.useRef(null),[,b]=ut.useState(!0),[E,R]=ut.useState(null),v=e.color,A=e.size,L=e.density,D=e.allDots,O=1,X=Zw(t),q=Xw(n),P=l==="left"?-q:q,H=qw(L),U=$w(A),G=Kw(a.size),Q=Yw(r);ut.useEffect(()=>{if(!y.current)return;const ct=y.current,dt=ct.clientWidth||ct.offsetWidth||800,Lt=ct.clientHeight||ct.offsetHeight||600,Ot=new zg,Rt=new vn(50,dt/Lt,.1,1e3),ot=1*Q,lt=2.5/Q;Rt.position.set(0,0,lt),Rt.lookAt(0,0,0);const xt=new u0({antialias:!0,alpha:!0});xt.setSize(dt,Lt),xt.setPixelRatio(Math.min(window.devicePixelRatio,2)),xt.outputColorSpace="srgb";const Ct=xt.domElement;Ct.style.position="absolute",Ct.style.inset="0",Ct.style.width="100%",Ct.style.height="100%",Ct.style.display="block",Ct.style.opacity="0",Ct.style.visibility="hidden",ct.appendChild(Ct);const Pt=f,Jt=h,Bt=v,Xt=a.color,Wt=g,Gt=s,te=Ns(Pt),ie=Ns(Jt),ce=Ns(Bt);Ns(Xt);const ue=Ns(Wt),se=Ns(Gt),ve=new Ws(ot,64,64),V=Pt?new zt(Pt):new zt(0,0,0),Oe=new Wn({color:V,transparent:te.a<1||te.a===0,opacity:te.a}),jt=new qe(ve,Oe);if(Ot.add(jt),d&&h&&ie.a>0){const qt=[];for(let Zt=0;Zt<=128;Zt++){const Yt=Zt/128*Math.PI*2,_e=Math.cos(Yt)*ot,re=Math.sin(Yt)*ot;qt.push(_e,re,0)}const le=[];for(let Zt=0;Zt<qt.length;Zt+=3)le.push(new F(qt[Zt],qt[Zt+1],qt[Zt+2]));if(le.length>=2){le.push(le[0].clone());const Zt=new zt(Jt),Yt=new Wn({color:Zt,transparent:ie.a<1,opacity:ie.a}),_e=new Dr(le),re=m/10*.01,xe=new Xs(_e,le.length*2,re,8,!1);new qe(xe,Yt)}}const C=new Ui,_=new Ui;if(x&&Wt&&ue.a>0){const qt=Wt?new zt(Wt):new zt(1,1,1),Kt=new Wn({color:qt,transparent:ue.a<1||ue.a===0,opacity:ue.a}),le=15;for(let Zt=-90;Zt<=90;Zt+=le){const Yt=[];for(let re=0;re<=64;re++){const xe=re/64*360-180,sn=Ar(Zt,xe);Yt.push(sn.x*ot,sn.y*ot,sn.z*ot)}if(Yt&&Yt.length>=6){const re=[];for(let xe=0;xe<Yt.length;xe+=3)re.push(new F(Yt[xe],Yt[xe+1],Yt[xe+2]));if(re.length>=2){const xe=new Dr(re),sn=O/10*.01,hn=new Xs(xe,re.length*2,sn,8,!1),yn=new qe(hn,Kt);yn.renderOrder=0,_.add(yn)}}}for(let Zt=-180;Zt<180;Zt+=le){const Yt=[];for(let re=0;re<=64;re++){const xe=re/64*180-90,sn=Ar(xe,Zt);Yt.push(sn.x*ot,sn.y*ot,sn.z*ot)}if(Yt&&Yt.length>=6){const re=[];for(let xe=0;xe<Yt.length;xe+=3)re.push(new F(Yt[xe],Yt[xe+1],Yt[xe+2]));if(re.length>=2){const xe=new Dr(re),sn=O/10*.01,hn=new Xs(xe,re.length*2,sn,8,!1),yn=new qe(hn,Kt);yn.renderOrder=0,_.add(yn)}}}}let w=null,N=[];const B=async()=>{try{b(!0);const qt=await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/50m/physical/ne_50m_land.json");if(!qt.ok)throw new Error("Failed to load land data");const Kt=await qt.json();for(;C.children.length>0;)C.remove(C.children[0]);if(d&&h&&ie.a>0){const rn=new zt(Jt),Vn=new Wn({color:rn,transparent:ie.a<1,opacity:ie.a,depthTest:!0,depthWrite:!0}),Le=Tp(),fn=Mp().projection(Le);let Ze=0,ze=0;Kt.features.forEach(ke=>{var Z,Y,$;const Mn=((Z=ke.properties)==null?void 0:Z.featurecla)||((Y=ke.properties)==null?void 0:Y.type)||"",si=(($=ke.properties)==null?void 0:$.name)||"";if(Mn.toLowerCase().includes("graticule")||Mn.toLowerCase().includes("grid")||Mn.toLowerCase().includes("line")||si.toLowerCase().includes("graticule")||si.toLowerCase().includes("grid")||si.toLowerCase().includes("line")){ze++;return}Ze++;const Si=fn(ke);if(!Si||(Si.match(/[ML][^MLZ]*/g)||[]).length===0)return;const T=ke.geometry;if(!T||!T.coordinates)return;const k=yt=>{if(yt.length<2)return;const wt=Qw(yt,M),_t=[];if(wt.forEach(Et=>{const[At,Vt]=Et,kt=Ar(Vt,At);_t.push(kt.x*ot,kt.y*ot,kt.z*ot)}),_t&&_t.length>=6){const Et=[];for(let At=0;At<_t.length;At+=3)Et.push(new F(_t[At],_t[At+1],_t[At+2]));if(Et.length>0&&Et[0].distanceTo(Et[Et.length-1])>.001&&Et.push(Et[0].clone()),Et.length>=2){const At=new Dr(Et),Vt=m/10*.01,kt=new Xs(At,Et.length*2,Vt,8,!1),It=new qe(kt,Vn);It.renderOrder=0,C.add(It)}}};T.type==="Polygon"&&T.coordinates.length>0?k(T.coordinates[0]):T.type==="MultiPolygon"&&T.coordinates.forEach(yt=>{yt.length>0&&k(yt[0])})}),console.log(`[Globe] Processed ${Ze} land features, skipped ${ze} grid features`)}const le=2048,Zt=1024,Yt=document.createElement("canvas");Yt.width=le,Yt.height=Zt;const _e=Yt.getContext("2d",{willReadFrequently:!0});if(!_e)throw new Error("Canvas not supported");const re=Tp().fitSize([le,Zt],{type:"Sphere"}),xe=Mp().projection(re).context(_e);_e.fillStyle="#000",_e.fillRect(0,0,le,Zt),_e.fillStyle="#fff",_e.beginPath(),Kt.features.forEach(rn=>{xe(rn)}),_e.fill();const hn=_e.getImageData(0,0,le,Zt).data,yn=(rn,Vn)=>{const Le=Math.round((rn+180)/360*le)%le,fn=Math.round((90-Vn)/180*Zt),ze=(Math.max(0,Math.min(Zt-1,fn))*le+Le)*4;return hn[ze]>128};if(i==="solid"){const Le=document.createElement("canvas");Le.width=1024,Le.height=512;const fn=Le.getContext("2d"),Ze=fn.createImageData(1024,512),ze=Ze.data,ke=Math.round(se.r*255),Mn=Math.round(se.g*255),si=Math.round(se.b*255),Si=Math.round((se.a||1)*255);for(let Z=0;Z<512;Z++)for(let Y=0;Y<1024;Y++){const $=Y/1024,yt=Z/512;let wt=($-.25)*360;wt=((wt+180)%360+360)%360-180;const _t=(yt-.5)*180,Et=D||yn(wt,_t),At=(Z*1024+Y)*4;Et?(ze[At]=ke,ze[At+1]=Mn,ze[At+2]=si,ze[At+3]=Si):ze[At+3]=0}fn.putImageData(Ze,0,0);const zn=new zS(Le);zn.flipY=!1,zn.needsUpdate=!0;const T=new Ws(ot*1.002,64,64),k=new Wn({map:zn,transparent:!0});w=new qe(T,k),K.add(w)}else{const rn=[],Vn=H*.08;for(let Le=-90;Le<=90;Le+=Vn){const fn=Math.abs(Le)*Math.PI/180,Ze=Math.cos(fn),ze=Ze>.01?Vn/Math.max(.3,Ze):360;for(let ke=-180;ke<180;ke+=ze)(D||yn(ke,Le))&&rn.push([ke,Le])}if(rn.length>0){const Le=new Ws(.01*U,4,4),fn=Bt?new zt(Bt):new zt(.6,.6,.6),Ze=new Wn({color:fn,transparent:ce.a<1||ce.a===0,opacity:ce.a}),ze=new qg(Le,Ze,rn.length),ke=new pe;for(let Mn=0;Mn<rn.length;Mn++){const[si,Si]=rn[Mn],zn=Ar(Si,si);ke.makeScale(1,1,1),ke.setPosition(zn.x*ot,zn.y*ot,zn.z*ot),ze.setMatrixAt(Mn,ke)}ze.instanceMatrix.needsUpdate=!0,w=ze,K.add(w)}}et(),xt.render(Ot,Rt),Ct.style.opacity="1",Ct.style.visibility="visible",b(!1)}catch{R("Failed to load land map data"),b(!1)}},et=()=>{if(N.forEach(qt=>K.remove(qt)),N=[],a.markers&&a.markers.length>0){const qt=.01*G,Kt=new Ws(qt,16,16),le=Xt?new zt(Xt):new zt(1,1,1),Zt=new Wn({color:le});a.markers.forEach(Yt=>{if(!Yt||typeof Yt.lat!="number"||typeof Yt.lng!="number")return;const _e=Ar(Yt.lat,Yt.lng),re=new qe(Kt,Zt.clone());re.position.set(_e.x*ot,_e.y*ot,_e.z*ot),K.add(re),N.push(re)})}},j=u*Math.PI/180,z=c*Math.PI/180,W={x:j,y:z},nt={x:j,y:z},tt={x:0,y:0};let rt=!1,it=!1,pt=0,mt=0,Mt=null;const I=X===0?1:yi(X,0,1,.4,.03),ht=yi(X,0,1,.7,.96),K=new Ui;K.rotation.y=j,K.rotation.x=z,Ot.add(K),K.add(jt),x&&g&&ue.a>0&&K.add(_),K.add(C),N.forEach(qt=>K.add(qt));const gt=()=>{let qt=!1;const Kt=.01;!rt&&P!==0&&(!o||!it)&&(nt.x+=P*.01),!rt&&X>0&&(Math.abs(tt.x)>Kt||Math.abs(tt.y)>Kt?(nt.x+=tt.x,nt.y+=tt.y,nt.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,nt.y)),tt.x*=ht,tt.y*=ht):(tt.x=0,tt.y=0));const le=nt.x-W.x,Zt=nt.y-W.y;(Math.abs(le)>Kt||Math.abs(Zt)>Kt||P!==0||rt)&&(W.x+=le*I,W.y+=Zt*I,W.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,W.y)),qt=!0),(qt||P!==0||rt)&&(K.rotation.y=W.x,K.rotation.x=W.y,xt.render(Ot,Rt));const Yt=Math.abs(tt.x)>Kt||Math.abs(tt.y)>Kt,_e=Math.abs(le)>Kt||Math.abs(Zt)>Kt;rt||P!==0||Yt||_e?Mt=requestAnimationFrame(gt):Mt=null},vt=()=>{Mt===null&&(Mt=requestAnimationFrame(gt))};P!==0&&vt();const at=qt=>{rt=!0,tt.x=0,tt.y=0,pt=qt.clientX,mt=qt.clientY,vt();const Kt=Zt=>{const Yt=jw(p),_e=Zt.clientX-pt,re=Zt.clientY-mt;nt.x+=_e*Yt,nt.y+=re*Yt,nt.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,nt.y)),tt.x=_e*Yt*.3,tt.y=re*Yt*.3,pt=Zt.clientX,mt=Zt.clientY},le=()=>{document.removeEventListener("mousemove",Kt),document.removeEventListener("mouseup",le),rt=!1};document.addEventListener("mousemove",Kt),document.addEventListener("mouseup",le)};Ct.addEventListener("mousedown",at);const Tt=new fE,St=new Nt,he=qt=>{if(!o)return;const Kt=Ct.getBoundingClientRect();St.x=(qt.clientX-Kt.left)/Kt.width*2-1,St.y=-((qt.clientY-Kt.top)/Kt.height)*2+1,Tt.setFromCamera(St,Rt),it=Tt.intersectObject(jt).length>0};Ct.addEventListener("mousemove",he);const fe=new ResizeObserver(()=>{const qt=ct.clientWidth||ct.offsetWidth||800,Kt=ct.clientHeight||ct.offsetHeight||600;Rt.aspect=qt/Kt,Rt.updateProjectionMatrix(),xt.setSize(qt,Kt);const le=2.5/Q;Rt.position.set(0,0,le),Rt.lookAt(0,0,0),xt.render(Ot,Rt)});return fe.observe(ct),B(),()=>{Mt!==null&&cancelAnimationFrame(Mt),Ct.removeEventListener("mousedown",at),Ct.removeEventListener("mousemove",he),fe.disconnect(),xt.dispose(),ct.removeChild(Ct)}},[n,t,e,i,s,D,L,A,v,r,o,a,l,c,u,f,h,d,g,x,m,p,M,P,H,U,G,Q]);const ft={...S,position:"relative",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return E?J.jsx("div",{style:ft,children:J.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minWidth:0,minHeight:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#ffffff",textAlign:"center",padding:"16px",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},children:[J.jsx("div",{style:{fontSize:"16px",fontWeight:600},children:"Error loading Earth visualization"}),J.jsx("div",{style:{fontSize:"13px",opacity:.7,marginTop:"4px"},children:E})]})}):J.jsx("div",{ref:y,style:ft})}function eR(){const[n,t]=ut.useState(!1);return ut.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)"),i=()=>t(e.matches);return i(),e.addEventListener("change",i),()=>e.removeEventListener("change",i)},[]),n}const Ve={background:"#000000",topRadius:380,waistRadius:53,waistPosition:50,bottomRadius:1150,twist:3,zoom:75,speed:10,direction:"right",lineOptions:{count:240,color:"#ffffff",glow:10},dots:!0,dotOptions:{count:8e3,size:20,color:"#ffffff",glow:10,flicker:10},comets:!0,cometOptions:{count:10,speed:6,color:"#F9731A",glow:6,tail:19,delay:8,collide:6},repel:!1,repelOptions:{radius:60,strength:10}},Wr=Math.PI*2,ql=60,Yl=1024,Us=400,$l=.008,qo=.15,Xr=10,w0=67,Kl=n=>Ii(2*w0-n,1,175),nR=1,iR=4.2,sR=.15,rR=1,oR=1e3,Ap=2,wp=.5,aR=9,lR=11,cR=1.8,uR=5,Rp=1.2,hR=.8,fR=2.5,dR=.04,Zl=16,jl=.03,Jl=.95,Cp=.1,Pp=.8,Dp=1.6,Lp=.4,Ip=6,Np=.6,Up=1.3,pR=8,Fp=1/30,Fs={strandStart:0,strandEnd:2,dotStart:1.2,dotEnd:3,cometStart:3,cometEnd:5},mR=.45,Ii=(n,t,e)=>Math.min(Math.max(n,t),e);function Ql(n,t,e){if(n<=t)return 0;if(n>=e)return 1;const i=(n-t)/(e-t);return 1-(1-i)*(1-i)*(1-i)}function tc(n){const t=n.length,e=[];for(let s=0;s<t-1;s++)e[s]=(n[s+1][1]-n[s][1])/(n[s+1][0]-n[s][0]);const i=[e[0]];for(let s=1;s<t-1;s++)i[s]=e[s-1]*e[s]<=0?0:(e[s-1]+e[s])/2;i[t-1]=e[t-2];for(let s=0;s<t-1;s++){if(Math.abs(e[s])<1e-12){i[s]=i[s+1]=0;continue}const r=i[s]/e[s],o=i[s+1]/e[s],a=r*r+o*o;if(a>9){const l=3/Math.sqrt(a);i[s]=l*r*e[s],i[s+1]=l*o*e[s]}}return s=>{if(s<=n[0][0])return n[0][1];if(s>=n[t-1][0])return n[t-1][1];let r=0;for(;r<t-2&&n[r+1][0]<s;)r++;const o=n[r+1][0]-n[r][0],a=(s-n[r][0])/o,l=a*a,c=l*a;return(2*c-3*l+1)*n[r][1]+(c-2*l+a)*o*i[r]+(-2*c+3*l)*n[r+1][1]+(c-l)*o*i[r+1]}}function ec(n){const t=new Float32Array(Yl);for(let e=0;e<Yl;e++)t[e]=n(e/(Yl-1));return t}function nc(n,t){if(t<=0)return n[0];const e=n.length-1;if(t>=1)return n[e];const i=t*e,s=i|0;return n[s]+(n[s+1]-n[s])*(i-s)}function gR(n){const t=Ii(n.waistAt,.08,.92),e=n.floorRadius,i=n.crownRadius,s=n.twist*Wr,r=ec(tc([[0,e],[.24*t,e*.667],[.5*t,e*.3],[.76*t,e*.08],[t,n.waistRadius],[t+.3*(1-t),i*.2],[t+.6*(1-t),i*.44],[1,i]])),o=ec(tc([[0,0],[.1,.2],[.2,.8],[.35,2],[.5,Xr*.38],[.75,Xr*.7],[1,Xr]])),a=ec(tc([[0,0],[.15,.15*s],[.25,.25*s],[.45,.55*s],[.6,.7*s],[.8,.88*s],[1,s]]));return{writePoint(l,c,u,f,h,d,g,x){const m=nc(r,u),p=nc(o,u),M=nc(a,u)+f+h,S=m+Math.sin(u*25+g+x*.3)*d*m;l[c]=Math.cos(M)*S,l[c+1]=p,l[c+2]=Math.sin(M)*S},lane:(l,c)=>l/c*Wr}}function vR(n,t,e){const i=new u0({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"});i.setClearColor(0,0),i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.toneMapping=uh,i.toneMappingExposure=1.25;const s=new zg,r=new vn(Kl(e.current.zoom),1,.1,500),o=new Ui;s.add(o);const a={uMouse:{value:new Nt(0,0)},uAspect:{value:1},uRadius:{value:.2},uStrength:{value:0}},l=w=>(w.onBeforeCompile=N=>{N.uniforms.uMouse=a.uMouse,N.uniforms.uAspect=a.uAspect,N.uniforms.uRadius=a.uRadius,N.uniforms.uStrength=a.uStrength,N.vertexShader=N.vertexShader.replace("void main() {",`

                    uniform vec2 uMouse;

                    uniform float uAspect;

                    uniform float uRadius;

                    uniform float uStrength;

                    void main() {

                    `).replace("#include <fog_vertex>",`

                    #include <fog_vertex>

                    if (uStrength > 0.0 && uRadius > 0.0 && gl_Position.w > 0.0) {

                        vec2 ndc = gl_Position.xy / gl_Position.w;

                        vec2 off = ndc - uMouse;

                        float dist = length(off * vec2(uAspect, 1.0));

                        float f = uStrength * exp(-(dist * dist) / (2.0 * uRadius * uRadius));

                        float m = length(off);

                        if (m > 1e-4) {

                            ndc += (off / m) * f;

                            gl_Position.xy = ndc * gl_Position.w;

                        }

                    }

                    `)},w);let c,u=[];const f=w=>(u.push(w),w);let h=[],d=new Float32Array(0),g=new Float32Array(0),x=null,m=[],p=0,M=null,S=new Float32Array(0),y=new Float32Array(0),b=new Float32Array(0),E=new Float32Array(0),R=new Float32Array(0),v=new Float32Array(0),A=new Float32Array(0),L=new Float32Array(0),D=new Float32Array(0),O=!1,X=[],q=null,P=[],H=!1;const U=new pe,G={strand:new zt,dot:new zt,comet:new zt};let Q={line:"",dot:"",comet:""};function ft(w){if(w.lineColor!==Q.line&&(G.strand.set(w.lineColor),Q.line=w.lineColor),w.dotColor!==Q.dot&&(G.dot.set(w.dotColor),Q.dot=w.dotColor),w.cometColor!==Q.comet){G.comet.set(w.cometColor),Q.comet=w.cometColor;for(const N of X)N.head.material.color.setRGB(G.comet.r*1.2,G.comet.g*1.2,G.comet.b*1.2)}}function ct(w,N){const B=document.createElement("canvas");B.width=B.height=w;const et=B.getContext("2d");if(et){const z=et.createRadialGradient(w/2,w/2,0,w/2,w/2,w/2);for(const[W,nt]of N)z.addColorStop(W,nt);et.fillStyle=z,et.fillRect(0,0,w,w)}const j=new $e(B);return j.needsUpdate=!0,j}function dt(){const w=e.current;for(let tt=o.children.length-1;tt>=0;tt--)o.remove(o.children[tt]);for(const tt of u)tt.dispose();u=[],c=gR(w),r.fov=Kl(w.zoom),r.updateProjectionMatrix(),ft(w);const N=Math.max(3,Math.round(w.lineCount)),B=Us-1,et=N*B*2;d=new Float32Array(et*3),g=new Float32Array(et*3),x=f(new cn),x.setAttribute("position",new nn(d,3).setUsage(ms)),x.setAttribute("color",new nn(g,3).setUsage(ms));const j=f(l(new lu({vertexColors:!0,transparent:!0,opacity:.5,blending:Hs,depthWrite:!1}))),z=new VS(x,j);z.frustumCulled=!1,o.add(z),h=[];for(let tt=0;tt<N;tt++)h.push({lane:c.lane(tt,N),speed:.95+Math.random()*.1,pulse:Math.random()*Wr,wobblePhase:Math.random()*Wr,from:0,to:1,bright:.5,offset:tt*B*2*3,pts:new Float32Array(Us*3),cols:new Float32Array(Us*3)});p=w.showDots?Math.max(0,Math.round(w.dotCount)):0,m=[];for(let tt=0;tt<p;tt++){const rt=Math.random()<.5?.2+Math.random()*.4:.05+Math.random()*.9,it=Math.floor(Math.random()*h.length);m.push({s:rt,lane:h[it].lane,strand:it,pulse:Math.random()*Wr,flickerRate:.15+Math.random()*4.5,bright:.04+Math.random()**1.5*.96})}if(y=new Float32Array(p*3),b=new Float32Array(p*3),E=new Float32Array(p*3),R=new Float32Array(p).fill(1),v=new Float32Array(p),A=new Float32Array(p),L=new Float32Array(p),D=new Float32Array(p).fill(1),S=new Float32Array(p*3),O=!1,p>0){const tt=f(new ao(1,1)),rt=f(l(new Wn({color:16777215,transparent:!0,opacity:.9,blending:Hs,depthWrite:!1})));M=new qg(tt,rt,p),M.instanceMatrix.setUsage(ms),M.instanceColor=new au(S,3),M.instanceColor.setUsage(ms),M.frustumCulled=!1,o.add(M)}else M=null;P=[];for(let tt=0;tt<Zl;tt++)P.push({active:!1,x:0,y:0,z:0,at:0,amp:1});H=!1,q=f(ct(32,[[0,"rgba(255,255,255,0.9)"],[.3,"rgba(255,120,255,0.4)"],[.7,"rgba(200,50,200,0.08)"],[1,"rgba(0,0,0,0)"]]));const W=w.showComets?Math.max(0,Math.round(w.cometCount)):0,nt=Math.max(2,Math.round(w.cometTail));X=[];for(let tt=0;tt<W;tt++){const rt=new Float32Array(nt*3),it=new Float32Array(nt*3),pt=f(new cn);pt.setAttribute("position",new nn(rt,3).setUsage(ms)),pt.setAttribute("color",new nn(it,3).setUsage(ms));const mt=f(l(new lu({vertexColors:!0,transparent:!0,opacity:.9,blending:Hs,depthWrite:!1}))),Mt=new $g(pt,mt);Mt.frustumCulled=!1;const I=f(new Hg({map:q,transparent:!0,opacity:0,blending:Hs,depthWrite:!1,color:new zt(G.comet.r*1.2,G.comet.g*1.2,G.comet.b*1.2)})),ht=new IS(I);ht.scale.set(.35,.35,1),o.add(Mt),o.add(ht);const K=h[Math.floor(Math.random()*h.length)],gt=w.cometSpeed*(.7+Math.random()*.6);X.push({bright:.7+Math.random()*.3,lane:K.lane,speed:gt,pulse:K.speed,wobblePhase:K.wobblePhase,base:gt,boost:0,boostMul:1,racing:!1,s:0,idle:0,idleFor:.4+tt/W*w.cometDelay,trail:rt,trailCol:it,geo:pt,line:Mt,head:ht})}te=0,ot()}const Lt=Xr/2/Math.tan(w0*Math.PI/180/2),Ot=new F(3.4,-.6,10).normalize(),Rt=new F(0,Xr/2,0);r.position.copy(Rt).addScaledVector(Ot,Lt),r.lookAt(Rt);let st=1;function ot(){const w=e.current,N=t.clientWidth||1,B=t.clientHeight||1;st=B,i.setSize(N,B,!1),r.aspect=N/B,r.updateProjectionMatrix(),a.uAspect.value=N/B,a.uRadius.value=Ii(w.repelRadius/(B/2),.01,3),w.running||i.render(s,r)}const lt=new ResizeObserver(ot);let xt=0;const Ct=w=>{const N=e.current,B=t.getBoundingClientRect();!B.width||!B.height||(a.uMouse.value.set((w.clientX-B.left)/B.width*2-1,-((w.clientY-B.top)/B.height*2-1)),xt=N.hoverRepel&&N.running?Ii(N.repelStrength/100,0,1)*mR:0)},Pt=()=>{xt=0};t.addEventListener("pointermove",Ct),t.addEventListener("pointerleave",Pt),t.addEventListener("pointercancel",Pt);function Jt(w,N,B,et,j){H=!0;let z=0,W=1/0;for(let nt=0;nt<Zl;nt++){if(!P[nt].active){z=nt;break}P[nt].at<W&&(W=P[nt].at,z=nt)}P[z]={active:!0,x:w,y:N,z:B,at:et,amp:j}}function Bt(w,N,B,et,j,z,W){let nt=0,tt=0,rt=0,it=!1;for(let pt=0;pt<Zl;pt++){const mt=P[pt];if(!mt.active)continue;const Mt=et-mt.at;if(Mt>fR){mt.active=!1;continue}it=!0;const I=w-mt.x,ht=N-mt.y,K=B-mt.z,gt=Math.sqrt(I*I+ht*ht+K*K);if(gt<.001||gt>W*1.5)continue;const vt=Math.abs(gt-uR*Mt);if(vt>Rp)continue;const at=Math.cos(vt/Rp*Math.PI/2),Tt=Math.exp(-Mt/hR),St=1/Math.max(gt,.3),he=wp*mt.amp*dR*at*Tt*St;nt+=I/gt*he,tt+=ht/gt*he,rt+=K/gt*he}it||(H=!1),j[z]+=nt,j[z+1]+=tt,j[z+2]+=rt}function Xt(w,N,B){O=!0;const et=y[w*3],j=y[w*3+1],z=y[w*3+2];Jt(et,j,z,N,B);const W=Ap,nt=W*W;for(let tt=0;tt<p;tt++){const rt=y[tt*3]-et,it=y[tt*3+1]-j,pt=y[tt*3+2]-z,mt=rt*rt+it*it+pt*pt;if(mt>nt||mt<1e-4)continue;const Mt=Math.sqrt(mt),I=1-Mt/W,ht=wp*B*I*I/Math.max(Mt,.1);E[tt*3]+=rt*ht,E[tt*3+1]+=it*ht,E[tt*3+2]+=pt*ht;const K=1+(cR-1)*B*I*I;K>R[tt]&&(R[tt]=K,v[tt]=0)}}function Wt(w){let N=!1;for(let B=0;B<p;B++){const et=B*3;for(let nt=0;nt<3;nt++){const tt=-50*b[et+nt]-aR*E[et+nt];E[et+nt]+=tt*w,b[et+nt]+=E[et+nt]*w}const j=b[et]**2+b[et+1]**2+b[et+2]**2,z=E[et]**2+E[et+1]**2+E[et+2]**2;j<1e-8&&z<1e-8?(b[et]=b[et+1]=b[et+2]=0,E[et]=E[et+1]=E[et+2]=0):N=!0;const W=-65*(R[B]-1)-lR*v[B];v[B]+=W*w,R[B]+=v[B]*w,Math.abs(R[B]-1)<.001&&Math.abs(v[B])<.001?(R[B]=1,v[B]=0):N=!0}N||(O=!1)}let Gt=0,te=0,ie=0,ce=0,ue=0,se=!1,ve=0,V=performance.now();function Oe(w,N,B){const et=e.current,j=ce*w.speed,z=w.bright*et.lineGlow,W=.15+z*1.5,nt=Math.min(z*.5*(.9+.1*Math.sin(N*.18+w.pulse)),.7)*Math.min(B*3,1),tt=w.from+B*(w.to-w.from),rt=.15*(w.to-w.from),{pts:it,cols:pt}=w;for(let Mt=0;Mt<Us;Mt++){const I=Mt/(Us-1),ht=w.from+I*(w.to-w.from),K=Mt*3;c.writePoint(it,K,ht,w.lane,j,$l,w.wobblePhase,N),H&&Bt(it[K],it[K+1],it[K+2],N,it,K,Ap);let gt=1;if(I<qo){const Tt=I/qo;gt=Tt*Tt}else if(I>1-qo){const Tt=(1-I)/qo;gt=Tt*Tt}let vt=1;ht>tt?vt=0:ht>tt-rt&&(vt=(tt-ht)/rt,vt*=vt);const at=gt*W*vt*nt;pt[K]=G.strand.r*at,pt[K+1]=G.strand.g*at,pt[K+2]=G.strand.b*at}let mt=w.offset;for(let Mt=0;Mt<Us-1;Mt++){const I=Mt*3,ht=(Mt+1)*3;d[mt]=it[I],d[mt+1]=it[I+1],d[mt+2]=it[I+2],g[mt]=pt[I],g[mt+1]=pt[I+1],g[mt+2]=pt[I+2],mt+=3,d[mt]=it[ht],d[mt+1]=it[ht+1],d[mt+2]=it[ht+2],g[mt]=pt[ht],g[mt+1]=pt[ht+1],g[mt+2]=pt[ht+2],mt+=3}}function jt(w,N,B,et){const j=e.current,z=w.trail.length/3;if(!w.racing){if(w.head.material.opacity=0,et<.3)return;if(w.idle+=B,w.idle>w.idleFor){w.racing=!0,w.s=j.flowDir<0?Jl:jl,w.base=j.cometSpeed*(.7+Math.random()*.6),w.speed=w.base,w.boost=0,w.boostMul=1;const rt=h[Math.floor(Math.random()*h.length)];w.lane=rt.lane,w.pulse=rt.speed,w.wobblePhase=rt.wobblePhase}return}if(w.boost>0&&(w.boost-=B,w.boost<=0?(w.boost=0,w.boostMul=1):w.boostMul=1+(Dp-1)*(w.boost/Lp),w.speed=w.base*w.boostMul),w.s+=B*w.speed*j.flowDir,j.flowDir<0?w.s<jl:w.s>Jl){w.racing=!1,w.idle=0,w.idleFor=j.cometDelay*(.6+Math.random()*.8),w.trailCol.fill(0),w.geo.attributes.color.needsUpdate=!0,w.head.material.opacity=0;return}const W=ce*w.pulse,nt=Ii((w.s-jl)/Cp,0,1)*Ii((Jl-w.s)/Cp,0,1);for(let rt=0;rt<z;rt++){const it=Ii(w.s-rt*.005*j.flowDir,.005,.995),pt=rt*3;c.writePoint(w.trail,pt,it,w.lane,W,$l,w.wobblePhase,N);const mt=(1-rt/z)**2,Mt=w.bright*j.cometGlow*mt*nt,I=et*(rt<3?1.3:1);w.trailCol[pt]=G.comet.r*Mt*I,w.trailCol[pt+1]=G.comet.g*Mt*I,w.trailCol[pt+2]=G.comet.b*Mt*I}w.head.position.set(w.trail[0],w.trail[1],w.trail[2]);const tt=w.boost>0?1+(w.boostMul-1)*.8:1;w.head.material.opacity=nt*.35*et*tt,w.head.scale.set(.35*tt,.35*tt,1),w.geo.attributes.position.needsUpdate=!0,w.geo.attributes.color.needsUpdate=!0}function C(w){const B=e.current.collideForce;if(B<=0)return;const et=Pp*Pp;for(const j of X){if(!j.racing)continue;const z=j.trail[0],W=j.trail[1],nt=j.trail[2];if(!(z===0&&W===0&&nt===0))for(let tt=0;tt<p;tt+=3){const rt=y[tt*3]-z,it=y[tt*3+1]-W,pt=y[tt*3+2]-nt;rt*rt+it*it+pt*pt<et&&A[tt]===0&&(A[tt]=.001,L[tt]=Ip*B,R[tt]=1+(Up-1)*B,Xt(tt,w,B),j.boost=Lp,j.boostMul=1+(Dp-1)*B,j.speed=j.base*j.boostMul)}}}function _(w){Gt=requestAnimationFrame(_);const N=e.current,B=Math.min((w-V)/1e3,.04);if(V=w,!N.running){se||(i.render(s,r),se=!0);return}se=!1,te===0&&(te=w),ie=(w-te)/1e3;const et=ie,j=Ql(et,Fs.strandStart,Fs.strandEnd),z=Ql(et,Fs.dotStart,Fs.dotEnd),W=Ql(et,Fs.cometStart,Fs.cometEnd);ft(N);const nt=Kl(N.zoom);r.fov!==nt&&(r.fov=nt,r.updateProjectionMatrix()),a.uRadius.value=Ii(N.repelRadius/(st/2),.01,3),ce+=B*N.flowSpeed;const tt=a.uStrength;if(tt.value+=(xt-tt.value)*Math.min(1,B*12),ue+=B,ue>=Fp&&x){ue-=Fp;for(const rt of h)Oe(rt,et,j);x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}if(O&&Wt(B),M&&p>0){const rt=N.dotSize;for(let it=0;it<p;it++){const pt=m[it],mt=h[pt.strand]??h[0],Mt=ce*mt.speed,I=it*3;if(c.writePoint(y,I,pt.s,pt.lane,Mt,$l,mt.wobblePhase,et),A[it]>0){A[it]+=B;const Tt=A[it];if(Tt<Np){const St=Tt/Np;D[it]=(1+(Up-1)*(1-St))*(1-St*St),L[it]=Ip*(1-St*St)*(1-St*St)}else D[it]=0,L[it]=0;Tt>pR&&(A[it]=0,D[it]=1,L[it]=0)}const ht=D[it],K=rt*R[it]*ht;U.makeScale(K,K,K),U.setPosition(y[I]+b[I],y[I+1]+b[I+1],y[I+2]+b[I+2]),M.setMatrixAt(it,U);const gt=1-N.dotFlicker+N.dotFlicker*(.08+.92*Math.max(0,Math.sin(et*pt.flickerRate+pt.pulse))**2.5),vt=R[it]>1.02?1+(R[it]-1)*.5:1,at=pt.bright*gt*N.dotGlow*vt*z*(1+L[it])*ht;S[I]=G.dot.r*at,S[I+1]=G.dot.g*at,S[I+2]=G.dot.b*at}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),M.material.opacity=.9*z}for(const rt of X)jt(rt,et,B,W);ve++,ve%2===0&&p>0&&C(et),i.render(s,r)}return dt(),lt.observe(t),V=performance.now(),Gt=requestAnimationFrame(_),{rebuild(){dt()},dispose(){var w;cancelAnimationFrame(Gt),lt.disconnect(),t.removeEventListener("pointermove",Ct),t.removeEventListener("pointerleave",Pt),t.removeEventListener("pointercancel",Pt);for(const N of u)N.dispose();i.dispose(),(w=i.forceContextLoss)==null||w.call(i)}}}function _R(n){const{background:t=Ve.background,topRadius:e=Ve.topRadius,waistRadius:i=Ve.waistRadius,waistPosition:s=Ve.waistPosition,bottomRadius:r=Ve.bottomRadius,twist:o=Ve.twist,zoom:a=Ve.zoom,speed:l=Ve.speed,direction:c=Ve.direction,lineOptions:u=Ve.lineOptions,dots:f=Ve.dots,dotOptions:h=Ve.dotOptions,comets:d=Ve.comets,cometOptions:g=Ve.cometOptions,repel:x=Ve.repel,repelOptions:m=Ve.repelOptions,style:p}=n,M=ut.useRef(null),S=ut.useRef(null),b=!eR(),E={...Ve.lineOptions,...u},R={...Ve.dotOptions,...h},v={...Ve.cometOptions,...g},A={...Ve.repelOptions,...m},L={floorRadius:r/ql,waistRadius:i/ql,crownRadius:e/ql,waistAt:1-s/100,twist:o,zoom:a,flowDir:c==="left"?-1:1,flowSpeed:l/100*(c==="left"?-1:1),lineCount:E.count,lineColor:E.color,lineGlow:E.glow/10*nR,showDots:f,dotCount:R.count,dotSize:R.size/oR,dotColor:R.color,dotGlow:R.glow/10*iR,dotFlicker:R.flicker/10,showComets:d,cometCount:v.count,cometSpeed:v.speed/10*sR,cometColor:v.color,cometGlow:v.glow/10*rR,cometTail:v.tail,cometDelay:v.delay,collideForce:v.collide/10,hoverRepel:x,repelRadius:A.radius,repelStrength:A.strength,running:b},D=JSON.stringify([L.floorRadius,L.waistRadius,L.crownRadius,L.waistAt,L.twist,L.lineCount,L.showDots,L.dotCount,L.showComets,L.cometCount,L.cometTail]),O=ut.useRef(L);O.current=L;const X=ut.useRef(null);ut.useEffect(()=>{const P=S.current,H=M.current;if(!(!P||!H)){try{X.current=vR(P,H,O)}catch(U){console.warn("[Vortex] init failed:",U);return}return()=>{var U;(U=X.current)==null||U.dispose(),X.current=null}}},[]);const q=ut.useRef(!1);return ut.useEffect(()=>{var P;if(!q.current){q.current=!0;return}(P=X.current)==null||P.rebuild()},[D]),J.jsx("div",{ref:M,style:{...p,position:"relative",width:"100%",height:"100%",background:t,overflow:"hidden"},children:J.jsx("canvas",{ref:S,style:{display:"block",width:"100%",height:"100%"}})})}const R0=n=>n.toLocaleString("en-US"),Op='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';function xR(){const[n,t]=ut.useState(null),[e,i]=ut.useState("0");return ut.useEffect(()=>{let s=!0;const r=()=>fetch("/api/stats").then(a=>a.ok?a.json():null).then(a=>{a&&s&&t(a)}).catch(()=>{});fetch("/api/live").then(a=>a.ok?a.json():null).then(a=>{a&&s&&i(a.n)}).catch(()=>{}),r();const o=setInterval(r,3e4);return()=>{s=!1,clearInterval(o)}},[]),{stats:n,live:e}}function yR({to:n,dec:t=0,suffix:e=""}){const[i,s]=ut.useState(0),r=Bp.useRef(null);ut.useEffect(()=>{const a=r.current;if(!a||n==null)return;if(matchMedia("(prefers-reduced-motion: reduce)").matches){s(n);return}const l=new IntersectionObserver(c=>{if(!c[0].isIntersecting)return;l.disconnect();const u=performance.now(),f=900;(function h(d){const g=Math.min(1,(d-u)/f);s(n*(1-Math.pow(1-g,3))),g<1&&requestAnimationFrame(h)})(u)},{threshold:.3});return l.observe(a),()=>l.disconnect()},[n]);const o=t?i.toFixed(t):R0(Math.round(i));return J.jsxs("span",{ref:r,children:[o,e]})}function Yo({label:n,value:t,dec:e=0,suffix:i=""}){return J.jsxs("div",{className:"stat",children:[J.jsx("span",{className:"sl",children:n}),J.jsx("span",{className:"sv",children:J.jsx(yR,{to:t,dec:e,suffix:i})})]})}const MR=[{h:"Cookieless by design",p:"Visitor identity is a daily-rotating hash of IP and user agent, kept entirely server-side. No cookies, no consent banners, no fingerprinting.",mono:"identity = hash(ip + ua + salt) / rotates daily"},{h:"353 B snippet",p:"One line of JavaScript loaded from your own domain. It never touches a third-party server, ever.",mono:"one line of JS / gzipped / server-relative"},{h:"One process",p:"Express, geoip-lite and SQLite in a single Node server. Nothing to orchestrate, no queue, no warehouse.",mono:"node server.js / SQLite on disk"},{h:"Realtime",p:"The live counter and the daily chart update on every request. No batch jobs, no polling, no stale numbers.",mono:"current visitors / updates per request"}],SR=[{n:"1",h:"Add the snippet",p:"Paste one script tag into any page. It beacons back to wherever it was loaded from."},{n:"2",h:"Visit your site",p:"Each request is counted as a real visit. No JavaScript is needed on the visitor side."},{n:"3",h:"Watch it live",p:"The dashboard updates with current visitors, sources, pages and devices."}];function ER(){const{stats:n,live:t}=xR(),[e,i]=ut.useState(null);ut.useEffect(()=>{let r=!0;return fetch("/api/countries").then(o=>o.ok?o.json():null).then(o=>{o&&r&&i(o.filter(a=>a.lat!=null))}).catch(()=>{}),()=>{r=!1}},[]);const s=(e||[]).map(r=>({lat:r.lat,lng:r.lng}));return J.jsxs("div",{className:"page",children:[J.jsx("nav",{children:J.jsxs("div",{className:"nav-inner",children:[J.jsxs("a",{className:"brand",href:"/",children:[J.jsx("i",{}),"peek"]}),J.jsxs("div",{className:"nav-links",children:[J.jsxs("span",{className:"chip",title:"Visitors on the dashboard right now",children:[J.jsx("i",{}),J.jsx("b",{children:t})," live"]}),J.jsx("a",{href:"https://github.com/trippusultan/peek",children:"GitHub"}),J.jsx("a",{href:"/dashboard",children:"Dashboard"})]})]})}),J.jsxs("header",{className:"hero",children:[J.jsx("div",{className:"hero-vortex","aria-hidden":"true",children:J.jsx(_R,{background:"#0a0a0a",topRadius:360,waistRadius:50,waistPosition:50,bottomRadius:1150,twist:3,zoom:70,speed:9,direction:"right",lineOptions:{count:220,color:"#ffffff",glow:8},dots:!0,dotOptions:{count:7e3,size:16,color:"#f5f5f5",glow:8,flicker:8},comets:!0,cometOptions:{count:8,speed:5,color:"#f5f5f5",glow:4,tail:14,delay:8},repel:!0,repelOptions:{radius:160,strength:.35},style:{width:"100%",height:"100%"}})}),J.jsxs("div",{className:"hero-inner",children:[J.jsx("p",{className:"eyebrow",children:J.jsx(DM,{text:"COOKIELESS WEB ANALYTICS",brightColor:"#f5f5f5",dimColor:"rgba(245,245,245,0.28)",maskSize:120})}),J.jsx(_M,{tag:"h1",text:"Website analytics without the cookies.",color:"#f5f5f5",font:{fontFamily:Op,fontWeight:800,fontSize:"clamp(40px, 5vw, 64px)",lineHeight:"1.04em",letterSpacing:"-0.045em",textAlign:"left"},stagger:.02,startRotateY:-90,startOpacity:0,perspective:1400}),J.jsx("p",{className:"sub",children:"One process, one snippet, zero tracking scripts. Real visitors, private by default."}),J.jsxs("div",{className:"hero-ctas",children:[J.jsx(MM,{label:"View dashboard",link:"/dashboard",fill:"#f5f5f5",textColor:"#0a0a0a",sweepColor:"#e8e8e8",sweepTextColor:"#0a0a0a",paddingX:26,paddingY:14,radius:8,border:!1,font:{fontFamily:Op,fontWeight:650,fontSize:15,lineHeight:"1em",letterSpacing:"-0.01em",textAlign:"left"}}),J.jsx("a",{className:"btn btn-ghost",href:"https://github.com/trippusultan/peek",children:"GitHub"})]})]}),J.jsxs("div",{className:"hero-spec","aria-label":"peek in numbers",children:[J.jsxs("div",{className:"srow",children:[J.jsx("span",{children:"Process"}),J.jsx("b",{children:"1"})]}),J.jsxs("div",{className:"srow",children:[J.jsx("span",{children:"Snippet"}),J.jsx("b",{children:"353 B"})]}),J.jsxs("div",{className:"srow",children:[J.jsx("span",{children:"Dashboard TTFB"}),J.jsx("b",{children:"12 ms"})]}),J.jsxs("div",{className:"srow",children:[J.jsx("span",{children:"Cookies"}),J.jsx("b",{children:"0"})]}),J.jsxs("div",{className:"srow",children:[J.jsx("span",{children:"External requests"}),J.jsx("b",{children:"0"})]})]})]}),J.jsx("section",{className:"marquee","aria-hidden":"true",children:J.jsx(SM,{text:"COOKIELESS WEB ANALYTICS",separator:"  /  ",textColor:"rgba(245,245,245,0.14)",speed:1.1,reversed:!1,waveFrequency:.02,waveHeight:9,width:"100%",height:84,className:"mq"})}),J.jsxs("section",{className:"product container",children:[J.jsx(AM,{color:"#3a3a3a",glowColor:"rgba(245,245,245,0.55)",glowIntensity:3,chaos:2.5,thickness:1.5,speed:.8,borderRadius:18,children:J.jsxs("div",{className:"browser",children:[J.jsxs("div",{className:"b-bar",children:[J.jsx("span",{className:"b-dot"}),J.jsx("span",{className:"b-dot"}),J.jsx("span",{className:"b-dot"}),J.jsx("span",{className:"b-url",children:"peek-a6sg.onrender.com/dashboard"})]}),J.jsx("img",{src:"/peek-dashboard.png",alt:"The peek dashboard: visitor trend chart, four KPI cards and a traffic table",width:"1440",height:"900",fetchpriority:"high"})]})}),J.jsx("p",{className:"pcap",children:"The live dashboard. Same screen behind the auth gate."})]}),J.jsx("section",{className:"stats",children:J.jsxs("div",{className:"stats-inner",children:[J.jsx(Yo,{label:"Current visitors",value:n?n.live:0}),J.jsx(Yo,{label:"Pageviews (7d)",value:n?n.pv:0}),J.jsx(Yo,{label:"Visitors (7d)",value:n?n.uv:0}),J.jsx(Yo,{label:"Bounce rate (7d)",value:n?n.bounce:0,dec:1,suffix:"%"})]})}),J.jsxs("section",{className:"features container",children:[J.jsx("h2",{children:"Built to ask for nothing."}),J.jsx("div",{className:"fgrid",children:MR.map((r,o)=>J.jsxs("div",{className:"fcell",children:[J.jsx(RM,{title:r.h,textColor:"#f5f5f5",hoverColor:"#f5f5f5",fontSize:19,fontWeight:700,duration:.3}),J.jsx("p",{children:r.p}),J.jsx("div",{className:"mono",children:r.mono})]},r.h))})]}),J.jsxs("section",{className:"how container",children:[J.jsx("h2",{children:"Live in three steps."}),J.jsx("div",{className:"steps",children:SR.map(r=>J.jsxs("div",{className:"step",children:[J.jsx("span",{className:"n",children:r.n}),J.jsxs("div",{children:[J.jsx("h3",{children:r.h}),J.jsx("p",{children:r.p}),r.n==="1"&&J.jsx("pre",{className:"code",children:J.jsx("code",{children:'<script defer data-site="your-site-name" src="https://YOUR-RENDER-URL/s.js"><\/script>'})})]})]},r.n))})]}),J.jsxs("section",{className:"globe-section container",children:[J.jsx("h2",{children:"Traffic around the world."}),J.jsxs("div",{className:"globe-wrap",children:[J.jsx("div",{className:"globe","aria-label":"3D globe with markers at the countries your visitors came from",children:J.jsx(tR,{speed:1.6,dots:{color:"#3a3a3a",size:5,density:7,allDots:!1},fill:"dots",fillColor:"#f5f5f5",oceanColor:"#0a0a0a",outlineColor:"#2a2a2a",showOutline:!0,graticuleColor:"#2e2e2e",showGrid:!0,markerConfig:{markers:s,color:"#f5f5f5",size:34},initialLatitude:20,initialLongitude:-10,stopOnHover:!0})}),J.jsxs("div",{className:"country-list",children:[(e||[]).slice(0,8).map((r,o)=>J.jsxs("div",{className:"crow",children:[J.jsx("span",{className:"cn",children:String(o+1).padStart(2,"0")}),J.jsx("span",{className:"nm2",children:r.name}),J.jsx("span",{className:"cv",children:R0(r.pv)})]},r.code)),(!e||e.length===0)&&J.jsx("p",{className:"empty",children:"No traffic yet. Visit the landing page to light up your first marker."})]})]})]}),J.jsx("section",{className:"white",children:J.jsxs("div",{className:"w-inner",children:[J.jsx("h2",{children:"Your data stays yours."}),J.jsx("p",{className:"w-statement",children:"No account, no cloud, no cookies, no third-party scripts. Every record lives in a SQLite file on your own server."}),J.jsx("div",{className:"w-cta",children:J.jsx(PM,{text:"View dashboard",link:"/dashboard",textColor:"#f5f5f5",shineColor:"#0a0a0a",speed:1.8,style:{background:"#0a0a0a",padding:"14px 30px",borderRadius:8,fontSize:16,fontWeight:650}})}),J.jsx("figure",{className:"w-phone",children:J.jsx("img",{src:"/peek-mobile.png",alt:"The peek dashboard on a phone",width:"390",height:"844",loading:"lazy"})})]})}),J.jsx("footer",{children:J.jsxs("div",{className:"foot",children:[J.jsx("span",{children:"peek - privacy-first analytics"}),J.jsxs("span",{children:["built by ",J.jsx("a",{href:"https://github.com/trippusultan",children:"trippusultan"})]})]})})]})}C0(document.getElementById("root")).render(J.jsx(Bp.StrictMode,{children:J.jsx(ER,{})}));
