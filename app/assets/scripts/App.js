import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './modules/Loader';
import AOS from 'aos';
import '../styles/styles.css';

// init AOS animation
window.addEventListener("load", () => {
    AOS.init({
        duration: 1000,
        offset: 100,
    });
});

if(module.hot) {
    module.hot.accept()
}

new Loader();

