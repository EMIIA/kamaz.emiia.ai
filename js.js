!function r(n,t,i){function r(u,e){var s,h,o;if(!t[u]){if(!n[u]){if(s="function"==typeof require&&require,!e&&s)return s(u,!0);if(f)return f(u,!0);h=new Error("Cannot find module '"+u+"'");throw h.code="MODULE_NOT_FOUND",h;}o=t[u]={exports:{}};n[u][0].call(o.exports,function(t){return r(n[u][1][t]||t)},o,o.exports,r,n,t,i)}return t[u].exports}for(var f="function"==typeof require&&require,u=0;u<i.length;u++)r(i[u]);return r}({1:[function(n){"use strict";function i(){return t?document.querySelector(".scroll-wrapper"):document.scrollingElement||document.documentElement}function r(){return(new Date).getTime()}function u(n,t,i){!0===i||!1!==i&&!n.classList.contains(t)?n.classList.add(t):n.classList.remove(t)}function f(n,t){Object.keys(t).forEach(function(i){n.style[i]=t[i]})}function e(){var n=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(n,"px"))}n("objectFitPolyfill/dist/objectFitPolyfill.basic.min");Array.from||(Array.from=function(n){return Array.prototype.slice.call(n)});var t=!1;document.addEventListener("DOMContentLoaded",function(){function a(n,t){var f,e,u,o,s,h=t||500;(o=i())&&(f=o.scrollTop,e=n,u=0,s=r(),function n(){var i=r(),t;u+=Math.min(i-s,50);s=i;t=e;u<=h&&(t=f+(e-f)*Math.sin(u/h*Math.PI/2),requestAnimationFrame(n));o.scrollTop=t}())}document.querySelector(".p-index");var o,c=Array.from(document.querySelectorAll(".p-index__title")),v=document.querySelector(".p-index__section_video"),e=document.querySelector(".p-index__media"),n=e&&e.querySelector("video"),s={},h=function(){function t(){var t=parseInt(getComputedStyle(r).marginTop);o=1===t;n.forEach(function(n){i(n)})}function i(n){n(o,window.innerWidth,window.innerHeight)}var n=[],r=document.querySelector(".p-index__is-desktop");return window.addEventListener("resize",t),t(),{on:function(t){n.indexOf(t)<0&&(n.push(t),i(t))}}}();(function(){function i(n){return n.getAttribute("href").split("#").slice(1).join("#")}function u(n){n.preventDefault();var t=i(n.currentTarget);return history.pushState({},"","#".concat(t)),r(t),!1}function r(i){var r=n[i],u;r?(u=(t?document.querySelector(".scroll-wrapper > *"):document.body).getBoundingClientRect(),a(r.getBoundingClientRect().top-u.top,500)):a(0,500)}var n={};Array.from(document.querySelectorAll("[href^='#']")).forEach(function(t){var r=i(t);r&&(n[r]=t.parentNode);t.addEventListener("click",u)});window.addEventListener("hashchange",function(n){return n.preventDefault(),r(location.hash.substr(1)),!1})})();!/iPad|iPhone|iPod/.test(navigator.userAgent)||window.MSStream||n&&function(n,t,r){var u,f=0,e=0;r.on(function(r){var s=i().scrollWidth,o=document.documentElement.clientHeight;(f!==s||o<e||u!==r)&&(f=s,e=o,u=r,n.style.height=r?"":"".concat(o-2*t[0].clientHeight,"px"))})}(e,c,h);n&&function(n,t){var i,u=n.getAttribute("data-mobile"),f=n.getAttribute("data-desktop"),r=!1;t.on(function(t,e,o){if(!(r&&t&&o<=640)&&i!==t){r=!0;i=t;var h=n.getAttribute("src"),s=t?f:u;h!==s&&(n.setAttribute("src",s),n.setAttribute("poster",n.getAttribute("data-poster-".concat(t?"desktop":"mobile"))))}})}(n,h);var l=function(){var t=0;return{play:function(){n&&1!==t&&(t=1,n.play())},pause:function(){n&&0!==t&&(t=0,n.pause())}}}(),y=l.play,p=l.pause;!function h(){requestAnimationFrame(h),function(){var n=v.getBoundingClientRect(),t=(document.documentElement.scrollTop||document.body.scrollTop)/n.height;f(e,{opacity:1-.5*t});(.9<t?p:y)();c.forEach(o?function(t,i){var r=t.getBoundingClientRect(),e=t.parentNode.parentNode.getBoundingClientRect(),o=n.bottom-r.bottom<.25*-r.height,h=e.top-r.top,c=e.bottom-r.bottom,l=Math.max(h,Math.min(-r.top,c));s[i]=Math.min(0,(s[i]||0)+l);u(t,"p-index__title_light",o);f(t,{transform:"translateY(".concat(s[i],"px)")})}:function(n){var t=n.parentNode.getBoundingClientRect();u(n,"p-index__title_fixed",function(n){var i=n.style.position,t;return n.style.position="relative",t=parseFloat(getComputedStyle(n).bottom),n.style.position=i,t}(n)>=window.innerHeight-t.bottom);n.style.transform=""})}()}()});window.addEventListener("resize",e);e()},{"objectFitPolyfill/dist/objectFitPolyfill.basic.min":2}],2:[function(){!function(){"use strict";var i,r,n,t;"undefined"!=typeof window&&(i=window.navigator.userAgent.match(/Edge\/(\d{2})\./),r=!!i&&16<=parseInt(i[1],10),"objectFit"in document.documentElement.style==0||r?(n=function(n){var t,i,r,f,u,e=n.parentNode;t=e;i=window.getComputedStyle(t,null);r=i.getPropertyValue("position");f=i.getPropertyValue("overflow");u=i.getPropertyValue("display");r&&"static"!==r||(t.style.position="relative");"hidden"!==f&&(t.style.overflow="hidden");u&&"inline"!==u||(t.style.display="block");0===t.clientHeight&&(t.style.height="100%");-1===t.className.indexOf("object-fit-polyfill")&&(t.className=t.className+" object-fit-polyfill"),function(n){var r=window.getComputedStyle(n,null),i={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var t in i)r.getPropertyValue(t)!==i[t]&&(n.style[t]=i[t])}(n);n.style.position="absolute";n.style.height="100%";n.style.width="auto";n.clientWidth>e.clientWidth?(n.style.top="0",n.style.marginTop="0",n.style.left="50%",n.style.marginLeft=n.clientWidth/-2+"px"):(n.style.width="100%",n.style.height="auto",n.style.left="0",n.style.marginLeft="0",n.style.top="50%",n.style.marginTop=n.clientHeight/-2+"px")},t=function(t){var i,u;if(void 0===t||t instanceof Event)t=document.querySelectorAll("[data-object-fit]");else if(t&&t.nodeName)t=[t];else{if("object"!=typeof t||!t.length||!t[0].nodeName)return!1;t=t}for(i=0;i<t.length;i++)if(t[i].nodeName)if(u=t[i].nodeName.toLowerCase(),"img"===u){if(r)continue;t[i].complete?n(t[i]):t[i].addEventListener("load",function(){n(this)})}else"video"!==u||0<t[i].readyState?n(t[i]):t[i].addEventListener("loadedmetadata",function(){n(this)});return!0},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t(),window.addEventListener("resize",t),window.objectFitPolyfill=t):window.objectFitPolyfill=function(){return!1})}()},{}]},{},[1]);
