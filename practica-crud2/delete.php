<?php
// Establecer conexión con la base de datos
$conexion = new mysqli('127.0.0.1', 'root', '', 'productos_db');

// Verificar si la conexión fue exitosa
if ($conexion->connect_error) {
    die(json_encode(['error' => 'Error de conexión: ' . $conexion->connect_error]));
}

// Obtener el ID del producto a eliminar
$id = $_POST['id'];

// Verificar que el ID no esté vacío
if (empty($id)) {
    echo json_encode(['error' => 'Falta el ID del producto para eliminar']);
    exit;
}

// Eliminar el producto de la base de datos
$sql = "DELETE FROM productos WHERE id = '$id'";
$resultado = $conexion->query($sql);

// Verificar si la eliminación fue exitosa
if ($resultado) {
    echo json_encode(['success' => 'Producto eliminado con éxito']);
} else {
    echo json_encode(['error' => 'Error al eliminar el producto: ' . $conexion->error]);
}

// Cerrar la conexión con la base de datos
$conexion->close();
?>