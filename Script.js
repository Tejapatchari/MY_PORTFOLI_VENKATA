// You can add more complex JavaScript if needed, but for a portfolio,
// simple smooth scrolling is often a nice touch.

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of a simple "scroll to top" button (optional)
// You would add a button in your HTML like: <button id="scrollToTopBtn" title="Go to top">Top</button>
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var mybutton = document.getElementById("scrollToTopBtn");
    if (mybutton) { // Check if the button exists
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

// Function to scroll to the top of the document (for the button)
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Attach the topFunction to the button (if it exists)
document.addEventListener('DOMContentLoaded', (event) => {
    var mybutton = document.getElementById("scrollToTopBtn");
    if (mybutton) {
        mybutton.addEventListener('click', topFunction);
    }
});