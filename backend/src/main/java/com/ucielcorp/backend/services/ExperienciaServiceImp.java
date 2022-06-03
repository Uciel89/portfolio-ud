package com.ucielcorp.backend.services;


import com.ucielcorp.backend.models.Experiencia;
import com.ucielcorp.backend.models.Persona;

import java.util.List;

public interface ExperienciaServiceImp {

    /** Métodos para interactuar con la base de datos **/

    // Listar los datos de la persona
    List<Experiencia> getExperiencia();

    // Guardar una persona
    void saveExperiencia (Experiencia expr);

    // Eliminar una persona
    void deleteExperiencia (Integer id);

    // Encontrar una persona por id
    Experiencia findExperiencia (Integer id);
}
