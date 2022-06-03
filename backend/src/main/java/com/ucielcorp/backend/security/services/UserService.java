package com.ucielcorp.backend.security.services;

import com.ucielcorp.backend.security.models.User;
import com.ucielcorp.backend.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
// Es para evitar incoherencias dentro de la tabla. Si falla una operación se realiza un RollBack
// Y se vuelve al estado anterior
@Transactional
public class UserService {

    @Autowired
    UserRepository userRepository;

    /**===/ Métodos para interactuar con la DB /===**/

    // Método para obtener los nombres unicos de los usuarios
    public Optional<User> getByNombreUsuario(String nombreUsuario){
        return userRepository.findByNombreUsuario(nombreUsuario);
    }

    // Métodos para verificar si existen los usuarios
    public boolean existsByNombreUsuario(String nombreUsuario){
        return userRepository.existsByNombreUsuario(nombreUsuario);
    }

    // Método para verificar si existe el email del usuario
    public boolean existsByEmail(String email){
        return userRepository.existsByEmail(email);
    }

    // Método para guardar un usuario dentro de la tabla User
    public  void save(User user){
        userRepository.save(user);
    }
}
