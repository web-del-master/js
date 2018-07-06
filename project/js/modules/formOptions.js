function formOptions (){
	let popupDesignForm = document.querySelector('.popupDesignForm'),
	    popupInput = popupDesignForm.getElementsByTagName("input"),
	    popupDesignFormName = document.querySelector('.popupDesignFormName'),
	    popupDesignFormPhone = document.querySelector('.popupDesignFormPhone'),
	    popupDesignFormText = document.querySelector('.popupDesignFormText'),
	    messageModal = document.querySelector('.messageModal'),
	    messageModalText = document.querySelector('#messageModalText'),
	    popupDesignFormEmail = document.querySelector('.popupDesignFormEmail');
	    
	    let patternMail	= /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm ;
	    let phoneMy = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
	    let patternName	= /^[а-яёА-ЯЁ\s]+$/;
    messageModal.addEventListener('click', ()=>{
    	messageModal.style.display="none";
    })
    popupDesignFormEmail.addEventListener('change', ()=>{
    	let name = popupDesignFormEmail.value    	
      	if(name.search(patternMail)){
           popupDesignFormEmail.value = '';
        }
      });
    popupDesignFormName.addEventListener('change', ()=>{
    	let name = popupDesignFormName.value    	
      	if(name.search(patternName)){
           popupDesignFormName.value = '';
        }
      });
    popupDesignFormText.addEventListener('change', ()=>{
    	let name = popupDesignFormText.value    	
      	if(name.search(patternName)){
           popupDesignFormText.value = '';
        }
      });
    popupDesignFormPhone.addEventListener('change', ()=>{
    	let name = popupDesignFormPhone.value    	
      	if(name.search(phoneMy)){
           popupDesignFormPhone.value = '';
        }
      });

	popupDesignForm.addEventListener('submit', function(event){
    	event.preventDefault();    	
    	// ajax 
    	let request = new XMLHttpRequest();
    	request.open("POST", "./server.php", true);

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoder");

        let formData1 =  new FormData(popupDesignForm); // передаем параметром нашу форму

        

        request.send(formData1);


        request.onreadystatechange = function (){
        	if(request.readyState < 4){
        		messageModalText.innerHTML = "Ошибка"
        		messageModal.style.display ="block"
        		messageModal.style.zIndex = 800;
        	} else if(request.readyState === 4){
        		if(request.status == 200 &&  request.status < 300){
        			messageModal.style.display ="block";
        			messageModalText.innerHTML = "Спасибо"
        		}
        	}
        }
        
        for(let i = 0; i < popupInput.length; i++ ){
        	popupInput[i].value = '';
        }

    })

} module.exports = formOptions;