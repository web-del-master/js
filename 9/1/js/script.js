window.addEventListener('DOMContentLoaded', function(){
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

  let deadline = '2018-06-18';

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
            hours.innerHTML = '0' + t.hours;
          } else {
            hours.innerHTML = t.hours;
          }; 
          if(t.minutes< 10){
            minutes.innerHTML = '0' + t.minutes;
          } else {
            minutes.innerHTML = t.minutes;
          } ;
          if(t.seconds < 10){
            seconds.innerHTML = '0' + t.seconds;
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
	    
})