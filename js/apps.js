/* console.log("Hola Mundo");
console.log(4+4);
var a = 5;
var b = 6;
console.log(a + b);
alert ("Hola mundo");
fc = ((a) => a + 100)
console.log( fc(10) )
Validacion: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]/g;*/

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('ContactoNombre').value;
    if(nombre.length == 0) {
      alert('Por favor ingrese su nombre');
      return;
    }
    
    var email = document.getElementById('ContactoEmail').value;
    if (/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]/.test(email)){
        alert("La dirección de email " + email + " es correcta.");
        return;
    }else {
        alert("La dirección de email es incorrecta.");
        return;
    }

    this.submit();
  }
