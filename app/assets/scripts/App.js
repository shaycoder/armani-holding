import '../styles/styles.css';
import AOS from 'aos';

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