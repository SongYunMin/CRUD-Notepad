class NavButton{
    #navDom
    #newNoteDom
    #loadDom
    #modifyDom
    constructor() {
        this.makeNavigation();
    }

    makeNavigation(){
        const t = document.querySelector('.template-button');
        const tmpl = document.importNode(t.content, true);
        this.#navDom = tmpl.querySelector('.notepad-nav');

        this.#newNoteDom = this.#navDom.querySelector('.newNoteBT');
        this.#loadDom = this.#navDom.querySelector('.loadBT');
        this.#modifyDom = this.#navDom.querySelector('.modifyBT');

        return this.#navDom;
    }

    getNavDom(){
        return this.#navDom;
    }

    getNewNoteDom(){
        return this.#newNoteDom;
    }

    getLoadDom(){
        return this.#loadDom;
    }

    getModifyDom(){
        return this.#modifyDom;
    }

}5