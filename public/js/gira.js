// Seleccionar la ruleta
const ruleta = document.querySelector(".ruleta__slice");

// Seleccionar el botón y agregar un evento de clic
const botonGirar = document.querySelector(".ruleta__btn");
botonGirar.addEventListener("click", () => {
  // Obtener la lista de nombres de posibles ganadores
  const nombres = document.querySelector(".player2").value.split("\n");

  // Generar un número aleatorio que corresponda a un índice de la lista de ganadores
  const indiceGanador = Math.floor(Math.random() * nombres.length);

  // Calcular el ángulo de rotación necesario para que la ruleta pare apuntando hacia abajo
  const anguloParada = -(indiceGanador * (360 / nombres.length) + 360);

  // Calcular el ángulo de rotación necesario para que la ruleta gire más rápido
  const anguloGiroRapido = -(indiceGanador * (360 / nombres.length) + 3600);

  // Rotar la ruleta utilizando la propiedad transform de CSS
  ruleta.style.transform = `rotate(${anguloGiroRapido}deg)`;

  // Esperar 1 segundo antes de detener la rotación
  setTimeout(() => {
    // Rotar la ruleta utilizando la propiedad transform de CSS
    ruleta.style.transform = `rotate(${anguloParada}deg)`;

    // Esperar a que la ruleta se detenga antes de mostrar el nombre del ganador
    const intervalo = setInterval(() => {
      // Obtener el ángulo de rotación actual de la ruleta
      const anguloActual = parseInt(
        ruleta.style.transform.replace("rotate(", "").replace("deg)", "")
      );

      // Si la ruleta se detiene, mostrar el nombre del ganador y detener el intervalo
      if (anguloActual === anguloParada) {
        // Mostrar el nombre de los ganadores dentro del elemento HTML, guardarlos en Memoria y mostrarlos
        // en el textArea de la pagina RANK
        const ganadorNombreHTML = document.querySelector(
          ".ganador__popup__name"
        );
        ganadorNombreHTML.textContent = nombres[indiceGanador];

        // Evento para guardar el nombre del ganador en el almacenamiento local
        const ganadorNombre = nombres[indiceGanador];
        let ganadores = JSON.parse(localStorage.getItem("ganadores")) || [];
        ganadores.push(ganadorNombre);
        localStorage.setItem("ganadores", JSON.stringify(ganadores));

        clearInterval(intervalo);
      }
    }, 50);
  }, 1000);
});
