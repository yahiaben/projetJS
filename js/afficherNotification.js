function afficherNotification(pseudo,title,contenu){
   

    //La div contenant toutes les notifications
    var divNotifications = document.getElementById('scrollNotif');

    //On affiche le div scrollNotif qui contient les notifications
    divNotifications.style.display = "block";

    //Je crée une div pour la nouvelle notification
    var divNotification = document.createElement("div");
    divNotification.className = "notification add";

    //je crée la div gauche (contient div icone)
    var divLeft = document.createElement("div");
    divLeft.className = "left";

    //je crée le div icone
    var divIcon = document.createElement("div");
    divIcon.className = "icon";

    //je crée une div contenant le texte
    var divRight = document.createElement("div");
    divRight.className = "right";
    
    //je crée le pseudo, titre et contenu
    var pseudo = document.createTextNode(" De : "+pseudo);
    var titre = document.createTextNode(title);
    var contenu = document.createTextNode(contenu);

    //je crée le paragraphe pour le pseudo, le titre, le contenu
    var pPseudo = document.createElement("p");
    pPseudo.id ="pidPseudo";
    var h2 = document.createElement("h2");
    var pContenu = document.createElement("p");
    
    //je crée l'image
    var icone = document.createElement("img");
    icone.src ="img/icone.png";
    icone.id = "imgIcone";
    //j'ajoute le pseudo, le titre et le contenu
    pContenu.appendChild(contenu);
    pPseudo.appendChild(pseudo);
    h2.appendChild(titre);

    //j'ajoute l'icone
    divIcon.appendChild(icone);

    //j'ajoute la div icone
    divLeft.appendChild(divIcon);

    //j'ajoute le titre, le contenu et le pseudo
    divRight.appendChild(h2);
    divRight.appendChild(pContenu);
    divRight.appendChild(pPseudo);
    
    

    //j'ajoute la div gauche et la div droite
    divNotification.appendChild(divLeft);
    divNotification.appendChild(divRight);

    //j'ajoute la nouvelle notification à l'ensemble des notifications
    //divNotifications.appendChild(divNotification);
    divNotifications.insertBefore(divNotification,divNotifications.firstChild);

}