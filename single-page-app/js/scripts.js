function showPage(pageId){
	$('.page').hide();
	$(pageId).show();
}

$(window).on('hashchange',function(e){

	showPage(location.hash);

});

$('.nav li').on('click',function(){

	$(this).siblings().removeClass('active');
	$(this).addClass('active');

});

location.hash = '';

location.hash = '#home';

