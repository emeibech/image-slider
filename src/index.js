import './styles.css';
import { imageSlider } from "./modules/imageSlider";
import { navigationArrows, navigationDots } from "./modules/sliderNavigation";

document.addEventListener('DOMContentLoaded', () => {
    navigationArrows();
    imageSlider.renderImage(0);
    imageSlider.autoSlider();
    navigationDots();
});
