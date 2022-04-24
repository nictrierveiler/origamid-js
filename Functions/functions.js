function squareArea(side) {
    return side * side;
}

console.log(squareArea(10));


function pi() {
    return 3.14;
}

var total = 5 * pi();

console.log(pi());


function imc(peso, altura) {
    var imc = peso / (altura * altura); 
    return imc;
}

console.log(imc(80, 1.8));

function favoriteColor(color) {
    if (color === 'blue') {
        return 'I like blue sky';
    }   else if (color ==='green') {
        return 'I like weed'
    }   else {
        return 'I hate colors :(';
    }
}


addEventListener('click', function(){ console.log('Hi')});


function terceiraIdade(idade) {
    console.log(typeof idade);
    if(typeof idade !== 'number') {
        return 'Por favor preencha um número'
    }
    else if (idade >=60) {
        console.log('É idoso')
    }
    else {
        return false;
    }
    console.log(idade)
}

terceiraIdade(60)


function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return 'Faltam visitar ${totalPaises - paisesVisitados} países'
}



