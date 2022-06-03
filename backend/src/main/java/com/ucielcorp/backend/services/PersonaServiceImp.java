package com.ucielcorp.backend.services;

import com.ucielcorp.backend.models.Persona;

import java.util.List;

public interface PersonaServiceImp {

    /** Métodos para interactuar con la base de datos **/

    // Listar los datos de la persona
    List <Persona> getPersonas();

    // Guardar una persona
    void savePersona (Persona pers);

    // Eliminar una persona
    void deletePersona (Integer id);

    // Encontrar una persona por id
    Persona findPersona (Integer id);

}
