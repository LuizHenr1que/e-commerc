const lista = document.querySelector(".lista-info")

const slider = (e) => {
    lista.scrollLeft = e.pageX;
}

lista.addEventListener("mousemove", slider); 
