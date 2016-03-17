$(".navList ul li").hover(function(){
	$(this).find("img").removeClass("nav-img-show");
	$(this).find("img:last-child").addClass("nav-img-show");
})
$(".navList ul li").mouseleave(function(){
	$(this).find("img").removeClass("nav-img-show");
	$(this).find("img:first-child").addClass("nav-img-show");
})