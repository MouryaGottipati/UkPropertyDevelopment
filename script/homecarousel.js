document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.image-carousel .image-container');
    const circles = document.querySelectorAll('.circle');
    let currentIndex = 0;

    function showImage(index) {
        imageContainers.forEach(function (imageContainer) {
            imageContainer.classList.remove('active');
        });
        imageContainers[index].classList.add('active');
        circles.forEach(function (circle) {
            circle.classList.remove('active');
        });
        circles[index].classList.add('active');
    }

    function toggleImage(index) {
        showImage(index);
        currentIndex = index;
    }

    circles.forEach(function (circle, index) {
        circle.addEventListener('click', function () {
            toggleImage(index);
        });
    });

    function nextImage() {
        currentIndex++;
        if (currentIndex >= imageContainers.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = imageContainers.length - 1;
        }
        showImage(currentIndex);
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            prevImage();
        } else if (event.key === 'ArrowRight') {
            nextImage();
        }
    });

    document.querySelector('.arrow-left').addEventListener('click', prevImage);
    document.querySelector('.arrow-right').addEventListener('click', nextImage);

    showImage(currentIndex);
});