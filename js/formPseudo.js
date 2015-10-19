function afficherFormPseudo(){
	var formLogin = document.createElement("form");
	var divLogin = document.createElement("div");
	var divInput = document.createElement("div")

	//l'input pseudo
	var label = document.createElement("label");
	var input = document.createElement("input");
	var labelValue = document.createTextNode("Pseudo");

	//l'input mot de passe
	var labelMdp = document.createElement("label");
	var inputMdp = document.createElement("input");
	var mdpValue = document.createTextNode("Mot de passe");

	//Espacement entre les deux inout
	var br = document.createElement("br");
	var br2 = document.createElement("br");

	var inputSubmit = document.createElement("input");

	input.id = "pseudoC";
	inputMdp.id = "mdpC";
	inputMdp.type = "password";
	divLogin.className = "clearfix";
	divInput.className = "input";
	formLogin.className = "form-stacked";
	formLogin.id = "formConnexion";
	inputSubmit.className = "btn primary";
	inputSubmit.type = "submit";
	inputSubmit.value = "Envoyer";
	label.appendChild(labelValue);
	labelMdp.appendChild(mdpValue);

	divInput.appendChild(input);
	divInput.appendChild(br);
	divInput.appendChild(br2);
	divInput.appendChild(labelMdp);
	divInput.appendChild(inputMdp);
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
