function my_ajax (){
// form
let message = new Object();
message.loading = "Загрузка...";
message.success = " Спасибо, скоро мы с вами свяжемся!";
message.failure = " Что-то пошло не так...";
   
let bigForm = document.querySelector(".bigForm"),
    bigFormInput = bigForm.getElementsByTagName("input"),
    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    
    let patternName	= /^[а-яёА-ЯЁ\s]+$/;
	let patternMail	= /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/;
    let phoneMy = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

 let big_name = document.querySelector(".big_name");
    big_name.addEventListener('change', ()=>{
    	let name = big_name.value    	
      	if(name.search(patternName)){
           big_name.value = '';
        }
      });
    let inputText = document.querySelector(".input-text");
    inputText.addEventListener('change', ()=>{
    	let name = inputText.value    	
      	if(name.search(patternName)){
           inputText.value = '';
        }
      });
    let big_phone = document.querySelector('.big_phone');
   big_phone.addEventListener('change', ()=>{
    	let name = big_phone.value    	
      	if(name.search(phoneMy)){
           big_phone.value = '';
        }
      });


    bigForm.addEventListener('submit', function(event){
    	event.preventDefault();
    	bigForm.appendChild(statusMessage);
    	// ajax 
    	let request = new XMLHttpRequest();
    	request.open("POST", "./server.php", true);

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoder");

        let formData =  new FormData(bigForm); // передаем параметром нашу форму

        

        request.send(formData);


        request.onreadystatechange = function (){
        	if(request.readyState < 4){
        		statusMessage.innerHTML = message.loading;
        	} else if(request.readyState === 4){
        		if(request.status == 200 &&  request.status < 300){
        			statusMessage.innerHTML = message.success;
        		}
        	}
        }
        
        for(let i = 0; i < bigFormInput.length; i++ ){
        	bigFormInput[i].value = '';
        }

    })

} module.exports = my_ajax;

