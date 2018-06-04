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
  if((typeof(goods)) === 'string' && goods != null && goods != '' && goods.length < 50 ){
    console.log('Все верно!');
    mainList.shopGoods[a] = goods;
  } else {
    alert('Заполните форму!');
    a--;
  };  
} ; 


// Задание для 2ого урока(2 варианта циклов)

// 1

/*var a = 0;
do{

  var goods = prompt('Какой тип товаров будем продавать?');

  if((typeof(goods)) === 'string' && goods != null && goods != '' && goods.length < 50 ){    
    console.log('Все верно!');
    mainList.shopGoods[a] = goods;
    a++
  } else {
    alert('Заполните форму!');
  };

}while (a <= 2 );*/

 
// 2

/* var a = 0
while (a < 3){  
  var goods = prompt ('Какой тип товаров будем продавать?');

  if((typeof(goods)) === 'string' && goods != null && goods != '' && goods.length < 50 ){    
    console.log('Все верно!');
    mainList.shopGoods[a] = goods;
    a++
  } else {
    alert('Заполните форму!');
  };
}; */


//Считаем бюджет на день 
  var oneDay = youBudget/30;
  alert('Бюджет на один день '+oneDay);

// Выводим данные в консоль
  console.log(mainList);