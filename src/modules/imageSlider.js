import { colorDot } from './sliderNavigationUI';
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

    const renderImageRight = (imageNum) => {
        const imageContainer = document.querySelector('.image-container');

        /** This ensures there is only one image in the container before rendering a new one,
         *  which happens when a user clicks the dots faster than the animation duration.
         *  The slider animation fails when there are more than one images. */
        if (imageContainer.childElementCount > 1) {
            imageContainer.removeChild(imageContainer.lastChild);
        }

        const image = createImage(imageNum);
        imageContainer.appendChild(image);
    }

    const renderImageLeft = (imageNum) => {
        const imageContainer = document.querySelector('.image-container');

        if (imageContainer.childElementCount > 1) {
            imageContainer.removeChild(imageContainer.lastChild);
        }

        const image = createImage(imageNum);
        image.classList.add('img-left');
        imageContainer.appendChild(image);
    }

    const removeImage = (image) => {
        setTimeout(() => {
            const imageContainer = document.querySelector('.image-container');
            image.nextElementSibling.setAttribute('data-revert-transition', 'true');
            imageContainer.removeChild(image);
        }, 250);

    }

    const slide = () => {
        setTimeout(() => {
            const image = document.querySelector('.image-container > img:last-child');
            image.classList.add('slide');
        }, 0);
    }

    const autoSlider = () => {
        
        setTimeout(() => {
            const currentImage = document.querySelector('.image-container > img');

            // Get data-image attribute value of currentImage and convert it to a number type
            const imageNum = Number(currentImage.getAttribute('data-image'));

            /** This logic makes it so once the slider has rendered and animated
             *  all the image from imageSource array it will render the first image again */
            if (imageNum < imageSource.length - 1) {
                // Renders new image, animate it, remove previous image, and call autoslider again
                renderImageRight(imageNum + 1);
                slide();
                removeImage(currentImage);
                autoSlider();
                colorDot();
            } else {
                renderImageRight(0);
                slide();
                removeImage(currentImage);
                autoSlider();
                colorDot();
            }

        }, 5000);
    }

    const dotSlider = () => {
        document.querySelector('.navigation-dots').addEventListener('click', (element) => {
            // Makes it so the function stops unless the user clicks on one of the dots
            if (!element.target.matches('[data-dot]')) {
                return
            }

            const currentImage = document.querySelector('.image-container > img');
            const imageNum = Number(currentImage.getAttribute('data-image'));
            const dotNum = Number(element.target.getAttribute('data-dot'));

            // Don't do anything when user clicks on the current active dot
            if (dotNum === imageNum) {
                return
            }

            if (dotNum > imageNum) {
                renderImageRight(dotNum);
                slide();
                removeImage(currentImage);
                colorDot();
            }

            if (dotNum < imageNum) {
                renderImageLeft(dotNum);
                slide();
                removeImage(currentImage);
                colorDot();
            }
        });
    }

    return {
        renderImageRight,
        autoSlider,
        getImageSourceArray,
        dotSlider
    }

})();
