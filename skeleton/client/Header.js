/*
1개의 Header 는 1개의 TabList 를 가질 수 있음
 */

class Header {
    #headerDom
    #headerAddBT
    #headerTabList
    #TAB_COUNT
    #TAB_LIMIT
    constructor() {
        this.#TAB_COUNT = 1;
        this.#TAB_LIMIT = 5;
        this.prepareDom();
        this.makeTab();
        this.changeTitle();
    }

    prepareDom() {
        const t = document.querySelector('.template-header');
        const tmpl = document.importNode(t.content, true);
        this.#headerDom = tmpl.querySelector('.main-header');
        this.#headerAddBT = this.#headerDom.querySelector('.addTabBT');
        this.#headerTabList = this.#headerDom.querySelector('.tabList');
    }

    // 탭 추가 버튼 이벤트
    makeTab(){
        this.#headerAddBT.addEventListener('click', (e)=>{
            if(this.#TAB_COUNT >= this.#TAB_LIMIT+1){
                alert("탭은 다섯개 이상 생성할 수 없습니다.");
            } else {
                const tabButton = new TabButton(this.#TAB_COUNT);
                this.#headerTabList.appendChild(tabButton.getDom());
                this.#headerAddBT.dispatchEvent(new CustomEvent('addTabs', {
                    bubbles: true,
                    detail: this.#TAB_COUNT
                }));
                this.#headerAddBT.dispatchEvent(new CustomEvent('addNavs', {
                    bubbles: true,
                    detail: this.#TAB_COUNT
                }))
                this.#TAB_COUNT++;
            }
        });
    }

    changeTitle(){
        document.addEventListener('changeTitle', (e)=>{
            console.log(e.detail);
            const listNodes = this.#headerTabList.childNodes;
            for(let i=1;i<listNodes.length;i++){
                if(e.detail === listNodes[i].getAttribute('name')){
                    const button = listNodes[i].querySelector('.tabBT-bt');
                    button.dispatchEvent(new CustomEvent('modifyTitle', {
                        bubbles: true,
                        detail: button
                    }));
                }
            }
        });
    }

    getDom(){
        return this.#headerDom;
    }
}
