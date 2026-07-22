function extrairPreco(texto) {
  return parseFloat(
    texto.replace("R$", "")
         .replace(/\./g, "")
         .replace(",", ".")
         .trim()
  );
}

function ordenarPrecos(ordem) {
  const grid = document.querySelector(".products-grid");
  const cards = Array.from(grid.querySelectorAll(".product-card"));

  cards.sort((a, b) => {
    const precoA = extrairPreco(
      a.querySelector(".product-price").innerText
    );
    const precoB = extrairPreco(
      b.querySelector(".product-price").innerText
    );

    return ordem === "asc"
      ? precoA - precoB
      : precoB - precoA;
  });

  cards.forEach(card => grid.appendChild(card));
}
