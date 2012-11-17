(function($){
        $.fn.serializeObject = function()
        {
        	query = this.serializeArray();
			object = {};
			for (i in query)
			{
				object[query[i].name] = query[i].value
			}
			return object
        };
 })(jQuery);

$(document).ready(function(){

	var started = false;
	var target = $('#target');
	var configs;
	var misses = 0;
	var targetShown = 0;
	var maxDelay = 0;
	var minDelay = 9999;
	var mediumDelay = 0;
	var totalDelay = 0;
	var totalShots = 0;
	var totalHits = 0;
	var winWidth = $(window).width();
	var winHeight = $(window).height();

	$('#begin').click(function(){
		configs = $('form').serializeObject();
		console.log(configs);
		$('#configs').fadeOut(500);
		setTimeout(function(){ nextTarget(); started = true; } ,1000);
		
	});

	/*$('body').click(function(){
		miss++;
		console.log(miss);
	});*/
	$(document).click(function(e) {
		if (started)
		{
			totalShots ++;
			if (configs.enableSound)
			{
				randId = (new Date()).getTime();
				$('body').append('<audio src="sounds/shot.ogg" autoplay="true" id="'+randId+'" type="audio/ogg" />');
			}
		}
	});


	target.click(function(){	
		targetShot = (new Date()).getTime();
		target.css('display','none');
		$(this).stop();
		delay = targetShot - targetShown;
		totalDelay += delay;
		mediumDelay = totalDelay / totalShots;
		if (delay > maxDelay) { maxDelay = delay; }
		if (delay < minDelay) { minDelay = delay; }
		console.log(delay);
		
		nextTarget();
	});

	function rand(min, max)
	{
		return Math.floor((Math.random()*max)+min)
	}

	function nextTarget()
	{
		target.css('top',rand(1, winHeight-30)); 
		target.css('left',rand(1, winWidth-30));
		if (configs.randomSize) { target.width(rand(10,30)); target.height(rand(10,30)); }
		if (configs.randomDelay) { setTimeout(function(){ showTarget(); },rand(1,1000)); }
		else { showTarget(); }
	}

	function showTarget()
	{
		targetShown = (new Date()).getTime();
		totalHits++;
		target.show();
		if (configs.movingTarget)
		{
			y = rand(1, winHeight-30);
			x = rand(1, winWidth-30);
			target.animate({'top':y, 'left':x},10000);
		}
	}

});