// Função que marca um perfume como vendido (pelo ID)
function marcarVendido(id) {
  const produto = document.getElementById(id);
  if (produto) {
    produto.classList.add("sold"); // adiciona a classe que ativa o blur + texto
  }
}

// Quando a página carregar:
document.addEventListener("DOMContentLoaded", () => {
  // Lista dos perfumes vendidos
  const perfumesVendidos = ["perfume2", "perfume8", "perfume14", "perfume15"]; // <--- altere aqui os IDs dos vendidos

  perfumesVendidos.forEach(id => marcarVendido(id));
  const produto = document.getElementById(id);
    if (produto) produto.classList.add("sold");
  });


