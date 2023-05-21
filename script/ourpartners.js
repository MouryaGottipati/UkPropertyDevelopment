const partnerImages = Array.from(document.getElementsByClassName('partner-image'));
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
let currentIndex = 0;

// Function to update partner visibility
function updatePartnerVisibility() {
  partnerImages.forEach((image, index) => {
    if (index >= currentIndex && index < currentIndex + getNumberOfImagesPerRow()) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

// Function to handle click event on partner image
function handleImageClick() {
  const link = this.dataset.link;
  window.open(link, '_blank');
}

// Function to handle click event on previous arrow
function handlePrevArrowClick() {
  if (currentIndex === 0) {
    currentIndex = partnerImages.length - getNumberOfImagesPerRow();
  } else {
    currentIndex--;
  }
  
  updatePartnerVisibility();
}

// Function to handle click event on next arrow
function handleNextArrowClick() {
  if (currentIndex === partnerImages.length - getNumberOfImagesPerRow()) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  
  updatePartnerVisibility();
}

// Function to calculate the number of images per row based on the screen size
function getNumberOfImagesPerRow() {
  const screenWidth = window.innerWidth;
  
  if (screenWidth >= 1200) {
    return 4;
  } else if (screenWidth >= 992) {
    return 3;
  } else if (screenWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
}

// Attach click event listener to partner images
partnerImages.forEach(image => {
  image.addEventListener('click', handleImageClick);
});

// Attach click event listener to navigation arrows
prevArrow.addEventListener('click', handlePrevArrowClick);
nextArrow.addEventListener('click', handleNextArrowClick);

// Set initial partner visibility
updatePartnerVisibility();

// Update partner visibility on window resize
window.addEventListener('resize', () => {
  updatePartnerVisibility();
});
