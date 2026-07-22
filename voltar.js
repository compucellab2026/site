(function(){
  const homepage = '/index.html'; // Defina sua página inicial aqui

  // Cria o botão automaticamente
  const btn = document.createElement('button');
  btn.id = 'btn-voltar';
  btn.className = 'btn';
  btn.setAttribute('aria-label', 'Voltar');
  btn.setAttribute('title', 'Voltar');
  btn.innerHTML = `
    <span class="icon" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <span class="label">Voltar</span>
  `;
  document.body.appendChild(btn);

  // Mostra/esconde botão com fade + slide
  const toggleButton = () => {
    if(window.scrollY > 200){
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
    } else {
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(20px)';
    }
  }
  window.addEventListener('scroll', toggleButton);
  toggleButton();

  // Clique do botão: volta direto para página inicial
  btn.addEventListener('click', () => {
    window.location.href = homepage;
  });
})();
