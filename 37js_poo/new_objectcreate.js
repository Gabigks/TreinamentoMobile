// function User(nome, email) { //Classe começa com letra maiuscula
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfo = function() {
//         return `${this.nome}, ${this.email}`;
//     }
// }

// // const novoUser = new User('Gabriel', 'gabi@gks'); //User é o protótipo do novoUser aqui
// // console.log(novoUser.exibirInfo());

// function Admin(role){
//     User.call(this, "Gabriel", "gabi@gmail.com");
//     this.role = role || 'Estudante';
// }

// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin('admin');
// console.log(novoUser.exibirInfo());
// console.log(novoUser.role);

const user = {
    init: function(nome, email){
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function(){
        return this.nome;
    },
}

const novoUser = Object.create(user);
novoUser.init('Gabriel', 'gabi@gks.com');
console.log(novoUser.exibirInfos());