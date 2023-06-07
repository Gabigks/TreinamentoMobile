import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nasc, role = 'docente', ativo = true){
        super(nome, email, nasc, role, ativo);
    }

    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} aprovado no curso ${curso}`;
    }
}

// const docente = new Docente('Joao', 'jj@jj', '02/03/2002');

// console.log(docente);
// console.log(docente.exibirInfos());
// console.log(docente.aprovaEstudante('Maria', 'CC'));