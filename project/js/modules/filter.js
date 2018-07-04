function filter (){
    
    let getAll = document.querySelectorAll('.portfolio-block'),
        btnAll = document.querySelector('.all'),
        lovers = document.querySelector('.lovers'),
        chef = document.querySelector('.chef'),
        girl = document.querySelector('.girl'),
        guy = document.querySelector('.guy'),
        grandmother = document.querySelector('.grandmother'),
        granddad = document.querySelector('.granddad'),
        portfolioNo = document.querySelector('.portfolio-no'),
        serch = document.querySelectorAll('.serch');

        function serchAll(){
        	for (let i = 0; i<serch.length; i++ ){
        		if(serch[i].classList.contains("active")){
        			serch[i].classList.remove("active");
        		}
        	}
        }

        function filters (n, b){
 	    serchAll();
      	n.classList.add('active');
      	portfolioNo.style.display = 'none'
      	for(let i = 0; i < getAll.length; i++){
        		getAll[i].style.display = "none";
        	}
      	for(let i = 0; i < getAll.length; i++){
        		if(getAll[i].classList.contains(b)){
        			getAll[i].style.display = "block"
        		}
        	}
         }


// портрет для дедушки
        granddad.addEventListener('click', ()=>{
        	for(let i = 0; i < getAll.length; i++){
        		getAll[i].style.display = "none";
        	}
        	 serchAll();       	
        	granddad.classList.add('active')
        	portfolioNo.style.display = 'block'
        });
// портрет для бабушки
        grandmother.addEventListener('click', ()=>{
        	for(let i = 0; i < getAll.length; i++){
        		getAll[i].style.display = "none";
        	}
        	serchAll();        	
        	grandmother.classList.add('active')
        	portfolioNo.style.display = 'block'
        });
// показываем все элементы на странице
       btnAll.addEventListener('click', ()=>{
          filters (btnAll, "portfolio-block");
       });

      lovers.addEventListener('click',()=>{
      	filters (lovers, "lovers");
      }) 

      chef.addEventListener('click',()=>{
      	filters (chef, "chef");
      })
      girl.addEventListener('click',()=>{
      	filters (girl, "girl");
      }) 
      guy.addEventListener('click',()=>{
      	filters (guy, "guy");
      })





} module.exports = filter;