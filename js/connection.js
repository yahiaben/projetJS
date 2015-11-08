function Connection(pseudo,mdp){
	this.pseudo = pseudo;
	this.mdp=mdp;
	this.__defineGetter__("pseudo",function () {return pseudo;});
	this.__defineGetter__("mdp",function () {return mdp;});
}

Connection.prototype = {
	valider : function(){
		console.log("voila la room cobra " + cobra.roomName);
		for (var i = 0; i < pseudosEnregistre.responseJSON.Events.length; i++) {
                     var content = pseudosEnregistre.responseJSON.Events[i].content;
                     // recuperer les infos contenues dans les messages
                     var json = JSON.parse(content);
                     var pseudo = json.message.pseudo
                     var mdp = json.message.mdp;
                     if(this.pseudo == pseudo && this.mdp == mdp){
						apiUrl = 'http://cobra-framework.com:3000/api/events/' + room;
						var texteBienvenue = document.getElementById("textBienvenue");
						texteBienvenue.innerHTML="Bienvenue à toi : "+this.pseudo.toUpperCase();
						return true;
                     }
                     	
                  }
		alert("pseudo ou mot de passe non valide");
		return false;
	}
}

