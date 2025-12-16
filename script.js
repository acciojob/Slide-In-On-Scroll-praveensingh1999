// Your JS code here.
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add active class to images in viewport
function slideInImages() {
    const images = document.querySelectorAll('.slide-in-image');
    images.forEach(image => {
        if (isInViewport(image)) {
            image.classList.add('active');
        }
    });
}

// Attach the debounced function to the scroll event
window.addEventListener('scroll', debounce(slideInImages, 100));

// Initial check in case images are already in view on page load
slideInImages();