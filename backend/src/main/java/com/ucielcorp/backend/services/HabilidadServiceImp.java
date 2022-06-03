package com.ucielcorp.backend.services;

import com.ucielcorp.backend.models.Habilidad;
import com.ucielcorp.backend.models.Persona;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface HabilidadServiceImp {

    /** Métodos para interactuar con la base de datos **/

    // Listar los datos de la persona
    List<Habilidad> getHabilidad();

    // Guardar una persona
    void saveHabilidad (Habilidad habilidad);

    // Eliminar una persona
    void deleteHabilidad (Integer id);

    // Encontrar una persona por id
    Habilidad findHabilidad (Integer id);

}
