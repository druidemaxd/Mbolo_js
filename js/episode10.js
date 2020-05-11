/* Ecrire un programme qui demande le montant d’une facture et
 affiche le total à payer après avoir appliqué une remise de 10% si le montant de la facture dépasse 40.000 F.*/

 alert("Bienvenue dans notre programme de calcul d'une facture à payer! cliquez sur ok pour continuer");

 let montant = parseInt(prompt('Entrez le montant de votre facture'));
 let remise = (montant*10)/100; // calcul de la remise

        if(montant > 40000){
            alert("Votre montant à payer est de " + remise);
        }
        else{
            alert("Désolé! vous n'avez pas de remise");
        }
