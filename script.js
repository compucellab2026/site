// Funcionalidades JavaScript para o catálogo de perfumes

document.addEventListener("DOMContentLoaded", () => {
  // Animação suave para links de navegação
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Adiciona efeito de clique
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = ""
      }, 150)
    })
  })

  // Efeito hover nos cards de produtos
  const productCards = document.querySelectorAll(".product-card")
  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Animação de entrada para elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observar elementos para animação
  const animatedElements = document.querySelectorAll(".product-card, .feature-card")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Smooth scroll para links internos
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]')
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Adicionar classe ativa ao link da página atual
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href")
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active")
    }
  })

  // Efeito de loading suave para imagens
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    // Se a imagem já estiver carregada
    if (img.complete) {
      img.style.opacity = "1"
    } else {
      img.style.opacity = "0"
      img.style.transition = "opacity 0.3s ease"
    }
  })
})

// Função para mostrar detalhes do produto (pode ser expandida)
function showProductDetails(productName) {
  //alert(`Detalhes do produto: ${productName}\n\nEm breve, mais informações sobre este perfume!`)
}

// Adicionar event listeners para os cards de produto
document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product-card")
  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      const productName = this.querySelector("h3").textContent
      showProductDetails(productName)
    })

    // Adicionar cursor pointer
    card.style.cursor = "pointer"
  })
})

// JavaScript para abrir e fechar o popup
const popup = document.getElementById('popup');
const explorarBtn = document.getElementById('explorarBtn');
const closeBtn = document.getElementById('closeBtn');

explorarBtn.addEventListener('click', () => {
  popup.classList.remove('hide');
  popup.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hide'); // inicia animação de fechamento
  popup.classList.remove('show');

  // Espera a animação terminar antes de esconder totalmente
  setTimeout(() => {
    popup.style.display = 'none';
    popup.classList.remove('hide'); // limpa a classe hide
  }, 200); // tempo igual ao zoomOut + fade-out do CSS
});

// Fechar ao clicar fora do conteúdo
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closeBtn.click();
  }
});



