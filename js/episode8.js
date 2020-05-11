/*Ecrire un programme qui demande le nom 
de l’utilisateur et son sexe et affiche Bonjour monsieur <nom> ou Bonjour madame <nom>*/

alert("Bienvenue dans notre programme! cliquez sur ok pour continuer");

let nom = prompt("Entrez votre nom");
let sexe = prompt("Renseignez votre sexe (homme ou femme)");

        if(sexe == 'homme') {
            alert('Bonjour Monsieur ' + nom);
        }
        else{
            alert('Bonjour Madame ' + nom);
        }