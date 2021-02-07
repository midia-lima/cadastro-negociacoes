//declare var $: any; cenário no qual ele não consiga encontrar um tsd file com as definições da biblioteca
class View {
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    update(model) {
        this._elemento.html(this.template(model));
    }
}
