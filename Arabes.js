document.addEventListener('DOMContentLoaded', () => {
  const openEl = document.getElementById('openPopup');
  const popup = document.getElementById('popup');
  const closeEl = document.getElementById('closePopup');
  const popupContent = popup.querySelector('.popup-content');

  if (!openEl || !popup || !closeEl) {
    console.error("Erro: Elementos do popup não foram encontrados.");
    return;
  }

  // ABRIR POPUP
  openEl.addEventListener('click', () => {
    popup.classList.remove('hide');
    popup.classList.add('show');
    popup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  // FECHAR POPUP
  function fecharPopup() {
    popup.classList.remove('show');
    popup.classList.add('hide');
    popup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeEl.addEventListener('click', fecharPopup);

  popup.addEventListener('click', (e) => {
    if (e.target === popup) fecharPopup();
  });

  popupContent.addEventListener('animationend', (e) => {
    if (popup.classList.contains('hide')) popup.classList.remove('hide');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('show')) fecharPopup();
  });
});

