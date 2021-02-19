class EventListener{
    #eventDom
    constructor() {
    }

    // 탭 추가 이벤트 리스너
    addHeaderTab(dom){
        this.#eventDom = dom;
        console.log(this.#eventDom);
        this.#eventDom.addEventListener('click', () =>{
            this.#eventDom.dispatchEvent(new CustomEvent("add-tab", {
                bubbles: true,
                detail: {
                    dom: this.#eventDom
                }
            }));
        });
    }

    addNotepadTab(dom){
        this.#eventDom = dom;
        this.#eventDom.addEventListener('')
    }


}