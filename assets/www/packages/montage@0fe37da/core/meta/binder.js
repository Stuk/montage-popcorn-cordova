"use strict";var Montage=require("montage").Montage,Promise=require("core/promise").Promise,Deserializer=require("core/deserializer").Deserializer,BinderManager=require("core/meta/binder-manager").BinderManager,BlueprintModule=require("core/meta/blueprint"),logger=require("core/logger").logger("blueprint"),_binderManager=null,Binder=exports.Binder=Montage.create(Montage,{didCreate:{value:function(){return this._name=null,this.binderModuleId=null,this.isDefault=!1,this._blueprintForPrototypeTable={},this}},initWithName:{value:function(e){return this._name=e!=null?e:"default",Binder.manager.addBinder(this),this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),this.blueprints.length>0&&e.setProperty("blueprints",this.blueprints),e.setProperty("binderModuleId",this.binderInstanceModuleId)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name");var t=e.getProperty("blueprints");t&&(this._blueprints=t),this.binderInstanceModuleId=e.getProperty("binderModuleId")}},_name:{value:null},name:{get:function(){return this._name}},manager:{get:function(){return _binderManager===null&&(_binderManager=BinderManager.create()),_binderManager}},_blueprintForPrototypeTable:{distinct:!0,value:{}},identifier:{get:function(){return["binder",this.name.toLowerCase()].join("_")}},binderInstanceModuleId:{serializable:!1,value:null},isDefault:{serializable:!1,value:!1},getBinderWithModuleId:{value:function(e,t){var n=Promise.defer();return t||(t=this.require),t.async(e).then(function(r){try{Deserializer.create().initWithObjectAndRequire(r,t,e).deserializeObject(function(t){t?(t.binderInstanceModuleId=e,Binder.manager.addBinder(this),n.resolve(t)):n.reject(new Error("No Binder found "+e))},t)}catch(i){n.reject(new Error("Error deserializing Binder "+e+" "+JSON.stringfy(i)))}},n.reject),n.promise}},_blueprints:{distinct:!0,value:[]},blueprints:{get:function(){return this._blueprints}},addBlueprint:{value:function(e){if(e!==null){var t=this.blueprints.indexOf(e);if(t<0){e.binder!==null&&e.binder!==this&&e.binder.removeBlueprint(e),this.blueprints.push(e),e.binder=this;var n=e.moduleId+"."+e.prototypeName;this._blueprintForPrototypeTable[n]=e}}return e}},removeBlueprint:{value:function(e){if(e!==null){var t=this.blueprints.indexOf(e);if(t>=0){this.blueprints.splice(t,1),e.binder=null;var n=e.moduleId+"."+e.prototypeName;delete this._blueprintForPrototypeTable[n]}}return e}},addBlueprintNamed:{value:function(e,t){return this.addBlueprint(BlueprintModule.Blueprint.create().initWithNameAndModuleId(e,t))}},blueprintForPrototype:{value:function(e,t){var n=t+"."+e,r=this._blueprintForPrototypeTable[n];if(typeof r=="undefined"){var i,s;for(s=0;typeof (i=this.blueprints[s])!="undefined";s++)if(i.prototypeName===e&&i.moduleId===t){r=i;break}this._blueprintForPrototypeTable[n]=r}return r}},_blueprintObjectProperty:{value:null},ObjectProperty:{get:function(){return this._blueprintObjectProperty||(this._blueprintObjectProperty=Binder.manager.defaultBlueprintObjectProperty),this._blueprintObjectProperty}},blueprintModuleId:require("montage")._blueprintModuleIdDescriptor,blueprint:require("montage")._blueprintDescriptor})