 $(document).ready(function(){
    'use strict';
     
     $('.nav-link').on('click' , function (){
         $(this).addClass('active').siblings().removeClass('active');
     });
     
    
     $('.all').click(function(){
         $('.gallery-wrapper .gallery-img img').fadeIn(1000);
     });
     
     $('.culture').click(function(){
         $('.gallery-wrapper .Cultureimg').fadeIn(1000);
         $('.teamimg').fadeOut(1000);
         $('.workSimg').fadeOut(1000);
     });
     
     $('.team').click(function(){
         $('.gallery-wrapper .teamimg').fadeIn(1000);
         $('.Cultureimg').fadeOut(1000);
         $('.workSimg').fadeOut(1000);
     });
     
     $('.workS').click(function(){
         $('.gallery-wrapper .workSimg').fadeIn(1000);
         $('.teamimg').fadeOut(1000);
         $('.Cultureimg').fadeOut(1000);
     });

     
     $('.timer').countTo();

     
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});
    
     
     
     
 });