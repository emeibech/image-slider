import leftArrowSRC from '../images/navigation/arrow-left.svg';
import rightArrowSRC from '../images/navigation/arrow-right.svg';

export const navigationArrows = () => {
    const imageContainer = document.querySelector('.image-container');
    const leftArrowContainer = document.createElement('div');
    const rightArrowContainer = document.createElement('div');
    const leftArrow = document.createElement('img');
    const rightArrow = document.createElement('img');
    leftArrowContainer.classList.add('left-arrow');
    rightArrowContainer.classList.add('right-arrow');
    leftArrow.src = leftArrowSRC;
    rightArrow.src = rightArrowSRC;

    leftArrowContainer.appendChild(leftArrow);
    rightArrowContainer.appendChild(rightArrow);
    imageContainer.append(leftArrowContainer, rightArrowContainer);
}

