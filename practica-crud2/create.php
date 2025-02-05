<?php
// Establecer conexión con la base de datos
$conexion = new mysqli('127.0.0.1', 'root', '', 'productos_db');

// Verificar si la conexión fue exitosa
if ($conexion->connect_error) {
    die(json_encode(['error' => 'Error de conexión: ' . $conexion->connect_error]));
}

// Obtener los datos enviados desde el formulario
$nombre = $_POST['nombre'];
$precio = $_POST['precio'];
$cantidad = $_POST['cantidad'];

// Validar los datos recibidos
if (empty($nombre) || empty($precio) || empty($cantidad)) {
    echo json_encode(['error' => 'Faltan datos para crear el producto']);
    exit;
}

// Insertar el nuevo producto en la base de datos
$sql = "INSERT INTO productos (nombre, precio, cantidad) VALUES ('$nombre', '$precio', '$cantidad')";
$resultado = $conexion->query($sql);

// Verificar si la inserción fue exitosa
if ($resultado) {
    echo json_encode(['success' => 'Producto creado con éxito']);
} else {
    echo json_encode(['error' => 'Error al crear el producto: ' . $conexion->error]);
}

// Cerrar la conexión con la base de datos
$conexion->close();
?>