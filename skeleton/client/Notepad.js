class Notepad {
    #navButtonInstance
    #headerInstance
    #tabInstance

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
        this.#tabInstance = new Tab();

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

    makeHeader(){
        this.#headerInstance.addHeader(this.#headerDom);
    }

    makeNotepad(){
        this.#tabInstance.addTab(this.#notepadDom);
    }

    makeNavigation(){
        this.#navButtonInstance.addNav(this.#notepadDom);
    }

    addNotepadTab(){
        const addTab = this.#headerInstance.getAddTabButtonDom();
        this.eventHandler.addHeaderTab(addTab);
        addTab.addEventListener('click', ()=>{
            if(this.TAB_COUNT >= this.TAB_LIMIT + 1){
                console.log("Tab Maximum");
            }else {
                this.#tabInstance.addTab(this.#notepadDom);
                this.#navButtonInstance.addNav(this.#notepadDom);
            }
        })
    }

    changeTab(){
        const changeTab = this.#headerInstance.getHeaderTabList();
        this.eventHandler.handleTabEvent(changeTab);
        changeTab.addEventListener('click', (e)=>{
            console.log("테스트 : ",e.target);
            this.#tabInstance.changeTab(this.#notepadDom, e.target);


            // const click = e.target.getAttribute('name');
            // const sectionNodes = this.#notepadDom.childNodes;   // 홀수
            // const navNodes = this.#notepadDom.childNodes;       // 짝수
            // console.log(navNodes);
            //
            //
            // for(let i = 1; i<sectionNodes.length; i+=2){
            //     if(click === sectionNodes[i].getAttribute('name')){
            //         sectionNodes[i].style.visibility = 'visible';
            //     } else {
            //         sectionNodes[i].style.visibility = 'hidden';
            //     }
            // }
            // for(let i = 2; i<navNodes.length;i+=2){
            //     if(click === navNodes[i].getAttribute('name')){
            //         navNodes[i].style.visibility = 'visible';
            //     }else{
            //         navNodes[i].style.visibility = 'hidden';
            //     }
            // }

        });
    }
}