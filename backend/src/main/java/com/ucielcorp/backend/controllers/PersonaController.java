package com.ucielcorp.backend.controllers;

import com.ucielcorp.backend.models.Persona;
import com.ucielcorp.backend.services.PersonaServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/mode_edit")
@CrossOrigin(origins = "*")
public class PersonaController {

    @Autowired
    private PersonaServiceImp personaServiceImp;

    /** Métodos http para interactuar con la DB*/

    @GetMapping("/persona")
    public ResponseEntity <List<Persona>> getPersonas (){
        List<Persona> persona = personaServiceImp.getPersonas();
        return new ResponseEntity<List<Persona>>(persona, HttpStatus.OK);
    }

    @GetMapping("/persona_uno/{id}")
    public Persona getOnePersona(@PathVariable Integer id){
        return personaServiceImp.findPersona(id);
    }


    @PostMapping("/crear_persona")
    public String createPersona(@RequestBody Persona pers){
        personaServiceImp.savePersona(pers);

        return "Persona creada";
    }


    @PreAuthorize("hasRole('admin')")
    @DeleteMapping("/eliminar_persona/{id}")
    public String deletePersona(@PathVariable Integer id){

        personaServiceImp.deletePersona(id);

        return "Persona eliminada";
    }

    // Creamos un metodo para editar una persona dentro de la base de datos, filtramos por su id
    // @PreAuthorize("hasRole('admin')")
    @PutMapping("/editar_persona")
    public Persona editarPersona (
            @RequestBody Persona persona
    ){

        // Guardamos las modificaciones
        personaServiceImp.savePersona(persona);

        return persona;
    }
}
