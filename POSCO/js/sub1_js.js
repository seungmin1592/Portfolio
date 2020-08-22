$(function(){

// menu slide
   $('.main_nav > li').mouseover(function(){
    	$('.sub_nav').stop().slideDown();
      $('.main_nav > li > a').css({color:'#000'})
      $('.headermenu').css({ background:'#fff', zIndex:'99'})
      $('.header').css({ borderBottom:'1px solid #eee'})
      $(this).children('a').css({color:'#006399', fontSize:'22px'});
      $('.nav_1 a').css({color:'#000'})
      $('.header h1 > img').attr('src','image/index/logo1.png');
      $('.search > img').attr('src','image/index/magnifier.png');
      $('.menu > img').attr('src','image/index/menu.png');
   });

   $('.main_nav > li').mouseleave(function(){
      $('.sub_nav').stop().slideUp(50);
      $('.headermenu').css({ background:'transparent', transition:'0.4s', zIndex:0})
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



// menu btn click 
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


   var cnt =0;
   var line_1 = 0;
   var line_2 = 0;
   $('html, body').mousewheel(function(e,delta){
      if(delta<0) { 
         $('html,body').animate({scrollTop:'+=420'},400 );
         $('.contents_1').stop().animate({opacity:0}, 400, function(){
            $(this).css({display:'none'});
            $('.section_main_year').stop().animate({opacity:1},800);
            $('.section_main_title').stop().animate({opacity:1},2000);
            $('.mm').css({filter: 'grayscale(0%)',filter: 'none'});
         });
         if(cnt ==0 ){
            $('.bt_slide').stop().css({bottom:0, opacity:0}).stop().animate({opacity:1},1200);
            cnt++;
            $('.container').on('mousewheel',function(e){
                 var wheelDelta = e.originalEvent.wheelDelta;
                 var scrollLeft = $(this).scrollLeft();
                 if(wheelDelta > 0){  // 왼쪽으로
                  $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
               } else if(wheelDelta < 0){  // 오른쪽으로
                  $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
               }

               if(scrollLeft < 5640) {
                  $('.bt_slide_in li:nth-child(1)').addClass('on').siblings().removeClass('on');
               }
               if(scrollLeft > 5640 && scrollLeft < 13080) {
                  $('.bt_slide_in li:nth-child(2)').addClass('on').siblings().removeClass('on');
               }
               if(scrollLeft > 13080 && scrollLeft < 22250) {
                  $('.bt_slide_in li:nth-child(3)').addClass('on').siblings().removeClass('on');
               }
               if(scrollLeft > 22250) {
                  $('.bt_slide_in li:nth-child(4)').addClass('on').siblings().removeClass('on');
               }
               
               $('.time_1').click(function(){
                  $('.container').stop().animate({scrollLeft:0},500);
                  $('.bt_slide_in li:nth-child(1)').addClass('on').siblings().removeClass('on');
                  $('.timeline').css({width:0})
               })

               $('.time_2').click(function(){
                  $('.container').stop().animate({scrollLeft:'5804'},500);
                  $('.bt_slide_in li:nth-child(2)').addClass('on').siblings().removeClass('on');
                  $('.timeline').css({width:'25%'})
               });

               $('.time_3').click(function(){
                  $('.container').stop().animate({scrollLeft:'13224'},500);
                  $('.bt_slide_in li:nth-child(3)').addClass('on').siblings().removeClass('on');
                  $('.timeline').css({width:'50%'})
               });

               $('.time_4').click(function(){
                  $('.container').stop().animate({scrollLeft:'22424'},500);
                  $('.bt_slide_in li:nth-child(4)').addClass('on').siblings().removeClass('on');
                  $('.timeline').css({width:'75%'})
               });
            });
         }  
      } 
   });



   $('.contents_1 h2').animate({opacity:1},600);
   $('.contents_1 p').animate({opacity:1},2500);


      $(function(){
      $('.header h1 img').click(function(){
         location.href = 'index.html';
      });
   });

                   
   


}); // ready fnc