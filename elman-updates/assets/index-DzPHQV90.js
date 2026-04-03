(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="170",ad=0,ol=1,cd=2,eu=1,tu=2,Hn=3,Kn=0,Zt=1,zt=2,ui=0,Ni=1,Di=2,al=3,cl=4,ld=5,Li=100,hd=101,ud=102,dd=103,fd=104,pd=200,md=201,_d=202,gd=203,va=204,ya=205,Sd=206,xd=207,Ed=208,Md=209,Td=210,Ad=211,vd=212,yd=213,bd=214,ba=0,Ra=1,wa=2,Es=3,Ia=4,Ca=5,La=6,Pa=7,nu=0,Rd=1,wd=2,di=0,Id=1,Cd=2,Ld=3,iu=4,Pd=5,Nd=6,Dd=7,ll="attached",Od="detached",su=300,Ms=301,Ts=302,Na=303,Da=304,Co=306,As=1e3,li=1001,Mo=1002,kt=1003,ru=1004,tr=1005,wt=1006,co=1007,Vn=1008,jn=1009,ou=1010,au=1011,ur=1012,bc=1013,Oi=1014,Sn=1015,Sr=1016,Rc=1017,wc=1018,vs=1020,cu=35902,lu=1021,hu=1022,ln=1023,uu=1024,du=1025,ps=1026,ys=1027,Ic=1028,Cc=1029,fu=1030,Lc=1031,Pc=1033,lo=33776,ho=33777,uo=33778,fo=33779,Oa=35840,Ua=35841,Fa=35842,Ba=35843,Ha=36196,Ga=37492,za=37496,ka=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Za=37814,Ka=37815,ja=37816,$a=37817,Ja=37818,Qa=37819,ec=37820,tc=37821,po=36492,nc=36494,ic=36495,pu=36283,sc=36284,rc=36285,oc=36286,dr=2300,fr=2301,Oo=2302,hl=2400,ul=2401,dl=2402,Ud=2500,Fd=0,mu=1,ac=2,Bd=3200,Hd=3201,_u=0,Gd=1,ci="",Et="srgb",Vt="srgb-linear",Lo="linear",ct="srgb",Gi=7680,fl=519,zd=512,kd=513,Vd=514,gu=515,Wd=516,Xd=517,qd=518,Yd=519,cc=35044,To=35048,pl="300 es",Wn=2e3,Ao=2001;class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ml=1234567;const cr=Math.PI/180,bs=180/Math.PI;function En(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[s&255]+Ct[s>>8&255]+Ct[s>>16&255]+Ct[s>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function Nc(s,e){return(s%e+e)%e}function Zd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Kd(s,e,t){return s!==e?(t-s)/(e-s):0}function lr(s,e,t){return(1-t)*s+t*e}function jd(s,e,t,n){return lr(s,e,1-Math.exp(-t*n))}function $d(s,e=1){return e-Math.abs(Nc(s,e*2)-e)}function Jd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Qd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ef(s,e){return s+Math.floor(Math.random()*(e-s+1))}function tf(s,e){return s+Math.random()*(e-s)}function nf(s){return s*(.5-Math.random())}function sf(s){s!==void 0&&(ml=s);let e=ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rf(s){return s*cr}function of(s){return s*bs}function af(s){return(s&s-1)===0&&s!==0}function cf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*_,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*_,a*l);break;case"ZYZ":s.set(c*_,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Xn={DEG2RAD:cr,RAD2DEG:bs,generateUUID:En,clamp:Dt,euclideanModulo:Nc,mapLinear:Zd,inverseLerp:Kd,lerp:lr,damp:jd,pingpong:$d,smoothstep:Jd,smootherstep:Qd,randInt:ef,randFloat:tf,randFloatSpread:nf,seededRandom:sf,degToRad:rf,radToDeg:of,isPowerOfTwo:af,ceilPowerOfTwo:cf,floorPowerOfTwo:lf,setQuaternionFromProperEuler:hf,normalize:st,denormalize:gn};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,r,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],T=i[1],A=i[4],S=i[7],C=i[2],w=i[5],b=i[8];return r[0]=o*g+a*T+c*C,r[3]=o*m+a*A+c*w,r[6]=o*f+a*S+c*b,r[1]=l*g+h*T+u*C,r[4]=l*m+h*A+u*w,r[7]=l*f+h*S+u*b,r[2]=d*g+p*T+_*C,r[5]=d*m+p*A+_*w,r[8]=d*f+p*S+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,_=t*u+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new ke;function Su(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uf(){const s=pr("canvas");return s.style.display="block",s}const _l={};function nr(s){s in _l||(_l[s]=!0,console.warn(s))}function df(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ff(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pf(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:Vt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Lo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const gl=[.64,.33,.3,.6,.15,.06],Sl=[.2126,.7152,.0722],xl=[.3127,.329],El=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Vt]:{primaries:gl,whitePoint:xl,transfer:Lo,toXYZ:El,fromXYZ:Ml,luminanceCoefficients:Sl,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:gl,whitePoint:xl,transfer:ct,toXYZ:El,fromXYZ:Ml,luminanceCoefficients:Sl,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}});let zi;class mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=pr("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _f=0;class xu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Fo(i[o].image)):r.push(Fo(i[o]))}else r=Fo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gf=0;class Tt extends Ps{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=li,i=li,r=wt,o=Vn,a=ln,c=jn,l=Tt.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=En(),this.name="",this.source=new xu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=su;Tt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,S=(p+1)/2,C=(f+1)/2,w=(h+d)/4,b=(u+g)/4,I=(_+m)/4;return A>S&&A>C?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=w/n,r=b/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=w/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=b/r,i=I/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-g)/T,this.z=(d-h)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sf extends Ps{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Sf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Eu extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xf extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(u!==g||c!==d||l!==p||h!==_){let m=1-a;const f=c*d+l*p+h*_+u*g,T=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){const C=Math.sqrt(A),w=Math.atan2(C,f*T);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const S=a*T;if(c=c*m+d*S,l=l*m+p*S,h=h*m+_*S,u=u*m+g*S,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*u+c*p-l*d,e[t+1]=c*_+h*d+l*u-a*p,e[t+2]=l*_+h*p+a*d-c*u,e[t+3]=h*_-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),p=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"YZX":this._x=d*h*u+l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u-d*p*_;break;case"XZY":this._x=d*h*u-l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new P,Tl=new fi;class Wt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),wr.subVectors(this.max,zs),ki.subVectors(e.a,zs),Vi.subVectors(e.b,zs),Wi.subVectors(e.c,zs),Qn.subVectors(Vi,ki),ei.subVectors(Wi,Vi),mi.subVectors(ki,Wi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-mi.z,mi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,mi.z,0,-mi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-mi.y,mi.x,0];return!Ho(t,ki,Vi,Wi,wr)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,ki,Vi,Wi,wr))?!1:(Ir.crossVectors(Qn,ei),t=[Ir.x,Ir.y,Ir.z],Ho(t,ki,Vi,Wi,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new P,new P,new P,new P,new P,new P,new P,new P],fn=new P,Rr=new Wt,ki=new P,Vi=new P,Wi=new P,Qn=new P,ei=new P,mi=new P,zs=new P,wr=new P,Ir=new P,_i=new P;function Ho(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){_i.fromArray(s,r);const a=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ef=new Wt,ks=new P,Go=new P;class wn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ef.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Go)),this.expandByPoint(ks.copy(e.center).sub(Go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new P,zo=new P,Cr=new P,ti=new P,ko=new P,Lr=new P,Vo=new P;class Po{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zo.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(zo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Cr),a=ti.dot(this.direction),c=-ti.dot(Cr),l=ti.lengthSq(),h=Math.abs(1-o*o);let u,d,p,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zo).addScaledVector(Cr,d),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,r){ko.subVectors(t,e),Lr.subVectors(n,e),Vo.crossVectors(ko,Lr);let o=this.direction.dot(Vo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const c=a*this.direction.dot(Lr.crossVectors(ti,Lr));if(c<0)return null;const l=a*this.direction.dot(ko.cross(ti));if(l<0||c+l>o)return null;const h=-a*ti.dot(Vo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,i,r,o,a,c,l,h,u,d,p,_,g,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,p,_,g,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,_=l*h,g=l*u;t[0]=d+g*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,_=l*h,g=l*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=_*l-p,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=g-d*u,t[8]=_*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=o*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,Tf)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ni.crossVectors(n,jt),ni.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ni.crossVectors(n,jt)),ni.normalize(),Pr.crossVectors(jt,ni),i[0]=ni.x,i[4]=Pr.x,i[8]=jt.x,i[1]=ni.y,i[5]=Pr.y,i[9]=jt.y,i[2]=ni.z,i[6]=Pr.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],T=n[3],A=n[7],S=n[11],C=n[15],w=i[0],b=i[4],I=i[8],M=i[12],E=i[1],L=i[5],H=i[9],F=i[13],q=i[2],Y=i[6],W=i[10],j=i[14],V=i[3],ne=i[7],ue=i[11],me=i[15];return r[0]=o*w+a*E+c*q+l*V,r[4]=o*b+a*L+c*Y+l*ne,r[8]=o*I+a*H+c*W+l*ue,r[12]=o*M+a*F+c*j+l*me,r[1]=h*w+u*E+d*q+p*V,r[5]=h*b+u*L+d*Y+p*ne,r[9]=h*I+u*H+d*W+p*ue,r[13]=h*M+u*F+d*j+p*me,r[2]=_*w+g*E+m*q+f*V,r[6]=_*b+g*L+m*Y+f*ne,r[10]=_*I+g*H+m*W+f*ue,r[14]=_*M+g*F+m*j+f*me,r[3]=T*w+A*E+S*q+C*V,r[7]=T*b+A*L+S*Y+C*ne,r[11]=T*I+A*H+S*W+C*ue,r[15]=T*M+A*F+S*j+C*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*p-n*c*p)+g*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],T=u*m*l-g*d*l+g*c*p-a*m*p-u*c*f+a*d*f,A=_*d*l-h*m*l-_*c*p+o*m*p+h*c*f-o*d*f,S=h*g*l-_*u*l+_*a*p-o*g*p-h*a*f+o*u*f,C=_*u*c-h*g*c-_*a*d+o*g*d+h*a*m-o*u*m,w=t*T+n*A+i*S+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=T*b,e[1]=(g*d*r-u*m*r-g*i*p+n*m*p+u*i*f-n*d*f)*b,e[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*f+n*c*f)*b,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*p-n*c*p)*b,e[4]=A*b,e[5]=(h*m*r-_*d*r+_*i*p-t*m*p-h*i*f+t*d*f)*b,e[6]=(_*c*r-o*m*r-_*i*l+t*m*l+o*i*f-t*c*f)*b,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*p+t*c*p)*b,e[8]=S*b,e[9]=(_*u*r-h*g*r-_*n*p+t*g*p+h*n*f-t*u*f)*b,e[10]=(o*g*r-_*a*r+_*n*l-t*g*l-o*n*f+t*a*f)*b,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*b,e[12]=C*b,e[13]=(h*g*i-_*u*i+_*n*d-t*g*d-h*n*m+t*u*m)*b,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*m-t*a*m)*b,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,_=r*u,g=o*h,m=o*u,f=a*u,T=c*l,A=c*h,S=c*u,C=n.x,w=n.y,b=n.z;return i[0]=(1-(g+f))*C,i[1]=(p+S)*C,i[2]=(_-A)*C,i[3]=0,i[4]=(p-S)*w,i[5]=(1-(d+f))*w,i[6]=(m+T)*w,i[7]=0,i[8]=(_+A)*b,i[9]=(m-T)*b,i[10]=(1-(d+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Xi.set(i[0],i[1],i[2]).length();const o=Xi.set(i[4],i[5],i[6]).length(),a=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);const l=1/r,h=1/o,u=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,t.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Wn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(a===Wn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ao)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Wn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,p=(n+i)*h;let _,g;if(a===Wn)_=(o+r)*u,g=-2*u;else if(a===Ao)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xi=new P,pn=new He,Mf=new P(0,0,0),Tf=new P(1,1,1),ni=new P,Pr=new P,jt=new P,Al=new He,vl=new fi;class bn{constructor(e=0,t=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vl.setFromEuler(this),this.setFromQuaternion(vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Af=0;const yl=new P,qi=new fi,On=new He,Nr=new P,Vs=new P,vf=new P,yf=new fi,bl=new P(1,0,0),Rl=new P(0,1,0),wl=new P(0,0,1),Il={type:"added"},bf={type:"removed"},Yi={type:"childadded",child:null},Wo={type:"childremoved",child:null};class ut extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new P,t=new bn,n=new fi,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new ke}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(Rl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(Rl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Vs,Nr,this.up):On.lookAt(Nr,Vs,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),qi.setFromRotationMatrix(On),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Il),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bf),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Il),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new P(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new P,Un=new P,Xo=new P,Fn=new P,Zi=new P,Ki=new P,Cl=new P,qo=new P,Yo=new P,Zo=new P,Ko=new Qe,jo=new Qe,$o=new Qe;class an{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),Un.subVectors(n,t),Xo.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(Un),c=mn.dot(Xo),l=Un.dot(Un),h=Un.dot(Xo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ko.setScalar(0),jo.setScalar(0),$o.setScalar(0),Ko.fromBufferAttribute(e,t),jo.fromBufferAttribute(e,n),$o.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ko,r.x),o.addScaledVector(jo,r.y),o.addScaledVector($o,r.z),o}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),Un.subVectors(e,t),mn.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Zi.subVectors(i,n),Ki.subVectors(r,n),qo.subVectors(e,n);const c=Zi.dot(qo),l=Ki.dot(qo);if(c<=0&&l<=0)return t.copy(n);Yo.subVectors(e,i);const h=Zi.dot(Yo),u=Ki.dot(Yo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Zi,o);Zo.subVectors(e,r);const p=Zi.dot(Zo),_=Ki.dot(Zo);if(_>=0&&p<=_)return t.copy(r);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Ki,a);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Cl.subVectors(r,i),a=(u-h)/(u-h+(p-_)),t.copy(i).addScaledVector(Cl,a);const f=1/(m+g+d);return o=g*f,a=d*f,t.copy(n).addScaledVector(Zi,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Jo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=Nc(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Jo(o,r,e+1/3),this.g=Jo(o,r,e),this.b=Jo(o,r,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=Tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return $e.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Dt(Lt.r*255,0,255))*65536+Math.round(Dt(Lt.g*255,0,255))*256+Math.round(Dt(Lt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,r=Lt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Et){$e.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Dr);const n=lr(ii.h,Dr.h,t),i=lr(ii.s,Dr.s,t),r=lr(ii.l,Dr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Le;Le.NAMES=Tu;let Rf=0;class un extends Ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=En(),this.name="",this.blending=Ni,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=ya,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hn extends un{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new P,Or=new Fe;class mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cc&&(e.usage=this.usage),e}}class Au extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vu extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wf=0;const sn=new He,Qo=new ut,ji=new P,$t=new Wt,Ws=new Wt,bt=new P;class Mt extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Su(e)?vu:Au)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors($t.min,Ws.min),$t.expandByPoint(bt),bt.addVectors($t.max,Ws.max),$t.expandByPoint(bt)):($t.expandByPoint(Ws.min),$t.expandByPoint(Ws.max))}$t.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)bt.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(e,l),bt.add(ji)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new P,c[I]=new P;const l=new P,h=new P,u=new P,d=new Fe,p=new Fe,_=new Fe,g=new P,m=new P;function f(I,M,E){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,E),h.sub(l),u.sub(l),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),a[I].add(g),a[M].add(g),a[E].add(g),c[I].add(m),c[M].add(m),c[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,M=T.length;I<M;++I){const E=T[I],L=E.start,H=E.count;for(let F=L,q=L+H;F<q;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const A=new P,S=new P,C=new P,w=new P;function b(I){C.fromBufferAttribute(i,I),w.copy(C);const M=a[I];A.copy(M),A.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(w,M);const L=S.dot(c[I])<0?-1:1;o.setXYZW(I,A.x,A.y,A.z,L)}for(let I=0,M=T.length;I<M;++I){const E=T[I],L=E.start,H=E.count;for(let F=L,q=L+H;F<q;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let f=0;f<h;f++)d[_++]=l[p++]}return new mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new He,gi=new Po,Ur=new wn,Pl=new P,Fr=new P,Br=new P,Hr=new P,ea=new P,Gr=new P,Nl=new P,zr=new P;class Ae extends ut{constructor(e=new Mt,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ea.fromBufferAttribute(u,e),o?Gr.addScaledVector(ea,h):Gr.addScaledVector(ea.sub(t),h))}t.add(Gr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(Ur.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Ur,Pl)===null||gi.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Ll.copy(r).invert(),gi.copy(e.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,C=A;S<C;S+=3){const w=a.getX(S),b=a.getX(S+1),I=a.getX(S+2);i=kr(this,f,e,n,l,h,u,w,b,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const T=a.getX(m),A=a.getX(m+1),S=a.getX(m+2);i=kr(this,o,e,n,l,h,u,T,A,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,C=A;S<C;S+=3){const w=S,b=S+1,I=S+2;i=kr(this,f,e,n,l,h,u,w,b,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const T=m,A=m+1,S=m+2;i=kr(this,o,e,n,l,h,u,T,A,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function If(s,e,t,n,i,r,o,a){let c;if(e.side===Zt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Kn,a),c===null)return null;zr.copy(a),zr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(zr);return l<t.near||l>t.far?null:{distance:l,point:zr.clone(),object:s}}function kr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Fr),s.getVertexPosition(c,Br),s.getVertexPosition(l,Hr);const h=If(s,e,t,n,Fr,Br,Hr,Nl);if(h){const u=new P;an.getBarycoord(Nl,Fr,Br,Hr,u),i&&(h.uv=an.getInterpolatedAttribute(i,a,c,l,u,new Fe)),r&&(h.uv1=an.getInterpolatedAttribute(r,a,c,l,u,new Fe)),o&&(h.normal=an.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};an.getNormal(Fr,Br,Hr,d.normal),h.face=d,h.barycoord=u}return h}class nt extends Mt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(u,2));function _(g,m,f,T,A,S,C,w,b,I,M){const E=S/b,L=C/I,H=S/2,F=C/2,q=w/2,Y=b+1,W=I+1;let j=0,V=0;const ne=new P;for(let ue=0;ue<W;ue++){const me=ue*L-F;for(let Pe=0;Pe<Y;Pe++){const Xe=Pe*E-H;ne[g]=Xe*T,ne[m]=me*A,ne[f]=q,l.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[f]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Pe/b),u.push(1-ue/I),j+=1}}for(let ue=0;ue<I;ue++)for(let me=0;me<b;me++){const Pe=d+me+Y*ue,Xe=d+me+Y*(ue+1),k=d+(me+1)+Y*(ue+1),Q=d+(me+1)+Y*ue;c.push(Pe,Xe,Q),c.push(Xe,k,Q),V+=6}a.addGroup(p,V,M),p+=V,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(s){const e={};for(let t=0;t<s.length;t++){const n=Rs(s[t]);for(const i in n)e[i]=n[i]}return e}function Cf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Lf={clone:Rs,merge:Ft};var Pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends un{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pf,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bu extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new P,Dl=new Fe,Ol=new Fe;class Gt extends bu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Dl,Ol),t.subVectors(Ol,Dl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,Ji=1;class Df extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt($i,Ji,e,t);i.layers=this.layers,this.add(i);const r=new Gt($i,Ji,e,t);r.layers=this.layers,this.add(r);const o=new Gt($i,Ji,e,t);o.layers=this.layers,this.add(o);const a=new Gt($i,Ji,e,t);a.layers=this.layers,this.add(a);const c=new Gt($i,Ji,e,t);c.layers=this.layers,this.add(c);const l=new Gt($i,Ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ru extends Tt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ms,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Of extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ru(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new nt(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:ui});r.uniforms.tEquirect.value=t;const o=new Ae(i,r),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=wt),new Df(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const ta=new P,Uf=new P,Ff=new ke;class vi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ta.subVectors(n,t).cross(Uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ta),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ff.getNormalMatrix(e),i=this.coplanarPoint(ta).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new wn,Vr=new P;class Dc{constructor(e=new vi,t=new vi,n=new vi,i=new vi,r=new vi,o=new vi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],_=i[9],g=i[10],m=i[11],f=i[12],T=i[13],A=i[14],S=i[15];if(n[0].setComponents(c-r,d-l,m-p,S-f).normalize(),n[1].setComponents(c+r,d+l,m+p,S+f).normalize(),n[2].setComponents(c+o,d+h,m+_,S+T).normalize(),n[3].setComponents(c-o,d-h,m-_,S-T).normalize(),n[4].setComponents(c-a,d-u,m-g,S-A).normalize(),t===Wn)n[5].setComponents(c+a,d+u,m+g,S+A).normalize();else if(t===Ao)n[5].setComponents(a,u,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vr.x=i.normal.x>0?e.max.x:e.min.x,Vr.y=i.normal.y>0?e.max.y:e.min.y,Vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bf(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],g=u[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const g=u[p];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class xn extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const T=f*d-o;for(let A=0;A<l;A++){const S=A*u-r;_.push(S,-T,0),g.push(0,0,1),m.push(A/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const A=T+l*f,S=T+l*(f+1),C=T+1+l*(f+1),w=T+1+l*f;p.push(A,S,w),p.push(S,C,w)}this.setIndex(p),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
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
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jf=`#ifdef USE_IRIDESCENCE
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
#endif`,Qf=`#ifdef USE_BUMPMAP
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cp=`#define PI 3.141592653589793
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
} // validated`,lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",_p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
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
}`,Rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
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
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Fp=`struct PhysicalMaterial {
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
}`,Bp=`
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zp=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
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
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,Xm=`#if DEPTH_PACKING == 3200
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
}`,qm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,e_=`#define LAMBERT
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
}`,t_=`#define LAMBERT
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
}`,n_=`#define MATCAP
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
}`,i_=`#define MATCAP
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
}`,s_=`#define NORMAL
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
}`,r_=`#define NORMAL
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
}`,o_=`#define PHONG
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
}`,a_=`#define PHONG
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
}`,c_=`#define STANDARD
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
}`,l_=`#define STANDARD
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
}`,h_=`#define TOON
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
}`,u_=`#define TOON
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
}`,d_=`uniform float size;
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
}`,f_=`uniform vec3 diffuse;
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
}`,p_=`#include <common>
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
}`,m_=`uniform vec3 color;
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
}`,__=`uniform float rotation;
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
}`,g_=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Hf,alphahash_pars_fragment:Gf,alphamap_fragment:zf,alphamap_pars_fragment:kf,alphatest_fragment:Vf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:Zf,begin_vertex:Kf,beginnormal_vertex:jf,bsdfs:$f,iridescence_fragment:Jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:ep,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:op,color_vertex:ap,common:cp,cube_uv_reflection_fragment:lp,defaultnormal_vertex:hp,displacementmap_pars_vertex:up,displacementmap_vertex:dp,emissivemap_fragment:fp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:_p,envmap_fragment:gp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:xp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Lp,envmap_vertex:Mp,fog_vertex:Tp,fog_pars_vertex:Ap,fog_fragment:vp,fog_pars_fragment:yp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:Rp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Cp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Np,lights_phong_fragment:Dp,lights_phong_pars_fragment:Op,lights_physical_fragment:Up,lights_physical_pars_fragment:Fp,lights_fragment_begin:Bp,lights_fragment_maps:Hp,lights_fragment_end:Gp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:qp,map_particle_fragment:Yp,map_particle_pars_fragment:Zp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:jp,morphinstance_vertex:$p,morphcolor_vertex:Jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:em,morphtarget_vertex:tm,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:cm,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:_m,dithering_pars_fragment:gm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Mm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:vm,skinning_pars_vertex:ym,skinning_vertex:bm,skinnormal_vertex:Rm,specularmap_fragment:wm,specularmap_pars_fragment:Im,tonemapping_fragment:Cm,tonemapping_pars_fragment:Lm,transmission_fragment:Pm,transmission_pars_fragment:Nm,uv_pars_fragment:Dm,uv_pars_vertex:Om,uv_vertex:Um,worldpos_vertex:Fm,background_vert:Bm,background_frag:Hm,backgroundCube_vert:Gm,backgroundCube_frag:zm,cube_vert:km,cube_frag:Vm,depth_vert:Wm,depth_frag:Xm,distanceRGBA_vert:qm,distanceRGBA_frag:Ym,equirect_vert:Zm,equirect_frag:Km,linedashed_vert:jm,linedashed_frag:$m,meshbasic_vert:Jm,meshbasic_frag:Qm,meshlambert_vert:e_,meshlambert_frag:t_,meshmatcap_vert:n_,meshmatcap_frag:i_,meshnormal_vert:s_,meshnormal_frag:r_,meshphong_vert:o_,meshphong_frag:a_,meshphysical_vert:c_,meshphysical_frag:l_,meshtoon_vert:h_,meshtoon_frag:u_,points_vert:d_,points_frag:f_,shadow_vert:p_,shadow_frag:m_,sprite_vert:__,sprite_frag:g_},se={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},yn={basic:{uniforms:Ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Le(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ft([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ft([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Le(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ft([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ft([se.points,se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ft([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ft([se.common,se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ft([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ft([se.sprite,se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ft([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ft([se.lights,se.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};yn.physical={uniforms:Ft([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Wr={r:0,b:0,g:0},xi=new bn,S_=new He;function x_(s,e,t,n,i,r,o){const a=new Le(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function _(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?t:e).get(A)),A}function g(T){let A=!1;const S=_(T);S===null?f(a,c):S&&S.isColor&&(f(S,1),A=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,A){const S=_(A);S&&(S.isCubeTexture||S.mapping===Co)?(h===void 0&&(h=new Ae(new nt(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Rs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),xi.copy(A.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(xi)),h.material.toneMapped=$e.getTransfer(S.colorSpace)!==ct,(u!==S||d!==S.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ae(new xn(2,2),new Rn({name:"BackgroundMaterial",uniforms:Rs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=$e.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,A){T.getRGB(Wr,yu(s)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),c=A,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(a,c)},render:g,addToRenderList:m}}function E_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(E,L,H,F,q){let Y=!1;const W=u(F,H,L);r!==W&&(r=W,l(r.object)),Y=p(E,F,H,q),Y&&_(E,F,H,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(E,L,H,F),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return s.createVertexArray()}function l(E){return s.bindVertexArray(E)}function h(E){return s.deleteVertexArray(E)}function u(E,L,H){const F=H.wireframe===!0;let q=n[E.id];q===void 0&&(q={},n[E.id]=q);let Y=q[L.id];Y===void 0&&(Y={},q[L.id]=Y);let W=Y[F];return W===void 0&&(W=d(c()),Y[F]=W),W}function d(E){const L=[],H=[],F=[];for(let q=0;q<t;q++)L[q]=0,H[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:F,object:E,attributes:{},index:null}}function p(E,L,H,F){const q=r.attributes,Y=L.attributes;let W=0;const j=H.getAttributes();for(const V in j)if(j[V].location>=0){const ue=q[V];let me=Y[V];if(me===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(me=E.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function _(E,L,H,F){const q={},Y=L.attributes;let W=0;const j=H.getAttributes();for(const V in j)if(j[V].location>=0){let ue=Y[V];ue===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor));const me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),q[V]=me,W++}r.attributes=q,r.attributesNum=W,r.index=F}function g(){const E=r.newAttributes;for(let L=0,H=E.length;L<H;L++)E[L]=0}function m(E){f(E,0)}function f(E,L){const H=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;H[E]=1,F[E]===0&&(s.enableVertexAttribArray(E),F[E]=1),q[E]!==L&&(s.vertexAttribDivisor(E,L),q[E]=L)}function T(){const E=r.newAttributes,L=r.enabledAttributes;for(let H=0,F=L.length;H<F;H++)L[H]!==E[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function A(E,L,H,F,q,Y,W){W===!0?s.vertexAttribIPointer(E,L,H,q,Y):s.vertexAttribPointer(E,L,H,F,q,Y)}function S(E,L,H,F){g();const q=F.attributes,Y=H.getAttributes(),W=L.defaultAttributeValues;for(const j in Y){const V=Y[j];if(V.location>=0){let ne=q[j];if(ne===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor)),ne!==void 0){const ue=ne.normalized,me=ne.itemSize,Pe=e.get(ne);if(Pe===void 0)continue;const Xe=Pe.buffer,k=Pe.type,Q=Pe.bytesPerElement,Se=k===s.INT||k===s.UNSIGNED_INT||ne.gpuType===bc;if(ne.isInterleavedBufferAttribute){const re=ne.data,Ie=re.stride,Ne=ne.offset;if(re.isInstancedInterleavedBuffer){for(let Be=0;Be<V.locationSize;Be++)f(V.location+Be,re.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Be=0;Be<V.locationSize;Be++)m(V.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let Be=0;Be<V.locationSize;Be++)A(V.location+Be,me/V.locationSize,k,ue,Ie*Q,(Ne+me/V.locationSize*Be)*Q,Se)}else{if(ne.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)f(V.location+re,ne.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let re=0;re<V.locationSize;re++)A(V.location+re,me/V.locationSize,k,ue,me*Q,me/V.locationSize*re*Q,Se)}}else if(W!==void 0){const ue=W[j];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(V.location,ue);break;case 3:s.vertexAttrib3fv(V.location,ue);break;case 4:s.vertexAttrib4fv(V.location,ue);break;default:s.vertexAttrib1fv(V.location,ue)}}}}T()}function C(){I();for(const E in n){const L=n[E];for(const H in L){const F=L[H];for(const q in F)h(F[q].object),delete F[q];delete L[H]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const L=n[E.id];for(const H in L){const F=L[H];for(const q in F)h(F[q].object),delete F[q];delete L[H]}delete n[E.id]}function b(E){for(const L in n){const H=n[L];if(H[E.id]===void 0)continue;const F=H[E.id];for(const q in F)h(F[q].object),delete F[q];delete H[E.id]}}function I(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function M_(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function T_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==ln&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const I=b===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==jn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Sn&&!I)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:C,maxSamples:w}}function A_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new vi,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,A=T*4;let S=f.clippingState||null;c.value=S,S=h(_,d,A,p);for(let C=0;C!==A;++C)S[C]=t[C];f.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=p+g*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,S=p;A!==g;++A,S+=4)o.copy(u[A]).applyMatrix4(T,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function v_(s){let e=new WeakMap;function t(o,a){return a===Na?o.mapping=Ms:a===Da&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Na||a===Da)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Of(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Oc extends bu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cs=4,Ul=[.125,.215,.35,.446,.526,.582],Pi=20,na=new Oc,Fl=new Le;let ia=null,sa=0,ra=0,oa=!1;const yi=(1+Math.sqrt(5))/2,Qi=1/yi,Bl=[new P(-yi,Qi,0),new P(yi,Qi,0),new P(-Qi,0,yi),new P(Qi,0,yi),new P(0,yi,-Qi),new P(0,yi,Qi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ia,sa,ra),this._renderer.xr.enabled=oa,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Sr,format:ln,colorSpace:Vt,depthBuffer:!1},i=Gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y_(r)),this._blurMaterial=b_(r,e,t)}return i}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,n,i){const a=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fl),h.toneMapping=di,h.autoClear=!1;const p=new hn({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),_=new Ae(new nt,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Fl),g=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):T===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const A=this._cubeSize;Xr(i,T*A,f>2?A:0,A,A),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ms||e.mapping===Ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,na)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bl[(i-r-1)%Bl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Pi-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Pi;m>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const f=[];let T=0;for(let b=0;b<Pi;++b){const I=b/g,M=Math.exp(-I*I/2);f.push(M),b===0?T+=M:b<m&&(T+=2*M)}for(let b=0;b<f.length;b++)f[b]=f[b]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=_,d.mipInt.value=A-n;const S=this._sizeLods[i],C=3*S*(i>A-cs?i-A+cs:0),w=4*(this._cubeSize-S);Xr(t,C,w,3*S,2*S),c.setRenderTarget(t),c.render(u,na)}}function y_(s){const e=[],t=[],n=[];let i=s;const r=s-cs+1+Ul.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-cs?c=Ul[o-s+cs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,T=new Float32Array(g*_*p),A=new Float32Array(m*_*p),S=new Float32Array(f*_*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,I=w>2?0:-1,M=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];T.set(M,g*_*w),A.set(d,m*_*w);const E=[w,w,w,w,w,w];S.set(E,f*_*w)}const C=new Mt;C.setAttribute("position",new mt(T,g)),C.setAttribute("uv",new mt(A,m)),C.setAttribute("faceIndex",new mt(S,f)),e.push(C),i>cs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gl(s,e,t){const n=new Ui(s,e,t);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function b_(s,e,t){const n=new Float32Array(Pi),i=new P(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function zl(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function kl(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function R_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Na||c===Da,h=c===Ms||c===Ts;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Hl(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Hl(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function w_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function I_(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],s.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const T=p.array;g=p.version;for(let A=0,S=T.length;A<S;A+=3){const C=T[A+0],w=T[A+1],b=T[A+2];d.push(C,w,w,b,b,C)}}else if(_!==void 0){const T=_.array;g=_.version;for(let A=0,S=T.length/3-1;A<S;A+=3){const C=A+0,w=A+1,b=A+2;d.push(C,w,w,b,b,C)}}else return;const m=new(Su(d)?vu:Au)(d,1);m.version=g;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function C_(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,d*o,_),t.update(p,n,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function u(d,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,_);let f=0;for(let T=0;T<_;T++)f+=p[T]*g[T];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function L_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function P_(s,e,t){const n=new WeakMap,i=new Qe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*w*4*u),I=new Eu(b,C,w,u);I.type=Sn,I.needsUpdate=!0;const M=S*4;for(let L=0;L<u;L++){const H=f[L],F=T[L],q=A[L],Y=C*w*4*L;for(let W=0;W<H.count;W++){const j=W*M;_===!0&&(i.fromBufferAttribute(H,W),b[Y+j+0]=i.x,b[Y+j+1]=i.y,b[Y+j+2]=i.z,b[Y+j+3]=0),g===!0&&(i.fromBufferAttribute(F,W),b[Y+j+4]=i.x,b[Y+j+5]=i.y,b[Y+j+6]=i.z,b[Y+j+7]=0),m===!0&&(i.fromBufferAttribute(q,W),b[Y+j+8]=i.x,b[Y+j+9]=i.y,b[Y+j+10]=i.z,b[Y+j+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Fe(C,w)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function N_(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Iu extends Tt{constructor(e,t,n,i,r,o,a,c,l,h=ps){if(h!==ps&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=Oi),n===void 0&&h===ys&&(n=vs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cu=new Tt,Vl=new Iu(1,1),Lu=new Eu,Pu=new xf,Nu=new Ru,Wl=[],Xl=[],ql=new Float32Array(16),Yl=new Float32Array(9),Zl=new Float32Array(4);function Ns(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Wl[i];if(r===void 0&&(r=new Float32Array(i),Wl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function At(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function No(s,e){let t=Xl[e];t===void 0&&(t=new Int32Array(e),Xl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function D_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function O_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function U_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function F_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function B_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(At(t,n))return;Zl.set(n),s.uniformMatrix2fv(this.addr,!1,Zl),vt(t,n)}}function H_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(At(t,n))return;Yl.set(n),s.uniformMatrix3fv(this.addr,!1,Yl),vt(t,n)}}function G_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(At(t,n))return;ql.set(n),s.uniformMatrix4fv(this.addr,!1,ql),vt(t,n)}}function z_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function k_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function V_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function W_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function X_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function Y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function Z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function K_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Vl.compareFunction=gu,r=Vl):r=Cu,t.setTexture2D(e||r,i)}function j_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pu,i)}function $_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nu,i)}function J_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lu,i)}function Q_(s){switch(s){case 5126:return D_;case 35664:return O_;case 35665:return U_;case 35666:return F_;case 35674:return B_;case 35675:return H_;case 35676:return G_;case 5124:case 35670:return z_;case 35667:case 35671:return k_;case 35668:case 35672:return V_;case 35669:case 35673:return W_;case 5125:return X_;case 36294:return q_;case 36295:return Y_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return J_}}function eg(s,e){s.uniform1fv(this.addr,e)}function tg(s,e){const t=Ns(e,this.size,2);s.uniform2fv(this.addr,t)}function ng(s,e){const t=Ns(e,this.size,3);s.uniform3fv(this.addr,t)}function ig(s,e){const t=Ns(e,this.size,4);s.uniform4fv(this.addr,t)}function sg(s,e){const t=Ns(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function rg(s,e){const t=Ns(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function og(s,e){const t=Ns(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ag(s,e){s.uniform1iv(this.addr,e)}function cg(s,e){s.uniform2iv(this.addr,e)}function lg(s,e){s.uniform3iv(this.addr,e)}function hg(s,e){s.uniform4iv(this.addr,e)}function ug(s,e){s.uniform1uiv(this.addr,e)}function dg(s,e){s.uniform2uiv(this.addr,e)}function fg(s,e){s.uniform3uiv(this.addr,e)}function pg(s,e){s.uniform4uiv(this.addr,e)}function mg(s,e,t){const n=this.cache,i=e.length,r=No(t,i);At(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Cu,r[o])}function _g(s,e,t){const n=this.cache,i=e.length,r=No(t,i);At(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Pu,r[o])}function gg(s,e,t){const n=this.cache,i=e.length,r=No(t,i);At(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Nu,r[o])}function Sg(s,e,t){const n=this.cache,i=e.length,r=No(t,i);At(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Lu,r[o])}function xg(s){switch(s){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return cg;case 35668:case 35672:return lg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return Sg}}class Eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Q_(t.type)}}class Mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xg(t.type)}}class Tg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Kl(s,e){s.seq.push(e),s.map[e.id]=e}function Ag(s,e,t){const n=s.name,i=n.length;for(aa.lastIndex=0;;){const r=aa.exec(n),o=aa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Kl(t,l===void 0?new Eg(a,s,e):new Mg(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Tg(a),Kl(t,u)),t=u}}}class mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Ag(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function jl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const vg=37297;let yg=0;function bg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const $l=new ke;function Rg(s){$e._getMatrix($l,$e.workingColorSpace,s);const e=`mat3( ${$l.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case Lo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+bg(s.getShaderSource(e),o)}else return i}function wg(s,e){const t=Rg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ig(s,e){let t;switch(e){case Id:t="Linear";break;case Cd:t="Reinhard";break;case Ld:t="Cineon";break;case iu:t="ACESFilmic";break;case Nd:t="AgX";break;case Dd:t="Neutral";break;case Pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new P;function Cg(){$e.getLuminanceCoefficients(qr);const s=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Pg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ng(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ir(s){return s!==""}function Ql(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(s){return s.replace(Dg,Ug)}const Og=new Map;function Ug(s,e){let t=We[e];if(t===void 0){const n=Og.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(s){return s.replace(Fg,Bg)}function Bg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nh(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Hg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===eu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ms:case Ts:e="ENVMAP_TYPE_CUBE";break;case Co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function kg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case nu:e="ENVMAP_BLENDING_MULTIPLY";break;case Rd:e="ENVMAP_BLENDING_MIX";break;case wd:e="ENVMAP_BLENDING_ADD";break}return e}function Vg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wg(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Hg(t),l=Gg(t),h=zg(t),u=kg(t),d=Vg(t),p=Lg(t),_=Pg(r),g=i.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ir).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ir).join(`
`),f.length>0&&(f+=`
`)):(m=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),f=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?We.tonemapping_pars_fragment:"",t.toneMapping!==di?Ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,wg("linearToOutputTexel",t.outputColorSpace),Cg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),o=lc(o),o=Ql(o,t),o=eh(o,t),a=lc(a),a=Ql(a,t),a=eh(a,t),o=th(o),a=th(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=T+m+o,S=T+f+a,C=jl(i,i.VERTEX_SHADER,A),w=jl(i,i.FRAGMENT_SHADER,S);i.attachShader(g,C),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(L){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(C).trim(),q=i.getShaderInfoLog(w).trim();let Y=!0,W=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,C,w);else{const j=Jl(i,C,"vertex"),V=Jl(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+j+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||q==="")&&(W=!1);W&&(L.diagnostics={runnable:Y,programLog:H,vertexShader:{log:F,prefix:m},fragmentShader:{log:q,prefix:f}})}i.deleteShader(C),i.deleteShader(w),I=new mo(i,g),M=Ng(i,g)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(g,vg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=w,this}let Xg=0;class qg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yg(e),t.set(e,n)),n}}class Yg{constructor(e){this.id=Xg++,this.code=e,this.usedTimes=0}}function Zg(s,e,t,n,i,r,o){const a=new Mu,c=new qg,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,E,L,H,F){const q=H.fog,Y=F.geometry,W=M.isMeshStandardMaterial?H.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),V=j&&j.mapping===Co?j.image.height:null,ne=_[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,me=ue!==void 0?ue.length:0;let Pe=0;Y.morphAttributes.position!==void 0&&(Pe=1),Y.morphAttributes.normal!==void 0&&(Pe=2),Y.morphAttributes.color!==void 0&&(Pe=3);let Xe,k,Q,Se;if(ne){const Ue=yn[ne];Xe=Ue.vertexShader,k=Ue.fragmentShader}else Xe=M.vertexShader,k=M.fragmentShader,c.update(M),Q=c.getVertexShaderID(M),Se=c.getFragmentShaderID(M);const re=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),Ne=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,ot=!!M.map,je=!!M.matcap,pt=!!j,O=!!M.aoMap,It=!!M.lightMap,Ve=!!M.bumpMap,Ge=!!M.normalMap,be=!!M.displacementMap,at=!!M.emissiveMap,ye=!!M.metalnessMap,R=!!M.roughnessMap,x=M.anisotropy>0,B=M.clearcoat>0,K=M.dispersion>0,J=M.iridescence>0,Z=M.sheen>0,xe=M.transmission>0,oe=x&&!!M.anisotropyMap,fe=B&&!!M.clearcoatMap,Ke=B&&!!M.clearcoatNormalMap,ee=B&&!!M.clearcoatRoughnessMap,pe=J&&!!M.iridescenceMap,Re=J&&!!M.iridescenceThicknessMap,Ce=Z&&!!M.sheenColorMap,_e=Z&&!!M.sheenRoughnessMap,qe=!!M.specularMap,Oe=!!M.specularColorMap,it=!!M.specularIntensityMap,N=xe&&!!M.transmissionMap,ie=xe&&!!M.thicknessMap,X=!!M.gradientMap,$=!!M.alphaMap,ce=M.alphaTest>0,le=!!M.alphaHash,ae=!!M.extensions;let we=di;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(we=s.toneMapping);const Ye={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:Xe,fragmentShader:k,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,instancingMorph:Ne&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Vt,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:je,envMap:pt,envMapMode:pt&&j.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:It,bumpMap:Ve,normalMap:Ge,displacementMap:d&&be,emissiveMap:at,normalMapObjectSpace:Ge&&M.normalMapType===Gd,normalMapTangentSpace:Ge&&M.normalMapType===_u,metalnessMap:ye,roughnessMap:R,anisotropy:x,anisotropyMap:oe,clearcoat:B,clearcoatMap:fe,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ee,dispersion:K,iridescence:J,iridescenceMap:pe,iridescenceThicknessMap:Re,sheen:Z,sheenColorMap:Ce,sheenRoughnessMap:_e,specularMap:qe,specularColorMap:Oe,specularIntensityMap:it,transmission:xe,transmissionMap:N,thicknessMap:ie,gradientMap:X,opaque:M.transparent===!1&&M.blending===Ni&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:ce,alphaHash:le,combine:M.combine,mapUv:ot&&g(M.map.channel),aoMapUv:O&&g(M.aoMap.channel),lightMapUv:It&&g(M.lightMap.channel),bumpMapUv:Ve&&g(M.bumpMap.channel),normalMapUv:Ge&&g(M.normalMap.channel),displacementMapUv:be&&g(M.displacementMap.channel),emissiveMapUv:at&&g(M.emissiveMap.channel),metalnessMapUv:ye&&g(M.metalnessMap.channel),roughnessMapUv:R&&g(M.roughnessMap.channel),anisotropyMapUv:oe&&g(M.anisotropyMap.channel),clearcoatMapUv:fe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(M.sheenRoughnessMap.channel),specularMapUv:qe&&g(M.specularMap.channel),specularColorMapUv:Oe&&g(M.specularColorMap.channel),specularIntensityMapUv:it&&g(M.specularIntensityMap.channel),transmissionMapUv:N&&g(M.transmissionMap.channel),thicknessMapUv:ie&&g(M.thicknessMap.channel),alphaMapUv:$&&g(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ge||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(ot||$),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:at&&M.emissiveMap.isVideoTexture===!0&&$e.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zt,flipSided:M.side===Zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ae&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&M.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function f(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)E.push(L),E.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(T(E,M),A(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function T(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function A(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const E=_[M.type];let L;if(E){const H=yn[E];L=Lf.clone(H.uniforms)}else L=M.uniforms;return L}function C(M,E){let L;for(let H=0,F=h.length;H<F;H++){const q=h[H];if(q.cacheKey===E){L=q,++L.usedTimes;break}}return L===void 0&&(L=new Wg(s,E,M,r),h.push(L)),L}function w(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function b(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:I}}function Kg(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function jg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ih(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,_,g,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function a(u,d,p,_,g,m){const f=o(u,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,_,g,m){const f=o(u,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||jg),n.length>1&&n.sort(d||ih),i.length>1&&i.sort(d||ih)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function $g(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new sh,s.set(n,[o])):i>=r.length?(o=new sh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Jg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Qg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let e0=0;function t0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function n0(s){const e=new Jg,t=Qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new He,o=new He;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,T=0,A=0,S=0,C=0,w=0,b=0;l.sort(t0);for(let M=0,E=l.length;M<E;M++){const L=l[M],H=L.color,F=L.intensity,q=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*F,u+=H.g*F,d+=H.b*F;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],F);b++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,V=t.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=W,p++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(H).multiplyScalar(F),W.distance=q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[g]=W;const j=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,j.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[g]=j.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=Y,S++}g++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(H).multiplyScalar(F),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const j=L.shadow,V=t.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=L.shadow.matrix,A++}n.point[_]=W,_++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(F),W.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[f]=W,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==T||I.numPointShadows!==A||I.numSpotShadows!==S||I.numSpotMaps!==C||I.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=S+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,I.directionalLength=p,I.pointLength=_,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=T,I.numPointShadows=A,I.numSpotShadows=S,I.numSpotMaps=C,I.numLightProbes=b,n.version=e0++)}function c(l,h){let u=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const A=l[f];if(A.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(A.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function rh(s){const e=new n0(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function i0(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new rh(s),e.set(i,[a])):r>=o.length?(a=new rh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class s0 extends un{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r0 extends un{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const o0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a0=`uniform sampler2D shadow_pass;
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
}`;function c0(s,e,t){let n=new Dc;const i=new Fe,r=new Fe,o=new Qe,a=new s0({depthPacking:Hd}),c=new r0,l={},h=t.maxTextureSize,u={[Kn]:Zt,[Zt]:Kn,[zt]:zt},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:o0,fragmentShader:a0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Mt;_.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ae(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let f=this.type;this.render=function(w,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),E=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),H=s.state;H.setBlending(ui),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=f!==Hn&&this.type===Hn,q=f===Hn&&this.type!==Hn;for(let Y=0,W=w.length;Y<W;Y++){const j=w[Y],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ne=V.getFrameExtents();if(i.multiply(ne),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,V.mapSize.y=r.y)),V.map===null||F===!0||q===!0){const me=this.type!==Hn?{minFilter:kt,magFilter:kt}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(i.x,i.y,me),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ue=V.getViewportCount();for(let me=0;me<ue;me++){const Pe=V.getViewport(me);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),H.viewport(o),V.updateMatrices(j,me),n=V.getFrustum(),S(b,I,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===Hn&&T(V,I),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,E,L)};function T(w,b){const I=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ui(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(b,null,I,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(b,null,I,p,g,null)}function A(w,b,I,M){let E=null;const L=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)E=L;else if(E=I.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=E.uuid,F=b.uuid;let q=l[H];q===void 0&&(q={},l[H]=q);let Y=q[F];Y===void 0&&(Y=E.clone(),q[F]=Y,b.addEventListener("dispose",C)),E=Y}if(E.visible=b.visible,E.wireframe=b.wireframe,M===Hn?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:u[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=s.properties.get(E);H.light=I}return E}function S(w,b,I,M,E){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Hn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const F=e.update(w),q=w.material;if(Array.isArray(q)){const Y=F.groups;for(let W=0,j=Y.length;W<j;W++){const V=Y[W],ne=q[V.materialIndex];if(ne&&ne.visible){const ue=A(w,ne,M,E);w.onBeforeShadow(s,w,b,I,F,ue,V),s.renderBufferDirect(I,null,F,ue,w,V),w.onAfterShadow(s,w,b,I,F,ue,V)}}}else if(q.visible){const Y=A(w,q,M,E);w.onBeforeShadow(s,w,b,I,F,Y,null),s.renderBufferDirect(I,null,F,Y,w,null),w.onAfterShadow(s,w,b,I,F,Y,null)}}const H=w.children;for(let F=0,q=H.length;F<q;F++)S(H[F],b,I,M,E)}function C(w){w.target.removeEventListener("dispose",C);for(const I in l){const M=l[I],E=w.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const l0={[ba]:Ra,[wa]:La,[Ia]:Pa,[Es]:Ca,[Ra]:ba,[La]:wa,[Pa]:Ia,[Ca]:Es};function h0(s,e){function t(){let N=!1;const ie=new Qe;let X=null;const $=new Qe(0,0,0,0);return{setMask:function(ce){X!==ce&&!N&&(s.colorMask(ce,ce,ce,ce),X=ce)},setLocked:function(ce){N=ce},setClear:function(ce,le,ae,we,Ye){Ye===!0&&(ce*=we,le*=we,ae*=we),ie.set(ce,le,ae,we),$.equals(ie)===!1&&(s.clearColor(ce,le,ae,we),$.copy(ie))},reset:function(){N=!1,X=null,$.set(-1,0,0,0)}}}function n(){let N=!1,ie=!1,X=null,$=null,ce=null;return{setReversed:function(le){if(ie!==le){const ae=e.get("EXT_clip_control");ie?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);const we=ce;ce=null,this.setClear(we)}ie=le},getReversed:function(){return ie},setTest:function(le){le?re(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(le){X!==le&&!N&&(s.depthMask(le),X=le)},setFunc:function(le){if(ie&&(le=l0[le]),$!==le){switch(le){case ba:s.depthFunc(s.NEVER);break;case Ra:s.depthFunc(s.ALWAYS);break;case wa:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case Ia:s.depthFunc(s.EQUAL);break;case Ca:s.depthFunc(s.GEQUAL);break;case La:s.depthFunc(s.GREATER);break;case Pa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=le}},setLocked:function(le){N=le},setClear:function(le){ce!==le&&(ie&&(le=1-le),s.clearDepth(le),ce=le)},reset:function(){N=!1,X=null,$=null,ce=null,ie=!1}}}function i(){let N=!1,ie=null,X=null,$=null,ce=null,le=null,ae=null,we=null,Ye=null;return{setTest:function(Ue){N||(Ue?re(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(Ue){ie!==Ue&&!N&&(s.stencilMask(Ue),ie=Ue)},setFunc:function(Ue,yt,tn){(X!==Ue||$!==yt||ce!==tn)&&(s.stencilFunc(Ue,yt,tn),X=Ue,$=yt,ce=tn)},setOp:function(Ue,yt,tn){(le!==Ue||ae!==yt||we!==tn)&&(s.stencilOp(Ue,yt,tn),le=Ue,ae=yt,we=tn)},setLocked:function(Ue){N=Ue},setClear:function(Ue){Ye!==Ue&&(s.clearStencil(Ue),Ye=Ue)},reset:function(){N=!1,ie=null,X=null,$=null,ce=null,le=null,ae=null,we=null,Ye=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,T=null,A=null,S=null,C=null,w=null,b=new Le(0,0,0),I=0,M=!1,E=null,L=null,H=null,F=null,q=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=j>=2);let ne=null,ue={};const me=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),Xe=new Qe().fromArray(me),k=new Qe().fromArray(Pe);function Q(N,ie,X,$){const ce=new Uint8Array(4),le=s.createTexture();s.bindTexture(N,le),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<X;ae++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(ie+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return le}const Se={};Se[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(s.DEPTH_TEST),o.setFunc(Es),Ve(!1),Ge(ol),re(s.CULL_FACE),O(ui);function re(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Ie(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ne(N,ie){return u[N]!==ie?(s.bindFramebuffer(N,ie),u[N]=ie,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ie),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Be(N,ie){let X=p,$=!1;if(N){X=d.get(ie),X===void 0&&(X=[],d.set(ie,X));const ce=N.textures;if(X.length!==ce.length||X[0]!==s.COLOR_ATTACHMENT0){for(let le=0,ae=ce.length;le<ae;le++)X[le]=s.COLOR_ATTACHMENT0+le;X.length=ce.length,$=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,$=!0);$&&s.drawBuffers(X)}function ot(N){return _!==N?(s.useProgram(N),_=N,!0):!1}const je={[Li]:s.FUNC_ADD,[hd]:s.FUNC_SUBTRACT,[ud]:s.FUNC_REVERSE_SUBTRACT};je[dd]=s.MIN,je[fd]=s.MAX;const pt={[pd]:s.ZERO,[md]:s.ONE,[_d]:s.SRC_COLOR,[va]:s.SRC_ALPHA,[Td]:s.SRC_ALPHA_SATURATE,[Ed]:s.DST_COLOR,[Sd]:s.DST_ALPHA,[gd]:s.ONE_MINUS_SRC_COLOR,[ya]:s.ONE_MINUS_SRC_ALPHA,[Md]:s.ONE_MINUS_DST_COLOR,[xd]:s.ONE_MINUS_DST_ALPHA,[Ad]:s.CONSTANT_COLOR,[vd]:s.ONE_MINUS_CONSTANT_COLOR,[yd]:s.CONSTANT_ALPHA,[bd]:s.ONE_MINUS_CONSTANT_ALPHA};function O(N,ie,X,$,ce,le,ae,we,Ye,Ue){if(N===ui){g===!0&&(Ie(s.BLEND),g=!1);return}if(g===!1&&(re(s.BLEND),g=!0),N!==ld){if(N!==m||Ue!==M){if((f!==Li||S!==Li)&&(s.blendEquation(s.FUNC_ADD),f=Li,S=Li),Ue)switch(N){case Ni:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Di:s.blendFunc(s.ONE,s.ONE);break;case al:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Di:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case al:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,A=null,C=null,w=null,b.set(0,0,0),I=0,m=N,M=Ue}return}ce=ce||ie,le=le||X,ae=ae||$,(ie!==f||ce!==S)&&(s.blendEquationSeparate(je[ie],je[ce]),f=ie,S=ce),(X!==T||$!==A||le!==C||ae!==w)&&(s.blendFuncSeparate(pt[X],pt[$],pt[le],pt[ae]),T=X,A=$,C=le,w=ae),(we.equals(b)===!1||Ye!==I)&&(s.blendColor(we.r,we.g,we.b,Ye),b.copy(we),I=Ye),m=N,M=!1}function It(N,ie){N.side===zt?Ie(s.CULL_FACE):re(s.CULL_FACE);let X=N.side===Zt;ie&&(X=!X),Ve(X),N.blending===Ni&&N.transparent===!1?O(ui):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const $=N.stencilWrite;a.setTest($),$&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),at(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(N){E!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),E=N)}function Ge(N){N!==ad?(re(s.CULL_FACE),N!==L&&(N===ol?s.cullFace(s.BACK):N===cd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),L=N}function be(N){N!==H&&(W&&s.lineWidth(N),H=N)}function at(N,ie,X){N?(re(s.POLYGON_OFFSET_FILL),(F!==ie||q!==X)&&(s.polygonOffset(ie,X),F=ie,q=X)):Ie(s.POLYGON_OFFSET_FILL)}function ye(N){N?re(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function R(N){N===void 0&&(N=s.TEXTURE0+Y-1),ne!==N&&(s.activeTexture(N),ne=N)}function x(N,ie,X){X===void 0&&(ne===null?X=s.TEXTURE0+Y-1:X=ne);let $=ue[X];$===void 0&&($={type:void 0,texture:void 0},ue[X]=$),($.type!==N||$.texture!==ie)&&(ne!==X&&(s.activeTexture(X),ne=X),s.bindTexture(N,ie||Se[N]),$.type=N,$.texture=ie)}function B(){const N=ue[ne];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(N){Xe.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Xe.copy(N))}function _e(N){k.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),k.copy(N))}function qe(N,ie){let X=l.get(ie);X===void 0&&(X=new WeakMap,l.set(ie,X));let $=X.get(N);$===void 0&&($=s.getUniformBlockIndex(ie,N.name),X.set(N,$))}function Oe(N,ie){const $=l.get(ie).get(N);c.get(ie)!==$&&(s.uniformBlockBinding(ie,$,N.__bindingPointIndex),c.set(ie,$))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ne=null,ue={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,T=null,A=null,S=null,C=null,w=null,b=new Le(0,0,0),I=0,M=!1,E=null,L=null,H=null,F=null,q=null,Xe.set(0,0,s.canvas.width,s.canvas.height),k.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Ie,bindFramebuffer:Ne,drawBuffers:Be,useProgram:ot,setBlending:O,setMaterial:It,setFlipSided:Ve,setCullFace:Ge,setLineWidth:be,setPolygonOffset:at,setScissorTest:ye,activeTexture:R,bindTexture:x,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:pe,texImage3D:Re,updateUBOMapping:qe,uniformBlockBinding:Oe,texStorage2D:Ke,texStorage3D:ee,texSubImage2D:Z,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Ce,viewport:_e,reset:it}}function oh(s,e,t,n){const i=u0(n);switch(t){case lu:return s*e;case uu:return s*e;case du:return s*e*2;case Ic:return s*e/i.components*i.byteLength;case Cc:return s*e/i.components*i.byteLength;case fu:return s*e*2/i.components*i.byteLength;case Lc:return s*e*2/i.components*i.byteLength;case hu:return s*e*3/i.components*i.byteLength;case ln:return s*e*4/i.components*i.byteLength;case Pc:return s*e*4/i.components*i.byteLength;case lo:case ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ua:case Ba:return Math.max(s,16)*Math.max(e,8)/4;case Oa:case Fa:return Math.max(s,8)*Math.max(e,8)/2;case Ha:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Za:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case po:case nc:case ic:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pu:case sc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case rc:case oc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u0(s){switch(s){case jn:case ou:return{byteLength:1,components:1};case ur:case au:case Sr:return{byteLength:2,components:1};case Rc:case wc:return{byteLength:2,components:4};case Oi:case bc:case Sn:return{byteLength:4,components:1};case cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function d0(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,x){return p?new OffscreenCanvas(R,x):pr("canvas")}function g(R,x,B){let K=1;const J=ye(R);if((J.width>B||J.height>B)&&(K=B/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(K*J.width),xe=Math.floor(K*J.height);u===void 0&&(u=_(Z,xe));const oe=x?_(Z,xe):u;return oe.width=Z,oe.height=xe,oe.getContext("2d").drawImage(R,0,0,Z,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+xe+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){s.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(R,x,B,K,J=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=x;if(x===s.RED&&(B===s.FLOAT&&(Z=s.R32F),B===s.HALF_FLOAT&&(Z=s.R16F),B===s.UNSIGNED_BYTE&&(Z=s.R8)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.R8UI),B===s.UNSIGNED_SHORT&&(Z=s.R16UI),B===s.UNSIGNED_INT&&(Z=s.R32UI),B===s.BYTE&&(Z=s.R8I),B===s.SHORT&&(Z=s.R16I),B===s.INT&&(Z=s.R32I)),x===s.RG&&(B===s.FLOAT&&(Z=s.RG32F),B===s.HALF_FLOAT&&(Z=s.RG16F),B===s.UNSIGNED_BYTE&&(Z=s.RG8)),x===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RG8UI),B===s.UNSIGNED_SHORT&&(Z=s.RG16UI),B===s.UNSIGNED_INT&&(Z=s.RG32UI),B===s.BYTE&&(Z=s.RG8I),B===s.SHORT&&(Z=s.RG16I),B===s.INT&&(Z=s.RG32I)),x===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),B===s.UNSIGNED_INT&&(Z=s.RGB32UI),B===s.BYTE&&(Z=s.RGB8I),B===s.SHORT&&(Z=s.RGB16I),B===s.INT&&(Z=s.RGB32I)),x===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),B===s.UNSIGNED_INT&&(Z=s.RGBA32UI),B===s.BYTE&&(Z=s.RGBA8I),B===s.SHORT&&(Z=s.RGBA16I),B===s.INT&&(Z=s.RGBA32I)),x===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),x===s.RGBA){const xe=J?Lo:$e.getTransfer(K);B===s.FLOAT&&(Z=s.RGBA32F),B===s.HALF_FLOAT&&(Z=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Z=xe===ct?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(R,x){let B;return R?x===null||x===Oi||x===vs?B=s.DEPTH24_STENCIL8:x===Sn?B=s.DEPTH32F_STENCIL8:x===ur&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Oi||x===vs?B=s.DEPTH_COMPONENT24:x===Sn?B=s.DEPTH_COMPONENT32F:x===ur&&(B=s.DEPTH_COMPONENT16),B}function C(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==wt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),I(x),x.isVideoTexture&&h.delete(x)}function b(R){const x=R.target;x.removeEventListener("dispose",b),E(x)}function I(R){const x=n.get(R);if(x.__webglInit===void 0)return;const B=R.source,K=d.get(B);if(K){const J=K[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(R),Object.keys(K).length===0&&d.delete(B)}n.remove(R)}function M(R){const x=n.get(R);s.deleteTexture(x.__webglTexture);const B=R.source,K=d.get(B);delete K[x.__cacheKey],o.memory.textures--}function E(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let J=0;J<x.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(x.__webglFramebuffer[K][J]);else s.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)s.deleteFramebuffer(x.__webglFramebuffer[K]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=R.textures;for(let K=0,J=B.length;K<J;K++){const Z=n.get(B[K]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(R)}let L=0;function H(){L=0}function F(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function q(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Y(R,x){const B=n.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(B,R,x);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function W(R,x){const B=n.get(R);if(R.version>0&&B.__version!==R.version){k(B,R,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function j(R,x){const B=n.get(R);if(R.version>0&&B.__version!==R.version){k(B,R,x);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function V(R,x){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Q(B,R,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}const ne={[As]:s.REPEAT,[li]:s.CLAMP_TO_EDGE,[Mo]:s.MIRRORED_REPEAT},ue={[kt]:s.NEAREST,[ru]:s.NEAREST_MIPMAP_NEAREST,[tr]:s.NEAREST_MIPMAP_LINEAR,[wt]:s.LINEAR,[co]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},me={[zd]:s.NEVER,[Yd]:s.ALWAYS,[kd]:s.LESS,[gu]:s.LEQUAL,[Vd]:s.EQUAL,[qd]:s.GEQUAL,[Wd]:s.GREATER,[Xd]:s.NOTEQUAL};function Pe(R,x){if(x.type===Sn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===wt||x.magFilter===co||x.magFilter===tr||x.magFilter===Vn||x.minFilter===wt||x.minFilter===co||x.minFilter===tr||x.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ne[x.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ne[x.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ne[x.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ue[x.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==tr&&x.minFilter!==Vn||x.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Xe(R,x){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const K=x.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const Z=q(x);if(Z!==R.__cacheKey){J[Z]===void 0&&(J[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[Z].usedTimes++;const xe=J[R.__cacheKey];xe!==void 0&&(J[R.__cacheKey].usedTimes--,xe.usedTimes===0&&M(x)),R.__cacheKey=Z,R.__webglTexture=J[Z].texture}return B}function k(R,x,B){let K=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=s.TEXTURE_3D);const J=Xe(R,x),Z=x.source;t.bindTexture(K,R.__webglTexture,s.TEXTURE0+B);const xe=n.get(Z);if(Z.version!==xe.__version||J===!0){t.activeTexture(s.TEXTURE0+B);const oe=$e.getPrimaries($e.workingColorSpace),fe=x.colorSpace===ci?null:$e.getPrimaries(x.colorSpace),Ke=x.colorSpace===ci||oe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ee=g(x.image,!1,i.maxTextureSize);ee=at(x,ee);const pe=r.convert(x.format,x.colorSpace),Re=r.convert(x.type);let Ce=A(x.internalFormat,pe,Re,x.colorSpace,x.isVideoTexture);Pe(K,x);let _e;const qe=x.mipmaps,Oe=x.isVideoTexture!==!0,it=xe.__version===void 0||J===!0,N=Z.dataReady,ie=C(x,ee);if(x.isDepthTexture)Ce=S(x.format===ys,x.type),it&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ee.width,ee.height,0,pe,Re,null));else if(x.isDataTexture)if(qe.length>0){Oe&&it&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,qe[0].width,qe[0].height);for(let X=0,$=qe.length;X<$;X++)_e=qe[X],Oe?N&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,_e.width,_e.height,pe,Re,_e.data):t.texImage2D(s.TEXTURE_2D,X,Ce,_e.width,_e.height,0,pe,Re,_e.data);x.generateMipmaps=!1}else Oe?(it&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,ee.width,ee.height),N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,Re,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,ee.width,ee.height,0,pe,Re,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,Ce,qe[0].width,qe[0].height,ee.depth);for(let X=0,$=qe.length;X<$;X++)if(_e=qe[X],x.format!==ln)if(pe!==null)if(Oe){if(N)if(x.layerUpdates.size>0){const ce=oh(_e.width,_e.height,x.format,x.type);for(const le of x.layerUpdates){const ae=_e.data.subarray(le*ce/_e.data.BYTES_PER_ELEMENT,(le+1)*ce/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,le,_e.width,_e.height,1,pe,ae)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,ee.depth,pe,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Ce,_e.width,_e.height,ee.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,ee.depth,pe,Re,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,Ce,_e.width,_e.height,ee.depth,0,pe,Re,_e.data)}else{Oe&&it&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,qe[0].width,qe[0].height);for(let X=0,$=qe.length;X<$;X++)_e=qe[X],x.format!==ln?pe!==null?Oe?N&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,_e.width,_e.height,pe,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,X,Ce,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,_e.width,_e.height,pe,Re,_e.data):t.texImage2D(s.TEXTURE_2D,X,Ce,_e.width,_e.height,0,pe,Re,_e.data)}else if(x.isDataArrayTexture)if(Oe){if(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,Ce,ee.width,ee.height,ee.depth),N)if(x.layerUpdates.size>0){const X=oh(ee.width,ee.height,x.format,x.type);for(const $ of x.layerUpdates){const ce=ee.data.subarray($*X/ee.data.BYTES_PER_ELEMENT,($+1)*X/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,pe,Re,ce)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,Re,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,pe,Re,ee.data);else if(x.isData3DTexture)Oe?(it&&t.texStorage3D(s.TEXTURE_3D,ie,Ce,ee.width,ee.height,ee.depth),N&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,Re,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,pe,Re,ee.data);else if(x.isFramebufferTexture){if(it)if(Oe)t.texStorage2D(s.TEXTURE_2D,ie,Ce,ee.width,ee.height);else{let X=ee.width,$=ee.height;for(let ce=0;ce<ie;ce++)t.texImage2D(s.TEXTURE_2D,ce,Ce,X,$,0,pe,Re,null),X>>=1,$>>=1}}else if(qe.length>0){if(Oe&&it){const X=ye(qe[0]);t.texStorage2D(s.TEXTURE_2D,ie,Ce,X.width,X.height)}for(let X=0,$=qe.length;X<$;X++)_e=qe[X],Oe?N&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,pe,Re,_e):t.texImage2D(s.TEXTURE_2D,X,Ce,pe,Re,_e);x.generateMipmaps=!1}else if(Oe){if(it){const X=ye(ee);t.texStorage2D(s.TEXTURE_2D,ie,Ce,X.width,X.height)}N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,Re,ee)}else t.texImage2D(s.TEXTURE_2D,0,Ce,pe,Re,ee);m(x)&&f(K),xe.__version=Z.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Q(R,x,B){if(x.image.length!==6)return;const K=Xe(R,x),J=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+B);const Z=n.get(J);if(J.version!==Z.__version||K===!0){t.activeTexture(s.TEXTURE0+B);const xe=$e.getPrimaries($e.workingColorSpace),oe=x.colorSpace===ci?null:$e.getPrimaries(x.colorSpace),fe=x.colorSpace===ci||xe===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ke=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!Ke&&!ee?pe[$]=g(x.image[$],!0,i.maxCubemapSize):pe[$]=ee?x.image[$].image:x.image[$],pe[$]=at(x,pe[$]);const Re=pe[0],Ce=r.convert(x.format,x.colorSpace),_e=r.convert(x.type),qe=A(x.internalFormat,Ce,_e,x.colorSpace),Oe=x.isVideoTexture!==!0,it=Z.__version===void 0||K===!0,N=J.dataReady;let ie=C(x,Re);Pe(s.TEXTURE_CUBE_MAP,x);let X;if(Ke){Oe&&it&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,qe,Re.width,Re.height);for(let $=0;$<6;$++){X=pe[$].mipmaps;for(let ce=0;ce<X.length;ce++){const le=X[ce];x.format!==ln?Ce!==null?Oe?N&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,le.width,le.height,Ce,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,qe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,le.width,le.height,Ce,_e,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,qe,le.width,le.height,0,Ce,_e,le.data)}}}else{if(X=x.mipmaps,Oe&&it){X.length>0&&ie++;const $=ye(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,qe,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Oe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,Ce,_e,pe[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qe,pe[$].width,pe[$].height,0,Ce,_e,pe[$].data);for(let ce=0;ce<X.length;ce++){const ae=X[ce].image[$].image;Oe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,ae.width,ae.height,Ce,_e,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,qe,ae.width,ae.height,0,Ce,_e,ae.data)}}else{Oe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,_e,pe[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qe,Ce,_e,pe[$]);for(let ce=0;ce<X.length;ce++){const le=X[ce];Oe?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Ce,_e,le.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,qe,Ce,_e,le.image[$])}}}m(x)&&f(s.TEXTURE_CUBE_MAP),Z.__version=J.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Se(R,x,B,K,J,Z){const xe=r.convert(B.format,B.colorSpace),oe=r.convert(B.type),fe=A(B.internalFormat,xe,oe,B.colorSpace),Ke=n.get(x),ee=n.get(B);if(ee.__renderTarget=x,!Ke.__hasExternalTextures){const pe=Math.max(1,x.width>>Z),Re=Math.max(1,x.height>>Z);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,fe,pe,Re,x.depth,0,xe,oe,null):t.texImage2D(J,Z,fe,pe,Re,0,xe,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Ge(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,ee.__webglTexture,0,Ve(x)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,ee.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(R,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,R),x.depthBuffer){const K=x.depthTexture,J=K&&K.isDepthTexture?K.type:null,Z=S(x.stencilBuffer,J),xe=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=Ve(x);Ge(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,Z,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,Z,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Z,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,R)}else{const K=x.textures;for(let J=0;J<K.length;J++){const Z=K[J],xe=r.convert(Z.format,Z.colorSpace),oe=r.convert(Z.type),fe=A(Z.internalFormat,xe,oe,Z.colorSpace),Ke=Ve(x);B&&Ge(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,fe,x.width,x.height):Ge(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,fe,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,fe,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const J=K.__webglTexture,Z=Ve(x);if(x.depthTexture.format===ps)Ge(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(x.depthTexture.format===ys)Ge(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const x=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=K}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ie(x.__webglFramebuffer,R)}else if(B){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=s.createRenderbuffer(),re(x.__webglDepthbuffer[K],R,!1);else{const J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),re(x.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(R,x,B){const K=n.get(R);x!==void 0&&Se(K.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ne(R)}function ot(R){const x=R.texture,B=n.get(R),K=n.get(x);R.addEventListener("dispose",b);const J=R.textures,Z=R.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=x.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let fe=0;fe<x.mipmaps.length;fe++)B.__webglFramebuffer[oe][fe]=s.createFramebuffer()}else B.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)B.__webglFramebuffer[oe]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(xe)for(let oe=0,fe=J.length;oe<fe;oe++){const Ke=n.get(J[oe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Ge(R)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const fe=J[oe];B.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const Ke=r.convert(fe.format,fe.colorSpace),ee=r.convert(fe.type),pe=A(fe.internalFormat,Ke,ee,fe.colorSpace,R.isXRRenderTarget===!0),Re=Ve(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,pe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),re(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)Se(B.__webglFramebuffer[oe][fe],R,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else Se(B.__webglFramebuffer[oe],R,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(x)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,fe=J.length;oe<fe;oe++){const Ke=J[oe],ee=n.get(Ke);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),Pe(s.TEXTURE_2D,Ke),Se(B.__webglFramebuffer,R,Ke,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),m(Ke)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),Pe(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)Se(B.__webglFramebuffer[fe],R,x,s.COLOR_ATTACHMENT0,oe,fe);else Se(B.__webglFramebuffer,R,x,s.COLOR_ATTACHMENT0,oe,0);m(x)&&f(oe),t.unbindTexture()}R.depthBuffer&&Ne(R)}function je(R){const x=R.textures;for(let B=0,K=x.length;B<K;B++){const J=x[B];if(m(J)){const Z=T(R),xe=n.get(J).__webglTexture;t.bindTexture(Z,xe),f(Z),t.unbindTexture()}}}const pt=[],O=[];function It(R){if(R.samples>0){if(Ge(R)===!1){const x=R.textures,B=R.width,K=R.height;let J=s.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(R),oe=x.length>1;if(oe)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const Ke=n.get(x[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,J,s.NEAREST),c===!0&&(pt.length=0,O.length=0,pt.push(s.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(pt.push(Z),O.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const Ke=n.get(x[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Ve(R){return Math.min(i.maxSamples,R.samples)}function Ge(R){const x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function be(R){const x=o.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function at(R,x){const B=R.colorSpace,K=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Vt&&B!==ci&&($e.getTransfer(B)===ct?(K!==ln||J!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=Be,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ge}function f0(s,e){function t(n,i=ci){let r;const o=$e.getTransfer(i);if(n===jn)return s.UNSIGNED_BYTE;if(n===Rc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return s.BYTE;if(n===au)return s.SHORT;if(n===ur)return s.UNSIGNED_SHORT;if(n===bc)return s.INT;if(n===Oi)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===Sr)return s.HALF_FLOAT;if(n===lu)return s.ALPHA;if(n===hu)return s.RGB;if(n===ln)return s.RGBA;if(n===uu)return s.LUMINANCE;if(n===du)return s.LUMINANCE_ALPHA;if(n===ps)return s.DEPTH_COMPONENT;if(n===ys)return s.DEPTH_STENCIL;if(n===Ic)return s.RED;if(n===Cc)return s.RED_INTEGER;if(n===fu)return s.RG;if(n===Lc)return s.RG_INTEGER;if(n===Pc)return s.RGBA_INTEGER;if(n===lo||n===ho||n===uo||n===fo)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ua||n===Fa||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Ga||n===za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Ga)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ka||n===ja||n===$a||n===Ja||n===Qa||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===nc||n===ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pu||n===sc||n===rc||n===oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class p0 extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lt extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m0={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g0=`
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

}`;class S0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Tt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:_0,fragmentShader:g0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x0 extends Ps{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,_=null;const g=new S0,m=t.getContextAttributes();let f=null,T=null;const A=[],S=[],C=new Fe;let w=null;const b=new Gt;b.viewport=new Qe;const I=new Gt;I.viewport=new Qe;const M=[b,I],E=new p0;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Q=A[k];return Q===void 0&&(Q=new ca,A[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=A[k];return Q===void 0&&(Q=new ca,A[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=A[k];return Q===void 0&&(Q=new ca,A[k]=Q),Q.getHandSpace()};function F(k){const Q=S.indexOf(k.inputSource);if(Q===-1)return;const Se=A[Q];Se!==void 0&&(Se.update(k.inputSource,k.frame,l||o),Se.dispatchEvent({type:k.type,data:k.inputSource}))}function q(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",Y);for(let k=0;k<A.length;k++){const Q=S[k];Q!==null&&(S[k]=null,A[k].disconnect(Q))}L=null,H=null,g.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,T=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",q),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Ui(p.framebufferWidth,p.framebufferHeight,{format:ln,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,Se=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?ys:ps,Se=m.stencil?vs:Oi);const Ie={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Ui(d.textureWidth,d.textureHeight,{format:ln,type:jn,depthTexture:new Iu(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(k){for(let Q=0;Q<k.removed.length;Q++){const Se=k.removed[Q],re=S.indexOf(Se);re>=0&&(S[re]=null,A[re].disconnect(Se))}for(let Q=0;Q<k.added.length;Q++){const Se=k.added[Q];let re=S.indexOf(Se);if(re===-1){for(let Ne=0;Ne<A.length;Ne++)if(Ne>=S.length){S.push(Se),re=Ne;break}else if(S[Ne]===null){S[Ne]=Se,re=Ne;break}if(re===-1)break}const Ie=A[re];Ie&&Ie.connect(Se)}}const W=new P,j=new P;function V(k,Q,Se){W.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(Se.matrixWorld);const re=W.distanceTo(j),Ie=Q.projectionMatrix.elements,Ne=Se.projectionMatrix.elements,Be=Ie[14]/(Ie[10]-1),ot=Ie[14]/(Ie[10]+1),je=(Ie[9]+1)/Ie[5],pt=(Ie[9]-1)/Ie[5],O=(Ie[8]-1)/Ie[0],It=(Ne[8]+1)/Ne[0],Ve=Be*O,Ge=Be*It,be=re/(-O+It),at=be*-O;if(Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(at),k.translateZ(be),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Ie[10]===-1)k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ye=Be+be,R=ot+be,x=Ve-at,B=Ge+(re-at),K=je*ot/R*ye,J=pt*ot/R*ye;k.projectionMatrix.makePerspective(x,B,K,J,ye,R),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ne(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let Q=k.near,Se=k.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),E.near=I.near=b.near=Q,E.far=I.far=b.far=Se,(L!==E.near||H!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,H=E.far),b.layers.mask=k.layers.mask|2,I.layers.mask=k.layers.mask|4,E.layers.mask=b.layers.mask|I.layers.mask;const re=k.parent,Ie=E.cameras;ne(E,re);for(let Ne=0;Ne<Ie.length;Ne++)ne(Ie[Ne],re);Ie.length===2?V(E,b,I):E.projectionMatrix.copy(b.projectionMatrix),ue(k,E,re)};function ue(k,Q,Se){Se===null?k.matrix.copy(Q.matrixWorld):(k.matrix.copy(Se.matrixWorld),k.matrix.invert(),k.matrix.multiply(Q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=bs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(E)};let me=null;function Pe(k,Q){if(h=Q.getViewerPose(l||o),_=Q,h!==null){const Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let re=!1;Se.length!==E.cameras.length&&(E.cameras.length=0,re=!0);for(let Ne=0;Ne<Se.length;Ne++){const Be=Se[Ne];let ot=null;if(p!==null)ot=p.getViewport(Be);else{const pt=u.getViewSubImage(d,Be);ot=pt.viewport,Ne===0&&(e.setRenderTargetTextures(T,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(T))}let je=M[Ne];je===void 0&&(je=new Gt,je.layers.enable(Ne),je.viewport=new Qe,M[Ne]=je),je.matrix.fromArray(Be.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Be.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ot.x,ot.y,ot.width,ot.height),Ne===0&&(E.matrix.copy(je.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),re===!0&&E.cameras.push(je)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ne=u.getDepthInformation(Se[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(e,Ne,i.renderState)}}for(let Se=0;Se<A.length;Se++){const re=S[Se],Ie=A[Se];re!==null&&Ie!==void 0&&Ie.update(re,Q,l||o)}me&&me(k,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Xe=new wu;Xe.setAnimationLoop(Pe),this.setAnimationLoop=function(k){me=k},this.dispose=function(){}}}const Ei=new bn,E0=new He;function M0(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,yu(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,T,A,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,A):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),A=T.envMap,S=T.envMapRotation;A&&(m.envMap.value=A,Ei.copy(S),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(E0.makeRotationFromEuler(Ei)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function T0(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,A){const S=A.program;n.uniformBlockBinding(T,S)}function l(T,A){let S=i[T.id];S===void 0&&(_(T),S=h(T),i[T.id]=S,T.addEventListener("dispose",m));const C=A.program;n.updateUBOMapping(T,C);const w=e.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function h(T){const A=u();T.__bindingPointIndex=A;const S=s.createBuffer(),C=T.__size,w=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,S),S}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const A=i[T.id],S=T.uniforms,C=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let w=0,b=S.length;w<b;w++){const I=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,E=I.length;M<E;M++){const L=I[M];if(p(L,w,M,C)===!0){const H=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let Y=0;Y<F.length;Y++){const W=F[Y],j=g(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,H+q,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,A,S,C){const w=T.value,b=A+"_"+S;if(C[b]===void 0)return typeof w=="number"||typeof w=="boolean"?C[b]=w:C[b]=w.clone(),!0;{const I=C[b];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return C[b]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function _(T){const A=T.uniforms;let S=0;const C=16;for(let b=0,I=A.length;b<I;b++){const M=Array.isArray(A[b])?A[b]:[A[b]];for(let E=0,L=M.length;E<L;E++){const H=M[E],F=Array.isArray(H.value)?H.value:[H.value];for(let q=0,Y=F.length;q<Y;q++){const W=F[q],j=g(W),V=S%C,ne=V%j.boundary,ue=V+ne;S+=ne,ue!==0&&C-ue<j.storage&&(S+=C-ue),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=j.storage}}}const w=S%C;return w>0&&(S+=C-w),T.__size=S,T.__cache={},this}function g(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const S=o.indexOf(A.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function f(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class A0{constructor(e={}){const{canvas:t=uf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const T=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=di,this.toneMappingExposure=1;const S=this;let C=!1,w=0,b=0,I=null,M=-1,E=null;const L=new Qe,H=new Qe;let F=null;const q=new Le(0);let Y=0,W=t.width,j=t.height,V=1,ne=null,ue=null;const me=new Qe(0,0,W,j),Pe=new Qe(0,0,W,j);let Xe=!1;const k=new Dc;let Q=!1,Se=!1;const re=new He,Ie=new He,Ne=new P,Be=new Qe,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function pt(){return I===null?V:1}let O=n;function It(v,D){return t.getContext(v,D)}try{const v={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yc}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),O===null){const D="webgl2";if(O=It(D,v),O===null)throw It(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ve,Ge,be,at,ye,R,x,B,K,J,Z,xe,oe,fe,Ke,ee,pe,Re,Ce,_e,qe,Oe,it,N;function ie(){Ve=new w_(O),Ve.init(),Oe=new f0(O,Ve),Ge=new T_(O,Ve,e,Oe),be=new h0(O,Ve),Ge.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),at=new L_(O),ye=new Kg,R=new d0(O,Ve,be,ye,Ge,Oe,at),x=new v_(S),B=new R_(S),K=new Bf(O),it=new E_(O,K),J=new I_(O,K,at,it),Z=new N_(O,J,K,at),Ce=new P_(O,Ge,R),ee=new A_(ye),xe=new Zg(S,x,B,Ve,Ge,it,ee),oe=new M0(S,ye),fe=new $g,Ke=new i0(Ve),Re=new x_(S,x,B,be,Z,p,c),pe=new c0(S,Z,Ge),N=new T0(O,at,Ge,be),_e=new M_(O,Ve,at),qe=new C_(O,Ve,at),at.programs=xe.programs,S.capabilities=Ge,S.extensions=Ve,S.properties=ye,S.renderLists=fe,S.shadowMap=pe,S.state=be,S.info=at}ie();const X=new x0(S,O);this.xr=X,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const v=Ve.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ve.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(W,j,!1))},this.getSize=function(v){return v.set(W,j)},this.setSize=function(v,D,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,j=D,t.width=Math.floor(v*V),t.height=Math.floor(D*V),G===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(W*V,j*V).floor()},this.setDrawingBufferSize=function(v,D,G){W=v,j=D,V=G,t.width=Math.floor(v*G),t.height=Math.floor(D*G),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(me)},this.setViewport=function(v,D,G,z){v.isVector4?me.set(v.x,v.y,v.z,v.w):me.set(v,D,G,z),be.viewport(L.copy(me).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Pe)},this.setScissor=function(v,D,G,z){v.isVector4?Pe.set(v.x,v.y,v.z,v.w):Pe.set(v,D,G,z),be.scissor(H.copy(Pe).multiplyScalar(V).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(v){be.setScissorTest(Xe=v)},this.setOpaqueSort=function(v){ne=v},this.setTransparentSort=function(v){ue=v},this.getClearColor=function(v){return v.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(v=!0,D=!0,G=!0){let z=0;if(v){let U=!1;if(I!==null){const te=I.texture.format;U=te===Pc||te===Lc||te===Cc}if(U){const te=I.texture.type,de=te===jn||te===Oi||te===ur||te===vs||te===Rc||te===wc,Ee=Re.getClearColor(),Me=Re.getClearAlpha(),De=Ee.r,ze=Ee.g,Te=Ee.b;de?(_[0]=De,_[1]=ze,_[2]=Te,_[3]=Me,O.clearBufferuiv(O.COLOR,0,_)):(g[0]=De,g[1]=ze,g[2]=Te,g[3]=Me,O.clearBufferiv(O.COLOR,0,g))}else z|=O.COLOR_BUFFER_BIT}D&&(z|=O.DEPTH_BUFFER_BIT),G&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),Ke.dispose(),ye.dispose(),x.dispose(),B.dispose(),Z.dispose(),it.dispose(),N.dispose(),xe.dispose(),X.dispose(),X.removeEventListener("sessionstart",vr),X.removeEventListener("sessionend",Fi),Tn.stop()};function $(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=at.autoReset,D=pe.enabled,G=pe.autoUpdate,z=pe.needsUpdate,U=pe.type;ie(),at.autoReset=v,pe.enabled=D,pe.autoUpdate=G,pe.needsUpdate=z,pe.type=U}function le(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ae(v){const D=v.target;D.removeEventListener("dispose",ae),we(D)}function we(v){Ye(v),ye.remove(v)}function Ye(v){const D=ye.get(v).programs;D!==void 0&&(D.forEach(function(G){xe.releaseProgram(G)}),v.isShaderMaterial&&xe.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,G,z,U,te){D===null&&(D=ot);const de=U.isMesh&&U.matrixWorld.determinant()<0,Ee=sd(v,D,G,z,U);be.setMaterial(z,de);let Me=G.index,De=1;if(z.wireframe===!0){if(Me=J.getWireframeAttribute(G),Me===void 0)return;De=2}const ze=G.drawRange,Te=G.attributes.position;let Je=ze.start*De,ht=(ze.start+ze.count)*De;te!==null&&(Je=Math.max(Je,te.start*De),ht=Math.min(ht,(te.start+te.count)*De)),Me!==null?(Je=Math.max(Je,0),ht=Math.min(ht,Me.count)):Te!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,Te.count));const dt=ht-Je;if(dt<0||dt===1/0)return;it.setup(U,z,Ee,G,Me);let Xt,et=_e;if(Me!==null&&(Xt=K.get(Me),et=qe,et.setIndex(Xt)),U.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*pt()),et.setMode(O.LINES)):et.setMode(O.TRIANGLES);else if(U.isLine){let ve=z.linewidth;ve===void 0&&(ve=1),be.setLineWidth(ve*pt()),U.isLineSegments?et.setMode(O.LINES):U.isLineLoop?et.setMode(O.LINE_LOOP):et.setMode(O.LINE_STRIP)}else U.isPoints?et.setMode(O.POINTS):U.isSprite&&et.setMode(O.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ve=U._multiDrawStarts,Pn=U._multiDrawCounts,tt=U._multiDrawCount,dn=Me?K.get(Me).bytesPerElement:1,Hi=ye.get(z).currentProgram.getUniforms();for(let Kt=0;Kt<tt;Kt++)Hi.setValue(O,"_gl_DrawID",Kt),et.render(ve[Kt]/dn,Pn[Kt])}else if(U.isInstancedMesh)et.renderInstances(Je,dt,U.count);else if(G.isInstancedBufferGeometry){const ve=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pn=Math.min(G.instanceCount,ve);et.renderInstances(Je,dt,Pn)}else et.render(Je,dt)};function Ue(v,D,G){v.transparent===!0&&v.side===zt&&v.forceSinglePass===!1?(v.side=Zt,v.needsUpdate=!0,br(v,D,G),v.side=Kn,v.needsUpdate=!0,br(v,D,G),v.side=zt):br(v,D,G)}this.compile=function(v,D,G=null){G===null&&(G=v),f=Ke.get(G),f.init(D),A.push(f),G.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),v!==G&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const Ee=te[de];Ue(Ee,G,U),z.add(Ee)}else Ue(te,G,U),z.add(te)}),A.pop(),f=null,z},this.compileAsync=function(v,D,G=null){const z=this.compile(v,D,G);return new Promise(U=>{function te(){if(z.forEach(function(de){ye.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){U(v);return}setTimeout(te,10)}Ve.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let yt=null;function tn(v){yt&&yt(v)}function vr(){Tn.stop()}function Fi(){Tn.start()}const Tn=new wu;Tn.setAnimationLoop(tn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(v){yt=v,X.setAnimationLoop(v),v===null?Tn.stop():Tn.start()},X.addEventListener("sessionstart",vr),X.addEventListener("sessionend",Fi),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,D,I),f=Ke.get(v,A.length),f.init(D),A.push(f),Ie.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),k.setFromProjectionMatrix(Ie),Se=this.localClippingEnabled,Q=ee.init(this.clippingPlanes,Se),m=fe.get(v,T.length),m.init(),T.push(m),X.enabled===!0&&X.isPresenting===!0){const te=S.xr.getDepthSensingMesh();te!==null&&Bi(te,D,-1/0,S.sortObjects)}Bi(v,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ne,ue),je=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,je&&Re.addToRenderList(m,v),this.info.render.frame++,Q===!0&&ee.beginShadows();const G=f.state.shadowsArray;pe.render(G,v,D),Q===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(f.setupLights(),D.isArrayCamera){const te=D.cameras;if(U.length>0)for(let de=0,Ee=te.length;de<Ee;de++){const Me=te[de];tl(z,U,v,Me)}je&&Re.render(v);for(let de=0,Ee=te.length;de<Ee;de++){const Me=te[de];el(m,v,Me,Me.viewport)}}else U.length>0&&tl(z,U,v,D),je&&Re.render(v),el(m,v,D);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(S,v,D),it.resetDefaultState(),M=-1,E=null,A.pop(),A.length>0?(f=A[A.length-1],Q===!0&&ee.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Bi(v,D,G,z){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||k.intersectsSprite(v)){z&&Be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ie);const de=Z.update(v),Ee=v.material;Ee.visible&&m.push(v,de,Ee,G,Be.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||k.intersectsObject(v))){const de=Z.update(v),Ee=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Be.copy(v.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Be.copy(de.boundingSphere.center)),Be.applyMatrix4(v.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ee)){const Me=de.groups;for(let De=0,ze=Me.length;De<ze;De++){const Te=Me[De],Je=Ee[Te.materialIndex];Je&&Je.visible&&m.push(v,de,Je,G,Be.z,Te)}}else Ee.visible&&m.push(v,de,Ee,G,Be.z,null)}}const te=v.children;for(let de=0,Ee=te.length;de<Ee;de++)Bi(te[de],D,G,z)}function el(v,D,G,z){const U=v.opaque,te=v.transmissive,de=v.transparent;f.setupLightsView(G),Q===!0&&ee.setGlobalState(S.clippingPlanes,G),z&&be.viewport(L.copy(z)),U.length>0&&yr(U,D,G),te.length>0&&yr(te,D,G),de.length>0&&yr(de,D,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function tl(v,D,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Ui(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Sr:jn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const te=f.state.transmissionRenderTarget[z.id],de=z.viewport||L;te.setSize(de.z,de.w);const Ee=S.getRenderTarget();S.setRenderTarget(te),S.getClearColor(q),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),je&&Re.render(G);const Me=S.toneMapping;S.toneMapping=di;const De=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),Q===!0&&ee.setGlobalState(S.clippingPlanes,z),yr(v,G,z),R.updateMultisampleRenderTarget(te),R.updateRenderTargetMipmap(te),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Te=0,Je=D.length;Te<Je;Te++){const ht=D[Te],dt=ht.object,Xt=ht.geometry,et=ht.material,ve=ht.group;if(et.side===zt&&dt.layers.test(z.layers)){const Pn=et.side;et.side=Zt,et.needsUpdate=!0,nl(dt,G,z,Xt,et,ve),et.side=Pn,et.needsUpdate=!0,ze=!0}}ze===!0&&(R.updateMultisampleRenderTarget(te),R.updateRenderTargetMipmap(te))}S.setRenderTarget(Ee),S.setClearColor(q,Y),De!==void 0&&(z.viewport=De),S.toneMapping=Me}function yr(v,D,G){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,te=v.length;U<te;U++){const de=v[U],Ee=de.object,Me=de.geometry,De=z===null?de.material:z,ze=de.group;Ee.layers.test(G.layers)&&nl(Ee,D,G,Me,De,ze)}}function nl(v,D,G,z,U,te){v.onBeforeRender(S,D,G,z,U,te),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(S,D,G,z,v,te),U.transparent===!0&&U.side===zt&&U.forceSinglePass===!1?(U.side=Zt,U.needsUpdate=!0,S.renderBufferDirect(G,D,z,U,v,te),U.side=Kn,U.needsUpdate=!0,S.renderBufferDirect(G,D,z,U,v,te),U.side=zt):S.renderBufferDirect(G,D,z,U,v,te),v.onAfterRender(S,D,G,z,U,te)}function br(v,D,G){D.isScene!==!0&&(D=ot);const z=ye.get(v),U=f.state.lights,te=f.state.shadowsArray,de=U.state.version,Ee=xe.getParameters(v,U.state,te,D,G),Me=xe.getProgramCacheKey(Ee);let De=z.programs;z.environment=v.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(v.isMeshStandardMaterial?B:x).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,De===void 0&&(v.addEventListener("dispose",ae),De=new Map,z.programs=De);let ze=De.get(Me);if(ze!==void 0){if(z.currentProgram===ze&&z.lightsStateVersion===de)return sl(v,Ee),ze}else Ee.uniforms=xe.getUniforms(v),v.onBeforeCompile(Ee,S),ze=xe.acquireProgram(Ee,Me),De.set(Me,ze),z.uniforms=Ee.uniforms;const Te=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=ee.uniform),sl(v,Ee),z.needsLights=od(v),z.lightsStateVersion=de,z.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=ze,z.uniformsList=null,ze}function il(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=mo.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function sl(v,D){const G=ye.get(v);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function sd(v,D,G,z,U){D.isScene!==!0&&(D=ot),R.resetTextureUnits();const te=D.fog,de=z.isMeshStandardMaterial?D.environment:null,Ee=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Vt,Me=(z.isMeshStandardMaterial?B:x).get(z.envMap||de),De=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let dt=di;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(dt=S.toneMapping);const Xt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=Xt!==void 0?Xt.length:0,ve=ye.get(z),Pn=f.state.lights;if(Q===!0&&(Se===!0||v!==E)){const nn=v===E&&z.id===M;ee.setState(z,v,nn)}let tt=!1;z.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Pn.state.version||ve.outputColorSpace!==Ee||U.isBatchedMesh&&ve.batching===!1||!U.isBatchedMesh&&ve.batching===!0||U.isBatchedMesh&&ve.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ve.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ve.instancing===!1||!U.isInstancedMesh&&ve.instancing===!0||U.isSkinnedMesh&&ve.skinning===!1||!U.isSkinnedMesh&&ve.skinning===!0||U.isInstancedMesh&&ve.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ve.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ve.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ve.instancingMorph===!1&&U.morphTexture!==null||ve.envMap!==Me||z.fog===!0&&ve.fog!==te||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==ee.numPlanes||ve.numIntersection!==ee.numIntersection)||ve.vertexAlphas!==De||ve.vertexTangents!==ze||ve.morphTargets!==Te||ve.morphNormals!==Je||ve.morphColors!==ht||ve.toneMapping!==dt||ve.morphTargetsCount!==et)&&(tt=!0):(tt=!0,ve.__version=z.version);let dn=ve.currentProgram;tt===!0&&(dn=br(z,D,U));let Hi=!1,Kt=!1,Hs=!1;const ft=dn.getUniforms(),An=ve.uniforms;if(be.useProgram(dn.program)&&(Hi=!0,Kt=!0,Hs=!0),z.id!==M&&(M=z.id,Kt=!0),Hi||E!==v){be.buffers.depth.getReversed()?(re.copy(v.projectionMatrix),ff(re),pf(re),ft.setValue(O,"projectionMatrix",re)):ft.setValue(O,"projectionMatrix",v.projectionMatrix),ft.setValue(O,"viewMatrix",v.matrixWorldInverse);const $n=ft.map.cameraPosition;$n!==void 0&&$n.setValue(O,Ne.setFromMatrixPosition(v.matrixWorld)),Ge.logarithmicDepthBuffer&&ft.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ft.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,Kt=!0,Hs=!0)}if(U.isSkinnedMesh){ft.setOptional(O,U,"bindMatrix"),ft.setOptional(O,U,"bindMatrixInverse");const nn=U.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),ft.setValue(O,"boneTexture",nn.boneTexture,R))}U.isBatchedMesh&&(ft.setOptional(O,U,"batchingTexture"),ft.setValue(O,"batchingTexture",U._matricesTexture,R),ft.setOptional(O,U,"batchingIdTexture"),ft.setValue(O,"batchingIdTexture",U._indirectTexture,R),ft.setOptional(O,U,"batchingColorTexture"),U._colorsTexture!==null&&ft.setValue(O,"batchingColorTexture",U._colorsTexture,R));const Gs=G.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&Ce.update(U,G,dn),(Kt||ve.receiveShadow!==U.receiveShadow)&&(ve.receiveShadow=U.receiveShadow,ft.setValue(O,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(An.envMap.value=Me,An.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(An.envMapIntensity.value=D.environmentIntensity),Kt&&(ft.setValue(O,"toneMappingExposure",S.toneMappingExposure),ve.needsLights&&rd(An,Hs),te&&z.fog===!0&&oe.refreshFogUniforms(An,te),oe.refreshMaterialUniforms(An,z,V,j,f.state.transmissionRenderTarget[v.id]),mo.upload(O,il(ve),An,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(mo.upload(O,il(ve),An,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ft.setValue(O,"center",U.center),ft.setValue(O,"modelViewMatrix",U.modelViewMatrix),ft.setValue(O,"normalMatrix",U.normalMatrix),ft.setValue(O,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const nn=z.uniformsGroups;for(let $n=0,Jn=nn.length;$n<Jn;$n++){const rl=nn[$n];N.update(rl,dn),N.bind(rl,dn)}}return dn}function rd(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function od(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,D,G){ye.get(v.texture).__webglTexture=D,ye.get(v.depthTexture).__webglTexture=G;const z=ye.get(v);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=G===void 0,z.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const G=ye.get(v);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,G=0){I=v,w=D,b=G;let z=!0,U=null,te=!1,de=!1;if(v){const Me=ye.get(v);if(Me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(O.FRAMEBUFFER,null),z=!1;else if(Me.__webglFramebuffer===void 0)R.setupRenderTarget(v);else if(Me.__hasExternalTextures)R.rebindTextures(v,ye.get(v.texture).__webglTexture,ye.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Te=v.depthTexture;if(Me.__boundDepthTexture!==Te){if(Te!==null&&ye.has(Te)&&(v.width!==Te.image.width||v.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(v)}}const De=v.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(de=!0);const ze=ye.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ze[D])?U=ze[D][G]:U=ze[D],te=!0):v.samples>0&&R.useMultisampledRTT(v)===!1?U=ye.get(v).__webglMultisampledFramebuffer:Array.isArray(ze)?U=ze[G]:U=ze,L.copy(v.viewport),H.copy(v.scissor),F=v.scissorTest}else L.copy(me).multiplyScalar(V).floor(),H.copy(Pe).multiplyScalar(V).floor(),F=Xe;if(be.bindFramebuffer(O.FRAMEBUFFER,U)&&z&&be.drawBuffers(v,U),be.viewport(L),be.scissor(H),be.setScissorTest(F),te){const Me=ye.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me.__webglTexture,G)}else if(de){const Me=ye.get(v.texture),De=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.__webglTexture,G||0,De)}M=-1},this.readRenderTargetPixels=function(v,D,G,z,U,te,de){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(Ee=Ee[de]),Ee){be.bindFramebuffer(O.FRAMEBUFFER,Ee);try{const Me=v.texture,De=Me.format,ze=Me.type;if(!Ge.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-z&&G>=0&&G<=v.height-U&&O.readPixels(D,G,z,U,Oe.convert(De),Oe.convert(ze),te)}finally{const Me=I!==null?ye.get(I).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(v,D,G,z,U,te,de){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ye.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(Ee=Ee[de]),Ee){const Me=v.texture,De=Me.format,ze=Me.type;if(!Ge.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-z&&G>=0&&G<=v.height-U){be.bindFramebuffer(O.FRAMEBUFFER,Ee);const Te=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Te),O.bufferData(O.PIXEL_PACK_BUFFER,te.byteLength,O.STREAM_READ),O.readPixels(D,G,z,U,Oe.convert(De),Oe.convert(ze),0);const Je=I!==null?ye.get(I).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Je);const ht=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await df(O,ht,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Te),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,te),O.deleteBuffer(Te),O.deleteSync(ht),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,G=0){v.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const z=Math.pow(2,-G),U=Math.floor(v.image.width*z),te=Math.floor(v.image.height*z),de=D!==null?D.x:0,Ee=D!==null?D.y:0;R.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,de,Ee,U,te),be.unbindTexture()},this.copyTextureToTexture=function(v,D,G=null,z=null,U=0){v.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,v=arguments[1],D=arguments[2],U=arguments[3]||0,G=null);let te,de,Ee,Me,De,ze,Te,Je,ht;const dt=v.isCompressedTexture?v.mipmaps[U]:v.image;G!==null?(te=G.max.x-G.min.x,de=G.max.y-G.min.y,Ee=G.isBox3?G.max.z-G.min.z:1,Me=G.min.x,De=G.min.y,ze=G.isBox3?G.min.z:0):(te=dt.width,de=dt.height,Ee=dt.depth||1,Me=0,De=0,ze=0),z!==null?(Te=z.x,Je=z.y,ht=z.z):(Te=0,Je=0,ht=0);const Xt=Oe.convert(D.format),et=Oe.convert(D.type);let ve;D.isData3DTexture?(R.setTexture3D(D,0),ve=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(R.setTexture2DArray(D,0),ve=O.TEXTURE_2D_ARRAY):(R.setTexture2D(D,0),ve=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);const Pn=O.getParameter(O.UNPACK_ROW_LENGTH),tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),dn=O.getParameter(O.UNPACK_SKIP_PIXELS),Hi=O.getParameter(O.UNPACK_SKIP_ROWS),Kt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,dt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Me),O.pixelStorei(O.UNPACK_SKIP_ROWS,De),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ze);const Hs=v.isDataArrayTexture||v.isData3DTexture,ft=D.isDataArrayTexture||D.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const An=ye.get(v),Gs=ye.get(D),nn=ye.get(An.__renderTarget),$n=ye.get(Gs.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,nn.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Jn=0;Jn<Ee;Jn++)Hs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.get(v).__webglTexture,U,ze+Jn),v.isDepthTexture?(ft&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.get(D).__webglTexture,U,ht+Jn),O.blitFramebuffer(Me,De,te,de,Te,Je,te,de,O.DEPTH_BUFFER_BIT,O.NEAREST)):ft?O.copyTexSubImage3D(ve,U,Te,Je,ht+Jn,Me,De,te,de):O.copyTexSubImage2D(ve,U,Te,Je,ht+Jn,Me,De,te,de);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ft?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(ve,U,Te,Je,ht,te,de,Ee,Xt,et,dt.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(ve,U,Te,Je,ht,te,de,Ee,Xt,dt.data):O.texSubImage3D(ve,U,Te,Je,ht,te,de,Ee,Xt,et,dt):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,U,Te,Je,te,de,Xt,et,dt.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,U,Te,Je,dt.width,dt.height,Xt,dt.data):O.texSubImage2D(O.TEXTURE_2D,U,Te,Je,te,de,Xt,et,dt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Pn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,dn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Hi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Kt),U===0&&D.generateMipmaps&&O.generateMipmap(ve),be.unbindTexture()},this.copyTextureToTexture3D=function(v,D,G=null,z=null,U=0){return v.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,z=arguments[1]||null,v=arguments[2],D=arguments[3],U=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,G,z,U)},this.initRenderTarget=function(v){ye.get(v).__webglFramebuffer===void 0&&R.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?R.setTextureCube(v,0):v.isData3DTexture?R.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?R.setTexture2DArray(v,0):R.setTexture2D(v,0),be.unbindTexture()},this.resetState=function(){w=0,b=0,I=null,be.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class Fc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new Fc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class v0 extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Du{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cc,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new P;class mr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hc extends un{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let es;const Xs=new P,ts=new P,ns=new P,is=new Fe,qs=new Fe,Ou=new He,Yr=new P,Ys=new P,Zr=new P,ah=new Fe,la=new Fe,ch=new Fe;class lh extends ut{constructor(e=new hc){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Du(t,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new mr(n,3,0,!1)),es.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=es,this.material=e,this.center=new Fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Ou.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-ns.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Kr(Yr.set(-.5,-.5,0),ns,o,ts,i,r),Kr(Ys.set(.5,-.5,0),ns,o,ts,i,r),Kr(Zr.set(.5,.5,0),ns,o,ts,i,r),ah.set(0,0),la.set(1,0),ch.set(1,1);let a=e.ray.intersectTriangle(Yr,Ys,Zr,!1,Xs);if(a===null&&(Kr(Ys.set(-.5,.5,0),ns,o,ts,i,r),la.set(0,1),a=e.ray.intersectTriangle(Yr,Zr,Ys,!1,Xs),a===null))return;const c=e.ray.origin.distanceTo(Xs);c<e.near||c>e.far||t.push({distance:c,point:Xs.clone(),uv:an.getInterpolation(Xs,Yr,Ys,Zr,ah,la,ch,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Kr(s,e,t,n,i,r){is.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(qs.x=r*is.x-i*is.y,qs.y=i*is.x+r*is.y):qs.copy(is),s.copy(e),s.x+=qs.x,s.y+=qs.y,s.applyMatrix4(Ou)}const hh=new P,uh=new Qe,dh=new Qe,y0=new P,fh=new He,jr=new P,ha=new wn,ph=new He,ua=new Po;class b0 extends Ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ll,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingBox.expandByPoint(jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingSphere.expandByPoint(jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(i),e.ray.intersectsSphere(ha)!==!1&&(ph.copy(i).invert(),ua.copy(e.ray).applyMatrix4(ph),!(this.boundingBox!==null&&ua.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ua)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ll?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Od?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;uh.fromBufferAttribute(i.attributes.skinIndex,e),dh.fromBufferAttribute(i.attributes.skinWeight,e),hh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=dh.getComponent(r);if(o!==0){const a=uh.getComponent(r);fh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(y0.copy(hh).applyMatrix4(fh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Uu extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fu extends Tt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=kt,h=kt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mh=new He,R0=new He;class Bc{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:R0;mh.multiplyMatrices(a,t[r]),mh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Bc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fu(t,e,e,ln,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Uu),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class vo extends mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new He,_h=new He,$r=[],gh=new Wt,w0=new He,Zs=new Ae,Ks=new wn;class Bu extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,w0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),gh.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(gh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),Ks.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),e.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ss),_h.multiplyMatrices(n,ss),Zs.matrixWorld=_h,Zs.raycast(e,$r);for(let o=0,a=$r.length;o<a;o++){const c=$r[o];c.instanceId=r,c.object=this,t.push(c)}$r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fu(new Float32Array(i*this.count),i,this.count,Ic,Sn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Hu extends un{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yo=new P,bo=new P,Sh=new He,js=new Po,Jr=new wn,da=new P,xh=new P;class Hc extends ut{constructor(e=new Mt,t=new Hu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)yo.fromBufferAttribute(t,i-1),bo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yo.distanceTo(bo);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;Sh.copy(i).invert(),js.copy(e.ray).applyMatrix4(Sh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=l){const f=h.getX(g),T=h.getX(g+1),A=Qr(this,e,js,c,f,T);A&&t.push(A)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(p),f=Qr(this,e,js,c,g,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=l){const f=Qr(this,e,js,c,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=Qr(this,e,js,c,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(yo.fromBufferAttribute(o,i),bo.fromBufferAttribute(o,r),t.distanceSqToSegment(yo,bo,da,xh)>n)return;da.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(da);if(!(c<e.near||c>e.far))return{distance:c,point:xh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Eh=new P,Mh=new P;class I0 extends Hc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Eh.fromBufferAttribute(t,i),Mh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Eh.distanceTo(Mh);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C0 extends Hc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ds extends un{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Th=new He,uc=new Po,eo=new wn,to=new P;class Os extends ut{constructor(e=new Mt,t=new Ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;Th.copy(i).invert(),uc.copy(e.ray).applyMatrix4(Th);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=d,g=p;_<g;_++){const m=l.getX(_);to.fromBufferAttribute(u,m),Ah(to,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,g=p;_<g;_++)to.fromBufferAttribute(u,_),Ah(to,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ah(s,e,t,n,i,r,o){const a=uc.distanceSqToPoint(s);if(a<t){const c=new P;uc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class vh extends Tt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn extends Mt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let _=0;const g=[],m=n/2;let f=0;T(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(p,2));function T(){const S=new P,C=new P;let w=0;const b=(t-e)/n;for(let I=0;I<=r;I++){const M=[],E=I/r,L=E*(t-e)+e;for(let H=0;H<=i;H++){const F=H/i,q=F*c+a,Y=Math.sin(q),W=Math.cos(q);C.x=L*Y,C.y=-E*n+m,C.z=L*W,u.push(C.x,C.y,C.z),S.set(Y,b,W).normalize(),d.push(S.x,S.y,S.z),p.push(F,1-E),M.push(_++)}g.push(M)}for(let I=0;I<i;I++)for(let M=0;M<r;M++){const E=g[M][I],L=g[M+1][I],H=g[M+1][I+1],F=g[M][I+1];(e>0||M!==0)&&(h.push(E,L,F),w+=3),(t>0||M!==r-1)&&(h.push(L,H,F),w+=3)}l.addGroup(f,w,0),f+=w}function A(S){const C=_,w=new Fe,b=new P;let I=0;const M=S===!0?e:t,E=S===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),_++;const L=_;for(let H=0;H<=i;H++){const q=H/i*c+a,Y=Math.cos(q),W=Math.sin(q);b.x=M*W,b.y=m*E,b.z=M*Y,u.push(b.x,b.y,b.z),d.push(0,E,0),w.x=Y*.5+.5,w.y=W*.5*E+.5,p.push(w.x,w.y),_++}for(let H=0;H<i;H++){const F=C+H,q=L+H;S===!0?h.push(q,q+1,F):h.push(q+1,q,F),I+=3}l.addGroup(f,I,S===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gc extends qn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Gc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zc extends Mt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,p=new P,_=new Fe;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let f=0;f<n;f++){const T=f+m,A=T,S=T+n+1,C=T+n+2,w=T+1;a.push(A,S,w),a.push(S,C,w)}}this.setIndex(a),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ro extends Mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,d=new P,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const T=[],A=f/n;let S=0;f===0&&o===0?S=.5/t:f===n&&c===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const w=C/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+A*a),u.y=e*Math.cos(o+A*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+A*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+S,1-A),T.push(l++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){const A=h[f][T+1],S=h[f][T],C=h[f+1][T],w=h[f+1][T+1];(f!==0||o>0)&&p.push(A,S,w),(f!==n-1||c<Math.PI)&&p.push(S,C,w)}this.setIndex(p),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kc extends Mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const g=_/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const g=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,f=(i+1)*(p-1)+_,T=(i+1)*p+_;o.push(g,m,T),o.push(m,f,T)}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class en extends un{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends en{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function no(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function L0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function P0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function yh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Gu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class xr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class N0 extends xr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hl,endingEnd:hl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ul:r=e,a=2*t-n;break;case dl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ul:o=e,c=2*n-t;break;case dl:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,T=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,A=(-1-p)*m+(1.5+p)*g+.5*_,S=p*m-p*g;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+T*o[l+C]+A*o[c+C]+S*o[u+C];return r}}class D0 extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class O0 extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=no(t,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:no(e.times,Array),values:no(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new O0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new D0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new N0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case Oo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return Oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&L0(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Oo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){const g=t[u+_];if(g!==t[d+_]||g!==t[p+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=fr;class Us extends Cn{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=dr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class zu extends Cn{}zu.prototype.ValueTypeName="color";class ws extends Cn{}ws.prototype.ValueTypeName="number";class U0 extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)fi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Is extends Cn{InterpolantFactoryMethodLinear(e){return new U0(this.times,this.values,this.getValueSize(),e)}}Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends Cn{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=dr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Cn{}Cs.prototype.ValueTypeName="vector";class F0{constructor(e="",t=-1,n=[],i=Ud){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=En(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(H0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=P0(c);c=yh(c,1,h),l=yh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ws(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,_,g){if(p.length!==0){const m=[],f=[];Gu(p,m,f,_),m.length!==0&&g.push(new u(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)p[d[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let T=0;T!==d[_].morphTargets.length;++T){const A=d[_];m.push(A.time),f.push(A.morphTarget===g?1:0)}i.push(new ws(".morphTargetInfluence["+g+"]",m,f))}c=p.length*o}else{const p=".bones["+t[u].name+"]";n(Cs,p+".position",d,"pos",i),n(Is,p+".quaternion",d,"rot",i),n(Cs,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function B0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return zu;case"quaternion":return Is;case"bool":case"boolean":return Us;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function H0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=B0(s.type);if(s.times===void 0){const t=[],n=[];Gu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const hi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class G0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const z0=new G0;class Bs{constructor(e){this.manager=e!==void 0?e:z0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class k0 extends Error{constructor(e,t){super(e),this.response=t}}class ku extends Bs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=hi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Bn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){T();function T(){u.read().then(({done:A,value:S})=>{if(A)f.close();else{g+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let w=0,b=h.length;w<b;w++){const I=h[w];I.onProgress&&I.onProgress(C)}f.enqueue(S),T()}},A=>{f.error(A)})}}});return new Response(m)}else throw new k0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{hi.add(e,l);const h=Bn[e];delete Bn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Bn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Bn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class V0 extends Bs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=pr("img");function c(){h(),hi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class W0 extends Bs{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,o=new V0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Er extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class X0 extends Er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const fa=new He,bh=new P,Rh=new P;class Vc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),Rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rh),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class q0 extends Vc{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Y0 extends Er{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new q0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wh=new He,$s=new P,pa=new P;class Z0 extends Vc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$s.setFromMatrixPosition(e.matrixWorld),n.position.copy($s),pa.copy(n.position),pa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pa),n.updateMatrixWorld(),i.makeTranslation(-$s.x,-$s.y,-$s.z),wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh)}}class K0 extends Er{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Z0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class j0 extends Vc{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vu extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new j0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $0 extends Er{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class J0 extends Bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return hi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),hi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});hi.add(e,c),r.manager.itemStart(e)}}class Q0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ih(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ih();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ih(){return performance.now()}const Wc="\\[\\]\\.:\\/",eS=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",tS="[^"+Wc.replace("\\.","")+"]",nS=/((?:WC+[\/:])*)/.source.replace("WC",Xc),iS=/(WCOD+)?/.source.replace("WCOD",tS),sS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),rS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),oS=new RegExp("^"+nS+iS+sS+rS+"$"),aS=["material","materials","bones","map"];class cS{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eS,"")}static parseTrackName(e){const t=oS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);aS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=cS;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);function vn(s){return`#${s.toString(16).padStart(6,"0")}`}function Qt(s,e){const t=s>>16&255,n=s>>8&255,i=s&255;return`rgba(${t},${n},${i},${e})`}const ge={NEON_PINK:14747136,NEON_BLUE:16638023,NEON_PURPLE:3568070,NEON_ORANGE:16746240,ROAD_DARK:6052962,TRAFFIC_BODY_COMPACT:2763314,TRAFFIC_BODY_TRUCK:1842212,TRAFFIC_BODY_RACING_BLUE:3568070,SKY:8308991,TAXI_BODY:15658994,TAXI_ROOF_LIGHT:53950,TAIL_LIGHT:12845056,HEADLIGHT:16775408,LANE_MARKING:16777215,UI_TEXT:16317180,UI_DIM:10265519,UI_BG_APP:1381662,UI_OUTLINE:0,DRAFT_BAR_TRACK:989734,SLIPSTREAM_WIND:53950,SLIPSTREAM_OUTLINE:14747136,TAXI_ROOF_DRAFT_AMBER:16755200,SLINGSHOT_TRAIL_LEFT:14747136,SLINGSHOT_TRAIL_RIGHT:14747136,FPS_TELEMETRY:2278750,HUD_SCORE_GLOW:14747136,SCREEN_FLASH_TINT:14747136,AMBIENT_LIGHT:16777215,DIRECTIONAL_LIGHT:16774630,HEMISPHERE_SKY:8898815,HEMISPHERE_GROUND:6974050,METALLIC_SILVER:13751771,CARBON_BLACK:1710622,NIGHT_NAVY:1981023,BRITISH_GREEN:36715,BORDEAUX:7019578,SAFETY_YELLOW:16638023},lS=[{red:ge.NEON_PINK,white:ge.TAXI_BODY,blue:ge.NEON_PURPLE},{red:ge.NEON_BLUE,white:ge.CARBON_BLACK,blue:ge.NEON_PINK},{red:ge.NEON_ORANGE,white:ge.UI_TEXT,blue:ge.NEON_PURPLE},{red:ge.NEON_PURPLE,white:ge.METALLIC_SILVER,blue:ge.NEON_ORANGE},{red:ge.TRAFFIC_BODY_COMPACT,white:ge.TAXI_BODY,blue:ge.NEON_BLUE},{red:ge.NEON_PINK,white:ge.TRAFFIC_BODY_COMPACT,blue:ge.NEON_BLUE},{red:ge.TRAFFIC_BODY_TRUCK,white:ge.UI_TEXT,blue:ge.NEON_PINK},{red:ge.NEON_BLUE,white:ge.NEON_PINK,blue:ge.NEON_PURPLE},{red:ge.NEON_ORANGE,white:ge.CARBON_BLACK,blue:ge.NEON_BLUE},{red:ge.NEON_PURPLE,white:ge.CARBON_BLACK,blue:ge.NEON_ORANGE},{red:ge.BRITISH_GREEN,white:ge.CARBON_BLACK,blue:ge.NEON_ORANGE},{red:ge.METALLIC_SILVER,white:ge.NIGHT_NAVY,blue:ge.NEON_PINK},{red:ge.NIGHT_NAVY,white:ge.UI_TEXT,blue:ge.NEON_BLUE},{red:ge.BORDEAUX,white:ge.TAXI_BODY,blue:ge.NEON_PURPLE},{red:ge.CARBON_BLACK,white:ge.SAFETY_YELLOW,blue:ge.NEON_PINK},{red:ge.NEON_PURPLE,white:ge.NEON_ORANGE,blue:ge.CARBON_BLACK},{red:ge.NEON_BLUE,white:ge.METALLIC_SILVER,blue:ge.BRITISH_GREEN},{red:ge.NEON_ORANGE,white:ge.BORDEAUX,blue:ge.NEON_BLUE},{red:ge.TAXI_BODY,white:ge.NIGHT_NAVY,blue:ge.NEON_PINK},{red:ge.TRAFFIC_BODY_RACING_BLUE,white:ge.UI_DIM,blue:ge.NEON_ORANGE}],y={GAME_WIDTH:390,GAME_HEIGHT:844,CAMERA_HEIGHT:3.5,CAMERA_DISTANCE:10.5,CAMERA_LOOK_AHEAD:7.5,CAMERA_LOOK_AT_Y:1,CAMERA_FRAMING_BOTTOM_PCT:.2,CAMERA_FRAMING_DISTANCE_GAIN:.65,CAMERA_ANGLE:-45,CAMERA_FOV_BASE:55,CAMERA_FOV_MAX:65,CAMERA_FOV_LERP:.02,CAMERA_SHAKE_INTENSITY:.03,CAMERA_SHAKE_DECAY:.9,LANE_COUNT:3,LANE_WIDTH:2.5,LANE_SWITCH_DURATION:150,ROAD_SEGMENT_LENGTH:20,ROAD_VISIBLE_SEGMENTS:8,ROAD_WIDTH:10,ROAD_SEGMENT_VISUAL_WIDTH:20,ROAD_SEGMENT_GLB:null,ROAD_SEGMENT_GLB_WIDTH:20,ROAD_SEGMENT_GLB_DEPTH:20,ROAD_ENVIRONMENTS:[["env1-1.glb","env1-2.glb"],["env2-1.glb","env2-2.glb"],["env3-1.glb","env3-2.glb"]],ROAD_ENV_SEGMENTS_PER_PHASE:20,ROAD_ENV_GLB_WIDTH:0,ROAD_ENV_GLB_DEPTH:0,ROAD_ASPHALT_TILE_WORLD:2.75,ROAD_LANE_DASH_LENGTH:2.5,ROAD_LANE_DASH_GAP:2,ROAD_LANE_MARKING_WIDTH:.12,ROAD_LANE_EDGE_INSET:.38,ROAD_LANE_MARKING_EMISSIVE:.18,FOG_NEAR:25,FOG_FAR:120,BASE_SCROLL_SPEED:.3,MAX_SCROLL_SPEED:.75,BASE_SPEED_BONUS_DECAY_PER_SECOND:.035,SLINGSHOT_SPEED_BURST:0,SLINGSHOT_BURST_DURATION:750,SLINGSHOT_BASE_SPEED_INCREMENT:.07,SLIPSTREAM_ZONE_WIDTH:2,SLIPSTREAM_ZONE_DEPTH:10,DRAFT_FILL_RATE:.05,DRAFT_BAR_WIDTH:1.55,DRAFT_BAR_DEPTH:.1,DRAFT_BAR_OFFSET_Y:.035,DRAFT_BAR_INSET_FROM_FRONT:.38,DRAFT_TAIL_BRIGHTNESS_MUL:4,SLIPSTREAM_WIND_PARTICLES_PER_VEHICLE:0,SLIPSTREAM_WIND_POINT_SIZE:.165,SLIPSTREAM_WIND_OPACITY:.5,SLIPSTREAM_WIND_COLOR:ge.SLIPSTREAM_WIND,SLIPSTREAM_WIND_Y:.52,SLIPSTREAM_WIND_Y_SPREAD:.38,SLIPSTREAM_WIND_DOWN_SPEED:6.5,SLIPSTREAM_WIND_TURBULENCE:1.1,SLIPSTREAM_WIND_X_INSET:.1,SLIPSTREAM_WIND_SIDE_STRIP_WIDTH:.24,SLIPSTREAM_ZONE_OUTLINE_ENABLED:!0,SLIPSTREAM_ZONE_OUTLINE_COLOR:ge.SLIPSTREAM_OUTLINE,SLIPSTREAM_ZONE_OUTLINE_Y:.05,SLIPSTREAM_ZONE_OUTLINE_THICKNESS:.06,SLIPSTREAM_ZONE_OUTLINE_GLOW_SCALE:2.15,SLIPSTREAM_ZONE_OUTLINE_OPACITY:.8,SLIPSTREAM_ZONE_OUTLINE_GLOW_OPACITY:.28,SLIPSTREAM_ZONE_OUTLINE_DASH_SPEED:8.5,SLIPSTREAM_ZONE_OUTLINE_DASHES_PER_SIDE:10,SLIPSTREAM_ZONE_OUTLINE_DASH_DUTY:.58,CHAIN_TIMEOUT:3e3,CHAIN_MILESTONES:[5,10,15,20],CHAIN_SCORE_BASE:50,TRAFFIC_PHASES:[{startTime:0,spawnRate:1400,lanes:[0,1,2],speedVariance:.1,laneChange:!0},{startTime:15e3,spawnRate:1e3,lanes:[0,1,2],speedVariance:.25,laneChange:!0},{startTime:45e3,spawnRate:700,lanes:[0,1,2],speedVariance:.4,laneChange:!0},{startTime:9e4,spawnRate:450,lanes:[0,1,2],speedVariance:.6,laneChange:!0}],VEHICLE_TYPES:1,VEHICLE_LANE_CHANGE_TRIGGER_AHEAD_Z:40,VEHICLE_LANE_CHANGE_CHANCE:.25,VEHICLE_LANE_CHANGE_TOTAL_MS:500,VEHICLE_LANE_CHANGE_SIGNAL_PORTION:.5,VEHICLE_LANE_CHANGE_SIGNAL_OFFSET_FRAC:.18,VEHICLE_TRAFFIC_FORWARD_SPEED:.15,VEHICLE_TRAFFIC_MIN_APPROACH:.02,VEHICLE_POOL_SIZE:20,TRAFFIC_SPAWN_AHEAD_Z:100,TRAFFIC_SPAWN_AHEAD_Z_JITTER:12,TRAFFIC_SPAWN_MIN_Z_BUFFER:6,TRAFFIC_HEADLIGHT_BEAM_NEAR_FRAC:.14,TRAFFIC_HEADLIGHT_BEAM_FAR_FRAC:.48,TRAFFIC_HEADLIGHT_BEAM_FAR_SOFT_FRAC:.62,TRAFFIC_HEADLIGHT_BEAM_DEPTH:2.35,TRAFFIC_HEADLIGHT_BEAM_SOFT_DEPTH:2.55,TRAFFIC_HEADLIGHT_BEAM_Y:.08,TRAFFIC_HEADLIGHT_BEAM_OPACITY:.18,TRAFFIC_HEADLIGHT_BEAM_SOFT_OPACITY:.088,TRAFFIC_HEADLIGHT_MATCH_MAX_DIST:12,FLOW_RAILS_ENABLED:!0,FLOW_RAILS_START_MS:1e4,FLOW_RAILS_GAP_SPAWNS:8,FLOW_RAILS_SPAWN_RATE_SCALE:.8,FLOW_RAILS_SPEED_VARIANCE_SCALE:.35,FLOW_RAILS_PATTERNS:[[1,0,1,2,1,0],[0,1,2,1,0,1],[1,2,1,0,1,2],[0,1,2,1,0,1],[2,1,0,1,2,1]],TAXI_BODY_ROLL:-5,TAXI_ROLL_DURATION:300,TAXI_WHEEL_TURN:5,TAXI_POSITION_Z:0,TAXI_INTRO_START_Z_OFFSET:-8,TAXI_INTRO_DURATION_MS:400,PLAYER_CAR_GLB:"playerCar.glb",PLAYER_CAR_Y_OFFSET:0,TAXI_DIMENSIONS:{width:2.1,height:1,length:4},TRAFFIC_MATERIAL_RED:"red",TRAFFIC_MATERIAL_WHITE:"white",TRAFFIC_MATERIAL_BLUE:"blue",TRAFFIC_DRAFT_TAIL_MATERIAL_NAME:"red",TRAFFIC_LIVERY_IGNORE_TEXTURES:!0,TRAFFIC_LIVERY_VARIANTS:lS,TAXI_WORLD_HUD_CHAIN_BELOW_DRAFT_GAP:.65,TAXI_WORLD_HUD_SCORE_BEHIND_Z:.55,TAXI_WORLD_HUD_SCORE_Y_FRAC:.52,TAXI_WORLD_HUD_CHAIN_SCALE_X:1.4,TAXI_WORLD_HUD_CHAIN_SCALE_Y:.55,TAXI_WORLD_HUD_SCORE_SCALE_X:2.8,TAXI_WORLD_HUD_SCORE_SCALE_Y:.75,TAXI_COLLISION_Z_HALF_SCALE:.9,TAXI_ROOF_LIGHT_DRAFT:ge.TAXI_ROOF_DRAFT_AMBER,TAXI_ROOF_LIGHT_M10_FLASH_MS:2e3,TAXI_ROOF_LIGHT_M10_PULSE_HZ:5,TAXI_ROOF_LIGHT_M20_STROBE_HZ:7,TAXI_ROOF_LIGHT_DRAFT_PULSE_SCALE:.007,DISTANCE_SCORE_RATE:1,DISTANCE_SCORE_INTERVAL:5,SCREEN_FLASH_DURATION:100,PERFECT_FLASH_DURATION_MS:280,PERFECT_MILESTONE_HOLD_MS:1200,CHAIN_POP_SCALE:1.3,CHAIN_POP_DURATION:200,AUDIO_ENABLED:!0,AUDIO_MASTER:.45,AUDIO_ENGINE_ENABLED:!0,AUDIO_ENGINE_GAIN:.28,AUDIO_ENGINE_GAIN_MIN_MIX:.45,AUDIO_ENGINE_HZ_MIN:140,AUDIO_ENGINE_HZ_MAX:420,AUDIO_ENGINE_FILTER_HZ:2800,AUDIO_ENGINE_BURST_HZ_ADD:60,AUDIO_ENGINE_BURST_GAIN_MUL:1.35,AUDIO_WIND_GAIN:.08,AUDIO_WIND_MIN_MIX:.55,AUDIO_WIND_FILTER_HZ:1200,AUDIO_WIND_NOISE_SEC:2,AUDIO_DRAFT_GAIN:.1,AUDIO_DRAFT_MIN_MIX:.22,AUDIO_DRAFT_HZ:288,AUDIO_LOOP_SMOOTH:10,AUDIO_SLINGSHOT_GAIN:.42,AUDIO_SLINGSHOT_DURATION:.2,AUDIO_SLINGSHOT_BP_HZ_START:420,AUDIO_SLINGSHOT_BP_HZ_END:2600,AUDIO_MILESTONE_GAIN:.22,AUDIO_CRASH_GAIN:.48,AUDIO_CRASH_DURATION:.38,AUDIO_CRASH_LP_HZ:420,AUDIO_TRAFFIC_ENABLED:!0,AUDIO_TRAFFIC_VOICES:6,AUDIO_TRAFFIC_MAX_GAIN:.1,AUDIO_TRAFFIC_MAX_DISTANCE:50,AUDIO_TRAFFIC_HZ_BASE:155,AUDIO_TRAFFIC_HZ_VARIATION:35,AUDIO_TRAFFIC_FILTER_HZ:2800,AUDIO_TRAFFIC_PAN_RANGE:3.5,AUDIO_TRAFFIC_DOPPLER_STRENGTH:.18,AUDIO_TRAFFIC_DOPPLER_REF_DIST:25,AUDIO_TRAFFIC_SMOOTH:8,AUDIO_MUSIC_ENABLED:!0,AUDIO_MUSIC_MASTER:3.5,AUDIO_MUSIC_BPM:110,AUDIO_MUSIC_LAYER_SMOOTH:8,AUDIO_MUSIC_PLAY_FADE_SMOOTH:28,AUDIO_BG_MUSIC_ENABLED:!1,AUDIO_BG_MUSIC_FILE:"thousandsuns.mp3",AUDIO_BG_MUSIC_VOLUME:0,AUDIO_MUSIC_MIX_INNER:1,AUDIO_MUSIC_BASS_HZ:65.41,AUDIO_MUSIC_BASS_GAIN:.22,AUDIO_MUSIC_PAD_ROOT_HZ:130.81,AUDIO_MUSIC_PAD_FIFTH_HZ:196,AUDIO_MUSIC_PAD_GAIN:.1,AUDIO_MUSIC_LAYER1_HZ:392,AUDIO_MUSIC_LAYER1_MAX:.1,AUDIO_MUSIC_LAYER2_HZ:440,AUDIO_MUSIC_LAYER2_MAX:.09,AUDIO_MUSIC_LAYER3_HZ:987.77,AUDIO_MUSIC_LAYER3_MAX:.08,AUDIO_MUSIC_LAYER4_BP_HZ:2400,AUDIO_MUSIC_LAYER4_MAX:.055,AUDIO_MUSIC_KICK_HZ:58,AUDIO_MUSIC_KICK_PEAK:.38,AUDIO_MUSIC_HAT_GAIN:.12,AUDIO_MUSIC_HAT_LAYER_MAX:.45,TONE_MAPPING_EXPOSURE:1.05,SPEED_LINES_COUNT:30,SPEED_LINES_BASE_ALPHA:.3,SPEED_LINES_MAX_ALPHA:.8,SLINGSHOT_TRAIL_STREAK_COUNT:4,SLINGSHOT_TRAIL_DURATION_MS:500,SLINGSHOT_TRAIL_LENGTH:2,SLINGSHOT_TRAIL_WIDTH:.14,SLINGSHOT_TRAIL_BOX_HEIGHT:.1,SLINGSHOT_TRAIL_SURFACE_Y:1.12,SLINGSHOT_TRAIL_BACK_OFFSET_Z:.85,SLINGSHOT_TRAIL_SCROLL_SCALE:1.05,SLIPSTREAM_ACTIVATE_BURST_WINDOW_SPAWN_PER_SEC:52,SLIPSTREAM_ACTIVATE_BURST_COUNT:56,SLIPSTREAM_ACTIVATE_BURST_POINT_SIZE:.14,SLIPSTREAM_ACTIVATE_BURST_OPACITY:.78,SLIPSTREAM_ACTIVATE_BURST_COLOR:ge.SLIPSTREAM_WIND,SLIPSTREAM_ACTIVATE_BURST_EMIT_Y_FRAC:.35,SLIPSTREAM_ACTIVATE_BURST_EMIT_Z_INSET:.02,SLIPSTREAM_ACTIVATE_BURST_SPREAD_X:.32,SLIPSTREAM_ACTIVATE_BURST_SPREAD_Y:.14,SLIPSTREAM_ACTIVATE_BURST_SPEED_MIN:24,SLIPSTREAM_ACTIVATE_BURST_SPEED_MAX:42,SLIPSTREAM_ACTIVATE_BURST_LATERAL_SCALE:.32,SLIPSTREAM_ACTIVATE_BURST_SCREEN_DOWN_Y:-.2,SLIPSTREAM_ACTIVATE_BURST_Y_JITTER:1.5,SLIPSTREAM_ACTIVATE_BURST_LIFE_MIN:.26,SLIPSTREAM_ACTIVATE_BURST_LIFE_MAX:.52,SLIPSTREAM_ACTIVATE_BURST_DRAG:.9,SLIPSTREAM_ACTIVATE_BURST_GRAVITY:2.2,PALETTE:ge,TOUCH_CENTER_DEAD_ZONE_PX:19,SWIPE_THRESHOLD:30,SWIPE_MAX_TIME:300,AMBIENT_LIGHT_INTENSITY:.55,DIRECTIONAL_LIGHT_INTENSITY:1.35,DIRECTIONAL_LIGHT_POSITION:[12,28,10],HEMISPHERE_LIGHT_INTENSITY:.65};class hS{constructor(){this._state="playing",this._callbacks=[]}get current(){return this._state}get isPlaying(){return this._state==="playing"}onChange(e){this._callbacks.push(e)}transition(e){this._state!==e&&(this._state=e,this._callbacks.forEach(t=>t(e)))}reset(){this._state="playing"}}function ma(s){return 1+2.70158*(s-1)**3+1.70158*(s-1)**2}class uS{constructor(e){this._laneIndex=1,this._fromLane=1,this._fromX=0,this._toLane=1,this._switching=!1,this._switchStartMs=0,this._rollSpringing=!1,this._springStartMs=0,this._springDir=1,this._enabled=!0,this._onSwitchCb=null,this.target=e,this._fromX=this.laneIndexToX(1),this.bindPointer(),this.bindKeyboard()}onSwitch(e){this._onSwitchCb=e}set enabled(e){this._enabled=e}get laneIndex(){return this._switching?this._toLane:this._laneIndex}reset(){this._laneIndex=1,this._fromLane=1,this._fromX=this.laneIndexToX(1),this._toLane=1,this._switching=!1,this._rollSpringing=!1}laneIndexToX(e){return(e-1)*y.LANE_WIDTH}getLaneX(e){if(!this._switching)return this.laneIndexToX(this._laneIndex);const t=Math.min(1,(e-this._switchStartMs)/y.LANE_SWITCH_DURATION),n=ma(t),i=this._fromX,r=this.laneIndexToX(this._toLane);return t>=1&&(this._springDir=this._toLane>this._fromLane?1:-1,this._rollSpringing=!0,this._springStartMs=e,this._switching=!1,this._laneIndex=this._toLane),i+(r-i)*n}getBodyRollRad(e){const t=Ch*y.TAXI_BODY_ROLL;if(this._switching){const n=Math.min(1,(e-this._switchStartMs)/y.LANE_SWITCH_DURATION);return(Math.sign(this._toLane-this._fromLane)||1)*t*Math.sin(n*Math.PI*.5)}if(this._rollSpringing){const n=(e-this._springStartMs)/y.TAXI_ROLL_DURATION;if(n>=1)return this._rollSpringing=!1,0;const i=Math.min(1,n),r=ma(i);return this._springDir*t*(1-r)}return 0}getWheelSteerRad(e){const t=Ch*y.TAXI_WHEEL_TURN;if(this._switching){const n=Math.min(1,(e-this._switchStartMs)/y.LANE_SWITCH_DURATION);return(Math.sign(this._toLane-this._fromLane)||1)*t*Math.sin(n*Math.PI*.5)}if(this._rollSpringing){const n=(e-this._springStartMs)/y.TAXI_ROLL_DURATION;if(n>=1)return this._rollSpringing=!1,0;const i=Math.min(1,n),r=ma(i);return this._springDir*t*(1-r)}return 0}laneIndexFromRoadU(e){return Math.max(0,Math.min(y.LANE_COUNT-1,Math.floor(e*y.LANE_COUNT)))}laneIndexFromRoadX(e){const t=this.laneIndexToX(0)-y.LANE_WIDTH*.5,n=y.LANE_COUNT*y.LANE_WIDTH,i=(e-t)/n;return this.laneIndexFromRoadU(i)}switchToLane(e){var o;if(!this._enabled)return;const t=Math.max(0,Math.min(y.LANE_COUNT-1,e)),n=performance.now(),i=this.getLaneX(n),r=this.laneIndexFromRoadX(i);t!==r&&(this._laneIndex=r,this._fromLane=r,this._fromX=i,this._toLane=t,this._switching=!0,this._switchStartMs=n,this._rollSpringing=!1,(o=this._onSwitchCb)==null||o.call(this))}onHalfScreenTap(e){if(!this._enabled)return;const t=this.target.getBoundingClientRect(),n=t.left+t.width*.5,i=e-n;if(Math.abs(i)<=y.TOUCH_CENTER_DEAD_ZONE_PX)return;const r=performance.now(),o=this.laneIndexFromRoadX(this.getLaneX(r));i<0?this.switchToLane(o+1):this.switchToLane(o-1)}bindPointer(){this.target.addEventListener("pointerdown",e=>{!this._enabled||e.button===2||this.onHalfScreenTap(e.clientX)})}bindKeyboard(){window.addEventListener("keydown",e=>{this._enabled&&(e.code==="ArrowLeft"||e.code==="KeyA"?(e.preventDefault(),this.switchToLane(this.laneIndexFromRoadX(this.getLaneX(performance.now()))+1)):(e.code==="ArrowRight"||e.code==="KeyD")&&(e.preventDefault(),this.switchToLane(this.laneIndexFromRoadX(this.getLaneX(performance.now()))-1)))})}}const Ch=Math.PI/180;function Lh(s,e){if(e===Fd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ac||e===mu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ac)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Wu extends Bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _S(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new bS(t)}),this.register(function(t){return new RS(t)}),this.register(function(t){return new wS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new ES(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new TS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new AS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new CS(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=hr.extractUrlBase(e);o=hr.resolveURL(l,this.path)}else o=hr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ku(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Xu){try{o[Ze.KHR_BINARY_GLTF]=new LS(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new WS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new pS;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new PS(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new NS;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new DS;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function dS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fS{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Vt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Vu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new K0(h),l.distance=u;break;case"spot":l=new Y0(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class pS{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return hn}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(i)}}class mS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class _S{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(a,a)}return Promise.all(r)}}class gS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class SS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class xS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Vt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ES{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class MS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],Vt),Promise.all(r)}}class TS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class AS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],Vt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}}class vS{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class yS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class bS{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class RS{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class wS{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class IS{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class CS{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==rn.TRIANGLES&&l.mode!==rn.TRIANGLE_STRIP&&l.mode!==rn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const _ of u){const g=new He,m=new P,f=new fi,T=new P(1,1,1),A=new Bu(_.geometry,_.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,S),c.SCALE&&T.fromBufferAttribute(c.SCALE,S),A.setMatrixAt(S,g.compose(m,f,T));for(const S in c)if(S==="_COLOR_0"){const C=c[S];A.instanceColor=new vo(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,c[S]);ut.prototype.copy.call(A,_),this.parser.assignFinalMaterial(A),p.push(A)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Xu="glTF",Js=12,Ph={JSON:1313821514,BIN:5130562};class LS{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Js,r=new DataView(e,Js);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Ph.JSON){const l=new Uint8Array(e,Js+o,a);this.content=n.decode(l)}else if(c===Ph.BIN){const l=Js+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class PS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=dc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=dc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=_s[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const _ in p.attributes){const g=p.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}u(p)},a,l,Vt,d)})})}}class NS{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class DS{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class qu extends xr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,_=e*l,g=_-l,m=-2*p+3*d,f=p-d,T=1-m,A=f-d+u;for(let S=0;S!==a;S++){const C=o[g+S+a],w=o[g+S+c]*h,b=o[_+S+a],I=o[_+S]*h;r[S]=T*C+A*w+m*b+f*I}return r}}const OS=new fi;class US extends qu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return OS.fromArray(r).normalize().toArray(r),r}}const rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},_s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nh={9728:kt,9729:wt,9984:ru,9985:co,9986:tr,9987:Vn},Dh={33071:li,33648:Mo,10497:As},_a={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},FS={CUBICSPLINE:void 0,LINEAR:fr,STEP:dr},ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function BS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new en({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),s.DefaultMaterial}function Mi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HS(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function GS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zS(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sa(t.attributes):e=s.indices+":"+Sa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Sa(s.targets[n]);return e}function Sa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function fc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const VS=new He;class WS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new W0(this.options.manager):this.textureLoader=new J0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ku(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Mi(r,a,i),zn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(hr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=_a[i.type],a=_s[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new mt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=_a[i.type],l=_s[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(p&&p!==u){const f=Math.floor(d/p),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let A=t.cache.get(T);A||(g=new l(a,f*p,i.count*p/h),A=new Du(g,p/h),t.cache.add(T,A)),m=new mr(A,c,d%p/h,_)}else a===null?g=new l(i.count*c):g=new l(a,d,i.count*c),m=new mt(g,c,_);if(i.sparse!==void 0){const f=_a.SCALAR,T=_s[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,C=new T(o[1],A,i.sparse.count*f),w=new l(o[2],S,i.sparse.count*c);a!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,I=C.length;b<I;b++){const M=C[b];if(m.setX(M,w[b*c]),c>=2&&m.setY(M,w[b*c+1]),c>=3&&m.setZ(M,w[b*c+2]),c>=4&&m.setW(M,w[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Nh[d.magFilter]||wt,h.minFilter=Nh[d.minFilter]||Vn,h.wrapS=Dh[d.wrapS]||As,h.wrapT=Dh[d.wrapT]||As,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==kt&&h.minFilter!==wt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Tt(g);m.needsUpdate=!0,d(m)}),t.load(hr.resolveURL(u,r.path),_,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),zn(u,o),u.userData.mimeType=o.mimeType||kS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ds,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Hu,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return en}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=i[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Vt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Et)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=zt);const h=r.alphaMode||ga.OPAQUE;if(h===ga.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ga.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==hn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Fe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==hn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==hn){const u=r.emissiveFactor;a.emissive=new Le().setRGB(u[0],u[1],u[2],Vt)}return r.emissiveTexture!==void 0&&o!==hn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),zn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Mi(i,u,r),u})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Oh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=zS(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Oh(new Mt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?BS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,_=h.length;p<_;p++){const g=h[p],m=o[p];let f;const T=l[p];if(m.mode===rn.TRIANGLES||m.mode===rn.TRIANGLE_STRIP||m.mode===rn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new b0(g,T):new Ae(g,T),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===rn.TRIANGLE_STRIP?f.geometry=Lh(f.geometry,mu):m.mode===rn.TRIANGLE_FAN&&(f.geometry=Lh(f.geometry,ac));else if(m.mode===rn.LINES)f=new I0(g,T);else if(m.mode===rn.LINE_STRIP)f=new Hc(g,T);else if(m.mode===rn.LINE_LOOP)f=new C0(g,T);else if(m.mode===rn.POINTS)f=new Os(g,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&GS(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),zn(f,r),m.extensions&&Mi(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,_=u.length;p<_;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Mi(i,u[0],r),u[0];const d=new lt;r.extensions&&Mi(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,_=u.length;p<_;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Xn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Oc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new He;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Bc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],_=i.samplers[p.sampler],g=p.target,m=g.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,T=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",T)),l.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],_=u[2],g=u[3],m=u[4],f=[];for(let T=0,A=d.length;T<A;T++){const S=d[T],C=p[T],w=_[T],b=g[T],I=m[T];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const M=n._createAnimationTracks(S,C,w,b,I);if(M)for(let E=0;E<M.length;E++)f.push(M[E])}return new F0(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,VS)});for(let p=0,_=u.length;p<_;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Uu:l.length>1?h=new lt:l.length===1?h=l[0]:h=new ut,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),zn(h,r),r.extensions&&Mi(n,h,r),r.matrix!==void 0){const u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new lt;n.name&&(r.name=i.createUniqueName(n.name)),zn(r,n),n.extensions&&Mi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof un||d instanceof Tt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];ri[r.path]===ri.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ri[r.path]){case ri.weights:l=ws;break;case ri.rotation:l=Is;break;case ri.position:case ri.scale:l=Cs;break;default:switch(n.itemSize){case 1:l=ws;break;case 2:case 3:default:l=Cs;break}break}const h=i.interpolation!==void 0?FS[i.interpolation]:fr,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const _=new l(c[d]+"."+ri[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=fc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Is?US:qu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function XS(s,e,t){const n=e.attributes,i=new Wt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const h=fc(_s[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const g=fc(_s[d.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new wn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Oh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=dc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return $e.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),zn(s,e),XS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?HS(s,e.targets,t):s})}function qS(s){const e=Math.sin(s*12.9898)*43758.5453123;return e-Math.floor(e)}function YS(s,e){s.updateMatrixWorld(!0);let t=!1;return s.traverse(n=>{if(!(n instanceof Ae)||!n.geometry)return;const i=n.geometry;i.boundingBox||i.computeBoundingBox();const r=i.boundingBox;if(!r)return;const o=r.clone();o.applyMatrix4(n.matrixWorld),t?e.union(o):(e.copy(o),t=!0)}),t}function ZS(s,e,t,n,i,r,o,a){const c=new lt,l=s.scene.clone(!0);c.add(l),l.updateMatrixWorld(!0);const h=new Wt;YS(l,h)||h.setFromObject(l);const u=new P;if(h.getSize(u),u.x<1e-4||u.z<1e-4)return console.warn(`RoadManager: ${r} GLB has very small bounds; skipping scale fit`),c;const d=u.x,p=u.z;if(d<1e-4||p<1e-4)return console.warn(`RoadManager: ${r} width/depth refs invalid; skipping scale fit`),c;const _=e/d,g=t/p,m=(_+g)*.5;l.scale.set(_,m,g),l.updateMatrixWorld(!0);const f=new Wt().setFromObject(l),T=new P;return f.getCenter(T),l.position.x-=T.x,l.position.z-=T.z,l.updateMatrixWorld(!0),c.name=r,c}function KS(s){return ZS(s,y.ROAD_SEGMENT_VISUAL_WIDTH,y.ROAD_SEGMENT_LENGTH,y.ROAD_ENV_GLB_WIDTH,y.ROAD_ENV_GLB_DEPTH,"RoadEnvGLB")}function jS(s){return`/slipstream-racing/elman-updates/${s}`}function $S(s){const e=y.ROAD_ENVIRONMENTS,t=y.ROAD_ENV_SEGMENTS_PER_PHASE;if(!e.length||t<=0)return null;const n=Math.floor(s/t)%e.length,i=e[n];if(!i.length)return null;const r=Math.floor(qS(s*7919+n*17)*i.length)%i.length;return i[r]??null}async function JS(s){const e=new Map,t=y.ROAD_ENVIRONMENTS;if(!t.length)return e;const n=new Set;for(const i of t)for(const r of i)n.add(r);return await Promise.all([...n].map(async i=>{try{const r=await s.loadAsync(jS(i));e.set(i,KS(r))}catch(r){console.warn(`RoadManager: failed to load environment GLB "${i}"`,r)}})),e}class qc{constructor(e,t){this.group=new lt,this.segments=[],this.recycleBehind=40,this.playerZ=e,this.group.name="RoadGroup",this.envTemplates=t.size>0?t:null,this.nextSegmentIndex=y.ROAD_VISIBLE_SEGMENTS,this.buildSegments()}static async create(e){const t=new Wu,n=await JS(t);return new qc(e,n)}makeEnvHolder(){if(!this.envTemplates)return null;const e=new lt;return e.name="RoadEnvHolder",e}applyEnvironmentToSegment(e){if(!e.envHolder||!this.envTemplates)return;for(;e.envHolder.children.length>0;)e.envHolder.remove(e.envHolder.children[0]);const t=$S(e.segmentIndex);if(!t)return;const n=this.envTemplates.get(t);if(!n)return;const i=n.clone(!0);i.traverse(r=>{r.isMesh&&(r.receiveShadow=!0)}),e.envHolder.add(i)}pushSegment(e,t,n){const i=this.makeEnvHolder();i&&e.add(i),this.group.add(e);const r={root:e,zCenter:t,segmentIndex:n,envHolder:i};i&&this.applyEnvironmentToSegment(r),this.segments.push(r)}buildSegments(){const e=y.ROAD_SEGMENT_LENGTH,t=y.ROAD_VISIBLE_SEGMENTS,n=this.playerZ-this.recycleBehind+e*.5;for(let i=0;i<t;i++){const r=new lt,o=n+i*e;r.position.z=o,this.pushSegment(r,o,i)}}reset(){const e=y.ROAD_SEGMENT_LENGTH,t=y.ROAD_VISIBLE_SEGMENTS,n=this.playerZ-this.recycleBehind+e*.5;this.nextSegmentIndex=t;for(let i=0;i<t;i++){const r=n+i*e,o=this.segments[i];o.zCenter=r,o.root.position.z=r,o.segmentIndex=i,this.applyEnvironmentToSegment(o)}}update(e){if(e<=0)return 0;const t=y.ROAD_SEGMENT_LENGTH;let n=-1/0,i=0;const r=this.playerZ-3;for(const o of this.segments){const a=o.zCenter;o.zCenter-=e,o.root.position.z=o.zCenter,o.zCenter>n&&(n=o.zCenter),a>=r&&o.zCenter<r&&i++}for(const o of this.segments)o.zCenter<this.playerZ-this.recycleBehind&&(o.zCenter=n+t,o.root.position.z=o.zCenter,n=o.zCenter,o.segmentIndex=this.nextSegmentIndex++,this.applyEnvironmentToSegment(o));return i}}function QS(s){return`/slipstream-racing/elman-updates/${s}`}let xa=null;function ex(){return xa||(xa=new Wu().loadAsync(QS(y.PLAYER_CAR_GLB))),xa}function tx(s){s.traverse(e=>{e instanceof Ae&&(Array.isArray(e.material)?e.material=e.material.map(t=>t.clone()):e.material=e.material.clone())})}function nx(s,e,t){s.updateMatrixWorld(!0);const n=new Wt().setFromObject(s),i=new P;if(n.getSize(i),i.x<1e-4||i.y<1e-4||i.z<1e-4)return;const r=e.width/i.x,o=e.height/i.y,a=e.length/i.z,c=Math.min(r,o,a);s.scale.setScalar(c),s.updateMatrixWorld(!0);const l=new Wt().setFromObject(s),h=new P;l.getCenter(h),s.position.x-=h.x,s.position.z-=h.z,s.position.y-=l.min.y,s.position.y+=t}class ix{constructor(e,t){this.chainBaseScale=new P,this.scoreBaseScale=new P,this.lastChain=1,this.chainPopGen=0;const{scoreY:n,scoreZ:i,draftBarY:r,draftBarZ:o}=t;this.chainCanvas=document.createElement("canvas"),this.chainCanvas.width=256,this.chainCanvas.height=128,this.chainTex=new vh(this.chainCanvas),this.chainTex.colorSpace=Et,this.chainTex.minFilter=wt,this.chainTex.magFilter=wt,this.scoreCanvas=document.createElement("canvas"),this.scoreCanvas.width=512,this.scoreCanvas.height=160,this.scoreTex=new vh(this.scoreCanvas),this.scoreTex.colorSpace=Et,this.scoreTex.minFilter=wt,this.scoreTex.magFilter=wt;const a=new hc({map:this.chainTex,transparent:!0,depthWrite:!1,depthTest:!1}),c=new hc({map:this.scoreTex,transparent:!0,depthWrite:!1,depthTest:!1});this.chainSprite=new lh(a),this.chainSprite.center.set(.5,.5),this.chainSprite.renderOrder=100,this.scoreSprite=new lh(c),this.scoreSprite.center.set(.5,.5),this.scoreSprite.renderOrder=99,this.chainBaseScale.set(y.TAXI_WORLD_HUD_CHAIN_SCALE_X,y.TAXI_WORLD_HUD_CHAIN_SCALE_Y,1),this.scoreBaseScale.set(y.TAXI_WORLD_HUD_SCORE_SCALE_X,y.TAXI_WORLD_HUD_SCORE_SCALE_Y,1),this.chainSprite.scale.copy(this.chainBaseScale),this.scoreSprite.scale.copy(this.scoreBaseScale),this.scoreSprite.position.set(0,n,i);const l=n+this.scoreBaseScale.y*.5+this.chainBaseScale.y*.5-.3;this.chainSprite.position.set(0,l,i),e.add(this.scoreSprite),e.add(this.chainSprite),this.drawChain(1),this.drawScore(0)}setScore(e){this.drawScore(e)}setChain(e){const t=e>this.lastChain,n=t&&e>1&&e%10===0;if(this.lastChain=e,this.drawChain(e,n),t&&e>1){this.chainPopGen+=1;const i=this.chainPopGen,r=1.6+Math.min(e,25)*.05;n?(this.applyChainScale(3.2),setTimeout(()=>{this.chainPopGen===i&&(this.applyChainScale(1.6),setTimeout(()=>{this.chainPopGen===i&&(this.applyChainScale(2.6),this.drawChain(e),setTimeout(()=>{this.chainPopGen===i&&(this.applyChainScale(1.3),setTimeout(()=>{this.chainPopGen===i&&this.chainSprite.scale.copy(this.chainBaseScale)},150))},140))},130))},100)):(this.applyChainScale(r),setTimeout(()=>{this.chainPopGen===i&&this.chainSprite.scale.copy(this.chainBaseScale)},y.CHAIN_POP_DURATION))}else e===1&&(this.chainPopGen+=1,this.chainSprite.scale.copy(this.chainBaseScale))}applyChainScale(e){this.chainSprite.scale.set(this.chainBaseScale.x*e,this.chainBaseScale.y*e,1)}reset(){this.chainPopGen+=1,this.lastChain=1,this.chainSprite.scale.copy(this.chainBaseScale),this.drawChain(1),this.drawScore(0)}drawChain(e,t=!1){const n=this.chainCanvas.getContext("2d"),i=this.chainCanvas.width,r=this.chainCanvas.height;n.clearRect(0,0,i,r);const o=vn(y.PALETTE.UI_OUTLINE),a=t?"#ffffff":this.chainColor(e),c=e>1?1:.55;if(n.textAlign="center",n.textBaseline="middle",n.font=`700 ${Math.round(r*.5)}px "Exo 2", system-ui, sans-serif`,n.globalAlpha=c,n.lineJoin="round",n.lineWidth=Math.max(5,Math.round(r*.12)),n.strokeStyle=o,n.fillStyle=a,e>=5){const l=Math.min(1,(e-5)/15);n.shadowColor=a,n.shadowBlur=8+l*24}t&&(n.shadowColor="#ffffff",n.shadowBlur=40),n.strokeText(`×${e}`,i/2,r/2),n.fillText(`×${e}`,i/2,r/2),n.globalAlpha=1,n.shadowBlur=0,this.chainTex.needsUpdate=!0}chainColor(e){if(e<=1)return vn(y.PALETTE.NEON_BLUE);const t=Math.min(1,(e-1)/19);let n,i,r;if(t<=.5){const o=t*2;n=Math.round(253+2*o),i=Math.round(224+-89*o),r=Math.round(71*(1-o))}else{const o=(t-.5)*2;n=Math.round(255+-30*o),i=Math.round(135*(1-o)),r=0}return`rgb(${n},${i},${r})`}drawScore(e){const t=this.scoreCanvas.getContext("2d"),n=this.scoreCanvas.width,i=this.scoreCanvas.height;t.clearRect(0,0,n,i);const r=e.toLocaleString(),o=vn(y.PALETTE.UI_TEXT);t.textAlign="center",t.textBaseline="middle",t.font=`800 ${Math.round(i*.34)}px "Exo 2", system-ui, sans-serif`,t.fillStyle=o,t.shadowColor=Qt(y.PALETTE.HUD_SCORE_GLOW,.35),t.shadowBlur=22,t.fillText(r,n/2,i/2),t.shadowBlur=0,this.scoreTex.needsUpdate=!0}dispose(){this.chainPopGen+=1,this.chainTex.dispose(),this.scoreTex.dispose(),this.chainSprite.material.dispose(),this.scoreSprite.material.dispose()}}const Ls=[{id:"white",name:"Arctic White",hex:15658994,unlockScore:0},{id:"ferrariRed",name:"Ferrari Red",hex:14417920,unlockScore:500},{id:"mclarenPapaya",name:"McLaren Papaya",hex:16746240,unlockScore:3e3},{id:"mercedesSilver",name:"Mercedes Silver",hex:12634320,unlockScore:15e3},{id:"redBullNavy",name:"Red Bull Navy",hex:1981023,unlockScore:5e4},{id:"astonGreen",name:"Aston Martin Green",hex:36715,unlockScore:5e4},{id:"alpineBlue",name:"Alpine Blue",hex:37119,unlockScore:5e4},{id:"haasBlackGold",name:"Haas Black/Gold",hex:1710622,unlockScore:5e4}],_r=[{id:"standard",name:"Standard Black",color:1710622,accent:3355448,unlockScore:0},{id:"gold",name:"Gold Rims",color:1710622,accent:13936707,unlockScore:2e3},{id:"chrome",name:"Chrome Rims",color:1710622,accent:13751771,unlockScore:7500},{id:"redStriped",name:"Red Striped",color:1710622,accent:14417920,unlockScore:3e4}],gr=[{id:"matchBody",name:"Match Body",hex:null,unlockScore:0},{id:"carbonBlack",name:"Carbon Black",hex:1710622,unlockScore:7500},{id:"neonPink",name:"Neon Pink",hex:14747136,unlockScore:15e3},{id:"neonBlue",name:"Neon Blue",hex:37119,unlockScore:3e4}],Pt=5.6,Ti=2,Uh=new en({color:1710618,roughness:.92,metalness:0});function Fh(s){return new en({color:s,metalness:.4,roughness:.35})}function sx(){return new en({color:1842210,metalness:.15,roughness:.85})}function wo(s){return new en({color:s,metalness:.85,roughness:.15})}function io(s,e,t,n){const i=new lt,r=e,o=new Ae(new qn(s,s,r,24),Uh.clone());o.material.color.setHex(t),o.rotation.x=Math.PI/2,i.add(o);const a=s*.78,c=new Ae(new zc(a,s,24),Uh.clone());c.position.z=r/2+.001,i.add(c);const l=c.clone();l.position.z=-r/2-.001,l.rotation.y=Math.PI,i.add(l);const h=new Ae(new qn(a,a,e*.85,20),wo(n));h.rotation.x=Math.PI/2,i.add(h);const u=new Ae(new qn(s*.14,s*.14,e*.92,6),wo(10066329));u.rotation.x=Math.PI/2,i.add(u);const d=new Ae(new qn(s*.5,s*.5,e*.1,16),new en({color:3351074,emissive:4460800,emissiveIntensity:.5}));return d.rotation.x=Math.PI/2,i.add(d),i}function rx(s){const e=new lt,t=new Ae(new Ro(.14,12,10,0,Math.PI*2,0,Math.PI*.65),new en({color:s,metalness:.5,roughness:.3}));e.add(t);const n=new Ae(new Ro(.145,12,4,-Math.PI*.4,Math.PI*.8,Math.PI*.15,Math.PI*.2),new en({color:1118498,metalness:.7,roughness:.1}));return e.add(n),e}const ox={starter:{noseTaper:.5,noseDropY:.3,bodyWidth:.32,sidePodScale:1,sidePodCut:.3,frontWingSpan:.95,frontWingElements:2,rearWingWidth:.72,rearWingHeight:1,rearWingChord:1,engineCoverSlim:.5,sharkFin:!1,tWing:!1,wheelSizeMul:1},aeroBeast:{noseTaper:.4,noseDropY:.4,bodyWidth:.3,sidePodScale:1.15,sidePodCut:.6,frontWingSpan:1,frontWingElements:3,rearWingWidth:.8,rearWingHeight:1.15,rearWingChord:1.2,engineCoverSlim:.6,sharkFin:!0,tWing:!1,wheelSizeMul:1},speedDemon:{noseTaper:.8,noseDropY:.2,bodyWidth:.28,sidePodScale:.75,sidePodCut:.5,frontWingSpan:.85,frontWingElements:2,rearWingWidth:.65,rearWingHeight:.88,rearWingChord:.85,engineCoverSlim:.7,sharkFin:!1,tWing:!1,wheelSizeMul:.95},tank:{noseTaper:.3,noseDropY:.25,bodyWidth:.36,sidePodScale:1.2,sidePodCut:.15,frontWingSpan:.92,frontWingElements:2,rearWingWidth:.76,rearWingHeight:1.05,rearWingChord:1.15,engineCoverSlim:.35,sharkFin:!1,tWing:!1,wheelSizeMul:1.1},phantom:{noseTaper:.7,noseDropY:.35,bodyWidth:.27,sidePodScale:.8,sidePodCut:.7,frontWingSpan:.88,frontWingElements:2,rearWingWidth:.68,rearWingHeight:1,rearWingChord:.9,engineCoverSlim:.65,sharkFin:!0,tWing:!0,wheelSizeMul:.95}};function ax(s,e){const t=new lt,n=ox[s],i=Fh(e.bodyColor),r=Fh(e.wingColor),o=sx(),a=Pt/2,c=.05,l=c+.02,h=.3,u=l+h,d=Ti*n.bodyWidth,p=.36*n.wheelSizeMul,_=.3,g=.4,m=Pt*.64,f=m*.42,T=-m*.58,A=Ti*.82,S=Ti*.78,C=Pt*.3,w=new Ae(new nt(d,h,C),i);w.position.set(0,l+h/2,Pt*.06),t.add(w);const b=Pt*.06+C/2,I=a-.15,M=I-b,E=d*(1-n.noseTaper*.7),L=h*(.5-n.noseDropY*.3),H=l+L/2+h*(.1-n.noseDropY*.15),F=new Ae(new nt(1,1,M),i.clone());F.scale.set((d+E)/2,(h+L)/2,1),F.position.set(0,(l+h/2+H)/2,b+M/2),t.add(F);const q=.22,Y=new Ae(new Gc(E*.4,q,6),i.clone());Y.rotation.x=-Math.PI/2,Y.position.set(0,H,I+q/2),t.add(Y);const W=Pt*.12,j=Pt*.09,V=d*.72,ne=new Ae(new nt(V,h*.4,j),new en({color:328968,roughness:.95,metalness:.05}));ne.position.set(0,u-h*.05,W),t.add(ne);const ue=rx(e.helmetColor);ue.position.set(0,u+.06,W+j*.15),ue.rotation.x=-.1,t.add(ue);const me=V*.5,Pe=u+.03,Xe=wo(5263445),k=new Ae(new nt(.04,.04,j*.6),Xe);k.position.set(0,Pe+me*.8,W+j*.45),k.rotation.x=.35,t.add(k);const Q=new Ae(new kc(me,.025,6,16,Math.PI*1.1),Xe.clone());Q.rotation.z=Math.PI,Q.position.set(0,Pe+me,W),t.add(Q);for(const ae of[-1,1]){const we=new Ae(new nt(.03,me*.8,.03),Xe.clone());we.position.set(ae*me*.9,Pe+me*.4,W-j*.15),t.add(we)}const Se=d*.3,re=.2,Ie=new Ae(new nt(Se,re,.14),i.clone());Ie.position.set(0,u+re/2,W-j*.5),t.add(Ie);const Ne=Pt*.06-C/2,Be=T+.12,ot=Ne-Be,je=d*(1-n.engineCoverSlim*.6),pt=h*.72,O=new Ae(new nt((d+je)/2,pt,ot),i.clone());if(O.position.set(0,l+pt/2+h*.05,(Ne+Be)/2),t.add(O),n.sharkFin){const ae=h*.55,we=ot*.65,Ye=new Ae(new nt(.012,ae,we),i.clone());Ye.position.set(0,u+ae/2,(Ne+Be)/2+ot*.1),t.add(Ye)}if(n.tWing){const ae=d*1.2,we=u+h*.6,Ye=new Ae(new nt(ae,.012,.06),r.clone());Ye.position.set(0,we,Be+ot*.12),t.add(Ye)}const It=Pt*.28*n.sidePodScale,Ve=h*(.85-n.sidePodCut*.3),Ge=(Ti*.5-d/2)*.65*n.sidePodScale;for(const ae of[-1,1]){const we=new Ae(new nt(Ge,Ve,It),i.clone());we.position.set(ae*(d/2+Ge/2),l+Ve/2+h*.08,-Pt*.02),t.add(we);const Ye=Ve*.45,Ue=Ge*.7,yt=new Ae(new nt(Ue,Ye,.03),new en({color:328968,roughness:.95}));if(yt.position.set(ae*(d/2+Ge/2),l+Ve*.6,-Pt*.02+It/2),t.add(yt),n.sidePodCut>.3){const Tn=Ve*n.sidePodCut*.4,Bi=new Ae(new nt(Ge*.9,Tn,It*.7),o.clone());Bi.position.set(ae*(d/2+Ge/2),l+Tn/2,-Pt*.04),t.add(Bi)}const tn=h*.4,vr=Pt*.06,Fi=new Ae(new nt(.015,tn,vr),i.clone());Fi.position.set(ae*(d/2+.06),l+tn/2+.02,f-Pt*.08),Fi.rotation.y=ae*.15,t.add(Fi)}const be=Ti*n.frontWingSpan,at=a-.06,ye=c+.015;for(let ae=0;ae<n.frontWingElements;ae++){const we=.12-ae*.02,Ye=be*(1-ae*.05),Ue=new Ae(new nt(Ye,.015,we),r.clone());Ue.position.set(0,ye+ae*.028,at-ae*.045),Ue.rotation.x=ae*.1,t.add(Ue)}for(const ae of[-1,1]){const we=.1+n.frontWingElements*.025,Ye=.18+n.frontWingElements*.035,Ue=new Ae(new nt(.015,we,Ye),r.clone());Ue.position.set(ae*be/2,ye+we/2-.02,at-Ye/2+.08),t.add(Ue)}for(const ae of[-1,1]){const we=new Ae(new nt(.02,.015,M*.3),i.clone());we.position.set(ae*E*.25,ye+.01,b+M*.6),t.add(we)}const R=Ti*n.rearWingWidth,x=-a+.25,B=u+.05,K=B+.42*n.rearWingHeight,J=.22*n.rearWingChord,Z=new Ae(new nt(R,.025,J),r);Z.position.set(0,K,x),t.add(Z);const xe=new Ae(new nt(R*.9,.018,J*.55),r.clone());xe.position.set(0,K+.04,x+J*.12),xe.rotation.x=-.2,t.add(xe);for(const ae of[-1,1]){const we=K-B,Ye=new Ae(new nt(.022,we,.03),r.clone());Ye.position.set(ae*R*.32,B+we/2,x+J*.1),Ye.rotation.z=ae*.04,t.add(Ye)}const oe=.22*n.rearWingHeight;for(const ae of[-1,1]){const we=new Ae(new nt(.015,oe,J*1.5),r.clone());we.position.set(ae*R/2,K-oe*.3,x),t.add(we)}const fe=B+(K-B)*.28,Ke=new Ae(new nt(R*.65,.012,J*.5),r.clone());Ke.position.set(0,fe,x),t.add(Ke);const ee=Ti*.65,pe=h*.3,Re=Pt*.055,Ce=new Ae(new nt(ee,pe,Re),o.clone());Ce.position.set(0,c+pe/2,x+J/2+Re/2+.02),Ce.rotation.x=.25,t.add(Ce);const _e=d*.35,qe=h*.4,Oe=Pt*.07,it=new Ae(new nt(_e,qe,Oe),i.clone());it.position.set(0,l+qe/2+h*.1,T-Oe*.3),t.add(it);const N=new Ae(new nt(.14,.028,.02),new en({color:13369344,emissive:16720384,emissiveIntensity:.8}));N.position.set(0,B-.02,x+J*.6),t.add(N);const ie=io(p,_,e.wheelColor,e.wheelAccent);ie.rotation.y=Math.PI/2,ie.position.set(-A/2,p,f),t.add(ie);const X=io(p,_,e.wheelColor,e.wheelAccent);X.rotation.y=Math.PI/2,X.position.set(A/2,p,f),t.add(X);const $=io(p,g,e.wheelColor,e.wheelAccent);$.rotation.y=Math.PI/2,$.position.set(-S/2,p,T),t.add($);const ce=io(p,g,e.wheelColor,e.wheelAccent);ce.rotation.y=Math.PI/2,ce.position.set(S/2,p,T),t.add(ce);const le=wo(4473928);for(const ae of[-1,1]){const we=new Ae(new qn(.015,.015,A/2-d/2,4),le);we.rotation.z=Math.PI/2,we.position.set(ae*(d/2+(A/2-d/2)/2),l+h*.6,f+.04),t.add(we);const Ye=we.clone();Ye.position.y=l+h*.15,Ye.position.z=f-.03,t.add(Ye);const Ue=new Ae(new qn(.015,.015,S/2-d/2+.1,4),le.clone());Ue.rotation.z=Math.PI/2,Ue.position.set(ae*(d/2+(S/2-d/2)/2),l+h*.5,T+.04),t.add(Ue);const yt=Ue.clone();yt.position.y=l+h*.1,yt.position.z=T-.03,t.add(yt)}return t}const pc=[{id:"starter",name:"Starter",unlockScore:0},{id:"aeroBeast",name:"Aero Beast",unlockScore:1e3},{id:"speedDemon",name:"Speed Demon",unlockScore:5e3},{id:"tank",name:"Tank",unlockScore:1e4},{id:"phantom",name:"Phantom",unlockScore:2e4}];function cx(s,e){const t=Math.round((s>>16&255)*e),n=Math.round((s>>8&255)*e),i=Math.round((s&255)*e);return t<<16|n<<8|i}function Yu(s,e,t,n){const i=Ls.find(u=>u.id===e)??Ls[0],r=_r.find(u=>u.id===t)??_r[0],o=gr.find(u=>u.id===n)??gr[0],a=ax(s,{bodyColor:i.hex,wheelColor:r.color,wheelAccent:r.accent,wingColor:o.hex??i.hex,helmetColor:cx(i.hex,.8)});a.traverse(u=>{u instanceof Ae&&(u.castShadow=!0,u.receiveShadow=!0)});const c=y.TAXI_DIMENSIONS;a.updateMatrixWorld(!0);const l=new Wt().setFromObject(a),h=new P;if(l.getSize(h),h.x>1e-4&&h.y>1e-4&&h.z>1e-4){const u=Math.min(c.width/h.x,c.height/h.y,c.length/h.z);a.scale.setScalar(u),a.updateMatrixWorld(!0);const d=new Wt().setFromObject(a),p=new P;d.getCenter(p),a.position.x-=p.x,a.position.z-=p.z,a.position.y-=d.min.y}return a}function mc(){const s=["starter","aeroBeast","speedDemon","tank","phantom"],e=s[Math.floor(Math.random()*s.length)],t=["white","ferrariRed","mclarenPapaya","mercedesSilver","redBullNavy","astonGreen","alpineBlue","haasBlackGold"],n=t[Math.floor(Math.random()*t.length)],i=["standard","gold","chrome","redStriped"],r=i[Math.floor(Math.random()*i.length)],o=["matchBody","carbonBlack","neonPink","neonBlue"],a=o[Math.floor(Math.random()*o.length)];return Yu(e,n,r,a)}class Yc{constructor(){this.group=new lt,this.dims=y.TAXI_DIMENSIONS,this.currentModelRoot=null,this.turboParticles=null,this.turboVels=null,this.turboAges=null,this.turboN=120,this.turboIntensity=0,this.turboTarget=0,this.milestoneFlashTimer=0,this.group.name="PlayerTaxi",this.chassisGroup=new lt,this.chassisGroup.name="PlayerCarRoot",this.group.add(this.chassisGroup);const{height:e,length:t}=this.dims,n=t/2,i=-t/2,r=y.DRAFT_BAR_WIDTH,o=y.DRAFT_BAR_DEPTH;this.draftBarGroup=new lt,this.draftBarGroup.name="DraftMeterBar",this.draftBarGroup.visible=!1;const a=e+y.DRAFT_BAR_OFFSET_Y,c=n-y.DRAFT_BAR_INSET_FROM_FRONT;this.draftBarGroup.position.set(0,a,c);const l=new hn({color:y.PALETTE.DRAFT_BAR_TRACK,transparent:!0,opacity:.92,side:zt,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),h=new Ae(new xn(r,o),l);h.rotation.x=-Math.PI/2,this.draftBarGroup.add(h);const u=new hn({color:y.PALETTE.NEON_BLUE,side:zt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),d=new lt;d.position.set(-r/2,0,0),this.draftBarGroup.add(d);const p=new xn(r,o);p.translate(r/2,0,0),this.draftFill=new Ae(p,u),this.draftFill.rotation.x=-Math.PI/2,this.draftFill.position.y=.004,d.add(this.draftFill),this.draftBarGroup.scale.set(-1,1,1),this.chassisGroup.add(this.draftBarGroup);const _=i-y.TAXI_WORLD_HUD_SCORE_BEHIND_Z,g=e*y.TAXI_WORLD_HUD_SCORE_Y_FRAC;this.worldHud=new ix(this.chassisGroup,{scoreY:g,scoreZ:_,draftBarY:a,draftBarZ:c}),this.worldHud.scoreSprite.visible=!1,this.worldHud.chainSprite.visible=!1,this.reset()}static async create(e){const t=new Yc;return e?t.applyLoadout(e):await t.loadGlbModel(),t}async loadGlbModel(){try{const t=(await ex()).scene.clone(!0);tx(t),nx(t,y.TAXI_DIMENSIONS,y.PLAYER_CAR_Y_OFFSET),t.traverse(n=>{n instanceof Ae&&(n.castShadow=!1,n.receiveShadow=!1)}),this.setModelRoot(t)}catch(e){console.warn(`PlayerTaxi: failed to load ${y.PLAYER_CAR_GLB}`,e)}}applyLoadout(e){const t=Yu(e.carId,e.bodyColorId,e.wheelStyleId,e.wingColorId);this.setModelRoot(t)}setModelRoot(e){this.currentModelRoot&&this.chassisGroup.remove(this.currentModelRoot),this.currentModelRoot=e,this.chassisGroup.add(e),this.initTurbo()}initTurbo(){this.turboParticles&&this.chassisGroup.remove(this.turboParticles);const e=this.turboN,t=new Float32Array(e*3),n=new Float32Array(e*3);this.turboVels=new Float32Array(e*3),this.turboAges=new Float32Array(e).fill(99);const i=new Mt;i.setAttribute("position",new mt(t,3).setUsage(To)),i.setAttribute("color",new mt(n,3).setUsage(To));const r=new Ds({size:.1,transparent:!0,opacity:.9,depthWrite:!1,blending:Di,vertexColors:!0,sizeAttenuation:!0});this.turboParticles=new Os(i,r),this.turboParticles.frustumCulled=!1,this.turboParticles.renderOrder=80,this.chassisGroup.add(this.turboParticles)}reset(){this.group.position.set(0,0,y.TAXI_POSITION_Z+y.TAXI_INTRO_START_Z_OFFSET),this.group.rotation.set(0,0,0),this.chassisGroup.rotation.set(0,0,0),this.setDraftMeter(0,!1),this.worldHud.reset()}applyLaneVisuals(e,t,n=0){this.group.position.x=e,this.chassisGroup.rotation.z=t}onChainMilestone(e,t){this.milestoneFlashTimer=.5}tickRoofLight(e,t,n){if(!this.turboParticles||!this.turboVels||!this.turboAges)return;const i=1/60,r=this.turboN,o=this.dims.length,a=this.dims.height,c=-.18,l=.18,h=a*.18,u=-o/2-.05;n<=1&&!t?this.turboTarget=0:t&&n<=1?this.turboTarget=.25:this.turboTarget=Math.min(1,.15+n*.08),this.milestoneFlashTimer>0&&(this.milestoneFlashTimer-=i,this.turboTarget=1),this.turboIntensity+=(this.turboTarget-this.turboIntensity)*.12;const d=this.turboParticles.geometry,p=d.getAttribute("position"),_=d.getAttribute("color"),g=this.turboVels,m=this.turboAges,f=this.turboIntensity*r*3*i,T=6+n*1.5;for(let A=0;A<r;A++){const S=.2+.25*(1-this.turboIntensity*.5);if(m[A]+=i,m[A]>S&&Math.random()<f/r){const w=Math.random()>.5?c:l;p.setXYZ(A,w+(Math.random()-.5)*.06,h+(Math.random()-.5)*.04,u),g[A*3]=(Math.random()-.5)*.8,g[A*3+1]=(Math.random()-.3)*.5,g[A*3+2]=-(T+Math.random()*T*.5),m[A]=0}if(m[A]<S){const C=m[A]/S;p.setXYZ(A,p.getX(A)+g[A*3]*i,p.getY(A)+g[A*3+1]*i,p.getZ(A)+g[A*3+2]*i);const w=(1-C*C)*this.turboIntensity;let b,I,M;if(C<.15)b=1,I=.95,M=.8;else if(C<.4){const E=(C-.15)/.25;b=1,I=.95-E*.55,M=.8-E*.8}else if(C<.7){const E=(C-.4)/.3;b=1,I=.4-E*.3,M=0}else{const E=(C-.7)/.3;b=1-E*.6,I=.1*(1-E),M=0}_.setXYZ(A,b*w,I*w,M*w)}else _.setXYZ(A,0,0,0),p.setXYZ(A,0,-10,0)}p.needsUpdate=!0,_.needsUpdate=!0,this.turboParticles.material.size=.06+this.turboIntensity*.08}setDraftMeter(e,t){const n=Math.max(0,Math.min(1,e));this.draftBarGroup.visible=t,this.draftFill.scale.set(n,1,1)}getCollisionBounds(){const{width:e,length:t}=this.dims;return{cx:this.group.position.x,cz:this.group.position.z,hx:e/2,hz:t/2}}getRearWorldPosition(e){const{height:t,length:n}=this.dims;e.set(0,t*.35,-n/2-.02),this.group.localToWorld(e)}getTailLightsWorldPositions(e,t){const{height:n,length:i}=this.dims,r=n*.28,o=-i/2+2.02;e.set(-.42,r,o),t.set(.42,r,o),this.group.localToWorld(e),this.group.localToWorld(t)}}class Zc{constructor(){this.group=new lt,this.pool=[],this.spawnAccMs=0,this.despawnBehindZ=25,this.spawnsSinceRail=0,this.railPatternIndex=0,this.railStepIndex=0,this.railActive=!1,this.group.name="TrafficGroup"}static async create(){const e=new Zc;for(let t=0;t<y.VEHICLE_POOL_SIZE;t++)e.pool.push(e.createVehicle());return e}createVehicle(){const e=new lt,t=mc();return e.add(t),e.visible=!1,this.group.add(e),{group:e,carRoot:t,active:!1,slipstreamConsumed:!1,laneIndex:1,speedMul:1,laneChangeState:"idle",laneChangeFromLane:1,laneChangeToLane:1,laneChangeStartMs:0}}reset(){this.spawnAccMs=y.TRAFFIC_PHASES[0].spawnRate,this.spawnsSinceRail=0,this.railPatternIndex=0,this.railStepIndex=0,this.railActive=!1;for(const e of this.pool)e.active=!1,e.slipstreamConsumed=!1,e.group.visible=!1,e.laneChangeState="idle",e.laneChangeFromLane=e.laneIndex,e.laneChangeToLane=e.laneIndex,e.laneChangeStartMs=0}easeInOutCubic(e){return e<=0?0:e>=1?1:e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}laneHasBlockingTraffic(e,t){const n=this.laneIndexToX(t),i=this.hzFor();for(const r of this.pool){if(!r.active||r===e)continue;const o=this.hzFor();if(this.longFootprintsOverlap(e.group.position.z,i,r.group.position.z,o)&&(r.laneChangeState==="active"&&r.laneChangeToLane===t||Math.abs(r.group.position.x-n)<=y.LANE_WIDTH*.55))return!0}return!1}pickAdjacentLaneForChange(e,t,n){const i=[],r=n-1,o=n+1;return r>=0&&r<y.LANE_COUNT&&t.lanes.includes(r)&&!this.laneHasBlockingTraffic(e,r)&&i.push(r),o>=0&&o<y.LANE_COUNT&&t.lanes.includes(o)&&!this.laneHasBlockingTraffic(e,o)&&i.push(o),i.length?i[Math.floor(Math.random()*i.length)]:null}maybeStartLaneChange(e,t,n){if(e.laneChangeState!=="idle"||!t.laneChange)return;if(t.lanes.length<2){e.laneChangeState="done";return}const i=y.TAXI_POSITION_Z+y.VEHICLE_LANE_CHANGE_TRIGGER_AHEAD_Z;if(e.group.position.z>i)return;if(Math.random()>y.VEHICLE_LANE_CHANGE_CHANCE){e.laneChangeState="done";return}const r=this.pickAdjacentLaneForChange(e,t,e.laneIndex);if(r===null){e.laneChangeState="done";return}e.laneChangeState="active",e.laneChangeFromLane=e.laneIndex,e.laneChangeToLane=r,e.laneChangeStartMs=n}updateLaneChange(e,t){if(e.laneChangeState!=="active")return;const n=Math.max(1,y.VEHICLE_LANE_CHANGE_TOTAL_MS),i=Xn.clamp(y.VEHICLE_LANE_CHANGE_SIGNAL_PORTION,.05,.95),r=(t-e.laneChangeStartMs)/n,o=Xn.clamp(r,0,1),a=this.laneIndexToX(e.laneChangeFromLane),c=this.laneIndexToX(e.laneChangeToLane),l=Math.sign(c-a)||1,h=y.LANE_WIDTH*y.VEHICLE_LANE_CHANGE_SIGNAL_OFFSET_FRAC*l;if(o>=1){e.group.position.x=c,e.laneIndex=e.laneChangeToLane,e.laneChangeState="done";return}let u=a;if(o<i){const d=this.easeInOutCubic(o/i);u=Xn.lerp(a,a+h,d)}else{const d=this.easeInOutCubic((o-i)/(1-i));u=Xn.lerp(a+h,c,d)}e.group.position.x=u}getPhase(e){const t=y.TRAFFIC_PHASES;let n=t[0];for(const i of t)e>=i.startTime&&(n=i);return n}laneIndexToX(e){return(e-1)*y.LANE_WIDTH}startNextRail(){this.railActive=!0,this.railStepIndex=0}getCurrentRailPattern(){const e=y.FLOW_RAILS_PATTERNS;return e[this.railPatternIndex%e.length]??[]}resolveRailLaneToPhase(e,t){if(e.lanes.includes(t))return t;let n=e.lanes[0],i=Math.abs(n-t);for(const r of e.lanes){const o=Math.abs(r-t);o<i&&(n=r,i=o)}return n}shouldStartRail(e,t){return this.railActive||y.FLOW_RAILS_PATTERNS.length===0||e<y.FLOW_RAILS_START_MS||t.lanes.length<2?!1:this.spawnsSinceRail>=y.FLOW_RAILS_GAP_SPAWNS}pickLane(e,t){if(this.shouldStartRail(t,e)&&this.startNextRail(),this.railActive){const i=this.getCurrentRailPattern();if(i.length>0){const r=i[this.railStepIndex%i.length];return this.resolveRailLaneToPhase(e,r)}}const n=e.lanes;return n[Math.floor(Math.random()*n.length)]}hzFor(){return y.TAXI_DIMENSIONS.length/2}zFootprint(e,t){const n=y.SLIPSTREAM_ZONE_DEPTH;return{min:e-t-n,max:e+t}}longFootprintsOverlap(e,t,n,i){const r=y.TRAFFIC_SPAWN_MIN_Z_BUFFER,o=this.zFootprint(e,t),a=this.zFootprint(n,i);return!(o.max+r<=a.min||a.max+r<=o.min)}minCenterZAheadOfOther(e,t){const n=this.hzFor(),i=this.hzFor();return t.group.position.z+n+i+y.SLIPSTREAM_ZONE_DEPTH+y.TRAFFIC_SPAWN_MIN_Z_BUFFER}resolveSpawnZ(e,t,n){const i=this.hzFor();let r=n;for(let o=0;o<40;o++){let a=!1;for(const c of this.pool){if(!c.active||c===t||Math.abs(c.laneIndex-e)>1)continue;const l=this.hzFor(),h=c.group.position.z;if(this.longFootprintsOverlap(r,i,h,l)){const u=this.minCenterZAheadOfOther(t,c);r<u&&(r=u,a=!0)}}if(!a)break}return r}separateOverlappingTraffic(){const e=y.TRAFFIC_SPAWN_MIN_Z_BUFFER,t=y.SLIPSTREAM_ZONE_DEPTH;for(let n=0;n<12;n++){let i=!1;const r=this.pool.filter(o=>o.active);for(let o=0;o<r.length;o++)for(let a=o+1;a<r.length;a++){const c=r[o],l=r[a];if(Math.abs(c.laneIndex-l.laneIndex)>1)continue;const h=this.hzFor(),u=this.hzFor(),d=c.group.position.z,p=l.group.position.z;this.longFootprintsOverlap(d,h,p,u)&&(d>=p?c.group.position.z=p+u+h+t+e:l.group.position.z=d+h+u+t+e,i=!0)}if(!i)break}}trySpawn(e){const t=this.pool.find(l=>!l.active);if(!t)return;const n=this.getPhase(e),i=this.pickLane(n,e),r=this.railActive?y.FLOW_RAILS_SPEED_VARIANCE_SCALE:1,o=1+(Math.random()*2-1)*n.speedVariance*r;t.laneIndex=i,t.speedMul=Math.max(.4,o),t.group.remove(t.carRoot),t.carRoot=mc(),t.group.add(t.carRoot),t.active=!0,t.slipstreamConsumed=!1,t.group.visible=!0,t.laneChangeState="idle",t.laneChangeFromLane=i,t.laneChangeToLane=i,t.laneChangeStartMs=0;const a=Math.random()*y.TRAFFIC_SPAWN_AHEAD_Z_JITTER;let c=y.TAXI_POSITION_Z+y.TRAFFIC_SPAWN_AHEAD_Z+a;if(c=this.resolveSpawnZ(i,t,c),t.group.position.set(this.laneIndexToX(i),0,c),this.railActive){this.railStepIndex+=1;const l=this.getCurrentRailPattern();(l.length===0||this.railStepIndex>=l.length)&&(this.railActive=!1,this.railStepIndex=0,this.railPatternIndex=(this.railPatternIndex+1)%Math.max(1,y.FLOW_RAILS_PATTERNS.length),this.spawnsSinceRail=0)}else this.spawnsSinceRail+=1}update(e,t,n){const i=this.getPhase(t),r=this.railActive?i.spawnRate*y.FLOW_RAILS_SPAWN_RATE_SCALE:i.spawnRate;for(this.spawnAccMs+=e*1e3;this.spawnAccMs>=r;)this.spawnAccMs-=r,this.trySpawn(t);const o=n*60*e;for(const a of this.pool){if(!a.active)continue;const c=y.VEHICLE_TRAFFIC_FORWARD_SPEED*60*e*a.speedMul,l=o-c;a.group.position.z-=Math.max(y.VEHICLE_TRAFFIC_MIN_APPROACH,l),this.maybeStartLaneChange(a,i,t),this.updateLaneChange(a,t),a.group.position.z<y.TAXI_POSITION_Z-this.despawnBehindZ&&(a.active=!1,a.group.visible=!1,a.laneChangeState="idle")}this.separateOverlappingTraffic()}forEachPoolWindSlot(e){const t=y.TAXI_DIMENSIONS.length/2;for(let n=0;n<this.pool.length;n++){const i=this.pool[n];if(!i.active){e(n,!1,!1,0,0,0);continue}e(n,!0,!i.slipstreamConsumed,i.group.position.x,i.group.position.z,t)}}markSlipstreamConsumed(e){if(!e)return;const t=this.findClosestActiveVehicleXZ(e.cx,e.cz);t&&(t.slipstreamConsumed=!0)}findClosestActiveVehicleXZ(e,t){const n=y.TRAFFIC_HEADLIGHT_MATCH_MAX_DIST,i=n*n;let r=null,o=1/0;for(const a of this.pool){if(!a.active||a.slipstreamConsumed)continue;const c=a.group.position.x-e,l=a.group.position.z-t,h=c*c+l*l;h<o&&h<=i&&(o=h,r=a)}return r}getActiveCollisionBounds(){const{width:e,length:t}=y.TAXI_DIMENSIONS,n=e/2,i=t/2,r=[];for(const o of this.pool)!o.active||o.slipstreamConsumed||r.push({cx:o.group.position.x,cz:o.group.position.z,hx:n,hz:i});return r}getHitCarGroup(e,t){let n=null,i=1/0;for(const r of this.pool){if(!r.active)continue;const o=r.group.position.x-e,a=r.group.position.z-t,c=o*o+a*a;c<i&&(i=c,n=r)}return(n==null?void 0:n.group)??null}getAllActiveCollisionBounds(){const{width:e,length:t}=y.TAXI_DIMENSIONS,n=e/2,i=t/2,r=[];for(const o of this.pool)o.active&&r.push({cx:o.group.position.x,cz:o.group.position.z,hx:n,hz:i});return r}}function lx(s,e,t,n,i,r,o,a){return Math.abs(s-i)<t+o&&Math.abs(e-r)<n+a}class hx{check(e,t){const n=e.getCollisionBounds(),i=n.hz*y.TAXI_COLLISION_Z_HALF_SCALE,r=t.getAllActiveCollisionBounds();for(const o of r)if(lx(n.cx,n.cz,n.hx,i,o.cx,o.cz,o.hx,o.hz))return{hitX:o.cx,hitZ:o.cz};return null}}class ux{constructor(e){this.rearWorld=new P,this.rearNdc=new P,this.followDistance=y.CAMERA_DISTANCE,this.camera=e}update(e,t){const n=this.fovFromScrollSpeed(t);this.camera.fov=Xn.lerp(this.camera.fov,n,y.CAMERA_FOV_LERP),this.camera.updateProjectionMatrix(),this.applyCamera(e)}snap(e){this.followDistance=y.CAMERA_DISTANCE,this.camera.fov=y.CAMERA_FOV_BASE,this.camera.updateProjectionMatrix(),this.applyCamera(e)}fovFromScrollSpeed(e){const t=y.BASE_SCROLL_SPEED,n=y.MAX_SCROLL_SPEED,r=(Xn.clamp(e,t,n)-t)/(n-t);return Xn.lerp(y.CAMERA_FOV_BASE,y.CAMERA_FOV_MAX,r)}applyCamera(e){const t=e.group.position.z,n=t+y.CAMERA_LOOK_AHEAD,i=y.CAMERA_HEIGHT,r=y.CAMERA_LOOK_AT_Y;e.getRearWorldPosition(this.rearWorld);const o=-1+2*y.CAMERA_FRAMING_BOTTOM_PCT;let a=this.followDistance;const c=14;for(let h=0;h<c;h++){const u=t-a;this.camera.position.set(0,i,u),this.camera.up.set(0,1,0),this.camera.lookAt(0,r,n),this.camera.updateMatrixWorld(!0),this.rearNdc.copy(this.rearWorld),this.rearNdc.project(this.camera);const d=o-this.rearNdc.y;if(Math.abs(d)<.008)break;a+=d*y.CAMERA_FRAMING_DISTANCE_GAIN,a=Xn.clamp(a,4,40)}this.followDistance=a;const l=t-a;this.camera.position.set(0,i,l),this.camera.up.set(0,1,0),this.camera.lookAt(0,r,n)}}class dx{constructor(){this.group=new lt,this.outlineSlots=[],this.group.name="SlipstreamWind",this.poolSlots=y.VEHICLE_POOL_SIZE,this.particlesPerVehicle=y.SLIPSTREAM_WIND_PARTICLES_PER_VEHICLE;const e=this.poolSlots*this.particlesPerVehicle;this.positions=new Float32Array(e*3),this.offsetXZ=new Float32Array(e*2),this.sideSign=new Int8Array(e),this.particleY=new Float32Array(e),this.slotSeeded=new Array(this.poolSlots).fill(!1);const t=new Mt;t.setAttribute("position",new mt(this.positions,3)),this.geometry=t,this.material=new Ds({color:y.SLIPSTREAM_WIND_COLOR,size:y.SLIPSTREAM_WIND_POINT_SIZE,transparent:!0,opacity:y.SLIPSTREAM_WIND_OPACITY,depthWrite:!1,sizeAttenuation:!0,blending:Ni}),this.points=new Os(t,this.material),this.points.frustumCulled=!1,this.points.renderOrder=2,this.group.add(this.points),this.outlineCoreMat=new hn({color:y.SLIPSTREAM_ZONE_OUTLINE_COLOR,transparent:!0,opacity:y.SLIPSTREAM_ZONE_OUTLINE_OPACITY,depthWrite:!1,blending:Di,side:zt}),this.outlineGlowMat=new hn({color:y.SLIPSTREAM_ZONE_OUTLINE_COLOR,transparent:!0,opacity:y.SLIPSTREAM_ZONE_OUTLINE_GLOW_OPACITY,depthWrite:!1,blending:Di,side:zt});for(let n=0;n<this.poolSlots;n++){const i=this.buildOutlineSlot();this.outlineSlots.push(i),this.group.add(i.group)}this.hideAll()}dispose(){this.geometry.dispose(),this.material.dispose(),this.outlineCoreMat.dispose(),this.outlineGlowMat.dispose();for(const e of this.outlineSlots)for(const t of e.group.children)t instanceof Ae&&(t.geometry.dispose(),t.material instanceof un&&t.material.dispose())}reset(){this.slotSeeded.fill(!1),this.hideAll()}hideAll(){const e=this.poolSlots*this.particlesPerVehicle,t=this.positions;for(let i=0;i<e;i++){const r=i*3;t[r]=0,t[r+1]=-400,t[r+2]=0}const n=this.geometry.attributes.position;n&&(n.needsUpdate=!0);for(const i of this.outlineSlots)i.group.visible=!1}buildOutlineSlot(){const e=new lt;e.visible=!1,e.renderOrder=3;const t=y.SLIPSTREAM_ZONE_WIDTH,n=y.SLIPSTREAM_ZONE_DEPTH,i=y.SLIPSTREAM_ZONE_OUTLINE_THICKNESS,r=i*y.SLIPSTREAM_ZONE_OUTLINE_GLOW_SCALE,o=t*.5,a=new xn(t,i),c=new xn(t,r),l=(T,A,S)=>{const C=new Ae(T.clone(),A.clone());C.rotation.x=-Math.PI/2,C.position.set(0,0,S),C.frustumCulled=!1,C.renderOrder=3,e.add(C)};l(c,this.outlineGlowMat,0),l(c,this.outlineGlowMat,-n),l(a,this.outlineCoreMat,0),l(a,this.outlineCoreMat,-n);const h=Math.max(2,y.SLIPSTREAM_ZONE_OUTLINE_DASHES_PER_SIDE),u=n/h,d=u*Math.max(.12,Math.min(.95,y.SLIPSTREAM_ZONE_OUTLINE_DASH_DUTY)),p=new xn(i,d),_=new xn(r,d*1.1),g=[],m=[],f=(T,A)=>{const S=A?_:p,C=A?this.outlineGlowMat:this.outlineCoreMat,w=new Ae(S.clone(),C.clone());return w.rotation.x=-Math.PI/2,w.position.set(T,0,0),w.frustumCulled=!1,w.renderOrder=3,e.add(w),w};for(let T=0;T<h;T++)g.push(f(-o,!0)),g.push(f(-o,!1)),m.push(f(o,!0)),m.push(f(o,!1));return{group:e,leftDashes:g,rightDashes:m,dashLength:d,cycleLength:u}}randomLXInStrip(e,t){const n=y.SLIPSTREAM_WIND_X_INSET,i=y.SLIPSTREAM_WIND_SIDE_STRIP_WIDTH,r=e-n,o=Math.max(.02,r-i),a=Math.random(),c=o+a*(r-o);return t*c}clampLX(e,t,n){const i=y.SLIPSTREAM_WIND_X_INSET,r=y.SLIPSTREAM_WIND_SIDE_STRIP_WIDTH,o=t-i,a=Math.max(.02,o-r);return n<0?Math.min(-a,Math.max(-o,e)):Math.min(o,Math.max(a,e))}seedSlot(e,t,n){const i=this.particlesPerVehicle,r=e*i,o=y.SLIPSTREAM_WIND_Y,a=y.SLIPSTREAM_WIND_Y_SPREAD;for(let c=0;c<i;c++){const l=r+c,h=l*2,u=c%2===0?-1:1;this.sideSign[l]=u,this.offsetXZ[h]=this.randomLXInStrip(t,u),this.offsetXZ[h+1]=-Math.random()*.22*n,this.particleY[l]=o+(Math.random()*2-1)*a}}updateOutlineDashes(e,t,n){const i=y.SLIPSTREAM_ZONE_OUTLINE_DASH_SPEED,r=Math.max(.001,t-e.dashLength),o=n*i%r,a=e.cycleLength,c=e.dashLength*.5,l=Math.floor(e.leftDashes.length/2);for(let h=0;h<l;h++){const d=-((h*a+o)%r)-c,p=e.leftDashes[h*2],_=e.leftDashes[h*2+1],g=e.rightDashes[h*2],m=e.rightDashes[h*2+1];p.position.z=d,_.position.z=d,g.position.z=d,m.position.z=d}}update(e,t,n){if(!t){this.points.visible=!1;for(const _ of this.outlineSlots)_.group.visible=!1;return}this.points.visible=!0;const i=y.SLIPSTREAM_ZONE_WIDTH,r=y.SLIPSTREAM_ZONE_DEPTH,o=i/2,a=y.SLIPSTREAM_WIND_DOWN_SPEED*e,c=y.SLIPSTREAM_WIND_TURBULENCE*e,l=this.particlesPerVehicle,h=this.positions,u=this.offsetXZ,d=performance.now()*.001;n.forEachPoolWindSlot((_,g,m,f,T,A)=>{const S=this.outlineSlots[_],C=_*l;if(!g||!m){S&&(S.group.visible=!1),this.slotSeeded[_]=!1;for(let b=0;b<l;b++){const I=(C+b)*3;h[I]=0,h[I+1]=-400,h[I+2]=0}return}const w=T-A;S&&y.SLIPSTREAM_ZONE_OUTLINE_ENABLED?(S.group.visible=!0,S.group.position.set(f,y.SLIPSTREAM_ZONE_OUTLINE_Y,w),this.updateOutlineDashes(S,r,d)):S&&(S.group.visible=!1),this.slotSeeded[_]||(this.seedSlot(_,o,r),this.slotSeeded[_]=!0);for(let b=0;b<l;b++){const I=C+b,M=I*2,E=this.sideSign[I];let L=u[M],H=u[M+1];L+=(Math.random()*2-1)*c,H-=a+(Math.random()*2-1)*c*.12,L=this.clampLX(L,o,E),H<-r&&(H=-Math.random()*.2*r,L=this.randomLXInStrip(o,E)),H>.03&&(H=-Math.random()*.08*r),u[M]=L,u[M+1]=H;const F=I*3;h[F]=f+L,h[F+1]=this.particleY[I],h[F+2]=w+H}});const p=this.geometry.attributes.position;p&&(p.needsUpdate=!0)}}class fx{constructor(){this.group=new lt,this.beams=[],this.tailL=new P,this.tailR=new P,this.boostActive=!1,this.group.name="SlingshotTrail";const e=y.SLINGSHOT_TRAIL_WIDTH*.75,t=Math.max(.04,y.SLINGSHOT_TRAIL_BOX_HEIGHT*.6),n=Math.max(12,y.SLINGSHOT_TRAIL_LENGTH*9),i=new nt(e,t,n);i.translate(0,0,-n*.5);for(const r of[y.PALETTE.SLINGSHOT_TRAIL_LEFT,y.PALETTE.SLINGSHOT_TRAIL_RIGHT]){const o=new hn({color:r,transparent:!0,opacity:0,depthWrite:!1}),a=new Ae(i,o);a.visible=!1,a.frustumCulled=!1,a.renderOrder=10,this.group.add(a),this.beams.push({mesh:a,material:o})}}reset(){this.boostActive=!1;for(const e of this.beams)e.mesh.visible=!1,e.material.opacity=0}setBoostActive(e){this.boostActive=e}updateBeamAnchors(e){e.getTailLightsWorldPositions(this.tailL,this.tailR);const t=this.beams[0],n=this.beams[1];t.mesh.position.copy(this.tailL),n.mesh.position.copy(this.tailR),t.mesh.rotation.set(0,0,0),n.mesh.rotation.set(0,0,0)}update(e,t,n){if(!this.boostActive){for(const r of this.beams)r.mesh.visible=!1,r.material.opacity=Math.max(0,r.material.opacity-e*7);return}this.updateBeamAnchors(n);const i=.82+.16*Math.sin(performance.now()*.02);for(const r of this.beams)r.mesh.visible=!0,r.material.opacity=i}}class px{constructor(){this.anchor=new lt,this.burstWindowActive=!1,this.spawnAcc=0,this.anchor.name="SlipstreamActivateBurst",this.count=y.SLIPSTREAM_ACTIVATE_BURST_COUNT,this.positions=new Float32Array(this.count*3),this.velocities=new Float32Array(this.count*3),this.ages=new Float32Array(this.count),this.lifetimes=new Float32Array(this.count);const e=new Mt;e.setAttribute("position",new mt(this.positions,3)),this.geometry=e,this.material=new Ds({color:y.SLIPSTREAM_ACTIVATE_BURST_COLOR,size:y.SLIPSTREAM_ACTIVATE_BURST_POINT_SIZE,transparent:!0,opacity:y.SLIPSTREAM_ACTIVATE_BURST_OPACITY,depthWrite:!1,sizeAttenuation:!0,blending:Di}),this.points=new Os(this.geometry,this.material),this.points.frustumCulled=!1,this.points.renderOrder=8,this.anchor.add(this.points),this.applyAnchorLocal(),this.hideAll()}dispose(){this.geometry.dispose(),this.material.dispose()}applyAnchorLocal(){const{height:e,length:t}=y.TAXI_DIMENSIONS;this.anchor.position.set(0,e*y.SLIPSTREAM_ACTIVATE_BURST_EMIT_Y_FRAC,-t*.5-y.SLIPSTREAM_ACTIVATE_BURST_EMIT_Z_INSET)}hideAll(){const e=this.count;for(let n=0;n<e;n++)this.positions[n*3+1]=-400,this.ages[n]=1e9;const t=this.geometry.attributes.position;t&&(t.needsUpdate=!0)}reset(){this.burstWindowActive=!1,this.spawnAcc=0,this.hideAll()}setBurstWindowActive(e){this.burstWindowActive=e,e||(this.spawnAcc=0)}burst(){this.applyAnchorLocal();const e=this.count;for(let n=0;n<e;n++)this.seedParticle(n);const t=this.geometry.attributes.position;t&&(t.needsUpdate=!0)}seedParticle(e){const t=e*3,n=y.SLIPSTREAM_ACTIVATE_BURST_SPREAD_X,i=y.SLIPSTREAM_ACTIVATE_BURST_SPREAD_Y,r=y.SLIPSTREAM_ACTIVATE_BURST_SPEED_MIN,o=y.SLIPSTREAM_ACTIVATE_BURST_SPEED_MAX,a=y.SLIPSTREAM_ACTIVATE_BURST_SCREEN_DOWN_Y;this.positions[t]=(Math.random()-.5)*2*n,this.positions[t+1]=(Math.random()-.5)*2*i,this.positions[t+2]=(Math.random()-.5)*.12;const c=r+Math.random()*(o-r),l=y.SLIPSTREAM_ACTIVATE_BURST_LATERAL_SCALE,h=(Math.random()-.5)*2*l*c,u=-c,d=a*c+(Math.random()-.5)*y.SLIPSTREAM_ACTIVATE_BURST_Y_JITTER;this.velocities[t]=h,this.velocities[t+1]=d,this.velocities[t+2]=u,this.ages[e]=0,this.lifetimes[e]=y.SLIPSTREAM_ACTIVATE_BURST_LIFE_MIN+Math.random()*(y.SLIPSTREAM_ACTIVATE_BURST_LIFE_MAX-y.SLIPSTREAM_ACTIVATE_BURST_LIFE_MIN)}pickSpawnIndex(){const e=this.count;for(let t=0;t<e;t++)if(this.ages[t]>=this.lifetimes[t])return t;return Math.floor(Math.random()*e)}update(e){if(this.applyAnchorLocal(),this.burstWindowActive)for(this.spawnAcc+=y.SLIPSTREAM_ACTIVATE_BURST_WINDOW_SPAWN_PER_SEC*e;this.spawnAcc>=1;){this.spawnAcc-=1;const c=this.pickSpawnIndex();this.seedParticle(c)}const t=Math.pow(y.SLIPSTREAM_ACTIVATE_BURST_DRAG,e*60),n=y.SLIPSTREAM_ACTIVATE_BURST_GRAVITY,i=this.count,r=this.positions,o=this.velocities;let a=!1;for(let c=0;c<i;c++){if(this.ages[c]>=this.lifetimes[c])continue;a=!0,this.ages[c]+=e;const l=c*3;o[l]*=t,o[l+1]=o[l+1]*t-n*e,o[l+2]*=t,r[l]+=o[l]*e,r[l+1]+=o[l+1]*e,r[l+2]+=o[l+2]*e,this.ages[c]>=this.lifetimes[c]&&(r[l+1]=-400)}if(a||this.burstWindowActive){const c=this.geometry.attributes.position;c&&(c.needsUpdate=!0)}}}function Bh(s,e){const t=y.SLIPSTREAM_ZONE_WIDTH,n=y.SLIPSTREAM_ZONE_DEPTH,i=e.cz-e.hz,r=i-n,o=i,a=e.cx-t/2,c=e.cx+t/2,l=s.cx-s.hx,h=s.cx+s.hx,u=s.cz-s.hz,d=s.cz+s.hz;return h>a&&l<c&&d>r&&u<o}class mx{constructor(){this.meter=0,this.wasInZone=!1,this.lastDraftTarget=null}get draftMeter(){return this.meter}reset(){this.meter=0,this.wasInZone=!1,this.lastDraftTarget=null}update(e,t,n,i){const r=n.getCollisionBounds(),o=i.getActiveCollisionBounds(),a=this.isPlayerInAnySlipstream(r,o),c=this.wasInZone&&!a;let l=!1,h=null;if(c&&this.meter>=1&&(l=!0,h=this.lastDraftTarget?{...this.lastDraftTarget}:null),a){const d=this.findDraftVehicle(r,o);if(d&&(this.lastDraftTarget={cx:d.cx,cz:d.cz,hx:d.hx,hz:d.hz}),this.meter<1){const p=Math.max(.25,t/y.BASE_SCROLL_SPEED),_=y.DRAFT_FILL_RATE*60*e*p;this.meter+=_,this.meter>1&&(this.meter=1)}}else this.meter=0;this.wasInZone=a;const u=l?1:a?Math.min(1,this.meter):0;return{inZone:a,meter:this.meter,slingshotFired:l,meterDisplay:u,slingshotTarget:h}}findDraftVehicle(e,t){for(const n of t)if(Bh(e,n))return n;return null}isPlayerInAnySlipstream(e,t){for(const n of t)if(Bh(e,n))return!0;return!1}}class _x{constructor(){this._chain=1,this._maxChainThisRun=1,this._lastDraftActivityMs=0,this._milestoneShown=new Set}get chain(){return this._chain}get maxChainThisRun(){return this._maxChainThisRun}reset(){this._chain=1,this._maxChainThisRun=1,this._lastDraftActivityMs=0,this._milestoneShown.clear()}tick(e,t){if(t){this._lastDraftActivityMs=e;return}e-this._lastDraftActivityMs>y.CHAIN_TIMEOUT&&(this._chain=1)}onSlingshot(e){return this._chain+=1,this._lastDraftActivityMs=e,this._chain>this._maxChainThisRun&&(this._maxChainThisRun=this._chain),y.CHAIN_MILESTONES.includes(this._chain)&&!this._milestoneShown.has(this._chain)?(this._milestoneShown.add(this._chain),this._chain):null}}class gx{constructor(){this.score=0,this.distanceAcc=0}get currentScore(){return Math.floor(this.score)}reset(){this.score=0,this.distanceAcc=0}addDistance(e,t){for(this.distanceAcc+=e;this.distanceAcc>=y.DISTANCE_SCORE_INTERVAL;)this.distanceAcc-=y.DISTANCE_SCORE_INTERVAL,this.score+=y.DISTANCE_SCORE_RATE*t}addSlingshotBonus(e){this.score+=y.CHAIN_SCORE_BASE*e}}class Sx{constructor(){this._onRetry=null,this._onMarket=null,this.container=document.getElementById("gameover"),this.finalScoreEl=document.getElementById("final-score"),this.newBestEl=document.getElementById("new-best"),this.chainEl=document.getElementById("stat-chain"),this.distanceEl=document.getElementById("stat-distance"),this.retryBtn=document.getElementById("retry-btn"),this.marketBtn=document.getElementById("market-btn"),this.retryBtn.addEventListener("click",()=>{var e;this.hide(),(e=this._onRetry)==null||e.call(this)}),this.marketBtn.addEventListener("click",()=>{var e;this.hide(),(e=this._onMarket)==null||e.call(this)})}onRetry(e){this._onRetry=e}onMarket(e){this._onMarket=e}show(e,t,n,i){this.finalScoreEl.textContent=e.toLocaleString(),this.chainEl.textContent=`×${t}`,this.distanceEl.textContent=`${(n/100).toFixed(1)}km`;const r=i.updateHighScore(e);this.newBestEl.style.display=r?"block":"none",this.container.classList.add("visible")}hide(){this.container.classList.remove("visible")}}function Hh(s){return`#${s.toString(16).padStart(6,"0")}`}class xx{constructor(e){this.currentTab="cars",this._onApply=null,this._onClose=null,this.unlockManager=e,this.pendingLoadout={...e.loadout},this.container=document.getElementById("market"),this.grid=document.getElementById("market-grid"),this.applyBtn=document.getElementById("market-apply-btn"),this.closeBtn=document.getElementById("market-close-btn"),this.highScoreEl=document.getElementById("market-highscore"),this.tabBtns=[document.getElementById("market-tab-cars"),document.getElementById("market-tab-body"),document.getElementById("market-tab-wheels")],this.tabBtns[0].addEventListener("click",()=>this.switchTab("cars")),this.tabBtns[1].addEventListener("click",()=>this.switchTab("body")),this.tabBtns[2].addEventListener("click",()=>this.switchTab("wheels")),this.applyBtn.addEventListener("click",()=>{var t;this.unlockManager.setLoadout(this.pendingLoadout),this.hide(),(t=this._onApply)==null||t.call(this,this.pendingLoadout)}),this.closeBtn.addEventListener("click",()=>{var t;this.hide(),(t=this._onClose)==null||t.call(this)})}onApply(e){this._onApply=e}onClose(e){this._onClose=e}show(){this.pendingLoadout={...this.unlockManager.loadout},this.highScoreEl.textContent=`BEST: ${this.unlockManager.highScore.toLocaleString()} PTS`,this.switchTab("cars"),this.container.classList.add("visible")}hide(){this.container.classList.remove("visible")}get isVisible(){return this.container.classList.contains("visible")}switchTab(e){this.currentTab=e;const t=["cars","body","wheels"];this.tabBtns.forEach((n,i)=>n.classList.toggle("active",t[i]===e)),this.renderGrid()}renderGrid(){var e;if(this.grid.innerHTML="",this.currentTab==="cars")for(const t of pc){const n=this.unlockManager.isCarUnlocked(t.id),i=this.pendingLoadout.carId===t.id,r=this.unlockManager.loadout.carId===t.id;this.grid.appendChild(this.buildCard({unlocked:n,selected:i,equipped:r,name:t.name,scoreLine:t.unlockScore===0?"FREE":`${t.unlockScore.toLocaleString()} PTS`,preview:this.carSvgPreview(t.id),onClick:n?()=>{this.pendingLoadout.carId=t.id,this.renderGrid()}:null}))}else if(this.currentTab==="body"){this.addSectionLabel("BODY COLOR");for(const t of Ls){const n=this.unlockManager.isBodyColorUnlocked(t.id),i=this.pendingLoadout.bodyColorId===t.id,r=this.unlockManager.loadout.bodyColorId===t.id;this.grid.appendChild(this.buildCard({unlocked:n,selected:i,equipped:r,name:t.name,scoreLine:t.unlockScore===0?"FREE":`${t.unlockScore.toLocaleString()} PTS`,preview:this.colorSwatchPreview(t.hex),onClick:n?()=>{this.pendingLoadout.bodyColorId=t.id,this.renderGrid()}:null}))}this.addSectionLabel("REAR WING");for(const t of gr){const n=this.unlockManager.isWingColorUnlocked(t.id),i=this.pendingLoadout.wingColorId===t.id,r=this.unlockManager.loadout.wingColorId===t.id,o=t.hex??((e=Ls.find(a=>a.id===this.pendingLoadout.bodyColorId))==null?void 0:e.hex)??15658994;this.grid.appendChild(this.buildCard({unlocked:n,selected:i,equipped:r,name:t.name,scoreLine:t.unlockScore===0?"FREE":`${t.unlockScore.toLocaleString()} PTS`,preview:this.colorSwatchPreview(o),onClick:n?()=>{this.pendingLoadout.wingColorId=t.id,this.renderGrid()}:null}))}}else for(const t of _r){const n=this.unlockManager.isWheelStyleUnlocked(t.id),i=this.pendingLoadout.wheelStyleId===t.id,r=this.unlockManager.loadout.wheelStyleId===t.id;this.grid.appendChild(this.buildCard({unlocked:n,selected:i,equipped:r,name:t.name,scoreLine:t.unlockScore===0?"FREE":`${t.unlockScore.toLocaleString()} PTS`,preview:this.wheelPreview(t.accent),onClick:n?()=>{this.pendingLoadout.wheelStyleId=t.id,this.renderGrid()}:null}))}}addSectionLabel(e){const t=document.createElement("div");t.className="market-section-label",t.textContent=e,this.grid.appendChild(t)}buildCard(e){const t=document.createElement("div");t.className="market-card",e.selected&&t.classList.add("selected"),e.unlocked||t.classList.add("locked"),t.appendChild(e.preview);const n=document.createElement("div");n.className="market-card-name",n.textContent=e.name,t.appendChild(n);const i=document.createElement("div");if(i.className="market-card-score",e.unlocked?e.selected?(i.classList.add("selected-score"),i.textContent="SELECTED"):e.equipped?(i.classList.add("equipped-score"),i.textContent="EQUIPPED"):(i.classList.add("unlocked-score"),i.textContent=e.scoreLine):(i.classList.add("locked-score"),i.textContent=e.scoreLine),t.appendChild(i),!e.unlocked){const r=document.createElement("div");r.className="market-lock-icon",r.textContent="🔒",t.appendChild(r)}return e.onClick&&t.addEventListener("click",e.onClick),t}carSvgPreview(e){const t=document.createElement("div");return t.className="market-card-preview",t.innerHTML=this.getCarSvg(e),t}colorSwatchPreview(e){const t=document.createElement("div");t.className="market-card-preview";const n=document.createElement("div");return n.className="market-swatch",n.style.background=Hh(e),t.appendChild(n),t}wheelPreview(e){const t=document.createElement("div");t.className="market-card-preview";const n=document.createElement("div");return n.className="market-swatch market-wheel",n.style.background=`radial-gradient(circle at 40% 40%, ${Hh(e)} 30%, #1a1a1e 70%)`,t.appendChild(n),t}getCarSvg(e){const i='viewBox="0 0 120 52" xmlns="http://www.w3.org/2000/svg"';switch(e){case"starter":return`<svg ${i}>
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
        </svg>`;default:return`<svg ${i}><rect x="25" y="16" width="60" height="14" rx="3" fill="currentColor"/></svg>`}}}const Gh=100;class Ex{constructor(){this.milestoneTimer=0,this.milestoneClassTimer=0,this.perfectFlashTimer=0,this.tmpProj=new P,this.milestoneEl=document.getElementById("milestone-text"),this.flashEl=document.getElementById("screen-flash");const e=document.getElementById("game-container");this.touchHintLeftEl=this.buildTouchHint("left"),this.touchHintRightEl=this.buildTouchHint("right"),e.append(this.touchHintLeftEl,this.touchHintRightEl)}buildTouchHint(e){const t=document.createElement("div"),n=e==="left"?"⬅":"➡";return t.textContent=n,t.style.cssText=["position:absolute","left:0","top:0",`width:${Gh}px`,`height:${Gh}px`,"border-radius:9999px","display:flex","align-items:center","justify-content:center","font-family:Orbitron, system-ui, sans-serif","font-size:48px","font-weight:900","line-height:1",`color:#${y.PALETTE.UI_TEXT.toString(16).padStart(6,"0")}`,`border:5px solid #${y.PALETTE.NEON_ORANGE.toString(16).padStart(6,"0")}`,`background:rgba(${y.PALETTE.ROAD_DARK>>16&255},${y.PALETTE.ROAD_DARK>>8&255},${y.PALETTE.ROAD_DARK&255},0.82)`,`box-shadow:0 0 0 2px ${Qt(y.PALETTE.UI_TEXT,.18)},0 0 18px #${y.PALETTE.NEON_ORANGE.toString(16).padStart(6,"0")},0 0 34px #${y.PALETTE.NEON_BLUE.toString(16).padStart(6,"0")}`,`text-shadow:0 0 6px #${y.PALETTE.NEON_BLUE.toString(16).padStart(6,"0")},0 0 14px #${y.PALETTE.NEON_BLUE.toString(16).padStart(6,"0")}`,"pointer-events:none","opacity:0","z-index:120","transition:opacity 120ms linear","transform:translate(-50%, -50%)"].join(";"),t}showMilestone(e,t=!1){window.clearTimeout(this.milestoneTimer),window.clearTimeout(this.milestoneClassTimer),this.milestoneEl.textContent=e,this.milestoneEl.classList.toggle("perfect",t),this.milestoneEl.style.opacity="1";const n=t?y.PERFECT_MILESTONE_HOLD_MS:1e3;this.milestoneTimer=window.setTimeout(()=>{this.milestoneEl.style.opacity="0",this.milestoneClassTimer=window.setTimeout(()=>{this.milestoneEl.classList.remove("perfect")},380)},n)}updateMilestoneAnchor(e,t,n){const i=t.getBoundingClientRect();if(this.tmpProj.copy(n).project(e),!Number.isFinite(this.tmpProj.x)||!Number.isFinite(this.tmpProj.y)||!Number.isFinite(this.tmpProj.z))return;const r=i.width*.5,o=(-this.tmpProj.y*.5+.5)*i.height;this.milestoneEl.style.left=`${r.toFixed(1)}px`,this.milestoneEl.style.top=`${o.toFixed(1)}px`}flashScreen(){this.flashEl.classList.remove("perfect-hit"),this.flashEl.style.opacity="1",window.setTimeout(()=>{this.flashEl.style.opacity="0"},y.SCREEN_FLASH_DURATION)}flashScreenPerfect(){window.clearTimeout(this.perfectFlashTimer),this.flashEl.classList.add("perfect-hit"),this.flashEl.style.opacity="1",window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{this.flashEl.style.opacity="0"})}),this.perfectFlashTimer=window.setTimeout(()=>{this.flashEl.classList.remove("perfect-hit")},y.PERFECT_FLASH_DURATION_MS+180)}updateTouchHints(e,t,n,i,r,o){if(!t||e>=5e3){this.touchHintLeftEl.style.opacity="0",this.touchHintRightEl.style.opacity="0";return}const c=i.getBoundingClientRect(),l=c.width*.22,h=c.width*.78,d=(-this.tmpProj.copy(r).project(n).y*.5+.5)*c.height,_=(-this.tmpProj.copy(o).project(n).y*.5+.5)*c.height,g=(d+_)*.5;this.touchHintLeftEl.style.left=`${l.toFixed(1)}px`,this.touchHintLeftEl.style.top=`${g.toFixed(1)}px`,this.touchHintRightEl.style.left=`${h.toFixed(1)}px`,this.touchHintRightEl.style.top=`${g.toFixed(1)}px`;const m=Math.floor(e/380)%2;this.touchHintLeftEl.style.opacity=m===0?"1":"0",this.touchHintRightEl.style.opacity=m===1?"1":"0"}reset(){window.clearTimeout(this.milestoneTimer),window.clearTimeout(this.milestoneClassTimer),window.clearTimeout(this.perfectFlashTimer),this.milestoneEl.classList.remove("perfect"),this.milestoneEl.style.opacity="0",this.flashEl.classList.remove("perfect-hit"),this.flashEl.style.opacity="0",this.touchHintLeftEl.style.opacity="0",this.touchHintRightEl.style.opacity="0"}}class Mx{constructor(e,t){this.playingInternal=!1,this.hasStarted=!1,this.curMix=0,this.speedT=0,this.BPM_MIN=110,this.BPM_MAX=160,this.beatAccSec=0,this.eighthAccSec=0,this.sixteenthAccSec=0,this.beatCount=0,this.section=0,this.BEATS_PER_SECTION=8,this.NUM_SECTIONS=4,this.bassPatterns=[[82.41,82.41,98,82.41,61.74,82.41,98,110],[65.41,65.41,82.41,98,65.41,82.41,98,130.81],[98,98,123.47,98,73.42,98,123.47,146.83],[110,110,130.81,110,82.41,110,130.81,82.41]],this.bassStep=0,this.arpPatterns=[[329.63,392,493.88,659.25,493.88,392,659.25,783.99],[261.63,329.63,392,523.25,392,329.63,523.25,659.25],[392,493.88,587.33,783.99,587.33,493.88,783.99,987.77],[440,523.25,659.25,880,659.25,523.25,880,659.25]],this.arpStep=0,this.leadMelody=[659.25,587.33,493.88,392,329.63,392,493.88,659.25,523.25,587.33,659.25,783.99,659.25,587.33,523.25,493.88,783.99,739.99,659.25,587.33,493.88,587.33,783.99,880,880,783.99,659.25,523.25,440,493.88,587.33,659.25],this.leadStep=0,this.padChords=[[164.81,246.94],[130.81,196],[196,293.66],[220,329.63]],this.ctx=e,this.mix=e.createGain(),this.mix.gain.value=0,this.mix.connect(t)}build(){const e=this.ctx,t=this.mix,n=Math.floor(e.sampleRate*.035);this.hatNoise=e.createBuffer(1,n,e.sampleRate);const i=this.hatNoise.getChannelData(0);for(let c=0;c<n;c++)i[c]=(Math.random()*2-1)*(1-c/n)**1.5;const r=Math.floor(e.sampleRate*.08);this.snareNoise=e.createBuffer(1,r,e.sampleRate);const o=this.snareNoise.getChannelData(0);for(let c=0;c<r;c++)o[c]=(Math.random()*2-1)*(1-c/r)**.8;this.kickOsc=e.createOscillator(),this.kickOsc.type="sine",this.kickOsc.frequency.value=60,this.kickAmp=e.createGain(),this.kickAmp.gain.value=1e-4,this.kickOsc.connect(this.kickAmp).connect(t),this.kickOsc.start(0),this.hatBus=e.createGain(),this.hatBus.gain.value=0,this.hatBus.connect(t),this.snareBus=e.createGain(),this.snareBus.gain.value=0,this.snareBus.connect(t),this.bassOsc=e.createOscillator(),this.bassOsc.type="sawtooth",this.bassOsc.frequency.value=this.bassPatterns[0][0],this.bassFilter=e.createBiquadFilter(),this.bassFilter.type="lowpass",this.bassFilter.frequency.value=200,this.bassFilter.Q.value=1.5,this.bassGain=e.createGain(),this.bassGain.gain.value=.18,this.bassOsc.connect(this.bassFilter).connect(this.bassGain).connect(t),this.bassOsc.start(0),this.arpOsc=e.createOscillator(),this.arpOsc.type="triangle",this.arpOsc.frequency.value=this.arpPatterns[0][0],this.arpFilter=e.createBiquadFilter(),this.arpFilter.type="lowpass",this.arpFilter.frequency.value=600,this.arpFilter.Q.value=2,this.arpGain=e.createGain(),this.arpGain.gain.value=0,this.arpOsc.connect(this.arpFilter).connect(this.arpGain).connect(t),this.arpOsc.start(0),this.leadOsc=e.createOscillator(),this.leadOsc.type="sine",this.leadOsc.frequency.value=this.leadMelody[0],this.leadFilter=e.createBiquadFilter(),this.leadFilter.type="lowpass",this.leadFilter.frequency.value=800,this.leadFilter.Q.value=1.5,this.leadGain=e.createGain(),this.leadGain.gain.value=0,this.leadOsc.connect(this.leadFilter).connect(this.leadGain).connect(t),this.leadOsc.start(0),this.padFilter=e.createBiquadFilter(),this.padFilter.type="lowpass",this.padFilter.frequency.value=300,this.padFilter.Q.value=.7,this.padGain=e.createGain(),this.padGain.gain.value=.06,this.padFilter.connect(this.padGain).connect(t),this.padOsc1=e.createOscillator(),this.padOsc1.type="sine",this.padOsc1.frequency.value=this.padChords[0][0],this.padOsc1.connect(this.padFilter),this.padOsc1.start(0),this.padOsc2=e.createOscillator(),this.padOsc2.type="sine",this.padOsc2.frequency.value=this.padChords[0][1];const a=e.createGain();a.gain.value=.7,this.padOsc2.connect(a).connect(this.padFilter),this.padOsc2.start(0)}update(e,t,n){t&&(this.hasStarted=!0),this.playingInternal=this.hasStarted,this.speedT=t?Math.max(0,Math.min(1,n)):0;const i=Math.min(1,12*e),r=this.hasStarted?1:0;this.curMix+=(r-this.curMix)*i,this.mix.gain.value=this.curMix;const a=60/(this.BPM_MIN+this.speedT*(this.BPM_MAX-this.BPM_MIN)),c=a/2,l=a/4;this.beatAccSec+=e,this.eighthAccSec+=e,this.sixteenthAccSec+=e;const h=this.ctx.currentTime;if(this.beatAccSec>=a){this.beatAccSec-=a,this.beatCount++,this.triggerKick(),this.leadStep=(this.leadStep+1)%this.leadMelody.length,this.leadOsc.frequency.setTargetAtTime(this.leadMelody[this.leadStep],h,.03);const M=this.BEATS_PER_SECTION*this.NUM_SECTIONS,E=Math.floor(this.beatCount%M/this.BEATS_PER_SECTION);E!==this.section&&(this.section=E,this.bassStep=0,this.arpStep=0,this.padOsc1.frequency.setTargetAtTime(this.padChords[this.section][0],h,.3),this.padOsc2.frequency.setTargetAtTime(this.padChords[this.section][1],h,.3))}if(this.eighthAccSec>=c){this.eighthAccSec-=c,this.triggerHat();const M=this.bassPatterns[this.section];this.bassStep=(this.bassStep+1)%M.length,this.bassOsc.frequency.setTargetAtTime(M[this.bassStep],h,.02),this.beatCount%2===0&&this.triggerSnare()}if(this.sixteenthAccSec>=l){this.sixteenthAccSec-=l;const M=this.arpPatterns[this.section];this.arpStep=(this.arpStep+1)%M.length,this.arpOsc.frequency.setTargetAtTime(M[this.arpStep],h,.01)}const u=this.speedT,d=this.curMix,p=(.15+u*.25)*d;this.hatBus.gain.value+=(p-this.hatBus.gain.value)*i;const _=Math.max(0,(u-.25)/.75)*.3*d;this.snareBus.gain.value+=(_-this.snareBus.gain.value)*i;const g=200+u*400;this.bassFilter.frequency.setTargetAtTime(g,h,.1);const m=(.14+u*.08)*d;this.bassGain.gain.value+=(m-this.bassGain.gain.value)*i;const f=Math.max(0,(u-.4)/.6),T=600+f*2e3;this.arpFilter.frequency.setTargetAtTime(T,h,.1);const A=f*.08*d;this.arpGain.gain.value+=(A-this.arpGain.gain.value)*i;const S=Math.max(0,(u-.3)/.5),C=800+S*2500;this.leadFilter.frequency.setTargetAtTime(C,h,.1);const w=S*.07*d;this.leadGain.gain.value+=(w-this.leadGain.gain.value)*i;const b=300+u*600;this.padFilter.frequency.setTargetAtTime(b,h,.15);const I=(.04+u*.04)*d;this.padGain.gain.value+=(I-this.padGain.gain.value)*i}triggerKick(){if(!this.playingInternal)return;const e=this.ctx.currentTime,t=.25+this.speedT*.15;this.kickOsc.frequency.cancelScheduledValues(e),this.kickOsc.frequency.setValueAtTime(80,e),this.kickOsc.frequency.exponentialRampToValueAtTime(30,e+.07),this.kickAmp.gain.cancelScheduledValues(e),this.kickAmp.gain.setValueAtTime(t,e),this.kickAmp.gain.exponentialRampToValueAtTime(1e-4,e+.09)}triggerHat(){if(!this.playingInternal)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.hatNoise;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;const i=this.ctx.createGain();i.gain.value=.12+this.speedT*.08,t.connect(n).connect(i).connect(this.hatBus),t.start(e),t.stop(e+.04)}triggerSnare(){if(!this.playingInternal||this.speedT<.25)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.snareNoise;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=2e3;const i=this.ctx.createGain();i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.08),t.connect(n).connect(i).connect(this.snareBus),t.start(e),t.stop(e+.08);const r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(200,e),r.frequency.exponentialRampToValueAtTime(80,e+.04);const o=this.ctx.createGain();o.gain.setValueAtTime(.18,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.05),r.connect(o).connect(this.snareBus),r.start(e),r.stop(e+.06)}}class Tx{constructor(){this.ctx=null,this.master=null,this.sfxBus=null,this.musicBus=null,this.music=null,this.loopsBuilt=!1,this.bgMusicEl=null,this.bgMusicSource=null,this.bgMusicGain=null,this.appFocused=!0,this.engineOsc=null,this.engineOsc2=null,this.engineOsc3=null,this.engineFilter=null,this.engineGain=null,this.turboSrc=null,this.turboFilter=null,this.turboGain=null,this.windSrc=null,this.windFilter=null,this.windGain=null,this.draftOsc=null,this.draftGain=null,this.trafficVoices=[],this.muted=!1,this.musicMuted=!1}unlock(){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx||(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=y.AUDIO_MASTER,this.master.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=1,this.sfxBus.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=y.AUDIO_MUSIC_MASTER,this.musicBus.connect(this.master),this.buildLoops()),this.ctx&&this.master&&this.bgMusicEl&&!this.bgMusicSource&&(this.bgMusicSource=this.ctx.createMediaElementSource(this.bgMusicEl),this.bgMusicGain=this.ctx.createGain(),this.bgMusicGain.gain.value=0,this.bgMusicSource.connect(this.bgMusicGain),this.bgMusicGain.connect(this.master),this.bgMusicEl.volume=1,this.bgMusicEl.muted=!1),this.applyFocusState())}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:y.AUDIO_MASTER),this.bgMusicEl&&(this.bgMusicEl.muted=e)}isMuted(){return this.muted}setMusicMuted(e){this.musicMuted=e,this.musicBus&&(this.musicBus.gain.value=e?0:y.AUDIO_MUSIC_MASTER)}isMusicMuted(){return this.musicMuted}setAppFocused(e){this.appFocused=e,this.applyFocusState()}applyFocusState(){this.ctx&&(this.appFocused?this.ctx.resume():this.ctx.suspend()),this.bgMusicEl&&(this.appFocused&&y.AUDIO_BG_MUSIC_ENABLED||this.bgMusicEl.pause())}buildLoops(){if(!this.ctx||!this.sfxBus||!this.musicBus||this.loopsBuilt)return;this.loopsBuilt=!0;const e=this.ctx,t=this.sfxBus,n=e.createGain();n.gain.value=1,this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=y.AUDIO_ENGINE_FILTER_HZ,this.engineFilter.Q.value=2.5,this.engineGain=e.createGain(),this.engineGain.gain.value=0,n.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(t),this.engineOsc=e.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=y.AUDIO_ENGINE_HZ_MIN;const i=e.createGain();i.gain.value=.5,this.engineOsc.connect(i),i.connect(n),this.engineOsc2=e.createOscillator(),this.engineOsc2.type="square",this.engineOsc2.frequency.value=y.AUDIO_ENGINE_HZ_MIN*2;const r=e.createGain();r.gain.value=.3,this.engineOsc2.connect(r),r.connect(n),this.engineOsc3=e.createOscillator(),this.engineOsc3.type="sawtooth",this.engineOsc3.frequency.value=y.AUDIO_ENGINE_HZ_MIN*3;const o=e.createGain();o.gain.value=.15,this.engineOsc3.connect(o),o.connect(n);const a=this.makeNoiseBuffer(2);this.turboSrc=e.createBufferSource(),this.turboSrc.buffer=a,this.turboSrc.loop=!0,this.turboFilter=e.createBiquadFilter(),this.turboFilter.type="bandpass",this.turboFilter.frequency.value=3e3,this.turboFilter.Q.value=5,this.turboGain=e.createGain(),this.turboGain.gain.value=0,this.turboSrc.connect(this.turboFilter),this.turboFilter.connect(this.turboGain),this.turboGain.connect(t);const c=this.makeNoiseBuffer(y.AUDIO_WIND_NOISE_SEC);this.windSrc=e.createBufferSource(),this.windSrc.buffer=c,this.windSrc.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=y.AUDIO_WIND_FILTER_HZ,this.windGain=e.createGain(),this.windGain.gain.value=0,this.windSrc.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(t),this.draftOsc=e.createOscillator(),this.draftOsc.type="sine",this.draftOsc.frequency.value=y.AUDIO_DRAFT_HZ,this.draftGain=e.createGain(),this.draftGain.gain.value=0,this.draftOsc.connect(this.draftGain),this.draftGain.connect(t),this.engineOsc.start(0),this.engineOsc2.start(0),this.engineOsc3.start(0),this.turboSrc.start(0),this.draftOsc.start(0),this.windSrc.start(0);for(let l=0;l<y.AUDIO_TRAFFIC_VOICES;l++){const h=y.AUDIO_TRAFFIC_HZ_BASE+(Math.random()*2-1)*y.AUDIO_TRAFFIC_HZ_VARIATION,u=e.createGain();u.gain.value=1;const d=e.createOscillator();d.type="sawtooth",d.frequency.value=h;const p=e.createGain();p.gain.value=.75,d.connect(p),p.connect(u);const _=e.createOscillator();_.type="square",_.frequency.value=h*2;const g=e.createGain();g.gain.value=.45,_.connect(g),g.connect(u);const m=e.createOscillator();m.type="sawtooth",m.frequency.value=h*3;const f=e.createGain();f.gain.value=.2,m.connect(f),f.connect(u);const T=e.createBiquadFilter();T.type="lowpass",T.frequency.value=y.AUDIO_TRAFFIC_FILTER_HZ,T.Q.value=1.5;const A=e.createGain();A.gain.value=0;const S=new StereoPannerNode(e);u.connect(T),T.connect(A),A.connect(S),S.connect(t),d.start(0),_.start(0),m.start(0),this.trafficVoices.push({osc1:d,osc2:_,osc3:m,filter:T,gain:A,panner:S,baseHz:h})}this.music=new Mx(e,this.musicBus),this.music.build()}makeNoiseBuffer(e){const t=this.ctx,n=Math.max(1,Math.floor(t.sampleRate*e)),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let o=0;o<n;o++)r[o]=Math.random()*2-1;return i}update(e,t){var d,p,_;this.bgMusicGain&&(this.bgMusicGain.gain.value=0),this.bgMusicEl&&(this.bgMusicSource||(this.bgMusicEl.volume=y.AUDIO_BG_MUSIC_VOLUME,this.bgMusicEl.muted=!0));const n=y.BASE_SCROLL_SPEED,i=y.MAX_SCROLL_SPEED,r=Math.max(1e-6,i-n),o=Math.max(0,Math.min(1,(t.scrollPerFrame-n)/r));if((d=this.music)==null||d.update(e,t.playing,o),this.musicBus&&!this.musicMuted&&(this.musicBus.gain.value=y.AUDIO_MUSIC_MASTER),!this.ctx||!this.engineGain||!this.windGain||!this.draftGain||!this.engineOsc)return;const a=this.ctx.currentTime;{let g=y.AUDIO_ENGINE_HZ_MIN+o*(y.AUDIO_ENGINE_HZ_MAX-y.AUDIO_ENGINE_HZ_MIN);if(t.burstActive&&(g+=y.AUDIO_ENGINE_BURST_HZ_ADD),this.engineOsc.frequency.setTargetAtTime(g,a,.05),(p=this.engineOsc2)==null||p.frequency.setTargetAtTime(g*2,a,.05),(_=this.engineOsc3)==null||_.frequency.setTargetAtTime(g*3,a,.05),this.engineFilter){const m=800+o*(y.AUDIO_ENGINE_FILTER_HZ-800);this.engineFilter.frequency.setTargetAtTime(m,a,.08)}if(this.turboFilter&&this.turboGain){const m=2e3+o*4e3;this.turboFilter.frequency.setTargetAtTime(m,a,.1);const f=t.playing?.04+o*.08:0;this.turboGain.gain.value+=(f-this.turboGain.gain.value)*Math.min(1,6*e)}}const c=t.playing&&y.AUDIO_ENGINE_ENABLED?y.AUDIO_ENGINE_GAIN*(y.AUDIO_ENGINE_GAIN_MIN_MIX+(1-y.AUDIO_ENGINE_GAIN_MIN_MIX)*o)*(t.burstActive?y.AUDIO_ENGINE_BURST_GAIN_MUL:1):0,l=t.playing?y.AUDIO_WIND_GAIN*(y.AUDIO_WIND_MIN_MIX+(1-y.AUDIO_WIND_MIN_MIX)*o):0,h=t.playing&&t.inDraft?y.AUDIO_DRAFT_GAIN*(y.AUDIO_DRAFT_MIN_MIX+(1-y.AUDIO_DRAFT_MIN_MIX)*t.draftMeter):0,u=Math.min(1,y.AUDIO_LOOP_SMOOTH*e);this.engineGain.gain.value+=(c-this.engineGain.gain.value)*u,this.windGain.gain.value+=(l-this.windGain.gain.value)*u,this.draftGain.gain.value+=(h-this.draftGain.gain.value)*u}updateTrafficEngines(e,t,n,i,r){const o=this.trafficVoices.length;if(!this.ctx||o===0)return;const a=t&&y.AUDIO_ENABLED&&y.AUDIO_TRAFFIC_ENABLED,c=r.length>>1,l=y.AUDIO_TRAFFIC_MAX_DISTANCE,h=y.AUDIO_TRAFFIC_MAX_GAIN,u=y.AUDIO_TRAFFIC_PAN_RANGE,d=y.AUDIO_TRAFFIC_DOPPLER_STRENGTH,p=y.AUDIO_TRAFFIC_DOPPLER_REF_DIST,_=Math.min(1,y.AUDIO_TRAFFIC_SMOOTH*e),g=this.ctx.currentTime,m=[];for(let f=0;f<c;f++){const T=r[f*2]-n,A=r[f*2+1]-i;m.push({ci:f,dist:Math.sqrt(T*T+A*A)})}m.sort((f,T)=>f.dist-T.dist);for(let f=0;f<o;f++){const T=this.trafficVoices[f],A=f<m.length?m[f]:null;let S=0,C=0,w=T.baseHz;if(A&&a&&A.dist<l){const b=A.ci,I=r[b*2]-n,M=r[b*2+1]-i,E=Math.max(0,1-A.dist/l);S=h*E**1.2,C=Math.max(-1,Math.min(1,I/u));const L=1+d*Math.max(-1,Math.min(1,M/p));w=T.baseHz*L}T.gain.gain.value+=(S-T.gain.gain.value)*_,T.panner.pan.value+=(C-T.panner.pan.value)*_,T.osc1.frequency.setTargetAtTime(w,g,.05),T.osc2.frequency.setTargetAtTime(w*2,g,.05),T.osc3.frequency.setTargetAtTime(w*3,g,.05)}}playChainUp(e){if(!this.ctx||!this.sfxBus)return;const t=this.ctx,n=this.sfxBus,i=t.currentTime,r=440+Math.min(e,25)*28,o=.12,a=t.createOscillator();a.type="sine",a.frequency.setValueAtTime(r,i),a.frequency.exponentialRampToValueAtTime(r*1.25,i+o*.6);const c=t.createGain();c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.28,i+.008),c.gain.exponentialRampToValueAtTime(1e-4,i+o),a.connect(c),c.connect(n),a.start(i),a.stop(i+o+.02);const l=t.createOscillator();l.type="triangle",l.frequency.setValueAtTime(r*1.5,i),l.frequency.exponentialRampToValueAtTime(r*1.8,i+o*.6);const h=t.createGain();h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(.14,i+.008),h.gain.exponentialRampToValueAtTime(1e-4,i+o),l.connect(h),h.connect(n),l.start(i),l.stop(i+o+.02)}playSlingshot(){if(!this.ctx||!this.sfxBus)return;const e=this.ctx,t=e.currentTime,n=y.AUDIO_SLINGSHOT_DURATION,i=Math.floor(e.sampleRate*n),r=e.createBuffer(1,i,e.sampleRate),o=r.getChannelData(0);for(let h=0;h<i;h++){const u=1-h/i;o[h]=(Math.random()*2-1)*u}const a=e.createBufferSource();a.buffer=r;const c=e.createBiquadFilter();c.type="bandpass",c.Q.value=1.2,c.frequency.setValueAtTime(y.AUDIO_SLINGSHOT_BP_HZ_START,t),c.frequency.exponentialRampToValueAtTime(y.AUDIO_SLINGSHOT_BP_HZ_END,t+n);const l=e.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(y.AUDIO_SLINGSHOT_GAIN,t+.02),l.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(c),c.connect(l),l.connect(this.sfxBus),a.start(t),a.stop(t+n+.04)}playMilestone(e){if(!this.ctx||!this.sfxBus)return;const t=this.ctx,n=y.AUDIO_MILESTONE_GAIN,i=(r,o,a)=>{const c=t.createOscillator();c.type="sine",c.frequency.value=r;const l=t.createGain(),h=t.currentTime+o;l.gain.setValueAtTime(0,h),l.gain.linearRampToValueAtTime(n,h+.012),l.gain.exponentialRampToValueAtTime(1e-4,h+a),c.connect(l),l.connect(this.sfxBus),c.start(h),c.stop(h+a+.06)};e===5?i(523.25,0,.2):e===10?(i(659.25,0,.22),i(987.77,0,.22)):e===15?(i(523.25,0,.09),i(659.25,.08,.09),i(783.99,.16,.09),i(1046.5,.24,.14)):e>=20&&(i(587.33,0,.28),i(739.99,0,.28),i(880,0,.28),i(1174.66,0,.3))}playLaneSwitch(){if(!this.ctx||!this.sfxBus)return;const e=this.ctx,t=this.sfxBus,n=e.currentTime,i=.22,r=Math.floor(e.sampleRate*i),o=e.createBuffer(1,r,e.sampleRate),a=o.getChannelData(0);for(let T=0;T<r;T++){const A=Math.min(1,T/(r*.05))*(1-T/r)**.8;a[T]=(Math.random()*2-1)*A}const c=e.createBufferSource();c.buffer=o;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(3200,n),l.frequency.exponentialRampToValueAtTime(1800,n+i),l.Q.value=3;const h=e.createGain();h.gain.setValueAtTime(.28,n),h.gain.exponentialRampToValueAtTime(1e-4,n+i),c.connect(l),l.connect(h),h.connect(t),c.start(n),c.stop(n+i+.02);const u=.15,d=e.createOscillator();d.type="sawtooth",d.frequency.setValueAtTime(1400+Math.random()*400,n),d.frequency.exponentialRampToValueAtTime(600,n+u);const p=e.createBiquadFilter();p.type="bandpass",p.frequency.value=1200,p.Q.value=4;const _=e.createGain();_.gain.setValueAtTime(.1,n),_.gain.exponentialRampToValueAtTime(1e-4,n+u),d.connect(p),p.connect(_),_.connect(t),d.start(n),d.stop(n+u+.02);const g=.1,m=e.createOscillator();m.type="sine",m.frequency.setValueAtTime(140,n),m.frequency.exponentialRampToValueAtTime(50,n+g);const f=e.createGain();f.gain.setValueAtTime(.2,n),f.gain.exponentialRampToValueAtTime(1e-4,n+g),m.connect(f),f.connect(t),m.start(n),m.stop(n+g+.02)}playFlyby(){if(!this.ctx||!this.sfxBus)return;const e=this.ctx,t=this.sfxBus,n=e.currentTime,i=1.4,r=.35,o=e.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(350,n),o.frequency.exponentialRampToValueAtTime(220,n+r),o.frequency.exponentialRampToValueAtTime(90,n+i);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(4e3,n),a.frequency.setValueAtTime(6e3,n+r),a.frequency.exponentialRampToValueAtTime(1500,n+i),a.Q.value=1.5;const c=e.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(.35,n+r*.7),c.gain.setValueAtTime(.35,n+r),c.gain.exponentialRampToValueAtTime(1e-4,n+i),o.connect(a),a.connect(c),c.connect(t),o.start(n),o.stop(n+i+.02);const l=e.createOscillator();l.type="square",l.frequency.setValueAtTime(700,n),l.frequency.exponentialRampToValueAtTime(440,n+r),l.frequency.exponentialRampToValueAtTime(180,n+i);const h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=1200,h.Q.value=2;const u=e.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.linearRampToValueAtTime(.15,n+r*.7),u.gain.setValueAtTime(.15,n+r),u.gain.exponentialRampToValueAtTime(1e-4,n+i),l.connect(h),h.connect(u),u.connect(t),l.start(n),l.stop(n+i+.02);const d=e.createOscillator();d.type="sine",d.frequency.setValueAtTime(5e3,n),d.frequency.exponentialRampToValueAtTime(3e3,n+r),d.frequency.exponentialRampToValueAtTime(1200,n+i);const p=e.createGain();p.gain.setValueAtTime(1e-4,n),p.gain.linearRampToValueAtTime(.06,n+r*.7),p.gain.exponentialRampToValueAtTime(1e-4,n+i),d.connect(p),p.connect(t),d.start(n),d.stop(n+i+.02);const _=.8,g=Math.floor(e.sampleRate*_),m=e.createBuffer(1,g,e.sampleRate),f=m.getChannelData(0);for(let w=0;w<g;w++){const b=Math.sin(w/g*Math.PI);f[w]=(Math.random()*2-1)*b}const T=e.createBufferSource();T.buffer=m;const A=e.createBiquadFilter();A.type="bandpass",A.Q.value=.8,A.frequency.setValueAtTime(3e3,n+r-.15),A.frequency.exponentialRampToValueAtTime(400,n+r+_-.15);const S=e.createGain(),C=r-.15;S.gain.setValueAtTime(1e-4,n),S.gain.linearRampToValueAtTime(.3,n+C+_*.25),S.gain.exponentialRampToValueAtTime(1e-4,n+C+_),T.connect(A),A.connect(S),S.connect(t),T.start(n+Math.max(0,C)),T.stop(n+C+_+.02)}playLightRed(){if(!this.ctx||!this.sfxBus)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(440,t),n.frequency.setValueAtTime(440,t+.06);const i=e.createGain();i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.001,t+.12),n.connect(i),i.connect(this.sfxBus),n.start(t),n.stop(t+.15)}playLightGreen(){if(!this.ctx||!this.sfxBus)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(880,t);const i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(1320,t);const r=e.createGain();r.gain.setValueAtTime(.4,t),r.gain.linearRampToValueAtTime(.4,t+.08),r.gain.exponentialRampToValueAtTime(.001,t+.25),n.connect(r),i.connect(r),r.connect(this.sfxBus),n.start(t),i.start(t),n.stop(t+.28),i.stop(t+.28)}playWhoosh(e){if(!this.ctx||!this.sfxBus)return;const t=this.ctx,n=this.sfxBus,i=t.currentTime,r=.7+e*.3,o=.35-e*.12,a=Math.floor(t.sampleRate*o),c=t.createBuffer(1,a,t.sampleRate),l=c.getChannelData(0);for(let g=0;g<a;g++){const m=Math.sin(g/a*Math.PI);l[g]=(Math.random()*2-1)*m}const h=t.createBufferSource();h.buffer=c;const u=t.createBiquadFilter();u.type="bandpass",u.Q.value=1.2,u.frequency.setValueAtTime(2e3+e*2e3,i),u.frequency.exponentialRampToValueAtTime(300+e*200,i+o);const d=t.createGain();d.gain.setValueAtTime(1e-4,i),d.gain.linearRampToValueAtTime(.4*r,i+o*.25),d.gain.exponentialRampToValueAtTime(1e-4,i+o),h.connect(u),u.connect(d),d.connect(n),h.start(i),h.stop(i+o+.02);const p=t.createOscillator();p.type="sine",p.frequency.setValueAtTime(80,i),p.frequency.exponentialRampToValueAtTime(35,i+.08);const _=t.createGain();_.gain.setValueAtTime(.22*r,i),_.gain.exponentialRampToValueAtTime(1e-4,i+.1),p.connect(_),_.connect(n),p.start(i),p.stop(i+.12)}playCrash(){if((!this.ctx||!this.sfxBus)&&(this.unlock(),!this.ctx||!this.sfxBus))return;const e=this.ctx,t=this.sfxBus,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(100,n),i.frequency.exponentialRampToValueAtTime(20,n+.5);const r=e.createGain();r.gain.setValueAtTime(.65,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.5),i.connect(r),r.connect(t),i.start(n),i.stop(n+.52);const o=e.createOscillator();o.type="triangle",o.frequency.setValueAtTime(55,n+.02),o.frequency.exponentialRampToValueAtTime(18,n+.4);const a=e.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.45,n+.025),a.gain.exponentialRampToValueAtTime(1e-4,n+.4),o.connect(a),a.connect(t),o.start(n),o.stop(n+.42);const c=.35,l=Math.floor(e.sampleRate*c),h=e.createBuffer(1,l,e.sampleRate),u=h.getChannelData(0);for(let k=0;k<l;k++){const Q=(1-k/l)**.5;u[k]=(Math.random()*2-1)*Q}const d=e.createBufferSource();d.buffer=h;const p=e.createBiquadFilter();p.type="bandpass",p.frequency.setValueAtTime(2800,n),p.frequency.exponentialRampToValueAtTime(600,n+c),p.Q.value=2.2;const _=e.createGain();_.gain.setValueAtTime(.55,n),_.gain.exponentialRampToValueAtTime(1e-4,n+c),d.connect(p),p.connect(_),_.connect(t),d.start(n),d.stop(n+c+.02);const g=.6,m=Math.floor(e.sampleRate*g),f=e.createBuffer(1,m,e.sampleRate),T=f.getChannelData(0);for(let k=0;k<m;k++){const Q=(1-k/m)**1.4,Se=Math.random()>.65?1:.2;T[k]=(Math.random()*2-1)*Q*Se}const A=e.createBufferSource();A.buffer=f;const S=e.createBiquadFilter();S.type="highpass",S.frequency.value=4e3,S.Q.value=.6;const C=e.createGain();C.gain.setValueAtTime(0,n),C.gain.linearRampToValueAtTime(.32,n+.03),C.gain.exponentialRampToValueAtTime(1e-4,n+g),A.connect(S),S.connect(C),C.connect(t),A.start(n),A.stop(n+g+.02);const w=.04,b=Math.floor(e.sampleRate*w),I=e.createBuffer(1,b,e.sampleRate),M=I.getChannelData(0);for(let k=0;k<b;k++){const Q=(1-k/b)**4;M[k]=Math.sign(Math.random()-.5)*Q}const E=e.createBufferSource();E.buffer=I;const L=e.createGain();L.gain.setValueAtTime(.7,n),L.gain.exponentialRampToValueAtTime(1e-4,n+w),E.connect(L),L.connect(t),E.start(n),E.stop(n+w+.02);const H=.55,F=e.createOscillator();F.type="sawtooth",F.frequency.setValueAtTime(1100,n),F.frequency.exponentialRampToValueAtTime(350,n+H);const q=e.createBiquadFilter();q.type="bandpass",q.frequency.value=800,q.Q.value=4;const Y=e.createGain();Y.gain.setValueAtTime(.2,n),Y.gain.exponentialRampToValueAtTime(1e-4,n+H),F.connect(q),q.connect(Y),Y.connect(t),F.start(n),F.stop(n+H+.02);const W=.08,j=.4,V=Math.floor(e.sampleRate*j),ne=e.createBuffer(1,V,e.sampleRate),ue=ne.getChannelData(0);for(let k=0;k<V;k++){const Q=(1-k/V)**.8,Se=Math.sin(k/e.sampleRate*Math.PI*2*1800);ue[k]=(Math.random()*2-1)*Q*.5+Se*Q*.5}const me=e.createBufferSource();me.buffer=ne;const Pe=e.createBiquadFilter();Pe.type="bandpass",Pe.frequency.value=1600,Pe.Q.value=3;const Xe=e.createGain();Xe.gain.setValueAtTime(0,n),Xe.gain.linearRampToValueAtTime(.25,n+W),Xe.gain.exponentialRampToValueAtTime(1e-4,n+W+j),me.connect(Pe),Pe.connect(Xe),Xe.connect(t),me.start(n),me.stop(n+W+j+.02)}}const rs=600,so=3,Ax=.14,vx=.8,yx=.02,ro=.55,zh=.03,kh=.3,bx=.015,Vh=3,Rx=45,wx=`
  attribute float aAlpha;
  varying float vAlpha;
  void main() {
    vAlpha = aAlpha;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`,Ix=`
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
  }
`;class Cx{constructor(){this.group=new lt,this.marks=[],this.dummy=new ut,this.nextSlot=0,this.spawnAcc=0,this.spawnInterval=.04,this.playerSpawnAcc=0,this.playerZ=0,this.group.name="TireMarks";const e=new xn(Ax,vx);e.rotateX(-Math.PI/2);const t=new Float32Array(rs);this.alphaAttr=new vo(t,1),this.alphaAttr.setUsage(To),e.setAttribute("aAlpha",this.alphaAttr);const n=new Rn({vertexShader:wx,fragmentShader:Ix,uniforms:{uColor:{value:new Le(1710618)}},transparent:!0,depthWrite:!1,side:zt});this.mesh=new Bu(e,n,rs),this.mesh.instanceMatrix.setUsage(To),this.mesh.frustumCulled=!1,this.dummy.scale.set(0,0,0),this.dummy.updateMatrix();for(let i=0;i<rs;i++)this.mesh.setMatrixAt(i,this.dummy.matrix),this.alphaAttr.setX(i,0),this.marks.push({age:so+1,alive:!1});this.mesh.instanceMatrix.needsUpdate=!0,this.alphaAttr.needsUpdate=!0,this.group.add(this.mesh)}reset(){this.nextSlot=0,this.spawnAcc=0,this.playerSpawnAcc=0,this.dummy.scale.set(0,0,0),this.dummy.updateMatrix();for(let e=0;e<rs;e++)this.mesh.setMatrixAt(e,this.dummy.matrix),this.alphaAttr.setX(e,0),this.marks[e].age=so+1,this.marks[e].alive=!1;this.mesh.instanceMatrix.needsUpdate=!0,this.alphaAttr.needsUpdate=!0}spawn(e,t){const n=this.nextSlot;this.nextSlot=(this.nextSlot+1)%rs;const i=this.marks[n];i.age=0,i.alive=!0,this.dummy.position.set(e,yx,t),this.dummy.scale.set(1,1,1),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix)}update(e,t,n,i,r){r!==void 0&&(this.playerZ=r),this.spawnAcc+=e;const o=this.spawnAcc>=this.spawnInterval;if(o&&(this.spawnAcc-=this.spawnInterval),o&&n.forEachPoolWindSlot((l,h,u,d,p)=>{if(!h)return;const _=y.TAXI_DIMENSIONS.width/2,g=p-y.TAXI_DIMENSIONS.length/2;this.spawn(d-_*ro,g),this.spawn(d+_*ro,g)}),i!==void 0&&r!==void 0&&(this.playerSpawnAcc+=e,this.playerSpawnAcc>=zh)){this.playerSpawnAcc-=zh;const l=y.TAXI_DIMENSIONS.width/2,h=r-y.TAXI_DIMENSIONS.length/2;this.spawn(i-l*ro,h),this.spawn(i+l*ro,h)}let a=!1,c=!1;for(let l=0;l<rs;l++){const h=this.marks[l];if(h.alive){if(h.age+=e,this.mesh.getMatrixAt(l,this.dummy.matrix),this.dummy.matrix.decompose(this.dummy.position,this.dummy.quaternion,this.dummy.scale),this.dummy.position.z-=t,h.age>=so)h.alive=!1,this.dummy.scale.set(0,0,0),this.alphaAttr.setX(l,0);else{const u=1-h.age/so;this.dummy.scale.set(1,1,1);const d=Math.abs(this.dummy.position.z-this.playerZ),p=Math.max(0,Math.min(1,(d-Vh)/(Rx-Vh))),_=(kh+(bx-kh)*p)*u;this.alphaAttr.setX(l,_),c=!0}this.dummy.updateMatrix(),this.mesh.setMatrixAt(l,this.dummy.matrix),a=!0}}a&&(this.mesh.instanceMatrix.needsUpdate=!0),c&&(this.alphaAttr.needsUpdate=!0)}}const oi=800,Ea=.8,Wh=.025,Xh=.018;class Lx{constructor(){this.group=new lt,this.particles=[],this.spawnAcc=0,this.playerSpawnAcc=0,this.nextSlot=0,this.group.name="VehicleExhaust",this.positions=new Float32Array(oi*3),this.alphas=new Float32Array(oi);for(let n=0;n<oi;n++)this.particles.push({alive:!1,age:0,vx:0,vy:0,vz:0}),this.positions[n*3+1]=-100;this.geo=new Mt,this.geo.setAttribute("position",new mt(this.positions,3)),this.geo.setAttribute("alpha",new mt(this.alphas,1));const e=new Rn({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Le(13421772)},uSize:{value:8}},vertexShader:`
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
      `}),t=new Os(this.geo,e);t.frustumCulled=!1,this.group.add(t)}reset(){this.spawnAcc=0,this.playerSpawnAcc=0;for(let e=0;e<oi;e++)this.particles[e].alive=!1,this.positions[e*3+1]=-100,this.alphas[e]=0;this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}spawn(e,t,n){const i=this.nextSlot;for(let r=0;r<oi;r++){const o=(i+r)%oi,a=this.particles[o];if(!a.alive||a.age>Ea*.8){a.alive=!0,a.age=0,a.vx=(Math.random()-.5)*1.2,a.vy=.3+Math.random()*.8,a.vz=-(1.5+Math.random()*2),this.positions[o*3]=e+(Math.random()-.5)*.2,this.positions[o*3+1]=t,this.positions[o*3+2]=n,this.nextSlot=(o+1)%oi;return}}}update(e,t,n,i,r){this.spawnAcc+=e;const o=this.spawnAcc>=Wh;if(o&&(this.spawnAcc-=Wh),o&&n.forEachPoolWindSlot((a,c,l,h,u)=>{if(!c)return;const d=u-y.TAXI_DIMENSIONS.length/2-.1,p=y.TAXI_DIMENSIONS.height*.3;this.spawn(h-.3,p,d),this.spawn(h+.3,p,d)}),i!==void 0&&r!==void 0&&(this.playerSpawnAcc+=e,this.playerSpawnAcc>=Xh)){this.playerSpawnAcc-=Xh;const a=r-y.TAXI_DIMENSIONS.length/2-.1,c=y.TAXI_DIMENSIONS.height*.3;this.spawn(i-.3,c,a),this.spawn(i+.3,c,a)}for(let a=0;a<oi;a++){const c=this.particles[a];if(!c.alive)continue;if(c.age+=e,c.age>=Ea){c.alive=!1,this.positions[a*3+1]=-100,this.alphas[a]=0;continue}const l=c.age/Ea;this.positions[a*3]+=c.vx*e,this.positions[a*3+1]+=c.vy*e,this.positions[a*3+2]+=c.vz*e-t,c.vx*=.96,c.vy*=.94,c.vz*=.95,this.alphas[a]=(1-l)*(1-l)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}}const qh="slipstream-loadout",Yh="slipstream-highscore",Px={carId:"starter",bodyColorId:"white",wheelStyleId:"standard",wingColorId:"matchBody"};class Nx{constructor(){this._highScore=0,this._loadout={...Px},this._highScore=parseInt(localStorage.getItem(Yh)||"0",10),this.loadLoadout()}get highScore(){return this._highScore}get loadout(){return this._loadout}updateHighScore(e){return e>this._highScore?(this._highScore=e,localStorage.setItem(Yh,e.toString()),!0):!1}isCarUnlocked(e){const t=pc.find(n=>n.id===e);return t?this._highScore>=t.unlockScore:!1}isBodyColorUnlocked(e){const t=Ls.find(n=>n.id===e);return t?this._highScore>=t.unlockScore:!1}isWheelStyleUnlocked(e){const t=_r.find(n=>n.id===e);return t?this._highScore>=t.unlockScore:!1}isWingColorUnlocked(e){const t=gr.find(n=>n.id===e);return t?this._highScore>=t.unlockScore:!1}getRequiredScore(e,t){var n,i,r,o;return e==="car"?((n=pc.find(a=>a.id===t))==null?void 0:n.unlockScore)??0:e==="body"?((i=Ls.find(a=>a.id===t))==null?void 0:i.unlockScore)??0:e==="wheel"?((r=_r.find(a=>a.id===t))==null?void 0:r.unlockScore)??0:((o=gr.find(a=>a.id===t))==null?void 0:o.unlockScore)??0}setLoadout(e){e.carId&&this.isCarUnlocked(e.carId)&&(this._loadout.carId=e.carId),e.bodyColorId&&this.isBodyColorUnlocked(e.bodyColorId)&&(this._loadout.bodyColorId=e.bodyColorId),e.wheelStyleId&&this.isWheelStyleUnlocked(e.wheelStyleId)&&(this._loadout.wheelStyleId=e.wheelStyleId),e.wingColorId&&this.isWingColorUnlocked(e.wingColorId)&&(this._loadout.wingColorId=e.wingColorId),this.saveLoadout()}loadLoadout(){try{const e=localStorage.getItem(qh);if(e){const t=JSON.parse(e);t.carId&&this.isCarUnlocked(t.carId)&&(this._loadout.carId=t.carId),t.bodyColorId&&this.isBodyColorUnlocked(t.bodyColorId)&&(this._loadout.bodyColorId=t.bodyColorId),t.wheelStyleId&&this.isWheelStyleUnlocked(t.wheelStyleId)&&(this._loadout.wheelStyleId=t.wheelStyleId),t.wingColorId&&this.isWingColorUnlocked(t.wingColorId)&&(this._loadout.wingColorId=t.wingColorId)}}catch{}}saveLoadout(){localStorage.setItem(qh,JSON.stringify(this._loadout))}}function Dx(s){return s**3}function Ox(){const s=y.PALETTE,e=document.documentElement;e.style.setProperty("--f1-primary",vn(s.NEON_PINK)),e.style.setProperty("--f1-cyan",vn(s.NEON_BLUE)),e.style.setProperty("--f1-blue",vn(s.NEON_PURPLE)),e.style.setProperty("--f1-warm",vn(s.NEON_ORANGE)),e.style.setProperty("--f1-ui-text",vn(s.UI_TEXT)),e.style.setProperty("--f1-ui-dim",vn(s.UI_DIM)),e.style.setProperty("--f1-bg-app",vn(s.UI_BG_APP)),e.style.setProperty("--f1-gameover-scrim",Qt(s.UI_BG_APP,.92)),e.style.setProperty("--f1-flash-tint",Qt(s.SCREEN_FLASH_TINT,.22)),e.style.setProperty("--f1-flash-perfect",Qt(s.SCREEN_FLASH_TINT,.4)),e.style.setProperty("--f1-retry-hover",Qt(s.NEON_PINK,.12)),e.style.setProperty("--f1-retry-glow",Qt(s.NEON_PINK,.35)),e.style.setProperty("--f1-milestone-glow",Qt(s.NEON_PINK,.55)),e.style.setProperty("--f1-milestone-cyan",Qt(s.NEON_BLUE,.2)),e.style.setProperty("--f1-perfect-glow-1",Qt(s.NEON_PINK,.9)),e.style.setProperty("--f1-perfect-glow-2",Qt(s.NEON_PINK,.45)),e.style.setProperty("--f1-perfect-cyan",Qt(s.NEON_BLUE,.25)),e.style.setProperty("--f1-perfect-inset",Qt(s.NEON_BLUE,.1))}Ox();const Yn=document.getElementById("game-container"),Ln=new A0({antialias:!0,alpha:!1,powerPreference:"high-performance"});Ln.setSize(window.innerWidth,window.innerHeight);Ln.setPixelRatio(Math.min(window.devicePixelRatio,2));Ln.toneMapping=iu;Ln.toneMappingExposure=y.TONE_MAPPING_EXPOSURE;Ln.outputColorSpace=Et;Ln.shadowMap.enabled=!0;Ln.shadowMap.type=tu;Yn.prepend(Ln.domElement);const Ht=new v0;Ht.background=new Le(y.PALETTE.SKY);Ht.fog=new Fc(y.PALETTE.SKY,y.FOG_NEAR,y.FOG_FAR);const on=new Gt(y.CAMERA_FOV_BASE,window.innerWidth/window.innerHeight,.1,200),Ux=new $0(y.PALETTE.AMBIENT_LIGHT,y.AMBIENT_LIGHT_INTENSITY);Ht.add(Ux);const Zu=new X0(y.PALETTE.HEMISPHERE_SKY,y.PALETTE.HEMISPHERE_GROUND,y.HEMISPHERE_LIGHT_INTENSITY);Zu.position.set(0,40,0);Ht.add(Zu);const Ot=new Vu(y.PALETTE.DIRECTIONAL_LIGHT,y.DIRECTIONAL_LIGHT_INTENSITY);Ot.position.set(y.DIRECTIONAL_LIGHT_POSITION[0],y.DIRECTIONAL_LIGHT_POSITION[1],y.DIRECTIONAL_LIGHT_POSITION[2]);Ot.castShadow=!0;Ot.shadow.mapSize.width=2048;Ot.shadow.mapSize.height=2048;Ot.shadow.camera.near=1;Ot.shadow.camera.far=80;Ot.shadow.camera.left=-20;Ot.shadow.camera.right=20;Ot.shadow.camera.top=20;Ot.shadow.camera.bottom=-20;Ot.shadow.bias=-.001;Ht.add(Ot);Ht.add(Ot.target);window.addEventListener("resize",()=>{const s=window.innerWidth,e=window.innerHeight;on.aspect=s/e,on.updateProjectionMatrix(),Ln.setSize(s,e)});const kn=new hS,Nt=new uS(Yn);let he,_n,Bt;const Fx=new hx,_c=new ux(on),Ku=new mx,Yt=new _x,gs=new gx,sr=new Ex,Mr=new Nx,ju=document.getElementById("hud-score-panel"),Bx=document.getElementById("hud-score"),Jt=document.getElementById("hud-chain");let gc=1,Zh=0;function $u(s){Bx.textContent=s.toLocaleString()}function Ju(s){if(Jt.textContent=`×${s}`,s<=1?(Jt.style.color="rgba(0,162,255,0.7)",Jt.style.textShadow="0 0 8px rgba(0,162,255,0.4)"):s<=5?(Jt.style.color="#fde047",Jt.style.textShadow="0 0 10px rgba(253,224,71,0.6)"):s<=10?(Jt.style.color="#fb923c",Jt.style.textShadow="0 0 12px rgba(251,146,60,0.6)"):(Jt.style.color="#ef4444",Jt.style.textShadow="0 0 14px rgba(239,68,68,0.7)"),s>gc&&s>1){const e=s%10===0;Jt.classList.remove("pop","big-pop"),Jt.offsetWidth,Jt.classList.add(e?"big-pop":"pop"),window.clearTimeout(Zh),Zh=window.setTimeout(()=>{Jt.classList.remove("pop","big-pop")},e?300:150)}gc=s}const oo=new P;function Hx(s,e,t){oo.set(e,1.2,t),oo.project(on);const n=Yn.getBoundingClientRect(),i=(oo.x*.5+.5)*n.width,r=(-oo.y*.5+.5)*n.height,o=document.createElement("div");o.className="chain-popup",o.textContent=`×${s}`,o.style.left=`${i}px`,o.style.top=`${r}px`,Yn.appendChild(o),setTimeout(()=>o.remove(),750)}const Tr=new Sx,Kc=new xx(Mr),jc=new dx,bi=new fx,ls=new px,gt=new Tx,hs=new Cx,us=new Lx,Ma=[],os=new P,Kh=new P,jh=new P;Yn.addEventListener("pointerdown",()=>gt.unlock(),{once:!0});Nt.onSwitch(()=>gt.playLaneSwitch());const $h=document.getElementById("sound-toggle"),Gx=document.getElementById("sound-icon-on"),zx=document.getElementById("sound-icon-off"),Qu=document.getElementById("music-toggle"),kx=document.getElementById("music-icon-on"),Vx=document.getElementById("music-icon-off");function Sc(s){Qu.classList.toggle("muted",s),kx.style.display=s?"none":"",Vx.style.display=s?"":"none"}$h.addEventListener("click",()=>{const s=!gt.isMuted();gt.setMuted(s),$h.classList.toggle("muted",s),Gx.style.display=s?"none":"",zx.style.display=s?"":"none",Sc(s?!0:gt.isMusicMuted())});Qu.addEventListener("click",()=>{if(gt.isMuted())return;const s=!gt.isMusicMuted();gt.setMusicMuted(s),Sc(s)});let ds=document.visibilityState==="visible",xc=!1;gt.setAppFocused(ds);function $c(){const s=document.visibilityState==="visible";s!==ds&&(ds=s,gt.setAppFocused(ds),ds&&(xc=!0))}document.addEventListener("visibilitychange",$c);window.addEventListener("focus",$c);window.addEventListener("blur",$c);let rr=0,Do=0,Ri=0,Gn=0,ai=!1,Ec=0;const Jh=280,Wx=350;let or=!1,as=0;const Mc=document.getElementById("start-lights"),wi=[document.getElementById("light-0"),document.getElementById("light-1"),document.getElementById("light-2")],ao=100,Xx=300,qx=1200,Rt=[{enabled:!1,dir:-1,triggerMs:0,elapsedMs:0,animating:!1,soundPlayed:!1},{enabled:!1,dir:1,triggerMs:0,elapsedMs:0,animating:!1,soundPlayed:!1}];let Io=[],Tc=!1,Ac=0;const Ta=1400,Yx=2200;let Ii=!1,ar=0,Ai=1,qt=1,Qs=0,_t=null,Aa=0,_o=0,go=!1,So=0,er=0,Ci=0,xo=0;const pi=60,ed=1.2,cn=new Float32Array(pi*3),Eo=new Float32Array(pi*3),Jc=[],Ss=new Float32Array(pi),Ar=new Float32Array(pi);for(let s=0;s<pi;s++)Jc.push(new P),Ss[s]=0,Ar[s]=0;const Mn=new Mt;Mn.setAttribute("position",new mt(cn,3));Mn.setAttribute("color",new mt(Eo,3));Mn.setAttribute("size",new mt(Ar,1));const Zx=new Ds({size:.12,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Di,sizeAttenuation:!0}),td=new Os(Mn,Zx);td.frustumCulled=!1;Ht.add(td);function Kx(s,e,t){const n=[1,1,.95,.9],i=[.7,.5,.3,.2],r=[0,0,.05,.1];for(let o=0;o<pi;o++){const a=o*3;cn[a]=s+(Math.random()-.5)*.3,cn[a+1]=e+Math.random()*.2,cn[a+2]=t+(Math.random()-.5)*.3;const c=2+Math.random()*6,l=Math.random()*Math.PI*2,h=Math.random()*Math.PI*.5;Jc[o].set(Math.cos(l)*Math.cos(h)*c,Math.sin(h)*c*.8+Math.random()*2,Math.sin(l)*Math.cos(h)*c),Ss[o]=ed*(.5+Math.random()*.5),Ar[o]=.06+Math.random()*.14;const u=Math.floor(Math.random()*n.length);Eo[a]=n[u],Eo[a+1]=i[u],Eo[a+2]=r[u]}Mn.attributes.position.needsUpdate=!0,Mn.attributes.color.needsUpdate=!0,Mn.attributes.size.needsUpdate=!0}function jx(s){let e=!1;for(let t=0;t<pi;t++){if(Ss[t]<=0)continue;Ss[t]-=s,e=!0;const n=t*3,i=Jc[t];i.y-=9.8*s,cn[n]+=i.x*s,cn[n+1]+=i.y*s,cn[n+2]+=i.z*s,cn[n+1]<0&&(cn[n+1]=0,i.y*=-.3,i.x*=.7,i.z*=.7);const r=Math.max(0,Ss[t]/ed);Ar[t]=(.06+Math.random()*.04)*r}e&&(Mn.attributes.position.needsUpdate=!0,Mn.attributes.size.needsUpdate=!0)}function $x(){for(let s=0;s<pi;s++){Ss[s]=0,Ar[s]=0;const e=s*3;cn[e]=0,cn[e+1]=-10,cn[e+2]=0}Mn.attributes.position.needsUpdate=!0,Mn.attributes.size.needsUpdate=!0}function Qc(){_t&&(_t.rotation.set(0,0,0),_t.position.y=0,_t=null),Ii=!1,ar=0,go=!1,So=0,_o=0,Ci=0,xo=0,$x(),Tc=!0,Ac=0;for(const o of Io)o.visible=!1;const s=Math.random();s<.33?(Rt[0].enabled=!0,Rt[0].dir=-1,Rt[0].triggerMs=ao,Rt[1].enabled=!1):s<.66?(Rt[0].enabled=!0,Rt[0].dir=1,Rt[0].triggerMs=ao,Rt[1].enabled=!1):(Rt[0].enabled=!0,Rt[0].dir=-1,Rt[0].triggerMs=ao,Rt[1].enabled=!0,Rt[1].dir=1,Rt[1].triggerMs=ao+Xx);for(const o of Rt)o.elapsedMs=0,o.animating=!1,o.soundPlayed=!1;or=!1,as=0,Mc.classList.remove("visible");for(const o of wi)o.classList.remove("red","green");kn.reset(),Nt.reset(),Nt.enabled=!1,ai=!1,Ec=0,rr=0,Do=0,Ri=0,Gn=0,_n==null||_n.reset(),Bt.reset(),jc.reset(),hs.reset(),us.reset(),he.reset(),bi.reset(),ls.reset(),Ku.reset(),Yt.reset(),gs.reset(),sr.reset(),ju.style.opacity="1",$u(0),Ju(1),gc=1;const e=performance.now(),t=Nt.getLaneX(e),n=Nt.getBodyRollRad(e),i=Nt.getWheelSteerRad(e);he.applyLaneVisuals(t,n,i);const r=he.group.position.z;he.group.position.z=y.TAXI_POSITION_Z,_c.snap(he),he.group.position.z=r,Tr.hide()}Tr.onRetry(()=>{he.applyLoadout(Mr.loadout),Qc()});Tr.onMarket(()=>{Kc.show()});Kc.onApply(s=>{he.applyLoadout(s),Qc()});Kc.onClose(()=>{Tr.show(gs.currentScore,Yt.maxChainThisRun,Do,Mr)});kn.onChange(s=>{if(s==="gameover"){Nt.enabled=!1,he.setDraftMeter(0,!1),ju.style.opacity="0";const e=gs.currentScore;Tr.show(e,Yt.maxChainThisRun,Do,Mr)}});const vc=new Q0,xs=document.getElementById("speed-hud"),Qh=document.getElementById("speed-text-wrap"),fs=document.getElementById("speed-text");function nd(){if(!Qh||!fs)return;fs.style.transform="scale(1)";const s=Qh.clientWidth;if(s<=0)return;const e=fs.scrollWidth;e<=s||(fs.style.transform=`scale(${s/e})`)}window.addEventListener("resize",()=>{(xs==null?void 0:xs.style.opacity)==="1"&&requestAnimationFrame(()=>nd())});function id(){var l;if(requestAnimationFrame(id),!ds)return;xc&&(vc.getDelta(),xc=!1);const s=vc.getDelta(),e=performance.now();let t=y.BASE_SCROLL_SPEED,n=!1,i=0,r=!1;if(kn.isPlaying)if(ai){if(or){as+=s*1e3;const b=Jh*3;for(let I=0;I<3;I++)as>=Jh*(I+1)&&!wi[I].classList.contains("red")&&!wi[I].classList.contains("green")&&(wi[I].classList.add("red"),gt.playLightRed());if(as>=b&&!wi[0].classList.contains("green")){for(const I of wi)I.classList.remove("red"),I.classList.add("green");gt.playLightGreen()}as>=b+Wx&&(or=!1,Mc.classList.remove("visible"),Nt.enabled=!0)}rr+=s*1e3,Ri=Math.max(0,Ri-s*1e3);const h=y.BASE_SCROLL_SPEED,u=y.MAX_SCROLL_SPEED,d=Math.max(0,u-h);Gn=Math.max(0,Gn-y.BASE_SPEED_BONUS_DECAY_PER_SECOND*s),Gn=Math.min(Gn,d);let _=Math.min(h+Gn,u);if(Ii){const b=Math.min(1,ar/Ta);_=_o*(1-b*.5)}const g=_*60*s;if(((_n==null?void 0:_n.update(g))??0)>0&&!Ii){const b=Math.max(1e-6,y.MAX_SCROLL_SPEED-y.BASE_SCROLL_SPEED),I=Math.max(0,Math.min(1,(_-y.BASE_SCROLL_SPEED)/b));gt.playWhoosh(I)}Bt.update(s,rr,_);const f=he.group.position.x,T=he.group.position.z;hs.update(s,g,Bt,f,T),us.update(s,g,Bt,f,T);const A=Nt.getLaneX(e),S=Nt.getBodyRollRad(e),C=Nt.getWheelSteerRad(e);he.applyLaneVisuals(A,S,C),os.set(A,1.1,y.TAXI_POSITION_Z+2.2),sr.updateMilestoneAnchor(on,Yn,os);const w=Ku.update(s,_,he,Bt);if(Yt.tick(e,w.inZone),w.slingshotFired){Bt.markSlipstreamConsumed(w.slingshotTarget),Gn+=y.SLINGSHOT_BASE_SPEED_INCREMENT,Gn=Math.min(Gn,d),Ri=y.SLINGSHOT_BURST_DURATION,ls.burst(),gt.playSlingshot();const b=Yt.onSlingshot(e);if(b!==null&&(he.onChainMilestone(b,e),gt.playMilestone(b)),gs.addSlingshotBonus(Yt.chain),gt.playChainUp(Yt.chain),w.slingshotTarget){const I=w.slingshotTarget,M=(he.group.position.x+I.cx)/2,E=(he.group.position.z+I.cz)/2;Hx(Yt.chain,M,E)}}if(he.tickRoofLight(e,w.inZone,Yt.chain),gs.addDistance(g,Yt.chain),Do+=g,$u(gs.currentScore),Ju(Yt.chain),he.setDraftMeter(w.meterDisplay,w.inZone),_c.update(he,_),Tc){Ac+=s*1e3;let b=!1;for(let I=0;I<Rt.length;I++){const M=Rt[I],E=Io[I];if(!(!M.enabled||!E)&&(b=!0,!M.animating&&Ac>=M.triggerMs&&(M.animating=!0,M.elapsedMs=0),!M.soundPlayed&&M.animating&&(M.soundPlayed=!0,gt.playFlyby()),M.animating)){M.elapsedMs+=s*1e3;const L=Math.min(1,M.elapsedMs/qx),H=y.TAXI_POSITION_Z-25,F=y.TAXI_POSITION_Z+80,q=H+(F-H)*L;E.visible=!0,E.position.set(M.dir*3,0,q),E.rotation.set(0,0,0);const Y=y.TAXI_DIMENSIONS.width/2,W=q-y.TAXI_DIMENSIONS.length/2;hs.spawn(E.position.x-Y*.55,W),hs.spawn(E.position.x+Y*.55,W);const j=y.TAXI_DIMENSIONS.height*.3;us.spawn(E.position.x-.3,j,W-.1),us.spawn(E.position.x+.3,j,W-.1),L>=1&&(M.animating=!1,M.enabled=!1,E.visible=!1)}}b||(Tc=!1)}if(!Ii&&!or){const b=Fx.check(he,Bt);b&&(Ii=!0,ar=0,Qs=he.group.position.x,he.group.position.z,qt=b.hitX>he.group.position.x?-1:1,Ai=qt,_t=Bt.getHitCarGroup(b.hitX,b.hitZ),Aa=b.hitX,b.hitZ,_o=_,er=Math.floor(Math.random()*3),Ci=1,xo=0,Kx((he.group.position.x+b.hitX)/2,.4,(he.group.position.z+b.hitZ)/2),Nt.enabled=!1,gt.playCrash())}ls.setBurstWindowActive(Ri>0),bi.setBoostActive(Ri>0),bi.update(s,g,he),t=_,n=w.inZone,i=w.meterDisplay,r=Ri>0}else{const h=y.TAXI_INTRO_DURATION_MS;Ec+=s*1e3;const u=Math.min(1,Ec/h),d=Dx(u),p=y.TAXI_POSITION_Z+y.TAXI_INTRO_START_Z_OFFSET,_=y.TAXI_POSITION_Z;if(he.group.position.z=p+(_-p)*d,u>=1){ai=!0,he.group.position.z=_,or=!0,as=0,Mc.classList.add("visible");for(const T of wi)T.classList.remove("red","green")}const g=Nt.getLaneX(e),m=Nt.getBodyRollRad(e),f=Nt.getWheelSteerRad(e);he.applyLaneVisuals(g,m,f),os.set(g,1.1,he.group.position.z+2.2),sr.updateMilestoneAnchor(on,Yn,os),bi.setBoostActive(!1),bi.update(s,0,he),he.tickRoofLight(e,!1,Yt.chain),t=y.BASE_SCROLL_SPEED}else{ls.setBurstWindowActive(!1),bi.setBoostActive(!1);const h=y.BASE_SCROLL_SPEED*.3;let u=h;if(go){So+=s*1e3;const f=Math.min(1,So/Yx),T=(1-f)**2;u=h+(_o*.5-h)*T;const A=1-f,S=A*A;if(er===0?(he.group.rotation.x=-Math.PI*1.1*S+(1-S)*-.08,he.group.rotation.y=Ai*(Math.PI*.5+f*.4),he.group.rotation.z=qt*.4*S):er===1?(he.group.rotation.z=qt*Math.PI*1.5*S,he.group.rotation.y=Ai*(Math.PI*.6+f*.3),he.group.rotation.x=-.3*S):(he.group.rotation.y=Ai*(Math.PI*1.8+f*.2),he.group.rotation.z=qt*.6*S,he.group.rotation.x=-.25*S),he.group.position.x=Qs+qt*(3+f*1.5),he.group.position.y=S*.15,_t){const C=-qt;_t.rotation.y=C*(Math.PI*.9+f*.2),_t.rotation.z=C*.45*S,_t.rotation.x=.35*S,_t.position.x=Aa+C*(3+f*1),_t.position.y=S*.1}f>=1&&(go=!1,_t&&(_t.rotation.set(0,0,0),_t.position.y=0,_t=null))}const d=u*60*s;((_n==null?void 0:_n.update(d))??0)>0&&gt.playWhoosh(0),Bt.update(s,rr,u);const _=he.group.position.x,g=he.group.position.z;hs.update(s,d,Bt,_,g),us.update(s,d,Bt,_,g),bi.update(s,0,he),_c.update(he,y.BASE_SCROLL_SPEED),he.tickRoofLight(e,!1,Yt.chain);const m=Nt.getLaneX(e);os.set(m,1.1,y.TAXI_POSITION_Z+2.2),sr.updateMilestoneAnchor(on,Yn,os)}if(xs&&fs)if(!(kn.isPlaying&&ai))xs.style.opacity="0";else{const d=t*60*3.6*2;fs.textContent=`${Math.round(d)} KM/H`,xs.style.opacity="1",requestAnimationFrame(()=>nd())}jc.update(s,kn.isPlaying&&ai,Bt),ls.update(s),gt.update(s,{playing:kn.isPlaying&&ai,scrollPerFrame:t,inDraft:n,draftMeter:i,burstActive:r,chain:Yt.chain}),Ma.length=0,Bt.forEachPoolWindSlot((h,u,d,p,_)=>{u&&Ma.push(p,_)}),gt.updateTrafficEngines(s,kn.isPlaying&&ai,he.group.position.x,he.group.position.z,Ma);const o=he.group.position.z-y.TAXI_DIMENSIONS.length*.5,a=.28;if(Kh.set(-2.5,a,o),jh.set(y.LANE_WIDTH,a,o),sr.updateTouchHints(rr,kn.isPlaying&&ai,on,Yn,Kh,jh),Ii){ar+=s*1e3;const h=Math.min(1,ar/Ta),u=1-(1-h)*(1-h),d=Math.sin(u*Math.PI);if(er===0?(he.group.rotation.x=u*-Math.PI*1.1,he.group.rotation.y=Ai*u*Math.PI*.5,he.group.rotation.z=qt*u*.4,he.group.position.y=d*2.2,he.group.position.x=Qs+qt*u*3):er===1?(he.group.rotation.z=qt*u*Math.PI*1.5,he.group.rotation.y=Ai*u*Math.PI*.6,he.group.rotation.x=u*-.3,he.group.position.y=d*2.5,he.group.position.x=Qs+qt*u*3.5):(he.group.rotation.y=Ai*u*Math.PI*1.8,he.group.rotation.z=qt*u*.6,he.group.rotation.x=u*-.25,he.group.position.y=d*1.5,he.group.position.x=Qs+qt*u*4),_t){const p=-qt,_=Math.sin(u*Math.PI*.8);_t.rotation.y=p*u*Math.PI*.9,_t.rotation.z=p*u*.45,_t.rotation.x=u*.35,_t.position.x=Aa+p*u*3,_t.position.y=_*1.2}xo+=s*1e3,Ci=Math.max(0,1-xo/Ta),h>=1&&(Ii=!1,go=!0,So=0,Ci=0,kn.transition("gameover"))}if(Ci>0){const h=Ci*Ci;on.position.x+=(Math.random()-.5)*h*.6,on.position.y+=(Math.random()-.5)*h*.4,on.rotation.z+=(Math.random()-.5)*h*.03}jx(s);const c=(l=he==null?void 0:he.group)==null?void 0:l.position;c&&(Ot.position.set(c.x+10,25,c.z-10),Ot.target.position.set(c.x,0,c.z),Ot.target.updateMatrixWorld()),Ln.render(Ht,on)}(async()=>{he=await Yc.create(Mr.loadout),_n=await qc.create(y.TAXI_POSITION_Z),Bt=await Zc.create();for(let s=0;s<2;s++){const e=new lt,t=mc();e.add(t),e.visible=!1,Io.push(e)}Ht.add(_n.group),Ht.add(hs.group),Ht.add(Bt.group),Ht.add(us.group),Ht.add(jc.group);for(const s of Io)Ht.add(s);Ht.add(he.group),he.group.add(ls.anchor),Qc(),vc.getDelta(),id()})();
