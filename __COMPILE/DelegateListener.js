(function(e){"use strict";e.DelegateListener=function a(b,c){if(!(this instanceof a))return new a(b,c);c.handleEvent&&(this.b=c,c=c.handleEvent);this.filter=b;this.a=c};DelegateListener.prototype.handleEvent=function(a){var b=a.target,c=a.currentTarget,d;do 1===b.nodeType&&this.match(b,this.filter)&&(a.currentTarget=c,a.currentTarget!==c&&(delete a.currentTarget,a.currentTarget=c),a.target=b,a.currentTarget!==c&&(delete a.target,a.target=b),d=this.a.call(this.b||c,a));while(!1!==d&&b!=c&&(b=b.parentNode));return d};
DelegateListener.prototype.match=function(a,b){if("string"==typeof b)return a.matchesSelector(b);if("object"==typeof b)return Object.keys(b).every(function(c){return void 0!==b[c]?a.getAttribute(c)===b[c]:a.hasAttribute(c)});if("function"==typeof b)return b(a)}})(window);