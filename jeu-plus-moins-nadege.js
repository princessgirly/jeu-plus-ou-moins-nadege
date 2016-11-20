/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme


var saisie;
var i = 0;         // nombre de tour de boucle


for (var i = 1; i < 7; i++) {
  while ( saisie !== solution) {
  saisie = Number(prompt("Devinez le nombre compris entre 1 et 100 en 6 tentatives !"));

      if(saisie < solution) {
        prompt("C'est trop petit.")
        console.log(saisie + " est trop petit.");
      } if(saisie > solution) {
        prompt("C'est trop grand.")
        console.log(saisie + " est trop grand.");
      } if(saisie === solution) {
        prompt("C'est gagné.")
        console.log(saisie + " Gagné !");
      }
  break;
  }
}
if((saisie !== solution) && (i >=7) )
prompt("Perdu ! Les 6 coups sont utilisés,la solution était " + solution)
console.log("Perdu ! Les 6 coups sont utilisés,la solution était " + solution);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Autres solutions

/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

var choix = Number(prompt("Entrez un nombre entre 1 et 100 :"));
for (var i=1;i<=6 && choix !== solution;i++) {
	if (choix<solution){
		console.log(choix + " est trop petit.");
	} else {
		console.log(choix + " est trop grand.");
	}
	choix = Number(prompt("Réesseyez :"));
}
if (choix===solution) {
	console.log("Bravo ! La solution était " + solution +".\nVous avez trouvé en " + i + " essai(s).")
} else {
	console.log("Perdu, la solution était " + solution +".")
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Autres solutions 

console.log("Bienvenue dans ce jeu de devinette !");
// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");
// TODO : complétez le programme
var num = 0;
var cont = true;
var i = 1;
do {
    if (i <= 6) {
        num = Number(prompt("Entrez un nombre:"));
        if (num > solution) {
            console.log(num + " est trop grand!");
        }
        else if (num < solution) {
            console.log(num + " est trop petit!");
        }
        else {
            console.log("Bravo, la solution était: " + solution + ".\nVous avez réussi en " + i + " essais.");
            cont = false;
        }
        i++;
    }
    else {
        console.log("Perdu, la solution était " + solution + ".");
        cont = false;
    }
} while (cont);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Autre solution

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

for (var i = 1; (i <= 6); i++) {					// i : étant le nombre d'essai (oui merci on peut le nommée "var essai")
	var valeur = Number(prompt("Entrez un nombre entre 1 et 100 ?"));
		if (valeur < solution) {
			console.log(valeur + " est trop petit");
		}
		else if (valeur > solution) {
			console.log(valeur + " est trop grand");
		}
		else {
			console.log("Bravo ! La solution était " + solution);
			console.log("Vous avez trouvé en " + i + " essai(s)")
			i = 7;
		}
}

if ((i = 6) && (valeur !== solution)) {
	console.log("Perdu... La solution était " + solution);
}
