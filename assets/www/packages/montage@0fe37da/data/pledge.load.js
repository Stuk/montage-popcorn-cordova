montageDefine("0fe37da","data/pledge",{dependencies:["montage","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/logger").logger("pledge"),s=t.Pledge=r.create(r,{objectId:{serializable:!0,enumerable:!1,value:null},_context:{serializable:!0,enumerable:!1,value:null},context:{enumerable:!1,get:function(){return this._query}},_blueprint:{serializable:!0,enumerable:!1,value:null},blueprint:{serializable:!1,enumerable:!1,get:function(){return this._blueprint}},isPledge:{value:function(e){return e===null?!1:typeof e.isPledge=="undefined"?!1:e.isPledge}},withProperties:{value:function(){var e=Array.prototype.slice.call(arguments);return this}},valueOf:{value:function(){return undefined}}}),o=t.PledgedSortedSet=r.create(s,{_query:{serializable:!0,enumerable:!1,value:null},query:{enumerable:!1,get:function(){return this._query}},blueprint:{enumerable:!1,get:function(){return this._query.blueprint}},initWithQueryAndContext:{value:function(e,t){this._query=e,this._context=t}},isPledge:{serializable:!1,enumerable:!1,value:!0},length:{value:function(){return 0}},empty:{value:function(){return this.length()==0}},has:{value:function(e){return!1}},get:{value:function(e){return e}},add:{value:function(e){return e}},"delete":{value:function(e){return e}},forEach:{value:function(e,t){}}})}})