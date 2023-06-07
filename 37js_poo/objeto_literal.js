//BIND \/
const user = {
    nome: "Gabriel",
    email: "gabi@gmail.com",
    nascimento: "05/01/2002",
    role: "admin",
    ativo: true,
    exibirInfos: function (){
        console.log(this.nome, this.email);
    }
}
// const exibir = user.exibirInfos;
const exibir = function (){ //Mesma coisa q a linha de cima
    console.log(this.nome, this.email);
}


const exibirNome = exibir.bind(user); //Ligou a função exibir e a prendeu a um contexto, nesse caso o objeto user
exibirNome();
exibir(); //Imprime undefined pois ficou fora de contexto


//CALL \/
function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
}
const userCall = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
        fn.call(userCall, this.nome, this.email)
    }
}
userCall.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com

//APPLY \/
const userApply = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
        fn.apply(user, [this.nome, this.email])
    }
}
userApply.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com