class NavButton {
    #navDom
    #saveBT
    #loadBT
    #TAB_COUNT
    #data

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
        this.#data = data;
        console.log(this.#data);
        console.log(this.#data.title);
        console.log(this.#data.memo);

        // TODO : 문제는 Fetch 에 있었음..!
        fetch("http://localhost:8080/save", {
            method: "POST",
            headers:{'Content-Type': 'application/json',},
            data: {
                title:this.#data.title,
                memo: this.#data.memo
            },
        }).then((response)=>
            console.log(response)
        )

        // $.ajax({
        //     url: '/save',
        //     dataType: 'json',
        //     type: 'POST',
        //     data: {
        //         title: this.#data.title,
        //         memo: this.#data.memo
        //     },
        //     success: function (result) {
        //         if (result === 'ok') {
        //             alert("성공적으로 저장되었습니다.");
        //         }
        //     }
        // });
    }
}