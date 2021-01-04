function afficheTableau(t) { 
    console.log(t); 
} /* Calcule et affiche la moyenne des éléments d'un tableau */
function afficheMoyenne(t) { 
    var total = 0;
    for(var i = 0, len = t.length; i < len; i++) {
        total += t[i];
     }
     moyenne = total / len;
    console.log(moyenne);
} /* Compte et affiche le nombre d'apparitions d'un élément dans un tableau */


function occurrences(x,t) {
    var n =0;
    for(var i = 0, len = t.length; i < len; i++) {
        
        if (t[i] == x) {
            n ++;
        }
        
} 
console.log(n);
}/* Compte et affiche combien ont eu 10 ou plus */


function ontEuLaMoyenne(t) {
    var moyenne = 0;
    for(var i = 0, len = t.length; i < len; i++) {
        if (t[i] > 10) {
            moyenne ++;
        }
    }
    console.log('le nombre délèves ayant eu la moyenne est ' + moyenne);

 } 
function recherche(x,t) { }

var notes = [5, 12, 8, 20, 10];

notes[2] = 9; 

afficheTableau(notes);
afficheMoyenne(notes);
occurrences(12,notes);
ontEuLaMoyenne(notes);
recherche(12,notes);