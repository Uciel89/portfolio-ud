# Backend
Nos encontramos en las entrañas del proyecto, la que nos permite conectarnos a nuestra base de datos y cumplir la conocida como `arquitectura cliente-servidor`.
Todas estas conexiones se pueden hacer de forma mas rapida y eficiente gracias a Spring Boot y JPA.

Tambien va a encontrar todas las configuraciones referidas al apartado de seguridad, como la generación de los tekens, los modelos de datos, etc.

# Iniciar el backend en local ⚙
Primermente hay que crear una base de datos en mysql, se puede usar tanto `PHPMYADMIN` como `MySQL Workbench`. Por otra parte hay que realizar una modificacion al archivo `aplication.properties`

``` 
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=olivialobo231
```
 - En url, en la parte `//localhost:3306/portfolio_db`, hay que cambiar `portfolio_db` por el nombre de la base de datos que hemos creado en forma local.
 - En username, tienen que colocar su nombre de usuario de su base de datos.
 - En password, cambian por la contraseña de su base de datos.

Y ademas tener un servidor apache, lo pueden tener en `XAMPP` o en mi caso use `Tomcat V8..`, si no, bueno no va a funcionar.

# Estructura del backend 📂
En estructura es parecido al frontend, exeptuando los componentes, modals y archivos estaticos, es decir, tiene `Modelos de datos`, `Servicios`, pero tiene otros que son porpios de las configuraciones internas para realizar todas las conexiones pertinentes con nuestas `db`.
Estas subcarpetas son las sugientes:

### Controladores 
Podemos encontrar todas las rutas para poder realizar los diferentes metodos HTTP, los cuales son: `GET` `POST` `PULL` `DELETE` . Y como se puede apreciar, cada modelos de datos tiene una controlador, ya que cada modelo de datos esta directamente relacionado con las entidades dentro de la db.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/controllers.png)

### Repositorios
En conjunto con la libreria JPA y una interfaz, cuando generamos los servicios podemos llamar a diferentes funciones que nos permiten interactura con la db, es decir ejecutar consulta SQL y por ejemplo cargar datos en las entidades.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/repository.png)

### Seguridad 
Las configuraciones relacionadas al apartado son muchas, por lo tanto existe una subcarpeta totalmente dedicada a almacenar todos los archivos de configuracion de la seguridad, como para generar los tokens en conjunto con `JWT`, hacer validaciones a un usuario y definir si tiene el rol de usuario normal o de administracion, esto utilizando el modulo de seguridad de spring -> `Spring Security`, entre otras.

![image](https://github.com/Uciel89/Portfolio/blob/main/images/security_backend.png)


## Rutas del backend 🗺
Hay dos rutas principales al tener en cuenta, la que nos permite hacer el logeo de un usuario almacenado dentro de la base de datos y para generar una usuario
> Una aclaracion importante, no hay una interfaz para generar usuarios por temas de restrucción, ya que el usuario normal solo tiene acceso al metodo GET para ver el contenido del portfolio.

Estas rutas son las suguientes: 
 - `http://localhost:8080/auth/nuevoUsuario`
 - `http://localhost:8080/auth/login`

En el codigo del controlador los podemos encontrar declarados en estos metodos:
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
> En la versión online son diferetes 👀, hago la aclaración.
