/* Ecrire un programme qui demande un nombre à l’utilisateur 
et affiche la table de multiplication de ce nombre jusqu’à 10.*/

alert("Bonjour! Bienvenue dans notre programme de multiplication Cliquer sur OK pour continuer");

let number = parseInt(prompt('entrez un nombre'));
let i = 1;

    while(i <=10) {
        compteur = number*i;
        alert(number + " * " + i + " = " + compteur); i++
    }

