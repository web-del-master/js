function modalGift (){
// Моджальное окно с подарком 
 let modalTop = document.querySelector(".popup-gift"),
     fixedGift = document.querySelector(".fixed-gift"),
     popupClose = document.getElementsByClassName("popup-close");

     fixedGift.addEventListener('click', () => {
      modalTop.style.display = "block";      
      modalTop.style.zIndex = "99";       
      fixedGift.style.display = "none";
      clearInterval(scrolTime);       
     });
    
// Назвначаем всем крестикам обработчик событий закрыть
    for(let b = 0; b < popupClose.length; b++){
    	popupClose[b].addEventListener('click', () => {
        modalTop.style.display = "none";        
        windowModalDesign.style.display = 'none';
        modalBtnConsultation.style.display = 'none';              
     });}
    
// Модальное окно button-design

  let modalDesign = document.querySelectorAll('.button-design'),
      windowModalDesign = document.querySelector('.popup-design'),
      windowpopup = document.querySelector('.popup-content');
      
      for(let i = 0; i < modalDesign.length; i++){
      	modalDesign[i].addEventListener('click', ()=>{        
        windowModalDesign.style.display = 'block';        
        windowpopup.style.display = 'block';        
        windowpopup.style.zIndex = "99";
        windowpopup.style.position = "fixed";
        clearInterval(scrolTime);
      })}




 // Модальное окно button-consultation 
    let btnConsultation = document.querySelectorAll('.button-consultation'),
        modalBtnConsultation = document.querySelector('.popup-consultation');
        
        for(let i = 0; i < btnConsultation.length; i++){
        	btnConsultation[i].addEventListener('click', ()=>{
        		modalBtnConsultation.style.display = 'block';        		
        		modalBtnConsultation.style.zIndex = "99";
        		clearInterval(scrolTime);
        	})
        }

        	window.addEventListener('click', function(event){
			  if (event.target == windowModalDesign) {
			    windowModalDesign.style.display = 'none';
			  }
			  if (event.target == modalTop) {
			    modalTop.style.display = "none";
			  } 
			  if (event.target == modalBtnConsultation) {
			    modalBtnConsultation.style.display = 'none';
			  }

			});
   let modal60 =  setTimeout(modal60sec,75000);
        function modal60sec (){        	
        	    modalBtnConsultation.style.display = 'block';
        		modalBtnConsultation.style.zIndex = "95";
        		clearTimeout(modal60);
        };

     
    let scrolTime = setInterval(scrolling, 1000);    

    function scrolling (){
    
         	
        let a = window.pageYOffset;
       if(a > 11500){
       	 modalTop.style.display = "block";
         modalTop.style.zIndex = "99";       
         fixedGift.style.display = "none";
         clearInterval(scrolTime);
       }           
    }
     
        
    };

module.exports = modalGift;