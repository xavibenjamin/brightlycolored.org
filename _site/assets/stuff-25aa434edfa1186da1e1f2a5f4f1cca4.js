!function(e){"use strict";e.fn.fitVids=function(t){var r={customSelector:null},i=document.createElement("div"),n=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return i.className="fit-vids-style",i.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",n.parentNode.insertBefore(i,n),t&&e.extend(r,t),this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com']","object","embed"];r.customSelector&&t.push(r.customSelector);var i=e(this).find(t.join(","));i.each(function(){var t=e(this);if(!("embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var r="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),n=r/i;if(!t.attr("id")){var o="fitvid"+Math.floor(999999*Math.random());t.attr("id",o)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*n+"%"),t.removeAttr("height").removeAttr("width")}})})}}(jQuery),eval(function(e,t,r,i,n){for(n=function(e){return(t>e?"":n(e/t))+String.fromCharCode(e%t+161)};r--;)i[r]&&(e=e.replace(new RegExp(n(r),"g"),i[r]));return e}("Â­ Â¡(){Â¨ Â®={'Â¥':Â¡(Â©){Â¦ Â©!=Ã€?Â¢.Â¥=Â©:Â¢.Â¥},'Â¤':Â¡(){Â¦ Â¢.Â¤()},'Â½':Â¡(Â§){Â¦ Â¢.Â£(Â§)}};$.Â¼=Â®;Â¨ Â¢={'Â¥':Â±,'Â¤':Â¤,'Â£':Â£,'Âª':Â­ Â¸('[\\\\n\\\\r\\\\s]+'+'('+'[^\\\\n\\\\r\\\\s(?:&#Â¯;)]+'+'[\\\\n\\\\r\\\\s]*'+')$','m')};$(Â´).Âµ(Â¡(){Â¶(Â¢.Â¥)Â¤()});Â¡ Â¤(){$('Â·,Âº,Â»,Â¾,Â¿,Â°').Â£()};$.Â².Â£=Â¡(){Â¦ $(Â«).Â³(Â¡(){Â¨ o=$(Â«);o.Â¬(Â¢.Â£(o.Â¬()))})};Â¡ Â£(Â§){Â¦ Â§.Â¹(Â¢.Âª,\"&#Â¯;$1\")}}();",32,32,"function|Private|widont|init|auto|return|string|var|bool|regexp|this|html|new|Public|160|h6|true|fn|each|document|ready|if|h1|RegExp|replace|h2|h3|jqwidont|transform|h4|h5|undefined".split("|"))),$(".video-pusher").fitVids(),$(function(){$("#subForm").submit(function(e){e.preventDefault(),$.getJSON(this.action+"?callback=?",$(this).serialize(),function(e){400===e.Status?$(".page__newsletter-form").append("<p><strong class='form-error'>Error:</strong> "+e.Message):($("form").remove("#subForm"),$(".page__newsletter-form").append("<p><strong class='form-success'>Success:</strong> Your subscription has been confirmed. Thank you for signing up!</p>"))})})}),$(".open-search").on("click",function(){$(".search-wrapper").toggleClass("searchIsOpen")}),$(".open-nav").on("click",function(){$(".site__left-nav, .page-wrap").toggleClass("navIsOpen")}),$(".close-nav").on("click",function(){$(".site__left-nav, .page-wrap").removeClass("navIsOpen")});