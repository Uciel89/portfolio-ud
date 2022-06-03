package com.ucielcorp.backend.security.repository;

import com.ucielcorp.backend.security.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByNombreUsuario(String nombreUsuario);

    // Hacemos una validación para verificar que el usuario existe
    boolean existsByNombreUsuario(String nombreUsuario);
    boolean existsByEmail(String email);
}
