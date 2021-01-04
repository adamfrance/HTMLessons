function addition(){
    var nombre1 = document.calc.nbr1.value;
    var nombre2 = document.calc.nbr2.value;
    result = parseInt(nombre1) + parseInt(nombre2);
    document.calc.resultat.value = result;
}
function soustraction(){
    var nombre1 = document.calc.nbr1.value;
    var nombre2 = document.calc.nbr2.value;
    result = parseInt(nombre1) - parseInt(nombre2);
    document.calc.resultat.value = result;
}
function multiplication(){
    var nombre1 = document.calc.nbr1.value;
    var nombre2 = document.calc.nbr2.value;
    result = parseInt(nombre1) * parseInt(nombre2);
    document.calc.resultat.value = result;
}
function division(){
    var nombre1 = document.calc.nbr1.value;
    var nombre2 = document.calc.nbr2.value;
    result = parseInt(nombre1) / parseInt(nombre2);
    document.calc.resultat.value = result;

}