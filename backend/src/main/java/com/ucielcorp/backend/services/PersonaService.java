package com.ucielcorp.backend.services;

import com.ucielcorp.backend.models.Persona;
import com.ucielcorp.backend.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService implements PersonaServiceImp {

    // Injectamos el repositorio
    @Autowired
    private PersonaRepository personaRepository;


    @Override
    public List<Persona> getPersonas() {
        return personaRepository.findAll();
    }

    @Override
    public void savePersona(Persona pers) {
        personaRepository.save(pers);

    }

    @Override
    public void deletePersona(Integer id) {
        personaRepository.deleteById(id);

    }

    @Override
    public Persona findPersona(Integer id) {
        return personaRepository.findById(id).orElse(null);
    }
}
