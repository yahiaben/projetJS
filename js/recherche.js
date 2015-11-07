
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
		var cpt=0;
		for(var i = 0, c = pseudos.length; i < c; i++){
			if(new RegExp("^"+txt,"i").test(pseudos[i])){
				cpt++;
				var word = document.createElement("li");
				console.log("pseudo : "+ pseudos[i]+"  modulo : "+ i +" % 2 = "+ (i%2));
				if(cpt%2 == 0){
					word.style.backgroundColor = "silver";
				}else{
					word.style.backgroundColor = "white";
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

	input.onkeypress = function(){
		if(event.keyCode==13){

			event.preventDefault();
			var res = window.confirm("Voulez-vous envoyer le message à "+input.value+" ?");
			if(res){
				var btnReceveur = document.createElement("input" );
        		btnReceveur.type = "button";
        		btnReceveur.className="btnReceveur";
        		btnReceveur.id=input.value;
        		btnReceveur.value=input.value;
        		btnReceveur.addEventListener('click', function(e){
					btnReceveur.remove(this);
				});

        		var listReceveurs = document.getElementById("receveurs");
        		listReceveurs.appendChild(btnReceveur);
			}
			this.value = "Rechercher un amis";
		}
	}
};










