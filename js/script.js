function exibirMenu() {
  const menuDiv = document.querySelector('#listaDoMenu');
  menuDiv.style.display = menuDiv.style.display == 'none' ? 'flex' : 'none';
}

function mudarTema() {
  const html = document.querySelector('html');
  html.classList.contains('tema-claro') ? html.classList.remove('tema-claro') : html.classList.add('tema-claro');
}

document.addEventListener('click', e => {
  if (e.target.id === 'menu') exibirMenu();
  if (e.target.id === 'tema') mudarTema();
})



