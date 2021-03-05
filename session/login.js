class Login{
    #dom
    #id
    #pw
    #login
    constructor(dom) {
        this.#dom = dom;
        this.#id = this.#dom.querySelector('.login-id');
        this.#pw = this.#dom.querySelector('.login-pw');
        this.#login = this.#dom.querySelector('.submit');
        this.loginEventListener();
    }

    loginEventListener(){
        this.#login.addEventListener('click', ()=>{
           const data = {
               id : this.getID(),
               pw : this.getPW()
           }
        });


    }

    getID(){
        console.log(this.#id.value);
        return this.#id.value;
    }

    getPW(){
        console.log(this.#pw.value);
        return this.#pw.value;
    }


}