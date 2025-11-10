const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("closeBtn");
const header = document.querySelector("header");   // <-- selecciona el header

// ✅ Abre modal
function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
    header.classList.add("blur-header");   // <-- oscurecer header
}

// ✅ Cierra con la X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    header.classList.remove("blur-header");
});

// ✅ Cierra haciendo clic fuera de la imagen
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        header.classList.remove("blur-header");
    }
});