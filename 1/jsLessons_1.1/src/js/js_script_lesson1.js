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
  
  var a = 0;

while (a++, a <= 3){
  var goods = prompt ('Какой тип товаров будем продавать?');
  mainList.shopGoods[a] = goods;
}; 

//Считаем бюджет на день 

  var oneDay = youBudget/30;
  alert('Бюджет на один день '+oneDay);
// Выводим данные в консоль
  console.log(mainList);