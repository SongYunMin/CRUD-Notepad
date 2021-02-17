class Header{
    #headerDom
    #headerTabList
    #headerTabli
    #headerTabButton
    #AddTablButton
    constructor() {
        this.prepareDom();
        this.setTabButton();
        this.#AddTablButton = document.querySelector('.addTabBT');
    }

    prepareDom(){
        const t = document.querySelector('.template-header');
        const tmpl = document.importNode(t.content, true);
        this.#headerDom = tmpl.querySelector('.main-header');
        this.#headerTabList = this.#headerDom.querySelector('.tabList');
    }

    setTabButton(){
        const t = document.querySelector('.template-tabBT');
        const tmpl = document.importNode(t.content, true);
        this.#headerTabli = tmpl.querySelector('.tabBT-li');
        this.#headerTabButton = this.#headerTabli.querySelector('.tabBT-bt');
        this.#headerDom.appendChild(this.#headerTabli);
    }

    addTab(){

    }

    setAttribute(){
        this.#AddTablButton.addEventListener()
    }

    getHeaderDom(){
        return this.#headerDom;
    }

}