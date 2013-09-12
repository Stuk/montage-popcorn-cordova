montageDefine("0fe37da","ui/rich-text-editor/rich-text-editor.reel/rich-text-editor-base",{dependencies:["montage","ui/component","./rich-text-sanitizer","../overlays/rich-text-linkpopup.reel","../overlays/rich-text-resizer.reel","core/change-notification","core/promise","core/undo-manager"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("./rich-text-sanitizer").Sanitizer,o=e("../overlays/rich-text-linkpopup.reel").RichTextLinkPopup,u=e("../overlays/rich-text-resizer.reel").RichTextResizer,a=e("core/change-notification").ChangeNotification,f=e("core/promise").Promise,l=e("core/undo-manager").defaultUndoManager;t.RichTextEditorBase=r.create(i,{_COMMANDS:{enumerable:!1,value:null},COMMANDS:{enumerable:!1,get:function(){return this._COMMANDS||(this._COMMANDS=[{property:"bold"},{property:"underline"},{property:"italic"},{property:"strikeThrough"},{property:"baselineShift",method:this._baselineShiftGetState},{property:"justify",method:this._justifyGetState},{property:"listStyle",method:this._listStyleGetState},{property:"fontName",method:this._fontNameGetState},{property:"fontSize"},{property:"backColor"},{property:"foreColor"}]),this._COMMANDS}},_overlays:{enumerable:!1,value:undefined},_overlaySlot:{enumerable:!1,value:null},_activeOverlay:{enumerable:!1,value:null},_innerElement:{enumerable:!1,value:null},_undoManager:{enumerable:!1,value:undefined},_isTyping:{enumerable:!1,value:!1},_startTyping:{enumerable:!1,value:function(){if(this._doingUndoRedo){this._isTyping=!1;return}this._isTyping||(this._isTyping=!0,this.undoManager&&this.undoManager.register("Typing",f.resolve([this._undo,this,"Typing",this._innerElement])))}},_stopTyping:{enumerable:!1,value:function(){this._isTyping&&(this._isTyping=!1)}},_hasSelectionChangeEvent:{enumerable:!1,value:null},_uniqueId:{enumerable:!1,value:Math.floor(Math.random()*1e3)+"-"+Math.floor(Math.random()*1e3)},_contentInitialized:{enumerable:!1,value:!1},_needsAssignOriginalContent:{enumerable:!1,value:!0},_needsAssingValue:{enumerable:!1,value:!1},_setCaretAtEndOfContent:{enumerable:!1,value:!1},_selectionChangeTimer:{enumerable:!1,value:null},_hasFocus:{enumerable:!1,value:!1},_needsFocus:{value:!1},_isActiveElement:{enumerable:!1,value:!1},_readOnly:{enumerable:!1,value:!1},_value:{enumerable:!1,value:""},_textValue:{enumerable:!1,value:""},delegate:{enumerable:!0,value:null},_sanitizer:{enumerable:!1,value:undefined},_allowDrop:{enumerable:!1,value:!0},_getState:{value:function(e,t){var n,r=document.activeElement,i=this._innerElement;return i&&!this["_"+e+"_locked"]?(i&&i!=r&&i.focus(),n=document.queryCommandValue(t),n=="true"&&(n=!0),n=="false"&&(n=!1),i&&i!=r&&r.focus(),n):this["_"+e]}},_genericCommandGetter:{value:function(e,t){var n="_"+e;return this[n]=this._getState(e,t),this[n]}},_genericCommandSetter:{value:function(e,t,n){var r=this._getState(e,t);r!==n&&this.doAction(t,typeof n=="boolean"?!1:n)}},_bold:{value:!1},_underline:{value:!1},_italic:{value:!1},_strikeThrough:{value:!1},_baselineShiftGetState:{enumerable:!1,value:function(){var e=document.activeElement,t=this._innerElement;return t&&!this._baselineShift_locked?(t!=e&&t.focus(),this._getState("baselineShift","subscript")?"subscript":this._getState("baselineShift","superscript")?"superscript":"baseline"):this._baselineShift}},_baselineShift:{value:"baseline"},_listStyleGetState:{enumerable:!1,value:function(){var e=document.activeElement,t=this._innerElement;return t&&!this._listStyle_locked?(t!=e&&t.focus(),this._getState("listStyle","insertorderedlist")?"ordered":this._getState("listStyle","insertunorderedlist")?"unordered":"none"):this._listStyle}},_listStyle:{value:"none"},_justifyGetState:{enumerable:!1,value:function(){var e=document.activeElement,t=this._innerElement;return t&&!this._justify_locked?(t!=e&&t.focus(),this._getState("justify","justifyleft")?"left":this._getState("justify","justifycenter")?"center":this._getState("justify","justifyright")?"right":this._getState("justify","justifyfull")?"full":"left"):this._justify}},_justify:{value:"left"},_fontNameGetState:{enumerable:!1,value:function(){var e=this._getState("fontName","fontname");return e&&(e=e.replace(/\"|\'/g,"")),e}},_fontName:{value:""},_fontSize:{value:0},_backColor:{value:""},_foreColor:{value:""},_updateStates:{enumerable:!0,value:function(){var e=this,t,n,r,i,s,o,u,f,l=this.COMMANDS,c=l.length;for(f=0;f<c;f++){t=l[f];if(typeof t!="object")continue;r=t.property,n=t.name||r.toLowerCase(),o=t.method||this._getState,u=a.getPropertyChangeDescriptor(this,r),u&&(s=this["_"+r],i=o.call(this,r,n),i!==s&&(this["_"+r+"_locked"]=!0,this.dispatchPropertyChange(r,function(){e["_"+r]=i}),e["_"+r+"_locked"]=!1))}}},prepareForDraw:{enumerable:!1,value:function(){var e=this.element;e.classList.add("montage-Editor-container"),e.addEventListener("focus",this,!0),e.addEventListener("dragstart",this,!1),e.addEventListener("dragenter",this,!1),e.addEventListener("dragover",this,!1),e.addEventListener("drop",this,!1),e.addEventListener("dragend",this,!1),this._sanitizer===undefined&&(this._sanitizer=s.create()),this._undoManager===undefined&&(this._undoManager=l),this._overlays===undefined&&(this._overlays=[u.create(),o.create()]),this._callOverlays("initWithEditor",this,!0)}},draw:{enumerable:!1,value:function(){var e=this.element,t,n,r,i,s,o,u;if(this._needsAssingValue||this._needsAssignOriginalContent){t=this._innerElement=e.querySelector(".montage-Editor"),this._contentInitialized&&(e.replaceChild(t.cloneNode(!0),t),t=this._innerElement=e.querySelector(".montage-Editor")),t.setAttribute("contenteditable",this._readOnly?"false":"true"),t.classList.add("editor-"+this._uniqueId),t.innerHTML="";if(this._needsAssingValue)this._value&&!this._dirtyValue?t.innerHTML=this._value:this._textValue&&!this._dirtyTextValue&&(t.innerText?t.innerText=this._textValue:t.textContent=this._textValue);else if(this._needsAssignOriginalContent){n=this.originalContent,i=!1;if(n instanceof Element)t.appendChild(n),i=!0;else for(u=0;n&&(r=n[u]);u++)t.appendChild(r),i=!0;i&&(this._dirtyValue=!0,this._dirtyTextValue=!0)}this._adjustPadding(),this.markDirty(),this._needsAssingValue=!1,this._needsAssignOriginalContent=!1,this._contentInitialized=!0,this._setCaretAtEndOfContent=!0,this.hasFocus&&this.focus()}else t=this._innerElement;this._readOnly?(t.setAttribute("contentEditable","false"),e.classList.add("readonly")):(t.setAttribute("contentEditable","true"),e.classList.remove("readonly"))}},didDraw:{value:function(){if(this._needsFocus){this._innerElement.focus();if(document.activeElement==this._innerElement)this._needsFocus=!1;else{var e=window.getComputedStyle(this.element);e.getPropertyValue("visibility")=="hidden"||e.getPropertyValue("display")=="none"?this._needsFocus=!1:this.needsDraw=!0}}}},slotDidSwitchContent:{enumerable:!1,value:function(e,t,n,r,i){i&&typeof i.didBecomeInactive=="function"&&i.didBecomeInactive(),n&&typeof n.didBecomeActive=="function"&&n.didBecomeActive()}},_adjustPadding:{enumerable:!1,value:function(){var e=this._innerElement,t=0,n=0,r=function(e,i,s){var o=e?e.childNodes:[],u=o.length,a,f=e.offsetLeft,l=e.offsetTop;e.offsetParent&&(f+=i,l+=s),t>f&&(t=f),n>l&&(n=l);for(a=0;a<u;a++)r(o[a],f,l)};r(e,e.offsetLeft,e.offsetTop);var i=document.defaultView.getComputedStyle(e),s=i.paddingLeft,o=i.paddingTop;s.match(/%$/)?s=parseInt(s,10)*e.clientWidth:s=parseInt(s,10),o.match(/%$/)?o=parseInt(o,10)*e.clientHeight:o=parseInt(o,10),t<0&&(e.style.paddingLeft=-t-s+"px"),n<0&&(e.style.paddingTop=-n-o+"px")}},captureFocus:{enumerable:!1,value:function(){var e=this,t=this.element,n=this._innerElement,r,i,s;this.dispatchPropertyChange("hasFocus",function(){e._hasFocus=!0}),r=n&&n===document.activeElement,r!=this._isActiveElement&&this.dispatchPropertyChange("isActiveElement",function(){e._isActiveElement=r});if(this._setCaretAtEndOfContent){var o=this._lastInnerNode(),u,a,f=["#text","BR","IMG"];o&&(f.indexOf(o.nodeName)!==-1&&(o=o.parentNode),u=document.createRange(),a=o.childNodes?o.childNodes.length:0,u.setStart(o,a),u.setEnd(o,a),this._selectedRange=u),i=this._selectedRange,s=setInterval(function(){e._equalRange(e._selectedRange,i)&&n.scrollTop+n.offsetHeight!=n.scrollHeight&&(n.scrollTop=n.scrollHeight-n.offsetHeight)},10),setTimeout(function(){clearInterval(s)},1e3),this._setCaretAtEndOfContent=!1}t.addEventListener("blur",this,!0),t.addEventListener("input",this),t.addEventListener("keydown",this),t.addEventListener("keypress",this),t.addEventListener("cut",this),t.addEventListener("paste",this),t.addEventListener(window.Touch?"touchstart":"mousedown",this),document.addEventListener(window.Touch?"touchend":"mouseup",this),document.addEventListener("selectionchange",this,!1);if(this._hasSelectionChangeEvent===null){var e=this;setTimeout(function(){e._hasSelectionChangeEvent===null&&(e._hasSelectionChangeEvent=!1)},0)}this._hasSelectionChangeEvent===!1&&t.addEventListener("keydup",this),document.execCommand("enableObjectResizing",!1,!1),document.execCommand("styleWithCSS",!1,!0),this._updateStates()}},captureBlur:{enumerable:!1,value:function(){var e=this,t=this.element,n=this._innerElement,r;this.dispatchPropertyChange("hasFocus",function(){e._hasFocus=!1}),r=n&&n===document.activeElement,r!=this._isActiveElement&&this.dispatchPropertyChange("isActiveElement",function(){e._isActiveElement=r}),this._selectionChangeTimer&&clearTimeout(this._selectionChangeTimer),t.removeEventListener("blur",this,!0),t.removeEventListener("input",this),t.removeEventListener("keydown",this),t.removeEventListener("keypress",this),t.removeEventListener("cut",this),t.removeEventListener("paste",this),t.removeEventListener(window.Touch?"touchstart":"mousedown",this),document.removeEventListener(window.Touch?"touchend":"mouseup",this),document.removeEventListener("selectionchange",this),this._hasSelectionChangeEvent===!1&&t.removeEventListener("keydup",this)}},handleKeydown:{enumerable:!1,value:function(e){["Left","Right","Up","Down","Home","End"].indexOf(e.keyIdentifier)!=-1&&this._stopTyping()}},handleKeypress:{enumerable:!1,value:function(){this._hasSelectionChangeEvent===!1&&this.handleSelectionchange(),this.markDirty()}},handleInput:{enumerable:!1,value:function(e){!this._executingCommand&&!this._ignoreNextInputEvent&&this._startTyping(),delete this._ignoreNextInputEvent,this._hasSelectionChangeEvent===!1&&this.handleSelectionchange(),this.handleDragend(e),this.markDirty()}},handleShortcut:{enumerable:!1,value:function(e,t){return this.doAction(t),!0}},handleMousedown:{enumerable:!1,value:function(e){this._savedSelection=this._selectedRange,this._callOverlays(e.type=="mousedown"?"editorMouseDown":"editorTouchStart",e)}},handleMouseup:{enumerable:!1,value:function(e){this._equalRange(this._savedSelection,this._selectedRange)||this._stopTyping(),this._hasSelectionChangeEvent===!1&&this.handleSelectionchange(),this.handleDragend(e),this._callOverlays(e.type=="mouseup"?"editorMouseUp":"editorTouchEnd",e)}},handleTouchstart:{enumerable:!1,value:function(){this.handleMousedown(event)}},handleTouchend:{enumerable:!1,value:function(){this.handleMouseup(event)}},handleSelectionchange:{enumerable:!1,value:function(){var e=this;this._hasSelectionChangeEvent==null&&(this._hasSelectionChangeEvent=!0);if(this._ignoreSelectionchange||this._equalRange(this._selectedRange,this._savedSelectedRange))return;this._savedSelectedRange=this._selectedRange,this._selectionChangeTimer&&clearTimeout(this._selectionChangeTimer),this._selectionChangeTimer=setTimeout(function(){e._updateStates(),e._dispatchEditorEvent("editorSelect")},100),this._callOverlays("editorSelectionDidChange",this._savedSelectedRange)}},handleDragstart:{enumerable:!1,value:function(e){var t=this._delegateMethod("canDrag");if(t&&!t.call(this.delegate,this,e.srcElement)){e.preventDefault(),e.stopPropagation();return}this._dragSourceElement=e.srcElement}},handleDragenter:{enumerable:!1,value:function(e){this.hideOverlay();var t=this._delegateMethod("canDrop");t?this._allowDrop=t.call(this.delegate,this,e,this._dragSourceElement):this._allowDrop=!0,e.dataTransfer.dropEffect=this._allowDrop?"copy":"none"}},handleDragend:{enumerable:!1,value:function(e){delete this._dragSourceElement,delete this._dragOverX,delete this._dragOverY,this.handleSelectionchange()}},handleDragover:{enumerable:!1,value:function(e){var t=this,n;if(this._dragSourceElement&&this._allowDrop)return;e.dataTransfer.dropEffect=this._allowDrop?"copy":"none",e.preventDefault(),e.stopPropagation(),this._allowDrop&&(e.x!==this._dragOverX||e.y!==this._dragOverY)&&(this._dragOverX=e.x,this._dragOverY=e.y,this._ignoreSelectionchange=!0,document.caretRangeFromPoint?n=document.caretRangeFromPoint(e.x,e.y):e.rangeParent&&e.rangeOffset&&(n=document.createRange(),n.setStart(e.rangeParent,e.rangeOffset),n.setEnd(e.rangeParent,e.rangeOffset)),n&&(this._selectedRange=n),this._ignoreSelectionchangeTimer&&clearTimeout(this._ignoreSelectionchangeTimer),this._ignoreSelectionchangeTimer=setTimeout(function(){delete t._ignoreSelectionchange,t._ignoreSelectionchangeTimer=null},0))}},handleDrop:{enumerable:!1,value:function(e){var t=this,n=e.dataTransfer.files,r=n.length,i,s,o,u,a,l;if(this._dragSourceElement){this._stopTyping(),this.undoManager&&this.undoManager.register("Move",f.resolve([this._undo,this,"Move",this._innerElement])),this._ignoreNextInputEvent=!0,this.handleDragend(e),this.handleSelectionchange();return}e.preventDefault(),e.stopPropagation();if(r)for(u=0;u<r;u++)i=n[u],a=this._delegateMethod("shouldDropFile"),l=!0,window.FileReader?(o=new FileReader,o.onload=function(){s=o.result,a&&(l=a.call(t.delegate,t,i,s)),l===!0?i.type.match(/^image\//i)&&(t.execCommand("insertimage",!1,s,"Drop"),t.markDirty()):typeof l=="string"&&(t.execCommand("inserthtml",!1,l,"Drop"),t.markDirty())},o.onprogress=function(e){},o.onerror=function(e){},o.readAsDataURL(i)):(a&&(l=a.call(this.delegate,this,i)),typeof l=="string"&&(t.execCommand("inserthtml",!1,l,"Drop"),t.markDirty()));else{s=e.dataTransfer.getData("text/html");if(s)this._sanitizer&&(s=this._sanitizer.willInsertHtmlData(s,this._uniqueId));else{s=e.dataTransfer.getData("text/plain")||e.dataTransfer.getData("text");if(s){var c=document.createElement("div");c.innerText?c.innerText=s:c.textContent=s,s=c.innerHTML}}if(s){var a=this._delegateMethod("shouldDrop"),l;a?(l=a.call(this.delegate,this,e,s,"text/html"),l===!0?s=s.replace(/\<meta [^>]+>/gi,""):s=l===!1?null:l):s=s.replace(/\<meta [^>]+>/gi,""),s&&s.length&&(this.execCommand("inserthtml",!1,s,"Drop"),this.markDirty())}}this.handleDragend(e)}},handleCut:{enumerable:!1,value:function(e){this._stopTyping(),this.undoManager&&this.undoManager.register("Cut",f.resolve([this._undo,this,"Cut",this._innerElement])),this._ignoreNextInputEvent=!0}},handlePaste:{enumerable:!1,value:function(e){var t=this,n=e.clipboardData,r=n.getData("text/html"),i,s,o,u,a,f,l;u=r&&r.match(/^(<meta [^>]*>|<html>)/i),r&&u?this._sanitizer&&(r=this._sanitizer.willInsertHtmlData(r,this._uniqueId)):(r=n.getData("text/plain")||n.getData("text"),r&&(o=document.createElement("div"),o.innerText?o.innerText=r:o.textContent=r,r=o.innerHTML)),r?(i=this._delegateMethod("shouldPaste"),i?(s=i.call(this.delegate,this,e,r,"text/html"),s===!0?r=r.replace(/\<meta [^>]+>/gi,""):r=s===!1?null:s):r=r.replace(/\<meta [^>]+>/gi,""),r&&r.length&&(this.execCommand("inserthtml",!1,r,"Paste"),this.markDirty())):n.items.length&&(a=n.items[0],a.kind=="file"&&a.type.match(/^image\/.*$/)&&(f=a.getAsFile(),s=!0,i=t._delegateMethod("shouldPasteFile"),window.FileReader?(l=new FileReader,l.onload=function(){r=l.result,i&&(s=i.call(t.delegate,t,f,r)),s===!0&&f.type.match(/^image\//i)&&(t.execCommand("insertimage",!1,r,"Paste"),t.markDirty())},l.onprogress=function(e){},l.onerror=function(e){},l.readAsDataURL(f)):(i&&(s=i.call(this.delegate,this,f)),s===!0))),e.preventDefault(),e.stopPropagation()}},handleAction:{enumerable:!1,value:function(e){var t=e.currentTarget,n=t.action||t.identifier,r=!1;n&&this.doAction(n,r)}},doAction:{enumerable:!0,value:function(e,t){this.execCommand(e,!1,t),this._updateStates()}},_undo:{enumerable:!1,value:function(e,t){var n=this._innerElement;if(!t||t===n)this._doingUndoRedo=!0,this._ignoreNextInputEvent=!0,document.execCommand("undo",!1,null),this.markDirty(),this.undoManager&&this.undoManager.register(e,f.resolve([this._redo,this,e,n])),this._doingUndoRedo=!1}},_redo:{enumerable:!1,value:function(e,t){var n=this._innerElement;if(!t||t===n)this._doingUndoRedo=!0,this._ignoreNextInputEvent=!0,document.execCommand("redo",!1,null),this.markDirty(),this.undoManager&&this.undoManager.register(e,f.resolve([this._undo,this,e,n])),this._doingUndoRedo=!1}},_execCommandLabel:{enumerable:!1,value:{bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"strikeThrough",subscript:"Subscript",superscript:"Superscript",indent:"Indent",outdent:"Outdent",insertorderedlist:"Ordered List",insertunorderedlist:"Unordered List",justifyleft:"Left Align",justifycenter:"Center",justifyright:"Right Align",justifyfull:"Justify",fontname:"Set Font",fontsize:"Set Size",forecolor:"Set Color",backcolor:"Set Color"}},_dispatchEditorEvent:{enumerable:!1,value:function(e,t){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,!1,t===undefined?null:t),n.type=e,this.dispatchEvent(n)}},_delegateMethod:{enumerable:!1,value:function(e){var t,n,r;return typeof this.identifier=="string"?n=this.identifier+e.toCapitalized():n=e,(t=this.delegate)&&typeof (r=t[n])=="function"?r:null}},_callOverlays:{value:function(e,t,n){var r,i=this._activeOverlay,s;if(i&&typeof i[e]=="function"&&i[e](t)&&!n)return!0;for(r in this._overlays){s=this._overlays[r];if(s!==i&&typeof s[e]=="function"&&s[e](t)&&!n)return!0}return!1}},_nodeOffset:{enumerable:!1,value:function(e){var t=e.parentNode,n=t.childNodes,r;for(r in n)if(n[r]===e)return parseInt(r,10);return-1}},_lastInnerNode:{enumerable:!1,value:function(){var e=this._innerElement.childNodes,t=e.length,n=null;while(e){t=e.length;if(!t)break;n=e[t-1],e=n.childNodes}return n}},_selectedRange:{enumerable:!1,set:function(e){if(window.getSelection){var t=window.getSelection();t.removeAllRanges(),t.addRange(e)}else e.select()},get:function(){var e,t;window.getSelection?e=window.getSelection():document.selection&&(e=document.selection.createRange());if(e.getRangeAt)return e.rangeCount?e.getRangeAt(0):document.createRange();var t=document.createRange();return t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset),t}},_equalRange:{enumerable:!1,value:function(e,t){return e===t?!0:!e||!t?!1:e.startContainer==t.startContainer&&e.startOffset==t.startOffset&&e.endContainer==t.endContainer&&e.endOffset==t.endOffset}},_innerText:{enumerable:!1,value:function(e){var t="",n=[],r="",i=!1,s=function(e){var t=e.nodeName,o;if(t.match(/^(TITLE|STYLE|SCRIPT)$/))return;i&&t.match(/^(P|DIV|BR|TR|LI)$/)&&(r+="\n");for(o=e.firstChild;o;o=o.nextSibling)o.nodeType==3?(n.push(r+o.nodeValue),r="",i=!0):(o.nodeName!="BR"||o.nextSibling)&&s(o);i&&t.match(/^(TABLE|UL|OL)$/)&&(r+="\n")};return e&&(s(e),t=n.join("")),t}}})}})