class NavButton {
    #notepadInstance
    #navDom
    #loadDom
    #saveDom
    #title
    #memo

    TAB_COUNT
    TAB_LIMIT

    constructor() {
        this.TAB_COUNT = 1;
        this.TAB_LIMIT = 5;
    }

    addNav(notepadDom) {
        const t = document.querySelector('.template-button');
        const tmpl = document.importNode(t.content, true);

        this.#navDom = tmpl.querySelector('.notepad-nav');
        this.#navDom.classList.add(`nav${this.TAB_COUNT}`);
        this.#navDom.setAttribute('name', `${this.TAB_COUNT}`);

        this.#saveDom = this.#navDom.querySelector('.saveBT');
        this.#saveDom.innerHTML = `저장(Tab${this.TAB_COUNT})`;
        this.#saveDom.setAttribute('name', `${this.TAB_COUNT}`);

        this.#loadDom = this.#navDom.querySelector('.loadBT');
        this.#loadDom.setAttribute('name', `${this.TAB_COUNT++}`);

        notepadDom.appendChild(this.#navDom);
        this.navButtonEvent();
    }

    navButtonEvent() {
        this.#navDom.addEventListener('click', (e) => {
            console.log(e.target.getAttribute('class'));
            if (e.target.classList.contains('loadBT')) {
                console.log(e.target);
            } else if (e.target.classList.contains('saveBT')) {
                // TODO : 몇번째 탭의 노트패드인지 확인 필요 함
                const list = document.querySelector('.notepad-section').childNodes;
                for (let i = 1; i < list.length; i+=2) {
                    if(e.target.getAttribute('name') ===
                    list[i].getAttribute('name')) {
                        this.#title = list[i].querySelector('.notepadTitle').value;
                        this.#memo = list[i].querySelector('.notepadMemo').value;
                    }
                }

                $.ajax({
                    url: '/save',
                    dataType: 'json',
                    type: 'POST',
                    data: {
                        title: this.#title,
                        memo: this.#memo
                    },
                });
            }
        });
    }
}