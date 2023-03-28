/*Script do botão menu*/
const menu = document.querySelector('#menu');
menu.addEventListener('click', () => {
  const menuDiv = document.querySelector('.header-container nav ul');
  menuDiv.style.display = menuDiv.style.display == 'none' ? 'flex' : 'none';
})

/*Script de mudança de tema*/
/*Note que a mudança de tema é feita com adição e remoção da classe
tema escuro, que está definida no css*/
const tema = document.querySelector('#tema');
let contador = 0;

tema.addEventListener('click', () => {
  const html = document.querySelector('html');
  if (contador === 0) {
    html.classList.add('tema-claro');
    contador = 1;
  } else {
    html.classList.remove('tema-claro');
    contador = 0;
  }
});





