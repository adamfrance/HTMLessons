function calculs(){
    var t = [];
    somme = 0;
    multiplication = 1;
    
    for (var i = 0; i < 20 ; i++) {
        t.push(Math.floor(Math.random()*100));
     }
    for(var i= 0; i < t.length; i++){
        
        somme = somme + t[i];
    }

    for(var i= 0; i < t.length; i++){
        
        multiplication = multiplication * t[i];
        
   }
   console.log(t);
   console.log('La somme des éléments du tableau est  ' + somme);
   console.log('La multiplication des éléments du tableau est  ' + multiplication);
}


calculs();