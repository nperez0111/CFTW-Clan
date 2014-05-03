
$( document ).ready(function() {
$('li').click(function(e){
	e.preventDefault();
	console.log($(this).find("href").attr('id'));
	$($(this).children().attr('href')).velocity("scroll", 1000)
  .velocity({ opacity: 1 });
});
	var theWindow        = $(window),
	    $bg              = $(".container-fluid"),
	    aspectRatio      = $bg.width() / $bg.height();
	    
	    			    		
	function resizeBg() {
		h= theWindow.height()+"px";
		hs= (theWindow.height()/2)-($bg.children().height()/2);
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.css({"height":"100%","width":"auto"
		    	});
		    	$bg.children().css("margin-top", hs);
		    	$('nav').css("margin-top",h);
		} else {
		    $bg
		    	.css({"width":"100%","height":"auto"		
		    });$bg.children().css("margin-top", hs);
		    	$('nav').css("margin-top",h);
		}
					
	}
	                   			
	theWindow.resize(resizeBg).trigger("resize");

});