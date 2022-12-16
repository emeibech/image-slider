import leftArrowSource from '../images/navigation/arrow-left.svg';
import rightArrowSource from '../images/navigation/arrow-right.svg';

export const navigationArrows = () => {
    const imageSlider = document.querySelector('.image-slider');
    const leftArrowContainer = document.createElement('div');
    const rightArrowContainer = document.createElement('div');
    const leftArrow = document.createElement('img');
    const rightArrow = document.createElement('img');
    leftArrowContainer.classList.add('left-arrow');
    rightArrowContainer.classList.add('right-arrow');
    leftArrow.src = leftArrowSource;
    rightArrow.src = rightArrowSource;
    leftArrowContainer.appendChild(leftArrow);
    rightArrowContainer.appendChild(rightArrow);
    imageSlider.append(leftArrowContainer, rightArrowContainer);
}

