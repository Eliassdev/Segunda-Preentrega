
// CREO UN ARREGLO DE OBJETOS

const array_productos = [
    {   
        id :  1 ,
        name : "Nike AirMax",
        img : "../images/nike.jpg",

    },
    {   
        id :  2 ,
        name : "Adidas",
        img : "../images/adidas.jpg",
    },
    {   
        id :  3 ,
        name : "Reebok",
        img : "../images/reebok.jpg",
    },
    {   
        id :  4 ,
        name : "New Balance",
        img : "../images/newbalance.jpg",
    },
    {   
        id :  5 ,
        name : "Fila",
        img : "../images/fila.jpg",
    },
    {   
        id :  6 ,
        name : "Puma",
        img : "../images/puma.jpg",
    },
    {   
        id :  7 ,
        name : "Converse",
        img : "../images/converse.jpg",
    }


];

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

    array_productos.forEach(function(producto){
        const div_productos = document.createElement("div");
    
        div_productos.classList.add("card");

        const img_producto = document.createElement("img");
        img_producto.src = producto.img

        console.log(div_productos)

        const titulo_producto = document.createElement("h2");
        titulo_producto.textContent = producto.name;

        const btn = document.createElement("button");
        btn.textContent = "Agregar al carrito";
        btn.classList.add("btn-style");
        //agregamos evento al boton
        btn.onclick = function () {
            agregar_carrito(producto.id);     

}


        div_productos.appendChild(img_producto);
        div_productos.appendChild(titulo_producto);
        div_productos.appendChild(btn);

        //agregamos al DOM
        contenedor_productos.appendChild(div_productos);
        
    }
        
    )
}
function agregar_carrito(id){
    const producto_seleccionado = array_productos.find(function
        (producto){
        return producto.id == id;

    }
    );
    
    listado_carrito.push(producto_seleccionado);
    mostrar_carrito(listado_carrito);
};

function mostrar_carrito(seleccionado){


    // RECORRO EL ARRAY PARA MOSTRAR LOS PRODUCTOS SELECCIONADOS
    contenedor_carrito.innerHTML = "";
    seleccionado.forEach(function(producto){
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
};