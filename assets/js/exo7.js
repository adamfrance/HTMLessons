function creation() {
    var nom;
    var t = [];
    for (i=1; i<10;i++) {
    nom = prompt('Ajouter le nom ' + i + '   :');
    t.push(nom);
    }
    a = Math.floor(Math.random()*10);
    alert('Le gagnant est :' + t[a]);

}

creation();