montageDefine("0fe37da","ui/list.reel/list",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=t.List=r.create(i,{_repetition:{value:null},delegate:{value:null},objects:{value:null},contentController:{value:null},axis:{value:null},isSelectionEnabled:{value:null},propertyChangeBindingListener:{value:function(e,t,n,r,i,s,o){return o.boundObjectPropertyPath.match(/objectAtCurrentIteration/)?this._repetition?(o.boundObject=this._repetition,this._repetition.propertyChangeBindingListener.apply(this._repetition,arguments)):null:Object.prototype.propertyChangeBindingListener.apply(this,arguments)}}})}})