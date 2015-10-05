function Utilisateur(){
	this.pseudo=null;
}

Utilisateur.prototype.connect = function(pseudo){
	var self = this;
	this.pseudo = pseudo; 
}

