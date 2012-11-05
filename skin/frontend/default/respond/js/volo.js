$(document).ready(function() {

	/* SLIDER */
	
	if($('#slider').length > 0) {	
		var slides = $('#slider').length;
		
		$('#slider').append('<a href="#" class="prev">Prev</a>');
		$('#slider').append('<a href="#" class="next">Next</a>');
		$('#slider').append('<div class="prevcover"></div>');
		$('#slider').append('<div class="nextcover"></div>');
		
		$('#slider li:eq(0)').addClass('current');
		$('#slider li:eq(3)').addClass('one');
		$('#slider li:eq(4)').addClass('two');
		$('#slider li:eq(1)').addClass('three');
		$('#slider li:eq(2)').addClass('four');
		$('#slider li').css({'display':'block'});
		
		$('#slider').mouseenter(function() {
			$('#slider .prev, #slider .next').stop(true,true).fadeIn(300);
		}).mouseleave(function() {
			$('#slider .prev, #slider .next').stop(true,true).fadeOut(150);		
		});
	
		$('#slider .prev').click(function(e) {
			
			if(!$('#slider').hasClass('inMotion')) {
				$('#slider li').each(function() {
					$(this).animate({
						'margin-left': '+=960'
					}, 750, 'easeInOutQuad');
				});
			
				$('#slider li').promise().done(function() {			
					$('#slider li:eq(4)').detach().prependTo($('#slider ul'));			
					$('#slider li').css({'margin-left':0}).attr('class','');
					$('#slider li:eq(0)').addClass('current');
					$('#slider li:eq(3)').addClass('one');
					$('#slider li:eq(4)').addClass('two');
					$('#slider li:eq(1)').addClass('three');
					$('#slider li:eq(2)').addClass('four');		
					$('#slider').removeClass('inMotion');
				});
			}
			
			$('#slider').addClass('inMotion');
		
			e.preventDefault();
		}).mouseenter(function() {
			$('#slider .prevcover').animate({
				'opacity': 0.5
			},300);
		}).mouseleave(function() {
			$('#slider .prevcover').animate({
				'opacity': 1
			},75);
		});
		
		$('#slider .next').click(function(e) {
			
			if(!$('#slider').hasClass('inMotion')) {
				$('#slider li').each(function() {
					$(this).animate({
						'margin-left': '-=960'
					}, 750, 'easeInOutQuad');
				});
			
				$('#slider li').promise().done(function() {			
					$('#slider li:eq(0)').detach().appendTo($('#slider ul'));			
					$('#slider li').css({'margin-left':0}).attr('class','');
					$('#slider li:eq(0)').addClass('current');
					$('#slider li:eq(3)').addClass('one');
					$('#slider li:eq(4)').addClass('two');
					$('#slider li:eq(1)').addClass('three');
					$('#slider li:eq(2)').addClass('four');		
					$('#slider').removeClass('inMotion');
				});
			}
			
			$('#slider').addClass('inMotion');
		
			e.preventDefault();
		}).mouseenter(function() {
			$('#slider .nextcover').animate({
				'opacity': 0.5
			},300);
		}).mouseleave(function() {
			$('#slider .nextcover').animate({
				'opacity': 1
			},75);
		});
	
	}

});