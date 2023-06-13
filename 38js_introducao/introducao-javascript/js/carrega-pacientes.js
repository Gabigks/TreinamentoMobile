var carregaPacientes = document.querySelector("#buscar-pacientes");

carregaPacientes.addEventListener("click", () => {

    var xhr = new XMLHttpRequest(); //cria uma requisição http

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"); //Abre o link passando um get

    xhr.addEventListener("load", () => { //Ao carregar faz tal coisa
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(paciente => {
            adicionaPacienteTabela(paciente);
        });

    });

    xhr.send();

})