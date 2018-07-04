function sizeimg (){

	let sizeelem = document.querySelectorAll('.sizes-block');
	   
	let sizeWrapper = document.querySelector('.sizes-wrapper');

//первая картинка 
	    sizeelem[0].addEventListener('mouseover', ()=>{
	    	sizeelem[0].querySelector('.size-1').setAttribute("src", "../img/sizes-1-1.png");
	    	sizeelem[0].querySelector('.starting-price').style.display = "none";
	    	sizeelem[0].querySelector('.size').style.display = "none";
	    	sizeelem[0].querySelector('.final-price').style.display = "none";
	    	   	
	    })
	    

	    window.addEventListener('mouseover', ()=>{
	    	if(event.target == sizeWrapper){
	    		sizeelem[0].querySelector('.size-1').setAttribute("src", "../img/sizes-1.png")
	    		sizeelem[0].querySelector('.starting-price').style.display = "block"
	    	    sizeelem[0].querySelector('.size').style.display = "block"
	    	    sizeelem[0].querySelector('.final-price').style.display = "block"
	    	}
	    })

	    // Вторая картинка
	    sizeelem[1].addEventListener('mouseover', ()=>{
	    	sizeelem[1].querySelector('.size-2').setAttribute("src", "../img/sizes-2-1.png");
	    	sizeelem[1].querySelector('.starting-price').style.display = "none";
	    	sizeelem[1].querySelector('.size').style.display = "none";
	    	sizeelem[1].querySelector('.final-price').style.display = "none";
	    	   	
	    })

	    window.addEventListener('mouseover', ()=>{
	    	if(event.target == sizeWrapper){
	    		sizeelem[1].querySelector('.size-2').setAttribute("src", "../img/sizes-2.png")
	    		sizeelem[1].querySelector('.starting-price').style.display = "block"
	    	    sizeelem[1].querySelector('.size').style.display = "block"
	    	    sizeelem[1].querySelector('.final-price').style.display = "block"
	    	}
	    })

	    sizeelem[2].addEventListener('mouseover', ()=>{
	    	sizeelem[2].querySelector('.size-3').setAttribute("src", "../img/sizes-3-1.png");
	    	sizeelem[2].querySelector('.starting-price').style.display = "none";
	    	sizeelem[2].querySelector('.size').style.display = "none";
	    	sizeelem[2].querySelector('.final-price').style.display = "none";
	    	   	
	    })

	    window.addEventListener('mouseover', ()=>{
	    	if(event.target == sizeWrapper){
	    		sizeelem[2].querySelector('.size-3').setAttribute("src", "../img/sizes-3.png")
	    		sizeelem[2].querySelector('.starting-price').style.display = "block"
	    	    sizeelem[2].querySelector('.size').style.display = "block"
	    	    sizeelem[2].querySelector('.final-price').style.display = "block"
	    	}
	    })  
	    sizeelem[3].addEventListener('mouseover', ()=>{
	    	sizeelem[3].querySelector('.size-4').setAttribute("src", "../img/sizes-4-1.png");
	    	sizeelem[3].querySelector('.starting-price').style.display = "none";
	    	sizeelem[3].querySelector('.size').style.display = "none";
	    	sizeelem[3].querySelector('.final-price').style.display = "none";
	    	   	
	    })

	    window.addEventListener('mouseover', ()=>{
	    	if(event.target == sizeWrapper){
	    		sizeelem[3].querySelector('.size-4').setAttribute("src", "../img/sizes-4.png")
	    		sizeelem[3].querySelector('.starting-price').style.display = "block"
	    	    sizeelem[3].querySelector('.size').style.display = "block"
	    	    sizeelem[3].querySelector('.final-price').style.display = "block"
	    	}
	    })


	   
	    
	    
	    

}
 module.exports = sizeimg;