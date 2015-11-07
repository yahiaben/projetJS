function Notification(pseudo,title, content, receiver){
	this.pseudo = pseudo;
	this.titre=title;
	this.receiver=receiver;
	this.contenu=content;
	this.__defineGetter__("title",function () {return titre;});
	this.__defineGetter__("content",function () {return contenu;});
}

Notification.prototype = {
	envoyerNotification : function(){
		cobra.sendMessage({pseudo: this.pseudo, title: this.titre, content: this.contenu, receiver: this.receiver},room,true);
	}
}

