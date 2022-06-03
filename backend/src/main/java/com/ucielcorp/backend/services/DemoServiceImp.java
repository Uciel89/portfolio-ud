package com.ucielcorp.backend.services;

import com.ucielcorp.backend.models.Demo;

import java.util.List;

public interface DemoServiceImp {

    /** Métodos para interactuar con la base de datos **/

    // Listar los datos de la persona
    List<Demo> getDemo();

    // Guardar una persona
    void saveDemo (Demo demo);

    // Eliminar una persona
    void deleteDemo (Integer id);

    // Encontrar una persona por id
    Demo findDemo (Integer id);
}
