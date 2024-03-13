$(document).ready(function () {

    'use strict';

    for (let i = 0; i < hamburguesas.length; i++) {

        $('#hamburguesas').append(
            '<div class="col">'+
                '<div class="sc-product-item card fondo-gris-claro borde-violeta h-100">' +
                    '<img class="card-img-top" data-name="product_image" src="img/productos/'+ hamburguesas[i]['Imagen'] +'" alt="'+ hamburguesas[i]['Nombre'] +'">' +
                    '<div class="card-body">'+
                        '<h4 class="card-title" data-name="product_name">'+ hamburguesas[i]['Nombre'] +'</h4>' +
                        '<p class="card-text" data-name="product_desc">'+ hamburguesas[i]['Descripcion'] +'</p>' +
                        '<input name="product_price" value="'+ hamburguesas[i]['Precio'] +'" type="hidden" >' +
                        '<input name="product_id" value="'+ hamburguesas[i] +'" type="hidden" >' +
                    '</div>' +
                    '<div class="card-footer row">'+
                        '<p class="col-7 fs-3 tipografia-pixelada m-0">$'+ hamburguesas[i]['Precio'] + '</p>' +
                        '<a href="#" class="sc-add-to-cart col-5 boton-chico boton-violeta">Agregar</a>' +
                    '</div>'+
                '</div>'+
            '</div>'
        );
    }

    for (let i = 0; i < cervezas.length; i++) {

        $('#cervezas').append(
            '<div class="col">'+
                '<div class="sc-product-item card fondo-gris-claro borde-violeta h-100">' +
                    '<img class="card-img-top" data-name="product_image" src="img/productos/'+ cervezas[i]['Imagen'] +'" alt="'+ cervezas[i]['Nombre'] +'">' +
                    '<div class="card-body">'+
                        '<h4 class="card-title" data-name="product_name">'+ cervezas[i]['Nombre'] +'</h4>' +
                        '<p class="card-text" data-name="product_desc">'+ cervezas[i]['Descripcion'] +'</p>' +
                        '<input name="product_price" value="'+ cervezas[i]['Precio'] +'" type="hidden" >' +
                        '<input name="product_id" value="'+ cervezas[i] +'" type="hidden" >' +
                    '</div>' +
                    '<div class="card-footer row">'+
                        '<p class="col-7 fs-3 tipografia-pixelada m-0">$'+ cervezas[i]['Precio'] + '</p>' +
                        '<a href="#" class="sc-add-to-cart col-5 boton-chico boton-violeta">Agregar</a>' +
                    '</div>'+
                '</div>'+
            '</div>'
        );
    }

    for (let i = 0; i < picadas.length; i++) {

        $('#picadas').append(
            '<div class="col">'+
                '<div class="sc-product-item card fondo-gris-claro borde-violeta h-100">' +
                    '<img class="card-img-top" data-name="product_image" src="img/productos/'+ picadas[i]['Imagen'] +'" alt="'+ picadas[i]['Nombre'] +'">' +
                    '<div class="card-body">'+
                        '<h4 class="card-title" data-name="product_name">'+ picadas[i]['Nombre'] +'</h4>' +
                        '<p class="card-text" data-name="product_desc">'+ picadas[i]['Descripcion'] +'</p>' +
                        '<input name="product_price" value="'+ picadas[i]['Precio'] +'" type="hidden" >' +
                        '<input name="product_id" value="'+ picadas[i] +'" type="hidden" >' +
                    '</div>' +
                    '<div class="card-footer row">'+
                        '<p class="col-7 fs-3 tipografia-pixelada m-0">$'+ picadas[i]['Precio'] + '</p>' +
                        '<a href="#" class="sc-add-to-cart col-5 boton-chico boton-violeta">Agregar</a>' +
                    '</div>'+
                '</div>'+
            '</div>'
        );
    }

    for (let i = 0; i < salsas.length; i++) {

        $('#salsas').append(
            '<div class="col">'+
                '<div class="sc-product-item card fondo-gris-claro borde-violeta h-100">' +
                    '<img class="card-img-top" data-name="product_image" src="img/productos/'+ salsas[i]['Imagen'] +'" alt="'+ salsas[i]['Nombre'] +'">' +
                    '<div class="card-body">'+
                        '<h4 class="card-title" data-name="product_name">'+ salsas[i]['Nombre'] +'</h4>' +
                        '<p class="card-text" data-name="product_desc">'+ salsas[i]['Descripcion'] +'</p>' +
                        '<input name="product_price" value="'+ salsas[i]['Precio'] +'" type="hidden" >' +
                        '<input name="product_id" value="'+ salsas[i] +'" type="hidden" >' +
                    '</div>' +
                    '<div class="card-footer row">'+
                        '<p class="col-7 fs-3 tipografia-pixelada m-0">$'+ salsas[i]['Precio'] + '</p>' +
                        '<a href="#" class="sc-add-to-cart col-5 boton-chico boton-violeta">Agregar</a>' +
                    '</div>'+
                '</div>'+
            '</div>'
        );
    }


    $('#smartcart').smartCart({

        cartItemTemplate: '<div class="container-fluid">'+
            '<div class="row align-items-center">'+
                '<div class="col-3">'+
                    '<img class="img-fluid" src="{product_image}" />' +
                '</div>'+
                '<div class="col-9">'+
                    '<h3 class="h6 list-group-item-heading">{product_name}</h3>' +
                '</div>'+
            '</div>'+
        '</div>',

        lang: {
            cartTitle: 'Mis productos',
            checkout: 'Hacer pedido',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove:'×',
            cartEmpty: '¡Sin productos aún!<br />Comenzá a elegir.'
        }
    });


    // Esto hace que cliquear el botón del splash de producto destacado sea igual que cliquear en el botón
    // del producto normal
    $( "#agregar-producto-destacado" ).click(function() {
        $( "#boton-compra-producto-destacado" ).click();
    });


    // Agregar header para no tener que estar editando cada página si hacemos un cambio
    $('#header').append(
        '<nav class="navbar navbar-expand-md navbar-dark">'+
        '<div class="container">'+
            '<a class="navbar-brand" href="#arriba"><img id="logo" src="img/burgamer-logo.svg" alt="Burgamer"></a>'+
            '<div id="navegacion" class="collapse navbar-collapse justify-content-end col-8">'+
                '<ul class="navbar-nav px-0">'+
                    '<li class="nav-item">'+
                        '<a id="inicio" class="nav-link" aria-current="page" href="index.html">Inicio</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<a id="pedir-online" class="nav-link" href="pedir-online.html">Pedir Online</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<a id="faq" class="nav-link" href="faq.html">F.A.Q.</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<a id="quienes-somos" class="nav-link" href="quienes-somos.html">Quiénes Somos</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<a id="contacto" class="nav-link" href="contacto.html">Contacto</a>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
            '<button class="navbar-toggler h-100" type="button" data-bs-toggle="collapse" data-bs-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Activar navegacion">'+
                '<span class="navbar-toggler-icon"></span>'+
            '</button>'+
        '</div>'+
    '</nav>'
    );

    $('#'+$('#seccion').text()).addClass('active');

    // Agregar footer, para no tener que estar cambiándolo en cada HTML
    $('#footer').append(
        '<div class="container-fluid fondo-gris borde-violeta py-3 px-0 overflow-hidden">'+
            '<div class="row justify-content-center gx-3 gx-md-0 p-0">'+
                '<div class="col-2">'+
                    '<a href="https://www.facebook.com/" target="_blank"><img src="img/socialmedia/facebook.png" alt="Logo de Facebook" class="img-fluid d-block mx-auto"></a>'+
                '</div>'+
                '<div class="col-2">'+
                    '<a href="https://www.instagram.com/" target="_blank"><img src="img/socialmedia/instagram.png" alt="Logo de instagram" class="img-fluid d-block mx-auto"></a>'+
                '</div>'+
                '<div class="col-2">'+
                    '<a href="https://www.linkedin.com/" target="_blank"><img src="img/socialmedia/linkedin.png" alt="Logo de Linkedin" class="img-fluid d-block mx-auto"></a>'+
                '</div>'+
                '<div class="col-2">'+
                    '<a href="https://www.twitter.com/" target="_blank"><img src="img/socialmedia/twitter.png" alt="Logo de Twitter" class="img-fluid d-block mx-auto"></a>'+
                '</div>'+
                '<div class="col-2">'+
                    '<a href="https://www.youtube.com/" target="_blank"><img src="img/socialmedia/youtube.png" alt="Logo de YouTube" class="img-fluid d-block mx-auto"></a>'+
                '</div>'+
            '</div>'+
        '</div>'
    );

    // Agregar div para que el logo te lleve arriba
    $('body').prepend('<div id="arriba"></div>');

});


// Código de validación de formulario de Bootstrap

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()