class Option{
	constructor(height, width, bg){
		this.height = height;
		this.width = width;
		this.bg = bg;		
	}
	createNewDiv(text){
		let div = document.createElement('div');
		div.textContent = text;

		div.style.cssText = `height:${this.height};
		                     width:${this.width};
		                     background-color:${this.bg}`;

		document.body.appendChild(div); 
	}
}

let obj = new Option("200px", "300px", "red");
obj.createNewDiv("asd")