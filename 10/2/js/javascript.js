window.addEventListener('DOMContentLoaded', function(){ 


btn.addEventListener('click', function () { 
let age = document.getElementById('age');
let nameUser = document.querySelector('#name');
let surname = document.querySelector('#surname');
let btn = document.getElementById('btn'); 
         alert("Пользователь " + surname.value + " " + nameUser.value + ", его возраст " + age.value);
} );


});