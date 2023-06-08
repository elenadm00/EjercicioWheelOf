// Obtenemos los elementos del DOM
const addBtn = document.querySelector(".btnAdd");
const delBtn = document.querySelector(".btnDel");
const modBtn = document.querySelector(".btnMod");
const input = document.querySelector(".addPlayer");
const textarea = document.querySelector(".player2");

// Creamos un array para almacenar los participantes
let participantes = [];

// Función para actualizar la textarea con los participantes
const updateTextarea = () => {
  textarea.value = participantes.join("\n");
};

// Evento para añadir un participante
addBtn.addEventListener("click", () => {
  const participante = input.value.trim();
  if (participante) {
    participantes.push(participante);
    updateTextarea();
    input.value = "";
  }
});

// Evento para borrar un participante
delBtn.addEventListener("click", () => {
  const participante = input.value.trim();
  if (participante) {
    participantes = participantes.filter((p) => p !== participante);
    if (participantes.length > 0) {
      updateTextarea();
    } else {
      textarea.value = "";
    }
    input.value = "";
  }
});

// Evento para modificar un participante
modBtn.addEventListener("click", () => {
  const participante = input.value.trim();
  const index = participantes.indexOf(participante);
  if (index !== -1) {
    const nuevoParticipante = prompt(
      "Introduce el nuevo nombre del participante:"
    );
    if (nuevoParticipante) {
      participantes[index] = nuevoParticipante;
      updateTextarea();
      input.value = "";
    }
  }
});
