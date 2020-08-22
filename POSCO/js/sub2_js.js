$(function(){


	$('.section:nth-child(2) .default_btn').click(function(){
  	$('.section:nth-child(2) .layer').fadeIn(400);
    $('html, body').css({overflow:'hidden', height:'200%'})
    $('.layer').on('mousewheel', disable)
   });


  $('.section:nth-child(2) .layer_head > img').click(function(){
    $('.section:nth-child(2) .layer').fadeOut(400);
    $('html, body').css({height:'auto'})
  });


  $('.section:nth-child(3) .default_btn').click(function(){
    $('.section:nth-child(3) .layer').fadeIn(400);
    $('html, body').css({overflow:'hidden', height:'300%'})
    $('.layer').on('mousewheel', disable)
  });


  $('.section:nth-child(3) .layer_head > img').click(function(){
    $('.section:nth-child(3) .layer').fadeOut(400);
    $('html, body').css({height:'auto'})
  });


  $('.section:nth-child(4) .default_btn').click(function(){
    $('.section:nth-child(4) .layer').fadeIn(400);
    $('html, body').css({overflow:'hidden', height:'400%'})
    $('.layer').on('mousewheel', disable)
  });


  $('.section:nth-child(4) .layer_head > img').click(function(){
    $('.section:nth-child(4) .layer').fadeOut(400);
    $('html, body').css({height:'auto'})
  });

  
  $('.default_btn').click(function(e){
      e.preventDefault();
  });

    function disable(e){
    e.stopPropagation();
  }


  // section slide
  let section_num=0;
  let section_height = $('.section').height();
  
  $('.section').mousewheel(function(e,delta){
    if(delta < 0 ) {
      // 휠 내릴때
      section_num = $(this).index()+1
      if(section_num < $('.section').length){
        $('.slide').stop().animate({ marginTop: -(section_height * section_num)},800 );
      } else {
        section_num = 4;
      }
    } else {
    // 휠 올릴때
      section_num = $(this).index()-1;
      if(section_num >= 0){
        $('.slide').stop().animate({ marginTop: -(section_height * section_num)},800);
        dot.eq(section_num).addClass('dot_in').siblings().removeClass('dot_in');
      } else {
        section_num = 0;
      }
    }
  });



}); // ready fnc