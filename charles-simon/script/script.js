$(function(){
// logo click
  	$('.logo, .w_logo').click(function(){
    	location.href = 'index.html';
  	});

// mobile menu btn 
  	$('.menu_btn').click(function(ev){
		ev.preventDefault();
		$(this).toggleClass('active');
		$('.mo_menu').toggleClass('visible')
    });

// hover background change
  	$('.slide_span').mouseover(function(){
		$(this).children('.slide').stop().animate({marginLeft:'-100%'},200)
		$(this).children('.text').stop().css({color:'#333'});
		$(this).children('svg').stop().css({fill:'#333'})
		$(this).children('.slide_2').stop().animate({marginLeft:'-100%'},200)
		$(this).children('.text_2').stop().css({color:'#fff'});
  	});

  	$('.slide_span').mouseleave(function(){
		$(this).children('.slide').stop().animate({marginLeft:0},200);
		$(this).children('.text').stop().css({color:'#fff'});
		$(this).children('svg').stop().css({fill:'#fff'})
		$(this).children('.slide_2').stop().animate({marginLeft:0},200);
		$(this).children('.text_2').stop().css({color:'#555'});
  	});

// view_product slide

 	$('.slide_btn').click(function(){
 		$('.view_product').stop().animate({marginLeft:'-100%'},800, function(){
			$('.view_product li:first').appendTo('.view_product');
			$('.view_product').css('marginLeft',0);
  		});
 	});


// products_slide next_btn 

  	$('.next_btn').click(function(){
		$('.products_slide').stop().animate({marginLeft:'-100%'},400, function(){
			$('.products_slide li:first').appendTo('.products_slide');
			$('.products_slide').css('marginLeft',0);
  		});
 	});

//scroll
	$(window).scroll(function(){
		var w_scroll = $(this).scrollTop();
		var mobile = window.matchMedia( '( max-width: 649px)' );
        if( mobile.matches == true ){
			if(w_scroll >= 700){
				$('.simon_info p:nth-child(1)').animate({marginLeft:0},800);
				$('.simon_info p:nth-child(2)').animate({marginLeft:0},850);
				$('.simon_info p:nth-child(3)').animate({marginLeft:0},900);
			}
			if(w_scroll >= 800) {
				$('.simon_info_in').css({ animation:'simon_info_in 1s forwards'});
			}
			if(w_scroll >= 1000) {
				$('.leaf_icon').css({ animation:'simon_info_in 1s forwards'});
			}
			if(w_scroll >= 2400) {
				$('.dual_col_title').animate({marginLeft:0},800);
			}
			if(w_scroll >= 5300) {
				$('.border_slide_1').animate({marginLeft:0},800);
			}
			if(w_scroll >= 6100) {
				$('.border_slide_2').animate({marginLeft:0},800)
			}
		}


		var tablet = window.matchMedia( '( max-width:1099px)' );
        if( tablet.matches == true ){
            if(w_scroll >= 800){
				$('.simon_info p:nth-child(1)').animate({marginLeft:0},800);
				$('.simon_info p:nth-child(2)').animate({marginLeft:0},900);
				$('.simon_info p:nth-child(3)').animate({marginLeft:0},1000);
			}
			if(w_scroll >= 900) {
				$('.simon_info_in').css({ animation:'simon_info_in 1s forwards'});
			}
			if(w_scroll >= 1200) {
				$('.leaf_icon').css({ animation:'simon_info_in 1s forwards'});
			}
			if(w_scroll >= 1900) {
				$('.dual_col_title').animate({marginLeft:0},800);
			}
			if(w_scroll >= 4200) {
				$('.border_slide_1').animate({marginLeft:0},800)
			}
			if(w_scroll >= 5100) {
				$('.border_slide_2').animate({marginLeft:0},800)
			}
		}


		var web = window.matchMedia( '( min-width: 1100px)' );
        if( web.matches == true ){
        	if(w_scroll <= 200){
        	  	$('.web_header').css({background:'none', borderBottom:'none'})
        	  	$('.w_menu li a').css({color:'#fff', transition:'0.3s ease'})
        	  	$('.w_logo svg').css({fill:'#fff', transition:'0.3s ease'})
        	  	$('.lang').css({color:'#fff', transition:'0.3s ease'})
        	}
        	if(w_scroll >= 200){
        	  	$('.web_header').css({background:'#fff', borderBottom:'1px solid #000'})
        	  	$('.w_menu li a').css({color:'#333', transition:'0.3s ease'})
        	  	$('.w_logo svg').css({fill:'#333', transition:'0.3s ease'})
        	  	$('.lang').css({color:'#333', transition:'0.3s ease'})
        	}
            if(w_scroll >= 1400){
				$('.simon_info p:nth-child(1)').animate({marginLeft:0},800);
				$('.simon_info p:nth-child(2)').animate({marginLeft:0},900);
				$('.simon_info p:nth-child(3)').animate({marginLeft:0},1000);
			}
			if(w_scroll >= 1700) {
				$('.simon_info_in').css({ animation:'simon_info_in 1s forwards'});
			}
			if(w_scroll >= 1700) {
				$('.leaf_icon').css({ animation:'simon_info_in 1s forwards'});
			}
			if(w_scroll >= 3100) {
				$('.dual_col_title').animate({marginLeft:0},800);
			}
			if(w_scroll >= 6100) {
				$('.border_slide_1').animate({marginLeft:0},800)
			}
			if(w_scroll >= 6800) {
				$('.border_slide_2').animate({marginLeft:0},800)
			}
				

		// view_product slide(web)
			$('.slide_btn').click(function(){
				$('.view_product').stop().animate({marginLeft:'-90%'},1000, function(){
					$('.view_product li:first').appendTo('.view_product');
					$('.view_product').css('marginLeft',0);
				});
			});

			// products_slide next_btn(web)
			  $('.next_btn').click(function(){
			  	$('.products_slide').stop().animate({marginLeft:'-31.5%'},400, function(){
					$('.products_slide li:first').appendTo('.products_slide');
					$('.products_slide').css('marginLeft',0);
			    });
			});
		}
	});



}); //ready