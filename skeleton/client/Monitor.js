
class Monitor {
    #monitorDom
    #tabsDom
    #navsDom
    #headerDom
    #tabDom
    #navDom
    #tabsArray
    #navsArray
    constructor(monitorDom) {
        this.#monitorDom = monitorDom;
        this.#tabsDom = this.#monitorDom.querySelector('.tab');
        this.#navsDom = this.#monitorDom.querySelector('.nav');
        this.#headerDom = new Header();
        this.#tabsArray = []
        this.#navsArray = []
        this.makeHeader(this.#headerDom);
        this.makeTabs();
        this.makeNav();
        this.changeTab();
        this.changeTitle();
    }

    makeHeader(header){
        this.#monitorDom.appendChild(header.getDom());
    }

    makeTabs(){
        this.#monitorDom.addEventListener('custom-addTabs', (e)=>{
            this.#tabDom = new Tabs(e.detail);
            this.#tabsDom.appendChild(this.#tabDom.getDom());
            this.#tabsArray.push(this.#tabDom.getDom());
        });
    }

    makeNav(){
        this.#monitorDom.addEventListener('custom-addNavs',(e)=>{
            this.#navDom = new NavButton(e.detail);
            this.#navsDom.appendChild(this.#navDom.getDom());
            this.#navsArray.push(this.#navDom.getDom());
            this.loadTab();
        });
    }

    changeTab(){
        document.addEventListener('custom-changeTab', (e)=>{
            console.log(e.detail);
            this.#tabDom.changeTab(e.detail, this.#tabsArray, this.#navsArray);
        });
    }

    changeTitle(){
        document.addEventListener('custom-changeTitle', (e)=>{
            const tabList = this.#tabsDom.childNodes
            for(let i=1;i<tabList.length;i++){
                if(e.detail === tabList[i].getAttribute('name')) {
                    const titleNode = tabList[i].querySelector('.notepadTitle');
                    const memoNode = tabList[i].querySelector('.notepadMemo');
                    const title = titleNode.value;
                    const memo = memoNode.value;
                    let data = {
                        title : title,
                        memo : memo
                    }
                    this.#headerDom.changeTitle(tabList[i].getAttribute('name'),data);
                    this.#navDom.saveEvent(data);
                }
            }
        });
    }

    loadTab(){
        this.#navDom.getDom().addEventListener('custom-loadTab', (e)=>{
            const index = e.detail.targetNode.getAttribute('name');
            console.log(index);
            this.#tabDom.changeNotepad(e.detail.result, e.detail.targetNode, this.#tabsArray);
        });
    }
}