parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QVnC":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3];!function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof module,h=t.regeneratorRuntime;if(h)u&&(module.exports=h);else{(h=t.regeneratorRuntime=u?module.exports:{}).wrap=w;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={},v={};v[i]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=b.prototype=x.prototype=Object.create(v);E.prototype=m.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},h.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(w(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(m),m[c]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}function x(){}function E(){}function b(){}function _(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=L(t[e],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")());
},{}],"53XF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="rgba(0,0,0,0.4);",o="#fefefe",t="#888",a="rgba(8, 8, 8, 0.3)",e="1px solid ".concat(t,";"),i="1px solid ".concat(a),r=" 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",d="#5cb85c",c="800px",p="#f1f1f1",l="#2196F3",s="24px",x="#f44336",b="\n\n/* Center aligns text */\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: ".concat(n,"\n}\n\n/* Modal Content */\n.modal-content {\n    position: relative;\n    background-color: ").concat(o,";\n    margin: auto;\n    padding: 0;\n    border: ").concat(e,";\n    border-radius: 5px;\n    width: 80%;\n    max-width: ").concat(c,";\n    box-shadow: ").concat(r,";\n    -webkit-animation-name: animateTop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animateTop;\n    animation-duration: 0.4s\n}\n\n/* Add Animation */\n@-webkit-keyframes animateTop {\n    from {\n        top:-300px;\n        opacity:0;\n    } \n    to {\n        top:0;\n        opacity:1\n    }\n}\n\n@keyframes animateTop {\n    from {\n        top:-300px; \n        opacity:0\n    }\n    to {\n        top:0;\n        opacity:1\n    }\n}\n\n/* The Close Button */\n.close {\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.modal-open {\n    display: block;\n}\n\n.modal-header {\n    padding: 2px 16px;\n    border-bottom: ").concat(i,";\n}\n\n.modal-body {\n    padding: 2px 16px;\n}\n\n.modal-footer {\n    padding: 2px 16px;\n}\n\n/* Progress bar related styles */\n.progress {\n    background-color: ").concat(p,";\n    width: 100%;\n    margin: 20px 0;\n}\n\n.progress-bar {\n    width: 0;\n    height: ").concat(s,";\n    background-color: ").concat(l,";\n    text-align: center;\n    transition: width 0.5s ease-in-out;\n}\n\n.progress-status {\n    color: white;\n    display: inline-block;\n    margin-top: 3px;\n}\n\n.text-error {\n    color: ").concat(x,";\n}\n"),g=b;exports.default=g;
},{}],"K9MR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=e(require("./styles"));function e(s){return s&&s.__esModule?s:{default:s}}var n="\n<style>\n    ".concat(s.default,'\n</style>\n\x3c!-- Trigger button/Opens the modal --\x3e\n<button class="trigger">Show progress</button>\n\n\x3c!-- The Modal --\x3e\n<div id="modal" class="modal">\n\n  \x3c!-- Modal content --\x3e\n  <div class="modal-content">\n    <div class="modal-header">\n      <span class="close">&times;</span>\n      <h2>Modal Header</h2>\n    </div>\n    <div class="modal-body">\n      <h4>\n        Progress\n      </h4>\n      <p id="message"></p>\n      <div class="progress">\n        <div class="progress-bar"><span class="progress-status" id="progressStatus"></span></div>\n      </div>\n    </div>\n  </div>\n\n</div>\n'),a=n;exports.default=a;
},{"./styles":"53XF"}],"4E2F":[function(require,module,exports) {
"use strict";function e(e,t,r,n,o,s,u){try{var a=e[s](u),i=a.value}catch(c){return void r(c)}a.done?t(i):Promise.resolve(i).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise(function(o,s){var u=t.apply(r,n);function a(t){e(u,o,s,a,i,"next",t)}function i(t){e(u,o,s,a,i,"throw",t)}a(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.getStatus=void 0;var r=function(){var e=t(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.next=8,n.hasOwnProperty("error");case 8:if(!e.sent){e.next=12;break}e.t0=Promise.reject(n),e.next=13;break;case 12:e.t0=Promise.resolve(n);case 13:return e.abrupt("return",e.t0);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();exports.getStatus=r;var n={getStatus:r};exports.default=n;
},{}],"FO+Z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.parseTemplateString=exports.noop=void 0;var e=function(){};exports.noop=e;var r=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.replace(/\{(.+?)\}/g,function(e,t){return r[t]||t})};exports.parseTemplateString=r;var t={noop:e,parseTemplateString:r};exports.default=t;
},{}],"rj8s":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../utils");function t(e){return i(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var s=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.noop;u(this,n),this.duration=t,this.dequeueCb=r,this._events=[],this._intervalId=null}return a(n,[{key:"enqueue",value:function(e){var n=this;this._events=t(this._events).concat(t(e)),this.isDequeuing||this.isEmpty||(this.intervalId=setInterval(function(){if(n.isEmpty)return clearInterval(n.intervalId),void(n.intervalId=null);n.dequeue()},this.duration))}},{key:"dequeue",value:function(){var e=this._events.shift();return this.dequeueCb(e),e}},{key:"isEmpty",get:function(){return 0===this._events.length}},{key:"isDequeuing",get:function(){return null!==this.intervalId}},{key:"intervalId",get:function(){return this._intervalId},set:function(e){this._intervalId=e}}]),n}();exports.default=s;
},{"../../utils":"FO+Z"}],"Df6k":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("./template")),t=require("./progress.service"),r=o(require("./event-queue")),n=require("../../utils");function o(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function g(e){var t="function"==typeof Map?new Map:void 0;return(g=function(e){if(null===e||!d(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,m(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),b(r,e)})(e)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function h(e,t,r){return(h=y()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&b(o,r.prototype),o}).apply(null,arguments)}function d(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=1e3,w=100,S={jobId:"job-id",source:"source"},k=function(o){function u(){var t;return s(this,u),(t=l(this,m(u).call(this))).attachShadow({mode:"open"}),t.shadowRoot.innerHTML=e.default,t._progress=0,t.options=null,t.eventQueue=null,t}return p(u,g(HTMLElement)),a(u,[{key:"getErrorMessage",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).message||"Something is not right. Will retry in sometimes.";return'<span class="text-error">'.concat(e,"</span>")}},{key:"connectedCallback",value:function(){this.init(),this.eventQueue=new r.default(w,this.eventDequeueCb.bind(this))}},{key:"init",value:function(){this.initUi()}},{key:"initUi",value:function(){var e=this;this.shadowRoot.querySelector(".trigger").addEventListener("click",function(){return e.onTrigger()}),this.progressBar=this.shadowRoot.querySelector(".progress-bar"),this.progressStatus=this.shadowRoot.getElementById("progressStatus"),this.shadowRoot.querySelector(".close").addEventListener("click",function(){return e.toggleModal()}),this.progress=0}},{key:"onTrigger",value:function(){this.toggleModal(),this.poll()}},{key:"toggleModal",value:function(){return this.shadowRoot.getElementById("modal").classList.toggle("modal-open")}},{key:"poll",value:function(){var e=this;(0,t.getStatus)(this.statusSource).then(function(t){var r=t.percent>=e.maxProgress?e.maxProgress:t.percent;e.progress=r,e.eventQueue.enqueue(t.events),r===e.maxProgress&&(e.message="Completed.")},function(t){console.error(t),e.message=e.getErrorMessage(t)}).finally(function(){e.progress!==e.maxProgress&&setTimeout(function(){return e.poll()},v)})}},{key:"eventDequeueCb",value:function(e){this.message=e.message}},{key:"statusSource",get:function(){var e=this.getAttribute(S.source);if(null===e)throw new Error("No source provided for status.");this.getAttribute(S.jobId);return(0,n.parseTemplateString)(e,i({},S.jobId,bacthId))}},{key:"message",set:function(e){this.shadowRoot.getElementById("message").innerHTML=e}},{key:"progress",set:function(e){this._progress=e,e="".concat(e,"%"),this.progressBar.style.width=e,this.progressStatus.innerHTML=e},get:function(){return this._progress}},{key:"maxProgress",get:function(){return 100}},{key:"isModalOpen",get:function(){return this.shadowRoot.getElementById("modal").classList.contains("modal-open")}}]),u}(),O=k;exports.default=O;
},{"./template":"K9MR","./progress.service":"4E2F","./event-queue":"rj8s","../../utils":"FO+Z"}],"rkTM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./progress-bar"));function r(e){return e&&e.__esModule?e:{default:e}}var t=e.default;exports.default=t;
},{"./progress-bar":"Df6k"}],"zbOU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./progress-bar"));function r(e){return e&&e.__esModule?e:{default:e}}var t={ProgressBar:e.default};exports.default=t;
},{"./progress-bar":"rkTM"}],"3hpa":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e=r(require("./widgets"));function r(e){return e&&e.__esModule?e:{default:e}}window.SummonWidgets=e.default;
},{"regenerator-runtime/runtime":"QVnC","./widgets":"zbOU"}]},{},["3hpa"], null)
//# sourceMappingURL=/summon-widgets.map