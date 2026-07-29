// =========================
// EULAINE MODAS
// script.js
// =========================

// Atualiza o ano do rodapé automaticamente
const ano = document.getElementById("ano");
if (ano) {
    ano.textContent = new Date().getFullYear();
}

// Menu mobile
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Botão voltar ao topo
const voltarTopo = document.getElementById("voltar-topo");

window.addEventListener("scroll", () => {

    if (!voltarTopo) return;

    if (window.scrollY > 400) {
        voltarTopo.style.display = "block";
    } else {
        voltarTopo.style.display = "none";
    }

});

if (voltarTopo) {
    voltarTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Pesquisa de produtos
const pesquisa = document.getElementById("pesquisa");
const produtos = document.querySelectorAll(".produto");

if (pesquisa) {

    pesquisa.addEventListener("keyup", () => {

        const texto = pesquisa.value.toLowerCase();

        produtos.forEach(produto => {

            produto.style.display =
                produto.innerText.toLowerCase().includes(texto)
                ? "block"
                : "none";

        });

    });

}

// Animação ao aparecer na tela
const elementos = document.querySelectorAll(".animar");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

        }

    });

});

elementos.forEach((item) => observador.observe(item));

console.log("Eulaine Modas carregado com sucesso.");
