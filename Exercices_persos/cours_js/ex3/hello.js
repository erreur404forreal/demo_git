function nb_aleatoire(min, max)
{
     var nb = min + (max-min+1)*Math.random();
     return Math.floor(nb);
}

function PoM_manche(min, max)
{
     var nb = nb_aleatoire(min, max);        // nb a deviner
     var cpt = 0;    // nb de coups pour le trouver
     var saisie;     // nb tape par le joueur
     var msg = 'Le nombre a deviner est compris entre ' + min + ' et ' + max + '.';

     do
     {
          saisie = prompt(msg);

          // si "Annuler"
          if(saisie == null)
               return 0;

          cpt++;
          if(saisie > nb)
               msg = "C'est moins";
          else
               msg = "C'est plus";
     }
     while(saisie != nb);

     return cpt;
}

function PoM_partie(min, max)
{
     var cpt = 0;    // nb de manches jouees
     var best_score = 0;     // meilleur score
     var score;      // score de la partie en cours
     var continuer;

     do
     {
          score = PoM_manche(min, max);   // joue la manche
          if(score)
          {
               cpt++;
               if(score < best_score || best_score == 0)
                    best_score = score;
               continuer = confirm("Bravo, tu as gagne en " + score + " coups.\nVeux-tu rejouer ?");
          }
          else
               continuer = false;
     }
     while(continuer);

     alert("Tu as joue " + cpt + " manche(s).\nTon meilleur score est de " + best_score + " coups.");
     return best_score;
}

function verifPseudo(champ) //vérification du champ pseudo
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifMail(champ) //vérification du format de l'adresse mail
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifAge(champ) //vérification du champ âge du formulaire
{
   var age = parseInt(champ.value);
   if(isNaN(age) || age < 5 || age > 111)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(f)
{
   var pseudoOk = verifPseudo(f.pseudo);
   var mailOk = verifMail(f.email);
   var ageOk = verifAge(f.age);

   if(pseudoOk && mailOk && ageOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}

function surligne(champ, erreur) //champ du formulaire surligné en cas d'erreur
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function dateFr() //fonction affichant la date
{
     // les noms de jours / mois
     var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
     var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
     // on recupere la date
     var date = new Date();
     // on construit le message
     var message = jours[date.getDay()] + " ";   // nom du jour
     message += date.getDate() + " ";   // numero du jour
     message += mois[date.getMonth()] + " ";   // mois
     message += date.getFullYear();
     return message;
}

function heure() //fonction affichant l'heure
{
     var date = new Date();
     var heure = date.getHours();
     var minutes = date.getMinutes();
     if(minutes < 10)
          minutes = "0" + minutes;
     return heure + "h" + minutes;
}

function arrondir(x, n)//Arrondir x à n chiffres après la virgule
{
  var decalage = Math.pow(10, n);
  x *= decalage;
  x = Math.round(x);
  x /= decalage;
  return x;

}

function randomInt(mini, maxi) //Renvoie un nombre aléatoire entre mini et maxi
{
        var nb = mini + (maxi+1-mini)*Math.random();
        return Math.floor(nb);
}

function ageValide(valeur) //fonction pour verifier l'age dans un formulaire
{
     var age = parseInt(valeur);
     var estValide = !isNaN(age) && (age >= 5) && (age <= 100);
     return estValide;
}

var regexTel = /^(0[1-68])(?:[ _.-]?(\d{2})){4}$/; //Regex pour tester numéro français
var regexmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/; // Regex adresse mail

function changerImage(img, src, maxWidth, maxHeight) //Changer une image avec l'objet image
{
   var image = new Image();

   image.onerror = function()
   {
      alert("Erreur lors du chargement de l'image");
   }

   image.onabort = function()
   {
      alert("Chargement interrompu");
   }

   // une fois l'image chargée :
   image.onload = function()
   {
      // si l'image est désignée par son id
      if(typeof img == "string")
         img = document.getElementById(img);

      // si l'image doit être redimensionnée
      var reduction = 1;
      if(maxWidth && maxHeight)
         if(image.width > maxWidth || image.height > maxHeight)
            reduction = Math.max(image.width/maxWidth, image.height/maxHeight);

      // on affiche l'image
      img.src = image.src;
      img.width = Math.round(image.width / reduction);
      img.height = Math.round(image.height / reduction);
   }

   image.src = src;
}
//quelques variables
var x = 0;
var y = 0;

function deplacer(dx, dy) //déplacer un élément de la page
{
   var bloc = document.getElementById("test");
   // on enregistre la nouvelle position
   x += dx;
   y += dy;
   // on place le bloc
   bloc.style.left = x + "px";
   bloc.style.top = y + "px";
}
function toggleVisibility(elmt) //changer la visibilité d'un élément
{
   if(typeof elmt == "string")
      elmt = document.getElementById(elmt);
   if(elmt.style.visibility == "hidden")
      elmt.style.visibility = "visible";
   else
      elmt.style.visibility = "hidden";
}
function toggleDisplay(elmt)//modifier valeur de display
{
   if(typeof elmt == "string")
      elmt = document.getElementById(elmt);
   if(elmt.style.display == "none")
      elmt.style.display = "";
   else
      elmt.style.display = "none";
}
function getClasses(elmt)//Récuperer les classes d'un élément
{
   if(typeof elmt == "string")
      elmt = document.getElementById(elmt);
   var classes = elmt.className.split(/ +/g);
   if(classes.length == 1 && classes[0] == "")
      classes.pop();
   return classes;
}
function hasClassName(elmt, className)//Vérifier qu'un élement soit d'une certaine classe
{
   if(typeof elmt == "string")
      elmt = document.getElementById(elmt);
   var regex = new RegExp("\\b" + className + "\\b");
   return regex.test(elmt.className);
}
document.getElementsByClassName = function(className, elmt)//Recupérer tous les élément d'une classe donnée
{
   var selection = new Array();
   var regex = new RegExp("\\b" + className + "\\b");

   // le second argument, facultatif
   if(!elmt)
      elmt = document;
   else if(typeof elmt == "string")
      elmt = document.getElementById(elmt);

   // on sélectionne les éléments ayant la bonne classe
   var elmts = elmt.getElementsByTagName("*");
   for(var i=0; i<elmts.length; i++)
      if(regex.test(elmts[i].className))
         selection.push(elmts[i]);

   return selection;
}

document.getElementById("id").style.uneProprieteCss = "Nouvelle valeur";//modifier une propriété Css
