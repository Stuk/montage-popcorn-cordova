montageDefine("0fe37da","ui/condition.reel/condition",{dependencies:["montage","ui/component","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("core/logger").logger("condition");t.Condition=r.create(i,{hasTemplate:{value:!1},_condition:{value:null},condition:{set:function(e){if(e===this._condition)return;this._condition=e,this.needsDraw=!0,this.removalStrategy==="remove"&&!this.isDeserializing&&(e?this.domContent=this.originalContent:this.domContent=null)},get:function(){return this._condition}},_removalStrategy:{value:"remove"},removalStrategy:{get:function(){return this._removalStrategy},set:function(e){if(this._removalStrategy===e)return;e==="hide"&&!this.isDeserializing&&(this.domContent=this.originalContent),this._removalStrategy=e,this.needsDraw=!0}},prepareForDraw:{value:function(){this.removalStrategy==="remove"&&!this.condition&&(this.domContent=null)}},draw:{value:function(){this.condition?this.element.classList.remove("montage-invisible"):this.element.classList.add("montage-invisible")}}})}})