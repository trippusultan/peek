import{r as ae,j as x,R as em,c as O0}from"./client-DPVzX2tD.js";function B0(n){n={...k0,...n};const{text:e,speed:t,reversed:i,textFont:s,textColor:r,waveFrequency:a,waveHeight:o,separator:l,gap:c,className:u,width:f,height:h,style:d}=n,g=(J,V)=>{if(typeof J=="number")return isFinite(J)?J:V;if(typeof J=="string"){const W=parseFloat(J);return isFinite(W)?W:V}return V},y=g(s==null?void 0:s.fontSize,17),m=g(s==null?void 0:s.letterSpacing,0),p=`${y}px`,S=`${m}px`,M=(s==null?void 0:s.fontFamily)||'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',w=s==null?void 0:s.fontWeight,b=s==null?void 0:s.fontStyle,P=ae.useRef(null),v=ae.useRef(null),A=ae.useRef(null),L=ae.useRef(null),D=!1,[k,$]=ae.useState({w:800,h:200});ae.useLayoutEffect(()=>{const J=P.current;if(!J)return;const V=(Q,ie)=>{const ne=Math.round(Q),fe=Math.round(ie);ne<=0||fe<=0||$(pe=>Math.abs(pe.w-ne)<=1&&Math.abs(pe.h-fe)<=1?pe:{w:ne,h:fe})},W=J.getBoundingClientRect();if(V(W.width,W.height),typeof ResizeObserver>"u")return;const te=new ResizeObserver(Q=>{for(const ie of Q)V(ie.contentRect.width,ie.contentRect.height)});return te.observe(J),()=>te.disconnect()},[]);const N=`tp-${ae.useId().replace(/[:]/g,"")}-path`,H=k.w>0?k.w:800,z=k.h>0?k.h:200,[j,re]=ae.useState(0),de=e&&e.length>0?e:" ",ue=" ".repeat(Math.max(0,Math.min(20,Math.round(c??0)))),me=de+ue+(l??"")+ue,Ie=Math.max(1,me.length*y*.6),We=j>0?j:Ie,Ne=z/2,le=Math.max(0,Math.min(o/2,z/2-y))*(4/3),he=Math.max(1,Math.round(a*2)),Ee=H/he,Re=Math.max(100,H*.3),Pe=Math.ceil(Re/Ee),Je=Math.ceil(Re/Ee),Oe=he+Pe+Je,je=-Pe*Ee,He=Pe%2===0?-1:1;let Ve=`M ${je},${Ne}`;for(let J=0;J<Oe;J++){const V=je+J*Ee,W=je+(J+1)*Ee,te=Ne+(J%2===0?He*le:-He*le);Ve+=` C ${V+Ee/3},${te} ${W-Ee/3},${te} ${W},${Ne}`}const et=Ve,[it,ct]=ae.useState(0);ae.useLayoutEffect(()=>{const J=v.current;if(!J)return;let V=0;try{V=J.getTotalLength()}catch{V=0}!isFinite(V)||V<=0||ct(W=>W===V?W:V)},[et,H,z]),ae.useLayoutEffect(()=>{const J=A.current,V=L.current;if(!J||!V)return;let W=0,te=0;try{W=J.getComputedTextLength(),te=V.getComputedTextLength()}catch{W=0,te=0}const Q=(te-W)/2;!isFinite(Q)||Q<=0||re(ie=>ie===Q?ie:Q)},[me,p,S,M,w,b]);const ut=2*Math.hypot(Ee/2,le)*1.15,st=Oe*Math.max(Ee,ut),xt=Math.max(it,st),B=Math.min(256,Math.max(2,Math.ceil(xt/We)+3)),Ft=me.repeat(B),Ze=ae.useRef(0),C=ae.useRef(null),_=ae.useRef(0),R=ae.useRef(!1),U=ae.useRef(0),O=ae.useRef(null);_.current=Math.max(0,t??0)*5,R.current=i,U.current=j>0?j:0,ae.useLayoutEffect(()=>{const J=O.current;if(!J)return;C.current=null;let V=0;const W=te=>{C.current==null&&(C.current=te);const Q=Math.min((te-C.current)/1e3,1/30);C.current=te;const ie=U.current,ne=_.current;if(ie>0&&ne>0){const fe=R.current?1:-1;let pe=Ze.current+fe*ne*Q;pe-=Math.floor(pe/ie)*ie,Ze.current=pe,J.setAttribute("startOffset",`${pe}px`)}V=requestAnimationFrame(W)};return V=requestAnimationFrame(W),()=>cancelAnimationFrame(V)},[D]);const ee=(J,V)=>J==null?V:typeof J=="number"?`${J}px`:J;return x.jsx("div",{ref:P,className:u,style:{position:"relative",width:ee(f,"100%"),height:ee(h,"100%"),overflow:"hidden",...d},children:x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${H} ${z}`,width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet",style:{display:"block",width:"100%",height:"100%"},children:[x.jsx("defs",{children:x.jsx("path",{ref:v,id:N,d:et,fill:"none"})}),x.jsx("text",{ref:A,x:0,y:-9999,style:{fontSize:p,letterSpacing:S,fontFamily:M,fontWeight:w,fontStyle:b,visibility:"hidden",pointerEvents:"none"},children:me.repeat(2)}),x.jsx("text",{ref:L,x:0,y:-9999,style:{fontSize:p,letterSpacing:S,fontFamily:M,fontWeight:w,fontStyle:b,visibility:"hidden",pointerEvents:"none"},children:me.repeat(4)}),x.jsx("text",{fill:r,style:{fontSize:p,letterSpacing:S,fontFamily:M,fontWeight:w,fontStyle:b},children:x.jsx("textPath",{ref:O,href:`#${N}`,xlinkHref:`#${N}`,children:Ft})})]})})}const k0={text:"TEXT PATH",separator:"   •   ",gap:0,textFont:{fontSize:17,variant:"Regular",letterSpacing:0,lineHeight:1.2},textColor:"#FFFFFF",speed:30,reversed:!0,waveFrequency:3,waveHeight:100,className:"",width:800,height:200};function ua(n){return Math.sin(n*12.9898)*43758.5453%1}function z0(n,e){const t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,a=ua(t+i*57),o=ua(t+1+i*57),l=ua(t+(i+1)*57),c=ua(t+1+(i+1)*57),u=s*s*(3-2*s),f=r*r*(3-2*r);return a*(1-u)*(1-f)+o*u*(1-f)+l*(1-u)*f+c*u*f}function Uh(n,e,t,i,s,r,a,o,l){let c=0,u=s,f=r;for(let h=0;h<e;h++){let d=u;h===0&&(d*=l),c+=d*z0(f*n+o*100,a*f*.3),f*=t,u*=i}return c}function ha(n,e,t,i,s,r){const a=i+r*s;return{x:n+t*Math.cos(a),y:e+t*Math.sin(a)}}function V0(n,e,t,i,s,r){const a=i-2*r,o=s-2*r,l=Math.PI*r/2,c=2*a+2*o+4*l,u=n*c;let f=0;if(u<=f+a){const d=(u-f)/a;return{x:e+r+d*a,y:t}}if(f+=a,u<=f+l){const d=(u-f)/l;return ha(e+i-r,t+r,r,-Math.PI/2,Math.PI/2,d)}if(f+=l,u<=f+o){const d=(u-f)/o;return{x:e+i,y:t+r+d*o}}if(f+=o,u<=f+l){const d=(u-f)/l;return ha(e+i-r,t+s-r,r,0,Math.PI/2,d)}if(f+=l,u<=f+a){const d=(u-f)/a;return{x:e+i-r-d*a,y:t+s}}if(f+=a,u<=f+l){const d=(u-f)/l;return ha(e+r,t+s-r,r,Math.PI/2,Math.PI/2,d)}if(f+=l,u<=f+o){const d=(u-f)/o;return{x:e,y:t+s-r-d*o}}f+=o;const h=(u-f)/l;return ha(e+r,t+r,r,Math.PI,Math.PI/2,h)}function G0({color:n="#C2613F",bgColor:e="transparent",speed:t=1,chaos:i=4,thickness:s=2,borderRadius:r=14,glow:a=!0,glowColor:o="#C2613F",glowIntensity:l=8,className:c,style:u,children:f}){const h=ae.useRef(null),d=ae.useRef(null),g=ae.useRef(null),y=ae.useRef(0),m=ae.useRef(0);return ae.useEffect(()=>{if(typeof window>"u")return;const p=h.current,S=d.current;if(!p||!S)return;const E=p.getContext("2d");if(!E)return;const M=10,w=1.6,b=.7,P=i/20,v=10,A=0,L=40,D=Math.max(1,Math.min(10,l)),k=a?6+D*2:0,$=a?D:0,X=120;let N=0,H=0,z=Math.min(window.devicePixelRatio||1,2);function j(ue,me){const Ie=S.getBoundingClientRect(),We=Math.max(1,ue??Ie.width),Ne=Math.max(1,me??Ie.height),se=We+X*2,le=Ne+X*2,he=Math.min(window.devicePixelRatio||1,2);p.width=Math.max(1,Math.floor(se*he)),p.height=Math.max(1,Math.floor(le*he)),p.style.width=`${se}px`,p.style.height=`${le}px`,p.style.left=`${-X}px`,p.style.top=`${-X}px`,N=We,H=Ne}j();function re(ue){const me=Math.min(window.devicePixelRatio||1,2);me!==z&&(z=me,j()),m.current||(m.current=ue);const Ie=(ue-m.current)/1e3;y.current+=Ie*t,m.current=ue,E.setTransform(1,0,0,1,0,0),E.clearRect(0,0,p.width,p.height),E.scale(me,me),E.lineCap="round",E.lineJoin="round";const We=X,Ne=X,se=N,le=H,he=Math.min(se,le)/2,Ee=Math.min(r,Math.max(0,he)),Re=2*(se+le)+2*Math.PI*Ee,Pe=Math.max(16,Math.floor(Re/2));E.beginPath();for(let Je=0;Je<=Pe;Je++){const Oe=Je/Pe,je=V0(Oe,We,Ne,se,le,Ee),He=Uh(Oe*8,M,w,b,P,v,y.current,0,A),Ve=Uh(Oe*8,M,w,b,P,v,y.current,1,A),et=je.x+He*L,it=je.y+Ve*L;Je===0?E.moveTo(et,it):E.lineTo(et,it)}if(E.closePath(),k>0){E.lineWidth=1,E.strokeStyle=o,E.shadowColor=o,E.shadowBlur=k;for(let Je=0;Je<$;Je++)E.stroke();E.shadowBlur=0}E.lineWidth=s,E.strokeStyle=n,E.stroke(),g.current=requestAnimationFrame(re)}g.current=requestAnimationFrame(re);const de=typeof ResizeObserver<"u"?new ResizeObserver(ue=>{var Ie;const me=(Ie=ue[0])==null?void 0:Ie.contentRect;j(me==null?void 0:me.width,me==null?void 0:me.height)}):null;return de==null||de.observe(S),()=>{g.current&&cancelAnimationFrame(g.current),de==null||de.disconnect()}},[n,t,i,s,r,a,o,l]),x.jsxs("div",{ref:d,className:c,style:{position:"relative",overflow:"visible",isolation:"isolate",width:"100%",borderRadius:r,background:e,...u},children:[x.jsx("canvas",{ref:h,style:{position:"absolute",display:"block",pointerEvents:"none",zIndex:2}}),x.jsx("div",{style:{position:"relative",zIndex:1},children:f})]})}const H0="cubic-bezier(0.22, 1, 0.36, 1)";function W0({title:n,href:e,fontSize:t=24,fontWeight:i=700,letterSpacing:s="0em",gap:r=6,textColor:a="#EDE6DD",hoverColor:o="#C2613F",duration:l=.32,className:c,style:u,onClick:f}){const h=ae.useRef(null),[d,g]=ae.useState("none"),y=P=>{const v=h.current;if(!v)return;const A=v.getBoundingClientRect(),L=P.clientY-A.top;g(L<A.height/2?"top":"bottom")},m=()=>g("none"),p=t*.72,S=(r||0)*3,E=p+S,M={none:-E,top:0,bottom:-2*E},w={margin:0,whiteSpace:"pre",lineHeight:1,height:p,display:"flex",alignItems:"center",overflow:"hidden",fontFamily:"Inter, system-ui, sans-serif",fontSize:t,fontWeight:i,letterSpacing:s},b=x.jsx("span",{ref:h,onMouseEnter:y,onMouseLeave:m,onClick:f,className:c,style:{...u,position:"relative",display:"inline-block",overflow:"hidden",height:p,cursor:"pointer",userSelect:"none"},children:x.jsxs("span",{style:{display:"flex",flexDirection:"column",gap:S,transform:`translateY(${M[d]}px)`,transition:`transform ${l}s ${H0}`},children:[x.jsx("span",{style:{...w,color:o},children:n}),x.jsx("span",{style:{...w,color:a},children:n}),x.jsx("span",{style:{...w,color:o},children:n})]})});return e?x.jsx("a",{href:e,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:b}):b}const j0="storyforge-shiny-pill-keyframes";function X0({text:n,link:e,textColor:t="#EDE6DD",shineColor:i="#C2613F",speed:s=2,className:r,style:a}){const o=(a==null?void 0:a.width)==="100%",l={...a,position:"relative",display:"inline-flex",alignItems:"center",boxSizing:"border-box",...o?{}:{minWidth:"max-content",width:"auto"},whiteSpace:"nowrap"},c={position:"absolute",inset:0,display:"flex",alignItems:"center",whiteSpace:"nowrap",color:i,pointerEvents:"none",WebkitMaskImage:"linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",maskImage:"linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",WebkitMaskSize:"150% auto",maskSize:"150% auto",animation:`storyforgeShinySweep ${s}s ease-in-out infinite`},u=x.jsxs("span",{style:l,className:r,children:[x.jsx("style",{id:j0,dangerouslySetInnerHTML:{__html:`@keyframes storyforgeShinySweep {
            0% { -webkit-mask-position: 200%; mask-position: 200%; }
            100% { -webkit-mask-position: -100%; mask-position: -100%; }
          }`}}),x.jsx("span",{style:{color:t},children:n}),x.jsx("span",{style:c,"aria-hidden":"true",children:n})]});return e?x.jsx("a",{href:e,style:{textDecoration:"none",display:"inline-flex"},children:u}):u}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Du="185",q0=0,Fh=1,$0=2,eo=1,Y0=2,Rr=3,Gi=0,hn=1,di=2,gi=0,Ks=1,Vs=2,Oh=3,Bh=4,K0=5,es=100,Z0=101,J0=102,Q0=103,ex=104,tx=200,nx=201,ix=202,sx=203,ac=204,oc=205,rx=206,ax=207,ox=208,lx=209,cx=210,ux=211,hx=212,fx=213,dx=214,lc=0,cc=1,uc=2,Qs=3,hc=4,fc=5,dc=6,pc=7,tm=0,px=1,mx=2,Qn=0,nm=1,Lu=2,im=3,sm=4,rm=5,am=6,om=7,lm=300,as=301,er=302,Xo=303,qo=304,Oo=306,mc=1e3,mi=1001,gc=1002,Xt=1003,gx=1004,fa=1005,en=1006,$o=1007,ns=1008,Rn=1009,cm=1010,um=1011,qr=1012,Iu=1013,ii=1014,zn=1015,yi=1016,Uu=1017,Fu=1018,$r=1020,hm=35902,fm=35899,dm=1021,pm=1022,Vn=1023,Mi=1026,is=1027,Ou=1028,Bu=1029,os=1030,ku=1031,zu=1033,to=33776,no=33777,io=33778,so=33779,xc=35840,vc=35841,_c=35842,yc=35843,Mc=36196,Sc=37492,bc=37496,Ec=37488,Tc=37489,uo=37490,wc=37491,Ac=37808,Rc=37809,Cc=37810,Pc=37811,Nc=37812,Dc=37813,Lc=37814,Ic=37815,Uc=37816,Fc=37817,Oc=37818,Bc=37819,kc=37820,zc=37821,Vc=36492,Gc=36494,Hc=36495,Wc=36283,jc=36284,ho=36285,Xc=36286,xx=3200,kh=0,vx=1,Bi="",An="srgb",fo="srgb-linear",po="linear",dt="srgb",xs=7680,zh=519,_x=512,yx=513,Mx=514,Vu=515,Sx=516,bx=517,Gu=518,Ex=519,qc=35044,vs=35048,Vh="300 es",Jn=2e3,mo=2001;function Tx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function go(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wx(){const n=go("canvas");return n.style.display="block",n}const Gh={};function xo(...n){const e="THREE."+n.shift();console.log(e,...n)}function mm(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Fe(...n){n=mm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=mm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zs(...n){const e=n.join(" ");e in Gh||(Gh[e]=!0,Fe(...n))}function Ax(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Rx={[lc]:cc,[uc]:dc,[hc]:pc,[Qs]:fc,[cc]:lc,[dc]:uc,[pc]:hc,[fc]:Qs};class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yo=Math.PI/180,$c=180/Math.PI;function Vi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Cx(n,e){return(n%e+e)%e}function Ko(n,e,t){return(1-t)*n+t*e}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ch=class Ch{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ch.prototype.isVector2=!0;let Le=Ch;class lr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*y;m<0&&(h=-h,d=-d,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),E=Math.sin(S);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+y*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+y*o;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ph=class Ph{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ph.prototype.isVector3=!0;let F=Ph;const Zo=new F,Hh=new lr,Nh=class Nh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],y=s[0],m=s[3],p=s[6],S=s[1],E=s[4],M=s[7],w=s[2],b=s[5],P=s[8];return r[0]=a*y+o*S+l*w,r[3]=a*m+o*E+l*b,r[6]=a*p+o*M+l*P,r[1]=c*y+u*S+f*w,r[4]=c*m+u*E+f*b,r[7]=c*p+u*M+f*P,r[2]=h*y+d*S+g*w,r[5]=h*m+d*E+g*b,r[8]=h*p+d*M+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(s*c-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=d*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nh.prototype.isMatrix3=!0;let Ge=Nh;const Jo=new Ge,Wh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Px(){const n={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fo]:{primaries:e,whitePoint:i,transfer:po,toXYZ:Wh,fromXYZ:jh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Wh,fromXYZ:jh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}const nt=Px();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _s;class Nx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=go("canvas")),_s.width=e.width,_s.height=e.height;const s=_s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=go("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dx=0;class Hu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qo(s[a].image)):r.push(Qo(s[a]))}else r=Qo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let Lx=0;const el=new F;class qt extends hs{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=mi,s=mi,r=en,a=ns,o=Vn,l=Rn,c=qt.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Vi(),this.name="",this.source=new Hu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(el).x}get height(){return this.source.getSize(el).y}get depth(){return this.source.getSize(el).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=lm;qt.DEFAULT_ANISOTROPY=1;const Dh=class Dh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(d+1)/2,w=(p+1)/2,b=(u+h)/4,P=(f+y)/4,v=(g+m)/4;return E>M&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=P/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=b/s,r=v/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=P/r,s=v/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-y)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dh.prototype.isVector4=!0;let Ct=Dh;class Ix extends hs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new qt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Ix{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gm extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ux extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fo=class Fo{constructor(e,t,i,s,r,a,o,l,c,u,f,h,d,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,y,m)}set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,y=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,y=c*f;t[0]=h+y*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,y=c*f;t[0]=h-y*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,y=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+y,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fx,e,Ox)}lookAt(e,t,i){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ci.crossVectors(i,mn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ci.crossVectors(i,mn)),Ci.normalize(),da.crossVectors(mn,Ci),s[0]=Ci.x,s[4]=da.x,s[8]=mn.x,s[1]=Ci.y,s[5]=da.y,s[9]=mn.y,s[2]=Ci.z,s[6]=da.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],y=i[6],m=i[10],p=i[14],S=i[3],E=i[7],M=i[11],w=i[15],b=s[0],P=s[4],v=s[8],A=s[12],L=s[1],D=s[5],k=s[9],$=s[13],X=s[2],N=s[6],H=s[10],z=s[14],j=s[3],re=s[7],de=s[11],ue=s[15];return r[0]=a*b+o*L+l*X+c*j,r[4]=a*P+o*D+l*N+c*re,r[8]=a*v+o*k+l*H+c*de,r[12]=a*A+o*$+l*z+c*ue,r[1]=u*b+f*L+h*X+d*j,r[5]=u*P+f*D+h*N+d*re,r[9]=u*v+f*k+h*H+d*de,r[13]=u*A+f*$+h*z+d*ue,r[2]=g*b+y*L+m*X+p*j,r[6]=g*P+y*D+m*N+p*re,r[10]=g*v+y*k+m*H+p*de,r[14]=g*A+y*$+m*z+p*ue,r[3]=S*b+E*L+M*X+w*j,r[7]=S*P+E*D+M*N+w*re,r[11]=S*v+E*k+M*H+w*de,r[15]=S*A+E*$+M*z+w*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=l*d-c*h,E=o*d-c*f,M=o*h-l*f,w=a*d-c*u,b=a*h-l*u,P=a*f-o*u;return t*(y*S-m*E+p*M)-i*(g*S-m*w+p*b)+s*(g*E-y*w+p*P)-r*(g*M-y*b+m*P)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=t*o-i*a,E=t*l-s*a,M=t*c-r*a,w=i*l-s*o,b=i*c-r*o,P=s*c-r*l,v=u*y-f*g,A=u*m-h*g,L=u*p-d*g,D=f*m-h*y,k=f*p-d*y,$=h*p-d*m,X=S*$-E*k+M*D+w*L-b*A+P*v;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/X;return e[0]=(o*$-l*k+c*D)*N,e[1]=(s*k-i*$-r*D)*N,e[2]=(y*P-m*b+p*w)*N,e[3]=(h*b-f*P-d*w)*N,e[4]=(l*L-a*$-c*A)*N,e[5]=(t*$-s*L+r*A)*N,e[6]=(m*M-g*P-p*E)*N,e[7]=(u*P-h*M+d*E)*N,e[8]=(a*k-o*L+c*v)*N,e[9]=(i*L-t*k-r*v)*N,e[10]=(g*b-y*M+p*S)*N,e[11]=(f*M-u*b-d*S)*N,e[12]=(o*A-a*D-l*v)*N,e[13]=(t*D-i*A+s*v)*N,e[14]=(y*E-g*w-m*S)*N,e[15]=(u*w-f*E+h*S)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,y=a*u,m=a*f,p=o*f,S=l*c,E=l*u,M=l*f,w=i.x,b=i.y,P=i.z;return s[0]=(1-(y+p))*w,s[1]=(d+M)*w,s[2]=(g-E)*w,s[3]=0,s[4]=(d-M)*b,s[5]=(1-(h+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+E)*P,s[9]=(m-S)*P,s[10]=(1-(h+y))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ys.set(s[0],s[1],s[2]).length();const o=ys.set(s[4],s[5],s[6]).length(),l=ys.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fn.copy(this);const c=1/a,u=1/o,f=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,t.setFromRotationMatrix(Fn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Jn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Jn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===mo)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Jn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Jn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===mo)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Fo.prototype.isMatrix4=!0;let pt=Fo;const ys=new F,Fn=new pt,Fx=new F(0,0,0),Ox=new F(1,1,1),Ci=new F,da=new F,mn=new F,Xh=new pt,qh=new lr;class ls{constructor(e=0,t=0,i=0,s=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class Wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bx=0;const $h=new F,Ms=new lr,ai=new pt,pa=new F,pr=new F,kx=new F,zx=new lr,Yh=new F(1,0,0),Kh=new F(0,1,0),Zh=new F(0,0,1),Jh={type:"added"},Vx={type:"removed"},Ss={type:"childadded",child:null},tl={type:"childremoved",child:null};class cn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new F,t=new ls,i=new lr,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ge}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pa.copy(e):pa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(pr,pa,this.up):ai.lookAt(pa,pr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ai),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vx),tl.child=e,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,kx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}cn.DEFAULT_UP=new F(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ki extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gx={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ki;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},ma={h:0,s:0,l:0};function il(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Cx(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=il(a,r,e+1/3),this.g=il(a,r,e),this.b=il(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=An){function i(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const i=xm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return nt.workingToColorSpace(Jt.copy(this),e),Math.round(Qe(Jt.r*255,0,255))*65536+Math.round(Qe(Jt.g*255,0,255))*256+Math.round(Qe(Jt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Jt.copy(this),t);const i=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=An){nt.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,s=Jt.b;return e!==An?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(ma);const i=Ko(Pi.h,ma.h,t),s=Ko(Pi.s,ma.s,t),r=Ko(Pi.l,ma.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new ke;ke.NAMES=xm;class vm extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ls,this.environmentIntensity=1,this.environmentRotation=new ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const On=new F,oi=new F,sl=new F,li=new F,bs=new F,Es=new F,Qh=new F,rl=new F,al=new F,ol=new F,ll=new Ct,cl=new Ct,ul=new Ct;class Cn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),On.subVectors(e,t),s.cross(On);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){On.subVectors(s,t),oi.subVectors(i,t),sl.subVectors(e,t);const a=On.dot(On),o=On.dot(oi),l=On.dot(sl),c=oi.dot(oi),u=oi.dot(sl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return ll.setScalar(0),cl.setScalar(0),ul.setScalar(0),ll.fromBufferAttribute(e,t),cl.fromBufferAttribute(e,i),ul.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ll,r.x),a.addScaledVector(cl,r.y),a.addScaledVector(ul,r.z),a}static isFrontFacing(e,t,i,s){return On.subVectors(i,t),oi.subVectors(e,t),On.cross(oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),On.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;bs.subVectors(s,i),Es.subVectors(r,i),rl.subVectors(e,i);const l=bs.dot(rl),c=Es.dot(rl);if(l<=0&&c<=0)return t.copy(i);al.subVectors(e,s);const u=bs.dot(al),f=Es.dot(al);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(bs,a);ol.subVectors(e,r);const d=bs.dot(ol),g=Es.dot(ol);if(g>=0&&d<=g)return t.copy(r);const y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Es,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Qh.subVectors(r,s),o=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(Qh,o);const p=1/(m+y+h);return a=y*p,o=h*p,t.copy(i).addScaledVector(bs,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fs{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),xa.subVectors(this.max,mr),Ts.subVectors(e.a,mr),ws.subVectors(e.b,mr),As.subVectors(e.c,mr),Ni.subVectors(ws,Ts),Di.subVectors(As,ws),Xi.subVectors(Ts,As);let t=[0,-Ni.z,Ni.y,0,-Di.z,Di.y,0,-Xi.z,Xi.y,Ni.z,0,-Ni.x,Di.z,0,-Di.x,Xi.z,0,-Xi.x,-Ni.y,Ni.x,0,-Di.y,Di.x,0,-Xi.y,Xi.x,0];return!hl(t,Ts,ws,As,xa)||(t=[1,0,0,0,1,0,0,0,1],!hl(t,Ts,ws,As,xa))?!1:(va.crossVectors(Ni,Di),t=[va.x,va.y,va.z],hl(t,Ts,ws,As,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ci=[new F,new F,new F,new F,new F,new F,new F,new F],Bn=new F,ga=new fs,Ts=new F,ws=new F,As=new F,Ni=new F,Di=new F,Xi=new F,mr=new F,xa=new F,va=new F,qi=new F;function hl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){qi.fromArray(n,r);const o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),u=i.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ot=new F,_a=new Le;let Hx=0;class tn extends hs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class _m extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ym extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Wx=new fs,gr=new F,fl=new F;class cr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(fl)),this.expandByPoint(gr.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jx=0;const En=new pt,dl=new cn,Rs=new F,gn=new fs,xr=new fs,Ht=new F;class un extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tx(e)?ym:_m)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(gn.min,xr.min),gn.expandByPoint(Ht),Ht.addVectors(gn.max,xr.max),gn.expandByPoint(Ht)):(gn.expandByPoint(xr.min),gn.expandByPoint(xr.max))}gn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(e,c),Ht.add(Rs)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new tn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new F,l[v]=new F;const c=new F,u=new F,f=new F,h=new Le,d=new Le,g=new Le,y=new F,m=new F;function p(v,A,L){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,L),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,L),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[v].add(y),o[A].add(y),o[L].add(y),l[v].add(m),l[A].add(m),l[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,A=S.length;v<A;++v){const L=S[v],D=L.start,k=L.count;for(let $=D,X=D+k;$<X;$+=3)p(e.getX($+0),e.getX($+1),e.getX($+2))}const E=new F,M=new F,w=new F,b=new F;function P(v){w.fromBufferAttribute(s,v),b.copy(w);const A=o[v];E.copy(A),E.sub(w.multiplyScalar(w.dot(A))).normalize(),M.crossVectors(b,A);const D=M.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,A=S.length;v<A;++v){const L=S[v],D=L.start,k=L.count;for(let $=D,X=D+k;$<X;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new tn(h,u,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new F;class vo{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){xo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let qx=0;class ur extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Ks,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ac&&(i.blendSrc=this.blendSrc),this.blendDst!==oc&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mm extends ur{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Cs;const vr=new F,Ps=new F,Ns=new F,Ds=new Le,_r=new Le,Sm=new pt,ya=new F,yr=new F,Ma=new F,ef=new Le,pl=new Le,tf=new Le;class $x extends cn{constructor(e=new Mm){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new un;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Xx(t,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new vo(i,3,0,!1)),Cs.setAttribute("uv",new vo(i,2,3,!1))}this.geometry=Cs,this.material=e,this.center=new Le(.5,.5),this.count=1}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),Sm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Ns.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Sa(ya.set(-.5,-.5,0),Ns,a,Ps,s,r),Sa(yr.set(.5,-.5,0),Ns,a,Ps,s,r),Sa(Ma.set(.5,.5,0),Ns,a,Ps,s,r),ef.set(0,0),pl.set(1,0),tf.set(1,1);let o=e.ray.intersectTriangle(ya,yr,Ma,!1,vr);if(o===null&&(Sa(yr.set(-.5,.5,0),Ns,a,Ps,s,r),pl.set(0,1),o=e.ray.intersectTriangle(ya,Ma,yr,!1,vr),o===null))return;const l=e.ray.origin.distanceTo(vr);l<e.near||l>e.far||t.push({distance:l,point:vr.clone(),uv:Cn.getInterpolation(vr,ya,yr,Ma,ef,pl,tf,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sa(n,e,t,i,s,r){Ds.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(_r.x=r*Ds.x-s*Ds.y,_r.y=s*Ds.x+r*Ds.y):_r.copy(Ds),n.copy(e),n.x+=_r.x,n.y+=_r.y,n.applyMatrix4(Sm)}const ui=new F,ml=new F,ba=new F,Li=new F,gl=new F,Ea=new F,xl=new F;class ju{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ml.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(ml);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ba),o=Li.dot(this.direction),l=-Li.dot(ba),c=Li.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const y=1/u;f*=y,h*=y,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ml).addScaledVector(ba,h),d}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),s=ui.dot(ui)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,s,r){gl.subVectors(t,e),Ea.subVectors(i,e),xl.crossVectors(gl,Ea);let a=this.direction.dot(xl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(Ea.crossVectors(Li,Ea));if(l<0)return null;const c=o*this.direction.dot(gl.cross(Li));if(c<0||l+c>a)return null;const u=-o*Li.dot(xl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qn extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nf=new pt,$i=new ju,Ta=new cr,sf=new F,wa=new F,Aa=new F,Ra=new F,vl=new F,Ca=new F,rf=new F,Pa=new F;class Wt extends cn{constructor(e=new un,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(vl.fromBufferAttribute(f,e),a?Ca.addScaledVector(vl,u):Ca.addScaledVector(vl.sub(t),u))}t.add(Ca)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(Ta.containsPoint($i.origin)===!1&&($i.intersectSphere(Ta,sf)===null||$i.origin.distanceToSquared(sf)>(e.far-e.near)**2))&&(nf.copy(r).invert(),$i.copy(e.ray).applyMatrix4(nf),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,w=E;M<w;M+=3){const b=o.getX(M),P=o.getX(M+1),v=o.getX(M+2);s=Na(this,p,e,i,c,u,f,b,P,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const S=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=Na(this,a,e,i,c,u,f,S,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,w=E;M<w;M+=3){const b=M,P=M+1,v=M+2;s=Na(this,p,e,i,c,u,f,b,P,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const S=m,E=m+1,M=m+2;s=Na(this,a,e,i,c,u,f,S,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Yx(n,e,t,i,s,r,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Gi,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:n}}function Na(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,wa),n.getVertexPosition(l,Aa),n.getVertexPosition(c,Ra);const u=Yx(n,e,t,i,wa,Aa,Ra,rf);if(u){const f=new F;Cn.getBarycoord(rf,wa,Aa,Ra,f),s&&(u.uv=Cn.getInterpolatedAttribute(s,o,l,c,f,new Le)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,o,l,c,f,new Le)),a&&(u.normal=Cn.getInterpolatedAttribute(a,o,l,c,f,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};Cn.getNormal(wa,Aa,Ra,h.normal),u.face=h,u.barycoord=f}return u}class bm extends qt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Xt,u=Xt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yc extends tn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ls=new pt,af=new pt,Da=[],of=new fs,Kx=new pt,Mr=new Wt,Sr=new cr;class Em extends Wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Kx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),of.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(of)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),Sr.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(i),e.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),af.multiplyMatrices(i,Ls),Mr.matrixWorld=af,Mr.raycast(e,Da);for(let a=0,o=Da.length;a<o;a++){const l=Da[a];l.instanceId=r,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new bm(new Float32Array(s*this.count),s,this.count,Ou,zn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _l=new F,Zx=new F,Jx=new Ge;class Zi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=_l.subVectors(i,t).cross(Zx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(_l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jx.getNormalMatrix(e),s=this.coplanarPoint(_l).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new cr,Qx=new Le(.5,.5),La=new F;class Tm{constructor(e=new Zi,t=new Zi,i=new Zi,s=new Zi,r=new Zi,a=new Zi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],E=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,d-u,p-g,w-S).normalize(),s[1].setComponents(c+a,d+u,p+g,w+S).normalize(),s[2].setComponents(c+o,d+f,p+y,w+E).normalize(),s[3].setComponents(c-o,d-f,p-y,w-E).normalize(),i)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,d-h,p-m,w-M).normalize();else if(s[4].setComponents(c-l,d-h,p-m,w-M).normalize(),t===Jn)s[5].setComponents(c+l,d+h,p+m,w+M).normalize();else if(t===mo)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);const t=Qx.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(La.x=s.normal.x>0?e.max.x:e.min.x,La.y=s.normal.y>0?e.max.y:e.min.y,La.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kc extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _o=new F,yo=new F,lf=new pt,br=new ju,Ia=new cr,yl=new F,cf=new F;class wm extends cn{constructor(e=new un,t=new Kc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_o.fromBufferAttribute(t,s-1),yo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_o.distanceTo(yo);e.setAttribute("lineDistance",new $t(i,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;lf.copy(s).invert(),br.copy(e.ray).applyMatrix4(lf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=d,m=g-1;y<m;y+=c){const p=u.getX(y),S=u.getX(y+1),E=Ua(this,e,br,l,p,S,y);E&&t.push(E)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(d),p=Ua(this,e,br,l,y,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=d,m=g-1;y<m;y+=c){const p=Ua(this,e,br,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=Ua(this,e,br,l,g-1,d,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ua(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(_o.fromBufferAttribute(o,s),yo.fromBufferAttribute(o,r),t.distanceSqToSegment(_o,yo,yl,cf)>i)return;yl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(yl);if(!(c<e.near||c>e.far))return{distance:c,point:cf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const uf=new F,hf=new F;class ev extends wm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)uf.fromBufferAttribute(t,s),hf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+uf.distanceTo(hf);e.setAttribute("lineDistance",new $t(i,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Am extends qt{constructor(e=[],t=as,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tv extends qt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tr extends qt{constructor(e,t,i=ii,s,r,a,o=Xt,l=Xt,c,u=Mi,f=1){if(u!==Mi&&u!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nv extends tr{constructor(e,t=ii,i=as,s,r,a=Xt,o=Xt,l,c=Mi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rm extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sa extends un{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function g(y,m,p,S,E,M,w,b,P,v,A){const L=M/P,D=w/v,k=M/2,$=w/2,X=b/2,N=P+1,H=v+1;let z=0,j=0;const re=new F;for(let de=0;de<H;de++){const ue=de*D-$;for(let me=0;me<N;me++){const Ie=me*L-k;re[y]=Ie*S,re[m]=ue*E,re[p]=X,c.push(re.x,re.y,re.z),re[y]=0,re[m]=0,re[p]=b>0?1:-1,u.push(re.x,re.y,re.z),f.push(me/P),f.push(1-de/v),z+=1}}for(let de=0;de<v;de++)for(let ue=0;ue<P;ue++){const me=h+ue+N*de,Ie=h+ue+N*(de+1),We=h+(ue+1)+N*(de+1),Ne=h+(ue+1)+N*de;l.push(me,Ie,Ne),l.push(Ie,We,Ne),j+=6}o.addGroup(d,j,A),d+=j,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Le:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new F,s=[],r=[],a=[],o=new F,l=new pt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Qe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cm extends Ei{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Le){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class iv extends Cm{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const ff=new F,df=new F,Ml=new Xu,Sl=new Xu,bl=new Xu;class Cr extends Ei{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new F){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(df.subVectors(s[0],s[1]).add(s[0]),c=df);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ff.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ff),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ml.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,y,m),Sl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,y,m),bl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Ml.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Sl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),bl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Ml.calc(l),Sl.calc(l),bl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pf(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function sv(n,e){const t=1-n;return t*t*e}function rv(n,e){return 2*(1-n)*n*e}function av(n,e){return n*n*e}function kr(n,e,t,i){return sv(n,e)+rv(n,t)+av(n,i)}function ov(n,e){const t=1-n;return t*t*t*e}function lv(n,e){const t=1-n;return 3*t*t*n*e}function cv(n,e){return 3*(1-n)*n*n*e}function uv(n,e){return n*n*n*e}function zr(n,e,t,i,s){return ov(n,e)+lv(n,t)+cv(n,i)+uv(n,s)}class hv extends Ei{constructor(e=new Le,t=new Le,i=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Le){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fv extends Ei{constructor(e=new F,t=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new F){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y),zr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dv extends Ei{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pv extends Ei{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mv extends Ei{constructor(e=new Le,t=new Le,i=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Le){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pm extends Ei{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y),kr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gv extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(pf(o,l.x,c.x,u.x,f.x),pf(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Le().fromArray(s))}return this}}var xv=Object.freeze({__proto__:null,ArcCurve:iv,CatmullRomCurve3:Cr,CubicBezierCurve:hv,CubicBezierCurve3:fv,EllipseCurve:Cm,LineCurve:dv,LineCurve3:pv,QuadraticBezierCurve:mv,QuadraticBezierCurve3:Pm,SplineCurve:gv});class ra extends un{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const S=p*h-a;for(let E=0;E<c;E++){const M=E*f-r;g.push(M,-S,0),y.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const E=S+c*p,M=S+c*(p+1),w=S+1+c*(p+1),b=S+1+c*p;d.push(E,M,b),d.push(M,w,b)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gs extends un{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new F,h=new F,d=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){const S=[],E=p/i,M=a+E*o,w=e*Math.cos(M),b=Math.sqrt(e*e-w*w);let P=0;p===0&&a===0?P=.5/t:p===i&&l===Math.PI&&(P=-.5/t);for(let v=0;v<=t;v++){const A=v/t,L=s+A*r;f.x=-b*Math.cos(L),f.y=w,f.z=b*Math.sin(L),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(A+P,1-E),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const E=u[p][S+1],M=u[p][S],w=u[p+1][S],b=u[p+1][S+1];(p!==0||a>0)&&d.push(E,M,b),(p!==i-1||l<Math.PI)&&d.push(M,w,b)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hs extends un{constructor(e=new Pm(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new F,l=new F,c=new Le;let u=new F;const f=[],h=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function y(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),S(),p()}function m(E){u=e.getPointAt(E/t,u);const M=a.normals[E],w=a.binormals[E];for(let b=0;b<=s;b++){const P=b/s*Math.PI*2,v=Math.sin(P),A=-Math.cos(P);l.x=A*M.x+v*w.x,l.y=A*M.y+v*w.y,l.z=A*M.z+v*w.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let M=1;M<=s;M++){const w=(s+1)*(E-1)+(M-1),b=(s+1)*E+(M-1),P=(s+1)*E+M,v=(s+1)*(E-1)+M;g.push(w,b,v),g.push(b,P,v)}}function S(){for(let E=0;E<=t;E++)for(let M=0;M<=s;M++)c.x=E/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Hs(new xv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(mf(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(mf(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=nr(n[t]);for(const s in i)e[s]=i[s]}return e}function mf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function vv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const _v={clone:nr,merge:ln};var yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yv,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Sv extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bv extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ev extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fa=new F,Oa=new lr,jn=new F;class Dm extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fa,Oa,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Fa,Oa,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new F,gf=new Le,xf=new Le;class vn extends Dm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$c*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $c*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,gf,xf),t.subVectors(xf,gf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Lm extends Dm{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=-90,Us=1;class Tv extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Is,Us,e,t);s.layers=this.layers,this.add(s);const r=new vn(Is,Us,e,t);r.layers=this.layers,this.add(r);const a=new vn(Is,Us,e,t);a.layers=this.layers,this.add(a);const o=new vn(Is,Us,e,t);o.layers=this.layers,this.add(o);const l=new vn(Is,Us,e,t);l.layers=this.layers,this.add(l);const c=new vn(Is,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class wv extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vf=new pt;class Av{constructor(e,t,i=0,s=1/0){this.ray=new ju(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Wu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vf),this}intersectObject(e,t=!0,i=[]){return Zc(e,this,i,t),i.sort(_f),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Zc(e[s],this,i,t);return i.sort(_f),i}}function _f(n,e){return n.distance-e.distance}function Zc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Zc(r[a],e,t,!0)}}const Lh=class Lh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Lh.prototype.isMatrix2=!0;let yf=Lh;function Mf(n,e,t,i){const s=Rv(i);switch(t){case dm:return n*e;case Ou:return n*e/s.components*s.byteLength;case Bu:return n*e/s.components*s.byteLength;case os:return n*e*2/s.components*s.byteLength;case ku:return n*e*2/s.components*s.byteLength;case pm:return n*e*3/s.components*s.byteLength;case Vn:return n*e*4/s.components*s.byteLength;case zu:return n*e*4/s.components*s.byteLength;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case io:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vc:case yc:return Math.max(n,16)*Math.max(e,8)/4;case xc:case _c:return Math.max(n,8)*Math.max(e,8)/2;case Mc:case Sc:case Ec:case Tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bc:case uo:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vc:case Gc:case Hc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wc:case jc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ho:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rv(n){switch(n){case Rn:case cm:return{byteLength:1,components:1};case qr:case um:case yi:return{byteLength:2,components:1};case Uu:case Fu:return{byteLength:2,components:4};case ii:case Iu:case zn:return{byteLength:4,components:1};case hm:case fm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Du}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Du);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Im(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Cv(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const y=f[d];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nv=`#ifdef USE_ALPHAHASH
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
#endif`,Dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fv=`#ifdef USE_AOMAP
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
#endif`,Ov=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bv=`#ifdef USE_BATCHING
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
#endif`,kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hv=`#ifdef USE_IRIDESCENCE
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
#endif`,Wv=`#ifdef USE_BUMPMAP
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
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qv=`#define PI 3.141592653589793
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
} // validated`,e_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t_=`vec3 transformedNormal = objectNormal;
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
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",o_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
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
#endif`,d_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x_=`#ifdef USE_GRADIENTMAP
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
}`,v_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,S_=`#ifdef USE_ENVMAP
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
#endif`,b_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A_=`PhysicalMaterial material;
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
#endif`,R_=`uniform sampler2D dfgLUT;
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
}`,C_=`
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
#endif`,P_=`#if defined( RE_IndirectDiffuse )
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
#endif`,N_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,L_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z_=`#if defined( USE_POINTS_UV )
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
#endif`,V_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`#ifdef USE_MORPHTARGETS
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
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
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
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,my=`float getShadowMask() {
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
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,My=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,by=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ey=`#ifdef USE_TRANSMISSION
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
#endif`,Ty=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ny=`uniform sampler2D t2D;
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
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
}`,Oy=`#if DEPTH_PACKING == 3200
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
}`,By=`#define DISTANCE
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
}`,ky=`#define DISTANCE
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`uniform float scale;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,jy=`uniform vec3 diffuse;
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
}`,Xy=`#define LAMBERT
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
}`,qy=`#define LAMBERT
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
}`,$y=`#define MATCAP
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
}`,Yy=`#define MATCAP
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
}`,Ky=`#define NORMAL
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
}`,Zy=`#define NORMAL
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
}`,Jy=`#define PHONG
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
}`,Qy=`#define PHONG
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
}`,eM=`#define STANDARD
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
}`,tM=`#define STANDARD
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
}`,nM=`#define TOON
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
}`,iM=`#define TOON
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
}`,sM=`uniform float size;
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
}`,rM=`uniform vec3 diffuse;
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
}`,aM=`#include <common>
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
}`,oM=`uniform vec3 color;
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
}`,lM=`uniform float rotation;
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
}`,cM=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Pv,alphahash_pars_fragment:Nv,alphamap_fragment:Dv,alphamap_pars_fragment:Lv,alphatest_fragment:Iv,alphatest_pars_fragment:Uv,aomap_fragment:Fv,aomap_pars_fragment:Ov,batching_pars_vertex:Bv,batching_vertex:kv,begin_vertex:zv,beginnormal_vertex:Vv,bsdfs:Gv,iridescence_fragment:Hv,bumpmap_pars_fragment:Wv,clipping_planes_fragment:jv,clipping_planes_pars_fragment:Xv,clipping_planes_pars_vertex:qv,clipping_planes_vertex:$v,color_fragment:Yv,color_pars_fragment:Kv,color_pars_vertex:Zv,color_vertex:Jv,common:Qv,cube_uv_reflection_fragment:e_,defaultnormal_vertex:t_,displacementmap_pars_vertex:n_,displacementmap_vertex:i_,emissivemap_fragment:s_,emissivemap_pars_fragment:r_,colorspace_fragment:a_,colorspace_pars_fragment:o_,envmap_fragment:l_,envmap_common_pars_fragment:c_,envmap_pars_fragment:u_,envmap_pars_vertex:h_,envmap_physical_pars_fragment:S_,envmap_vertex:f_,fog_vertex:d_,fog_pars_vertex:p_,fog_fragment:m_,fog_pars_fragment:g_,gradientmap_pars_fragment:x_,lightmap_pars_fragment:v_,lights_lambert_fragment:__,lights_lambert_pars_fragment:y_,lights_pars_begin:M_,lights_toon_fragment:b_,lights_toon_pars_fragment:E_,lights_phong_fragment:T_,lights_phong_pars_fragment:w_,lights_physical_fragment:A_,lights_physical_pars_fragment:R_,lights_fragment_begin:C_,lights_fragment_maps:P_,lights_fragment_end:N_,lightprobes_pars_fragment:D_,logdepthbuf_fragment:L_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:U_,logdepthbuf_vertex:F_,map_fragment:O_,map_pars_fragment:B_,map_particle_fragment:k_,map_particle_pars_fragment:z_,metalnessmap_fragment:V_,metalnessmap_pars_fragment:G_,morphinstance_vertex:H_,morphcolor_vertex:W_,morphnormal_vertex:j_,morphtarget_pars_vertex:X_,morphtarget_vertex:q_,normal_fragment_begin:$_,normal_fragment_maps:Y_,normal_pars_fragment:K_,normal_pars_vertex:Z_,normal_vertex:J_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,opaque_fragment:sy,packing:ry,premultiplied_alpha_fragment:ay,project_vertex:oy,dithering_fragment:ly,dithering_pars_fragment:cy,roughnessmap_fragment:uy,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:fy,shadowmap_pars_vertex:dy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:xy,skinning_vertex:vy,skinnormal_vertex:_y,specularmap_fragment:yy,specularmap_pars_fragment:My,tonemapping_fragment:Sy,tonemapping_pars_fragment:by,transmission_fragment:Ey,transmission_pars_fragment:Ty,uv_pars_fragment:wy,uv_pars_vertex:Ay,uv_vertex:Ry,worldpos_vertex:Cy,background_vert:Py,background_frag:Ny,backgroundCube_vert:Dy,backgroundCube_frag:Ly,cube_vert:Iy,cube_frag:Uy,depth_vert:Fy,depth_frag:Oy,distance_vert:By,distance_frag:ky,equirect_vert:zy,equirect_frag:Vy,linedashed_vert:Gy,linedashed_frag:Hy,meshbasic_vert:Wy,meshbasic_frag:jy,meshlambert_vert:Xy,meshlambert_frag:qy,meshmatcap_vert:$y,meshmatcap_frag:Yy,meshnormal_vert:Ky,meshnormal_frag:Zy,meshphong_vert:Jy,meshphong_frag:Qy,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:sM,points_frag:rM,shadow_vert:aM,shadow_frag:oM,sprite_vert:lM,sprite_frag:cM},be={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},$n={basic:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:ln([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:ln([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:ln([be.points,be.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:ln([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:ln([be.common,be.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:ln([be.sprite,be.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:ln([be.common,be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:ln([be.lights,be.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};$n.physical={uniforms:ln([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ba={r:0,b:0,g:0},uM=new pt,Um=new Ge;Um.set(-1,0,0,0,1,0,0,0,1);function hM(n,e,t,i,s,r){const a=new ke(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const M=S.backgroundBlurriness>0;E=e.get(E,M)}return E}function g(S){let E=!1;const M=d(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,E){const M=d(E);M&&(M.isCubeTexture||M.mapping===Oo)?(c===void 0&&(c=new Wt(new sa(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:nr($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uM.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Um),c.material.toneMapped=nt.getTransfer(M.colorSpace)!==dt,(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Wt(new ra(2,2),new si({name:"BackgroundMaterial",uniforms:nr($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=nt.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,E){S.getRGB(Ba,Nm(n)),t.buffers.color.setClear(Ba.r,Ba.g,Ba.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:y,dispose:p}}function fM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(D,k,$,X,N){let H=!1;const z=f(D,X,$,k);r!==z&&(r=z,c(r.object)),H=d(D,X,$,N),H&&g(D,X,$,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(D,k,$,X),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function f(D,k,$,X){const N=X.wireframe===!0;let H=i[k.id];H===void 0&&(H={},i[k.id]=H);const z=D.isInstancedMesh===!0?D.id:0;let j=H[z];j===void 0&&(j={},H[z]=j);let re=j[$.id];re===void 0&&(re={},j[$.id]=re);let de=re[N];return de===void 0&&(de=h(l()),re[N]=de),de}function h(D){const k=[],$=[],X=[];for(let N=0;N<t;N++)k[N]=0,$[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:X,object:D,attributes:{},index:null}}function d(D,k,$,X){const N=r.attributes,H=k.attributes;let z=0;const j=$.getAttributes();for(const re in j)if(j[re].location>=0){const ue=N[re];let me=H[re];if(me===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(me=D.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;z++}return r.attributesNum!==z||r.index!==X}function g(D,k,$,X){const N={},H=k.attributes;let z=0;const j=$.getAttributes();for(const re in j)if(j[re].location>=0){let ue=H[re];ue===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor));const me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),N[re]=me,z++}r.attributes=N,r.attributesNum=z,r.index=X}function y(){const D=r.newAttributes;for(let k=0,$=D.length;k<$;k++)D[k]=0}function m(D){p(D,0)}function p(D,k){const $=r.newAttributes,X=r.enabledAttributes,N=r.attributeDivisors;$[D]=1,X[D]===0&&(n.enableVertexAttribArray(D),X[D]=1),N[D]!==k&&(n.vertexAttribDivisor(D,k),N[D]=k)}function S(){const D=r.newAttributes,k=r.enabledAttributes;for(let $=0,X=k.length;$<X;$++)k[$]!==D[$]&&(n.disableVertexAttribArray($),k[$]=0)}function E(D,k,$,X,N,H,z){z===!0?n.vertexAttribIPointer(D,k,$,N,H):n.vertexAttribPointer(D,k,$,X,N,H)}function M(D,k,$,X){y();const N=X.attributes,H=$.getAttributes(),z=k.defaultAttributeValues;for(const j in H){const re=H[j];if(re.location>=0){let de=N[j];if(de===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),de!==void 0){const ue=de.normalized,me=de.itemSize,Ie=e.get(de);if(Ie===void 0)continue;const We=Ie.buffer,Ne=Ie.type,se=Ie.bytesPerElement,le=Ne===n.INT||Ne===n.UNSIGNED_INT||de.gpuType===Iu;if(de.isInterleavedBufferAttribute){const he=de.data,Ee=he.stride,Re=de.offset;if(he.isInstancedInterleavedBuffer){for(let Pe=0;Pe<re.locationSize;Pe++)p(re.location+Pe,he.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Pe=0;Pe<re.locationSize;Pe++)m(re.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Pe=0;Pe<re.locationSize;Pe++)E(re.location+Pe,me/re.locationSize,Ne,ue,Ee*se,(Re+me/re.locationSize*Pe)*se,le)}else{if(de.isInstancedBufferAttribute){for(let he=0;he<re.locationSize;he++)p(re.location+he,de.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let he=0;he<re.locationSize;he++)m(re.location+he);n.bindBuffer(n.ARRAY_BUFFER,We);for(let he=0;he<re.locationSize;he++)E(re.location+he,me/re.locationSize,Ne,ue,me*se,me/re.locationSize*he*se,le)}}else if(z!==void 0){const ue=z[j];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(re.location,ue);break;case 3:n.vertexAttrib3fv(re.location,ue);break;case 4:n.vertexAttrib4fv(re.location,ue);break;default:n.vertexAttrib1fv(re.location,ue)}}}}S()}function w(){A();for(const D in i){const k=i[D];for(const $ in k){const X=k[$];for(const N in X){const H=X[N];for(const z in H)u(H[z].object),delete H[z];delete X[N]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const k=i[D.id];for(const $ in k){const X=k[$];for(const N in X){const H=X[N];for(const z in H)u(H[z].object),delete H[z];delete X[N]}}delete i[D.id]}function P(D){for(const k in i){const $=i[k];for(const X in $){const N=$[X];if(N[D.id]===void 0)continue;const H=N[D.id];for(const z in H)u(H[z].object),delete H[z];delete N[D.id]}}}function v(D){for(const k in i){const $=i[k],X=D.isInstancedMesh===!0?D.id:0,N=$[X];if(N!==void 0){for(const H in N){const z=N[H];for(const j in z)u(z[j].object),delete z[j];delete N[H]}delete $[X],Object.keys($).length===0&&delete i[k]}}}function A(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function dM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function pM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Rn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==zn&&!v)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,maxSamples:w,samples:b}}function mM(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Zi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,E=S*4;let M=p.clippingState||null;l.value=M,M=u(g,h,E,d);for(let w=0;w!==E;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=d+y*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=d;E!==y;++E,M+=4)a.copy(f[E]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const zi=4,Sf=[.125,.215,.35,.446,.526,.582],ts=20,gM=256,Er=new Lm,bf=new ke;let El=null,Tl=0,wl=0,Al=!1;const xM=new F;class Ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=xM}=r;El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(El,Tl,wl),this._renderer.xr.enabled=Al,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:yi,format:Vn,colorSpace:fo,depthBuffer:!1},s=Tf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vM(r)),this._blurMaterial=yM(r,e,t),this._ggxMaterial=_M(r,e,t)}return s}_compileMaterial(e){const t=new Wt(new un,e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,i,s,r){const l=new vn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(bf),f.toneMapping=Qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new sa,new qn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(bf),p=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const w=this._cubeSize;Fs(s,M*w,E>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(y,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===as||e.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Fs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Er)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-zi?i-g+zi:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Fs(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Er),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Fs(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,Er)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ts-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):ts;m>ts&&Fe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const p=[];let S=0;for(let P=0;P<ts;++P){const v=P/y,A=Math.exp(-v*v/2);p.push(A),P===0?S+=A:P<m&&(S+=2*A)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const M=this._sizeLods[s],w=3*M*(s>E-zi?s-E+zi:0),b=4*(this._cubeSize-M);Fs(t,w,b,3*M,2*M),l.setRenderTarget(t),l.render(f,Er)}}function vM(n){const e=[],t=[],i=[];let s=n;const r=n-zi+1+Sf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-zi?l=Sf[a-n+zi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,y=3,m=2,p=1,S=new Float32Array(y*g*d),E=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let b=0;b<d;b++){const P=b%3*2/3-1,v=b>2?0:-1,A=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];S.set(A,y*g*b),E.set(h,m*g*b);const L=[b,b,b,b,b,b];M.set(L,p*g*b)}const w=new un;w.setAttribute("position",new tn(S,y)),w.setAttribute("uv",new tn(E,m)),w.setAttribute("faceIndex",new tn(M,p)),i.push(new Wt(w,null)),s>zi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Tf(n,e,t){const i=new ei(n,e,t);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function _M(n,e,t){return new si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function yM(n,e,t){const i=new Float32Array(ts),s=new F(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function wf(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Af(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Bo(){return`

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
	`}class Fm extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Am(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sa(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:gi});r.uniforms.tEquirect.value=t;const a=new Wt(s,r),o=t.minFilter;return t.minFilter===ns&&(t.minFilter=en),new Tv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function MM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Xo||d===qo)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const y=new Fm(g.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===Xo||d===qo,y=d===as||d===er;if(g||y){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Ef(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new Ef(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Xo?h.mapping=as:d===qo&&(h.mapping=er),h}function l(h){let d=0;const g=6;for(let y=0;y<g;y++)h[y]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function SM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Zs("WebGLRenderer: "+i+" extension not supported."),s}}}function bM(n,e,t,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let y=0;if(g===void 0)return;if(d!==null){const S=d.array;y=d.version;for(let E=0,M=S.length;E<M;E+=3){const w=S[E+0],b=S[E+1],P=S[E+2];h.push(w,b,b,P,P,w)}}else{const S=g.array;y=g.version;for(let E=0,M=S.length/3-1;E<M;E+=3){const w=E+0,b=E+1,P=E+2;h.push(w,b,b,P,P,w)}}const m=new(g.count>=65535?ym:_m)(h,1);m.version=y;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function EM(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let y=0;for(let m=0;m<d;m++)y+=h[m];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function TM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function wM(n,e,t){const i=new WeakMap,s=new Ct;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let A=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let M=o.attributes.position.count*E,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*w*4*f),P=new gm(b,M,w,f);P.type=zn,P.needsUpdate=!0;const v=E*4;for(let L=0;L<f;L++){const D=m[L],k=p[L],$=S[L],X=M*w*4*L;for(let N=0;N<D.count;N++){const H=N*v;d===!0&&(s.fromBufferAttribute(D,N),b[X+H+0]=s.x,b[X+H+1]=s.y,b[X+H+2]=s.z,b[X+H+3]=0),g===!0&&(s.fromBufferAttribute(k,N),b[X+H+4]=s.x,b[X+H+5]=s.y,b[X+H+6]=s.z,b[X+H+7]=0),y===!0&&(s.fromBufferAttribute($,N),b[X+H+8]=s.x,b[X+H+9]=s.y,b[X+H+10]=s.z,b[X+H+11]=$.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new Le(M,w)},i.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function AM(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const RM={[nm]:"LINEAR_TONE_MAPPING",[Lu]:"REINHARD_TONE_MAPPING",[im]:"CINEON_TONE_MAPPING",[sm]:"ACES_FILMIC_TONE_MAPPING",[am]:"AGX_TONE_MAPPING",[om]:"NEUTRAL_TONE_MAPPING",[rm]:"CUSTOM_TONE_MAPPING"};function CM(n,e,t,i,s,r){const a=new ei(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new tr(e,t):void 0}),o=new ei(e,t,{type:yi,depthBuffer:!1,stencilBuffer:!1}),l=new un;l.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $t([0,2,0,0,2,0],2));const c=new Sv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Wt(l,c),f=new Lm(-1,1,1,-1,0,1);let h=null,d=null,g=!1,y,m=null,p=[],S=!1;this.setSize=function(E,M){a.setSize(E,M),o.setSize(E,M);for(let w=0;w<p.length;w++){const b=p[w];b.setSize&&b.setSize(E,M)}},this.setEffects=function(E){p=E,S=p.length>0&&p[0].isRenderPass===!0;const M=a.width,w=a.height;for(let b=0;b<p.length;b++){const P=p[b];P.setSize&&P.setSize(M,w)}},this.begin=function(E,M){if(g||E.toneMapping===Qn&&p.length===0)return!1;if(m=M,M!==null){const w=M.width,b=M.height;(a.width!==w||a.height!==b)&&this.setSize(w,b)}return S===!1&&E.setRenderTarget(a),y=E.toneMapping,E.toneMapping=Qn,!0},this.hasRenderPass=function(){return S},this.end=function(E,M){E.toneMapping=y,g=!0;let w=a,b=o;for(let P=0;P<p.length;P++){const v=p[P];if(v.enabled!==!1&&(v.render(E,b,w,M),v.needsSwap!==!1)){const A=w;w=b,b=A}}if(h!==E.outputColorSpace||d!==E.toneMapping){h=E.outputColorSpace,d=E.toneMapping,c.defines={},nt.getTransfer(h)===dt&&(c.defines.SRGB_TRANSFER="");const P=RM[d];P&&(c.defines[P]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,E.setRenderTarget(m),E.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Om=new qt,Jc=new tr(1,1),Bm=new gm,km=new Ux,zm=new Am,Rf=[],Cf=[],Pf=new Float32Array(16),Nf=new Float32Array(9),Df=new Float32Array(4);function hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Rf[s];if(r===void 0&&(r=new Float32Array(s),Rf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ko(n,e){let t=Cf[e];t===void 0&&(t=new Int32Array(e),Cf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function PM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function IM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Df.set(i),n.uniformMatrix2fv(this.addr,!1,Df),Gt(t,i)}}function UM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Nf.set(i),n.uniformMatrix3fv(this.addr,!1,Nf),Gt(t,i)}}function FM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Pf.set(i),n.uniformMatrix4fv(this.addr,!1,Pf),Gt(t,i)}}function OM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function VM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function jM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jc.compareFunction=t.isReversedDepthBuffer()?Gu:Vu,r=Jc):r=Om,t.setTexture2D(e||r,s)}function XM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||km,s)}function qM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||zm,s)}function $M(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Bm,s)}function YM(n){switch(n){case 5126:return PM;case 35664:return NM;case 35665:return DM;case 35666:return LM;case 35674:return IM;case 35675:return UM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return BM;case 35668:case 35672:return kM;case 35669:case 35673:return zM;case 5125:return VM;case 36294:return GM;case 36295:return HM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return $M}}function KM(n,e){n.uniform1fv(this.addr,e)}function ZM(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function JM(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function QM(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function eS(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tS(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nS(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iS(n,e){n.uniform1iv(this.addr,e)}function sS(n,e){n.uniform2iv(this.addr,e)}function rS(n,e){n.uniform3iv(this.addr,e)}function aS(n,e){n.uniform4iv(this.addr,e)}function oS(n,e){n.uniform1uiv(this.addr,e)}function lS(n,e){n.uniform2uiv(this.addr,e)}function cS(n,e){n.uniform3uiv(this.addr,e)}function uS(n,e){n.uniform4uiv(this.addr,e)}function hS(n,e,t){const i=this.cache,s=e.length,r=ko(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Jc:a=Om;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function fS(n,e,t){const i=this.cache,s=e.length,r=ko(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||km,r[a])}function dS(n,e,t){const i=this.cache,s=e.length,r=ko(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||zm,r[a])}function pS(n,e,t){const i=this.cache,s=e.length,r=ko(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bm,r[a])}function mS(n){switch(n){case 5126:return KM;case 35664:return ZM;case 35665:return JM;case 35666:return QM;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return sS;case 35668:case 35672:return rS;case 35669:case 35673:return aS;case 5125:return oS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return pS}}class gS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=YM(t.type)}}class xS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mS(t.type)}}class vS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Rl=/(\w+)(\])?(\[|\.)?/g;function Lf(n,e){n.seq.push(e),n.map[e.id]=e}function _S(n,e,t){const i=n.name,s=i.length;for(Rl.lastIndex=0;;){const r=Rl.exec(i),a=Rl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lf(t,c===void 0?new gS(o,n,e):new xS(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new vS(o),Lf(t,f)),t=f}}}class ro{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_S(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function If(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yS=37297;let MS=0;function SS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Uf=new Ge;function bS(n){nt._getMatrix(Uf,nt.workingColorSpace,n);const e=`mat3( ${Uf.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case po:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ff(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+SS(n.getShaderSource(e),o)}else return r}function ES(n,e){const t=bS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const TS={[nm]:"Linear",[Lu]:"Reinhard",[im]:"Cineon",[sm]:"ACESFilmic",[am]:"AgX",[om]:"Neutral",[rm]:"Custom"};function wS(n,e){const t=TS[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ka=new F;function AS(){nt.getLuminanceCoefficients(ka);const n=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function CS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function PS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Pr(n){return n!==""}function Of(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(n){return n.replace(NS,LS)}const DS=new Map;function LS(n,e){let t=$e[e];if(t===void 0){const i=DS.get(e);if(i!==void 0)t=$e[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qc(t)}const IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(n){return n.replace(IS,US)}function US(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zf(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const FS={[eo]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function OS(n){return FS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BS={[as]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE",[Oo]:"ENVMAP_TYPE_CUBE_UV"};function kS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":BS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const zS={[er]:"ENVMAP_MODE_REFRACTION"};function VS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":zS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GS={[tm]:"ENVMAP_BLENDING_MULTIPLY",[px]:"ENVMAP_BLENDING_MIX",[mx]:"ENVMAP_BLENDING_ADD"};function HS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":GS[n.combine]||"ENVMAP_BLENDING_NONE"}function WS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=OS(t),c=kS(t),u=VS(t),f=HS(t),h=WS(t),d=RS(t),g=CS(r),y=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(m=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Qn?wS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,ES("linearToOutputTexel",t.outputColorSpace),AS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),a=Qc(a),a=Of(a,t),a=Bf(a,t),o=Qc(o),o=Of(o,t),o=Bf(o,t),a=kf(a),o=kf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+a,M=S+p+o,w=If(s,s.VERTEX_SHADER,E),b=If(s,s.FRAGMENT_SHADER,M);s.attachShader(y,w),s.attachShader(y,b),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(D){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(y)||"",$=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(b)||"",N=k.trim(),H=$.trim(),z=X.trim();let j=!0,re=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,b);else{const de=Ff(s,w,"vertex"),ue=Ff(s,b,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+de+`
`+ue)}else N!==""?Fe("WebGLProgram: Program Info Log:",N):(H===""||z==="")&&(re=!1);re&&(D.diagnostics={runnable:j,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(w),s.deleteShader(b),v=new ro(s,y),A=PS(s,y)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(y,yS)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=b,this}let XS=0;class qS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $S(e),t.set(e,i)),i}}class $S{constructor(e){this.id=XS++,this.code=e,this.usedTimes=0}}function YS(n){return n===os||n===uo||n===ho}function KS(n,e,t,i,s,r){const a=new Wu,o=new qS,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,A,L,D,k,$){const X=D.fog,N=k.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||H,z),re=j&&j.mapping===Oo?j.image.height:null,de=d[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Fe("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ue=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,me=ue!==void 0?ue.length:0;let Ie=0;N.morphAttributes.position!==void 0&&(Ie=1),N.morphAttributes.normal!==void 0&&(Ie=2),N.morphAttributes.color!==void 0&&(Ie=3);let We,Ne,se,le;if(de){const Me=$n[de];We=Me.vertexShader,Ne=Me.fragmentShader}else{We=v.vertexShader,Ne=v.fragmentShader;const Me=o.getVertexShaderStage(v),ht=o.getFragmentShaderStage(v);o.update(v,Me,ht),se=Me.id,le=ht.id}const he=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),Re=k.isInstancedMesh===!0,Pe=k.isBatchedMesh===!0,Je=!!v.map,Oe=!!v.matcap,je=!!j,He=!!v.aoMap,Ve=!!v.lightMap,et=!!v.bumpMap&&v.wireframe===!1,it=!!v.normalMap,ct=!!v.displacementMap,ut=!!v.emissiveMap,st=!!v.metalnessMap,xt=!!v.roughnessMap,B=v.anisotropy>0,Ft=v.clearcoat>0,Ze=v.dispersion>0,C=v.iridescence>0,_=v.sheen>0,R=v.transmission>0,U=B&&!!v.anisotropyMap,O=Ft&&!!v.clearcoatMap,ee=Ft&&!!v.clearcoatNormalMap,J=Ft&&!!v.clearcoatRoughnessMap,V=C&&!!v.iridescenceMap,W=C&&!!v.iridescenceThicknessMap,te=_&&!!v.sheenColorMap,Q=_&&!!v.sheenRoughnessMap,ie=!!v.specularMap,ne=!!v.specularColorMap,fe=!!v.specularIntensityMap,pe=R&&!!v.transmissionMap,ye=R&&!!v.thicknessMap,I=!!v.gradientMap,ce=!!v.alphaMap,K=v.alphaTest>0,ge=!!v.alphaHash,xe=!!v.extensions;let oe=Qn;v.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(oe=n.toneMapping);const Te={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:We,fragmentShader:Ne,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Pe,batchingColor:Pe&&k._colorsTexture!==null,instancing:Re,instancingColor:Re&&k.instanceColor!==null,instancingMorph:Re&&k.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Je,matcap:Oe,envMap:je,envMapMode:je&&j.mapping,envMapCubeUVHeight:re,aoMap:He,lightMap:Ve,bumpMap:et,normalMap:it,displacementMap:ct,emissiveMap:ut,normalMapObjectSpace:it&&v.normalMapType===vx,normalMapTangentSpace:it&&v.normalMapType===kh,packedNormalMap:it&&v.normalMapType===kh&&YS(v.normalMap.format),metalnessMap:st,roughnessMap:xt,anisotropy:B,anisotropyMap:U,clearcoat:Ft,clearcoatMap:O,clearcoatNormalMap:ee,clearcoatRoughnessMap:J,dispersion:Ze,iridescence:C,iridescenceMap:V,iridescenceThicknessMap:W,sheen:_,sheenColorMap:te,sheenRoughnessMap:Q,specularMap:ie,specularColorMap:ne,specularIntensityMap:fe,transmission:R,transmissionMap:pe,thicknessMap:ye,gradientMap:I,opaque:v.transparent===!1&&v.blending===Ks&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:K,alphaHash:ge,combine:v.combine,mapUv:Je&&g(v.map.channel),aoMapUv:He&&g(v.aoMap.channel),lightMapUv:Ve&&g(v.lightMap.channel),bumpMapUv:et&&g(v.bumpMap.channel),normalMapUv:it&&g(v.normalMap.channel),displacementMapUv:ct&&g(v.displacementMap.channel),emissiveMapUv:ut&&g(v.emissiveMap.channel),metalnessMapUv:st&&g(v.metalnessMap.channel),roughnessMapUv:xt&&g(v.roughnessMap.channel),anisotropyMapUv:U&&g(v.anisotropyMap.channel),clearcoatMapUv:O&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:W&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Q&&g(v.sheenRoughnessMap.channel),specularMapUv:ie&&g(v.specularMap.channel),specularColorMapUv:ne&&g(v.specularColorMap.channel),specularIntensityMapUv:fe&&g(v.specularIntensityMap.channel),transmissionMapUv:pe&&g(v.transmissionMap.channel),thicknessMapUv:ye&&g(v.thicknessMap.channel),alphaMapUv:ce&&g(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(it||B),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(Je||ce),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&it===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:Je&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===dt,decodeVideoTextureEmissive:ut&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===di,flipSided:v.side===hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)A.push(L),A.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(p(A,v),S(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function S(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){const A=d[v.type];let L;if(A){const D=$n[A];L=_v.clone(D.uniforms)}else L=v.uniforms;return L}function M(v,A){let L=u.get(A);return L!==void 0?++L.usedTimes:(L=new jS(n,A,v,s),c.push(L),u.set(A,L)),L}function w(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function P(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:M,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:P}}function ZS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function JS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Vf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,y,m,p){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[e]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=a(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function l(h,d,g,y,m,p){const S=o(h,d,g,y,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(h,d,g,y,m,p){const S=o(h,d,g,y,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,d,g){t.length>1&&t.sort(h||JS),i.length>1&&i.sort(d||Vf),s.length>1&&s.sort(d||Vf),g&&(t.reverse(),i.reverse(),s.reverse())}function f(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function QS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Gf,n.set(i,[a])):s>=r.length?(a=new Gf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function eb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ke};break;case"SpotLight":t={position:new F,direction:new F,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function tb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nb=0;function ib(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sb(n){const e=new eb,t=tb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new pt,a=new pt;function o(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,S=0,E=0,M=0,w=0,b=0,P=0;c.sort(ib);for(let A=0,L=c.length;A<L;A++){const D=c[A],k=D.color,$=D.intensity,X=D.distance;let N=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===os?N=D.shadow.map.texture:N=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=k.r*$,f+=k.g*$,h+=k.b*$;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],$);P++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const z=D.shadow,j=t.get(D);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=D.shadow.matrix,S++}i.directional[d]=H,d++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(k).multiplyScalar($),H.distance=X,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[y]=H;const z=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,z.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[y]=z.matrix,D.castShadow){const j=t.get(D);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,i.spotShadow[y]=j,i.spotShadowMap[y]=N,M++}y++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(k).multiplyScalar($),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=H,m++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const z=D.shadow,j=t.get(D);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,j.shadowCameraNear=z.camera.near,j.shadowCameraFar=z.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=H,g++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar($),H.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==d||v.pointLength!==g||v.spotLength!==y||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==S||v.numPointShadows!==E||v.numSpotShadows!==M||v.numSpotMaps!==w||v.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=P,v.directionalLength=d,v.pointLength=g,v.spotLength=y,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=S,v.numPointShadows=E,v.numSpotShadows=M,v.numSpotMaps=w,v.numLightProbes=P,i.version=nb++)}function l(c,u){let f=0,h=0,d=0,g=0,y=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const E=c[p];if(E.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(E.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Hf(n){const e=new sb(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function rb(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Hf(n),e.set(s,[o])):r>=a.length?(o=new Hf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ob=`uniform sampler2D shadow_pass;
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
}`,lb=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],cb=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Wf=new pt,Tr=new F,Cl=new F;function ub(n,e,t){let i=new Tm;const s=new Le,r=new Le,a=new Ct,o=new bv,l=new Ev,c={},u=t.maxTextureSize,f={[Gi]:hn,[hn]:Gi,[di]:di},h=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:ab,fragmentShader:ob}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Wt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let p=this.type;this.render=function(b,P,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Y0&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=eo);const A=n.getRenderTarget(),L=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),k=n.state;k.setBlending(gi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const $=p!==this.type;$&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(N=>N.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,N=b.length;X<N;X++){const H=b[X],z=H.shadow;if(z===void 0){Fe("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const j=z.getFrameExtents();s.multiply(j),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,z.mapSize.y=r.y));const re=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=re,z.map===null||$===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Rr){if(H.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ei(s.x,s.y,{format:os,type:yi,minFilter:en,magFilter:en,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new tr(s.x,s.y,zn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=Mi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Xt,z.map.depthTexture.magFilter=Xt}else H.isPointLight?(z.map=new Fm(s.x),z.map.depthTexture=new nv(s.x,ii)):(z.map=new ei(s.x,s.y),z.map.depthTexture=new tr(s.x,s.y,ii)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=Mi,this.type===eo?(z.map.depthTexture.compareFunction=re?Gu:Vu,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Xt,z.map.depthTexture.magFilter=Xt);z.camera.updateProjectionMatrix()}const de=z.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<de;ue++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(z.map),n.clear());const me=z.getViewport(ue);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),k.viewport(a)}if(H.isPointLight){const me=z.camera,Ie=z.matrix,We=H.distance||me.far;We!==me.far&&(me.far=We,me.updateProjectionMatrix()),Tr.setFromMatrixPosition(H.matrixWorld),me.position.copy(Tr),Cl.copy(me.position),Cl.add(lb[ue]),me.up.copy(cb[ue]),me.lookAt(Cl),me.updateMatrixWorld(),Ie.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Wf.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Wf,me.coordinateSystem,me.reversedDepth)}else z.updateMatrices(H);i=z.getFrustum(),M(P,v,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Rr&&S(z,v),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,L,D)};function S(b,P){const v=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ei(s.x,s.y,{format:os,type:yi})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(P,null,v,h,y,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(P,null,v,d,y,null)}function E(b,P,v,A){let L=null;const D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)L=D;else if(L=v.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const k=L.uuid,$=P.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let N=X[$];N===void 0&&(N=L.clone(),X[$]=N,P.addEventListener("dispose",w)),L=N}if(L.visible=P.visible,L.wireframe=P.wireframe,A===Rr?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:f[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const k=n.properties.get(L);k.light=v}return L}function M(b,P,v,A,L){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===Rr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const $=e.update(b),X=b.material;if(Array.isArray(X)){const N=$.groups;for(let H=0,z=N.length;H<z;H++){const j=N[H],re=X[j.materialIndex];if(re&&re.visible){const de=E(b,re,A,L);b.onBeforeShadow(n,b,P,v,$,de,j),n.renderBufferDirect(v,null,$,de,b,j),b.onAfterShadow(n,b,P,v,$,de,j)}}}else if(X.visible){const N=E(b,X,A,L);b.onBeforeShadow(n,b,P,v,$,N,null),n.renderBufferDirect(v,null,$,N,b,null),b.onAfterShadow(n,b,P,v,$,N,null)}}const k=b.children;for(let $=0,X=k.length;$<X;$++)M(k[$],P,v,A,L)}function w(b){b.target.removeEventListener("dispose",w);for(const v in c){const A=c[v],L=b.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function hb(n,e){function t(){let I=!1;const ce=new Ct;let K=null;const ge=new Ct(0,0,0,0);return{setMask:function(xe){K!==xe&&!I&&(n.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){I=xe},setClear:function(xe,oe,Te,Me,ht){ht===!0&&(xe*=Me,oe*=Me,Te*=Me),ce.set(xe,oe,Te,Me),ge.equals(ce)===!1&&(n.clearColor(xe,oe,Te,Me),ge.copy(ce))},reset:function(){I=!1,K=null,ge.set(-1,0,0,0)}}}function i(){let I=!1,ce=!1,K=null,ge=null,xe=null;return{setReversed:function(oe){if(ce!==oe){const Te=e.get("EXT_clip_control");oe?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ce=oe;const Me=xe;xe=null,this.setClear(Me)}},getReversed:function(){return ce},setTest:function(oe){oe?he(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(oe){K!==oe&&!I&&(n.depthMask(oe),K=oe)},setFunc:function(oe){if(ce&&(oe=Rx[oe]),ge!==oe){switch(oe){case lc:n.depthFunc(n.NEVER);break;case cc:n.depthFunc(n.ALWAYS);break;case uc:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case hc:n.depthFunc(n.EQUAL);break;case fc:n.depthFunc(n.GEQUAL);break;case dc:n.depthFunc(n.GREATER);break;case pc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=oe}},setLocked:function(oe){I=oe},setClear:function(oe){xe!==oe&&(xe=oe,ce&&(oe=1-oe),n.clearDepth(oe))},reset:function(){I=!1,K=null,ge=null,xe=null,ce=!1}}}function s(){let I=!1,ce=null,K=null,ge=null,xe=null,oe=null,Te=null,Me=null,ht=null;return{setTest:function(ft){I||(ft?he(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(ft){ce!==ft&&!I&&(n.stencilMask(ft),ce=ft)},setFunc:function(ft,Xe,Ye){(K!==ft||ge!==Xe||xe!==Ye)&&(n.stencilFunc(ft,Xe,Ye),K=ft,ge=Xe,xe=Ye)},setOp:function(ft,Xe,Ye){(oe!==ft||Te!==Xe||Me!==Ye)&&(n.stencilOp(ft,Xe,Ye),oe=ft,Te=Xe,Me=Ye)},setLocked:function(ft){I=ft},setClear:function(ft){ht!==ft&&(n.clearStencil(ft),ht=ft)},reset:function(){I=!1,ce=null,K=null,ge=null,xe=null,oe=null,Te=null,Me=null,ht=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],y=null,m=!1,p=null,S=null,E=null,M=null,w=null,b=null,P=null,v=new ke(0,0,0),A=0,L=!1,D=null,k=null,$=null,X=null,N=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),z=j>=1):re.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),z=j>=2);let de=null,ue={};const me=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),We=new Ct().fromArray(me),Ne=new Ct().fromArray(Ie);function se(I,ce,K,ge){const xe=new Uint8Array(4),oe=n.createTexture();n.bindTexture(I,oe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<K;Te++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(ce+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return oe}const le={};le[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(n.DEPTH_TEST),a.setFunc(Qs),et(!1),it(Fh),he(n.CULL_FACE),He(gi);function he(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Ee(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Re(I,ce){return h[I]!==ce?(n.bindFramebuffer(I,ce),h[I]=ce,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ce),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(I,ce){let K=g,ge=!1;if(I){K=d.get(ce),K===void 0&&(K=[],d.set(ce,K));const xe=I.textures;if(K.length!==xe.length||K[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Te=xe.length;oe<Te;oe++)K[oe]=n.COLOR_ATTACHMENT0+oe;K.length=xe.length,ge=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ge=!0);ge&&n.drawBuffers(K)}function Je(I){return y!==I?(n.useProgram(I),y=I,!0):!1}const Oe={[es]:n.FUNC_ADD,[Z0]:n.FUNC_SUBTRACT,[J0]:n.FUNC_REVERSE_SUBTRACT};Oe[Q0]=n.MIN,Oe[ex]=n.MAX;const je={[tx]:n.ZERO,[nx]:n.ONE,[ix]:n.SRC_COLOR,[ac]:n.SRC_ALPHA,[cx]:n.SRC_ALPHA_SATURATE,[ox]:n.DST_COLOR,[rx]:n.DST_ALPHA,[sx]:n.ONE_MINUS_SRC_COLOR,[oc]:n.ONE_MINUS_SRC_ALPHA,[lx]:n.ONE_MINUS_DST_COLOR,[ax]:n.ONE_MINUS_DST_ALPHA,[ux]:n.CONSTANT_COLOR,[hx]:n.ONE_MINUS_CONSTANT_COLOR,[fx]:n.CONSTANT_ALPHA,[dx]:n.ONE_MINUS_CONSTANT_ALPHA};function He(I,ce,K,ge,xe,oe,Te,Me,ht,ft){if(I===gi){m===!0&&(Ee(n.BLEND),m=!1);return}if(m===!1&&(he(n.BLEND),m=!0),I!==K0){if(I!==p||ft!==L){if((S!==es||w!==es)&&(n.blendEquation(n.FUNC_ADD),S=es,w=es),ft)switch(I){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vs:n.blendFunc(n.ONE,n.ONE);break;case Oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",I);break}else switch(I){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Oh:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",I);break}E=null,M=null,b=null,P=null,v.set(0,0,0),A=0,p=I,L=ft}return}xe=xe||ce,oe=oe||K,Te=Te||ge,(ce!==S||xe!==w)&&(n.blendEquationSeparate(Oe[ce],Oe[xe]),S=ce,w=xe),(K!==E||ge!==M||oe!==b||Te!==P)&&(n.blendFuncSeparate(je[K],je[ge],je[oe],je[Te]),E=K,M=ge,b=oe,P=Te),(Me.equals(v)===!1||ht!==A)&&(n.blendColor(Me.r,Me.g,Me.b,ht),v.copy(Me),A=ht),p=I,L=!1}function Ve(I,ce){I.side===di?Ee(n.CULL_FACE):he(n.CULL_FACE);let K=I.side===hn;ce&&(K=!K),et(K),I.blending===Ks&&I.transparent===!1?He(gi):He(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ge=I.stencilWrite;o.setTest(ge),ge&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function it(I){I!==q0?(he(n.CULL_FACE),I!==k&&(I===Fh?n.cullFace(n.BACK):I===$0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),k=I}function ct(I){I!==$&&(z&&n.lineWidth(I),$=I)}function ut(I,ce,K){I?(he(n.POLYGON_OFFSET_FILL),(X!==ce||N!==K)&&(X=ce,N=K,a.getReversed()&&(ce=-ce),n.polygonOffset(ce,K))):Ee(n.POLYGON_OFFSET_FILL)}function st(I){I?he(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function xt(I){I===void 0&&(I=n.TEXTURE0+H-1),de!==I&&(n.activeTexture(I),de=I)}function B(I,ce,K){K===void 0&&(de===null?K=n.TEXTURE0+H-1:K=de);let ge=ue[K];ge===void 0&&(ge={type:void 0,texture:void 0},ue[K]=ge),(ge.type!==I||ge.texture!==ce)&&(de!==K&&(n.activeTexture(K),de=K),n.bindTexture(I,ce||le[I]),ge.type=I,ge.texture=ce)}function Ft(){const I=ue[de];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ze(){try{n.compressedTexImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function _(){try{n.texSubImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function R(){try{n.texSubImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function U(){try{n.compressedTexSubImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function O(){try{n.compressedTexSubImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function ee(){try{n.texStorage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function J(){try{n.texStorage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function V(){try{n.texImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function W(){try{n.texImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function te(I){return f[I]!==void 0?f[I]:n.getParameter(I)}function Q(I,ce){f[I]!==ce&&(n.pixelStorei(I,ce),f[I]=ce)}function ie(I){We.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),We.copy(I))}function ne(I){Ne.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ne.copy(I))}function fe(I,ce){let K=c.get(ce);K===void 0&&(K=new WeakMap,c.set(ce,K));let ge=K.get(I);ge===void 0&&(ge=n.getUniformBlockIndex(ce,I.name),K.set(I,ge))}function pe(I,ce){const ge=c.get(ce).get(I);l.get(ce)!==ge&&(n.uniformBlockBinding(ce,ge,I.__bindingPointIndex),l.set(ce,ge))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},de=null,ue={},h={},d=new WeakMap,g=[],y=null,m=!1,p=null,S=null,E=null,M=null,w=null,b=null,P=null,v=new ke(0,0,0),A=0,L=!1,D=null,k=null,$=null,X=null,N=null,We.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:Ee,bindFramebuffer:Re,drawBuffers:Pe,useProgram:Je,setBlending:He,setMaterial:Ve,setFlipSided:et,setCullFace:it,setLineWidth:ct,setPolygonOffset:ut,setScissorTest:st,activeTexture:xt,bindTexture:B,unbindTexture:Ft,compressedTexImage2D:Ze,compressedTexImage3D:C,texImage2D:V,texImage3D:W,pixelStorei:Q,getParameter:te,updateUBOMapping:fe,uniformBlockBinding:pe,texStorage2D:ee,texStorage3D:J,texSubImage2D:_,texSubImage3D:R,compressedTexSubImage2D:U,compressedTexSubImage3D:O,scissor:ie,viewport:ne,reset:ye}}function fb(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,_){return g?new OffscreenCanvas(C,_):go("canvas")}function m(C,_,R){let U=1;const O=Ze(C);if((O.width>R||O.height>R)&&(U=R/Math.max(O.width,O.height)),U<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(U*O.width),J=Math.floor(U*O.height);h===void 0&&(h=y(ee,J));const V=_?y(ee,J):h;return V.width=ee,V.height=J,V.getContext("2d").drawImage(C,0,0,ee,J),Fe("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+ee+"x"+J+")."),V}else return"data"in C&&Fe("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,_,R,U,O,ee=!1){if(C!==null){if(n[C]!==void 0)return n[C];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J;U&&(J=e.get("EXT_texture_norm16"),J||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=_;if(_===n.RED&&(R===n.FLOAT&&(V=n.R32F),R===n.HALF_FLOAT&&(V=n.R16F),R===n.UNSIGNED_BYTE&&(V=n.R8),R===n.UNSIGNED_SHORT&&J&&(V=J.R16_EXT),R===n.SHORT&&J&&(V=J.R16_SNORM_EXT)),_===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.R8UI),R===n.UNSIGNED_SHORT&&(V=n.R16UI),R===n.UNSIGNED_INT&&(V=n.R32UI),R===n.BYTE&&(V=n.R8I),R===n.SHORT&&(V=n.R16I),R===n.INT&&(V=n.R32I)),_===n.RG&&(R===n.FLOAT&&(V=n.RG32F),R===n.HALF_FLOAT&&(V=n.RG16F),R===n.UNSIGNED_BYTE&&(V=n.RG8),R===n.UNSIGNED_SHORT&&J&&(V=J.RG16_EXT),R===n.SHORT&&J&&(V=J.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RG8UI),R===n.UNSIGNED_SHORT&&(V=n.RG16UI),R===n.UNSIGNED_INT&&(V=n.RG32UI),R===n.BYTE&&(V=n.RG8I),R===n.SHORT&&(V=n.RG16I),R===n.INT&&(V=n.RG32I)),_===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RGB8UI),R===n.UNSIGNED_SHORT&&(V=n.RGB16UI),R===n.UNSIGNED_INT&&(V=n.RGB32UI),R===n.BYTE&&(V=n.RGB8I),R===n.SHORT&&(V=n.RGB16I),R===n.INT&&(V=n.RGB32I)),_===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),R===n.UNSIGNED_INT&&(V=n.RGBA32UI),R===n.BYTE&&(V=n.RGBA8I),R===n.SHORT&&(V=n.RGBA16I),R===n.INT&&(V=n.RGBA32I)),_===n.RGB&&(R===n.UNSIGNED_SHORT&&J&&(V=J.RGB16_EXT),R===n.SHORT&&J&&(V=J.RGB16_SNORM_EXT),R===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),R===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),_===n.RGBA){const W=ee?po:nt.getTransfer(O);R===n.FLOAT&&(V=n.RGBA32F),R===n.HALF_FLOAT&&(V=n.RGBA16F),R===n.UNSIGNED_BYTE&&(V=W===dt?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT&&J&&(V=J.RGBA16_EXT),R===n.SHORT&&J&&(V=J.RGBA16_SNORM_EXT),R===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function w(C,_){let R;return C?_===null||_===ii||_===$r?R=n.DEPTH24_STENCIL8:_===zn?R=n.DEPTH32F_STENCIL8:_===qr&&(R=n.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ii||_===$r?R=n.DEPTH_COMPONENT24:_===zn?R=n.DEPTH_COMPONENT32F:_===qr&&(R=n.DEPTH_COMPONENT16),R}function b(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==en?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function P(C){const _=C.target;_.removeEventListener("dispose",P),A(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function v(C){const _=C.target;_.removeEventListener("dispose",v),D(_)}function A(C){const _=i.get(C);if(_.__webglInit===void 0)return;const R=C.source,U=d.get(R);if(U){const O=U[_.__cacheKey];O.usedTimes--,O.usedTimes===0&&L(C),Object.keys(U).length===0&&d.delete(R)}i.remove(C)}function L(C){const _=i.get(C);n.deleteTexture(_.__webglTexture);const R=C.source,U=d.get(R);delete U[_.__cacheKey],a.memory.textures--}function D(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(_.__webglFramebuffer[U]))for(let O=0;O<_.__webglFramebuffer[U].length;O++)n.deleteFramebuffer(_.__webglFramebuffer[U][O]);else n.deleteFramebuffer(_.__webglFramebuffer[U]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[U])}else{if(Array.isArray(_.__webglFramebuffer))for(let U=0;U<_.__webglFramebuffer.length;U++)n.deleteFramebuffer(_.__webglFramebuffer[U]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let U=0;U<_.__webglColorRenderbuffer.length;U++)_.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[U]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const R=C.textures;for(let U=0,O=R.length;U<O;U++){const ee=i.get(R[U]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(R[U])}i.remove(C)}let k=0;function $(){k=0}function X(){return k}function N(C){k=C}function H(){const C=k;return C>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function z(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function j(C,_){const R=i.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&R.__version!==C.version){const U=C.image;if(U===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(R,C,_);return}}else C.isExternalTexture&&(R.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+_)}function re(C,_){const R=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&R.__version!==C.version){Ee(R,C,_);return}else C.isExternalTexture&&(R.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+_)}function de(C,_){const R=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&R.__version!==C.version){Ee(R,C,_);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+_)}function ue(C,_){const R=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&R.__version!==C.version){Re(R,C,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+_)}const me={[mc]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[gc]:n.MIRRORED_REPEAT},Ie={[Xt]:n.NEAREST,[gx]:n.NEAREST_MIPMAP_NEAREST,[fa]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[$o]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},We={[_x]:n.NEVER,[Ex]:n.ALWAYS,[yx]:n.LESS,[Vu]:n.LEQUAL,[Mx]:n.EQUAL,[Gu]:n.GEQUAL,[Sx]:n.GREATER,[bx]:n.NOTEQUAL};function Ne(C,_){if(_.type===zn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===en||_.magFilter===$o||_.magFilter===fa||_.magFilter===ns||_.minFilter===en||_.minFilter===$o||_.minFilter===fa||_.minFilter===ns)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,me[_.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,me[_.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,me[_.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ie[_.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ie[_.minFilter]),_.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,We[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==fa&&_.minFilter!==ns||_.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function se(C,_){let R=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",P));const U=_.source;let O=d.get(U);O===void 0&&(O={},d.set(U,O));const ee=z(_);if(ee!==C.__cacheKey){O[ee]===void 0&&(O[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),O[ee].usedTimes++;const J=O[C.__cacheKey];J!==void 0&&(O[C.__cacheKey].usedTimes--,J.usedTimes===0&&L(_)),C.__cacheKey=ee,C.__webglTexture=O[ee].texture}return R}function le(C,_,R){return Math.floor(Math.floor(C/R)/_)}function he(C,_,R,U){const ee=C.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,R,U,_.data);else{ee.sort((Q,ie)=>Q.start-ie.start);let J=0;for(let Q=1;Q<ee.length;Q++){const ie=ee[J],ne=ee[Q],fe=ie.start+ie.count,pe=le(ne.start,_.width,4),ye=le(ie.start,_.width,4);ne.start<=fe+1&&pe===ye&&le(ne.start+ne.count-1,_.width,4)===pe?ie.count=Math.max(ie.count,ne.start+ne.count-ie.start):(++J,ee[J]=ne)}ee.length=J+1;const V=t.getParameter(n.UNPACK_ROW_LENGTH),W=t.getParameter(n.UNPACK_SKIP_PIXELS),te=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Q=0,ie=ee.length;Q<ie;Q++){const ne=ee[Q],fe=Math.floor(ne.start/4),pe=Math.ceil(ne.count/4),ye=fe%_.width,I=Math.floor(fe/_.width),ce=pe,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,ye,I,ce,K,R,U,_.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,V),t.pixelStorei(n.UNPACK_SKIP_PIXELS,W),t.pixelStorei(n.UNPACK_SKIP_ROWS,te)}}function Ee(C,_,R){let U=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(U=n.TEXTURE_3D);const O=se(C,_),ee=_.source;t.bindTexture(U,C.__webglTexture,n.TEXTURE0+R);const J=i.get(ee);if(ee.version!==J.__version||O===!0){if(t.activeTexture(n.TEXTURE0+R),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const K=nt.getPrimaries(nt.workingColorSpace),ge=_.colorSpace===Bi?null:nt.getPrimaries(_.colorSpace),xe=_.colorSpace===Bi||K===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let W=m(_.image,!1,s.maxTextureSize);W=Ft(_,W);const te=r.convert(_.format,_.colorSpace),Q=r.convert(_.type);let ie=M(_.internalFormat,te,Q,_.normalized,_.colorSpace,_.isVideoTexture);Ne(U,_);let ne;const fe=_.mipmaps,pe=_.isVideoTexture!==!0,ye=J.__version===void 0||O===!0,I=ee.dataReady,ce=b(_,W);if(_.isDepthTexture)ie=w(_.format===is,_.type),ye&&(pe?t.texStorage2D(n.TEXTURE_2D,1,ie,W.width,W.height):t.texImage2D(n.TEXTURE_2D,0,ie,W.width,W.height,0,te,Q,null));else if(_.isDataTexture)if(fe.length>0){pe&&ye&&t.texStorage2D(n.TEXTURE_2D,ce,ie,fe[0].width,fe[0].height);for(let K=0,ge=fe.length;K<ge;K++)ne=fe[K],pe?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ne.width,ne.height,te,Q,ne.data):t.texImage2D(n.TEXTURE_2D,K,ie,ne.width,ne.height,0,te,Q,ne.data);_.generateMipmaps=!1}else pe?(ye&&t.texStorage2D(n.TEXTURE_2D,ce,ie,W.width,W.height),I&&he(_,W,te,Q)):t.texImage2D(n.TEXTURE_2D,0,ie,W.width,W.height,0,te,Q,W.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){pe&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ie,fe[0].width,fe[0].height,W.depth);for(let K=0,ge=fe.length;K<ge;K++)if(ne=fe[K],_.format!==Vn)if(te!==null)if(pe){if(I)if(_.layerUpdates.size>0){const xe=Mf(ne.width,ne.height,_.format,_.type);for(const oe of _.layerUpdates){const Te=ne.data.subarray(oe*xe/ne.data.BYTES_PER_ELEMENT,(oe+1)*xe/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,oe,ne.width,ne.height,1,te,Te)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ne.width,ne.height,W.depth,te,ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ie,ne.width,ne.height,W.depth,0,ne.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ne.width,ne.height,W.depth,te,Q,ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ie,ne.width,ne.height,W.depth,0,te,Q,ne.data)}else{pe&&ye&&t.texStorage2D(n.TEXTURE_2D,ce,ie,fe[0].width,fe[0].height);for(let K=0,ge=fe.length;K<ge;K++)ne=fe[K],_.format!==Vn?te!==null?pe?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ne.width,ne.height,te,ne.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ie,ne.width,ne.height,0,ne.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ne.width,ne.height,te,Q,ne.data):t.texImage2D(n.TEXTURE_2D,K,ie,ne.width,ne.height,0,te,Q,ne.data)}else if(_.isDataArrayTexture)if(pe){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ie,W.width,W.height,W.depth),I)if(_.layerUpdates.size>0){const K=Mf(W.width,W.height,_.format,_.type);for(const ge of _.layerUpdates){const xe=W.data.subarray(ge*K/W.data.BYTES_PER_ELEMENT,(ge+1)*K/W.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,W.width,W.height,1,te,Q,xe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,te,Q,W.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ie,W.width,W.height,W.depth,0,te,Q,W.data);else if(_.isData3DTexture)pe?(ye&&t.texStorage3D(n.TEXTURE_3D,ce,ie,W.width,W.height,W.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,te,Q,W.data)):t.texImage3D(n.TEXTURE_3D,0,ie,W.width,W.height,W.depth,0,te,Q,W.data);else if(_.isFramebufferTexture){if(ye)if(pe)t.texStorage2D(n.TEXTURE_2D,ce,ie,W.width,W.height);else{let K=W.width,ge=W.height;for(let xe=0;xe<ce;xe++)t.texImage2D(n.TEXTURE_2D,xe,ie,K,ge,0,te,Q,null),K>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),W.parentNode!==K){K.appendChild(W),f.add(_),K.onpaint=ge=>{const xe=ge.changedElements;for(const oe of f)xe.includes(oe.image)&&(oe.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,W);else{const xe=n.RGBA,oe=n.RGBA,Te=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xe,oe,Te,W)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(fe.length>0){if(pe&&ye){const K=Ze(fe[0]);t.texStorage2D(n.TEXTURE_2D,ce,ie,K.width,K.height)}for(let K=0,ge=fe.length;K<ge;K++)ne=fe[K],pe?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,te,Q,ne):t.texImage2D(n.TEXTURE_2D,K,ie,te,Q,ne);_.generateMipmaps=!1}else if(pe){if(ye){const K=Ze(W);t.texStorage2D(n.TEXTURE_2D,ce,ie,K.width,K.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,Q,W)}else t.texImage2D(n.TEXTURE_2D,0,ie,te,Q,W);p(_)&&S(U),J.__version=ee.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Re(C,_,R){if(_.image.length!==6)return;const U=se(C,_),O=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+R);const ee=i.get(O);if(O.version!==ee.__version||U===!0){t.activeTexture(n.TEXTURE0+R);const J=nt.getPrimaries(nt.workingColorSpace),V=_.colorSpace===Bi?null:nt.getPrimaries(_.colorSpace),W=_.colorSpace===Bi||J===V?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);const te=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ie=[];for(let oe=0;oe<6;oe++)!te&&!Q?ie[oe]=m(_.image[oe],!0,s.maxCubemapSize):ie[oe]=Q?_.image[oe].image:_.image[oe],ie[oe]=Ft(_,ie[oe]);const ne=ie[0],fe=r.convert(_.format,_.colorSpace),pe=r.convert(_.type),ye=M(_.internalFormat,fe,pe,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,ce=ee.__version===void 0||U===!0,K=O.dataReady;let ge=b(_,ne);Ne(n.TEXTURE_CUBE_MAP,_);let xe;if(te){I&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ye,ne.width,ne.height);for(let oe=0;oe<6;oe++){xe=ie[oe].mipmaps;for(let Te=0;Te<xe.length;Te++){const Me=xe[Te];_.format!==Vn?fe!==null?I?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Me.width,Me.height,fe,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,ye,Me.width,Me.height,0,Me.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Me.width,Me.height,fe,pe,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,ye,Me.width,Me.height,0,fe,pe,Me.data)}}}else{if(xe=_.mipmaps,I&&ce){xe.length>0&&ge++;const oe=Ze(ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ye,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Q){I?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ie[oe].width,ie[oe].height,fe,pe,ie[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ye,ie[oe].width,ie[oe].height,0,fe,pe,ie[oe].data);for(let Te=0;Te<xe.length;Te++){const ht=xe[Te].image[oe].image;I?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,ht.width,ht.height,fe,pe,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,ye,ht.width,ht.height,0,fe,pe,ht.data)}}else{I?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,fe,pe,ie[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ye,fe,pe,ie[oe]);for(let Te=0;Te<xe.length;Te++){const Me=xe[Te];I?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,fe,pe,Me.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,ye,fe,pe,Me.image[oe])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),ee.__version=O.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Pe(C,_,R,U,O,ee){const J=r.convert(R.format,R.colorSpace),V=r.convert(R.type),W=M(R.internalFormat,J,V,R.normalized,R.colorSpace),te=i.get(_),Q=i.get(R);if(Q.__renderTarget=_,!te.__hasExternalTextures){const ie=Math.max(1,_.width>>ee),ne=Math.max(1,_.height>>ee);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,ee,W,ie,ne,_.depth,0,J,V,null):t.texImage2D(O,ee,W,ie,ne,0,J,V,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,O,Q.__webglTexture,0,st(_)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,O,Q.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(C,_,R){if(n.bindRenderbuffer(n.RENDERBUFFER,C),_.depthBuffer){const U=_.depthTexture,O=U&&U.isDepthTexture?U.type:null,ee=w(_.stencilBuffer,O),J=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st(_),ee,_.width,_.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,st(_),ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,C)}else{const U=_.textures;for(let O=0;O<U.length;O++){const ee=U[O],J=r.convert(ee.format,ee.colorSpace),V=r.convert(ee.type),W=M(ee.internalFormat,J,V,ee.normalized,ee.colorSpace);xt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st(_),W,_.width,_.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,st(_),W,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,W,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(C,_,R){const U=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const O=i.get(_.depthTexture);if(O.__renderTarget=_,(!O.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),U){if(O.__webglInit===void 0&&(O.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),O.__webglTexture===void 0){O.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,_.depthTexture);const te=r.convert(_.depthTexture.format),Q=r.convert(_.depthTexture.type);let ie;_.depthTexture.format===Mi?ie=n.DEPTH_COMPONENT24:_.depthTexture.format===is&&(ie=n.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ie,_.width,_.height,0,te,Q,null)}}else j(_.depthTexture,0);const ee=O.__webglTexture,J=st(_),V=U?n.TEXTURE_CUBE_MAP_POSITIVE_X+R:n.TEXTURE_2D,W=_.depthTexture.format===is?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Mi)xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,V,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,W,V,ee,0);else if(_.depthTexture.format===is)xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,V,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,W,V,ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(C){const _=i.get(C),R=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const U=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),U){const O=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,U.removeEventListener("dispose",O)};U.addEventListener("dispose",O),_.__depthDisposeCallback=O}_.__boundDepthTexture=U}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(R)for(let U=0;U<6;U++)Oe(_.__webglFramebuffer[U],C,U);else{const U=C.texture.mipmaps;U&&U.length>0?Oe(_.__webglFramebuffer[0],C,0):Oe(_.__webglFramebuffer,C,0)}else if(R){_.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[U]),_.__webglDepthbuffer[U]===void 0)_.__webglDepthbuffer[U]=n.createRenderbuffer(),Je(_.__webglDepthbuffer[U],C,!1);else{const O=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer[U];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,ee)}}else{const U=C.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Je(_.__webglDepthbuffer,C,!1);else{const O=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(C,_,R){const U=i.get(C);_!==void 0&&Pe(U.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&je(C)}function Ve(C){const _=C.texture,R=i.get(C),U=i.get(_);C.addEventListener("dispose",v);const O=C.textures,ee=C.isWebGLCubeRenderTarget===!0,J=O.length>1;if(J||(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=_.version,a.memory.textures++),ee){R.__webglFramebuffer=[];for(let V=0;V<6;V++)if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer[V]=[];for(let W=0;W<_.mipmaps.length;W++)R.__webglFramebuffer[V][W]=n.createFramebuffer()}else R.__webglFramebuffer[V]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer=[];for(let V=0;V<_.mipmaps.length;V++)R.__webglFramebuffer[V]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(J)for(let V=0,W=O.length;V<W;V++){const te=i.get(O[V]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&xt(C)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let V=0;V<O.length;V++){const W=O[V];R.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[V]);const te=r.convert(W.format,W.colorSpace),Q=r.convert(W.type),ie=M(W.internalFormat,te,Q,W.normalized,W.colorSpace,C.isXRRenderTarget===!0),ne=st(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,ie,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,R.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(R.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,_);for(let V=0;V<6;V++)if(_.mipmaps&&_.mipmaps.length>0)for(let W=0;W<_.mipmaps.length;W++)Pe(R.__webglFramebuffer[V][W],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,W);else Pe(R.__webglFramebuffer[V],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);p(_)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){for(let V=0,W=O.length;V<W;V++){const te=O[V],Q=i.get(te);let ie=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,Q.__webglTexture),Ne(ie,te),Pe(R.__webglFramebuffer,C,te,n.COLOR_ATTACHMENT0+V,ie,0),p(te)&&S(ie)}t.unbindTexture()}else{let V=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(V=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(V,U.__webglTexture),Ne(V,_),_.mipmaps&&_.mipmaps.length>0)for(let W=0;W<_.mipmaps.length;W++)Pe(R.__webglFramebuffer[W],C,_,n.COLOR_ATTACHMENT0,V,W);else Pe(R.__webglFramebuffer,C,_,n.COLOR_ATTACHMENT0,V,0);p(_)&&S(V),t.unbindTexture()}C.depthBuffer&&je(C)}function et(C){const _=C.textures;for(let R=0,U=_.length;R<U;R++){const O=_[R];if(p(O)){const ee=E(C),J=i.get(O).__webglTexture;t.bindTexture(ee,J),S(ee),t.unbindTexture()}}}const it=[],ct=[];function ut(C){if(C.samples>0){if(xt(C)===!1){const _=C.textures,R=C.width,U=C.height;let O=n.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=i.get(C),V=_.length>1;if(V)for(let te=0;te<_.length;te++)t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer);const W=C.texture.mipmaps;W&&W.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let te=0;te<_.length;te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),V){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,J.__webglColorRenderbuffer[te]);const Q=i.get(_[te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,R,U,0,0,R,U,O,n.NEAREST),l===!0&&(it.length=0,ct.length=0,it.push(n.COLOR_ATTACHMENT0+te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(it.push(ee),ct.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ct)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let te=0;te<_.length;te++){t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,J.__webglColorRenderbuffer[te]);const Q=i.get(_[te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const _=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function st(C){return Math.min(s.maxSamples,C.samples)}function xt(C){const _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function B(C){const _=a.render.frame;u.get(C)!==_&&(u.set(C,_),C.update())}function Ft(C,_){const R=C.colorSpace,U=C.format,O=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||R!==fo&&R!==Bi&&(nt.getTransfer(R)===dt?(U!==Vn||O!==Rn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",R)),_}function Ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=$,this.getTextureUnits=X,this.setTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=re,this.setTexture3D=de,this.setTextureCube=ue,this.rebindTextures=He,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function db(n,e){function t(i,s=Bi){let r;const a=nt.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Uu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cm)return n.BYTE;if(i===um)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===Iu)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===dm)return n.ALPHA;if(i===pm)return n.RGB;if(i===Vn)return n.RGBA;if(i===Mi)return n.DEPTH_COMPONENT;if(i===is)return n.DEPTH_STENCIL;if(i===Ou)return n.RED;if(i===Bu)return n.RED_INTEGER;if(i===os)return n.RG;if(i===ku)return n.RG_INTEGER;if(i===zu)return n.RGBA_INTEGER;if(i===to||i===no||i===io||i===so)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xc||i===vc||i===_c||i===yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mc||i===Sc||i===bc||i===Ec||i===Tc||i===uo||i===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Mc||i===Sc)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ec)return r.COMPRESSED_R11_EAC;if(i===Tc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===uo)return r.COMPRESSED_RG11_EAC;if(i===wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ac||i===Rc||i===Cc||i===Pc||i===Nc||i===Dc||i===Lc||i===Ic||i===Uc||i===Fc||i===Oc||i===Bc||i===kc||i===zc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ac)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ic)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vc||i===Gc||i===Hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Vc)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wc||i===jc||i===ho||i===Xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
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

}`;class gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Rm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new si({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xb extends hs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const y=typeof XRWebGLBinding<"u",m=new gb,p={},S=t.getContextAttributes();let E=null,M=null;const w=[],b=[],P=new Le;let v=null;const A=new vn;A.viewport=new Ct;const L=new vn;L.viewport=new Ct;const D=[A,L],k=new wv;let $=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let le=w[se];return le===void 0&&(le=new nl,w[se]=le),le.getTargetRaySpace()},this.getControllerGrip=function(se){let le=w[se];return le===void 0&&(le=new nl,w[se]=le),le.getGripSpace()},this.getHand=function(se){let le=w[se];return le===void 0&&(le=new nl,w[se]=le),le.getHandSpace()};function N(se){const le=b.indexOf(se.inputSource);if(le===-1)return;const he=w[le];he!==void 0&&(he.update(se.inputSource,se.frame,c||a),he.dispatchEvent({type:se.type,data:se.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",z);for(let se=0;se<w.length;se++){const le=b[se];le!==null&&(b[se]=null,w[se].disconnect(le))}$=null,X=null,m.reset();for(const se in p)delete p[se];e.setRenderTarget(E),d=null,h=null,f=null,s=null,M=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ee=null,Re=null;S.depth&&(Re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?is:Mi,Ee=S.stencil?$r:ii);const Pe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new ei(h.textureWidth,h.textureHeight,{format:Vn,type:Rn,depthTexture:new tr(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ei(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(se){for(let le=0;le<se.removed.length;le++){const he=se.removed[le],Ee=b.indexOf(he);Ee>=0&&(b[Ee]=null,w[Ee].disconnect(he))}for(let le=0;le<se.added.length;le++){const he=se.added[le];let Ee=b.indexOf(he);if(Ee===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=b.length){b.push(he),Ee=Pe;break}else if(b[Pe]===null){b[Pe]=he,Ee=Pe;break}if(Ee===-1)break}const Re=w[Ee];Re&&Re.connect(he)}}const j=new F,re=new F;function de(se,le,he){j.setFromMatrixPosition(le.matrixWorld),re.setFromMatrixPosition(he.matrixWorld);const Ee=j.distanceTo(re),Re=le.projectionMatrix.elements,Pe=he.projectionMatrix.elements,Je=Re[14]/(Re[10]-1),Oe=Re[14]/(Re[10]+1),je=(Re[9]+1)/Re[5],He=(Re[9]-1)/Re[5],Ve=(Re[8]-1)/Re[0],et=(Pe[8]+1)/Pe[0],it=Je*Ve,ct=Je*et,ut=Ee/(-Ve+et),st=ut*-Ve;if(le.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(st),se.translateZ(ut),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Re[10]===-1)se.projectionMatrix.copy(le.projectionMatrix),se.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const xt=Je+ut,B=Oe+ut,Ft=it-st,Ze=ct+(Ee-st),C=je*Oe/B*xt,_=He*Oe/B*xt;se.projectionMatrix.makePerspective(Ft,Ze,C,_,xt,B),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ue(se,le){le===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(le.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let le=se.near,he=se.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(he=m.depthFar)),k.near=L.near=A.near=le,k.far=L.far=A.far=he,($!==k.near||X!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),$=k.near,X=k.far),k.layers.mask=se.layers.mask|6,A.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;const Ee=se.parent,Re=k.cameras;ue(k,Ee);for(let Pe=0;Pe<Re.length;Pe++)ue(Re[Pe],Ee);Re.length===2?de(k,A,L):k.projectionMatrix.copy(A.projectionMatrix),me(se,k,Ee)};function me(se,le,he){he===null?se.matrix.copy(le.matrixWorld):(se.matrix.copy(he.matrixWorld),se.matrix.invert(),se.matrix.multiply(le.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(le.projectionMatrix),se.projectionMatrixInverse.copy(le.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=$c*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(se){return p[se]};let Ie=null;function We(se,le){if(u=le.getViewerPose(c||a),g=le,u!==null){const he=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Ee=!1;he.length!==k.cameras.length&&(k.cameras.length=0,Ee=!0);for(let Oe=0;Oe<he.length;Oe++){const je=he[Oe];let He=null;if(d!==null)He=d.getViewport(je);else{const et=f.getViewSubImage(h,je);He=et.viewport,Oe===0&&(e.setRenderTargetTextures(M,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(M))}let Ve=D[Oe];Ve===void 0&&(Ve=new vn,Ve.layers.enable(Oe),Ve.viewport=new Ct,D[Oe]=Ve),Ve.matrix.fromArray(je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(He.x,He.y,He.width,He.height),Oe===0&&(k.matrix.copy(Ve.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ee===!0&&k.cameras.push(Ve)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const Oe=f.getDepthInformation(he[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,s.renderState)}if(Re&&Re.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let Oe=0;Oe<he.length;Oe++){const je=he[Oe].camera;if(je){let He=p[je];He||(He=new Rm,p[je]=He);const Ve=f.getCameraImage(je);He.sourceTexture=Ve}}}}for(let he=0;he<w.length;he++){const Ee=b[he],Re=w[he];Ee!==null&&Re!==void 0&&Re.update(Ee,le,c||a)}Ie&&Ie(se,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const Ne=new Im;Ne.setAnimationLoop(We),this.setAnimationLoop=function(se){Ie=se},this.dispose=function(){}}}const vb=new pt,Vm=new Ge;Vm.set(-1,0,0,0,1,0,0,0,1);function _b(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Nm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),E=S.envMap,M=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yb(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const b=w.program;i.uniformBlockBinding(M,b)}function c(M,w){let b=s[M.id];b===void 0&&(m(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",S));const P=w.program;i.updateUBOMapping(M,P);const v=e.render.frame;r[M.id]!==v&&(h(M),r[M.id]=v)}function u(M){const w=f();M.__bindingPointIndex=w;const b=n.createBuffer(),P=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const w=s[M.id],b=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let v=0,A=b.length;v<A;v++){const L=b[v];if(Array.isArray(L))for(let D=0,k=L.length;D<k;D++)d(L[D],v,D,P);else d(L,v,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,w,b,P){if(y(M,w,b,P)===!0){const v=M.__offset,A=M.value;if(Array.isArray(A)){let L=0;for(let D=0;D<A.length;D++){const k=A[D],$=p(k);g(k,M.__data,L),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function g(M,w,b){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,b)}function y(M,w,b,P){const v=M.value,A=w+"_"+b;if(P[A]===void 0)return typeof v=="number"||typeof v=="boolean"?P[A]=v:ArrayBuffer.isView(v)?P[A]=v.slice():P[A]=v.clone(),!0;{const L=P[A];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return P[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function m(M){const w=M.uniforms;let b=0;const P=16;for(let A=0,L=w.length;A<L;A++){const D=Array.isArray(w[A])?w[A]:[w[A]];for(let k=0,$=D.length;k<$;k++){const X=D[k],N=Array.isArray(X.value)?X.value:[X.value];for(let H=0,z=N.length;H<z;H++){const j=N[H],re=p(j),de=b%P,ue=de%re.boundary,me=de+ue;b+=ue,me!==0&&P-me<re.storage&&(b+=P-me),X.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=re.storage}}}const v=b%P;return v>0&&(b+=P-v),M.__size=b,M.__cache={},this}function p(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",M),w}function S(M){const w=M.target;w.removeEventListener("dispose",S);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function E(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}const Mb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xn=null;function Sb(){return Xn===null&&(Xn=new bm(Mb,16,16,os,yi),Xn.name="DFG_LUT",Xn.minFilter=en,Xn.magFilter=en,Xn.wrapS=mi,Xn.wrapT=mi,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class Gm{constructor(e={}){const{canvas:t=wx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Rn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const y=d,m=new Set([zu,ku,Bu]),p=new Set([Rn,ii,qr,$r,Uu,Fu]),S=new Uint32Array(4),E=new Int32Array(4),M=new F;let w=null,b=null;const P=[],v=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,k=null,$=null,X=null,N=null;this._outputColorSpace=An;let H=0,z=0,j=null,re=-1,de=null;const ue=new Ct,me=new Ct;let Ie=null;const We=new ke(0);let Ne=0,se=t.width,le=t.height,he=1,Ee=null,Re=null;const Pe=new Ct(0,0,se,le),Je=new Ct(0,0,se,le);let Oe=!1;const je=new Tm;let He=!1,Ve=!1;const et=new pt,it=new F,ct=new Ct,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function xt(){return j===null?he:1}let B=i;function Ft(T,G){return t.getContext(T,G)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Du}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),B===null){const G="webgl2";if(B=Ft(G,T),B===null)throw Ft(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw tt("WebGLRenderer: "+T.message),T}let Ze,C,_,R,U,O,ee,J,V,W,te,Q,ie,ne,fe,pe,ye,I,ce,K,ge,xe,oe;function Te(){Ze=new SM(B),Ze.init(),ge=new db(B,Ze),C=new pM(B,Ze,e,ge),_=new hb(B,Ze),C.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),$=B.createFramebuffer(),X=B.createFramebuffer(),N=B.createFramebuffer(),R=new TM(B),U=new ZS,O=new fb(B,Ze,_,U,C,ge,R),ee=new MM(L),J=new Cv(B),xe=new fM(B,J),V=new bM(B,J,R,xe),W=new AM(B,V,J,xe,R),I=new wM(B,C,O),fe=new mM(U),te=new KS(L,ee,Ze,C,xe,fe),Q=new _b(L,U),ie=new QS,ne=new rb(Ze),ye=new hM(L,ee,_,W,g,l),pe=new ub(L,W,C),oe=new yb(B,R,C,_),ce=new dM(B,Ze,R),K=new EM(B,Ze,R),R.programs=te.programs,L.capabilities=C,L.extensions=Ze,L.properties=U,L.renderLists=ie,L.shadowMap=pe,L.state=_,L.info=R}Te(),y!==Rn&&(A=new CM(y,t.width,t.height,o,s,r));const Me=new xb(L,B);this.xr=Me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(se,le,!1))},this.getSize=function(T){return T.set(se,le)},this.setSize=function(T,G,Z=!0){if(Me.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,le=G,t.width=Math.floor(T*he),t.height=Math.floor(G*he),Z===!0&&(t.style.width=T+"px",t.style.height=G+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(se*he,le*he).floor()},this.setDrawingBufferSize=function(T,G,Z){se=T,le=G,he=Z,t.width=Math.floor(T*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(y===Rn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ue)},this.getViewport=function(T){return T.copy(Pe)},this.setViewport=function(T,G,Z,q){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,G,Z,q),_.viewport(ue.copy(Pe).multiplyScalar(he).round())},this.getScissor=function(T){return T.copy(Je)},this.setScissor=function(T,G,Z,q){T.isVector4?Je.set(T.x,T.y,T.z,T.w):Je.set(T,G,Z,q),_.scissor(me.copy(Je).multiplyScalar(he).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(T){_.setScissorTest(Oe=T)},this.setOpaqueSort=function(T){Ee=T},this.setTransparentSort=function(T){Re=T},this.getClearColor=function(T){return T.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,Z=!0){let q=0;if(T){let Y=!1;if(j!==null){const _e=j.texture.format;Y=m.has(_e)}if(Y){const _e=j.texture.type,Ae=p.has(_e),ve=ye.getClearColor(),Se=ye.getClearAlpha(),we=ve.r,Be=ve.g,ze=ve.b;Ae?(S[0]=we,S[1]=Be,S[2]=ze,S[3]=Se,B.clearBufferuiv(B.COLOR,0,S)):(E[0]=we,E[1]=Be,E[2]=ze,E[3]=Se,B.clearBufferiv(B.COLOR,0,E))}else q|=B.COLOR_BUFFER_BIT}G&&(q|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),k=T},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),ye.dispose(),ie.dispose(),ne.dispose(),U.dispose(),ee.dispose(),W.dispose(),xe.dispose(),oe.dispose(),te.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",_t),Me.removeEventListener("sessionend",rn),fn.stop()};function ht(T){T.preventDefault(),xo("WebGLRenderer: Context Lost."),D=!0}function ft(){xo("WebGLRenderer: Context Restored."),D=!1;const T=R.autoReset,G=pe.enabled,Z=pe.autoUpdate,q=pe.needsUpdate,Y=pe.type;Te(),R.autoReset=T,pe.enabled=G,pe.autoUpdate=Z,pe.needsUpdate=q,pe.type=Y}function Xe(T){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ye(T){const G=T.target;G.removeEventListener("dispose",Ye),lt(G)}function lt(T){Ke(T),U.remove(T)}function Ke(T){const G=U.get(T).programs;G!==void 0&&(G.forEach(function(Z){te.releaseProgram(Z)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,Z,q,Y,_e){G===null&&(G=ut);const Ae=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ve=ri(T,G,Z,q,Y);_.setMaterial(q,Ae);let Se=Z.index,we=1;if(q.wireframe===!0){if(Se=V.getWireframeAttribute(Z),Se===void 0)return;we=2}const Be=Z.drawRange,ze=Z.attributes.position;let De=Be.start*we,mt=(Be.start+Be.count)*we;_e!==null&&(De=Math.max(De,_e.start*we),mt=Math.min(mt,(_e.start+_e.count)*we)),Se!==null?(De=Math.max(De,0),mt=Math.min(mt,Se.count)):ze!=null&&(De=Math.max(De,0),mt=Math.min(mt,ze.count));const Nt=mt-De;if(Nt<0||Nt===1/0)return;xe.setup(Y,q,ve,Z,Se);let At,yt=ce;if(Se!==null&&(At=J.get(Se),yt=K,yt.setIndex(At)),Y.isMesh)q.wireframe===!0?(_.setLineWidth(q.wireframeLinewidth*xt()),yt.setMode(B.LINES)):yt.setMode(B.TRIANGLES);else if(Y.isLine){let Kt=q.linewidth;Kt===void 0&&(Kt=1),_.setLineWidth(Kt*xt()),Y.isLineSegments?yt.setMode(B.LINES):Y.isLineLoop?yt.setMode(B.LINE_LOOP):yt.setMode(B.LINE_STRIP)}else Y.isPoints?yt.setMode(B.POINTS):Y.isSprite&&yt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))yt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,Ce=Y._multiDrawCounts,pn=Y._multiDrawCount,at=Se?J.get(Se).bytesPerElement:1,bn=U.get(q).currentProgram.getUniforms();for(let Wn=0;Wn<pn;Wn++)bn.setValue(B,"_gl_DrawID",Wn),yt.render(Kt[Wn]/at,Ce[Wn])}else if(Y.isInstancedMesh)yt.renderInstances(De,Nt,Y.count);else if(Z.isInstancedBufferGeometry){const Kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ce=Math.min(Z.instanceCount,Kt);yt.renderInstances(De,Nt,Ce)}else yt.render(De,Nt)};function qe(T,G,Z){T.transparent===!0&&T.side===di&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Yt(T,G,Z),T.side=Gi,T.needsUpdate=!0,Yt(T,G,Z),T.side=di):Yt(T,G,Z)}this.compile=function(T,G,Z=null){Z===null&&(Z=T),b=ne.get(Z),b.init(G),v.push(b),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),T!==Z&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights();const q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const _e=Y.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const ve=_e[Ae];qe(ve,Z,Y),q.add(ve)}else qe(_e,Z,Y),q.add(_e)}),b=v.pop(),q},this.compileAsync=function(T,G,Z=null){const q=this.compile(T,G,Z);return new Promise(Y=>{function _e(){if(q.forEach(function(Ae){U.get(Ae).currentProgram.isReady()&&q.delete(Ae)}),q.size===0){Y(T);return}setTimeout(_e,10)}Ze.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let vt=null;function rt(T){vt&&vt(T)}function _t(){fn.stop()}function rn(){fn.start()}const fn=new Im;fn.setAnimationLoop(rt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(T){vt=T,Me.setAnimationLoop(T),T===null?fn.stop():fn.start()},Me.addEventListener("sessionstart",_t),Me.addEventListener("sessionend",rn),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(T,G);const Z=Me.enabled===!0&&Me.isPresenting===!0,q=A!==null&&(j===null||Z)&&A.begin(L,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(G),G=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,G,j),b=ne.get(T,v.length),b.init(G),b.state.textureUnits=O.getTextureUnits(),v.push(b),et.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),je.setFromProjectionMatrix(et,Jn,G.reversedDepth),Ve=this.localClippingEnabled,He=fe.init(this.clippingPlanes,Ve),w=ie.get(T,P.length),w.init(),P.push(w),Me.enabled===!0&&Me.isPresenting===!0){const Ae=L.xr.getDepthSensingMesh();Ae!==null&&Mn(Ae,G,-1/0,L.sortObjects)}Mn(T,G,0,L.sortObjects),w.finish(),L.sortObjects===!0&&w.sort(Ee,Re,G.reversedDepth),st=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,st&&ye.addToRenderList(w,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&fe.beginShadows();const Y=b.state.shadowsArray;if(pe.render(Y,T,G),He===!0&&fe.endShadows(),(q&&A.hasRenderPass())===!1){const Ae=w.opaque,ve=w.transmissive;if(b.setupLights(),G.isArrayCamera){const Se=G.cameras;if(ve.length>0)for(let we=0,Be=Se.length;we<Be;we++){const ze=Se[we];Gn(Ae,ve,T,ze)}st&&ye.render(T);for(let we=0,Be=Se.length;we<Be;we++){const ze=Se[we];an(w,T,ze,ze.viewport)}}else ve.length>0&&Gn(Ae,ve,T,G),st&&ye.render(T),an(w,T,G)}j!==null&&z===0&&(O.updateMultisampleRenderTarget(j),O.updateRenderTargetMipmap(j)),q&&A.end(L),T.isScene===!0&&T.onAfterRender(L,T,G),xe.resetDefaultState(),re=-1,de=null,v.pop(),v.length>0?(b=v[v.length-1],O.setTextureUnits(b.state.textureUnits),He===!0&&fe.setGlobalState(L.clippingPlanes,b.state.camera)):b=null,P.pop(),P.length>0?w=P[P.length-1]:w=null,k!==null&&k.renderEnd()};function Mn(T,G,Z,q){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||je.intersectsSprite(T)){q&&ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(et);const Ae=W.update(T),ve=T.material;ve.visible&&w.push(T,Ae,ve,Z,ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||je.intersectsObject(T))){const Ae=W.update(T),ve=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ct.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ct.copy(Ae.boundingSphere.center)),ct.applyMatrix4(T.matrixWorld).applyMatrix4(et)),Array.isArray(ve)){const Se=Ae.groups;for(let we=0,Be=Se.length;we<Be;we++){const ze=Se[we],De=ve[ze.materialIndex];De&&De.visible&&w.push(T,Ae,De,Z,ct.z,ze)}}else ve.visible&&w.push(T,Ae,ve,Z,ct.z,null)}}const _e=T.children;for(let Ae=0,ve=_e.length;Ae<ve;Ae++)Mn(_e[Ae],G,Z,q)}function an(T,G,Z,q){const{opaque:Y,transmissive:_e,transparent:Ae}=T;b.setupLightsView(Z),He===!0&&fe.setGlobalState(L.clippingPlanes,Z),q&&_.viewport(ue.copy(q)),Y.length>0&&Pt(Y,G,Z),_e.length>0&&Pt(_e,G,Z),Ae.length>0&&Pt(Ae,G,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Gn(T,G,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){const De=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new ei(1,1,{generateMipmaps:!0,type:De?yi:Rn,minFilter:ns,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const _e=b.state.transmissionRenderTarget[q.id],Ae=q.viewport||ue;_e.setSize(Ae.z*L.transmissionResolutionScale,Ae.w*L.transmissionResolutionScale);const ve=L.getRenderTarget(),Se=L.getActiveCubeFace(),we=L.getActiveMipmapLevel();L.setRenderTarget(_e),L.getClearColor(We),Ne=L.getClearAlpha(),Ne<1&&L.setClearColor(16777215,.5),L.clear(),st&&ye.render(Z);const Be=L.toneMapping;L.toneMapping=Qn;const ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),He===!0&&fe.setGlobalState(L.clippingPlanes,q),Pt(T,Z,q),O.updateMultisampleRenderTarget(_e),O.updateRenderTargetMipmap(_e),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let mt=0,Nt=G.length;mt<Nt;mt++){const At=G[mt],{object:yt,geometry:Kt,material:Ce,group:pn}=At;if(Ce.side===di&&yt.layers.test(q.layers)){const at=Ce.side;Ce.side=hn,Ce.needsUpdate=!0,dn(yt,Z,q,Kt,Ce,pn),Ce.side=at,Ce.needsUpdate=!0,De=!0}}De===!0&&(O.updateMultisampleRenderTarget(_e),O.updateRenderTargetMipmap(_e))}L.setRenderTarget(ve,Se,we),L.setClearColor(We,Ne),ze!==void 0&&(q.viewport=ze),L.toneMapping=Be}function Pt(T,G,Z){const q=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,_e=T.length;Y<_e;Y++){const Ae=T[Y],{object:ve,geometry:Se,group:we}=Ae;let Be=Ae.material;Be.allowOverride===!0&&q!==null&&(Be=q),ve.layers.test(Z.layers)&&dn(ve,G,Z,Se,Be,we)}}function dn(T,G,Z,q,Y,_e){T.onBeforeRender(L,G,Z,q,Y,_e),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(L,G,Z,q,T,_e),Y.transparent===!0&&Y.side===di&&Y.forceSinglePass===!1?(Y.side=hn,Y.needsUpdate=!0,L.renderBufferDirect(Z,G,q,Y,T,_e),Y.side=Gi,Y.needsUpdate=!0,L.renderBufferDirect(Z,G,q,Y,T,_e),Y.side=di):L.renderBufferDirect(Z,G,q,Y,T,_e),T.onAfterRender(L,G,Z,q,Y,_e)}function Yt(T,G,Z){G.isScene!==!0&&(G=ut);const q=U.get(T),Y=b.state.lights,_e=b.state.shadowsArray,Ae=Y.state.version,ve=te.getParameters(T,Y.state,_e,G,Z,b.state.lightProbeGridArray),Se=te.getProgramCacheKey(ve);let we=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,q.fog=G.fog;const Be=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=ee.get(T.envMap||q.environment,Be),q.envMapRotation=q.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,we===void 0&&(T.addEventListener("dispose",Ye),we=new Map,q.programs=we);let ze=we.get(Se);if(ze!==void 0){if(q.currentProgram===ze&&q.lightsStateVersion===Ae)return zt(T,ve),ze}else ve.uniforms=te.getUniforms(T),k!==null&&T.isNodeMaterial&&k.build(T,Z,ve),T.onBeforeCompile(ve,L),ze=te.acquireProgram(ve,Se),we.set(Se,ze),q.uniforms=ve.uniforms;const De=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=fe.uniform),zt(T,ve),q.needsLights=Hn(T),q.lightsStateVersion=Ae,q.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=ze,q.uniformsList=null,ze}function kt(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=ro.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function zt(T,G){const Z=U.get(T);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Sn(T,G){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;M.setFromMatrixPosition(G.matrixWorld);for(let Z=0,q=T.length;Z<q;Z++){const Y=T[Z];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function ri(T,G,Z,q,Y){G.isScene!==!0&&(G=ut),O.resetTextureUnits();const _e=G.fog,Ae=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?G.environment:null,ve=j===null?L.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:nt.workingColorSpace,Se=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,we=ee.get(q.envMap||Ae,Se),Be=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),De=!!Z.morphAttributes.position,mt=!!Z.morphAttributes.normal,Nt=!!Z.morphAttributes.color;let At=Qn;q.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(At=L.toneMapping);const yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Kt=yt!==void 0?yt.length:0,Ce=U.get(q),pn=b.state.lights;if(He===!0&&(Ve===!0||T!==de)){const St=T===de&&q.id===re;fe.setState(q,T,St)}let at=!1;q.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==pn.state.version||Ce.outputColorSpace!==ve||Y.isBatchedMesh&&Ce.batching===!1||!Y.isBatchedMesh&&Ce.batching===!0||Y.isBatchedMesh&&Ce.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ce.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ce.instancing===!1||!Y.isInstancedMesh&&Ce.instancing===!0||Y.isSkinnedMesh&&Ce.skinning===!1||!Y.isSkinnedMesh&&Ce.skinning===!0||Y.isInstancedMesh&&Ce.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ce.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ce.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ce.instancingMorph===!1&&Y.morphTexture!==null||Ce.envMap!==we||q.fog===!0&&Ce.fog!==_e||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==fe.numPlanes||Ce.numIntersection!==fe.numIntersection)||Ce.vertexAlphas!==Be||Ce.vertexTangents!==ze||Ce.morphTargets!==De||Ce.morphNormals!==mt||Ce.morphColors!==Nt||Ce.toneMapping!==At||Ce.morphTargetsCount!==Kt||!!Ce.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Ce.__version=q.version);let bn=Ce.currentProgram;at===!0&&(bn=Yt(q,G,Y),k&&q.isNodeMaterial&&k.onUpdateProgram(q,bn,Ce));let Wn=!1,wi=!1,ms=!1;const Mt=bn.getUniforms(),Dt=Ce.uniforms;if(_.useProgram(bn.program)&&(Wn=!0,wi=!0,ms=!0),q.id!==re&&(re=q.id,wi=!0),Ce.needsLights){const St=Sn(b.state.lightProbeGridArray,Y);Ce.lightProbeGrid!==St&&(Ce.lightProbeGrid=St,wi=!0)}if(Wn||de!==T){_.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(B,"projectionMatrix",T.projectionMatrix),Mt.setValue(B,"viewMatrix",T.matrixWorldInverse);const Ri=Mt.map.cameraPosition;Ri!==void 0&&Ri.setValue(B,it.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&Mt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Mt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),de!==T&&(de=T,wi=!0,ms=!0)}if(Ce.needsLights&&(pn.state.directionalShadowMap.length>0&&Mt.setValue(B,"directionalShadowMap",pn.state.directionalShadowMap,O),pn.state.spotShadowMap.length>0&&Mt.setValue(B,"spotShadowMap",pn.state.spotShadowMap,O),pn.state.pointShadowMap.length>0&&Mt.setValue(B,"pointShadowMap",pn.state.pointShadowMap,O)),Y.isSkinnedMesh){Mt.setOptional(B,Y,"bindMatrix"),Mt.setOptional(B,Y,"bindMatrixInverse");const St=Y.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),Mt.setValue(B,"boneTexture",St.boneTexture,O))}Y.isBatchedMesh&&(Mt.setOptional(B,Y,"batchingTexture"),Mt.setValue(B,"batchingTexture",Y._matricesTexture,O),Mt.setOptional(B,Y,"batchingIdTexture"),Mt.setValue(B,"batchingIdTexture",Y._indirectTexture,O),Mt.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Mt.setValue(B,"batchingColorTexture",Y._colorsTexture,O));const Ai=Z.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&I.update(Y,Z,bn),(wi||Ce.receiveShadow!==Y.receiveShadow)&&(Ce.receiveShadow=Y.receiveShadow,Mt.setValue(B,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&G.environment!==null&&(Dt.envMapIntensity.value=G.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=Sb()),wi){if(Mt.setValue(B,"toneMappingExposure",L.toneMappingExposure),Ce.needsLights&&Ti(Dt,ms),_e&&q.fog===!0&&Q.refreshFogUniforms(Dt,_e),Q.refreshMaterialUniforms(Dt,q,he,le,b.state.transmissionRenderTarget[T.id]),Ce.needsLights&&Ce.lightProbeGrid){const St=Ce.lightProbeGrid;Dt.probesSH.value=St.texture,Dt.probesMin.value.copy(St.boundingBox.min),Dt.probesMax.value.copy(St.boundingBox.max),Dt.probesResolution.value.copy(St.resolution)}ro.upload(B,kt(Ce),Dt,O)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ro.upload(B,kt(Ce),Dt,O),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Mt.setValue(B,"center",Y.center),Mt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Mt.setValue(B,"normalMatrix",Y.normalMatrix),Mt.setValue(B,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const St=q.uniformsGroups;for(let Ri=0,gs=St.length;Ri<gs;Ri++){const Ih=St[Ri];oe.update(Ih,bn),oe.bind(Ih,bn)}}return bn}function Ti(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Hn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,G,Z){const q=U.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),U.get(T.texture).__webglTexture=G,U.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const Z=U.get(T);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,Z=0){j=T,H=G,z=Z;let q=null,Y=!1,_e=!1;if(T){const ve=U.get(T);if(ve.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(B.FRAMEBUFFER,ve.__webglFramebuffer),ue.copy(T.viewport),me.copy(T.scissor),Ie=T.scissorTest,_.viewport(ue),_.scissor(me),_.setScissorTest(Ie),re=-1;return}else if(ve.__webglFramebuffer===void 0)O.setupRenderTarget(T);else if(ve.__hasExternalTextures)O.rebindTextures(T,U.get(T.texture).__webglTexture,U.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(ve.__boundDepthTexture!==Be){if(Be!==null&&U.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(T)}}const Se=T.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(_e=!0);const we=U.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(we[G])?q=we[G][Z]:q=we[G],Y=!0):T.samples>0&&O.useMultisampledRTT(T)===!1?q=U.get(T).__webglMultisampledFramebuffer:Array.isArray(we)?q=we[Z]:q=we,ue.copy(T.viewport),me.copy(T.scissor),Ie=T.scissorTest}else ue.copy(Pe).multiplyScalar(he).floor(),me.copy(Je).multiplyScalar(he).floor(),Ie=Oe;if(Z!==0&&(q=$),_.bindFramebuffer(B.FRAMEBUFFER,q)&&_.drawBuffers(T,q),_.viewport(ue),_.scissor(me),_.setScissorTest(Ie),Y){const ve=U.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,ve.__webglTexture,Z)}else if(_e){const ve=G;for(let Se=0;Se<T.textures.length;Se++){const we=U.get(T.textures[Se]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Se,we.__webglTexture,Z,ve)}}else if(T!==null&&Z!==0){const ve=U.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ve.__webglTexture,Z)}re=-1},this.readRenderTargetPixels=function(T,G,Z,q,Y,_e,Ae,ve=0){if(!(T&&T.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae]),Se){_.bindFramebuffer(B.FRAMEBUFFER,Se);try{const we=T.textures[ve],Be=we.format,ze=we.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ve),!C.textureFormatReadable(Be)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ze)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-q&&Z>=0&&Z<=T.height-Y&&B.readPixels(G,Z,q,Y,ge.convert(Be),ge.convert(ze),_e)}finally{const we=j!==null?U.get(j).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(T,G,Z,q,Y,_e,Ae,ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae]),Se)if(G>=0&&G<=T.width-q&&Z>=0&&Z<=T.height-Y){_.bindFramebuffer(B.FRAMEBUFFER,Se);const we=T.textures[ve],Be=we.format,ze=we.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ve),!C.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,De),B.bufferData(B.PIXEL_PACK_BUFFER,_e.byteLength,B.STREAM_READ),B.readPixels(G,Z,q,Y,ge.convert(Be),ge.convert(ze),0);const mt=j!==null?U.get(j).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,mt);const Nt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ax(B,Nt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,De),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,_e),B.deleteBuffer(De),B.deleteSync(Nt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,Z=0){const q=Math.pow(2,-Z),Y=Math.floor(T.image.width*q),_e=Math.floor(T.image.height*q),Ae=G!==null?G.x:0,ve=G!==null?G.y:0;O.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Ae,ve,Y,_e),_.unbindTexture()},this.copyTextureToTexture=function(T,G,Z=null,q=null,Y=0,_e=0){let Ae,ve,Se,we,Be,ze,De,mt,Nt;const At=T.isCompressedTexture?T.mipmaps[_e]:T.image;if(Z!==null)Ae=Z.max.x-Z.min.x,ve=Z.max.y-Z.min.y,Se=Z.isBox3?Z.max.z-Z.min.z:1,we=Z.min.x,Be=Z.min.y,ze=Z.isBox3?Z.min.z:0;else{const Dt=Math.pow(2,-Y);Ae=Math.floor(At.width*Dt),ve=Math.floor(At.height*Dt),T.isDataArrayTexture?Se=At.depth:T.isData3DTexture?Se=Math.floor(At.depth*Dt):Se=1,we=0,Be=0,ze=0}q!==null?(De=q.x,mt=q.y,Nt=q.z):(De=0,mt=0,Nt=0);const yt=ge.convert(G.format),Kt=ge.convert(G.type);let Ce;G.isData3DTexture?(O.setTexture3D(G,0),Ce=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(O.setTexture2DArray(G,0),Ce=B.TEXTURE_2D_ARRAY):(O.setTexture2D(G,0),Ce=B.TEXTURE_2D),_.activeTexture(B.TEXTURE0),_.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),_.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),_.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const pn=_.getParameter(B.UNPACK_ROW_LENGTH),at=_.getParameter(B.UNPACK_IMAGE_HEIGHT),bn=_.getParameter(B.UNPACK_SKIP_PIXELS),Wn=_.getParameter(B.UNPACK_SKIP_ROWS),wi=_.getParameter(B.UNPACK_SKIP_IMAGES);_.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),_.pixelStorei(B.UNPACK_SKIP_PIXELS,we),_.pixelStorei(B.UNPACK_SKIP_ROWS,Be),_.pixelStorei(B.UNPACK_SKIP_IMAGES,ze);const ms=T.isDataArrayTexture||T.isData3DTexture,Mt=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const Dt=U.get(T),Ai=U.get(G),St=U.get(Dt.__renderTarget),Ri=U.get(Ai.__renderTarget);_.bindFramebuffer(B.READ_FRAMEBUFFER,St.__webglFramebuffer),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let gs=0;gs<Se;gs++)ms&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,U.get(T).__webglTexture,Y,ze+gs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,U.get(G).__webglTexture,_e,Nt+gs)),B.blitFramebuffer(we,Be,Ae,ve,De,mt,Ae,ve,B.DEPTH_BUFFER_BIT,B.NEAREST);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||U.has(T)){const Dt=U.get(T),Ai=U.get(G);_.bindFramebuffer(B.READ_FRAMEBUFFER,X),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,N);for(let St=0;St<Se;St++)ms?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,Y,ze+St):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dt.__webglTexture,Y),Mt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ai.__webglTexture,_e,Nt+St):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ai.__webglTexture,_e),Y!==0?B.blitFramebuffer(we,Be,Ae,ve,De,mt,Ae,ve,B.COLOR_BUFFER_BIT,B.NEAREST):Mt?B.copyTexSubImage3D(Ce,_e,De,mt,Nt+St,we,Be,Ae,ve):B.copyTexSubImage2D(Ce,_e,De,mt,we,Be,Ae,ve);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Mt?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ce,_e,De,mt,Nt,Ae,ve,Se,yt,Kt,At.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(Ce,_e,De,mt,Nt,Ae,ve,Se,yt,At.data):B.texSubImage3D(Ce,_e,De,mt,Nt,Ae,ve,Se,yt,Kt,At):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,_e,De,mt,Ae,ve,yt,Kt,At.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,_e,De,mt,At.width,At.height,yt,At.data):B.texSubImage2D(B.TEXTURE_2D,_e,De,mt,Ae,ve,yt,Kt,At);_.pixelStorei(B.UNPACK_ROW_LENGTH,pn),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at),_.pixelStorei(B.UNPACK_SKIP_PIXELS,bn),_.pixelStorei(B.UNPACK_SKIP_ROWS,Wn),_.pixelStorei(B.UNPACK_SKIP_IMAGES,wi),_e===0&&G.generateMipmaps&&B.generateMipmap(Ce),_.unbindTexture()},this.initRenderTarget=function(T){U.get(T).__webglFramebuffer===void 0&&O.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?O.setTextureCube(T,0):T.isData3DTexture?O.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?O.setTexture2DArray(T,0):O.setTexture2D(T,0),_.unbindTexture()},this.resetState=function(){H=0,z=0,j=null,_.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class cs{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let i=0;for(let s=0;s<this._n&&s<32;s++){const r=t[s],a=e+r,o=Math.abs(e)<Math.abs(r)?e-(a-r):r-(a-e);o&&(t[i++]=o),e=a}return t[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let t=this._n,i,s,r,a=0;if(t>0){for(a=e[--t];t>0&&(i=a,s=e[--t],a=i+s,r=s-(a-i),!r););t>0&&(r<0&&e[t-1]<0||r>0&&e[t-1]>0)&&(s=r*2,i=a+s,s==i-a&&(a=i))}return a}}function*bb(n){for(const e of n)yield*e}function Hm(n){return Array.from(bb(n))}var bt=1e-6,ot=Math.PI,Nn=ot/2,jf=ot/4,Ln=ot*2,hi=180/ot,xn=ot/180,wt=Math.abs,Eb=Math.atan,Yr=Math.atan2,It=Math.cos,Ut=Math.sin,Tb=Math.sign||function(n){return n>0?1:n<0?-1:0},ds=Math.sqrt;function wb(n){return n>1?0:n<-1?ot:Math.acos(n)}function Kr(n){return n>1?Nn:n<-1?-Nn:Math.asin(n)}function Dn(){}function Mo(n,e){n&&qf.hasOwnProperty(n.type)&&qf[n.type](n,e)}var Xf={Feature:function(n,e){Mo(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,s=t.length;++i<s;)Mo(t[i].geometry,e)}},qf={Sphere:function(n,e){e.sphere()},Point:function(n,e){n=n.coordinates,e.point(n[0],n[1],n[2])},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,s=t.length;++i<s;)n=t[i],e.point(n[0],n[1],n[2])},LineString:function(n,e){eu(n.coordinates,e,0)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,s=t.length;++i<s;)eu(t[i],e,0)},Polygon:function(n,e){$f(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,s=t.length;++i<s;)$f(t[i],e)},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,s=t.length;++i<s;)Mo(t[i],e)}};function eu(n,e,t){var i=-1,s=n.length-t,r;for(e.lineStart();++i<s;)r=n[i],e.point(r[0],r[1],r[2]);e.lineEnd()}function $f(n,e){var t=-1,i=n.length;for(e.polygonStart();++t<i;)eu(n[t],e,1);e.polygonEnd()}function zs(n,e){n&&Xf.hasOwnProperty(n.type)?Xf[n.type](n,e):Mo(n,e)}function tu(n){return[Yr(n[1],n[0]),Kr(n[2])]}function ir(n){var e=n[0],t=n[1],i=It(t);return[i*It(e),i*Ut(e),Ut(t)]}function za(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function So(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function Pl(n,e){n[0]+=e[0],n[1]+=e[1],n[2]+=e[2]}function Va(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function nu(n){var e=ds(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=e,n[1]/=e,n[2]/=e}function iu(n,e){function t(i,s){return i=n(i,s),e(i[0],i[1])}return n.invert&&e.invert&&(t.invert=function(i,s){return i=e.invert(i,s),i&&n.invert(i[0],i[1])}),t}function su(n,e){return wt(n)>ot&&(n-=Math.round(n/Ln)*Ln),[n,e]}su.invert=su;function Ab(n,e,t){return(n%=Ln)?e||t?iu(Kf(n),Zf(e,t)):Kf(n):e||t?Zf(e,t):su}function Yf(n){return function(e,t){return e+=n,wt(e)>ot&&(e-=Math.round(e/Ln)*Ln),[e,t]}}function Kf(n){var e=Yf(n);return e.invert=Yf(-n),e}function Zf(n,e){var t=It(n),i=Ut(n),s=It(e),r=Ut(e);function a(o,l){var c=It(l),u=It(o)*c,f=Ut(o)*c,h=Ut(l),d=h*t+u*i;return[Yr(f*s-d*r,u*t-h*i),Kr(d*s+f*r)]}return a.invert=function(o,l){var c=It(l),u=It(o)*c,f=Ut(o)*c,h=Ut(l),d=h*s-f*r;return[Yr(f*s+h*r,u*t+d*i),Kr(d*t-u*i)]},a}function Rb(n,e,t,i,s,r){if(t){var a=It(e),o=Ut(e),l=i*t;s==null?(s=e+i*Ln,r=e-l/2):(s=Jf(a,s),r=Jf(a,r),(i>0?s<r:s>r)&&(s+=i*Ln));for(var c,u=s;i>0?u>r:u<r;u-=l)c=tu([a,-o*It(u),-o*Ut(u)]),n.point(c[0],c[1])}}function Jf(n,e){e=ir(e),e[0]-=n,nu(e);var t=wb(-e[1]);return((-e[2]<0?-t:t)+Ln-bt)%Ln}function Wm(){var n=[],e;return{point:function(t,i,s){e.push([t,i,s])},lineStart:function(){n.push(e=[])},lineEnd:Dn,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var t=n;return n=[],e=null,t}}}function ao(n,e){return wt(n[0]-e[0])<bt&&wt(n[1]-e[1])<bt}function Ga(n,e,t,i){this.x=n,this.z=e,this.o=t,this.e=i,this.v=!1,this.n=this.p=null}function jm(n,e,t,i,s){var r=[],a=[],o,l;if(n.forEach(function(g){if(!((y=g.length-1)<=0)){var y,m=g[0],p=g[y],S;if(ao(m,p)){if(!m[2]&&!p[2]){for(s.lineStart(),o=0;o<y;++o)s.point((m=g[o])[0],m[1]);s.lineEnd();return}p[0]+=2*bt}r.push(S=new Ga(m,g,null,!0)),a.push(S.o=new Ga(m,null,S,!1)),r.push(S=new Ga(p,g,null,!1)),a.push(S.o=new Ga(p,null,S,!0))}}),!!r.length){for(a.sort(e),Qf(r),Qf(a),o=0,l=a.length;o<l;++o)a[o].e=t=!t;for(var c=r[0],u,f;;){for(var h=c,d=!0;h.v;)if((h=h.n)===c)return;u=h.z,s.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,l=u.length;o<l;++o)s.point((f=u[o])[0],f[1]);else i(h.x,h.n.x,1,s);h=h.n}else{if(d)for(u=h.p.z,o=u.length-1;o>=0;--o)s.point((f=u[o])[0],f[1]);else i(h.x,h.p.x,-1,s);h=h.p}h=h.o,u=h.z,d=!d}while(!h.v);s.lineEnd()}}}function Qf(n){if(e=n.length){for(var e,t=0,i=n[0],s;++t<e;)i.n=s=n[t],s.p=i,i=s;i.n=s=n[0],s.p=i}}function Nl(n){return wt(n[0])<=ot?n[0]:Tb(n[0])*((wt(n[0])+ot)%Ln-ot)}function Cb(n,e){var t=Nl(e),i=e[1],s=Ut(i),r=[Ut(t),-It(t),0],a=0,o=0,l=new cs;s===1?i=Nn+bt:s===-1&&(i=-Nn-bt);for(var c=0,u=n.length;c<u;++c)if(h=(f=n[c]).length)for(var f,h,d=f[h-1],g=Nl(d),y=d[1]/2+jf,m=Ut(y),p=It(y),S=0;S<h;++S,g=M,m=b,p=P,d=E){var E=f[S],M=Nl(E),w=E[1]/2+jf,b=Ut(w),P=It(w),v=M-g,A=v>=0?1:-1,L=A*v,D=L>ot,k=m*b;if(l.add(Yr(k*A*Ut(L),p*P+k*It(L))),a+=D?v+A*Ln:v,D^g>=t^M>=t){var $=So(ir(d),ir(E));nu($);var X=So(r,$);nu(X);var N=(D^v>=0?-1:1)*Kr(X[2]);(i>N||i===N&&($[0]||$[1]))&&(o+=D^v>=0?1:-1)}}return(a<-bt||a<bt&&l<-1e-12)^o&1}function Xm(n,e,t,i){return function(s){var r=e(s),a=Wm(),o=e(a),l=!1,c,u,f,h={point:d,lineStart:y,lineEnd:m,polygonStart:function(){h.point=p,h.lineStart=S,h.lineEnd=E,u=[],c=[]},polygonEnd:function(){h.point=d,h.lineStart=y,h.lineEnd=m,u=Hm(u);var M=Cb(c,i);u.length?(l||(s.polygonStart(),l=!0),jm(u,Nb,M,t,s)):M&&(l||(s.polygonStart(),l=!0),s.lineStart(),t(null,null,1,s),s.lineEnd()),l&&(s.polygonEnd(),l=!1),u=c=null},sphere:function(){s.polygonStart(),s.lineStart(),t(null,null,1,s),s.lineEnd(),s.polygonEnd()}};function d(M,w){n(M,w)&&s.point(M,w)}function g(M,w){r.point(M,w)}function y(){h.point=g,r.lineStart()}function m(){h.point=d,r.lineEnd()}function p(M,w){f.push([M,w]),o.point(M,w)}function S(){o.lineStart(),f=[]}function E(){p(f[0][0],f[0][1]),o.lineEnd();var M=o.clean(),w=a.result(),b,P=w.length,v,A,L;if(f.pop(),c.push(f),f=null,!!P){if(M&1){if(A=w[0],(v=A.length-1)>0){for(l||(s.polygonStart(),l=!0),s.lineStart(),b=0;b<v;++b)s.point((L=A[b])[0],L[1]);s.lineEnd()}return}P>1&&M&2&&w.push(w.pop().concat(w.shift())),u.push(w.filter(Pb))}}return h}}function Pb(n){return n.length>1}function Nb(n,e){return((n=n.x)[0]<0?n[1]-Nn-bt:Nn-n[1])-((e=e.x)[0]<0?e[1]-Nn-bt:Nn-e[1])}const ed=Xm(function(){return!0},Db,Ib,[-ot,-Nn]);function Db(n){var e=NaN,t=NaN,i=NaN,s;return{lineStart:function(){n.lineStart(),s=1},point:function(r,a){var o=r>0?ot:-ot,l=wt(r-e);wt(l-ot)<bt?(n.point(e,t=(t+a)/2>0?Nn:-Nn),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(o,t),n.point(r,t),s=0):i!==o&&l>=ot&&(wt(e-i)<bt&&(e-=i*bt),wt(r-o)<bt&&(r-=o*bt),t=Lb(e,t,r,a),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(o,t),s=0),n.point(e=r,t=a),i=o},lineEnd:function(){n.lineEnd(),e=t=NaN},clean:function(){return 2-s}}}function Lb(n,e,t,i){var s,r,a=Ut(n-t);return wt(a)>bt?Eb((Ut(e)*(r=It(i))*Ut(t)-Ut(i)*(s=It(e))*Ut(n))/(s*r*a)):(e+i)/2}function Ib(n,e,t,i){var s;if(n==null)s=t*Nn,i.point(-ot,s),i.point(0,s),i.point(ot,s),i.point(ot,0),i.point(ot,-s),i.point(0,-s),i.point(-ot,-s),i.point(-ot,0),i.point(-ot,s);else if(wt(n[0]-e[0])>bt){var r=n[0]<e[0]?ot:-ot;s=t*r/2,i.point(-r,s),i.point(0,s),i.point(r,s)}else i.point(e[0],e[1])}function Ub(n){var e=It(n),t=2*xn,i=e>0,s=wt(e)>bt;function r(u,f,h,d){Rb(d,n,t,h,u,f)}function a(u,f){return It(u)*It(f)>e}function o(u){var f,h,d,g,y;return{lineStart:function(){g=d=!1,y=1},point:function(m,p){var S=[m,p],E,M=a(m,p),w=i?M?0:c(m,p):M?c(m+(m<0?ot:-ot),p):0;if(!f&&(g=d=M)&&u.lineStart(),M!==d&&(E=l(f,S),(!E||ao(f,E)||ao(S,E))&&(S[2]=1)),M!==d)y=0,M?(u.lineStart(),E=l(S,f),u.point(E[0],E[1])):(E=l(f,S),u.point(E[0],E[1],2),u.lineEnd()),f=E;else if(s&&f&&i^M){var b;!(w&h)&&(b=l(S,f,!0))&&(y=0,i?(u.lineStart(),u.point(b[0][0],b[0][1]),u.point(b[1][0],b[1][1]),u.lineEnd()):(u.point(b[1][0],b[1][1]),u.lineEnd(),u.lineStart(),u.point(b[0][0],b[0][1],3)))}M&&(!f||!ao(f,S))&&u.point(S[0],S[1]),f=S,d=M,h=w},lineEnd:function(){d&&u.lineEnd(),f=null},clean:function(){return y|(g&&d)<<1}}}function l(u,f,h){var d=ir(u),g=ir(f),y=[1,0,0],m=So(d,g),p=za(m,m),S=m[0],E=p-S*S;if(!E)return!h&&u;var M=e*p/E,w=-e*S/E,b=So(y,m),P=Va(y,M),v=Va(m,w);Pl(P,v);var A=b,L=za(P,A),D=za(A,A),k=L*L-D*(za(P,P)-1);if(!(k<0)){var $=ds(k),X=Va(A,(-L-$)/D);if(Pl(X,P),X=tu(X),!h)return X;var N=u[0],H=f[0],z=u[1],j=f[1],re;H<N&&(re=N,N=H,H=re);var de=H-N,ue=wt(de-ot)<bt,me=ue||de<bt;if(!ue&&j<z&&(re=z,z=j,j=re),me?ue?z+j>0^X[1]<(wt(X[0]-N)<bt?z:j):z<=X[1]&&X[1]<=j:de>ot^(N<=X[0]&&X[0]<=H)){var Ie=Va(A,(-L+$)/D);return Pl(Ie,P),[X,tu(Ie)]}}}function c(u,f){var h=i?n:ot-n,d=0;return u<-h?d|=1:u>h&&(d|=2),f<-h?d|=4:f>h&&(d|=8),d}return Xm(a,o,r,i?[0,-n]:[-ot,n-ot])}function Fb(n,e,t,i,s,r){var a=n[0],o=n[1],l=e[0],c=e[1],u=0,f=1,h=l-a,d=c-o,g;if(g=t-a,!(!h&&g>0)){if(g/=h,h<0){if(g<u)return;g<f&&(f=g)}else if(h>0){if(g>f)return;g>u&&(u=g)}if(g=s-a,!(!h&&g<0)){if(g/=h,h<0){if(g>f)return;g>u&&(u=g)}else if(h>0){if(g<u)return;g<f&&(f=g)}if(g=i-o,!(!d&&g>0)){if(g/=d,d<0){if(g<u)return;g<f&&(f=g)}else if(d>0){if(g>f)return;g>u&&(u=g)}if(g=r-o,!(!d&&g<0)){if(g/=d,d<0){if(g>f)return;g>u&&(u=g)}else if(d>0){if(g<u)return;g<f&&(f=g)}return u>0&&(n[0]=a+u*h,n[1]=o+u*d),f<1&&(e[0]=a+f*h,e[1]=o+f*d),!0}}}}}var Nr=1e9,Ha=-Nr;function Ob(n,e,t,i){function s(c,u){return n<=c&&c<=t&&e<=u&&u<=i}function r(c,u,f,h){var d=0,g=0;if(c==null||(d=a(c,f))!==(g=a(u,f))||l(c,u)<0^f>0)do h.point(d===0||d===3?n:t,d>1?i:e);while((d=(d+f+4)%4)!==g);else h.point(u[0],u[1])}function a(c,u){return wt(c[0]-n)<bt?u>0?0:3:wt(c[0]-t)<bt?u>0?2:1:wt(c[1]-e)<bt?u>0?1:0:u>0?3:2}function o(c,u){return l(c.x,u.x)}function l(c,u){var f=a(c,1),h=a(u,1);return f!==h?f-h:f===0?u[1]-c[1]:f===1?c[0]-u[0]:f===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,f=Wm(),h,d,g,y,m,p,S,E,M,w,b,P={point:v,lineStart:k,lineEnd:$,polygonStart:L,polygonEnd:D};function v(N,H){s(N,H)&&u.point(N,H)}function A(){for(var N=0,H=0,z=d.length;H<z;++H)for(var j=d[H],re=1,de=j.length,ue=j[0],me,Ie,We=ue[0],Ne=ue[1];re<de;++re)me=We,Ie=Ne,ue=j[re],We=ue[0],Ne=ue[1],Ie<=i?Ne>i&&(We-me)*(i-Ie)>(Ne-Ie)*(n-me)&&++N:Ne<=i&&(We-me)*(i-Ie)<(Ne-Ie)*(n-me)&&--N;return N}function L(){u=f,h=[],d=[],b=!0}function D(){var N=A(),H=b&&N,z=(h=Hm(h)).length;(H||z)&&(c.polygonStart(),H&&(c.lineStart(),r(null,null,1,c),c.lineEnd()),z&&jm(h,o,N,r,c),c.polygonEnd()),u=c,h=d=g=null}function k(){P.point=X,d&&d.push(g=[]),w=!0,M=!1,S=E=NaN}function $(){h&&(X(y,m),p&&M&&f.rejoin(),h.push(f.result())),P.point=v,M&&u.lineEnd()}function X(N,H){var z=s(N,H);if(d&&g.push([N,H]),w)y=N,m=H,p=z,w=!1,z&&(u.lineStart(),u.point(N,H));else if(z&&M)u.point(N,H);else{var j=[S=Math.max(Ha,Math.min(Nr,S)),E=Math.max(Ha,Math.min(Nr,E))],re=[N=Math.max(Ha,Math.min(Nr,N)),H=Math.max(Ha,Math.min(Nr,H))];Fb(j,re,n,e,t,i)?(M||(u.lineStart(),u.point(j[0],j[1])),u.point(re[0],re[1]),z||u.lineEnd(),b=!1):z&&(u.lineStart(),u.point(N,H),b=!1)}S=N,E=H,M=z}return P}}const ru=n=>n;var Dl=new cs,au=new cs,qm,$m,ou,lu,pi={point:Dn,lineStart:Dn,lineEnd:Dn,polygonStart:function(){pi.lineStart=Bb,pi.lineEnd=zb},polygonEnd:function(){pi.lineStart=pi.lineEnd=pi.point=Dn,Dl.add(wt(au)),au=new cs},result:function(){var n=Dl/2;return Dl=new cs,n}};function Bb(){pi.point=kb}function kb(n,e){pi.point=Ym,qm=ou=n,$m=lu=e}function Ym(n,e){au.add(lu*n-ou*e),ou=n,lu=e}function zb(){Ym(qm,$m)}var sr=1/0,bo=sr,Zr=-sr,Eo=Zr,To={point:Vb,lineStart:Dn,lineEnd:Dn,polygonStart:Dn,polygonEnd:Dn,result:function(){var n=[[sr,bo],[Zr,Eo]];return Zr=Eo=-(bo=sr=1/0),n}};function Vb(n,e){n<sr&&(sr=n),n>Zr&&(Zr=n),e<bo&&(bo=e),e>Eo&&(Eo=e)}var cu=0,uu=0,Dr=0,wo=0,Ao=0,Ws=0,hu=0,fu=0,Lr=0,Km,Zm,Kn,Zn,Pn={point:us,lineStart:td,lineEnd:nd,polygonStart:function(){Pn.lineStart=Wb,Pn.lineEnd=jb},polygonEnd:function(){Pn.point=us,Pn.lineStart=td,Pn.lineEnd=nd},result:function(){var n=Lr?[hu/Lr,fu/Lr]:Ws?[wo/Ws,Ao/Ws]:Dr?[cu/Dr,uu/Dr]:[NaN,NaN];return cu=uu=Dr=wo=Ao=Ws=hu=fu=Lr=0,n}};function us(n,e){cu+=n,uu+=e,++Dr}function td(){Pn.point=Gb}function Gb(n,e){Pn.point=Hb,us(Kn=n,Zn=e)}function Hb(n,e){var t=n-Kn,i=e-Zn,s=ds(t*t+i*i);wo+=s*(Kn+n)/2,Ao+=s*(Zn+e)/2,Ws+=s,us(Kn=n,Zn=e)}function nd(){Pn.point=us}function Wb(){Pn.point=Xb}function jb(){Jm(Km,Zm)}function Xb(n,e){Pn.point=Jm,us(Km=Kn=n,Zm=Zn=e)}function Jm(n,e){var t=n-Kn,i=e-Zn,s=ds(t*t+i*i);wo+=s*(Kn+n)/2,Ao+=s*(Zn+e)/2,Ws+=s,s=Zn*n-Kn*e,hu+=s*(Kn+n),fu+=s*(Zn+e),Lr+=s*3,us(Kn=n,Zn=e)}function Qm(n){this._context=n}Qm.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(n,e){switch(this._point){case 0:{this._context.moveTo(n,e),this._point=1;break}case 1:{this._context.lineTo(n,e);break}default:{this._context.moveTo(n+this._radius,e),this._context.arc(n,e,this._radius,0,Ln);break}}},result:Dn};var du=new cs,Ll,eg,tg,Ir,Ur,Jr={point:Dn,lineStart:function(){Jr.point=qb},lineEnd:function(){Ll&&ng(eg,tg),Jr.point=Dn},polygonStart:function(){Ll=!0},polygonEnd:function(){Ll=null},result:function(){var n=+du;return du=new cs,n}};function qb(n,e){Jr.point=ng,eg=Ir=n,tg=Ur=e}function ng(n,e){Ir-=n,Ur-=e,du.add(ds(Ir*Ir+Ur*Ur)),Ir=n,Ur=e}let id,Ro,sd,rd;class ad{constructor(e){this._append=e==null?ig:$b(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,t){switch(this._point){case 0:{this._append`M${e},${t}`,this._point=1;break}case 1:{this._append`L${e},${t}`;break}default:{if(this._append`M${e},${t}`,this._radius!==sd||this._append!==Ro){const i=this._radius,s=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,sd=i,Ro=this._append,rd=this._,this._=s}this._+=rd;break}}}result(){const e=this._;return this._="",e.length?e:null}}function ig(n){let e=1;this._+=n[0];for(const t=n.length;e<t;++e)this._+=arguments[e]+n[e]}function $b(n){const e=Math.floor(n);if(!(e>=0))throw new RangeError(`invalid digits: ${n}`);if(e>15)return ig;if(e!==id){const t=10**e;id=e,Ro=function(s){let r=1;this._+=s[0];for(const a=s.length;r<a;++r)this._+=Math.round(arguments[r]*t)/t+s[r]}}return Ro}function od(n,e){let t=3,i=4.5,s,r;function a(o){return o&&(typeof i=="function"&&r.pointRadius(+i.apply(this,arguments)),zs(o,s(r))),r.result()}return a.area=function(o){return zs(o,s(pi)),pi.result()},a.measure=function(o){return zs(o,s(Jr)),Jr.result()},a.bounds=function(o){return zs(o,s(To)),To.result()},a.centroid=function(o){return zs(o,s(Pn)),Pn.result()},a.projection=function(o){return arguments.length?(s=o==null?(n=null,ru):(n=o).stream,a):n},a.context=function(o){return arguments.length?(r=o==null?(e=null,new ad(t)):new Qm(e=o),typeof i!="function"&&r.pointRadius(i),a):e},a.pointRadius=function(o){return arguments.length?(i=typeof o=="function"?o:(r.pointRadius(+o),+o),a):i},a.digits=function(o){if(!arguments.length)return t;if(o==null)t=null;else{const l=Math.floor(o);if(!(l>=0))throw new RangeError(`invalid digits: ${o}`);t=l}return e===null&&(r=new ad(t)),a},a.projection(n).digits(t).context(e)}function qu(n){return function(e){var t=new pu;for(var i in n)t[i]=n[i];return t.stream=e,t}}function pu(){}pu.prototype={constructor:pu,point:function(n,e){this.stream.point(n,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function $u(n,e,t){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),zs(t,n.stream(To)),e(To.result()),i!=null&&n.clipExtent(i),n}function sg(n,e,t){return $u(n,function(i){var s=e[1][0]-e[0][0],r=e[1][1]-e[0][1],a=Math.min(s/(i[1][0]-i[0][0]),r/(i[1][1]-i[0][1])),o=+e[0][0]+(s-a*(i[1][0]+i[0][0]))/2,l=+e[0][1]+(r-a*(i[1][1]+i[0][1]))/2;n.scale(150*a).translate([o,l])},t)}function Yb(n,e,t){return sg(n,[[0,0],e],t)}function Kb(n,e,t){return $u(n,function(i){var s=+e,r=s/(i[1][0]-i[0][0]),a=(s-r*(i[1][0]+i[0][0]))/2,o=-r*i[0][1];n.scale(150*r).translate([a,o])},t)}function Zb(n,e,t){return $u(n,function(i){var s=+e,r=s/(i[1][1]-i[0][1]),a=-r*i[0][0],o=(s-r*(i[1][1]+i[0][1]))/2;n.scale(150*r).translate([a,o])},t)}var ld=16,Jb=It(30*xn);function cd(n,e){return+e?e1(n,e):Qb(n)}function Qb(n){return qu({point:function(e,t){e=n(e,t),this.stream.point(e[0],e[1])}})}function e1(n,e){function t(i,s,r,a,o,l,c,u,f,h,d,g,y,m){var p=c-i,S=u-s,E=p*p+S*S;if(E>4*e&&y--){var M=a+h,w=o+d,b=l+g,P=ds(M*M+w*w+b*b),v=Kr(b/=P),A=wt(wt(b)-1)<bt||wt(r-f)<bt?(r+f)/2:Yr(w,M),L=n(A,v),D=L[0],k=L[1],$=D-i,X=k-s,N=S*$-p*X;(N*N/E>e||wt((p*$+S*X)/E-.5)>.3||a*h+o*d+l*g<Jb)&&(t(i,s,r,a,o,l,D,k,A,M/=P,w/=P,b,y,m),m.point(D,k),t(D,k,A,M,w,b,c,u,f,h,d,g,y,m))}}return function(i){var s,r,a,o,l,c,u,f,h,d,g,y,m={point:p,lineStart:S,lineEnd:M,polygonStart:function(){i.polygonStart(),m.lineStart=w},polygonEnd:function(){i.polygonEnd(),m.lineStart=S}};function p(v,A){v=n(v,A),i.point(v[0],v[1])}function S(){f=NaN,m.point=E,i.lineStart()}function E(v,A){var L=ir([v,A]),D=n(v,A);t(f,h,u,d,g,y,f=D[0],h=D[1],u=v,d=L[0],g=L[1],y=L[2],ld,i),i.point(f,h)}function M(){m.point=p,i.lineEnd()}function w(){S(),m.point=b,m.lineEnd=P}function b(v,A){E(s=v,A),r=f,a=h,o=d,l=g,c=y,m.point=E}function P(){t(f,h,u,d,g,y,r,a,s,o,l,c,ld,i),m.lineEnd=M,M()}return m}}var t1=qu({point:function(n,e){this.stream.point(n*xn,e*xn)}});function n1(n){return qu({point:function(e,t){var i=n(e,t);return this.stream.point(i[0],i[1])}})}function i1(n,e,t,i,s){function r(a,o){return a*=i,o*=s,[e+n*a,t-n*o]}return r.invert=function(a,o){return[(a-e)/n*i,(t-o)/n*s]},r}function ud(n,e,t,i,s,r){if(!r)return i1(n,e,t,i,s);var a=It(r),o=Ut(r),l=a*n,c=o*n,u=a/n,f=o/n,h=(o*t-a*e)/n,d=(o*e+a*t)/n;function g(y,m){return y*=i,m*=s,[l*y-c*m+e,t-c*y-l*m]}return g.invert=function(y,m){return[i*(u*y-f*m+h),s*(d-f*y-u*m)]},g}function s1(n){return r1(function(){return n})()}function r1(n){var e,t=150,i=480,s=250,r=0,a=0,o=0,l=0,c=0,u,f=0,h=1,d=1,g=null,y=ed,m=null,p,S,E,M=ru,w=.5,b,P,v,A,L;function D(N){return v(N[0]*xn,N[1]*xn)}function k(N){return N=v.invert(N[0],N[1]),N&&[N[0]*hi,N[1]*hi]}D.stream=function(N){return A&&L===N?A:A=t1(n1(u)(y(b(M(L=N)))))},D.preclip=function(N){return arguments.length?(y=N,g=void 0,X()):y},D.postclip=function(N){return arguments.length?(M=N,m=p=S=E=null,X()):M},D.clipAngle=function(N){return arguments.length?(y=+N?Ub(g=N*xn):(g=null,ed),X()):g*hi},D.clipExtent=function(N){return arguments.length?(M=N==null?(m=p=S=E=null,ru):Ob(m=+N[0][0],p=+N[0][1],S=+N[1][0],E=+N[1][1]),X()):m==null?null:[[m,p],[S,E]]},D.scale=function(N){return arguments.length?(t=+N,$()):t},D.translate=function(N){return arguments.length?(i=+N[0],s=+N[1],$()):[i,s]},D.center=function(N){return arguments.length?(r=N[0]%360*xn,a=N[1]%360*xn,$()):[r*hi,a*hi]},D.rotate=function(N){return arguments.length?(o=N[0]%360*xn,l=N[1]%360*xn,c=N.length>2?N[2]%360*xn:0,$()):[o*hi,l*hi,c*hi]},D.angle=function(N){return arguments.length?(f=N%360*xn,$()):f*hi},D.reflectX=function(N){return arguments.length?(h=N?-1:1,$()):h<0},D.reflectY=function(N){return arguments.length?(d=N?-1:1,$()):d<0},D.precision=function(N){return arguments.length?(b=cd(P,w=N*N),X()):ds(w)},D.fitExtent=function(N,H){return sg(D,N,H)},D.fitSize=function(N,H){return Yb(D,N,H)},D.fitWidth=function(N,H){return Kb(D,N,H)},D.fitHeight=function(N,H){return Zb(D,N,H)};function $(){var N=ud(t,0,0,h,d,f).apply(null,e(r,a)),H=ud(t,i-N[0],s-N[1],h,d,f);return u=Ab(o,l,c),P=iu(e,H),v=iu(u,P),b=cd(P,w),X()}function X(){return A=L=null,D}return function(){return e=n.apply(this,arguments),D.invert=e.invert&&k,$()}}function mu(n,e){return[n,e]}mu.invert=mu;function hd(){return s1(mu).scale(152.63)}function Os(n){if(!n||n.trim()==="")return{r:0,g:0,b:0,a:0};const e=n.trim(),t=e.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i);if(t){const s=Math.max(0,Math.min(255,parseFloat(t[1])))/255,r=Math.max(0,Math.min(255,parseFloat(t[2])))/255,a=Math.max(0,Math.min(255,parseFloat(t[3])))/255,o=t[4]!==void 0?Math.max(0,Math.min(1,parseFloat(t[4]))):1;return{r:s,g:r,b:a,a:o}}const i=e.replace(/^#/,"");return i.length===8?{r:parseInt(i.slice(0,2),16)/255,g:parseInt(i.slice(2,4),16)/255,b:parseInt(i.slice(4,6),16)/255,a:parseInt(i.slice(6,8),16)/255}:i.length===6?{r:parseInt(i.slice(0,2),16)/255,g:parseInt(i.slice(2,4),16)/255,b:parseInt(i.slice(4,6),16)/255,a:1}:i.length===4?{r:parseInt(i[0]+i[0],16)/255,g:parseInt(i[1]+i[1],16)/255,b:parseInt(i[2]+i[2],16)/255,a:parseInt(i[3]+i[3],16)/255}:i.length===3?{r:parseInt(i[0]+i[0],16)/255,g:parseInt(i[1]+i[1],16)/255,b:parseInt(i[2]+i[2],16)/255,a:1}:{r:0,g:0,b:0,a:1}}function Si(n,e,t,i,s){if(t===e)return i;const r=(n-e)/(t-e);return i+r*(s-i)}function a1(n){if(n===0)return 0;const e=Math.max(0,Math.min(10,n));return Si(e,0,10,0,.9)}function o1(n){const e=Math.max(1,Math.min(10,n));return Si(e,1,10,24,8)}function l1(n){const e=Math.max(1,Math.min(20,n));return Si(e,1,20,.2,2)}function c1(n){const e=Math.max(1,Math.min(10,n));return Si(e,1,10,.1,.5)}function u1(n){const e=Math.max(0,Math.min(100,n));return Si(e,0,100,.1,2.5)}function h1(n){return Math.max(0,Math.min(1,n/10))}function f1(n){return Si(Math.max(0,Math.min(10,n)),0,10,.001,.02)}function d1(n){const e=Math.max(1,Math.min(10,n));return Si(e,1,10,10,1)}function p1(n,e){if(n.length<2||e>=10)return n;const t=Math.max(1,Math.floor(d1(e))),i=[];i.push(n[0]);for(let o=t;o<n.length-1;o+=t){const l=Math.min(o,n.length-1);i.push(n[l])}const s=n[n.length-1],r=n[0];return Math.abs(s[0]-r[0])<1e-4&&Math.abs(s[1]-r[1])<1e-4||i.push(s),i.length>=2?i:n}function wr(n,e){const t=n*(Math.PI/180),i=e*(Math.PI/180),s=Math.cos(t)*Math.sin(i),r=Math.sin(t),a=Math.cos(t)*Math.cos(i);return{x:s,y:r,z:a}}function m1({speed:n=2,smoothing:e=8,dots:t={color:"#ffffff",size:5,density:8,allDots:!1},fill:i="dots",fillColor:s="#ffffff",scale:r=8,stopOnHover:a=!0,markerConfig:o={markers:[],color:"#00f7ff",size:40},direction:l="left",initialLatitude:c=23,initialLongitude:u=-23,oceanColor:f="#000000",outlineColor:h="#ffffff",showOutline:d=!0,graticuleColor:g="#D4D4D4",showGrid:y=!0,outlineWidth:m=1,dragSpeed:p=5,detail:S=5,style:E}){const M=ae.useRef(null),[,w]=ae.useState(!0),[b,P]=ae.useState(null),v=t.color,A=t.size,L=t.density,D=t.allDots,k=1,$=h1(e),X=a1(n),N=l==="left"?-X:X,H=o1(L),z=c1(A),j=u1(o.size),re=l1(r);ae.useEffect(()=>{if(!M.current)return;const ue=M.current,me=ue.clientWidth||ue.offsetWidth||800,Ie=ue.clientHeight||ue.offsetHeight||600,We=new vm,Ne=new vn(50,me/Ie,.1,1e3),le=1*re,he=2.5/re;Ne.position.set(0,0,he),Ne.lookAt(0,0,0);const Ee=new Gm({antialias:!0,alpha:!0});Ee.setSize(me,Ie),Ee.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ee.outputColorSpace="srgb";const Re=Ee.domElement;Re.style.position="absolute",Re.style.inset="0",Re.style.width="100%",Re.style.height="100%",Re.style.display="block",Re.style.opacity="0",Re.style.visibility="hidden",ue.appendChild(Re);const Pe=f,Je=h,Oe=v,je=o.color,He=g,Ve=s,et=Os(Pe),it=Os(Je),ct=Os(Oe);Os(je);const ut=Os(He),st=Os(Ve),xt=new Gs(le,64,64),B=Pe?new ke(Pe):new ke(0,0,0),Ft=new qn({color:B,transparent:et.a<1||et.a===0,opacity:et.a}),Ze=new Wt(xt,Ft);if(We.add(Ze),d&&h&&it.a>0){const Xe=[];for(let Ke=0;Ke<=128;Ke++){const qe=Ke/128*Math.PI*2,vt=Math.cos(qe)*le,rt=Math.sin(qe)*le;Xe.push(vt,rt,0)}const lt=[];for(let Ke=0;Ke<Xe.length;Ke+=3)lt.push(new F(Xe[Ke],Xe[Ke+1],Xe[Ke+2]));if(lt.length>=2){lt.push(lt[0].clone());const Ke=new ke(Je),qe=new qn({color:Ke,transparent:it.a<1,opacity:it.a}),vt=new Cr(lt),rt=m/10*.01,_t=new Hs(vt,lt.length*2,rt,8,!1);new Wt(_t,qe)}}const C=new ki,_=new ki;if(y&&He&&ut.a>0){const Xe=He?new ke(He):new ke(1,1,1),Ye=new qn({color:Xe,transparent:ut.a<1||ut.a===0,opacity:ut.a}),lt=15;for(let Ke=-90;Ke<=90;Ke+=lt){const qe=[];for(let rt=0;rt<=64;rt++){const _t=rt/64*360-180,rn=wr(Ke,_t);qe.push(rn.x*le,rn.y*le,rn.z*le)}if(qe&&qe.length>=6){const rt=[];for(let _t=0;_t<qe.length;_t+=3)rt.push(new F(qe[_t],qe[_t+1],qe[_t+2]));if(rt.length>=2){const _t=new Cr(rt),rn=k/10*.01,fn=new Hs(_t,rt.length*2,rn,8,!1),Mn=new Wt(fn,Ye);Mn.renderOrder=0,_.add(Mn)}}}for(let Ke=-180;Ke<180;Ke+=lt){const qe=[];for(let rt=0;rt<=64;rt++){const _t=rt/64*180-90,rn=wr(_t,Ke);qe.push(rn.x*le,rn.y*le,rn.z*le)}if(qe&&qe.length>=6){const rt=[];for(let _t=0;_t<qe.length;_t+=3)rt.push(new F(qe[_t],qe[_t+1],qe[_t+2]));if(rt.length>=2){const _t=new Cr(rt),rn=k/10*.01,fn=new Hs(_t,rt.length*2,rn,8,!1),Mn=new Wt(fn,Ye);Mn.renderOrder=0,_.add(Mn)}}}}let R=null,U=[];const O=async()=>{try{w(!0);const Xe=await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/50m/physical/ne_50m_land.json");if(!Xe.ok)throw new Error("Failed to load land data");const Ye=await Xe.json();for(;C.children.length>0;)C.remove(C.children[0]);if(d&&h&&it.a>0){const an=new ke(Je),Gn=new qn({color:an,transparent:it.a<1,opacity:it.a,depthTest:!0,depthWrite:!0}),Pt=hd(),dn=od().projection(Pt);let Yt=0,kt=0;Ye.features.forEach(zt=>{var Z,q,Y;const Sn=((Z=zt.properties)==null?void 0:Z.featurecla)||((q=zt.properties)==null?void 0:q.type)||"",ri=((Y=zt.properties)==null?void 0:Y.name)||"";if(Sn.toLowerCase().includes("graticule")||Sn.toLowerCase().includes("grid")||Sn.toLowerCase().includes("line")||ri.toLowerCase().includes("graticule")||ri.toLowerCase().includes("grid")||ri.toLowerCase().includes("line")){kt++;return}Yt++;const Ti=dn(zt);if(!Ti||(Ti.match(/[ML][^MLZ]*/g)||[]).length===0)return;const T=zt.geometry;if(!T||!T.coordinates)return;const G=_e=>{if(_e.length<2)return;const Ae=p1(_e,S),ve=[];if(Ae.forEach(Se=>{const[we,Be]=Se,ze=wr(Be,we);ve.push(ze.x*le,ze.y*le,ze.z*le)}),ve&&ve.length>=6){const Se=[];for(let we=0;we<ve.length;we+=3)Se.push(new F(ve[we],ve[we+1],ve[we+2]));if(Se.length>0&&Se[0].distanceTo(Se[Se.length-1])>.001&&Se.push(Se[0].clone()),Se.length>=2){const we=new Cr(Se),Be=m/10*.01,ze=new Hs(we,Se.length*2,Be,8,!1),De=new Wt(ze,Gn);De.renderOrder=0,C.add(De)}}};T.type==="Polygon"&&T.coordinates.length>0?G(T.coordinates[0]):T.type==="MultiPolygon"&&T.coordinates.forEach(_e=>{_e.length>0&&G(_e[0])})}),console.log(`[Globe] Processed ${Yt} land features, skipped ${kt} grid features`)}const lt=2048,Ke=1024,qe=document.createElement("canvas");qe.width=lt,qe.height=Ke;const vt=qe.getContext("2d",{willReadFrequently:!0});if(!vt)throw new Error("Canvas not supported");const rt=hd().fitSize([lt,Ke],{type:"Sphere"}),_t=od().projection(rt).context(vt);vt.fillStyle="#000",vt.fillRect(0,0,lt,Ke),vt.fillStyle="#fff",vt.beginPath(),Ye.features.forEach(an=>{_t(an)}),vt.fill();const fn=vt.getImageData(0,0,lt,Ke).data,Mn=(an,Gn)=>{const Pt=Math.round((an+180)/360*lt)%lt,dn=Math.round((90-Gn)/180*Ke),kt=(Math.max(0,Math.min(Ke-1,dn))*lt+Pt)*4;return fn[kt]>128};if(i==="solid"){const Pt=document.createElement("canvas");Pt.width=1024,Pt.height=512;const dn=Pt.getContext("2d"),Yt=dn.createImageData(1024,512),kt=Yt.data,zt=Math.round(st.r*255),Sn=Math.round(st.g*255),ri=Math.round(st.b*255),Ti=Math.round((st.a||1)*255);for(let Z=0;Z<512;Z++)for(let q=0;q<1024;q++){const Y=q/1024,_e=Z/512;let Ae=(Y-.25)*360;Ae=((Ae+180)%360+360)%360-180;const ve=(_e-.5)*180,Se=D||Mn(Ae,ve),we=(Z*1024+q)*4;Se?(kt[we]=zt,kt[we+1]=Sn,kt[we+2]=ri,kt[we+3]=Ti):kt[we+3]=0}dn.putImageData(Yt,0,0);const Hn=new tv(Pt);Hn.flipY=!1,Hn.needsUpdate=!0;const T=new Gs(le*1.002,64,64),G=new qn({map:Hn,transparent:!0});R=new Wt(T,G),K.add(R)}else{const an=[],Gn=H*.08;for(let Pt=-90;Pt<=90;Pt+=Gn){const dn=Math.abs(Pt)*Math.PI/180,Yt=Math.cos(dn),kt=Yt>.01?Gn/Math.max(.3,Yt):360;for(let zt=-180;zt<180;zt+=kt)(D||Mn(zt,Pt))&&an.push([zt,Pt])}if(an.length>0){const Pt=new Gs(.01*z,4,4),dn=Oe?new ke(Oe):new ke(.6,.6,.6),Yt=new qn({color:dn,transparent:ct.a<1||ct.a===0,opacity:ct.a}),kt=new Em(Pt,Yt,an.length),zt=new pt;for(let Sn=0;Sn<an.length;Sn++){const[ri,Ti]=an[Sn],Hn=wr(Ti,ri);zt.makeScale(1,1,1),zt.setPosition(Hn.x*le,Hn.y*le,Hn.z*le),kt.setMatrixAt(Sn,zt)}kt.instanceMatrix.needsUpdate=!0,R=kt,K.add(R)}}ee(),Ee.render(We,Ne),Re.style.opacity="1",Re.style.visibility="visible",w(!1)}catch{P("Failed to load land map data"),w(!1)}},ee=()=>{if(U.forEach(Xe=>K.remove(Xe)),U=[],o.markers&&o.markers.length>0){const Xe=.01*j,Ye=new Gs(Xe,16,16),lt=je?new ke(je):new ke(1,1,1),Ke=new qn({color:lt});o.markers.forEach(qe=>{if(!qe||typeof qe.lat!="number"||typeof qe.lng!="number")return;const vt=wr(qe.lat,qe.lng),rt=new Wt(Ye,Ke.clone());rt.position.set(vt.x*le,vt.y*le,vt.z*le),K.add(rt),U.push(rt)})}},J=u*Math.PI/180,V=c*Math.PI/180,W={x:J,y:V},te={x:J,y:V},Q={x:0,y:0};let ie=!1,ne=!1,fe=0,pe=0,ye=null;const I=$===0?1:Si($,0,1,.4,.03),ce=Si($,0,1,.7,.96),K=new ki;K.rotation.y=J,K.rotation.x=V,We.add(K),K.add(Ze),y&&g&&ut.a>0&&K.add(_),K.add(C),U.forEach(Xe=>K.add(Xe));const ge=()=>{let Xe=!1;const Ye=.01;!ie&&N!==0&&(!a||!ne)&&(te.x+=N*.01),!ie&&$>0&&(Math.abs(Q.x)>Ye||Math.abs(Q.y)>Ye?(te.x+=Q.x,te.y+=Q.y,te.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,te.y)),Q.x*=ce,Q.y*=ce):(Q.x=0,Q.y=0));const lt=te.x-W.x,Ke=te.y-W.y;(Math.abs(lt)>Ye||Math.abs(Ke)>Ye||N!==0||ie)&&(W.x+=lt*I,W.y+=Ke*I,W.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,W.y)),Xe=!0),(Xe||N!==0||ie)&&(K.rotation.y=W.x,K.rotation.x=W.y,Ee.render(We,Ne));const qe=Math.abs(Q.x)>Ye||Math.abs(Q.y)>Ye,vt=Math.abs(lt)>Ye||Math.abs(Ke)>Ye;ie||N!==0||qe||vt?ye=requestAnimationFrame(ge):ye=null},xe=()=>{ye===null&&(ye=requestAnimationFrame(ge))};N!==0&&xe();const oe=Xe=>{ie=!0,Q.x=0,Q.y=0,fe=Xe.clientX,pe=Xe.clientY,xe();const Ye=Ke=>{const qe=f1(p),vt=Ke.clientX-fe,rt=Ke.clientY-pe;te.x+=vt*qe,te.y+=rt*qe,te.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,te.y)),Q.x=vt*qe*.3,Q.y=rt*qe*.3,fe=Ke.clientX,pe=Ke.clientY},lt=()=>{document.removeEventListener("mousemove",Ye),document.removeEventListener("mouseup",lt),ie=!1};document.addEventListener("mousemove",Ye),document.addEventListener("mouseup",lt)};Re.addEventListener("mousedown",oe);const Te=new Av,Me=new Le,ht=Xe=>{if(!a)return;const Ye=Re.getBoundingClientRect();Me.x=(Xe.clientX-Ye.left)/Ye.width*2-1,Me.y=-((Xe.clientY-Ye.top)/Ye.height)*2+1,Te.setFromCamera(Me,Ne),ne=Te.intersectObject(Ze).length>0};Re.addEventListener("mousemove",ht);const ft=new ResizeObserver(()=>{const Xe=ue.clientWidth||ue.offsetWidth||800,Ye=ue.clientHeight||ue.offsetHeight||600;Ne.aspect=Xe/Ye,Ne.updateProjectionMatrix(),Ee.setSize(Xe,Ye);const lt=2.5/re;Ne.position.set(0,0,lt),Ne.lookAt(0,0,0),Ee.render(We,Ne)});return ft.observe(ue),O(),()=>{ye!==null&&cancelAnimationFrame(ye),Re.removeEventListener("mousedown",oe),Re.removeEventListener("mousemove",ht),ft.disconnect(),Ee.dispose(),ue.removeChild(Re)}},[n,e,t,i,s,D,L,A,v,r,a,o,l,c,u,f,h,d,g,y,m,p,S,N,H,z,j,re]);const de={...E,position:"relative",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return b?x.jsx("div",{style:de,children:x.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minWidth:0,minHeight:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#ffffff",textAlign:"center",padding:"16px",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},children:[x.jsx("div",{style:{fontSize:"16px",fontWeight:600},children:"Error loading Earth visualization"}),x.jsx("div",{style:{fontSize:"13px",opacity:.7,marginTop:"4px"},children:b})]})}):x.jsx("div",{ref:M,style:de})}const Yu=ae.createContext({});function Ku(n){const e=ae.useRef(null);return e.current===null&&(e.current=n()),e.current}const zo=ae.createContext(null),Zu=ae.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class g1 extends ae.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function x1({children:n,isPresent:e}){const t=ae.useId(),i=ae.useRef(null),s=ae.useRef({width:0,height:0,top:0,left:0}),{nonce:r}=ae.useContext(Zu);return ae.useInsertionEffect(()=>{const{width:a,height:o,top:l,left:c}=s.current;if(e||!i.current||!a||!o)return;i.current.dataset.motionPopId=t;const u=document.createElement("style");return r&&(u.nonce=r),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),x.jsx(g1,{isPresent:e,childRef:i,sizeRef:s,children:ae.cloneElement(n,{ref:i})})}const v1=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:s,presenceAffectsLayout:r,mode:a})=>{const o=Ku(_1),l=ae.useId(),c=ae.useCallback(f=>{o.set(f,!0);for(const h of o.values())if(!h)return;i&&i()},[o,i]),u=ae.useMemo(()=>({id:l,initial:e,isPresent:t,custom:s,onExitComplete:c,register:f=>(o.set(f,!1),()=>o.delete(f))}),r?[Math.random(),c]:[t,c]);return ae.useMemo(()=>{o.forEach((f,h)=>o.set(h,!1))},[t]),ae.useEffect(()=>{!t&&!o.size&&i&&i()},[t]),a==="popLayout"&&(n=x.jsx(x1,{isPresent:t,children:n})),x.jsx(zo.Provider,{value:u,children:n})};function _1(){return new Map}function rg(n=!0){const e=ae.useContext(zo);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:s}=e,r=ae.useId();ae.useEffect(()=>{n&&s(r)},[n]);const a=ae.useCallback(()=>n&&i&&i(r),[r,i,n]);return!t&&i?[!1,a]:[!0]}const Wa=n=>n.key||"";function fd(n){const e=[];return ae.Children.forEach(n,t=>{ae.isValidElement(t)&&e.push(t)}),e}const Ju=typeof window<"u",ag=Ju?ae.useLayoutEffect:ae.useEffect,y1=({children:n,custom:e,initial:t=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:r="sync",propagate:a=!1})=>{const[o,l]=rg(a),c=ae.useMemo(()=>fd(n),[n]),u=a&&!o?[]:c.map(Wa),f=ae.useRef(!0),h=ae.useRef(c),d=Ku(()=>new Map),[g,y]=ae.useState(c),[m,p]=ae.useState(c);ag(()=>{f.current=!1,h.current=c;for(let M=0;M<m.length;M++){const w=Wa(m[M]);u.includes(w)?d.delete(w):d.get(w)!==!0&&d.set(w,!1)}},[m,u.length,u.join("-")]);const S=[];if(c!==g){let M=[...c];for(let w=0;w<m.length;w++){const b=m[w],P=Wa(b);u.includes(P)||(M.splice(w,0,b),S.push(b))}r==="wait"&&S.length&&(M=S),p(fd(M)),y(c);return}const{forceRender:E}=ae.useContext(Yu);return x.jsx(x.Fragment,{children:m.map(M=>{const w=Wa(M),b=a&&!o?!1:c===m||u.includes(w),P=()=>{if(d.has(w))d.set(w,!0);else return;let v=!0;d.forEach(A=>{A||(v=!1)}),v&&(E==null||E(),p(h.current),a&&(l==null||l()),i&&i())};return x.jsx(v1,{isPresent:b,initial:!f.current||t?void 0:!1,custom:b?void 0:e,presenceAffectsLayout:s,mode:r,onExitComplete:b?void 0:P,children:M},w)})})},_n=n=>n;let og=_n;function Qu(n){let e;return()=>(e===void 0&&(e=n()),e)}const rr=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i},vi=n=>n*1e3,_i=n=>n/1e3,M1={useManualTiming:!1};function S1(n){let e=new Set,t=new Set,i=!1,s=!1;const r=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function o(c){r.has(c)&&(l.schedule(c),n()),c(a)}const l={schedule:(c,u=!1,f=!1)=>{const d=f&&i?e:t;return u&&r.add(c),d.has(c)||d.add(c),c},cancel:c=>{t.delete(c),r.delete(c)},process:c=>{if(a=c,i){s=!0;return}i=!0,[e,t]=[t,e],e.forEach(o),e.clear(),i=!1,s&&(s=!1,l.process(c))}};return l}const ja=["read","resolveKeyframes","update","preRender","render","postRender"],b1=40;function lg(n,e){let t=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>t=!0,a=ja.reduce((p,S)=>(p[S]=S1(r),p),{}),{read:o,resolveKeyframes:l,update:c,preRender:u,render:f,postRender:h}=a,d=()=>{const p=performance.now();t=!1,s.delta=i?1e3/60:Math.max(Math.min(p-s.timestamp,b1),1),s.timestamp=p,s.isProcessing=!0,o.process(s),l.process(s),c.process(s),u.process(s),f.process(s),h.process(s),s.isProcessing=!1,t&&e&&(i=!1,n(d))},g=()=>{t=!0,i=!0,s.isProcessing||n(d)};return{schedule:ja.reduce((p,S)=>{const E=a[S];return p[S]=(M,w=!1,b=!1)=>(t||g(),E.schedule(M,w,b)),p},{}),cancel:p=>{for(let S=0;S<ja.length;S++)a[ja[S]].cancel(p)},state:s,steps:a}}const{schedule:Et,cancel:Hi,state:jt,steps:Il}=lg(typeof requestAnimationFrame<"u"?requestAnimationFrame:_n,!0),cg=ae.createContext({strict:!1}),dd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ar={};for(const n in dd)ar[n]={isEnabled:e=>dd[n].some(t=>!!e[t])};function E1(n){for(const e in n)ar[e]={...ar[e],...n[e]}}const T1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Co(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||T1.has(n)}let ug=n=>!Co(n);function w1(n){n&&(ug=e=>e.startsWith("on")?!Co(e):n(e))}try{w1(require("@emotion/is-prop-valid").default)}catch{}function A1(n,e,t){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(ug(s)||t===!0&&Co(s)||!e&&!Co(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}function R1(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...i)=>n(...i);return new Proxy(t,{get:(i,s)=>s==="create"?n:(e.has(s)||e.set(s,n(s)),e.get(s))})}const Vo=ae.createContext({});function Qr(n){return typeof n=="string"||Array.isArray(n)}function Go(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const eh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],th=["initial",...eh];function Ho(n){return Go(n.animate)||th.some(e=>Qr(n[e]))}function hg(n){return!!(Ho(n)||n.variants)}function C1(n,e){if(Ho(n)){const{initial:t,animate:i}=n;return{initial:t===!1||Qr(t)?t:void 0,animate:Qr(i)?i:void 0}}return n.inherit!==!1?e:{}}function P1(n){const{initial:e,animate:t}=C1(n,ae.useContext(Vo));return ae.useMemo(()=>({initial:e,animate:t}),[pd(e),pd(t)])}function pd(n){return Array.isArray(n)?n.join(" "):n}const N1=Symbol.for("motionComponentSymbol");function js(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function D1(n,e,t){return ae.useCallback(i=>{i&&n.onMount&&n.onMount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):js(t)&&(t.current=i))},[e])}const nh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),L1="framerAppearId",fg="data-"+nh(L1),{schedule:ih}=lg(queueMicrotask,!1),dg=ae.createContext({});function I1(n,e,t,i,s){var r,a;const{visualElement:o}=ae.useContext(Vo),l=ae.useContext(cg),c=ae.useContext(zo),u=ae.useContext(Zu).reducedMotion,f=ae.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(n,{visualState:e,parent:o,props:t,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const h=f.current,d=ae.useContext(dg);h&&!h.projection&&s&&(h.type==="html"||h.type==="svg")&&U1(f.current,t,s,d);const g=ae.useRef(!1);ae.useInsertionEffect(()=>{h&&g.current&&h.update(t,c)});const y=t[fg],m=ae.useRef(!!y&&!(!((r=window.MotionHandoffIsComplete)===null||r===void 0)&&r.call(window,y))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,y)));return ag(()=>{h&&(g.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),ih.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())}),ae.useEffect(()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,y)}),m.current=!1))}),h}function U1(n,e,t,i){const{layoutId:s,layout:r,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:c}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:pg(n.parent)),n.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!a||o&&js(o),visualElement:n,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function pg(n){if(n)return n.options.allowProjection!==!1?n.projection:pg(n.parent)}function F1({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:i,Component:s}){var r,a;n&&E1(n);function o(c,u){let f;const h={...ae.useContext(Zu),...c,layoutId:O1(c)},{isStatic:d}=h,g=P1(c),y=i(c,d);if(!d&&Ju){B1();const m=k1(h);f=m.MeasureLayout,g.visualElement=I1(s,y,h,e,m.ProjectionNode)}return x.jsxs(Vo.Provider,{value:g,children:[f&&g.visualElement?x.jsx(f,{visualElement:g.visualElement,...h}):null,t(s,c,D1(y,g.visualElement,u),y,d,g.visualElement)]})}o.displayName=`motion.${typeof s=="string"?s:`create(${(a=(r=s.displayName)!==null&&r!==void 0?r:s.name)!==null&&a!==void 0?a:""})`}`;const l=ae.forwardRef(o);return l[N1]=s,l}function O1({layoutId:n}){const e=ae.useContext(Yu).id;return e&&n!==void 0?e+"-"+n:n}function B1(n,e){ae.useContext(cg).strict}function k1(n){const{drag:e,layout:t}=ar;if(!e&&!t)return{};const i={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const z1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sh(n){return typeof n!="string"||n.includes("-")?!1:!!(z1.indexOf(n)>-1||/[A-Z]/u.test(n))}function md(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function rh(n,e,t,i){if(typeof e=="function"){const[s,r]=md(i);e=e(t!==void 0?t:n.custom,s,r)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[s,r]=md(i);e=e(t!==void 0?t:n.custom,s,r)}return e}const gu=n=>Array.isArray(n),V1=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),G1=n=>gu(n)?n[n.length-1]||0:n,nn=n=>!!(n&&n.getVelocity);function oo(n){const e=nn(n)?n.get():n;return V1(e)?e.toValue():e}function H1({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},i,s,r){const a={latestValues:W1(i,s,r,n),renderState:e()};return t&&(a.onMount=o=>t({props:i,current:o,...a}),a.onUpdate=o=>t(o)),a}const mg=n=>(e,t)=>{const i=ae.useContext(Vo),s=ae.useContext(zo),r=()=>H1(n,e,i,s);return t?r():Ku(r)};function W1(n,e,t,i){const s={},r=i(n,{});for(const h in r)s[h]=oo(r[h]);let{initial:a,animate:o}=n;const l=Ho(n),c=hg(n);e&&c&&!l&&n.inherit!==!1&&(a===void 0&&(a=e.initial),o===void 0&&(o=e.animate));let u=t?t.initial===!1:!1;u=u||a===!1;const f=u?o:a;if(f&&typeof f!="boolean"&&!Go(f)){const h=Array.isArray(f)?f:[f];for(let d=0;d<h.length;d++){const g=rh(n,h[d]);if(g){const{transitionEnd:y,transition:m,...p}=g;for(const S in p){let E=p[S];if(Array.isArray(E)){const M=u?E.length-1:0;E=E[M]}E!==null&&(s[S]=E)}for(const S in y)s[S]=y[S]}}}return s}const fr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ps=new Set(fr),gg=n=>e=>typeof e=="string"&&e.startsWith(n),xg=gg("--"),j1=gg("var(--"),ah=n=>j1(n)?X1.test(n.split("/*")[0].trim()):!1,X1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,vg=(n,e)=>e&&typeof n=="number"?e.transform(n):n,bi=(n,e,t)=>t>e?e:t<n?n:t,dr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ea={...dr,transform:n=>bi(0,1,n)},Xa={...dr,default:1},aa=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Fi=aa("deg"),ti=aa("%"),Ue=aa("px"),q1=aa("vh"),$1=aa("vw"),gd={...ti,parse:n=>ti.parse(n)/100,transform:n=>ti.transform(n*100)},Y1={borderWidth:Ue,borderTopWidth:Ue,borderRightWidth:Ue,borderBottomWidth:Ue,borderLeftWidth:Ue,borderRadius:Ue,radius:Ue,borderTopLeftRadius:Ue,borderTopRightRadius:Ue,borderBottomRightRadius:Ue,borderBottomLeftRadius:Ue,width:Ue,maxWidth:Ue,height:Ue,maxHeight:Ue,top:Ue,right:Ue,bottom:Ue,left:Ue,padding:Ue,paddingTop:Ue,paddingRight:Ue,paddingBottom:Ue,paddingLeft:Ue,margin:Ue,marginTop:Ue,marginRight:Ue,marginBottom:Ue,marginLeft:Ue,backgroundPositionX:Ue,backgroundPositionY:Ue},K1={rotate:Fi,rotateX:Fi,rotateY:Fi,rotateZ:Fi,scale:Xa,scaleX:Xa,scaleY:Xa,scaleZ:Xa,skew:Fi,skewX:Fi,skewY:Fi,distance:Ue,translateX:Ue,translateY:Ue,translateZ:Ue,x:Ue,y:Ue,z:Ue,perspective:Ue,transformPerspective:Ue,opacity:ea,originX:gd,originY:gd,originZ:Ue},xd={...dr,transform:Math.round},oh={...Y1,...K1,zIndex:xd,size:Ue,fillOpacity:ea,strokeOpacity:ea,numOctaves:xd},Z1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},J1=fr.length;function Q1(n,e,t){let i="",s=!0;for(let r=0;r<J1;r++){const a=fr[r],o=n[a];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(a.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||t){const c=vg(o,oh[a]);if(!l){s=!1;const u=Z1[a]||a;i+=`${u}(${c}) `}t&&(e[a]=c)}}return i=i.trim(),t?i=t(e,s?"":i):s&&(i="none"),i}function lh(n,e,t){const{style:i,vars:s,transformOrigin:r}=n;let a=!1,o=!1;for(const l in e){const c=e[l];if(ps.has(l)){a=!0;continue}else if(xg(l)){s[l]=c;continue}else{const u=vg(c,oh[l]);l.startsWith("origin")?(o=!0,r[l]=u):i[l]=u}}if(e.transform||(a||t?i.transform=Q1(e,n.transform,t):i.transform&&(i.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;i.transformOrigin=`${l} ${c} ${u}`}}const eE={offset:"stroke-dashoffset",array:"stroke-dasharray"},tE={offset:"strokeDashoffset",array:"strokeDasharray"};function nE(n,e,t=1,i=0,s=!0){n.pathLength=1;const r=s?eE:tE;n[r.offset]=Ue.transform(-i);const a=Ue.transform(e),o=Ue.transform(t);n[r.array]=`${a} ${o}`}function vd(n,e,t){return typeof n=="string"?n:Ue.transform(e+t*n)}function iE(n,e,t){const i=vd(e,n.x,n.width),s=vd(t,n.y,n.height);return`${i} ${s}`}function ch(n,{attrX:e,attrY:t,attrScale:i,originX:s,originY:r,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...c},u,f){if(lh(n,c,f),u){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:h,style:d,dimensions:g}=n;h.transform&&(g&&(d.transform=h.transform),delete h.transform),g&&(s!==void 0||r!==void 0||d.transform)&&(d.transformOrigin=iE(g,s!==void 0?s:.5,r!==void 0?r:.5)),e!==void 0&&(h.x=e),t!==void 0&&(h.y=t),i!==void 0&&(h.scale=i),a!==void 0&&nE(h,a,o,l,!1)}const uh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),_g=()=>({...uh(),attrs:{}}),hh=n=>typeof n=="string"&&n.toLowerCase()==="svg";function yg(n,{style:e,vars:t},i,s){Object.assign(n.style,e,s&&s.getProjectionStyles(i));for(const r in t)n.style.setProperty(r,t[r])}const Mg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Sg(n,e,t,i){yg(n,e,void 0,i);for(const s in e.attrs)n.setAttribute(Mg.has(s)?s:nh(s),e.attrs[s])}const Po={};function sE(n){Object.assign(Po,n)}function bg(n,{layout:e,layoutId:t}){return ps.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Po[n]||n==="opacity")}function fh(n,e,t){var i;const{style:s}=n,r={};for(const a in s)(nn(s[a])||e.style&&nn(e.style[a])||bg(a,n)||((i=t==null?void 0:t.getValue(a))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(r[a]=s[a]);return r}function Eg(n,e,t){const i=fh(n,e,t);for(const s in n)if(nn(n[s])||nn(e[s])){const r=fr.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=n[s]}return i}function rE(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const _d=["x","y","width","height","cx","cy","r"],aE={useVisualState:mg({scrapeMotionValuesFromProps:Eg,createRenderState:_g,onUpdate:({props:n,prevProps:e,current:t,renderState:i,latestValues:s})=>{if(!t)return;let r=!!n.drag;if(!r){for(const o in s)if(ps.has(o)){r=!0;break}}if(!r)return;let a=!e;if(e)for(let o=0;o<_d.length;o++){const l=_d[o];n[l]!==e[l]&&(a=!0)}a&&Et.read(()=>{rE(t,i),Et.render(()=>{ch(i,s,hh(t.tagName),n.transformTemplate),Sg(t,i)})})}})},oE={useVisualState:mg({scrapeMotionValuesFromProps:fh,createRenderState:uh})};function Tg(n,e,t){for(const i in e)!nn(e[i])&&!bg(i,t)&&(n[i]=e[i])}function lE({transformTemplate:n},e){return ae.useMemo(()=>{const t=uh();return lh(t,e,n),Object.assign({},t.vars,t.style)},[e])}function cE(n,e){const t=n.style||{},i={};return Tg(i,t,n),Object.assign(i,lE(n,e)),i}function uE(n,e){const t={},i=cE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}function hE(n,e,t,i){const s=ae.useMemo(()=>{const r=_g();return ch(r,e,hh(i),n.transformTemplate),{...r.attrs,style:{...r.style}}},[e]);if(n.style){const r={};Tg(r,n.style,n),s.style={...r,...s.style}}return s}function fE(n=!1){return(t,i,s,{latestValues:r},a)=>{const l=(sh(t)?hE:uE)(i,r,a,t),c=A1(i,typeof t=="string",n),u=t!==ae.Fragment?{...c,...l,ref:s}:{},{children:f}=i,h=ae.useMemo(()=>nn(f)?f.get():f,[f]);return ae.createElement(t,{...u,children:h})}}function dE(n,e){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const a={...sh(i)?aE:oE,preloadedFeatures:n,useRender:fE(s),createVisualElement:e,Component:i};return F1(a)}}function wg(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}function Wo(n,e,t){const i=n.getProps();return rh(i,e,t!==void 0?t:i.custom,n)}const pE=Qu(()=>window.ScrollTimeline!==void 0);class mE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e,t){const i=this.animations.map(s=>{if(pE()&&s.attachTimeline)return s.attachTimeline(e);if(typeof t=="function")return t(s)});return()=>{i.forEach((s,r)=>{s&&s(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class gE extends mE{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function dh(n,e){return n?n[e]||n.default||n:void 0}const xu=2e4;function Ag(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<xu;)e+=t,i=n.next(e);return e>=xu?1/0:e}function ph(n){return typeof n=="function"}function yd(n,e){n.timeline=e,n.onfinish=null}const mh=n=>Array.isArray(n)&&typeof n[0]=="number",xE={linearEasing:void 0};function vE(n,e){const t=Qu(n);return()=>{var i;return(i=xE[e])!==null&&i!==void 0?i:t()}}const No=vE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Rg=(n,e,t=10)=>{let i="";const s=Math.max(Math.round(e/t),2);for(let r=0;r<s;r++)i+=n(rr(0,s-1,r))+", ";return`linear(${i.substring(0,i.length-2)})`};function Cg(n){return!!(typeof n=="function"&&No()||!n||typeof n=="string"&&(n in vu||No())||mh(n)||Array.isArray(n)&&n.every(Cg))}const Fr=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,vu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fr([0,.65,.55,1]),circOut:Fr([.55,0,1,.45]),backIn:Fr([.31,.01,.66,-.59]),backOut:Fr([.33,1.53,.69,.99])};function Pg(n,e){if(n)return typeof n=="function"&&No()?Rg(n,e):mh(n)?Fr(n):Array.isArray(n)?n.map(t=>Pg(t,e)||vu.easeOut):vu[n]}const kn={x:!1,y:!1};function Ng(){return kn.x||kn.y}function _E(n,e,t){var i;if(n instanceof Element)return[n];if(typeof n=="string"){let s=document;const r=(i=void 0)!==null&&i!==void 0?i:s.querySelectorAll(n);return r?Array.from(r):[]}return Array.from(n)}function Dg(n,e){const t=_E(n),i=new AbortController,s={passive:!0,...e,signal:i.signal};return[t,s,()=>i.abort()]}function Md(n){return e=>{e.pointerType==="touch"||Ng()||n(e)}}function yE(n,e,t={}){const[i,s,r]=Dg(n,t),a=Md(o=>{const{target:l}=o,c=e(o);if(typeof c!="function"||!l)return;const u=Md(f=>{c(f),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,s)});return i.forEach(o=>{o.addEventListener("pointerenter",a,s)}),r}const Lg=(n,e)=>e?n===e?!0:Lg(n,e.parentElement):!1,gh=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,ME=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function SE(n){return ME.has(n.tagName)||n.tabIndex!==-1}const Or=new WeakSet;function Sd(n){return e=>{e.key==="Enter"&&n(e)}}function Ul(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const bE=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=Sd(()=>{if(Or.has(t))return;Ul(t,"down");const s=Sd(()=>{Ul(t,"up")}),r=()=>Ul(t,"cancel");t.addEventListener("keyup",s,e),t.addEventListener("blur",r,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function bd(n){return gh(n)&&!Ng()}function EE(n,e,t={}){const[i,s,r]=Dg(n,t),a=o=>{const l=o.currentTarget;if(!bd(o)||Or.has(l))return;Or.add(l);const c=e(o),u=(d,g)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),!(!bd(d)||!Or.has(l))&&(Or.delete(l),typeof c=="function"&&c(d,{success:g}))},f=d=>{u(d,t.useGlobalTarget||Lg(l,d.target))},h=d=>{u(d,!1)};window.addEventListener("pointerup",f,s),window.addEventListener("pointercancel",h,s)};return i.forEach(o=>{!SE(o)&&o.getAttribute("tabindex")===null&&(o.tabIndex=0),(t.useGlobalTarget?window:o).addEventListener("pointerdown",a,s),o.addEventListener("focus",c=>bE(c,s),s)}),r}function TE(n){return n==="x"||n==="y"?kn[n]?null:(kn[n]=!0,()=>{kn[n]=!1}):kn.x||kn.y?null:(kn.x=kn.y=!0,()=>{kn.x=kn.y=!1})}const Ig=new Set(["width","height","top","left","right","bottom",...fr]);let lo;function wE(){lo=void 0}const ni={now:()=>(lo===void 0&&ni.set(jt.isProcessing||M1.useManualTiming?jt.timestamp:performance.now()),lo),set:n=>{lo=n,queueMicrotask(wE)}};function xh(n,e){n.indexOf(e)===-1&&n.push(e)}function vh(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class _h{constructor(){this.subscriptions=[]}add(e){return xh(this.subscriptions,e),()=>vh(this.subscriptions,e)}notify(e,t,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,t,i);else for(let r=0;r<s;r++){const a=this.subscriptions[r];a&&a(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Ug(n,e){return e?n*(1e3/e):0}const Ed=30,AE=n=>!isNaN(parseFloat(n));class RE{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=ni.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ni.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=AE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new _h);const i=this.events[e].add(t);return e==="change"?()=>{i(),Et.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ni.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ed)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Ed);return Ug(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ta(n,e){return new RE(n,e)}function CE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,ta(t))}function PE(n,e){const t=Wo(n,e);let{transitionEnd:i={},transition:s={},...r}=t||{};r={...r,...i};for(const a in r){const o=G1(r[a]);CE(n,a,o)}}function NE(n){return!!(nn(n)&&n.add)}function _u(n,e){const t=n.getValue("willChange");if(NE(t))return t.add(e)}function Fg(n){return n.props[fg]}const Og=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,DE=1e-7,LE=12;function IE(n,e,t,i,s){let r,a,o=0;do a=e+(t-e)/2,r=Og(a,i,s)-n,r>0?t=a:e=a;while(Math.abs(r)>DE&&++o<LE);return a}function oa(n,e,t,i){if(n===e&&t===i)return _n;const s=r=>IE(r,0,1,n,t);return r=>r===0||r===1?r:Og(s(r),e,i)}const Bg=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,kg=n=>e=>1-n(1-e),zg=oa(.33,1.53,.69,.99),yh=kg(zg),Vg=Bg(yh),Gg=n=>(n*=2)<1?.5*yh(n):.5*(2-Math.pow(2,-10*(n-1))),Mh=n=>1-Math.sin(Math.acos(n)),Hg=kg(Mh),Wg=Bg(Mh),jg=n=>/^0[^.\s]+$/u.test(n);function UE(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||jg(n):!0}const Vr=n=>Math.round(n*1e5)/1e5,Sh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function FE(n){return n==null}const OE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,bh=(n,e)=>t=>!!(typeof t=="string"&&OE.test(t)&&t.startsWith(n)||e&&!FE(t)&&Object.prototype.hasOwnProperty.call(t,e)),Xg=(n,e,t)=>i=>{if(typeof i!="string")return i;const[s,r,a,o]=i.match(Sh);return{[n]:parseFloat(s),[e]:parseFloat(r),[t]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},BE=n=>bi(0,255,n),Fl={...dr,transform:n=>Math.round(BE(n))},ss={test:bh("rgb","red"),parse:Xg("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Fl.transform(n)+", "+Fl.transform(e)+", "+Fl.transform(t)+", "+Vr(ea.transform(i))+")"};function kE(n){let e="",t="",i="",s="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),e+=e,t+=t,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const yu={test:bh("#"),parse:kE,transform:ss.transform},Xs={test:bh("hsl","hue"),parse:Xg("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+ti.transform(Vr(e))+", "+ti.transform(Vr(t))+", "+Vr(ea.transform(i))+")"},Qt={test:n=>ss.test(n)||yu.test(n)||Xs.test(n),parse:n=>ss.test(n)?ss.parse(n):Xs.test(n)?Xs.parse(n):yu.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ss.transform(n):Xs.transform(n)},zE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function VE(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Sh))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(zE))===null||t===void 0?void 0:t.length)||0)>0}const qg="number",$g="color",GE="var",HE="var(",Td="${}",WE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function na(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},s=[];let r=0;const o=e.replace(WE,l=>(Qt.test(l)?(i.color.push(r),s.push($g),t.push(Qt.parse(l))):l.startsWith(HE)?(i.var.push(r),s.push(GE),t.push(l)):(i.number.push(r),s.push(qg),t.push(parseFloat(l))),++r,Td)).split(Td);return{values:t,split:o,indexes:i,types:s}}function Yg(n){return na(n).values}function Kg(n){const{split:e,types:t}=na(n),i=e.length;return s=>{let r="";for(let a=0;a<i;a++)if(r+=e[a],s[a]!==void 0){const o=t[a];o===qg?r+=Vr(s[a]):o===$g?r+=Qt.transform(s[a]):r+=s[a]}return r}}const jE=n=>typeof n=="number"?0:n;function XE(n){const e=Yg(n);return Kg(n)(e.map(jE))}const Wi={test:VE,parse:Yg,createTransformer:Kg,getAnimatableNone:XE},qE=new Set(["brightness","contrast","saturate","opacity"]);function $E(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(Sh)||[];if(!i)return n;const s=t.replace(i,"");let r=qE.has(e)?1:0;return i!==t&&(r*=100),e+"("+r+s+")"}const YE=/\b([a-z-]*)\(.*?\)/gu,Mu={...Wi,getAnimatableNone:n=>{const e=n.match(YE);return e?e.map($E).join(" "):n}},KE={...oh,color:Qt,backgroundColor:Qt,outlineColor:Qt,fill:Qt,stroke:Qt,borderColor:Qt,borderTopColor:Qt,borderRightColor:Qt,borderBottomColor:Qt,borderLeftColor:Qt,filter:Mu,WebkitFilter:Mu},Eh=n=>KE[n];function Zg(n,e){let t=Eh(n);return t!==Mu&&(t=Wi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const ZE=new Set(["auto","none","0"]);function JE(n,e,t){let i=0,s;for(;i<n.length&&!s;){const r=n[i];typeof r=="string"&&!ZE.has(r)&&na(r).values.length&&(s=n[i]),i++}if(s&&t)for(const r of e)n[r]=Zg(t,s)}const wd=n=>n===dr||n===Ue,Ad=(n,e)=>parseFloat(n.split(", ")[e]),Rd=(n,e)=>(t,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return Ad(s[1],e);{const r=i.match(/^matrix\((.+)\)$/u);return r?Ad(r[1],n):0}},QE=new Set(["x","y","z"]),eT=fr.filter(n=>!QE.has(n));function tT(n){const e=[];return eT.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const or={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Rd(4,13),y:Rd(5,14)};or.translateX=or.x;or.translateY=or.y;const rs=new Set;let Su=!1,bu=!1;function Jg(){if(bu){const n=Array.from(rs).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const s=tT(i);s.length&&(t.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const s=t.get(i);s&&s.forEach(([r,a])=>{var o;(o=i.getValue(r))===null||o===void 0||o.set(a)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}bu=!1,Su=!1,rs.forEach(n=>n.complete()),rs.clear()}function Qg(){rs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(bu=!0)})}function nT(){Qg(),Jg()}class Th{constructor(e,t,i,s,r,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=s,this.element=r,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(rs.add(this),Su||(Su=!0,Et.read(Qg),Et.resolveKeyframes(Jg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:s}=this;for(let r=0;r<e.length;r++)if(e[r]===null)if(r===0){const a=s==null?void 0:s.get(),o=e[e.length-1];if(a!==void 0)e[0]=a;else if(i&&t){const l=i.readValue(t,o);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=o),s&&a===void 0&&s.set(e[0])}else e[r]=e[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),rs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,rs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const e0=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),iT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function sT(n){const e=iT.exec(n);if(!e)return[,];const[,t,i,s]=e;return[`--${t??i}`,s]}function t0(n,e,t=1){const[i,s]=sT(n);if(!i)return;const r=window.getComputedStyle(e).getPropertyValue(i);if(r){const a=r.trim();return e0(a)?parseFloat(a):a}return ah(s)?t0(s,e,t+1):s}const n0=n=>e=>e.test(n),rT={test:n=>n==="auto",parse:n=>n},i0=[dr,Ue,ti,Fi,$1,q1,rT],Cd=n=>i0.find(n0(n));class s0 extends Th{constructor(e,t,i,s,r){super(e,t,i,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),ah(c))){const u=t0(c,t.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Ig.has(i)||e.length!==2)return;const[s,r]=e,a=Cd(s),o=Cd(r);if(a!==o)if(wd(a)&&wd(o))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let s=0;s<e.length;s++)UE(e[s])&&i.push(s);i.length&&JE(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=or[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const s=t[t.length-1];s!==void 0&&e.getValue(i,s).jump(s,!1)}measureEndState(){var e;const{element:t,name:i,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const r=t.getValue(i);r&&r.jump(this.measuredOrigin,!1);const a=s.length-1,o=s[a];s[a]=or[i](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Pd=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Wi.test(n)||n==="0")&&!n.startsWith("url("));function aT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function oT(n,e,t,i){const s=n[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const r=n[n.length-1],a=Pd(s,e),o=Pd(r,e);return!a||!o?!1:aT(n)||(t==="spring"||ph(t))&&i}const lT=n=>n!==null;function jo(n,{repeat:e,repeatType:t="loop"},i){const s=n.filter(lT),r=e&&t!=="loop"&&e%2===1?0:s.length-1;return!r||i===void 0?s[r]:i}const cT=40;class r0{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:a="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ni.now(),this.options={autoplay:e,delay:t,type:i,repeat:s,repeatDelay:r,repeatType:a,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>cT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&nT(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=ni.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:r,delay:a,onComplete:o,onUpdate:l,isGenerator:c}=this.options;if(!c&&!oT(e,i,s,r))if(a)this.options.duration=0;else{l&&l(jo(e,this.options,t)),o&&o(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,t);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Tt=(n,e,t)=>n+(e-n)*t;function Ol(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function uT({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let s=0,r=0,a=0;if(!e)s=r=a=t;else{const o=t<.5?t*(1+e):t+e-t*e,l=2*t-o;s=Ol(l,o,n+1/3),r=Ol(l,o,n),a=Ol(l,o,n-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:i}}function Do(n,e){return t=>t>0?e:n}const Bl=(n,e,t)=>{const i=n*n,s=t*(e*e-i)+i;return s<0?0:Math.sqrt(s)},hT=[yu,ss,Xs],fT=n=>hT.find(e=>e.test(n));function Nd(n){const e=fT(n);if(!e)return!1;let t=e.parse(n);return e===Xs&&(t=uT(t)),t}const Dd=(n,e)=>{const t=Nd(n),i=Nd(e);if(!t||!i)return Do(n,e);const s={...t};return r=>(s.red=Bl(t.red,i.red,r),s.green=Bl(t.green,i.green,r),s.blue=Bl(t.blue,i.blue,r),s.alpha=Tt(t.alpha,i.alpha,r),ss.transform(s))},dT=(n,e)=>t=>e(n(t)),la=(...n)=>n.reduce(dT),Eu=new Set(["none","hidden"]);function pT(n,e){return Eu.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function mT(n,e){return t=>Tt(n,e,t)}function wh(n){return typeof n=="number"?mT:typeof n=="string"?ah(n)?Do:Qt.test(n)?Dd:vT:Array.isArray(n)?a0:typeof n=="object"?Qt.test(n)?Dd:gT:Do}function a0(n,e){const t=[...n],i=t.length,s=n.map((r,a)=>wh(r)(r,e[a]));return r=>{for(let a=0;a<i;a++)t[a]=s[a](r);return t}}function gT(n,e){const t={...n,...e},i={};for(const s in t)n[s]!==void 0&&e[s]!==void 0&&(i[s]=wh(n[s])(n[s],e[s]));return s=>{for(const r in i)t[r]=i[r](s);return t}}function xT(n,e){var t;const i=[],s={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const a=e.types[r],o=n.indexes[a][s[a]],l=(t=n.values[o])!==null&&t!==void 0?t:0;i[r]=l,s[a]++}return i}const vT=(n,e)=>{const t=Wi.createTransformer(e),i=na(n),s=na(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Eu.has(n)&&!s.values.length||Eu.has(e)&&!i.values.length?pT(n,e):la(a0(xT(i,s),s.values),t):Do(n,e)};function o0(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Tt(n,e,t):wh(n)(n,e)}const _T=5;function l0(n,e,t){const i=Math.max(e-_T,0);return Ug(t-n(i),e-i)}const Rt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},kl=.001;function yT({duration:n=Rt.duration,bounce:e=Rt.bounce,velocity:t=Rt.velocity,mass:i=Rt.mass}){let s,r,a=1-e;a=bi(Rt.minDamping,Rt.maxDamping,a),n=bi(Rt.minDuration,Rt.maxDuration,_i(n)),a<1?(s=c=>{const u=c*a,f=u*n,h=u-t,d=Tu(c,a),g=Math.exp(-f);return kl-h/d*g},r=c=>{const f=c*a*n,h=f*t+t,d=Math.pow(a,2)*Math.pow(c,2)*n,g=Math.exp(-f),y=Tu(Math.pow(c,2),a);return(-s(c)+kl>0?-1:1)*((h-d)*g)/y}):(s=c=>{const u=Math.exp(-c*n),f=(c-t)*n+1;return-kl+u*f},r=c=>{const u=Math.exp(-c*n),f=(t-c)*(n*n);return u*f});const o=5/n,l=ST(s,r,o);if(n=vi(n),isNaN(l))return{stiffness:Rt.stiffness,damping:Rt.damping,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:n}}}const MT=12;function ST(n,e,t){let i=t;for(let s=1;s<MT;s++)i=i-n(i)/e(i);return i}function Tu(n,e){return n*Math.sqrt(1-e*e)}const bT=["duration","bounce"],ET=["stiffness","damping","mass"];function Ld(n,e){return e.some(t=>n[t]!==void 0)}function TT(n){let e={velocity:Rt.velocity,stiffness:Rt.stiffness,damping:Rt.damping,mass:Rt.mass,isResolvedFromDuration:!1,...n};if(!Ld(n,ET)&&Ld(n,bT))if(n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),s=i*i,r=2*bi(.05,1,1-(n.bounce||0))*Math.sqrt(s);e={...e,mass:Rt.mass,stiffness:s,damping:r}}else{const t=yT(n);e={...e,...t,mass:Rt.mass},e.isResolvedFromDuration=!0}return e}function c0(n=Rt.visualDuration,e=Rt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:s}=t;const r=t.keyframes[0],a=t.keyframes[t.keyframes.length-1],o={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:f,velocity:h,isResolvedFromDuration:d}=TT({...t,velocity:-_i(t.velocity||0)}),g=h||0,y=c/(2*Math.sqrt(l*u)),m=a-r,p=_i(Math.sqrt(l/u)),S=Math.abs(m)<5;i||(i=S?Rt.restSpeed.granular:Rt.restSpeed.default),s||(s=S?Rt.restDelta.granular:Rt.restDelta.default);let E;if(y<1){const w=Tu(p,y);E=b=>{const P=Math.exp(-y*p*b);return a-P*((g+y*p*m)/w*Math.sin(w*b)+m*Math.cos(w*b))}}else if(y===1)E=w=>a-Math.exp(-p*w)*(m+(g+p*m)*w);else{const w=p*Math.sqrt(y*y-1);E=b=>{const P=Math.exp(-y*p*b),v=Math.min(w*b,300);return a-P*((g+y*p*m)*Math.sinh(v)+w*m*Math.cosh(v))/w}}const M={calculatedDuration:d&&f||null,next:w=>{const b=E(w);if(d)o.done=w>=f;else{let P=0;y<1&&(P=w===0?vi(g):l0(E,w,b));const v=Math.abs(P)<=i,A=Math.abs(a-b)<=s;o.done=v&&A}return o.value=o.done?a:b,o},toString:()=>{const w=Math.min(Ag(M),xu),b=Rg(P=>M.next(w*P).value,w,30);return w+"ms "+b}};return M}function Id({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:u}){const f=n[0],h={done:!1,value:f},d=v=>o!==void 0&&v<o||l!==void 0&&v>l,g=v=>o===void 0?l:l===void 0||Math.abs(o-v)<Math.abs(l-v)?o:l;let y=t*e;const m=f+y,p=a===void 0?m:a(m);p!==m&&(y=p-f);const S=v=>-y*Math.exp(-v/i),E=v=>p+S(v),M=v=>{const A=S(v),L=E(v);h.done=Math.abs(A)<=c,h.value=h.done?p:L};let w,b;const P=v=>{d(h.value)&&(w=v,b=c0({keyframes:[h.value,g(h.value)],velocity:l0(E,v,h.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return P(0),{calculatedDuration:null,next:v=>{let A=!1;return!b&&w===void 0&&(A=!0,M(v),P(v)),w!==void 0&&v>=w?b.next(v-w):(!A&&M(v),h)}}}const wT=oa(.42,0,1,1),AT=oa(0,0,.58,1),u0=oa(.42,0,.58,1),RT=n=>Array.isArray(n)&&typeof n[0]!="number",CT={linear:_n,easeIn:wT,easeInOut:u0,easeOut:AT,circIn:Mh,circInOut:Wg,circOut:Hg,backIn:yh,backInOut:Vg,backOut:zg,anticipate:Gg},Ud=n=>{if(mh(n)){og(n.length===4);const[e,t,i,s]=n;return oa(e,t,i,s)}else if(typeof n=="string")return CT[n];return n};function PT(n,e,t){const i=[],s=t||o0,r=n.length-1;for(let a=0;a<r;a++){let o=s(n[a],n[a+1]);if(e){const l=Array.isArray(e)?e[a]||_n:e;o=la(l,o)}i.push(o)}return i}function NT(n,e,{clamp:t=!0,ease:i,mixer:s}={}){const r=n.length;if(og(r===e.length),r===1)return()=>e[0];if(r===2&&e[0]===e[1])return()=>e[1];const a=n[0]===n[1];n[0]>n[r-1]&&(n=[...n].reverse(),e=[...e].reverse());const o=PT(e,i,s),l=o.length,c=u=>{if(a&&u<n[0])return e[0];let f=0;if(l>1)for(;f<n.length-2&&!(u<n[f+1]);f++);const h=rr(n[f],n[f+1],u);return o[f](h)};return t?u=>c(bi(n[0],n[r-1],u)):c}function DT(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const s=rr(0,e,i);n.push(Tt(t,1,s))}}function LT(n){const e=[0];return DT(e,n.length-1),e}function IT(n,e){return n.map(t=>t*e)}function UT(n,e){return n.map(()=>e||u0).splice(0,n.length-1)}function Lo({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const s=RT(i)?i.map(Ud):Ud(i),r={done:!1,value:e[0]},a=IT(t&&t.length===e.length?t:LT(e),n),o=NT(a,e,{ease:Array.isArray(s)?s:UT(e,s)});return{calculatedDuration:n,next:l=>(r.value=o(l),r.done=l>=n,r)}}const FT=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Et.update(e,!0),stop:()=>Hi(e),now:()=>jt.isProcessing?jt.timestamp:ni.now()}},OT={decay:Id,inertia:Id,tween:Lo,keyframes:Lo,spring:c0},BT=n=>n/100;class Ah extends r0{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:t,motionValue:i,element:s,keyframes:r}=this.options,a=(s==null?void 0:s.KeyframeResolver)||Th,o=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new a(r,o,t,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:a=0}=this.options,o=ph(t)?t:OT[t]||Lo;let l,c;o!==Lo&&typeof e[0]!="number"&&(l=la(BT,o0(e[0],e[1])),e=[0,100]);const u=o({...this.options,keyframes:e});r==="mirror"&&(c=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),u.calculatedDuration===null&&(u.calculatedDuration=Ag(u));const{calculatedDuration:f}=u,h=f+s,d=h*(i+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:h,totalDuration:d}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:i}=this;if(!i){const{keyframes:v}=this.options;return{done:!0,value:v[v.length-1]}}const{finalKeyframe:s,generator:r,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=i;if(this.startTime===null)return r.next(0);const{delay:h,repeat:d,repeatType:g,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const p=this.currentTime-h*(this.speed>=0?1:-1),S=this.speed>=0?p<0:p>u;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let E=this.currentTime,M=r;if(d){const v=Math.min(this.currentTime,u)/f;let A=Math.floor(v),L=v%1;!L&&v>=1&&(L=1),L===1&&A--,A=Math.min(A,d+1),!!(A%2)&&(g==="reverse"?(L=1-L,y&&(L-=y/f)):g==="mirror"&&(M=a)),E=bi(0,1,L)*f}const w=S?{done:!1,value:l[0]}:M.next(E);o&&(w.value=o(w.value));let{done:b}=w;!S&&c!==null&&(b=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return P&&s!==void 0&&(w.value=jo(l,this.options,s)),m&&m(w.value),P&&this.finish(),w}get duration(){const{resolved:e}=this;return e?_i(e.calculatedDuration):0}get time(){return _i(this.currentTime)}set time(e){e=vi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=_i(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=FT,onPlay:t,startTime:i}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),t&&t();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const kT=new Set(["opacity","clipPath","filter","transform"]);function zT(n,e,t,{delay:i=0,duration:s=300,repeat:r=0,repeatType:a="loop",ease:o="easeInOut",times:l}={}){const c={[e]:t};l&&(c.offset=l);const u=Pg(o,s);return Array.isArray(u)&&(c.easing=u),n.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:a==="reverse"?"alternate":"normal"})}const VT=Qu(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Io=10,GT=2e4;function HT(n){return ph(n.type)||n.type==="spring"||!Cg(n.ease)}function WT(n,e){const t=new Ah({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const s=[];let r=0;for(;!i.done&&r<GT;)i=t.sample(r),s.push(i.value),r+=Io;return{times:void 0,keyframes:s,duration:r-Io,ease:"linear"}}const h0={anticipate:Gg,backInOut:Vg,circInOut:Wg};function jT(n){return n in h0}class Fd extends r0{constructor(e){super(e);const{name:t,motionValue:i,element:s,keyframes:r}=this.options;this.resolver=new s0(r,(a,o)=>this.onKeyframesResolved(a,o),t,i,s),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:i=300,times:s,ease:r,type:a,motionValue:o,name:l,startTime:c}=this.options;if(!o.owner||!o.owner.current)return!1;if(typeof r=="string"&&No()&&jT(r)&&(r=h0[r]),HT(this.options)){const{onComplete:f,onUpdate:h,motionValue:d,element:g,...y}=this.options,m=WT(e,y);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,s=m.times,r=m.ease,a="keyframes"}const u=zT(o.owner.current,l,e,{...this.options,duration:i,times:s,ease:r});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(yd(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:f}=this.options;o.set(jo(e,this.options,t)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:s,type:a,ease:r,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return _i(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return _i(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.currentTime=vi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return _n;const{animation:i}=t;yd(i,e)}return _n}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:i,duration:s,type:r,ease:a,times:o}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:f,element:h,...d}=this.options,g=new Ah({...d,keyframes:i,duration:s,type:r,ease:a,times:o,isGenerator:!0}),y=vi(this.time);c.setWithVelocity(g.sample(y-Io).value,g.sample(y).value,Io)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:i,repeatDelay:s,repeatType:r,damping:a,type:o}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=t.owner.getProps();return VT()&&i&&kT.has(i)&&!l&&!c&&!s&&r!=="mirror"&&a!==0&&o!=="inertia"}}const XT={type:"spring",stiffness:500,damping:25,restSpeed:10},qT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),$T={type:"keyframes",duration:.8},YT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},KT=(n,{keyframes:e})=>e.length>2?$T:ps.has(n)?n.startsWith("scale")?qT(e[1]):XT:YT;function ZT({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:a,repeatDelay:o,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Rh=(n,e,t,i={},s,r)=>a=>{const o=dh(i,n)||{},l=o.delay||i.delay||0;let{elapsed:c=0}=i;c=c-vi(l);let u={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-c,onUpdate:h=>{e.set(h),o.onUpdate&&o.onUpdate(h)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:n,motionValue:e,element:r?void 0:s};ZT(o)||(u={...u,...KT(n,u)}),u.duration&&(u.duration=vi(u.duration)),u.repeatDelay&&(u.repeatDelay=vi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!r&&e.get()!==void 0){const h=jo(u.keyframes,o);if(h!==void 0)return Et.update(()=>{u.onUpdate(h),u.onComplete()}),new gE([])}return!r&&Fd.supports(u)?new Fd(u):new Ah(u)};function JT({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function f0(n,e,{delay:t=0,transitionOverride:i,type:s}={}){var r;let{transition:a=n.getDefaultTransition(),transitionEnd:o,...l}=e;i&&(a=i);const c=[],u=s&&n.animationState&&n.animationState.getState()[s];for(const f in l){const h=n.getValue(f,(r=n.latestValues[f])!==null&&r!==void 0?r:null),d=l[f];if(d===void 0||u&&JT(u,f))continue;const g={delay:t,...dh(a||{},f)};let y=!1;if(window.MotionHandoffAnimation){const p=Fg(n);if(p){const S=window.MotionHandoffAnimation(p,f,Et);S!==null&&(g.startTime=S,y=!0)}}_u(n,f),h.start(Rh(f,h,d,n.shouldReduceMotion&&Ig.has(f)?{type:!1}:g,n,y));const m=h.animation;m&&c.push(m)}return o&&Promise.all(c).then(()=>{Et.update(()=>{o&&PE(n,o)})}),c}function wu(n,e,t={}){var i;const s=Wo(n,e,t.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:r=n.getDefaultTransition()||{}}=s||{};t.transitionOverride&&(r=t.transitionOverride);const a=s?()=>Promise.all(f0(n,s,t)):()=>Promise.resolve(),o=n.variantChildren&&n.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:h}=r;return QT(n,e,u+c,f,h,t)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,u]=l==="beforeChildren"?[a,o]:[o,a];return c().then(()=>u())}else return Promise.all([a(),o(t.delay)])}function QT(n,e,t=0,i=0,s=1,r){const a=[],o=(n.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>o-c*i;return Array.from(n.variantChildren).sort(ew).forEach((c,u)=>{c.notify("AnimationStart",e),a.push(wu(c,e,{...r,delay:t+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(a)}function ew(n,e){return n.sortNodePosition(e)}function tw(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(r=>wu(n,r,t));i=Promise.all(s)}else if(typeof e=="string")i=wu(n,e,t);else{const s=typeof e=="function"?Wo(n,e,t.custom):e;i=Promise.all(f0(n,s,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const nw=th.length;function d0(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?d0(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<nw;t++){const i=th[t],s=n.props[i];(Qr(s)||s===!1)&&(e[i]=s)}return e}const iw=[...eh].reverse(),sw=eh.length;function rw(n){return e=>Promise.all(e.map(({animation:t,options:i})=>tw(n,t,i)))}function aw(n){let e=rw(n),t=Od(),i=!0;const s=l=>(c,u)=>{var f;const h=Wo(n,u,l==="exit"?(f=n.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(h){const{transition:d,transitionEnd:g,...y}=h;c={...c,...y,...g}}return c};function r(l){e=l(n)}function a(l){const{props:c}=n,u=d0(n.parent)||{},f=[],h=new Set;let d={},g=1/0;for(let m=0;m<sw;m++){const p=iw[m],S=t[p],E=c[p]!==void 0?c[p]:u[p],M=Qr(E),w=p===l?S.isActive:null;w===!1&&(g=m);let b=E===u[p]&&E!==c[p]&&M;if(b&&i&&n.manuallyAnimateOnMount&&(b=!1),S.protectedKeys={...d},!S.isActive&&w===null||!E&&!S.prevProp||Go(E)||typeof E=="boolean")continue;const P=ow(S.prevProp,E);let v=P||p===l&&S.isActive&&!b&&M||m>g&&M,A=!1;const L=Array.isArray(E)?E:[E];let D=L.reduce(s(p),{});w===!1&&(D={});const{prevResolvedValues:k={}}=S,$={...k,...D},X=z=>{v=!0,h.has(z)&&(A=!0,h.delete(z)),S.needsAnimating[z]=!0;const j=n.getValue(z);j&&(j.liveStyle=!1)};for(const z in $){const j=D[z],re=k[z];if(d.hasOwnProperty(z))continue;let de=!1;gu(j)&&gu(re)?de=!wg(j,re):de=j!==re,de?j!=null?X(z):h.add(z):j!==void 0&&h.has(z)?X(z):S.protectedKeys[z]=!0}S.prevProp=E,S.prevResolvedValues=D,S.isActive&&(d={...d,...D}),i&&n.blockInitialAnimation&&(v=!1),v&&(!(b&&P)||A)&&f.push(...L.map(z=>({animation:z,options:{type:p}})))}if(h.size){const m={};h.forEach(p=>{const S=n.getBaseTarget(p),E=n.getValue(p);E&&(E.liveStyle=!0),m[p]=S??null}),f.push({animation:m})}let y=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!n.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(f):Promise.resolve()}function o(l,c){var u;if(t[l].isActive===c)return Promise.resolve();(u=n.variantChildren)===null||u===void 0||u.forEach(h=>{var d;return(d=h.animationState)===null||d===void 0?void 0:d.setActive(l,c)}),t[l].isActive=c;const f=a(l);for(const h in t)t[h].protectedKeys={};return f}return{animateChanges:a,setActive:o,setAnimateFunction:r,getState:()=>t,reset:()=>{t=Od(),i=!0}}}function ow(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!wg(e,n):!1}function Ki(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Od(){return{animate:Ki(!0),whileInView:Ki(),whileHover:Ki(),whileTap:Ki(),whileDrag:Ki(),whileFocus:Ki(),exit:Ki()}}class ji{constructor(e){this.isMounted=!1,this.node=e}update(){}}class lw extends ji{constructor(e){super(e),e.animationState||(e.animationState=aw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Go(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let cw=0;class uw extends ji{constructor(){super(...arguments),this.id=cw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e);t&&!e&&s.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const hw={animation:{Feature:lw},exit:{Feature:uw}};function ia(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}function ca(n){return{point:{x:n.pageX,y:n.pageY}}}const fw=n=>e=>gh(e)&&n(e,ca(e));function Gr(n,e,t,i){return ia(n,e,fw(t),i)}const Bd=(n,e)=>Math.abs(n-e);function dw(n,e){const t=Bd(n.x,e.x),i=Bd(n.y,e.y);return Math.sqrt(t**2+i**2)}class p0{constructor(e,t,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Vl(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,d=dw(f.offset,{x:0,y:0})>=3;if(!h&&!d)return;const{point:g}=f,{timestamp:y}=jt;this.history.push({...g,timestamp:y});const{onStart:m,onMove:p}=this.handlers;h||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=zl(h,this.transformPagePoint),Et.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:d,onSessionEnd:g,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Vl(f.type==="pointercancel"?this.lastMoveEventInfo:zl(h,this.transformPagePoint),this.history);this.startEvent&&d&&d(f,m),g&&g(f,m)},!gh(e))return;this.dragSnapToOrigin=r,this.handlers=t,this.transformPagePoint=i,this.contextWindow=s||window;const a=ca(e),o=zl(a,this.transformPagePoint),{point:l}=o,{timestamp:c}=jt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=t;u&&u(e,Vl(o,this.history)),this.removeListeners=la(Gr(this.contextWindow,"pointermove",this.handlePointerMove),Gr(this.contextWindow,"pointerup",this.handlePointerUp),Gr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Hi(this.updatePoint)}}function zl(n,e){return e?{point:e(n.point)}:n}function kd(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Vl({point:n},e){return{point:n,delta:kd(n,m0(e)),offset:kd(n,pw(e)),velocity:mw(e,.1)}}function pw(n){return n[0]}function m0(n){return n[n.length-1]}function mw(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const s=m0(n);for(;t>=0&&(i=n[t],!(s.timestamp-i.timestamp>vi(e)));)t--;if(!i)return{x:0,y:0};const r=_i(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const a={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const g0=1e-4,gw=1-g0,xw=1+g0,x0=.01,vw=0-x0,_w=0+x0;function yn(n){return n.max-n.min}function yw(n,e,t){return Math.abs(n-e)<=t}function zd(n,e,t,i=.5){n.origin=i,n.originPoint=Tt(e.min,e.max,n.origin),n.scale=yn(t)/yn(e),n.translate=Tt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=gw&&n.scale<=xw||isNaN(n.scale))&&(n.scale=1),(n.translate>=vw&&n.translate<=_w||isNaN(n.translate))&&(n.translate=0)}function Hr(n,e,t,i){zd(n.x,e.x,t.x,i?i.originX:void 0),zd(n.y,e.y,t.y,i?i.originY:void 0)}function Vd(n,e,t){n.min=t.min+e.min,n.max=n.min+yn(e)}function Mw(n,e,t){Vd(n.x,e.x,t.x),Vd(n.y,e.y,t.y)}function Gd(n,e,t){n.min=e.min-t.min,n.max=n.min+yn(e)}function Wr(n,e,t){Gd(n.x,e.x,t.x),Gd(n.y,e.y,t.y)}function Sw(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?Tt(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?Tt(t,n,i.max):Math.min(n,t)),n}function Hd(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function bw(n,{top:e,left:t,bottom:i,right:s}){return{x:Hd(n.x,t,s),y:Hd(n.y,e,i)}}function Wd(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function Ew(n,e){return{x:Wd(n.x,e.x),y:Wd(n.y,e.y)}}function Tw(n,e){let t=.5;const i=yn(n),s=yn(e);return s>i?t=rr(e.min,e.max-i,n.min):i>s&&(t=rr(n.min,n.max-s,e.min)),bi(0,1,t)}function ww(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Au=.35;function Aw(n=Au){return n===!1?n=0:n===!0&&(n=Au),{x:jd(n,"left","right"),y:jd(n,"top","bottom")}}function jd(n,e,t){return{min:Xd(n,e),max:Xd(n,t)}}function Xd(n,e){return typeof n=="number"?n:n[e]||0}const qd=()=>({translate:0,scale:1,origin:0,originPoint:0}),qs=()=>({x:qd(),y:qd()}),$d=()=>({min:0,max:0}),Lt=()=>({x:$d(),y:$d()});function wn(n){return[n("x"),n("y")]}function v0({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function Rw({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function Cw(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function Gl(n){return n===void 0||n===1}function Ru({scale:n,scaleX:e,scaleY:t}){return!Gl(n)||!Gl(e)||!Gl(t)}function Ji(n){return Ru(n)||_0(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function _0(n){return Yd(n.x)||Yd(n.y)}function Yd(n){return n&&n!=="0%"}function Uo(n,e,t){const i=n-t,s=e*i;return t+s}function Kd(n,e,t,i,s){return s!==void 0&&(n=Uo(n,s,i)),Uo(n,t,i)+e}function Cu(n,e=0,t=1,i,s){n.min=Kd(n.min,e,t,i,s),n.max=Kd(n.max,e,t,i,s)}function y0(n,{x:e,y:t}){Cu(n.x,e.translate,e.scale,e.originPoint),Cu(n.y,t.translate,t.scale,t.originPoint)}const Zd=.999999999999,Jd=1.0000000000001;function Pw(n,e,t,i=!1){const s=t.length;if(!s)return;e.x=e.y=1;let r,a;for(let o=0;o<s;o++){r=t[o],a=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Ys(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),a&&(e.x*=a.x.scale,e.y*=a.y.scale,y0(n,a)),i&&Ji(r.latestValues)&&Ys(n,r.latestValues))}e.x<Jd&&e.x>Zd&&(e.x=1),e.y<Jd&&e.y>Zd&&(e.y=1)}function $s(n,e){n.min=n.min+e,n.max=n.max+e}function Qd(n,e,t,i,s=.5){const r=Tt(n.min,n.max,s);Cu(n,e,t,r,i)}function Ys(n,e){Qd(n.x,e.x,e.scaleX,e.scale,e.originX),Qd(n.y,e.y,e.scaleY,e.scale,e.originY)}function M0(n,e){return v0(Cw(n.getBoundingClientRect(),e))}function Nw(n,e,t){const i=M0(n,t),{scroll:s}=e;return s&&($s(i.x,s.offset.x),$s(i.y,s.offset.y)),i}const S0=({current:n})=>n?n.ownerDocument.defaultView:null,Dw=new WeakMap;class Lw{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Lt(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(ca(u).point)},r=(u,f)=>{const{drag:h,dragPropagation:d,onDragStart:g}=this.getProps();if(h&&!d&&(this.openDragLock&&this.openDragLock(),this.openDragLock=TE(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),wn(m=>{let p=this.getAxisMotionValue(m).get()||0;if(ti.test(p)){const{projection:S}=this.visualElement;if(S&&S.layout){const E=S.layout.layoutBox[m];E&&(p=yn(E)*(parseFloat(p)/100))}}this.originPoint[m]=p}),g&&Et.postRender(()=>g(u,f)),_u(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(u,f)=>{const{dragPropagation:h,dragDirectionLock:d,onDirectionLock:g,onDrag:y}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=f;if(d&&this.currentDirection===null){this.currentDirection=Iw(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),y&&y(u,f)},o=(u,f)=>this.stop(u,f),l=()=>wn(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new p0(e,{onSessionStart:s,onStart:r,onMove:a,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:S0(this.visualElement)})}stop(e,t){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=t;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&Et.postRender(()=>r(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:s}=this.getProps();if(!i||!qa(e,s,this.currentDirection))return;const r=this.getAxisMotionValue(e);let a=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(a=Sw(a,this.constraints[e],this.elastic[e])),r.set(a)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,r=this.constraints;t&&js(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=bw(s.layoutBox,t):this.constraints=!1,this.elastic=Aw(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&wn(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=ww(s.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!js(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=Nw(i,s.root,this.visualElement.getTransformPagePoint());let a=Ew(s.layout.layoutBox,r);if(t){const o=t(Rw(a));this.hasMutatedConstraints=!!o,o&&(a=v0(o))}return a}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=wn(u=>{if(!qa(u,t,this.currentDirection))return;let f=l&&l[u]||{};a&&(f={min:0,max:0});const h=s?200:1e6,d=s?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:h,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...r,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return _u(this.visualElement,e),i.start(Rh(e,i,0,t,this.visualElement,!1))}stopAnimation(){wn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){wn(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),s=i[t];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){wn(t=>{const{drag:i}=this.getProps();if(!qa(t,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(t);if(s&&s.layout){const{min:a,max:o}=s.layout.layoutBox[t];r.set(e[t]-Tt(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!js(t)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};wn(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();s[a]=Tw({min:l,max:l},this.constraints[a])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),wn(a=>{if(!qa(a,e,null))return;const o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(Tt(l,c,s[a]))})}addListeners(){if(!this.visualElement.current)return;Dw.set(this.visualElement,this);const e=this.visualElement.current,t=Gr(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();js(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Et.read(i);const a=ia(window,"resize",()=>this.scalePositionWithinConstraints()),o=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(wn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{a(),t(),r(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:a=Au,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:a,dragMomentum:o}}}function qa(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function Iw(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class Uw extends ji{constructor(e){super(e),this.removeGroupControls=_n,this.removeListeners=_n,this.controls=new Lw(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_n}unmount(){this.removeGroupControls(),this.removeListeners()}}const ep=n=>(e,t)=>{n&&Et.postRender(()=>n(e,t))};class Fw extends ji{constructor(){super(...arguments),this.removePointerDownListener=_n}onPointerDown(e){this.session=new p0(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:S0(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:ep(e),onStart:ep(t),onMove:i,onEnd:(r,a)=>{delete this.session,s&&Et.postRender(()=>s(r,a))}}}mount(){this.removePointerDownListener=Gr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const co={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function tp(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ar={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Ue.test(n))n=parseFloat(n);else return n;const t=tp(n,e.target.x),i=tp(n,e.target.y);return`${t}% ${i}%`}},Ow={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,s=Wi.parse(n);if(s.length>5)return i;const r=Wi.createTransformer(n),a=typeof s[0]!="number"?1:0,o=t.x.scale*e.x,l=t.y.scale*e.y;s[0+a]/=o,s[1+a]/=l;const c=Tt(o,l,.5);return typeof s[2+a]=="number"&&(s[2+a]/=c),typeof s[3+a]=="number"&&(s[3+a]/=c),r(s)}};class Bw extends ae.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=e;sE(kw),r&&(t.group&&t.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),co.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:s,isPresent:r}=this.props,a=i.projection;return a&&(a.isPresent=r,s||e.layoutDependency!==t||t===void 0?a.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?a.promote():a.relegate()||Et.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),ih.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function b0(n){const[e,t]=rg(),i=ae.useContext(Yu);return x.jsx(Bw,{...n,layoutGroup:i,switchLayoutGroup:ae.useContext(dg),isPresent:e,safeToRemove:t})}const kw={borderRadius:{...Ar,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ar,borderTopRightRadius:Ar,borderBottomLeftRadius:Ar,borderBottomRightRadius:Ar,boxShadow:Ow};function zw(n,e,t){const i=nn(n)?n:ta(n);return i.start(Rh("",i,e,t)),i.animation}function Vw(n){return n instanceof SVGElement&&n.tagName!=="svg"}const Gw=(n,e)=>n.depth-e.depth;class Hw{constructor(){this.children=[],this.isDirty=!1}add(e){xh(this.children,e),this.isDirty=!0}remove(e){vh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Gw),this.isDirty=!1,this.children.forEach(e)}}function Ww(n,e){const t=ni.now(),i=({timestamp:s})=>{const r=s-t;r>=e&&(Hi(i),n(r-e))};return Et.read(i,!0),()=>Hi(i)}const E0=["TopLeft","TopRight","BottomLeft","BottomRight"],jw=E0.length,np=n=>typeof n=="string"?parseFloat(n):n,ip=n=>typeof n=="number"||Ue.test(n);function Xw(n,e,t,i,s,r){s?(n.opacity=Tt(0,t.opacity!==void 0?t.opacity:1,qw(i)),n.opacityExit=Tt(e.opacity!==void 0?e.opacity:1,0,$w(i))):r&&(n.opacity=Tt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,i));for(let a=0;a<jw;a++){const o=`border${E0[a]}Radius`;let l=sp(e,o),c=sp(t,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||ip(l)===ip(c)?(n[o]=Math.max(Tt(np(l),np(c),i),0),(ti.test(c)||ti.test(l))&&(n[o]+="%")):n[o]=c}(e.rotate||t.rotate)&&(n.rotate=Tt(e.rotate||0,t.rotate||0,i))}function sp(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const qw=T0(0,.5,Hg),$w=T0(.5,.95,_n);function T0(n,e,t){return i=>i<n?0:i>e?1:t(rr(n,e,i))}function rp(n,e){n.min=e.min,n.max=e.max}function Tn(n,e){rp(n.x,e.x),rp(n.y,e.y)}function ap(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function op(n,e,t,i,s){return n-=e,n=Uo(n,1/t,i),s!==void 0&&(n=Uo(n,1/s,i)),n}function Yw(n,e=0,t=1,i=.5,s,r=n,a=n){if(ti.test(e)&&(e=parseFloat(e),e=Tt(a.min,a.max,e/100)-a.min),typeof e!="number")return;let o=Tt(r.min,r.max,i);n===r&&(o-=e),n.min=op(n.min,e,t,o,s),n.max=op(n.max,e,t,o,s)}function lp(n,e,[t,i,s],r,a){Yw(n,e[t],e[i],e[s],e.scale,r,a)}const Kw=["x","scaleX","originX"],Zw=["y","scaleY","originY"];function cp(n,e,t,i){lp(n.x,e,Kw,t?t.x:void 0,i?i.x:void 0),lp(n.y,e,Zw,t?t.y:void 0,i?i.y:void 0)}function up(n){return n.translate===0&&n.scale===1}function w0(n){return up(n.x)&&up(n.y)}function hp(n,e){return n.min===e.min&&n.max===e.max}function Jw(n,e){return hp(n.x,e.x)&&hp(n.y,e.y)}function fp(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function A0(n,e){return fp(n.x,e.x)&&fp(n.y,e.y)}function dp(n){return yn(n.x)/yn(n.y)}function pp(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class Qw{constructor(){this.members=[]}add(e){xh(this.members,e),e.scheduleRender()}remove(e){if(vh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(s=>e===s);if(t===0)return!1;let i;for(let s=t;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function eA(n,e,t){let i="";const s=n.x.translate/e.x,r=n.y.translate/e.y,a=(t==null?void 0:t.z)||0;if((s||r||a)&&(i=`translate3d(${s}px, ${r}px, ${a}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:h,skewX:d,skewY:g}=t;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),h&&(i+=`rotateY(${h}deg) `),d&&(i+=`skewX(${d}deg) `),g&&(i+=`skewY(${g}deg) `)}const o=n.x.scale*e.x,l=n.y.scale*e.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const Qi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Br=typeof window<"u"&&window.MotionDebug!==void 0,Hl=["","X","Y","Z"],tA={visibility:"hidden"},mp=1e3;let nA=0;function Wl(n,e,t,i){const{latestValues:s}=e;s[n]&&(t[n]=s[n],e.setStaticValue(n,0),i&&(i[n]=0))}function R0(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Fg(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:s,layoutId:r}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Et,!(s||r))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&R0(i)}function C0({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(a={},o=e==null?void 0:e()){this.id=nA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Br&&(Qi.totalNodes=Qi.resolvedTargetDeltas=Qi.recalculatedProjection=0),this.nodes.forEach(rA),this.nodes.forEach(uA),this.nodes.forEach(hA),this.nodes.forEach(aA),Br&&window.MotionDebug.record(Qi)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Hw)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new _h),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Vw(a),this.instance=a;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(c||l)&&(this.isLayoutDirty=!0),n){let f;const h=()=>this.root.updateBlockedByResize=!1;n(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Ww(h,250),co.hasAnimatedSinceResize&&(co.hasAnimatedSinceResize=!1,this.nodes.forEach(xp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:d,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||gA,{onLayoutAnimationStart:m,onLayoutAnimationComplete:p}=u.getProps(),S=!this.targetLayout||!A0(this.targetLayout,g)||d,E=!h&&d;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||E||h&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,E);const M={...dh(y,"layout"),onPlay:m,onComplete:p};(u.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else h||xp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Hi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(fA),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&R0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gp);return}this.isUpdating||this.nodes.forEach(lA),this.isUpdating=!1,this.nodes.forEach(cA),this.nodes.forEach(iA),this.nodes.forEach(sA),this.clearAllSnapshots();const o=ni.now();jt.delta=bi(0,1e3/60,o-jt.timestamp),jt.timestamp=o,jt.isProcessing=!0,Il.update.process(jt),Il.preRender.process(jt),Il.render.process(jt),jt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ih.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(oA),this.sharedNodes.forEach(dA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Et.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Et.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Lt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!w0(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;a&&(o||Ji(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),xA(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:o}=this.options;if(!o)return Lt();const l=o.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(vA))){const{scroll:u}=this.root;u&&($s(l.x,u.offset.x),$s(l.y,u.offset.y))}return l}removeElementScroll(a){var o;const l=Lt();if(Tn(l,a),!((o=this.scroll)===null||o===void 0)&&o.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:h}=u;u!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Tn(l,a),$s(l.x,f.offset.x),$s(l.y,f.offset.y))}return l}applyTransform(a,o=!1){const l=Lt();Tn(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];!o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ys(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Ji(u.latestValues)&&Ys(l,u.latestValues)}return Ji(this.latestValues)&&Ys(l,this.latestValues),l}removeTransform(a){const o=Lt();Tn(o,a);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Ji(c.latestValues))continue;Ru(c.latestValues)&&c.updateSnapshot();const u=Lt(),f=c.measurePageBox();Tn(u,f),cp(o,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Ji(this.latestValues)&&cp(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==jt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=jt.timestamp,!this.targetDelta&&!this.relativeTarget){const d=this.getClosestProjectingParent();d&&d.layout&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),Wr(this.relativeTargetOrigin,this.layout.layoutBox,d.layout.layoutBox),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Lt(),this.targetWithTransforms=Lt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Mw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tn(this.target,this.layout.layoutBox),y0(this.target,this.targetDelta)):Tn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const d=this.getClosestProjectingParent();d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),Wr(this.relativeTargetOrigin,this.target,d.target),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Br&&Qi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ru(this.parent.latestValues)||_0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let c=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===jt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;Tn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,d=this.treeScale.y;Pw(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Lt());const{target:g}=o;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ap(this.prevProjectionDelta.x,this.projectionDelta.x),ap(this.prevProjectionDelta.y,this.projectionDelta.y)),Hr(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==d||!pp(this.projectionDelta.x,this.prevProjectionDelta.x)||!pp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Br&&Qi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)===null||o===void 0||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=qs(),this.projectionDelta=qs(),this.projectionDeltaWithTransform=qs()}setAnimationOrigin(a,o=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=qs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const h=Lt(),d=l?l.source:void 0,g=this.layout?this.layout.source:void 0,y=d!==g,m=this.getStack(),p=!m||m.members.length<=1,S=!!(y&&!p&&this.options.crossfade===!0&&!this.path.some(mA));this.animationProgress=0;let E;this.mixTargetDelta=M=>{const w=M/1e3;vp(f.x,a.x,w),vp(f.y,a.y,w),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Wr(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),pA(this.relativeTarget,this.relativeTargetOrigin,h,w),E&&Jw(this.relativeTarget,E)&&(this.isProjectionDirty=!1),E||(E=Lt()),Tn(E,this.relativeTarget)),y&&(this.animationValues=u,Xw(u,c,this.latestValues,w,S,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Hi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Et.update(()=>{co.hasAnimatedSinceResize=!0,this.currentAnimation=zw(0,mp,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(mp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:u}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&P0(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Lt();const f=yn(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const h=yn(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+h}Tn(o,l),Ys(o,u),Hr(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new Qw),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&Wl("z",a,c,this.animationValues);for(let u=0;u<Hl.length;u++)Wl(`rotate${Hl[u]}`,a,c,this.animationValues),Wl(`skew${Hl[u]}`,a,c,this.animationValues);a.render();for(const u in c)a.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);a.scheduleRender()}getProjectionStyles(a){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return tA;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=oo(a==null?void 0:a.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=oo(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Ji(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=eA(this.projectionDeltaWithTransform,this.treeScale,h),u&&(c.transform=u(h,c.transform));const{x:d,y:g}=this.projectionDelta;c.transformOrigin=`${d.origin*100}% ${g.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(o=h.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const y in Po){if(h[y]===void 0)continue;const{correct:m,applyTo:p}=Po[y],S=c.transform==="none"?h[y]:m(h[y],f);if(p){const E=p.length;for(let M=0;M<E;M++)c[p[M]]=S}else c[y]=S}return this.options.layoutId&&(c.pointerEvents=f===this?oo(a==null?void 0:a.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(gp),this.root.sharedNodes.clear()}}}function iA(n){n.updateLayout()}function sA(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=n.layout,{animationType:r}=n.options,a=t.source!==n.layout.source;r==="size"?wn(f=>{const h=a?t.measuredBox[f]:t.layoutBox[f],d=yn(h);h.min=i[f].min,h.max=h.min+d}):P0(r,t.layoutBox,i)&&wn(f=>{const h=a?t.measuredBox[f]:t.layoutBox[f],d=yn(i[f]);h.max=h.min+d,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[f].max=n.relativeTarget[f].min+d)});const o=qs();Hr(o,i,t.layoutBox);const l=qs();a?Hr(l,n.applyTransform(s,!0),t.measuredBox):Hr(l,i,t.layoutBox);const c=!w0(o);let u=!1;if(!n.resumeFrom){const f=n.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:d}=f;if(h&&d){const g=Lt();Wr(g,t.layoutBox,h.layoutBox);const y=Lt();Wr(y,i,d.layoutBox),A0(g,y)||(u=!0),f.options.layoutRoot&&(n.relativeTarget=y,n.relativeTargetOrigin=g,n.relativeParent=f)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:l,layoutDelta:o,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function rA(n){Br&&Qi.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function aA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function oA(n){n.clearSnapshot()}function gp(n){n.clearMeasurements()}function lA(n){n.isLayoutDirty=!1}function cA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function xp(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function uA(n){n.resolveTargetDelta()}function hA(n){n.calcProjection()}function fA(n){n.resetSkewAndRotation()}function dA(n){n.removeLeadSnapshot()}function vp(n,e,t){n.translate=Tt(e.translate,0,t),n.scale=Tt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function _p(n,e,t,i){n.min=Tt(e.min,t.min,i),n.max=Tt(e.max,t.max,i)}function pA(n,e,t,i){_p(n.x,e.x,t.x,i),_p(n.y,e.y,t.y,i)}function mA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const gA={duration:.45,ease:[.4,0,.1,1]},yp=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Mp=yp("applewebkit/")&&!yp("chrome/")?Math.round:_n;function Sp(n){n.min=Mp(n.min),n.max=Mp(n.max)}function xA(n){Sp(n.x),Sp(n.y)}function P0(n,e,t){return n==="position"||n==="preserve-aspect"&&!yw(dp(e),dp(t),.2)}function vA(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const _A=C0({attachResizeListener:(n,e)=>ia(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),jl={current:void 0},N0=C0({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!jl.current){const n=new _A({});n.mount(window),n.setOptions({layoutScroll:!0}),jl.current=n}return jl.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),yA={pan:{Feature:Fw},drag:{Feature:Uw,ProjectionNode:N0,MeasureLayout:b0}};function bp(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const s="onHover"+t,r=i[s];r&&Et.postRender(()=>r(e,ca(e)))}class MA extends ji{mount(){const{current:e}=this.node;e&&(this.unmount=yE(e,t=>(bp(this.node,t,"Start"),i=>bp(this.node,i,"End"))))}unmount(){}}class SA extends ji{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=la(ia(this.node.current,"focus",()=>this.onFocus()),ia(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ep(n,e,t){const{props:i}=n;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const s="onTap"+(t==="End"?"":t),r=i[s];r&&Et.postRender(()=>r(e,ca(e)))}class bA extends ji{mount(){const{current:e}=this.node;e&&(this.unmount=EE(e,t=>(Ep(this.node,t,"Start"),(i,{success:s})=>Ep(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Pu=new WeakMap,Xl=new WeakMap,EA=n=>{const e=Pu.get(n.target);e&&e(n)},TA=n=>{n.forEach(EA)};function wA({root:n,...e}){const t=n||document;Xl.has(t)||Xl.set(t,{});const i=Xl.get(t),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(TA,{root:n,...e})),i[s]}function AA(n,e,t){const i=wA(e);return Pu.set(n,t),i.observe(n),()=>{Pu.delete(n),i.unobserve(n)}}const RA={some:0,all:1};class CA extends ji{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:s="some",once:r}=e,a={root:t?t.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:RA[s]},o=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),h=c?u:f;h&&h(l)};return AA(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(PA(e,t))&&this.startObserver()}unmount(){}}function PA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const NA={inView:{Feature:CA},tap:{Feature:bA},focus:{Feature:SA},hover:{Feature:MA}},DA={layout:{ProjectionNode:N0,MeasureLayout:b0}},Nu={current:null},D0={current:!1};function LA(){if(D0.current=!0,!!Ju)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Nu.current=n.matches;n.addListener(e),e()}else Nu.current=!1}const IA=[...i0,Qt,Wi],UA=n=>IA.find(n0(n)),Tp=new WeakMap;function FA(n,e,t){for(const i in e){const s=e[i],r=t[i];if(nn(s))n.addValue(i,s);else if(nn(r))n.addValue(i,ta(s,{owner:n}));else if(r!==s)if(n.hasValue(i)){const a=n.getValue(i);a.liveStyle===!0?a.jump(s):a.hasAnimated||a.set(s)}else{const a=n.getStaticValue(i);n.addValue(i,ta(a!==void 0?a:s,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const wp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class OA{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:r,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Th,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=ni.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,Et.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=a;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=t.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=o,this.blockInitialAnimation=!!r,this.isControllingVariants=Ho(t),this.isVariantNode=hg(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(t,{},this);for(const d in h){const g=h[d];l[d]!==void 0&&nn(g)&&g.set(l[d],!1)}}mount(e){this.current=e,Tp.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),D0.current||LA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Nu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Tp.delete(this.current),this.projection&&this.projection.unmount(),Hi(this.notifyUpdate),Hi(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=ps.has(e),s=t.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Et.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{s(),r(),a&&a(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ar){const t=ar[e];if(!t)continue;const{isEnabled:i,Feature:s}=t;if(!this.features[e]&&s&&i(this.props)&&(this.features[e]=new s(this)),this.features[e]){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Lt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<wp.length;i++){const s=wp[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,a=e[r];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=FA(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=ta(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){var i;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(e0(s)||jg(s))?s=parseFloat(s):!UA(s)&&Wi.test(t)&&(s=Zg(e,t)),this.setBaseTarget(e,nn(s)?s.get():s)),nn(s)?s.get():s}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const a=rh(this.props,i,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);a&&(s=a[e])}if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!nn(r)?r:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new _h),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class L0 extends OA{constructor(){super(...arguments),this.KeyframeResolver=s0}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;nn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function BA(n){return window.getComputedStyle(n)}class kA extends L0{constructor(){super(...arguments),this.type="html",this.renderInstance=yg}readValueFromInstance(e,t){if(ps.has(t)){const i=Eh(t);return i&&i.default||0}else{const i=BA(e),s=(xg(t)?i.getPropertyValue(t):i[t])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:t}){return M0(e,t)}build(e,t,i){lh(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return fh(e,t,i)}}class zA extends L0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Lt}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ps.has(t)){const i=Eh(t);return i&&i.default||0}return t=Mg.has(t)?t:nh(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return Eg(e,t,i)}build(e,t,i){ch(e,t,this.isSVGTag,i.transformTemplate)}renderInstance(e,t,i,s){Sg(e,t,i,s)}mount(e){this.isSVGTag=hh(e.tagName),super.mount(e)}}const VA=(n,e)=>sh(n)?new zA(e):new kA(e,{allowProjection:n!==ae.Fragment}),GA=dE({...hw,...NA,...yA,...DA},VA),HA=R1(GA);/**
 * @license lucide-react v1.30.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.30.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.30.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.30.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=n=>{const e=jA(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.30.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ql={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.30.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},qA=ae.createContext({}),$A=()=>ae.useContext(qA),YA=ae.forwardRef(({color:n,size:e,strokeWidth:t,absoluteStrokeWidth:i,className:s="",children:r,iconNode:a,...o},l)=>{const{size:c=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:h="currentColor",className:d=""}=$A()??{},g=i??f?Number(t??u)*24/Number(e??c):t??u;return ae.createElement("svg",{ref:l,...ql,width:e??c??ql.width,height:e??c??ql.height,stroke:n??h,strokeWidth:g,className:I0("lucide",d,s),...!r&&!XA(o)&&{"aria-hidden":"true"},...o},[...a.map(([y,m])=>ae.createElement(y,m)),...Array.isArray(r)?r:[r]])});/**
 * @license lucide-react v1.30.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=(n,e)=>{const t=ae.forwardRef(({className:i,...s},r)=>ae.createElement(YA,{ref:r,iconNode:e,className:I0(`lucide-${WA(Ap(n))}`,`lucide-${n}`,i),...s}));return t.displayName=Ap(n),t};/**
 * @license lucide-react v1.30.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],JA=KA("chevron-down",ZA),QA=[{label:"Product",panel:"product"},{label:"GitHub",href:"https://github.com/trippusultan/peek"},{label:"Dashboard",href:"/dashboard"}],eR=[{title:"Cookieless by design",desc:"Daily-rotating identity hash. No cookies, no banners."},{title:"353 B snippet",desc:"One line of JS from your own domain, gzipped."},{title:"One process",desc:"Express, geoip-lite and SQLite in a single server."},{title:"Realtime",desc:"Live counter and daily chart update per request."}];function tR({live:n}){const[e,t]=ae.useState(!1);return x.jsxs("nav",{className:"nav21",children:[x.jsxs("div",{className:"nav21-inner",children:[x.jsxs("a",{className:"brand",href:"/",children:[x.jsx("i",{}),"peek"]}),x.jsx("div",{className:"nav21-center",children:QA.map(i=>i.panel?x.jsx("div",{className:"nav21-item",children:x.jsxs("button",{className:`nav21-link${e?" on":""}`,onClick:()=>t(s=>!s),"aria-expanded":e,children:[i.label,x.jsx(JA,{className:`nav21-chev${e?" rot":""}`,size:14,strokeWidth:2})]})},i.label):x.jsx("a",{className:"nav21-link",href:i.href,children:i.label},i.label))}),x.jsx("div",{className:"nav21-right",children:x.jsxs("span",{className:"chip",title:"Visitors on the dashboard right now",children:[x.jsx("i",{}),x.jsx("b",{children:n})," live"]})})]}),x.jsx(y1,{children:e&&x.jsx(HA.div,{className:"nav21-panel",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{type:"spring",stiffness:300,damping:30},children:x.jsx("div",{className:"nav21-panel-inner",children:eR.map(i=>x.jsxs("a",{className:"nav21-card",href:"/#features",children:[x.jsx("span",{className:"nav21-card-t",children:i.title}),x.jsx("span",{className:"nav21-card-d",children:i.desc})]},i.title))})})})]})}function nR(){const[n,e]=ae.useState(!1);return ae.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)"),i=()=>e(t.matches);return i(),t.addEventListener("change",i),()=>t.removeEventListener("change",i)},[]),n}const Bt={background:"#000000",topRadius:380,waistRadius:53,waistPosition:50,bottomRadius:1150,twist:3,zoom:75,speed:10,direction:"right",lineOptions:{count:240,color:"#ffffff",glow:10},dots:!0,dotOptions:{count:8e3,size:20,color:"#ffffff",glow:10,flicker:10},comets:!0,cometOptions:{count:10,speed:6,color:"#F9731A",glow:6,tail:19,delay:8,collide:6},repel:!1,repelOptions:{radius:60,strength:10}},jr=Math.PI*2,$l=60,Yl=1024,Bs=400,Kl=.008,$a=.15,Xr=10,U0=67,Zl=n=>Oi(2*U0-n,1,175),iR=1,sR=4.2,rR=.15,aR=1,oR=1e3,Rp=2,Cp=.5,lR=9,cR=11,uR=1.8,hR=5,Pp=1.2,fR=.8,dR=2.5,pR=.04,Jl=16,Ql=.03,ec=.95,Np=.1,Dp=.8,Lp=1.6,Ip=.4,Up=6,Fp=.6,Op=1.3,mR=8,Bp=1/30,ks={strandStart:0,strandEnd:2,dotStart:1.2,dotEnd:3,cometStart:3,cometEnd:5},gR=.45,Oi=(n,e,t)=>Math.min(Math.max(n,e),t);function tc(n,e,t){if(n<=e)return 0;if(n>=t)return 1;const i=(n-e)/(t-e);return 1-(1-i)*(1-i)*(1-i)}function nc(n){const e=n.length,t=[];for(let s=0;s<e-1;s++)t[s]=(n[s+1][1]-n[s][1])/(n[s+1][0]-n[s][0]);const i=[t[0]];for(let s=1;s<e-1;s++)i[s]=t[s-1]*t[s]<=0?0:(t[s-1]+t[s])/2;i[e-1]=t[e-2];for(let s=0;s<e-1;s++){if(Math.abs(t[s])<1e-12){i[s]=i[s+1]=0;continue}const r=i[s]/t[s],a=i[s+1]/t[s],o=r*r+a*a;if(o>9){const l=3/Math.sqrt(o);i[s]=l*r*t[s],i[s+1]=l*a*t[s]}}return s=>{if(s<=n[0][0])return n[0][1];if(s>=n[e-1][0])return n[e-1][1];let r=0;for(;r<e-2&&n[r+1][0]<s;)r++;const a=n[r+1][0]-n[r][0],o=(s-n[r][0])/a,l=o*o,c=l*o;return(2*c-3*l+1)*n[r][1]+(c-2*l+o)*a*i[r]+(-2*c+3*l)*n[r+1][1]+(c-l)*a*i[r+1]}}function ic(n){const e=new Float32Array(Yl);for(let t=0;t<Yl;t++)e[t]=n(t/(Yl-1));return e}function sc(n,e){if(e<=0)return n[0];const t=n.length-1;if(e>=1)return n[t];const i=e*t,s=i|0;return n[s]+(n[s+1]-n[s])*(i-s)}function xR(n){const e=Oi(n.waistAt,.08,.92),t=n.floorRadius,i=n.crownRadius,s=n.twist*jr,r=ic(nc([[0,t],[.24*e,t*.667],[.5*e,t*.3],[.76*e,t*.08],[e,n.waistRadius],[e+.3*(1-e),i*.2],[e+.6*(1-e),i*.44],[1,i]])),a=ic(nc([[0,0],[.1,.2],[.2,.8],[.35,2],[.5,Xr*.38],[.75,Xr*.7],[1,Xr]])),o=ic(nc([[0,0],[.15,.15*s],[.25,.25*s],[.45,.55*s],[.6,.7*s],[.8,.88*s],[1,s]]));return{writePoint(l,c,u,f,h,d,g,y){const m=sc(r,u),p=sc(a,u),S=sc(o,u)+f+h,E=m+Math.sin(u*25+g+y*.3)*d*m;l[c]=Math.cos(S)*E,l[c+1]=p,l[c+2]=Math.sin(S)*E},lane:(l,c)=>l/c*jr}}function vR(n,e,t){const i=new Gm({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"});i.setClearColor(0,0),i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.toneMapping=Lu,i.toneMappingExposure=1.25;const s=new vm,r=new vn(Zl(t.current.zoom),1,.1,500),a=new ki;s.add(a);const o={uMouse:{value:new Le(0,0)},uAspect:{value:1},uRadius:{value:.2},uStrength:{value:0}},l=R=>(R.onBeforeCompile=U=>{U.uniforms.uMouse=o.uMouse,U.uniforms.uAspect=o.uAspect,U.uniforms.uRadius=o.uRadius,U.uniforms.uStrength=o.uStrength,U.vertexShader=U.vertexShader.replace("void main() {",`
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
                    `)},R);let c,u=[];const f=R=>(u.push(R),R);let h=[],d=new Float32Array(0),g=new Float32Array(0),y=null,m=[],p=0,S=null,E=new Float32Array(0),M=new Float32Array(0),w=new Float32Array(0),b=new Float32Array(0),P=new Float32Array(0),v=new Float32Array(0),A=new Float32Array(0),L=new Float32Array(0),D=new Float32Array(0),k=!1,$=[],X=null,N=[],H=!1;const z=new pt,j={strand:new ke,dot:new ke,comet:new ke};let re={line:"",dot:"",comet:""};function de(R){if(R.lineColor!==re.line&&(j.strand.set(R.lineColor),re.line=R.lineColor),R.dotColor!==re.dot&&(j.dot.set(R.dotColor),re.dot=R.dotColor),R.cometColor!==re.comet){j.comet.set(R.cometColor),re.comet=R.cometColor;for(const U of $)U.head.material.color.setRGB(j.comet.r*1.2,j.comet.g*1.2,j.comet.b*1.2)}}function ue(R,U){const O=document.createElement("canvas");O.width=O.height=R;const ee=O.getContext("2d");if(ee){const V=ee.createRadialGradient(R/2,R/2,0,R/2,R/2,R/2);for(const[W,te]of U)V.addColorStop(W,te);ee.fillStyle=V,ee.fillRect(0,0,R,R)}const J=new qt(O);return J.needsUpdate=!0,J}function me(){const R=t.current;for(let Q=a.children.length-1;Q>=0;Q--)a.remove(a.children[Q]);for(const Q of u)Q.dispose();u=[],c=xR(R),r.fov=Zl(R.zoom),r.updateProjectionMatrix(),de(R);const U=Math.max(3,Math.round(R.lineCount)),O=Bs-1,ee=U*O*2;d=new Float32Array(ee*3),g=new Float32Array(ee*3),y=f(new un),y.setAttribute("position",new tn(d,3).setUsage(vs)),y.setAttribute("color",new tn(g,3).setUsage(vs));const J=f(l(new Kc({vertexColors:!0,transparent:!0,opacity:.5,blending:Vs,depthWrite:!1}))),V=new ev(y,J);V.frustumCulled=!1,a.add(V),h=[];for(let Q=0;Q<U;Q++)h.push({lane:c.lane(Q,U),speed:.95+Math.random()*.1,pulse:Math.random()*jr,wobblePhase:Math.random()*jr,from:0,to:1,bright:.5,offset:Q*O*2*3,pts:new Float32Array(Bs*3),cols:new Float32Array(Bs*3)});p=R.showDots?Math.max(0,Math.round(R.dotCount)):0,m=[];for(let Q=0;Q<p;Q++){const ie=Math.random()<.5?.2+Math.random()*.4:.05+Math.random()*.9,ne=Math.floor(Math.random()*h.length);m.push({s:ie,lane:h[ne].lane,strand:ne,pulse:Math.random()*jr,flickerRate:.15+Math.random()*4.5,bright:.04+Math.random()**1.5*.96})}if(M=new Float32Array(p*3),w=new Float32Array(p*3),b=new Float32Array(p*3),P=new Float32Array(p).fill(1),v=new Float32Array(p),A=new Float32Array(p),L=new Float32Array(p),D=new Float32Array(p).fill(1),E=new Float32Array(p*3),k=!1,p>0){const Q=f(new ra(1,1)),ie=f(l(new qn({color:16777215,transparent:!0,opacity:.9,blending:Vs,depthWrite:!1})));S=new Em(Q,ie,p),S.instanceMatrix.setUsage(vs),S.instanceColor=new Yc(E,3),S.instanceColor.setUsage(vs),S.frustumCulled=!1,a.add(S)}else S=null;N=[];for(let Q=0;Q<Jl;Q++)N.push({active:!1,x:0,y:0,z:0,at:0,amp:1});H=!1,X=f(ue(32,[[0,"rgba(255,255,255,0.9)"],[.3,"rgba(255,120,255,0.4)"],[.7,"rgba(200,50,200,0.08)"],[1,"rgba(0,0,0,0)"]]));const W=R.showComets?Math.max(0,Math.round(R.cometCount)):0,te=Math.max(2,Math.round(R.cometTail));$=[];for(let Q=0;Q<W;Q++){const ie=new Float32Array(te*3),ne=new Float32Array(te*3),fe=f(new un);fe.setAttribute("position",new tn(ie,3).setUsage(vs)),fe.setAttribute("color",new tn(ne,3).setUsage(vs));const pe=f(l(new Kc({vertexColors:!0,transparent:!0,opacity:.9,blending:Vs,depthWrite:!1}))),ye=new wm(fe,pe);ye.frustumCulled=!1;const I=f(new Mm({map:X,transparent:!0,opacity:0,blending:Vs,depthWrite:!1,color:new ke(j.comet.r*1.2,j.comet.g*1.2,j.comet.b*1.2)})),ce=new $x(I);ce.scale.set(.35,.35,1),a.add(ye),a.add(ce);const K=h[Math.floor(Math.random()*h.length)],ge=R.cometSpeed*(.7+Math.random()*.6);$.push({bright:.7+Math.random()*.3,lane:K.lane,speed:ge,pulse:K.speed,wobblePhase:K.wobblePhase,base:ge,boost:0,boostMul:1,racing:!1,s:0,idle:0,idleFor:.4+Q/W*R.cometDelay,trail:ie,trailCol:ne,geo:fe,line:ye,head:ce})}et=0,le()}const Ie=Xr/2/Math.tan(U0*Math.PI/180/2),We=new F(3.4,-.6,10).normalize(),Ne=new F(0,Xr/2,0);r.position.copy(Ne).addScaledVector(We,Ie),r.lookAt(Ne);let se=1;function le(){const R=t.current,U=e.clientWidth||1,O=e.clientHeight||1;se=O,i.setSize(U,O,!1),r.aspect=U/O,r.updateProjectionMatrix(),o.uAspect.value=U/O,o.uRadius.value=Oi(R.repelRadius/(O/2),.01,3),R.running||i.render(s,r)}const he=new ResizeObserver(le);let Ee=0;const Re=R=>{const U=t.current,O=e.getBoundingClientRect();!O.width||!O.height||(o.uMouse.value.set((R.clientX-O.left)/O.width*2-1,-((R.clientY-O.top)/O.height*2-1)),Ee=U.hoverRepel&&U.running?Oi(U.repelStrength/100,0,1)*gR:0)},Pe=()=>{Ee=0};e.addEventListener("pointermove",Re),e.addEventListener("pointerleave",Pe),e.addEventListener("pointercancel",Pe);function Je(R,U,O,ee,J){H=!0;let V=0,W=1/0;for(let te=0;te<Jl;te++){if(!N[te].active){V=te;break}N[te].at<W&&(W=N[te].at,V=te)}N[V]={active:!0,x:R,y:U,z:O,at:ee,amp:J}}function Oe(R,U,O,ee,J,V,W){let te=0,Q=0,ie=0,ne=!1;for(let fe=0;fe<Jl;fe++){const pe=N[fe];if(!pe.active)continue;const ye=ee-pe.at;if(ye>dR){pe.active=!1;continue}ne=!0;const I=R-pe.x,ce=U-pe.y,K=O-pe.z,ge=Math.sqrt(I*I+ce*ce+K*K);if(ge<.001||ge>W*1.5)continue;const xe=Math.abs(ge-hR*ye);if(xe>Pp)continue;const oe=Math.cos(xe/Pp*Math.PI/2),Te=Math.exp(-ye/fR),Me=1/Math.max(ge,.3),ht=Cp*pe.amp*pR*oe*Te*Me;te+=I/ge*ht,Q+=ce/ge*ht,ie+=K/ge*ht}ne||(H=!1),J[V]+=te,J[V+1]+=Q,J[V+2]+=ie}function je(R,U,O){k=!0;const ee=M[R*3],J=M[R*3+1],V=M[R*3+2];Je(ee,J,V,U,O);const W=Rp,te=W*W;for(let Q=0;Q<p;Q++){const ie=M[Q*3]-ee,ne=M[Q*3+1]-J,fe=M[Q*3+2]-V,pe=ie*ie+ne*ne+fe*fe;if(pe>te||pe<1e-4)continue;const ye=Math.sqrt(pe),I=1-ye/W,ce=Cp*O*I*I/Math.max(ye,.1);b[Q*3]+=ie*ce,b[Q*3+1]+=ne*ce,b[Q*3+2]+=fe*ce;const K=1+(uR-1)*O*I*I;K>P[Q]&&(P[Q]=K,v[Q]=0)}}function He(R){let U=!1;for(let O=0;O<p;O++){const ee=O*3;for(let te=0;te<3;te++){const Q=-50*w[ee+te]-lR*b[ee+te];b[ee+te]+=Q*R,w[ee+te]+=b[ee+te]*R}const J=w[ee]**2+w[ee+1]**2+w[ee+2]**2,V=b[ee]**2+b[ee+1]**2+b[ee+2]**2;J<1e-8&&V<1e-8?(w[ee]=w[ee+1]=w[ee+2]=0,b[ee]=b[ee+1]=b[ee+2]=0):U=!0;const W=-65*(P[O]-1)-cR*v[O];v[O]+=W*R,P[O]+=v[O]*R,Math.abs(P[O]-1)<.001&&Math.abs(v[O])<.001?(P[O]=1,v[O]=0):U=!0}U||(k=!1)}let Ve=0,et=0,it=0,ct=0,ut=0,st=!1,xt=0,B=performance.now();function Ft(R,U,O){const ee=t.current,J=ct*R.speed,V=R.bright*ee.lineGlow,W=.15+V*1.5,te=Math.min(V*.5*(.9+.1*Math.sin(U*.18+R.pulse)),.7)*Math.min(O*3,1),Q=R.from+O*(R.to-R.from),ie=.15*(R.to-R.from),{pts:ne,cols:fe}=R;for(let ye=0;ye<Bs;ye++){const I=ye/(Bs-1),ce=R.from+I*(R.to-R.from),K=ye*3;c.writePoint(ne,K,ce,R.lane,J,Kl,R.wobblePhase,U),H&&Oe(ne[K],ne[K+1],ne[K+2],U,ne,K,Rp);let ge=1;if(I<$a){const Te=I/$a;ge=Te*Te}else if(I>1-$a){const Te=(1-I)/$a;ge=Te*Te}let xe=1;ce>Q?xe=0:ce>Q-ie&&(xe=(Q-ce)/ie,xe*=xe);const oe=ge*W*xe*te;fe[K]=j.strand.r*oe,fe[K+1]=j.strand.g*oe,fe[K+2]=j.strand.b*oe}let pe=R.offset;for(let ye=0;ye<Bs-1;ye++){const I=ye*3,ce=(ye+1)*3;d[pe]=ne[I],d[pe+1]=ne[I+1],d[pe+2]=ne[I+2],g[pe]=fe[I],g[pe+1]=fe[I+1],g[pe+2]=fe[I+2],pe+=3,d[pe]=ne[ce],d[pe+1]=ne[ce+1],d[pe+2]=ne[ce+2],g[pe]=fe[ce],g[pe+1]=fe[ce+1],g[pe+2]=fe[ce+2],pe+=3}}function Ze(R,U,O,ee){const J=t.current,V=R.trail.length/3;if(!R.racing){if(R.head.material.opacity=0,ee<.3)return;if(R.idle+=O,R.idle>R.idleFor){R.racing=!0,R.s=J.flowDir<0?ec:Ql,R.base=J.cometSpeed*(.7+Math.random()*.6),R.speed=R.base,R.boost=0,R.boostMul=1;const ie=h[Math.floor(Math.random()*h.length)];R.lane=ie.lane,R.pulse=ie.speed,R.wobblePhase=ie.wobblePhase}return}if(R.boost>0&&(R.boost-=O,R.boost<=0?(R.boost=0,R.boostMul=1):R.boostMul=1+(Lp-1)*(R.boost/Ip),R.speed=R.base*R.boostMul),R.s+=O*R.speed*J.flowDir,J.flowDir<0?R.s<Ql:R.s>ec){R.racing=!1,R.idle=0,R.idleFor=J.cometDelay*(.6+Math.random()*.8),R.trailCol.fill(0),R.geo.attributes.color.needsUpdate=!0,R.head.material.opacity=0;return}const W=ct*R.pulse,te=Oi((R.s-Ql)/Np,0,1)*Oi((ec-R.s)/Np,0,1);for(let ie=0;ie<V;ie++){const ne=Oi(R.s-ie*.005*J.flowDir,.005,.995),fe=ie*3;c.writePoint(R.trail,fe,ne,R.lane,W,Kl,R.wobblePhase,U);const pe=(1-ie/V)**2,ye=R.bright*J.cometGlow*pe*te,I=ee*(ie<3?1.3:1);R.trailCol[fe]=j.comet.r*ye*I,R.trailCol[fe+1]=j.comet.g*ye*I,R.trailCol[fe+2]=j.comet.b*ye*I}R.head.position.set(R.trail[0],R.trail[1],R.trail[2]);const Q=R.boost>0?1+(R.boostMul-1)*.8:1;R.head.material.opacity=te*.35*ee*Q,R.head.scale.set(.35*Q,.35*Q,1),R.geo.attributes.position.needsUpdate=!0,R.geo.attributes.color.needsUpdate=!0}function C(R){const O=t.current.collideForce;if(O<=0)return;const ee=Dp*Dp;for(const J of $){if(!J.racing)continue;const V=J.trail[0],W=J.trail[1],te=J.trail[2];if(!(V===0&&W===0&&te===0))for(let Q=0;Q<p;Q+=3){const ie=M[Q*3]-V,ne=M[Q*3+1]-W,fe=M[Q*3+2]-te;ie*ie+ne*ne+fe*fe<ee&&A[Q]===0&&(A[Q]=.001,L[Q]=Up*O,P[Q]=1+(Op-1)*O,je(Q,R,O),J.boost=Ip,J.boostMul=1+(Lp-1)*O,J.speed=J.base*J.boostMul)}}}function _(R){Ve=requestAnimationFrame(_);const U=t.current,O=Math.min((R-B)/1e3,.04);if(B=R,!U.running){st||(i.render(s,r),st=!0);return}st=!1,et===0&&(et=R),it=(R-et)/1e3;const ee=it,J=tc(ee,ks.strandStart,ks.strandEnd),V=tc(ee,ks.dotStart,ks.dotEnd),W=tc(ee,ks.cometStart,ks.cometEnd);de(U);const te=Zl(U.zoom);r.fov!==te&&(r.fov=te,r.updateProjectionMatrix()),o.uRadius.value=Oi(U.repelRadius/(se/2),.01,3),ct+=O*U.flowSpeed;const Q=o.uStrength;if(Q.value+=(Ee-Q.value)*Math.min(1,O*12),ut+=O,ut>=Bp&&y){ut-=Bp;for(const ie of h)Ft(ie,ee,J);y.attributes.position.needsUpdate=!0,y.attributes.color.needsUpdate=!0}if(k&&He(O),S&&p>0){const ie=U.dotSize;for(let ne=0;ne<p;ne++){const fe=m[ne],pe=h[fe.strand]??h[0],ye=ct*pe.speed,I=ne*3;if(c.writePoint(M,I,fe.s,fe.lane,ye,Kl,pe.wobblePhase,ee),A[ne]>0){A[ne]+=O;const Te=A[ne];if(Te<Fp){const Me=Te/Fp;D[ne]=(1+(Op-1)*(1-Me))*(1-Me*Me),L[ne]=Up*(1-Me*Me)*(1-Me*Me)}else D[ne]=0,L[ne]=0;Te>mR&&(A[ne]=0,D[ne]=1,L[ne]=0)}const ce=D[ne],K=ie*P[ne]*ce;z.makeScale(K,K,K),z.setPosition(M[I]+w[I],M[I+1]+w[I+1],M[I+2]+w[I+2]),S.setMatrixAt(ne,z);const ge=1-U.dotFlicker+U.dotFlicker*(.08+.92*Math.max(0,Math.sin(ee*fe.flickerRate+fe.pulse))**2.5),xe=P[ne]>1.02?1+(P[ne]-1)*.5:1,oe=fe.bright*ge*U.dotGlow*xe*V*(1+L[ne])*ce;E[I]=j.dot.r*oe,E[I+1]=j.dot.g*oe,E[I+2]=j.dot.b*oe}S.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0),S.material.opacity=.9*V}for(const ie of $)Ze(ie,ee,O,W);xt++,xt%2===0&&p>0&&C(ee),i.render(s,r)}return me(),he.observe(e),B=performance.now(),Ve=requestAnimationFrame(_),{rebuild(){me()},dispose(){var R;cancelAnimationFrame(Ve),he.disconnect(),e.removeEventListener("pointermove",Re),e.removeEventListener("pointerleave",Pe),e.removeEventListener("pointercancel",Pe);for(const U of u)U.dispose();i.dispose(),(R=i.forceContextLoss)==null||R.call(i)}}}function _R(n){const{background:e=Bt.background,topRadius:t=Bt.topRadius,waistRadius:i=Bt.waistRadius,waistPosition:s=Bt.waistPosition,bottomRadius:r=Bt.bottomRadius,twist:a=Bt.twist,zoom:o=Bt.zoom,speed:l=Bt.speed,direction:c=Bt.direction,lineOptions:u=Bt.lineOptions,dots:f=Bt.dots,dotOptions:h=Bt.dotOptions,comets:d=Bt.comets,cometOptions:g=Bt.cometOptions,repel:y=Bt.repel,repelOptions:m=Bt.repelOptions,style:p}=n,S=ae.useRef(null),E=ae.useRef(null),w=!nR(),b={...Bt.lineOptions,...u},P={...Bt.dotOptions,...h},v={...Bt.cometOptions,...g},A={...Bt.repelOptions,...m},L={floorRadius:r/$l,waistRadius:i/$l,crownRadius:t/$l,waistAt:1-s/100,twist:a,zoom:o,flowDir:c==="left"?-1:1,flowSpeed:l/100*(c==="left"?-1:1),lineCount:b.count,lineColor:b.color,lineGlow:b.glow/10*iR,showDots:f,dotCount:P.count,dotSize:P.size/oR,dotColor:P.color,dotGlow:P.glow/10*sR,dotFlicker:P.flicker/10,showComets:d,cometCount:v.count,cometSpeed:v.speed/10*rR,cometColor:v.color,cometGlow:v.glow/10*aR,cometTail:v.tail,cometDelay:v.delay,collideForce:v.collide/10,hoverRepel:y,repelRadius:A.radius,repelStrength:A.strength,running:w},D=JSON.stringify([L.floorRadius,L.waistRadius,L.crownRadius,L.waistAt,L.twist,L.lineCount,L.showDots,L.dotCount,L.showComets,L.cometCount,L.cometTail]),k=ae.useRef(L);k.current=L;const $=ae.useRef(null);ae.useEffect(()=>{const N=E.current,H=S.current;if(!(!N||!H)){try{$.current=vR(N,H,k)}catch(z){console.warn("[Vortex] init failed:",z);return}return()=>{var z;(z=$.current)==null||z.dispose(),$.current=null}}},[]);const X=ae.useRef(!1);return ae.useEffect(()=>{var N;if(!X.current){X.current=!0;return}(N=$.current)==null||N.rebuild()},[D]),x.jsx("div",{ref:S,style:{...p,position:"relative",width:"100%",height:"100%",background:e,overflow:"hidden"},children:x.jsx("canvas",{ref:E,style:{display:"block",width:"100%",height:"100%"}})})}const yR={maskImage:"linear-gradient(#000 0 0), linear-gradient(#000 0 0)",maskClip:"border-box, content-box",maskComposite:"exclude",WebkitMaskImage:"linear-gradient(#000 0 0), linear-gradient(#000 0 0)",WebkitMaskClip:"border-box, content-box",WebkitMaskComposite:"xor"},MR=10;function kp({color:n="#52ae54",bandWidth:e=1.5,arcPercent:t=20,speed:i=3,direction:s="ccw"}){const r=ae.useRef(null),a=ae.useRef(null),[o,l]=ae.useState(0);ae.useEffect(()=>{const f=a.current;if(!f)return;const h=()=>l(Math.ceil(Math.hypot(f.offsetWidth,f.offsetHeight)*1.02));h();const d=new ResizeObserver(h);return d.observe(f),()=>d.disconnect()},[]),ae.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const h=360/Math.max(.5,MR/Math.max(1,i))*(s==="cw"?1:-1);let d=0,g=0,y=0;const m=p=>{g||(g=p),y=(y+h*(p-g)/1e3)%360,g=p;const S=r.current;S&&(S.style.transform=`rotate(${y}deg)`),d=requestAnimationFrame(m)};return d=requestAnimationFrame(m),()=>cancelAnimationFrame(d)},[i,s]);const c=Math.max(0,Math.min(100,t))/100*360,u=s==="cw"?`conic-gradient(from 0deg, rgba(0,0,0,0) 0deg, rgba(0,0,0,0) calc(360deg - ${c}deg), ${n} 360deg)`:`conic-gradient(from 0deg, ${n} 0deg, rgba(0,0,0,0) ${c}deg, rgba(0,0,0,0) 360deg)`;return x.jsx("div",{ref:a,"aria-hidden":!0,className:"pointer-events-none absolute inset-0 rounded-[inherit]",style:{boxSizing:"border-box",padding:e,...yR},children:x.jsxs("div",{ref:r,style:{position:"absolute",top:"50%",left:"50%",width:o,height:o,marginTop:-o/2,marginLeft:-o/2,transformOrigin:"center"},children:[x.jsx("div",{style:{position:"absolute",inset:0,background:u,filter:"blur(6px)"}}),x.jsx("div",{style:{position:"absolute",inset:0,background:u,opacity:.6}})]})})}function In(n){return`/originkit/hero-18/${n}`}const zp=In("tablet/diagonal-lines.png"),Vp=In("tablet/diagonal-lines-1.svg"),Ya=In("tablet/element.svg"),Gp=In("tablet/element-1.svg"),Hp=In("tablet/element-2.svg"),SR=In("tablet/element-3.svg"),bR=In("tablet/element-4.svg"),ER=In("tablet/elements.svg"),TR=In("tablet/ellipse.svg"),wR=In("tablet/ellipse-1.svg"),AR=In("tablet/polygon-1.svg"),RR=In("tablet/polygon-2.svg");function CR(){return x.jsxs("div",{className:"pointer-events-none absolute left-0 top-0 h-[529px] w-[744px]",style:{transform:"scale(max(1, 100vw / 744px))",transformOrigin:"top left"},children:[x.jsx("div",{className:"absolute bg-size-[3.617px_3.617px] bg-top-left h-[1107px] left-[-107px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-102.866px_16.133px] mask-size-[536.732px_1009.734px] top-[160px] w-[669px]",style:{backgroundImage:`url("${zp}")`,maskImage:`url("${Vp}")`}}),x.jsx("div",{className:"absolute flex h-[1107px] items-center justify-center left-[71px] top-[173px] w-[681px]",children:x.jsx("div",{className:"-scale-y-100 flex-none rotate-180",children:x.jsx("div",{className:"bg-size-[3.617px_3.617px] bg-top-left h-[1107px] mask-alpha mask-intersect mask-no-clip mask-no-repeat relative w-[681px]",style:{backgroundImage:`url("${zp}")`,maskImage:`url("${Vp}"), linear-gradient(to right, black 0%, black calc(100% - 60px), transparent 100%)`,maskSize:"536.732px 1009.734px, 100% 100%",maskPosition:"235.134px 16.133px, 0 0"}})})}),x.jsx("div",{className:"absolute left-0 top-0 h-[529.067px] w-[744px]",children:x.jsx("div",{className:"-scale-y-100 flex-none rotate-180 h-full w-full",children:x.jsxs("div",{className:"drop-shadow-[0px_2.067px_3.617px_rgba(0,0,0,0.25)] h-[529.067px] overflow-clip relative w-[744px]",children:[x.jsx("div",{className:"absolute contents left-[-152.32px] top-[-293.22px]",children:x.jsxs("div",{className:"absolute contents left-[154.98px] size-[964.4px] top-[-381.7px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[496.83px] size-[622.546px] top-[-381.7px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[458.582px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[71.736px_88.48px] mask-size-[1199.962px_1199.959px] relative w-[421.832px]",style:{maskImage:`url("${Ya}")`},children:x.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:Gp})})})})}),x.jsx("div",{className:"absolute flex h-[530.617px] items-center justify-center left-[239.48px] mix-blend-plus-lighter top-[-98.67px] w-[514.393px]",children:x.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[7.907px] from-[#52ae54] h-[647.674px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-293.764px_-194.543px] mask-size-[1199.962px_1199.959px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[91.435px]",style:{maskImage:`url("${Ya}")`}})})}),x.jsx("div",{className:"absolute flex h-[517.307px] items-center justify-center left-[274.29px] mix-blend-plus-lighter top-[-50.48px] w-[527.863px]",children:x.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[13.965px] from-[#52ae54] h-[647.689px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-245.487px_-242.739px] mask-size-[1199.962px_1199.959px] opacity-80 relative to-[88%] to-[rgba(82,174,84,0)] w-[91.432px]",style:{maskImage:`url("${Ya}")`}})})}),x.jsx("div",{className:"absolute flex h-[502.328px] items-center justify-center left-[314.33px] top-[-1.81px] w-[541.35px]",children:x.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[8.18px] h-[647.549px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-191.964px_-291.407px] mask-size-[1199.962px_1199.959px] opacity-30 relative w-[91.455px]",style:{maskImage:`url("${Ya}")`}})})})]})}),x.jsxs("div",{className:"absolute contents left-[154.98px] size-[964.4px] top-[-381.7px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[496.83px] size-[622.546px] top-[-381.7px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[458.582px] relative w-[421.832px]",children:x.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:Gp})})})})}),x.jsx("div",{className:"absolute flex h-[530.617px] items-center justify-center left-[239.49px] mix-blend-plus-lighter top-[-98.68px] w-[514.393px]",children:x.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[7.907px] from-[#52ae54] h-[647.674px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[91.435px]"})})}),x.jsx("div",{className:"absolute flex h-[517.307px] items-center justify-center left-[298.12px] top-[-52.7px] w-[527.863px]",children:x.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:x.jsx("div",{className:"blur-[13.965px] h-[647.689px] opacity-51 relative w-[91.432px]",style:{backgroundImage:"linear-gradient(179.20787261703023deg, rgb(82, 174, 84) 23.065%, rgba(82, 174, 84, 0.737) 14.923%, rgba(82, 174, 84, 0.307) 51.616%, rgba(82, 174, 84, 0) 99.903%)"}})})}),x.jsx("div",{className:"absolute flex h-[502.328px] items-center justify-center left-[314.33px] top-[-1.81px] w-[541.35px]",children:x.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[8.18px] h-[647.549px] opacity-30 relative w-[91.455px]"})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[480.53px] mix-blend-plus-lighter size-[308.491px] top-[15.17px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[436.272px] relative w-0",children:x.jsx("div",{className:"absolute inset-[-3.06%_-14.7px]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:Hp})})})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[375.76px] mix-blend-plus-lighter size-[308.491px] top-[-58.98px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[436.272px] relative w-0",children:x.jsx("div",{className:"absolute inset-[-3.06%_-14.7px]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:Hp})})})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[447.63px] mix-blend-plus-lighter size-[230.949px] top-[37.39px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[326.612px] relative w-0",children:x.jsx("div",{className:"absolute inset-[-4.08%_-13.67px]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:SR})})})})})]}),x.jsxs("div",{className:"absolute contents left-[-123.77px] size-[1010.405px] top-[-454.82px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[241.69px] size-[644.942px] top-[-454.82px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[490.254px] opacity-30 relative w-[421.832px]",children:x.jsx("div",{className:"absolute inset-[-27.93%_-32.46%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:bR})})})})}),x.jsx("div",{className:"absolute flex h-[562.128px] items-center justify-center left-[-39.26px] mix-blend-plus-lighter top-[-157.42px] w-[546.128px]",children:x.jsx("div",{className:"flex-none rotate-[43.47deg] skew-x-[-0.4deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[7.75px] from-[#52ae54] h-[692.387px] opacity-9 relative to-[88%] to-[rgba(82,174,84,0)] w-[91.439px]"})})}),x.jsx("div",{className:"absolute flex h-[549.008px] items-center justify-center left-[-4.36px] mix-blend-plus-lighter top-[-109.32px] w-[559.419px]",children:x.jsx("div",{className:"flex-none rotate-46 skew-x-[0.26deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[14.467px] from-[#52ae54] h-[692.414px] opacity-24 relative to-[88%] to-[rgba(82,174,84,0)] w-[91.434px]"})})}),x.jsx("div",{className:"absolute flex h-[534.179px] items-center justify-center left-[35.99px] top-[-60.92px] w-[572.664px]",children:x.jsx("div",{className:"flex-none rotate-[48.69deg] skew-x-[0.95deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[8.267px] h-[692.159px] opacity-9 relative w-[91.479px]"})})})]}),x.jsxs("div",{className:"absolute contents left-[-285.03px] size-[886.303px] top-[-443.15px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[16.74px] size-[584.529px] top-[-443.15px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[404.818px] opacity-30 relative w-[421.832px]",children:x.jsx("div",{className:"absolute inset-[-33.44%_-32.09%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:ER})})})})}),x.jsx("div",{className:"absolute flex h-[477.126px] items-center justify-center left-[-200.52px] mix-blend-plus-lighter top-[-184.54px] w-[460.522px]",children:x.jsx("div",{className:"flex-none rotate-[43.73deg] skew-x-[0.11deg]",children:x.jsx("div",{className:"blur-[20.667px] h-[571.778px] opacity-24 relative w-[91.428px]",style:{backgroundImage:"linear-gradient(180.31009559830392deg, rgb(82, 174, 84) 38.81%, rgba(82, 174, 84, 0) 72.523%)"}})})}),x.jsx("div",{className:"absolute flex h-[463.495px] items-center justify-center left-[-165.87px] top-[-136.18px] w-[474.298px]",children:x.jsx("div",{className:"flex-none rotate-[45.82deg] skew-x-[-0.07deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[20.667px] h-[571.77px] opacity-24 relative w-[91.429px]"})})}),x.jsx("div",{className:"absolute flex h-[448.259px] items-center justify-center left-[-126.37px] top-[-87.06px] w-[488.195px]",children:x.jsx("div",{className:"flex-none rotate-[48.05deg] skew-x-[-0.27deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[8.18px] h-[571.842px] opacity-9 relative w-[91.419px]"})})})]}),x.jsx("div",{className:"absolute flex items-center justify-center left-[-65.32px] mix-blend-plus-lighter size-[497.673px] top-[-139.32px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[640.686px] relative w-[63.13px]",children:x.jsx("div",{className:"absolute inset-[-8.06%_-81.84%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:TR})})})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[180.79px] mix-blend-plus-lighter size-[497.673px] top-[-183.96px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[640.686px] relative w-[63.13px]",children:x.jsx("div",{className:"absolute inset-[-3.71%_-37.65%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:wR})})})})})]})})}),x.jsx("div",{className:"absolute flex h-[283.684px] items-center justify-center right-[-125.26px] top-[-261.51px] w-[253.261px]",children:x.jsx("div",{className:"-scale-y-100 flex-none rotate-[37.91deg]",children:x.jsx("div",{className:"h-[278.462px] relative w-[104.141px]",children:x.jsx("div",{className:"absolute inset-[-132.28%_-346.99%_-107.28%_-346.99%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:RR})})})})}),x.jsx("div",{className:"absolute flex h-[100.818px] items-center justify-center left-[-81px] top-[430px] w-[86.192px]",children:x.jsx("div",{className:"flex-none rotate-[35.26deg]",children:x.jsx("div",{className:"h-[97.65px] relative w-[36.52px]",children:x.jsx("div",{className:"absolute inset-[-132.28%_-346.99%_-107.28%_-346.99%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:AR})})})})})]})}function Un(n){return`/originkit/hero-18/${n}`}const Wp=Un("mobile/diagonal-lines.png"),PR=Un("mobile/diagonal-lines-1.svg"),NR=Un("mobile/diagonal-lines-2.svg"),Ka=Un("mobile/element.svg"),jp=Un("mobile/element-1.svg"),Xp=Un("mobile/element-2.svg"),DR=Un("mobile/element-3.svg"),LR=Un("mobile/element-4.svg"),IR=Un("mobile/elements.svg"),UR=Un("mobile/ellipse.svg"),FR=Un("mobile/ellipse-1.svg"),OR=Un("mobile/polygon-1.svg");function BR(){return x.jsxs("div",{className:"pointer-events-none absolute left-0 top-0 h-[387px] w-[544px]",style:{transform:"scale(max(1, 100vw / 544px))",transformOrigin:"top left"},children:[x.jsx("div",{className:"absolute flex h-[1107px] items-center justify-center left-[-19px] top-[-7px] w-[681px]",children:x.jsx("div",{className:"-scale-y-100 flex-none rotate-180",children:x.jsx("div",{className:"bg-size-[3.617px_3.617px] bg-top-left h-[1107px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[235.134px_156.133px] mask-size-[536.733px_869.734px] relative w-[681px]",style:{backgroundImage:`url("${Wp}")`,maskImage:`url("${PR}")`}})})}),x.jsx("div",{className:"absolute bg-size-[3.617px_3.617px] bg-top-left h-[1107px] left-[-107px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-102.866px_16.133px] mask-size-[536.732px_1009.734px] top-[120px] w-[669px]",style:{backgroundImage:`url("${Wp}")`,maskImage:`url("${NR}")`}}),x.jsx("div",{className:"absolute left-0 top-0 h-[386.844px] w-[544px]",children:x.jsx("div",{className:"-scale-y-100 flex-none rotate-180 h-full w-full",children:x.jsxs("div",{className:"drop-shadow-[0px_1.511px_2.644px_rgba(0,0,0,0.25)] h-[386.844px] overflow-clip relative w-[544px]",children:[x.jsx("div",{className:"absolute contents left-[-111.37px] top-[-214.39px]",children:x.jsxs("div",{className:"absolute contents left-[113.32px] size-[705.154px] top-[-279.09px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[363.28px] size-[455.195px] top-[-279.08px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[335.307px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[52.451px_64.695px] mask-size-[877.391px_877.393px] relative w-[308.436px]",style:{maskImage:`url("${Ka}")`},children:x.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:jp})})})})}),x.jsx("div",{className:"absolute flex h-[387.978px] items-center justify-center left-[175.11px] mix-blend-plus-lighter top-[-72.14px] w-[376.115px]",children:x.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[5.781px] from-[#52ae54] h-[473.568px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-214.799px_-142.248px] mask-size-[877.391px_877.393px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[66.855px]",style:{maskImage:`url("${Ka}")`}})})}),x.jsx("div",{className:"absolute flex h-[378.246px] items-center justify-center left-[200.56px] mix-blend-plus-lighter top-[-36.9px] w-[385.965px]",children:x.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[10.211px] from-[#52ae54] h-[473.579px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-179.495px_-177.486px] mask-size-[877.391px_877.393px] opacity-80 relative to-[88%] to-[rgba(82,174,84,0)] w-[66.854px]",style:{maskImage:`url("${Ka}")`}})})}),x.jsx("div",{className:"absolute flex h-[367.293px] items-center justify-center left-[229.83px] top-[-1.32px] w-[395.826px]",children:x.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[5.981px] h-[473.477px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-140.363px_-213.074px] mask-size-[877.391px_877.393px] opacity-30 relative w-[66.871px]",style:{maskImage:`url("${Ka}")`}})})})]})}),x.jsxs("div",{className:"absolute contents left-[113.32px] size-[705.154px] top-[-279.09px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[363.28px] size-[455.195px] top-[-279.09px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[335.307px] relative w-[308.436px]",children:x.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:jp})})})})}),x.jsx("div",{className:"absolute flex h-[387.978px] items-center justify-center left-[175.11px] mix-blend-plus-lighter top-[-72.15px] w-[376.115px]",children:x.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[5.781px] from-[#52ae54] h-[473.568px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[66.855px]"})})}),x.jsx("div",{className:"absolute flex h-[378.246px] items-center justify-center left-[217.98px] top-[-38.54px] w-[385.965px]",children:x.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:x.jsx("div",{className:"blur-[10.211px] h-[473.579px] opacity-51 relative w-[66.854px]",style:{backgroundImage:"linear-gradient(179.20787259385162deg, rgb(82, 174, 84) 23.065%, rgba(82, 174, 84, 0.737) 14.923%, rgba(82, 174, 84, 0.307) 51.616%, rgba(82, 174, 84, 0) 99.903%)"}})})}),x.jsx("div",{className:"absolute flex h-[367.293px] items-center justify-center left-[229.83px] top-[-1.32px] w-[395.826px]",children:x.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[5.981px] h-[473.477px] opacity-30 relative w-[66.871px]"})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[351.36px] mix-blend-plus-lighter size-[225.563px] top-[11.09px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[318.995px] relative w-0",children:x.jsx("div",{className:"absolute inset-[-3.06%_-10.75px]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:Xp})})})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[274.75px] mix-blend-plus-lighter size-[225.563px] top-[-43.12px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[318.995px] relative w-0",children:x.jsx("div",{className:"absolute inset-[-3.06%_-10.75px]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:Xp})})})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[327.3px] mix-blend-plus-lighter size-[168.866px] top-[27.34px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[238.813px] relative w-0",children:x.jsx("div",{className:"absolute inset-[-4.08%_-10px]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:DR})})})})})]}),x.jsxs("div",{className:"absolute contents left-[-90.5px] size-[738.79px] top-[-332.56px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[176.72px] size-[471.57px] top-[-332.56px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[358.465px] opacity-30 relative w-[308.436px]",children:x.jsx("div",{className:"absolute inset-[-27.93%_-32.46%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:LR})})})})}),x.jsx("div",{className:"absolute flex h-[411.019px] items-center justify-center left-[-28.71px] mix-blend-plus-lighter top-[-115.1px] w-[399.319px]",children:x.jsx("div",{className:"flex-none rotate-[43.47deg] skew-x-[-0.4deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[5.667px] from-[#52ae54] h-[506.261px] opacity-9 relative to-[88%] to-[rgba(82,174,84,0)] w-[66.858px]"})})}),x.jsx("div",{className:"absolute flex h-[401.425px] items-center justify-center left-[-3.19px] mix-blend-plus-lighter top-[-79.93px] w-[409.037px]",children:x.jsx("div",{className:"flex-none rotate-46 skew-x-[0.26deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[10.578px] from-[#52ae54] h-[506.281px] opacity-24 relative to-[88%] to-[rgba(82,174,84,0)] w-[66.855px]"})})}),x.jsx("div",{className:"absolute flex h-[390.583px] items-center justify-center left-[26.31px] top-[-44.54px] w-[418.722px]",children:x.jsx("div",{className:"flex-none rotate-[48.69deg] skew-x-[0.95deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[6.044px] h-[506.095px] opacity-9 relative w-[66.888px]"})})})]}),x.jsxs("div",{className:"absolute contents left-[-208.41px] size-[648.05px] top-[-324.03px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[12.25px] size-[427.398px] top-[-324.03px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[295.996px] opacity-30 relative w-[308.436px]",children:x.jsx("div",{className:"absolute inset-[-33.44%_-32.09%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:IR})})})})}),x.jsx("div",{className:"absolute flex h-[348.867px] items-center justify-center left-[-146.61px] mix-blend-plus-lighter top-[-134.94px] w-[336.726px]",children:x.jsx("div",{className:"flex-none rotate-[43.73deg] skew-x-[0.11deg]",children:x.jsx("div",{className:"blur-[15.111px] h-[418.074px] opacity-24 relative w-[66.851px]",style:{backgroundImage:"linear-gradient(180.3100955887092deg, rgb(82, 174, 84) 38.81%, rgba(82, 174, 84, 0) 72.523%)"}})})}),x.jsx("div",{className:"absolute flex h-[338.899px] items-center justify-center left-[-121.28px] top-[-99.58px] w-[346.798px]",children:x.jsx("div",{className:"flex-none rotate-[45.82deg] skew-x-[-0.07deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[15.111px] h-[418.068px] opacity-24 relative w-[66.852px]"})})}),x.jsx("div",{className:"absolute flex h-[327.759px] items-center justify-center left-[-92.4px] top-[-63.66px] w-[356.96px]",children:x.jsx("div",{className:"flex-none rotate-[48.05deg] skew-x-[-0.27deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[5.981px] h-[418.121px] opacity-9 relative w-[66.844px]"})})})]}),x.jsx("div",{className:"absolute flex items-center justify-center left-[-47.76px] mix-blend-plus-lighter size-[363.89px] top-[-101.86px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[468.458px] relative w-[46.16px]",children:x.jsx("div",{className:"absolute inset-[-8.06%_-81.84%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:UR})})})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[132.19px] mix-blend-plus-lighter size-[363.89px] top-[-134.51px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[468.458px] relative w-[46.16px]",children:x.jsx("div",{className:"absolute inset-[-3.71%_-37.65%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:FR})})})})})]})})}),x.jsx("div",{className:"absolute flex h-[53.91px] items-center justify-center left-[-99.25px] top-[343.45px] w-[102.712px]",children:x.jsx("div",{className:"flex-none rotate-[79.37deg]",children:x.jsx("div",{className:"h-[97.65px] relative w-[36.52px]",children:x.jsx("div",{className:"absolute inset-[-132.28%_-346.99%_-107.28%_-346.99%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:OR})})})})})]})}function fi(n){return`/originkit/hero-18/${n}`}const qp=[{name:"Logiqo",src:fi("logos/logiqo.svg")},{name:"Nexora",src:fi("logos/nexora.svg")},{name:"Brandly",src:fi("logos/brandly.svg")},{name:"Markivo",src:fi("logos/markivo.svg")},{name:"Typely",src:fi("logos/typely.svg")},{name:"Framex",src:fi("logos/framex.svg")},{name:"Webora",src:fi("logos/webora.svg")},{name:"Designo",src:fi("logos/designo.svg")},{name:"Formix",src:fi("logos/formix.svg")}];function $p({className:n=""}){return x.jsx("div",{className:`relative overflow-hidden h18-logo-fade ${n}`,children:x.jsx("div",{className:"flex h-full w-max items-center h18-logo-track",children:[...qp,...qp].map((e,t)=>x.jsx("img",{alt:e.name,src:e.src,className:"h-full w-auto shrink-0 opacity-70"},`${e.name}-${t}`))})})}function sn(n){return`/originkit/hero-18/${n}`}const rc=sn("diagonal-lines.png"),kR=sn("diagonal-lines-1.svg"),zR=sn("diagonal-lines-2.svg"),VR=sn("diagonal-lines-3.svg"),GR=sn("polygon-1.svg"),HR=sn("polygon-2.svg"),Yp=sn("bold-astronomy-planet.svg"),Za=sn("group.svg"),Ja=sn("element.svg"),Kp=sn("element-1.svg"),Zp=sn("element-2.svg"),WR=sn("element-3.svg"),jR=sn("element-4.svg"),XR=sn("elements.svg"),qR=sn("ellipse.svg"),$R=sn("ellipse-1.svg"),Jp="font-[family-name:var(--font-inter-tight)]",Ui="font-[family-name:var(--font-lato)]",Qp="font-[family-name:var(--font-instrument-serif)]";function YR(){return x.jsxs("div",{className:"relative w-full overflow-hidden bg-[#0a0a0a] lg:h-full h18-background",children:[x.jsx("div",{className:"md:hidden",children:x.jsx(BR,{})}),x.jsx("div",{className:"hidden md:block lg:hidden",children:x.jsx(CR,{})}),x.jsx("div",{className:"pointer-events-none absolute -top-[127px] left-0 hidden h-full w-full lg:block",children:x.jsxs("div",{className:"drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] relative size-full",style:{transform:"scaleX(-1)",transformOrigin:"720px 0"},children:[x.jsx("div",{className:"absolute contents left-[-294.8px] top-[-567.51px]",children:x.jsxs("div",{className:"absolute contents left-[299.96px] size-[1866.579px] top-[-738.76px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[961.61px] size-[1204.928px] top-[-738.76px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[887.578px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[138.846px_171.255px] mask-size-[2322.501px_2322.501px] relative w-[816.448px]",style:{maskImage:`url("${Ja}")`},children:x.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:Kp})})})})}),x.jsx("div",{className:"absolute flex h-[1027.001px] items-center justify-center left-[463.52px] mix-blend-plus-lighter top-[-190.98px] w-[995.599px]",children:x.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[15.303px] from-[#52ae54] h-[1253.563px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-568.574px_-376.532px] mask-size-[2322.501px_2322.501px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[176.97px]",style:{maskImage:`url("${Ja}")`}})})}),x.jsx("div",{className:"absolute flex h-[1001.24px] items-center justify-center left-[530.89px] mix-blend-plus-lighter top-[-97.69px] w-[1021.671px]",children:x.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[27.029px] from-[#52ae54] h-[1253.592px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-475.135px_-469.815px] mask-size-[2322.501px_2322.501px] opacity-80 relative to-[88%] to-[rgba(82,174,84,0)] w-[176.965px]",style:{maskImage:`url("${Ja}")`}})})}),x.jsx("div",{className:"absolute flex h-[972.247px] items-center justify-center left-[608.38px] top-[-3.5px] w-[1047.775px]",children:x.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[15.833px] h-[1253.321px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-371.539px_-564.01px] mask-size-[2322.501px_2322.501px] opacity-30 relative w-[177.01px]",style:{maskImage:`url("${Ja}")`}})})})]})}),x.jsxs("div",{className:"absolute contents left-[299.96px] size-[1866.58px] top-[-738.76px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[961.61px] size-[1204.928px] top-[-738.76px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[887.578px] relative w-[816.448px]",children:x.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:Kp})})})})}),x.jsx("div",{className:"absolute flex h-[1027.001px] items-center justify-center left-[463.52px] mix-blend-plus-lighter top-[-190.98px] w-[995.599px]",children:x.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[15.303px] from-[#52ae54] h-[1253.563px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[176.97px]"})})}),x.jsx("div",{className:"absolute flex h-[1001.24px] items-center justify-center left-[577px] top-[-102px] w-[1021.671px]",children:x.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:x.jsx("div",{className:"blur-[27.029px] h-[1253.592px] opacity-51 relative w-[176.965px]",style:{backgroundImage:"linear-gradient(179.20787263074158deg, rgb(82, 174, 84) 23.065%, rgba(82, 174, 84, 0.737) 14.923%, rgba(82, 174, 84, 0.307) 51.616%, rgba(82, 174, 84, 0) 99.903%)"}})})}),x.jsx("div",{className:"absolute flex h-[972.247px] items-center justify-center left-[608.38px] top-[-3.5px] w-[1047.775px]",children:x.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[15.833px] h-[1253.321px] opacity-30 relative w-[177.01px]"})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[930.06px] mix-blend-plus-lighter size-[597.079px] top-[29.37px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[844.398px] relative w-0",children:x.jsx("div",{className:"absolute inset-[-3.06%_-28.45px]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:Zp})})})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[727.28px] mix-blend-plus-lighter size-[597.079px] top-[-114.14px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[844.398px] relative w-0",children:x.jsx("div",{className:"absolute inset-[-3.06%_-28.45px]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:Zp})})})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[866.38px] mix-blend-plus-lighter size-[446.999px] top-[72.37px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[632.151px] relative w-0",children:x.jsx("div",{className:"absolute inset-[-4.08%_-26.46px]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:WR})})})})})]}),x.jsxs("div",{className:"absolute contents left-[-239.55px] size-[1955.623px] top-[-880.31px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[467.8px] size-[1248.275px] top-[-880.31px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[948.879px] opacity-30 relative w-[816.448px]",children:x.jsx("div",{className:"absolute inset-[-27.93%_-32.46%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:jR})})})})}),x.jsx("div",{className:"absolute flex h-[1087.991px] items-center justify-center left-[-75.99px] mix-blend-plus-lighter top-[-304.68px] w-[1057.022px]",children:x.jsx("div",{className:"flex-none rotate-[43.47deg] skew-x-[-0.4deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[15px] from-[#52ae54] h-[1340.103px] opacity-9 relative to-[88%] to-[rgba(82,174,84,0)] w-[176.978px]"})})}),x.jsx("div",{className:"absolute flex h-[1062.596px] items-center justify-center left-[-8.45px] mix-blend-plus-lighter top-[-211.58px] w-[1082.746px]",children:x.jsx("div",{className:"flex-none rotate-46 skew-x-[0.26deg]",children:x.jsx("div",{className:"bg-gradient-to-b blur-[28px] from-[#52ae54] h-[1340.156px] opacity-24 relative to-[88%] to-[rgba(82,174,84,0)] w-[176.969px]"})})}),x.jsx("div",{className:"absolute flex h-[1033.896px] items-center justify-center left-[69.65px] top-[-117.91px] w-[1108.382px]",children:x.jsx("div",{className:"flex-none rotate-[48.69deg] skew-x-[0.95deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[16px] h-[1339.663px] opacity-9 relative w-[177.056px]"})})})]}),x.jsxs("div",{className:"absolute contents left-[-551.67px] size-[1715.427px] top-[-857.71px]",children:[x.jsx("div",{className:"absolute flex items-center justify-center left-[32.41px] size-[1131.347px] top-[-857.71px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[783.518px] opacity-30 relative w-[816.448px]",children:x.jsx("div",{className:"absolute inset-[-33.44%_-32.09%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:XR})})})})}),x.jsx("div",{className:"absolute flex h-[923.47px] items-center justify-center left-[-388.11px] mix-blend-plus-lighter top-[-357.18px] w-[891.334px]",children:x.jsx("div",{className:"flex-none rotate-[43.73deg] skew-x-[0.11deg]",children:x.jsx("div",{className:"blur-[40px] h-[1106.666px] opacity-24 relative w-[176.958px]",style:{backgroundImage:"linear-gradient(180.31009561457427deg, rgb(82, 174, 84) 38.81%, rgba(82, 174, 84, 0) 72.523%)"}})})}),x.jsx("div",{className:"absolute flex h-[897.087px] items-center justify-center left-[-321.04px] mix-blend-plus-lighter top-[-263.59px] w-[917.996px]",children:x.jsx("div",{className:"flex-none rotate-[45.82deg] skew-x-[-0.07deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[40px] h-[1106.651px] opacity-24 relative w-[176.96px]"})})}),x.jsx("div",{className:"absolute flex h-[867.597px] items-center justify-center left-[-244.58px] top-[-168.51px] w-[944.893px]",children:x.jsx("div",{className:"flex-none rotate-[48.05deg] skew-x-[-0.27deg]",children:x.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[15.833px] h-[1106.791px] opacity-9 relative w-[176.939px]"})})})]}),x.jsx("div",{className:"absolute flex items-center justify-center left-[-126.42px] mix-blend-plus-lighter size-[963.238px] top-[-269.64px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[1240.037px] relative w-[122.187px]",children:x.jsx("div",{className:"absolute inset-[-8.06%_-81.84%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:qR})})})})}),x.jsx("div",{className:"absolute flex items-center justify-center left-[349.92px] mix-blend-plus-lighter size-[963.238px] top-[-356.04px]",children:x.jsx("div",{className:"flex-none rotate-45",children:x.jsx("div",{className:"h-[1240.037px] relative w-[122.187px]",children:x.jsx("div",{className:"absolute inset-[-3.71%_-37.65%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:$R})})})})})]})}),x.jsxs("div",{className:"hidden lg:contents",children:[x.jsx("div",{className:"absolute contents left-[859px] top-[-79px]",children:x.jsx("div",{className:"absolute bg-size-[7px_7px] bg-top-left h-[762px] left-[651px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[156px_-53px] mask-size-[811px_855px] top-[-78px] w-[1296px]",style:{backgroundImage:`url("${rc}")`,maskImage:`url("${kR}")`}})}),x.jsx("div",{className:"absolute contents left-[465px] top-[41px]",children:x.jsx("div",{className:"absolute bg-size-[7px_7px] bg-top-left h-[762px] left-[361.4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[168.353px_100.314px] mask-size-[474.229px_622.65px] top-[-78.24px] w-[1296px]",style:{backgroundImage:`url("${rc}")`,maskImage:`url("${zR}")`}})}),x.jsx("div",{className:"absolute contents left-[-50px] top-[302px]",children:x.jsx("div",{className:"absolute bg-size-[7px_7px] bg-top-left h-[762px] left-[-258px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[156px_-53px] mask-size-[685px_658px] top-[303px] w-[1296px]",style:{backgroundImage:`url("${rc}")`,maskImage:`url("${VR}")`}})})]}),x.jsx("div",{className:"pointer-events-none hidden lg:absolute lg:inset-y-0 lg:z-10 lg:block lg:w-[1440px]",style:{left:"max(0px, calc((100% - 1440px) / 2))",transform:"scale(min(1, calc(100vw / 1440px)))",transformOrigin:"top left"}}),x.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-[40px] px-6 pb-[20px] pt-[16px] text-center md:gap-[56px] md:px-10 md:pb-[24px] md:pt-[24px] lg:hidden",children:[x.jsxs("div",{className:"flex flex-col items-center gap-[20px] md:gap-[24px]",children:[x.jsxs("div",{className:"relative flex items-center gap-[10px] rounded-[12px] bg-[rgba(255,255,255,0.02)] px-[12px] py-[8px]",children:[x.jsx("div",{className:"bg-[#1a781c] content-stretch flex items-center p-[6.4px] relative rounded-[80px] shrink-0",children:x.jsx("div",{className:"relative shrink-0 size-[19.2px]",children:x.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:Yp})})}),x.jsx("p",{className:`${Ui} text-[15px] text-white tracking-[-0.3px] whitespace-nowrap md:text-[17px]`,children:"Cookieless Analytics"}),x.jsx(kp,{})]}),x.jsxs("div",{className:"flex flex-col items-center gap-[14px] text-white md:gap-[16px]",children:[x.jsx("h1",{className:`${Qp} max-w-[280px] font-normal leading-[1.15] text-[34px] tracking-[-0.68px] md:max-w-[460px] md:text-[52px] md:leading-[1.1] md:tracking-[-1.04px]`,children:"Website analytics without the cookies."}),x.jsx("p",{className:`${Ui} max-w-[320px] text-[15px] leading-[1.4] opacity-70 md:max-w-[440px] md:text-[18px]`,children:"One process, one snippet, zero tracking scripts. Real visitors, private by default."})]}),x.jsxs("div",{className:"flex items-center gap-[12px] md:gap-[16px]",children:[x.jsxs("a",{href:"/dashboard",className:"relative flex items-center justify-between gap-[8px] overflow-clip rounded-[12px] border-t border-[rgba(255,255,255,0.15)] py-[12px] pl-[18px] pr-[12px] shadow-[0px_3px_6px_0px_rgba(82,82,82,0.1)] transition-[filter] duration-150 hover:brightness-110 md:py-[14px] md:pl-[24px] md:pr-[14px]",children:[x.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none rounded-[12px]",style:{backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0.2) 4.0988%, rgba(255, 255, 255, 0) 43.902%), linear-gradient(90deg, rgb(26, 120, 28) 0%, rgb(26, 120, 28) 100%)"}}),x.jsx("p",{className:`${Ui} relative font-bold text-[14px] text-white tracking-[-0.28px] whitespace-nowrap md:text-[16px]`,children:"View dashboard"}),x.jsx("div",{className:"relative shrink-0 size-[18px] md:size-[22px]",children:x.jsx("div",{className:"absolute inset-[28.66%_35.71%_23.78%_35.72%]",children:x.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:Za})})}),x.jsx("div",{className:"absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.3)]"})]}),x.jsxs("a",{href:"https://github.com/trippusultan/peek",className:"bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] border-solid flex items-center justify-center gap-[10px] rounded-[10px] py-[12px] pl-[18px] pr-[12px] transition-colors duration-150 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] md:py-[14px] md:pl-[24px] md:pr-[14px]",children:[x.jsx("p",{className:`${Ui} text-[13px] text-white tracking-[-0.35px] whitespace-nowrap md:text-[14px]`,children:"GitHub"}),x.jsx("div",{className:"relative shrink-0 size-[18px] md:size-[22px]",children:x.jsx("div",{className:"absolute inset-[28.66%_35.71%_23.78%_35.72%]",children:x.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:Za})})})]})]})]}),x.jsxs("div",{className:"flex flex-col items-center gap-[12px] self-stretch",children:[x.jsx("p",{className:`${Jp} font-light text-[14px] text-white opacity-50 md:text-[16px]`,children:"Zero cookies. Zero third-party scripts."}),x.jsx($p,{className:"h-[42px] w-full md:h-[82px]"})]})]}),x.jsx("div",{className:"pointer-events-none hidden lg:absolute lg:inset-y-0 lg:z-10 lg:block lg:w-[1440px]",style:{left:"max(0px, calc((100% - 1440px) / 2))",transform:"scale(min(1, calc(100vw / 1440px)))",transformOrigin:"top left"},children:x.jsxs("div",{className:"pointer-events-auto lg:absolute lg:content-stretch lg:flex flex-col gap-[72px] items-start left-[82px] top-[207px] w-[688px]",children:[x.jsxs("div",{className:"content-stretch flex flex-col gap-[24px] items-start relative shrink-0",children:[x.jsxs("div",{className:"bg-[rgba(255,255,255,0.02)] content-stretch flex flex-col gap-[10px] items-start px-[12px] py-[8px] relative rounded-[12px] shrink-0",children:[x.jsxs("div",{className:"content-stretch flex gap-[10px] items-center justify-center relative rounded-[12px] shrink-0",children:[x.jsx("div",{className:"bg-[#1a781c] content-stretch flex items-center p-[6.4px] relative rounded-[80px] shrink-0",children:x.jsx("div",{className:"relative shrink-0 size-[19.2px]",children:x.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:Yp})})}),x.jsx("p",{className:`${Ui} font-normal leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap`,children:"Cookieless Analytics"})]}),x.jsx(kp,{})]}),x.jsxs("div",{className:"content-stretch flex flex-col gap-[32px] items-start relative shrink-0",children:[x.jsxs("div",{className:"content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-white",children:[x.jsx("h1",{className:`${Qp} font-normal leading-[1.1] relative shrink-0 text-[62px] tracking-[-1.24px] w-[502px]`,children:"Website analytics without the cookies."}),x.jsx("p",{className:`${Ui} font-normal leading-[normal] opacity-70 relative shrink-0 text-[20px] tracking-[-0.4px] w-[474px]`,children:"One process, one snippet, zero tracking scripts. Real visitors, private by default."})]}),x.jsxs("div",{className:"content-stretch flex gap-[16px] items-center relative shrink-0",children:[x.jsxs("a",{href:"/dashboard",className:"border-[rgba(255,255,255,0.15)] border-solid border-t content-stretch flex items-center justify-between overflow-clip pl-[24px] pr-[14px] py-[14px] relative rounded-[12px] shadow-[0px_63px_18px_0px_rgba(82,82,82,0),0px_40px_16px_0px_rgba(82,82,82,0.01),0px_23px_14px_0px_rgba(82,82,82,0.05),0px_10px_10px_0px_rgba(82,82,82,0.09),0px_3px_6px_0px_rgba(82,82,82,0.1)] shrink-0 w-[136px] transition-[filter] duration-150 hover:brightness-110",children:[x.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none rounded-[12px]",style:{backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0.2) 4.0988%, rgba(255, 255, 255, 0) 43.902%), linear-gradient(90deg, rgb(26, 120, 28) 0%, rgb(26, 120, 28) 100%)"}}),x.jsx("p",{className:`${Ui} font-bold leading-[1.5] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap`,children:"View dashboard"}),x.jsx("div",{className:"relative shrink-0 size-[22px]",children:x.jsx("div",{className:"absolute inset-[28.66%_35.71%_23.78%_35.72%]",children:x.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:Za})})}),x.jsx("div",{className:"absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.3)]"})]}),x.jsxs("a",{href:"https://github.com/trippusultan/peek",className:"bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex gap-[10px] h-full items-center justify-center pl-[24px] pr-[14px] py-[14px] relative rounded-[10px] shrink-0 transition-colors duration-150 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)]",children:[x.jsx("p",{className:`${Ui} font-normal leading-[1.5] relative shrink-0 text-[14px] text-white tracking-[-0.42px] whitespace-nowrap`,children:"GitHub"}),x.jsx("div",{className:"relative shrink-0 size-[22px]",children:x.jsx("div",{className:"absolute inset-[28.66%_35.71%_23.78%_35.72%]",children:x.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:Za})})})]})]})]})]}),x.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[x.jsx("p",{className:`${Jp} font-light leading-[1.3] opacity-50 relative shrink-0 text-[16px] text-white w-full`,children:"Zero cookies. Zero third-party scripts."}),x.jsx($p,{className:"h-[85px] w-full"})]})]})}),x.jsxs("div",{className:"relative z-0 h-[340px] w-full md:h-[440px] lg:absolute lg:inset-0 lg:h-auto lg:overflow-hidden",children:[x.jsx("div",{className:"h-full w-full lg:absolute lg:left-0 lg:top-1/2 lg:aspect-[1440/1024] lg:h-auto lg:w-[max(130%,calc(100vh*1440/1024))] lg:-translate-y-1/2",children:x.jsx(_R,{background:"transparent",lineOptions:{color:"#7CFC8A",glow:5},dotOptions:{color:"#ffffff",glow:.8,count:5e3},repel:!1})}),x.jsx("div",{className:"pointer-events-none absolute inset-x-0 -top-[64px] h-[160px] lg:hidden",style:{backgroundImage:"linear-gradient(to bottom, rgba(10,10,10,0) 0%, #0a0a0a 40%, #0a0a0a 55%, rgba(10,10,10,0) 100%)"}})]}),x.jsx("div",{className:"hidden lg:absolute lg:flex h-[195.131px] items-center justify-center left-[-162px] top-[508px] w-[166.822px]",children:x.jsx("div",{className:"flex-none rotate-[35.26deg]",children:x.jsx("div",{className:"h-[189px] relative w-[70.683px]",children:x.jsx("div",{className:"absolute inset-[-132.28%_-346.99%_-107.28%_-346.99%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:GR})})})})}),x.jsx("div",{className:"hidden lg:absolute lg:flex h-[192.545px] items-center justify-center right-[-92.25px] top-[-170.71px] w-[171.896px]",children:x.jsx("div",{className:"-scale-y-100 flex-none rotate-[37.91deg]",children:x.jsx("div",{className:"h-[189px] relative w-[70.683px]",children:x.jsx("div",{className:"absolute inset-[-132.28%_-346.99%_-107.28%_-346.99%]",children:x.jsx("img",{alt:"",className:"block max-w-none size-full",src:HR})})})})})]})}const KR=()=>x.jsx("main",{className:"relative w-full lg:h-screen lg:min-h-[769px] lg:shrink-0",children:x.jsx(YR,{})}),F0=n=>n.toLocaleString("en-US");function ZR(){const[n,e]=ae.useState(null),[t,i]=ae.useState("0");return ae.useEffect(()=>{let s=!0;const r=()=>fetch("/api/stats").then(o=>o.ok?o.json():null).then(o=>{o&&s&&e(o)}).catch(()=>{});fetch("/api/live").then(o=>o.ok?o.json():null).then(o=>{o&&s&&i(o.n)}).catch(()=>{}),r();const a=setInterval(r,3e4);return()=>{s=!1,clearInterval(a)}},[]),{stats:n,live:t}}function JR({to:n,dec:e=0,suffix:t=""}){const[i,s]=ae.useState(0),r=em.useRef(null);ae.useEffect(()=>{const o=r.current;if(!o||n==null)return;if(matchMedia("(prefers-reduced-motion: reduce)").matches){s(n);return}const l=new IntersectionObserver(c=>{if(!c[0].isIntersecting)return;l.disconnect();const u=performance.now(),f=900;(function h(d){const g=Math.min(1,(d-u)/f);s(n*(1-Math.pow(1-g,3))),g<1&&requestAnimationFrame(h)})(u)},{threshold:.3});return l.observe(o),()=>l.disconnect()},[n]);const a=e?i.toFixed(e):F0(Math.round(i));return x.jsxs("span",{ref:r,children:[a,t]})}function Qa({label:n,value:e,dec:t=0,suffix:i=""}){return x.jsxs("div",{className:"stat",children:[x.jsx("span",{className:"sl",children:n}),x.jsx("span",{className:"sv",children:x.jsx(JR,{to:e,dec:t,suffix:i})})]})}const QR=[{h:"Cookieless by design",p:"Visitor identity is a daily-rotating hash of IP and user agent, kept entirely server-side. No cookies, no consent banners, no fingerprinting.",mono:"identity = hash(ip + ua + salt) / rotates daily"},{h:"353 B snippet",p:"One line of JavaScript loaded from your own domain. It never touches a third-party server, ever.",mono:"one line of JS / gzipped / server-relative"},{h:"One process",p:"Express, geoip-lite and SQLite in a single Node server. Nothing to orchestrate, no queue, no warehouse.",mono:"node server.js / SQLite on disk"},{h:"Realtime",p:"The live counter and the daily chart update on every request. No batch jobs, no polling, no stale numbers.",mono:"current visitors / updates per request"}],e2=[{n:"1",h:"Add the snippet",p:"Paste one script tag into any page. It beacons back to wherever it was loaded from."},{n:"2",h:"Visit your site",p:"Each request is counted as a real visit. No JavaScript is needed on the visitor side."},{n:"3",h:"Watch it live",p:"The dashboard updates with current visitors, sources, pages and devices."}];function t2(){const{stats:n,live:e}=ZR(),[t,i]=ae.useState(null);ae.useEffect(()=>{let r=!0;return fetch("/api/countries").then(a=>a.ok?a.json():null).then(a=>{a&&r&&i(a.filter(o=>o.lat!=null))}).catch(()=>{}),()=>{r=!1}},[]);const s=(t||[]).map(r=>({lat:r.lat,lng:r.lng}));return x.jsxs("div",{className:"page",children:[x.jsx(tR,{live:e}),x.jsx(KR,{}),x.jsx("section",{className:"marquee","aria-hidden":"true",children:x.jsx(B0,{text:"COOKIELESS WEB ANALYTICS",separator:"  /  ",textColor:"rgba(245,245,245,0.14)",speed:1.1,reversed:!1,waveFrequency:.02,waveHeight:9,width:"100%",height:84,className:"mq"})}),x.jsxs("section",{className:"product container",children:[x.jsx(G0,{color:"#3a3a3a",glowColor:"rgba(245,245,245,0.55)",glowIntensity:3,chaos:2.5,thickness:1.5,speed:.8,borderRadius:18,children:x.jsxs("div",{className:"browser",children:[x.jsxs("div",{className:"b-bar",children:[x.jsx("span",{className:"b-dot"}),x.jsx("span",{className:"b-dot"}),x.jsx("span",{className:"b-dot"}),x.jsx("span",{className:"b-url",children:"peek-a6sg.onrender.com/dashboard"})]}),x.jsx("img",{src:"/peek-dashboard.png",alt:"The peek dashboard: visitor trend chart, four KPI cards and a traffic table",width:"1440",height:"900",fetchpriority:"high"})]})}),x.jsx("p",{className:"pcap",children:"The live dashboard. Same screen behind the auth gate."})]}),x.jsx("section",{className:"stats",children:x.jsxs("div",{className:"stats-inner",children:[x.jsx(Qa,{label:"Current visitors",value:n?n.live:0}),x.jsx(Qa,{label:"Pageviews (7d)",value:n?n.pv:0}),x.jsx(Qa,{label:"Visitors (7d)",value:n?n.uv:0}),x.jsx(Qa,{label:"Bounce rate (7d)",value:n?n.bounce:0,dec:1,suffix:"%"})]})}),x.jsxs("section",{className:"features container",id:"features",children:[x.jsx("h2",{children:"Built to ask for nothing."}),x.jsx("div",{className:"fgrid",children:QR.map((r,a)=>x.jsxs("div",{className:"fcell",children:[x.jsx(W0,{title:r.h,textColor:"#f5f5f5",hoverColor:"#f5f5f5",fontSize:19,fontWeight:700,duration:.3}),x.jsx("p",{children:r.p}),x.jsx("div",{className:"mono",children:r.mono})]},r.h))})]}),x.jsxs("section",{className:"how container",children:[x.jsx("h2",{children:"Live in three steps."}),x.jsx("div",{className:"steps",children:e2.map(r=>x.jsxs("div",{className:"step",children:[x.jsx("span",{className:"n",children:r.n}),x.jsxs("div",{children:[x.jsx("h3",{children:r.h}),x.jsx("p",{children:r.p}),r.n==="1"&&x.jsx("pre",{className:"code",children:x.jsx("code",{children:'<script defer data-site="your-site-name" src="https://YOUR-RENDER-URL/s.js"><\/script>'})})]})]},r.n))})]}),x.jsxs("section",{className:"globe-section container",children:[x.jsx("h2",{children:"Traffic around the world."}),x.jsxs("div",{className:"globe-wrap",children:[x.jsx("div",{className:"globe","aria-label":"3D globe with markers at the countries your visitors came from",children:x.jsx(m1,{speed:1.6,dots:{color:"#3a3a3a",size:5,density:7,allDots:!1},fill:"dots",fillColor:"#f5f5f5",oceanColor:"#0a0a0a",outlineColor:"#2a2a2a",showOutline:!0,graticuleColor:"#2e2e2e",showGrid:!0,markerConfig:{markers:s,color:"#f5f5f5",size:34},initialLatitude:20,initialLongitude:-10,stopOnHover:!0})}),x.jsxs("div",{className:"country-list",children:[(t||[]).slice(0,8).map((r,a)=>x.jsxs("div",{className:"crow",children:[x.jsx("span",{className:"cn",children:String(a+1).padStart(2,"0")}),x.jsx("span",{className:"nm2",children:r.name}),x.jsx("span",{className:"cv",children:F0(r.pv)})]},r.code)),(!t||t.length===0)&&x.jsx("p",{className:"empty",children:"No traffic yet. Visit the landing page to light up your first marker."})]})]})]}),x.jsx("section",{className:"white",children:x.jsxs("div",{className:"w-inner",children:[x.jsx("h2",{children:"Your data stays yours."}),x.jsx("p",{className:"w-statement",children:"No account, no cloud, no cookies, no third-party scripts. Every record lives in a SQLite file on your own server."}),x.jsx("div",{className:"w-cta",children:x.jsx(X0,{text:"View dashboard",link:"/dashboard",textColor:"#f5f5f5",shineColor:"#0a0a0a",speed:1.8,style:{background:"#0a0a0a",padding:"14px 30px",borderRadius:8,fontSize:16,fontWeight:650}})}),x.jsx("figure",{className:"w-phone",children:x.jsx("img",{src:"/peek-mobile.png",alt:"The peek dashboard on a phone",width:"390",height:"844",loading:"lazy"})})]})}),x.jsx("footer",{children:x.jsxs("div",{className:"foot",children:[x.jsx("span",{children:"peek - privacy-first analytics"}),x.jsxs("span",{children:["built by ",x.jsx("a",{href:"https://github.com/trippusultan",children:"trippusultan"})]})]})})]})}O0(document.getElementById("root")).render(x.jsx(em.StrictMode,{children:x.jsx(t2,{})}));
