// Smooth fade-in animation for all sections
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("section, aside, table");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => {
        el.classList.add("fade-in");
        observer.observe(el);
    });
});

// Alert when clicking on "Email Me" or "Call Me"
document.addEventListener("click", e => {
    if (e.target.matches("a[href^='mailto']")) {
        alert("Opening your default Email app...");
    }

    if (e.target.matches("a[href^='tel']")) {
        alert("Calling now…");
    }
});

// Smooth scrolling highlight
const navLinks = document.querySelectorAll("nav a[href^='#']");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        link.style.color = "#4cc9f0";  
        setTimeout(() => {
            link.style.color = "white";
        }, 1200);
    });
});