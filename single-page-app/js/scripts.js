function showPage(pageId){
	$('.page').hide();
	$(pageId).show();
}

$(window).on('hashchange',function(e){

	showPage(location.hash);

});

location.hash = '';

location.hash = '#home';

