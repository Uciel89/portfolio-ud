package com.ucielcorp.backend.security.repository;

import com.ucielcorp.backend.security.enums.RolNombre;
import com.ucielcorp.backend.security.models.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {
    Optional<Rol> findByRolNombre (RolNombre rolNombre);
}
