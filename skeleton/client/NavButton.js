class NavButton{
    #notepadInstance

    #navDom
    #loadDom
    #saveDom

    TAB_COUNT
    TAB_LIMIT
    constructor() {
        this.TAB_COUNT = 1;
        this.TAB_LIMIT = 5;
    }

    addNav(notepadDom){
        const t = document.querySelector('.template-button');
        const tmpl = document.importNode(t.content, true);
        this.#navDom = tmpl.querySelector('.notepad-nav');
        this.#navDom.setAttribute('name', `${this.TAB_COUNT++}`);
        this.#saveDom = this.#navDom.querySelector('.saveBT');
        this.#loadDom = this.#navDom.querySelector('.loadBT');
        notepadDom.appendChild(this.#navDom);
    }

    getSaveDom(){
        return this.#saveDom;
    }

    getLoadDom(){
        return this.#loadDom;
    }


}