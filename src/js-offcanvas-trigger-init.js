
(function( w, $ ){
	"use strict";

	var pluginName = "offcanvas-trigger",
		initSelector = ".js-" + pluginName;

	$.fn[ pluginName ] = function(){
		return this.each( function(){
			new w.componentNamespace.OffcanvasTrigger( this ).init();
		});
	};

	// auto-init on enhance (which is called on domready)
	$( w.document ).on( "enhance", function(e){
		$( $( e.target ).is( initSelector ) && e.target ).add( initSelector, e.target ).filter( initSelector )[ pluginName ]();
	});

})(this, jQuery);
