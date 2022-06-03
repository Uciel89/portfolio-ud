package com.ucielcorp.backend.repository;

import com.ucielcorp.backend.models.Demo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DemoRepository extends JpaRepository<Demo, Integer> {

}
