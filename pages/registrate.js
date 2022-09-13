//Capturo los id de los nodos y declaro variables

let form_registro = document.getElementById("form_registro");
let registro_usuarios = document.getElementById("registro_usuarios");
let registro_password = document.getElementById("registro_password");

// DECLARO UN ARRAYS
let usuarios = []

//Creo un Objeto
class Usuario{
        constructor(usuario, contraseña){
            this.usuario = usuario;
            this.contraseña = contraseña;

        }
}

//EVENTO FORMULARIO DE REGISTRO

form_registro.addEventListener("submit" , (e) => {
    e.preventDefault();
    
    if(registro_usuarios.value != "" && registro_password.value != ""){
    
        let nuevoUsuario = new Usuario (registro_usuarios.value , registro_password.value); 
        usuarios.push(nuevoUsuario);

        let arreglo_JSON = JSON.stringify(usuarios);
        localStorage.setItem("usuarios" , arreglo_JSON);
        

        
    
        alert("El registro ha sido exitoso con el nombre " + registro_usuarios.value);
    }
    });
    