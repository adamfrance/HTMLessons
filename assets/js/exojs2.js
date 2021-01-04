function create(){
    var t = [];
    for (var i = 0; i < 20 ; i++) {
        t.push(Math.floor(Math.random()*100))
     }
     console.log(t[0]);
    }

    

    function addition () {
        a=Math.floor(Math.random()*100);
        b=Math.floor(Math.random()*100);
        c = a + b;
        console.log('a vaut  ' + a);
        console.log('b vaut  ' + b);
        console.log('a plus b vaut  ' + c);
    }
    function soustraction () {
        a=Math.floor(Math.random()*100);
        b=Math.floor(Math.random()*100);
        c = a - b;
        console.log('a vaut  ' + a);
        console.log('b vaut  ' + b);
        console.log('a moins vaut  ' + c);
    }

    function multiplication () {
        a=Math.floor(Math.random()*100);
        b=Math.floor(Math.random()*100);
         c = a * b;
        console.log('a vaut  ' + a);
        console.log('b vaut  ' + b);
        console.log('a multiplié par b vaut  ' + c);
    }
    

function conversion() {
    a = parseInt(input("Entrez un nombre de secondes"));

}

function age () {
    a = parseInt(input("Entrez votre âge "));
    b = a * 12 *30;
    console.log(b);
}

create();
addition();
soustraction();
multiplication();
conversion();
age();


