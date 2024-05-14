#  ***Proyecto Backend: Sistema de Gestión de Usuarios, Productos y Categorías***

Este proyecto de backend proporciona una API para gestionar usuarios, productos y categorías en un sistema de gestión. Está diseñado para funcionar con una base de datos MongoDB y utiliza un sistema de autenticación basado en tokens para garantizar la seguridad de las operaciones.

## **Características principales**

- **Usuarios:** Permite registrar nuevos usuarios, autenticar usuarios existentes, actualizar información de usuario y eliminar cuentas de usuario.
- **Productos:** Permite la creación, lectura, actualización y eliminación de productos.
- **Categorías:** Proporciona operaciones CRUD para gestionar categorías de productos.
- **Autenticación:** Utiliza un sistema de autenticación basado en tokens para proteger las rutas y operaciones sensibles.

## **Tecnologías utilizadas**

- **Node.js:** Plataforma de desarrollo utilizada para ejecutar el servidor backend.
- **Express.js:** Framework de Node.js utilizado para crear y gestionar las rutas de la API.
- **MongoDB:** Base de datos NoSQL utilizada para almacenar la información de usuarios, productos y categorías.
- **Mongoose:** Biblioteca de modelado de objetos MongoDB para Node.js, utilizada para definir los modelos de datos y realizar operaciones de base de datos.
- **JSON Web Tokens (JWT):** Utilizado para autenticar usuarios y generar tokens de acceso seguros.
- **bcrypt:** Biblioteca utilizada para el cifrado de contraseñas y garantizar la seguridad de las credenciales de usuario.

## **Configuración del proyecto**

1. **Clona este repositorio en tu máquina local.**
2. **Instala las dependencias del proyecto** ejecutando `npm install`.
3. **Configura las variables de entorno**.
4. **Inicia el servidor** ejecutando `npm run dev`.


## **Uso de la API**

La API proporciona los siguientes endpoints:
- Necesario crear usuario y realizar un login para poder gestionar la mayoria de funciones de user,product,category.

### **Endpoints de Usuarios**

#### Crear Usuario
- **Método:** POST
- **Ruta:** `user/create`

#### Obtener Todos los Usuarios
- **Método:** GET
- **Ruta:** `user/getAll`

#### Actualizar Usuario por ID
- **Método:** PUT
- **Ruta:** `user/update/:id`

#### Eliminar Usuario por ID
- **Método:** DELETE
- **Ruta:** `user/deleteUser/:id`

#### Iniciar Sesión
- **Método:** POST
- **Ruta:** `user/login`
- ***Proporcionar email y password***

### **Endpoints de Productos**

#### Crear Producto
- **Método:** POST
- **Ruta:** `product/create`


#### Obtener Todos los Productos
- **Método:** GET
- **Ruta:** `product/getAll`


#### Obtener Producto por Nombre
- **Método:** GET
- **Ruta:** `product/getOne/:name`


#### Eliminar Producto por ID
- **Método:** DELETE
- **Ruta:** `product/delete/:id`


#### Actualizar Producto por ID
- **Método:** PUT
- **Ruta:** `product/update/:id`

### **Endpoints de Categorías**

#### Obtener Todas las Categorías
- **Método:** GET
- **Ruta:** `category/getAll`


#### Crear Categoría
- **Método:** POST
- **Ruta:** `category/create`







