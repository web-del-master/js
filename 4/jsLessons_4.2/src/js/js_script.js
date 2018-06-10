
console.log(getFriendlyNumbers(1, 300));

function getFriendlyNumbers(start, end) {
  let ass = [];  
  while(start > end || isNaN(start, end) || typeof(start, end) != "number" || start % 1 != 0 || end % 1 != 0 || start < 0 || end < 0){
    return false;
  }      
     for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      if (isFriendly(i, j) && i !== j && i < j) {
        ass.push([i, j]);
      } 
    }
  } 
  return ass;  
} 


//Функция парпаметрами принимает два числа и возвращает true если они дружетвенные 
function isFriendly (num1, num2){
   var summ1 = getDivisorsSumm(num1);
   var summ2 = getDivisorsSumm(num2);

   if (summ1 == num2 && summ2 == num1) {
   	return true;
   } else {  
     return false;
   }
}

// Функция 
function getDivisorsSumm (num){
	return getSummDivisors(getDivisors(num));
}

// Функция принимает чило и записывает все его делители в массив.
function getDivisors (num) {
	let arr = [];

	for(let i =1; i < num; i++){
		if(num % i == 0){
			arr.push(i)
		}
	}
	return arr;
}

// Функция сумирует все элементы массива
function getSummDivisors (arr){
	let sum = 0;
	for (let i = 0; i < arr.length; i++){
		 sum += arr[i];
	}
	return sum;
}

