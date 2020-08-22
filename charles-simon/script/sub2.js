$(function(){
  // logo click
  $('.logo, .w_logo').click(function(){
    location.href = 'index.html';
  });
	
  // 화면 로딩 후 첫 화면
  $('.Bespoke_title p:nth-child(1)').animate({marginLeft:'0'},600);
	$('.Bespoke_title p:nth-child(2)').animate({marginLeft:'0'},630);
	$('.Bespoke_title p:nth-child(3)').animate({marginLeft:'0'},660);
	$('.Bespoke_title p:nth-child(4)').animate({marginLeft:'0'},690);


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


  $('.products_slider_dot span').click(function(){
  	var dot_idx = $(this).index();
  	var section = $('.products_slider_section');
  	var section_w = section.width();
  	$('.products_slider').animate({marginLeft: -(section_w * dot_idx)},300)
  	$(this).addClass('on').siblings().removeClass('on');
  });

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
      if(w_scroll >= 300) {
        $('.bespoke_service img').css({ animation:'bespoke_service 1s forwards'});
      }
      if(w_scroll >= 500) {
        $('.bespoke_p').css({ animation:'bespoke_service 1s forwards'});
      }
      if(w_scroll >= 700) {
        $('.border_slide_1').animate({marginLeft:0},800);
      }
      if(w_scroll >= 1400) {
        $('.border_slide_2').animate({marginLeft:0},800)
      }
      if(w_scroll >= 6500) {
        $('.border_slide_2').animate({marginLeft:0},800)
      }
		}

    var tablet = window.matchMedia( '( max-width: 1099px)' );
    if( tablet.matches == true ){
      if(w_scroll >= 200){
        $('.simon_info p:nth-child(1)').animate({marginLeft:0},800);
        $('.simon_info p:nth-child(2)').animate({marginLeft:0},850);
        $('.simon_info p:nth-child(3)').animate({marginLeft:0},900);
      }
      if(w_scroll >= 600) {
        $('.bespoke_service img').css({ animation:'bespoke_service 1s forwards'});
      }
      if(w_scroll >= 1000) {
        $('.bespoke_p').css({ animation:'bespoke_service 1s forwards'});
      }
      if(w_scroll >= 1200) {
        $('.border_slide_1').animate({marginLeft:0},800);
      }
      if(w_scroll >= 2400) {
        $('.border_slide_2').animate({marginLeft:0},800)
      }
    }


    var web = window.matchMedia( '( min-width: 1100px)' );
    if( web.matches == true ){
      if(w_scroll <= 200){
        $('.web_header').css({background:'none', borderBottom:'none'})
      }
      if(w_scroll >= 200){
        $('.web_header').css({background:'#fff', borderBottom:'1px solid #000'})
      }
      if(w_scroll >= 1300) {
        $('.bespoke_service img').css({ animation:'bespoke_service 1s forwards'});
      }
      if(w_scroll >= 1300) {
        $('.bespoke_p').css({ animation:'bespoke_service 1s forwards'});
      }
      if(w_scroll >= 1800) {
        $('.border_slide_1').animate({marginLeft:0},800);
      }
      if(w_scroll >= 2400) {
        $('.border_slide_2').animate({marginLeft:0},800)
      }
      $('.next_btn').click(function(){
        $('.products_slide').stop().animate({marginLeft:'-31.5%'},400, function(){
          $('.products_slide li:first').appendTo('.products_slide');
          $('.products_slide').css('marginLeft',0);
        });
      });
    }      
 });
});