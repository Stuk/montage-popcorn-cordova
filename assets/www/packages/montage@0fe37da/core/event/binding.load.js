montageDefine("0fe37da","core/event/binding",{dependencies:["montage","core/change-notification","core/serializer","core/deserializer","core/logger","core/event/event-manager"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/change-notification").ChangeNotification,s=e("core/serializer").Serializer,o=e("core/deserializer").Deserializer,u=e("core/logger").logger("binding"),a=e("core/event/event-manager").defaultEventManager,f=2,l="_",c=t.ChangeEventDispatchingArray=[],h=t.PropertyChangeBindingListener=Object.create(r,{useCapture:{value:!1,writable:!0},target:{value:null,writable:!0},originalListener:{value:null,writable:!0},originalListenerIsFunction:{value:!1,writable:!0},targetPropertyPath:{value:null,writable:!0},bindingOriginValueDeferred:{value:!1,writable:!0},deferredValue:{value:null,writable:!0},deferredValueTarget:{value:null,writable:!0},previousTargetPropertyPathValue:{value:null,writable:!0},targetPropertyPathCurrentIndex:{value:0,writable:!0},currentIndexListenee:{value:null,writable:!0},bindingOriginCurrentIndexListenee:{value:null,writable:!0},currentPropertyComponent:{value:null,writable:!0},bindingOrigin:{value:null,writable:!0},bindingPropertyPath:{value:null,writable:!0},bindingPropertyPathCurrentIndex:{value:0,writable:!0},bindingDescriptor:{value:null,writable:!0},applyBindingOriginDeferredValue:{value:function(){this.bindingOrigin.setProperty(this.bindingPropertyPath,this.deferredValue)}},applyTargetDeferredValue:{value:function(){this.target.setProperty(this.targetPropertyPath,this.deferredValue)}},applyDeferredValues:{value:function(){this.deferredValueTarget==="bound"?this.applyBindingOriginDeferredValue():this.deferredValueTarget==="target"&&this.applyTargetDeferredValue(),this.deferredValueTarget=""}},handleChange:{value:function(e){var t,n=this.bindingOrigin,r=this.bindingPropertyPath,i=n.getProperty(r),s=this.target,o=this.targetPropertyPath,u;s!==n?t=e.currentTarget===n:t=e.currentPropertyPath===r;if(t){if(n.setProperty.changeEvent)return;this.bindingDescriptor.converter&&(i=this.bindingDescriptor.converter.revert(i)),this.bindingOriginValueDeferred===!0||n._bindingsDisabled?(this.deferredValue=i,this.deferredValueTarget="target"):(this.bindingOriginChangeTriggered=!0,s.setProperty(o,i),this.bindingOriginChangeTriggered=!1)}else this.bindingOriginChangeTriggered||(u=s.getProperty(o),this.bindingDescriptor.boundValueMutator?u=this.bindingDescriptor.boundValueMutator(u):this.bindingDescriptor.converter&&(u=this.bindingDescriptor.converter.convert(u)),u!==i&&(this.bindingOriginValueDeferred===!0||n._bindingsDisabled?(this.deferredValue=u,this.deferredValueTarget="bound"):(n.setProperty.changeEvent=e,n.setProperty(r,u),n.setProperty.changeEvent=null)),this.previousTargetPropertyPathValue=u)}}});Object.defineProperty(Object.prototype,"propertyChangeBindingListener",{value:function(e,t,n,r,i,s,o){var u,a=h.create();return a.useCapture=n,a.target=this,a.originalListener=t,a.originalListenerIsFunction=typeof t=="function",a.targetPropertyPath=u=e,a.previousTargetPropertyPathValue=this.getProperty(u),a.targetPropertyPathCurrentIndex=0,i&&(a.bindingOrigin=i,a.bindingPropertyPath=s,a.bindingDescriptor=o,a.bindingOriginValueDeferred=o.deferred?!0:!1),a},writable:!0});var p=t.BindingDescriptor=r.create(r,{boundObject:{enumerable:!1,value:null},boundObjectPropertyPath:{enumerable:!1,value:null},oneway:{enumerable:!1,value:null},deferred:{enumerable:!1,value:null},serializeSelf:{value:function(e){var t={};return e.addObjectReference(this.boundObject),t[this.oneway?"<-":"<->"]="@"+e.getObjectLabel(this.boundObject)+"."+this.boundObjectPropertyPath,t.deferred=this.deferred,t.converter=this.converter,t}}});s.defineSerializationUnit("bindings",function(e){var t=e._bindingDescriptors;if(t){var n=!1,r={};for(var i in t){var s=t[i];if(!("serializable"in s)||s.serializable)n=!0,r[i]=s}if(n)return r}});var d=t.deserializeBindingToBindingDescriptor=function(e,t){var n;if(!("boundObject"in e)){var r=e["<-"]||e["<->"]||e["<<->"];"<<->"in e&&console.warn("WARNING: <<-> in bindings is deprectated, use <-> only, please update now.");if(!r)throw u.error("Invalid binding syntax '"+JSON.stringify(e)+"'."),"Invalid binding syntax '"+JSON.stringify(e)+"'";if(r[0]!=="@")throw u.error("Invalid binding syntax '"+r+"', should be in the form of '@label.path'."),"Invalid binding syntax '"+r+"'";n=r.indexOf("."),e.boundObject=t.getObjectByLabel(r.slice(1,n)),e.boundObjectPropertyPath=r.slice(n+1),"<-"in e&&(e.oneway=!0)}};o.defineDeserializationUnit("bindings",function(e,t,n){for(var r in t){var i=t[r],s;d(i,n),Object.defineBinding(e,r,i)}});var v=t.Stats={count:0};Object.defineProperty(Object,"defineBinding",{value:function(e,t,n){var i=e._bindingDescriptors,s=typeof n.oneway=="undefined"?!1:n.oneway,o=n.boundObject,u=n.boundObjectPropertyPath,a,f,l;if(!o||!u)return;v.count++,i||r.defineProperty(e,"_bindingDescriptors",{enumerable:!1,value:i=Object.create(Object.prototype)});if((n.__proto__||Object.getPrototypeOf(n))!==p)if("__proto__"in n)n.__proto__=p;else{var c=n;n=Object.create(p);for(var h in c)n[h]=c[h]}f=i[t];if(!f){i[t]=n,l=o.propertyChangeBindingListener(u,null,!0,null,e,t,n);if(!l)return;return o=n.boundObject,u=l.targetPropertyPath,s=typeof n.oneway=="undefined"?!1:n.oneway,n.boundObjectPropertyPath=u,n.bindingListener=l,l.listener=l,o.addPropertyChangeListener(u,l,!1),s||e.addPropertyChangeListener(t,l,!1),a=o.getProperty(u),n.boundValueMutator?a=n.boundValueMutator(a):n.converter&&(a=n.converter.convert(a)),l.bindingOriginValueDeferred===!0||e._bindingsDisabled?(l.deferredValue=a,l.deferredValueTarget="bound"):e.setProperty(t,a),l}if(o!==f.boundObject||n.boundObjectPropertyPath!==f.boundObjectPropertyPath)throw"sourceObject property, "+t+", is already the source of a binding"}}),r.defineProperty(Object.prototype,"_bindingDescriptors",{enumerable:!1,value:null,writable:!0}),Object.defineProperty(Object.prototype,"_deserializeProperty_bindingDescriptors",{enumerable:!1,value:function(e,t){this._bindingDescriptorsToInstall=e}}),Object.defineProperty(Object,"deleteBinding",{value:function(e,t){var n=e._bindingDescriptors,r,i;t in n&&(v.count--,r=n[t],i=typeof r.oneway=="undefined"?!0:r.oneway,r.boundObject.removePropertyChangeListener(r.boundObjectPropertyPath,r.bindingListener,!1),i||e.removePropertyChangeListener(t,r.bindingListener,!1),delete n[t])}}),Object.defineProperty(Object,"deleteBindings",{value:function(e){var t=e._bindingDescriptors;if(t)for(var n in t)t.hasOwnProperty(n)&&Object.deleteBinding(e,n)}}),Object.defineProperty(Object,"applyBindingsDeferredValues",{value:function(e,t){var n=e._bindingDescriptors,r;if(n)for(var i in n)n.hasOwnProperty(i)&&(r=n[i].bindingListener,r&&(!t||!r.bindingOriginValueDeferred)&&r.applyDeferredValues())}}),r.defineProperty(Object.prototype,"_bindingsDisabled",{enumerable:!1,value:null}),Object.defineProperty(Object,"disableBindings",{value:function(e){e._bindingsDisabled=!0}}),Object.defineProperty(Object,"enableBindings",{value:function(e){e._bindingsDisabled=!1,Object.applyBindingsDeferredValues(e,!0)}})}})