const pacientes = document.querySelectorAll(".paciente");

for(let i=0; i < pacientes.length; i++){
    const paciente = pacientes[i];

    const peso = paciente.querySelector(".info-peso");
    const vPeso = Number(peso.textContent);

    const altura = paciente.querySelector(".info-altura");
    const vAltura = Number(altura.textContent);

    const tdImc = paciente.querySelector(".info-imc");

    let pesoValido = validaPeso(vPeso);
    let alturaValida = validaAltura(vAltura);

    if(!pesoValido){
        tdImc.textContent = ("Peso inválido!");
        paciente.style.backgroundColor = 'lightcoral'; //Forma ruim alterando direto o estilo no js ao inves do css
    }
    if(!alturaValida){
        tdImc.textContent = ("Altura inválida!");
        paciente.classList.add("paciente-invalido"); //Forma correta e mais organizada
    }

    if(pesoValido && alturaValida){
        tdImc.textContent = calculaImc(vPeso, vAltura);
    }
}

function validaPeso(peso){
    return (peso >=0 && peso < 1000 ? true : false);
}

function validaAltura(altura){
    return (altura >=0 && altura < 3.0 ? true : false);
}

function calculaImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}