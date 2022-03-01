(function(){"use strict";var n={};typeof exports=="undefined"?typeof define=="function"&&typeof define.amd=="object"&&define.amd?(n.exports={},define(function(){return n.exports})):n.exports=window:n.exports=exports,function(n){var h,e,c,r,i,t,o,l,s,a,f,v,u,y;h||(h=1e-6),e||(e=typeof Float32Array!="undefined"?Float32Array:Array),c={},c.setMatrixArrayType=function(n){e=n},typeof n!="undefined"&&(n.glMatrix=c),r={},r.create=function(){var n=new e(2);return n[0]=0,n[1]=0,n},r.clone=function(n){var t=new e(2);return t[0]=n[0],t[1]=n[1],t},r.fromValues=function(n,t){var i=new e(2);return i[0]=n,i[1]=t,i},r.copy=function(n,t){return n[0]=t[0],n[1]=t[1],n},r.set=function(n,t,i){return n[0]=t,n[1]=i,n},r.add=function(n,t,i){return n[0]=t[0]+i[0],n[1]=t[1]+i[1],n},r.subtract=function(n,t,i){return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n},r.sub=r.subtract,r.multiply=function(n,t,i){return n[0]=t[0]*i[0],n[1]=t[1]*i[1],n},r.mul=r.multiply,r.divide=function(n,t,i){return n[0]=t[0]/i[0],n[1]=t[1]/i[1],n},r.div=r.divide,r.min=function(n,t,i){return n[0]=Math.min(t[0],i[0]),n[1]=Math.min(t[1],i[1]),n},r.max=function(n,t,i){return n[0]=Math.max(t[0],i[0]),n[1]=Math.max(t[1],i[1]),n},r.scale=function(n,t,i){return n[0]=t[0]*i,n[1]=t[1]*i,n},r.distance=function(n,t){var i=t[0]-n[0],r=t[1]-n[1];return Math.sqrt(i*i+r*r)},r.dist=r.distance,r.squaredDistance=function(n,t){var i=t[0]-n[0],r=t[1]-n[1];return i*i+r*r},r.sqrDist=r.squaredDistance,r.length=function(n){var t=n[0],i=n[1];return Math.sqrt(t*t+i*i)},r.len=r.length,r.squaredLength=function(n){var t=n[0],i=n[1];return t*t+i*i},r.sqrLen=r.squaredLength,r.negate=function(n,t){return n[0]=-t[0],n[1]=-t[1],n},r.normalize=function(n,t){var r=t[0],u=t[1],i=r*r+u*u;return i>0&&(i=1/Math.sqrt(i),n[0]=t[0]*i,n[1]=t[1]*i),n},r.dot=function(n,t){return n[0]*t[0]+n[1]*t[1]},r.cross=function(n,t,i){var r=t[0]*i[1]-t[1]*i[0];return n[0]=n[1]=0,n[2]=r,n},r.lerp=function(n,t,i,r){var u=t[0],f=t[1];return n[0]=u+r*(i[0]-u),n[1]=f+r*(i[1]-f),n},r.transformMat2=function(n,t,i){var r=t[0],u=t[1];return n[0]=r*i[0]+u*i[1],n[1]=r*i[2]+u*i[3],n},r.forEach=function(){var n=r.create();return function(t,i,r,u,f,e){var o,s;for(i||(i=2),r||(r=0),s=u?Math.min(u*i+r,t.length):t.length,o=r;o<s;o+=i)n[0]=t[o],n[1]=t[o+1],f(n,n,e),t[o]=n[0],t[o+1]=n[1];return t}}(),r.str=function(n){return"vec2("+n[0]+", "+n[1]+")"},typeof n!="undefined"&&(n.vec2=r),i={},i.create=function(){var n=new e(3);return n[0]=0,n[1]=0,n[2]=0,n},i.clone=function(n){var t=new e(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},i.fromValues=function(n,t,i){var r=new e(3);return r[0]=n,r[1]=t,r[2]=i,r},i.copy=function(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n},i.set=function(n,t,i,r){return n[0]=t,n[1]=i,n[2]=r,n},i.add=function(n,t,i){return n[0]=t[0]+i[0],n[1]=t[1]+i[1],n[2]=t[2]+i[2],n},i.subtract=function(n,t,i){return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],n},i.sub=i.subtract,i.multiply=function(n,t,i){return n[0]=t[0]*i[0],n[1]=t[1]*i[1],n[2]=t[2]*i[2],n},i.mul=i.multiply,i.divide=function(n,t,i){return n[0]=t[0]/i[0],n[1]=t[1]/i[1],n[2]=t[2]/i[2],n},i.div=i.divide,i.min=function(n,t,i){return n[0]=Math.min(t[0],i[0]),n[1]=Math.min(t[1],i[1]),n[2]=Math.min(t[2],i[2]),n},i.max=function(n,t,i){return n[0]=Math.max(t[0],i[0]),n[1]=Math.max(t[1],i[1]),n[2]=Math.max(t[2],i[2]),n},i.scale=function(n,t,i){return n[0]=t[0]*i,n[1]=t[1]*i,n[2]=t[2]*i,n},i.distance=function(n,t){var i=t[0]-n[0],r=t[1]-n[1],u=t[2]-n[2];return Math.sqrt(i*i+r*r+u*u)},i.dist=i.distance,i.squaredDistance=function(n,t){var i=t[0]-n[0],r=t[1]-n[1],u=t[2]-n[2];return i*i+r*r+u*u},i.sqrDist=i.squaredDistance,i.length=function(n){var t=n[0],i=n[1],r=n[2];return Math.sqrt(t*t+i*i+r*r)},i.len=i.length,i.squaredLength=function(n){var t=n[0],i=n[1],r=n[2];return t*t+i*i+r*r},i.sqrLen=i.squaredLength,i.negate=function(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n},i.normalize=function(n,t){var r=t[0],u=t[1],f=t[2],i=r*r+u*u+f*f;return i>0&&(i=1/Math.sqrt(i),n[0]=t[0]*i,n[1]=t[1]*i,n[2]=t[2]*i),n},i.dot=function(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]},i.cross=function(n,t,i){var r=t[0],u=t[1],f=t[2],e=i[0],o=i[1],s=i[2];return n[0]=u*s-f*o,n[1]=f*e-r*s,n[2]=r*o-u*e,n},i.lerp=function(n,t,i,r){var u=t[0],f=t[1],e=t[2];return n[0]=u+r*(i[0]-u),n[1]=f+r*(i[1]-f),n[2]=e+r*(i[2]-e),n},i.transformMat4=function(n,t,i){var r=t[0],u=t[1],f=t[2];return n[0]=i[0]*r+i[4]*u+i[8]*f+i[12],n[1]=i[1]*r+i[5]*u+i[9]*f+i[13],n[2]=i[2]*r+i[6]*u+i[10]*f+i[14],n},i.transformQuat=function(n,t,i){var o=t[0],s=t[1],h=t[2],r=i[0],u=i[1],f=i[2],e=i[3],c=e*o+u*h-f*s,l=e*s+f*o-r*h,a=e*h+r*s-u*o,v=-r*o-u*s-f*h;return n[0]=c*e+v*-r+l*-f-a*-u,n[1]=l*e+v*-u+a*-r-c*-f,n[2]=a*e+v*-f+c*-u-l*-r,n},i.forEach=function(){var n=i.create();return function(t,i,r,u,f,e){var o,s;for(i||(i=3),r||(r=0),s=u?Math.min(u*i+r,t.length):t.length,o=r;o<s;o+=i)n[0]=t[o],n[1]=t[o+1],n[2]=t[o+2],f(n,n,e),t[o]=n[0],t[o+1]=n[1],t[o+2]=n[2];return t}}(),i.str=function(n){return"vec3("+n[0]+", "+n[1]+", "+n[2]+")"},typeof n!="undefined"&&(n.vec3=i),t={},t.create=function(){var n=new e(4);return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n},t.clone=function(n){var t=new e(4);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},t.fromValues=function(n,t,i,r){var u=new e(4);return u[0]=n,u[1]=t,u[2]=i,u[3]=r,u},t.copy=function(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},t.set=function(n,t,i,r,u){return n[0]=t,n[1]=i,n[2]=r,n[3]=u,n},t.add=function(n,t,i){return n[0]=t[0]+i[0],n[1]=t[1]+i[1],n[2]=t[2]+i[2],n[3]=t[3]+i[3],n},t.subtract=function(n,t,i){return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],n[3]=t[3]-i[3],n},t.sub=t.subtract,t.multiply=function(n,t,i){return n[0]=t[0]*i[0],n[1]=t[1]*i[1],n[2]=t[2]*i[2],n[3]=t[3]*i[3],n},t.mul=t.multiply,t.divide=function(n,t,i){return n[0]=t[0]/i[0],n[1]=t[1]/i[1],n[2]=t[2]/i[2],n[3]=t[3]/i[3],n},t.div=t.divide,t.min=function(n,t,i){return n[0]=Math.min(t[0],i[0]),n[1]=Math.min(t[1],i[1]),n[2]=Math.min(t[2],i[2]),n[3]=Math.min(t[3],i[3]),n},t.max=function(n,t,i){return n[0]=Math.max(t[0],i[0]),n[1]=Math.max(t[1],i[1]),n[2]=Math.max(t[2],i[2]),n[3]=Math.max(t[3],i[3]),n},t.scale=function(n,t,i){return n[0]=t[0]*i,n[1]=t[1]*i,n[2]=t[2]*i,n[3]=t[3]*i,n},t.distance=function(n,t){var i=t[0]-n[0],r=t[1]-n[1],u=t[2]-n[2],f=t[3]-n[3];return Math.sqrt(i*i+r*r+u*u+f*f)},t.dist=t.distance,t.squaredDistance=function(n,t){var i=t[0]-n[0],r=t[1]-n[1],u=t[2]-n[2],f=t[3]-n[3];return i*i+r*r+u*u+f*f},t.sqrDist=t.squaredDistance,t.length=function(n){var t=n[0],i=n[1],r=n[2],u=n[3];return Math.sqrt(t*t+i*i+r*r+u*u)},t.len=t.length,t.squaredLength=function(n){var t=n[0],i=n[1],r=n[2],u=n[3];return t*t+i*i+r*r+u*u},t.sqrLen=t.squaredLength,t.negate=function(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n},t.normalize=function(n,t){var r=t[0],u=t[1],f=t[2],e=t[3],i=r*r+u*u+f*f+e*e;return i>0&&(i=1/Math.sqrt(i),n[0]=t[0]*i,n[1]=t[1]*i,n[2]=t[2]*i,n[3]=t[3]*i),n},t.dot=function(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]},t.lerp=function(n,t,i,r){var u=t[0],f=t[1],e=t[2],o=t[3];return n[0]=u+r*(i[0]-u),n[1]=f+r*(i[1]-f),n[2]=e+r*(i[2]-e),n[3]=o+r*(i[3]-o),n},t.transformMat4=function(n,t,i){var r=t[0],u=t[1],f=t[2],e=t[3];return n[0]=i[0]*r+i[4]*u+i[8]*f+i[12]*e,n[1]=i[1]*r+i[5]*u+i[9]*f+i[13]*e,n[2]=i[2]*r+i[6]*u+i[10]*f+i[14]*e,n[3]=i[3]*r+i[7]*u+i[11]*f+i[15]*e,n},t.transformQuat=function(n,t,i){var o=t[0],s=t[1],h=t[2],r=i[0],u=i[1],f=i[2],e=i[3],c=e*o+u*h-f*s,l=e*s+f*o-r*h,a=e*h+r*s-u*o,v=-r*o-u*s-f*h;return n[0]=c*e+v*-r+l*-f-a*-u,n[1]=l*e+v*-u+a*-r-c*-f,n[2]=a*e+v*-f+c*-u-l*-r,n},t.forEach=function(){var n=t.create();return function(t,i,r,u,f,e){var o,s;for(i||(i=4),r||(r=0),s=u?Math.min(u*i+r,t.length):t.length,o=r;o<s;o+=i)n[0]=t[o],n[1]=t[o+1],n[2]=t[o+2],n[3]=t[o+3],f(n,n,e),t[o]=n[0],t[o+1]=n[1],t[o+2]=n[2],t[o+3]=n[3];return t}}(),t.str=function(n){return"vec4("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"},typeof n!="undefined"&&(n.vec4=t),o={},l=new Float32Array([1,0,0,1]),o.create=function(){var n=new e(4);return n[0]=1,n[1]=0,n[2]=0,n[3]=1,n},o.clone=function(n){var t=new e(4);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},o.copy=function(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},o.identity=function(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=1,n},o.transpose=function(n,t){if(n===t){var i=t[1];n[1]=t[2],n[2]=i}else n[0]=t[0],n[1]=t[2],n[2]=t[1],n[3]=t[3];return n},o.invert=function(n,t){var r=t[0],u=t[1],f=t[2],e=t[3],i=r*e-f*u;return i?(i=1/i,n[0]=e*i,n[1]=-u*i,n[2]=-f*i,n[3]=r*i,n):null},o.adjoint=function(n,t){var i=t[0];return n[0]=t[3],n[1]=-t[1],n[2]=-t[2],n[3]=i,n},o.determinant=function(n){return n[0]*n[3]-n[2]*n[1]},o.multiply=function(n,t,i){var r=t[0],u=t[1],f=t[2],e=t[3],o=i[0],s=i[1],h=i[2],c=i[3];return n[0]=r*o+u*h,n[1]=r*s+u*c,n[2]=f*o+e*h,n[3]=f*s+e*c,n},o.mul=o.multiply,o.rotate=function(n,t,i){var f=t[0],e=t[1],o=t[2],s=t[3],r=Math.sin(i),u=Math.cos(i);return n[0]=f*u+e*r,n[1]=f*-r+e*u,n[2]=o*u+s*r,n[3]=o*-r+s*u,n},o.scale=function(n,t,i){var f=t[0],e=t[1],o=t[2],s=t[3],r=i[0],u=i[1];return n[0]=f*r,n[1]=e*u,n[2]=o*r,n[3]=s*u,n},o.str=function(n){return"mat2("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"},typeof n!="undefined"&&(n.mat2=o),s={},a=new Float32Array([1,0,0,0,1,0,0,0,1]),s.create=function(){var n=new e(9);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=1,n[5]=0,n[6]=0,n[7]=0,n[8]=1,n},s.clone=function(n){var t=new e(9);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},s.copy=function(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n},s.identity=function(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=1,n[5]=0,n[6]=0,n[7]=0,n[8]=1,n},s.transpose=function(n,t){if(n===t){var i=t[1],r=t[2],u=t[5];n[1]=t[3],n[2]=t[6],n[3]=i,n[5]=t[7],n[6]=r,n[7]=u}else n[0]=t[0],n[1]=t[3],n[2]=t[6],n[3]=t[1],n[4]=t[4],n[5]=t[7],n[6]=t[2],n[7]=t[5],n[8]=t[8];return n},s.invert=function(n,t){var r=t[0],u=t[1],f=t[2],e=t[3],o=t[4],s=t[5],h=t[6],c=t[7],l=t[8],a=l*o-s*c,v=-l*e+s*h,y=c*e-o*h,i=r*a+u*v+f*y;return i?(i=1/i,n[0]=a*i,n[1]=(-l*u+f*c)*i,n[2]=(s*u-f*o)*i,n[3]=v*i,n[4]=(l*r-f*h)*i,n[5]=(-s*r+f*e)*i,n[6]=y*i,n[7]=(-c*r+u*h)*i,n[8]=(o*r-u*e)*i,n):null},s.adjoint=function(n,t){var i=t[0],r=t[1],u=t[2],f=t[3],e=t[4],o=t[5],s=t[6],h=t[7],c=t[8];return n[0]=e*c-o*h,n[1]=u*h-r*c,n[2]=r*o-u*e,n[3]=o*s-f*c,n[4]=i*c-u*s,n[5]=u*f-i*o,n[6]=f*h-e*s,n[7]=r*s-i*h,n[8]=i*e-r*f,n},s.determinant=function(n){var o=n[0],s=n[1],h=n[2],t=n[3],i=n[4],r=n[5],u=n[6],f=n[7],e=n[8];return o*(e*i-r*f)+s*(-e*t+r*u)+h*(f*t-i*u)},s.multiply=function(n,t,i){var r=t[0],u=t[1],f=t[2],e=t[3],o=t[4],s=t[5],h=t[6],c=t[7],l=t[8],a=i[0],v=i[1],y=i[2],p=i[3],w=i[4],b=i[5],k=i[6],d=i[7],g=i[8];return n[0]=a*r+v*e+y*h,n[1]=a*u+v*o+y*c,n[2]=a*f+v*s+y*l,n[3]=p*r+w*e+b*h,n[4]=p*u+w*o+b*c,n[5]=p*f+w*s+b*l,n[6]=k*r+d*e+g*h,n[7]=k*u+d*o+g*c,n[8]=k*f+d*s+g*l,n},s.mul=s.multiply,s.str=function(n){return"mat3("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+", "+n[4]+", "+n[5]+", "+n[6]+", "+n[7]+", "+n[8]+")"},typeof n!="undefined"&&(n.mat3=s),f={},v=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),f.create=function(){var n=new e(16);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},f.clone=function(n){var t=new e(16);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},f.copy=function(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},f.identity=function(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},f.transpose=function(n,t){if(n===t){var i=t[1],r=t[2],u=t[3],f=t[6],e=t[7],o=t[11];n[1]=t[4],n[2]=t[8],n[3]=t[12],n[4]=i,n[6]=t[9],n[7]=t[13],n[8]=r,n[9]=f,n[11]=t[14],n[12]=u,n[13]=e,n[14]=o}else n[0]=t[0],n[1]=t[4],n[2]=t[8],n[3]=t[12],n[4]=t[1],n[5]=t[5],n[6]=t[9],n[7]=t[13],n[8]=t[2],n[9]=t[6],n[10]=t[10],n[11]=t[14],n[12]=t[3],n[13]=t[7],n[14]=t[11],n[15]=t[15];return n},f.invert=function(n,t){var r=t[0],u=t[1],f=t[2],e=t[3],o=t[4],s=t[5],h=t[6],c=t[7],l=t[8],a=t[9],v=t[10],y=t[11],p=t[12],w=t[13],b=t[14],k=t[15],d=r*s-u*o,g=r*h-f*o,nt=r*c-e*o,tt=u*h-f*s,it=u*c-e*s,rt=f*c-e*h,ut=l*w-a*p,ft=l*b-v*p,et=l*k-y*p,ot=a*b-v*w,st=a*k-y*w,ht=v*k-y*b,i=d*ht-g*st+nt*ot+tt*et-it*ft+rt*ut;return i?(i=1/i,n[0]=(s*ht-h*st+c*ot)*i,n[1]=(f*st-u*ht-e*ot)*i,n[2]=(w*rt-b*it+k*tt)*i,n[3]=(v*it-a*rt-y*tt)*i,n[4]=(h*et-o*ht-c*ft)*i,n[5]=(r*ht-f*et+e*ft)*i,n[6]=(b*nt-p*rt-k*g)*i,n[7]=(l*rt-v*nt+y*g)*i,n[8]=(o*st-s*et+c*ut)*i,n[9]=(u*et-r*st-e*ut)*i,n[10]=(p*it-w*nt+k*d)*i,n[11]=(a*nt-l*it-y*d)*i,n[12]=(s*ft-o*ot-h*ut)*i,n[13]=(r*ot-u*ft+f*ut)*i,n[14]=(w*g-p*tt-b*d)*i,n[15]=(l*tt-a*g+v*d)*i,n):null},f.adjoint=function(n,t){var y=t[0],c=t[1],i=t[2],r=t[3],p=t[4],l=t[5],u=t[6],f=t[7],w=t[8],a=t[9],e=t[10],o=t[11],b=t[12],v=t[13],s=t[14],h=t[15];return n[0]=l*(e*h-o*s)-a*(u*h-f*s)+v*(u*o-f*e),n[1]=-(c*(e*h-o*s)-a*(i*h-r*s)+v*(i*o-r*e)),n[2]=c*(u*h-f*s)-l*(i*h-r*s)+v*(i*f-r*u),n[3]=-(c*(u*o-f*e)-l*(i*o-r*e)+a*(i*f-r*u)),n[4]=-(p*(e*h-o*s)-w*(u*h-f*s)+b*(u*o-f*e)),n[5]=y*(e*h-o*s)-w*(i*h-r*s)+b*(i*o-r*e),n[6]=-(y*(u*h-f*s)-p*(i*h-r*s)+b*(i*f-r*u)),n[7]=y*(u*o-f*e)-p*(i*o-r*e)+w*(i*f-r*u),n[8]=p*(a*h-o*v)-w*(l*h-f*v)+b*(l*o-f*a),n[9]=-(y*(a*h-o*v)-w*(c*h-r*v)+b*(c*o-r*a)),n[10]=y*(l*h-f*v)-p*(c*h-r*v)+b*(c*f-r*l),n[11]=-(y*(l*o-f*a)-p*(c*o-r*a)+w*(c*f-r*l)),n[12]=-(p*(a*s-e*v)-w*(l*s-u*v)+b*(l*e-u*a)),n[13]=y*(a*s-e*v)-w*(c*s-i*v)+b*(c*e-i*a),n[14]=-(y*(l*s-u*v)-p*(c*s-i*v)+b*(c*u-i*l)),n[15]=y*(l*e-u*a)-p*(c*e-i*a)+w*(c*u-i*l),n},f.determinant=function(n){var t=n[0],i=n[1],r=n[2],u=n[3],f=n[4],e=n[5],o=n[6],s=n[7],h=n[8],c=n[9],l=n[10],a=n[11],v=n[12],y=n[13],p=n[14],w=n[15],b=t*e-i*f,k=t*o-r*f,d=t*s-u*f,g=i*o-r*e,nt=i*s-u*e,tt=r*s-u*o,it=h*y-c*v,rt=h*p-l*v,ut=h*w-a*v,ft=c*p-l*y,et=c*w-a*y,ot=l*w-a*p;return b*ot-k*et+d*ft+g*ut-nt*rt+tt*it},f.multiply=function(n,t,i){var o=t[0],s=t[1],h=t[2],c=t[3],l=t[4],a=t[5],v=t[6],y=t[7],p=t[8],w=t[9],b=t[10],k=t[11],d=t[12],g=t[13],nt=t[14],tt=t[15],r=i[0],u=i[1],f=i[2],e=i[3];return n[0]=r*o+u*l+f*p+e*d,n[1]=r*s+u*a+f*w+e*g,n[2]=r*h+u*v+f*b+e*nt,n[3]=r*c+u*y+f*k+e*tt,r=i[4],u=i[5],f=i[6],e=i[7],n[4]=r*o+u*l+f*p+e*d,n[5]=r*s+u*a+f*w+e*g,n[6]=r*h+u*v+f*b+e*nt,n[7]=r*c+u*y+f*k+e*tt,r=i[8],u=i[9],f=i[10],e=i[11],n[8]=r*o+u*l+f*p+e*d,n[9]=r*s+u*a+f*w+e*g,n[10]=r*h+u*v+f*b+e*nt,n[11]=r*c+u*y+f*k+e*tt,r=i[12],u=i[13],f=i[14],e=i[15],n[12]=r*o+u*l+f*p+e*d,n[13]=r*s+u*a+f*w+e*g,n[14]=r*h+u*v+f*b+e*nt,n[15]=r*c+u*y+f*k+e*tt,n},f.mul=f.multiply,f.translate=function(n,t,i){var r=i[0],u=i[1],f=i[2],e,o,s,h,c,l,a,v,y,p,w,b;return t===n?(n[12]=t[0]*r+t[4]*u+t[8]*f+t[12],n[13]=t[1]*r+t[5]*u+t[9]*f+t[13],n[14]=t[2]*r+t[6]*u+t[10]*f+t[14],n[15]=t[3]*r+t[7]*u+t[11]*f+t[15]):(e=t[0],o=t[1],s=t[2],h=t[3],c=t[4],l=t[5],a=t[6],v=t[7],y=t[8],p=t[9],w=t[10],b=t[11],n[0]=e,n[1]=o,n[2]=s,n[3]=h,n[4]=c,n[5]=l,n[6]=a,n[7]=v,n[8]=y,n[9]=p,n[10]=w,n[11]=b,n[12]=e*r+c*u+y*f+t[12],n[13]=o*r+l*u+p*f+t[13],n[14]=s*r+a*u+w*f+t[14],n[15]=h*r+v*u+b*f+t[15]),n},f.scale=function(n,t,i){var r=i[0],u=i[1],f=i[2];return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n[4]=t[4]*u,n[5]=t[5]*u,n[6]=t[6]*u,n[7]=t[7]*u,n[8]=t[8]*f,n[9]=t[9]*f,n[10]=t[10]*f,n[11]=t[11]*f,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},f.rotate=function(n,t,i,r){var u=r[0],f=r[1],e=r[2],c=Math.sqrt(u*u+f*f+e*e),s,l,o,nt,tt,it,rt,ut,ft,et,ot,st,ht,ct,lt,a,v,y,p,w,b,k,d,g;return Math.abs(c)<h?null:(c=1/c,u*=c,f*=c,e*=c,s=Math.sin(i),l=Math.cos(i),o=1-l,nt=t[0],tt=t[1],it=t[2],rt=t[3],ut=t[4],ft=t[5],et=t[6],ot=t[7],st=t[8],ht=t[9],ct=t[10],lt=t[11],a=u*u*o+l,v=f*u*o+e*s,y=e*u*o-f*s,p=u*f*o-e*s,w=f*f*o+l,b=e*f*o+u*s,k=u*e*o+f*s,d=f*e*o-u*s,g=e*e*o+l,n[0]=nt*a+ut*v+st*y,n[1]=tt*a+ft*v+ht*y,n[2]=it*a+et*v+ct*y,n[3]=rt*a+ot*v+lt*y,n[4]=nt*p+ut*w+st*b,n[5]=tt*p+ft*w+ht*b,n[6]=it*p+et*w+ct*b,n[7]=rt*p+ot*w+lt*b,n[8]=nt*k+ut*d+st*g,n[9]=tt*k+ft*d+ht*g,n[10]=it*k+et*d+ct*g,n[11]=rt*k+ot*d+lt*g,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n)},f.rotateX=function(n,t,i){var r=Math.sin(i),u=Math.cos(i),f=t[4],e=t[5],o=t[6],s=t[7],h=t[8],c=t[9],l=t[10],a=t[11];return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[4]=f*u+h*r,n[5]=e*u+c*r,n[6]=o*u+l*r,n[7]=s*u+a*r,n[8]=h*u-f*r,n[9]=c*u-e*r,n[10]=l*u-o*r,n[11]=a*u-s*r,n},f.rotateY=function(n,t,i){var r=Math.sin(i),u=Math.cos(i),f=t[0],e=t[1],o=t[2],s=t[3],h=t[8],c=t[9],l=t[10],a=t[11];return t!==n&&(n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=f*u-h*r,n[1]=e*u-c*r,n[2]=o*u-l*r,n[3]=s*u-a*r,n[8]=f*r+h*u,n[9]=e*r+c*u,n[10]=o*r+l*u,n[11]=s*r+a*u,n},f.rotateZ=function(n,t,i){var r=Math.sin(i),u=Math.cos(i),f=t[0],e=t[1],o=t[2],s=t[3],h=t[4],c=t[5],l=t[6],a=t[7];return t!==n&&(n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=f*u+h*r,n[1]=e*u+c*r,n[2]=o*u+l*r,n[3]=s*u+a*r,n[4]=h*u-f*r,n[5]=c*u-e*r,n[6]=l*u-o*r,n[7]=a*u-s*r,n},f.fromRotationTranslation=function(n,t,i){var r=t[0],u=t[1],e=t[2],o=t[3],h=r+r,s=u+u,f=e+e,c=r*h,l=r*s,a=r*f,v=u*s,y=u*f,p=e*f,w=o*h,b=o*s,k=o*f;return n[0]=1-(v+p),n[1]=l+k,n[2]=a-b,n[3]=0,n[4]=l-k,n[5]=1-(c+p),n[6]=y+w,n[7]=0,n[8]=a+b,n[9]=y-w,n[10]=1-(c+v),n[11]=0,n[12]=i[0],n[13]=i[1],n[14]=i[2],n[15]=1,n},f.frustum=function(n,t,i,r,u,f,e){var o=1/(i-t),s=1/(u-r),h=1/(f-e);return n[0]=f*2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=f*2*s,n[6]=0,n[7]=0,n[8]=(i+t)*o,n[9]=(u+r)*s,n[10]=(e+f)*h,n[11]=-1,n[12]=0,n[13]=0,n[14]=e*f*2*h,n[15]=0,n},f.perspective=function(n,t,i,r,u){var f=1/Math.tan(t/2),e=1/(r-u);return n[0]=f/i,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=f,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=(u+r)*e,n[11]=-1,n[12]=0,n[13]=0,n[14]=2*u*r*e,n[15]=0,n},f.ortho=function(n,t,i,r,u,f,e){var o=1/(t-i),s=1/(r-u),h=1/(f-e);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*h,n[11]=0,n[12]=(t+i)*o,n[13]=(u+r)*s,n[14]=(e+f)*h,n[15]=1,n},f.lookAt=function(n,t,i,r){var c,l,a,v,y,p,e,o,s,u,w=t[0],b=t[1],k=t[2],d=r[0],g=r[1],nt=r[2],tt=i[0],it=i[1],rt=i[2];return Math.abs(w-tt)<h&&Math.abs(b-it)<h&&Math.abs(k-rt)<h?f.identity(n):(e=w-tt,o=b-it,s=k-rt,u=1/Math.sqrt(e*e+o*o+s*s),e*=u,o*=u,s*=u,c=g*s-nt*o,l=nt*e-d*s,a=d*o-g*e,u=Math.sqrt(c*c+l*l+a*a),u?(u=1/u,c*=u,l*=u,a*=u):(c=0,l=0,a=0),v=o*a-s*l,y=s*c-e*a,p=e*l-o*c,u=Math.sqrt(v*v+y*y+p*p),u?(u=1/u,v*=u,y*=u,p*=u):(v=0,y=0,p=0),n[0]=c,n[1]=v,n[2]=e,n[3]=0,n[4]=l,n[5]=y,n[6]=o,n[7]=0,n[8]=a,n[9]=p,n[10]=s,n[11]=0,n[12]=-(c*w+l*b+a*k),n[13]=-(v*w+y*b+p*k),n[14]=-(e*w+o*b+s*k),n[15]=1,n)},f.str=function(n){return"mat4("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+", "+n[4]+", "+n[5]+", "+n[6]+", "+n[7]+", "+n[8]+", "+n[9]+", "+n[10]+", "+n[11]+", "+n[12]+", "+n[13]+", "+n[14]+", "+n[15]+")"},typeof n!="undefined"&&(n.mat4=f),u={},y=new Float32Array([0,0,0,1]),u.create=function(){var n=new e(4);return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n},u.clone=t.clone,u.fromValues=t.fromValues,u.copy=t.copy,u.set=t.set,u.identity=function(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n},u.setAxisAngle=function(n,t,i){i=i*.5;var r=Math.sin(i);return n[0]=r*t[0],n[1]=r*t[1],n[2]=r*t[2],n[3]=Math.cos(i),n},u.add=t.add,u.multiply=function(n,t,i){var r=t[0],u=t[1],f=t[2],e=t[3],o=i[0],s=i[1],h=i[2],c=i[3];return n[0]=r*c+e*o+u*h-f*s,n[1]=u*c+e*s+f*o-r*h,n[2]=f*c+e*h+r*s-u*o,n[3]=e*c-r*o-u*s-f*h,n},u.mul=u.multiply,u.scale=t.scale,u.rotateX=function(n,t,i){i*=.5;var f=t[0],e=t[1],o=t[2],s=t[3],r=Math.sin(i),u=Math.cos(i);return n[0]=f*u+s*r,n[1]=e*u+o*r,n[2]=o*u-e*r,n[3]=s*u-f*r,n},u.rotateY=function(n,t,i){i*=.5;var f=t[0],e=t[1],o=t[2],s=t[3],r=Math.sin(i),u=Math.cos(i);return n[0]=f*u-o*r,n[1]=e*u+s*r,n[2]=o*u+f*r,n[3]=s*u-e*r,n},u.rotateZ=function(n,t,i){i*=.5;var f=t[0],e=t[1],o=t[2],s=t[3],r=Math.sin(i),u=Math.cos(i);return n[0]=f*u+e*r,n[1]=e*u-f*r,n[2]=o*u+s*r,n[3]=s*u-o*r,n},u.calculateW=function(n,t){var i=t[0],r=t[1],u=t[2];return n[0]=i,n[1]=r,n[2]=u,n[3]=-Math.sqrt(Math.abs(1-i*i-r*r-u*u)),n},u.dot=t.dot,u.lerp=t.lerp,u.slerp=function(n,t,i,r){var e=t[0],o=t[1],s=t[2],h=t[3],a=i[0],v=i[1],y=i[2],p=t[3],c=e*a+o*v+s*y+h*p,w,l,u,f;return Math.abs(c)>=1?(n!==t&&(n[0]=e,n[1]=o,n[2]=s,n[3]=h),n):(w=Math.acos(c),l=Math.sqrt(1-c*c),Math.abs(l)<.001)?(n[0]=e*.5+a*.5,n[1]=o*.5+v*.5,n[2]=s*.5+y*.5,n[3]=h*.5+p*.5,n):(u=Math.sin((1-r)*w)/l,f=Math.sin(r*w)/l,n[0]=e*u+a*f,n[1]=o*u+v*f,n[2]=s*u+y*f,n[3]=h*u+p*f,n)},u.invert=function(n,t){var r=t[0],u=t[1],f=t[2],e=t[3],o=r*r+u*u+f*f+e*e,i=o?1/o:0;return n[0]=-r*i,n[1]=-u*i,n[2]=-f*i,n[3]=e*i,n},u.conjugate=function(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=t[3],n},u.length=t.length,u.len=u.length,u.squaredLength=t.squaredLength,u.sqrLen=u.squaredLength,u.normalize=t.normalize,u.str=function(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"},typeof n!="undefined"&&(n.quat=u)}(n.exports)})()