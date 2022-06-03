package com.ucielcorp.backend.security.services;

import com.ucielcorp.backend.security.models.User;
import com.ucielcorp.backend.security.models.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImp implements UserDetailsService {

    @Autowired
    UserService userService;

    @Override
    public UserDetails loadUserByUsername(String nombreUsuario) throws UsernameNotFoundException {
        User user = userService.getByNombreUsuario(nombreUsuario).get();

        // Construimos el usuario
        return UserPrincipal.build(user);
    }
}
