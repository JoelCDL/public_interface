"use strict";var GlobalSearchFormView=Backbone.View.extend({el:$("body"),events:{"submit #js-searchForm,#js-footSearch":"clearAndSubmit","click .js-global-header__bars-icon":"toggleMobileMenu","click .js-global-header__search-icon":"toggleMobileSearch","click #js-global-header-logo":"clearQueryManager"},clearAndSubmit:function(e){this.model.set({q:$(e.currentTarget).find("input[name=q]").val()},{silent:!0}),this.model.trigger("change:q"),e.preventDefault()},toggleMobileMenu:function(){$(".js-global-header__search").toggleClass("global-header__search global-header__search--selected"),$(".js-global-header__search").is(":visible")?$(".js-global-header__search").attr("aria-expanded",!0):$(".js-global-header__search").attr("aria-expanded",!1),$(".js-global-header__mobile-links").toggleClass(".global-header__mobile-links global-header__mobile-links--selected"),$(".js-global-header__mobile-links").is(":visible")?$(".js-global-header__mobile-links").attr("aria-expanded",!0):$(".js-global-header__mobile-links").attr("aria-expanded",!1)},toggleMobileSearch:function(){$(".js-global-header__search").toggleClass("global-header__search global-header__search--selected"),$(".js-global-header__search").is(":visible")?$(".js-global-header__search").attr("aria-expanded",!0):$(".js-global-header__search").attr("aria-expanded",!1)},clearQueryManager:function(){_.isEmpty(this.model.attributes)||this.model.clear({silent:!0})},initialize:function(){this.listenTo(this.model,"change:q",this.render),$(document).on("pjax:beforeReplace","#js-pageContent",this.pjax_beforeReplace)},closeMenu:function(){$(".js-global-header__search").addClass("global-header__search"),$(".js-global-header__search").removeClass("global-header__search--selected"),$(".js-global-header__mobile-links").addClass("global-header__mobile-links"),$(".js-global-header__mobile-links").removeClass("global-header__mobile-links--selected")},render:function(){if(this.model.has("q")){var e=this.model.get("q");this.model.clear({silent:!0}),this.model.set({q:e},{silent:!0}),$.pjax({url:$("#js-searchForm").attr("action"),container:"#js-pageContent",data:this.model.toJSON()})}else this.model.clear({silent:!0}),$.pjax({url:$("#js-searchForm").attr("action"),container:"#js-pageContent",data:{q:""}});var a;_.each($("#js-searchForm, #js-footerSearch"),(a=this.model,function(e){$("input[name=q][form="+$(e).attr("id")+"]").val(a.get("q"))}))},changeWidth:function(e){void 0!==this.facetForm&&this.facetForm.changeWidth(e),void 0!==this.carousel&&this.carousel.changeWidth(e),void 0!==this.complexCarousel&&this.complexCarousel.changeWidth(e)},pjax_beforeReplace:function(){0<$("#js-mosaicContainer").length&&$("#js-collectionPagination").children().length&&$("#js-mosaicContainer").infiniteScroll("destroy")},pjax_end:function(){this.closeMenu()}});