const cliente = {
    nome: "Gabriel",
    idade: 21,
    cpf: "01010211943",
    email: "gabrielgks10@gmail.com",
    telefone: ["49988689061", "28197432984"], //array como atributo
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo) console.log("Saldo insuficiente");
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(25);