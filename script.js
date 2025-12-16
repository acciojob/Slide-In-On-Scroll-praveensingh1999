// Your JS code here.
<img class="slide-in-image" src="image1.jpg" alt="Image 1" style="margin-top: 100vh;">
    <img class="slide-in-image" src="image2.jpg" alt="Image 2" style="margin-top: 100vh;">
    <img class="slide-in-image" src="image3.jpg" alt="Image 3" style="margin-top: 100vh;">

    <script>
        // Debounce function
        function debounce(func, wait) {
            let timeout;
            return function(...args) {
                const context = this;
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(context, args), wait);
            };
        }

        // Check if the element is in the viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to add the 'active' class
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
        slideInImages(); // Initial check