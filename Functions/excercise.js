// Crrie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var pessoa = {
    nome: 'Nicolas',
    sobrenome: 'Trierveiler',
    idade: '26',
    altura: '172'
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
    return '${this.nome} ${this.sobrenome}'
};

// Modifique o valor da propriedade preço para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    nome: Tobi,
    raca: labrador,
    idade: 10,
    cor: Preto,
    latir(pessoa) {
        if(pessoa === homem) {
            return 'Au au au au';
        }
        else {
            return 'Nada';
        } 
    }
};