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
        const t = document.querySelector('.template-tabBT');
        const tmpl = document.importNode(t.content, true);
        this.#headerTabLi = tmpl.querySelector('.tabBT-li');
        this.#headerTabButton = this.#headerTabLi.querySelector('.tabBT-bt');

        this.#headerTabLi.classList.add(`Tab${this.TAB_COUNT}`);
        this.#headerTabButton.innerHTML = `탭 ${this.TAB_COUNT++}`
        this.#headerTabList.appendChild(this.#headerTabLi);
    }

    // 탭 추가 쿨릭 이벤트
    addHeaderTab() {
        this.eventHandler.handleTabEvent(this.#addTabButton, {add_tab:true});
        this.#addTabButton.addEventListener('add-tab', (e) => {
            this.addTabButton();
        });
    }

    getHeaderDom() {
        return this.#headerDom;
    }

    getAddTabButtonDom() {
        return this.#addTabButton;
    }

    // TODO : 어떤 탭 클릭했는지 target 확인 안되면 stash
    // 탭 변경 클릭 이벤트
    listenTabEvent(){
        this.#headerTabButton.addEventListener('click', (e)=>{
            console.log(e.target);
        })
        this.eventHandler.handleEvent(this.#headerTabButton, {handle_tab:true});
        console.log(this.#headerTabButton);
        this.#headerTabButton.addEventListener('click-tab', (e)=>{
            console.log("탭 변경");
        });
    }



}