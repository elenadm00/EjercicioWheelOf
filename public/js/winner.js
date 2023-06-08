const ganadores = JSON.parse(localStorage.getItem("ganadores")) || [];
if (ganadores.length > 0) {
  const textarea = document.querySelector(".player");
  textarea.value = ganadores.join("\n");
}
