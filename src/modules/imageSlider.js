import image1 from "../images/img1.jpg";
import image2 from "../images/img2.jpg";

const images = [];
const img1SRC = image1;
const img2SRC = image2;

const content = document.querySelector('.content');

export const imageSlider = () => {
    const imgContainer = document.querySelector('.image-container');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    img1.src = img1SRC;
    img2.src = img2SRC;
    console.log(images);
    images.push(img1, img2);
    console.log(images);
    images.forEach((item) => {
        imgContainer.appendChild(item);
    });
}