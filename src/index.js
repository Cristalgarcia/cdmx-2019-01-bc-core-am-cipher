

const getCifrado = () =>{ 

const offset = parseInt(document.getElementById('clave').value);
//console.log(espacio)
const string = document.getElementById('cifrar').value.toUpperCase();
//console.log
document.getElementById('decifrar').value = cipher.encode(offset, string);
}



/*const getCifrado (respuesta)=> {
    const offset = parseInt(documentById('clave').value);
    const string = document.getElementById('cifrar').value;
    document.getElementById('cifrar').value = '';
    document.getElementById('decifrar').value = cipher.encode(offset, string);
}*/

/*let offset = parseInt(document.getElementById('clave').value);
let string = document.getElementById('cifrar').value;
const enviar = document.getElementById("mensajeCifrado");
enviar.addEventListener('click',window.cipher.encode);
document.getElementById('decifrar').innerHTML = texCifrado;*/
