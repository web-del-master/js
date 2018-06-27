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

function myDate (){
  let date = new Date();
  let days = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear();
       if(days < 10){
          days = "0" + days;    
        };
        if(month < 10){
          month = "0" + month;
        };
        
  document.querySelector('#date').innerHTML = days + '.' + month + '.' + year;
}

console.log(myDate())


});