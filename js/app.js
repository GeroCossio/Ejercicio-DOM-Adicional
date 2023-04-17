function generarSeleccionComputadora() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
  }

  function jugarRonda(seleccionJugador, seleccionComputadora) {
    if (seleccionJugador === seleccionComputadora) {
      alert(`Empate! Intenta de nuevo`);
    } else if (
      (seleccionJugador === 'piedra' && seleccionComputadora === 'tijera') ||
      (seleccionJugador === 'papel' && seleccionComputadora === 'piedra') ||
      (seleccionJugador === 'tijera' && seleccionComputadora === 'papel')
    ) {
      alert(`¡Ganaste! ${seleccionJugador} vence a ${seleccionComputadora}`);
    } else {
      alert(`Perdiste. ${seleccionComputadora} vence a ${seleccionJugador}, la proxima sera`);
    }
  }
  
  const botones = document.querySelectorAll('button');
  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      jugarRonda(boton.id, generarSeleccionComputadora());
    });
  });
  