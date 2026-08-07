// Portfolio interactions and animations
const loader = document.getElementById("loader");
const themeToggle = document.getElementById("themeToggle");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const scrollTopBtn = document.getElementById("scrollTop");
const typingText = document.getElementById("typingText");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const yearSpan = document.getElementById("year");

const phrases = [
    "Turning data into insight",
    "Building business dashboards",
    "Solving problems with analytics",
    "Creating clarity from complexity"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex--);
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex > currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1000);
        return;
    }

    if (isDeleting && charIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(typeLoop, isDeleting ? 60 : 100);
}

function initTheme() {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector("i");
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    updateThemeIcon();
}

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 }
    );

    reveals.forEach((section) => observer.observe(section));
}

function handleScroll() {
    const shouldShow = window.scrollY > 600;
    scrollTopBtn.classList.toggle("visible", shouldShow);

    const sections = document.querySelectorAll("main section[id]");
    let current = "home";

    sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            current = section.id;
        }
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeNav() {
    navLinks.classList.remove("open");
}

if (loader) {
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("is-hidden");
        }, 800);
    });
}

if (typingText) {
    typeLoop();
}

initTheme();
revealOnScroll();

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", closeNav);

if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
}

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", closeNav);
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", scrollToTop);
}

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        formStatus.textContent = "Thank you for your message. I will be in touch soon.";
        contactForm.reset();
    });
}

yearSpan.textContent = new Date().getFullYear();