import image1SRC from "../images/img1.jpg";
import image2SRC from "../images/img2.jpg";

const images = [];
const image1 = image1SRC;
const image2 = image2SRC;

const content = document.querySelector('.content');

export const imageSlider = () => {
    const imgContainer = document.querySelector('.image-container');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    imgContainer.setAttribute('style', `background-image: url(${image1})`)
    // img1.src = img1SRC;
    // img2.src = img2SRC;
    // images.push(img1, img2);
    // images.forEach((item) => {
    //     imgContainer.appendChild(item);
    // });
}