/*! For license information please see component---src-templates-blog-post-js-a20875c9afaeacbc876a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+Gsb":function(n,e,t){"use strict";n.exports=o;var l=o.prototype;function o(n,e){this.property=n,this.attribute=e}l.space=null,l.attribute=null,l.property=null,l.boolean=!1,l.booleanish=!1,l.overloadedBoolean=!1,l.number=!1,l.commaSeparated=!1,l.spaceSeparated=!1,l.commaOrSpaceSeparated=!1,l.mustUseProperty=!1,l.defined=!1},"2Dja":function(n,e,t){"use strict";var l=t("fLZw"),o=t("oxnk"),r=t("WhXs"),a=t("LecZ"),i=t("TTG4"),u=t("vfP8"),s=t("EwUw"),c=t("qrWY"),p=t("KyWl"),f=p("root"),d=p("element"),h=p("text"),m=/-([a-z])/g;function g(n,e,t,l){var o,s=l.hyperscript||l.vdom||l.vue,c=l.schema,p=r(c,e);null==t||t!=t||s&&!1===t||s&&p.boolean&&!t||(null!==t&&"object"==typeof t&&"length"in t&&(t=(p.commaSeparated?u:i).stringify(t)),p.boolean&&!0===l.hyperscript&&(t=""),l.vue?"style"!==e&&(o="attrs"):p.mustUseProperty||(!0===l.vdom?o="attributes":!0===l.hyperscript&&(o="attrs")),o?(void 0===n[o]&&(n[o]={}),n[o][p.attribute]=t):l.react&&p.space?n[a[p.property]||p.property]=t:n[p.attribute]=t)}function y(n){return Boolean(n&&n.context&&n.cleanup)}function v(n,e){return e.toUpperCase()}n.exports=function(n,e,t){var r,a,i,u,p=t||{};if("function"!=typeof n)throw new Error("h is not a function");"string"==typeof p||"boolean"==typeof p?(r=p,p={}):r=p.prefix;a=function(n){var e=n&&n("div");return Boolean(e&&("_owner"in e||"_store"in e)&&null===e.key)}(n),i=function(n){var e=n&&n("div");return Boolean(e&&e.context&&e.context._isVue)}(n),u=function(n){return n&&"VirtualNode"===n("div").type}(n),null==r&&(r=(!0===a||!0===i||!0===u)&&"h-");if(f(e))e=1===e.children.length&&d(e.children[0])?e.children[0]:{type:"element",tagName:"div",properties:{},children:e.children};else if(!d(e))throw new Error("Expected root or element, not `"+(e&&e.type||e)+"`");return function n(e,t,l){var r,a,i,u,p,f,y,b,x,k=l.schema,w=k,S=t.tagName;"html"===k.space&&"svg"===S.toLowerCase()&&(w=o,l.schema=w);!0===l.vdom&&"html"===w.space&&(S=S.toUpperCase());for(u in r=t.properties,a={},r)g(a,u,r[u],l);"string"!=typeof a.style||!0!==l.vdom&&!0!==l.vue&&!0!==l.react||(a.style=function(n,e){var t={};try{s(n,(function(n,e){t[function(n){"-ms-"===n.slice(0,4)&&(n="ms-"+n.slice(4));return n.replace(m,v)}(n)]=e}))}catch(l){throw l.message=e+"[style]"+l.message.slice("undefined".length),l}return t}(a.style,S));l.prefix&&(l.key++,a.key=l.prefix+l.key);l.vdom&&"html"!==w.space&&(a.namespace=c[w.space]);p=[],i=t.children,f=i?i.length:0,y=-1;for(;++y<f;)b=i[y],d(b)?p.push(n(e,b,l)):h(b)&&p.push(b.value);return x=0===p.length?e(S,a):e(S,a,p),l.schema=k,x}(n,e,{schema:"svg"===p.space?o:l,prefix:r,key:0,react:a,vue:i,vdom:u,hyperscript:y(n)})}},"2dtT":function(n,e,t){"use strict";var l=t("2Dja"),o=t("RdQs");n.exports=function(n){var e=n||{},t=e.createElement,a=e.Fragment,i=e.components||{};function u(n,e,l){var o=r.call(i,n)?i[n]:n;return t(o,e,l)}this.Compiler=function(n){var r=l(u,o(n),e.prefix);return"root"===n.type?(r="div"!==r.type||1===n.children.length&&"element"===n.children[0].type?[r]:r.props.children,t(a||"div",{},r)):r}};var r={}.hasOwnProperty},"2mql":function(n,e,t){"use strict";var l=t("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function u(n){return l.isMemo(n)?a:i[n.$$typeof]||o}i[l.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[l.Memo]=a;var s=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;n.exports=function n(e,t,l){if("string"!=typeof t){if(h){var o=d(t);o&&o!==h&&n(e,o,l)}var a=c(t);p&&(a=a.concat(p(t)));for(var i=u(e),m=u(t),g=0;g<a.length;++g){var y=a[g];if(!(r[y]||l&&l[y]||m&&m[y]||i&&i[y])){var v=f(t,y);try{s(e,y,v)}catch(b){}}}}return e}},EwUw:function(n,e,t){var l=t("Lc7W");n.exports=function(n,e){var t,o=null;if(!n||"string"!=typeof n)return o;for(var r,a,i=l(n),u="function"==typeof e,s=0,c=i.length;s<c;s++)r=(t=i[s]).property,a=t.value,u?e(r,a,t):a&&(o||(o={}),o[r]=a);return o}},Ex3r:function(n,e,t){"use strict";var l=t("U6jy"),o=t("GGo3");n.exports=function(n){var e,t,r=n.length,a=[],i=[],u=-1;for(;++u<r;)e=n[u],a.push(e.property),i.push(e.normal),t=e.space;return new o(l.apply(null,a),l.apply(null,i),t)}},GGo3:function(n,e,t){"use strict";n.exports=o;var l=o.prototype;function o(n,e,t){this.property=n,this.normal=e,t&&(this.space=t)}l.space=null,l.normal={},l.property={}},JMON:function(n,e,t){"use strict";n.exports=o;var l=t("SAtU");function o(n,e,t,o){var a;function i(n,l,u){var s,c=[];return(e&&!a(n,l,u[u.length-1]||null)||!1!==(c=r(t(n,u)))[0])&&n.children&&"skip"!==c[0]&&!1===(s=r(function(n,e){var t,l=o?-1:1,r=(o?n.length:-1)+l;for(;r>-1&&r<n.length;){if(!1===(t=i(n[r],r,e))[0])return t;r="number"==typeof t[1]?t[1]:r+l}}(n.children,u.concat(n))))[0]?s:c}"function"==typeof e&&"function"!=typeof t&&(o=t,t=e,e=null),a=l(e),i(n,null,[])}function r(n){return null!==n&&"object"==typeof n&&"length"in n?n:"number"==typeof n?[!0,n]:[n]}o.CONTINUE=!0,o.SKIP="skip",o.EXIT=!1},KyWl:function(n,e,t){"use strict";function l(n){if("string"==typeof n)return function(n){return function(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return a;if("object"==typeof n)return("length"in n?r:o)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function o(n){return function(e){var t;for(t in n)if(e[t]!==n[t])return!1;return!0}}function r(n){var e=function(n){for(var e=[],t=n.length,o=-1;++o<t;)e[o]=l(n[o]);return e}(n),t=e.length;return function(){var n=-1;for(;++n<t;)if(e[n].apply(this,arguments))return!0;return!1}}function a(){return!0}n.exports=l},Lc7W:function(n,e){var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,o=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a=/^:\s*/,i=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,s=/^\s+|\s+$/g;function c(n){return n?n.replace(s,""):""}n.exports=function(n,e){if("string"!=typeof n)throw new TypeError("First argument must be a string");if(!n)return[];e=e||{};var s=1,p=1;function f(n){var e=n.match(l);e&&(s+=e.length);var t=n.lastIndexOf("\n");p=~t?n.length-t:p+n.length}function d(){var n={line:s,column:p};return function(e){return e.position=new h(n),v(),e}}function h(n){this.start=n,this.end={line:s,column:p},this.source=e.source}h.prototype.content=n;var m=[];function g(t){var l=new Error(e.source+":"+s+":"+p+": "+t);if(l.reason=t,l.filename=e.source,l.line=s,l.column=p,l.source=n,!e.silent)throw l;m.push(l)}function y(e){var t=e.exec(n);if(t){var l=t[0];return f(l),n=n.slice(l.length),t}}function v(){y(o)}function b(n){var e;for(n=n||[];e=x();)!1!==e&&n.push(e);return n}function x(){var e=d();if("/"==n.charAt(0)&&"*"==n.charAt(1)){for(var t=2;""!=n.charAt(t)&&("*"!=n.charAt(t)||"/"!=n.charAt(t+1));)++t;if(t+=2,""===n.charAt(t-1))return g("End of comment missing");var l=n.slice(2,t-2);return p+=2,f(l),n=n.slice(t),p+=2,e({type:"comment",comment:l})}}function k(){var n=d(),e=y(r);if(e){if(x(),!y(a))return g("property missing ':'");var l=y(i),o=n({type:"declaration",property:c(e[0].replace(t,"")),value:l?c(l[0].replace(t,"")):""});return y(u),o}}return v(),function(){var n,e=[];for(b(e);n=k();)!1!==n&&(e.push(n),b(e));return e}()}},LecZ:function(n){n.exports=JSON.parse('{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}')},MDy1:function(n,e,t){"use strict";var l=t("hcgW"),o=t("NhCq"),r=l.booleanish,a=l.number,i=l.spaceSeparated;n.exports=o({transform:function(n,e){return"role"===e?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:r,ariaAutoComplete:null,ariaBusy:r,ariaChecked:r,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:i,ariaCurrent:null,ariaDescribedBy:i,ariaDetails:null,ariaDisabled:r,ariaDropEffect:i,ariaErrorMessage:null,ariaExpanded:r,ariaFlowTo:i,ariaGrabbed:r,ariaHasPopup:null,ariaHidden:r,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:i,ariaLevel:a,ariaLive:null,ariaModal:r,ariaMultiLine:r,ariaMultiSelectable:r,ariaOrientation:null,ariaOwns:i,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:r,ariaReadOnly:r,ariaRelevant:null,ariaRequired:r,ariaRoleDescription:i,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:r,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}})},MZ32:function(n,e,t){"use strict";var l=t("tPCP");n.exports=function(n,e){return l(n,e.toLowerCase())}},MwcK:function(n,e,t){"use strict";var l=t("NhCq"),o=t("MZ32");n.exports=l({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:o,properties:{xmlns:null,xmlnsXLink:null}})},N9qd:function(n,e,t){"use strict";var l=t("NhCq");n.exports=l({space:"xlink",transform:function(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},NhCq:function(n,e,t){"use strict";var l=t("w9a4"),o=t("GGo3"),r=t("dIZg");n.exports=function(n){var e,t,a=n.space,i=n.mustUseProperty||[],u=n.attributes||{},s=n.properties,c=n.transform,p={},f={};for(e in s)t=new r(e,c(u,e),s[e],a),-1!==i.indexOf(e)&&(t.mustUseProperty=!0),p[e]=t,f[l(e)]=e,f[l(t.attribute)]=e;return new o(p,f,a)}},RdQs:function(n,e,t){"use strict";var l=t("ptzP"),o=Object.prototype.hasOwnProperty,r={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(n){var e;if("tr"===n.tagName||"td"===n.tagName||"th"===n.tagName)for(e in r)o.call(r,e)&&void 0!==n.properties[e]&&(i(n,r[e],n.properties[e]),delete n.properties[e])}function i(n,e,t){var l=(n.properties.style||"").trim();l&&!/;\s*/.test(l)&&(l+=";"),l&&(l+=" ");var o=l+e+": "+t+";";n.properties.style=o}n.exports=function(n){return l(n,"element",a),n}},SAtU:function(n,e,t){"use strict";function l(n){if("string"==typeof n)return function(n){return function(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return a;if("object"==typeof n)return("length"in n?r:o)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function o(n){return function(e){var t;for(t in n)if(e[t]!==n[t])return!1;return!0}}function r(n){var e=function(n){for(var e=[],t=n.length,o=-1;++o<t;)e[o]=l(n[o]);return e}(n),t=e.length;return function(){var n=-1;for(;++n<t;)if(e[n].apply(this,arguments))return!0;return!1}}function a(){return!0}n.exports=l},TOwV:function(n,e,t){"use strict";n.exports=t("qT12")},TTG4:function(n,e,t){"use strict";e.parse=function(n){var e=String(n||"").trim();return""===e?[]:e.split(l)},e.stringify=function(n){return n.join(" ").trim()};var l=/[ \t\n\r\f]+/g},U6jy:function(n,e){n.exports=function(){for(var n={},e=0;e<arguments.length;e++){var l=arguments[e];for(var o in l)t.call(l,o)&&(n[o]=l[o])}return n};var t=Object.prototype.hasOwnProperty},WhXs:function(n,e,t){"use strict";var l=t("w9a4"),o=t("dIZg"),r=t("+Gsb");n.exports=function(n,e){var t=l(e),p=e,f=r;if(t in n.normal)return n.property[n.normal[t]];t.length>4&&"data"===t.slice(0,4)&&a.test(e)&&("-"===e.charAt(4)?p=function(n){var e=n.slice(5).replace(i,c);return"data"+e.charAt(0).toUpperCase()+e.slice(1)}(e):e=function(n){var e=n.slice(4);if(i.test(e))return n;"-"!==(e=e.replace(u,s)).charAt(0)&&(e="-"+e);return"data"+e}(e),f=o);return new f(p,e)};var a=/^data[-\w.:]+$/i,i=/-[a-z]/g,u=/[A-Z]/g;function s(n){return"-"+n.toLowerCase()}function c(n){return n.charAt(1).toUpperCase()}},dIZg:function(n,e,t){"use strict";var l=t("+Gsb"),o=t("hcgW");n.exports=i,i.prototype=new l,i.prototype.defined=!0;var r=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],a=r.length;function i(n,e,t,i){var s,c=-1;for(u(this,"space",i),l.call(this,n,e);++c<a;)u(this,s=r[c],(t&o[s])===o[s])}function u(n,e,t){t&&(n[e]=t)}},fLZw:function(n,e,t){"use strict";var l=t("Ex3r"),o=t("N9qd"),r=t("rhP3"),a=t("MwcK"),i=t("MDy1"),u=t("wGdx");n.exports=l([r,o,a,i,u])},hcgW:function(n,e,t){"use strict";var l=0;function o(){return Math.pow(2,++l)}e.boolean=o(),e.booleanish=o(),e.overloadedBoolean=o(),e.number=o(),e.spaceSeparated=o(),e.commaSeparated=o(),e.commaOrSpaceSeparated=o()},oxnk:function(n,e,t){"use strict";var l=t("Ex3r"),o=t("N9qd"),r=t("rhP3"),a=t("MwcK"),i=t("MDy1"),u=t("rv6P");n.exports=l([r,o,a,i,u])},ptzP:function(n,e,t){"use strict";n.exports=i;var l=t("JMON"),o=l.CONTINUE,r=l.SKIP,a=l.EXIT;function i(n,e,t,o){"function"==typeof e&&"function"!=typeof t&&(o=t,t=e,e=null),l(n,e,(function(n,e){var l=e[e.length-1],o=l?l.children.indexOf(n):null;return t(n,o,l)}),o)}i.CONTINUE=o,i.SKIP=r,i.EXIT=a},qT12:function(n,e,t){"use strict";var l="function"==typeof Symbol&&Symbol.for,o=l?Symbol.for("react.element"):60103,r=l?Symbol.for("react.portal"):60106,a=l?Symbol.for("react.fragment"):60107,i=l?Symbol.for("react.strict_mode"):60108,u=l?Symbol.for("react.profiler"):60114,s=l?Symbol.for("react.provider"):60109,c=l?Symbol.for("react.context"):60110,p=l?Symbol.for("react.async_mode"):60111,f=l?Symbol.for("react.concurrent_mode"):60111,d=l?Symbol.for("react.forward_ref"):60112,h=l?Symbol.for("react.suspense"):60113,m=l?Symbol.for("react.suspense_list"):60120,g=l?Symbol.for("react.memo"):60115,y=l?Symbol.for("react.lazy"):60116,v=l?Symbol.for("react.block"):60121,b=l?Symbol.for("react.fundamental"):60117,x=l?Symbol.for("react.responder"):60118,k=l?Symbol.for("react.scope"):60119;function w(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case o:switch(n=n.type){case p:case f:case a:case u:case i:case h:return n;default:switch(n=n&&n.$$typeof){case c:case d:case y:case g:case s:return n;default:return e}}case r:return e}}}function S(n){return w(n)===f}e.AsyncMode=p,e.ConcurrentMode=f,e.ContextConsumer=c,e.ContextProvider=s,e.Element=o,e.ForwardRef=d,e.Fragment=a,e.Lazy=y,e.Memo=g,e.Portal=r,e.Profiler=u,e.StrictMode=i,e.Suspense=h,e.isAsyncMode=function(n){return S(n)||w(n)===p},e.isConcurrentMode=S,e.isContextConsumer=function(n){return w(n)===c},e.isContextProvider=function(n){return w(n)===s},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===o},e.isForwardRef=function(n){return w(n)===d},e.isFragment=function(n){return w(n)===a},e.isLazy=function(n){return w(n)===y},e.isMemo=function(n){return w(n)===g},e.isPortal=function(n){return w(n)===r},e.isProfiler=function(n){return w(n)===u},e.isStrictMode=function(n){return w(n)===i},e.isSuspense=function(n){return w(n)===h},e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===a||n===f||n===u||n===i||n===h||n===m||"object"==typeof n&&null!==n&&(n.$$typeof===y||n.$$typeof===g||n.$$typeof===s||n.$$typeof===c||n.$$typeof===d||n.$$typeof===b||n.$$typeof===x||n.$$typeof===k||n.$$typeof===v)},e.typeOf=w},qrWY:function(n){n.exports=JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}')},rhP3:function(n,e,t){"use strict";var l=t("NhCq");n.exports=l({space:"xml",transform:function(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},rv6P:function(n,e,t){"use strict";var l=t("hcgW"),o=t("NhCq"),r=t("tPCP"),a=l.boolean,i=l.number,u=l.spaceSeparated,s=l.commaSeparated,c=l.commaOrSpaceSeparated;n.exports=o({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:r,properties:{about:c,accentHeight:i,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:i,amplitude:i,arabicForm:null,ascent:i,attributeName:null,attributeType:null,azimuth:i,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:i,by:null,calcMode:null,capHeight:i,className:u,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:i,diffuseConstant:i,direction:null,display:null,dur:null,divisor:i,dominantBaseline:null,download:a,dx:null,dy:null,edgeMode:null,editable:null,elevation:i,enableBackground:null,end:null,event:null,exponent:i,externalResourcesRequired:null,fill:null,fillOpacity:i,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:s,g2:s,glyphName:s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:i,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:i,horizOriginX:i,horizOriginY:i,id:null,ideographic:i,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:i,k:i,k1:i,k2:i,k3:i,k4:i,kernelMatrix:c,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:i,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:i,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:i,overlineThickness:i,paintOrder:null,panose1:null,path:null,pathLength:i,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:u,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:i,pointsAtY:i,pointsAtZ:i,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:c,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:c,rev:c,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:c,requiredFeatures:c,requiredFonts:c,requiredFormats:c,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:i,specularExponent:i,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:i,strikethroughThickness:i,string:null,stroke:null,strokeDashArray:c,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:i,strokeOpacity:i,strokeWidth:null,style:null,surfaceScale:i,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:c,tabIndex:i,tableValues:null,target:null,targetX:i,targetY:i,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:c,to:null,transform:null,u1:null,u2:null,underlinePosition:i,underlineThickness:i,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:i,values:null,vAlphabetic:i,vMathematical:i,vectorEffect:null,vHanging:i,vIdeographic:i,version:null,vertAdvY:i,vertOriginX:i,vertOriginY:i,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:i,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}})},tPCP:function(n,e,t){"use strict";n.exports=function(n,e){return e in n?n[e]:e}},vfP8:function(n,e,t){"use strict";e.parse=function(n){var e,t=[],l=String(n||""),o=l.indexOf(","),r=0,a=!1;for(;!a;)-1===o&&(o=l.length,a=!0),!(e=l.slice(r,o).trim())&&a||t.push(e),r=o+1,o=l.indexOf(",",r);return t},e.stringify=function(n,e){var t=e||{},l=!1===t.padLeft?"":" ",o=t.padRight?" ":"";""===n[n.length-1]&&(n=n.concat(""));return n.join(o+","+l).trim()}},w9a4:function(n,e,t){"use strict";n.exports=function(n){return n.toLowerCase()}},wGdx:function(n,e,t){"use strict";var l=t("hcgW"),o=t("NhCq"),r=t("MZ32"),a=l.boolean,i=l.overloadedBoolean,u=l.booleanish,s=l.number,c=l.spaceSeparated,p=l.commaSeparated;n.exports=o({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:r,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allow:null,allowFullScreen:a,allowPaymentRequest:a,allowUserMedia:a,alt:null,as:null,async:a,autoCapitalize:null,autoComplete:c,autoFocus:a,autoPlay:a,capture:a,charSet:null,checked:a,cite:null,className:c,cols:s,colSpan:null,content:null,contentEditable:u,controls:a,controlsList:c,coords:s|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:a,defer:a,dir:null,dirName:null,disabled:a,download:i,draggable:u,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:a,formTarget:null,headers:c,height:s,hidden:a,high:s,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,imageSizes:null,imageSrcSet:p,inputMode:null,integrity:null,is:null,isMap:a,itemId:null,itemProp:c,itemRef:c,itemScope:a,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:a,low:s,manifest:null,max:null,maxLength:s,media:null,method:null,min:null,minLength:s,multiple:a,muted:a,name:null,nonce:null,noModule:a,noValidate:a,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:a,optimum:s,pattern:null,ping:c,placeholder:null,playsInline:a,poster:null,preload:null,readOnly:a,referrerPolicy:null,rel:c,required:a,reversed:a,rows:s,rowSpan:s,sandbox:c,scope:null,scoped:a,seamless:a,selected:a,shape:null,size:s,sizes:null,slot:null,span:s,spellCheck:u,src:null,srcDoc:null,srcLang:null,srcSet:p,start:s,step:null,style:null,tabIndex:s,target:null,title:null,translate:null,type:null,typeMustMatch:a,useMap:null,value:u,width:s,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:s,borderColor:null,bottomMargin:s,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:a,declare:a,event:null,face:null,frame:null,frameBorder:null,hSpace:s,leftMargin:s,link:null,longDesc:null,lowSrc:null,marginHeight:s,marginWidth:s,noResize:a,noHref:a,noShade:a,noWrap:a,object:null,profile:null,prompt:null,rev:null,rightMargin:s,rules:null,scheme:null,scrolling:u,standby:null,summary:null,text:null,topMargin:s,valueType:null,version:null,vAlign:null,vLink:null,vSpace:s,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:a,disableRemotePlayback:a,prefix:null,property:null,results:s,security:null,unselectable:null}})},wx14:function(n,e,t){"use strict";function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(n[l]=t[l])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return l}))},yZlL:function(n,e,t){"use strict";t.r(e),t.d(e,"query",(function(){return D}));var l=t("q1tI"),o=t.n(l),r=t("2dtT"),a=t.n(r),i=t("Bl7J"),u=t("vrFN"),s=t("zLVn"),c=t("wx14"),p=t("JX7q"),f=t("dI71"),d=t("TOwV"),h=t("2mql"),m=t.n(h);function g(n,e){if(!n){var t=new Error("loadable: "+e);throw t.framesToPop=1,t.name="Invariant Violation",t}}var y=o.a.createContext();var v={initialChunks:{}};var b=function(n){return n};function x(n){var e=n.defaultResolveComponent,t=void 0===e?b:e,l=n.render,r=n.onLoad;function a(n,e){void 0===e&&(e={});var a=function(n){return"function"==typeof n?{requireAsync:n,resolve:function(){},chunkName:function(){}}:n}(n),i={};function u(n){return e.cacheKey?e.cacheKey(n):a.resolve?a.resolve(n):"static"}function h(n,l,o){var r=e.resolveComponent?e.resolveComponent(n,l):t(n);if(e.resolveComponent&&!Object(d.isValidElementType)(r))throw new Error("resolveComponent returned something that is not a React component!");return m()(o,r,{preload:!0}),r}var b,x=function(n){function t(t){var l;return(l=n.call(this,t)||this).state={result:null,error:null,loading:!0,cacheKey:u(t)},g(!t.__chunkExtractor||a.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),t.__chunkExtractor?(!1===e.ssr||(a.requireAsync(t).catch((function(){return null})),l.loadSync(),t.__chunkExtractor.addChunk(a.chunkName(t))),Object(p.a)(l)):(!1!==e.ssr&&(a.isReady&&a.isReady(t)||a.chunkName&&v.initialChunks[a.chunkName(t)])&&l.loadSync(),l)}Object(f.a)(t,n),t.getDerivedStateFromProps=function(n,e){var t=u(n);return Object(c.a)({},e,{cacheKey:t,loading:e.loading||e.cacheKey!==t})};var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0;var n=this.getCache();n&&"REJECTED"===n.status&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(n,e){e.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(n,e){this.mounted&&this.setState(n,e)},o.getCacheKey=function(){return u(this.props)},o.getCache=function(){return i[this.getCacheKey()]},o.setCache=function(n){void 0===n&&(n=void 0),i[this.getCacheKey()]=n},o.triggerOnLoad=function(){var n=this;r&&setTimeout((function(){r(n.state.result,n.props)}))},o.loadSync=function(){if(this.state.loading)try{var n=h(a.requireSync(this.props),this.props,w);this.state.result=n,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:a.resolve(this.props),chunkName:a.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},o.loadAsync=function(){var n=this,e=this.resolveAsync();return e.then((function(e){var t=h(e,n.props,{Loadable:w});n.safeSetState({result:t,loading:!1},(function(){return n.triggerOnLoad()}))})).catch((function(e){return n.safeSetState({error:e,loading:!1})})),e},o.resolveAsync=function(){var n=this,e=this.props,t=(e.__chunkExtractor,e.forwardedRef,Object(s.a)(e,["__chunkExtractor","forwardedRef"])),l=this.getCache();return l||((l=a.requireAsync(t)).status="PENDING",this.setCache(l),l.then((function(){l.status="RESOLVED"}),(function(e){console.error("loadable-components: failed to asynchronously load component",{fileName:a.resolve(n.props),chunkName:a.chunkName(n.props),error:e?e.message:e}),l.status="REJECTED"}))),l},o.render=function(){var n=this.props,t=n.forwardedRef,o=n.fallback,r=(n.__chunkExtractor,Object(s.a)(n,["forwardedRef","fallback","__chunkExtractor"])),a=this.state,i=a.error,u=a.loading,p=a.result;if(e.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(i)throw i;var f=o||e.fallback||null;return u?f:l({fallback:f,result:p,options:e,props:Object(c.a)({},r,{ref:t})})},t}(o.a.Component),k=(b=x,function(n){return o.a.createElement(y.Consumer,null,(function(e){return o.a.createElement(b,Object.assign({__chunkExtractor:e},n))}))}),w=o.a.forwardRef((function(n,e){return o.a.createElement(k,Object.assign({forwardedRef:e},n))}));return w.preload=function(n){a.requireAsync(n)},w.load=function(n){return a.requireAsync(n)},w}return{loadable:a,lazy:function(n,e){return a(n,Object(c.a)({},e,{suspense:!0}))}}}var k=x({defaultResolveComponent:function(n){return n.__esModule?n.default:n.default||n},render:function(n){var e=n.result,t=n.props;return o.a.createElement(e,t)}}),w=k.loadable,S=k.lazy,C=x({onLoad:function(n,e){n&&e.forwardedRef&&("function"==typeof e.forwardedRef?e.forwardedRef(n):e.forwardedRef.current=n)},render:function(n){var e=n.result,t=n.props;return t.children?t.children(e):null}}),P=C.loadable,O=C.lazy;var E=w;E.lib=P,S.lib=O;var L=E((function(){return Promise.all([t.e(4),t.e(14)]).then(t.bind(null,"KSVO"))}));function M(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(L,null))}t("kMIJ"),e.default=function(n){var e,t=n.data.markdownRemark,l=new a.a({createElement:o.a.createElement,components:{"fundies-linter":M,"table-of-contents":(e=t.tableOfContents,function(){return o.a.createElement("div",{className:"table-of-contents max-w-xs shadow-lg p-5 border rounded"},o.a.createElement("p",{className:"mb-0 font-bold text-sm uppercase"},"TABLE OF CONTENTS"),o.a.createElement("div",{className:"mt-2 mr-5",dangerouslySetInnerHTML:{__html:e}}))})}}).Compiler;return o.a.createElement(i.a,{className:"px-5",navLinks:[{text:"Blog",href:"/blog"}]},o.a.createElement(u.a,{title:t.frontmatter.title}),o.a.createElement("div",{className:"container mx-auto"},o.a.createElement("div",{className:"my-8"},o.a.createElement("h1",{className:"mb-0"},t.frontmatter.title),o.a.createElement("span",{className:"text-pen-lighter"},t.frontmatter.date,o.a.createElement("span",{className:"px-3 text-paper-dark text-lg pb-px"},"|"),t.frontmatter.author)),o.a.createElement("div",{"data-markdown":"true"},l(t.htmlAst))))};var D="515963859"},zLVn:function(n,e,t){"use strict";function l(n,e){if(null==n)return{};var t,l,o={},r=Object.keys(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||(o[t]=n[t]);return o}t.d(e,"a",(function(){return l}))}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a20875c9afaeacbc876a.js.map