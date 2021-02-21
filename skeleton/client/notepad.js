class Notepad {
    #headerDom
    #tabDom
    #headerContentDom
    #sectionDom
    eventHandler
    #headerInstance
    TAB_COUNT
    TAB_LIMIT

    constructor(headerDom, notepadDom) {
        this.TAB_COUNT = 1;
        this.TAB_LIMIT = 5;
        this.#headerInstance = new Header();
        this.#headerContentDom = this.#headerInstance.getHeaderDom();
        this.#headerDom = headerDom;
        this.#sectionDom = notepadDom;
        this.eventHandler = new EventListener();
        this.makeHeader(this.#headerInstance);
        this.makeNotepad();
        this.addNotepadTab();
        this.changeTab();
    }


    makeNotepad(){
        const t = document.querySelector('.template-notepad');
        const tmpl = document.importNode(t.content, true);
        this.#tabDom = tmpl.querySelector('.notepadTab');

        this.#tabDom.classList.add(`Tab${this.TAB_COUNT}`);
        this.#tabDom.setAttribute('name', `${this.TAB_COUNT++}`);
        this.#sectionDom.appendChild(this.#tabDom);
    }

    makeHeader(header){
        this.#headerDom.appendChild(header.getHeaderDom());
    }

    addNotepadTab(){
        const addTab = this.#headerInstance.getAddTabButtonDom();
        this.eventHandler.addHeaderTab(addTab);
        addTab.addEventListener('click', ()=>{
            if(this.TAB_COUNT >= this.TAB_LIMIT + 1){
                console.log("Tab Maximum");
            }else {
                this.makeNotepad();
            }
        })
    }

    changeTab(){
        const changeTab = this.#headerInstance.getHeaderTabList();
        this.eventHandler.handleTabEvent(changeTab);
        changeTab.addEventListener('click', (e)=>{
            const click = e.target.getAttribute('name');
            const sectionNodes = this.#sectionDom.childNodes;
            // TODO : 0 번째 node 가 element DOM 이 아니여서 오류
            for(let i = 1; i<sectionNodes.length;i++){
                if(click === sectionNodes[i].getAttribute('name')){
                    sectionNodes[i].style.visibility = 'visible';
                }else{
                    sectionNodes[i].style.visibility = 'hidden';
                }
            }

        });
    }


}