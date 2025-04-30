// Parallax effect for the element with ID 'text'
window.addEventListener('scroll', function() {
    const text1 = document.getElementById('text');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const image = document.getElementById('image'); // Assuming the image has an ID of 'image'
    const scrollPosition = window.scrollY;

    // Adjust the horizontal position of the first element based on scroll
    text1.style.transform = `translateX(${-scrollPosition * 0.5}px)`;

    // Adjust the horizontal position of the second element in the opposite direction
    text2.style.transform = `translateX(${scrollPosition * 0.5}px)`;

    // Adjust the vertical position of the third element based on scroll
    text3.style.transform = `translateX(${scrollPosition * 0.5}px)`;

    // Add fade-up effect to the image when scrolled
    if (scrollPosition > 100) { // Adjust threshold as needed
        image.style.opacity = 1;
        image.style.transform = 'translateY(0)';
    } else {
        image.style.opacity = 0;
        image.style.transform = 'translateY(20px)';
    }
});

// Add transition-in animation when the web page is opened
window.addEventListener('load', function() {
    const text1 = document.getElementById('text');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');

    // Add a class to trigger the animation
    text1.classList.add('fade-in-animation');
    text2.classList.add('fade-in-animation');
    text3.classList.add('fade-in-animation');
});

// Add click event listener to the service button
const serviceButton = document.getElementById('serviceButton');
serviceButton.addEventListener('click', function() {
    const servicesGrid = document.querySelector('.container.services-grid');
    
    // Add the fade-up animation class
    servicesGrid.classList.add('fade-up-animation');
    
    // Remove the animation class after the animation ends to allow re-triggering
    servicesGrid.addEventListener('animationend', function() {
        servicesGrid.classList.remove('fade-up-animation');
    }, { once: true });
});

