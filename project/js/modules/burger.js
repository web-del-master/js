function burger (){
	let btnBurg = document.querySelector('.burger'),
	    menuBurg = document.querySelectorAll('#menuBurg');
	    
          btnBurg.addEventListener('click',()=>{
          	if(window.innerWith <= 768){          		
          		menuBurg.style.display = "block";
                   
		}
          	
          })
		
	

} module.exports = burger;