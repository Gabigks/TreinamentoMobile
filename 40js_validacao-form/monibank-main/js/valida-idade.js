export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)) campo.setCustomValidity('O usuário não é maior de idade');
}1

function validaIdade(data){
    const hoje = new Date();
    const maior18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return hoje >= maior18;
}