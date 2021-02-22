class NavButton{
    #navDom
    #newNoteDom
    #loadDom
    #modifyDom

    TAB_COUNT
    constructor() {
        this.TAB_COUNT = 1;
    }

    makeNavigation(){
        const t = document.querySelector('.template-button');
        const tmpl = document.importNode(t.content, true);
        this.#navDom = tmpl.querySelector('.notepad-nav');
        this.#newNoteDom = this.#navDom.querySelector('.newNoteBT');
        this.#loadDom = this.#navDom.querySelector('.loadBT');
        this.#modifyDom = this.#navDom.querySelector('.modifyBT');

        this.#navDom.setAttribute('name', `${this.TAB_COUNT++}`)

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