document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container .image-item img');
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        window.open(this.src, '_blank');
      });
    });
  });