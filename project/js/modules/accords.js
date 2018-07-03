function accords (){
      let accordsBtn = document.getElementsByClassName('accordion-heading'),
          accordsBlock = document.getElementsByClassName('accordion-block');
          
          for(let i = 0; i < accordsBtn.length; i++){
          	accordsBtn[i].addEventListener('click', ()=>{

          		if(!(accordsBtn[i].classList.contains('.active'))){
          			for(let i = 0; i < accordsBtn.length; i++){
          				accordsBtn[i].classList.remove('active');
          			} ;

          		}
          		 accordsBtn[i].classList.add('active');
          })
          	 
          } 


}
module.exports = accords;