montageDefine("0fe37da","core/selector/parser",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage,i=t.Parser=r.create(r,{newWithLanguage:{value:function(e,t){var n=r.create(this);return n.tokens=[],n.state=e.parsePrevious(function(n){return t&&t(n),e.parseEof()}),n}},state:{value:null,writable:!0},emit:{value:function(e){try{return this.tokens.push(e),this.state=this.state(e),this}catch(t){throw t instanceof SyntaxError?new SyntaxError(t.message+" at "+this.format()):t}}},state:{value:null,writable:!0},syntax:{value:null,writable:!0},format:{value:function(){return this.tokens.reduce(function(e,t){return t.type==="literal"?e+"("+JSON.stringify(t.value)+")":e+"."+t.type},"Selector")}}})}})