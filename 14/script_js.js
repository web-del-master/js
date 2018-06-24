$(document).ready(function(){
	// Анимация на кнопке "ВЫБРАТЬ ТУР"
	 $('.main_btna').on('click', function(){
	 	// анимация модального окна
     	$('.modal').css(
					              {
					             	"position": "absolut", 
					             	"display":"block",
					                "top":"-100%"
					              }             
     		                      );

     	$('.modal').animate(
				     	          {
				                    top:"10%" 
				     	          },     		
			     		                  4000);
     // анимация подложки
     	$('.overlay').fadeIn(2000);
     });

// Анимация на кнопке "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
	$('.main_btn').on('click', function(){
     	$('.modal').css(
              {
             	"position": "absolut", 
             	"display":"block",
                "top":"-100%"
              }             
     		                      );
     	$('.modal').animate(
     	           {
                       top:"10%" 
     	           },     		
     		                  4000);
     	
     	$('.overlay').fadeIn(2000);
     });

	// Анимация на кнопке "расписание туров"
    $('a:contains("расписания туров")').on('click', function(){
     	$('.modal').css(
              {
             	"position": "absolut", 
             	"display":"block",
                "top":"-100%"
              }             
     		                      );
     	$('.modal').animate(
     	           {
                       top:"10%" 
     	           },     		
     		                  4000);
     	
     	$('.overlay').fadeIn(2000);
     });

    



     $('.close').click(function(){
     	$('.modal').animate(
     	           {
                       top:"-100%" 
     	           },     		
     		                  4000);
     	$('.overlay').fadeOut(2000);
     }); 
})