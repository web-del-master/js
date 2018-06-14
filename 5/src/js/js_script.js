var primes = [];
function getPrimes (num1, num2){

 if(isNaN(num1, num2) || num1 < 1 || num2 <= num1){
    alert("Некорректные занчения");
  }

   for (let i = num1; i <= num2; i++){
    if(prost(i)){
    	 primes.push(i); 
    }    
       
   }
 return primes;
 }

getPrimes (1, 100)



function prost(num){
	if (num === 1){
		return false;
	}
	for(let j = 2; j < num ; j++){
		if(num % j === 0){
			return false
		} 
	}
return true;
}

primes.forEach(function(item, i, arr) {
   console.log(item + " Делитель этого числа 1 и " + item);
});








