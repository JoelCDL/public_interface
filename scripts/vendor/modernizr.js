!function(o,f,p){var s=[],e={_version:"3.8.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},c=function(){};c.prototype=e,c=new c;var l=[];function m(e,t){return typeof e===t}var i,n,h=f.documentElement,g="svg"===h.nodeName.toLowerCase();function d(e){var t=h.className,n=c._config.classPrefix||"";if(g&&(t=t.baseVal),c._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}c._config.enableClasses&&(0<e.length&&(t+=" "+n+e.join(" "+n)),g?h.className.baseVal=t:h.className=t)}function u(e,t){if("object"==typeof e)for(var n in e)i(e,n)&&u(n,e[n]);else{var a=(e=e.toLowerCase()).split("."),r=c[a[0]];if(2===a.length&&(r=r[a[1]]),void 0!==r)return c;t="function"==typeof t?t():t,1===a.length?c[a[0]]=t:(!c[a[0]]||c[a[0]]instanceof Boolean||(c[a[0]]=new Boolean(c[a[0]])),c[a[0]][a[1]]=t),d([(t&&!1!==t?"":"no-")+a.join("-")]),c._trigger(e,t)}return c}function v(e,t){return!!~(""+e).indexOf(t)}function y(){return"function"!=typeof f.createElement?f.createElement(arguments[0]):g?f.createElementNS.call(f,"http://www.w3.org/2000/svg",arguments[0]):f.createElement.apply(f,arguments)}i=m(n={}.hasOwnProperty,"undefined")||m(n.call,"undefined")?function(e,t){return t in e&&m(e.constructor.prototype[t],"undefined")}:function(e,t){return n.call(e,t)},e._l={},e.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),c.hasOwnProperty(e)&&setTimeout(function(){c._trigger(e,c[e])},0)},e._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},c._q.push(function(){e.addTest=u}),g||function(e,i){var r,s,t=e.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,n="_html5shiv",a=0,l={};function u(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}function f(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function p(e){var t=l[e[n]];return t||(t={},a++,e[n]=a,l[a]=t),t}function d(e,t,n){return t||(t=i),s?t.createElement(e):(n||(n=p(t)),!(a=n.cache[e]?n.cache[e].cloneNode():c.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||o.test(e)||a.tagUrn?a:n.frag.appendChild(a));var a}function m(e){e||(e=i);var t,n,a=p(e);return!h.shivCSS||r||a.hasCSS||(a.hasCSS=!!u(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||(t=e,(n=a).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return h.shivMethods?d(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+f().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,n.frag)),e}!function(){try{var e=i.createElement("a");e.innerHTML="<xyz></xyz>",r="hidden"in e,s=1==e.childNodes.length||function(){i.createElement("a");var e=i.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=r=!0}}();var h={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==t.shivCSS,supportsUnknownElements:s,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:m,createElement:d,createDocumentFragment:function(e,t){if(e||(e=i),s)return e.createDocumentFragment();for(var n=(t=t||p(e)).frag.cloneNode(),a=0,r=f(),o=r.length;a<o;a++)n.createElement(r[a]);return n},addElements:function(e,t){var n=h.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),h.elements=n+" "+e,m(t)}};e.html5=h,m(i);var g,v=/^$|\b(?:all|print)\b/,y="html5shiv",T=!(s||(g=i.documentElement,void 0===i.namespaces||void 0===i.parentWindow||void 0===g.applyElement||void 0===g.removeNode||void 0===e.attachEvent));function b(e){for(var t,n=e.attributes,a=n.length,r=e.ownerDocument.createElement(y+":"+e.nodeName);a--;)(t=n[a]).specified&&r.setAttribute(t.nodeName,t.nodeValue);return r.style.cssText=e.style.cssText,r}function x(s){var c,l,e=p(s),t=s.namespaces,n=s.parentWindow;if(!T||s.printShived)return s;function d(){clearTimeout(e._removeSheetTimer),c&&c.removeNode(!0),c=null}return void 0===t[y]&&t.add(y),n.attachEvent("onbeforeprint",function(){d();for(var e,t,n,a=s.styleSheets,r=[],o=a.length,i=Array(o);o--;)i[o]=a[o];for(;n=i.pop();)if(!n.disabled&&v.test(n.media)){try{t=(e=n.imports).length}catch(e){t=0}for(o=0;o<t;o++)i.push(e[o]);try{r.push(n.cssText)}catch(e){}}r=function(e){for(var t,n=e.split("{"),a=n.length,r=RegExp("(^|[\\s,>+~])("+f().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),o="$1"+y+"\\:$2";a--;)(t=n[a]=n[a].split("}"))[t.length-1]=t[t.length-1].replace(r,o),n[a]=t.join("}");return n.join("{")}(r.reverse().join("")),l=function(e){for(var t,n=e.getElementsByTagName("*"),a=n.length,r=RegExp("^(?:"+f().join("|")+")$","i"),o=[];a--;)t=n[a],r.test(t.nodeName)&&o.push(t.applyElement(b(t)));return o}(s),c=u(s,r)}),n.attachEvent("onafterprint",function(){!function(e){for(var t=e.length;t--;)e[t].removeNode()}(l),clearTimeout(e._removeSheetTimer),e._removeSheetTimer=setTimeout(d,500)}),s.printShived=!0,s}h.type+=" print",(h.shivPrint=x)(i),"object"==typeof module&&module.exports&&(module.exports=h)}(void 0!==o?o:this,f);var t={elem:y("modernizr")};c._q.push(function(){delete t.elem});var T={style:t.elem.style};function r(e,t,n,a){var r,o,i,s,c,l="modernizr",d=y("div"),u=((c=f.body)||((c=y(g?"svg":"body")).fake=!0),c);if(parseInt(n,10))for(;n--;)(i=y("div")).id=a?a[n]:l+(n+1),d.appendChild(i);return(r=y("style")).type="text/css",r.id="s"+l,(u.fake?u:d).appendChild(r),u.appendChild(d),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(f.createTextNode(e)),d.id=l,u.fake&&(u.style.background="",u.style.overflow="hidden",s=h.style.overflow,h.style.overflow="hidden",h.appendChild(u)),o=t(d,e),u.fake?(u.parentNode.removeChild(u),h.style.overflow=s,h.offsetHeight):d.parentNode.removeChild(d),!!o}function b(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function x(e,t){var n=e.length;if("CSS"in o&&"supports"in o.CSS){for(;n--;)if(o.CSS.supports(b(e[n]),t))return!0;return!1}if("CSSSupportsRule"in o){for(var a=[];n--;)a.push("("+b(e[n])+":"+t+")");return r("@supports ("+(a=a.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===function(e,t,n){var a;if("getComputedStyle"in o){a=getComputedStyle.call(o,e,t);var r=o.console;null!==a?n&&(a=a.getPropertyValue(n)):r&&r[r.error?"error":"log"].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else a=!t&&e.currentStyle&&e.currentStyle[n];return a}(e,null,"position")})}return p}function w(e,t,n,a){if(a=!m(a,"undefined")&&a,!m(n,"undefined")){var r=x(e,n);if(!m(r,"undefined"))return r}for(var o,i,s,c,l,d=["modernizr","tspan","samp"];!T.style&&d.length;)o=!0,T.modElem=y(d.shift()),T.style=T.modElem.style;function u(){o&&(delete T.style,delete T.modElem)}for(s=e.length,i=0;i<s;i++)if(c=e[i],l=T.style[c],v(c,"-")&&(c=c.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),T.style[c]!==p){if(a||m(n,"undefined"))return u(),"pfx"!==t||c;try{T.style[c]=n}catch(e){}if(T.style[c]!==l)return u(),"pfx"!==t||c}return u(),!1}c._q.unshift(function(){delete T.style});var a=e.testProp=function(e,t,n){return w([e],p,t,n)};c.addTest("json","JSON"in o&&"parse"in JSON&&"stringify"in JSON),c.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}),c.addTest("svg",!!f.createElementNS&&!!f.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),c.addTest("bgpositionshorthand",function(){var e=y("a").style,t="right 10px bottom 10px";return e.cssText="background-position: "+t+";",e.backgroundPosition===t});var S="Moz O ms Webkit",C=e._config.usePrefixes?S.split(" "):[];e._cssomPrefixes=C;var E=e._config.usePrefixes?S.toLowerCase().split(" "):[];function k(e,t){return function(){return e.apply(t,arguments)}}function P(e,t,n,a,r){var o=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+C.join(o+" ")+o).split(" ");return m(t,"string")||m(t,"undefined")?w(i,t,a,r):function(e,t,n){var a;for(var r in e)if(e[r]in t)return!1===n?e[r]:m(a=t[e[r]],"function")?k(a,n||t):a;return!1}(i=(e+" "+E.join(o+" ")+o).split(" "),t,n)}function N(e,t,n){return P(e,p,p,t,n)}e._domPrefixes=E,e.testAllProps=P,e.testAllProps=N,c.addTest("flexbox",N("flexBasis","1px",!0)),c.addTest("dataset",function(){var e=y("div");return e.setAttribute("data-a-b","c"),!(!e.dataset||"c"!==e.dataset.aB)}),c.addTest("applicationcache","applicationCache"in o),function(){var t=y("audio");c.addTest("audio",function(){var e=!1;try{(e=!!t.canPlayType)&&(e=new Boolean(e))}catch(e){}return e});try{t.canPlayType&&(c.addTest("audio.ogg",t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")),c.addTest("audio.mp3",t.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,"")),c.addTest("audio.opus",t.canPlayType('audio/ogg; codecs="opus"')||t.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,"")),c.addTest("audio.wav",t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"")),c.addTest("audio.m4a",(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,"")))}catch(e){}}(),c.addTest("canvas",function(){var e=y("canvas");return!(!e.getContext||!e.getContext("2d"))}),c.addTest("canvastext",function(){return!1!==c.canvas&&"function"==typeof y("canvas").getContext("2d").fillText}),c.addTest("geolocation","geolocation"in navigator);var _,$=(_=!("onblur"in h),function(e,t){var n;return!!e&&(t&&"string"!=typeof t||(t=y(t||"div")),!(n=(e="on"+e)in t)&&_&&(t.setAttribute||(t=y("div")),t.setAttribute(e,""),n="function"==typeof t[e],t[e]!==p&&(t[e]=p),t.removeAttribute(e)),n)});e.hasEvent=$,c.addTest("hashchange",function(){return!1!==$("hashchange",o)&&(f.documentMode===p||7<f.documentMode)}),c.addTest("history",function(){var e=navigator.userAgent;return!!e&&((-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol)&&(o.history&&"pushState"in o.history))});var A=y("input"),j="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),z={};c.input=function(e){for(var t=0,n=e.length;t<n;t++)z[e[t]]=!!(e[t]in A);return z.list&&(z.list=!(!y("datalist")||!o.HTMLDataListElement)),z}(j),function(){for(var e,t,n,a=["search","tel","url","email","datetime","date","month","week","time","datetime-local","number","range","color"],r=0;r<a.length;r++)A.setAttribute("type",e=a[r]),(n="text"!==A.type&&"style"in A)&&(A.value="1)",A.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&A.style.WebkitAppearance!==p?(h.appendChild(A),n=(t=f.defaultView).getComputedStyle&&"textfield"!==t.getComputedStyle(A,null).WebkitAppearance&&0!==A.offsetHeight,h.removeChild(A)):/^(search|tel)$/.test(e)||(n=/^(url|email)$/.test(e)?A.checkValidity&&!1===A.checkValidity():"1)"!==A.value)),c.addTest("inputtypes."+e,!!n)}();var R=!0;try{o.postMessage({toString:function(){R=!1}},"*")}catch(e){}c.addTest("postmessage",new Boolean("postMessage"in o)),c.addTest("postmessage.structuredclones",R),function(){var t=y("video");c.addTest("video",function(){var e=!1;try{(e=!!t.canPlayType)&&(e=new Boolean(e))}catch(e){}return e});try{t.canPlayType&&(c.addTest("video.ogg",t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"")),c.addTest("video.h264",t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"")),c.addTest("video.webm",t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")),c.addTest("video.vp9",t.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,"")),c.addTest("video.hls",t.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,"")))}catch(e){}}(),c.addTest("webgl",function(){return"WebGLRenderingContext"in o});var B=!1;try{B="WebSocket"in o&&2===o.WebSocket.CLOSING}catch(e){}c.addTest("websockets",B),c.addTest("cssanimations",N("animationName","a",!0)),c.addTest("backgroundsize",N("backgroundSize","100%",!0)),c.addTest("borderimage",N("borderImage","url() 1",!0)),c.addTest("borderradius",N("borderRadius","0px",!0)),c.addTest("boxshadow",N("boxShadow","1px 1px",!0)),function(){c.addTest("csscolumns",function(){var e=!1,t=N("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(e){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],a=0;a<n.length;a++)e=n[a].toLowerCase(),t=N("column"+n[a]),"breakbefore"!==e&&"breakafter"!==e&&"breakinside"!==e||(t=t||N(n[a])),c.addTest("csscolumns."+e,t)}();var O,L,M,F=e.testStyles=r;(O=navigator.userAgent,L=O.match(/w(eb)?osbrowser/gi),M=O.match(/windows phone/gi)&&O.match(/iemobile\/([0-9])+/gi)&&9<=parseFloat(RegExp.$1),L||M)?c.addTest("fontface",!1):F('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=f.getElementById("smodernizr"),a=n.sheet||n.styleSheet,r=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"",o=/src/i.test(r)&&0===r.indexOf(t.split(" ")[0]);c.addTest("fontface",o)}),F('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){c.addTest("generatedcontent",6<=e.offsetHeight)});var W=e._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];e._prefixes=W,c.addTest("cssgradients",function(){for(var e,t="background-image:",n="",a=0,r=W.length-1;a<r;a++)e=0===a?"to ":"",n+=t+W[a]+"linear-gradient("+e+"left top, #9f9, white);";c._config.usePrefixes&&(n+=t+"-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");var o=y("a").style;return o.cssText=n,-1<(""+o.backgroundImage).indexOf("gradient")}),c.addTest("hsla",function(){var e=y("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",v(e.backgroundColor,"rgba")||v(e.backgroundColor,"hsla")}),c.addTest("multiplebgs",function(){var e=y("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),c.addTest("opacity",function(){var e=y("a").style;return e.cssText=W.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),c.addTest("cssreflections",N("boxReflect","above",!0)),c.addTest("rgba",function(){var e=y("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",-1<(""+e.backgroundColor).indexOf("rgba")}),c.addTest("textshadow",a("textShadow","1px 1px")),c.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&N("transform","scale(1)",!0)});var I="CSS"in o&&"supports"in o.CSS,V="supportsCSS"in o;c.addTest("supports",I||V),c.addTest("csstransforms3d",function(){return!!N("perspective","1px",!0)}),c.addTest("csstransitions",N("transition","all",!0)),c.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}),c.addTest("websqldatabase","openDatabase"in o);var D={}.toString;c.addTest("svgclippaths",function(){return!!f.createElementNS&&/SVGClipPath/.test(D.call(f.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),c.addTest("inlinesvg",function(){var e=y("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),c.addTest("smil",function(){return!!f.createElementNS&&/SVGAnimate/.test(D.call(f.createElementNS("http://www.w3.org/2000/svg","animate")))}),c.addTest("webworkers","Worker"in o),function(){var e,t,n,a,r,o;for(var i in s)if(s.hasOwnProperty(i)){if(e=[],(t=s[i]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=m(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)1===(o=e[r].split(".")).length?c[o[0]]=a:(c[o[0]]&&(!c[o[0]]||c[o[0]]instanceof Boolean)||(c[o[0]]=new Boolean(c[o[0]])),c[o[0]][o[1]]=a),l.push((a?"":"no-")+o.join("-"))}}(),d(l),delete e.addTest,delete e.addAsyncTest;for(var q=0;q<c._q.length;q++)c._q[q]();o.Modernizr=c}(window,document);