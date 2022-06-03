package com.ucielcorp.backend.security.controllers;

import com.ucielcorp.backend.dto.Mensaje;
import com.ucielcorp.backend.security.dto.JwtDto;
import com.ucielcorp.backend.security.dto.LoginUser;
import com.ucielcorp.backend.security.dto.NewUser;
import com.ucielcorp.backend.security.enums.RolNombre;
import com.ucielcorp.backend.security.jwt.JwtProvider;
import com.ucielcorp.backend.security.models.Rol;
import com.ucielcorp.backend.security.models.User;
import com.ucielcorp.backend.security.services.RolService;
import com.ucielcorp.backend.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

/**===/ API REST /===**/

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    /**===/ Componentes /===**/
    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService usuarioService;

    @Autowired
    RolService rolService;

    @Autowired
    JwtProvider jwtProvider;

    /**===/ Generar nuevo usuario /===**/

    //Espera un json y lo convierte a tipo clase NuevoUsuario
    @PostMapping("/nuevoUsuario")
    public ResponseEntity<?> nuevoUsuario(@Valid @RequestBody NewUser nuevoUsuario,
                                          BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return new ResponseEntity<>(new Mensaje("Campos mal o email invalido"), HttpStatus.BAD_REQUEST);
        }
        if(usuarioService.existsByNombreUsuario(nuevoUsuario.getNombreUsuario())){
            return new ResponseEntity<>(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        if(usuarioService.existsByEmail(nuevoUsuario.getEmail())){
            return new ResponseEntity<>(new Mensaje("Ese email ya existe"), HttpStatus.BAD_REQUEST);
        }

        // Creamos un nuevo usuario
        User usuario = new User(nuevoUsuario.getNombre(), nuevoUsuario.getNombreUsuario(),
                nuevoUsuario.getEmail(), passwordEncoder.encode(nuevoUsuario.getPassword()));

        // Asignamos el rol del usuario
        Set<Rol> roles = new HashSet<>();
        roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
        if(nuevoUsuario.getRoles().contains("admin"))
            roles.add(rolService.getByRolNombre(RolNombre.ROLE_ADMIN).get());
        usuario.setRoles(roles);

        // Guardamos el nuevo usuario en la BD
        usuarioService.save(usuario);

        return new ResponseEntity<>(new Mensaje("Usuario creado"), HttpStatus.CREATED);
    }

    /**===/ Iniciar sesión con un usuario ya creado /===**/

    @PostMapping("/login")
    public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUser loginUsuario, BindingResult bindingResult){
        // Verificamos que los campos estén bien
        if (bindingResult.hasErrors())
            return new ResponseEntity(new Mensaje("Campos mal"), HttpStatus.BAD_REQUEST);
        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(loginUsuario.getNombreUsuario(),
                                loginUsuario.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // A partir de la autenticación generamos el token
        String jwt = jwtProvider.generateToken(authentication);

        // Obtenemos el usuario
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        // Creamos el JwtDto
        JwtDto jwtDto = new JwtDto(jwt, userDetails.getUsername(), userDetails.getAuthorities());

        return new ResponseEntity<>(jwtDto, HttpStatus.OK);
    }
}
