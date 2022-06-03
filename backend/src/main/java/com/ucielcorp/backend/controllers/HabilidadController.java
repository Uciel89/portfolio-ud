package com.ucielcorp.backend.controllers;

import com.ucielcorp.backend.models.Habilidad;
import com.ucielcorp.backend.models.Persona;
import com.ucielcorp.backend.repository.PersonaRepository;
import com.ucielcorp.backend.services.HabilidadServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/mode_edit")
@CrossOrigin(origins = "*")
public class HabilidadController {

    @Autowired
    HabilidadServiceImp habilidadServiceImp;

    @Autowired
    PersonaRepository personaRepository;

    @GetMapping("/habilidad")
    public List<Habilidad> getHabilidad(){
        return habilidadServiceImp.getHabilidad();
    }

    @PostMapping("/crear_habilidad/{id}")
    public String createHabilidad(@RequestBody Habilidad habilidad, @PathVariable Integer id ){

        Persona pers = personaRepository.getById(id);

        pers.getHabilidad().add(habilidad);

        habilidadServiceImp.saveHabilidad(habilidad);

        return "Habilidad creada";
    }

    @DeleteMapping("/eliminar_habilidad/{id}")
    public String deleteHablidad(@PathVariable Integer id){

        habilidadServiceImp.deleteHabilidad(id);

        return "Habilidad eliminada";
    }

    @PutMapping("/editar_habilidad")
    public String editarHabilidad(
            @RequestBody Habilidad habilidad
    ){

        habilidadServiceImp.saveHabilidad(habilidad);

        return "Habilidad editada";
    }
}