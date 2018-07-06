function formPopup () {
    let popupContentForm = document.querySelector('.popupContentForm'),
        inputPopupContent = popupContentForm.getElementsByTagName('input'),
        popupContentFormName = document.querySelector('.popupContentFormName'),
        popupContentFormPhone = document.querySelector('.popupContentFormPhone'),
        messageModal = document.querySelector('.messageModal'),
	    messageModalText = document.querySelector('#messageModalText');	   

        let phoneMy = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
	    let patternName	= /^[а-яёА-ЯЁ\s]+$/;
	    
 
 popupContentFormName.addEventListener('change', ()=>{
    	let name = popupContentFormName.value    	
      	if(name.search(patternName)){
           popupContentFormName.value = '';
        }
      });

popupContentFormPhone.addEventListener('change', ()=>{
    	let name = popupContentFormPhone.value    	
      	if(name.search(phoneMy)){
           popupContentFormPhone.value = '';
        }
      });
popupContentForm.addEventListener('submit', function(event){
    	event.preventDefault();    	
    	// ajax 
    	let request = new XMLHttpRequest();
    	request.open("POST", "./server.php", true);

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoder");

        let formData2 =  new FormData(popupContentForm); // передаем параметром нашу форму

        

        request.send(formData2);

      
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
        
        for(let i = 0; i < inputPopupContent.length; i++ ){
        	inputPopupContent[i].value = '';
        }

    })
} module.exports = formPopup;