montageDefine("6828b8e","sorted-map",{dependencies:["./shim","./sorted-set","./generic-collection","./generic-map","./listen/property-changes"],factory:function(e,t,n){"use strict";function a(e,t,n,r){if(!(this instanceof a))return new a(e,t,n,r);t=t||Object.equals,n=n||Object.compare,r=r||Function.noop,this.contentEquals=t,this.contentCompare=n,this.getDefault=r,this.store=new i(null,function(n,r){return t(n.key,r.key)},function(t,r){return n(t.key,r.key)}),this.length=0,this.addEach(e)}var r=e("./shim"),i=e("./sorted-set"),s=e("./generic-collection"),o=e("./generic-map"),u=e("./listen/property-changes");n.exports=a,Object.addEach(a.prototype,s.prototype),Object.addEach(a.prototype,o.prototype),Object.addEach(a.prototype,u.prototype),a.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)},a.prototype.log=function(e,t,n,r){t=t||this.logNode,this.store.log(e,function(e,n,r){t(e.value,n,r)},n,r)},a.prototype.logNode=function(e,t){t(" key: "+e.key),t(" value: "+e.value)}}})