let precios = [49000,58000,35000,48000,60000];

const botonBand = document.querySelectorAll('.botonBandera');
const catalogo = document.querySelector('.catalogo');
const carrito = document.querySelector('.shop');



botonBand.forEach(function(boton) {
    boton.addEventListener("click", function() {
    let botonNumero = boton;
    const precio = document.querySelector('.precioUnit');
    if(boton.id == "botonUno"){
        const imagenUno = document.querySelector('.imgenContenedor');
        const precio = document.querySelector('.precioUnit');
        imagenUno.classList.add("imagenUno");

        precio.textContent=precios[0];
    }else if(boton.id == "botonDos"){
        const imagenDos = document.querySelector('.imgenContenedor');
        imagenDos.classList.add("imagenDos");
        precio.textContent=precios[1];
    }else if(boton.id == "botonTres"){
        const imagenTres = document.querySelector('.imgenContenedor');
        imagenTres.classList.add("imagenTres");
        precio.textContent=precios[2];
    }else if(boton.id == "botonCuatro"){
        const imagenCuatro = document.querySelector('.imgenContenedor');
        const precio = document.querySelector('.precioUnit');
        imagenCuatro.classList.add("imagenCuatro");
        precio.textContent=precios[3];
    }else if(boton.id == "botonCinco"){
        const imagenCinco = document.querySelector('.imgenContenedor');
        imagenCinco.classList.add("imagenCinco");
        precio.textContent=precios[4];
    }else{
        const imagenSeis = document.querySelector('.imgenContenedor');
        imagenSeis.classList.add("imagenSeis");
        precio.textContent=precios[5];
    };
    catalogo.classList.add("d-none");
    carrito.classList.remove("d-none");
    });
});

    const check = document.querySelectorAll('.form-check');
    const precio = document.querySelector('.precioUnit');
    const valor = document.querySelector('.form-check-input');
    let total = 0;
    check.forEach(function(evento) {
    evento.addEventListener("change", function() {
        let  eventos = evento;
        if(eventos.id == "flexRadioDefault1"){
            let total = precios[0]*1
            precio.textContent=total;
        }else if(eventos.id == "flexRadioDefault2"){
            total = precios[0]*2
            precio.textContent=total;
        }else{
            total = precios[0]*3
            precio.textContent=total;
        };
        console.log(total);
    });
});