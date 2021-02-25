class Tabs {
    #tabsDom
    #TAB_COUNT
    constructor(count) {
        this.#TAB_COUNT = count;
       this.prepareDom();
       this.setElementAttribute();
       this.changeTitle();
    }

    prepareDom(){
        const t = document.querySelector('.template-tab');
        const tmpl = document.importNode(t.content, true);
        this.#tabsDom = tmpl.querySelector('.notepadTab');
    }

    getDom(){
        return this.#tabsDom;
    }

    setElementAttribute(){
        this.#tabsDom.setAttribute('name', this.#TAB_COUNT);
    }

    changeTitle(){
        document.addEventListener('modifyTitle', (e)=>{
            console.log(e.detail);
        });
    }
}