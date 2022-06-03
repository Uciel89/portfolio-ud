package com.ucielcorp.backend.repository;

import com.ucielcorp.backend.models.Estudio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudioRepository extends JpaRepository<Estudio, Integer> {
}
