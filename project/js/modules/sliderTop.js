function sliderTop (){
	 let elementSlider = document.querySelectorAll(".main-slider-item-img");
      for(let i = 1; i < elementSlider.length; i++){
          elementSlider[i].style.display = "none";
          elementSlider[i].style.margineTop = "-80px";           
        };
  let id = 0;      

 (function animate(){         
    let time = setTimeout(() =>{      
      let pos = -80;
      let opas = 0;
      elementSlider[id].style.display = "none";
      elementSlider[id].style.margineTop = "-80px";            
      id = (id+1)%elementSlider.length;
      myID(id);
                function myID (n){        
                  let newa = setInterval(slidsImg, 25);
                      function slidsImg(){
                      elementSlider[n].style.display = "block";                        
                        if(pos == -64){
                            clearInterval(newa)
                           } else {
                            pos++;
                            opas = (+opas)+ 0.06                 
                            elementSlider[n].style.marginTop = pos + "px";
                            elementSlider[n].style.opacity = opas +"";                                    
                           }                 
                           }    
                       }; animate() }, 6000);
    })();
};

module.exports = sliderTop;