montageDefine("0fe37da","ui/token-field/token-field.reel/token-field",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=46,o=8,u=37,a=38,f=39,l=40;t.TokenField=r.create(i,{delegate:{value:null},values:{value:null},textPropertyPath:{value:null},allowAdHocValues:{value:null},placeholder:{value:null},__hasFocus:{value:null},_hasFocus:{get:function(){return this.__hasFocus},set:function(e){e!=this.__hasFocus&&(this.__hasFocus=e,this.needsDraw=!0)}},_tokensController:{value:null},_tokenList:{value:null},_autocomplete:{value:null},__autocompleteValue:{value:null},_autocompleteValue:{get:function(){return this.__autocompleteValue},set:function(e){this.__autocompleteValue=e}},__suggestedValue:{value:null},_suggestedValue:{get:function(){return this.__suggestedValue},set:function(e){if(e){var t;!this.allowAdHocValues&&String.isString(e)?t=this.callDelegateMethod("getRepresentedObject",e):t=e,t&&(this.__suggestedValue=t,this.values||(this.values=[]),this.values.push(this.__suggestedValue),this._autocomplete.value=""),this.__suggestedValue=null}}},prepareForActivationEvents:{value:function(){this.element.addEventListener("mouseup",this)}},prepareForDraw:{value:function(){this._autocomplete.delegate=this.delegate,this.identifier&&(this._autocomplete.identifier=this.identifier),this._autocomplete.element.addEventListener("keyup",this)}},draw:{value:function(){this._hasFocus?(this._autocomplete.element.focus(),this.__hasFocus=!1):this.placeholder&&(this._autocomplete.element.style.width="auto")}},handleMouseup:{value:function(e){this._hasFocus=!0}},handleKeyup:{value:function(e){var t=e.keyCode;if(this.values&&this.values.length>0){var n=this._tokensController.selectedIndexes,r=n&&n.length>0?n[0]:null,i=this.values.length-1,c=this.values.length;switch(t){case o:case s:this._autocompleteValue||(n&&n.length>0?(this._tokensController.removeObjectsAtSelectedIndexes(),this._tokensController.selectedIndexes=[]):this._tokensController.selectedIndexes=[this.values.length-1]);break;case u:this._autocompleteValue||(r!=null?(r-=1,r<0&&(r=i)):r=i,this._tokensController.selectedIndexes=[r]);break;case f:this._autocompleteValue||(r!=null?(r+=1,r>i&&(r=0)):r=0,this._tokensController.selectedIndexes=[r]);break;case a:r!=null&&(this._tokensController.selectedIndexes=[0]);break;case l:r!=null&&(this._tokensController.selectedIndexes=[i]);break;default:this._tokensController.selectedIndexes=[]}}}}})}})