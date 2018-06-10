var primes = [];

function getPrimes (num1, num2){ 

  while(isNaN(num1, num2) || num1 < 2 || num2 < 1){
    alert("Некорректные занчения");
  }

  for (let i = num1; i <= num2; i++){    
    primes.push(i);    
   }

return primes;
 }

getPrimes(2, 100);

primes
.forEach(function(item, i, arr) {
  console.log(item + " Делитель этого числа 1 и " + item);
});