function burger (){
	let btnBurg = document.querySelector('.burger'),
	    menuBurg = document.querySelector('.burger-menu');
	    console.log(menuBurg)   
      setInterval(startSize, 10);
	    function startSize (){
	    	if(window.innerWidth < 768){          		
          		btnBurg.style.display = "block" ;                  
		     } else{
          		btnBurg.style.display = "none";                   
		      };
	    }

	    btnBurg.addEventListener('click', ()=>{           
           	menuBurg.classList.toggle("showBtn");          
	    });


          
	   

} module.exports = burger;