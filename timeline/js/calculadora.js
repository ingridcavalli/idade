// Calculadora em javascript
function Soma() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);

    let soma = numero1 + numero2
    return document.getElementById('result').value = soma;

}

function Subtração() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);

    let subtrai = numero1 - numero2
    return document.getElementById('result').value = subtrai ;

}

function Multiplicação() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);

    let multiplica = numero1  * numero2
    return document.getElementById('result').value = multiplica;
}

function Divisão() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);

    let dividi= numero1 / numero2
    return document.getElementById('result').value = dividi;

}