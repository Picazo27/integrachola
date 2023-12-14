<?php
namespace proyecto\Controller;
require("../vendor/autoload.php");
use proyecto\Models\Producto;
use proyecto\Models\proveedor;
use proyecto\Models\categoria;
use proyecto\Models\Table;
use proyecto\Response\Success;
use proyecto\Response\Failure;
use proyecto\Conexion;
use Firebase\JWT\JWT; // Asegúrate de importar la librería JWT

class HomeController
{
private $conexion;
public function __construct()
{
    $this -> conexion = new Conexion('gimnasioda','localhost','root','');
}

    public function bienvenido(){
        echo "Bienvenido";
    }

    public function prueba(){
        echo "Prueba";
    }

    
    public function mostrarProducto(){
        try{
            $productos = Table::query("SELECT * FROM productos");
            $productos = new Success($productos);
            $productos->Send();
            return $productos;
        }catch (\Exception $e){
            $s = new Failure(401,$e->getMessage());
            return $s->Send();
        }
    }

    public function prov()
    {
        try{
            $proveedores = Table::query("SELECT * FROM proveedores");
            $proveedores = new Success($proveedores);
            $proveedores->Send();
            return $proveedores;
        }catch (\Exception $e){
            $s = new Failure(401,$e->getMessage());
            return $s->Send();
        }
    }
    
            public function cate(){
                try {
                    $categorias = Table::query("SELECT id,nombre_categoria FROM categorias");
                    $categorias = new Success($categorias);
                    $categorias->Send();
                    return $categorias;
                } catch (\Exception $e) {
                    $s = new Failure(401, $e->getMessage());
                    return $s->Send();
                }
            }

public function insertarProducto()
{
    try {
        // Obtiene los datos del cuerpo de la solicitud
        $JSONData = file_get_contents("php://input");
        $dataObject = json_decode($JSONData);

        // Verifica si $dataObject es un objeto JSON válido
        if (!is_object($dataObject)) {
            throw new \Exception('Formato de datos no válido. Se esperaba un objeto JSON.');
        }

        // Verifica campos obligatorios antes de crear la instancia de Producto
        $requiredFields = ['nombre_producto', 'descripcion', 'precio', 'existencia', 'imagen', 'id_categoria'];
        foreach ($requiredFields as $field) {
            if (empty($dataObject->$field)) {
                throw new \Exception("El campo $field es obligatorio.");
            }
        }

        // Crea una nueva instancia de Producto
        $prod = new Producto();
        $prod->nombre_producto = $dataObject->nombre_producto;
        $prod->descripcion = $dataObject->descripcion;
        $prod->precio = $dataObject->precio;
        $prod->existencia = $dataObject->existencia;

      $imagenBase64 = $dataObject->imagen;
 $imagenData = base64_decode($imagenBase64);

 // Validar el tipo MIME de la imagen
 $finfo = finfo_open();
 $mime_type = finfo_buffer($finfo, $imagenData, FILEINFO_MIME_TYPE);
 finfo_close($finfo);

 // Validar la extensión permitida
 $extensionMap = [
     'image/jpeg' => 'jpg',
     'image/jpg' => 'jpg',
     'image/png' => 'png',
     'image/svg+xml' => 'svg',
 ];

 if (!array_key_exists($mime_type, $extensionMap)) {
     throw new \Exception('Formato de imagen no permitido');
 }

 $fileExtension = $extensionMap[$mime_type];
 $nombreImagen = uniqid() . '.' . $fileExtension;

 $rutaImagen = 'C:\Users\ANGEL\Desktop\inte\integrachola\apigym\POOCRUD\public\img' . $nombreImagen;

 file_put_contents($rutaImagen, $imagenData);

 if (file_put_contents($rutaImagen, $imagenData) === false) {
    throw new \Exception('Error al guardar la imagen: ' . error_get_last()['message']);
}

        // Asigna la ruta de la imagen al producto
        $prod->imagen = $rutaImagen;

        $categoriasResponse = $this->cate();
        $categorias = $categoriasResponse;
        
        if (empty($categorias)) {
            throw new \Exception('Error al obtener las categorías');
        }
        
        // Validar si la categoría proporcionada es válida
        $id_categoria = $dataObject->id_categoria;
        $categoriaEncontrada = false;
        
        foreach ($categorias as $categoria) {
            if ($categoria->id == $id_categoria) {
                $categoriaEncontrada = true;
                break;
        
            }
        }
        if (!$categoriaEncontrada) {
            throw new \Exception('La categoría proporcionada no es válida');
        }
        
        // Asignar la categoría al producto
        $prod->id_categoria = $id_categoria; 
        $prod->id_categoria = $dataObject->id_categoria;

        // Guarda el producto
        $prod->save();

        // Envía una respuesta exitosa
        $response = new Success(['producto_id' => $prod->id, 'mensaje' => 'Producto guardado exitosamente']);
        return $response->Send();
    } catch (\Exception $e) {
        // Captura cualquier excepción y envía una respuesta de error
        $response = new Failure(401, $e->getMessage());
        return $response->Send();
    }
}


public function mostrarUsuario()
{
    try {
        // Verificar si el usuario está autenticado (por ejemplo, si existe un ID de usuario en la sesión)
        if (isset($_SESSION['user_id'])) {
            $userId = $_SESSION['user_id'];

            // Ahora puedes usar $userId para obtener información específica del usuario
            $usuario = Table::query("SELECT users.nombre, users.apellido_p, users.apellido_m, users.telefono, users.user, users.contrasena,
                direcciones.calle, direcciones.numero, direcciones.colonia, direcciones.codigo_postal
                FROM users
                INNER JOIN direccion_user ON users.id = direccion_user.id_user
                INNER JOIN direcciones ON direcciones.id = direccion_user.id_direccion
                WHERE users.id = $userId;");

            $usuario = new Success($usuario);
            $usuario->Send();
            return $usuario;
        } else {
            throw new \Exception('Usuario no autenticado');
        }
    } catch (\Exception $e) {
        $s = new Failure(401, $e->getMessage());
        return $s->Send();
    }
}




    
    
}
?>

