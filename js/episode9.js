//Ecrire un programme qui demande la moyenne d’un élève et affiche sa mention

alert("Bonjour! Bienvenue dans notre programme de calcul de la moyenne d'un élève... Cliquer sur OK pour continuer");

var moyenne = prompt("Entrez votre moyenne");
        if(moyenne >= 10 && moyenne <= 12) {
            alert("Passable");
        }
        else if(moyenne >= 13 && moyenne <= 15) {
            alert("Assez-Bien");
        }
        else if(moyenne >= 16 && moyenne <= 17) {
            alert("Bien");
        }
        else if(moyenne >= 18 && moyenne < 20) {
            alert("Très bien");
        }
        else if(moyenne == 20) {
            alert("Excellent");
        }
        else if(moyenne >= 0 && moyenne <= 6) {
            alert("Null");
        }
        else if(moyenne >= 7  && moyenne < 10) {
            alert("Peut mieux faire");
        }