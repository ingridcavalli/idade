// Função que captura o valor da idade, acrescenta 50 e devolve para a página
function newIdade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let idadeFutura = parseInt(idade) + 50; 

    return document.getElementById('idade_futura').value = idadeFutura;  
}

function newIdade2() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let idadeFutura1 = parseInt(idade) + 20; 

    return document.getElementById('idade_futura1').value = idadeFutura1;  
}
// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaNovo() {
    let url = 'images/';

    let img = new Image(250,250);
    img.src = url;    
    
    return document.getElementById('novo').appendChild(img);    
}

function carregaMeiaIdade() {
    let url = 'images/';

    let img = new Image(250,250);
    img.src = url;    
    
    return document.getElementById('meio').appendChild(img);    
}
// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaIdoso() {
    let url = 'images/';

    let img = new Image(250,250);
    img.src = url;    

    return document.getElementById('idoso').appendChild(img);
}

 