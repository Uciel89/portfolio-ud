package com.ucielcorp.backend.controllers;

import com.ucielcorp.backend.models.Demo;
import com.ucielcorp.backend.models.Persona;
import com.ucielcorp.backend.repository.PersonaRepository;
import com.ucielcorp.backend.services.DemoServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/mode_edit")
@CrossOrigin(origins = "*")
public class DemoController {

    @Autowired
    PersonaRepository personaRepository;

    @Autowired
    DemoServiceImp demoServiceImp;

    /**===/ Métodos HTTP /===**/
    @GetMapping("/demo")
    public List<Demo> getDemo(){
        return demoServiceImp.getDemo();
    }

    @PostMapping("/crear_demo/{id}")
    public String createDemo(@RequestBody Demo demo, @PathVariable Integer id){

        Persona pers = personaRepository.getById(id);

        pers.getDemos().add(demo);

        demoServiceImp.saveDemo(demo);

        return "Demo creada";
    }

    @DeleteMapping("/eliminar_demo/{id}")
    public String deleteDemo(@PathVariable Integer id){

        demoServiceImp.deleteDemo(id);

        return "Demo eliminada";
    }

    @PutMapping("/editar_demo")
    public Demo editDemo(@RequestBody Demo demo){

        demoServiceImp.saveDemo(demo);

        return demo;
    }

}
