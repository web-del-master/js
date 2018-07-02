function sliderDown (){

  let getSliderDown = document.querySelectorAll('.feedback-slider-item'),
      prevBtn = document.querySelector('.main-prev-btn'),
      nextBtn = document.querySelector('.main-next-btn');    
	     rigth(-1)
        setInterval(autoSlide, 15000); 
         var a = 0;
         
  function rigth (n){         
  	     for(let i = 0 ; i < getSliderDown.length; i++){
	      	getSliderDown[i].style.display = 'none';
	      	getSliderDown[i].style.opacity = '0'	      		      	
	      };       
         if(n > getSliderDown.length ){
         	n = 1
         };
         if(n < 1){
         	n = getSliderDown.length
         };
         let a = 0;
         let d = -25;
         getSliderDown[n - 1].style.marginLeft = d + '%';
         getSliderDown[n - 1].style.display = 'block';         
         let animateSlid  = setInterval(animateMy, 1)         
         function animateMy (){
                	if(d == 0){
                		clearInterval(animateSlid)
                	}else{                		
                		d = (+d) + 1;
                		a = (+a) + 0.04;
                		getSliderDown[n - 1].style.opacity = a + '';
                		getSliderDown[n - 1].style.marginLeft = d + '%';
                	}                	
                } 
               
  } 

 
   function left (n){         
  	     for(let i = 0 ; i < getSliderDown.length; i++){
	      	getSliderDown[i].style.display = 'none';
	      	getSliderDown[i].style.opacity = '0'	      		      	
	      };       
         
         let a = 0;
         let d = 25;
         getSliderDown[n - 1].style.marginLeft = d + '%';
         getSliderDown[n - 1].style.display = 'block';         
         let animateSlid  = setInterval(animateMy, 1)         
         function animateMy (){
                	if(d == 0){
                		clearInterval(animateSlid)
                	}else{                		
                		d = (+d) - 1;
                		a = (+a) + 0.04;
                		getSliderDown[n - 1].style.opacity = a + '';
                		getSliderDown[n - 1].style.marginLeft = d + '%';
                	}                	
                } 
               
  } 

     
		function autoSlide (){
			    a++
		     	let j = a 
		     	if(j > 2){
		     		a = 0
		     	}
		         rigth(a);
		}

     nextBtn.addEventListener('click', ()=>{
     	a +=1
     	let j = a 
     	if(j > 2){
     		a = 0
     	}
         rigth(a);
         console.log(a)         
     });

     prevBtn.addEventListener('click', ()=>{
     	a -=1
     	let j = a 
     	if(j < 1){
     		a = 3
     	}
         left(a);     	
     	console.log(a)
     })
}

module.exports = sliderDown;