montageDefine("6828b8e","fast-map",{dependencies:["./shim","./fast-set","./generic-collection","./generic-map","./listen/property-changes"],factory:function(e,t,n){"use strict";function a(e,t,n,r){if(!(this instanceof a))return new a(e,t,n,r);t=t||Object.equals,n=n||Object.hash,r=r||Function.noop,this.contentEquals=t,this.contentHash=n,this.getDefault=r,this.store=new i(undefined,function(n,r){return t(n.key,r.key)},function(t){return n(t.key)}),this.length=0,this.addEach(e)}var r=e("./shim"),i=e("./fast-set"),s=e("./generic-collection"),o=e("./generic-map"),u=e("./listen/property-changes");n.exports=a,Object.addEach(a.prototype,s.prototype),Object.addEach(a.prototype,o.prototype),Object.addEach(a.prototype,u.prototype),a.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentHash,this.getDefault)},a.prototype.log=function(e,t){t=t||this.stringify,this.store.log(e,t)},a.prototype.stringify=function(e,t){return t+JSON.stringify(e.key)+": "+JSON.stringify(e.value)}}})