<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD de Productos</title>
    <!-- Enlace a la hoja de estilos -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <link rel="stylesheet" href="productos-styles.css">
    <!-- Enlace a jQuery -->
    <script src="jquery.js"></script>
</head>
<body>
    <h1>Gestión de Productos</h1>
    <button id="btnNuevo">Nuevo Producto</button>

    <!-- Formulario para crear nuevo producto -->
    <form id="formNuevoProducto" style="display: none;">
        <label>Nombre:</label>
        <input type="text" id="nombre" required>
        <label>Precio:</label>
        <input type="number" id="precio" step="0.01" required>
        <label>Cantidad:</label>
        <input type="number" id="cantidad" required>
        <button type="submit">Guardar</button>
    </form>

    <!-- Formulario para editar producto -->
    <form id="formEditarProducto" style="display: none;">
        <input type="hidden" id="editId">
        <label>Nombre:</label>
        <input type="text" id="editNombre" required>
        <label>Precio:</label>
        <input type="number" id="editPrecio" step="0.01" required>
        <label>Cantidad:</label>
        <input type="number" id="editCantidad" required>
        <button type="submit">Actualizar</button>
    </form>

    <!-- Tabla para mostrar productos -->
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="tablaProductos">
            <!-- Los datos se cargarán dinámicamente -->
        </tbody>
    </table>
</body>
</html>
