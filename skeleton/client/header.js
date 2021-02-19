class Header{
    #headerDom
    #headerTabList
    #headerTabLi
    #headerTabButton
    #addTabButton
    eventHandler
    constructor() {
        this.prepareDom();
        this.setTabButton();
        this.eventHandler = new EventListener();
        this.addTab();
    }

    prepareDom(){
        const t = document.querySelector('.template-header');
        const tmpl = document.importNode(t.content, true);
        this.#headerDom = tmpl.querySelector('.main-header');
        this.#addTabButton = this.#headerDom.querySelector('.addTabBT');
        this.#headerTabList = this.#headerDom.querySelector('.tabList');
    }

    setTabButton(){
        const t = document.querySelector('.template-tabBT');
        const tmpl = document.importNode(t.content, true);
        this.#headerTabLi = tmpl.querySelector('.tabBT-li');
        this.#headerTabButton = this.#headerTabLi.querySelector('.tabBT-bt');
        this.#headerTabList.appendChild(this.#headerTabLi);
    }

    addTab(){
        this.eventHandler.addTab(this.#addTabButton);
        this.#addTabButton.addEventListener('add-tab', (e) =>{
            this.setTabButton();
        });
    }

    getHeaderDom(){
        return this.#headerDom;
    }

}