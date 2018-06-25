export default function modal (){
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
};
