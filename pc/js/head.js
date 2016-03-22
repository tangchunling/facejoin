$(".navList ul li").hover(function(){
	if(!$(this).is(".navlist-active")){
	$(this).find("img").removeClass("nav-img-show");
	$(this).find("img:last-child").addClass("nav-img-show");}
})
$(".navList ul li").mouseleave(function(){
	if(!$(this).is(".navlist-active")){
		$(this).find("img").removeClass("nav-img-show");
		$(this).find("img:first-child").addClass("nav-img-show");
	}
	
})
$(".navList ul li").click(function(){
			$(".navList ul li").removeClass("navlist-active");
			$(this).addClass("navlist-active");
			$(".navList ul li").find("img").removeClass("nav-img-show");
			$(".navList ul li").find("img:first-child").addClass("nav-img-show");
			$(this).find("img").removeClass("nav-img-show");
			$(this).find("img:last-child").addClass("nav-img-show");
	});
