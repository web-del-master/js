function showall (){
   let styleBtn = document.querySelector('.button-transparent');
   let elem = document.getElementsByClassName('styles-2');

      styleBtn.addEventListener('click', ()=>{
      	styleBtn.style.display = 'none';
      	for(let i = 0; i < elem.length; i++){
      		elem[i].classList.remove("hidden-lg")
      		elem[i].classList.remove("hidden-md")
      		elem[i].classList.remove("hidden-sm")
      		elem[i].classList.remove("hidden-xs")
      		elem[i].classList.add("col-sm-3")
      		elem[i].classList.add("col-sm-offset-0")
      		elem[i].classList.add("col-xs-10")
      		elem[i].classList.add("col-xs-offset-1")
      	}
      })

}
 module.exports = showall;