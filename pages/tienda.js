




// DECLARO VARIABLES




let titulo_listado = document.getElementById("titulo");

titulo_listado.style.color = "lightblue";
titulo_listado.style.textAlign = "center";
titulo_listado.style.fontFamily = "Verdana";


const contenedor_productos = document.querySelector(".contenedor-productos");
const contenedor_carrito = document.querySelector(".contenedor-carrito");
const listado_carrito = []



//eventos
document.addEventListener("DOMContentLoaded" , function(){

    //MOSTRAR NUESTROS PRODUCTOS
    mostrar_productos();

})


//FUNCIONES
function mostrar_productos(){

    fetch("../productos.json")
    .then(response => response.json())
    .then(data =>  { 

        console.log(data);
        
        data.forEach(function(producto){
            const div = document.createElement("div")
            div.classList.add("card");

            const img_producto = document.createElement("img");
            img_producto.src = producto.img;
    
            const titulo_producto = document.createElement("h2");
            titulo_producto.textContent = producto.name;
    
            const precio_producto = document.createElement("h6");
            precio_producto.textContent = producto.precio;
            precio_producto.style.color = "red";
            precio_producto.style.fontSize = "24px";
    
            const btn = document.createElement("button");
            btn.textContent = "Agregar al carrito";
            btn.classList.add("btn-style");
            //agregamos evento al boton
            btn.onclick = function () {
                agregar_carrito(producto.id);

        }
        div.appendChild(img_producto);
        div.appendChild(titulo_producto);
        div.appendChild(precio_producto);
        div.appendChild(btn);
        contenedor_productos.appendChild(div);
    });
})}

    
/*    data.forEach(function(producto){
        const div_productos = document.createElement("div");
    
        div_productos.classList.add("card");

        const img_producto = document.createElement("img");
        img_producto.src = producto.img

        console.log(div_productos)

        const titulo_producto = document.createElement("h2");
        titulo_producto.textContent = producto.name;

        const precio_producto = document.createElement("h6");
        precio_producto.textContent = producto.precio;
        precio_producto.style.color = "red";
        precio_producto.style.fontSize = "24px";

        const btn = document.createElement("button");
        btn.textContent = "Agregar al carrito";
        btn.classList.add("btn-style");
        //agregamos evento al boton
        btn.onclick = function () {
            agregar_carrito(producto.id);     

}


        div_productos.appendChild(img_producto);
        div_productos.appendChild(titulo_producto);
        div_productos.appendChild(precio_producto);
        div_productos.appendChild(btn);
        
        //agregamos al DOM
        contenedor_productos.appendChild(div_productos);
        
    }
    
    )
}*/

function agregar_carrito(id){
    fetch("../productos.json")
    .then(response => response.json())
    .then(data => {
        
        
        const producto_seleccionado = data.find(function
            (producto){
                return producto.id == id;
                
                
                
            }
            );
            
            listado_carrito.push(producto_seleccionado);
        });
    
    Toastify({
        
        text: "Se agrego un producto al carrito",
        duration: 1500,
        gravity: top,
        style: {
            fontSize: "20px"
        }
        
    }).showToast();
    
    
    
    mostrar_carrito(listado_carrito);
}

function mostrar_carrito(seleccionado){

        // RECORRO EL ARRAY PARA MOSTRAR LOS PRODUCTOS SELECCIONADOS
        let [img] = listado_carrito;
        
        
        contenedor_carrito.innerHTML = "";
    
        listado_carrito.forEach(function(producto){
        const div_productos = document.createElement("div");
    
        div_productos.classList.add("card");

        const img_producto = document.createElement("img");
        img_producto.src = producto.img
        
        
        console.log(div_productos)
        
        const titulo_producto = document.createElement("h2");
        titulo_producto.textContent = producto.name;
        
        
        div_productos.appendChild(img_producto);
        div_productos.appendChild(titulo_producto);
        
        
        
        //agregamos al DOM
        
        contenedor_carrito.appendChild(div_productos);
        
    })

}
;