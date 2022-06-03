package com.ucielcorp.backend.controllers;

import com.ucielcorp.backend.models.Estudio;
import com.ucielcorp.backend.models.Persona;
import com.ucielcorp.backend.repository.PersonaRepository;
import com.ucielcorp.backend.services.EstudioServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/mode_edit")
@CrossOrigin(origins = "*")
public class EstudioController {

    @Autowired
    PersonaRepository personaRepository;

    @Autowired
    EstudioServiceImp estudioServiceImp;

    /**===/ Métodos HTTP /===**/
    @GetMapping("/estudio")
    public List<Estudio> getEstudio(){
        return estudioServiceImp.getEstudio();
    }

    @PostMapping("/crear_estudio/{id}")
    public String createExperiencia(@RequestBody Estudio est, @PathVariable Integer id){

        Persona pers = personaRepository.getById(id);

        // Cargamos la experiencia al usuario que elijamos
        pers.getEstudios().add(est);

        estudioServiceImp.saveEstudio(est);

        return "Estudio creado";
    }

    @DeleteMapping("/eliminar_estudio/{id}")
    public String deleteEstudio(@PathVariable Integer id){

        estudioServiceImp.deleteEstudio(id);

        return "Estudio eliminado";
    }

    // Creamos un metodo para editar una persona dentro de la base de datos, filtramos por su id
    @PutMapping("/editar_estudio")
    public Estudio editarEstudio (
            @RequestBody Estudio estudio
    ){

        // Guardamos las modificaciones
        estudioServiceImp.saveEstudio(estudio);

        return estudio;
    }
}
