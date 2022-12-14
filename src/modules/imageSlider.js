import image0Source from "../images/img0.jpg";
import image1Source from "../images/img1.jpg";

const images = [];
const image1 = image0Source;
const image2 = image1Source;

export const imageSlider = () => {
    const imgContainer = document.querySelector('.image-container');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    img1.src = image0Source;
    img2.src = image1Source;
    // imgContainer.setAttribute('style', `background-image: url(${image2})`);
    images.push(img1, img2)
    imgContainer.appendChild(images[0]);
}