function afficherNotification(title,contenu){

    var divNotifications = document.getElementById('notifications');
    var divNotification = document.createElement("div");
    var divLeft = document.createElement("div");
    var divRight = document.createElement("div");
    var divIcon = document.createElement("div");
    var titre = document.createTextNode(title);
    var contenu = document.createTextNode(contenu);
    var p = document.createElement("p");
    var h2 = document.createElement("h2");
    var icone = document.createElement("img");
    icone.src ="img/icone.png";
    icone.id = "imgIcone";
    p.appendChild(contenu);
    h2.appendChild(titre);
    divNotification.className = "notification add";
    divLeft.className = "left";
    divRight.className = "right";
    divIcon.className = "icon";
    divIcon.appendChild(icone);
    divLeft.appendChild(divIcon);
    divRight.appendChild(h2);
    divRight.appendChild(p);
    divNotification.appendChild(divLeft);
    divNotification.appendChild(divRight);
    divNotifications.appendChild(divNotification);

}