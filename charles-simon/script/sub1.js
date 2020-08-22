$(function(){
	// logo click
  $('.logo, .w_logo').click(function(){
    location.href = 'index.html';
  });
  
 // 화면 로딩 후 첫 화면
    $('.shop_shop_title p:nth-child(1)').animate({marginLeft:'0'},600);
	$('.shop_shop_title p:nth-child(2)').animate({marginLeft:'0'},630);
	$('.shop_shop_title p:nth-child(3)').animate({marginLeft:'0'},660);

	$('.shop_products_in:nth-child(1) h2').animate({marginLeft:'0'},630);
	$('.shop_products_in:nth-child(1) > p').animate({marginLeft:'0'},660);

  // products image animate
	$('.shop_products_in:nth-child(1) .shop_products_image li:nth-child(1)').css({ animation:'products_image 1s forwards'});
	$('.shop_products_in:nth-child(1) .shop_products_image li:nth-child(2)').css({ animation:'products_image 1.08s forwards'});
	$('.shop_products_in:nth-child(1) .shop_products_image li:nth-child(3)').css({ animation:'products_image 1.16s forwards'});
	$('.shop_products_in:nth-child(1) .shop_products_image li:nth-child(4)').css({ animation:'products_image 1.24s forwards'});
	$('.shop_products_in:nth-child(1) .shop_products_image li:nth-child(5)').css({ animation:'products_image 1.32s forwards'});
	$('.shop_products_in:nth-child(1) .shop_products_image li:nth-child(6)').css({ animation:'products_image 1.32s forwards'});


  // mobile menu btn 
  	$('.menu_btn').click(function(ev){
		ev.preventDefault();
		$(this).toggleClass('active');
		$('.mo_menu').toggleClass('visible')
    });

  
	//scroll
	$(window).scroll(function(){
		var w_scroll = $(this).scrollTop();
		var mobile = window.matchMedia( '( max-width: 649px)' );
        if( mobile.matches == true ){
			if(w_scroll >= 900) {
				$('.shop_products_in:nth-child(2) h2').animate({marginLeft:'0'},630);
				$('.shop_products_in:nth-child(2) > p').animate({marginLeft:'0'},660);
			}
			if(w_scroll >= 1200) {
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(1)').css({ animation:'products_image 1s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(2)').css({ animation:'products_image 1.08s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(3)').css({ animation:'products_image 1.16s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(4)').css({ animation:'products_image 1.24s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(5)').css({ animation:'products_image 1.32s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(6)').css({ animation:'products_image 1.32s forwards'});
			}
			if(w_scroll >= 2200) {
				$('.shop_products_in:nth-child(3) h2').animate({marginLeft:'0'},630);
				$('.shop_products_in:nth-child(3) > p').animate({marginLeft:'0'},660);
			}
			if(w_scroll >= 2500) {
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(1)').css({ animation:'products_image 1s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(2)').css({ animation:'products_image 1.08s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(3)').css({ animation:'products_image 1.16s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(4)').css({ animation:'products_image 1.24s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(5)').css({ animation:'products_image 1.32s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(6)').css({ animation:'products_image 1.32s forwards'});
			}
			if(w_scroll >= 3500) {
				$('.shop_products_in:nth-child(4) h2').animate({marginLeft:'0'},660);
			}
			if(w_scroll >= 3700) {
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(1)').css({ animation:'products_image 1s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(2)').css({ animation:'products_image 1.08s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(3)').css({ animation:'products_image 1.16s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(4)').css({ animation:'products_image 1.24s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(5)').css({ animation:'products_image 1.32s forwards'});
			}
			if(w_scroll >= 4500) {
				$('.border_slide_2').animate({marginLeft:'0'});
			}
		}


		var tablet = window.matchMedia( '( max-width: 1099px)' );
        if( tablet.matches == true ){
            if(w_scroll >= 1200) {
				$('.shop_products_in:nth-child(2) h2').animate({marginLeft:0},630);
				$('.shop_products_in:nth-child(2) > p').animate({marginLeft:0},660);
			}
			if(w_scroll >= 1300) {
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(1)').css({ animation:'products_image 1s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(2)').css({ animation:'products_image 1.08s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(3)').css({ animation:'products_image 1.16s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(4)').css({ animation:'products_image 1.24s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(5)').css({ animation:'products_image 1.32s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(6)').css({ animation:'products_image 1.32s forwards'});
			}
			if(w_scroll >= 2900) {
				$('.shop_products_in:nth-child(3) h2').animate({marginLeft:'0'},630);
				$('.shop_products_in:nth-child(3) > p').animate({marginLeft:'0'},660);
			}
			if(w_scroll >= 3000) {
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(1)').css({ animation:'products_image 1s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(2)').css({ animation:'products_image 1.08s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(3)').css({ animation:'products_image 1.16s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(4)').css({ animation:'products_image 1.24s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(5)').css({ animation:'products_image 1.32s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(6)').css({ animation:'products_image 1.32s forwards'});
			}
			if(w_scroll >= 4500) {
				$('.shop_products_in:nth-child(4) h2').animate({marginLeft:'0'},660);
			}
			if(w_scroll >= 4600) {
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(1)').css({ animation:'products_image 1s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(2)').css({ animation:'products_image 1.08s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(3)').css({ animation:'products_image 1.16s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(4)').css({ animation:'products_image 1.24s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(5)').css({ animation:'products_image 1.32s forwards'});
			}
			if(w_scroll >= 5900) {
				$('.border_slide_2').animate({marginLeft:'0'});
			}
		}

		var web = window.matchMedia( '( min-width: 1100px)' );
        if( web.matches == true ){
        	if(w_scroll <= 200) {
        		$('.web_header').css({background:'none', borderBottom:'none', transition:'0.3s ease'})
        	}
        	if(w_scroll >= 200) {
        		$('.web_header').css({background:'#fff', borderBottom:'1px solid #333', transition:'0.3s ease'})
        	}
			if(w_scroll >= 1100) {
				$('.shop_products_in:nth-child(2) h2').animate({marginLeft:0},630);
				if(w_scroll)
				$('.shop_products_in:nth-child(2) > p').animate({marginLeft:0},660);
			}
			if(w_scroll >= 1300) {
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(1)').css({ animation:'products_image 1s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(2)').css({ animation:'products_image 1.08s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(3)').css({ animation:'products_image 1.16s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(4)').css({ animation:'products_image 1.24s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(5)').css({ animation:'products_image 1.32s forwards'});
				$('.shop_products_in:nth-child(2) .shop_products_image li:nth-child(6)').css({ animation:'products_image 1.32s forwards'});
			}
			if(w_scroll >= 2500) {
				$('.shop_products_in:nth-child(3) h2').animate({marginLeft:'0'},630);
				$('.shop_products_in:nth-child(3) > p').animate({marginLeft:'0'},660);
			}
			if(w_scroll >= 2700) {
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(1)').css({ animation:'products_image 1s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(2)').css({ animation:'products_image 1.08s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(3)').css({ animation:'products_image 1.16s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(4)').css({ animation:'products_image 1.24s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(5)').css({ animation:'products_image 1.32s forwards'});
				$('.shop_products_in:nth-child(3) .shop_products_image li:nth-child(6)').css({ animation:'products_image 1.32s forwards'});
			}
			if(w_scroll >= 3800) {
				$('.shop_products_in:nth-child(4) h2').animate({marginLeft:'0'},660);
			}
			if(w_scroll >= 4000) {
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(1)').css({ animation:'products_image 1s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(2)').css({ animation:'products_image 1.08s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(3)').css({ animation:'products_image 1.16s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(4)').css({ animation:'products_image 1.24s forwards'});
				$('.shop_products_in:nth-child(4) .shop_products_image li:nth-child(5)').css({ animation:'products_image 1.32s forwards'});
			}
			if(w_scroll >= 5100) {
				$('.border_slide_2').animate({marginLeft:'0'},800);
			}
        }
   }); 






}); // ready fnc