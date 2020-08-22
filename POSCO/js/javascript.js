$(function(){

   $('.main_nav > li').mouseover(function(){
    	$('.sub_nav').stop().slideDown();
      $('.main_nav > li > a').css({color:'#000'})
      $('.headermenu').css({ background:'#fff'})
      $('.header').css({ borderBottom:'1px solid #eee'})
      $(this).children('a').css({color:'#006399', fontSize:'22px'});
      $('.nav_1 a').css({color:'#000'})
      $('.header h1 > img').attr('src','image/index/logo1.png');
      $('.search > img').attr('src','image/index/magnifier.png');
      $('.menu > img').attr('src','image/index/menu.png');
   });

   $('.main_nav > li').mouseleave(function(){
   	$('.sub_nav').stop().slideUp(50);
      $('.headermenu').css({ background:'transparent', transition:'0.4s'})
      $('.header').css({ border:'none'})
      $(this).children('a').css({color:'#000', fontSize:'20px'});
      $('.main_nav > li > a').css({color:'#000'})
      $('.nav_1 a').css({color:'#000'})
   });

   $('.sub_nav li').mouseover(function(){
   	$(this).children('a').css({color:'#006399', fontWeight:'bold'})
   });

   $('.sub_nav li').mouseout(function(){
   	$(this).children('a').css({color:'#000', fontWeight:'normal'})
   });




   $('.menu').click(function(){
   	$('.menu_modal').show(400);
      $('.menu_modal').animate({opacity:1});
   	$('.footer').css('display','none');
   });


   $('.m_sub li').mouseover(function(){
   	$(this).children('a').css({color:'#006399'});
   });

   $('.m_sub li').mouseout(function(){
   	$(this).children('a').css({color:'#000'});
   });


   $('.m_close').click(function(){
      $('.menu_modal').animate({opacity:0});
   	$('.menu_modal').hide(400);
   	$('.footer').css('display','block');
   });


   $('.contents_1 h2').animate({opacity:1},800);
   $('.contents_1 p').animate({opacity:1},3000);
 
   $(function(){
      $('.header h1 img').click(function(){
         location.href = 'index.html';
      });
   });

}); // ready fnc