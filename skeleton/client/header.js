class Header {
    #headerDom
    #headerTabList
    #headerTabLi
    #headerTabButton
    #addTabButton
    eventHandler
    TAB_COUNT

    constructor() {
        this.TAB_COUNT = 1;
        this.prepareDom();
        this.addTabButton();
        this.eventHandler = new EventListener();
        this.addHeaderTab();
        this.listenTabEvent();
    }

    prepareDom() {
        const t = document.querySelector('.template-header');
        const tmpl = document.importNode(t.content, true);
        this.#headerDom = tmpl.querySelector('.main-header');
        this.#addTabButton = this.#headerDom.querySelector('.addTabBT');
        this.#headerTabList = this.#headerDom.querySelector('.tabList');
    }

    // 새 탭을 추가하는 메소드
    addTabButton() {
        console.log("탭 추가");
        const t = document.querySelector('.template-tabBT');
        const tmpl = document.importNode(t.content, true);
        this.#headerTabLi = tmpl.querySelector('.tabBT-li');
        this.#headerTabButton = this.#headerTabLi.querySelector('.tabBT-bt');

        this.#headerTabLi.classList.add(`Tab${this.TAB_COUNT}`);
        this.#headerTabButton.classList.add(`Tab${this.TAB_COUNT}`);
        this.#headerTabButton.innerHTML = `탭 ${this.TAB_COUNT++}`
        this.#headerTabList.appendChild(this.#headerTabLi);
    }

    // 탭 추가 쿨릭 이벤트
    addHeaderTab() {
        this.#addTabButton.addEventListener('click', ()=>{
            console.log("addTabButton Event");
           this.addTabButton();
        });
    }

    // 탭 변경 클릭 이벤트
    listenTabEvent(){
        this.eventHandler.handleTabEvent(this.#headerTabList);
        this.#headerTabList.addEventListener('click-tab', (e)=>{
            console.log(e.detail.dom);
        });
    }

    getHeaderDom() {
        return this.#headerDom;
    }

    getAddTabButtonDom() {
        return this.#addTabButton;
    }


}