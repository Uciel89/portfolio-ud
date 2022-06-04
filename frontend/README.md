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

## Estructura del frontend 📦
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
