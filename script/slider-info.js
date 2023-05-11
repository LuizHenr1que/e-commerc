const lista = document.querySelector(".lista-info")

const slider = (e) => {
    lista.scrollLeft = e.pageX;
}

if (window.innerWidth === 450) {
    lista.addEventListener("mousemove", slider); 
}
