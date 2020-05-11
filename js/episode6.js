//Ecrire un programme qui demande à l’utilisateur trois nombres et affiche la moyenne de ces nombres en alerte.

alert("Bienvenue dans notre programme de calcul de la moyenne de trois nombres!!!");

let nbr1 = parseInt(prompt("Entrez le premier nombre"));
let nbr2 = parseInt(prompt("Entrez le second nombre"));
let nbr3 = parseInt(prompt("Entrez le troisième nombre"))

        //calcul de la moyeen

        let moy = nbr1+nbr2+nbr3/3;
        alert('La moyenne de ces trois nombre est ' + moy);