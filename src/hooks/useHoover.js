const allHoverImages = document.querySelectorAll('.img-hover div img');
const imgContainer = document.querySelector('.img-product-left');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        imgContainer.querySelector('img').src = image.src;
        image.parentElement.classList.add('active');
        resetActiveImg();
    });
});

function resetActiveImg() {
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}