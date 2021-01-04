var b = '4';

document.writeln('12');
document.write("<br/>");
document.writeln('-----------------------------');
document.write("<br/>");
document.writeln('Il fait super beau today' );
document.write("<br/>");
document.writeln('-----------------------------');
document.write("<br/>");
document.writeln('La variable b vaut  ' +  b);
document.write("<br/>");
document.write("<br/>");

function temperature () {
        a = 12;
        seuil = 15;
        if (a<seuil) {
            document.writeln('Il fait super froid today' );
        } else if (a>seuil) {
            document.writeln('Il fait super beau today' );
        } else {
            document.writeln('Je ne pourrais pas dire quel temps il fait');
        }

}

function bouclewhile (){
    while (i<100) {
        document.writeln(text += "The number is " + i);
        document.write("<br/>");
        document.writeln('-----------------------------');
        i++;
    }

}

function bouclefor() {
    for (i=0; i<100; i++) {
        document.writeln(text += "The number is " + i);
        document.write("<br/>");
        document.writeln('-----------------------------');
    }

}

temperature();
bouclewhile();
bouclefor();