export default class User{
    #nome //Declarar com # antes do construtor para ser privado 
    #email
    #nasc
    #role
    #ativo
    constructor(nome, email, nasc, role, ativo = true){
        this.#nome = nome; //Declarar com # no construtor
        this.#email = email;
        this.#nasc = nasc;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome(){
        return this.#nome;
    }
    set nome(novoNome){
        if(novoNome === ""){
            throw Error("Formato inválido");
        }
        this.#nome = novoNome;
    }

    get email(){
        return this.#email;
    }
    set email(novoEmail){
        this.#email = novoEmail;
    }

    get nasc(){
        return this.#nasc;
    }
    set nasc(novoNasc){
        this.#nasc = novoNasc;
    }

    get role(){
        return this.#role;
    }
    set role(novaRole){
        this.#role = novaRole;
    }

    get ativo(){
        return this.#ativo;
    }
    set ativo(novoAtivo){
        this.#ativo = novoAtivo;
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nasc}, ${this.role}, ${this.ativo}`; //Utilizar # nos atributos privados (.nome != .#nome)
    }
}

// const novoUser = new User('Gabriel', 'gabi@gks', '05/01/2002');

// console.log(novoUser);
// console.log(novoUser.exibirInfos());