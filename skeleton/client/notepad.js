class Notepad {
    #headerDom
    #tabDom
    #headerContentDom
    #sectionDom
    eventHandler
    #headerInstance

    constructor(headerDom, notepadDom) {
        this.prepareDom();
        this.#headerInstance = new Header();
        this.#headerContentDom = this.#headerInstance.getHeaderDom();
        this.#headerDom = headerDom;
        this.#sectionDom = notepadDom;
        this.eventHandler = new EventListener();
        this.makeHeader(this.#headerInstance);
        this.makeNotepad();
        this.addNotepadTab();
    }

    prepareDom(){
        const t = document.querySelector('.template-notepad');
        const tmpl = document.importNode(t.content, true);
        this.#tabDom = tmpl.querySelector('.notepadTab');
    }

    makeNotepad(){
        this.#sectionDom.appendChild(this.#tabDom);
    }

    makeHeader(header){
        this.#headerDom.appendChild(header.getHeaderDom());
    }

    addNotepadTab(){
        const addTab = this.#headerInstance.getAddTabButtonDom();
        this.eventHandler.addNotepadTab(addTab);
        addTab.addEventListener('add-tab', ()=>{
            console.log("Notepad");
        })

    }

}