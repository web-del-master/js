window.addEventListener('DOMContentLoaded', function(){ 




 let nameUser = document.querySelector('#name');
 let surname = document.querySelector('#surname');
 let age = document.getElementById('age');
 let btn = document.getElementById('btn'); 
 
function showUser(surname, name) {
         alert("Пользователь " + surname.value + " " + name.value + ", его возраст " + this.value);
}
 
showUser.call(age, surname, nameUser)

});