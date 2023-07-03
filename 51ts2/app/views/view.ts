export abstract class View<T> {
  
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean){
    const elemento = document.querySelector(seletor);
    if(elemento) this.elemento = elemento as HTMLElement;
    else throw Error(`O elemento ${seletor} passado para View não existe no DOM. Verifique seu código!`);
    if(escapar) this.escapar = escapar;
  }

  update(model: T): void{
    let template = this.template(model);
    if(this.escapar){
      const exp = '/<script>[\s\S]*?<\/script>/';
      template = template.replace(exp, '');
    }
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;

}