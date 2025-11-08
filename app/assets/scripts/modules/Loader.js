import { Modal } from 'bootstrap';
class Loader {
    constructor() {
        this.modalElement = document.querySelector('.subsidiaryModal');
        this.modal = new Modal(this.modalElement);
        this.init();
    }

    init() {
        setTimeout(() => {
            this.modal.show();
        }, 3000);        
    }
}

export default Loader;