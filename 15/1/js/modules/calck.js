 export default function calck(){
	let inputCulc = document.getElementsByClassName('counter-block-input')

for(let i = 0; i < inputCulc.length; i++){
  inputCulc[i].addEventListener('keypress', function() {
        setTimeout(() => {
            var res = /[^0-9]/g.exec(this.value);
            this.value = this.value.replace(res, '');
        }, 0);
    });
}


   // Калькулятор 

   let persons = document.getElementsByClassName('counter-block-input')[0],
       restDay = document.getElementsByClassName('counter-block-input')[1],
       place = document.getElementById('select'),
       totalValue = document.querySelector('#total'),
       personeSum = 0,
       daysSum = 0,
       total = 0;

       totalValue.innerHTML = 0;



       persons.addEventListener('change', function(){
           personeSum = +this.value
            total =(daysSum + personeSum)*4000 
            if(restDay.value == '' || persons.value == ''){
              totalValue.innerHTML = 0;
            } else {
              totalValue.innerHTML = total;
            }                
       })

       restDay.addEventListener('change', function(){
           daysSum = +this.value
           total =(daysSum + personeSum)*4000
           if(restDay.value == '' || persons.value == ''){
            totalValue.innerHTML = 0;
           } else {
            totalValue.innerHTML = total;
           }
       })
      
      place.addEventListener('change', function (){
        if(restDay.value == '' || persons.value == '' ){
          totalValue.innerHTML = 0;
        } else {
          let a = total;          
          totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
      })
}

