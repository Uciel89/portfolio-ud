# Backend
Nos encontramos en las entrañas del proyecto, la que nos permite conectarnos a nuestra base de datos y cumplir la conocida como `arquitectura cliente-servidor`.
Todas estas conexiones se pueden hacer de forma más rápida y eficiente gracias a Spring Boot y JPA.

También va a encontrar todas las configuraciones referidas al apartado de seguridad, como la generación de los tekens, los modelos de datos, etc.

# Iniciar el backend en local ⚙
Primeramente hay que crear una base de datos en mysql, se puede usar tanto `PHPMYADMIN` como `MySQL Workbench`. Por otra parte hay que realizar una modificación al archivo `application.properties`

``` 
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=olivialobo231
```
 - En url, en la parte `//localhost:3306/portfolio_db`, hay que cambiar `portfolio_db` por el nombre de la base de datos que hemos creado en forma local.
 - En username, tienen que colocar su nombre de usuario de su base de datos.
 - En password, cambian la contraseña de su base de datos.

Y además tener un servidor apache, lo pueden tener en `XAMPP` o en mi caso use `Tomcat V8..`, si no, bueno no va a funcionar.

# Estructura del backend 📂
En estructura es parecido al frontend, exceptuando los componentes, modales y archivos estáticos, es decir, tiene `Modelos de datos`, `Servicios`, pero tiene otros que son propios de las configuraciones internas para realizar todas las conexiones pertinentes con nuestras `db`.
Estas subcarpetas son las siguientes:

### Controladores 
Podemos encontrar todas las rutas para poder realizar los diferentes métodos HTTP, los cuales son: `GET` `POST` `PUT` `DELETE` . Y como se puede apreciar, cada modelo de datos tiene un controlador, ya que cada modelo de datos está directamente relacionado con las entidades dentro de la db.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/controllers.png)

### Repositorios
En conjunto con la librería JPA y una interfaz, cuando generamos los servicios podemos llamar a diferentes funciones que nos permiten interactuar con la db, es decir ejecutar consulta SQL y por ejemplo cargar datos en las entidades.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/repository.png)

### Seguridad 
Las configuraciones relacionadas al apartado son muchas, por lo tanto existe una subcarpeta totalmente dedicada a almacenar todos los archivos de configuración de la seguridad, como para generar los tokens en conjunto con `JWT`, hacer validaciones a un usuario y definir si tiene el rol de usuario normal o de administración, esto utilizando el modulo de seguridad de spring -> `Spring Security`, entre otras.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/security_backend.png)


## Rutas del backend 🗺
Hay dos rutas principales al tener en cuenta, la que nos permite hacer el logeo de un usuario almacenado dentro de la base de datos y para generar una usuario
> Una aclaración importante, no hay una interfaz para generar usuarios por temas de restricción, ya que el usuario normal solo tiene acceso al método GET para ver el contenido del portfolio.

Estas rutas son las siguientes: 
 - `http://localhost:8080/auth/nuevoUsuario`
 - `http://localhost:8080/auth/login`

En el código del controlador los podemos encontrar declarados en estos métodos:
``` java
@CrossOrigin
public class AuthController {
  ...
  @PostMapping("/nuevoUsuario")
  public ResponseEntity<?> nuevoUsuario(@Valid @RequestBody NewUser nuevoUsuario,BindingResult bindingResult){...}

  @PostMapping("/login")
  public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUser loginUsuario, BindingResult bindingResult){...}
  ...
}
```
> En la versión online son diferentes 👀, hago la aclaración.

