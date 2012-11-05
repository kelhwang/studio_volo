$j(document).ready(function() {

	/* MENU */
	
    $j("#menu li").hover(function(){    
        $j(this).addClass("hover");
        $j('ul:first',this).stop(true,true).fadeIn(150);
    }, function(){    
        $j(this).removeClass("hover");
		$j('ul:first',this).stop(true,true).fadeOut(0);
    });
	
	/* SLIDER */
	
	if($j('#slider').length > 0) {	
		var slides = $j('#slider').length;
		
		$j('#slider').append('<a href="#" class="prev">Prev</a>').append('<a href="#" class="next">Next</a>').append('<div class="prevcover"></div>').append('<div class="nextcover"></div>');
		
		$j('#slider li:eq(0)').addClass('current');
		$j('#slider li:eq(3)').addClass('one');
		$j('#slider li:eq(4)').addClass('two');
		$j('#slider li:eq(1)').addClass('three');
		$j('#slider li:eq(2)').addClass('four');
		$j('#slider li').css({'display':'block'});
		
		$j('#slider').mouseenter(function() {
			$j('#slider .prev, #slider .next').stop(true,true).fadeIn(300);
		}).mouseleave(function() {
			$j('#slider .prev, #slider .next').stop(true,true).fadeOut(150);		
		});
	
		$j('#slider .prev').click(function(e) {
			
			if(!$j('#slider').hasClass('inMotion')) {
				$j('#slider li').each(function() {
					$j(this).animate({
						'margin-left': '+=960'
					}, 750, 'easeInOutQuad');
				});
			
				$j('#slider li').promise().done(function() {			
					$j('#slider li:eq(4)').detach().prependTo($j('#slider ul'));			
					$j('#slider li').css({'margin-left':0}).attr('class','');
					$j('#slider li:eq(0)').addClass('current');
					$j('#slider li:eq(3)').addClass('one');
					$j('#slider li:eq(4)').addClass('two');
					$j('#slider li:eq(1)').addClass('three');
					$j('#slider li:eq(2)').addClass('four');		
					$j('#slider').removeClass('inMotion');
				});
			}
			
			$j('#slider').addClass('inMotion');
		
			e.preventDefault();
		}).mouseenter(function() {
			$j('#slider .prevcover').animate({
				'opacity': 0.5
			},300);
		}).mouseleave(function() {
			$j('#slider .prevcover').animate({
				'opacity': 1
			},75);
		});
		
		$j('#slider .next').click(function(e) {
			
			if(!$j('#slider').hasClass('inMotion')) {
				$j('#slider li').each(function() {
					$j(this).animate({
						'margin-left': '-=960'
					}, 750, 'easeInOutQuad');
				});
			
				$j('#slider li').promise().done(function() {			
					$j('#slider li:eq(0)').detach().appendTo($j('#slider ul'));			
					$j('#slider li').css({'margin-left':0}).attr('class','');
					$j('#slider li:eq(0)').addClass('current');
					$j('#slider li:eq(3)').addClass('one');
					$j('#slider li:eq(4)').addClass('two');
					$j('#slider li:eq(1)').addClass('three');
					$j('#slider li:eq(2)').addClass('four');		
					$j('#slider').removeClass('inMotion');
				});
			}
			
			$j('#slider').addClass('inMotion');
		
			e.preventDefault();
		}).mouseenter(function() {
			$j('#slider .nextcover').animate({
				'opacity': 0.5
			},300);
		}).mouseleave(function() {
			$j('#slider .nextcover').animate({
				'opacity': 1
			},75);
		});
	
	}

});