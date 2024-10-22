# Web App Doc 360

## Tecnologias

-   React
-   Vite
-   Bootstrap

## Estructura de carpetas

```bash
--front
    |--public
    |   |-- images
    |--src
    |   |-- assets
    |   |-- components
    |   |       |-- component1
    |   |       |-- component2
    |   |-- pages
    |   |       |-- page1
    |   |       |-- page2
    |   |-- routes
    |   |       routeIndex
    |   |-- models
    |   |       model1
    |   |       model2
    |   |-- helpers
    |   |       helper1
    |   |       helper2
    |   |-- services
    |   |       service1
    |   |       service2
    |   |-- context
    |   |       context
```

-   La carpeta public contendra todos los archivos o configuraciones estaticas que necesite la aplciacion.
-   La carpeta assets tendra todas las imagenes.
-   La carpeta components tendra los componentes con sus respectivos archivos de estilos.
-   La carpeta pages tendra solo las paginas de la aplicación.
-   La carpeta routes tendra las rutas de la aplicación.
-   La carpeta models tendra todos los modelos.
-   La carpeta helpers tendra los archivos de funciones generales para ayudar en el desarrollo.
-   La carpeta services tendra los servicios que se conectaran con back end.
-   La carpeta context tendra incluidos los contextos de la aplicación.

## Github

-   front: Es la rama principal que trabajaremos.

-   Features: Cada feature tendra como titulo la informacion de cual será el cambio a realizar y donde irá implementado con las siglas "front/feature".

-   Bug: Los bugs son errores que deberán ser arreglados en la aplicación detectados por el equipo de QA y que serán parte especifica de la revisión del feature. Existe una posibilidad de que un bug sea a nivel global de la aplicación en tal caso la nomenclatura cambiará y la integracion de la rama será directo con la rama dev.
    -   Ejemplo: "front/bug/dev-bugId"
