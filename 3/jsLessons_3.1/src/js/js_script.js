// Собираем данные клиента
  let youBudget,
      nameStore,
      time,
      price

  function start(){

 youBudget = prompt('Ваш бюджет на месяц?'); 

 while(isNaN(youBudget) || youBudget == "" || youBudget == null){
  youBudget = prompt('Ваш бюджет на месяц?');
 }
  nameStore = prompt('Название вашего магазина?').toUpperCase();
  time = 21;
}

start();




// сохраняем в обьект содержащий масив.
  let mainList = {
      youBudget,
      nameStore,
      shopGoods: [],
      emploiers: {},
      open: false,
      discount: true
  }  

function getGoods () {
        for(let a = 0; a < 3; a++){
          let goods = prompt('Какой тип товаров будем продавать?');
          if((typeof(goods)) === 'string' &&  goods != null && goods != "" && goods.length < 50){
            console.log('Все верно!');
            mainList.shopGoods[a] = goods;
          } else {
            alert('Заполните форму!');
            a--;   
          } 
        } 
}

getGoods();

function workTime (time) {
 if(time < 0){
   console.log('Такого не может быть!');
 } else if (time > 8 && time < 20){
       console.log('Время работать!');
    } else if (time < 24) {
            console.log('Уже слишком поздно!');
            } else {
              console.log('В сутках только 24 часа!');
            }
}

workTime();



//Считаем бюджет на день 
function myBudget (){
      let oneDay = youBudget/30;
      alert('Бюджет на один день '+oneDay);
    }
myBudget();
price = 50;

function luckyPrice () {
  if(mainList.discount){
     newPrice = Math.round(price*20/100);
     alert(newPrice);    
     } else {
            alert('Скидок нет');
            }
}

luckyPrice();

function shopEmployers(){
  for(let i = 1; i < 5; i++){
    let nameEmployers = prompt('Имя сотрудника');
    mainList.emploiers[i] = nameEmployers;
  }
}

shopEmployers();
// Выводим данные в консоль
  console.log(mainList);