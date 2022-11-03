// alert("funciona!");

const preco = document.querySelector('.preco');

const media = document.querySelector('.kmLitro');

const distancia = document.querySelector('.distancia');

const botaoCalcular = document.querySelector('.botao');

let resultado = document.querySelector('.resultado');

function calculaGastos() {
    let precoCombustivel = preco.value;
    console.log(precoCombustivel);
    let kmPorLitro = media.value;
    console.log(kmPorLitro);
    let distanciaPercorrida = distancia.value;
    console.log(distanciaPercorrida);
    let calcula = (distanciaPercorrida / kmPorLitro) * precoCombustivel;
    console.log(calcula);
    resultado.value = calcula.toFixed(2);
    limpaCampos();
};
function limpaCampos(){
    preco.value= "";
    media.value="";
    distancia.value="";
}

botaoCalcular.addEventListener('click', calculaGastos);


  

