class Notepad {
    #headerDom
    #tabDom
    #headerContentDom
    #sectionDom
    eventHandler
    #headerInstance
    TAB_COUNT

    constructor(headerDom, notepadDom) {
        this.TAB_COUNT = 1;
        this.#headerInstance = new Header();
        this.#headerContentDom = this.#headerInstance.getHeaderDom();
        this.#headerDom = headerDom;
        this.#sectionDom = notepadDom;
        this.eventHandler = new EventListener();
        this.makeHeader(this.#headerInstance);
        this.makeNotepad();
        this.addNotepadTab();
    }

    makeNotepad(){
        const t = document.querySelector('.template-notepad');
        const tmpl = document.importNode(t.content, true);
        this.#tabDom = tmpl.querySelector('.notepadTab');

        this.#tabDom.classList.add(`Tab${this.TAB_COUNT++}`);
        this.#sectionDom.appendChild(this.#tabDom);
    }

    makeHeader(header){
        this.#headerDom.appendChild(header.getHeaderDom());
    }

    addNotepadTab(){
        const addTab = this.#headerInstance.getAddTabButtonDom();
        this.eventHandler.handleEvent(addTab, {add_tab:true});
        addTab.addEventListener('add-tab', ()=>{
            this.makeNotepad();
            console.log("추가 완료");
        })

    }

}