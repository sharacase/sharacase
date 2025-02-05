<?php
// Establecer conexión con la base de datos
$conexion = new mysqli('127.0.0.1', 'root', '', 'productos_db');

// Verificar si la conexión fue exitosa
if ($conexion->connect_error) {
    die(json_encode(['error' => 'Error de conexión: ' . $conexion->connect_error]));
}

// Obtener los datos enviados desde el formulario (incluido el ID)
$id = $_POST['id'];
$nombre = $_POST['nombre'];
$precio = $_POST['precio'];
$cantidad = $_POST['cantidad'];

// Validar los datos recibidos
if (empty($id) || empty($nombre) || empty($precio) || empty($cantidad)) {
    echo json_encode(['error' => 'Faltan datos para actualizar el producto']);
    exit;
}

// Actualizar el producto en la base de datos
$sql = "UPDATE productos SET nombre = '$nombre', precio = '$precio', cantidad = '$cantidad' WHERE id = '$id'";
$resultado = $conexion->query($sql);

// Verificar si la actualización fue exitosa
if ($resultado) {
    echo json_encode(['success' => 'Producto actualizado con éxito']);
} else {
    echo json_encode(['error' => 'Error al actualizar el producto: ' . $conexion->error]);
}

// Cerrar la conexión con la base de datos
$conexion->close();
?>