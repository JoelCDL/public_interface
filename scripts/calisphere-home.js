"use strict";$(document).ready(function(){$(".home").length&&(_.each($("form"),function(e){e.reset()}),$(document).on("click",".js-global-header__bars-icon",function(){$(".js-global-header__search").toggleClass(".global-header__search global-header__search--selected"),$(".js-global-header__mobile-links").toggleClass(".global-header__mobile-links global-header__mobile-links--selected"),$(".js-global-header__mobile-links").is(":visible")?$(".js-global-header__mobile-links").attr("aria-expanded",!0):$(".js-global-header__mobile-links").attr("aria-expanded",!1)}),$(document).on("click",".js-global-header__search-icon",function(){$(".js-global-header__search").toggleClass("global-header__search global-header__search--selected")}))});