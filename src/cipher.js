window.cipher = {
  encode:(offset, string) =>{
    let textCifrado= "";
    //Recorrer cada uno de los caracteres del mensaje
    for (let i = 0; i < string.length; i++){
      let codigo=(string.charCodeAt(i) - 65 + offset) % 26 + 65;
      let resultado=String.fromCharCode(codigo);
      textCifrado+= resultado;
    } 
    return textCifrado
  },

  decode:(offset, string) =>{
    let textDecifrado= "";
    //Recorrer cada uno de los caracteres del mensaje
    for (let i = 0; i < string.length; i++){
       let codigo=(string.charCodeAt(i) + 65 - offset) % 26 + 65;
      let resultado=String.fromCharCode(codigo);
      textDecifrado+= resultado;
    }
    return textDecifrado
  }  
};