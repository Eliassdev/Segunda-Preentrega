
// Declaro variables del formulario de Ingreso y capturo los ID

let form_ingreso = document.getElementById("form_ingreso");
let ingreso_usuarios = document.getElementById("ingreso_usuarios");
let ingreso_password = document.getElementById("ingreso_password");

let error = document.getElementById("error")
let usuarios = localStorage.getItem("usuarios");

// PARSEO EL JSON PARA DESCONVERTIRLO 

usuarios = JSON.parse(usuarios);
console.log(usuarios);




//EVENTO FORMULARIO DE INGRESO

form_ingreso.addEventListener("submit" , (e) => {
    
    e.preventDefault();
    
    for(let user of usuarios){ 

        if(ingreso_usuarios.value === user.usuario && ingreso_password.value === user.contraseña){
            
            window.location.href = "./pages/tienda.html";
        }
        else{
            error.innerHTML = "<p> ERROR, VUELVE A INTENTARLO </p>";
        }
        
    }
    }
);