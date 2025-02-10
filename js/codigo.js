let precios = [49000,58000,35000,48000,60000];

const botonBand = document.querySelectorAll('.botonBandera');
const catalogo = document.querySelector('.catalogo');
const carrito = document.querySelector('.shop');



botonBand.forEach(function(boton) {
    boton.addEventListener("click", function() {
    let botonNumero = boton;
    if(boton.id == "botonUno"){
        const imagenUno = document.querySelector('.imgenContenedor');
        const precio = document.querySelector('.precioUnit');
        imagenUno.classList.add("imagenUno");
        precio.textContent=precios[0];
    }else if(boton.id == "botonDos"){
        const imagenDos = document.querySelector('.imgenContenedor');
        const precio = document.querySelector('.precioUnit');
        imagenDos.classList.add("imagenDos");
        precio.textContent=precios[1];
    }else if(boton.id == "botonTres"){
        const imagenTres = document.querySelector('.imgenContenedor');
        const precio = document.querySelector('.precioUnit');
        imagenTres.classList.add("imagenTres");
        precio.textContent=precios[2];
    }else if(boton.id == "botonCuatro"){
        const imagenCuatro = document.querySelector('.imgenContenedor');
        const precio = document.querySelector('.precioUnit');
        imagenCuatro.classList.add("imagenCuatro");
        precio.textContent=precios[3];
    }else if(boton.id == "botonCinco"){
        const imagenCinco = document.querySelector('.imgenContenedor');
        const precio = document.querySelector('.precioUnit');
        imagenCinco.classList.add("imagenCinco");
        precio.textContent=precios[4];
    }else{
        const imagenSeis = document.querySelector('.imgenContenedor');
        const precio = document.querySelector('.precioUnit');
        imagenSeis.classList.add("imagenSeis");
        precio.textContent=precios[5];
    }
    catalogo.classList.add("d-none");
    carrito.classList.remove("d-none");
    });
});