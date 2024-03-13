//alert("Hola este es mi Javascript");

// let nombre = "Alexandra";

// var nombre1 = "Alexandra";

// const nombre2 = "Alexandra";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);


//SELECCIONAR ELEMENTOS


/*
    let contenidoTitulo = "Ale";
    let titulo = document.querySelector(".logo a.fuente-acento");
    console.log(titulo);

    titulo.innerHTML = contenidoTitulo;

    let textoTitulo = titulo.innerText;
        
    if(textoTitulo == "Nombre"){
        titulo.innerHTML = "Otro";
    }
    else{
        console.log("no se cumple");
    }



    let nombre = "Alexandra";
    let ciudad = "Lima";
    let gusto = "jugar futbol";

    let parrafo = document.querySelector(".parrafo2")

    function cambiarTexto(nombre,ciudad,gusto){
        let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Comas. Me gusta mucho ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;
        return contenido;
    }

    parrafo.innerHTML = cambiarTexto(nombre, ciudad, gusto);

*/

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};



