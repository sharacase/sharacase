// $(document).ready(function () { // Esto tambiÃ©n esta deprecado, por lo que nos recomiendan usar:
$(function () { 

    // declaraciÃ³n de funciÃ³n:
    function cargarProductos() {
        // AquÃ­ pondrÃ­amos el cÃ³digo que queremos hacer cuando sea llamada esta funciÃ³n

        console.log("Llamamos a la funcion cargarProductos");
    }

    // AquÃ­ es donde llamamaos a la funciÃ³n declarada antes por primera vez, si no la llamamos, nunca se ejecutarÃ¡ el cÃ³digo de arriba.
    cargarProductos()

    function sumaNumeros(numeroA, numeroB) {
        total = numeroA + numeroB;
    }

    total = sumaNumeros(4, 5);

    // Tomamos un valor que tenemos en la pÃ¡gina que estamos mostrando al usuario
    let nombreDatoEnviado = $('#nombre').val();
    
    // Preparamos una llamada ajax, la cual podemos poner donde queramos
    $.ajax({
        url: 'NOMBRE_FICHERO.php',
        method: 'GET', // metodo que utilizaremos, sera GET para la lectura y POST para el resto.
        dataType: 'json', // en el dataType indicamos que valores nos va a devolver, siendo necesario el data si en lugar de indicar datos a leer indicamos los datos que enviamos. Podemos indicar uno, otro o los dos
        data: nombreDatoEnviado,
        success: function (respuesta) {
           // AquÃ­ lo que queremos hacer en caso de que la llamada ajax sea correcta

           // Por ejemplo, si en respuesta sabemos que tenemos un trozo de html, pues podrÃ­amos poner:
            $('#tablaProductos').html(respuesta); // para el caso que no venga en array
            $('#tablaProductos').html(respuesta.id); // para el caso que vemga con array
            $('#tablaProductos').html(respuesta.nombre); // para el caso que venga con array
        },
        error: function () { // En caso de que no tratemos el error en el php, podemos poner aqui en el ajax el error. RECORDAR QUE ESTA PARTE SE PUEDE OMITIR siempre y cuando enviamos el mensaje de error adecuadamente desde el .php
            console.log("algo salio mal");
        }
    });

    // En el siguiente ejemplo hacemos referencia a un elemento que no queremos buscar nada dentro de el, es el elemento "directamente"
    $('#nombreIdElementoTratar').on('submit', function (e) {
        
        e.preventDefault(); // Con el prevent Default hacemos que la pÃ¡gina no recargue
        console.log("click aquÃ­");
    });

    // AquÃ­ serÃ­a un bloque donde queremos buscar un elemento en concreto. 
    $('#bloqueElementoTratar').on('click', '.btnEditar', function () {
        e.preventDefault(); // Con el prevent Default hacemos que la pÃ¡gina no recargue
        console.log("hacemos otro click aquÃ­");
    });

});