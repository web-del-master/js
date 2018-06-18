window.addEventListener('DOMContentLoaded', function(){

function newTime(){
  let time = new Date();
  let hour = time.getHours(),
      min = time.getMinutes(),
      sec = time.getSeconds();
  if(hour < 10){
    hour = "0" + hour;    
  };
  if(min < 10){
    min = "0" + min;
  }
  if(sec < 10){
    sec = "0" + sec;
  }
 document.querySelector('#time').innerHTML = hour + ':' + min + ':' + sec;
}


let myTime = setInterval(newTime, 1000);


});