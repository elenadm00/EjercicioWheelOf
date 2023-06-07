const ganador = localStorage.getItem('ganadorNombre');
if (ganador) {
  const textarea = document.querySelector('.player');
  textarea.value += ganador + '\n';
}