class Notepad {
    #navButtonInstance
    #headerInstance

    #headerDom
    #headerContentDom

    #notepadDom
    #notepadTabDom
    #notepadNavDom

    eventHandler
    TAB_COUNT
    TAB_LIMIT

    constructor(headerDom, notepadDom) {
        this.TAB_COUNT = 1;
        this.TAB_LIMIT = 5;
        this.#headerInstance = new Header();
        this.#navButtonInstance = new NavButton();

        this.#headerContentDom = this.#headerInstance.getHeaderDom();
        this.#headerDom = headerDom;
        this.#notepadDom = notepadDom;
        this.eventHandler = new EventListener();
        this.makeHeader(this.#headerInstance);
        this.makeNotepad();
        this.makeNavigation();
        this.addNotepadTab();
        this.changeTab();
    }

    makeHeader(header){
        this.#headerDom.appendChild(header.getHeaderDom());
    }

    makeNotepad(){
        const t = document.querySelector('.template-notepad');
        const tmpl = document.importNode(t.content, true);
        this.#notepadTabDom = tmpl.querySelector('.notepadTab');
        this.#notepadTabDom.classList.add(`Tab${this.TAB_COUNT}`);
        this.#notepadTabDom.setAttribute('name', `${this.TAB_COUNT++}`);
        this.#notepadDom.appendChild(this.#notepadTabDom);
    }
임
    makeNavigation(){
        this.#notepadNavDom = this.#navButtonInstance.getNavDom();
        this.#notepadDom.appendChild(this.#navButtonInstance.makeNavigation());
    }

    addNotepadTab(){
        const addTab = this.#headerInstance.getAddTabButtonDom();
        this.eventHandler.addHeaderTab(addTab);
        addTab.addEventListener('click', ()=>{
            if(this.TAB_COUNT >= this.TAB_LIMIT + 1){
                console.log("Tab Maximum");
            }else {
                this.makeNotepad();
                this.makeNavigation();
            }
        })
    }

    changeTab(){
        const changeTab = this.#headerInstance.getHeaderTabList();
        this.eventHandler.handleTabEvent(changeTab);
        changeTab.addEventListener('click', (e)=>{
            const click = e.target.getAttribute('name');
            const sectionNodes = this.#notepadDom.childNodes;
            const navNodes = this.#notepadDom.childNodes;

            for(let i = 1; i<sectionNodes.length; i+=2){
                if(click === sectionNodes[i].getAttribute('name')){
                    sectionNodes[i].style.visibility = 'visible';
                } else {
                    sectionNodes[i].style.visibility = 'hidden';
                }
            }
            for(let i = 2; i<navNodes.length;i+=2){
                if(click === navNodes[i].getAttribute('name')){
                    navNodes[i].style.visibility = 'visible';
                }else{
                    navNodes[i].style.visibility = 'hidden';
                }
            }

        });
    }
}