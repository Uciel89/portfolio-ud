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

# Estructura del backend

