// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Animate header logo on mouse enter/leave for a playful effect
    const logo = document.querySelector("header .logo img");
    
    // Add a subtle pulse effect on hover using a CSS class
    logo.addEventListener("mouseenter", () => {
        logo.style.transform = "scale(1.1)";
    });
    
    logo.addEventListener("mouseleave", () => {
        logo.style.transform = "scale(1)";
    });

    // Example of input focus animation: change background color briefly
    const searchInput = document.querySelector("main input");
    searchInput.addEventListener("focus", () => {
        searchInput.style.backgroundColor = "#ffe6e6";
    });
    searchInput.addEventListener("blur", () => {
        searchInput.style.backgroundColor = "#fff";
    });

    // Optional: simple scroll animation for header color change on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            document.querySelector("header").style.backgroundColor = "#b20710";
        } else {
            document.querySelector("header").style.backgroundColor = "#e50914";
        }
    });

    // Add hover animation for header links
    const headerLinks = document.querySelectorAll("header ul li a");
    
    headerLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#ffd6d6"; // Light red on hover
            link.style.transform = "translateY(-2px)"; // Slight upward shift
            link.style.transition = "transform 0.2s ease, color 0.2s ease";
        });

        link.addEventListener("mouseleave", () => {
            link.style.color = "#ffffff"; // Original white color
            link.style.transform = "translateY(0)";
        });
    });
});
