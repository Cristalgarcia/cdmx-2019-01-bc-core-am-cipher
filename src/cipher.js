


window.cipher = {
  encode:(offset, string) =>{
    let textCrifrado= "";
    //Recorrer cada uno de los caracteres del mensaje
    for (let i = 0; i < string.length; i++){
      let codigo=(string.charCodeAt(i) - 65 + offset) % 26 + 65;
      let resultado=String.fromCharCode(codigo);
      textCrifrado+= resultado;
    }
    document.getElementById('decifrar').innerHTML = textCifrado;
    return textCrifrado
  }
};