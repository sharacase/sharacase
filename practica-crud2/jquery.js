$(document).ready(function () {
    // Función para cargar los productos desde el servidor
    function cargarProductos() {
        $.ajax({
            url: 'read.php', // Archivo PHP que devuelve los datos
            method: 'GET', // Método para obtener datos
            dataType: 'json', // Especificar que esperamos un JSON como respuesta
            success: function (productos) {
                let filas = ''; // Variable para construir las filas de la tabla
                productos.forEach(producto => {
                    filas += `
                        <tr>
                            <td>${producto.id}</td>
                            <td>${producto.nombre}</td>
                            <td>${producto.precio}</td>
                            <td>${producto.cantidad}</td>
                            <td>
                                <button class="btnEditar" data-id="${producto.id}">Editar</button>
                                <button class="btnEliminar" data-id="${producto.id}">Eliminar</button>
                            </td>
                        </tr>
                    `;
                });
                $('#tablaProductos').html(filas); // Actualizar la tabla con los productos
            },
            error: function () {
                console.log("Error al cargar los productos.");
            }
        });
    }

    // Cargar productos al inicio
    cargarProductos();

  // Función para crear un nuevo producto
$('#btnNuevo').click(function () {
    $('#formNuevoProducto').show();
});

// Función para enviar el formulario de nuevo producto
$('#formNuevoProducto').submit(function (e) {
    e.preventDefault();
    let nombre = $('#nombre').val();
    let precio = $('#precio').val();
    let cantidad = $('#cantidad').val();

    $.ajax({
        url: 'create.php', // Archivo PHP que crea el producto
        method: 'POST', // Método para enviar datos
        data: { nombre, precio, cantidad }, // Datos a enviar
        dataType: 'json', // Especificar que esperamos un JSON como respuesta
        success: function (respuesta) {
            if (respuesta.success) {
                console.log(respuesta.success);
                cargarProductos();
                $('#formNuevoProducto')[0].reset();
                $('#formNuevoProducto').hide();
            } else {
                console.log(respuesta.error);
            }
        },
        error: function () {
            console.log("Error al crear el producto.");
        }
    });
});
   

    // Función para editar un producto
    $(document).on('click', '.btnEditar', function () {
        let id = $(this).data('id');
        $.ajax({
            url: 'read.php', // Archivo PHP que devuelve los datos
            method: 'GET', // Método para obtener datos
            dataType: 'json', // Especificar que esperamos un JSON como respuesta
            success: function (productos) {
                let producto = productos.find(p => p.id == id);
                if (producto) {
                    $('#editId').val(producto.id);
                    $('#editNombre').val(producto.nombre);
                    $('#editPrecio').val(producto.precio);
                    $('#editCantidad').val(producto.cantidad);
                    $('#formEditarProducto').show();
                }
            },
            error: function () {
                console.log("Error al cargar los productos.");
            }
        });
    });

    // Función para actualizar un producto
    $('#formEditarProducto').submit(function (e) {
        e.preventDefault();
        let id = $('#editId').val();
        let nombre = $('#editNombre').val();
        let precio = $('#editPrecio').val();
        let cantidad = $('#editCantidad').val();

        $.ajax({
            url: 'update.php', // Archivo PHP que actualiza el producto
            method: 'POST', // Método para enviar datos
            data: { id, nombre, precio, cantidad }, // Datos a enviar
            dataType: 'json', // Especificar que esperamos un JSON como respuesta
            success: function (respuesta) {
                if (respuesta.success) {
                    console.log(respuesta.success);
                    cargarProductos();
                    $('#formEditarProducto')[0].reset();
                    $('#formEditarProducto').hide();
                } else {
                    console.log(respuesta.error);
                }
            },
            error: function () {
                console.log("Error al actualizar el producto.");
            }
        });
    });

       // Función para eliminar un producto
$(document).on('click', '.btnEliminar', function () {
    let id = $(this).data('id');
    if (confirm(`¿Estás seguro que quieres eliminar?`)) {
        $.ajax({
            url: 'delete.php', // Archivo PHP que elimina el producto
            method: 'POST', // Método para enviar datos
            data: { id }, // Datos a enviar
            dataType: 'json', // Especificar que esperamos un JSON como respuesta
            success: function (respuesta) {
                if (respuesta.success) {
                    console.log(respuesta.success);
                    cargarProductos();
                    } else {
                    console.log(respuesta.error);
                }
            },
            error: function () {
                console.log("Error al eliminar el producto.");
            }
        });
    }
});
        });
