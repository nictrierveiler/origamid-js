// Crie uma função para verificar se um valor é Truthy - Truthy é um valor que se traduz em verdadeiro quando avaliado em contexto Booleano (true or false)
function isTruthy(valor) {
    return !!valor;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
return lado * 4;
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
return '${nome} ${sobrenome}';
}

// Crie uma função que verifica se um número é par
function isEven(number){
    var modulo = numero % 2;
    if(modulo === 0) {
        return true;
    }
        else {
            return false
        }
    }

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function dataDisplay(data) {
    return typeof data;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function() {
    console.log('Nicolas Trierveiler')
});
