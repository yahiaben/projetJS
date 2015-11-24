var cobra = new Cobra();
var room = "BDDMessageJS";
var roomPseudo = 'BDDPseudo2JS'
var socketId;
var pseudosEnregistre;
var pseudos = new Array();
var apiUrl = 'http://cobra-framework.com:3000/api/events/' + roomPseudo;
cobra.connect('http://cobra-framework.com:8080');
cobra.connectionCallback = function () {
  cobra.joinRoom(roomPseudo);
}

cobra.joinRoomCallback = function (roomName) {
  console.log("je rentre dans le join room callback" + roomName);
// appel à l'API pour récupérer tous les messages de la room roomName
$.ajax({
  type: 'GET',
  url: apiUrl,
  success: function () {
    console.log("success");
  },

  error: function () {
    console.log("error when retrieve events");
  },

  complete: function (result, status) {
    console.log("complete");
    console.log(result.responseJSON.Events.length);
    if(roomName == roomPseudo)
      pseudosEnregistre = result;
    for (var i = 0; i < result.responseJSON.Events.length; i++) {
      var content = result.responseJSON.Events[i].content;
      // recuperer les infos contenues dans les messages
      console.log(content);
      var json = JSON.parse(content);
      var pseudo = json.message.pseudo;
      var receiver = json.message.receiver;
      var title = json.message.title;
      var contenu = json.message.content;
      var group = json.message.group;

      if(roomName == roomPseudo){
        pseudos.push(pseudo);
      }

      if(roomName != roomPseudo){
        if(cobra.roomName == room){
          if(pseudo == utilisateur.pseudo){
            afficherNotification(receiver, title,contenu,true, group);
          }else{
            console.log("je suis ici");
            if(receiver=="tous"){
              afficherNotification(pseudo, title,contenu,false, group);
            }else{
              var forMe = receiver.indexOf(utilisateur.pseudo);
              if(forMe != -1)
                afficherNotification(pseudo, title, contenu, false, group);
            }
          }
        }
      }
    }
}
});
}

cobra.messageReceivedCallback = function (message) {
// Lors de l'arrivée dans une room donne la liste des utilisateurs contenus dans la room
if(message.type == "infos"){
  for(var i = 0; i < message.clients.length; i++)
  {
// Contient l'id du client
var client = message.clients[i];

}
// Mon id attribué par la room
socketId = message.socketId;
}
else if (message.message) {
// Message reçu, je le traite
console.log("voila le msg : " + message.message);
var pseudo = message.message.pseudo;
var receiver = message.message.receiver;
var titre = message.message.title;
var contenu = message.message.content;
var group = message.message.group;

if(message.message.title != null){
   if(cobra.roomName == room){
        if(pseudo == utilisateur.pseudo){
          afficherNotification(receiver, titre,contenu,true, group);
        }else{
          if(receiver=="tous"){
            afficherNotification(pseudo, titre,contenu,false, group);
          }else{

            var forMe = receiver.indexOf(utilisateur.pseudo);
            if(forMe != -1){
              afficherNotification(pseudo, titre, contenu, false, group);
            }
          }
        }
      }
}
  
//$('body').notif({title: message.message.title, content:message.message.content, icon: '&#128165'});

}
}

cobra.clientJoinedRoomCallback = function(data){
// Un autre client a rejoint la room
/*console.log(data.id + "a rejoint la page");*/

}

cobra.clientLeftRoomCallback = function(data){
// Un client a quitté la room
//console.log(data.id + "a quitté la page");
}

