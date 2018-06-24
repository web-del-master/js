window.addEventListener('DOMContentLoaded', () => {
	let tab = document.getElementsByClassName('info-header-tab'),
	    tab_content = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];


	function hideTabContents(a){
		for(let i = a; i < tab_content.length; i++){
			tab_content[i].classList.remove('show');
			tab_content[i].classList.add('hide');
		}
     }

	hideTabContents(1);
	
	function showTabContent (b){
		if(tab_content[b].classList.contains('hide')){
			hideTabContents(0);
			tab_content[b].classList.remove('hide');
			tab_content[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event){
		let target = event.target;
		if(target.className == 'info-header-tab'){
             for(let i = 0 ; i < tab.length; i++){
             	if(target == tab[i]){
             		showTabContent(i);
             		break;
             	} 
             }
		}
	})	
// Timer

  let deadline = '2018-06-22';

  function getTimeRemaining(endtime){
  	let t = Date.parse(endtime) - Date.parse(new Date()),
  	    seconds = Math.floor((t/1000) % 60 ),
  	    minutes = Math.floor((t/1000/60)%60),
  	    hours = Math.floor((t/(1000*60*60)) );

  	    return{
  	    	'total' : t,
  	    	'hours' : hours,
  	    	'minutes' : minutes,
  	    	'seconds' : seconds
  	    };
  };

  function setClock(id, endtime) {
  	let timer = document.getElementById(id),
  	    hours = timer.querySelector('.hours'),
  	    minutes = timer.querySelector('.minutes'),
  	    seconds = timer.querySelector('.seconds');

  	    function updateClock(){
  	    	let t = getTimeRemaining(endtime);
  	    	// hours.innerHTML = t.hours;
  	    	// minutes.innerHTML = t.minutes;
  	    	// seconds.innerHTML = t.seconds;
          if(t.hours < 10){
            hours.innerHTML = `0 ${t.hours}`;
          } else {
            hours.innerHTML = t.hours;
          }; 
          if(t.minutes< 10){
            minutes.innerHTML = `0 ${t.minutes}`;
          } else {
            minutes.innerHTML = t.minutes;
          } ;
          if(t.seconds < 10){
            seconds.innerHTML = `0 ${t.seconds}`;
          } else {
            seconds.innerHTML = t.seconds;
          };



          if(t.total <= 0){
            clearInterval(timeInterval);
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
            } 
  	    };       

  	     updateClock();
  	  var timeInterval = setInterval(updateClock, 1000);   
  }

  setClock('timer', deadline);

  // Модальное окно

  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close =  document.querySelector('.popup-close');

  more.addEventListener('click', () => {
     more.classList.add('more-splash');
     overlay.style.display = "block" ;
     document.body.style.overflow = "hidden" ;   
  });

close.addEventListener('click', () => {
  overlay.style.display = "none" ;
  more.classList.remove('more-splash');
  document.body.style.overflow = "" ;
});

let desc_btn = document.getElementsByClassName("description-btn");

for(let i = 0; i< desc_btn.length; i++){  
  desc_btn[i].addEventListener('click', () => {  
     more.classList.add('more-splash');
     overlay.style.display = "block" ;
     document.body.style.overflow = "hidden" ;
     })
  };

  // Форма 
  let message = new Object();
  message.loading = "Загрузка....";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failrue = "Что-то пошло не так...";


  let form = document.getElementsByClassName('main-form')[0],
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');

      statusMessage.classList.add('status');

 form.addEventListener('submit', function (event){
   event.preventDefault();
   form.appendChild(statusMessage);

   // AJAX 
     let request = new XMLHttpRequest();

     request.open("POST", 'server.php')
     request.setRequestHeader("Content-Type", "application/x-www-form-urlencoder");

     let formData = new FormData(form);
     request.send(formData)

     request.onreadystatechange = function (){
      if(request.readyState < 4){
        statusMessage.innerHTML = message.loading;
      } else if(request.readyState === 4) {
           if (request.status == 200 && request.status < 300){
             statusMessage.innerHTML = message.success;
           } else {
            statusMessage.innerHTML = message.failrue;
           }
        }
     }

     for (let i = 0; i < input.length; i++){
      input[i] = '';
      // очищаем поля ввода
     }
 })

  let form2 = document.getElementById('form'),
      input2 = form2.getElementsByTagName('input');

 form2.addEventListener('submit', function (event){
   event.preventDefault();
   form2.appendChild(statusMessage);

   // AJAX 
     let request = new XMLHttpRequest();

     request.open("POST", 'server.php')
     request.setRequestHeader("Content-Type", "application/x-www-form-urlencoder");

     let formData = new FormData(form);
     request.send(formData)

     request.onreadystatechange = function (){
      if(request.readyState < 4){
        statusMessage.innerHTML = message.loading;
      } else if(request.readyState === 4) {
           if (request.status == 200 && request.status < 300){
             statusMessage.innerHTML = message.success;
           } else {
            statusMessage.innerHTML = message.failrue;
           }
        }
     }

     for (let i = 0; i < input.length; i++){
      input[i] = '';
      // очищаем поля ввода
     }
 });

 // Слайдер 

   let sliderIndex = 1,
       slides = document.getElementsByClassName('slider-item'),
       prev = document.querySelector('.prev'),
       next = document.querySelector('.next'),
       dotsWrap = document.querySelector('.slider-dots'),
       dot = document.getElementsByClassName('dot');
       
       showSlides(sliderIndex);

       function showSlides (n){
        if(n > slides.length){
          sliderIndex = 1;
        };
        if(n < 1){
          sliderIndex = slides.length;
        };
        for(let i = 0; i < slides.length; i++){
          slides[i].style.display = 'none'
        }
        for(let i = 0; i < dot.length; i++){
          dot[i].classList.remove('dot-active')
        }
         slides[sliderIndex - 1].style.display = 'block';
         dot[sliderIndex - 1].classList.add('dot-active');
       }


       function plusSliders (n){
          showSlides(sliderIndex += n);
       }

       function currentSlide(n){
         showSlides(sliderIndex = n);
       }

       prev.addEventListener('click', function(){
         plusSliders(-1);
       })
       next.addEventListener('click', function(){
         plusSliders(1);
       })

       dotsWrap.addEventListener('click', function(event){
         for(let i= 0; i< dot.length + 1; i++){
          if(event.target.classList.contains('dot') && event.target == dot[i-1]){
            currentSlide(i);
          }
         }
       })
let inputCulc = document.getElementsByClassName('counter-block-input')

for(let i = 0; i < inputCulc.length; i++){
  inputCulc[i].addEventListener('keypress', function() {
        setTimeout(() => {
            var res = /[^1-9]/g.exec(this.value);
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
            if(restDay.value == ''){
              totalValue.innerHTML = 0;
            } else {
              totalValue.innerHTML = total;
            }                
       })

       restDay.addEventListener('change', function(){
           daysSum = +this.value
           total =(daysSum + personeSum)*4000
           if(persons.value == ''){
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

})