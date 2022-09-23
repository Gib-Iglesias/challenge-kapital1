# Challenge Backend (Kapital)

## README

El objetivo de este repositorio es resolver un challenge para Kapital optando por una posición backend en la misma.
El problema a resolver se añade más abajo y después detallo los pasos que deberá seguir la persona que vaya a revisar dicho código para poder ejecutar y poder levantar el proyecto.

## Challenge

### Requerimiento

Tienes la tarea de implementar una API Rest en NodeJS para la gestión de clientes. Dicha API deberá exponer endpoints para las siguientes funciones:

-Alta de clientes
-Consultar la lista de clientes, y filtrar por su status activo / inactivo (eliminado) por default debe mostrar los activos
-Consultar y editar los datos de un cliente en específico
-Eliminar un cliente (solo marcarlos como inactivo/eliminado)

Los endpoints deben implementar sus respectivas validaciones. Asimismo, los endpoints de alta y eliminación deben estar autenticados, mientras que esto es opcional para los de consulta. Puedes realizar la autenticación por Token o API Key.

Cliente (modelo propuesto)
● id (autogenerado)
● nombre (obligatorio)
● apellido_paterno (obligatorio)
● apellido_materno (obligatorio)
● email (obligatorio)
● telefono (Opcional)
● status (default: activo)

Criterios de evaluación:
● Apego de la Arquitectura API RESTful
● Código limpio y modularizado
● Manejo de errores (uso de status code)
● Implementación de pruebas unitarias
● Uso de método de Autenticación
● Documentación del API
● Uso de base de datos (queda a libre elección)

### Solución Planteada

La solución en base a los criterios y requerimientos solicitados es crear este proyecto con JS y NodeJS (Express como framework) para crear la estructura CRUD (Api REST) y poder satisfacer cada caso.
En el directorio de Routes encontrarán las URL a consumir. Así mismo añado los siguientes pasos para que puedan levantar el proyecto localmente.

### Variables/Archivos por Modificar

File:
    .env.example
    Se debe copiar el archivo y renombar como .env
    Lo siguiente será modificar los valores de las variables de entorno con datos en tipo 'String' para que al correr el proyecto tome dichos valores (para fines prácticos dejo creado un file test con valores de prueba).
    [
        Como paréntesis comento que se optó por configurar el proyecto con una base de datos tipo MongoDB usando Mongoose como motor de dicha base, por lo cual para colocar la URL de la base de Mongo se debe tener una cuenta en 'https://cloud.mongodb.com/' y obtener de su sesión la url, yendo a:

        Atlas -> + Cluster -> Añadir IP -> IP Actual -> Dentro del Cluster creado -> Connect -> Connect your application -> Copiar la URL ahí -> Y para finalizar modificar dentro de los signos el password actual del usuario < password >
    ]

### Startapp

Para finalizar dejo los comandos para levantar el proyecto:

- npm install express
- npm install
- npm run dev
- npm run start

Y listo debería darles algunos mensajes de conexión si todo está ok y así puedan ejecutar algunos requests para probar los casos.
