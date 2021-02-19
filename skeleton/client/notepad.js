class Notepad {
    #notepadDom
    #header

    constructor(dom) {
        this.#notepadDom = dom;
        const header = new Header();
        this.#header = header.getHeaderDom();
        console.log(this.#header);
        this.makeHeader(header);
    }

    makeHeader(header){
        this.#notepadDom.appendChild(header.getHeaderDom());
        header.setTabButton();
    }
}