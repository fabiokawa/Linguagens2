minhaFuncao();

function minhaFuncao() {
    console.log('Ola minha funcao');   
}

var funcaoAnonima = function() {
    console.log('Ola anonima');   
}

funcaoAnonima();
log(funcaoAnonima);

log(function() {
    console.log('Ola anonima');   
});



function log(a) {
   a();    
}

log(function() {
    console.log('hi');   
});


