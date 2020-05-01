$(".example").vegas({
    slides: [
        { src: "/images/slaider1.jpg" },
        { src: "/images/logo3.jpg" }
    ]
});


$(document).ready(function(){
      $('.slider').bxSlider({
  pager: false,
   captions: true,
   speed: 1000,
   controls: false,
   nextText: '',
   prevText: '',
   easing: 'jswing',
   auto: true,
   pause: 10000
   });
    });

$(document).ready(function(){
    $('.bxslider-max').bxSlider(
{
  pager: false,
   captions: true,
   speed: 1000,
   controls: false,
   nextText: '',
   prevText: '',
   easing: 'jswing',
   auto: true,
   pause: 10000
   }
    	);
    
  });

$(document).ready(function(){
    
    $('.bxslider-min').bxSlider(
{
  pager: false,
   captions: true,
   speed: 1000,
   controls: false,
   nextText: '',
   prevText: '',
   easing: 'jswing',
   auto: true,
   pause: 10000
   }

    	);
  });


$(document).ready(function(){

   $(".menu__icon")
       .click(
          function()
          {
          	 $(".menu__links").toggle(600);
           }
        );
 
});