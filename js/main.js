
var utilisateur = new Utilisateur();
var myForm = document.getElementById('sendForm');
myForm.addEventListener('submit', function(e){
	
	var titre = document.getElementById('titreNotif').value;
	var contenu = document.getElementById('textNotif').value;
	var pseudo = utilisateur.pseudo;
	var n = new Notification(pseudo,titre,contenu);
	n.envoyerNotification();
	e.preventDefault();
}, true);


var formConnexion = document.getElementById('formConnexion');
formConnexion.addEventListener('submit', function(e){
	var pseudo = document.getElementById('pseudoC').value;
	var mdp = document.getElementById('mdpC').value;
	var connect = new Connection(pseudo, mdp);
	// On valide le mdp avec le pseudo si il existe
	if(connect.valider()){
		connexionUtilisateur(pseudo);
	}
	e.preventDefault();
}, true);


function connexionUtilisateur(pseudo) {
	formConnexion.remove();
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