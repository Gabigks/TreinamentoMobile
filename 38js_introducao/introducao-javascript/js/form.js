const addPac = document.querySelector('#adicionar-paciente');
addPac.addEventListener("click", (event) => {
    event.preventDefault(); //Previne o comportamento padrão do evento, nesse caso por se tratar de um botão de dentro de um form,
                            //ele recarregaria a página e limparia os dados dos campos.
    const form = document.querySelector("#form-adiciona");
    const ul = document.querySelector("#mensagens-erro");

    const paciente = obtemPacienteForm(form);

    const erros = validaPaciente(paciente);

    if(erros.length > 0){
        mostraErros(erros);
        return;
    };

    adicionaPacienteTabela(paciente);

    form.reset(); //Limpa os campos do formulario
    ul.innerHTML = "";
});

function adicionaPacienteTabela(paciente){
    const pacienteTr = montaTr(paciente);
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacienteForm(form){
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    return paciente;
}

function montaTr(paciente){
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    const erros = [];

    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido!");
    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida!");
    if(paciente.nome.length === 0) erros.push("O nome não pode ser em branco!");
    if(paciente.peso.length === 0) erros.push("O peso não pode ser em branco!");
    if(paciente.altura.length === 0) erros.push("A altura não pode ser em branco!");
    if(paciente.gordura.length === 0) erros.push("A gordura não pode ser em branco!");

    return erros;
}

function mostraErros(erros){
    const ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";
    
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


// function mostraMensagem(){
//     console.log("Clicou!");
// }

//Os dois jeitos abaixo funcionam.
// titulo.onclick = mostraMensagem;
// titulo.addEventListener("click", () => console.log("Clicou!"));
