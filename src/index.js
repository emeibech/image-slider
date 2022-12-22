import './styles.css';
import { arrowsUI, dotsUI, imageSlider } from './modules/sliderNavigationUI';

document.addEventListener('DOMContentLoaded', () => {
  imageSlider.renderImageRight(0);
  imageSlider.autoSlider();
  arrowsUI();
  dotsUI();
  imageSlider.dotSlider();
  imageSlider.arrowSlider();
});
