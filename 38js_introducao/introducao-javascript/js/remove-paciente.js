// var pacientes = document.querySelectorAll('.paciente');

// pacientes.forEach((paciente) => {
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com duplo clique!");
//         this.remove();
//     })
// });

var tabela = document.querySelector('#tabela-pacientes')

tabela.addEventListener("dblclick", (event) => {
    //Simplificando:
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);

    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    // paiDoAlvo.remove(); 
})