class TabList {
    #tabListDom
    constructor() {
        this.prepareDom();
    }

    prepareDom(){
        const t = document.querySelector('.template-tabList');
        const tmpl = document.importNode(t.content, true);
        this.#tabListDom = tmpl.querySelector('.tabList');
    }

    getDom(){
        return this.#tabListDom;
    }

}