const ruleta = document.querySelector('.Roul #roule');
ruleta.addEventListener('click', girar);

function girar() {
  let rand = Math.random() * 7200;
  calcular(rand);

  function calcular(rand) {
    valor = rand / 360;
    valor = (valor-parseInt(valor.toString().split(".")[0]))*360;
    ruleta.style.transform = "rotate("+rand+"deg)";
   
    setTimeout(() => {
        switch(true){
        case valor > 0 && valor <= 5:
            alert("HA GANADO");
        break;
        case valor > 6 && valor <= 15:
            alert("HA GANADO");
        break;
        case valor > 16 && valor <= 25:
            alert("HA GANADO");
        break;
        case valor > 26 && valor <= 35:
            alert("HA GANADO");
        break;
        case valor > 36 && valor <= 45:
            alert("HA GANADO");
        break;
        case valor > 46 && valor <= 55:
            alert("HA GANADO");
        break;
        case valor > 56 && valor <= 65:
            alert("HA GANADO");
        break;
        case valor > 66 && valor <= 75:
            alert("HA GANADO");
        break;
        case valor > 76 && valor <= 85:
            alert("HA GANADO");
        break;
        case valor > 86 && valor <= 95:
            alert("HA GANADO");
        break;
    }
    }, 5000);
  }
}
