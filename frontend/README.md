# Frontend

Este proyecto esta generado con [Angular CLI](https://github.com/angular/angular-cli) versión 13.2.2.

## Iniciar un servidor local ⚙

Puedes usar este comando para poder correr el proyecto de forma local. Se va a generar en el puerto `4200`. Ademas hay que tener encuenta las rutas del la aplicación, por lo tanto, la url en la cual van a poder acceder al portfolio es: `http://localhost:4200/portfolio`.
> El -o te abre automaticamente la pagina en tu navegador predeterminado
``` 
ng serve -o 
```
o tambien la forma mas simplificada
```
ng s -o
```
Por otro lado hay que tener en cuenta que tienen que instalar el modulo de node para poder tener angular cli. Entonces en este caso pueden correr el siguiente comando para instar dicho modulo:
```
npm i @angular/cli 
```

## Estructura del frontend 🏗
En esta sección voy a explicar cada contenido de las carpetas mas importantes dentro del frontend (del proyecto en angular).

### Componentes
En esta carpeta podemos encontrar todos los componentes que componen tanto a la pantalla del portofolio principal como al modo de edicioón, en cada unos de los mismo hay elementos que su visibilidad esta administrada segun si el usuario se logeo dentro de la aplicación (dentron de la pantalla de login).

![image](https://github.com/Uciel89/Portfolio/blob/main/images/components.png)

### Guard y Interceptor
Aquí podemos encontrar dos archivos muy importante en el apartado de seguridad de la aplicación web. El guard nos permite restringir accesor a ciertas rutas de la app y el interceptor es el encargado de recibir el token que ingresamos a la hora de logearnos en la app.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/guard_interceptor.png)

### Modals
Los modals (son pantallas emergentes) especificamente en el pagina de edición, justamente para editar los datos del portfolio, agregar y eliminar. `Si, en el modo edición se puede editar, eliminar y agregar datos`. Algo para aclarar es que cada sección dentro del portfolio existe un modal individual.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/modals.png)

### Models
En este caso, en la carpeta models podemos encontrar los modelos de datos para interactuar justamente con la base de datos, en cuales al traer los datos de la base de datos mediante el backend, guardamos los datos en estos mismos. Y ademaas vamos a ver dos subcarpetas, una es `db_models` -> estan todos los modelos para los componentes y `security_models` -> encontramos los modelos para el apartado de seguridad.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/models.png)

### Paginas 
Podremos encontrar las 3 paginas principales de la aplicación web -> `portfolio` `login` `mode_edit`

![image](https://github.com/Uciel89/Portfolio/blob/main/images/paginas.png)

### Servicios
En este caso encontraremos los archivos de servicio que nos permiten interactuar con nuestro backend atraves de una `API REST`. Estan divididos en subcarpetas, por un lado tenemos `db` -> todos los servicios relacionado a los componentes de las paginas y `security` -> servicios relacionados a la seguridad de la app.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/servicios.png)

### Archivos estaticos
Podremos ver todos los archivos estaticos del forntend, tanto archivos JS, de estilos (css), imagenes y documentos.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/estaticos.png)

## Rutas de la app 🔎


