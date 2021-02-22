class Tab{
    #notepadTabDom
    constructor() { }

    makeTab(headerDom){
        const t = document.querySelector('.template-notepad');
        const tmpl = document.importNode(t.content, true);
        this.#notepadTabDom = tmpl.querySelector('.notepadTab');
        this.#notepadTabDom.classList.add(`Tab${this.TAB_COUNT}`);
        this.#notepadTabDom.setAttribute('name', `${this.TAB_COUNT++}`);
        headerDom.appendChild(this.#notepadTabDom);
    }
}