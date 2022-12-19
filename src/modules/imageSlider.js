import { colorDot } from './sliderNavigation';
import imageSource0 from '../images/img0.jpg';
import imageSource1 from '../images/img1.jpg';
import imageSource2 from '../images/img2.jpg';
import imageSource3 from '../images/img3.jpg';
import imageSource4 from '../images/img4.jpg';
import imageSource5 from '../images/img5.jpg';
import imageSource6 from '../images/img6.jpg';

export const imageSlider = (() => {
    const imageSource = [
        imageSource0,
        imageSource1,
        imageSource2,
        imageSource3,
        imageSource4,
        imageSource5,
        imageSource6
    ];

    const getImageSourceArray = () => {
        return imageSource;
    };

    const createImage = (imageNum) => {
        const image = document.createElement('img');
        image.src = imageSource[imageNum];
        image.setAttribute('height', '720px');
        image.setAttribute('width', '1280px');
        image.setAttribute('data-image', `${imageNum}`);
        return image;
    }

    const renderImage = (imageNum) => {
        const imageContainer = document.querySelector('.image-container');
        const image = createImage(imageNum);
        imageContainer.appendChild(image);
    }

    const removeImage = (image) => {
        setTimeout(() => {
            const imageContainer = document.querySelector('.image-container');
            image.nextElementSibling.style.transition = 'none';
            image.nextElementSibling.style.translate = '0%';
            imageContainer.removeChild(image);
        }, 550);
    }

    const animateRight = () => {
        setTimeout(() => {
            const image = document.querySelector('.image-container > img:last-child');
            image.classList.add('animate-right');
        }, 50);
    }

    const autoSlider = () => {
        setTimeout(() => {
            const currentImage = document.querySelector('.image-container > img');

            // Get data-image attribute value of currentImage and convert it to a number type
            const imageNum = Number(currentImage.getAttribute('data-image'));

            // This logic makes it so once the slider has rendered and animated
            //  all the image from imageSource array it will render the first image again
            if (imageNum < imageSource.length - 1) {
                // Renders new image, animate it, remove previous image, and call autoslider again
                renderImage(imageNum + 1);
                animateRight();
                removeImage(currentImage);
                autoSlider();
                colorDot();
            } else {
                renderImage(0);
                animateRight();
                removeImage(currentImage);
                autoSlider();
                colorDot();
            }

        }, 5000);
    }

    return {
        renderImage,
        autoSlider,
        getImageSourceArray
    }

})();
