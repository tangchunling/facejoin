$(document).ready(function(){
	if($("body").height()<$(window).height()){
				$("footer").addClass("footer-active");
			}
	$(window).resize(function(){
		if($("body").height()<$(window).height()){
				$("footer").addClass("footer-active");}
	});
})
