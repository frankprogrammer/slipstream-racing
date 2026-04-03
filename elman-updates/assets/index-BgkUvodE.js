(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="170",bd=0,Tl=1,Rd=2,mu=1,_u=2,kn=3,Jn=0,$t=1,Rt=2,mi=0,Hi=1,gi=2,Ml=3,Al=4,wd=5,Ui=100,Id=101,Cd=102,Ld=103,Pd=104,Nd=200,Dd=201,Od=202,Ud=203,Oa=204,Ua=205,Fd=206,Bd=207,Hd=208,Gd=209,zd=210,kd=211,Vd=212,Wd=213,Xd=214,Fa=0,Ba=1,Ha=2,bs=3,Ga=4,za=5,ka=6,Va=7,gu=0,qd=1,Yd=2,_i=0,Zd=1,Kd=2,jd=3,xu=4,$d=5,Jd=6,Qd=7,vl="attached",ef="detached",Su=300,Rs=301,ws=302,Wa=303,Xa=304,Go=306,Is=1e3,di=1001,Lo=1002,Wt=1003,Eu=1004,ar=1005,Lt=1006,xo=1007,Yn=1008,Qn=1009,Tu=1010,Mu=1011,_r=1012,Hc=1013,Gi=1014,Tn=1015,Ar=1016,Gc=1017,zc=1018,Cs=1020,Au=35902,vu=1021,yu=1022,fn=1023,bu=1024,Ru=1025,Ss=1026,Ls=1027,kc=1028,Vc=1029,wu=1030,Wc=1031,Xc=1033,So=33776,Eo=33777,To=33778,Mo=33779,qa=35840,Ya=35841,Za=35842,Ka=35843,ja=36196,$a=37492,Ja=37496,Qa=37808,ec=37809,tc=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,cc=37817,lc=37818,hc=37819,uc=37820,dc=37821,Ao=36492,fc=36494,pc=36495,Iu=36283,mc=36284,_c=36285,gc=36286,gr=2300,xr=2301,Xo=2302,yl=2400,bl=2401,Rl=2402,tf=2500,nf=0,Cu=1,xc=2,sf=3200,rf=3201,Lu=0,of=1,ui="",Tt="srgb",Xt="srgb-linear",zo="linear",ct="srgb",Xi=7680,wl=519,af=512,cf=513,lf=514,Pu=515,hf=516,uf=517,df=518,ff=519,Sc=35044,Po=35048,Il="300 es",Zn=2e3,No=2001;class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cl=1234567;const Es=Math.PI/180,Ps=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function qc(s,e){return(s%e+e)%e}function pf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mf(s,e,t){return s!==e?(t-s)/(e-s):0}function pr(s,e,t){return(1-t)*s+t*e}function _f(s,e,t,n){return pr(s,e,1-Math.exp(-t*n))}function gf(s,e=1){return e-Math.abs(qc(s,e*2)-e)}function xf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Sf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ef(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Tf(s,e){return s+Math.random()*(e-s)}function Mf(s){return s*(.5-Math.random())}function Af(s){s!==void 0&&(Cl=s);let e=Cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vf(s){return s*Es}function yf(s){return s*Ps}function bf(s){return(s&s-1)===0&&s!==0}function Rf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function If(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*_,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*_,a*l);break;case"ZYZ":s.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Kn={DEG2RAD:Es,RAD2DEG:Ps,generateUUID:Mn,clamp:Ft,euclideanModulo:qc,mapLinear:pf,inverseLerp:mf,lerp:pr,damp:_f,pingpong:gf,smoothstep:xf,smootherstep:Sf,randInt:Ef,randFloat:Tf,randFloatSpread:Mf,seededRandom:Af,degToRad:vf,radToDeg:yf,isPowerOfTwo:bf,ceilPowerOfTwo:Rf,floorPowerOfTwo:wf,setQuaternionFromProperEuler:If,normalize:st,denormalize:En};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,r,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],T=i[1],M=i[4],x=i[7],C=i[2],w=i[5],b=i[8];return r[0]=o*g+a*T+c*C,r[3]=o*m+a*M+c*w,r[6]=o*p+a*x+c*b,r[1]=l*g+h*T+u*C,r[4]=l*m+h*M+u*w,r[7]=l*p+h*x+u*b,r[2]=d*g+f*T+_*C,r[5]=d*m+f*M+_*w,r[8]=d*p+f*x+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,_=t*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qo.makeScale(e,t)),this}rotate(e){return this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new ke;function Nu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cf(){const s=Sr("canvas");return s.style.display="block",s}const Ll={};function cr(s){s in Ll||(Ll[s]=!0,console.warn(s))}function Lf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Pf(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nf(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?zo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Pl=[.64,.33,.3,.6,.15,.06],Nl=[.2126,.7152,.0722],Dl=[.3127,.329],Ol=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ul=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Xt]:{primaries:Pl,whitePoint:Dl,transfer:zo,toXYZ:Ol,fromXYZ:Ul,luminanceCoefficients:Nl,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:Pl,whitePoint:Dl,transfer:ct,toXYZ:Ol,fromXYZ:Ul,luminanceCoefficients:Nl,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});let qi;class Df{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=Sr("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Of=0;class Du{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Yo(i[o].image)):r.push(Yo(i[o]))}else r=Yo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Yo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Df.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uf=0;class Mt extends Bs{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=di,i=di,r=Lt,o=Yn,a=fn,c=Qn,l=Mt.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Mn(),this.name="",this.source=new Du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Su;Mt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(f+1)/2,C=(p+1)/2,w=(h+d)/4,b=(u+g)/4,I=(_+m)/4;return M>x&&M>C?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=w/n,r=b/n):x>C?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=b/r,i=I/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-g)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ff extends Bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Du(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Ff{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ou extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bf extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==_){let m=1-a;const p=c*d+l*f+h*_+u*g,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,p*T);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const x=a*T;if(c=c*m+d*x,l=l*m+f*x,h=h*m+_*x,u=u*m+g*x,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+h*u+c*f-l*d,e[t+1]=c*_+h*d+l*u-a*f,e[t+2]=l*_+h*f+a*d-c*u,e[t+3]=h*_-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new P,Fl=new xi;class qt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Or.subVectors(this.max,Ys),Yi.subVectors(e.a,Ys),Zi.subVectors(e.b,Ys),Ki.subVectors(e.c,Ys),ni.subVectors(Zi,Yi),ii.subVectors(Ki,Zi),Ei.subVectors(Yi,Ki);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ei.z,Ei.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ei.z,0,-Ei.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ei.y,Ei.x,0];return!Ko(t,Yi,Zi,Ki,Or)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,Yi,Zi,Ki,Or))?!1:(Ur.crossVectors(ni,ii),t=[Ur.x,Ur.y,Ur.z],Ko(t,Yi,Zi,Ki,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new P,new P,new P,new P,new P,new P,new P,new P],_n=new P,Dr=new qt,Yi=new P,Zi=new P,Ki=new P,ni=new P,ii=new P,Ei=new P,Ys=new P,Or=new P,Ur=new P,Ti=new P;function Ko(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ti.fromArray(s,r);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Hf=new qt,Zs=new P,jo=new P;class Ln{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(jo)),this.expandByPoint(Zs.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new P,$o=new P,Fr=new P,si=new P,Jo=new P,Br=new P,Qo=new P;class ko{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$o.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),si.copy(this.origin).sub($o);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fr),a=si.dot(this.direction),c=-si.dot(Fr),l=si.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy($o).addScaledVector(Fr,d),f}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,r){Jo.subVectors(t,e),Br.subVectors(n,e),Qo.crossVectors(Jo,Br);let o=this.direction.dot(Qo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const c=a*this.direction.dot(Br.crossVectors(si,Br));if(c<0)return null;const l=a*this.direction.dot(Jo.cross(si));if(l<0||c+l>o)return null;const h=-a*si.dot(Qo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,_,g,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,_,g,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+_*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=_+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,_=l*h,g=l*u;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,_=l*h,g=l*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=_*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*c,f=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gf,e,zf)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ri.crossVectors(n,Qt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ri.crossVectors(n,Qt)),ri.normalize(),Hr.crossVectors(Qt,ri),i[0]=ri.x,i[4]=Hr.x,i[8]=Qt.x,i[1]=ri.y,i[5]=Hr.y,i[9]=Qt.y,i[2]=ri.z,i[6]=Hr.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],T=n[3],M=n[7],x=n[11],C=n[15],w=i[0],b=i[4],I=i[8],A=i[12],S=i[1],L=i[5],H=i[9],B=i[13],q=i[2],Y=i[6],X=i[10],K=i[14],V=i[3],ne=i[7],ue=i[11],me=i[15];return r[0]=o*w+a*S+c*q+l*V,r[4]=o*b+a*L+c*Y+l*ne,r[8]=o*I+a*H+c*X+l*ue,r[12]=o*A+a*B+c*K+l*me,r[1]=h*w+u*S+d*q+f*V,r[5]=h*b+u*L+d*Y+f*ne,r[9]=h*I+u*H+d*X+f*ue,r[13]=h*A+u*B+d*K+f*me,r[2]=_*w+g*S+m*q+p*V,r[6]=_*b+g*L+m*Y+p*ne,r[10]=_*I+g*H+m*X+p*ue,r[14]=_*A+g*B+m*K+p*me,r[3]=T*w+M*S+x*q+C*V,r[7]=T*b+M*L+x*Y+C*ne,r[11]=T*I+M*H+x*X+C*ue,r[15]=T*A+M*B+x*K+C*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+g*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],T=u*m*l-g*d*l+g*c*f-a*m*f-u*c*p+a*d*p,M=_*d*l-h*m*l-_*c*f+o*m*f+h*c*p-o*d*p,x=h*g*l-_*u*l+_*a*f-o*g*f-h*a*p+o*u*p,C=_*u*c-h*g*c-_*a*d+o*g*d+h*a*m-o*u*m,w=t*T+n*M+i*x+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=T*b,e[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*b,e[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*p+n*c*p)*b,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*b,e[4]=M*b,e[5]=(h*m*r-_*d*r+_*i*f-t*m*f-h*i*p+t*d*p)*b,e[6]=(_*c*r-o*m*r-_*i*l+t*m*l+o*i*p-t*c*p)*b,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*b,e[8]=x*b,e[9]=(_*u*r-h*g*r-_*n*f+t*g*f+h*n*p-t*u*p)*b,e[10]=(o*g*r-_*a*r+_*n*l-t*g*l-o*n*p+t*a*p)*b,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*b,e[12]=C*b,e[13]=(h*g*i-_*u*i+_*n*d-t*g*d-h*n*m+t*u*m)*b,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*m-t*a*m)*b,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,_=r*u,g=o*h,m=o*u,p=a*u,T=c*l,M=c*h,x=c*u,C=n.x,w=n.y,b=n.z;return i[0]=(1-(g+p))*C,i[1]=(f+x)*C,i[2]=(_-M)*C,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(m+T)*w,i[7]=0,i[8]=(_+M)*b,i[9]=(m-T)*b,i[10]=(1-(d+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ji.set(i[0],i[1],i[2]).length();const o=ji.set(i[4],i[5],i[6]).length(),a=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],gn.copy(this);const l=1/r,h=1/o,u=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,t.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Zn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===Zn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===No)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Zn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h;let _,g;if(a===Zn)_=(o+r)*u,g=-2*u;else if(a===No)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new P,gn=new He,Gf=new P(0,0,0),zf=new P(1,1,1),ri=new P,Hr=new P,Qt=new P,Bl=new He,Hl=new xi;class In{constructor(e=0,t=0,n=0,i=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kf=0;const Gl=new P,$i=new xi,Bn=new He,Gr=new P,Ks=new P,Vf=new P,Wf=new xi,zl=new P(1,0,0),kl=new P(0,1,0),Vl=new P(0,0,1),Wl={type:"added"},Xf={type:"removed"},Ji={type:"childadded",child:null},ea={type:"childremoved",child:null};class ut extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new P,t=new In,n=new xi,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new ke}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(zl,e)}rotateY(e){return this.rotateOnAxis(kl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,t){return Gl.copy(e).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zl,e)}translateY(e){return this.translateOnAxis(kl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ks,Gr,this.up):Bn.lookAt(Gr,Ks,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Bn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xf),ea.child=e,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,Vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new P(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new P,Hn=new P,ta=new P,Gn=new P,Qi=new P,es=new P,Xl=new P,na=new P,ia=new P,sa=new P,ra=new Qe,oa=new Qe,aa=new Qe;class rn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xn.subVectors(e,t),i.cross(xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xn.subVectors(i,t),Hn.subVectors(n,t),ta.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(Hn),c=xn.dot(ta),l=Hn.dot(Hn),h=Hn.dot(ta),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return ra.setScalar(0),oa.setScalar(0),aa.setScalar(0),ra.fromBufferAttribute(e,t),oa.fromBufferAttribute(e,n),aa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ra,r.x),o.addScaledVector(oa,r.y),o.addScaledVector(aa,r.z),o}static isFrontFacing(e,t,n,i){return xn.subVectors(n,t),Hn.subVectors(e,t),xn.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),xn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Qi.subVectors(i,n),es.subVectors(r,n),na.subVectors(e,n);const c=Qi.dot(na),l=es.dot(na);if(c<=0&&l<=0)return t.copy(n);ia.subVectors(e,i);const h=Qi.dot(ia),u=es.dot(ia);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Qi,o);sa.subVectors(e,r);const f=Qi.dot(sa),_=es.dot(sa);if(_>=0&&f<=_)return t.copy(r);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(es,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Xl.subVectors(r,i),a=(u-h)/(u-h+(f-_)),t.copy(i).addScaledVector(Xl,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(Qi,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function ca(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=qc(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ca(o,r,e+1/3),this.g=ca(o,r,e),this.b=ca(o,r,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=Fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return $e.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ft(Dt.r*255,0,255))*65536+Math.round(Ft(Dt.g*255,0,255))*256+Math.round(Ft(Dt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,r=Dt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Tt){$e.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(zr);const n=pr(oi.h,zr.h,t),i=pr(oi.s,zr.s,t),r=pr(oi.l,zr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Le;Le.NAMES=Fu;let qf=0;class pn extends Bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Mn(),this.name="",this.blending=Hi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ua,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kt extends pn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new P,kr=new Fe;class mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),e}}class Bu extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hu extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yf=0;const ln=new He,la=new ut,ts=new P,en=new qt,js=new qt,bt=new P;class St extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nu(e)?Hu:Bu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return la.lookAt(e),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(en.min,js.min),en.expandByPoint(bt),bt.addVectors(en.max,js.max),en.expandByPoint(bt)):(en.expandByPoint(js.min),en.expandByPoint(js.max))}en.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)bt.fromBufferAttribute(a,l),c&&(ts.fromBufferAttribute(e,l),bt.add(ts)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new P,c[I]=new P;const l=new P,h=new P,u=new P,d=new Fe,f=new Fe,_=new Fe,g=new P,m=new P;function p(I,A,S){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,A),_.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),_.sub(d);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(L),a[I].add(g),a[A].add(g),a[S].add(g),c[I].add(m),c[A].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,A=T.length;I<A;++I){const S=T[I],L=S.start,H=S.count;for(let B=L,q=L+H;B<q;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new P,x=new P,C=new P,w=new P;function b(I){C.fromBufferAttribute(i,I),w.copy(C);const A=a[I];M.copy(A),M.sub(C.multiplyScalar(C.dot(A))).normalize(),x.crossVectors(w,A);const L=x.dot(c[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,L)}for(let I=0,A=T.length;I<A;++I){const S=T[I],L=S.start,H=S.count;for(let B=L,q=L+H;B<q;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let p=0;p<h;p++)d[_++]=l[f++]}return new mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new He,Mi=new ko,Vr=new Ln,Yl=new P,Wr=new P,Xr=new P,qr=new P,ha=new P,Yr=new P,Zl=new P,Zr=new P;class Se extends ut{constructor(e=new St,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ha.fromBufferAttribute(u,e),o?Yr.addScaledVector(ha,h):Yr.addScaledVector(ha.sub(t),h))}t.add(Yr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(Vr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Vr,Yl)===null||Mi.origin.distanceToSquared(Yl)>(e.far-e.near)**2))&&(ql.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(ql),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],T=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,C=M;x<C;x+=3){const w=a.getX(x),b=a.getX(x+1),I=a.getX(x+2);i=Kr(this,p,e,n,l,h,u,w,b,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const T=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=Kr(this,o,e,n,l,h,u,T,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],T=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,C=M;x<C;x+=3){const w=x,b=x+1,I=x+2;i=Kr(this,p,e,n,l,h,u,w,b,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const T=m,M=m+1,x=m+2;i=Kr(this,o,e,n,l,h,u,T,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Zf(s,e,t,n,i,r,o,a){let c;if(e.side===$t?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Jn,a),c===null)return null;Zr.copy(a),Zr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Zr);return l<t.near||l>t.far?null:{distance:l,point:Zr.clone(),object:s}}function Kr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Wr),s.getVertexPosition(c,Xr),s.getVertexPosition(l,qr);const h=Zf(s,e,t,n,Wr,Xr,qr,Zl);if(h){const u=new P;rn.getBarycoord(Zl,Wr,Xr,qr,u),i&&(h.uv=rn.getInterpolatedAttribute(i,a,c,l,u,new Fe)),r&&(h.uv1=rn.getInterpolatedAttribute(r,a,c,l,u,new Fe)),o&&(h.normal=rn.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};rn.getNormal(Wr,Xr,qr,d.normal),h.face=d,h.barycoord=u}return h}class nt extends St{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function _(g,m,p,T,M,x,C,w,b,I,A){const S=x/b,L=C/I,H=x/2,B=C/2,q=w/2,Y=b+1,X=I+1;let K=0,V=0;const ne=new P;for(let ue=0;ue<X;ue++){const me=ue*L-B;for(let Pe=0;Pe<Y;Pe++){const Xe=Pe*S-H;ne[g]=Xe*T,ne[m]=me*M,ne[p]=q,l.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[p]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Pe/b),u.push(1-ue/I),K+=1}}for(let ue=0;ue<I;ue++)for(let me=0;me<b;me++){const Pe=d+me+Y*ue,Xe=d+me+Y*(ue+1),k=d+(me+1)+Y*(ue+1),Q=d+(me+1)+Y*ue;c.push(Pe,Xe,Q),c.push(Xe,k,Q),V+=6}a.addGroup(f,V,A),f+=V,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(s){const e={};for(let t=0;t<s.length;t++){const n=Ns(s[t]);for(const i in n)e[i]=n[i]}return e}function Kf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const jf={clone:Ns,merge:Gt};var $f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends pn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=Kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zu extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new P,Kl=new Fe,jl=new Fe;class zt extends zu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Kl,jl),t.subVectors(jl,Kl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class Qf extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(ns,is,e,t);i.layers=this.layers,this.add(i);const r=new zt(ns,is,e,t);r.layers=this.layers,this.add(r);const o=new zt(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new zt(ns,is,e,t);a.layers=this.layers,this.add(a);const c=new zt(ns,is,e,t);c.layers=this.layers,this.add(c);const l=new zt(ns,is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ku extends Mt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ep extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ku(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new nt(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:mi});r.uniforms.tEquirect.value=t;const o=new Se(i,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Lt),new Qf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const ua=new P,tp=new P,np=new ke;class Ii{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ua.subVectors(n,t).cross(tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||np.getNormalMatrix(e),i=this.coplanarPoint(ua).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Ln,jr=new P;class Yc{constructor(e=new Ii,t=new Ii,n=new Ii,i=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],T=i[13],M=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+_,x+T).normalize(),n[3].setComponents(c-o,d-h,m-_,x-T).normalize(),n[4].setComponents(c-a,d-u,m-g,x-M).normalize(),t===Zn)n[5].setComponents(c+a,d+u,m+g,x+M).normalize();else if(t===No)n[5].setComponents(a,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(jr.x=i.normal.x>0?e.max.x:e.min.x,jr.y=i.normal.y>0?e.max.y:e.min.y,jr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ip(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const g=u[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Vt extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const T=p*d-o;for(let M=0;M<l;M++){const x=M*u-r;_.push(x,-T,0),g.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const M=T+l*p,x=T+l*(p+1),C=T+1+l*(p+1),w=T+1+l*p;f.push(M,x,w),f.push(x,C,w)}this.setIndex(f),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.widthSegments,e.heightSegments)}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gp=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ip=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,nm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,im=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,km=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
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
}`,h_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u_=`#define DISTANCE
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
}`,d_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`uniform float scale;
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
}`,__=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,x_=`uniform vec3 diffuse;
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
}`,S_=`#define LAMBERT
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
}`,E_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,T_=`#define MATCAP
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
}`,M_=`#define MATCAP
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
}`,A_=`#define NORMAL
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
}`,v_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y_=`#define PHONG
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
}`,b_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,R_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,I_=`#define TOON
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
}`,C_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,L_=`uniform float size;
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
}`,P_=`uniform vec3 diffuse;
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
}`,N_=`#include <common>
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
}`,D_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,O_=`uniform float rotation;
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
}`,U_=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:op,alphamap_pars_fragment:ap,alphatest_fragment:cp,alphatest_pars_fragment:lp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:_p,iridescence_fragment:gp,bumpmap_pars_fragment:xp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Mp,color_fragment:Ap,color_pars_fragment:vp,color_pars_vertex:yp,color_vertex:bp,common:Rp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Cp,displacementmap_vertex:Lp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Np,colorspace_fragment:Dp,colorspace_pars_fragment:Op,envmap_fragment:Up,envmap_common_pars_fragment:Fp,envmap_pars_fragment:Bp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:jp,envmap_vertex:Gp,fog_vertex:zp,fog_pars_vertex:kp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:Zp,lights_pars_begin:Kp,lights_toon_fragment:$p,lights_toon_pars_fragment:Jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:em,lights_physical_fragment:tm,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:lm,map_fragment:hm,map_pars_fragment:um,map_particle_fragment:dm,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:_m,morphcolor_vertex:gm,morphnormal_vertex:xm,morphtarget_pars_vertex:Sm,morphtarget_vertex:Em,normal_fragment_begin:Tm,normal_fragment_maps:Mm,normal_pars_fragment:Am,normal_pars_vertex:vm,normal_vertex:ym,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Cm,opaque_fragment:Lm,packing:Pm,premultiplied_alpha_fragment:Nm,project_vertex:Dm,dithering_fragment:Om,dithering_pars_fragment:Um,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Gm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Vm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:Zm,tonemapping_fragment:Km,tonemapping_pars_fragment:jm,transmission_fragment:$m,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:e_,uv_vertex:t_,worldpos_vertex:n_,background_vert:i_,background_frag:s_,backgroundCube_vert:r_,backgroundCube_frag:o_,cube_vert:a_,cube_frag:c_,depth_vert:l_,depth_frag:h_,distanceRGBA_vert:u_,distanceRGBA_frag:d_,equirect_vert:f_,equirect_frag:p_,linedashed_vert:m_,linedashed_frag:__,meshbasic_vert:g_,meshbasic_frag:x_,meshlambert_vert:S_,meshlambert_frag:E_,meshmatcap_vert:T_,meshmatcap_frag:M_,meshnormal_vert:A_,meshnormal_frag:v_,meshphong_vert:y_,meshphong_frag:b_,meshphysical_vert:R_,meshphysical_frag:w_,meshtoon_vert:I_,meshtoon_frag:C_,points_vert:L_,points_frag:P_,shadow_vert:N_,shadow_frag:D_,sprite_vert:O_,sprite_frag:U_},se={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Rn={basic:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Le(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Gt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Gt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Le(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Gt([se.points,se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Gt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Gt([se.common,se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Gt([se.sprite,se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Gt([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Gt([se.lights,se.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Rn.physical={uniforms:Gt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const $r={r:0,b:0,g:0},vi=new In,F_=new He;function B_(s,e,t,n,i,r,o){const a=new Le(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function g(T){let M=!1;const x=_(T);x===null?p(a,c):x&&x.isColor&&(p(x,1),M=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,M){const x=_(M);x&&(x.isCubeTexture||x.mapping===Go)?(h===void 0&&(h=new Se(new nt(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ns(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),vi.copy(M.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(F_.makeRotationFromEuler(vi)),h.material.toneMapped=$e.getTransfer(x.colorSpace)!==ct,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Se(new Vt(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ns(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=$e.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,M){T.getRGB($r,Gu(s)),n.buffers.color.setClear($r.r,$r.g,$r.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:g,addToRenderList:m}}function H_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,L,H,B,q){let Y=!1;const X=u(B,H,L);r!==X&&(r=X,l(r.object)),Y=f(S,B,H,q),Y&&_(S,B,H,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(S,L,H,B),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,L,H){const B=H.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let Y=q[L.id];Y===void 0&&(Y={},q[L.id]=Y);let X=Y[B];return X===void 0&&(X=d(c()),Y[B]=X),X}function d(S){const L=[],H=[],B=[];for(let q=0;q<t;q++)L[q]=0,H[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,L,H,B){const q=r.attributes,Y=L.attributes;let X=0;const K=H.getAttributes();for(const V in K)if(K[V].location>=0){const ue=q[V];let me=Y[V];if(me===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function _(S,L,H,B){const q={},Y=L.attributes;let X=0;const K=H.getAttributes();for(const V in K)if(K[V].location>=0){let ue=Y[V];ue===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor));const me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),q[V]=me,X++}r.attributes=q,r.attributesNum=X,r.index=B}function g(){const S=r.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const H=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;H[S]=1,B[S]===0&&(s.enableVertexAttribArray(S),B[S]=1),q[S]!==L&&(s.vertexAttribDivisor(S,L),q[S]=L)}function T(){const S=r.newAttributes,L=r.enabledAttributes;for(let H=0,B=L.length;H<B;H++)L[H]!==S[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function M(S,L,H,B,q,Y,X){X===!0?s.vertexAttribIPointer(S,L,H,q,Y):s.vertexAttribPointer(S,L,H,B,q,Y)}function x(S,L,H,B){g();const q=B.attributes,Y=H.getAttributes(),X=L.defaultAttributeValues;for(const K in Y){const V=Y[K];if(V.location>=0){let ne=q[K];if(ne===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const ue=ne.normalized,me=ne.itemSize,Pe=e.get(ne);if(Pe===void 0)continue;const Xe=Pe.buffer,k=Pe.type,Q=Pe.bytesPerElement,xe=k===s.INT||k===s.UNSIGNED_INT||ne.gpuType===Hc;if(ne.isInterleavedBufferAttribute){const re=ne.data,Ie=re.stride,Ne=ne.offset;if(re.isInstancedInterleavedBuffer){for(let Be=0;Be<V.locationSize;Be++)p(V.location+Be,re.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Be=0;Be<V.locationSize;Be++)m(V.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let Be=0;Be<V.locationSize;Be++)M(V.location+Be,me/V.locationSize,k,ue,Ie*Q,(Ne+me/V.locationSize*Be)*Q,xe)}else{if(ne.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)p(V.location+re,ne.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let re=0;re<V.locationSize;re++)M(V.location+re,me/V.locationSize,k,ue,me*Q,me/V.locationSize*re*Q,xe)}}else if(X!==void 0){const ue=X[K];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(V.location,ue);break;case 3:s.vertexAttrib3fv(V.location,ue);break;case 4:s.vertexAttrib4fv(V.location,ue);break;default:s.vertexAttrib1fv(V.location,ue)}}}}T()}function C(){I();for(const S in n){const L=n[S];for(const H in L){const B=L[H];for(const q in B)h(B[q].object),delete B[q];delete L[H]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const H in L){const B=L[H];for(const q in B)h(B[q].object),delete B[q];delete L[H]}delete n[S.id]}function b(S){for(const L in n){const H=n[L];if(H[S.id]===void 0)continue;const B=H[S.id];for(const q in B)h(B[q].object),delete B[q];delete H[S.id]}}function I(){A(),o=!0,r!==i&&(r=i,l(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function G_(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function z_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==fn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const I=b===Ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Qn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Tn&&!I)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:C,maxSamples:w}}function k_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ii,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,M=T*4;let x=p.clippingState||null;c.value=x,x=h(_,d,M,f);for(let C=0;C!==M;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=f+g*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==g;++M,x+=4)o.copy(u[M]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function V_(s){let e=new WeakMap;function t(o,a){return a===Wa?o.mapping=Rs:a===Xa&&(o.mapping=ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wa||a===Xa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ep(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Zc extends zu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,$l=[.125,.215,.35,.446,.526,.582],Fi=20,da=new Zc,Jl=new Le;let fa=null,pa=0,ma=0,_a=!1;const Ci=(1+Math.sqrt(5))/2,ss=1/Ci,Ql=[new P(-Ci,ss,0),new P(Ci,ss,0),new P(-ss,0,Ci),new P(ss,0,Ci),new P(0,Ci,-ss),new P(0,Ci,ss),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fa,pa,ma),this._renderer.xr.enabled=_a,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Ar,format:fn,colorSpace:Xt,depthBuffer:!1},i=th(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W_(r)),this._blurMaterial=X_(r,e,t)}return i}_compileMaterial(e){const t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,da)}_sceneToCubeUV(e,t,n,i){const a=new zt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jl),h.toneMapping=_i,h.autoClear=!1;const f=new kt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new Se(new nt,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Jl),g=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;Jr(i,T*M,p>2?M:0,M,M),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Rs||e.mapping===ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Jr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ql[(i-r-1)%Ql.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Se(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const p=[];let T=0;for(let b=0;b<Fi;++b){const I=b/g,A=Math.exp(-I*I/2);p.push(A),b===0?T+=A:b<m&&(T+=2*A)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const x=this._sizeLods[i],C=3*x*(i>M-fs?i-M+fs:0),w=4*(this._cubeSize-x);Jr(t,C,w,3*x,2*x),c.setRenderTarget(t),c.render(u,da)}}function W_(s){const e=[],t=[],n=[];let i=s;const r=s-fs+1+$l.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-fs?c=$l[o-s+fs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,T=new Float32Array(g*_*f),M=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,I=w>2?0:-1,A=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];T.set(A,g*_*w),M.set(d,m*_*w);const S=[w,w,w,w,w,w];x.set(S,p*_*w)}const C=new St;C.setAttribute("position",new mt(T,g)),C.setAttribute("uv",new mt(M,m)),C.setAttribute("faceIndex",new mt(x,p)),e.push(C),i>fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function th(s,e,t){const n=new zi(s,e,t);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function X_(s,e,t){const n=new Float32Array(Fi),i=new P(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function nh(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ih(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function q_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Wa||c===Xa,h=c===Rs||c===ws;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new eh(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new eh(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Y_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&cr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Z_(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const T=f.array;g=f.version;for(let M=0,x=T.length;M<x;M+=3){const C=T[M+0],w=T[M+1],b=T[M+2];d.push(C,w,w,b,b,C)}}else if(_!==void 0){const T=_.array;g=_.version;for(let M=0,x=T.length/3-1;M<x;M+=3){const C=M+0,w=M+1,b=M+2;d.push(C,w,w,b,b,C)}}else return;const m=new(Nu(d)?Hu:Bu)(d,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function K_(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),t.update(f,n,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function u(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let T=0;T<_;T++)p+=f[T]*g[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function j_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $_(s,e,t){const n=new WeakMap,i=new Qe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*w*4*u),I=new Ou(b,C,w,u);I.type=Tn,I.needsUpdate=!0;const A=x*4;for(let L=0;L<u;L++){const H=p[L],B=T[L],q=M[L],Y=C*w*4*L;for(let X=0;X<H.count;X++){const K=X*A;_===!0&&(i.fromBufferAttribute(H,X),b[Y+K+0]=i.x,b[Y+K+1]=i.y,b[Y+K+2]=i.z,b[Y+K+3]=0),g===!0&&(i.fromBufferAttribute(B,X),b[Y+K+4]=i.x,b[Y+K+5]=i.y,b[Y+K+6]=i.z,b[Y+K+7]=0),m===!0&&(i.fromBufferAttribute(q,X),b[Y+K+8]=i.x,b[Y+K+9]=i.y,b[Y+K+10]=i.z,b[Y+K+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Fe(C,w)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function J_(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Wu extends Mt{constructor(e,t,n,i,r,o,a,c,l,h=Ss){if(h!==Ss&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=Gi),n===void 0&&h===Ls&&(n=Cs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xu=new Mt,sh=new Wu(1,1),qu=new Ou,Yu=new Bf,Zu=new ku,rh=[],oh=[],ah=new Float32Array(16),ch=new Float32Array(9),lh=new Float32Array(4);function Hs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=rh[i];if(r===void 0&&(r=new Float32Array(i),rh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function At(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Vo(s,e){let t=oh[e];t===void 0&&(t=new Int32Array(e),oh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Q_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function ig(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(At(t,n))return;lh.set(n),s.uniformMatrix2fv(this.addr,!1,lh),vt(t,n)}}function sg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(At(t,n))return;ch.set(n),s.uniformMatrix3fv(this.addr,!1,ch),vt(t,n)}}function rg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(At(t,n))return;ah.set(n),s.uniformMatrix4fv(this.addr,!1,ah),vt(t,n)}}function og(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function hg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function pg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(sh.compareFunction=Pu,r=sh):r=Xu,t.setTexture2D(e||r,i)}function mg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yu,i)}function _g(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zu,i)}function gg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qu,i)}function xg(s){switch(s){case 5126:return Q_;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return og;case 35667:case 35671:return ag;case 35668:case 35672:return cg;case 35669:case 35673:return lg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return gg}}function Sg(s,e){s.uniform1fv(this.addr,e)}function Eg(s,e){const t=Hs(e,this.size,2);s.uniform2fv(this.addr,t)}function Tg(s,e){const t=Hs(e,this.size,3);s.uniform3fv(this.addr,t)}function Mg(s,e){const t=Hs(e,this.size,4);s.uniform4fv(this.addr,t)}function Ag(s,e){const t=Hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vg(s,e){const t=Hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yg(s,e){const t=Hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bg(s,e){s.uniform1iv(this.addr,e)}function Rg(s,e){s.uniform2iv(this.addr,e)}function wg(s,e){s.uniform3iv(this.addr,e)}function Ig(s,e){s.uniform4iv(this.addr,e)}function Cg(s,e){s.uniform1uiv(this.addr,e)}function Lg(s,e){s.uniform2uiv(this.addr,e)}function Pg(s,e){s.uniform3uiv(this.addr,e)}function Ng(s,e){s.uniform4uiv(this.addr,e)}function Dg(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);At(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Xu,r[o])}function Og(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);At(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Yu,r[o])}function Ug(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);At(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Zu,r[o])}function Fg(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);At(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||qu,r[o])}function Bg(s){switch(s){case 5126:return Sg;case 35664:return Eg;case 35665:return Tg;case 35666:return Mg;case 35674:return Ag;case 35675:return vg;case 35676:return yg;case 5124:case 35670:return bg;case 35667:case 35671:return Rg;case 35668:case 35672:return wg;case 35669:case 35673:return Ig;case 5125:return Cg;case 36294:return Lg;case 36295:return Pg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}class Hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xg(t.type)}}class Gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bg(t.type)}}class zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function hh(s,e){s.seq.push(e),s.map[e.id]=e}function kg(s,e,t){const n=s.name,i=n.length;for(ga.lastIndex=0;;){const r=ga.exec(n),o=ga.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){hh(t,l===void 0?new Hg(a,s,e):new Gg(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new zg(a),hh(t,u)),t=u}}}class vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);kg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function uh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Vg=37297;let Wg=0;function Xg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const dh=new ke;function qg(s){$e._getMatrix(dh,$e.workingColorSpace,s);const e=`mat3( ${dh.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case zo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Xg(s.getShaderSource(e),o)}else return i}function Yg(s,e){const t=qg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zg(s,e){let t;switch(e){case Zd:t="Linear";break;case Kd:t="Reinhard";break;case jd:t="Cineon";break;case xu:t="ACESFilmic";break;case Jd:t="AgX";break;case Qd:t="Neutral";break;case $d:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new P;function Kg(){$e.getLuminanceCoefficients(Qr);const s=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function $g(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function lr(s){return s!==""}function ph(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(s){return s.replace(Qg,t0)}const e0=new Map;function t0(s,e){let t=We[e];if(t===void 0){const n=e0.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}const n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(s){return s.replace(n0,i0)}function i0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function r0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rs:case ws:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function a0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gu:e="ENVMAP_BLENDING_MULTIPLY";break;case qd:e="ENVMAP_BLENDING_MIX";break;case Yd:e="ENVMAP_BLENDING_ADD";break}return e}function c0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function l0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=s0(t),l=r0(t),h=o0(t),u=a0(t),d=c0(t),f=jg(t),_=$g(r),g=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(m=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?We.tonemapping_pars_fragment:"",t.toneMapping!==_i?Zg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Yg("linearToOutputTexel",t.outputColorSpace),Kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=Ec(o),o=ph(o,t),o=mh(o,t),a=Ec(a),a=ph(a,t),a=mh(a,t),o=_h(o),a=_h(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+o,x=T+p+a,C=uh(i,i.VERTEX_SHADER,M),w=uh(i,i.FRAGMENT_SHADER,x);i.attachShader(g,C),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(L){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(C).trim(),q=i.getShaderInfoLog(w).trim();let Y=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,C,w);else{const K=fh(i,C,"vertex"),V=fh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+K+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||q==="")&&(X=!1);X&&(L.diagnostics={runnable:Y,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(C),i.deleteShader(w),I=new vo(i,g),A=Jg(i,g)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,Vg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=w,this}let h0=0;class u0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d0(e),t.set(e,n)),n}}class d0{constructor(e){this.id=h0++,this.code=e,this.usedTimes=0}}function f0(s,e,t,n,i,r,o){const a=new Uu,c=new u0,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(A){return l.add(A),A===0?"uv":`uv${A}`}function m(A,S,L,H,B){const q=H.fog,Y=B.geometry,X=A.isMeshStandardMaterial?H.environment:null,K=(A.isMeshStandardMaterial?t:e).get(A.envMap||X),V=K&&K.mapping===Go?K.image.height:null,ne=_[A.type];A.precision!==null&&(f=i.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));const ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,me=ue!==void 0?ue.length:0;let Pe=0;Y.morphAttributes.position!==void 0&&(Pe=1),Y.morphAttributes.normal!==void 0&&(Pe=2),Y.morphAttributes.color!==void 0&&(Pe=3);let Xe,k,Q,xe;if(ne){const Ue=Rn[ne];Xe=Ue.vertexShader,k=Ue.fragmentShader}else Xe=A.vertexShader,k=A.fragmentShader,c.update(A),Q=c.getVertexShaderID(A),xe=c.getFragmentShaderID(A);const re=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),Ne=B.isInstancedMesh===!0,Be=B.isBatchedMesh===!0,ot=!!A.map,je=!!A.matcap,pt=!!K,O=!!A.aoMap,Pt=!!A.lightMap,Ve=!!A.bumpMap,Ge=!!A.normalMap,be=!!A.displacementMap,at=!!A.emissiveMap,ye=!!A.metalnessMap,R=!!A.roughnessMap,E=A.anisotropy>0,F=A.clearcoat>0,j=A.dispersion>0,J=A.iridescence>0,Z=A.sheen>0,Ee=A.transmission>0,oe=E&&!!A.anisotropyMap,fe=F&&!!A.clearcoatMap,Ke=F&&!!A.clearcoatNormalMap,ee=F&&!!A.clearcoatRoughnessMap,pe=J&&!!A.iridescenceMap,Re=J&&!!A.iridescenceThicknessMap,Ce=Z&&!!A.sheenColorMap,_e=Z&&!!A.sheenRoughnessMap,qe=!!A.specularMap,Oe=!!A.specularColorMap,it=!!A.specularIntensityMap,N=Ee&&!!A.transmissionMap,ie=Ee&&!!A.thicknessMap,W=!!A.gradientMap,$=!!A.alphaMap,ce=A.alphaTest>0,le=!!A.alphaHash,ae=!!A.extensions;let we=_i;A.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(we=s.toneMapping);const Ye={shaderID:ne,shaderType:A.type,shaderName:A.name,vertexShader:Xe,fragmentShader:k,defines:A.defines,customVertexShaderID:Q,customFragmentShaderID:xe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:Be,batchingColor:Be&&B._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&B.instanceColor!==null,instancingMorph:Ne&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Xt,alphaToCoverage:!!A.alphaToCoverage,map:ot,matcap:je,envMap:pt,envMapMode:pt&&K.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:Pt,bumpMap:Ve,normalMap:Ge,displacementMap:d&&be,emissiveMap:at,normalMapObjectSpace:Ge&&A.normalMapType===of,normalMapTangentSpace:Ge&&A.normalMapType===Lu,metalnessMap:ye,roughnessMap:R,anisotropy:E,anisotropyMap:oe,clearcoat:F,clearcoatMap:fe,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ee,dispersion:j,iridescence:J,iridescenceMap:pe,iridescenceThicknessMap:Re,sheen:Z,sheenColorMap:Ce,sheenRoughnessMap:_e,specularMap:qe,specularColorMap:Oe,specularIntensityMap:it,transmission:Ee,transmissionMap:N,thicknessMap:ie,gradientMap:W,opaque:A.transparent===!1&&A.blending===Hi&&A.alphaToCoverage===!1,alphaMap:$,alphaTest:ce,alphaHash:le,combine:A.combine,mapUv:ot&&g(A.map.channel),aoMapUv:O&&g(A.aoMap.channel),lightMapUv:Pt&&g(A.lightMap.channel),bumpMapUv:Ve&&g(A.bumpMap.channel),normalMapUv:Ge&&g(A.normalMap.channel),displacementMapUv:be&&g(A.displacementMap.channel),emissiveMapUv:at&&g(A.emissiveMap.channel),metalnessMapUv:ye&&g(A.metalnessMap.channel),roughnessMapUv:R&&g(A.roughnessMap.channel),anisotropyMapUv:oe&&g(A.anisotropyMap.channel),clearcoatMapUv:fe&&g(A.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&g(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(A.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(A.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(A.sheenRoughnessMap.channel),specularMapUv:qe&&g(A.specularMap.channel),specularColorMapUv:Oe&&g(A.specularColorMap.channel),specularIntensityMapUv:it&&g(A.specularIntensityMap.channel),transmissionMapUv:N&&g(A.transmissionMap.channel),thicknessMapUv:ie&&g(A.thicknessMap.channel),alphaMapUv:$&&g(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ge||E),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(ot||$),fog:!!q,useFog:A.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:ot&&A.map.isVideoTexture===!0&&$e.getTransfer(A.map.colorSpace)===ct,decodeVideoTextureEmissive:at&&A.emissiveMap.isVideoTexture===!0&&$e.getTransfer(A.emissiveMap.colorSpace)===ct,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Rt,flipSided:A.side===$t,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ae&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&A.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function p(A){const S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(const L in A.defines)S.push(L),S.push(A.defines[L]);return A.isRawShaderMaterial===!1&&(T(S,A),M(S,A),S.push(s.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function T(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function M(A,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),A.push(a.mask)}function x(A){const S=_[A.type];let L;if(S){const H=Rn[S];L=jf.clone(H.uniforms)}else L=A.uniforms;return L}function C(A,S){let L;for(let H=0,B=h.length;H<B;H++){const q=h[H];if(q.cacheKey===S){L=q,++L.usedTimes;break}}return L===void 0&&(L=new l0(s,S,A,r),h.push(L)),L}function w(A){if(--A.usedTimes===0){const S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function b(A){c.remove(A)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:I}}function p0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function m0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||m0),n.length>1&&n.sort(d||xh),i.length>1&&i.sort(d||xh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function _0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Sh,s.set(n,[o])):i>=r.length?(o=new Sh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function g0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function x0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let S0=0;function E0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function T0(s){const e=new g0,t=x0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new He,o=new He;function a(l){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,T=0,M=0,x=0,C=0,w=0,b=0;l.sort(E0);for(let A=0,S=l.length;A<S;A++){const L=l[A],H=L.color,B=L.intensity,q=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*B,u+=H.g*B,d+=H.b*B;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],B);b++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,V=t.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=L.shadow.matrix,T++}n.directional[f]=X,f++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(H).multiplyScalar(B),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[g]=X;const K=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,K.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[g]=K.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=Y,x++}g++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(H).multiplyScalar(B),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const K=L.shadow,V=t.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=L.shadow.matrix,M++}n.point[_]=X,_++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(B),X.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==T||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==C||I.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,I.directionalLength=f,I.pointLength=_,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=T,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=C,I.numLightProbes=b,n.version=S0++)}function c(l,h){let u=0,d=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const M=l[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Eh(s){const e=new T0(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function M0(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Eh(s),e.set(i,[a])):r>=o.length?(a=new Eh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class A0 extends pn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v0 extends pn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R0(s,e,t){let n=new Yc;const i=new Fe,r=new Fe,o=new Qe,a=new A0({depthPacking:rf}),c=new v0,l={},h=t.maxTextureSize,u={[Jn]:$t,[$t]:Jn,[Rt]:Rt},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:y0,fragmentShader:b0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new St;_.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Se(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let p=this.type;this.render=function(w,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const A=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),H=s.state;H.setBlending(mi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=p!==kn&&this.type===kn,q=p===kn&&this.type!==kn;for(let Y=0,X=w.length;Y<X;Y++){const K=w[Y],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ne=V.getFrameExtents();if(i.multiply(ne),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,V.mapSize.y=r.y)),V.map===null||B===!0||q===!0){const me=this.type!==kn?{minFilter:Wt,magFilter:Wt}:{};V.map!==null&&V.map.dispose(),V.map=new zi(i.x,i.y,me),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ue=V.getViewportCount();for(let me=0;me<ue;me++){const Pe=V.getViewport(me);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),H.viewport(o),V.updateMatrices(K,me),n=V.getFrustum(),x(b,I,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===kn&&T(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(A,S,L)};function T(w,b){const I=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zi(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(b,null,I,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(b,null,I,f,g,null)}function M(w,b,I,A){let S=null;const L=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=I.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=S.uuid,B=b.uuid;let q=l[H];q===void 0&&(q={},l[H]=q);let Y=q[B];Y===void 0&&(Y=S.clone(),q[B]=Y,b.addEventListener("dispose",C)),S=Y}if(S.visible=b.visible,S.wireframe=b.wireframe,A===kn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:u[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=s.properties.get(S);H.light=I}return S}function x(w,b,I,A,S){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const B=e.update(w),q=w.material;if(Array.isArray(q)){const Y=B.groups;for(let X=0,K=Y.length;X<K;X++){const V=Y[X],ne=q[V.materialIndex];if(ne&&ne.visible){const ue=M(w,ne,A,S);w.onBeforeShadow(s,w,b,I,B,ue,V),s.renderBufferDirect(I,null,B,ue,w,V),w.onAfterShadow(s,w,b,I,B,ue,V)}}}else if(q.visible){const Y=M(w,q,A,S);w.onBeforeShadow(s,w,b,I,B,Y,null),s.renderBufferDirect(I,null,B,Y,w,null),w.onAfterShadow(s,w,b,I,B,Y,null)}}const H=w.children;for(let B=0,q=H.length;B<q;B++)x(H[B],b,I,A,S)}function C(w){w.target.removeEventListener("dispose",C);for(const I in l){const A=l[I],S=w.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}const w0={[Fa]:Ba,[Ha]:ka,[Ga]:Va,[bs]:za,[Ba]:Fa,[ka]:Ha,[Va]:Ga,[za]:bs};function I0(s,e){function t(){let N=!1;const ie=new Qe;let W=null;const $=new Qe(0,0,0,0);return{setMask:function(ce){W!==ce&&!N&&(s.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){N=ce},setClear:function(ce,le,ae,we,Ye){Ye===!0&&(ce*=we,le*=we,ae*=we),ie.set(ce,le,ae,we),$.equals(ie)===!1&&(s.clearColor(ce,le,ae,we),$.copy(ie))},reset:function(){N=!1,W=null,$.set(-1,0,0,0)}}}function n(){let N=!1,ie=!1,W=null,$=null,ce=null;return{setReversed:function(le){if(ie!==le){const ae=e.get("EXT_clip_control");ie?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);const we=ce;ce=null,this.setClear(we)}ie=le},getReversed:function(){return ie},setTest:function(le){le?re(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(le){W!==le&&!N&&(s.depthMask(le),W=le)},setFunc:function(le){if(ie&&(le=w0[le]),$!==le){switch(le){case Fa:s.depthFunc(s.NEVER);break;case Ba:s.depthFunc(s.ALWAYS);break;case Ha:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Ga:s.depthFunc(s.EQUAL);break;case za:s.depthFunc(s.GEQUAL);break;case ka:s.depthFunc(s.GREATER);break;case Va:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=le}},setLocked:function(le){N=le},setClear:function(le){ce!==le&&(ie&&(le=1-le),s.clearDepth(le),ce=le)},reset:function(){N=!1,W=null,$=null,ce=null,ie=!1}}}function i(){let N=!1,ie=null,W=null,$=null,ce=null,le=null,ae=null,we=null,Ye=null;return{setTest:function(Ue){N||(Ue?re(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(Ue){ie!==Ue&&!N&&(s.stencilMask(Ue),ie=Ue)},setFunc:function(Ue,yt,an){(W!==Ue||$!==yt||ce!==an)&&(s.stencilFunc(Ue,yt,an),W=Ue,$=yt,ce=an)},setOp:function(Ue,yt,an){(le!==Ue||ae!==yt||we!==an)&&(s.stencilOp(Ue,yt,an),le=Ue,ae=yt,we=an)},setLocked:function(Ue){N=Ue},setClear:function(Ue){Ye!==Ue&&(s.clearStencil(Ue),Ye=Ue)},reset:function(){N=!1,ie=null,W=null,$=null,ce=null,le=null,ae=null,we=null,Ye=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,T=null,M=null,x=null,C=null,w=null,b=new Le(0,0,0),I=0,A=!1,S=null,L=null,H=null,B=null,q=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=K>=2);let ne=null,ue={};const me=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),Xe=new Qe().fromArray(me),k=new Qe().fromArray(Pe);function Q(N,ie,W,$){const ce=new Uint8Array(4),le=s.createTexture();s.bindTexture(N,le),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<W;ae++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(ie+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return le}const xe={};xe[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(s.DEPTH_TEST),o.setFunc(bs),Ve(!1),Ge(Tl),re(s.CULL_FACE),O(mi);function re(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Ie(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ne(N,ie){return u[N]!==ie?(s.bindFramebuffer(N,ie),u[N]=ie,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ie),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Be(N,ie){let W=f,$=!1;if(N){W=d.get(ie),W===void 0&&(W=[],d.set(ie,W));const ce=N.textures;if(W.length!==ce.length||W[0]!==s.COLOR_ATTACHMENT0){for(let le=0,ae=ce.length;le<ae;le++)W[le]=s.COLOR_ATTACHMENT0+le;W.length=ce.length,$=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,$=!0);$&&s.drawBuffers(W)}function ot(N){return _!==N?(s.useProgram(N),_=N,!0):!1}const je={[Ui]:s.FUNC_ADD,[Id]:s.FUNC_SUBTRACT,[Cd]:s.FUNC_REVERSE_SUBTRACT};je[Ld]=s.MIN,je[Pd]=s.MAX;const pt={[Nd]:s.ZERO,[Dd]:s.ONE,[Od]:s.SRC_COLOR,[Oa]:s.SRC_ALPHA,[zd]:s.SRC_ALPHA_SATURATE,[Hd]:s.DST_COLOR,[Fd]:s.DST_ALPHA,[Ud]:s.ONE_MINUS_SRC_COLOR,[Ua]:s.ONE_MINUS_SRC_ALPHA,[Gd]:s.ONE_MINUS_DST_COLOR,[Bd]:s.ONE_MINUS_DST_ALPHA,[kd]:s.CONSTANT_COLOR,[Vd]:s.ONE_MINUS_CONSTANT_COLOR,[Wd]:s.CONSTANT_ALPHA,[Xd]:s.ONE_MINUS_CONSTANT_ALPHA};function O(N,ie,W,$,ce,le,ae,we,Ye,Ue){if(N===mi){g===!0&&(Ie(s.BLEND),g=!1);return}if(g===!1&&(re(s.BLEND),g=!0),N!==wd){if(N!==m||Ue!==A){if((p!==Ui||x!==Ui)&&(s.blendEquation(s.FUNC_ADD),p=Ui,x=Ui),Ue)switch(N){case Hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gi:s.blendFunc(s.ONE,s.ONE);break;case Ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Al:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Al:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,M=null,C=null,w=null,b.set(0,0,0),I=0,m=N,A=Ue}return}ce=ce||ie,le=le||W,ae=ae||$,(ie!==p||ce!==x)&&(s.blendEquationSeparate(je[ie],je[ce]),p=ie,x=ce),(W!==T||$!==M||le!==C||ae!==w)&&(s.blendFuncSeparate(pt[W],pt[$],pt[le],pt[ae]),T=W,M=$,C=le,w=ae),(we.equals(b)===!1||Ye!==I)&&(s.blendColor(we.r,we.g,we.b,Ye),b.copy(we),I=Ye),m=N,A=!1}function Pt(N,ie){N.side===Rt?Ie(s.CULL_FACE):re(s.CULL_FACE);let W=N.side===$t;ie&&(W=!W),Ve(W),N.blending===Hi&&N.transparent===!1?O(mi):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const $=N.stencilWrite;a.setTest($),$&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),at(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(N){S!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),S=N)}function Ge(N){N!==bd?(re(s.CULL_FACE),N!==L&&(N===Tl?s.cullFace(s.BACK):N===Rd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),L=N}function be(N){N!==H&&(X&&s.lineWidth(N),H=N)}function at(N,ie,W){N?(re(s.POLYGON_OFFSET_FILL),(B!==ie||q!==W)&&(s.polygonOffset(ie,W),B=ie,q=W)):Ie(s.POLYGON_OFFSET_FILL)}function ye(N){N?re(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function R(N){N===void 0&&(N=s.TEXTURE0+Y-1),ne!==N&&(s.activeTexture(N),ne=N)}function E(N,ie,W){W===void 0&&(ne===null?W=s.TEXTURE0+Y-1:W=ne);let $=ue[W];$===void 0&&($={type:void 0,texture:void 0},ue[W]=$),($.type!==N||$.texture!==ie)&&(ne!==W&&(s.activeTexture(W),ne=W),s.bindTexture(N,ie||xe[N]),$.type=N,$.texture=ie)}function F(){const N=ue[ne];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(N){Xe.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Xe.copy(N))}function _e(N){k.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),k.copy(N))}function qe(N,ie){let W=l.get(ie);W===void 0&&(W=new WeakMap,l.set(ie,W));let $=W.get(N);$===void 0&&($=s.getUniformBlockIndex(ie,N.name),W.set(N,$))}function Oe(N,ie){const $=l.get(ie).get(N);c.get(ie)!==$&&(s.uniformBlockBinding(ie,$,N.__bindingPointIndex),c.set(ie,$))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ne=null,ue={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,T=null,M=null,x=null,C=null,w=null,b=new Le(0,0,0),I=0,A=!1,S=null,L=null,H=null,B=null,q=null,Xe.set(0,0,s.canvas.width,s.canvas.height),k.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Ie,bindFramebuffer:Ne,drawBuffers:Be,useProgram:ot,setBlending:O,setMaterial:Pt,setFlipSided:Ve,setCullFace:Ge,setLineWidth:be,setPolygonOffset:at,setScissorTest:ye,activeTexture:R,bindTexture:E,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:pe,texImage3D:Re,updateUBOMapping:qe,uniformBlockBinding:Oe,texStorage2D:Ke,texStorage3D:ee,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Ce,viewport:_e,reset:it}}function Th(s,e,t,n){const i=C0(n);switch(t){case vu:return s*e;case bu:return s*e;case Ru:return s*e*2;case kc:return s*e/i.components*i.byteLength;case Vc:return s*e/i.components*i.byteLength;case wu:return s*e*2/i.components*i.byteLength;case Wc:return s*e*2/i.components*i.byteLength;case yu:return s*e*3/i.components*i.byteLength;case fn:return s*e*4/i.components*i.byteLength;case Xc:return s*e*4/i.components*i.byteLength;case So:case Eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case To:case Mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ya:case Ka:return Math.max(s,16)*Math.max(e,8)/4;case qa:case Za:return Math.max(s,8)*Math.max(e,8)/2;case ja:case $a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case rc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case dc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ao:case fc:case pc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Iu:case mc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _c:case gc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C0(s){switch(s){case Qn:case Tu:return{byteLength:1,components:1};case _r:case Mu:case Ar:return{byteLength:2,components:1};case Gc:case zc:return{byteLength:2,components:4};case Gi:case Hc:case Tn:return{byteLength:4,components:1};case Au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function L0(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return f?new OffscreenCanvas(R,E):Sr("canvas")}function g(R,E,F){let j=1;const J=ye(R);if((J.width>F||J.height>F)&&(j=F/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(j*J.width),Ee=Math.floor(j*J.height);u===void 0&&(u=_(Z,Ee));const oe=E?_(Z,Ee):u;return oe.width=Z,oe.height=Ee,oe.getContext("2d").drawImage(R,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+Ee+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,E,F,j,J=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=E;if(E===s.RED&&(F===s.FLOAT&&(Z=s.R32F),F===s.HALF_FLOAT&&(Z=s.R16F),F===s.UNSIGNED_BYTE&&(Z=s.R8)),E===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Z=s.R8UI),F===s.UNSIGNED_SHORT&&(Z=s.R16UI),F===s.UNSIGNED_INT&&(Z=s.R32UI),F===s.BYTE&&(Z=s.R8I),F===s.SHORT&&(Z=s.R16I),F===s.INT&&(Z=s.R32I)),E===s.RG&&(F===s.FLOAT&&(Z=s.RG32F),F===s.HALF_FLOAT&&(Z=s.RG16F),F===s.UNSIGNED_BYTE&&(Z=s.RG8)),E===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(Z=s.RG8UI),F===s.UNSIGNED_SHORT&&(Z=s.RG16UI),F===s.UNSIGNED_INT&&(Z=s.RG32UI),F===s.BYTE&&(Z=s.RG8I),F===s.SHORT&&(Z=s.RG16I),F===s.INT&&(Z=s.RG32I)),E===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),F===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),F===s.UNSIGNED_INT&&(Z=s.RGB32UI),F===s.BYTE&&(Z=s.RGB8I),F===s.SHORT&&(Z=s.RGB16I),F===s.INT&&(Z=s.RGB32I)),E===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),F===s.UNSIGNED_INT&&(Z=s.RGBA32UI),F===s.BYTE&&(Z=s.RGBA8I),F===s.SHORT&&(Z=s.RGBA16I),F===s.INT&&(Z=s.RGBA32I)),E===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),E===s.RGBA){const Ee=J?zo:$e.getTransfer(j);F===s.FLOAT&&(Z=s.RGBA32F),F===s.HALF_FLOAT&&(Z=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Z=Ee===ct?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(R,E){let F;return R?E===null||E===Gi||E===Cs?F=s.DEPTH24_STENCIL8:E===Tn?F=s.DEPTH32F_STENCIL8:E===_r&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===Cs?F=s.DEPTH_COMPONENT24:E===Tn?F=s.DEPTH_COMPONENT32F:E===_r&&(F=s.DEPTH_COMPONENT16),F}function C(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==Lt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){const E=R.target;E.removeEventListener("dispose",w),I(E),E.isVideoTexture&&h.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),S(E)}function I(R){const E=n.get(R);if(E.__webglInit===void 0)return;const F=R.source,j=d.get(F);if(j){const J=j[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(R),Object.keys(j).length===0&&d.delete(F)}n.remove(R)}function A(R){const E=n.get(R);s.deleteTexture(E.__webglTexture);const F=R.source,j=d.get(F);delete j[E.__cacheKey],o.memory.textures--}function S(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let J=0;J<E.__webglFramebuffer[j].length;J++)s.deleteFramebuffer(E.__webglFramebuffer[j][J]);else s.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)s.deleteFramebuffer(E.__webglFramebuffer[j]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const F=R.textures;for(let j=0,J=F.length;j<J;j++){const Z=n.get(F[j]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(F[j])}n.remove(R)}let L=0;function H(){L=0}function B(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function q(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Y(R,E){const F=n.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(F,R,E);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+E)}function X(R,E){const F=n.get(R);if(R.version>0&&F.__version!==R.version){k(F,R,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+E)}function K(R,E){const F=n.get(R);if(R.version>0&&F.__version!==R.version){k(F,R,E);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+E)}function V(R,E){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Q(F,R,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+E)}const ne={[Is]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[Lo]:s.MIRRORED_REPEAT},ue={[Wt]:s.NEAREST,[Eu]:s.NEAREST_MIPMAP_NEAREST,[ar]:s.NEAREST_MIPMAP_LINEAR,[Lt]:s.LINEAR,[xo]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},me={[af]:s.NEVER,[ff]:s.ALWAYS,[cf]:s.LESS,[Pu]:s.LEQUAL,[lf]:s.EQUAL,[df]:s.GEQUAL,[hf]:s.GREATER,[uf]:s.NOTEQUAL};function Pe(R,E){if(E.type===Tn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Lt||E.magFilter===xo||E.magFilter===ar||E.magFilter===Yn||E.minFilter===Lt||E.minFilter===xo||E.minFilter===ar||E.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ne[E.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ne[E.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ne[E.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ue[E.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ue[E.minFilter]),E.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wt||E.minFilter!==ar&&E.minFilter!==Yn||E.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Xe(R,E){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));const j=E.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const Z=q(E);if(Z!==R.__cacheKey){J[Z]===void 0&&(J[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[Z].usedTimes++;const Ee=J[R.__cacheKey];Ee!==void 0&&(J[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&A(E)),R.__cacheKey=Z,R.__webglTexture=J[Z].texture}return F}function k(R,E,F){let j=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=s.TEXTURE_3D);const J=Xe(R,E),Z=E.source;t.bindTexture(j,R.__webglTexture,s.TEXTURE0+F);const Ee=n.get(Z);if(Z.version!==Ee.__version||J===!0){t.activeTexture(s.TEXTURE0+F);const oe=$e.getPrimaries($e.workingColorSpace),fe=E.colorSpace===ui?null:$e.getPrimaries(E.colorSpace),Ke=E.colorSpace===ui||oe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ee=g(E.image,!1,i.maxTextureSize);ee=at(E,ee);const pe=r.convert(E.format,E.colorSpace),Re=r.convert(E.type);let Ce=M(E.internalFormat,pe,Re,E.colorSpace,E.isVideoTexture);Pe(j,E);let _e;const qe=E.mipmaps,Oe=E.isVideoTexture!==!0,it=Ee.__version===void 0||J===!0,N=Z.dataReady,ie=C(E,ee);if(E.isDepthTexture)Ce=x(E.format===Ls,E.type),it&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ee.width,ee.height,0,pe,Re,null));else if(E.isDataTexture)if(qe.length>0){Oe&&it&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,qe[0].width,qe[0].height);for(let W=0,$=qe.length;W<$;W++)_e=qe[W],Oe?N&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,_e.width,_e.height,pe,Re,_e.data):t.texImage2D(s.TEXTURE_2D,W,Ce,_e.width,_e.height,0,pe,Re,_e.data);E.generateMipmaps=!1}else Oe?(it&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,ee.width,ee.height),N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,Re,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,ee.width,ee.height,0,pe,Re,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Oe&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,Ce,qe[0].width,qe[0].height,ee.depth);for(let W=0,$=qe.length;W<$;W++)if(_e=qe[W],E.format!==fn)if(pe!==null)if(Oe){if(N)if(E.layerUpdates.size>0){const ce=Th(_e.width,_e.height,E.format,E.type);for(const le of E.layerUpdates){const ae=_e.data.subarray(le*ce/_e.data.BYTES_PER_ELEMENT,(le+1)*ce/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,le,_e.width,_e.height,1,pe,ae)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ee.depth,pe,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Ce,_e.width,_e.height,ee.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ee.depth,pe,Re,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,W,Ce,_e.width,_e.height,ee.depth,0,pe,Re,_e.data)}else{Oe&&it&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,qe[0].width,qe[0].height);for(let W=0,$=qe.length;W<$;W++)_e=qe[W],E.format!==fn?pe!==null?Oe?N&&t.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,_e.width,_e.height,pe,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,W,Ce,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,_e.width,_e.height,pe,Re,_e.data):t.texImage2D(s.TEXTURE_2D,W,Ce,_e.width,_e.height,0,pe,Re,_e.data)}else if(E.isDataArrayTexture)if(Oe){if(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,Ce,ee.width,ee.height,ee.depth),N)if(E.layerUpdates.size>0){const W=Th(ee.width,ee.height,E.format,E.type);for(const $ of E.layerUpdates){const ce=ee.data.subarray($*W/ee.data.BYTES_PER_ELEMENT,($+1)*W/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,pe,Re,ce)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,Re,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,pe,Re,ee.data);else if(E.isData3DTexture)Oe?(it&&t.texStorage3D(s.TEXTURE_3D,ie,Ce,ee.width,ee.height,ee.depth),N&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,Re,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,pe,Re,ee.data);else if(E.isFramebufferTexture){if(it)if(Oe)t.texStorage2D(s.TEXTURE_2D,ie,Ce,ee.width,ee.height);else{let W=ee.width,$=ee.height;for(let ce=0;ce<ie;ce++)t.texImage2D(s.TEXTURE_2D,ce,Ce,W,$,0,pe,Re,null),W>>=1,$>>=1}}else if(qe.length>0){if(Oe&&it){const W=ye(qe[0]);t.texStorage2D(s.TEXTURE_2D,ie,Ce,W.width,W.height)}for(let W=0,$=qe.length;W<$;W++)_e=qe[W],Oe?N&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,pe,Re,_e):t.texImage2D(s.TEXTURE_2D,W,Ce,pe,Re,_e);E.generateMipmaps=!1}else if(Oe){if(it){const W=ye(ee);t.texStorage2D(s.TEXTURE_2D,ie,Ce,W.width,W.height)}N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,Re,ee)}else t.texImage2D(s.TEXTURE_2D,0,Ce,pe,Re,ee);m(E)&&p(j),Ee.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Q(R,E,F){if(E.image.length!==6)return;const j=Xe(R,E),J=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+F);const Z=n.get(J);if(J.version!==Z.__version||j===!0){t.activeTexture(s.TEXTURE0+F);const Ee=$e.getPrimaries($e.workingColorSpace),oe=E.colorSpace===ui?null:$e.getPrimaries(E.colorSpace),fe=E.colorSpace===ui||Ee===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ke=E.isCompressedTexture||E.image[0].isCompressedTexture,ee=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!Ke&&!ee?pe[$]=g(E.image[$],!0,i.maxCubemapSize):pe[$]=ee?E.image[$].image:E.image[$],pe[$]=at(E,pe[$]);const Re=pe[0],Ce=r.convert(E.format,E.colorSpace),_e=r.convert(E.type),qe=M(E.internalFormat,Ce,_e,E.colorSpace),Oe=E.isVideoTexture!==!0,it=Z.__version===void 0||j===!0,N=J.dataReady;let ie=C(E,Re);Pe(s.TEXTURE_CUBE_MAP,E);let W;if(Ke){Oe&&it&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,qe,Re.width,Re.height);for(let $=0;$<6;$++){W=pe[$].mipmaps;for(let ce=0;ce<W.length;ce++){const le=W[ce];E.format!==fn?Ce!==null?Oe?N&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,le.width,le.height,Ce,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,qe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,le.width,le.height,Ce,_e,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,qe,le.width,le.height,0,Ce,_e,le.data)}}}else{if(W=E.mipmaps,Oe&&it){W.length>0&&ie++;const $=ye(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,qe,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Oe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,Ce,_e,pe[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qe,pe[$].width,pe[$].height,0,Ce,_e,pe[$].data);for(let ce=0;ce<W.length;ce++){const ae=W[ce].image[$].image;Oe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,ae.width,ae.height,Ce,_e,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,qe,ae.width,ae.height,0,Ce,_e,ae.data)}}else{Oe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,_e,pe[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qe,Ce,_e,pe[$]);for(let ce=0;ce<W.length;ce++){const le=W[ce];Oe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Ce,_e,le.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,qe,Ce,_e,le.image[$])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),Z.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function xe(R,E,F,j,J,Z){const Ee=r.convert(F.format,F.colorSpace),oe=r.convert(F.type),fe=M(F.internalFormat,Ee,oe,F.colorSpace),Ke=n.get(E),ee=n.get(F);if(ee.__renderTarget=E,!Ke.__hasExternalTextures){const pe=Math.max(1,E.width>>Z),Re=Math.max(1,E.height>>Z);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,fe,pe,Re,E.depth,0,Ee,oe,null):t.texImage2D(J,Z,fe,pe,Re,0,Ee,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Ge(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,J,ee.__webglTexture,0,Ve(E)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,J,ee.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(R,E,F){if(s.bindRenderbuffer(s.RENDERBUFFER,R),E.depthBuffer){const j=E.depthTexture,J=j&&j.isDepthTexture?j.type:null,Z=x(E.stencilBuffer,J),Ee=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=Ve(E);Ge(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,Z,E.width,E.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,Z,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Z,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,R)}else{const j=E.textures;for(let J=0;J<j.length;J++){const Z=j[J],Ee=r.convert(Z.format,Z.colorSpace),oe=r.convert(Z.type),fe=M(Z.internalFormat,Ee,oe,Z.colorSpace),Ke=Ve(E);F&&Ge(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,fe,E.width,E.height):Ge(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const J=j.__webglTexture,Z=Ve(E);if(E.depthTexture.format===Ss)Ge(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(E.depthTexture.format===Ls)Ge(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const E=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=j}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(E.__webglFramebuffer,R)}else if(F){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=s.createRenderbuffer(),re(E.__webglDepthbuffer[j],R,!1);else{const J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),re(E.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(R,E,F){const j=n.get(R);E!==void 0&&xe(j.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ne(R)}function ot(R){const E=R.texture,F=n.get(R),j=n.get(E);R.addEventListener("dispose",b);const J=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=E.version,o.memory.textures++),Z){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let fe=0;fe<E.mipmaps.length;fe++)F.__webglFramebuffer[oe][fe]=s.createFramebuffer()}else F.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)F.__webglFramebuffer[oe]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Ee)for(let oe=0,fe=J.length;oe<fe;oe++){const Ke=n.get(J[oe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Ge(R)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const fe=J[oe];F.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const Ke=r.convert(fe.format,fe.colorSpace),ee=r.convert(fe.type),pe=M(fe.internalFormat,Ke,ee,fe.colorSpace,R.isXRRenderTarget===!0),Re=Ve(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,pe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),re(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)xe(F.__webglFramebuffer[oe][fe],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else xe(F.__webglFramebuffer[oe],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let oe=0,fe=J.length;oe<fe;oe++){const Ke=J[oe],ee=n.get(Ke);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),Pe(s.TEXTURE_2D,Ke),xe(F.__webglFramebuffer,R,Ke,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),m(Ke)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),Pe(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)xe(F.__webglFramebuffer[fe],R,E,s.COLOR_ATTACHMENT0,oe,fe);else xe(F.__webglFramebuffer,R,E,s.COLOR_ATTACHMENT0,oe,0);m(E)&&p(oe),t.unbindTexture()}R.depthBuffer&&Ne(R)}function je(R){const E=R.textures;for(let F=0,j=E.length;F<j;F++){const J=E[F];if(m(J)){const Z=T(R),Ee=n.get(J).__webglTexture;t.bindTexture(Z,Ee),p(Z),t.unbindTexture()}}}const pt=[],O=[];function Pt(R){if(R.samples>0){if(Ge(R)===!1){const E=R.textures,F=R.width,j=R.height;let J=s.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=n.get(R),oe=E.length>1;if(oe)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[fe]);const Ke=n.get(E[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,F,j,0,0,F,j,J,s.NEAREST),c===!0&&(pt.length=0,O.length=0,pt.push(s.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(pt.push(Z),O.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[fe]);const Ke=n.get(E[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const E=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ve(R){return Math.min(i.maxSamples,R.samples)}function Ge(R){const E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(R){const E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function at(R,E){const F=R.colorSpace,j=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Xt&&F!==ui&&($e.getTransfer(F)===ct?(j!==fn||J!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=Be,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ge}function P0(s,e){function t(n,i=ui){let r;const o=$e.getTransfer(i);if(n===Qn)return s.UNSIGNED_BYTE;if(n===Gc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Au)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Tu)return s.BYTE;if(n===Mu)return s.SHORT;if(n===_r)return s.UNSIGNED_SHORT;if(n===Hc)return s.INT;if(n===Gi)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===Ar)return s.HALF_FLOAT;if(n===vu)return s.ALPHA;if(n===yu)return s.RGB;if(n===fn)return s.RGBA;if(n===bu)return s.LUMINANCE;if(n===Ru)return s.LUMINANCE_ALPHA;if(n===Ss)return s.DEPTH_COMPONENT;if(n===Ls)return s.DEPTH_STENCIL;if(n===kc)return s.RED;if(n===Vc)return s.RED_INTEGER;if(n===wu)return s.RG;if(n===Wc)return s.RG_INTEGER;if(n===Xc)return s.RGBA_INTEGER;if(n===So||n===Eo||n===To||n===Mo)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ya||n===Za||n===Ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===$a||n===Ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===$a)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===fc||n===pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Iu||n===mc||n===_c||n===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class N0 extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lt extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D0={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const O0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U0=`
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

}`;class F0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:O0,fragmentShader:U0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new Vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B0 extends Bs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null;const g=new F0,m=t.getContextAttributes();let p=null,T=null;const M=[],x=[],C=new Fe;let w=null;const b=new zt;b.viewport=new Qe;const I=new zt;I.viewport=new Qe;const A=[b,I],S=new N0;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Q=M[k];return Q===void 0&&(Q=new xa,M[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=M[k];return Q===void 0&&(Q=new xa,M[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=M[k];return Q===void 0&&(Q=new xa,M[k]=Q),Q.getHandSpace()};function B(k){const Q=x.indexOf(k.inputSource);if(Q===-1)return;const xe=M[Q];xe!==void 0&&(xe.update(k.inputSource,k.frame,l||o),xe.dispatchEvent({type:k.type,data:k.inputSource}))}function q(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",Y);for(let k=0;k<M.length;k++){const Q=x[k];Q!==null&&(x[k]=null,M[k].disconnect(Q))}L=null,H=null,g.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,T=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",q),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new zi(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,xe=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Ls:Ss,xe=m.stencil?Cs:Gi);const Ie={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new zi(d.textureWidth,d.textureHeight,{format:fn,type:Qn,depthTexture:new Wu(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(k){for(let Q=0;Q<k.removed.length;Q++){const xe=k.removed[Q],re=x.indexOf(xe);re>=0&&(x[re]=null,M[re].disconnect(xe))}for(let Q=0;Q<k.added.length;Q++){const xe=k.added[Q];let re=x.indexOf(xe);if(re===-1){for(let Ne=0;Ne<M.length;Ne++)if(Ne>=x.length){x.push(xe),re=Ne;break}else if(x[Ne]===null){x[Ne]=xe,re=Ne;break}if(re===-1)break}const Ie=M[re];Ie&&Ie.connect(xe)}}const X=new P,K=new P;function V(k,Q,xe){X.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);const re=X.distanceTo(K),Ie=Q.projectionMatrix.elements,Ne=xe.projectionMatrix.elements,Be=Ie[14]/(Ie[10]-1),ot=Ie[14]/(Ie[10]+1),je=(Ie[9]+1)/Ie[5],pt=(Ie[9]-1)/Ie[5],O=(Ie[8]-1)/Ie[0],Pt=(Ne[8]+1)/Ne[0],Ve=Be*O,Ge=Be*Pt,be=re/(-O+Pt),at=be*-O;if(Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(at),k.translateZ(be),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Ie[10]===-1)k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ye=Be+be,R=ot+be,E=Ve-at,F=Ge+(re-at),j=je*ot/R*ye,J=pt*ot/R*ye;k.projectionMatrix.makePerspective(E,F,j,J,ye,R),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ne(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let Q=k.near,xe=k.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),S.near=I.near=b.near=Q,S.far=I.far=b.far=xe,(L!==S.near||H!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far),b.layers.mask=k.layers.mask|2,I.layers.mask=k.layers.mask|4,S.layers.mask=b.layers.mask|I.layers.mask;const re=k.parent,Ie=S.cameras;ne(S,re);for(let Ne=0;Ne<Ie.length;Ne++)ne(Ie[Ne],re);Ie.length===2?V(S,b,I):S.projectionMatrix.copy(b.projectionMatrix),ue(k,S,re)};function ue(k,Q,xe){xe===null?k.matrix.copy(Q.matrixWorld):(k.matrix.copy(xe.matrixWorld),k.matrix.invert(),k.matrix.multiply(Q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ps*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let me=null;function Pe(k,Q){if(h=Q.getViewerPose(l||o),_=Q,h!==null){const xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let re=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let Ne=0;Ne<xe.length;Ne++){const Be=xe[Ne];let ot=null;if(f!==null)ot=f.getViewport(Be);else{const pt=u.getViewSubImage(d,Be);ot=pt.viewport,Ne===0&&(e.setRenderTargetTextures(T,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(T))}let je=A[Ne];je===void 0&&(je=new zt,je.layers.enable(Ne),je.viewport=new Qe,A[Ne]=je),je.matrix.fromArray(Be.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Be.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ot.x,ot.y,ot.width,ot.height),Ne===0&&(S.matrix.copy(je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(je)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ne=u.getDepthInformation(xe[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(e,Ne,i.renderState)}}for(let xe=0;xe<M.length;xe++){const re=x[xe],Ie=M[xe];re!==null&&Ie!==void 0&&Ie.update(re,Q,l||o)}me&&me(k,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Xe=new Vu;Xe.setAnimationLoop(Pe),this.setAnimationLoop=function(k){me=k},this.dispose=function(){}}}const yi=new In,H0=new He;function G0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),M=T.envMap,x=T.envMapRotation;M&&(m.envMap.value=M,yi.copy(x),yi.x*=-1,yi.y*=-1,yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(H0.makeRotationFromEuler(yi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function z0(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,M){const x=M.program;n.uniformBlockBinding(T,x)}function l(T,M){let x=i[T.id];x===void 0&&(_(T),x=h(T),i[T.id]=x,T.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(T,C);const w=e.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function h(T){const M=u();T.__bindingPointIndex=M;const x=s.createBuffer(),C=T.__size,w=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const M=i[T.id],x=T.uniforms,C=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,b=x.length;w<b;w++){const I=Array.isArray(x[w])?x[w]:[x[w]];for(let A=0,S=I.length;A<S;A++){const L=I[A];if(f(L,w,A,C)===!0){const H=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let Y=0;Y<B.length;Y++){const X=B[Y],K=g(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,H+q,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(T,M,x,C){const w=T.value,b=M+"_"+x;if(C[b]===void 0)return typeof w=="number"||typeof w=="boolean"?C[b]=w:C[b]=w.clone(),!0;{const I=C[b];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return C[b]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function _(T){const M=T.uniforms;let x=0;const C=16;for(let b=0,I=M.length;b<I;b++){const A=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,L=A.length;S<L;S++){const H=A[S],B=Array.isArray(H.value)?H.value:[H.value];for(let q=0,Y=B.length;q<Y;q++){const X=B[q],K=g(X),V=x%C,ne=V%K.boundary,ue=V+ne;x+=ne,ue!==0&&C-ue<K.storage&&(x+=C-ue),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=K.storage}}}const w=x%C;return w>0&&(x+=C-w),T.__size=x,T.__cache={},this}function g(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class k0{constructor(e={}){const{canvas:t=Cf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=_i,this.toneMappingExposure=1;const x=this;let C=!1,w=0,b=0,I=null,A=-1,S=null;const L=new Qe,H=new Qe;let B=null;const q=new Le(0);let Y=0,X=t.width,K=t.height,V=1,ne=null,ue=null;const me=new Qe(0,0,X,K),Pe=new Qe(0,0,X,K);let Xe=!1;const k=new Yc;let Q=!1,xe=!1;const re=new He,Ie=new He,Ne=new P,Be=new Qe,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function pt(){return I===null?V:1}let O=n;function Pt(v,D){return t.getContext(v,D)}try{const v={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),O===null){const D="webgl2";if(O=Pt(D,v),O===null)throw Pt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ve,Ge,be,at,ye,R,E,F,j,J,Z,Ee,oe,fe,Ke,ee,pe,Re,Ce,_e,qe,Oe,it,N;function ie(){Ve=new Y_(O),Ve.init(),Oe=new P0(O,Ve),Ge=new z_(O,Ve,e,Oe),be=new I0(O,Ve),Ge.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),at=new j_(O),ye=new p0,R=new L0(O,Ve,be,ye,Ge,Oe,at),E=new V_(x),F=new q_(x),j=new ip(O),it=new H_(O,j),J=new Z_(O,j,at,it),Z=new J_(O,J,j,at),Ce=new $_(O,Ge,R),ee=new k_(ye),Ee=new f0(x,E,F,Ve,Ge,it,ee),oe=new G0(x,ye),fe=new _0,Ke=new M0(Ve),Re=new B_(x,E,F,be,Z,f,c),pe=new R0(x,Z,Ge),N=new z0(O,at,Ge,be),_e=new G_(O,Ve,at),qe=new K_(O,Ve,at),at.programs=Ee.programs,x.capabilities=Ge,x.extensions=Ve,x.properties=ye,x.renderLists=fe,x.shadowMap=pe,x.state=be,x.info=at}ie();const W=new B0(x,O);this.xr=W,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const v=Ve.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ve.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(X,K,!1))},this.getSize=function(v){return v.set(X,K)},this.setSize=function(v,D,G=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,K=D,t.width=Math.floor(v*V),t.height=Math.floor(D*V),G===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(X*V,K*V).floor()},this.setDrawingBufferSize=function(v,D,G){X=v,K=D,V=G,t.width=Math.floor(v*G),t.height=Math.floor(D*G),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(me)},this.setViewport=function(v,D,G,z){v.isVector4?me.set(v.x,v.y,v.z,v.w):me.set(v,D,G,z),be.viewport(L.copy(me).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Pe)},this.setScissor=function(v,D,G,z){v.isVector4?Pe.set(v.x,v.y,v.z,v.w):Pe.set(v,D,G,z),be.scissor(H.copy(Pe).multiplyScalar(V).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(v){be.setScissorTest(Xe=v)},this.setOpaqueSort=function(v){ne=v},this.setTransparentSort=function(v){ue=v},this.getClearColor=function(v){return v.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(v=!0,D=!0,G=!0){let z=0;if(v){let U=!1;if(I!==null){const te=I.texture.format;U=te===Xc||te===Wc||te===Vc}if(U){const te=I.texture.type,de=te===Qn||te===Gi||te===_r||te===Cs||te===Gc||te===zc,Te=Re.getClearColor(),Me=Re.getClearAlpha(),De=Te.r,ze=Te.g,Ae=Te.b;de?(_[0]=De,_[1]=ze,_[2]=Ae,_[3]=Me,O.clearBufferuiv(O.COLOR,0,_)):(g[0]=De,g[1]=ze,g[2]=Ae,g[3]=Me,O.clearBufferiv(O.COLOR,0,g))}else z|=O.COLOR_BUFFER_BIT}D&&(z|=O.DEPTH_BUFFER_BIT),G&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),Ke.dispose(),ye.dispose(),E.dispose(),F.dispose(),Z.dispose(),it.dispose(),N.dispose(),Ee.dispose(),W.dispose(),W.removeEventListener("sessionstart",Lr),W.removeEventListener("sessionend",ki),vn.stop()};function $(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=at.autoReset,D=pe.enabled,G=pe.autoUpdate,z=pe.needsUpdate,U=pe.type;ie(),at.autoReset=v,pe.enabled=D,pe.autoUpdate=G,pe.needsUpdate=z,pe.type=U}function le(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ae(v){const D=v.target;D.removeEventListener("dispose",ae),we(D)}function we(v){Ye(v),ye.remove(v)}function Ye(v){const D=ye.get(v).programs;D!==void 0&&(D.forEach(function(G){Ee.releaseProgram(G)}),v.isShaderMaterial&&Ee.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,G,z,U,te){D===null&&(D=ot);const de=U.isMesh&&U.matrixWorld.determinant()<0,Te=Ad(v,D,G,z,U);be.setMaterial(z,de);let Me=G.index,De=1;if(z.wireframe===!0){if(Me=J.getWireframeAttribute(G),Me===void 0)return;De=2}const ze=G.drawRange,Ae=G.attributes.position;let Je=ze.start*De,ht=(ze.start+ze.count)*De;te!==null&&(Je=Math.max(Je,te.start*De),ht=Math.min(ht,(te.start+te.count)*De)),Me!==null?(Je=Math.max(Je,0),ht=Math.min(ht,Me.count)):Ae!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,Ae.count));const dt=ht-Je;if(dt<0||dt===1/0)return;it.setup(U,z,Te,G,Me);let Yt,et=_e;if(Me!==null&&(Yt=j.get(Me),et=qe,et.setIndex(Yt)),U.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*pt()),et.setMode(O.LINES)):et.setMode(O.TRIANGLES);else if(U.isLine){let ve=z.linewidth;ve===void 0&&(ve=1),be.setLineWidth(ve*pt()),U.isLineSegments?et.setMode(O.LINES):U.isLineLoop?et.setMode(O.LINE_LOOP):et.setMode(O.LINE_STRIP)}else U.isPoints?et.setMode(O.POINTS):U.isSprite&&et.setMode(O.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ve=U._multiDrawStarts,On=U._multiDrawCounts,tt=U._multiDrawCount,mn=Me?j.get(Me).bytesPerElement:1,Wi=ye.get(z).currentProgram.getUniforms();for(let Jt=0;Jt<tt;Jt++)Wi.setValue(O,"_gl_DrawID",Jt),et.render(ve[Jt]/mn,On[Jt])}else if(U.isInstancedMesh)et.renderInstances(Je,dt,U.count);else if(G.isInstancedBufferGeometry){const ve=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,On=Math.min(G.instanceCount,ve);et.renderInstances(Je,dt,On)}else et.render(Je,dt)};function Ue(v,D,G){v.transparent===!0&&v.side===Rt&&v.forceSinglePass===!1?(v.side=$t,v.needsUpdate=!0,Nr(v,D,G),v.side=Jn,v.needsUpdate=!0,Nr(v,D,G),v.side=Rt):Nr(v,D,G)}this.compile=function(v,D,G=null){G===null&&(G=v),p=Ke.get(G),p.init(D),M.push(p),G.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),v!==G&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const Te=te[de];Ue(Te,G,U),z.add(Te)}else Ue(te,G,U),z.add(te)}),M.pop(),p=null,z},this.compileAsync=function(v,D,G=null){const z=this.compile(v,D,G);return new Promise(U=>{function te(){if(z.forEach(function(de){ye.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){U(v);return}setTimeout(te,10)}Ve.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let yt=null;function an(v){yt&&yt(v)}function Lr(){vn.stop()}function ki(){vn.start()}const vn=new Vu;vn.setAnimationLoop(an),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(v){yt=v,W.setAnimationLoop(v),v===null?vn.stop():vn.start()},W.addEventListener("sessionstart",Lr),W.addEventListener("sessionend",ki),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,D,I),p=Ke.get(v,M.length),p.init(D),M.push(p),Ie.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),k.setFromProjectionMatrix(Ie),xe=this.localClippingEnabled,Q=ee.init(this.clippingPlanes,xe),m=fe.get(v,T.length),m.init(),T.push(m),W.enabled===!0&&W.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&Vi(te,D,-1/0,x.sortObjects)}Vi(v,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,ue),je=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,je&&Re.addToRenderList(m,v),this.info.render.frame++,Q===!0&&ee.beginShadows();const G=p.state.shadowsArray;pe.render(G,v,D),Q===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){const te=D.cameras;if(U.length>0)for(let de=0,Te=te.length;de<Te;de++){const Me=te[de];_l(z,U,v,Me)}je&&Re.render(v);for(let de=0,Te=te.length;de<Te;de++){const Me=te[de];ml(m,v,Me,Me.viewport)}}else U.length>0&&_l(z,U,v,D),je&&Re.render(v),ml(m,v,D);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(x,v,D),it.resetDefaultState(),A=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],Q===!0&&ee.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Vi(v,D,G,z){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||k.intersectsSprite(v)){z&&Be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ie);const de=Z.update(v),Te=v.material;Te.visible&&m.push(v,de,Te,G,Be.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||k.intersectsObject(v))){const de=Z.update(v),Te=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Be.copy(v.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Be.copy(de.boundingSphere.center)),Be.applyMatrix4(v.matrixWorld).applyMatrix4(Ie)),Array.isArray(Te)){const Me=de.groups;for(let De=0,ze=Me.length;De<ze;De++){const Ae=Me[De],Je=Te[Ae.materialIndex];Je&&Je.visible&&m.push(v,de,Je,G,Be.z,Ae)}}else Te.visible&&m.push(v,de,Te,G,Be.z,null)}}const te=v.children;for(let de=0,Te=te.length;de<Te;de++)Vi(te[de],D,G,z)}function ml(v,D,G,z){const U=v.opaque,te=v.transmissive,de=v.transparent;p.setupLightsView(G),Q===!0&&ee.setGlobalState(x.clippingPlanes,G),z&&be.viewport(L.copy(z)),U.length>0&&Pr(U,D,G),te.length>0&&Pr(te,D,G),de.length>0&&Pr(de,D,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function _l(v,D,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new zi(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Ar:Qn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const te=p.state.transmissionRenderTarget[z.id],de=z.viewport||L;te.setSize(de.z,de.w);const Te=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(q),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),je&&Re.render(G);const Me=x.toneMapping;x.toneMapping=_i;const De=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Q===!0&&ee.setGlobalState(x.clippingPlanes,z),Pr(v,G,z),R.updateMultisampleRenderTarget(te),R.updateRenderTargetMipmap(te),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ae=0,Je=D.length;Ae<Je;Ae++){const ht=D[Ae],dt=ht.object,Yt=ht.geometry,et=ht.material,ve=ht.group;if(et.side===Rt&&dt.layers.test(z.layers)){const On=et.side;et.side=$t,et.needsUpdate=!0,gl(dt,G,z,Yt,et,ve),et.side=On,et.needsUpdate=!0,ze=!0}}ze===!0&&(R.updateMultisampleRenderTarget(te),R.updateRenderTargetMipmap(te))}x.setRenderTarget(Te),x.setClearColor(q,Y),De!==void 0&&(z.viewport=De),x.toneMapping=Me}function Pr(v,D,G){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,te=v.length;U<te;U++){const de=v[U],Te=de.object,Me=de.geometry,De=z===null?de.material:z,ze=de.group;Te.layers.test(G.layers)&&gl(Te,D,G,Me,De,ze)}}function gl(v,D,G,z,U,te){v.onBeforeRender(x,D,G,z,U,te),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(x,D,G,z,v,te),U.transparent===!0&&U.side===Rt&&U.forceSinglePass===!1?(U.side=$t,U.needsUpdate=!0,x.renderBufferDirect(G,D,z,U,v,te),U.side=Jn,U.needsUpdate=!0,x.renderBufferDirect(G,D,z,U,v,te),U.side=Rt):x.renderBufferDirect(G,D,z,U,v,te),v.onAfterRender(x,D,G,z,U,te)}function Nr(v,D,G){D.isScene!==!0&&(D=ot);const z=ye.get(v),U=p.state.lights,te=p.state.shadowsArray,de=U.state.version,Te=Ee.getParameters(v,U.state,te,D,G),Me=Ee.getProgramCacheKey(Te);let De=z.programs;z.environment=v.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(v.isMeshStandardMaterial?F:E).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,De===void 0&&(v.addEventListener("dispose",ae),De=new Map,z.programs=De);let ze=De.get(Me);if(ze!==void 0){if(z.currentProgram===ze&&z.lightsStateVersion===de)return Sl(v,Te),ze}else Te.uniforms=Ee.getUniforms(v),v.onBeforeCompile(Te,x),ze=Ee.acquireProgram(Te,Me),De.set(Me,ze),z.uniforms=Te.uniforms;const Ae=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=ee.uniform),Sl(v,Te),z.needsLights=yd(v),z.lightsStateVersion=de,z.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=ze,z.uniformsList=null,ze}function xl(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=vo.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Sl(v,D){const G=ye.get(v);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Ad(v,D,G,z,U){D.isScene!==!0&&(D=ot),R.resetTextureUnits();const te=D.fog,de=z.isMeshStandardMaterial?D.environment:null,Te=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Xt,Me=(z.isMeshStandardMaterial?F:E).get(z.envMap||de),De=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let dt=_i;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(dt=x.toneMapping);const Yt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=Yt!==void 0?Yt.length:0,ve=ye.get(z),On=p.state.lights;if(Q===!0&&(xe===!0||v!==S)){const cn=v===S&&z.id===A;ee.setState(z,v,cn)}let tt=!1;z.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==On.state.version||ve.outputColorSpace!==Te||U.isBatchedMesh&&ve.batching===!1||!U.isBatchedMesh&&ve.batching===!0||U.isBatchedMesh&&ve.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ve.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ve.instancing===!1||!U.isInstancedMesh&&ve.instancing===!0||U.isSkinnedMesh&&ve.skinning===!1||!U.isSkinnedMesh&&ve.skinning===!0||U.isInstancedMesh&&ve.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ve.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ve.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ve.instancingMorph===!1&&U.morphTexture!==null||ve.envMap!==Me||z.fog===!0&&ve.fog!==te||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==ee.numPlanes||ve.numIntersection!==ee.numIntersection)||ve.vertexAlphas!==De||ve.vertexTangents!==ze||ve.morphTargets!==Ae||ve.morphNormals!==Je||ve.morphColors!==ht||ve.toneMapping!==dt||ve.morphTargetsCount!==et)&&(tt=!0):(tt=!0,ve.__version=z.version);let mn=ve.currentProgram;tt===!0&&(mn=Nr(z,D,U));let Wi=!1,Jt=!1,Xs=!1;const ft=mn.getUniforms(),yn=ve.uniforms;if(be.useProgram(mn.program)&&(Wi=!0,Jt=!0,Xs=!0),z.id!==A&&(A=z.id,Jt=!0),Wi||S!==v){be.buffers.depth.getReversed()?(re.copy(v.projectionMatrix),Pf(re),Nf(re),ft.setValue(O,"projectionMatrix",re)):ft.setValue(O,"projectionMatrix",v.projectionMatrix),ft.setValue(O,"viewMatrix",v.matrixWorldInverse);const ei=ft.map.cameraPosition;ei!==void 0&&ei.setValue(O,Ne.setFromMatrixPosition(v.matrixWorld)),Ge.logarithmicDepthBuffer&&ft.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ft.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,Jt=!0,Xs=!0)}if(U.isSkinnedMesh){ft.setOptional(O,U,"bindMatrix"),ft.setOptional(O,U,"bindMatrixInverse");const cn=U.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),ft.setValue(O,"boneTexture",cn.boneTexture,R))}U.isBatchedMesh&&(ft.setOptional(O,U,"batchingTexture"),ft.setValue(O,"batchingTexture",U._matricesTexture,R),ft.setOptional(O,U,"batchingIdTexture"),ft.setValue(O,"batchingIdTexture",U._indirectTexture,R),ft.setOptional(O,U,"batchingColorTexture"),U._colorsTexture!==null&&ft.setValue(O,"batchingColorTexture",U._colorsTexture,R));const qs=G.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Ce.update(U,G,mn),(Jt||ve.receiveShadow!==U.receiveShadow)&&(ve.receiveShadow=U.receiveShadow,ft.setValue(O,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(yn.envMap.value=Me,yn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(yn.envMapIntensity.value=D.environmentIntensity),Jt&&(ft.setValue(O,"toneMappingExposure",x.toneMappingExposure),ve.needsLights&&vd(yn,Xs),te&&z.fog===!0&&oe.refreshFogUniforms(yn,te),oe.refreshMaterialUniforms(yn,z,V,K,p.state.transmissionRenderTarget[v.id]),vo.upload(O,xl(ve),yn,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(vo.upload(O,xl(ve),yn,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ft.setValue(O,"center",U.center),ft.setValue(O,"modelViewMatrix",U.modelViewMatrix),ft.setValue(O,"normalMatrix",U.normalMatrix),ft.setValue(O,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const cn=z.uniformsGroups;for(let ei=0,ti=cn.length;ei<ti;ei++){const El=cn[ei];N.update(El,mn),N.bind(El,mn)}}return mn}function vd(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function yd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,D,G){ye.get(v.texture).__webglTexture=D,ye.get(v.depthTexture).__webglTexture=G;const z=ye.get(v);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=G===void 0,z.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const G=ye.get(v);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,G=0){I=v,w=D,b=G;let z=!0,U=null,te=!1,de=!1;if(v){const Me=ye.get(v);if(Me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(O.FRAMEBUFFER,null),z=!1;else if(Me.__webglFramebuffer===void 0)R.setupRenderTarget(v);else if(Me.__hasExternalTextures)R.rebindTextures(v,ye.get(v.texture).__webglTexture,ye.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ae=v.depthTexture;if(Me.__boundDepthTexture!==Ae){if(Ae!==null&&ye.has(Ae)&&(v.width!==Ae.image.width||v.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(v)}}const De=v.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(de=!0);const ze=ye.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ze[D])?U=ze[D][G]:U=ze[D],te=!0):v.samples>0&&R.useMultisampledRTT(v)===!1?U=ye.get(v).__webglMultisampledFramebuffer:Array.isArray(ze)?U=ze[G]:U=ze,L.copy(v.viewport),H.copy(v.scissor),B=v.scissorTest}else L.copy(me).multiplyScalar(V).floor(),H.copy(Pe).multiplyScalar(V).floor(),B=Xe;if(be.bindFramebuffer(O.FRAMEBUFFER,U)&&z&&be.drawBuffers(v,U),be.viewport(L),be.scissor(H),be.setScissorTest(B),te){const Me=ye.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me.__webglTexture,G)}else if(de){const Me=ye.get(v.texture),De=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.__webglTexture,G||0,De)}A=-1},this.readRenderTargetPixels=function(v,D,G,z,U,te,de){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(Te=Te[de]),Te){be.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Me=v.texture,De=Me.format,ze=Me.type;if(!Ge.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-z&&G>=0&&G<=v.height-U&&O.readPixels(D,G,z,U,Oe.convert(De),Oe.convert(ze),te)}finally{const Me=I!==null?ye.get(I).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(v,D,G,z,U,te,de){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(Te=Te[de]),Te){const Me=v.texture,De=Me.format,ze=Me.type;if(!Ge.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-z&&G>=0&&G<=v.height-U){be.bindFramebuffer(O.FRAMEBUFFER,Te);const Ae=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ae),O.bufferData(O.PIXEL_PACK_BUFFER,te.byteLength,O.STREAM_READ),O.readPixels(D,G,z,U,Oe.convert(De),Oe.convert(ze),0);const Je=I!==null?ye.get(I).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Je);const ht=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Lf(O,ht,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ae),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,te),O.deleteBuffer(Ae),O.deleteSync(ht),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,G=0){v.isTexture!==!0&&(cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const z=Math.pow(2,-G),U=Math.floor(v.image.width*z),te=Math.floor(v.image.height*z),de=D!==null?D.x:0,Te=D!==null?D.y:0;R.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,de,Te,U,te),be.unbindTexture()},this.copyTextureToTexture=function(v,D,G=null,z=null,U=0){v.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,v=arguments[1],D=arguments[2],U=arguments[3]||0,G=null);let te,de,Te,Me,De,ze,Ae,Je,ht;const dt=v.isCompressedTexture?v.mipmaps[U]:v.image;G!==null?(te=G.max.x-G.min.x,de=G.max.y-G.min.y,Te=G.isBox3?G.max.z-G.min.z:1,Me=G.min.x,De=G.min.y,ze=G.isBox3?G.min.z:0):(te=dt.width,de=dt.height,Te=dt.depth||1,Me=0,De=0,ze=0),z!==null?(Ae=z.x,Je=z.y,ht=z.z):(Ae=0,Je=0,ht=0);const Yt=Oe.convert(D.format),et=Oe.convert(D.type);let ve;D.isData3DTexture?(R.setTexture3D(D,0),ve=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(R.setTexture2DArray(D,0),ve=O.TEXTURE_2D_ARRAY):(R.setTexture2D(D,0),ve=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);const On=O.getParameter(O.UNPACK_ROW_LENGTH),tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),mn=O.getParameter(O.UNPACK_SKIP_PIXELS),Wi=O.getParameter(O.UNPACK_SKIP_ROWS),Jt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,dt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Me),O.pixelStorei(O.UNPACK_SKIP_ROWS,De),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ze);const Xs=v.isDataArrayTexture||v.isData3DTexture,ft=D.isDataArrayTexture||D.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const yn=ye.get(v),qs=ye.get(D),cn=ye.get(yn.__renderTarget),ei=ye.get(qs.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,cn.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ti=0;ti<Te;ti++)Xs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.get(v).__webglTexture,U,ze+ti),v.isDepthTexture?(ft&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.get(D).__webglTexture,U,ht+ti),O.blitFramebuffer(Me,De,te,de,Ae,Je,te,de,O.DEPTH_BUFFER_BIT,O.NEAREST)):ft?O.copyTexSubImage3D(ve,U,Ae,Je,ht+ti,Me,De,te,de):O.copyTexSubImage2D(ve,U,Ae,Je,ht+ti,Me,De,te,de);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ft?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(ve,U,Ae,Je,ht,te,de,Te,Yt,et,dt.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(ve,U,Ae,Je,ht,te,de,Te,Yt,dt.data):O.texSubImage3D(ve,U,Ae,Je,ht,te,de,Te,Yt,et,dt):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,U,Ae,Je,te,de,Yt,et,dt.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,U,Ae,Je,dt.width,dt.height,Yt,dt.data):O.texSubImage2D(O.TEXTURE_2D,U,Ae,Je,te,de,Yt,et,dt);O.pixelStorei(O.UNPACK_ROW_LENGTH,On),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,mn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Wi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Jt),U===0&&D.generateMipmaps&&O.generateMipmap(ve),be.unbindTexture()},this.copyTextureToTexture3D=function(v,D,G=null,z=null,U=0){return v.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,z=arguments[1]||null,v=arguments[2],D=arguments[3],U=arguments[4]||0),cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,G,z,U)},this.initRenderTarget=function(v){ye.get(v).__webglFramebuffer===void 0&&R.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?R.setTextureCube(v,0):v.isData3DTexture?R.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?R.setTexture2DArray(v,0):R.setTexture2D(v,0),be.unbindTexture()},this.resetState=function(){w=0,b=0,I=null,be.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class jc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class V0 extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ku{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new P;class Er{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Er(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tc extends pn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rs;const $s=new P,os=new P,as=new P,cs=new Fe,Js=new Fe,ju=new He,eo=new P,Qs=new P,to=new P,Mh=new Fe,Sa=new Fe,Ah=new Fe;class vh extends ut{constructor(e=new Tc){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new St;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ku(t,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new Er(n,3,0,!1)),rs.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=rs,this.material=e,this.center=new Fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),ju.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-as.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;no(eo.set(-.5,-.5,0),as,o,os,i,r),no(Qs.set(.5,-.5,0),as,o,os,i,r),no(to.set(.5,.5,0),as,o,os,i,r),Mh.set(0,0),Sa.set(1,0),Ah.set(1,1);let a=e.ray.intersectTriangle(eo,Qs,to,!1,$s);if(a===null&&(no(Qs.set(-.5,.5,0),as,o,os,i,r),Sa.set(0,1),a=e.ray.intersectTriangle(eo,to,Qs,!1,$s),a===null))return;const c=e.ray.origin.distanceTo($s);c<e.near||c>e.far||t.push({distance:c,point:$s.clone(),uv:rn.getInterpolation($s,eo,Qs,to,Mh,Sa,Ah,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function no(s,e,t,n,i,r){cs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Js.x=r*cs.x-i*cs.y,Js.y=i*cs.x+r*cs.y):Js.copy(cs),s.copy(e),s.x+=Js.x,s.y+=Js.y,s.applyMatrix4(ju)}const yh=new P,bh=new Qe,Rh=new Qe,W0=new P,wh=new He,io=new P,Ea=new Ln,Ih=new He,Ta=new ko;class X0 extends Se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vl,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(i),e.ray.intersectsSphere(Ea)!==!1&&(Ih.copy(i).invert(),Ta.copy(e.ray).applyMatrix4(Ih),!(this.boundingBox!==null&&Ta.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ta)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ef?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bh.fromBufferAttribute(i.attributes.skinIndex,e),Rh.fromBufferAttribute(i.attributes.skinWeight,e),yh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Rh.getComponent(r);if(o!==0){const a=bh.getComponent(r);wh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(W0.copy(yh).applyMatrix4(wh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $u extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ju extends Mt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Wt,h=Wt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ch=new He,q0=new He;class $c{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:q0;Ch.multiplyMatrices(a,t[r]),Ch.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new $c(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ju(t,e,e,fn,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $u),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Do extends mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ls=new He,Lh=new He,so=[],Ph=new qt,Y0=new He,er=new Se,tr=new Ln;class Qu extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Do(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Y0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Ph.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(Ph)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),tr.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),e.ray.intersectsSphere(tr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ls),Lh.multiplyMatrices(n,ls),er.matrixWorld=Lh,er.raycast(e,so);for(let o=0,a=so.length;o<a;o++){const c=so[o];c.instanceId=r,c.object=this,t.push(c)}so.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Do(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ju(new Float32Array(i*this.count),i,this.count,kc,Tn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jc extends pn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oo=new P,Uo=new P,Nh=new He,nr=new ko,ro=new Ln,Ma=new P,Dh=new P;class Qc extends ut{constructor(e=new St,t=new Jc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Oo.fromBufferAttribute(t,i-1),Uo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Oo.distanceTo(Uo);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(i),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;Nh.copy(i).invert(),nr.copy(e.ray).applyMatrix4(Nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=l){const p=h.getX(g),T=h.getX(g+1),M=oo(this,e,nr,c,p,T);M&&t.push(M)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(f),p=oo(this,e,nr,c,g,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=l){const p=oo(this,e,nr,c,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=oo(this,e,nr,c,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oo(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Oo.fromBufferAttribute(o,i),Uo.fromBufferAttribute(o,r),t.distanceSqToSegment(Oo,Uo,Ma,Dh)>n)return;Ma.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ma);if(!(c<e.near||c>e.far))return{distance:c,point:Dh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Oh=new P,Uh=new P;class ed extends Qc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Oh.fromBufferAttribute(t,i),Uh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Oh.distanceTo(Uh);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Z0 extends Qc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Gs extends pn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fh=new He,Mc=new ko,ao=new Ln,co=new P;class zs extends ut{constructor(e=new St,t=new Gs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(i),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;Fh.copy(i).invert(),Mc.copy(e.ray).applyMatrix4(Fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const m=l.getX(_);co.fromBufferAttribute(u,m),Bh(co,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=d,g=f;_<g;_++)co.fromBufferAttribute(u,_),Bh(co,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Bh(s,e,t,n,i,r,o){const a=Mc.distanceSqToPoint(s);if(a<t){const c=new P;Mc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hh extends Mt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jn extends St{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;T(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function T(){const x=new P,C=new P;let w=0;const b=(t-e)/n;for(let I=0;I<=r;I++){const A=[],S=I/r,L=S*(t-e)+e;for(let H=0;H<=i;H++){const B=H/i,q=B*c+a,Y=Math.sin(q),X=Math.cos(q);C.x=L*Y,C.y=-S*n+m,C.z=L*X,u.push(C.x,C.y,C.z),x.set(Y,b,X).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-S),A.push(_++)}g.push(A)}for(let I=0;I<i;I++)for(let A=0;A<r;A++){const S=g[A][I],L=g[A+1][I],H=g[A+1][I+1],B=g[A][I+1];(e>0||A!==0)&&(h.push(S,L,B),w+=3),(t>0||A!==r-1)&&(h.push(L,H,B),w+=3)}l.addGroup(p,w,0),p+=w}function M(x){const C=_,w=new Fe,b=new P;let I=0;const A=x===!0?e:t,S=x===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),_++;const L=_;for(let H=0;H<=i;H++){const q=H/i*c+a,Y=Math.cos(q),X=Math.sin(q);b.x=A*X,b.y=m*S,b.z=A*Y,u.push(b.x,b.y,b.z),d.push(0,S,0),w.x=Y*.5+.5,w.y=X*.5*S+.5,f.push(w.x,w.y),_++}for(let H=0;H<i;H++){const B=C+H,q=L+H;x===!0?h.push(q,q+1,B):h.push(q+1,q,B),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class el extends jn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new el(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const lo=new P,ho=new P,Aa=new P,uo=new rn;class K0 extends St{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Es*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:m,c:p}=uo;if(g.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),uo.getNormal(Aa),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let T=0;T<3;T++){const M=(T+1)%3,x=u[T],C=u[M],w=uo[h[T]],b=uo[h[M]],I=`${x}_${C}`,A=`${C}_${x}`;A in d&&d[A]?(Aa.dot(d[A].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(b.x,b.y,b.z)),d[A]=null):I in d||(d[I]={index0:l[T],index1:l[M],normal:Aa.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:m}=d[_];lo.fromBufferAttribute(a,g),ho.fromBufferAttribute(a,m),f.push(lo.x,lo.y,lo.z),f.push(ho.x,ho.y,ho.z)}this.setAttribute("position",new gt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class tl extends St{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new P,_=new Fe;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const T=p+m,M=T,x=T+n+1,C=T+n+2,w=T+1;a.push(M,x,w),a.push(x,C,w)}}this.setIndex(a),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fo extends St{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,d=new P,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const T=[],M=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const w=C/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+x,1-M),T.push(l++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const M=h[p][T+1],x=h[p][T],C=h[p+1][T],w=h[p+1][T+1];(p!==0||o>0)&&f.push(M,x,w),(p!==n-1||c<Math.PI)&&f.push(x,C,w)}this.setIndex(f),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nl extends St{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,T=(i+1)*f+_;o.push(g,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class on extends pn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pn extends on{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function fo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function j0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function td(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class vr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class J0 extends vr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yl,endingEnd:yl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case bl:r=e,a=2*t-n;break;case Rl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bl:o=e,c=2*n-t;break;case Rl:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,T=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,M=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+T*o[l+C]+M*o[c+C]+x*o[u+C];return r}}class Q0 extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class ex extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ex(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Q0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new J0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case Xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&j0(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){const g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=xr;class ks extends Nn{constructor(e,t,n){super(e,t,n)}}ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=gr;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class nd extends Nn{}nd.prototype.ValueTypeName="color";class Ds extends Nn{}Ds.prototype.ValueTypeName="number";class tx extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)xi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Os extends Nn{InterpolantFactoryMethodLinear(e){return new tx(this.times,this.values,this.getValueSize(),e)}}Os.prototype.ValueTypeName="quaternion";Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Vs extends Nn{constructor(e,t,n){super(e,t,n)}}Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=gr;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Nn{}Us.prototype.ValueTypeName="vector";class nx{constructor(e="",t=-1,n=[],i=tf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(sx(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=$0(c);c=Gh(c,1,h),l=Gh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ds(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,_,g){if(f.length!==0){const m=[],p=[];td(f,m,p,_),m.length!==0&&g.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let T=0;T!==d[_].morphTargets.length;++T){const M=d[_];m.push(M.time),p.push(M.morphTarget===g?1:0)}i.push(new Ds(".morphTargetInfluence["+g+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Us,f+".position",d,"pos",i),n(Os,f+".quaternion",d,"rot",i),n(Us,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ix(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return nd;case"quaternion":return Os;case"bool":case"boolean":return ks;case"string":return Vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function sx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ix(s.type);if(s.times===void 0){const t=[],n=[];td(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const fi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class rx{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const ox=new rx;class Ws{constructor(e){this.manager=e!==void 0?e:ox,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class ax extends Error{constructor(e,t){super(e),this.response=t}}class id extends Ws{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:i});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=zn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){T();function T(){u.read().then(({done:M,value:x})=>{if(M)p.close();else{g+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let w=0,b=h.length;w<b;w++){const I=h[w];I.onProgress&&I.onProgress(C)}p.enqueue(x),T()}},M=>{p.error(M)})}}});return new Response(m)}else throw new ax(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{fi.add(e,l);const h=zn[e];delete zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=zn[e];if(h===void 0)throw this.manager.itemError(e),l;delete zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cx extends Ws{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Sr("img");function c(){h(),fi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class lx extends Ws{constructor(e){super(e)}load(e,t,n,i){const r=new Mt,o=new cx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class yr extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class hx extends yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const va=new He,zh=new P,kh=new P;class il{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(zh),kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kh),t.updateMatrixWorld(),va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ux extends il{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ps*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dx extends yr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ux}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vh=new He,ir=new P,ya=new P;class fx extends il{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(ir),ya.copy(n.position),ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ya),n.updateMatrixWorld(),i.makeTranslation(-ir.x,-ir.y,-ir.z),Vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh)}}class px extends yr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mx extends il{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sd extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new mx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _x extends yr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class gx extends Ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return fi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),fi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});fi.add(e,c),r.manager.itemStart(e)}}class xx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wh(){return performance.now()}const sl="\\[\\]\\.:\\/",Sx=new RegExp("["+sl+"]","g"),rl="[^"+sl+"]",Ex="[^"+sl.replace("\\.","")+"]",Tx=/((?:WC+[\/:])*)/.source.replace("WC",rl),Mx=/(WCOD+)?/.source.replace("WCOD",Ex),Ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rl),vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rl),yx=new RegExp("^"+Tx+Mx+Ax+vx+"$"),bx=["material","materials","bones","map"];class Rx{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sx,"")}static parseTrackName(e){const t=yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);bx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=Rx;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);function bn(s){return`#${s.toString(16).padStart(6,"0")}`}function nn(s,e){const t=s>>16&255,n=s>>8&255,i=s&255;return`rgba(${t},${n},${i},${e})`}const ge={NEON_PINK:14747136,NEON_BLUE:16638023,NEON_PURPLE:3568070,NEON_ORANGE:16746240,ROAD_DARK:6052962,TRAFFIC_BODY_COMPACT:2763314,TRAFFIC_BODY_TRUCK:1842212,TRAFFIC_BODY_RACING_BLUE:3568070,SKY:8308991,TAXI_BODY:15658994,TAXI_ROOF_LIGHT:53950,TAIL_LIGHT:12845056,HEADLIGHT:16775408,LANE_MARKING:16777215,UI_TEXT:16317180,UI_DIM:10265519,UI_BG_APP:1381662,UI_OUTLINE:0,DRAFT_BAR_TRACK:989734,SLIPSTREAM_WIND:53950,SLIPSTREAM_OUTLINE:14747136,TAXI_ROOF_DRAFT_AMBER:16755200,SLINGSHOT_TRAIL_LEFT:14747136,SLINGSHOT_TRAIL_RIGHT:14747136,FPS_TELEMETRY:2278750,HUD_SCORE_GLOW:14747136,SCREEN_FLASH_TINT:14747136,AMBIENT_LIGHT:16777215,DIRECTIONAL_LIGHT:16774630,HEMISPHERE_SKY:8898815,HEMISPHERE_GROUND:6974050,METALLIC_SILVER:13751771,CARBON_BLACK:1710622,NIGHT_NAVY:1981023,BRITISH_GREEN:36715,BORDEAUX:7019578,SAFETY_YELLOW:16638023},wx=[{red:ge.NEON_PINK,white:ge.TAXI_BODY,blue:ge.NEON_PURPLE},{red:ge.NEON_BLUE,white:ge.CARBON_BLACK,blue:ge.NEON_PINK},{red:ge.NEON_ORANGE,white:ge.UI_TEXT,blue:ge.NEON_PURPLE},{red:ge.NEON_PURPLE,white:ge.METALLIC_SILVER,blue:ge.NEON_ORANGE},{red:ge.TRAFFIC_BODY_COMPACT,white:ge.TAXI_BODY,blue:ge.NEON_BLUE},{red:ge.NEON_PINK,white:ge.TRAFFIC_BODY_COMPACT,blue:ge.NEON_BLUE},{red:ge.TRAFFIC_BODY_TRUCK,white:ge.UI_TEXT,blue:ge.NEON_PINK},{red:ge.NEON_BLUE,white:ge.NEON_PINK,blue:ge.NEON_PURPLE},{red:ge.NEON_ORANGE,white:ge.CARBON_BLACK,blue:ge.NEON_BLUE},{red:ge.NEON_PURPLE,white:ge.CARBON_BLACK,blue:ge.NEON_ORANGE},{red:ge.BRITISH_GREEN,white:ge.CARBON_BLACK,blue:ge.NEON_ORANGE},{red:ge.METALLIC_SILVER,white:ge.NIGHT_NAVY,blue:ge.NEON_PINK},{red:ge.NIGHT_NAVY,white:ge.UI_TEXT,blue:ge.NEON_BLUE},{red:ge.BORDEAUX,white:ge.TAXI_BODY,blue:ge.NEON_PURPLE},{red:ge.CARBON_BLACK,white:ge.SAFETY_YELLOW,blue:ge.NEON_PINK},{red:ge.NEON_PURPLE,white:ge.NEON_ORANGE,blue:ge.CARBON_BLACK},{red:ge.NEON_BLUE,white:ge.METALLIC_SILVER,blue:ge.BRITISH_GREEN},{red:ge.NEON_ORANGE,white:ge.BORDEAUX,blue:ge.NEON_BLUE},{red:ge.TAXI_BODY,white:ge.NIGHT_NAVY,blue:ge.NEON_PINK},{red:ge.TRAFFIC_BODY_RACING_BLUE,white:ge.UI_DIM,blue:ge.NEON_ORANGE}],y={GAME_WIDTH:390,GAME_HEIGHT:844,CAMERA_HEIGHT:3.5,CAMERA_DISTANCE:10.5,CAMERA_LOOK_AHEAD:7.5,CAMERA_LOOK_AT_Y:1,CAMERA_FRAMING_BOTTOM_PCT:.2,CAMERA_FRAMING_DISTANCE_GAIN:.65,CAMERA_ANGLE:-45,CAMERA_FOV_BASE:55,CAMERA_FOV_MAX:65,CAMERA_FOV_LERP:.02,CAMERA_SHAKE_INTENSITY:.03,CAMERA_SHAKE_DECAY:.9,LANE_COUNT:3,LANE_WIDTH:2.5,LANE_SWITCH_DURATION:150,ROAD_SEGMENT_LENGTH:20,ROAD_VISIBLE_SEGMENTS:8,ROAD_WIDTH:10,ROAD_SEGMENT_VISUAL_WIDTH:20,ROAD_SEGMENT_GLB:null,ROAD_SEGMENT_GLB_WIDTH:20,ROAD_SEGMENT_GLB_DEPTH:20,ROAD_ENVIRONMENTS:[["env1-1.glb","env1-2.glb"],["env2-1.glb","env2-2.glb"],["env3-1.glb","env3-2.glb"]],ROAD_ENV_SEGMENTS_PER_PHASE:20,ROAD_ENV_GLB_WIDTH:0,ROAD_ENV_GLB_DEPTH:0,ROAD_ASPHALT_TILE_WORLD:2.75,ROAD_LANE_DASH_LENGTH:2.5,ROAD_LANE_DASH_GAP:2,ROAD_LANE_MARKING_WIDTH:.12,ROAD_LANE_EDGE_INSET:.38,ROAD_LANE_MARKING_EMISSIVE:.18,FOG_NEAR:25,FOG_FAR:120,BASE_SCROLL_SPEED:.3,MAX_SCROLL_SPEED:.75,BASE_SPEED_BONUS_DECAY_PER_SECOND:.035,SLINGSHOT_SPEED_BURST:0,SLINGSHOT_BURST_DURATION:750,SLINGSHOT_BASE_SPEED_INCREMENT:.07,SLIPSTREAM_ZONE_WIDTH:2,SLIPSTREAM_ZONE_DEPTH:10,DRAFT_FILL_RATE:.05,DRAFT_BAR_WIDTH:1.55,DRAFT_BAR_DEPTH:.1,DRAFT_BAR_OFFSET_Y:.035,DRAFT_BAR_INSET_FROM_FRONT:.38,DRAFT_TAIL_BRIGHTNESS_MUL:4,SLIPSTREAM_WIND_PARTICLES_PER_VEHICLE:0,SLIPSTREAM_WIND_POINT_SIZE:.165,SLIPSTREAM_WIND_OPACITY:.5,SLIPSTREAM_WIND_COLOR:ge.SLIPSTREAM_WIND,SLIPSTREAM_WIND_Y:.52,SLIPSTREAM_WIND_Y_SPREAD:.38,SLIPSTREAM_WIND_DOWN_SPEED:6.5,SLIPSTREAM_WIND_TURBULENCE:1.1,SLIPSTREAM_WIND_X_INSET:.1,SLIPSTREAM_WIND_SIDE_STRIP_WIDTH:.24,SLIPSTREAM_ZONE_OUTLINE_ENABLED:!1,SLIPSTREAM_ZONE_OUTLINE_COLOR:ge.SLIPSTREAM_OUTLINE,SLIPSTREAM_ZONE_OUTLINE_Y:.05,SLIPSTREAM_ZONE_OUTLINE_THICKNESS:.06,SLIPSTREAM_ZONE_OUTLINE_GLOW_SCALE:2.15,SLIPSTREAM_ZONE_OUTLINE_OPACITY:.8,SLIPSTREAM_ZONE_OUTLINE_GLOW_OPACITY:.28,SLIPSTREAM_ZONE_OUTLINE_DASH_SPEED:8.5,SLIPSTREAM_ZONE_OUTLINE_DASHES_PER_SIDE:10,SLIPSTREAM_ZONE_OUTLINE_DASH_DUTY:.58,CHAIN_TIMEOUT:3e3,CHAIN_MILESTONES:[5,10,15,20],CHAIN_SCORE_BASE:50,TRAFFIC_PHASES:[{startTime:0,spawnRate:1400,lanes:[0,1,2],speedVariance:.1,laneChange:!0},{startTime:15e3,spawnRate:1e3,lanes:[0,1,2],speedVariance:.25,laneChange:!0},{startTime:45e3,spawnRate:700,lanes:[0,1,2],speedVariance:.4,laneChange:!0},{startTime:9e4,spawnRate:450,lanes:[0,1,2],speedVariance:.6,laneChange:!0}],VEHICLE_TYPES:1,VEHICLE_LANE_CHANGE_TRIGGER_AHEAD_Z:40,VEHICLE_LANE_CHANGE_CHANCE:.25,VEHICLE_LANE_CHANGE_TOTAL_MS:500,VEHICLE_LANE_CHANGE_SIGNAL_PORTION:.5,VEHICLE_LANE_CHANGE_SIGNAL_OFFSET_FRAC:.18,VEHICLE_TRAFFIC_FORWARD_SPEED:.15,VEHICLE_TRAFFIC_MIN_APPROACH:.02,VEHICLE_POOL_SIZE:20,TRAFFIC_SPAWN_AHEAD_Z:70,TRAFFIC_SPAWN_AHEAD_Z_JITTER:12,TRAFFIC_SPAWN_MIN_Z_BUFFER:6,TRAFFIC_HEADLIGHT_BEAM_NEAR_FRAC:.14,TRAFFIC_HEADLIGHT_BEAM_FAR_FRAC:.48,TRAFFIC_HEADLIGHT_BEAM_FAR_SOFT_FRAC:.62,TRAFFIC_HEADLIGHT_BEAM_DEPTH:2.35,TRAFFIC_HEADLIGHT_BEAM_SOFT_DEPTH:2.55,TRAFFIC_HEADLIGHT_BEAM_Y:.08,TRAFFIC_HEADLIGHT_BEAM_OPACITY:.18,TRAFFIC_HEADLIGHT_BEAM_SOFT_OPACITY:.088,TRAFFIC_HEADLIGHT_MATCH_MAX_DIST:12,FLOW_RAILS_ENABLED:!0,FLOW_RAILS_START_MS:1e4,FLOW_RAILS_GAP_SPAWNS:8,FLOW_RAILS_SPAWN_RATE_SCALE:.8,FLOW_RAILS_SPEED_VARIANCE_SCALE:.35,FLOW_RAILS_PATTERNS:[[1,0,1,2,1,0],[0,1,2,1,0,1],[1,2,1,0,1,2],[0,1,2,1,0,1],[2,1,0,1,2,1]],TAXI_BODY_ROLL:-5,TAXI_ROLL_DURATION:300,TAXI_WHEEL_TURN:5,TAXI_POSITION_Z:0,TAXI_INTRO_START_Z_OFFSET:-8,TAXI_INTRO_DURATION_MS:400,PLAYER_CAR_GLB:"playerCar.glb",PLAYER_CAR_Y_OFFSET:0,TAXI_DIMENSIONS:{width:2.1,height:1,length:4},TRAFFIC_MATERIAL_RED:"red",TRAFFIC_MATERIAL_WHITE:"white",TRAFFIC_MATERIAL_BLUE:"blue",TRAFFIC_DRAFT_TAIL_MATERIAL_NAME:"red",TRAFFIC_LIVERY_IGNORE_TEXTURES:!0,TRAFFIC_LIVERY_VARIANTS:wx,TAXI_WORLD_HUD_CHAIN_BELOW_DRAFT_GAP:.65,TAXI_WORLD_HUD_SCORE_BEHIND_Z:.55,TAXI_WORLD_HUD_SCORE_Y_FRAC:.52,TAXI_WORLD_HUD_CHAIN_SCALE_X:1.4,TAXI_WORLD_HUD_CHAIN_SCALE_Y:.55,TAXI_WORLD_HUD_SCORE_SCALE_X:2.8,TAXI_WORLD_HUD_SCORE_SCALE_Y:.75,TAXI_COLLISION_Z_HALF_SCALE:.9,TAXI_ROOF_LIGHT_DRAFT:ge.TAXI_ROOF_DRAFT_AMBER,TAXI_ROOF_LIGHT_M10_FLASH_MS:2e3,TAXI_ROOF_LIGHT_M10_PULSE_HZ:5,TAXI_ROOF_LIGHT_M20_STROBE_HZ:7,TAXI_ROOF_LIGHT_DRAFT_PULSE_SCALE:.007,DISTANCE_SCORE_RATE:1,DISTANCE_SCORE_INTERVAL:5,SCREEN_FLASH_DURATION:100,PERFECT_FLASH_DURATION_MS:280,PERFECT_MILESTONE_HOLD_MS:1200,CHAIN_POP_SCALE:1.3,CHAIN_POP_DURATION:200,AUDIO_ENABLED:!0,AUDIO_MASTER:.45,AUDIO_ENGINE_ENABLED:!0,AUDIO_ENGINE_GAIN:.28,AUDIO_ENGINE_GAIN_MIN_MIX:.45,AUDIO_ENGINE_HZ_MIN:140,AUDIO_ENGINE_HZ_MAX:420,AUDIO_ENGINE_FILTER_HZ:2800,AUDIO_ENGINE_BURST_HZ_ADD:60,AUDIO_ENGINE_BURST_GAIN_MUL:1.35,AUDIO_WIND_GAIN:.08,AUDIO_WIND_MIN_MIX:.55,AUDIO_WIND_FILTER_HZ:1200,AUDIO_WIND_NOISE_SEC:2,AUDIO_DRAFT_GAIN:.1,AUDIO_DRAFT_MIN_MIX:.22,AUDIO_DRAFT_HZ:288,AUDIO_LOOP_SMOOTH:10,AUDIO_SLINGSHOT_GAIN:.42,AUDIO_SLINGSHOT_DURATION:.2,AUDIO_SLINGSHOT_BP_HZ_START:420,AUDIO_SLINGSHOT_BP_HZ_END:2600,AUDIO_MILESTONE_GAIN:.22,AUDIO_CRASH_GAIN:.48,AUDIO_CRASH_DURATION:.38,AUDIO_CRASH_LP_HZ:420,AUDIO_TRAFFIC_ENABLED:!0,AUDIO_TRAFFIC_VOICES:6,AUDIO_TRAFFIC_MAX_GAIN:.1,AUDIO_TRAFFIC_MAX_DISTANCE:50,AUDIO_TRAFFIC_HZ_BASE:155,AUDIO_TRAFFIC_HZ_VARIATION:35,AUDIO_TRAFFIC_FILTER_HZ:2800,AUDIO_TRAFFIC_PAN_RANGE:3.5,AUDIO_TRAFFIC_DOPPLER_STRENGTH:.18,AUDIO_TRAFFIC_DOPPLER_REF_DIST:25,AUDIO_TRAFFIC_SMOOTH:8,AUDIO_MUSIC_ENABLED:!0,AUDIO_MUSIC_MASTER:3.5,AUDIO_MUSIC_BPM:110,AUDIO_MUSIC_LAYER_SMOOTH:8,AUDIO_MUSIC_PLAY_FADE_SMOOTH:28,AUDIO_BG_MUSIC_ENABLED:!1,AUDIO_BG_MUSIC_FILE:"thousandsuns.mp3",AUDIO_BG_MUSIC_VOLUME:0,AUDIO_MUSIC_MIX_INNER:1,AUDIO_MUSIC_BASS_HZ:65.41,AUDIO_MUSIC_BASS_GAIN:.22,AUDIO_MUSIC_PAD_ROOT_HZ:130.81,AUDIO_MUSIC_PAD_FIFTH_HZ:196,AUDIO_MUSIC_PAD_GAIN:.1,AUDIO_MUSIC_LAYER1_HZ:392,AUDIO_MUSIC_LAYER1_MAX:.1,AUDIO_MUSIC_LAYER2_HZ:440,AUDIO_MUSIC_LAYER2_MAX:.09,AUDIO_MUSIC_LAYER3_HZ:987.77,AUDIO_MUSIC_LAYER3_MAX:.08,AUDIO_MUSIC_LAYER4_BP_HZ:2400,AUDIO_MUSIC_LAYER4_MAX:.055,AUDIO_MUSIC_KICK_HZ:58,AUDIO_MUSIC_KICK_PEAK:.38,AUDIO_MUSIC_HAT_GAIN:.12,AUDIO_MUSIC_HAT_LAYER_MAX:.45,TONE_MAPPING_EXPOSURE:1.05,SPEED_LINES_COUNT:30,SPEED_LINES_BASE_ALPHA:.3,SPEED_LINES_MAX_ALPHA:.8,SLINGSHOT_TRAIL_STREAK_COUNT:4,SLINGSHOT_TRAIL_DURATION_MS:500,SLINGSHOT_TRAIL_LENGTH:2,SLINGSHOT_TRAIL_WIDTH:.14,SLINGSHOT_TRAIL_BOX_HEIGHT:.1,SLINGSHOT_TRAIL_SURFACE_Y:1.12,SLINGSHOT_TRAIL_BACK_OFFSET_Z:.85,SLINGSHOT_TRAIL_SCROLL_SCALE:1.05,SLIPSTREAM_ACTIVATE_BURST_WINDOW_SPAWN_PER_SEC:52,SLIPSTREAM_ACTIVATE_BURST_COUNT:56,SLIPSTREAM_ACTIVATE_BURST_POINT_SIZE:.14,SLIPSTREAM_ACTIVATE_BURST_OPACITY:.78,SLIPSTREAM_ACTIVATE_BURST_COLOR:ge.SLIPSTREAM_WIND,SLIPSTREAM_ACTIVATE_BURST_EMIT_Y_FRAC:.35,SLIPSTREAM_ACTIVATE_BURST_EMIT_Z_INSET:.02,SLIPSTREAM_ACTIVATE_BURST_SPREAD_X:.32,SLIPSTREAM_ACTIVATE_BURST_SPREAD_Y:.14,SLIPSTREAM_ACTIVATE_BURST_SPEED_MIN:24,SLIPSTREAM_ACTIVATE_BURST_SPEED_MAX:42,SLIPSTREAM_ACTIVATE_BURST_LATERAL_SCALE:.32,SLIPSTREAM_ACTIVATE_BURST_SCREEN_DOWN_Y:-.2,SLIPSTREAM_ACTIVATE_BURST_Y_JITTER:1.5,SLIPSTREAM_ACTIVATE_BURST_LIFE_MIN:.26,SLIPSTREAM_ACTIVATE_BURST_LIFE_MAX:.52,SLIPSTREAM_ACTIVATE_BURST_DRAG:.9,SLIPSTREAM_ACTIVATE_BURST_GRAVITY:2.2,PALETTE:ge,TOUCH_CENTER_DEAD_ZONE_PX:19,SWIPE_THRESHOLD:30,SWIPE_MAX_TIME:300,AMBIENT_LIGHT_INTENSITY:.55,DIRECTIONAL_LIGHT_INTENSITY:1.35,DIRECTIONAL_LIGHT_POSITION:[12,28,10],HEMISPHERE_LIGHT_INTENSITY:.65};class Ix{constructor(){this._state="playing",this._callbacks=[]}get current(){return this._state}get isPlaying(){return this._state==="playing"}onChange(e){this._callbacks.push(e)}transition(e){this._state!==e&&(this._state=e,this._callbacks.forEach(t=>t(e)))}reset(){this._state="playing"}}function ba(s){return 1+2.70158*(s-1)**3+1.70158*(s-1)**2}class Cx{constructor(e){this._laneIndex=1,this._fromLane=1,this._fromX=0,this._toLane=1,this._switching=!1,this._switchStartMs=0,this._rollSpringing=!1,this._springStartMs=0,this._springDir=1,this._enabled=!0,this._onSwitchCb=null,this.target=e,this._fromX=this.laneIndexToX(1),this.bindPointer(),this.bindKeyboard()}onSwitch(e){this._onSwitchCb=e}set enabled(e){this._enabled=e}get laneIndex(){return this._switching?this._toLane:this._laneIndex}reset(){this._laneIndex=1,this._fromLane=1,this._fromX=this.laneIndexToX(1),this._toLane=1,this._switching=!1,this._rollSpringing=!1}laneIndexToX(e){return(e-1)*y.LANE_WIDTH}getLaneX(e){if(!this._switching)return this.laneIndexToX(this._laneIndex);const t=Math.min(1,(e-this._switchStartMs)/y.LANE_SWITCH_DURATION),n=ba(t),i=this._fromX,r=this.laneIndexToX(this._toLane);return t>=1&&(this._springDir=this._toLane>this._fromLane?1:-1,this._rollSpringing=!0,this._springStartMs=e,this._switching=!1,this._laneIndex=this._toLane),i+(r-i)*n}getBodyRollRad(e){const t=Xh*y.TAXI_BODY_ROLL;if(this._switching){const n=Math.min(1,(e-this._switchStartMs)/y.LANE_SWITCH_DURATION);return(Math.sign(this._toLane-this._fromLane)||1)*t*Math.sin(n*Math.PI*.5)}if(this._rollSpringing){const n=(e-this._springStartMs)/y.TAXI_ROLL_DURATION;if(n>=1)return this._rollSpringing=!1,0;const i=Math.min(1,n),r=ba(i);return this._springDir*t*(1-r)}return 0}getWheelSteerRad(e){const t=Xh*y.TAXI_WHEEL_TURN;if(this._switching){const n=Math.min(1,(e-this._switchStartMs)/y.LANE_SWITCH_DURATION);return(Math.sign(this._toLane-this._fromLane)||1)*t*Math.sin(n*Math.PI*.5)}if(this._rollSpringing){const n=(e-this._springStartMs)/y.TAXI_ROLL_DURATION;if(n>=1)return this._rollSpringing=!1,0;const i=Math.min(1,n),r=ba(i);return this._springDir*t*(1-r)}return 0}laneIndexFromRoadU(e){return Math.max(0,Math.min(y.LANE_COUNT-1,Math.floor(e*y.LANE_COUNT)))}laneIndexFromRoadX(e){const t=this.laneIndexToX(0)-y.LANE_WIDTH*.5,n=y.LANE_COUNT*y.LANE_WIDTH,i=(e-t)/n;return this.laneIndexFromRoadU(i)}switchToLane(e){var o;if(!this._enabled)return;const t=Math.max(0,Math.min(y.LANE_COUNT-1,e)),n=performance.now(),i=this.getLaneX(n),r=this.laneIndexFromRoadX(i);t!==r&&(this._laneIndex=r,this._fromLane=r,this._fromX=i,this._toLane=t,this._switching=!0,this._switchStartMs=n,this._rollSpringing=!1,(o=this._onSwitchCb)==null||o.call(this))}onHalfScreenTap(e){if(!this._enabled)return;const t=this.target.getBoundingClientRect(),n=t.left+t.width*.5,i=e-n;if(Math.abs(i)<=y.TOUCH_CENTER_DEAD_ZONE_PX)return;const r=performance.now(),o=this.laneIndexFromRoadX(this.getLaneX(r));i<0?this.switchToLane(o+1):this.switchToLane(o-1)}bindPointer(){this.target.addEventListener("pointerdown",e=>{!this._enabled||e.button===2||this.onHalfScreenTap(e.clientX)})}bindKeyboard(){window.addEventListener("keydown",e=>{this._enabled&&(e.code==="ArrowLeft"||e.code==="KeyA"?(e.preventDefault(),this.switchToLane(this.laneIndexFromRoadX(this.getLaneX(performance.now()))+1)):(e.code==="ArrowRight"||e.code==="KeyD")&&(e.preventDefault(),this.switchToLane(this.laneIndexFromRoadX(this.getLaneX(performance.now()))-1)))})}}const Xh=Math.PI/180;function qh(s,e){if(e===nf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===xc||e===Cu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===xc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class rd extends Ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ox(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Kx(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=mr.extractUrlBase(e);o=mr.resolveURL(l,this.path)}else o=mr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new id(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===od){try{o[Ze.KHR_BINARY_GLTF]=new jx(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new lS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new Nx;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new $x(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new Jx;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new Qx;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Lx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Px{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Xt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new sd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new px(h),l.distance=u;break;case"spot":l=new dx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Wn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Nx{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return kt}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(i)}}class Dx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Ox{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(a,a)}return Promise.all(r)}}class Ux{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Fx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Bx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Hx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Gx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],Xt),Promise.all(r)}}class zx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class kx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Tt)),Promise.all(r)}}class Vx{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Wx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Xx{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class qx{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Yx{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Zx{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Kx{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==hn.TRIANGLES&&l.mode!==hn.TRIANGLE_STRIP&&l.mode!==hn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const _ of u){const g=new He,m=new P,p=new xi,T=new P(1,1,1),M=new Qu(_.geometry,_.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&T.fromBufferAttribute(c.SCALE,x),M.setMatrixAt(x,g.compose(m,p,T));for(const x in c)if(x==="_COLOR_0"){const C=c[x];M.instanceColor=new Do(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,c[x]);ut.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const od="glTF",sr=12,Yh={JSON:1313821514,BIN:5130562};class jx{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,sr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==od)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-sr,r=new DataView(e,sr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Yh.JSON){const l=new Uint8Array(e,sr+o,a);this.content=n.decode(l)}else if(c===Yh.BIN){const l=sr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $x{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Ac[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ac[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ms[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}u(f)},a,l,Xt,d)})})}}class Jx{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Qx{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class ad extends vr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,_=e*l,g=_-l,m=-2*f+3*d,p=f-d,T=1-m,M=p-d+u;for(let x=0;x!==a;x++){const C=o[g+x+a],w=o[g+x+c]*h,b=o[_+x+a],I=o[_+x]*h;r[x]=T*C+M*w+m*b+p*I}return r}}const eS=new xi;class tS extends ad{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return eS.fromArray(r).normalize().toArray(r),r}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zh={9728:Wt,9729:Lt,9984:Eu,9985:xo,9986:ar,9987:Yn},Kh={33071:di,33648:Lo,10497:Is},Ra={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ac={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nS={CUBICSPLINE:void 0,LINEAR:xr,STEP:gr},wa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new on({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),s.DefaultMaterial}function bi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sS(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function rS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oS(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ia(t.attributes):e=s.indices+":"+Ia(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ia(s.targets[n]);return e}function Ia(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function vc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const cS=new He;class lS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Lx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new lx(this.options.manager):this.textureLoader=new gx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new id(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return bi(r,a,i),Wn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(mr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ra[i.type],a=Ms[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new mt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ra[i.type],l=Ms[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(f&&f!==u){const p=Math.floor(d/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(T);M||(g=new l(a,p*f,i.count*f/h),M=new Ku(g,f/h),t.cache.add(T,M)),m=new Er(M,c,d%f/h,_)}else a===null?g=new l(i.count*c):g=new l(a,d,i.count*c),m=new mt(g,c,_);if(i.sparse!==void 0){const p=Ra.SCALAR,T=Ms[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,C=new T(o[1],M,i.sparse.count*p),w=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,I=C.length;b<I;b++){const A=C[b];if(m.setX(A,w[b*c]),c>=2&&m.setY(A,w[b*c+1]),c>=3&&m.setZ(A,w[b*c+2]),c>=4&&m.setW(A,w[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Zh[d.magFilter]||Lt,h.minFilter=Zh[d.minFilter]||Yn,h.wrapS=Kh[d.wrapS]||Is,h.wrapT=Kh[d.wrapT]||Is,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Wt&&h.minFilter!==Lt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Mt(g);m.needsUpdate=!0,d(m)}),t.load(mr.resolveURL(u,r.path),_,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Wn(u,o),u.userData.mimeType=o.mimeType||aS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Gs,pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Jc,pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return on}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=i[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Xt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Rt);const h=r.alphaMode||wa.OPAQUE;if(h===wa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===wa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==kt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Fe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==kt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==kt){const u=r.emissiveFactor;a.emissive=new Le().setRGB(u[0],u[1],u[2],Xt)}return r.emissiveTexture!==void 0&&o!==kt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Wn(u,r),t.associations.set(u,{materials:e}),r.extensions&&bi(i,u,r),u})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return jh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=oS(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=jh(new St,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?iS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,_=h.length;f<_;f++){const g=h[f],m=o[f];let p;const T=l[f];if(m.mode===hn.TRIANGLES||m.mode===hn.TRIANGLE_STRIP||m.mode===hn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new X0(g,T):new Se(g,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===hn.TRIANGLE_STRIP?p.geometry=qh(p.geometry,Cu):m.mode===hn.TRIANGLE_FAN&&(p.geometry=qh(p.geometry,xc));else if(m.mode===hn.LINES)p=new ed(g,T);else if(m.mode===hn.LINE_STRIP)p=new Qc(g,T);else if(m.mode===hn.LINE_LOOP)p=new Z0(g,T);else if(m.mode===hn.POINTS)p=new zs(g,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&rS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Wn(p,r),m.extensions&&bi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,_=u.length;f<_;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&bi(i,u[0],r),u[0];const d=new lt;r.extensions&&bi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=u.length;f<_;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(Kn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Zc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new He;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new $c(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],_=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,T=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],_=u[2],g=u[3],m=u[4],p=[];for(let T=0,M=d.length;T<M;T++){const x=d[T],C=f[T],w=_[T],b=g[T],I=m[T];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const A=n._createAnimationTracks(x,C,w,b,I);if(A)for(let S=0;S<A.length;S++)p.push(A[S])}return new nx(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,cS)});for(let f=0,_=u.length;f<_;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new $u:l.length>1?h=new lt:l.length===1?h=l[0]:h=new ut,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Wn(h,r),r.extensions&&bi(n,h,r),r.matrix!==void 0){const u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new lt;n.name&&(r.name=i.createUniqueName(n.name)),Wn(r,n),n.extensions&&bi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof pn||d instanceof Mt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];ci[r.path]===ci.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ci[r.path]){case ci.weights:l=Ds;break;case ci.rotation:l=Os;break;case ci.position:case ci.scale:l=Us;break;default:switch(n.itemSize){case 1:l=Ds;break;case 2:case 3:default:l=Us;break}break}const h=i.interpolation!==void 0?nS[i.interpolation]:xr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const _=new l(c[d]+"."+ci[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Os?tS:ad;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hS(s,e,t){const n=e.attributes,i=new qt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const h=vc(Ms[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=vc(Ms[d.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ln;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function jh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Ac[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return $e.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Wn(s,e),hS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?sS(s,e.targets,t):s})}function uS(s){const e=Math.sin(s*12.9898)*43758.5453123;return e-Math.floor(e)}function dS(s,e){s.updateMatrixWorld(!0);let t=!1;return s.traverse(n=>{if(!(n instanceof Se)||!n.geometry)return;const i=n.geometry;i.boundingBox||i.computeBoundingBox();const r=i.boundingBox;if(!r)return;const o=r.clone();o.applyMatrix4(n.matrixWorld),t?e.union(o):(e.copy(o),t=!0)}),t}function fS(s,e,t,n,i,r,o,a){const c=new lt,l=s.scene.clone(!0);c.add(l),l.updateMatrixWorld(!0);const h=new qt;dS(l,h)||h.setFromObject(l);const u=new P;if(h.getSize(u),u.x<1e-4||u.z<1e-4)return console.warn(`RoadManager: ${r} GLB has very small bounds; skipping scale fit`),c;const d=u.x,f=u.z;if(d<1e-4||f<1e-4)return console.warn(`RoadManager: ${r} width/depth refs invalid; skipping scale fit`),c;const _=e/d,g=t/f,m=(_+g)*.5;l.scale.set(_,m,g),l.updateMatrixWorld(!0);const p=new qt().setFromObject(l),T=new P;return p.getCenter(T),l.position.x-=T.x,l.position.z-=T.z,l.updateMatrixWorld(!0),c.name=r,c}function pS(s){return fS(s,y.ROAD_SEGMENT_VISUAL_WIDTH,y.ROAD_SEGMENT_LENGTH,y.ROAD_ENV_GLB_WIDTH,y.ROAD_ENV_GLB_DEPTH,"RoadEnvGLB")}function mS(s){return`/slipstream-racing/elman-updates/${s}`}function _S(s){const e=y.ROAD_ENVIRONMENTS,t=y.ROAD_ENV_SEGMENTS_PER_PHASE;if(!e.length||t<=0)return null;const n=Math.floor(s/t)%e.length,i=e[n];if(!i.length)return null;const r=Math.floor(uS(s*7919+n*17)*i.length)%i.length;return i[r]??null}async function gS(s){const e=new Map,t=y.ROAD_ENVIRONMENTS;if(!t.length)return e;const n=new Set;for(const i of t)for(const r of i)n.add(r);return await Promise.all([...n].map(async i=>{try{const r=await s.loadAsync(mS(i));e.set(i,pS(r))}catch(r){console.warn(`RoadManager: failed to load environment GLB "${i}"`,r)}})),e}class ol{constructor(e,t){this.group=new lt,this.segments=[],this.recycleBehind=40,this.playerZ=e,this.group.name="RoadGroup",this.envTemplates=t.size>0?t:null,this.nextSegmentIndex=y.ROAD_VISIBLE_SEGMENTS,this.buildSegments()}static async create(e){const t=new rd,n=await gS(t);return new ol(e,n)}makeEnvHolder(){if(!this.envTemplates)return null;const e=new lt;return e.name="RoadEnvHolder",e}applyEnvironmentToSegment(e){if(!e.envHolder||!this.envTemplates)return;for(;e.envHolder.children.length>0;)e.envHolder.remove(e.envHolder.children[0]);const t=_S(e.segmentIndex);if(!t)return;const n=this.envTemplates.get(t);if(!n)return;const i=n.clone(!0);i.traverse(r=>{r.isMesh&&(r.receiveShadow=!0)}),e.envHolder.add(i)}pushSegment(e,t,n){const i=this.makeEnvHolder();i&&e.add(i),this.group.add(e);const r={root:e,zCenter:t,segmentIndex:n,envHolder:i};i&&this.applyEnvironmentToSegment(r),this.segments.push(r)}buildSegments(){const e=y.ROAD_SEGMENT_LENGTH,t=y.ROAD_VISIBLE_SEGMENTS,n=this.playerZ-this.recycleBehind+e*.5;for(let i=0;i<t;i++){const r=new lt,o=n+i*e;r.position.z=o,this.pushSegment(r,o,i)}}reset(){const e=y.ROAD_SEGMENT_LENGTH,t=y.ROAD_VISIBLE_SEGMENTS,n=this.playerZ-this.recycleBehind+e*.5;this.nextSegmentIndex=t;for(let i=0;i<t;i++){const r=n+i*e,o=this.segments[i];o.zCenter=r,o.root.position.z=r,o.segmentIndex=i,this.applyEnvironmentToSegment(o)}}update(e){if(e<=0)return 0;const t=y.ROAD_SEGMENT_LENGTH;let n=-1/0,i=0;const r=this.playerZ-3;for(const o of this.segments){const a=o.zCenter;o.zCenter-=e,o.root.position.z=o.zCenter,o.zCenter>n&&(n=o.zCenter),a>=r&&o.zCenter<r&&i++}for(const o of this.segments)o.zCenter<this.playerZ-this.recycleBehind&&(o.zCenter=n+t,o.root.position.z=o.zCenter,n=o.zCenter,o.segmentIndex=this.nextSegmentIndex++,this.applyEnvironmentToSegment(o));return i}}function xS(s){return`/slipstream-racing/elman-updates/${s}`}let Ca=null;function SS(){return Ca||(Ca=new rd().loadAsync(xS(y.PLAYER_CAR_GLB))),Ca}function ES(s){s.traverse(e=>{e instanceof Se&&(Array.isArray(e.material)?e.material=e.material.map(t=>t.clone()):e.material=e.material.clone())})}function TS(s,e,t){s.updateMatrixWorld(!0);const n=new qt().setFromObject(s),i=new P;if(n.getSize(i),i.x<1e-4||i.y<1e-4||i.z<1e-4)return;const r=e.width/i.x,o=e.height/i.y,a=e.length/i.z,c=Math.min(r,o,a);s.scale.setScalar(c),s.updateMatrixWorld(!0);const l=new qt().setFromObject(s),h=new P;l.getCenter(h),s.position.x-=h.x,s.position.z-=h.z,s.position.y-=l.min.y,s.position.y+=t}class MS{constructor(e,t){this.chainBaseScale=new P,this.scoreBaseScale=new P,this.lastChain=1,this.chainPopGen=0;const{scoreY:n,scoreZ:i,draftBarY:r,draftBarZ:o}=t;this.chainCanvas=document.createElement("canvas"),this.chainCanvas.width=256,this.chainCanvas.height=128,this.chainTex=new Hh(this.chainCanvas),this.chainTex.colorSpace=Tt,this.chainTex.minFilter=Lt,this.chainTex.magFilter=Lt,this.scoreCanvas=document.createElement("canvas"),this.scoreCanvas.width=512,this.scoreCanvas.height=160,this.scoreTex=new Hh(this.scoreCanvas),this.scoreTex.colorSpace=Tt,this.scoreTex.minFilter=Lt,this.scoreTex.magFilter=Lt;const a=new Tc({map:this.chainTex,transparent:!0,depthWrite:!1,depthTest:!1}),c=new Tc({map:this.scoreTex,transparent:!0,depthWrite:!1,depthTest:!1});this.chainSprite=new vh(a),this.chainSprite.center.set(.5,.5),this.chainSprite.renderOrder=100,this.scoreSprite=new vh(c),this.scoreSprite.center.set(.5,.5),this.scoreSprite.renderOrder=99,this.chainBaseScale.set(y.TAXI_WORLD_HUD_CHAIN_SCALE_X,y.TAXI_WORLD_HUD_CHAIN_SCALE_Y,1),this.scoreBaseScale.set(y.TAXI_WORLD_HUD_SCORE_SCALE_X,y.TAXI_WORLD_HUD_SCORE_SCALE_Y,1),this.chainSprite.scale.copy(this.chainBaseScale),this.scoreSprite.scale.copy(this.scoreBaseScale),this.scoreSprite.position.set(0,n,i);const l=n+this.scoreBaseScale.y*.5+this.chainBaseScale.y*.5-.3;this.chainSprite.position.set(0,l,i),e.add(this.scoreSprite),e.add(this.chainSprite),this.drawChain(1),this.drawScore(0)}setScore(e){this.drawScore(e)}setChain(e){const t=e>this.lastChain,n=t&&e>1&&e%10===0;if(this.lastChain=e,this.drawChain(e,n),t&&e>1){this.chainPopGen+=1;const i=this.chainPopGen,r=1.6+Math.min(e,25)*.05;n?(this.applyChainScale(3.2),setTimeout(()=>{this.chainPopGen===i&&(this.applyChainScale(1.6),setTimeout(()=>{this.chainPopGen===i&&(this.applyChainScale(2.6),this.drawChain(e),setTimeout(()=>{this.chainPopGen===i&&(this.applyChainScale(1.3),setTimeout(()=>{this.chainPopGen===i&&this.chainSprite.scale.copy(this.chainBaseScale)},150))},140))},130))},100)):(this.applyChainScale(r),setTimeout(()=>{this.chainPopGen===i&&this.chainSprite.scale.copy(this.chainBaseScale)},y.CHAIN_POP_DURATION))}else e===1&&(this.chainPopGen+=1,this.chainSprite.scale.copy(this.chainBaseScale))}applyChainScale(e){this.chainSprite.scale.set(this.chainBaseScale.x*e,this.chainBaseScale.y*e,1)}reset(){this.chainPopGen+=1,this.lastChain=1,this.chainSprite.scale.copy(this.chainBaseScale),this.drawChain(1),this.drawScore(0)}drawChain(e,t=!1){const n=this.chainCanvas.getContext("2d"),i=this.chainCanvas.width,r=this.chainCanvas.height;n.clearRect(0,0,i,r);const o=bn(y.PALETTE.UI_OUTLINE),a=t?"#ffffff":this.chainColor(e),c=e>1?1:.55;if(n.textAlign="center",n.textBaseline="middle",n.font=`700 ${Math.round(r*.5)}px "Exo 2", system-ui, sans-serif`,n.globalAlpha=c,n.lineJoin="round",n.lineWidth=Math.max(5,Math.round(r*.12)),n.strokeStyle=o,n.fillStyle=a,e>=5){const l=Math.min(1,(e-5)/15);n.shadowColor=a,n.shadowBlur=8+l*24}t&&(n.shadowColor="#ffffff",n.shadowBlur=40),n.strokeText(`×${e}`,i/2,r/2),n.fillText(`×${e}`,i/2,r/2),n.globalAlpha=1,n.shadowBlur=0,this.chainTex.needsUpdate=!0}chainColor(e){if(e<=1)return bn(y.PALETTE.NEON_BLUE);const t=Math.min(1,(e-1)/19);let n,i,r;if(t<=.5){const o=t*2;n=Math.round(253+2*o),i=Math.round(224+-89*o),r=Math.round(71*(1-o))}else{const o=(t-.5)*2;n=Math.round(255+-30*o),i=Math.round(135*(1-o)),r=0}return`rgb(${n},${i},${r})`}drawScore(e){const t=this.scoreCanvas.getContext("2d"),n=this.scoreCanvas.width,i=this.scoreCanvas.height;t.clearRect(0,0,n,i);const r=e.toLocaleString(),o=bn(y.PALETTE.UI_TEXT);t.textAlign="center",t.textBaseline="middle",t.font=`800 ${Math.round(i*.34)}px "Exo 2", system-ui, sans-serif`,t.fillStyle=o,t.shadowColor=nn(y.PALETTE.HUD_SCORE_GLOW,.35),t.shadowBlur=22,t.fillText(r,n/2,i/2),t.shadowBlur=0,this.scoreTex.needsUpdate=!0}dispose(){this.chainPopGen+=1,this.chainTex.dispose(),this.scoreTex.dispose(),this.chainSprite.material.dispose(),this.scoreSprite.material.dispose()}}const Fs=[{id:"white",name:"Arctic White",hex:15658994,unlockScore:0},{id:"ferrariRed",name:"Ferrari Red",hex:14417920,unlockScore:500},{id:"mclarenPapaya",name:"McLaren Papaya",hex:16746240,unlockScore:3e3},{id:"mercedesSilver",name:"Mercedes Silver",hex:12634320,unlockScore:15e3},{id:"redBullNavy",name:"Red Bull Navy",hex:1981023,unlockScore:5e4},{id:"astonGreen",name:"Aston Martin Green",hex:36715,unlockScore:5e4},{id:"alpineBlue",name:"Alpine Blue",hex:37119,unlockScore:5e4},{id:"haasBlackGold",name:"Haas Black/Gold",hex:1710622,unlockScore:5e4}],Tr=[{id:"standard",name:"Standard Black",color:1710622,accent:3355448,unlockScore:0},{id:"gold",name:"Gold Rims",color:1710622,accent:13936707,unlockScore:2e3},{id:"chrome",name:"Chrome Rims",color:1710622,accent:13751771,unlockScore:7500},{id:"redStriped",name:"Red Striped",color:1710622,accent:14417920,unlockScore:3e4}],Mr=[{id:"matchBody",name:"Match Body",hex:null,unlockScore:0},{id:"carbonBlack",name:"Carbon Black",hex:1710622,unlockScore:7500},{id:"neonPink",name:"Neon Pink",hex:14747136,unlockScore:15e3},{id:"neonBlue",name:"Neon Blue",hex:37119,unlockScore:3e4}],Ot=5.6,Ri=2,$h=new on({color:1710618,roughness:.92,metalness:0});function Jh(s){return new on({color:s,metalness:.4,roughness:.35})}function AS(){return new on({color:1842210,metalness:.15,roughness:.85})}function Bo(s){return new on({color:s,metalness:.85,roughness:.15})}function po(s,e,t,n){const i=new lt,r=e,o=new Se(new jn(s,s,r,24),$h.clone());o.material.color.setHex(t),o.rotation.x=Math.PI/2,i.add(o);const a=s*.78,c=new Se(new tl(a,s,24),$h.clone());c.position.z=r/2+.001,i.add(c);const l=c.clone();l.position.z=-r/2-.001,l.rotation.y=Math.PI,i.add(l);const h=new Se(new jn(a,a,e*.85,20),Bo(n));h.rotation.x=Math.PI/2,i.add(h);const u=new Se(new jn(s*.14,s*.14,e*.92,6),Bo(10066329));u.rotation.x=Math.PI/2,i.add(u);const d=new Se(new jn(s*.5,s*.5,e*.1,16),new on({color:3351074,emissive:4460800,emissiveIntensity:.5}));return d.rotation.x=Math.PI/2,i.add(d),i}function vS(s){const e=new lt,t=new Se(new Fo(.14,12,10,0,Math.PI*2,0,Math.PI*.65),new on({color:s,metalness:.5,roughness:.3}));e.add(t);const n=new Se(new Fo(.145,12,4,-Math.PI*.4,Math.PI*.8,Math.PI*.15,Math.PI*.2),new on({color:1118498,metalness:.7,roughness:.1}));return e.add(n),e}const yS={starter:{noseTaper:.5,noseDropY:.3,bodyWidth:.32,sidePodScale:1,sidePodCut:.3,frontWingSpan:.95,frontWingElements:2,rearWingWidth:.72,rearWingHeight:1,rearWingChord:1,engineCoverSlim:.5,sharkFin:!1,tWing:!1,wheelSizeMul:1},aeroBeast:{noseTaper:.4,noseDropY:.4,bodyWidth:.3,sidePodScale:1.15,sidePodCut:.6,frontWingSpan:1,frontWingElements:3,rearWingWidth:.8,rearWingHeight:1.15,rearWingChord:1.2,engineCoverSlim:.6,sharkFin:!0,tWing:!1,wheelSizeMul:1},speedDemon:{noseTaper:.8,noseDropY:.2,bodyWidth:.28,sidePodScale:.75,sidePodCut:.5,frontWingSpan:.85,frontWingElements:2,rearWingWidth:.65,rearWingHeight:.88,rearWingChord:.85,engineCoverSlim:.7,sharkFin:!1,tWing:!1,wheelSizeMul:.95},tank:{noseTaper:.3,noseDropY:.25,bodyWidth:.36,sidePodScale:1.2,sidePodCut:.15,frontWingSpan:.92,frontWingElements:2,rearWingWidth:.76,rearWingHeight:1.05,rearWingChord:1.15,engineCoverSlim:.35,sharkFin:!1,tWing:!1,wheelSizeMul:1.1},phantom:{noseTaper:.7,noseDropY:.35,bodyWidth:.27,sidePodScale:.8,sidePodCut:.7,frontWingSpan:.88,frontWingElements:2,rearWingWidth:.68,rearWingHeight:1,rearWingChord:.9,engineCoverSlim:.65,sharkFin:!0,tWing:!0,wheelSizeMul:.95}};function bS(s,e){const t=new lt,n=yS[s],i=Jh(e.bodyColor),r=Jh(e.wingColor),o=AS(),a=Ot/2,c=.05,l=c+.02,h=.3,u=l+h,d=Ri*n.bodyWidth,f=.36*n.wheelSizeMul,_=.3,g=.4,m=Ot*.64,p=m*.42,T=-m*.58,M=Ri*.82,x=Ri*.78,C=Ot*.3,w=new Se(new nt(d,h,C),i);w.position.set(0,l+h/2,Ot*.06),t.add(w);const b=Ot*.06+C/2,I=a-.15,A=I-b,S=d*(1-n.noseTaper*.7),L=h*(.5-n.noseDropY*.3),H=l+L/2+h*(.1-n.noseDropY*.15),B=new Se(new nt(1,1,A),i.clone());B.scale.set((d+S)/2,(h+L)/2,1),B.position.set(0,(l+h/2+H)/2,b+A/2),t.add(B);const q=.22,Y=new Se(new el(S*.4,q,6),i.clone());Y.rotation.x=-Math.PI/2,Y.position.set(0,H,I+q/2),t.add(Y);const X=Ot*.12,K=Ot*.09,V=d*.72,ne=new Se(new nt(V,h*.4,K),new on({color:328968,roughness:.95,metalness:.05}));ne.position.set(0,u-h*.05,X),t.add(ne);const ue=vS(e.helmetColor);ue.position.set(0,u+.06,X+K*.15),ue.rotation.x=-.1,t.add(ue);const me=V*.5,Pe=u+.03,Xe=Bo(5263445),k=new Se(new nt(.04,.04,K*.6),Xe);k.position.set(0,Pe+me*.8,X+K*.45),k.rotation.x=.35,t.add(k);const Q=new Se(new nl(me,.025,6,16,Math.PI*1.1),Xe.clone());Q.rotation.z=Math.PI,Q.position.set(0,Pe+me,X),t.add(Q);for(const ae of[-1,1]){const we=new Se(new nt(.03,me*.8,.03),Xe.clone());we.position.set(ae*me*.9,Pe+me*.4,X-K*.15),t.add(we)}const xe=d*.3,re=.2,Ie=new Se(new nt(xe,re,.14),i.clone());Ie.position.set(0,u+re/2,X-K*.5),t.add(Ie);const Ne=Ot*.06-C/2,Be=T+.12,ot=Ne-Be,je=d*(1-n.engineCoverSlim*.6),pt=h*.72,O=new Se(new nt((d+je)/2,pt,ot),i.clone());if(O.position.set(0,l+pt/2+h*.05,(Ne+Be)/2),t.add(O),n.sharkFin){const ae=h*.55,we=ot*.65,Ye=new Se(new nt(.012,ae,we),i.clone());Ye.position.set(0,u+ae/2,(Ne+Be)/2+ot*.1),t.add(Ye)}if(n.tWing){const ae=d*1.2,we=u+h*.6,Ye=new Se(new nt(ae,.012,.06),r.clone());Ye.position.set(0,we,Be+ot*.12),t.add(Ye)}const Pt=Ot*.28*n.sidePodScale,Ve=h*(.85-n.sidePodCut*.3),Ge=(Ri*.5-d/2)*.65*n.sidePodScale;for(const ae of[-1,1]){const we=new Se(new nt(Ge,Ve,Pt),i.clone());we.position.set(ae*(d/2+Ge/2),l+Ve/2+h*.08,-Ot*.02),t.add(we);const Ye=Ve*.45,Ue=Ge*.7,yt=new Se(new nt(Ue,Ye,.03),new on({color:328968,roughness:.95}));if(yt.position.set(ae*(d/2+Ge/2),l+Ve*.6,-Ot*.02+Pt/2),t.add(yt),n.sidePodCut>.3){const vn=Ve*n.sidePodCut*.4,Vi=new Se(new nt(Ge*.9,vn,Pt*.7),o.clone());Vi.position.set(ae*(d/2+Ge/2),l+vn/2,-Ot*.04),t.add(Vi)}const an=h*.4,Lr=Ot*.06,ki=new Se(new nt(.015,an,Lr),i.clone());ki.position.set(ae*(d/2+.06),l+an/2+.02,p-Ot*.08),ki.rotation.y=ae*.15,t.add(ki)}const be=Ri*n.frontWingSpan,at=a-.06,ye=c+.015;for(let ae=0;ae<n.frontWingElements;ae++){const we=.12-ae*.02,Ye=be*(1-ae*.05),Ue=new Se(new nt(Ye,.015,we),r.clone());Ue.position.set(0,ye+ae*.028,at-ae*.045),Ue.rotation.x=ae*.1,t.add(Ue)}for(const ae of[-1,1]){const we=.1+n.frontWingElements*.025,Ye=.18+n.frontWingElements*.035,Ue=new Se(new nt(.015,we,Ye),r.clone());Ue.position.set(ae*be/2,ye+we/2-.02,at-Ye/2+.08),t.add(Ue)}for(const ae of[-1,1]){const we=new Se(new nt(.02,.015,A*.3),i.clone());we.position.set(ae*S*.25,ye+.01,b+A*.6),t.add(we)}const R=Ri*n.rearWingWidth,E=-a+.25,F=u+.05,j=F+.42*n.rearWingHeight,J=.22*n.rearWingChord,Z=new Se(new nt(R,.025,J),r);Z.position.set(0,j,E),t.add(Z);const Ee=new Se(new nt(R*.9,.018,J*.55),r.clone());Ee.position.set(0,j+.04,E+J*.12),Ee.rotation.x=-.2,t.add(Ee);for(const ae of[-1,1]){const we=j-F,Ye=new Se(new nt(.022,we,.03),r.clone());Ye.position.set(ae*R*.32,F+we/2,E+J*.1),Ye.rotation.z=ae*.04,t.add(Ye)}const oe=.22*n.rearWingHeight;for(const ae of[-1,1]){const we=new Se(new nt(.015,oe,J*1.5),r.clone());we.position.set(ae*R/2,j-oe*.3,E),t.add(we)}const fe=F+(j-F)*.28,Ke=new Se(new nt(R*.65,.012,J*.5),r.clone());Ke.position.set(0,fe,E),t.add(Ke);const ee=Ri*.65,pe=h*.3,Re=Ot*.055,Ce=new Se(new nt(ee,pe,Re),o.clone());Ce.position.set(0,c+pe/2,E+J/2+Re/2+.02),Ce.rotation.x=.25,t.add(Ce);const _e=d*.35,qe=h*.4,Oe=Ot*.07,it=new Se(new nt(_e,qe,Oe),i.clone());it.position.set(0,l+qe/2+h*.1,T-Oe*.3),t.add(it);const N=new Se(new nt(.14,.028,.02),new on({color:13369344,emissive:16720384,emissiveIntensity:.8}));N.position.set(0,F-.02,E+J*.6),t.add(N);const ie=po(f,_,e.wheelColor,e.wheelAccent);ie.rotation.y=Math.PI/2,ie.position.set(-M/2,f,p),t.add(ie);const W=po(f,_,e.wheelColor,e.wheelAccent);W.rotation.y=Math.PI/2,W.position.set(M/2,f,p),t.add(W);const $=po(f,g,e.wheelColor,e.wheelAccent);$.rotation.y=Math.PI/2,$.position.set(-x/2,f,T),t.add($);const ce=po(f,g,e.wheelColor,e.wheelAccent);ce.rotation.y=Math.PI/2,ce.position.set(x/2,f,T),t.add(ce);const le=Bo(4473928);for(const ae of[-1,1]){const we=new Se(new jn(.015,.015,M/2-d/2,4),le);we.rotation.z=Math.PI/2,we.position.set(ae*(d/2+(M/2-d/2)/2),l+h*.6,p+.04),t.add(we);const Ye=we.clone();Ye.position.y=l+h*.15,Ye.position.z=p-.03,t.add(Ye);const Ue=new Se(new jn(.015,.015,x/2-d/2+.1,4),le.clone());Ue.rotation.z=Math.PI/2,Ue.position.set(ae*(d/2+(x/2-d/2)/2),l+h*.5,T+.04),t.add(Ue);const yt=Ue.clone();yt.position.y=l+h*.1,yt.position.z=T-.03,t.add(yt)}return t}const yc=[{id:"starter",name:"Starter",unlockScore:0},{id:"aeroBeast",name:"Aero Beast",unlockScore:1e3},{id:"speedDemon",name:"Speed Demon",unlockScore:5e3},{id:"tank",name:"Tank",unlockScore:1e4},{id:"phantom",name:"Phantom",unlockScore:2e4}];function RS(s,e){const t=Math.round((s>>16&255)*e),n=Math.round((s>>8&255)*e),i=Math.round((s&255)*e);return t<<16|n<<8|i}function cd(s,e,t,n){const i=Fs.find(u=>u.id===e)??Fs[0],r=Tr.find(u=>u.id===t)??Tr[0],o=Mr.find(u=>u.id===n)??Mr[0],a=bS(s,{bodyColor:i.hex,wheelColor:r.color,wheelAccent:r.accent,wingColor:o.hex??i.hex,helmetColor:RS(i.hex,.8)});a.traverse(u=>{u instanceof Se&&(u.castShadow=!0,u.receiveShadow=!0)});const c=y.TAXI_DIMENSIONS;a.updateMatrixWorld(!0);const l=new qt().setFromObject(a),h=new P;if(l.getSize(h),h.x>1e-4&&h.y>1e-4&&h.z>1e-4){const u=Math.min(c.width/h.x,c.height/h.y,c.length/h.z);a.scale.setScalar(u),a.updateMatrixWorld(!0);const d=new qt().setFromObject(a),f=new P;d.getCenter(f),a.position.x-=f.x,a.position.z-=f.z,a.position.y-=d.min.y}return a}function bc(){const s=["starter","aeroBeast","speedDemon","tank","phantom"],e=s[Math.floor(Math.random()*s.length)],t=["white","ferrariRed","mclarenPapaya","mercedesSilver","redBullNavy","astonGreen","alpineBlue","haasBlackGold"],n=t[Math.floor(Math.random()*t.length)],i=["standard","gold","chrome","redStriped"],r=i[Math.floor(Math.random()*i.length)],o=["matchBody","carbonBlack","neonPink","neonBlue"],a=o[Math.floor(Math.random()*o.length)];return cd(e,n,r,a)}class al{constructor(){this.group=new lt,this.dims=y.TAXI_DIMENSIONS,this.currentModelRoot=null,this.turboParticles=null,this.turboVels=null,this.turboAges=null,this.turboN=120,this.turboIntensity=0,this.turboTarget=0,this.milestoneFlashTimer=0,this.group.name="PlayerTaxi",this.chassisGroup=new lt,this.chassisGroup.name="PlayerCarRoot",this.group.add(this.chassisGroup);const{height:e,length:t}=this.dims,n=t/2,i=-t/2,r=y.DRAFT_BAR_WIDTH,o=y.DRAFT_BAR_DEPTH;this.draftBarGroup=new lt,this.draftBarGroup.name="DraftMeterBar",this.draftBarGroup.visible=!1;const a=e+y.DRAFT_BAR_OFFSET_Y,c=n-y.DRAFT_BAR_INSET_FROM_FRONT;this.draftBarGroup.position.set(0,a,c);const l=new kt({color:y.PALETTE.DRAFT_BAR_TRACK,transparent:!0,opacity:.92,side:Rt,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),h=new Se(new Vt(r,o),l);h.rotation.x=-Math.PI/2,this.draftBarGroup.add(h);const u=new kt({color:y.PALETTE.NEON_BLUE,side:Rt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),d=new lt;d.position.set(-r/2,0,0),this.draftBarGroup.add(d);const f=new Vt(r,o);f.translate(r/2,0,0),this.draftFill=new Se(f,u),this.draftFill.rotation.x=-Math.PI/2,this.draftFill.position.y=.004,d.add(this.draftFill),this.draftBarGroup.scale.set(-1,1,1),this.chassisGroup.add(this.draftBarGroup);const _=i-y.TAXI_WORLD_HUD_SCORE_BEHIND_Z,g=e*y.TAXI_WORLD_HUD_SCORE_Y_FRAC;this.worldHud=new MS(this.chassisGroup,{scoreY:g,scoreZ:_,draftBarY:a,draftBarZ:c}),this.worldHud.scoreSprite.visible=!1,this.worldHud.chainSprite.visible=!1,this.reset()}static async create(e){const t=new al;return e?t.applyLoadout(e):await t.loadGlbModel(),t}async loadGlbModel(){try{const t=(await SS()).scene.clone(!0);ES(t),TS(t,y.TAXI_DIMENSIONS,y.PLAYER_CAR_Y_OFFSET),t.traverse(n=>{n instanceof Se&&(n.castShadow=!1,n.receiveShadow=!1)}),this.setModelRoot(t)}catch(e){console.warn(`PlayerTaxi: failed to load ${y.PLAYER_CAR_GLB}`,e)}}applyLoadout(e){const t=cd(e.carId,e.bodyColorId,e.wheelStyleId,e.wingColorId);this.setModelRoot(t)}setModelRoot(e){this.currentModelRoot&&this.chassisGroup.remove(this.currentModelRoot),this.currentModelRoot=e,this.chassisGroup.add(e),this.initTurbo()}initTurbo(){this.turboParticles&&this.chassisGroup.remove(this.turboParticles);const e=this.turboN,t=new Float32Array(e*3),n=new Float32Array(e*3);this.turboVels=new Float32Array(e*3),this.turboAges=new Float32Array(e).fill(99);const i=new St;i.setAttribute("position",new mt(t,3).setUsage(Po)),i.setAttribute("color",new mt(n,3).setUsage(Po));const r=new Gs({size:.1,transparent:!0,opacity:.9,depthWrite:!1,blending:gi,vertexColors:!0,sizeAttenuation:!0});this.turboParticles=new zs(i,r),this.turboParticles.frustumCulled=!1,this.turboParticles.renderOrder=80,this.chassisGroup.add(this.turboParticles)}reset(){this.group.position.set(0,0,y.TAXI_POSITION_Z+y.TAXI_INTRO_START_Z_OFFSET),this.group.rotation.set(0,0,0),this.chassisGroup.rotation.set(0,0,0),this.setDraftMeter(0,!1),this.worldHud.reset()}applyLaneVisuals(e,t,n=0){this.group.position.x=e,this.chassisGroup.rotation.z=t}onChainMilestone(e,t){this.milestoneFlashTimer=.5}tickRoofLight(e,t,n){if(!this.turboParticles||!this.turboVels||!this.turboAges)return;const i=1/60,r=this.turboN,o=this.dims.length,a=this.dims.height,c=-.18,l=.18,h=a*.18,u=-o/2-.05;n<=1&&!t?this.turboTarget=0:t&&n<=1?this.turboTarget=.25:this.turboTarget=Math.min(1,.15+n*.08),this.milestoneFlashTimer>0&&(this.milestoneFlashTimer-=i,this.turboTarget=1),this.turboIntensity+=(this.turboTarget-this.turboIntensity)*.12;const d=this.turboParticles.geometry,f=d.getAttribute("position"),_=d.getAttribute("color"),g=this.turboVels,m=this.turboAges,p=this.turboIntensity*r*3*i,T=6+n*1.5;for(let M=0;M<r;M++){const x=.2+.25*(1-this.turboIntensity*.5);if(m[M]+=i,m[M]>x&&Math.random()<p/r){const w=Math.random()>.5?c:l;f.setXYZ(M,w+(Math.random()-.5)*.06,h+(Math.random()-.5)*.04,u),g[M*3]=(Math.random()-.5)*.8,g[M*3+1]=(Math.random()-.3)*.5,g[M*3+2]=-(T+Math.random()*T*.5),m[M]=0}if(m[M]<x){const C=m[M]/x;f.setXYZ(M,f.getX(M)+g[M*3]*i,f.getY(M)+g[M*3+1]*i,f.getZ(M)+g[M*3+2]*i);const w=(1-C*C)*this.turboIntensity;let b,I,A;if(C<.15)b=1,I=.95,A=.8;else if(C<.4){const S=(C-.15)/.25;b=1,I=.95-S*.55,A=.8-S*.8}else if(C<.7){const S=(C-.4)/.3;b=1,I=.4-S*.3,A=0}else{const S=(C-.7)/.3;b=1-S*.6,I=.1*(1-S),A=0}_.setXYZ(M,b*w,I*w,A*w)}else _.setXYZ(M,0,0,0),f.setXYZ(M,0,-10,0)}f.needsUpdate=!0,_.needsUpdate=!0,this.turboParticles.material.size=.06+this.turboIntensity*.08}setDraftMeter(e,t){const n=Math.max(0,Math.min(1,e));this.draftBarGroup.visible=!1,this.draftFill.scale.set(n,1,1)}getCollisionBounds(){const{width:e,length:t}=this.dims;return{cx:this.group.position.x,cz:this.group.position.z,hx:e/2,hz:t/2}}getRearWorldPosition(e){const{height:t,length:n}=this.dims;e.set(0,t*.35,-n/2-.02),this.group.localToWorld(e)}getTailLightsWorldPositions(e,t){const{height:n,length:i}=this.dims,r=n*.28,o=-i/2+2.02;e.set(-.42,r,o),t.set(.42,r,o),this.group.localToWorld(e),this.group.localToWorld(t)}}class cl{constructor(){this.group=new lt,this.pool=[],this.spawnAccMs=0,this.despawnBehindZ=25,this.spawnsSinceRail=0,this.railPatternIndex=0,this.railStepIndex=0,this.railActive=!1,this.group.name="TrafficGroup"}static async create(){const e=new cl;for(let t=0;t<y.VEHICLE_POOL_SIZE;t++)e.pool.push(e.createVehicle());return e}createVehicle(){const e=new lt,t=bc();return e.add(t),e.visible=!1,this.group.add(e),{group:e,carRoot:t,active:!1,slipstreamConsumed:!1,laneIndex:1,speedMul:1,laneChangeState:"idle",laneChangeFromLane:1,laneChangeToLane:1,laneChangeStartMs:0}}reset(){this.spawnAccMs=y.TRAFFIC_PHASES[0].spawnRate,this.spawnsSinceRail=0,this.railPatternIndex=0,this.railStepIndex=0,this.railActive=!1;for(const e of this.pool)e.active=!1,e.slipstreamConsumed=!1,e.group.visible=!1,e.laneChangeState="idle",e.laneChangeFromLane=e.laneIndex,e.laneChangeToLane=e.laneIndex,e.laneChangeStartMs=0}easeInOutCubic(e){return e<=0?0:e>=1?1:e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}laneHasBlockingTraffic(e,t){const n=this.laneIndexToX(t),i=this.hzFor();for(const r of this.pool){if(!r.active||r===e)continue;const o=this.hzFor();if(this.longFootprintsOverlap(e.group.position.z,i,r.group.position.z,o)&&(r.laneChangeState==="active"&&r.laneChangeToLane===t||Math.abs(r.group.position.x-n)<=y.LANE_WIDTH*.55))return!0}return!1}pickAdjacentLaneForChange(e,t,n){const i=[],r=n-1,o=n+1;return r>=0&&r<y.LANE_COUNT&&t.lanes.includes(r)&&!this.laneHasBlockingTraffic(e,r)&&i.push(r),o>=0&&o<y.LANE_COUNT&&t.lanes.includes(o)&&!this.laneHasBlockingTraffic(e,o)&&i.push(o),i.length?i[Math.floor(Math.random()*i.length)]:null}maybeStartLaneChange(e,t,n){if(e.laneChangeState!=="idle"||!t.laneChange)return;if(t.lanes.length<2){e.laneChangeState="done";return}const i=y.TAXI_POSITION_Z+y.VEHICLE_LANE_CHANGE_TRIGGER_AHEAD_Z;if(e.group.position.z>i)return;if(Math.random()>y.VEHICLE_LANE_CHANGE_CHANCE){e.laneChangeState="done";return}const r=this.pickAdjacentLaneForChange(e,t,e.laneIndex);if(r===null){e.laneChangeState="done";return}e.laneChangeState="active",e.laneChangeFromLane=e.laneIndex,e.laneChangeToLane=r,e.laneChangeStartMs=n}updateLaneChange(e,t){if(e.laneChangeState!=="active")return;const n=Math.max(1,y.VEHICLE_LANE_CHANGE_TOTAL_MS),i=Kn.clamp(y.VEHICLE_LANE_CHANGE_SIGNAL_PORTION,.05,.95),r=(t-e.laneChangeStartMs)/n,o=Kn.clamp(r,0,1),a=this.laneIndexToX(e.laneChangeFromLane),c=this.laneIndexToX(e.laneChangeToLane),l=Math.sign(c-a)||1,h=y.LANE_WIDTH*y.VEHICLE_LANE_CHANGE_SIGNAL_OFFSET_FRAC*l;if(o>=1){e.group.position.x=c,e.laneIndex=e.laneChangeToLane,e.laneChangeState="done";return}let u=a;if(o<i){const d=this.easeInOutCubic(o/i);u=Kn.lerp(a,a+h,d)}else{const d=this.easeInOutCubic((o-i)/(1-i));u=Kn.lerp(a+h,c,d)}e.group.position.x=u}getPhase(e){const t=y.TRAFFIC_PHASES;let n=t[0];for(const i of t)e>=i.startTime&&(n=i);return n}laneIndexToX(e){return(e-1)*y.LANE_WIDTH}startNextRail(){this.railActive=!0,this.railStepIndex=0}getCurrentRailPattern(){const e=y.FLOW_RAILS_PATTERNS;return e[this.railPatternIndex%e.length]??[]}resolveRailLaneToPhase(e,t){if(e.lanes.includes(t))return t;let n=e.lanes[0],i=Math.abs(n-t);for(const r of e.lanes){const o=Math.abs(r-t);o<i&&(n=r,i=o)}return n}shouldStartRail(e,t){return this.railActive||y.FLOW_RAILS_PATTERNS.length===0||e<y.FLOW_RAILS_START_MS||t.lanes.length<2?!1:this.spawnsSinceRail>=y.FLOW_RAILS_GAP_SPAWNS}pickLane(e,t){if(this.shouldStartRail(t,e)&&this.startNextRail(),this.railActive){const i=this.getCurrentRailPattern();if(i.length>0){const r=i[this.railStepIndex%i.length];return this.resolveRailLaneToPhase(e,r)}}const n=e.lanes;return n[Math.floor(Math.random()*n.length)]}hzFor(){return y.TAXI_DIMENSIONS.length/2}zFootprint(e,t){const n=y.SLIPSTREAM_ZONE_DEPTH;return{min:e-t-n,max:e+t}}longFootprintsOverlap(e,t,n,i){const r=y.TRAFFIC_SPAWN_MIN_Z_BUFFER,o=this.zFootprint(e,t),a=this.zFootprint(n,i);return!(o.max+r<=a.min||a.max+r<=o.min)}minCenterZAheadOfOther(e,t){const n=this.hzFor(),i=this.hzFor();return t.group.position.z+n+i+y.SLIPSTREAM_ZONE_DEPTH+y.TRAFFIC_SPAWN_MIN_Z_BUFFER}resolveSpawnZ(e,t,n){const i=this.hzFor();let r=n;for(let o=0;o<40;o++){let a=!1;for(const c of this.pool){if(!c.active||c===t||Math.abs(c.laneIndex-e)>1)continue;const l=this.hzFor(),h=c.group.position.z;if(this.longFootprintsOverlap(r,i,h,l)){const u=this.minCenterZAheadOfOther(t,c);r<u&&(r=u,a=!0)}}if(!a)break}return r}separateOverlappingTraffic(){const e=y.TRAFFIC_SPAWN_MIN_Z_BUFFER,t=y.SLIPSTREAM_ZONE_DEPTH;for(let n=0;n<12;n++){let i=!1;const r=this.pool.filter(o=>o.active);for(let o=0;o<r.length;o++)for(let a=o+1;a<r.length;a++){const c=r[o],l=r[a];if(Math.abs(c.laneIndex-l.laneIndex)>1)continue;const h=this.hzFor(),u=this.hzFor(),d=c.group.position.z,f=l.group.position.z;this.longFootprintsOverlap(d,h,f,u)&&(d>=f?c.group.position.z=f+u+h+t+e:l.group.position.z=d+h+u+t+e,i=!0)}if(!i)break}}trySpawn(e){const t=this.pool.find(l=>!l.active);if(!t)return;const n=this.getPhase(e),i=this.pickLane(n,e),r=this.railActive?y.FLOW_RAILS_SPEED_VARIANCE_SCALE:1,o=1+(Math.random()*2-1)*n.speedVariance*r;t.laneIndex=i,t.speedMul=Math.max(.4,o),t.group.remove(t.carRoot),t.carRoot=bc(),t.group.add(t.carRoot),t.active=!0,t.slipstreamConsumed=!1,t.group.visible=!0,t.laneChangeState="idle",t.laneChangeFromLane=i,t.laneChangeToLane=i,t.laneChangeStartMs=0;const a=Math.random()*y.TRAFFIC_SPAWN_AHEAD_Z_JITTER;let c=y.TAXI_POSITION_Z+y.TRAFFIC_SPAWN_AHEAD_Z+a;if(c=this.resolveSpawnZ(i,t,c),t.group.position.set(this.laneIndexToX(i),0,c),this.railActive){this.railStepIndex+=1;const l=this.getCurrentRailPattern();(l.length===0||this.railStepIndex>=l.length)&&(this.railActive=!1,this.railStepIndex=0,this.railPatternIndex=(this.railPatternIndex+1)%Math.max(1,y.FLOW_RAILS_PATTERNS.length),this.spawnsSinceRail=0)}else this.spawnsSinceRail+=1}update(e,t,n){const i=this.getPhase(t),r=this.railActive?i.spawnRate*y.FLOW_RAILS_SPAWN_RATE_SCALE:i.spawnRate;for(this.spawnAccMs+=e*1e3;this.spawnAccMs>=r;)this.spawnAccMs-=r,this.trySpawn(t);const o=n*60*e;for(const a of this.pool){if(!a.active)continue;const c=y.VEHICLE_TRAFFIC_FORWARD_SPEED*60*e*a.speedMul,l=o-c;a.group.position.z-=Math.max(y.VEHICLE_TRAFFIC_MIN_APPROACH,l),this.maybeStartLaneChange(a,i,t),this.updateLaneChange(a,t),a.group.position.z<y.TAXI_POSITION_Z-this.despawnBehindZ&&(a.active=!1,a.group.visible=!1,a.laneChangeState="idle")}this.separateOverlappingTraffic()}forEachPoolWindSlot(e){const t=y.TAXI_DIMENSIONS.length/2;for(let n=0;n<this.pool.length;n++){const i=this.pool[n];if(!i.active){e(n,!1,!1,0,0,0);continue}e(n,!0,!i.slipstreamConsumed,i.group.position.x,i.group.position.z,t)}}markSlipstreamConsumed(e){if(!e)return;const t=this.findClosestActiveVehicleXZ(e.cx,e.cz);t&&(t.slipstreamConsumed=!0)}findClosestActiveVehicleXZ(e,t){const n=y.TRAFFIC_HEADLIGHT_MATCH_MAX_DIST,i=n*n;let r=null,o=1/0;for(const a of this.pool){if(!a.active||a.slipstreamConsumed)continue;const c=a.group.position.x-e,l=a.group.position.z-t,h=c*c+l*l;h<o&&h<=i&&(o=h,r=a)}return r}getActiveCollisionBounds(){const{width:e,length:t}=y.TAXI_DIMENSIONS,n=e/2,i=t/2,r=[];for(const o of this.pool)!o.active||o.slipstreamConsumed||r.push({cx:o.group.position.x,cz:o.group.position.z,hx:n,hz:i});return r}getHitCarGroup(e,t){let n=null,i=1/0;for(const r of this.pool){if(!r.active)continue;const o=r.group.position.x-e,a=r.group.position.z-t,c=o*o+a*a;c<i&&(i=c,n=r)}return(n==null?void 0:n.group)??null}getAllActiveCollisionBounds(){const{width:e,length:t}=y.TAXI_DIMENSIONS,n=e/2,i=t/2,r=[];for(const o of this.pool)o.active&&r.push({cx:o.group.position.x,cz:o.group.position.z,hx:n,hz:i});return r}}function wS(s,e,t,n,i,r,o,a){return Math.abs(s-i)<t+o&&Math.abs(e-r)<n+a}class IS{check(e,t){const n=e.getCollisionBounds(),i=n.hz*y.TAXI_COLLISION_Z_HALF_SCALE,r=t.getAllActiveCollisionBounds();for(const o of r)if(wS(n.cx,n.cz,n.hx,i,o.cx,o.cz,o.hx,o.hz))return{hitX:o.cx,hitZ:o.cz};return null}}class CS{constructor(e){this.rearWorld=new P,this.rearNdc=new P,this.followDistance=y.CAMERA_DISTANCE,this.camera=e}update(e,t){const n=this.fovFromScrollSpeed(t);this.camera.fov=Kn.lerp(this.camera.fov,n,y.CAMERA_FOV_LERP),this.camera.updateProjectionMatrix(),this.applyCamera(e)}snap(e){this.followDistance=y.CAMERA_DISTANCE,this.camera.fov=y.CAMERA_FOV_BASE,this.camera.updateProjectionMatrix(),this.applyCamera(e)}fovFromScrollSpeed(e){const t=y.BASE_SCROLL_SPEED,n=y.MAX_SCROLL_SPEED,r=(Kn.clamp(e,t,n)-t)/(n-t);return Kn.lerp(y.CAMERA_FOV_BASE,y.CAMERA_FOV_MAX,r)}applyCamera(e){const t=e.group.position.z,n=t+y.CAMERA_LOOK_AHEAD,i=y.CAMERA_HEIGHT,r=y.CAMERA_LOOK_AT_Y;e.getRearWorldPosition(this.rearWorld);const o=-1+2*y.CAMERA_FRAMING_BOTTOM_PCT;let a=this.followDistance;const c=14;for(let h=0;h<c;h++){const u=t-a;this.camera.position.set(0,i,u),this.camera.up.set(0,1,0),this.camera.lookAt(0,r,n),this.camera.updateMatrixWorld(!0),this.rearNdc.copy(this.rearWorld),this.rearNdc.project(this.camera);const d=o-this.rearNdc.y;if(Math.abs(d)<.008)break;a+=d*y.CAMERA_FRAMING_DISTANCE_GAIN,a=Kn.clamp(a,4,40)}this.followDistance=a;const l=t-a;this.camera.position.set(0,i,l),this.camera.up.set(0,1,0),this.camera.lookAt(0,r,n)}}class LS{constructor(){this.group=new lt,this.outlineSlots=[],this.group.name="SlipstreamWind",this.poolSlots=y.VEHICLE_POOL_SIZE,this.particlesPerVehicle=y.SLIPSTREAM_WIND_PARTICLES_PER_VEHICLE;const e=this.poolSlots*this.particlesPerVehicle;this.positions=new Float32Array(e*3),this.offsetXZ=new Float32Array(e*2),this.sideSign=new Int8Array(e),this.particleY=new Float32Array(e),this.slotSeeded=new Array(this.poolSlots).fill(!1);const t=new St;t.setAttribute("position",new mt(this.positions,3)),this.geometry=t,this.material=new Gs({color:y.SLIPSTREAM_WIND_COLOR,size:y.SLIPSTREAM_WIND_POINT_SIZE,transparent:!0,opacity:y.SLIPSTREAM_WIND_OPACITY,depthWrite:!1,sizeAttenuation:!0,blending:Hi}),this.points=new zs(t,this.material),this.points.frustumCulled=!1,this.points.renderOrder=2,this.group.add(this.points),this.outlineCoreMat=new kt({color:y.SLIPSTREAM_ZONE_OUTLINE_COLOR,transparent:!0,opacity:y.SLIPSTREAM_ZONE_OUTLINE_OPACITY,depthWrite:!1,blending:gi,side:Rt}),this.outlineGlowMat=new kt({color:y.SLIPSTREAM_ZONE_OUTLINE_COLOR,transparent:!0,opacity:y.SLIPSTREAM_ZONE_OUTLINE_GLOW_OPACITY,depthWrite:!1,blending:gi,side:Rt});for(let n=0;n<this.poolSlots;n++){const i=this.buildOutlineSlot();this.outlineSlots.push(i),this.group.add(i.group)}this.hideAll()}dispose(){this.geometry.dispose(),this.material.dispose(),this.outlineCoreMat.dispose(),this.outlineGlowMat.dispose();for(const e of this.outlineSlots)for(const t of e.group.children)t instanceof Se&&(t.geometry.dispose(),t.material instanceof pn&&t.material.dispose())}reset(){this.slotSeeded.fill(!1),this.hideAll()}hideAll(){const e=this.poolSlots*this.particlesPerVehicle,t=this.positions;for(let i=0;i<e;i++){const r=i*3;t[r]=0,t[r+1]=-400,t[r+2]=0}const n=this.geometry.attributes.position;n&&(n.needsUpdate=!0);for(const i of this.outlineSlots)i.group.visible=!1}buildOutlineSlot(){const e=new lt;e.visible=!1,e.renderOrder=3;const t=y.SLIPSTREAM_ZONE_WIDTH,n=y.SLIPSTREAM_ZONE_DEPTH,i=y.SLIPSTREAM_ZONE_OUTLINE_THICKNESS,r=i*y.SLIPSTREAM_ZONE_OUTLINE_GLOW_SCALE,o=t*.5,a=new Vt(t,i),c=new Vt(t,r),l=(T,M,x)=>{const C=new Se(T.clone(),M.clone());C.rotation.x=-Math.PI/2,C.position.set(0,0,x),C.frustumCulled=!1,C.renderOrder=3,e.add(C)};l(c,this.outlineGlowMat,0),l(c,this.outlineGlowMat,-n),l(a,this.outlineCoreMat,0),l(a,this.outlineCoreMat,-n);const h=Math.max(2,y.SLIPSTREAM_ZONE_OUTLINE_DASHES_PER_SIDE),u=n/h,d=u*Math.max(.12,Math.min(.95,y.SLIPSTREAM_ZONE_OUTLINE_DASH_DUTY)),f=new Vt(i,d),_=new Vt(r,d*1.1),g=[],m=[],p=(T,M)=>{const x=M?_:f,C=M?this.outlineGlowMat:this.outlineCoreMat,w=new Se(x.clone(),C.clone());return w.rotation.x=-Math.PI/2,w.position.set(T,0,0),w.frustumCulled=!1,w.renderOrder=3,e.add(w),w};for(let T=0;T<h;T++)g.push(p(-o,!0)),g.push(p(-o,!1)),m.push(p(o,!0)),m.push(p(o,!1));return{group:e,leftDashes:g,rightDashes:m,dashLength:d,cycleLength:u}}randomLXInStrip(e,t){const n=y.SLIPSTREAM_WIND_X_INSET,i=y.SLIPSTREAM_WIND_SIDE_STRIP_WIDTH,r=e-n,o=Math.max(.02,r-i),a=Math.random(),c=o+a*(r-o);return t*c}clampLX(e,t,n){const i=y.SLIPSTREAM_WIND_X_INSET,r=y.SLIPSTREAM_WIND_SIDE_STRIP_WIDTH,o=t-i,a=Math.max(.02,o-r);return n<0?Math.min(-a,Math.max(-o,e)):Math.min(o,Math.max(a,e))}seedSlot(e,t,n){const i=this.particlesPerVehicle,r=e*i,o=y.SLIPSTREAM_WIND_Y,a=y.SLIPSTREAM_WIND_Y_SPREAD;for(let c=0;c<i;c++){const l=r+c,h=l*2,u=c%2===0?-1:1;this.sideSign[l]=u,this.offsetXZ[h]=this.randomLXInStrip(t,u),this.offsetXZ[h+1]=-Math.random()*.22*n,this.particleY[l]=o+(Math.random()*2-1)*a}}updateOutlineDashes(e,t,n){const i=y.SLIPSTREAM_ZONE_OUTLINE_DASH_SPEED,r=Math.max(.001,t-e.dashLength),o=n*i%r,a=e.cycleLength,c=e.dashLength*.5,l=Math.floor(e.leftDashes.length/2);for(let h=0;h<l;h++){const d=-((h*a+o)%r)-c,f=e.leftDashes[h*2],_=e.leftDashes[h*2+1],g=e.rightDashes[h*2],m=e.rightDashes[h*2+1];f.position.z=d,_.position.z=d,g.position.z=d,m.position.z=d}}update(e,t,n){if(!t){this.points.visible=!1;for(const f of this.outlineSlots)f.group.visible=!1;return}this.points.visible=!0;const i=y.SLIPSTREAM_ZONE_WIDTH,r=y.SLIPSTREAM_ZONE_DEPTH,o=i/2,a=y.SLIPSTREAM_WIND_DOWN_SPEED*e,c=y.SLIPSTREAM_WIND_TURBULENCE*e,l=this.particlesPerVehicle,h=this.positions,u=this.offsetXZ;performance.now()*.001,n.forEachPoolWindSlot((f,_,g,m,p,T)=>{const M=this.outlineSlots[f],x=f*l;if(!_||!g){M&&(M.group.visible=!1),this.slotSeeded[f]=!1;for(let w=0;w<l;w++){const b=(x+w)*3;h[b]=0,h[b+1]=-400,h[b+2]=0}return}const C=p-T;M&&(M.group.visible=!1),this.slotSeeded[f]||(this.seedSlot(f,o,r),this.slotSeeded[f]=!0);for(let w=0;w<l;w++){const b=x+w,I=b*2,A=this.sideSign[b];let S=u[I],L=u[I+1];S+=(Math.random()*2-1)*c,L-=a+(Math.random()*2-1)*c*.12,S=this.clampLX(S,o,A),L<-r&&(L=-Math.random()*.2*r,S=this.randomLXInStrip(o,A)),L>.03&&(L=-Math.random()*.08*r),u[I]=S,u[I+1]=L;const H=b*3;h[H]=m+S,h[H+1]=this.particleY[b],h[H+2]=C+L}});const d=this.geometry.attributes.position;d&&(d.needsUpdate=!0)}}class PS{constructor(){this.group=new lt,this.beams=[],this.tailL=new P,this.tailR=new P,this.boostActive=!1,this.group.name="SlingshotTrail";const e=y.SLINGSHOT_TRAIL_WIDTH*.75,t=Math.max(.04,y.SLINGSHOT_TRAIL_BOX_HEIGHT*.6),n=Math.max(12,y.SLINGSHOT_TRAIL_LENGTH*9),i=new nt(e,t,n);i.translate(0,0,-n*.5);for(const r of[y.PALETTE.SLINGSHOT_TRAIL_LEFT,y.PALETTE.SLINGSHOT_TRAIL_RIGHT]){const o=new kt({color:r,transparent:!0,opacity:0,depthWrite:!1}),a=new Se(i,o);a.visible=!1,a.frustumCulled=!1,a.renderOrder=10,this.group.add(a),this.beams.push({mesh:a,material:o})}}reset(){this.boostActive=!1;for(const e of this.beams)e.mesh.visible=!1,e.material.opacity=0}setBoostActive(e){this.boostActive=e}updateBeamAnchors(e){e.getTailLightsWorldPositions(this.tailL,this.tailR);const t=this.beams[0],n=this.beams[1];t.mesh.position.copy(this.tailL),n.mesh.position.copy(this.tailR),t.mesh.rotation.set(0,0,0),n.mesh.rotation.set(0,0,0)}update(e,t,n){if(!this.boostActive){for(const r of this.beams)r.mesh.visible=!1,r.material.opacity=Math.max(0,r.material.opacity-e*7);return}this.updateBeamAnchors(n);const i=.82+.16*Math.sin(performance.now()*.02);for(const r of this.beams)r.mesh.visible=!0,r.material.opacity=i}}class NS{constructor(){this.anchor=new lt,this.burstWindowActive=!1,this.spawnAcc=0,this.anchor.name="SlipstreamActivateBurst",this.count=y.SLIPSTREAM_ACTIVATE_BURST_COUNT,this.positions=new Float32Array(this.count*3),this.velocities=new Float32Array(this.count*3),this.ages=new Float32Array(this.count),this.lifetimes=new Float32Array(this.count);const e=new St;e.setAttribute("position",new mt(this.positions,3)),this.geometry=e,this.material=new Gs({color:y.SLIPSTREAM_ACTIVATE_BURST_COLOR,size:y.SLIPSTREAM_ACTIVATE_BURST_POINT_SIZE,transparent:!0,opacity:y.SLIPSTREAM_ACTIVATE_BURST_OPACITY,depthWrite:!1,sizeAttenuation:!0,blending:gi}),this.points=new zs(this.geometry,this.material),this.points.frustumCulled=!1,this.points.renderOrder=8,this.anchor.add(this.points),this.applyAnchorLocal(),this.hideAll()}dispose(){this.geometry.dispose(),this.material.dispose()}applyAnchorLocal(){const{height:e,length:t}=y.TAXI_DIMENSIONS;this.anchor.position.set(0,e*y.SLIPSTREAM_ACTIVATE_BURST_EMIT_Y_FRAC,-t*.5-y.SLIPSTREAM_ACTIVATE_BURST_EMIT_Z_INSET)}hideAll(){const e=this.count;for(let n=0;n<e;n++)this.positions[n*3+1]=-400,this.ages[n]=1e9;const t=this.geometry.attributes.position;t&&(t.needsUpdate=!0)}reset(){this.burstWindowActive=!1,this.spawnAcc=0,this.hideAll()}setBurstWindowActive(e){this.burstWindowActive=e,e||(this.spawnAcc=0)}burst(){this.applyAnchorLocal();const e=this.count;for(let n=0;n<e;n++)this.seedParticle(n);const t=this.geometry.attributes.position;t&&(t.needsUpdate=!0)}seedParticle(e){const t=e*3,n=y.SLIPSTREAM_ACTIVATE_BURST_SPREAD_X,i=y.SLIPSTREAM_ACTIVATE_BURST_SPREAD_Y,r=y.SLIPSTREAM_ACTIVATE_BURST_SPEED_MIN,o=y.SLIPSTREAM_ACTIVATE_BURST_SPEED_MAX,a=y.SLIPSTREAM_ACTIVATE_BURST_SCREEN_DOWN_Y;this.positions[t]=(Math.random()-.5)*2*n,this.positions[t+1]=(Math.random()-.5)*2*i,this.positions[t+2]=(Math.random()-.5)*.12;const c=r+Math.random()*(o-r),l=y.SLIPSTREAM_ACTIVATE_BURST_LATERAL_SCALE,h=(Math.random()-.5)*2*l*c,u=-c,d=a*c+(Math.random()-.5)*y.SLIPSTREAM_ACTIVATE_BURST_Y_JITTER;this.velocities[t]=h,this.velocities[t+1]=d,this.velocities[t+2]=u,this.ages[e]=0,this.lifetimes[e]=y.SLIPSTREAM_ACTIVATE_BURST_LIFE_MIN+Math.random()*(y.SLIPSTREAM_ACTIVATE_BURST_LIFE_MAX-y.SLIPSTREAM_ACTIVATE_BURST_LIFE_MIN)}pickSpawnIndex(){const e=this.count;for(let t=0;t<e;t++)if(this.ages[t]>=this.lifetimes[t])return t;return Math.floor(Math.random()*e)}update(e){if(this.applyAnchorLocal(),this.burstWindowActive)for(this.spawnAcc+=y.SLIPSTREAM_ACTIVATE_BURST_WINDOW_SPAWN_PER_SEC*e;this.spawnAcc>=1;){this.spawnAcc-=1;const c=this.pickSpawnIndex();this.seedParticle(c)}const t=Math.pow(y.SLIPSTREAM_ACTIVATE_BURST_DRAG,e*60),n=y.SLIPSTREAM_ACTIVATE_BURST_GRAVITY,i=this.count,r=this.positions,o=this.velocities;let a=!1;for(let c=0;c<i;c++){if(this.ages[c]>=this.lifetimes[c])continue;a=!0,this.ages[c]+=e;const l=c*3;o[l]*=t,o[l+1]=o[l+1]*t-n*e,o[l+2]*=t,r[l]+=o[l]*e,r[l+1]+=o[l+1]*e,r[l+2]+=o[l+2]*e,this.ages[c]>=this.lifetimes[c]&&(r[l+1]=-400)}if(a||this.burstWindowActive){const c=this.geometry.attributes.position;c&&(c.needsUpdate=!0)}}}function Qh(s,e){const t=y.SLIPSTREAM_ZONE_WIDTH,n=y.SLIPSTREAM_ZONE_DEPTH,i=e.cz-e.hz,r=i-n,o=i,a=e.cx-t/2,c=e.cx+t/2,l=s.cx-s.hx,h=s.cx+s.hx,u=s.cz-s.hz,d=s.cz+s.hz;return h>a&&l<c&&d>r&&u<o}class DS{constructor(){this.meter=0,this.wasInZone=!1,this.lastDraftTarget=null}get draftMeter(){return this.meter}reset(){this.meter=0,this.wasInZone=!1,this.lastDraftTarget=null}update(e,t,n,i){const r=n.getCollisionBounds(),o=i.getActiveCollisionBounds(),a=this.isPlayerInAnySlipstream(r,o),c=this.wasInZone&&!a;let l=!1,h=null;if(c&&this.meter>=1&&(l=!0,h=this.lastDraftTarget?{...this.lastDraftTarget}:null),a){const d=this.findDraftVehicle(r,o);if(d&&(this.lastDraftTarget={cx:d.cx,cz:d.cz,hx:d.hx,hz:d.hz}),this.meter<1){const f=Math.max(.25,t/y.BASE_SCROLL_SPEED),_=y.DRAFT_FILL_RATE*60*e*f;this.meter+=_,this.meter>1&&(this.meter=1)}}else this.meter=0;this.wasInZone=a;const u=l?1:a?Math.min(1,this.meter):0;return{inZone:a,meter:this.meter,slingshotFired:l,meterDisplay:u,slingshotTarget:h,draftTarget:a?this.lastDraftTarget:null}}findDraftVehicle(e,t){for(const n of t)if(Qh(e,n))return n;return null}isPlayerInAnySlipstream(e,t){for(const n of t)if(Qh(e,n))return!0;return!1}}class OS{constructor(){this._chain=1,this._maxChainThisRun=1,this._lastDraftActivityMs=0,this._milestoneShown=new Set}get chain(){return this._chain}get maxChainThisRun(){return this._maxChainThisRun}reset(){this._chain=1,this._maxChainThisRun=1,this._lastDraftActivityMs=0,this._milestoneShown.clear()}tick(e,t){if(t){this._lastDraftActivityMs=e;return}e-this._lastDraftActivityMs>y.CHAIN_TIMEOUT&&(this._chain=1)}onSlingshot(e){return this._chain+=1,this._lastDraftActivityMs=e,this._chain>this._maxChainThisRun&&(this._maxChainThisRun=this._chain),y.CHAIN_MILESTONES.includes(this._chain)&&!this._milestoneShown.has(this._chain)?(this._milestoneShown.add(this._chain),this._chain):null}}class US{constructor(){this.score=0,this.distanceAcc=0}get currentScore(){return Math.floor(this.score)}reset(){this.score=0,this.distanceAcc=0}addDistance(e,t){for(this.distanceAcc+=e;this.distanceAcc>=y.DISTANCE_SCORE_INTERVAL;)this.distanceAcc-=y.DISTANCE_SCORE_INTERVAL,this.score+=y.DISTANCE_SCORE_RATE*t}addSlingshotBonus(e){this.score+=y.CHAIN_SCORE_BASE*e}}class FS{constructor(){this._onRetry=null,this._onMarket=null,this.container=document.getElementById("gameover"),this.finalScoreEl=document.getElementById("final-score"),this.newBestEl=document.getElementById("new-best"),this.chainEl=document.getElementById("stat-chain"),this.distanceEl=document.getElementById("stat-distance"),this.retryBtn=document.getElementById("retry-btn"),this.marketBtn=document.getElementById("market-btn"),this.retryBtn.addEventListener("click",()=>{var e;this.hide(),(e=this._onRetry)==null||e.call(this)}),this.marketBtn.addEventListener("click",()=>{var e;this.hide(),(e=this._onMarket)==null||e.call(this)})}onRetry(e){this._onRetry=e}onMarket(e){this._onMarket=e}show(e,t,n,i){this.finalScoreEl.textContent=e.toLocaleString(),this.chainEl.textContent=`×${t}`,this.distanceEl.textContent=`${(n/100).toFixed(1)}km`;const r=i.updateHighScore(e);this.newBestEl.style.display=r?"block":"none",this.container.classList.add("visible")}hide(){this.container.classList.remove("visible")}}function eu(s){return`#${s.toString(16).padStart(6,"0")}`}class BS{constructor(e){this.currentTab="cars",this._onApply=null,this._onClose=null,this.unlockManager=e,this.pendingLoadout={...e.loadout},this.container=document.getElementById("market"),this.grid=document.getElementById("market-grid"),this.applyBtn=document.getElementById("market-apply-btn"),this.closeBtn=document.getElementById("market-close-btn"),this.highScoreEl=document.getElementById("market-highscore"),this.tabBtns=[document.getElementById("market-tab-cars"),document.getElementById("market-tab-body"),document.getElementById("market-tab-wheels")],this.tabBtns[0].addEventListener("click",()=>this.switchTab("cars")),this.tabBtns[1].addEventListener("click",()=>this.switchTab("body")),this.tabBtns[2].addEventListener("click",()=>this.switchTab("wheels")),this.applyBtn.addEventListener("click",()=>{var t;this.unlockManager.setLoadout(this.pendingLoadout),this.hide(),(t=this._onApply)==null||t.call(this,this.pendingLoadout)}),this.closeBtn.addEventListener("click",()=>{var t;this.hide(),(t=this._onClose)==null||t.call(this)})}onApply(e){this._onApply=e}onClose(e){this._onClose=e}show(){this.pendingLoadout={...this.unlockManager.loadout},this.highScoreEl.textContent=`BEST: ${this.unlockManager.highScore.toLocaleString()} PTS`,this.switchTab("cars"),this.container.classList.add("visible")}hide(){this.container.classList.remove("visible")}get isVisible(){return this.container.classList.contains("visible")}switchTab(e){this.currentTab=e;const t=["cars","body","wheels"];this.tabBtns.forEach((n,i)=>n.classList.toggle("active",t[i]===e)),this.renderGrid()}renderGrid(){var e;if(this.grid.innerHTML="",this.currentTab==="cars")for(const t of yc){const n=this.unlockManager.isCarUnlocked(t.id),i=this.pendingLoadout.carId===t.id,r=this.unlockManager.loadout.carId===t.id;this.grid.appendChild(this.buildCard({unlocked:n,selected:i,equipped:r,name:t.name,scoreLine:t.unlockScore===0?"FREE":`${t.unlockScore.toLocaleString()} PTS`,preview:this.carSvgPreview(t.id),onClick:n?()=>{this.pendingLoadout.carId=t.id,this.renderGrid()}:null}))}else if(this.currentTab==="body"){this.addSectionLabel("BODY COLOR");for(const t of Fs){const n=this.unlockManager.isBodyColorUnlocked(t.id),i=this.pendingLoadout.bodyColorId===t.id,r=this.unlockManager.loadout.bodyColorId===t.id;this.grid.appendChild(this.buildCard({unlocked:n,selected:i,equipped:r,name:t.name,scoreLine:t.unlockScore===0?"FREE":`${t.unlockScore.toLocaleString()} PTS`,preview:this.colorSwatchPreview(t.hex),onClick:n?()=>{this.pendingLoadout.bodyColorId=t.id,this.renderGrid()}:null}))}this.addSectionLabel("REAR WING");for(const t of Mr){const n=this.unlockManager.isWingColorUnlocked(t.id),i=this.pendingLoadout.wingColorId===t.id,r=this.unlockManager.loadout.wingColorId===t.id,o=t.hex??((e=Fs.find(a=>a.id===this.pendingLoadout.bodyColorId))==null?void 0:e.hex)??15658994;this.grid.appendChild(this.buildCard({unlocked:n,selected:i,equipped:r,name:t.name,scoreLine:t.unlockScore===0?"FREE":`${t.unlockScore.toLocaleString()} PTS`,preview:this.colorSwatchPreview(o),onClick:n?()=>{this.pendingLoadout.wingColorId=t.id,this.renderGrid()}:null}))}}else for(const t of Tr){const n=this.unlockManager.isWheelStyleUnlocked(t.id),i=this.pendingLoadout.wheelStyleId===t.id,r=this.unlockManager.loadout.wheelStyleId===t.id;this.grid.appendChild(this.buildCard({unlocked:n,selected:i,equipped:r,name:t.name,scoreLine:t.unlockScore===0?"FREE":`${t.unlockScore.toLocaleString()} PTS`,preview:this.wheelPreview(t.accent),onClick:n?()=>{this.pendingLoadout.wheelStyleId=t.id,this.renderGrid()}:null}))}}addSectionLabel(e){const t=document.createElement("div");t.className="market-section-label",t.textContent=e,this.grid.appendChild(t)}buildCard(e){const t=document.createElement("div");t.className="market-card",e.selected&&t.classList.add("selected"),e.unlocked||t.classList.add("locked"),t.appendChild(e.preview);const n=document.createElement("div");n.className="market-card-name",n.textContent=e.name,t.appendChild(n);const i=document.createElement("div");if(i.className="market-card-score",e.unlocked?e.selected?(i.classList.add("selected-score"),i.textContent="SELECTED"):e.equipped?(i.classList.add("equipped-score"),i.textContent="EQUIPPED"):(i.classList.add("unlocked-score"),i.textContent=e.scoreLine):(i.classList.add("locked-score"),i.textContent=e.scoreLine),t.appendChild(i),!e.unlocked){const r=document.createElement("div");r.className="market-lock-icon",r.textContent="🔒",t.appendChild(r)}return e.onClick&&t.addEventListener("click",e.onClick),t}carSvgPreview(e){const t=document.createElement("div");return t.className="market-card-preview",t.innerHTML=this.getCarSvg(e),t}colorSwatchPreview(e){const t=document.createElement("div");t.className="market-card-preview";const n=document.createElement("div");return n.className="market-swatch",n.style.background=eu(e),t.appendChild(n),t}wheelPreview(e){const t=document.createElement("div");t.className="market-card-preview";const n=document.createElement("div");return n.className="market-swatch market-wheel",n.style.background=`radial-gradient(circle at 40% 40%, ${eu(e)} 30%, #1a1a1e 70%)`,t.appendChild(n),t}getCarSvg(e){const i='viewBox="0 0 120 52" xmlns="http://www.w3.org/2000/svg"';switch(e){case"starter":return`<svg ${i}>
          <rect x="25" y="16" width="60" height="14" rx="3" fill="currentColor"/>
          <rect x="18" y="20" width="14" height="8" rx="2" fill="currentColor" opacity="0.8"/>
          <rect x="78" y="18" width="16" height="10" rx="2" fill="currentColor" opacity="0.8"/>
          <rect x="12" y="28" width="30" height="2" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="70" y="10" width="24" height="2" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="84" y="12" width="2" height="18" fill="currentColor" opacity="0.4"/>
          <rect x="94" y="12" width="2" height="18" fill="currentColor" opacity="0.4"/>
          <circle cx="28" cy="36" r="5.5" fill="#2a2a2e"/><circle cx="28" cy="36" r="3" fill="#555"/>
          <circle cx="82" cy="36" r="6.5" fill="#2a2a2e"/><circle cx="82" cy="36" r="3.5" fill="#555"/>
        </svg>`;case"aeroBeast":return`<svg ${i}>
          <rect x="25" y="18" width="60" height="11" rx="2" fill="currentColor"/>
          <rect x="15" y="20" width="16" height="9" rx="2" fill="currentColor" opacity="0.85"/>
          <rect x="78" y="18" width="18" height="12" rx="2" fill="currentColor" opacity="0.85"/>
          <rect x="8" y="28" width="36" height="2.5" rx="1" fill="currentColor" opacity="0.65"/>
          <rect x="66" y="8" width="30" height="2.5" rx="1" fill="currentColor" opacity="0.65"/>
          <rect x="82" y="10" width="2" height="20" fill="currentColor" opacity="0.45"/>
          <rect x="96" y="10" width="2" height="20" fill="currentColor" opacity="0.45"/>
          <rect x="90" y="16" width="1" height="14" fill="currentColor" opacity="0.3"/>
          <circle cx="28" cy="36" r="5" fill="#2a2a2e"/><circle cx="28" cy="36" r="2.8" fill="#555"/>
          <circle cx="82" cy="36" r="6" fill="#2a2a2e"/><circle cx="82" cy="36" r="3.2" fill="#555"/>
        </svg>`;case"speedDemon":return`<svg ${i}>
          <rect x="28" y="17" width="56" height="12" rx="2" fill="currentColor"/>
          <polygon points="14,24 28,17 28,29" fill="currentColor" opacity="0.85"/>
          <rect x="78" y="19" width="14" height="9" rx="2" fill="currentColor" opacity="0.8"/>
          <rect x="14" y="28" width="26" height="2" rx="1" fill="currentColor" opacity="0.55"/>
          <rect x="72" y="11" width="20" height="2" rx="1" fill="currentColor" opacity="0.55"/>
          <rect x="82" y="13" width="2" height="16" fill="currentColor" opacity="0.4"/>
          <rect x="92" y="13" width="2" height="16" fill="currentColor" opacity="0.4"/>
          <circle cx="30" cy="36" r="5" fill="#2a2a2e"/><circle cx="30" cy="36" r="2.8" fill="#555"/>
          <circle cx="80" cy="36" r="5.5" fill="#2a2a2e"/><circle cx="80" cy="36" r="3" fill="#555"/>
        </svg>`;case"tank":return`<svg ${i}>
          <rect x="22" y="14" width="64" height="16" rx="3" fill="currentColor"/>
          <rect x="16" y="18" width="14" height="10" rx="2" fill="currentColor" opacity="0.85"/>
          <rect x="78" y="16" width="18" height="12" rx="2" fill="currentColor" opacity="0.85"/>
          <rect x="10" y="28" width="32" height="2.5" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="68" y="8" width="26" height="2.5" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="80" y="10" width="2.5" height="20" fill="currentColor" opacity="0.45"/>
          <rect x="94" y="10" width="2.5" height="20" fill="currentColor" opacity="0.45"/>
          <circle cx="26" cy="37" r="6.5" fill="#2a2a2e"/><circle cx="26" cy="37" r="3.5" fill="#555"/>
          <circle cx="82" cy="37" r="7.5" fill="#2a2a2e"/><circle cx="82" cy="37" r="4" fill="#555"/>
        </svg>`;case"phantom":return`<svg ${i}>
          <rect x="28" y="19" width="56" height="10" rx="5" fill="currentColor"/>
          <polygon points="12,24 28,19 28,29" fill="currentColor" opacity="0.8"/>
          <rect x="78" y="20" width="14" height="8" rx="2" fill="currentColor" opacity="0.75"/>
          <rect x="14" y="28" width="24" height="1.5" rx="1" fill="currentColor" opacity="0.5"/>
          <rect x="74" y="10" width="18" height="1.5" rx="1" fill="currentColor" opacity="0.5"/>
          <rect x="83" y="11" width="1.5" height="18" fill="currentColor" opacity="0.35"/>
          <rect x="72" y="14" width="1" height="12" fill="currentColor" opacity="0.25"/>
          <rect x="60" y="15" width="1" height="5" fill="currentColor" opacity="0.3"/>
          <rect x="55" y="14" width="14" height="1.5" rx="1" fill="currentColor" opacity="0.35"/>
          <circle cx="30" cy="35" r="4.5" fill="#2a2a2e"/><circle cx="30" cy="35" r="2.5" fill="#555"/>
          <circle cx="80" cy="35" r="5.5" fill="#2a2a2e"/><circle cx="80" cy="35" r="3" fill="#555"/>
        </svg>`;default:return`<svg ${i}><rect x="25" y="16" width="60" height="14" rx="3" fill="currentColor"/></svg>`}}}const tu=100;class HS{constructor(){this.milestoneTimer=0,this.milestoneClassTimer=0,this.perfectFlashTimer=0,this.tmpProj=new P,this.milestoneEl=document.getElementById("milestone-text"),this.flashEl=document.getElementById("screen-flash");const e=document.getElementById("game-container");this.touchHintLeftEl=this.buildTouchHint("left"),this.touchHintRightEl=this.buildTouchHint("right"),e.append(this.touchHintLeftEl,this.touchHintRightEl)}buildTouchHint(e){const t=document.createElement("div"),n=e==="left"?"⬅":"➡";return t.textContent=n,t.style.cssText=["position:absolute","left:0","top:0",`width:${tu}px`,`height:${tu}px`,"border-radius:9999px","display:flex","align-items:center","justify-content:center","font-family:Orbitron, system-ui, sans-serif","font-size:48px","font-weight:900","line-height:1",`color:#${y.PALETTE.UI_TEXT.toString(16).padStart(6,"0")}`,`border:5px solid #${y.PALETTE.NEON_ORANGE.toString(16).padStart(6,"0")}`,`background:rgba(${y.PALETTE.ROAD_DARK>>16&255},${y.PALETTE.ROAD_DARK>>8&255},${y.PALETTE.ROAD_DARK&255},0.82)`,`box-shadow:0 0 0 2px ${nn(y.PALETTE.UI_TEXT,.18)},0 0 18px #${y.PALETTE.NEON_ORANGE.toString(16).padStart(6,"0")},0 0 34px #${y.PALETTE.NEON_BLUE.toString(16).padStart(6,"0")}`,`text-shadow:0 0 6px #${y.PALETTE.NEON_BLUE.toString(16).padStart(6,"0")},0 0 14px #${y.PALETTE.NEON_BLUE.toString(16).padStart(6,"0")}`,"pointer-events:none","opacity:0","z-index:120","transition:opacity 120ms linear","transform:translate(-50%, -50%)"].join(";"),t}showMilestone(e,t=!1){window.clearTimeout(this.milestoneTimer),window.clearTimeout(this.milestoneClassTimer),this.milestoneEl.textContent=e,this.milestoneEl.classList.toggle("perfect",t),this.milestoneEl.style.opacity="1";const n=t?y.PERFECT_MILESTONE_HOLD_MS:1e3;this.milestoneTimer=window.setTimeout(()=>{this.milestoneEl.style.opacity="0",this.milestoneClassTimer=window.setTimeout(()=>{this.milestoneEl.classList.remove("perfect")},380)},n)}updateMilestoneAnchor(e,t,n){const i=t.getBoundingClientRect();if(this.tmpProj.copy(n).project(e),!Number.isFinite(this.tmpProj.x)||!Number.isFinite(this.tmpProj.y)||!Number.isFinite(this.tmpProj.z))return;const r=i.width*.5,o=(-this.tmpProj.y*.5+.5)*i.height;this.milestoneEl.style.left=`${r.toFixed(1)}px`,this.milestoneEl.style.top=`${o.toFixed(1)}px`}flashScreen(){this.flashEl.classList.remove("perfect-hit"),this.flashEl.style.opacity="1",window.setTimeout(()=>{this.flashEl.style.opacity="0"},y.SCREEN_FLASH_DURATION)}flashScreenPerfect(){window.clearTimeout(this.perfectFlashTimer),this.flashEl.classList.add("perfect-hit"),this.flashEl.style.opacity="1",window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{this.flashEl.style.opacity="0"})}),this.perfectFlashTimer=window.setTimeout(()=>{this.flashEl.classList.remove("perfect-hit")},y.PERFECT_FLASH_DURATION_MS+180)}updateTouchHints(e,t,n,i,r,o){if(!t||e>=5e3){this.touchHintLeftEl.style.opacity="0",this.touchHintRightEl.style.opacity="0";return}const c=i.getBoundingClientRect(),l=c.width*.22,h=c.width*.78,d=(-this.tmpProj.copy(r).project(n).y*.5+.5)*c.height,_=(-this.tmpProj.copy(o).project(n).y*.5+.5)*c.height,g=(d+_)*.5;this.touchHintLeftEl.style.left=`${l.toFixed(1)}px`,this.touchHintLeftEl.style.top=`${g.toFixed(1)}px`,this.touchHintRightEl.style.left=`${h.toFixed(1)}px`,this.touchHintRightEl.style.top=`${g.toFixed(1)}px`;const m=Math.floor(e/380)%2;this.touchHintLeftEl.style.opacity=m===0?"1":"0",this.touchHintRightEl.style.opacity=m===1?"1":"0"}reset(){window.clearTimeout(this.milestoneTimer),window.clearTimeout(this.milestoneClassTimer),window.clearTimeout(this.perfectFlashTimer),this.milestoneEl.classList.remove("perfect"),this.milestoneEl.style.opacity="0",this.flashEl.classList.remove("perfect-hit"),this.flashEl.style.opacity="0",this.touchHintLeftEl.style.opacity="0",this.touchHintRightEl.style.opacity="0"}}class GS{constructor(e,t){this.playingInternal=!1,this.hasStarted=!1,this.curMix=0,this.speedT=0,this.BPM_MIN=110,this.BPM_MAX=160,this.beatAccSec=0,this.eighthAccSec=0,this.sixteenthAccSec=0,this.beatCount=0,this.section=0,this.BEATS_PER_SECTION=8,this.NUM_SECTIONS=4,this.bassPatterns=[[82.41,82.41,98,82.41,61.74,82.41,98,110],[65.41,65.41,82.41,98,65.41,82.41,98,130.81],[98,98,123.47,98,73.42,98,123.47,146.83],[110,110,130.81,110,82.41,110,130.81,82.41]],this.bassStep=0,this.arpPatterns=[[329.63,392,493.88,659.25,493.88,392,659.25,783.99],[261.63,329.63,392,523.25,392,329.63,523.25,659.25],[392,493.88,587.33,783.99,587.33,493.88,783.99,987.77],[440,523.25,659.25,880,659.25,523.25,880,659.25]],this.arpStep=0,this.leadMelody=[659.25,587.33,493.88,392,329.63,392,493.88,659.25,523.25,587.33,659.25,783.99,659.25,587.33,523.25,493.88,783.99,739.99,659.25,587.33,493.88,587.33,783.99,880,880,783.99,659.25,523.25,440,493.88,587.33,659.25],this.leadStep=0,this.padChords=[[164.81,246.94],[130.81,196],[196,293.66],[220,329.63]],this.ctx=e,this.mix=e.createGain(),this.mix.gain.value=0,this.mix.connect(t)}build(){const e=this.ctx,t=this.mix,n=Math.floor(e.sampleRate*.035);this.hatNoise=e.createBuffer(1,n,e.sampleRate);const i=this.hatNoise.getChannelData(0);for(let c=0;c<n;c++)i[c]=(Math.random()*2-1)*(1-c/n)**1.5;const r=Math.floor(e.sampleRate*.08);this.snareNoise=e.createBuffer(1,r,e.sampleRate);const o=this.snareNoise.getChannelData(0);for(let c=0;c<r;c++)o[c]=(Math.random()*2-1)*(1-c/r)**.8;this.kickOsc=e.createOscillator(),this.kickOsc.type="sine",this.kickOsc.frequency.value=60,this.kickAmp=e.createGain(),this.kickAmp.gain.value=1e-4,this.kickOsc.connect(this.kickAmp).connect(t),this.kickOsc.start(0),this.hatBus=e.createGain(),this.hatBus.gain.value=0,this.hatBus.connect(t),this.snareBus=e.createGain(),this.snareBus.gain.value=0,this.snareBus.connect(t),this.bassOsc=e.createOscillator(),this.bassOsc.type="sawtooth",this.bassOsc.frequency.value=this.bassPatterns[0][0],this.bassFilter=e.createBiquadFilter(),this.bassFilter.type="lowpass",this.bassFilter.frequency.value=200,this.bassFilter.Q.value=1.5,this.bassGain=e.createGain(),this.bassGain.gain.value=.18,this.bassOsc.connect(this.bassFilter).connect(this.bassGain).connect(t),this.bassOsc.start(0),this.arpOsc=e.createOscillator(),this.arpOsc.type="triangle",this.arpOsc.frequency.value=this.arpPatterns[0][0],this.arpFilter=e.createBiquadFilter(),this.arpFilter.type="lowpass",this.arpFilter.frequency.value=600,this.arpFilter.Q.value=2,this.arpGain=e.createGain(),this.arpGain.gain.value=0,this.arpOsc.connect(this.arpFilter).connect(this.arpGain).connect(t),this.arpOsc.start(0),this.leadOsc=e.createOscillator(),this.leadOsc.type="sine",this.leadOsc.frequency.value=this.leadMelody[0],this.leadFilter=e.createBiquadFilter(),this.leadFilter.type="lowpass",this.leadFilter.frequency.value=800,this.leadFilter.Q.value=1.5,this.leadGain=e.createGain(),this.leadGain.gain.value=0,this.leadOsc.connect(this.leadFilter).connect(this.leadGain).connect(t),this.leadOsc.start(0),this.padFilter=e.createBiquadFilter(),this.padFilter.type="lowpass",this.padFilter.frequency.value=300,this.padFilter.Q.value=.7,this.padGain=e.createGain(),this.padGain.gain.value=.06,this.padFilter.connect(this.padGain).connect(t),this.padOsc1=e.createOscillator(),this.padOsc1.type="sine",this.padOsc1.frequency.value=this.padChords[0][0],this.padOsc1.connect(this.padFilter),this.padOsc1.start(0),this.padOsc2=e.createOscillator(),this.padOsc2.type="sine",this.padOsc2.frequency.value=this.padChords[0][1];const a=e.createGain();a.gain.value=.7,this.padOsc2.connect(a).connect(this.padFilter),this.padOsc2.start(0)}update(e,t,n){t&&(this.hasStarted=!0),this.playingInternal=this.hasStarted,this.speedT=t?Math.max(0,Math.min(1,n)):0;const i=Math.min(1,12*e),r=this.hasStarted?1:0;this.curMix+=(r-this.curMix)*i,this.mix.gain.value=this.curMix;const a=60/(this.BPM_MIN+this.speedT*(this.BPM_MAX-this.BPM_MIN)),c=a/2,l=a/4;this.beatAccSec+=e,this.eighthAccSec+=e,this.sixteenthAccSec+=e;const h=this.ctx.currentTime;if(this.beatAccSec>=a){this.beatAccSec-=a,this.beatCount++,this.triggerKick(),this.leadStep=(this.leadStep+1)%this.leadMelody.length,this.leadOsc.frequency.setTargetAtTime(this.leadMelody[this.leadStep],h,.03);const A=this.BEATS_PER_SECTION*this.NUM_SECTIONS,S=Math.floor(this.beatCount%A/this.BEATS_PER_SECTION);S!==this.section&&(this.section=S,this.bassStep=0,this.arpStep=0,this.padOsc1.frequency.setTargetAtTime(this.padChords[this.section][0],h,.3),this.padOsc2.frequency.setTargetAtTime(this.padChords[this.section][1],h,.3))}if(this.eighthAccSec>=c){this.eighthAccSec-=c,this.triggerHat();const A=this.bassPatterns[this.section];this.bassStep=(this.bassStep+1)%A.length,this.bassOsc.frequency.setTargetAtTime(A[this.bassStep],h,.02),this.beatCount%2===0&&this.triggerSnare()}if(this.sixteenthAccSec>=l){this.sixteenthAccSec-=l;const A=this.arpPatterns[this.section];this.arpStep=(this.arpStep+1)%A.length,this.arpOsc.frequency.setTargetAtTime(A[this.arpStep],h,.01)}const u=this.speedT,d=this.curMix,f=(.15+u*.25)*d;this.hatBus.gain.value+=(f-this.hatBus.gain.value)*i;const _=Math.max(0,(u-.25)/.75)*.3*d;this.snareBus.gain.value+=(_-this.snareBus.gain.value)*i;const g=200+u*400;this.bassFilter.frequency.setTargetAtTime(g,h,.1);const m=(.14+u*.08)*d;this.bassGain.gain.value+=(m-this.bassGain.gain.value)*i;const p=Math.max(0,(u-.4)/.6),T=600+p*2e3;this.arpFilter.frequency.setTargetAtTime(T,h,.1);const M=p*.08*d;this.arpGain.gain.value+=(M-this.arpGain.gain.value)*i;const x=Math.max(0,(u-.3)/.5),C=800+x*2500;this.leadFilter.frequency.setTargetAtTime(C,h,.1);const w=x*.07*d;this.leadGain.gain.value+=(w-this.leadGain.gain.value)*i;const b=300+u*600;this.padFilter.frequency.setTargetAtTime(b,h,.15);const I=(.04+u*.04)*d;this.padGain.gain.value+=(I-this.padGain.gain.value)*i}triggerKick(){if(!this.playingInternal)return;const e=this.ctx.currentTime,t=.25+this.speedT*.15;this.kickOsc.frequency.cancelScheduledValues(e),this.kickOsc.frequency.setValueAtTime(80,e),this.kickOsc.frequency.exponentialRampToValueAtTime(30,e+.07),this.kickAmp.gain.cancelScheduledValues(e),this.kickAmp.gain.setValueAtTime(t,e),this.kickAmp.gain.exponentialRampToValueAtTime(1e-4,e+.09)}triggerHat(){if(!this.playingInternal)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.hatNoise;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;const i=this.ctx.createGain();i.gain.value=.12+this.speedT*.08,t.connect(n).connect(i).connect(this.hatBus),t.start(e),t.stop(e+.04)}triggerSnare(){if(!this.playingInternal||this.speedT<.25)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.snareNoise;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=2e3;const i=this.ctx.createGain();i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.08),t.connect(n).connect(i).connect(this.snareBus),t.start(e),t.stop(e+.08);const r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(200,e),r.frequency.exponentialRampToValueAtTime(80,e+.04);const o=this.ctx.createGain();o.gain.setValueAtTime(.18,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.05),r.connect(o).connect(this.snareBus),r.start(e),r.stop(e+.06)}}class zS{constructor(){this.ctx=null,this.master=null,this.sfxBus=null,this.musicBus=null,this.music=null,this.loopsBuilt=!1,this.bgMusicEl=null,this.bgMusicSource=null,this.bgMusicGain=null,this.appFocused=!0,this.engineOsc=null,this.engineOsc2=null,this.engineOsc3=null,this.engineFilter=null,this.engineGain=null,this.turboSrc=null,this.turboFilter=null,this.turboGain=null,this.windSrc=null,this.windFilter=null,this.windGain=null,this.draftOsc=null,this.draftGain=null,this.trafficVoices=[],this.muted=!1,this.musicMuted=!1}unlock(){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx||(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=y.AUDIO_MASTER,this.master.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=1,this.sfxBus.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=y.AUDIO_MUSIC_MASTER,this.musicBus.connect(this.master),this.buildLoops()),this.ctx&&this.master&&this.bgMusicEl&&!this.bgMusicSource&&(this.bgMusicSource=this.ctx.createMediaElementSource(this.bgMusicEl),this.bgMusicGain=this.ctx.createGain(),this.bgMusicGain.gain.value=0,this.bgMusicSource.connect(this.bgMusicGain),this.bgMusicGain.connect(this.master),this.bgMusicEl.volume=1,this.bgMusicEl.muted=!1),this.applyFocusState())}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:y.AUDIO_MASTER),this.bgMusicEl&&(this.bgMusicEl.muted=e)}isMuted(){return this.muted}setMusicMuted(e){this.musicMuted=e,this.musicBus&&(this.musicBus.gain.value=e?0:y.AUDIO_MUSIC_MASTER)}isMusicMuted(){return this.musicMuted}setAppFocused(e){this.appFocused=e,this.applyFocusState()}applyFocusState(){this.ctx&&(this.appFocused?this.ctx.resume():this.ctx.suspend()),this.bgMusicEl&&(this.appFocused&&y.AUDIO_BG_MUSIC_ENABLED||this.bgMusicEl.pause())}buildLoops(){if(!this.ctx||!this.sfxBus||!this.musicBus||this.loopsBuilt)return;this.loopsBuilt=!0;const e=this.ctx,t=this.sfxBus,n=e.createGain();n.gain.value=1,this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=y.AUDIO_ENGINE_FILTER_HZ,this.engineFilter.Q.value=2.5,this.engineGain=e.createGain(),this.engineGain.gain.value=0,n.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(t),this.engineOsc=e.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=y.AUDIO_ENGINE_HZ_MIN;const i=e.createGain();i.gain.value=.5,this.engineOsc.connect(i),i.connect(n),this.engineOsc2=e.createOscillator(),this.engineOsc2.type="square",this.engineOsc2.frequency.value=y.AUDIO_ENGINE_HZ_MIN*2;const r=e.createGain();r.gain.value=.3,this.engineOsc2.connect(r),r.connect(n),this.engineOsc3=e.createOscillator(),this.engineOsc3.type="sawtooth",this.engineOsc3.frequency.value=y.AUDIO_ENGINE_HZ_MIN*3;const o=e.createGain();o.gain.value=.15,this.engineOsc3.connect(o),o.connect(n);const a=this.makeNoiseBuffer(2);this.turboSrc=e.createBufferSource(),this.turboSrc.buffer=a,this.turboSrc.loop=!0,this.turboFilter=e.createBiquadFilter(),this.turboFilter.type="bandpass",this.turboFilter.frequency.value=3e3,this.turboFilter.Q.value=5,this.turboGain=e.createGain(),this.turboGain.gain.value=0,this.turboSrc.connect(this.turboFilter),this.turboFilter.connect(this.turboGain),this.turboGain.connect(t);const c=this.makeNoiseBuffer(y.AUDIO_WIND_NOISE_SEC);this.windSrc=e.createBufferSource(),this.windSrc.buffer=c,this.windSrc.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=y.AUDIO_WIND_FILTER_HZ,this.windGain=e.createGain(),this.windGain.gain.value=0,this.windSrc.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(t),this.draftOsc=e.createOscillator(),this.draftOsc.type="sine",this.draftOsc.frequency.value=y.AUDIO_DRAFT_HZ,this.draftGain=e.createGain(),this.draftGain.gain.value=0,this.draftOsc.connect(this.draftGain),this.draftGain.connect(t),this.engineOsc.start(0),this.engineOsc2.start(0),this.engineOsc3.start(0),this.turboSrc.start(0),this.draftOsc.start(0),this.windSrc.start(0);for(let l=0;l<y.AUDIO_TRAFFIC_VOICES;l++){const h=y.AUDIO_TRAFFIC_HZ_BASE+(Math.random()*2-1)*y.AUDIO_TRAFFIC_HZ_VARIATION,u=e.createGain();u.gain.value=1;const d=e.createOscillator();d.type="sawtooth",d.frequency.value=h;const f=e.createGain();f.gain.value=.75,d.connect(f),f.connect(u);const _=e.createOscillator();_.type="square",_.frequency.value=h*2;const g=e.createGain();g.gain.value=.45,_.connect(g),g.connect(u);const m=e.createOscillator();m.type="sawtooth",m.frequency.value=h*3;const p=e.createGain();p.gain.value=.2,m.connect(p),p.connect(u);const T=e.createBiquadFilter();T.type="lowpass",T.frequency.value=y.AUDIO_TRAFFIC_FILTER_HZ,T.Q.value=1.5;const M=e.createGain();M.gain.value=0;const x=new StereoPannerNode(e);u.connect(T),T.connect(M),M.connect(x),x.connect(t),d.start(0),_.start(0),m.start(0),this.trafficVoices.push({osc1:d,osc2:_,osc3:m,filter:T,gain:M,panner:x,baseHz:h})}this.music=new GS(e,this.musicBus),this.music.build()}makeNoiseBuffer(e){const t=this.ctx,n=Math.max(1,Math.floor(t.sampleRate*e)),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let o=0;o<n;o++)r[o]=Math.random()*2-1;return i}update(e,t){var d,f,_;this.bgMusicGain&&(this.bgMusicGain.gain.value=0),this.bgMusicEl&&(this.bgMusicSource||(this.bgMusicEl.volume=y.AUDIO_BG_MUSIC_VOLUME,this.bgMusicEl.muted=!0));const n=y.BASE_SCROLL_SPEED,i=y.MAX_SCROLL_SPEED,r=Math.max(1e-6,i-n),o=Math.max(0,Math.min(1,(t.scrollPerFrame-n)/r));if((d=this.music)==null||d.update(e,t.playing,o),this.musicBus&&!this.musicMuted&&(this.musicBus.gain.value=y.AUDIO_MUSIC_MASTER),!this.ctx||!this.engineGain||!this.windGain||!this.draftGain||!this.engineOsc)return;const a=this.ctx.currentTime;{let g=y.AUDIO_ENGINE_HZ_MIN+o*(y.AUDIO_ENGINE_HZ_MAX-y.AUDIO_ENGINE_HZ_MIN);if(t.burstActive&&(g+=y.AUDIO_ENGINE_BURST_HZ_ADD),this.engineOsc.frequency.setTargetAtTime(g,a,.05),(f=this.engineOsc2)==null||f.frequency.setTargetAtTime(g*2,a,.05),(_=this.engineOsc3)==null||_.frequency.setTargetAtTime(g*3,a,.05),this.engineFilter){const m=800+o*(y.AUDIO_ENGINE_FILTER_HZ-800);this.engineFilter.frequency.setTargetAtTime(m,a,.08)}if(this.turboFilter&&this.turboGain){const m=2e3+o*4e3;this.turboFilter.frequency.setTargetAtTime(m,a,.1);const p=t.playing?.04+o*.08:0;this.turboGain.gain.value+=(p-this.turboGain.gain.value)*Math.min(1,6*e)}}const c=t.playing&&y.AUDIO_ENGINE_ENABLED?y.AUDIO_ENGINE_GAIN*(y.AUDIO_ENGINE_GAIN_MIN_MIX+(1-y.AUDIO_ENGINE_GAIN_MIN_MIX)*o)*(t.burstActive?y.AUDIO_ENGINE_BURST_GAIN_MUL:1):0,l=t.playing?y.AUDIO_WIND_GAIN*(y.AUDIO_WIND_MIN_MIX+(1-y.AUDIO_WIND_MIN_MIX)*o):0,h=t.playing&&t.inDraft?y.AUDIO_DRAFT_GAIN*(y.AUDIO_DRAFT_MIN_MIX+(1-y.AUDIO_DRAFT_MIN_MIX)*t.draftMeter):0,u=Math.min(1,y.AUDIO_LOOP_SMOOTH*e);this.engineGain.gain.value+=(c-this.engineGain.gain.value)*u,this.windGain.gain.value+=(l-this.windGain.gain.value)*u,this.draftGain.gain.value+=(h-this.draftGain.gain.value)*u}updateTrafficEngines(e,t,n,i,r){const o=this.trafficVoices.length;if(!this.ctx||o===0)return;const a=t&&y.AUDIO_ENABLED&&y.AUDIO_TRAFFIC_ENABLED,c=r.length>>1,l=y.AUDIO_TRAFFIC_MAX_DISTANCE,h=y.AUDIO_TRAFFIC_MAX_GAIN,u=y.AUDIO_TRAFFIC_PAN_RANGE,d=y.AUDIO_TRAFFIC_DOPPLER_STRENGTH,f=y.AUDIO_TRAFFIC_DOPPLER_REF_DIST,_=Math.min(1,y.AUDIO_TRAFFIC_SMOOTH*e),g=this.ctx.currentTime,m=[];for(let p=0;p<c;p++){const T=r[p*2]-n,M=r[p*2+1]-i;m.push({ci:p,dist:Math.sqrt(T*T+M*M)})}m.sort((p,T)=>p.dist-T.dist);for(let p=0;p<o;p++){const T=this.trafficVoices[p],M=p<m.length?m[p]:null;let x=0,C=0,w=T.baseHz;if(M&&a&&M.dist<l){const b=M.ci,I=r[b*2]-n,A=r[b*2+1]-i,S=Math.max(0,1-M.dist/l);x=h*S**1.2,C=Math.max(-1,Math.min(1,I/u));const L=1+d*Math.max(-1,Math.min(1,A/f));w=T.baseHz*L}T.gain.gain.value+=(x-T.gain.gain.value)*_,T.panner.pan.value+=(C-T.panner.pan.value)*_,T.osc1.frequency.setTargetAtTime(w,g,.05),T.osc2.frequency.setTargetAtTime(w*2,g,.05),T.osc3.frequency.setTargetAtTime(w*3,g,.05)}}playChainUp(e){if(!this.ctx||!this.sfxBus)return;const t=this.ctx,n=this.sfxBus,i=t.currentTime,r=440+Math.min(e,25)*28,o=.12,a=t.createOscillator();a.type="sine",a.frequency.setValueAtTime(r,i),a.frequency.exponentialRampToValueAtTime(r*1.25,i+o*.6);const c=t.createGain();c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.28,i+.008),c.gain.exponentialRampToValueAtTime(1e-4,i+o),a.connect(c),c.connect(n),a.start(i),a.stop(i+o+.02);const l=t.createOscillator();l.type="triangle",l.frequency.setValueAtTime(r*1.5,i),l.frequency.exponentialRampToValueAtTime(r*1.8,i+o*.6);const h=t.createGain();h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(.14,i+.008),h.gain.exponentialRampToValueAtTime(1e-4,i+o),l.connect(h),h.connect(n),l.start(i),l.stop(i+o+.02)}playSlingshot(){if(!this.ctx||!this.sfxBus)return;const e=this.ctx,t=e.currentTime,n=y.AUDIO_SLINGSHOT_DURATION,i=Math.floor(e.sampleRate*n),r=e.createBuffer(1,i,e.sampleRate),o=r.getChannelData(0);for(let h=0;h<i;h++){const u=1-h/i;o[h]=(Math.random()*2-1)*u}const a=e.createBufferSource();a.buffer=r;const c=e.createBiquadFilter();c.type="bandpass",c.Q.value=1.2,c.frequency.setValueAtTime(y.AUDIO_SLINGSHOT_BP_HZ_START,t),c.frequency.exponentialRampToValueAtTime(y.AUDIO_SLINGSHOT_BP_HZ_END,t+n);const l=e.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(y.AUDIO_SLINGSHOT_GAIN,t+.02),l.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(c),c.connect(l),l.connect(this.sfxBus),a.start(t),a.stop(t+n+.04)}playMilestone(e){if(!this.ctx||!this.sfxBus)return;const t=this.ctx,n=y.AUDIO_MILESTONE_GAIN,i=(r,o,a)=>{const c=t.createOscillator();c.type="sine",c.frequency.value=r;const l=t.createGain(),h=t.currentTime+o;l.gain.setValueAtTime(0,h),l.gain.linearRampToValueAtTime(n,h+.012),l.gain.exponentialRampToValueAtTime(1e-4,h+a),c.connect(l),l.connect(this.sfxBus),c.start(h),c.stop(h+a+.06)};e===5?i(523.25,0,.2):e===10?(i(659.25,0,.22),i(987.77,0,.22)):e===15?(i(523.25,0,.09),i(659.25,.08,.09),i(783.99,.16,.09),i(1046.5,.24,.14)):e>=20&&(i(587.33,0,.28),i(739.99,0,.28),i(880,0,.28),i(1174.66,0,.3))}playLaneSwitch(){if(!this.ctx||!this.sfxBus)return;const e=this.ctx,t=this.sfxBus,n=e.currentTime,i=.22,r=Math.floor(e.sampleRate*i),o=e.createBuffer(1,r,e.sampleRate),a=o.getChannelData(0);for(let T=0;T<r;T++){const M=Math.min(1,T/(r*.05))*(1-T/r)**.8;a[T]=(Math.random()*2-1)*M}const c=e.createBufferSource();c.buffer=o;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(3200,n),l.frequency.exponentialRampToValueAtTime(1800,n+i),l.Q.value=3;const h=e.createGain();h.gain.setValueAtTime(.28,n),h.gain.exponentialRampToValueAtTime(1e-4,n+i),c.connect(l),l.connect(h),h.connect(t),c.start(n),c.stop(n+i+.02);const u=.15,d=e.createOscillator();d.type="sawtooth",d.frequency.setValueAtTime(1400+Math.random()*400,n),d.frequency.exponentialRampToValueAtTime(600,n+u);const f=e.createBiquadFilter();f.type="bandpass",f.frequency.value=1200,f.Q.value=4;const _=e.createGain();_.gain.setValueAtTime(.1,n),_.gain.exponentialRampToValueAtTime(1e-4,n+u),d.connect(f),f.connect(_),_.connect(t),d.start(n),d.stop(n+u+.02);const g=.1,m=e.createOscillator();m.type="sine",m.frequency.setValueAtTime(140,n),m.frequency.exponentialRampToValueAtTime(50,n+g);const p=e.createGain();p.gain.setValueAtTime(.2,n),p.gain.exponentialRampToValueAtTime(1e-4,n+g),m.connect(p),p.connect(t),m.start(n),m.stop(n+g+.02)}playFlyby(){if(!this.ctx||!this.sfxBus)return;const e=this.ctx,t=this.sfxBus,n=e.currentTime,i=1.4,r=.35,o=e.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(350,n),o.frequency.exponentialRampToValueAtTime(220,n+r),o.frequency.exponentialRampToValueAtTime(90,n+i);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(4e3,n),a.frequency.setValueAtTime(6e3,n+r),a.frequency.exponentialRampToValueAtTime(1500,n+i),a.Q.value=1.5;const c=e.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(.35,n+r*.7),c.gain.setValueAtTime(.35,n+r),c.gain.exponentialRampToValueAtTime(1e-4,n+i),o.connect(a),a.connect(c),c.connect(t),o.start(n),o.stop(n+i+.02);const l=e.createOscillator();l.type="square",l.frequency.setValueAtTime(700,n),l.frequency.exponentialRampToValueAtTime(440,n+r),l.frequency.exponentialRampToValueAtTime(180,n+i);const h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=1200,h.Q.value=2;const u=e.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.linearRampToValueAtTime(.15,n+r*.7),u.gain.setValueAtTime(.15,n+r),u.gain.exponentialRampToValueAtTime(1e-4,n+i),l.connect(h),h.connect(u),u.connect(t),l.start(n),l.stop(n+i+.02);const d=e.createOscillator();d.type="sine",d.frequency.setValueAtTime(5e3,n),d.frequency.exponentialRampToValueAtTime(3e3,n+r),d.frequency.exponentialRampToValueAtTime(1200,n+i);const f=e.createGain();f.gain.setValueAtTime(1e-4,n),f.gain.linearRampToValueAtTime(.06,n+r*.7),f.gain.exponentialRampToValueAtTime(1e-4,n+i),d.connect(f),f.connect(t),d.start(n),d.stop(n+i+.02);const _=.8,g=Math.floor(e.sampleRate*_),m=e.createBuffer(1,g,e.sampleRate),p=m.getChannelData(0);for(let w=0;w<g;w++){const b=Math.sin(w/g*Math.PI);p[w]=(Math.random()*2-1)*b}const T=e.createBufferSource();T.buffer=m;const M=e.createBiquadFilter();M.type="bandpass",M.Q.value=.8,M.frequency.setValueAtTime(3e3,n+r-.15),M.frequency.exponentialRampToValueAtTime(400,n+r+_-.15);const x=e.createGain(),C=r-.15;x.gain.setValueAtTime(1e-4,n),x.gain.linearRampToValueAtTime(.3,n+C+_*.25),x.gain.exponentialRampToValueAtTime(1e-4,n+C+_),T.connect(M),M.connect(x),x.connect(t),T.start(n+Math.max(0,C)),T.stop(n+C+_+.02)}playLightRed(){if(!this.ctx||!this.sfxBus)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(440,t),n.frequency.setValueAtTime(440,t+.06);const i=e.createGain();i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.001,t+.12),n.connect(i),i.connect(this.sfxBus),n.start(t),n.stop(t+.15)}playLightGreen(){if(!this.ctx||!this.sfxBus)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(880,t);const i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(1320,t);const r=e.createGain();r.gain.setValueAtTime(.4,t),r.gain.linearRampToValueAtTime(.4,t+.08),r.gain.exponentialRampToValueAtTime(.001,t+.25),n.connect(r),i.connect(r),r.connect(this.sfxBus),n.start(t),i.start(t),n.stop(t+.28),i.stop(t+.28)}playWhoosh(e){if(!this.ctx||!this.sfxBus)return;const t=this.ctx,n=this.sfxBus,i=t.currentTime,r=.7+e*.3,o=.35-e*.12,a=Math.floor(t.sampleRate*o),c=t.createBuffer(1,a,t.sampleRate),l=c.getChannelData(0);for(let g=0;g<a;g++){const m=Math.sin(g/a*Math.PI);l[g]=(Math.random()*2-1)*m}const h=t.createBufferSource();h.buffer=c;const u=t.createBiquadFilter();u.type="bandpass",u.Q.value=1.2,u.frequency.setValueAtTime(2e3+e*2e3,i),u.frequency.exponentialRampToValueAtTime(300+e*200,i+o);const d=t.createGain();d.gain.setValueAtTime(1e-4,i),d.gain.linearRampToValueAtTime(.4*r,i+o*.25),d.gain.exponentialRampToValueAtTime(1e-4,i+o),h.connect(u),u.connect(d),d.connect(n),h.start(i),h.stop(i+o+.02);const f=t.createOscillator();f.type="sine",f.frequency.setValueAtTime(80,i),f.frequency.exponentialRampToValueAtTime(35,i+.08);const _=t.createGain();_.gain.setValueAtTime(.22*r,i),_.gain.exponentialRampToValueAtTime(1e-4,i+.1),f.connect(_),_.connect(n),f.start(i),f.stop(i+.12)}playCrash(){if((!this.ctx||!this.sfxBus)&&(this.unlock(),!this.ctx||!this.sfxBus))return;const e=this.ctx,t=this.sfxBus,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(100,n),i.frequency.exponentialRampToValueAtTime(20,n+.5);const r=e.createGain();r.gain.setValueAtTime(.65,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.5),i.connect(r),r.connect(t),i.start(n),i.stop(n+.52);const o=e.createOscillator();o.type="triangle",o.frequency.setValueAtTime(55,n+.02),o.frequency.exponentialRampToValueAtTime(18,n+.4);const a=e.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.45,n+.025),a.gain.exponentialRampToValueAtTime(1e-4,n+.4),o.connect(a),a.connect(t),o.start(n),o.stop(n+.42);const c=.35,l=Math.floor(e.sampleRate*c),h=e.createBuffer(1,l,e.sampleRate),u=h.getChannelData(0);for(let k=0;k<l;k++){const Q=(1-k/l)**.5;u[k]=(Math.random()*2-1)*Q}const d=e.createBufferSource();d.buffer=h;const f=e.createBiquadFilter();f.type="bandpass",f.frequency.setValueAtTime(2800,n),f.frequency.exponentialRampToValueAtTime(600,n+c),f.Q.value=2.2;const _=e.createGain();_.gain.setValueAtTime(.55,n),_.gain.exponentialRampToValueAtTime(1e-4,n+c),d.connect(f),f.connect(_),_.connect(t),d.start(n),d.stop(n+c+.02);const g=.6,m=Math.floor(e.sampleRate*g),p=e.createBuffer(1,m,e.sampleRate),T=p.getChannelData(0);for(let k=0;k<m;k++){const Q=(1-k/m)**1.4,xe=Math.random()>.65?1:.2;T[k]=(Math.random()*2-1)*Q*xe}const M=e.createBufferSource();M.buffer=p;const x=e.createBiquadFilter();x.type="highpass",x.frequency.value=4e3,x.Q.value=.6;const C=e.createGain();C.gain.setValueAtTime(0,n),C.gain.linearRampToValueAtTime(.32,n+.03),C.gain.exponentialRampToValueAtTime(1e-4,n+g),M.connect(x),x.connect(C),C.connect(t),M.start(n),M.stop(n+g+.02);const w=.04,b=Math.floor(e.sampleRate*w),I=e.createBuffer(1,b,e.sampleRate),A=I.getChannelData(0);for(let k=0;k<b;k++){const Q=(1-k/b)**4;A[k]=Math.sign(Math.random()-.5)*Q}const S=e.createBufferSource();S.buffer=I;const L=e.createGain();L.gain.setValueAtTime(.7,n),L.gain.exponentialRampToValueAtTime(1e-4,n+w),S.connect(L),L.connect(t),S.start(n),S.stop(n+w+.02);const H=.55,B=e.createOscillator();B.type="sawtooth",B.frequency.setValueAtTime(1100,n),B.frequency.exponentialRampToValueAtTime(350,n+H);const q=e.createBiquadFilter();q.type="bandpass",q.frequency.value=800,q.Q.value=4;const Y=e.createGain();Y.gain.setValueAtTime(.2,n),Y.gain.exponentialRampToValueAtTime(1e-4,n+H),B.connect(q),q.connect(Y),Y.connect(t),B.start(n),B.stop(n+H+.02);const X=.08,K=.4,V=Math.floor(e.sampleRate*K),ne=e.createBuffer(1,V,e.sampleRate),ue=ne.getChannelData(0);for(let k=0;k<V;k++){const Q=(1-k/V)**.8,xe=Math.sin(k/e.sampleRate*Math.PI*2*1800);ue[k]=(Math.random()*2-1)*Q*.5+xe*Q*.5}const me=e.createBufferSource();me.buffer=ne;const Pe=e.createBiquadFilter();Pe.type="bandpass",Pe.frequency.value=1600,Pe.Q.value=3;const Xe=e.createGain();Xe.gain.setValueAtTime(0,n),Xe.gain.linearRampToValueAtTime(.25,n+X),Xe.gain.exponentialRampToValueAtTime(1e-4,n+X+K),me.connect(Pe),Pe.connect(Xe),Xe.connect(t),me.start(n),me.stop(n+X+K+.02)}playDraftFillTick(e){if(!this.ctx||!this.sfxBus)return;const t=this.ctx,n=t.currentTime,i=90+e*90,r=.1,o=t.createOscillator();o.type="sine",o.frequency.setValueAtTime(i,n),o.frequency.linearRampToValueAtTime(i*1.04,n+r);const a=t.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.06+e*.03,n+.01),a.gain.exponentialRampToValueAtTime(1e-4,n+r),o.connect(a),a.connect(this.sfxBus),o.start(n),o.stop(n+r+.01)}playDraftComplete(){if(!this.ctx||!this.sfxBus)return;const e=this.ctx,t=this.sfxBus,n=e.currentTime,i=(r,o,a)=>{const c=e.createOscillator();c.type="sine",c.frequency.setValueAtTime(r,n+o);const l=e.createGain();l.gain.setValueAtTime(0,n+o),l.gain.linearRampToValueAtTime(.14,n+o+.015),l.gain.exponentialRampToValueAtTime(1e-4,n+o+a),c.connect(l),l.connect(t),c.start(n+o),c.stop(n+o+a+.02)};i(330,0,.18),i(440,.1,.18),i(550,.2,.25)}}const hs=600,mo=3,kS=.14,VS=.8,WS=.02,_o=.55,nu=.03,iu=.3,XS=.015,su=3,qS=45,YS=`
  attribute float aAlpha;
  varying float vAlpha;
  void main() {
    vAlpha = aAlpha;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`,ZS=`
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
  }
`;class KS{constructor(){this.group=new lt,this.marks=[],this.dummy=new ut,this.nextSlot=0,this.spawnAcc=0,this.spawnInterval=.04,this.playerSpawnAcc=0,this.playerZ=0,this.group.name="TireMarks";const e=new Vt(kS,VS);e.rotateX(-Math.PI/2);const t=new Float32Array(hs);this.alphaAttr=new Do(t,1),this.alphaAttr.setUsage(Po),e.setAttribute("aAlpha",this.alphaAttr);const n=new Cn({vertexShader:YS,fragmentShader:ZS,uniforms:{uColor:{value:new Le(1710618)}},transparent:!0,depthWrite:!1,side:Rt});this.mesh=new Qu(e,n,hs),this.mesh.instanceMatrix.setUsage(Po),this.mesh.frustumCulled=!1,this.dummy.scale.set(0,0,0),this.dummy.updateMatrix();for(let i=0;i<hs;i++)this.mesh.setMatrixAt(i,this.dummy.matrix),this.alphaAttr.setX(i,0),this.marks.push({age:mo+1,alive:!1});this.mesh.instanceMatrix.needsUpdate=!0,this.alphaAttr.needsUpdate=!0,this.group.add(this.mesh)}reset(){this.nextSlot=0,this.spawnAcc=0,this.playerSpawnAcc=0,this.dummy.scale.set(0,0,0),this.dummy.updateMatrix();for(let e=0;e<hs;e++)this.mesh.setMatrixAt(e,this.dummy.matrix),this.alphaAttr.setX(e,0),this.marks[e].age=mo+1,this.marks[e].alive=!1;this.mesh.instanceMatrix.needsUpdate=!0,this.alphaAttr.needsUpdate=!0}spawn(e,t){const n=this.nextSlot;this.nextSlot=(this.nextSlot+1)%hs;const i=this.marks[n];i.age=0,i.alive=!0,this.dummy.position.set(e,WS,t),this.dummy.scale.set(1,1,1),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix)}update(e,t,n,i,r){r!==void 0&&(this.playerZ=r),this.spawnAcc+=e;const o=this.spawnAcc>=this.spawnInterval;if(o&&(this.spawnAcc-=this.spawnInterval),o&&n.forEachPoolWindSlot((l,h,u,d,f)=>{if(!h)return;const _=y.TAXI_DIMENSIONS.width/2,g=f-y.TAXI_DIMENSIONS.length/2;this.spawn(d-_*_o,g),this.spawn(d+_*_o,g)}),i!==void 0&&r!==void 0&&(this.playerSpawnAcc+=e,this.playerSpawnAcc>=nu)){this.playerSpawnAcc-=nu;const l=y.TAXI_DIMENSIONS.width/2,h=r-y.TAXI_DIMENSIONS.length/2;this.spawn(i-l*_o,h),this.spawn(i+l*_o,h)}let a=!1,c=!1;for(let l=0;l<hs;l++){const h=this.marks[l];if(h.alive){if(h.age+=e,this.mesh.getMatrixAt(l,this.dummy.matrix),this.dummy.matrix.decompose(this.dummy.position,this.dummy.quaternion,this.dummy.scale),this.dummy.position.z-=t,h.age>=mo)h.alive=!1,this.dummy.scale.set(0,0,0),this.alphaAttr.setX(l,0);else{const u=1-h.age/mo;this.dummy.scale.set(1,1,1);const d=Math.abs(this.dummy.position.z-this.playerZ),f=Math.max(0,Math.min(1,(d-su)/(qS-su))),_=(iu+(XS-iu)*f)*u;this.alphaAttr.setX(l,_),c=!0}this.dummy.updateMatrix(),this.mesh.setMatrixAt(l,this.dummy.matrix),a=!0}}a&&(this.mesh.instanceMatrix.needsUpdate=!0),c&&(this.alphaAttr.needsUpdate=!0)}}const li=800,La=.8,ru=.025,ou=.018;class jS{constructor(){this.group=new lt,this.particles=[],this.spawnAcc=0,this.playerSpawnAcc=0,this.nextSlot=0,this.group.name="VehicleExhaust",this.positions=new Float32Array(li*3),this.alphas=new Float32Array(li);for(let n=0;n<li;n++)this.particles.push({alive:!1,age:0,vx:0,vy:0,vz:0}),this.positions[n*3+1]=-100;this.geo=new St,this.geo.setAttribute("position",new mt(this.positions,3)),this.geo.setAttribute("alpha",new mt(this.alphas,1));const e=new Cn({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Le(13421772)},uSize:{value:8}},vertexShader:`
        attribute float alpha;
        varying float vAlpha;
        uniform float uSize;
        void main() {
          vAlpha = alpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = uSize * (120.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying float vAlpha;
        uniform vec3 uColor;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          if (d > 1.0) discard;
          float a = vAlpha * (1.0 - d * d) * 0.45;
          gl_FragColor = vec4(uColor, a);
        }
      `}),t=new zs(this.geo,e);t.frustumCulled=!1,this.group.add(t)}reset(){this.spawnAcc=0,this.playerSpawnAcc=0;for(let e=0;e<li;e++)this.particles[e].alive=!1,this.positions[e*3+1]=-100,this.alphas[e]=0;this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}spawn(e,t,n){const i=this.nextSlot;for(let r=0;r<li;r++){const o=(i+r)%li,a=this.particles[o];if(!a.alive||a.age>La*.8){a.alive=!0,a.age=0,a.vx=(Math.random()-.5)*1.2,a.vy=.3+Math.random()*.8,a.vz=-(1.5+Math.random()*2),this.positions[o*3]=e+(Math.random()-.5)*.2,this.positions[o*3+1]=t,this.positions[o*3+2]=n,this.nextSlot=(o+1)%li;return}}}update(e,t,n,i,r){this.spawnAcc+=e;const o=this.spawnAcc>=ru;if(o&&(this.spawnAcc-=ru),o&&n.forEachPoolWindSlot((a,c,l,h,u)=>{if(!c)return;const d=u-y.TAXI_DIMENSIONS.length/2-.1,f=y.TAXI_DIMENSIONS.height*.3;this.spawn(h-.3,f,d),this.spawn(h+.3,f,d)}),i!==void 0&&r!==void 0&&(this.playerSpawnAcc+=e,this.playerSpawnAcc>=ou)){this.playerSpawnAcc-=ou;const a=r-y.TAXI_DIMENSIONS.length/2-.1,c=y.TAXI_DIMENSIONS.height*.3;this.spawn(i-.3,c,a),this.spawn(i+.3,c,a)}for(let a=0;a<li;a++){const c=this.particles[a];if(!c.alive)continue;if(c.age+=e,c.age>=La){c.alive=!1,this.positions[a*3+1]=-100,this.alphas[a]=0;continue}const l=c.age/La;this.positions[a*3]+=c.vx*e,this.positions[a*3+1]+=c.vy*e,this.positions[a*3+2]+=c.vz*e-t,c.vx*=.96,c.vy*=.94,c.vz*=.95,this.alphas[a]=(1-l)*(1-l)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}}const au="slipstream-loadout",cu="slipstream-highscore",$S={carId:"starter",bodyColorId:"white",wheelStyleId:"standard",wingColorId:"matchBody"};class JS{constructor(){this._highScore=0,this._loadout={...$S},this._highScore=parseInt(localStorage.getItem(cu)||"0",10),this.loadLoadout()}get highScore(){return this._highScore}get loadout(){return this._loadout}updateHighScore(e){return e>this._highScore?(this._highScore=e,localStorage.setItem(cu,e.toString()),!0):!1}isCarUnlocked(e){const t=yc.find(n=>n.id===e);return t?this._highScore>=t.unlockScore:!1}isBodyColorUnlocked(e){const t=Fs.find(n=>n.id===e);return t?this._highScore>=t.unlockScore:!1}isWheelStyleUnlocked(e){const t=Tr.find(n=>n.id===e);return t?this._highScore>=t.unlockScore:!1}isWingColorUnlocked(e){const t=Mr.find(n=>n.id===e);return t?this._highScore>=t.unlockScore:!1}getRequiredScore(e,t){var n,i,r,o;return e==="car"?((n=yc.find(a=>a.id===t))==null?void 0:n.unlockScore)??0:e==="body"?((i=Fs.find(a=>a.id===t))==null?void 0:i.unlockScore)??0:e==="wheel"?((r=Tr.find(a=>a.id===t))==null?void 0:r.unlockScore)??0:((o=Mr.find(a=>a.id===t))==null?void 0:o.unlockScore)??0}setLoadout(e){e.carId&&this.isCarUnlocked(e.carId)&&(this._loadout.carId=e.carId),e.bodyColorId&&this.isBodyColorUnlocked(e.bodyColorId)&&(this._loadout.bodyColorId=e.bodyColorId),e.wheelStyleId&&this.isWheelStyleUnlocked(e.wheelStyleId)&&(this._loadout.wheelStyleId=e.wheelStyleId),e.wingColorId&&this.isWingColorUnlocked(e.wingColorId)&&(this._loadout.wingColorId=e.wingColorId),this.saveLoadout()}loadLoadout(){try{const e=localStorage.getItem(au);if(e){const t=JSON.parse(e);t.carId&&this.isCarUnlocked(t.carId)&&(this._loadout.carId=t.carId),t.bodyColorId&&this.isBodyColorUnlocked(t.bodyColorId)&&(this._loadout.bodyColorId=t.bodyColorId),t.wheelStyleId&&this.isWheelStyleUnlocked(t.wheelStyleId)&&(this._loadout.wheelStyleId=t.wheelStyleId),t.wingColorId&&this.isWingColorUnlocked(t.wingColorId)&&(this._loadout.wingColorId=t.wingColorId)}}catch{}}saveLoadout(){localStorage.setItem(au,JSON.stringify(this._loadout))}}function QS(s){return s**3}function eE(){const s=y.PALETTE,e=document.documentElement;e.style.setProperty("--f1-primary",bn(s.NEON_PINK)),e.style.setProperty("--f1-cyan",bn(s.NEON_BLUE)),e.style.setProperty("--f1-blue",bn(s.NEON_PURPLE)),e.style.setProperty("--f1-warm",bn(s.NEON_ORANGE)),e.style.setProperty("--f1-ui-text",bn(s.UI_TEXT)),e.style.setProperty("--f1-ui-dim",bn(s.UI_DIM)),e.style.setProperty("--f1-bg-app",bn(s.UI_BG_APP)),e.style.setProperty("--f1-gameover-scrim",nn(s.UI_BG_APP,.92)),e.style.setProperty("--f1-flash-tint",nn(s.SCREEN_FLASH_TINT,.22)),e.style.setProperty("--f1-flash-perfect",nn(s.SCREEN_FLASH_TINT,.4)),e.style.setProperty("--f1-retry-hover",nn(s.NEON_PINK,.12)),e.style.setProperty("--f1-retry-glow",nn(s.NEON_PINK,.35)),e.style.setProperty("--f1-milestone-glow",nn(s.NEON_PINK,.55)),e.style.setProperty("--f1-milestone-cyan",nn(s.NEON_BLUE,.2)),e.style.setProperty("--f1-perfect-glow-1",nn(s.NEON_PINK,.9)),e.style.setProperty("--f1-perfect-glow-2",nn(s.NEON_PINK,.45)),e.style.setProperty("--f1-perfect-cyan",nn(s.NEON_BLUE,.25)),e.style.setProperty("--f1-perfect-inset",nn(s.NEON_BLUE,.1))}eE();const wn=document.getElementById("game-container"),Dn=new k0({antialias:!0,alpha:!1,powerPreference:"high-performance"});Dn.setSize(window.innerWidth,window.innerHeight);Dn.setPixelRatio(Math.min(window.devicePixelRatio,2));Dn.toneMapping=xu;Dn.toneMappingExposure=y.TONE_MAPPING_EXPOSURE;Dn.outputColorSpace=Tt;Dn.shadowMap.enabled=!0;Dn.shadowMap.type=_u;wn.prepend(Dn.domElement);const Ct=new V0;Ct.background=new Le(y.PALETTE.SKY);Ct.fog=new jc(y.PALETTE.SKY,y.FOG_NEAR,y.FOG_FAR);const jt=new zt(y.CAMERA_FOV_BASE,window.innerWidth/window.innerHeight,.1,200),tE=new _x(y.PALETTE.AMBIENT_LIGHT,y.AMBIENT_LIGHT_INTENSITY);Ct.add(tE);const ld=new hx(y.PALETTE.HEMISPHERE_SKY,y.PALETTE.HEMISPHERE_GROUND,y.HEMISPHERE_LIGHT_INTENSITY);ld.position.set(0,40,0);Ct.add(ld);const Bt=new sd(y.PALETTE.DIRECTIONAL_LIGHT,y.DIRECTIONAL_LIGHT_INTENSITY);Bt.position.set(y.DIRECTIONAL_LIGHT_POSITION[0],y.DIRECTIONAL_LIGHT_POSITION[1],y.DIRECTIONAL_LIGHT_POSITION[2]);Bt.castShadow=!0;Bt.shadow.mapSize.width=2048;Bt.shadow.mapSize.height=2048;Bt.shadow.camera.near=1;Bt.shadow.camera.far=80;Bt.shadow.camera.left=-20;Bt.shadow.camera.right=20;Bt.shadow.camera.top=20;Bt.shadow.camera.bottom=-20;Bt.shadow.bias=-.001;Ct.add(Bt);Ct.add(Bt.target);window.addEventListener("resize",()=>{const s=window.innerWidth,e=window.innerHeight;jt.aspect=s/e,jt.updateProjectionMatrix(),Dn.setSize(s,e)});const Xn=new Ix,Ut=new Cx(wn);let he,Sn,It;const nE=new IS,Rc=new CS(jt),hd=new DS,Kt=new OS,As=new US,hr=new HS,br=new JS,ud=document.getElementById("hud-score-panel"),iE=document.getElementById("hud-score"),tn=document.getElementById("hud-chain");let wc=1,lu=0;function dd(s){iE.textContent=s.toLocaleString()}function fd(s){if(tn.textContent=`×${s}`,s<=1?(tn.style.color="rgba(0,162,255,0.7)",tn.style.textShadow="0 0 8px rgba(0,162,255,0.4)"):s<=5?(tn.style.color="#fde047",tn.style.textShadow="0 0 10px rgba(253,224,71,0.6)"):s<=10?(tn.style.color="#fb923c",tn.style.textShadow="0 0 12px rgba(251,146,60,0.6)"):(tn.style.color="#ef4444",tn.style.textShadow="0 0 14px rgba(239,68,68,0.7)"),s>wc&&s>1){const e=s%10===0;tn.classList.remove("pop","big-pop"),tn.offsetWidth,tn.classList.add(e?"big-pop":"pop"),window.clearTimeout(lu),lu=window.setTimeout(()=>{tn.classList.remove("pop","big-pop")},e?300:150)}wc=s}const pi=new P;function sE(s,e,t){pi.set(e,1.2,t),pi.project(jt);const n=wn.getBoundingClientRect(),i=(pi.x*.5+.5)*n.width,r=(-pi.y*.5+.5)*n.height,o=document.createElement("div");o.className="chain-popup",o.textContent=`×${s}`,o.style.left=`${i}px`,o.style.top=`${r}px`,wn.appendChild(o),setTimeout(()=>o.remove(),750)}const Rr=new FS,ll=new BS(br),hl=new LS;let pd=!1,qn="off",yo=0;const Bi=document.getElementById("tutorial-hint"),Ic=document.getElementById("tutorial-complete-msg"),md=new Vt(y.SLIPSTREAM_ZONE_WIDTH*1.1,y.SLIPSTREAM_ZONE_DEPTH);md.rotateX(-Math.PI/2);const Cc=new kt({color:52479,transparent:!0,opacity:0,depthWrite:!1,side:Rt,blending:gi}),sn=new Se(md,Cc);sn.renderOrder=5;sn.visible=!1;Ct.add(sn);const wr=2.4,ul=.18,un=new lt;un.visible=!1;const rE=new Vt(wr,ul),oE=new kt({color:659230,transparent:!0,opacity:.7,side:Rt,depthWrite:!1}),aE=new Se(rE,oE);un.add(aE);const _d=new Vt(wr,ul);_d.translate(wr/2,0,0);const cE=new kt({color:56831,transparent:!0,opacity:.9,side:Rt,depthWrite:!1}),Ir=new Se(_d,cE);Ir.position.x=-wr/2;Ir.position.z=.001;un.add(Ir);const lE=new K0(new Vt(wr+.04,ul+.04)),hE=new Jc({color:43775,transparent:!0,opacity:.35}),gd=new ed(lE,hE);gd.position.z=.002;un.add(gd);Ct.add(un);function uE(){pd?qn="off":(qn="showZone",yo=0),Bi.style.opacity="0",Ic.classList.remove("show"),sn.visible=!1,un.visible=!1,Ir.scale.x=0}function dE(s,e,t,n){if(qn!=="off"){if(qn==="showZone"){let i=!1,r=0,o=0,a=0;if(It.forEachPoolWindSlot((c,l,h,u,d,f)=>{if(i||!l||!h)return;i=!0,r=u,o=d,a=f;const _=d-f;sn.position.set(u,.06,_-y.SLIPSTREAM_ZONE_DEPTH/2),sn.visible=!0;const g=.15+.1*Math.sin(performance.now()*.004);Cc.opacity=g}),i||(sn.visible=!1),i){Bi.style.opacity="1",pi.set(r,1.8,o-a-.5),pi.project(jt);const c=wn.getBoundingClientRect(),l=(pi.x*.5+.5)*c.width,h=(-pi.y*.5+.5)*c.height;Bi.style.left=`${l}px`,Bi.style.top=`${h}px`}else Bi.style.opacity="0";e&&(qn="fillBar",sn.visible=!1,Bi.style.opacity="0");return}if(qn==="fillBar"){let i=!1;It.forEachPoolWindSlot((r,o,a,c,l,h)=>{if(i||!o||!a)return;i=!0;const u=l-h;sn.position.set(c,.06,u-y.SLIPSTREAM_ZONE_DEPTH/2),sn.visible=!0,Cc.opacity=.08+t*.15}),i||(sn.visible=!1),n&&(qn="completed",yo=2,sn.visible=!1,Ic.classList.add("show"),pd=!0);return}qn==="completed"&&(yo-=s,yo<=0&&(Ic.classList.remove("show"),qn="off"))}}const Li=new PS,ps=new NS,_t=new zS,ms=new KS,_s=new jS,Pa=[],us=new P,hu=new P,uu=new P;wn.addEventListener("pointerdown",()=>_t.unlock(),{once:!0});Ut.onSwitch(()=>_t.playLaneSwitch());const du=document.getElementById("sound-toggle"),fE=document.getElementById("sound-icon-on"),pE=document.getElementById("sound-icon-off"),xd=document.getElementById("music-toggle"),mE=document.getElementById("music-icon-on"),_E=document.getElementById("music-icon-off");function Lc(s){xd.classList.toggle("muted",s),mE.style.display=s?"none":"",_E.style.display=s?"":"none"}du.addEventListener("click",()=>{const s=!_t.isMuted();_t.setMuted(s),du.classList.toggle("muted",s),fE.style.display=s?"none":"",pE.style.display=s?"":"none",Lc(s?!0:_t.isMusicMuted())});xd.addEventListener("click",()=>{if(_t.isMuted())return;const s=!_t.isMusicMuted();_t.setMusicMuted(s),Lc(s)});let gs=document.visibilityState==="visible",Pc=!1;_t.setAppFocused(gs);function dl(){const s=document.visibilityState==="visible";s!==gs&&(gs=s,_t.setAppFocused(gs),gs&&(Pc=!0))}document.addEventListener("visibilitychange",dl);window.addEventListener("focus",dl);window.addEventListener("blur",dl);let ur=0,Wo=0,Pi=0,Vn=0,hi=!1,Nc=0;const fu=280,gE=350;let dr=!1,ds=0;const Dc=document.getElementById("start-lights"),Ni=[document.getElementById("light-0"),document.getElementById("light-1"),document.getElementById("light-2")],go=100,xE=300,SE=1200,wt=[{enabled:!1,dir:-1,triggerMs:0,elapsedMs:0,animating:!1,soundPlayed:!1},{enabled:!1,dir:1,triggerMs:0,elapsedMs:0,animating:!1,soundPlayed:!1}];let Ho=[],Oc=!1,Uc=0;const Na=1400,EE=2200;let Di=!1,fr=0,wi=1,Zt=1,rr=0,xt=null,Da=0,bo=0,Ro=!1,wo=0,or=0,Oi=0,Io=0;const Si=60,Sd=1.2,dn=new Float32Array(Si*3),Co=new Float32Array(Si*3),fl=[],vs=new Float32Array(Si),Cr=new Float32Array(Si);for(let s=0;s<Si;s++)fl.push(new P),vs[s]=0,Cr[s]=0;const An=new St;An.setAttribute("position",new mt(dn,3));An.setAttribute("color",new mt(Co,3));An.setAttribute("size",new mt(Cr,1));const TE=new Gs({size:.12,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:gi,sizeAttenuation:!0}),Ed=new zs(An,TE);Ed.frustumCulled=!1;Ct.add(Ed);function ME(s,e,t){const n=[1,1,.95,.9],i=[.7,.5,.3,.2],r=[0,0,.05,.1];for(let o=0;o<Si;o++){const a=o*3;dn[a]=s+(Math.random()-.5)*.3,dn[a+1]=e+Math.random()*.2,dn[a+2]=t+(Math.random()-.5)*.3;const c=2+Math.random()*6,l=Math.random()*Math.PI*2,h=Math.random()*Math.PI*.5;fl[o].set(Math.cos(l)*Math.cos(h)*c,Math.sin(h)*c*.8+Math.random()*2,Math.sin(l)*Math.cos(h)*c),vs[o]=Sd*(.5+Math.random()*.5),Cr[o]=.06+Math.random()*.14;const u=Math.floor(Math.random()*n.length);Co[a]=n[u],Co[a+1]=i[u],Co[a+2]=r[u]}An.attributes.position.needsUpdate=!0,An.attributes.color.needsUpdate=!0,An.attributes.size.needsUpdate=!0}function AE(s){let e=!1;for(let t=0;t<Si;t++){if(vs[t]<=0)continue;vs[t]-=s,e=!0;const n=t*3,i=fl[t];i.y-=9.8*s,dn[n]+=i.x*s,dn[n+1]+=i.y*s,dn[n+2]+=i.z*s,dn[n+1]<0&&(dn[n+1]=0,i.y*=-.3,i.x*=.7,i.z*=.7);const r=Math.max(0,vs[t]/Sd);Cr[t]=(.06+Math.random()*.04)*r}e&&(An.attributes.position.needsUpdate=!0,An.attributes.size.needsUpdate=!0)}function vE(){for(let s=0;s<Si;s++){vs[s]=0,Cr[s]=0;const e=s*3;dn[e]=0,dn[e+1]=-10,dn[e+2]=0}An.attributes.position.needsUpdate=!0,An.attributes.size.needsUpdate=!0}function pl(){xt&&(xt.rotation.set(0,0,0),xt.position.y=0,xt=null),Di=!1,fr=0,Ro=!1,wo=0,bo=0,Oi=0,Io=0,vE(),Oc=!0,Uc=0;for(const o of Ho)o.visible=!1;const s=Math.random();s<.33?(wt[0].enabled=!0,wt[0].dir=-1,wt[0].triggerMs=go,wt[1].enabled=!1):s<.66?(wt[0].enabled=!0,wt[0].dir=1,wt[0].triggerMs=go,wt[1].enabled=!1):(wt[0].enabled=!0,wt[0].dir=-1,wt[0].triggerMs=go,wt[1].enabled=!0,wt[1].dir=1,wt[1].triggerMs=go+xE);for(const o of wt)o.elapsedMs=0,o.animating=!1,o.soundPlayed=!1;dr=!1,ds=0,Dc.classList.remove("visible");for(const o of Ni)o.classList.remove("red","green");Xn.reset(),Ut.reset(),Ut.enabled=!1,hi=!1,Nc=0,ur=0,Wo=0,Pi=0,Vn=0,Sn==null||Sn.reset(),It.reset(),hl.reset(),ms.reset(),_s.reset(),he.reset(),Li.reset(),ps.reset(),hd.reset(),Kt.reset(),As.reset(),hr.reset(),uE(),ud.style.opacity="1",dd(0),fd(1),wc=1;const e=performance.now(),t=Ut.getLaneX(e),n=Ut.getBodyRollRad(e),i=Ut.getWheelSteerRad(e);he.applyLaneVisuals(t,n,i);const r=he.group.position.z;he.group.position.z=y.TAXI_POSITION_Z,Rc.snap(he),he.group.position.z=r,Rr.hide()}Rr.onRetry(()=>{he.applyLoadout(br.loadout),pl()});Rr.onMarket(()=>{ll.show()});ll.onApply(s=>{he.applyLoadout(s),pl()});ll.onClose(()=>{Rr.show(As.currentScore,Kt.maxChainThisRun,Wo,br)});Xn.onChange(s=>{if(s==="gameover"){Ut.enabled=!1,he.setDraftMeter(0,!1),ud.style.opacity="0",Bi.style.opacity="0",sn.visible=!1,un.visible=!1;const e=As.currentScore;Rr.show(e,Kt.maxChainThisRun,Wo,br)}});const Fc=new xx,ys=document.getElementById("speed-hud"),pu=document.getElementById("speed-text-wrap"),xs=document.getElementById("speed-text");function Td(){if(!pu||!xs)return;xs.style.transform="scale(1)";const s=pu.clientWidth;if(s<=0)return;const e=xs.scrollWidth;e<=s||(xs.style.transform=`scale(${s/e})`)}window.addEventListener("resize",()=>{(ys==null?void 0:ys.style.opacity)==="1"&&requestAnimationFrame(()=>Td())});function Md(){var h;if(requestAnimationFrame(Md),!gs)return;Pc&&(Fc.getDelta(),Pc=!1);const s=Fc.getDelta(),e=performance.now();let t=y.BASE_SCROLL_SPEED,n=!1,i=0,r=!1,o=0;if(Xn.isPlaying)if(hi){if(dr){ds+=s*1e3;const I=fu*3;for(let A=0;A<3;A++)ds>=fu*(A+1)&&!Ni[A].classList.contains("red")&&!Ni[A].classList.contains("green")&&(Ni[A].classList.add("red"),_t.playLightRed());if(ds>=I&&!Ni[0].classList.contains("green")){for(const A of Ni)A.classList.remove("red"),A.classList.add("green");_t.playLightGreen()}ds>=I+gE&&(dr=!1,Dc.classList.remove("visible"),Ut.enabled=!0)}ur+=s*1e3,Pi=Math.max(0,Pi-s*1e3);const u=y.BASE_SCROLL_SPEED,d=y.MAX_SCROLL_SPEED,f=Math.max(0,d-u);Vn=Math.max(0,Vn-y.BASE_SPEED_BONUS_DECAY_PER_SECOND*s),Vn=Math.min(Vn,f);let g=Math.min(u+Vn,d);if(Di){const I=Math.min(1,fr/Na);g=bo*(1-I*.5)}const m=g*60*s;if(((Sn==null?void 0:Sn.update(m))??0)>0&&!Di){const I=Math.max(1e-6,y.MAX_SCROLL_SPEED-y.BASE_SCROLL_SPEED),A=Math.max(0,Math.min(1,(g-y.BASE_SCROLL_SPEED)/I));_t.playWhoosh(A)}It.update(s,ur,g);const T=he.group.position.x,M=he.group.position.z;ms.update(s,m,It,T,M),_s.update(s,m,It,T,M);const x=Ut.getLaneX(e),C=Ut.getBodyRollRad(e),w=Ut.getWheelSteerRad(e);he.applyLaneVisuals(x,C,w),us.set(x,1.1,y.TAXI_POSITION_Z+2.2),hr.updateMilestoneAnchor(jt,wn,us);const b=hd.update(s,g,he,It);if(Kt.tick(e,b.inZone),b.slingshotFired){It.markSlipstreamConsumed(b.slingshotTarget),Vn+=y.SLINGSHOT_BASE_SPEED_INCREMENT,Vn=Math.min(Vn,f),Pi=y.SLINGSHOT_BURST_DURATION,ps.burst(),_t.playSlingshot();const I=Kt.onSlingshot(e);if(I!==null&&(he.onChainMilestone(I,e),_t.playMilestone(I)),As.addSlingshotBonus(Kt.chain),_t.playChainUp(Kt.chain),b.slingshotTarget){const A=b.slingshotTarget,S=(he.group.position.x+A.cx)/2,L=(he.group.position.z+A.cz)/2;sE(Kt.chain,S,L)}}if(he.tickRoofLight(e,b.inZone,Kt.chain),As.addDistance(m,Kt.chain),Wo+=m,dd(As.currentScore),fd(Kt.chain),he.setDraftMeter(b.meterDisplay,b.inZone),b.inZone&&b.meterDisplay>0&&b.draftTarget){const I=b.draftTarget;un.visible=!0,un.position.set(I.cx,1.6,I.cz-I.hz-1.2),un.lookAt(jt.position),Ir.scale.x=Math.min(1,b.meterDisplay),o+=s,o>=.1&&(o=0,_t.playDraftFillTick(b.meterDisplay))}else un.visible=!1,o=0;if(b.slingshotFired&&(_t.playDraftComplete(),un.visible=!1),dE(s,b.inZone,b.meterDisplay,b.slingshotFired),Rc.update(he,g),Oc){Uc+=s*1e3;let I=!1;for(let A=0;A<wt.length;A++){const S=wt[A],L=Ho[A];if(!(!S.enabled||!L)&&(I=!0,!S.animating&&Uc>=S.triggerMs&&(S.animating=!0,S.elapsedMs=0),!S.soundPlayed&&S.animating&&(S.soundPlayed=!0,_t.playFlyby()),S.animating)){S.elapsedMs+=s*1e3;const H=Math.min(1,S.elapsedMs/SE),B=y.TAXI_POSITION_Z-25,q=y.TAXI_POSITION_Z+80,Y=B+(q-B)*H;L.visible=!0,L.position.set(S.dir*3,0,Y),L.rotation.set(0,0,0);const X=y.TAXI_DIMENSIONS.width/2,K=Y-y.TAXI_DIMENSIONS.length/2;ms.spawn(L.position.x-X*.55,K),ms.spawn(L.position.x+X*.55,K);const V=y.TAXI_DIMENSIONS.height*.3;_s.spawn(L.position.x-.3,V,K-.1),_s.spawn(L.position.x+.3,V,K-.1),H>=1&&(S.animating=!1,S.enabled=!1,L.visible=!1)}}I||(Oc=!1)}if(!Di&&!dr){const I=nE.check(he,It);I&&(Di=!0,fr=0,rr=he.group.position.x,he.group.position.z,Zt=I.hitX>he.group.position.x?-1:1,wi=Zt,xt=It.getHitCarGroup(I.hitX,I.hitZ),Da=I.hitX,I.hitZ,bo=g,or=Math.floor(Math.random()*3),Oi=1,Io=0,ME((he.group.position.x+I.hitX)/2,.4,(he.group.position.z+I.hitZ)/2),Ut.enabled=!1,_t.playCrash())}ps.setBurstWindowActive(Pi>0),Li.setBoostActive(Pi>0),Li.update(s,m,he),t=g,n=b.inZone,i=b.meterDisplay,r=Pi>0}else{const u=y.TAXI_INTRO_DURATION_MS;Nc+=s*1e3;const d=Math.min(1,Nc/u),f=QS(d),_=y.TAXI_POSITION_Z+y.TAXI_INTRO_START_Z_OFFSET,g=y.TAXI_POSITION_Z;if(he.group.position.z=_+(g-_)*f,d>=1){hi=!0,he.group.position.z=g,dr=!0,ds=0,Dc.classList.add("visible");for(const M of Ni)M.classList.remove("red","green")}const m=Ut.getLaneX(e),p=Ut.getBodyRollRad(e),T=Ut.getWheelSteerRad(e);he.applyLaneVisuals(m,p,T),us.set(m,1.1,he.group.position.z+2.2),hr.updateMilestoneAnchor(jt,wn,us),Li.setBoostActive(!1),Li.update(s,0,he),he.tickRoofLight(e,!1,Kt.chain),t=y.BASE_SCROLL_SPEED}else{ps.setBurstWindowActive(!1),Li.setBoostActive(!1);const u=y.BASE_SCROLL_SPEED*.3;let d=u;if(Ro){wo+=s*1e3;const T=Math.min(1,wo/EE),M=(1-T)**2;d=u+(bo*.5-u)*M;const x=1-T,C=x*x;if(or===0?(he.group.rotation.x=-Math.PI*1.1*C+(1-C)*-.08,he.group.rotation.y=wi*(Math.PI*.5+T*.4),he.group.rotation.z=Zt*.4*C):or===1?(he.group.rotation.z=Zt*Math.PI*1.5*C,he.group.rotation.y=wi*(Math.PI*.6+T*.3),he.group.rotation.x=-.3*C):(he.group.rotation.y=wi*(Math.PI*1.8+T*.2),he.group.rotation.z=Zt*.6*C,he.group.rotation.x=-.25*C),he.group.position.x=rr+Zt*(3+T*1.5),he.group.position.y=C*.15,xt){const w=-Zt;xt.rotation.y=w*(Math.PI*.9+T*.2),xt.rotation.z=w*.45*C,xt.rotation.x=.35*C,xt.position.x=Da+w*(3+T*1),xt.position.y=C*.1}T>=1&&(Ro=!1,xt&&(xt.rotation.set(0,0,0),xt.position.y=0,xt=null))}const f=d*60*s;((Sn==null?void 0:Sn.update(f))??0)>0&&_t.playWhoosh(0),It.update(s,ur,d);const g=he.group.position.x,m=he.group.position.z;ms.update(s,f,It,g,m),_s.update(s,f,It,g,m),Li.update(s,0,he),Rc.update(he,y.BASE_SCROLL_SPEED),he.tickRoofLight(e,!1,Kt.chain);const p=Ut.getLaneX(e);us.set(p,1.1,y.TAXI_POSITION_Z+2.2),hr.updateMilestoneAnchor(jt,wn,us)}if(ys&&xs)if(!(Xn.isPlaying&&hi))ys.style.opacity="0";else{const f=t*60*3.6*2;xs.textContent=`${Math.round(f)} KM/H`,ys.style.opacity="1",requestAnimationFrame(()=>Td())}hl.update(s,Xn.isPlaying&&hi,It),ps.update(s),_t.update(s,{playing:Xn.isPlaying&&hi,scrollPerFrame:t,inDraft:n,draftMeter:i,burstActive:r,chain:Kt.chain}),Pa.length=0,It.forEachPoolWindSlot((u,d,f,_,g)=>{d&&Pa.push(_,g)}),_t.updateTrafficEngines(s,Xn.isPlaying&&hi,he.group.position.x,he.group.position.z,Pa);const a=he.group.position.z-y.TAXI_DIMENSIONS.length*.5,c=.28;if(hu.set(-2.5,c,a),uu.set(y.LANE_WIDTH,c,a),hr.updateTouchHints(ur,Xn.isPlaying&&hi,jt,wn,hu,uu),Di){fr+=s*1e3;const u=Math.min(1,fr/Na),d=1-(1-u)*(1-u),f=Math.sin(d*Math.PI);if(or===0?(he.group.rotation.x=d*-Math.PI*1.1,he.group.rotation.y=wi*d*Math.PI*.5,he.group.rotation.z=Zt*d*.4,he.group.position.y=f*2.2,he.group.position.x=rr+Zt*d*3):or===1?(he.group.rotation.z=Zt*d*Math.PI*1.5,he.group.rotation.y=wi*d*Math.PI*.6,he.group.rotation.x=d*-.3,he.group.position.y=f*2.5,he.group.position.x=rr+Zt*d*3.5):(he.group.rotation.y=wi*d*Math.PI*1.8,he.group.rotation.z=Zt*d*.6,he.group.rotation.x=d*-.25,he.group.position.y=f*1.5,he.group.position.x=rr+Zt*d*4),xt){const _=-Zt,g=Math.sin(d*Math.PI*.8);xt.rotation.y=_*d*Math.PI*.9,xt.rotation.z=_*d*.45,xt.rotation.x=d*.35,xt.position.x=Da+_*d*3,xt.position.y=g*1.2}Io+=s*1e3,Oi=Math.max(0,1-Io/Na),u>=1&&(Di=!1,Ro=!0,wo=0,Oi=0,Xn.transition("gameover"))}if(Oi>0){const u=Oi*Oi;jt.position.x+=(Math.random()-.5)*u*.6,jt.position.y+=(Math.random()-.5)*u*.4,jt.rotation.z+=(Math.random()-.5)*u*.03}AE(s);const l=(h=he==null?void 0:he.group)==null?void 0:h.position;l&&(Bt.position.set(l.x+10,25,l.z-10),Bt.target.position.set(l.x,0,l.z),Bt.target.updateMatrixWorld()),Dn.render(Ct,jt)}(async()=>{he=await al.create(br.loadout),Sn=await ol.create(y.TAXI_POSITION_Z),It=await cl.create();for(let s=0;s<2;s++){const e=new lt,t=bc();e.add(t),e.visible=!1,Ho.push(e)}Ct.add(Sn.group),Ct.add(ms.group),Ct.add(It.group),Ct.add(_s.group),Ct.add(hl.group);for(const s of Ho)Ct.add(s);Ct.add(he.group),he.group.add(ps.anchor),pl(),Fc.getDelta(),Md()})();
