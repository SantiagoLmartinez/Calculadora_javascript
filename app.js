//alert("test [OK]");

//Funciones

function limpiar() {
    document.getElementById('FormCalculadora').reset();

}

function sumar() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    document.getElementById('Resultado').innerHTML =  num1 + num2;
}

function resta() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    document.getElementById('Resultado').innerHTML =  num1 - num2;
}

function division() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    document.getElementById('Resultado').innerHTML =   num1 / num2;
}

function multiplicacion() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    document.getElementById('Resultado').innerHTML = num1 * num2;
}