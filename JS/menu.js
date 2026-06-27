const paginaAtual = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
    if(link.getAttribute("href") === paginaAtual){
        link.classList.add("active");
    }
})