// Simple scroll fade-in animations

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight / 1.3;
    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add("visible");
        }
    });
});
