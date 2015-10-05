function afficherFormPseudo(){
	var formLogin = document.createElement("form");
	var divLogin = document.createElement("div");
	var divInput = document.createElement("div")
	var label = document.createElement("label");
	var input = document.createElement("input");
	var inputSubmit = document.createElement("input");
	var labelValue = document.createTextNode("Pseudo");
	input.id = "pseudoC";
	divLogin.className = "clearfix";
	divInput.className = "input";
	formLogin.className = "form-stacked";
	formLogin.id = "formConnexion";
	inputSubmit.className = "btn primary";
	inputSubmit.type = "submit";
	inputSubmit.value = "Envoyer";
	label.appendChild(labelValue);
	
	divInput.appendChild(input);
	divInput.appendChild(inputSubmit);
	divLogin.appendChild(label);
	divLogin.appendChild(divInput);
	formLogin.appendChild(divLogin);
	var divInsertion = document.getElementById('formPseudo');
	divInsertion.appendChild(formLogin);


	//On cache la page d'accueil
	var divAccueil = document.getElementById('divAccueil');
	divAccueil.style.display = "none";
}

afficherFormPseudo();
