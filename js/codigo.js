let precios = [49000,58000,35000,48000,60000];

const botonBand = document.querySelectorAll('.botonBandera');
const catalogo = document.querySelector('.catalogo');
const carrito = document.querySelector('.shop');
const check = document.querySelectorAll('.form-check-input');
const precio = document.querySelector('.precioUnit');
const valor = document.querySelector('.form-check-input');
let total = 0;



botonBand.forEach(function(boton) {
    boton.addEventListener("click", function() {
    let botonNumero = boton;
    const precio = document.querySelector('.precioUnit');
    const contador = document.querySelector('.contador');
    digito = 1; 
    contador.textContent = digito;
    if(boton.id == "botonUno"){
        const imagenUno = document.querySelector('.imgenContenedor');
        const precio = document.querySelector('.precioUnit');
        imagenUno.classList.add("imagenUno");
        precio.textContent=precios[0];
        const evento = document.querySelectorAll('.Checked');
        evento.forEach(function(evento){
            evento.addEventListener('click',function(){
                if(evento.id == "suma"){
                    digito++;
                    contador.textContent = digito;
                    total =precios[0]*digito;
                    precio.textContent = total;
                }else if (evento.id == "resta"){
                    if(digito >= 1){
                    digito--;
                    total = precios[0]*digito;
                    contador.textContent = digito;
                    precio.textContent = total;
                    }
                }else{
                    alert('No se puede realizar esa acción');
                };
            });
        });
    }else if(boton.id == "botonDos"){
        const imagenDos = document.querySelector('.imgenContenedor');
        imagenDos.classList.add("imagenDos");
        precio.textContent=precios[1];
        const evento = document.querySelectorAll('.Checked');
        evento.forEach(function(evento){
            evento.addEventListener('click',function(){
                if(evento.id == "suma"){
                    digito++;
                    contador.textContent = digito;
                    total =precios[1]*digito;
                    precio.textContent = total;
                }else if (evento.id == "resta"){
                    if(digito >= 1){
                    digito--;
                    total = precios[0]*digito;
                    contador.textContent = digito;
                    precio.textContent = total;
                    }
                }else{
                    alert('No se puede realizar esa acción');
                };
            });
        });
    }else if(boton.id == "botonTres"){
        const imagenTres = document.querySelector('.imgenContenedor');
        imagenTres.classList.add("imagenTres");
        precio.textContent=precios[2];
        const evento = document.querySelectorAll('.Checked');
        evento.forEach(function(evento){
            evento.addEventListener('click',function(){
                if(evento.id == "suma"){
                    digito++;
                    contador.textContent = digito;
                    total =precios[2]*digito;
                    precio.textContent = total;
                }else if (evento.id == "resta"){
                    if(digito >= 1){
                    digito--;
                    total = precios[0]*digito;
                    contador.textContent = digito;
                    precio.textContent = total;
                    }
                }else{
                    alert('No se puede realizar esa acción');
                };
            });
        });
    }else if(boton.id == "botonCuatro"){
        const imagenCuatro = document.querySelector('.imgenContenedor');
        const precio = document.querySelector('.precioUnit');
        imagenCuatro.classList.add("imagenCuatro");
        precio.textContent=precios[3];
        const evento = document.querySelectorAll('.Checked');
        evento.forEach(function(evento){
            evento.addEventListener('click',function(){
                if(evento.id == "suma"){
                    digito++;
                    contador.textContent = digito;
                    total =precios[3]*digito;
                    precio.textContent = total;
                }else if (evento.id == "resta"){
                    if(digito >= 1){
                    digito--;
                    total = precios[0]*digito;
                    contador.textContent = digito;
                    precio.textContent = total;
                    }
                }else{
                    alert('No se puede realizar esa acción');
                };
            });
        });
    }else if(boton.id == "botonCinco"){
        const imagenCinco = document.querySelector('.imgenContenedor');
        imagenCinco.classList.add("imagenCinco");
        precio.textContent=precios[4];
        const evento = document.querySelectorAll('.Checked');
        evento.forEach(function(evento){
            evento.addEventListener('click',function(){
                if(evento.id == "suma"){
                    digito++;
                    contador.textContent = digito;
                    total =precios[4]*digito;
                    precio.textContent = total;
                }else if (evento.id == "resta"){
                    if(digito >= 1){
                    digito--;
                    total = precios[0]*digito;
                    contador.textContent = digito;
                    precio.textContent = total;
                    }
                }else{
                    alert('No se puede realizar esa acción');
                };
            });
        });
    }else{
        const imagenSeis = document.querySelector('.imgenContenedor');
        imagenSeis.classList.add("imagenSeis");
        precio.textContent=precios[5];
        const evento = document.querySelectorAll('.Checked');
        evento.forEach(function(evento){
            evento.addEventListener('click',function(){
                if(evento.id == "suma"){
                    digito++;
                    contador.textContent = digito;
                    total =precios[5]*digito;
                    precio.textContent = total;
                }else if (evento.id == "resta"){
                    if(digito >= 1){
                    digito--;
                    total = precios[0]*digito;
                    contador.textContent = digito;
                    precio.textContent = total;
                    }
                }else{
                    alert('No se puede realizar esa acción');
                };
            });
        });
    };
    catalogo.classList.add("d-none");
    carrito.classList.remove("d-none");
    });
});

const envio = document.querySelector('.envio');
const recoge = document.querySelector('.recoge')
envio.addEventListener('click',function(){
    envio.classList.replace('btn-secondary','btn-primary');
    envio.classList.add("activo")
    if(recoge.classList.contains("btn-primary")){
        recoge.classList.replace("btn-primary","btn-secondary");
        recoge.classList.remove("activo")
        
    }
});
recoge.addEventListener('click',function(){
    recoge.classList.replace('btn-secondary','btn-primary');
    recoge.classList.add("activo")
    if(envio.classList.contains("btn-primary")){
        envio.classList.replace("btn-primary","btn-secondary");
        envio.classList.remove("activo")
        
    }  
});

const final = document.querySelector('#ultimo');
const precioFinal = document.querySelector('.resumenPrecio');
const cant = document.querySelector('.cantidades');
const tipoEnvio = document.querySelector('.tipoEnvio');

final.addEventListener('click',function(){
    console.log(total);
    const finalEnvio = document.querySelector('.activo');
    let envioTexto = finalEnvio.textContent;
    const precioUnit = document.querySelector('.precioUnit');
    precioFinal.textContent = precioUnit.textContent;
    cant.textContent = digito;
    tipoEnvio.textContent = envioTexto;
})