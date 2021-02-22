class NavButton{
    #navDom
    #newNoteDom
    #loadDom
    #modifyDom

    TAB_COUNT
    constructor() {
        this.TAB_COUNT = 1;
        // this.makeNavigation();
    }

    // TODO : 새 메모 기능이 "저장" 기능을 대체?
    makeNavigation(){
        const t = document.querySelector('.template-button');
        const tmpl = document.importNode(t.content, true);
        this.#navDom = tmpl.querySelector('.notepad-nav');
        this.#navDom.setAttribute('name', `${this.TAB_COUNT++}`)
    }

    addNav(notepadDom){
        const t = document.querySelector('.template-button');
        const tmpl = document.importNode(t.content, true);
        this.#navDom = tmpl.querySelector('.notepad-nav');
        this.#navDom.setAttribute('name', `${this.TAB_COUNT++}`);
        notepadDom.appendChild(this.#navDom);
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