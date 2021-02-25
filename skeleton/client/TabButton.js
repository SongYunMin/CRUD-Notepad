class TabButton{
    #tabButtonDom
    #tabBT
    constructor() {
        this.prepareDom();
        this.setAttribute();
    }

    prepareDom(){
        const t = document.querySelector('.template-tabBT');
        const tmpl = document.importNode(t.content, true);
        this.#tabButtonDom = tmpl.querySelector('.tabBT-li');
        this.#tabBT = this.#tabButtonDom.querySelector('.tabBT-bt');
    }

    // TODO : 탭에 들어갈 속성값 세팅
    setAttribute(){

    }

    getDom(){
        return this.#tabButtonDom;
    }
}
