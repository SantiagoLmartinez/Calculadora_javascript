//alert("test [OK]");

//Funciones
document.getElementById('btn_Sumar').addEventListener("click", function (e){
    e.preventDefault();
    sumar();
});

document.getElementById('btn_Resta').addEventListener("click", function (e){
    e.preventDefault();
    resta();
});
document.getElementById('btn_Division').addEventListener("click", function (e){
    e.preventDefault();
    division();
});
document.getElementById('btn_Multiplicacion').addEventListener("click", function (e){
    e.preventDefault();
    multiplicacion();
});
document.getElementById('btn_Limpiar').addEventListener("click", function (e){
    e.preventDefault();
    document.getElementById('Resultado').innerHTML =  "";

    limpiar();
});


function limpiar() {
    document.getElementById('FormCalculadora').reset();

}

function sumar() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
console.log("test")
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