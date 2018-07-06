function burger (){
	let btnBurg = document.querySelector('.burger'),
	    menuBurg = document.querySelector('.burger-menu');	       
      setInterval(startSize, 10);
	    function startSize (){
	    	if(window.innerWidth < 768){          		
          		btnBurg.style.display = "block" ;                  
		     } else{
          		btnBurg.style.display = "none";
          		menuBurg.style.display = "none";                   
		      };
	    }

	    btnBurg.addEventListener('touchstart', ()=>{           
           	menuBurg.classList.toggle("showBtn");          
	    });


          
	   

} module.exports = burger;