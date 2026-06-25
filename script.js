const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "translateY(-3px)"
    });

    link.addEventListener("mouseleave", () => {
        link.style.transform = "translateY(0)"
    })
})