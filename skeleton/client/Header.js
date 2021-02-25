/*
1개의 Header 는 1개의 TabList 를 가질 수 있음
 */

class Header {
    #headerDom
    #headerAddBT
    #headerTabList
    constructor() {
        this.prepareDom();
        this.addTab();
    }


    prepareDom() {
        const t = document.querySelector('.template-header');
        const tmpl = document.importNode(t.content, true);
        this.#headerDom = tmpl.querySelector('.main-header');
        this.#headerAddBT = this.#headerDom.querySelector('.addTabBT');
        this.#headerTabList = this.#headerDom.querySelector('.tabList');
    }

    // 탭 추가 버튼 이벤트
    addTab(){
        this.#headerAddBT.addEventListener('click', (e)=>{
            console.log("정상");
            const tabButton = new TabButton();
            this.#headerTabList.appendChild(tabButton.getDom());
        });
    }

    getDom(){
        return this.#headerDom;
    }


}
    //
    // addHeader(){
    //     this.#headerDom.appendChild(this.#headerSectionDom);
    // }
    //
    // addTabListener() {
    //     this.#addTabButton.addEventListener('click', ()=>{
    //         this.addTab();
    //     })
    // }
    //
    // addTab(){
    //     if(this.TAB_COUNT >= this.TAB_LIMIT+1){
    //         alert("탭은 다섯개 이상 추가할 수 없습니다.");
    //     }
    //     else {
    //         const tab = new Tabs(this.#notepadDom, this.TAB_COUNT);
    //         const nav = new NavButton(this.#notepadDom, this.TAB_COUNT);
    //         console.log("탭 추가");
    //         const t = document.querySelector('.template-tabBT');
    //         const tmpl = document.importNode(t.content, true);
    //
    //         this.#headerTabLi = tmpl.querySelector('.tabBT-li');
    //         this.#headerTabLi.classList.add(`Tabs${this.TAB_COUNT}`);
    //         this.#headerTabLi.setAttribute('name', `${this.TAB_COUNT}`);
    //
    //         this.#headerTabButton = this.#headerTabLi.querySelector('.tabBT-bt');
    //         this.#headerTabButton.classList.add(`Tabs${this.TAB_COUNT}`);
    //         this.#headerTabButton.setAttribute('name', `${this.TAB_COUNT}`);
    //         this.#headerTabButton.innerHTML = `탭 ${this.TAB_COUNT++}`
    //
    //         this.#headerTabList.appendChild(this.#headerTabLi);
    //     }
    // }
    //
    // changeTab(){
    //     this.#headerTabList.addEventListener('click', (e)=>{
    //         console.log("탭 클릭됨 !");
    //         // TODO : dispatchEvent 인식하지 못함
    //         this.#headerTabList.dispatchEvent(new CustomEvent('changeTab',{
    //             bubbles: true,
    //             detail: e.target,
    //         }));
    //         // this.#tabInstance.changeTab(e.target);
    //         console.log("IN");
    //     });
    // }
    //
    // getAddTabButtonDom() {
    //     return this.#addTabButton;
    // }
    //
    // getHeaderTabList(){
    //     return this.#headerTabList;
    // }