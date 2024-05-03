document.addEventListener("DOMContentLoaded", () => {
    const aboutBtn = document.getElementById("aboutBtn");
    const aboutBox = document.getElementById("aboutBox");

    aboutBtn.addEventListener("click", () => {
        aboutBox.classList.toggle("hidden"); // Toggle the "hidden" class on click
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutBtn = document.getElementById("contactBtn");
    const aboutBox = document.getElementById("contactBox");

    aboutBtn.addEventListener("click", () => {
        aboutBox.classList.toggle("hidden"); // Toggle the "hidden" class on click
    });
});

function toggleContent(element) {
    element.classList.toggle('expanded');
    const content = element.querySelector('.content');
    content.classList.toggle('hidden');

}

document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll('.image-container img');
    let currentIndex = 0;

    setInterval(function() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }, 1000); // Change the interval time (in milliseconds) as needed
});

