import leftArrowSource from '../images/navigation/arrow-left.svg';
import rightArrowSource from '../images/navigation/arrow-right.svg';
import { imageSlider } from './imageSlider';

const arrowsUI = () => {
    const imageSlider = document.querySelector('.image-slider');
    const leftArrowContainer = document.createElement('div');
    const rightArrowContainer = document.createElement('div');
    const leftArrow = document.createElement('img');
    const rightArrow = document.createElement('img');
    leftArrowContainer.classList.add('left-arrow');
    leftArrowContainer.setAttribute('data-direction', 'left');
    rightArrowContainer.classList.add('right-arrow');
    rightArrowContainer.setAttribute('data-direction', 'right');
    leftArrow.src = leftArrowSource;
    rightArrow.src = rightArrowSource;
    leftArrowContainer.appendChild(leftArrow);
    rightArrowContainer.appendChild(rightArrow);
    imageSlider.append(leftArrowContainer, rightArrowContainer);
}

const dotsUI = () => {
    const slider = document.querySelector('.image-slider');
    const rightArrow = document.querySelector('.right-arrow');
    const dotsContainer = document.createElement('div');
    imageSlider.getImageSourceArray().forEach((item, index) => {
        const div = document.createElement('div');
        div.setAttribute('data-dot', index);
        dotsContainer.appendChild(div);
    });

    dotsContainer.classList.add('navigation-dots');
    slider.insertBefore(dotsContainer, rightArrow);
    colorDot();
}

const colorDot = () => {
    const image = document.querySelector('.image-container > img:last-child');
    const dots = document.querySelectorAll('.navigation-dots div');
    let imageNum = image.getAttribute('data-image');
    dots.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('data-dot') === imageNum) {
            item.classList.add('active');
        }
    });
}

export { 
    arrowsUI,
    dotsUI,
    colorDot
}
