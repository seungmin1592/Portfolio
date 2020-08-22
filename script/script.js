$(function(){

// typing

  var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };


  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="typing">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }
      
      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
  }; 

// section slide
  let section_num=0;
  let section_height = $('.section').height();

  var not_mobile = window.matchMedia( '( min-width: 700px)' );
  if( not_mobile.matches == true ){
  $('.section').mousewheel(function(e,delta){
      if(delta < 0 ) {
         // 휠 내릴때
          section_num = $(this).index()+1
          dot.eq(section_num).addClass('dot_in').siblings().removeClass('dot_in');

          if(section_num < $('.section').length){
            $('.slide').stop().animate({ marginTop: -(section_height * section_num)},800 );
          } else {
            section_num = 6;
          }
          
          var not_mobile = window.matchMedia( '( min-width: 700px, max-width: 1920px)' );
              if( not_mobile.matches == true ){
                  if(section_num == s_dot_index) {
                    $('.dot ul li').addClass('dot_in').siblings().removeClass('dot_in');
                  }
              }

         //about
          if(section_num == 1) {
            $('.introduce p').delay(1000).fadeIn(1400);
          }
        

         //my works_1
          if(section_num == 2) { 
            $('.charles-simon_title p').delay(2800).fadeIn(1500);
            $('.section:nth-child(3) .link').delay(3000).fadeIn(1500);
            var s_txt = $('.charles-simon').text();
            var txt = s_txt.trim();
            var temp = ''
            for(var i=0; i<txt.length; i++) {
              var txt_n = txt.charAt(i);
              function txt_ani(i) {
                return temp += '<b>' + i + '</b>';
              }
            txt_ani(txt_n);
            }
            $('.charles-simon').html(temp);
         
            var b = $('.charles-simon b');
            var b_t = $('.charles-simon');
            function showT(){
            b.css('opacity', 0);
              for(var i=0; i<b.length; i++){ 
                  var bitem = b.eq(i);
                  var delayTime = 200 * i; 
                  b.eq(i).delay(delayTime).animate({ opacity:1,
                  }, 400 );
              }
            }
            setTimeout(showT,1000);
          } 


         //my works_2
          if(section_num == 3) { 
            $('.pmo_title p').delay(2800).fadeIn(1500);
            $('.section:nth-child(4) .link').delay(3000).fadeIn(1500);
            var s_txt = $('.pmo').text();
            var txt = s_txt.trim();
            var temp = ''
            for(var i=0; i<txt.length; i++) {
              var txt_n = txt.charAt(i);
              function txt_ani(i) {
                return temp += '<b>' + i + '</b>';
              }
              txt_ani(txt_n);
            }
            $('.pmo').html(temp);
            
            var b = $('.pmo b');
            var b_t = $('.pmo');
            function showT(){
            b.css('opacity', 0);
              for(var i=0; i<b.length; i++){ 
                var bitem = b.eq(i);
                var delayTime = 200 * i; 
                b.eq(i).delay(delayTime).animate({ opacity:1,
                }, 400 );
              }
            }
            setTimeout(showT,1000);
          } 

         
         //my works_3
          if(section_num == 4) { 
            $('.posco_title p').delay(2800).fadeIn(1500);
            $('.section:nth-child(5) .link').delay(3000).fadeIn(1500);
            var s_txt = $('.posco').text();
            var txt = s_txt.trim();
            var temp = ''
            for(var i=0; i<txt.length; i++) {
              var txt_n = txt.charAt(i);
              function txt_ani(i) {
                return temp += '<b>' + i + '</b>';
              }
              txt_ani(txt_n);
            }
            $('.posco').html(temp);
            
            var b = $('.posco b');
            var b_t = $('.posco');
            function showT(){
            b.css('opacity', 0);
              for(var i=0; i<b.length; i++){ 
                  var bitem = b.eq(i);
                  var delayTime = 200 * i; 
                  b.eq(i).delay(delayTime).animate({ opacity:1,
                  }, 400 );
              }
            }
            setTimeout(showT,1000);
          } 


         // section_skill
          if(section_num == 5) { 
            $('.skill').delay(800).fadeIn(1500);
          } 


         // section_contact
          if(section_num == 6) { 
            $('.detail').delay(1000).stop().animate({bottom:'0'},1000);
            var mobile = window.matchMedia( '( max-width: 700px )' );
              if( mobile.matches == true ){
                $('.detail').delay(1000).stop().animate({bottom:'0'},1000);
              }
            $('.contents_box img').delay(1500).stop().animate({left:'-20%'},1500);
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
  }



  // portfolio img slide
  $('.section:nth-child(3) .view_page').click(function(){ 
    var idx=$(this).index();
    var elementWidth = $('.image_slide li').width();
    $('.section:nth-child(3) .image_slide').animate({marginLeft:-elementWidth * idx },800);
  });
  $('.section:nth-child(4) .view_page').click(function(){ 
    var idx=$(this).index();
    var elementWidth = $('.image_slide li').width();
    $('.section:nth-child(4) .image_slide').animate({marginLeft:-elementWidth * idx },800);
  });
  $('.section:nth-child(5) .view_page').click(function(){ 
    var idx=$(this).index();
    var elementWidth = $('.image_slide li').width();
    $('.section:nth-child(5) .image_slide').animate({marginLeft:-elementWidth * idx },800);
  });



   // dot
  var dot = $('.dot ul li');

  dot.click(function(){
    var dot_index = $(this).index();
    dot_index == section_num;
    $('.slide').stop().animate({marginTop:-(section_height * dot_index)}, 600, 'easeInOutExpo');
    $(this).addClass('dot_in').siblings().removeClass('dot_in');

      //about
        if(dot_index == 1) {
          $('.introduce p').delay(1000).fadeIn(1400);
        }
      
       //my works_1
        if(dot_index == 2) { 
          $('.charles-simon_title p').delay(2800).fadeIn(1500);
          $('.section:nth-child(3) .link').delay(3000).fadeIn(1500);
          var s_txt = $('.charles-simon').text();
          var txt = s_txt.trim();
          var temp = ''
          for(var i=0; i<txt.length; i++) {
            var txt_n = txt.charAt(i);
            function txt_ani(i) {
              return temp += '<b>' + i + '</b>';
            }
            txt_ani(txt_n);
          }
          $('.charles-simon').html(temp);
          
          var b = $('.charles-simon b');
          var b_t = $('.charles-simon');
          function showT(){
          b.css('opacity', 0);
            for(var i=0; i<b.length; i++){ 
                var bitem = b.eq(i);
                var delayTime = 200 * i; 
                b.eq(i).delay(delayTime).animate({ opacity:1,
                }, 400 );
            }
          }
          setTimeout(showT,1000);
        } 


       //my works_2
        if(dot_index == 3) { 
          $('.pmo_title p').delay(2800).fadeIn(1500);
          $('.section:nth-child(4) .link').delay(3000).fadeIn(1500);
          var s_txt = $('.pmo').text();
          var txt = s_txt.trim();
          var temp = ''
          for(var i=0; i<txt.length; i++) {
            var txt_n = txt.charAt(i);
            function txt_ani(i) {
              return temp += '<b>' + i + '</b>';
            }
            txt_ani(txt_n);
          }
          $('.pmo').html(temp);
          
          var b = $('.pmo b');
          var b_t = $('.pmo');
          function showT(){
          b.css('opacity', 0);
            for(var i=0; i<b.length; i++){ 
               var bitem = b.eq(i);
               var delayTime = 200 * i; 
               b.eq(i).delay(delayTime).animate({ opacity:1,
               }, 400 );
            }
          }
          setTimeout(showT,1000);
        } 
       
       
         
       //my works_3
        if(dot_index == 4) { 
          $('.posco_title p').delay(2800).fadeIn(1500);
          $('.section:nth-child(5) .link').delay(3000).fadeIn(1500);
          var s_txt = $('.posco').text();
          var txt = s_txt.trim();
          var temp = ''
          for(var i=0; i<txt.length; i++) {
            var txt_n = txt.charAt(i);
            function txt_ani(i) {
              return temp += '<b>' + i + '</b>';
            }
            txt_ani(txt_n);
          }
          $('.posco').html(temp);
          
          var b = $('.posco b');
          var b_t = $('.posco');
          function showT(){
          b.css('opacity', 0);
            for(var i=0; i<b.length; i++){ 
                var bitem = b.eq(i);
                var delayTime = 200 * i; 
                b.eq(i).delay(delayTime).animate({ opacity:1,
                }, 400 );
            }
          }
          setTimeout(showT,1500);
        }


       // section_skill
        if(dot_index == 5) { 
          $('.skill').delay(800).fadeIn(1500);
        } 


       // section_contact
        if(dot_index == 6) { 
          $('.detail').delay(1000).stop().animate({bottom:'0'},1000);
          var mobile = window.matchMedia( '( max-width: 700px )' );
              if( mobile.matches == true ){
                $('.detail').delay(1000).stop().animate({bottom:'0'},1000);
              }
          $('.contents_box img').delay(1000).stop().animate({left:'-20%'},1500);
        } 
    });




  // main_title click 

  const first = $('.first_main');
  const second = $('.second_main');
  var not_mobile = window.matchMedia( '( min-width: 700px)' );
  if( not_mobile.matches == true ){
  first.click(function(){
    var first_index = $(this).index();
    $('.slide').stop().animate({marginTop:-(section_height * first_index)}, 800, 'easeInOutExpo');
    dot.eq(first_index).addClass('dot_in').siblings().removeClass('dot_in');
    
    //about
      if(first_index == 1) {
        $('.introduce p').delay(1000).fadeIn(1400);
      }
      

    //my works_1
      if(first_index == 2) { 
        $('.charles-simon_title p').delay(2800).fadeIn(1500);
        $('.section:nth-child(3) .link').delay(3000).fadeIn(1500);
        var s_txt = $('.charles-simon').text();
        var txt = s_txt.trim();
        var temp = ''
        for(var i=0; i<txt.length; i++) {
          var txt_n = txt.charAt(i);
          function txt_ani(i) {
 
            return temp += '<b>' + i + '</b>';
          }
          txt_ani(txt_n);
        }
        $('.charles-simon').html(temp);
        
        var b = $('.charles-simon b');
        var b_t = $('.charles-simon');
        function showT(){
        b.css('opacity', 0);
          for(var i=0; i<b.length; i++){ 
             var bitem = b.eq(i);
             var delayTime = 200 * i; 
             b.eq(i).delay(delayTime).animate({ opacity:1,
             }, 400 );
          }
        }
        setTimeout(showT,1500);
      } 
  });

  second.click(function(){
    var second_index = $(this).index()+2;
    $('.slide').stop().animate({marginTop:-(section_height * second_index)}, 800, 'easeInOutExpo');
    dot.eq(second_index).addClass('dot_in').siblings().removeClass('dot_in');
    
    // section_skill
      if(second_index == 5) { 
         $('.skill').delay(800).fadeIn(1500);
      } 


    // section_contact
      if(second_index == 6) { 
        $('.detail').delay(1000).stop().animate({bottom:'0'},1000);
        var mobile = window.matchMedia( '( max-width: 700px )' );
            if( mobile.matches == true ){
              $('.detail').delay(1000).stop().animate({bottom:'0'},1000);
            }
            $('.contents_box img').delay(1000).stop().animate({left:'-20%'},1500);
       } 
  });
}
  
  // main_title click mobile
  var mobile = window.matchMedia( '( max-width: 699px)' );
  if( mobile.matches == true ){
    first.click(function(){
      var first_index = $(this).index();
      var m_scroll = $('.wrap').scrollTop();
      if(first_index == 1){
        $('.wrap').animate({scrollTop:'1000'},700);
      }
      if(first_index == 2){
        $('.wrap').animate({scrollTop:'1900'},800);
      }
    });
    second.click(function(){
      var second_index = $(this).index();
      if(second_index == 3){
        $('.wrap').animate({scrollTop:'4670'},900);
      }
      if(second_index == 4){
        $('.wrap').animate({scrollTop:'5615'},1000);
      }
    });
    
    // logo 클릭시 이동(mobile)
    $('.title').click(function(){
      $('.wrap').animate({scrollTop:0}, 1000);
    });
  }
  


   // logo 클릭시 이동
    $('.title').click(function(){
      $('.slide').animate({marginTop:0}, 800, 'easeInOutExpo');
      $('.dot ul li:nth-child(1)').addClass('dot_in').siblings().removeClass('dot_in');
    });
    


});// ready fnc