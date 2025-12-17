// Text to type out
const text = "Web Developer | Designer | Creator";
const typingElement = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Speed of typing (100ms)
    }
}

// Start the animation when the window loads
window.onload = typeWriter;

// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});