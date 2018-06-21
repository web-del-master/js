class Option{
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;		
	}
	createNewDiv(text){
		let div = document.createElement('div');
		div.textContent = text;

		div.style.cssText = `height:${this.height};
		                     width:${this.width};
		                     background-color:${this.bg};
		                     font-size:${this.fontSize};
		                     text-align:${this.textAlign};`

		document.body.appendChild(div); 
	}
}

let obj = new Option("200px", "300px", "red", "24pt", "center");
obj.createNewDiv("asd");