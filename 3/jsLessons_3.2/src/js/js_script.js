var str = "урок-3-был слишком легким";

   // Применение .toUpperCase к первому символу
      var upStr = str[0].toUpperCase() + str.slice(1)   
      console.log(upStr);

   // Меняем - на пробелы 
      var newStr = upStr.replace(/-/g, " ");    
      document.write(newStr + "<br>");

   // Вырезаем слово "Легким"
      var shutStr = newStr.replace(/им/g, "о");    
      document.write(shutStr + "<br><br>" );


// Квадратный корень из суммы кубов
var arr = [20, 33, 1, "Человек", 2, 3];

//выводим из масивао только числа 
 var nawMass = arr.filter(function(number) {
    return number > 0;
    });
    //alert( nawMass );
var n = [];

// Возводим в куб и помещаем в новый массив
     for( let i = 0; i < nawMass.length;i++){
          let t = nawMass[i] ** 3;
          n[i] = t;          
        }

// Суммируем все элементы массива 
console.log(n)
var summ = 0;

    for(let i = 0; i < n.length; i++){
       summ += n[i];
        } 
      // document.write('<p>Сумма элементов массива n равна: ' + summ + '</p>' );
      
// вычисляем корень олученной суммы
let sq = Math.sqrt(summ);
console.log(sq);  



function fuExampl (str){   
  if (typeof(str) === "string" ){
  str.trim();
   }else {
        console.log("Данные не верны");
      }
  if(str.length > 50){
    let n = "..."
    let i = str.slice(1,50)
    console.log(i + n);
  } else{

  }
}


fuExampl("qwertyuioplkjhgfdsazxcvbvnm,kjhgfdsaqwertyhgfdsaqwertyhnhgbad");

