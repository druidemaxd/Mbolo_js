//Ecrire un programme qui demande l'âge de l’utilisateur et affiche : Vous êtes mineur ou Vous êtes majeur.

alert("Bienvenue dans notre programme! cliquez sur ok pour continuer");

let age = parseInt(prompt('Saisissez votre âge'));
    if(age < 18) {
        alert('Vous êtes mineur');
    }
    else{
        alert('Vous êtes majeur');
    }