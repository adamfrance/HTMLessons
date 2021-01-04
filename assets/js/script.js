function maFonction() {
    console.log("Hello World !");
}

maFonction();

function saisirNom(){
    var nom = prompt('Quel est votre nom ? ');
    console.log(nom);
    var conf = confirm('Vous appelez-vous vraiment ' + nom +'?');
    if(conf) {
    alert('Bonjour  ' + nom);
    }
}

saisirNom();

var a ='3';
var b = '4';

document.writeln('Type et valeur des variables');
document.write("<br/>");
document.writeln('-----------------------------');
document.write("<br/>");
document.writeln('a :('+ typeof(a) +') ' + a );
document.write("<br/>");
document.writeln('b :('+ typeof(b) +') ' + b );
document.write("<br/>");
document.writeln('c :('+ typeof(c) +') ' + c );
document.write("<br/>");

document.writeln('');

var a = parseInt(a);
var b = parseInt(b);
var c = a+b;

document.writeln('Type et valeur des variables');
document.write("<br/>");
document.writeln('-----------------------------');
document.write("<br/>");
document.writeln('a :('+ typeof(a) +') ' + a );
document.write("<br/>");
document.writeln('b :('+ typeof(b) +') ' + b );
document.write("<br/>");
document.writeln('c :('+ typeof(c) +') ' + c );