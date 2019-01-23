document.getElementById("pantallaDos").style.display="none"
const inicio = document.getElementById("inicio")
const clave = document.getElementById("clave");
const cifrar = document.getElementById("cifrar");
const button = document.getElementById("mensajeCifrado")
const buttonDecifrar = document.getElementById("mensajeDecifrado")
const buttonReset = document.getElementById("reset")/*.addEventListener("click", reset);*/

const comenzar = () => {
  document.getElementById("pantallaUno").style.display="none"
  document.getElementById("pantallaDos").style.display="block"
};
inicio.addEventListener("click", comenzar);


button.addEventListener("click", () => {
  const claveResultado = parseInt(clave.value);
  const cifrarResultado = cifrar.value;
  document.getElementById("decifrar").innerHTML = window.cipher.encode(claveResultado, cifrarResultado);
});

buttonDecifrar.addEventListener("click", () => {
  const claveResultadoDecifrar = parseInt(clave.value);
  const cifrarResultadoDecifrar = cifrar.value;
  document.getElementById("decifrar").innerHTML = window.cipher.decode(claveResultadoDecifrar, cifrarResultadoDecifrar);
});

const reset = () => {
   document.getElementById("cifrar").value = "";
   document.getElementById("decifrar").innerHTML = "";
   document.getElementById("clave").value = "";
};
buttonReset.addEventListener("click", reset);
