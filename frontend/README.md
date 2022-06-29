# Frontend

Este proyecto está generado con [Angular CLI](https://github.com/angular/angular-cli) versión 13.2.2.

## Iniciar un servidor local ⚙

Puedes usar este comando para poder correr el proyecto de forma local. Se va a generar en el puerto `4200`. Además hay que tener en cuenta las rutas de la aplicación, por lo tanto, la url en la cual van a poder acceder al portfolio es: `http://localhost:4200/portfolio`.
> El -o te abre automaticamente la pagina en tu navegador predeterminado
``` 
ng serve -o 
```
o también la forma más simplificada
```
ng s -o
```
Por otro lado hay que tener en cuenta que tienen que instalar el módulo de node para poder tener angular cli. Entonces en este caso pueden correr el siguiente comando para instalar dicho módulo:
```
npm i @angular/cli 
```

## Estructura del frontend 🏗
En esta sección voy a explicar cada contenido de las carpetas más importantes dentro del frontend (del proyecto en angular).

### Componentes
En esta carpeta podemos encontrar todos los componentes que componen tanto a la pantalla del portafolio principal como al modo de edición, en cada unos de los mismo hay elementos que su visibilidad está administrada según si el usuario se logeo dentro de la aplicación (dentro de la pantalla de login).

![image](https://github.com/Uciel89/Portfolio/blob/main/images/components.png)

### Guard y Interceptor
Aquí podemos encontrar dos archivos muy importantes en el apartado de seguridad de la aplicación web. El guard nos permite restringir acceso a ciertas rutas de la app y el interceptor es el encargado de recibir el token que ingresamos a la hora de logearnos en la app.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/guard_interceptor.png)

### Modals
Los modals (son pantallas emergentes) específicamente en la página de edición, justamente para editar los datos del portfolio, agregar y eliminar. `Si, en el modo edición se puede editar, eliminar y agregar datos`. Algo para aclarar es que cada sección dentro del portfolio existe un modal individual.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/modals.png)

### Models
En este caso, en la carpeta models podemos encontrar los modelos de datos para interactuar justamente con la base de datos, en cuales al traer los datos de la base de datos mediante el backend, guardamos los datos en estos mismos. Y además vamos a ver dos subcarpetas:
- `db_models` -> están todos los modelos para los componentes
- `security_models` -> encontramos los modelos para el apartado de seguridad
- `email_models` -> encontramos el modelo de datos el cual esta relacionado a la estructura a de un correo `email` `name` `subject` `body`

![image](https://github.com/Uciel89/Portfolio/blob/main/images/models.png)

### Páginas 
Podremos encontrar las 3 paginas principales de la aplicación web -> `portfolio` `login` `mode_edit`

![image](https://github.com/Uciel89/Portfolio/blob/main/images/paginas.png)

### Servicios
En este caso encontraremos los archivos de servicio que nos permiten interactuar con nuestro backend a través de una `API REST`. Están divididos en subcarpetas:
-`db` -> todos los servicios relacionados a los componentes de las páginas.
-`security` -> servicios relacionados a la seguridad de la app.
-`email` -> encontramos el servicio que nos permite enviar correos electronicos mediate el formulario de contacto.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/servicios.png)

### Archivos estáticos
Podremos ver todos los archivos estáticos del frontend, tanto archivos JS, de estilos (css), imágenes y documentos.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/estaticos.png)

## Rutas de la app 🔎
Esta aplicación web tiene 3 rutas principales:
 - `http://localhost:4200/portfolio` -> En esta ruta encontramos la pantalla principal. 
 - `http://localhost:4200/portfolio/login` -> Encontramos la pantalla de login.
 - `http://localhost:4200/portfolio/mode_edit` -> Encontramos el modo edición de la aplicación.

La declaración de las rutas las podemos encontrar en el archivo `app-rotuing.module.ts`
``` typescript
const routes: Routes = [
  {
    path: '',
    redirectTo: '/portfolio',
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'portfolio/login',
    component: LoginComponent,
  },
  {
    path: 'portfolio/mode_edit',
    component: ModeEditComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin', 'user'] },
  },
];

```
