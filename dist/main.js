!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=new(function(){function e(){o(this,e),this.pre_load_height=200}return r(e,[{key:"window_height",value:function(){var e=document.body,t=document.documentElement;return Math.max(e.offsetHeight,e.scrollHeight,t.clientHeight,t.offsetHeight,t.scrollHeight)}},{key:"scrollTop",value:function(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}},{key:"onButtom",value:function(){return this.scrollTop()+window.innerHeight>=this.window_height()-this.pre_load_height}}]),e}()),u=new(function(){function e(){o(this,e),this.isLoading=!1,this.currentPage=0}return r(e,[{key:"url_maker",value:function(e,t){var n=!0,r=!0,o=!1,i=void 0;try{for(var u,c=Object.keys(t)[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var l=u.value,a="&";n&&(a="?",n=!1),e+=""+a+l+"="+t[l]}}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return e}},{key:"sendHttpRequest",value:function(e,t){var n={game:"League%20of%20Legends",client_id:"80stfocyvne9dzzxyvz4j4x9yl75bd",offset:this.currentPage,language:e},r=this.url_maker("https://api.twitch.tv/kraken/streams/",n),o=new XMLHttpRequest;this.isLoading=!0,o.open("GET",r),o.onload=function(){t(null,JSON.parse(o.responseText))},o.send()}}]),e}());t.scroll_condition=i,t.twitchApi=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={TITLE:"用中文直播的頻道"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={TITLE:"The streams in English"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),o=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default={en:r.default,"zh-tw":o.default}},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(3)),o=n(0);var i="zh-tw";window.onload=function(){l(),u(),document.querySelector(".zh-tw").addEventListener("click",function(){return c("zh-tw")}),document.querySelector(".en").addEventListener("click",function(){return c("en")}),window.onscroll=function(){o.scroll_condition.onButtom()&&(o.twitchApi.isLoading||l())}};var u=function(){document.querySelector(".title").innerHTML=r.default[i].TITLE},c=function(e){i=e,u(),function(){for(var e=document.querySelector(".row");e.firstChild;)e.removeChild(e.firstChild)}(),o.twitchApi.currentPage=0,l()},l=function(){o.twitchApi.sendHttpRequest(i,function(e,t){var n=t.streams,r=document.querySelector(".row"),i=!0,u=!1,c=void 0;try{for(var l,s=n[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var d=l.value;r.insertAdjacentHTML("beforeend",a(d))}}catch(e){u=!0,c=e}finally{try{!i&&s.return&&s.return()}finally{if(u)throw c}}o.twitchApi.currentPage+=20,o.twitchApi.isLoading=!1})},a=function(e){return"\n    <div class='col'>\n      <div class='preview'>\n        <div class='placeholder'></div>\n        <img src='"+e.preview.medium+"' onload='this.style.opacity=1'/>\n      </div>\n      <div class='bottom'>\n        <div class=\"avatar\">\n          <img class='avatar_img' src='"+e.channel.logo+"' />\n        </div>\n        <div class='intro'>\n          <div class='channel_name'>"+e.channel.display_name+"</div>\n          <div class='owner_name'>"+e.channel.name+"</div>\n        </div>\n      </div>\n    </div>  \n    "}}]);