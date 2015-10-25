var cobra = new Cobra();
        var room = "notifications6-yahia";
        var roomPseudo = 'BDDPseudo4'
        var socketId;
        var pseudosEnregistre;
        var pseudos = new Array("rr", "rt", "rg", "rf", "ri", "rp", "rh", "ra", "rk");
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
                     var pseudo = json.message.pseudo
                     var title = json.message.title;
                     var contenu = json.message.content;
                    
                     if(roomName == roomPseudo){
                       pseudos.push(pseudo);
                     }
                    
                     if(pseudo == utilisateur.pseudo && cobra.roomName == room){
                      console.log("je rentre ici  et voici le titre " + title);
                      afficherNotification(pseudo, title,contenu);
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
             console.log("mon code");
             console.log("pseudo : "+message.message.pseudo);
             console.log(message.message.title);
             console.log(message.message.content);
             if(message.message.title != null)
              afficherNotification(message.message.pseudo,message.message.title,message.message.content)
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

