package com.ucielcorp.backend.repository;

import com.ucielcorp.backend.models.Habilidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HabilidadRepository extends JpaRepository<Habilidad, Integer> {
}
