//Um objeto é um conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
    nome: 'Nícolas',
    idade: 26,
}

console.log(pessoa);

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    }, 
    perimetro: function(lado) {
        return lado * 4;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));


console.log(math.random);

//Dot notation get - acesse propriedades de um objeto ultilizando ponto .

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
var bg = menu.backgroundColor;


//Palavra-chave this -- this irá fazer uma referencia ao próprio objeto.
// Protótipo e Herança -- O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var pessoa = {
    nome: Nicolas,
    idade:26,
    motivo: 'Talvez essa variavel seja meio q inutil'
};

console.log(motivo);