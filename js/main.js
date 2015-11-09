
var utilisateur = new Utilisateur();
var myForm = document.getElementById('sendForm');
myForm.addEventListener('submit', function(e){
	
	var titre = document.getElementById('titreNotif').value;
	var contenu = document.getElementById('textNotif').value;
	var pseudo = utilisateur.pseudo;
	var tabReceveurs = Array();

	var nb = document.getElementsByClassName('btnReceveur').length;
	if(nb==0){
		var n = new Notification(pseudo,titre,contenu, "tous", false);
		n.envoyerNotification();
		e.preventDefault();
	}else{
		for(i=0;i<nb;i++){
			var receiver = document.getElementsByClassName('btnReceveur')[i].id;
			tabReceveurs.push(receiver);
			e.preventDefault();
		}
		var n = new Notification(pseudo,titre,contenu, tabReceveurs,true);
		n.envoyerNotification();
		while(document.getElementsByClassName('btnReceveur').length>0){
			document.getElementsByClassName('btnReceveur')[0].remove(this);
		}
	}
	myForm.reset();
}, true);


var formConnexion = document.getElementById('sendLogin');
formConnexion.addEventListener('submit', function(e){
	var pseudo = document.getElementById('pseudoL').value;
	var mdp = document.getElementById('passL').value;
	var connect = new Connection(pseudo, mdp);
	// On valide le mdp avec le pseudo si il existe
	if(connect.valider()){
		console.log("conect valider");
		connexionUtilisateur(pseudo);
	}
	e.preventDefault();
}, true);


var formCreateAccount = document.getElementById('sendAccount');
formCreateAccount.addEventListener('submit', function(e){
	console.log("je rentre dans sendAccount");

	var pseudoA = document.getElementById('pseudoA').value;
	var mdpA = document.getElementById('passA').value;
	var pseudoExiste = false;
	for (var i = 0; i < pseudosEnregistre.responseJSON.Events.length; i++) {
		var content = pseudosEnregistre.responseJSON.Events[i].content;
		// recuperer les infos contenues dans les messages
		var json = JSON.parse(content);
		var pseudo = json.message.pseudo
		var mdp = json.message.mdp;
		if(pseudoA == pseudo){
			alert("Le pseudo existe déjà !");
			pseudoExiste = true;
			return false;
		}
	}
	
	if(!pseudoExiste){
		cobra.sendMessage({pseudo: pseudoA, mdp: mdpA},roomPseudo,false);
		alert("Féicitation, votre compte à été créé !\n"+"pseudo : "+pseudoA+"\nmot de passe : "+mdpA);
		apiUrl = 'http://cobra-framework.com:3000/api/events/' + room;
		connexionUtilisateur(pseudoA);
	}

	e.preventDefault();
}, true);


var menuConnexion = document.getElementById("menuConnexion");
var divLogin = document.getElementById("divLogin");
var divAccount = document.getElementById("divAccount");
function connexionUtilisateur(pseudo) {

	//Suppression des elements de connexion
	menuConnexion.remove();
	divLogin.remove();
	divAccount.remove();

	
	//je charge les messages de l'utilisateur en question
	cobra.joinRoom(room);
	var divAccueil = document.getElementById('divAccueil');
	divAccueil.style.display = "block";
	utilisateur.connect(pseudo);
}
/*
$("#notification").click(function(event) {
	event.preventDefault();
	$("#notification").slideUp();
});*/


var btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', function(){
	var divL = document.getElementById('divLogin');
	divL.style.visibility="visible";
	var divA = document.getElementById('divAccount');
	divA.style.visibility="hidden";
	btnLogin.className ="active";
	btnAccount.className="";
}, true);


// var btnEnvoyerL = document.getElementById("btnEnvoyerL");
// btnEnvoyerL.addEventListener('click', function(){
// 	var pseudoL = document.getElementById("pseudoL").value;
// 	var passL = document.getElementById("passL").value;
// 	console.log("envoyer ===> "+pseudoL+"  "+passL);
// 	connexionUtilisateur(pseudoL);
// }, true);


var btnAccount = document.getElementById('btnAccount');
btnAccount.addEventListener('click', function(){
	var divA = document.getElementById('divAccount');
	divA.style.visibility="visible";
	var divL = document.getElementById('divLogin');
	divL.style.visibility="hidden";
	btnLogin.className ="";
	btnAccount.className="active";
}, true);

