const clave = document.getElementById("clave");
const cifrar = document.getElementById("cifrar");
const button = document.getElementById("mensajeCifrado")
const buttonDecifrar = document.getElementById("mensajeDecifrado")
const buttonReset = document.getElementById("reset");

button.addEventListener("click", () => {
  const claveResultado = parseInt(clave.value);
  const cifrarResultado = cifrar.value.toUpperCase();
  document.getElementById("decifrar").innerHTML = window.cipher.encode(claveResultado, cifrarResultado);
});

buttonDecifrar.addEventListener("click", () => {
  const claveResultadoDecifrar = parseInt(clave.value);
  const cifrarResultadoDecifrar = cifrar.value.toUpperCase();
  document.getElementById("decifrar").innerHTML = window.cipher.decode(claveResultadoDecifrar, cifrarResultadoDecifrar);
});

const reset = () => {
   location.reload(true);
};
buttonReset.addEventListener("click", reset);




