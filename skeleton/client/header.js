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
        this.addTab();
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

    // 탭 추가 클릭 이벤트
    addTab() {
        this.#addTabButton.addEventListener('click', ()=>{
            console.log("addTabButton Event");
           this.addTabButton();
        });
    }

    // 탭 변경 클릭 이벤트
    listenTabEvent(){
        this.#headerTabList.addEventListener('click', (e)=>{
            console.log("qwekljqwle");
        });
    }

    getHeaderDom() {
        return this.#headerDom;
    }

    getAddTabButtonDom() {
        return this.#addTabButton;
    }

    getHeaderTabList(){
        return this.#headerTabList;
    }


}