package com.ucielcorp.backend.services;

import com.ucielcorp.backend.models.Estudio;
import com.ucielcorp.backend.models.Experiencia;

import java.util.List;

public interface EstudioServiceImp {
    /** Métodos para interactuar con la base de datos **/

    // Listar los datos de la persona
    List<Estudio> getEstudio();

    // Guardar una persona
    void saveEstudio (Estudio est);

    // Eliminar una persona
    void deleteEstudio (Integer id);

    // Encontrar una persona por id
    Estudio findEstudio (Integer id);
}
