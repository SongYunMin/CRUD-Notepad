class EventListener{
    #eventDom
    constructor() {
    }

    addTab(dom){
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
}