export default function tub(){
		let tab = document.getElementsByClassName('info-header-tab'),
	    tab_content = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];


	function hideTabContents(a){
		for(let i = a; i < tab_content.length; i++){
			tab_content[i].classList.remove('show');
			tab_content[i].classList.add('hide');
		}
     };

	hideTabContents(1);
	
	function showTabContent (b){
		if(tab_content[b].classList.contains('hide')){
			hideTabContents(0);
			tab_content[b].classList.remove('hide');
			tab_content[b].classList.add('show');
		}
	};

	info.addEventListener('click', function(event){
		let target = event.target;
		if(target.className == 'info-header-tab'){
             for(let i = 0 ; i < tab.length; i++){
             	if(target == tab[i]){
             		showTabContent(i);
             		break;
             	} 
             }
		};
	});
}
