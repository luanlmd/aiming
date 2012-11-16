$(document).ready(function(){
	var randomTime;
	var randomSize;
	var progressiveHardness;
	var enableHostages;
	var enableDistractions;

	$('#begin').click(function(){
		randomTime = ($('#randomTime').attr('checked'));
		randomSize = ($('randomSize').attr('checked'));
		progressiveHardness = ($('progressiveHardness').attr('checked'));
		enableHostages = ($('enableHostages').attr('checked'));
		enableDistractions = ($('enableDistractions').attr('checked'));
		$('#configs').fadeOut(500);
	});

	$('#target').click(function(){
		
	});
});