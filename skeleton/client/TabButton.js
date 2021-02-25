class TabButton{
    #tabButtonDom
    #tabBT
    constructor() {
        this.prepareDom();
    }

    prepareDom(){
        const t = document.querySelector('.template-tabBT');
        const tmpl = document.importNode(t.content, true);
        this.#tabButtonDom = tmpl.querySelector('.tabBT-li');
        this.#tabBT = this.#tabButtonDom.querySelector('.tabBT-bt');
    }

    getDom(){
        return this.#tabButtonDom;
    }
}
