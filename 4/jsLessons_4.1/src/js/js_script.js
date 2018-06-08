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

// сохраняем в обьект содержащий масив.
  let mainList = {
      youBudget,
      nameStore,
      shopGoods: [],
      emploiers: {},
      open: false,
      discount: true,
      shopItems: [],
      getGoods: function getGoods () {
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
      }, 
      workTime: function workTime (time) {
                   if(time < 0){
                     console.log('Такого не может быть!');
                   } else if (time > 8 && time < 20){
                         console.log('Время работать!');
                         mainList.open = true;
                      } else if (time < 24) {
                              console.log('Уже слишком поздно!');
                              } else {
                                console.log('В сутках только 24 часа!');
                              }
      },
      myBudget: function myBudget (){
        let oneDay = youBudget/30;
        alert('Бюджет на один день '+oneDay);
      },
      luckyPrice: function luckyPrice () {
                    if(mainList.discount){
                       newPrice = Math.round(price*80/100);
                       alert(newPrice);    
                       } else {
                              alert('Скидок нет');
                              }
      },
      shopEmployers: function shopEmployers(){
                      for(let i = 1; i < 5; i++){
                        let nameEmployers = prompt('Имя сотрудника');
                        mainList.emploiers[i] = nameEmployers;
                      }
      },
      shopItems: function shopItems(){
        let items = prompt("Перечислите через запятую ваши товары");

            while (!isNaN(items) || items == "" || items == null){
              items = prompt("Перечислите через запятую ваши товары");
              }

        mainList.shopItems = items.split(",");
        mainList.shopItems.push(prompt("Подождите, еще", ""));
        mainList.shopItems.sort();
        mainList.shopItems.forEach(function(item, i, arr) {
                 
                alert( (i+1) + ": " + item + " (массив:" + arr + ")" );
                })
        for (let key in mainList){
            alert("Наш магазин включает в себя" + mainList[key]);
          }
      }

  }  

mainList.shopItems();
  // for (let key in mainList.shopItems){
  //   alert("У нас вы можете купить" + mainList.shopItems[key])
  // }

  console.log(mainList);
