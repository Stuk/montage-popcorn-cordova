montageDefine("0fe37da","core/event/action-event-listener",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage,i=t.ActionEventListener=r.create(r,{handler:{value:null},action:{value:null},initWithHandler_action_:{value:function(e,t){return this.handler=e,this.action=t,this}},handleEvent:{value:function(e){typeof this.action=="function"?this.action(e):this.handler[this.action](e)}},serializeProperties:{value:function(e){e.set("handler",this.handler,"reference"),e.set("action",this.action)}}})}})