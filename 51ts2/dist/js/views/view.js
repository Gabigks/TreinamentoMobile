export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento)
            this.elemento = elemento;
        else
            throw Error(`O elemento ${seletor} passado para View não existe no DOM. Verifique seu código!`);
        if (escapar)
            this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            const exp = '/<script>[\s\S]*?<\/script>/';
            template = template.replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }
}
