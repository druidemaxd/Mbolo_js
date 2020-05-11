/*Ecrire un programme qui demande sans cesse à l'utilisateur de renseigner la bonne réponse
 d’une opération (ex: Combien font 5+1 ?) jusqu’à ce qu’il renseigne la bonne réponse.*/

 let calcul = prompt("combien font 3*5 ?");
 let reponse = 3*5;
        do{
            calcul = prompt("Faux! essayez encore");
        }
        while(parseInt(calcul)!=reponse);
