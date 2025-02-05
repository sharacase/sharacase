<?php
// Establecer la conexión con la base de datos
$conexion = new mysqli('127.0.0.1', 'root', '', 'productos_db'); // Cambia los datos según corresponda

// Verificar si la conexión fue exitosa
if ($conexion->connect_error) {
    // Enviar un mensaje de error si la conexión falla
    die(json_encode(['error' => 'Error de conexión: ' . $conexion->connect_error]));
}

// Preparar la consulta SQL para obtener todos los productos
$sql = "SELECT * FROM productos";

// Ejecutar la consulta y guardar el resultado
$resultado = $conexion->query($sql);

// Crear un array para almacenar los productos
$productos = [];

// Verificar si la consulta devolvió resultados
if ($resultado->num_rows > 0) {
    // Recorrer los resultados y agregarlos al array
    while ($fila = $resultado->fetch_assoc()) {
        $productos[] = $fila;
    }
}

// Configurar el encabezado para devolver una respuesta JSON
header('Content-Type: application/json');

// Devolver los productos como un JSON
echo json_encode($productos);

// Cerrar la conexión con la base de datos
$conexion->close();
?>
