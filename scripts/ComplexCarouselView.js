"use strict";var ComplexCarouselView=Backbone.View.extend({el:$("#js-pageContent"),carouselConfig:{infinite:!1,speed:300,variableWidth:!0,slidesToShow:15,slidesToScroll:15,lazyLoad:"ondemand"},events:{"click .js-set-link":"getSet","click .js-component-link":"getComponent","afterChange .carousel-complex__item-container":"afterChange"},getSet:function(e){1<e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||(e.preventDefault(),$.pjax({type:"GET",url:$(e.currentTarget).attr("href"),container:"#js-itemContainer",traditional:!0,scrollTo:440}))},getComponent:function(e){if(!(1<e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)){var t={order:$(e.currentTarget).data("item_id")};e.preventDefault(),$.pjax({type:"GET",url:$(e.currentTarget).attr("href").split("?")[0],container:"#js-itemContainer",data:t,traditional:!0,scrollTo:440})}},afterChange:function(e,t){this.changeWidth(e,t),this.checkEdges(e,t)},checkEdges:function(e,t){void 0===t&&(t=$(".carousel-complex__item-container").slick("getSlick")),0!==t.slickCurrentSlide()&&t.slickCurrentSlide()<t.getOption("slidesToScroll")&&t.setOption("slidesToScroll",t.slickCurrentSlide(),!0),t.slickCurrentSlide()+t.getOption("slidesToScroll")+1===t.slideCount&&(t.setOption("slidesToShow",1,!1),t.setOption("slidesToScroll",1,!0))},changeWidth:function(e,t){void 0===t&&(t=$(".carousel-complex__item-container").slick("getSlick"));for(var i=$(".carousel-complex__item-container .slick-list").prop("offsetWidth"),o=$(".carousel-complex__item-container [data-slick-index="+t.slickCurrentSlide()+"]"),n=o.outerWidth()+parseInt(o.css("margin-right")),l=1,c=0;n<i&&0<o.length;)c++,o=o.next(),i-n>parseInt(o.css("margin-left"))&&l++,n+=o.outerWidth(!0);n-i<parseInt(o.css("margin-right"))&&c++,t.slickSetOption("slidesToShow",l,!1),t.slickSetOption("slidesToScroll",c,!0)},initCarousel:function(){$(".carousel-complex").show(),$(".carousel-complex__item-container").slick(this.carouselConfig),0<$(".carousel-complex__item--selected").length?$(".carousel-complex__item-container").slick("slickGoTo",$(".carousel-complex__item--selected .carousel-complex__link").data("item_id")):0<$(".carousel-complex__tile--selected").length&&$(".carousel-complex__item-container").slick("slickGoTo",$(".carousel-complex__tile--selected .carousel-complex__link").data("item_id"))},pjax_end:function(e){return function(){$(".carousel-complex").is(":hidden")&&e.initialize()}},initialize:function(){var e;this.initCarousel(),imagesLoaded(".carousel-complex__item-container img",(e=this,function(){e.changeWidth()})),this.bound_pjax_end=this.pjax_end(this),$(document).on("pjax:end","#js-pageContent",this.bound_pjax_end)},destroy:function(){$(document).off("pjax:end","#js-pageContent",this.bound_pjax_end),this.undelegateEvents()}});