//Ecrire un programme permettant de permuter les valeurs de deux variables. Le résultat est affiché en console.

let num1 = prompt("Saisissez votre premier nombre");
let num2 = prompt("Saisissez le deuxième nombre");
let num3; // permet de stocker la valeur 1 qui facilitera l'échange.

        num3 = num1;
        num1 = num2;
        num2 = num1;

        console.log("num1 = "  +num1+"  et le num2 = "+num3);