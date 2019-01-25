window.cipher = {
  encode:(offset, string) => {
         let textCifrado= "";
         for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
          let codigo = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
          let resultado = String.fromCharCode(codigo);
      textCifrado+= resultado;  
    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
         let codigo = (string.charCodeAt(i) - 97 + offset) % 26 + 97;
         let resultado=String.fromCharCode(codigo);
      textCifrado+= resultado;
    } else{ 
         let resultado=String.fromCharCode(string.charCodeAt(i));
          textCifrado+= resultado;
    }    
   }
   return textCifrado       
 },
   decode:(offset, string) => {
         let textCifrado= "";
         for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
          let codigo = (string.charCodeAt(i) + 65 - offset) % 26 + 65;
          let resultado = String.fromCharCode(codigo);
      textCifrado+= resultado;
    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
         let codigo = (string.charCodeAt(i) - 122 - offset) % 26 + 122;
         let resultado=String.fromCharCode(codigo);
      textCifrado+= resultado;
    } else{ 
         let resultado=String.fromCharCode(string.charCodeAt(i));
          textCifrado+= resultado;
    }    
   }
   return textCifrado  
}
};