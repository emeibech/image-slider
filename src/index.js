import './styles.css';
import { imageSlider } from "./modules/imageSlider";
import { arrowsUI, dotsUI } from "./modules/sliderNavigationUI";

document.addEventListener('DOMContentLoaded', () => {
    imageSlider.renderImageRight(0);
    // imageSlider.autoSlider();
    arrowsUI();
    dotsUI();
    imageSlider.dotSlider();
});

imageSlider.getImageSourceArray();