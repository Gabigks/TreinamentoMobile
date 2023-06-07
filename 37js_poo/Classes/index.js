import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User("Gabriel", "gg@@", "10/10/2001");
// console.log(novoUser.exibirInfos());

// novoUser.nome = "Tesao"; //Não funciona pois o atributo nome esta privado dentro da classe user
const novoAdmin = new Admin("Gabi", "gabi@gks", "05/01/2002");
console.log(novoAdmin.nome);
novoAdmin.nome = ""; //Setters funcionando
console.log(novoAdmin.nome);
console.log(novoAdmin.exibirInfos());

