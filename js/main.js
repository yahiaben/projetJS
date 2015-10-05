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
	console.log(pseudo);
	connexionUtilisateur(pseudo);
	e.preventDefault();
}, true);


function connexionUtilisateur(pseudo) {
	formConnexion.remove();
	var divAccueil = document.getElementById('divAccueil');
	divAccueil.style.display = "block";
	var scriptCobra = document.createElement("script");
	scriptCobra.src = "js/cobraNotif.js";
	scriptCobra.type = "text/javascript";
	var body = document.getElementsByTagName("body")[0]
	body.appendChild(scriptCobra);
	utilisateur.connect(pseudo);
}