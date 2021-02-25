class NavButton {
    #navDom
    #saveBT
    #loadBT
    #TAB_COUNT

    constructor(count) {
        this.#TAB_COUNT = count;
        this.prepareDom();
        this.setElementAttribute();
        this.changeTitle();
    }

    prepareDom() {
        const t = document.querySelector('.template-nav');
        const tmpl = document.importNode(t.content, true);
        this.#navDom = tmpl.querySelector('.notepad-nav');
        this.#loadBT = this.#navDom.querySelector('.loadBT');
        this.#saveBT = this.#navDom.querySelector('.saveBT');
    }

    getDom() {
        return this.#navDom;
    }

    setElementAttribute() {
        this.#navDom.setAttribute('name', this.#TAB_COUNT);
    }

    changeTitle() {
        this.#saveBT.addEventListener('click', (e) => {
            e.target.dispatchEvent(new CustomEvent('changeTitle', {
                bubbles: true,
                detail: e.target.parentNode.getAttribute('name')
            }));

        });
    }

    saveEvent(data){
        console.log("saveEvent!!");
        console.log(data.title);
        console.log(data.memo);
        fetch("http://localhost:8080/save", {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json',
            },
            data: JSON.stringify(data),
        }).then((response)=>
            console.log(response));
    }
}