import User from "./User.js";

export default class Admin extends User { //Admin está herdando todos atributos e métodos da classe User
    constructor(nome, email, nasc, role = 'admin', ativo = true){
        super(nome, email, nasc, role, ativo) //É preciso informar, pois Admin nao precisa necessáriamente querer herdar todoos atributos
    }

    criarCurso(){
        return `Curso criado!`;
    }
}

// const adm = new Admin('Gabi', 'gks@gks', '05/01/2002')
// console.log(adm.exibirInfos());
// console.log(adm.criarCurso());