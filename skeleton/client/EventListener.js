class EventListener {
    #eventDom
    #option

    constructor() {
    }

    handleEvent(dom, option) {
        this.#option = option;
        if (option.add_tab) {
            this.addHeaderTab(dom);
        } else if (option.handle_tab) {
            this.handleTabEvent(dom);
        }
    }

    // 탭 추가 이벤트 리스너
    addHeaderTab(dom) {
        this.#eventDom = dom;
        console.log(this.#eventDom);
        this.#eventDom.addEventListener('click', () => {
            this.#eventDom.dispatchEvent(new CustomEvent("add-tab", {
                bubbles: true,
                detail: {
                    dom: this.#eventDom
                }
            }));
        });
    }

    handleTabEvent(dom) {
        this.#eventDom = dom;
        this.#eventDom.addEventListener('click', (e) =>{
            console.log(e.target);
           this.#eventDom.dispatchEvent(new CustomEvent("click-tab",{
               bubbles: true,
               detail: {
                   dom:this.#eventDom
               }
           })) ;
        });
    }

}