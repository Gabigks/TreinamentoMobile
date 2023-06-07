const user = {
    nome: "Gabriel",
    email: "gabi@gmail.com",
    nascimento: "05/01/2002",
    role: "estudante",
    ativo: true,
    exibirInfos: function (){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Marcela",
    email: "marci@gmail.com",
    role: "admin",
    criaCurso() {
        console.log("Curso criado");
    }
}
Object.setPrototypeOf(admin, user);
admin.criaCurso();
admin.exibirInfos();
