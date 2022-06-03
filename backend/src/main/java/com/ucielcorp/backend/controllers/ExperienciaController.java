package com.ucielcorp.backend.controllers;

import com.ucielcorp.backend.models.Experiencia;
import com.ucielcorp.backend.models.Persona;
import com.ucielcorp.backend.repository.PersonaRepository;
import com.ucielcorp.backend.services.ExperienciaServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/mode_edit")
@CrossOrigin(origins = "*")
public class ExperienciaController {

    @Autowired
    ExperienciaServiceImp experienciaServiceImp;

    @Autowired
    PersonaRepository personaRepository;

    /**===/ Métodos HTTP /===**/

    @GetMapping("/experiencia")
    public List<Experiencia> getExperiencia(){
        return experienciaServiceImp.getExperiencia();
    }

    @PostMapping("/crear_experiencia/{id}")
    public String createExperiencia(@RequestBody Experiencia expr, @PathVariable Integer id){

        Persona pers = personaRepository.getById(id);

        // Cargamos la experiencia al usuario que elijamos
        pers.getExperiencias().add(expr);

        experienciaServiceImp.saveExperiencia(expr);

        return "Experiencia creada";
    }

    @DeleteMapping("/eliminar_experiencia/{id}")
    public String deleteExperiencia(@PathVariable Integer id){

        experienciaServiceImp.deleteExperiencia(id);

        return "Experiencia eliminada";
    }

    // Creamos un metodo para editar una persona dentro de la base de datos, filtramos por su id
    @PutMapping("/editar_experiencia")
    public String editarExperiencia (
            @RequestBody Experiencia experiencia
    ){

        // Guardamos las modificaciones
        experienciaServiceImp.saveExperiencia(experiencia);

        return "Experiencia editada";
    }
}
