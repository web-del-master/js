//    Получить кнопку "Открыть магазин" через id
 let btn = document.getElementById("open-btn");
 // Получить все поля в левом меню через классы
 let nameStoreValue = document.getElementsByClassName("name-value")[0],
     youBudgetValue = document.getElementsByClassName("budget-value")[0],
     shopGoodsCategori = document.getElementsByClassName("goods-value")[0],
     shopGoodsItems = document.getElementsByClassName("items-value")[0],
     emploiersValue = document.getElementsByClassName("employers-value")[0],
     disValue = document.getElementsByClassName("discount-value")[0],
     isOpen = document.getElementsByClassName("isopen-value")[0];
 // Получить поля категории товаров через класс
 let CategoriGoods = document.getElementsByClassName("goods-item");
 // Получить все 3 кнопки через Tag
 let goods_Btn = document.getElementsByTagName("button")[1];
 let budget_Btn = document.getElementsByTagName("button")[2];
 let emp_Btn = document.getElementsByTagName("button")[3];
//  Получить поля ввода товаров, времени и расчета бюджета через querySelector 
 let chooseGoods = document.querySelector(".choose-item"),
     getTime = document.querySelector(".time-value"),
     getBudget = document.querySelector(".count-budget-value");
// Получить поля имен сотрудников через querySelectorAll
 let allPeople = document.querySelectorAll(".hire-employers-item");

getBudget.readOnly = true;
goods_Btn.disabled = true;
btn.disabled = true;
budget_Btn.disabled = true;
emp_Btn.disabled = true;
//Собираем данные клиента
  let youBudget,
      nameStore,      
      price;

 btn.addEventListener('click', () => {

         youBudget = prompt('Ваш бюджет на месяц?'); 
         while(isNaN(youBudget) || youBudget == "" || youBudget == null){
          youBudget = prompt('Ваш бюджет на месяц?');
         }
         youBudgetValue.textContent = youBudget;         
         nameStoreValue.textContent = prompt('Название вашего магазина?').toUpperCase();

         if(youBudget > 20000){
           disValue.style.backgroundColor = 'green';           
         } else {
            disValue.style.backgroundColor = 'red';
         }
 });
 
 goods_Btn.addEventListener('click', () => {                  
                  for(let a = 0; a < CategoriGoods.length; a++){
                 
                  let goods = CategoriGoods[a].value;
                  if((typeof(goods)) === 'string' &&  goods != null && goods.length < 50){
                    console.log('Все верно!');
                    mainList.shopGoods[a] = goods;                    
                  } else {                    
                    a--;   
                  }
                  shopGoodsCategori.textContent = mainList.shopGoods; 
                } 

 });

chooseGoods.addEventListener('change', () => {
        let items = chooseGoods.value;

           if (isNaN(items) || items == ""){
              mainList.shopItems = items.split(",");        
              mainList.shopItems.sort();
              shopGoodsItems.textContent = mainList.shopItems;
              }
       
});


getTime.addEventListener('change', () =>{
     let time = getTime.value

          if(time < 0){
               console.log('Такого не может быть!');
                mainList.open = false;                
             } else if (time > 8 && time < 20){
                   console.log('Время работать!');
                   mainList.open = true;
                    goods_Btn.disabled = false;
                budget_Btn.disabled = false;
                emp_Btn.disabled = false;
                btn.disabled = false;
                } else if (time < 24) {
                        console.log('Уже слишком поздно!');
                        mainList.open = false;
                        
                        } else {
                          console.log('В сутках только 24 часа!');
                          mainList.open = false;
                          
                        };

     if(mainList.open == true){
      isOpen.style.backgroundColor = 'green'
     } else {
        isOpen.style.backgroundColor = 'red'
     }; 
   });

budget_Btn.addEventListener('click', () =>{    
    getBudget.value = youBudget/30;
     
    
  
})

emp_Btn.addEventListener('click', () =>{
                      for(let i = 0; i < allPeople.length; i++){
                        let nameEmployers = allPeople[i].value;                        
                        mainList.emploiers[i] = nameEmployers;
                        emploiersValue.textContent += mainList.emploiers[i] + ','; 
                      }   
});



// сохраняем в обьект содержащий масив.
  let mainList = {
      youBudget,
      nameStore,
      shopGoods: [],
      emploiers: [],
      open: false,
      discount: true,
      shopItems: []      
  }; 

