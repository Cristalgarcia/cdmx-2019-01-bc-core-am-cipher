
const getCifrar = () =>{ 
const offset = parseInt(document.getElementById('clave').value);
//console.log(espacio)
const string = document.getElementById('cifrar').value.toUpperCase();
//console.log
document.getElementById('decifrar').value = cipher.encode(offset, string);
}

const getDecifrar = () =>{ 
const offset = parseInt(document.getElementById('clave').value);
//console.log(espacio)
const string = document.getElementById('cifrar').value.toUpperCase();
//console.log
document.getElementById('decifrar').value = cipher.decode(offset, string);
}