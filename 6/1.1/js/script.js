//Восстановить порядок в меню, добавить пятый пункт
let parent = document.getElementsByTagName("ul");
let a = document.getElementsByClassName("menu-item");
   a[1].innerHTML = "Второй пункт";
   a[2].innerHTML = "Третий пункт";

let i =  a[1].cloneNode(true);
    i.innerHTML = "Пятый пункт";

parent[0].appendChild(i);


//Заменить картинку заднего фона на другую из папки img
let replaceImg = document.getElementsByTagName("body");
replaceImg[0].style.background = 'url(./img/apple_true.jpg) center no-repeat';

// Поменять заголовок, добавить слово "подлинную"
let replaceTitle = document.getElementById("title");
 replaceTitle.innerHTML = "Мы продаем только подлинную технику Apple";

//Удалить рекламу со страницы
let dellAdv = document.getElementsByClassName("adv")
    dellAdv[0].parentNode.removeChild(dellAdv[0]);

// Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"
let question = prompt("Как вы относитесь к технике apple? ");
let z = document.getElementById("prompt");
    z.innerHTML = question;







