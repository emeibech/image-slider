import image0Source from "../images/img0.jpg";
import image1Source from "../images/img1.jpg";
import image2Source from "../images/img2.jpg";
import image3Source from "../images/img3.jpg";
import image4Source from "../images/img4.jpg";
import image5Source from "../images/img5.jpg";
import image6Source from "../images/img6.jpg";

export const imageSlider = (() => {
    const imageSource = [
        image0Source,
        image1Source,
        image2Source,
        image3Source,
        image4Source,
        image5Source,
        image6Source
    ];

    const imageNodes = [];

    const createImages = (() => {
        imageSource.forEach((item) => {
            const image = document.createElement('img');
            image.src = item;
            image.setAttribute('height', '720px');
            image.setAttribute('width', '1280px');
            imageNodes.push(image);
        });
    })();

    const slider = () => {
        const imageSlider = document.querySelector('.image-slider');
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        
        imageNodes.forEach((item) => {
            imageContainer.appendChild(item);
        });

        imageSlider.appendChild(imageContainer);
    }

    return {
        slider,
    }

})();
