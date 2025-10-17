// Seleciona os elementos
const menuToggle = document.getElementById("menuToggle")
const drawer = document.getElementById("mobileDrawer")
const overlay = document.getElementById("overlay")

// Função para abrir/fechar o menu
function toggleMenu() {
  const isOpen = drawer.classList.toggle("open")
  overlay.classList.toggle("show", isOpen)
  menuToggle.classList.toggle("open", isOpen)

  // Atualiza atributos de acessibilidade
  menuToggle.setAttribute("aria-expanded", String(isOpen))
  drawer.setAttribute("aria-hidden", String(!isOpen))
}

// Evento de clique no botão
menuToggle.addEventListener("click", toggleMenu)

// Fecha o menu ao clicar no overlay
overlay.addEventListener("click", () => {
  drawer.classList.remove("open")
  overlay.classList.remove("show")
  menuToggle.classList.remove("open")
  menuToggle.setAttribute("aria-expanded", "false")
  drawer.setAttribute("aria-hidden", "true")
})

// Fecha com tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    drawer.classList.remove("open")
    overlay.classList.remove("show")
    menuToggle.classList.remove("open")
    menuToggle.setAttribute("aria-expanded", "false")
    drawer.setAttribute("aria-hidden", "true")
  }
})

// Fecha automaticamente se redimensionar para desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    drawer.classList.remove("open")
    overlay.classList.remove("show")
    menuToggle.classList.remove("open")
    menuToggle.setAttribute("aria-expanded", "false")
    drawer.setAttribute("aria-hidden", "true")
  }
})
