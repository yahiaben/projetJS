window.onload = function(){
	
	var form = document.getElementById("recherchePseudo");
	var input = form.search;
	
	var list = document.createElement("ul");
	list.className = "suggestions";
	list.id = "listPseudo"
	list.style.display = "none";

	form.appendChild(list);

	input.onkeyup = function(){
		var txt = this.value;
		if(!txt){
			list.style.display = "none";
		    return;
		}
		
		var suggestions = 0;
		var frag = document.createDocumentFragment();
		for(var i = 0, c = pseudos.length; i < c; i++){
			if(new RegExp("^"+txt,"i").test(pseudos[i])){
				var word = document.createElement("li");
				if(i%2 == 0){
					word.style.backgroundColor = "silver";
				}
				frag.appendChild(word);
				word.innerHTML = pseudos[i].replace(new RegExp("^("+txt+")","i"),"<strong>$1</strong>");
				word.mot = pseudos[i];
				word.onmousedown = function(){					
					input.focus();
					input.value = this.mot;
					list.style.display = "none";
					return false;
				};				
				suggestions++;
			}
		}

		if(suggestions){
			list.innerHTML = "";
			list.appendChild(frag);
			list.style.display = "block";
		}
		else {
			list.style.display = "none";			
		}
	};

	input.onblur = function(){
		list.style.display = "none";
        if(this.value=="")
            this.value = "Rechercher un amis";
	};
};