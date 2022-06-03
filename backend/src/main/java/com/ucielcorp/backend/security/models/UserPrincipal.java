package com.ucielcorp.backend.security.models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class UserPrincipal implements UserDetails {

    private String nombre;
    private String nombreUsuarios;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public UserPrincipal(String nombre, String nombreUsuarios, String email, String password, Collection<? extends GrantedAuthority> authorities) {
        this.nombre = nombre;
        this.nombreUsuarios = nombreUsuarios;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }

    // Método para asignar los privilegios a cada usuario
    public static UserPrincipal build(User user){
        // Lista en donde obtener todos los usuario y con sus roles
        List<GrantedAuthority> authorities =
                // Estamos convirtiendo la clase Rol, en la clase GrantedAuthority
                user.getRoles().stream().map(rol -> new SimpleGrantedAuthority(
                        rol.getRolNombre().name())).collect(Collectors.toList());

        // Retornamos un usuario principal con todos sus campos
        return new UserPrincipal(
                user.getNombre(),
                user.getNombreUsuario(),
                user.getEmail(),
                user.getPassword(),
                authorities);
    }

    /**===/ Métodos de UserDatails para establecer la seguridad de nuestra app /===**/
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return nombreUsuarios;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getNombre() {
        return nombre;
    }

    public String getEmail() {
        return email;
    }
}
