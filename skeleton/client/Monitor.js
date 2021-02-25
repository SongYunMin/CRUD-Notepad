/*
1개의 monitor 는 1개의 Header 를 가질 수 있음
 */

class Monitor {
    #monitorDom
    #header
    #tabList
    #tabs
    #navButton
    constructor(monitorDom) {
        this.#monitorDom = monitorDom;

        this.#header = new Header();
        this.makeHeader(this.#header);

        this.#tabs = new Tabs();
        this.makeTabs(this.#tabs);
    }

    makeHeader(header){
        this.#monitorDom.appendChild(header.getDom());
    }

    makeTabs(tabs){
        this.#monitorDom.appendChild(tabs.getDom());
    }




    // makeHeader(){
    //     this.#headerInstance.addHeader(this.#headerDom);
    // }
    //
    // makeNotepad(){
    //     this.#tabInstance.addTab(this.#notepadDom);
    // }
    //
    // makeNavigation(){
    //     this.#navButtonInstance.addNav(this.#notepadDom);
    // }
    //
    // addNotepadTab(){
    //     const addTab = this.#headerInstance.getAddTabButtonDom();
    //     addTab.addEventListener('click', ()=>{
    //         if(!(this.TAB_COUNT >= this.TAB_LIMIT + 1)){
    //             this.#tabInstance.addTab(this.#notepadDom);
    //             this.#navButtonInstance.addNav(this.#notepadDom);
    //         }
    //     });
    // }
    //
    // changeTab(){
    //     const changeTab = this.#headerInstance.getHeaderTabList();
    //     changeTab.addEventListener('click', (e)=>{
    //         this.#tabInstance.changeTab(this.#notepadDom, e.target);
    //     });
    // }
}