function culck (){
    let sizePic = document.getElementById('size'),
        materialPic = document.getElementById('material'),
        optionsPic = document.getElementById('options'),
        promocode = document.querySelector('.promocode'),
        calcPrice = document.querySelector('.calc-price');

         let h = 0;
         let r = 0; 
         let n = 0;
         let sale = 0;
         let cul = 0;
         
         function allCulck (){ 
            let cost = 0;        	
         	if(h == 0 || r == 0){         		
         		calcPrice.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
         		calcPrice.style.fontWeight = '350'
         		calcPrice.style.fontSize = '14px'
         		cul = 0;         		
         	} else{
         		cost = h + r + n;
         		calcPrice.innerHTML = cost;
         		calcPrice.style.fontWeight = '700'
         		calcPrice.style.fontSize = '50px'
         		cul = cost         	
         	}
         	if(promocode.value === 'IWANTPOPART'){
         	   salePrice()
         	} 

         	 console.log(cul)
         };
         
        
         function salePrice(){
         	if( !(cul == 0) ){
         		let cost =  (h + r + n) - (((h + r + n)/100)*30);
         		calcPrice.innerHTML = cost;
         		calcPrice.style.fontWeight = '700'
         		calcPrice.style.fontSize = '50px' 
         	}
         }
         

          sizePic.addEventListener('change', ()=>{
          	let a = sizePic.options[sizePic.selectedIndex].value;
          	 if(sizePic.options[sizePic.selectedIndex].classList.contains("none")){
          		a = 0
          	  }
          	 h = +(a)          	   
          	 allCulck ()
          })
          materialPic.addEventListener('change', ()=>{
          	let b = materialPic.options[materialPic.selectedIndex].value;
             if(materialPic.options[materialPic.selectedIndex].classList.contains("none")){
          		b = 0
          	}
          	 r = +(b)         	 
          	 allCulck ()
          }) 
          optionsPic.addEventListener('change', ()=>{
          	let g = optionsPic.options[optionsPic.selectedIndex].value;
          	if(optionsPic.options[optionsPic.selectedIndex].classList.contains("none")){
          		g = 0
          	}
          	n = +(g)          	
          	allCulck ()
          })
          promocode.addEventListener('change', ()=>{                      	
          	if(promocode.value === 'IWANTPOPART'){
          		salePrice();
          	}else{
               cost = h + r + n;
         		calcPrice.innerHTML = cost;
         		calcPrice.style.fontWeight = '700'
         		calcPrice.style.fontSize = '50px'
         		cul = cost
          	}          	
          })
      



   
} module.exports = culck;