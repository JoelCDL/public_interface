"use strict";var ItemView=Backbone.View.extend({el:$("#js-pageContent"),carouselRows:8,carouselConfig:{infinite:!1,speed:300,variableWidth:!0,lazyLoad:"ondemand",rows:0},events:{"click #js-linkBack":"goToSearchResults","beforeChange .carousel":"loadSlides","afterChange .carousel":"carouselAfterChange","beforeChange .js-related-carousel":"exhibitCarouselBeforeChange","click .js-relatedExhibition":"goToExhibition","click .js-item-link":"goToItemPage","click .js-rc-page":"paginateRelatedCollections","click .js-relatedCollection":"selectRelatedCollection","click .js-disqus":"initDisqus","click #js-downloadModal":"sendGA","click #js-requestModal":"sendGA","click #js-downloadBtn":"sendGA","click #js-requestBtn":"sendGA"},sendGA:function(e){var t,s=e.target.dataset.label.toLowerCase();switch(e.target.id){case"js-downloadBtn":t="download";break;case"js-downloadModal":t="open download modal";break;case"js-requestBtn":t="request";break;case"js-requestModal":t="open request modal"}if("undefined"!=typeof ga){ga("send","event","buttons",t,s);var a=$("[data-ga-code]").data("ga-code");if(a&&("download"===t||"request"===t)){var i=a.replace(/-/g,"x");ga(i+".send","event","calisphere",t,s)}}},goToSearchResults:function(e){1<e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||(this.model.unsetItemInfo(),e.preventDefault(),$.pjax({url:$(e.currentTarget).children("a").attr("href").split("?")[0],container:"#js-pageContent",data:this.model.toJSON(),traditional:!0}))},carouselAfterChange:function(e,t){if("undefined"!=typeof ga&&ga("send","event","related content","paginate items",$(".carousel__search-results").data("set")),this.beforeChange){var s;if(!0===this.addBefore){var a=$($(".js-carousel_item a")[0]);(s=this.model.toJSON()).start=Math.max(a.data("item_number")-this.carouselRows,0),s.rows=this.carouselRows,$.ajax({data:s,traditional:!0,url:"/carousel/",success:(r=this,d=t,function(e){if(d.currentSlide=r.carouselRows,d.slickAdd(e,!0),d.slideCount>5*r.carouselRows)for(var t=0;t<r.carouselRows;t++)d.slickRemove(d.slideCount,!0)})}),this.addBefore=!1}if(!0===this.addAfter){var i=$(".js-carousel_item")[$(".js-carousel_item").length-1];(s=this.model.toJSON()).start=$(i).children("a").data("item_number")+1,s.rows=this.carouselRows,$.ajax({data:s,traditional:!0,url:"/carousel/",success:(n=this,l=t,function(e){l.slickAdd(e);for(var t=0;t<n.carouselRows;t++)l.currentSlide=l.currentSlide-1,l.slickRemove(1,!0)})}),this.addAfter=!1}this.beforeChange=!1}else{var o=$("#js-carousel").data("numfound");1===$("[data-item_number="+(o-1)+"]").length&&t.slickGoTo(t.currentSlide+t.options.slidesToScroll+1),1===$("[data-item_number=0]").length&&t.slickGoTo(0)}var n,l,r,d},exhibitCarouselBeforeChange:function(){"undefined"!=typeof ga&&ga("send","event","related content","paginate exhibitions",$(".carousel__search-results").data("set"))},goToExhibition:function(){"undefined"!=typeof ga&&ga("send","event","related content","select exhibition",$(".carousel__search-results").data("set"))},loadSlides:function(e,t,s,a){this.beforeChange=!0;var i=$(".carousel").slick("getSlick").slideCount,o=$("#js-carousel").data("numfound");if(a<s&&i<o)0<=a&&a<this.carouselRows&&0===$("[data-item_number=0]").length&&(this.addBefore=!0);else if(s<a&&i<o){var n=o-1,l=i-a-this.carouselRows;l<this.carouselRows&&0<=l&&0===$("[data-item_number="+n+"]").length&&(this.addAfter=!0)}},goToItemPage:function(e){1<e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||void 0!==$(e.currentTarget).data("item_number")&&("undefined"!=typeof ga&&ga("send","event","related content","select item",$(".carousel__search-results").data("set")),this.model.set({itemNumber:$(e.currentTarget).data("item_number"),itemId:$(e.currentTarget).data("item_id")},{silent:!0}),0<$("#js-institution").length?$("#js-institution").data("campus")?this.model.set({campus_slug:$("#js-institution").data("campus")},{silent:!0}):this.model.set({repository_data:$("#js-institution").data("institution")},{silent:!0}):0<$("#js-collection").length&&this.model.set({collection_data:$("#js-collection").data("collection")},{silent:!0}),e.preventDefault(),$.pjax({url:$(e.currentTarget).attr("href"),container:"#js-itemContainer"}))},paginateRelatedCollections:function(e){var t=this.model.toJSON();delete t.itemNumber,void 0!==e?("undefined"!=typeof ga&&ga("send","event","related content","paginate collections",$(".carousel__search-results").data("set")),t.rc_page=$(e.currentTarget).data("rc_page")):2===$(".js-rc-page").length?t.rc_page=$($(".js-rc-page")[1]).data("rc_page")-1:t.rc_page=0,$.ajax({data:t,traditional:!0,url:"/relatedCollections/",success:function(e){$("#js-relatedCollections").html(e)}})},paginateRelatedExhibitions:function(){var e=this.model.toJSON();delete e.itemNumber,$.ajax({data:e,traditional:!0,url:"/relatedExhibitions/",success:function(e){$("#js-relatedExhibitions").html(e),$(".js-related-carousel").show(),$(".js-related-carousel").slick({infinite:!1,slidesToShow:4,slidesToScroll:4,rows:0,responsive:[{breakpoint:900,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:650,settings:{slidesToShow:2,slidesToScroll:2}}]})}})},selectRelatedCollection:function(e){this.model.clear({silent:!0}),void 0!==$(e.currentTarget).data("relation")?(e.preventDefault(),this.model.set({relation_ss:[$(e.currentTarget).data("relation")]}),$.pjax({url:$(e.currentTarget).attr("href").split("?")[0],container:"#js-pageContent",data:this.model.toJSON(),traditional:!0})):"undefined"!=typeof ga&&ga("send","event","related content","select collection",$(".carousel__search-results").data("set"))},changeWidth:function(){for(var e=$("#js-carousel .slick-list").prop("offsetWidth"),t=$($(".js-carousel_item")[$(".carousel").slick("slickCurrentSlide")]),s=t.outerWidth()+parseInt(t.css("margin-right")),a=1,i=0;s<e&&0<t.length;)i++,t=t.next(),e-s>parseInt(t.css("margin-left"))&&a++,s+=t.outerWidth(!0);s-e<parseInt(t.css("margin-right"))&&i++,this.carouselRows=i,$(".carousel").slick("slickSetOption","slidesToShow",a,!1),$(".carousel").slick("slickSetOption","slidesToScroll",i,!0)},initCarousel:function(){var s,e=this.model.toJSON();e.rows=3*this.carouselRows,e.itemNumber?e.start=this.carouselInitStart=Math.max(e.itemNumber-this.carouselRows,0):e.start=0,e.init=!0,$.ajax({url:"/carousel/",data:e,traditional:!0,success:(s=this,function(e){var t=Object.assign({initialSlide:Math.min(s.carouselRows,s.model.attributes.itemNumber),slidesToShow:s.carouselRows,slidesToScroll:s.carouselRows},s.carouselConfig);t.initialSlide||(t.initialSlide=0),$("#js-carouselContainer").html(e),$(".carousel").show(),$(".carousel").slick(t),s.changeWidth()})})},initMediaPlayer:function(){var a;$("#obj__mejs").length&&(this.mediaplayer&&(this.mediaplayer.paused||this.mediaplayer.pause(),this.mediaplayer.remove(),delete this.mediaplayer),$(".media-player").mediaelementplayer({stretching:"responsive",success:(a=this,function(e,t,s){a.mediaplayer=s})}))},initDisqus:function(){if("undefined"!=typeof DISQUS)this.resetDisqus();else{$("#disqus_thread").empty();var e=$("#disqus_loader").data("disqus");$.ajaxSetup({cache:!0}),$.getScript("//"+e+".disqus.com/embed.js"),$.ajaxSetup({cache:!1})}$("#disqus_loader").hide()},resetDisqus:function(){$("#disqus_thread").empty(),DISQUS.reset({reload:!0,config:function(){this.forum=$("#disqus_loader").data("disqus"),this.page.url=window.location.href}})},pjax_beforeSend:function(e,t){t.setRequestHeader("X-From-Item-Page","true")},pjax_end:function(a){return function(){var e;"back"!==a.popstate&&"forward"!==a.popstate||($("#js-carouselForm").length&&(e=a.model.getItemInfoFromDOM(),a.model.set(e,{silet:!0})),$("#disqus_thread").length&&0<$("#disqus_thread").html().length&&a.resetDisqus(),a.popstate=null);var t=$(".carousel__item--selected");if(t.children("a").data("item_id")!==a.model.get("itemId")){t.find(".carousel__image--selected").toggleClass("carousel__image"),t.find(".carousel__image--selected").toggleClass("carousel__image--selected"),t.toggleClass("carousel__item"),t.toggleClass("carousel__item--selected");var s=$('.js-item-link[data-item_id="'+a.model.get("itemId")+'"]');s.find(".carousel__image").toggleClass("carousel__image--selected"),s.find(".carousel__image").toggleClass("carousel__image"),s.parent().toggleClass("carousel__item--selected"),s.parent().toggleClass("carousel__item")}a.paginateRelatedCollections(void 0),a.paginateRelatedExhibitions(),a.initMediaPlayer()}},pjax_popstate:function(t){return function(e){t.popstate=e.direction}},initialize:function(){if($("#js-carouselForm").length){var e=this.model.getQueryFromDOM("js-carouselForm");e=$.extend(e,this.model.getItemInfoFromDOM()),this.model.set(e,{silent:!0})}else this.model.set({itemId:$("#js-itemContainer").data("itemid")},{silent:!0});this.initCarousel(),this.paginateRelatedCollections(),this.paginateRelatedExhibitions(),this.initMediaPlayer(),$("#disqus_thread").length&&0<$("#disqus_thread").html().length&&this.resetDisqus(),this.bound_pjax_end=this.pjax_end(this),this.bound_pjax_popstate=this.pjax_popstate(this),$(document).on("pjax:beforeSend","#js-itemContainer",this.pjax_beforeSend),$(document).on("pjax:end","#js-itemContainer",this.bound_pjax_end),$(document).on("pjax:popstate","#js-pageContent",this.bound_pjax_popstate)},destroy:function(){$(document).off("pjax:beforeSend","#js-itemContainer",this.pjax_beforeSend),$(document).off("pjax:end","#js-itemContainer",this.bound_pjax_end),$(document).off("pjax:popstate","#js-pageContent",this.bound_pjax_popstate),this.undelegateEvents(),this.model.unsetItemInfo()}});