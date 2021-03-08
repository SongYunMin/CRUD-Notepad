class Monitor {
    #monitorDom
    #tabsDom
    #navsDom
    #headerDom
    #tab
    #nav
    #tabsArray
    #navsArray

    constructor(monitorDom) {
        this.#monitorDom = monitorDom;
        this.checkSessionResult();
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

    checkSessionResult(){
        this.checkSessionRequest(function(result){
            if(result === 'OK'){
                console.log("정상 접근");
            }else{
                alert("비정상 접근입니다. 다시 로그인 해주세요.");
                location.href = "Login.html";
            }
        });
    }

    checkSessionRequest(callback){
        (async function() {
            const response = await fetch("http://localhost:8080/Notepad");
            if(response.status === 200){
                console.log("정상");
                const result = await response.text();
                callback(result);
            }
        })();
    }

    makeHeader(header) {
        this.#monitorDom.appendChild(header.getDom());
    }

    makeTabs() {
        this.#monitorDom.addEventListener('custom-addTabs', (e) => {
            this.#tab = new Tabs(e.detail);
            this.#tabsDom.appendChild(this.#tab.getDom());
            this.#tabsArray.push(this.#tab.getDom());
        });
    }

    makeNav() {
        this.#monitorDom.addEventListener('custom-addNavs', (e) => {
            this.#nav = new NavButton(e.detail);
            this.#navsDom.appendChild(this.#nav.getDom());
            this.#navsArray.push(this.#nav.getDom());
            this.loadTab();
        });
    }

    changeTab() {
        document.addEventListener('custom-changeTab', (e) => {
            this.#tab.changeTab(e.detail, this.#tabsArray, this.#navsArray);
        });
    }

    changeTitle() {
        document.addEventListener('custom-changeTitle', (e) => {
            const data = {
                tab : this.#tab.changeTabTitle(e.detail.index, this.#tabsArray),
                mouse : e.detail.mouse,
                count : this.#tab.getTabCount(),
                activeIndex : this.#tab.getActiveIndex()
            };
            console.log(data.tab);
            this.#headerDom.changeTitle(e.detail.index, data.tab);

            this.#nav.saveEvent(data).then(r => {
                console.log(r);
            });
        });
    }

    loadTab() {
        this.#nav.getDom().addEventListener('custom-loadTab', (e) => {
            this.#tab.changeNotepad(e.detail.result, e.detail.targetNode, this.#tabsArray);
        });
    }
}