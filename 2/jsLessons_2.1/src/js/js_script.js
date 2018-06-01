// Lessons_1.1

// Собираем данные клиента
  var youBudget = prompt('Ваш бюджет на месяц?', '30000');
  var nameStore = prompt('Название вашего магазина?', 'Магазин' );

// сохраняем в обьект содержащий масив.
  var mainList = {
      youBudget,
      nameStore,
      shopGoods: [],
      emploiers: {},
      open: false
  };
  


for(var a = 0; a < 3; a++){
  var goods = prompt('Какой тип товаров будем продавать?');
  if((typeof(goods)) === 'string' && (typeof(goods)) != null && goods != '' && goods.length < 50 ){
    console.log('Все верно!');
    mainList.shopGoods[a] = goods;
  };  
} ; 


// Задание для 2ого урока(2 варианта циклов)
/*var a = 0;
do{
  var goods = prompt('Какой тип товаров будем продавать?');
  mainList.shopGoods[a] = goods
  a++
}while (a <= 2 );*/

/* var a = 0
while (a < 3){
  var goods = prompt ('Какой тип товаров будем продавать?');
  a++
  mainList.shopGoods[a] = goods;
}; */


//Считаем бюджет на день 
  var oneDay = youBudget/30;
  alert('Бюджет на один день '+oneDay);

// Выводим данные в консоль
  console.log(mainList);